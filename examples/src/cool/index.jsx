import './index.scss';
import React, {Component} from 'react';
import {Button, Coolpanel} from 'components';
import className from 'classnames';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            contentStatus: ''
        };
    }

    onOpen () {
        this.setState({
            contentStatus: 'in'
        });
    }

    beforeClose (done) {
        this.setState({
            contentStatus: 'out'
        });

        setTimeout(() => {
            done();
        }, 400);
    }

    render () {
        // 这部分动画实现可以自定义
        const contentClassName = className({
            'cool-content': true,
            [`cool-content--${this.state.contentStatus}`]: true
        });
        return (
            <div className="demo demo--coolpanel">
                <h1 className="demo-title">Coolpanel</h1>
                <div className="demo-description">
                    <p>一个很cool的面板交互方式<br/> Math.pow 实现Canvas画圆的easeIn、easeOut动画效果</p>
                    <Button className="cooCoolpanel-target">打开一个很酷的面板</Button>
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            点一下右边的按钮试一下➹
                            <Coolpanel fillColor="255, 231, 11"
                                       beforeClose={this.beforeClose.bind(this)}
                                       onOpen={this.onOpen.bind(this)}>
                                <div className={contentClassName}>
                                    <div>我是标题</div>
                                    <div>我是标题</div>
                                    <div>我是标题</div>
                                    <div>我是标题</div>
                                    <div>我是标题</div>
                                </div>
                            </Coolpanel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

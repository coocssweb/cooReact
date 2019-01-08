import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import {Button, Coolpanel} from 'components';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="demo demo--coolpanel">
                <h1 className="demo-title">Coolpanel</h1>
                <div className="demo-description">
                    <p>一个很cool的面板交互方式</p>
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            <Button className="coo-coolpanel-target">打开一个很酷的面板</Button>
                            <Coolpanel>
                                <div className="cool-content">
                                    <div className="cool-title">我是标题</div>
                                    <div className="cool-description">
                                        我是内容，我是内容，我是内容，我是内容，我是内容，我是内容，我是内容，我是内容，我是内容！<br />
                                        我是内容，我是内容，我是内容，我是内容，我是内容，我是内容，我是内容，我是内容，我是内容！<br />
                                    </div>
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

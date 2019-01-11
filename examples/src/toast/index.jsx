import './index.scss';
import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Code from '../code';
import {Button, Toast} from 'components';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentWillUnmount () {
        this.onCloseLoading();
    }

    onShowLoading () {
        if (this.loadingRef) {
            return;
        }
        Toast.loading('加载中...', {duration: 0}, (loadingRef) => {
            this.loadingRef = loadingRef;
        });
    }

    onCloseLoading () {
        this.loadingRef && this.loadingRef.close();
        this.loadingRef = null;
    }

    render () {
        return (
            <div className="demo demo--toast">
                <h1 className="demo-title">Toast 组件</h1>
                <div className="demo-description">
                    Toast 组件的相关设置
                    <br />
                    tip: 可以通过外部代码调用主动关闭（fn => ref），可以清除全部的toast（Toast.destroy）
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            <Button onClick={() => {
                                Toast.tip('打开提示框');
                            }}>Toast.tip</Button>
                            <Button onClick={() => {
                                Toast.tip('打开提示框', {closable: true});
                            }}>可关闭</Button>
                        </div>

                        <div className="panel-line">
                            <Button onClick={this.onShowLoading.bind(this)}>Toast.loading</Button>
                            <Button onClick={this.onCloseLoading.bind(this)}>close左边的loading</Button>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <h2 className="panel-title">代码展示</h2>
                    <div className="panel-content">
                        <Code>
                            {
`// Toast默认是单例的，可以调用Toast.destroy销毁全部Toast，下次打开的时候，会重新创建组件
// Tip提示框
<Button onClick={() => {
Toast.tip('打开提示框', {closable: true});
}}>可关闭</Button>
// loading加载框
<Button onClick={this.onShowLoading.bind(this)}>Toast.loading</Button>
<Button onClick={this.onCloseLoading.bind(this)}>close左边的loading</Button>`
                            }
                        </Code>
                    </div>
                </div>

                <div className="panel">
                    <h2 className="panel-title">属性</h2>
                    <div className="panel-content">
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

import './index.scss';
import React, {Component} from 'react';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="demo demo--home">
                <h1 className="demo-title">什么呢？</h1>
                <div className="demo-description">
                    <p>决定，用React 16改造下，之前写的一些React组件！由于一些原因，有大概半年的时间没有用React写项目了。</p>
                    <p>继续造一些轮子，也借此机会，从新写优雅的React。</p>
                </div>
                <div className="panel">
                    <h2 className="panel-title">关于代码</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            API方面有借鉴到<a href="https://ant.design/docs/react/customize-theme-cn" target="_blank">Ant Design</a>，<a href="http://element.eleme.io/#/zh-CN/component/installation" target="_blank">element-ui</a>，
                            翻阅了一些源码！
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">关于Icons</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            Icon主要用了<a href="https://material.io/tools/icons/?style=baseline" target="_blank">Material Icons</a>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">关于动画</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            动画实现方面，主要用<a href="https://github.com/reactjs/react-transition-group" target="_blank">react-transition-group</a>实现
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">即将开发？</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            很多
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">关于文档</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            还在完善
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;

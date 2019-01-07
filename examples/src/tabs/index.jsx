import './index.scss';
import React, {Component} from 'react';
import {Tabs} from 'components';
const TabItem = Tabs.TabItem;

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="demo demo--tabs">
                <h1 className="demo-title">Tabs 组件</h1>
                <div className="demo-description">
                    Tabs 组件的相关设置
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                        <div className="tabBox">
                            <Tabs>
                                <TabItem header="tab-01">
                                    <div className="tabContent tabContent--01">
                                        内容一
                                    </div>
                                </TabItem>
                                <TabItem header="tab-02tab-02">
                                    <div className="tabContent tabContent--02">
                                        内容二
                                    </div>
                                </TabItem>
                                <TabItem header="tab-03">
                                    <div className="tabContent tabContent--03">
                                        内容三
                                    </div>
                                </TabItem>
                            </Tabs>
                        </div>
                    </div>
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

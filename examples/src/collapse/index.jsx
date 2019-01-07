import React, {Component} from 'react';
import {Collapse} from 'components';
const Panel = Collapse.Panel;

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="demo demo--collapse">
                <h1 className="demo-title">Drawer抽屉</h1>
                <div className="demo-description">
                    抽屉组件的相关设置
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <Collapse accordion defaultActiveKey={['1']} forceRender={false}>
                            <Panel header="header first" key="1">
                                <div className="">
                                    内容1
                                </div>
                            </Panel>
                            <Panel header="second first" key="2">
                                <div className="">
                                    内容2
                                </div>
                            </Panel>
                            <Panel header="third first" key="3">
                                <div className="">
                                    内容3
                                </div>
                            </Panel>
                        </Collapse>
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

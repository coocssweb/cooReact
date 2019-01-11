import React, {Component} from 'react';
import {Collapse} from 'components';
import Code from '../code';
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
                        <div className="panel-line">
                            <Collapse accordion defaultActiveKey={['1']} forceRender={false}>
                                <Panel header="手风琴 first" key="1">
                                    <div className="">
                                        内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1内容1<br />内容1<br />内容1
                                    </div>
                                </Panel>
                                <Panel header="手风琴 second" key="2">
                                    <div className="">
                                        内容2<br />内容2
                                    </div>
                                </Panel>
                                <Panel header="手风琴 third" key="3">
                                    <div className="">
                                        内容3
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                        <div className="panel-line">
                            <Collapse forceRender={false}>
                                <Panel header="普通 first first" key="1">
                                    <div className="">
                                        内容1<br />内容1<br />内容1<br />内容1
                                    </div>
                                </Panel>
                                <Panel header="普通 second" key="2">
                                    <div className="">
                                        内容2<br />内容1
                                    </div>
                                </Panel>
                                <Panel header="普通 third" key="3">
                                    <div className="">
                                        内容3
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">代码展示</h2>
                    <div className="panel-content">
                        <Code>
                            {
`<Collapse accordion defaultActiveKey={['1']} forceRender={false}>
    <Panel header="手风琴 first" key="1">
        <div className="">
            内容1
        </div>
    </Panel>
    <Panel header="手风琴 second" key="2">
        <div className="">
            内容2
        </div>
    </Panel>
    <Panel header="手风琴 third" key="3">
        <div className="">
            内容3
        </div>
    </Panel>
</Collapse>`
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

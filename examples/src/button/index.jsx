import './index.scss';
import React, {Component} from 'react';
import Code from '../code';
import {Button, Icon} from 'components';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="demo demo--button">
                <h1 className="demo-title">Button按钮</h1>
                <div className="demo-description">
                    按钮组件的相关设置
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-litetitle">基础样式</div>
                        <div className="panel-line">
                            <Button>按钮</Button>
                            <Button type="danger">按钮</Button>
                            <Button type="success">按钮</Button>
                            <Button type="normal">按钮</Button>
                            <Button size="large">大一点按钮</Button>
                        </div>
                        <div className="panel-litetitle">实心样式</div>
                        <div className="panel-line">
                            <Button fill>按钮</Button>
                            <Button fill type="danger">按钮</Button>
                            <Button fill type="success">按钮</Button>
                            <Button fill type="normal">按钮</Button>
                            <Button fill size="large">按钮</Button>
                        </div>

                        <div className="panel-litetitle">带Icon</div>
                        <div className="panel-line">
                            <Button><Icon type="add" />按钮</Button>
                            <Button loading>加载中</Button>
                            <Button disabled><Icon type="add" />禁用</Button>
                        </div>

                        <div className="panel-litetitle">圆形</div>
                        <div className="panel-line">
                            <Button circle><Icon type="add" /></Button>
                            <Button circle type="danger"><Icon type="add" /></Button>
                            <Button circle type="success"><Icon type="add" /></Button>
                            <Button circle type="normal"><Icon type="add" /></Button>
                            <Button circle size="large"><Icon type="add" /></Button>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">代码展示</h2>
                    <div className="panel-content">
                        <Code>
                            {
`<Button type="success">按钮</Button>
<Button type="normal">按钮</Button>
<Button loading>加载中</Button>
<Button disabled><Icon type="add" />禁用</Button>`
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

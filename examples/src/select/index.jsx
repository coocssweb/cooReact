import React, { Component } from 'react';
import './index.scss';
import Code from '../code';
import { Select } from 'components';
const { Option } = Select;

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            menus: []
        };
    }

    onChange () {

    }

    onPush () {
        this.setState((prevState) => {
            return {
                menus: prevState.menus.concat({value: 4, label: '四'})
            };
        });
    }

    render () {
        return (
            <div className="demo demo--drawer">
                <h1 className="demo-title">Select选择器</h1>
                <div className="demo-description">
                    Select组件的相关设置
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            <Select onChange={this.onChange.bind(this)}>
                                <Option value="1">一</Option>
                                <Option value="2">二</Option>
                                <Option value="3">三</Option>
                                {
                                    this.state.menus.map((menu) => {
                                        return (<Option key={menu.value} value={menu.value}>{menu.label}</Option>);
                                    })
                                }
                            </Select>
                        </div>
                        <div className="panel-line">
                            <Select onChange={this.onChange.bind(this)}
                                    defaultValue="1"
                                    disabled>
                                <Option value="1">禁用的状态</Option>
                                <Option value="2">二</Option>
                                <Option value="3">三</Option>
                                {
                                    this.state.menus.map((menu) => {
                                        return (<Option key={menu.value} value={menu.value}>{menu.label}</Option>);
                                    })
                                }
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">代码展示</h2>
                    <div className="panel-content">
                        <Code>
                            {
`<Select onChange={this.onChange.bind(this)}>
<Option value="1">一</Option>
<Option value="2">二</Option>
<Option value="3">三</Option>
{
    this.state.menus.map((menu) => {
        return (<Option key={menu.value} value={menu.value}>{menu.label}</Option>);
    })
}
</Select>`
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

import React, { Component } from 'react';
import './index.scss';
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
            <div className="select">
                <Select onChange={this.onChange.bind(this)} defaultValue="1">
                    <Option value="1">一</Option>
                    <Option value="2">二</Option>
                    <Option value="3">三</Option>
                    {
                        this.state.menus.map((menu) => {
                            return (<Option key={menu.value} value={menu.value}>{menu.label}</Option>);
                        })
                    }
                </Select>
                <a href="javascript:;" onClick={this.onPush.bind(this)}>添加项目</a>
            </div>
        );
    }
}

export default Index;

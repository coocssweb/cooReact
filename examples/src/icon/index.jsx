import './index.scss';
import React, {Component} from 'react';
import Code from '../code';
import {Icon} from 'components';
const ICON_LIST = [
    'loading',
    'home',
    'save',
    'save-filled',
    'more',
    'more-h',
    'circle-add',
    'home-filled',
    'circle-remove',
    'circle-remove-filled',
    'circle-add-filled',
    'remove',
    'visible-off',
    'visible',
    'info',
    'circle-good',
    'good',
    'delete',
    'notify',
    'help-filled',
    'circle-close',
    'help',
    'up',
    'right',
    'left',
    'down',
    'close',
    'add'
];

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="demo demo--button">
                <h1 className="demo-title">Icon 组件</h1>
                <div className="demo-description">
                    Icon 组件的相关设置
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <ul className="icon-list">
                            {
                                ICON_LIST.map((item) => {
                                    return (
                                        <li key={item} className="icon-item">
                                            <Icon type={item}></Icon>
                                            <span className="icon-name">{item}</span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="panel">
                    <h2 className="panel-title">代码展示</h2>
                    <div className="panel-content">
                        <Code>
{
`<Icon type="loading"></Icon>
<Icon type="home"></Icon>`
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

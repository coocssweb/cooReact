import React, {Component} from 'react';
import './index.scss';
import {Switch} from 'components';

class index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    onChange () {

    }

    render () {
        return (
            <div className="demo demo--switch">
                <h1 className="demo-title">Modal 组件</h1>
                <div className="demo-description">
                    Modal 组件的相关设置
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            <Switch/>
                            <Switch defaultChecked/>
                            <Switch defaultChecked type='success' />
                            <Switch defaultChecked type='error' />
                        </div>
                        <div className="panel-line">
                            <Switch defaultChecked type='success' checkedText="开" uncheckedText="关" />
                        </div>
                        <div className="panel-line">
                            <Switch disabled/>
                            <Switch defaultChecked disabled/>
                            <Switch defaultChecked type='success' disabled />
                            <Switch defaultChecked type='error' disabled />
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

export default index;

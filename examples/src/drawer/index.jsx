import React, {Component} from 'react';
import {Drawer, Button} from 'components';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            placement: 'right',
            visible: false
        };
    }

    onOpen (placement) {
        this.setState({
            placement: placement,
            visible: true
        });
    }

    render () {
        const state = this.state;
        return (
            <div className="demo demo--drawer">
                <h1 className="demo-title">Drawer抽屉</h1>
                <div className="demo-description">
                    抽屉组件的相关设置
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            <Button onClick={this.onOpen.bind(this, 'top')}>打开上抽屉</Button>
                        </div>

                        <div className="panel-line">
                            <Button onClick={this.onOpen.bind(this, 'right')}>打开右抽屉</Button>
                        </div>

                        <div className="panel-line">
                            <Button onClick={this.onOpen.bind(this, 'bottom')}>打开下抽屉</Button>
                        </div>

                        <div className="panel-line">
                            <Button onClick={this.onOpen.bind(this, 'left')}>打开左抽屉</Button>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">属性</h2>
                    <div className="panel-content">

                    </div>
                </div>
                <Drawer placement={state.placement} visible={state.visible}>
                    <div className="drawer-content">
                        这是窗口内的内容
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Index;

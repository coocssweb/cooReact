import React, {Component} from 'react';
import {Drawer} from 'components';
import ReactDOM from 'react-dom';

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
            <div className="drawer">
                <a href="javascript:;" onClick={this.onOpen.bind(this, 'top')}>打开上抽屉</a>
                <br />
                <a href="javascript:;" onClick={this.onOpen.bind(this, 'right')}>打开右抽屉</a>
                <br />
                <a href="javascript:;" onClick={this.onOpen.bind(this, 'bottom')}>打开下抽屉</a>
                <br />
                <a href="javascript:;" onClick={this.onOpen.bind(this, 'left')}>打开左抽屉</a>
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

import React, {Component} from 'react';
import {Modal} from 'components';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
            visible: false
        };
    };

    onOpen () {
        this.setState({
            visible: true
        });
    }

    onOk () {
        setTimeout(() => {
            this.setState({
                visible: false
            });
        }, 3000);
    }

    render () {
        return (
            <div className="modal">
                <Modal visible={this.state.visible}
                       onOk={this.onOk.bind(this)}>
                    <p>这是内容</p>
                    <p>这是内容</p>
                    <p>这是内容</p>
                    <p>这是内容</p>
                </Modal>
                <button onClick={this.onOpen.bind(this)}>打开Modal</button>
            </div>
        );
    }
}

export default Index;

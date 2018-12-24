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
                <br />
                <button onClick={this.onOpen.bind(this)}>打开Modal</button>
                <br />
                <br />
                <button onClick={() => {
                    Modal.success({title: '成功了', content: '我成功了来了'});
                }}>代码内打开</button>
                <div style={{height: '2000px'}}></div>
            </div>
        );
    }
}

export default Index;

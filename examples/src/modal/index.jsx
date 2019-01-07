import React, {Component} from 'react';
import {Modal, Button} from 'components';

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
            <div className="demo demo--button">
                <h1 className="demo-title">Modal 组件</h1>
                <div className="demo-description">
                    Modal 组件的相关设置
                </div>
                <div className="panel">
                    <h2 className="panel-title">演示</h2>
                    <div className="panel-content">
                        <div className="panel-line">
                            <Button onClick={this.onOpen.bind(this)}>打开Modal</Button>
                        </div>
                        <div className="panel-line">
                            <Button onClick={() => {
                                Modal.success({title: '成功了', content: '我成功了'});
                            }}>成功</Button>
                            <Button onClick={() => {
                                Modal.info({title: '信息', content: '信息来了'});
                            }}>信息</Button>
                            <Button onClick={() => {
                                Modal.error({title: '失败了', content: '我失败了'});
                            }}>失败</Button>
                            <Button onClick={() => {
                                Modal.warning({title: '警告', content: '警告来了'});
                            }}>警告</Button>
                        </div>

                    </div>
                </div>
                <Modal visible={this.state.visible}
                       title="我是标题"
                       onOk={this.onOk.bind(this)}>
                    <p>这是内容</p>
                    <p>这是内容</p>
                    <p>这是内容</p>
                    <p>这是内容</p>
                </Modal>
            </div>
        );
    }
}

export default Index;

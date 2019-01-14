import React, {Component} from 'react';
import Code from '../code';
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
        }, 1000);
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
                            }}>成功(Modal.success)</Button>
                            <Button onClick={() => {
                                Modal.info({title: '信息', content: '信息来了'});
                            }}>信息(Modal.info)</Button>
                            <Button onClick={() => {
                                Modal.error({title: '失败了', content: '我失败了'});
                            }}>失败(Modal.error)</Button>
                            <Button onClick={() => {
                                Modal.warning({title: '警告', content: '警告来了'});
                            }}>警告(Modal.warning)</Button>
                        </div>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">代码展示</h2>
                    <div className="panel-content">
                        <Code>
                            {
`// 普通组件调用形式
<Modal visible={this.state.visible}
       title="我是标题"
       okText='1s后关'
       onOk={this.onOk.bind(this)}>
    <p>这是内容</p>
    <p>这是内容</p>
    <p>这是内容</p>
    <p>这是内容</p>
</Modal>

// 开放5个方法
// 成功Modal
<Button onClick={() => {
    Modal.success({title: '成功了', content: '我成功了'});
}}>成功(Modal.success)</Button>

// 信息Modal
<Button onClick={() => {
    Modal.info({title: '信息', content: '信息来了'});
}}>信息(Modal.info)</Button>

// ......
// 还有Modal.error、Modal.confirm`
                            }
                        </Code>
                    </div>
                </div>
                <div className="panel">
                    <h2 className="panel-title">属性</h2>
                    <div className="panel-content">

                    </div>
                </div>
                <Modal visible={this.state.visible}
                       title="我是标题"
                       okText='1s后关'
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

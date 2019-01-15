import React, {Component} from 'react';
import propTypes from 'prop-types';
import Content from './Content';

class Modal extends Component {
    constructor (props) {
        super(props);
        this.haveOpened = false;
        this.state = {
            haveDestroy: false
        };
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.visible && nextProps.destroyOnClose) {
            this.setState({
                haveDestroy: false
            });
        }
    }

    afterClose () {
        const props = this.props;
        this.setState({
            haveDestroy: true
        });
        if ('afterDestroy' in props) {
            props.afterDestroy();
        }
    }

    render () {
        const props = this.props;
        this.haveOpened = this.haveOpened || props.visible;

        if (this.state.haveDestroy) {
            return null;
        }

        if (this.haveOpened) {
            return (
                <Content {...props} afterClose={this.afterClose.bind(this)}>
                    {
                        props.children
                    }
                </Content>
            );
        }

        return null;
    }
}

Modal.defaultProps = {
    visible: false,
    width: 550,
    okText: '确认',
    cancelText: '取消',
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    toast: false,
};

Modal.propTypes = {
    visible: propTypes.bool,                            // 是否可见
    width: propTypes.number,                            // 宽度
    okText: propTypes.string,                           // 确认按钮文案
    cancelText: propTypes.string,                       // 取消按钮文案
    onOk: propTypes.func,                               // 确认回调
    onCancel: propTypes.func,                           // 取消回调
    closable: propTypes.bool,                           // 显示关闭按钮
    maskClosable: propTypes.bool,                       // 点击mask可关闭
    destroyOnClose: propTypes.bool,                     // 关闭后销毁组件
    toast: propTypes.bool,                              // 消息弹框
};

export default Modal;

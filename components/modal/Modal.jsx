import React, {Component} from 'react';
import propTypes from 'prop-types';
import Content from './Content';

class Modal extends Component {
    constructor (props) {
        super(props);
        this.haveOpened = false;
    }

    render () {
        const props = this.props;
        this.haveOpened = this.haveOpened || props.visible;

        if (this.haveOpened) {
            return (
                <Content {...props}>
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
    width: 500,
    okText: '确认',
    cancelText: '取消',
    closable: true,
    maskClosable: true,
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
};

export default Modal;

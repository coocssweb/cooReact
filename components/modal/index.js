/**
 * Created by coocss on 2018/12/24.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './Modal';
import Icon from '../icon';
import className from 'classnames';

const modalProps = {
    success: {
        okText: '知道了',
        cancelText: '',
        iconType: 'circle-good'
    },
    info: {
        okText: '知道了',
        cancelText: '',
        iconType: 'info'
    },
    error: {
        okText: '知道了',
        cancelText: '',
        iconType: 'circle-close'
    },
    confirm: {
    },
    warning: {
        okText: '知道了',
        cancelText: '',
        iconType: 'help'
    }
};

// 渲染Modal窗口到document
// 销毁后直接移除节点
function renderModal ({title, content}, type) {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const prefixCss = `cooModal-toast`;

    function afterDestroy () {
        document.body.removeChild(div);
    }

    const modalContent = (
        <Modal visible={true}
               destroyOnClose={true}
               afterDestroy={afterDestroy}
               closable={false}
               width={400}
               toast
               {...modalProps[type]}>
                <Icon type={modalProps[type].iconType}/>
                <div className={className(`${prefixCss}-title`)}>
                    {title}
                </div>
                <div className={className(`${prefixCss}-content`)}>
                    {content}
                </div>
        </Modal>
    );

    ReactDOM.render(modalContent, div);
}

// 成功弹框
Modal.success = ({title, content}) => {
    renderModal({title, content}, 'success');
};

// 信息弹框
Modal.info = ({title, content}) => {
    renderModal({title, content}, 'info');
};

// 错误弹框
Modal.error = ({title, content}) => {
    renderModal({title, content}, 'error');
};

// 确认窗口
Modal.confirm = ({title, content}) => {
    renderModal({title, content}, 'confirm');
};

// 警告窗口
Modal.warning = ({title, content}) => {
    renderModal({title, content}, 'warning');
};

export default Modal;

/**
 * Created by coocss on 2019/1/7.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Toast from './Toast';

// 创建新实例
const newInstance = function (fn) {
    // Toast创建容器
    const toastRoot = document.createElement('div');
    toastRoot.className = 'cooToast-container';
    Toast.domContainer = toastRoot;
    document.body.appendChild(toastRoot);
    let called = false;

    function ref (toast) {
        if (called) {
            return;
        }
        called = true;
        fn({
            add (props) {
                toast.add(props);
            },
            remove (key) {
                toast.remove(key);
            },
            destroy () {
                ReactDOM.unmountComponentAtNode(toastRoot);
                document.body.removeChild(toastRoot);
            }
        });
    }

    ReactDOM.render((<Toast ref={ref} />), toastRoot);
};

// 初始化
let _toast;

const _addToast = (content, type, option, fn) => {
    if (!_toast) {
        newInstance((toast) => {
            _toast = toast;
            Toast.destroy = _toast.destroy;
        });
    }

    let {onClose, duration = 3000, closable = false} = option;
    _toast.add({
        content,
        duration,
        closable,
        onClose,
        type,
        fn
    });
};

Toast.tip = function (content, option = {}, fn = () => {}) {
    if (!content) {
        return false;
    }

    _addToast(content, 'tip', option, fn);
};

Toast.loading = function (content, option = {}, fn = () => {}) {
    _addToast(content, 'loading', option, fn);
};

export default Toast;

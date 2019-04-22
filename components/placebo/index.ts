/**
 * Created by coocss on 2019/1/11.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import Placebo from './Placebo';

let _placebo;

const newInstancePlacebo = ({fillColor}) => {
    const root = document.createElement('div');
    root.className = 'cooPlacebo-container';
    Placebo.domContainer = root;
    document.body.appendChild(root);
    let called = false;

    const ref = (placebo) => {
        if (called) {
            return false;
        }
        called = true;
        _placebo = placebo;
    };

    ReactDOM.render(
        (
            <Placebo fillColor={fillColor} ref={ref} />
        ),
        root);
};

Placebo.open = (options = {fillColor: '66, 133, 244'}) => {
    // 只会创建一次
    if (!_placebo) {
        newInstancePlacebo(options);
    } else {
        _placebo.open(options);
    }
};

Placebo.close = () => {
    if (_placebo) {
        _placebo.close();
    }
};

// 销毁
// 移除dom，的同时销毁已经创建的Placebo组件
Placebo.destroy = () => {
    if (_placebo) {
        ReactDOM.unmountComponentAtNode(Placebo.domContainer);
        document.body.removeChild(Placebo.domContainer);
    }
};

export default Placebo;

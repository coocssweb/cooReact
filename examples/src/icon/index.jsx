import './index.scss';
import React, {Component} from 'react';
import {Icon} from 'components';
const ICON_LIST = [
    'loading',
    'home',
    'save',
    'save-filled',
    'more',
    'more-h',
    'circle-add',
    'home-filled',
    'circle-remove',
    'circle-remove-filled',
    'circle-add-filled',
    'remove',
    'visible-off',
    'visible',
    'info',
    'circle-good',
    'good',
    'delete',
    'notify',
    'help-filled',
    'circle-close',
    'help',
    'up',
    'right',
    'left',
    'down',
    'close',
    'add'
];

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="demo demo--icon">
                <ul className="icon-list">
                    {
                        ICON_LIST.map((item) => {
                            return (
                                <li key={item} className="icon-item">
                                    <Icon type={item}></Icon>
                                    <span className="icon-name">{item}</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Index;

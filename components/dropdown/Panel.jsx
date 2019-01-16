import React, {Component} from 'react';
import ReactDom from 'react-dom';
import propTypes from 'prop-types';
import className from 'classnames';
import onClickOutside from 'react-onclickoutside';

class Panel extends Component {
    constructor (props) {
        super(props);
        this.el = document.createElement('div');
        this.state = {};
    }

    componentDidMount () {
        document.body.appendChild(this.el);
    }

    componentWillUnmount () {
        document.body.removeChild(this.el);
    }

    handleClickOutside (evt) {
        this.props.onOutsideClick(evt);
    }

    render () {
        return ReactDom.createPortal(this.props.children, this.el);
    }
}

export default onClickOutside(Panel);

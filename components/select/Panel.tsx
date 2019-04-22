import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
        let props = this.props;

        return ReactDOM.createPortal(
            props.children,
            this.el
        );
    }
}

export default onClickOutside(Panel);

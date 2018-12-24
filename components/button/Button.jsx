import React, {Component} from 'react';

class Button extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    onClick () {
        const props = this.props;
        if ('onClick' in props) {
            props.onClick();
        }
    }

    render () {
        return (
            <button onClick={this.onClick.bind(this)}>
                <span>{ this.props.children }</span>
            </button>
        );
    }
}

export default Button;

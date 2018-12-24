import React, {Component} from 'react';

class Button extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    onClick () {

    }

    render () {
        return (
            <button onClick={this.onClick.bind(this)}>
                <span>{ props.text }</span>
            </button>
        );
    }
}

export default Button;

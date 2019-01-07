import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';

class Icon extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const iconClassName = className({
            'cooIcon': true,
            [`cooIcon-${this.props.type}`]: true
        });
        return (
            <i className={iconClassName} />
        );
    }
}

Icon.propTypes = {
    type: propTypes.string
};

export default Icon;

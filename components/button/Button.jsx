import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';

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
        const props = this.props;
        const prefixCls = 'cooButton';
        const buttonClassName = className({
            [prefixCls]: 1,
            [`${prefixCls}--${props.type}`]: 1,
            [`${prefixCls}--${props.size}`]: 1,
            [`${prefixCls}--disable`]: props.disabled
        });

        return (
            <button className={buttonClassName}
                    onClick={this.onClick.bind(this)}>
                <span>{ this.props.children }</span>
            </button>
        );
    }
}

Button.defaultProps = {
    size: 'default',
    disabled: false,
    type: 'primary'
};

Button.propTypes = {
    size: propTypes.oneOf(['small', 'large', 'default']),
    type: propTypes.oneOf(['primary', 'danger', 'normal']),
    disabled: propTypes.bool,
    onClick: propTypes.func,
    icon: propTypes.string
};

export default Button;

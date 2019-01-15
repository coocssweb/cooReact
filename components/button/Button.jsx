import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Icon from '../icon';

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
            [prefixCls]: true,
            [`${prefixCls}--${props.type}`]: true,
            [`${prefixCls}--${props.size}`]: true,
            [`${prefixCls}--disable`]: props.disabled,
            [`${prefixCls}--circle`]: props.circle,
            [`${prefixCls}--fill`]: props.fill,
            [`${prefixCls}--loading`]: props.loading,
            [props.className]: true
        });

        return (
            <button className={buttonClassName}
                    onClick={this.onClick.bind(this)}>
                {
                    props.loading ? (<Icon type="loading" />) : null
                }
                { this.props.children }
            </button>
        );
    }
}

Button.defaultProps = {
    size: 'default',
    disabled: false,
    type: 'primary',
    circle: false,
    fill: false,
    loading: false,
    className: '',
};

Button.propTypes = {
    size: propTypes.oneOf(['small', 'large', 'default']),
    type: propTypes.oneOf(['primary', 'success', 'normal', 'danger']),
    disabled: propTypes.bool,
    circle: propTypes.bool,
    fill: propTypes.bool,
    onClick: propTypes.func,
    icon: propTypes.string,
    loading: propTypes.bool,
    className: propTypes.string,
};

export default Button;

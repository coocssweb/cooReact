import React, {Component} from 'react';
import className from 'classnames';
import propTypes from 'prop-types';

class Switch extends Component {
    constructor (props) {
        super(props);
        let checked = props.checked || props.defaultChecked;
        this.state = {
            checked
        };
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.checked !== this.state.checked) {
            this.setCheckedState(nextProps.checked);
        }
    }

    setCheckedState (checked) {
        this.setState({
            checked
        });
    }

    onChange () {
        const props = this.props;
        if (props.disabled) {
            return false;
        }
        if ('onChange' in props) {
            props.onChange(!this.state.checked);
        }

        if (!('checked' in props)) {
            this.setState((prevState) => {
                return {
                    checked: !prevState.checked
                };
            });
        }
    }

    render () {
        const props = this.props;
        const state = this.state;
        const switchClassName = className({
            'cooSwitch': true,
            [`cooSwitch--${props.type}`]: true,
            [`cooSwitch--${props.size}`]: true,
            'cooSwitch--checked': state.checked,
            'cooSwitch--disabled': props.disabled
        });

        return (
            <div className={switchClassName}>
                <div className={className('cooSwitch-text')}>
                    {state.checked ? props.checkedText : props.uncheckedText}
                </div>
                <span className={className('cooSwitch-icon')}
                      onClick={this.onChange.bind(this)} />
            </div>
        );
    }
}

Switch.defaultProps = {
    defaultChecked: false,
    disabled: false,
    type: 'primary',
    size: 'default'
};

Switch.propTypes = {
    checked: propTypes.bool,
    defaultChecked: propTypes.bool,
    checkedText: propTypes.string,
    uncheckedText: propTypes.string,
    type: propTypes.oneOf(['primary', 'success', 'error']),
    size: propTypes.oneOf(['default', 'large', 'small']),
    disabled: propTypes.bool,
    onChange: propTypes.func,
};

export default Switch;

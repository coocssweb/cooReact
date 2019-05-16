import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import className from 'classnames';
import RcAlign from 'rc-align';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';
import Panel from './Panel';
import { isNodeFound } from '../_util/domHelper';

const ALIGN = {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
        adjustX: 1,
        adjustY: 1,
    },
};

class Select extends Component {
    constructor (props) {
        super(props);

        let value;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        const label = this.getLabelByValue(props.children, value);
        this.selectRef = React.createRef();

        this.state = {
            value,
            label,
            open: false
        };
    }

    componentWillReceiveProps (nextProps) {
        let value;
        if ('value' in nextProps) {
            value = nextProps.value;
        } else {
            value = this.state.value;
        }

        const label = this.getLabelByValue(nextProps.children, value);
        this.setState({
            value,
            label
        });
    }

    getLabelByValue (children, value) {
        if (value === undefined) {
            return null;
        }

        let label = null;
        React.Children.forEach(children, (child) => {
            if (value === child.props.value) {
                label = child.props.children;
            }
        });

        return label;
    }

    getNativeDOMNode () {
        if (!this.nativeDOMNode) {
            this.nativeDOMNode = ReactDOM.findDOMNode(this.selectRef.current);
        }
        return this.nativeDOMNode;
    }

    getMenus () {
        let el = [];
        let state = this.state;
        React.Children.forEach(this.props.children, (child) => {
            let value = child.props.value;
            let label = child.props.children;
            const menuClassName = className({
                'cooSelect-menu': true,
                'cooSelect-menu--selected': state.value === value
            });
            el.push(<div className={menuClassName}
                         key={value || label}
                         onClick={this.onMenuClick.bind(this, {value, label})}>
                    { label }
                </div>);
        });
        return el;
    }

    setOpenState (open) {
        this.setState(() => {
            if (open) {
                return {
                    open: true,
                    hidden: false
                };
            } else {
                return {
                    open: false
                };
            }
        });
    }

    onClick () {
        const props = this.props;
        if (props.disabled) {
            return false;
        }
        if (this.state.open) {
            this.setOpenState(false);
        } else if (React.Children.count(props.children)) {
            this.setOpenState(true);
        }
    }

    onMenuClick ({value, label}) {
        const props = this.props;
        if (value !== this.state.value) {
            if ('onChange' in props) {
                props.onChange({value, label});
            }

            if (!('value' in props)) {
                this.setState({
                    value,
                    label
                });
            }
        }
        this.setOpenState(false);
    }

    onOutsideClick (evt) {
        // 判断当前事件来源，是否属于当前组件
        const isFound = isNodeFound(evt.target, this.getNativeDOMNode());
        if (this.state.open && !isFound) {
            this.setOpenState(false);
        }
    }

    render () {
        const { props, state } = this;
        this.haveOpened = this.haveOpened || state.open;
        let menus;
        if (this.haveOpened) {
            menus = this.getMenus();
        }
        const selectClassName = className({
            'cooSelect': true,
            [`cooSelect--${props.size}`]: true,
            'cooSelect--disabled': props.disabled
        });
        const placeholderClassName = className({
            'cooSelect-placeholder': true,
            'cooSelect-placeholder--hidden': state.value
        });
        const headerClassName = className({
            'cooSelect-header': true,
            'cooSelect-header--open': state.open
        });
        const arrowClassName = className({
            'cooSelect-arrow': true,
            'cooSelect-arrow--open': state.open
        });

        return (
            <div style={props.style}
                 className={selectClassName}
                 ref={this.selectRef}>
                <div className={headerClassName}
                     onClick={this.onClick.bind(this)}>
                    <div className={className('cooSelect-label')}>{ state.label }</div>
                    <div className={placeholderClassName}>{ props.placeholder }</div>
                    <span className={arrowClassName} >
                        <Icon type="down" />
                    </span>
                </div>
                {
                    this.haveOpened ? (
                        <RcAlign target={this.getNativeDOMNode.bind(this)}
                                 key="dropdown"
                                 selectOpen={state.open}
                                 disabled={!state.open}
                                 align={ALIGN}>
                                <Panel onOutsideClick={this.onOutsideClick.bind(this)}>
                                    <CSSTransition
                                        in={state.open}
                                        timeout={500}
                                        classNames="slideUp"
                                        onExited={() => {
                                            this.setState({
                                                hidden: true
                                            });
                                        }}>
                                        <div key="dropdown"
                                             style={{ width: `${props.style.width}px` }}
                                             className={className({ 'cooSelect-dropdown': true, 'cooSelect-dropdown--hidden': state.hidden })} >
                                        {menus}
                                        </div>
                                    </CSSTransition>
                                </Panel>
                        </RcAlign>
                    ) : null
                }
            </div>
        );
    }
}

Select.defaultProps = {
    placeholder: '请选择',
    disabled: false,
    style: {
        width: 120
    },
    size: 'default'
};

Select.propTypes = {
    defaultValue: propTypes.oneOfType([propTypes.number, propTypes.string]),
    value: propTypes.oneOfType([propTypes.number, propTypes.string]),
    placeholder: propTypes.string,
    size: propTypes.oneOf(['default', 'large', 'small']),
    disabled: propTypes.bool,
    style: propTypes.object,
    onChange: propTypes.func,
};

export default Select;

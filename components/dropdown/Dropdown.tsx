import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import className from 'classnames';
import RcAlign from 'rc-align';
import Panel from './Panel';
import { CSSTransition } from 'react-transition-group';
import {isNodeFound} from '../_util/domHelper';

const ALIGN_VALUE = {
    'left bottom': ['tl', 'bl'],
    'center bottom': ['tc', 'bc'],
    'right bottom': ['tr', 'br'],
    'left top': ['tl', 'tl'],
    'center top': ['tc', 'tc'],
    'right top': ['tr', 'tr']
};

const SIZE = 4;

const ALIGN_OFFSET = {
    'left bottom': SIZE,
    'center bottom': SIZE,
    'right bottom': SIZE,
    'left top': -SIZE,
    'center top': -SIZE,
    'right top': -SIZE
};

class Dropdown extends Component {
    constructor (props) {
        super(props);
        this.dropdownRef = React.createRef();
        this.align = {
            points: ALIGN_VALUE[props.placement],
            offset: [0, ALIGN_OFFSET[props.placement] + (props.arrow ? 4 : 0)],
            overflow: {
                adjustX: 1,
                adjustY: 1,
            },
        };
        this.state = {
            open: false,
            hidden: false
        };
    }

    getNativeDOMNode () {
        if (!this.nativeDOMNode) {
            this.nativeDOMNode = ReactDOM.findDOMNode(this.dropdownRef.current);
        }
        return this.nativeDOMNode;
    }

    onToggle () {
        if (this.state.open) {
            this.setState({
                open: false
            });
        } else {
            this.setState({
                hidden: false,
                open: true
            });
        }
    }

    renderMenu () {
        const props = this.props;
        const menu = props.children[0].props.children;
        return (
            <div className={className('cooDropdown-menu')}
                 onClick={this.onToggle.bind(this)}>
                {menu}
            </div>
        );
    }

    renderContent () {
        const props = this.props;
        const state = this.state;
        const content = props.children[1].props.children;
        const panelClassName = className({
            'cooDropdown-panel': true,
            'cooDropdown-panel--hidden': state.hidden
        });

        return (
            <RcAlign target={this.getNativeDOMNode.bind(this)}
                     key="dropdown"
                     selectOpen={state.open}
                     disabled={!state.open}
                     align={this.align}>
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
                        <div className={panelClassName}>
                            { props.arrow ? (<span className={className('cooDropdown-arrow')}></span>) : null }
                            { content }
                        </div>
                    </CSSTransition>
                </Panel>
            </RcAlign>
        );
    }
    onOutsideClick (evt) {
        // 判断当前事件来源，是否属于当前组件
        const isFound = isNodeFound(evt.target, this.getNativeDOMNode());
        if (this.state.open && !isFound) {
            this.setState({
                open: false
            });
        }
    }

    render () {
        const props = this.props;
        const state = this.state;
        this.haveOpened = this.haveOpened || state.open;
        return (
            <div className={className('cooDropdown')}
                 ref={this.dropdownRef}>
                {
                    this.renderMenu()
                }
                {
                    this.haveOpened ? this.renderContent() : null
                }
            </div>
        );
    }
}

Dropdown.defaultProps = {
    placement: 'center bottom',
    arrow: false,
};

Dropdown.propTypes = {
    placement: propTypes.oneOf(['left bottom', 'center bottom', 'right bottom', 'left top', 'center top', 'right top']),
    arrow: propTypes.bool,
};

export default Dropdown;

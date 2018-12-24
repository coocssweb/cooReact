import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { isNodeFound } from '../_util/domHelper';
import Button from '../button';

class Content extends Component {
    constructor (props) {
        super(props);
        this.el = document.createElement('div');
        this.contentRef = React.createRef();
        this.state = {
            visible: true,
            hidden: false
        };
    }

    componentDidMount () {
        document.body.appendChild(this.el);
    }

    componentWillUnmount () {
        document.body.removeChild(this.el);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setStateVisible(nextProps.visible);
        }
    }

    setStateVisible (visible) {
        if (visible) {
            this.setState({
                visible,
                hidden: false
            });
        } else {
            this.setState({
                visible
            });
        }
    }

    getNativeDOMNode () {
        if (!this.nativeDOMNode) {
            this.nativeDOMNode = ReactDOM.findDOMNode(this.contentRef.current);
        }
        return this.nativeDOMNode;
    }

    onCloseClick () {
        this.setStateVisible(false);
    }

    onMaskClick (evt) {
        if (!isNodeFound(evt.target, this.getNativeDOMNode())) {
            this.setStateVisible(false);
        }
    }

    onCancelClick () {
        const props = this.props;
        if ('onCancel' in props) {
            props.onCancel();
        } else {
            this.setStateVisible(false);
        }
    }

    onOkClick () {
        const props = this.props;
        if ('onOk' in props) {
            props.onOk();
        } else {
            this.setStateVisible(false);
        }
    }

    renderTitle () {
        const props = this.props;
        if (!props.title) {
            return null;
        }

        return (
            <div className={className('cooModal-title')}>
                {props.title}
            </div>
        );
    }

    renderFooter () {
        const props = this.props;
        if (!props.okText && !props.cancelText) {
            return null;
        }

        return (
            <div className={className('cooModal-footer')}>
                {
                    props.cancelText ? (
                        <Button onClick={this.onCancelClick.bind(this)}>{props.cancelText}</Button>
                    ) : null
                }
                {
                    props.okText ? (
                        <Button onClick={this.onOkClick.bind(this)}>{props.okText}</Button>
                    ) : null
                }
            </div>
        );
    }

    renderCloseButton () {
        const props = this.props;
        if (!props.closable) {
            return null;
        }

        return (
            <button className={className('cooModal-close')}
                    onClick={this.onCloseClick.bind(this)}>
                x
            </button>
        );
    }

    renderMask () {
        let state = this.state;
        let maskClassName = className({
            'cooModal-mask': true,
            'cooModal-mask--hidden': state.hidden
        });

        return (
            <CSSTransition
                in={state.visible}
                timeout={500}
                classNames="fade"
                onExited={() => {
                    this.setState({
                        hidden: true
                    });
                }}>
                <div className={maskClassName} />
            </CSSTransition>
        );
    }

    render () {
        const props = this.props;
        const state = this.state;
        const wrapClassName = className({
            'cooModal-wrap': true,
            'cooModal-wrap--hidden': state.hidden
        });

        return ReactDOM.createPortal(
            (
                <React.Fragment>
                    { this.renderMask() }
                    <CSSTransition
                        in={state.visible}
                        timeout={500}
                        classNames="fade">
                        <div className={wrapClassName}
                             onClick={this.onMaskClick.bind(this)}>
                            <div style={{width: `${props.width}px`}}
                                 className={className('cooModal-content')}
                                 ref={this.contentRef}>
                                { this.renderCloseButton() }
                                { this.renderTitle() }
                                <div className={className('cooModal-body')}>
                                    {props.children}
                                </div>
                                { this.renderFooter() }
                            </div>
                        </div>
                    </CSSTransition>
                </React.Fragment>
            ),
            this.el
        );
    }
}

export default Content;

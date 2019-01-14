import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';

class Content extends Component {
    constructor (props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    componentDidMount () {
        const props = this.props;
        if (props.duration <= 0) {
            return false;
        }

        this.timeout = setTimeout(() => {
            this.close();
        }, props.duration);
    }

    onExited () {
        const props = this.props;
        props.onRemove(props.id);
    }

    close () {
        this.setState({
            visible: false
        });
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    renderTip () {
        const props = this.props;
        return (
            <div className={className({'cooToast': true, 'cooToast--tip': true})}>
                {props.children}
                {
                    props.closable ? (
                        <span className={className('cooToast-close')}
                              onClick={this.close.bind(this)}>
                                <Icon type='close' />
                            </span>
                    ) : null
                }
            </div>
        );
    }

    renderLoading () {
        const props = this.props;
        return (
            <div className={className({'cooToast': true, 'cooToast--loading': true})}>
                <Icon type="loading" />
                {
                    props.children ? (
                        <div className={className('cooToast-content')}>{props.children}</div>
                    ) : null
                }
                {
                    props.closable ? (
                        <span className={className('cooToast-close')}
                              onClick={this.close.bind(this)}>
                                <Icon type='close' />
                            </span>
                    ) : null
                }
            </div>
        );
    }

    render () {
        const props = this.props;
        const state = this.state;

        return (
            <CSSTransition
                in={state.visible}
                timeout={500}
                onExited={this.onExited.bind(this)}
                classNames="cooFade">
                {
                    props.type === 'tip' ? this.renderTip() : this.renderLoading()
                }
            </CSSTransition>
        );
    }
}

export default Content;

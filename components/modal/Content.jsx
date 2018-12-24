import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';
import Button from '../button';

class Content extends Component {
    constructor (props) {
        super(props);
        this.el = document.createElement('div');
        this.state = {
            visible: false
        };
    }

    componentDidMount () {
        document.body.appendChild(this.el);
    }

    componentWillUnmount () {
        document.body.removeChild(this.el);
    }
    
    componentWillReceiveProps (nextProps) {

    }

    setStateVisible (visible) {
        this.setState({
            visible
        });
    }

    onCloseClick () {
        this.setStateVisible(false);
    }

    onMaskClick () {
        this.setStateVisible(false);
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
        const props = this.porps;
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
            <button className={className('cooModal-close')}>
                x
            </button>
        );
    }

    renderMask () {
        const props = this.props;
        if (props.maskClosable) {
            return (
                <div className={className('cooModal-mask')}
                     onClick={this.onMaskClick.bind(this)}  />
            );
        }

        return (
            <div className={className('cooModal-mask')} />
        );
    }

    render () {
        const props = this.props;
        
        return ReactDOM.createPortal(
            (
                <>
                    { this.renderMask() }
                    <div className={className('cooModal-content')}>
                        { this.renderCloseButton() }
                        { this.renderTitle() }
                        <div className={className('cooModal-body')}>
                            {props.children}
                        </div>
                        { this.renderFooter() }
                    </div>
                 </>
            ),
            this.el
        );
    }
}

export default Content;

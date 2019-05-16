import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import className from 'classnames';
import { Transition } from 'react-transition-group';
import Icon from '../icon';

class Item extends Component {
    constructor (props) {
        super(props);
        this.dom = null;
        this.contentRef = React.createRef();
        this.state = {
            active: props.active,
            hidden: !props.active,
            haveActive: props.forceRender
        };
    }

    componentWillReceiveProps (nextProps) {
        const state = this.state;
        if (nextProps.active !== state.active) {
            this.setState({
                active: nextProps.active,
                hidden: false
            });
        }
    }

    componentDidUpdate () {

    }

    /**
     * 切换打开状态
     */
    onToggleOpen () {
        if (!this.state.active) {
            this.props.onOpen();
        } else {
            this.setState({
                active: false
            });
        }
    }

    getContentDOM () {
        if (!this.dom) {
            this.dom = ReactDOM.findDOMNode(this.contentRef.current);
        }
        this.height = this.dom.offsetHeight;
        return this.dom;
    }

    onEnter () {
        this.getContentDOM();
        this.dom.style.height = '0px';
        console.log('enter', this.height, this.dom.offsetHeight);
        this.dom.style.height = `${this.height}px`;
    }

    onEntering () {

    }

    onEntered () {
        this.dom.style.height = ``;
    }

    onExit () {
        this.getContentDOM();
        this.dom.style.height = `${this.height}px`;
        console.log('exit', this.height, this.dom.offsetHeight);
        this.dom.style.height = '0px';
    }

    onExiting () {
    }

    onExited () {
        this.dom.style.height = '';
        this.setState({
            hidden: true
        });
        // 如果props状态还是打开的
        // 调用回调，将状态同步给collapse组件
        if (this.props.active) {
            this.props.onOpen();
        }
    }

    render () {
        const props = this.props;
        const state = this.state;
        const panelClassName = className({
            'cooCollapse-item': true,
            'cooCollapse-item--active': !state.hidden,
            'cooCollapse-item--inactive': state.hidden,
        });

        state.haveActive = state.haveActive || state.active;

        return (
            <div className={panelClassName}>
                <div className={className('cooCollapse-header')} onClick={this.onToggleOpen.bind(this)}>
                    <span className={className('cooCollapse-arrow')}>
                        <Icon type="right" />
                    </span>
                    <span>{ props.header }</span>
                </div>

                    <Transition
                        in={state.active}
                        timeout={300}
                        onEnter={this.onEnter.bind(this)}
                        onEntering={this.onEntering.bind(this)}
                        onEntered={this.onEntered.bind(this)}
                        onExit={this.onExit.bind(this)}
                        onExiting={this.onExiting.bind(this)}
                        onExited={this.onExited.bind(this)}>
                        <div className={className('cooCollapse-content')}
                             ref={this.contentRef}>
                            <div className={className('cooCollapse-box')}>
                                {props.children}
                            </div>
                        </div>
                    </Transition>
            </div>
        );
    }
}

export default Item;

import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';

import {loadImage} from '../_util/loadHelper';

class Lazyimg extends Component {
    constructor (props) {
        super(props);
        this.state = {
            gif: /.*\.gif$/.test(props.src),
            hidden: !props.mum,
            status: props.auto ? 'loading' : 'unloaded',
            src: 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==',
        };
    }

    componentDidMount () {
        const props = this.props;
        const state = this.state;
        // 预加载图片thumb
        if ('thumb' in props) {
            const loadThumb = () => {
                loadImage([props.thumb]).then(({success, error}) => {
                    if (state.status !== 'unloaded') {
                        return;
                    }
                    if (error === 0) {
                        this.setState({
                            src: props.thumb,
                        });
                        if (this.props.auto) {
                            this.load();
                        }
                    }
                });
            };
            loadThumb();
        } else {
            if (this.props.auto) {
                this.load();
            }
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.auto && !this.props.auto) {
            this.load();
        }
    }

    load () {
        const props = this.props;
        const state = this.state;
        if (state.status === 'loading' || state.status === 'loaded') {
            return false;
        }
        this.setState({
            status: 'loading'
        });
        loadImage([props.src]).then(({success, error}) => {
            if (error !== 0) {
                this.setState({
                    status: 'fail'
                });
            } else {
                this.setState({
                    status: 'loaded',
                    src: props.src
                });
            }
        });
    }

    transitionEnd () {
        this.setState({
            hidden: true
        });
    }

    render () {
        const props = this.props;
        const state = this.state;
        const iconClassName = className({
            'cooLazyimg-icon': true,
            [`cooLazyimg-icon--${state.status}`]: true,
            'cooLazyimg-icon--gif': state.gif,
            'cooLazyimg-icon--photo': !state.gif,
            'cooLazyimg-icon--hidden': state.hidden,
        });
        return (
            <span className={className('cooLazyimg')}
                  onClick={this.load.bind(this)}>
                <img src={state.src}
                     width={props.width ? props.width : ''}
                     height={props.height ? props.height : ''} />
                <span className={iconClassName}
                      onTransitionEnd={this.transitionEnd.bind(this)} />
            </span>
        );
    }
}

Lazyimg.defaultProps = {
    auto: false,
    mum: true,
};

Lazyimg.propTypes = {
    src: propTypes.string.isRequired,
    auto: propTypes.bool,
    thumb: propTypes.string,
    width: propTypes.number,
    height: propTypes.number,
    mum: propTypes.bool,
};

export default Lazyimg;

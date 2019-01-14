import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import className from 'classnames';
import { CSSTransition } from 'react-transition-group';

class Placebo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            open: true,
            hidden: false,
            fillColor: props.fillColor,
        };
    }

    componentDidMount () {
    }

    componentWillUnmount () {
    }

    open ({fillColor}) {
        this.setState({
            fillColor,
            open: true,
            hidden: false
        });
    }

    close () {
        this.setState({
            open: false
        });
    }

    onExited () {
        this.setState({
            hidden: true
        });
    }

    render () {
        const state = this.state;
        const progressStyle = {
            backgroundColor: `rgba(${state.fillColor} , 1)`
        };
        const placeboClassName = className({
            'cooPlacebo': true,
            'cooPlacebo--hidden': state.hidden,
        });

        return (
            <span>
                <CSSTransition
                    in={state.open}
                    timeout={300}
                    classNames="cooFade"
                    onExited={this.onExited.bind(this)}>
                    <div className={placeboClassName}>
                        <span className={className('cooPlacebo-progress')}
                              style={progressStyle} />
                    </div>
                </CSSTransition>
            </span>
        );
    }
}

Placebo.defaultProps = {
};

Placebo.propTypes = {
    fillColor: propTypes.string,
};

export default Placebo;

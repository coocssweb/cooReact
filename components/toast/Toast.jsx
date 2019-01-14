import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import Content from './Content';

class Toast extends Component {
    constructor (props) {
        super(props);
        this.uuid = 0;
        this.state = {
            toasts: []
        };
    }

    componentDidMount () {

    }

    componentWillUnmount () {

    }

    add (toast) {
        this.uuid ++;
        this.setState((prevState) => {
            return {
                toasts: [...prevState.toasts, {...toast, id: this.uuid}]
            };
        });
    }

    remove (id) {
        const findIndexByKey = (id) => {
            let findIndex;
            this.state.toasts.map((item, index) => {
                if (item.id === id) {
                    findIndex = index;
                }
            });
            return findIndex;
        };

        const index = findIndexByKey(id);
        this.setState((prevState) => {
            prevState.toasts.splice(index, 1);
            return {
                toasts: [...prevState.toasts]
            };
        });
    }

    render () {
        const props = this.props;
        const state = this.state;

        return (
            <React.Fragment>
                {
                    state.toasts.map((item) => {
                        return (
                            <Content key={item.id}
                                     id={item.id}
                                     type={item.type}
                                     ref={item.fn}
                                     closable={item.closable}
                                     duration={item.duration}
                                     onRemove={this.remove.bind(this)}>
                                {item.content}
                            </Content>
                        );
                    })
                }
            </React.Fragment>
        );
    }
}

Toast.defaultProps = {
    duration: 3000,
    type: 'tip',
};

Toast.propTypes = {
    duration: propTypes.number
};

export default Toast;

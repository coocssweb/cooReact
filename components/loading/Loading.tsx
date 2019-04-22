import React, {Component} from 'react';
import className from 'classnames';
import propTypes from 'prop-types';

class Loading extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="">
            </div>
        );
    }
}

Loading.defaultProps = {

};

Loading.propTypes = {
    type: propTypes.oneOf([''])
};

export default Loading;


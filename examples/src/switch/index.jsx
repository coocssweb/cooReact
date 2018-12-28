import React, {Component} from 'react';
import {Switch} from 'components';

class index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    onChange () {

    }

    render () {
        return (
            <div className="switch">
                <Switch defaultChecked={false} />
            </div>
        );
    }
}

export default index;

import React, {Component} from 'react';
import {Button} from 'components';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="button">
                <Button>按钮</Button>
            </div>
        );
    }
}

export default Index;

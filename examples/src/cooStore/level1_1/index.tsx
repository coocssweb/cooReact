import React, {Component} from 'react';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <div className="level">
                <div className="level-name">第一层：1-1</div>
                {this.props.children}
            </div>
        );
    }
}

export default Index;

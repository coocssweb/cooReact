import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';

class CoolPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount () {
        this.targetDOMNode = document.querySelector('.coo-coolpanel-target');
        this.targetDOMNode.addEventListener('click', this.open);
    }

    componentWillUnmount () {
        this.targetDOMNode.removeEventListener('click', this.open);
    }

    open (e) {
        const currentDom = e.target;
        console.log(currentDom);
    }

    close () {

    }

    render () {
        return (
            <div className="">
            </div>
        );
    }
}

export default CoolPanel;

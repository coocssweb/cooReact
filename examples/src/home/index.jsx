import './index.scss';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="home">
                <Link to="icon">Icon 组件</Link>
                <br /><br />
                <Link to="button">Button 组件</Link>
                <br /><br />
                <Link to="modal">Modal 组件</Link>
                <br /><br />
                <Link to="drawer">Drawer 组件</Link>
                <br /><br />
                <Link to="select">Select 组件</Link>
                <br /><br />
                <Link to="switch">Switch 组件</Link>
                <br /><br />
                <Link to="tabs">Tabs 组件</Link>
                <br /><br />
                <Link to="collapse">Collapse 组件</Link>
            </div>
        );
    }
}

export default Index;

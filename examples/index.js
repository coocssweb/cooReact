/**
 * Created by coocss on 2018/12/23.
 */
import './css/base.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Home, Select, Modal, Button, Switch, Collapse, Tabs} from './src';

const Root = (() => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/select" component={Select} />
                <Route exact path="/modal" component={Modal} />
                <Route exact path="/button" component={Button} />
                <Route exact path="/switch" component={Switch} />
                <Route exact path="/collapse" component={Collapse} />
                <Route exact path="/tabs" component={Tabs} />
            </div>
        </Router>
    );
})();

ReactDOM.render(
    Root,
    document.getElementById('app')
);

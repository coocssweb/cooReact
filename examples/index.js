/**
 * Created by coocss on 2018/12/23.
 */
import './css/base.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Layout from './src/layout';

ReactDOM.render(
    <Router>
        <Route link="/" component={Layout} />
    </Router>,
    document.getElementById('app')
);

/**
 * Created by coocss on 2018/12/23.
 */
import './css/base.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Layout from './src/layout';

console.log('1234123');

ReactDOM.render(
    <Router>
        <Route link="/" component={Layout} />
    </Router>,
    document.getElementById('app')
);

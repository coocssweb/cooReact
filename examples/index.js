/**
 * Created by coocss on 2018/12/23.
 */
import './css/base.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './src/layout';

ReactDOM.render(
    <Router>
        <Route link="/" component={Layout} />
    </Router>,
    document.getElementById('app')
);

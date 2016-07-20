/**
 * Created by 王佳欣 on 2016/7/20.
 * 路由定义
 */

import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from './Examples/Layout/Index.js';
import Select from './Examples/Select/Index.js';

ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
        </Route>
        <Route path="/select" component={Select}>
        </Route>
    </Router>
), document.getElementById('main-body'));
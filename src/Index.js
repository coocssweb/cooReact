/**
 * Created by 王佳欣 on 2016/7/20.
 * 路由定义
 */

import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import Layout from './Examples/Layout/Index.js';
import Select from './Examples/Select/Index.js';
React.render((
    <Router>
        <Route path="/" component={Layout}>
        </Route>
        <Route path="/select" component={Select}>
        </Route>
    </Router>
), document.getElementById('main-body'));
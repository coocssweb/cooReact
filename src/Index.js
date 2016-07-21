/**
 * Created by 王佳欣 on 2016/7/20.
 * 路由定义
 */

import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from './Examples/Layout/Index.js';
import Select from './Examples/Select/Index.js';
import Switch from './Examples/Switch/Index.js';
import Dialog from './Examples/Dialog/Index.js';
import Loadmore from './Examples/Loadmore/Index.js';
import Tabs from './Examples/Tabs/Index.js';

ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
        </Route>
        <Route path="/select" component={Select}>
        </Route>
        <Route path="/switch" component={Switch}>
        </Route>
        <Route path="/dialog" component={Dialog}>
        </Route>
        <Route path="/loadmore" component={Loadmore}>
        </Route>
        <Route path="/tabs" component={Tabs}>
        </Route>
    </Router>
), document.getElementById('main-body'));
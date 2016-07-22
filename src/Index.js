/**
 * Created by 王佳欣 on 2016/7/20.
 * 路由定义
 */

import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Layout from './Examples/Layout';
import Select from './Examples/Select';
import Switch from './Examples/Switch';
import Dialog from './Examples/Dialog';
import Loadmore from './Examples/Loadmore';
import Tabs from './Examples/Tabs';
import PullBox from './Examples/PullBox';
import Accordion from './Examples/Accordion';

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
        <Route path="/pull" component={PullBox}>
        </Route>
        <Route path="/accordion" component={Accordion}>
        </Route>
    </Router>
), document.getElementById('main-body'));
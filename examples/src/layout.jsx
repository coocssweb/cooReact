import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import {Home, SelectDemo, ModalDemo, ButtonDemo, SwitchDemo, CollapseDemo, TabsDemo, DrawerDemo, IconDemo} from './';
import {Icon} from 'components';

class Layout extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div className="layout">
                <div className="header">
                    一些React组件
                    <a className="gh-btn" href="https://github.com/coocssweb/react-plug" target="_blank">
                        <span className="gh-ico" aria-hidden="true"></span>
                        <span className="gh-text">Star</span>
                    </a>
                </div>
                <div className="nav">
                    <div className="nav-item">
                        <NavLink to="/" className="nav-link" activeClassName="nav-link--active" exact>
                            <span className="nav-icon">
                                <Icon type="home" />
                            </span>
                            首页
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/icon" className="nav-link" activeClassName="nav-link--active">
                            <span className="nav-icon">
                                <Icon type="right" />
                            </span>
                            Icon 组件
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/button" className="nav-link" activeClassName="nav-link--active">
                            <span className="nav-icon">
                                <Icon type="right" />
                            </span>
                            Button 组件
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/modal" className="nav-link" activeClassName="nav-link--active">
                            <span className="nav-icon">
                                <Icon type="right" />
                            </span>
                            Modal 组件
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/drawer" className="nav-link" activeClassName="nav-link--active">
                            <span className="nav-icon">
                                <Icon type="right" />
                            </span>
                            Drawer 组件
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/select" className="nav-link" activeClassName="nav-link--active">
                            <span className="nav-icon">
                                <Icon type="right" />
                            </span>
                            Select 组件
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/switch" className="nav-link" activeClassName="nav-link--active">
                            <span className="nav-icon">
                                <Icon type="right" />
                            </span>
                            Switch 组件
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/tabs" className="nav-link" activeClassName="nav-link--active">
                            <span className="nav-icon">
                                <Icon type="right" />
                            </span>
                            Tabs 组件
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink to="/collapse" className="nav-link" activeClassName="nav-link--active">
                            <span className="nav-icon">
                                <Icon type="right" />
                            </span>
                            Collapse 组件
                        </NavLink>
                    </div>
                </div>
                <div className="content">
                    <Route path="/" component={Home} exact />
                    <Route path="/icon" component={IconDemo} />
                    <Route path="/button" component={ButtonDemo} />
                    <Route path="/modal" component={ModalDemo} />
                    <Route path="/drawer" component={DrawerDemo} />
                    <Route path="/select" component={SelectDemo} />
                    <Route path="/switch" component={SwitchDemo} />
                    <Route path="/tabs" component={TabsDemo} />
                    <Route path="/collapse" component={CollapseDemo} />
                </div>
            </div>
        );
    }
}

export default Layout;

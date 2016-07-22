/**
 * Created by 王佳欣 on 2016/7/20.
 * Select 组件调用
 */

import React from 'react';
import CooPullBox from '../../CooComponents/CooPullBox';
import CommonStyle from '../common.css';
import Style from './Index.css';
import {Link} from 'react-router';

var Index = React.createClass({

    getInitialState(){
        return {
            left: false,
            right: false,
            top: false,
            bottom: false
        }
    },
    onClose(key){
        this.state[key] = false;
        this.forceUpdate();
    },
    open(key){
        this.state[key] = true;
        this.forceUpdate();
    },
    render(){
        return (
            <div className={CommonStyle['shows']}>
                <Link to="/" className={CommonStyle['btn-back']}>←返回</Link>
                <div className={CommonStyle["website-header"]}>
                    <h1 className={CommonStyle["website-name"]}>Pull组件</h1>
                    <p className={CommonStyle["website-desc"]}>抽屉组件，支持自定义样式，内容可自定义</p>
                </div>

                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、默认样式：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <a href="javascript:;" onClick={this.open.bind(this,'left')}>打开（左）</a>
                            <CooPullBox direction="left" isOpen={this.state.left} onClose={this.onClose.bind(this,'left')}>
                                <div className={Style['pull-content-left']}>
                                    <ul>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>往期内容</a></li>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>热门作家</a></li>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>栏目浏览</a></li>
                                    </ul>
                                </div>
                            </CooPullBox>
                        </div>
                        <div className={CommonStyle['padding-10']}>
                            <a href="javascript:;" onClick={this.open.bind(this,'right')}>打开（右）</a>
                            <CooPullBox direction="right" isOpen={this.state.right} onClose={this.onClose.bind(this,'right')}>
                                <div className={Style['pull-content-left']}>
                                    <ul>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>往期内容</a></li>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>热门作家</a></li>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>栏目浏览</a></li>
                                    </ul>
                                </div>
                            </CooPullBox>
                        </div>
                        <div className={CommonStyle['padding-10']}>
                            <a href="javascript:;" onClick={this.open.bind(this,'top')}>打开（上）</a>
                            <CooPullBox direction="top" isOpen={this.state.top} onClose={this.onClose.bind(this,'top')}>
                                <div className={Style['pull-content-left']}>
                                    <ul>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>往期内容</a></li>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>热门作家</a></li>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>栏目浏览</a></li>
                                    </ul>
                                </div>
                            </CooPullBox>
                        </div>
                        <div className={CommonStyle['padding-10']}>
                            <a href="javascript:;" onClick={this.open.bind(this,'bottom')}>打开（下）</a>
                            <CooPullBox direction="bottom" isOpen={this.state.bottom} onClose={this.onClose.bind(this,'bottom')}>
                                <div className={Style['pull-content-left']}>
                                    <ul>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>往期内容</a></li>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>热门作家</a></li>
                                        <li><a href="javascript:;" className={Style['left-menu-item']}>栏目浏览</a></li>
                                    </ul>
                                </div>
                            </CooPullBox>
                        </div>
                        <div className={CommonStyle['shows-detail-key']}>参数说明：</div>
                        <div className={CommonStyle['show-detail']}>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = Index;

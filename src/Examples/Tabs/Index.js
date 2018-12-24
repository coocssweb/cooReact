/**
 * Created by 王佳欣 on 2016/7/20.
 * Tab 组件调用
 */

import React from 'react';
import CooTabs from '../../CooComponents/CooTabs';
import CommonStyle from '../common.css';
import Style from './index.css';
import {Link} from 'react-router';

var Index = React.createClass({
    render(){
        return (
            <div className={CommonStyle['shows']}>
                <Link to="/" className={CommonStyle['btn-back']}>←返回</Link>
                <div className={CommonStyle["website-header"]}>
                    <h1 className={CommonStyle["website-name"]}>Tab</h1>
                    <p className={CommonStyle["website-desc"]}>Tab组件更，支持自定义Tab项，内容自定义</p>
                </div>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、2个TAB实例：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooTabs defaultIndex={0} isTransition={true}>
                                <CooTabs.TabPanel title="账号登录">
                                    <div className={Style['tab-content']}>
                                        第一个Tab内容
                                    </div>
                                </CooTabs.TabPanel>
                                <CooTabs.TabPanel title="手机登录">
                                    <div className={Style['tab-content']}>
                                        第二个Tab内容
                                    </div>
                                </CooTabs.TabPanel>
                            </CooTabs>
                        </div>
                        <div className={CommonStyle['shows-detail-key']}>参数说明：</div>
                        <div className={CommonStyle['show-detail']}>

                        </div>
                    </div>
                </div>

                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>2、3个TAB实例，不开动画：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooTabs defaultIndex={2} isTransition={false}>
                                <CooTabs.TabPanel title="百度新闻">
                                    <div className={Style['tab-content']}>
                                        百度新闻内容
                                    </div>
                                </CooTabs.TabPanel>
                                <CooTabs.TabPanel title="网易新闻">
                                    <div className={Style['tab-content']}>
                                        网易新闻内容
                                    </div>
                                </CooTabs.TabPanel>
                                <CooTabs.TabPanel title="头条新闻">
                                    <div className={Style['tab-content']}>
                                        头条新闻内容
                                    </div>
                                </CooTabs.TabPanel>
                            </CooTabs>
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

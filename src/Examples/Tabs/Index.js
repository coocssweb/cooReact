/**
 * Created by 王佳欣 on 2016/7/20.
 * Tab 组件调用
 */

import React from 'react';
import CooTabs from '../../CooComponents/CooTabs';
import CommonStyle from '../common.css';
import Style from './Index.css';
import {Link} from 'react-router';

var Index = React.createClass({

    getInitialState(){
        return {
            activeIndex: 0,
            activeIndex_3: 0
        }
    },
    onTab(value){
        this.setState({
            activeIndex: value
        })
    },
    onTab_3(value){
        this.setState({
            activeIndex_3: value
        })
    },
    render(){

        var tabs = [
            '账号登录','手机登录'
        ];

        var tabs_3 = [
            '百度新闻','网易新闻','头条新闻'
        ]


        return (
            <div className={CommonStyle['shows']}>
                <Link to="/" className={CommonStyle['btn-back']}>←返回</Link>
                <div className={CommonStyle["website-header"]}>
                    <h1 className={CommonStyle["website-name"]}>Tab</h1>
                    <p className={CommonStyle["website-desc"]}>Tab组件更，支持自定义Tab项</p>
                </div>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、2个TAB实例：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooTabs tabs={tabs} activeIndex={this.state.activeIndex} onTab={this.onTab} />
                        </div>
                        <div className={CommonStyle['shows-detail-key']}>参数说明：</div>
                        <div className={CommonStyle['show-detail']}>

                        </div>
                    </div>
                </div>

                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>2、3个TAB实例：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooTabs tabs={tabs_3} activeIndex={this.state.activeIndex_3} onTab={this.onTab_3} />
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

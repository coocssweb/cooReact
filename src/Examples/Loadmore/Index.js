/**
 * Created by 王佳欣 on 2016/7/20.
 * Loadmore 组件调用
 */

import React from 'react';
import CooLoadmore from '../../CooComponents/CooLoadmore';
import CommonStyle from '../common.css';
import Style from './index.css';
import {Link} from 'react-router';

var Index = React.createClass({

    getInitialState(){
        return {
            isLoading: false,
            isDefineLoading: false
        }
    },
    onLoad(){
        this.setState({
            isLoading: true
        })

        var __this = this;
        setTimeout(function(){
            __this.setState(
                {
                    isLoading: false
                }
            )
        },2000);
    },
    onDefineLoad(){
        this.setState({
            isDefineLoading: true
        })

        var __this = this;
        setTimeout(function(){
            __this.setState(
                {
                    isDefineLoading: false
                }
            )
        },2000);
    },
    render(){

        var style = {
            borderColor: '#FF4055',
            color: '#FF4055'
        }

        return (
            <div className={CommonStyle['shows']}>
                <Link to="/" className={CommonStyle['btn-back']}>←返回</Link>
                <div className={CommonStyle["website-header"]}>
                    <h1 className={CommonStyle["website-name"]}>LoadMore</h1>
                    <p className={CommonStyle["website-desc"]}>加载更多，支持自定义样式</p>
                </div>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、默认样式：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooLoadmore isShow={true} isLoading={this.state.isLoading} onLoad={this.onLoad} />
                        </div>
                        <div className={CommonStyle['shows-detail-key']}>参数说明：</div>
                        <div className={CommonStyle['show-detail']}>

                        </div>
                    </div>
                </div>

                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>2、自定义样式：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooLoadmore isShow={true}
                                         isLoading={this.state.isDefineLoading}
                                         onLoad={this.onDefineLoad}
                                         style={style}
                            />
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

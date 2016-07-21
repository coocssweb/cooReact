/**
 * Created by 王佳欣 on 2016/7/20.
 * Select 组件调用
 */

import React from 'react';
import CooDialog from '../../CooComponents/CooDialog';
import CommonStyle from '../common.css';
import Style from './Index.css';

var Index = React.createClass({

    getInitialState(){
        return {
            isShow: false,
            isShow_2: false
        }
    },
    onConfirm(){
        this.setState({
            isShow: false
        })
    },
    onCancel(){
        this.setState({
            isShow: false
        })
    },
    onOpen(){
      this.setState({
          isShow: true
      })
    },
    onOpen2(){
        this.setState({
            isShow_2: true
        })
    },
    onCancel2(){
        this.setState({
            isShow_2: false
        })
    },
    render(){
        return (
            <div className={CommonStyle['shows']}>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、实例一：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <a href="javascript:;" onClick={this.onOpen}>打开实例一</a>
                            <CooDialog isShow={this.state.isShow}
                                       isConfirm={true}
                                       isCancel={true}
                                       title='样式一'
                                       onConfirm={this.onConfirm}
                                       onCancel={this.onCancel}>
                                <p className={Style['content-01']}>
                                    这是内容文字
                                </p>
                            </CooDialog>
                        </div>
                        <div className={CommonStyle['shows-detail-key']}>参数说明：</div>
                        <div className={CommonStyle['show-detail']}>

                        </div>
                    </div>
                </div>

                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>二、实例二：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <a href="javascript:;" onClick={this.onOpen2}>打开实例二</a>
                            <CooDialog isShow={this.state.isShow_2}
                                       isConfirm={false}
                                       isCancel={false}
                                       title='样式二'
                                       onCancel={this.onCancel2}>
                                <p className={Style['content-02']}>
                                    点击黑色区域关闭对话框<br />内容自定义<br />
                                    <a href="javascript:;">按钮</a>
                                </p>
                            </CooDialog>
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

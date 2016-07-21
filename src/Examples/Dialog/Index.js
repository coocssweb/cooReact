/**
 * Created by 王佳欣 on 2016/7/20.
 * Dialog 组件调用
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
                <a href="/" className={CommonStyle['btn-back']}>←返回</a>
                <div className={CommonStyle["website-header"]}>
                    <h1 className={CommonStyle["website-name"]}>Dialog</h1>
                    <p className={CommonStyle["website-desc"]}>对话框组件，支持自定义内容，功能</p>
                </div>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、实例一：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <a href="javascript:;" onClick={this.onOpen}>打开实例一</a>
                            <CooDialog isShow={this.state.isShow}
                                       isConfirm={true}
                                       isCancel={true}
                                       title='标题 : 实例一'
                                       onConfirm={this.onConfirm}
                                       onCancel={this.onCancel}>
                                <p className={Style['content-01']}>
                                    自定义弹窗内容，可以是文字，也可以是其他组件
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
                                       title='标题 : 实例二'
                                       onCancel={this.onCancel2}>
                                <p className={Style['content-02']}>
                                    点击黑色区域关闭对话框<br />内容自定义<br />这是一个段落<br />
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

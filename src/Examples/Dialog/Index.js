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
            isShow: false
        }
    },
    onConfirm(value){
        this.setState({
            isShow: false
        })
    },
    onCancel(value){
        this.setState({
            isShow: false
        })
    },
    onOpen(){
      this.setState({
          isShow: true
      })
    },
    render(){
        return (
            <div className={CommonStyle['shows']}>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、样式一：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <a href="javascript:;" onClick={this.onOpen}>打开</a>
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
            </div>
        )
    }
});

module.exports = Index;

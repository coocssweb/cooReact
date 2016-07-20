/**
 * Created by 王佳欣 on 2016/7/20.
 * Select 组件调用
 */

import React from 'react';
import CooSwitch from '../../CooComponents/CooSwitch';
import CommonStyle from '../common.css';
import Style from './Index.css';

var Index = React.createClass({

    getInitialState(){
        return {
            defaultChecked: false,
            definedChecked: false
        }
    },
    onDefaultChange(value){
        this.setState({
            defaultChecked: value
        })
    },
    onDefineChange(value){
        this.setState({
            definedChecked: value
        })
    },
    render(){

        var style ={
            backgroundColor: '#000'
        }
        var checkedStyle={
            backgroundColor: 'rgb(13, 199, 255)'
        }



        return (
            <div className={CommonStyle['shows']}>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、默认样式：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooSwitch checked={this.state.defaultChecked}
                                       onChange={this.onDefaultChange} />
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
                            <CooSwitch checked={this.state.definedChecked}
                                       height= {25}
                                       width ={40}
                                       style={style}
                                       checkedStyle={checkedStyle}
                                       onChange={this.onDefineChange} />

                        </div>

                    </div>
                </div>

            </div>
        )
    }
});

module.exports = Index;

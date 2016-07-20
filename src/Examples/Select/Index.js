/**
 * Created by 王佳欣 on 2016/7/20.
 * Select 组件调用
 */

import React from 'react';
import CooSelect from '../../CooComponents/CooSelect';
import CommonStyle from '../common.css';
import Style from './Index.css';

var Index = React.createClass({

    getInitialState(){
        return {
            english_options: [
                {
                    value: 'primary english',
                    display: '小学英语'
                },{
                    value: 'junior english',
                    display: '初中英语'
                },{
                    value: 'senior english',
                    display: '高中英语'
                },{
                    value: 'university english',
                    display: '大学英语'
                }
            ],
            chinese_options:[
                {
                    value: 'primary chinese',
                    display: '小学语文'
                },{
                    value: 'junior chinese',
                    display: '初中语文'
                },{
                    value: 'senior chinese',
                    display: '高中语文'
                },{
                    value: 'university chinese',
                    display: '大学语文'
                }
            ],
            default_english: {

            },
            default_chinese: {

            }
        }
    },
    onChangeEnglishCb(name, value){
        this.setState({
            default_english: value
        })
    },
    onChangeChineseCb(name, value){
        this.setState({
            default_chinese: value
        })
    },
    render(){

        var define_box_style ={
            border: '1px solid #50b72e'
        }
        var define_button_style={
            borderColor: '#50b72e',
            color: '#50b72e'
        }

        return (
            <div className={CommonStyle['shows']}>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、默认样式：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooSelect name="english-type"
                                       options={this.state.english_options}
                                       default={this.state.default_english}
                                       onChange={this.onChangeEnglishCb} />
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
                            <CooSelect name="chinese-type"
                                       boxStyle={define_box_style}
                                       buttonStyle={define_button_style}
                                       options={this.state.chinese_options}
                                       default={this.state.default_chinese}
                                       onChange={this.onChangeChineseCb} />

                        </div>

                    </div>
                </div>

            </div>
        )
    }
});

module.exports = Index;

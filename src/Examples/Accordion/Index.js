/**
 * Created by 王佳欣 on 2016/7/20.
 * Tab 组件调用
 */

import React from 'react';
import CooAccordion from '../../CooComponents/CooAccordion';
import CommonStyle from '../common.css';
import Style from './Index.css';
import {Link} from 'react-router';

var Index = React.createClass({

    getInitialState(){
        return {
            activeIndex: -1
        }
    },
    onToggle(value){
        this.setState({
            activeIndex: value
        })
    },
    render(){
        return (
            <div className={CommonStyle['shows']}>
                <Link to="/" className={CommonStyle['btn-back']}>←返回</Link>
                <div className={CommonStyle["website-header"]}>
                    <h1 className={CommonStyle["website-name"]}>Accordion</h1>
                    <p className={CommonStyle["website-desc"]}>Accordion组件，支持自定义Accordion项，内容自定义</p>
                </div>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、实例：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooAccordion isTransition={true} isOnly={true}>
                                <CooAccordion.AccordionPanel title="账号登录">
                                    <div className={Style['accordion-content']}>
                                        第一个模块内容
                                    </div>
                                </CooAccordion.AccordionPanel>
                                <CooAccordion.AccordionPanel title="手机登录">
                                    <div className={Style['accordion-content']}>
                                        第二个模块内容
                                    </div>
                                </CooAccordion.AccordionPanel>
                            </CooAccordion>
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

/**
 * Created by 王佳欣 on 2016/7/20.
 * Tab 组件调用
 */

import React from 'react';
import CooAccordion from '../../CooComponents/CooAccordion';
import CommonStyle from '../common.css';
import Style from './Index.css';
import {Link} from 'react-router';
import imgIcon from './plug.png';
import imgOpenIcon from './reduce.png';

var Index = React.createClass({
    render(){


        //自定义样式
        var style = {
            marginBottom: '5px',
            border: '1px solid #eee'
        }

        var btnStyle = {
            backgroundImage: '-webkit-linear-gradient(top, rgb(254, 254, 254), rgb(237, 237, 237))'
        }

        var btnOpenStyle = {
            backgroundImage: 'none',
            backgroundColor: 'rgb(220, 220, 220)'
        }

        var iconStyle = {
            backgroundImage: 'url('+imgIcon+')'
        }

        var iconOpenStyle = {
            backgroundImage: 'url('+imgOpenIcon+')'
        }

        return (
            <div className={CommonStyle['shows']}>
                <Link to="/" className={CommonStyle['btn-back']}>←返回</Link>
                <div className={CommonStyle["website-header"]}>
                    <h1 className={CommonStyle["website-name"]}>Accordion</h1>
                    <p className={CommonStyle["website-desc"]}>Accordion组件，支持自定义Accordion项，内容自定义</p>
                </div>
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>1、默认样式实例，只能同时展开一项：</div>
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
                <div className={CommonStyle['show-box']}>
                    <div className={CommonStyle['shows-label']}>2、自定义样式实例，可同时展开多项：</div>
                    <div className={CommonStyle['shows-content']}>
                        <div className={CommonStyle['padding-10']}>
                            <CooAccordion isOnly={false}
                                          style={style}
                                          btnStyle={btnStyle}
                                          btnOpenStyle={btnOpenStyle}
                                          iconStyle={iconStyle}
                                          iconOpenStyle={iconOpenStyle}>
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

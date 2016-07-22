/**
 * Created by 王佳欣 on 2016/7/20.
 * 测试页面布局
 */

import React from 'react'
import {Link} from 'react-router';
import Style from './Index.css';
import CommonStyle from '../common.css';
import AboutMe from '../AboutMe';

var Index = React.createClass({
    render(){
        return (
            <div className={Style["layout"]}>
                <div className={CommonStyle["website-header"]}>
                    <h1 className={CommonStyle["website-name"]}>CooUI</h1>
                    <p className={CommonStyle["website-desc"]}>
                        一些常用的React移动端组件<br/>
                        gitHub开源地址：<a href="https://github.com/coocssweb/react-plug" target="_blank">https://github.com/coocssweb/react-plug</a>
                    </p>
                </div>
                <div className={Style['component-box']}>
                    <ul className={Style["list-component"]}>
                        <li className={Style["item-component"]}>
                            <Link to='/select' className={Style["item-link"]}>
                                <div className={Style["item-icon"]}><i className={"icon-select"}/></div>
                                <div className={Style["item-name"]}>Select</div>
                            </Link>
                        </li>
                        <li className={Style["item-component"]}>
                            <Link to='/switch' className={Style["item-link"]}>
                                <div className={Style["item-icon"]}><i className={"icon-toggle"}/></div>
                                <div className={Style["item-name"]}>Switch</div>
                            </Link>
                        </li>
                        <li className={Style["item-component"]}>
                            <Link to='/dialog' className={Style["item-link"]}>
                                <div className={Style["item-icon"]}><i className={"icon-dialog"}/></div>
                                <div className={Style["item-name"]}>Dialog</div>
                            </Link>
                        </li>
                        <li className={Style["item-component"]}>
                            <Link to='/loadmore' className={Style["item-link"]}>
                                <div className={Style["item-icon"]}><i className={"icon-loading"}/></div>
                                <div className={Style["item-name"]}>Load More</div>
                            </Link>
                        </li>
                        <li className={Style["item-component"]}>
                            <Link to='/tabs' className={Style["item-link"]}>
                                <div className={Style["item-icon"]}><i className={"icon-tab"}/></div>
                                <div className={Style["item-name"]}>Tab</div>
                            </Link>
                        </li>
                        <li className={Style["item-component"]}>
                            <Link to='/pull' className={Style["item-link"]}>
                                <div className={Style["item-icon"]}><i className={"icon-pull"}/></div>
                                <div className={Style["item-name"]}>Pull</div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <AboutMe />
            </div>
        )
    }
})

module.exports = Index;
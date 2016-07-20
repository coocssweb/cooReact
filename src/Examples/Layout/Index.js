/**
 * Created by 王佳欣 on 2016/7/20.
 * 测试页面布局
 */

import React from 'react'
import {Link} from 'react-router';
import Styles from './Index.css';

var Index = React.createClass({
    render(){
        return (
            <div className={Styles["layout"]}>
                <div className={Styles["website-header"]}>
                    <h1 className={Styles["website-name"]}>COO</h1>
                    <p className={Styles["website-desc"]}>一些常用的React移动端组件</p>
                </div>
                <div className={Styles['component-box']}>
                    <ul className={Styles["list-component"]}>
                        <li className={Styles["item-component"]}>
                            <Link to='/select' className={Styles["item-link"]}>
                                <div className={Styles["item-icon"]}><i className={"icon-select"}/></div>
                                <div className={Styles["item-name"]}>Select</div>
                            </Link>
                        </li>
                        <li className={Styles["item-component"]}>
                            <Link to='/switch' className={Styles["item-link"]}>
                                <div className={Styles["item-icon"]}><i className={"icon-toggle"}/></div>
                                <div className={Styles["item-name"]}>Switch</div>
                            </Link>
                        </li>
                        <li className={Styles["item-component"]}>
                            <Link to='/dialog' className={Styles["item-link"]}>
                                <div className={Styles["item-icon"]}><i className={"icon-dialog"}/></div>
                                <div className={Styles["item-name"]}>Dialog</div>
                            </Link>
                        </li>
                        <li className={Styles["item-component"]}>
                            <Link to='/loadmore' className={Styles["item-link"]}>
                                <div className={Styles["item-icon"]}><i className={"icon-loading"}/></div>
                                <div className={Styles["item-name"]}>Load More</div>
                            </Link>
                        </li>
                        <li className={Styles["item-component"]}>
                            <Link to='/loadmore' className={Styles["item-link"]}>
                                <div className={Styles["item-icon"]}><i className={"icon-tab"}/></div>
                                <div className={Styles["item-name"]}>Tab</div>
                            </Link>
                        </li>
                        <li className={Styles["item-component"]}>
                            <Link to='/pull up' className={Styles["item-link"]}>
                                <div className={Styles["item-icon"]}><i className={"icon-pull"}/></div>
                                <div className={Styles["item-name"]}>Pull Up</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
})

module.exports = Index;
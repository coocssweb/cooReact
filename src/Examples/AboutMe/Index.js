/**
 * Created by 王佳欣欣欣 on 2016/7/22.
 * 关于我
 */

import React from 'react';
import CooPullBox from '../../CooComponents/CooPullBox';
import Style from './Index.css';

var Index = React.createClass({
    getInitialState(){
        return {
            isOpen: false
        }
    },
    onClose(){
        this.setState({
            isOpen: false
        })
    },
    onOpen(){
        this.setState({
            isOpen: true
        })
    },
    render(){
        return (
            <div className={Style['about-me']}>
                <a href="javascript:;" className={Style['btn-about-me']} onClick={this.onOpen}>关于我</a>
                <CooPullBox direction="bottom" isOpen={this.state.isOpen} onClose={this.onClose}>
                    <div className={Style['box-info']}>
                        <div className={Style["about-image"]}></div>
                        <div className={Style["about-solo"]}>王佳欣<br />会点画图 - 写点代码</div>
                    </div>
                </CooPullBox>
            </div>
        )
    }
})

module.exports = Index;

/**
 * Created by 王佳欣欣欣 on 16/7/21.
 */

import React, { PropTypes, Component } from 'react'
import Style from './index.css'

class index extends Component{
    constructor(props){
        super(props)

    }

    onCancel(e){
        if(typeof this.props.onCancel === 'function' ){
            this.props.onCancel()
        }
    }

    onConfirm(e){
        if(typeof this.props.onConfirm === 'function' ){
            this.props.onConfirm()
        }
    }

    render(){

        var header = null;
        if(this.props.title){
            header = (
                <div className={Style['coo-dialog-header']}>{this.props.title}</div>
            )
        }

        var footer = null;
        if(this.props.isConfirm && this.props.isCancel){
            footer = (
                <div className={Style['coo-dialog-footer']}>
                    <a href="javascript:;" className={Style['coo-btn-dialog-cancel']} onClick={this.onCancel.bind(this)}>取消</a>
                    <a href="javascript:;" className={Style['coo-btn-dialog-confirm']} onClick={this.onConfirm.bind(this)}>确定</a>
                </div>
            )
        }else if(this.props.isConfirm){
            footer = (
                <div className={Style['coo-dialog-footer']}>
                    <a href="javascript:;" className={Style['coo-btn-dialog-confirm']} onClick={this.onConfirm.bind(this)}>确定</a>
                </div>
            )
        }else if(this.props.isCancel){
            footer = (
                <div className={Style['coo-dialog-footer']}>
                    <a href="javascript:;" className={Style['coo-btn-dialog-cancel']} onClick={this.onCancel.bind(this)}>取消</a>
                </div>
            )
        }

        return (
            <div>
                <div className={`${Style['coo-mask']} ${this.props.isShow?null:Style['coo-hidden']}`} onClick={this.onCancel.bind(this)}>
                </div>
                <div className={`${Style['coo-dialog']} ${this.props.isShow?Style['coo-dialog-show']:null}`}>
                    {header}
                    <div className={Style['coo-dialog-body']}>
                        {this.props.children}
                    </div>
                    {footer}
                </div>
            </div>
        )
    }
}

index.propTypes = {
    isShow: PropTypes.bool,                 //显示状态
    title: PropTypes.string,                //标题
    isConfirm: PropTypes.bool.isRequired,   //是否显示确认按钮
    isCancel: PropTypes.bool.isRequired,    //是否显示取消按钮
    onConfirm: PropTypes.func,              //确认事件回调
    onCancel: PropTypes.func                //取消事件回调
}

export default index
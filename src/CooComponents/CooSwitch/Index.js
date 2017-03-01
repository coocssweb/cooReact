/**
 * Created by 王佳欣欣欣 on 2016/7/20.
 */

import React, { Component, PropTypes } from 'react'
import Style from './index.css'


export default class index extends Component{
    constructor(props){
        super(props)
        this.propTypes = {
            checked: PropTypes.bool,               //是否选中
            onChange: PropTypes.func.isRequired    //改变事件
        }
    }

    onChange(){
        this.props.onChange(!this.props.checked);
    }

    render(){

        return (
            <div className={ `${Style['coo-toggle-box']} ${this.props.checked?Style['coo-toggle-box-on']:''}`} onClick={this.onChange.bind(this)}>
                <span className={Style['coo-toggle-button']}></span>
            </div>
        )
    }
}
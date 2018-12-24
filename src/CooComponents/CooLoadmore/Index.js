/**
 * Created by 王佳欣欣欣 on 2016/7/21.
 * 加载更多组件
 */

import React, { PropTypes, Component } from 'react'
import Style from './index.css'

class index extends Component{
    constructor(props){
        super(props)

    }

    onLoad(e){
        if(this.props.isLoading){
            return
        }
        this.props.onLoad()
    }

    render () {
        return (
            <a href="javascript:;"
               className={`${Style['coo-btn-loadmore']} ${this.props.isLoading?Style['coo-btn-loadmore-loading']:null}`}
               onClick={this.onLoad.bind(this)}>
                <span className={Style['coo-icon-label']}>
                    <i className={Style['coo-icon-loadmore']} />
                    {this.props.isLoading?'加载中...':'加载更多'}
                </span>
                <span className={Style['coo-btn-loadmore-inner']}  />
            </a>
        )
    }
}

index.propTypes = {
    isLoading: PropTypes.bool.isRequired,       //正在加载中？
    onLoad: PropTypes.func.isRequired           //加载回调
}

export default index
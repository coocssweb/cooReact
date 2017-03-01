/**
 * Created by 王佳欣欣欣 on 2016/7/21.
 * 抽屉组件
 */

import React, { PropTypes, Component } from 'react'
import Style from './index.css'

class index extends Component{
    constructor(props){
        super(props)

    }


    onClose(e){
        this.props.onClose()
    }

    render(){

        return (
            <div>
                <div className={Style['coo-mask']+' '+(this.props.isOpen?'':Style['coo-hidden'])} onClick={this.onClose.bind(this)}>
                </div>
                <div className={`${Style['coo-pull-box']} ${Style['coo-pull-box-'+this.props.direction]} ${this.props.isOpen? Style['coo-pull-box-'+this.props.direction+'-open']: null}`}>
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}

index.propTypes = {
    direction: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default index
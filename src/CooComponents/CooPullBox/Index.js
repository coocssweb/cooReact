/**
 * Created by 王佳欣欣欣 on 2016/7/21.
 * 抽屉组件
 */

import React, { PropTypes, Component } from 'react'
import Style from './index.css'

export default class index extends Component{
    constructor(props){
        super(props)
        this.propTypes = {
            direction: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
            isOpen: PropTypes.bool.isRequired,
            onClose: PropTypes.func.isRequired
        }
    }


    onClose(e){
        this.props.onClose()
    }

    render(){

        return (
            <div>
                <div className={Styles['coo-mask']+' '+(this.props.isOpen?'':Styles['coo-hidden'])} onClick={this.onClose.bind(this)}>
                </div>
                <div className={`${Styles['coo-pull-box']} ${Styles['coo-pull-box-'+this.props.direction]} ${this.props.isOpen? Styles['coo-pull-box-'+this.props.direction+'-open']: null}`}>
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}
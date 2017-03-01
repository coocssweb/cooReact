/**
 * Created by 王佳欣欣欣 on 2016/7/21.
 * Tab组件
 */
import React, { Component, PropTypes } from 'react'
import Style from './index.css'

class index extends Component{
    constructor(props){
        super(props)

        this.state = {
            activeIndex: 0
        }
    }

    componentDidMount(){
        if(this.props.defaultIndex){
            this.setState({
                activeIndex: this.props.defaultIndex
            })
        }
    }

    onTab(index){
        if(index==this.props.activeIndex){
            return;
        }
        if(typeof this.props.onTab === 'function'){
            this.props.onTab(index)
        }
        this.setState({
            activeIndex: index
        })
    }

    render(){
        var slideStyle = { }
        slideStyle.width = 100/this.props.children.length + '%'
        slideStyle.left = this.state.activeIndex * 100/this.props.children.length + '%'

        var bodyContentStyle = {}
        bodyContentStyle.transform = 'translate(-' + slideStyle.left + ',0%)'
        bodyContentStyle.width = 100 * this.props.children.length + '%'

        var panelStyle = {}
        panelStyle.width = 100/this.props.children.length + '%'

        return (
            <div>
                <div className={Style['coo-tabs']}>
                    {
                        this.props.children.map(function (item, index) {
                            return (
                                <a key={'tab-header-'+index} href="javascript:;"
                                   className={Style['coo-tab-item']+' '+(index==this.state.activeIndex?Style['coo-tab-item-active']:'')}
                                   onClick={this.onTab.bind(this,index)}
                                >{item.props.title}</a>
                            )
                        },this)
                    }
                    <div className={`${Style['coo-slide']} ${this.props.isTransition?Style['coo-transition']:''}`} style={slideStyle}></div>
                </div>
                <div className={Style['coo-body']}>
                    <div className={`${Style['coo-body-content']} ${this.props.isTransition?Style['coo-transition']:''}`} style={bodyContentStyle}>
                        {
                            this.props.children.map(function (item, index) {
                                return (
                                    <div className={Style['coo-tab-panel']} style={panelStyle}>
                                        {item.props.children}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}


index.TabPanel = class tabPanel extends Component{
    constructor(props){
        super(props)
    }
}

index.propTypes = {
    isTransition: PropTypes.bool,               //是否开启动画
    defaultIndex: PropTypes.number,             //当前激活项
    onTab: PropTypes.func                       //tab事件回调
}

export default index
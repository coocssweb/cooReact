/**
 * Created by 王佳欣欣欣 on 2016/7/22.
 * 手风琴组件
 */
import React, { PropTypes, Component } from 'react'
import Style from './index.css'


class index extends Component{
    constructor(props){
        super(props)
        this.propTypes = {
            defaultIndex: PropTypes.number,          //当前展开项
            isOnly: PropTypes.bool.isRequired,       //是否值展开一项
            onToggle: PropTypes.func                 //切换展开回调
        }

        this.state = {
            opens: [],
            heights: []
        }
    }

    componentDidMount(){
        if(this.props.defaultIndex>0){
            this.state.opens.push(this.props.defaultIndex)
            this.forceUpdate()
        }


        var elements = document.getElementsByClassName(Style['coo-accordion-body-inner'])

        for(var i=0; i<elements.length; i++){
            this.state.heights.push(
                elements[i].clientHeight
            )
        }
    }

    getInitialState(){
        return {
            opens: [],
            heights: []
        }
    }

    onToggle(value){
        if(typeof this.props.onToggle === 'function'){
            this.props.onToggle(value)
        }
        if(this.props.isOnly){
            var opened = this.state.opens.pop()
            if(opened!==value){
                this.state.opens.push(value)
            }
        }else{
            var index = this.state.opens.indexOf(value)
            if(index>-1){
                this.state.opens.splice(index, 1)
            }else{
                this.state.opens.push(value)
            }
        }

        this.forceUpdate()
    }

    render(){
        return (
            <div className={Style['coo-accordion']}>
                {
                    this.props.children.map(function(item, index){
                        return (
                            <div  key={`${'accordion-'}${index}`} className={Style['coo-accordion-item']}>
                                <a href="javascript:;"
                                   className={Style['coo-btn-accordion']}
                                   onClick={this.onToggle.bind(this,index)}>
                                    <i className={`${Style['coo-ico']} ${this.state.opens.indexOf(index)>-1?Style['coo-ico-open']:null}`} />
                                    {item.props.title}
                                </a>
                                <div className={Style['coo-accordion-body']} style={this.state.opens.indexOf(index)>-1?{height: this.state.heights[index]+'px'}:null}>
                                    <div className={Style['coo-accordion-body-inner']}>
                                        {item.props.children}
                                    </div>
                                </div>
                            </div>
                        )
                    }, this)
                }
            </div>
        )
    }
}

index.AccordionPanel = class panel extends Component{
    constructor(props){
        super(props)
        this.propTypes = {

        }
    }
}

export default index
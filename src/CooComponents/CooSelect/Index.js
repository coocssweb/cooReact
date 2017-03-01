/**
 * Created by 王佳欣 on 2016/7/20.
 * 下拉框组件
 */
import React, { PropTypes, Component } from 'react'
import Styles from './index.css'
import ReactDom from 'react-dom'

function isDescendant(parent, child){
    var node = child.parentNode;
    while(node !== null){
        if(node === parent){
            return true;
        }
        node = node.parentNode;
    }
    return false;
}


class index extends Component{
    constructor(props){
        super(props)
        this.state = {
            isDropDown  : false,
            component: null
        }
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick)
    }
    componentDidMount(){
        document.addEventListener('click', this.handleClick.bind(this))
        this.state.component = ReactDom.findDOMNode(this)
    }
    /**
     * 监听页面点击，关闭下拉
     * @param e
     */
    handleClick(e) {
        if(e.target !== this.state.component && !isDescendant(this.state.component, e.target)){
            this.setState({
                isDropDown: false
            })
        }
    }
    /**
     * 下拉事件
     * @param e
     */
    onDrop(e){
        this.setState({
            isDropDown : !this.state.isDropDown
        })
    }
    /**
     * Select Change事件
     * @param e
     * @param item 格式 {value:'',display:''}
     */
    onChange(item, e){
        this.setState({
            isDropDown : false
        })
        if(item.value == this.props.default.value){
            return;
        }
        this.props.onChange(this.props.name, item);
    }
    render(){
        var dropItems = this.props.options.map(function(item,index){
            return (
                <a href="javascript:;"
                   key={index}
                   className={Styles['coo-select-item']+' '+(this.props.default&&this.props.default.value==item.value?Styles['coo-selected']:'')}
                   onClick={this.onChange.bind(this,item)}>
                    {item.display}
                </a>
            )
        },this);

        return (
            <div ref='select-box' className={`${Styles['coo-select-box']} ${this.state.isDropDown?Styles['coo-select-box-open']:''}`} id={this.props.name}>
                <div className={Styles['coo-select-display']}>
                    <div className={Styles['coo-select-value']} onClick={this.onDrop.bind(this)}>{this.props.default?this.props.default.display:''}</div>
                        <span className={Styles['coo-select-btn']} onClick={this.onDrop.bind(this)}>
                            <i className={this.state.isDropDown?'icon-up':'icon-down'}></i>
                        </span>
                </div>
                <div className={`${Styles['coo-select-dropbox']} ${this.state.isDropDown?Styles['coo-select-dropbox-open']:''}`}>
                    {dropItems}
                </div>
            </div>
        )
    }
}

index.propTypes = {
    name: PropTypes.string.isRequired,              //name，唯一值
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            display: PropTypes.string
        })
    ).isRequired,                                   //下拉框选项 格式：[{value:'',display:''}...]
    default: PropTypes.shape({
        value: PropTypes.string,
        display: PropTypes.string
    }),                                             //当选选中项 格式：{value:'',display:''}
    onChange: PropTypes.func.isRequired             //回调函数 回传（name,{value:'',display:''}）
}


export default index

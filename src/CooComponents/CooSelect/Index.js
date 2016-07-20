/**
 * Created by 王佳欣 on 2016/7/20.
 * 下拉框组件
 */

var React = require('react');
var PropTypes = React.PropTypes;
var Styles = require('./Index.css');
var $ = require('jquery');

var Index = React.createClass({
    propTypes:{
        name: PropTypes.string,             //name，唯一值
        boxStyle: PropTypes.object,            //自定义样式
        buttonStyle: PropTypes.object,            //自定义样式
        options: PropTypes.array,           //下拉框选项 格式：[{value:'',display:''}...]
        default: PropTypes.object,          //当选选中项 格式：{value:'',display:''}
        onChangeCb: PropTypes.func          //回调函数 回传（name,{value:'',display:''}）
    },
    getInitialState: function () {
        return {
            isDropDown  : false
        }
    },
    componentWillUnmount: function(){
        document.removeEventListener('click', this.handleClick);
    },
    componentDidMount: function(){
        document.addEventListener('click', this.handleClick);
    },
    /**
     * 监听页面点击，关闭下拉
     * @param e
     */
    handleClick: function (e) {
        var length = $(e.target).parents('#'+this.props.name).length;
        if(length==0){
            this.setState({
                isDropDown: false
            })
        }
    },
    /**
     * 下拉事件
     * @param e
     */
    onDrop: function(e){
        this.setState({
            isDropDown : !this.state.isDropDown
        })
    },
    /**
     * Select Change事件
     * @param e
     * @param item 格式 {value:'',display:''}
     */
    onChange: function(item, e){
        this.setState({
            isDropDown : false
        })
        if(item.value == this.props.default.value){
            return;
        }
        this.props.onChangeCb(this.props.name, item);
    },
    render: function(){

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
            <div className={Styles['coo-select-box']} id={this.props.name} style={this.props.boxStyle}>
                <div className={Styles['coo-select-display']}>
                    <div className={Styles['coo-select-value']} onClick={this.onDrop}>{this.props.default?this.props.default.display:''}</div>
                    <span className={Styles['coo-select-btn']} onClick={this.onDrop} style={this.props.buttonStyle}>
                        <i className={this.state.isDropDown?Styles['coo-icon-up']:Styles['coo-icon-down']}></i>
                    </span>
                </div>
                <div className={Styles['coo-select-dropbox']+' '+(this.state.isDropDown?'':Styles['hidden'])}>
                    {dropItems}
                </div>
            </div>
        )
    }
});

module.exports = Index;

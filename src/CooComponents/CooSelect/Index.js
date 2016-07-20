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
        boxStyle: PropTypes.object,                     //自定义样式
        buttonStyle: PropTypes.object,                  //自定义样式
        height: PropTypes.number,                       //高度
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
        onChangeCb: PropTypes.func.isRequired           //回调函数 回传（name,{value:'',display:''}）
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

        var boxStyle = {};
        var buttonStyle = {};
        var dropStyle = {};

        if(this.props.boxStyle){
            boxStyle = this.props.boxStyle;
        }

        if(this.props.buttonStyle){
            buttonStyle = this.props.buttonStyle;
        }

        if(this.props.height && this.props.height>0){
            boxStyle.height = this.props.height+'px';
            dropStyle.top = this.props.height+'px';
        }

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
            <div className={Styles['coo-select-box']+' '+(this.state.isDropDown?Styles['coo-select-box-open']:'')} id={this.props.name} style={boxStyle}>
                <div className={Styles['coo-select-display']}>
                    <div className={Styles['coo-select-value']} onClick={this.onDrop}>{this.props.default?this.props.default.display:''}</div>
                    <span className={Styles['coo-select-btn']} onClick={this.onDrop} style={buttonStyle}>
                        <i className={this.state.isDropDown?'icon-up':'icon-down'}></i>
                    </span>
                </div>
                <div className={Styles['coo-select-dropbox']+' '+(this.state.isDropDown?Styles['coo-select-dropbox-open']:'')} style={dropStyle}>
                    {dropItems}
                </div>
            </div>
        )
    }
});

module.exports = Index;

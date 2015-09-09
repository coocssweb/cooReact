var React = require("react");
var Base = require("Base");


var SearchBox = React.createClass({
    propTypes :{
        isSuggest       : React.PropTypes.bool,                       //是否显示
        suggestUrl      : React.PropTypes.string,                     //获取相关搜索的Url
        btnName         : React.PropTypes.string,                     //按钮名称
        isFocus         : React.PropTypes.bool,                       //是否获取焦点
        callback        : React.PropTypes.func                     //回调函数

    },
    getDefaultProps : function(){
        return {
            isFocus         : false,             //是否获取焦点
            isShowClear     : false,             //是否显示清楚按钮
            inputValue      : "",                //输入值
            suggestElement  : null,              //建议值
            btnName         : "搜索"
        }
    },
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    componentDidUpdate : function(){
        //输入框获取焦点
        if(this.props.isFocus){
            this.refs.key.getDOMNode().focus();
        }
    },
    clearInput : function(){
        this.refs.key.getDOMNode().value="";
        this.props.inputValue="";
        this.props.isShowClear = false;
        this.props.isFocus = true;
        this.setState({
            isUpdate : !this.state.isUpdate
        })
    },
    //输入框失去焦点
    onBlur : function(){
        this.props.isFocus = false;
        this.props.suggestElement = null;
        this.setState({
            isUpdate : !this.state.isUpdate
        });
    },
    onFocus: function(){
      this.props.isFocus = true;
    },
    //输入框值发生变化
    inputChange : function(){
        this.props.inputValue = React.findDOMNode(this.refs.key).value;
        this.props.isShowClear = this.props.inputValue!="";

        if(this.props.isSuggest){
            this.getSuggest();
        }
        this.setState({
            isUpdate : !this.state.isUpdate
        })
    },
    //获取相关搜索
    getSuggest : function(){
        var suggestData = Base.loadUrl(this.props.suggestUrl,"keys");
        if(suggestData.length>0&&this.props.inputValue!="") {
            this.props.suggestElement = suggestData.map(function(key, index) {
                return (
                    <a href = "javascript:;">{key}</a>
                )
            });
        }else{
            this.props.suggestElement = null;
        }
    },
    //搜索事件
    onSearch : function(){
        //回调函数
        if(this.props.callback&& $.tirm(this.props.inputValue)!="") {
            this.props.callback(this.props.inputValue);
        }
    },
    render : function(){
        var suggestElement;
        if(this.props.isSuggest&&this.props.suggestElement!=null){
            suggestElement = (
                <div className="suggest-panel">
                    <div className="suggest-content">
                        {this.props.suggestElement }
                    </div>
                </div>
            )
        }

        return (
            <div className="search-box">
                <div className="search-input">
                    <i className="fa fa-search"></i>
                    <input type="text" onChange={this.inputChange} onFocus ={this.onFocus} onBlur={this.onBlur} placeholder="请输入关键字" ref="key" />
                    <div className={"clearInput "+(this.props.inputValue ==""?"hide":"")} onClick={this.clearInput}><i className="fa fa-times-circle"></i></div>
                    <a href="javascript:;" onClick={this.onSearch} className ="btn btn-primary btn-search">{this.props.btnName}</a>
                </div>
                {suggestElement}
            </div>
        )
    }

});

module.exports = SearchBox;

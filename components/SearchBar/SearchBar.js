var React = require("react");
var Base = require("Base");
var Tip  = require("Tip");
var $ =require("jquery");
var SearchBar = React.createClass({
    propTypes :{
        hotkeyElement   : React.PropTypes.element,                       //显示信息
        searchCallBack  : React.PropTypes.func,                          //确认回调函数
        cancelCallBack  : React.PropTypes.func,                          //取消回调函数
        relkeyUrl       : React.PropTypes.string                         //相关搜索请求
    },
    getDefaultProps : function(){
        return {
            isFocus : false,
            inputValue : "",
            isShowClear : false,
            relData     : [],
            relElement  : null,
            relPanelElement : null
        }
    },
    getInitialState : function(){
        return {
            isFocus : false,
            isUpdate : false
        }
    },
    componentDidUpdate : function(){
        if(this.state.isFocus){
            this.refs.key.getDOMNode().focus();
        }
    },
    focusIn : function(e){
        Base.pauseEvent(e);
        this.setState({
            isFocus : true
        })
    },
    focusOut : function(){
        this.setState({
            isFocus : false
        })
    },
    onSearch : function(e){
        Base.pauseEvent(e);
        var keyInput = $.trim( React.findDOMNode(this.refs.key).value);
        this.props.relPanelElement = null;
        if(keyInput!=""){
            this.props.searchCallBack(keyInput);
        }
    },
    onCancel : function(){
        this.setState({
            isFocus : false
        })
        if(this.props.cancelCallBack){
            this.props.cancelCallBack();
        }
    },
    clearInput : function(){
        this.refs.key.getDOMNode().value="";
        this.props.inputValue="";
        this.props.isShowClear = false;
        this.props.relPanelElement = null;
        this.setState({
            isUpdate : !this.state.isUpdate
        })
    },
    getRelkey : function(){
        this.props.relData = Base.loadUrl(this.props.relkeyUrl,"keys");

        if(this.props.relData.length>0&&this.props.inputValue!="") {
            this.props.relElement = this.props.relData.map(function(key, index) {
                return (
                    <a href = "javascript:;">{key}</a>
                )
            });

            this.props.relPanelElement = (
                <div className="suggest-panel">
                    <div className="suggest-content">
                        {this.props.relElement }
                    </div>
                </div>
            )

        }else{
            this.props.relPanelElement = null;
        }
    },
    inputChange : function(){
        this.props.inputValue = React.findDOMNode(this.refs.key).value;
        this.getRelkey();
        if(
            (!this.props.isShowClear&&this.props.inputValue!="")|| (this.props.isShowClear&&this.props.inputValue=="")
        ){
            this.props.isShowClear = !this.props.isShowClear;
        }
        this.setState({
            isUpdate : !this.state.isUpdate
        })
    },
    render : function(){
        var searchElement;
        if(this.state.isFocus){
            searchElement = (
                <div className="search-wrapper search-panel">
                <div className="search-input">
                    <i className="fa fa-search"></i>
                    <input type="text" onChange={this.inputChange} placeholder="请输入关键字" ref="key" />
                    <div className={"clearInput "+(this.props.inputValue ==""?"hide":"")} onClick={this.clearInput}><i className="fa fa-times-circle"></i></div>
                    <a href="javascript:;" onClick={this.onSearch} className ="btn btn-search">搜索一下</a>
                </div>
                {this.props.relPanelElement}
                <div className="search-list-keys mt15">
                    <h2>热门搜索词</h2>
                    <div className="hot-keys mt10 clearfix">
                        {this.props.hotkeyElement}
                    </div>
                </div>
                <a href="javascript:;" className="btn btn-closeSearch" onClick={this.onCancel}>关闭搜索</a>
                </div>
            )
        }else{
            searchElement = (
                <div className="search-wrapper">
                <div className="search-input">
                    <i className="fa fa-search"></i>
                    <a href="javascript:;" className="to-search" onClick={this.focusIn}>搜索</a>
                </div></div>
            )
        }
        return (
            <div>
              {searchElement}
            </div>
        )
    }
})

module.exports = SearchBar;
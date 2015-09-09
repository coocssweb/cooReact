var React = require("react");
var Base = require("Base");
var Tip  = require("Tip");
var SearchBox = require("SearchBox");
var $ =require("jquery");
var SearchBar = React.createClass({
    propTypes :{
        hotkeyElement   : React.PropTypes.element,                       //显示信息
        searchCallBack  : React.PropTypes.func,                          //确认回调函数
        cancelCallBack  : React.PropTypes.func,                          //取消回调函数
        btnName         : React.PropTypes.string,                        //按钮名称
        isSuggest       : React.PropTypes.bool,                          //是否显示相关搜索
        suggestUrl      : React.PropTypes.string                         //相关搜索请求

    },
    getDefaultProps : function(){
        return {
            isShowSearch : false
        }
    },
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    focusIn : function(){
        this.props.isShowSearch =  true;
        this.setState({
            isUpdate : !this.state.isUpdate
        })
    },
    onCancel : function(){
        this.props.isShowSearch =  false;
        this.setState({
            isUpdate : !this.state.isUpdate
        })
        if(this.props.cancelCallBack){
            this.props.cancelCallBack();
        }
    },
    render : function(){
        var searchElement;
        if(this.props.isShowSearch){
            searchElement = (
                <div className="search-bar">
                <header className="clearfix">
                    <a href="javascript:;" className = "header-back" onClick={this.onCancel}><i className="fa fa-angle-left fa-2"></i></a>
                    <span className="header-title">搜索热门</span>
                </header>
                <div className="search-wrapper mt10">
                <SearchBox isSuggest={this.props.isSuggest} suggestUrl={this.props.suggestUrl}
                        btnName={this.props.btnName} isFocus={true}
                        callback={this.searchCallBack} />

                </div>
                <div className="search-list-keys mt15">
                    <h2>热门搜索词</h2>
                    <div className="hot-keys mt10 clearfix">
                        {this.props.hotkeyElement}
                    </div>
                </div>
                </div>
            )
        }else{
            searchElement = (
                <div className="search-input">
                    <i className="fa fa-search"></i>
                    <a href="javascript:;" className="to-search" onClick={this.focusIn}>搜索</a>
                </div>
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
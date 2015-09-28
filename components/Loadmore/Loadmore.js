var React = require('react');
var Styles = require('./Loadmore.css');
var Loadmore=React.createClass({
    propTypes :{
        title           : React.PropTypes.string,                              //标题
        loadingTitle    : React.PropTypes.string,                              //加载标题
        loadoverTitle   : React.PropTypes.string,                              //加载完成标题
        hasMore         : React.PropTypes.string,                              //还有更多
        callback        : React.PropTypes.func                             //回调函数
    },
    getDefaultProps : function(){
        return {
            title           : "加载更多",  //标题
            loadingTitle    : "正在加载更多 . . . ",
            loadoverTitle   : "没有更多了 . . .",
            isloading       : false,      //正在加载
            hasMore         : false   //更多信息
        }
    },
    componentWillUnmount : function(){
            var abc="";
    },
    getInitialState : function(){
        return {
            isloading : false
        }
    },
    onLoadover : function(){
        this.setState({
                isloading : false
        })
    },
    onLoadmore : function(){
        this.setState({
            isloading : true
        })
        //回调函数，加载完成后通知，Loadmore设置isloading 为false
        this.props.callback(this.onLoadover);
    },
    render:function(){
        var loadmoreElement = null;
        if(!this.state.isloading) {
            if (this.props.hasMore) {
                loadmoreElement = (
                    <a href="javascript:;" className={Styles['loadmore']} onClick={this.onLoadmore}>
                        {this.props.title}
                    </a>
                )
            } else {
                loadmoreElement = (
                    <a href="javascript:;" className={Styles['loadover']}>
                        {this.props.loadoverTitle}
                    </a>
                )
            }
        }else{
            loadmoreElement = (
                <div className={Styles["spinner"]}>
                    <div className={Styles["bounce1"]}></div>
                    <div className={Styles["bounce2"]}></div>
                    <div className={Styles["bounce3"]}></div>
                </div>
            )
        }

        return (
            loadmoreElement
        )
    }
});

module.exports=Loadmore;
//加载更多
/*
 参数说明
 hasmore：还有更多？
 isloading: 正在加载？
 onLoadmore: 加载更多事件
 调用方法<Loadmore onLoadmore={this.onLoadmore} >
 */
var React = require('react');

var Loadmore=React.createClass({
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            isloading : false,  //正在加载
            hasMore   : false   //更多信息
        }
    },
    onLoadmore : function(){
        this.props.isloading = true;
        this.setState({
            isUpdate : !this.state.isUpdate
        })
        this.props.onLoadmore();
    },
    render:function(){
        var loadElement,
            loadingElement;

        if(!this.props.hasMore){
            return ( <div className="loadover">没有更多信息了 . . .</div> )
        }else{
            if(this.props.isloading){
                loadElement = ( <span className="loading "></span> )
                loadingElement = (<div className="loding-info">正在加载电影 . . .</div>);
            }else{
                loadElement = ( <span>加载更多电影</span> )
            }

            return (
                <a href="javascript:;" className={"btn-loadmore "+(this.props.hasMore?"":"hide")+(this.props.isloading?"active":"")} onClick={this.props.hasMore?this.onLoadmore : null}>
                    {loadElement}
                    {loadingElement}
                </a>

             );
        }


    }
});

module.exports=Loadmore;
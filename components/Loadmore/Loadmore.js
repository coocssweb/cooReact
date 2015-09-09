var React = require('react');

var Loadmore=React.createClass({
    propTypes :{
        title           : React.PropTypes.string,                              //标题
        loadingTitle    : React.PropTypes.string,                              //加载标题
        loadoverTitle   : React.PropTypes.string,                              //加载完成标题
        hasMore         : React.PropTypes.string,                              //还有更多
        loadCallBack        : React.PropTypes.func                             //回调函数
    },
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            title           : "加载更多",  //标题
            loadingTitle    : "正在加载更多 . . . ",
            loadoverTitle   : "没有更多信息了 . . .",
            isloading       : false,      //正在加载
            hasMore         : false   //更多信息
        }
    },
    onLoadmore : function(){
        this.props.isloading = true;
        this.setState({
            isUpdate : !this.state.isUpdate
        })
        this.props.loadCallBack();
    },
    render:function(){
        var loadElement,
            loadingElement;

        if(!this.props.hasMore){
            return ( <div className="loadover">{this.props.loadoverTitle}</div> )
        }else{
            if(this.props.isloading){
                return (
                    <div className="loadmore-wrap active">
                        {this.props.loadingTitle}
                    </div>
                )
            }else{
                return (
                    <a href="javascript:;" className={"loadmore-wrap"+(this.props.hasMore?"":"hide")} onClick={this.props.hasMore?this.onLoadmore : null}>
                        {this.props.title}
                    </a>
                )

            }



        }


    }
});

module.exports=Loadmore;
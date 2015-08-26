//加载更多
/*
 参数说明
 hasmore：还有更多？
 isloading: 正在加载？
 onLoadmore: 加载更多事件
 调用方法<Loadmore isload=true onLoadmore={this.onLoadmore} >
 */
var React = require('react');

var Loadmore=React.createClass({
        render:function({
        return (
            <a href="javascript:;" className={"btn btn-loadmore "+this.props.hasmore?"":"hiden"} onClick={this.props.onLoadmore}>
                <i className={"fa fa-spinner fa-1x loading "+this.props.isloading?"":"hiden"}></i> 加载更多
            </a>
        );
    });
});

module.exports=Loadmore;
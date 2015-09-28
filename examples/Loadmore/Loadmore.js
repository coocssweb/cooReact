var React = require("react");
var Base = require("Base");
var Loadmore = require("Loadmore");
var $ =require("jquery");
var TestLoadmore = React.createClass({
    getInitialState : function(){
        return {
            loadmore : (
                <Loadmore hasMore={true} title="点击查看更多" loadingTitle="加载中. . ." loadoverTitle="没有更多了. . ." callback ={this.onLoadmore} />
            )
        }
    },
    onLoadmore : function(callback){
        setTimeout(this.loadData.bind(this,callback),5000);
    },
    loadData:function(callback){
        if(callback){
            callback();
        }

        this.setState({
            loadmore :(
                <Loadmore hasMore={false} title="点击查看更多" loadingTitle="加载中. . ." loadoverTitle="没有更多了. . ." />
            )
        })
    },
   render : function(){
       return (
            this.state.loadmore
       );
   }
});

React.render(
<TestLoadmore />,
    document.body
);
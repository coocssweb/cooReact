var React = require("react");
var Base = require("Base");
var Loadmore = require("Loadmore");
var $ =require("jquery");
var TestLoadmore = React.createClass({
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            datas : [],
            elements : [],
            isLoading : false,
            hasMore : false
        }
    },
    componentWillMount:function(){
        var reslult = Base.loadUrl("./data.js","result")
        this.props.datas = reslult.datas;
        this.props.hasMore = reslult.hasMore;
    },
    onLoadmore : function(){
        setTimeout(this.loadData,5000);
    },
    loadData:function(){

        var reslult = Base.loadUrl("./data2.js","result")
        this.props.datas = reslult.datas;
        this.props.hasMore = reslult.hasMore;

        this.setState({
            isUpdate : !this.state.isUpdate
        })

    },
   render : function(){
       var newElements = this.props.datas.map(function(sliderValue,index){
           return (
               <li className="list-slip-item clearfix">
                   <div className="slip-item">
                   <div className="plus-desc">
                        <h2><i className={"fa fa-"+sliderValue.letter}></i>{sliderValue.name}</h2>
                        <p>{sliderValue.keyword}</p>
                   </div>
                   </div>
                </li>
            )
       });

        this.props.elements.push(newElements);

       return (
           <div>
                <ul className="list-slide-group list-slide-delete">
                    {this.props.elements}
                </ul>
                <Loadmore hasMore={this.props.hasMore} title={"加载更多电影"} loadingTitle={"正在加载电影. . ."} loadoverTitle={"没有更多电影了. . ."} loadCallBack ={this.onLoadmore} />
            </div>
       );
   }
});

React.render(
<TestLoadmore />,
    document.body
);
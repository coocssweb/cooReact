var React = require("react");
var $ =require("jquery");
var ScrollLoadmore = React.createClass({
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps:function(){
      return {
          datas         : [],       //数据
          isLoadover    : false,    //加载结束
          isLoading     : false,    //正在加载
          hasMore       : false     //还有更多
      }
    },
    componentWillMount:function(){
        //初始化数据
        this.loadData(this.props.dataUrl);
    },
    onScroll : function(){
        var $scroll =$(".scroll-in");
        var scrollHeight = $scroll[0].scrollHeight;
        var scrollTop =  $scroll[0].scrollTop;
        var height =$scroll.height();
        if(!this.props.isLoading) {
            if ((height + scrollTop) >= scrollHeight) {
                this.loadMore();
                this.props.isLoadover = false;
                this.props.isLoading = true;
                this.setState({
                    isUpdate: this.state.isUpdate
                })
            }
        }
    },
    loadMore:function(){
        var $that = this;
        this.props.dataUrl=this.props.dataUrl2;
        setTimeout($that.loadData,5000);
    },
    loadData:function(){
        var data_url = this.props.dataUrl;
        var $that = this;
        $.ajax({
            url : data_url,
            dataType : 'json',
            async : true,
            success : function(data) {
                $that.props.datas = $that.props.datas.concat(data.datas);
                $that.props.hasMore = data.hasMore;
                $that.props.isLoadover = true;
                $that.props.isLoading = false;
                $that.setState({
                    isUpdate : !$that.state.isUpdate
                })
            }
        });

    },
    render : function(){
        var sliderItems = this.props.datas.map(function(sliderValue,index){
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

        return (
            <div className="scroll-in" onScroll={this.props.hasMore?this.onScroll : null }>
                <ul className="list-slide-group list-slide-delete">
                    {sliderItems}
                </ul>
                <div className={"loadmore mt10 "+(this.props.isLoadover?"hide":"")}>
                    <span  className="loading"></span>
                </div>
                <div className={"loadover "+(this.props.hasMore?"hide":"") }>
                    没有更多信息了 . . .
                </div>
            </div>
        )

    }
})

module.exports =  ScrollLoadmore;
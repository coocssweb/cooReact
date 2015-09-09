var React = require("react");
var $ =require("jquery");
var ScrollLoadmore = React.createClass({
    propTypes :{
        loadingTitle    : React.PropTypes.string,                              //加载标题
        loadoverTitle   : React.PropTypes.string,                              //加载完成标题
        hasMore         : React.PropTypes.string,                              //还有更多
        elements        : React.PropTypes.element,                             //元素
        loadCallBack    : React.PropTypes.func                             //回调函数
    },
    getInitialState : function(){
        return {
            isLoading : false
        }
    },
    getDefaultProps:function(){
      return {
          isLoading     : false,     //正在加载
          loadingTitle  : "正在加载更多. . . ",
          loadoverTitle : "没有更多信息. . . "
      }
    },
    onScroll : function(){
        var $scroll =$(".scroll-in");
        var scrollHeight = $scroll[0].scrollHeight;
        var scrollTop =  $scroll[0].scrollTop;
        var height =$scroll.height();
        if(!this.props.isLoading) {
            if ((height + scrollTop) >= scrollHeight) {
                //回调函数
                this.props.loadCallBack();
                this.props.isLoading = true;
                this.setState({
                    isUpdate: this.state.isUpdate
                })
            }
        }
    },
    render : function(){
        return (
            <div className="scroll-in" onScroll={this.props.hasMore?this.onScroll : null }>
                {this.props.elements}
                <div className={"loading-wrap "+(this.props.isLoading?"":"hide")}>
                    {this.props.loadingTitle}
                </div>
                <div className={"loadover "+(this.props.hasMore?"hide":"") }>
                    {this.props.loadoverTitle}
                </div>
            </div>
        )
    }
})

module.exports =  ScrollLoadmore;
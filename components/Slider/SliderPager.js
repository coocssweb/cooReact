var React = require("react");
var SliderPager = React.createClass({
    propTypes :{
        pageCount          : React.PropTypes.number,                              //图片信息
        pageIndex          : React.PropTypes.number                               //z-index
    },
    render : function(){
        var pager = [];
        for(var i=0;i<this.props.pageCount;i++){

            pager.push(
                (<span className={this.props.pageIndex == i ? "active" : ""}></span>)
            )
        }
        return (
            <div>
            {pager}
            </div>
        )
    }
})

module.exports =  SliderPager;

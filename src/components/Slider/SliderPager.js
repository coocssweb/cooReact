var React = require("react");
var SliderPager = React.createClass({
    propTypes :{
        pageCount          : React.PropTypes.number,                              //图片信息
        pageIndex          : React.PropTypes.number                               //z-index
    },
    render : function(){
        var pager = [];

        var pageIndex = this.props.pageIndex;
        if(this.props.isTouchend){
            if(this.props.isNext){
                pageIndex = this.props.pageIndex +1;
                if(pageIndex>=this.props.pageCount){
                    pageIndex = 0;
                }
            }else{
                pageIndex = this.props.pageIndex -1;
                if(pageIndex <0){
                    pageIndex = this.props.pageCount-1;
                }
            }
        }

        for(var i=0;i<this.props.pageCount;i++){

            pager.push(
                (<span className={pageIndex == i ? "active" : ""}></span>)
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

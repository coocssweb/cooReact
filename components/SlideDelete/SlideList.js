var React = require("react");
var SlideItem = require("./SlideItem.js");

var SlideList = React.createClass({
    getInitialState : function(){
        return {
            isReset : false         //是否重置
        }
    },
    getDefaultProps : function(){
        return {
            deleteIndex : -1       //当前位置
        }
    },
    setTranslateIndex : function(index,isTranslate){
        /**
         * 重新设置选项isTranslate状态
         */
        this.props.deleteIndex = index;
        this.props.slides[index].isTranslate = isTranslate;

        /**
         * 重新设置state，触发渲染
         */
        this.setState({
            isReset : !this.state.isReset
        });

    },
    render : function(){
        var $that = this;
        var slideItems = this.props.slides.map(function(slipValue,index){
            /**
             *获取选项的 isTranslate 状态
             */
            var isTranslate = $that.props.deleteIndex == index ? $that.props.slides[index].isTranslate : false;
            return (
              <SlideItem dataValue = {slipValue}
                        dataIndex={index}
                        isTranslate={isTranslate}
                        deleteIndex={$that.props.deleteIndex}
                        setTranslateFunc={$that.setTranslateIndex} />
            );
        })
        return (
            <ul className="list-slide-group list-slide-delete">
            {slideItems}
            </ul>
        )
    }
});

module.exports = SlideList;
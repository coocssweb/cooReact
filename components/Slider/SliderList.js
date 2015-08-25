var React = require("react");
var $ = require("jquery");
var SliderItem = require("./SliderItem");

var SliderList = React.createClass({
    //初始化状态
    getInitialState :function(){
        return {
            isSlider : false
        }
    },
    //渲染
    render : function () {
        var $that = this;
        //遍历构造幻灯片项
        var SliderItems = this.props.sliders.map(function(sliderValue,index){
            //默认首页显示
            var isShow = false;
            if(!$that.state.isSlider && index==0){
                isShow = true;
            }
            return (
                <SliderItem dataImage = {sliderValue} dataIndex = {index} dataIsShow = {isShow} />
            );
        })

        return (
            <div id="slider-inner">
                {SliderItems}
            </div>
        )
    }
});

module.exports = SliderList;
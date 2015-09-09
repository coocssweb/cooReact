/**
 * 幻灯片组件
 */
var React = require("react");
React.initializeTouchEvents(true);
var Base = require("Base");
var $ = require("jquery");
var SliderList = require("./SliderList.js");

var Slider = React.createClass({
    propTypes :{
        sliders         : React.PropTypes.node,
        isPager         : React.PropTypes.bool,                               //显示图片信息
        isHorizontal    : React.PropTypes.bool,                               //方向
        isLoop          : React.PropTypes.bool,                               //是否循环
        delateWidth     : React.PropTypes.number                              //触发值
        },
    getDefaultProps : function(){
        return {
            data : []
        }
    },
    render : function(){
        return (


        )
    }
});

module.exports = Slider;
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
        dataUrl         : React.PropTypes.string,                             //图片
        isPager         : React.PropTypes.bool,                               //显示图片信息
        isHorizontal    : React.PropTypes.bool,                               //方向
        isLoop          : React.PropTypes.bool,                               //是否循环
        delateWidth     : React.PropTypes.number                              //触发值
        },
    getInitialState : function(){
      return {
            isLoadOver : false
        }
    },
    getDefaultProps : function(){
        return {
            data : []
        }
    },
    componentWillMount:function(){
        this.props.data = Base.loadUrl(this.props.dataUrl,"images");
        var $that =this;
        //加载图片
        this.props.data.map(function(sliderValue,index){
            var img = new Image();
            $(img).load(function() {
                if(index==$that.props.data.length-1){
                    $that.setState({
                        isLoadOver : true
                    });
                }
            })
            .error(function() {
            })

            //设置src
            .attr("src", sliderValue.src);
        });
    },
    render : function(){
        if(this.state.isLoadOver) {
            return (
                <div id="slider">
                    <SliderList sliders = {this.props.data} isPager ={this.props.isPager} isHorizontal={this.props.isHorizontal} />
                </div>
            )
        }else{
            return (
                <div id="slider">
                    <div id="loading"><img src="/public/images/loading.png" /></div>
                </div>
                )
        }
    }
});

module.exports = Slider;
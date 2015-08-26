/**
 * 幻灯片组件
 */
var React = require("react");
var $ = require("jquery");
var SliderList = require("./SliderList.js");

var Slider = React.createClass({
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
      this.initData();
    },
    initData : function(){
        var data_url = this.props.dataUrl;
        //ajax加载测试数据
        var $that = this;
        $.ajax({
            url : data_url,
            dataType : 'json',
            async : false,
            success : function(data) {
                $that.props.data = data.images;
            }
        });
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
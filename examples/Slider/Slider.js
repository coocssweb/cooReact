var React = require("react");
React.initializeTouchEvents(true);
var Base = require("Base");
var SliderList = require("Slider");
var $ =require("jquery");

var SliderTest = React.createClass({
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
                var elements = this.props.data.map(function(sliderValue,index){
                    var styleElement={

                    };
                    styleElement["backgroundImage"] = "url(" + sliderValue.src + ")";
                    return (
                        <div className="slide-image" style={styleElement} ></div>
                    )
                })

                return (
                    <SliderList sliders= {elements} isPager ={this.props.isPager} slideType={this.props.slideType} isHorizontal={this.props.isHorizontal} />
                )
            }else{
                return (
                    <div className="slider">
                        <div className="loading"><img src="/public/images/loading.png" /></div>
                    </div>
                )
            }

    }
});

React.render(
    <SliderTest dataUrl="./data.js" isPager={true} isHorizontal = {true} slideType="drawer"/>,
        document.body
);
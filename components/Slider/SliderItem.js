var React = require("react");

var SliderItem = React.createClass({
    getInitialState : function(){
      return {

      }
    },
    getDefaultProps : function(){
        return{
            is
        }
    },
    onTouchStart : function(){

    },
    onTouchMove : function(){

    },
    onTouchEnd : function(){

    },
    render : function(){
        var styleElement ={
            "background-image" : "url(" + this.props.dataImage.src + ")"
        }

        var className  = this.props.dataIsShow?"":"hide";

        //事件组合
        var Events = {
            onTouchStart : this.onTouchStart,
            onTouchMove : this.onTouchMove,
            onTouchEnd : this.onTouchEnd
        }

        return (
            <div className={"slider-item " + className } style={styleElement} {...Events}>
            </div>
        )
    }
});

module.exports =  SliderItem;
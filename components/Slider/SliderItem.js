var React = require("react");
React.initializeTouchEvents(true);
var Base =require("Base");
//浏览器前缀
var _prefixStyle = Base.prefixStyle();
var SliderItem = React.createClass({
    propTypes :{
        image           : React.PropTypes.object,                               //图片信息
        zIndex          : React.PropTypes.number,                               //z-index
        isShow          : React.PropTypes.number,                               //是否显示
        translateDelate : React.PropTypes.number,                               //变形距离
        isTouchdown     : React.PropTypes.bool                                  //是否正在触屏
    },
    render : function(){

        var translate = this.props.isHorizontal?'translate('+this.props.translateDelate+'px,0)' : 'translate(0,'+this.props.translateDelate+'px)';

        var styleElement ={};
        styleElement["backgroundImage"] = "url(" + this.props.image.src + ")";
        styleElement[_prefixStyle+"transform"] = translate;
        styleElement["zIndex"] = this.props.zIndex;

        //为结束添加过渡效果
        if(!this.props.isTouchdown){
            styleElement[_prefixStyle+"transition"] = "all 0.3s";
        }

        return (
            <div className={"slider-item " + (this.props.isShow?"":"hide") }
                 style={styleElement}></div>
        )
    }
});

module.exports =  SliderItem;
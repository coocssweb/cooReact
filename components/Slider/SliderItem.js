var React = require("react");
var Base =require("Base");
//浏览器前缀
var _prefixStyle = Base.prefixStyle();
var SliderItem = React.createClass({
    getInitialState : function(){
      return {
          touchDelate : 0,        //滑动距离
          startPos    : null,     //起始坐标
          nowPos      : null,     //滑动坐标
          isTouchDown : false,    //是否正在触屏
          isNext      : true      //是否下一页
      }
    },
    getDefaultProps : function(){
        return{
            delateWidth : 50,        //成功距离
            isEnd       : false      //结束操作
        }
    },
    //渲染完成后
    componentDidUpdate : function(){
        if(this.props.isTouchEnd){
            this.props.translateDelate = this.props.endTranslate;
            this.resetParam();
        }
    },
    resetParam : function(){
        /**
         * 重置参数
         */
        this.props.isTouchEnd = false;
        this.props.isEnd = true;
        this.setState({
            touchDelate : 0,
            startPos    : null,
            nowPos      : null,
            isTouchDown : false,
            isNext      : true
        });
    },
    onTouchStart : function(e){
        if(this.state.isTouchDown){
            return ;
        }
        this.state.isTouchDown = true;
        /**
         * 获取开始触屏的坐标
         */
        var touch=window.event.touches[0]||window.event.changedTouches[0];

        this.setState({
            startPos : {
                x : touch.pageX,
                y : touch.pageY
            }
        });
    },
    onTouchMove : function(e){
        if(!this.state.isTouchDown){
            return;
        }
        //获取滑动坐标
        var touch=window.event.touches[0]||window.event.changedTouches[0];
        this.setState({
            nowPos : {
                x : touch.pageX,
                y : touch.pageY
            }
        });

        if(this.props.isHorizontal){
            this.state.touchDelate = this.state.nowPos.x - this.state.startPos.x;
        }else{
            this.state.touchDelate = this.state.nowPos.y - this.state.startPos.y ;
        }

        this.state.isNext = this.state.touchDelate<0;

        if(Math.abs(this.state.touchDelate)>0){
            this.props.onTranslatePage(this.props.index, this.state.isNext, this.state.touchDelate);
        }


    },
    onTouchEnd : function(e){
        if(!this.state.isTouchDown){
            return;
        }
        //判断切换成功？
        if(Math.abs(this.state.touchDelate)>0) {
            if (Math.abs(this.state.touchDelate) > this.props.delateWidth) {
                this.props.onTranslateSuccess(this.props.index, this.state.isNext, this.state.touchDelate);
            } else {
                this.props.onTranslateFail(this.props.index, this.state.isNext, this.state.touchDelate);
            }
        }
    },
    render : function(){

        var translate = this.props.isHorizontal?'translate('+this.props.translateDelate+'px,0)' : 'translate(0,'+this.props.translateDelate+'px)';

        var styleElement ={};
        styleElement["backgroundImage"] = "url(" + this.props.image.src + ")";
        styleElement[_prefixStyle+"transform"] = translate;
        styleElement["zIndex"] = this.props.zIndex;

        //为结束添加过渡效果
        if(!this.props.isTouching){
            styleElement[_prefixStyle+"transition"] = "all 0.3s";
        }
        var className  = this.props.isShow?"":"hide";

        //事件组合
        var Events = {
            onTouchStart : this.onTouchStart,
            onTouchMove : this.onTouchMove,
            onTouchEnd : this.onTouchEnd
        }

        return (
            <div className={"slider-item " + className }
                 style={styleElement}
                 {...Events}></div>
        )
    }
});

module.exports =  SliderItem;
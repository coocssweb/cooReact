var React = require("react");
var $ = require("jquery");
var Base =require("Base");
//浏览器前缀
var _prefixStyle = Base.prefixStyle();

var SlidePushMenu = React.createClass({
    getInitialState : function(){
        return {
            isUpdate : false    //是否更新
        }
    },
    getDefaultProps : function(){
        return {
            width            : 0,        //屏幕宽度
            isInit           : true,     //是否初始化
            isTranslate      : false,    //是否已经变形
            maxDeg           : 30,       //有效角度
            nowDeg           : 0,        //现在的角度
            effectWidth      : 0,        //起作用的距离
            menuScale        : 1,        //菜单缩放值
            menuTranslate    : 0,        //菜单变形范围
            contentScale     : 1,        //内容缩放值
            contentTranslate : 0,        //内容变形范围
            maskPercent      : 0,        //遮罩层百分比
            isTouchDown      : false,    //是否触屏
            startPos         :{          //开始位置
                x : 0,
                y : 0
            },
            nowPos           :{          //结束位置
                x : 0,
                y : 0
            },
            touchDelate      :{          //滑动距离
                x : 0,
                y : 0
            }
        }
    },
    componentDidMount : function(){
        this.props.width = $(window).width();
    },
    onTouchStart : function(){
        if(this.props.isTouchDown){
            return;
        }
        this.props.isInit = false;
        this.props.isTouchDown = true;
        var touch=window.event.touches[0]||window.event.changedTouches[0];
        this.props.startPos = {
            x : touch.pageX,
            y : touch.pageY,
        }
    },
    onTouchMove : function(){
        if(!this.props.isTouchDown){
            return;
        }
        var touch=window.event.touches[0]||window.event.changedTouches[0];
        this.props.nowPos = {
            x : touch.pageX,
            y : touch.pageY,
        }
        this.props.touchDelate={
            x : this.props.nowPos.x - this.props.startPos.x,
            y : this.props.nowPos.y - this.props.startPos.y
        }
        //沟谷定理计算触屏的角度
        this.props.nowDeg = Math.abs(Math.atan( this.props.touchDelate.y/this.props.touchDelate.x )*180/Math.PI);

        //判断角度是否在范围内
        if(this.props.nowDeg <=this.props.maxDeg){
            if((!this.props.isTranslate && this.props.touchDelate.x>0)||
                (this.props.isTranslate&&this.props.touchDelate.x<0)
            ){
                var percent = Math.abs(this.props.touchDelate.x/this.props.width);
                if(!this.props.isTranslate){
                    this.translateSuccess(this.props.touchDelate.x,percent);
                }else{
                    //计算内容缩放系数、滑动范围
                    this.translateFail(percent);
                }
            }
        }
    },
    onTouchEnd : function(){
        if(!this.props.isTouchDown){
            return;
        }

        this.props.isTouchDown = false;

        //判断滑动是否有效
        if((!this.props.isTranslate && this.props.touchDelate.x>0)||
            (this.props.isTranslate&&this.props.touchDelate.x<0)
        ){
            if( !this.props.isTranslate && this.props.touchDelate.x/this.props.width>0.5){
                this.props.isTranslate = true;
                this.translateSuccess(this.props.width,1);
            }else {
                this.props.isTranslate = false;
                this.translateFail(1);
            }
        }
    },
    maskClick : function(e){
        e.stopPropagation();
        this.props.isTranslate = false;
        this.props.isTouchDown = false;
        this.translateFail(1);
    },
    //变形失败
    translateFail : function(percent){
        this.props.contentTranslate = (1-percent)*this.props.width*0.8;
        //是否开启3d切换效果
        if(this.props.is3d) {
            this.props.contentScale = 0.8 + percent*0.2;
            this.props.menuScale =  1- 0.3*percent;
        }

        //计算菜单缩放系数、滑动范围
        this.props.menuTranslate =0-20*percent;
        this.props.maskPercent =  0.7*percent;
        this.setState({
            isUpdate : !this.state.isUpdate
        })
    },
    //变形成功
    translateSuccess : function(translateX,percent){

        //计算内容缩放系数、滑动范围
        this.props.contentTranslate = translateX * 0.8;
        //是否开启3d切换效果
        if(this.props.is3d) {
            this.props.contentScale = 1 - percent * 0.2;
            this.props.menuScale = 0.7 + 0.3 *percent;
        }
        //计算菜单缩放系数、滑动范围
        this.props.menuTranslate =-20+20 *percent;

        this.props.maskPercent = 0.7 - 0.7*percent;

        this.setState({
            isUpdate : !this.state.isUpdate
        })
    },
    render : function(){

        //事件组合
        var Events = {
            onTouchStart : this.onTouchStart,
            onTouchMove : this.onTouchMove,
            onTouchEnd : this.onTouchEnd
        }

        var contentStyle = {},
            menuStyle = {},
            maskStyle = {};

        if(!this.props.isInit) {
            contentStyle[_prefixStyle + "transform"] = "scale(" + this.props.contentScale + ") translate(" + this.props.contentTranslate + "px,0)";
            menuStyle[_prefixStyle + "transform"]= "scale(" + this.props.menuScale + ") translate(" + this.props.menuTranslate + "px,0)";
            maskStyle["background"] = "rgba(0,0,0,"+this.props.maskPercent+")"

        }
        if(!this.props.isTouchDown){
            contentStyle[_prefixStyle + "transition"] = "all 0.3s";
            menuStyle[_prefixStyle + "transition"] = "all 0.3s";
            maskStyle[_prefixStyle + "transition"] = "all 0.3s";
        }

        return (
            <div className="push-container" {...Events}>
            <div className="slide-push-menu-outter">
            </div>
            <div className={"slide-push-menu-mask "+(this.props.isTranslate?"hide":"")} style={maskStyle}>
            </div>
            <div className="slide-push-menu" style={menuStyle}>
                <div className="current-user">
                    <img src="data-images/face.jpg"/>
                </div>
                <div className="menus">
                    <a href="javascript:;"><i className="fa fa-gift"></i>个性装扮</a>
                    <a href="javascript:;"><i className="fa fa-gift"></i>QQ钱包</a>
                    <a href="javascript:;"><i className="fa fa-gift"></i>开通会员</a>
                    <a href="javascript:;"><i className="fa fa-gift"></i>我的相册</a>
                </div>
            </div>
            <div className="push-main-content" style={contentStyle} >
            <ul className="list-slide-group list-slide-delete">
                <li className="list-slip-item clearfix">
                    <div className="slip-item">
                    <div className="plus-desc"><h2><i className="fa fa-facebook"></i><span>非死不可</span></h2>
                    <p>最大的社交脸谱网</p></div>
                    </div>
                </li>
                <li className="list-slip-item clearfix">
                    <div className="slip-item">
                    <div className="plus-desc"><h2><i className="fa fa-facebook"></i><span>非死不可</span></h2>
                    <p>最大的社交脸谱网</p></div>
                    </div>
                </li>
                <li className="list-slip-item clearfix">
                    <div className="slip-item">
                    <div className="plus-desc"><h2><i className="fa fa-facebook"></i><span>非死不可</span></h2>
                    <p>最大的社交脸谱网</p></div>
                    </div>
                </li>
            </ul>
            <div className={"push-main-content-mask "+(this.props.isTranslate?"":"hide")} onTouchEnd={this.maskClick}></div>
            </div>
            </div>
        )

    }
});

module.exports = SlidePushMenu;

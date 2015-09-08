var React = require("react");
React.initializeTouchEvents(true);
var $ = require("jquery");
var Base = require("Base");
var SliderItem = require("./SliderItem");
var SliderPager = require("./SliderPager");

var SliderList = React.createClass({
        propTypes :{
            delateWidth     : React.PropTypes.number,                               //切换成功的宽度
            isHorizontal    : React.PropTypes.bool,                                 //是否是水平方向
            isLoop          : React.PropTypes.bool                                  //是否循环
        },
        //初始化状态
        getInitialState :function(){
            return {
                isUpdate : false
            }
        },
        getDefaultProps :function(){
            return {
                delateWidth       : 50,                       //切换成功的宽度
                wWidth            : 0,                        //屏幕宽度
                wHeight           : 0,                        //屏幕高度
                sliderCount       : 0,                        //幻灯片页数
                sliderIndex       : -1,                       //当前页
                sliderNext        : -1,                       //下一页
                isTouchdown       : false,                    //是否滑动结束
                isTouchend        : false,                    //触屏结束
                indexTranslate    : 0,                        //切换位置
                nextTranslate     : 0,                        //切换位置
                touchDelate       : 0,                        //滑动的距离
                isSuccess         : false,                    //滑动成功
                startPos          : {                         //触屏开始位置
                    x : 0,
                    y : 0
                },
                nowPos            : {                         //触屏结束位置
                    x : 0,
                    y : 0
                }
            }
        },
        componentWillMount : function(){
            this.props.sliderCount = this.props.sliders.length;
            this.props.sliderIndex = 0;

        },
        componentDidMount : function(){
            this.props.wWidth = $("#slider-inner").width();
            this.props.wHeight = $("#slider-inner").height();


        },
        componentDidUpdate : function(){
            if(this.props.isTouchend){
                if(this.props.isSuccess){
                    this.props.sliderIndex = this.props.sliderNext;
                }
                this.props.isTouchend = false;
                this.props.touchDelate = 0;
                this.props.isSuccess = false;
                this.props.indexTranslate = 0;
                this.props.nextTranslate = 0;


            }
        },
        /**
         * 页面滑动
         */
        setPageTranslate :function(){
            /**
             * 获取滑动距离
             * 向下滑动，下一张的初始位置为  -this.props.wWidth
             * 向上滑动，下一张的初始位置为  this.props.wWidth
             */
            this.props.indexTranslate = this.props.touchDelate/5;
            if(this.props.touchDelate<0){
                this.props.sliderNext = this.props.sliderIndex< (this.props.sliderCount-1) ? (this.props.sliderIndex + 1) : 0;
                this.props.nextTranslate = this.props.isHorizontal ? (this.props.wWidth + this.props.touchDelate) : (this.props.wHeight + this.props.touchDelate);
            }else{
                this.props.sliderNext = this.props.sliderIndex > 0 ? (this.props.sliderIndex - 1) : (this.props.sliderCount-1);
                this.props.nextTranslate = this.props.isHorizontal ? (-this.props.wWidth + this.props.touchDelate) : (-this.props.wHeight + this.props.touchDelate);
            }
        },
        /**
         * 切换成功
         * @param index 当前页位置
         * @param isNext 是否滑到下一页
         * @param touchDelate   滑动距离
         */
        translateSuccess : function(){
            this.onTranslateEnd(true);
        },
        /**
         * 切换失败
         * @param index 当前页位置
         * @param isNext 是否滑到下一页
         * @param touchDelate   滑动距离
         */
        translateFail : function(){
            this.onTranslateEnd(false)
        },
        /**
         * 滑动结束
         */
        onTranslateEnd : function(isSuccess){
            this.props.isTouchend = true;
            this.props.isSuccess = isSuccess;
            /**
             * 设置下一页滑动距离：nextDelate、
             * 获取结束时，下一页和当前页的位置：indexTranslate、nextTranslate
             */
            if(this.props.touchDelate<0){
                if(isSuccess){
                    this.props.indexTranslate = this.props.isHorizontal ? (-this.props.wWidth) : (-this.props.wHeight);
                    this.props.nextTranslate = 0;
                }else{
                    this.props.nextTranslate = this.props.isHorizontal ? this.props.wWidth : this.props.wHeight;
                    this.props.indexTranslate = 0;
                }
            }else{
                if(isSuccess){
                    this.props.indexTranslate = this.props.isHorizontal ? this.props.wWidth : this.props.wHeight;
                    this.props.nextTranslate = 0;
                }else{
                    this.props.nextTranslate = this.props.isHorizontal ? (-this.props.wWidth) : (-this.props.wHeight);
                    this.props.indexTranslate = 0;
                }
            }
            /**
             * 重置状态
             */
            this.setState(
                {
                    isUpdate : !this.state.isUpdate
                }
            );
        },
        onTouchStart : function(e){
            if(this.props.isTouchdown){
                return ;
            }
            this.props.isTouchdown = true;
            /**
             * 获取开始触屏的坐标
             */
            var event=e||window.event;

            this.props.startPos = {
                x : event.touches[0].pageX,
                y : event.touches[0].pageY
            }

        },
        onTouchMove : function(e){
            Base.pauseEvent(e);
            if(!this.props.isTouchdown){
                return;
            }
            //获取滑动坐标
            var event=e||window.event;
            this.props.nowPos = {
                x : event.touches[0].pageX,
                y : event.touches[0].pageY
            }

            if(this.props.isHorizontal){
                this.props.touchDelate = this.props.nowPos.x - this.props.startPos.x;
            }else{
                this.props.touchDelate = this.props.nowPos.y - this.props.startPos.y ;
            }


            if(Math.abs(this.props.touchDelate)>0){
                this.setPageTranslate();
                this.setState({
                    isUpdate : !this.state.isUpdate
                })
            }



        },
        onTouchEnd : function(e){
            if(!this.props.isTouchdown){
                return;
            }

            this.props.isTouchdown = false;
            //判断切换成功？
            if(Math.abs(this.props.touchDelate)>0) {
                if (Math.abs(this.props.touchDelate) > this.props.delateWidth) {
                    this.translateSuccess();
                } else {
                    this.translateFail();
                }
                this.setState({
                    isUpdate : !this.state.isUpdate
                })
            }

        },
        render : function () {
            var $that = this;
            //遍历构造幻灯片项
            var SliderItems = this.props.sliders.map(function(sliderValue,index){

                //是否显示
                var isShow = false;
                var zIndex = 0;
                var dataTranslate = {
                    "translateDelate" : 0
                }
                if(index==$that.props.sliderIndex || index==$that.props.sliderNext){
                    isShow = true;
                }

                if($that.props.sliderIndex == index){
                    dataTranslate = $that.props.indexTranslate;
                    zIndex = 2;
                }else if($that.props.sliderNext == index){
                    dataTranslate =  $that.props.nextTranslate;
                    zIndex = 10;
                }
≈
                return (
                    <SliderItem image = {sliderValue}
                        zIndex = {zIndex}
                        isShow = {isShow}
                        isTouchdown = {$that.props.isTouchdown}
                        translateDelate = {dataTranslate}

                        />
                );
            })
            //事件绑定
            var Events ={
                onTouchStart   : this.onTouchStart,        //开始触屏
                onTouchMove    : this.onTouchMove,         //触屏滑动
                onTouchEnd     : this.onTouchEnd           //触屏结束
            }

            var Pager = null;
            //分页支持
            if(this.props.isPager) {
                Pager = (
                    <SliderPager pageIndex ={this.props.sliderIndex} pageCount = {this.props.sliderCount} / >
                )
            }

            return (
                <div id="slider-inner" {...Events}>
                {SliderItems}
                    <div id="slider-page">
                        {Pager}
                    </div>
                </div>
            )
    }
});

module.exports = SliderList;
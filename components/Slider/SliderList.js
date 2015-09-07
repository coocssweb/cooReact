var React = require("react");
var $ = require("jquery");
var SliderItem = require("./SliderItem");
var SliderPager = require("./SliderPager");

var SliderList = React.createClass({
        //初始化状态
        getInitialState :function(){
            return {
                isUpdate : false
            }
        },
        getDefaultProps :function(){
            return {
                isInit            : true,                     //是否是初始状态
                wWidth            : $(window).width(),        //屏幕宽度
                wHeight           : $(window).height(),       //屏幕高度
                sliderCount       : 0,                        //幻灯片页数
                sliderIndex       : -1,                       //当前页
                sliderNext        : -1,                       //下一页
                indexDelate       : 0,                        //当前页滑动距离
                nextDelate        : 0,                        //下一页滑动距离
                isTouching        : false,                    //是否滑动结束
                isTouchEnd        : false,                    //是否滑动结束
                indexTranslate    : 0,                        //切换位置
                nextTranslate     : 0,                        //切换位置
                isSuccess         : false                     //是否切换成功
            }
        },
        /**
         * 页面滑动
         * @param index 当前页位置
         * @param isNext 是否滑到下一页
         * @param touchDelate   滑动距离
         */
        translatePage :function(index,isNext,touchDelate){
            this.props.isInit = false;
            this.props.sliderIndex = index;
            this.props.indexDelate = touchDelate/5;
            this.props.isTouching = true;
            this.props.isTouchEnd = false;
            this.props.sliderCount = this.props.sliders.length;
            this.props.isSuccess =false;
            /**
             * 获取滑动距离
             * 向下滑动，下一张的初始位置为  -this.props.wWidth
             * 向上滑动，下一张的初始位置为  this.props.wWidth
             */
            if(isNext){
                this.props.sliderNext = index< (this.props.sliderCount-1) ? (this.props.sliderIndex + 1) : 0;
                this.props.nextDelate = this.props.isHorizontal ? (this.props.wWidth + touchDelate) : (this.props.wHeight + touchDelate);
            }else{
                this.props.sliderNext = index > 0 ? (this.props.sliderIndex - 1) : (this.props.sliderCount-1);
                this.props.nextDelate = this.props.isHorizontal ? (-this.props.wWidth + touchDelate) : (-this.props.wHeight + touchDelate);
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
        /**
         * 切换成功
         * @param index 当前页位置
         * @param isNext 是否滑到下一页
         * @param touchDelate   滑动距离
         */
        translateSuccess : function(index, isNext,touchDelate){
            this.props.isSuccess = true;
            this.onTranslateEnd(index,isNext,touchDelate);
        },
        /**
         * 切换失败
         * @param index 当前页位置
         * @param isNext 是否滑到下一页
         * @param touchDelate   滑动距离
         */
        translateFail : function(index, isNext,touchDelate){
            this.props.isSuccess = false;
            this.onTranslateEnd(index,isNext,touchDelate)
        },
        /**
         * 滑动结束
         */
        onTranslateEnd : function(index,isNext,touchDelate,isSuccess){
            this.props.indexDelate = 0;
            this.props.isInit = false;
            this.props.sliderIndex = index;
            this.props.isTouching = false;
            this.props.isTouchEnd = true;
            /**
             * 设置下一页滑动距离：nextDelate、
             * 获取结束时，下一页和当前页的位置：indexTranslate、nextTranslate
             */
            if(isNext){
                this.props.sliderNext = index< (this.props.sliderCount-1) ? (this.props.sliderIndex + 1) : 0;
                this.props.nextDelate = this.props.isHorizontal ? (this.props.wWidth + touchDelate) : (this.props.wHeight + touchDelate);
                if(this.props.isSuccess){
                    this.props.indexTranslate = this.props.isHorizontal ? (-this.props.wWidth) : (-this.props.wHeight);
                    this.props.nextTranslate = 0;
                }else{
                    this.props.nextTranslate = this.props.isHorizontal ? this.props.wWidth : this.props.wHeight;
                    this.props.indexTranslate = 0;
                }
            }else{
                this.props.sliderNext = index > 0 ? (this.props.sliderIndex - 1) : (this.props.sliderCount-1);
                this.props.nextDelate = this.props.isHorizontal ? (-this.props.wWidth + touchDelate) : (-this.props.wHeight + touchDelate);
                if(this.props.isSuccess){
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

        render : function () {
            var $that = this;
            //遍历构造幻灯片项
            var SliderItems = this.props.sliders.map(function(sliderValue,index){

                //是否显示
                var isShow = false;
                var zIndex = 0;
                var isTouchEnd = false;
                var endTranslate = 0;

                if($that.props.isInit && index==0){
                    isShow = true;
                }

                var dataTranslate = {
                    "translateDelate" : 0
                }
                if($that.props.sliderIndex == index){
                    dataTranslate = {
                        "translateDelate" : $that.props.indexDelate
                    }
                    isShow = true;
                    zIndex = 2;
                    isTouchEnd = $that.props.isTouchEnd;
                    endTranslate = $that.props.indexTranslate;
                }else if($that.props.sliderNext == index){
                    dataTranslate = {
                        "translateDelate" : $that.props.nextDelate
                    }
                    isShow =  true;
                    zIndex = 10;
                    isTouchEnd = $that.props.isTouchEnd;
                    endTranslate = $that.props.nextTranslate;
                }

                //事件绑定
                var Events ={
                    onTranslatePage     : $that.translatePage,      //页面变形
                    onTranslateSuccess  : $that.translateSuccess,   //切换成功
                    onTranslateFail     : $that.translateFail    //切换失败
                }

                return (
                    <SliderItem image = {sliderValue}
                        {...dataTranslate}
                        {...Events}
                        zIndex = {zIndex}
                        index = {index}
                        isShow = {isShow}
                        isTouchEnd ={isTouchEnd}
                        isTouching = {$that.props.isTouching}
                        endTranslate = {endTranslate}
                        isHorizontal = {$that.props.isHorizontal}
                        />
                );
            })

            var Pager = "";
            if(this.props.isPager) {
                var Pager = this.props.sliders.map(function (sliderValue, index) {
                    var isActive = false;
                    if (($that.props.isInit && index == 0) || ($that.props.sliderNext == index && $that.props.isSuccess ) || ($that.props.sliderIndex == index && !$that.props.isSuccess)) {
                        isActive = true;
                    }

                    return (
                        < SliderPager isActive = {isActive} / >
                    )
                })
            }

            return (
                <div id="slider-inner">
                {SliderItems}
                    <div id="slider-page">
                        {Pager}
                    </div>
                </div>
            )
}
});

module.exports = SliderList;
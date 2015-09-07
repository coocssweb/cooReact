var React = require("react");
React.initializeTouchEvents(true);
var $ = require("jquery");
var Base =require("Base");

//浏览器前缀
var _prefixStyle = Base.prefixStyle();

var SlideTab = React.createClass({
    getInitialState : function () {
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            tabLink         : null,         //tab链接
            tabItems        : null,         //tab内容
            isInit          : true,         //是否是第一次初始化
            isTouchDown     : false,        //是否按下
            currentIndex    : 0,            //当前显示的tab
            tabItemsCount   : 0,            //tab的个数
            tabWidth        : 0,            //触屏宽度
            isNext          : true,         //是否是下一个
            startX          : 0,            //触屏开始的位置
            nowX            : 0,            //触屏结束的位置
            currentX        : 0,            //当前x
            delateX         : 0,            //水平滑动距离
            left            : 0             //位置
            }
    },
    //渲染前的操作
    componentWillMount : function(){
        //获取tab个数
        this.props.tabItemsCount = this.props.Links.length;
        this.props.tabWidth = $("#main-container").width();
        //计算默认位置
        this.props.currentX = (0-this.props.currentIndex)*this.props.tabWidth;
        this.props.left = this.props.currentX;


        //遍历tab内容
        var tabItemStyle ={
            width :  this.props.tabWidth
        }
        this.props.tabItems = this.props.Items.map(function(tabValue,index){
            return (
                <div className="tab-item" style={tabItemStyle}>
                {tabValue}
                </div>
            )
        });


    },
    //触屏开始
    onTouchStart : function(e){
        if(this.props.isTouchDown){
            return ;
        }
        this.props.isTouchDown = true;
        var event=e||window.event;
        this.props.startX = event.touches[0].pageX;
    },
    //触屏滑动
    onTouchMove : function(e){
        Base.pauseEvent(e);
        if(!this.props.isTouchDown){
            return;
        }
        var event=e||window.event;
        this.props.nowX = event.touches[0].pageX;

        this.props.delateX = this.props.nowX - this.props.startX;
        this.props.left = this.props.currentX + this.props.delateX;

        $("#test").html($("#test").html()+"<br /> moving");
        this.setState({
            isUpdate : !this.state.isUpdate
        });
    },
    //触屏结束
    onTouchEnd : function(e){
        if(!this.props.isTouchDown){
            return;
        }
        this.props.isTouchDown = false;

        /**
         * 判断上一个tab滑动/下一个tab滑动
         */
        if((this.props.delateX < -10 && (this.props.currentIndex+1) <= this.props.tabItemsCount-1)||
            (this.props.delateX > 10 && (this.props.currentIndex-1) >= 0)
        ){
            this.props.currentIndex += this.props.delateX>0 ? -1:1;
        }

        //计算位置
        this.props.currentX = (0-this.props.currentIndex)*this.props.tabWidth;
        this.props.left = this.props.currentX;
        this.props.startX = 0;
        this.props.endX = 0;
        this.props.delateX = 0;
        this.setState({
            isUpdate : !this.state.isUpdate
        });
    },
    TabTo : function(index){
        this.props.currentX = (0-index)*this.props.tabWidth;
        this.props.currentIndex = index;
        this.props.left = this.props.currentX;
        this.setState({
            isUpdate : !this.state.isUpdate
        });
    },
    TabEnd : function(){
        this.props.isTouchDown = false;
    },
    render : function(){

        var $that = this;
        this.props.tabLinks=this.props.Links.map(function(linkValue,index){
            return (
                <div className={ $that.props.currentIndex==index?"active":""}
                onTouchStart = {function(){
                    $that.TabTo(index)
                }}
                onTouchEnd = {$that.TabEnd}>{linkValue}</div>
            )
        });


        var innerStyle ={
            left : this.props.left,
            width : this.props.tabItemsCount * this.props.tabWidth
        }
        if(!this.props.isTouchDown) {
            innerStyle[_prefixStyle + "transition"] = "all 0.3s";
        }

        //事件组合
        var Events = {
            onTouchStart : this.onTouchStart,
            onTouchMove : this.onTouchMove,
            onTouchEnd : this.onTouchEnd
        }

        return (
            <div className="tab-panel">
            <div className="tab-header">
            {this.props.tabLinks}
            </div>
            <div className="tab-content" {...Events}>
            <div className="tab-content-inner clearfix" style={innerStyle} >
                {this.props.tabItems}
            </div>
            </div>
            </div>
        );
    }
})



module.exports = SlideTab;
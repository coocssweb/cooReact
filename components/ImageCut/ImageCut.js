var React = require("react");
var $ = require("jquery");
var ImageCut = React.createClass({
    getInitalState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            isTouchdown     : false,    //是否正在按下
            imageSrc        : "",       //图片路径
            innerStyle      : {         //图片位置
                        left : "0px",
                        top : "0px"
                    },
            imageOffSet     :{          //偏移位置
                x : 0,
                y : 0
            },
            touchDelate     : {         //滑动距离
                x : 0,
                y :0
            },
            startPos        :{
                x : 0,
                y : 0
            },
            nowPos          :{
                x : 0,
                y : 0
            }
        }
    },
    componentWillMount:function(){
        var img = new Image();
        var $that = this;
        $(img).load(function() {
            var canvas = document.createElement("canvas");

            if(img.width > 300){
                var wWidth = $(".cut-container").width();
                var wHeight =$(".cut-container").height();
                var height = img.height * (300/img.width);
                canvas.width = 300;
                canvas.height = height;
                canvas.getContext('2d').drawImage(img, 0, 0, 300 ,height);
            }
            $that.props.imageSrc = canvas.toDataURL("image/png");
            $that.setState({
                isUpdate : true
            });
        })
        .error(function() {
        })
        .attr("src", this.props.imageSrc);
    },
    onTouchStart : function(e){
        if(this.props.isTouchDown){
            return ;
        }
        this.props.isTouchDown = true;
        /**
         * 获取开始触屏的坐标
         */
        var touch=window.event.touches[0]||window.event.changedTouches[0];
        this.props.startPos.x = touch.pageX;
        this.props.startPos.y = touch.pageY;
    },
    onTouchMove : function(e){
        if(!this.props.isTouchDown){
            return;
        }
        //获取滑动坐标
        var touch=window.event.touches[0]||window.event.changedTouches[0];
        this.props.nowPos.x = touch.pageX;
        this.props.nowPos.y = touch.pageY;
        this.props.touchDelate.x = this.props.nowPos.x - this.props.startPos.x;
        this.props.touchDelate.y = this.props.nowPos.y - this.props.startPos.y;

    },
    onTouchEnd : function(e){
        if(!this.props.isTouchDown){
            return;
        }

        this.props.startPos.x = 0;
        this.props.startPos.y = 0;
        this.props.nowPos.x = 0;
        this.props.nowPos.y = 0;
        this.props.touchDelate.x = 0;
        this.props.touchDelate.y = 0;

    },
    render : function(){

        //事件组合
        var Events = {
            onTouchStart : this.onTouchStart,
            onTouchMove : this.onTouchMove,
            onTouchEnd : this.onTouchEnd
        }

        return (
            <div className="cut-container" {...Events} >
                <div className = "overlay-outter">
                    <div className = "overlay">
                        <div className = "overlay-inner"></div>
                    </div>
                </div>
                <img src ={this.props.imageSrc} />
                <a href="javascript:;" className="btn btn-save">保存</a>
            </div>
        )
    }
});

module.exports =  ImageCut;
var React = require("react");
var $ = require("jquery");
var ImageCut = React.createClass({
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            isTouchdown     : false,    //是否正在按下
            isInit          : true,     //是否是初始化
            canvas          : null,     //画布
            imageSrc        : "",       //图片路径
            innerStyle      : {         //图片位置
                        left : "0px",
                        top  : "0px"
                    },
            imageOffSet     :{          //偏移位置
                x : 0,
                y : 0
            },
            touchDelate     : {         //滑动距离
                x : 0,
                y :0
            },
            startPos        :{          //触屏起始位置
                x : 0,
                y : 0
            },
            nowPos          :{          //触屏当前位置
                x : 0,
                y : 0
            },
            image           :{          //图片位置信息
                width  : 0,
                height : 0,
                x      : 0,
                y      : 0
            },
            cut             :{          //预览位置信息
                width  : 196,
                height : 196,
                x      : 0,
                y      : 0
            }
        }
    },
    componentWillMount:function(){
        var img = new Image();
        var $that = this;
        $(img).load(function() {
            $that.props.canvas = document.createElement("canvas");

            if(img.width > 300){
                var height = img.height * (300/img.width);
                $that.props.canvas.width = 300;
                $that.props.canvas.height = height;
                $that.props.canvas.getContext('2d').drawImage(img, 0, 0, 300 ,height);
                $that.props.image.width = 300;
                $that.props.image.height = height;
            }else{
                var $image = $(".cut-image");
                $that.props.image.width = $image.width();
                $that.props.image.height = $image.height();
            }

            var $container = $(".cut-container");
            $that.props.imageOffSet.x = ($container.width() - $that.props.image.width)/2;
            $that.props.imageOffSet.y = ($container.height() - $that.props.image.height)/2;
            $that.props.image.x = $that.props.imageOffSet.x;
            $that.props.image.y = $that.props.imageOffSet.y;
            $that.props.imageSrc = $that.props.canvas.toDataURL("image/png");


            $that.setState({
                isUpdate : !$that.state.isUpdate
            });
        })
        .error(function() {
        })
        .attr("src", this.props.imageSrc);
    },
    componentDidMount : function(){
        var $cut = $(".overlay-inner");
        this.props.cut.x = $cut.offset().left;
        this.props.cut.y = $cut.offset().top;
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

        if(
            (this.props.imageOffSet.x  + this.props.touchDelate.x - this.props.cut.x) < 0 &&
            (this.props.imageOffSet.x + this.props.image.width + this.props.touchDelate.x - (this.props.cut.x + this.props.cut.width) ) > 0
        ){
            this.props.image.x = this.props.imageOffSet.x + this.props.touchDelate.x;
        }
        if(
            (this.props.imageOffSet.y  + this.props.touchDelate.y - this.props.cut.y) < 0 &&
            (this.props.imageOffSet.y + this.props.image.height + this.props.touchDelate.y - (this.props.cut.y + this.props.cut.height) ) > 0
        ){
            this.props.image.y = this.props.imageOffSet.y + this.props.touchDelate.y;
        }
        this.props.isInit = false;
        this.setState({
            isUpdate : !this.state.isUpdate
        });

    },
    onTouchEnd : function(e){
        if(!this.props.isTouchDown){
            return;
        }
        this.props.isTouchDown = false;
        this.props.startPos.x = 0;
        this.props.startPos.y = 0;
        this.props.nowPos.x = 0;
        this.props.nowPos.y = 0;
        this.props.touchDelate.x = 0;
        this.props.touchDelate.y = 0;
        this.props.imageOffSet.x = this.props.image.x;
        this.props.imageOffSet.y = this.props.image.y;

    },
    onCut : function(){
        this.props.canvas.width = this.props.cut.width;
        this.props.canvas.height = this.props.cut.height;
        var left = this.props.cut.x - this.props.image.x;
        var right = this.props.cut.y - this.props.image.y;
        this.props.canvas.getContext('2d').drawImage($(".cut-image").get(0), left, right, this.props.cut.width, this.props.cut.height
            , 0, 0, this.props.cut.width, this.props.cut.height);
        window.open(this.props.canvas.toDataURL("image/png"));
    },
    render : function(){

        //事件组合
        var Events = {
            onTouchStart : this.onTouchStart,
            onTouchMove : this.onTouchMove,
            onTouchEnd : this.onTouchEnd
        }
        var innerStyle ={
                left : this.props.image.x,
                top : this.props.image.y
            }

        return (
            <div className="cut-container" {...Events} >
                <div className = "overlay-outter">
                    <div className = "overlay">
                        <div className = "overlay-inner"></div>
                    </div>
                </div>
                <a href="javascript:;" className="btn btn-cut" onTouchEnd={this.onCut}>保存</a>
                <img className="cut-image" src ={this.props.imageSrc} style={innerStyle} />
            </div>
        )
    }
});

module.exports =  ImageCut;
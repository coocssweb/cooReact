/*=============================================================================
 #     FileName : jessinca.imageCut.js
 #         Desc : 头像剪辑
 #       Author : jessinca.王佳欣
 #   LastUpdate : 2014-10-18 11:48:39
 =============================================================================*/
(function ($) {
    $.fn.imageCut = function (options) {
        //默认参数
        var defaults={
            minWidth : 200,             //最小长度
            minHeight : 200,            //最大高度
            maxWidth : 600,             //最大长度
            maxHeight : 600,            //最大高度
            orgImage : null,            //原始图片
            targetImage : null,         //图片
            canvas : null,              //画布
            $container : null,          //容器
            containerWidth : 0,         //容器宽度
            containerHeight : 0,        //容器高度
            imageWidth : 0,             //图片宽度
            imageHeight : 0,            //图片高度
            cropWidth :0,               //剪辑宽度
            cropHeight :0,              //剪辑高度
            crop : "#overlay",          //剪辑框
            btnCrop : "#btn-crop",      //剪辑按钮
            btnLarger : "#btn-larger"   //放大
        }

        var _params = $.extend(defaults,options);
        var $that = this;


        //初始化
        function init(){
            _params.targetImage = $that;
            _params.canvas = document.createElement("canvas");
            //_params.canvas = $("#mycanvas").get(0);

            _params.canvas.width = 300;
            _params.canvas.height = 388;

            _params.canvas.getContext('2d').drawImage($that.get(0), 0, 0, 300, 388);
            $that.attr('src', _params.canvas.toDataURL("image/png"));
            _params.imageWidth = $that.width();
            _params.imageHeight = $that.height();

            _params.$container = $that.parent("#container");
            _params.containerWidth = _params.$container.width();
            _params.containerHeight = _params.$container.height();
            mover.getContainerPos();
            _params.$container.on("mousedown touchstart", mover.touchStart);
            _params.$container.on("mousemove touchmove", mover.touchMoving);
            _params.$container.on("mouseup touchend", mover.touchEnd);

            _params.cropWidth = $(_params.crop).width();
            _params.cropHeight = $(_params.crop).height();
            $(_params.btnCrop).on("click",croper);
            $(_params.btnLarger).on("click",scaler);

        }

        //剪辑
        function croper(e){
            e.preventDefault();

            var left = $(_params.crop).offset().left - $that.offset().left;
            var top = $(_params.crop).offset().top - $that.offset().top;

            _params.canvas.width = _params.cropWidth;
            _params.canvas.height = _params.cropHeight;

            _params.canvas.getContext('2d').drawImage(_params.targetImage.get(0), left, top, _params.cropWidth, _params.cropHeight
                , 0, 0,  _params.cropWidth, _params.cropHeight);
            window.open(_params.canvas.toDataURL("image/png"));
        }

        //放大缩小
        scaler = function(e){
            _params.imageWidth = _params.imageWidth * 1.1;
            _params.imageHeight = _params.imageHeight * 1.1;
            _params.canvas.width = _params.imageWidth;
            _params.canvas.height = _params.imageHeight;

            _params.canvas.getContext('2d').drawImage($that.get(0), 0, 0, _params.imageWidth, _params.imageHeight);

            $that.attr('src', _params.canvas.toDataURL("image/png"));

        }

        var mover ={
            isMouseDown : false,
            //容器位置
            containerPos : {x : 0, y: 0},
            //图片位置
            imagePos : {x : 0, y : 0},
            //开始指标位置
            startPos : {x : 0,y : 0},
            //鼠标滑动位置
            movingPos : {x : 0,y : 0},
            //鼠标偏移位置
            offsetPos : {x : 0,y : 0},
            //触屏开始
            touchStart : function(e){
                e.preventDefault();
                if(mover.isMouseDown){
                    return;
                }
                mover.isMouseDown=true;
                //获取鼠标开始位置
                mover.getStartPos(e);
                //获取图片的当前位置
                mover.getImagePos();
            },
            //触屏滑动
            touchMoving : function(e){
                e.preventDefault();
                if(!mover.isMouseDown){
                    return;
                }

                //获取偏移坐标
                mover.getOffsetPos(e);

                var newPosX = mover.offsetPos.x + mover.imagePos.x;
                var newPosY = mover.offsetPos.y + mover.imagePos.y;


                if(!(
                    newPosX >= mover.containerPos.x
                    && newPosY >=mover.containerPos.y
                    && (newPosX + _params.imageWidth) <= (mover.containerPos.x + _params.containerWidth)
                    && (newPosY + _params.imageHeight) <= (mover.containerPos.y + _params.containerHeight)
                    )){
                    return;
                }

                $that.offset({
                    'left': mover.offsetPos.x + mover.imagePos.x,
                    'top': mover.offsetPos.y + mover.imagePos.y
                });

            },
            touchEnd : function(e){
                e.preventDefault();
                mover.isMouseDown = false;
                mover.startPos.x = 0;
                mover.startPos.y = 0;
                mover.offsetPos.x = 0;
                mover.offsetPos.y = 0;
                mover.movingPos.x = 0;
                mover.movingPos.y = 0;

            },
            getContainerPos : function(){
                this.containerPos.x = _params.$container.offset().left;
                this.containerPos.y = _params.$container.offset().top;
            },
            //获取图片坐标
            getImagePos : function(){
                this.imagePos.x = $that.offset().left;
                this.imagePos.y = $that.offset().top;
            },
            //获取移动位置
            getOffsetPos : function (e) {
                if(e.type=="touchmove"){
                    var touch = window.event.touches[0]||window.event.changedTouches[0];
                    this.movingPos.x = touch.pageX ;
                    this.movingPos.y = touch.pageY ;
                }else{
                    this.movingPos.x = e.clientX ;
                    this.movingPos.y = e.clientY ;
                }

                this.offsetPos.x = this.movingPos.x - this.startPos.x;
                this.offsetPos.y = this.movingPos.y - this.startPos.y;


            },
            //获取起始坐标
            getStartPos : function(e){
                if(e.type=="touchmove"){
                    var touch = window.event.touches[0]||window.event.changedTouches[0];
                    this.startPos.x = touch.pageX ;
                    this.startPos.y = touch.pageY ;
                }else{
                    this.startPos.x = e.clientX ;
                    this.startPos.y = e.clientY ;
                }
            }
        }



        //调用初始化
        init();
    };
})(jQuery);
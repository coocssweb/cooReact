/*=============================================================================
 #     FileName : jessinca.touch.js
 #         Desc : 移动端滑动插件
 #       Author : jessinca.王佳欣
 #   LastUpdate : 2014-10-18 11:48:39
 =============================================================================*/
(function ($) {
    $.fn.touch = function (options) {
        //默认参数
        var defaults={
            isHorizontal : false,				//水平方向
            isVertical   : true,				//垂直方向
            isPage       : true,				//是否显示分页
            isLoadImg    : false,				//是否加载图片
            wWidth       : 0,					//窗口宽度
            wHeight      : 0,					//窗口高度
            slider       : null,                //幻灯片
            sliderItem   : ".slider-item",		//幻灯片
            effect       : "smooth",			//切换效果{smooth,3d ... }
            isLoop       : true,				//是否循环
            startPos     : null,				//起点
            endPos       : null,				//终点
            nowPos       : null,				//当前
            pageInit     : false,				//页面开始
            isTouching   : true,				//判断页面是否允许
            isTouchDown  : false,				//是否正在触屏
            isSuccess    : false,				//是否成功滑动
            isNext       : false,				//是否是下一张
            distance     : 50,					//响应距离
            touchDelta   : 0,					//滑动距离
            nowPage      : 0,					//当前页
            nextPage     : 0,					//下一张图片
            pageNum      : 0,					//页面总数
            prefixStyle  : "",                  //浏览器内核前缀
            pager        : "",                  //分页信息
        }

        //当前对象
        var $that = this;
        //合并参数
        var _params=$.extend(defaults, options);


        //方法集合
        var _methods={
            //初始化
            init :function(){
                _params.prefixStyle = _methods.prefixStyle();
                //获取屏幕高度、宽度
                _params.wWidth=$(window).width();
                _params.wHeight=$(window).height();
                _params.slider = $that.children("#slider-inner");
                _params.pageNum=_params.slider.children(_params.slideritem).size();

                if(_params.isPage){
                    _methods.getPager();
                }
                _params.pager=$that.children("#slider-page");

                //加载图片
                if(_params.isLoadImg){
                    var loader=$that.children("#loading");
                    _params.pager.hide();
                    _params.slider.children(_params.slideritem).each(function(index,item){
                        var img = new Image();
                        var imgsrc=$(item).attr("data-image");
                        $(img).load(function() {
                            item.style["background-image"]="url("+imgsrc+")";
                            if(index==_params.pageNum-1){
                                loader.remove();
                                _params.pager.show();
                            }
                        })
                        .error(function() {
                            //加载失败时的处理
                        })
                        //最后设置src
                        .attr("src", imgsrc);
                    });
                }


                _params.slider.children(_params.slideritem).each(function(index,item){
                    //设置切换的起始位置
                    if(_params.isVertical){
                        $(item).attr("data-translate",index==0?0:_params.wHeight);
                    }else if(_params.isHorizontal){
                        $(item).attr("data-translate",index==0?0:_params.wWidth);
                    }
                });
            },
            //初始化事件
            initEvent:function(){
                //绑定触屏开始事件
                _params.slider.children(_params.slideritem).bind("touchstart",function(e){
                    _methods.touchStart(e);
                });
                //绑定触屏结束事件
                _params.slider.children(_params.slideritem).bind("touchend",function(e){
                    _methods.touchEnd(e);
                });
                //绑定触屏滑动事件
                _params.slider.children(_params.slideritem).bind("touchmove",function(e){
                    _methods.touching(e);
                });
            },
            //获取分页
            getPager :function(){
                var strPage='<div id="slider-page">';
                for(var i=0;i<_params.pageNum;i++){
                    if(i==0)
                        strPage+='<span class="active"></span>';
                    else
                        strPage+='<span></span>';
                }
                strPage+='</div>';
                $that.append(strPage);
            },
            //触屏开始事件
            touchStart : function(e){
                //判断页面是否允许
                if(!_params.isTouching) return;
                if(_params.isTouchDown) return;
                _params.isTouchDown=true;
                _params.pageInit=true;

                //获取开始触点
                var touch=window.event.touches[0];
                _params.startPos={
                    x : touch.pageX,
                    y : touch.pageY
                }



            },
            //正在触屏事件
            touching : function(e){
                e.preventDefault();
                if(!_params.isTouching) return;
                if(!_params.pageInit) return;

                //获取当前触点
                var touch=window.event.touches[0];
                _params.nowPos={
                    x : touch.pageX,
                    y : touch.pageY
                }

                //计算滑动距离
                if(_params.isHorizontal){
                    _params.touchDelta=	_params.nowPos.x-_params.startPos.x;
                }else if(_params.isVertical){
                    _params.touchDelta=	_params.nowPos.y-_params.startPos.y;
                }

                //设置下一页
                if(_params.touchDelta<0){
                    _params.nextPage =(_params.nowPage+1<_params.pageNum)?(_params.nowPage+1):0;
                    _params.isNext=true;
                }else{
                    _params.nextPage =(_params.nowPage==0)?(_params.pageNum-1):(_params.nowPage-1);
                    _params.isNext=false;
                }
                //设置起始位置
                var nextItem=_params.slider.children(_params.slideritem).eq(_params.nextPage)[0];
                if(_params.isVertical){
                    $(nextItem).attr('data-translate',_params.isNext?_params.wHeight:-_params.wHeight);
                }else if(_params.isHorizontal){
                    $(nextItem).attr('data-translate',_params.isNext?_params.wWidth:-_params.wWidth);
                }

                _methods.pageTranslate(e);

            },
            //触屏结束事件
            touchEnd : function(){
                //如果没有滑动
                if(_params.nowPage==_params.nextPage) return;

                if(Math.abs(_params.touchDelta)>=_params.distance){
                    //切换成功
                    _methods.touchSuccess();
                }else{
                    //切换失败
                    _methods.touchFail();
                }
                //重置是否允许继续触屏
                _params.isTouching=true;
                _params.isTouchDown=false;

            },
            //翻页成功
            touchSuccess : function(){
                var nowItem=_params.slider.children(_params.slideritem).eq(_params.nowPage)[0];
                var nextItem=_params.slider.children(_params.slideritem).eq(_params.nextPage)[0];

                nowItem.style[_params.prefixStyle+"transition"]='all 0.3s';
                nextItem.style[_params.prefixStyle+"transition"]='all 0.3s';
                nextItem.style[_params.prefixStyle+"transform"]='translate(0,0)';
                _params.nowPage=_params.nextPage;
                //设置切换位置
                if(_params.isVertical){
                    nowItem.style[_params.prefixStyle+"transform"]='translate(0,'+(_params.isNext?-_params.wHeight:_params.wHeight  )+'px)';
                }else if(_params.isHorizontal){
                    nowItem.style[_params.prefixStyle+"transform"]='translate('+(_params.isNext?-_params.wWidth:_params.wWidth  )+'px,0)';
                }
                if(_params.isPage){
                    _params.pager.children().removeClass("active");
                    _params.pager.children().eq(_params.nowPage).addClass("active");
                }
                //重置
                setTimeout(function(){
                    $(nowItem).addClass("hide").attr('data-translate',-_params.wHeight);
                    $(nextItem).attr('data-translate',"0");
                    nowItem.style[_params.prefixStyle+"transition"]="";
                    nextItem.style[_params.prefixStyle+"transition"]='';
                },300);

            },
            //翻页失败
            touchFail : function(){
                var nowItem=_params.slider.children(_params.slideritem).eq(_params.nowPage)[0];
                var nextItem=_params.slider.children(_params.slideritem).eq(_params.nextPage)[0];
                nowItem.style[_params.prefixStyle+"transition"]='all 0.3s';
                nextItem.style[_params.prefixStyle+"transition"]='all 0.3s';
                nowItem.style[_params.prefixStyle+"transform"]='translate(0,0)';

                //复原原来位置
                if(_params.isVertical){
                    nextItem.style[_params.prefixStyle+"transform"]='translate(0,'+(_params.isNext?_params.wHeight:-_params.wHeight  )+'px)';
                }else if(_params.isHorizontal){
                    nextItem.style[_params.prefixStyle+"transform"]='translate('+(_params.isNext?_params.wWidth:-_params.wWidth  )+'px,0)';
                }

                //重置
                setTimeout(function(){
                    $(nextItem).addClass("hide").attr('data-translate',-_params.wHeight);
                    nowItem.style[_params.prefixStyle+"transform"]='translate(0,0)';
                    nowItem.style[_params.prefixStyle+"transition"]="";
                    nextItem.style[_params.prefixStyle+"transition"]='';
                },300);

            },
            //显示下一页
            pageTranslate : function(e){
                var nowItem = _params.slider.children(_params.slideritem).eq(_params.nowPage)[0];
                var nextItem = _params.slider.children(_params.slideritem).eq(_params.nextPage)[0];
                $(nextItem).removeClass("hide");
                var scale=1;
                if(_params.effect.toUpperCase()=="3D"){
                    scale=1-(Math.abs(_params.touchDelta*0.2)/_params.wHeight);
                }

                // 切换的页面移动
                if(_params.isVertical){
                    nowItem.style[_params.prefixStyle+"transform"]='translate(0,'+( parseInt($(nowItem).attr('data-translate'))+_params.touchDelta/5)+'px) scale('+scale+')';
                    nextItem.style[_params.prefixStyle+"transform"]='translate(0,'+( parseInt($(nextItem).attr('data-translate'))+_params.touchDelta)+'px)';
                }else if(_params.isHorizontal){
                    nowItem.style[_params.prefixStyle+"transform"]='translate('+( parseInt($(nowItem).attr('data-translate'))+_params.touchDelta/5)+'px,0) scale('+scale+')';
                    nextItem.style[_params.prefixStyle+"transform"]='translate('+( parseInt($(nextItem).attr('data-translate'))+_params.touchDelta)+'px,0)';
                }
                nowItem.style["z-index"]=1;
                nextItem.style["z-index"]=10;
            },

            //获取浏览器前缀
            prefixStyle	: function () {
                var prefixStyle = "";
                var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
                    transform,
                    i = 0,
                    l = vendors.length;

                for ( ; i < l; i++ ) {
                    transform = vendors[i] + 'ransform';
                    if ( transform in document.createElement('div').style) {
                        prefixStyle = ("-"+vendors[i].substr(0, vendors[i].length-1)+"-").replace("--","");
                    }
                }
                return prefixStyle;
            }
        }


        //初始化
        _methods.init();
        //初始化事件
        _methods.initEvent();

    };
})(jQuery);
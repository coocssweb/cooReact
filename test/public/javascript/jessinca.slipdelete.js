/*=============================================================================
 #     FileName : jessinca.slipdelete.js
 #         Desc : 滑动删除插件
 #       Author : jessinca.王佳欣
 #   LastUpdate : 2014-10-18 11:48:39
 #	加载到数组的原因是，为了尽量少操作dom;前端操作中dom操作是最耗性能的操作之一。
 =============================================================================*/
(function ($) {
	$.fn.slipdelete = function (options) {
		var defaults = {
			slipWidth		: 20,			//滑动距离
			marginRight		: 0,			//距离右边
			deleteWidth		: 60,			//按钮宽度
			touchDelta		: 0,			//滑动距离
			slipItem		: "slipItem",	//滑动项
			deleteItem		: "deleteItem",	//删除
			isTouchDown		: false,		//是否正在触屏
			startX			: 0,			//开始位置
			endX			: 0,			//结束位置
			translateX		: 0,			//水平移动范围
			slipIndex		:-1,			//当前slip位置
			lastSlipIndex	:-1				//上一个slip位置
		};

		//合并参数
		var _params = $.extend(defaults, options);
		//当前对象
		var _this = this;
		//当前选择
		var _currItem;
		//浏览器内核前缀
		var _prefixStyle="";


		//推入数组容器处理
		var _slipItemArray=[];
		_this.find("."+_params.slipItem).each(function(index){
			//将滑动的条目推入数组
			_slipItemArray[index]=[$(this) , false];
		})

		//开始触屏
		_this.find("."+_params.slipItem).bind("touchstart",function(){
			_currItem=$(this);
			_params.slipIndex=$(this).parent().index();
			_methods.touchStart();
		});
		//触屏结束
		_this.find("."+_params.slipItem).bind("touchend",function(){

			_methods.touchEnd();
		});
		//触屏滑动
		_this.find("."+_params.slipItem).bind("touchmove",function(){
			_methods.touching();
		});
		//删除按钮
		_this.find("."+_params.deleteItem).bind("click",function(){
			//删除事件
		});

		var _methods={
			//触屏开始事件
			touchStart : function(){
				if(_params.isTouchDown) return;
				_params.isTouchDown=true;
				window.event.preventDefault();
				var touch=window.event.touches[0]||window.event.changedTouches[0];
				_params.startX = touch.pageX;
			},

			//正在触屏事件
			touching : function(){
				var touch=window.event.touches[0]||window.event.changedTouches[0];
				_params.endX=touch.pageX;
				//计算滑动距离
				_params.touchDelta=	_params.endX-_params.startX;
				//页面滑动
				_methods.itemTranslate();
			},

			//显示删除按钮
			itemTranslate : function(){
				if(!_slipItemArray[_params.slipIndex][1]){
					_params.translateX=_params.touchDelta>0?0:(_params.touchDelta<-_params.deleteWidth?-_params.deleteWidth:_params.touchDelta);
				}else{
					_params.translateX=_params.touchDelta<0?-_params.deleteWidth:(_params.touchDelta>_params.deleteWidth?0:(_params.touchDelta-_params.deleteWidth));
				}

				_currItem[0].style[_prefixStyle+"transform"]='translate('+_params.translateX+'px,0px)';

				//关闭其他删除项目
				if(Math.abs(_params.touchDelta)>10
					&&_params.lastSlipIndex!=-1
					&&_params.lastSlipIndex!=_params.slipIndex
				){
					_slipItemArray[_params.lastSlipIndex][0][0].style[_prefixStyle+"transform"]='translate(0px,0px)';
					_slipItemArray[_params.lastSlipIndex][0][0].style[_prefixStyle+"transition"]='all 0.1s';
					_slipItemArray[_params.lastSlipIndex][1]=false;
					setTimeout(function(){
						_slipItemArray[_params.lastSlipIndex][0][0].style[_prefixStyle+"transition"]="";
					},100);
				}
			},
			//触屏结束事件
			touchEnd : function(){
				//超过范围不滑动
				if(!_slipItemArray[_params.slipIndex][1]&&_params.touchDelta>=0){
					_params.isTouchDown=false;
					return;
				}
				//超过范围不滑动
				if(_slipItemArray[_params.slipIndex][1]&&_params.touchDelta<0){
					_params.isTouchDown=false;
					return;
				}

				var touch=window.event.changedTouches[0]||window.event.touches[0];
				_params.endX=touch.pageX;

				//点击不滑动
				if(_params.endX==_params.startX){
					return;
				}

				_params.touchDelta=_params.startX-_params.endX;

				if(Math.abs(_params.touchDelta)>=_params.slipWidth){
					//切换成功
					_methods.touchSuccess();
				}else{
					//切换失败
					_methods.touchFail();
				}

			},
			//翻页成功
			touchSuccess : function(){
				//开启动画
				_currItem[0].style[_prefixStyle+"transition"]='all 0.1s';
				if(!_slipItemArray[_params.slipIndex][1]){
					_slipItemArray[_params.slipIndex][1]=true;
					_currItem[0].style[_prefixStyle+"transform"]='translate(-'+(_params.deleteWidth+_params.marginRight)+'px,0px)';
				}
				else{
					_slipItemArray[_params.slipIndex][1]=false;
					_currItem[0].style[_prefixStyle+"transform"]='translate(0px,0px)';
				}

				//重置参数
				_methods.resetInitParams();

				//记录上个位置
				_params.lastSlipIndex=_params.slipIndex;

				setTimeout(function(){
					_currItem[0].style[_prefixStyle+"transition"]="";
				},100);
			},
			//翻页失败
			touchFail : function(){
				_slipItemArray[_params.slipIndex][1]=false;
				_currItem[0].style[_prefixStyle+"transition"]='all 0.1s';
				_currItem[0].style[_prefixStyle+"transform"]='translate(0px,0px)';

				//重置参数
				_methods.resetInitParams();

				setTimeout(function(){
					_currItem[0].style[_prefixStyle+"transition"]="";
				},100);
			},
			//重置信息
			resetInitParams:function(){
				_isTranslate=false;
				_params.endX=0;
				_params.startX=0;
				_params.touchDelta=0;
				_params.isTouchDown=false;
			},

			//获取浏览器前缀
			prefixStyle	: function () {
				var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
					transform,
					i = 0,
					l = vendors.length;

				for ( ; i < l; i++ ) {
					transform = vendors[i] + 'ransform';
					if ( transform in document.createElement('div').style) {
						_prefixStyle = ("-"+vendors[i].substr(0, vendors[i].length-1)+"-").replace("--","");
					}
				}
				return _prefixStyle;
			}
		}

		_prefixStyle=_methods.prefixStyle();
	}
})(jQuery);


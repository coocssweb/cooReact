var React = require("react");
var Base =require("Base");
//浏览器前缀
var _prefixStyle = Base.prefixStyle();
var SlideItem = React.createClass({
    getInitialState : function(){
        return { translateX : 0 }
    },
    getDefaultProps(){
        return {
            delateWidth  : 60,       //变形范围
            delateTrigger: 10,       //触发范围
            isTouchDown  : false,    //鼠标是否按下
            startX       : 0,        //鼠标开始的位置
            endX         : 0,        //鼠标释放的位置
            delateX      : 0,        //鼠标滑动的距离
            translateX   : 0,        //变形范围
            isUpdate     : false     //是否更新
        }
    },
    onTouchStart : function(e){
        if(this.props.isTouchDown){
            return;
        }
        this.props.isTouchDown = true;
        var touch=window.event.touches[0]||window.event.changedTouches[0];
        this.props.startX = touch.pageX;
    },
    onTouchMove : function(e){
        if(!this.props.isTouchDown){
            return;
        }
        var touch=window.event.touches[0]||window.event.changedTouches[0];
        this.props.endX = touch.pageX;
        this.props.delateX = this.props.endX - this.props.startX;
        //获取滑动距离
        if(this.props.isTranslate){
            this.props.translateX = this.props.delateX < 0 ? -this.props.delateWidth :( this.props.delateX < this.props.delateWidth ? (this.props.delateX - this.props.delateWidth) : 0);
        }else{
            this.props.translateX = this.props.delateX > 0 ? 0 : (this.props.delateX > (-this.props.delateWidth) ? this.props.delateX : (-this.props.delateWidth));
        }
        //设置状态【滑动距离】，触发重新渲染
        this.setState({
            translateX : this.props.translateX
        });
    },
    onTouchEnd : function(e){
        if(!this.props.isTouchDown){
            return;
        }

        /**
         * 调用List的重新设置状态方法，重新渲染List
         */
        if(this.props.delateX !=0){
            if((!this.props.isTranslate&&(this.props.delateX<(-this.props.delateTrigger)))
                     ||(this.props.isTranslate&&(this.props.delateX>this.props.delateTrigger))
            ){
                //滑动成功，切换isTranslate状态
                this.props.setTranslateFunc(this.props.dataIndex,!this.props.isTranslate);
            }else{
                this.props.setTranslateFunc(this.props.dataIndex,this.props.isTranslate);
            }
        }
    },
    onDelete : function(e){
        /**
         * 点击删除时触发
         * 调用属性方法，抛到List处理删除事件，重新渲染
         */
        e.stopPropagation();
    },
    componentWillUpdate : function(){
        /**
         * 重新渲染的时候触发
         * 设置选项状态为更新
         */
        this.props.isUpdate = true;
    },
    render : function(e) {
        var styleElement = {};
        //是否为更新
        if (this.props.isUpdate) {
            styleElement[_prefixStyle + "transform"] = "translate(" + this.state.translateX + "px, 0px)";

        }

        //判断当前项的isTranslate 状态
        if (this.props.dataIndex == this.props.deleteIndex&&this.props.isTranslate&&!this.props.isUpdate) {
            styleElement[_prefixStyle + "transform"] = "translate(" + (-this.props.delateWidth) + "px, 0px)";
        }

        //事件组合
        var Events = {
            onTouchStart : this.onTouchStart,
            onTouchMove : this.onTouchMove,
            onTouchEnd : this.onTouchEnd
        }

        return (
                <li className="list-slip-item clearfix">
                    <div className="slip-item" {...Events}   style={styleElement}>
                    <div className="plus-desc">
                    <h2><i className={"fa fa-"+this.props.dataValue.letter}></i>{this.props.dataValue.name}</h2>
                    <p>{this.props.dataValue.keyword}</p>
                    </div>
                    <a href="javascript:;" className=" delete-item" onClick={this.onDelete}><i className="fa fa-trash-o fa-2x"></i></a>
                    </div>
                </li>
            )
    }
});
//声明组件
module.exports = SlideItem;
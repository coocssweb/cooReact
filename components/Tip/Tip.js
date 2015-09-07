var React=require("react");
var Tip=React.createClass({
    propTypes :{
        isShow      : React.PropTypes.bool,                              //是否显示
        isShowBtn   : React.PropTypes.bool,                              //是否显示
        timeout     : React.PropTypes.number,                            //显示多久事件后，自动关闭
        message     : React.PropTypes.string,                            //显示信息
        classStyle  : React.PropTypes.oneOf(['alert-success', 'alert-info' ,'alert-danger']),     //样式名称
        tipCallBack : React.PropTypes.func
    },
    getDefaultProps : function(){
        return {
            isShow      : false,    //是否显示
            isShowBtn   : false     //是否显示关闭按钮
        }
    },
    //初始化State
    getInitialState :function(){
        return {
            isUpdate : false	//是否显示
            
        }
    },
    componentDidUpdate : function(){
        if(this.props.timeout>0 && this.props.isShow){
            var $that = this;
            window.setTimeout($that.onClose,this.props.timeout);
        }
    },
    onClose:function(){
        this.props.isShow = false;

        this.setState({
            isUpdate:true
        });
        //回调函数
        if(this.props.tipCallBack) {
            this.props.tipCallBack();
        }
    },
    render:function(){
        return (
            <div className={"mask "+(this.props.isShow?"":"hide ") +this.props.classStyle }>
                <div className="tip">
                    <a href="javascript:;" onClick={this.onClose}><i className={"fa fa-times-circle fa-2x close-tip "+(this.props.isShowBtn?"":"hide ")}></i></a>
                    {this.props.message}
                </div>
            </div>
        )
    }
});

module.exports = Tip;
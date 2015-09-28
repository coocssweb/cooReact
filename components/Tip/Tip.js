var React=require("react");
var Styles = require('./Tip.css')
var Tip=React.createClass({
    propTypes :{
        isShowBtn   : React.PropTypes.bool,                              //是否显示
        timeout     : React.PropTypes.number,                            //显示多久事件后，自动关闭
        message     : React.PropTypes.string,                            //显示信息
        callback    : React.PropTypes.func
    },
    getDefaultProps : function(){
        return {
            isShowBtn   : false    //是否显示关闭按钮
        }
    },
    componentDidMount : function(){
        if(this.props.timeout>0){
            window.setTimeout(this.onClose,this.props.timeout);
        }
    },
    onClose:function(){
        //回调函数
        if(this.props.callback) {
            this.props.callback();
        }
    },
    render:function(){
        var closeBtn = null;
        if(this.props.isShowBtn){
            closeBtn = (
                <a href="javascript:;" onClick={this.onClose}><i className={`${'fa fa-times-circle fa-2x '}${Styles['close-tip']}`}></i></a>
            )
        }
        return (
            <div className="mask">
                <div className={Styles["tip"]}>
                    {closeBtn}
                    {this.props.message}
                </div>
            </div>
        )
    }
});

module.exports = Tip;
var React=require("react");
var Tip=React.createClass({
    //初始化State
    getInitialState :function(){
        return {
            isUpdate : false	//是否显示
        }
    },
    getDefaultProps : function(){
        return {
            isShow : false
        }
    },
    onClose:function(){
        this.props.isShow = false;
        this.props.onCloseTip();
        this.setState({
            isUpdate:true
        });
    },
    render:function(){
        return (
            <div className={"mask "+(this.props.isShow?"":"hide")}>
                <div className="tip">
                    <a href="javascript:;" onClick={this.onClose}><i className="fa fa-times-circle fa-2x close-tip"></i></a>
                    {this.props.message}
                </div>
            </div>
        )
    }
});

module.exports = Tip;
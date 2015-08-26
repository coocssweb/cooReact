var React=require("react");
var Tip=React.createClass({
    //初始化State
    getInitialState :function(){
        return {
            isShow : true	//是否显示
        }
    },
    onClose:function(){
        this.setState({
            isShow:false
        });
    },
    render:function(){
        return (
            <div className={"mask "+(this.state.isShow?"":"hide")}>
                <div className="tip">
                    <a href="javascript:;" onClick={this.onClose}><i className="fa fa-times-circle fa-2x close-tip"></i></a>
                    {this.props.message}
                </div>
            </div>
        )
    }
});

module.exports = Tip;
//确认对话框
/*参数说明
 message：弹出框信息
 onConfirm：确认事件
 调用方法：<Dialog message="确认删除吗？" onConfirm={this.onConfirm} />
 */

var React = require("react");
var Confirm = React.createClass({
        propTypes :{
            isShow      : React.PropTypes.bool,                              //是否显示
            message     : React.PropTypes.string,                            //显示信息
            confirmCallBack : React.PropTypes.func,                          //确认回调函数
            cancelCallBack  : React.PropTypes.func                           //取消回调函数
        },
        //初始化State
        getInitialState : function(){
            return {
                isUpdate : false
            }
        },
        getDefaultProps : function(){
            return{
                isShow : false
            }
        },
        //取消事件
        onCancel : function(){
            this.props.isShow = false;
            this.setState(
                {
                    isUpdate:!this.state.isUpdate
                }
            );
            if(this.props.cancelCallBack){
                this.props.cancelCallBack();
            }
        },
        //确认事件
        onConfirm : function(){
            this.props.isShow = false;
            this.setState(
                {
                    isUpdate:!this.state.isUpdate
                }
            );
            //回调
            if(this.props.confirmCallBack) {
                this.props.confirmCallBack();
            }
        },
        //渲染
        render : function(){
            return (
                <div className={"mask " + (this.props.isShow?"":"hide")}>
                   <div className="dialog">
                        <div className="dialog-message">{this.props.message}</div>
                        <div className="dialog-btns">
                            <a href="javascript:;" className="btn btn-cancel" onClick={this.onCancel}>取消</a>
                            <a href="javascript:;" className="btn btn-confirm" onClick={this.onConfirm}>确认</a>
                        </div>
                    </div>
                </div>
            );
        }
});

module.exports = Confirm;
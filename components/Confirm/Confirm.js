//确认对话框
/*参数说明
 message：弹出框信息
 onConfirm：确认事件
 调用方法：<Dialog message="确认删除吗？" onConfirm={this.onConfirm} />
 */

var React = require("react");
var Confirm = React.createClass({
        //初始化State
        getInitialState : function(){
            return {
                isShow : true	//是否显示
            }
        },
        //取消事件
        onCancel : function(){
            this.setState(
                {
                    isShow:false
                }
            );
        },
        //确认事件
        onConfirm : function(){
            this.setState(
                {
                    isShow:false
                }
            );
            //回调
            this.props.onConfirm();

        },
        //渲染
        render : function(){
            return (
                <div className={"mask " + (this.state.isShow?"":"hide")}>
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
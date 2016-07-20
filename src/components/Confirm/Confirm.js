var React = require("react");
var Buttons = require('../common/Button.css');
var Styles = require('./Confirm.css');
var Confirm = React.createClass({
        propTypes :{
            title       : React.PropTypes.string,                            //标题
            message     : React.PropTypes.string,                            //显示信息
            confirmCallback : React.PropTypes.func,                          //确认回调函数
            cancelCallback  : React.PropTypes.func                           //取消回调函数
        },
        getDefaultProps : function(){
            return {
                title : '提醒 :'
            }
        },
        //取消事件
        onCancel : function(){
            if(this.props.cancelCallback){
                this.props.cancelCallback();
            }
        },
        //确认事件
        onConfirm : function(){
            if(this.props.confirmCallback) {
                this.props.confirmCallback();
            }
        },
        //渲染
        render : function(){
            return (
                <div className='mask'>
                   <div className={Styles['dialog']}>
                        <div className={Styles['dialog-title']}>{this.props.title}</div>
                        <div className={Styles['dialog-message']}>{this.props.message}</div>
                        <a href="javascript:;" className={`${Buttons['btn-primary']}${' '}${Styles['btn-cancel']}`} onClick={this.onCancel}>取消</a>
                        <a href="javascript:;" className={`${Buttons['btn-primary']}${' '}${Styles['btn-confirm']}`} onClick={this.onConfirm}>确认</a>
                    </div>
                </div>
            );
        }
});

module.exports = Confirm;
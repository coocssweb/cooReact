var React = require("react");
var Tip = require("Tip");
var Base = require("Base");
var $ = require("jquery");
var SignUp = React.createClass({

    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            isSend      : false,    //是否已发送验证码
            timeOut     : 60,       //倒计时
            resultTime  : 0,        //剩余时间
            message     : "",       //提示信息
            isShowTip   : false,    //显示提示信息
            codeCorrect : "",       //正确的验证码
            telno       : "",       //手机号码
            code        : ""        //验证码
        }
    },
    //验证手机号码
    checkTelno : function(){
        this.props.telno = $.trim( React.findDOMNode(this.refs.telno).value);
        var flag = true;
        if(this.props.telno==""){
            this.props.message = "请输入手机号码";
            flag = false;
        }else if(!Base.isTest(this.props.telno,Base.regStr.telno)){
            this.props.message = "请输入正确的手机号码";
            flag = false;
        }
        /**
         * 验证手机号码是否已存在
         */

        return flag;
    },
    //验证验证码
    checkCode : function(){
        this.props.code = $.trim( React.findDOMNode(this.refs.code).value);
        var flag = true;
        if(this.props.code == ""){
            this.props.message = "请输入验证码";
            flag = false;
        }else if(this.props.codeCorrect!=this.props.code){
            this.props.message = "请输入正确的验证码";
            flag = false;
        }
        return flag;
    },
    //获取验证码
    sendCode : function(){
        /**
         * 请求服务端发送验证码
         */
        if(!this.checkTelno()) {
            this.props.isShowTip = true;
            this.setState({
                isUpdate : !this.state.isUpdate
            });
        }else{
            this.props.isSend = true;
            this.props.resultTime = this.props.timeOut;
            this.timeOut();
        }
    },
    timeOut : function(){

        if(this.props.resultTime>0) {
            var $that = this;
            window.setTimeout($that.timeOut, 1000);
            this.props.resultTime--;
            this.isTiming = true;
        }else{
            this.props.isSend = false;
            this.isTiming = false;
        }
        this.setState({
            isUpdate : !this.state.isUpdate
        });
    },
    //提交表单
    onSubmit : function(){
        var isTelno =  this.checkTelno();
        var isCode = this.checkCode();
        if(!(isTelno&&isCode)){
            this.props.isShowTip = true;
            this.setState({
                isUpdate : !this.state.isUpdate
            });
        }else{
            /**
             * 处理下一步请求
             */
        }
    },
    onCloseTip:function(){
        this.props.isShowTip = false;
    },
    render : function(){
        return (
            <div className="login-panel">
                <div className="logo"></div>
                <form className="login-regit-form">
                    <div className="form-line mt20 ">
                        <input type="text" placeholder="请输入你的手机号码" name="telno" ref="telno" validate="req telno" />
                    </div>
                    <div className="form-line mt10">
                        <input type="text" placeholder="请输入验证码" className="w-half" name="code" ref="code" validate="req password" />
                        <a href="javascript:;" className={"btn btn-getcode " + (this.props.isSend ?"hide":"")} onClick={this.sendCode} >获取验证码</a>
                        <span className={"timeout-reget "+(this.props.isSend ?"":"hide") }>{this.props.resultTime}秒后 , 重新发送</span>
                    </div>
                    <div className="form-line mt20">
                        <a href="javascript:;" className="btn btn-login" onClick={this.onSubmit}>马上注册</a>
                    </div>
                    <div className="form-feedback mt30 clearfix">
                        <a href="" class="fr">已有账号 , 现在去登录</a>
                    </div>
                </form>
                <Tip isShow={this.props.isShowTip} onCloseTip={this.onCloseTip} message={this.props.message} />
            </div>
        )
    }
});

module.exports = SignUp;
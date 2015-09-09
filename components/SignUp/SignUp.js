var React = require("react");
var $ = require("jquery");
var Tip = require("Tip");
var Base = require("Base");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var Navigation = ReactRouter.Navigation;

var SignUp = React.createClass({
    mixins: [Navigation],
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            isSend      : false,    //是否已发送验证码
            timeOut     : null,     //倒计时
            timeCount   : 60,       //倒计时间数
            resultTime  : 0,        //剩余时间
            message     : "",       //提示信息
            isShowTip   : false,    //显示提示信息
            codeCorrect : "",       //正确的验证码
            telno       : "",       //手机号码
            password    : "",       //密码
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
        }else if(Base.loadUrl(this.props.url_isexist,"isexist")){
            this.props.message = "手机号码已注册请直接登录";
            flag = false;
        }

        return flag;
    },
    //验证密码
    checkPassword : function(){
        var flag = true;
        this.props.password = $.trim( React.findDOMNode(this.refs.password).value);
        if(this.props.password == ""){
            this.props.message = "请输入6-16位数字或字母的密码";
            flag = false;
        }else if(!Base.isTest(this.props.password,Base.regStr.password)){
            this.props.message = "请输入6-16位数字或字母的密码";
            flag = false;
        }
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
        if(!this.checkTelno()) {
            this.props.isShowTip = true;
            this.setState({
                isUpdate : !this.state.isUpdate
            });
        }else{
            this.props.isSend = true;

            /**
             * 请求服务端发送验证码
             */
            this.props.codeCorrect = Base.loadUrl(this.props.url_code,"code");

            this.props.resultTime = this.props.timeCount;
            this.timeOut();
        }
    },
    timeOut : function(){

        if(this.props.resultTime>0) {
            var $that = this;
            this.props.timeOut = window.setTimeout($that.timeOut, 1000);
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
    onSubmit : function(e){
        var isTelno =  this.checkTelno();
        var isPassword = this.checkPassword();
        var isCode = this.checkCode();

        if(!(isTelno&&isPassword&&isCode)){
            e.preventDefault();
            this.props.isShowTip = true;
            this.setState({
                isUpdate : !this.state.isUpdate
            });
        }else{
            var data ={
                telno       : this.props.telno,         //手机号码
                password    :this.props.password,       //密码
                code        : this.props.codeCorrect    //验证码
            }
            window.clearTimeout(this.props.timeOut);
            if(!this.props.onSubmit(data)){
                e.preventDefault();
                this.props.isShowTip = true;
                this.props.message = "注册失败，请联系管理员";
                this.setState({
                    isUpdate : !this.state.isUpdate
                });
            }
        }
    },
    tipCallBack:function(){
        this.props.isShowTip = false;
    },
    render : function(){
        return (
            <div className="container">
            <header>
                <a href="javascript:;" className = "header-back" onClick={() => this.goBack()}><i className="fa fa-angle-left fa-2"></i></a>
                <span className="header-title">用户注册</span>
            </header>
            <div className="login-panel">
                <div className="logo"></div>
                <form className="login-regit-form">
                    <div className="form-line mt20 ">
                        <input type="text" placeholder="请输入你的手机号码" name="telno" ref="telno" validate="req telno" />
                    </div>
                    <div className="form-line mt10 ">
                        <input type="password" placeholder="请输入密码" name="password" ref="password" validate="req password" />
                    </div>
                    <div className="form-line mt10">
                        <input type="text" placeholder="请输入验证码" className="input-code" name="code" ref="code" validate="req password" />
                        <a href="javascript:;" className={"btn btn-primary btn-code " + (this.props.isSend ?"hide":"")} onClick={this.sendCode} >获取验证码</a>
                        <span className={"timeout-reget "+(this.props.isSend ?"":"hide") }>{this.props.resultTime}秒后 , 重新发送</span>
                    </div>
                    <div className="form-line mt20">
                        <Link to="signin" className="btn btn-blue block" onClick={this.onSubmit}>注册</Link>
                    </div>
                    <div className="form-feedback mt30 clearfix">
                        <Link to="signin" className="fl" >已有账号 , 现在去登录</Link>
                    </div>
                </form>
                <Tip isShow={this.props.isShowTip} timeout={1000} classStyle ={"alert-info"} tipCallBack={this.tipCallBack} message={this.props.message} />
            </div>
            </div>
        )
    }
});


module.exports = SignUp;
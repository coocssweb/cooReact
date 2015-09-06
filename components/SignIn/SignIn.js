var React = require("react");
var Tip = require("Tip");
var Base = require("Base");
var $ = require("jquery");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var Navigation = ReactRouter.Navigation;

var SignIn = React.createClass({
    mixins: [Navigation],
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            message     : "",       //提示信息
            isShowTip   : false,    //显示提示信息
            telno       : "",       //手机号码
            password    : ""        //密码
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
        return flag;
    },
    checkPassword : function(){
        this.props.password = $.trim( React.findDOMNode(this.refs.password).value);
        var flag = true;
        if(this.props.password==""){
            this.props.message = "请输入密码";
            flag = false;
        }
        return flag;
    },
    onSubmit : function(e){
        var isTelno = this.checkTelno();
        var isPassword = this.checkPassword();
        if(!(isTelno&&isPassword)){
            e.preventDefault();
            this.props.isShowTip=true;
            this.setState({
                isUpdate : !this.state.isUpdate
            });
        }else{
            var data ={
                telno : this.props.telno,
                password : this.props.password
            }
            //登录验证
            var user = Base.loadUrl(this.props.url_account,"user",data);

            if(user == null){
                e.preventDefault();
                this.props.isShowTip=true;
                this.props.message = "登录失败，请输入正确的账号信息";
                this.setState({
                    isUpdate : !this.state.isUpdate
                });
            }else{
                this.props.onSubmit(user);
            }
        }
    },
    onCloseTip:function(){
        this.props.isShowTip = false;
    },
    render : function(){
        return (
            <div className="container">
            <header>
            <a href="javascript:;" className = "header-back" onClick={() => this.goBack()}><i className="fa fa-angle-left fa-2"></i></a>
            <span className="header-title">用户登录</span>
            </header>
            <div className="login-panel">
                <div className="logo"></div>
                <form className="login-regit-form">
                    <div className="form-line mt20 ">
                        <input type="text" placeholder="请输入手机号码" name="telno" ref="telno" validate="req telno" />
                    </div>
                    <div className="form-line mt10">
                        <input type="password" placeholder="请输入密码" name="password" ref="password" validate="req password" />
                    </div>
                    <div className="form-line mt20">
                        <a href="javascript:;" className="btn btn-login" onClick={this.onSubmit}>登录</a>
                    </div>
                    <div className="form-feedback mt30 clearfix">
                        <Link to="findpwd" className="fl" >忘记密码?</Link>
                        <Link to="signup" className="fr" >还没注册?</Link>
                    </div>
                </form>
                <Tip isShow={this.props.isShowTip} onCloseTip={this.onCloseTip} message={this.props.message} />
            </div>
            </div>
        );
    }
});

module.exports = SignIn;
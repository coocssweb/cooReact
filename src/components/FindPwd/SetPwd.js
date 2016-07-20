var React = require("react");
var Tip = require("Tip");
var Base = require("Base");
var $ = require("jquery");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var Navigation = ReactRouter.Navigation;
var SetPwd = React.createClass({
    mixins: [Navigation],
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            message     : "",       //提示信息
            isShowTip   : false     //显示提示信息
        }
    },
    onSubmit : function(e){
        var password = $.trim( React.findDOMNode(this.refs.password).value);
        var rePassword = $.trim( React.findDOMNode(this.refs.rePassword).value);
        var flag = true;
        if(password==""){
            this.props.message = "请输入密码";
            flag = false;
        }else if(!Base.isTest(password,Base.regStr.password)){
            this.props.message = "请输入6-16位字母或数字的密码";
            flag = false;
        }else if(password != rePassword ){
            this.props.message = "两次密码输入不一致";
            flag = false;
        }

        if(!flag){
            e.preventDefault();
            this.props.isShowTip = true;
            this.setState({
                isUpdate : !this.state.isUpdate
            });
        }else{
            var data ={
                password : password
            }
            if(!this.props.onSubmit(data)){
                e.preventDefault();
                this.props.message = "重置密码失败，请联系管理员";
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
            <span className="header-title">重置密码</span>
            </header>
            <div className="login-panel">
            <div className="logo"></div>
            <form className="login-regit-form">
                <div className="form-line mt20 ">
                    <input type="password" placeholder="请输入密码" name="password" ref="password" validate="req password" />
                </div>
                <div className="form-line mt10">
                    <input type="password" placeholder="请确认密码" name="rePassword" ref="rePassword" validate="req password" />
                </div>
                <div className="form-line mt20">
                 <Link to="signin" className="btn btn-blue block" onClick={this.onSubmit}>重置密码</Link>
                </div>
            </form>
            <Tip isShow={this.props.isShowTip} tipCallBack={this.tipCallBack}   timeout={1000} classStyle={"alert-info"}   message={this.props.message} />
            </div>
            </div>
        );
    }
});

module.exports = SetPwd;
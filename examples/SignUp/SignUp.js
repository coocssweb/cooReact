var React = require("react");
var $ = require("jquery");
var SignUp = require("SignUp");
var Tip = require("Tip");
var Base = require("Base");
var ReactRouter = require("react-router");
var { Route, DefaultRoute, RouteHandler, Link } = ReactRouter;
/**
 * 注册组件
 */

var _data ={};

var SignUpTest = React.createClass({
        onSubmit : function(data){
            _data.telno = data.telno;
            console.log("telno");
        },
        render : function(){
            return (
                <SignUp dataIsExist="./data_isexist.js" dataCode="./data_code.js" onSubmit ={this.onSubmit}  />
            )
        }
})

var Pwd = React.createClass({
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            isShowTip   : false,        //是否显示提示
            message     : ""            //提示信息
        }
    },
    onCloseTip:function(){
        this.props.isShowTip = false;
    },
    onSubmit : function(){
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
            this.props.isShowTip = true;
            this.setState({
                isUpdate : !this.state.isUpdate
            });
        }


    },
    render :function(){
        return (
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
                        <a href="javascript:;" className="btn btn-login" onClick={this.onSubmit}>确认密码</a>
                    </div>
                </form>
                <Tip isShow={this.props.isShowTip} onCloseTip={this.onCloseTip} message={this.props.message} />
            </div>
        );
    }
})

var App = React.createClass({
    render : function(){
        return (
            <RouteHandler />
        );
    }
});

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={SignUpTest}/>
        <Route name="SetPwd" path="pwd" handler={Pwd} />
    </Route>
);



ReactRouter.run(routes, ReactRouter.HashLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('main-container'))
});
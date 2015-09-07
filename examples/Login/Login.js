var React = require("react");
var $ = require("jquery");

var SignIn = require("SignIn");
var SignUp = require("SignUp");
var FindPwd = require("FindPwd");
var SetPwd = require("SetPwd");

var Base = require("Base");
var ReactRouter = require("react-router");
var { Route, DefaultRoute, RouteHandler, Link } = ReactRouter;
/**
 * 注册组件
 */


var _data ={};
//登录
var SignInTest = React.createClass({
        onSubmit : function(){
            return true;
        },
        render :function(){
            return (
                <SignIn url_account ="./data_account.js" onSubmit = {this.onSubmit} />
            );
        }
});

//注册
var SignUpTest = React.createClass({
        onSubmit : function(data){
            return true;
        },
        render : function(){
            return (
                <SignUp url_isexist="./data_signup.js" url_code="./data_code.js" onSubmit ={this.onSubmit}  />
            )
        }
});




//找回密码
var FindPwdTest = React.createClass({
        onSubmit : function(data){
            return true;
        },
        render : function(){
            return (
                <FindPwd url_isexist="./data_isexist.js" url_code="./data_code.js" onSubmit={this.onSubmit} />
            )
        }
});
//重置密码
var SetPwdTest = React.createClass({
        onSubmit : function(data){
            return true;
        },
        render : function(){
            return (
                <SetPwd onSubmit={this.onSubmit} />
            )
        }
});


var App = React.createClass({
    render : function(){
        return (
            <RouteHandler />
        );
    }
});


var routes = (
    <Route handler={App}>
    <DefaultRoute handler={SignInTest}/>
    <Route name="signin" path="signin" handler={SignInTest} />
    <Route name="signup" path="signup" handler={SignUpTest} />
    <Route name="findpwd" path="findpwd" handler={FindPwdTest} />
    <Route name="setpwd" path="setpwd" handler={SetPwdTest} />
    </Route>
);



ReactRouter.run(routes, ReactRouter.HashLocation, function (Handler) {
    React.render(<Handler/>, document.body)
});

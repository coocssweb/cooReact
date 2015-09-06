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
 * ×¢²á×é¼ş
 */


var _data ={};
//µÇÂ¼
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

//×¢²á
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

//ÕÒ»ØÃÜÂë
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
//ÖØÖÃÃÜÂë
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
    React.render(<Handler/>, document.getElementById('main-container'))
});

var React = require("react");
var SignUp = require("SignUp");
var Tip = require("Tip");
var ReactRouter = require("react-router");
var { Route, DefaultRoute, RouteHandler, Link } = ReactRouter;
/**
 * 路由定义
 */


var SignUpTest = React.createClass({
        onTelnoCheck : function(){

        },
        render : function(){
            return (
                <SignUp dataIsExist="./data_isexist.js" dataCode="./data_code.js" onSubmit ={this.onTelnoCheck}  />
            )
        }
})

var Pwd = React.createClass({
    getInitalState : function(){

    },
    getDefaultProps : function(){
        return {
            isShowTip   : false,        //是否显示提示框
            message     : ""            //提示信息
        }
    },
    onSubmit : function(){

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
                        <a href="javascript:;" className="btn btn-login" onClick={this.onSubmit}>设定密码</a>
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
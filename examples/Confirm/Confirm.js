var React = require("react");
var Confirm = require("Confirm");

var confirmCallBack = function(){
    alert("callback");
}

React.render(
        <Confirm message="确认删除吗？" isShow ={true} confirmCallBack={confirmCallBack} />,
        document.body
);
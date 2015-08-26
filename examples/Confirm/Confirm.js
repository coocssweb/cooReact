var React = require("react");
var Confirm = require("../../components/Confirm/Confirm.js");

var onConfirm = function(){
    alert("Hello World");
}

React.render(
        <Confirm message="确认删除吗？" onConfirm={onConfirm} />,
        document.body
);
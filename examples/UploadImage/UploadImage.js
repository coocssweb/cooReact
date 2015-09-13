var React = require("react");
var UploadImage =  require("UploadImage");

var UploadImageTest = React.createClass({
    render : function(){
        return (
            <UploadImage uploadRequestUrl="baidu.com" />
        )
    }
})

React.render(
    <UploadImageTest /> , document.body
)
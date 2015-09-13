var React = require("react");
var UploadImage =  require("UploadImage");

var UploadImageTest = React.createClass({
    render : function(){
        return (
            <UploadImage uploadRequestUrl="baidu.com" maxSize={2} maxCount={1}  />
        )
    }
})

React.render(
    <UploadImageTest /> , document.body
)
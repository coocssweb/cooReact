var React = require("react");
var Pager = require("Pager");
var onPageChange = function(page){
    alert("当前页:"+page)
}

React.render(
    <Pager pageIndex={1} pageCount ={10} onPageChange={onPageChange} />,
    document.getElementById("pager")
);
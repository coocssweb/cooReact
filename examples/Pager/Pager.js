var React = require("react");
var Pager = require("../../components/Pager/Pager.js");
var onPageChange = function(page){
    alert("当前页:"+page)
}
var page ={
    pageNow : 1,
    pageCount : 10
};
React.render(
    <Pager page={page} onPageChange={onPageChange} />,
    document.getElementById("pager")
);
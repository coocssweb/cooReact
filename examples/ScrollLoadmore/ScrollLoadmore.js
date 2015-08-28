var React = require("react");
var ScrollLoadmore = require("../../components/ScrollLoadmore/ScrollLoadmore.js");
//dataUrl2 为测试加载更多数据
React.render(
    <ScrollLoadmore dataUrl="./data.js" dataUrl2="./data2.js" />,
    document.getElementById('main-container')
);
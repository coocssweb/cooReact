var React = require("react");
var SlideTab = require("SlideTab");

var dataLinks = [
    (<a href="javascript:;">非死不可</a>),(<a href="javascript:;">苹果公司</a>)
]
var dataTabs =[
    (<ul className="list-slide-group list-slide-delete"><li className="list-slip-item clearfix"><div className="slip-item"><div className="plus-desc"><h2><i className="fa fa-facebook"></i><span>非死不可</span></h2><p>最大的社交脸谱网</p></div></div></li><li className="list-slip-item clearfix"><div className="slip-item"><div className="plus-desc"><h2><i className="fa fa-facebook"></i><span>非死不可</span></h2><p>最大的社交脸谱网</p></div></div></li><li className="list-slip-item clearfix"><div className="slip-item"><div className="plus-desc"><h2><i className="fa fa-facebook"></i><span>非死不可</span></h2><p>最大的社交脸谱网</p></div></div></li></ul>),
    (<ul className="list-slide-group list-slide-delete"><li className="list-slip-item clearfix"><div className="slip-item"><div className="plus-desc"><h2><i className="fa fa-apple"></i><span>苹果公司</span></h2><p>最好的电脑公司</p></div></div></li><li className="list-slip-item clearfix"><div className="slip-item"><div className="plus-desc"><h2><i className="fa fa-apple"></i><span>苹果公司</span></h2><p>最好的电脑公司</p></div></div></li><li className="list-slip-item clearfix"><div className="slip-item"><div className="plus-desc"><h2><i className="fa fa-apple"></i><span>苹果公司</span></h2><p>最好的电脑公司</p></div></div></li></ul>)
]

React.render(
    <SlideTab  Links={dataLinks} Items={dataTabs} />,
    document.getElementById('main-container')
);
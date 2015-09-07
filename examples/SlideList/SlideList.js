var React = require("react");
var SlideList = require("SlideList");
var Base =require("Base");
var $ =require("jquery");

var SlideListTest = React.createClass({
    getDefaultProps : function(){
        return {
            datas : [],    //数据
            list  : null
        }
    },
    componentWillMount:function(){
        //加载数据
        this.props.datas = Base.loadUrl("./data.js","datas");
        this.props.list=this.props.datas.map(function(slideItem,index){
        return (
            <li>
                <a href={slideItem.link}>
                    <img src={slideItem.faceimg} />
                    <p>{slideItem.title}</p>
                </a>
            </li>
            );
        });
    },
    render : function(){

        return (
            <div className="module">
                <div className="module-title">
                    <i className="fa fa-list-ul"></i> 我的小说
                </div>
                 <SlideList list={this.props.list} height={121} />
            </div>

        )
    }
});


React.render(
    <SlideListTest  />,
    document.body
);
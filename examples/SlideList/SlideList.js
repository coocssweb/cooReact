var React = require("react");
var SlideList = require("../../components/SlideList/SlideList.js");
var $ =require("jquery");

var SlideListTest = React.createClass({
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            datas : []      //数据
        }
    },
    componentWillMount:function(){
        //初始化数据
        this.loadData("./data.js");
    },
    loadData:function(data_url){
        var $that = this;
        $.ajax({
            url : data_url,
            dataType : 'json',
            async : false,
            success : function(data) {
                $that.props.datas = data.datas;
                $that.setState({
                    isUpdate : !$that.state.isUpdate
                })
            }
        });
    },
    render : function(){
        return (
            <SlideList dataList = {this.props.datas} />
        )
    }
});


React.render(
<SlideListTest  />,
    document.getElementById('main-container')
);
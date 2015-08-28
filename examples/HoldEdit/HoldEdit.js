var React = require("react");
var HoldEdit = require("../../components/HoldEdit/HoldEdit.js");
var Confirm = require("../../components/Confirm/Confirm.js");
var $ =require("jquery");
//调用加载更多
var TestHoldEdit = React.createClass({
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    getDefaultProps : function(){
        return {
            datas : [],
            isShowConfirm : false
        }
    },
    componentWillMount:function(){
        //初始化数据
        this.props.dataUrl="./data.js";
        this.loadData();
    },
    loadData:function(){
        var data_url = this.props.dataUrl;
        var $that = this;
        $.ajax({
            url : data_url,
            dataType : 'json',
            async : false,
            success : function(data) {
                $that.props.datas = $that.props.datas.concat(data.datas);
                $that.setState({
                    isUpdate : !$that.state.isUpdate
                })
            }
        });
    },
    onHold:function(data){
        this.props.isShowConfirm = true;
        this.setState({
            isUpdate : !this.state.isUpdate
        });
    },
    onConfirm:function(){
        this.props.isShowConfirm = false;
        this.setState({
            isUpdate : !this.state.isUpdate
        });
    },
    render : function(){
        var $that = this;
        var holdItems = this.props.datas.map(function(itemValue,index){
                return (
                    <HoldEdit  HoldItem = {itemValue} onHold ={$that.onHold}/>
                )
        });

        return (
            <div>
                <ul className="list-slide-group list-slide-delete">
                {holdItems}
                </ul>
                <Confirm  message="确认删除吗？" onConfirm={this.onConfirm} isShow={this.props.isShowConfirm}  />
            </div>
            );
}
});

React.render(
<TestHoldEdit />,
    document.getElementById("main-container")
);
var React = require("react");

var Dropdown = React.createClass({
    propTypes : {
        listItems   : React.PropTypes.node,             //下拉列表
        isShow      : React.PropTypes.bool,             //是否显示
        isShowClose : React.PropTypes.bool,             //是否显示关闭
        callback    : React.PropTypes.func              //回调函数
    },
    getDefaultProps : function(){
        return {
            isShow : false,
            isSHowClose : false
        }
    },
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    closeDropdown : function(){
        this.props.isShow = false;
        this.setState({
            isUpdate : !this.state.isShow
        });
        if(this.props.callback){
            this.props.callback();
        }
    },
    render : function () {
        var elements = this.props.listItems.map(function (value, index) {
            return (
                <li>{value}</li>
            )
        });
        var closeElement = (
            <li><a href="javascript:;" className="close-dropdown" onClick={this.closeDropdown}></a></li>
        );
        return (
            <div className="dropdown-wraper">
                <ul className={"dropdown-menu "+(this.props.isShow ? "" : "hide")}>
                    {elements}
                    {closeElement}
                </ul>
            </div>
        );
    }
});

module.exports = Dropdown;
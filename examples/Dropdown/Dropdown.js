var React = require("react");
var Dropdown = require("Dropdown");

var DropdownTest = React.createClass({
    getDefaultProps: function(){
        return {
            isShowDropdown : false
        }
    },
    getInitialState : function(){
        return {
            isUpdate : false
        }
    },
    toggleMenus: function(){
        this.props.isShowDropdown = !this.props.isShowDropdown;
        this.setState({
            state : !this.state.isUpdate
        })
    },
    closeDropdownCallback : function(){
        this.props.isShowDropdown = false;
    },
    render : function(){
        var elements = [];
        elements.push(
            (<li><a href="javascript:;">我的主页</a></li>)
        )
        elements.push(
            (<li><a href="javascript:;">私信</a></li>)
        )
        elements.push(
            (<li><a href="javascript:;">设置</a></li>)
        )
        elements.push(
            (<li><a href="javascript:;">退出</a></li>)
        )

        return (
            <header>
                <a href="javascript:;" className = "header-back"><i className="fa fa-angle-left fa-2"></i></a>
                    <span className="header-title">用户登录</span>
                <div className="nav-setting">
                    <a href="javascript:;" className="btn-dropdown" onClick={this.toggleMenus}><i className="fa fa-bars"></i></a>
                    <Dropdown listItems={elements} isShow={this.props.isShowDropdown} isShowClose={true} callback={this.closeDropdownCallback} />
                </div>
            </header>

        )

    }


})

React.render(
    <DropdownTest />,document.body
)
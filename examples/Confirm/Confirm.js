var React = require("react");
var Confirm = require("Confirm");

var TestConfirm = React.createClass({
    getInitialState : function(){
        return {
            confirm: (
                <Confirm message="确认删除吗？" isShow={true} confirmCallback={this.confirmCallback} cancelCallback={this.cancelCallback} />
            )
        }
    },
    confirmCallback : function(){
        this.setState({
            confirm : null
        })
    },
    cancelCallback : function(){
        this.setState({
            confirm : null
        })
    },
    render : function(){
        return(
            this.state.confirm
        )
    }
})

React.render(
        <TestConfirm />,
        document.body
);
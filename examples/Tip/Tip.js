var React = require("react");
var Tip = require("Tip");

var TestTip = React.createClass({
    getInitialState : function(){
        return {
            tip : (
                <Tip message="内部发生错误"  isShowBtn={true} callback={this.tipClose}/>
            )
        }
    },
    tipClose:function(){
        this.setState({
            tip : null
        })
    },
    render : function(){
        return (
            this.state.tip
        )
    }
})

React.render(
    <TestTip />,
    document.body
);
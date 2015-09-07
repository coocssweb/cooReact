var React = require("react");
var SliderPager = React.createClass({
    render : function(){
        return (
            <span className={this.props.isActive ? "active" : ""}></span>
        )
    }
})

module.exports =  SliderPager;

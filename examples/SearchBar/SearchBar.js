var React = require("react");
var SearchBar = require("SearchBar");

var TestSearchBar = React.createClass({
    onSearch : function(){
    },
    render : function () {
        var hotkey = [];
        for(var i=0;i<10;i++){
            hotkey.push(
                (
                <a href="javascript:;">谢霆锋</a>
                )
            )
        }
        var hotkeys =(
            <div>
            {hotkey}
            </div>
        )
        return (
            <SearchBar hotkeyElement={hotkeys} relkeyUrl="./data.js" searchCallBack={this.onSearch} />
        )
    }
});

React.render(
    <TestSearchBar />,document.body
)
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
            <div className="search-wrapper">
                <SearchBar hotkeyElement={hotkeys} suggestUrl="./data.js" isSuggest ={true} btnName="玛莎拉蒂" searchCallBack={this.onSearch} />
            </div>
        )
    }
});

React.render(
    <TestSearchBar />,document.body
)
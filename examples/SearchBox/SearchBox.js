var React = require("react");
var SearchBox = require("SearchBox");

var SearchBoxTest = React.createClass({

    searchCallback : function(){

    },
    render : function(){
        return (
            <div className="search-wrapper">
                <SearchBox isSuggest={true} suggestUrl="./data.js" btnName="马上搜索" isFocus={true}  callback={this.searchCallback}/>
            </div>
        )
    }
})


React.render(
    <SearchBoxTest/>,
    document.body
)
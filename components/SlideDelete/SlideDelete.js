/**
 * »¬¶¯É¾³ý×é¼þ
 *
 */
var React = require("react");
var $ = require("jquery");
var SlideList = require("./SlideList.js");

var SlideDelete = React.createClass({
    render : function(){
        var datas=[];
        var data_url = this.props.dataUrl;
        $.ajax({
            url : data_url,
            dataType : 'json',
            async : false,
            success : function(data) {
                datas=data.datas;
            }
        });

        return (
            <SlideList slides = {datas}/>
        )

    }
});

module.exports = SlideDelete;
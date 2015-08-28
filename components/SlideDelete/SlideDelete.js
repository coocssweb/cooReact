/**
 * »¬¶¯É¾³ý×é¼þ
 *
 */
var React = require("react");
var $ = require("jquery");
var SlideList = require("./SlideList.js");

var SlideDelete = React.createClass({
    getDefaultProps : function(){
        return {
            datas:[]
        }
    },
    componentWillMount:function(){
        this.loadData(this.props.dataUrl);
    },
    loadData:function(dataurl){
        var data_url = dataurl;
        var $that = this;
        $.ajax({
            url : data_url,
            dataType : 'json',
            async : false,
            success : function(data) {
                $that.props.datas=data.datas;
            }
        });
    },
    render : function(){
        return (
            <SlideList slides = {this.props.datas}/>
        )

    }
});

module.exports = SlideDelete;
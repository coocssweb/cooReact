/**
 * Created by 王佳欣欣欣 on 2016/7/21.
 * Tab组件
 */
var React = require('react');
var PropTypes = React.PropTypes;
var Style = require('./Index.css');

var Index = React.createClass({
    propTypes:{
        tabs: PropTypes.arrayOf(
            PropTypes.string
        ).isRequired,                                           //tabs组
        activeIndex: PropTypes.number.isRequired,              //当前激活项
        onTab: PropTypes.func.isRequired                       //tab事件回调
    },
    onTab: function(index){
        if(index==this.props.activeIndex){
            return;
        }
        this.props.onTab(index);
    },
    render: function(){

        var slideStyle = {

        };

        slideStyle.width = 100/this.props.tabs.length + '%';

        slideStyle.left = this.props.activeIndex * 100/this.props.tabs.length + '%';

        return (
            <div className={Style['coo-tabs']}>
                {
                    this.props.tabs.map(function (item,index) {
                        return (
                            <a href="javascript:;"
                               className={Style['coo-tab-item']+' '+(index==this.props.activeIndex?Style['coo-tab-item-active']:'')}
                               onClick={this.onTab.bind(this,index)}
                            >{item}</a>
                        )
                    },this)
                }
                <div className={Style['coo-slide']} style={slideStyle}></div>
            </div>
        )
    }
});

module.exports = Index;
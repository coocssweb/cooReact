/**
 * Created by 王佳欣欣欣 on 2016/7/21.
 * Tab组件
 */
var React = require('react');
var PropTypes = React.PropTypes;
var Style = require('./Index.css');
var TabPanel = require('./TabPanel.js');

var Index = React.createClass({
    propTypes:{
        isTransition: PropTypes.bool,                            //是否开启动画
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

        var slideStyle = { };
        slideStyle.width = 100/this.props.children.length + '%';
        slideStyle.left = this.props.activeIndex * 100/this.props.children.length + '%';

        var bodyContentStyle = {};
        bodyContentStyle.transform = 'translate(-' + slideStyle.left + ',0%)';
        bodyContentStyle.width = 100 * this.props.children.length + '%';

        var panelStyle = {};
        panelStyle.width = 100/this.props.children.length + '%';

        return (
            <div>
                <div className={Style['coo-tabs']}>
                    {
                        this.props.children.map(function (item, index) {
                            return (
                                <a key={'tab-header-'+index} href="javascript:;"
                                   className={Style['coo-tab-item']+' '+(index==this.props.activeIndex?Style['coo-tab-item-active']:'')}
                                   onClick={this.onTab.bind(this,index)}
                                >{item.props.title}</a>
                            )
                        },this)
                    }
                    <div className={Style['coo-slide']+' '+(this.props.isTransition?Style['coo-transition']:'')} style={slideStyle}></div>
                </div>
                <div className={Style['coo-body']}>
                    <div className={Style['coo-body-content']+' '+(this.props.isTransition?Style['coo-transition']:'')} style={bodyContentStyle}>
                        {
                            this.props.children.map(function (item, index) {
                                return (
                                    <div className={Style['coo-tab-panel']} style={panelStyle}>
                                        {item.props.children}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
});

Index.TabPanel = TabPanel;
module.exports = Index;
/**
 * Created by 王佳欣欣欣 on 2016/7/22.
 * 手风琴组件
 */

var React = require('react');
var PropTypes = React.PropTypes;
var AccordionPanel = require('./AccordionPanel.js');
var Style = require('./Index.css');
var $ = require('jquery');
var Index = React.createClass({
    propTypes: {
        defaultIndex: PropTypes.number,           //当前展开项
        isOnly: PropTypes.bool.isRequired,        //是否值展开一项
        onToggle: PropTypes.func                 //切换展开回调
    },
    componentDidMount(){
        if(this.props.defaultIndex>0){
            this.state.opens.push(this.props.defaultIndex);
            this.forceUpdate();
        }

        var __this = this;
        $('.'+Style['coo-accordion-body-inner']).each(function(item,index){
            __this.state.heights.push(
                $(this).height()
            )
        });
    },
    getInitialState: function(){
        return {
            opens: [],
            heights: []
        }
    },
    onToggle: function(value){
        if(typeof this.props.onToggle === 'function'){
            this.props.onToggle(value);
        }
        if(this.props.isOnly){
            var opened = this.state.opens.pop();
            if(opened!==value){
                this.state.opens.push(value);
            }
        }else{
            var index = this.findIndex(value);
            if(index>=0){
                this.state.opens.slice(index, 1);
            }else{
                this.state.opens.push(value);
            }
        }

        this.forceUpdate();
    },
    findIndex: function(value){
        var index = -1;
        this.state.opens.map(function(item, itemIndex){
            if(item==value){
                index = itemIndex;
                return false;
            }
        });

        return index;
    },
    render: function(){
        return (
            <div className={Style['coo-accordion']}>
                {
                    this.props.children.map(function(item, index){
                        return (
                            <div  key={'accordion-'+index} className={Style['coo-accordion-item']}>
                                <a href="javascript:;"
                                   className={Style['coo-btn-accordion']}
                                   onClick={this.onToggle.bind(this,index)}>
                                    <i className={Style['coo-ico']+' '+(this.findIndex(index)>=0?Style['coo-ico-open']:'')} />
                                    {item.props.title}
                                </a>
                                <div className={Style['coo-accordion-body']} style={this.findIndex(index)>=0?{height: this.state.heights[index]+'px'}:null}>
                                    <div className={Style['coo-accordion-body-inner']}>
                                        {item.props.children}
                                    </div>
                                </div>
                            </div>
                        )
                    }, this)
                }
            </div>
        )
    }
});

Index.AccordionPanel = AccordionPanel;
module.exports = Index;
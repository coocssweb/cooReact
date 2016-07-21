/**
 * Created by 王佳欣欣欣 on 2016/7/21.
 * 抽屉组件
 */

var React = require('react');
var PropTypes = React.PropTypes;
var Styles = require('./Index.css');

var Index = React.createClass({
    propTypes:{
        direction: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
        isOpen: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired
    },
    onClose(e){
        this.props.onClose();
    },
    getStyle(){
        var style = Styles['coo-pull-box']+' ';
        style += Styles['coo-pull-box-'+this.props.direction];
        if(this.props.isOpen){
            style += ' ';
            style += Styles['coo-pull-box-'+this.props.direction+'-open'];
        }
        return style;
    },
    render:function(){

        var style = this.getStyle();

        return (
            <div>
                <div className={Styles['coo-mask']+' '+(this.props.isOpen?'':Styles['coo-hidden'])} onClick={this.onClose}>
                </div>
                <div className={style}>
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
});

module.exports = Index;
/**
 * Created by 王佳欣欣欣 on 2016/7/20.
 */

var React = require('react');
var ReactProps = React.PropTypes;
var Style = require('./Index.css');

var Index = React.createClass({
    propTypes: {
        style: ReactProps.object,               //自定义默认样式
        checkedStyle: ReactProps.object,        //自定义选择样式
        height: ReactProps.number,              //高度
        width: ReactProps.number,               //宽度
        checked: ReactProps.bool,               //是否选中
        onChange: ReactProps.func.isRequired    //改变事件
    },
    onChange(){
        this.props.onChange(!this.props.checked);
    },
    render(){

        //计算宽度高度
        var style = {};
        var buttonStyle = {};

        var width = this.props.width ? this.props.width : 53;
        var height =  this.props.height ? this.props.height : 32;

        if(this.props.checked && this.props.checkedStyle){
            style = this.props.checkedStyle;
        }else if(!this.props.checked && this.props.style){
            style = this.props.style;
        }


        style.width = width + 'px';


        style.height = height+ 'px';
        buttonStyle.height = (height - 4 )+'px';
        buttonStyle.width = buttonStyle.height;


        if(this.props.checked){
            buttonStyle.left = width - (height - 2)+'px';
        }


        return (
            <div className={Style['coo-toggle-box']+' '+(this.props.checked?Style['coo-toggle-box-on']:'')} style={style}
                 onClick={this.onChange}>
                <span className={Style['coo-toggle-button']} style={buttonStyle}></span>
            </div>
        )
    }
});

module.exports = Index;
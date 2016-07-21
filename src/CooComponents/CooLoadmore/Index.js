/**
 * Created by 王佳欣欣欣 on 2016/7/21.
 * 加载更多组件
 */

var React = require('react');
var PropTypes = React.PropTypes;
var Style = require('./Index.css');

var Index = React.createClass({
    propTypes:{
        isShow: PropTypes.bool.isRequired,          //是否显示
        isLoading: PropTypes.bool.isRequired,       //正在加载中？
        style: PropTypes.object,
        onLoad: PropTypes.func.isRequired           //加载回调
    },
    onLoad: function(e){
        if(this.props.isLoading){
            return;
        }
        this.props.onLoad();
    },
    render: function () {
        return (
            <a href="javascript:;"
               className={Style['coo-btn-loadmore']+' '+(this.props.isLoading?Style['coo-btn-loadmore-loading']:'')}
               onClick={this.onLoad}
               style={this.props.style}>
                <span  className={Style['coo-icon-label']}>
                    <i className={Style['coo-icon-loadmore']} />
                    {this.props.isLoading?'加载中':'加载更多'}
                </span>
                <span className={Style['coo-btn-loadmore-inner']} style={this.props.style} />
            </a>
        )
    }
});

module.exports = Index;
var React = require("react");
var Styles = require('./Pager.css');
var Pager= React.createClass({
        propTypes :{
            pageCount      : React.PropTypes.number,                              //总页数
            pageIndex      : React.PropTypes.number,                              //当前页
            onPageChange   : React.PropTypes.func                                 //分页回调
        },
        //上一页事件
        onPrevPage:function(){
            this.props.onPageChange(this.props.pageIndex - 1);
        },
        //下一页事件
        onNextPage :function(){
            this.props.onPageChange(this.props.pageIndex+1);
        },
        //渲染
        render:function(){
            //上一页
            var prev;
            if(this.props.pageIndex>1){
                prev = (
                    <a href='javascript:;' onClick={this.onPrevPage} className={Styles['prev']}><i className="fa fa-arrow-left"></i></a>
                 );
            }else{
                prev = (
                    <span className={Styles['prev']}><i className="fa fa-arrow-left"></i></span>
                );
            }

            //下一页
            var next;
            if(this.props.pageIndex==this.props.pageCount){
                next = (
                    <span className={Styles['next']}><i className="fa fa-arrow-right"></i></span>
            );
            }else{
                next = (
                    <a href='javascript:;' onClick={this.onNextPage} className={Styles['next']}><i className="fa fa-arrow-right"></i></a>
            );
        }
    //渲染
    return (
        <section>
            <div className={Styles['pager-outter']}>
                <div className={`${Styles["pager"]}${' clearfix'}`}>
                    {prev}
                    <span className={Styles['page']}>{this.props.pageIndex} / {this.props.pageCount}</span>
                    {next}
                </div>
            </div>
        </section>
    );
    }
});

module.exports=Pager;
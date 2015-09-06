//分页组件
/*
 {page}：分页信息，如{pageNow:1,pageCount:32}
 {this.onPageChange}: 换页事件，抛出来处理
 调用方法<Pager page={page} onPageChange={this.onPageChange} >
 */
var React = require("react");
var Pager= React.createClass({
        //上一页事件
        onPrevPage:function(){
            this.props.onPageChange(this.props.page.pageNow - 1);
        },
        //下一页事件
        onNextPage :function(){
            this.props.onPageChange(this.props.page.pageNow+1);
        },
        //渲染
        render:function(){
            //上一页
            var prev;
            if(this.props.page.pageNow>1){
                prev = (
                    <a href='javascript:;' onClick={this.onPrevPage} className='prev'><i className="fa fa-arrow-left"></i></a>
                 );
            }else{
                prev = (
                    <span className='prev'><i className="fa fa-arrow-left"></i></span>
                );
            }
            //下一页
            var next;
            if(this.props.page.pageNow==this.props.page.pageCount){
                next = (
                    <span className='next'><i className="fa fa-arrow-right"></i></span>
            );
            }else{
                next = (
                    <a href='javascript:;' onClick={this.onNextPage} className='next'><i className="fa fa-arrow-right"></i></a>
            );
        }
    //渲染
    return (
        <section>
            <div className="pager-outter">
                <div className="pager clearfix">
                    {prev}
                    <span className="page">{this.props.page.pageNow} / {this.props.page.pageCount}</span>
                    {next}
                </div>
            </div>
        </section>
    );
    }
});

module.exports=Pager;
/**
 *
 * 通用方法
 */
var $ = require("jquery");
var Base = {
    /**
     * 通用正则表达式
     */
    regStr :{
        telno       : /^1[3|4|5|8][0-9]\d{8}$/,                             //手机号码正则
        email       : /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,     //邮箱正则
        password    : /^[\w\W\d]{6,16}$/                                    //密码正则
    },
    /**
     * 获取浏览器前缀支持
     *
     */
    prefixStyle : function(){
        var prefixStyle="";
        var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
            transform,
            i = 0,
            l = vendors.length;

        for ( ; i < l; i++ ) {
            transform = vendors[i] + 'ransform';
            if ( transform in document.createElement('div').style) {
                prefixStyle = ("-"+vendors[i].substr(0, vendors[i].length-1)+"-").replace("--","");
            }
        }
        return prefixStyle;
    },
    /**
     *
     * 字符串
     * 正则
     */
    isTest : function (value,regStr){
        if (regStr.test(value)) {
            return true;
        }
        return false;
    },
    /**
     *
     * ajax请求路径
     * key
     */
    loadUrl : function(url,key,params){
        var result;
        $.ajax({
            url : url,
            data : params,
            dataType : 'json',
            async : false,
            success : function(data) {
                result = data[key];
            }
        });
        return result;
        
    },
    /**
     * 组织默认动作
     * @param e
     */
    pauseEvent : function (e) {
        e.cancelBubble = true;
        e.returnValue = false;
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
    }
}

module.exports = Base;
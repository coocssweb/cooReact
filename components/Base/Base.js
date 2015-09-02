/**
 *
 * 通用方法
 */
var Base = {
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
    }
}

module.exports = Base;
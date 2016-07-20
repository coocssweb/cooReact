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
    },

    getXmlHttpRequest : function () {
        var xmlHttpRequest = null;
        if (window.XMLHttpRequest) {
            //针对FirFox，Mozilla，Opera，Safari，IE7，IE8
            xmlHttpRequest = new XMLHttpRequest();
            if (xmlHttpRequest.overrideMimeType) {
                //针对Mozilla不同版本差别
                xmlHttpRequest.overrideMimeType("application/octet-stream");
            }
            //如果XMLHttpRequest没有sendAsBinary（如Chrome），则扩展sendAsBinary
            if (!window.XMLHttpRequest.prototype.sendAsBinary) {
                window.XMLHttpRequest.prototype.sendAsBinary = function (datastr) {
                    function byteValue(x) {
                        return x.charCodeAt(0) & 0xff;
                    }
                    var ords = Array.prototype.map.call(datastr, byteValue);
                    var ui8a = new Uint8Array(ords);
                    this.send(ui8a.buffer);
                };
            }

        } else if (window.ActiveXObject) {
            var activexml = ["MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
            for (var i = 0; i < activexml.length; i++) {
                try {
                    xmlHttpRequest = new ActiveXObject(activexml[i]);
                    break;
                } catch (e) {

                }
            }
        }

        return xmlHttpRequest;
    },
    selectImage : function(file,callback){
        var reader = new FileReader();
        reader.onloadend = function (e) {
            callback(e.target.result,file);
        }
        reader.readAsDataURL(file);
    },
    uploadImage : function(url,param,file,callback,params){
        var xhr = this.getXmlHttpRequest();

        var reader = new FileReader();
        reader.onloadend = function () {
            xhr.open("POST", url + "?"+param+"=" + file.name, true);
            xhr.overrideMimeType("application/octet-stream");
            xhr.sendAsBinary(reader.result);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var responseJson = $.parseJSON(xhr.responseText);

                        callback(responseJson,params);

                    }
                }
            }; //end of onreadystatechange
        } //end of onloadend

        reader.readAsBinaryString(file);
    }
}

module.exports = Base;
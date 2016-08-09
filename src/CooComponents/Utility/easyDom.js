/**
 * Created by wangjiaxin on 16/8/8.
 */
(function() {

    var root = this;
    var previousEasyDom = root.easyDom;

    var easyDom = function(obj) {
        if (obj instanceof easyDom) return obj;
        if (!(this instanceof easyDom)) return new easyDom(obj);
        this._wrapped = obj;
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = easyDom;
        }
        exports.easyDom = easyDom;
    } else {
        root.easyDom = easyDom;
    }


    //class selector
    function selectByClassName(selector){
        if(typeof document.querySelectorAll === 'function'){
            return document.querySelectorAll(selector);
        }else if(typeof document.getElementsByClassName === 'function'){
            return document.getElementsByClassName(selector);
        }
    }

    //id selector
    function selectById(selector){
        if(typeof document.querySelector === 'function'){
            return document.querySelector(selector);
        }else if(typeof document.getElementById === 'function'){
            return document.getElementById(selector);
        }
    }

    //tagName selector
    function selectByTyTagName(selector){
        if(typeof document.querySelectorAll === 'function'){
            return document.querySelectorAll(selector);
        }else if(typeof document.getElementsByTagName === 'function'){
            return document.getElementsByTagName(selector);
        }
    }

    //遍历父节点
    function parentNode(child, selector){
        //获取过滤选择器
        var compare;
        if(selector.indexOf('.') == 0){
            compare = "className";
            selector = selector.substring(1);
        }else if(selector.indexOf('#') == 0){
            compare = "id";
            selector = selector.substring(1);
        }else{
            compare = "targetName";
        }

        var node = child.parentNode;
        if(!selector){
            return node;
        }
        while(node !== null){
            if(node[compare] === selector){
                return node;
            }
            node = node.parentNode;
        }
        return null;
    }


    //虚构的dom
    var domObject = function(dom){
        this.dom = dom;
        this.length = this.dom.length;
    };


    //获取父节点
    domObject.prototype.parent = function(selector){
        var dom;
        if(this.dom && this.dom.length){
            dom = this.dom[0]
        }else{
            dom = this.dom;
        }
        return parentNode(dom, selector);
    }

    //设置dom内容
    domObject.prototype.html = function(value){
        if(!this.dom){
            return undefined;
        }

        var dom;
        if(this.length){
            dom = this.dom[0];
        }else{
            dom = this.dom;
        }

        if(value === undefined){
            return dom.innerHTML;
        }else{
            dom.innerHTML = value;
        }
    }


    //选择器
    easyDom.select = function(selector){
        //dom节点
        if(selector instanceof HTMLElement){
            return new domObject(selector);
        }
        //id选择器
        if(selector.indexOf('#') === 0){
            return new domObject(selectById(selector));
        }
        //class选择器 else 标签选择器
        var elements;
        if(selector.indexOf('.') == 0){
            elements = new domObject(selectByClassName(selector));
        }else{
            elements = new domObject(selectByTyTagName(selector));
        }
        return elements;
    }

}.call(this));
var utils = {
    listToArray : function (likeArray){
        try{
            return Array.prototype.slice.call(likeArray);
        }catch(e){
            var ary = [];
            for(var i=0; i<likeArray.length; i++){
                ary.push(likeArray[i]);
            }
            return ary;
        }
    },
    win: function (attr, val) {
        if (typeof val !== "undefined") {
            document.documentElement[attr] = val;
            document.body[attr] = val;
        }
        return document.documentElement[attr] || document.body[attr];
    },
    offset: function (ele) {
        var left = null;
        var top = null;
        var par = ele.offsetParent;
        left += ele.offsetLeft;
        top += ele.offsetTop;
        while (par) {
            if (window.navigator.userAgent.indexOf("MSIE 8") === -1) {
                left += par.clientLeft; //����ie8���ۼ�
                top += par.clientTop; //����ie8���ۼ�
            }
            left += par.offsetLeft;
            top += par.offsetTop;
            par = par.offsetParent; //ÿ���ۼ�֮����Ҫ�����������������par��offsetParent
        }
        return {left: left, top: top};
    },
    getCss: function (ele, attr) { //��ȡԪ�ص�ĳ����������������ʽ
        var val = null;
        if ('getComputedStyle' in window) {
            val = window.getComputedStyle(ele, null)[attr];
        } else { //
            if (attr == "opacity") {
                val = ele.currentStyle.filter;
                var filterReg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
                val = filterReg.test(val) ? filterReg.exec(val)[1] / 100 : 1;
            } else {
                val = ele.currentStyle[attr];
            }
        }
        var reg = /^-?\d+(\.\d+)?(px|rem|em|pt|deg)?$/;
        if (reg.test(val)) {
            val = parseFloat(val);
        }
        return val;
    },
    setCss: function (ele, attr, val) { //��Ԫ��������ʽ
        if (attr == "opacity") {
            ele.style.opacity = val;
            ele.stlye.filter = "alpha(opacity=" + val * 100 + ')';
            return;
        }
        if (attr == "float") {
            ele.style.cssFloat = val; //��׼
            ele.style.styleFloat = val; //ie�Ͱ汾
            return;
        }
        var reg = /^width|height|left|top|right|bottom|(margin|padding)(Left|Right|Top|Bottom)?$/;
        if (reg.test(attr)) {
            if (!isNaN(val)) {
                val += "px";
            }
        }
        ele.style[attr] = val;
    }
};
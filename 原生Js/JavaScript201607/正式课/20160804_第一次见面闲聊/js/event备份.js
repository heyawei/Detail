//->��Function.prototype����չ����ʵ��BIND�ļ��ݴ���
~function (pro) {
    pro.myBind = myBind;
    function myBind(context) {
        var _this = this;
        var outerArg = [].slice.call(arguments, 1);
        if ("bind" in Function.prototype) {
            outerArg.unshift(context);
            return _this.bind.apply(_this, outerArg);
        }
        return function () {
            var innerArg = [].slice.call(arguments);
            _this.apply(context, outerArg.concat(innerArg));
        }
    }
}(Function.prototype);

//var tempFn; ->ʹ��ȫ�ִ洢���һ��ִ��BIND�󶨵Ļ��ǰ�洦��Ķ����ǵ�,�Ƴ���ʱ�򲻹ܴ��ݵ���˭,���Ƴ��������һ���󶨵�

//->bind:DOM2�¼��� ����ǰԪ��[CUR ELE]��[TYPE]�¼����Ͱ�һ��[FN]����
function bind(curEle, type, fn) {
    if (window.addEventListener) {
        curEle.addEventListener(type, fn, false);
        return;
    }
    //->IE6~8
    //curEle.attachEvent("on" + type, fn.myBind(curEle));//->����������Ȼ�����THISָ������,�����൱�ڰ�һ����������,�Ƴ���ʱ��֪���Ƴ�˭

    //tempFn = fn.myBind(curEle);
    //curEle.attachEvent("on" + type, tempFn);


}

//->unbind:�Ƴ��¼���
function unbind(curEle, type, fn) {
    if (window.removeEventListener) {
        curEle.removeEventListener(type, fn, false);
        return;
    }
    //curEle.detachEvent("on" + type, tempFn);

}
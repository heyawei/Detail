/**
 * Created by zhufengpeixun on 2016/10/29.
 */
//{
//    url: '',ajax�����ַ
//    method: 'get',http����
//    headers: {},�Զ��������ײ�
//    async: true,�Ƿ�Ϊ�첽����
//        data: {},�����������͵Ĳ���
//    success: function () { �ɹ�ʱִ�еĻص�����
//    },
//    error: function () { ʧ��ʱִ�еĻص�����
//    },
//    cache: false �Ƿ񻺴�
//    dataType:'json' ��ʽ�����������ص���������
//}
(function () {
    /**
     * ajax�����߼�
     * @param {Object} options �û����ò���
     */
    function ajax(options) {
        // �жϲ����Ƿ�Ϊһ������
        if (!tools.isType(options, 'Object')) {
            throw new TypeError('�������ʹ���');
        }
        // ��ȡajax����
        var xhr = tools.getXHR();

        // ����http����Ĭ��ֵ
        options.method || (options.method = 'get');
        options.url || (options.url = '/');
        // ��Ϊundefined�ڵͰ汾ie����һ��bug�����Ա���д��bug
        // �������ﲻֱ���ж��Ƿ����undefined �����ж�void���ʽ
        options.async === void 0 || (options.async = true);

        var url = options.url;
        // ��data��ʽ��Ϊquerystring��ʽ
        var data = tools.param(options.data);

        // ��querystring��ʽ��dataƴ�ӵ�url����
        // 1��getϵ���� ��data��ʽ��Ϊquerystringƴ�ӵ�url��
        // �����getϵ ��data����Ϊ��
        if (/^get|delete|head$/ig.test(options.method) && data) {
            url = tools.appendToURL(url, data);
            data = null;
        }

        // 2�����cacheΪfalse ��Ҫ��url������������
        if (options.cache === false) {
            var ran = (Math.random()).toString(36).slice(2);
            url = tools.appendToURL(url, '_=' + ran);
        }


        // ִ��open����
        xhr.open(options.method, url, options.async);

        // �����Զ��������ײ�
        if (xhr.setRequestHeader && options.headers) {
            for (var header in options.headers) {
                if (!options.headers.hasOwnProperty(header)) {
                    continue;
                }
                xhr.setRequestHeader(header, options.headers[header]);
            }
        }

        // step 3 ���շ�������Ӧ
        xhr.onreadystatechange = function () {
            // �ж�http�����Ƿ����
            if (xhr.readyState === 4) {
                // ��ȡhttp��Ӧ����
                var response = xhr.responseText;
                // �ж�״̬���Ƿ�ɹ�
                if (/^2\d{2}$/.test(xhr.status) || xhr.status === 304) {
                    // �ж��Ƿ���Ҫ����Ӧ�����ʽ��json����
                    if (options.dataType === 'json') {
                        // ��Ϊresponse���ǺϷ���json�ַ����Ļ���ִ��JSONParse�ᱨ������������try catch��ס
                        try {
                            response = tools.JSONParse(response);
                        } catch (ex) {
                            options.error && options.error(ex);
                            return;
                        }
                    }
                    options.success && options.success(response);

                } else if (/^(4|5)\d{2}$/.test(xhr.status)) {
                    options.error && options.error(new Error('����������'));
                }
            }
        };

        // step 4 ��������
        xhr.send(data);
    }

    var tools = {
        /**
         * �ж��Ӿ�����
         * @param {*} data ��Ҫ�ж����͵�����
         * @param {string} type ���ݸ�ʽ
         * @return {boolean} ���ݸ�ʽ�Ƿ�ƥ��
         */
        isType: function (data, type) {
            return Object.prototype.toString.call(data) === '[object ' + type + ']';
        },
        /**
         * ���ö��Ժ�����ȡajax����
         */
        getXHR: (function () {
            var XHRList = [function () {
                return new XMLHttpRequest();
            }, function () {
                return new ActiveXObject('Microsoft.XMLHTTP');
            }, function () {
                return new ActiveXObject('Msxml2.XMLHTTP');
            }, function () {
                return new ActiveXObject('Msxml3.XMLHTTP');
            }];

            var xhr = null;
            while (xhr = XHRList.shift()) {
                try {
                    xhr();
                    return xhr;
                } catch (ex) {

                }
            }
            throw new ReferenceError('��ǰ�������֧��ajax����');
        })(),
        /**
         * �������ʽ��Ϊquerystring��ʽ
         * @see {a:1,b:2} => a=1&b=2
         * @param data
         */
        param: function (data) {
            // ��Ϊ�÷�����Ŀ�ľ��Ƿ���һ���ַ����������Ѿ���һ���ַ�����ֱ�ӷ���
            if (typeof data === 'string') {
                return data;
            }
            // �������Ϊnull����undefined ���ؿ��ַ���
            if (data === null || data === void 0) {
                return '';
            }
            // ���data��һ������
            if (tools.isType(data, 'Object')) {
                var arr = [];
                for (var key in data) {
                    if (!data.hasOwnProperty(key)) continue;
                    // ��Ϊurl�в��ܴ��ڷ�Ӣ���ַ�
                    arr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                }
                return arr.join('&');
            }

            // �����Ȳ���string Ҳ���Ƕ���null��undefined ��ֱ��toString����
            return data.toString();
        },
        /**
         * ��url����ƴ���ַ���
         */
        appendToURL: function (url, str) {
            // �ȵ���param��������ʽ����str
            str = this.param(str);
            if (!str) {
                return url;
            }
            // �ж�url���Ƿ�����ʺ�
            var hasQuery = /\?/.test(url);
            return url + (hasQuery ? '&' : '?') + str;
        },
        /**
         * ��json�ַ�����ʽ��Ϊjson����
         * @param {string} JSONString json�ַ���
         * @return {Object} ת�����json����
         */
        JSONParse: function (JSONString) {
            if (window.JSON) {
                return JSON.parse(JSONString)
            }
            return eval('(' + JSONString + ')');
        }
    };

    this.ajax = ajax;
}());
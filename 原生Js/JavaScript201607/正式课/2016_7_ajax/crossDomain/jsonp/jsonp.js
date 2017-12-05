/**
 * Created by ���� on 2016/8/21.
 */
(function () {
    /**
     * main function
     * @param {string} url jsonp�ӿڵ�ַ
     * @param {*} data ����jsonpʱ��ҪЯ���Ĳ���
     * @param {string} jsonpcallback server�ṩ�������������
     * @param {Function} callback ����ɹ��Ļص�����
     */
    function jsonp(url, data, jsonpcallback, callback) {
        // 1 ���ɺ�����
        var cbName = 'cb' + counter++;
        // ����ȫ�ֺ�����
        var globalMethodName = 'window.jsonp.' + cbName;
        // 2 ����ȫ�ֺ�����
        window.jsonp[cbName] = function (data) {
            // dataΪ���������ص�����
            try {
                callback(data);
            } finally {
                // ����callback��û�б���,��ִ��complete����
                complete();
            }
        };
        // �Ѳ���ƴ�ӵ�url��
        url = tools.padStringToURL(url, data);
        // ��josnpcallback��ȫ�ֺ�����ƴ�ӵ�url��
        url = tools.padStringToURL(url, jsonpcallback + '=' + globalMethodName);

        // ��̬����script��ǩ
        var script = document.createElement('script');
        // ��script��ǩ����Ϊ�첽����
        script.async = 'async';
        // ��url��ֵ��src��
        script.src = url;
        // ��ֹ����jsonp�ӿ�ʧ��
        script.onerror = function () {
            complete();
        };

        // ���script��ǩ��ȫ�ֺ���
        function complete() {
            script.parentNode.removeChild(script);
            delete window.jsonp[cbName];
        }

        // ��Ϊ���htmlû�м������ ��ôdocument����null
        // ����ƴ��script��ǩ֮ǰ���ж�html�Ƿ�������
        function appendScript() {
            document.body.appendChild(script);
        }

        // ����html�Ƿ�������
        if (document.readyState === 'complete') {
            appendScript();
        } else {
            if (window.addEventListener) {
                window.addEventListener('load', function () {
                    appendScript();
                }, false)
            } else {
                window.attachEvent('onload', function () {
                    appendScript();
                });
            }
        }
    }

    // jsonp��¶ȫ�ֻ�����
    this.jsonp = jsonp;
    // ������,������֤��������
    var counter = 1;

    var tools = {
        /**
         * ��data��ʽ���������
         * @param {*} data ����ʽ��������
         */
        encodeDataToURIString: function (data) {
            if (typeof data === 'string') {
                return data;
            }
            if (data === undefined || data === null) {
                return '';
            }
            if (Object.prototype.toString.call(data) === '[object Object]') {
                var arr = [];
                for (var n in data) {
                    if (!data.hasOwnProperty(n)) continue;
                    arr.push(encodeURIComponent(n) + '=' + encodeURIComponent(data[n]));
                }
                return arr.join('&');
            }
            return data.toString();
        },
        /**
         * ��url��ƴ�Ӳ���
         * @param {string} url �����ַ
         * @param {string} padString �ȴ�ƴ�ӵ�����
         */
        padStringToURL: function (url, padString) {
            padString = tools.encodeDataToURIString(padString);
            if (!padString) {
                return url;
            }
            var hasWenhao = /\?/.test(url);
            // ��Ϊ��Ԫ����������ȼ����,�����������Ű�����,����Ԫ�������ִ��.
            return url + (hasWenhao ? '&' : '?') + padString
        }
    }
})();
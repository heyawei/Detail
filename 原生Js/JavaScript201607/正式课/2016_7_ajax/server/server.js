var PORT = 3000;

// ����httpģ��,ʵ��http������
var http = require('http');
// ����urlģ��,��������ʼ�еڶ����� ��ʽ��Ϊ����
var url = require('url');
// �ļ�����, fileStream����д
var fs = require('fs');
var mine = require('./mime').types;
// ����·��
var path = require('path');

// ����http������,�ص��������������� ����http���������Ӧ
var server = http.createServer(function (request, response) {
    // �������url��ʽ��Ϊ����
    var urlInfo = url.parse(request.url);
    // ��ȡ����·��
    var pathname = urlInfo.pathname;
    var realPath = path.join("../assets", pathname);
    // ��ȡ��׺��
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    // ��ȡ�ļ�,�ж��ļ��Ƿ����
    fs.exists(realPath, function (exists) {
        if (!exists) {
            // ��һ������д��http״̬��
            // �ڶ������� http��Ӧ�ײ�
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            // д��http��Ӧ����
            response.write("This request URL " + pathname + " was not found on this server.");
            // ����http��Ӧ
            response.end();
        } else {
            // ������� ���ȡ���ļ�
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    if(/login\.html/.test(realPath)){
                        response.writeHead(302, {
                            'Location':'/getXHR.html'
                        });
                    }else{
                        response.writeHead(200, {
                            'Content-Type': contentType
                        });
                    }

                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");
"use strict";
exports.__esModule = true;
var http = require("http");
var fs = require("fs");
var MyApp_1 = require("./MyApp");
var app = new MyApp_1.MyApp();
app.exec();
var filePath = "";
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        // httpサーバーを設定する
        var server = http.createServer(function (request, response) {
            return _this.requestHandler(request, response);
        });
        // サーバーを起動してリクエストを待ち受け状態にする
        server.listen('5000');
    }
    /*
    * サーバーにリクエストがあった時に実行される関数
    */
    Main.prototype.requestHandler = function (request, response) {
        if (request.url == '/') {
            filePath = './index.html';
        }
        else {
            filePath = './' + request.url;
        }
        console.log(request.url);
        fs.readFile(filePath, function (err, data) {
            response.end(data);
        });
    };
    return Main;
}());
var main = new Main();

"use strict";
exports.__esModule = true;
var MyApp = /** @class */ (function () {
    function MyApp() {
        console.log('MyApp constructor');
        console.log("Node version : " + process.version);
        this.name = 'MyApp';
    }
    MyApp.prototype.exec = function () {
        console.log("Hello World! My name is " + this.name + ".");
    };
    return MyApp;
}());
exports.MyApp = MyApp;

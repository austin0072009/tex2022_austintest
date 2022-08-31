"use strict";
cc._RF.push(module, 'b4bebX7DppEPJc7qy0ZLbmH', 'Http');
// Script/modules/@mogafa/utils/lib/Http.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Http = /** @class */ (function (_super) {
    __extends(Http, _super);
    function Http() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._config = {};
        return _this;
    }
    /**
     * get请求
     * @param {string} url
     */
    Http.prototype.get = function (url, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var xhr = cc.loader.getXMLHttpRequest();
        return new Promise(function (resolve, reject) {
            xhr.onreadystatechange = function () {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    var response = xhr.responseText;
                    resolve(JSON.parse(response));
                }
            };
            xhr.onerror = function (err) {
                reject(err);
            };
            xhr.open("GET", url, true);
            if (config && Object.keys(config).length > 0) {
                _this._config = Object.assign(_this._config, config);
            }
            _this.setXHRConfig(xhr);
            xhr.ontimeout = function (e) {
                reject("connect timeout\uFF0Cerror message\uFF1A" + JSON.stringify(e));
            };
            xhr.send();
        });
    };
    /**
     * post请求
     * @param {string} url
     * @param {object} params
     */
    Http.prototype.post = function (url, params, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        return new Promise(function (resolve, reject) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = xhr.responseText;
                    resolve(JSON.parse(response));
                }
            };
            xhr.onerror = function (err) {
                reject(err);
            };
            xhr.open("POST", url, true);
            if (config && Object.keys(config).length > 0) {
                _this._config = Object.assign(_this._config, config);
            }
            _this.setXHRConfig(xhr);
            xhr.ontimeout = function (e) {
                reject("connect timeout\uFF0Cerror message\uFF1A" + JSON.stringify(e));
            };
            xhr.send(JSON.stringify(params));
        });
    };
    Http.prototype.setXHRConfig = function (xhr) {
        // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        // xhr.setRequestHeader("Access-Control-Allow-Headers", "device-uuid,Authorization");
        // xhr.setRequestHeader("Content-Type", "application/json");
        if (this._config.headers) {
            for (var i in this._config.headers) {
                xhr.setRequestHeader(i, this._config.headers[i]);
                console.error(this._config.headers[i] + " ..........setXHRConfig");
            }
        }
        xhr.timeout = 8000; // 8 seconds for timeout 
    };
    Http.prototype.setInterceptorParams = function (params) {
        this._config = params;
    };
    return Http;
}(cc.Component));
exports.default = Http;

cc._RF.pop();
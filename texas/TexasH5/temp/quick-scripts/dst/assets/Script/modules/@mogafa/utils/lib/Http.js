
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/utils/lib/Http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFx1dGlsc1xcbGliXFxIdHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBOEVDO1FBN0VXLGFBQU8sR0FBbUIsRUFBRSxDQUFDOztJQTZFekMsQ0FBQztJQTVFRzs7O09BR0c7SUFDSSxrQkFBRyxHQUFWLFVBQVcsR0FBVyxFQUFFLE1BQTJCO1FBQW5ELGlCQXNCQztRQXRCdUIsdUJBQUEsRUFBQSxXQUEyQjtRQUMvQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDeEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDckIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtvQkFDNUMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztvQkFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDakM7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRztnQkFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzQixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLDZDQUFpQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBRyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDO1lBQ0YsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG1CQUFJLEdBQVgsVUFBWSxHQUFXLEVBQUUsTUFBVyxFQUFFLE1BQTJCO1FBQWpFLGlCQXdCQztRQXhCcUMsdUJBQUEsRUFBQSxXQUEyQjtRQUM3RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDckIsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtvQkFDNUMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztvQkFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDakM7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRztnQkFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV2QixHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLDZDQUFpQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBRyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDO1lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sMkJBQVksR0FBcEIsVUFBcUIsR0FBbUI7UUFDcEMsNERBQTREO1FBQzVELGtGQUFrRjtRQUNsRixxRkFBcUY7UUFDckYsNERBQTREO1FBQzVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDdEIsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDaEMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLHlCQUF5QixDQUFDLENBQUM7YUFDdEU7U0FDSjtRQUNELEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQVEseUJBQXlCO0lBQ3hELENBQUM7SUFFTSxtQ0FBb0IsR0FBM0IsVUFBNEIsTUFBc0I7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQTlFQSxBQThFQyxDQTlFaUMsRUFBRSxDQUFDLFNBQVMsR0E4RTdDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbnRlcmZhY2UgSVJlcXVlc3RDb25maWcge1xuICAgIGhlYWRlcnM/OiBhbnk7XG59XG5pbnRlcmZhY2UgSHR0cFJlc3BvbnNlIHtcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgZGF0YTogYW55O1xuICAgIGlzU3VjY2Vzc2Z1bDogYm9vbGVhbjtcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9jb25maWc6IElSZXF1ZXN0Q29uZmlnID0ge307XG4gICAgLyoqXG4gICAgICogZ2V06K+35rGCXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQodXJsOiBzdHJpbmcsIGNvbmZpZzogSVJlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8SHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCAmJiB4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChjb25maWcgJiYgT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih0aGlzLl9jb25maWcsIGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFhIUkNvbmZpZyh4aHIpO1xuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGBjb25uZWN0IHRpbWVvdXTvvIxlcnJvciBtZXNzYWdl77yaJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwb3N06K+35rGCXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgcG9zdCh1cmw6IHN0cmluZywgcGFyYW1zOiBhbnksIGNvbmZpZzogSVJlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8SHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAoY29uZmlnICYmIE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24odGhpcy5fY29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRYSFJDb25maWcoeGhyKTtcblxuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGBjb25uZWN0IHRpbWVvdXTvvIxlcnJvciBtZXNzYWdl77yaJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRYSFJDb25maWcoeGhyOiBYTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiLCBcIkdFVCwgUE9TVCwgUFVULCBERUxFVEVcIik7XG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLCBcImRldmljZS11dWlkLEF1dGhvcml6YXRpb25cIik7XG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5oZWFkZXJzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuX2NvbmZpZy5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5fY29uZmlnLmhlYWRlcnNbaV0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5fY29uZmlnLmhlYWRlcnNbaV0gKyBcIiAuLi4uLi4uLi4uc2V0WEhSQ29uZmlnXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHhoci50aW1lb3V0ID0gODAwMDsgICAgICAgIC8vIDggc2Vjb25kcyBmb3IgdGltZW91dCBcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SW50ZXJjZXB0b3JQYXJhbXMocGFyYW1zOiBJUmVxdWVzdENvbmZpZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb25maWcgPSBwYXJhbXM7XG4gICAgfVxufVxuIl19
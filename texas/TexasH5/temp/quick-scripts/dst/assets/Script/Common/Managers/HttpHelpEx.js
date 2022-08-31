
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/Managers/HttpHelpEx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28bbewMnGFFs4XAGnWUFRcN', 'HttpHelpEx');
// Script/Common/Managers/HttpHelpEx.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig_1 = require("../../config/AppConfig");
var HttpApi_1 = require("../../modules/@slotsmaster/ui-common/lib/HttpApi");
var CommonCtr_1 = require("../../BaseFrame/CommonCtr");
var HttpHelpEx = /** @class */ (function () {
    function HttpHelpEx() {
        this._config = {};
        this.appid = "1000000008";
        this.SecurityKey = "e0a953c3ee6040eaa9fae2b667060e09";
    }
    Object.defineProperty(HttpHelpEx, "instance", {
        get: function () {
            if (this.httpHelp == null) {
                this.httpHelp = new HttpHelpEx();
            }
            return this.httpHelp;
        },
        enumerable: false,
        configurable: true
    });
    /**
       * get请求
       * @param {string} url
       */
    HttpHelpEx.prototype.get = function (url, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var xhr = cc.loader.getXMLHttpRequest();
        return new Promise(function (resolve, reject) {
            xhr.onreadystatechange = function () {
                if (xhr.status === 200 && xhr.readyState === 4) {
                    var response = xhr.responseText;
                    resolve(JSON.parse(response));
                }
                else {
                }
            };
            xhr.onerror = function (err) {
                reject(err);
            };
            xhr.open("GET", url, true);
            console.log("url === ", url);
            var nowTime = Math.floor(new Date().getTime() / 1000);
            var dataString = _this.appid + nowTime + _this.SecurityKey;
            console.log("dataString === ", dataString);
            var encryptedStr = md5.hex_md5(dataString);
            console.log("encryptedStr ==== ", encryptedStr);
            xhr.setRequestHeader("timestamp", "" + nowTime);
            xhr.setRequestHeader("appid", _this.appid);
            xhr.setRequestHeader("sign", encryptedStr);
            if (config && Object.keys(config).length > 0) {
                _this._config = Object.assign(_this._config, config);
            }
            _this.setXHRConfig(xhr);
            xhr.ontimeout = function (e) {
                fgui.GRoot.inst.closeModalWait();
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
    HttpHelpEx.prototype.post = function (url, params, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        // let secretkey = "123456", datakey = "user";
        // let dataString = `abcd1234@@&90`;//要加密的字符串
        // let encryptedStr = encrypt(dataString, secretkey, 256);
        // console.log("加密后:", JSON.stringify(encryptedStr));
        // let cipherText = encryptedStr;//要解密的文本
        // let dataString2 = decrypt(cipherText, secretkey, 256);//得到解密之后的文本
        // console.log("解密后:", JSON.stringify(dataString2));
        return new Promise(function (resolve, reject) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log("error == ", xhr.status);
                    console.log("error == ", xhr.responseText);
                    var response = xhr.responseText;
                    resolve(JSON.parse(response));
                }
                else {
                }
            };
            xhr.onerror = function (err) {
                console.log("error == ", err);
                reject(err);
            };
            xhr.ontimeout = function (e) {
                reject("connect timeout\uFF0Cerror message\uFF1A" + JSON.stringify(e));
            };
            xhr.open("POST", url, true);
            xhr.timeout = 8000;
            console.log("url == ", url);
            console.log("params == ", JSON.stringify(params));
            var nowTime = Math.floor(new Date().getTime() / 1000);
            var dataString = _this.appid + nowTime + _this.SecurityKey;
            console.log("dataString === ", dataString);
            var encryptedStr = md5.hex_md5(dataString);
            console.log("encryptedStr ==== ", encryptedStr);
            xhr.setRequestHeader("timestamp", "" + nowTime);
            xhr.setRequestHeader("appid", _this.appid);
            xhr.setRequestHeader("sign", encryptedStr);
            if (config && Object.keys(config).length > 0) {
                console.log("aaaaaaaaaaaaaaaa");
                _this._config = Object.assign(_this._config, config);
                _this.setXHRConfig(xhr);
                xhr.send(JSON.stringify(params));
            }
            else {
                console.log("bbbbbbbbbbbbbbb");
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var paramsStr = "";
                for (var item in params) {
                    paramsStr += item + "=" + params[item] + "&";
                }
                console.log("paramsStr +=== ", encodeURI(paramsStr));
                xhr.send(encodeURI(paramsStr));
            }
        });
    };
    HttpHelpEx.prototype.setXHRConfig = function (xhr) {
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        // xhr.setRequestHeader("Access-Control-Allow-Headers", "device-uuid,Authorization");
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        // if (this._config.headers) {
        //     for (let i in this._config.headers) {
        //         xhr.setRequestHeader(i, this._config.headers[i]);
        //     }
        // }
        xhr.timeout = 8000; // 8 seconds for timeout
    };
    HttpHelpEx.prototype.setInterceptorParams = function (params) {
        this._config = params;
    };
    HttpHelpEx.prototype.RegisterAccount = function (pid, yzm, yqm, password, callback) {
        var checkurl = "";
        console.log(checkurl + "...............");
    };
    //拉取serverlist
    HttpHelpEx.prototype.GetServerList = function (callback, isCircle) {
        var _this = this;
        if (isCircle === void 0) { isCircle = true; }
        var defaultServeListIdx = localStorage.getItem("GameDefaultServerList");
        HttpHelpEx.defaultServerListIndex = defaultServeListIdx == null ? 0 : Number(defaultServeListIdx);
        var list = this.GetHomeUrl();
        if (HttpHelpEx.curServerListIndex >= list.length) {
            HttpHelpEx.defaultServerListIndex = 0;
        }
        // 0注册1找回密码2交易密码3重置密码
        var url = list[HttpHelpEx.defaultServerListIndex] + "?st=" + Date.now(); //强制拉最新的
        //Debug.LogError("all serverlist:" + AppConfigList.Current.home_url);
        //Debug.LogError("default serverlist url:" + url); 
        if (isCircle)
            CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(true);
        HttpApi_1.default.http
            .get(url, {})
            .then(function (res) {
            callback(res.data);
            //Debug.LogError("www.text : " + www.text);
            CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(false);
        }, function (err) {
            cc.error(JSON.stringify(err));
            CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(false);
            _this.LoadServerList(callback, isCircle);
            //CommonCtr.instance.ShowLoad_Circle(false);
            //CommonCtr.instance.ShowTip(LanguageConfig.getLanguageById(1503));//服务器连接失败，请检测网络并重启客户端。
        })
            .catch(function (err) {
            CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(false);
            _this.LoadServerList(callback, isCircle);
            //CommonCtr.instance.ShowLoad_Circle(false);
            //CommonCtr.instance.ShowTip(LanguageConfig.getLanguageById(1503));//服务器连接失败，请检测网络并重启客户端。
        });
    };
    //先从本地缓存的serverlist读取homeurl，没有缓存就去config里面的homeurl
    HttpHelpEx.prototype.GetHomeUrl = function () {
        // fs.readFile(fPath, "utf8", function (err, data){
        //   if (err) {
        //   }
        //   else
        //   {
        //     var key = CryptoJS.enc.Utf8.parse('fucktheworld');
        //     var iv = CryptoJS.enc.Utf8.parse('fucktheworld');
        //     let decrypted = CryptoJS.AES.decrypt(data, key, {
        //       keySize: 128 / 8,
        //       iv: iv,
        //       mode: CryptoJS.mode.CBC,
        //       padding: CryptoJS.pad.Pkcs7
        //     });
        //     let _dataLocal:ServerListPod = JSON.parse(decrypted);
        //     if (_dataLocal != null && _dataLocal.home_url != null && _dataLocal.home_url != ""){
        //       return _dataLocal.home_url.split('|');
        //     }
        //     else
        //     {
        //       return homeUrl.split('|');
        //     }
        //     console.log(data);
        //     console.log("--------", fPath);
        //   }
        // });
        return AppConfig_1.AppConfig.homeUrl.split('|');
    };
    HttpHelpEx.prototype.LoadServerList = function (callback, isCircle) {
        var _this = this;
        if (isCircle === void 0) { isCircle = true; }
        if (HttpHelpEx.curServerListIndex == HttpHelpEx.defaultServerListIndex) {
            HttpHelpEx.curServerListIndex++;
            this.LoadServerList(callback, isCircle);
            return;
        }
        var list = AppConfig_1.AppConfig.homeUrl.split('|');
        if (HttpHelpEx.curServerListIndex >= list.length) {
            CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(false);
            callback(""); //拉取失败直接读取本地serverlist配置
            //CommonCtr.instance.ShowTip(LanguageConfig.getLanguageById(1503));//服务器连接失败，请检测网络并重启客户端。
            return;
        }
        var url = list[HttpHelpEx.curServerListIndex] + "?st=" + Date.now(); //强制拉最新的;
        if (isCircle)
            CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(true);
        HttpApi_1.default.http
            .get(url, {})
            .then(function (res) {
            callback(res.data);
            //Debug.LogError("www.text : " + www.text);
            CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(false);
            localStorage.setItem("GameDefaultServerList", HttpHelpEx.curServerListIndex.toString());
            //Debug.LogError("Set default ServerList index:" + curServerListIndex);
        }, function (err) {
            cc.error(JSON.stringify(err));
            HttpHelpEx.curServerListIndex++;
            if (HttpHelpEx.curServerListIndex >= list.length) {
                //PlayerPrefs.SetInt("GameDefaultServerList", 0);
                CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(false);
                callback(""); //拉取失败直接读取本地serverlist配置
                //CommonCtr.instance.ShowTip(LanguageConfig.getLanguageById(1503));//服务器连接失败，请检测网络并重启客户端。
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(false);
                _this.LoadServerList(callback, isCircle);
            }
        })
            .catch(function (err) {
            HttpHelpEx.curServerListIndex++;
            if (HttpHelpEx.curServerListIndex >= list.length) {
                //PlayerPrefs.SetInt("GameDefaultServerList", 0);
                CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(false);
                callback(""); //拉取失败直接读取本地serverlist配置
                //CommonCtr.instance.ShowTip(LanguageConfig.getLanguageById(1503));//服务器连接失败，请检测网络并重启客户端。
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowLoad_Circle(false);
                _this.LoadServerList(callback, isCircle);
            }
        });
    };
    HttpHelpEx.prototype.URI = function (fileName) {
        return null;
    };
    HttpHelpEx.curServerListIndex = 0;
    HttpHelpEx.defaultServerListIndex = 0;
    return HttpHelpEx;
}());
exports.default = HttpHelpEx;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXE1hbmFnZXJzXFxIdHRwSGVscEV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25ELDRFQUF1RTtBQUN2RSx1REFBc0Q7QUFZdEQ7SUFBQTtRQVFZLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBQzdCLFVBQUssR0FBVyxZQUFZLENBQUM7UUFDN0IsZ0JBQVcsR0FBVyxrQ0FBa0MsQ0FBQztJQTRQckUsQ0FBQztJQXBRRyxzQkFBa0Isc0JBQVE7YUFBMUI7WUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7YUFDcEM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFJRDs7O1NBR0s7SUFDRSx3QkFBRyxHQUFWLFVBQVcsR0FBVyxFQUFFLE1BQTJCO1FBQW5ELGlCQWlDQztRQWpDdUIsdUJBQUEsRUFBQSxXQUEyQjtRQUMvQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDeEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDckIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtvQkFDNUMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztvQkFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDakM7cUJBQU07aUJBQ047WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsR0FBRztnQkFDdkIsTUFBTSxDQUFDLEdB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QUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNNLHdCQUFHLEdBQVYsVUFBVyxRQUFnQjtRQUV2QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBOUhhLDZCQUFrQixHQUFXLENBQUMsQ0FBQztJQUMvQixpQ0FBc0IsR0FBVyxDQUFDLENBQUM7SUE4SHJELGlCQUFDO0NBdFFELEFBc1FDLElBQUE7a0JBdFFvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9BcHBDb25maWdcIjtcbmltcG9ydCBIdHRwQXBpIGZyb20gXCIuLi8uLi9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0h0dHBBcGlcIjtcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XG5cbmludGVyZmFjZSBJUmVxdWVzdENvbmZpZyB7XG4gICAgaGVhZGVycz86IGFueTtcbn1cbmludGVyZmFjZSBIdHRwUmVzcG9uc2Uge1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG4gICAgaXNTdWNjZXNzZnVsOiBib29sZWFuO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBjdXJsOiBzdHJpbmc7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwSGVscEV4IHtcbiAgICBwcml2YXRlIHN0YXRpYyBodHRwSGVscDogSHR0cEhlbHBFeDtcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBIdHRwSGVscEV4IHtcbiAgICAgICAgaWYgKHRoaXMuaHR0cEhlbHAgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5odHRwSGVscCA9IG5ldyBIdHRwSGVscEV4KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cEhlbHA7XG4gICAgfVxuICAgIHByaXZhdGUgX2NvbmZpZzogSVJlcXVlc3RDb25maWcgPSB7fTtcbiAgICBwcml2YXRlIGFwcGlkOiBzdHJpbmcgPSBcIjEwMDAwMDAwMDhcIjtcbiAgICBwcml2YXRlIFNlY3VyaXR5S2V5OiBzdHJpbmcgPSBcImUwYTk1M2MzZWU2MDQwZWFhOWZhZTJiNjY3MDYwZTA5XCI7XG4gICAgLyoqXG4gICAgICAgKiBnZXTor7fmsYJcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgICAqL1xuICAgIHB1YmxpYyBnZXQodXJsOiBzdHJpbmcsIGNvbmZpZzogSVJlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8SHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCAmJiB4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cmwgPT09IFwiLCB1cmwpO1xuICAgICAgICAgICAgbGV0IG5vd1RpbWUgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgICAgICAgICBsZXQgZGF0YVN0cmluZyA9IHRoaXMuYXBwaWQgKyBub3dUaW1lICsgdGhpcy5TZWN1cml0eUtleTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVN0cmluZyA9PT0gXCIsIGRhdGFTdHJpbmcpO1xuICAgICAgICAgICAgbGV0IGVuY3J5cHRlZFN0ciA9IG1kNS5oZXhfbWQ1KGRhdGFTdHJpbmcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbmNyeXB0ZWRTdHIgPT09PSBcIiwgZW5jcnlwdGVkU3RyKTtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwidGltZXN0YW1wXCIsIFwiXCIgKyBub3dUaW1lKTtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiYXBwaWRcIiwgdGhpcy5hcHBpZCk7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcInNpZ25cIiwgZW5jcnlwdGVkU3RyKTtcbiAgICAgICAgICAgIGlmIChjb25maWcgJiYgT2JqZWN0LmtleXMoY29uZmlnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih0aGlzLl9jb25maWcsIGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFhIUkNvbmZpZyh4aHIpO1xuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmNsb3NlTW9kYWxXYWl0KCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGBjb25uZWN0IHRpbWVvdXTvvIxlcnJvciBtZXNzYWdl77yaJHtKU09OLnN0cmluZ2lmeShlKX1gKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICAgKiBwb3N06K+35rGCXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zXG4gICAgICAgKi9cbiAgICBwdWJsaWMgcG9zdCh1cmw6IHN0cmluZywgcGFyYW1zOiBhbnksIGNvbmZpZzogSVJlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8SHR0cFJlc3BvbnNlPiB7XG4gICAgICAgIC8vIGxldCBzZWNyZXRrZXkgPSBcIjEyMzQ1NlwiLCBkYXRha2V5ID0gXCJ1c2VyXCI7XG4gICAgICAgIC8vIGxldCBkYXRhU3RyaW5nID0gYGFiY2QxMjM0QEAmOTBgOy8v6KaB5Yqg5a+G55qE5a2X56ym5LiyXG4gICAgICAgIC8vIGxldCBlbmNyeXB0ZWRTdHIgPSBlbmNyeXB0KGRhdGFTdHJpbmcsIHNlY3JldGtleSwgMjU2KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLliqDlr4blkI46XCIsIEpTT04uc3RyaW5naWZ5KGVuY3J5cHRlZFN0cikpO1xuICAgICAgICAvLyBsZXQgY2lwaGVyVGV4dCA9IGVuY3J5cHRlZFN0cjsvL+imgeino+WvhueahOaWh+acrFxuICAgICAgICAvLyBsZXQgZGF0YVN0cmluZzIgPSBkZWNyeXB0KGNpcGhlclRleHQsIHNlY3JldGtleSwgMjU2KTsvL+W+l+WIsOino+WvhuS5i+WQjueahOaWh+acrFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuino+WvhuWQjjpcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YVN0cmluZzIpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHZhciB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yID09IFwiLCB4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciA9PSBcIiwgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgPT0gXCIsIGVycik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoYGNvbm5lY3QgdGltZW91dO+8jGVycm9yIG1lc3NhZ2XvvJoke0pTT04uc3RyaW5naWZ5KGUpfWApO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICB4aHIudGltZW91dCA9IDgwMDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVybCA9PSBcIiwgdXJsKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFyYW1zID09IFwiLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgICAgICAgIGxldCBub3dUaW1lID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xuICAgICAgICAgICAgbGV0IGRhdGFTdHJpbmcgPSB0aGlzLmFwcGlkICsgbm93VGltZSArIHRoaXMuU2VjdXJpdHlLZXk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFTdHJpbmcgPT09IFwiLCBkYXRhU3RyaW5nKTtcbiAgICAgICAgICAgIGxldCBlbmNyeXB0ZWRTdHIgPSBtZDUuaGV4X21kNShkYXRhU3RyaW5nKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW5jcnlwdGVkU3RyID09PT0gXCIsIGVuY3J5cHRlZFN0cik7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcInRpbWVzdGFtcFwiLCBcIlwiICsgbm93VGltZSk7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcImFwcGlkXCIsIHRoaXMuYXBwaWQpO1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJzaWduXCIsIGVuY3J5cHRlZFN0cik7XG4gICAgICAgICAgICBpZiAoY29uZmlnICYmIE9iamVjdC5rZXlzKGNvbmZpZykubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhYWFhYWFhYWFhYWFhYWFhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24odGhpcy5fY29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0WEhSQ29uZmlnKHhocik7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmJiYmJiYmJiYmJiYmJiXCIpO1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXNTdHIgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1N0ciArPSBpdGVtICsgXCI9XCIgKyBwYXJhbXNbaXRlbV0gKyBcIiZcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYXJhbXNTdHIgKz09PSBcIiwgZW5jb2RlVVJJKHBhcmFtc1N0cikpO1xuICAgICAgICAgICAgICAgIHhoci5zZW5kKGVuY29kZVVSSShwYXJhbXNTdHIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRYSFJDb25maWcoeGhyOiBYTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCBcIipcIik7XG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiLCBcIkdFVCwgUE9TVCwgUFVULCBERUxFVEVcIik7XG4gICAgICAgIC8vIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLCBcImRldmljZS11dWlkLEF1dGhvcml6YXRpb25cIik7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKTtcbiAgICAgICAgLy8gaWYgKHRoaXMuX2NvbmZpZy5oZWFkZXJzKSB7XG4gICAgICAgIC8vICAgICBmb3IgKGxldCBpIGluIHRoaXMuX2NvbmZpZy5oZWFkZXJzKSB7XG4gICAgICAgIC8vICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5fY29uZmlnLmhlYWRlcnNbaV0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIHhoci50aW1lb3V0ID0gODAwMDsgLy8gOCBzZWNvbmRzIGZvciB0aW1lb3V0XG4gICAgfVxuXG4gICAgcHVibGljIHNldEludGVyY2VwdG9yUGFyYW1zKHBhcmFtczogSVJlcXVlc3RDb25maWcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gcGFyYW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZWdpc3RlckFjY291bnQocGlkOiBzdHJpbmcsIHl6bTogc3RyaW5nLCB5cW06IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGxldCBjaGVja3VybCA9IFwiXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWNrdXJsICsgXCIuLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjdXJTZXJ2ZXJMaXN0SW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHN0YXRpYyBkZWZhdWx0U2VydmVyTGlzdEluZGV4OiBudW1iZXIgPSAwO1xuICAgIC8v5ouJ5Y+Wc2VydmVybGlzdFxuICAgIHB1YmxpYyBHZXRTZXJ2ZXJMaXN0KGNhbGxiYWNrOiBGdW5jdGlvbiwgaXNDaXJjbGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgICAgIGxldCBkZWZhdWx0U2VydmVMaXN0SWR4OiBzdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkdhbWVEZWZhdWx0U2VydmVyTGlzdFwiKTtcbiAgICAgICAgSHR0cEhlbHBFeC5kZWZhdWx0U2VydmVyTGlzdEluZGV4ID0gZGVmYXVsdFNlcnZlTGlzdElkeCA9PSBudWxsID8gMCA6IE51bWJlcihkZWZhdWx0U2VydmVMaXN0SWR4KTtcbiAgICAgICAgbGV0IGxpc3Q6IHN0cmluZ1tdID0gdGhpcy5HZXRIb21lVXJsKCk7XG4gICAgICAgIGlmIChIdHRwSGVscEV4LmN1clNlcnZlckxpc3RJbmRleCA+PSBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgSHR0cEhlbHBFeC5kZWZhdWx0U2VydmVyTGlzdEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICAvLyAw5rOo5YaMMeaJvuWbnuWvhueggTLkuqTmmJPlr4bnoIEz6YeN572u5a+G56CBXG4gICAgICAgIGxldCB1cmw6IHN0cmluZyA9IGxpc3RbSHR0cEhlbHBFeC5kZWZhdWx0U2VydmVyTGlzdEluZGV4XSArIFwiP3N0PVwiICsgRGF0ZS5ub3coKTsvL+W8uuWItuaLieacgOaWsOeahFxuICAgICAgICAvL0RlYnVnLkxvZ0Vycm9yKFwiYWxsIHNlcnZlcmxpc3Q6XCIgKyBBcHBDb25maWdMaXN0LkN1cnJlbnQuaG9tZV91cmwpO1xuICAgICAgICAvL0RlYnVnLkxvZ0Vycm9yKFwiZGVmYXVsdCBzZXJ2ZXJsaXN0IHVybDpcIiArIHVybCk7IFxuICAgICAgICBpZiAoaXNDaXJjbGUpIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93TG9hZF9DaXJjbGUodHJ1ZSk7XG4gICAgICAgIEh0dHBBcGkuaHR0cFxuICAgICAgICAgICAgLmdldCh1cmwsIHt9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy9EZWJ1Zy5Mb2dFcnJvcihcInd3dy50ZXh0IDogXCIgKyB3d3cudGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93TG9hZF9DaXJjbGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dMb2FkX0NpcmNsZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTG9hZFNlcnZlckxpc3QoY2FsbGJhY2ssIGlzQ2lyY2xlKTtcbiAgICAgICAgICAgICAgICAgICAgLy9Db21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy9Db21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcChMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTUwMykpOy8v5pyN5Yqh5Zmo6L+e5o6l5aSx6LSl77yM6K+35qOA5rWL572R57uc5bm26YeN5ZCv5a6i5oi356uv44CCXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLkxvYWRTZXJ2ZXJMaXN0KGNhbGxiYWNrLCBpc0NpcmNsZSk7XG4gICAgICAgICAgICAgICAgLy9Db21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvL0NvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxNTAzKSk7Ly/mnI3liqHlmajov57mjqXlpLHotKXvvIzor7fmo4DmtYvnvZHnu5zlubbph43lkK/lrqLmiLfnq6/jgIJcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICAvL+WFiOS7juacrOWcsOe8k+WtmOeahHNlcnZlcmxpc3Tor7vlj5Zob21ldXJs77yM5rKh5pyJ57yT5a2Y5bCx5Y67Y29uZmln6YeM6Z2i55qEaG9tZXVybFxuICAgIHB1YmxpYyBHZXRIb21lVXJsKCk6IEFycmF5PHN0cmluZz4ge1xuXG4gICAgICAgIC8vIGZzLnJlYWRGaWxlKGZQYXRoLCBcInV0ZjhcIiwgZnVuY3Rpb24gKGVyciwgZGF0YSl7XG4gICAgICAgIC8vICAgaWYgKGVycikge1xuXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyAgIGVsc2VcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UoJ2Z1Y2t0aGV3b3JsZCcpO1xuICAgICAgICAvLyAgICAgdmFyIGl2ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UoJ2Z1Y2t0aGV3b3JsZCcpO1xuICAgICAgICAvLyAgICAgbGV0IGRlY3J5cHRlZCA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGRhdGEsIGtleSwge1xuICAgICAgICAvLyAgICAgICBrZXlTaXplOiAxMjggLyA4LFxuICAgICAgICAvLyAgICAgICBpdjogaXYsXG4gICAgICAgIC8vICAgICAgIG1vZGU6IENyeXB0b0pTLm1vZGUuQ0JDLFxuICAgICAgICAvLyAgICAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUGtjczdcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyAgICAgbGV0IF9kYXRhTG9jYWw6U2VydmVyTGlzdFBvZCA9IEpTT04ucGFyc2UoZGVjcnlwdGVkKTtcbiAgICAgICAgLy8gICAgIGlmIChfZGF0YUxvY2FsICE9IG51bGwgJiYgX2RhdGFMb2NhbC5ob21lX3VybCAhPSBudWxsICYmIF9kYXRhTG9jYWwuaG9tZV91cmwgIT0gXCJcIil7XG4gICAgICAgIC8vICAgICAgIHJldHVybiBfZGF0YUxvY2FsLmhvbWVfdXJsLnNwbGl0KCd8Jyk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgIHJldHVybiBob21lVXJsLnNwbGl0KCd8Jyk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS1cIiwgZlBhdGgpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHJldHVybiBBcHBDb25maWcuaG9tZVVybC5zcGxpdCgnfCcpO1xuICAgIH1cbiAgICBwdWJsaWMgTG9hZFNlcnZlckxpc3QoY2FsbGJhY2s6IEZ1bmN0aW9uLCBpc0NpcmNsZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgaWYgKEh0dHBIZWxwRXguY3VyU2VydmVyTGlzdEluZGV4ID09IEh0dHBIZWxwRXguZGVmYXVsdFNlcnZlckxpc3RJbmRleCkge1xuICAgICAgICAgICAgSHR0cEhlbHBFeC5jdXJTZXJ2ZXJMaXN0SW5kZXgrKztcbiAgICAgICAgICAgIHRoaXMuTG9hZFNlcnZlckxpc3QoY2FsbGJhY2ssIGlzQ2lyY2xlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGlzdDogc3RyaW5nW10gPSBBcHBDb25maWcuaG9tZVVybC5zcGxpdCgnfCcpO1xuICAgICAgICBpZiAoSHR0cEhlbHBFeC5jdXJTZXJ2ZXJMaXN0SW5kZXggPj0gbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93TG9hZF9DaXJjbGUoZmFsc2UpO1xuICAgICAgICAgICAgY2FsbGJhY2soXCJcIik7Ly/mi4nlj5blpLHotKXnm7TmjqXor7vlj5bmnKzlnLBzZXJ2ZXJsaXN06YWN572uXG4gICAgICAgICAgICAvL0NvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxNTAzKSk7Ly/mnI3liqHlmajov57mjqXlpLHotKXvvIzor7fmo4DmtYvnvZHnu5zlubbph43lkK/lrqLmiLfnq6/jgIJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBsaXN0W0h0dHBIZWxwRXguY3VyU2VydmVyTGlzdEluZGV4XSArIFwiP3N0PVwiICsgRGF0ZS5ub3coKTsvL+W8uuWItuaLieacgOaWsOeahDtcbiAgICAgICAgaWYgKGlzQ2lyY2xlKSBDb21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKHRydWUpO1xuICAgICAgICBIdHRwQXBpLmh0dHBcbiAgICAgICAgICAgIC5nZXQodXJsLCB7fSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vRGVidWcuTG9nRXJyb3IoXCJ3d3cudGV4dCA6IFwiICsgd3d3LnRleHQpO1xuICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJHYW1lRGVmYXVsdFNlcnZlckxpc3RcIiwgSHR0cEhlbHBFeC5jdXJTZXJ2ZXJMaXN0SW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vRGVidWcuTG9nRXJyb3IoXCJTZXQgZGVmYXVsdCBTZXJ2ZXJMaXN0IGluZGV4OlwiICsgY3VyU2VydmVyTGlzdEluZGV4KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIEh0dHBIZWxwRXguY3VyU2VydmVyTGlzdEluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChIdHRwSGVscEV4LmN1clNlcnZlckxpc3RJbmRleCA+PSBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9QbGF5ZXJQcmVmcy5TZXRJbnQoXCJHYW1lRGVmYXVsdFNlcnZlckxpc3RcIiwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKFwiXCIpOy8v5ouJ5Y+W5aSx6LSl55u05o6l6K+75Y+W5pys5Zywc2VydmVybGlzdOmFjee9rlxuICAgICAgICAgICAgICAgICAgICAgICAgLy9Db21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcChMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTUwMykpOy8v5pyN5Yqh5Zmo6L+e5o6l5aSx6LSl77yM6K+35qOA5rWL572R57uc5bm26YeN5ZCv5a6i5oi356uv44CCXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTG9hZFNlcnZlckxpc3QoY2FsbGJhY2ssIGlzQ2lyY2xlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgSHR0cEhlbHBFeC5jdXJTZXJ2ZXJMaXN0SW5kZXgrKztcbiAgICAgICAgICAgICAgICBpZiAoSHR0cEhlbHBFeC5jdXJTZXJ2ZXJMaXN0SW5kZXggPj0gbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9QbGF5ZXJQcmVmcy5TZXRJbnQoXCJHYW1lRGVmYXVsdFNlcnZlckxpc3RcIiwgMCk7XG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93TG9hZF9DaXJjbGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhcIlwiKTsvL+aLieWPluWksei0peebtOaOpeivu+WPluacrOWcsHNlcnZlcmxpc3TphY3nva5cbiAgICAgICAgICAgICAgICAgICAgLy9Db21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcChMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTUwMykpOy8v5pyN5Yqh5Zmo6L+e5o6l5aSx6LSl77yM6K+35qOA5rWL572R57uc5bm26YeN5ZCv5a6i5oi356uv44CCXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Mb2FkU2VydmVyTGlzdChjYWxsYmFjaywgaXNDaXJjbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgVVJJKGZpbGVOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuXG4iXX0=
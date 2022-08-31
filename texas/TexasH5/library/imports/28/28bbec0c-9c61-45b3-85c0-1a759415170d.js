"use strict";
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/AppLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dbbd8G3dlCqZSyqoNrGpAe', 'AppLoad');
// Script/AppLoad.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var BaseFrameNative_1 = require("./BaseFrameNative");
var HotUpdateManager_1 = require("./HotUpdateManager");
var MgrNative_1 = require("./MgrNative");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AppLoad = /** @class */ (function (_super) {
    __extends(AppLoad, _super);
    function AppLoad() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultJsonConfig = null;
        _this.oldLabel = null;
        _this.newLabel = null;
        _this.tipLabel = null;
        _this.percentLabel = null;
        _this.percentNode = null;
        _this.remindLabel = null;
        _this.remindNode = null;
        _this.newVersion = "";
        _this.loadSubpackageName = ["GameCommon", "gameHall"];
        _this.homeurl = "";
        _this.homeurlList = [];
        _this.clientVersion = "";
        _this.severVersion = "";
        _this.serverIndex = 0;
        _this.serverListUrl = "";
        _this.isNoNetWork = false;
        _this.timer = null;
        _this.loadingCallBack = null;
        return _this;
    }
    AppLoad.prototype.onLoad = function () {
        BaseFrameNative_1.BaseFrameNative.isOpenApp = true;
        this.remindLabel.active = false;
        this.remindNode.active = false;
        // 设置搜索路径
        if (cc.sys.isNative) {
            // jsb.fileUtils.setSearchPaths([]);
            this.addSearchPaths(jsb.fileUtils.getWritablePath());
            this.addSearchPaths(jsb.fileUtils.getWritablePath() + "HotUpdate/");
            var searchPaths = cc.sys.localStorage.getItem('HotUpdateSearchPaths');
            if (searchPaths != null && searchPaths != undefined) {
                // jsb.fileUtils.setSearchPaths(searchPaths);
                searchPaths = JSON.parse(searchPaths);
                console.log("---searchPaths---" + searchPaths);
                for (var index = 0; index < searchPaths.length; index++) {
                    var element = searchPaths[index];
                    this.addSearchPaths(element);
                }
            }
            console.log("---searchPaths---" + jsb.fileUtils.getSearchPaths());
        }
        // loading动画
        var times = 0;
        this.tipLabel.string = "Loading...";
        this.loadingCallBack = function () {
            times += 1;
            if (times % 4 == 1) {
                this.tipLabel.string = "Loading";
            }
            else if (times % 4 == 2) {
                this.tipLabel.string = "Loading.";
            }
            else if (times % 4 == 3) {
                this.tipLabel.string = "Loading..";
            }
            else if (times % 4 == 0) {
                times = 0;
                this.tipLabel.string = "Loading...";
            }
        };
        this.schedule(this.loadingCallBack, 0.5);
    };
    AppLoad.prototype.onEnable = function () {
        console.log("cc.sys.os == ", cc.sys.os);
        console.log("cc.sys.OS_ANDROID == ", cc.sys.OS_ANDROID);
        var net = "";
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            /**获取网络状态 */
            var methodSignature = "()Ljava/lang/String;";
            var method1 = "getNetWorkInfo";
            net = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method1, methodSignature);
            console.log("net === ", net);
        }
        else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            net = jsb.reflection.callStaticMethod("TSObjectCBridge", "getNetworkType");
        }
        var netArr = net.split("_");
        if (netArr[0] == "-1") {
            this.remindNode.active = true;
            var label = cc.find("updateLabel", this.remindNode);
            var tipStr = "网络连接不可用，请检查网络！";
            label.getComponent(cc.Label).string = tipStr;
            this.isNoNetWork = true;
            return;
        }
        this.isNoNetWork = false;
        this.serverIndex = 0;
        var dezhou_serverlist = cc.sys.localStorage.getItem("dezhou_serverlist");
        console.log("=======" + dezhou_serverlist + "=======");
        if (dezhou_serverlist === undefined || dezhou_serverlist === null) {
            BaseFrameNative_1.BaseFrameNative.defaultServerList = this.defaultJsonConfig.json;
        }
        else {
            BaseFrameNative_1.BaseFrameNative.defaultServerList = JSON.parse(dezhou_serverlist);
            console.log("1=======" + BaseFrameNative_1.BaseFrameNative.defaultServerList + "=======");
        }
        this.homeurlList = this.defaultJsonConfig.json.home_url.split("|");
        this.clientVersion = this.getClientVersion();
        console.log("2=======" + this.homeurlList + "=======");
        // this.serverListUrl = cc.sys.localStorage.getItem("dezhou_serverlist_url");
        if (this.serverListUrl == undefined || this.serverListUrl == null) {
            console.log("this.serverListUrl == ", this.serverListUrl);
            this.serverListUrl = "";
        }
        this.remoteServerList();
    };
    AppLoad.prototype.onDestroy = function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.unscheduleAllCallbacks();
    };
    // 添加搜索路径
    AppLoad.prototype.addSearchPaths = function (path) {
        var pathList = jsb.fileUtils.getSearchPaths();
        for (var index = 0; index < pathList.length; index++) {
            var tempPath = pathList[index];
            if (tempPath == path) {
                return;
            }
        }
        // 没有加到搜索路径
        pathList.unshift(path);
        jsb.fileUtils.setSearchPaths(pathList);
    };
    // 远程加载serverlist
    AppLoad.prototype.remoteServerList = function () {
        var self = this;
        this.timer = setTimeout(function () {
            console.log("--- time out ---");
            self.loadJsonFail();
            xhr.abort(); //请求中止
        }, 3000);
        var callback = function reqListener() {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                if (self.timer) {
                    clearTimeout(self.timer);
                }
                console.log("success");
                if (self.isStringToJson(xhr.response)) {
                    var rsp = JSON.parse(xhr.response);
                    self.loadJsonSuccess(rsp);
                }
                else {
                    // 是加密数据
                    var rsp = self.JSONDecrypt(xhr.response);
                    if (self.isStringToJson(rsp)) {
                        self.loadJsonSuccess(JSON.parse(rsp));
                    }
                    else {
                        self.remindNode.active = true;
                        var label = cc.find("updateLabel", self.remindNode);
                        var tipStr = "拉取配置文件格式错误，请重试！";
                        label.getComponent(cc.Label).string = tipStr;
                        self.isNoNetWork = true;
                    }
                }
            }
            else if (xhr.readyState == 4 && xhr.status == 404) {
                console.log("fail 404");
                self.loadJsonFail();
            }
        };
        if (this.serverListUrl != "") {
            self.serverIndex = -1;
            self.homeurl = this.serverListUrl;
            this.serverListUrl = "";
        }
        else {
            self.homeurl = self.homeurlList[self.serverIndex];
        }
        var xhr = new XMLHttpRequest();
        if (cc.sys.isBrowser) {
            xhr.onreadystatechange = function () {
                console.log("xhr == ", xhr);
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    if (self.timer) {
                        clearTimeout(self.timer);
                    }
                    //解析获取到的文本文件，转化成JSON
                    if (self.isStringToJson(xhr.response)) {
                        var rsp = JSON.parse(xhr.response);
                        self.loadJsonSuccess(rsp);
                    }
                    else {
                        // 是加密数据
                        var rsp = self.JSONDecrypt(xhr.response);
                        if (self.isStringToJson(rsp)) {
                            self.loadJsonSuccess(JSON.parse(rsp));
                        }
                        else {
                            self.remindNode.active = true;
                            var label = cc.find("updateLabel", self.remindNode);
                            var tipStr = "拉取配置文件格式错误，请重试！";
                            label.getComponent(cc.Label).string = tipStr;
                            self.isNoNetWork = true;
                        }
                    }
                }
            };
            xhr.onerror = function () {
                self.loadJsonFail();
            };
        }
        else {
            xhr.addEventListener("load", callback);
        }
        console.log("self.homeurl === ", self.homeurl);
        var nowTime = new Date().getTime();
        xhr.open("GET", self.homeurl + "?t=" + nowTime, true);
        xhr.send();
    };
    AppLoad.prototype.isStringToJson = function (str) {
        try {
            if (typeof JSON.parse(str) == "object") {
                return true;
            }
        }
        catch (e) {
        }
        return false;
    };
    AppLoad.prototype.JSONEncrypt = function (str) {
        // let encrypt = require("encryptjs")
        // let dataString = JSON.stringify(str);
        // let secretkey = 'texas2022'; // 加密密钥
        // let encrypted = encrypt.encrypt(dataString, secretkey, 256);
        // cc.log('原始字符串:' + dataString);
        // cc.log('加密后:' + encrypted);
        var CryptoJS = require("CryptoJS");
        var dataString = JSON.stringify(str);
        var secretkey = 'texas2022'; // 加密密钥
        var encrypted = CryptoJS.AES.encrypt(dataString, secretkey, 256);
        cc.log('原始字符串:' + dataString);
        cc.log('加密后:' + encrypted);
    };
    AppLoad.prototype.JSONDecrypt = function (str) {
        // let encrypt = require("encryptjs")
        // let dataString = JSON.stringify(str);
        // let secretkey = 'texas2022'; // 加密密钥
        // let myString = JSON.parse(encrypt.decrypt(dataString, secretkey, 256));
        // cc.log('原始字符串:' + dataString);
        // cc.log('解密后看看对不对:' + myString);
        var CryptoJS = require("CryptoJS");
        var dataString = str;
        var secretkey = 'texas2022'; // 加密密钥
        var myString = CryptoJS.AES.decrypt(dataString, secretkey, 256);
        myString = myString.toString(CryptoJS.enc.Utf8).toString();
        cc.log('原始字符串:' + dataString);
        cc.log('解密后看看对不对:' + myString);
        // myString = JSON.parse(myString);
        return myString;
    };
    // 加载json成功
    AppLoad.prototype.loadJsonSuccess = function (rsp) {
        this.unschedule(this.loadingCallBack);
        this.remindLabel.active = false;
        var serverListUrl = this.homeurl;
        cc.sys.localStorage.setItem("dezhou_serverlist_url", serverListUrl);
        BaseFrameNative_1.BaseFrameNative.serverList = rsp;
        BaseFrameNative_1.BaseFrameNative.defaultServerList = rsp;
        console.log("rsp == ", rsp);
        cc.sys.localStorage.setItem("dezhou_serverlist", JSON.stringify(rsp));
        var nowTime = new Date().getTime();
        cc.sys.localStorage.setItem("dezhou_serverlist_time", nowTime);
        var isNeedDownLoadApp = this.checkAppVersion(); //对比大版本
        if (isNeedDownLoadApp) {
            this.remindNode.active = true;
            var label = cc.find("updateLabel", this.remindNode);
            var tipStr = "检测到有新版本" + this.newVersion + "，请及时更新！";
            label.getComponent(cc.Label).string = tipStr;
            return;
        }
        this.checkVersion();
    };
    //跳转外部浏览器
    AppLoad.prototype.jumpOpenURL = function () {
        if (this.isNoNetWork) {
            cc.game.restart();
        }
        else {
            // 跳转到外部浏览器
            var url = "";
            if (cc.sys.os = cc.sys.OS_ANDROID) {
                url = BaseFrameNative_1.BaseFrameNative.serverList.apksite;
            }
            else if (cc.sys.os = cc.sys.OS_IOS) {
                url = BaseFrameNative_1.BaseFrameNative.serverList.ipasite;
            }
            cc.sys.openURL(url);
        }
    };
    // 加载json失败
    AppLoad.prototype.loadJsonFail = function () {
        var self = this;
        self.serverListUrl = "";
        self.serverIndex += 1;
        console.log("--------err--------", self.serverIndex);
        if (self.serverIndex >= self.homeurlList.length) {
            console.log("获取服务器配置失败，请检查网络！");
            // 未拉取到Json 
            // 修改为判断如果有一天内的serverlist也可以进，否则不让进
            var nowTime = new Date().getTime();
            var oldTime = cc.sys.localStorage.getItem("dezhou_serverlist_time");
            var list = cc.sys.localStorage.getItem("dezhou_serverlist");
            // 86400000毫秒 = 24小时
            if ((oldTime == undefined || oldTime == null) || (list == undefined || list == null) || nowTime - oldTime >= 86400000) {
                console.log("本地缓存配置1");
                self.remindNode.active = true;
                var label = cc.find("updateLabel", self.remindNode);
                var tipStr = "获取配置文件失败，请重试！";
                label.getComponent(cc.Label).string = tipStr;
                self.isNoNetWork = true;
                cc.sys.localStorage.removeItem("dezhou_serverlist");
                cc.sys.localStorage.removeItem("dezhou_serverlist_time");
                return;
            }
            else {
                console.log("本地缓存配置2");
                this.loadJsonSuccess(JSON.parse(list));
                return;
            }
        }
        self.remoteServerList();
    };
    // 获取当前客户端的版本号
    AppLoad.prototype.getClientVersion = function () {
        var clientVersion = "";
        var localVersion = cc.sys.localStorage.getItem("clientVersion");
        if (localVersion === undefined || localVersion === null) {
            clientVersion = BaseFrameNative_1.BaseFrameNative.VERSION;
        }
        else {
            clientVersion = localVersion;
        }
        BaseFrameNative_1.BaseFrameNative.VERSION = clientVersion;
        return clientVersion;
    };
    /**
     * 对比服务器与本地版本号
     */
    AppLoad.prototype.checkVersion = function () {
        this.severVersion = this.getHallVersion();
        if (this.severVersion === null) {
            console.log("获取大厅版本信息错误！");
            return;
        }
        console.log("BaseFrameNative.defaultServerList.mastHotUpdate = ", BaseFrameNative_1.BaseFrameNative.defaultServerList.mastHotUpdate);
        if (BaseFrameNative_1.BaseFrameNative.defaultServerList.mastHotUpdate) {
            this.gotoUpdate();
            return;
        }
        console.log("\u670D\u52A1\u5668\u7248\u672C\uFF1A" + this.severVersion + ("\u5BA2\u6237\u7AEF\u7248\u672C\uFF1A" + this.clientVersion));
        this.oldLabel.string = "当前版本:" + this.clientVersion;
        this.newLabel.string = "最新版本:" + this.severVersion;
        BaseFrameNative_1.BaseFrameNative.VERSION = this.severVersion;
        var compareResult = this.versionCompareHandle(this.clientVersion, this.severVersion);
        console.log(compareResult);
        console.log(cc.sys.isNative);
        console.log(BaseFrameNative_1.BaseFrameNative.isNeedUpdate);
        if (!compareResult || !cc.sys.isNative || !BaseFrameNative_1.BaseFrameNative.isNeedUpdate) {
            if (!cc.sys.isNative) {
                console.log("浏览器，不需要热更");
            }
            if (!compareResult) {
                console.log("客户端版本大于等于服务器版本，不需要热更");
            }
            this.loadSubpackage(0);
        }
        else {
            console.log("客户端版本低于服务器版本，需要热更");
            this.gotoUpdate();
        }
    };
    // 去热更新
    AppLoad.prototype.gotoUpdate = function () {
        // cc.director.loadScene("dlc");
        // this.hotUpdateNode.active = true;
        HotUpdateManager_1.default.instance.checkUpdate(this.redirectToLogin.bind(this), this);
    };
    // 去登录
    AppLoad.prototype.redirectToLogin = function () {
        // 预加载资源包
        this.loadScene("gameHall", "login");
    };
    AppLoad.prototype.loadScene = function (abname, scenename) {
        var oldab = cc.assetManager.getBundle(abname);
        if (oldab == null) {
            cc.assetManager.loadBundle(abname, function (err, bundle) {
                if (err) {
                    console.error(abname + " load fail.");
                    return;
                }
                console.log("loadSubpackage success name == " + abname);
                bundle.loadScene(scenename, function (err, sceneAsset) {
                    if (err) {
                        console.error(abname + " load fail." + scenename);
                        return;
                    }
                    console.log(sceneAsset + " sceneName:" + scenename);
                    cc.director.runScene(sceneAsset);
                });
            });
        }
        else {
            oldab.loadScene(scenename, function (err, sceneAsset) {
                if (err) {
                    console.error(abname + " load fail." + scenename);
                    return;
                }
                console.log(sceneAsset + " sceneName:" + scenename);
                cc.director.runScene(sceneAsset);
            });
        }
    };
    //加载分包
    AppLoad.prototype.loadSubpackage = function (index) {
        var self = this;
        var name = self.loadSubpackageName[index];
        cc.assetManager.loadBundle(name, function (err, bundle) {
            if (err) {
                return console.error(err);
            }
            console.log("loadSubpackage : " + name + " successfully.");
            if (index + 1 >= self.loadSubpackageName.length) {
                //加载完成
                self.loadSubpackageEnd();
            }
            else {
                self.loadSubpackage(index + 1);
            }
        });
    };
    //加载完成
    AppLoad.prototype.loadSubpackageEnd = function () {
        this.redirectToLogin();
    };
    // 获取大厅版本信息
    AppLoad.prototype.getHallVersion = function () {
        var list = BaseFrameNative_1.BaseFrameNative.serverList.gamereslist;
        for (var index = 0; index < list.length; index++) {
            var data = list[index];
            console.log(data);
            if (data.id == 0) {
                return data.version;
            }
        }
        return null;
    };
    // 版本检查 比较方法versionA旧  versionB新
    AppLoad.prototype.versionCompareHandle = function (versionA, versionB) {
        if (versionA == null || versionB == null)
            return false;
        var vA = versionA.split(".");
        var vB = versionB.split(".");
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i]);
            if (a === b) {
                continue;
            }
            else {
                return b - a > 0;
            }
        }
        if (vB.length > vA.length) {
            return true;
        }
        else {
            return false;
        }
    };
    // 判断是否需要强制更新大版本
    AppLoad.prototype.checkAppVersion = function () {
        if (!BaseFrameNative_1.BaseFrameNative.serverList)
            return false;
        var nowVersion = "";
        var oldVersion = MgrNative_1.MgrNative.getInstance().getAppVersion();
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            nowVersion = BaseFrameNative_1.BaseFrameNative.serverList.AppVersion;
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            nowVersion = BaseFrameNative_1.BaseFrameNative.serverList.IpaVersion;
        }
        console.log("nowVersion ==", nowVersion);
        console.log("oldVersion ==", oldVersion);
        this.newVersion = nowVersion;
        var compareResult = this.versionCompareHandle(oldVersion, nowVersion);
        return compareResult;
    };
    __decorate([
        property(cc.JsonAsset)
    ], AppLoad.prototype, "defaultJsonConfig", void 0);
    __decorate([
        property(cc.Label)
    ], AppLoad.prototype, "oldLabel", void 0);
    __decorate([
        property(cc.Label)
    ], AppLoad.prototype, "newLabel", void 0);
    __decorate([
        property(cc.Label)
    ], AppLoad.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.Label)
    ], AppLoad.prototype, "percentLabel", void 0);
    __decorate([
        property(cc.Node)
    ], AppLoad.prototype, "percentNode", void 0);
    __decorate([
        property(cc.Node)
    ], AppLoad.prototype, "remindLabel", void 0);
    __decorate([
        property(cc.Node)
    ], AppLoad.prototype, "remindNode", void 0);
    AppLoad = __decorate([
        ccclass
    ], AppLoad);
    return AppLoad;
}(cc.Component));
exports.default = AppLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBcHBMb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRCQUF5QjtBQUN6QixxREFBb0Q7QUFDcEQsdURBQWtEO0FBQ2xELHlDQUF3QztBQUdsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTZmQztRQTNmRyx1QkFBaUIsR0FBaUIsSUFBSSxDQUFDO1FBR3ZDLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFHMUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRW5CLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLHdCQUFrQixHQUFHLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLGFBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsaUJBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0Isa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFDN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7O0lBMGQ3QyxDQUFDO0lBeGRHLHdCQUFNLEdBQU47UUFDSSxpQ0FBZSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdB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LFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNXO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1U7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNTO0lBdkJWLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E2ZjNCO0lBQUQsY0FBQztDQTdmRCxBQTZmQyxDQTdmb0MsRUFBRSxDQUFDLFNBQVMsR0E2ZmhEO2tCQTdmb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIlxuaW1wb3J0IHsgQmFzZUZyYW1lTmF0aXZlIH0gZnJvbSBcIi4vQmFzZUZyYW1lTmF0aXZlXCI7XG5pbXBvcnQgSG90VXBkYXRlTWFuYWdlciBmcm9tIFwiLi9Ib3RVcGRhdGVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBNZ3JOYXRpdmUgfSBmcm9tIFwiLi9NZ3JOYXRpdmVcIjtcbmltcG9ydCB7IEpTRW5jcnlwdCB9IGZyb20gXCIuL0VuY3J5cHQvanNlbmNyeXB0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBMb2FkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuSnNvbkFzc2V0KVxuICAgIGRlZmF1bHRKc29uQ29uZmlnOiBjYy5Kc29uQXNzZXQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIG9sZExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbmV3TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aXBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHBlcmNlbnRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGVyY2VudE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVtaW5kTGFiZWw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcmVtaW5kTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIG5ld1ZlcnNpb246IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIGxvYWRTdWJwYWNrYWdlTmFtZSA9IFtcIkdhbWVDb21tb25cIiwgXCJnYW1lSGFsbFwiXTtcbiAgICBwcml2YXRlIGhvbWV1cmw6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBob21ldXJsTGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICBwcml2YXRlIGNsaWVudFZlcnNpb246IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBzZXZlclZlcnNpb246IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBzZXJ2ZXJJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHNlcnZlckxpc3RVcmw6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBpc05vTmV0V29yazogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgdGltZXI6IE5vZGVKUy5UaW1lb3V0ID0gbnVsbDtcbiAgICBwcml2YXRlIGxvYWRpbmdDYWxsQmFjazogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBCYXNlRnJhbWVOYXRpdmUuaXNPcGVuQXBwID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW1pbmRMYWJlbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW1pbmROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyDorr7nva7mkJzntKLot6/lvoRcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgLy8ganNiLmZpbGVVdGlscy5zZXRTZWFyY2hQYXRocyhbXSk7XG4gICAgICAgICAgICB0aGlzLmFkZFNlYXJjaFBhdGhzKGpzYi5maWxlVXRpbHMuZ2V0V3JpdGFibGVQYXRoKCkpO1xuICAgICAgICAgICAgdGhpcy5hZGRTZWFyY2hQYXRocyhqc2IuZmlsZVV0aWxzLmdldFdyaXRhYmxlUGF0aCgpICsgXCJIb3RVcGRhdGUvXCIpO1xuICAgICAgICAgICAgbGV0IHNlYXJjaFBhdGhzID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIb3RVcGRhdGVTZWFyY2hQYXRocycpO1xuICAgICAgICAgICAgaWYgKHNlYXJjaFBhdGhzICE9IG51bGwgJiYgc2VhcmNoUGF0aHMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8ganNiLmZpbGVVdGlscy5zZXRTZWFyY2hQYXRocyhzZWFyY2hQYXRocyk7XG4gICAgICAgICAgICAgICAgc2VhcmNoUGF0aHMgPSBKU09OLnBhcnNlKHNlYXJjaFBhdGhzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLXNlYXJjaFBhdGhzLS0tXCIgKyBzZWFyY2hQYXRocyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlYXJjaFBhdGhzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gc2VhcmNoUGF0aHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNlYXJjaFBhdGhzKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tc2VhcmNoUGF0aHMtLS1cIiArIGpzYi5maWxlVXRpbHMuZ2V0U2VhcmNoUGF0aHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9hZGluZ+WKqOeUu1xuICAgICAgICBsZXQgdGltZXM6IG51bWJlciA9IDA7XG4gICAgICAgIHRoaXMudGlwTGFiZWwuc3RyaW5nID0gXCJMb2FkaW5nLi4uXCJcbiAgICAgICAgdGhpcy5sb2FkaW5nQ2FsbEJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aW1lcyArPSAxO1xuICAgICAgICAgICAgaWYgKHRpbWVzICUgNCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBMYWJlbC5zdHJpbmcgPSBcIkxvYWRpbmdcIlxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aW1lcyAlIDQgPT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMudGlwTGFiZWwuc3RyaW5nID0gXCJMb2FkaW5nLlwiXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVzICUgNCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBMYWJlbC5zdHJpbmcgPSBcIkxvYWRpbmcuLlwiXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVzICUgNCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGltZXMgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMudGlwTGFiZWwuc3RyaW5nID0gXCJMb2FkaW5nLi4uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMubG9hZGluZ0NhbGxCYWNrLCAwLjUpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNjLnN5cy5vcyA9PSBcIiwgY2Muc3lzLm9zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYy5zeXMuT1NfQU5EUk9JRCA9PSBcIiwgY2Muc3lzLk9TX0FORFJPSUQpO1xuICAgICAgICBsZXQgbmV0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgLyoq6I635Y+W572R57uc54q25oCBICovXG4gICAgICAgICAgICBsZXQgbWV0aG9kU2lnbmF0dXJlID0gXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiO1xuICAgICAgICAgICAgbGV0IG1ldGhvZDEgPSBcImdldE5ldFdvcmtJbmZvXCI7XG4gICAgICAgICAgICBuZXQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvVFNKYXZhQnJpZGdlXCIsIG1ldGhvZDEsIG1ldGhvZFNpZ25hdHVyZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ldCA9PT0gXCIsIG5ldCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICBuZXQgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiVFNPYmplY3RDQnJpZGdlXCIsIFwiZ2V0TmV0d29ya1R5cGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5ldEFyciA9IG5ldC5zcGxpdChcIl9cIik7XG4gICAgICAgIGlmIChuZXRBcnJbMF0gPT0gXCItMVwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlbWluZE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGNjLmZpbmQoXCJ1cGRhdGVMYWJlbFwiLCB0aGlzLnJlbWluZE5vZGUpO1xuICAgICAgICAgICAgbGV0IHRpcFN0cjogc3RyaW5nID0gXCLnvZHnu5zov57mjqXkuI3lj6/nlKjvvIzor7fmo4Dmn6XnvZHnu5zvvIFcIjtcbiAgICAgICAgICAgIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGlwU3RyO1xuICAgICAgICAgICAgdGhpcy5pc05vTmV0V29yayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuaXNOb05ldFdvcmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXJ2ZXJJbmRleCA9IDA7XG4gICAgICAgIGxldCBkZXpob3Vfc2VydmVybGlzdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlemhvdV9zZXJ2ZXJsaXN0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT1cIitkZXpob3Vfc2VydmVybGlzdCtcIj09PT09PT1cIik7XG4gICAgICAgIGlmIChkZXpob3Vfc2VydmVybGlzdCA9PT0gdW5kZWZpbmVkIHx8IGRlemhvdV9zZXJ2ZXJsaXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBCYXNlRnJhbWVOYXRpdmUuZGVmYXVsdFNlcnZlckxpc3QgPSB0aGlzLmRlZmF1bHRKc29uQ29uZmlnLmpzb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBCYXNlRnJhbWVOYXRpdmUuZGVmYXVsdFNlcnZlckxpc3QgPSBKU09OLnBhcnNlKGRlemhvdV9zZXJ2ZXJsaXN0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMT09PT09PT1cIitCYXNlRnJhbWVOYXRpdmUuZGVmYXVsdFNlcnZlckxpc3QrXCI9PT09PT09XCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG9tZXVybExpc3QgPSB0aGlzLmRlZmF1bHRKc29uQ29uZmlnLmpzb24uaG9tZV91cmwuc3BsaXQoXCJ8XCIpO1xuICAgICAgICB0aGlzLmNsaWVudFZlcnNpb24gPSB0aGlzLmdldENsaWVudFZlcnNpb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIyPT09PT09PVwiK3RoaXMuaG9tZXVybExpc3QrXCI9PT09PT09XCIpO1xuICAgICAgICAvLyB0aGlzLnNlcnZlckxpc3RVcmwgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkZXpob3Vfc2VydmVybGlzdF91cmxcIik7XG4gICAgICAgIGlmICh0aGlzLnNlcnZlckxpc3RVcmwgPT0gdW5kZWZpbmVkIHx8IHRoaXMuc2VydmVyTGlzdFVybCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuc2VydmVyTGlzdFVybCA9PSBcIiwgdGhpcy5zZXJ2ZXJMaXN0VXJsKTtcbiAgICAgICAgICAgIHRoaXMuc2VydmVyTGlzdFVybCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdGVTZXJ2ZXJMaXN0KCk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgIH1cblxuICAgIC8vIOa3u+WKoOaQnOe0oui3r+W+hFxuICAgIHB1YmxpYyBhZGRTZWFyY2hQYXRocyhwYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHBhdGhMaXN0ID0ganNiLmZpbGVVdGlscy5nZXRTZWFyY2hQYXRocygpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGF0aExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgdGVtcFBhdGggPSBwYXRoTGlzdFtpbmRleF07XG4gICAgICAgICAgICBpZiAodGVtcFBhdGggPT0gcGF0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmsqHmnInliqDliLDmkJzntKLot6/lvoRcbiAgICAgICAgcGF0aExpc3QudW5zaGlmdChwYXRoKTtcbiAgICAgICAganNiLmZpbGVVdGlscy5zZXRTZWFyY2hQYXRocyhwYXRoTGlzdCk7XG4gICAgfVxuXG4gICAgLy8g6L+c56iL5Yqg6L29c2VydmVybGlzdFxuICAgIHB1YmxpYyByZW1vdGVTZXJ2ZXJMaXN0KCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tIHRpbWUgb3V0IC0tLVwiKTtcbiAgICAgICAgICAgIHNlbGYubG9hZEpzb25GYWlsKCk7XG4gICAgICAgICAgICB4aHIuYWJvcnQoKTsvL+ivt+axguS4reatolxuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgbGV0IGNhbGxiYWNrID0gZnVuY3Rpb24gcmVxTGlzdGVuZXIoKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi50aW1lcikge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2VsZi50aW1lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc1N0cmluZ1RvSnNvbih4aHIucmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByc3AgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9hZEpzb25TdWNjZXNzKHJzcCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5piv5Yqg5a+G5pWw5o2uXG4gICAgICAgICAgICAgICAgICAgIGxldCByc3AgPSBzZWxmLkpTT05EZWNyeXB0KHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzU3RyaW5nVG9Kc29uKHJzcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubG9hZEpzb25TdWNjZXNzKEpTT04ucGFyc2UocnNwKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbWluZE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGNjLmZpbmQoXCJ1cGRhdGVMYWJlbFwiLCBzZWxmLnJlbWluZE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpcFN0cjogc3RyaW5nID0gXCLmi4nlj5bphY3nva7mlofku7bmoLzlvI/plJnor6/vvIzor7fph43or5XvvIFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGlwU3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pc05vTmV0V29yayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA9PSA0MDQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZhaWwgNDA0XCIpO1xuICAgICAgICAgICAgICAgIHNlbGYubG9hZEpzb25GYWlsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VydmVyTGlzdFVybCAhPSBcIlwiKSB7XG4gICAgICAgICAgICBzZWxmLnNlcnZlckluZGV4ID0gLTE7XG4gICAgICAgICAgICBzZWxmLmhvbWV1cmwgPSB0aGlzLnNlcnZlckxpc3RVcmw7XG4gICAgICAgICAgICB0aGlzLnNlcnZlckxpc3RVcmwgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5ob21ldXJsID0gc2VsZi5ob21ldXJsTGlzdFtzZWxmLnNlcnZlckluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGlmIChjYy5zeXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieGhyID09IFwiLCB4aHIpO1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi50aW1lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHNlbGYudGltZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8v6Kej5p6Q6I635Y+W5Yiw55qE5paH5pys5paH5Lu277yM6L2s5YyW5oiQSlNPTlxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc1N0cmluZ1RvSnNvbih4aHIucmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcnNwID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2FkSnNvblN1Y2Nlc3MocnNwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaYr+WKoOWvhuaVsOaNrlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJzcCA9IHNlbGYuSlNPTkRlY3J5cHQoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzU3RyaW5nVG9Kc29uKHJzcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxvYWRKc29uU3VjY2VzcyhKU09OLnBhcnNlKHJzcCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbWluZE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBjYy5maW5kKFwidXBkYXRlTGFiZWxcIiwgc2VsZi5yZW1pbmROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGlwU3RyOiBzdHJpbmcgPSBcIuaLieWPlumFjee9ruaWh+S7tuagvOW8j+mUmeivr++8jOivt+mHjeivle+8gVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGlwU3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaXNOb05ldFdvcmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYubG9hZEpzb25GYWlsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZi5ob21ldXJsID09PSBcIiwgc2VsZi5ob21ldXJsKTtcbiAgICAgICAgbGV0IG5vd1RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgc2VsZi5ob21ldXJsICsgXCI/dD1cIiArIG5vd1RpbWUsIHRydWUpO1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1N0cmluZ1RvSnNvbihzdHI6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBKU09OLnBhcnNlKHN0cikgPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIEpTT05FbmNyeXB0KHN0cjogc3RyaW5nKSB7XG4gICAgICAgIC8vIGxldCBlbmNyeXB0ID0gcmVxdWlyZShcImVuY3J5cHRqc1wiKVxuICAgICAgICAvLyBsZXQgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHN0cik7XG4gICAgICAgIC8vIGxldCBzZWNyZXRrZXkgPSAndGV4YXMyMDIyJzsgLy8g5Yqg5a+G5a+G6ZKlXG4gICAgICAgIC8vIGxldCBlbmNyeXB0ZWQgPSBlbmNyeXB0LmVuY3J5cHQoZGF0YVN0cmluZywgc2VjcmV0a2V5LCAyNTYpO1xuICAgICAgICAvLyBjYy5sb2coJ+WOn+Wni+Wtl+espuS4sjonICsgZGF0YVN0cmluZyk7XG4gICAgICAgIC8vIGNjLmxvZygn5Yqg5a+G5ZCOOicgKyBlbmNyeXB0ZWQpO1xuXG4gICAgICAgIGxldCBDcnlwdG9KUyA9IHJlcXVpcmUoXCJDcnlwdG9KU1wiKTtcbiAgICAgICAgbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzdHIpO1xuICAgICAgICBsZXQgc2VjcmV0a2V5ID0gJ3RleGFzMjAyMic7IC8vIOWKoOWvhuWvhumSpVxuICAgICAgICBsZXQgZW5jcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoZGF0YVN0cmluZywgc2VjcmV0a2V5LCAyNTYpO1xuICAgICAgICBjYy5sb2coJ+WOn+Wni+Wtl+espuS4sjonICsgZGF0YVN0cmluZyk7XG4gICAgICAgIGNjLmxvZygn5Yqg5a+G5ZCOOicgKyBlbmNyeXB0ZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBKU09ORGVjcnlwdChzdHI6IHN0cmluZykge1xuICAgICAgICAvLyBsZXQgZW5jcnlwdCA9IHJlcXVpcmUoXCJlbmNyeXB0anNcIilcbiAgICAgICAgLy8gbGV0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzdHIpO1xuICAgICAgICAvLyBsZXQgc2VjcmV0a2V5ID0gJ3RleGFzMjAyMic7IC8vIOWKoOWvhuWvhumSpVxuICAgICAgICAvLyBsZXQgbXlTdHJpbmcgPSBKU09OLnBhcnNlKGVuY3J5cHQuZGVjcnlwdChkYXRhU3RyaW5nLCBzZWNyZXRrZXksIDI1NikpO1xuICAgICAgICAvLyBjYy5sb2coJ+WOn+Wni+Wtl+espuS4sjonICsgZGF0YVN0cmluZyk7XG4gICAgICAgIC8vIGNjLmxvZygn6Kej5a+G5ZCO55yL55yL5a+55LiN5a+5OicgKyBteVN0cmluZyk7XG5cbiAgICAgICAgbGV0IENyeXB0b0pTID0gcmVxdWlyZShcIkNyeXB0b0pTXCIpO1xuICAgICAgICBsZXQgZGF0YVN0cmluZyA9IHN0cjtcbiAgICAgICAgbGV0IHNlY3JldGtleSA9ICd0ZXhhczIwMjInOyAvLyDliqDlr4blr4bpkqVcbiAgICAgICAgbGV0IG15U3RyaW5nID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZGF0YVN0cmluZywgc2VjcmV0a2V5LCAyNTYpO1xuICAgICAgICBteVN0cmluZyA9IG15U3RyaW5nLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KS50b1N0cmluZygpO1xuICAgICAgICBjYy5sb2coJ+WOn+Wni+Wtl+espuS4sjonICsgZGF0YVN0cmluZyk7XG4gICAgICAgIGNjLmxvZygn6Kej5a+G5ZCO55yL55yL5a+55LiN5a+5OicgKyBteVN0cmluZyk7XG4gICAgICAgIC8vIG15U3RyaW5nID0gSlNPTi5wYXJzZShteVN0cmluZyk7XG4gICAgICAgIHJldHVybiBteVN0cmluZztcbiAgICB9XG5cbiAgICAvLyDliqDovb1qc29u5oiQ5YqfXG4gICAgcHVibGljIGxvYWRKc29uU3VjY2Vzcyhyc3ApIHtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMubG9hZGluZ0NhbGxCYWNrKTtcbiAgICAgICAgdGhpcy5yZW1pbmRMYWJlbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHNlcnZlckxpc3RVcmw6IHN0cmluZyA9IHRoaXMuaG9tZXVybDtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGV6aG91X3NlcnZlcmxpc3RfdXJsXCIsIHNlcnZlckxpc3RVcmwpO1xuICAgICAgICBCYXNlRnJhbWVOYXRpdmUuc2VydmVyTGlzdCA9IHJzcDtcbiAgICAgICAgQmFzZUZyYW1lTmF0aXZlLmRlZmF1bHRTZXJ2ZXJMaXN0ID0gcnNwO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJzcCA9PSBcIiwgcnNwKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGV6aG91X3NlcnZlcmxpc3RcIiwgSlNPTi5zdHJpbmdpZnkocnNwKSk7XG4gICAgICAgIGxldCBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlemhvdV9zZXJ2ZXJsaXN0X3RpbWVcIiwgbm93VGltZSk7XG4gICAgICAgIGxldCBpc05lZWREb3duTG9hZEFwcDogYm9vbGVhbiA9IHRoaXMuY2hlY2tBcHBWZXJzaW9uKCk7IC8v5a+55q+U5aSn54mI5pysXG4gICAgICAgIGlmIChpc05lZWREb3duTG9hZEFwcCkge1xuICAgICAgICAgICAgdGhpcy5yZW1pbmROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBjYy5maW5kKFwidXBkYXRlTGFiZWxcIiwgdGhpcy5yZW1pbmROb2RlKTtcbiAgICAgICAgICAgIGxldCB0aXBTdHI6IHN0cmluZyA9IFwi5qOA5rWL5Yiw5pyJ5paw54mI5pysXCIgKyB0aGlzLm5ld1ZlcnNpb24gKyBcIu+8jOivt+WPiuaXtuabtOaWsO+8gVwiO1xuICAgICAgICAgICAgbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aXBTdHI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGVja1ZlcnNpb24oKTtcbiAgICB9XG5cblxuICAgIC8v6Lez6L2s5aSW6YOo5rWP6KeI5ZmoXG4gICAgcHVibGljIGp1bXBPcGVuVVJMKCkge1xuICAgICAgICBpZiAodGhpcy5pc05vTmV0V29yaykge1xuICAgICAgICAgICAgY2MuZ2FtZS5yZXN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDot7PovazliLDlpJbpg6jmtY/op4jlmahcbiAgICAgICAgICAgIGxldCB1cmw6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLm9zID0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVyTGlzdC5hcGtzaXRlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlckxpc3QuaXBhc2l0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKHVybCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliqDovb1qc29u5aSx6LSlXG4gICAgcHVibGljIGxvYWRKc29uRmFpbCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLnNlcnZlckxpc3RVcmwgPSBcIlwiO1xuICAgICAgICBzZWxmLnNlcnZlckluZGV4ICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS1lcnItLS0tLS0tLVwiLCBzZWxmLnNlcnZlckluZGV4KTtcbiAgICAgICAgaWYgKHNlbGYuc2VydmVySW5kZXggPj0gc2VsZi5ob21ldXJsTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+W5pyN5Yqh5Zmo6YWN572u5aSx6LSl77yM6K+35qOA5p+l572R57uc77yBXCIpO1xuICAgICAgICAgICAgLy8g5pyq5ouJ5Y+W5YiwSnNvbiBcbiAgICAgICAgICAgIC8vIOS/ruaUueS4uuWIpOaWreWmguaenOacieS4gOWkqeWGheeahHNlcnZlcmxpc3TkuZ/lj6/ku6Xov5vvvIzlkKbliJnkuI3orqnov5tcbiAgICAgICAgICAgIGxldCBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBsZXQgb2xkVGltZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlemhvdV9zZXJ2ZXJsaXN0X3RpbWVcIik7XG4gICAgICAgICAgICBsZXQgbGlzdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlemhvdV9zZXJ2ZXJsaXN0XCIpO1xuICAgICAgICAgICAgLy8gODY0MDAwMDDmr6vnp5IgPSAyNOWwj+aXtlxuICAgICAgICAgICAgaWYgKChvbGRUaW1lID09IHVuZGVmaW5lZCB8fCBvbGRUaW1lID09IG51bGwpIHx8IChsaXN0ID09IHVuZGVmaW5lZCB8fCBsaXN0ID09IG51bGwpIHx8IG5vd1RpbWUgLSBvbGRUaW1lID49IDg2NDAwMDAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKzlnLDnvJPlrZjphY3nva4xXCIpO1xuICAgICAgICAgICAgICAgIHNlbGYucmVtaW5kTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IGNjLmZpbmQoXCJ1cGRhdGVMYWJlbFwiLCBzZWxmLnJlbWluZE5vZGUpO1xuICAgICAgICAgICAgICAgIGxldCB0aXBTdHI6IHN0cmluZyA9IFwi6I635Y+W6YWN572u5paH5Lu25aSx6LSl77yM6K+36YeN6K+V77yBXCI7XG4gICAgICAgICAgICAgICAgbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aXBTdHI7XG4gICAgICAgICAgICAgICAgc2VsZi5pc05vTmV0V29yayA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGV6aG91X3NlcnZlcmxpc3RcIik7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiZGV6aG91X3NlcnZlcmxpc3RfdGltZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pys5Zyw57yT5a2Y6YWN572uMlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRKc29uU3VjY2VzcyhKU09OLnBhcnNlKGxpc3QpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5yZW1vdGVTZXJ2ZXJMaXN0KCk7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5b2T5YmN5a6i5oi356uv55qE54mI5pys5Y+3XG4gICAgcHVibGljIGdldENsaWVudFZlcnNpb24oKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGNsaWVudFZlcnNpb246IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIGxldCBsb2NhbFZlcnNpb24gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjbGllbnRWZXJzaW9uXCIpO1xuICAgICAgICBpZiAobG9jYWxWZXJzaW9uID09PSB1bmRlZmluZWQgfHwgbG9jYWxWZXJzaW9uID09PSBudWxsKSB7XG4gICAgICAgICAgICBjbGllbnRWZXJzaW9uID0gQmFzZUZyYW1lTmF0aXZlLlZFUlNJT047XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGllbnRWZXJzaW9uID0gbG9jYWxWZXJzaW9uO1xuICAgICAgICB9XG4gICAgICAgIEJhc2VGcmFtZU5hdGl2ZS5WRVJTSU9OID0gY2xpZW50VmVyc2lvbjtcbiAgICAgICAgcmV0dXJuIGNsaWVudFZlcnNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5a+55q+U5pyN5Yqh5Zmo5LiO5pys5Zyw54mI5pys5Y+3XG4gICAgICovXG4gICAgcHVibGljIGNoZWNrVmVyc2lvbigpIHtcbiAgICAgICAgdGhpcy5zZXZlclZlcnNpb24gPSB0aGlzLmdldEhhbGxWZXJzaW9uKCk7XG4gICAgICAgIGlmICh0aGlzLnNldmVyVmVyc2lvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLojrflj5blpKfljoXniYjmnKzkv6Hmga/plJnor6/vvIFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJCYXNlRnJhbWVOYXRpdmUuZGVmYXVsdFNlcnZlckxpc3QubWFzdEhvdFVwZGF0ZSA9IFwiLCBCYXNlRnJhbWVOYXRpdmUuZGVmYXVsdFNlcnZlckxpc3QubWFzdEhvdFVwZGF0ZSk7XG4gICAgICAgIGlmIChCYXNlRnJhbWVOYXRpdmUuZGVmYXVsdFNlcnZlckxpc3QubWFzdEhvdFVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5nb3RvVXBkYXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhg5pyN5Yqh5Zmo54mI5pys77yaJHt0aGlzLnNldmVyVmVyc2lvbn1gICsgYOWuouaIt+err+eJiOacrO+8miR7dGhpcy5jbGllbnRWZXJzaW9ufWApO1xuICAgICAgICB0aGlzLm9sZExhYmVsLnN0cmluZyA9IFwi5b2T5YmN54mI5pysOlwiICsgdGhpcy5jbGllbnRWZXJzaW9uO1xuICAgICAgICB0aGlzLm5ld0xhYmVsLnN0cmluZyA9IFwi5pyA5paw54mI5pysOlwiICsgdGhpcy5zZXZlclZlcnNpb247XG4gICAgICAgIEJhc2VGcmFtZU5hdGl2ZS5WRVJTSU9OID0gdGhpcy5zZXZlclZlcnNpb247XG4gICAgICAgIGxldCBjb21wYXJlUmVzdWx0OiBib29sZWFuID0gdGhpcy52ZXJzaW9uQ29tcGFyZUhhbmRsZSh0aGlzLmNsaWVudFZlcnNpb24sIHRoaXMuc2V2ZXJWZXJzaW9uKTtcbiAgICAgICAgY29uc29sZS5sb2coY29tcGFyZVJlc3VsdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNjLnN5cy5pc05hdGl2ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKEJhc2VGcmFtZU5hdGl2ZS5pc05lZWRVcGRhdGUpO1xuICAgICAgICBpZiAoIWNvbXBhcmVSZXN1bHQgfHwgIWNjLnN5cy5pc05hdGl2ZSB8fCAhQmFzZUZyYW1lTmF0aXZlLmlzTmVlZFVwZGF0ZSkge1xuICAgICAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIua1j+iniOWZqO+8jOS4jemcgOimgeeDreabtFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghY29tcGFyZVJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5a6i5oi356uv54mI5pys5aSn5LqO562J5LqO5pyN5Yqh5Zmo54mI5pys77yM5LiN6ZyA6KaB54Ot5pu0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkU3VicGFja2FnZSgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5a6i5oi356uv54mI5pys5L2O5LqO5pyN5Yqh5Zmo54mI5pys77yM6ZyA6KaB54Ot5pu0XCIpO1xuICAgICAgICAgICAgdGhpcy5nb3RvVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDljrvng63mm7TmlrBcbiAgICBwdWJsaWMgZ290b1VwZGF0ZSgpIHtcbiAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiZGxjXCIpO1xuICAgICAgICAvLyB0aGlzLmhvdFVwZGF0ZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgSG90VXBkYXRlTWFuYWdlci5pbnN0YW5jZS5jaGVja1VwZGF0ZSh0aGlzLnJlZGlyZWN0VG9Mb2dpbi5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyDljrvnmbvlvZVcbiAgICBwdWJsaWMgcmVkaXJlY3RUb0xvZ2luKCkge1xuICAgICAgICAvLyDpooTliqDovb3otYTmupDljIVcbiAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJnYW1lSGFsbFwiLCBcImxvZ2luXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkU2NlbmUoYWJuYW1lOiBzdHJpbmcsIHNjZW5lbmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBvbGRhYiA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYWJuYW1lKTtcbiAgICAgICAgaWYgKG9sZGFiID09IG51bGwpIHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKGFibmFtZSwgKGVyciwgYnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGFibmFtZSArIFwiIGxvYWQgZmFpbC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkU3VicGFja2FnZSBzdWNjZXNzIG5hbWUgPT0gXCIgKyBhYm5hbWUpO1xuICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkU2NlbmUoc2NlbmVuYW1lLCAoZXJyLCBzY2VuZUFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYWJuYW1lICsgXCIgbG9hZCBmYWlsLlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY2VuZUFzc2V0ICsgXCIgc2NlbmVOYW1lOlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucnVuU2NlbmUoc2NlbmVBc3NldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9sZGFiLmxvYWRTY2VuZShzY2VuZW5hbWUsIChlcnIsIHNjZW5lQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYWJuYW1lICsgXCIgbG9hZCBmYWlsLlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzY2VuZUFzc2V0ICsgXCIgc2NlbmVOYW1lOlwiICsgc2NlbmVuYW1lKTtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5ydW5TY2VuZShzY2VuZUFzc2V0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/liqDovb3liIbljIVcbiAgICBwdWJsaWMgbG9hZFN1YnBhY2thZ2UoaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBuYW1lID0gc2VsZi5sb2FkU3VicGFja2FnZU5hbWVbaW5kZXhdO1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShuYW1lLCAoZXJyLCBidW5kbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkU3VicGFja2FnZSA6IFwiICsgbmFtZSArIFwiIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgICAgICAgICBpZiAoaW5kZXggKyAxID49IHNlbGYubG9hZFN1YnBhY2thZ2VOYW1lLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8v5Yqg6L295a6M5oiQXG4gICAgICAgICAgICAgICAgc2VsZi5sb2FkU3VicGFja2FnZUVuZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWRTdWJwYWNrYWdlKGluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8v5Yqg6L295a6M5oiQXG4gICAgcHVibGljIGxvYWRTdWJwYWNrYWdlRW5kKCkge1xuICAgICAgICB0aGlzLnJlZGlyZWN0VG9Mb2dpbigpO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluWkp+WOheeJiOacrOS/oeaBr1xuICAgIHB1YmxpYyBnZXRIYWxsVmVyc2lvbigpIHtcbiAgICAgICAgbGV0IGxpc3QgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVyTGlzdC5nYW1lcmVzbGlzdDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5pZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyDniYjmnKzmo4Dmn6Ug5q+U6L6D5pa55rOVdmVyc2lvbkHml6cgIHZlcnNpb25C5pawXG4gICAgcHVibGljIHZlcnNpb25Db21wYXJlSGFuZGxlKHZlcnNpb25BOiBzdHJpbmcsIHZlcnNpb25COiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHZlcnNpb25BID09IG51bGwgfHwgdmVyc2lvbkIgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgdkEgPSB2ZXJzaW9uQS5zcGxpdChcIi5cIik7XG4gICAgICAgIGxldCB2QiA9IHZlcnNpb25CLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2QS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGEgPSBwYXJzZUludCh2QVtpXSk7XG4gICAgICAgICAgICBsZXQgYiA9IHBhcnNlSW50KHZCW2ldKTtcbiAgICAgICAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBiIC0gYSA+IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZCLmxlbmd0aCA+IHZBLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliKTmlq3mmK/lkKbpnIDopoHlvLrliLbmm7TmlrDlpKfniYjmnKxcbiAgICBwdWJsaWMgY2hlY2tBcHBWZXJzaW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIUJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJMaXN0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBub3dWZXJzaW9uID0gXCJcIjtcbiAgICAgICAgbGV0IG9sZFZlcnNpb24gPSBNZ3JOYXRpdmUuZ2V0SW5zdGFuY2UoKS5nZXRBcHBWZXJzaW9uKCk7XG4gICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcbiAgICAgICAgICAgIG5vd1ZlcnNpb24gPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVyTGlzdC5BcHBWZXJzaW9uO1xuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XG4gICAgICAgICAgICBub3dWZXJzaW9uID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlckxpc3QuSXBhVmVyc2lvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vd1ZlcnNpb24gPT1cIiwgbm93VmVyc2lvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib2xkVmVyc2lvbiA9PVwiLCBvbGRWZXJzaW9uKTtcbiAgICAgICAgdGhpcy5uZXdWZXJzaW9uID0gbm93VmVyc2lvbjtcbiAgICAgICAgbGV0IGNvbXBhcmVSZXN1bHQ6IGJvb2xlYW4gPSB0aGlzLnZlcnNpb25Db21wYXJlSGFuZGxlKG9sZFZlcnNpb24sIG5vd1ZlcnNpb24pO1xuICAgICAgICByZXR1cm4gY29tcGFyZVJlc3VsdDtcbiAgICB9XG59XG4iXX0=
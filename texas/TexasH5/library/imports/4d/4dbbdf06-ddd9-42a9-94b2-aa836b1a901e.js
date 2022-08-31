"use strict";
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
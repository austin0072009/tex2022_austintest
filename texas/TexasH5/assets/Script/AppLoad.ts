import "reflect-metadata"
import { BaseFrameNative } from "./BaseFrameNative";
import HotUpdateManager from "./HotUpdateManager";
import { MgrNative } from "./MgrNative";
import { JSEncrypt } from "./Encrypt/jsencrypt";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AppLoad extends cc.Component {
    @property(cc.JsonAsset)
    defaultJsonConfig: cc.JsonAsset = null;

    @property(cc.Label)
    oldLabel: cc.Label = null;

    @property(cc.Label)
    newLabel: cc.Label = null;

    @property(cc.Label)
    tipLabel: cc.Label = null;

    @property(cc.Label)
    percentLabel: cc.Label = null;

    @property(cc.Node)
    percentNode: cc.Node = null;

    @property(cc.Node)
    remindLabel: cc.Node = null;

    @property(cc.Node)
    remindNode: cc.Node = null;

    private newVersion: string = "";
    public loadSubpackageName = ["GameCommon", "gameHall"];
    private homeurl: string = "";
    private homeurlList: string[] = [];
    private clientVersion: string = "";
    private severVersion: string = "";
    private serverIndex: number = 0;
    private serverListUrl: string = "";
    private isNoNetWork: boolean = false;
    private timer: NodeJS.Timeout = null;
    private loadingCallBack: Function = null;

    onLoad() {
        BaseFrameNative.isOpenApp = true;
        this.remindLabel.active = false;
        this.remindNode.active = false;
        // 设置搜索路径
        if (cc.sys.isNative) {
            // jsb.fileUtils.setSearchPaths([]);
            this.addSearchPaths(jsb.fileUtils.getWritablePath());
            this.addSearchPaths(jsb.fileUtils.getWritablePath() + "HotUpdate/");
            let searchPaths = cc.sys.localStorage.getItem('HotUpdateSearchPaths');
            if (searchPaths != null && searchPaths != undefined) {
                // jsb.fileUtils.setSearchPaths(searchPaths);
                searchPaths = JSON.parse(searchPaths);
                console.log("---searchPaths---" + searchPaths);
                for (let index = 0; index < searchPaths.length; index++) {
                    const element = searchPaths[index];
                    this.addSearchPaths(element);
                }
            }
            console.log("---searchPaths---" + jsb.fileUtils.getSearchPaths());
        }
        // loading动画
        let times: number = 0;
        this.tipLabel.string = "Loading..."
        this.loadingCallBack = function () {
            times += 1;
            if (times % 4 == 1) {
                this.tipLabel.string = "Loading"
            } else if (times % 4 == 2) {
                this.tipLabel.string = "Loading."
            } else if (times % 4 == 3) {
                this.tipLabel.string = "Loading.."
            } else if (times % 4 == 0) {
                times = 0;
                this.tipLabel.string = "Loading..."
            }
        }
        this.schedule(this.loadingCallBack, 0.5);
    }

    onEnable() {
        console.log("cc.sys.os == ", cc.sys.os);
        console.log("cc.sys.OS_ANDROID == ", cc.sys.OS_ANDROID);
        let net: string = "";
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            /**获取网络状态 */
            let methodSignature = "()Ljava/lang/String;";
            let method1 = "getNetWorkInfo";
            net = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method1, methodSignature);
            console.log("net === ", net);
        } else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            net = jsb.reflection.callStaticMethod("TSObjectCBridge", "getNetworkType");
        }
        let netArr = net.split("_");
        if (netArr[0] == "-1") {
            this.remindNode.active = true;
            let label = cc.find("updateLabel", this.remindNode);
            let tipStr: string = "网络连接不可用，请检查网络！";
            label.getComponent(cc.Label).string = tipStr;
            this.isNoNetWork = true;
            return;
        }
        
        this.isNoNetWork = false;
        this.serverIndex = 0;
        let dezhou_serverlist = cc.sys.localStorage.getItem("dezhou_serverlist");
        console.log("======="+dezhou_serverlist+"=======");
        if (dezhou_serverlist === undefined || dezhou_serverlist === null) {
            BaseFrameNative.defaultServerList = this.defaultJsonConfig.json;
        } else {
            BaseFrameNative.defaultServerList = JSON.parse(dezhou_serverlist);
            console.log("1======="+BaseFrameNative.defaultServerList+"=======");
        }
        this.homeurlList = this.defaultJsonConfig.json.home_url.split("|");
        this.clientVersion = this.getClientVersion();
        console.log("2======="+this.homeurlList+"=======");
        // this.serverListUrl = cc.sys.localStorage.getItem("dezhou_serverlist_url");
        if (this.serverListUrl == undefined || this.serverListUrl == null) {
            console.log("this.serverListUrl == ", this.serverListUrl);
            this.serverListUrl = "";
        }
        this.remoteServerList();
    }

    onDestroy() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.unscheduleAllCallbacks();
    }

    // 添加搜索路径
    public addSearchPaths(path: string) {
        let pathList = jsb.fileUtils.getSearchPaths();
        for (let index = 0; index < pathList.length; index++) {
            let tempPath = pathList[index];
            if (tempPath == path) {
                return;
            }
        }
        // 没有加到搜索路径
        pathList.unshift(path);
        jsb.fileUtils.setSearchPaths(pathList);
    }

    // 远程加载serverlist
    public remoteServerList() {
        let self = this;
        this.timer = setTimeout(() => {
            console.log("--- time out ---");
            self.loadJsonFail();
            xhr.abort();//请求中止
        }, 3000);
        let callback = function reqListener() {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                if (self.timer) {
                    clearTimeout(self.timer);
                }
                console.log("success");
                if (self.isStringToJson(xhr.response)) {
                    let rsp = JSON.parse(xhr.response);
                    self.loadJsonSuccess(rsp);
                } else {
                    // 是加密数据
                    let rsp = self.JSONDecrypt(xhr.response);
                    if (self.isStringToJson(rsp)) {
                        self.loadJsonSuccess(JSON.parse(rsp));
                    } else {
                        self.remindNode.active = true;
                        let label = cc.find("updateLabel", self.remindNode);
                        let tipStr: string = "拉取配置文件格式错误，请重试！";
                        label.getComponent(cc.Label).string = tipStr;
                        self.isNoNetWork = true;
                    }
                }
            } else if (xhr.readyState == 4 && xhr.status == 404) {
                console.log("fail 404");
                self.loadJsonFail();
            }
        }
        if (this.serverListUrl != "") {
            self.serverIndex = -1;
            self.homeurl = this.serverListUrl;
            this.serverListUrl = "";
        } else {
            self.homeurl = self.homeurlList[self.serverIndex];
        }
        let xhr = new XMLHttpRequest();
        if (cc.sys.isBrowser) {
            xhr.onreadystatechange = function () {
                console.log("xhr == ", xhr);
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    if (self.timer) {
                        clearTimeout(self.timer);
                    }
                    //解析获取到的文本文件，转化成JSON
                    if (self.isStringToJson(xhr.response)) {
                        let rsp = JSON.parse(xhr.response);
                        self.loadJsonSuccess(rsp);
                    } else {
                        // 是加密数据
                        let rsp = self.JSONDecrypt(xhr.response);
                        if (self.isStringToJson(rsp)) {
                            self.loadJsonSuccess(JSON.parse(rsp));
                        } else {
                            self.remindNode.active = true;
                            let label = cc.find("updateLabel", self.remindNode);
                            let tipStr: string = "拉取配置文件格式错误，请重试！";
                            label.getComponent(cc.Label).string = tipStr;
                            self.isNoNetWork = true;
                        }
                    }
                }
            };
            xhr.onerror = function () {
                self.loadJsonFail();
            }
        } else {
            xhr.addEventListener("load", callback);
        }
        console.log("self.homeurl === ", self.homeurl);
        let nowTime = new Date().getTime();
        xhr.open("GET", self.homeurl + "?t=" + nowTime, true);
        xhr.send();
    }

    public isStringToJson(str: string) {
        try {
            if (typeof JSON.parse(str) == "object") {
                return true;
            }
        } catch (e) {

        }
        return false;
    }

    public JSONEncrypt(str: string) {
        // let encrypt = require("encryptjs")
        // let dataString = JSON.stringify(str);
        // let secretkey = 'texas2022'; // 加密密钥
        // let encrypted = encrypt.encrypt(dataString, secretkey, 256);
        // cc.log('原始字符串:' + dataString);
        // cc.log('加密后:' + encrypted);

        let CryptoJS = require("CryptoJS");
        let dataString = JSON.stringify(str);
        let secretkey = 'texas2022'; // 加密密钥
        let encrypted = CryptoJS.AES.encrypt(dataString, secretkey, 256);
        cc.log('原始字符串:' + dataString);
        cc.log('加密后:' + encrypted);
    }

    public JSONDecrypt(str: string) {
        // let encrypt = require("encryptjs")
        // let dataString = JSON.stringify(str);
        // let secretkey = 'texas2022'; // 加密密钥
        // let myString = JSON.parse(encrypt.decrypt(dataString, secretkey, 256));
        // cc.log('原始字符串:' + dataString);
        // cc.log('解密后看看对不对:' + myString);

        let CryptoJS = require("CryptoJS");
        let dataString = str;
        let secretkey = 'texas2022'; // 加密密钥
        let myString = CryptoJS.AES.decrypt(dataString, secretkey, 256);
        myString = myString.toString(CryptoJS.enc.Utf8).toString();
        cc.log('原始字符串:' + dataString);
        cc.log('解密后看看对不对:' + myString);
        // myString = JSON.parse(myString);
        return myString;
    }

    // 加载json成功
    public loadJsonSuccess(rsp) {
        this.unschedule(this.loadingCallBack);
        this.remindLabel.active = false;
        let serverListUrl: string = this.homeurl;
        cc.sys.localStorage.setItem("dezhou_serverlist_url", serverListUrl);
        BaseFrameNative.serverList = rsp;
        BaseFrameNative.defaultServerList = rsp;
        console.log("rsp == ", rsp);
        cc.sys.localStorage.setItem("dezhou_serverlist", JSON.stringify(rsp));
        let nowTime = new Date().getTime();
        cc.sys.localStorage.setItem("dezhou_serverlist_time", nowTime);
        let isNeedDownLoadApp: boolean = this.checkAppVersion(); //对比大版本
        if (isNeedDownLoadApp) {
            this.remindNode.active = true;
            let label = cc.find("updateLabel", this.remindNode);
            let tipStr: string = "检测到有新版本" + this.newVersion + "，请及时更新！";
            label.getComponent(cc.Label).string = tipStr;
            return;
        }
        this.checkVersion();
    }


    //跳转外部浏览器
    public jumpOpenURL() {
        if (this.isNoNetWork) {
            cc.game.restart();
        } else {
            // 跳转到外部浏览器
            let url: string = "";
            if (cc.sys.os = cc.sys.OS_ANDROID) {
                url = BaseFrameNative.serverList.apksite;
            } else if (cc.sys.os = cc.sys.OS_IOS) {
                url = BaseFrameNative.serverList.ipasite;
            }
            cc.sys.openURL(url);
        }
    }

    // 加载json失败
    public loadJsonFail() {
        let self = this;
        self.serverListUrl = "";
        self.serverIndex += 1;
        console.log("--------err--------", self.serverIndex);
        if (self.serverIndex >= self.homeurlList.length) {
            console.log("获取服务器配置失败，请检查网络！");
            // 未拉取到Json 
            // 修改为判断如果有一天内的serverlist也可以进，否则不让进
            let nowTime = new Date().getTime();
            let oldTime = cc.sys.localStorage.getItem("dezhou_serverlist_time");
            let list = cc.sys.localStorage.getItem("dezhou_serverlist");
            // 86400000毫秒 = 24小时
            if ((oldTime == undefined || oldTime == null) || (list == undefined || list == null) || nowTime - oldTime >= 86400000) {
                console.log("本地缓存配置1");
                self.remindNode.active = true;
                let label = cc.find("updateLabel", self.remindNode);
                let tipStr: string = "获取配置文件失败，请重试！";
                label.getComponent(cc.Label).string = tipStr;
                self.isNoNetWork = true;
                cc.sys.localStorage.removeItem("dezhou_serverlist");
                cc.sys.localStorage.removeItem("dezhou_serverlist_time");
                return;
            } else {
                console.log("本地缓存配置2");
                this.loadJsonSuccess(JSON.parse(list));
                return;
            }
        }
        self.remoteServerList();
    }

    // 获取当前客户端的版本号
    public getClientVersion(): string {
        let clientVersion: string = "";
        let localVersion = cc.sys.localStorage.getItem("clientVersion");
        if (localVersion === undefined || localVersion === null) {
            clientVersion = BaseFrameNative.VERSION;
        } else {
            clientVersion = localVersion;
        }
        BaseFrameNative.VERSION = clientVersion;
        return clientVersion;
    }

    /**
     * 对比服务器与本地版本号
     */
    public checkVersion() {
        this.severVersion = this.getHallVersion();
        if (this.severVersion === null) {
            console.log("获取大厅版本信息错误！");
            return;
        }
        console.log("BaseFrameNative.defaultServerList.mastHotUpdate = ", BaseFrameNative.defaultServerList.mastHotUpdate);
        if (BaseFrameNative.defaultServerList.mastHotUpdate) {
            this.gotoUpdate();
            return;
        }

        console.log(`服务器版本：${this.severVersion}` + `客户端版本：${this.clientVersion}`);
        this.oldLabel.string = "当前版本:" + this.clientVersion;
        this.newLabel.string = "最新版本:" + this.severVersion;
        BaseFrameNative.VERSION = this.severVersion;
        let compareResult: boolean = this.versionCompareHandle(this.clientVersion, this.severVersion);
        console.log(compareResult);
        console.log(cc.sys.isNative);
        console.log(BaseFrameNative.isNeedUpdate);
        if (!compareResult || !cc.sys.isNative || !BaseFrameNative.isNeedUpdate) {
            if (!cc.sys.isNative) {
                console.log("浏览器，不需要热更");
            }
            if (!compareResult) {
                console.log("客户端版本大于等于服务器版本，不需要热更");
            }
            this.loadSubpackage(0);
        } else {
            console.log("客户端版本低于服务器版本，需要热更");
            this.gotoUpdate();
        }
    }

    // 去热更新
    public gotoUpdate() {
        // cc.director.loadScene("dlc");
        // this.hotUpdateNode.active = true;
        HotUpdateManager.instance.checkUpdate(this.redirectToLogin.bind(this), this);
    }

    // 去登录
    public redirectToLogin() {
        // 预加载资源包
        this.loadScene("gameHall", "login");
    }

    public loadScene(abname: string, scenename: string): void {
        let oldab = cc.assetManager.getBundle(abname);
        if (oldab == null) {
            cc.assetManager.loadBundle(abname, (err, bundle) => {
                if (err) {
                    console.error(abname + " load fail.");
                    return;
                }
                console.log("loadSubpackage success name == " + abname);
                bundle.loadScene(scenename, (err, sceneAsset) => {
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
            oldab.loadScene(scenename, (err, sceneAsset) => {
                if (err) {
                    console.error(abname + " load fail." + scenename);
                    return;
                }
                console.log(sceneAsset + " sceneName:" + scenename);
                cc.director.runScene(sceneAsset);
            });
        }
    }

    //加载分包
    public loadSubpackage(index: number) {
        let self = this;
        let name = self.loadSubpackageName[index];
        cc.assetManager.loadBundle(name, (err, bundle) => {
            if (err) {
                return console.error(err);
            }
            console.log("loadSubpackage : " + name + " successfully.");
            if (index + 1 >= self.loadSubpackageName.length) {
                //加载完成
                self.loadSubpackageEnd();
            } else {
                self.loadSubpackage(index + 1);
            }
        });
    }

    //加载完成
    public loadSubpackageEnd() {
        this.redirectToLogin();
    }

    // 获取大厅版本信息
    public getHallVersion() {
        let list = BaseFrameNative.serverList.gamereslist;
        for (let index = 0; index < list.length; index++) {
            let data = list[index];
            console.log(data);
            if (data.id == 0) {
                return data.version;
            }
        }
        return null;
    }

    // 版本检查 比较方法versionA旧  versionB新
    public versionCompareHandle(versionA: string, versionB: string): boolean {
        if (versionA == null || versionB == null) return false;
        let vA = versionA.split(".");
        let vB = versionB.split(".");
        for (let i = 0; i < vA.length; ++i) {
            let a = parseInt(vA[i]);
            let b = parseInt(vB[i]);
            if (a === b) {
                continue;
            } else {
                return b - a > 0;
            }
        }
        if (vB.length > vA.length) {
            return true;
        } else {
            return false;
        }
    }

    // 判断是否需要强制更新大版本
    public checkAppVersion(): boolean {
        if (!BaseFrameNative.serverList) return false;
        let nowVersion = "";
        let oldVersion = MgrNative.getInstance().getAppVersion();
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            nowVersion = BaseFrameNative.serverList.AppVersion;
        } else if (cc.sys.os == cc.sys.OS_IOS) {
            nowVersion = BaseFrameNative.serverList.IpaVersion;
        }
        console.log("nowVersion ==", nowVersion);
        console.log("oldVersion ==", oldVersion);
        this.newVersion = nowVersion;
        let compareResult: boolean = this.versionCompareHandle(oldVersion, nowVersion);
        return compareResult;
    }
}

"use strict";
cc._RF.push(module, '2ad6f30UmVCZKWyYtFSG/Rq', 'GameUpdateMgr');
// GameHall/script/GameUpdateMgr.ts

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
var BaseFrameNative_1 = require("../../Script/BaseFrameNative");
var jsb = window.jsb;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUpdateMgr = /** @class */ (function (_super) {
    __extends(GameUpdateMgr, _super);
    function GameUpdateMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._updateName = "";
        _this._updating = false;
        _this._canRetry = false;
        _this._storagePath = '';
        _this._am = null;
        _this._updateListener = null;
        _this.versionCompareHandle = null;
        _this._isUpdate = null;
        _this._progressCallBack = null;
        _this._updateFail = null;
        _this.commonView = null;
        return _this;
    }
    GameUpdateMgr_1 = GameUpdateMgr;
    Object.defineProperty(GameUpdateMgr, "instance", {
        get: function () {
            this.manager = null;
            if (this.manager == null) {
                this.manager = new GameUpdateMgr_1();
                this.manager.onLoad();
            }
            return this.manager;
        },
        enumerable: false,
        configurable: true
    });
    GameUpdateMgr.prototype.checkCb = function (event) {
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.showTip("未找到本地配置文件，热更新失败！");
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                // this.showTip("下载更新配置文件失败！");
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log("已经更新到最新的远程版本！");
                // 最新 不需要更新
                this._updating = false;
                if (this._updateListener) {
                    this._updateListener();
                }
                if (this._isUpdate) {
                    this._isUpdate(false);
                }
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                console.log("this._am.getTotalBytes() == ", this._am.getTotalBytes());
                if (this._isUpdate) { // 检测是否需要更新
                    var isudpate = this._am.getTotalBytes() != 0; // =0 不需要更新
                    this._isUpdate(isudpate);
                }
                else {
                    this._am.setEventCallback(null);
                    this._updating = false;
                    this.hotUpdate();
                }
                break;
            default:
                return;
        }
    };
    GameUpdateMgr.prototype.updateCb = function (event) {
        var failed = false;
        var compelete = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                // this.showTip('没有找到本地配置文件，跳过热更新！');
                console.log('没有找到本地配置文件，跳过热更新！');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                console.log(event.getDownloadedFiles() + ' / ' + event.getTotalFiles());
                console.log(event.getDownloadedBytes() + ' / ' + event.getTotalBytes());
                var percent = event.getDownloadedBytes() / event.getTotalBytes();
                if (this._progressCallBack) {
                    this._progressCallBack(Math.floor(event.getDownloadedBytes() / 1024), Math.floor(event.getTotalBytes() / 1024));
                }
                else {
                    this.showTip('下载中: ' + Math.floor(percent * 100) + "%");
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                // this.showTip('无法下载manifest文件，热更新跳过！');
                console.log('无法下载manifest文件，热更新跳过！');
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                // this.showTip('已经更新到最新的版本！');
                console.log('已经更新到最新的版本！');
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                console.log('jsb.EventAssetsManager.UPDATE_FINISHED');
                if (!this._progressCallBack) {
                    this.showTip('更新完成！ ' + event.getMessage());
                }
                compelete = true;
                this._am.setEventCallback(null);
                this._updateListener = null;
                this._updating = false;
                this._progressCallBack = null;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.showTip('更新失败！！！');
                this._updating = false;
                this._canRetry = true;
                failed = true;
                // 重新下载
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                failed = true;
                this.showTip('更新失败！');
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                failed = true;
                this.showTip(event.getMessage());
                break;
            default:
                break;
        }
        if (failed) {
            this._am.setEventCallback(null);
            this._updateListener = null;
            this._updating = false;
            if (this._updateFail) {
                this._updateFail();
                this._updateFail = null;
            }
        }
        if (compelete) {
            var remoteVersion = this._am.getLocalManifest().getVersion();
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            Array.prototype.unshift.apply(searchPaths, newPaths);
            for (var index = 0; index < searchPaths.length; index++) {
                var element = searchPaths[index];
                this.addSearchPaths(element);
            }
            searchPaths = jsb.fileUtils.getSearchPaths();
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            console.log("\u6E38\u620F\u66F4\u65B0\u5B8C\u6210\uFF01");
            console.log(this._updateName + "_version === " + remoteVersion);
            for (var index = 0; index < searchPaths.length; index++) {
                var element = searchPaths[index];
                console.log("element searchPaths === " + element);
            }
            cc.sys.localStorage.setItem(this._updateName + "_version", remoteVersion);
            jsb.fileUtils.setSearchPaths(searchPaths);
        }
    };
    // 添加搜索路径
    GameUpdateMgr.prototype.addSearchPaths = function (path) {
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
    GameUpdateMgr.prototype.loadCustomManifest = function () {
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var customManifestStr = "";
            var manifestUrl = this.getGameManifest(this._updateName);
            if (jsb.fileUtils.isFileExist(manifestUrl)) {
                //存在版本控制文件 
                customManifestStr = jsb.fileUtils.getStringFromFile(manifestUrl);
            }
            else {
                var url = BaseFrameNative_1.BaseFrameNative.serverList.hotupdate_url; //"http://129.204.109.218:88/dlc";
                customManifestStr = JSON.stringify({
                    "packageUrl": url,
                    "remoteManifestUrl": url + "/Games/" + this._updateName + "/project.manifest",
                    "remoteVersionUrl": url + "/Games/" + this._updateName + "/version.manifest",
                    "version": "1.0.0",
                    "assets": {},
                    "searchPaths": []
                });
            }
            var manifest = new jsb.Manifest(customManifestStr, this._storagePath);
            this._am.loadLocalManifest(manifest, this._storagePath);
        }
    };
    /**
     * @description 获取子游戏manifest url
     * @param gameName 子游戏名
     * @returns manifest url
     */
    GameUpdateMgr.prototype.getGameManifest = function (gameName) {
        var manifestRoot = "";
        manifestRoot = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "Games/";
        return "" + manifestRoot + gameName + "/project.manifest";
    };
    GameUpdateMgr.prototype.retry = function () {
        if (!this._updating && this._canRetry) {
            this._canRetry = false;
            this.showTip("Retry failed Assets...");
            this._am.downloadFailedAssets();
        }
    };
    /**
     *
     * @param name  需要更新的大厅或者游戏名字
     * @param callback  检测到已是最新的回调
     * @param commonview   commonview类
     * @param isupdate  检测子游戏是否有更新
     * @param progressCallBack   子游戏的进度回调
     * @param updateFail   子游戏更新失败的回调
     */
    GameUpdateMgr.prototype.checkUpdate = function (name, callback, commonview, isupdate, progressCallBack, updateFail) {
        console.log("this.name == ", name);
        console.log("this._updating == ", this._updating);
        if (this._updating) {
            this.showTip("检测更新中...");
            return;
        }
        this.commonView = commonview;
        this._updateName = name;
        this._updateListener = callback;
        this._isUpdate = isupdate;
        this._progressCallBack = progressCallBack;
        this._updateFail = updateFail;
        this._updating = true;
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'Games/' + name + '/');
        this.loadCustomManifest();
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            this.showTip("加载本地配置失败...");
            return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));
        this._am.checkUpdate();
    };
    GameUpdateMgr.prototype.hotUpdate = function () {
        if (this._am && !this._updating) {
            this._updating = true;
            this._am.setEventCallback(this.updateCb.bind(this));
            // if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            //     var url = this.manifestUrl.nativeUrl;
            //     this._am.loadLocalManifest(url);
            // }
            this.loadCustomManifest();
            this._am.update();
        }
        else {
            this.showTip("游戏更新中... ");
        }
    };
    GameUpdateMgr.prototype.showTip = function (tip) {
        this.commonView.ShowTip(tip);
    };
    GameUpdateMgr.prototype.show = function () {
        // if (this.updateUI.active === false) {
        //     this.updateUI.active = true;
        // }
    };
    // use this for initialization
    GameUpdateMgr.prototype.onLoad = function () {
        if (!jsb) {
            return;
        }
        this.versionCompareHandle = function (versionA, versionB) {
            console.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || '0');
                if (a === b) {
                    continue;
                }
                else {
                    return a - b;
                }
            }
            if (vB.length > vA.length) {
                return -1;
            }
            else {
                return 0;
            }
        };
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'HotUpdate/');
        // Init with empty manifest url for testing custom manifest
        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);
        // Setup the verification callback, but we don't have md5 check function yet, so only print some message
        // Return true if the verification passed, otherwise return false
        this._am.setVerifyCallback(function (path, asset) {
            // 暂时不验证 JS校验太慢 要报错
            // // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            // var compressed = asset.compressed;
            // // Retrieve the correct md5 value.
            // var expectedMD5 = asset.md5;
            // // asset.path is relative path and path is absolute.
            // var relativePath = asset.path;
            // // The size of asset file, but this value could be absent.
            // var size = asset.size;
            // if (compressed) {
            // this.ShowTip("Verification passed : " + relativePath);
            //     return true;
            // }
            // else {
            // this.ShowTip("Verification passed : " + relativePath + ' (' + expectedMD5 + ')');
            //     return true;
            // }
            return true;
        });
        // this.showTip('Hot update is ready, please check or directly update.');
    };
    GameUpdateMgr.prototype.onDestroy = function () {
        if (this._updateListener) {
            this._am.setEventCallback(null);
            this._updateListener = null;
        }
    };
    var GameUpdateMgr_1;
    GameUpdateMgr.manager = null;
    GameUpdateMgr = GameUpdateMgr_1 = __decorate([
        ccclass
    ], GameUpdateMgr);
    return GameUpdateMgr;
}(cc.Component));
exports.default = GameUpdateMgr;

cc._RF.pop();
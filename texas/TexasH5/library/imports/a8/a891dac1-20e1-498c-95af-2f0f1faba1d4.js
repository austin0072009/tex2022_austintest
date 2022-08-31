"use strict";
cc._RF.push(module, 'a891drBIOFJjJWvLw8fq6HU', 'HotUpdateManager');
// Script/HotUpdateManager.ts

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
var BaseFrameNative_1 = require("./BaseFrameNative");
var jsb = window.jsb;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HotUpdateManager = /** @class */ (function (_super) {
    __extends(HotUpdateManager, _super);
    function HotUpdateManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._hallManifestAsset = "";
        _this._appLoad = null;
        _this._storagePath = '';
        _this._updateListener = null;
        _this._am = null;
        _this.versionCompareHandle = null;
        return _this;
    }
    HotUpdateManager_1 = HotUpdateManager;
    Object.defineProperty(HotUpdateManager, "instance", {
        get: function () {
            this.manager = null;
            if (this.manager == null) {
                this.manager = new HotUpdateManager_1();
                this.manager.onLoad();
            }
            return this.manager;
        },
        enumerable: false,
        configurable: true
    });
    HotUpdateManager.prototype.checkCb = function (event) {
        var _this = this;
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
                if (this._updateListener) {
                    this._updateListener();
                }
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                // 大厅 不提示 直接更新
                console.log("this._am.getTotalBytes() == ", this._am.getTotalBytes());
                if (this._am.getTotalBytes() == 0) {
                    if (this._updateListener) {
                        this._updateListener();
                    }
                    return;
                }
                this._am.setEventCallback(null);
                setTimeout(function () {
                    _this.hotUpdate();
                }, 200);
                break;
            default:
                return;
        }
    };
    HotUpdateManager.prototype.updateCb = function (event) {
        var failed = false;
        var compelete = false;
        console.log("event.getEventCode() === ", event.getEventCode());
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
                var progress1 = Math.floor(event.getDownloadedBytes() / 1024) + 'kb';
                var progress2 = Math.floor(event.getTotalBytes() / 1024) + "kb";
                this.showTip('下载中: ' + progress1 + "/" + progress2);
                if (isNaN(percent)) {
                    percent = 0;
                }
                this._appLoad.percentLabel.string = Math.floor(percent * 100) + "%";
                this._appLoad.percentNode.width = 1000 * percent;
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
                compelete = true;
                this._am.setEventCallback(null);
                this._updateListener = null;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.showTip('更新失败！！！');
                console.log('Asset update error UPDATE_FAILED: ' + event.getAssetId() + ', ' + event.getMessage());
                failed = true;
                // 重新下载
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                failed = true;
                console.log('Asset update error ERROR_UPDATING: ' + event.getAssetId() + ', ' + event.getMessage());
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
            // Prepend the manifest's search path
            // var searchPaths = jsb.fileUtils.getSearchPaths();
            // var newPaths = this._am.getLocalManifest().getSearchPaths();
            // console.log(JSON.stringify(newPaths));
            // Array.prototype.unshift.apply(searchPaths, newPaths);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
            // cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            // jsb.fileUtils.setSearchPaths(searchPaths);
            console.log("remoteVersion: " + remoteVersion);
            // 热更新成功
            BaseFrameNative_1.BaseFrameNative.VERSION = remoteVersion;
            cc.sys.localStorage.setItem("clientVersion", remoteVersion);
            // restart game.
            this.showTip("重启游戏！");
            setTimeout(function () {
                cc.game.restart();
            }, 1000);
        }
    };
    // 添加搜索路径
    HotUpdateManager.prototype.addSearchPaths = function (path) {
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
    HotUpdateManager.prototype.loadCustomManifest = function () {
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var customManifestStr = "";
            var manifestUrl = this.getGameManifest();
            if (jsb.fileUtils.isFileExist(manifestUrl)) {
                //存在版本控制文件 
                customManifestStr = jsb.fileUtils.getStringFromFile(manifestUrl);
            }
            else {
                var url = BaseFrameNative_1.BaseFrameNative.serverList.hotupdate_url;
                if (this._hallManifestAsset != "") {
                    customManifestStr = this._hallManifestAsset;
                    console.log("this._texasManifestAsset === ", this._hallManifestAsset);
                }
                else {
                    customManifestStr = JSON.stringify({
                        "packageUrl": url,
                        "remoteManifestUrl": url + "/manifest/project.manifest",
                        "remoteVersionUrl": url + "/manifest/version.manifest",
                        "version": "1.0.0",
                        "assets": {},
                        "searchPaths": []
                    });
                }
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
    HotUpdateManager.prototype.getGameManifest = function () {
        var manifestRoot = "";
        manifestRoot = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "HotUpdate/manifest/";
        return manifestRoot + "/project.manifest";
    };
    /**
     *
     * @param callback  检测到已是最新的回调
     * @param appload   appLoad类，isHall为true才需要
     */
    HotUpdateManager.prototype.checkUpdate = function (callback, appload) {
        var _this = this;
        this._updateListener = callback;
        this._appLoad = appload;
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'HotUpdate/');
        // this.loadCustomManifest();
        // if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
        //     this.showTip("加载本地配置失败...");
        //     return;
        // }
        // this._am.setEventCallback(this.checkCb.bind(this));
        // this._am.checkUpdate();
        cc.resources.load("HallManifest/project", jsb.Manifest, function (err, manifest) {
            var manifest1 = manifest;
            _this._hallManifestAsset = manifest1._nativeAsset;
            _this.loadCustomManifest();
            if (!_this._am.getLocalManifest() || !_this._am.getLocalManifest().isLoaded()) {
                _this.showTip("加载本地配置失败...");
                return;
            }
            _this._am.setEventCallback(_this.checkCb.bind(_this));
            _this._am.checkUpdate();
        });
    };
    HotUpdateManager.prototype.hotUpdate = function () {
        if (this._am) {
            this._am.setEventCallback(this.updateCb.bind(this));
            this.loadCustomManifest();
            this._am.update();
        }
        else {
            this.showTip("游戏更新中... ");
        }
    };
    HotUpdateManager.prototype.showTip = function (tip) {
        this._appLoad.tipLabel.string = tip;
    };
    HotUpdateManager.prototype.show = function () {
        // if (this.updateUI.active === false) {
        //     this.updateUI.active = true;
        // }
    };
    // use this for initialization
    HotUpdateManager.prototype.onLoad = function () {
        // Hot update is only available in Native build
        if (!jsb) {
            return;
        }
        console.log("--- HotUpdate onLoad ---");
        // Setup your own version compare handler, versionA and B is versions in string
        // if the return value greater than 0, versionA is greater than B,
        // if the return value equals 0, versionA equals to B,
        // if the return value smaller than 0, versionA is smaller than B.
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
    HotUpdateManager.prototype.onDestroy = function () {
        if (this._updateListener) {
            this._am.setEventCallback(null);
            this._updateListener = null;
        }
    };
    var HotUpdateManager_1;
    HotUpdateManager.manager = null;
    HotUpdateManager = HotUpdateManager_1 = __decorate([
        ccclass
    ], HotUpdateManager);
    return HotUpdateManager;
}(cc.Component));
exports.default = HotUpdateManager;

cc._RF.pop();
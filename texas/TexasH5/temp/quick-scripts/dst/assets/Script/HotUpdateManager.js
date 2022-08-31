
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/HotUpdateManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIb3RVcGRhdGVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUVwRCxJQUFNLEdBQUcsR0FBUyxNQUFPLENBQUMsR0FBRyxDQUFDO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBc1VDO1FBMVRXLHdCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUVoQyxjQUFRLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQzFCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFNBQUcsR0FBc0IsSUFBSyxDQUFDO1FBQy9CLDBCQUFvQixHQUFtRCxJQUFLLENBQUM7O0lBb1R6RixDQUFDO3lCQXRVb0IsZ0JBQWdCO0lBR2pDLHNCQUFrQiw0QkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxrQkFBZ0IsRUFBRSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBVUQsa0NBQU8sR0FBUCxVQUFRLEtBQVU7UUFBbEIsaUJBaUNDO1FBaENHLFFBQVEsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQzFCLEtBQUssR0FBRyxDQUFDLGtCQUFrQixDQUFDLHVCQUF1QjtnQkFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxH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QUMsQ0FBQztRQUNuRix3R0FBd0c7UUFDeEcsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxJQUFZLEVBQUUsS0FBVTtZQUN6RCxtQkFBbUI7WUFDbkIsbUdBQW1HO1lBQ25HLHFDQUFxQztZQUNyQyxxQ0FBcUM7WUFDckMsK0JBQStCO1lBQy9CLHVEQUF1RDtZQUN2RCxpQ0FBaUM7WUFDakMsNkRBQTZEO1lBQzdELHlCQUF5QjtZQUN6QixvQkFBb0I7WUFDcEIseURBQXlEO1lBQ3pELG1CQUFtQjtZQUNuQixJQUFJO1lBQ0osU0FBUztZQUNULG9GQUFvRjtZQUNwRixtQkFBbUI7WUFDbkIsSUFBSTtZQUNKLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gseUVBQXlFO0lBQzdFLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDL0I7SUFDTCxDQUFDOztJQXBVYyx3QkFBTyxHQUFxQixJQUFJLENBQUM7SUFEL0IsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FzVXBDO0lBQUQsdUJBQUM7Q0F0VUQsQUFzVUMsQ0F0VTZDLEVBQUUsQ0FBQyxTQUFTLEdBc1V6RDtrQkF0VW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuL0Jhc2VGcmFtZU5hdGl2ZVwiO1xuXG5jb25zdCBqc2IgPSAoPGFueT53aW5kb3cpLmpzYjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvdFVwZGF0ZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgc3RhdGljIG1hbmFnZXI6IEhvdFVwZGF0ZU1hbmFnZXIgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSG90VXBkYXRlTWFuYWdlciB7XG4gICAgICAgIHRoaXMubWFuYWdlciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLm1hbmFnZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyID0gbmV3IEhvdFVwZGF0ZU1hbmFnZXIoKTtcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci5vbkxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbGxNYW5pZmVzdEFzc2V0OiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgcHJpdmF0ZSBfYXBwTG9hZDogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIF9zdG9yYWdlUGF0aDogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfdXBkYXRlTGlzdGVuZXIgPSBudWxsO1xuICAgIHByaXZhdGUgX2FtOiBqc2IuQXNzZXRzTWFuYWdlciA9IG51bGwhO1xuICAgIHByaXZhdGUgdmVyc2lvbkNvbXBhcmVIYW5kbGU6ICh2ZXJzaW9uQTogc3RyaW5nLCB2ZXJzaW9uQjogc3RyaW5nKSA9PiBudW1iZXIgPSBudWxsITtcblxuICAgIGNoZWNrQ2IoZXZlbnQ6IGFueSkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmdldEV2ZW50Q29kZSgpKSB7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfTk9fTE9DQUxfTUFOSUZFU1Q6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwKFwi5pyq5om+5Yiw5pys5Zyw6YWN572u5paH5Lu277yM54Ot5pu05paw5aSx6LSl77yBXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX0RPV05MT0FEX01BTklGRVNUOlxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX1BBUlNFX01BTklGRVNUOlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd1RpcChcIuS4i+i9veabtOaWsOmFjee9ruaWh+S7tuWksei0pe+8gVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5BTFJFQURZX1VQX1RPX0RBVEU6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlt7Lnu4/mm7TmlrDliLDmnIDmlrDnmoTov5znqIvniYjmnKzvvIFcIik7XG4gICAgICAgICAgICAgICAgLy8g5pyA5pawIOS4jemcgOimgeabtOaWsFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl91cGRhdGVMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5ORVdfVkVSU0lPTl9GT1VORDpcbiAgICAgICAgICAgICAgICAvLyDlpKfljoUg5LiN5o+Q56S6IOebtOaOpeabtOaWsFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5fYW0uZ2V0VG90YWxCeXRlcygpID09IFwiLCB0aGlzLl9hbS5nZXRUb3RhbEJ5dGVzKCkpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbS5nZXRUb3RhbEJ5dGVzKCkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwhKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3RVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDYihldmVudDogYW55KSB7XG4gICAgICAgIHZhciBmYWlsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNvbXBlbGV0ZSA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50LmdldEV2ZW50Q29kZSgpID09PSBcIiwgZXZlbnQuZ2V0RXZlbnRDb2RlKCkpO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmdldEV2ZW50Q29kZSgpKSB7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfTk9fTE9DQUxfTUFOSUZFU1Q6XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93VGlwKCfmsqHmnInmib7liLDmnKzlnLDphY3nva7mlofku7bvvIzot7Pov4fng63mm7TmlrDvvIEnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5rKh5pyJ5om+5Yiw5pys5Zyw6YWN572u5paH5Lu277yM6Lez6L+H54Ot5pu05paw77yBJyk7XG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5VUERBVEVfUFJPR1JFU1NJT046XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZ2V0RG93bmxvYWRlZEZpbGVzKCkgKyAnIC8gJyArIGV2ZW50LmdldFRvdGFsRmlsZXMoKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuZ2V0RG93bmxvYWRlZEJ5dGVzKCkgKyAnIC8gJyArIGV2ZW50LmdldFRvdGFsQnl0ZXMoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHBlcmNlbnQ6IG51bWJlciA9IGV2ZW50LmdldERvd25sb2FkZWRCeXRlcygpIC8gZXZlbnQuZ2V0VG90YWxCeXRlcygpO1xuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzczEgPSBNYXRoLmZsb29yKGV2ZW50LmdldERvd25sb2FkZWRCeXRlcygpIC8gMTAyNCkgKyAna2InO1xuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzczIgPSBNYXRoLmZsb29yKGV2ZW50LmdldFRvdGFsQnl0ZXMoKSAvIDEwMjQpICsgXCJrYlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpcCgn5LiL6L295LitOiAnICsgcHJvZ3Jlc3MxICsgXCIvXCIgKyBwcm9ncmVzczIpO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTihwZXJjZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBwZXJjZW50ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwTG9hZC5wZXJjZW50TGFiZWwuc3RyaW5nID0gTWF0aC5mbG9vcihwZXJjZW50ICogMTAwKSArIFwiJVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FwcExvYWQucGVyY2VudE5vZGUud2lkdGggPSAxMDAwICogcGVyY2VudDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9ET1dOTE9BRF9NQU5JRkVTVDpcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9QQVJTRV9NQU5JRkVTVDpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dUaXAoJ+aXoOazleS4i+i9vW1hbmlmZXN05paH5Lu277yM54Ot5pu05paw6Lez6L+H77yBJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aXoOazleS4i+i9vW1hbmlmZXN05paH5Lu277yM54Ot5pu05paw6Lez6L+H77yBJyk7XG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5BTFJFQURZX1VQX1RPX0RBVEU6XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93VGlwKCflt7Lnu4/mm7TmlrDliLDmnIDmlrDnmoTniYjmnKzvvIEnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5bey57uP5pu05paw5Yiw5pyA5paw55qE54mI5pys77yBJyk7XG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5VUERBVEVfRklOSVNIRUQ6XG4gICAgICAgICAgICAgICAgY29tcGVsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwhKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXAoJ+abtOaWsOWksei0pe+8ge+8ge+8gScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBc3NldCB1cGRhdGUgZXJyb3IgVVBEQVRFX0ZBSUxFRDogJyArIGV2ZW50LmdldEFzc2V0SWQoKSArICcsICcgKyBldmVudC5nZXRNZXNzYWdlKCkpO1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8g6YeN5paw5LiL6L29XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfVVBEQVRJTkc6XG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXNzZXQgdXBkYXRlIGVycm9yIEVSUk9SX1VQREFUSU5HOiAnICsgZXZlbnQuZ2V0QXNzZXRJZCgpICsgJywgJyArIGV2ZW50LmdldE1lc3NhZ2UoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwKCfmm7TmlrDlpLHotKXvvIEnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9ERUNPTVBSRVNTOlxuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwKGV2ZW50LmdldE1lc3NhZ2UoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZhaWxlZCkge1xuICAgICAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayhudWxsISk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcGVsZXRlKSB7XG4gICAgICAgICAgICBsZXQgcmVtb3RlVmVyc2lvbjogc3RyaW5nID0gdGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpLmdldFZlcnNpb24oKTtcblxuICAgICAgICAgICAgdmFyIHNlYXJjaFBhdGhzID0ganNiLmZpbGVVdGlscy5nZXRTZWFyY2hQYXRocygpO1xuICAgICAgICAgICAgdmFyIG5ld1BhdGhzID0gdGhpcy5fYW0uZ2V0TG9jYWxNYW5pZmVzdCgpLmdldFNlYXJjaFBhdGhzKCk7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShzZWFyY2hQYXRocywgbmV3UGF0aHMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlYXJjaFBhdGhzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzZWFyY2hQYXRoc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTZWFyY2hQYXRocyhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlYXJjaFBhdGhzID0ganNiLmZpbGVVdGlscy5nZXRTZWFyY2hQYXRocygpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIb3RVcGRhdGVTZWFyY2hQYXRocycsIEpTT04uc3RyaW5naWZ5KHNlYXJjaFBhdGhzKSk7XG5cbiAgICAgICAgICAgIC8vIFByZXBlbmQgdGhlIG1hbmlmZXN0J3Mgc2VhcmNoIHBhdGhcbiAgICAgICAgICAgIC8vIHZhciBzZWFyY2hQYXRocyA9IGpzYi5maWxlVXRpbHMuZ2V0U2VhcmNoUGF0aHMoKTtcbiAgICAgICAgICAgIC8vIHZhciBuZXdQYXRocyA9IHRoaXMuX2FtLmdldExvY2FsTWFuaWZlc3QoKS5nZXRTZWFyY2hQYXRocygpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobmV3UGF0aHMpKTtcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KHNlYXJjaFBhdGhzLCBuZXdQYXRocyk7XG4gICAgICAgICAgICAvLyBUaGlzIHZhbHVlIHdpbGwgYmUgcmV0cmlldmVkIGFuZCBhcHBlbmRlZCB0byB0aGUgZGVmYXVsdCBzZWFyY2ggcGF0aCBkdXJpbmcgZ2FtZSBzdGFydHVwLFxuICAgICAgICAgICAgLy8gcGxlYXNlIHJlZmVyIHRvIHNhbXBsZXMvanMtdGVzdHMvbWFpbi5qcyBmb3IgZGV0YWlsZWQgdXNhZ2UuXG4gICAgICAgICAgICAvLyAhISEgUmUtYWRkIHRoZSBzZWFyY2ggcGF0aHMgaW4gbWFpbi5qcyBpcyB2ZXJ5IGltcG9ydGFudCwgb3RoZXJ3aXNlLCBuZXcgc2NyaXB0cyB3b24ndCB0YWtlIGVmZmVjdC5cbiAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSG90VXBkYXRlU2VhcmNoUGF0aHMnLCBKU09OLnN0cmluZ2lmeShzZWFyY2hQYXRocykpO1xuICAgICAgICAgICAgLy8ganNiLmZpbGVVdGlscy5zZXRTZWFyY2hQYXRocyhzZWFyY2hQYXRocyk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGByZW1vdGVWZXJzaW9uOiAke3JlbW90ZVZlcnNpb259YCk7XG4gICAgICAgICAgICAvLyDng63mm7TmlrDmiJDlip9cbiAgICAgICAgICAgIEJhc2VGcmFtZU5hdGl2ZS5WRVJTSU9OID0gcmVtb3RlVmVyc2lvbjtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNsaWVudFZlcnNpb25cIiwgcmVtb3RlVmVyc2lvbik7XG4gICAgICAgICAgICAvLyByZXN0YXJ0IGdhbWUuXG4gICAgICAgICAgICB0aGlzLnNob3dUaXAoXCLph43lkK/muLjmiI/vvIFcIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmt7vliqDmkJzntKLot6/lvoRcbiAgICBwdWJsaWMgYWRkU2VhcmNoUGF0aHMocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwYXRoTGlzdCA9IGpzYi5maWxlVXRpbHMuZ2V0U2VhcmNoUGF0aHMoKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhdGhMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IHRlbXBQYXRoID0gcGF0aExpc3RbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHRlbXBQYXRoID09IHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5rKh5pyJ5Yqg5Yiw5pCc57Si6Lev5b6EXG4gICAgICAgIHBhdGhMaXN0LnVuc2hpZnQocGF0aCk7XG4gICAgICAgIGpzYi5maWxlVXRpbHMuc2V0U2VhcmNoUGF0aHMocGF0aExpc3QpO1xuICAgIH1cblxuICAgIGxvYWRDdXN0b21NYW5pZmVzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FtLmdldFN0YXRlKCkgPT09IGpzYi5Bc3NldHNNYW5hZ2VyLlN0YXRlLlVOSU5JVEVEKSB7XG4gICAgICAgICAgICBsZXQgY3VzdG9tTWFuaWZlc3RTdHI6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbWFuaWZlc3RVcmwgPSB0aGlzLmdldEdhbWVNYW5pZmVzdCgpO1xuICAgICAgICAgICAgaWYgKGpzYi5maWxlVXRpbHMuaXNGaWxlRXhpc3QobWFuaWZlc3RVcmwpKSB7XG4gICAgICAgICAgICAgICAgLy/lrZjlnKjniYjmnKzmjqfliLbmlofku7YgXG4gICAgICAgICAgICAgICAgY3VzdG9tTWFuaWZlc3RTdHIgPSBqc2IuZmlsZVV0aWxzLmdldFN0cmluZ0Zyb21GaWxlKG1hbmlmZXN0VXJsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJMaXN0LmhvdHVwZGF0ZV91cmw7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhbGxNYW5pZmVzdEFzc2V0ICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tTWFuaWZlc3RTdHIgPSB0aGlzLl9oYWxsTWFuaWZlc3RBc3NldDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLl90ZXhhc01hbmlmZXN0QXNzZXQgPT09IFwiLCB0aGlzLl9oYWxsTWFuaWZlc3RBc3NldCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tTWFuaWZlc3RTdHIgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhY2thZ2VVcmxcIjogdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZW1vdGVNYW5pZmVzdFVybFwiOiB1cmwgKyBcIi9tYW5pZmVzdC9wcm9qZWN0Lm1hbmlmZXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbW90ZVZlcnNpb25VcmxcIjogdXJsICsgXCIvbWFuaWZlc3QvdmVyc2lvbi5tYW5pZmVzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiMS4wLjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXNzZXRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlYXJjaFBhdGhzXCI6IFtdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbWFuaWZlc3QgPSBuZXcganNiLk1hbmlmZXN0KGN1c3RvbU1hbmlmZXN0U3RyLCB0aGlzLl9zdG9yYWdlUGF0aCk7XG4gICAgICAgICAgICB0aGlzLl9hbS5sb2FkTG9jYWxNYW5pZmVzdChtYW5pZmVzdCwgdGhpcy5fc3RvcmFnZVBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+WPluWtkOa4uOaIj21hbmlmZXN0IHVybFxuICAgICAqIEBwYXJhbSBnYW1lTmFtZSDlrZDmuLjmiI/lkI1cbiAgICAgKiBAcmV0dXJucyBtYW5pZmVzdCB1cmxcbiAgICAgKi9cbiAgICBnZXRHYW1lTWFuaWZlc3QoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IG1hbmlmZXN0Um9vdDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgbWFuaWZlc3RSb290ID0gKGpzYi5maWxlVXRpbHMgPyBqc2IuZmlsZVV0aWxzLmdldFdyaXRhYmxlUGF0aCgpIDogXCIvXCIpICsgXCJIb3RVcGRhdGUvbWFuaWZlc3QvXCI7XG4gICAgICAgIHJldHVybiBgJHttYW5pZmVzdFJvb3R9L3Byb2plY3QubWFuaWZlc3RgO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAg5qOA5rWL5Yiw5bey5piv5pyA5paw55qE5Zue6LCDXG4gICAgICogQHBhcmFtIGFwcGxvYWQgICBhcHBMb2Fk57G777yMaXNIYWxs5Li6dHJ1ZeaJjemcgOimgVxuICAgICAqL1xuICAgIGNoZWNrVXBkYXRlKGNhbGxiYWNrOiBGdW5jdGlvbiwgYXBwbG9hZDogYW55KSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuX2FwcExvYWQgPSBhcHBsb2FkO1xuICAgICAgICB0aGlzLl9zdG9yYWdlUGF0aCA9ICgoanNiLmZpbGVVdGlscyA/IGpzYi5maWxlVXRpbHMuZ2V0V3JpdGFibGVQYXRoKCkgOiAnLycpICsgJ0hvdFVwZGF0ZS8nKTtcbiAgICAgICAgLy8gdGhpcy5sb2FkQ3VzdG9tTWFuaWZlc3QoKTtcbiAgICAgICAgLy8gaWYgKCF0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkgfHwgIXRoaXMuX2FtLmdldExvY2FsTWFuaWZlc3QoKS5pc0xvYWRlZCgpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnNob3dUaXAoXCLliqDovb3mnKzlnLDphY3nva7lpLHotKUuLi5cIik7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayh0aGlzLmNoZWNrQ2IuYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIHRoaXMuX2FtLmNoZWNrVXBkYXRlKCk7XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwiSGFsbE1hbmlmZXN0L3Byb2plY3RcIiwganNiLk1hbmlmZXN0LCAoZXJyLCBtYW5pZmVzdCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1hbmlmZXN0MTogYW55ID0gbWFuaWZlc3Q7XG4gICAgICAgICAgICB0aGlzLl9oYWxsTWFuaWZlc3RBc3NldCA9IG1hbmlmZXN0MS5fbmF0aXZlQXNzZXQ7XG4gICAgICAgICAgICB0aGlzLmxvYWRDdXN0b21NYW5pZmVzdCgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkgfHwgIXRoaXMuX2FtLmdldExvY2FsTWFuaWZlc3QoKS5pc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwKFwi5Yqg6L295pys5Zyw6YWN572u5aSx6LSlLi4uXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sodGhpcy5jaGVja0NiLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5fYW0uY2hlY2tVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaG90VXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5fYW0pIHtcbiAgICAgICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sodGhpcy51cGRhdGVDYi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMubG9hZEN1c3RvbU1hbmlmZXN0KCk7XG4gICAgICAgICAgICB0aGlzLl9hbS51cGRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpcChcIua4uOaIj+abtOaWsOS4rS4uLiBcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93VGlwKHRpcDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2FwcExvYWQudGlwTGFiZWwuc3RyaW5nID0gdGlwO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnVwZGF0ZVVJLmFjdGl2ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlVUkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8gSG90IHVwZGF0ZSBpcyBvbmx5IGF2YWlsYWJsZSBpbiBOYXRpdmUgYnVpbGRcbiAgICAgICAgaWYgKCFqc2IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSBIb3RVcGRhdGUgb25Mb2FkIC0tLVwiKTtcbiAgICAgICAgLy8gU2V0dXAgeW91ciBvd24gdmVyc2lvbiBjb21wYXJlIGhhbmRsZXIsIHZlcnNpb25BIGFuZCBCIGlzIHZlcnNpb25zIGluIHN0cmluZ1xuICAgICAgICAvLyBpZiB0aGUgcmV0dXJuIHZhbHVlIGdyZWF0ZXIgdGhhbiAwLCB2ZXJzaW9uQSBpcyBncmVhdGVyIHRoYW4gQixcbiAgICAgICAgLy8gaWYgdGhlIHJldHVybiB2YWx1ZSBlcXVhbHMgMCwgdmVyc2lvbkEgZXF1YWxzIHRvIEIsXG4gICAgICAgIC8vIGlmIHRoZSByZXR1cm4gdmFsdWUgc21hbGxlciB0aGFuIDAsIHZlcnNpb25BIGlzIHNtYWxsZXIgdGhhbiBCLlxuICAgICAgICB0aGlzLnZlcnNpb25Db21wYXJlSGFuZGxlID0gZnVuY3Rpb24gKHZlcnNpb25BOiBzdHJpbmcsIHZlcnNpb25COiBzdHJpbmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSlMgQ3VzdG9tIFZlcnNpb24gQ29tcGFyZTogdmVyc2lvbiBBIGlzIFwiICsgdmVyc2lvbkEgKyAnLCB2ZXJzaW9uIEIgaXMgJyArIHZlcnNpb25CKTtcbiAgICAgICAgICAgIHZhciB2QSA9IHZlcnNpb25BLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICB2YXIgdkIgPSB2ZXJzaW9uQi5zcGxpdCgnLicpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2QS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gcGFyc2VJbnQodkFbaV0pO1xuICAgICAgICAgICAgICAgIHZhciBiID0gcGFyc2VJbnQodkJbaV0gfHwgJzAnKTtcbiAgICAgICAgICAgICAgICBpZiAoYSA9PT0gYikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhIC0gYjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodkIubGVuZ3RoID4gdkEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc3RvcmFnZVBhdGggPSAoKGpzYi5maWxlVXRpbHMgPyBqc2IuZmlsZVV0aWxzLmdldFdyaXRhYmxlUGF0aCgpIDogJy8nKSArICdIb3RVcGRhdGUvJyk7XG4gICAgICAgIC8vIEluaXQgd2l0aCBlbXB0eSBtYW5pZmVzdCB1cmwgZm9yIHRlc3RpbmcgY3VzdG9tIG1hbmlmZXN0XG4gICAgICAgIHRoaXMuX2FtID0gbmV3IGpzYi5Bc3NldHNNYW5hZ2VyKCcnLCB0aGlzLl9zdG9yYWdlUGF0aCwgdGhpcy52ZXJzaW9uQ29tcGFyZUhhbmRsZSk7XG4gICAgICAgIC8vIFNldHVwIHRoZSB2ZXJpZmljYXRpb24gY2FsbGJhY2ssIGJ1dCB3ZSBkb24ndCBoYXZlIG1kNSBjaGVjayBmdW5jdGlvbiB5ZXQsIHNvIG9ubHkgcHJpbnQgc29tZSBtZXNzYWdlXG4gICAgICAgIC8vIFJldHVybiB0cnVlIGlmIHRoZSB2ZXJpZmljYXRpb24gcGFzc2VkLCBvdGhlcndpc2UgcmV0dXJuIGZhbHNlXG4gICAgICAgIHRoaXMuX2FtLnNldFZlcmlmeUNhbGxiYWNrKGZ1bmN0aW9uIChwYXRoOiBzdHJpbmcsIGFzc2V0OiBhbnkpIHtcbiAgICAgICAgICAgIC8vIOaaguaXtuS4jemqjOivgSBKU+agoemqjOWkquaFoiDopoHmiqXplJlcbiAgICAgICAgICAgIC8vIC8vIFdoZW4gYXNzZXQgaXMgY29tcHJlc3NlZCwgd2UgZG9uJ3QgbmVlZCB0byBjaGVjayBpdHMgbWQ1LCBiZWNhdXNlIHppcCBmaWxlIGhhdmUgYmVlbiBkZWxldGVkLlxuICAgICAgICAgICAgLy8gdmFyIGNvbXByZXNzZWQgPSBhc3NldC5jb21wcmVzc2VkO1xuICAgICAgICAgICAgLy8gLy8gUmV0cmlldmUgdGhlIGNvcnJlY3QgbWQ1IHZhbHVlLlxuICAgICAgICAgICAgLy8gdmFyIGV4cGVjdGVkTUQ1ID0gYXNzZXQubWQ1O1xuICAgICAgICAgICAgLy8gLy8gYXNzZXQucGF0aCBpcyByZWxhdGl2ZSBwYXRoIGFuZCBwYXRoIGlzIGFic29sdXRlLlxuICAgICAgICAgICAgLy8gdmFyIHJlbGF0aXZlUGF0aCA9IGFzc2V0LnBhdGg7XG4gICAgICAgICAgICAvLyAvLyBUaGUgc2l6ZSBvZiBhc3NldCBmaWxlLCBidXQgdGhpcyB2YWx1ZSBjb3VsZCBiZSBhYnNlbnQuXG4gICAgICAgICAgICAvLyB2YXIgc2l6ZSA9IGFzc2V0LnNpemU7XG4gICAgICAgICAgICAvLyBpZiAoY29tcHJlc3NlZCkge1xuICAgICAgICAgICAgLy8gdGhpcy5TaG93VGlwKFwiVmVyaWZpY2F0aW9uIHBhc3NlZCA6IFwiICsgcmVsYXRpdmVQYXRoKTtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhpcy5TaG93VGlwKFwiVmVyaWZpY2F0aW9uIHBhc3NlZCA6IFwiICsgcmVsYXRpdmVQYXRoICsgJyAoJyArIGV4cGVjdGVkTUQ1ICsgJyknKTtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5zaG93VGlwKCdIb3QgdXBkYXRlIGlzIHJlYWR5LCBwbGVhc2UgY2hlY2sgb3IgZGlyZWN0bHkgdXBkYXRlLicpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwhKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
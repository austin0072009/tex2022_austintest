
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/GameUpdateMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcR2FtZVVwZGF0ZU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBK0Q7QUFFL0QsSUFBTSxHQUFHLEdBQVMsTUFBTyxDQUFDLEdBQUcsQ0FBQztBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWdWQztRQXBVVyxpQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsU0FBRyxHQUFzQixJQUFLLENBQUM7UUFDL0IscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsMEJBQW9CLEdBQW1ELElBQUssQ0FBQztRQUU3RSxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLHVCQUFpQixHQUFhLElBQUksQ0FBQztRQUNuQyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFRLElBQUksQ0FBQzs7SUF3VG5DLENBQUM7c0JBaFZvQixhQUFhO0lBRzlCLHNCQUFrQix5QkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFhLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN6QjtZQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQWdCRCwrQkFBTyxHQUFQLFVBQVEsS0FBVTtRQUNkLFFBQVEsS0FBSyxDQUFD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QyxDQUFDO1FBQ0gseUVBQXlFO0lBQzdFLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDL0I7SUFDTCxDQUFDOztJQTlVYyxxQkFBTyxHQUFrQixJQUFJLENBQUM7SUFENUIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWdWakM7SUFBRCxvQkFBQztDQWhWRCxBQWdWQyxDQWhWMEMsRUFBRSxDQUFDLFNBQVMsR0FnVnREO2tCQWhWb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XG5cbmNvbnN0IGpzYiA9ICg8YW55PndpbmRvdykuanNiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVwZGF0ZU1nciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgbWFuYWdlcjogR2FtZVVwZGF0ZU1nciA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBHYW1lVXBkYXRlTWdyIHtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMubWFuYWdlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIgPSBuZXcgR2FtZVVwZGF0ZU1ncigpO1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLm9uTG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIF91cGRhdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2NhblJldHJ5OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfc3RvcmFnZVBhdGg6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgX2FtOiBqc2IuQXNzZXRzTWFuYWdlciA9IG51bGwhO1xuICAgIHByaXZhdGUgX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcbiAgICBwcml2YXRlIHZlcnNpb25Db21wYXJlSGFuZGxlOiAodmVyc2lvbkE6IHN0cmluZywgdmVyc2lvbkI6IHN0cmluZykgPT4gbnVtYmVyID0gbnVsbCE7XG5cbiAgICBwcml2YXRlIF9pc1VwZGF0ZTogRnVuY3Rpb24gPSBudWxsO1xuICAgIHByaXZhdGUgX3Byb2dyZXNzQ2FsbEJhY2s6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcml2YXRlIF91cGRhdGVGYWlsOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIGNvbW1vblZpZXc6IGFueSA9IG51bGw7XG5cbiAgICBjaGVja0NiKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5nZXRFdmVudENvZGUoKSkge1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX05PX0xPQ0FMX01BTklGRVNUOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpcChcIuacquaJvuWIsOacrOWcsOmFjee9ruaWh+S7tu+8jOeDreabtOaWsOWksei0pe+8gVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9ET1dOTE9BRF9NQU5JRkVTVDpcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5FUlJPUl9QQVJTRV9NQU5JRkVTVDpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dUaXAoXCLkuIvovb3mm7TmlrDphY3nva7mlofku7blpLHotKXvvIFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuQUxSRUFEWV9VUF9UT19EQVRFOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bey57uP5pu05paw5Yiw5pyA5paw55qE6L+c56iL54mI5pys77yBXCIpO1xuICAgICAgICAgICAgICAgIC8vIOacgOaWsCDkuI3pnIDopoHmm7TmlrBcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl91cGRhdGVMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNVcGRhdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UganNiLkV2ZW50QXNzZXRzTWFuYWdlci5ORVdfVkVSU0lPTl9GT1VORDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuX2FtLmdldFRvdGFsQnl0ZXMoKSA9PSBcIiwgdGhpcy5fYW0uZ2V0VG90YWxCeXRlcygpKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNVcGRhdGUpIHsgLy8g5qOA5rWL5piv5ZCm6ZyA6KaB5pu05pawXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc3VkcGF0ZTogYm9vbGVhbiA9IHRoaXMuX2FtLmdldFRvdGFsQnl0ZXMoKSAhPSAwOyAvLyA9MCDkuI3pnIDopoHmm7TmlrBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNVcGRhdGUoaXN1ZHBhdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sobnVsbCEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdFVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ2IoZXZlbnQ6IGFueSkge1xuICAgICAgICB2YXIgZmFpbGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBjb21wZWxldGUgPSBmYWxzZTtcbiAgICAgICAgc3dpdGNoIChldmVudC5nZXRFdmVudENvZGUoKSkge1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX05PX0xPQ0FMX01BTklGRVNUOlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd1RpcCgn5rKh5pyJ5om+5Yiw5pys5Zyw6YWN572u5paH5Lu277yM6Lez6L+H54Ot5pu05paw77yBJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ayoeacieaJvuWIsOacrOWcsOmFjee9ruaWh+S7tu+8jOi3s+i/h+eDreabtOaWsO+8gScpO1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX1BST0dSRVNTSU9OOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmdldERvd25sb2FkZWRGaWxlcygpICsgJyAvICcgKyBldmVudC5nZXRUb3RhbEZpbGVzKCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmdldERvd25sb2FkZWRCeXRlcygpICsgJyAvICcgKyBldmVudC5nZXRUb3RhbEJ5dGVzKCkpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHBlcmNlbnQ6IG51bWJlciA9IGV2ZW50LmdldERvd25sb2FkZWRCeXRlcygpIC8gZXZlbnQuZ2V0VG90YWxCeXRlcygpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wcm9ncmVzc0NhbGxCYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzQ2FsbEJhY2soTWF0aC5mbG9vcihldmVudC5nZXREb3dubG9hZGVkQnl0ZXMoKSAvIDEwMjQpLCBNYXRoLmZsb29yKGV2ZW50LmdldFRvdGFsQnl0ZXMoKSAvIDEwMjQpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXAoJ+S4i+i9veS4rTogJyArIE1hdGguZmxvb3IocGVyY2VudCAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX0RPV05MT0FEX01BTklGRVNUOlxuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX1BBUlNFX01BTklGRVNUOlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd1RpcCgn5peg5rOV5LiL6L29bWFuaWZlc3Tmlofku7bvvIzng63mm7TmlrDot7Pov4fvvIEnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5peg5rOV5LiL6L29bWFuaWZlc3Tmlofku7bvvIzng63mm7TmlrDot7Pov4fvvIEnKTtcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkFMUkVBRFlfVVBfVE9fREFURTpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNob3dUaXAoJ+W3sue7j+abtOaWsOWIsOacgOaWsOeahOeJiOacrO+8gScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflt7Lnu4/mm7TmlrDliLDmnIDmlrDnmoTniYjmnKzvvIEnKTtcbiAgICAgICAgICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLlVQREFURV9GSU5JU0hFRDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnanNiLkV2ZW50QXNzZXRzTWFuYWdlci5VUERBVEVfRklOSVNIRUQnKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3Byb2dyZXNzQ2FsbEJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwKCfmm7TmlrDlrozmiJDvvIEgJyArIGV2ZW50LmdldE1lc3NhZ2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBlbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayhudWxsISk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3NDYWxsQmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuVVBEQVRFX0ZBSUxFRDpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXAoJ+abtOaWsOWksei0pe+8ge+8ge+8gScpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuUmV0cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8g6YeN5paw5LiL6L29XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGpzYi5FdmVudEFzc2V0c01hbmFnZXIuRVJST1JfVVBEQVRJTkc6XG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXAoJ+abtOaWsOWksei0pe+8gScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBqc2IuRXZlbnRBc3NldHNNYW5hZ2VyLkVSUk9SX0RFQ09NUFJFU1M6XG4gICAgICAgICAgICAgICAgZmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXAoZXZlbnQuZ2V0TWVzc2FnZSgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmFpbGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9hbS5zZXRFdmVudENhbGxiYWNrKG51bGwhKTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlRmFpbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUZhaWwoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVGYWlsID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wZWxldGUpIHtcbiAgICAgICAgICAgIGxldCByZW1vdGVWZXJzaW9uOiBzdHJpbmcgPSB0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkuZ2V0VmVyc2lvbigpO1xuXG4gICAgICAgICAgICB2YXIgc2VhcmNoUGF0aHMgPSBqc2IuZmlsZVV0aWxzLmdldFNlYXJjaFBhdGhzKCk7XG4gICAgICAgICAgICB2YXIgbmV3UGF0aHMgPSB0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkuZ2V0U2VhcmNoUGF0aHMoKTtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KHNlYXJjaFBhdGhzLCBuZXdQYXRocyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2VhcmNoUGF0aHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHNlYXJjaFBhdGhzW2luZGV4XTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNlYXJjaFBhdGhzKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VhcmNoUGF0aHMgPSBqc2IuZmlsZVV0aWxzLmdldFNlYXJjaFBhdGhzKCk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0hvdFVwZGF0ZVNlYXJjaFBhdGhzJywgSlNPTi5zdHJpbmdpZnkoc2VhcmNoUGF0aHMpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDmuLjmiI/mm7TmlrDlrozmiJDvvIFgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3VwZGF0ZU5hbWUgKyBcIl92ZXJzaW9uID09PSBcIiArIHJlbW90ZVZlcnNpb24pO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlYXJjaFBhdGhzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzZWFyY2hQYXRoc1tpbmRleF07XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlbGVtZW50IHNlYXJjaFBhdGhzID09PSBcIiArIGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX3VwZGF0ZU5hbWUgKyBcIl92ZXJzaW9uXCIsIHJlbW90ZVZlcnNpb24pO1xuICAgICAgICAgICAganNiLmZpbGVVdGlscy5zZXRTZWFyY2hQYXRocyhzZWFyY2hQYXRocyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmt7vliqDmkJzntKLot6/lvoRcbiAgICBwdWJsaWMgYWRkU2VhcmNoUGF0aHMocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwYXRoTGlzdCA9IGpzYi5maWxlVXRpbHMuZ2V0U2VhcmNoUGF0aHMoKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhdGhMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IHRlbXBQYXRoID0gcGF0aExpc3RbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHRlbXBQYXRoID09IHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5rKh5pyJ5Yqg5Yiw5pCc57Si6Lev5b6EXG4gICAgICAgIHBhdGhMaXN0LnVuc2hpZnQocGF0aCk7XG4gICAgICAgIGpzYi5maWxlVXRpbHMuc2V0U2VhcmNoUGF0aHMocGF0aExpc3QpO1xuICAgIH1cblxuICAgIGxvYWRDdXN0b21NYW5pZmVzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FtLmdldFN0YXRlKCkgPT09IGpzYi5Bc3NldHNNYW5hZ2VyLlN0YXRlLlVOSU5JVEVEKSB7XG4gICAgICAgICAgICBsZXQgY3VzdG9tTWFuaWZlc3RTdHI6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbWFuaWZlc3RVcmwgPSB0aGlzLmdldEdhbWVNYW5pZmVzdCh0aGlzLl91cGRhdGVOYW1lKTtcbiAgICAgICAgICAgIGlmIChqc2IuZmlsZVV0aWxzLmlzRmlsZUV4aXN0KG1hbmlmZXN0VXJsKSkge1xuICAgICAgICAgICAgICAgIC8v5a2Y5Zyo54mI5pys5o6n5Yi25paH5Lu2IFxuICAgICAgICAgICAgICAgIGN1c3RvbU1hbmlmZXN0U3RyID0ganNiLmZpbGVVdGlscy5nZXRTdHJpbmdGcm9tRmlsZShtYW5pZmVzdFVybCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVyTGlzdC5ob3R1cGRhdGVfdXJsOyAgLy9cImh0dHA6Ly8xMjkuMjA0LjEwOS4yMTg6ODgvZGxjXCI7XG4gICAgICAgICAgICAgICAgY3VzdG9tTWFuaWZlc3RTdHIgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIFwicGFja2FnZVVybFwiOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIFwicmVtb3RlTWFuaWZlc3RVcmxcIjogdXJsICsgXCIvR2FtZXMvXCIgKyB0aGlzLl91cGRhdGVOYW1lICsgXCIvcHJvamVjdC5tYW5pZmVzdFwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlbW90ZVZlcnNpb25VcmxcIjogdXJsICsgXCIvR2FtZXMvXCIgKyB0aGlzLl91cGRhdGVOYW1lICsgXCIvdmVyc2lvbi5tYW5pZmVzdFwiLFxuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFzc2V0c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwic2VhcmNoUGF0aHNcIjogW11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG1hbmlmZXN0ID0gbmV3IGpzYi5NYW5pZmVzdChjdXN0b21NYW5pZmVzdFN0ciwgdGhpcy5fc3RvcmFnZVBhdGgpO1xuICAgICAgICAgICAgdGhpcy5fYW0ubG9hZExvY2FsTWFuaWZlc3QobWFuaWZlc3QsIHRoaXMuX3N0b3JhZ2VQYXRoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflj5blrZDmuLjmiI9tYW5pZmVzdCB1cmxcbiAgICAgKiBAcGFyYW0gZ2FtZU5hbWUg5a2Q5ri45oiP5ZCNXG4gICAgICogQHJldHVybnMgbWFuaWZlc3QgdXJsXG4gICAgICovXG4gICAgZ2V0R2FtZU1hbmlmZXN0KGdhbWVOYW1lKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IG1hbmlmZXN0Um9vdDogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgbWFuaWZlc3RSb290ID0gKGpzYi5maWxlVXRpbHMgPyBqc2IuZmlsZVV0aWxzLmdldFdyaXRhYmxlUGF0aCgpIDogXCIvXCIpICsgXCJHYW1lcy9cIjtcbiAgICAgICAgcmV0dXJuIGAke21hbmlmZXN0Um9vdH0ke2dhbWVOYW1lfS9wcm9qZWN0Lm1hbmlmZXN0YDtcbiAgICB9XG5cbiAgICByZXRyeSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl91cGRhdGluZyAmJiB0aGlzLl9jYW5SZXRyeSkge1xuICAgICAgICAgICAgdGhpcy5fY2FuUmV0cnkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpcChcIlJldHJ5IGZhaWxlZCBBc3NldHMuLi5cIik7XG4gICAgICAgICAgICB0aGlzLl9hbS5kb3dubG9hZEZhaWxlZEFzc2V0cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIG5hbWUgIOmcgOimgeabtOaWsOeahOWkp+WOheaIluiAhea4uOaIj+WQjeWtl1xuICAgICAqIEBwYXJhbSBjYWxsYmFjayAg5qOA5rWL5Yiw5bey5piv5pyA5paw55qE5Zue6LCDXG4gICAgICogQHBhcmFtIGNvbW1vbnZpZXcgICBjb21tb252aWV357G7XG4gICAgICogQHBhcmFtIGlzdXBkYXRlICDmo4DmtYvlrZDmuLjmiI/mmK/lkKbmnInmm7TmlrBcbiAgICAgKiBAcGFyYW0gcHJvZ3Jlc3NDYWxsQmFjayAgIOWtkOa4uOaIj+eahOi/m+W6puWbnuiwg1xuICAgICAqIEBwYXJhbSB1cGRhdGVGYWlsICAg5a2Q5ri45oiP5pu05paw5aSx6LSl55qE5Zue6LCDXG4gICAgICovXG4gICAgY2hlY2tVcGRhdGUobmFtZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIGNvbW1vbnZpZXc/OiBhbnksIGlzdXBkYXRlPzogRnVuY3Rpb24sIHByb2dyZXNzQ2FsbEJhY2s/OiBGdW5jdGlvbiwgdXBkYXRlRmFpbD86IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5uYW1lID09IFwiLCBuYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLl91cGRhdGluZyA9PSBcIiwgdGhpcy5fdXBkYXRpbmcpO1xuICAgICAgICBpZiAodGhpcy5fdXBkYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpcChcIuajgOa1i+abtOaWsOS4rS4uLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbW1vblZpZXcgPSBjb21tb252aWV3O1xuICAgICAgICB0aGlzLl91cGRhdGVOYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdGVuZXIgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5faXNVcGRhdGUgPSBpc3VwZGF0ZTtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3NDYWxsQmFjayA9IHByb2dyZXNzQ2FsbEJhY2s7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUZhaWwgPSB1cGRhdGVGYWlsO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZVBhdGggPSAoKGpzYi5maWxlVXRpbHMgPyBqc2IuZmlsZVV0aWxzLmdldFdyaXRhYmxlUGF0aCgpIDogJy8nKSArICdHYW1lcy8nICsgbmFtZSArICcvJyk7XG5cbiAgICAgICAgdGhpcy5sb2FkQ3VzdG9tTWFuaWZlc3QoKTtcbiAgICAgICAgaWYgKCF0aGlzLl9hbS5nZXRMb2NhbE1hbmlmZXN0KCkgfHwgIXRoaXMuX2FtLmdldExvY2FsTWFuaWZlc3QoKS5pc0xvYWRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaXAoXCLliqDovb3mnKzlnLDphY3nva7lpLHotKUuLi5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayh0aGlzLmNoZWNrQ2IuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuX2FtLmNoZWNrVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaG90VXBkYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5fYW0gJiYgIXRoaXMuX3VwZGF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuX2FtLnNldEV2ZW50Q2FsbGJhY2sodGhpcy51cGRhdGVDYi5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLl9hbS5nZXRTdGF0ZSgpID09PSBqc2IuQXNzZXRzTWFuYWdlci5TdGF0ZS5VTklOSVRFRCkge1xuICAgICAgICAgICAgLy8gICAgIHZhciB1cmwgPSB0aGlzLm1hbmlmZXN0VXJsLm5hdGl2ZVVybDtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9hbS5sb2FkTG9jYWxNYW5pZmVzdCh1cmwpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgdGhpcy5sb2FkQ3VzdG9tTWFuaWZlc3QoKTtcbiAgICAgICAgICAgIHRoaXMuX2FtLnVwZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93VGlwKFwi5ri45oiP5pu05paw5LitLi4uIFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dUaXAodGlwOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb21tb25WaWV3LlNob3dUaXAodGlwKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICAvLyBpZiAodGhpcy51cGRhdGVVSS5hY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZVVJLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICghanNiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52ZXJzaW9uQ29tcGFyZUhhbmRsZSA9IGZ1bmN0aW9uICh2ZXJzaW9uQTogc3RyaW5nLCB2ZXJzaW9uQjogc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpTIEN1c3RvbSBWZXJzaW9uIENvbXBhcmU6IHZlcnNpb24gQSBpcyBcIiArIHZlcnNpb25BICsgJywgdmVyc2lvbiBCIGlzICcgKyB2ZXJzaW9uQik7XG4gICAgICAgICAgICB2YXIgdkEgPSB2ZXJzaW9uQS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgdmFyIHZCID0gdmVyc2lvbkIuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdkEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHBhcnNlSW50KHZBW2ldKTtcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHBhcnNlSW50KHZCW2ldIHx8ICcwJyk7XG4gICAgICAgICAgICAgICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSAtIGI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZCLmxlbmd0aCA+IHZBLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N0b3JhZ2VQYXRoID0gKChqc2IuZmlsZVV0aWxzID8ganNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSA6ICcvJykgKyAnSG90VXBkYXRlLycpO1xuICAgICAgICAvLyBJbml0IHdpdGggZW1wdHkgbWFuaWZlc3QgdXJsIGZvciB0ZXN0aW5nIGN1c3RvbSBtYW5pZmVzdFxuICAgICAgICB0aGlzLl9hbSA9IG5ldyBqc2IuQXNzZXRzTWFuYWdlcignJywgdGhpcy5fc3RvcmFnZVBhdGgsIHRoaXMudmVyc2lvbkNvbXBhcmVIYW5kbGUpO1xuICAgICAgICAvLyBTZXR1cCB0aGUgdmVyaWZpY2F0aW9uIGNhbGxiYWNrLCBidXQgd2UgZG9uJ3QgaGF2ZSBtZDUgY2hlY2sgZnVuY3Rpb24geWV0LCBzbyBvbmx5IHByaW50IHNvbWUgbWVzc2FnZVxuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB0aGUgdmVyaWZpY2F0aW9uIHBhc3NlZCwgb3RoZXJ3aXNlIHJldHVybiBmYWxzZVxuICAgICAgICB0aGlzLl9hbS5zZXRWZXJpZnlDYWxsYmFjayhmdW5jdGlvbiAocGF0aDogc3RyaW5nLCBhc3NldDogYW55KSB7XG4gICAgICAgICAgICAvLyDmmoLml7bkuI3pqozor4EgSlPmoKHpqozlpKrmhaIg6KaB5oql6ZSZXG4gICAgICAgICAgICAvLyAvLyBXaGVuIGFzc2V0IGlzIGNvbXByZXNzZWQsIHdlIGRvbid0IG5lZWQgdG8gY2hlY2sgaXRzIG1kNSwgYmVjYXVzZSB6aXAgZmlsZSBoYXZlIGJlZW4gZGVsZXRlZC5cbiAgICAgICAgICAgIC8vIHZhciBjb21wcmVzc2VkID0gYXNzZXQuY29tcHJlc3NlZDtcbiAgICAgICAgICAgIC8vIC8vIFJldHJpZXZlIHRoZSBjb3JyZWN0IG1kNSB2YWx1ZS5cbiAgICAgICAgICAgIC8vIHZhciBleHBlY3RlZE1ENSA9IGFzc2V0Lm1kNTtcbiAgICAgICAgICAgIC8vIC8vIGFzc2V0LnBhdGggaXMgcmVsYXRpdmUgcGF0aCBhbmQgcGF0aCBpcyBhYnNvbHV0ZS5cbiAgICAgICAgICAgIC8vIHZhciByZWxhdGl2ZVBhdGggPSBhc3NldC5wYXRoO1xuICAgICAgICAgICAgLy8gLy8gVGhlIHNpemUgb2YgYXNzZXQgZmlsZSwgYnV0IHRoaXMgdmFsdWUgY291bGQgYmUgYWJzZW50LlxuICAgICAgICAgICAgLy8gdmFyIHNpemUgPSBhc3NldC5zaXplO1xuICAgICAgICAgICAgLy8gaWYgKGNvbXByZXNzZWQpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuU2hvd1RpcChcIlZlcmlmaWNhdGlvbiBwYXNzZWQgOiBcIiArIHJlbGF0aXZlUGF0aCk7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMuU2hvd1RpcChcIlZlcmlmaWNhdGlvbiBwYXNzZWQgOiBcIiArIHJlbGF0aXZlUGF0aCArICcgKCcgKyBleHBlY3RlZE1ENSArICcpJyk7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuc2hvd1RpcCgnSG90IHVwZGF0ZSBpcyByZWFkeSwgcGxlYXNlIGNoZWNrIG9yIGRpcmVjdGx5IHVwZGF0ZS4nKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLl91cGRhdGVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5fYW0uc2V0RXZlbnRDYWxsYmFjayhudWxsISk7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVMaXN0ZW5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
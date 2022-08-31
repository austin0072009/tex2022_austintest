import { BaseFrameNative } from "../../Script/BaseFrameNative";

const jsb = (<any>window).jsb;

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUpdateMgr extends cc.Component {
    private static manager: GameUpdateMgr = null;

    public static get instance(): GameUpdateMgr {
        this.manager = null;
        if (this.manager == null) {
            this.manager = new GameUpdateMgr();
            this.manager.onLoad();
        }
        return this.manager;
    }

    private _updateName: string = "";
    private _updating: boolean = false;
    private _canRetry: boolean = false;
    private _storagePath: string = '';
    private _am: jsb.AssetsManager = null!;
    private _updateListener = null;
    private versionCompareHandle: (versionA: string, versionB: string) => number = null!;

    private _isUpdate: Function = null;
    private _progressCallBack: Function = null;
    private _updateFail: Function = null;

    private commonView: any = null;

    checkCb(event: any) {
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
                    let isudpate: boolean = this._am.getTotalBytes() != 0; // =0 不需要更新
                    this._isUpdate(isudpate);
                } else {
                    this._am.setEventCallback(null!);
                    this._updating = false;
                    this.hotUpdate();
                }
                break;
            default:
                return;
        }
    }

    updateCb(event: any) {
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

                let percent: number = event.getDownloadedBytes() / event.getTotalBytes();
                if (this._progressCallBack) {
                    this._progressCallBack(Math.floor(event.getDownloadedBytes() / 1024), Math.floor(event.getTotalBytes() / 1024));
                } else {
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
                this._am.setEventCallback(null!);
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
            this._am.setEventCallback(null!);
            this._updateListener = null;
            this._updating = false;
            if (this._updateFail) {
                this._updateFail();
                this._updateFail = null;
            }
        }

        if (compelete) {
            let remoteVersion: string = this._am.getLocalManifest().getVersion();

            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            Array.prototype.unshift.apply(searchPaths, newPaths);
            for (let index = 0; index < searchPaths.length; index++) {
                const element = searchPaths[index];
                this.addSearchPaths(element);
            }
            searchPaths = jsb.fileUtils.getSearchPaths();
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            console.log(`游戏更新完成！`);
            console.log(this._updateName + "_version === " + remoteVersion);
            for (let index = 0; index < searchPaths.length; index++) {
                const element = searchPaths[index];
                console.log("element searchPaths === " + element);
            }
            cc.sys.localStorage.setItem(this._updateName + "_version", remoteVersion);
            jsb.fileUtils.setSearchPaths(searchPaths);
        }
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

    loadCustomManifest() {
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            let customManifestStr: string = "";
            let manifestUrl = this.getGameManifest(this._updateName);
            if (jsb.fileUtils.isFileExist(manifestUrl)) {
                //存在版本控制文件 
                customManifestStr = jsb.fileUtils.getStringFromFile(manifestUrl);
            } else {
                let url = BaseFrameNative.serverList.hotupdate_url;  //"http://129.204.109.218:88/dlc";
                customManifestStr = JSON.stringify({
                    "packageUrl": url,
                    "remoteManifestUrl": url + "/Games/" + this._updateName + "/project.manifest",
                    "remoteVersionUrl": url + "/Games/" + this._updateName + "/version.manifest",
                    "version": "1.0.0",
                    "assets": {
                    },
                    "searchPaths": []
                });
            }

            var manifest = new jsb.Manifest(customManifestStr, this._storagePath);
            this._am.loadLocalManifest(manifest, this._storagePath);
        }
    }

    /**
     * @description 获取子游戏manifest url
     * @param gameName 子游戏名
     * @returns manifest url
     */
    getGameManifest(gameName): string {
        let manifestRoot: string = "";
        manifestRoot = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "Games/";
        return `${manifestRoot}${gameName}/project.manifest`;
    }

    retry() {
        if (!this._updating && this._canRetry) {
            this._canRetry = false;
            this.showTip("Retry failed Assets...");
            this._am.downloadFailedAssets();
        }
    }

    /**
     * 
     * @param name  需要更新的大厅或者游戏名字
     * @param callback  检测到已是最新的回调
     * @param commonview   commonview类
     * @param isupdate  检测子游戏是否有更新
     * @param progressCallBack   子游戏的进度回调
     * @param updateFail   子游戏更新失败的回调
     */
    checkUpdate(name: string, callback: Function, commonview?: any, isupdate?: Function, progressCallBack?: Function, updateFail?: Function) {
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
    }

    hotUpdate() {
        if (this._am && !this._updating) {
            this._updating = true;

            this._am.setEventCallback(this.updateCb.bind(this));
            // if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            //     var url = this.manifestUrl.nativeUrl;
            //     this._am.loadLocalManifest(url);
            // }
            this.loadCustomManifest();
            this._am.update();
        } else {
            this.showTip("游戏更新中... ");
        }
    }

    showTip(tip: string) {
        this.commonView.ShowTip(tip);
    }

    show() {
        // if (this.updateUI.active === false) {
        //     this.updateUI.active = true;
        // }
    }

    // use this for initialization
    onLoad() {
        if (!jsb) {
            return;
        }
        this.versionCompareHandle = function (versionA: string, versionB: string) {
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
        this._am.setVerifyCallback(function (path: string, asset: any) {
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
    }

    onDestroy() {
        if (this._updateListener) {
            this._am.setEventCallback(null!);
            this._updateListener = null;
        }
    }
}

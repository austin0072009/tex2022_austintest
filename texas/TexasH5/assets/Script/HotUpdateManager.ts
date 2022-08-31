import { BaseFrameNative } from "./BaseFrameNative";

const jsb = (<any>window).jsb;

const { ccclass, property } = cc._decorator;

@ccclass
export default class HotUpdateManager extends cc.Component {
    private static manager: HotUpdateManager = null;

    public static get instance(): HotUpdateManager {
        this.manager = null;
        if (this.manager == null) {
            this.manager = new HotUpdateManager();
            this.manager.onLoad();
        }
        return this.manager;
    }

    private _hallManifestAsset: string = "";

    private _appLoad: any = null;
    private _storagePath: string = '';
    private _updateListener = null;
    private _am: jsb.AssetsManager = null!;
    private versionCompareHandle: (versionA: string, versionB: string) => number = null!;

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
                this._am.setEventCallback(null!);
                setTimeout(() => {
                    this.hotUpdate();
                }, 200);
                break;
            default:
                return;
        }
    }

    updateCb(event: any) {
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
                let percent: number = event.getDownloadedBytes() / event.getTotalBytes();
                let progress1 = Math.floor(event.getDownloadedBytes() / 1024) + 'kb';
                let progress2 = Math.floor(event.getTotalBytes() / 1024) + "kb";
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
                this._am.setEventCallback(null!);
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
            this._am.setEventCallback(null!);
            this._updateListener = null;
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

            console.log(`remoteVersion: ${remoteVersion}`);
            // 热更新成功
            BaseFrameNative.VERSION = remoteVersion;
            cc.sys.localStorage.setItem("clientVersion", remoteVersion);
            // restart game.
            this.showTip("重启游戏！");
            setTimeout(() => {
                cc.game.restart();
            }, 1000)
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
            let manifestUrl = this.getGameManifest();
            if (jsb.fileUtils.isFileExist(manifestUrl)) {
                //存在版本控制文件 
                customManifestStr = jsb.fileUtils.getStringFromFile(manifestUrl);
            } else {
                let url = BaseFrameNative.serverList.hotupdate_url;
                if (this._hallManifestAsset != "") {
                    customManifestStr = this._hallManifestAsset;
                    console.log("this._texasManifestAsset === ", this._hallManifestAsset);
                } else {
                    customManifestStr = JSON.stringify({
                        "packageUrl": url,
                        "remoteManifestUrl": url + "/manifest/project.manifest",
                        "remoteVersionUrl": url + "/manifest/version.manifest",
                        "version": "1.0.0",
                        "assets": {
                        },
                        "searchPaths": []
                    });
                }

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
    getGameManifest(): string {
        let manifestRoot: string = "";
        manifestRoot = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "HotUpdate/manifest/";
        return `${manifestRoot}/project.manifest`;
    }

    /**
     * 
     * @param callback  检测到已是最新的回调
     * @param appload   appLoad类，isHall为true才需要
     */
    checkUpdate(callback: Function, appload: any) {
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
        cc.resources.load("HallManifest/project", jsb.Manifest, (err, manifest) => {
            let manifest1: any = manifest;
            this._hallManifestAsset = manifest1._nativeAsset;
            this.loadCustomManifest();
            if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
                this.showTip("加载本地配置失败...");
                return;
            }
            this._am.setEventCallback(this.checkCb.bind(this));
            this._am.checkUpdate();
        });
    }

    hotUpdate() {
        if (this._am) {
            this._am.setEventCallback(this.updateCb.bind(this));
            this.loadCustomManifest();
            this._am.update();
        } else {
            this.showTip("游戏更新中... ");
        }
    }

    showTip(tip: string) {
        this._appLoad.tipLabel.string = tip;
    }

    show() {
        // if (this.updateUI.active === false) {
        //     this.updateUI.active = true;
        // }
    }

    // use this for initialization
    onLoad() {
        // Hot update is only available in Native build
        if (!jsb) {
            return;
        }
        console.log("--- HotUpdate onLoad ---");
        // Setup your own version compare handler, versionA and B is versions in string
        // if the return value greater than 0, versionA is greater than B,
        // if the return value equals 0, versionA equals to B,
        // if the return value smaller than 0, versionA is smaller than B.
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

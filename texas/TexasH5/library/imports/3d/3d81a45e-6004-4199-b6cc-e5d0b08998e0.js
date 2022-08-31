"use strict";
cc._RF.push(module, '3d81aReYARBmbbM5dCwiZjg', 'MogafaSlotsGameStage');
// Script/modules/@mogafa/slots/lib/MogafaSlotsGameStage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConst_1 = require("../../../@slotsmaster/ui-common/lib/AppConst");
/**
 * mogafa slots游戏关卡资源存放器
 * 比如棋子spine资源，棋子spine播放配置
 * 一些需要在棋子上使用的资源但是不宜直接加载到棋子里面去的资源，因为棋子数量众多
 */
var MogafaSlotsGameStage = /** @class */ (function () {
    function MogafaSlotsGameStage() {
        this.BundlePath = "";
        this._symbolSpineResources = [];
        this._symbolSpineShowConfigs = {};
        this._shareComponents = {};
        this._extra = {};
        this.symbolSpineResourceLoadedIndex = 0;
    }
    Object.defineProperty(MogafaSlotsGameStage, "gameStages", {
        get: function () {
            return MogafaSlotsGameStage._gameStages;
        },
        enumerable: false,
        configurable: true
    });
    MogafaSlotsGameStage.setGameStages = function (gameCode, gameStage) {
        if (gameCode && gameStage) {
            MogafaSlotsGameStage.gameStages[gameCode] = gameStage;
        }
    };
    Object.defineProperty(MogafaSlotsGameStage.prototype, "symbolSpineResources", {
        /**
         * 获取所有棋子上的spine资源
         */
        get: function () {
            return this._symbolSpineResources;
        },
        /**
         * Sets symbol spine resources
         * 设置所有棋子的spine资源
         */
        set: function (value) {
            console.log("symbolSpineResources");
            this._symbolSpineResources = value;
            if (!this._symbolSpineResources) {
                this._symbolSpineResources = [];
            }
            this.symbolSpineResourceLoadedIndex = 0;
            this.loadSymbolSpineResources();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MogafaSlotsGameStage.prototype, "symbolSpineShowConfigs", {
        /**
         * Gets symbol spine show configs
         * 获取棋子spine展示配置
         */
        get: function () {
            return this._symbolSpineShowConfigs;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加棋子spine展示配置
     *
     * @param name 配置名称
     * @param configs 配置
     */
    MogafaSlotsGameStage.prototype.addSymbolSpineShowConfigs = function (name, configs) {
        console.log("addSymbolSpineShowConfigs");
        this._symbolSpineShowConfigs[name] = configs;
        if (!this._symbolSpineShowConfigs[name]) {
            this._symbolSpineShowConfigs[name] = [];
        }
    };
    Object.defineProperty(MogafaSlotsGameStage.prototype, "shareComponents", {
        get: function () {
            return this._shareComponents;
        },
        enumerable: false,
        configurable: true
    });
    MogafaSlotsGameStage.prototype.addShareComponents = function (name, component) {
        this._shareComponents[name] = component;
    };
    MogafaSlotsGameStage.prototype.loadSymbolSpineResources = function () {
        var _this = this;
        // console.log("loadSymbolSpineResources")
        if (this._symbolSpineResources &&
            this._symbolSpineResources.length >= 0 &&
            this.symbolSpineResourceLoadedIndex < this._symbolSpineResources.length) {
            var urls_1 = this._symbolSpineResources[this.symbolSpineResourceLoadedIndex].urls;
            if (urls_1 && urls_1.length > 0) {
                var bundle = cc.assetManager.getBundle(this.BundlePath);
                if (bundle) {
                    bundle.load(urls_1, sp.SkeletonData, this.symbolSpineResourcesLoaded.bind(this));
                }
                else {
                    cc.assetManager.loadBundle(AppConst_1.AppConst.resUrl + this.BundlePath, function (err, bundle) {
                        bundle.load(urls_1, sp.SkeletonData, _this.symbolSpineResourcesLoaded.bind(_this));
                    });
                }
                // cc.loader.loadResArray(urls, sp.SkeletonData, this.symbolSpineResourcesLoaded.bind(this));
            }
            else {
                this.symbolSpineResourceLoadedIndex++;
                this.loadSymbolSpineResources();
            }
        }
    };
    MogafaSlotsGameStage.prototype.symbolSpineResourcesLoaded = function (error, resources) {
        if (error) {
            cc.error("\u68CB\u5B50spine\u52A8\u753B\u8F7D\u5165\u9519\u8BEF");
        }
        else {
            var urls = this._symbolSpineResources[this.symbolSpineResourceLoadedIndex];
            for (var i = 0; i < resources.length; i++) {
                var resource = resources[i];
                this._symbolSpineResources[this.symbolSpineResourceLoadedIndex].addResource(resource.name, resource);
            }
            this.symbolSpineResourceLoadedIndex++;
            this.loadSymbolSpineResources();
        }
    };
    Object.defineProperty(MogafaSlotsGameStage.prototype, "extra", {
        /**
         * Gets extra
         * 获取额外数据。
         * 可以放一些当前游戏关卡需要的全局数据
         * 比如野牛：如果最终是2倍wild，第一次替换棋子不显示2倍的图标，可以设置：
         * extra.isFirstReplace = true,表示第一次替换，false表示第二次替换
         *
         * 还有海盗，也可以设置extra.isLastReplace = true来表示最后一次替换，
         * 用此来判断骰子棋子在替换过程中是否出现特效。
         * 注意：在此设置的额外数据，需要在游戏关卡的reset方法中重置成需要的初始化值
         */
        get: function () {
            return this._extra;
        },
        enumerable: false,
        configurable: true
    });
    MogafaSlotsGameStage._gameStages = {};
    return MogafaSlotsGameStage;
}());
exports.default = MogafaSlotsGameStage;

cc._RF.pop();
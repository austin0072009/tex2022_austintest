
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/MogafaSlotsGameStage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxNb2dhZmFTbG90c0dhbWVTdGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUF3RTtBQU14RTs7OztHQUlHO0FBQ0g7SUFBQTtRQVVXLGVBQVUsR0FBVyxFQUFFLENBQUE7UUFDdEIsMEJBQXFCLEdBQTBCLEVBQUUsQ0FBQztRQUNsRCw0QkFBdUIsR0FBK0MsRUFBRSxDQUFDO1FBQ3pFLHFCQUFnQixHQUF5QyxFQUFFLENBQUM7UUFDNUQsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixtQ0FBOEIsR0FBVyxDQUFDLENBQUM7SUFtR3ZELENBQUM7SUFoSEcsc0JBQWtCLGtDQUFVO2FBQTVCO1lBQ0ksT0FBTyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFDYSxrQ0FBYSxHQUEzQixVQUE0QixRQUFnQixFQUFFLFNBQStCO1FBQ3pFLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUN2QixvQkFBb0IsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQVdELHNCQUFJLHNEQUFvQjtRQUh4Qjs7V0FFRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQztRQUNEOzs7V0FHRzthQUNILFVBQXlCLEtBQTRCO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtZQUNuQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsOEJBQThCLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyx3QkFBd0IsRUFB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QUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN4RztZQUNELElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQVlELHNCQUFJLHVDQUFLO1FBWFQ7Ozs7Ozs7Ozs7V0FVRzthQUNIO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBaEhjLGdDQUFXLEdBQTRDLEVBQUUsQ0FBQztJQWlIN0UsMkJBQUM7Q0FsSEQsQUFrSEMsSUFBQTtrQkFsSG9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XG5pbXBvcnQgRmd1aUNvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uL2ZhaXJ5Z3VpLWNvbXBvbmVudC9saWIvRmd1aUNvbXBvbmVudEJhc2VcIjtcbmltcG9ydCBTeW1ib2xTcGluZVJlc291cmNlIGZyb20gXCIuL1N5bWJvbEJvYXJkL1N5bWJvbFNwaW5lUmVzb3VyY2VcIjtcbmltcG9ydCBTeW1ib2xTcGluZVNob3dDb25maWcgZnJvbSBcIi4vU3ltYm9sQm9hcmQvU3ltYm9sU3BpbmVTaG93Q29uZmlnXCI7XG5cblxuLyoqXG4gKiBtb2dhZmEgc2xvdHPmuLjmiI/lhbPljaHotYTmupDlrZjmlL7lmahcbiAqIOavlOWmguaji+WtkHNwaW5l6LWE5rqQ77yM5qOL5a2Qc3BpbmXmkq3mlL7phY3nva5cbiAqIOS4gOS6m+mcgOimgeWcqOaji+WtkOS4iuS9v+eUqOeahOi1hOa6kOS9huaYr+S4jeWunOebtOaOpeWKoOi9veWIsOaji+WtkOmHjOmdouWOu+eahOi1hOa6kO+8jOWboOS4uuaji+WtkOaVsOmHj+S8l+WkmlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2dhZmFTbG90c0dhbWVTdGFnZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2dhbWVTdGFnZXM6IHsgW2tleTogc3RyaW5nXTogTW9nYWZhU2xvdHNHYW1lU3RhZ2UgfSA9IHt9O1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGdhbWVTdGFnZXMoKTogeyBba2V5OiBzdHJpbmddOiBNb2dhZmFTbG90c0dhbWVTdGFnZSB9IHtcbiAgICAgICAgcmV0dXJuIE1vZ2FmYVNsb3RzR2FtZVN0YWdlLl9nYW1lU3RhZ2VzO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHNldEdhbWVTdGFnZXMoZ2FtZUNvZGU6IHN0cmluZywgZ2FtZVN0YWdlOiBNb2dhZmFTbG90c0dhbWVTdGFnZSkge1xuICAgICAgICBpZiAoZ2FtZUNvZGUgJiYgZ2FtZVN0YWdlKSB7XG4gICAgICAgICAgICBNb2dhZmFTbG90c0dhbWVTdGFnZS5nYW1lU3RhZ2VzW2dhbWVDb2RlXSA9IGdhbWVTdGFnZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgQnVuZGxlUGF0aDogc3RyaW5nID0gXCJcIlxuICAgIHByaXZhdGUgX3N5bWJvbFNwaW5lUmVzb3VyY2VzOiBTeW1ib2xTcGluZVJlc291cmNlW10gPSBbXTtcbiAgICBwcml2YXRlIF9zeW1ib2xTcGluZVNob3dDb25maWdzOiB7IFtrZXk6IHN0cmluZ106IFN5bWJvbFNwaW5lU2hvd0NvbmZpZ1tdIH0gPSB7fTtcbiAgICBwcml2YXRlIF9zaGFyZUNvbXBvbmVudHM6IHsgW2tleTogc3RyaW5nXTogRmd1aUNvbXBvbmVudEJhc2UgfSA9IHt9O1xuICAgIHByaXZhdGUgX2V4dHJhOiBhbnkgPSB7fTtcbiAgICBwcml2YXRlIHN5bWJvbFNwaW5lUmVzb3VyY2VMb2FkZWRJbmRleDogbnVtYmVyID0gMDtcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaJgOacieaji+WtkOS4iueahHNwaW5l6LWE5rqQXG4gICAgICovXG4gICAgZ2V0IHN5bWJvbFNwaW5lUmVzb3VyY2VzKCk6IFN5bWJvbFNwaW5lUmVzb3VyY2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zeW1ib2xTcGluZVJlc291cmNlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBzeW1ib2wgc3BpbmUgcmVzb3VyY2VzXG4gICAgICog6K6+572u5omA5pyJ5qOL5a2Q55qEc3BpbmXotYTmupBcbiAgICAgKi9cbiAgICBzZXQgc3ltYm9sU3BpbmVSZXNvdXJjZXModmFsdWU6IFN5bWJvbFNwaW5lUmVzb3VyY2VbXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN5bWJvbFNwaW5lUmVzb3VyY2VzXCIpXG4gICAgICAgIHRoaXMuX3N5bWJvbFNwaW5lUmVzb3VyY2VzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fc3ltYm9sU3BpbmVSZXNvdXJjZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3N5bWJvbFNwaW5lUmVzb3VyY2VzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zeW1ib2xTcGluZVJlc291cmNlTG9hZGVkSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmxvYWRTeW1ib2xTcGluZVJlc291cmNlcygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHN5bWJvbCBzcGluZSBzaG93IGNvbmZpZ3NcbiAgICAgKiDojrflj5bmo4vlrZBzcGluZeWxleekuumFjee9rlxuICAgICAqL1xuICAgIGdldCBzeW1ib2xTcGluZVNob3dDb25maWdzKCk6IHsgW2tleTogc3RyaW5nXTogU3ltYm9sU3BpbmVTaG93Q29uZmlnW10gfSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zeW1ib2xTcGluZVNob3dDb25maWdzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmt7vliqDmo4vlrZBzcGluZeWxleekuumFjee9rlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWUg6YWN572u5ZCN56ewXG4gICAgICogQHBhcmFtIGNvbmZpZ3Mg6YWN572uXG4gICAgICovXG4gICAgYWRkU3ltYm9sU3BpbmVTaG93Q29uZmlncyhuYW1lOiBzdHJpbmcsIGNvbmZpZ3M6IFN5bWJvbFNwaW5lU2hvd0NvbmZpZ1tdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkU3ltYm9sU3BpbmVTaG93Q29uZmlnc1wiKVxuICAgICAgICB0aGlzLl9zeW1ib2xTcGluZVNob3dDb25maWdzW25hbWVdID0gY29uZmlncztcbiAgICAgICAgaWYgKCF0aGlzLl9zeW1ib2xTcGluZVNob3dDb25maWdzW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLl9zeW1ib2xTcGluZVNob3dDb25maWdzW25hbWVdID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IHNoYXJlQ29tcG9uZW50cygpOiB7IFtrZXk6IHN0cmluZ106IEZndWlDb21wb25lbnRCYXNlIH0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2hhcmVDb21wb25lbnRzO1xuICAgIH1cbiAgICBhZGRTaGFyZUNvbXBvbmVudHMobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IEZndWlDb21wb25lbnRCYXNlKSB7XG4gICAgICAgIHRoaXMuX3NoYXJlQ29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudDtcbiAgICB9XG4gICAgcHJpdmF0ZSBsb2FkU3ltYm9sU3BpbmVSZXNvdXJjZXMoKTogdm9pZCB7XG4gICAgICAgLy8gY29uc29sZS5sb2coXCJsb2FkU3ltYm9sU3BpbmVSZXNvdXJjZXNcIilcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5fc3ltYm9sU3BpbmVSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgIHRoaXMuX3N5bWJvbFNwaW5lUmVzb3VyY2VzLmxlbmd0aCA+PSAwICYmXG4gICAgICAgICAgICB0aGlzLnN5bWJvbFNwaW5lUmVzb3VyY2VMb2FkZWRJbmRleCA8IHRoaXMuX3N5bWJvbFNwaW5lUmVzb3VyY2VzLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxldCB1cmxzID0gdGhpcy5fc3ltYm9sU3BpbmVSZXNvdXJjZXNbdGhpcy5zeW1ib2xTcGluZVJlc291cmNlTG9hZGVkSW5kZXhdLnVybHM7XG4gICAgICAgICAgICBpZiAodXJscyAmJiB1cmxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgYnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZSh0aGlzLkJ1bmRsZVBhdGgpXG4gICAgICAgICAgICAgICAgaWYgKGJ1bmRsZSkge1xuICAgICAgICAgICAgICAgICAgICBidW5kbGUubG9hZCh1cmxzLCBzcC5Ta2VsZXRvbkRhdGEsIHRoaXMuc3ltYm9sU3BpbmVSZXNvdXJjZXNMb2FkZWQuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShBcHBDb25zdC5yZXNVcmwgKyB0aGlzLkJ1bmRsZVBhdGgsIChlcnIsIGJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmxvYWQodXJscywgc3AuU2tlbGV0b25EYXRhLCB0aGlzLnN5bWJvbFNwaW5lUmVzb3VyY2VzTG9hZGVkLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXNBcnJheSh1cmxzLCBzcC5Ta2VsZXRvbkRhdGEsIHRoaXMuc3ltYm9sU3BpbmVSZXNvdXJjZXNMb2FkZWQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sU3BpbmVSZXNvdXJjZUxvYWRlZEluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3ltYm9sU3BpbmVSZXNvdXJjZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHN5bWJvbFNwaW5lUmVzb3VyY2VzTG9hZGVkKGVycm9yOiBhbnksIHJlc291cmNlczogc3AuU2tlbGV0b25EYXRhW10pOiB2b2lkIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihg5qOL5a2Qc3BpbmXliqjnlLvovb3lhaXplJnor69gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB1cmxzID0gdGhpcy5fc3ltYm9sU3BpbmVSZXNvdXJjZXNbdGhpcy5zeW1ib2xTcGluZVJlc291cmNlTG9hZGVkSW5kZXhdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc291cmNlc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zeW1ib2xTcGluZVJlc291cmNlc1t0aGlzLnN5bWJvbFNwaW5lUmVzb3VyY2VMb2FkZWRJbmRleF0uYWRkUmVzb3VyY2UocmVzb3VyY2UubmFtZSwgcmVzb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zeW1ib2xTcGluZVJlc291cmNlTG9hZGVkSW5kZXgrKztcbiAgICAgICAgICAgIHRoaXMubG9hZFN5bWJvbFNwaW5lUmVzb3VyY2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBleHRyYVxuICAgICAqIOiOt+WPlumineWkluaVsOaNruOAglxuICAgICAqIOWPr+S7peaUvuS4gOS6m+W9k+WJjea4uOaIj+WFs+WNoemcgOimgeeahOWFqOWxgOaVsOaNrlxuICAgICAqIOavlOWmgumHjueJm++8muWmguaenOacgOe7iOaYrzLlgI13aWxk77yM56ys5LiA5qyh5pu/5o2i5qOL5a2Q5LiN5pi+56S6MuWAjeeahOWbvuagh++8jOWPr+S7peiuvue9ru+8mlxuICAgICAqIGV4dHJhLmlzRmlyc3RSZXBsYWNlID0gdHJ1ZSzooajnpLrnrKzkuIDmrKHmm7/mjaLvvIxmYWxzZeihqOekuuesrOS6jOasoeabv+aNolxuICAgICAqXG4gICAgICog6L+Y5pyJ5rW355uX77yM5Lmf5Y+v5Lul6K6+572uZXh0cmEuaXNMYXN0UmVwbGFjZSA9IHRydWXmnaXooajnpLrmnIDlkI7kuIDmrKHmm7/mjaLvvIxcbiAgICAgKiDnlKjmraTmnaXliKTmlq3pqrDlrZDmo4vlrZDlnKjmm7/mjaLov4fnqIvkuK3mmK/lkKblh7rnjrDnibnmlYjjgIJcbiAgICAgKiDms6jmhI/vvJrlnKjmraTorr7nva7nmoTpop3lpJbmlbDmja7vvIzpnIDopoHlnKjmuLjmiI/lhbPljaHnmoRyZXNldOaWueazleS4remHjee9ruaIkOmcgOimgeeahOWIneWni+WMluWAvFxuICAgICAqL1xuICAgIGdldCBleHRyYSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmE7XG4gICAgfVxufVxuIl19
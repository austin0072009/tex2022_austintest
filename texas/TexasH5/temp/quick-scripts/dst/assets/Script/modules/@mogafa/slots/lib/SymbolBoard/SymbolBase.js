
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SymbolBoard/SymbolBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42161UvR51PsIRHaXku6Xi8', 'SymbolBase');
// Script/modules/@mogafa/slots/lib/SymbolBoard/SymbolBase.ts

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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var SymbolBoardStatus_1 = require("./SymbolBoardStatus");
var SymbolBoardConst_1 = require("./SymbolBoardConst");
var SlotGameStageBase_1 = require("../GameStage/SlotGameStageBase");
var MogafaSlotsGameStage_1 = require("../MogafaSlotsGameStage");
var FguiComponentBase_1 = require("../../../fairygui-component/lib/FguiComponentBase");
var SpineTrackEntryCount = /** @class */ (function () {
    function SpineTrackEntryCount(componentName, expectedTimes) {
        this._trackEntries = [];
        this._componentName = componentName;
        this._expectedTimes = expectedTimes;
        if (this._expectedTimes == null) {
            this._expectedTimes = 1;
        }
    }
    Object.defineProperty(SpineTrackEntryCount.prototype, "componentName", {
        get: function () {
            return this._componentName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpineTrackEntryCount.prototype, "trackEntries", {
        get: function () {
            return this._trackEntries;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加trackEntry
     * @param trackEntry trackEntry
     */
    SpineTrackEntryCount.prototype.addTrackEntry = function (trackEntry) {
        var old = this._trackEntries.find(function (t) { return t.trackEntry == trackEntry; });
        if (!old) {
            this._trackEntries.push({ trackEntry: trackEntry, count: 0 });
        }
    };
    /**
     * 完成一次动画播放
     *
     * @param trackEntry trackEntry
     * @returns 全部完成指定次数返回true
     */
    SpineTrackEntryCount.prototype.completedOnce = function (trackEntry) {
        var track = this._trackEntries.find(function (t) { return t.trackEntry.animation.name == trackEntry.trackEntry.animation.name; });
        if (track) {
            track.count++;
        }
        return this.completed;
    };
    Object.defineProperty(SpineTrackEntryCount.prototype, "completed", {
        /**
         * 获取是否完成
         */
        get: function () {
            var _this = this;
            var track = this._trackEntries.find(function (t) { return t.count < _this.expectedTimes; });
            return !track;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpineTrackEntryCount.prototype, "expectedTimes", {
        get: function () {
            return this._expectedTimes;
        },
        set: function (value) {
            this._expectedTimes = value;
        },
        enumerable: false,
        configurable: true
    });
    return SpineTrackEntryCount;
}());
var SymbolBase = /** @class */ (function (_super) {
    __extends(SymbolBase, _super);
    function SymbolBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 棋子的spine动画组件，这是通过spineComponentNames名称加载的
         */
        _this._spineComponents = new Map();
        _this._isFinal = false;
        _this.isPlayByConfig = false;
        return _this;
    }
    Object.defineProperty(SymbolBase.prototype, "stageCode", {
        /**
         * 获取关卡编码
         */
        get: function () {
            return this._stageCode;
        },
        /**
         * 设置关卡编码
         */
        set: function (value) {
            this._stageCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "cell", {
        /**
         * 获取所属格子
         */
        get: function () {
            return this._cell;
        },
        /**
         * 设置所属格子
         */
        set: function (value) {
            this._cell = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "boardStatus", {
        get: function () {
            return this._boardStatus;
        },
        set: function (value) {
            this._boardStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
            if (value === SymbolBoardStatus_1.SymbolBoardStatus.Stopped) {
                this.playSpineByConfig(this.spineShowAfterStopConfigName);
            }
            if (value === SymbolBoardStatus_1.SymbolBoardStatus.Ready) {
                var matchedLines = null;
                if (SlotGameStageBase_1.default.spinResults) {
                    var slot = SlotGameStageBase_1.default.spinResults.slots[this.cell.reel.symbolBoard.index];
                    matchedLines = slot.matchedLines;
                }
                if (!matchedLines || matchedLines.length == 0) {
                    this.playSpineByConfig(this.spineShowForStationaryBoardConfigName);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "codeControllerName", {
        get: function () {
            return "code";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "inLineControllerName", {
        /**
         * 获取fairygui编辑器设置的inline控制器名称
         */
        get: function () {
            return "inLine";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "inLineControllerCode", {
        /**
         * 获取展示inline效果的控制器编码
         */
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "symbolGroupComponentName", {
        get: function () {
            return "symbolGroup";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (code) {
            if (code >= SymbolBoardConst_1.SymbolBoardConst.FINAL_CODE_OFFSET) {
                this._isFinal = true;
                code = code - SymbolBoardConst_1.SymbolBoardConst.FINAL_CODE_OFFSET;
            }
            else {
                this._isFinal = false;
            }
            this._code = code;
            this.setControllerProperty(this.codeControllerName, code);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "isFinal", {
        get: function () {
            return this._isFinal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "assets", {
        get: function () {
            return this._assets;
        },
        set: function (value) {
            this._assets = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "trackEntries", {
        /**
         * 播放一组动画中的最后一个动画的trackEntry列表
         * （每一个spine组件对应一个trackEntry）
         * 我们用这个trackEntry来监听这一组动画播放结束
         * （我们定义一组动画播放完成一次的含义是这一组动画所有的动画播放一次）
         */
        get: function () {
            return this._trackEntries;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "spineComponents", {
        /**
         * 获取棋子spine组件列表
         */
        get: function () {
            return this._spineComponents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SymbolBase.prototype, "spineResources", {
        /**
         * 获取棋子spine资源
         */
        get: function () {
            var _this = this;
            // if (!this._gameStage) {
            //     this._gameStage = this.findGameStage();
            //     if (!this._gameStage) {
            //         return null;
            //     }
            // }
            var resources = null; //this._gameStage.getSymbolSpineResourcesByCode(this.code);
            if (resources == null) {
                resources = MogafaSlotsGameStage_1.default.gameStages[this.stageCode].symbolSpineResources.find(function (s) { return s.code == _this.code; });
            }
            return resources;
        },
        enumerable: false,
        configurable: true
    });
    SymbolBase.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
        if (this.symbolGroupComponentName) {
            var component = this.getChild(this.symbolGroupComponentName);
            if (component) {
                this.symbolGroup = component.asGroup;
            }
        }
    };
    SymbolBase.prototype.findGameStage = function () {
        var parent = this.parent;
        while (parent.parent) {
            parent = parent.parent;
        }
        return parent;
    };
    SymbolBase.prototype.createChildComponents = function () {
        if (this.spineComponentNames) {
            for (var i = 0; i < this.spineComponentNames.length; i++) {
                var spineContainer = this.getChild(this.spineComponentNames[i]).asGraph;
                if (!spineContainer) {
                    cc.error("\u5305" + this.packageName + "\u6216spine\u5BB9\u5668" + this.spineComponentNames + "\u4E0D\u5B58\u5728");
                    return;
                }
                var spineComponent = spineContainer.node.addComponent(sp.Skeleton);
                this._spineComponents.set(this.spineComponentNames[i], spineComponent);
                spineComponent.setCompleteListener(this.onSpineCompletedOnce.bind(this));
            }
        }
    };
    SymbolBase.prototype.stopShow = function () {
        var _this = this;
        var stopShow = this.spineShowAfterStop.filter(function (c) { return c.code == _this.code; });
        if (stopShow) {
            for (var i = 0; i < stopShow.length; i++) {
                this.spinePlay(stopShow[i]);
            }
        }
    };
    SymbolBase.prototype.startMove = function () { };
    SymbolBase.prototype.onSpineCompletedOnce = function (trackEntry, loopCount) {
        if (!this.trackEntries) {
            return;
        }
        var completed = false;
        for (var i = 0; i < this._trackEntries.length; i++) {
            var trackEntryCount = this.trackEntries[i];
            var tracks = trackEntryCount.trackEntries.filter(function (t) { return t.trackEntry.animation.name == trackEntry.animation.name; });
            if (tracks && tracks.length > 0) {
                for (var i_1 = 0; i_1 < tracks.length; i_1++) {
                    var track = tracks[i_1];
                    completed = trackEntryCount.completedOnce(track);
                }
                //break;
            }
        }
        if (completed) {
            this.checkAllSpineShowForPrizeCompleted();
        }
    };
    SymbolBase.prototype.checkAllSpineShowForPrizeCompleted = function () {
        var e_1, _a;
        var allCompleted = true;
        try {
            for (var _b = __values(this._trackEntries), _c = _b.next(); !_c.done; _c = _b.next()) {
                var trackEntryCount = _c.value;
                if (!trackEntryCount.completed) {
                    allCompleted = false;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (allCompleted) {
            if (this.isPlayByConfig) {
                if (this.playByConfigCallback) {
                    if (this.symbolGroup) {
                        this.symbolGroup.visible = true;
                    }
                    this.playByConfigCallback();
                }
            }
            else {
                this.prizeShowEnd();
            }
        }
    };
    SymbolBase.prototype.spinePlay = function (spine) {
        var spineComponent = this._spineComponents.get(spine.spineComponentName);
        var spineResource = this.spineResources.resources.get(spine.spineName);
        var tarckEntry;
        if (spineComponent && spineResource) {
            spineComponent.node.active = true;
            if (this.symbolGroup) {
                this.symbolGroup.visible = false;
            }
            spineComponent.skeletonData = spineResource;
            var count = spine.playParameters.length;
            if (spine.skin) {
                spineComponent.setSkin(spine.skin);
            }
            if (spine.scale) {
                spineResource.scale = spine.scale;
                spineComponent.node.scale = spine.scale;
            }
            spineComponent.premultipliedAlpha = spine.premultipliedAlpha;
            for (var i = 0; i < spine.playParameters.length; i++) {
                var animation = spine.playParameters[i];
                var isLast = i == count - 1;
                var isLoop = isLast ? animation.isLoop : false;
                if (i == 0) {
                    tarckEntry = spineComponent.setAnimation(0, animation.animationName, isLoop);
                }
                else {
                    tarckEntry = spineComponent.addAnimation(0, animation.animationName, isLoop);
                }
            }
        }
        return tarckEntry;
    };
    SymbolBase.prototype.startPrizeShow = function (finalPosition) {
        // console.log("startPrizeShow")
        this.isPlayByConfig = false;
        this.playByConfigCallback = null;
        this._finalPosition = finalPosition;
        if (this.inLineControllerName) {
            this.setControllerProperty(this.inLineControllerName, this.inLineControllerCode);
        }
        var playing = this.spineShow(this.spineShowForPrize);
        if (!playing) {
            this.playPrizeShow();
        }
    };
    SymbolBase.prototype.spineShow = function (configs) {
        var _this = this;
        this._trackEntries = [];
        var canBeShow = false;
        var prizeShowConfigs = configs.filter(function (s) { return s.code == _this.code; });
        if (!this.spineComponents || !prizeShowConfigs || prizeShowConfigs.length == 0) {
            return canBeShow;
        }
        var _loop_1 = function (i) {
            var tarckEntry = this_1.spinePlay(prizeShowConfigs[i]);
            if (tarckEntry) {
                var trackCount = this_1._trackEntries.find(function (t) { return t.componentName == prizeShowConfigs[i].spineComponentName; });
                if (!trackCount) {
                    trackCount = new SpineTrackEntryCount(prizeShowConfigs[i].spineComponentName, prizeShowConfigs[i].completeCount);
                    trackCount.addTrackEntry(tarckEntry);
                    this_1._trackEntries.push(trackCount);
                }
                canBeShow = true;
            }
        };
        var this_1 = this;
        for (var i = 0; i < prizeShowConfigs.length; i++) {
            _loop_1(i);
        }
        return canBeShow;
    };
    SymbolBase.prototype.playPrizeShow = function () {
        var _this = this;
        setTimeout(function () { return _this.prizeShowEnd(); }, 500);
    };
    SymbolBase.prototype.prizeShowEnd = function () {
        var e_2, _a;
        if (this.symbolGroup) {
            this.symbolGroup.visible = true;
        }
        try {
            for (var _b = __values(this._spineComponents), _c = _b.next(); !_c.done; _c = _b.next()) {
                var spineComponent = _c.value;
                spineComponent[1].node.active = false;
                spineComponent[1].clearTracks();
                spineComponent[1].skeletonData = null;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.setControllerProperty(this.inLineControllerName, 0);
        this.notifyPrizeShowCompleted();
    };
    SymbolBase.prototype.notifyPrizeShowCompleted = function () {
        var parent = this.parent;
        if (parent) {
            parent.receivePrizeShowCompleted(this._finalPosition);
        }
    };
    /**
     * 根据配置名称播放spine动画
     *
     * @param configName spine配置名称
     * @param callback spine执行完后回调
     */
    SymbolBase.prototype.playSpineByConfig = function (configName, callback) {
        if (!configName) {
            if (callback) {
                callback();
            }
            return;
        }
        var configs = this.spineShowConfigs[configName];
        if (configs) {
            this.isPlayByConfig = true;
            this.playByConfigCallback = callback;
            var playing = this.spineShow(configs);
            if (!playing) {
                if (callback) {
                    if (this.symbolGroup) {
                        this.symbolGroup.visible = true;
                    }
                    callback();
                }
            }
        }
        else {
            if (callback) {
                if (this.symbolGroup) {
                    this.symbolGroup.visible = true;
                }
                callback();
            }
        }
    };
    SymbolBase.prototype.reset = function () {
        var e_3, _a;
        if (this.symbolGroup) {
            this.symbolGroup.visible = true;
        }
        try {
            for (var _b = __values(this._spineComponents), _c = _b.next(); !_c.done; _c = _b.next()) {
                var spineComponent = _c.value;
                spineComponent[1].node.active = false;
                spineComponent[1].clearTracks();
                spineComponent[1].skeletonData = null;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.setControllerProperty(this.inLineControllerName, 0);
        this._trackEntries = [];
        this._isFinal = false;
        this.unscheduleAllCallbacks();
    };
    SymbolBase.prototype.doubleChessShow = function () {
        if (this.assets == 2 && (this.code == 1 || this.code == 0)) {
            this.setControllerProperty("doubleShow", 1);
        }
        else {
            this.setControllerProperty("doubleShow", 0);
        }
    };
    SymbolBase.prototype.fixedCellShow = function () { };
    SymbolBase.prototype.fixedCellHide = function () { };
    return SymbolBase;
}(FguiComponentBase_1.default));
exports.default = SymbolBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTeW1ib2xCb2FyZFxcU3ltYm9sQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHlEQUF3RDtBQUV4RCx1REFBc0Q7QUFDdEQsb0VBQStEO0FBQy9ELGdFQUEyRDtBQUMzRCx1RkFBa0Y7QUFDbEY7SUFJSSw4QkFBWSxhQUFxQixFQUFFLGFBQXFCO1FBRmhELGtCQUFhLEdBQXlDLEVBQUUsQ0FBQztRQUc3RCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUNELHNCQUFXLCtDQUFhO2FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsOENBQVk7YUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFDRDs7O09BR0c7SUFDSSw0Q0FBYSxHQUFwQixVQUFxQixVQUFlO1FBQ2hDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQTFCLENBQTBCLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0wsQ0FBQztJQUNEOzs7OztPQUtH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QUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQzthQUFNO1lBQ0gsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUM7SUFDTSxrQ0FBYSxHQUFwQixjQUErQixDQUFDO0lBQ3pCLGtDQUFhLEdBQXBCLGNBQStCLENBQUM7SUFDcEMsaUJBQUM7QUFBRCxDQTNiQSxBQTJiQyxDQTNiZ0QsMkJBQWlCLEdBMmJqRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTeW1ib2xTcGluZVJlc291cmNlIGZyb20gXCIuL1N5bWJvbFNwaW5lUmVzb3VyY2VcIjtcbmltcG9ydCBTeW1ib2xTcGluZVNob3dDb25maWcgZnJvbSBcIi4vU3ltYm9sU3BpbmVTaG93Q29uZmlnXCI7XG5pbXBvcnQgeyBNb2dhZmFTbG90cyB9IGZyb20gXCIuLi9Nb2dhZmFTbG90c1wiO1xuaW1wb3J0IHsgU3ltYm9sQm9hcmRTdGF0dXMgfSBmcm9tIFwiLi9TeW1ib2xCb2FyZFN0YXR1c1wiO1xuaW1wb3J0IENlbGxCYXNlIGZyb20gXCIuL0NlbGxCYXNlXCI7XG5pbXBvcnQgeyBTeW1ib2xCb2FyZENvbnN0IH0gZnJvbSBcIi4vU3ltYm9sQm9hcmRDb25zdFwiO1xuaW1wb3J0IFNsb3RHYW1lU3RhZ2VCYXNlIGZyb20gXCIuLi9HYW1lU3RhZ2UvU2xvdEdhbWVTdGFnZUJhc2VcIjtcbmltcG9ydCBNb2dhZmFTbG90c0dhbWVTdGFnZSBmcm9tIFwiLi4vTW9nYWZhU2xvdHNHYW1lU3RhZ2VcIjtcbmltcG9ydCBGZ3VpQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vZmFpcnlndWktY29tcG9uZW50L2xpYi9GZ3VpQ29tcG9uZW50QmFzZVwiO1xuY2xhc3MgU3BpbmVUcmFja0VudHJ5Q291bnQge1xuICAgIHByaXZhdGUgX2NvbXBvbmVudE5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIF90cmFja0VudHJpZXM6IHsgdHJhY2tFbnRyeTogYW55OyBjb3VudDogbnVtYmVyIH1bXSA9IFtdO1xuICAgIHByaXZhdGUgX2V4cGVjdGVkVGltZXM6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3Rvcihjb21wb25lbnROYW1lOiBzdHJpbmcsIGV4cGVjdGVkVGltZXM6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZTtcbiAgICAgICAgdGhpcy5fZXhwZWN0ZWRUaW1lcyA9IGV4cGVjdGVkVGltZXM7XG4gICAgICAgIGlmICh0aGlzLl9leHBlY3RlZFRpbWVzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4cGVjdGVkVGltZXMgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50TmFtZTtcbiAgICB9XG4gICAgcHVibGljIGdldCB0cmFja0VudHJpZXMoKTogeyB0cmFja0VudHJ5OiBhbnk7IGNvdW50OiBudW1iZXIgfVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYWNrRW50cmllcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog5re75YqgdHJhY2tFbnRyeVxuICAgICAqIEBwYXJhbSB0cmFja0VudHJ5IHRyYWNrRW50cnlcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkVHJhY2tFbnRyeSh0cmFja0VudHJ5OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5fdHJhY2tFbnRyaWVzLmZpbmQoKHQpID0+IHQudHJhY2tFbnRyeSA9PSB0cmFja0VudHJ5KTtcbiAgICAgICAgaWYgKCFvbGQpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNrRW50cmllcy5wdXNoKHsgdHJhY2tFbnRyeTogdHJhY2tFbnRyeSwgY291bnQ6IDAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5a6M5oiQ5LiA5qyh5Yqo55S75pKt5pS+XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHJhY2tFbnRyeSB0cmFja0VudHJ5XG4gICAgICogQHJldHVybnMg5YWo6YOo5a6M5oiQ5oyH5a6a5qyh5pWw6L+U5ZuedHJ1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBjb21wbGV0ZWRPbmNlKHRyYWNrRW50cnk6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgdHJhY2sgPSB0aGlzLl90cmFja0VudHJpZXMuZmluZCgodCkgPT4gdC50cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09IHRyYWNrRW50cnkudHJhY2tFbnRyeS5hbmltYXRpb24ubmFtZSk7XG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgdHJhY2suY291bnQrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaYr+WQpuWujOaIkFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY29tcGxldGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgdHJhY2sgPSB0aGlzLl90cmFja0VudHJpZXMuZmluZCgodCkgPT4gdC5jb3VudCA8IHRoaXMuZXhwZWN0ZWRUaW1lcyk7XG4gICAgICAgIHJldHVybiAhdHJhY2s7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBleHBlY3RlZFRpbWVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZXhwZWN0ZWRUaW1lcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZXhwZWN0ZWRUaW1lcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwZWN0ZWRUaW1lcztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTeW1ib2xCYXNlIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2UgaW1wbGVtZW50cyBNb2dhZmFTbG90cyB7XG4gICAgLyoqXG4gICAgICog5YWz5Y2h57yW56CBXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RhZ2VDb2RlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICog5omA5bGe5qC85a2QXG4gICAgICovXG4gICAgcHJpdmF0ZSBfY2VsbDogQ2VsbEJhc2U7XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blhbPljaHnvJbnoIFcbiAgICAgKi9cbiAgICBnZXQgc3RhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFnZUNvZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoee8lueggVxuICAgICAqL1xuICAgIHNldCBzdGFnZUNvZGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zdGFnZUNvZGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5omA5bGe5qC85a2QXG4gICAgICovXG4gICAgZ2V0IGNlbGwoKTogQ2VsbEJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2VsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6+572u5omA5bGe5qC85a2QXG4gICAgICovXG4gICAgc2V0IGNlbGwodmFsdWU6IENlbGxCYXNlKSB7XG4gICAgICAgIHRoaXMuX2NlbGwgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQm9hcmQgc3RhdHVzIG9mIHN5bWJvbCBiYXNlXG4gICAgICog5qOL55uY54q25oCBXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYm9hcmRTdGF0dXM6IFN5bWJvbEJvYXJkU3RhdHVzO1xuICAgIGdldCBib2FyZFN0YXR1cygpOiBTeW1ib2xCb2FyZFN0YXR1cyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib2FyZFN0YXR1cztcbiAgICB9XG4gICAgc2V0IGJvYXJkU3RhdHVzKHZhbHVlOiBTeW1ib2xCb2FyZFN0YXR1cykge1xuICAgICAgICB0aGlzLl9ib2FyZFN0YXR1cyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXR1cyAgb2Ygc3ltYm9sIGJhc2VcbiAgICAgKiDmo4vlrZDnirbmgIFcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3N0YXR1czogU3ltYm9sQm9hcmRTdGF0dXM7XG4gICAgZ2V0IHN0YXR1cygpOiBTeW1ib2xCb2FyZFN0YXR1cyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gICAgfVxuICAgIHNldCBzdGF0dXModmFsdWU6IFN5bWJvbEJvYXJkU3RhdHVzKSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgPT09IFN5bWJvbEJvYXJkU3RhdHVzLlN0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGxheVNwaW5lQnlDb25maWcodGhpcy5zcGluZVNob3dBZnRlclN0b3BDb25maWdOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09IFN5bWJvbEJvYXJkU3RhdHVzLlJlYWR5KSB7XG4gICAgICAgICAgICBsZXQgbWF0Y2hlZExpbmVzOiBudW1iZXJbXVtdID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChTbG90R2FtZVN0YWdlQmFzZS5zcGluUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGxldCBzbG90ID0gU2xvdEdhbWVTdGFnZUJhc2Uuc3BpblJlc3VsdHMuc2xvdHNbdGhpcy5jZWxsLnJlZWwuc3ltYm9sQm9hcmQuaW5kZXhdO1xuICAgICAgICAgICAgICAgIG1hdGNoZWRMaW5lcyA9IHNsb3QubWF0Y2hlZExpbmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFtYXRjaGVkTGluZXMgfHwgbWF0Y2hlZExpbmVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5U3BpbmVCeUNvbmZpZyh0aGlzLnNwaW5lU2hvd0ZvclN0YXRpb25hcnlCb2FyZENvbmZpZ05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaji+WtkHNwaW5l5Yqo55S757uE5Lu25ZCN56ewXG4gICAgICog5LiA5Liq5qOL5a2Q5pSv5oyB5aSa5Liqc3BpbmXliqjnlLvnu4Tku7ZcbiAgICAgKiDor7flj4LnhadTbG90R2FtZVN0YWdlQmFzZeeahHN5bWJvbFNwaW5lVXJsc1xuICAgICAqIOi1hOa6kOeahOmhuuW6j+S4jue7hOS7tueahOmhuuW6j+S4gOiHtFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgc3BpbmVDb21wb25lbnROYW1lcygpOiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiDmo4vlrZDlgZzmraLml7bpnIDopoHmkq3mlL7liqjnlLvnmoTorr7nva5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IHNwaW5lU2hvd0FmdGVyU3RvcCgpOiBTeW1ib2xTcGluZVNob3dDb25maWdbXTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHNwaW5lIHNob3cgZm9yIHN0YXRpb25hcnkgYm9hcmQgY29uZmlnIG5hbWVcbiAgICAgKiDojrflj5bmo4vnm5jpnZnmraLml7bpnIDopoHmkq3mlL7nmoRzcGluZeWKqOeUu+mFjee9ruWQjeensFxuICAgICAqIO+8iOmdmeatoueahOWQq+S5ieaYr+aXoOaji+WtkOabv+aNouOAgeaXoOi/nue6v+WxleekuuOAgeaXoOetueeggee7k+eul+aXtueahOaji+ebmO+8jOWHhuWkh+WlveS4i+S4gOasoXNwaW7ml7bnmoTnirbmgIHvvIlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IHNwaW5lU2hvd0ZvclN0YXRpb25hcnlCb2FyZENvbmZpZ05hbWUoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEdldHMgc3BpbmUgc2hvdyBhZnRlciBzdG9wIGNvbmZpZyBuYW1lXG4gICAgICog6I635Y+W5qOL5a2Q5YGc5LiL5pe25pKt5pS+55qEc3BpbmXliqjnlLvphY3nva7lkI3np7BcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IHNwaW5lU2hvd0FmdGVyU3RvcENvbmZpZ05hbWUoKTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICog5qOL5a2Q5Lit5aWW5bGV56S65piv6ZyA6KaB5pKt5pS+5Yqo55S755qE6K6+572uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBzcGluZVNob3dGb3JQcml6ZSgpOiBTeW1ib2xTcGluZVNob3dDb25maWdbXTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHNwaW5lIHNob3cgZm9yIHByaXplIGNvbmZpZyBuYW1lXG4gICAgICog6I635Y+W5qOL5a2Q5bGV56S65Lit5aWW6L+e57q/5pe25pKt5pS+55qEc3BpbmXliqjnlLvphY3nva7lkI3np7BcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IHNwaW5lU2hvd0ZvclByaXplQ29uZmlnTmFtZSgpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogR2V0cyBzcGluZSBzaG93IGNvbmZpZ3NcbiAgICAgKiDojrflj5ZzcGluZeWxleekuumFjee9rlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgc3BpbmVTaG93Q29uZmlncygpOiB7IFtrZXk6IHN0cmluZ106IFN5bWJvbFNwaW5lU2hvd0NvbmZpZ1tdIH07XG5cbiAgICAvKipcbiAgICAgKiDmo4vlrZDnmoRzcGluZeWKqOeUu+e7hOS7tu+8jOi/meaYr+mAmui/h3NwaW5lQ29tcG9uZW50TmFtZXPlkI3np7DliqDovb3nmoRcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zcGluZUNvbXBvbmVudHM6IE1hcDxzdHJpbmcsIHNwLlNrZWxldG9uPiA9IG5ldyBNYXA8c3RyaW5nLCBzcC5Ta2VsZXRvbj4oKTtcblxuICAgIC8qKlxuICAgICAqIOS/neWtmOaji+WtkOWcqOaji+ebmOS4iui/nue7ree8lueggeeahOS9jee9rlxuICAgICAqIOW9k+S4reWlluWxleekuuaViOaenOe7k+adn+WQju+8jOS8muWwhui/meS4quS9jee9ruaKpeWRiue7meaji+ebmFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZmluYWxQb3NpdGlvbjogbnVtYmVyO1xuICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY29kZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2lzRmluYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9hc3NldHM6IG51bWJlcjtcbiAgICBwcml2YXRlIF9nYW1lU3RhZ2U6IFNsb3RHYW1lU3RhZ2VCYXNlO1xuICAgIHByb3RlY3RlZCBzeW1ib2xHcm91cDogZmd1aS5HR3JvdXA7XG4gICAgcHJpdmF0ZSBfdHJhY2tFbnRyaWVzOiBTcGluZVRyYWNrRW50cnlDb3VudFtdO1xuICAgIHByaXZhdGUgaXNQbGF5QnlDb25maWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIHBsYXlCeUNvbmZpZ0NhbGxiYWNrOiBGdW5jdGlvbjtcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvZGVDb250cm9sbGVyTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJjb2RlXCI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlmZhaXJ5Z3Vp57yW6L6R5Zmo6K6+572u55qEaW5saW5l5o6n5Yi25Zmo5ZCN56ewXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBpbkxpbmVDb250cm9sbGVyTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJpbkxpbmVcIjtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5bGV56S6aW5saW5l5pWI5p6c55qE5o6n5Yi25Zmo57yW56CBXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBpbkxpbmVDb250cm9sbGVyQ29kZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBzeW1ib2xHcm91cENvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwic3ltYm9sR3JvdXBcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGNvZGUoY29kZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChjb2RlID49IFN5bWJvbEJvYXJkQ29uc3QuRklOQUxfQ09ERV9PRkZTRVQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRmluYWwgPSB0cnVlO1xuICAgICAgICAgICAgY29kZSA9IGNvZGUgLSBTeW1ib2xCb2FyZENvbnN0LkZJTkFMX0NPREVfT0ZGU0VUO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faXNGaW5hbCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eSh0aGlzLmNvZGVDb250cm9sbGVyTmFtZSwgY29kZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29kZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29kZTtcbiAgICB9XG4gICAgZ2V0IGlzRmluYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ZpbmFsO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGFzc2V0cygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXNzZXRzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGFzc2V0cyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2Fzc2V0cyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgICB9XG4gICAgcHVibGljIHNldCBpbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaSreaUvuS4gOe7hOWKqOeUu+S4reeahOacgOWQjuS4gOS4quWKqOeUu+eahHRyYWNrRW50cnnliJfooahcbiAgICAgKiDvvIjmr4/kuIDkuKpzcGluZee7hOS7tuWvueW6lOS4gOS4qnRyYWNrRW50cnnvvIlcbiAgICAgKiDmiJHku6znlKjov5nkuKp0cmFja0VudHJ55p2l55uR5ZCs6L+Z5LiA57uE5Yqo55S75pKt5pS+57uT5p2fXG4gICAgICog77yI5oiR5Lus5a6a5LmJ5LiA57uE5Yqo55S75pKt5pS+5a6M5oiQ5LiA5qyh55qE5ZCr5LmJ5piv6L+Z5LiA57uE5Yqo55S75omA5pyJ55qE5Yqo55S75pKt5pS+5LiA5qyh77yJXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCB0cmFja0VudHJpZXMoKTogU3BpbmVUcmFja0VudHJ5Q291bnRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFja0VudHJpZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaji+WtkHNwaW5l57uE5Lu25YiX6KGoXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCBzcGluZUNvbXBvbmVudHMoKTogTWFwPHN0cmluZywgc3AuU2tlbGV0b24+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwaW5lQ29tcG9uZW50cztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6I635Y+W5qOL5a2Qc3BpbmXotYTmupBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IHNwaW5lUmVzb3VyY2VzKCk6IFN5bWJvbFNwaW5lUmVzb3VyY2Uge1xuICAgICAgICAvLyBpZiAoIXRoaXMuX2dhbWVTdGFnZSkge1xuICAgICAgICAvLyAgICAgdGhpcy5fZ2FtZVN0YWdlID0gdGhpcy5maW5kR2FtZVN0YWdlKCk7XG4gICAgICAgIC8vICAgICBpZiAoIXRoaXMuX2dhbWVTdGFnZSkge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGxldCByZXNvdXJjZXMgPSBudWxsOyAvL3RoaXMuX2dhbWVTdGFnZS5nZXRTeW1ib2xTcGluZVJlc291cmNlc0J5Q29kZSh0aGlzLmNvZGUpO1xuICAgICAgICBpZiAocmVzb3VyY2VzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJlc291cmNlcyA9IE1vZ2FmYVNsb3RzR2FtZVN0YWdlLmdhbWVTdGFnZXNbdGhpcy5zdGFnZUNvZGVdLnN5bWJvbFNwaW5lUmVzb3VyY2VzLmZpbmQoXG4gICAgICAgICAgICAgICAgKHMpID0+IHMuY29kZSA9PSB0aGlzLmNvZGVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc291cmNlcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGFsbENoaWxkQ3JlYXRlZCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuYWxsQ2hpbGRDcmVhdGVkKCk7XG4gICAgICAgIGlmICh0aGlzLnN5bWJvbEdyb3VwQ29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5nZXRDaGlsZCh0aGlzLnN5bWJvbEdyb3VwQ29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xHcm91cCA9IGNvbXBvbmVudC5hc0dyb3VwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZmluZEdhbWVTdGFnZSgpOiBTbG90R2FtZVN0YWdlQmFzZSB7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChwYXJlbnQgYXMgdW5rbm93bikgYXMgU2xvdEdhbWVTdGFnZUJhc2U7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnNwaW5lQ29tcG9uZW50TmFtZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcGluZUNvbXBvbmVudE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwaW5lQ29udGFpbmVyID0gdGhpcy5nZXRDaGlsZCh0aGlzLnNwaW5lQ29tcG9uZW50TmFtZXNbaV0pLmFzR3JhcGg7XG4gICAgICAgICAgICAgICAgaWYgKCFzcGluZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihg5YyFJHt0aGlzLnBhY2thZ2VOYW1lfeaIlnNwaW5l5a655ZmoJHt0aGlzLnNwaW5lQ29tcG9uZW50TmFtZXN95LiN5a2Y5ZyoYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc3BpbmVDb21wb25lbnQgPSBzcGluZUNvbnRhaW5lci5ub2RlLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3BpbmVDb21wb25lbnRzLnNldCh0aGlzLnNwaW5lQ29tcG9uZW50TmFtZXNbaV0sIHNwaW5lQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICBzcGluZUNvbXBvbmVudC5zZXRDb21wbGV0ZUxpc3RlbmVyKHRoaXMub25TcGluZUNvbXBsZXRlZE9uY2UuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHN0b3BTaG93KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzdG9wU2hvdyA9IHRoaXMuc3BpbmVTaG93QWZ0ZXJTdG9wLmZpbHRlcigoYykgPT4gYy5jb2RlID09IHRoaXMuY29kZSk7XG4gICAgICAgIGlmIChzdG9wU2hvdykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9wU2hvdy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVQbGF5KHN0b3BTaG93W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhcnRNb3ZlKCk6IHZvaWQgeyB9XG4gICAgcHJpdmF0ZSBvblNwaW5lQ29tcGxldGVkT25jZSh0cmFja0VudHJ5OiBhbnksIGxvb3BDb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy50cmFja0VudHJpZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdHJhY2tFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFja0VudHJ5Q291bnQgPSB0aGlzLnRyYWNrRW50cmllc1tpXTtcbiAgICAgICAgICAgIGxldCB0cmFja3MgPSB0cmFja0VudHJ5Q291bnQudHJhY2tFbnRyaWVzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAodCkgPT4gdC50cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lID09IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAodHJhY2tzICYmIHRyYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhY2sgPSB0cmFja3NbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA9IHRyYWNrRW50cnlDb3VudC5jb21wbGV0ZWRPbmNlKHRyYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9icmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQWxsU3BpbmVTaG93Rm9yUHJpemVDb21wbGV0ZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNoZWNrQWxsU3BpbmVTaG93Rm9yUHJpemVDb21wbGV0ZWQoKTogdm9pZCB7XG4gICAgICAgIGxldCBhbGxDb21wbGV0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCB0cmFja0VudHJ5Q291bnQgb2YgdGhpcy5fdHJhY2tFbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAoIXRyYWNrRW50cnlDb3VudC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBhbGxDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWxsQ29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1BsYXlCeUNvbmZpZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlCeUNvbmZpZ0NhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN5bWJvbEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbEdyb3VwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUJ5Q29uZmlnQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJpemVTaG93RW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIHNwaW5lUGxheShzcGluZTogU3ltYm9sU3BpbmVTaG93Q29uZmlnKTogYW55IHtcbiAgICAgICAgY29uc3Qgc3BpbmVDb21wb25lbnQgPSB0aGlzLl9zcGluZUNvbXBvbmVudHMuZ2V0KHNwaW5lLnNwaW5lQ29tcG9uZW50TmFtZSk7XG4gICAgICAgIGNvbnN0IHNwaW5lUmVzb3VyY2UgPSB0aGlzLnNwaW5lUmVzb3VyY2VzLnJlc291cmNlcy5nZXQoc3BpbmUuc3BpbmVOYW1lKTtcbiAgICAgICAgbGV0IHRhcmNrRW50cnk6IGFueTtcbiAgICAgICAgaWYgKHNwaW5lQ29tcG9uZW50ICYmIHNwaW5lUmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHNwaW5lQ29tcG9uZW50Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN5bWJvbEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xHcm91cC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGluZUNvbXBvbmVudC5za2VsZXRvbkRhdGEgPSBzcGluZVJlc291cmNlO1xuXG4gICAgICAgICAgICBsZXQgY291bnQgPSBzcGluZS5wbGF5UGFyYW1ldGVycy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoc3BpbmUuc2tpbikge1xuICAgICAgICAgICAgICAgIHNwaW5lQ29tcG9uZW50LnNldFNraW4oc3BpbmUuc2tpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzcGluZS5zY2FsZSkge1xuICAgICAgICAgICAgICAgIHNwaW5lUmVzb3VyY2Uuc2NhbGUgPSBzcGluZS5zY2FsZVxuICAgICAgICAgICAgICAgIHNwaW5lQ29tcG9uZW50Lm5vZGUuc2NhbGUgPSBzcGluZS5zY2FsZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGluZUNvbXBvbmVudC5wcmVtdWx0aXBsaWVkQWxwaGEgPSBzcGluZS5wcmVtdWx0aXBsaWVkQWxwaGFcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGluZS5wbGF5UGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IHNwaW5lLnBsYXlQYXJhbWV0ZXJzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTGFzdCA9IGkgPT0gY291bnQgLSAxO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTG9vcCA9IGlzTGFzdCA/IGFuaW1hdGlvbi5pc0xvb3AgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmNrRW50cnkgPSBzcGluZUNvbXBvbmVudC5zZXRBbmltYXRpb24oMCwgYW5pbWF0aW9uLmFuaW1hdGlvbk5hbWUsIGlzTG9vcCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyY2tFbnRyeSA9IHNwaW5lQ29tcG9uZW50LmFkZEFuaW1hdGlvbigwLCBhbmltYXRpb24uYW5pbWF0aW9uTmFtZSwgaXNMb29wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmNrRW50cnk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGFydFByaXplU2hvdyhmaW5hbFBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydFByaXplU2hvd1wiKVxuICAgICAgICB0aGlzLmlzUGxheUJ5Q29uZmlnID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGxheUJ5Q29uZmlnQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICB0aGlzLl9maW5hbFBvc2l0aW9uID0gZmluYWxQb3NpdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuaW5MaW5lQ29udHJvbGxlck5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KHRoaXMuaW5MaW5lQ29udHJvbGxlck5hbWUsIHRoaXMuaW5MaW5lQ29udHJvbGxlckNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYXlpbmcgPSB0aGlzLnNwaW5lU2hvdyh0aGlzLnNwaW5lU2hvd0ZvclByaXplKTtcbiAgICAgICAgaWYgKCFwbGF5aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlQcml6ZVNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNwaW5lU2hvdyhjb25maWdzOiBTeW1ib2xTcGluZVNob3dDb25maWdbXSk6IGJvb2xlYW4ge1xuICAgICAgICB0aGlzLl90cmFja0VudHJpZXMgPSBbXTtcbiAgICAgICAgbGV0IGNhbkJlU2hvdzogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBjb25zdCBwcml6ZVNob3dDb25maWdzID0gY29uZmlncy5maWx0ZXIoKHMpID0+IHMuY29kZSA9PSB0aGlzLmNvZGUpO1xuICAgICAgICBpZiAoIXRoaXMuc3BpbmVDb21wb25lbnRzIHx8ICFwcml6ZVNob3dDb25maWdzIHx8IHByaXplU2hvd0NvbmZpZ3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjYW5CZVNob3c7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcml6ZVNob3dDb25maWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGFyY2tFbnRyeSA9IHRoaXMuc3BpbmVQbGF5KHByaXplU2hvd0NvbmZpZ3NbaV0pO1xuICAgICAgICAgICAgaWYgKHRhcmNrRW50cnkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdHJhY2tDb3VudCA9IHRoaXMuX3RyYWNrRW50cmllcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAodCkgPT4gdC5jb21wb25lbnROYW1lID09IHByaXplU2hvd0NvbmZpZ3NbaV0uc3BpbmVDb21wb25lbnROYW1lXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRyYWNrQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tDb3VudCA9IG5ldyBTcGluZVRyYWNrRW50cnlDb3VudChcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXplU2hvd0NvbmZpZ3NbaV0uc3BpbmVDb21wb25lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpemVTaG93Q29uZmlnc1tpXS5jb21wbGV0ZUNvdW50XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRyYWNrQ291bnQuYWRkVHJhY2tFbnRyeSh0YXJja0VudHJ5KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhY2tFbnRyaWVzLnB1c2godHJhY2tDb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbkJlU2hvdyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbkJlU2hvdztcbiAgICB9XG4gICAgcHJvdGVjdGVkIHBsYXlQcml6ZVNob3coKTogdm9pZCB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcml6ZVNob3dFbmQoKSwgNTAwKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHByaXplU2hvd0VuZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc3ltYm9sR3JvdXApIHtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sR3JvdXAudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgc3BpbmVDb21wb25lbnQgb2YgdGhpcy5fc3BpbmVDb21wb25lbnRzKSB7XG4gICAgICAgICAgICBzcGluZUNvbXBvbmVudFsxXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgc3BpbmVDb21wb25lbnRbMV0uY2xlYXJUcmFja3MoKTtcbiAgICAgICAgICAgIHNwaW5lQ29tcG9uZW50WzFdLnNrZWxldG9uRGF0YSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkodGhpcy5pbkxpbmVDb250cm9sbGVyTmFtZSwgMCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJpemVTaG93Q29tcGxldGVkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBub3RpZnlQcml6ZVNob3dDb21wbGV0ZWQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLnBhcmVudCBhcyB1bmtub3duKSBhcyBDZWxsQmFzZTtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgcGFyZW50LnJlY2VpdmVQcml6ZVNob3dDb21wbGV0ZWQodGhpcy5fZmluYWxQb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5qC55o2u6YWN572u5ZCN56ew5pKt5pS+c3BpbmXliqjnlLtcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWdOYW1lIHNwaW5l6YWN572u5ZCN56ewXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHNwaW5l5omn6KGM5a6M5ZCO5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHBsYXlTcGluZUJ5Q29uZmlnKGNvbmZpZ05hbWU6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBpZiAoIWNvbmZpZ05hbWUpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29uZmlncyA9IHRoaXMuc3BpbmVTaG93Q29uZmlnc1tjb25maWdOYW1lXTtcbiAgICAgICAgaWYgKGNvbmZpZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuaXNQbGF5QnlDb25maWcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wbGF5QnlDb25maWdDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgY29uc3QgcGxheWluZyA9IHRoaXMuc3BpbmVTaG93KGNvbmZpZ3MpO1xuICAgICAgICAgICAgaWYgKCFwbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN5bWJvbEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbEdyb3VwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ltYm9sR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xHcm91cC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN5bWJvbEdyb3VwKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbEdyb3VwLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHNwaW5lQ29tcG9uZW50IG9mIHRoaXMuX3NwaW5lQ29tcG9uZW50cykge1xuICAgICAgICAgICAgc3BpbmVDb21wb25lbnRbMV0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHNwaW5lQ29tcG9uZW50WzFdLmNsZWFyVHJhY2tzKCk7XG4gICAgICAgICAgICBzcGluZUNvbXBvbmVudFsxXS5za2VsZXRvbkRhdGEgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KHRoaXMuaW5MaW5lQ29udHJvbGxlck5hbWUsIDApO1xuICAgICAgICB0aGlzLl90cmFja0VudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5faXNGaW5hbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG4gICAgZG91YmxlQ2hlc3NTaG93KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hc3NldHMgPT0gMiAmJiAodGhpcy5jb2RlID09IDEgfHwgdGhpcy5jb2RlID09IDApKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcImRvdWJsZVNob3dcIiwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShcImRvdWJsZVNob3dcIiwgMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGZpeGVkQ2VsbFNob3coKTogdm9pZCB7IH1cbiAgICBwdWJsaWMgZml4ZWRDZWxsSGlkZSgpOiB2b2lkIHsgfVxufVxuIl19
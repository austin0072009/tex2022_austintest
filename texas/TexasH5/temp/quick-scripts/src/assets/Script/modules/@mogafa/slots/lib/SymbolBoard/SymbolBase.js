"use strict";
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
"use strict";
cc._RF.push(module, '3a8ba0WxjFPaYDdSc+lp/rD', 'TurningWaitingResultsConfig');
// Script/modules/@mogafa/slots/lib/TurningWaitingResultsConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SymbolSpinType_1 = require("./SymbolSpinType");
var TurningWaitingResultsConfig = /** @class */ (function () {
    function TurningWaitingResultsConfig() {
        /**
         * 正常转动时的棋子转动方式
         */
        this._spinType = SymbolSpinType_1.SymbolSpinType.Column;
        /**
         * respin时棋子的转动方式
         */
        this._respinType = SymbolSpinType_1.SymbolSpinType.Cell;
        /**
         * 启动回弹开始
         */
        this._startUpResilience = null;
        /**
         * 启动回弹
         */
        this._startDownResilience = null;
        /**
         * 结束回弹开始
         */
        this._endDownResilience = null;
        /**
         * 结束回弹结束
         */
        this._endUpResilience = null;
        /**
         * 定时间隔时长，单位毫秒
         */
        this._interval = 0;
        /**
         * 转动速度
         */
        this._step = 20;
        /**
         * holdwin转动速度
         */
        this._holdWinStep = 40;
        /**
         * 停止转动的速度
         */
        this._stopStep = 30;
        /**
         * 人工停止转动的速度，如果为0则表示立即停止
         */
        this._manualStopStep = 120;
        /**
         * 如果没有主动按stop，自动停止的时长
         */
        this._autoStopTimeout = 3000;
        /**
         * holdWin时没有主动按stop，自动停止的时长
         */
        this._holdWinStopTimeout = 1000;
        /**
         * Skip hold win of turning waiting results config
         * 手动停止的时候是否跳过后面的holdwin
         */
        this._skipHoldWin = true;
        /**
         * 每列棋子数（注意包含用于转动的隐藏棋子）
         */
        this._cellAmountInColumns = [];
        /**
         * 每列之间的启动间隔时长，如果为空则表示同时启动
         */
        this._startIntervalEachColumn = [];
        /**
         * 每列之间的停止间隔时长，如果为空则表示同时停止
         */
        this._stopIntervalEachColumn = [];
        /**
         * 手工停止时每列之间的停止间隔时长，如果为空则表示同时停止
         */
        this._manualStopIntervalEachColumn = [];
        /**
         * Stop interval each cell of turning waiting results config
         * respin时，每个格子停止的间隔时长，这个时长是相对于第一个格子的
         */
        this._stopIntervalEachCell = [];
    }
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "startUpResilience", {
        get: function () {
            return this._startUpResilience;
        },
        set: function (value) {
            this._startUpResilience = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "startDownResilience", {
        get: function () {
            return this._startDownResilience;
        },
        set: function (value) {
            this._startDownResilience = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "endDownResilience", {
        get: function () {
            return this._endDownResilience;
        },
        set: function (value) {
            this._endDownResilience = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "endUpResilience", {
        get: function () {
            return this._endUpResilience;
        },
        set: function (value) {
            this._endUpResilience = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "interval", {
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "cellAmountInColumns", {
        get: function () {
            return this._cellAmountInColumns;
        },
        set: function (value) {
            this._cellAmountInColumns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "spinType", {
        get: function () {
            return this._spinType;
        },
        set: function (value) {
            this._spinType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "respinType", {
        get: function () {
            return this._respinType;
        },
        set: function (value) {
            this._respinType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "startIntervalEachColumn", {
        get: function () {
            return this._startIntervalEachColumn;
        },
        set: function (value) {
            this._startIntervalEachColumn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "stopIntervalEachColumn", {
        get: function () {
            return this._stopIntervalEachColumn;
        },
        set: function (value) {
            this._stopIntervalEachColumn = value;
            if (!this._stopIntervalEachColumn) {
                this._stopIntervalEachColumn = [];
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "manualStopIntervalEachColumn", {
        get: function () {
            return this._manualStopIntervalEachColumn;
        },
        set: function (value) {
            this._manualStopIntervalEachColumn = value;
            if (!this._manualStopIntervalEachColumn) {
                this._manualStopIntervalEachColumn = [];
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "stopIntervalEachCell", {
        get: function () {
            return this._stopIntervalEachCell;
        },
        set: function (value) {
            this._stopIntervalEachCell = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "stopIntervalInRespinCell", {
        get: function () {
            return this._stopIntervalInRespinCell;
        },
        set: function (value) {
            this._stopIntervalInRespinCell = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (value) {
            this._step = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "holdWinStep", {
        get: function () {
            return this._holdWinStep;
        },
        set: function (value) {
            this._holdWinStep = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "stopStep", {
        get: function () {
            return this._stopStep;
        },
        set: function (value) {
            this._stopStep = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "manualStopStep", {
        get: function () {
            return this._manualStopStep;
        },
        set: function (value) {
            this._manualStopStep = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "autoStopTimeout", {
        get: function () {
            return this._autoStopTimeout;
        },
        set: function (value) {
            this._autoStopTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "holdWinStopTimeout", {
        get: function () {
            return this._holdWinStopTimeout;
        },
        set: function (value) {
            this._holdWinStopTimeout = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsConfig.prototype, "skipHoldWin", {
        get: function () {
            return this._skipHoldWin;
        },
        set: function (value) {
            this._skipHoldWin = value;
        },
        enumerable: false,
        configurable: true
    });
    return TurningWaitingResultsConfig;
}());
exports.default = TurningWaitingResultsConfig;

cc._RF.pop();
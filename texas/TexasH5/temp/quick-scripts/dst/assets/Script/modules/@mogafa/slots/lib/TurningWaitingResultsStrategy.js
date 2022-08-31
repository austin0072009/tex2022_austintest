
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/TurningWaitingResultsStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '214bfyl9mhLS5YbMbgIz+Qw', 'TurningWaitingResultsStrategy');
// Script/modules/@mogafa/slots/lib/TurningWaitingResultsStrategy.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WaitingResultsColumn_1 = require("./WaitingResultsColumn");
var SymbolSpinType_1 = require("./SymbolSpinType");
var WaitingResultsCell_1 = require("./WaitingResultsCell");
var IntervalEachColumn_1 = require("./IntervalEachColumn");
var WaitingResultsSpinStatus_1 = require("./WaitingResultsSpinStatus");
var WaitingResultsStep_1 = require("./WaitingResultsStep");
var SymbolBoardConst_1 = require("./SymbolBoard/SymbolBoardConst");
var SymbolBoardStatus_1 = require("./SymbolBoard/SymbolBoardStatus");
var NumberUtils_1 = require("../../utils/lib/NumberUtils");
var SpinResultsGameMode_1 = require("../../../spin-result/SpinResultsGameMode");
var TurningWaitingResultsStrategy = /** @class */ (function () {
    function TurningWaitingResultsStrategy(chessboard, cellAmountInColumns, config) {
        this._resultsColumns = null;
        this.reels = [];
        this._cellAmountInColumns = [];
        this._startIntervalEachColumn = [];
        this._stopIntervalEachColumnTemplate = [];
        this._stopIntervalEachCellTemplate = [];
        this._stopIntervalEachCell = [];
        this._manualStopIntervalEachColumnTemplate = [];
        this._holdWinShowedOnce = false;
        this.hasCellHoldWin = false;
        this._isPause = false;
        this._pauseBuffer = [];
        this._config = config;
        this.$chessboard = chessboard;
        this._cellAmountInColumns = cellAmountInColumns;
        this._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal;
        this.initColumns();
        this.$chessboard.onColumnResultsSet(this.onSymbolBoardReelStopped, this);
        this.$chessboard.onCellResultSet(this.onSymbolBoardCellStopped, this);
        this.$chessboard.onResultsSet(this.onSymbolBoardStopped, this);
        this.$chessboard.onResultsReceived(this.onSymbolBoardResultsReceived, this);
    }
    Object.defineProperty(TurningWaitingResultsStrategy.prototype, "chessboard", {
        get: function () {
            return this.$chessboard;
        },
        enumerable: false,
        configurable: true
    });
    TurningWaitingResultsStrategy.prototype.initColumns = function () {
        var startInterval = 0;
        var stopInterval = 0;
        var stopIntervalCell = 0;
        for (var i = 0; i < this._cellAmountInColumns.length; i++) {
            var steps = [];
            steps.push(new WaitingResultsStep_1.default(WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal, this._config.step));
            steps.push(new WaitingResultsStep_1.default(WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping, this._config.stopStep));
            steps.push(new WaitingResultsStep_1.default(WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.ManualStopping, this._config.manualStopStep));
            steps.push(new WaitingResultsStep_1.default(WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.HoldWin, this._config.holdWinStep));
            var column = new WaitingResultsColumn_1.default(this.$chessboard.maxCode, steps);
            this.reels.push(column);
            var cellAmount = this._cellAmountInColumns[i];
            if (this._config.spinType == SymbolSpinType_1.SymbolSpinType.Cell || this._config.respinType == SymbolSpinType_1.SymbolSpinType.Cell) {
                for (var j = 0; j < cellAmount; j++) {
                    column.addCell(new WaitingResultsCell_1.default(this.$chessboard.maxCode));
                    var theLastTime = 0;
                    var cellPosition = this._stopIntervalEachCellTemplate.length;
                    if (cellPosition !== 0) {
                        theLastTime =
                            this._stopIntervalEachCellTemplate[cellPosition - 1].interval +
                                this._config.stopIntervalInRespinCell;
                    }
                    this._stopIntervalEachCellTemplate.push(new IntervalEachColumn_1.default(theLastTime));
                }
            }
            if (this._config.startIntervalEachColumn) {
                if (i >= this._config.startIntervalEachColumn.length) {
                    this._startIntervalEachColumn.push(new IntervalEachColumn_1.default(startInterval));
                }
                else {
                    startInterval = startInterval + this._config.startIntervalEachColumn[i];
                    this._startIntervalEachColumn.push(new IntervalEachColumn_1.default(startInterval));
                }
            }
            else {
                this._startIntervalEachColumn.push(new IntervalEachColumn_1.default(0));
            }
            if (this._config.stopIntervalEachColumn) {
                if (i >= this._config.stopIntervalEachColumn.length) {
                    this._stopIntervalEachColumnTemplate.push(new IntervalEachColumn_1.default(0));
                }
                else {
                    stopInterval = this._config.stopIntervalEachColumn[i];
                    this._stopIntervalEachColumnTemplate.push(new IntervalEachColumn_1.default(stopInterval));
                }
            }
            else {
                this._stopIntervalEachColumnTemplate.push(new IntervalEachColumn_1.default(0));
            }
            if (this._config.manualStopIntervalEachColumn) {
                if (i >= this._config.manualStopIntervalEachColumn.length) {
                    this._manualStopIntervalEachColumnTemplate.push(new IntervalEachColumn_1.default(0));
                }
                else {
                    stopInterval = this._config.manualStopIntervalEachColumn[i];
                    this._manualStopIntervalEachColumnTemplate.push(new IntervalEachColumn_1.default(stopInterval));
                }
            }
            else {
                this._manualStopIntervalEachColumnTemplate.push(new IntervalEachColumn_1.default(0));
            }
        }
    };
    TurningWaitingResultsStrategy.prototype.startWaiting = function (excludeCodes) {
        this._excludeCodes = excludeCodes;
        this._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning;
        this.$chessboard.schedule(this.waiting.bind(this), this._config.interval);
        var spinType = this._config.spinType;
        if (spinType == SymbolSpinType_1.SymbolSpinType.Column) {
            this.reelStart();
        }
        else {
            this.cellStart();
        }
        this._autoStopTime = new Date().getTime() + this._config.autoStopTimeout;
    };
    TurningWaitingResultsStrategy.prototype.reelStart = function () {
        var _loop_1 = function (i) {
            var interval = this_1._startIntervalEachColumn[i];
            if (interval.timer) {
                clearTimeout(interval.timer);
            }
            var reel = this_1.reels[i];
            reel.excludeCodes = this_1._excludeCodes;
            if (interval.interval <= 0) {
                reel.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning;
            }
            else {
                var timer = setTimeout(function () {
                    if (reel.spinStatus == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal) {
                        reel.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning;
                    }
                }, interval.interval);
                interval.timer = timer;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.reels.length; i++) {
            _loop_1(i);
        }
    };
    TurningWaitingResultsStrategy.prototype.cellStart = function () {
        for (var i = 0; i < this.reels.length; i++) {
            var interval = this._startIntervalEachColumn[i];
            var reel = this.reels[i];
            var _loop_2 = function (j) {
                var cell = reel.cells[j];
                cell.excludeCodes = this_2._excludeCodes;
                if (interval.interval <= 0) {
                    cell.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning;
                }
                else {
                    var timer = setTimeout(function () {
                        if (cell.spinStatus == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal) {
                            cell.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning;
                        }
                    }, interval.interval);
                    interval.timer = timer;
                }
            };
            var this_2 = this;
            for (var j = 0; j < reel.cells.length; j++) {
                _loop_2(j);
            }
        }
    };
    TurningWaitingResultsStrategy.prototype.autoStop = function () {
        var now = new Date().getTime();
        if (this.$chessboard.canStop() &&
            now >= this._autoStopTime &&
            this._spinResults &&
            this._spinStatus == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning) {
            this._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping;
            this._autoStopTime = new Date(2900, 1, 1).getTime();
            this.stopWaiting();
        }
    };
    TurningWaitingResultsStrategy.prototype.waiting = function () {
        if (this.$chessboard.status == SymbolBoardStatus_1.SymbolBoardStatus.Spinning) {
            this.autoStop();
            var spinType = this._config.spinType;
            if (spinType == SymbolSpinType_1.SymbolSpinType.Column) {
                this.reelMove();
            }
            else {
                this.cellMove();
            }
        }
    };
    TurningWaitingResultsStrategy.prototype.reelMove = function () {
        for (var i = 0; i < this.reels.length; i++) {
            var reel = this.reels[i];
            if (reel.spinStatus != WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal) {
                var step = reel.currentStep;
                if (this._config.startUpResilience && this._config.startDownResilience) {
                    this.$chessboard.reelStartResilienceConfig(i, this._config.startUpResilience, this._config.startDownResilience);
                }
                if (this._config.endDownResilience && this._config.endUpResilience) {
                    this.$chessboard.reelEndResilienceConfig(i, this._config.endDownResilience, this._config.endUpResilience);
                }
                var newCode = this.$chessboard.columnMoveY(i, step, reel.theNextCode);
                if (newCode) {
                    reel.nextCode();
                }
            }
        }
    };
    TurningWaitingResultsStrategy.prototype.cellMove = function () {
        var position = 0;
        for (var i = 0; i < this.reels.length; i++) {
            var reel = this.reels[i];
            var step = reel.currentStep;
            for (var j = 0; j < reel.cells.length; j++) {
                var cell = reel.cells[j];
                if (cell.spinStatus != WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal &&
                    cell.spinStatus != WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopped) {
                    var newCode = this.$chessboard.cellMoveY(i, j, step, cell.theNextCode);
                    if (newCode) {
                        cell.nextCode();
                    }
                }
                position++;
            }
        }
    };
    TurningWaitingResultsStrategy.prototype.stopWaiting = function (isManual) {
        if (!this._spinResults) {
            return;
        }
        //todo 如果有holdwin没有停，这是点击stop，直接停当前的holdwin继续停holdwin
        var spinType = this._config.spinType;
        if (spinType == SymbolSpinType_1.SymbolSpinType.Column) {
            this.reelStop(isManual);
        }
        else {
            this.cellStop(isManual);
        }
    };
    Object.defineProperty(TurningWaitingResultsStrategy.prototype, "isPause", {
        get: function () {
            return this._isPause;
        },
        set: function (value) {
            this._isPause = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TurningWaitingResultsStrategy.prototype, "isPauseBuffer", {
        get: function () {
            return this._isPauseBuffer;
        },
        set: function (value) {
            this._isPauseBuffer = value;
            if (this._isPauseBuffer) {
                this.clearPauseBuffer();
            }
        },
        enumerable: false,
        configurable: true
    });
    TurningWaitingResultsStrategy.prototype.clearPauseBuffer = function () {
        var _this = this;
        if (this._pauseBuffer && this._pauseBuffer.length > 0) {
            this._pauseBuffer.map(function (item) {
                if (item.cellSpin) {
                    _this.pushStopCodesForCell(item.i);
                }
                else {
                    item.reel.pushStopCodes();
                }
                item.reel.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping;
                _this._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping;
            });
        }
    };
    TurningWaitingResultsStrategy.prototype.reelStop = function (isManual, cellSpin) {
        var _loop_3 = function (i) {
            var wouldBeBreak = false;
            var reel = this_3.reels[i];
            var interval = this_3._stopIntervalEachColumnTemplate[i].interval;
            var startInterval = this_3._startIntervalEachColumn[i];
            if (startInterval.timer) {
                clearTimeout(startInterval.timer);
            }
            if (isManual) {
                interval = 0;
                if (this_3._manualStopIntervalEachColumnTemplate[i]) {
                    interval = this_3._manualStopIntervalEachColumnTemplate[i].interval;
                }
            }
            switch (reel.spinStatus) {
                case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopped:
                case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping:
                case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.ManualStopping: return "continue";
                case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning:
                    var notSkipHoldWin = this_3._spinStatus == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping ||
                        !this_3._config.skipHoldWin ||
                        (this_3._config.skipHoldWin && !this_3._holdWinShowedOnce);
                    if (reel.isHoldWin && notSkipHoldWin) {
                        reel.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.HoldWin;
                        interval = this_3._config.holdWinStopTimeout;
                        this_3._autoStopTime = new Date().getTime() + interval;
                        this_3.$chessboard.columnHoldWin(i);
                        this_3._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning;
                        wouldBeBreak = true;
                        this_3._holdWinShowedOnce = true;
                    }
                    break;
                case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.HoldWin:
                    if (!isManual && this_3._spinStatus == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning) {
                        wouldBeBreak = true;
                    }
                    interval = 0;
                    break;
                case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal:
                    break;
            }
            if (wouldBeBreak) {
                return "break";
            }
            if (interval <= 0) {
                if (this_3.isPause) {
                    this_3._pauseBuffer.push({
                        cellSpin: cellSpin,
                        i: i,
                        reel: reel,
                    });
                }
                else {
                    if (cellSpin) {
                        this_3.pushStopCodesForCell(i);
                    }
                    else {
                        reel.pushStopCodes();
                    }
                    reel.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping;
                    this_3._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping;
                }
                if (isManual) {
                    reel.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.ManualStopping;
                    this_3._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.ManualStopping;
                }
            }
            else {
                if (this_3.isPause) {
                    this_3._pauseBuffer.push({
                        cellSpin: cellSpin,
                        i: i,
                        reel: reel,
                    });
                }
                else {
                    if (cellSpin) {
                        reel.timer = setTimeout(this_3.pushStopCodesForCell.bind(this_3), interval, i);
                    }
                    else {
                        reel.timer = setTimeout(function () {
                            reel.pushStopCodes();
                        }, interval);
                    }
                    return "break";
                }
            }
        };
        var this_3 = this;
        for (var i = 0; i < this.reels.length; i++) {
            var state_1 = _loop_3(i);
            if (state_1 === "break")
                break;
        }
    };
    TurningWaitingResultsStrategy.prototype.cellStop = function (isManual) {
        if (this._spinResults.gameMode == SpinResultsGameMode_1.SpinResultsGameMode.Respin || this.hasCellHoldWin) {
            this.cellStopForRespin(isManual);
            return;
        }
        this.reelStop(isManual, this._config.spinType == SymbolSpinType_1.SymbolSpinType.Cell);
    };
    TurningWaitingResultsStrategy.prototype.cellStopForRespin = function (isManual) {
        if (this._spinResults.gameMode != SpinResultsGameMode_1.SpinResultsGameMode.Respin) {
            var hasHoldWin = false;
            for (var i = 0; i < this.reels.length; i++) {
                var reel = this.reels[i];
                for (var j = 0; j < reel.cells.length; j++) {
                    var cell = reel.cells[j];
                    switch (cell.spinStatus) {
                        case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopped:
                        case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping:
                        case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.ManualStopping:
                            continue;
                            break;
                        case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning:
                            if (!cell.isHoldWin) {
                                reel.pushStopCodesForCell(j);
                            }
                            else {
                                this.$chessboard.cellHoldWin(i, j);
                                cell.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.HoldWin;
                                hasHoldWin = true;
                            }
                            break;
                        case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.HoldWin:
                            if (isManual) {
                                reel.pushStopCodesForCell(j);
                                if (cell.timer) {
                                    clearTimeout(cell.timer);
                                }
                            }
                            else {
                                if (this._spinStatus == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping) {
                                    reel.pushStopCodesForCell(j);
                                }
                            }
                            break;
                        case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal:
                            break;
                    }
                }
                if (hasHoldWin) {
                    this._autoStopTime = new Date().getTime() + this._config.stopIntervalInRespinCell;
                    this._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning;
                }
            }
            return;
        }
        var wouldBeBreak = false;
        for (var i = 0; i < this.reels.length; i++) {
            var reel = this.reels[i];
            for (var j = 0; j < reel.cells.length; j++) {
                var cell = reel.cells[j];
                switch (cell.spinStatus) {
                    case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopped:
                        continue;
                        break;
                    case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping:
                    case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.ManualStopping:
                        wouldBeBreak = true;
                        break;
                    case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning:
                        if (cell.fixed) {
                            reel.pushStopCodesForCell(j);
                            break;
                        }
                        if (!cell.isHoldWin) {
                            cell.timer = setTimeout(this.pushStopCodesForCell.bind(this), this._config.stopIntervalInRespinCell, i, j);
                            wouldBeBreak = true;
                        }
                        else {
                            this.$chessboard.cellHoldWin(i, j);
                            cell.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.HoldWin;
                            this._autoStopTime = new Date().getTime() + this._config.stopIntervalInRespinCell;
                            this._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Spinning;
                            wouldBeBreak = true;
                        }
                        break;
                    case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.HoldWin:
                        if (isManual) {
                            reel.pushStopCodesForCell(j);
                        }
                        else {
                            if (this._spinStatus == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopping) {
                                reel.pushStopCodesForCell(j);
                            }
                        }
                        break;
                    case WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal:
                        break;
                }
                if (wouldBeBreak) {
                    break;
                }
            }
            if (wouldBeBreak) {
                break;
            }
        }
    };
    TurningWaitingResultsStrategy.prototype.pushStopCodesForCell = function (reelIndex, cellIndex) {
        var reel = this.reels[reelIndex];
        if (cellIndex == null) {
            for (var i = 0; i < reel.cells.length; i++) {
                reel.pushStopCodesForCell(i);
            }
            return;
        }
        reel.pushStopCodesForCell(cellIndex);
    };
    TurningWaitingResultsStrategy.prototype.onSymbolBoardReelStopped = function (reelIndex) {
        if (this._config.respinType == SymbolSpinType_1.SymbolSpinType.Cell &&
            (this._spinResults.gameMode == SpinResultsGameMode_1.SpinResultsGameMode.Respin || this.hasCellHoldWin)) {
            return;
        }
        var reel = this.reels[reelIndex];
        if (!reel) {
            cc.error("\u5217\u4E0D\u5B58\u5728\uFF0C\u7D22\u5F15" + reelIndex);
            return;
        }
        reel.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopped;
        if (reel.timer) {
            clearTimeout(reel.timer);
        }
        var isManual = this._spinStatus == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.ManualStopping;
        this.reelStop(isManual, this._config.spinType == SymbolSpinType_1.SymbolSpinType.Cell);
    };
    TurningWaitingResultsStrategy.prototype.onSymbolBoardCellStopped = function (reelIndex, cellIndex) {
        if (this._spinResults.gameMode != SpinResultsGameMode_1.SpinResultsGameMode.Respin && !this.hasCellHoldWin) {
            return;
        }
        var cell = this.reels[reelIndex].cells[cellIndex];
        cell.spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Stopped;
        if (cell.timer) {
            clearTimeout(cell.timer);
        }
        var isManual = this._spinStatus == WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.ManualStopping;
        this.cellStopForRespin(isManual);
    };
    TurningWaitingResultsStrategy.prototype.getNextReelIndex = function (reelIndex, cellIndex) {
        var reel = this.reels[reelIndex];
        if (cellIndex < reel.cells.length - 1) {
            return reelIndex;
        }
        if (reelIndex >= reel.cells.length - 1) {
            return -1;
        }
        return reelIndex + 1;
    };
    TurningWaitingResultsStrategy.prototype.getCellPosition = function (reelIndex, cellIndex) {
        var position = -1;
        for (var i = 0; i < this.reels.length; i++) {
            if (i > reelIndex) {
                break;
            }
            var reel = this.reels[i];
            var endCellIndex = reel.cells.length - 1;
            if (i == reelIndex) {
                endCellIndex = cellIndex;
            }
            for (var j = 0; j <= endCellIndex; j++) {
                position++;
            }
        }
        return position;
    };
    TurningWaitingResultsStrategy.prototype.onSymbolBoardStopped = function () {
        for (var i = 0; i < this._stopIntervalEachCell.length; i++) {
            var interval = this._stopIntervalEachCell[i];
            if (interval.timer) {
                clearTimeout(interval.timer);
            }
        }
        this._stopIntervalEachCell = [];
        this.$chessboard.unschedule(this.waiting.bind(this));
    };
    TurningWaitingResultsStrategy.prototype.onSymbolBoardResultsReceived = function (spinResults) {
        this.reelResults(spinResults);
        this.cellResults(spinResults);
        this._spinResults = spinResults;
    };
    TurningWaitingResultsStrategy.prototype.reelResults = function (spinResults) {
        this._resultsColumns = spinResults.columns;
        var holdWinInterval = 0;
        for (var i = 0; i < this.reels.length; i++) {
            var result = this._resultsColumns[i];
            var reel = this.reels[i];
            reel.stopCodes = [];
            var extraCellCount = this.$chessboard.getColumnExtraCellCount(i);
            for (var j = 0; j < extraCellCount.bottom; j++) {
                reel.stopCodes.push(NumberUtils_1.default.random(0, this.$chessboard.maxCode, this._excludeCodes));
            }
            for (var j = result.stopCodes.length - 1; j >= 0; j--) {
                reel.stopCodes.push(result.stopCodes[j]);
            }
            for (var j = 0; j < extraCellCount.top; j++) {
                reel.stopCodes.push(NumberUtils_1.default.random(0, this.$chessboard.maxCode, this._excludeCodes));
            }
            reel.isHoldWin = result.isHoldWin;
        }
    };
    TurningWaitingResultsStrategy.prototype.cellResults = function (spinResults) {
        this.hasCellHoldWin = false;
        var position = 0;
        var skipInterval = 0;
        var stopInterval = this._config.stopIntervalInRespinCell;
        for (var i = 0; i < this._stopIntervalEachCell.length; i++) {
            var interval = this._stopIntervalEachCell[i];
            if (interval.timer) {
                clearTimeout(interval.timer);
            }
        }
        this._stopIntervalEachCell = [];
        for (var i = 0; i < this.reels.length; i++) {
            var reel = this.reels[i];
            var reelResult = this._resultsColumns[i];
            for (var j = 0; j < reel.cells.length; j++) {
                var interval = this._stopIntervalEachCellTemplate[position];
                interval = new IntervalEachColumn_1.default(interval.interval);
                this._stopIntervalEachCell.push(interval);
                var cell = reel.cells[j];
                var resultCell = reelResult.cells[j];
                cell.fixed = resultCell.fixed;
                cell.isHoldWin = resultCell.isHoldWin;
                if (cell.fixed) {
                    skipInterval += this._config.stopIntervalInRespinCell;
                }
                interval.interval -= skipInterval;
                if (cell.isHoldWin) {
                    this.hasCellHoldWin = true;
                    cell.holdWinShowing = false;
                    interval.interval = SymbolBoardConst_1.SymbolBoardConst.HOLD_WIN_INTERVAL_OFFSET;
                }
                position++;
            }
        }
    };
    TurningWaitingResultsStrategy.prototype.reset = function () {
        this._resultsColumns = [];
        this._spinResults = null;
        this._holdWinShowedOnce = false;
        this.hasCellHoldWin = false;
        this._pauseBuffer = [];
        this.isPauseBuffer = false;
        for (var i = 0; i < this.reels.length; i++) {
            var reel = this.reels[i];
            reel.reset();
        }
        for (var i = 0; i < this._stopIntervalEachCell.length; i++) {
            var interval = this._stopIntervalEachCell[i];
            if (interval.timer) {
                clearTimeout(interval.timer);
            }
        }
        this._stopIntervalEachCell = [];
        this._spinStatus = WaitingResultsSpinStatus_1.WaitingResultsSpinStatus.Normal;
    };
    return TurningWaitingResultsStrategy;
}());
exports.default = TurningWaitingResultsStrategy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxUdXJuaW5nV2FpdGluZ1Jlc3VsdHNTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLCtEQUEwRDtBQUUxRCxtREFBa0Q7QUFDbEQsMkRBQXNEO0FBRXRELDJEQUFzRDtBQUN0RCx1RUFBc0U7QUFDdEUsMkRBQXNEO0FBQ3RELG1FQUFrRTtBQUNsRSxxRUFBb0U7QUFDcEUsMkRBQXNEO0FBR3RELGdGQUErRTtBQU8vRTtJQWtCSSx1Q0FBWSxVQUF1QixFQUFFLG1CQUE2QixFQUFFLE1BQW1DO1FBZi9GLG9CQUFlLEdBQXdCLElBQUksQ0FBQztRQUM1QyxVQUFLLEdBQTJCLEVBQUUsQ0FBQztRQUMxQix5QkFBb0IsR0FBYSxFQUFFLENBQUM7UUFDN0MsNkJBQXdCLEdBQXlCLEVBQUUsQ0FBQztRQUNwRCxvQ0FBK0IsR0FBeUIsRUFBRSxDQUFDO1FBQzNELGtDQUE2QixHQUF5QixFQUFFLENBQUM7UUFDekQsMEJBQXFCLEdBQXlCLEVBQUUsQ0FBQztRQUVqRCwwQ0FBcUMsR0FBeUIsRUFBRSxDQUFDO1FBS2pFLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQW1OaEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQWtCMUIsaUJBQVksR0FBbUIsRUFBRSxDQUFDO1FBbk90QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQW1CLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxtREFBd0IsQ0FBQyxNQUFNLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFD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TSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEM7U0FDSjtRQUNELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxtREFBd0IsQ0FBQyxNQUFNLENBQUM7SUFDdkQsQ0FBQztJQUNMLG9DQUFDO0FBQUQsQ0F6bUJBLEFBeW1CQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElXYWl0aW5nUmVzdWx0c1N0cmF0ZWd5IGZyb20gXCIuL0lXYWl0aW5nUmVzdWx0c1N0cmF0ZWd5XCI7XG5pbXBvcnQgU3ltYm9sQm9hcmQgZnJvbSBcIi4vU3ltYm9sQm9hcmQvU3ltYm9sQm9hcmRcIjtcbmltcG9ydCBXYWl0aW5nUmVzdWx0c0NvbHVtbiBmcm9tIFwiLi9XYWl0aW5nUmVzdWx0c0NvbHVtblwiO1xuaW1wb3J0IFR1cm5pbmdXYWl0aW5nUmVzdWx0c0NvbmZpZyBmcm9tIFwiLi9UdXJuaW5nV2FpdGluZ1Jlc3VsdHNDb25maWdcIjtcbmltcG9ydCB7IFN5bWJvbFNwaW5UeXBlIH0gZnJvbSBcIi4vU3ltYm9sU3BpblR5cGVcIjtcbmltcG9ydCBXYWl0aW5nUmVzdWx0c0NlbGwgZnJvbSBcIi4vV2FpdGluZ1Jlc3VsdHNDZWxsXCI7XG5cbmltcG9ydCBJbnRlcnZhbEVhY2hDb2x1bW4gZnJvbSBcIi4vSW50ZXJ2YWxFYWNoQ29sdW1uXCI7XG5pbXBvcnQgeyBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMgfSBmcm9tIFwiLi9XYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXNcIjtcbmltcG9ydCBXYWl0aW5nUmVzdWx0c1N0ZXAgZnJvbSBcIi4vV2FpdGluZ1Jlc3VsdHNTdGVwXCI7XG5pbXBvcnQgeyBTeW1ib2xCb2FyZENvbnN0IH0gZnJvbSBcIi4vU3ltYm9sQm9hcmQvU3ltYm9sQm9hcmRDb25zdFwiO1xuaW1wb3J0IHsgU3ltYm9sQm9hcmRTdGF0dXMgfSBmcm9tIFwiLi9TeW1ib2xCb2FyZC9TeW1ib2xCb2FyZFN0YXR1c1wiO1xuaW1wb3J0IE51bWJlclV0aWxzIGZyb20gXCIuLi8uLi91dGlscy9saWIvTnVtYmVyVXRpbHNcIjtcbmltcG9ydCBTcGluUmVzdWx0c0NvbHVtbiBmcm9tIFwiLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNDb2x1bW5cIjtcbmltcG9ydCBTcGluUmVzdWx0c1Nsb3QgZnJvbSBcIi4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzU2xvdFwiO1xuaW1wb3J0IHsgU3BpblJlc3VsdHNHYW1lTW9kZSB9IGZyb20gXCIuLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c0dhbWVNb2RlXCI7XG5cbmludGVyZmFjZSBJUGF1c2VCdWZmZXIge1xuICAgIGNlbGxTcGluOiBib29sZWFuO1xuICAgIGk6IG51bWJlcjtcbiAgICByZWVsOiBXYWl0aW5nUmVzdWx0c0NvbHVtbjtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1cm5pbmdXYWl0aW5nUmVzdWx0c1N0cmF0ZWd5IGltcGxlbWVudHMgSVdhaXRpbmdSZXN1bHRzU3RyYXRlZ3kge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NvbmZpZzogVHVybmluZ1dhaXRpbmdSZXN1bHRzQ29uZmlnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgJGNoZXNzYm9hcmQ6IFN5bWJvbEJvYXJkO1xuICAgIHByaXZhdGUgX3Jlc3VsdHNDb2x1bW5zOiBTcGluUmVzdWx0c0NvbHVtbltdID0gbnVsbDtcbiAgICBwcml2YXRlIHJlZWxzOiBXYWl0aW5nUmVzdWx0c0NvbHVtbltdID0gW107XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY2VsbEFtb3VudEluQ29sdW1uczogbnVtYmVyW10gPSBbXTtcbiAgICBwcml2YXRlIF9zdGFydEludGVydmFsRWFjaENvbHVtbjogSW50ZXJ2YWxFYWNoQ29sdW1uW10gPSBbXTtcbiAgICBwcml2YXRlIF9zdG9wSW50ZXJ2YWxFYWNoQ29sdW1uVGVtcGxhdGU6IEludGVydmFsRWFjaENvbHVtbltdID0gW107XG4gICAgcHJpdmF0ZSBfc3RvcEludGVydmFsRWFjaENlbGxUZW1wbGF0ZTogSW50ZXJ2YWxFYWNoQ29sdW1uW10gPSBbXTtcbiAgICBwcml2YXRlIF9zdG9wSW50ZXJ2YWxFYWNoQ2VsbDogSW50ZXJ2YWxFYWNoQ29sdW1uW10gPSBbXTtcblxuICAgIHByaXZhdGUgX21hbnVhbFN0b3BJbnRlcnZhbEVhY2hDb2x1bW5UZW1wbGF0ZTogSW50ZXJ2YWxFYWNoQ29sdW1uW10gPSBbXTtcbiAgICBwcml2YXRlIF9hdXRvU3RvcFRpbWU6IG51bWJlcjtcbiAgICBwcml2YXRlIF9leGNsdWRlQ29kZXM6IG51bWJlcltdO1xuICAgIHByaXZhdGUgX3NwaW5SZXN1bHRzOiBTcGluUmVzdWx0c1Nsb3Q7XG4gICAgcHJpdmF0ZSBfc3BpblN0YXR1czogV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzO1xuICAgIHByaXZhdGUgX2hvbGRXaW5TaG93ZWRPbmNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBoYXNDZWxsSG9sZFdpbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNvbnN0cnVjdG9yKGNoZXNzYm9hcmQ6IFN5bWJvbEJvYXJkLCBjZWxsQW1vdW50SW5Db2x1bW5zOiBudW1iZXJbXSwgY29uZmlnOiBUdXJuaW5nV2FpdGluZ1Jlc3VsdHNDb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLiRjaGVzc2JvYXJkID0gY2hlc3Nib2FyZDtcbiAgICAgICAgdGhpcy5fY2VsbEFtb3VudEluQ29sdW1ucyA9IGNlbGxBbW91bnRJbkNvbHVtbnM7XG4gICAgICAgIHRoaXMuX3NwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuTm9ybWFsO1xuICAgICAgICB0aGlzLmluaXRDb2x1bW5zKCk7XG4gICAgICAgIHRoaXMuJGNoZXNzYm9hcmQub25Db2x1bW5SZXN1bHRzU2V0KHRoaXMub25TeW1ib2xCb2FyZFJlZWxTdG9wcGVkLCB0aGlzKTtcbiAgICAgICAgdGhpcy4kY2hlc3Nib2FyZC5vbkNlbGxSZXN1bHRTZXQodGhpcy5vblN5bWJvbEJvYXJkQ2VsbFN0b3BwZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLiRjaGVzc2JvYXJkLm9uUmVzdWx0c1NldCh0aGlzLm9uU3ltYm9sQm9hcmRTdG9wcGVkLCB0aGlzKTtcbiAgICAgICAgdGhpcy4kY2hlc3Nib2FyZC5vblJlc3VsdHNSZWNlaXZlZCh0aGlzLm9uU3ltYm9sQm9hcmRSZXN1bHRzUmVjZWl2ZWQsIHRoaXMpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNoZXNzYm9hcmQoKTogU3ltYm9sQm9hcmQge1xuICAgICAgICByZXR1cm4gdGhpcy4kY2hlc3Nib2FyZDtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0Q29sdW1ucygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHN0YXJ0SW50ZXJ2YWw6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBzdG9wSW50ZXJ2YWw6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBzdG9wSW50ZXJ2YWxDZWxsOiBudW1iZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NlbGxBbW91bnRJbkNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdGVwczogV2FpdGluZ1Jlc3VsdHNTdGVwW10gPSBbXTtcbiAgICAgICAgICAgIHN0ZXBzLnB1c2gobmV3IFdhaXRpbmdSZXN1bHRzU3RlcChXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuTm9ybWFsLCB0aGlzLl9jb25maWcuc3RlcCkpO1xuICAgICAgICAgICAgc3RlcHMucHVzaChuZXcgV2FpdGluZ1Jlc3VsdHNTdGVwKFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5TdG9wcGluZywgdGhpcy5fY29uZmlnLnN0b3BTdGVwKSk7XG4gICAgICAgICAgICBzdGVwcy5wdXNoKG5ldyBXYWl0aW5nUmVzdWx0c1N0ZXAoV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLk1hbnVhbFN0b3BwaW5nLCB0aGlzLl9jb25maWcubWFudWFsU3RvcFN0ZXApKTtcbiAgICAgICAgICAgIHN0ZXBzLnB1c2gobmV3IFdhaXRpbmdSZXN1bHRzU3RlcChXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuSG9sZFdpbiwgdGhpcy5fY29uZmlnLmhvbGRXaW5TdGVwKSk7XG5cbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBuZXcgV2FpdGluZ1Jlc3VsdHNDb2x1bW4odGhpcy4kY2hlc3Nib2FyZC5tYXhDb2RlLCBzdGVwcyk7XG4gICAgICAgICAgICB0aGlzLnJlZWxzLnB1c2goY29sdW1uKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxBbW91bnQgPSB0aGlzLl9jZWxsQW1vdW50SW5Db2x1bW5zW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5zcGluVHlwZSA9PSBTeW1ib2xTcGluVHlwZS5DZWxsIHx8IHRoaXMuX2NvbmZpZy5yZXNwaW5UeXBlID09IFN5bWJvbFNwaW5UeXBlLkNlbGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNlbGxBbW91bnQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uYWRkQ2VsbChuZXcgV2FpdGluZ1Jlc3VsdHNDZWxsKHRoaXMuJGNoZXNzYm9hcmQubWF4Q29kZSkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGhlTGFzdFRpbWU6IG51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsUG9zaXRpb24gPSB0aGlzLl9zdG9wSW50ZXJ2YWxFYWNoQ2VsbFRlbXBsYXRlLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGxQb3NpdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlTGFzdFRpbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BJbnRlcnZhbEVhY2hDZWxsVGVtcGxhdGVbY2VsbFBvc2l0aW9uIC0gMV0uaW50ZXJ2YWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zdG9wSW50ZXJ2YWxJblJlc3BpbkNlbGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcEludGVydmFsRWFjaENlbGxUZW1wbGF0ZS5wdXNoKG5ldyBJbnRlcnZhbEVhY2hDb2x1bW4odGhlTGFzdFRpbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5fY29uZmlnLnN0YXJ0SW50ZXJ2YWxFYWNoQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5fY29uZmlnLnN0YXJ0SW50ZXJ2YWxFYWNoQ29sdW1uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydEludGVydmFsRWFjaENvbHVtbi5wdXNoKG5ldyBJbnRlcnZhbEVhY2hDb2x1bW4oc3RhcnRJbnRlcnZhbCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0SW50ZXJ2YWwgPSBzdGFydEludGVydmFsICsgdGhpcy5fY29uZmlnLnN0YXJ0SW50ZXJ2YWxFYWNoQ29sdW1uW2ldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGFydEludGVydmFsRWFjaENvbHVtbi5wdXNoKG5ldyBJbnRlcnZhbEVhY2hDb2x1bW4oc3RhcnRJbnRlcnZhbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRJbnRlcnZhbEVhY2hDb2x1bW4ucHVzaChuZXcgSW50ZXJ2YWxFYWNoQ29sdW1uKDApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuc3RvcEludGVydmFsRWFjaENvbHVtbikge1xuICAgICAgICAgICAgICAgIGlmIChpID49IHRoaXMuX2NvbmZpZy5zdG9wSW50ZXJ2YWxFYWNoQ29sdW1uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdG9wSW50ZXJ2YWxFYWNoQ29sdW1uVGVtcGxhdGUucHVzaChuZXcgSW50ZXJ2YWxFYWNoQ29sdW1uKDApKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdG9wSW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuc3RvcEludGVydmFsRWFjaENvbHVtbltpXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RvcEludGVydmFsRWFjaENvbHVtblRlbXBsYXRlLnB1c2gobmV3IEludGVydmFsRWFjaENvbHVtbihzdG9wSW50ZXJ2YWwpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3BJbnRlcnZhbEVhY2hDb2x1bW5UZW1wbGF0ZS5wdXNoKG5ldyBJbnRlcnZhbEVhY2hDb2x1bW4oMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5tYW51YWxTdG9wSW50ZXJ2YWxFYWNoQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5fY29uZmlnLm1hbnVhbFN0b3BJbnRlcnZhbEVhY2hDb2x1bW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hbnVhbFN0b3BJbnRlcnZhbEVhY2hDb2x1bW5UZW1wbGF0ZS5wdXNoKG5ldyBJbnRlcnZhbEVhY2hDb2x1bW4oMCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3BJbnRlcnZhbCA9IHRoaXMuX2NvbmZpZy5tYW51YWxTdG9wSW50ZXJ2YWxFYWNoQ29sdW1uW2ldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYW51YWxTdG9wSW50ZXJ2YWxFYWNoQ29sdW1uVGVtcGxhdGUucHVzaChuZXcgSW50ZXJ2YWxFYWNoQ29sdW1uKHN0b3BJbnRlcnZhbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFudWFsU3RvcEludGVydmFsRWFjaENvbHVtblRlbXBsYXRlLnB1c2gobmV3IEludGVydmFsRWFjaENvbHVtbigwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRXYWl0aW5nKGV4Y2x1ZGVDb2RlczogbnVtYmVyW10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fZXhjbHVkZUNvZGVzID0gZXhjbHVkZUNvZGVzO1xuICAgICAgICB0aGlzLl9zcGluU3RhdHVzID0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlNwaW5uaW5nO1xuICAgICAgICB0aGlzLiRjaGVzc2JvYXJkLnNjaGVkdWxlKHRoaXMud2FpdGluZy5iaW5kKHRoaXMpLCB0aGlzLl9jb25maWcuaW50ZXJ2YWwpO1xuICAgICAgICBsZXQgc3BpblR5cGUgPSB0aGlzLl9jb25maWcuc3BpblR5cGU7XG4gICAgICAgIGlmIChzcGluVHlwZSA9PSBTeW1ib2xTcGluVHlwZS5Db2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMucmVlbFN0YXJ0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNlbGxTdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2F1dG9TdG9wVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5fY29uZmlnLmF1dG9TdG9wVGltZW91dDtcbiAgICB9XG4gICAgcHJpdmF0ZSByZWVsU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSB0aGlzLl9zdGFydEludGVydmFsRWFjaENvbHVtbltpXTtcbiAgICAgICAgICAgIGlmIChpbnRlcnZhbC50aW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChpbnRlcnZhbC50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWVsID0gdGhpcy5yZWVsc1tpXTtcbiAgICAgICAgICAgIHJlZWwuZXhjbHVkZUNvZGVzID0gdGhpcy5fZXhjbHVkZUNvZGVzO1xuICAgICAgICAgICAgaWYgKGludGVydmFsLmludGVydmFsIDw9IDApIHtcbiAgICAgICAgICAgICAgICByZWVsLnNwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuU3Bpbm5pbmc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWVsLnNwaW5TdGF0dXMgPT0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLk5vcm1hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVlbC5zcGluU3RhdHVzID0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlNwaW5uaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGludGVydmFsLnRpbWVyID0gdGltZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjZWxsU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSB0aGlzLl9zdGFydEludGVydmFsRWFjaENvbHVtbltpXTtcbiAgICAgICAgICAgIGNvbnN0IHJlZWwgPSB0aGlzLnJlZWxzW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZWVsLmNlbGxzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJlZWwuY2VsbHNbal07XG4gICAgICAgICAgICAgICAgY2VsbC5leGNsdWRlQ29kZXMgPSB0aGlzLl9leGNsdWRlQ29kZXM7XG4gICAgICAgICAgICAgICAgaWYgKGludGVydmFsLmludGVydmFsIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zcGluU3RhdHVzID0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlNwaW5uaW5nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5zcGluU3RhdHVzID09IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5Ob3JtYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnNwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuU3Bpbm5pbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIGludGVydmFsLmludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwudGltZXIgPSB0aW1lcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhdXRvU3RvcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuJGNoZXNzYm9hcmQuY2FuU3RvcCgpICYmXG4gICAgICAgICAgICBub3cgPj0gdGhpcy5fYXV0b1N0b3BUaW1lICYmXG4gICAgICAgICAgICB0aGlzLl9zcGluUmVzdWx0cyAmJlxuICAgICAgICAgICAgdGhpcy5fc3BpblN0YXR1cyA9PSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuU3Bpbm5pbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLl9zcGluU3RhdHVzID0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlN0b3BwaW5nO1xuICAgICAgICAgICAgdGhpcy5fYXV0b1N0b3BUaW1lID0gbmV3IERhdGUoMjkwMCwgMSwgMSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdGhpcy5zdG9wV2FpdGluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgd2FpdGluZygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuJGNoZXNzYm9hcmQuc3RhdHVzID09IFN5bWJvbEJvYXJkU3RhdHVzLlNwaW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9TdG9wKCk7XG4gICAgICAgICAgICBsZXQgc3BpblR5cGUgPSB0aGlzLl9jb25maWcuc3BpblR5cGU7XG5cbiAgICAgICAgICAgIGlmIChzcGluVHlwZSA9PSBTeW1ib2xTcGluVHlwZS5Db2x1bW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZWxNb3ZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2VsbE1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHJlZWxNb3ZlKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZWwgPSB0aGlzLnJlZWxzW2ldO1xuICAgICAgICAgICAgaWYgKHJlZWwuc3BpblN0YXR1cyAhPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuTm9ybWFsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSByZWVsLmN1cnJlbnRTdGVwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuc3RhcnRVcFJlc2lsaWVuY2UgJiYgdGhpcy5fY29uZmlnLnN0YXJ0RG93blJlc2lsaWVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kY2hlc3Nib2FyZC5yZWVsU3RhcnRSZXNpbGllbmNlQ29uZmlnKFxuICAgICAgICAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zdGFydFVwUmVzaWxpZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zdGFydERvd25SZXNpbGllbmNlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb25maWcuZW5kRG93blJlc2lsaWVuY2UgJiYgdGhpcy5fY29uZmlnLmVuZFVwUmVzaWxpZW5jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGVzc2JvYXJkLnJlZWxFbmRSZXNpbGllbmNlQ29uZmlnKFxuICAgICAgICAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5lbmREb3duUmVzaWxpZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5lbmRVcFJlc2lsaWVuY2VcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29kZSA9IHRoaXMuJGNoZXNzYm9hcmQuY29sdW1uTW92ZVkoaSwgc3RlcCwgcmVlbC50aGVOZXh0Q29kZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0NvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVlbC5uZXh0Q29kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNlbGxNb3ZlKCk6IHZvaWQge1xuICAgICAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVlbCA9IHRoaXMucmVlbHNbaV07XG4gICAgICAgICAgICBsZXQgc3RlcCA9IHJlZWwuY3VycmVudFN0ZXA7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlZWwuY2VsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gcmVlbC5jZWxsc1tqXTtcblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zcGluU3RhdHVzICE9IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5Ob3JtYWwgJiZcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5zcGluU3RhdHVzICE9IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5TdG9wcGVkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvZGUgPSB0aGlzLiRjaGVzc2JvYXJkLmNlbGxNb3ZlWShpLCBqLCBzdGVwLCBjZWxsLnRoZU5leHRDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwubmV4dENvZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3BXYWl0aW5nKGlzTWFudWFsPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX3NwaW5SZXN1bHRzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy90b2RvIOWmguaenOaciWhvbGR3aW7msqHmnInlgZzvvIzov5nmmK/ngrnlh7tzdG9w77yM55u05o6l5YGc5b2T5YmN55qEaG9sZHdpbue7p+e7reWBnGhvbGR3aW5cbiAgICAgICAgbGV0IHNwaW5UeXBlID0gdGhpcy5fY29uZmlnLnNwaW5UeXBlO1xuXG4gICAgICAgIGlmIChzcGluVHlwZSA9PSBTeW1ib2xTcGluVHlwZS5Db2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMucmVlbFN0b3AoaXNNYW51YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jZWxsU3RvcChpc01hbnVhbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBfaXNQYXVzZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBnZXQgaXNQYXVzZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzUGF1c2U7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgaXNQYXVzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc1BhdXNlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNQYXVzZUJ1ZmZlcjogYm9vbGVhbjtcbiAgICBwdWJsaWMgZ2V0IGlzUGF1c2VCdWZmZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1BhdXNlQnVmZmVyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGlzUGF1c2VCdWZmZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNQYXVzZUJ1ZmZlciA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5faXNQYXVzZUJ1ZmZlcikge1xuICAgICAgICAgICAgdGhpcy5jbGVhclBhdXNlQnVmZmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBfcGF1c2VCdWZmZXI6IElQYXVzZUJ1ZmZlcltdID0gW107XG4gICAgcHVibGljIGNsZWFyUGF1c2VCdWZmZXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9wYXVzZUJ1ZmZlciAmJiB0aGlzLl9wYXVzZUJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXVzZUJ1ZmZlci5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jZWxsU3Bpbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2hTdG9wQ29kZXNGb3JDZWxsKGl0ZW0uaSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZWVsLnB1c2hTdG9wQ29kZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbS5yZWVsLnNwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuU3RvcHBpbmc7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3BpblN0YXR1cyA9IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5TdG9wcGluZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVlbFN0b3AoaXNNYW51YWw/OiBib29sZWFuLCBjZWxsU3Bpbj86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd291bGRCZUJyZWFrOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCByZWVsID0gdGhpcy5yZWVsc1tpXTtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuX3N0b3BJbnRlcnZhbEVhY2hDb2x1bW5UZW1wbGF0ZVtpXS5pbnRlcnZhbDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW50ZXJ2YWwgPSB0aGlzLl9zdGFydEludGVydmFsRWFjaENvbHVtbltpXTtcbiAgICAgICAgICAgIGlmIChzdGFydEludGVydmFsLnRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHN0YXJ0SW50ZXJ2YWwudGltZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTWFudWFsKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSAwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tYW51YWxTdG9wSW50ZXJ2YWxFYWNoQ29sdW1uVGVtcGxhdGVbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSB0aGlzLl9tYW51YWxTdG9wSW50ZXJ2YWxFYWNoQ29sdW1uVGVtcGxhdGVbaV0uaW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChyZWVsLnNwaW5TdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5TdG9wcGVkOlxuICAgICAgICAgICAgICAgIGNhc2UgV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlN0b3BwaW5nOlxuICAgICAgICAgICAgICAgIGNhc2UgV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLk1hbnVhbFN0b3BwaW5nOlxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5TcGlubmluZzpcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm90U2tpcEhvbGRXaW4gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BpblN0YXR1cyA9PSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuU3RvcHBpbmcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLl9jb25maWcuc2tpcEhvbGRXaW4gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9jb25maWcuc2tpcEhvbGRXaW4gJiYgIXRoaXMuX2hvbGRXaW5TaG93ZWRPbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZWwuaXNIb2xkV2luICYmIG5vdFNraXBIb2xkV2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWVsLnNwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuSG9sZFdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsID0gdGhpcy5fY29uZmlnLmhvbGRXaW5TdG9wVGltZW91dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2F1dG9TdG9wVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgaW50ZXJ2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGVzc2JvYXJkLmNvbHVtbkhvbGRXaW4oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zcGluU3RhdHVzID0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlNwaW5uaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgd291bGRCZUJyZWFrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvbGRXaW5TaG93ZWRPbmNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5Ib2xkV2luOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTWFudWFsICYmIHRoaXMuX3NwaW5TdGF0dXMgPT0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlNwaW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3VsZEJlQnJlYWsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGludGVydmFsID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuTm9ybWFsOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3b3VsZEJlQnJlYWspIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnRlcnZhbCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNQYXVzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXVzZUJ1ZmZlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxTcGluLFxuICAgICAgICAgICAgICAgICAgICAgICAgaSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZWwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsU3Bpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoU3RvcENvZGVzRm9yQ2VsbChpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZWwucHVzaFN0b3BDb2RlcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZWwuc3BpblN0YXR1cyA9IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5TdG9wcGluZztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BpblN0YXR1cyA9IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5TdG9wcGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTWFudWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZWwuc3BpblN0YXR1cyA9IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5NYW51YWxTdG9wcGluZztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BpblN0YXR1cyA9IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5NYW51YWxTdG9wcGluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUGF1c2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGF1c2VCdWZmZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsU3BpbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgICAgICByZWVsLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbFNwaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZWwudGltZXIgPSBzZXRUaW1lb3V0KHRoaXMucHVzaFN0b3BDb2Rlc0ZvckNlbGwuYmluZCh0aGlzKSwgaW50ZXJ2YWwsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVlbC50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZWwucHVzaFN0b3BDb2RlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNlbGxTdG9wKGlzTWFudWFsPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3BpblJlc3VsdHMuZ2FtZU1vZGUgPT0gU3BpblJlc3VsdHNHYW1lTW9kZS5SZXNwaW4gfHwgdGhpcy5oYXNDZWxsSG9sZFdpbikge1xuICAgICAgICAgICAgdGhpcy5jZWxsU3RvcEZvclJlc3Bpbihpc01hbnVhbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWVsU3RvcChpc01hbnVhbCwgdGhpcy5fY29uZmlnLnNwaW5UeXBlID09IFN5bWJvbFNwaW5UeXBlLkNlbGwpO1xuICAgIH1cbiAgICBwcml2YXRlIGNlbGxTdG9wRm9yUmVzcGluKGlzTWFudWFsPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fc3BpblJlc3VsdHMuZ2FtZU1vZGUgIT0gU3BpblJlc3VsdHNHYW1lTW9kZS5SZXNwaW4pIHtcbiAgICAgICAgICAgIGxldCBoYXNIb2xkV2luOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWVsID0gdGhpcy5yZWVsc1tpXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlZWwuY2VsbHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJlZWwuY2VsbHNbal07XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY2VsbC5zcGluU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5TdG9wcGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuU3RvcHBpbmc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5NYW51YWxTdG9wcGluZzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlNwaW5uaW5nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2VsbC5pc0hvbGRXaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVlbC5wdXNoU3RvcENvZGVzRm9yQ2VsbChqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjaGVzc2JvYXJkLmNlbGxIb2xkV2luKGksIGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnNwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuSG9sZFdpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzSG9sZFdpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuSG9sZFdpbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNNYW51YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVlbC5wdXNoU3RvcENvZGVzRm9yQ2VsbChqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwudGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChjZWxsLnRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zcGluU3RhdHVzID09IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5TdG9wcGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVlbC5wdXNoU3RvcENvZGVzRm9yQ2VsbChqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLk5vcm1hbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaGFzSG9sZFdpbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hdXRvU3RvcFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIHRoaXMuX2NvbmZpZy5zdG9wSW50ZXJ2YWxJblJlc3BpbkNlbGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuU3Bpbm5pbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB3b3VsZEJlQnJlYWs6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZWVsID0gdGhpcy5yZWVsc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVlbC5jZWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSByZWVsLmNlbGxzW2pdO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2VsbC5zcGluU3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlN0b3BwZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5TdG9wcGluZzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuTWFudWFsU3RvcHBpbmc6XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3VsZEJlQnJlYWsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlNwaW5uaW5nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuZml4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWVsLnB1c2hTdG9wQ29kZXNGb3JDZWxsKGopO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjZWxsLmlzSG9sZFdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwudGltZXIgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2hTdG9wQ29kZXNGb3JDZWxsLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5zdG9wSW50ZXJ2YWxJblJlc3BpbkNlbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvdWxkQmVCcmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGNoZXNzYm9hcmQuY2VsbEhvbGRXaW4oaSwgaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5zcGluU3RhdHVzID0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLkhvbGRXaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXV0b1N0b3BUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyB0aGlzLl9jb25maWcuc3RvcEludGVydmFsSW5SZXNwaW5DZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NwaW5TdGF0dXMgPSBXYWl0aW5nUmVzdWx0c1NwaW5TdGF0dXMuU3Bpbm5pbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd291bGRCZUJyZWFrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5Ib2xkV2luOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWFudWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVlbC5wdXNoU3RvcENvZGVzRm9yQ2VsbChqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3NwaW5TdGF0dXMgPT0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlN0b3BwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZWwucHVzaFN0b3BDb2Rlc0ZvckNlbGwoaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLk5vcm1hbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAod291bGRCZUJyZWFrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3b3VsZEJlQnJlYWspIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaFN0b3BDb2Rlc0ZvckNlbGwocmVlbEluZGV4OiBudW1iZXIsIGNlbGxJbmRleD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCByZWVsID0gdGhpcy5yZWVsc1tyZWVsSW5kZXhdO1xuICAgICAgICBpZiAoY2VsbEluZGV4ID09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVlbC5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlZWwucHVzaFN0b3BDb2Rlc0ZvckNlbGwoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVlbC5wdXNoU3RvcENvZGVzRm9yQ2VsbChjZWxsSW5kZXgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25TeW1ib2xCb2FyZFJlZWxTdG9wcGVkKHJlZWxJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5yZXNwaW5UeXBlID09IFN5bWJvbFNwaW5UeXBlLkNlbGwgJiZcbiAgICAgICAgICAgICh0aGlzLl9zcGluUmVzdWx0cy5nYW1lTW9kZSA9PSBTcGluUmVzdWx0c0dhbWVNb2RlLlJlc3BpbiB8fCB0aGlzLmhhc0NlbGxIb2xkV2luKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVlbCA9IHRoaXMucmVlbHNbcmVlbEluZGV4XTtcbiAgICAgICAgaWYgKCFyZWVsKSB7XG4gICAgICAgICAgICBjYy5lcnJvcihg5YiX5LiN5a2Y5Zyo77yM57Si5byVJHtyZWVsSW5kZXh9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVlbC5zcGluU3RhdHVzID0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlN0b3BwZWQ7XG4gICAgICAgIGlmIChyZWVsLnRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocmVlbC50aW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNNYW51YWwgPSB0aGlzLl9zcGluU3RhdHVzID09IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5NYW51YWxTdG9wcGluZztcbiAgICAgICAgdGhpcy5yZWVsU3RvcChpc01hbnVhbCwgdGhpcy5fY29uZmlnLnNwaW5UeXBlID09IFN5bWJvbFNwaW5UeXBlLkNlbGwpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblN5bWJvbEJvYXJkQ2VsbFN0b3BwZWQocmVlbEluZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9zcGluUmVzdWx0cy5nYW1lTW9kZSAhPSBTcGluUmVzdWx0c0dhbWVNb2RlLlJlc3BpbiAmJiAhdGhpcy5oYXNDZWxsSG9sZFdpbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLnJlZWxzW3JlZWxJbmRleF0uY2VsbHNbY2VsbEluZGV4XTtcbiAgICAgICAgY2VsbC5zcGluU3RhdHVzID0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLlN0b3BwZWQ7XG4gICAgICAgIGlmIChjZWxsLnRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY2VsbC50aW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNNYW51YWwgPSB0aGlzLl9zcGluU3RhdHVzID09IFdhaXRpbmdSZXN1bHRzU3BpblN0YXR1cy5NYW51YWxTdG9wcGluZztcbiAgICAgICAgdGhpcy5jZWxsU3RvcEZvclJlc3Bpbihpc01hbnVhbCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmV4dFJlZWxJbmRleChyZWVsSW5kZXg6IG51bWJlciwgY2VsbEluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgcmVlbCA9IHRoaXMucmVlbHNbcmVlbEluZGV4XTtcblxuICAgICAgICBpZiAoY2VsbEluZGV4IDwgcmVlbC5jZWxscy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVlbEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWVsSW5kZXggPj0gcmVlbC5jZWxscy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVlbEluZGV4ICsgMTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRDZWxsUG9zaXRpb24ocmVlbEluZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uOiBudW1iZXIgPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IHJlZWxJbmRleCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVlbCA9IHRoaXMucmVlbHNbaV07XG4gICAgICAgICAgICBsZXQgZW5kQ2VsbEluZGV4ID0gcmVlbC5jZWxscy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWYgKGkgPT0gcmVlbEluZGV4KSB7XG4gICAgICAgICAgICAgICAgZW5kQ2VsbEluZGV4ID0gY2VsbEluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gZW5kQ2VsbEluZGV4OyBqKyspIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uU3ltYm9sQm9hcmRTdG9wcGVkKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3N0b3BJbnRlcnZhbEVhY2hDZWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLl9zdG9wSW50ZXJ2YWxFYWNoQ2VsbFtpXTtcbiAgICAgICAgICAgIGlmIChpbnRlcnZhbC50aW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChpbnRlcnZhbC50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcEludGVydmFsRWFjaENlbGwgPSBbXTtcbiAgICAgICAgdGhpcy4kY2hlc3Nib2FyZC51bnNjaGVkdWxlKHRoaXMud2FpdGluZy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uU3ltYm9sQm9hcmRSZXN1bHRzUmVjZWl2ZWQoc3BpblJlc3VsdHM6IFNwaW5SZXN1bHRzU2xvdCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlZWxSZXN1bHRzKHNwaW5SZXN1bHRzKTtcbiAgICAgICAgdGhpcy5jZWxsUmVzdWx0cyhzcGluUmVzdWx0cyk7XG4gICAgICAgIHRoaXMuX3NwaW5SZXN1bHRzID0gc3BpblJlc3VsdHM7XG4gICAgfVxuICAgIHByaXZhdGUgcmVlbFJlc3VsdHMoc3BpblJlc3VsdHM6IFNwaW5SZXN1bHRzU2xvdCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZXN1bHRzQ29sdW1ucyA9IHNwaW5SZXN1bHRzLmNvbHVtbnM7XG4gICAgICAgIGxldCBob2xkV2luSW50ZXJ2YWw6IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fcmVzdWx0c0NvbHVtbnNbaV07XG4gICAgICAgICAgICBjb25zdCByZWVsID0gdGhpcy5yZWVsc1tpXTtcbiAgICAgICAgICAgIHJlZWwuc3RvcENvZGVzID0gW107XG4gICAgICAgICAgICBsZXQgZXh0cmFDZWxsQ291bnQ6IHsgdG9wOiBudW1iZXI7IGJvdHRvbTogbnVtYmVyIH0gPSB0aGlzLiRjaGVzc2JvYXJkLmdldENvbHVtbkV4dHJhQ2VsbENvdW50KGkpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBleHRyYUNlbGxDb3VudC5ib3R0b207IGorKykge1xuICAgICAgICAgICAgICAgIHJlZWwuc3RvcENvZGVzLnB1c2goTnVtYmVyVXRpbHMucmFuZG9tKDAsIHRoaXMuJGNoZXNzYm9hcmQubWF4Q29kZSwgdGhpcy5fZXhjbHVkZUNvZGVzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gcmVzdWx0LnN0b3BDb2Rlcy5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgIHJlZWwuc3RvcENvZGVzLnB1c2gocmVzdWx0LnN0b3BDb2Rlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGV4dHJhQ2VsbENvdW50LnRvcDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcmVlbC5zdG9wQ29kZXMucHVzaChOdW1iZXJVdGlscy5yYW5kb20oMCwgdGhpcy4kY2hlc3Nib2FyZC5tYXhDb2RlLCB0aGlzLl9leGNsdWRlQ29kZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlZWwuaXNIb2xkV2luID0gcmVzdWx0LmlzSG9sZFdpbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNlbGxSZXN1bHRzKHNwaW5SZXN1bHRzOiBTcGluUmVzdWx0c1Nsb3QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oYXNDZWxsSG9sZFdpbiA9IGZhbHNlO1xuICAgICAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBza2lwSW50ZXJ2YWw6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBzdG9wSW50ZXJ2YWwgPSB0aGlzLl9jb25maWcuc3RvcEludGVydmFsSW5SZXNwaW5DZWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3N0b3BJbnRlcnZhbEVhY2hDZWxsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLl9zdG9wSW50ZXJ2YWxFYWNoQ2VsbFtpXTtcbiAgICAgICAgICAgIGlmIChpbnRlcnZhbC50aW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChpbnRlcnZhbC50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RvcEludGVydmFsRWFjaENlbGwgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZWVsID0gdGhpcy5yZWVsc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHJlZWxSZXN1bHQgPSB0aGlzLl9yZXN1bHRzQ29sdW1uc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVlbC5jZWxscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuX3N0b3BJbnRlcnZhbEVhY2hDZWxsVGVtcGxhdGVbcG9zaXRpb25dO1xuICAgICAgICAgICAgICAgIGludGVydmFsID0gbmV3IEludGVydmFsRWFjaENvbHVtbihpbnRlcnZhbC5pbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcEludGVydmFsRWFjaENlbGwucHVzaChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJlZWwuY2VsbHNbal07XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0Q2VsbCA9IHJlZWxSZXN1bHQuY2VsbHNbal07XG4gICAgICAgICAgICAgICAgY2VsbC5maXhlZCA9IHJlc3VsdENlbGwuZml4ZWQ7XG4gICAgICAgICAgICAgICAgY2VsbC5pc0hvbGRXaW4gPSByZXN1bHRDZWxsLmlzSG9sZFdpbjtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5maXhlZCkge1xuICAgICAgICAgICAgICAgICAgICBza2lwSW50ZXJ2YWwgKz0gdGhpcy5fY29uZmlnLnN0b3BJbnRlcnZhbEluUmVzcGluQ2VsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW50ZXJ2YWwuaW50ZXJ2YWwgLT0gc2tpcEludGVydmFsO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzSG9sZFdpbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NlbGxIb2xkV2luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5ob2xkV2luU2hvd2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbC5pbnRlcnZhbCA9IFN5bWJvbEJvYXJkQ29uc3QuSE9MRF9XSU5fSU5URVJWQUxfT0ZGU0VUO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0c0NvbHVtbnMgPSBbXTtcbiAgICAgICAgdGhpcy5fc3BpblJlc3VsdHMgPSBudWxsO1xuICAgICAgICB0aGlzLl9ob2xkV2luU2hvd2VkT25jZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0NlbGxIb2xkV2luID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhdXNlQnVmZmVyID0gW107XG4gICAgICAgIHRoaXMuaXNQYXVzZUJ1ZmZlciA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlZWwgPSB0aGlzLnJlZWxzW2ldO1xuICAgICAgICAgICAgcmVlbC5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fc3RvcEludGVydmFsRWFjaENlbGwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuX3N0b3BJbnRlcnZhbEVhY2hDZWxsW2ldO1xuICAgICAgICAgICAgaWYgKGludGVydmFsLnRpbWVyKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGludGVydmFsLnRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdG9wSW50ZXJ2YWxFYWNoQ2VsbCA9IFtdO1xuICAgICAgICB0aGlzLl9zcGluU3RhdHVzID0gV2FpdGluZ1Jlc3VsdHNTcGluU3RhdHVzLk5vcm1hbDtcbiAgICB9XG59XG4iXX0=
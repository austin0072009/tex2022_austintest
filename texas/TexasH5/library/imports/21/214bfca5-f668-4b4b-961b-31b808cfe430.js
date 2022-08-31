"use strict";
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
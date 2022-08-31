import IWaitingResultsStrategy from "./IWaitingResultsStrategy";
import SymbolBoard from "./SymbolBoard/SymbolBoard";
import WaitingResultsColumn from "./WaitingResultsColumn";
import TurningWaitingResultsConfig from "./TurningWaitingResultsConfig";
import { SymbolSpinType } from "./SymbolSpinType";
import WaitingResultsCell from "./WaitingResultsCell";

import IntervalEachColumn from "./IntervalEachColumn";
import { WaitingResultsSpinStatus } from "./WaitingResultsSpinStatus";
import WaitingResultsStep from "./WaitingResultsStep";
import { SymbolBoardConst } from "./SymbolBoard/SymbolBoardConst";
import { SymbolBoardStatus } from "./SymbolBoard/SymbolBoardStatus";
import NumberUtils from "../../utils/lib/NumberUtils";
import SpinResultsColumn from "../../../spin-result/SpinResultsColumn";
import SpinResultsSlot from "../../../spin-result/SpinResultsSlot";
import { SpinResultsGameMode } from "../../../spin-result/SpinResultsGameMode";

interface IPauseBuffer {
    cellSpin: boolean;
    i: number;
    reel: WaitingResultsColumn;
}
export default class TurningWaitingResultsStrategy implements IWaitingResultsStrategy {
    private readonly _config: TurningWaitingResultsConfig;
    private readonly $chessboard: SymbolBoard;
    private _resultsColumns: SpinResultsColumn[] = null;
    private reels: WaitingResultsColumn[] = [];
    private readonly _cellAmountInColumns: number[] = [];
    private _startIntervalEachColumn: IntervalEachColumn[] = [];
    private _stopIntervalEachColumnTemplate: IntervalEachColumn[] = [];
    private _stopIntervalEachCellTemplate: IntervalEachColumn[] = [];
    private _stopIntervalEachCell: IntervalEachColumn[] = [];

    private _manualStopIntervalEachColumnTemplate: IntervalEachColumn[] = [];
    private _autoStopTime: number;
    private _excludeCodes: number[];
    private _spinResults: SpinResultsSlot;
    private _spinStatus: WaitingResultsSpinStatus;
    private _holdWinShowedOnce: boolean = false;
    private hasCellHoldWin: boolean = false;
    constructor(chessboard: SymbolBoard, cellAmountInColumns: number[], config: TurningWaitingResultsConfig) {
        this._config = config;
        this.$chessboard = chessboard;
        this._cellAmountInColumns = cellAmountInColumns;
        this._spinStatus = WaitingResultsSpinStatus.Normal;
        this.initColumns();
        this.$chessboard.onColumnResultsSet(this.onSymbolBoardReelStopped, this);
        this.$chessboard.onCellResultSet(this.onSymbolBoardCellStopped, this);
        this.$chessboard.onResultsSet(this.onSymbolBoardStopped, this);
        this.$chessboard.onResultsReceived(this.onSymbolBoardResultsReceived, this);
    }
    public get chessboard(): SymbolBoard {
        return this.$chessboard;
    }
    private initColumns(): void {
        let startInterval: number = 0;
        let stopInterval: number = 0;
        let stopIntervalCell: number = 0;
        for (let i = 0; i < this._cellAmountInColumns.length; i++) {
            let steps: WaitingResultsStep[] = [];
            steps.push(new WaitingResultsStep(WaitingResultsSpinStatus.Normal, this._config.step));
            steps.push(new WaitingResultsStep(WaitingResultsSpinStatus.Stopping, this._config.stopStep));
            steps.push(new WaitingResultsStep(WaitingResultsSpinStatus.ManualStopping, this._config.manualStopStep));
            steps.push(new WaitingResultsStep(WaitingResultsSpinStatus.HoldWin, this._config.holdWinStep));

            let column = new WaitingResultsColumn(this.$chessboard.maxCode, steps);
            this.reels.push(column);
            const cellAmount = this._cellAmountInColumns[i];
            if (this._config.spinType == SymbolSpinType.Cell || this._config.respinType == SymbolSpinType.Cell) {
                for (let j = 0; j < cellAmount; j++) {
                    column.addCell(new WaitingResultsCell(this.$chessboard.maxCode));
                    let theLastTime: number = 0;
                    let cellPosition = this._stopIntervalEachCellTemplate.length;
                    if (cellPosition !== 0) {
                        theLastTime =
                            this._stopIntervalEachCellTemplate[cellPosition - 1].interval +
                            this._config.stopIntervalInRespinCell;
                    }
                    this._stopIntervalEachCellTemplate.push(new IntervalEachColumn(theLastTime));
                }
            }
            if (this._config.startIntervalEachColumn) {
                if (i >= this._config.startIntervalEachColumn.length) {
                    this._startIntervalEachColumn.push(new IntervalEachColumn(startInterval));
                } else {
                    startInterval = startInterval + this._config.startIntervalEachColumn[i];
                    this._startIntervalEachColumn.push(new IntervalEachColumn(startInterval));
                }
            } else {
                this._startIntervalEachColumn.push(new IntervalEachColumn(0));
            }
            if (this._config.stopIntervalEachColumn) {
                if (i >= this._config.stopIntervalEachColumn.length) {
                    this._stopIntervalEachColumnTemplate.push(new IntervalEachColumn(0));
                } else {
                    stopInterval = this._config.stopIntervalEachColumn[i];
                    this._stopIntervalEachColumnTemplate.push(new IntervalEachColumn(stopInterval));
                }
            } else {
                this._stopIntervalEachColumnTemplate.push(new IntervalEachColumn(0));
            }
            if (this._config.manualStopIntervalEachColumn) {
                if (i >= this._config.manualStopIntervalEachColumn.length) {
                    this._manualStopIntervalEachColumnTemplate.push(new IntervalEachColumn(0));
                } else {
                    stopInterval = this._config.manualStopIntervalEachColumn[i];
                    this._manualStopIntervalEachColumnTemplate.push(new IntervalEachColumn(stopInterval));
                }
            } else {
                this._manualStopIntervalEachColumnTemplate.push(new IntervalEachColumn(0));
            }
        }
    }
    startWaiting(excludeCodes: number[]): void {
        this._excludeCodes = excludeCodes;
        this._spinStatus = WaitingResultsSpinStatus.Spinning;
        this.$chessboard.schedule(this.waiting.bind(this), this._config.interval);
        let spinType = this._config.spinType;
        if (spinType == SymbolSpinType.Column) {
            this.reelStart();
        } else {
            this.cellStart();
        }
        this._autoStopTime = new Date().getTime() + this._config.autoStopTimeout;
    }
    private reelStart(): void {
        for (let i = 0; i < this.reels.length; i++) {
            const interval = this._startIntervalEachColumn[i];
            if (interval.timer) {
                clearTimeout(interval.timer);
            }
            const reel = this.reels[i];
            reel.excludeCodes = this._excludeCodes;
            if (interval.interval <= 0) {
                reel.spinStatus = WaitingResultsSpinStatus.Spinning;
            } else {
                const timer = setTimeout(() => {
                    if (reel.spinStatus == WaitingResultsSpinStatus.Normal) {
                        reel.spinStatus = WaitingResultsSpinStatus.Spinning;
                    }
                }, interval.interval);
                interval.timer = timer;
            }
        }
    }
    private cellStart(): void {
        for (let i = 0; i < this.reels.length; i++) {
            const interval = this._startIntervalEachColumn[i];
            const reel = this.reels[i];
            for (let j = 0; j < reel.cells.length; j++) {
                const cell = reel.cells[j];
                cell.excludeCodes = this._excludeCodes;
                if (interval.interval <= 0) {
                    cell.spinStatus = WaitingResultsSpinStatus.Spinning;
                } else {
                    const timer = setTimeout(() => {
                        if (cell.spinStatus == WaitingResultsSpinStatus.Normal) {
                            cell.spinStatus = WaitingResultsSpinStatus.Spinning;
                        }
                    }, interval.interval);
                    interval.timer = timer;
                }
            }
        }
    }
    private autoStop(): void {
        const now = new Date().getTime();
        if (
            this.$chessboard.canStop() &&
            now >= this._autoStopTime &&
            this._spinResults &&
            this._spinStatus == WaitingResultsSpinStatus.Spinning
        ) {
            this._spinStatus = WaitingResultsSpinStatus.Stopping;
            this._autoStopTime = new Date(2900, 1, 1).getTime();
            this.stopWaiting();
        }
    }
    private waiting(): void {
        if (this.$chessboard.status == SymbolBoardStatus.Spinning) {
            this.autoStop();
            let spinType = this._config.spinType;

            if (spinType == SymbolSpinType.Column) {
                this.reelMove();
            } else {
                this.cellMove();
            }
        }
    }
    private reelMove(): void {
        for (let i = 0; i < this.reels.length; i++) {
            const reel = this.reels[i];
            if (reel.spinStatus != WaitingResultsSpinStatus.Normal) {
                let step = reel.currentStep;
                if (this._config.startUpResilience && this._config.startDownResilience) {
                    this.$chessboard.reelStartResilienceConfig(
                        i,
                        this._config.startUpResilience,
                        this._config.startDownResilience
                    );
                }
                if (this._config.endDownResilience && this._config.endUpResilience) {
                    this.$chessboard.reelEndResilienceConfig(
                        i,
                        this._config.endDownResilience,
                        this._config.endUpResilience
                    );
                }
                const newCode = this.$chessboard.columnMoveY(i, step, reel.theNextCode);
                if (newCode) {
                    reel.nextCode();
                }
            }
        }
    }
    private cellMove(): void {
        let position: number = 0;
        for (let i = 0; i < this.reels.length; i++) {
            const reel = this.reels[i];
            let step = reel.currentStep;
            for (let j = 0; j < reel.cells.length; j++) {
                const cell = reel.cells[j];

                if (
                    cell.spinStatus != WaitingResultsSpinStatus.Normal &&
                    cell.spinStatus != WaitingResultsSpinStatus.Stopped
                ) {
                    const newCode = this.$chessboard.cellMoveY(i, j, step, cell.theNextCode);
                    if (newCode) {
                        cell.nextCode();
                    }
                }
                position++;
            }
        }
    }
    stopWaiting(isManual?: boolean): void {
        if (!this._spinResults) {
            return;
        }
        //todo 如果有holdwin没有停，这是点击stop，直接停当前的holdwin继续停holdwin
        let spinType = this._config.spinType;

        if (spinType == SymbolSpinType.Column) {
            this.reelStop(isManual);
        } else {
            this.cellStop(isManual);
        }
    }
    private _isPause: boolean = false;
    public get isPause(): boolean {
        return this._isPause;
    }
    public set isPause(value: boolean) {
        this._isPause = value;
    }

    private _isPauseBuffer: boolean;
    public get isPauseBuffer(): boolean {
        return this._isPauseBuffer;
    }
    public set isPauseBuffer(value: boolean) {
        this._isPauseBuffer = value;
        if (this._isPauseBuffer) {
            this.clearPauseBuffer();
        }
    }
    private _pauseBuffer: IPauseBuffer[] = [];
    public clearPauseBuffer(): void {
        if (this._pauseBuffer && this._pauseBuffer.length > 0) {
            this._pauseBuffer.map((item) => {
                if (item.cellSpin) {
                    this.pushStopCodesForCell(item.i);
                } else {
                    item.reel.pushStopCodes();
                }
                item.reel.spinStatus = WaitingResultsSpinStatus.Stopping;
                this._spinStatus = WaitingResultsSpinStatus.Stopping;
            });
        }
    }
    private reelStop(isManual?: boolean, cellSpin?: boolean): void {
        for (let i = 0; i < this.reels.length; i++) {
            let wouldBeBreak: boolean = false;
            const reel = this.reels[i];
            let interval = this._stopIntervalEachColumnTemplate[i].interval;
            const startInterval = this._startIntervalEachColumn[i];
            if (startInterval.timer) {
                clearTimeout(startInterval.timer);
            }
            if (isManual) {
                interval = 0;
                if (this._manualStopIntervalEachColumnTemplate[i]) {
                    interval = this._manualStopIntervalEachColumnTemplate[i].interval;
                }
            }
            switch (reel.spinStatus) {
                case WaitingResultsSpinStatus.Stopped:
                case WaitingResultsSpinStatus.Stopping:
                case WaitingResultsSpinStatus.ManualStopping:
                    continue;
                case WaitingResultsSpinStatus.Spinning:
                    const notSkipHoldWin =
                        this._spinStatus == WaitingResultsSpinStatus.Stopping ||
                        !this._config.skipHoldWin ||
                        (this._config.skipHoldWin && !this._holdWinShowedOnce);
                    if (reel.isHoldWin && notSkipHoldWin) {
                        reel.spinStatus = WaitingResultsSpinStatus.HoldWin;
                        interval = this._config.holdWinStopTimeout;
                        this._autoStopTime = new Date().getTime() + interval;
                        this.$chessboard.columnHoldWin(i);
                        this._spinStatus = WaitingResultsSpinStatus.Spinning;
                        wouldBeBreak = true;
                        this._holdWinShowedOnce = true;
                    }
                    break;
                case WaitingResultsSpinStatus.HoldWin:
                    if (!isManual && this._spinStatus == WaitingResultsSpinStatus.Spinning) {
                        wouldBeBreak = true;
                    }
                    interval = 0;
                    break;
                case WaitingResultsSpinStatus.Normal:
                    break;
            }
            if (wouldBeBreak) {
                break;
            }
            if (interval <= 0) {
                if (this.isPause) {
                    this._pauseBuffer.push({
                        cellSpin,
                        i,
                        reel,
                    });
                } else {
                    if (cellSpin) {
                        this.pushStopCodesForCell(i);
                    } else {
                        reel.pushStopCodes();
                    }
                    reel.spinStatus = WaitingResultsSpinStatus.Stopping;
                    this._spinStatus = WaitingResultsSpinStatus.Stopping;
                }
                if (isManual) {
                    reel.spinStatus = WaitingResultsSpinStatus.ManualStopping;
                    this._spinStatus = WaitingResultsSpinStatus.ManualStopping;
                }
            } else {
                if (this.isPause) {
                    this._pauseBuffer.push({
                        cellSpin,
                        i,
                        reel,
                    });
                } else {
                    if (cellSpin) {
                        reel.timer = setTimeout(this.pushStopCodesForCell.bind(this), interval, i);
                    } else {
                        reel.timer = setTimeout(() => {
                            reel.pushStopCodes();
                        }, interval);
                    }
                    break;
                }
            }
        }
    }
    private cellStop(isManual?: boolean): void {
        if (this._spinResults.gameMode == SpinResultsGameMode.Respin || this.hasCellHoldWin) {
            this.cellStopForRespin(isManual);
            return;
        }
        this.reelStop(isManual, this._config.spinType == SymbolSpinType.Cell);
    }
    private cellStopForRespin(isManual?: boolean): void {
        if (this._spinResults.gameMode != SpinResultsGameMode.Respin) {
            let hasHoldWin: boolean = false;
            for (let i = 0; i < this.reels.length; i++) {
                const reel = this.reels[i];
                for (let j = 0; j < reel.cells.length; j++) {
                    const cell = reel.cells[j];
                    switch (cell.spinStatus) {
                        case WaitingResultsSpinStatus.Stopped:
                        case WaitingResultsSpinStatus.Stopping:
                        case WaitingResultsSpinStatus.ManualStopping:
                            continue;
                            break;
                        case WaitingResultsSpinStatus.Spinning:
                            if (!cell.isHoldWin) {
                                reel.pushStopCodesForCell(j);
                            } else {
                                this.$chessboard.cellHoldWin(i, j);
                                cell.spinStatus = WaitingResultsSpinStatus.HoldWin;
                                hasHoldWin = true;
                            }
                            break;
                        case WaitingResultsSpinStatus.HoldWin:
                            if (isManual) {
                                reel.pushStopCodesForCell(j);
                                if (cell.timer) {
                                    clearTimeout(cell.timer);
                                }
                            } else {
                                if (this._spinStatus == WaitingResultsSpinStatus.Stopping) {
                                    reel.pushStopCodesForCell(j);
                                }
                            }
                            break;
                        case WaitingResultsSpinStatus.Normal:
                            break;
                    }
                }
                if (hasHoldWin) {
                    this._autoStopTime = new Date().getTime() + this._config.stopIntervalInRespinCell;
                    this._spinStatus = WaitingResultsSpinStatus.Spinning;
                }
            }
            return;
        }
        let wouldBeBreak: boolean = false;
        for (let i = 0; i < this.reels.length; i++) {
            const reel = this.reels[i];
            for (let j = 0; j < reel.cells.length; j++) {
                const cell = reel.cells[j];
                switch (cell.spinStatus) {
                    case WaitingResultsSpinStatus.Stopped:
                        continue;
                        break;
                    case WaitingResultsSpinStatus.Stopping:
                    case WaitingResultsSpinStatus.ManualStopping:
                        wouldBeBreak = true;
                        break;
                    case WaitingResultsSpinStatus.Spinning:
                        if (cell.fixed) {
                            reel.pushStopCodesForCell(j);
                            break;
                        }
                        if (!cell.isHoldWin) {
                            cell.timer = setTimeout(
                                this.pushStopCodesForCell.bind(this),
                                this._config.stopIntervalInRespinCell,
                                i,
                                j
                            );
                            wouldBeBreak = true;
                        } else {
                            this.$chessboard.cellHoldWin(i, j);
                            cell.spinStatus = WaitingResultsSpinStatus.HoldWin;
                            this._autoStopTime = new Date().getTime() + this._config.stopIntervalInRespinCell;
                            this._spinStatus = WaitingResultsSpinStatus.Spinning;
                            wouldBeBreak = true;
                        }
                        break;
                    case WaitingResultsSpinStatus.HoldWin:
                        if (isManual) {
                            reel.pushStopCodesForCell(j);
                        } else {
                            if (this._spinStatus == WaitingResultsSpinStatus.Stopping) {
                                reel.pushStopCodesForCell(j);
                            }
                        }
                        break;
                    case WaitingResultsSpinStatus.Normal:
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
    }

    private pushStopCodesForCell(reelIndex: number, cellIndex?: number): void {
        const reel = this.reels[reelIndex];
        if (cellIndex == null) {
            for (let i = 0; i < reel.cells.length; i++) {
                reel.pushStopCodesForCell(i);
            }
            return;
        }
        reel.pushStopCodesForCell(cellIndex);
    }
    protected onSymbolBoardReelStopped(reelIndex: number): void {
        if (
            this._config.respinType == SymbolSpinType.Cell &&
            (this._spinResults.gameMode == SpinResultsGameMode.Respin || this.hasCellHoldWin)
        ) {
            return;
        }
        let reel = this.reels[reelIndex];
        if (!reel) {
            cc.error(`列不存在，索引${reelIndex}`);
            return;
        }
        reel.spinStatus = WaitingResultsSpinStatus.Stopped;
        if (reel.timer) {
            clearTimeout(reel.timer);
        }
        const isManual = this._spinStatus == WaitingResultsSpinStatus.ManualStopping;
        this.reelStop(isManual, this._config.spinType == SymbolSpinType.Cell);
    }

    protected onSymbolBoardCellStopped(reelIndex: number, cellIndex: number): void {
        if (this._spinResults.gameMode != SpinResultsGameMode.Respin && !this.hasCellHoldWin) {
            return;
        }
        const cell = this.reels[reelIndex].cells[cellIndex];
        cell.spinStatus = WaitingResultsSpinStatus.Stopped;
        if (cell.timer) {
            clearTimeout(cell.timer);
        }
        const isManual = this._spinStatus == WaitingResultsSpinStatus.ManualStopping;
        this.cellStopForRespin(isManual);
    }
    private getNextReelIndex(reelIndex: number, cellIndex: number): number {
        let reel = this.reels[reelIndex];

        if (cellIndex < reel.cells.length - 1) {
            return reelIndex;
        }
        if (reelIndex >= reel.cells.length - 1) {
            return -1;
        }

        return reelIndex + 1;
    }
    private getCellPosition(reelIndex: number, cellIndex: number): number {
        let position: number = -1;
        for (let i = 0; i < this.reels.length; i++) {
            if (i > reelIndex) {
                break;
            }
            const reel = this.reels[i];
            let endCellIndex = reel.cells.length - 1;
            if (i == reelIndex) {
                endCellIndex = cellIndex;
            }
            for (let j = 0; j <= endCellIndex; j++) {
                position++;
            }
        }
        return position;
    }
    protected onSymbolBoardStopped(): void {
        for (let i = 0; i < this._stopIntervalEachCell.length; i++) {
            let interval = this._stopIntervalEachCell[i];
            if (interval.timer) {
                clearTimeout(interval.timer);
            }
        }
        this._stopIntervalEachCell = [];
        this.$chessboard.unschedule(this.waiting.bind(this));
    }
    protected onSymbolBoardResultsReceived(spinResults: SpinResultsSlot): void {
        this.reelResults(spinResults);
        this.cellResults(spinResults);
        this._spinResults = spinResults;
    }
    private reelResults(spinResults: SpinResultsSlot): void {
        this._resultsColumns = spinResults.columns;
        let holdWinInterval: number = 0;
        for (let i = 0; i < this.reels.length; i++) {
            const result = this._resultsColumns[i];
            const reel = this.reels[i];
            reel.stopCodes = [];
            let extraCellCount: { top: number; bottom: number } = this.$chessboard.getColumnExtraCellCount(i);
            for (let j = 0; j < extraCellCount.bottom; j++) {
                reel.stopCodes.push(NumberUtils.random(0, this.$chessboard.maxCode, this._excludeCodes));
            }
            for (let j = result.stopCodes.length - 1; j >= 0; j--) {
                reel.stopCodes.push(result.stopCodes[j]);
            }
            for (let j = 0; j < extraCellCount.top; j++) {
                reel.stopCodes.push(NumberUtils.random(0, this.$chessboard.maxCode, this._excludeCodes));
            }
            reel.isHoldWin = result.isHoldWin;
        }
    }
    private cellResults(spinResults: SpinResultsSlot): void {
        this.hasCellHoldWin = false;
        let position: number = 0;
        let skipInterval: number = 0;
        let stopInterval = this._config.stopIntervalInRespinCell;
        for (let i = 0; i < this._stopIntervalEachCell.length; i++) {
            let interval = this._stopIntervalEachCell[i];
            if (interval.timer) {
                clearTimeout(interval.timer);
            }
        }
        this._stopIntervalEachCell = [];
        for (let i = 0; i < this.reels.length; i++) {
            const reel = this.reels[i];
            const reelResult = this._resultsColumns[i];
            for (let j = 0; j < reel.cells.length; j++) {
                let interval = this._stopIntervalEachCellTemplate[position];
                interval = new IntervalEachColumn(interval.interval);
                this._stopIntervalEachCell.push(interval);
                const cell = reel.cells[j];
                const resultCell = reelResult.cells[j];
                cell.fixed = resultCell.fixed;
                cell.isHoldWin = resultCell.isHoldWin;
                if (cell.fixed) {
                    skipInterval += this._config.stopIntervalInRespinCell;
                }
                interval.interval -= skipInterval;
                if (cell.isHoldWin) {
                    this.hasCellHoldWin = true;
                    cell.holdWinShowing = false;
                    interval.interval = SymbolBoardConst.HOLD_WIN_INTERVAL_OFFSET;
                }
                position++;
            }
        }
    }
    public reset(): void {
        this._resultsColumns = [];
        this._spinResults = null;
        this._holdWinShowedOnce = false;
        this.hasCellHoldWin = false;
        this._pauseBuffer = [];
        this.isPauseBuffer = false;
        for (let i = 0; i < this.reels.length; i++) {
            const reel = this.reels[i];
            reel.reset();
        }
        for (let i = 0; i < this._stopIntervalEachCell.length; i++) {
            let interval = this._stopIntervalEachCell[i];
            if (interval.timer) {
                clearTimeout(interval.timer);
            }
        }
        this._stopIntervalEachCell = [];
        this._spinStatus = WaitingResultsSpinStatus.Normal;
    }
}

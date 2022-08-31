import IPrizeShowStrategy from "./IPrizeShowStrategy";
import IPrizeShowSymbolBoard from "./IPrizeShowSymbolBoard";
import { PrizeShowStatus } from "./PrizeShowStatus";

export default class PrizeShowStrategy implements IPrizeShowStrategy {
    private _symbolBoard: IPrizeShowSymbolBoard;
    private _allLinesShow: boolean = true;
    public _lineIndex: number = 0;
    private _canBeShowNextLine: boolean = true;
    private _matchedLines: number[][] = [];
    private _cellRewards: { position: number; symbolCode: number; rewards: number; isJackpot: boolean }[] = [];
    private _cellIndex: number = 0;
    private _cellSettleCompleted: boolean = true;
    private _canBeSettleNextCell: boolean = true;
    /**
     * 展示开始后多长时间可以点击spin按钮
     *
     * 单位：毫秒
     * @todo 这个做成配置
     */
    private _canBeSpinTimeout: number = 500;
    public get symbolBoard(): IPrizeShowSymbolBoard {
        return this._symbolBoard;
    }
    public set symbolBoard(value: IPrizeShowSymbolBoard) {
        if (this._symbolBoard) {
            this._symbolBoard.offPrizeLineShowCompletedOnce(this.lineShowCompletedOnce, this);
            this._symbolBoard.offCellRewardSettledOnce(this.cellShowCompletedOnce, this);
        }
        this._symbolBoard = value;
        if (this._symbolBoard) {
            this._symbolBoard.onPrizeLineShowCompletedOnce(this.lineShowCompletedOnce, this);
            this._symbolBoard.onCellRewardSettledOnce(this.cellShowCompletedOnce, this);
        }
    }
    startSettle(): void {
        this.processCellRewards();
        if (this._cellRewards && this._cellRewards.length > 0) {
            this._cellIndex = 0;
            this._cellSettleCompleted = false;
            this.symbolBoard.schedule(this.settling.bind(this), 0);
        } else {
            this.notifyAllCellRewardSettleCompleted();
        }
    }
    startShow(): void {
        console.log("startShow")
        this._matchedLines = [];
        this._matchedLines = this.symbolBoard.matchedLines;
        if (!this._matchedLines) {
            this._matchedLines = [];
        }

        if (this._matchedLines && this._matchedLines.length > 0) {
            this.symbolBoard.schedule(this.showing.bind(this), 0);
        } else {
            this.notifyAllCellRewardSettleCompleted();
        }
    }
    private notifyAllCellRewardSettleCompleted(): void {
        this._cellSettleCompleted = true;
        this._canBeSettleNextCell = false;
        this.symbolBoard.receiveAllCellRewardsSettled();
    }
    private processCellRewards(): void {
        let cellRewards: { position: number; symbolCode: number; rewards: number; isJackpot: boolean }[] = [];
        for (let i = 0; i < this.symbolBoard.chipCellRewards.length; i++) {
            let reward: { position: number; symbolCode: number; rewards: number; isJackpot: boolean } = Object.assign(
                { isJackpot: false },
                this.symbolBoard.chipCellRewards[i]
            );
            cellRewards.push(reward);
        }
        for (let i = 0; i < this.symbolBoard.jackpotCellRewards.length; i++) {
            let reward: { position: number; symbolCode: number; rewards: number; isJackpot: boolean } = Object.assign(
                { isJackpot: true },
                this.symbolBoard.jackpotCellRewards[i]
            );
            cellRewards.push(reward);
        }
        cellRewards = cellRewards.sort((a, b) => {
            return a.position - b.position;
        });
        this._cellRewards = cellRewards;
    }
    private lineShow(): void {
        if (this._allLinesShow && this._canBeShowNextLine) {
            this._canBeShowNextLine = false;
            if (this.symbolBoard.lineIndex >= 0) {
                this.symbolBoard.lineIndex = this._lineIndex
            }
            this.symbolBoard.prizeLineShow(this.symbolBoard.matchedLines, 1);
            return;
        }
        if (this._canBeShowNextLine) {
            this._canBeShowNextLine = false;

            if (this._lineIndex >= this.symbolBoard.matchedLines.length) {
                this._lineIndex = 0;
            }

            if (this.symbolBoard.matchedLines[this._lineIndex]) {
                if (this.symbolBoard.lineIndex >= 0) {
                    this.symbolBoard.lineIndex = this._lineIndex
                }
                this.symbolBoard.prizeLineShow([this.symbolBoard.matchedLines[this._lineIndex]], 1);
            }
        }
    }
    private showing(): void {
        this.lineShow();
    }
    private settling(): void {
        if (this.symbolBoard.prizeShowStatus != PrizeShowStatus.Showing) {
            cc.warn("只有正在展示状态才能开始展示");
            return;
        }
        this.cellSettle();
    }
    private lineShowCompletedOnce(): void {
        if (this._allLinesShow) {
            this._allLinesShow = false;
        } else {
            this._lineIndex++;
        }
        if (this._lineIndex >= this.symbolBoard.matchedLines.length) {
            this._lineIndex = 0;
            this._allLinesShow = true;
        }
        this._canBeShowNextLine = true;
    }
    private cellSettle(): void {
        if (!this._cellSettleCompleted && this._canBeSettleNextCell) {
            this._canBeSettleNextCell = false;
            const cellReward = this._cellRewards[this._cellIndex];
            if (cellReward.isJackpot) {
                this.symbolBoard.prizeJackpotCellSettle(cellReward.position, cellReward.symbolCode, cellReward.rewards);
                return;
            }
            this.symbolBoard.prizeChipCellSettle(cellReward.position, cellReward.symbolCode, cellReward.rewards);
        }
    }
    private cellShowCompletedOnce(): void {
        this._cellIndex++;
        if (this._cellIndex >= this._cellRewards.length) {
            this._cellSettleCompleted = true;
            this.symbolBoard.unschedule(this.settling.bind(this));
            this.notifyAllCellRewardSettleCompleted();
            return;
        }
        this._canBeSettleNextCell = true;
    }
    reset(): void {
        this._lineIndex = 0;
        this._cellIndex = 0;
        this._matchedLines = [];
        this._cellRewards = [];
        this._allLinesShow = true;
        this._canBeShowNextLine = true;
        this._canBeSettleNextCell = true;
        this.symbolBoard.unschedule(this.showing.bind(this));
        this.symbolBoard.unschedule(this.settling.bind(this));
    }
}

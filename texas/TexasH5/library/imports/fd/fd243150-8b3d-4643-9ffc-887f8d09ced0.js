"use strict";
cc._RF.push(module, 'fd243FQiz1GQ5/8iH+NCc7Q', 'PrizeShowStrategy');
// Script/modules/@mogafa/slots/lib/PrizeShowStrategy.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PrizeShowStatus_1 = require("./PrizeShowStatus");
var PrizeShowStrategy = /** @class */ (function () {
    function PrizeShowStrategy() {
        this._allLinesShow = true;
        this._lineIndex = 0;
        this._canBeShowNextLine = true;
        this._matchedLines = [];
        this._cellRewards = [];
        this._cellIndex = 0;
        this._cellSettleCompleted = true;
        this._canBeSettleNextCell = true;
        /**
         * 展示开始后多长时间可以点击spin按钮
         *
         * 单位：毫秒
         * @todo 这个做成配置
         */
        this._canBeSpinTimeout = 500;
    }
    Object.defineProperty(PrizeShowStrategy.prototype, "symbolBoard", {
        get: function () {
            return this._symbolBoard;
        },
        set: function (value) {
            if (this._symbolBoard) {
                this._symbolBoard.offPrizeLineShowCompletedOnce(this.lineShowCompletedOnce, this);
                this._symbolBoard.offCellRewardSettledOnce(this.cellShowCompletedOnce, this);
            }
            this._symbolBoard = value;
            if (this._symbolBoard) {
                this._symbolBoard.onPrizeLineShowCompletedOnce(this.lineShowCompletedOnce, this);
                this._symbolBoard.onCellRewardSettledOnce(this.cellShowCompletedOnce, this);
            }
        },
        enumerable: false,
        configurable: true
    });
    PrizeShowStrategy.prototype.startSettle = function () {
        this.processCellRewards();
        if (this._cellRewards && this._cellRewards.length > 0) {
            this._cellIndex = 0;
            this._cellSettleCompleted = false;
            this.symbolBoard.schedule(this.settling.bind(this), 0);
        }
        else {
            this.notifyAllCellRewardSettleCompleted();
        }
    };
    PrizeShowStrategy.prototype.startShow = function () {
        console.log("startShow");
        this._matchedLines = [];
        this._matchedLines = this.symbolBoard.matchedLines;
        if (!this._matchedLines) {
            this._matchedLines = [];
        }
        if (this._matchedLines && this._matchedLines.length > 0) {
            this.symbolBoard.schedule(this.showing.bind(this), 0);
        }
        else {
            this.notifyAllCellRewardSettleCompleted();
        }
    };
    PrizeShowStrategy.prototype.notifyAllCellRewardSettleCompleted = function () {
        this._cellSettleCompleted = true;
        this._canBeSettleNextCell = false;
        this.symbolBoard.receiveAllCellRewardsSettled();
    };
    PrizeShowStrategy.prototype.processCellRewards = function () {
        var cellRewards = [];
        for (var i = 0; i < this.symbolBoard.chipCellRewards.length; i++) {
            var reward = Object.assign({ isJackpot: false }, this.symbolBoard.chipCellRewards[i]);
            cellRewards.push(reward);
        }
        for (var i = 0; i < this.symbolBoard.jackpotCellRewards.length; i++) {
            var reward = Object.assign({ isJackpot: true }, this.symbolBoard.jackpotCellRewards[i]);
            cellRewards.push(reward);
        }
        cellRewards = cellRewards.sort(function (a, b) {
            return a.position - b.position;
        });
        this._cellRewards = cellRewards;
    };
    PrizeShowStrategy.prototype.lineShow = function () {
        if (this._allLinesShow && this._canBeShowNextLine) {
            this._canBeShowNextLine = false;
            if (this.symbolBoard.lineIndex >= 0) {
                this.symbolBoard.lineIndex = this._lineIndex;
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
                    this.symbolBoard.lineIndex = this._lineIndex;
                }
                this.symbolBoard.prizeLineShow([this.symbolBoard.matchedLines[this._lineIndex]], 1);
            }
        }
    };
    PrizeShowStrategy.prototype.showing = function () {
        this.lineShow();
    };
    PrizeShowStrategy.prototype.settling = function () {
        if (this.symbolBoard.prizeShowStatus != PrizeShowStatus_1.PrizeShowStatus.Showing) {
            cc.warn("只有正在展示状态才能开始展示");
            return;
        }
        this.cellSettle();
    };
    PrizeShowStrategy.prototype.lineShowCompletedOnce = function () {
        if (this._allLinesShow) {
            this._allLinesShow = false;
        }
        else {
            this._lineIndex++;
        }
        if (this._lineIndex >= this.symbolBoard.matchedLines.length) {
            this._lineIndex = 0;
            this._allLinesShow = true;
        }
        this._canBeShowNextLine = true;
    };
    PrizeShowStrategy.prototype.cellSettle = function () {
        if (!this._cellSettleCompleted && this._canBeSettleNextCell) {
            this._canBeSettleNextCell = false;
            var cellReward = this._cellRewards[this._cellIndex];
            if (cellReward.isJackpot) {
                this.symbolBoard.prizeJackpotCellSettle(cellReward.position, cellReward.symbolCode, cellReward.rewards);
                return;
            }
            this.symbolBoard.prizeChipCellSettle(cellReward.position, cellReward.symbolCode, cellReward.rewards);
        }
    };
    PrizeShowStrategy.prototype.cellShowCompletedOnce = function () {
        this._cellIndex++;
        if (this._cellIndex >= this._cellRewards.length) {
            this._cellSettleCompleted = true;
            this.symbolBoard.unschedule(this.settling.bind(this));
            this.notifyAllCellRewardSettleCompleted();
            return;
        }
        this._canBeSettleNextCell = true;
    };
    PrizeShowStrategy.prototype.reset = function () {
        this._lineIndex = 0;
        this._cellIndex = 0;
        this._matchedLines = [];
        this._cellRewards = [];
        this._allLinesShow = true;
        this._canBeShowNextLine = true;
        this._canBeSettleNextCell = true;
        this.symbolBoard.unschedule(this.showing.bind(this));
        this.symbolBoard.unschedule(this.settling.bind(this));
    };
    return PrizeShowStrategy;
}());
exports.default = PrizeShowStrategy;

cc._RF.pop();
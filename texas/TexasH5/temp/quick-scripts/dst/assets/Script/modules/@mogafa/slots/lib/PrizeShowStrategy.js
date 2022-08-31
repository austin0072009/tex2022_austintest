
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/PrizeShowStrategy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxQcml6ZVNob3dTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHFEQUFvRDtBQUVwRDtJQUFBO1FBRVksa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFDL0IsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN0Qix1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFDbkMsa0JBQWEsR0FBZSxFQUFFLENBQUM7UUFDL0IsaUJBQVksR0FBb0YsRUFBRSxDQUFDO1FBQ25HLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDdkIseUJBQW9CLEdBQVksSUFBSSxDQUFDO1FBQ3JDLHlCQUFvQixHQUFZLElBQUksQ0FBQztRQUM3Qzs7Ozs7V0FLRztRQUNLLHNCQUFpQixHQUFXLEdBQUcsQ0FBQztJQStJNUMsQ0FBQztJQTlJRyxzQkFBVywwQ0FBVzthQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO2FBQ0QsVUFBdUIsS0FBNEI7WUFDL0MsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEYsSUFBSSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDaEY7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqRixJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFB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QTdCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUM3QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGtDQUFrQyxFQUFFLENBQUM7WUFDMUMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBQ0QsaUNBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0EvSkEsQUErSkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJUHJpemVTaG93U3RyYXRlZ3kgZnJvbSBcIi4vSVByaXplU2hvd1N0cmF0ZWd5XCI7XG5pbXBvcnQgSVByaXplU2hvd1N5bWJvbEJvYXJkIGZyb20gXCIuL0lQcml6ZVNob3dTeW1ib2xCb2FyZFwiO1xuaW1wb3J0IHsgUHJpemVTaG93U3RhdHVzIH0gZnJvbSBcIi4vUHJpemVTaG93U3RhdHVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXplU2hvd1N0cmF0ZWd5IGltcGxlbWVudHMgSVByaXplU2hvd1N0cmF0ZWd5IHtcbiAgICBwcml2YXRlIF9zeW1ib2xCb2FyZDogSVByaXplU2hvd1N5bWJvbEJvYXJkO1xuICAgIHByaXZhdGUgX2FsbExpbmVzU2hvdzogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIF9saW5lSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfY2FuQmVTaG93TmV4dExpbmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX21hdGNoZWRMaW5lczogbnVtYmVyW11bXSA9IFtdO1xuICAgIHByaXZhdGUgX2NlbGxSZXdhcmRzOiB7IHBvc2l0aW9uOiBudW1iZXI7IHN5bWJvbENvZGU6IG51bWJlcjsgcmV3YXJkczogbnVtYmVyOyBpc0phY2twb3Q6IGJvb2xlYW4gfVtdID0gW107XG4gICAgcHJpdmF0ZSBfY2VsbEluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2NlbGxTZXR0bGVDb21wbGV0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHByaXZhdGUgX2NhbkJlU2V0dGxlTmV4dENlbGw6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIOWxleekuuW8gOWni+WQjuWkmumVv+aXtumXtOWPr+S7peeCueWHu3NwaW7mjInpkq5cbiAgICAgKlxuICAgICAqIOWNleS9je+8muavq+enklxuICAgICAqIEB0b2RvIOi/meS4quWBmuaIkOmFjee9rlxuICAgICAqL1xuICAgIHByaXZhdGUgX2NhbkJlU3BpblRpbWVvdXQ6IG51bWJlciA9IDUwMDtcbiAgICBwdWJsaWMgZ2V0IHN5bWJvbEJvYXJkKCk6IElQcml6ZVNob3dTeW1ib2xCb2FyZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zeW1ib2xCb2FyZDtcbiAgICB9XG4gICAgcHVibGljIHNldCBzeW1ib2xCb2FyZCh2YWx1ZTogSVByaXplU2hvd1N5bWJvbEJvYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLl9zeW1ib2xCb2FyZCkge1xuICAgICAgICAgICAgdGhpcy5fc3ltYm9sQm9hcmQub2ZmUHJpemVMaW5lU2hvd0NvbXBsZXRlZE9uY2UodGhpcy5saW5lU2hvd0NvbXBsZXRlZE9uY2UsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fc3ltYm9sQm9hcmQub2ZmQ2VsbFJld2FyZFNldHRsZWRPbmNlKHRoaXMuY2VsbFNob3dDb21wbGV0ZWRPbmNlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zeW1ib2xCb2FyZCA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5fc3ltYm9sQm9hcmQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N5bWJvbEJvYXJkLm9uUHJpemVMaW5lU2hvd0NvbXBsZXRlZE9uY2UodGhpcy5saW5lU2hvd0NvbXBsZXRlZE9uY2UsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fc3ltYm9sQm9hcmQub25DZWxsUmV3YXJkU2V0dGxlZE9uY2UodGhpcy5jZWxsU2hvd0NvbXBsZXRlZE9uY2UsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0U2V0dGxlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb2Nlc3NDZWxsUmV3YXJkcygpO1xuICAgICAgICBpZiAodGhpcy5fY2VsbFJld2FyZHMgJiYgdGhpcy5fY2VsbFJld2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fY2VsbEluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2NlbGxTZXR0bGVDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sQm9hcmQuc2NoZWR1bGUodGhpcy5zZXR0bGluZy5iaW5kKHRoaXMpLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5QWxsQ2VsbFJld2FyZFNldHRsZUNvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0U2hvdygpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGFydFNob3dcIilcbiAgICAgICAgdGhpcy5fbWF0Y2hlZExpbmVzID0gW107XG4gICAgICAgIHRoaXMuX21hdGNoZWRMaW5lcyA9IHRoaXMuc3ltYm9sQm9hcmQubWF0Y2hlZExpbmVzO1xuICAgICAgICBpZiAoIXRoaXMuX21hdGNoZWRMaW5lcykge1xuICAgICAgICAgICAgdGhpcy5fbWF0Y2hlZExpbmVzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fbWF0Y2hlZExpbmVzICYmIHRoaXMuX21hdGNoZWRMaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbEJvYXJkLnNjaGVkdWxlKHRoaXMuc2hvd2luZy5iaW5kKHRoaXMpLCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5QWxsQ2VsbFJld2FyZFNldHRsZUNvbXBsZXRlZCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgbm90aWZ5QWxsQ2VsbFJld2FyZFNldHRsZUNvbXBsZXRlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2VsbFNldHRsZUNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NhbkJlU2V0dGxlTmV4dENlbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zeW1ib2xCb2FyZC5yZWNlaXZlQWxsQ2VsbFJld2FyZHNTZXR0bGVkKCk7XG4gICAgfVxuICAgIHByaXZhdGUgcHJvY2Vzc0NlbGxSZXdhcmRzKCk6IHZvaWQge1xuICAgICAgICBsZXQgY2VsbFJld2FyZHM6IHsgcG9zaXRpb246IG51bWJlcjsgc3ltYm9sQ29kZTogbnVtYmVyOyByZXdhcmRzOiBudW1iZXI7IGlzSmFja3BvdDogYm9vbGVhbiB9W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN5bWJvbEJvYXJkLmNoaXBDZWxsUmV3YXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJld2FyZDogeyBwb3NpdGlvbjogbnVtYmVyOyBzeW1ib2xDb2RlOiBudW1iZXI7IHJld2FyZHM6IG51bWJlcjsgaXNKYWNrcG90OiBib29sZWFuIH0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHsgaXNKYWNrcG90OiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sQm9hcmQuY2hpcENlbGxSZXdhcmRzW2ldXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2VsbFJld2FyZHMucHVzaChyZXdhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zeW1ib2xCb2FyZC5qYWNrcG90Q2VsbFJld2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXdhcmQ6IHsgcG9zaXRpb246IG51bWJlcjsgc3ltYm9sQ29kZTogbnVtYmVyOyByZXdhcmRzOiBudW1iZXI7IGlzSmFja3BvdDogYm9vbGVhbiB9ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgICB7IGlzSmFja3BvdDogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sQm9hcmQuamFja3BvdENlbGxSZXdhcmRzW2ldXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2VsbFJld2FyZHMucHVzaChyZXdhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGNlbGxSZXdhcmRzID0gY2VsbFJld2FyZHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEucG9zaXRpb24gLSBiLnBvc2l0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fY2VsbFJld2FyZHMgPSBjZWxsUmV3YXJkcztcbiAgICB9XG4gICAgcHJpdmF0ZSBsaW5lU2hvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2FsbExpbmVzU2hvdyAmJiB0aGlzLl9jYW5CZVNob3dOZXh0TGluZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FuQmVTaG93TmV4dExpbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN5bWJvbEJvYXJkLmxpbmVJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xCb2FyZC5saW5lSW5kZXggPSB0aGlzLl9saW5lSW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3ltYm9sQm9hcmQucHJpemVMaW5lU2hvdyh0aGlzLnN5bWJvbEJvYXJkLm1hdGNoZWRMaW5lcywgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NhbkJlU2hvd05leHRMaW5lKSB7XG4gICAgICAgICAgICB0aGlzLl9jYW5CZVNob3dOZXh0TGluZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fbGluZUluZGV4ID49IHRoaXMuc3ltYm9sQm9hcmQubWF0Y2hlZExpbmVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN5bWJvbEJvYXJkLm1hdGNoZWRMaW5lc1t0aGlzLl9saW5lSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ltYm9sQm9hcmQubGluZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xCb2FyZC5saW5lSW5kZXggPSB0aGlzLl9saW5lSW5kZXhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xCb2FyZC5wcml6ZUxpbmVTaG93KFt0aGlzLnN5bWJvbEJvYXJkLm1hdGNoZWRMaW5lc1t0aGlzLl9saW5lSW5kZXhdXSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93aW5nKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmxpbmVTaG93KCk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0dGxpbmcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnN5bWJvbEJvYXJkLnByaXplU2hvd1N0YXR1cyAhPSBQcml6ZVNob3dTdGF0dXMuU2hvd2luZykge1xuICAgICAgICAgICAgY2Mud2FybihcIuWPquacieato+WcqOWxleekuueKtuaAgeaJjeiDveW8gOWni+WxleekulwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNlbGxTZXR0bGUoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBsaW5lU2hvd0NvbXBsZXRlZE9uY2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9hbGxMaW5lc1Nob3cpIHtcbiAgICAgICAgICAgIHRoaXMuX2FsbExpbmVzU2hvdyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbGluZUluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xpbmVJbmRleCA+PSB0aGlzLnN5bWJvbEJvYXJkLm1hdGNoZWRMaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX2xpbmVJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9hbGxMaW5lc1Nob3cgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NhbkJlU2hvd05leHRMaW5lID0gdHJ1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjZWxsU2V0dGxlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuX2NlbGxTZXR0bGVDb21wbGV0ZWQgJiYgdGhpcy5fY2FuQmVTZXR0bGVOZXh0Q2VsbCkge1xuICAgICAgICAgICAgdGhpcy5fY2FuQmVTZXR0bGVOZXh0Q2VsbCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgY2VsbFJld2FyZCA9IHRoaXMuX2NlbGxSZXdhcmRzW3RoaXMuX2NlbGxJbmRleF07XG4gICAgICAgICAgICBpZiAoY2VsbFJld2FyZC5pc0phY2twb3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbEJvYXJkLnByaXplSmFja3BvdENlbGxTZXR0bGUoY2VsbFJld2FyZC5wb3NpdGlvbiwgY2VsbFJld2FyZC5zeW1ib2xDb2RlLCBjZWxsUmV3YXJkLnJld2FyZHMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3ltYm9sQm9hcmQucHJpemVDaGlwQ2VsbFNldHRsZShjZWxsUmV3YXJkLnBvc2l0aW9uLCBjZWxsUmV3YXJkLnN5bWJvbENvZGUsIGNlbGxSZXdhcmQucmV3YXJkcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjZWxsU2hvd0NvbXBsZXRlZE9uY2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX2NlbGxJbmRleCsrO1xuICAgICAgICBpZiAodGhpcy5fY2VsbEluZGV4ID49IHRoaXMuX2NlbGxSZXdhcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fY2VsbFNldHRsZUNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN5bWJvbEJvYXJkLnVuc2NoZWR1bGUodGhpcy5zZXR0bGluZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5QWxsQ2VsbFJld2FyZFNldHRsZUNvbXBsZXRlZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NhbkJlU2V0dGxlTmV4dENlbGwgPSB0cnVlO1xuICAgIH1cbiAgICByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbGluZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fY2VsbEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5fbWF0Y2hlZExpbmVzID0gW107XG4gICAgICAgIHRoaXMuX2NlbGxSZXdhcmRzID0gW107XG4gICAgICAgIHRoaXMuX2FsbExpbmVzU2hvdyA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NhbkJlU2hvd05leHRMaW5lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY2FuQmVTZXR0bGVOZXh0Q2VsbCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3ltYm9sQm9hcmQudW5zY2hlZHVsZSh0aGlzLnNob3dpbmcuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc3ltYm9sQm9hcmQudW5zY2hlZHVsZSh0aGlzLnNldHRsaW5nLmJpbmQodGhpcykpO1xuICAgIH1cbn1cbiJdfQ==
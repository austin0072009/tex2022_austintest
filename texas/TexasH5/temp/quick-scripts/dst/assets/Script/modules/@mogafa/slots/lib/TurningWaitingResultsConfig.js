
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/TurningWaitingResultsConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxUdXJuaW5nV2FpdGluZ1Jlc3VsdHNDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFHbEQ7SUFvRkk7UUFuRkE7O1dBRUc7UUFDSyxjQUFTLEdBQW1CLCtCQUFjLENBQUMsTUFBTSxDQUFDO1FBQzFEOztXQUVHO1FBQ0ssZ0JBQVcsR0FBbUIsK0JBQWMsQ0FBQyxJQUFJLENBQUM7UUFDMUQ7O1dBRUc7UUFDSyx1QkFBa0IsR0FBb0IsSUFBSSxDQUFDO1FBQ25EOztXQUVHO1FBQ0sseUJBQW9CLEdBQW9CLElBQUksQ0FBQztRQUNyRDs7V0FFRztRQUNLLHVCQUFrQixHQUFvQixJQUFJLENBQUM7UUFDbkQ7O1dBRUc7UUFDSyxxQkFBZ0IsR0FBb0IsSUFBSSxDQUFDO1FBQ2pEOztXQUVHO1FBQ0ssY0FBUyxHQUFXLENBQUMsQ0FBQztRQUM5Qjs7V0FFRztRQUNLLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDM0I7O1dBRUc7UUFDSyxpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUNsQzs7V0FFRztRQUNLLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDL0I7O1dBRUc7UUFDSyxvQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUN0Qzs7V0FFRztRQUNLLHFCQUFnQixHQUFXLElBQUksQ0FBQztRQUN4Qzs7V0FFRztRQUNLLHdCQUFtQixHQUFXLElBQUksQ0FBQztRQUMzQzs7O1dBR0c7UUFDSyxpQkFBWSxHQUFZLElBQUksQ0FBQztRQUNyQzs7V0FFRztRQUNLLHlCQUFvQixHQUFhLEVBQUUsQ0FBQztRQUM1Qzs7V0FFRztRQUNLLDZCQUF3QixHQUFhLEVBQUUsQ0FBQztRQUNoRDs7V0FFRztRQUNLLDRCQUF1QixHQUFhLEVBQUUsQ0FBQztRQUMvQzs7V0FFRztRQUNLLGtDQUE2QixHQUFhLEVBQUUsQ0FBQztRQUNyRDs7O1dBR0c7UUFDSywwQkFBcUIsR0FBYSxFQUFFLENBQUM7SUFNOUIsQ0FBQztJQUVoQixzQkFBVywwREFBaUI7YUFBNUI7WUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDO2FBQ0QsVUFBNkIsS0FBc0I7WUFDL0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDOzs7T0FIQTtJQUlELHNCQUFXLDREQUFtQjthQUE5QjtZQUNJLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ3JDLENBQUM7YUFDRCxVQUErQixLQUFzQjtZQUNqRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsMERBQWlCO2FBQTVCO1lBQ0ksT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDbkMsQ0FBQzthQUNELFVBQTZCLEtBQXNCO1lBQy9DLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDcEMsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyx3REFBZTthQUExQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFDRCxVQUEyQixLQUFzQjtZQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsaURBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyw0REFBbUI7YUFBOUI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxDQUFDO2FBQ0QsVUFBK0IsS0FBZTtZQUMxQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsaURBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQW9CLEtBQXFCO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsbURBQVU7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQXNCLEtBQXFCO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsZ0VBQXVCO2FBQWxDO1lBQ0ksT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDekMsQ0FBQzthQUNELFVBQW1DLEtBQWU7WUFDOUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUssQ0FBQztRQUMxQyxDQUFDOzs7T0FIQTtJQUlELHNCQUFXLCtEQUFzQjthQUFqQztZQUNJLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO1FBQ3hDLENBQUM7YUFDRCxVQUFrQyxLQUFlO1lBQzdDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7WUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEVBQUUsQ0FBQzthQUNyQztRQUNMLENBQUM7OztPQU5BO0lBT0Qsc0JBQVcscUVBQTRCO2FBQXZDO1lBQ0ksT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUM7UUFDOUMsQ0FBQzthQUNELFVBQXdDLEtBQWU7WUFDbkQsSUFBSSxDQUFDLDZCQUE2QixHQUFHLEtBQUssQ0FBQztZQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFO2dCQUNyQyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRSxDQUFDO2FBQzNDO1FBQ0wsQ0FBQzs7O09BTkE7SUFPRCxzQkFBVyw2REFBb0I7YUFBL0I7WUFDSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDO2FBQ0QsVUFBZ0MsS0FBZTtZQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsaUVBQXdCO2FBQW5DO1lBQ0ksT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUM7UUFDMUMsQ0FBQzthQUNELFVBQW9DLEtBQWE7WUFDN0MsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQztRQUMzQyxDQUFDOzs7T0FIQTtJQUlELHNCQUFXLDZDQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyxvREFBVzthQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO2FBQ0QsVUFBdUIsS0FBYTtZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FIQTtJQUlELHNCQUFXLGlEQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsdURBQWM7YUFBekI7WUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzthQUNELFVBQTBCLEtBQWE7WUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVyx3REFBZTthQUExQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFDRCxVQUEyQixLQUFhO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BSEE7SUFJRCxzQkFBVywyREFBa0I7YUFBN0I7WUFDSSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwQyxDQUFDO2FBQ0QsVUFBOEIsS0FBYTtZQUN2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7OztPQUhBO0lBSUQsc0JBQVcsb0RBQVc7YUFBdEI7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUNELFVBQXVCLEtBQWM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BSEE7SUFJTCxrQ0FBQztBQUFELENBcE5BLEFBb05DLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeW1ib2xTcGluVHlwZSB9IGZyb20gXCIuL1N5bWJvbFNwaW5UeXBlXCI7XG5pbXBvcnQgeyBJUmVzaWxpZW5jZU1vdmUgfSBmcm9tIFwiLi9JUmVzaWxpZW5jZU1vdmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHVybmluZ1dhaXRpbmdSZXN1bHRzQ29uZmlnIHtcbiAgICAvKipcbiAgICAgKiDmraPluLjovazliqjml7bnmoTmo4vlrZDovazliqjmlrnlvI9cbiAgICAgKi9cbiAgICBwcml2YXRlIF9zcGluVHlwZTogU3ltYm9sU3BpblR5cGUgPSBTeW1ib2xTcGluVHlwZS5Db2x1bW47XG4gICAgLyoqXG4gICAgICogcmVzcGlu5pe25qOL5a2Q55qE6L2s5Yqo5pa55byPXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcmVzcGluVHlwZTogU3ltYm9sU3BpblR5cGUgPSBTeW1ib2xTcGluVHlwZS5DZWxsO1xuICAgIC8qKlxuICAgICAqIOWQr+WKqOWbnuW8ueW8gOWni1xuICAgICAqL1xuICAgIHByaXZhdGUgX3N0YXJ0VXBSZXNpbGllbmNlOiBJUmVzaWxpZW5jZU1vdmUgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIOWQr+WKqOWbnuW8uVxuICAgICAqL1xuICAgIHByaXZhdGUgX3N0YXJ0RG93blJlc2lsaWVuY2U6IElSZXNpbGllbmNlTW92ZSA9IG51bGw7XG4gICAgLyoqXG4gICAgICog57uT5p2f5Zue5by55byA5aeLXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZW5kRG93blJlc2lsaWVuY2U6IElSZXNpbGllbmNlTW92ZSA9IG51bGw7XG4gICAgLyoqXG4gICAgICog57uT5p2f5Zue5by557uT5p2fXG4gICAgICovXG4gICAgcHJpdmF0ZSBfZW5kVXBSZXNpbGllbmNlOiBJUmVzaWxpZW5jZU1vdmUgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIOWumuaXtumXtOmalOaXtumVv++8jOWNleS9jeavq+enklxuICAgICAqL1xuICAgIHByaXZhdGUgX2ludGVydmFsOiBudW1iZXIgPSAwO1xuICAgIC8qKlxuICAgICAqIOi9rOWKqOmAn+W6plxuICAgICAqL1xuICAgIHByaXZhdGUgX3N0ZXA6IG51bWJlciA9IDIwO1xuICAgIC8qKlxuICAgICAqIGhvbGR3aW7ovazliqjpgJ/luqZcbiAgICAgKi9cbiAgICBwcml2YXRlIF9ob2xkV2luU3RlcDogbnVtYmVyID0gNDA7XG4gICAgLyoqXG4gICAgICog5YGc5q2i6L2s5Yqo55qE6YCf5bqmXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RvcFN0ZXA6IG51bWJlciA9IDMwO1xuICAgIC8qKlxuICAgICAqIOS6uuW3peWBnOatoui9rOWKqOeahOmAn+W6pu+8jOWmguaenOS4ujDliJnooajnpLrnq4vljbPlgZzmraJcbiAgICAgKi9cbiAgICBwcml2YXRlIF9tYW51YWxTdG9wU3RlcDogbnVtYmVyID0gMTIwO1xuICAgIC8qKlxuICAgICAqIOWmguaenOayoeacieS4u+WKqOaMiXN0b3DvvIzoh6rliqjlgZzmraLnmoTml7bplb9cbiAgICAgKi9cbiAgICBwcml2YXRlIF9hdXRvU3RvcFRpbWVvdXQ6IG51bWJlciA9IDMwMDA7XG4gICAgLyoqXG4gICAgICogaG9sZFdpbuaXtuayoeacieS4u+WKqOaMiXN0b3DvvIzoh6rliqjlgZzmraLnmoTml7bplb9cbiAgICAgKi9cbiAgICBwcml2YXRlIF9ob2xkV2luU3RvcFRpbWVvdXQ6IG51bWJlciA9IDEwMDA7XG4gICAgLyoqXG4gICAgICogU2tpcCBob2xkIHdpbiBvZiB0dXJuaW5nIHdhaXRpbmcgcmVzdWx0cyBjb25maWdcbiAgICAgKiDmiYvliqjlgZzmraLnmoTml7blgJnmmK/lkKbot7Pov4flkI7pnaLnmoRob2xkd2luXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2tpcEhvbGRXaW46IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8qKlxuICAgICAqIOavj+WIl+aji+WtkOaVsO+8iOazqOaEj+WMheWQq+eUqOS6jui9rOWKqOeahOmakOiXj+aji+WtkO+8iVxuICAgICAqL1xuICAgIHByaXZhdGUgX2NlbGxBbW91bnRJbkNvbHVtbnM6IG51bWJlcltdID0gW107XG4gICAgLyoqXG4gICAgICog5q+P5YiX5LmL6Ze055qE5ZCv5Yqo6Ze06ZqU5pe26ZW/77yM5aaC5p6c5Li656m65YiZ6KGo56S65ZCM5pe25ZCv5YqoXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RhcnRJbnRlcnZhbEVhY2hDb2x1bW46IG51bWJlcltdID0gW107XG4gICAgLyoqXG4gICAgICog5q+P5YiX5LmL6Ze055qE5YGc5q2i6Ze06ZqU5pe26ZW/77yM5aaC5p6c5Li656m65YiZ6KGo56S65ZCM5pe25YGc5q2iXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RvcEludGVydmFsRWFjaENvbHVtbjogbnVtYmVyW10gPSBbXTtcbiAgICAvKipcbiAgICAgKiDmiYvlt6XlgZzmraLml7bmr4/liJfkuYvpl7TnmoTlgZzmraLpl7TpmpTml7bplb/vvIzlpoLmnpzkuLrnqbrliJnooajnpLrlkIzml7blgZzmraJcbiAgICAgKi9cbiAgICBwcml2YXRlIF9tYW51YWxTdG9wSW50ZXJ2YWxFYWNoQ29sdW1uOiBudW1iZXJbXSA9IFtdO1xuICAgIC8qKlxuICAgICAqIFN0b3AgaW50ZXJ2YWwgZWFjaCBjZWxsIG9mIHR1cm5pbmcgd2FpdGluZyByZXN1bHRzIGNvbmZpZ1xuICAgICAqIHJlc3BpbuaXtu+8jOavj+S4quagvOWtkOWBnOatoueahOmXtOmalOaXtumVv++8jOi/meS4quaXtumVv+aYr+ebuOWvueS6juesrOS4gOS4quagvOWtkOeahFxuICAgICAqL1xuICAgIHByaXZhdGUgX3N0b3BJbnRlcnZhbEVhY2hDZWxsOiBudW1iZXJbXSA9IFtdO1xuICAgIC8qKlxuICAgICAqIFN0b3AgaW50ZXJ2YWwgaW4gcmVzcGluIGNlbGwgb2YgdHVybmluZyB3YWl0aW5nIHJlc3VsdHMgY29uZmlnXG4gICAgICog5ZyocmVzcGlu5Lit5q+P5Liq5qC85a2Q5YGc5q2i6ZyA6KaB55qE5pe26ZW/XG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RvcEludGVydmFsSW5SZXNwaW5DZWxsOiBudW1iZXI7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgcHVibGljIGdldCBzdGFydFVwUmVzaWxpZW5jZSgpOiBJUmVzaWxpZW5jZU1vdmUge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhcnRVcFJlc2lsaWVuY2U7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc3RhcnRVcFJlc2lsaWVuY2UodmFsdWU6IElSZXNpbGllbmNlTW92ZSkge1xuICAgICAgICB0aGlzLl9zdGFydFVwUmVzaWxpZW5jZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN0YXJ0RG93blJlc2lsaWVuY2UoKTogSVJlc2lsaWVuY2VNb3ZlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0RG93blJlc2lsaWVuY2U7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc3RhcnREb3duUmVzaWxpZW5jZSh2YWx1ZTogSVJlc2lsaWVuY2VNb3ZlKSB7XG4gICAgICAgIHRoaXMuX3N0YXJ0RG93blJlc2lsaWVuY2UgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlbmREb3duUmVzaWxpZW5jZSgpOiBJUmVzaWxpZW5jZU1vdmUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5kRG93blJlc2lsaWVuY2U7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZW5kRG93blJlc2lsaWVuY2UodmFsdWU6IElSZXNpbGllbmNlTW92ZSkge1xuICAgICAgICB0aGlzLl9lbmREb3duUmVzaWxpZW5jZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVuZFVwUmVzaWxpZW5jZSgpOiBJUmVzaWxpZW5jZU1vdmUge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5kVXBSZXNpbGllbmNlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGVuZFVwUmVzaWxpZW5jZSh2YWx1ZTogSVJlc2lsaWVuY2VNb3ZlKSB7XG4gICAgICAgIHRoaXMuX2VuZFVwUmVzaWxpZW5jZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGludGVydmFsKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcnZhbDtcbiAgICB9XG4gICAgcHVibGljIHNldCBpbnRlcnZhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY2VsbEFtb3VudEluQ29sdW1ucygpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jZWxsQW1vdW50SW5Db2x1bW5zO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNlbGxBbW91bnRJbkNvbHVtbnModmFsdWU6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX2NlbGxBbW91bnRJbkNvbHVtbnMgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzcGluVHlwZSgpOiBTeW1ib2xTcGluVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGluVHlwZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBzcGluVHlwZSh2YWx1ZTogU3ltYm9sU3BpblR5cGUpIHtcbiAgICAgICAgdGhpcy5fc3BpblR5cGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCByZXNwaW5UeXBlKCk6IFN5bWJvbFNwaW5UeXBlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BpblR5cGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcmVzcGluVHlwZSh2YWx1ZTogU3ltYm9sU3BpblR5cGUpIHtcbiAgICAgICAgdGhpcy5fcmVzcGluVHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN0YXJ0SW50ZXJ2YWxFYWNoQ29sdW1uKCk6IG51bWJlcltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXJ0SW50ZXJ2YWxFYWNoQ29sdW1uO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHN0YXJ0SW50ZXJ2YWxFYWNoQ29sdW1uKHZhbHVlOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9zdGFydEludGVydmFsRWFjaENvbHVtbiA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN0b3BJbnRlcnZhbEVhY2hDb2x1bW4oKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcEludGVydmFsRWFjaENvbHVtbjtcbiAgICB9XG4gICAgcHVibGljIHNldCBzdG9wSW50ZXJ2YWxFYWNoQ29sdW1uKHZhbHVlOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9zdG9wSW50ZXJ2YWxFYWNoQ29sdW1uID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fc3RvcEludGVydmFsRWFjaENvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5fc3RvcEludGVydmFsRWFjaENvbHVtbiA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbWFudWFsU3RvcEludGVydmFsRWFjaENvbHVtbigpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYW51YWxTdG9wSW50ZXJ2YWxFYWNoQ29sdW1uO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG1hbnVhbFN0b3BJbnRlcnZhbEVhY2hDb2x1bW4odmFsdWU6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX21hbnVhbFN0b3BJbnRlcnZhbEVhY2hDb2x1bW4gPSB2YWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLl9tYW51YWxTdG9wSW50ZXJ2YWxFYWNoQ29sdW1uKSB7XG4gICAgICAgICAgICB0aGlzLl9tYW51YWxTdG9wSW50ZXJ2YWxFYWNoQ29sdW1uID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBzdG9wSW50ZXJ2YWxFYWNoQ2VsbCgpOiBudW1iZXJbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdG9wSW50ZXJ2YWxFYWNoQ2VsbDtcbiAgICB9XG4gICAgcHVibGljIHNldCBzdG9wSW50ZXJ2YWxFYWNoQ2VsbCh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fc3RvcEludGVydmFsRWFjaENlbGwgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdG9wSW50ZXJ2YWxJblJlc3BpbkNlbGwoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3BJbnRlcnZhbEluUmVzcGluQ2VsbDtcbiAgICB9XG4gICAgcHVibGljIHNldCBzdG9wSW50ZXJ2YWxJblJlc3BpbkNlbGwodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zdG9wSW50ZXJ2YWxJblJlc3BpbkNlbGwgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdGVwKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVwO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zdGVwID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaG9sZFdpblN0ZXAoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvbGRXaW5TdGVwO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGhvbGRXaW5TdGVwKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faG9sZFdpblN0ZXAgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdG9wU3RlcCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcFN0ZXA7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc3RvcFN0ZXAodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zdG9wU3RlcCA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG1hbnVhbFN0b3BTdGVwKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYW51YWxTdG9wU3RlcDtcbiAgICB9XG4gICAgcHVibGljIHNldCBtYW51YWxTdG9wU3RlcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX21hbnVhbFN0b3BTdGVwID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgYXV0b1N0b3BUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvU3RvcFRpbWVvdXQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgYXV0b1N0b3BUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYXV0b1N0b3BUaW1lb3V0ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaG9sZFdpblN0b3BUaW1lb3V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ob2xkV2luU3RvcFRpbWVvdXQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgaG9sZFdpblN0b3BUaW1lb3V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faG9sZFdpblN0b3BUaW1lb3V0ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2tpcEhvbGRXaW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9za2lwSG9sZFdpbjtcbiAgICB9XG4gICAgcHVibGljIHNldCBza2lwSG9sZFdpbih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9za2lwSG9sZFdpbiA9IHZhbHVlO1xuICAgIH1cbn1cbiJdfQ==
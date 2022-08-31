
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SymbolBoard/HoldWinBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91d8cXgH71P7J26RG9d2wbV', 'HoldWinBase');
// Script/modules/@mogafa/slots/lib/SymbolBoard/HoldWinBase.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var FguiComponentBase_1 = require("../../../fairygui-component/lib/FguiComponentBase");
var HoldWinBase = /** @class */ (function (_super) {
    __extends(HoldWinBase, _super);
    function HoldWinBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isHoldWin = false;
        return _this;
    }
    Object.defineProperty(HoldWinBase.prototype, "stageCode", {
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
            if (this._column) {
                this._column.stageCode = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoldWinBase.prototype, "symbolBoard", {
        /**
         * 获取棋盘
         */
        get: function () {
            return this._symbolBoard;
        },
        /**
         * Sets symbol board
         * 设置棋盘
         */
        set: function (value) {
            this._symbolBoard = value;
            if (this._column) {
                this._column.symbolBoard = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoldWinBase.prototype, "boardStatus", {
        get: function () {
            return this._boardStatus;
        },
        set: function (value) {
            this._boardStatus = value;
            if (this.column) {
                this.column.boardStatus = value;
            }
            this.status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoldWinBase.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
            if (this.column) {
                this.column.status = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoldWinBase.prototype, "column", {
        get: function () {
            return this._column;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HoldWinBase.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
            if (this._column) {
                this._column.index = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    HoldWinBase.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._mask = this.getChild("mask");
        this._column = this.addColumn();
        //this._column.fguiComponent.setMask(null, false);
        this._column.fguiX = 0;
        this._column.fguiY = 0;
        this._column.index = this.index;
        this._column.stageCode = this.stageCode;
        this._column.holdWin = this;
        this._column.symbolBoard = this.symbolBoard;
    };
    HoldWinBase.prototype.beforeStartWaitingResults = function () {
        if (this._column) {
            this._column.beforeStartWaitingResults();
        }
    };
    HoldWinBase.prototype.beforeStopWaitingResults = function () {
        if (this._column) {
            this._column.beforeStopWaitingResults();
        }
    };
    HoldWinBase.prototype.onColumnStopped = function (listener, target) {
        if (this._column) {
            this._column.onColumnStopped(listener, target);
        }
    };
    HoldWinBase.prototype.holdWin = function () {
        if (this._column) {
            this.setControllerProperty(this.holdWinControllerName, 1);
            var holdWin = this.fguiComponent.getChild(this.holdWinComponentName);
            if (holdWin) {
                this.holdWinShow();
                this.isHoldWin = true;
                this.fguiComponent.addChild(holdWin);
            }
        }
    };
    HoldWinBase.prototype.holdWinShow = function () { };
    HoldWinBase.prototype.unholdWin = function (index) {
        if (this.isHoldWin && index === this._index) {
            this.setControllerProperty(this.holdWinControllerName, 0);
            this.isHoldWin = false;
            this.holdWinEnd();
        }
    };
    HoldWinBase.prototype.holdWinEnd = function () { };
    HoldWinBase.prototype.receivePrizeShowCompleted = function (position) {
        var parent = this.parent;
        if (parent) {
            parent.receivePrizeShowCompleted(position);
        }
    };
    HoldWinBase.prototype.receiveMockCodeReplaced = function (columnIndex, cellIndex) {
        var parent = this.parent;
        if (parent) {
            parent.receiveMockCodesReplaced(columnIndex, cellIndex);
        }
    };
    HoldWinBase.prototype.receiveReelStopped = function (columnIndex) {
        var parent = this.parent;
        if (parent) {
            parent.receiveReelStopped(columnIndex);
        }
    };
    HoldWinBase.prototype.reset = function () {
        this.isHoldWin = false;
    };
    HoldWinBase.prototype.showMask = function () {
        this.fguiComponent.setMask(this._mask, false);
    };
    HoldWinBase.prototype.hideMask = function () {
        this.fguiComponent.setMask(null, false);
    };
    return HoldWinBase;
}(FguiComponentBase_1.default));
exports.default = HoldWinBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTeW1ib2xCb2FyZFxcSG9sZFdpbkJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsdUZBQWtGO0FBR2xGO0lBQWtELCtCQUFpQjtJQUFuRTtRQUFBLHFFQXVLQztRQTlGVSxlQUFTLEdBQVksS0FBSyxDQUFDOztJQThGdEMsQ0FBQztJQTNKRyxzQkFBSSxrQ0FBUztRQUhiOztXQUVHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztRQUNEOztXQUVHO2FBQ0gsVUFBYyxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDbEM7UUFDTCxDQUFDOzs7T0FUQTtJQWFELHNCQUFJLG9DQUFXO1FBSGY7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO1FBQ0Q7OztXQUdHO2FBQ0gsVUFBZ0IsS0FBc0I7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUNwQztRQUNMLENBQUM7OztPQVZBO0lBZ0JELHNCQUFJLG9DQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUNELFVBQWdCLEtBQXdCO1lBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FB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TSw4QkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDTCxrQkFBQztBQUFELENBdktBLEFBdUtDLENBdktpRCwyQkFBaUIsR0F1S2xFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlZWxCYXNlIGZyb20gXCIuL1JlZWxCYXNlXCI7XG5pbXBvcnQgU3ltYm9sQm9hcmRCYXNlIGZyb20gXCIuL1N5bWJvbEJvYXJkQmFzZVwiO1xuaW1wb3J0IHsgTW9nYWZhU2xvdHMgfSBmcm9tIFwiLi4vTW9nYWZhU2xvdHNcIjtcbmltcG9ydCB7IFN5bWJvbEJvYXJkU3RhdHVzIH0gZnJvbSBcIi4vU3ltYm9sQm9hcmRTdGF0dXNcIjtcbmltcG9ydCBGZ3VpQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vZmFpcnlndWktY29tcG9uZW50L2xpYi9GZ3VpQ29tcG9uZW50QmFzZVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEhvbGRXaW5CYXNlIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2UgaW1wbGVtZW50cyBNb2dhZmFTbG90cyB7XG4gICAgLyoqXG4gICAgICog5YWz5Y2h57yW56CBXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RhZ2VDb2RlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICog5omA5bGe5qOL55uYXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3ltYm9sQm9hcmQ6IFN5bWJvbEJvYXJkQmFzZTtcbiAgICAvKipcbiAgICAgKiDojrflj5blhbPljaHnvJbnoIFcbiAgICAgKi9cbiAgICBnZXQgc3RhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFnZUNvZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoee8lueggVxuICAgICAqL1xuICAgIHNldCBzdGFnZUNvZGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zdGFnZUNvZGUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uLnN0YWdlQ29kZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluaji+ebmFxuICAgICAqL1xuICAgIGdldCBzeW1ib2xCb2FyZCgpOiBTeW1ib2xCb2FyZEJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3ltYm9sQm9hcmQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgc3ltYm9sIGJvYXJkXG4gICAgICog6K6+572u5qOL55uYXG4gICAgICovXG4gICAgc2V0IHN5bWJvbEJvYXJkKHZhbHVlOiBTeW1ib2xCb2FyZEJhc2UpIHtcbiAgICAgICAgdGhpcy5fc3ltYm9sQm9hcmQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uLnN5bWJvbEJvYXJkID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQm9hcmQgc3RhdHVzIG9mIHN5bWJvbCBiYXNlXG4gICAgICog5qOL55uY54q25oCBXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYm9hcmRTdGF0dXM6IFN5bWJvbEJvYXJkU3RhdHVzO1xuICAgIGdldCBib2FyZFN0YXR1cygpOiBTeW1ib2xCb2FyZFN0YXR1cyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib2FyZFN0YXR1cztcbiAgICB9XG4gICAgc2V0IGJvYXJkU3RhdHVzKHZhbHVlOiBTeW1ib2xCb2FyZFN0YXR1cykge1xuICAgICAgICB0aGlzLl9ib2FyZFN0YXR1cyA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5jb2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1uLmJvYXJkU3RhdHVzID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0dXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGF0dXMgIG9mIHN5bWJvbCBiYXNlXG4gICAgICog5qOL5a2Q54q25oCBXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RhdHVzOiBTeW1ib2xCb2FyZFN0YXR1cztcbiAgICBnZXQgc3RhdHVzKCk6IFN5bWJvbEJvYXJkU3RhdHVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgc2V0IHN0YXR1cyh2YWx1ZTogU3ltYm9sQm9hcmRTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmNvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW4uc3RhdHVzID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBob2xkV2luQ29tcG9uZW50TmFtZSgpOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBob2xkV2luQ29udHJvbGxlck5hbWUoKTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XG4gICAgcHVibGljIGlzSG9sZFdpbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBfY29sdW1uOiBSZWVsQmFzZTtcbiAgICBwcml2YXRlIF9tYXNrOiBmZ3VpLkdPYmplY3Q7XG4gICAgcHVibGljIGdldCBjb2x1bW4oKTogUmVlbEJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1uO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faW5kZXggPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbHVtbikge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1uLmluZGV4ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBpbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLl9tYXNrID0gdGhpcy5nZXRDaGlsZChcIm1hc2tcIik7XG4gICAgICAgIHRoaXMuX2NvbHVtbiA9IHRoaXMuYWRkQ29sdW1uKCk7XG4gICAgICAgIC8vdGhpcy5fY29sdW1uLmZndWlDb21wb25lbnQuc2V0TWFzayhudWxsLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuX2NvbHVtbi5mZ3VpWCA9IDA7XG4gICAgICAgIHRoaXMuX2NvbHVtbi5mZ3VpWSA9IDA7XG4gICAgICAgIHRoaXMuX2NvbHVtbi5pbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuX2NvbHVtbi5zdGFnZUNvZGUgPSB0aGlzLnN0YWdlQ29kZTtcbiAgICAgICAgdGhpcy5fY29sdW1uLmhvbGRXaW4gPSB0aGlzO1xuICAgICAgICB0aGlzLl9jb2x1bW4uc3ltYm9sQm9hcmQgPSB0aGlzLnN5bWJvbEJvYXJkO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYWRkQ29sdW1uKCk6IFJlZWxCYXNlO1xuICAgIHB1YmxpYyBiZWZvcmVTdGFydFdhaXRpbmdSZXN1bHRzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fY29sdW1uKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW4uYmVmb3JlU3RhcnRXYWl0aW5nUmVzdWx0cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBiZWZvcmVTdG9wV2FpdGluZ1Jlc3VsdHMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jb2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbi5iZWZvcmVTdG9wV2FpdGluZ1Jlc3VsdHMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgb25Db2x1bW5TdG9wcGVkKGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jb2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbi5vbkNvbHVtblN0b3BwZWQobGlzdGVuZXIsIHRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGhvbGRXaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb2x1bW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KHRoaXMuaG9sZFdpbkNvbnRyb2xsZXJOYW1lLCAxKTtcbiAgICAgICAgICAgIGxldCBob2xkV2luID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKHRoaXMuaG9sZFdpbkNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgaWYgKGhvbGRXaW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGRXaW5TaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0hvbGRXaW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5hZGRDaGlsZChob2xkV2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBob2xkV2luU2hvdygpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIHVuaG9sZFdpbihpbmRleD86IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pc0hvbGRXaW4gJiYgaW5kZXggPT09IHRoaXMuX2luZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eSh0aGlzLmhvbGRXaW5Db250cm9sbGVyTmFtZSwgMCk7XG4gICAgICAgICAgICB0aGlzLmlzSG9sZFdpbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ob2xkV2luRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaG9sZFdpbkVuZCgpOiB2b2lkIHsgfVxuXG4gICAgcHVibGljIHJlY2VpdmVQcml6ZVNob3dDb21wbGV0ZWQocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgcGFyZW50ID0gKHRoaXMucGFyZW50IGFzIGFueSkgYXMgU3ltYm9sQm9hcmRCYXNlO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQucmVjZWl2ZVByaXplU2hvd0NvbXBsZXRlZChwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlY2VpdmVNb2NrQ29kZVJlcGxhY2VkKGNvbHVtbkluZGV4OiBudW1iZXIsIGNlbGxJbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9ICh0aGlzLnBhcmVudCBhcyBhbnkpIGFzIFN5bWJvbEJvYXJkQmFzZTtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgcGFyZW50LnJlY2VpdmVNb2NrQ29kZXNSZXBsYWNlZChjb2x1bW5JbmRleCwgY2VsbEluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWNlaXZlUmVlbFN0b3BwZWQoY29sdW1uSW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSAodGhpcy5wYXJlbnQgYXMgYW55KSBhcyBTeW1ib2xCb2FyZEJhc2U7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZWNlaXZlUmVlbFN0b3BwZWQoY29sdW1uSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0hvbGRXaW4gPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIHNob3dNYXNrKCkge1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQuc2V0TWFzayh0aGlzLl9tYXNrLCBmYWxzZSk7XG4gICAgfVxuICAgIHB1YmxpYyBoaWRlTWFzaygpIHtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnNldE1hc2sobnVsbCwgZmFsc2UpO1xuICAgIH1cbn1cbiJdfQ==
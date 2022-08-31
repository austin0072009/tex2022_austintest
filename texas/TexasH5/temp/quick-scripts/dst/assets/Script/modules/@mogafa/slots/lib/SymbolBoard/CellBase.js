
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/SymbolBoard/CellBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec98dTyNEpBsI2RYUBsF0wp', 'CellBase');
// Script/modules/@mogafa/slots/lib/SymbolBoard/CellBase.ts

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
var SymbolBase_1 = require("./SymbolBase");
var SymbolBoardConst_1 = require("./SymbolBoardConst");
var SymbolBoardStatus_1 = require("./SymbolBoardStatus");
var FguiComponentBase_1 = require("../../../fairygui-component/lib/FguiComponentBase");
var CellBase = /** @class */ (function (_super) {
    __extends(CellBase, _super);
    function CellBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._chesses = [];
        _this._mockCodeReplaced = true;
        _this._stopped = true;
        _this._moveEnd = false;
        _this.isFirstMove = true;
        _this._isHoldWin = false;
        _this.holdWinShowing = false;
        _this.fixed = false;
        _this.nextFixed = false;
        _this.specialEffectShowing = false;
        return _this;
    }
    Object.defineProperty(CellBase.prototype, "stageCode", {
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
            for (var i = 0; i < this._chesses.length; i++) {
                this._chesses[i].stageCode = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "reel", {
        /**
         * 获取列
         */
        get: function () {
            return this._reel;
        },
        /**
         * 设置列
         */
        set: function (value) {
            this._reel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "boardStatus", {
        get: function () {
            return this._boardStatus;
        },
        set: function (value) {
            this._boardStatus = value;
            for (var i = 0; i < this._chesses.length; i++) {
                this._chesses[i].boardStatus = value;
            }
            this.status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
            for (var i = 0; i < this._chesses.length; i++) {
                this._chesses[i].status = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "assetsComponentName", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "code", {
        get: function () {
            return this.resultChess.code;
        },
        set: function (code) {
            if (code == null) {
                return;
            }
            if (code >= SymbolBoardConst_1.SymbolBoardConst.FINAL_CODE_OFFSET) {
                this._isFinal = true;
                code = code - SymbolBoardConst_1.SymbolBoardConst.FINAL_CODE_OFFSET;
                //console.log("final code====",code)
            }
            else {
                this._isFinal = false;
            }
            this.resultChess.code = code;
            this.finalCode = code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (value) {
            this._index = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "isFinal", {
        get: function () {
            return this._isFinal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "finalCode", {
        get: function () {
            return this._finalCode;
        },
        set: function (value) {
            this._finalCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "finalAssets", {
        get: function () {
            return this._finalAssets;
        },
        set: function (value) {
            this._finalAssets = value;
            this.resultChess.assets = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "mockCodes", {
        get: function () {
            return this._mockCodes;
        },
        set: function (value) {
            this._mockCodes = value;
            if (!this._mockCodes) {
                this._mockCodes = [];
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "isHoldWin", {
        get: function () {
            return this._isHoldWin;
        },
        set: function (value) {
            this._isHoldWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "mogafaId", {
        get: function () {
            return this._mogafaId;
        },
        set: function (value) {
            this._mogafaId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "spinResult", {
        set: function (value) {
            this.finalCode = value.code;
            this.assets = value.assets;
            this.nextFixed = value.fixed;
            this.isHoldWin = value.isHoldWin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "mustBeFixed", {
        get: function () {
            return this._mustBeFixed;
        },
        set: function (value) {
            this._mustBeFixed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "theFinalBottomSymbolY", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "moveEnd", {
        get: function () {
            return this._moveEnd;
        },
        enumerable: false,
        configurable: true
    });
    CellBase.prototype.stopShow = function () {
        this.resultChess.stopShow();
    };
    CellBase.prototype.startMove = function () {
        this.resultChess.startMove();
    };
    /**
     * 替换假冒棋子
     *
     * @param code 替换的棋子，可以不传
     */
    CellBase.prototype.replaceMockCodeInternal = function (code) {
        if (code != null) {
            this.replaceMockCode(code);
            return;
        }
        if (!this.mockCodes || this.mockCodes.length === 0 || !this.isFinal) {
            cc.warn("\u6CA1\u6709\u53EF\u66FF\u6362\u7684\u68CB\u5B50\u6216\u8005\u73B0\u5728\u4E0D\u80FD\u6362\u68CB\u5B50");
            return;
        }
        var replaceCode = this.mockCodes.pop();
        this.replaceMockCode(replaceCode);
    };
    CellBase.prototype.replaceMockCode = function (replaceCode) {
        this.replaceMockCodeSimple(replaceCode);
    };
    CellBase.prototype.replaceMockCodeSimple = function (replaceCode) {
        cc.log("\u8FD9\u662F\u9ED8\u8BA4\u7684\u68CB\u5B50\u66FF\u6362\u65B9\u6CD5");
        this.resultChess.code = replaceCode;
        this.notifyMockCodeReplaced();
    };
    CellBase.prototype.notifyMockCodeReplaced = function () {
        this._mockCodeReplaced = true;
        var parent = this.parent;
        if (parent) {
            parent.receiveMockCodeReplaced(parent.index, this.index);
        }
    };
    Object.defineProperty(CellBase.prototype, "mockCodeReplaced", {
        get: function () {
            return this._mockCodeReplaced;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CellBase.prototype, "waitingResultsStrategy", {
        get: function () {
            return this._waitingResultsStrategy;
        },
        set: function (waitingResultsStrategy) {
            this._waitingResultsStrategy = waitingResultsStrategy;
        },
        enumerable: false,
        configurable: true
    });
    CellBase.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this._mask = this.fguiComponent.mask;
        this.fguiComponent.setMask(null, false);
        if (this.assetsComponentName) {
            this.assetsComponent = this.getChild(this.assetsComponentName).asTextField;
        }
    };
    CellBase.prototype.addFguiComponent = function (type, changeSize) {
        if (changeSize === void 0) { changeSize = true; }
        var child = _super.prototype.addFguiComponent.call(this, type, changeSize);
        if (child instanceof SymbolBase_1.default) {
            var symbol = child;
            symbol.stageCode = this.stageCode;
            symbol.cell = this;
            symbol.assets = this.assets;
            this._chesses.push(symbol);
            symbol.index = this._chesses.length - 1;
        }
        return child;
    };
    CellBase.prototype.firstMove = function () {
        for (var i = 0; i < this._chesses.length; i++) {
            if (!this._chesses[i].fguiComponent.visible) {
                this._chesses[i].fguiComponent.visible = true;
            }
        }
        this.fguiComponent.setMask(this._mask, false);
    };
    CellBase.prototype.moveY = function (step, code) {
        if (this._moveEnd) {
            return false;
        }
        if (code >= SymbolBoardConst_1.SymbolBoardConst.FINAL_CODE_OFFSET) {
            this.code = code;
        }
        this._chesses = this._chesses.sort(function (c1, c2) {
            return c1.fguiY - c2.fguiY;
        });
        var theTopChess = this._chesses[0];
        var theBottomChess = this._chesses[this._chesses.length - 1];
        if (this.fixed) {
            if (code >= SymbolBoardConst_1.SymbolBoardConst.FINAL_CODE_OFFSET) {
                theBottomChess.code = code;
            }
        }
        else {
            if (this.isFirstMove) {
                this.firstMove();
                this.isFirstMove = false;
            }
            if (!this.specialEffectShowing) {
                this.specialEffectShowing = this.specialEffectShowInSpin();
            }
        }
        if (this.isFinal) {
            if (theBottomChess.fguiY + step >= this.theFinalBottomSymbolY) {
                step = this.theFinalBottomSymbolY - theBottomChess.fguiY;
                this._moveEnd = true;
                //if (theTopChess.isFinal) {
                theBottomChess.code = this.finalCode;
                //}
            }
        }
        if (this.fixed) {
            step = 0;
        }
        for (var i = 0; i < this._chesses.length; i++) {
            this._chesses[i].fguiY += step;
        }
        if (this._moveEnd) {
            theTopChess.fguiComponent.visible = false;
            this.specialEffectOffInSpin();
            this.specialEffectShowing = false;
            this.status = SymbolBoardStatus_1.SymbolBoardStatus.Stopped;
            this.fguiComponent.setMask(null, false);
            if (this.assetsComponent && this.finalAssets !== -1) {
                this.assetsComponent.text = this.assetsDisplay();
                this.assetsComponent.visible = true;
            }
            theBottomChess.assets = this.finalAssets;
            this.isFirstMove = true;
            this.fixed = this.nextFixed;
            this.nextFixed = false;
            this.holdWinOff();
            this.notifyCellStopped();
            return false;
        }
        if (this.fixed) {
            return true;
        }
        var useCode = false;
        if (step > 0) {
            if (theBottomChess.fguiY >= this.fguiHeight) {
                theBottomChess.fguiY = theTopChess.fguiY - theTopChess.fguiHeight;
                if (code || code == 0) {
                    useCode = true;
                    theBottomChess.code = code;
                }
            }
        }
        if (step < 0) {
            if (theTopChess.fguiY <= 0) {
                theTopChess.fguiY = theBottomChess.fguiY + theBottomChess.fguiHeight;
                if (code || code == 0) {
                    useCode = true;
                    theTopChess.code = code;
                }
            }
        }
        if (useCode) {
            this._chesses = this._chesses.sort(function (c1, c2) {
                return c1.fguiY - c2.fguiY;
            });
        }
        return useCode;
    };
    CellBase.prototype.assetsDisplay = function () {
        if (this.assets === -1) {
            return "";
        }
        return this.assets.toString();
    };
    CellBase.prototype.prizeShow = function (position) {
        this.resultChess.startPrizeShow(position);
    };
    CellBase.prototype.receivePrizeShowCompleted = function (position) {
        var parent = this.parent;
        if (parent) {
            parent.receivePrizeShowCompleted(position);
        }
    };
    CellBase.prototype.notifyCellStopped = function () {
        this.stopShow();
        var parent = this.parent;
        if (parent) {
            parent.receiveCellStopped(this._index);
        } //
    };
    CellBase.prototype.reset = function () {
        this.unscheduleAllCallbacks();
        for (var i = 0; i < this._chesses.length; i++) {
            this._chesses[i].reset();
        }
        this.specialEffectShowing = false;
        this._isFinal = false;
        this._mockCodes = [];
        this._mockCodeReplaced = true;
        this._moveEnd = false;
        this.isFirstMove = true;
        this.holdWinShowing = false;
        if (this.assetsComponent) {
            this.assetsComponent.text = this.assetsDisplay();
        }
    };
    //#region 设置控制值
    CellBase.prototype.setSymbolControllerProperty = function (controllerName, code) {
        this.resultChess.setControllerProperty(controllerName, code);
    };
    //#endregion
    CellBase.prototype.playSpineByConfig = function (configName, callback) {
        this.resultChess.playSpineByConfig(configName, callback);
    };
    /**
     * 转动过程中格子特殊效果展示，游戏关卡重载实现
     * 比如水果777，在这里实现respin中普通转动的特效（需要判断只在respin中才展示这个特效）
     * @returns 如果为true表示效果生效
     */
    CellBase.prototype.specialEffectShowInSpin = function () {
        return false;
    };
    /**
     * 转动过程中的格子特殊效果停止，游戏关卡重载实现
     */
    CellBase.prototype.specialEffectOffInSpin = function () { };
    CellBase.prototype.holdWin = function () {
        if (!this.holdWinShowing) {
            this.holdWinShowing = true;
            this.holdWinShow();
        }
    };
    CellBase.prototype.unholdWin = function () {
        this.holdWinOff();
        this.holdWinShowing = false;
    };
    /**
     * 单格格子holdWin展示，游戏关卡重载实现
     * 比如水果777，在这里实现holdWin特效，在普通转和respin中需要区分（holdWin特效不一样）
     */
    CellBase.prototype.holdWinShow = function () { };
    /**
     * 单格格子holdWin展示关闭，游戏关卡重载实现
     */
    CellBase.prototype.holdWinOff = function () { };
    CellBase.prototype.prizeChipCellSettle = function (position, symbolCode, assets, callback) {
        if (callback) {
            callback();
        }
    };
    CellBase.prototype.notifyShowDoubleAssets = function () { };
    CellBase.prototype.doubleChessShow = function () {
        for (var i = 0; i < this._chesses.length; i++) {
            this._chesses[i].doubleChessShow();
        }
    };
    CellBase.prototype.initAssetShow = function () {
        if (this.assetsComponent && this.finalAssets !== -1) {
            this.assetsComponent.visible = true;
            this.assetsComponent.text = this.finalAssets.toString();
        }
    };
    CellBase.prototype.fixedCellShow = function () {
        this.resultChess.fixedCellShow();
    };
    CellBase.prototype.fixedCellHide = function () {
        this.resultChess.fixedCellHide();
    };
    CellBase.prototype.setAssetAfterChessboardStopped = function () { };
    return CellBase;
}(FguiComponentBase_1.default));
exports.default = CellBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxTeW1ib2xCb2FyZFxcQ2VsbEJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQXNDO0FBRXRDLHVEQUFzRDtBQUd0RCx5REFBd0Q7QUFFeEQsdUZBQWtGO0FBR2xGO0lBQStDLDRCQUFpQjtJQUFoRTtRQUFBLHFFQXliQztRQTVXYSxjQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUk5Qix1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFDbEMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG9CQUFjLEdBQVksS0FBSyxDQUFDO1FBQ2hDLFdBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUczQiwwQkFBb0IsR0FBWSxLQUFLLENBQUM7O0lBOFZsRCxDQUFDO0lBNWFHLHNCQUFJLCtCQUFTO1FBSGI7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO1FBQ0Q7O1dBRUc7YUFDSCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDdEM7UUFDTCxDQUFDOzs7T0FUQTtJQWFELHNCQUFJLDBCQUFJO1FBSFI7O1dBRUc7YUFDSDtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0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Q0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUNELGdDQUFhLEdBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFDTSxnQ0FBYSxHQUFwQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNNLGdDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRU0saURBQThCLEdBQXJDLGNBQWdELENBQUM7SUFDckQsZUFBQztBQUFELENBemJBLEFBeWJDLENBemI4QywyQkFBaUIsR0F5Yi9EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgU3ltYm9sQmFzZSBmcm9tIFwiLi9TeW1ib2xCYXNlXCI7XG5pbXBvcnQgSVdhaXRpbmdSZXN1bHRzU3RyYXRlZ3kgZnJvbSBcIi4uL0lXYWl0aW5nUmVzdWx0c1N0cmF0ZWd5XCI7XG5pbXBvcnQgeyBTeW1ib2xCb2FyZENvbnN0IH0gZnJvbSBcIi4vU3ltYm9sQm9hcmRDb25zdFwiO1xuaW1wb3J0IFJlZWxCYXNlIGZyb20gXCIuL1JlZWxCYXNlXCI7XG5pbXBvcnQgeyBNb2dhZmFTbG90cyB9IGZyb20gXCIuLi9Nb2dhZmFTbG90c1wiO1xuaW1wb3J0IHsgU3ltYm9sQm9hcmRTdGF0dXMgfSBmcm9tIFwiLi9TeW1ib2xCb2FyZFN0YXR1c1wiO1xuXG5pbXBvcnQgRmd1aUNvbXBvbmVudEJhc2UgZnJvbSBcIi4uLy4uLy4uL2ZhaXJ5Z3VpLWNvbXBvbmVudC9saWIvRmd1aUNvbXBvbmVudEJhc2VcIjtcbmltcG9ydCBTcGluUmVzdWx0Q2VsbCBmcm9tIFwiLi4vLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNDZWxsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENlbGxCYXNlIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2UgaW1wbGVtZW50cyBNb2dhZmFTbG90cyB7XG4gICAgcHJpdmF0ZSBfbW9nYWZhSWQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDlhbPljaHnvJbnoIFcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zdGFnZUNvZGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmiYDlsZ7moLzlrZBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9yZWVsOiBSZWVsQmFzZTtcbiAgICAvKipcbiAgICAgKiDojrflj5blhbPljaHnvJbnoIFcbiAgICAgKi9cbiAgICBnZXQgc3RhZ2VDb2RlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFnZUNvZGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoee8lueggVxuICAgICAqL1xuICAgIHNldCBzdGFnZUNvZGUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zdGFnZUNvZGUgPSB2YWx1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGVzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVzc2VzW2ldLnN0YWdlQ29kZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPluWIl1xuICAgICAqL1xuICAgIGdldCByZWVsKCk6IFJlZWxCYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZWw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiuvue9ruWIl1xuICAgICAqL1xuICAgIHNldCByZWVsKHZhbHVlOiBSZWVsQmFzZSkge1xuICAgICAgICB0aGlzLl9yZWVsID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJvYXJkIHN0YXR1cyBvZiBzeW1ib2wgYmFzZVxuICAgICAqIOaji+ebmOeKtuaAgVxuICAgICAqL1xuICAgIHByaXZhdGUgX2JvYXJkU3RhdHVzOiBTeW1ib2xCb2FyZFN0YXR1cztcbiAgICBnZXQgYm9hcmRTdGF0dXMoKTogU3ltYm9sQm9hcmRTdGF0dXMge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9hcmRTdGF0dXM7XG4gICAgfVxuICAgIHNldCBib2FyZFN0YXR1cyh2YWx1ZTogU3ltYm9sQm9hcmRTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5fYm9hcmRTdGF0dXMgPSB2YWx1ZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGVzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVzc2VzW2ldLmJvYXJkU3RhdHVzID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0dXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGF0dXMgIG9mIHN5bWJvbCBiYXNlXG4gICAgICog5qOL5a2Q54q25oCBXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc3RhdHVzOiBTeW1ib2xCb2FyZFN0YXR1cztcbiAgICBnZXQgc3RhdHVzKCk6IFN5bWJvbEJvYXJkU3RhdHVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgICB9XG4gICAgc2V0IHN0YXR1cyh2YWx1ZTogU3ltYm9sQm9hcmRTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gdmFsdWU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2hlc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fY2hlc3Nlc1tpXS5zdGF0dXMgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IG5vdGhpbmdDb2RlKCk6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IG1heENvZGUoKTogbnVtYmVyO1xuXG4gICAgcHVibGljIGFic3RyYWN0IGdldCByZXN1bHRDaGVzcygpOiBTeW1ib2xCYXNlO1xuICAgIHByb3RlY3RlZCBnZXQgYXNzZXRzQ29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcHJpdmF0ZSBfbWFzazogZmd1aS5HT2JqZWN0O1xuICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaXNGaW5hbDogYm9vbGVhbjtcbiAgICBwcm90ZWN0ZWQgX2NoZXNzZXM6IFN5bWJvbEJhc2VbXSA9IFtdO1xuICAgIHByaXZhdGUgX2ZpbmFsQ29kZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2ZpbmFsQXNzZXRzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbW9ja0NvZGVzOiBudW1iZXJbXTtcbiAgICBwcml2YXRlIF9tb2NrQ29kZVJlcGxhY2VkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9zdG9wcGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIF9tb3ZlRW5kOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0ZpcnN0TW92ZTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHJpdmF0ZSBfaXNIb2xkV2luOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBob2xkV2luU2hvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgZml4ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG5leHRGaXhlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBhc3NldHM6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgYXNzZXRzQ29tcG9uZW50OiBmZ3VpLkdUZXh0RmllbGQ7XG4gICAgcHJpdmF0ZSBzcGVjaWFsRWZmZWN0U2hvd2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX211c3RCZUZpeGVkOiBib29sZWFuO1xuICAgIHB1YmxpYyBzZXQgY29kZShjb2RlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGNvZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID49IFN5bWJvbEJvYXJkQ29uc3QuRklOQUxfQ09ERV9PRkZTRVQpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRmluYWwgPSB0cnVlO1xuICAgICAgICAgICAgY29kZSA9IGNvZGUgLSBTeW1ib2xCb2FyZENvbnN0LkZJTkFMX0NPREVfT0ZGU0VUO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImZpbmFsIGNvZGU9PT09XCIsY29kZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRmluYWwgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3VsdENoZXNzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLmZpbmFsQ29kZSA9IGNvZGU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29kZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRDaGVzcy5jb2RlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGluZGV4KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgICB9XG4gICAgcHVibGljIHNldCBpbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2luZGV4ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNGaW5hbCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRmluYWw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZmluYWxDb2RlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maW5hbENvZGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZmluYWxDb2RlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZmluYWxDb2RlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZmluYWxBc3NldHMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbmFsQXNzZXRzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGZpbmFsQXNzZXRzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZmluYWxBc3NldHMgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZXN1bHRDaGVzcy5hc3NldHMgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBtb2NrQ29kZXMoKTogbnVtYmVyW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9ja0NvZGVzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG1vY2tDb2Rlcyh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fbW9ja0NvZGVzID0gdmFsdWU7XG4gICAgICAgIGlmICghdGhpcy5fbW9ja0NvZGVzKSB7XG4gICAgICAgICAgICB0aGlzLl9tb2NrQ29kZXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzSG9sZFdpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSG9sZFdpbjtcbiAgICB9XG4gICAgcHVibGljIHNldCBpc0hvbGRXaW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNIb2xkV2luID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbW9nYWZhSWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZ2FmYUlkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG1vZ2FmYUlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbW9nYWZhSWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBzcGluUmVzdWx0KHZhbHVlOiBTcGluUmVzdWx0Q2VsbCkge1xuICAgICAgICB0aGlzLmZpbmFsQ29kZSA9IHZhbHVlLmNvZGU7XG4gICAgICAgIHRoaXMuYXNzZXRzID0gdmFsdWUuYXNzZXRzO1xuICAgICAgICB0aGlzLm5leHRGaXhlZCA9IHZhbHVlLmZpeGVkO1xuICAgICAgICB0aGlzLmlzSG9sZFdpbiA9IHZhbHVlLmlzSG9sZFdpbjtcbiAgICB9XG4gICAgcHVibGljIGdldCBtdXN0QmVGaXhlZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX211c3RCZUZpeGVkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG11c3RCZUZpeGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX211c3RCZUZpeGVkID0gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgdGhlRmluYWxCb3R0b21TeW1ib2xZKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBnZXQgbW92ZUVuZCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmVFbmQ7XG4gICAgfVxuICAgIHB1YmxpYyBzdG9wU2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXN1bHRDaGVzcy5zdG9wU2hvdygpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhcnRNb3ZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc3VsdENoZXNzLnN0YXJ0TW92ZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmm7/mjaLlgYflhpLmo4vlrZBcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb2RlIOabv+aNoueahOaji+WtkO+8jOWPr+S7peS4jeS8oFxuICAgICAqL1xuICAgIHB1YmxpYyByZXBsYWNlTW9ja0NvZGVJbnRlcm5hbChjb2RlPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmIChjb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZU1vY2tDb2RlKGNvZGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5tb2NrQ29kZXMgfHwgdGhpcy5tb2NrQ29kZXMubGVuZ3RoID09PSAwIHx8ICF0aGlzLmlzRmluYWwpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYOayoeacieWPr+abv+aNoueahOaji+WtkOaIluiAheeOsOWcqOS4jeiDveaNouaji+WtkGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcGxhY2VDb2RlID0gdGhpcy5tb2NrQ29kZXMucG9wKCk7XG4gICAgICAgIHRoaXMucmVwbGFjZU1vY2tDb2RlKHJlcGxhY2VDb2RlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlcGxhY2VNb2NrQ29kZShyZXBsYWNlQ29kZTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVwbGFjZU1vY2tDb2RlU2ltcGxlKHJlcGxhY2VDb2RlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSByZXBsYWNlTW9ja0NvZGVTaW1wbGUocmVwbGFjZUNvZGU6IG51bWJlcikge1xuICAgICAgICBjYy5sb2coYOi/meaYr+m7mOiupOeahOaji+WtkOabv+aNouaWueazlWApO1xuICAgICAgICB0aGlzLnJlc3VsdENoZXNzLmNvZGUgPSByZXBsYWNlQ29kZTtcbiAgICAgICAgdGhpcy5ub3RpZnlNb2NrQ29kZVJlcGxhY2VkKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBub3RpZnlNb2NrQ29kZVJlcGxhY2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9tb2NrQ29kZVJlcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gKHRoaXMucGFyZW50IGFzIHVua25vd24pIGFzIFJlZWxCYXNlO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQucmVjZWl2ZU1vY2tDb2RlUmVwbGFjZWQocGFyZW50LmluZGV4LCB0aGlzLmluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG1vY2tDb2RlUmVwbGFjZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2NrQ29kZVJlcGxhY2VkO1xuICAgIH1cbiAgICBwcml2YXRlIF93YWl0aW5nUmVzdWx0c1N0cmF0ZWd5OiBJV2FpdGluZ1Jlc3VsdHNTdHJhdGVneTtcblxuICAgIHB1YmxpYyBnZXQgd2FpdGluZ1Jlc3VsdHNTdHJhdGVneSgpOiBJV2FpdGluZ1Jlc3VsdHNTdHJhdGVneSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93YWl0aW5nUmVzdWx0c1N0cmF0ZWd5O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHdhaXRpbmdSZXN1bHRzU3RyYXRlZ3kod2FpdGluZ1Jlc3VsdHNTdHJhdGVneTogSVdhaXRpbmdSZXN1bHRzU3RyYXRlZ3kpIHtcbiAgICAgICAgdGhpcy5fd2FpdGluZ1Jlc3VsdHNTdHJhdGVneSA9IHdhaXRpbmdSZXN1bHRzU3RyYXRlZ3k7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLl9tYXNrID0gdGhpcy5mZ3VpQ29tcG9uZW50Lm1hc2s7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5zZXRNYXNrKG51bGwsIGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuYXNzZXRzQ29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5hc3NldHNDb21wb25lbnQgPSB0aGlzLmdldENoaWxkKHRoaXMuYXNzZXRzQ29tcG9uZW50TmFtZSkuYXNUZXh0RmllbGQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGFkZEZndWlDb21wb25lbnQ8VCBleHRlbmRzIEZndWlDb21wb25lbnRCYXNlPih0eXBlOiB7IG5ldygpOiBUIH0sIGNoYW5nZVNpemU6IGJvb2xlYW4gPSB0cnVlKTogVCB7XG4gICAgICAgIGxldCBjaGlsZCA9IHN1cGVyLmFkZEZndWlDb21wb25lbnQodHlwZSwgY2hhbmdlU2l6ZSk7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIFN5bWJvbEJhc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IChjaGlsZCBhcyB1bmtub3duKSBhcyBTeW1ib2xCYXNlO1xuICAgICAgICAgICAgc3ltYm9sLnN0YWdlQ29kZSA9IHRoaXMuc3RhZ2VDb2RlO1xuICAgICAgICAgICAgc3ltYm9sLmNlbGwgPSB0aGlzO1xuICAgICAgICAgICAgc3ltYm9sLmFzc2V0cyA9IHRoaXMuYXNzZXRzO1xuICAgICAgICAgICAgdGhpcy5fY2hlc3Nlcy5wdXNoKHN5bWJvbCk7XG4gICAgICAgICAgICBzeW1ib2wuaW5kZXggPSB0aGlzLl9jaGVzc2VzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgICBwcml2YXRlIGZpcnN0TW92ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGVzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NoZXNzZXNbaV0uZmd1aUNvbXBvbmVudC52aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlc3Nlc1tpXS5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5zZXRNYXNrKHRoaXMuX21hc2ssIGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIG1vdmVZKHN0ZXA6IG51bWJlciwgY29kZT86IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5fbW92ZUVuZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID49IFN5bWJvbEJvYXJkQ29uc3QuRklOQUxfQ09ERV9PRkZTRVQpIHtcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2hlc3NlcyA9IHRoaXMuX2NoZXNzZXMuc29ydCgoYzEsIGMyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYzEuZmd1aVkgLSBjMi5mZ3VpWTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdGhlVG9wQ2hlc3MgPSB0aGlzLl9jaGVzc2VzWzBdO1xuICAgICAgICBjb25zdCB0aGVCb3R0b21DaGVzcyA9IHRoaXMuX2NoZXNzZXNbdGhpcy5fY2hlc3Nlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgICAgICAgIGlmIChjb2RlID49IFN5bWJvbEJvYXJkQ29uc3QuRklOQUxfQ09ERV9PRkZTRVQpIHtcbiAgICAgICAgICAgICAgICB0aGVCb3R0b21DaGVzcy5jb2RlID0gY29kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRmlyc3RNb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdE1vdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3BlY2lhbEVmZmVjdFNob3dpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWNpYWxFZmZlY3RTaG93aW5nID0gdGhpcy5zcGVjaWFsRWZmZWN0U2hvd0luU3BpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNGaW5hbCkge1xuICAgICAgICAgICAgaWYgKHRoZUJvdHRvbUNoZXNzLmZndWlZICsgc3RlcCA+PSB0aGlzLnRoZUZpbmFsQm90dG9tU3ltYm9sWSkge1xuICAgICAgICAgICAgICAgIHN0ZXAgPSB0aGlzLnRoZUZpbmFsQm90dG9tU3ltYm9sWSAtIHRoZUJvdHRvbUNoZXNzLmZndWlZO1xuICAgICAgICAgICAgICAgIHRoaXMuX21vdmVFbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vaWYgKHRoZVRvcENoZXNzLmlzRmluYWwpIHtcbiAgICAgICAgICAgICAgICB0aGVCb3R0b21DaGVzcy5jb2RlID0gdGhpcy5maW5hbENvZGU7XG4gICAgICAgICAgICAgICAgLy99XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgICAgICAgIHN0ZXAgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fY2hlc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fY2hlc3Nlc1tpXS5mZ3VpWSArPSBzdGVwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9tb3ZlRW5kKSB7XG4gICAgICAgICAgICB0aGVUb3BDaGVzcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3BlY2lhbEVmZmVjdE9mZkluU3BpbigpO1xuICAgICAgICAgICAgdGhpcy5zcGVjaWFsRWZmZWN0U2hvd2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSBTeW1ib2xCb2FyZFN0YXR1cy5TdG9wcGVkO1xuICAgICAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnNldE1hc2sobnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYXNzZXRzQ29tcG9uZW50ICYmIHRoaXMuZmluYWxBc3NldHMgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3NldHNDb21wb25lbnQudGV4dCA9IHRoaXMuYXNzZXRzRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRzQ29tcG9uZW50LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhlQm90dG9tQ2hlc3MuYXNzZXRzID0gdGhpcy5maW5hbEFzc2V0cztcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXhlZCA9IHRoaXMubmV4dEZpeGVkO1xuICAgICAgICAgICAgdGhpcy5uZXh0Rml4ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaG9sZFdpbk9mZigpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlDZWxsU3RvcHBlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZpeGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXNlQ29kZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGVCb3R0b21DaGVzcy5mZ3VpWSA+PSB0aGlzLmZndWlIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0aGVCb3R0b21DaGVzcy5mZ3VpWSA9IHRoZVRvcENoZXNzLmZndWlZIC0gdGhlVG9wQ2hlc3MuZmd1aUhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoY29kZSB8fCBjb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlQ29kZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoZUJvdHRvbUNoZXNzLmNvZGUgPSBjb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcCA8IDApIHtcbiAgICAgICAgICAgIGlmICh0aGVUb3BDaGVzcy5mZ3VpWSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhlVG9wQ2hlc3MuZmd1aVkgPSB0aGVCb3R0b21DaGVzcy5mZ3VpWSArIHRoZUJvdHRvbUNoZXNzLmZndWlIZWlnaHQ7XG4gICAgICAgICAgICAgICAgaWYgKGNvZGUgfHwgY29kZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZUNvZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGVUb3BDaGVzcy5jb2RlID0gY29kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZUNvZGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZXNzZXMgPSB0aGlzLl9jaGVzc2VzLnNvcnQoKGMxLCBjMikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBjMS5mZ3VpWSAtIGMyLmZndWlZO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZUNvZGU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBhc3NldHNEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmFzc2V0cyA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2V0cy50b1N0cmluZygpO1xuICAgIH1cbiAgICBwdWJsaWMgcHJpemVTaG93KHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXN1bHRDaGVzcy5zdGFydFByaXplU2hvdyhwb3NpdGlvbik7XG4gICAgfVxuICAgIHB1YmxpYyByZWNlaXZlUHJpemVTaG93Q29tcGxldGVkKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gKHRoaXMucGFyZW50IGFzIGFueSkgYXMgUmVlbEJhc2U7XG4gICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZWNlaXZlUHJpemVTaG93Q29tcGxldGVkKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnlDZWxsU3RvcHBlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9wU2hvdygpO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSAodGhpcy5wYXJlbnQgYXMgYW55KSBhcyBSZWVsQmFzZTtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgcGFyZW50LnJlY2VpdmVDZWxsU3RvcHBlZCh0aGlzLl9pbmRleCk7XG4gICAgICAgIH0gLy9cbiAgICB9XG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGVzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGVzc2VzW2ldLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGVjaWFsRWZmZWN0U2hvd2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0ZpbmFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21vY2tDb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLl9tb2NrQ29kZVJlcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbW92ZUVuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRmlyc3RNb3ZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ob2xkV2luU2hvd2luZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmFzc2V0c0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5hc3NldHNDb21wb25lbnQudGV4dCA9IHRoaXMuYXNzZXRzRGlzcGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vI3JlZ2lvbiDorr7nva7mjqfliLblgLxcbiAgICBwdWJsaWMgc2V0U3ltYm9sQ29udHJvbGxlclByb3BlcnR5KGNvbnRyb2xsZXJOYW1lOiBzdHJpbmcsIGNvZGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnJlc3VsdENoZXNzLnNldENvbnRyb2xsZXJQcm9wZXJ0eShjb250cm9sbGVyTmFtZSwgY29kZSk7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuICAgIHB1YmxpYyBwbGF5U3BpbmVCeUNvbmZpZyhjb25maWdOYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXN1bHRDaGVzcy5wbGF5U3BpbmVCeUNvbmZpZyhjb25maWdOYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi9rOWKqOi/h+eoi+S4reagvOWtkOeJueauiuaViOaenOWxleekuu+8jOa4uOaIj+WFs+WNoemHjei9veWunueOsFxuICAgICAqIOavlOWmguawtOaenDc3N++8jOWcqOi/memHjOWunueOsHJlc3BpbuS4reaZrumAmui9rOWKqOeahOeJueaViO+8iOmcgOimgeWIpOaWreWPquWcqHJlc3BpbuS4reaJjeWxleekuui/meS4queJueaViO+8iVxuICAgICAqIEByZXR1cm5zIOWmguaenOS4unRydWXooajnpLrmlYjmnpznlJ/mlYhcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3BlY2lhbEVmZmVjdFNob3dJblNwaW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6L2s5Yqo6L+H56iL5Lit55qE5qC85a2Q54m55q6K5pWI5p6c5YGc5q2i77yM5ri45oiP5YWz5Y2h6YeN6L295a6e546wXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNwZWNpYWxFZmZlY3RPZmZJblNwaW4oKTogdm9pZCB7IH1cblxuICAgIHB1YmxpYyBob2xkV2luKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuaG9sZFdpblNob3dpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaG9sZFdpblNob3dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ob2xkV2luU2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyB1bmhvbGRXaW4oKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaG9sZFdpbk9mZigpO1xuICAgICAgICB0aGlzLmhvbGRXaW5TaG93aW5nID0gZmFsc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWNleagvOagvOWtkGhvbGRXaW7lsZXnpLrvvIzmuLjmiI/lhbPljaHph43ovb3lrp7njrBcbiAgICAgKiDmr5TlpoLmsLTmnpw3NzfvvIzlnKjov5nph4zlrp7njrBob2xkV2lu54m55pWI77yM5Zyo5pmu6YCa6L2s5ZKMcmVzcGlu5Lit6ZyA6KaB5Yy65YiG77yIaG9sZFdpbueJueaViOS4jeS4gOagt++8iVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBob2xkV2luU2hvdygpOiB2b2lkIHsgfVxuICAgIC8qKlxuICAgICAqIOWNleagvOagvOWtkGhvbGRXaW7lsZXnpLrlhbPpl63vvIzmuLjmiI/lhbPljaHph43ovb3lrp7njrBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaG9sZFdpbk9mZigpOiB2b2lkIHsgfVxuICAgIHByaXplQ2hpcENlbGxTZXR0bGUocG9zaXRpb246IG51bWJlciwgc3ltYm9sQ29kZTogbnVtYmVyLCBhc3NldHM6IG51bWJlciwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnlTaG93RG91YmxlQXNzZXRzKCk6IHZvaWQgeyB9XG4gICAgZG91YmxlQ2hlc3NTaG93KCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NoZXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZXNzZXNbaV0uZG91YmxlQ2hlc3NTaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdEFzc2V0U2hvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYXNzZXRzQ29tcG9uZW50ICYmIHRoaXMuZmluYWxBc3NldHMgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmFzc2V0c0NvbXBvbmVudC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYXNzZXRzQ29tcG9uZW50LnRleHQgPSB0aGlzLmZpbmFsQXNzZXRzLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGZpeGVkQ2VsbFNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVzdWx0Q2hlc3MuZml4ZWRDZWxsU2hvdygpO1xuICAgIH1cbiAgICBwdWJsaWMgZml4ZWRDZWxsSGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZXN1bHRDaGVzcy5maXhlZENlbGxIaWRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFzc2V0QWZ0ZXJDaGVzc2JvYXJkU3RvcHBlZCgpOiB2b2lkIHsgfVxufVxuIl19
"use strict";
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
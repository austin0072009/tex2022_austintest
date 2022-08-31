
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/slots/lib/BottomBar/BottomBarBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3813a+/JFJI3I77AkOFc8Fs', 'BottomBarBase');
// Script/modules/@mogafa/slots/lib/BottomBar/BottomBarBase.ts

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
var BetChangedMessage_1 = require("./BetChangedMessage");
var SpinType_1 = require("../SpinType");
var SlotGameStageStatus_1 = require("../GameStage/SlotGameStageStatus");
var BottomBarSpinStaus_1 = require("./BottomBarSpinStaus");
var SpinStatusStrategyNormal_1 = require("../SpinStatusStrategyNormal");
var SlotGameStageBase_1 = require("../GameStage/SlotGameStageBase");
var FguiFullScreenBase_1 = require("../../../fairygui-component/lib/FguiFullScreenBase");
var ButtonLongTouch_1 = require("../../../fairygui-component/lib/ButtonLongTouch");
var Utils_1 = require("../../../utils/lib/Utils");
var AppConst_1 = require("../../../../@slotsmaster/ui-common/lib/AppConst");
var SoundMgr_1 = require("../../../utils/lib/SoundMgr");
var SpinResultsGameMode_1 = require("../../../../spin-result/SpinResultsGameMode");
var BottomBarEvent = {
    SPIN_CLICK: "BottomBarSpinClick",
    CARD_CLICK: "BottomBarCardClick",
    CHALLENGE_CLICK: "BottomBarChallengeClick",
    AUTO_SPIN: "BottomBarAutoSpin",
    FAST_CLICK: "BottomBarFastClick",
    BET_CHANGED: "BottomBarBetChanged",
    COIN_CHANGED: "BottombarCoinChanged",
};
var BottomBarBase = /** @class */ (function (_super) {
    __extends(BottomBarBase, _super);
    function BottomBarBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //#endregion 组件名称
        _this._spinType = SpinType_1.SpinType.Spin;
        _this._nextGameMode = SpinResultsGameMode_1.SpinResultsGameMode.Normal; //#region 组件
        _this._isFast = false;
        _this._bets = [];
        _this._bet = 0;
        _this._prevWinCoins = 0;
        _this._coinsChangeTime = 1;
        _this._gameStatus = SlotGameStageStatus_1.SlotGameStageStatus.Ready;
        _this._spinStatusStrategy = new SpinStatusStrategyNormal_1.default();
        _this._buttonLongTouch = null;
        _this._totalAutoSpinTimes = 0;
        _this._originTimes = 0;
        _this._totalLineCount = 0;
        _this._freeModeFinished = false;
        _this._isAutoSpin = false;
        _this.isJackpot = false;
        //* 金币增长动画所需时间
        _this._coinIncreaseTime = 1.5;
        _this._autoTimes = 1;
        return _this;
    }
    Object.defineProperty(BottomBarBase.prototype, "challengeButtonName", {
        //#region 组件名称
        get: function () {
            return "challenge";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "cardButtonName", {
        get: function () {
            return "card";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "maxBetButtonName", {
        get: function () {
            return "maxBet";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "fastButtonName", {
        get: function () {
            return "fast";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "spinButtonName", {
        get: function () {
            return "spin";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "autoSpinComponent", {
        get: function () {
            return "autoSpin";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "autoSpinButtonName", {
        get: function () {
            return "spin.autoSpin.auto";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "spin100ButtonName", {
        get: function () {
            return "spin.autoSpin.spin100";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "spin50ButtonName", {
        get: function () {
            return "spin.autoSpin.spin50";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "spin15ButtonName", {
        get: function () {
            return "spin.autoSpin.spin15";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "freeSpinCountName", {
        get: function () {
            return "spin.freeSpinsCount";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "autoSpinCountName", {
        get: function () {
            return "spin.autoStopCount";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "infinityName", {
        get: function () {
            return "spin.infinity";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "winCoinsName", {
        get: function () {
            return "winCoins";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "coinsName", {
        get: function () {
            return "winCoins.coins";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "twinkleName", {
        get: function () {
            return "winCoins.twinkle";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "totalBetName", {
        get: function () {
            return "totalBet";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "betName", {
        get: function () {
            return "totalBet.bet";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "increaseBetName", {
        get: function () {
            return "totalBet.increaseBet";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "decreaseBetName", {
        get: function () {
            return "totalBet.decreaseBet";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "spinStatusControllerName", {
        get: function () {
            return "spin.spinStatus";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "spinUserGold", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "exitButtonName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "helpButtonName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "SoundButtonName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "isAutoSpin", {
        get: function () {
            return this._isAutoSpin;
        },
        set: function (value) {
            this._isAutoSpin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "spinType", {
        //#region 属性
        get: function () {
            return this._spinType;
        },
        set: function (value) {
            this._spinType = value;
            switch (value) {
                case SpinType_1.SpinType.AutoSpin:
                    this.setControllerProperty(this.spinStatusControllerName, 2);
                    break;
                case SpinType_1.SpinType.FreeSpin:
                    this.setControllerProperty(this.spinStatusControllerName, 3);
                    break;
                case SpinType_1.SpinType.Respin:
                    this.setControllerProperty(this.spinStatusControllerName, 1);
                    break;
                case SpinType_1.SpinType.Spin:
                    this.setControllerProperty(this.spinStatusControllerName, 0);
                    break;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "totalLineCount", {
        get: function () {
            return this._totalLineCount;
        },
        set: function (data) {
            this._totalLineCount = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "coinsChangeTime", {
        get: function () {
            return this._coinsChangeTime;
        },
        set: function (changeTime) {
            this._coinsChangeTime = changeTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "winCoins", {
        get: function () {
            return this._winCoins;
        },
        set: function (value) {
            this._winCoins = value;
            //* respin中不对金币进行改变
            if (SlotGameStageBase_1.default.spinResults && SlotGameStageBase_1.default.spinResults.gameMode === SpinResultsGameMode_1.SpinResultsGameMode.Respin) {
                return;
            }
            if (value > 0) {
                this.winCoin.play(this._prevWinCoins, value, this.coinsChangeTime, this.coinPlayCallback.bind(this));
                this.emitCoinChanged();
            }
            else {
                this.getChild(this.coinsName).asTextField.text = Utils_1.Utils.formatNumberToInt(0, 0);
            }
            //* 当前游戏模式处于特殊模式下记录上一次的金币数，方便在展示金币增长时不用从0开始
            if (this.currentGameMode !== SpinResultsGameMode_1.SpinResultsGameMode.Normal) {
                this._prevWinCoins = value;
            }
            else {
                this._prevWinCoins = 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "coins", {
        get: function () {
            return this._coins;
        },
        set: function (value) {
            if (value != null && this._coins != value) {
                this._coins = value;
                if (this._coinsChangeTime) {
                    this.coinIncreaseAnime(value.toString());
                }
                //* 若没有增长时间，则直接赋值
                else {
                    this._coinLabel.text = Utils_1.Utils.formatNumberToInt(value, 0);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    BottomBarBase.prototype.coinPlayCallback = function () {
        this.offCoinChanged();
    };
    Object.defineProperty(BottomBarBase.prototype, "freeSpinCount", {
        get: function () {
            return this._freeSpinCount;
        },
        set: function (value) {
            this._freeSpinCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "autoSpinCount", {
        get: function () {
            return this._autoSpinCount;
        },
        set: function (value) {
            this._autoSpinCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "game", {
        get: function () {
            return this._game;
        },
        set: function (value) {
            if (this._game) {
                this._game.offStatusChanged(this.statusChanged, this);
            }
            this._game = value;
            if (this._game) {
                this._game.onStatusChanged(this.statusChanged, this);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "isFast", {
        get: function () {
            return this._isFast;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "isFastInternal", {
        set: function (value) {
            this._isFast = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "isMinBet", {
        get: function () {
            if (!this._bets || this._bets.length == 0) {
                return true;
            }
            return this._bet == this._bets[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "isMaxBet", {
        get: function () {
            if (!this._bets || this._bets.length == 0) {
                return true;
            }
            return this._bet == this._bets[this._bets.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "gameStatus", {
        get: function () {
            return this._gameStatus;
        },
        set: function (value) {
            this._gameStatus = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "bet", {
        get: function () {
            return this._bet;
        },
        set: function (value) {
            this._bet = value;
            this.betNumber.text = Utils_1.Utils.numToCountingNnit(this.bet);
            if (this._totalLineCount) {
                this.betNumber.text = Utils_1.Utils.numToCountingNnit(this.bet * this._totalLineCount);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "bets", {
        get: function () {
            if (!this._bets) {
                this._bets = [];
            }
            return this._bets;
        },
        set: function (bets) {
            var _this = this;
            this._bets = bets;
            if (AppConst_1.AppConst.enterRoomData && AppConst_1.AppConst.enterRoomData.betScores) {
                this._bets = AppConst_1.AppConst.enterRoomData.betScores;
                this._totalLineCount = AppConst_1.AppConst.enterRoomData.totalLineCount > 50 ? 50 : AppConst_1.AppConst.enterRoomData.totalLineCount;
            }
            if (!this._bets) {
                this._bets = [];
                this._bet = 0;
                this.node.dispatchEvent(new BetChangedMessage_1.default(this._bet, this.isMinBet, this.isMaxBet));
                return;
            }
            this._bets = this._bets.sort(function (a, b) { return a - b; });
            var bet = this._bets.find(function (b) { return _this._bet == b; });
            if (!bet) {
                this.bet = this._bets[0];
                this.changeBetButtonsEnable(true, false);
                this.node.dispatchEvent(new BetChangedMessage_1.default(this._bet, this.isMinBet, this.isMaxBet));
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "nextGameMode", {
        get: function () {
            return this._nextGameMode;
        },
        set: function (value) {
            this._nextGameMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "currentGameMode", {
        get: function () {
            return this._currentGameType;
        },
        set: function (value) {
            this._currentGameType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "freeGameTrigger", {
        get: function () {
            return this._freeGameTrigger;
        },
        set: function (value) {
            this._freeGameTrigger = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "spinStatusStrategy", {
        get: function () {
            return this._spinStatusStrategy;
        },
        set: function (value) {
            this._spinStatusStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "holdUpTime", {
        /**
         * 自动spin时的延时时间，可在子类复写
         */
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BottomBarBase.prototype, "freeModeFinished", {
        get: function () {
            return this._freeModeFinished;
        },
        set: function (value) {
            this._freeModeFinished = value;
        },
        enumerable: false,
        configurable: true
    });
    //#endregion
    BottomBarBase.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.bottomBar = this.fguiComponent;
        var component;
        // if (this.challengeButtonName) {
        //     component = this.getChild(this.challengeButtonName);
        //     if (component) {
        //         this.challengeButton = component.asButton;
        //         this.challengeButton.onClick(this.onChallengeClick.bind(this));
        //     } else {
        //         cc.error(`成就按钮组件${this.challengeButtonName}不存在`);
        //     }
        // }
        if (this.cardButtonName) {
            component = this.getChild(this.cardButtonName);
            if (component) {
                this.cardButton = component.asButton;
                this.cardButton.onClick(this.onCardClick.bind(this));
            }
            else {
                cc.error("\u5361\u7EC4\u6309\u94AE\u7EC4\u4EF6" + this.cardButtonName + "\u4E0D\u5B58\u5728");
            }
        }
        if (this.maxBetButtonName) {
            component = this.getChild(this.maxBetButtonName);
            if (component) {
                this.maxBetButton = component.asButton;
                this.maxBetButton.onClick(this.onMaxBetClick.bind(this));
            }
            else {
                cc.error("\u6700\u5927\u4E0B\u6CE8\u6309\u94AE\u7EC4\u4EF6" + this.maxBetButtonName + "\u4E0D\u5B58\u5728");
            }
        }
        if (this.fastButtonName) {
            this.fastButton = this.getChild(this.fastButtonName).asButton;
            this.fastButton.onClick(this.onFastClickInternal.bind(this));
        }
        if (this.spinButtonName) {
            this.spinButton = this.getChild(this.spinButtonName).asButton;
            this.spinButton.node.on("touch-long", this.onSpinLongTouchInternal.bind(this));
            this.spinButton.node.on("touch-short", this.onSpinClickInternal.bind(this));
            this.spinButton.node.on("touch-double", this.onSpinDoubleTouchInternal.bind(this));
            this._buttonLongTouch = this.addFguiComponent(ButtonLongTouch_1.ButtonLongTouch);
        }
        if (this.autoSpinButtonName) {
            this.autoSpinButton = this.getChild(this.autoSpinButtonName).asButton;
            this.autoSpinButton.onClick(this.onAutoSpinClickInternal.bind(this));
        }
        if (this.spin100ButtonName) {
            this.spin100Button = this.getChild(this.spin100ButtonName).asButton;
            this.spin100Button.onClick(this.onSpin100ClickInternal.bind(this));
        }
        if (this.spin50ButtonName) {
            this.spin50Button = this.getChild(this.spin50ButtonName).asButton;
            this.spin50Button.onClick(this.onSpin50ClickInternal.bind(this));
        }
        if (this.spin15ButtonName) {
            this.spin15Button = this.getChild(this.spin15ButtonName).asButton;
            this.spin15Button.onClick(this.onSpin15ClickInternal.bind(this));
        }
        if (this.betName) {
            this.betNumber = this.getChild(this.betName).asTextField;
        }
        if (this.increaseBetName) {
            this.increaseBetButton = this.getChild(this.increaseBetName).asButton;
            this.increaseBetButton.onClick(this.onIncreaseBetClick.bind(this));
        }
        if (this.decreaseBetName) {
            this.decreaseBetButton = this.getChild(this.decreaseBetName).asButton;
            this.decreaseBetButton.onClick(this.onDecreaseBetClick.bind(this));
        }
        if (this.twinkleName) {
            this.twinkle = this.getChild(this.twinkleName).asLoader;
            this.twinkle.visible = false;
        }
        if (this.coinsName) {
            this.winCoin = this.getChild(this.coinsName).asMogafaNumberField();
        }
        if (this.autoSpinCountName) {
            component = this.getChild(this.autoSpinCountName);
            if (component) {
                this.autoSpinCountField = component.asTextField;
            }
            else {
                cc.error("auto spin \u8BA1\u6570\u7EC4\u4EF6" + this.autoSpinCountName + "\u4E0D\u5B58\u5728");
            }
        }
        if (this.infinityName) {
            component = this.getChild(this.infinityName);
            if (component) {
                this.infinity = component.asGraph;
            }
            else {
                cc.error("auto spin \u8BA1\u6570\u7EC4\u4EF6" + this.infinityName + "\u4E0D\u5B58\u5728");
            }
        }
        if (this.freeSpinCountName) {
            component = this.getChild(this.freeSpinCountName);
            if (component) {
                this.freeSpinCountField = component.asTextField;
            }
            else {
                cc.error("free spin \u8BA1\u6570\u7EC4\u4EF6" + this.freeSpinCountName + "\u4E0D\u5B58\u5728");
            }
        }
        if (this.spinUserGold) {
            component = this.getChild(this.spinUserGold);
            if (component) {
                this._coinLabel = component.asTextField;
                this._coinField = this._coinLabel.asMogafaNumberField();
            }
            else {
                cc.error("free spin \u8BA1\u6570\u7EC4\u4EF6" + this.spinUserGold + "\u4E0D\u5B58\u5728");
            }
        }
        if (this.exitButtonName) {
            component = this.getChild(this.exitButtonName);
            if (component) {
                this.ExitButton = component.asButton;
                this.ExitButton.onClick(this.onExitClick.bind(this));
            }
            else {
                cc.error("free spin \u8BA1\u6570\u7EC4\u4EF6" + this.spinUserGold + "\u4E0D\u5B58\u5728");
            }
        }
        if (this.helpButtonName) {
            component = this.getChild(this.helpButtonName);
            if (component) {
                this.HelpButton = component.asButton;
                this.HelpButton.onClick(this.onHelpClick.bind(this));
            }
            else {
                cc.error("free spin \u8BA1\u6570\u7EC4\u4EF6" + this.spinUserGold + "\u4E0D\u5B58\u5728");
            }
        }
        if (this.SoundButtonName) {
            component = this.getChild(this.SoundButtonName);
            if (component) {
                this.SoundButton = component.asButton;
                this.SoundButton.onClick(this.onSoundClick.bind(this));
            }
            else {
                cc.error("free spin \u8BA1\u6570\u7EC4\u4EF6" + this.spinUserGold + "\u4E0D\u5B58\u5728");
            }
        }
    };
    BottomBarBase.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
        if (this.spinButtonName) {
            this._buttonLongTouch.registerTouchLong(this.spinButton.node);
        }
        this.addAllButtonMusic(this.fguiComponent);
    };
    /**
     * 添加所有按钮的音效
     * @param fguiComponent
     */
    BottomBarBase.prototype.addAllButtonMusic = function (fguiComponent) {
        var _this = this;
        fguiComponent._children.map(function (item) {
            if (item.node.name === "GComponent") {
                _this.addAllButtonMusic(item.asCom);
            }
            if (item.node.name === "GButton") {
                item.node.on("touchstart", _this.onButtonClickMusic.bind(_this));
            }
        });
    };
    /**
     * 设置用户金币
     * @param userCoins
     * @param changeTime
     */
    BottomBarBase.prototype.setUserCoins = function (userCoins, changeTime) {
        if (changeTime === void 0) { changeTime = 1; }
        if (this.spinUserGold) {
            console.log("setUserCoins");
            this.coinsChangeTime = changeTime;
            this.coins = userCoins;
        }
    };
    BottomBarBase.prototype.addMaxBet = function (bet) {
        var bets = this._bets.concat();
        var isChange = false;
        if (bet.length > 0) {
            for (var i = 0; i < bet.length; i++) {
                for (var j = 0; j < bets.length; j++) {
                    if (bet[i] == bets[j]) {
                        cc.error("等级增加的抵注跟升级前存在相同抵注::", bet[i]);
                        break;
                    }
                    if (j == bets.length - 1 && bet[i] > bets[j]) {
                        this._bets.push(bet[i]);
                        isChange = true;
                    }
                }
            }
            if (isChange) {
                this.changeBetButtonsEnable(this.isMinBet, this.isMaxBet);
            }
            console.log("addMaxBetaddMaxBetaddMaxBet::", this._bets);
        }
    };
    BottomBarBase.prototype.increaseBet = function () {
        var _this = this;
        console.log("increaseBet");
        var index = this._bets.findIndex(function (b) { return b == _this._bet; });
        index++;
        if (index >= this._bets.length) {
            index = this._bets.length - 1;
        }
        this.bet = this._bets[index];
        this.betChangedInternal();
        return this._bet;
    };
    BottomBarBase.prototype.decreaseBet = function () {
        var _this = this;
        console.log("decreaseBet");
        var index = this._bets.findIndex(function (b) { return b == _this._bet; });
        index--;
        if (index < 0) {
            index = 0;
        }
        this.bet = this._bets[index];
        this.betChangedInternal();
        return this._bet;
    };
    BottomBarBase.prototype.maxBet = function () {
        var bet = this._bet;
        var betChanged = false;
        if (!this._bets || this._bets.length == 0) {
            bet = 0;
        }
        else {
            bet = this._bets[this._bets.length - 1];
        }
        if (bet != this._bet) {
            betChanged = true;
        }
        this.bet = bet;
        if (betChanged) {
            this.betChangedInternal();
        }
        return this._bet;
    };
    /**
     * 金币增长动画
     * @param coinLabel
     */
    BottomBarBase.prototype.coinIncreaseAnime = function (coinLabel) {
        var coins = 0;
        if (this._coinLabel.text == "") {
            coins = 0;
        }
        else {
            coins = Utils_1.Utils.strToNumber(this._coinLabel.text);
        }
        this._coinLabel.text = Utils_1.Utils.formatNumberToInt(coinLabel);
        this._coinField.play(coins, parseInt(coinLabel), this._coinIncreaseTime);
    };
    BottomBarBase.prototype.cancelCoinIncreaseAnime = function () {
        this._coinField.cancelPlay();
    };
    BottomBarBase.prototype.enableAllButtons = function () {
        if (this.cardButton) {
            this.cardButton.enabled = true;
            this.cardButton.touchable = true;
        }
        if (this.fastButton) {
            this.fastButton.enabled = true;
            this.fastButton.touchable = true;
        }
        if (this.autoSpinButton) {
            this.autoSpinButton.enabled = true;
            this.autoSpinButton.touchable = true;
        }
        this.changeBetButtonsEnable(this.isMinBet, this.isMaxBet);
    };
    BottomBarBase.prototype.disableAllButtonsButSpin = function () {
        if (this.cardButton) {
            this.cardButton.enabled = false;
            this.cardButton.touchable = false;
        }
        if (this.fastButton) {
            this.fastButton.enabled = false;
            this.fastButton.touchable = false;
        }
        if (this.decreaseBetButton) {
            this.decreaseBetButton.enabled = false;
            this.decreaseBetButton.touchable = false;
        }
        if (this.increaseBetButton) {
            this.increaseBetButton.enabled = false;
            this.increaseBetButton.touchable = false;
        }
        if (this.maxBetButton) {
            this.maxBetButton.enabled = false;
            this.maxBetButton.touchable = false;
        }
        if (this.autoSpinButton) {
            this.autoSpinButton.enabled = false;
            this.autoSpinButton.touchable = false;
        }
    };
    BottomBarBase.prototype.stopSpinClick = function () { };
    BottomBarBase.prototype.statusChanged = function (status) {
        var _this = this;
        console.log("BottomBarBase statusChanged=======" + status);
        this.gameStatus = status;
        var spinStatus = this._spinStatusStrategy.getSpinStatus(status, this._spinType, this._freeGameTrigger, this._nextGameMode);
        this.spinStatus = spinStatus.spinStatus;
        this.spinButton.enabled = spinStatus.enable;
        this.changeBetButtonsEnable(this.isMinBet, this.isMaxBet);
        if (this._spinType != SpinType_1.SpinType.Spin) {
            this.disableAllButtonsButSpin();
        }
        if (this._nextGameMode == SpinResultsGameMode_1.SpinResultsGameMode.Normal && status == SlotGameStageStatus_1.SlotGameStageStatus.Ready) {
            this.enableAllButtons();
        }
        else {
            this.disableAllButtonsButSpin();
        }
        //* 自动次数大于0且spin状态为自动状态且与游戏状态为ready状态时，自动状态继续
        if (this._autoTimes >= 0 &&
            this.spinStatus === BottomBarSpinStaus_1.BottomBarSpinStaus.StopAutoSpin &&
            status === SlotGameStageStatus_1.SlotGameStageStatus.Ready) {
            //* 因为棋盘在停止后因转动策略的影响会多次触发statusChanged，若每次进来都执行延时操作，
            //* 会在栈中放进多个onSpinClickInternal函数，导致多次触发，因此需要在每次延时执行时，
            //* 清空掉上一次的延时操作，最终只执行一次延时
            this.unscheduleAllCallbacks();
            this.scheduleOnce(function () {
                _this.onSpinClickInternal(_this._autoTimes, true, _this._originTimes);
            }, this.holdUpTime);
        }
        this.setControllerProperty(this.spinStatusControllerName, spinStatus.spinStatus);
    };
    BottomBarBase.prototype.changeBetButtonsEnable = function (isMin, isMax) {
        if (this.decreaseBetButton && this.increaseBetButton) {
            this.decreaseBetButton.enabled = !isMin;
            this.decreaseBetButton.touchable = !isMin;
            this.increaseBetButton.enabled = !isMax;
            this.increaseBetButton.touchable = !isMax;
        }
        if (this.maxBetButton) {
            this.maxBetButton.enabled = !isMax;
            this.maxBetButton.touchable = !isMax;
        }
    };
    BottomBarBase.prototype.betChangedInternal = function () {
        //this.betNumber.text = Utils.numToCountingNnit(this.bet);
        this.changeBetButtonsEnable(this.isMinBet, this.isMaxBet);
        this.node.emit(BottomBarEvent.BET_CHANGED, {
            bet: this.bet,
            isMin: this.isMinBet,
            isMax: this.isMaxBet,
        });
        this.node.emit("BET_CHANGE", this.bet);
    };
    BottomBarBase.prototype.changeFreeSpinCount = function (finished, total) {
        if (this.freeSpinCountField) {
            this._originTimes = total;
            this.freeSpinCountField.text = total - finished + "/" + total;
        }
    };
    BottomBarBase.prototype.changeAutoSpinCount = function (finished) {
        if (this.autoSpinCountField) {
            this.autoSpinCountField.text = finished.toString();
        }
    };
    BottomBarBase.prototype.onDecreaseBetClick = function () {
        this.decreaseBet();
    };
    BottomBarBase.prototype.onIncreaseBetClick = function () {
        this.increaseBet();
    };
    BottomBarBase.prototype.onMaxBetClick = function () {
        this.maxBet();
    };
    BottomBarBase.prototype.onExitClick = function () {
        console.log("返回大厅：：：：：：：：：：：：：：：：：：：：：：：：：：");
        if (cc.sys.isBrowser) {
            window.close();
        }
        else {
            cc.director.loadScene("Login");
        }
    };
    BottomBarBase.prototype.onHelpClick = function () {
        this.node.emit("showPayTable");
    };
    BottomBarBase.prototype.onSoundClick = function () {
        console.log("onSoundClick");
        if (SoundMgr_1.default.getInstance().getSoundStatus()) {
            SoundMgr_1.default.getInstance().setSoundStatus("close");
        }
        else {
            SoundMgr_1.default.getInstance().setSoundStatus("open");
        }
        if (SoundMgr_1.default.getInstance().getEffectStatus()) {
            SoundMgr_1.default.getInstance().setEffectStatus("close");
        }
        else {
            SoundMgr_1.default.getInstance().setEffectStatus("open");
        }
    };
    BottomBarBase.prototype.onFastClickInternal = function () {
        this.isFastInternal = !this.isFast;
        this.fastButton.controllers[1].selectedIndex = this.isFast ? 1 : 0;
        this.node.emit(BottomBarEvent.FAST_CLICK, this.isFast);
    };
    BottomBarBase.prototype.onAutoSpinClickInternal = function () {
        if (this.autoSpinCountField) {
            this.autoSpinCountField.text = "";
        }
        this.spinType = SpinType_1.SpinType.AutoSpin;
        this.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.StopAutoSpin;
        this.onSpinClickInternal(9999999, true, -1);
    };
    BottomBarBase.prototype.onSpin100ClickInternal = function () {
        this.autoSpinCountField.text = "100";
        this.spinType = SpinType_1.SpinType.AutoSpin;
        this.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.StopAutoSpin;
        this.onSpinClickInternal(100, true);
    };
    BottomBarBase.prototype.onSpin50ClickInternal = function () {
        this.autoSpinCountField.text = "50";
        this.spinType = SpinType_1.SpinType.AutoSpin;
        this.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.StopAutoSpin;
        this.onSpinClickInternal(50, true);
    };
    BottomBarBase.prototype.onSpin15ClickInternal = function () {
        this.autoSpinCountField.text = "15";
        this.spinType = SpinType_1.SpinType.AutoSpin;
        this.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.StopAutoSpin;
        this.onSpinClickInternal(15, true);
    };
    /**
     * 长按按钮事件处理
     */
    BottomBarBase.prototype.onSpinLongTouchInternal = function () {
        //* spinType不为autoSpinMenu和autoSpin时，设置spinType为autoSpinMenu
        console.log("onSpinLongTouchInternal");
        if (this.spinType === SpinType_1.SpinType.Spin && this.spinStatus === BottomBarSpinStaus_1.BottomBarSpinStaus.Ready) {
            this.setControllerProperty(this.spinStatusControllerName, BottomBarSpinStaus_1.BottomBarSpinStaus.AutoSpinMenu);
        }
    };
    BottomBarBase.prototype.onSpinDoubleTouchInternal = function () {
        console.log("onSpinDoubleTouchInternal");
    };
    /**
     * spin按钮点击事件内部处理
     * @param times spin次数
     * @param isAuto 是否为自动
     * @param originTimes 初始值，用于自动spin选自动时，无穷大的判断
     */
    BottomBarBase.prototype.onSpinClickInternal = function (times, isAuto, originTimes) {
        if (times === void 0) { times = 1; }
        if (isAuto === void 0) { isAuto = false; }
        console.log("onSpinClickInternal");
        this.isAutoSpin = isAuto;
        if (!this.spinButton.enabled) {
            return;
        }
        if (!this._freeModeFinished &&
            this._nextGameMode == SpinResultsGameMode_1.SpinResultsGameMode.Normal &&
            (this._currentGameType == SpinResultsGameMode_1.SpinResultsGameMode.FreeSpin ||
                this._currentGameType == SpinResultsGameMode_1.SpinResultsGameMode.Respin)) {
            return;
        }
        if (this._freeModeFinished) {
            this._freeModeFinished = false;
        }
        if (!this.game.checkCoinEnough()) {
            return;
        }
        if (!originTimes) {
            this._originTimes = times;
        }
        else {
            this._originTimes = originTimes;
        }
        if (this.infinity) {
            if (this._originTimes < 0) {
                this.infinity.node.active = true;
            }
            else {
                this.infinity.node.active = false;
            }
        }
        this._autoTimes = times;
        //* 记录总共自动转的次数，用于手动停止时
        if (!this._totalAutoSpinTimes) {
            this._totalAutoSpinTimes = times;
        }
        else {
            //* 手动停止autoSpin
            if (this._totalAutoSpinTimes !== times && !isAuto) {
                this.spinType = SpinType_1.SpinType.Spin;
                this.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.Ready;
                this.game.spinClick(times);
                this.node.emit(BottomBarEvent.SPIN_CLICK);
                //* 手动停止后归零
                this._totalAutoSpinTimes = 0;
                return;
            }
        }
        if (this.gameStatus == SlotGameStageStatus_1.SlotGameStageStatus.Ready) {
            this.disableAllButtonsButSpin();
        }
        else {
            this.stopSpinClick();
        }
        //* autoSpin状态
        if (this.spinStatus === BottomBarSpinStaus_1.BottomBarSpinStaus.StopAutoSpin) {
            if (this._autoTimes === 0) {
                this.spinType = SpinType_1.SpinType.Spin;
                this.spinStatus = BottomBarSpinStaus_1.BottomBarSpinStaus.Ready;
                this.node.emit(BottomBarEvent.SPIN_CLICK);
                //* autoSpin自动结束后归零
                this._totalAutoSpinTimes = 0;
                this.enableAllButtons();
                return;
            }
            else {
                this._autoTimes--;
                if (this._totalAutoSpinTimes >= 0 && this._originTimes > -1) {
                    this.changeAutoSpinCount(this._autoTimes);
                }
                this.game.spinClick(times);
                return;
            }
        }
        this.game.spinClick(times);
        this.node.emit(BottomBarEvent.SPIN_CLICK);
    };
    /**
     * 继续autospin
     */
    BottomBarBase.prototype.continueAutoSpin = function () {
        this.onSpinClickInternal(this._autoTimes, true, this._originTimes);
    };
    /**
     * 设置win框金币
     * @param winCoins
     * @param changeTime
     */
    BottomBarBase.prototype.setWinCoins = function (winCoins, changeTime) {
        if (changeTime === void 0) { changeTime = 1; }
        this.coinsChangeTime = changeTime;
        this.winCoins = winCoins;
    };
    BottomBarBase.prototype.onSpinClick = function (listener, target) {
        this.node.on(BottomBarEvent.SPIN_CLICK, listener, target);
    };
    BottomBarBase.prototype.offSpinClick = function (listener, target) {
        this.node.off(BottomBarEvent.SPIN_CLICK, listener, target);
    };
    BottomBarBase.prototype.clearSpinClick = function () {
        this.node.off(BottomBarEvent.SPIN_CLICK);
    };
    BottomBarBase.prototype.onChallengeClick = function (listener, target) {
        this.node.on(BottomBarEvent.CHALLENGE_CLICK, listener, target);
    };
    BottomBarBase.prototype.offChallengeClick = function (listener, target) {
        this.node.off(BottomBarEvent.CHALLENGE_CLICK, listener, target);
    };
    BottomBarBase.prototype.clearChallengeClick = function () {
        this.node.off(BottomBarEvent.CHALLENGE_CLICK);
    };
    BottomBarBase.prototype.onCardClick = function (listener, target) {
        this.node.emit(BottomBarEvent.CARD_CLICK);
    };
    BottomBarBase.prototype.onCardClickEvent = function (listener, target) {
        this.node.on(BottomBarEvent.CARD_CLICK, listener, target);
    };
    BottomBarBase.prototype.onAutoSpin = function (listener, target) {
        this.node.on(BottomBarEvent.AUTO_SPIN, listener, target);
    };
    BottomBarBase.prototype.offAutoSpin = function (listener, target) {
        this.node.off(BottomBarEvent.AUTO_SPIN, listener, target);
    };
    BottomBarBase.prototype.clearAutoSpin = function () {
        this.node.off(BottomBarEvent.AUTO_SPIN);
    };
    BottomBarBase.prototype.onFastClick = function (listener, target) {
        this.node.on(BottomBarEvent.FAST_CLICK, listener, target);
    };
    BottomBarBase.prototype.offFastClick = function (listener, target) {
        this.node.off(BottomBarEvent.FAST_CLICK, listener, target);
    };
    BottomBarBase.prototype.clearFastClick = function () {
        this.node.off(BottomBarEvent.FAST_CLICK);
    };
    BottomBarBase.prototype.onBetChanged = function (listener, target) {
        this.node.on(BottomBarEvent.BET_CHANGED, listener, target);
    };
    BottomBarBase.prototype.offBetChanged = function (listener, target) {
        this.node.off(BottomBarEvent.BET_CHANGED, listener, target);
    };
    BottomBarBase.prototype.clearBetChanged = function () {
        this.node.off(BottomBarEvent.BET_CHANGED);
    };
    /**
     * 金币变化事件
     * 可以在此方法中绑定处理金币变化的事件和音效
     * @param listener
     * @param target
     */
    BottomBarBase.prototype.onCoinChanged = function (listener, target) {
        this.node.on(BottomBarEvent.COIN_CHANGED, listener, target);
    };
    BottomBarBase.prototype.emitCoinChanged = function (target) {
        this.node.emit(BottomBarEvent.COIN_CHANGED, target);
    };
    BottomBarBase.prototype.offCoinChanged = function () {
        this.node.off(BottomBarEvent.COIN_CHANGED);
    };
    /**
     * 按钮点击播放音效事件
     * 子类重载此方法给按钮绑定音乐
     */
    BottomBarBase.prototype.onButtonClickMusic = function () { };
    return BottomBarBase;
}(FguiFullScreenBase_1.default));
exports.default = BottomBarBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxzbG90c1xcbGliXFxCb3R0b21CYXJcXEJvdHRvbUJhckJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQW9EO0FBQ3BELHdDQUF1QztBQUV2Qyx3RUFBdUU7QUFFdkUsMkRBQTBEO0FBRTFELHdFQUFtRTtBQUNuRSxvRUFBK0Q7QUFDL0QseUZBQW9GO0FBRXBGLG1GQUFrRjtBQUNsRixrREFBaUQ7QUFDakQsNEVBQTJFO0FBQzNFLHdEQUFtRDtBQUNuRCxtRkFBa0Y7QUFNbEYsSUFBTSxjQUFjLEdBQUc7SUFDbkIsVUFBVSxFQUFFLG9CQUFvQjtJQUNoQyxVQUFVLEVBQUUsb0JBQW9CO0lBQ2hDLGVBQWUsRUFBRSx5QkFBeUI7SUFDMUMsU0FBUyxFQUFFLG1CQUFtQjtJQUM5QixVQUFVLEVBQUUsb0JBQW9CO0lBQ2hDLFdBQVcsRUFBRSxxQkFBcUI7SUFDbEMsWUFBWSxFQUFFLHNCQUFzQjtDQUN2QyxDQUFDO0FBRUY7SUFBb0QsaUNBQWtCO0lBQXRFO1FBQUEscUVBZzlCQztRQTkzQkcsaUJBQWlCO1FBQ1YsZUFBUyxHQUFhLG1CQUFRLENBQUMsSUFBSSxDQUFDO1FBQ25DLG1CQUFhLEdBQXdCLHlDQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVk7UUE0QjdFLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsV0FBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFHNUIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBQzdCLGlCQUFXLEdBQXdCLHlDQUFtQixDQUFDLEtBQUssQ0FBQztRQUc3RCx5QkFBbUIsR0FBdUIsSUFBSSxrQ0FBd0IsRUFBRSxDQUFDO1FBQ3pFLHNCQUFnQixHQUFvQixJQUFJLENBQUM7UUFDekMseUJBQW1CLEdBQVcs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QWtCLEVBQUUsTUFBWTtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ00sdUNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNEOzs7OztPQUtHO0lBQ0kscUNBQWEsR0FBcEIsVUFBcUIsUUFBa0IsRUFBRSxNQUFZO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTSx1Q0FBZSxHQUF0QixVQUF1QixNQUFZO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNNLHNDQUFjLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRDs7O09BR0c7SUFDSSwwQ0FBa0IsR0FBekIsY0FBb0MsQ0FBQztJQUN6QyxvQkFBQztBQUFELENBaDlCQSxBQWc5QkMsQ0FoOUJtRCw0QkFBa0IsR0FnOUJyRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEJldENoYW5nZWRNZXNzYWdlIGZyb20gXCIuL0JldENoYW5nZWRNZXNzYWdlXCI7XG5pbXBvcnQgeyBTcGluVHlwZSB9IGZyb20gXCIuLi9TcGluVHlwZVwiO1xuaW1wb3J0IFNsb3RHYW1lU3RhZ2UgZnJvbSBcIi4uL0dhbWVTdGFnZS9TbG90R2FtZVN0YWdlXCI7XG5pbXBvcnQgeyBTbG90R2FtZVN0YWdlU3RhdHVzIH0gZnJvbSBcIi4uL0dhbWVTdGFnZS9TbG90R2FtZVN0YWdlU3RhdHVzXCI7XG5cbmltcG9ydCB7IEJvdHRvbUJhclNwaW5TdGF1cyB9IGZyb20gXCIuL0JvdHRvbUJhclNwaW5TdGF1c1wiO1xuaW1wb3J0IFNwaW5TdGF0dXNTdHJhdGVneSBmcm9tIFwiLi4vU3BpblN0YXR1c1N0cmF0ZWd5XCI7XG5pbXBvcnQgU3BpblN0YXR1c1N0cmF0ZWd5Tm9ybWFsIGZyb20gXCIuLi9TcGluU3RhdHVzU3RyYXRlZ3lOb3JtYWxcIjtcbmltcG9ydCBTbG90R2FtZVN0YWdlQmFzZSBmcm9tIFwiLi4vR2FtZVN0YWdlL1Nsb3RHYW1lU3RhZ2VCYXNlXCI7XG5pbXBvcnQgRmd1aUZ1bGxTY3JlZW5CYXNlIGZyb20gXCIuLi8uLi8uLi9mYWlyeWd1aS1jb21wb25lbnQvbGliL0ZndWlGdWxsU2NyZWVuQmFzZVwiO1xuaW1wb3J0IHsgTW9nYWZhTnVtYmVyRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vZmFpcnlndWktY29tcG9uZW50L2xpYi9leHRlbnNpb25zL01vZ2FmYU51bWJlckZpZWxkXCI7XG5pbXBvcnQgeyBCdXR0b25Mb25nVG91Y2ggfSBmcm9tIFwiLi4vLi4vLi4vZmFpcnlndWktY29tcG9uZW50L2xpYi9CdXR0b25Mb25nVG91Y2hcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2xpYi9VdGlsc1wiO1xuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvbGliL1NvdW5kTWdyXCI7XG5pbXBvcnQgeyBTcGluUmVzdWx0c0dhbWVNb2RlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzR2FtZU1vZGVcIjtcbmltcG9ydCBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyIGZyb20gXCIuLi8uLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c0ZyZWVUcmlnZ2VyXCI7XG5cblxuXG5cbmNvbnN0IEJvdHRvbUJhckV2ZW50ID0ge1xuICAgIFNQSU5fQ0xJQ0s6IFwiQm90dG9tQmFyU3BpbkNsaWNrXCIsXG4gICAgQ0FSRF9DTElDSzogXCJCb3R0b21CYXJDYXJkQ2xpY2tcIixcbiAgICBDSEFMTEVOR0VfQ0xJQ0s6IFwiQm90dG9tQmFyQ2hhbGxlbmdlQ2xpY2tcIixcbiAgICBBVVRPX1NQSU46IFwiQm90dG9tQmFyQXV0b1NwaW5cIixcbiAgICBGQVNUX0NMSUNLOiBcIkJvdHRvbUJhckZhc3RDbGlja1wiLFxuICAgIEJFVF9DSEFOR0VEOiBcIkJvdHRvbUJhckJldENoYW5nZWRcIixcbiAgICBDT0lOX0NIQU5HRUQ6IFwiQm90dG9tYmFyQ29pbkNoYW5nZWRcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJvdHRvbUJhckJhc2UgZXh0ZW5kcyBGZ3VpRnVsbFNjcmVlbkJhc2Uge1xuICAgIC8vI3JlZ2lvbiDnu4Tku7blkI3np7BcbiAgICBwcm90ZWN0ZWQgZ2V0IGNoYWxsZW5nZUJ1dHRvbk5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiY2hhbGxlbmdlXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY2FyZEJ1dHRvbk5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiY2FyZFwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IG1heEJldEJ1dHRvbk5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwibWF4QmV0XCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgZmFzdEJ1dHRvbk5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiZmFzdFwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHNwaW5CdXR0b25OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInNwaW5cIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBhdXRvU3BpbkNvbXBvbmVudCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJhdXRvU3BpblwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGF1dG9TcGluQnV0dG9uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJzcGluLmF1dG9TcGluLmF1dG9cIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBzcGluMTAwQnV0dG9uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJzcGluLmF1dG9TcGluLnNwaW4xMDBcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBzcGluNTBCdXR0b25OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInNwaW4uYXV0b1NwaW4uc3BpbjUwXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgc3BpbjE1QnV0dG9uTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJzcGluLmF1dG9TcGluLnNwaW4xNVwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGZyZWVTcGluQ291bnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInNwaW4uZnJlZVNwaW5zQ291bnRcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBhdXRvU3BpbkNvdW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJzcGluLmF1dG9TdG9wQ291bnRcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBpbmZpbml0eU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwic3Bpbi5pbmZpbml0eVwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHdpbkNvaW5zTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ3aW5Db2luc1wiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNvaW5zTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ3aW5Db2lucy5jb2luc1wiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHR3aW5rbGVOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIndpbkNvaW5zLnR3aW5rbGVcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCB0b3RhbEJldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwidG90YWxCZXRcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBiZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInRvdGFsQmV0LmJldFwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGluY3JlYXNlQmV0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ0b3RhbEJldC5pbmNyZWFzZUJldFwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGRlY3JlYXNlQmV0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJ0b3RhbEJldC5kZWNyZWFzZUJldFwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHNwaW5TdGF0dXNDb250cm9sbGVyTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJzcGluLnNwaW5TdGF0dXNcIjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHNwaW5Vc2VyR29sZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IGV4aXRCdXR0b25OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgaGVscEJ1dHRvbk5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldCBTb3VuZEJ1dHRvbk5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8jZW5kcmVnaW9uIOe7hOS7tuWQjeensFxuICAgIHB1YmxpYyBfc3BpblR5cGU6IFNwaW5UeXBlID0gU3BpblR5cGUuU3BpbjtcbiAgICBwcml2YXRlIF9uZXh0R2FtZU1vZGU6IFNwaW5SZXN1bHRzR2FtZU1vZGUgPSBTcGluUmVzdWx0c0dhbWVNb2RlLk5vcm1hbDsgLy8jcmVnaW9uIOe7hOS7tlxuICAgIHByb3RlY3RlZCBib3R0b21CYXI6IGZndWkuR0NvbXBvbmVudDtcbiAgICBwcm90ZWN0ZWQgY2hhbGxlbmdlQnV0dG9uOiBmZ3VpLkdCdXR0b247XG4gICAgcHJvdGVjdGVkIGNhcmRCdXR0b246IGZndWkuR0J1dHRvbjtcbiAgICBwcm90ZWN0ZWQgZGVjcmVhc2VCZXRCdXR0b246IGZndWkuR0J1dHRvbjtcbiAgICBwcm90ZWN0ZWQgaW5jcmVhc2VCZXRCdXR0b246IGZndWkuR0J1dHRvbjtcbiAgICBwcm90ZWN0ZWQgYmV0TnVtYmVyOiBmZ3VpLkdUZXh0RmllbGQ7XG4gICAgcHJvdGVjdGVkIHdpbkNvaW46IE1vZ2FmYU51bWJlckZpZWxkO1xuICAgIHByb3RlY3RlZCBtYXhCZXRCdXR0b246IGZndWkuR0J1dHRvbjtcbiAgICBwcm90ZWN0ZWQgZmFzdEJ1dHRvbjogZmd1aS5HQnV0dG9uO1xuICAgIHByb3RlY3RlZCBzcGluQnV0dG9uOiBmZ3VpLkdCdXR0b247XG4gICAgcHJvdGVjdGVkIGF1dG9TcGluQnV0dG9uOiBmZ3VpLkdCdXR0b247XG4gICAgcHJvdGVjdGVkIHNwaW4xMDBCdXR0b246IGZndWkuR0J1dHRvbjtcbiAgICBwcm90ZWN0ZWQgc3BpbjUwQnV0dG9uOiBmZ3VpLkdCdXR0b247XG4gICAgcHJvdGVjdGVkIHNwaW4xNUJ1dHRvbjogZmd1aS5HQnV0dG9uO1xuICAgIHByb3RlY3RlZCBmcmVlU3BpbkNvdW50RmllbGQ6IGZndWkuR1RleHRGaWVsZDtcbiAgICBwcm90ZWN0ZWQgYXV0b1NwaW5Db3VudEZpZWxkOiBmZ3VpLkdUZXh0RmllbGQ7XG4gICAgcHJvdGVjdGVkIFVzZXJHb2xkOiBNb2dhZmFOdW1iZXJGaWVsZDtcbiAgICBwcm90ZWN0ZWQgaW5maW5pdHk6IGZndWkuR0dyYXBoO1xuICAgIHByaXZhdGUgdHdpbmtsZTogZmd1aS5HTG9hZGVyO1xuICAgIHByb3RlY3RlZCBFeGl0QnV0dG9uOiBmZ3VpLkdCdXR0b247XG4gICAgcHJvdGVjdGVkIEhlbHBCdXR0b246IGZndWkuR0J1dHRvbjtcbiAgICBwcm90ZWN0ZWQgU291bmRCdXR0b246IGZndWkuR0J1dHRvbjtcbiAgICAvLyNlbmRyZWdpb25cblxuICAgIHByaXZhdGUgX2F1dG9TcGluQ291bnQ6IHN0cmluZztcbiAgICBwcml2YXRlIF9mcmVlU3BpbkNvdW50OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfZ2FtZTogU2xvdEdhbWVTdGFnZTtcbiAgICBwcml2YXRlIF9pc0Zhc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9iZXRzOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX2JldDogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgX3ByZXZXaW5Db2luczogbnVtYmVyID0gMDtcbiAgICBwcm90ZWN0ZWQgX3dpbkNvaW5zOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY29pbnM6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jb2luc0NoYW5nZVRpbWU6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfZ2FtZVN0YXR1czogU2xvdEdhbWVTdGFnZVN0YXR1cyA9IFNsb3RHYW1lU3RhZ2VTdGF0dXMuUmVhZHk7XG4gICAgcHJpdmF0ZSBfY3VycmVudEdhbWVUeXBlOiBTcGluUmVzdWx0c0dhbWVNb2RlO1xuICAgIHByaXZhdGUgX2ZyZWVHYW1lVHJpZ2dlcjogU3BpblJlc3VsdHNGcmVlVHJpZ2dlcjtcbiAgICBwcml2YXRlIF9zcGluU3RhdHVzU3RyYXRlZ3k6IFNwaW5TdGF0dXNTdHJhdGVneSA9IG5ldyBTcGluU3RhdHVzU3RyYXRlZ3lOb3JtYWwoKTtcbiAgICBwcml2YXRlIF9idXR0b25Mb25nVG91Y2g6IEJ1dHRvbkxvbmdUb3VjaCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfdG90YWxBdXRvU3BpblRpbWVzOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX29yaWdpblRpbWVzOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RvdGFsTGluZUNvdW50OiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBzcGluU3RhdHVzOiBCb3R0b21CYXJTcGluU3RhdXM7XG4gICAgcHJvdGVjdGVkIF9mcmVlTW9kZUZpbmlzaGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNBdXRvU3BpbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc0phY2twb3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyog6YeR5biB5paH5pysXG4gICAgcHJpdmF0ZSBfY29pbkxhYmVsOiBmZ3VpLkdUZXh0RmllbGQ7XG4gICAgLy8qIGNvaW4gTGx0eXVOdW1iZXJGaWVsZFxuICAgIHByaXZhdGUgX2NvaW5GaWVsZDogTW9nYWZhTnVtYmVyRmllbGQ7XG4gICAgLy8qIOmHkeW4geWinumVv+WKqOeUu+aJgOmcgOaXtumXtFxuICAgIHByaXZhdGUgX2NvaW5JbmNyZWFzZVRpbWU6IG51bWJlciA9IDEuNTtcblxuICAgIHB1YmxpYyBnZXQgaXNBdXRvU3BpbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQXV0b1NwaW47XG4gICAgfVxuXG4gICAgcHVibGljIHNldCBpc0F1dG9TcGluKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzQXV0b1NwaW4gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyNyZWdpb24g5bGe5oCnXG4gICAgcHVibGljIGdldCBzcGluVHlwZSgpOiBTcGluVHlwZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGluVHlwZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBzcGluVHlwZSh2YWx1ZTogU3BpblR5cGUpIHtcbiAgICAgICAgdGhpcy5fc3BpblR5cGUgPSB2YWx1ZTtcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBTcGluVHlwZS5BdXRvU3BpbjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eSh0aGlzLnNwaW5TdGF0dXNDb250cm9sbGVyTmFtZSwgMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNwaW5UeXBlLkZyZWVTcGluOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KHRoaXMuc3BpblN0YXR1c0NvbnRyb2xsZXJOYW1lLCAzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU3BpblR5cGUuUmVzcGluOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KHRoaXMuc3BpblN0YXR1c0NvbnRyb2xsZXJOYW1lLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU3BpblR5cGUuU3BpbjpcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJQcm9wZXJ0eSh0aGlzLnNwaW5TdGF0dXNDb250cm9sbGVyTmFtZSwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHRvdGFsTGluZUNvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbExpbmVDb3VudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IHRvdGFsTGluZUNvdW50KGRhdGE6IG51bWJlcikge1xuICAgICAgICB0aGlzLl90b3RhbExpbmVDb3VudCA9IGRhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgY29pbnNDaGFuZ2VUaW1lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2luc0NoYW5nZVRpbWU7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0IGNvaW5zQ2hhbmdlVGltZShjaGFuZ2VUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY29pbnNDaGFuZ2VUaW1lID0gY2hhbmdlVGltZTtcbiAgICB9XG4gICAgcHVibGljIGdldCB3aW5Db2lucygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fd2luQ29pbnM7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgd2luQ29pbnModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl93aW5Db2lucyA9IHZhbHVlO1xuICAgICAgICAvLyogcmVzcGlu5Lit5LiN5a+56YeR5biB6L+b6KGM5pS55Y+YXG4gICAgICAgIGlmIChTbG90R2FtZVN0YWdlQmFzZS5zcGluUmVzdWx0cyAmJiBTbG90R2FtZVN0YWdlQmFzZS5zcGluUmVzdWx0cy5nYW1lTW9kZSA9PT0gU3BpblJlc3VsdHNHYW1lTW9kZS5SZXNwaW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLndpbkNvaW4ucGxheSh0aGlzLl9wcmV2V2luQ29pbnMsIHZhbHVlLCB0aGlzLmNvaW5zQ2hhbmdlVGltZSwgdGhpcy5jb2luUGxheUNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5lbWl0Q29pbkNoYW5nZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2hpbGQodGhpcy5jb2luc05hbWUpLmFzVGV4dEZpZWxkLnRleHQgPSBVdGlscy5mb3JtYXROdW1iZXJUb0ludCgwLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyog5b2T5YmN5ri45oiP5qih5byP5aSE5LqO54m55q6K5qih5byP5LiL6K6w5b2V5LiK5LiA5qyh55qE6YeR5biB5pWw77yM5pa55L6/5Zyo5bGV56S66YeR5biB5aKe6ZW/5pe25LiN55So5LuOMOW8gOWni1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50R2FtZU1vZGUgIT09IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmV2V2luQ29pbnMgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZXaW5Db2lucyA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY29pbnMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvaW5zO1xuICAgIH1cbiAgICBzZXQgY29pbnModmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0aGlzLl9jb2lucyAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29pbnMgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jb2luc0NoYW5nZVRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvaW5JbmNyZWFzZUFuaW1lKHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8qIOiLpeayoeacieWinumVv+aXtumXtO+8jOWImeebtOaOpei1i+WAvFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29pbkxhYmVsLnRleHQgPSBVdGlscy5mb3JtYXROdW1iZXJUb0ludCh2YWx1ZSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY29pblBsYXlDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vZmZDb2luQ2hhbmdlZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGZyZWVTcGluQ291bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZyZWVTcGluQ291bnQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZnJlZVNwaW5Db3VudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2ZyZWVTcGluQ291bnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBhdXRvU3BpbkNvdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvU3BpbkNvdW50O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGF1dG9TcGluQ291bnQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9hdXRvU3BpbkNvdW50ID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZ2FtZSgpOiBTbG90R2FtZVN0YWdlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dhbWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgZ2FtZSh2YWx1ZTogU2xvdEdhbWVTdGFnZSkge1xuICAgICAgICBpZiAodGhpcy5fZ2FtZSkge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZS5vZmZTdGF0dXNDaGFuZ2VkKHRoaXMuc3RhdHVzQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZ2FtZSA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5fZ2FtZSkge1xuICAgICAgICAgICAgdGhpcy5fZ2FtZS5vblN0YXR1c0NoYW5nZWQodGhpcy5zdGF0dXNDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzRmFzdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRmFzdDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNldCBpc0Zhc3RJbnRlcm5hbCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0Zhc3QgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc01pbkJldCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLl9iZXRzIHx8IHRoaXMuX2JldHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9iZXQgPT0gdGhpcy5fYmV0c1swXTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpc01heEJldCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLl9iZXRzIHx8IHRoaXMuX2JldHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9iZXQgPT0gdGhpcy5fYmV0c1t0aGlzLl9iZXRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGdhbWVTdGF0dXMoKTogU2xvdEdhbWVTdGFnZVN0YXR1cyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdHVzO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0IGdhbWVTdGF0dXModmFsdWU6IFNsb3RHYW1lU3RhZ2VTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXR1cyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGJldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmV0O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGJldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2JldCA9IHZhbHVlO1xuXG4gICAgICAgIHRoaXMuYmV0TnVtYmVyLnRleHQgPSBVdGlscy5udW1Ub0NvdW50aW5nTm5pdCh0aGlzLmJldCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3RvdGFsTGluZUNvdW50KSB7XG4gICAgICAgICAgICB0aGlzLmJldE51bWJlci50ZXh0ID0gVXRpbHMubnVtVG9Db3VudGluZ05uaXQodGhpcy5iZXQgKiB0aGlzLl90b3RhbExpbmVDb3VudCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBwdWJsaWMgc2V0IGJldHMoYmV0czogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fYmV0cyA9IGJldHM7XG5cbiAgICAgICAgaWYgKEFwcENvbnN0LmVudGVyUm9vbURhdGEgJiYgQXBwQ29uc3QuZW50ZXJSb29tRGF0YS5iZXRTY29yZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2JldHMgPSBBcHBDb25zdC5lbnRlclJvb21EYXRhLmJldFNjb3Jlc1xuICAgICAgICAgICAgdGhpcy5fdG90YWxMaW5lQ291bnQgPSBBcHBDb25zdC5lbnRlclJvb21EYXRhLnRvdGFsTGluZUNvdW50ID4gNTAgPyA1MCA6IEFwcENvbnN0LmVudGVyUm9vbURhdGEudG90YWxMaW5lQ291bnRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5fYmV0cykge1xuICAgICAgICAgICAgdGhpcy5fYmV0cyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fYmV0ID0gMDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBCZXRDaGFuZ2VkTWVzc2FnZSh0aGlzLl9iZXQsIHRoaXMuaXNNaW5CZXQsIHRoaXMuaXNNYXhCZXQpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9iZXRzID0gdGhpcy5fYmV0cy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG4gICAgICAgIGxldCBiZXQgPSB0aGlzLl9iZXRzLmZpbmQoKGIpID0+IHRoaXMuX2JldCA9PSBiKTtcbiAgICAgICAgaWYgKCFiZXQpIHtcbiAgICAgICAgICAgIHRoaXMuYmV0ID0gdGhpcy5fYmV0c1swXTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQmV0QnV0dG9uc0VuYWJsZSh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQmV0Q2hhbmdlZE1lc3NhZ2UodGhpcy5fYmV0LCB0aGlzLmlzTWluQmV0LCB0aGlzLmlzTWF4QmV0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBiZXRzKCk6IG51bWJlcltdIHtcbiAgICAgICAgaWYgKCF0aGlzLl9iZXRzKSB7XG4gICAgICAgICAgICB0aGlzLl9iZXRzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2JldHM7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbmV4dEdhbWVNb2RlKCk6IFNwaW5SZXN1bHRzR2FtZU1vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmV4dEdhbWVNb2RlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IG5leHRHYW1lTW9kZSh2YWx1ZTogU3BpblJlc3VsdHNHYW1lTW9kZSkge1xuICAgICAgICB0aGlzLl9uZXh0R2FtZU1vZGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBjdXJyZW50R2FtZU1vZGUoKTogU3BpblJlc3VsdHNHYW1lTW9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50R2FtZVR5cGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY3VycmVudEdhbWVNb2RlKHZhbHVlOiBTcGluUmVzdWx0c0dhbWVNb2RlKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRHYW1lVHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGZyZWVHYW1lVHJpZ2dlcigpOiBTcGluUmVzdWx0c0ZyZWVUcmlnZ2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZyZWVHYW1lVHJpZ2dlcjtcbiAgICB9XG4gICAgcHVibGljIHNldCBmcmVlR2FtZVRyaWdnZXIodmFsdWU6IFNwaW5SZXN1bHRzRnJlZVRyaWdnZXIpIHtcbiAgICAgICAgdGhpcy5fZnJlZUdhbWVUcmlnZ2VyID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3BpblN0YXR1c1N0cmF0ZWd5KCk6IFNwaW5TdGF0dXNTdHJhdGVneSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGluU3RhdHVzU3RyYXRlZ3k7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgc3BpblN0YXR1c1N0cmF0ZWd5KHZhbHVlOiBTcGluU3RhdHVzU3RyYXRlZ3kpIHtcbiAgICAgICAgdGhpcy5fc3BpblN0YXR1c1N0cmF0ZWd5ID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiHquWKqHNwaW7ml7bnmoTlu7bml7bml7bpl7TvvIzlj6/lnKjlrZDnsbvlpI3lhplcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGhvbGRVcFRpbWUoKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGZyZWVNb2RlRmluaXNoZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mcmVlTW9kZUZpbmlzaGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgZnJlZU1vZGVGaW5pc2hlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9mcmVlTW9kZUZpbmlzaGVkID0gdmFsdWU7XG4gICAgfVxuICAgIC8vI2VuZHJlZ2lvblxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuYm90dG9tQmFyID0gdGhpcy5mZ3VpQ29tcG9uZW50O1xuICAgICAgICBsZXQgY29tcG9uZW50OiBmZ3VpLkdDb21wb25lbnQ7XG4gICAgICAgIC8vIGlmICh0aGlzLmNoYWxsZW5nZUJ1dHRvbk5hbWUpIHtcbiAgICAgICAgLy8gICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0Q2hpbGQodGhpcy5jaGFsbGVuZ2VCdXR0b25OYW1lKTtcbiAgICAgICAgLy8gICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNoYWxsZW5nZUJ1dHRvbiA9IGNvbXBvbmVudC5hc0J1dHRvbjtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNoYWxsZW5nZUJ1dHRvbi5vbkNsaWNrKHRoaXMub25DaGFsbGVuZ2VDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgY2MuZXJyb3IoYOaIkOWwseaMiemSrue7hOS7tiR7dGhpcy5jaGFsbGVuZ2VCdXR0b25OYW1lfeS4jeWtmOWcqGApO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLmNhcmRCdXR0b25OYW1lKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldENoaWxkKHRoaXMuY2FyZEJ1dHRvbk5hbWUpO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZEJ1dHRvbiA9IGNvbXBvbmVudC5hc0J1dHRvbjtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRCdXR0b24ub25DbGljayh0aGlzLm9uQ2FyZENsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihg5Y2h57uE5oyJ6ZKu57uE5Lu2JHt0aGlzLmNhcmRCdXR0b25OYW1lfeS4jeWtmOWcqGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWF4QmV0QnV0dG9uTmFtZSkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRDaGlsZCh0aGlzLm1heEJldEJ1dHRvbk5hbWUpO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF4QmV0QnV0dG9uID0gY29tcG9uZW50LmFzQnV0dG9uO1xuICAgICAgICAgICAgICAgIHRoaXMubWF4QmV0QnV0dG9uLm9uQ2xpY2sodGhpcy5vbk1heEJldENsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihg5pyA5aSn5LiL5rOo5oyJ6ZKu57uE5Lu2JHt0aGlzLm1heEJldEJ1dHRvbk5hbWV95LiN5a2Y5ZyoYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmFzdEJ1dHRvbk5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZmFzdEJ1dHRvbiA9IHRoaXMuZ2V0Q2hpbGQodGhpcy5mYXN0QnV0dG9uTmFtZSkuYXNCdXR0b247XG4gICAgICAgICAgICB0aGlzLmZhc3RCdXR0b24ub25DbGljayh0aGlzLm9uRmFzdENsaWNrSW50ZXJuYWwuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3BpbkJ1dHRvbk5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbkJ1dHRvbiA9IHRoaXMuZ2V0Q2hpbGQodGhpcy5zcGluQnV0dG9uTmFtZSkuYXNCdXR0b247XG4gICAgICAgICAgICB0aGlzLnNwaW5CdXR0b24ubm9kZS5vbihcInRvdWNoLWxvbmdcIiwgdGhpcy5vblNwaW5Mb25nVG91Y2hJbnRlcm5hbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuc3BpbkJ1dHRvbi5ub2RlLm9uKFwidG91Y2gtc2hvcnRcIiwgdGhpcy5vblNwaW5DbGlja0ludGVybmFsLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5zcGluQnV0dG9uLm5vZGUub24oXCJ0b3VjaC1kb3VibGVcIiwgdGhpcy5vblNwaW5Eb3VibGVUb3VjaEludGVybmFsLmJpbmQodGhpcykpXG4gICAgICAgICAgICB0aGlzLl9idXR0b25Mb25nVG91Y2ggPSB0aGlzLmFkZEZndWlDb21wb25lbnQoQnV0dG9uTG9uZ1RvdWNoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRvU3BpbkJ1dHRvbk5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1NwaW5CdXR0b24gPSB0aGlzLmdldENoaWxkKHRoaXMuYXV0b1NwaW5CdXR0b25OYW1lKS5hc0J1dHRvbjtcbiAgICAgICAgICAgIHRoaXMuYXV0b1NwaW5CdXR0b24ub25DbGljayh0aGlzLm9uQXV0b1NwaW5DbGlja0ludGVybmFsLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwaW4xMDBCdXR0b25OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW4xMDBCdXR0b24gPSB0aGlzLmdldENoaWxkKHRoaXMuc3BpbjEwMEJ1dHRvbk5hbWUpLmFzQnV0dG9uO1xuICAgICAgICAgICAgdGhpcy5zcGluMTAwQnV0dG9uLm9uQ2xpY2sodGhpcy5vblNwaW4xMDBDbGlja0ludGVybmFsLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwaW41MEJ1dHRvbk5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbjUwQnV0dG9uID0gdGhpcy5nZXRDaGlsZCh0aGlzLnNwaW41MEJ1dHRvbk5hbWUpLmFzQnV0dG9uO1xuICAgICAgICAgICAgdGhpcy5zcGluNTBCdXR0b24ub25DbGljayh0aGlzLm9uU3BpbjUwQ2xpY2tJbnRlcm5hbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zcGluMTVCdXR0b25OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW4xNUJ1dHRvbiA9IHRoaXMuZ2V0Q2hpbGQodGhpcy5zcGluMTVCdXR0b25OYW1lKS5hc0J1dHRvbjtcbiAgICAgICAgICAgIHRoaXMuc3BpbjE1QnV0dG9uLm9uQ2xpY2sodGhpcy5vblNwaW4xNUNsaWNrSW50ZXJuYWwuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmV0TmFtZSkge1xuICAgICAgICAgICAgdGhpcy5iZXROdW1iZXIgPSB0aGlzLmdldENoaWxkKHRoaXMuYmV0TmFtZSkuYXNUZXh0RmllbGQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaW5jcmVhc2VCZXROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlQmV0QnV0dG9uID0gdGhpcy5nZXRDaGlsZCh0aGlzLmluY3JlYXNlQmV0TmFtZSkuYXNCdXR0b247XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlQmV0QnV0dG9uLm9uQ2xpY2sodGhpcy5vbkluY3JlYXNlQmV0Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGVjcmVhc2VCZXROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmRlY3JlYXNlQmV0QnV0dG9uID0gdGhpcy5nZXRDaGlsZCh0aGlzLmRlY3JlYXNlQmV0TmFtZSkuYXNCdXR0b247XG4gICAgICAgICAgICB0aGlzLmRlY3JlYXNlQmV0QnV0dG9uLm9uQ2xpY2sodGhpcy5vbkRlY3JlYXNlQmV0Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHdpbmtsZU5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMudHdpbmtsZSA9IHRoaXMuZ2V0Q2hpbGQodGhpcy50d2lua2xlTmFtZSkuYXNMb2FkZXI7XG4gICAgICAgICAgICB0aGlzLnR3aW5rbGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvaW5zTmFtZSkge1xuICAgICAgICAgICAgdGhpcy53aW5Db2luID0gdGhpcy5nZXRDaGlsZCh0aGlzLmNvaW5zTmFtZSkuYXNNb2dhZmFOdW1iZXJGaWVsZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF1dG9TcGluQ291bnROYW1lKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldENoaWxkKHRoaXMuYXV0b1NwaW5Db3VudE5hbWUpO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0b1NwaW5Db3VudEZpZWxkID0gY29tcG9uZW50LmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgYXV0byBzcGluIOiuoeaVsOe7hOS7tiR7dGhpcy5hdXRvU3BpbkNvdW50TmFtZX3kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbmZpbml0eU5hbWUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0Q2hpbGQodGhpcy5pbmZpbml0eU5hbWUpO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5maW5pdHkgPSBjb21wb25lbnQuYXNHcmFwaDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYGF1dG8gc3BpbiDorqHmlbDnu4Tku7Yke3RoaXMuaW5maW5pdHlOYW1lfeS4jeWtmOWcqGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZyZWVTcGluQ291bnROYW1lKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldENoaWxkKHRoaXMuZnJlZVNwaW5Db3VudE5hbWUpO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJlZVNwaW5Db3VudEZpZWxkID0gY29tcG9uZW50LmFzVGV4dEZpZWxkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgZnJlZSBzcGluIOiuoeaVsOe7hOS7tiR7dGhpcy5mcmVlU3BpbkNvdW50TmFtZX3kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zcGluVXNlckdvbGQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0Q2hpbGQodGhpcy5zcGluVXNlckdvbGQpO1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvaW5MYWJlbCA9IGNvbXBvbmVudC5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2luRmllbGQgPSB0aGlzLl9jb2luTGFiZWwuYXNNb2dhZmFOdW1iZXJGaWVsZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihgZnJlZSBzcGluIOiuoeaVsOe7hOS7tiR7dGhpcy5zcGluVXNlckdvbGR95LiN5a2Y5ZyoYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5leGl0QnV0dG9uTmFtZSkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRDaGlsZCh0aGlzLmV4aXRCdXR0b25OYW1lKTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkV4aXRCdXR0b24gPSBjb21wb25lbnQuYXNCdXR0b247XG4gICAgICAgICAgICAgICAgdGhpcy5FeGl0QnV0dG9uLm9uQ2xpY2sodGhpcy5vbkV4aXRDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoYGZyZWUgc3BpbiDorqHmlbDnu4Tku7Yke3RoaXMuc3BpblVzZXJHb2xkfeS4jeWtmOWcqGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGVscEJ1dHRvbk5hbWUpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0Q2hpbGQodGhpcy5oZWxwQnV0dG9uTmFtZSk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5IZWxwQnV0dG9uID0gY29tcG9uZW50LmFzQnV0dG9uO1xuICAgICAgICAgICAgICAgIHRoaXMuSGVscEJ1dHRvbi5vbkNsaWNrKHRoaXMub25IZWxwQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBmcmVlIHNwaW4g6K6h5pWw57uE5Lu2JHt0aGlzLnNwaW5Vc2VyR29sZH3kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLlNvdW5kQnV0dG9uTmFtZSkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRDaGlsZCh0aGlzLlNvdW5kQnV0dG9uTmFtZSk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Tb3VuZEJ1dHRvbiA9IGNvbXBvbmVudC5hc0J1dHRvbjtcbiAgICAgICAgICAgICAgICB0aGlzLlNvdW5kQnV0dG9uLm9uQ2xpY2sodGhpcy5vblNvdW5kQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGBmcmVlIHNwaW4g6K6h5pWw57uE5Lu2JHt0aGlzLnNwaW5Vc2VyR29sZH3kuI3lrZjlnKhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsbENoaWxkQ3JlYXRlZCgpIHtcbiAgICAgICAgc3VwZXIuYWxsQ2hpbGRDcmVhdGVkKCk7XG4gICAgICAgIGlmICh0aGlzLnNwaW5CdXR0b25OYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9idXR0b25Mb25nVG91Y2gucmVnaXN0ZXJUb3VjaExvbmcodGhpcy5zcGluQnV0dG9uLm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkQWxsQnV0dG9uTXVzaWModGhpcy5mZ3VpQ29tcG9uZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmt7vliqDmiYDmnInmjInpkq7nmoTpn7PmlYhcbiAgICAgKiBAcGFyYW0gZmd1aUNvbXBvbmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYWRkQWxsQnV0dG9uTXVzaWMoZmd1aUNvbXBvbmVudDogZmd1aS5HQ29tcG9uZW50KTogdm9pZCB7XG4gICAgICAgIGZndWlDb21wb25lbnQuX2NoaWxkcmVuLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0ubm9kZS5uYW1lID09PSBcIkdDb21wb25lbnRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQWxsQnV0dG9uTXVzaWMoaXRlbS5hc0NvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5ub2RlLm5hbWUgPT09IFwiR0J1dHRvblwiKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5ub2RlLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLm9uQnV0dG9uQ2xpY2tNdXNpYy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u55So5oi36YeR5biBXG4gICAgICogQHBhcmFtIHVzZXJDb2luc1xuICAgICAqIEBwYXJhbSBjaGFuZ2VUaW1lXG4gICAgICovXG4gICAgcHVibGljIHNldFVzZXJDb2lucyh1c2VyQ29pbnM6IG51bWJlciwgY2hhbmdlVGltZTogbnVtYmVyID0gMSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zcGluVXNlckdvbGQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0VXNlckNvaW5zXCIpXG4gICAgICAgICAgICB0aGlzLmNvaW5zQ2hhbmdlVGltZSA9IGNoYW5nZVRpbWU7XG4gICAgICAgICAgICB0aGlzLmNvaW5zID0gdXNlckNvaW5zO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkZE1heEJldChiZXQ6IG51bWJlcltdKTogdm9pZCB7XG4gICAgICAgIGxldCBiZXRzID0gdGhpcy5fYmV0cy5jb25jYXQoKTtcbiAgICAgICAgbGV0IGlzQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIGlmIChiZXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJldHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJldFtpXSA9PSBiZXRzW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihcIuetiee6p+WinuWKoOeahOaKteazqOi3n+WNh+e6p+WJjeWtmOWcqOebuOWQjOaKteazqDo6XCIsIGJldFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBiZXRzLmxlbmd0aCAtIDEgJiYgYmV0W2ldID4gYmV0c1tqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmV0cy5wdXNoKGJldFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUJldEJ1dHRvbnNFbmFibGUodGhpcy5pc01pbkJldCwgdGhpcy5pc01heEJldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkZE1heEJldGFkZE1heEJldGFkZE1heEJldDo6XCIsIHRoaXMuX2JldHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluY3JlYXNlQmV0KCk6IG51bWJlciB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5jcmVhc2VCZXRcIilcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSB0aGlzLl9iZXRzLmZpbmRJbmRleCgoYikgPT4gYiA9PSB0aGlzLl9iZXQpO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5fYmV0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5fYmV0cy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmV0ID0gdGhpcy5fYmV0c1tpbmRleF07XG4gICAgICAgIHRoaXMuYmV0Q2hhbmdlZEludGVybmFsKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9iZXQ7XG4gICAgfVxuICAgIHByb3RlY3RlZCBkZWNyZWFzZUJldCgpOiBudW1iZXIge1xuICAgICAgICBjb25zb2xlLmxvZyhcImRlY3JlYXNlQmV0XCIpXG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gdGhpcy5fYmV0cy5maW5kSW5kZXgoKGIpID0+IGIgPT0gdGhpcy5fYmV0KTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmV0ID0gdGhpcy5fYmV0c1tpbmRleF07XG5cbiAgICAgICAgdGhpcy5iZXRDaGFuZ2VkSW50ZXJuYWwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JldDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG1heEJldCgpOiBudW1iZXIge1xuICAgICAgICBsZXQgYmV0ID0gdGhpcy5fYmV0O1xuICAgICAgICBsZXQgYmV0Q2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMuX2JldHMgfHwgdGhpcy5fYmV0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgYmV0ID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJldCA9IHRoaXMuX2JldHNbdGhpcy5fYmV0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmV0ICE9IHRoaXMuX2JldCkge1xuICAgICAgICAgICAgYmV0Q2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZXQgPSBiZXQ7XG4gICAgICAgIGlmIChiZXRDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLmJldENoYW5nZWRJbnRlcm5hbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9iZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeR5biB5aKe6ZW/5Yqo55S7XG4gICAgICogQHBhcmFtIGNvaW5MYWJlbFxuICAgICAqL1xuICAgIHByaXZhdGUgY29pbkluY3JlYXNlQW5pbWUoY29pbkxhYmVsOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGNvaW5zID0gMDtcbiAgICAgICAgaWYgKHRoaXMuX2NvaW5MYWJlbC50ZXh0ID09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvaW5zID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvaW5zID0gVXRpbHMuc3RyVG9OdW1iZXIodGhpcy5fY29pbkxhYmVsLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvaW5MYWJlbC50ZXh0ID0gVXRpbHMuZm9ybWF0TnVtYmVyVG9JbnQoY29pbkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9jb2luRmllbGQucGxheShjb2lucywgcGFyc2VJbnQoY29pbkxhYmVsKSwgdGhpcy5fY29pbkluY3JlYXNlVGltZSk7XG4gICAgfVxuICAgIHB1YmxpYyBjYW5jZWxDb2luSW5jcmVhc2VBbmltZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY29pbkZpZWxkLmNhbmNlbFBsYXkoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZW5hYmxlQWxsQnV0dG9ucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY2FyZEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5jYXJkQnV0dG9uLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jYXJkQnV0dG9uLnRvdWNoYWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmFzdEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5mYXN0QnV0dG9uLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mYXN0QnV0dG9uLnRvdWNoYWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXV0b1NwaW5CdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1NwaW5CdXR0b24uZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmF1dG9TcGluQnV0dG9uLnRvdWNoYWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VCZXRCdXR0b25zRW5hYmxlKHRoaXMuaXNNaW5CZXQsIHRoaXMuaXNNYXhCZXQpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZGlzYWJsZUFsbEJ1dHRvbnNCdXRTcGluKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYXJkQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRCdXR0b24uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jYXJkQnV0dG9uLnRvdWNoYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZhc3RCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuZmFzdEJ1dHRvbi5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmZhc3RCdXR0b24udG91Y2hhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGVjcmVhc2VCZXRCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVjcmVhc2VCZXRCdXR0b24uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kZWNyZWFzZUJldEJ1dHRvbi50b3VjaGFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbmNyZWFzZUJldEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZUJldEJ1dHRvbi5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlQmV0QnV0dG9uLnRvdWNoYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heEJldEJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5tYXhCZXRCdXR0b24uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tYXhCZXRCdXR0b24udG91Y2hhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXV0b1NwaW5CdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1NwaW5CdXR0b24uZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRvU3BpbkJ1dHRvbi50b3VjaGFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgc3RvcFNwaW5DbGljaygpOiB2b2lkIHsgfVxuICAgIHByb3RlY3RlZCBfYXV0b1RpbWVzOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgc3RhdHVzQ2hhbmdlZChzdGF0dXM6IFNsb3RHYW1lU3RhZ2VTdGF0dXMpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCb3R0b21CYXJCYXNlIHN0YXR1c0NoYW5nZWQ9PT09PT09XCIgKyBzdGF0dXMpXG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgbGV0IHNwaW5TdGF0dXMgPSB0aGlzLl9zcGluU3RhdHVzU3RyYXRlZ3kuZ2V0U3BpblN0YXR1cyhcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIHRoaXMuX3NwaW5UeXBlLFxuICAgICAgICAgICAgdGhpcy5fZnJlZUdhbWVUcmlnZ2VyLFxuICAgICAgICAgICAgdGhpcy5fbmV4dEdhbWVNb2RlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc3BpblN0YXR1cyA9IHNwaW5TdGF0dXMuc3BpblN0YXR1cztcbiAgICAgICAgdGhpcy5zcGluQnV0dG9uLmVuYWJsZWQgPSBzcGluU3RhdHVzLmVuYWJsZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VCZXRCdXR0b25zRW5hYmxlKHRoaXMuaXNNaW5CZXQsIHRoaXMuaXNNYXhCZXQpO1xuICAgICAgICBpZiAodGhpcy5fc3BpblR5cGUgIT0gU3BpblR5cGUuU3Bpbikge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQWxsQnV0dG9uc0J1dFNwaW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fbmV4dEdhbWVNb2RlID09IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsICYmIHN0YXR1cyA9PSBTbG90R2FtZVN0YWdlU3RhdHVzLlJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUFsbEJ1dHRvbnMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUFsbEJ1dHRvbnNCdXRTcGluKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8qIOiHquWKqOasoeaVsOWkp+S6jjDkuJRzcGlu54q25oCB5Li66Ieq5Yqo54q25oCB5LiU5LiO5ri45oiP54q25oCB5Li6cmVhZHnnirbmgIHml7bvvIzoh6rliqjnirbmgIHnu6fnu61cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5fYXV0b1RpbWVzID49IDAgJiZcbiAgICAgICAgICAgIHRoaXMuc3BpblN0YXR1cyA9PT0gQm90dG9tQmFyU3BpblN0YXVzLlN0b3BBdXRvU3BpbiAmJlxuICAgICAgICAgICAgc3RhdHVzID09PSBTbG90R2FtZVN0YWdlU3RhdHVzLlJlYWR5XG4gICAgICAgICkge1xuICAgICAgICAgICAgLy8qIOWboOS4uuaji+ebmOWcqOWBnOatouWQjuWboOi9rOWKqOetlueVpeeahOW9seWTjeS8muWkmuasoeinpuWPkXN0YXR1c0NoYW5nZWTvvIzoi6Xmr4/mrKHov5vmnaXpg73miafooYzlu7bml7bmk43kvZzvvIxcbiAgICAgICAgICAgIC8vKiDkvJrlnKjmoIjkuK3mlL7ov5vlpJrkuKpvblNwaW5DbGlja0ludGVybmFs5Ye95pWw77yM5a+86Ie05aSa5qyh6Kem5Y+R77yM5Zug5q2k6ZyA6KaB5Zyo5q+P5qyh5bu25pe25omn6KGM5pe277yMXG4gICAgICAgICAgICAvLyog5riF56m65o6J5LiK5LiA5qyh55qE5bu25pe25pON5L2c77yM5pyA57uI5Y+q5omn6KGM5LiA5qyh5bu25pe2XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3BpbkNsaWNrSW50ZXJuYWwodGhpcy5fYXV0b1RpbWVzLCB0cnVlLCB0aGlzLl9vcmlnaW5UaW1lcyk7XG4gICAgICAgICAgICB9LCB0aGlzLmhvbGRVcFRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q29udHJvbGxlclByb3BlcnR5KHRoaXMuc3BpblN0YXR1c0NvbnRyb2xsZXJOYW1lLCBzcGluU3RhdHVzLnNwaW5TdGF0dXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGFuZ2VCZXRCdXR0b25zRW5hYmxlKGlzTWluOiBib29sZWFuLCBpc01heDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kZWNyZWFzZUJldEJ1dHRvbiAmJiB0aGlzLmluY3JlYXNlQmV0QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmRlY3JlYXNlQmV0QnV0dG9uLmVuYWJsZWQgPSAhaXNNaW47XG4gICAgICAgICAgICB0aGlzLmRlY3JlYXNlQmV0QnV0dG9uLnRvdWNoYWJsZSA9ICFpc01pbjtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VCZXRCdXR0b24uZW5hYmxlZCA9ICFpc01heDtcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VCZXRCdXR0b24udG91Y2hhYmxlID0gIWlzTWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWF4QmV0QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLm1heEJldEJ1dHRvbi5lbmFibGVkID0gIWlzTWF4O1xuICAgICAgICAgICAgdGhpcy5tYXhCZXRCdXR0b24udG91Y2hhYmxlID0gIWlzTWF4O1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBiZXRDaGFuZ2VkSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgICAgIC8vdGhpcy5iZXROdW1iZXIudGV4dCA9IFV0aWxzLm51bVRvQ291bnRpbmdObml0KHRoaXMuYmV0KTtcbiAgICAgICAgdGhpcy5jaGFuZ2VCZXRCdXR0b25zRW5hYmxlKHRoaXMuaXNNaW5CZXQsIHRoaXMuaXNNYXhCZXQpO1xuICAgICAgICB0aGlzLm5vZGUuZW1pdChCb3R0b21CYXJFdmVudC5CRVRfQ0hBTkdFRCwge1xuICAgICAgICAgICAgYmV0OiB0aGlzLmJldCxcbiAgICAgICAgICAgIGlzTWluOiB0aGlzLmlzTWluQmV0LFxuICAgICAgICAgICAgaXNNYXg6IHRoaXMuaXNNYXhCZXQsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5vZGUuZW1pdChcIkJFVF9DSEFOR0VcIiwgdGhpcy5iZXQpO1xuICAgIH1cbiAgICBwdWJsaWMgY2hhbmdlRnJlZVNwaW5Db3VudChmaW5pc2hlZDogbnVtYmVyLCB0b3RhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmZyZWVTcGluQ291bnRGaWVsZCkge1xuICAgICAgICAgICAgdGhpcy5fb3JpZ2luVGltZXMgPSB0b3RhbDtcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW5Db3VudEZpZWxkLnRleHQgPSBgJHt0b3RhbCAtIGZpbmlzaGVkfS8ke3RvdGFsfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGNoYW5nZUF1dG9TcGluQ291bnQoZmluaXNoZWQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hdXRvU3BpbkNvdW50RmllbGQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1NwaW5Db3VudEZpZWxkLnRleHQgPSBmaW5pc2hlZC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkRlY3JlYXNlQmV0Q2xpY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVjcmVhc2VCZXQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uSW5jcmVhc2VCZXRDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbmNyZWFzZUJldCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25NYXhCZXRDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5tYXhCZXQoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRXhpdENsaWNrKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIui/lOWbnuWkp+WOhe+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mu+8mlwiKVxuICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgd2luZG93LmNsb3NlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvZ2luXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkhlbHBDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJzaG93UGF5VGFibGVcIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblNvdW5kQ2xpY2soKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Tb3VuZENsaWNrXCIpXG4gICAgICAgIGlmIChTb3VuZE1nci5nZXRJbnN0YW5jZSgpLmdldFNvdW5kU3RhdHVzKCkpIHtcbiAgICAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkuc2V0U291bmRTdGF0dXMoXCJjbG9zZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkuc2V0U291bmRTdGF0dXMoXCJvcGVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFNvdW5kTWdyLmdldEluc3RhbmNlKCkuZ2V0RWZmZWN0U3RhdHVzKCkpIHtcbiAgICAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkuc2V0RWZmZWN0U3RhdHVzKFwiY2xvc2VcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnNldEVmZmVjdFN0YXR1cyhcIm9wZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uRmFzdENsaWNrSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNGYXN0SW50ZXJuYWwgPSAhdGhpcy5pc0Zhc3Q7XG4gICAgICAgIHRoaXMuZmFzdEJ1dHRvbi5jb250cm9sbGVyc1sxXS5zZWxlY3RlZEluZGV4ID0gdGhpcy5pc0Zhc3QgPyAxIDogMDtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoQm90dG9tQmFyRXZlbnQuRkFTVF9DTElDSywgdGhpcy5pc0Zhc3QpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25BdXRvU3BpbkNsaWNrSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9TcGluQ291bnRGaWVsZCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvU3BpbkNvdW50RmllbGQudGV4dCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcGluVHlwZSA9IFNwaW5UeXBlLkF1dG9TcGluO1xuICAgICAgICB0aGlzLnNwaW5TdGF0dXMgPSBCb3R0b21CYXJTcGluU3RhdXMuU3RvcEF1dG9TcGluO1xuICAgICAgICB0aGlzLm9uU3BpbkNsaWNrSW50ZXJuYWwoOTk5OTk5OSwgdHJ1ZSwgLTEpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25TcGluMTAwQ2xpY2tJbnRlcm5hbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdXRvU3BpbkNvdW50RmllbGQudGV4dCA9IFwiMTAwXCI7XG4gICAgICAgIHRoaXMuc3BpblR5cGUgPSBTcGluVHlwZS5BdXRvU3BpbjtcbiAgICAgICAgdGhpcy5zcGluU3RhdHVzID0gQm90dG9tQmFyU3BpblN0YXVzLlN0b3BBdXRvU3BpbjtcbiAgICAgICAgdGhpcy5vblNwaW5DbGlja0ludGVybmFsKDEwMCwgdHJ1ZSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblNwaW41MENsaWNrSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXV0b1NwaW5Db3VudEZpZWxkLnRleHQgPSBcIjUwXCI7XG4gICAgICAgIHRoaXMuc3BpblR5cGUgPSBTcGluVHlwZS5BdXRvU3BpbjtcbiAgICAgICAgdGhpcy5zcGluU3RhdHVzID0gQm90dG9tQmFyU3BpblN0YXVzLlN0b3BBdXRvU3BpbjtcbiAgICAgICAgdGhpcy5vblNwaW5DbGlja0ludGVybmFsKDUwLCB0cnVlKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uU3BpbjE1Q2xpY2tJbnRlcm5hbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hdXRvU3BpbkNvdW50RmllbGQudGV4dCA9IFwiMTVcIjtcbiAgICAgICAgdGhpcy5zcGluVHlwZSA9IFNwaW5UeXBlLkF1dG9TcGluO1xuICAgICAgICB0aGlzLnNwaW5TdGF0dXMgPSBCb3R0b21CYXJTcGluU3RhdXMuU3RvcEF1dG9TcGluO1xuICAgICAgICB0aGlzLm9uU3BpbkNsaWNrSW50ZXJuYWwoMTUsIHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDplb/mjInmjInpkq7kuovku7blpITnkIZcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25TcGluTG9uZ1RvdWNoSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgICAgIC8vKiBzcGluVHlwZeS4jeS4umF1dG9TcGluTWVudeWSjGF1dG9TcGlu5pe277yM6K6+572uc3BpblR5cGXkuLphdXRvU3Bpbk1lbnVcbiAgICAgICAgY29uc29sZS5sb2coXCJvblNwaW5Mb25nVG91Y2hJbnRlcm5hbFwiKVxuICAgICAgICBpZiAodGhpcy5zcGluVHlwZSA9PT0gU3BpblR5cGUuU3BpbiAmJiB0aGlzLnNwaW5TdGF0dXMgPT09IEJvdHRvbUJhclNwaW5TdGF1cy5SZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVyUHJvcGVydHkodGhpcy5zcGluU3RhdHVzQ29udHJvbGxlck5hbWUsIEJvdHRvbUJhclNwaW5TdGF1cy5BdXRvU3Bpbk1lbnUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uU3BpbkRvdWJsZVRvdWNoSW50ZXJuYWwoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25TcGluRG91YmxlVG91Y2hJbnRlcm5hbFwiKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNwaW7mjInpkq7ngrnlh7vkuovku7blhoXpg6jlpITnkIZcbiAgICAgKiBAcGFyYW0gdGltZXMgc3BpbuasoeaVsFxuICAgICAqIEBwYXJhbSBpc0F1dG8g5piv5ZCm5Li66Ieq5YqoXG4gICAgICogQHBhcmFtIG9yaWdpblRpbWVzIOWIneWni+WAvO+8jOeUqOS6juiHquWKqHNwaW7pgInoh6rliqjml7bvvIzml6DnqbflpKfnmoTliKTmlq1cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25TcGluQ2xpY2tJbnRlcm5hbCh0aW1lczogbnVtYmVyID0gMSwgaXNBdXRvOiBib29sZWFuID0gZmFsc2UsIG9yaWdpblRpbWVzPzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25TcGluQ2xpY2tJbnRlcm5hbFwiKVxuICAgICAgICB0aGlzLmlzQXV0b1NwaW4gPSBpc0F1dG87XG4gICAgICAgIGlmICghdGhpcy5zcGluQnV0dG9uLmVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgICAhdGhpcy5fZnJlZU1vZGVGaW5pc2hlZCAmJlxuICAgICAgICAgICAgdGhpcy5fbmV4dEdhbWVNb2RlID09IFNwaW5SZXN1bHRzR2FtZU1vZGUuTm9ybWFsICYmXG4gICAgICAgICAgICAodGhpcy5fY3VycmVudEdhbWVUeXBlID09IFNwaW5SZXN1bHRzR2FtZU1vZGUuRnJlZVNwaW4gfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50R2FtZVR5cGUgPT0gU3BpblJlc3VsdHNHYW1lTW9kZS5SZXNwaW4pXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9mcmVlTW9kZUZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9mcmVlTW9kZUZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmdhbWUuY2hlY2tDb2luRW5vdWdoKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9yaWdpblRpbWVzKSB7XG4gICAgICAgICAgICB0aGlzLl9vcmlnaW5UaW1lcyA9IHRpbWVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fb3JpZ2luVGltZXMgPSBvcmlnaW5UaW1lcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbmZpbml0eSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29yaWdpblRpbWVzIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5maW5pdHkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZmluaXR5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hdXRvVGltZXMgPSB0aW1lcztcbiAgICAgICAgLy8qIOiusOW9leaAu+WFseiHquWKqOi9rOeahOasoeaVsO+8jOeUqOS6juaJi+WKqOWBnOatouaXtlxuICAgICAgICBpZiAoIXRoaXMuX3RvdGFsQXV0b1NwaW5UaW1lcykge1xuICAgICAgICAgICAgdGhpcy5fdG90YWxBdXRvU3BpblRpbWVzID0gdGltZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyog5omL5Yqo5YGc5q2iYXV0b1NwaW5cbiAgICAgICAgICAgIGlmICh0aGlzLl90b3RhbEF1dG9TcGluVGltZXMgIT09IHRpbWVzICYmICFpc0F1dG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5UeXBlID0gU3BpblR5cGUuU3BpbjtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5TdGF0dXMgPSBCb3R0b21CYXJTcGluU3RhdXMuUmVhZHk7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNwaW5DbGljayh0aW1lcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoQm90dG9tQmFyRXZlbnQuU1BJTl9DTElDSyk7XG4gICAgICAgICAgICAgICAgLy8qIOaJi+WKqOWBnOatouWQjuW9kumbtlxuICAgICAgICAgICAgICAgIHRoaXMuX3RvdGFsQXV0b1NwaW5UaW1lcyA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0dXMgPT0gU2xvdEdhbWVTdGFnZVN0YXR1cy5SZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQWxsQnV0dG9uc0J1dFNwaW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFNwaW5DbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIC8vKiBhdXRvU3BpbueKtuaAgVxuICAgICAgICBpZiAodGhpcy5zcGluU3RhdHVzID09PSBCb3R0b21CYXJTcGluU3RhdXMuU3RvcEF1dG9TcGluKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYXV0b1RpbWVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluVHlwZSA9IFNwaW5UeXBlLlNwaW47XG4gICAgICAgICAgICAgICAgdGhpcy5zcGluU3RhdHVzID0gQm90dG9tQmFyU3BpblN0YXVzLlJlYWR5O1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KEJvdHRvbUJhckV2ZW50LlNQSU5fQ0xJQ0spO1xuICAgICAgICAgICAgICAgIC8vKiBhdXRvU3BpbuiHquWKqOe7k+adn+WQjuW9kumbtlxuICAgICAgICAgICAgICAgIHRoaXMuX3RvdGFsQXV0b1NwaW5UaW1lcyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBbGxCdXR0b25zKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdXRvVGltZXMtLTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG90YWxBdXRvU3BpblRpbWVzID49IDAgJiYgdGhpcy5fb3JpZ2luVGltZXMgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUF1dG9TcGluQ291bnQodGhpcy5fYXV0b1RpbWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLnNwaW5DbGljayh0aW1lcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZS5zcGluQ2xpY2sodGltZXMpO1xuICAgICAgICB0aGlzLm5vZGUuZW1pdChCb3R0b21CYXJFdmVudC5TUElOX0NMSUNLKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog57un57utYXV0b3NwaW5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgY29udGludWVBdXRvU3BpbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblNwaW5DbGlja0ludGVybmFsKHRoaXMuX2F1dG9UaW1lcywgdHJ1ZSwgdGhpcy5fb3JpZ2luVGltZXMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDorr7nva53aW7moYbph5HluIFcbiAgICAgKiBAcGFyYW0gd2luQ29pbnNcbiAgICAgKiBAcGFyYW0gY2hhbmdlVGltZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRXaW5Db2lucyh3aW5Db2luczogbnVtYmVyLCBjaGFuZ2VUaW1lOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIHRoaXMuY29pbnNDaGFuZ2VUaW1lID0gY2hhbmdlVGltZTtcbiAgICAgICAgdGhpcy53aW5Db2lucyA9IHdpbkNvaW5zO1xuICAgIH1cbiAgICBwdWJsaWMgb25TcGluQ2xpY2sobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKEJvdHRvbUJhckV2ZW50LlNQSU5fQ0xJQ0ssIGxpc3RlbmVyLCB0YXJnZXQpO1xuICAgIH1cbiAgICBwdWJsaWMgb2ZmU3BpbkNsaWNrKGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoQm90dG9tQmFyRXZlbnQuU1BJTl9DTElDSywgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhclNwaW5DbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihCb3R0b21CYXJFdmVudC5TUElOX0NMSUNLKTtcbiAgICB9XG4gICAgcHVibGljIG9uQ2hhbGxlbmdlQ2xpY2sobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKEJvdHRvbUJhckV2ZW50LkNIQUxMRU5HRV9DTElDSywgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIHB1YmxpYyBvZmZDaGFsbGVuZ2VDbGljayhsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKEJvdHRvbUJhckV2ZW50LkNIQUxMRU5HRV9DTElDSywgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhckNoYWxsZW5nZUNsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKEJvdHRvbUJhckV2ZW50LkNIQUxMRU5HRV9DTElDSyk7XG4gICAgfVxuICAgIHB1YmxpYyBvbkNhcmRDbGljayhsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUuZW1pdChCb3R0b21CYXJFdmVudC5DQVJEX0NMSUNLKTtcbiAgICB9XG4gICAgcHVibGljIG9uQ2FyZENsaWNrRXZlbnQobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKEJvdHRvbUJhckV2ZW50LkNBUkRfQ0xJQ0ssIGxpc3RlbmVyLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkF1dG9TcGluKGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vbihCb3R0b21CYXJFdmVudC5BVVRPX1NQSU4sIGxpc3RlbmVyLCB0YXJnZXQpO1xuICAgIH1cbiAgICBwdWJsaWMgb2ZmQXV0b1NwaW4obGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihCb3R0b21CYXJFdmVudC5BVVRPX1NQSU4sIGxpc3RlbmVyLCB0YXJnZXQpO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXJBdXRvU3BpbigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihCb3R0b21CYXJFdmVudC5BVVRPX1NQSU4pO1xuICAgIH1cbiAgICBwdWJsaWMgb25GYXN0Q2xpY2sobGlzdGVuZXI6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKEJvdHRvbUJhckV2ZW50LkZBU1RfQ0xJQ0ssIGxpc3RlbmVyLCB0YXJnZXQpO1xuICAgIH1cbiAgICBwdWJsaWMgb2ZmRmFzdENsaWNrKGxpc3RlbmVyOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoQm90dG9tQmFyRXZlbnQuRkFTVF9DTElDSywgbGlzdGVuZXIsIHRhcmdldCk7XG4gICAgfVxuICAgIHB1YmxpYyBjbGVhckZhc3RDbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihCb3R0b21CYXJFdmVudC5GQVNUX0NMSUNLKTtcbiAgICB9XG4gICAgcHVibGljIG9uQmV0Q2hhbmdlZChsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oQm90dG9tQmFyRXZlbnQuQkVUX0NIQU5HRUQsIGxpc3RlbmVyLCB0YXJnZXQpO1xuICAgIH1cbiAgICBwdWJsaWMgb2ZmQmV0Q2hhbmdlZChsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKEJvdHRvbUJhckV2ZW50LkJFVF9DSEFOR0VELCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyQmV0Q2hhbmdlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihCb3R0b21CYXJFdmVudC5CRVRfQ0hBTkdFRCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOmHkeW4geWPmOWMluS6i+S7tlxuICAgICAqIOWPr+S7peWcqOatpOaWueazleS4ree7keWumuWkhOeQhumHkeW4geWPmOWMlueahOS6i+S7tuWSjOmfs+aViFxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB0YXJnZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgb25Db2luQ2hhbmdlZChsaXN0ZW5lcjogRnVuY3Rpb24sIHRhcmdldD86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vZGUub24oQm90dG9tQmFyRXZlbnQuQ09JTl9DSEFOR0VELCBsaXN0ZW5lciwgdGFyZ2V0KTtcbiAgICB9XG4gICAgcHVibGljIGVtaXRDb2luQ2hhbmdlZCh0YXJnZXQ/OiBhbnkpIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoQm90dG9tQmFyRXZlbnQuQ09JTl9DSEFOR0VELCB0YXJnZXQpO1xuICAgIH1cbiAgICBwdWJsaWMgb2ZmQ29pbkNoYW5nZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoQm90dG9tQmFyRXZlbnQuQ09JTl9DSEFOR0VEKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5oyJ6ZKu54K55Ye75pKt5pS+6Z+z5pWI5LqL5Lu2XG4gICAgICog5a2Q57G76YeN6L295q2k5pa55rOV57uZ5oyJ6ZKu57uR5a6a6Z+z5LmQXG4gICAgICovXG4gICAgcHVibGljIG9uQnV0dG9uQ2xpY2tNdXNpYygpOiB2b2lkIHsgfVxufVxuIl19
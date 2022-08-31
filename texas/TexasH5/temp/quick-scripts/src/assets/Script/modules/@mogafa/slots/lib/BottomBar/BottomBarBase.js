"use strict";
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
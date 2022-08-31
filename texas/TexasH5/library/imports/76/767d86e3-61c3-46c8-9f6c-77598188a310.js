"use strict";
cc._RF.push(module, '767d8bjYcNGyJ9sd1mBiKMQ', 'Win');
// Script/modules/@slotsmaster/ui-common/lib/Win/Win.ts

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
exports.Win = void 0;
var Coin_1 = require("../Coin/Coin");
var BigWinSpread_1 = require("../Coin/BigWinSpread");
var WinSpine_1 = require("./WinSpine");
var Popup_1 = require("../Popup");
var RippleSpine_1 = require("../Ripple/RippleSpine");
var SoundMgr_1 = require("../../../../@mogafa/utils/lib/SoundMgr");
var Integral_1 = require("../Coin/Integral");
var Utils_1 = require("../../../../@mogafa/utils/lib/Utils");
var WinType;
(function (WinType) {
    WinType[WinType["BIG"] = 2] = "BIG";
    WinType[WinType["SUPER"] = 3] = "SUPER";
    WinType[WinType["MEGA"] = 4] = "MEGA";
})(WinType || (WinType = {}));
var BIG_WIN_AD = "BIG_WIN_AD";
var Win = /** @class */ (function (_super) {
    __extends(Win, _super);
    function Win() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //* 飞行金币数
        _this._flyCoins = 100;
        //* 飞行积分数
        _this._flyIntegrals = 20;
        //* 金币是否开始飞行
        _this._isCoinFly = false;
        //* 点击缓存
        _this._clickBuffer = 0;
        _this._autoCloseCount = -1;
        //* 倒计时
        _this._countdown = -1;
        return _this;
    }
    Object.defineProperty(Win.prototype, "basePanel", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "animNode", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "buttonOKName", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "goldGrowName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "normalNumName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "componentName", {
        get: function () {
            return "Win";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "closeTime", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "coinEndPos", {
        get: function () {
            return this._coinEndPos;
        },
        set: function (value) {
            this._coinEndPos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "integralEndPos", {
        get: function () {
            return this._integralEndPos;
        },
        set: function (value) {
            this._integralEndPos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "isCoinFly", {
        get: function () {
            return this._isCoinFly;
        },
        set: function (value) {
            this._isCoinFly = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Win.prototype, "autoCloseCount", {
        get: function () {
            return this._autoCloseCount;
        },
        set: function (value) {
            this._autoCloseCount = value;
            if (this.autoCloseCount > 0) {
                this._countdownText.text = this.autoCloseCount + "";
            }
            else if (this.autoCloseCount === 0) {
                this.collectAward();
            }
            else {
                return;
            }
        },
        enumerable: false,
        configurable: true
    });
    Win.prototype.createChildComponents = function () {
        console.log("Win ======createChildComponents");
        _super.prototype.createChildComponents.call(this);
        this.initChildComponents();
    };
    Win.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
        //this.parent.addChild(this.bigWinTable);
        //this._collectButton.x+=180
    };
    Win.prototype.initChildComponents = function () {
        //* bigwin节点及spine
        this._winUpNode = this.fguiComponent.getChild("winUp").node;
        this._winDownNode = this.fguiComponent.getChild("winDown").node;
        this._winUpNode.zIndex = 90;
        this._winUp = new WinSpine_1.default(this._winUpNode);
        this.addChild(this._winUp);
        this._winDown = new WinSpine_1.default(this._winDownNode);
        this.addChild(this._winDown);
        //* 收集按钮
        this._collectButton = this.getChild("collectButton").asButton;
        this._collectButton.onClick(this.collectAward.bind(this));
        //* 双倍收集按钮
        this._doubleButton = this.getChild("doubleButton").asButton;
        this._doubleButton.onClick(this.adButtonClick.bind(this));
        //* 金币、积分文本
        this._coin = this.fguiComponent.getChild("winCoin");
        this._integral = this.fguiComponent.getChild("winIntegral");
        this._coin.node.zIndex = 99;
        this._integral.node.zIndex = 99;
        //* bigwin转盘
        //this.bigWinTable = this.addFguiComponent(PublicTurnTable);
        //* 金币、积分飞行动画终点
        //@ts-ignore
        this.coinEndPos = this.getChild("coin").node.position;
        //@ts-ignore
        this.integralEndPos = this.getChild("integral").node.position;
        //* 加载波纹节点、spine
        this._rippleNode = this.getChild("ripple").node;
        this._rippleNode.zIndex = 99;
        this._rippleSpine = new RippleSpine_1.default(this._rippleNode);
        this.addChild(this._rippleSpine);
        //* 倒计时文本
        this._countdownText = this.getChild("countdown").asTextField;
        this.toggleStaticUI(false);
    };
    /**
     * 收集奖励
     */
    Win.prototype.collectAward = function () {
        console.log("collectAward");
        SoundMgr_1.default.getInstance().playEffect("button");
        if (!this.isCoinFly && this._clickBuffer === 0) {
            // this.unschedule(this.executeCountdown);
            this.unscheduleAllCallbacks();
            this.resetBigWinSpread();
            this._countdownText.visible = false;
            this._clickBuffer++;
            this.isCoinFly = true;
            //* 金币飞行音效
            SoundMgr_1.default.getInstance().playEffect("frame_coins");
            this.stopWinAnimation();
        }
    };
    /**
     * 收集奖励
     */
    Win.prototype.collectAward2 = function () {
        console.log("collectAward2");
        // this.unschedule(this.executeCountdown);
        this.unscheduleAllCallbacks();
        this.resetBigWinSpread();
        this._countdownText.visible = false;
        this._clickBuffer = 0;
        this.fguiComponent.node.off(cc.Node.EventType.TOUCH_END);
        if (this.winFinishedCallback) {
            this.winFinishedCallback(this._rewardCoins, this._rewardIntegral);
            this.winFinishedCallback = null;
        }
        this.stopWinAnimation();
        this.hide();
    };
    /**
     * 双倍收集奖励
     */
    Win.prototype.adButtonClick = function () {
        SoundMgr_1.default.getInstance().playEffect("button");
        this.node.emit(BIG_WIN_AD);
        // this.stopWinAnimation();
    };
    /**
     * 绑定广告按钮点击事件
     * @param listener
     */
    Win.prototype.onAdButtonClick = function (listener) {
        this.node.off(BIG_WIN_AD);
        this.node.on(BIG_WIN_AD, listener);
    };
    Win.prototype.update = function (dt) {
        if (this.isCoinFly) {
            if (this._rewardCoins && this._rewardCoins > 0 && this._flyCoins > 0) {
                this._flyCoins -= 2;
                this.coinFly();
                this._rippleSpine.ripple();
            }
            else if (this._rewardIntegral && this._rewardIntegral > 0 && this._flyIntegrals > 0) {
                this._flyIntegrals -= 2;
                this.integralFly();
            }
            else {
                this.isCoinFly = false;
                this.coinFlyCallback();
            }
        }
    };
    /**
     * 金币动画执行完毕回调
     */
    Win.prototype.coinFlyCallback = function () {
        var _this = this;
        if (this._clickBuffer > 1) {
            return;
        }
        this.scheduleOnce(function () {
            _this._rippleSpine.closeRipple();
            //* 停止金币飞行音效
            SoundMgr_1.default.getInstance().stopEffect("frame_coins");
            _this.hide();
            if (_this.winFinishedCallback) {
                _this.winFinishedCallback(_this._rewardCoins, _this._rewardIntegral);
                _this.winFinishedCallback = null;
            }
        }, 1.2);
    };
    /**
     * 执行金币飞行动画
     */
    Win.prototype.coinFly = function () {
        var _this = this;
        var coin = this.addFguiComponent(Coin_1.Coin);
        coin.onAllChildCreated(function () {
            var startPos = cc.v2(660 + Math.random() * 200, -500 - Math.random() * 100);
            coin.coinFly(startPos, _this.coinEndPos);
        });
    };
    /**
     * 执行积分飞行动画
     */
    Win.prototype.integralFly = function () {
        var _this = this;
        var integral = this.addFguiComponent(Integral_1.Integral);
        integral.onAllChildCreated(function () {
            var startPos = cc.v2(660 + Math.random() * 200, -650 - Math.random() * 100);
            integral.coinFly(startPos, _this.integralEndPos);
        });
    };
    /**
     * 弹出win框
     * @param WinType win框类型
     * @param coin 金币数
     * @param countdown 倒计时
     * @param gameWheel 游戏转盘数据
     * @param callback win框关闭后回调
     */
    Win.prototype.popUpWin = function (winType, coin, countdown, gameWheel, callback) {
        var _this = this;
        this.resetFly();
        this._rewardCoins = !isNaN(coin) ? coin : 0;
        // this._rewardIntegral = !isNaN(integral) ? integral : 0;
        this.winFinishedCallback = callback;
        this._gameWheel = gameWheel;
        this._winType = winType;
        this._countdown = countdown;
        this.autoCloseCount = this._countdown;
        this.show();
        this.fguiComponent.node.on(cc.Node.EventType.TOUCH_END, this.collectAward2, this);
        //* 获取到win框类型后执行spine动画
        switch (winType) {
            case WinType.BIG:
                this._winUp.bigWin();
                this._winDown.bigWinBg();
                break;
            case WinType.SUPER:
                this._winUp.superWin();
                this._winDown.superWinBg();
                break;
            case WinType.MEGA:
                this._winUp.megaWin();
                this._winDown.megaWinBg();
                break;
            default:
                this._winUp.bigWin();
                this._winDown.bigWinBg();
                break;
        }
        this.scheduleOnce(function () {
            //* 播放win框背景音效
            SoundMgr_1.default.getInstance().playEffect("big_win");
            _this.showCoin(coin);
            _this._collectButton.visible = true;
            _this.countdown();
        }, 0.6);
        //* 延时展示按钮
        //this.scheduleOnce(() => {
        //this._collectButton.visible = true;
        //this._doubleButton.visible = true;
        // this._countdownText.visible = true;
        //this.countdown();
        //}, 2);
    };
    /**
     * 倒计时
     */
    Win.prototype.countdown = function () {
        if (this._countdown < 0) {
            return;
        }
        this.schedule(this.executeCountdown.bind(this), 1, this._countdown);
    };
    /**
     * 执行倒计时
     */
    Win.prototype.executeCountdown = function () {
        this.autoCloseCount--;
    };
    /**
     * 金币展示
     * @param coin
     * @param integral
     */
    Win.prototype.showCoin = function (coin, integral) {
        var winCoinField = this._coin.asTextField;
        var winIntegralField = this._integral.asTextField;
        winCoinField.text = Utils_1.Utils.formatNumberToInt("0");
        winIntegralField.text = Utils_1.Utils.formatNumberToInt("0");
        this._coin.visible = true;
        // this._integral.visible = true;
        winCoinField.asMogafaNumberField().play(0, coin, 2);
        // winIntegralField.asMogafaNumberField().play(0, integral, 1);
        this._integral;
        //* 执行金币飞洒动画
        this.coinSpread();
        //* 播放金币飞洒音效
        SoundMgr_1.default.getInstance().playEffect("big_win_cions");
        this.scheduleOnce(function () {
            SoundMgr_1.default.getInstance().stopEffect("big_win_cions");
        }, 4);
    };
    /**
     * 关闭WIN弹窗动画
     */
    Win.prototype.stopWinAnimation = function () {
        var _this = this;
        //* 停止播放win框背景音效
        SoundMgr_1.default.getInstance().stopEffect("big_win");
        SoundMgr_1.default.getInstance().stopEffect("big_win_cions");
        switch (this._winType) {
            case WinType.BIG:
                this._winUp.bgWinHide();
                this._winDown.bgWinBgHide();
                break;
            case WinType.SUPER:
                this._winUp.superWinHide();
                this._winDown.superWinBgHide();
                break;
            case WinType.MEGA:
                this._winUp.megaWinHide();
                this._winDown.megaWinBgHide();
                break;
            default:
                this._winUp.bgWinHide();
                this._winDown.bgWinBgHide();
                break;
        }
        this._clickBuffer = 0;
        this.scheduleOnce(function () {
            _this.toggleStaticUI(false);
        }, 0.3);
    };
    /**
     * 金币飞洒动画
     * @param interval
     * @param repeat
     */
    Win.prototype.sccoinSpread = function () {
        var coin1 = this.addFguiComponent(BigWinSpread_1.BigWinSpread);
        coin1.onAllChildCreated(coin1.degree30CoinsLeft);
        var coin2 = this.addFguiComponent(BigWinSpread_1.BigWinSpread);
        coin2.onAllChildCreated(coin2.degree30CoinsRight);
        var coin3 = this.addFguiComponent(BigWinSpread_1.BigWinSpread);
        coin3.onAllChildCreated(coin3.degree50CoinsLeft);
        var coin4 = this.addFguiComponent(BigWinSpread_1.BigWinSpread);
        coin4.onAllChildCreated(coin4.degree50CoinsRight);
        var coin5 = this.addFguiComponent(BigWinSpread_1.BigWinSpread);
        coin5.onAllChildCreated(coin5.degree70CoinsLeft);
        var coin6 = this.addFguiComponent(BigWinSpread_1.BigWinSpread);
        coin6.onAllChildCreated(coin6.degree70CoinsRight);
        var coin7 = this.addFguiComponent(BigWinSpread_1.BigWinSpread);
        coin7.onAllChildCreated(coin7.verticalCoinsLeft);
        var coin8 = this.addFguiComponent(BigWinSpread_1.BigWinSpread);
        coin8.onAllChildCreated(coin8.verticalCoinsRight);
    };
    Win.prototype.coinSpread = function (interval, repeat) {
        if (interval === void 0) { interval = 0.1; }
        if (repeat === void 0) { repeat = 20; }
        this.schedule(this.sccoinSpread.bind(this), 0.1, repeat - 1);
    };
    /**
     * 显示/隐藏静态UI
     */
    Win.prototype.toggleStaticUI = function (isShow) {
        this._coin.visible = isShow;
        this._integral.visible = isShow;
        this._collectButton.visible = isShow;
        this._doubleButton.visible = isShow;
        // this._countdownText.visible = isShow;
    };
    /**
     * 重置飞行参数
     */
    Win.prototype.resetFly = function () {
        console.log("resetFly");
        this._rewardCoins = 0;
        this._rewardIntegral = 0;
        this._flyCoins = 100;
        this._flyIntegrals = 20;
    };
    Win.prototype.resetBigWinSpread = function () {
        var list = [];
        for (var i = 0; i < this._children.length; i++) {
            var value = this._children[i];
            if (i > 2) {
                if (value.fguiComponent && value.fguiComponent.node) {
                    value.fguiComponent.node.destroy();
                }
            }
            else {
                list.push(value);
            }
        }
        this._children = list;
    };
    return Win;
}(Popup_1.Popup));
exports.Win = Win;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/Win/Win.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxXaW5cXFdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEscUNBQW9DO0FBQ3BDLHFEQUFvRDtBQUNwRCx1Q0FBa0M7QUFDbEMsa0NBQWlDO0FBQ2pDLHFEQUFnRDtBQUNoRCxtRUFBOEQ7QUFDOUQsNkNBQTRDO0FBQzVDLDZEQUE0RDtBQUk1RCxJQUFLLE9BSUo7QUFKRCxXQUFLLE9BQU87SUFDUixtQ0FBTyxDQUFBO0lBQ1AsdUNBQUssQ0FBQTtJQUNMLHFDQUFJLENBQUE7QUFDUixDQUFDLEVBSkksT0FBTyxLQUFQLE9BQU8sUUFJWDtBQUVELElBQU0sVUFBVSxHQUFXLFlBQVksQ0FBQztBQUV4QztJQUF5Qix1QkFBSztJQUE5QjtRQUFBLHFFQTRkQztRQXRiRyxTQUFTO1FBQ0YsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUMvQixTQUFTO1FBQ0YsbUJBQWEsR0FBVyxFQUFFLENBQUM7UUFDbEMsWUFBWTtRQUNMLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBS25DLFFBQVE7UUFDRCxrQkFBWSxHQUFXLENBQUMsQ0FBQztRQXlDekIscUJBQWUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQWNwQyxPQUFPO1FBQ0EsZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQzs7SUFtWG5DLENBQUM7SUEzZEcsc0JBQWMsMEJBQVM7YUFBdkI7WUFDSSxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMseUJBQVE7YUFBdEI7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyw2QkFBWTthQUExQjtZQUNJLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyw2QkFBWTthQUExQjtZQUNJLE1B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QUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBR00sK0JBQWlCLEdBQXhCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFBO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtvQkFDakQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3RDO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUNuQjtTQUNKO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7SUFDekIsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQTVkQSxBQTRkQyxDQTVkd0IsYUFBSyxHQTRkN0I7QUE1ZFksa0JBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHsgQ29pbiB9IGZyb20gXCIuLi9Db2luL0NvaW5cIjtcbmltcG9ydCB7IEJpZ1dpblNwcmVhZCB9IGZyb20gXCIuLi9Db2luL0JpZ1dpblNwcmVhZFwiO1xuaW1wb3J0IFdpblNwaW5lIGZyb20gXCIuL1dpblNwaW5lXCI7IFxuaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi4vUG9wdXBcIjsgXG5pbXBvcnQgUmlwcGxlU3BpbmUgZnJvbSBcIi4uL1JpcHBsZS9SaXBwbGVTcGluZVwiO1xuaW1wb3J0IFNvdW5kTWdyIGZyb20gXCIuLi8uLi8uLi8uLi9AbW9nYWZhL3V0aWxzL2xpYi9Tb3VuZE1nclwiO1xuaW1wb3J0IHsgSW50ZWdyYWwgfSBmcm9tIFwiLi4vQ29pbi9JbnRlZ3JhbFwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQG1vZ2FmYS91dGlscy9saWIvVXRpbHNcIjtcbmltcG9ydCBTcGluUmVzdWx0c0dhbWVXaGVlbCBmcm9tIFwiLi4vLi4vLi4vLi4vc3Bpbi1yZXN1bHQvU3BpblJlc3VsdHNHYW1lV2hlZWxcIjtcblxuXG5lbnVtIFdpblR5cGUge1xuICAgIEJJRyA9IDIsXG4gICAgU1VQRVIsXG4gICAgTUVHQSxcbn1cblxuY29uc3QgQklHX1dJTl9BRDogc3RyaW5nID0gXCJCSUdfV0lOX0FEXCI7XG5cbmV4cG9ydCBjbGFzcyBXaW4gZXh0ZW5kcyBQb3B1cCB7XG4gICAgcHJvdGVjdGVkIGdldCBiYXNlUGFuZWwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgYW5pbU5vZGUoKTogY2MuTm9kZVtdIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgYnV0dG9uT0tOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGdvbGRHcm93TmFtZSgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IG5vcm1hbE51bU5hbWUoKTogc3RyaW5nW10ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHVibGljIF93aW5VcDogV2luU3BpbmU7XG4gICAgcHVibGljIF93aW5Eb3duOiBXaW5TcGluZTtcbiAgICAvLyogd2luIHVw6IqC54K5XG4gICAgcHVibGljIF93aW5VcE5vZGU6IGNjLk5vZGU7XG4gICAgLy8qIHdpbiBkb3du6IqC54K5XG4gICAgcHVibGljIF93aW5Eb3duTm9kZTogY2MuTm9kZTtcbiAgICAvLyog5pS26ZuG5oyJ6ZKuXG4gICAgcHVibGljIF9jb2xsZWN0QnV0dG9uOiBmZ3VpLkdCdXR0b247XG4gICAgLy8qIOWPjOWIq+aMiemSrlxuICAgIHB1YmxpYyBfZG91YmxlQnV0dG9uOiBmZ3VpLkdCdXR0b247XG4gICAgLy8qIOmHkeW4geWvueixoVxuICAgIHB1YmxpYyBfY29pbjogZmd1aS5HT2JqZWN0O1xuICAgIC8vKiDnp6/liIblr7nosaFcbiAgICBwdWJsaWMgX2ludGVncmFsOiBmZ3VpLkdPYmplY3Q7XG4gICAgLy8qIHdpbuexu+Wei1xuICAgIHB1YmxpYyBfd2luVHlwZTogbnVtYmVyO1xuICAgIC8vcHJpdmF0ZSBiaWdXaW5UYWJsZTogUHVibGljVHVyblRhYmxlO1xuICAgIHB1YmxpYyBfZ2FtZVdoZWVsOiBTcGluUmVzdWx0c0dhbWVXaGVlbDtcbiAgICAvLyog6YeR5biB5Yqo55S757uT5p2f5Z2Q5qCHXG4gICAgcHVibGljIF9jb2luRW5kUG9zOiBjYy5WZWMyO1xuICAgIC8vKiDnp6/liIbliqjnlLvnu5PmnZ/lnZDmoIdcbiAgICBwdWJsaWMgX2ludGVncmFsRW5kUG9zOiBjYy5WZWMyO1xuICAgIC8vKiDpo57ooYzph5HluIHmlbBcbiAgICBwdWJsaWMgX2ZseUNvaW5zOiBudW1iZXIgPSAxMDA7XG4gICAgLy8qIOmjnuihjOenr+WIhuaVsFxuICAgIHB1YmxpYyBfZmx5SW50ZWdyYWxzOiBudW1iZXIgPSAyMDtcbiAgICAvLyog6YeR5biB5piv5ZCm5byA5aeL6aOe6KGMXG4gICAgcHVibGljIF9pc0NvaW5GbHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLyog5aWW5Yqx6YeR5biBXG4gICAgcHVibGljIF9yZXdhcmRDb2luczogbnVtYmVyO1xuICAgIC8vKiDlpZblirHnp6/liIZcbiAgICBwdWJsaWMgX3Jld2FyZEludGVncmFsOiBudW1iZXI7XG4gICAgLy8qIOeCueWHu+e8k+WtmFxuICAgIHB1YmxpYyBfY2xpY2tCdWZmZXI6IG51bWJlciA9IDA7XG4gICAgLy8qIOazoue6ueiKgueCuVxuICAgIHB1YmxpYyBfcmlwcGxlTm9kZTogY2MuTm9kZTtcbiAgICAvLyog5rOi57q5c3BpbmVcbiAgICBwdWJsaWMgX3JpcHBsZVNwaW5lOiBSaXBwbGVTcGluZTtcbiAgICAvLyog5YCS6K6h5pe2XG4gICAgcHVibGljIF9jb3VudGRvd25UZXh0OiBmZ3VpLkdUZXh0RmllbGQ7XG5cbiAgICBwdWJsaWMgX2J0bmdyb3VuZDogY2MuQnV0dG9uO1xuXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdhbWVDb21tb25cIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDb21tb25cIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIldpblwiO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNsb3NlVGltZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29pbkVuZFBvcygpOiBjYy5WZWMyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvaW5FbmRQb3M7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgY29pbkVuZFBvcyh2YWx1ZTogY2MuVmVjMikge1xuICAgICAgICB0aGlzLl9jb2luRW5kUG9zID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaW50ZWdyYWxFbmRQb3MoKTogY2MuVmVjMiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlZ3JhbEVuZFBvcztcbiAgICB9XG4gICAgcHVibGljIHNldCBpbnRlZ3JhbEVuZFBvcyh2YWx1ZTogY2MuVmVjMikge1xuICAgICAgICB0aGlzLl9pbnRlZ3JhbEVuZFBvcyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGlzQ29pbkZseSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29pbkZseTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGlzQ29pbkZseSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9pc0NvaW5GbHkgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIF9hdXRvQ2xvc2VDb3VudDogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIGdldCBhdXRvQ2xvc2VDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0b0Nsb3NlQ291bnQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgYXV0b0Nsb3NlQ291bnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9hdXRvQ2xvc2VDb3VudCA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5hdXRvQ2xvc2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2NvdW50ZG93blRleHQudGV4dCA9IHRoaXMuYXV0b0Nsb3NlQ291bnQgKyBcIlwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b0Nsb3NlQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdEF3YXJkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8qIOWAkuiuoeaXtlxuICAgIHB1YmxpYyBfY291bnRkb3duOiBudW1iZXIgPSAtMTtcblxuICAgIHByb3RlY3RlZCBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2luID09PT09PWNyZWF0ZUNoaWxkQ29tcG9uZW50c1wiKVxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5pbml0Q2hpbGRDb21wb25lbnRzKClcbiAgICB9XG5cbiAgICBhbGxDaGlsZENyZWF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLmFsbENoaWxkQ3JlYXRlZCgpO1xuICAgICAgICAvL3RoaXMucGFyZW50LmFkZENoaWxkKHRoaXMuYmlnV2luVGFibGUpO1xuICAgICAgICAvL3RoaXMuX2NvbGxlY3RCdXR0b24ueCs9MTgwXG5cblxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0Q2hpbGRDb21wb25lbnRzKCkge1xuICAgICAgICAvLyogYmlnd2lu6IqC54K55Y+Kc3BpbmVcbiAgICAgICAgdGhpcy5fd2luVXBOb2RlID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwid2luVXBcIikubm9kZTtcbiAgICAgICAgdGhpcy5fd2luRG93bk5vZGUgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJ3aW5Eb3duXCIpLm5vZGU7XG4gICAgICAgIHRoaXMuX3dpblVwTm9kZS56SW5kZXggPSA5MDtcbiAgICAgICAgdGhpcy5fd2luVXAgPSBuZXcgV2luU3BpbmUodGhpcy5fd2luVXBOb2RlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLl93aW5VcCk7XG4gICAgICAgIHRoaXMuX3dpbkRvd24gPSBuZXcgV2luU3BpbmUodGhpcy5fd2luRG93bk5vZGUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3dpbkRvd24pO1xuICAgICAgICAvLyog5pS26ZuG5oyJ6ZKuXG4gICAgICAgIHRoaXMuX2NvbGxlY3RCdXR0b24gPSB0aGlzLmdldENoaWxkKFwiY29sbGVjdEJ1dHRvblwiKS5hc0J1dHRvbjtcbiAgICAgICAgdGhpcy5fY29sbGVjdEJ1dHRvbi5vbkNsaWNrKHRoaXMuY29sbGVjdEF3YXJkLmJpbmQodGhpcykpO1xuICAgICAgICAvLyog5Y+M5YCN5pS26ZuG5oyJ6ZKuXG4gICAgICAgIHRoaXMuX2RvdWJsZUJ1dHRvbiA9IHRoaXMuZ2V0Q2hpbGQoXCJkb3VibGVCdXR0b25cIikuYXNCdXR0b247XG4gICAgICAgIHRoaXMuX2RvdWJsZUJ1dHRvbi5vbkNsaWNrKHRoaXMuYWRCdXR0b25DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8qIOmHkeW4geOAgeenr+WIhuaWh+acrFxuICAgICAgICB0aGlzLl9jb2luID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwid2luQ29pblwiKTtcbiAgICAgICAgdGhpcy5faW50ZWdyYWwgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJ3aW5JbnRlZ3JhbFwiKTtcbiAgICAgICAgdGhpcy5fY29pbi5ub2RlLnpJbmRleCA9IDk5O1xuICAgICAgICB0aGlzLl9pbnRlZ3JhbC5ub2RlLnpJbmRleCA9IDk5O1xuICAgICAgICAvLyogYmlnd2lu6L2s55uYXG4gICAgICAgIC8vdGhpcy5iaWdXaW5UYWJsZSA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChQdWJsaWNUdXJuVGFibGUpO1xuICAgICAgICAvLyog6YeR5biB44CB56ev5YiG6aOe6KGM5Yqo55S757uI54K5XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLmNvaW5FbmRQb3MgPSB0aGlzLmdldENoaWxkKFwiY29pblwiKS5ub2RlLnBvc2l0aW9uO1xuICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIHRoaXMuaW50ZWdyYWxFbmRQb3MgPSB0aGlzLmdldENoaWxkKFwiaW50ZWdyYWxcIikubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgLy8qIOWKoOi9veazoue6ueiKgueCueOAgXNwaW5lXG4gICAgICAgIHRoaXMuX3JpcHBsZU5vZGUgPSB0aGlzLmdldENoaWxkKFwicmlwcGxlXCIpLm5vZGU7XG4gICAgICAgIHRoaXMuX3JpcHBsZU5vZGUuekluZGV4ID0gOTk7XG4gICAgICAgIHRoaXMuX3JpcHBsZVNwaW5lID0gbmV3IFJpcHBsZVNwaW5lKHRoaXMuX3JpcHBsZU5vZGUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuX3JpcHBsZVNwaW5lKTtcbiAgICAgICAgLy8qIOWAkuiuoeaXtuaWh+acrFxuICAgICAgICB0aGlzLl9jb3VudGRvd25UZXh0ID0gdGhpcy5nZXRDaGlsZChcImNvdW50ZG93blwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgdGhpcy50b2dnbGVTdGF0aWNVSShmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pS26ZuG5aWW5YqxXG4gICAgICovXG4gICAgcHVibGljIGNvbGxlY3RBd2FyZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb2xsZWN0QXdhcmRcIilcbiAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KFwiYnV0dG9uXCIpO1xuICAgICAgICBpZiAoIXRoaXMuaXNDb2luRmx5ICYmIHRoaXMuX2NsaWNrQnVmZmVyID09PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnVuc2NoZWR1bGUodGhpcy5leGVjdXRlQ291bnRkb3duKTtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXG4gICAgICAgICAgICB0aGlzLnJlc2V0QmlnV2luU3ByZWFkKCk7XG4gICAgICAgICAgICB0aGlzLl9jb3VudGRvd25UZXh0LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2NsaWNrQnVmZmVyKys7XG4gICAgICAgICAgICB0aGlzLmlzQ29pbkZseSA9IHRydWU7XG4gICAgICAgICAgICAvLyog6YeR5biB6aOe6KGM6Z+z5pWIXG4gICAgICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoXCJmcmFtZV9jb2luc1wiKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcFdpbkFuaW1hdGlvbigpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmlLbpm4blpZblirFcbiAgICAgKi9cbiAgICBwdWJsaWMgY29sbGVjdEF3YXJkMigpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb2xsZWN0QXdhcmQyXCIpXG5cbiAgICAgICAgLy8gdGhpcy51bnNjaGVkdWxlKHRoaXMuZXhlY3V0ZUNvdW50ZG93bik7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXG4gICAgICAgIHRoaXMucmVzZXRCaWdXaW5TcHJlYWQoKTtcbiAgICAgICAgdGhpcy5fY291bnRkb3duVGV4dC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NsaWNrQnVmZmVyID0gMDtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORClcbiAgICAgICAgaWYgKHRoaXMud2luRmluaXNoZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy53aW5GaW5pc2hlZENhbGxiYWNrKHRoaXMuX3Jld2FyZENvaW5zLCB0aGlzLl9yZXdhcmRJbnRlZ3JhbCk7XG4gICAgICAgICAgICB0aGlzLndpbkZpbmlzaGVkQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcFdpbkFuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLmhpZGUoKVxuXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWPjOWAjeaUtumbhuWlluWKsVxuICAgICAqL1xuICAgIHB1YmxpYyBhZEJ1dHRvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMubm9kZS5lbWl0KEJJR19XSU5fQUQpO1xuICAgICAgICAvLyB0aGlzLnN0b3BXaW5BbmltYXRpb24oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog57uR5a6a5bm/5ZGK5oyJ6ZKu54K55Ye75LqL5Lu2XG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICovXG4gICAgcHVibGljIG9uQWRCdXR0b25DbGljayhsaXN0ZW5lcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihCSUdfV0lOX0FEKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKEJJR19XSU5fQUQsIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pc0NvaW5GbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRDb2lucyAmJiB0aGlzLl9yZXdhcmRDb2lucyA+IDAgJiYgdGhpcy5fZmx5Q29pbnMgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmx5Q29pbnMgLT0gMjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvaW5GbHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yaXBwbGVTcGluZS5yaXBwbGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmV3YXJkSW50ZWdyYWwgJiYgdGhpcy5fcmV3YXJkSW50ZWdyYWwgPiAwICYmIHRoaXMuX2ZseUludGVncmFscyA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mbHlJbnRlZ3JhbHMgLT0gMjtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVncmFsRmx5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2luRmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2luRmx5Q2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHkeW4geWKqOeUu+aJp+ihjOWujOavleWbnuiwg1xuICAgICAqL1xuICAgIHB1YmxpYyBjb2luRmx5Q2FsbGJhY2soKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jbGlja0J1ZmZlciA+IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yaXBwbGVTcGluZS5jbG9zZVJpcHBsZSgpO1xuICAgICAgICAgICAgLy8qIOWBnOatoumHkeW4gemjnuihjOmfs+aViFxuICAgICAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5zdG9wRWZmZWN0KFwiZnJhbWVfY29pbnNcIik7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLndpbkZpbmlzaGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbkZpbmlzaGVkQ2FsbGJhY2sodGhpcy5fcmV3YXJkQ29pbnMsIHRoaXMuX3Jld2FyZEludGVncmFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLndpbkZpbmlzaGVkQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxLjIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaJp+ihjOmHkeW4gemjnuihjOWKqOeUu1xuICAgICAqL1xuICAgIHB1YmxpYyBjb2luRmx5KCk6IHZvaWQge1xuICAgICAgICBsZXQgY29pbjogQ29pbiA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChDb2luKTtcbiAgICAgICAgY29pbi5vbkFsbENoaWxkQ3JlYXRlZCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RhcnRQb3M6IGNjLlZlYzIgPSBjYy52Mig2NjAgKyBNYXRoLnJhbmRvbSgpICogMjAwLCAtNTAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgICAgICBjb2luLmNvaW5GbHkoc3RhcnRQb3MsIHRoaXMuY29pbkVuZFBvcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmiafooYznp6/liIbpo57ooYzliqjnlLtcbiAgICAgKi9cbiAgICBwdWJsaWMgaW50ZWdyYWxGbHkoKTogdm9pZCB7XG4gICAgICAgIGxldCBpbnRlZ3JhbDogSW50ZWdyYWwgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoSW50ZWdyYWwpO1xuICAgICAgICBpbnRlZ3JhbC5vbkFsbENoaWxkQ3JlYXRlZCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3RhcnRQb3M6IGNjLlZlYzIgPSBjYy52Mig2NjAgKyBNYXRoLnJhbmRvbSgpICogMjAwLCAtNjUwIC0gTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgICAgICBpbnRlZ3JhbC5jb2luRmx5KHN0YXJ0UG9zLCB0aGlzLmludGVncmFsRW5kUG9zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHdpbkZpbmlzaGVkQ2FsbGJhY2s6IEZ1bmN0aW9uO1xuXG4gICAgLyoqXG4gICAgICog5by55Ye6d2lu5qGGXG4gICAgICogQHBhcmFtIFdpblR5cGUgd2lu5qGG57G75Z6LXG4gICAgICogQHBhcmFtIGNvaW4g6YeR5biB5pWwXG4gICAgICogQHBhcmFtIGNvdW50ZG93biDlgJLorqHml7ZcbiAgICAgKiBAcGFyYW0gZ2FtZVdoZWVsIOa4uOaIj+i9rOebmOaVsOaNrlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB3aW7moYblhbPpl63lkI7lm57osINcbiAgICAgKi9cbiAgICBwdWJsaWMgcG9wVXBXaW4oXG4gICAgICAgIHdpblR5cGU6IG51bWJlcixcbiAgICAgICAgY29pbjogbnVtYmVyLFxuICAgICAgICBjb3VudGRvd246IG51bWJlcixcbiAgICAgICAgZ2FtZVdoZWVsPzogU3BpblJlc3VsdHNHYW1lV2hlZWwsXG4gICAgICAgIGNhbGxiYWNrPzogRnVuY3Rpb25cbiAgICApIHtcbiAgICAgICAgdGhpcy5yZXNldEZseSgpO1xuICAgICAgICB0aGlzLl9yZXdhcmRDb2lucyA9ICFpc05hTihjb2luKSA/IGNvaW4gOiAwO1xuICAgICAgICAvLyB0aGlzLl9yZXdhcmRJbnRlZ3JhbCA9ICFpc05hTihpbnRlZ3JhbCkgPyBpbnRlZ3JhbCA6IDA7XG4gICAgICAgIHRoaXMud2luRmluaXNoZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLl9nYW1lV2hlZWwgPSBnYW1lV2hlZWw7XG4gICAgICAgIHRoaXMuX3dpblR5cGUgPSB3aW5UeXBlO1xuICAgICAgICB0aGlzLl9jb3VudGRvd24gPSBjb3VudGRvd247XG4gICAgICAgIHRoaXMuYXV0b0Nsb3NlQ291bnQgPSB0aGlzLl9jb3VudGRvd247XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY29sbGVjdEF3YXJkMiwgdGhpcylcbiAgICAgICAgLy8qIOiOt+WPluWIsHdpbuahhuexu+Wei+WQjuaJp+ihjHNwaW5l5Yqo55S7XG4gICAgICAgIHN3aXRjaCAod2luVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBXaW5UeXBlLkJJRzpcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5VcC5iaWdXaW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5Eb3duLmJpZ1dpbkJnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFdpblR5cGUuU1VQRVI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2luVXAuc3VwZXJXaW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5Eb3duLnN1cGVyV2luQmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgV2luVHlwZS5NRUdBOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpblVwLm1lZ2FXaW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5Eb3duLm1lZ2FXaW5CZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5VcC5iaWdXaW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl93aW5Eb3duLmJpZ1dpbkJnKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy8qIOaSreaUvndpbuahhuiDjOaZr+mfs+aViFxuICAgICAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KFwiYmlnX3dpblwiKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvaW4oY29pbik7XG4gICAgICAgICAgICB0aGlzLl9jb2xsZWN0QnV0dG9uLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb3VudGRvd24oKTtcblxuICAgICAgICB9LCAwLjYpO1xuICAgICAgICAvLyog5bu25pe25bGV56S65oyJ6ZKuXG4gICAgICAgIC8vdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAvL3RoaXMuX2NvbGxlY3RCdXR0b24udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vdGhpcy5fZG91YmxlQnV0dG9uLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLl9jb3VudGRvd25UZXh0LnZpc2libGUgPSB0cnVlO1xuICAgICAgICAvL3RoaXMuY291bnRkb3duKCk7XG4gICAgICAgIC8vfSwgMik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5YCS6K6h5pe2XG4gICAgICovXG4gICAgcHVibGljIGNvdW50ZG93bigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvdW50ZG93biA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZXhlY3V0ZUNvdW50ZG93bi5iaW5kKHRoaXMpLCAxLCB0aGlzLl9jb3VudGRvd24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaJp+ihjOWAkuiuoeaXtlxuICAgICAqL1xuICAgIHB1YmxpYyBleGVjdXRlQ291bnRkb3duKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmF1dG9DbG9zZUNvdW50LS07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6YeR5biB5bGV56S6XG4gICAgICogQHBhcmFtIGNvaW5cbiAgICAgKiBAcGFyYW0gaW50ZWdyYWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc2hvd0NvaW4oY29pbjogbnVtYmVyLCBpbnRlZ3JhbD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgd2luQ29pbkZpZWxkID0gdGhpcy5fY29pbi5hc1RleHRGaWVsZDtcbiAgICAgICAgbGV0IHdpbkludGVncmFsRmllbGQgPSB0aGlzLl9pbnRlZ3JhbC5hc1RleHRGaWVsZDtcbiAgICAgICAgd2luQ29pbkZpZWxkLnRleHQgPSBVdGlscy5mb3JtYXROdW1iZXJUb0ludChcIjBcIik7XG4gICAgICAgIHdpbkludGVncmFsRmllbGQudGV4dCA9IFV0aWxzLmZvcm1hdE51bWJlclRvSW50KFwiMFwiKTtcbiAgICAgICAgdGhpcy5fY29pbi52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5faW50ZWdyYWwudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHdpbkNvaW5GaWVsZC5hc01vZ2FmYU51bWJlckZpZWxkKCkucGxheSgwLCBjb2luLCAyKTtcbiAgICAgICAgLy8gd2luSW50ZWdyYWxGaWVsZC5hc01vZ2FmYU51bWJlckZpZWxkKCkucGxheSgwLCBpbnRlZ3JhbCwgMSk7XG4gICAgICAgIHRoaXMuX2ludGVncmFsO1xuICAgICAgICAvLyog5omn6KGM6YeR5biB6aOe5rSS5Yqo55S7XG4gICAgICAgIHRoaXMuY29pblNwcmVhZCgpO1xuICAgICAgICAvLyog5pKt5pS+6YeR5biB6aOe5rSS6Z+z5pWIXG4gICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdChcImJpZ193aW5fY2lvbnNcIik7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkuc3RvcEVmZmVjdChcImJpZ193aW5fY2lvbnNcIik7XG4gICAgICAgIH0sIDQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlhbPpl61XSU7lvLnnqpfliqjnlLtcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RvcFdpbkFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICAgICAgLy8qIOWBnOatouaSreaUvndpbuahhuiDjOaZr+mfs+aViFxuICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnN0b3BFZmZlY3QoXCJiaWdfd2luXCIpO1xuICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnN0b3BFZmZlY3QoXCJiaWdfd2luX2Npb25zXCIpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX3dpblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgV2luVHlwZS5CSUc6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2luVXAuYmdXaW5IaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2luRG93bi5iZ1dpbkJnSGlkZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBXaW5UeXBlLlNVUEVSOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpblVwLnN1cGVyV2luSGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dpbkRvd24uc3VwZXJXaW5CZ0hpZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgV2luVHlwZS5NRUdBOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpblVwLm1lZ2FXaW5IaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2luRG93bi5tZWdhV2luQmdIaWRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpblVwLmJnV2luSGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3dpbkRvd24uYmdXaW5CZ0hpZGUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jbGlja0J1ZmZlciA9IDA7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU3RhdGljVUkoZmFsc2UpO1xuICAgICAgICB9LCAwLjMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmHkeW4gemjnua0kuWKqOeUu1xuICAgICAqIEBwYXJhbSBpbnRlcnZhbFxuICAgICAqIEBwYXJhbSByZXBlYXRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2Njb2luU3ByZWFkKCk6IHZvaWQge1xuICAgICAgICBsZXQgY29pbjEgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoQmlnV2luU3ByZWFkKTtcbiAgICAgICAgY29pbjEub25BbGxDaGlsZENyZWF0ZWQoY29pbjEuZGVncmVlMzBDb2luc0xlZnQpO1xuICAgICAgICBsZXQgY29pbjIgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoQmlnV2luU3ByZWFkKTtcbiAgICAgICAgY29pbjIub25BbGxDaGlsZENyZWF0ZWQoY29pbjIuZGVncmVlMzBDb2luc1JpZ2h0KTtcbiAgICAgICAgbGV0IGNvaW4zID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KEJpZ1dpblNwcmVhZCk7XG4gICAgICAgIGNvaW4zLm9uQWxsQ2hpbGRDcmVhdGVkKGNvaW4zLmRlZ3JlZTUwQ29pbnNMZWZ0KTtcbiAgICAgICAgbGV0IGNvaW40ID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KEJpZ1dpblNwcmVhZCk7XG4gICAgICAgIGNvaW40Lm9uQWxsQ2hpbGRDcmVhdGVkKGNvaW40LmRlZ3JlZTUwQ29pbnNSaWdodCk7XG4gICAgICAgIGxldCBjb2luNSA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChCaWdXaW5TcHJlYWQpO1xuICAgICAgICBjb2luNS5vbkFsbENoaWxkQ3JlYXRlZChjb2luNS5kZWdyZWU3MENvaW5zTGVmdCk7XG4gICAgICAgIGxldCBjb2luNiA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChCaWdXaW5TcHJlYWQpO1xuICAgICAgICBjb2luNi5vbkFsbENoaWxkQ3JlYXRlZChjb2luNi5kZWdyZWU3MENvaW5zUmlnaHQpO1xuICAgICAgICBsZXQgY29pbjcgPSB0aGlzLmFkZEZndWlDb21wb25lbnQoQmlnV2luU3ByZWFkKTtcbiAgICAgICAgY29pbjcub25BbGxDaGlsZENyZWF0ZWQoY29pbjcudmVydGljYWxDb2luc0xlZnQpO1xuICAgICAgICBsZXQgY29pbjggPSB0aGlzLmFkZEZndWlDb21wb25lbnQoQmlnV2luU3ByZWFkKTtcbiAgICAgICAgY29pbjgub25BbGxDaGlsZENyZWF0ZWQoY29pbjgudmVydGljYWxDb2luc1JpZ2h0KTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBjb2luU3ByZWFkKGludGVydmFsOiBudW1iZXIgPSAwLjEsIHJlcGVhdDogbnVtYmVyID0gMjApIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZShcbiAgICAgICAgICAgIHRoaXMuc2Njb2luU3ByZWFkLmJpbmQodGhpcyksXG4gICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICByZXBlYXQgLSAxXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pi+56S6L+makOiXj+mdmeaAgVVJXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZVN0YXRpY1VJKGlzU2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLl9jb2luLnZpc2libGUgPSBpc1Nob3c7XG4gICAgICAgIHRoaXMuX2ludGVncmFsLnZpc2libGUgPSBpc1Nob3c7XG4gICAgICAgIHRoaXMuX2NvbGxlY3RCdXR0b24udmlzaWJsZSA9IGlzU2hvdztcbiAgICAgICAgdGhpcy5fZG91YmxlQnV0dG9uLnZpc2libGUgPSBpc1Nob3c7XG4gICAgICAgIC8vIHRoaXMuX2NvdW50ZG93blRleHQudmlzaWJsZSA9IGlzU2hvdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43nva7po57ooYzlj4LmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXRGbHkoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzZXRGbHlcIilcbiAgICAgICAgdGhpcy5fcmV3YXJkQ29pbnMgPSAwO1xuICAgICAgICB0aGlzLl9yZXdhcmRJbnRlZ3JhbCA9IDA7XG4gICAgICAgIHRoaXMuX2ZseUNvaW5zID0gMTAwO1xuICAgICAgICB0aGlzLl9mbHlJbnRlZ3JhbHMgPSAyMDtcbiAgICB9XG5cblxuICAgIHB1YmxpYyByZXNldEJpZ1dpblNwcmVhZCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxpc3QgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLl9jaGlsZHJlbltpXVxuICAgICAgICAgICAgaWYgKGkgPiAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmZndWlDb21wb25lbnQgJiYgdmFsdWUuZmd1aUNvbXBvbmVudC5ub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmZndWlDb21wb25lbnQubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2godmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IGxpc3RcbiAgICB9XG59XG4iXX0=
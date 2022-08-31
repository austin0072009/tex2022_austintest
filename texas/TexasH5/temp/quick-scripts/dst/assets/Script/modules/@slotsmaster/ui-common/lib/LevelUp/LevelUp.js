
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/LevelUp/LevelUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba960qnjpxHR7ux4sA8R7Xe', 'LevelUp');
// Script/modules/@slotsmaster/ui-common/lib/LevelUp/LevelUp.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelUp = void 0;
//import { fgui } from "fairygui";
var LevelUpSpine_1 = require("./LevelUpSpine");
var Coin_1 = require("../Coin/Coin");
var Popup_1 = require("../Popup");
var Integral_1 = require("../Coin/Integral");
var RippleSpine_1 = require("../Ripple/RippleSpine");
var SoundMgr_1 = require("../../../../@mogafa/utils/lib/SoundMgr");
var Utils_1 = require("../../../../@mogafa/utils/lib/Utils");
var UpgradeMode;
(function (UpgradeMode) {
    UpgradeMode[UpgradeMode["Primary"] = 0] = "Primary";
    UpgradeMode[UpgradeMode["Advanced"] = 1] = "Advanced";
    UpgradeMode[UpgradeMode["Small"] = 2] = "Small";
})(UpgradeMode || (UpgradeMode = {}));
var LEVEL_UP_AD = "LEVEL_UP_AD";
var LevelUp = /** @class */ (function (_super) {
    __extends(LevelUp, _super);
    function LevelUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //* 金币增长需要时间
        _this._coinIncreaseTime = 1.5;
        //* 飞行金币数
        _this._flyCoins = 100;
        //* 飞行积分数
        _this._flyIntegrals = 20;
        //* 点击缓存
        _this._clickBuffer = 0;
        return _this;
    }
    Object.defineProperty(LevelUp.prototype, "basePanel", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "animNode", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "buttonOKName", {
        get: function () {
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "goldGrowName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "normalNumName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "closeTime", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "coinEndPos", {
        get: function () {
            return this._coinEndPos;
        },
        set: function (value) {
            this._coinEndPos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "integralEndPos", {
        get: function () {
            return this._integralEndPos;
        },
        set: function (value) {
            this._integralEndPos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "componentName", {
        get: function () {
            return "LevelUp";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LevelUp.prototype, "isCoinFly", {
        get: function () {
            return this._isCoinFly;
        },
        set: function (value) {
            var _this = this;
            this._isCoinFly = value;
            if (this._isCoinFly) {
                //* 飞行时间，与每个金币飞行时间保持同步
                var flyTime = 1;
                this.scheduleOnce(function () {
                    _this.awardIncreaseCallback(_this._rewardCoins, _this._rewardIntegral);
                }, flyTime);
            }
        },
        enumerable: false,
        configurable: true
    });
    LevelUp.prototype.createChildComponents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var spineNode;
            return __generator(this, function (_a) {
                _super.prototype.createChildComponents.call(this);
                this.fguiComponent.makeFullScreen();
                spineNode = this.fguiComponent.getChild("levelUp").node;
                this._maskNode = this.getChild("mask").node;
                this._levelUpSpine = new LevelUpSpine_1.default(spineNode);
                this.addChild(this._levelUpSpine);
                //* 小升级弹框label
                this._levelLabelTop = this.fguiComponent.getChild("levelLabelTop").asLabel;
                this._coinLabelTop = this.fguiComponent.getChild("coinLabelTop").asLabel;
                this._integralLabelTop = this.fguiComponent.getChild("integralLabelTop").asLabel;
                //* 大升级弹框label、image
                this._levelLabel = this.fguiComponent.getChild("levelLabel").asLabel;
                this._coinLabel = this.fguiComponent.getChild("coinLabel").asLabel;
                this._integralLabel = this.fguiComponent.getChild("integralLabel").asLabel;
                this._coin = this.fguiComponent.getChild("coinLabel").asMogafaNumberField();
                this._integral = this.fguiComponent.getChild("integralLabel").asMogafaNumberField();
                //* 收集按钮
                this._collectButton = this.fguiComponent.getChild("collectButton").asButton;
                this._collectButton.onClick(this.collectClick, this);
                //* 双击按钮
                this._doubleButton = this.fguiComponent.getChild("doubleButton").asButton;
                this._doubleButton.onClick(this.adButtonClick, this);
                this.coinEndPos = cc.v2(this.getChild("coin").node.position.x, this.getChild("coin").node.position.y);
                this.integralEndPos = cc.v2(this.getChild("integral").node.position.x, this.getChild("integral").node.position.y);
                //* 加载波纹节点、spine
                this._rippleNode = this.getChild("ripple").node;
                this._rippleNode.zIndex = 99;
                this._rippleSpine = new RippleSpine_1.default(this._rippleNode);
                this.addChild(this._rippleSpine);
                //* 初始化隐藏所有label
                this.hideLevelLabel();
                return [2 /*return*/];
            });
        });
    };
    /**
     * 升级
     * @param upgrade 升级数据
     * @param awardIncreaseCallback 奖励数字增加回调
     */
    LevelUp.prototype.upgrade = function (upgrade, awardIncreaseCallback) {
        var _this = this;
        this.resetFly();
        this._rewardCoins = upgrade.award;
        this._rewardIntegral = upgrade.points;
        this._upgradeMode = this.getUpgradeMode(upgrade.level);
        this.awardIncreaseCallback = awardIncreaseCallback;
        this.show();
        switch (this._upgradeMode) {
            case UpgradeMode.Primary:
                this._maskNode.active = true;
                this._levelUpSpine.primary(upgrade.maxBet);
                break;
            case UpgradeMode.Advanced:
                this._maskNode.active = true;
                this._levelUpSpine.dvanced(upgrade.maxBet);
                break;
            case UpgradeMode.Small:
                this.scheduleOnce(function () {
                    _this.isCoinFly = true;
                    //* 金币飞行音效
                    SoundMgr_1.default.getInstance().playEffect("frame_coins");
                }, 0.5);
                this._levelUpSpine.small(upgrade.maxBet);
                break;
        }
        this.scheduleOnce(function () {
            _this.showLevel(upgrade.level, upgrade.award, upgrade.points, _this._upgradeMode);
        }, 0.5);
    };
    LevelUp.prototype.closeCallback = function (callback) {
        this._closeCallback = callback;
    };
    /**
     * 重置飞行参数
     */
    LevelUp.prototype.resetFly = function () {
        this._rewardCoins = 0;
        this._rewardIntegral = 0;
        this._flyCoins = 100;
        this._flyIntegrals = 20;
    };
    /**
     * 获取升级模式
     * @param level
     */
    LevelUp.prototype.getUpgradeMode = function (level) {
        if (level % 5 !== 0) {
            return UpgradeMode.Small;
        }
        if (level % 10 == 0) {
            return UpgradeMode.Advanced;
        }
        return UpgradeMode.Primary;
    };
    /**
     * 关闭升级弹窗
     */
    LevelUp.prototype.closeLevelUp = function () {
        var _this = this;
        switch (this._upgradeMode) {
            case UpgradeMode.Primary:
                this._levelUpSpine.primaryClose();
                break;
            case UpgradeMode.Advanced:
                this._levelUpSpine.dvancedClose();
                break;
            case UpgradeMode.Small:
                this._levelUpSpine.smallClose();
                break;
        }
        this.hideLevelLabel();
        this._maskNode.active = false;
        this.scheduleOnce(function () {
            _this._clickBuffer = 0;
            _this.hide();
            if (_this._closeCallback) {
                _this._closeCallback();
            }
        }, 0.5);
    };
    /**
     * 执行金币飞行动画
     */
    LevelUp.prototype.coinFly = function () {
        var _this = this;
        var coin = this.addFguiComponent(Coin_1.Coin);
        var startPos;
        //* 小升级
        if (this._upgradeMode === UpgradeMode.Small) {
            startPos = cc.v2(1764 + Math.random() * 200, -250 - Math.random() * 100);
        }
        //* 大升级
        else {
            startPos = cc.v2(660 + Math.random() * 200, -500 - Math.random() * 100);
        }
        coin.onAllChildCreated(function () {
            coin.coinFly(startPos, _this.coinEndPos);
        });
    };
    /**
     * 执行积分飞行动画
     */
    LevelUp.prototype.integralFly = function () {
        var integral = this.addFguiComponent(Integral_1.Integral);
        var startPos;
        //* 小升级
        if (this._upgradeMode === UpgradeMode.Small) {
            startPos = cc.v2(1764 + Math.random() * 200, -250 - Math.random() * 100);
        }
        //* 大升级
        else {
            startPos = cc.v2(660 + Math.random() * 200, -650 - Math.random() * 100);
        }
        integral.coinFly(startPos, this.integralEndPos);
    };
    /**
     * 收集按钮点击事件
     */
    LevelUp.prototype.collectClick = function () {
        SoundMgr_1.default.getInstance().playEffect("button");
        //* 大升级弹框的金币动画需要手动触发
        if (!this.isCoinFly) {
            this._clickBuffer++;
            this.isCoinFly = true;
            this.scheduleOnce(function () {
                //* 金币飞行音效
                SoundMgr_1.default.getInstance().playEffect("frame_coins");
            }, 0.5);
        }
    };
    /**
     * 双击按钮点击事件
     */
    LevelUp.prototype.adButtonClick = function () {
        SoundMgr_1.default.getInstance().playEffect("button");
        this.node.emit(LEVEL_UP_AD);
    };
    /**
     * 绑定广告按钮点击事件
     * @param listener
     */
    LevelUp.prototype.onAdButtonClick = function (listener) {
        this.node.off(LEVEL_UP_AD);
        this.node.on(LEVEL_UP_AD, listener);
    };
    /**
     * 展示等级
     * @param level
     * @param rewardCoins
     * @param rewardIntegral
     * @param upgradeMode
     */
    LevelUp.prototype.showLevel = function (level, rewardCoins, rewardIntegral, upgradeMode) {
        if (upgradeMode === UpgradeMode.Small) {
            this._levelLabelTop.text = level.toString();
            this._levelLabelTop.visible = true;
            this._coinLabelTop.text = Utils_1.Utils.formatNumberToInt(rewardCoins);
            this._coinLabelTop.visible = true;
            this._integralLabelTop.text = Utils_1.Utils.formatNumberToInt(rewardIntegral);
            this._integralLabelTop.visible = true;
        }
        else {
            //* 金币增长动画
            this._coin.gtextField.visible = true;
            this._coin.gtextField.text = Utils_1.Utils.formatNumberToInt(rewardCoins);
            this._coin.play(0, rewardCoins, this._coinIncreaseTime);
            //* 积分增长动画
            this._integral.gtextField.visible = true;
            this._integral.gtextField.text = Utils_1.Utils.formatNumberToInt(rewardIntegral);
            this._integral.play(0, rewardIntegral, this._coinIncreaseTime);
            //* 等级
            this._levelLabel.text = level.toString();
            this._levelLabel.visible = true;
            this._collectButton.visible = true;
            this._doubleButton.visible = true;
        }
    };
    /**
     * 隐藏等级文本
     */
    LevelUp.prototype.hideLevelLabel = function () {
        this._levelLabel.visible = false;
        this._coin.gtextField.visible = false;
        this._integral.gtextField.visible = false;
        this._levelLabelTop.visible = false;
        this._coinLabelTop.visible = false;
        this._integralLabelTop.visible = false;
        this._collectButton.visible = false;
        this._doubleButton.visible = false;
    };
    /**
     * 金币动画执行完毕回调
     */
    LevelUp.prototype.coinFlyCallback = function () {
        var _this = this;
        if (this._clickBuffer > 1) {
            return;
        }
        this.scheduleOnce(function () {
            _this._rippleSpine.closeRipple();
            //* 停止金币飞行音效
            SoundMgr_1.default.getInstance().stopEffect("frame_coins");
        }, 0.8);
        this.scheduleOnce(function () {
            _this.closeLevelUp();
        }, 1.5);
    };
    LevelUp.prototype.update = function (dt) {
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
    return LevelUp;
}(Popup_1.Popup));
exports.LevelUp = LevelUp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxMZXZlbFVwXFxMZXZlbFVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBa0M7QUFDbEMsK0NBQTBDO0FBRzFDLHFDQUFvQztBQUVwQyxrQ0FBaUM7QUFDakMsNkNBQTRDO0FBRTVDLHFEQUFnRDtBQUVoRCxtRUFBOEQ7QUFDOUQsNkRBQTREO0FBRzVELElBQUssV0FJSjtBQUpELFdBQUssV0FBVztJQUNaLG1EQUFPLENBQUE7SUFDUCxxREFBUSxDQUFBO0lBQ1IsK0NBQUssQ0FBQTtBQUNULENBQUMsRUFKSSxXQUFXLEtBQVgsV0FBVyxRQUlmO0FBQ0QsSUFBTSxXQUFXLEdBQVcsYUFBYSxDQUFDO0FBQzFDO0lBQTZCLDJCQUFLO0lBQWxDO1FBQUEscUVBeVdDO1FBL1RHLFlBQVk7UUFDSix1QkFBaUIsR0FBVyxHQUFHLENBQUM7UUFLeEMsU0FBUztRQUNELGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDaEMsU0FBUztRQUNELG1CQUFhLEdBQVcsRUFBRSxDQUFDO1FBU25DLFFBQVE7UUFDQSxrQkFBWSxHQUFXLENBQUMsQ0FBQzs7SUE0U3JDLENBQUM7SUF4V0csc0JBQWMsOEJBQVM7YUFBdkI7WUFDSSxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsNkJBQVE7YUFBdEI7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxpQ0FBWTthQUExQjtZQUNJLE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxpQ0FBWTthQUExQjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMs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QUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUMzRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDcEYsUUFBUTtnQkFDUixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckQsUUFBUTtnQkFDUixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztnQkFDMUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xILGdCQUFnQjtnQkFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqQyxnQkFBZ0I7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7OztLQUN6QjtJQUVEOzs7O09BSUc7SUFDSSx5QkFBTyxHQUFkLFVBQWUsT0FBMkIsRUFBRSxxQkFBK0I7UUFBM0UsaUJBNEJDO1FBM0JHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQixDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLFFBQVEsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN2QixLQUFLLFdBQVcsQ0FBQyxPQUFPO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0MsTUFBTTtZQUNWLEtBQUssV0FBVyxDQUFDLFFBQVE7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMzQyxNQUFNO1lBQ1YsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsVUFBVTtvQkFDVixrQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDckQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekMsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BGLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFTSwrQkFBYSxHQUFwQixVQUFxQixRQUFrQjtRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBQ0Q7O09BRUc7SUFDSywwQkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDRDs7O09BR0c7SUFDSyxnQ0FBYyxHQUF0QixVQUF1QixLQUFhO1FBQ2hDLElBQUksS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxLQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNqQixPQUFPLFdBQVcsQ0FBQyxRQUFRLENBQUM7U0FDL0I7UUFDRCxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUNEOztPQUVHO0lBQ0ssOEJBQVksR0FBcEI7UUFBQSxpQkFxQkM7UUFwQkcsUUFBUSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ2xDLE1BQU07WUFDVixLQUFLLFdBQVcsQ0FBQyxRQUFRO2dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNsQyxNQUFNO1lBQ1YsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDaEMsTUFBTTtTQUNiO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1osSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFO2dCQUNyQixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDekI7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBQ0Q7O09BRUc7SUFDSyx5QkFBTyxHQUFmO1FBQUEsaUJBY0M7UUFiRyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxRQUFpQixDQUFDO1FBQ3RCLE9BQU87UUFDUCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRTtZQUN6QyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDNUU7UUFDRCxPQUFPO2FBQ0Y7WUFDRCxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDM0U7UUFDRCxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNEOztPQUVHO0lBQ0ssNkJBQVcsR0FBbkI7UUFDSSxJQUFJLFFBQVEsR0FBYSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksUUFBaUIsQ0FBQztRQUN0QixPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDekMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsT0FBTzthQUNGO1lBQ0QsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRDs7T0FFRztJQUNLLDhCQUFZLEdBQXBCO1FBQ0ksa0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLFVBQVU7Z0JBQ1Ysa0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSywrQkFBYSxHQUFyQjtRQUNJLGtCQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDRDs7O09BR0c7SUFDSSxpQ0FBZSxHQUF0QixVQUF1QixRQUFrQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNEOzs7Ozs7T0FNRztJQUNLLDJCQUFTLEdBQWpCLFVBQWtCLEtBQWEsRUFBRSxXQUFtQixFQUFFLGNBQXNCLEVBQUUsV0FBd0I7UUFDbEcsSUFBSSxXQUFXLEtBQUssV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLGFBQUssQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxhQUFLLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDekM7YUFBTTtZQUNILFVBQVU7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxhQUFLLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN4RCxVQUFVO1lBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsYUFBSyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0QsTUFBTTtZQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQztJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNLLGdDQUFjLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUNEOztPQUVHO0lBQ0ssaUNBQWUsR0FBdkI7UUFBQSxpQkFZQztRQVhHLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEMsWUFBWTtZQUNaLGtCQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNSLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzlCO2lCQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtnQkFDbkYsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN0QjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzFCO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsY0FBQztBQUFELENBeldBLEFBeVdDLENBelc0QixhQUFLLEdBeVdqQztBQXpXWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgZmd1aSB9IGZyb20gXCJmYWlyeWd1aVwiO1xuaW1wb3J0IExldmVsVXBTcGluZSBmcm9tIFwiLi9MZXZlbFVwU3BpbmVcIjtcblxuXG5pbXBvcnQgeyBDb2luIH0gZnJvbSBcIi4uL0NvaW4vQ29pblwiO1xuXG5pbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuLi9Qb3B1cFwiO1xuaW1wb3J0IHsgSW50ZWdyYWwgfSBmcm9tIFwiLi4vQ29pbi9JbnRlZ3JhbFwiO1xuXG5pbXBvcnQgUmlwcGxlU3BpbmUgZnJvbSBcIi4uL1JpcHBsZS9SaXBwbGVTcGluZVwiO1xuaW1wb3J0IHsgTW9nYWZhTnVtYmVyRmllbGQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQG1vZ2FmYS9mYWlyeWd1aS1jb21wb25lbnQvbGliL2V4dGVuc2lvbnMvTW9nYWZhTnVtYmVyRmllbGRcIjtcbmltcG9ydCBTb3VuZE1nciBmcm9tIFwiLi4vLi4vLi4vLi4vQG1vZ2FmYS91dGlscy9saWIvU291bmRNZ3JcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0Btb2dhZmEvdXRpbHMvbGliL1V0aWxzXCI7XG5pbXBvcnQgU3BpblJlc3VsdHNVcGdyYWRlIGZyb20gXCIuLi8uLi8uLi8uLi9zcGluLXJlc3VsdC9TcGluUmVzdWx0c1VwZ3JhZGVcIjtcblxuZW51bSBVcGdyYWRlTW9kZSB7XG4gICAgUHJpbWFyeSxcbiAgICBBZHZhbmNlZCxcbiAgICBTbWFsbCxcbn1cbmNvbnN0IExFVkVMX1VQX0FEOiBzdHJpbmcgPSBcIkxFVkVMX1VQX0FEXCI7XG5leHBvcnQgY2xhc3MgTGV2ZWxVcCBleHRlbmRzIFBvcHVwIHtcbiAgICBwcm90ZWN0ZWQgZ2V0IGJhc2VQYW5lbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBhbmltTm9kZSgpOiBjYy5Ob2RlW10ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBidXR0b25PS05hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgZ29sZEdyb3dOYW1lKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgbm9ybWFsTnVtTmFtZSgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGNsb3NlVGltZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHByaXZhdGUgX21hc2tOb2RlOiBjYy5Ob2RlO1xuICAgIC8vKiDljYfnuqdzcGluZVxuICAgIHByaXZhdGUgX2xldmVsVXBTcGluZTogTGV2ZWxVcFNwaW5lO1xuICAgIC8vKiDlpKfljYfnuqflvLnnqpfnrYnnuqdcbiAgICBwcml2YXRlIF9sZXZlbExhYmVsOiBmZ3VpLkdMYWJlbDtcbiAgICAvLyog5aSn5Y2H57qn5by55qGG6YeR5biBXG4gICAgcHJpdmF0ZSBfY29pbkxhYmVsOiBmZ3VpLkdMYWJlbDtcbiAgICAvLyog5aSn5Y2H57qn5by55qGG56ev5YiGXG4gICAgcHJpdmF0ZSBfaW50ZWdyYWxMYWJlbDogZmd1aS5HTGFiZWw7XG4gICAgLy8qIOWwj+WNh+e6p+W8ueeql+etiee6p1xuICAgIHByaXZhdGUgX2xldmVsTGFiZWxUb3A6IGZndWkuR0xhYmVsO1xuICAgIC8vKiDlsI/ljYfnuqflvLnnqpfph5HluIFcbiAgICBwcml2YXRlIF9jb2luTGFiZWxUb3A6IGZndWkuR0xhYmVsO1xuICAgIC8vKiDlsI/ljYfnuqflvLnnqpfnp6/liIZcbiAgICBwcml2YXRlIF9pbnRlZ3JhbExhYmVsVG9wOiBmZ3VpLkdMYWJlbDtcbiAgICAvLyogY29pbiBMbHR5dU51bWJlckZpZWxkXG4gICAgcHJpdmF0ZSBfY29pbjogTW9nYWZhTnVtYmVyRmllbGQ7XG4gICAgLy8qIGludGVncmFsIExsdHl1TnVtYmVyRmllbGRcbiAgICBwcml2YXRlIF9pbnRlZ3JhbDogTW9nYWZhTnVtYmVyRmllbGQ7XG4gICAgLy8qIOaUtumbhuaMiemSrlxuICAgIHByaXZhdGUgX2NvbGxlY3RCdXR0b246IGZndWkuR0J1dHRvbjtcbiAgICAvLyog5Y+M5Ye75oyJ6ZKuXG4gICAgcHJpdmF0ZSBfZG91YmxlQnV0dG9uOiBmZ3VpLkdCdXR0b247XG4gICAgLy8qIOmHkeW4geWinumVv+mcgOimgeaXtumXtFxuICAgIHByaXZhdGUgX2NvaW5JbmNyZWFzZVRpbWU6IG51bWJlciA9IDEuNTtcbiAgICAvLyog5Y2H57qn6I635Y+W55qE6YeR5biB5aWW5YqxXG4gICAgcHJpdmF0ZSBfcmV3YXJkQ29pbnM6IG51bWJlcjtcbiAgICAvLyog5Y2H57qn6I635Y+W55qE56ev5YiG5aWW5YqxXG4gICAgcHJpdmF0ZSBfcmV3YXJkSW50ZWdyYWw6IG51bWJlcjtcbiAgICAvLyog6aOe6KGM6YeR5biB5pWwXG4gICAgcHJpdmF0ZSBfZmx5Q29pbnM6IG51bWJlciA9IDEwMDtcbiAgICAvLyog6aOe6KGM56ev5YiG5pWwXG4gICAgcHJpdmF0ZSBfZmx5SW50ZWdyYWxzOiBudW1iZXIgPSAyMDtcbiAgICAvLyog6YeR5biB5Yqo55S757uT5p2f5Z2Q5qCHXG4gICAgcHJpdmF0ZSBfY29pbkVuZFBvczogY2MuVmVjMjtcbiAgICAvLyog56ev5YiG5Yqo55S757uT5p2f5Z2Q5qCHXG4gICAgcHJpdmF0ZSBfaW50ZWdyYWxFbmRQb3M6IGNjLlZlYzI7XG4gICAgLy8qIOmHkeW4geaYr+WQpuWPr+S7pemjnuihjFxuICAgIHByaXZhdGUgX2lzQ29pbkZseTogYm9vbGVhbjtcbiAgICAvLyog5Y2H57qn5qih5byPXG4gICAgcHJpdmF0ZSBfdXBncmFkZU1vZGU6IFVwZ3JhZGVNb2RlO1xuICAgIC8vKiDngrnlh7vnvJPlrZhcbiAgICBwcml2YXRlIF9jbGlja0J1ZmZlcjogbnVtYmVyID0gMDtcbiAgICAvLyog5rOi57q56IqC54K5XG4gICAgcHJpdmF0ZSBfcmlwcGxlTm9kZTogY2MuTm9kZTtcbiAgICAvLyog5rOi57q5c3BpbmVcbiAgICBwcml2YXRlIF9yaXBwbGVTcGluZTogUmlwcGxlU3BpbmU7XG4gICAgcHVibGljIGdldCBjb2luRW5kUG9zKCk6IGNjLlZlYzIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29pbkVuZFBvcztcbiAgICB9XG4gICAgcHVibGljIHNldCBjb2luRW5kUG9zKHZhbHVlOiBjYy5WZWMyKSB7XG4gICAgICAgIHRoaXMuX2NvaW5FbmRQb3MgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBpbnRlZ3JhbEVuZFBvcygpOiBjYy5WZWMyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVncmFsRW5kUG9zO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGludGVncmFsRW5kUG9zKHZhbHVlOiBjYy5WZWMyKSB7XG4gICAgICAgIHRoaXMuX2ludGVncmFsRW5kUG9zID0gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJHYW1lQ29tbW9uXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiQ29tbW9uXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJMZXZlbFVwXCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGlzQ29pbkZseSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ29pbkZseTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXQgaXNDb2luRmx5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzQ29pbkZseSA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5faXNDb2luRmx5KSB7XG4gICAgICAgICAgICAvLyog6aOe6KGM5pe26Ze077yM5LiO5q+P5Liq6YeR5biB6aOe6KGM5pe26Ze05L+d5oyB5ZCM5q2lXG4gICAgICAgICAgICBsZXQgZmx5VGltZTogbnVtYmVyID0gMTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF3YXJkSW5jcmVhc2VDYWxsYmFjayh0aGlzLl9yZXdhcmRDb2lucywgdGhpcy5fcmV3YXJkSW50ZWdyYWwpO1xuICAgICAgICAgICAgfSwgZmx5VGltZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGFzeW5jIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5tYWtlRnVsbFNjcmVlbigpO1xuICAgICAgICBsZXQgc3BpbmVOb2RlID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwibGV2ZWxVcFwiKS5ub2RlO1xuICAgICAgICB0aGlzLl9tYXNrTm9kZSA9IHRoaXMuZ2V0Q2hpbGQoXCJtYXNrXCIpLm5vZGU7XG4gICAgICAgIHRoaXMuX2xldmVsVXBTcGluZSA9IG5ldyBMZXZlbFVwU3BpbmUoc3BpbmVOb2RlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9sZXZlbFVwU3BpbmUpO1xuICAgICAgICAvLyog5bCP5Y2H57qn5by55qGGbGFiZWxcbiAgICAgICAgdGhpcy5fbGV2ZWxMYWJlbFRvcCA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcImxldmVsTGFiZWxUb3BcIikuYXNMYWJlbDtcbiAgICAgICAgdGhpcy5fY29pbkxhYmVsVG9wID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwiY29pbkxhYmVsVG9wXCIpLmFzTGFiZWw7XG4gICAgICAgIHRoaXMuX2ludGVncmFsTGFiZWxUb3AgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJpbnRlZ3JhbExhYmVsVG9wXCIpLmFzTGFiZWw7XG4gICAgICAgIC8vKiDlpKfljYfnuqflvLnmoYZsYWJlbOOAgWltYWdlXG4gICAgICAgIHRoaXMuX2xldmVsTGFiZWwgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJsZXZlbExhYmVsXCIpLmFzTGFiZWw7XG4gICAgICAgIHRoaXMuX2NvaW5MYWJlbCA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcImNvaW5MYWJlbFwiKS5hc0xhYmVsO1xuICAgICAgICB0aGlzLl9pbnRlZ3JhbExhYmVsID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwiaW50ZWdyYWxMYWJlbFwiKS5hc0xhYmVsO1xuICAgICAgICB0aGlzLl9jb2luID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwiY29pbkxhYmVsXCIpLmFzTW9nYWZhTnVtYmVyRmllbGQoKTtcbiAgICAgICAgdGhpcy5faW50ZWdyYWwgPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJpbnRlZ3JhbExhYmVsXCIpLmFzTW9nYWZhTnVtYmVyRmllbGQoKTtcbiAgICAgICAgLy8qIOaUtumbhuaMiemSrlxuICAgICAgICB0aGlzLl9jb2xsZWN0QnV0dG9uID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKFwiY29sbGVjdEJ1dHRvblwiKS5hc0J1dHRvbjtcbiAgICAgICAgdGhpcy5fY29sbGVjdEJ1dHRvbi5vbkNsaWNrKHRoaXMuY29sbGVjdENsaWNrLCB0aGlzKTtcbiAgICAgICAgLy8qIOWPjOWHu+aMiemSrlxuICAgICAgICB0aGlzLl9kb3VibGVCdXR0b24gPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q2hpbGQoXCJkb3VibGVCdXR0b25cIikuYXNCdXR0b247XG4gICAgICAgIHRoaXMuX2RvdWJsZUJ1dHRvbi5vbkNsaWNrKHRoaXMuYWRCdXR0b25DbGljaywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5jb2luRW5kUG9zID0gY2MudjIodGhpcy5nZXRDaGlsZChcImNvaW5cIikubm9kZS5wb3NpdGlvbi54LCB0aGlzLmdldENoaWxkKFwiY29pblwiKS5ub2RlLnBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLmludGVncmFsRW5kUG9zID0gY2MudjIodGhpcy5nZXRDaGlsZChcImludGVncmFsXCIpLm5vZGUucG9zaXRpb24ueCwgdGhpcy5nZXRDaGlsZChcImludGVncmFsXCIpLm5vZGUucG9zaXRpb24ueSk7XG4gICAgICAgIC8vKiDliqDovb3ms6LnurnoioLngrnjgIFzcGluZVxuICAgICAgICB0aGlzLl9yaXBwbGVOb2RlID0gdGhpcy5nZXRDaGlsZChcInJpcHBsZVwiKS5ub2RlO1xuICAgICAgICB0aGlzLl9yaXBwbGVOb2RlLnpJbmRleCA9IDk5O1xuICAgICAgICB0aGlzLl9yaXBwbGVTcGluZSA9IG5ldyBSaXBwbGVTcGluZSh0aGlzLl9yaXBwbGVOb2RlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLl9yaXBwbGVTcGluZSk7XG4gICAgICAgIC8vKiDliJ3lp4vljJbpmpDol4/miYDmnIlsYWJlbFxuICAgICAgICB0aGlzLmhpZGVMZXZlbExhYmVsKCk7XG4gICAgfVxuICAgIHByaXZhdGUgYXdhcmRJbmNyZWFzZUNhbGxiYWNrOiBGdW5jdGlvbjtcbiAgICAvKipcbiAgICAgKiDljYfnuqdcbiAgICAgKiBAcGFyYW0gdXBncmFkZSDljYfnuqfmlbDmja5cbiAgICAgKiBAcGFyYW0gYXdhcmRJbmNyZWFzZUNhbGxiYWNrIOWlluWKseaVsOWtl+WinuWKoOWbnuiwg1xuICAgICAqL1xuICAgIHB1YmxpYyB1cGdyYWRlKHVwZ3JhZGU6IFNwaW5SZXN1bHRzVXBncmFkZSwgYXdhcmRJbmNyZWFzZUNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLnJlc2V0Rmx5KCk7XG4gICAgICAgIHRoaXMuX3Jld2FyZENvaW5zID0gdXBncmFkZS5hd2FyZDtcbiAgICAgICAgdGhpcy5fcmV3YXJkSW50ZWdyYWwgPSB1cGdyYWRlLnBvaW50cztcbiAgICAgICAgdGhpcy5fdXBncmFkZU1vZGUgPSB0aGlzLmdldFVwZ3JhZGVNb2RlKHVwZ3JhZGUubGV2ZWwpO1xuICAgICAgICB0aGlzLmF3YXJkSW5jcmVhc2VDYWxsYmFjayA9IGF3YXJkSW5jcmVhc2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5fdXBncmFkZU1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgVXBncmFkZU1vZGUuUHJpbWFyeTpcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXNrTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xldmVsVXBTcGluZS5wcmltYXJ5KHVwZ3JhZGUubWF4QmV0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVXBncmFkZU1vZGUuQWR2YW5jZWQ6XG4gICAgICAgICAgICAgICAgdGhpcy5fbWFza05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9sZXZlbFVwU3BpbmUuZHZhbmNlZCh1cGdyYWRlLm1heEJldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVwZ3JhZGVNb2RlLlNtYWxsOlxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NvaW5GbHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyog6YeR5biB6aOe6KGM6Z+z5pWIXG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWdyLmdldEluc3RhbmNlKCkucGxheUVmZmVjdChcImZyYW1lX2NvaW5zXCIpO1xuICAgICAgICAgICAgICAgIH0sIDAuNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGV2ZWxVcFNwaW5lLnNtYWxsKHVwZ3JhZGUubWF4QmV0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMZXZlbCh1cGdyYWRlLmxldmVsLCB1cGdyYWRlLmF3YXJkLCB1cGdyYWRlLnBvaW50cywgdGhpcy5fdXBncmFkZU1vZGUpO1xuICAgICAgICB9LCAwLjUpO1xuICAgIH1cbiAgICBwcml2YXRlIF9jbG9zZUNhbGxiYWNrOiBGdW5jdGlvbjtcbiAgICBwdWJsaWMgY2xvc2VDYWxsYmFjayhjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2xvc2VDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDph43nva7po57ooYzlj4LmlbBcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlc2V0Rmx5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZXdhcmRDb2lucyA9IDA7XG4gICAgICAgIHRoaXMuX3Jld2FyZEludGVncmFsID0gMDtcbiAgICAgICAgdGhpcy5fZmx5Q29pbnMgPSAxMDA7XG4gICAgICAgIHRoaXMuX2ZseUludGVncmFscyA9IDIwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bljYfnuqfmqKHlvI9cbiAgICAgKiBAcGFyYW0gbGV2ZWxcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFVwZ3JhZGVNb2RlKGxldmVsOiBudW1iZXIpOiBVcGdyYWRlTW9kZSB7XG4gICAgICAgIGlmIChsZXZlbCAlIDUgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBVcGdyYWRlTW9kZS5TbWFsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGV2ZWwgJSAxMCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gVXBncmFkZU1vZGUuQWR2YW5jZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFVwZ3JhZGVNb2RlLlByaW1hcnk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWFs+mXreWNh+e6p+W8ueeql1xuICAgICAqL1xuICAgIHByaXZhdGUgY2xvc2VMZXZlbFVwKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuX3VwZ3JhZGVNb2RlKSB7XG4gICAgICAgICAgICBjYXNlIFVwZ3JhZGVNb2RlLlByaW1hcnk6XG4gICAgICAgICAgICAgICAgdGhpcy5fbGV2ZWxVcFNwaW5lLnByaW1hcnlDbG9zZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVcGdyYWRlTW9kZS5BZHZhbmNlZDpcbiAgICAgICAgICAgICAgICB0aGlzLl9sZXZlbFVwU3BpbmUuZHZhbmNlZENsb3NlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFVwZ3JhZGVNb2RlLlNtYWxsOlxuICAgICAgICAgICAgICAgIHRoaXMuX2xldmVsVXBTcGluZS5zbWFsbENsb3NlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oaWRlTGV2ZWxMYWJlbCgpO1xuICAgICAgICB0aGlzLl9tYXNrTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY2xpY2tCdWZmZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMC41KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5omn6KGM6YeR5biB6aOe6KGM5Yqo55S7XG4gICAgICovXG4gICAgcHJpdmF0ZSBjb2luRmx5KCk6IHZvaWQge1xuICAgICAgICBsZXQgY29pbjogQ29pbiA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChDb2luKTtcbiAgICAgICAgbGV0IHN0YXJ0UG9zOiBjYy5WZWMyO1xuICAgICAgICAvLyog5bCP5Y2H57qnXG4gICAgICAgIGlmICh0aGlzLl91cGdyYWRlTW9kZSA9PT0gVXBncmFkZU1vZGUuU21hbGwpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9zID0gY2MudjIoMTc2NCArIE1hdGgucmFuZG9tKCkgKiAyMDAsIC0yNTAgLSBNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyog5aSn5Y2H57qnXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQb3MgPSBjYy52Mig2NjAgKyBNYXRoLnJhbmRvbSgpICogMjAwLCAtNTAwIC0gTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29pbi5vbkFsbENoaWxkQ3JlYXRlZCgoKSA9PiB7XG4gICAgICAgICAgICBjb2luLmNvaW5GbHkoc3RhcnRQb3MsIHRoaXMuY29pbkVuZFBvcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmiafooYznp6/liIbpo57ooYzliqjnlLtcbiAgICAgKi9cbiAgICBwcml2YXRlIGludGVncmFsRmx5KCk6IHZvaWQge1xuICAgICAgICBsZXQgaW50ZWdyYWw6IEludGVncmFsID0gdGhpcy5hZGRGZ3VpQ29tcG9uZW50KEludGVncmFsKTtcbiAgICAgICAgbGV0IHN0YXJ0UG9zOiBjYy5WZWMyO1xuICAgICAgICAvLyog5bCP5Y2H57qnXG4gICAgICAgIGlmICh0aGlzLl91cGdyYWRlTW9kZSA9PT0gVXBncmFkZU1vZGUuU21hbGwpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9zID0gY2MudjIoMTc2NCArIE1hdGgucmFuZG9tKCkgKiAyMDAsIC0yNTAgLSBNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyog5aSn5Y2H57qnXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRQb3MgPSBjYy52Mig2NjAgKyBNYXRoLnJhbmRvbSgpICogMjAwLCAtNjUwIC0gTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaW50ZWdyYWwuY29pbkZseShzdGFydFBvcywgdGhpcy5pbnRlZ3JhbEVuZFBvcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaUtumbhuaMiemSrueCueWHu+S6i+S7tlxuICAgICAqL1xuICAgIHByaXZhdGUgY29sbGVjdENsaWNrKCk6IHZvaWQge1xuICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnBsYXlFZmZlY3QoXCJidXR0b25cIik7XG4gICAgICAgIC8vKiDlpKfljYfnuqflvLnmoYbnmoTph5HluIHliqjnlLvpnIDopoHmiYvliqjop6blj5FcbiAgICAgICAgaWYgKCF0aGlzLmlzQ29pbkZseSkge1xuICAgICAgICAgICAgdGhpcy5fY2xpY2tCdWZmZXIrKztcbiAgICAgICAgICAgIHRoaXMuaXNDb2luRmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyog6YeR5biB6aOe6KGM6Z+z5pWIXG4gICAgICAgICAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KFwiZnJhbWVfY29pbnNcIik7XG4gICAgICAgICAgICB9LCAwLjUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWPjOWHu+aMiemSrueCueWHu+S6i+S7tlxuICAgICAqL1xuICAgIHByaXZhdGUgYWRCdXR0b25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgU291bmRNZ3IuZ2V0SW5zdGFuY2UoKS5wbGF5RWZmZWN0KFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLm5vZGUuZW1pdChMRVZFTF9VUF9BRCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOe7keWumuW5v+WRiuaMiemSrueCueWHu+S6i+S7tlxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqL1xuICAgIHB1YmxpYyBvbkFkQnV0dG9uQ2xpY2sobGlzdGVuZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoTEVWRUxfVVBfQUQpO1xuICAgICAgICB0aGlzLm5vZGUub24oTEVWRUxfVVBfQUQsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5bGV56S6562J57qnXG4gICAgICogQHBhcmFtIGxldmVsXG4gICAgICogQHBhcmFtIHJld2FyZENvaW5zXG4gICAgICogQHBhcmFtIHJld2FyZEludGVncmFsXG4gICAgICogQHBhcmFtIHVwZ3JhZGVNb2RlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzaG93TGV2ZWwobGV2ZWw6IG51bWJlciwgcmV3YXJkQ29pbnM6IG51bWJlciwgcmV3YXJkSW50ZWdyYWw6IG51bWJlciwgdXBncmFkZU1vZGU6IFVwZ3JhZGVNb2RlKSB7XG4gICAgICAgIGlmICh1cGdyYWRlTW9kZSA9PT0gVXBncmFkZU1vZGUuU21hbGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2xldmVsTGFiZWxUb3AudGV4dCA9IGxldmVsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLl9sZXZlbExhYmVsVG9wLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29pbkxhYmVsVG9wLnRleHQgPSBVdGlscy5mb3JtYXROdW1iZXJUb0ludChyZXdhcmRDb2lucyk7XG4gICAgICAgICAgICB0aGlzLl9jb2luTGFiZWxUb3AudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9pbnRlZ3JhbExhYmVsVG9wLnRleHQgPSBVdGlscy5mb3JtYXROdW1iZXJUb0ludChyZXdhcmRJbnRlZ3JhbCk7XG4gICAgICAgICAgICB0aGlzLl9pbnRlZ3JhbExhYmVsVG9wLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8qIOmHkeW4geWinumVv+WKqOeUu1xuICAgICAgICAgICAgdGhpcy5fY29pbi5ndGV4dEZpZWxkLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29pbi5ndGV4dEZpZWxkLnRleHQgPSBVdGlscy5mb3JtYXROdW1iZXJUb0ludChyZXdhcmRDb2lucyk7XG4gICAgICAgICAgICB0aGlzLl9jb2luLnBsYXkoMCwgcmV3YXJkQ29pbnMsIHRoaXMuX2NvaW5JbmNyZWFzZVRpbWUpO1xuICAgICAgICAgICAgLy8qIOenr+WIhuWinumVv+WKqOeUu1xuICAgICAgICAgICAgdGhpcy5faW50ZWdyYWwuZ3RleHRGaWVsZC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVncmFsLmd0ZXh0RmllbGQudGV4dCA9IFV0aWxzLmZvcm1hdE51bWJlclRvSW50KHJld2FyZEludGVncmFsKTtcbiAgICAgICAgICAgIHRoaXMuX2ludGVncmFsLnBsYXkoMCwgcmV3YXJkSW50ZWdyYWwsIHRoaXMuX2NvaW5JbmNyZWFzZVRpbWUpO1xuICAgICAgICAgICAgLy8qIOetiee6p1xuICAgICAgICAgICAgdGhpcy5fbGV2ZWxMYWJlbC50ZXh0ID0gbGV2ZWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuX2xldmVsTGFiZWwudmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuX2NvbGxlY3RCdXR0b24udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9kb3VibGVCdXR0b24udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6ZqQ6JeP562J57qn5paH5pysXG4gICAgICovXG4gICAgcHJpdmF0ZSBoaWRlTGV2ZWxMYWJlbCgpIHtcbiAgICAgICAgdGhpcy5fbGV2ZWxMYWJlbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NvaW4uZ3RleHRGaWVsZC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ludGVncmFsLmd0ZXh0RmllbGQudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9sZXZlbExhYmVsVG9wLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY29pbkxhYmVsVG9wLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW50ZWdyYWxMYWJlbFRvcC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NvbGxlY3RCdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kb3VibGVCdXR0b24udmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDph5HluIHliqjnlLvmiafooYzlrozmr5Xlm57osINcbiAgICAgKi9cbiAgICBwcml2YXRlIGNvaW5GbHlDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2NsaWNrQnVmZmVyID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JpcHBsZVNwaW5lLmNsb3NlUmlwcGxlKCk7XG4gICAgICAgICAgICAvLyog5YGc5q2i6YeR5biB6aOe6KGM6Z+z5pWIXG4gICAgICAgICAgICBTb3VuZE1nci5nZXRJbnN0YW5jZSgpLnN0b3BFZmZlY3QoXCJmcmFtZV9jb2luc1wiKTtcbiAgICAgICAgfSwgMC44KTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUxldmVsVXAoKTtcbiAgICAgICAgfSwgMS41KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pc0NvaW5GbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXdhcmRDb2lucyAmJiB0aGlzLl9yZXdhcmRDb2lucyA+IDAgJiYgdGhpcy5fZmx5Q29pbnMgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmx5Q29pbnMgLT0gMjtcbiAgICAgICAgICAgICAgICB0aGlzLmNvaW5GbHkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yaXBwbGVTcGluZS5yaXBwbGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcmV3YXJkSW50ZWdyYWwgJiYgdGhpcy5fcmV3YXJkSW50ZWdyYWwgPiAwICYmIHRoaXMuX2ZseUludGVncmFscyA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9mbHlJbnRlZ3JhbHMgLT0gMjtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVncmFsRmx5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2luRmx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2luRmx5Q2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
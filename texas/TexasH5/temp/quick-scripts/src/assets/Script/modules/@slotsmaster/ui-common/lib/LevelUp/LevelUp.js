"use strict";
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
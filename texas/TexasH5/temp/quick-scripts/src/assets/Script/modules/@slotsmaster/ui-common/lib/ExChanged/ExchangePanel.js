"use strict";
cc._RF.push(module, '5c3e5VgJ9dM4rrx/KGcYqGT', 'ExchangePanel');
// Script/modules/@slotsmaster/ui-common/lib/ExChanged/ExchangePanel.ts

"use strict";
/*
 * @Description:
 * @Author: 张菊
 * @Date: 2020-06-01 17:30:18
 * @LastEditTime: 2020-07-13 15:26:04
 * @LastEditors: 张菊
 */
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
var Popup_1 = require("../Popup");
var AppConst_1 = require("../AppConst");
var HttpApi_1 = require("../HttpApi");
var Utils_1 = require("../../../../@mogafa/utils/lib/Utils");
var ExchangePanel = /** @class */ (function (_super) {
    __extends(ExchangePanel, _super);
    function ExchangePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._redeemList = null;
        _this._backGroundSpineName = "GameHall/Spine/spine_ui_popup/spine_ui_popup";
        return _this;
    }
    Object.defineProperty(ExchangePanel.prototype, "basePanel", {
        get: function () {
            return "base";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExchangePanel.prototype, "animNode", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExchangePanel.prototype, "buttonOKName", {
        get: function () {
            return "closeButton";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExchangePanel.prototype, "goldGrowName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExchangePanel.prototype, "normalNumName", {
        get: function () {
            throw new Error("Method not implemented.");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExchangePanel.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExchangePanel.prototype, "packageName", {
        get: function () {
            return "res/Exchange";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExchangePanel.prototype, "componentName", {
        get: function () {
            return "MainView";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExchangePanel.prototype, "closeTime", {
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    ExchangePanel.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
    };
    ExchangePanel.prototype.createChildComponents = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                _super.prototype.createChildComponents.call(this);
                this.initSpine();
                return [2 /*return*/];
            });
        });
    };
    ExchangePanel.prototype.initSpine = function () {
        var _this = this;
        Utils_1.Utils.addSpine(this._backGroundSpineName, this._base.getChild("backGroundSpine").node, function (backGroundSpine) {
            _this._backGroundSpine = backGroundSpine;
            backGroundSpine.setCompleteListener(function (trackEntry, loopCount) {
                var animName = trackEntry.animation ? trackEntry.animation.name : "";
                if (animName == "Popup") {
                    backGroundSpine.setAnimation(0, "loop", true);
                }
            });
        });
    };
    ExchangePanel.prototype.initData = function (callBack) {
        var _this = this;
        this.node.emit(AppConst_1.AppConst.IsShowLoading);
        HttpApi_1.default.http
            .get(HttpApi_1.default.server + HttpApi_1.Http_GetRedeem, {
            headers: {
                // 'Content-Type': "application/json",
                Authorization: AppConst_1.AppConst.accessToken,
            },
        })
            .then(function (res) {
            console.log(res);
            if (res.code == 200) {
                _this._redeemList = res.data;
                console.log("initDatainitData:", _this._redeemList);
                _this.node.emit(AppConst_1.AppConst.IsShowLoading, false);
                callBack();
            }
        }, function (err) {
            console.log("err", JSON.stringify(err));
            _this.node.emit(AppConst_1.AppConst.IsShowLoading, false);
        })
            .catch(function (err) {
            console.log("catch", JSON.stringify(err));
            _this.node.emit(AppConst_1.AppConst.IsShowLoading, false);
        });
    };
    ExchangePanel.prototype.initShow = function () {
        for (var index = 0; index < 4; index++) {
            var data = this._redeemList.cardRedeemInfoList[index];
            var item_1 = this._base.getChild(index.toString()).asCom;
            item_1.getChild("exChangeButton").asButton.onClick(this.exChangeClick, this);
            item_1.getChild("exChangeButton")._id = (3 - index).toString();
            item_1.getChild("detailsButton").asButton.onClick(this.goToCardPanel, this);
            item_1.getChild("detailsButton")._id = (3 - index).toString();
            item_1.getChild("icon").asLoader.url = data.info.collectionIconUrl;
            item_1.getChild("cardImage").asLoader.url = data.info.redeemItemIconUrl;
            item_1.getChild("rewardCount").asLabel.text = "$" + data.info.redeemRewards.toString();
            item_1.getChild("rewardCount1").asLabel.text = "$" + data.info.redeemRewards;
            if (index == 3) {
                item_1.getChild("describe").asLabel.text = "Collect this card";
            }
            item_1.getChild("num").asLabel.text = data.info.collectedValue + "/" + data.info.expiredValue;
        }
        var item = this._base.getChild("4").asCom;
        item.getChild("exChangeButton").asButton.onClick(this.exChangeClick, this);
        item.getChild("exChangeButton")._id = "4";
        item.getChild("icon").asLoader.url = this._redeemList.points.collectionIconUrl;
        item.getChild("cardImage").asLoader.url = this._redeemList.points.redeemItemIconUrl;
        item.getChild("describe").asLabel.text = this._redeemList.points.description;
        item.getChild("rewardCount").asLabel.text = this._redeemList.points.redeemRewards.toString();
        item.getChild("rewardCount1").asLabel.text = this._redeemList.points.redeemRewards;
        item.getChild("num").asLabel.text =
            this._redeemList.points.collectedValue + "/" + this._redeemList.points.expiredValue;
    };
    ExchangePanel.prototype.exChangeClick = function (event) {
        //请求服务器是否可以兑换  成功跳转第三方网页 失败 弹框提示
        this.onButtonClickMusic();
        var _id = parseInt(event.initiator.id);
    };
    ExchangePanel.prototype.goToCardPanel = function (event) {
        this.onButtonClickMusic();
        //跳转到对应卡组
        var _id = parseInt(event.initiator.id);
        this.node.emit("SHOWCARD", _id);
        this.hide();
    };
    ExchangePanel.prototype.hide = function () {
        _super.prototype.hide.call(this);
    };
    ExchangePanel.prototype.showPanel = function () {
        this._base.getChild("allChildren").visible = false;
        var self = this;
        this.initData(function () {
            self.show();
            self._backGroundSpine.setAnimation(0, "Popup", false);
            self.initShow();
            setTimeout(function () {
                self._base.getChild("allChildren").visible = true;
            }, 1000);
        });
    };
    return ExchangePanel;
}(Popup_1.Popup));
exports.default = ExchangePanel;

cc._RF.pop();
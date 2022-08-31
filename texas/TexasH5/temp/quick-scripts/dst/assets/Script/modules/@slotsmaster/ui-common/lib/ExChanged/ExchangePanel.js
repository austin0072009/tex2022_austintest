
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/ExChanged/ExchangePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxFeENoYW5nZWRcXEV4Y2hhbmdlUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsa0NBQWlDO0FBQ2pDLHdDQUF1QztBQUN2QyxzQ0FBcUQ7QUFDckQsNkRBQTREO0FBRTVEO0lBQTJDLGlDQUFLO0lBQWhEO1FBQUEscUVBNElDO1FBaEhXLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLDBCQUFvQixHQUFXLDhDQUE4QyxDQUFDOztJQStHMUYsQ0FBQztJQTNJRyxzQkFBYyxvQ0FBUzthQUF2QjtZQUNJLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsbUNBQVE7YUFBdEI7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyx1Q0FBWTthQUExQjtZQUNJLE9BQU8sYUFBYSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsdUNBQVk7YUFBMUI7WUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyx3Q0FBYTthQUEzQjtZQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFjLDhDQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsc0NBQVc7YUFBekI7WUFDSSxPQUFPLGNBQWMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHdDQUFhO2FBQTNCO1lBQ0ksT0FBTyxV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O1lBQ1osSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixVQUFVLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN0RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxvQkFBQztBQUFELENBNUlBLEFBNElDLENBNUkwQyxhQUFLLEdBNEkvQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246XG4gKiBAQXV0aG9yOiDlvKDoj4pcbiAqIEBEYXRlOiAyMDIwLTA2LTAxIDE3OjMwOjE4XG4gKiBATGFzdEVkaXRUaW1lOiAyMDIwLTA3LTEzIDE1OjI2OjA0XG4gKiBATGFzdEVkaXRvcnM6IOW8oOiPilxuICovXG5cbmltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL1BvcHVwXCI7XG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi9BcHBDb25zdFwiO1xuaW1wb3J0IEh0dHBBcGksIHsgSHR0cF9HZXRSZWRlZW0gfSBmcm9tIFwiLi4vSHR0cEFwaVwiO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vQG1vZ2FmYS91dGlscy9saWIvVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhjaGFuZ2VQYW5lbCBleHRlbmRzIFBvcHVwIHtcbiAgICBwcm90ZWN0ZWQgZ2V0IGJhc2VQYW5lbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJiYXNlXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgYW5pbU5vZGUoKTogY2MuTm9kZVtdIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgYnV0dG9uT0tOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcImNsb3NlQnV0dG9uXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgZ29sZEdyb3dOYW1lKCk6IHN0cmluZ1tdIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgbm9ybWFsTnVtTmFtZSgpOiBzdHJpbmdbXSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJyZXMvRXhjaGFuZ2VcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIk1haW5WaWV3XCI7XG4gICAgfVxuICAgIGdldCBjbG9zZVRpbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcml2YXRlIF9yZWRlZW1MaXN0ID0gbnVsbDtcbiAgICBwcml2YXRlIF9iYWNrR3JvdW5kU3BpbmVOYW1lOiBzdHJpbmcgPSBcIkdhbWVIYWxsL1NwaW5lL3NwaW5lX3VpX3BvcHVwL3NwaW5lX3VpX3BvcHVwXCI7XG4gICAgcHJpdmF0ZSBfYmFja0dyb3VuZFNwaW5lOiBzcC5Ta2VsZXRvbjtcbiAgICBhbGxDaGlsZENyZWF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLmFsbENoaWxkQ3JlYXRlZCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYXN5bmMgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5pbml0U3BpbmUoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0U3BpbmUoKTogdm9pZCB7XG4gICAgICAgIFV0aWxzLmFkZFNwaW5lKFxuICAgICAgICAgICAgdGhpcy5fYmFja0dyb3VuZFNwaW5lTmFtZSxcbiAgICAgICAgICAgIHRoaXMuX2Jhc2UuZ2V0Q2hpbGQoXCJiYWNrR3JvdW5kU3BpbmVcIikubm9kZSxcbiAgICAgICAgICAgIChiYWNrR3JvdW5kU3BpbmU6IHNwLlNrZWxldG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFja0dyb3VuZFNwaW5lID0gYmFja0dyb3VuZFNwaW5lO1xuICAgICAgICAgICAgICAgIGJhY2tHcm91bmRTcGluZS5zZXRDb21wbGV0ZUxpc3RlbmVyKCh0cmFja0VudHJ5OiBhbnksIGxvb3BDb3VudDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbmltTmFtZTogc3RyaW5nID0gdHJhY2tFbnRyeS5hbmltYXRpb24gPyB0cmFja0VudHJ5LmFuaW1hdGlvbi5uYW1lIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1OYW1lID09IFwiUG9wdXBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja0dyb3VuZFNwaW5lLnNldEFuaW1hdGlvbigwLCBcImxvb3BcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0RGF0YShjYWxsQmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoQXBwQ29uc3QuSXNTaG93TG9hZGluZyk7XG4gICAgICAgIEh0dHBBcGkuaHR0cFxuICAgICAgICAgICAgLmdldChIdHRwQXBpLnNlcnZlciArIEh0dHBfR2V0UmVkZWVtLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IEFwcENvbnN0LmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlZGVlbUxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5pdERhdGFpbml0RGF0YTpcIiwgdGhpcy5fcmVkZWVtTGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChBcHBDb25zdC5Jc1Nob3dMb2FkaW5nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChBcHBDb25zdC5Jc1Nob3dMb2FkaW5nLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoXCIsIEpTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5lbWl0KEFwcENvbnN0LklzU2hvd0xvYWRpbmcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBwcml2YXRlIGluaXRTaG93KCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9yZWRlZW1MaXN0LmNhcmRSZWRlZW1JbmZvTGlzdFtpbmRleF07XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2Jhc2UuZ2V0Q2hpbGQoaW5kZXgudG9TdHJpbmcoKSkuYXNDb207XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkKFwiZXhDaGFuZ2VCdXR0b25cIikuYXNCdXR0b24ub25DbGljayh0aGlzLmV4Q2hhbmdlQ2xpY2ssIHRoaXMpO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcImV4Q2hhbmdlQnV0dG9uXCIpLl9pZCA9ICgzIC0gaW5kZXgpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGQoXCJkZXRhaWxzQnV0dG9uXCIpLmFzQnV0dG9uLm9uQ2xpY2sodGhpcy5nb1RvQ2FyZFBhbmVsLCB0aGlzKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGQoXCJkZXRhaWxzQnV0dG9uXCIpLl9pZCA9ICgzIC0gaW5kZXgpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGQoXCJpY29uXCIpLmFzTG9hZGVyLnVybCA9IGRhdGEuaW5mby5jb2xsZWN0aW9uSWNvblVybDtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGQoXCJjYXJkSW1hZ2VcIikuYXNMb2FkZXIudXJsID0gZGF0YS5pbmZvLnJlZGVlbUl0ZW1JY29uVXJsO1xuXG4gICAgICAgICAgICBpdGVtLmdldENoaWxkKFwicmV3YXJkQ291bnRcIikuYXNMYWJlbC50ZXh0ID0gXCIkXCIgKyBkYXRhLmluZm8ucmVkZWVtUmV3YXJkcy50b1N0cmluZygpO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcInJld2FyZENvdW50MVwiKS5hc0xhYmVsLnRleHQgPSBcIiRcIiArIGRhdGEuaW5mby5yZWRlZW1SZXdhcmRzO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09IDMpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkKFwiZGVzY3JpYmVcIikuYXNMYWJlbC50ZXh0ID0gXCJDb2xsZWN0IHRoaXMgY2FyZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcIm51bVwiKS5hc0xhYmVsLnRleHQgPSBkYXRhLmluZm8uY29sbGVjdGVkVmFsdWUgKyBcIi9cIiArIGRhdGEuaW5mby5leHBpcmVkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9iYXNlLmdldENoaWxkKFwiNFwiKS5hc0NvbTtcbiAgICAgICAgaXRlbS5nZXRDaGlsZChcImV4Q2hhbmdlQnV0dG9uXCIpLmFzQnV0dG9uLm9uQ2xpY2sodGhpcy5leENoYW5nZUNsaWNrLCB0aGlzKTtcbiAgICAgICAgaXRlbS5nZXRDaGlsZChcImV4Q2hhbmdlQnV0dG9uXCIpLl9pZCA9IFwiNFwiO1xuICAgICAgICBpdGVtLmdldENoaWxkKFwiaWNvblwiKS5hc0xvYWRlci51cmwgPSB0aGlzLl9yZWRlZW1MaXN0LnBvaW50cy5jb2xsZWN0aW9uSWNvblVybDtcbiAgICAgICAgaXRlbS5nZXRDaGlsZChcImNhcmRJbWFnZVwiKS5hc0xvYWRlci51cmwgPSB0aGlzLl9yZWRlZW1MaXN0LnBvaW50cy5yZWRlZW1JdGVtSWNvblVybDtcbiAgICAgICAgaXRlbS5nZXRDaGlsZChcImRlc2NyaWJlXCIpLmFzTGFiZWwudGV4dCA9IHRoaXMuX3JlZGVlbUxpc3QucG9pbnRzLmRlc2NyaXB0aW9uO1xuICAgICAgICBpdGVtLmdldENoaWxkKFwicmV3YXJkQ291bnRcIikuYXNMYWJlbC50ZXh0ID0gdGhpcy5fcmVkZWVtTGlzdC5wb2ludHMucmVkZWVtUmV3YXJkcy50b1N0cmluZygpO1xuICAgICAgICBpdGVtLmdldENoaWxkKFwicmV3YXJkQ291bnQxXCIpLmFzTGFiZWwudGV4dCA9IHRoaXMuX3JlZGVlbUxpc3QucG9pbnRzLnJlZGVlbVJld2FyZHM7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGQoXCJudW1cIikuYXNMYWJlbC50ZXh0ID1cbiAgICAgICAgICAgIHRoaXMuX3JlZGVlbUxpc3QucG9pbnRzLmNvbGxlY3RlZFZhbHVlICsgXCIvXCIgKyB0aGlzLl9yZWRlZW1MaXN0LnBvaW50cy5leHBpcmVkVmFsdWU7XG4gICAgfVxuICAgIHByaXZhdGUgZXhDaGFuZ2VDbGljayhldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIC8v6K+35rGC5pyN5Yqh5Zmo5piv5ZCm5Y+v5Lul5YWR5o2iICDmiJDlip/ot7PovaznrKzkuInmlrnnvZHpobUg5aSx6LSlIOW8ueahhuaPkOekulxuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2tNdXNpYygpO1xuICAgICAgICBsZXQgX2lkID0gcGFyc2VJbnQoZXZlbnQuaW5pdGlhdG9yLmlkKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnb1RvQ2FyZFBhbmVsKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrTXVzaWMoKTtcbiAgICAgICAgLy/ot7PovazliLDlr7nlupTljaHnu4RcbiAgICAgICAgbGV0IF9pZCA9IHBhcnNlSW50KGV2ZW50LmluaXRpYXRvci5pZCk7XG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwiU0hPV0NBUkRcIiwgX2lkKTtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmhpZGUoKTtcbiAgICB9XG4gICAgc2hvd1BhbmVsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9iYXNlLmdldENoaWxkKFwiYWxsQ2hpbGRyZW5cIikudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuaW5pdERhdGEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5zaG93KCk7XG4gICAgICAgICAgICBzZWxmLl9iYWNrR3JvdW5kU3BpbmUuc2V0QW5pbWF0aW9uKDAsIFwiUG9wdXBcIiwgZmFsc2UpO1xuICAgICAgICAgICAgc2VsZi5pbml0U2hvdygpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5fYmFzZS5nZXRDaGlsZChcImFsbENoaWxkcmVuXCIpLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==
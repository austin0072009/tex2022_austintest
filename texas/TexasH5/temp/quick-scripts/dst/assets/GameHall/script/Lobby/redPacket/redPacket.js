
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/redPacket/redPacket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8097f6HG95N/5zllRRkuD60', 'redPacket');
// GameHall/script/Lobby/redPacket/redPacket.ts

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
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LoginViewCtr_1 = require("../../Login/LoginViewCtr");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 推广红包
 */
var redPacket = /** @class */ (function (_super) {
    __extends(redPacket, _super);
    function redPacket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_break = null;
        _this.ui_introduceNode = null;
        _this.ui_redpacketList = null;
        _this.ui_receivegold = null;
        _this.ui_noreceivegold = null;
        return _this;
    }
    Object.defineProperty(redPacket.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(redPacket.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(redPacket.prototype, "componentName", {
        get: function () {
            return "redPacketLayer";
        },
        enumerable: false,
        configurable: true
    });
    redPacket.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
    };
    redPacket.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
    };
    redPacket.prototype.OnLoadCompleted = function () {
        var _this = this;
        this.ui_btn_break.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('redPacket', "button");
            _this.Hide();
        });
        this.Show();
    };
    redPacket.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.initData();
    };
    redPacket.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    // 初始化
    redPacket.prototype.initData = function () {
        // 初始化介绍
        this.initIntroduce();
        // 初始化列表数据
        this.initListData();
    };
    redPacket.prototype.initListData = function () {
        var _this = this;
        this.ui_redpacketList.removeChildrenToPool();
        var reddata = LobbyViewCtr_1.default.instance.Model.redpacketData;
        var list = reddata.calist;
        console.log("sc_extendredinfo === ", reddata);
        // 设置显示已领取未领取
        this.ui_receivegold.text = "已领取：" + UIUtil_1.UIUtil.formatNumber100(reddata.receivegold);
        this.ui_noreceivegold.text = "未领取：" + UIUtil_1.UIUtil.formatNumber100(reddata.NoReceiveGold);
        list.sort(function (a, b) {
            return a.IsReceive - b.IsReceive;
        });
        var _loop_1 = function (index) {
            var item = this_1.ui_redpacketList.addItemFromPool().asCom;
            var data = list[index];
            item.getChild("nickname").asTextField.text = data.name + "";
            item.getChild("userid").asTextField.text = data.UserID + "";
            item.getChild("goldnum").asTextField.text = UIUtil_1.UIUtil.formatNumber100(reddata.gold) + "";
            var isCanLQ = false;
            var percent = Math.floor(data.income * 100 / reddata.agentTarget);
            percent = percent > 100 ? 100 : percent;
            item.getChild("percent").asTextField.text = percent + "%"; //UIUtil.formatNumber100(data.income) + "/" + UIUtil.formatNumber100(reddata.agentTarget);
            var progressBar = item.getChild("progressBar").asProgress;
            progressBar.value = percent;
            isCanLQ = data.income >= reddata.agentTarget;
            var btn_lq = item.getChild("btn_lingqu").asButton;
            item.getChild("statusText").asTextField.visible = data.IsReceive != 0;
            if (data.IsReceive == 0) {
                if (isCanLQ) {
                    btn_lq.clearClick();
                    btn_lq.onClick(function () {
                        _this.sendReceiveGold(data.UserID);
                    });
                    btn_lq.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.5, 0.3 * 0.9), cc.scaleTo(0.5, 0.3 * 1.1))));
                }
                else {
                    btn_lq.node.stopAllActions();
                    btn_lq.scaleX = 0.3;
                    btn_lq.scaleY = 0.3;
                    btn_lq.enabled = false;
                }
            }
            else {
                btn_lq.clearClick();
                btn_lq.visible = false;
            }
        };
        var this_1 = this;
        for (var index = 0; index < list.length; index++) {
            _loop_1(index);
        }
    };
    redPacket.prototype.initIntroduce = function () {
        var reddata = LobbyViewCtr_1.default.instance.Model.redpacketData;
        var des = reddata.des;
        var desText = this.ui_introduceNode.getChild("introduceText").asTextField;
        desText.text = des;
    };
    redPacket.prototype.sendReceiveGold = function (userid) {
        AudioManager_1.AudioManager.Singleton.play('redPacket', "button");
        var cidx = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx;
        LobbyViewCtr_1.default.instance.cs_receiveextendgold(cidx, userid);
    };
    // 领取成功
    redPacket.prototype.receiveSuccess = function () {
        CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("領取成功");
        var cidx = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx;
        LobbyViewCtr_1.default.instance.cs_extendredinfo(cidx);
    };
    return redPacket;
}(ViewBase_1.default));
exports.default = redPacket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHJlZFBhY2tldFxccmVkUGFja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSxvRUFBbUU7QUFDbkUsa0VBQTZEO0FBQzdELDJEQUEwRDtBQUMxRCx5REFBd0Q7QUFFeEQsZ0RBQTJDO0FBRTNDOztHQUVHO0FBQ0g7SUFBdUMsNkJBQVE7SUFBL0M7UUFBQSxxRUFzSEM7UUEzR1csa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBQ2xDLHNCQUFnQixHQUFvQixJQUFJLENBQUM7UUFDekMsc0JBQWdCLEdBQWUsSUFBSSxDQUFDO1FBQ3BDLG9CQUFjLEdBQW9CLElBQUksQ0FBQztRQUN2QyxzQkFBZ0IsR0FBb0IsSUFBSSxDQUFDOztJQXVHckQsQ0FBQztJQXJIRyxzQkFBYywwQ0FBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLGtDQUFXO2FBQXpCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxvQ0FBYTthQUEzQjtZQUNJLE9BQU8sZ0JBQWdCLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFRRCx5Q0FBcUIsR0FBckI7UUFDSSxpQkFBTSxxQkFBcUIsV0FBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRUQsbUNBQWUsR0FBZjtRQUNJLGlCQUFNLGVBQWUsV0FBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQ0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUN0QiwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxJ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QUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDMUUsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUN0QixJQUFJLE9BQU8sR0FBb0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDM0YsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQztJQUVNLG1DQUFlLEdBQXRCLFVBQXVCLE1BQWM7UUFDakMsMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNuRCxJQUFJLElBQUksR0FBVywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3BELHNCQUFZLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsT0FBTztJQUNBLGtDQUFjLEdBQXJCO1FBQ0kscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksR0FBVywyQkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3BELHNCQUFZLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDTCxnQkFBQztBQUFELENBdEhBLEFBc0hDLENBdEhzQyxrQkFBUSxHQXNIOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXJcIjtcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xuaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcbmltcG9ydCB7IExvZ2luVmlld0N0ciB9IGZyb20gXCIuLi8uLi9Mb2dpbi9Mb2dpblZpZXdDdHJcIjtcbmltcG9ydCB7IHNjX2V4dGVuZHJlZGluZm8gfSBmcm9tIFwiLi4vTG9iYnlOZXREYXRhXCI7XG5pbXBvcnQgTG9iYnlWaWV3Q3RyIGZyb20gXCIuLi9Mb2JieVZpZXdDdHJcIjtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5o6o5bm/57qi5YyFXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlZFBhY2tldCBleHRlbmRzIFZpZXdCYXNlIHtcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiZ2FtZUhhbGxcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJyZXMvTG9iYnlcIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInJlZFBhY2tldExheWVyXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1aV9idG5fYnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9pbnRyb2R1Y2VOb2RlOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfcmVkcGFja2V0TGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9yZWNlaXZlZ29sZDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX25vcmVjZWl2ZWdvbGQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG5cbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFsbENoaWxkQ3JlYXRlZCgpIHtcbiAgICAgICAgc3VwZXIuYWxsQ2hpbGRDcmVhdGVkKCk7XG4gICAgfVxuXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLnVpX2J0bl9icmVhay5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgncmVkUGFja2V0JywgXCJidXR0b25cIik7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLlNob3coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2hvdygpIHtcbiAgICAgICAgc3VwZXIuU2hvdygpO1xuICAgICAgICB0aGlzLmluaXREYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIEhpZGUoKSB7XG4gICAgICAgIHN1cGVyLkhpZGUoKTtcbiAgICB9XG5cbiAgICAvLyDliJ3lp4vljJZcbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XG4gICAgICAgIC8vIOWIneWni+WMluS7i+e7jVxuICAgICAgICB0aGlzLmluaXRJbnRyb2R1Y2UoKTtcbiAgICAgICAgLy8g5Yid5aeL5YyW5YiX6KGo5pWw5o2uXG4gICAgICAgIHRoaXMuaW5pdExpc3REYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXRMaXN0RGF0YSgpIHtcbiAgICAgICAgdGhpcy51aV9yZWRwYWNrZXRMaXN0LnJlbW92ZUNoaWxkcmVuVG9Qb29sKCk7XG4gICAgICAgIGxldCByZWRkYXRhOiBzY19leHRlbmRyZWRpbmZvID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnJlZHBhY2tldERhdGE7XG4gICAgICAgIGxldCBsaXN0ID0gcmVkZGF0YS5jYWxpc3Q7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NfZXh0ZW5kcmVkaW5mbyA9PT0gXCIsIHJlZGRhdGEpO1xuICAgICAgICAvLyDorr7nva7mmL7npLrlt7Lpooblj5bmnKrpooblj5ZcbiAgICAgICAgdGhpcy51aV9yZWNlaXZlZ29sZC50ZXh0ID0gXCLlt7Lpooblj5bvvJpcIiArIFVJVXRpbC5mb3JtYXROdW1iZXIxMDAocmVkZGF0YS5yZWNlaXZlZ29sZCk7XG4gICAgICAgIHRoaXMudWlfbm9yZWNlaXZlZ29sZC50ZXh0ID0gXCLmnKrpooblj5bvvJpcIiArIFVJVXRpbC5mb3JtYXROdW1iZXIxMDAocmVkZGF0YS5Ob1JlY2VpdmVHb2xkKTtcbiAgICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS5Jc1JlY2VpdmUgLSBiLklzUmVjZWl2ZTtcbiAgICAgICAgfSlcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMudWlfcmVkcGFja2V0TGlzdC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gbGlzdFtpbmRleF07XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkKFwibmlja25hbWVcIikuYXNUZXh0RmllbGQudGV4dCA9IGRhdGEubmFtZSArIFwiXCI7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkKFwidXNlcmlkXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBkYXRhLlVzZXJJRCArIFwiXCI7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkKFwiZ29sZG51bVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChyZWRkYXRhLmdvbGQpICsgXCJcIjtcbiAgICAgICAgICAgIGxldCBpc0NhbkxROiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgcGVyY2VudDogbnVtYmVyID0gTWF0aC5mbG9vcihkYXRhLmluY29tZSAqIDEwMCAvIHJlZGRhdGEuYWdlbnRUYXJnZXQpO1xuICAgICAgICAgICAgcGVyY2VudCA9IHBlcmNlbnQgPiAxMDAgPyAxMDAgOiBwZXJjZW50O1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZChcInBlcmNlbnRcIikuYXNUZXh0RmllbGQudGV4dCA9IHBlcmNlbnQgKyBcIiVcIjsvL1VJVXRpbC5mb3JtYXROdW1iZXIxMDAoZGF0YS5pbmNvbWUpICsgXCIvXCIgKyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKHJlZGRhdGEuYWdlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzQmFyOiBmZ3VpLkdQcm9ncmVzc0JhciA9IGl0ZW0uZ2V0Q2hpbGQoXCJwcm9ncmVzc0JhclwiKS5hc1Byb2dyZXNzO1xuICAgICAgICAgICAgcHJvZ3Jlc3NCYXIudmFsdWUgPSBwZXJjZW50O1xuICAgICAgICAgICAgaXNDYW5MUSA9IGRhdGEuaW5jb21lID49IHJlZGRhdGEuYWdlbnRUYXJnZXQ7XG4gICAgICAgICAgICBsZXQgYnRuX2xxOiBmZ3VpLkdCdXR0b24gPSBpdGVtLmdldENoaWxkKFwiYnRuX2xpbmdxdVwiKS5hc0J1dHRvbjtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGQoXCJzdGF0dXNUZXh0XCIpLmFzVGV4dEZpZWxkLnZpc2libGUgPSBkYXRhLklzUmVjZWl2ZSAhPSAwO1xuICAgICAgICAgICAgaWYgKGRhdGEuSXNSZWNlaXZlID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDYW5MUSkge1xuICAgICAgICAgICAgICAgICAgICBidG5fbHEuY2xlYXJDbGljaygpO1xuICAgICAgICAgICAgICAgICAgICBidG5fbHEub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZWNlaXZlR29sZChkYXRhLlVzZXJJRCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGJ0bl9scS5ub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC41LCAwLjMgKiAwLjkpLCBjYy5zY2FsZVRvKDAuNSwgMC4zICogMS4xKSkpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidG5fbHEubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICBidG5fbHEuc2NhbGVYID0gMC4zO1xuICAgICAgICAgICAgICAgICAgICBidG5fbHEuc2NhbGVZID0gMC4zO1xuICAgICAgICAgICAgICAgICAgICBidG5fbHEuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnRuX2xxLmNsZWFyQ2xpY2soKTtcbiAgICAgICAgICAgICAgICBidG5fbHEudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdEludHJvZHVjZSgpIHtcbiAgICAgICAgbGV0IHJlZGRhdGE6IHNjX2V4dGVuZHJlZGluZm8gPSBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwucmVkcGFja2V0RGF0YTtcbiAgICAgICAgbGV0IGRlcyA9IHJlZGRhdGEuZGVzO1xuICAgICAgICBsZXQgZGVzVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gdGhpcy51aV9pbnRyb2R1Y2VOb2RlLmdldENoaWxkKFwiaW50cm9kdWNlVGV4dFwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgZGVzVGV4dC50ZXh0ID0gZGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZW5kUmVjZWl2ZUdvbGQodXNlcmlkOiBudW1iZXIpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdyZWRQYWNrZXQnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgbGV0IGNpZHg6IG51bWJlciA9IExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4O1xuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfcmVjZWl2ZWV4dGVuZGdvbGQoY2lkeCwgdXNlcmlkKTtcbiAgICB9XG5cbiAgICAvLyDpooblj5bmiJDlip9cbiAgICBwdWJsaWMgcmVjZWl2ZVN1Y2Nlc3MoKSB7XG4gICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIumgmOWPluaIkOWKn1wiKTtcbiAgICAgICAgbGV0IGNpZHg6IG51bWJlciA9IExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4O1xuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfZXh0ZW5kcmVkaW5mbyhjaWR4KTtcbiAgICB9XG59Il19
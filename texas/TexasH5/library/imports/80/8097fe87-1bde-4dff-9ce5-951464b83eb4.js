"use strict";
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
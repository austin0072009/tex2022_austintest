"use strict";
cc._RF.push(module, 'e80b45AbWpBe6gL+Q/fuFrp', 'CExtractRecord');
// GameHall/script/Lobby/Community/CExtractRecord.ts

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
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var LoginViewCtr_1 = require("../../Login/LoginViewCtr");
/**
 * @description 基金记录
 */
var CExtractRecord = /** @class */ (function (_super) {
    __extends(CExtractRecord, _super);
    function CExtractRecord() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_extractBreak = null;
        _this.ui_extractList = null;
        _this.typeDown = null;
        _this.changeType = ["全部", "轉入", "轉出"];
        _this.selectChangType = "全部";
        _this.recordList = null;
        return _this;
    }
    Object.defineProperty(CExtractRecord.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CExtractRecord.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CExtractRecord.prototype, "componentName", {
        get: function () {
            return "ExtractRecord";
        },
        enumerable: false,
        configurable: true
    });
    CExtractRecord.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.ui_extractList.removeChildrenToPool();
        this.fguiComponent.sortingOrder = 9888;
    };
    CExtractRecord.prototype.OnLoadCompleted = function () {
        var _this = this;
        this.typeDown = this.fguiComponent.getChild("n49").asComboBox;
        this.typeDown.items = this.changeType;
        this.typeDown.text = this.changeType[0];
        this.typeDown.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);
        this.ui_btn_extractBreak.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CExtractRecord', "button");
            _this.Hide();
        });
        this.Show();
    };
    CExtractRecord.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.selectChangType = this.changeType[0];
        this.getExtractRecordDate();
    };
    CExtractRecord.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    CExtractRecord.prototype.onChanged = function () {
        AudioManager_1.AudioManager.Singleton.play('CExtractRecord', "button");
        this.selectChangType = this.changeType[this.typeDown.selectedIndex];
        this.initExtractRecordList(this.recordList);
    };
    CExtractRecord.prototype.getExtractRecordDate = function () {
        var self = this;
        // let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetFundlog";
        // let params = {
        //     userid: LoginViewCtr.instance.Model.mPlayerModel.userid,
        //     clubid: LoginViewCtr.instance.Model.cidx
        // }
        // HttpHelpEx.instance.post(url, params).then((res) => {
        //     console.log("---GetFundlog---", res);
        //     if (res.code == 1) {
        //         self.initExtractRecordList(res.data);
        //     } else {
        //         CommonCtr.instance.view.ShowTipLabel("获取记录失败");
        //     }
        // }).catch((err) => {
        //     console.log("---err---", err)
        //     CommonCtr.instance.view.ShowTipLabel("获取记录失败");
        // })
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetFundlog" + ("?clubid=" + LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
        HttpHelpEx_1.default.instance.get(url)
            .then(function (res) {
            console.log("---GetFundlog---", res);
            if (res.code == 1) {
                self.recordList = res.data;
                self.initExtractRecordList(res.data);
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取记录失败");
            }
        })
            .catch(function () {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取记录失败");
        });
    };
    CExtractRecord.prototype.initExtractRecordList = function (m_list) {
        this.ui_extractList.removeChildrenToPool();
        for (var index = 0; index < m_list.length; index++) {
            var data = m_list[index];
            if (this.selectChangType == this.changeType[1] && data.changeType == 1) {
                var item = this.ui_extractList.addItemFromPool().asCom;
                item.getChild("n1").asTextField.text = UIUtil_1.UIUtil.formatNumber100(data.gold) + ""; // 金额
                item.getChild("n2").asTextField.text = data.time + ""; // 时间
                item.getChild("n4").asTextField.text = this.changeType[1]; //状态
            }
            if (this.selectChangType == this.changeType[2] && data.changeType != 1) {
                var item = this.ui_extractList.addItemFromPool().asCom;
                item.getChild("n1").asTextField.text = UIUtil_1.UIUtil.formatNumber100(data.gold) + ""; // 金额
                item.getChild("n2").asTextField.text = data.time + ""; // 时间
                item.getChild("n4").asTextField.text = this.changeType[2]; //状态
            }
            if (this.selectChangType == this.changeType[0]) {
                var item = this.ui_extractList.addItemFromPool().asCom;
                item.getChild("n1").asTextField.text = UIUtil_1.UIUtil.formatNumber100(data.gold) + ""; // 金额
                item.getChild("n2").asTextField.text = data.time + ""; // 时间
                item.getChild("n4").asTextField.text = data.changeType == 1 ? "轉入" : "轉出"; //状态
            }
        }
    };
    return CExtractRecord;
}(ViewBase_1.default));
exports.default = CExtractRecord;

cc._RF.pop();
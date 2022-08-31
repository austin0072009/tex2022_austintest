"use strict";
cc._RF.push(module, '186bdVXsl9Bt5CDiIaUDXjf', 'WelfareQuestItem');
// GameHall/script/Lobby/welfare/WelfareQuestItem.ts

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
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var WelfareQuestItem = /** @class */ (function (_super) {
    __extends(WelfareQuestItem, _super);
    function WelfareQuestItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelfareQuestItem.prototype.onConstruct = function () {
        this.gold = this.getChild("gold").asTextField;
        this.rwTitle = this.getChild("title").asTextField;
        this.desc = this.getChild("desc").asTextField;
        this.btn_Collect = this.getChild("btn_Collect").asButton;
        this.btn_complete = this.getChild("btn_complete").asButton;
        this.btn_Collect.onClick(this.collect, this);
        this.btn_complete.onClick(this.goComplete, this);
        this.typeController = this.getController("type");
        this.imageLoader = this.getChild("n0").asLoader;
        this.gold._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.rwTitle._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.desc._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.btn_Collect.getTextField()._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.btn_complete.getTextField()._label.cacheMode = cc.Label.CacheMode.CHAR;
    };
    /**领取 */
    WelfareQuestItem.prototype.collect = function (event) {
        event.bubbles = false;
        AudioManager_1.AudioManager.Singleton.play('WelfareQuestItem', "button");
        LobbyViewCtr_1.default.instance.cs_award(this.taskid);
    };
    /**去完成 */
    WelfareQuestItem.prototype.goComplete = function (event) {
        event.bubbles = false;
        AudioManager_1.AudioManager.Singleton.play('WelfareQuestItem', "button");
        var view = LobbyViewCtr_1.default.instance.view;
        view.welfareView && view.welfareView.Hide();
        if (this.tname.indexOf("设置") != -1 || this.tname.indexOf("更换") != -1) {
            view.showMyinfoView(); //设置
        }
        else if (this.tname.indexOf("充值") != -1) {
            view.showTopup(); //设置
        }
        else if (this.tname.indexOf("德州扑克") != -1) {
            view.barController.selectedIndex = 3;
        }
        else {
            view.barController.selectedIndex = 5;
            view.entertainmentView.Show();
        }
    };
    /**设置数据 */
    WelfareQuestItem.prototype.setData = function (data) {
        this.taskid = data.taskid;
        this.rwTitle.text = data.name; //任务名字
        this.tname = data.name;
        if (data.name.indexOf("签到") == -1) {
            this.desc.text = data.remark + "(" + data.current + "/" + data.total + ")"; //任务描述
        }
        else {
            this.desc.text = "" + data.remark; //任务描述
        }
        if (data.pic) {
            UIUtil_1.UIUtil.loadShopImage(this.imageLoader, data.pic);
        }
        if (data.iscomplate) {
            if (data.isaward) {
                this.typeController.setSelectedIndex(2);
            }
            else {
                this.typeController.setSelectedIndex(1);
            }
        }
        else {
            this.typeController.setSelectedIndex(0);
        }
        for (var i = 0; i < data.prizes.length; i++) {
            // if (data.prizes[i].type == 1) {
            //     this.gold.text = data.prizes[0].num + '';
            // } else if (data.prizes[i].type == 2) {
            //     this.gold.text = data.prizes[0].num * 1000 + '';
            // } else if (data.prizes[i].type == 3) {
            //     this.gold.text = data.prizes[0].num * 500 + '';
            // } else if (data.prizes[i].type == 4) {
            //     this.gold.text = data.prizes[0].num * 400 + '';
            // } else if (data.prizes[i].type == 5) {
            //     this.gold.text = data.prizes[0].num * 300 + '';
            // } else if (data.prizes[i].type == 6) {
            //     this.gold.text = data.prizes[0].num * 200 + '';
            // } else {
            this.gold.text = data.prizes[0].name + '';
            //}
        }
    };
    return WelfareQuestItem;
}(fgui.GButton));
exports.default = WelfareQuestItem;

cc._RF.pop();
"use strict";
cc._RF.push(module, '06c24ZVqXNH1qekRPvHSCSg', 'MyCardDerailsView');
// GameHall/script/Lobby/career/MyCardDerailsView.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var LanguageConfig_1 = require("../LanguageConfig");
/*
 * @description 牌局详情
 */
var MyCardDerailsView = /** @class */ (function (_super) {
    __extends(MyCardDerailsView, _super);
    function MyCardDerailsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_cardDerailsBreak = null;
        _this.ui_time = null; //时间
        _this.ui_bet = null; //盲
        _this.ui_n93 = null; //总手数
        _this.ui_n94 = null; //最大POT
        _this.ui_n95 = null; //总带入
        _this.ui_n96 = null; //保险池
        _this.ui_n98 = null;
        _this.ui_n99 = null;
        _this.ui_n100 = null;
        _this.ui_n112 = null; //大鱼
        _this.ui_n113 = null;
        _this.ui_n114 = null;
        _this.ui_n102 = null; //昵称
        _this.ui_n103 = null; //昵称
        _this.ui_n104 = null; //昵称
        _this.ui_playList = null; //列表  
        _this.cid = ""; //收藏ID
        _this.isLoadend = false;
        return _this;
    }
    Object.defineProperty(MyCardDerailsView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyCardDerailsView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyCardDerailsView.prototype, "componentName", {
        get: function () {
            return "cardDerails";
        },
        enumerable: false,
        configurable: true
    });
    MyCardDerailsView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_cardDerailsBreak.onClick(this.Hide, this);
    };
    MyCardDerailsView.prototype.OnLoadCompleted = function () {
        this.isLoadend = true;
        if (this.mystart)
            this.Show();
    };
    MyCardDerailsView.prototype.MyStart = function (_cid) {
        this.cid = _cid;
        this.mystart = true;
        if (this.isLoadend)
            this.Show();
    };
    MyCardDerailsView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        // let _getlist: cs_getscollectbyid_tex = new cs_getscollectbyid_tex();
        // _getlist.cid = this.cid;
        // console.log("_getlist.cid === ", _getlist.cid);
        // _getlist._g = 51;
        // _getlist.fn = "cs_getscollectbyid_tex";
        // WebSocketManager.getInstance.SendJSON(_getlist, this.sc_getscollectbyid_tex.bind(this));
        this.getTableInfoByTid();
    };
    MyCardDerailsView.prototype.getTableInfoByTid = function () {
        var _this = this;
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetTableRecordInfoLog";
        var params = {
            userid: AppConst_1.AppConst.mPlayerModel.userid,
            tnum: this.cid,
            gameid: 51
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log(url + " === ", res);
            if (res.code == 1) {
                _this.initTableData(res.data[0]);
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11008));
            }
        }).catch(function (err) {
            console.log("---err---", err);
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11008));
        });
    };
    MyCardDerailsView.prototype.initTableData = function (data) {
        console.log("bigEndList == ", JSON.parse(data.bigEndList));
        console.log("gameDetails == ", JSON.parse(data.gameDetails));
        console.log("plist == ", JSON.parse(data.plist));
        var bigEndList = JSON.parse(data.bigEndList);
        this.ui_time.text = bigEndList.btime;
        this.ui_bet.text = "大/小盲:" + (UIUtil_1.UIUtil.formatNumber100(data.bg) * 2) + "/" + UIUtil_1.UIUtil.formatNumber100(data.bg);
        this.ui_n93.text = bigEndList.pc + ""; //总手数
        // this.ui_n94.text = data.maxPot + "";//最大POT
        // this.ui_n96.text = data.tinfo.ipool + "";//保险池
        this.ui_n95.text = UIUtil_1.UIUtil.formatNumber100(bigEndList.allintogold) + ""; //总带入
        var gainlist = bigEndList.gainlist;
        gainlist.sort(function (a, b) {
            return b.gain - a.gain;
        });
        console.log("gainlist == ", gainlist);
        var userID0 = gainlist[0] == null ? 0 : gainlist[0].UserID;
        var userID1 = gainlist[1] == null ? 0 : gainlist[1].UserID;
        var userID2 = gainlist[2] == null ? 0 : gainlist[2].UserID;
        this.ui_n112.visible = gainlist.length >= 1;
        this.ui_n113.visible = gainlist.length >= 2;
        this.ui_n114.visible = gainlist.length >= 3;
        this.ui_n98.visible = gainlist.length >= 1;
        this.ui_n99.visible = gainlist.length >= 2;
        this.ui_n100.visible = gainlist.length >= 3;
        this.ui_n102.visible = gainlist.length >= 1;
        this.ui_n103.visible = gainlist.length >= 2;
        this.ui_n104.visible = gainlist.length >= 3;
        this.setUserInfo(gainlist, userID0, this.ui_n112.getChild("n0").asLoader, this.ui_n102);
        this.setUserInfo(gainlist, userID1, this.ui_n113.getChild("n0").asLoader, this.ui_n103);
        this.setUserInfo(gainlist, userID2, this.ui_n114.getChild("n0").asLoader, this.ui_n104);
        this.ui_playList.removeChildrenToPool();
        for (var i = 0; i < gainlist.length; i++) {
            var go = this.ui_playList.addItemFromPool().asCom;
            this.setUserInfo(gainlist, gainlist[i].UserID, go.getChild("n5").asCom.getChild("n0").asLoader, go.getChild("n1").asTextField);
            go.getChild("n2").asTextField.text = "带入：" + UIUtil_1.UIUtil.formatNumber100(gainlist[i].finto) + "";
            go.getChild("n3").asTextField.text = "手数：" + gainlist[i].pcount + "";
            go.getChild("n4").asTextField.text = UIUtil_1.UIUtil.formatNumber100(gainlist[i].gain) + "";
        }
    };
    MyCardDerailsView.prototype.sc_getscollectbyid_tex = function (data) {
        // if (data.result != 1) {
        //     console.error("获取数据错误：" + data.result);
        //     return;
        // }
        // let tInfo = data.tinfo.tInfo
        // this.ui_time.text = data.cTime;
        // this.ui_bet.text = "大/小盲:" + (data.baserate * 2) + "/" + data.baserate;
        // this.ui_n93.text = data.tinfo.handcount + "";//总手数
        // this.ui_n94.text = data.maxPot + "";//最大POT
        // this.ui_n96.text = data.tinfo.ipool + "";//保险池
        // let userID0 = tInfo[0] == null ? 0 : tInfo[0].id;
        // let userID1 = tInfo[1] == null ? 0 : tInfo[1].id;
        // let userID2 = tInfo[2] == null ? 0 : tInfo[2].id;
        // this.setUserInfo(data.ulist, userID0, this.ui_n112.getChild("n0").asLoader, this.ui_n102);
        // this.setUserInfo(data.ulist, userID1, this.ui_n113.getChild("n0").asLoader, this.ui_n103);
        // this.setUserInfo(data.ulist, userID2, this.ui_n114.getChild("n0").asLoader, this.ui_n104);
        // let totalinto = 0;
        // this.ui_playList.removeChildrenToPool();
        // for (var i = 0; i < tInfo.length; i++) {
        //     let go = this.ui_playList.addItemFromPool().asCom;
        //     this.setUserInfo(data.ulist, tInfo[i].id, go.getChild("n5").asCom.getChild("n0").asLoader, go.getChild("n1").asTextField);
        //     go.getChild("n2").asTextField.text = "带入：" + UIUtil.formatNumber100(tInfo[i].totalinto) + "";
        //     go.getChild("n3").asTextField.text = "手数：" + tInfo[i].hcount + "";
        //     go.getChild("n4").asTextField.text = tInfo[i].wg > 0 ? "+" + tInfo[i].wg : tInfo[i].wg + "";
        //     totalinto += tInfo[i].totalinto;
        // }
        // this.ui_n95.text = UIUtil.formatNumber100(totalinto) + "";//总带入
    };
    MyCardDerailsView.prototype.setUserInfo = function (ulist, userid, headLoader, txtName) {
        for (var i = 0; i < ulist.length; i++) {
            if (userid == ulist[i].UserID) {
                UIUtil_1.UIUtil.loadImage(headLoader, ulist[i].wechat.wicon);
                txtName.text = ulist[i].wechat.wName;
                return;
            }
        }
    };
    return MyCardDerailsView;
}(ViewBase_1.default));
exports.default = MyCardDerailsView;

cc._RF.pop();
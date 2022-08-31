
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/career/MyCardDerailsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGNhcmVlclxcTXlDYXJkRGVyYWlsc1ZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Esa0VBQTZEO0FBRTdELDJEQUEwRDtBQUMxRCxzRUFBcUU7QUFDckUsMkZBQTBGO0FBQzFGLDRFQUF1RTtBQUN2RSxvRUFBbUU7QUFDbkUsb0RBQW1EO0FBRW5EOztHQUVHO0FBQ0g7SUFBK0MscUNBQVE7SUFBdkQ7UUFBQSxxRUFtS0M7UUF4SlUsNkJBQXVCLEdBQWlCLElBQUksQ0FBQztRQUU3QyxhQUFPLEdBQW9CLElBQUksQ0FBQyxDQUFBLElBQUk7UUFDcEMsWUFBTSxHQUFvQixJQUFJLENBQUMsQ0FBQSxHQUFHO1FBQ2xDLFlBQU0sR0FBb0IsSUFBSSxDQUFDLENBQUEsS0FBSztRQUNwQyxZQUFNLEdBQW9CLElBQUksQ0FBQyxDQUFBLE9BQU87UUFDdEMsWUFBTSxHQUFvQixJQUFJLENBQUMsQ0FBQSxLQUFLO1FBQ3BDLFlBQU0sR0FBb0IsSUFBSSxDQUFDLENBQUEsS0FBSztRQUNwQyxZQUFNLEdBQWdCLElBQUksQ0FBQztRQUMzQixZQUFNLEdBQWdCLElBQUksQ0FBQztRQUMzQixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUM1QixhQUFPLEdBQW9CLElBQUksQ0FBQyxDQUFBLElBQUk7UUFDcEMsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsYUFBTyxHQUFvQixJQUFJLENBQUM7UUFDaEMsYUFBTyxHQUFvQixJQUFJLENBQUMsQ0FBQSxJQUFJO1FBQ3BDLGFBQU8sR0FBb0IsSUFBSSxDQUFDLENBQUEsSUFBSTtRQUNwQyxhQUFPLEdBQW9CLElBQUksQ0FBQyxDQUFBLElBQUk7UUFDcEMsaUJBQVcsR0FBZSxJQUFJLENBQUMsQ0FBQSxNQUFNO1FBRXJDLFNBQUcsR0FBVyxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBUXRCLGVBQVMsR0FB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QUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0QsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzNELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFP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O2dCQUNwRCxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNyQyxPQUFPO2FBQ1Y7U0FDSjtJQUNMLENBQUM7SUFDTCx3QkFBQztBQUFELENBbktBLEFBbUtDLENBbks4QyxrQkFBUSxHQW1LdEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZEluZm9JdGVtIGZyb20gXCIuL0NhcmRJbmZvSXRlbVwiO1xyXG5pbXBvcnQgeyBjc19nZXRzY29sbGVjdGJ5aWRfdGV4LCBzY19nZXRzY29sbGVjdGJ5aWRfdGV4IH0gZnJvbSBcIi4vQ2FyZWVyTmV0RGF0YVN0cnVjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZUdhaW5TRCwgVGV4VEluZm9TRCwgUEluZm9TRCB9IGZyb20gJy4uLy4uLy4uLy4uL0dhbWVzL3RleGFzL3NjcmlwdC9Nb2RlbC9UZXhhc05ldERhdGEnO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IHsgV2ViU29ja2V0TWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1dlYlNvY2tldE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XHJcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XHJcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XHJcbmltcG9ydCBIdHRwSGVscEV4IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL01hbmFnZXJzL0h0dHBIZWxwRXhcIjtcclxuaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XHJcbmltcG9ydCB7IExhbmd1YWdlQ29uZmlnIH0gZnJvbSBcIi4uL0xhbmd1YWdlQ29uZmlnXCI7XHJcblxyXG4vKlxyXG4gKiBAZGVzY3JpcHRpb24g54mM5bGA6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUNhcmREZXJhaWxzVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiY2FyZERlcmFpbHNcIjtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1aV9idG5fY2FyZERlcmFpbHNCcmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgdWlfdGltZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+aXtumXtFxyXG4gICAgcHVibGljIHVpX2JldDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+ebslxyXG4gICAgcHVibGljIHVpX245MzogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+aAu+aJi+aVsFxyXG4gICAgcHVibGljIHVpX245NDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+acgOWkp1BPVFxyXG4gICAgcHVibGljIHVpX245NTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+aAu+W4puWFpVxyXG4gICAgcHVibGljIHVpX245NjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+S/nemZqeaxoFxyXG4gICAgcHVibGljIHVpX245ODogZmd1aS5HSW1hZ2UgPSBudWxsO1xyXG4gICAgcHVibGljIHVpX245OTogZmd1aS5HSW1hZ2UgPSBudWxsO1xyXG4gICAgcHVibGljIHVpX24xMDA6IGZndWkuR0ltYWdlID0gbnVsbDtcclxuICAgIHB1YmxpYyB1aV9uMTEyOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsOy8v5aSn6bG8XHJcbiAgICBwdWJsaWMgdWlfbjExMzogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHB1YmxpYyB1aV9uMTE0OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHVibGljIHVpX24xMDI6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7Ly/mmLXnp7BcclxuICAgIHB1YmxpYyB1aV9uMTAzOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsOy8v5pi156ewXHJcbiAgICBwdWJsaWMgdWlfbjEwNDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+aYteensFxyXG4gICAgcHVibGljIHVpX3BsYXlMaXN0OiBmZ3VpLkdMaXN0ID0gbnVsbDsvL+WIl+ihqCAgXHJcblxyXG4gICAgcHVibGljIGNpZDogc3RyaW5nID0gXCJcIjsvL+aUtuiXj0lEXHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fY2FyZERlcmFpbHNCcmVhay5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0xvYWRlbmQgPSBmYWxzZTtcclxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcclxuICAgICAgICB0aGlzLmlzTG9hZGVuZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMubXlzdGFydCkgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgTXlTdGFydChfY2lkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNpZCA9IF9jaWQ7XHJcbiAgICAgICAgdGhpcy5teXN0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5pc0xvYWRlbmQpIHRoaXMuU2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIFNob3coKSB7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgICAgIC8vIGxldCBfZ2V0bGlzdDogY3NfZ2V0c2NvbGxlY3RieWlkX3RleCA9IG5ldyBjc19nZXRzY29sbGVjdGJ5aWRfdGV4KCk7XHJcbiAgICAgICAgLy8gX2dldGxpc3QuY2lkID0gdGhpcy5jaWQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJfZ2V0bGlzdC5jaWQgPT09IFwiLCBfZ2V0bGlzdC5jaWQpO1xyXG4gICAgICAgIC8vIF9nZXRsaXN0Ll9nID0gNTE7XHJcbiAgICAgICAgLy8gX2dldGxpc3QuZm4gPSBcImNzX2dldHNjb2xsZWN0YnlpZF90ZXhcIjtcclxuICAgICAgICAvLyBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKF9nZXRsaXN0LCB0aGlzLnNjX2dldHNjb2xsZWN0YnlpZF90ZXguYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5nZXRUYWJsZUluZm9CeVRpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUYWJsZUluZm9CeVRpZCgpIHtcclxuICAgICAgICBsZXQgdXJsID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJdGVtLmFwaUFkcmVzcyArIFwiL2FwaS9HYW1lbG9nL0dldFRhYmxlUmVjb3JkSW5mb0xvZ1wiO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIHVzZXJpZDogQXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZCxcclxuICAgICAgICAgICAgdG51bTogdGhpcy5jaWQsXHJcbiAgICAgICAgICAgIGdhbWVpZDogNTFcclxuICAgICAgICB9XHJcbiAgICAgICAgSHR0cEhlbHBFeC5pbnN0YW5jZS5wb3N0KHVybCwgcGFyYW1zKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXJsICsgXCIgPT09IFwiLCByZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0VGFibGVEYXRhKHJlcy5kYXRhWzBdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTEwMDgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS1lcnItLS1cIiwgZXJyKVxyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDExMDA4KSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdFRhYmxlRGF0YShkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImJpZ0VuZExpc3QgPT0gXCIsIEpTT04ucGFyc2UoZGF0YS5iaWdFbmRMaXN0KSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnYW1lRGV0YWlscyA9PSBcIiwgSlNPTi5wYXJzZShkYXRhLmdhbWVEZXRhaWxzKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGlzdCA9PSBcIiwgSlNPTi5wYXJzZShkYXRhLnBsaXN0KSk7XHJcbiAgICAgICAgbGV0IGJpZ0VuZExpc3QgPSBKU09OLnBhcnNlKGRhdGEuYmlnRW5kTGlzdCk7XHJcbiAgICAgICAgdGhpcy51aV90aW1lLnRleHQgPSBiaWdFbmRMaXN0LmJ0aW1lO1xyXG4gICAgICAgIHRoaXMudWlfYmV0LnRleHQgPSBcIuWkpy/lsI/nm7I6XCIgKyAoVUlVdGlsLmZvcm1hdE51bWJlcjEwMChkYXRhLmJnKSAqIDIpICsgXCIvXCIgKyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKGRhdGEuYmcpO1xyXG4gICAgICAgIHRoaXMudWlfbjkzLnRleHQgPSBiaWdFbmRMaXN0LnBjICsgXCJcIjsvL+aAu+aJi+aVsFxyXG4gICAgICAgIC8vIHRoaXMudWlfbjk0LnRleHQgPSBkYXRhLm1heFBvdCArIFwiXCI7Ly/mnIDlpKdQT1RcclxuICAgICAgICAvLyB0aGlzLnVpX245Ni50ZXh0ID0gZGF0YS50aW5mby5pcG9vbCArIFwiXCI7Ly/kv53pmanmsaBcclxuICAgICAgICB0aGlzLnVpX245NS50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMChiaWdFbmRMaXN0LmFsbGludG9nb2xkKSArIFwiXCI7Ly/mgLvluKblhaVcclxuICAgICAgICBsZXQgZ2Fpbmxpc3QgPSBiaWdFbmRMaXN0LmdhaW5saXN0O1xyXG4gICAgICAgIGdhaW5saXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGIuZ2FpbiAtIGEuZ2FpbjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2Fpbmxpc3QgPT0gXCIsIGdhaW5saXN0KTtcclxuICAgICAgICBsZXQgdXNlcklEMCA9IGdhaW5saXN0WzBdID09IG51bGwgPyAwIDogZ2Fpbmxpc3RbMF0uVXNlcklEO1xyXG4gICAgICAgIGxldCB1c2VySUQxID0gZ2Fpbmxpc3RbMV0gPT0gbnVsbCA/IDAgOiBnYWlubGlzdFsxXS5Vc2VySUQ7XHJcbiAgICAgICAgbGV0IHVzZXJJRDIgPSBnYWlubGlzdFsyXSA9PSBudWxsID8gMCA6IGdhaW5saXN0WzJdLlVzZXJJRDtcclxuICAgICAgICB0aGlzLnVpX24xMTIudmlzaWJsZSA9IGdhaW5saXN0Lmxlbmd0aCA+PSAxO1xyXG4gICAgICAgIHRoaXMudWlfbjExMy52aXNpYmxlID0gZ2Fpbmxpc3QubGVuZ3RoID49IDI7XHJcbiAgICAgICAgdGhpcy51aV9uMTE0LnZpc2libGUgPSBnYWlubGlzdC5sZW5ndGggPj0gMztcclxuICAgICAgICB0aGlzLnVpX245OC52aXNpYmxlID0gZ2Fpbmxpc3QubGVuZ3RoID49IDE7XHJcbiAgICAgICAgdGhpcy51aV9uOTkudmlzaWJsZSA9IGdhaW5saXN0Lmxlbmd0aCA+PSAyO1xyXG4gICAgICAgIHRoaXMudWlfbjEwMC52aXNpYmxlID0gZ2Fpbmxpc3QubGVuZ3RoID49IDM7XHJcbiAgICAgICAgdGhpcy51aV9uMTAyLnZpc2libGUgPSBnYWlubGlzdC5sZW5ndGggPj0gMTtcclxuICAgICAgICB0aGlzLnVpX24xMDMudmlzaWJsZSA9IGdhaW5saXN0Lmxlbmd0aCA+PSAyO1xyXG4gICAgICAgIHRoaXMudWlfbjEwNC52aXNpYmxlID0gZ2Fpbmxpc3QubGVuZ3RoID49IDM7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VySW5mbyhnYWlubGlzdCwgdXNlcklEMCwgdGhpcy51aV9uMTEyLmdldENoaWxkKFwibjBcIikuYXNMb2FkZXIsIHRoaXMudWlfbjEwMik7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VySW5mbyhnYWlubGlzdCwgdXNlcklEMSwgdGhpcy51aV9uMTEzLmdldENoaWxkKFwibjBcIikuYXNMb2FkZXIsIHRoaXMudWlfbjEwMyk7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VySW5mbyhnYWlubGlzdCwgdXNlcklEMiwgdGhpcy51aV9uMTE0LmdldENoaWxkKFwibjBcIikuYXNMb2FkZXIsIHRoaXMudWlfbjEwNCk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfcGxheUxpc3QucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhaW5saXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBnbyA9IHRoaXMudWlfcGxheUxpc3QuYWRkSXRlbUZyb21Qb29sKCkuYXNDb207XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VXNlckluZm8oZ2Fpbmxpc3QsIGdhaW5saXN0W2ldLlVzZXJJRCwgZ28uZ2V0Q2hpbGQoXCJuNVwiKS5hc0NvbS5nZXRDaGlsZChcIm4wXCIpLmFzTG9hZGVyLCBnby5nZXRDaGlsZChcIm4xXCIpLmFzVGV4dEZpZWxkKTtcclxuICAgICAgICAgICAgZ28uZ2V0Q2hpbGQoXCJuMlwiKS5hc1RleHRGaWVsZC50ZXh0ID0gXCLluKblhaXvvJpcIiArIFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoZ2Fpbmxpc3RbaV0uZmludG8pICsgXCJcIjtcclxuICAgICAgICAgICAgZ28uZ2V0Q2hpbGQoXCJuM1wiKS5hc1RleHRGaWVsZC50ZXh0ID0gXCLmiYvmlbDvvJpcIiArIGdhaW5saXN0W2ldLnBjb3VudCArIFwiXCI7XHJcbiAgICAgICAgICAgIGdvLmdldENoaWxkKFwibjRcIikuYXNUZXh0RmllbGQudGV4dCA9IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoZ2Fpbmxpc3RbaV0uZ2FpbikgKyBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NfZ2V0c2NvbGxlY3RieWlkX3RleChkYXRhOiBzY19nZXRzY29sbGVjdGJ5aWRfdGV4KSB7XHJcbiAgICAgICAgLy8gaWYgKGRhdGEucmVzdWx0ICE9IDEpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihcIuiOt+WPluaVsOaNrumUmeivr++8mlwiICsgZGF0YS5yZXN1bHQpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGxldCB0SW5mbyA9IGRhdGEudGluZm8udEluZm9cclxuICAgICAgICAvLyB0aGlzLnVpX3RpbWUudGV4dCA9IGRhdGEuY1RpbWU7XHJcbiAgICAgICAgLy8gdGhpcy51aV9iZXQudGV4dCA9IFwi5aSnL+Wwj+ebsjpcIiArIChkYXRhLmJhc2VyYXRlICogMikgKyBcIi9cIiArIGRhdGEuYmFzZXJhdGU7XHJcbiAgICAgICAgLy8gdGhpcy51aV9uOTMudGV4dCA9IGRhdGEudGluZm8uaGFuZGNvdW50ICsgXCJcIjsvL+aAu+aJi+aVsFxyXG4gICAgICAgIC8vIHRoaXMudWlfbjk0LnRleHQgPSBkYXRhLm1heFBvdCArIFwiXCI7Ly/mnIDlpKdQT1RcclxuXHJcbiAgICAgICAgLy8gdGhpcy51aV9uOTYudGV4dCA9IGRhdGEudGluZm8uaXBvb2wgKyBcIlwiOy8v5L+d6Zmp5rGgXHJcbiAgICAgICAgLy8gbGV0IHVzZXJJRDAgPSB0SW5mb1swXSA9PSBudWxsID8gMCA6IHRJbmZvWzBdLmlkO1xyXG4gICAgICAgIC8vIGxldCB1c2VySUQxID0gdEluZm9bMV0gPT0gbnVsbCA/IDAgOiB0SW5mb1sxXS5pZDtcclxuICAgICAgICAvLyBsZXQgdXNlcklEMiA9IHRJbmZvWzJdID09IG51bGwgPyAwIDogdEluZm9bMl0uaWQ7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRVc2VySW5mbyhkYXRhLnVsaXN0LCB1c2VySUQwLCB0aGlzLnVpX24xMTIuZ2V0Q2hpbGQoXCJuMFwiKS5hc0xvYWRlciwgdGhpcy51aV9uMTAyKTtcclxuICAgICAgICAvLyB0aGlzLnNldFVzZXJJbmZvKGRhdGEudWxpc3QsIHVzZXJJRDEsIHRoaXMudWlfbjExMy5nZXRDaGlsZChcIm4wXCIpLmFzTG9hZGVyLCB0aGlzLnVpX24xMDMpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0VXNlckluZm8oZGF0YS51bGlzdCwgdXNlcklEMiwgdGhpcy51aV9uMTE0LmdldENoaWxkKFwibjBcIikuYXNMb2FkZXIsIHRoaXMudWlfbjEwNCk7XHJcbiAgICAgICAgLy8gbGV0IHRvdGFsaW50byA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy51aV9wbGF5TGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xyXG4gICAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdEluZm8ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IGdvID0gdGhpcy51aV9wbGF5TGlzdC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbTtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRVc2VySW5mbyhkYXRhLnVsaXN0LCB0SW5mb1tpXS5pZCwgZ28uZ2V0Q2hpbGQoXCJuNVwiKS5hc0NvbS5nZXRDaGlsZChcIm4wXCIpLmFzTG9hZGVyLCBnby5nZXRDaGlsZChcIm4xXCIpLmFzVGV4dEZpZWxkKTtcclxuICAgICAgICAvLyAgICAgZ28uZ2V0Q2hpbGQoXCJuMlwiKS5hc1RleHRGaWVsZC50ZXh0ID0gXCLluKblhaXvvJpcIiArIFVJVXRpbC5mb3JtYXROdW1iZXIxMDAodEluZm9baV0udG90YWxpbnRvKSArIFwiXCI7XHJcbiAgICAgICAgLy8gICAgIGdvLmdldENoaWxkKFwibjNcIikuYXNUZXh0RmllbGQudGV4dCA9IFwi5omL5pWw77yaXCIgKyB0SW5mb1tpXS5oY291bnQgKyBcIlwiO1xyXG4gICAgICAgIC8vICAgICBnby5nZXRDaGlsZChcIm40XCIpLmFzVGV4dEZpZWxkLnRleHQgPSB0SW5mb1tpXS53ZyA+IDAgPyBcIitcIiArIHRJbmZvW2ldLndnIDogdEluZm9baV0ud2cgKyBcIlwiO1xyXG4gICAgICAgIC8vICAgICB0b3RhbGludG8gKz0gdEluZm9baV0udG90YWxpbnRvO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLnVpX245NS50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcjEwMCh0b3RhbGludG8pICsgXCJcIjsvL+aAu+W4puWFpVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VXNlckluZm8odWxpc3Q6IFRhYmxlR2FpblNEW10sIHVzZXJpZCwgaGVhZExvYWRlcjogZmd1aS5HTG9hZGVyLCB0eHROYW1lOiBmZ3VpLkdUZXh0RmllbGQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyaWQgPT0gdWxpc3RbaV0uVXNlcklEKSB7XHJcbiAgICAgICAgICAgICAgICBVSVV0aWwubG9hZEltYWdlKGhlYWRMb2FkZXIsIHVsaXN0W2ldLndlY2hhdC53aWNvbik7XHJcbiAgICAgICAgICAgICAgICB0eHROYW1lLnRleHQgPSB1bGlzdFtpXS53ZWNoYXQud05hbWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
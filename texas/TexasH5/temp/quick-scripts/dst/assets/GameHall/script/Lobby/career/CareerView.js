
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/career/CareerView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '191256lx7VA3oPjD04iA6Zp', 'CareerView');
// GameHall/script/Lobby/career/CareerView.ts

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
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var LoginViewCtr_1 = require("../../Login/LoginViewCtr");
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var LanguageConfig_1 = require("../LanguageConfig");
/*
 * @description 生涯
 */
var CareerView = /** @class */ (function (_super) {
    __extends(CareerView, _super);
    function CareerView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_syBreak = null;
        /**雷达图 */
        _this.ui_radarImage = null;
        /**总局数 */
        _this.ui_allNumInGame = null;
        /**场均战绩 */
        _this.ui_changjunRecord = null;
        /**大盲 百手 */
        _this.ui_damangOrBaishou = null;
        /**总手数 */
        _this.ui_allShoushu = null;
        /**场均带入 */
        _this.ui_changjunDairu = null;
        /**主动入池率 */
        _this.ui_activeRuchi = null;
        /**看牌 翻牌率 */
        _this.ui_seeCard = null;
        /**C-BET */
        _this.ui_cbetRate = null;
        /**激进度 */
        _this.ui_radical = null;
        /**3 bet */
        _this.ui_bet3Rate = null;
        /**加注入池率 */
        _this.ui_addBetRate = null;
        /**牌普 */
        _this.ui_btn_paipu = null;
        /**战绩 item */
        _this.ui_zjCareerItemList = null;
        _this.zjData = []; //战绩数据
        _this.zjSelectData = null;
        _this.DPData = []; //短牌数据
        _this.AOFData = []; //AOF数据
        /**赛事相关 */
        _this.ui_ssResoutList = null; //赛事列表
        _this.ui_n93 = null; //比赛次数
        _this.ui_n95 = null; //钱圈数
        _this.ui_n94 = null; //总手数
        _this.ui_n96 = null; //决赛次数
        /**查找牌局 */
        _this.ui_btn_selectCard = null;
        _this.ui_selectPanel = null; //输入弹框
        _this.ui_inputSelectID = null; //talbeid
        _this.ui_btn_selectOK = null;
        _this.ui_btn_selectClose = null;
        _this.isSelct = false; //是否查询，查询数据需重新解析
        _this.bHistory = false; //是否显示详情
        /**短牌和AOF列表*/
        _this.ui_DPList = null;
        _this.ui_AOFList = null;
        /**-----------赛事 --------------*/
        _this.ssDataList = [];
        _this.ssSelectIndex = 0;
        return _this;
    }
    Object.defineProperty(CareerView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CareerView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CareerView.prototype, "componentName", {
        get: function () {
            return "career";
        },
        enumerable: false,
        configurable: true
    });
    CareerView.prototype.createChildComponents = function () {
        var _this = this;
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_syBreak.onClick(this.Hide, this);
        // let distances = [0.2, 0.2, 0.2, 0.2, 0.2, 0.2];
        // this.ui_radarImage.drawRegularPolygon(1, cc.Color.RED, cc.color(153, 51, 51), 6, 90, distances);
        this.ui_radarImage.clearGraphics();
        this.ui_btn_paipu.onClick(this.showMyCardSpectrum, this);
        this.ui_zjCareerItemList.setVirtual();
        this.ui_zjCareerItemList.itemProvider = this.getListItemResource.bind(this);
        this.ui_zjCareerItemList.itemRenderer = this.renderListItem.bind(this);
        this.ui_DPList.itemProvider = this.getListItemResource.bind(this);
        this.ui_DPList.itemRenderer = this.renderListItem.bind(this);
        this.ui_AOFList.itemProvider = this.getListItemResource.bind(this);
        this.ui_AOFList.itemRenderer = this.renderListItem.bind(this);
        this.ui_ssResoutList.on(fgui.Event.CLICK_ITEM, this.clickSSList, this);
        this.ui_ssResoutList.itemRenderer = this.ssRenderListItem.bind(this);
        /**查找牌局相关 */
        this.ui_btn_selectCard.clearClick();
        this.ui_btn_selectCard.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CareerView', "button");
            _this.showSelectPanel(true);
        });
        this.ui_btn_selectClose.clearClick();
        this.ui_btn_selectClose.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CareerView', "button");
            _this.showSelectPanel(false);
        });
        this.ui_btn_selectOK.clearClick();
        this.ui_btn_selectOK.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('CareerView', "button");
            _this.clickSelectCard();
        });
    };
    CareerView.prototype.OnLoadCompleted = function () {
        this.Show();
    };
    CareerView.prototype.Show = function () {
        //战绩
        this.isSelct = false;
        LobbyViewCtr_1.default.instance.cs_freshplayerInfoSD();
        _super.prototype.Show.call(this);
        this.getTexasZJ();
        this.fguiComponent.getController("game").setSelectedIndex(2);
        //赛事列表
        this.ui_ssResoutList.numItems = 0;
        LobbyViewCtr_1.default.instance.cs_compete_record();
        //查找牌局限制等级
        this.ui_btn_selectCard.visible = LoginViewCtr_1.LoginViewCtr.instance.Model.mPlayerModel.lv >= 19;
    };
    CareerView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('CareerView', "button");
        if (this.isSelct) {
            this.Show();
        }
        else {
            _super.prototype.Hide.call(this);
        }
    };
    CareerView.prototype.showMyCardSpectrum = function () {
        LobbyViewCtr_1.default.instance.view.showMyCardSpectrumView();
    };
    //获取战绩数据
    CareerView.prototype.getTexasZJ = function (_talbeid, _bHistory) {
        if (_talbeid === void 0) { _talbeid = ""; }
        if (_bHistory === void 0) { _bHistory = false; }
        var self = this;
        this.isSelct = false;
        this.bHistory = _bHistory;
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetTableRecordLog"; //BaseFrameNative.serverlistItem.apiAdress
        var params = {
            userid: AppConst_1.AppConst.mPlayerModel.userid,
            tnum: "",
            gameid: 51
        };
        var selectTable = false;
        //查找牌局
        if (_talbeid != "") {
            selectTable = true;
            this.isSelct = !this.bHistory;
            url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Gamelog/GetTableRecordInfoLog";
            params = {
                userid: AppConst_1.AppConst.mPlayerModel.userid,
                tnum: _talbeid,
                gameid: 51
            };
        }
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log(url + " === ", res);
            if (res.code == 1) {
                if (res.data == null || res.data.length == 0) {
                    if (selectTable) {
                        CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11006));
                    }
                    else {
                        CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11007));
                    }
                    return;
                }
                self.LoadTexasZJ(res.data);
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11008));
            }
        }).catch(function (err) {
            console.log("---err---", err);
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11008));
        });
    };
    CareerView.prototype.LoadTexasZJ = function (data) {
        if (data == null || data.length == 0)
            return;
        if (this.bHistory) {
            //显示History
            this.zjSelectData = data[0];
            var derailsData = {
                ulist: JSON.parse(this.zjSelectData.plist),
                tinfo: JSON.parse(this.zjSelectData.gameDetails),
                tnum: this.zjSelectData.roomNum,
                baserate: this.zjSelectData.bg,
                showCard: null
            };
            LobbyViewCtr_1.default.instance.view.showMyCardDerailsView(this.zjSelectData.roomNum + "", derailsData);
            // LobbyViewCtr.instance.view.showMyCardHistory("", derailsData);
        }
        else {
            this.DPData = [];
            this.AOFData = [];
            this.zjData = [];
            this.ui_zjCareerItemList.numItems = 0;
            this.ui_DPList.numItems = 0;
            this.ui_AOFList.numItems = 0;
            if (this.isSelct) {
                //查找列表
                this.zjSelectData = data[0];
                var bigEndList = JSON.parse(this.zjSelectData.bigEndList);
                var gainlist = bigEndList.gainlist;
                var plist = JSON.parse(this.zjSelectData.plist);
                var zj = new Zhanji();
                zj.tnum = this.zjSelectData.roomNum;
                zj.createTime = bigEndList.btime;
                zj.preG = this.zjSelectData.bg;
                zj.level = this.zjSelectData.bg;
                zj.pnum = plist.length;
                // zj.gametype = this.zjSelectData.gametype;
                for (var j = 0; j < gainlist.length; j++) {
                    if (gainlist[j].UserID == LoginViewCtr_1.LoginViewCtr.instance.Model.mPlayerModel.userid) {
                        zj.gains = gainlist[j].gain + "";
                    }
                }
                if (this.fguiComponent.getController("game").selectedIndex == 3) {
                    //短牌
                    zj.gametype = 10;
                    this.DPData.push(zj);
                }
                else if (this.fguiComponent.getController("game").selectedIndex == 4) {
                    //AOF
                    zj.gametype = 20;
                    this.AOFData.push(zj);
                }
                else if (this.fguiComponent.getController("game").selectedIndex == 2) {
                    //普通
                    zj.gametype = 1;
                    this.zjData.push(zj);
                }
                this.ui_DPList.numItems = this.DPData.length * 2;
                this.ui_AOFList.numItems = this.AOFData.length * 2;
                this.ui_zjCareerItemList.numItems = this.zjData.length * 2;
            }
            else {
                //战绩列表
                for (var i = 0; i < data.length; i++) {
                    if (data[i].gametype == 10) {
                        //短牌
                        this.DPData.push(data[i]);
                    }
                    else if (data[i].gametype == 20) {
                        //AOF
                        this.AOFData.push(data[i]);
                    }
                    else {
                        //普通
                        this.zjData.push(data[i]);
                    }
                }
                this.DPData.reverse();
                this.AOFData.reverse();
                this.zjData.reverse();
                this.ui_DPList.numItems = this.DPData.length * 2;
                this.ui_AOFList.numItems = this.AOFData.length * 2;
                this.ui_zjCareerItemList.numItems = this.zjData.length * 2;
            }
        }
    };
    CareerView.prototype.getListItemResource = function (index) {
        if (index % 2 == 0) {
            return "ui://Lobby/zjTimeItem";
        }
        return "ui://Lobby/zjinfoItem";
    };
    CareerView.prototype.renderListItem = function (index, item) {
        var _this = this;
        var itemData = null;
        var go = item;
        if (go.parent.name == "zjCareerItemList") {
            itemData = this.zjData[UIUtil_1.UIUtil.NumberToInt(index / 2)];
        }
        else if (go.parent.name == "DPList") {
            itemData = this.DPData[UIUtil_1.UIUtil.NumberToInt(index / 2)];
        }
        else if (go.parent.name == "AOFList") {
            itemData = this.AOFData[UIUtil_1.UIUtil.NumberToInt(index / 2)];
        }
        if (index % 2 == 0) {
            var createTime = itemData.createTime;
            createTime = createTime == null ? "" : createTime;
            go.getChild("n1").asTextField.text = createTime;
        }
        else {
            go.getChild("n5").asTextField.text = "德州扑克";
            go.getChild("n9").asTextField.text = itemData.tnum + "";
            var preG = itemData.preG;
            preG = preG == null ? 0 : preG;
            var level = itemData.level;
            level = level == null ? 0 : UIUtil_1.UIUtil.formatNumber100(level);
            go.getChild("n7").asTextField.text = level + "/" + level * 2 + "/" + level * 4 + "(" + preG + ")";
            var pnum = itemData.pnum;
            pnum = pnum == null ? 9 : pnum;
            go.getChild("n10").asTextField.text = pnum + "";
            var gains = itemData.gains;
            gains = gains == null ? 0 : UIUtil_1.UIUtil.formatNumber100(gains);
            go.getChild("n12").asTextField.text = gains + "";
            if (gains > 0) {
                go.getController("color").setSelectedIndex(0);
            }
            else if (gains == 0) {
                go.getController("color").setSelectedIndex(1);
            }
            else if (gains < 0) {
                go.getController("color").setSelectedIndex(2);
            }
            if (level < 1) {
                go.getController("type").setSelectedIndex(0);
            }
            else if (level >= 1 && level < 10) {
                go.getController("type").setSelectedIndex(1);
            }
            else if (level >= 10 && level < 100) {
                go.getController("type").setSelectedIndex(2);
            }
            else {
                go.getController("type").setSelectedIndex(3);
            }
            //查找牌局绑定数据
            go.getChild("buttonZJ").asButton.clearClick();
            // if(this.isSelct)
            // {
            //     var derailsData = {
            //         ulist: JSON.parse(this.zjSelectData.plist),
            //         tinfo: JSON.parse(this.zjSelectData.gameDetails),
            //         tnum: this.zjSelectData.roomNum, 
            //         baserate: this.zjSelectData.bg, 
            //         showCard: null
            //     };
            //     go.getChild("buttonZJ").asButton.onClick(()=>{
            //         AudioManager.Singleton.play('CareerView', "button");
            //         LobbyViewCtr.instance.view.showMyCardDerailsView("",derailsData);
            //     });
            // }else{
            go.getChild("buttonZJ").asButton.onClick(function () {
                AudioManager_1.AudioManager.Singleton.play('CareerView', "button");
                _this.getTexasZJ(itemData.tnum, true);
            });
            // }
        }
    };
    //基础数据
    CareerView.prototype.loadJCData = function () {
        if (AppConst_1.AppConst.mPlayerModel.cinfo == null)
            return;
        var cinfo = AppConst_1.AppConst.mPlayerModel.cinfo;
        var tablenum = cinfo.winc + cinfo.failc + cinfo.dc;
        /**总局数 */
        this.ui_allNumInGame.text = cinfo.tablenum + "";
        /**场均战绩 */
        this.ui_changjunRecord.text = cinfo.tablenum == 0 ? "0" : UIUtil_1.UIUtil.formatNumber100(cinfo.AveGains / cinfo.tablenum).toFixed(0);
        /**大盲 百手 */
        this.ui_damangOrBaishou.text = tablenum == 0 ? "0" : (cinfo.AveGains / tablenum).toFixed(0);
        /**总手数 */
        this.ui_allShoushu.text = tablenum + "";
        /**场均带入 */
        this.ui_changjunDairu.text = UIUtil_1.UIUtil.NumberToInt(cinfo.Aveinto / 100) + "";
        /**主动入池率 */
        var value1 = tablenum == 0 ? 0 : cinfo.drivingnum / tablenum;
        value1 = this.NumberLimit(value1);
        this.ui_activeRuchi.text = UIUtil_1.UIUtil.NumberToInt(value1 * 100) + "%";
        /**看牌 翻牌率 */
        var value2 = tablenum == 0 ? 0 : cinfo.fr / tablenum;
        value2 = this.NumberLimit(value2);
        this.ui_seeCard.text = UIUtil_1.UIUtil.NumberToInt(value2 * 100) + "%";
        /**C-BET */
        var value3 = tablenum == 0 ? 0 : cinfo.cbet3 / tablenum;
        value3 = this.NumberLimit(value3);
        this.ui_cbetRate.text = UIUtil_1.UIUtil.NumberToInt(value3 * 100) + "%";
        /**激进度 */
        var value4 = tablenum == 0 ? 0 : cinfo.FillingCount / tablenum / 4;
        value4 = this.NumberLimit(value4);
        this.ui_radical.text = UIUtil_1.UIUtil.NumberToInt(value4 * 100) + "%";
        /**3 bet */
        var value5 = tablenum == 0 ? 0 : cinfo.bet3 / tablenum;
        value5 = this.NumberLimit(value5);
        this.ui_bet3Rate.text = UIUtil_1.UIUtil.NumberToInt(value5 * 100) + "%";
        /**加注入池率 */
        var value6 = tablenum == 0 ? 0 : cinfo.addpoolnum / tablenum;
        value6 = this.NumberLimit(value6);
        this.ui_addBetRate.text = UIUtil_1.UIUtil.NumberToInt(value6 * 100) + "%";
        var distances = [value4, value5, value6, value1, value2, value3];
        // /**要求没有的时候要显示个最小的图形 所以每个都加了0.05 显示  */
        for (var i = 0; i < 6; i++) {
            distances[i] = distances[i] < 0.1 ? 0.1 : distances[i];
        }
        console.log(distances);
        this.ui_radarImage.drawRegularPolygon(1, cc.Color.RED, cc.color(153, 51, 51), 6, 90, distances);
    };
    CareerView.prototype.NumberLimit = function (num) {
        if (num <= 0)
            return 0;
        if (num >= 1)
            return 1;
        return num;
    };
    //赛事列表
    CareerView.prototype.sc_compete_record = function (data) {
        this.ssDataList = [];
        this.ui_n95.text = data.WinCount + "";
        this.ui_n94.text = data.TotalRoundCount + "";
        this.ui_n96.text = data.FinalRoundCount + "";
        if (data.infos == null) {
            this.ui_n93.text = "0";
            this.ui_ssResoutList.numItems = 0;
        }
        else {
            this.ui_n93.text = data.infos.length + "";
            this.ssDataList = data.infos;
            this.ui_ssResoutList.numItems = data.infos.length;
        }
    };
    CareerView.prototype.ssRenderListItem = function (index, item) {
        var go = item;
        /**赛事图片 */
        UIUtil_1.UIUtil.loadImage(go.getChild("n8").asLoader, this.ssDataList[index].pic);
        /**赛事名 */
        go.getChild("n2").asTextField.text = this.ssDataList[index].competename;
        /**赛事时间 */
        go.getChild("n4").asTextField.text = this.ssDataList[index].starttime;
        /**赛事赢取 */
        go.getChild("n7").asTextField.text = this.ssDataList[index].wingold + "";
        /**赛事排名 */
        go.getChild("n6").asTextField.text = this.ssDataList[index].rank + "";
        /**赛事id，不显示 */
        go.getChild("cid").asTextField.text = this.ssDataList[index].competeid + "";
    };
    /**賽事详情 */
    CareerView.prototype.clickSSList = function (item) {
        var go = item;
        var competentId = go.getChild("cid").asTextField.text;
        LobbyViewCtr_1.default.instance.view.showmySsDerailsView(Number.parseInt(competentId));
    };
    /**查找牌局相关 */
    CareerView.prototype.showSelectPanel = function (isShow) {
        this.ui_selectPanel.visible = isShow;
    };
    CareerView.prototype.clickSelectCard = function () {
        var tid = this.ui_inputSelectID.text.trim();
        this.getTexasZJ(tid);
        this.showSelectPanel(false);
    };
    return CareerView;
}(ViewBase_1.default));
exports.default = CareerView;
var Zhanji = /** @class */ (function () {
    function Zhanji() {
    }
    return Zhanji;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGNhcmVlclxcQ2FyZWVyVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRUFBbUU7QUFFbkUsa0VBQTZEO0FBQzdELDRFQUF1RTtBQUN2RSwyREFBMEQ7QUFDMUQsMkZBQTBGO0FBQzFGLHNFQUFxRTtBQUNyRSxnREFBMkM7QUFFM0MseURBQXdEO0FBQ3hELDBFQUF5RTtBQUN6RSxvREFBbUQ7QUFFbkQ7O0dBRUc7QUFDSDtJQUF3Qyw4QkFBUTtJQUFoRDtRQUFBLHFFQXdkQztRQTdjVyxvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFFNUMsU0FBUztRQUNELG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUMxQyxTQUFTO1FBQ0QscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBQ2hELFVBQVU7UUFDRix1QkFBaUIsR0FBb0IsSUFBSSxDQUFDO1FBQ2xELFdBQVc7UUFDSCx3QkFBa0IsR0FBb0IsSUFBSSxDQUFDO1FBQ25ELFNBQVM7UUFDRCxtQkFBYSxHQUFvQixJQUFJLENBQUM7UUFDOUMsVUFBVTtRQUNGLHNCQUFnQixHQUFvQixJQUFJLENBQUM7UUFDakQsV0FBVztRQUNILG9CQUFjLEdBQW9CLElBQUksQ0FBQztRQUMvQyxZQUFZO1FBQ0osZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBQzNDLFdBQVc7UUFDSCxpQkFBVyxHQUFvQixJQUFJLENBQUM7UUFDNUMsU0FBUztRQUNELGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUMzQyxXQUFXO1FBQ0gsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBQzVDLFdBQVc7UUFDSCxtQkFBYSxHQUFvQixJQUFJLENBQUM7UUFDOUMsUUFBUTtRQUNBLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUUxQyxhQUFhO1FBQ0wseUJBQW1CLEdBQWUsSUFBSSxDQUFDO1FBRXZDLFlBQU0sR0FBVSxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQ3pCLGtCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLFlBQU0sR0FBVSxFQUFFLENBQUMsQ0FBQSxNQUFNO1FBQ3pCLGFBQU8sR0FBVSxFQUFFLENBQUMsQ0FBQSxPQUFPO1FBRW5DLFVBQVU7UUFDRixxQkFBZSxHQUFlLElBQUksQ0FBQyxDQUFBLE1BQU07UUFDekMsWUFBTSxHQUFvQixJQUFJLENBQUMsQ0FBQSxNQUFNO1FBQ3JDLFlBQU0sR0FBb0IsSUFBSSxDQUFDLENBQUEsS0FBSztRQUNwQyxZQUFNLEdBQW9CLElBQUksQ0FBQyxDQUFBLEtBQUs7UUFDcEMsWUFBTSxHQUFvQixJQUFJLENBQUMsQ0FBQSxNQUFNO1FBRTdDLFVBQVU7UUFDRix1QkFBaUIsR0FBaUIsSUFBSSxDQUFDO1FBQ3ZDLG9CQUFjLEdBQW9CLElBQUksQ0FBQyxDQUFBLE1BQU07UUFDN0Msc0JBQWdCLEdBQW9CLElBQUksQ0FBQyxDQUFBLFNBQVM7UUFDbEQscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBQ3JDLHdCQUFrQixHQUFpQixJQUFJLENBQUM7UUFDeEMsYUFBTyxHQUFHLEtBQUssQ0FBQyxDQUFBLGdCQUFnQjtRQUNoQyxjQUFRLEdBQUcsS0FBSyxDQUFDLENBQUEsUUFBUTtRQUVqQyxhQUFhO1FBQ0wsZUFBUyxHQUFlLElBQUksQ0FBQztRQUM3QixnQkFBVSxHQUFlLElBQUksQ0FBQztRQStWdEMsaUNBQWlDO1FBRXpCLGdCQUFVLEdBQW9CLEVBQUUsQ0FBQTtRQUNoQyxtQkFBYSxHQUFXLENBQUMsQ0FBQzs7SUFvRHRDLENBQUM7SUF0ZEcsc0JBQWMsMkNBQW1CO2FBQWpDO1lBQ0ksT0FBTyxVQUFVLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxtQ0FBVzthQUF6QjtZQUNJLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMscUNBQWE7YUFBM0I7WUFDSSxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQTBERCwwQ0FBcUIsR0FBckI7UUFBQSxpQkF3Q0M7UUF2Q0csaUJBQU0scUJBQXFCLFdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3QyxrREFBa0Q7UUFDbEQsbUdBQW1HO1FBQ25HLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFHOUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJFLFlBQVk7UUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztZQUMzQiwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUM1QiwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO1lBQ3pCLDJCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELG9DQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELHlCQUFJLEdBQUo7UUFDSSxJQUFJO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsc0JBQVksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3QyxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RCxNQUFNO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLHNCQUFZLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFMUMsVUFBVTtRQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsMkJBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0lBRXZGLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjthQUFNO1lBQ0gsaUJBQU0sSUFBSSxXQUFFLENBQUM7U0FDaEI7SUFFTCxDQUFDO0lBRU0sdUNBQWtCLEdBQXpCO1FBQ0ksc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELFFBQVE7SUFDRCwrQkFBVSxHQUFqQixVQUFrQixRQUFxQixFQUFFLFNBQTBCO1FBQWpELHlCQUFBLEVBQUEsYUFBcUI7UUFBRSwwQkFBQSxFQUFBLGlCQUEwQjtRQUMvRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDMUIsSUFBSSxHQUFHLEdBQUcsaUNBQWUsQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLGdDQUFnQyxDQUFDLENBQUEsMENBQTBDO1FBQ2hJLElBQUksTUFBTSxHQUFHO1lBQ1QsTUFBTSxFQUFFLG1CQUFRLENBQUMsWUFBWSxDQUFDLE1BQU07WUFDcEMsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUE7UUFFRCxJQUFJLFdBQVcsR0FBWSxLQUFLLENBQUM7UUFDakMsTUFBTTtRQUNOLElBQUksUUFBUSxJQUFJLEVBQUUsRUFBRTtZQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzlCLEdBQUcsR0FBRyxpQ0FBZSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsb0NBQW9DLENBQUM7WUFDdEYsTUFBTSxHQUFHO2dCQUNMLE1BQU0sRUFBRSxtQkFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNO2dCQUNwQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNLEVBQUUsRUFBRTthQUNiLENBQUE7U0FDSjtRQUVELG9CQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDZixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDMUMsSUFBSSxXQUFXLEVBQUU7d0JBQ2IscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQywrQkFBYyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3FCQUMvRTt5QkFBTTt3QkFDSCxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLCtCQUFjLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQy9FO29CQUNELE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0gscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQywrQkFBYyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQy9FO1FBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQzdCLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsK0JBQWMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTSxnQ0FBVyxHQUFsQixVQUFtQixJQUFTO1FBQ3hCLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUM7WUFBRSxPQUFPO1FBRTdDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLFdBQVc7WUFDWCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLFdBQVcsR0FBRztnQkFDZCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDMUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7Z0JBQ2hELElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Z0JBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQzlCLFFBQVEsRUFBRSxJQUFJO2FBQ2pCLENBQUM7WUFDRixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzlGLGlFQUFpRTtTQUNwRTthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUU3QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsTUFBTTtnQkFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO2dCQUNuQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRWhELElBQUksRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7Z0JBQ3RCLEVBQUUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7Z0JBQ3BDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDakMsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztnQkFDaEMsRUFBRSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUN2Qiw0Q0FBNEM7Z0JBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN0QyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksMkJBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7d0JBQ3ZFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7cUJBQ3BDO2lCQUNKO2dCQUVELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtvQkFDN0QsSUFBSTtvQkFDSixFQUFFLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3hCO3FCQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtvQkFDcEUsS0FBSztvQkFDTCxFQUFFLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3pCO3FCQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtvQkFDcEUsSUFBSTtvQkFDSixFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3hCO2dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUU5RDtpQkFBTTtnQkFDSCxNQUFNO2dCQUNOLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO3dCQUN4QixJQUFJO3dCQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3Qjt5QkFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO3dCQUMvQixLQUFLO3dCQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM5Qjt5QkFBTTt3QkFDSCxJQUFJO3dCQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUM3QjtpQkFDSjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDOUQ7U0FDSjtJQUVMLENBQUM7SUFFTSx3Q0FBbUIsR0FBMUIsVUFBMkIsS0FBYTtRQUNwQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sdUJBQXVCLENBQUM7U0FDbEM7UUFDRCxPQUFPLHVCQUF1QixDQUFDO0lBQ25DLENBQUM7SUFFTSxtQ0FBYyxHQUFyQixVQUFzQixLQUFhLEVBQUUsSUFBa0I7UUFBdkQsaUJBMkVDO1FBMUVHLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLEVBQUUsR0FBaUIsSUFBSSxDQUFDO1FBQzVCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksa0JBQWtCLEVBQUU7WUFDdEMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ25DLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDeEQ7YUFBTSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUNwQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3pEO1FBRUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ3JDLFVBQVUsR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUNsRCxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1NBQ25EO2FBQU07WUFDSCxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUV4RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFBO1lBQ3hCLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMvQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFBO1lBQzFCLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFNLEtBQUssU0FBSSxLQUFLLEdBQUcsQ0FBQyxTQUFJLEtBQUssR0FBRyxDQUFDLFNBQUksSUFBSSxNQUFHLENBQUM7WUFFbkYsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFFaEQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMzQixLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFELEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRWpELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDWCxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqRDtpQkFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDakQ7WUFFRCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRDtpQkFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtnQkFDakMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRDtpQkFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtnQkFDbkMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoRDtpQkFBTTtnQkFDSCxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hEO1lBRUQsVUFBVTtZQUNWLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzlDLG1CQUFtQjtZQUNuQixJQUFJO1lBQ0osMEJBQTBCO1lBQzFCLHNEQUFzRDtZQUN0RCw0REFBNEQ7WUFDNUQsNENBQTRDO1lBQzVDLDJDQUEyQztZQUMzQyx5QkFBeUI7WUFDekIsU0FBUztZQUNULHFEQUFxRDtZQUNyRCwrREFBK0Q7WUFDL0QsNEVBQTRFO1lBQzVFLFVBQVU7WUFDVixTQUFTO1lBQ1QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNyQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUNwRCxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJO1NBQ1A7SUFFTCxDQUFDO0lBR0QsTUFBTTtJQUNDLCtCQUFVLEdBQWpCO1FBQ0ksSUFBSSxtQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksSUFBSTtZQUFFLE9BQU87UUFDaEQsSUFBSSxLQUFLLEdBQWdCLG1CQUFRLENBQUMsWUFBWSxDQUFDLEtBQW9CLENBQUM7UUFDcEUsSUFBSSxRQUFRLEdBQVcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDM0QsU0FBUztRQUNULElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2hELFVBQVU7UUFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdILFdBQVc7UUFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFHLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RixTQUFTO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUN4QyxVQUFVO1FBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxlQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRzFFLFdBQVc7UUFDWCxJQUFJLE1BQU0sR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzdELE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLGVBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNsRSxZQUFZO1FBQ1osSUFBSSxNQUFNLEdBQUcsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUNyRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxlQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsV0FBVztRQUNYLElBQUksTUFBTSxHQUFHLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDeEQsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsZUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQy9ELFNBQVM7UUFDVCxJQUFJLE1BQU0sR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNuRSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxlQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUQsV0FBVztRQUNYLElBQUksTUFBTSxHQUFHLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDdkQsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsZUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQy9ELFdBQVc7UUFDWCxJQUFJLE1BQU0sR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQzdELE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLGVBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVqRSxJQUFJLFNBQVMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakUseUNBQXlDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRU8sZ0NBQVcsR0FBbkIsVUFBb0IsR0FBVztRQUMzQixJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQztJQU1ELE1BQU07SUFDQyxzQ0FBaUIsR0FBeEIsVUFBeUIsSUFBdUI7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ3JEO0lBRUwsQ0FBQztJQUVNLHFDQUFnQixHQUF2QixVQUF3QixLQUFhLEVBQUUsSUFBa0I7UUFDckQsSUFBSSxFQUFFLEdBQWlCLElBQUksQ0FBQztRQUM1QixVQUFVO1FBQ1YsZUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pFLFNBQVM7UUFDVCxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDeEUsVUFBVTtRQUNWLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN0RSxVQUFVO1FBQ1YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUN6RSxVQUFVO1FBQ1YsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0RSxjQUFjO1FBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNoRixDQUFDO0lBRUQsVUFBVTtJQUNILGdDQUFXLEdBQWxCLFVBQW1CLElBQWtCO1FBQ2pDLElBQUksRUFBRSxHQUFpQixJQUFJLENBQUM7UUFDNUIsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3RELHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUdELFlBQVk7SUFDTCxvQ0FBZSxHQUF0QixVQUF1QixNQUFlO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0lBQ00sb0NBQWUsR0FBdEI7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQXhkQSxBQXdkQyxDQXhkdUMsa0JBQVEsR0F3ZC9DOztBQUVEO0lBQUE7SUFRQSxDQUFDO0lBQUQsYUFBQztBQUFELENBUkEsQUFRQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XHJcbmltcG9ydCB7IENvdW50SW5mb1NEIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvY3NfYmFzZVwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IEh0dHBIZWxwRXggZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vTWFuYWdlcnMvSHR0cEhlbHBFeFwiO1xyXG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcclxuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcclxuaW1wb3J0IHsgQmFzZUZyYW1lTmF0aXZlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWVOYXRpdmVcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcbmltcG9ydCB7IENvbXBldGVSZW1hcmssIHNjX2NvbXBldGVfcmVjb3JkIH0gZnJvbSBcIi4vQ2FyZWVyTmV0RGF0YVN0cnVjdFwiO1xyXG5pbXBvcnQgeyBMb2dpblZpZXdDdHIgfSBmcm9tIFwiLi4vLi4vTG9naW4vTG9naW5WaWV3Q3RyXCI7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBMYW5ndWFnZUNvbmZpZyB9IGZyb20gXCIuLi9MYW5ndWFnZUNvbmZpZ1wiO1xyXG5cclxuLypcclxuICogQGRlc2NyaXB0aW9uIOeUn+a2r1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZWVyVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiY2FyZWVyXCI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVpX2J0bl9zeUJyZWFrOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIC8qKumbt+i+vuWbviAqL1xyXG4gICAgcHJpdmF0ZSB1aV9yYWRhckltYWdlOiBmZ3VpLkdHcmFwaCA9IG51bGw7XHJcbiAgICAvKirmgLvlsYDmlbAgKi9cclxuICAgIHByaXZhdGUgdWlfYWxsTnVtSW5HYW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq5Zy65Z2H5oiY57upICovXHJcbiAgICBwcml2YXRlIHVpX2NoYW5nanVuUmVjb3JkOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq5aSn55uyIOeZvuaJiyAqL1xyXG4gICAgcHJpdmF0ZSB1aV9kYW1hbmdPckJhaXNob3U6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirmgLvmiYvmlbAgKi9cclxuICAgIHByaXZhdGUgdWlfYWxsU2hvdXNodTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIC8qKuWcuuWdh+W4puWFpSAqL1xyXG4gICAgcHJpdmF0ZSB1aV9jaGFuZ2p1bkRhaXJ1OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq5Li75Yqo5YWl5rGg546HICovXHJcbiAgICBwcml2YXRlIHVpX2FjdGl2ZVJ1Y2hpOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq55yL54mMIOe/u+eJjOeOhyAqL1xyXG4gICAgcHJpdmF0ZSB1aV9zZWVDYXJkOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoqQy1CRVQgKi9cclxuICAgIHByaXZhdGUgdWlfY2JldFJhdGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirmv4Dov5vluqYgKi9cclxuICAgIHByaXZhdGUgdWlfcmFkaWNhbDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIC8qKjMgYmV0ICovXHJcbiAgICBwcml2YXRlIHVpX2JldDNSYXRlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xyXG4gICAgLyoq5Yqg5rOo5YWl5rGg546HICovXHJcbiAgICBwcml2YXRlIHVpX2FkZEJldFJhdGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcbiAgICAvKirniYzmma4gKi9cclxuICAgIHByaXZhdGUgdWlfYnRuX3BhaXB1OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIC8qKuaImOe7qSBpdGVtICovXHJcbiAgICBwcml2YXRlIHVpX3pqQ2FyZWVySXRlbUxpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgempEYXRhOiBhbnlbXSA9IFtdOy8v5oiY57up5pWw5o2uXHJcbiAgICBwcml2YXRlIHpqU2VsZWN0RGF0YTogYW55ID0gbnVsbDtcclxuICAgIHByaXZhdGUgRFBEYXRhOiBhbnlbXSA9IFtdOy8v55+t54mM5pWw5o2uXHJcbiAgICBwcml2YXRlIEFPRkRhdGE6IGFueVtdID0gW107Ly9BT0bmlbDmja5cclxuXHJcbiAgICAvKirotZvkuovnm7jlhbMgKi9cclxuICAgIHByaXZhdGUgdWlfc3NSZXNvdXRMaXN0OiBmZ3VpLkdMaXN0ID0gbnVsbDsvL+i1m+S6i+WIl+ihqFxyXG4gICAgcHJpdmF0ZSB1aV9uOTM6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7Ly/mr5TotZvmrKHmlbBcclxuICAgIHByaXZhdGUgdWlfbjk1OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsOy8v6ZKx5ZyI5pWwXHJcbiAgICBwcml2YXRlIHVpX245NDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+aAu+aJi+aVsFxyXG4gICAgcHJpdmF0ZSB1aV9uOTY6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7Ly/lhrPotZvmrKHmlbBcclxuXHJcbiAgICAvKirmn6Xmib7niYzlsYAgKi9cclxuICAgIHByaXZhdGUgdWlfYnRuX3NlbGVjdENhcmQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3NlbGVjdFBhbmVsOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsOy8v6L6T5YWl5by55qGGXHJcbiAgICBwcml2YXRlIHVpX2lucHV0U2VsZWN0SUQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7Ly90YWxiZWlkXHJcbiAgICBwcml2YXRlIHVpX2J0bl9zZWxlY3RPSzogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX3NlbGVjdENsb3NlOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBpc1NlbGN0ID0gZmFsc2U7Ly/mmK/lkKbmn6Xor6LvvIzmn6Xor6LmlbDmja7pnIDph43mlrDop6PmnpBcclxuICAgIHByaXZhdGUgYkhpc3RvcnkgPSBmYWxzZTsvL+aYr+WQpuaYvuekuuivpuaDhVxyXG5cclxuICAgIC8qKuefreeJjOWSjEFPRuWIl+ihqCovXHJcbiAgICBwcml2YXRlIHVpX0RQTGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX0FPRkxpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xyXG5cclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3N5QnJlYWsub25DbGljayh0aGlzLkhpZGUsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBsZXQgZGlzdGFuY2VzID0gWzAuMiwgMC4yLCAwLjIsIDAuMiwgMC4yLCAwLjJdO1xyXG4gICAgICAgIC8vIHRoaXMudWlfcmFkYXJJbWFnZS5kcmF3UmVndWxhclBvbHlnb24oMSwgY2MuQ29sb3IuUkVELCBjYy5jb2xvcigxNTMsIDUxLCA1MSksIDYsIDkwLCBkaXN0YW5jZXMpO1xyXG4gICAgICAgIHRoaXMudWlfcmFkYXJJbWFnZS5jbGVhckdyYXBoaWNzKCk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fcGFpcHUub25DbGljayh0aGlzLnNob3dNeUNhcmRTcGVjdHJ1bSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfempDYXJlZXJJdGVtTGlzdC5zZXRWaXJ0dWFsKCk7XHJcbiAgICAgICAgdGhpcy51aV96akNhcmVlckl0ZW1MaXN0Lml0ZW1Qcm92aWRlciA9IHRoaXMuZ2V0TGlzdEl0ZW1SZXNvdXJjZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfempDYXJlZXJJdGVtTGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckxpc3RJdGVtLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudWlfRFBMaXN0Lml0ZW1Qcm92aWRlciA9IHRoaXMuZ2V0TGlzdEl0ZW1SZXNvdXJjZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfRFBMaXN0Lml0ZW1SZW5kZXJlciA9IHRoaXMucmVuZGVyTGlzdEl0ZW0uYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV9BT0ZMaXN0Lml0ZW1Qcm92aWRlciA9IHRoaXMuZ2V0TGlzdEl0ZW1SZXNvdXJjZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfQU9GTGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckxpc3RJdGVtLmJpbmQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnVpX3NzUmVzb3V0TGlzdC5vbihmZ3VpLkV2ZW50LkNMSUNLX0lURU0sIHRoaXMuY2xpY2tTU0xpc3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfc3NSZXNvdXRMaXN0Lml0ZW1SZW5kZXJlciA9IHRoaXMuc3NSZW5kZXJMaXN0SXRlbS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICAvKirmn6Xmib7niYzlsYDnm7jlhbMgKi9cclxuICAgICAgICB0aGlzLnVpX2J0bl9zZWxlY3RDYXJkLmNsZWFyQ2xpY2soKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9zZWxlY3RDYXJkLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NhcmVlclZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0UGFuZWwodHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fc2VsZWN0Q2xvc2UuY2xlYXJDbGljaygpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NlbGVjdENsb3NlLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NhcmVlclZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0UGFuZWwoZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NlbGVjdE9LLmNsZWFyQ2xpY2soKTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9zZWxlY3RPSy5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdDYXJlZXJWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tTZWxlY3RDYXJkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICB9XHJcbiAgICBTaG93KCkge1xyXG4gICAgICAgIC8v5oiY57upXHJcbiAgICAgICAgdGhpcy5pc1NlbGN0ID0gZmFsc2U7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2ZyZXNocGxheWVySW5mb1NEKCk7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgICAgIHRoaXMuZ2V0VGV4YXNaSigpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwiZ2FtZVwiKS5zZXRTZWxlY3RlZEluZGV4KDIpO1xyXG5cclxuICAgICAgICAvL+i1m+S6i+WIl+ihqFxyXG4gICAgICAgIHRoaXMudWlfc3NSZXNvdXRMaXN0Lm51bUl0ZW1zID0gMDtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2UuY3NfY29tcGV0ZV9yZWNvcmQoKTtcclxuXHJcbiAgICAgICAgLy/mn6Xmib7niYzlsYDpmZDliLbnrYnnuqdcclxuICAgICAgICB0aGlzLnVpX2J0bl9zZWxlY3RDYXJkLnZpc2libGUgPSBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLmx2ID49IDE5O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBIaWRlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnQ2FyZWVyVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2VsY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3VwZXIuSGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dNeUNhcmRTcGVjdHJ1bSgpIHtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93TXlDYXJkU3BlY3RydW1WaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ojrflj5bmiJjnu6nmlbDmja5cclxuICAgIHB1YmxpYyBnZXRUZXhhc1pKKF90YWxiZWlkOiBzdHJpbmcgPSBcIlwiLCBfYkhpc3Rvcnk6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmlzU2VsY3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJIaXN0b3J5ID0gX2JIaXN0b3J5O1xyXG4gICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzICsgXCIvYXBpL0dhbWVsb2cvR2V0VGFibGVSZWNvcmRMb2dcIjsvL0Jhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3NcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICB1c2VyaWQ6IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQsXHJcbiAgICAgICAgICAgIHRudW06IFwiXCIsXHJcbiAgICAgICAgICAgIGdhbWVpZDogNTFcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RUYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIC8v5p+l5om+54mM5bGAXHJcbiAgICAgICAgaWYgKF90YWxiZWlkICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgc2VsZWN0VGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzU2VsY3QgPSAhdGhpcy5iSGlzdG9yeTtcclxuICAgICAgICAgICAgdXJsID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJdGVtLmFwaUFkcmVzcyArIFwiL2FwaS9HYW1lbG9nL0dldFRhYmxlUmVjb3JkSW5mb0xvZ1wiO1xyXG4gICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyaWQ6IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQsXHJcbiAgICAgICAgICAgICAgICB0bnVtOiBfdGFsYmVpZCxcclxuICAgICAgICAgICAgICAgIGdhbWVpZDogNTFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgSHR0cEhlbHBFeC5pbnN0YW5jZS5wb3N0KHVybCwgcGFyYW1zKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXJsICsgXCIgPT09IFwiLCByZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhID09IG51bGwgfHwgcmVzLmRhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0VGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMTAwNikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTEwMDcpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5Mb2FkVGV4YXNaSihyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDExMDA4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tZXJyLS0tXCIsIGVycilcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMTAwOCkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIExvYWRUZXhhc1pKKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmIChkYXRhID09IG51bGwgfHwgZGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5iSGlzdG9yeSkge1xyXG4gICAgICAgICAgICAvL+aYvuekukhpc3RvcnlcclxuICAgICAgICAgICAgdGhpcy56alNlbGVjdERhdGEgPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICB2YXIgZGVyYWlsc0RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB1bGlzdDogSlNPTi5wYXJzZSh0aGlzLnpqU2VsZWN0RGF0YS5wbGlzdCksXHJcbiAgICAgICAgICAgICAgICB0aW5mbzogSlNPTi5wYXJzZSh0aGlzLnpqU2VsZWN0RGF0YS5nYW1lRGV0YWlscyksXHJcbiAgICAgICAgICAgICAgICB0bnVtOiB0aGlzLnpqU2VsZWN0RGF0YS5yb29tTnVtLFxyXG4gICAgICAgICAgICAgICAgYmFzZXJhdGU6IHRoaXMuempTZWxlY3REYXRhLmJnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhcmQ6IG51bGxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd015Q2FyZERlcmFpbHNWaWV3KHRoaXMuempTZWxlY3REYXRhLnJvb21OdW0gKyBcIlwiLCBkZXJhaWxzRGF0YSk7XHJcbiAgICAgICAgICAgIC8vIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dNeUNhcmRIaXN0b3J5KFwiXCIsIGRlcmFpbHNEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkRQRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLkFPRkRhdGEgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy56akRhdGEgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy51aV96akNhcmVlckl0ZW1MaXN0Lm51bUl0ZW1zID0gMDtcclxuICAgICAgICAgICAgdGhpcy51aV9EUExpc3QubnVtSXRlbXMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnVpX0FPRkxpc3QubnVtSXRlbXMgPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWxjdCkge1xyXG4gICAgICAgICAgICAgICAgLy/mn6Xmib7liJfooahcclxuICAgICAgICAgICAgICAgIHRoaXMuempTZWxlY3REYXRhID0gZGF0YVswXTtcclxuICAgICAgICAgICAgICAgIGxldCBiaWdFbmRMaXN0ID0gSlNPTi5wYXJzZSh0aGlzLnpqU2VsZWN0RGF0YS5iaWdFbmRMaXN0KTtcclxuICAgICAgICAgICAgICAgIGxldCBnYWlubGlzdCA9IGJpZ0VuZExpc3QuZ2Fpbmxpc3Q7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxpc3QgPSBKU09OLnBhcnNlKHRoaXMuempTZWxlY3REYXRhLnBsaXN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgemogPSBuZXcgWmhhbmppKCk7XHJcbiAgICAgICAgICAgICAgICB6ai50bnVtID0gdGhpcy56alNlbGVjdERhdGEucm9vbU51bTtcclxuICAgICAgICAgICAgICAgIHpqLmNyZWF0ZVRpbWUgPSBiaWdFbmRMaXN0LmJ0aW1lO1xyXG4gICAgICAgICAgICAgICAgemoucHJlRyA9IHRoaXMuempTZWxlY3REYXRhLmJnO1xyXG4gICAgICAgICAgICAgICAgemoubGV2ZWwgPSB0aGlzLnpqU2VsZWN0RGF0YS5iZztcclxuICAgICAgICAgICAgICAgIHpqLnBudW0gPSBwbGlzdC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAvLyB6ai5nYW1ldHlwZSA9IHRoaXMuempTZWxlY3REYXRhLmdhbWV0eXBlO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBnYWlubGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYWlubGlzdFtqXS5Vc2VySUQgPT0gTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgemouZ2FpbnMgPSBnYWlubGlzdFtqXS5nYWluICsgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwiZ2FtZVwiKS5zZWxlY3RlZEluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+efreeJjFxyXG4gICAgICAgICAgICAgICAgICAgIHpqLmdhbWV0eXBlID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5EUERhdGEucHVzaCh6aik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwiZ2FtZVwiKS5zZWxlY3RlZEluZGV4ID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL0FPRlxyXG4gICAgICAgICAgICAgICAgICAgIHpqLmdhbWV0eXBlID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5BT0ZEYXRhLnB1c2goemopO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZndWlDb21wb25lbnQuZ2V0Q29udHJvbGxlcihcImdhbWVcIikuc2VsZWN0ZWRJbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mma7pgJpcclxuICAgICAgICAgICAgICAgICAgICB6ai5nYW1ldHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy56akRhdGEucHVzaCh6aik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX0RQTGlzdC5udW1JdGVtcyA9IHRoaXMuRFBEYXRhLmxlbmd0aCAqIDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX0FPRkxpc3QubnVtSXRlbXMgPSB0aGlzLkFPRkRhdGEubGVuZ3RoICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlfempDYXJlZXJJdGVtTGlzdC5udW1JdGVtcyA9IHRoaXMuempEYXRhLmxlbmd0aCAqIDI7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/miJjnu6nliJfooahcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldLmdhbWV0eXBlID09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v55+t54mMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRFBEYXRhLnB1c2goZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhW2ldLmdhbWV0eXBlID09IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQU9GXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQU9GRGF0YS5wdXNoKGRhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5pmu6YCaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuempEYXRhLnB1c2goZGF0YVtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuRFBEYXRhLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQU9GRGF0YS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnpqRGF0YS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX0RQTGlzdC5udW1JdGVtcyA9IHRoaXMuRFBEYXRhLmxlbmd0aCAqIDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVpX0FPRkxpc3QubnVtSXRlbXMgPSB0aGlzLkFPRkRhdGEubGVuZ3RoICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMudWlfempDYXJlZXJJdGVtTGlzdC5udW1JdGVtcyA9IHRoaXMuempEYXRhLmxlbmd0aCAqIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMaXN0SXRlbVJlc291cmNlKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggJSAyID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwidWk6Ly9Mb2JieS96alRpbWVJdGVtXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcInVpOi8vTG9iYnkvemppbmZvSXRlbVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJMaXN0SXRlbShpbmRleDogbnVtYmVyLCBpdGVtOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgaXRlbURhdGEgPSBudWxsO1xyXG4gICAgICAgIGxldCBnbyA9IDxmZ3VpLkdCdXR0b24+aXRlbTtcclxuICAgICAgICBpZiAoZ28ucGFyZW50Lm5hbWUgPT0gXCJ6akNhcmVlckl0ZW1MaXN0XCIpIHtcclxuICAgICAgICAgICAgaXRlbURhdGEgPSB0aGlzLnpqRGF0YVtVSVV0aWwuTnVtYmVyVG9JbnQoaW5kZXggLyAyKV07XHJcbiAgICAgICAgfSBlbHNlIGlmIChnby5wYXJlbnQubmFtZSA9PSBcIkRQTGlzdFwiKSB7XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhID0gdGhpcy5EUERhdGFbVUlVdGlsLk51bWJlclRvSW50KGluZGV4IC8gMildXHJcbiAgICAgICAgfSBlbHNlIGlmIChnby5wYXJlbnQubmFtZSA9PSBcIkFPRkxpc3RcIikge1xyXG4gICAgICAgICAgICBpdGVtRGF0YSA9IHRoaXMuQU9GRGF0YVtVSVV0aWwuTnVtYmVyVG9JbnQoaW5kZXggLyAyKV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmRleCAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgY3JlYXRlVGltZSA9IGl0ZW1EYXRhLmNyZWF0ZVRpbWU7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWUgPSBjcmVhdGVUaW1lID09IG51bGwgPyBcIlwiIDogY3JlYXRlVGltZTtcclxuICAgICAgICAgICAgZ28uZ2V0Q2hpbGQoXCJuMVwiKS5hc1RleHRGaWVsZC50ZXh0ID0gY3JlYXRlVGltZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnby5nZXRDaGlsZChcIm41XCIpLmFzVGV4dEZpZWxkLnRleHQgPSBcIuW+t+W3nuaJkeWFi1wiO1xyXG4gICAgICAgICAgICBnby5nZXRDaGlsZChcIm45XCIpLmFzVGV4dEZpZWxkLnRleHQgPSBpdGVtRGF0YS50bnVtICsgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcmVHID0gaXRlbURhdGEucHJlR1xyXG4gICAgICAgICAgICBwcmVHID0gcHJlRyA9PSBudWxsID8gMCA6IHByZUc7XHJcbiAgICAgICAgICAgIGxldCBsZXZlbCA9IGl0ZW1EYXRhLmxldmVsXHJcbiAgICAgICAgICAgIGxldmVsID0gbGV2ZWwgPT0gbnVsbCA/IDAgOiBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKGxldmVsKTtcclxuICAgICAgICAgICAgZ28uZ2V0Q2hpbGQoXCJuN1wiKS5hc1RleHRGaWVsZC50ZXh0ID0gYCR7bGV2ZWx9LyR7bGV2ZWwgKiAyfS8ke2xldmVsICogNH0oJHtwcmVHfSlgO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBudW0gPSBpdGVtRGF0YS5wbnVtO1xyXG4gICAgICAgICAgICBwbnVtID0gcG51bSA9PSBudWxsID8gOSA6IHBudW07XHJcbiAgICAgICAgICAgIGdvLmdldENoaWxkKFwibjEwXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBwbnVtICsgXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBnYWlucyA9IGl0ZW1EYXRhLmdhaW5zO1xyXG4gICAgICAgICAgICBnYWlucyA9IGdhaW5zID09IG51bGwgPyAwIDogVUlVdGlsLmZvcm1hdE51bWJlcjEwMChnYWlucyk7XHJcbiAgICAgICAgICAgIGdvLmdldENoaWxkKFwibjEyXCIpLmFzVGV4dEZpZWxkLnRleHQgPSBnYWlucyArIFwiXCI7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2FpbnMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBnby5nZXRDb250cm9sbGVyKFwiY29sb3JcIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChnYWlucyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBnby5nZXRDb250cm9sbGVyKFwiY29sb3JcIikuc2V0U2VsZWN0ZWRJbmRleCgxKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChnYWlucyA8IDApIHtcclxuICAgICAgICAgICAgICAgIGdvLmdldENvbnRyb2xsZXIoXCJjb2xvclwiKS5zZXRTZWxlY3RlZEluZGV4KDIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBnby5nZXRDb250cm9sbGVyKFwidHlwZVwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxldmVsID49IDEgJiYgbGV2ZWwgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgZ28uZ2V0Q29udHJvbGxlcihcInR5cGVcIikuc2V0U2VsZWN0ZWRJbmRleCgxKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChsZXZlbCA+PSAxMCAmJiBsZXZlbCA8IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgZ28uZ2V0Q29udHJvbGxlcihcInR5cGVcIikuc2V0U2VsZWN0ZWRJbmRleCgyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGdvLmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpLnNldFNlbGVjdGVkSW5kZXgoMyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5p+l5om+54mM5bGA57uR5a6a5pWw5o2uXHJcbiAgICAgICAgICAgIGdvLmdldENoaWxkKFwiYnV0dG9uWkpcIikuYXNCdXR0b24uY2xlYXJDbGljaygpO1xyXG4gICAgICAgICAgICAvLyBpZih0aGlzLmlzU2VsY3QpXHJcbiAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgLy8gICAgIHZhciBkZXJhaWxzRGF0YSA9IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB1bGlzdDogSlNPTi5wYXJzZSh0aGlzLnpqU2VsZWN0RGF0YS5wbGlzdCksXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGluZm86IEpTT04ucGFyc2UodGhpcy56alNlbGVjdERhdGEuZ2FtZURldGFpbHMpLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRudW06IHRoaXMuempTZWxlY3REYXRhLnJvb21OdW0sIFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJhc2VyYXRlOiB0aGlzLnpqU2VsZWN0RGF0YS5iZywgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc2hvd0NhcmQ6IG51bGxcclxuICAgICAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgICAgIC8vICAgICBnby5nZXRDaGlsZChcImJ1dHRvblpKXCIpLmFzQnV0dG9uLm9uQ2xpY2soKCk9PntcclxuICAgICAgICAgICAgLy8gICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NhcmVlclZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93TXlDYXJkRGVyYWlsc1ZpZXcoXCJcIixkZXJhaWxzRGF0YSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgICAgIGdvLmdldENoaWxkKFwiYnV0dG9uWkpcIikuYXNCdXR0b24ub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0NhcmVlclZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VGV4YXNaSihpdGVtRGF0YS50bnVtLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/ln7rnoYDmlbDmja5cclxuICAgIHB1YmxpYyBsb2FkSkNEYXRhKCkge1xyXG4gICAgICAgIGlmIChBcHBDb25zdC5tUGxheWVyTW9kZWwuY2luZm8gPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBjaW5mbzogQ291bnRJbmZvU0QgPSBBcHBDb25zdC5tUGxheWVyTW9kZWwuY2luZm8gYXMgQ291bnRJbmZvU0Q7XHJcbiAgICAgICAgbGV0IHRhYmxlbnVtOiBudW1iZXIgPSBjaW5mby53aW5jICsgY2luZm8uZmFpbGMgKyBjaW5mby5kYztcclxuICAgICAgICAvKirmgLvlsYDmlbAgKi9cclxuICAgICAgICB0aGlzLnVpX2FsbE51bUluR2FtZS50ZXh0ID0gY2luZm8udGFibGVudW0gKyBcIlwiO1xyXG4gICAgICAgIC8qKuWcuuWdh+aImOe7qSAqL1xyXG4gICAgICAgIHRoaXMudWlfY2hhbmdqdW5SZWNvcmQudGV4dCA9IGNpbmZvLnRhYmxlbnVtID09IDAgPyBcIjBcIiA6IFVJVXRpbC5mb3JtYXROdW1iZXIxMDAoY2luZm8uQXZlR2FpbnMgLyBjaW5mby50YWJsZW51bSkudG9GaXhlZCgwKTtcclxuICAgICAgICAvKirlpKfnm7Ig55m+5omLICovXHJcbiAgICAgICAgdGhpcy51aV9kYW1hbmdPckJhaXNob3UudGV4dCA9IHRhYmxlbnVtID09IDAgPyBcIjBcIiA6IChjaW5mby5BdmVHYWlucyAvIHRhYmxlbnVtKS50b0ZpeGVkKDApO1xyXG4gICAgICAgIC8qKuaAu+aJi+aVsCAqL1xyXG4gICAgICAgIHRoaXMudWlfYWxsU2hvdXNodS50ZXh0ID0gdGFibGVudW0gKyBcIlwiO1xyXG4gICAgICAgIC8qKuWcuuWdh+W4puWFpSAqL1xyXG4gICAgICAgIHRoaXMudWlfY2hhbmdqdW5EYWlydS50ZXh0ID0gVUlVdGlsLk51bWJlclRvSW50KGNpbmZvLkF2ZWludG8gLyAxMDApICsgXCJcIjtcclxuXHJcblxyXG4gICAgICAgIC8qKuS4u+WKqOWFpeaxoOeOhyAqL1xyXG4gICAgICAgIGxldCB2YWx1ZTEgPSB0YWJsZW51bSA9PSAwID8gMCA6IGNpbmZvLmRyaXZpbmdudW0gLyB0YWJsZW51bTtcclxuICAgICAgICB2YWx1ZTEgPSB0aGlzLk51bWJlckxpbWl0KHZhbHVlMSk7XHJcbiAgICAgICAgdGhpcy51aV9hY3RpdmVSdWNoaS50ZXh0ID0gVUlVdGlsLk51bWJlclRvSW50KHZhbHVlMSAqIDEwMCkgKyBcIiVcIjtcclxuICAgICAgICAvKirnnIvniYwg57+754mM546HICovXHJcbiAgICAgICAgbGV0IHZhbHVlMiA9IHRhYmxlbnVtID09IDAgPyAwIDogY2luZm8uZnIgLyB0YWJsZW51bTtcclxuICAgICAgICB2YWx1ZTIgPSB0aGlzLk51bWJlckxpbWl0KHZhbHVlMik7XHJcbiAgICAgICAgdGhpcy51aV9zZWVDYXJkLnRleHQgPSBVSVV0aWwuTnVtYmVyVG9JbnQodmFsdWUyICogMTAwKSArIFwiJVwiO1xyXG4gICAgICAgIC8qKkMtQkVUICovXHJcbiAgICAgICAgbGV0IHZhbHVlMyA9IHRhYmxlbnVtID09IDAgPyAwIDogY2luZm8uY2JldDMgLyB0YWJsZW51bTtcclxuICAgICAgICB2YWx1ZTMgPSB0aGlzLk51bWJlckxpbWl0KHZhbHVlMyk7XHJcbiAgICAgICAgdGhpcy51aV9jYmV0UmF0ZS50ZXh0ID0gVUlVdGlsLk51bWJlclRvSW50KHZhbHVlMyAqIDEwMCkgKyBcIiVcIjtcclxuICAgICAgICAvKirmv4Dov5vluqYgKi9cclxuICAgICAgICBsZXQgdmFsdWU0ID0gdGFibGVudW0gPT0gMCA/IDAgOiBjaW5mby5GaWxsaW5nQ291bnQgLyB0YWJsZW51bSAvIDQ7XHJcbiAgICAgICAgdmFsdWU0ID0gdGhpcy5OdW1iZXJMaW1pdCh2YWx1ZTQpO1xyXG4gICAgICAgIHRoaXMudWlfcmFkaWNhbC50ZXh0ID0gVUlVdGlsLk51bWJlclRvSW50KHZhbHVlNCAqIDEwMCkgKyBcIiVcIjtcclxuICAgICAgICAvKiozIGJldCAqL1xyXG4gICAgICAgIGxldCB2YWx1ZTUgPSB0YWJsZW51bSA9PSAwID8gMCA6IGNpbmZvLmJldDMgLyB0YWJsZW51bTtcclxuICAgICAgICB2YWx1ZTUgPSB0aGlzLk51bWJlckxpbWl0KHZhbHVlNSk7XHJcbiAgICAgICAgdGhpcy51aV9iZXQzUmF0ZS50ZXh0ID0gVUlVdGlsLk51bWJlclRvSW50KHZhbHVlNSAqIDEwMCkgKyBcIiVcIjtcclxuICAgICAgICAvKirliqDms6jlhaXmsaDnjocgKi9cclxuICAgICAgICBsZXQgdmFsdWU2ID0gdGFibGVudW0gPT0gMCA/IDAgOiBjaW5mby5hZGRwb29sbnVtIC8gdGFibGVudW07XHJcbiAgICAgICAgdmFsdWU2ID0gdGhpcy5OdW1iZXJMaW1pdCh2YWx1ZTYpO1xyXG4gICAgICAgIHRoaXMudWlfYWRkQmV0UmF0ZS50ZXh0ID0gVUlVdGlsLk51bWJlclRvSW50KHZhbHVlNiAqIDEwMCkgKyBcIiVcIjtcclxuXHJcbiAgICAgICAgbGV0IGRpc3RhbmNlcyA9IFt2YWx1ZTQsIHZhbHVlNSwgdmFsdWU2LCB2YWx1ZTEsIHZhbHVlMiwgdmFsdWUzXTtcclxuICAgICAgICAvLyAvKiropoHmsYLmsqHmnInnmoTml7blgJnopoHmmL7npLrkuKrmnIDlsI/nmoTlm77lvaIg5omA5Lul5q+P5Liq6YO95Yqg5LqGMC4wNSDmmL7npLogICovXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuICAgICAgICAgICAgZGlzdGFuY2VzW2ldID0gZGlzdGFuY2VzW2ldIDwgMC4xID8gMC4xIDogZGlzdGFuY2VzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkaXN0YW5jZXMpO1xyXG4gICAgICAgIHRoaXMudWlfcmFkYXJJbWFnZS5kcmF3UmVndWxhclBvbHlnb24oMSwgY2MuQ29sb3IuUkVELCBjYy5jb2xvcigxNTMsIDUxLCA1MSksIDYsIDkwLCBkaXN0YW5jZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTnVtYmVyTGltaXQobnVtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmIChudW0gPD0gMCkgcmV0dXJuIDA7XHJcbiAgICAgICAgaWYgKG51bSA+PSAxKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gbnVtXHJcbiAgICB9XHJcblxyXG4gICAgLyoqLS0tLS0tLS0tLS3otZvkuosgLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAgIHByaXZhdGUgc3NEYXRhTGlzdDogQ29tcGV0ZVJlbWFya1tdID0gW11cclxuICAgIHByaXZhdGUgc3NTZWxlY3RJbmRleDogbnVtYmVyID0gMDtcclxuICAgIC8v6LWb5LqL5YiX6KGoXHJcbiAgICBwdWJsaWMgc2NfY29tcGV0ZV9yZWNvcmQoZGF0YTogc2NfY29tcGV0ZV9yZWNvcmQpIHtcclxuICAgICAgICB0aGlzLnNzRGF0YUxpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy51aV9uOTUudGV4dCA9IGRhdGEuV2luQ291bnQgKyBcIlwiO1xyXG4gICAgICAgIHRoaXMudWlfbjk0LnRleHQgPSBkYXRhLlRvdGFsUm91bmRDb3VudCArIFwiXCI7XHJcbiAgICAgICAgdGhpcy51aV9uOTYudGV4dCA9IGRhdGEuRmluYWxSb3VuZENvdW50ICsgXCJcIjtcclxuICAgICAgICBpZiAoZGF0YS5pbmZvcyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfbjkzLnRleHQgPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy51aV9zc1Jlc291dExpc3QubnVtSXRlbXMgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudWlfbjkzLnRleHQgPSBkYXRhLmluZm9zLmxlbmd0aCArIFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc3NEYXRhTGlzdCA9IGRhdGEuaW5mb3M7XHJcbiAgICAgICAgICAgIHRoaXMudWlfc3NSZXNvdXRMaXN0Lm51bUl0ZW1zID0gZGF0YS5pbmZvcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3NSZW5kZXJMaXN0SXRlbShpbmRleDogbnVtYmVyLCBpdGVtOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgZ28gPSA8Zmd1aS5HQnV0dG9uPml0ZW07XHJcbiAgICAgICAgLyoq6LWb5LqL5Zu+54mHICovXHJcbiAgICAgICAgVUlVdGlsLmxvYWRJbWFnZShnby5nZXRDaGlsZChcIm44XCIpLmFzTG9hZGVyLCB0aGlzLnNzRGF0YUxpc3RbaW5kZXhdLnBpYyk7XHJcbiAgICAgICAgLyoq6LWb5LqL5ZCNICovXHJcbiAgICAgICAgZ28uZ2V0Q2hpbGQoXCJuMlwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdGhpcy5zc0RhdGFMaXN0W2luZGV4XS5jb21wZXRlbmFtZTtcclxuICAgICAgICAvKirotZvkuovml7bpl7QgKi9cclxuICAgICAgICBnby5nZXRDaGlsZChcIm40XCIpLmFzVGV4dEZpZWxkLnRleHQgPSB0aGlzLnNzRGF0YUxpc3RbaW5kZXhdLnN0YXJ0dGltZTtcclxuICAgICAgICAvKirotZvkuovotaLlj5YgKi9cclxuICAgICAgICBnby5nZXRDaGlsZChcIm43XCIpLmFzVGV4dEZpZWxkLnRleHQgPSB0aGlzLnNzRGF0YUxpc3RbaW5kZXhdLndpbmdvbGQgKyBcIlwiO1xyXG4gICAgICAgIC8qKui1m+S6i+aOkuWQjSAqL1xyXG4gICAgICAgIGdvLmdldENoaWxkKFwibjZcIikuYXNUZXh0RmllbGQudGV4dCA9IHRoaXMuc3NEYXRhTGlzdFtpbmRleF0ucmFuayArIFwiXCI7XHJcbiAgICAgICAgLyoq6LWb5LqLaWTvvIzkuI3mmL7npLogKi9cclxuICAgICAgICBnby5nZXRDaGlsZChcImNpZFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdGhpcy5zc0RhdGFMaXN0W2luZGV4XS5jb21wZXRlaWQgKyBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuizveS6i+ivpuaDhSAqL1xyXG4gICAgcHVibGljIGNsaWNrU1NMaXN0KGl0ZW06IGZndWkuR09iamVjdCkge1xyXG4gICAgICAgIGxldCBnbyA9IDxmZ3VpLkdCdXR0b24+aXRlbTtcclxuICAgICAgICBsZXQgY29tcGV0ZW50SWQgPSBnby5nZXRDaGlsZChcImNpZFwiKS5hc1RleHRGaWVsZC50ZXh0O1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3LnNob3dteVNzRGVyYWlsc1ZpZXcoTnVtYmVyLnBhcnNlSW50KGNvbXBldGVudElkKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKuafpeaJvueJjOWxgOebuOWFsyAqL1xyXG4gICAgcHVibGljIHNob3dTZWxlY3RQYW5lbChpc1Nob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnVpX3NlbGVjdFBhbmVsLnZpc2libGUgPSBpc1Nob3c7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2xpY2tTZWxlY3RDYXJkKCkge1xyXG4gICAgICAgIGxldCB0aWQgPSB0aGlzLnVpX2lucHV0U2VsZWN0SUQudGV4dC50cmltKCk7XHJcbiAgICAgICAgdGhpcy5nZXRUZXhhc1pKKHRpZCk7XHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0UGFuZWwoZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBaaGFuamkge1xyXG4gICAgcHVibGljIGNyZWF0ZVRpbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyB0bnVtOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHJlRzogc3RyaW5nO1xyXG4gICAgcHVibGljIGxldmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcG51bTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdhaW5zOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2FtZXR5cGU6IG51bWJlcjtcclxufSJdfQ==
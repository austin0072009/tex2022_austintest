"use strict";
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
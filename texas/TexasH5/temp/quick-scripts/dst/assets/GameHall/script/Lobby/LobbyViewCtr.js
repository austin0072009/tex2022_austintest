
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/LobbyViewCtr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ef51QCeQZAMKsQXUmh+Ynl', 'LobbyViewCtr');
// GameHall/script/Lobby/LobbyViewCtr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CommonCtr_1 = require("../../../Script/BaseFrame/CommonCtr");
var WebSocketManager_1 = require("../../../Script/BaseFrame/WebSocketManager");
var BaseFrameNative_1 = require("../../../Script/BaseFrameNative");
var UIUtil_1 = require("../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LoginViewCtr_1 = require("../Login/LoginViewCtr");
var CareerNetDataStruct_1 = require("./career/CareerNetDataStruct");
var BroadcastViewCtr_1 = require("./Components/BroadcastViewCtr");
var LanguageConfig_1 = require("./LanguageConfig");
var LobbyModel_1 = require("./LobbyModel");
var LobbyNetData_1 = require("./LobbyNetData");
var LobbyViewCtr = /** @class */ (function () {
    function LobbyViewCtr() {
        this.view = null;
        this.model = null;
    }
    Object.defineProperty(LobbyViewCtr, "instance", {
        get: function () {
            if (this._viewCtr == null) {
                this._viewCtr = new LobbyViewCtr();
            }
            return this._viewCtr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LobbyViewCtr.prototype, "Model", {
        get: function () {
            if (this.model == null) {
                this.model = new LobbyModel_1.default();
                this.model.Init();
            }
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    LobbyViewCtr.prototype.RegistNotify = function () {
        console.log("LobbyViewCtr  RegistNotify");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_getnotice_n");
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_getnotice_n", this.sc_getnotice_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_notice_n", this.sc_notice_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_commonnotice_n", this.sc_commonnotice_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_freshgold_n", this.sc_freshgold_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_dealgoldtrade_n", this.sc_dealgoldtrade_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_compete_rank_info", this.sc_compete_rank_info.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_entertablenum_tex", this.sc_entertablenum_tex.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_sitdown_tex_n", this.sc_sitdown_tex_n.bind(this));
        WebSocketManager_1.WebSocketManager.getInstance.RegistNotify("sc_pushevent_n", this.sc_pushevent_n.bind(this));
    };
    LobbyViewCtr.prototype.UnRegistNotify = function () {
        console.log("LobbyViewCtr  UnRegistNotify");
        // WebSocketManager.getInstance.UnRegistNotify("sc_getnotice_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_notice_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_commonnotice_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_freshgold_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_dealgoldtrade_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_compete_rank_info");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_entertablenum_tex");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_sitdown_tex_n");
        WebSocketManager_1.WebSocketManager.getInstance.UnRegistNotify("sc_pushevent_n");
    };
    // 公共消息推送
    LobbyViewCtr.prototype.sc_commonnotice_n = function (data) {
        console.log("---sc_commonnotice_n---", data);
    };
    // 刷新
    LobbyViewCtr.prototype.sc_freshgold_n = function (data) {
        console.log("---sc_freshgold_n---", data);
        if (!this.view)
            return;
        if (data.result == 1) {
            if (data.freshType == 1) {
                // 钻石
            }
            else if (data.freshType == 2) {
                // 金币
                AppConst_1.AppConst.mPlayerModel.gold = data.gold;
                console.log("AppConst.mPlayerModel == ", AppConst_1.AppConst.mPlayerModel);
                this.view && this.view.changedGold();
                this.view.meView && this.view.meView.hideGold();
                this.view.withdrawalView && this.view.withdrawalView.updateGold();
                this.cs_getuservipinfo();
            }
            else if (data.freshType == 3) {
                LoginViewCtr_1.LoginViewCtr.instance.Model.cidx = data.gold;
                this.cs_getagentinfo_onlyData(LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
                this.view && this.view.joinSuccess();
                // CommonCtr.instance.view.ShowTipLabel("加入社区" + data.gold + "申请已通过");
            }
        }
    };
    LobbyViewCtr.prototype.sc_dealgoldtrade_n = function (data) {
        // console.log("---sc_dealgoldtrade_n---", data);
        if (!this.view)
            return;
        var str = data.objusername + "赠送" + UIUtil_1.UIUtil.formatNumber100(data.Gold) + "金币给您";
        CommonCtr_1.CommonCtr.instance.view.ShowTip(str);
        // console.log(AppConst.mPlayerModel.gold);
        // AppConst.mPlayerModel.gold += data.Gold;
        // console.log(AppConst.mPlayerModel.gold);
        // this.view.changedGold();
        // this.view.meView.hideGold();
        // if (this.view.meView) {
        //     this.view.meView.hideGold();
        // }
    };
    Object.defineProperty(LobbyViewCtr.prototype, "IsDestory", {
        /**判断此View是否已经释放 */
        get: function () {
            if (this.view == null || this.view._isDestory)
                return true;
            return false;
        },
        enumerable: false,
        configurable: true
    });
    LobbyViewCtr.prototype.cs_gettablelist_tex = function (gameId) {
        if (gameId === void 0) { gameId = 51; }
        if (this.view == null || this.view._isDestory)
            return;
        var pkg = new LobbyNetData_1.cs_gettablelist_tex();
        pkg.clubidx = 0; //LoginViewCtr.instance.Model.cidx;
        pkg._g = gameId;
        pkg.fn = "cs_gettablelist_tex";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_gettablelist_tex.bind(this));
    };
    LobbyViewCtr.prototype.sc_gettablelist_tex = function (data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            // console.log("----------------", data)
            this.Model.tableList = data.tinfo;
            this.view.handleRoomData();
        }
    };
    /**游戏 跑马灯  */
    LobbyViewCtr.prototype.sc_getnotice_n = function (data) {
        var target;
        var dey = 0;
        if (data.result == 1) {
            if (this.view) {
                // 在大厅
                if (this.view.broadcast) {
                    target = this.view.broadcast;
                }
            }
            else {
                target = BroadcastViewCtr_1.BroadcastViewCtr.instance;
                if (data.gameid == 258) {
                    dey = 6;
                }
            }
            if (!target)
                return;
            if (dey > 0) {
                data.noticelist.forEach(function (notice) {
                    target.addMessage(notice, dey);
                });
            }
            else {
                data.noticelist.forEach(function (notice) {
                    target.addMessage(notice);
                });
            }
        }
    };
    /**大厅跑马灯 */
    LobbyViewCtr.prototype.sc_notice_n = function (data) {
        console.log("----sc_notice_n----", data);
        if (data.result == 1) {
            if (this.view && this.view.broadcast) {
                if (data._t == 1) { //滚动公告
                    // this.Model.broadnotice = [data.notice];
                    BaseFrameNative_1.BaseFrameNative.broadnotice.push(data.notice);
                    this.view.broadcast.addMessage(data.notice.content);
                }
            }
        }
    };
    /**获取用户的金币 */
    LobbyViewCtr.prototype.cs_searchgoldornickname = function (userId) {
        if (this.IsDestory)
            return;
        this.Model.queryUserId = userId;
        var data = new LobbyNetData_1.cs_searchgoldornickname();
        data.userid = userId;
        data.fn = "cs_searchgoldornickname";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(data, this.sc_searchgoldornickname.bind(this));
    };
    LobbyViewCtr.prototype.sc_searchgoldornickname = function (data) {
        if (this.IsDestory)
            return;
        // cc.log("2-----------------", data);
        if (data.result == 1) {
            if (this.Model.queryUserId == AppConst_1.AppConst.mPlayerModel.userid) {
                AppConst_1.AppConst.mPlayerModel.gold = data.gold;
                this.view.changedGold();
                if (this.view.meView) {
                    this.view.meView.hideGold();
                }
            }
            else { //查询名字
                this.view.transferView.showCorrectGreen(true, data.nickname);
            }
        }
        else {
            if (this.Model.queryUserId != AppConst_1.AppConst.mPlayerModel.userid) {
                this.view.transferView.showCorrectGreen(false);
            }
        }
    };
    /**修改头像 昵称 */
    LobbyViewCtr.prototype.cs_personalinfo = function (info) {
        var pkg = new LobbyNetData_1.cs_personalinfo();
        pkg.fn = "cs_personalinfo";
        pkg.UserId = info.UserId;
        pkg.HeadIcon = info.HeadIcon;
        pkg.nikename = info.nikename;
        pkg.sex = info.sex;
        pkg.Desc = info.Desc;
        pkg.HeadFrame = info.HeadFrame;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_personalinfo.bind(this));
    };
    LobbyViewCtr.prototype.sc_personalinfo = function (data) {
        console.log("sc_personalinfo ==== ", JSON.stringify(data));
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(10101));
            this.view.myinfoView.handleChanged();
            this.cs_searchgoldornickname(AppConst_1.AppConst.mPlayerModel.userid); //会扣除金币 刷新金币
            //this.cs_freshplayerInfoSD();  数据不一致 先注释了
        }
        else if (data.result == 0) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(10108));
        }
        else if (data.result == -1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(10103));
        }
        else if (data.result == -2) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(10104));
        }
        else if (data.result == -5) { // 昵称重复
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(10105));
        }
        else if (data.result == -6) { // 已经是此头像
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(10106));
        }
        else if (data.result == -7) { // 已经是此头像框
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(10107));
        }
    };
    // 刷新用户信息
    LobbyViewCtr.prototype.cs_freshplayerInfoSD = function () {
        var pkg = new LobbyNetData_1.cs_freshplayerInfoSD();
        pkg.fn = "cs_freshplayerInfoSD";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_freshplayerInfoSD.bind(this));
    };
    LobbyViewCtr.prototype.sc_freshplayerInfoSD = function (data) {
        cc.log("---sc_freshplayerInfoSD---", data);
        if (this.IsDestory)
            return; //这条消息的 user 少几个字段 不能覆盖原来的
        AppConst_1.AppConst.mPlayerModel.cinfo = data.user.cinfo;
        //if (this.view.myinfoView) this.view.myinfoView.handleChanged();
        if (this.view.careerView)
            this.view.careerView.loadJCData();
    };
    /**設置支付密碼 */
    LobbyViewCtr.prototype.cs_changePassword_appbk = function (oldPassWord, newPassWord, inset, isTx) {
        if (inset === void 0) { inset = false; }
        if (isTx === void 0) { isTx = false; }
        var pkg = new LobbyNetData_1.cs_changePassword_appbk();
        pkg.fn = "cs_changePassword_appbk";
        pkg.oldPassWord = oldPassWord;
        pkg.newPassWord = newPassWord;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_changePassword_appbk.bind(this, inset, isTx));
    };
    LobbyViewCtr.prototype.sc_changePassword_appbk = function (inset, isTx, data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            if (inset) {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("修改密碼成功");
                this.view.modifyPlayPwdView.Hide();
            }
            else {
                if (isTx) {
                    this.view.withdrawalView.setPwdSucceed();
                }
                else {
                    this.view.verificationPwdView.setPwdSucceed();
                }
            }
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("設置密碼失敗");
        }
    };
    /**验证支付密码*/
    LobbyViewCtr.prototype.cs_enterbank_bk = function (pwd, bool) {
        if (bool === void 0) { bool = false; }
        var pkg = new LobbyNetData_1.cs_enterbank_bk();
        pkg.fn = "cs_enterbank_bk";
        pkg.pwd = pwd;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_enterbank_bk.bind(this, bool));
    };
    LobbyViewCtr.prototype.sc_enterbank_bk = function (bool, data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            if (bool) {
                this.view.withdrawalView.verificationPwdSuc();
            }
            else {
                this.view.verificationPwdView.verificationPwdSucceed();
            }
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("密码错误");
        }
    };
    /**转账 */
    LobbyViewCtr.prototype.cs_sendgoldtrade = function (objuserid, gold) {
        var pkg = new LobbyNetData_1.cs_sendgoldtrade();
        pkg.fn = "cs_sendgoldtrade";
        pkg.objuserid = objuserid;
        pkg.Gold = gold;
        pkg.IsGet = false;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_sendgoldtrade.bind(this));
    };
    LobbyViewCtr.prototype.sc_sendgoldtrade = function (data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            this.view.transferView.sendDealgoldtrade();
        }
        else if (data.result == -7) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("转账失败,金额必须大于20！");
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("转账失败" + data.result);
        }
    };
    /**转账确认 */
    LobbyViewCtr.prototype.cs_dealgoldtrade = function (objuserid, gold, pwd) {
        if (this.IsDestory)
            return;
        var pkg = new LobbyNetData_1.cs_dealgoldtrade();
        pkg.fn = "cs_dealgoldtrade";
        pkg.objuserid = objuserid;
        pkg.Gold = gold;
        pkg.bankPassWord = pwd;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_dealgoldtrade.bind(this));
    };
    LobbyViewCtr.prototype.sc_dealgoldtrade = function (data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            if (this.view.transferView) {
                this.view.transferView.updateGold();
            }
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("转账成功");
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("转账失败" + data.Msg);
        }
    };
    /**获取背包道具列表 */
    LobbyViewCtr.prototype.cs_getbackpacklist = function () {
        var pkg = new LobbyNetData_1.cs_getbackpacklist();
        pkg.fn = "cs_getbackpacklist";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_getbackpacklist.bind(this));
    };
    LobbyViewCtr.prototype.sc_getbackpacklist = function (data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            this.Model.bagpackData = data.props;
            this.view.showknapsackView();
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("暂无数据");
        }
    };
    /** 使用兑换道具*/
    LobbyViewCtr.prototype.cs_useprop = function (PropID, PropCount, use) {
        if (use === void 0) { use = true; }
        var pkg = new LobbyNetData_1.cs_useprop();
        pkg.fn = "cs_useprop";
        pkg.PropID = PropID;
        pkg.PropCount = PropCount;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_useprop.bind(this, use));
    };
    LobbyViewCtr.prototype.sc_useprop = function (use, data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            var propList = this.view.myKnapsackView.listData;
            propList = propList.filter(function (item) {
                if (item.PropID == data.PropID) {
                    item.PropCount = data.PropCount;
                }
                return item.PropCount != 0;
            });
            this.view.myKnapsackView.listData = propList;
            AppConst_1.AppConst.mPlayerModel.gold = data.UserGold;
            this.view.changedGold();
            this.view.meView.hideGold();
            // this.cs_getbackpacklist();
            // this.cs_searchgoldornickname(AppConst.mPlayerModel.userid);
            var str = '';
            use ? str = "\u6210\u529F\u5151\u6362" + data.PropGold : str = "\u4F7F\u7528\u6210\u529F";
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(str);
            if (!use) {
                LobbyViewCtr.instance.view.meView.setHeadFram();
            }
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("兑换失败");
        }
    };
    /**获取任务列表 */
    LobbyViewCtr.prototype.cs_tasklist = function () {
        if (this.IsDestory)
            return;
        var pkg = new LobbyNetData_1.cs_tasklist();
        pkg.fn = "cs_tasklist";
        pkg.userId = AppConst_1.AppConst.mPlayerModel.userid;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_tasklist.bind(this));
    };
    LobbyViewCtr.prototype.sc_tasklist = function (data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            var task = data.tasklist.sort(function (a, b) {
                return a.iscomplate ? -1 : 1;
            });
            task = task.filter(function (item) {
                return !(item.isaward && item.iscomplate);
            });
            // task.sort((a, b) => {
            //     return a.taskid - b.taskid;
            // })
            this.Model.tasklist = [];
            //console.log("-----任务----------'", task);
            for (var i = 0; i < task.length; i++) {
                if (!task[i].name)
                    continue;
                if (task[i].name.indexOf("签到") == -1) {
                    this.Model.tasklist.push(task[i]);
                }
                else {
                    if (task[i].isaward == false && task[i].iscomplate) {
                        this.Model.tasklist.push(task[i]);
                    }
                }
            }
            // this.view.meView.handleFlist();
            this.view.welfareView && this.view.welfareView.handleData();
        }
        else {
            //  this.Model.tasklist = [];
            // this.view.welfareView && this.view.welfareView.handleData();
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("获取任务列表失败");
        }
    };
    /**获取绑定的银行卡和支付宝 */
    LobbyViewCtr.prototype.cs_mobilephonenum = function () {
        if (this.IsDestory)
            return;
        var pkg = new LobbyNetData_1.cs_mobilephonenum();
        pkg.fn = "cs_mobilephonenum";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_mobilephonenum.bind(this));
    };
    LobbyViewCtr.prototype.sc_mobilephonenum = function (data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            this.Model.mobilephonen = data;
            this.view.withdrawalView.getMobilephonenum();
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("数据异常" + data.result);
        }
    };
    /**绑定银行卡 */
    LobbyViewCtr.prototype.cs_bindalipaybank = function (info) {
        if (this.IsDestory)
            return;
        var pkg = new LobbyNetData_1.cs_bindalipaybank();
        pkg.fn = "cs_bindalipaybank";
        pkg.t = info.t;
        pkg.uid = AppConst_1.AppConst.mPlayerModel.userid;
        pkg.name = info.name;
        pkg.account = info.account;
        pkg.bank = info.bank;
        pkg.country = info.country;
        pkg.branch = info.branch;
        pkg.pwd = AppConst_1.AppConst.mPlayerModel["UserPassword"];
        pkg.province = info.province;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_bindalipaybank.bind(this));
    };
    LobbyViewCtr.prototype.sc_bindalipaybank = function (data) {
        // console.log("---sc_bindalipaybank---", data);
        if (!this.view)
            return;
        if (data.result == 1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("绑定成功！");
            this.view.withdrawalView.bindCardSuccess();
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("绑定失败：" + data.result);
        }
    };
    /**设置初始支付密码 */
    LobbyViewCtr.prototype.cs_changePassword_bk = function (password) {
        if (!this.view)
            return;
        var pkg = new LobbyNetData_1.cs_changePassword_bk();
        pkg.fn = "cs_changePassword_bk";
        pkg.newPassWord = password;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_changePassword_bk.bind(this));
    };
    LobbyViewCtr.prototype.sc_changePassword_bk = function (data) {
        if (!this.view)
            return;
        LobbyViewCtr.instance.model.isSetPayPassword = true;
        if (data.result == 1) {
            this.view.setPayPassword.setSuccessfull();
        }
        else if (data.result == -1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(12005)); //已经设置过初始密码
        }
    };
    /**领取任务的奖励 */
    LobbyViewCtr.prototype.cs_award = function (taskid) {
        if (this.IsDestory)
            return;
        var pkg = new LobbyNetData_1.cs_award();
        pkg.fn = "cs_award";
        pkg.userid = AppConst_1.AppConst.mPlayerModel.userid;
        pkg.taskid = taskid;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_award.bind(this, taskid));
    };
    LobbyViewCtr.prototype.sc_award = function (taskid, data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            var index = void 0;
            for (var i = 0, len = this.Model.tasklist.length; i < len; i++) {
                if (this.Model.tasklist[i].taskid == taskid) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                this.Model.tasklist.splice(index, 1);
            }
            this.view.welfareView.handleData();
            // this.cs_tasklist();
            this.cs_searchgoldornickname(AppConst_1.AppConst.mPlayerModel.userid);
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("领取成功,請到背包查看獎勵");
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("领取失败");
        }
    };
    /**获取VIP配置信息*/
    LobbyViewCtr.prototype.cs_getvipconfig = function () {
        var pkg = new LobbyNetData_1.cs_getvipconfig();
        pkg.fn = "cs_getvipconfig";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_getvipconfig.bind(this));
    };
    LobbyViewCtr.prototype.sc_getvipconfig = function (data) {
        console.log("-----------vip配置-------", data);
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            this.Model.vipConfig = data.config;
            this.cs_getuservipinfo();
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("error" + data.result);
        }
    };
    /**获取玩家VIP信息 */
    LobbyViewCtr.prototype.cs_getuservipinfo = function (isShow) {
        if (isShow === void 0) { isShow = false; }
        var pkg = new LobbyNetData_1.cs_getuservipinfo();
        pkg.fn = "cs_getuservipinfo";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_getuservipinfo.bind(this, isShow));
    };
    LobbyViewCtr.prototype.sc_getuservipinfo = function (isShow, data) {
        console.log("-----sc_getuservipinfo--------", data);
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            this.Model.vipInfo = data;
            this.view.GetLev(data.currExp);
            if (isShow) {
                this.view.showVipPrivilegeView();
            }
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("error" + data.result);
        }
    };
    /**领取晋级奖励 */
    LobbyViewCtr.prototype.cs_receiveupaward = function () {
        if (this.IsDestory)
            return;
        var pkg = new LobbyNetData_1.cs_receiveupaward();
        pkg.fn = "cs_receiveupaward";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_receiveupaward.bind(this));
    };
    LobbyViewCtr.prototype.sc_receiveupaward = function (data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            AppConst_1.AppConst.mPlayerModel.gold = data.MyScore;
            this.view.changedGold();
            if (this.view.meView) {
                this.view.meView.hideGold();
            }
            this.view.myVipPrivilegeView.setbtnjiniji();
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("晋级奖励领取成功" + data.AwardScore);
            // AwardScore: 10
            // MyScore: 92048187
            // cc: 0
            // fn: "sc_receiveupaward"
            // message: null
            // result: 1
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("晋级奖励领取失败");
        }
    };
    /**领取每月奖励 */
    LobbyViewCtr.prototype.cs_receivemonthaward = function () {
        if (this.IsDestory)
            return;
        var pkg = new LobbyNetData_1.cs_receivemonthaward();
        pkg.fn = "cs_receivemonthaward";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_receivemonthaward.bind(this));
    };
    LobbyViewCtr.prototype.sc_receivemonthaward = function (data) {
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            AppConst_1.AppConst.mPlayerModel.gold = data.MyScore;
            this.view.changedGold();
            if (this.view.meView) {
                this.view.meView.hideGold();
            }
            this.view.myVipPrivilegeView.setbtnmylj();
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("每月禮金领取成功" + data.AwardScore);
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("每月禮金领取失败");
        }
    };
    /**获取公告 */
    LobbyViewCtr.prototype.cs_getnotice = function (type) {
        var pkg = new LobbyNetData_1.cs_getnotice();
        pkg.fn = "cs_getnotice";
        pkg._t = type;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_getnotice.bind(this, type));
    };
    LobbyViewCtr.prototype.sc_getnotice = function (type, data) {
        cc.log("=======公告=========", data);
        if (data.result == 1) {
            if (data.noticelist.length <= 0)
                return;
            if (type == 1) { //滚动
                // this.Model.broadnotice = data.noticelist;
                BaseFrameNative_1.BaseFrameNative.broadnotice = data.noticelist;
                // let endTime = new Date(data.noticelist[0].endtime).getTime();
                // let startTime = new Date(data.noticelist[0].starttime).getTime();
                // let str = data.noticelist[0].content;
                this.view.broadcast.initNotice(data.noticelist);
            }
            else if (type == 4) { //弹窗
                this.Model.notice = data.noticelist;
                if (AppConst_1.AppConst.currentlevelid === undefined) {
                    this.view.showPopupView();
                }
            }
        }
    };
    /**赛事列表 */
    LobbyViewCtr.prototype.cs_compete_list = function () {
        if (this.IsDestory)
            return;
        var pkg = new LobbyNetData_1.cs_compete_list();
        pkg.fn = "cs_compete_list";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_compete_list.bind(this));
    };
    LobbyViewCtr.prototype.sc_compete_list = function (data) {
        if (this.IsDestory)
            return;
        cc.log("======赛事========", data);
        if (data.result == 1) {
            this.Model.matchData = data.competes;
            this.view.matchView.handleMatchListData();
        }
    };
    /**获取赛事玩家排名 */
    LobbyViewCtr.prototype.cs_compete_rank_info = function (competeid) {
        var pkg = new LobbyNetData_1.cs_compete_rank_info();
        pkg.fn = "cs_compete_rank_info";
        pkg.userid = AppConst_1.AppConst.mPlayerModel.userid;
        pkg.competeid = competeid;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_compete_rank_info.bind(this));
    };
    /**报名比赛 */
    LobbyViewCtr.prototype.cs_signup = function (competeid) {
        var pkg = new LobbyNetData_1.cs_signup();
        pkg.fn = "cs_signup";
        pkg.userid = AppConst_1.AppConst.mPlayerModel.userid;
        pkg.competeid = competeid;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_signup.bind(this, competeid));
    };
    LobbyViewCtr.prototype.sc_signup = function (competeid, data) {
        if (this.IsDestory)
            return;
        cc.log("-------报名比赛--------", data);
        if (data.result == 1) {
            for (var i = 0; i < this.Model.matchData.length; i++) {
                if (this.Model.matchData[i].competeid == competeid) {
                    // this.Model.matchData[i].signupcount += 1;
                    this.Model.matchData[i].IsSignup = true;
                    break;
                }
            }
            this.cs_compete_rank_info(competeid);
            // this.view.matchView.handleMatchListData();
            // this.view.matchDerailsView.getCompeteRank();
            // this.view.matchDerailsView.updatePlayNum();
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("报名成功");
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(data.message);
        }
    };
    /**退赛 */
    LobbyViewCtr.prototype.cs_quit = function (competeid) {
        var pkg = new LobbyNetData_1.cs_quit();
        pkg.fn = "cs_quit";
        pkg.userid = AppConst_1.AppConst.mPlayerModel.userid;
        pkg.competeid = competeid;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_quit.bind(this, competeid));
    };
    LobbyViewCtr.prototype.sc_quit = function (competeid, data) {
        if (this.IsDestory)
            return;
        cc.log("==========退出比赛=========", data);
        if (data.result == 1) {
            for (var i = 0; i < this.Model.matchData.length; i++) {
                if (this.Model.matchData[i].competeid == competeid) {
                    this.Model.matchData[i].signupcount -= 1;
                    this.Model.matchData[i].IsSignup = false;
                    break;
                }
            }
            this.view.matchView.handleMatchListData();
            // this.cs_compete_rank_info(competeid);
            var index = -1;
            for (var i = 0; i < this.Model.matchRank[competeid].length; i++) {
                if (this.Model.matchRank[competeid][i].playerid == AppConst_1.AppConst.mPlayerModel.userid) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                this.Model.matchRank[competeid].splice(index, 1);
            }
            this.view.matchDerailsView && this.view.matchDerailsView.handleRank();
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("退賽成功");
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(data.message);
        }
    };
    /**推送的排名 */
    LobbyViewCtr.prototype.sc_compete_rank_info = function (data) {
        cc.log("===========推送的排名===-------------", data);
        if (this.IsDestory)
            return;
        if (data.result == 1 && data.infos.length > 0) {
            this.Model.matchRank[data.competeid] = data.infos;
            this.view.matchDerailsView && this.view.matchDerailsView.handleRank();
            for (var i = 0; i < this.Model.matchData.length; i++) {
                if (this.Model.matchData[i].competeid == data.competeid) {
                    this.Model.matchData[i].signupcount = data.infos.length;
                    break;
                }
            }
            this.view.matchView.handleMatchListData();
            this.view.matchDerailsView && this.view.matchDerailsView.updatePlayNum();
        }
    };
    /*获取代理信息 只保留数据*/
    LobbyViewCtr.prototype.cs_getagentinfo_onlyData = function (idx) {
        var pkg = new LobbyNetData_1.cs_getagentinfo();
        pkg.fn = "cs_getagentinfo";
        pkg.idx = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_getagentinfo_onlyData.bind(this));
    };
    LobbyViewCtr.prototype.sc_getagentinfo_onlyData = function (data) {
        console.log("---sc_getagentinfo---", data);
        if (!this.view)
            return;
        if (data.result == 1) {
            this.Model.ageninfo = data;
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取社区信息失败:" + data.result);
        }
    };
    /*获取代理信息*/
    LobbyViewCtr.prototype.cs_getagentinfo = function (idx) {
        var pkg = new LobbyNetData_1.cs_getagentinfo();
        pkg.fn = "cs_getagentinfo";
        pkg.idx = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_getagentinfo.bind(this));
    };
    LobbyViewCtr.prototype.sc_getagentinfo = function (data) {
        console.log("---sc_getagentinfo---", data);
        if (!this.view)
            return;
        if (data.result == 1) {
            this.Model.ageninfo = data;
            this.view.showcommunityView();
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取社区信息失败:" + data.result);
        }
    };
    //申请加入指定俱乐部
    LobbyViewCtr.prototype.cs_apply_club = function (idx, message) {
        var pkg = new LobbyNetData_1.cs_apply_club();
        pkg.fn = "cs_apply_club";
        pkg.idx = idx;
        pkg.message = message;
        pkg.type = 1;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_apply_club.bind(this));
    };
    LobbyViewCtr.prototype.sc_apply_club = function (data) {
        if (!this.view)
            return;
        if (data.result == 1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("申请成功");
            // if (this.view.communityView) {
            //     this.view.communityView.applyClubSuccess();
            // }
            if (this.view.isHallJoin) {
                this.view.joinSuccess();
            }
            else {
                this.cs_getagentinfo(LoginViewCtr_1.LoginViewCtr.instance.Model.cidx);
            }
        }
        else if (data.result == -2) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("已经在社区，请不要重复申请");
        }
        else if (data.result == -3 || data.result == -10) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("已提交申请，不能重复提交");
        }
        else if (data.result == -11) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("社区邀请码不存在");
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("加入社区失败");
        }
    };
    /// <summary>
    /// 领取佣金
    /// </summary>
    LobbyViewCtr.prototype.cs_getcommision = function (gold, clubid) {
        var pkg = new LobbyNetData_1.cs_getcommision();
        pkg.fn = "cs_getcommision";
        pkg.gold = gold;
        pkg.clubid = clubid;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_getcommision.bind(this));
    };
    LobbyViewCtr.prototype.sc_getcommision = function (data) {
        // console.log("---sc_getcommision---", data);
        if (!this.view)
            return;
        if (data.result == 1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("领取成功");
            this.view.communityView.getcommisionSuccess();
        }
        else if (data.result == -1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("不是代理，没有领取权限");
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("sc_getcommision error : " + data.result);
        }
    };
    /** 修改代理比例 */
    LobbyViewCtr.prototype.cs_setagent_gm = function (idx, userId, showrate) {
        var pkg = new LobbyNetData_1.cs_setagent_gm();
        pkg.fn = "cs_setagent_gm";
        pkg.clubid = idx;
        pkg.userId = userId;
        pkg.showrate = showrate;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_setagent_gm.bind(this));
    };
    LobbyViewCtr.prototype.sc_setagent_gm = function (data) {
        if (!this.view)
            return;
        if (data.result == 1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("设置成功！");
            this.view.communityView.setAgentLevelSuccess();
        }
        else if (data.result == -1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("代理数据有误");
        }
        else if (data.result == -2) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("设置代理最大反利必须比自己的小");
        }
        else if (data.result == -3) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("只能给自己直接下级设置");
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("sc_setagent_gm error : " + data.result);
        }
    };
    // 基金转入转出
    LobbyViewCtr.prototype.cs_fundchange_club = function (idx, m_type, m_gold) {
        var pkg = new LobbyNetData_1.cs_fundchange_club();
        pkg.fn = "cs_fundchange_club";
        pkg.clubid = idx;
        pkg.type = m_type; // 1转入   2转出
        pkg.gold = m_gold;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_fundchange_club.bind(this));
    };
    LobbyViewCtr.prototype.sc_fundchange_club = function (data) {
        if (!this.view)
            return;
        //-1基金不足  -2余额不足   -3社区不存在
        if (data.result == 1) {
            // CommonCtr.instance.view.ShowTipLabel("操作成功！");
            if (this.view.communityView)
                this.view.communityView.outFundchangeClub();
        }
        else if (data.result == -1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11002));
        }
        else if (data.result == -2) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11003));
        }
        else if (data.result == -3) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11004));
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11005));
        }
    };
    LobbyViewCtr.prototype.cs_extendredinfo = function (idx) {
        var pkg = new LobbyNetData_1.cs_extendredinfo();
        pkg.fn = "cs_extendredinfo";
        pkg.idx = idx;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_extendredinfo.bind(this));
    };
    LobbyViewCtr.prototype.sc_extendredinfo = function (data) {
        console.log("sc_extendredinfo  === ", data);
        if (!this.view)
            return;
        if (data.result == 1) {
            this.Model.redpacketData = data;
            this.view.showRedPacketViewLayer();
        }
        else if (data.result == -1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11001));
        }
        else if (data.result == -4) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11009));
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(11001));
        }
    };
    LobbyViewCtr.prototype.cs_receiveextendgold = function (idx, userid) {
        var pkg = new LobbyNetData_1.cs_receiveextendgold();
        pkg.fn = "cs_receiveextendgold";
        pkg.idx = idx;
        pkg.userid = userid;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSONTimeOut(pkg, this.sc_receiveextendgold.bind(this));
    };
    LobbyViewCtr.prototype.sc_receiveextendgold = function (data) {
        if (!this.view)
            return;
        if (data.result == 1) {
            if (this.view.redPacketView) {
                this.view.redPacketView.receiveSuccess();
            }
        }
        else if (data.result = -3) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("返利任務未達標");
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("領取失敗，請聯繫客服");
        }
    };
    // 邮件消息
    LobbyViewCtr.prototype.cs_getemaillist = function (isShow) {
        if (isShow === void 0) { isShow = false; }
        var pkg = new LobbyNetData_1.cs_getemaillist();
        pkg.fn = "cs_getemaillist";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_getemaillist.bind(this, isShow));
    };
    LobbyViewCtr.prototype.sc_getemaillist = function (isShow, data) {
        console.log("----sc_getemaillist----", data);
        if (!this.view)
            return;
        if (data.result == 1) {
            this.Model.emailInfo = data;
            if (this.view.meView)
                this.view.meView.refreshMessageEmail(); // 刷新红点数据
            if (isShow) {
                this.view.showMyInformationView();
            }
        }
    };
    /**-------------------------生涯-赛事数据---------------------- */
    /**赛事列表 */
    LobbyViewCtr.prototype.cs_compete_record = function () {
        var getlist = new CareerNetDataStruct_1.cs_compete_record();
        getlist.fn = "cs_compete_record";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(getlist, this.sc_compete_record.bind(this));
    };
    LobbyViewCtr.prototype.sc_compete_record = function (data) {
        if (!this.view || !this.view.careerView)
            return;
        if (data.result == 1) {
            this.view.careerView.sc_compete_record(data);
        }
    };
    /**赛事详情 */
    LobbyViewCtr.prototype.cs_compete_record_detail = function (cid) {
        var getlist = new CareerNetDataStruct_1.cs_compete_record_detail();
        getlist.fn = "cs_compete_record_detail";
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(getlist, this.sc_compete_record_detail.bind(this));
    };
    LobbyViewCtr.prototype.sc_compete_record_detail = function (data) {
        if (!this.view || !this.view.mySsDerailsView)
            return;
        if (data.result == 1) {
            this.view.mySsDerailsView.sc_compete_record_detail(data);
        }
    };
    /**----------------------------游戏--------------------------------------------- */
    /**德州 */
    LobbyViewCtr.prototype.cs_entertablenum_tex = function (tid, gid) {
        if (this.IsDestory)
            return;
        var data = new LobbyNetData_1.cs_entertablenum_tex();
        data.tnumber = tid;
        data._g = gid;
        data.fn = "cs_entertablenum_tex";
        WebSocketManager_1.WebSocketManager.getInstance.Send(JSON.stringify(data), this.sc_entertablenum_tex.bind(this));
    };
    LobbyViewCtr.prototype.sc_entertablenum_tex = function (data) {
        //比赛，需要在更新数据的时候注册消息事件
        AppConst_1.AppConst.enterTableData = data;
        if (this.IsDestory)
            return;
        if (data.result == 1) {
            AppConst_1.AppConst.enterTableData = data;
            data.levelid && (AppConst_1.AppConst.currentlevelid = data.levelid);
            AppConst_1.AppConst.currentGameId = 51;
            this.view.intoTexas();
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("游戲進入失敗" + data.result);
        }
    };
    /**slots 进入游戏 */
    LobbyViewCtr.prototype.cs_slotentertable = function () {
        if (this.IsDestory)
            return;
        var data = new LobbyNetData_1.cs_slotentertable();
        data._g = AppConst_1.AppConst.currentGameId;
        data.gameid = AppConst_1.AppConst.currentGameId;
        data.fn = "cs_slotentertable";
        data.levelid = AppConst_1.AppConst.currentlevelid;
        WebSocketManager_1.WebSocketManager.getInstance.Send(JSON.stringify(data), this.sc_slotentertable.bind(this));
    };
    LobbyViewCtr.prototype.sc_slotentertable = function (data) {
        if (this.IsDestory)
            return;
        this.view.entertainmentView.changCanTouch();
        if (data.result == 1) {
            AppConst_1.AppConst.enterTableData = data;
            this.view.entertainmentView.joinGame();
        }
        else if (data.result == -99) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("金幣不足請充值");
        }
        else if (data.result == -888999) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("游戏暂未开启");
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("游戲進入失敗" + data.result);
        }
    };
    /**牛仔 请求进入房间 */
    LobbyViewCtr.prototype.cs_entertable_TexBoy = function () {
        if (this.IsDestory)
            return;
        var data = new LobbyNetData_1.cs_entertable_TexBoy();
        data.gameid = AppConst_1.AppConst.currentGameId;
        data._g = AppConst_1.AppConst.currentGameId;
        data.levelid = AppConst_1.AppConst.currentlevelid;
        data.fn = "cs_entertable_TexBoy";
        data.tableid = 0;
        data._limit = 0;
        var json = JSON.stringify(data);
        WebSocketManager_1.WebSocketManager.getInstance.Send(json, this.sc_entertable_TexBoy.bind(this));
    };
    LobbyViewCtr.prototype.sc_entertable_TexBoy = function (data) {
        if (this.IsDestory)
            return;
        this.view.entertainmentView.changCanTouch();
        if (data.result == 1) {
            AppConst_1.AppConst.enterTableData = data;
            this.view.entertainmentView.joinGame();
        }
        else if (data.result == -99) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("金幣不足請充值");
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("游戲進入失敗" + data.result);
        }
    };
    LobbyViewCtr.prototype.entertable_Fish = function () {
        if (this.IsDestory)
            return;
        this.view.entertainmentView.joinGame();
    };
    LobbyViewCtr.prototype.sc_sitdown_tex_n = function (data) {
        if (this.Model.TexSitdownData == null)
            this.Model.TexSitdownData = [];
        this.Model.TexSitdownData.push(data);
    };
    LobbyViewCtr.prototype.sc_pushevent_n = function (data) {
        if (this.IsDestory)
            return;
        this.view.setFlowingRead(true);
        if (this.view.myInformationView && this.view.myInformationView.fguiComponent.visible) {
            this.cs_getemaillist(true);
        }
    };
    LobbyViewCtr._viewCtr = null;
    return LobbyViewCtr;
}());
exports.default = LobbyViewCtr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXExvYmJ5Vmlld0N0ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFDLGlFQUFnRTtBQUVqRSwrRUFBOEU7QUFDOUUsbUVBQWtFO0FBQ2xFLHdEQUF1RDtBQUN2RCx3RkFBdUY7QUFDdkYsc0RBQXFEO0FBQ3JELG9FQUF3STtBQUN4SSxrRUFBaUU7QUFDakUsbURBQWtEO0FBQ2xELDJDQUFzQztBQUN0QywrQ0FBczBDO0FBR3QwQztJQUFBO1FBQ1csU0FBSSxHQUFjLElBQUksQ0FBQztRQUN2QixVQUFLLEdBQWUsSUFBSSxDQUFDO0lBMmlDcEMsQ0FBQztJQXppQ0csc0JBQVcsd0JBQVE7YUFBbkI7WUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7YUFDdEM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywrQkFBSzthQUFoQjtZQUNJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDckI7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFTSxtQ0FBWSxHQUFuQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMxQyxtQ0FBZ0IsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUQsbUNBQWdCLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FB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LElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ2xGLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBemlDYyxxQkFBUSxHQUFpQixJQUFJLENBQUM7SUEwaUNqRCxtQkFBQztDQTdpQ0QsQUE2aUNDLElBQUE7a0JBN2lDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xuaW1wb3J0IHsgc2NfY29tbW9ubm90aWNlX24sIHNjX2ZyZXNoZ29sZF9uIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvY3NfYmFzZVwiO1xuaW1wb3J0IHsgV2ViU29ja2V0TWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1dlYlNvY2tldE1hbmFnZXJcIjtcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XG5pbXBvcnQgeyBMb2dpblZpZXdDdHIgfSBmcm9tIFwiLi4vTG9naW4vTG9naW5WaWV3Q3RyXCI7XG5pbXBvcnQgeyBjc19jb21wZXRlX3JlY29yZCwgY3NfY29tcGV0ZV9yZWNvcmRfZGV0YWlsLCBzY19jb21wZXRlX3JlY29yZCwgc2NfY29tcGV0ZV9yZWNvcmRfZGV0YWlsIH0gZnJvbSBcIi4vY2FyZWVyL0NhcmVlck5ldERhdGFTdHJ1Y3RcIjtcbmltcG9ydCB7IEJyb2FkY2FzdFZpZXdDdHIgfSBmcm9tIFwiLi9Db21wb25lbnRzL0Jyb2FkY2FzdFZpZXdDdHJcIjtcbmltcG9ydCB7IExhbmd1YWdlQ29uZmlnIH0gZnJvbSBcIi4vTGFuZ3VhZ2VDb25maWdcIjtcbmltcG9ydCBMb2JieU1vZGVsIGZyb20gXCIuL0xvYmJ5TW9kZWxcIjtcbmltcG9ydCB7IHNjX2RlYWxnb2xkdHJhZGVfbiwgY3NfZ2V0dGFibGVsaXN0X3RleCwgc2NfZ2V0dGFibGVsaXN0X3RleCwgc2NfZ2V0bm90aWNlX24sIHNjX25vdGljZV9uLCBjc19zZWFyY2hnb2xkb3JuaWNrbmFtZSwgc2Nfc2VhcmNoZ29sZG9ybmlja25hbWUsIGNzX3BlcnNvbmFsaW5mbywgc2NfcGVyc29uYWxpbmZvLCBjc19jaGFuZ2VQYXNzd29yZF9hcHBiaywgc2NfY2hhbmdlUGFzc3dvcmRfYXBwYmssIGNzX2VudGVyYmFua19iaywgc2NfZW50ZXJiYW5rX2JrLCBiYW5rbG9nLCBjc19zZW5kZ29sZHRyYWRlLCBzY19zZW5kZ29sZHRyYWRlLCBjc19kZWFsZ29sZHRyYWRlLCBzY19kZWFsZ29sZHRyYWRlLCBjc19nZXRiYWNrcGFja2xpc3QsIHNjX2dldGJhY2twYWNrbGlzdCwgY3NfdXNlcHJvcCwgc2NfdXNlcHJvcCwgY3NfdGFza2xpc3QsIHNjX3Rhc2tsaXN0LCBjc19tb2JpbGVwaG9uZW51bSwgc2NfbW9iaWxlcGhvbmVudW0sIGNzX2JpbmRhbGlwYXliYW5rLCBzY19iaW5kYWxpcGF5YmFuaywgY3NfYXdhcmQsIHNjX2F3YXJkLCBjc19nZXR2aXBjb25maWcsIHNjX2dldHZpcGNvbmZpZywgY3NfZ2V0dXNlcnZpcGluZm8sIHNjX2dldHVzZXJ2aXBpbmZvLCBjc19yZWNlaXZldXBhd2FyZCwgc2NfcmVjZWl2ZXVwYXdhcmQsIGNzX3JlY2VpdmVtb250aGF3YXJkLCBzY19yZWNlaXZlbW9udGhhd2FyZCwgY3NfZ2V0bm90aWNlLCBzY19nZXRub3RpY2UsIGNzX2NvbXBldGVfbGlzdCwgc2NfY29tcGV0ZV9saXN0LCBjc19jb21wZXRlX3JhbmtfaW5mbywgY3Nfc2lnbnVwLCBzY19zaWdudXAsIGNzX3F1aXQsIHNjX3F1aXQsIHNjX2NvbXBldGVfcmFua19pbmZvLCBjc19nZXRhZ2VudGluZm8sIHNjX2dldGFnZW50aW5mbywgY3NfYXBwbHlfY2x1Yiwgc2NfYXBwbHlfY2x1YiwgY3NfZ2V0Y29tbWlzaW9uLCBzY19nZXRjb21taXNpb24sIGNzX3NldGFnZW50X2dtLCBzY19zZXRhZ2VudF9nbSwgY3NfZnVuZGNoYW5nZV9jbHViLCBzY19mdW5kY2hhbmdlX2NsdWIsIGNzX2VudGVydGFibGVudW1fdGV4LCBjc19zbG90ZW50ZXJ0YWJsZSwgc2Nfc2xvdGVudGVydGFibGUsIGNzX2VudGVydGFibGVfVGV4Qm95LCBzY19wdXNoZXZlbnRfbiwgY3NfZXh0ZW5kcmVkaW5mbywgc2NfZXh0ZW5kcmVkaW5mbywgY3NfcmVjZWl2ZWV4dGVuZGdvbGQsIHNjX3JlY2VpdmVleHRlbmRnb2xkLCBjc19nZXRlbWFpbGxpc3QsIHNjX2dldGVtYWlsbGlzdCwgc2NfZW50ZXJ0YWJsZW51bV90ZXgsIHNjX2ZyZXNocGxheWVySW5mb1NELCBjc19mcmVzaHBsYXllckluZm9TRCwgc2NfY2hhbmdlUGFzc3dvcmRfYmssIGNzX2NoYW5nZVBhc3N3b3JkX2JrIH0gZnJvbSBcIi4vTG9iYnlOZXREYXRhXCI7XG5pbXBvcnQgTG9iYnlWaWV3IGZyb20gXCIuL0xvYmJ5Vmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2JieVZpZXdDdHIge1xuICAgIHB1YmxpYyB2aWV3OiBMb2JieVZpZXcgPSBudWxsO1xuICAgIHB1YmxpYyBtb2RlbDogTG9iYnlNb2RlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX3ZpZXdDdHI6IExvYmJ5Vmlld0N0ciA9IG51bGw7XG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBMb2JieVZpZXdDdHIge1xuICAgICAgICBpZiAodGhpcy5fdmlld0N0ciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3Q3RyID0gbmV3IExvYmJ5Vmlld0N0cigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3Q3RyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgTW9kZWwoKTogTG9iYnlNb2RlbCB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBuZXcgTG9iYnlNb2RlbCgpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5Jbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZWw7XG4gICAgfVxuXG4gICAgcHVibGljIFJlZ2lzdE5vdGlmeSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2JieVZpZXdDdHIgIFJlZ2lzdE5vdGlmeVwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX2dldG5vdGljZV9uXCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX2dldG5vdGljZV9uXCIsIHRoaXMuc2NfZ2V0bm90aWNlX24uYmluZCh0aGlzKSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2Nfbm90aWNlX25cIiwgdGhpcy5zY19ub3RpY2Vfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19jb21tb25ub3RpY2VfblwiLCB0aGlzLnNjX2NvbW1vbm5vdGljZV9uLmJpbmQodGhpcykpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX2ZyZXNoZ29sZF9uXCIsIHRoaXMuc2NfZnJlc2hnb2xkX24uYmluZCh0aGlzKSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfZGVhbGdvbGR0cmFkZV9uXCIsIHRoaXMuc2NfZGVhbGdvbGR0cmFkZV9uLmJpbmQodGhpcykpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX2NvbXBldGVfcmFua19pbmZvXCIsIHRoaXMuc2NfY29tcGV0ZV9yYW5rX2luZm8uYmluZCh0aGlzKSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuUmVnaXN0Tm90aWZ5KFwic2NfZW50ZXJ0YWJsZW51bV90ZXhcIiwgdGhpcy5zY19lbnRlcnRhYmxlbnVtX3RleC5iaW5kKHRoaXMpKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19zaXRkb3duX3RleF9uXCIsIHRoaXMuc2Nfc2l0ZG93bl90ZXhfbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5SZWdpc3ROb3RpZnkoXCJzY19wdXNoZXZlbnRfblwiLCB0aGlzLnNjX3B1c2hldmVudF9uLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBVblJlZ2lzdE5vdGlmeSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMb2JieVZpZXdDdHIgIFVuUmVnaXN0Tm90aWZ5XCIpO1xuICAgICAgICAvLyBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2NfZ2V0bm90aWNlX25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY19ub3RpY2VfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX2NvbW1vbm5vdGljZV9uXCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2NfZnJlc2hnb2xkX25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY19kZWFsZ29sZHRyYWRlX25cIik7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuVW5SZWdpc3ROb3RpZnkoXCJzY19jb21wZXRlX3JhbmtfaW5mb1wiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX2VudGVydGFibGVudW1fdGV4XCIpO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlVuUmVnaXN0Tm90aWZ5KFwic2Nfc2l0ZG93bl90ZXhfblwiKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5VblJlZ2lzdE5vdGlmeShcInNjX3B1c2hldmVudF9uXCIpO1xuICAgIH1cblxuICAgIC8vIOWFrOWFsea2iOaBr+aOqOmAgVxuICAgIHB1YmxpYyBzY19jb21tb25ub3RpY2VfbihkYXRhOiBzY19jb21tb25ub3RpY2Vfbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLXNjX2NvbW1vbm5vdGljZV9uLS0tXCIsIGRhdGEpO1xuICAgIH1cblxuICAgIC8vIOWIt+aWsFxuICAgIHB1YmxpYyBzY19mcmVzaGdvbGRfbihkYXRhOiBzY19mcmVzaGdvbGRfbikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLXNjX2ZyZXNoZ29sZF9uLS0tXCIsIGRhdGEpO1xuICAgICAgICBpZiAoIXRoaXMudmlldykgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuZnJlc2hUeXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyDpkrvnn7NcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5mcmVzaFR5cGUgPT0gMikge1xuICAgICAgICAgICAgICAgIC8vIOmHkeW4gVxuICAgICAgICAgICAgICAgIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkID0gZGF0YS5nb2xkO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXBwQ29uc3QubVBsYXllck1vZGVsID09IFwiLCBBcHBDb25zdC5tUGxheWVyTW9kZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlldyAmJiB0aGlzLnZpZXcuY2hhbmdlZEdvbGQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcubWVWaWV3ICYmIHRoaXMudmlldy5tZVZpZXcuaGlkZUdvbGQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcud2l0aGRyYXdhbFZpZXcgJiYgdGhpcy52aWV3LndpdGhkcmF3YWxWaWV3LnVwZGF0ZUdvbGQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNzX2dldHVzZXJ2aXBpbmZvKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZnJlc2hUeXBlID09IDMpIHtcbiAgICAgICAgICAgICAgICBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY2lkeCA9IGRhdGEuZ29sZDtcbiAgICAgICAgICAgICAgICB0aGlzLmNzX2dldGFnZW50aW5mb19vbmx5RGF0YShMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY2lkeCk7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3ICYmIHRoaXMudmlldy5qb2luU3VjY2VzcygpO1xuICAgICAgICAgICAgICAgIC8vIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuWKoOWFpeekvuWMulwiICsgZGF0YS5nb2xkICsgXCLnlLPor7flt7LpgJrov4dcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2NfZGVhbGdvbGR0cmFkZV9uKGRhdGE6IHNjX2RlYWxnb2xkdHJhZGVfbikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLXNjX2RlYWxnb2xkdHJhZGVfbi0tLVwiLCBkYXRhKTtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXcpIHJldHVybjtcbiAgICAgICAgbGV0IHN0cjogc3RyaW5nID0gZGF0YS5vYmp1c2VybmFtZSArIFwi6LWg6YCBXCIgKyBVSVV0aWwuZm9ybWF0TnVtYmVyMTAwKGRhdGEuR29sZCkgKyBcIumHkeW4gee7meaCqFwiO1xuICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwKHN0cik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKTtcbiAgICAgICAgLy8gQXBwQ29uc3QubVBsYXllck1vZGVsLmdvbGQgKz0gZGF0YS5Hb2xkO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCk7XG5cbiAgICAgICAgLy8gdGhpcy52aWV3LmNoYW5nZWRHb2xkKCk7XG4gICAgICAgIC8vIHRoaXMudmlldy5tZVZpZXcuaGlkZUdvbGQoKTtcbiAgICAgICAgLy8gaWYgKHRoaXMudmlldy5tZVZpZXcpIHtcbiAgICAgICAgLy8gICAgIHRoaXMudmlldy5tZVZpZXcuaGlkZUdvbGQoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8qKuWIpOaWreatpFZpZXfmmK/lkKblt7Lnu4/ph4rmlL4gKi9cbiAgICBwdWJsaWMgZ2V0IElzRGVzdG9yeSgpOiBCb29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjc19nZXR0YWJsZWxpc3RfdGV4KGdhbWVJZDogbnVtYmVyID0gNTEpIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfZ2V0dGFibGVsaXN0X3RleCgpO1xuICAgICAgICBwa2cuY2x1YmlkeCA9IDA7Ly9Mb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY2lkeDtcbiAgICAgICAgcGtnLl9nID0gZ2FtZUlkO1xuICAgICAgICBwa2cuZm4gPSBcImNzX2dldHRhYmxlbGlzdF90ZXhcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihwa2csIHRoaXMuc2NfZ2V0dGFibGVsaXN0X3RleC5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NfZ2V0dGFibGVsaXN0X3RleChkYXRhOiBzY19nZXR0YWJsZWxpc3RfdGV4KSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tXCIsIGRhdGEpXG4gICAgICAgICAgICB0aGlzLk1vZGVsLnRhYmxlTGlzdCA9IGRhdGEudGluZm87XG4gICAgICAgICAgICB0aGlzLnZpZXcuaGFuZGxlUm9vbURhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKua4uOaIjyDot5Hpqaznga8gICovXG4gICAgcHVibGljIHNjX2dldG5vdGljZV9uKGRhdGE6IHNjX2dldG5vdGljZV9uKSB7XG4gICAgICAgIGxldCB0YXJnZXQ7XG4gICAgICAgIGxldCBkZXk6IG51bWJlciA9IDA7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3KSB7XG4gICAgICAgICAgICAgICAgLy8g5Zyo5aSn5Y6FXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmlldy5icm9hZGNhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy52aWV3LmJyb2FkY2FzdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IEJyb2FkY2FzdFZpZXdDdHIuaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZ2FtZWlkID09IDI1OCkge1xuICAgICAgICAgICAgICAgICAgICBkZXkgPSA2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZGV5ID4gMCkge1xuICAgICAgICAgICAgICAgIGRhdGEubm90aWNlbGlzdC5mb3JFYWNoKChub3RpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmFkZE1lc3NhZ2Uobm90aWNlLCBkZXkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEubm90aWNlbGlzdC5mb3JFYWNoKChub3RpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmFkZE1lc3NhZ2Uobm90aWNlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirlpKfljoXot5Hpqaznga8gKi9cbiAgICBwdWJsaWMgc2Nfbm90aWNlX24oZGF0YTogc2Nfbm90aWNlX24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tc2Nfbm90aWNlX24tLS0tXCIsIGRhdGEpO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmlldyAmJiB0aGlzLnZpZXcuYnJvYWRjYXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuX3QgPT0gMSkgeyAvL+a7muWKqOWFrOWRilxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLk1vZGVsLmJyb2Fkbm90aWNlID0gW2RhdGEubm90aWNlXTtcbiAgICAgICAgICAgICAgICAgICAgQmFzZUZyYW1lTmF0aXZlLmJyb2Fkbm90aWNlLnB1c2goZGF0YS5ub3RpY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuYnJvYWRjYXN0LmFkZE1lc3NhZ2UoZGF0YS5ub3RpY2UuY29udGVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq6I635Y+W55So5oi355qE6YeR5biBICovXG4gICAgcHVibGljIGNzX3NlYXJjaGdvbGRvcm5pY2tuYW1lKHVzZXJJZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICB0aGlzLk1vZGVsLnF1ZXJ5VXNlcklkID0gdXNlcklkO1xuICAgICAgICBsZXQgZGF0YSA9IG5ldyBjc19zZWFyY2hnb2xkb3JuaWNrbmFtZSgpO1xuICAgICAgICBkYXRhLnVzZXJpZCA9IHVzZXJJZDtcbiAgICAgICAgZGF0YS5mbiA9IFwiY3Nfc2VhcmNoZ29sZG9ybmlja25hbWVcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihkYXRhLCB0aGlzLnNjX3NlYXJjaGdvbGRvcm5pY2tuYW1lLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwdWJsaWMgc2Nfc2VhcmNoZ29sZG9ybmlja25hbWUoZGF0YTogc2Nfc2VhcmNoZ29sZG9ybmlja25hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIC8vIGNjLmxvZyhcIjItLS0tLS0tLS0tLS0tLS0tLVwiLCBkYXRhKTtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLk1vZGVsLnF1ZXJ5VXNlcklkID09IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICBBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCA9IGRhdGEuZ29sZDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuY2hhbmdlZEdvbGQoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52aWV3Lm1lVmlldykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcubWVWaWV3LmhpZGVHb2xkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHsgLy/mn6Xor6LlkI3lrZdcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcudHJhbnNmZXJWaWV3LnNob3dDb3JyZWN0R3JlZW4odHJ1ZSwgZGF0YS5uaWNrbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5Nb2RlbC5xdWVyeVVzZXJJZCAhPSBBcHBDb25zdC5tUGxheWVyTW9kZWwudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnRyYW5zZmVyVmlldy5zaG93Q29ycmVjdEdyZWVuKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirkv67mlLnlpLTlg48g5pi156ewICovXG4gICAgcHVibGljIGNzX3BlcnNvbmFsaW5mbyhpbmZvKSB7XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfcGVyc29uYWxpbmZvKCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3NfcGVyc29uYWxpbmZvXCI7XG4gICAgICAgIHBrZy5Vc2VySWQgPSBpbmZvLlVzZXJJZDtcbiAgICAgICAgcGtnLkhlYWRJY29uID0gaW5mby5IZWFkSWNvbjtcbiAgICAgICAgcGtnLm5pa2VuYW1lID0gaW5mby5uaWtlbmFtZTtcbiAgICAgICAgcGtnLnNleCA9IGluZm8uc2V4O1xuICAgICAgICBwa2cuRGVzYyA9IGluZm8uRGVzYztcbiAgICAgICAgcGtnLkhlYWRGcmFtZSA9IGluZm8uSGVhZEZyYW1lO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19wZXJzb25hbGluZm8uYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19wZXJzb25hbGluZm8oZGF0YTogc2NfcGVyc29uYWxpbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2NfcGVyc29uYWxpbmZvID09PT0gXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDEwMTAxKSk7XG4gICAgICAgICAgICB0aGlzLnZpZXcubXlpbmZvVmlldy5oYW5kbGVDaGFuZ2VkKCk7XG4gICAgICAgICAgICB0aGlzLmNzX3NlYXJjaGdvbGRvcm5pY2tuYW1lKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQpOyAvL+S8muaJo+mZpOmHkeW4gSDliLfmlrDph5HluIFcbiAgICAgICAgICAgIC8vdGhpcy5jc19mcmVzaHBsYXllckluZm9TRCgpOyAg5pWw5o2u5LiN5LiA6Ie0IOWFiOazqOmHiuS6hlxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IDApIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTAxMDgpKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMSkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMDEwMykpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0yKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDEwMTA0KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTUpIHsgLy8g5pi156ew6YeN5aSNXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDEwMTA1KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTYpIHsgLy8g5bey57uP5piv5q2k5aS05YOPXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDEwMTA2KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTcpIHsgLy8g5bey57uP5piv5q2k5aS05YOP5qGGXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDEwMTA3KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliLfmlrDnlKjmiLfkv6Hmga9cbiAgICBwdWJsaWMgY3NfZnJlc2hwbGF5ZXJJbmZvU0QoKSB7XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfZnJlc2hwbGF5ZXJJbmZvU0QoKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19mcmVzaHBsYXllckluZm9TRFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19mcmVzaHBsYXllckluZm9TRC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2ZyZXNocGxheWVySW5mb1NEKGRhdGE6IHNjX2ZyZXNocGxheWVySW5mb1NEKSB7XG4gICAgICAgIGNjLmxvZyhcIi0tLXNjX2ZyZXNocGxheWVySW5mb1NELS0tXCIsIGRhdGEpO1xuICAgICAgICBpZiAodGhpcy5Jc0Rlc3RvcnkpIHJldHVybjsgLy/ov5nmnaHmtojmga/nmoQgdXNlciDlsJHlh6DkuKrlrZfmrrUg5LiN6IO96KaG55uW5Y6f5p2l55qEXG4gICAgICAgIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5jaW5mbyA9IGRhdGEudXNlci5jaW5mbztcbiAgICAgICAgLy9pZiAodGhpcy52aWV3Lm15aW5mb1ZpZXcpIHRoaXMudmlldy5teWluZm9WaWV3LmhhbmRsZUNoYW5nZWQoKTtcbiAgICAgICAgaWYgKHRoaXMudmlldy5jYXJlZXJWaWV3KSB0aGlzLnZpZXcuY2FyZWVyVmlldy5sb2FkSkNEYXRhKCk7XG4gICAgfVxuXG4gICAgLyoq6Kit572u5pSv5LuY5a+G56K8ICovXG4gICAgcHVibGljIGNzX2NoYW5nZVBhc3N3b3JkX2FwcGJrKG9sZFBhc3NXb3JkOiBzdHJpbmcsIG5ld1Bhc3NXb3JkOiBzdHJpbmcsIGluc2V0OiBib29sZWFuID0gZmFsc2UsIGlzVHggPSBmYWxzZSkge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2NoYW5nZVBhc3N3b3JkX2FwcGJrKCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3NfY2hhbmdlUGFzc3dvcmRfYXBwYmtcIjtcbiAgICAgICAgcGtnLm9sZFBhc3NXb3JkID0gb2xkUGFzc1dvcmQ7XG4gICAgICAgIHBrZy5uZXdQYXNzV29yZCA9IG5ld1Bhc3NXb3JkO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19jaGFuZ2VQYXNzd29yZF9hcHBiay5iaW5kKHRoaXMsIGluc2V0LCBpc1R4KSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19jaGFuZ2VQYXNzd29yZF9hcHBiayhpbnNldDogYm9vbGVhbiwgaXNUeDogYm9vbGVhbiwgZGF0YTogc2NfY2hhbmdlUGFzc3dvcmRfYXBwYmspIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAoaW5zZXQpIHtcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLkv67mlLnlr4bnorzmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Lm1vZGlmeVBsYXlQd2RWaWV3LkhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVHgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LndpdGhkcmF3YWxWaWV3LnNldFB3ZFN1Y2NlZWQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcudmVyaWZpY2F0aW9uUHdkVmlldy5zZXRQd2RTdWNjZWVkKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLoqK3nva7lr4bnorzlpLHmlZdcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirpqozor4HmlK/ku5jlr4bnoIEqL1xuICAgIHB1YmxpYyBjc19lbnRlcmJhbmtfYmsocHdkOiBzdHJpbmcsIGJvb2w6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2VudGVyYmFua19iaygpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX2VudGVyYmFua19ia1wiO1xuICAgICAgICBwa2cucHdkID0gcHdkO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19lbnRlcmJhbmtfYmsuYmluZCh0aGlzLCBib29sKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19lbnRlcmJhbmtfYmsoYm9vbDogYm9vbGVhbiwgZGF0YTogc2NfZW50ZXJiYW5rX2JrKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcud2l0aGRyYXdhbFZpZXcudmVyaWZpY2F0aW9uUHdkU3VjKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy52ZXJpZmljYXRpb25Qd2RWaWV3LnZlcmlmaWNhdGlvblB3ZFN1Y2NlZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuWvhueggemUmeivr1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKui9rOi0piAqL1xuICAgIHB1YmxpYyBjc19zZW5kZ29sZHRyYWRlKG9ianVzZXJpZDogbnVtYmVyLCBnb2xkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBrZyA9IG5ldyBjc19zZW5kZ29sZHRyYWRlKCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3Nfc2VuZGdvbGR0cmFkZVwiO1xuICAgICAgICBwa2cub2JqdXNlcmlkID0gb2JqdXNlcmlkO1xuICAgICAgICBwa2cuR29sZCA9IGdvbGQ7XG4gICAgICAgIHBrZy5Jc0dldCA9IGZhbHNlO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19zZW5kZ29sZHRyYWRlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwdWJsaWMgc2Nfc2VuZGdvbGR0cmFkZShkYXRhOiBzY19zZW5kZ29sZHRyYWRlKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy52aWV3LnRyYW5zZmVyVmlldy5zZW5kRGVhbGdvbGR0cmFkZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC03KSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLovazotKblpLHotKUs6YeR6aKd5b+F6aG75aSn5LqOMjDvvIFcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLovazotKblpLHotKVcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKui9rOi0puehruiupCAqL1xuICAgIHB1YmxpYyBjc19kZWFsZ29sZHRyYWRlKG9ianVzZXJpZDogbnVtYmVyLCBnb2xkOiBudW1iZXIsIHB3ZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2RlYWxnb2xkdHJhZGUoKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19kZWFsZ29sZHRyYWRlXCI7XG4gICAgICAgIHBrZy5vYmp1c2VyaWQgPSBvYmp1c2VyaWQ7XG4gICAgICAgIHBrZy5Hb2xkID0gZ29sZDtcbiAgICAgICAgcGtnLmJhbmtQYXNzV29yZCA9IHB3ZDtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihwa2csIHRoaXMuc2NfZGVhbGdvbGR0cmFkZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2RlYWxnb2xkdHJhZGUoZGF0YTogc2NfZGVhbGdvbGR0cmFkZSkge1xuICAgICAgICBpZiAodGhpcy5Jc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXcudHJhbnNmZXJWaWV3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnRyYW5zZmVyVmlldy51cGRhdGVHb2xkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLovazotKbmiJDlip9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLovazotKblpLHotKVcIiArIGRhdGEuTXNnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirojrflj5bog4zljIXpgZPlhbfliJfooaggKi9cbiAgICBwdWJsaWMgY3NfZ2V0YmFja3BhY2tsaXN0KCkge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2dldGJhY2twYWNrbGlzdCgpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX2dldGJhY2twYWNrbGlzdFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19nZXRiYWNrcGFja2xpc3QuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19nZXRiYWNrcGFja2xpc3QoZGF0YTogc2NfZ2V0YmFja3BhY2tsaXN0KSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5iYWdwYWNrRGF0YSA9IGRhdGEucHJvcHM7XG4gICAgICAgICAgICB0aGlzLnZpZXcuc2hvd2tuYXBzYWNrVmlldygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5pqC5peg5pWw5o2uXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOS9v+eUqOWFkeaNoumBk+WFtyovXG4gICAgcHVibGljIGNzX3VzZXByb3AoUHJvcElEOiBudW1iZXIsIFByb3BDb3VudCwgdXNlOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX3VzZXByb3AoKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc191c2Vwcm9wXCI7XG4gICAgICAgIHBrZy5Qcm9wSUQgPSBQcm9wSUQ7XG4gICAgICAgIHBrZy5Qcm9wQ291bnQgPSBQcm9wQ291bnQ7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX3VzZXByb3AuYmluZCh0aGlzLCB1c2UpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX3VzZXByb3AodXNlOiBib29sZWFuLCBkYXRhOiBzY191c2Vwcm9wKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgbGV0IHByb3BMaXN0ID0gdGhpcy52aWV3Lm15S25hcHNhY2tWaWV3Lmxpc3REYXRhO1xuICAgICAgICAgICAgcHJvcExpc3QgPSBwcm9wTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5Qcm9wSUQgPT0gZGF0YS5Qcm9wSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5Qcm9wQ291bnQgPSBkYXRhLlByb3BDb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uUHJvcENvdW50ICE9IDA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy52aWV3Lm15S25hcHNhY2tWaWV3Lmxpc3REYXRhID0gcHJvcExpc3Q7XG4gICAgICAgICAgICBBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCA9IGRhdGEuVXNlckdvbGQ7XG4gICAgICAgICAgICB0aGlzLnZpZXcuY2hhbmdlZEdvbGQoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5tZVZpZXcuaGlkZUdvbGQoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3NfZ2V0YmFja3BhY2tsaXN0KCk7XG4gICAgICAgICAgICAvLyB0aGlzLmNzX3NlYXJjaGdvbGRvcm5pY2tuYW1lKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQpO1xuICAgICAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICAgICAgdXNlID8gc3RyID0gYOaIkOWKn+WFkeaNoiR7ZGF0YS5Qcm9wR29sZH1gIDogc3RyID0gYOS9v+eUqOaIkOWKn2A7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoc3RyKTtcbiAgICAgICAgICAgIGlmICghdXNlKSB7XG4gICAgICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcubWVWaWV3LnNldEhlYWRGcmFtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLlhZHmjaLlpLHotKVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirojrflj5bku7vliqHliJfooaggKi9cbiAgICBwdWJsaWMgY3NfdGFza2xpc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX3Rhc2tsaXN0KCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3NfdGFza2xpc3RcIjtcbiAgICAgICAgcGtnLnVzZXJJZCA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQ7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX3Rhc2tsaXN0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwdWJsaWMgc2NfdGFza2xpc3QoZGF0YTogc2NfdGFza2xpc3QpIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IGRhdGEudGFza2xpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLmlzY29tcGxhdGUgPyAtMSA6IDE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhc2sgPSB0YXNrLmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhKGl0ZW0uaXNhd2FyZCAmJiBpdGVtLmlzY29tcGxhdGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0YXNrLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gYS50YXNraWQgLSBiLnRhc2tpZDtcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB0aGlzLk1vZGVsLnRhc2tsaXN0ID0gW107XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS3ku7vliqEtLS0tLS0tLS0tJ1wiLCB0YXNrKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFzay5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdGFza1tpXS5uYW1lKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAodGFza1tpXS5uYW1lLmluZGV4T2YoXCLnrb7liLBcIikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC50YXNrbGlzdC5wdXNoKHRhc2tbaV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrW2ldLmlzYXdhcmQgPT0gZmFsc2UgJiYgdGFza1tpXS5pc2NvbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLnRhc2tsaXN0LnB1c2godGFza1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0aGlzLnZpZXcubWVWaWV3LmhhbmRsZUZsaXN0KCk7XG4gICAgICAgICAgICB0aGlzLnZpZXcud2VsZmFyZVZpZXcgJiYgdGhpcy52aWV3LndlbGZhcmVWaWV3LmhhbmRsZURhdGEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICB0aGlzLk1vZGVsLnRhc2tsaXN0ID0gW107XG4gICAgICAgICAgICAvLyB0aGlzLnZpZXcud2VsZmFyZVZpZXcgJiYgdGhpcy52aWV3LndlbGZhcmVWaWV3LmhhbmRsZURhdGEoKTtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLojrflj5bku7vliqHliJfooajlpLHotKVcIik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKuiOt+WPlue7keWumueahOmTtuihjOWNoeWSjOaUr+S7mOWunSAqL1xuICAgIHB1YmxpYyBjc19tb2JpbGVwaG9uZW51bSgpIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfbW9iaWxlcGhvbmVudW0oKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19tb2JpbGVwaG9uZW51bVwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19tb2JpbGVwaG9uZW51bS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX21vYmlsZXBob25lbnVtKGRhdGE6IHNjX21vYmlsZXBob25lbnVtKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5tb2JpbGVwaG9uZW4gPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy52aWV3LndpdGhkcmF3YWxWaWV3LmdldE1vYmlsZXBob25lbnVtKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5pWw5o2u5byC5bi4XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq57uR5a6a6ZO26KGM5Y2hICovXG4gICAgcHVibGljIGNzX2JpbmRhbGlwYXliYW5rKGluZm8pIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfYmluZGFsaXBheWJhbmsoKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19iaW5kYWxpcGF5YmFua1wiO1xuICAgICAgICBwa2cudCA9IGluZm8udDtcbiAgICAgICAgcGtnLnVpZCA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQ7XG4gICAgICAgIHBrZy5uYW1lID0gaW5mby5uYW1lO1xuICAgICAgICBwa2cuYWNjb3VudCA9IGluZm8uYWNjb3VudDtcbiAgICAgICAgcGtnLmJhbmsgPSBpbmZvLmJhbms7XG4gICAgICAgIHBrZy5jb3VudHJ5ID0gaW5mby5jb3VudHJ5O1xuICAgICAgICBwa2cuYnJhbmNoID0gaW5mby5icmFuY2g7XG4gICAgICAgIHBrZy5wd2QgPSBBcHBDb25zdC5tUGxheWVyTW9kZWxbXCJVc2VyUGFzc3dvcmRcIl07XG4gICAgICAgIHBrZy5wcm92aW5jZSA9IGluZm8ucHJvdmluY2U7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX2JpbmRhbGlwYXliYW5rLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwdWJsaWMgc2NfYmluZGFsaXBheWJhbmsoZGF0YTogc2NfYmluZGFsaXBheWJhbmspIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS1zY19iaW5kYWxpcGF5YmFuay0tLVwiLCBkYXRhKTtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXcpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIue7keWumuaIkOWKn++8gVwiKTtcbiAgICAgICAgICAgIHRoaXMudmlldy53aXRoZHJhd2FsVmlldy5iaW5kQ2FyZFN1Y2Nlc3MoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIue7keWumuWksei0pe+8mlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq6K6+572u5Yid5aeL5pSv5LuY5a+G56CBICovXG4gICAgcHVibGljIGNzX2NoYW5nZVBhc3N3b3JkX2JrKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXcpIHJldHVybjtcbiAgICAgICAgbGV0IHBrZyA9IG5ldyBjc19jaGFuZ2VQYXNzd29yZF9iaygpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX2NoYW5nZVBhc3N3b3JkX2JrXCI7XG4gICAgICAgIHBrZy5uZXdQYXNzV29yZCA9IHBhc3N3b3JkO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19jaGFuZ2VQYXNzd29yZF9iay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2NoYW5nZVBhc3N3b3JkX2JrKGRhdGE6IHNjX2NoYW5nZVBhc3N3b3JkX2JrKSB7XG4gICAgICAgIGlmICghdGhpcy52aWV3KSByZXR1cm47XG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5tb2RlbC5pc1NldFBheVBhc3N3b3JkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5zZXRQYXlQYXNzd29yZC5zZXRTdWNjZXNzZnVsbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDEyMDA1KSk7IC8v5bey57uP6K6+572u6L+H5Yid5aeL5a+G56CBXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirpooblj5bku7vliqHnmoTlpZblirEgKi9cbiAgICBwdWJsaWMgY3NfYXdhcmQodGFza2lkOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfYXdhcmQoKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19hd2FyZFwiO1xuICAgICAgICBwa2cudXNlcmlkID0gQXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZDtcbiAgICAgICAgcGtnLnRhc2tpZCA9IHRhc2tpZDtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihwa2csIHRoaXMuc2NfYXdhcmQuYmluZCh0aGlzLCB0YXNraWQpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2F3YXJkKHRhc2tpZDogbnVtYmVyLCBkYXRhOiBzY19hd2FyZCkge1xuICAgICAgICBpZiAodGhpcy5Jc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIGxldCBpbmRleDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLk1vZGVsLnRhc2tsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuTW9kZWwudGFza2xpc3RbaV0udGFza2lkID09IHRhc2tpZCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC50YXNrbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52aWV3LndlbGZhcmVWaWV3LmhhbmRsZURhdGEoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3NfdGFza2xpc3QoKTtcbiAgICAgICAgICAgIHRoaXMuY3Nfc2VhcmNoZ29sZG9ybmlja25hbWUoQXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZCk7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6aKG5Y+W5oiQ5YqfLOiri+WIsOiDjOWMheafpeeci+eNjuWLtVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLpooblj5blpLHotKVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirojrflj5ZWSVDphY3nva7kv6Hmga8qL1xuICAgIHB1YmxpYyBjc19nZXR2aXBjb25maWcoKSB7XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfZ2V0dmlwY29uZmlnKCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3NfZ2V0dmlwY29uZmlnXCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX2dldHZpcGNvbmZpZy5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2dldHZpcGNvbmZpZyhkYXRhOiBzY19nZXR2aXBjb25maWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLXZpcOmFjee9ri0tLS0tLS1cIiwgZGF0YSk7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC52aXBDb25maWcgPSBkYXRhLmNvbmZpZztcbiAgICAgICAgICAgIHRoaXMuY3NfZ2V0dXNlcnZpcGluZm8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCJlcnJvclwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKuiOt+WPlueOqeWutlZJUOS/oeaBryAqL1xuICAgIHB1YmxpYyBjc19nZXR1c2VydmlwaW5mbyhpc1Nob3c6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2dldHVzZXJ2aXBpbmZvKCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3NfZ2V0dXNlcnZpcGluZm9cIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihwa2csIHRoaXMuc2NfZ2V0dXNlcnZpcGluZm8uYmluZCh0aGlzLCBpc1Nob3cpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2dldHVzZXJ2aXBpbmZvKGlzU2hvdzogYm9vbGVhbiwgZGF0YTogc2NfZ2V0dXNlcnZpcGluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLXNjX2dldHVzZXJ2aXBpbmZvLS0tLS0tLS1cIiwgZGF0YSk7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC52aXBJbmZvID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMudmlldy5HZXRMZXYoZGF0YS5jdXJyRXhwKTtcbiAgICAgICAgICAgIGlmIChpc1Nob3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1ZpcFByaXZpbGVnZVZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCJlcnJvclwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKumihuWPluaZi+e6p+WlluWKsSAqL1xuICAgIHB1YmxpYyBjc19yZWNlaXZldXBhd2FyZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfcmVjZWl2ZXVwYXdhcmQoKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19yZWNlaXZldXBhd2FyZFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19yZWNlaXZldXBhd2FyZC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX3JlY2VpdmV1cGF3YXJkKGRhdGE6IHNjX3JlY2VpdmV1cGF3YXJkKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsLmdvbGQgPSBkYXRhLk15U2NvcmU7XG4gICAgICAgICAgICB0aGlzLnZpZXcuY2hhbmdlZEdvbGQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXcubWVWaWV3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Lm1lVmlldy5oaWRlR29sZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52aWV3Lm15VmlwUHJpdmlsZWdlVmlldy5zZXRidG5qaW5pamkoKTtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLmmYvnuqflpZblirHpooblj5bmiJDlip9cIiArIGRhdGEuQXdhcmRTY29yZSk7XG4gICAgICAgICAgICAvLyBBd2FyZFNjb3JlOiAxMFxuICAgICAgICAgICAgLy8gTXlTY29yZTogOTIwNDgxODdcbiAgICAgICAgICAgIC8vIGNjOiAwXG4gICAgICAgICAgICAvLyBmbjogXCJzY19yZWNlaXZldXBhd2FyZFwiXG4gICAgICAgICAgICAvLyBtZXNzYWdlOiBudWxsXG4gICAgICAgICAgICAvLyByZXN1bHQ6IDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLmmYvnuqflpZblirHpooblj5blpLHotKVcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq6aKG5Y+W5q+P5pyI5aWW5YqxICovXG4gICAgcHVibGljIGNzX3JlY2VpdmVtb250aGF3YXJkKCkge1xuICAgICAgICBpZiAodGhpcy5Jc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgbGV0IHBrZyA9IG5ldyBjc19yZWNlaXZlbW9udGhhd2FyZCgpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX3JlY2VpdmVtb250aGF3YXJkXCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX3JlY2VpdmVtb250aGF3YXJkLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwdWJsaWMgc2NfcmVjZWl2ZW1vbnRoYXdhcmQoZGF0YTogc2NfcmVjZWl2ZW1vbnRoYXdhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCA9IGRhdGEuTXlTY29yZTtcbiAgICAgICAgICAgIHRoaXMudmlldy5jaGFuZ2VkR29sZCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMudmlldy5tZVZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcubWVWaWV3LmhpZGVHb2xkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZpZXcubXlWaXBQcml2aWxlZ2VWaWV3LnNldGJ0bm15bGooKTtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLmr4/mnIjnpq7ph5Hpooblj5bmiJDlip9cIiArIGRhdGEuQXdhcmRTY29yZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5q+P5pyI56au6YeR6aKG5Y+W5aSx6LSlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq6I635Y+W5YWs5ZGKICovXG4gICAgcHVibGljIGNzX2dldG5vdGljZSh0eXBlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBrZyA9IG5ldyBjc19nZXRub3RpY2UoKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19nZXRub3RpY2VcIjtcbiAgICAgICAgcGtnLl90ID0gdHlwZTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihwa2csIHRoaXMuc2NfZ2V0bm90aWNlLmJpbmQodGhpcywgdHlwZSkpO1xuICAgIH1cbiAgICBwdWJsaWMgc2NfZ2V0bm90aWNlKHR5cGU6IG51bWJlciwgZGF0YTogc2NfZ2V0bm90aWNlKSB7XG4gICAgICAgIGNjLmxvZyhcIj09PT09PT3lhazlkYo9PT09PT09PT1cIiwgZGF0YSk7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5ub3RpY2VsaXN0Lmxlbmd0aCA8PSAwKSByZXR1cm47XG4gICAgICAgICAgICBpZiAodHlwZSA9PSAxKSB7IC8v5rua5YqoXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5Nb2RlbC5icm9hZG5vdGljZSA9IGRhdGEubm90aWNlbGlzdDtcbiAgICAgICAgICAgICAgICBCYXNlRnJhbWVOYXRpdmUuYnJvYWRub3RpY2UgPSBkYXRhLm5vdGljZWxpc3Q7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGVuZFRpbWUgPSBuZXcgRGF0ZShkYXRhLm5vdGljZWxpc3RbMF0uZW5kdGltZSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIC8vIGxldCBzdGFydFRpbWUgPSBuZXcgRGF0ZShkYXRhLm5vdGljZWxpc3RbMF0uc3RhcnR0aW1lKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgLy8gbGV0IHN0ciA9IGRhdGEubm90aWNlbGlzdFswXS5jb250ZW50O1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5icm9hZGNhc3QuaW5pdE5vdGljZShkYXRhLm5vdGljZWxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IDQpIHsgLy/lvLnnqpdcbiAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLm5vdGljZSA9IGRhdGEubm90aWNlbGlzdDtcbiAgICAgICAgICAgICAgICBpZiAoQXBwQ29uc3QuY3VycmVudGxldmVsaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd1BvcHVwVmlldygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKui1m+S6i+WIl+ihqCAqL1xuICAgIHB1YmxpYyBjc19jb21wZXRlX2xpc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2NvbXBldGVfbGlzdCgpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX2NvbXBldGVfbGlzdFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19jb21wZXRlX2xpc3QuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19jb21wZXRlX2xpc3QoZGF0YTogc2NfY29tcGV0ZV9saXN0KSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBjYy5sb2coXCI9PT09PT3otZvkuos9PT09PT09PVwiLCBkYXRhKTtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwubWF0Y2hEYXRhID0gZGF0YS5jb21wZXRlcztcbiAgICAgICAgICAgIHRoaXMudmlldy5tYXRjaFZpZXcuaGFuZGxlTWF0Y2hMaXN0RGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKuiOt+WPlui1m+S6i+eOqeWutuaOkuWQjSAqL1xuICAgIHB1YmxpYyBjc19jb21wZXRlX3JhbmtfaW5mbyhjb21wZXRlaWQ6IG51bWJlcikge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2NvbXBldGVfcmFua19pbmZvKCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3NfY29tcGV0ZV9yYW5rX2luZm9cIjtcbiAgICAgICAgcGtnLnVzZXJpZCA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQ7XG4gICAgICAgIHBrZy5jb21wZXRlaWQgPSBjb21wZXRlaWQ7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX2NvbXBldGVfcmFua19pbmZvLmJpbmQodGhpcykpO1xuICAgIH1cblxuXG4gICAgLyoq5oql5ZCN5q+U6LWbICovXG4gICAgcHVibGljIGNzX3NpZ251cChjb21wZXRlaWQ6IG51bWJlcikge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX3NpZ251cCgpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX3NpZ251cFwiO1xuICAgICAgICBwa2cudXNlcmlkID0gQXBwQ29uc3QubVBsYXllck1vZGVsLnVzZXJpZDtcbiAgICAgICAgcGtnLmNvbXBldGVpZCA9IGNvbXBldGVpZDtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihwa2csIHRoaXMuc2Nfc2lnbnVwLmJpbmQodGhpcywgY29tcGV0ZWlkKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19zaWdudXAoY29tcGV0ZWlkOiBudW1iZXIsIGRhdGE6IHNjX3NpZ251cCkge1xuICAgICAgICBpZiAodGhpcy5Jc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tLeaKpeWQjeavlOi1my0tLS0tLS0tXCIsIGRhdGEpO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLk1vZGVsLm1hdGNoRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLk1vZGVsLm1hdGNoRGF0YVtpXS5jb21wZXRlaWQgPT0gY29tcGV0ZWlkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuTW9kZWwubWF0Y2hEYXRhW2ldLnNpZ251cGNvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTW9kZWwubWF0Y2hEYXRhW2ldLklzU2lnbnVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jc19jb21wZXRlX3JhbmtfaW5mbyhjb21wZXRlaWQpO1xuXG4gICAgICAgICAgICAvLyB0aGlzLnZpZXcubWF0Y2hWaWV3LmhhbmRsZU1hdGNoTGlzdERhdGEoKTtcblxuICAgICAgICAgICAgLy8gdGhpcy52aWV3Lm1hdGNoRGVyYWlsc1ZpZXcuZ2V0Q29tcGV0ZVJhbmsoKTtcbiAgICAgICAgICAgIC8vIHRoaXMudmlldy5tYXRjaERlcmFpbHNWaWV3LnVwZGF0ZVBsYXlOdW0oKTtcblxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5oql5ZCN5oiQ5YqfXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKumAgOi1myAqL1xuICAgIHB1YmxpYyBjc19xdWl0KGNvbXBldGVpZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfcXVpdCgpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX3F1aXRcIjtcbiAgICAgICAgcGtnLnVzZXJpZCA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQ7XG4gICAgICAgIHBrZy5jb21wZXRlaWQgPSBjb21wZXRlaWQ7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX3F1aXQuYmluZCh0aGlzLCBjb21wZXRlaWQpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX3F1aXQoY29tcGV0ZWlkOiBudW1iZXIsIGRhdGE6IHNjX3F1aXQpIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGNjLmxvZyhcIj09PT09PT09PT3pgIDlh7rmr5TotZs9PT09PT09PT1cIiwgZGF0YSk7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTW9kZWwubWF0Y2hEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuTW9kZWwubWF0Y2hEYXRhW2ldLmNvbXBldGVpZCA9PSBjb21wZXRlaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5tYXRjaERhdGFbaV0uc2lnbnVwY291bnQgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Nb2RlbC5tYXRjaERhdGFbaV0uSXNTaWdudXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52aWV3Lm1hdGNoVmlldy5oYW5kbGVNYXRjaExpc3REYXRhKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmNzX2NvbXBldGVfcmFua19pbmZvKGNvbXBldGVpZCk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5Nb2RlbC5tYXRjaFJhbmtbY29tcGV0ZWlkXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLk1vZGVsLm1hdGNoUmFua1tjb21wZXRlaWRdW2ldLnBsYXllcmlkID09IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuTW9kZWwubWF0Y2hSYW5rW2NvbXBldGVpZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmlldy5tYXRjaERlcmFpbHNWaWV3ICYmIHRoaXMudmlldy5tYXRjaERlcmFpbHNWaWV3LmhhbmRsZVJhbmsoKTtcblxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6YCA6LO95oiQ5YqfXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKGRhdGEubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKirmjqjpgIHnmoTmjpLlkI0gKi9cbiAgICBwdWJsaWMgc2NfY29tcGV0ZV9yYW5rX2luZm8oZGF0YTogc2NfY29tcGV0ZV9yYW5rX2luZm8pIHtcbiAgICAgICAgY2MubG9nKFwiPT09PT09PT09PT3mjqjpgIHnmoTmjpLlkI09PT0tLS0tLS0tLS0tLS0tXCIsIGRhdGEpO1xuICAgICAgICBpZiAodGhpcy5Jc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEgJiYgZGF0YS5pbmZvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLm1hdGNoUmFua1tkYXRhLmNvbXBldGVpZF0gPSBkYXRhLmluZm9zO1xuICAgICAgICAgICAgdGhpcy52aWV3Lm1hdGNoRGVyYWlsc1ZpZXcgJiYgdGhpcy52aWV3Lm1hdGNoRGVyYWlsc1ZpZXcuaGFuZGxlUmFuaygpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTW9kZWwubWF0Y2hEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuTW9kZWwubWF0Y2hEYXRhW2ldLmNvbXBldGVpZCA9PSBkYXRhLmNvbXBldGVpZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLk1vZGVsLm1hdGNoRGF0YVtpXS5zaWdudXBjb3VudCA9IGRhdGEuaW5mb3MubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZpZXcubWF0Y2hWaWV3LmhhbmRsZU1hdGNoTGlzdERhdGEoKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5tYXRjaERlcmFpbHNWaWV3ICYmIHRoaXMudmlldy5tYXRjaERlcmFpbHNWaWV3LnVwZGF0ZVBsYXlOdW0oKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvKuiOt+WPluS7o+eQhuS/oeaBryDlj6rkv53nlZnmlbDmja4qL1xuICAgIHB1YmxpYyBjc19nZXRhZ2VudGluZm9fb25seURhdGEoaWR4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBrZyA9IG5ldyBjc19nZXRhZ2VudGluZm8oKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19nZXRhZ2VudGluZm9cIjtcbiAgICAgICAgcGtnLmlkeCA9IExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4O1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19nZXRhZ2VudGluZm9fb25seURhdGEuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19nZXRhZ2VudGluZm9fb25seURhdGEoZGF0YTogc2NfZ2V0YWdlbnRpbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tc2NfZ2V0YWdlbnRpbmZvLS0tXCIsIGRhdGEpO1xuICAgICAgICBpZiAoIXRoaXMudmlldykgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5hZ2VuaW5mbyA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLojrflj5bnpL7ljLrkv6Hmga/lpLHotKU6XCIgKyBkYXRhLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKuiOt+WPluS7o+eQhuS/oeaBryovXG4gICAgcHVibGljIGNzX2dldGFnZW50aW5mbyhpZHg6IG51bWJlcikge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2dldGFnZW50aW5mbygpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX2dldGFnZW50aW5mb1wiO1xuICAgICAgICBwa2cuaWR4ID0gTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNpZHg7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX2dldGFnZW50aW5mby5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2dldGFnZW50aW5mbyhkYXRhOiBzY19nZXRhZ2VudGluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS1zY19nZXRhZ2VudGluZm8tLS1cIiwgZGF0YSk7XG4gICAgICAgIGlmICghdGhpcy52aWV3KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLmFnZW5pbmZvID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93Y29tbXVuaXR5VmlldygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6I635Y+W56S+5Yy65L+h5oGv5aSx6LSlOlwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/nlLPor7fliqDlhaXmjIflrprkv7HkuZDpg6hcbiAgICBwdWJsaWMgY3NfYXBwbHlfY2x1YihpZHg6IG51bWJlciwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfYXBwbHlfY2x1YigpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX2FwcGx5X2NsdWJcIjtcbiAgICAgICAgcGtnLmlkeCA9IGlkeDtcbiAgICAgICAgcGtnLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICBwa2cudHlwZSA9IDE7XG5cbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihwa2csIHRoaXMuc2NfYXBwbHlfY2x1Yi5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2FwcGx5X2NsdWIoZGF0YTogc2NfYXBwbHlfY2x1Yikge1xuICAgICAgICBpZiAoIXRoaXMudmlldykgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi55Sz6K+35oiQ5YqfXCIpO1xuICAgICAgICAgICAgLy8gaWYgKHRoaXMudmlldy5jb21tdW5pdHlWaWV3KSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy52aWV3LmNvbW11bml0eVZpZXcuYXBwbHlDbHViU3VjY2VzcygpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgaWYgKHRoaXMudmlldy5pc0hhbGxKb2luKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LmpvaW5TdWNjZXNzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3NfZ2V0YWdlbnRpbmZvKExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMikge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5bey57uP5Zyo56S+5Yy677yM6K+35LiN6KaB6YeN5aSN55Sz6K+3XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0zIHx8IGRhdGEucmVzdWx0ID09IC0xMCkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5bey5o+Q5Lqk55Sz6K+377yM5LiN6IO96YeN5aSN5o+Q5LqkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xMSkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi56S+5Yy66YKA6K+356CB5LiN5a2Y5ZyoXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5Yqg5YWl56S+5Yy65aSx6LSlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDpooblj5bkvaPph5FcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjc19nZXRjb21taXNpb24oZ29sZDogbnVtYmVyLCBjbHViaWQ6IG51bWJlcikge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2dldGNvbW1pc2lvbigpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX2dldGNvbW1pc2lvblwiO1xuICAgICAgICBwa2cuZ29sZCA9IGdvbGQ7XG4gICAgICAgIHBrZy5jbHViaWQgPSBjbHViaWQ7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX2dldGNvbW1pc2lvbi5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2dldGNvbW1pc2lvbihkYXRhOiBzY19nZXRjb21taXNpb24pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS1zY19nZXRjb21taXNpb24tLS1cIiwgZGF0YSk7XG4gICAgICAgIGlmICghdGhpcy52aWV3KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLpooblj5bmiJDlip9cIik7XG4gICAgICAgICAgICB0aGlzLnZpZXcuY29tbXVuaXR5Vmlldy5nZXRjb21taXNpb25TdWNjZXNzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTEpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuS4jeaYr+S7o+eQhu+8jOayoeaciemihuWPluadg+mZkFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcInNjX2dldGNvbW1pc2lvbiBlcnJvciA6IFwiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIOS/ruaUueS7o+eQhuavlOS+iyAqL1xuICAgIHB1YmxpYyBjc19zZXRhZ2VudF9nbShpZHg6IG51bWJlciwgdXNlcklkOiBudW1iZXIsIHNob3dyYXRlOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBrZyA9IG5ldyBjc19zZXRhZ2VudF9nbSgpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX3NldGFnZW50X2dtXCI7XG4gICAgICAgIHBrZy5jbHViaWQgPSBpZHg7XG4gICAgICAgIHBrZy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHBrZy5zaG93cmF0ZSA9IHNob3dyYXRlO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19zZXRhZ2VudF9nbS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX3NldGFnZW50X2dtKGRhdGE6IHNjX3NldGFnZW50X2dtKSB7XG4gICAgICAgIGlmICghdGhpcy52aWV3KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLorr7nva7miJDlip/vvIFcIik7XG4gICAgICAgICAgICB0aGlzLnZpZXcuY29tbXVuaXR5Vmlldy5zZXRBZ2VudExldmVsU3VjY2VzcygpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLku6PnkIbmlbDmja7mnInor69cIik7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTIpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuiuvue9ruS7o+eQhuacgOWkp+WPjeWIqeW/hemhu+avlOiHquW3seeahOWwj1wiKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMykge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5Y+q6IO957uZ6Ieq5bex55u05o6l5LiL57qn6K6+572uXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwic2Nfc2V0YWdlbnRfZ20gZXJyb3IgOiBcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8g5Z+66YeR6L2s5YWl6L2s5Ye6XG4gICAgcHVibGljIGNzX2Z1bmRjaGFuZ2VfY2x1YihpZHg6IG51bWJlciwgbV90eXBlOiBudW1iZXIsIG1fZ29sZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwa2cgPSBuZXcgY3NfZnVuZGNoYW5nZV9jbHViKCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3NfZnVuZGNoYW5nZV9jbHViXCI7XG4gICAgICAgIHBrZy5jbHViaWQgPSBpZHg7XG4gICAgICAgIHBrZy50eXBlID0gbV90eXBlOyAvLyAx6L2s5YWlICAgMui9rOWHulxuICAgICAgICBwa2cuZ29sZCA9IG1fZ29sZDtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihwa2csIHRoaXMuc2NfZnVuZGNoYW5nZV9jbHViLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwdWJsaWMgc2NfZnVuZGNoYW5nZV9jbHViKGRhdGE6IHNjX2Z1bmRjaGFuZ2VfY2x1Yikge1xuICAgICAgICBpZiAoIXRoaXMudmlldykgcmV0dXJuO1xuICAgICAgICAvLy0x5Z+66YeR5LiN6LazICAtMuS9memineS4jei2syAgIC0z56S+5Yy65LiN5a2Y5ZyoXG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICAvLyBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLmk43kvZzmiJDlip/vvIFcIik7XG4gICAgICAgICAgICBpZiAodGhpcy52aWV3LmNvbW11bml0eVZpZXcpIHRoaXMudmlldy5jb21tdW5pdHlWaWV3Lm91dEZ1bmRjaGFuZ2VDbHViKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTEpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTEwMDIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMikge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMTAwMykpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0zKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDExMDA0KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoTGFuZ3VhZ2VDb25maWcuZ2V0TGFuZ3VhZ2VCeUlkKDExMDA1KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3NfZXh0ZW5kcmVkaW5mbyhpZHg6IG51bWJlcikge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2V4dGVuZHJlZGluZm8oKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19leHRlbmRyZWRpbmZvXCI7XG4gICAgICAgIHBrZy5pZHggPSBpZHg7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX2V4dGVuZHJlZGluZm8uYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19leHRlbmRyZWRpbmZvKGRhdGE6IHNjX2V4dGVuZHJlZGluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzY19leHRlbmRyZWRpbmZvICA9PT0gXCIsIGRhdGEpO1xuICAgICAgICBpZiAoIXRoaXMudmlldykgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5yZWRwYWNrZXREYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93UmVkUGFja2V0Vmlld0xheWVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTEpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTEwMDEpKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtNCkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMTAwOSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMTAwMSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNzX3JlY2VpdmVleHRlbmRnb2xkKGlkeDogbnVtYmVyLCB1c2VyaWQ6IG51bWJlcikge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX3JlY2VpdmVleHRlbmRnb2xkKCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3NfcmVjZWl2ZWV4dGVuZGdvbGRcIjtcbiAgICAgICAgcGtnLmlkeCA9IGlkeDtcbiAgICAgICAgcGtnLnVzZXJpZCA9IHVzZXJpZDtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTlRpbWVPdXQocGtnLCB0aGlzLnNjX3JlY2VpdmVleHRlbmRnb2xkLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwdWJsaWMgc2NfcmVjZWl2ZWV4dGVuZGdvbGQoZGF0YTogc2NfcmVjZWl2ZWV4dGVuZGdvbGQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXcpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZXcucmVkUGFja2V0Vmlldykge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5yZWRQYWNrZXRWaWV3LnJlY2VpdmVTdWNjZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPSAtMykge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6L+U5Yip5Lu75YuZ5pyq6YGU5qiZXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi6aCY5Y+W5aSx5pWX77yM6KuL6IGv57mr5a6i5pyNXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g6YKu5Lu25raI5oGvXG4gICAgcHVibGljIGNzX2dldGVtYWlsbGlzdChpc1Nob3c6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgcGtnID0gbmV3IGNzX2dldGVtYWlsbGlzdCgpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX2dldGVtYWlsbGlzdFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19nZXRlbWFpbGxpc3QuYmluZCh0aGlzLCBpc1Nob3cpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2dldGVtYWlsbGlzdChpc1Nob3c6IGJvb2xlYW4sIGRhdGE6IHNjX2dldGVtYWlsbGlzdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS1zY19nZXRlbWFpbGxpc3QtLS0tXCIsIGRhdGEpO1xuICAgICAgICBpZiAoIXRoaXMudmlldykgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5lbWFpbEluZm8gPSBkYXRhO1xuICAgICAgICAgICAgaWYgKHRoaXMudmlldy5tZVZpZXcpIHRoaXMudmlldy5tZVZpZXcucmVmcmVzaE1lc3NhZ2VFbWFpbCgpOyAvLyDliLfmlrDnuqLngrnmlbDmja5cbiAgICAgICAgICAgIGlmIChpc1Nob3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc2hvd015SW5mb3JtYXRpb25WaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgLyoqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeeUn+a2ry3otZvkuovmlbDmja4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gICAgLyoq6LWb5LqL5YiX6KGoICovXG4gICAgcHVibGljIGNzX2NvbXBldGVfcmVjb3JkKCkge1xuICAgICAgICBsZXQgZ2V0bGlzdCA9IG5ldyBjc19jb21wZXRlX3JlY29yZCgpO1xuICAgICAgICBnZXRsaXN0LmZuID0gXCJjc19jb21wZXRlX3JlY29yZFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKGdldGxpc3QsIHRoaXMuc2NfY29tcGV0ZV9yZWNvcmQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19jb21wZXRlX3JlY29yZChkYXRhOiBzY19jb21wZXRlX3JlY29yZCkge1xuICAgICAgICBpZiAoIXRoaXMudmlldyB8fCAhdGhpcy52aWV3LmNhcmVlclZpZXcpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5jYXJlZXJWaWV3LnNjX2NvbXBldGVfcmVjb3JkKGRhdGEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKirotZvkuovor6bmg4UgKi9cbiAgICBwdWJsaWMgY3NfY29tcGV0ZV9yZWNvcmRfZGV0YWlsKGNpZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBnZXRsaXN0ID0gbmV3IGNzX2NvbXBldGVfcmVjb3JkX2RldGFpbCgpO1xuICAgICAgICBnZXRsaXN0LmZuID0gXCJjc19jb21wZXRlX3JlY29yZF9kZXRhaWxcIjtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihnZXRsaXN0LCB0aGlzLnNjX2NvbXBldGVfcmVjb3JkX2RldGFpbC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcHVibGljIHNjX2NvbXBldGVfcmVjb3JkX2RldGFpbChkYXRhOiBzY19jb21wZXRlX3JlY29yZF9kZXRhaWwpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpZXcgfHwgIXRoaXMudmlldy5teVNzRGVyYWlsc1ZpZXcpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMudmlldy5teVNzRGVyYWlsc1ZpZXcuc2NfY29tcGV0ZV9yZWNvcmRfZGV0YWlsKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLea4uOaIjy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cbiAgICAvKirlvrflt54gKi9cbiAgICBwdWJsaWMgY3NfZW50ZXJ0YWJsZW51bV90ZXgodGlkOiBzdHJpbmcsIGdpZDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICBsZXQgZGF0YTogY3NfZW50ZXJ0YWJsZW51bV90ZXggPSBuZXcgY3NfZW50ZXJ0YWJsZW51bV90ZXgoKTtcbiAgICAgICAgZGF0YS50bnVtYmVyID0gdGlkO1xuICAgICAgICBkYXRhLl9nID0gZ2lkO1xuICAgICAgICBkYXRhLmZuID0gXCJjc19lbnRlcnRhYmxlbnVtX3RleFwiO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHRoaXMuc2NfZW50ZXJ0YWJsZW51bV90ZXguYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19lbnRlcnRhYmxlbnVtX3RleChkYXRhOiBzY19lbnRlcnRhYmxlbnVtX3RleCkge1xuICAgICAgICAvL+avlOi1m++8jOmcgOimgeWcqOabtOaWsOaVsOaNrueahOaXtuWAmeazqOWGjOa2iOaBr+S6i+S7tlxuICAgICAgICBBcHBDb25zdC5lbnRlclRhYmxlRGF0YSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBBcHBDb25zdC5lbnRlclRhYmxlRGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBkYXRhLmxldmVsaWQgJiYgKEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID0gZGF0YS5sZXZlbGlkKTtcbiAgICAgICAgICAgIEFwcENvbnN0LmN1cnJlbnRHYW1lSWQgPSA1MTtcbiAgICAgICAgICAgIHRoaXMudmlldy5pbnRvVGV4YXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLmuLjmiLLpgLLlhaXlpLHmlZdcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKnNsb3RzIOi/m+WFpea4uOaIjyAqL1xuICAgIHB1YmxpYyBjc19zbG90ZW50ZXJ0YWJsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGxldCBkYXRhID0gbmV3IGNzX3Nsb3RlbnRlcnRhYmxlKCk7XG4gICAgICAgIGRhdGEuX2cgPSBBcHBDb25zdC5jdXJyZW50R2FtZUlkO1xuICAgICAgICBkYXRhLmdhbWVpZCA9IEFwcENvbnN0LmN1cnJlbnRHYW1lSWQ7XG4gICAgICAgIGRhdGEuZm4gPSBcImNzX3Nsb3RlbnRlcnRhYmxlXCI7XG4gICAgICAgIGRhdGEubGV2ZWxpZCA9IEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkO1xuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHRoaXMuc2Nfc2xvdGVudGVydGFibGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19zbG90ZW50ZXJ0YWJsZShkYXRhOiBzY19zbG90ZW50ZXJ0YWJsZSkge1xuICAgICAgICBpZiAodGhpcy5Jc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgdGhpcy52aWV3LmVudGVydGFpbm1lbnRWaWV3LmNoYW5nQ2FuVG91Y2goKTtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIEFwcENvbnN0LmVudGVyVGFibGVEYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMudmlldy5lbnRlcnRhaW5tZW50Vmlldy5qb2luR2FtZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC05OSkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIumHkeW5o+S4jei2s+iri+WFheWAvFwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtODg4OTk5KSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5ri45oiP5pqC5pyq5byA5ZCvXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIua4uOaIsumAsuWFpeWkseaVl1wiICsgZGF0YS5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq54mb5LuUIOivt+axgui/m+WFpeaIv+mXtCAqL1xuICAgIHB1YmxpYyBjc19lbnRlcnRhYmxlX1RleEJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuSXNEZXN0b3J5KSByZXR1cm47XG4gICAgICAgIGxldCBkYXRhID0gbmV3IGNzX2VudGVydGFibGVfVGV4Qm95KCk7XG4gICAgICAgIGRhdGEuZ2FtZWlkID0gQXBwQ29uc3QuY3VycmVudEdhbWVJZDtcbiAgICAgICAgZGF0YS5fZyA9IEFwcENvbnN0LmN1cnJlbnRHYW1lSWQ7XG4gICAgICAgIGRhdGEubGV2ZWxpZCA9IEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkO1xuICAgICAgICBkYXRhLmZuID0gXCJjc19lbnRlcnRhYmxlX1RleEJveVwiO1xuICAgICAgICBkYXRhLnRhYmxlaWQgPSAwO1xuICAgICAgICBkYXRhLl9saW1pdCA9IDA7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZChqc29uLCB0aGlzLnNjX2VudGVydGFibGVfVGV4Qm95LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBwdWJsaWMgc2NfZW50ZXJ0YWJsZV9UZXhCb3koZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5Jc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgdGhpcy52aWV3LmVudGVydGFpbm1lbnRWaWV3LmNoYW5nQ2FuVG91Y2goKTtcbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIEFwcENvbnN0LmVudGVyVGFibGVEYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMudmlldy5lbnRlcnRhaW5tZW50Vmlldy5qb2luR2FtZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC05OSkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIumHkeW5o+S4jei2s+iri+WFheWAvFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLmuLjmiLLpgLLlhaXlpLHmlZdcIiArIGRhdGEucmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBlbnRlcnRhYmxlX0Zpc2goKSB7XG4gICAgICAgIGlmICh0aGlzLklzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnZpZXcuZW50ZXJ0YWlubWVudFZpZXcuam9pbkdhbWUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2Nfc2l0ZG93bl90ZXhfbihkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLk1vZGVsLlRleFNpdGRvd25EYXRhID09IG51bGwpIHRoaXMuTW9kZWwuVGV4U2l0ZG93bkRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5Nb2RlbC5UZXhTaXRkb3duRGF0YS5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY19wdXNoZXZlbnRfbihkYXRhOiBzY19wdXNoZXZlbnRfbikge1xuICAgICAgICBpZiAodGhpcy5Jc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgdGhpcy52aWV3LnNldEZsb3dpbmdSZWFkKHRydWUpO1xuICAgICAgICBpZiAodGhpcy52aWV3Lm15SW5mb3JtYXRpb25WaWV3ICYmIHRoaXMudmlldy5teUluZm9ybWF0aW9uVmlldy5mZ3VpQ29tcG9uZW50LnZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuY3NfZ2V0ZW1haWxsaXN0KHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==
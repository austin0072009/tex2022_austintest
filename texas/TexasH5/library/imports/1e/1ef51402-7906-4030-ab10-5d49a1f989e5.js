"use strict";
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
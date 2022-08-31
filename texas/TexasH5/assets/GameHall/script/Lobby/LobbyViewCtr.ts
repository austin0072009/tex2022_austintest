import { CommonCtr } from "../../../Script/BaseFrame/CommonCtr";
import { sc_commonnotice_n, sc_freshgold_n } from "../../../Script/BaseFrame/cs_base";
import { WebSocketManager } from "../../../Script/BaseFrame/WebSocketManager";
import { BaseFrameNative } from "../../../Script/BaseFrameNative";
import { UIUtil } from "../../../Script/Common/UIUtil";
import { AppConst } from "../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { LoginViewCtr } from "../Login/LoginViewCtr";
import { cs_compete_record, cs_compete_record_detail, sc_compete_record, sc_compete_record_detail } from "./career/CareerNetDataStruct";
import { BroadcastViewCtr } from "./Components/BroadcastViewCtr";
import { LanguageConfig } from "./LanguageConfig";
import LobbyModel from "./LobbyModel";
import { sc_dealgoldtrade_n, cs_gettablelist_tex, sc_gettablelist_tex, sc_getnotice_n, sc_notice_n, cs_searchgoldornickname, sc_searchgoldornickname, cs_personalinfo, sc_personalinfo, cs_changePassword_appbk, sc_changePassword_appbk, cs_enterbank_bk, sc_enterbank_bk, banklog, cs_sendgoldtrade, sc_sendgoldtrade, cs_dealgoldtrade, sc_dealgoldtrade, cs_getbackpacklist, sc_getbackpacklist, cs_useprop, sc_useprop, cs_tasklist, sc_tasklist, cs_mobilephonenum, sc_mobilephonenum, cs_bindalipaybank, sc_bindalipaybank, cs_award, sc_award, cs_getvipconfig, sc_getvipconfig, cs_getuservipinfo, sc_getuservipinfo, cs_receiveupaward, sc_receiveupaward, cs_receivemonthaward, sc_receivemonthaward, cs_getnotice, sc_getnotice, cs_compete_list, sc_compete_list, cs_compete_rank_info, cs_signup, sc_signup, cs_quit, sc_quit, sc_compete_rank_info, cs_getagentinfo, sc_getagentinfo, cs_apply_club, sc_apply_club, cs_getcommision, sc_getcommision, cs_setagent_gm, sc_setagent_gm, cs_fundchange_club, sc_fundchange_club, cs_entertablenum_tex, cs_slotentertable, sc_slotentertable, cs_entertable_TexBoy, sc_pushevent_n, cs_extendredinfo, sc_extendredinfo, cs_receiveextendgold, sc_receiveextendgold, cs_getemaillist, sc_getemaillist, sc_entertablenum_tex, sc_freshplayerInfoSD, cs_freshplayerInfoSD, sc_changePassword_bk, cs_changePassword_bk } from "./LobbyNetData";
import LobbyView from "./LobbyView";

export default class LobbyViewCtr {
    public view: LobbyView = null;
    public model: LobbyModel = null;
    private static _viewCtr: LobbyViewCtr = null;
    static get instance(): LobbyViewCtr {
        if (this._viewCtr == null) {
            this._viewCtr = new LobbyViewCtr();
        }
        return this._viewCtr;
    }

    public get Model(): LobbyModel {
        if (this.model == null) {
            this.model = new LobbyModel();
            this.model.Init();
        }
        return this.model;
    }

    public RegistNotify() {
        console.log("LobbyViewCtr  RegistNotify");
        WebSocketManager.getInstance.UnRegistNotify("sc_getnotice_n");
        WebSocketManager.getInstance.RegistNotify("sc_getnotice_n", this.sc_getnotice_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_notice_n", this.sc_notice_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_commonnotice_n", this.sc_commonnotice_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_freshgold_n", this.sc_freshgold_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_dealgoldtrade_n", this.sc_dealgoldtrade_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_compete_rank_info", this.sc_compete_rank_info.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_entertablenum_tex", this.sc_entertablenum_tex.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_sitdown_tex_n", this.sc_sitdown_tex_n.bind(this));
        WebSocketManager.getInstance.RegistNotify("sc_pushevent_n", this.sc_pushevent_n.bind(this));
    }

    public UnRegistNotify() {
        console.log("LobbyViewCtr  UnRegistNotify");
        // WebSocketManager.getInstance.UnRegistNotify("sc_getnotice_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_notice_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_commonnotice_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_freshgold_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_dealgoldtrade_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_compete_rank_info");
        WebSocketManager.getInstance.UnRegistNotify("sc_entertablenum_tex");
        WebSocketManager.getInstance.UnRegistNotify("sc_sitdown_tex_n");
        WebSocketManager.getInstance.UnRegistNotify("sc_pushevent_n");
    }

    // 公共消息推送
    public sc_commonnotice_n(data: sc_commonnotice_n) {
        console.log("---sc_commonnotice_n---", data);
    }

    // 刷新
    public sc_freshgold_n(data: sc_freshgold_n) {
        console.log("---sc_freshgold_n---", data);
        if (!this.view) return;
        if (data.result == 1) {
            if (data.freshType == 1) {
                // 钻石
            } else if (data.freshType == 2) {
                // 金币
                AppConst.mPlayerModel.gold = data.gold;
                console.log("AppConst.mPlayerModel == ", AppConst.mPlayerModel);
                this.view && this.view.changedGold();
                this.view.meView && this.view.meView.hideGold();
                this.view.withdrawalView && this.view.withdrawalView.updateGold();
                this.cs_getuservipinfo();
            } else if (data.freshType == 3) {
                LoginViewCtr.instance.Model.cidx = data.gold;
                this.cs_getagentinfo_onlyData(LoginViewCtr.instance.Model.cidx);
                this.view && this.view.joinSuccess();
                // CommonCtr.instance.view.ShowTipLabel("加入社区" + data.gold + "申请已通过");
            }
        }
    }

    public sc_dealgoldtrade_n(data: sc_dealgoldtrade_n) {
        // console.log("---sc_dealgoldtrade_n---", data);
        if (!this.view) return;
        let str: string = data.objusername + "赠送" + UIUtil.formatNumber100(data.Gold) + "金币给您";
        CommonCtr.instance.view.ShowTip(str);
        // console.log(AppConst.mPlayerModel.gold);
        // AppConst.mPlayerModel.gold += data.Gold;
        // console.log(AppConst.mPlayerModel.gold);

        // this.view.changedGold();
        // this.view.meView.hideGold();
        // if (this.view.meView) {
        //     this.view.meView.hideGold();
        // }
    }

    /**判断此View是否已经释放 */
    public get IsDestory(): Boolean {
        if (this.view == null || this.view._isDestory) return true;
        return false;
    }

    public cs_gettablelist_tex(gameId: number = 51) {
        if (this.view == null || this.view._isDestory) return;
        let pkg = new cs_gettablelist_tex();
        pkg.clubidx = 0;//LoginViewCtr.instance.Model.cidx;
        pkg._g = gameId;
        pkg.fn = "cs_gettablelist_tex";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_gettablelist_tex.bind(this));
    }

    public sc_gettablelist_tex(data: sc_gettablelist_tex) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            // console.log("----------------", data)
            this.Model.tableList = data.tinfo;
            this.view.handleRoomData();
        }
    }

    /**游戏 跑马灯  */
    public sc_getnotice_n(data: sc_getnotice_n) {
        let target;
        let dey: number = 0;
        if (data.result == 1) {
            if (this.view) {
                // 在大厅
                if (this.view.broadcast) {
                    target = this.view.broadcast;
                }
            } else {
                target = BroadcastViewCtr.instance;
                if (data.gameid == 258) {
                    dey = 6;
                }
            }
            if (!target) return;
            if (dey > 0) {
                data.noticelist.forEach((notice) => {
                    target.addMessage(notice, dey);
                })
            } else {
                data.noticelist.forEach((notice) => {
                    target.addMessage(notice);
                })
            }

        }
    }

    /**大厅跑马灯 */
    public sc_notice_n(data: sc_notice_n) {
        console.log("----sc_notice_n----", data);
        if (data.result == 1) {
            if (this.view && this.view.broadcast) {
                if (data._t == 1) { //滚动公告
                    // this.Model.broadnotice = [data.notice];
                    BaseFrameNative.broadnotice.push(data.notice);
                    this.view.broadcast.addMessage(data.notice.content);
                }
            }
        }
    }

    /**获取用户的金币 */
    public cs_searchgoldornickname(userId: number) {
        if (this.IsDestory) return;
        this.Model.queryUserId = userId;
        let data = new cs_searchgoldornickname();
        data.userid = userId;
        data.fn = "cs_searchgoldornickname";
        WebSocketManager.getInstance.SendJSON(data, this.sc_searchgoldornickname.bind(this));
    }
    public sc_searchgoldornickname(data: sc_searchgoldornickname) {
        if (this.IsDestory) return;
        // cc.log("2-----------------", data);
        if (data.result == 1) {
            if (this.Model.queryUserId == AppConst.mPlayerModel.userid) {
                AppConst.mPlayerModel.gold = data.gold;
                this.view.changedGold();
                if (this.view.meView) {
                    this.view.meView.hideGold();
                }
            } else { //查询名字
                this.view.transferView.showCorrectGreen(true, data.nickname);
            }
        } else {
            if (this.Model.queryUserId != AppConst.mPlayerModel.userid) {
                this.view.transferView.showCorrectGreen(false);
            }
        }
    }
    /**修改头像 昵称 */
    public cs_personalinfo(info) {
        let pkg = new cs_personalinfo();
        pkg.fn = "cs_personalinfo";
        pkg.UserId = info.UserId;
        pkg.HeadIcon = info.HeadIcon;
        pkg.nikename = info.nikename;
        pkg.sex = info.sex;
        pkg.Desc = info.Desc;
        pkg.HeadFrame = info.HeadFrame;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_personalinfo.bind(this));
    }
    public sc_personalinfo(data: sc_personalinfo) {
        console.log("sc_personalinfo ==== ", JSON.stringify(data));
        if (this.IsDestory) return;
        if (data.result == 1) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(10101));
            this.view.myinfoView.handleChanged();
            this.cs_searchgoldornickname(AppConst.mPlayerModel.userid); //会扣除金币 刷新金币
            //this.cs_freshplayerInfoSD();  数据不一致 先注释了
        } else if (data.result == 0) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(10108));
        } else if (data.result == -1) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(10103));
        } else if (data.result == -2) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(10104));
        } else if (data.result == -5) { // 昵称重复
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(10105));
        } else if (data.result == -6) { // 已经是此头像
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(10106));
        } else if (data.result == -7) { // 已经是此头像框
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(10107));
        }
    }

    // 刷新用户信息
    public cs_freshplayerInfoSD() {
        let pkg = new cs_freshplayerInfoSD();
        pkg.fn = "cs_freshplayerInfoSD";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_freshplayerInfoSD.bind(this));
    }
    public sc_freshplayerInfoSD(data: sc_freshplayerInfoSD) {
        cc.log("---sc_freshplayerInfoSD---", data);
        if (this.IsDestory) return; //这条消息的 user 少几个字段 不能覆盖原来的
        AppConst.mPlayerModel.cinfo = data.user.cinfo;
        //if (this.view.myinfoView) this.view.myinfoView.handleChanged();
        if (this.view.careerView) this.view.careerView.loadJCData();
    }

    /**設置支付密碼 */
    public cs_changePassword_appbk(oldPassWord: string, newPassWord: string, inset: boolean = false, isTx = false) {
        let pkg = new cs_changePassword_appbk();
        pkg.fn = "cs_changePassword_appbk";
        pkg.oldPassWord = oldPassWord;
        pkg.newPassWord = newPassWord;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_changePassword_appbk.bind(this, inset, isTx));
    }
    public sc_changePassword_appbk(inset: boolean, isTx: boolean, data: sc_changePassword_appbk) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            if (inset) {
                CommonCtr.instance.view.ShowTipLabel("修改密碼成功");
                this.view.modifyPlayPwdView.Hide();
            } else {
                if (isTx) {
                    this.view.withdrawalView.setPwdSucceed();
                } else {
                    this.view.verificationPwdView.setPwdSucceed();
                }

            }
        } else {
            CommonCtr.instance.view.ShowTipLabel("設置密碼失敗");
        }
    }

    /**验证支付密码*/
    public cs_enterbank_bk(pwd: string, bool: boolean = false) {
        let pkg = new cs_enterbank_bk();
        pkg.fn = "cs_enterbank_bk";
        pkg.pwd = pwd;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_enterbank_bk.bind(this, bool));
    }
    public sc_enterbank_bk(bool: boolean, data: sc_enterbank_bk) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            if (bool) {
                this.view.withdrawalView.verificationPwdSuc();
            } else {
                this.view.verificationPwdView.verificationPwdSucceed();
            }
        } else {
            CommonCtr.instance.view.ShowTipLabel("密码错误");
        }
    }

    /**转账 */
    public cs_sendgoldtrade(objuserid: number, gold: number) {
        let pkg = new cs_sendgoldtrade();
        pkg.fn = "cs_sendgoldtrade";
        pkg.objuserid = objuserid;
        pkg.Gold = gold;
        pkg.IsGet = false;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_sendgoldtrade.bind(this));
    }
    public sc_sendgoldtrade(data: sc_sendgoldtrade) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            this.view.transferView.sendDealgoldtrade();
        } else if (data.result == -7) {
            CommonCtr.instance.view.ShowTipLabel("转账失败,金额必须大于20！");
        } else {
            CommonCtr.instance.view.ShowTipLabel("转账失败" + data.result);
        }
    }

    /**转账确认 */
    public cs_dealgoldtrade(objuserid: number, gold: number, pwd: string) {
        if (this.IsDestory) return;
        let pkg = new cs_dealgoldtrade();
        pkg.fn = "cs_dealgoldtrade";
        pkg.objuserid = objuserid;
        pkg.Gold = gold;
        pkg.bankPassWord = pwd;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_dealgoldtrade.bind(this));
    }
    public sc_dealgoldtrade(data: sc_dealgoldtrade) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            if (this.view.transferView) {
                this.view.transferView.updateGold();
            }
            CommonCtr.instance.view.ShowTipLabel("转账成功");
        } else {
            CommonCtr.instance.view.ShowTipLabel("转账失败" + data.Msg);
        }
    }
    /**获取背包道具列表 */
    public cs_getbackpacklist() {
        let pkg = new cs_getbackpacklist();
        pkg.fn = "cs_getbackpacklist";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_getbackpacklist.bind(this));
    }
    public sc_getbackpacklist(data: sc_getbackpacklist) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            this.Model.bagpackData = data.props;
            this.view.showknapsackView();
        } else {
            CommonCtr.instance.view.ShowTipLabel("暂无数据");
        }
    }

    /** 使用兑换道具*/
    public cs_useprop(PropID: number, PropCount, use: boolean = true) {
        let pkg = new cs_useprop();
        pkg.fn = "cs_useprop";
        pkg.PropID = PropID;
        pkg.PropCount = PropCount;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_useprop.bind(this, use));
    }
    public sc_useprop(use: boolean, data: sc_useprop) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            let propList = this.view.myKnapsackView.listData;
            propList = propList.filter((item) => {
                if (item.PropID == data.PropID) {
                    item.PropCount = data.PropCount;
                }
                return item.PropCount != 0;
            })
            this.view.myKnapsackView.listData = propList;
            AppConst.mPlayerModel.gold = data.UserGold;
            this.view.changedGold();
            this.view.meView.hideGold();
            // this.cs_getbackpacklist();
            // this.cs_searchgoldornickname(AppConst.mPlayerModel.userid);
            let str = '';
            use ? str = `成功兑换${data.PropGold}` : str = `使用成功`;
            CommonCtr.instance.view.ShowTipLabel(str);
            if (!use) {
                LobbyViewCtr.instance.view.meView.setHeadFram();
            }
        } else {
            CommonCtr.instance.view.ShowTipLabel("兑换失败");
        }
    }

    /**获取任务列表 */
    public cs_tasklist() {
        if (this.IsDestory) return;
        let pkg = new cs_tasklist();
        pkg.fn = "cs_tasklist";
        pkg.userId = AppConst.mPlayerModel.userid;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_tasklist.bind(this));
    }
    public sc_tasklist(data: sc_tasklist) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            let task = data.tasklist.sort((a, b) => {
                return a.iscomplate ? -1 : 1;
            });
            task = task.filter((item) => {
                return !(item.isaward && item.iscomplate);
            });
            // task.sort((a, b) => {
            //     return a.taskid - b.taskid;
            // })
            this.Model.tasklist = [];
            //console.log("-----任务----------'", task);
            for (let i = 0; i < task.length; i++) {
                if (!task[i].name) continue;
                if (task[i].name.indexOf("签到") == -1) {
                    this.Model.tasklist.push(task[i]);
                } else {
                    if (task[i].isaward == false && task[i].iscomplate) {
                        this.Model.tasklist.push(task[i]);
                    }
                }
            }
            // this.view.meView.handleFlist();
            this.view.welfareView && this.view.welfareView.handleData();
        } else {
            //  this.Model.tasklist = [];
            // this.view.welfareView && this.view.welfareView.handleData();
            CommonCtr.instance.ShowTipLabel("获取任务列表失败");
        }

    }

    /**获取绑定的银行卡和支付宝 */
    public cs_mobilephonenum() {
        if (this.IsDestory) return;
        let pkg = new cs_mobilephonenum();
        pkg.fn = "cs_mobilephonenum";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_mobilephonenum.bind(this));
    }
    public sc_mobilephonenum(data: sc_mobilephonenum) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            this.Model.mobilephonen = data;
            this.view.withdrawalView.getMobilephonenum();
        } else {
            CommonCtr.instance.ShowTipLabel("数据异常" + data.result);
        }
    }
    /**绑定银行卡 */
    public cs_bindalipaybank(info) {
        if (this.IsDestory) return;
        let pkg = new cs_bindalipaybank();
        pkg.fn = "cs_bindalipaybank";
        pkg.t = info.t;
        pkg.uid = AppConst.mPlayerModel.userid;
        pkg.name = info.name;
        pkg.account = info.account;
        pkg.bank = info.bank;
        pkg.country = info.country;
        pkg.branch = info.branch;
        pkg.pwd = AppConst.mPlayerModel["UserPassword"];
        pkg.province = info.province;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_bindalipaybank.bind(this));
    }
    public sc_bindalipaybank(data: sc_bindalipaybank) {
        // console.log("---sc_bindalipaybank---", data);
        if (!this.view) return;
        if (data.result == 1) {
            CommonCtr.instance.view.ShowTipLabel("绑定成功！");
            this.view.withdrawalView.bindCardSuccess();
        } else {
            CommonCtr.instance.view.ShowTipLabel("绑定失败：" + data.result);
        }
    }

    /**设置初始支付密码 */
    public cs_changePassword_bk(password: string) {
        if (!this.view) return;
        let pkg = new cs_changePassword_bk();
        pkg.fn = "cs_changePassword_bk";
        pkg.newPassWord = password;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_changePassword_bk.bind(this));
    }
    public sc_changePassword_bk(data: sc_changePassword_bk) {
        if (!this.view) return;
        LobbyViewCtr.instance.model.isSetPayPassword = true;
        if (data.result == 1) {
            this.view.setPayPassword.setSuccessfull();
        } else if (data.result == -1) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(12005)); //已经设置过初始密码
        }
    }

    /**领取任务的奖励 */
    public cs_award(taskid: number) {
        if (this.IsDestory) return;
        let pkg = new cs_award();
        pkg.fn = "cs_award";
        pkg.userid = AppConst.mPlayerModel.userid;
        pkg.taskid = taskid;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_award.bind(this, taskid));
    }
    public sc_award(taskid: number, data: sc_award) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            let index;
            for (let i = 0, len = this.Model.tasklist.length; i < len; i++) {
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
            this.cs_searchgoldornickname(AppConst.mPlayerModel.userid);
            CommonCtr.instance.ShowTipLabel("领取成功,請到背包查看獎勵");
        } else {
            CommonCtr.instance.ShowTipLabel("领取失败");
        }
    }

    /**获取VIP配置信息*/
    public cs_getvipconfig() {
        let pkg = new cs_getvipconfig();
        pkg.fn = "cs_getvipconfig";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_getvipconfig.bind(this));
    }
    public sc_getvipconfig(data: sc_getvipconfig) {
        console.log("-----------vip配置-------", data);
        if (this.IsDestory) return;
        if (data.result == 1) {
            this.Model.vipConfig = data.config;
            this.cs_getuservipinfo();
        } else {
            CommonCtr.instance.ShowTipLabel("error" + data.result);
        }
    }
    /**获取玩家VIP信息 */
    public cs_getuservipinfo(isShow: boolean = false) {
        let pkg = new cs_getuservipinfo();
        pkg.fn = "cs_getuservipinfo";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_getuservipinfo.bind(this, isShow));
    }
    public sc_getuservipinfo(isShow: boolean, data: sc_getuservipinfo) {
        console.log("-----sc_getuservipinfo--------", data);
        if (this.IsDestory) return;
        if (data.result == 1) {
            this.Model.vipInfo = data;
            this.view.GetLev(data.currExp);
            if (isShow) {
                this.view.showVipPrivilegeView();
            }
        } else {
            CommonCtr.instance.ShowTipLabel("error" + data.result);
        }
    }
    /**领取晋级奖励 */
    public cs_receiveupaward() {
        if (this.IsDestory) return;
        let pkg = new cs_receiveupaward();
        pkg.fn = "cs_receiveupaward";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_receiveupaward.bind(this));
    }
    public sc_receiveupaward(data: sc_receiveupaward) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            AppConst.mPlayerModel.gold = data.MyScore;
            this.view.changedGold();
            if (this.view.meView) {
                this.view.meView.hideGold();
            }
            this.view.myVipPrivilegeView.setbtnjiniji();
            CommonCtr.instance.ShowTipLabel("晋级奖励领取成功" + data.AwardScore);
            // AwardScore: 10
            // MyScore: 92048187
            // cc: 0
            // fn: "sc_receiveupaward"
            // message: null
            // result: 1
        } else {
            CommonCtr.instance.ShowTipLabel("晋级奖励领取失败");
        }
    }
    /**领取每月奖励 */
    public cs_receivemonthaward() {
        if (this.IsDestory) return;
        let pkg = new cs_receivemonthaward();
        pkg.fn = "cs_receivemonthaward";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_receivemonthaward.bind(this));
    }
    public sc_receivemonthaward(data: sc_receivemonthaward) {
        if (this.IsDestory) return;
        if (data.result == 1) {
            AppConst.mPlayerModel.gold = data.MyScore;
            this.view.changedGold();
            if (this.view.meView) {
                this.view.meView.hideGold();
            }
            this.view.myVipPrivilegeView.setbtnmylj();
            CommonCtr.instance.ShowTipLabel("每月禮金领取成功" + data.AwardScore);
        } else {
            CommonCtr.instance.ShowTipLabel("每月禮金领取失败");
        }
    }

    /**获取公告 */
    public cs_getnotice(type: number) {
        let pkg = new cs_getnotice();
        pkg.fn = "cs_getnotice";
        pkg._t = type;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_getnotice.bind(this, type));
    }
    public sc_getnotice(type: number, data: sc_getnotice) {
        cc.log("=======公告=========", data);
        if (data.result == 1) {
            if (data.noticelist.length <= 0) return;
            if (type == 1) { //滚动
                // this.Model.broadnotice = data.noticelist;
                BaseFrameNative.broadnotice = data.noticelist;
                // let endTime = new Date(data.noticelist[0].endtime).getTime();
                // let startTime = new Date(data.noticelist[0].starttime).getTime();
                // let str = data.noticelist[0].content;
                this.view.broadcast.initNotice(data.noticelist);
            } else if (type == 4) { //弹窗
                this.Model.notice = data.noticelist;
                if (AppConst.currentlevelid === undefined) {
                    this.view.showPopupView();
                }
            }
        }
    }

    /**赛事列表 */
    public cs_compete_list() {
        if (this.IsDestory) return;
        let pkg = new cs_compete_list();
        pkg.fn = "cs_compete_list";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_compete_list.bind(this));
    }
    public sc_compete_list(data: sc_compete_list) {
        if (this.IsDestory) return;
        cc.log("======赛事========", data);
        if (data.result == 1) {
            this.Model.matchData = data.competes;
            this.view.matchView.handleMatchListData();
        }
    }
    /**获取赛事玩家排名 */
    public cs_compete_rank_info(competeid: number) {
        let pkg = new cs_compete_rank_info();
        pkg.fn = "cs_compete_rank_info";
        pkg.userid = AppConst.mPlayerModel.userid;
        pkg.competeid = competeid;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_compete_rank_info.bind(this));
    }


    /**报名比赛 */
    public cs_signup(competeid: number) {
        let pkg = new cs_signup();
        pkg.fn = "cs_signup";
        pkg.userid = AppConst.mPlayerModel.userid;
        pkg.competeid = competeid;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_signup.bind(this, competeid));
    }
    public sc_signup(competeid: number, data: sc_signup) {
        if (this.IsDestory) return;
        cc.log("-------报名比赛--------", data);
        if (data.result == 1) {
            for (let i = 0; i < this.Model.matchData.length; i++) {
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

            CommonCtr.instance.view.ShowTipLabel("报名成功");
        } else {
            CommonCtr.instance.view.ShowTipLabel(data.message);
        }

    }

    /**退赛 */
    public cs_quit(competeid: number) {
        let pkg = new cs_quit();
        pkg.fn = "cs_quit";
        pkg.userid = AppConst.mPlayerModel.userid;
        pkg.competeid = competeid;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_quit.bind(this, competeid));
    }
    public sc_quit(competeid: number, data: sc_quit) {
        if (this.IsDestory) return;
        cc.log("==========退出比赛=========", data);
        if (data.result == 1) {
            for (let i = 0; i < this.Model.matchData.length; i++) {
                if (this.Model.matchData[i].competeid == competeid) {
                    this.Model.matchData[i].signupcount -= 1;
                    this.Model.matchData[i].IsSignup = false;
                    break;
                }
            }
            this.view.matchView.handleMatchListData();
            // this.cs_compete_rank_info(competeid);
            let index = -1;
            for (let i = 0; i < this.Model.matchRank[competeid].length; i++) {
                if (this.Model.matchRank[competeid][i].playerid == AppConst.mPlayerModel.userid) {
                    index = i;
                    break;
                }
            }
            if (index >= 0) {
                this.Model.matchRank[competeid].splice(index, 1);
            }
            this.view.matchDerailsView && this.view.matchDerailsView.handleRank();

            CommonCtr.instance.view.ShowTipLabel("退賽成功");
        } else {
            CommonCtr.instance.view.ShowTipLabel(data.message);
        }
    }

    /**推送的排名 */
    public sc_compete_rank_info(data: sc_compete_rank_info) {
        cc.log("===========推送的排名===-------------", data);
        if (this.IsDestory) return;
        if (data.result == 1 && data.infos.length > 0) {
            this.Model.matchRank[data.competeid] = data.infos;
            this.view.matchDerailsView && this.view.matchDerailsView.handleRank();

            for (let i = 0; i < this.Model.matchData.length; i++) {
                if (this.Model.matchData[i].competeid == data.competeid) {
                    this.Model.matchData[i].signupcount = data.infos.length;
                    break;
                }
            }
            this.view.matchView.handleMatchListData();
            this.view.matchDerailsView && this.view.matchDerailsView.updatePlayNum();
        }
    }



    /*获取代理信息 只保留数据*/
    public cs_getagentinfo_onlyData(idx: number) {
        let pkg = new cs_getagentinfo();
        pkg.fn = "cs_getagentinfo";
        pkg.idx = LoginViewCtr.instance.Model.cidx;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_getagentinfo_onlyData.bind(this));
    }
    public sc_getagentinfo_onlyData(data: sc_getagentinfo) {
        console.log("---sc_getagentinfo---", data);
        if (!this.view) return;
        if (data.result == 1) {
            this.Model.ageninfo = data;
        } else {
            CommonCtr.instance.view.ShowTipLabel("获取社区信息失败:" + data.result);
        }
    }

    /*获取代理信息*/
    public cs_getagentinfo(idx: number) {
        let pkg = new cs_getagentinfo();
        pkg.fn = "cs_getagentinfo";
        pkg.idx = LoginViewCtr.instance.Model.cidx;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_getagentinfo.bind(this));
    }
    public sc_getagentinfo(data: sc_getagentinfo) {
        console.log("---sc_getagentinfo---", data);
        if (!this.view) return;
        if (data.result == 1) {
            this.Model.ageninfo = data;
            this.view.showcommunityView();
        } else {
            CommonCtr.instance.view.ShowTipLabel("获取社区信息失败:" + data.result);
        }
    }

    //申请加入指定俱乐部
    public cs_apply_club(idx: number, message: string) {
        let pkg = new cs_apply_club();
        pkg.fn = "cs_apply_club";
        pkg.idx = idx;
        pkg.message = message;
        pkg.type = 1;

        WebSocketManager.getInstance.SendJSON(pkg, this.sc_apply_club.bind(this));
    }
    public sc_apply_club(data: sc_apply_club) {
        if (!this.view) return;
        if (data.result == 1) {
            CommonCtr.instance.view.ShowTipLabel("申请成功");
            // if (this.view.communityView) {
            //     this.view.communityView.applyClubSuccess();
            // }
            if (this.view.isHallJoin) {
                this.view.joinSuccess();
            } else {
                this.cs_getagentinfo(LoginViewCtr.instance.Model.cidx);
            }
        }
        else if (data.result == -2) {
            CommonCtr.instance.view.ShowTipLabel("已经在社区，请不要重复申请");
        }
        else if (data.result == -3 || data.result == -10) {
            CommonCtr.instance.view.ShowTipLabel("已提交申请，不能重复提交");
        }
        else if (data.result == -11) {
            CommonCtr.instance.view.ShowTipLabel("社区邀请码不存在");
        }
        else {
            CommonCtr.instance.view.ShowTipLabel("加入社区失败");
        }
    }

    /// <summary>
    /// 领取佣金
    /// </summary>
    public cs_getcommision(gold: number, clubid: number) {
        let pkg = new cs_getcommision();
        pkg.fn = "cs_getcommision";
        pkg.gold = gold;
        pkg.clubid = clubid;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_getcommision.bind(this));
    }
    public sc_getcommision(data: sc_getcommision) {
        // console.log("---sc_getcommision---", data);
        if (!this.view) return;
        if (data.result == 1) {
            CommonCtr.instance.view.ShowTipLabel("领取成功");
            this.view.communityView.getcommisionSuccess();
        } else if (data.result == -1) {
            CommonCtr.instance.view.ShowTipLabel("不是代理，没有领取权限");
        } else {
            CommonCtr.instance.view.ShowTipLabel("sc_getcommision error : " + data.result);
        }
    }

    /** 修改代理比例 */
    public cs_setagent_gm(idx: number, userId: number, showrate: number) {
        let pkg = new cs_setagent_gm();
        pkg.fn = "cs_setagent_gm";
        pkg.clubid = idx;
        pkg.userId = userId;
        pkg.showrate = showrate;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_setagent_gm.bind(this));
    }
    public sc_setagent_gm(data: sc_setagent_gm) {
        if (!this.view) return;
        if (data.result == 1) {
            CommonCtr.instance.view.ShowTipLabel("设置成功！");
            this.view.communityView.setAgentLevelSuccess();
        } else if (data.result == -1) {
            CommonCtr.instance.view.ShowTipLabel("代理数据有误");
        } else if (data.result == -2) {
            CommonCtr.instance.view.ShowTipLabel("设置代理最大反利必须比自己的小");
        } else if (data.result == -3) {
            CommonCtr.instance.view.ShowTipLabel("只能给自己直接下级设置");
        } else {
            CommonCtr.instance.view.ShowTipLabel("sc_setagent_gm error : " + data.result);
        }
    }


    // 基金转入转出
    public cs_fundchange_club(idx: number, m_type: number, m_gold: number) {
        let pkg = new cs_fundchange_club();
        pkg.fn = "cs_fundchange_club";
        pkg.clubid = idx;
        pkg.type = m_type; // 1转入   2转出
        pkg.gold = m_gold;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_fundchange_club.bind(this));
    }
    public sc_fundchange_club(data: sc_fundchange_club) {
        if (!this.view) return;
        //-1基金不足  -2余额不足   -3社区不存在
        if (data.result == 1) {
            // CommonCtr.instance.view.ShowTipLabel("操作成功！");
            if (this.view.communityView) this.view.communityView.outFundchangeClub();
        } else if (data.result == -1) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11002));
        } else if (data.result == -2) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11003));
        } else if (data.result == -3) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11004));
        } else {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11005));
        }
    }

    public cs_extendredinfo(idx: number) {
        let pkg = new cs_extendredinfo();
        pkg.fn = "cs_extendredinfo";
        pkg.idx = idx;
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_extendredinfo.bind(this));
    }
    public sc_extendredinfo(data: sc_extendredinfo) {
        console.log("sc_extendredinfo  === ", data);
        if (!this.view) return;
        if (data.result == 1) {
            this.Model.redpacketData = data;
            this.view.showRedPacketViewLayer();
        } else if (data.result == -1) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11001));
        } else if (data.result == -4) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11009));
        } else {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(11001));
        }
    }

    public cs_receiveextendgold(idx: number, userid: number) {
        let pkg = new cs_receiveextendgold();
        pkg.fn = "cs_receiveextendgold";
        pkg.idx = idx;
        pkg.userid = userid;
        WebSocketManager.getInstance.SendJSONTimeOut(pkg, this.sc_receiveextendgold.bind(this));
    }
    public sc_receiveextendgold(data: sc_receiveextendgold) {
        if (!this.view) return;
        if (data.result == 1) {
            if (this.view.redPacketView) {
                this.view.redPacketView.receiveSuccess();
            }
        } else if (data.result = -3) {
            CommonCtr.instance.view.ShowTipLabel("返利任務未達標");
        } else {
            CommonCtr.instance.view.ShowTipLabel("領取失敗，請聯繫客服");
        }
    }

    // 邮件消息
    public cs_getemaillist(isShow: boolean = false) {
        let pkg = new cs_getemaillist();
        pkg.fn = "cs_getemaillist";
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_getemaillist.bind(this, isShow));
    }
    public sc_getemaillist(isShow: boolean, data: sc_getemaillist) {
        console.log("----sc_getemaillist----", data);
        if (!this.view) return;
        if (data.result == 1) {
            this.Model.emailInfo = data;
            if (this.view.meView) this.view.meView.refreshMessageEmail(); // 刷新红点数据
            if (isShow) {
                this.view.showMyInformationView();
            }
        }
    }



    /**-------------------------生涯-赛事数据---------------------- */
    /**赛事列表 */
    public cs_compete_record() {
        let getlist = new cs_compete_record();
        getlist.fn = "cs_compete_record";
        WebSocketManager.getInstance.SendJSON(getlist, this.sc_compete_record.bind(this));
    }
    public sc_compete_record(data: sc_compete_record) {
        if (!this.view || !this.view.careerView) return;
        if (data.result == 1) {
            this.view.careerView.sc_compete_record(data);
        }

    }

    /**赛事详情 */
    public cs_compete_record_detail(cid: number) {
        let getlist = new cs_compete_record_detail();
        getlist.fn = "cs_compete_record_detail";
        WebSocketManager.getInstance.SendJSON(getlist, this.sc_compete_record_detail.bind(this));
    }
    public sc_compete_record_detail(data: sc_compete_record_detail) {
        if (!this.view || !this.view.mySsDerailsView) return;
        if (data.result == 1) {
            this.view.mySsDerailsView.sc_compete_record_detail(data);
        }
    }

    /**----------------------------游戏--------------------------------------------- */


    /**德州 */
    public cs_entertablenum_tex(tid: string, gid: number) {
        if (this.IsDestory) return;
        let data: cs_entertablenum_tex = new cs_entertablenum_tex();
        data.tnumber = tid;
        data._g = gid;
        data.fn = "cs_entertablenum_tex";
        WebSocketManager.getInstance.Send(JSON.stringify(data), this.sc_entertablenum_tex.bind(this));
    }
    public sc_entertablenum_tex(data: sc_entertablenum_tex) {
        //比赛，需要在更新数据的时候注册消息事件
        AppConst.enterTableData = data;

        if (this.IsDestory) return;
        if (data.result == 1) {
            AppConst.enterTableData = data;
            data.levelid && (AppConst.currentlevelid = data.levelid);
            AppConst.currentGameId = 51;
            this.view.intoTexas();
        } else {
            CommonCtr.instance.ShowTipLabel("游戲進入失敗" + data.result);
        }
    }

    /**slots 进入游戏 */
    public cs_slotentertable() {
        if (this.IsDestory) return;
        let data = new cs_slotentertable();
        data._g = AppConst.currentGameId;
        data.gameid = AppConst.currentGameId;
        data.fn = "cs_slotentertable";
        data.levelid = AppConst.currentlevelid;
        WebSocketManager.getInstance.Send(JSON.stringify(data), this.sc_slotentertable.bind(this));
    }
    public sc_slotentertable(data: sc_slotentertable) {
        if (this.IsDestory) return;
        this.view.entertainmentView.changCanTouch();
        if (data.result == 1) {
            AppConst.enterTableData = data;
            this.view.entertainmentView.joinGame();
        } else if (data.result == -99) {
            CommonCtr.instance.ShowTipLabel("金幣不足請充值");
        } else if (data.result == -888999) {
            CommonCtr.instance.ShowTipLabel("游戏暂未开启");
        } else {
            CommonCtr.instance.ShowTipLabel("游戲進入失敗" + data.result);
        }
    }

    /**牛仔 请求进入房间 */
    public cs_entertable_TexBoy() {
        if (this.IsDestory) return;
        let data = new cs_entertable_TexBoy();
        data.gameid = AppConst.currentGameId;
        data._g = AppConst.currentGameId;
        data.levelid = AppConst.currentlevelid;
        data.fn = "cs_entertable_TexBoy";
        data.tableid = 0;
        data._limit = 0;
        let json = JSON.stringify(data);
        WebSocketManager.getInstance.Send(json, this.sc_entertable_TexBoy.bind(this));
    }
    public sc_entertable_TexBoy(data) {
        if (this.IsDestory) return;
        this.view.entertainmentView.changCanTouch();
        if (data.result == 1) {
            AppConst.enterTableData = data;
            this.view.entertainmentView.joinGame();
        } else if (data.result == -99) {
            CommonCtr.instance.ShowTipLabel("金幣不足請充值");
        } else {
            CommonCtr.instance.ShowTipLabel("游戲進入失敗" + data.result);
        }
    }

    public entertable_Fish() {
        if (this.IsDestory) return;
        this.view.entertainmentView.joinGame();
    }

    public sc_sitdown_tex_n(data) {
        if (this.Model.TexSitdownData == null) this.Model.TexSitdownData = [];
        this.Model.TexSitdownData.push(data);
    }

    public sc_pushevent_n(data: sc_pushevent_n) {
        if (this.IsDestory) return;
        this.view.setFlowingRead(true);
        if (this.view.myInformationView && this.view.myInformationView.fguiComponent.visible) {
            this.cs_getemaillist(true);
        }
    }
}
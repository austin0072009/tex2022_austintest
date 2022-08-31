"use strict";
cc._RF.push(module, 'c4f3ckcgp1IPInuuVFfbfen', 'UserInfoComp');
// Games/texas/script/View/UserInfoComp.ts

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
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var Texas_1 = require("../Model/Texas");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var TexasGiftItem_1 = require("./TexasGiftItem");
var UserInfoComp = /** @class */ (function (_super) {
    __extends(UserInfoComp, _super);
    function UserInfoComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_give_btn = null;
        _this.ui_UserHead = null;
        _this.headImage = null;
        _this.ui_VIPFrame = null;
        _this.ui_txtName = null; //EmojiText
        _this.ui_txtUserId = null; //EmojiText
        // public ui_txtCommentDesc:fgui.GTextField = null;
        _this.ui_playbackBg = null;
        _this.ui_txtPlayback = null;
        _this.ui_txtMute = null;
        _this.ui_ImageMute = null;
        _this.ui_ImageComment = null;
        // public ui_txtComment:fgui.GTextField = null; //备注
        _this.ui_txtTotalPaiju = null;
        _this.ui_txtTotalCount = null;
        _this.ui_txtWinRate = null;
        _this.ui_txtOpenRate = null;
        // public ui_txtWinCount:fgui.GTextField = null;
        // public ui_txtFailCount:fgui.GTextField = null;
        // public ui_txtDrawCount:fgui.GTextField = null;
        // public ui_imgWinRate:fgui.GLoader = null;
        // public ui_imgOpenRate:fgui.GLoader = null;
        _this.ui_btnClose_userInfo = null;
        _this.ui_ListChatEmoj = null;
        // public ui_chatEmojCell: fgui.GButton = null;
        _this.ui_inputText = null;
        _this.ui_txtTitle = null;
        _this.ui_playbackTxt = null;
        // public ui_beizhu_Ph:fgui.GTextField = null;
        _this.ui_give_txt = null;
        // public ui_zhankuangTxt:fgui.GTextField = null;
        _this.ui_pjzsTxt = null;
        _this.ui_zssTxt = null;
        _this.ui_winRateTxt = null;
        _this.ui_rclTxt = null;
        // public ui_zsTitle:fgui.GTextField = null;
        _this.ui_tick_btn = null;
        _this.ui_forceSitUp_btn = null;
        _this.ui_tick_Text = null;
        _this.ui_forceSitUp_Text = null;
        // public ui_RemarkPanel:fgui.GComponent = null;
        // public ui_mark_Text:fgui.GTextField = null;
        // public ui_remarkNameNum:fgui.GTextField = null;
        // public ui_remarkName_InputField:fgui.GTextInput = null;
        // public ui_re_EmojiText:fgui.GTextField = null;
        // public ui_dafa_Text:fgui.GTextField = null;
        // public ui_signNum:fgui.GTextField = null;
        // public ui_sign_InputField:fgui.GTextInput = null;
        // public ui_si_EmojiText:fgui.GTextField = null;
        // public ui_submit_Btn:fgui.GButton = null;
        // public ui_sunmit_Text:fgui.GTextField = null;
        // public ui_Closeremark_Btn:fgui.GButton = null;
        _this.ui_remark_btn = null;
        _this.ui_btnEmoji1 = null;
        _this.ui_btnEmoji2 = null;
        _this.ui_btnEmoji3 = null;
        //举报相关
        _this.ui_userJubao = null; //举报
        _this.ui_jubaoPanel = null; //举报界面
        _this.ui_btnjb_Close = null;
        _this.ui_jb_UserHead = null;
        _this.jb_headImage = null;
        _this.ui_jb_txtName = null;
        _this.ui_jb_txtUserID = null;
        _this.ui_jb_inputType = null; //举报标题
        _this.ui_jb_inputContent = null; //举报内容
        _this.ui_btnJubaoOK = null;
        _this.ui_btnJubaoClose = null;
        _this.ui_jb_TxtNum = null;
        _this.onLoadEnd = false;
        _this.userPos = 0;
        _this.headIcon = null;
        return _this;
    }
    /// <summary>
    /// 初始化
    /// </summary>
    UserInfoComp.prototype.MyStart = function (u, serverPos) {
        if (u === void 0) { u = null; }
        if (serverPos === void 0) { serverPos = null; }
        this.mystart = true;
        this.u = u;
        this.userPos = serverPos;
        if (this.onLoadEnd) {
            this.MyStartEx();
        }
    };
    UserInfoComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart) {
            this.MyStartEx();
        }
    };
    UserInfoComp.prototype.AutoSetGoProperty = function () { };
    UserInfoComp.prototype.MyStartEx = function () {
        if (this.ui_give_btn == null) {
            _super.prototype.AutoSetGoProperty.call(this);
            this.InitEvents();
            this.InitUIChatEmoj();
        }
        this.isTexas = F_TexasViewCtr_1.default.instance.Model.gameid == 51;
        this.InitLanguage();
        this.Hide();
        if (this.u != null)
            this.show(this.u, this.userPos);
    };
    UserInfoComp.prototype.Hide = function () {
        this.node.active = false;
        _super.prototype.Hide.call(this);
    };
    UserInfoComp.prototype.InitLanguage = function () {
        // this.ui_txtTitle.text = "玩家信息";
        // this.ui_playbackTxt.text = "回放";
        // this.ui_beizhu_Ph.text = "备注名和打法标记";
        this.ui_give_txt.text = "赠  送";
        // this.ui_zhankuangTxt.text = "个人战况";
        this.ui_pjzsTxt.text = "牌局总数";
        this.ui_zssTxt.text = "总手数";
        this.ui_winRateTxt.text = "胜率";
        this.ui_rclTxt.text = this.isTexas ? "入池率" : "翻牌率"; //入池率 翻牌率
        // this.ui_zsTitle.text = "赠  送";
        this.ui_tick_Text.text = "踢出牌局";
        this.ui_forceSitUp_Text.text = "强制站起";
        // this.ui_mark_Text.text = "备注名";
        // this.ui_dafa_Text.text = "打法标记";
        // this.ui_sunmit_Text.text = "保存";
        // this.ui_remarkName_InputField.promptText = "请输入备注名";
        // this.ui_sign_InputField.promptText = "请输入打法标记";
        this.headImage = this.ui_UserHead.getChild("headImage").asLoader;
        this.jb_headImage = this.ui_jb_UserHead.getChild("headImage").asLoader;
    };
    UserInfoComp.prototype.InitEvents = function () {
        var _this = this;
        this.ui_playbackBg.onClick(function () {
            //Debug.LogError("回放");
            if (_this.userPos <= 0)
                return;
            var tempAudio = null;
            if (_this.isTexas) {
                var user = F_TexasViewCtr_1.default.instance.view._bftable.GetUserByPos(_this.userPos);
                if (user.self) {
                    // tempAudio = Common_SecCtr.instance.Model.selfAudio;ImageComment
                }
                else {
                    tempAudio = user != null ? user.tempAudio : null;
                }
            }
            else {
                // WhirlUserComp user = F_WhirlViewCtr.instance.view._bftable.GetUserByPos (this.userPos);
                // if (user.self) {
                //     tempAudio = Common_SecCtr.instance.Model.selfAudio;
                // } else {
                //     tempAudio = user != null ? user.tempAudio : null;
                // }
            }
            if (tempAudio == null) {
                // CommonCtr.instance.ShowTipLabel (LanguageConfig.getLanguageById(1614), true);//
            }
            else {
                // AudioManager.Singleton.playChatVoice (tempAudio, -1);
            }
        });
        this.ui_ImageMute.onClick(function () {
            //Debug.LogError("静音");
            if (_this.u != null && (_this.isTexas ? F_TexasViewCtr_1.default.instance.Model.GetUserIsMute(_this.u.userid) : F_TexasViewCtr_1.default.instance.Model.GetUserIsMute(_this.u.userid))) {
                _this.EnableMuteUser(false);
            }
            else {
                _this.EnableMuteUser(true);
            }
        });
        this.ui_ImageComment.onClick(function () {
            if (_this.u.userid == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid)
                return;
            // this.ShowRemarkPanel();
            _this.ui_inputText.requestFocus();
        });
        // this.ui_remark_btn.onClick(() => {
        //     if (this.u.userid == F_TexasViewCtr.instance.Model.mPlayerModel.userid) return;
        //     this.ShowRemarkPanel();
        // });
        this.ui_remark_btn.onClick(function () {
            if (_this.u.userid == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid)
                return;
            _this.ShowRemarkPanel();
        });
        // this.ui_Closeremark_Btn.onClick(() => {
        //     this.ui_RemarkPanel.visible = false;
        // });
        this.ui_inputText.on(fgui.Event.TEXT_CHANGE, function () {
            if (_this.ui_inputText.text.trim().length == 0)
                return;
            // {
            //     F_TexasViewCtr.instance.view.tipView.ShowTipLabel("备注失败，内容为空");
            // }
            F_TexasViewCtr_1.default.instance.cs_userremark_tex(_this.u.userid, "", _this.ui_inputText.text);
        });
        this.ui_btnClose_userInfo.onClick(function () {
            _this.Hide();
        });
        // this.ui_remarkName_InputField.maxLength = 0;
        var events = [];
        var ev = new cc.Component.EventHandler();
        // ev.target = this.ui_remarkName_InputField.node;
        ev.handler = "SetRemarkName";
        ev.component = this.fguiComponent.name;
        events.push(ev);
        // this.ui_remarkName_InputField._editBox.textChanged = events;//.emitEvents(this.SetRemarkName);
        // this.ui_sign_InputField.maxLength = 0;
        var events2 = [];
        var ev2 = new cc.Component.EventHandler();
        // ev2.target = this.ui_remarkName_InputField.node;
        // ev2.handler = "SetRemarkDafa";
        // ev2.component = this.fguiComponent.name;
        // events2.push(ev2);
        // this.ui_sign_InputField._editBox.textChanged = events2; //(this.SetRemarkDafa);
        this.ui_give_btn.visible = false;
        this.ui_tick_btn.onClick(function () {
            _this.Hide();
            F_TexasViewCtr_1.default.instance.cs_tickuser_tex(_this.u.userid, 2);
        });
        this.ui_forceSitUp_btn.onClick(function () {
            _this.Hide();
            F_TexasViewCtr_1.default.instance.cs_tickuser_tex(_this.u.userid, 1);
        });
        this.ui_btnEmoji1.getController("isOn").setSelectedIndex(1);
        this.ui_btnEmoji1.onClick(function () {
            _this.ui_btnEmoji1.getController("isOn").setSelectedIndex(1);
            _this.ui_btnEmoji2.getController("isOn").setSelectedIndex(0);
            _this.ui_btnEmoji3.getController("isOn").setSelectedIndex(0);
        });
        this.ui_btnEmoji2.onClick(function () {
            _this.ui_btnEmoji1.getController("isOn").setSelectedIndex(0);
            _this.ui_btnEmoji2.getController("isOn").setSelectedIndex(1);
            _this.ui_btnEmoji3.getController("isOn").setSelectedIndex(0);
        });
        this.ui_btnEmoji3.onClick(function () {
            _this.ui_btnEmoji1.getController("isOn").setSelectedIndex(0);
            _this.ui_btnEmoji2.getController("isOn").setSelectedIndex(0);
            _this.ui_btnEmoji3.getController("isOn").setSelectedIndex(1);
        });
        this.ui_userJubao.onClick(function () {
            _this.ShowJubaoPanel();
        });
        this.ui_btnjb_Close.onClick(function () {
            _this.ui_jubaoPanel.visible = false;
        });
        this.ui_btnJubaoOK.onClick(function () {
            F_TexasViewCtr_1.default.instance.Model.jubaoType = 0;
            var title = _this.ui_jb_inputType.text;
            var content = _this.ui_jb_inputContent.text;
            if (title.trim() == "" || content.trim() == "") {
                F_TexasViewCtr_1.default.instance.view.tipView.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(180017)); //举报标题和内容不能为空 
                return;
            }
            F_TexasViewCtr_1.default.instance.view.tipView.ShowTip("您将" + TexasLanguage_1.TexasLanguage.getLanguageById(2092) + _this.getJubaoGold() + TexasLanguage_1.TexasLanguage.getLanguageById(180029) + ",是否" + TexasLanguage_1.TexasLanguage.getLanguageById(180019) + "？", function () {
                // F_TexasViewCtr.instance.cs_gamereport_tex(this.getJubaoGold());
                _this.PostReportPra();
                _this.ui_jubaoPanel.visible = false;
            }, function () {
            }, TexasLanguage_1.TexasLanguage.getLanguageById(180019), TexasLanguage_1.TexasLanguage.getLanguageById(1393)); //"举报" ,取消
        });
        this.ui_btnJubaoClose.onClick(function () {
            _this.ui_jubaoPanel.visible = false;
        });
    };
    UserInfoComp.prototype.SetRemarkName = function (str) {
        console.log("SetRemarkName - 输入文本：" + str);
        str = this.getNickNameSub(str, 16);
        var arr = this.strLength(str);
        // this.ui_remarkName_InputField.text = this.ui_re_EmojiText.text = str;
        // this.ui_remarkNameNum.text = `(${arr}/16)`;
    };
    UserInfoComp.prototype.SetRemarkDafa = function (str) {
        console.log("SetRemarkDafa - 输入文本：" + str);
        str = this.getNickNameSub(str, 40);
        var arr = this.strLength(str);
        // this.ui_sign_InputField.text = this.ui_si_EmojiText.text = str;
        // this.ui_signNum.text = `(${arr}/40)`;
    };
    UserInfoComp.prototype.EnableMuteUser = function (isMute) {
        if (this.isTexas)
            F_TexasViewCtr_1.default.instance.Model.EnableMuteUser(this.u.userid, isMute);
        else
            F_TexasViewCtr_1.default.instance.Model.EnableMuteUser(this.u.userid, isMute);
        // let txt:UIGradient = this.ui_txtMute.gameObject.getOrAddComponent<UIGradient> ();
        if (this.ui_txtMute)
            this.ui_txtMute.visible = isMute;
        if (this.ui_ImageMute)
            this.ui_ImageMute.getChild("Image").asLoader.url = "ui://texas/" + (isMute ? "jingyin" : "dakaishengyin"); //Res.Singleton.SetImageSprite (ui_ImageMute, "whirl_userInfo", isMute ? "jingyin" : "dakaishengyin");
    };
    UserInfoComp.prototype.show = function (u, serverPos) {
        this.node.active = true;
        _super.prototype.Show.call(this);
        this.userPos = serverPos;
        this.UpdateData(u);
    };
    UserInfoComp.prototype.updateInfo = function (u, serverPos) {
        this.userPos = serverPos;
        this.UpdateData(u);
    };
    UserInfoComp.prototype.UpdateData = function (u) {
        this.u = u;
        if (this.u == null) {
            return;
        }
        if (this.isTexas) {
            this.EnableMuteUser(F_TexasViewCtr_1.default.instance.Model.GetUserIsMute(this.u.userid));
            this.ui_tick_btn.visible = (u.userid != F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid && F_TexasViewCtr_1.default.instance.Model.ownnerid == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid);
            this.ui_forceSitUp_btn.visible = (this.ui_tick_btn.visible);
        }
        else {
            this.EnableMuteUser(F_TexasViewCtr_1.default.instance.Model.GetUserIsMute(u.userid));
        }
        var allCount = u.cinfo.winc + u.cinfo.failc + u.cinfo.dc;
        var winRate = allCount > 0 ? u.cinfo.winc / allCount : 0.00;
        //点击旁观玩头像
        if (this.userPos <= 0) {
            this.ui_tick_btn.visible = false;
            this.ui_forceSitUp_btn.visible = false;
        }
        UIUtil_1.UIUtil.ImageGreyToggle(this.ui_playbackBg, this.userPos <= 0);
        if (u.uremark != null && u.uremark.remarkName != "") {
            this.ui_jb_txtName.text = u.uremark.remarkName;
            this.ui_txtName.text = u.uremark.remarkName;
            this.ui_txtUserId.text = "ID: " + u.userid + "  昵称:" + u._n;
            this.ui_jb_txtUserID.text = u.userid + "";
        }
        else {
            this.ui_jb_txtName.text = u._n;
            this.ui_txtName.text = u._n;
            this.ui_txtUserId.text = "ID: " + u.userid;
            this.ui_jb_txtUserID.text = u.userid + "";
        }
        if (u.uremark != null && u.uremark.playRemark != "" && u.userid != F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid) {
            this.SetUserComment(u.uremark.playRemark);
        }
        else {
            this.SetUserComment("");
        }
        this.ui_txtTotalCount.text = (u.cinfo.winc + u.cinfo.failc + u.cinfo.dc).toString();
        // this.ui_imgWinRate.fillAmount = winRate;
        // this.ui_imgOpenRate.fillAmount = allCount <= 0 ? 0.00 :  u.cinfo.fr / allCount;
        this.ui_txtWinRate.text = (winRate * 100).toFixed(2) + "%";
        if (allCount <= 0) {
            this.ui_txtOpenRate.text = "0%";
        }
        else {
            this.ui_txtOpenRate.text = (u.cinfo.fr / allCount * 100.0).toFixed(2) + "%";
        }
        this.ui_txtTotalPaiju.text = u.cinfo.tablenum.toString();
        // this.ui_txtWinCount.text = "获胜:[color=#ffffff]" + u.cinfo.winc.toString () + "[/color]";//获胜
        // this.ui_txtFailCount.text = "失败:[color=#ffffff]" + u.cinfo.failc.toString () + "[/color]";//失败
        // this.ui_txtDrawCount.text = "平局:[color=#ffffff]" + u.cinfo.dc.toString () + "[/color]";//平局
        this.headIcon = u.wechat.wicon;
        UIUtil_1.UIUtil.loadImage(this.headImage, this.headIcon);
        UIUtil_1.UIUtil.loadImage(this.ui_VIPFrame, "VIP" + this.u._vlv, "Texas");
        UIUtil_1.UIUtil.loadImage(this.jb_headImage, this.headIcon);
        // UIUtil.SetHeadImagURL (ui_headImage, headIcon, false, (id) => {
        //     return headIcon == id;
        // }, true);
        this.ui_remark_btn.visible = (u.userid != F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid);
        // this.ui_txtComment.visible =(u.userid != F_TexasViewCtr.instance.Model.mPlayerModel.userid);
        if (u.userid == F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid) {
            this.ui_inputText.enabled = false;
        }
        else {
            this.ui_inputText.enabled = true;
        }
        this.ui_userJubao.visible = this.u.userid != F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid;
    };
    UserInfoComp.prototype.ShowRemarkPanel = function () {
        // this.ui_RemarkPanel.visible = true;
        if (this.u.uremark != null && this.u.uremark.remarkName != "") {
            // this.ui_remarkName_InputField.text = this.u.uremark.remarkName;
            // this.ui_remarkNameNum.text = "("+ this.strLength(this.ui_remarkName_InputField.text) +"/16)";
        }
        else {
            // this.ui_remarkName_InputField.text = "";
            // this.ui_remarkNameNum.text = "(0/16)";
        }
        if (this.u.uremark != null && this.u.uremark.playRemark != "") {
            // this.ui_sign_InputField.text = this.u.uremark.playRemark;
            // this.ui_signNum.text = "("+ this.strLength(this.ui_sign_InputField.text) +"/40)";
        }
        else {
            // this.ui_sign_InputField.text = "";
            // this.ui_signNum.text = "(0/40)";
        }
    };
    UserInfoComp.prototype.SetUserComment = function (name) {
        this.ui_inputText.text = name == "" ? "" : name;
    };
    UserInfoComp.prototype.InitUIChatEmoj = function () {
        var _this = this;
        fgui.UIObjectFactory.setExtension("ui://Texas/ChatEmojCell", TexasGiftItem_1.default);
        var go;
        this.ui_ListChatEmoj.removeChildrenToPool();
        this.giftMap = new Map();
        var bundle = cc.assetManager.getBundle("GameCommon");
        bundle.loadDir("/Prefab", cc.Prefab, function (err, prefad) {
            if (!err) {
                for (var i = 0; i < prefad.length; i++) {
                    if (i == 1 || i == 2) {
                        continue;
                    }
                    var dont = ["hd_jiguanqiang01", "hd_jiguanqiang01_end", "gunFrom", "gunto", "hd_dapao01", "hd_dapao01_end"];
                    if (dont.indexOf(prefad[i].name) >= 0) {
                        continue;
                    }
                    if (Texas_1.Texas.giftConfig[prefad[i].name]) {
                        var itemCom = _this.ui_ListChatEmoj.addItemFromPool().asCom;
                        _this.SeChatEmojCellInfo(itemCom, Texas_1.Texas.giftConfig[prefad[i].name]);
                        var gifItem = itemCom;
                        _this.giftMap.set(prefad[i].name, gifItem);
                        gifItem.showGift(prefad[i]);
                    }
                }
            }
        });
    };
    UserInfoComp.prototype.playMusic = function (name) {
        var bundle = cc.assetManager.getBundle("GameCommon");
        bundle.loadDir("/gifbgm", cc.AudioClip, function (err, clips) {
            for (var i = 0; i < clips.length; i++) {
                AudioManager_1.AudioManager.Singleton.add(clips[i].name, clips[i]);
                if (clips[i].name == name) {
                    AudioManager_1.AudioManager.Singleton.play("", clips[i].name);
                }
            }
        });
    };
    UserInfoComp.prototype.getCreateAnimationNode = function (content) {
        console.log(content);
        console.log(this.giftMap.get(content));
        var num = Number.parseInt(content);
        var gift = null;
        if (!Number.isNaN(num)) {
            //处理机器人发送礼物Index
            var index = 0;
            this.giftMap.forEach(function (value, key) {
                if (index == num)
                    gift = value;
                index++;
            });
        }
        else {
            gift = this.giftMap.get(content);
        }
        return gift == null ? null : gift.createAnimationNode();
    };
    UserInfoComp.prototype.SeChatEmojCellInfo = function (ListChatEmoj, index) {
        var _this = this;
        ListChatEmoj.getChild("imgEmoj").asLoader.url = "ui://Common/" + index.icon;
        // Res.Singleton.SetImageSprite (chatEmojCell.getChild ("imgEmoj").GetComponent<Image> (), "whirl_gift", "whirl_gift_" + index);
        //钻石消耗5
        ListChatEmoj.getChild("emojName").text = index.name;
        ListChatEmoj.getChild("Text").text = index.diam;
        ListChatEmoj.getChild("Button").onClick(function () {
            var posServer = _this.isTexas ? F_TexasViewCtr_1.default.instance.Model._posServer : F_TexasViewCtr_1.default.instance.Model._posServer;
            if (_this.userPos <= 0) {
                CommonCtr_1.CommonCtr.instance.ShowTip("旁观状态下不能发送表情"); //旁观状态下不能发送表情
                return;
            }
            if (_this.userPos == posServer && Texas_1.Texas.giftConfig[index.icon]["moveAnima"] != "_") {
                CommonCtr_1.CommonCtr.instance.ShowTip("不能对自己发送表情"); //不能对自己发送表情
            }
            else {
                var gold = F_TexasViewCtr_1.default.instance.Model.mPlayerModel.gold;
                if (gold < 500) {
                    CommonCtr_1.CommonCtr.instance.ShowTip("账号余额不足"); //账号余额不足
                }
                else {
                    if (_this.isTexas) {
                        if (F_TexasViewCtr_1.default.instance.view._bftable.myUser.IsWatch()) {
                            CommonCtr_1.CommonCtr.instance.ShowTipLabel("旁观状态下不能发送表情"); //旁观状态下不能发送表情
                            return;
                        }
                        if (F_TexasViewCtr_1.default.instance.view._bftable.myUser.IsWaitToTakeIn()) {
                            CommonCtr_1.CommonCtr.instance.ShowTipLabel("占座状态下不能发送表情"); //占座状态下不能发送表情
                            return;
                        }
                        _this.Hide();
                        F_TexasViewCtr_1.default.instance.cs_chat(5, _this.userPos, index.icon, (Number.parseFloat(index.diam) * 100));
                        _this.scheduleOnce(function () {
                            _this.playMusic(index.icon);
                        }, 0.4);
                    }
                    else {
                        if (F_TexasViewCtr_1.default.instance.view._bftable.myUser.IsWatch()) {
                            CommonCtr_1.CommonCtr.instance.ShowTipLabel("旁观状态下不能发送表情"); //旁观状态下不能发送表情
                            return;
                        }
                        _this.Hide();
                        F_TexasViewCtr_1.default.instance.cs_chat(5, _this.userPos, index.icon, (Number.parseFloat(index.diam) * 100));
                        _this.scheduleOnce(function () {
                            _this.playMusic(index.icon);
                        }, 0.4);
                    }
                }
            }
            /*方便测试
            F_WhirlViewCtr.instance.view.HandleChat(testId, 2, index.ToString());
            testId++;
            if (testId > 8)
            {
                testId = 1;
            }
            */
        });
        ListChatEmoj.visible = true;
    };
    //举报
    UserInfoComp.prototype.ShowJubaoPanel = function () {
        this.ui_jubaoPanel.visible = true;
    };
    //举报
    UserInfoComp.prototype.PostReportPra = function () {
        var title = this.ui_jb_inputType.text;
        var content = this.ui_jb_inputContent.text;
        F_TexasViewCtr_1.default.instance.PostReportPra(0, "" + this.u.userid, content, title, this.getJubaoGold());
    };
    UserInfoComp.prototype.getJubaoGold = function () {
        console.error("举报次数：" + F_TexasViewCtr_1.default.instance.Model.mPlayerModel.recount);
        var num = F_TexasViewCtr_1.default.instance.Model.mPlayerModel.recount;
        var gold = 0;
        if (num == 0) {
            gold = 10;
        }
        else if (num == 1) {
            gold = 20;
        }
        else {
            gold = 40;
        }
        return gold;
    };
    UserInfoComp.prototype.SetLimitTxt = function (txt, content, length) {
        if (length === void 0) { length = 6; }
        if (txt != null) {
            txt.text = this.getNickNameSub(content, length);
        }
    };
    UserInfoComp.prototype.getNickNameSub = function (str, _length) {
        if (this.strLength(str) <= _length) {
            return str;
        }
        var resStr = "";
        var cnt = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255) {
                cnt += 2;
            }
            else {
                cnt++;
            }
            resStr += str.substring(i, i + 1);
            if (cnt >= _length)
                break;
        }
        return resStr;
    };
    UserInfoComp.prototype.strLength = function (str) {
        var cnt = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255)
                cnt += 2;
            else
                cnt++;
        }
        return cnt;
    };
    return UserInfoComp;
}(ViewBase_1.default));
exports.default = UserInfoComp;

cc._RF.pop();
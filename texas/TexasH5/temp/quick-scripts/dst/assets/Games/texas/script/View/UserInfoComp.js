
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/UserInfoComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFVzZXJJbmZvQ29tcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBeUU7QUFDekUsb0VBQW1FO0FBRW5FLGtFQUE2RDtBQUM3RCwyREFBMEQ7QUFDMUQsMkRBQXNEO0FBQ3RELHdDQUF1QztBQUN2Qyx3REFBdUQ7QUFDdkQsaURBQTRDO0FBSTVDO0lBQTBDLGdDQUFRO0lBQWxEO1FBQUEscUVBd21CQztRQXZtQlUsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBQ2pDLGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUNwQyxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUMvQixpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFDakMsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDLENBQUEsV0FBVztRQUM5QyxrQkFBWSxHQUFvQixJQUFJLENBQUMsQ0FBQSxXQUFXO1FBQ3ZELG1EQUFtRDtRQUM1QyxtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFDbkMsb0JBQWMsR0FBb0IsSUFBSSxDQUFDO1FBQ3ZDLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUNuQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBQzVDLG9EQUFvRDtRQUM3QyxzQkFBZ0IsR0FBb0IsSUFBSSxDQUFDO1FBQ3pDLHNCQUFnQixHQUFvQixJQUFJLENBQUM7UUFDekMsbUJBQWEsR0FBb0IsSUFBSSxDQUFDO1FBQ3RDLG9CQUFjLEdBQW9CLElBQUksQ0FBQztRQUM5QyxnREFBZ0Q7UUFDaEQsaURBQWlEO1FBQ2pELGlEQUFpRDtRQUVqRCw0Q0FBNEM7UUFDNUMsNkNBQTZDO1FBQ3RDLDBCQUFvQixHQUFpQixJQUFJLENBQUM7UUFFMUMscUJBQWUsR0FBZSxJQUFJLENBQUM7UUFDMUMsK0NBQStDO1FBQ3hDLGtCQUFZLEdBQW9CLElBQUksQ0FB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TSxnQ0FBUyxHQUFoQixVQUFpQixHQUFHO1FBQ2hCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO2dCQUN2QixHQUFHLElBQUksQ0FBQyxDQUFDOztnQkFFVCxHQUFHLEVBQUUsQ0FBQztTQUNiO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXhtQkEsQUF3bUJDLENBeG1CeUMsa0JBQVEsR0F3bUJqRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xuaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvU0QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9jc19iYXNlXCI7XG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcbmltcG9ydCB7IFVJVXRpbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbFwiO1xuaW1wb3J0IEZfVGV4YXNWaWV3Q3RyIGZyb20gXCIuLi9Db250cmwvRl9UZXhhc1ZpZXdDdHJcIjtcbmltcG9ydCB7IFRleGFzIH0gZnJvbSBcIi4uL01vZGVsL1RleGFzXCI7XG5pbXBvcnQgeyBUZXhhc0xhbmd1YWdlIH0gZnJvbSBcIi4uL01vZGVsL1RleGFzTGFuZ3VhZ2VcIjtcbmltcG9ydCBUZXhhc0dpZnRJdGVtIGZyb20gXCIuL1RleGFzR2lmdEl0ZW1cIjtcbmltcG9ydCBUZXhhc1VzZXJDb21wIGZyb20gXCIuL1RleGFzVXNlckNvbXBcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mb0NvbXAgZXh0ZW5kcyBWaWV3QmFzZSB7XG4gICAgcHVibGljIHVpX2dpdmVfYnRuOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9Vc2VySGVhZDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgaGVhZEltYWdlOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9WSVBGcmFtZTogZmd1aS5HTG9hZGVyID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0TmFtZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL0Vtb2ppVGV4dFxuICAgIHB1YmxpYyB1aV90eHRVc2VySWQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7Ly9FbW9qaVRleHRcbiAgICAvLyBwdWJsaWMgdWlfdHh0Q29tbWVudERlc2M6Zmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcGxheWJhY2tCZzogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0UGxheWJhY2s6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dE11dGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX0ltYWdlTXV0ZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfSW1hZ2VDb21tZW50OiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV90eHRDb21tZW50OmZndWkuR1RleHRGaWVsZCA9IG51bGw7IC8v5aSH5rOoXG4gICAgcHVibGljIHVpX3R4dFRvdGFsUGFpanU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dFRvdGFsQ291bnQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dFdpblJhdGU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dE9wZW5SYXRlOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV90eHRXaW5Db3VudDpmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV90eHRGYWlsQ291bnQ6Zmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfdHh0RHJhd0NvdW50OmZndWkuR1RleHRGaWVsZCA9IG51bGw7XG5cbiAgICAvLyBwdWJsaWMgdWlfaW1nV2luUmF0ZTpmZ3VpLkdMb2FkZXIgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9pbWdPcGVuUmF0ZTpmZ3VpLkdMb2FkZXIgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5DbG9zZV91c2VySW5mbzogZmd1aS5HQnV0dG9uID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9MaXN0Q2hhdEVtb2o6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9jaGF0RW1vakNlbGw6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2lucHV0VGV4dDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV90eHRUaXRsZTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcGxheWJhY2tUeHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX2JlaXpodV9QaDpmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9naXZlX3R4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfemhhbmt1YW5nVHh0OmZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3BqenNUeHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3pzc1R4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfd2luUmF0ZVR4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcmNsVHh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV96c1RpdGxlOmZndWkuR1RleHRGaWVsZCA9IG51bGw7XG5cbiAgICBwdWJsaWMgdWlfdGlja19idG46IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2ZvcmNlU2l0VXBfYnRuOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV90aWNrX1RleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2ZvcmNlU2l0VXBfVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIC8vIHB1YmxpYyB1aV9SZW1hcmtQYW5lbDpmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9tYXJrX1RleHQ6Zmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfcmVtYXJrTmFtZU51bTpmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9yZW1hcmtOYW1lX0lucHV0RmllbGQ6Zmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfcmVfRW1vamlUZXh0OmZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX2RhZmFfVGV4dDpmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9zaWduTnVtOmZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX3NpZ25fSW5wdXRGaWVsZDpmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9zaV9FbW9qaVRleHQ6Zmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfc3VibWl0X0J0bjpmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9zdW5taXRfVGV4dDpmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9DbG9zZXJlbWFya19CdG46Zmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfcmVtYXJrX2J0bjogZmd1aS5HQnV0dG9uID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9idG5FbW9qaTE6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2J0bkVtb2ppMjogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuRW1vamkzOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG4gICAgLy/kuL7miqXnm7jlhbNcbiAgICBwdWJsaWMgdWlfdXNlckp1YmFvOiBmZ3VpLkdCdXR0b24gPSBudWxsOy8v5Li+5oqlXG4gICAgcHVibGljIHVpX2p1YmFvUGFuZWw6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7Ly/kuL7miqXnlYzpnaJcbiAgICBwdWJsaWMgdWlfYnRuamJfQ2xvc2U6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHVibGljIHVpX2piX1VzZXJIZWFkOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyBqYl9oZWFkSW1hZ2U6IGZndWkuR0xvYWRlciA9IG51bGw7XG4gICAgcHVibGljIHVpX2piX3R4dE5hbWU6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX2piX3R4dFVzZXJJRDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfamJfaW5wdXRUeXBlOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsOy8v5Li+5oql5qCH6aKYXG4gICAgcHVibGljIHVpX2piX2lucHV0Q29udGVudDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDsvL+S4vuaKpeWGheWuuVxuICAgIHB1YmxpYyB1aV9idG5KdWJhb09LOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9idG5KdWJhb0Nsb3NlOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9qYl9UeHROdW06IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHU6IFBsYXllckluZm9TRDtcbiAgICBwcml2YXRlIGlzVGV4YXM6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBvbkxvYWRFbmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliJ3lp4vljJZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBNeVN0YXJ0KHU6IFBsYXllckluZm9TRCA9IG51bGwsIHNlcnZlclBvczogbnVtYmVyID0gbnVsbCkge1xuICAgICAgICB0aGlzLm15c3RhcnQgPSB0cnVlO1xuICAgICAgICB0aGlzLnUgPSB1O1xuICAgICAgICB0aGlzLnVzZXJQb3MgPSBzZXJ2ZXJQb3M7XG4gICAgICAgIGlmICh0aGlzLm9uTG9hZEVuZCkge1xuICAgICAgICAgICAgdGhpcy5NeVN0YXJ0RXgoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy5vbkxvYWRFbmQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5teXN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLk15U3RhcnRFeCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQXV0b1NldEdvUHJvcGVydHkoKSB7IH1cblxuICAgIE15U3RhcnRFeCgpIHtcbiAgICAgICAgaWYgKHRoaXMudWlfZ2l2ZV9idG4gPT0gbnVsbCkge1xuICAgICAgICAgICAgc3VwZXIuQXV0b1NldEdvUHJvcGVydHkoKTtcbiAgICAgICAgICAgIHRoaXMuSW5pdEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy5Jbml0VUlDaGF0RW1vaigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNUZXhhcyA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmdhbWVpZCA9PSA1MTtcbiAgICAgICAgdGhpcy5Jbml0TGFuZ3VhZ2UoKTtcbiAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgICAgIGlmICh0aGlzLnUgIT0gbnVsbCkgdGhpcy5zaG93KHRoaXMudSwgdGhpcy51c2VyUG9zKVxuICAgIH1cblxuICAgIEhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBJbml0TGFuZ3VhZ2UoKSB7XG4gICAgICAgIC8vIHRoaXMudWlfdHh0VGl0bGUudGV4dCA9IFwi546p5a625L+h5oGvXCI7XG4gICAgICAgIC8vIHRoaXMudWlfcGxheWJhY2tUeHQudGV4dCA9IFwi5Zue5pS+XCI7XG4gICAgICAgIC8vIHRoaXMudWlfYmVpemh1X1BoLnRleHQgPSBcIuWkh+azqOWQjeWSjOaJk+azleagh+iusFwiO1xuICAgICAgICB0aGlzLnVpX2dpdmVfdHh0LnRleHQgPSBcIui1oCAg6YCBXCI7XG4gICAgICAgIC8vIHRoaXMudWlfemhhbmt1YW5nVHh0LnRleHQgPSBcIuS4quS6uuaImOWGtVwiO1xuICAgICAgICB0aGlzLnVpX3BqenNUeHQudGV4dCA9IFwi54mM5bGA5oC75pWwXCI7XG4gICAgICAgIHRoaXMudWlfenNzVHh0LnRleHQgPSBcIuaAu+aJi+aVsFwiO1xuICAgICAgICB0aGlzLnVpX3dpblJhdGVUeHQudGV4dCA9IFwi6IOc546HXCI7XG4gICAgICAgIHRoaXMudWlfcmNsVHh0LnRleHQgPSB0aGlzLmlzVGV4YXMgPyBcIuWFpeaxoOeOh1wiIDogXCLnv7vniYznjodcIjsvL+WFpeaxoOeOhyDnv7vniYznjodcbiAgICAgICAgLy8gdGhpcy51aV96c1RpdGxlLnRleHQgPSBcIui1oCAg6YCBXCI7XG4gICAgICAgIHRoaXMudWlfdGlja19UZXh0LnRleHQgPSBcIui4ouWHuueJjOWxgFwiO1xuICAgICAgICB0aGlzLnVpX2ZvcmNlU2l0VXBfVGV4dC50ZXh0ID0gXCLlvLrliLbnq5notbdcIjtcblxuICAgICAgICAvLyB0aGlzLnVpX21hcmtfVGV4dC50ZXh0ID0gXCLlpIfms6jlkI1cIjtcbiAgICAgICAgLy8gdGhpcy51aV9kYWZhX1RleHQudGV4dCA9IFwi5omT5rOV5qCH6K6wXCI7XG4gICAgICAgIC8vIHRoaXMudWlfc3VubWl0X1RleHQudGV4dCA9IFwi5L+d5a2YXCI7XG4gICAgICAgIC8vIHRoaXMudWlfcmVtYXJrTmFtZV9JbnB1dEZpZWxkLnByb21wdFRleHQgPSBcIuivt+i+k+WFpeWkh+azqOWQjVwiO1xuICAgICAgICAvLyB0aGlzLnVpX3NpZ25fSW5wdXRGaWVsZC5wcm9tcHRUZXh0ID0gXCLor7fovpPlhaXmiZPms5XmoIforrBcIjtcblxuICAgICAgICB0aGlzLmhlYWRJbWFnZSA9IHRoaXMudWlfVXNlckhlYWQuZ2V0Q2hpbGQoXCJoZWFkSW1hZ2VcIikuYXNMb2FkZXI7XG4gICAgICAgIHRoaXMuamJfaGVhZEltYWdlID0gdGhpcy51aV9qYl9Vc2VySGVhZC5nZXRDaGlsZChcImhlYWRJbWFnZVwiKS5hc0xvYWRlcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBJbml0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLnVpX3BsYXliYWNrQmcub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAvL0RlYnVnLkxvZ0Vycm9yKFwi5Zue5pS+XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlclBvcyA8PSAwKSByZXR1cm47XG4gICAgICAgICAgICBsZXQgdGVtcEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUZXhhcykge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyOiBUZXhhc1VzZXJDb21wID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5fYmZ0YWJsZS5HZXRVc2VyQnlQb3ModGhpcy51c2VyUG9zKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlci5zZWxmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRlbXBBdWRpbyA9IENvbW1vbl9TZWNDdHIuaW5zdGFuY2UuTW9kZWwuc2VsZkF1ZGlvO0ltYWdlQ29tbWVudFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBBdWRpbyA9IHVzZXIgIT0gbnVsbCA/IHVzZXIudGVtcEF1ZGlvIDogbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2hpcmxVc2VyQ29tcCB1c2VyID0gRl9XaGlybFZpZXdDdHIuaW5zdGFuY2Uudmlldy5fYmZ0YWJsZS5HZXRVc2VyQnlQb3MgKHRoaXMudXNlclBvcyk7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHVzZXIuc2VsZikge1xuICAgICAgICAgICAgICAgIC8vICAgICB0ZW1wQXVkaW8gPSBDb21tb25fU2VjQ3RyLmluc3RhbmNlLk1vZGVsLnNlbGZBdWRpbztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB0ZW1wQXVkaW8gPSB1c2VyICE9IG51bGwgPyB1c2VyLnRlbXBBdWRpbyA6IG51bGw7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGVtcEF1ZGlvID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsIChMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTYxNCksIHRydWUpOy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheUNoYXRWb2ljZSAodGVtcEF1ZGlvLCAtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfSW1hZ2VNdXRlLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgLy9EZWJ1Zy5Mb2dFcnJvcihcIumdmemfs1wiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMudSAhPSBudWxsICYmICh0aGlzLmlzVGV4YXMgPyBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5HZXRVc2VySXNNdXRlKHRoaXMudS51c2VyaWQpIDogRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuR2V0VXNlcklzTXV0ZSh0aGlzLnUudXNlcmlkKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkVuYWJsZU11dGVVc2VyKGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5FbmFibGVNdXRlVXNlcih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9JbWFnZUNvbW1lbnQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy51LnVzZXJpZCA9PSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkKSByZXR1cm47XG4gICAgICAgICAgICAvLyB0aGlzLlNob3dSZW1hcmtQYW5lbCgpO1xuICAgICAgICAgICAgdGhpcy51aV9pbnB1dFRleHQucmVxdWVzdEZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLnVpX3JlbWFya19idG4ub25DbGljaygoKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy51LnVzZXJpZCA9PSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkKSByZXR1cm47XG4gICAgICAgIC8vICAgICB0aGlzLlNob3dSZW1hcmtQYW5lbCgpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgdGhpcy51aV9yZW1hcmtfYnRuLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudS51c2VyaWQgPT0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5TaG93UmVtYXJrUGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMudWlfQ2xvc2VyZW1hcmtfQnRuLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy51aV9SZW1hcmtQYW5lbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIHRoaXMudWlfaW5wdXRUZXh0Lm9uKGZndWkuRXZlbnQuVEVYVF9DSEFOR0UsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVpX2lucHV0VGV4dC50ZXh0LnRyaW0oKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoXCLlpIfms6jlpLHotKXvvIzlhoXlrrnkuLrnqbpcIik7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc191c2VycmVtYXJrX3RleCh0aGlzLnUudXNlcmlkLCBcIlwiLCB0aGlzLnVpX2lucHV0VGV4dC50ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudWlfYnRuQ2xvc2VfdXNlckluZm8ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMudWlfcmVtYXJrTmFtZV9JbnB1dEZpZWxkLm1heExlbmd0aCA9IDA7XG4gICAgICAgIGxldCBldmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xuICAgICAgICBsZXQgZXYgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAvLyBldi50YXJnZXQgPSB0aGlzLnVpX3JlbWFya05hbWVfSW5wdXRGaWVsZC5ub2RlO1xuICAgICAgICBldi5oYW5kbGVyID0gXCJTZXRSZW1hcmtOYW1lXCI7XG4gICAgICAgIGV2LmNvbXBvbmVudCA9IHRoaXMuZmd1aUNvbXBvbmVudC5uYW1lO1xuICAgICAgICBldmVudHMucHVzaChldik7XG4gICAgICAgIC8vIHRoaXMudWlfcmVtYXJrTmFtZV9JbnB1dEZpZWxkLl9lZGl0Qm94LnRleHRDaGFuZ2VkID0gZXZlbnRzOy8vLmVtaXRFdmVudHModGhpcy5TZXRSZW1hcmtOYW1lKTtcblxuICAgICAgICAvLyB0aGlzLnVpX3NpZ25fSW5wdXRGaWVsZC5tYXhMZW5ndGggPSAwO1xuICAgICAgICBsZXQgZXZlbnRzMjogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XG4gICAgICAgIGxldCBldjIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAvLyBldjIudGFyZ2V0ID0gdGhpcy51aV9yZW1hcmtOYW1lX0lucHV0RmllbGQubm9kZTtcbiAgICAgICAgLy8gZXYyLmhhbmRsZXIgPSBcIlNldFJlbWFya0RhZmFcIjtcbiAgICAgICAgLy8gZXYyLmNvbXBvbmVudCA9IHRoaXMuZmd1aUNvbXBvbmVudC5uYW1lO1xuICAgICAgICAvLyBldmVudHMyLnB1c2goZXYyKTtcbiAgICAgICAgLy8gdGhpcy51aV9zaWduX0lucHV0RmllbGQuX2VkaXRCb3gudGV4dENoYW5nZWQgPSBldmVudHMyOyAvLyh0aGlzLlNldFJlbWFya0RhZmEpO1xuXG4gICAgICAgIHRoaXMudWlfZ2l2ZV9idG4udmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudWlfdGlja19idG4ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX3RpY2t1c2VyX3RleCh0aGlzLnUudXNlcmlkLCAyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudWlfZm9yY2VTaXRVcF9idG4ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX3RpY2t1c2VyX3RleCh0aGlzLnUudXNlcmlkLCAxKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5FbW9qaTEuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleCgxKTtcbiAgICAgICAgdGhpcy51aV9idG5FbW9qaTEub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bkVtb2ppMS5nZXRDb250cm9sbGVyKFwiaXNPblwiKS5zZXRTZWxlY3RlZEluZGV4KDEpO1xuICAgICAgICAgICAgdGhpcy51aV9idG5FbW9qaTIuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgIHRoaXMudWlfYnRuRW1vamkzLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNldFNlbGVjdGVkSW5kZXgoMCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVpX2J0bkVtb2ppMi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudWlfYnRuRW1vamkxLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNldFNlbGVjdGVkSW5kZXgoMCk7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bkVtb2ppMi5nZXRDb250cm9sbGVyKFwiaXNPblwiKS5zZXRTZWxlY3RlZEluZGV4KDEpO1xuICAgICAgICAgICAgdGhpcy51aV9idG5FbW9qaTMuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudWlfYnRuRW1vamkzLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51aV9idG5FbW9qaTEuZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgIHRoaXMudWlfYnRuRW1vamkyLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNldFNlbGVjdGVkSW5kZXgoMCk7XG4gICAgICAgICAgICB0aGlzLnVpX2J0bkVtb2ppMy5nZXRDb250cm9sbGVyKFwiaXNPblwiKS5zZXRTZWxlY3RlZEluZGV4KDEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnVpX3VzZXJKdWJhby5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuU2hvd0p1YmFvUGFuZWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5qYl9DbG9zZS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudWlfanViYW9QYW5lbC52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9idG5KdWJhb09LLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuanViYW9UeXBlID0gMDtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMudWlfamJfaW5wdXRUeXBlLnRleHQ7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMudWlfamJfaW5wdXRDb250ZW50LnRleHQ7XG4gICAgICAgICAgICBpZiAodGl0bGUudHJpbSgpID09IFwiXCIgfHwgY29udGVudC50cmltKCkgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcudGlwVmlldy5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTgwMDE3KSk7Ly/kuL7miqXmoIfpopjlkozlhoXlrrnkuI3og73kuLrnqbogXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy50aXBWaWV3LlNob3dUaXAoXCLmgqjlsIZcIiArIFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIwOTIpICsgdGhpcy5nZXRKdWJhb0dvbGQoKSArIFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAyOSkgKyBcIizmmK/lkKZcIiArIFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAxOSkgKyBcIu+8n1wiLCAoKSA9PiB7Ly/mtojogJcs6YeR5biBLuS4vuaKpVxuICAgICAgICAgICAgICAgIC8vIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2dhbWVyZXBvcnRfdGV4KHRoaXMuZ2V0SnViYW9Hb2xkKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuUG9zdFJlcG9ydFByYSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfanViYW9QYW5lbC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG5cbiAgICAgICAgICAgIH0sIFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE4MDAxOSksIFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDEzOTMpKTsvL1wi5Li+5oqlXCIgLOWPlua2iFxuXG5cblxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51aV9idG5KdWJhb0Nsb3NlLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51aV9qdWJhb1BhbmVsLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByaXZhdGUgU2V0UmVtYXJrTmFtZShzdHI6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNldFJlbWFya05hbWUgLSDovpPlhaXmlofmnKzvvJpcIiArIHN0cilcbiAgICAgICAgc3RyID0gdGhpcy5nZXROaWNrTmFtZVN1YihzdHIsIDE2KTtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuc3RyTGVuZ3RoKHN0cik7XG4gICAgICAgIC8vIHRoaXMudWlfcmVtYXJrTmFtZV9JbnB1dEZpZWxkLnRleHQgPSB0aGlzLnVpX3JlX0Vtb2ppVGV4dC50ZXh0ID0gc3RyO1xuICAgICAgICAvLyB0aGlzLnVpX3JlbWFya05hbWVOdW0udGV4dCA9IGAoJHthcnJ9LzE2KWA7XG4gICAgfVxuICAgIHByaXZhdGUgU2V0UmVtYXJrRGFmYShzdHI6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNldFJlbWFya0RhZmEgLSDovpPlhaXmlofmnKzvvJpcIiArIHN0cilcbiAgICAgICAgc3RyID0gdGhpcy5nZXROaWNrTmFtZVN1YihzdHIsIDQwKTtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuc3RyTGVuZ3RoKHN0cik7XG4gICAgICAgIC8vIHRoaXMudWlfc2lnbl9JbnB1dEZpZWxkLnRleHQgPSB0aGlzLnVpX3NpX0Vtb2ppVGV4dC50ZXh0ID0gc3RyO1xuICAgICAgICAvLyB0aGlzLnVpX3NpZ25OdW0udGV4dCA9IGAoJHthcnJ9LzQwKWA7XG4gICAgfVxuICAgIHByaXZhdGUgRW5hYmxlTXV0ZVVzZXIoaXNNdXRlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGV4YXMpXG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5FbmFibGVNdXRlVXNlcih0aGlzLnUudXNlcmlkLCBpc011dGUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5FbmFibGVNdXRlVXNlcih0aGlzLnUudXNlcmlkLCBpc011dGUpO1xuICAgICAgICAvLyBsZXQgdHh0OlVJR3JhZGllbnQgPSB0aGlzLnVpX3R4dE11dGUuZ2FtZU9iamVjdC5nZXRPckFkZENvbXBvbmVudDxVSUdyYWRpZW50PiAoKTtcbiAgICAgICAgaWYgKHRoaXMudWlfdHh0TXV0ZSkgdGhpcy51aV90eHRNdXRlLnZpc2libGUgPSBpc011dGU7XG4gICAgICAgIGlmICh0aGlzLnVpX0ltYWdlTXV0ZSkgdGhpcy51aV9JbWFnZU11dGUuZ2V0Q2hpbGQoXCJJbWFnZVwiKS5hc0xvYWRlci51cmwgPSBcInVpOi8vdGV4YXMvXCIgKyAoaXNNdXRlID8gXCJqaW5neWluXCIgOiBcImRha2Fpc2hlbmd5aW5cIik7IC8vUmVzLlNpbmdsZXRvbi5TZXRJbWFnZVNwcml0ZSAodWlfSW1hZ2VNdXRlLCBcIndoaXJsX3VzZXJJbmZvXCIsIGlzTXV0ZSA/IFwiamluZ3lpblwiIDogXCJkYWthaXNoZW5neWluXCIpO1xuXG4gICAgfVxuICAgIHByaXZhdGUgdXNlclBvcyA9IDA7XG4gICAgcHVibGljIHNob3codTogUGxheWVySW5mb1NELCBzZXJ2ZXJQb3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgc3VwZXIuU2hvdygpO1xuICAgICAgICB0aGlzLnVzZXJQb3MgPSBzZXJ2ZXJQb3M7XG4gICAgICAgIHRoaXMuVXBkYXRlRGF0YSh1KTtcbiAgICB9XG4gICAgcHVibGljIHVwZGF0ZUluZm8odTogUGxheWVySW5mb1NELCBzZXJ2ZXJQb3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnVzZXJQb3MgPSBzZXJ2ZXJQb3M7XG4gICAgICAgIHRoaXMuVXBkYXRlRGF0YSh1KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBoZWFkSWNvbjogc3RyaW5nID0gbnVsbDtcbiAgICBwcml2YXRlIFVwZGF0ZURhdGEodTogUGxheWVySW5mb1NEKSB7XG4gICAgICAgIHRoaXMudSA9IHU7XG4gICAgICAgIGlmICh0aGlzLnUgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKHRoaXMuaXNUZXhhcykge1xuICAgICAgICAgICAgdGhpcy5FbmFibGVNdXRlVXNlcihGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5HZXRVc2VySXNNdXRlKHRoaXMudS51c2VyaWQpKTtcbiAgICAgICAgICAgIHRoaXMudWlfdGlja19idG4udmlzaWJsZSA9ICh1LnVzZXJpZCAhPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICYmIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm93bm5lcmlkID09IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWQpO1xuICAgICAgICAgICAgdGhpcy51aV9mb3JjZVNpdFVwX2J0bi52aXNpYmxlID0gKHRoaXMudWlfdGlja19idG4udmlzaWJsZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLkVuYWJsZU11dGVVc2VyKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLkdldFVzZXJJc011dGUodS51c2VyaWQpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWxsQ291bnQgPSB1LmNpbmZvLndpbmMgKyB1LmNpbmZvLmZhaWxjICsgdS5jaW5mby5kYztcbiAgICAgICAgbGV0IHdpblJhdGUgPSBhbGxDb3VudCA+IDAgPyB1LmNpbmZvLndpbmMgLyBhbGxDb3VudCA6IDAuMDA7XG5cbiAgICAgICAgLy/ngrnlh7vml4Hop4LnjqnlpLTlg49cbiAgICAgICAgaWYgKHRoaXMudXNlclBvcyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVpX3RpY2tfYnRuLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudWlfZm9yY2VTaXRVcF9idG4udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFVJVXRpbC5JbWFnZUdyZXlUb2dnbGUodGhpcy51aV9wbGF5YmFja0JnLCB0aGlzLnVzZXJQb3MgPD0gMCk7XG5cblxuICAgICAgICBpZiAodS51cmVtYXJrICE9IG51bGwgJiYgdS51cmVtYXJrLnJlbWFya05hbWUgIT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy51aV9qYl90eHROYW1lLnRleHQgPSB1LnVyZW1hcmsucmVtYXJrTmFtZTtcbiAgICAgICAgICAgIHRoaXMudWlfdHh0TmFtZS50ZXh0ID0gdS51cmVtYXJrLnJlbWFya05hbWU7XG4gICAgICAgICAgICB0aGlzLnVpX3R4dFVzZXJJZC50ZXh0ID0gXCJJRDogXCIgKyB1LnVzZXJpZCArIFwiICDmmLXnp7A6XCIgKyB1Ll9uO1xuICAgICAgICAgICAgdGhpcy51aV9qYl90eHRVc2VySUQudGV4dCA9IHUudXNlcmlkICsgXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWlfamJfdHh0TmFtZS50ZXh0ID0gdS5fbjtcbiAgICAgICAgICAgIHRoaXMudWlfdHh0TmFtZS50ZXh0ID0gdS5fbjtcbiAgICAgICAgICAgIHRoaXMudWlfdHh0VXNlcklkLnRleHQgPSBcIklEOiBcIiArIHUudXNlcmlkO1xuICAgICAgICAgICAgdGhpcy51aV9qYl90eHRVc2VySUQudGV4dCA9IHUudXNlcmlkICsgXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodS51cmVtYXJrICE9IG51bGwgJiYgdS51cmVtYXJrLnBsYXlSZW1hcmsgIT0gXCJcIiAmJiB1LnVzZXJpZCAhPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkKSB7XG4gICAgICAgICAgICB0aGlzLlNldFVzZXJDb21tZW50KHUudXJlbWFyay5wbGF5UmVtYXJrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuU2V0VXNlckNvbW1lbnQoXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVpX3R4dFRvdGFsQ291bnQudGV4dCA9ICh1LmNpbmZvLndpbmMgKyB1LmNpbmZvLmZhaWxjICsgdS5jaW5mby5kYykudG9TdHJpbmcoKTtcbiAgICAgICAgLy8gdGhpcy51aV9pbWdXaW5SYXRlLmZpbGxBbW91bnQgPSB3aW5SYXRlO1xuICAgICAgICAvLyB0aGlzLnVpX2ltZ09wZW5SYXRlLmZpbGxBbW91bnQgPSBhbGxDb3VudCA8PSAwID8gMC4wMCA6ICB1LmNpbmZvLmZyIC8gYWxsQ291bnQ7XG5cbiAgICAgICAgdGhpcy51aV90eHRXaW5SYXRlLnRleHQgPSAod2luUmF0ZSAqIDEwMCkudG9GaXhlZCgyKSArIFwiJVwiO1xuICAgICAgICBpZiAoYWxsQ291bnQgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy51aV90eHRPcGVuUmF0ZS50ZXh0ID0gXCIwJVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV90eHRPcGVuUmF0ZS50ZXh0ID0gKHUuY2luZm8uZnIgLyBhbGxDb3VudCAqIDEwMC4wKS50b0ZpeGVkKDIpICsgXCIlXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVpX3R4dFRvdGFsUGFpanUudGV4dCA9IHUuY2luZm8udGFibGVudW0udG9TdHJpbmcoKTtcbiAgICAgICAgLy8gdGhpcy51aV90eHRXaW5Db3VudC50ZXh0ID0gXCLojrfog5w6W2NvbG9yPSNmZmZmZmZdXCIgKyB1LmNpbmZvLndpbmMudG9TdHJpbmcgKCkgKyBcIlsvY29sb3JdXCI7Ly/ojrfog5xcbiAgICAgICAgLy8gdGhpcy51aV90eHRGYWlsQ291bnQudGV4dCA9IFwi5aSx6LSlOltjb2xvcj0jZmZmZmZmXVwiICsgdS5jaW5mby5mYWlsYy50b1N0cmluZyAoKSArIFwiWy9jb2xvcl1cIjsvL+Wksei0pVxuICAgICAgICAvLyB0aGlzLnVpX3R4dERyYXdDb3VudC50ZXh0ID0gXCLlubPlsYA6W2NvbG9yPSNmZmZmZmZdXCIgKyB1LmNpbmZvLmRjLnRvU3RyaW5nICgpICsgXCJbL2NvbG9yXVwiOy8v5bmz5bGAXG5cblxuICAgICAgICB0aGlzLmhlYWRJY29uID0gdS53ZWNoYXQud2ljb247XG4gICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UodGhpcy5oZWFkSW1hZ2UsIHRoaXMuaGVhZEljb24pO1xuICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMudWlfVklQRnJhbWUsIFwiVklQXCIgKyB0aGlzLnUuX3ZsdiwgXCJUZXhhc1wiKTtcbiAgICAgICAgVUlVdGlsLmxvYWRJbWFnZSh0aGlzLmpiX2hlYWRJbWFnZSwgdGhpcy5oZWFkSWNvbik7XG4gICAgICAgIC8vIFVJVXRpbC5TZXRIZWFkSW1hZ1VSTCAodWlfaGVhZEltYWdlLCBoZWFkSWNvbiwgZmFsc2UsIChpZCkgPT4ge1xuICAgICAgICAvLyAgICAgcmV0dXJuIGhlYWRJY29uID09IGlkO1xuICAgICAgICAvLyB9LCB0cnVlKTtcblxuICAgICAgICB0aGlzLnVpX3JlbWFya19idG4udmlzaWJsZSA9ICh1LnVzZXJpZCAhPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkKTtcbiAgICAgICAgLy8gdGhpcy51aV90eHRDb21tZW50LnZpc2libGUgPSh1LnVzZXJpZCAhPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkKTtcblxuICAgICAgICBpZiAodS51c2VyaWQgPT0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCkge1xuICAgICAgICAgICAgdGhpcy51aV9pbnB1dFRleHQuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV9pbnB1dFRleHQuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMudWlfdXNlckp1YmFvLnZpc2libGUgPSB0aGlzLnUudXNlcmlkICE9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC51c2VyaWRcbiAgICB9XG4gICAgcHVibGljIFNob3dSZW1hcmtQYW5lbCgpIHtcbiAgICAgICAgLy8gdGhpcy51aV9SZW1hcmtQYW5lbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMudS51cmVtYXJrICE9IG51bGwgJiYgdGhpcy51LnVyZW1hcmsucmVtYXJrTmFtZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX3JlbWFya05hbWVfSW5wdXRGaWVsZC50ZXh0ID0gdGhpcy51LnVyZW1hcmsucmVtYXJrTmFtZTtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfcmVtYXJrTmFtZU51bS50ZXh0ID0gXCIoXCIrIHRoaXMuc3RyTGVuZ3RoKHRoaXMudWlfcmVtYXJrTmFtZV9JbnB1dEZpZWxkLnRleHQpICtcIi8xNilcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfcmVtYXJrTmFtZV9JbnB1dEZpZWxkLnRleHQgPSBcIlwiO1xuICAgICAgICAgICAgLy8gdGhpcy51aV9yZW1hcmtOYW1lTnVtLnRleHQgPSBcIigwLzE2KVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnUudXJlbWFyayAhPSBudWxsICYmIHRoaXMudS51cmVtYXJrLnBsYXlSZW1hcmsgIT0gXCJcIikge1xuICAgICAgICAgICAgLy8gdGhpcy51aV9zaWduX0lucHV0RmllbGQudGV4dCA9IHRoaXMudS51cmVtYXJrLnBsYXlSZW1hcms7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX3NpZ25OdW0udGV4dCA9IFwiKFwiKyB0aGlzLnN0ckxlbmd0aCh0aGlzLnVpX3NpZ25fSW5wdXRGaWVsZC50ZXh0KSArXCIvNDApXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX3NpZ25fSW5wdXRGaWVsZC50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIC8vIHRoaXMudWlfc2lnbk51bS50ZXh0ID0gXCIoMC80MClcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIFNldFVzZXJDb21tZW50KG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVpX2lucHV0VGV4dC50ZXh0ID0gbmFtZSA9PSBcIlwiID8gXCJcIiA6IG5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdpZnRNYXA6IE1hcDxzdHJpbmcsIFRleGFzR2lmdEl0ZW0+O1xuXG4gICAgcHVibGljIEluaXRVSUNoYXRFbW9qKCkge1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL1RleGFzL0NoYXRFbW9qQ2VsbFwiLCBUZXhhc0dpZnRJdGVtKTtcblxuICAgICAgICBsZXQgZ286IGZndWkuR0NvbXBvbmVudDtcbiAgICAgICAgdGhpcy51aV9MaXN0Q2hhdEVtb2oucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcbiAgICAgICAgdGhpcy5naWZ0TWFwID0gbmV3IE1hcDxzdHJpbmcsIFRleGFzR2lmdEl0ZW0+KCk7XG4gICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiR2FtZUNvbW1vblwiKTtcbiAgICAgICAgYnVuZGxlLmxvYWREaXIoXCIvUHJlZmFiXCIsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFkOiBjYy5QcmVmYWJbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZhZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxIHx8IGkgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRvbnQgPSBbXCJoZF9qaWd1YW5xaWFuZzAxXCIsIFwiaGRfamlndWFucWlhbmcwMV9lbmRcIiwgXCJndW5Gcm9tXCIsIFwiZ3VudG9cIiwgXCJoZF9kYXBhbzAxXCIsIFwiaGRfZGFwYW8wMV9lbmRcIl1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvbnQuaW5kZXhPZihwcmVmYWRbaV0ubmFtZSkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoVGV4YXMuZ2lmdENvbmZpZ1twcmVmYWRbaV0ubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtQ29tID0gdGhpcy51aV9MaXN0Q2hhdEVtb2ouYWRkSXRlbUZyb21Qb29sKCkuYXNDb207XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNlQ2hhdEVtb2pDZWxsSW5mbyhpdGVtQ29tLCBUZXhhcy5naWZ0Q29uZmlnW3ByZWZhZFtpXS5uYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnaWZJdGVtID0gaXRlbUNvbSBhcyBUZXhhc0dpZnRJdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5naWZ0TWFwLnNldChwcmVmYWRbaV0ubmFtZSwgZ2lmSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnaWZJdGVtLnNob3dHaWZ0KHByZWZhZFtpXSlcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBwdWJsaWMgcGxheU11c2ljKG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgYnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcIkdhbWVDb21tb25cIik7XG4gICAgICAgIGJ1bmRsZS5sb2FkRGlyKFwiL2dpZmJnbVwiLCBjYy5BdWRpb0NsaXAsIChlcnIsIGNsaXBzOiBjYy5BdWRpb0NsaXBbXSkgPT4ge1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5hZGQoY2xpcHNbaV0ubmFtZSwgY2xpcHNbaV0pO1xuICAgICAgICAgICAgICAgIGlmIChjbGlwc1tpXS5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KFwiXCIsIGNsaXBzW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0Q3JlYXRlQW5pbWF0aW9uTm9kZShjb250ZW50OiBzdHJpbmcpOiBjYy5Ob2RlIHtcbiAgICAgICAgY29uc29sZS5sb2coY29udGVudCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2lmdE1hcC5nZXQoY29udGVudCkpO1xuICAgICAgICBsZXQgbnVtID0gTnVtYmVyLnBhcnNlSW50KGNvbnRlbnQpO1xuICAgICAgICB2YXIgZ2lmdDogVGV4YXNHaWZ0SXRlbSA9IG51bGxcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4obnVtKSkge1xuICAgICAgICAgICAgLy/lpITnkIbmnLrlmajkurrlj5HpgIHnpLznialJbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZ2lmdE1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IG51bSkgZ2lmdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdpZnQgPSB0aGlzLmdpZnRNYXAuZ2V0KGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdpZnQgPT0gbnVsbCA/IG51bGwgOiBnaWZ0LmNyZWF0ZUFuaW1hdGlvbk5vZGUoKTtcbiAgICB9XG4gICAgcHVibGljIFNlQ2hhdEVtb2pDZWxsSW5mbyhMaXN0Q2hhdEVtb2o6IGZndWkuR0NvbXBvbmVudCwgaW5kZXg6IGFueSkge1xuXG4gICAgICAgIExpc3RDaGF0RW1vai5nZXRDaGlsZChcImltZ0Vtb2pcIikuYXNMb2FkZXIudXJsID0gXCJ1aTovL0NvbW1vbi9cIiArIGluZGV4Lmljb247XG4gICAgICAgIC8vIFJlcy5TaW5nbGV0b24uU2V0SW1hZ2VTcHJpdGUgKGNoYXRFbW9qQ2VsbC5nZXRDaGlsZCAoXCJpbWdFbW9qXCIpLkdldENvbXBvbmVudDxJbWFnZT4gKCksIFwid2hpcmxfZ2lmdFwiLCBcIndoaXJsX2dpZnRfXCIgKyBpbmRleCk7XG4gICAgICAgIC8v6ZK755+z5raI6ICXNVxuICAgICAgICBMaXN0Q2hhdEVtb2ouZ2V0Q2hpbGQoXCJlbW9qTmFtZVwiKS50ZXh0ID0gaW5kZXgubmFtZTtcbiAgICAgICAgTGlzdENoYXRFbW9qLmdldENoaWxkKFwiVGV4dFwiKS50ZXh0ID0gaW5kZXguZGlhbTtcbiAgICAgICAgTGlzdENoYXRFbW9qLmdldENoaWxkKFwiQnV0dG9uXCIpLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvc1NlcnZlciA9IHRoaXMuaXNUZXhhcyA/IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLl9wb3NTZXJ2ZXIgOiBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5fcG9zU2VydmVyO1xuICAgICAgICAgICAgaWYgKHRoaXMudXNlclBvcyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXAoXCLml4Hop4LnirbmgIHkuIvkuI3og73lj5HpgIHooajmg4VcIik7Ly/ml4Hop4LnirbmgIHkuIvkuI3og73lj5HpgIHooajmg4VcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyUG9zID09IHBvc1NlcnZlciAmJiBUZXhhcy5naWZ0Q29uZmlnW2luZGV4Lmljb25dW1wibW92ZUFuaW1hXCJdICE9IFwiX1wiKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXAoXCLkuI3og73lr7noh6rlt7Hlj5HpgIHooajmg4VcIik7Ly/kuI3og73lr7noh6rlt7Hlj5HpgIHooajmg4VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGdvbGQgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwuZ29sZDtcbiAgICAgICAgICAgICAgICBpZiAoZ29sZCA8IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcChcIui0puWPt+S9memineS4jei2s1wiKTsvL+i0puWPt+S9memineS4jei2s1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1RleGFzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5fYmZ0YWJsZS5teVVzZXIuSXNXYXRjaCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuaXgeingueKtuaAgeS4i+S4jeiDveWPkemAgeihqOaDhVwiKTsvL+aXgeingueKtuaAgeS4i+S4jeiDveWPkemAgeihqOaDhVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3Ll9iZnRhYmxlLm15VXNlci5Jc1dhaXRUb1Rha2VJbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuWNoOW6p+eKtuaAgeS4i+S4jeiDveWPkemAgeihqOaDhVwiKTsvL+WNoOW6p+eKtuaAgeS4i+S4jeiDveWPkemAgeihqOaDhVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuSGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfY2hhdCg1LCB0aGlzLnVzZXJQb3MsIGluZGV4Lmljb24sIChOdW1iZXIucGFyc2VGbG9hdChpbmRleC5kaWFtKSAqIDEwMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheU11c2ljKGluZGV4Lmljb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMC40KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3Ll9iZnRhYmxlLm15VXNlci5Jc1dhdGNoKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5peB6KeC54q25oCB5LiL5LiN6IO95Y+R6YCB6KGo5oOFXCIpOy8v5peB6KeC54q25oCB5LiL5LiN6IO95Y+R6YCB6KGo5oOFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19jaGF0KDUsIHRoaXMudXNlclBvcywgaW5kZXguaWNvbiwgKE51bWJlci5wYXJzZUZsb2F0KGluZGV4LmRpYW0pICogMTAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5TXVzaWMoaW5kZXguaWNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwLjQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKuaWueS+v+a1i+ivlVxuICAgICAgICAgICAgRl9XaGlybFZpZXdDdHIuaW5zdGFuY2Uudmlldy5IYW5kbGVDaGF0KHRlc3RJZCwgMiwgaW5kZXguVG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0ZXN0SWQrKztcbiAgICAgICAgICAgIGlmICh0ZXN0SWQgPiA4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RJZCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAqL1xuICAgICAgICB9KTtcbiAgICAgICAgTGlzdENoYXRFbW9qLnZpc2libGUgPSB0cnVlO1xuXG4gICAgfVxuXG4gICAgLy/kuL7miqVcbiAgICBwdWJsaWMgU2hvd0p1YmFvUGFuZWwoKSB7XG4gICAgICAgIHRoaXMudWlfanViYW9QYW5lbC52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL+S4vuaKpVxuICAgIHB1YmxpYyBQb3N0UmVwb3J0UHJhKCkge1xuICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLnVpX2piX2lucHV0VHlwZS50ZXh0O1xuICAgICAgICBsZXQgY29udGVudCA9IHRoaXMudWlfamJfaW5wdXRDb250ZW50LnRleHQ7XG4gICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlBvc3RSZXBvcnRQcmEoMCwgXCJcIiArIHRoaXMudS51c2VyaWQsIGNvbnRlbnQsIHRpdGxlLCB0aGlzLmdldEp1YmFvR29sZCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SnViYW9Hb2xkKCk6IG51bWJlciB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLkuL7miqXmrKHmlbDvvJpcIiArIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC5yZWNvdW50KVxuICAgICAgICBsZXQgbnVtID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnJlY291bnQ7XG4gICAgICAgIGxldCBnb2xkID0gMDtcbiAgICAgICAgaWYgKG51bSA9PSAwKSB7XG4gICAgICAgICAgICBnb2xkID0gMTA7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtID09IDEpIHtcbiAgICAgICAgICAgIGdvbGQgPSAyMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdvbGQgPSA0MDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ29sZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIFNldExpbWl0VHh0KHR4dDogZmd1aS5HVGV4dEZpZWxkLCBjb250ZW50OiBzdHJpbmcsIGxlbmd0aCA9IDYpIHtcbiAgICAgICAgaWYgKHR4dCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0eHQudGV4dCA9IHRoaXMuZ2V0Tmlja05hbWVTdWIoY29udGVudCwgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0Tmlja05hbWVTdWIoc3RyOiBzdHJpbmcsIF9sZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnN0ckxlbmd0aChzdHIpIDw9IF9sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVzU3RyID0gXCJcIjtcbiAgICAgICAgbGV0IGNudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmNoYXJDb2RlQXQoaSkgPiAyNTUpIHtcbiAgICAgICAgICAgICAgICBjbnQgKz0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzU3RyICs9IHN0ci5zdWJzdHJpbmcoaSwgaSArIDEpO1xuXG4gICAgICAgICAgICBpZiAoY250ID49IF9sZW5ndGgpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNTdHI7XG4gICAgfVxuICAgIHB1YmxpYyBzdHJMZW5ndGgoc3RyKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIGNudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmNoYXJDb2RlQXQoaSkgPiAyNTUpXG4gICAgICAgICAgICAgICAgY250ICs9IDI7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY250Kys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNudDtcbiAgICB9XG59Il19
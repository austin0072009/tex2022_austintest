import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import { PlayerInfoSD } from "../../../../Script/BaseFrame/cs_base";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import F_TexasViewCtr from "../Contrl/F_TexasViewCtr";
import { Texas } from "../Model/Texas";
import { TexasLanguage } from "../Model/TexasLanguage";
import TexasGiftItem from "./TexasGiftItem";
import TexasUserComp from "./TexasUserComp";


export default class UserInfoComp extends ViewBase {
    public ui_give_btn: fgui.GButton = null;
    public ui_UserHead: fgui.GComponent = null;
    public headImage: fgui.GLoader = null;
    public ui_VIPFrame: fgui.GLoader = null;
    public ui_txtName: fgui.GTextField = null;//EmojiText
    public ui_txtUserId: fgui.GTextField = null;//EmojiText
    // public ui_txtCommentDesc:fgui.GTextField = null;
    public ui_playbackBg: fgui.GButton = null;
    public ui_txtPlayback: fgui.GTextField = null;
    public ui_txtMute: fgui.GTextField = null;
    public ui_ImageMute: fgui.GButton = null;
    public ui_ImageComment: fgui.GLoader = null;
    // public ui_txtComment:fgui.GTextField = null; //备注
    public ui_txtTotalPaiju: fgui.GTextField = null;
    public ui_txtTotalCount: fgui.GTextField = null;
    public ui_txtWinRate: fgui.GTextField = null;
    public ui_txtOpenRate: fgui.GTextField = null;
    // public ui_txtWinCount:fgui.GTextField = null;
    // public ui_txtFailCount:fgui.GTextField = null;
    // public ui_txtDrawCount:fgui.GTextField = null;

    // public ui_imgWinRate:fgui.GLoader = null;
    // public ui_imgOpenRate:fgui.GLoader = null;
    public ui_btnClose_userInfo: fgui.GButton = null;

    public ui_ListChatEmoj: fgui.GList = null;
    // public ui_chatEmojCell: fgui.GButton = null;
    public ui_inputText: fgui.GTextInput = null;

    public ui_txtTitle: fgui.GTextField = null;
    public ui_playbackTxt: fgui.GTextField = null;
    // public ui_beizhu_Ph:fgui.GTextField = null;
    public ui_give_txt: fgui.GTextField = null;
    // public ui_zhankuangTxt:fgui.GTextField = null;
    public ui_pjzsTxt: fgui.GTextField = null;
    public ui_zssTxt: fgui.GTextField = null;
    public ui_winRateTxt: fgui.GTextField = null;
    public ui_rclTxt: fgui.GTextField = null;
    // public ui_zsTitle:fgui.GTextField = null;

    public ui_tick_btn: fgui.GButton = null;
    public ui_forceSitUp_btn: fgui.GButton = null;
    public ui_tick_Text: fgui.GTextField = null;
    public ui_forceSitUp_Text: fgui.GTextField = null;

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
    public ui_remark_btn: fgui.GButton = null;

    public ui_btnEmoji1: fgui.GButton = null;
    public ui_btnEmoji2: fgui.GButton = null;
    public ui_btnEmoji3: fgui.GButton = null;

    //举报相关
    public ui_userJubao: fgui.GButton = null;//举报
    public ui_jubaoPanel: fgui.GComponent = null;//举报界面
    public ui_btnjb_Close: fgui.GButton = null;
    public ui_jb_UserHead: fgui.GComponent = null;
    public jb_headImage: fgui.GLoader = null;
    public ui_jb_txtName: fgui.GTextField = null;
    public ui_jb_txtUserID: fgui.GTextField = null;
    public ui_jb_inputType: fgui.GTextInput = null;//举报标题
    public ui_jb_inputContent: fgui.GTextInput = null;//举报内容
    public ui_btnJubaoOK: fgui.GButton = null;
    public ui_btnJubaoClose: fgui.GButton = null;
    public ui_jb_TxtNum: fgui.GTextInput = null;

    private u: PlayerInfoSD;
    private isTexas: boolean;
    private onLoadEnd: boolean = false;


    /// <summary>
    /// 初始化
    /// </summary>
    public MyStart(u: PlayerInfoSD = null, serverPos: number = null) {
        this.mystart = true;
        this.u = u;
        this.userPos = serverPos;
        if (this.onLoadEnd) {
            this.MyStartEx();
        }
    }

    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) {
            this.MyStartEx();
        }
    }

    AutoSetGoProperty() { }

    MyStartEx() {
        if (this.ui_give_btn == null) {
            super.AutoSetGoProperty();
            this.InitEvents();
            this.InitUIChatEmoj();
        }
        this.isTexas = F_TexasViewCtr.instance.Model.gameid == 51;
        this.InitLanguage();
        this.Hide();
        if (this.u != null) this.show(this.u, this.userPos)
    }

    Hide() {
        this.node.active = false;
        super.Hide();
    }

    public InitLanguage() {
        // this.ui_txtTitle.text = "玩家信息";
        // this.ui_playbackTxt.text = "回放";
        // this.ui_beizhu_Ph.text = "备注名和打法标记";
        this.ui_give_txt.text = "赠  送";
        // this.ui_zhankuangTxt.text = "个人战况";
        this.ui_pjzsTxt.text = "牌局总数";
        this.ui_zssTxt.text = "总手数";
        this.ui_winRateTxt.text = "胜率";
        this.ui_rclTxt.text = this.isTexas ? "入池率" : "翻牌率";//入池率 翻牌率
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
    }
    private InitEvents() {
        this.ui_playbackBg.onClick(() => {
            //Debug.LogError("回放");
            if (this.userPos <= 0) return;
            let tempAudio: cc.AudioClip = null;
            if (this.isTexas) {
                let user: TexasUserComp = F_TexasViewCtr.instance.view._bftable.GetUserByPos(this.userPos);
                if (user.self) {
                    // tempAudio = Common_SecCtr.instance.Model.selfAudio;ImageComment
                } else {
                    tempAudio = user != null ? user.tempAudio : null;
                }

            } else {
                // WhirlUserComp user = F_WhirlViewCtr.instance.view._bftable.GetUserByPos (this.userPos);
                // if (user.self) {
                //     tempAudio = Common_SecCtr.instance.Model.selfAudio;
                // } else {
                //     tempAudio = user != null ? user.tempAudio : null;
                // }

            }
            if (tempAudio == null) {
                // CommonCtr.instance.ShowTipLabel (LanguageConfig.getLanguageById(1614), true);//
            } else {
                // AudioManager.Singleton.playChatVoice (tempAudio, -1);
            }
        });

        this.ui_ImageMute.onClick(() => {
            //Debug.LogError("静音");

            if (this.u != null && (this.isTexas ? F_TexasViewCtr.instance.Model.GetUserIsMute(this.u.userid) : F_TexasViewCtr.instance.Model.GetUserIsMute(this.u.userid))) {
                this.EnableMuteUser(false);
            } else {
                this.EnableMuteUser(true);
            }
        });

        this.ui_ImageComment.onClick(() => {
            if (this.u.userid == F_TexasViewCtr.instance.Model.mPlayerModel.userid) return;
            // this.ShowRemarkPanel();
            this.ui_inputText.requestFocus();
        });
        // this.ui_remark_btn.onClick(() => {
        //     if (this.u.userid == F_TexasViewCtr.instance.Model.mPlayerModel.userid) return;
        //     this.ShowRemarkPanel();
        // });
        this.ui_remark_btn.onClick(() => {
            if (this.u.userid == F_TexasViewCtr.instance.Model.mPlayerModel.userid) return;
            this.ShowRemarkPanel();
        });
        // this.ui_Closeremark_Btn.onClick(() => {
        //     this.ui_RemarkPanel.visible = false;
        // });

        this.ui_inputText.on(fgui.Event.TEXT_CHANGE, () => {
            if (this.ui_inputText.text.trim().length == 0) return;
            // {
            //     F_TexasViewCtr.instance.view.tipView.ShowTipLabel("备注失败，内容为空");
            // }
            F_TexasViewCtr.instance.cs_userremark_tex(this.u.userid, "", this.ui_inputText.text);
        });
        this.ui_btnClose_userInfo.onClick(() => {
            this.Hide();
        });
        // this.ui_remarkName_InputField.maxLength = 0;
        let events: cc.Component.EventHandler[] = [];
        let ev = new cc.Component.EventHandler();
        // ev.target = this.ui_remarkName_InputField.node;
        ev.handler = "SetRemarkName";
        ev.component = this.fguiComponent.name;
        events.push(ev);
        // this.ui_remarkName_InputField._editBox.textChanged = events;//.emitEvents(this.SetRemarkName);

        // this.ui_sign_InputField.maxLength = 0;
        let events2: cc.Component.EventHandler[] = [];
        let ev2 = new cc.Component.EventHandler();
        // ev2.target = this.ui_remarkName_InputField.node;
        // ev2.handler = "SetRemarkDafa";
        // ev2.component = this.fguiComponent.name;
        // events2.push(ev2);
        // this.ui_sign_InputField._editBox.textChanged = events2; //(this.SetRemarkDafa);

        this.ui_give_btn.visible = false;

        this.ui_tick_btn.onClick(() => {
            this.Hide();
            F_TexasViewCtr.instance.cs_tickuser_tex(this.u.userid, 2);
        });
        this.ui_forceSitUp_btn.onClick(() => {
            this.Hide();
            F_TexasViewCtr.instance.cs_tickuser_tex(this.u.userid, 1);
        });

        this.ui_btnEmoji1.getController("isOn").setSelectedIndex(1);
        this.ui_btnEmoji1.onClick(() => {
            this.ui_btnEmoji1.getController("isOn").setSelectedIndex(1);
            this.ui_btnEmoji2.getController("isOn").setSelectedIndex(0);
            this.ui_btnEmoji3.getController("isOn").setSelectedIndex(0);
        });
        this.ui_btnEmoji2.onClick(() => {
            this.ui_btnEmoji1.getController("isOn").setSelectedIndex(0);
            this.ui_btnEmoji2.getController("isOn").setSelectedIndex(1);
            this.ui_btnEmoji3.getController("isOn").setSelectedIndex(0);
        });
        this.ui_btnEmoji3.onClick(() => {
            this.ui_btnEmoji1.getController("isOn").setSelectedIndex(0);
            this.ui_btnEmoji2.getController("isOn").setSelectedIndex(0);
            this.ui_btnEmoji3.getController("isOn").setSelectedIndex(1);
        });

        this.ui_userJubao.onClick(() => {
            this.ShowJubaoPanel();
        });

        this.ui_btnjb_Close.onClick(() => {
            this.ui_jubaoPanel.visible = false;

        });

        this.ui_btnJubaoOK.onClick(() => {
            F_TexasViewCtr.instance.Model.jubaoType = 0;
            let title = this.ui_jb_inputType.text;
            let content = this.ui_jb_inputContent.text;
            if (title.trim() == "" || content.trim() == "") {
                F_TexasViewCtr.instance.view.tipView.ShowTipLabel(TexasLanguage.getLanguageById(180017));//举报标题和内容不能为空 
                return;
            }
            F_TexasViewCtr.instance.view.tipView.ShowTip("您将" + TexasLanguage.getLanguageById(2092) + this.getJubaoGold() + TexasLanguage.getLanguageById(180029) + ",是否" + TexasLanguage.getLanguageById(180019) + "？", () => {//消耗,金币.举报
                // F_TexasViewCtr.instance.cs_gamereport_tex(this.getJubaoGold());
                this.PostReportPra();
                this.ui_jubaoPanel.visible = false;
            }, () => {

            }, TexasLanguage.getLanguageById(180019), TexasLanguage.getLanguageById(1393));//"举报" ,取消



        });
        this.ui_btnJubaoClose.onClick(() => {
            this.ui_jubaoPanel.visible = false;
        });
    }
    private SetRemarkName(str: string) {
        console.log("SetRemarkName - 输入文本：" + str)
        str = this.getNickNameSub(str, 16);
        let arr = this.strLength(str);
        // this.ui_remarkName_InputField.text = this.ui_re_EmojiText.text = str;
        // this.ui_remarkNameNum.text = `(${arr}/16)`;
    }
    private SetRemarkDafa(str: string) {
        console.log("SetRemarkDafa - 输入文本：" + str)
        str = this.getNickNameSub(str, 40);
        let arr = this.strLength(str);
        // this.ui_sign_InputField.text = this.ui_si_EmojiText.text = str;
        // this.ui_signNum.text = `(${arr}/40)`;
    }
    private EnableMuteUser(isMute: boolean) {
        if (this.isTexas)
            F_TexasViewCtr.instance.Model.EnableMuteUser(this.u.userid, isMute);
        else
            F_TexasViewCtr.instance.Model.EnableMuteUser(this.u.userid, isMute);
        // let txt:UIGradient = this.ui_txtMute.gameObject.getOrAddComponent<UIGradient> ();
        if (this.ui_txtMute) this.ui_txtMute.visible = isMute;
        if (this.ui_ImageMute) this.ui_ImageMute.getChild("Image").asLoader.url = "ui://texas/" + (isMute ? "jingyin" : "dakaishengyin"); //Res.Singleton.SetImageSprite (ui_ImageMute, "whirl_userInfo", isMute ? "jingyin" : "dakaishengyin");

    }
    private userPos = 0;
    public show(u: PlayerInfoSD, serverPos: number) {
        this.node.active = true;
        super.Show();
        this.userPos = serverPos;
        this.UpdateData(u);
    }
    public updateInfo(u: PlayerInfoSD, serverPos: number) {
        this.userPos = serverPos;
        this.UpdateData(u);
    }
    private headIcon: string = null;
    private UpdateData(u: PlayerInfoSD) {
        this.u = u;
        if (this.u == null) { return; }
        if (this.isTexas) {
            this.EnableMuteUser(F_TexasViewCtr.instance.Model.GetUserIsMute(this.u.userid));
            this.ui_tick_btn.visible = (u.userid != F_TexasViewCtr.instance.Model.mPlayerModel.userid && F_TexasViewCtr.instance.Model.ownnerid == F_TexasViewCtr.instance.Model.mPlayerModel.userid);
            this.ui_forceSitUp_btn.visible = (this.ui_tick_btn.visible);
        }
        else {
            this.EnableMuteUser(F_TexasViewCtr.instance.Model.GetUserIsMute(u.userid));
        }
        let allCount = u.cinfo.winc + u.cinfo.failc + u.cinfo.dc;
        let winRate = allCount > 0 ? u.cinfo.winc / allCount : 0.00;

        //点击旁观玩头像
        if (this.userPos <= 0) {
            this.ui_tick_btn.visible = false;
            this.ui_forceSitUp_btn.visible = false;
        }
        UIUtil.ImageGreyToggle(this.ui_playbackBg, this.userPos <= 0);


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
        if (u.uremark != null && u.uremark.playRemark != "" && u.userid != F_TexasViewCtr.instance.Model.mPlayerModel.userid) {
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
        } else {
            this.ui_txtOpenRate.text = (u.cinfo.fr / allCount * 100.0).toFixed(2) + "%";
        }

        this.ui_txtTotalPaiju.text = u.cinfo.tablenum.toString();
        // this.ui_txtWinCount.text = "获胜:[color=#ffffff]" + u.cinfo.winc.toString () + "[/color]";//获胜
        // this.ui_txtFailCount.text = "失败:[color=#ffffff]" + u.cinfo.failc.toString () + "[/color]";//失败
        // this.ui_txtDrawCount.text = "平局:[color=#ffffff]" + u.cinfo.dc.toString () + "[/color]";//平局


        this.headIcon = u.wechat.wicon;
        UIUtil.loadImage(this.headImage, this.headIcon);
        UIUtil.loadImage(this.ui_VIPFrame, "VIP" + this.u._vlv, "Texas");
        UIUtil.loadImage(this.jb_headImage, this.headIcon);
        // UIUtil.SetHeadImagURL (ui_headImage, headIcon, false, (id) => {
        //     return headIcon == id;
        // }, true);

        this.ui_remark_btn.visible = (u.userid != F_TexasViewCtr.instance.Model.mPlayerModel.userid);
        // this.ui_txtComment.visible =(u.userid != F_TexasViewCtr.instance.Model.mPlayerModel.userid);

        if (u.userid == F_TexasViewCtr.instance.Model.mPlayerModel.userid) {
            this.ui_inputText.enabled = false;
        } else {
            this.ui_inputText.enabled = true;
        }


        this.ui_userJubao.visible = this.u.userid != F_TexasViewCtr.instance.Model.mPlayerModel.userid
    }
    public ShowRemarkPanel() {
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
    }
    private SetUserComment(name: string) {
        this.ui_inputText.text = name == "" ? "" : name;
    }

    public giftMap: Map<string, TexasGiftItem>;

    public InitUIChatEmoj() {
        fgui.UIObjectFactory.setExtension("ui://Texas/ChatEmojCell", TexasGiftItem);

        let go: fgui.GComponent;
        this.ui_ListChatEmoj.removeChildrenToPool();
        this.giftMap = new Map<string, TexasGiftItem>();
        let bundle = cc.assetManager.getBundle("GameCommon");
        bundle.loadDir("/Prefab", cc.Prefab, (err, prefad: cc.Prefab[]) => {
            if (!err) {
                for (let i = 0; i < prefad.length; i++) {
                    if (i == 1 || i == 2) {
                        continue;
                    }
                    let dont = ["hd_jiguanqiang01", "hd_jiguanqiang01_end", "gunFrom", "gunto", "hd_dapao01", "hd_dapao01_end"]
                    if (dont.indexOf(prefad[i].name) >= 0) {
                        continue;
                    }

                    if (Texas.giftConfig[prefad[i].name]) {
                        let itemCom = this.ui_ListChatEmoj.addItemFromPool().asCom;
                        this.SeChatEmojCellInfo(itemCom, Texas.giftConfig[prefad[i].name]);

                        let gifItem = itemCom as TexasGiftItem;
                        this.giftMap.set(prefad[i].name, gifItem);
                        gifItem.showGift(prefad[i])

                    }
                }
            }
        });

    }
    public playMusic(name: string) {
        let bundle = cc.assetManager.getBundle("GameCommon");
        bundle.loadDir("/gifbgm", cc.AudioClip, (err, clips: cc.AudioClip[]) => {

            for (let i = 0; i < clips.length; i++) {
                AudioManager.Singleton.add(clips[i].name, clips[i]);
                if (clips[i].name == name) {
                    AudioManager.Singleton.play("", clips[i].name);
                }

            }
        })
    }
    public getCreateAnimationNode(content: string): cc.Node {
        console.log(content);
        console.log(this.giftMap.get(content));
        let num = Number.parseInt(content);
        var gift: TexasGiftItem = null
        if (!Number.isNaN(num)) {
            //处理机器人发送礼物Index
            var index = 0;
            this.giftMap.forEach((value, key) => {
                if (index == num) gift = value;
                index++;
            });
        }
        else {
            gift = this.giftMap.get(content);
        }

        return gift == null ? null : gift.createAnimationNode();
    }
    public SeChatEmojCellInfo(ListChatEmoj: fgui.GComponent, index: any) {

        ListChatEmoj.getChild("imgEmoj").asLoader.url = "ui://Common/" + index.icon;
        // Res.Singleton.SetImageSprite (chatEmojCell.getChild ("imgEmoj").GetComponent<Image> (), "whirl_gift", "whirl_gift_" + index);
        //钻石消耗5
        ListChatEmoj.getChild("emojName").text = index.name;
        ListChatEmoj.getChild("Text").text = index.diam;
        ListChatEmoj.getChild("Button").onClick(() => {
            let posServer = this.isTexas ? F_TexasViewCtr.instance.Model._posServer : F_TexasViewCtr.instance.Model._posServer;
            if (this.userPos <= 0) {
                CommonCtr.instance.ShowTip("旁观状态下不能发送表情");//旁观状态下不能发送表情
                return;
            }
            if (this.userPos == posServer && Texas.giftConfig[index.icon]["moveAnima"] != "_") {
                CommonCtr.instance.ShowTip("不能对自己发送表情");//不能对自己发送表情
            } else {
                let gold = F_TexasViewCtr.instance.Model.mPlayerModel.gold;
                if (gold < 500) {
                    CommonCtr.instance.ShowTip("账号余额不足");//账号余额不足

                }
                else {
                    if (this.isTexas) {
                        if (F_TexasViewCtr.instance.view._bftable.myUser.IsWatch()) {
                            CommonCtr.instance.ShowTipLabel("旁观状态下不能发送表情");//旁观状态下不能发送表情
                            return;
                        }
                        if (F_TexasViewCtr.instance.view._bftable.myUser.IsWaitToTakeIn()) {
                            CommonCtr.instance.ShowTipLabel("占座状态下不能发送表情");//占座状态下不能发送表情
                            return;
                        }
                        this.Hide();
                        F_TexasViewCtr.instance.cs_chat(5, this.userPos, index.icon, (Number.parseFloat(index.diam) * 100));
                        this.scheduleOnce(() => {
                            this.playMusic(index.icon);
                        }, 0.4);
                    }
                    else {
                        if (F_TexasViewCtr.instance.view._bftable.myUser.IsWatch()) {
                            CommonCtr.instance.ShowTipLabel("旁观状态下不能发送表情");//旁观状态下不能发送表情
                            return;
                        }
                        this.Hide();
                        F_TexasViewCtr.instance.cs_chat(5, this.userPos, index.icon, (Number.parseFloat(index.diam) * 100));
                        this.scheduleOnce(() => {
                            this.playMusic(index.icon);
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

    }

    //举报
    public ShowJubaoPanel() {
        this.ui_jubaoPanel.visible = true;
    }

    //举报
    public PostReportPra() {
        let title = this.ui_jb_inputType.text;
        let content = this.ui_jb_inputContent.text;
        F_TexasViewCtr.instance.PostReportPra(0, "" + this.u.userid, content, title, this.getJubaoGold());
    }

    public getJubaoGold(): number {
        console.error("举报次数：" + F_TexasViewCtr.instance.Model.mPlayerModel.recount)
        let num = F_TexasViewCtr.instance.Model.mPlayerModel.recount;
        let gold = 0;
        if (num == 0) {
            gold = 10;
        } else if (num == 1) {
            gold = 20;
        } else {
            gold = 40;
        }
        return gold;
    }

    private SetLimitTxt(txt: fgui.GTextField, content: string, length = 6) {
        if (txt != null) {
            txt.text = this.getNickNameSub(content, length);
        }
    }
    public getNickNameSub(str: string, _length: number): string {
        if (this.strLength(str) <= _length) {
            return str;
        }

        let resStr = "";
        let cnt = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255) {
                cnt += 2;
            }
            else {
                cnt++;
            }
            resStr += str.substring(i, i + 1);

            if (cnt >= _length) break;
        }
        return resStr;
    }
    public strLength(str): number {
        var cnt = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255)
                cnt += 2;
            else
                cnt++;
        }
        return cnt;
    }
}
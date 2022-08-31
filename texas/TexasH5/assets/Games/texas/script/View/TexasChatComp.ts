import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { PlayerPrefs } from "../../../../Script/Common/UIUtil";
import F_TexasViewCtr from "../Contrl/F_TexasViewCtr";
import { TexasLanguage } from "../Model/TexasLanguage";


const { ccclass, property } = cc._decorator;

export default class TexasChatComp extends ViewBase {

    // public ui_ListChatEmoj:fgui.GList = null;
    public ui_ListChatSound: fgui.GList = null;
    // public ui_chatSoundCell:fgui.GButton = null;
    // public ui_ListchatRecord:fgui.GList = null;
    // public ui_chatRecordCell:fgui.GComponent = null;
    public static languageList: string[];
    public ui_btnClose_chat: fgui.GButton = null;
    // public ui_ChatNum:fgui.GTextField = null;

    // public ui_BtnSendChat:fgui.GButton = null;
    // public ui_ChatInputField:fgui.GTextInput = null;
    public ui_bg: fgui.GComponent = null;
    // public ui_SwitchDanmu:fgui.GButton = null;
    // public ui_recordToggle:fgui.GButton = null;
    // public ui_emojToggle:fgui.GButton = null;
    // public ui_danmuToggle:fgui.GButton = null;
    // public switchImage:fgui.GLoader=null;

    // public ui_danmuLabel1:fgui.GTextField = null;
    // public ui_danmuLabel:fgui.GTextField = null;
    // public ui_emojLabel1:fgui.GTextField = null;
    // public ui_emojLabel:fgui.GTextField = null;
    // public ui_recordLabel1:fgui.GTextField = null;
    // public ui_recordLabel:fgui.GTextField = null;

    private onLoadEnd = false;
    public MyStart() {
        this.mystart = true;
        if (this.onLoadEnd) this.MyStartEx();

    }

    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }
    MyStartEx() {
        if (this.ui_ListChatSound == null) {
            super.AutoSetGoProperty();
            this.InitEvents();
        }
        this.InitLanguage();
        this.Init();
        this.Hide();
    }

    AutoSetGoProperty() { }

    public InitLanguage() {
        // this.ui_danmuLabel1.text = "弹幕 2";
        // this.ui_danmuLabel.text = "弹幕 2";
        // this.ui_emojLabel1.text = "免费表情"
        // this.ui_emojLabel.text = "免费表情"
        // this.ui_recordLabel1.text = "弹幕记录"
        // this.ui_recordLabel.text = "弹幕记录"
    }
    public Init() {
        TexasChatComp.languageList = [];
        TexasChatComp.languageList.push(TexasLanguage.getLanguageById(1413));//少一些套路，多一些真诚！
        TexasChatComp.languageList.push(TexasLanguage.getLanguageById(1414));//我不偷鸡，但绝对不要偷我鸡！
        TexasChatComp.languageList.push(TexasLanguage.getLanguageById(1415));//快点吧，我等的花儿都谢了！
        TexasChatComp.languageList.push(TexasLanguage.getLanguageById(1416));//软的怕硬的，硬的怕不要命的！
        TexasChatComp.languageList.push(TexasLanguage.getLanguageById(1417));//自己讲的故事，含泪也要演完！
        TexasChatComp.languageList.push(TexasLanguage.getLanguageById(1418));//一次次的弃牌，只是为了下一次的Allin！
        TexasChatComp.languageList.push(TexasLanguage.getLanguageById(1419));//你的水平与你扔掉的AA的次数成正比！
        TexasChatComp.languageList.push(TexasLanguage.getLanguageById(1420));//撑死胆大的，饿死胆小的！
        TexasChatComp.languageList.push(TexasLanguage.getLanguageById(1421));//这一幕好像似曾相识！
        TexasChatComp.languageList.push(TexasLanguage.getLanguageById(1422));//论成败人生豪迈，大不了从头再来！

        // this.switchImage = this.ui_SwitchDanmu.getChild("Image").asLoader;
        // let danmu = PlayerPrefs.GetInt("key_Danmu", 1);
        // UIUtil.loadImage(this.switchImage, (danmu == 0 ? "danmu_off" : "danmu"),"Texs");
        this.InitUIChatSound(TexasChatComp.languageList);
        // this.InitUIChatEmoj();

        // F_TexasViewCtr.instance.cs_chatlog();
    }

    Hide() {
        this.fguiComponent.visible = false;
        this.node.active = false;
    }

    public InitEvents() {
        this.ui_btnClose_chat.clearClick();
        this.ui_btnClose_chat.onClick(() => {
            this.Hide();
        });

        // this.ui_BtnSendChat.onClick(() =>
        // {
        //     if (F_TexasViewCtr.instance.view._bftable.myUser.IsWatch())
        //     {
        //         CommonCtr.instance.ShowTipLabel("旁观状态下不能发送弹幕");//旁观状态下不能发送弹幕
        //         return;
        //     }
        //     if (F_TexasViewCtr.instance.view._bftable.myUser.IsWaitToTakeIn())
        //     {
        //         CommonCtr.instance.ShowTipLabel("占座状态下不能发送弹幕");//占座状态下不能发送弹幕
        //         return;
        //     }
        //     if (PlayerPrefs.GetInt("key_Danmu", 1) == 0)
        //     {
        //         CommonCtr.instance.ShowTipLabel("弹幕已关闭,不可输入");//弹幕已关闭,不可输入
        //         return;
        //     }
        //     if (this.ui_ChatInputField.text == null || this.ui_ChatInputField.text.length <= 0)
        //     {
        //         CommonCtr.instance.ShowTipLabel("聊天内容不能为空！");//聊天内容不能为空！
        //         return;
        //     }
        //     let model = F_TexasViewCtr.instance.Model;
        //     F_TexasViewCtr.instance.cs_chat(6, 0, this.ui_ChatInputField.text);
        //     this.ui_ChatInputField.text = "";
        //     this.Hide();
        // });

        // this.ui_SwitchDanmu.onClick(() => 
        // {
        //     if(PlayerPrefs.GetInt("key_Danmu",-1) == -1)
        //     {
        //         PlayerPrefs.SetInt("key_Danmu", 0);
        //         F_TexasViewCtr.instance.view.tipView.ShowTipLabel("弹幕已关闭");//弹幕已关闭
        //         UIUtil.loadImage(this.switchImage,"danmu_off","Texas");
        //     }
        //     else
        //     {
        //         let danmu = PlayerPrefs.GetInt("key_Danmu",0) == 0 ? 1 : 0;
        //         PlayerPrefs.SetInt("key_Danmu", danmu);
        //         F_TexasViewCtr.instance.view.tipView.ShowTipLabel(danmu == 0 ? "弹幕已关闭" : "弹幕已打开");//弹幕已关闭 弹幕已打开
        //         UIUtil.loadImage(this.switchImage, danmu == 0 ? "danmu_off" : "danmu","Texas");
        //     }
        // });

        // this.ui_recordToggle.onClick(()=>{
        //     if(this.getToggle(this.ui_recordToggle) == false) F_TexasViewCtr.instance.cs_chatlog();
        //     this.setToggle(this.ui_recordToggle,true);
        //     this.setToggle(this.ui_emojToggle,false);
        //     this.setToggle(this.ui_danmuToggle,false);
        //     this.fguiComponent.getController("type").setSelectedIndex(0);

        // });
        // this.ui_emojToggle.onClick(()=>{
        //     this.setToggle(this.ui_recordToggle,false);
        //     this.setToggle(this.ui_emojToggle,true);
        //     this.setToggle(this.ui_danmuToggle,false);
        //     this.fguiComponent.getController("type").setSelectedIndex(1);
        // });
        // this.ui_danmuToggle.onClick(()=>{
        //     this.setToggle(this.ui_recordToggle,false);
        //     this.setToggle(this.ui_emojToggle,false);
        //     this.setToggle(this.ui_danmuToggle,true);
        //     this.fguiComponent.getController("type").setSelectedIndex(2);
        // });
    }
    private SelectPage(isChatEmoj: boolean) {
        this.ShowChatSound(!isChatEmoj);
        this.ShowChatEmoj(isChatEmoj);
        //设置图片
    }


    public ShowChatSound(isShow: boolean) {
        this.ui_ListChatSound.visible = isShow;
    }

    public ShowChatEmoj(isShow: boolean) {
        // this.ui_ListChatEmoj.visible = isShow;
    }

    //打开界面  

    public Show() {
        super.Show();
        // this.ui_emojToggle.visible = (!F_TexasViewCtr.instance.view._bftable.myUser.IsWatch() && !F_TexasViewCtr.instance.view._bftable.myUser.IsWaitToTakeIn());
        // if (F_TexasViewCtr.instance.view._bftable.myUser.IsWatch() || F_TexasViewCtr.instance.view._bftable.myUser.IsWaitToTakeIn())
        // {
        //     if (this.getToggle(this.ui_emojToggle))
        //     {
        //         this.setToggle(this.ui_emojToggle, false);
        //         // this.ui_emojToggle.onValueChanged.Invoke(false);
        //         this.setToggle(this.ui_danmuToggle, false);
        //         // this.ui_danmuToggle.onValueChanged.Invoke(true);
        //     }
        // }
    }

    private getToggle(button: fgui.GButton): boolean {
        let index = button.getController("isOn").selectedIndex;
        return index == 0 ? false : true;
    }

    private setToggle(button: fgui.GButton, ison: boolean) {
        button.getController("isOn").setSelectedIndex(ison ? 1 : 0);
    }

    public InitUIChatSound(tList: string[]) {
        if (tList == null || tList.length == 0) return;
        this.ui_ListChatSound.removeChildrenToPool();
        let go: fgui.GComponent = null;
        for (var i = 0; i < tList.length; i++) {
            go = this.ui_ListChatSound.addItemFromPool().asCom;
            this.SetChatSoundCellInfo(go, tList[i], i);
        }
    }


    public SetChatSoundCellInfo(chatSoundCell: fgui.GComponent, sayStr: string, index: number) {
        let txtChat: fgui.GTextField = chatSoundCell.getChild("txtChat").asTextField;
        txtChat.text = (index + 1) + "." + sayStr;
        chatSoundCell.onClick(() => {
            if (F_TexasViewCtr.instance.view._bftable.myUser.IsWatch()) {
                CommonCtr.instance.ShowTipLabel(TexasLanguage.getLanguageById(1602));//旁观状态下不能发送弹幕
                return;
            }
            if (F_TexasViewCtr.instance.view._bftable.myUser.IsWaitToTakeIn()) {
                CommonCtr.instance.ShowTipLabel(TexasLanguage.getLanguageById(2189));//占座状态下不能发送弹幕
                return;
            }
            if (PlayerPrefs.GetInt("key_Danmu", 1) == 0) {
                CommonCtr.instance.ShowTipLabel(TexasLanguage.getLanguageById(1605));//弹幕已关闭
                return;
            }
            if (F_TexasViewCtr.instance.Model.mPlayerModel.gold < 200) {
                CommonCtr.instance.ShowTipLabel(TexasLanguage.getLanguageById(1601));//钻石不足
                return;
            }

            F_TexasViewCtr.instance.cs_chat(6, 0, sayStr, 0);
            // F_TexasViewCtr.instance.cs_chat(model.gameid, model.levelid, model.tableid, 6, sayStr);
            this.Hide();
            /* 方便测试
            F_WhirlViewCtr.instance.view.HandleChat(testId,4,index.ToString());
            testId++;
            if (testId > 8)
            {
                testId = 1;
            }
            */
        });
    }

    // public InitUIChatEmoj()
    // {
    //     let go:fgui.GComponent = null;

    //     for (var i = 0; i < 20; i++)
    //     {
    //         go = this.ui_ListChatEmoj.addItemFromPool().asCom;
    //         this.SeChatEmojCellInfo(go, i + 1);
    //     }
    // }

    // public SeChatEmojCellInfo(chatEmojCell:fgui.GComponent, index:number)
    // {
    //     UIUtil.loadImage(chatEmojCell.getChild("imgEmoj").asLoader, "face" + index, "Texas");

    //     chatEmojCell.onClick(() =>
    //     {
    //         let model = F_TexasViewCtr.instance.Model;
    //         F_TexasViewCtr.instance.cs_chat(2, 0, (index - 1).toString());
    //         this.Hide();

    //         /*方便测试
    //         F_WhirlViewCtr.instance.view.HandleChat(testId, 2, index.ToString());
    //         testId++;
    //         if (testId > 8)
    //         {
    //             testId = 1;
    //         }
    //         */
    //     });
    // }

    private Clear() {

    }
    // public showLog(data:sc_chatlog)
    // {
    //     this.ui_ListchatRecord.removeChildrenToPool();
    //     if (data.data != null && data.data.length > 0)
    //     {            
    //         for (var i = 0; i < data.data.length; ++i)
    //         {
    //             var temp = data.data[i];
    //             var go = this.ui_ListchatRecord.addItemFromPool().asCom;                
    //             let uiText = go.getChild("Text").asTextField;
    //             let uiText2 = go.getChild("Text2").asTextField;
    //             if(temp.type == 1)
    //             {
    //                 uiText.text = `${temp.ptime} ${temp.username}:  `;
    //                 uiText2.text = temp.content;
    //             }
    //             else
    //             {
    //                 uiText.text = `${temp.ptime} ${temp.username}:  `;//发送了一条语音
    //                 uiText2.text = "发送了一条语音";
    //             }
    //             uiText.text = uiText.text.replace(" ", "\u00A0");
    //             uiText2.text = uiText.text.replace(" ", "\u00A0");
    //             // ToolsEx.FixTextBoundsToItsContent(uiText, false, true);
    //         }
    //     }
    // }
}
"use strict";
cc._RF.push(module, 'e286eGlxV5OoY2LyJW0xjY7', 'TexasChatComp');
// Games/texas/script/View/TexasChatComp.ts

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
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TexasChatComp = /** @class */ (function (_super) {
    __extends(TexasChatComp, _super);
    function TexasChatComp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // public ui_ListChatEmoj:fgui.GList = null;
        _this.ui_ListChatSound = null;
        _this.ui_btnClose_chat = null;
        // public ui_ChatNum:fgui.GTextField = null;
        // public ui_BtnSendChat:fgui.GButton = null;
        // public ui_ChatInputField:fgui.GTextInput = null;
        _this.ui_bg = null;
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
        _this.onLoadEnd = false;
        return _this;
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
    TexasChatComp.prototype.MyStart = function () {
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    TexasChatComp.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    TexasChatComp.prototype.MyStartEx = function () {
        if (this.ui_ListChatSound == null) {
            _super.prototype.AutoSetGoProperty.call(this);
            this.InitEvents();
        }
        this.InitLanguage();
        this.Init();
        this.Hide();
    };
    TexasChatComp.prototype.AutoSetGoProperty = function () { };
    TexasChatComp.prototype.InitLanguage = function () {
        // this.ui_danmuLabel1.text = "弹幕 2";
        // this.ui_danmuLabel.text = "弹幕 2";
        // this.ui_emojLabel1.text = "免费表情"
        // this.ui_emojLabel.text = "免费表情"
        // this.ui_recordLabel1.text = "弹幕记录"
        // this.ui_recordLabel.text = "弹幕记录"
    };
    TexasChatComp.prototype.Init = function () {
        TexasChatComp.languageList = [];
        TexasChatComp.languageList.push(TexasLanguage_1.TexasLanguage.getLanguageById(1413)); //少一些套路，多一些真诚！
        TexasChatComp.languageList.push(TexasLanguage_1.TexasLanguage.getLanguageById(1414)); //我不偷鸡，但绝对不要偷我鸡！
        TexasChatComp.languageList.push(TexasLanguage_1.TexasLanguage.getLanguageById(1415)); //快点吧，我等的花儿都谢了！
        TexasChatComp.languageList.push(TexasLanguage_1.TexasLanguage.getLanguageById(1416)); //软的怕硬的，硬的怕不要命的！
        TexasChatComp.languageList.push(TexasLanguage_1.TexasLanguage.getLanguageById(1417)); //自己讲的故事，含泪也要演完！
        TexasChatComp.languageList.push(TexasLanguage_1.TexasLanguage.getLanguageById(1418)); //一次次的弃牌，只是为了下一次的Allin！
        TexasChatComp.languageList.push(TexasLanguage_1.TexasLanguage.getLanguageById(1419)); //你的水平与你扔掉的AA的次数成正比！
        TexasChatComp.languageList.push(TexasLanguage_1.TexasLanguage.getLanguageById(1420)); //撑死胆大的，饿死胆小的！
        TexasChatComp.languageList.push(TexasLanguage_1.TexasLanguage.getLanguageById(1421)); //这一幕好像似曾相识！
        TexasChatComp.languageList.push(TexasLanguage_1.TexasLanguage.getLanguageById(1422)); //论成败人生豪迈，大不了从头再来！
        // this.switchImage = this.ui_SwitchDanmu.getChild("Image").asLoader;
        // let danmu = PlayerPrefs.GetInt("key_Danmu", 1);
        // UIUtil.loadImage(this.switchImage, (danmu == 0 ? "danmu_off" : "danmu"),"Texs");
        this.InitUIChatSound(TexasChatComp.languageList);
        // this.InitUIChatEmoj();
        // F_TexasViewCtr.instance.cs_chatlog();
    };
    TexasChatComp.prototype.Hide = function () {
        this.fguiComponent.visible = false;
        this.node.active = false;
    };
    TexasChatComp.prototype.InitEvents = function () {
        var _this = this;
        this.ui_btnClose_chat.clearClick();
        this.ui_btnClose_chat.onClick(function () {
            _this.Hide();
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
    };
    TexasChatComp.prototype.SelectPage = function (isChatEmoj) {
        this.ShowChatSound(!isChatEmoj);
        this.ShowChatEmoj(isChatEmoj);
        //设置图片
    };
    TexasChatComp.prototype.ShowChatSound = function (isShow) {
        this.ui_ListChatSound.visible = isShow;
    };
    TexasChatComp.prototype.ShowChatEmoj = function (isShow) {
        // this.ui_ListChatEmoj.visible = isShow;
    };
    //打开界面  
    TexasChatComp.prototype.Show = function () {
        _super.prototype.Show.call(this);
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
    };
    TexasChatComp.prototype.getToggle = function (button) {
        var index = button.getController("isOn").selectedIndex;
        return index == 0 ? false : true;
    };
    TexasChatComp.prototype.setToggle = function (button, ison) {
        button.getController("isOn").setSelectedIndex(ison ? 1 : 0);
    };
    TexasChatComp.prototype.InitUIChatSound = function (tList) {
        if (tList == null || tList.length == 0)
            return;
        this.ui_ListChatSound.removeChildrenToPool();
        var go = null;
        for (var i = 0; i < tList.length; i++) {
            go = this.ui_ListChatSound.addItemFromPool().asCom;
            this.SetChatSoundCellInfo(go, tList[i], i);
        }
    };
    TexasChatComp.prototype.SetChatSoundCellInfo = function (chatSoundCell, sayStr, index) {
        var _this = this;
        var txtChat = chatSoundCell.getChild("txtChat").asTextField;
        txtChat.text = (index + 1) + "." + sayStr;
        chatSoundCell.onClick(function () {
            if (F_TexasViewCtr_1.default.instance.view._bftable.myUser.IsWatch()) {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1602)); //旁观状态下不能发送弹幕
                return;
            }
            if (F_TexasViewCtr_1.default.instance.view._bftable.myUser.IsWaitToTakeIn()) {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(2189)); //占座状态下不能发送弹幕
                return;
            }
            if (UIUtil_1.PlayerPrefs.GetInt("key_Danmu", 1) == 0) {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1605)); //弹幕已关闭
                return;
            }
            if (F_TexasViewCtr_1.default.instance.Model.mPlayerModel.gold < 200) {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel(TexasLanguage_1.TexasLanguage.getLanguageById(1601)); //钻石不足
                return;
            }
            F_TexasViewCtr_1.default.instance.cs_chat(6, 0, sayStr, 0);
            // F_TexasViewCtr.instance.cs_chat(model.gameid, model.levelid, model.tableid, 6, sayStr);
            _this.Hide();
            /* 方便测试
            F_WhirlViewCtr.instance.view.HandleChat(testId,4,index.ToString());
            testId++;
            if (testId > 8)
            {
                testId = 1;
            }
            */
        });
    };
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
    TexasChatComp.prototype.Clear = function () {
    };
    return TexasChatComp;
}(ViewBase_1.default));
exports.default = TexasChatComp;

cc._RF.pop();
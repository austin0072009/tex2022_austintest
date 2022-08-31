
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TexasChatComp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFRleGFzQ2hhdENvbXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FLGtFQUE2RDtBQUM3RCwyREFBK0Q7QUFDL0QsMkRBQXNEO0FBQ3RELHdEQUF1RDtBQUdqRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEyQyxpQ0FBUTtJQUFuRDtRQUFBLHFFQWtUQztRQWhURyw0Q0FBNEM7UUFDckMsc0JBQWdCLEdBQWUsSUFBSSxDQUFDO1FBS3BDLHNCQUFnQixHQUFpQixJQUFJLENBQUM7UUFDN0MsNENBQTRDO1FBRTVDLDZDQUE2QztRQUM3QyxtREFBbUQ7UUFDNUMsV0FBSyxHQUFvQixJQUFJLENBQUM7UUFDckMsNkNBQTZDO1FBQzdDLDhDQUE4QztRQUM5Qyw0Q0FBNEM7UUFDNUMsNkNBQTZDO1FBQzdDLHdDQUF3QztRQUV4QyxnREFBZ0Q7UUFDaEQsK0NBQStDO1FBQy9DLCtDQUErQztRQUMvQyw4Q0FBOEM7UUFDOUMsaURBQWlEO1FBQ2pELGdEQUFnRDtRQUV4QyxlQUFTLEdBQUcsS0FBSyxDQUFDOztRQTRQMUIsa0NBQWtDO1FBQ2xDLElBQUk7UUFDSixxREFBcUQ7UUFDckQscURBQXFEO1FBQ3JELG9CQUFvQjtRQUNwQixxREFBcUQ7UUFDckQsWUFBWTtRQUNaLHVDQUF1QztRQUN2Qyx1RkFBdUY7UUFDdkYsNERBQTREO1FBQzVELDhEQUE4RDtRQUM5RCxpQ0FBaUM7UUFDakMsZ0JBQWdCO1FBQ2hCLHFFQUFxRTtRQUNyRSwrQ0FBK0M7UUFDL0MsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsOEVBQThFO1FBQzlFLDRDQUE0QztRQUM1QyxnQkFBZ0I7UUFDaEIsZ0VBQWdFO1FBQ2hFLGlFQUFp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RUksNkJBQUssR0FBYjtJQUVBLENBQUM7SUE0Qkwsb0JBQUM7QUFBRCxDQWxUQSxBQWtUQyxDQWxUMEMsa0JBQVEsR0FrVGxEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcbmltcG9ydCB7IFBsYXllclByZWZzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XG5pbXBvcnQgRl9UZXhhc1ZpZXdDdHIgZnJvbSBcIi4uL0NvbnRybC9GX1RleGFzVmlld0N0clwiO1xuaW1wb3J0IHsgVGV4YXNMYW5ndWFnZSB9IGZyb20gXCIuLi9Nb2RlbC9UZXhhc0xhbmd1YWdlXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4YXNDaGF0Q29tcCBleHRlbmRzIFZpZXdCYXNlIHtcblxuICAgIC8vIHB1YmxpYyB1aV9MaXN0Q2hhdEVtb2o6Zmd1aS5HTGlzdCA9IG51bGw7XG4gICAgcHVibGljIHVpX0xpc3RDaGF0U291bmQ6IGZndWkuR0xpc3QgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9jaGF0U291bmRDZWxsOmZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX0xpc3RjaGF0UmVjb3JkOmZndWkuR0xpc3QgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9jaGF0UmVjb3JkQ2VsbDpmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgbGFuZ3VhZ2VMaXN0OiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgdWlfYnRuQ2xvc2VfY2hhdDogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfQ2hhdE51bTpmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgLy8gcHVibGljIHVpX0J0blNlbmRDaGF0OmZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX0NoYXRJbnB1dEZpZWxkOmZndWkuR1RleHRJbnB1dCA9IG51bGw7XG4gICAgcHVibGljIHVpX2JnOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9Td2l0Y2hEYW5tdTpmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9yZWNvcmRUb2dnbGU6Zmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfZW1valRvZ2dsZTpmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9kYW5tdVRvZ2dsZTpmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIC8vIHB1YmxpYyBzd2l0Y2hJbWFnZTpmZ3VpLkdMb2FkZXI9bnVsbDtcblxuICAgIC8vIHB1YmxpYyB1aV9kYW5tdUxhYmVsMTpmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9kYW5tdUxhYmVsOmZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX2Vtb2pMYWJlbDE6Zmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICAvLyBwdWJsaWMgdWlfZW1vakxhYmVsOmZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgLy8gcHVibGljIHVpX3JlY29yZExhYmVsMTpmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIC8vIHB1YmxpYyB1aV9yZWNvcmRMYWJlbDpmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBvbkxvYWRFbmQgPSBmYWxzZTtcbiAgICBwdWJsaWMgTXlTdGFydCgpIHtcbiAgICAgICAgdGhpcy5teXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMub25Mb2FkRW5kKSB0aGlzLk15U3RhcnRFeCgpO1xuXG4gICAgfVxuXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLm9uTG9hZEVuZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm15c3RhcnQpIHRoaXMuTXlTdGFydEV4KCk7XG4gICAgfVxuICAgIE15U3RhcnRFeCgpIHtcbiAgICAgICAgaWYgKHRoaXMudWlfTGlzdENoYXRTb3VuZCA9PSBudWxsKSB7XG4gICAgICAgICAgICBzdXBlci5BdXRvU2V0R29Qcm9wZXJ0eSgpO1xuICAgICAgICAgICAgdGhpcy5Jbml0RXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Jbml0TGFuZ3VhZ2UoKTtcbiAgICAgICAgdGhpcy5Jbml0KCk7XG4gICAgICAgIHRoaXMuSGlkZSgpO1xuICAgIH1cblxuICAgIEF1dG9TZXRHb1Byb3BlcnR5KCkgeyB9XG5cbiAgICBwdWJsaWMgSW5pdExhbmd1YWdlKCkge1xuICAgICAgICAvLyB0aGlzLnVpX2Rhbm11TGFiZWwxLnRleHQgPSBcIuW8ueW5lSAyXCI7XG4gICAgICAgIC8vIHRoaXMudWlfZGFubXVMYWJlbC50ZXh0ID0gXCLlvLnluZUgMlwiO1xuICAgICAgICAvLyB0aGlzLnVpX2Vtb2pMYWJlbDEudGV4dCA9IFwi5YWN6LS56KGo5oOFXCJcbiAgICAgICAgLy8gdGhpcy51aV9lbW9qTGFiZWwudGV4dCA9IFwi5YWN6LS56KGo5oOFXCJcbiAgICAgICAgLy8gdGhpcy51aV9yZWNvcmRMYWJlbDEudGV4dCA9IFwi5by55bmV6K6w5b2VXCJcbiAgICAgICAgLy8gdGhpcy51aV9yZWNvcmRMYWJlbC50ZXh0ID0gXCLlvLnluZXorrDlvZVcIlxuICAgIH1cbiAgICBwdWJsaWMgSW5pdCgpIHtcbiAgICAgICAgVGV4YXNDaGF0Q29tcC5sYW5ndWFnZUxpc3QgPSBbXTtcbiAgICAgICAgVGV4YXNDaGF0Q29tcC5sYW5ndWFnZUxpc3QucHVzaChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDEzKSk7Ly/lsJHkuIDkupvlpZfot6/vvIzlpJrkuIDkupvnnJ/or5rvvIFcbiAgICAgICAgVGV4YXNDaGF0Q29tcC5sYW5ndWFnZUxpc3QucHVzaChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDE0KSk7Ly/miJHkuI3lgbfpuKHvvIzkvYbnu53lr7nkuI3opoHlgbfmiJHpuKHvvIFcbiAgICAgICAgVGV4YXNDaGF0Q29tcC5sYW5ndWFnZUxpc3QucHVzaChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDE1KSk7Ly/lv6vngrnlkKfvvIzmiJHnrYnnmoToirHlhL/pg73osKLkuobvvIFcbiAgICAgICAgVGV4YXNDaGF0Q29tcC5sYW5ndWFnZUxpc3QucHVzaChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDE2KSk7Ly/ova/nmoTmgJXnoaznmoTvvIznoaznmoTmgJXkuI3opoHlkb3nmoTvvIFcbiAgICAgICAgVGV4YXNDaGF0Q29tcC5sYW5ndWFnZUxpc3QucHVzaChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDE3KSk7Ly/oh6rlt7HorrLnmoTmlYXkuovvvIzlkKvms6rkuZ/opoHmvJTlrozvvIFcbiAgICAgICAgVGV4YXNDaGF0Q29tcC5sYW5ndWFnZUxpc3QucHVzaChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNDE4KSk7Ly/kuIDmrKHmrKHnmoTlvIPniYzvvIzlj6rmmK/kuLrkuobkuIvkuIDmrKHnmoRBbGxpbu+8gVxuICAgICAgICBUZXhhc0NoYXRDb21wLmxhbmd1YWdlTGlzdC5wdXNoKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE0MTkpKTsvL+S9oOeahOawtOW5s+S4juS9oOaJlOaOieeahEFB55qE5qyh5pWw5oiQ5q2j5q+U77yBXG4gICAgICAgIFRleGFzQ2hhdENvbXAubGFuZ3VhZ2VMaXN0LnB1c2goVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQyMCkpOy8v5pKR5q276IOG5aSn55qE77yM6aW/5q276IOG5bCP55qE77yBXG4gICAgICAgIFRleGFzQ2hhdENvbXAubGFuZ3VhZ2VMaXN0LnB1c2goVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQyMSkpOy8v6L+Z5LiA5bmV5aW95YOP5Ly85pu+55u46K+G77yBXG4gICAgICAgIFRleGFzQ2hhdENvbXAubGFuZ3VhZ2VMaXN0LnB1c2goVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTQyMikpOy8v6K665oiQ6LSl5Lq655Sf6LGq6L+I77yM5aSn5LiN5LqG5LuO5aS05YaN5p2l77yBXG5cbiAgICAgICAgLy8gdGhpcy5zd2l0Y2hJbWFnZSA9IHRoaXMudWlfU3dpdGNoRGFubXUuZ2V0Q2hpbGQoXCJJbWFnZVwiKS5hc0xvYWRlcjtcbiAgICAgICAgLy8gbGV0IGRhbm11ID0gUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X0Rhbm11XCIsIDEpO1xuICAgICAgICAvLyBVSVV0aWwubG9hZEltYWdlKHRoaXMuc3dpdGNoSW1hZ2UsIChkYW5tdSA9PSAwID8gXCJkYW5tdV9vZmZcIiA6IFwiZGFubXVcIiksXCJUZXhzXCIpO1xuICAgICAgICB0aGlzLkluaXRVSUNoYXRTb3VuZChUZXhhc0NoYXRDb21wLmxhbmd1YWdlTGlzdCk7XG4gICAgICAgIC8vIHRoaXMuSW5pdFVJQ2hhdEVtb2ooKTtcblxuICAgICAgICAvLyBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19jaGF0bG9nKCk7XG4gICAgfVxuXG4gICAgSGlkZSgpIHtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBJbml0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLnVpX2J0bkNsb3NlX2NoYXQuY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX2J0bkNsb3NlX2NoYXQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcy51aV9CdG5TZW5kQ2hhdC5vbkNsaWNrKCgpID0+XG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3Ll9iZnRhYmxlLm15VXNlci5Jc1dhdGNoKCkpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuaXgeingueKtuaAgeS4i+S4jeiDveWPkemAgeW8ueW5lVwiKTsvL+aXgeingueKtuaAgeS4i+S4jeiDveWPkemAgeW8ueW5lVxuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3Ll9iZnRhYmxlLm15VXNlci5Jc1dhaXRUb1Rha2VJbigpKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLljaDluqfnirbmgIHkuIvkuI3og73lj5HpgIHlvLnluZVcIik7Ly/ljaDluqfnirbmgIHkuIvkuI3og73lj5HpgIHlvLnluZVcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAoUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X0Rhbm11XCIsIDEpID09IDApXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuW8ueW5leW3suWFs+mXrSzkuI3lj6/ovpPlhaVcIik7Ly/lvLnluZXlt7LlhbPpl60s5LiN5Y+v6L6T5YWlXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudWlfQ2hhdElucHV0RmllbGQudGV4dCA9PSBudWxsIHx8IHRoaXMudWlfQ2hhdElucHV0RmllbGQudGV4dC5sZW5ndGggPD0gMClcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6IGK5aSp5YaF5a655LiN6IO95Li656m677yBXCIpOy8v6IGK5aSp5YaF5a655LiN6IO95Li656m677yBXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgbGV0IG1vZGVsID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWw7XG4gICAgICAgIC8vICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19jaGF0KDYsIDAsIHRoaXMudWlfQ2hhdElucHV0RmllbGQudGV4dCk7XG4gICAgICAgIC8vICAgICB0aGlzLnVpX0NoYXRJbnB1dEZpZWxkLnRleHQgPSBcIlwiO1xuICAgICAgICAvLyAgICAgdGhpcy5IaWRlKCk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIHRoaXMudWlfU3dpdGNoRGFubXUub25DbGljaygoKSA9PiBcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgaWYoUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X0Rhbm11XCIsLTEpID09IC0xKVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIFBsYXllclByZWZzLlNldEludChcImtleV9EYW5tdVwiLCAwKTtcbiAgICAgICAgLy8gICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKFwi5by55bmV5bey5YWz6ZetXCIpOy8v5by55bmV5bey5YWz6ZetXG4gICAgICAgIC8vICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZSh0aGlzLnN3aXRjaEltYWdlLFwiZGFubXVfb2ZmXCIsXCJUZXhhc1wiKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGVsc2VcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICBsZXQgZGFubXUgPSBQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfRGFubXVcIiwwKSA9PSAwID8gMSA6IDA7XG4gICAgICAgIC8vICAgICAgICAgUGxheWVyUHJlZnMuU2V0SW50KFwia2V5X0Rhbm11XCIsIGRhbm11KTtcbiAgICAgICAgLy8gICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LnRpcFZpZXcuU2hvd1RpcExhYmVsKGRhbm11ID09IDAgPyBcIuW8ueW5leW3suWFs+mXrVwiIDogXCLlvLnluZXlt7LmiZPlvIBcIik7Ly/lvLnluZXlt7LlhbPpl60g5by55bmV5bey5omT5byAXG4gICAgICAgIC8vICAgICAgICAgVUlVdGlsLmxvYWRJbWFnZSh0aGlzLnN3aXRjaEltYWdlLCBkYW5tdSA9PSAwID8gXCJkYW5tdV9vZmZcIiA6IFwiZGFubXVcIixcIlRleGFzXCIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyB0aGlzLnVpX3JlY29yZFRvZ2dsZS5vbkNsaWNrKCgpPT57XG4gICAgICAgIC8vICAgICBpZih0aGlzLmdldFRvZ2dsZSh0aGlzLnVpX3JlY29yZFRvZ2dsZSkgPT0gZmFsc2UpIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2NoYXRsb2coKTtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0VG9nZ2xlKHRoaXMudWlfcmVjb3JkVG9nZ2xlLHRydWUpO1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRUb2dnbGUodGhpcy51aV9lbW9qVG9nZ2xlLGZhbHNlKTtcbiAgICAgICAgLy8gICAgIHRoaXMuc2V0VG9nZ2xlKHRoaXMudWlfZGFubXVUb2dnbGUsZmFsc2UpO1xuICAgICAgICAvLyAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpLnNldFNlbGVjdGVkSW5kZXgoMCk7XG5cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIHRoaXMudWlfZW1valRvZ2dsZS5vbkNsaWNrKCgpPT57XG4gICAgICAgIC8vICAgICB0aGlzLnNldFRvZ2dsZSh0aGlzLnVpX3JlY29yZFRvZ2dsZSxmYWxzZSk7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFRvZ2dsZSh0aGlzLnVpX2Vtb2pUb2dnbGUsdHJ1ZSk7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFRvZ2dsZSh0aGlzLnVpX2Rhbm11VG9nZ2xlLGZhbHNlKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwidHlwZVwiKS5zZXRTZWxlY3RlZEluZGV4KDEpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gdGhpcy51aV9kYW5tdVRvZ2dsZS5vbkNsaWNrKCgpPT57XG4gICAgICAgIC8vICAgICB0aGlzLnNldFRvZ2dsZSh0aGlzLnVpX3JlY29yZFRvZ2dsZSxmYWxzZSk7XG4gICAgICAgIC8vICAgICB0aGlzLnNldFRvZ2dsZSh0aGlzLnVpX2Vtb2pUb2dnbGUsZmFsc2UpO1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRUb2dnbGUodGhpcy51aV9kYW5tdVRvZ2dsZSx0cnVlKTtcbiAgICAgICAgLy8gICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwidHlwZVwiKS5zZXRTZWxlY3RlZEluZGV4KDIpO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBTZWxlY3RQYWdlKGlzQ2hhdEVtb2o6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5TaG93Q2hhdFNvdW5kKCFpc0NoYXRFbW9qKTtcbiAgICAgICAgdGhpcy5TaG93Q2hhdEVtb2ooaXNDaGF0RW1vaik7XG4gICAgICAgIC8v6K6+572u5Zu+54mHXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgU2hvd0NoYXRTb3VuZChpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy51aV9MaXN0Q2hhdFNvdW5kLnZpc2libGUgPSBpc1Nob3c7XG4gICAgfVxuXG4gICAgcHVibGljIFNob3dDaGF0RW1vaihpc1Nob3c6IGJvb2xlYW4pIHtcbiAgICAgICAgLy8gdGhpcy51aV9MaXN0Q2hhdEVtb2oudmlzaWJsZSA9IGlzU2hvdztcbiAgICB9XG5cbiAgICAvL+aJk+W8gOeVjOmdoiAgXG5cbiAgICBwdWJsaWMgU2hvdygpIHtcbiAgICAgICAgc3VwZXIuU2hvdygpO1xuICAgICAgICAvLyB0aGlzLnVpX2Vtb2pUb2dnbGUudmlzaWJsZSA9ICghRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5fYmZ0YWJsZS5teVVzZXIuSXNXYXRjaCgpICYmICFGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3Ll9iZnRhYmxlLm15VXNlci5Jc1dhaXRUb1Rha2VJbigpKTtcbiAgICAgICAgLy8gaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuX2JmdGFibGUubXlVc2VyLklzV2F0Y2goKSB8fCBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3Ll9iZnRhYmxlLm15VXNlci5Jc1dhaXRUb1Rha2VJbigpKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5nZXRUb2dnbGUodGhpcy51aV9lbW9qVG9nZ2xlKSlcbiAgICAgICAgLy8gICAgIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFRvZ2dsZSh0aGlzLnVpX2Vtb2pUb2dnbGUsIGZhbHNlKTtcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLnVpX2Vtb2pUb2dnbGUub25WYWx1ZUNoYW5nZWQuSW52b2tlKGZhbHNlKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldFRvZ2dsZSh0aGlzLnVpX2Rhbm11VG9nZ2xlLCBmYWxzZSk7XG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy51aV9kYW5tdVRvZ2dsZS5vblZhbHVlQ2hhbmdlZC5JbnZva2UodHJ1ZSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFRvZ2dsZShidXR0b246IGZndWkuR0J1dHRvbik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgaW5kZXggPSBidXR0b24uZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgcmV0dXJuIGluZGV4ID09IDAgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUb2dnbGUoYnV0dG9uOiBmZ3VpLkdCdXR0b24sIGlzb246IGJvb2xlYW4pIHtcbiAgICAgICAgYnV0dG9uLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNldFNlbGVjdGVkSW5kZXgoaXNvbiA/IDEgOiAwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgSW5pdFVJQ2hhdFNvdW5kKHRMaXN0OiBzdHJpbmdbXSkge1xuICAgICAgICBpZiAodExpc3QgPT0gbnVsbCB8fCB0TGlzdC5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnVpX0xpc3RDaGF0U291bmQucmVtb3ZlQ2hpbGRyZW5Ub1Bvb2woKTtcbiAgICAgICAgbGV0IGdvOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBnbyA9IHRoaXMudWlfTGlzdENoYXRTb3VuZC5hZGRJdGVtRnJvbVBvb2woKS5hc0NvbTtcbiAgICAgICAgICAgIHRoaXMuU2V0Q2hhdFNvdW5kQ2VsbEluZm8oZ28sIHRMaXN0W2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHVibGljIFNldENoYXRTb3VuZENlbGxJbmZvKGNoYXRTb3VuZENlbGw6IGZndWkuR0NvbXBvbmVudCwgc2F5U3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHR4dENoYXQ6IGZndWkuR1RleHRGaWVsZCA9IGNoYXRTb3VuZENlbGwuZ2V0Q2hpbGQoXCJ0eHRDaGF0XCIpLmFzVGV4dEZpZWxkO1xuICAgICAgICB0eHRDaGF0LnRleHQgPSAoaW5kZXggKyAxKSArIFwiLlwiICsgc2F5U3RyO1xuICAgICAgICBjaGF0U291bmRDZWxsLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuX2JmdGFibGUubXlVc2VyLklzV2F0Y2goKSkge1xuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTYwMikpOy8v5peB6KeC54q25oCB5LiL5LiN6IO95Y+R6YCB5by55bmVXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuX2JmdGFibGUubXlVc2VyLklzV2FpdFRvVGFrZUluKCkpIHtcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIxODkpKTsvL+WNoOW6p+eKtuaAgeS4i+S4jeiDveWPkemAgeW8ueW5lVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfRGFubXVcIiwgMSkgPT0gMCkge1xuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTYwNSkpOy8v5by55bmV5bey5YWz6ZetXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbC5nb2xkIDwgMjAwKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNjAxKSk7Ly/pkrvnn7PkuI3otrNcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2NoYXQoNiwgMCwgc2F5U3RyLCAwKTtcbiAgICAgICAgICAgIC8vIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLmNzX2NoYXQobW9kZWwuZ2FtZWlkLCBtb2RlbC5sZXZlbGlkLCBtb2RlbC50YWJsZWlkLCA2LCBzYXlTdHIpO1xuICAgICAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgICAgICAgICAvKiDmlrnkvr/mtYvor5VcbiAgICAgICAgICAgIEZfV2hpcmxWaWV3Q3RyLmluc3RhbmNlLnZpZXcuSGFuZGxlQ2hhdCh0ZXN0SWQsNCxpbmRleC5Ub1N0cmluZygpKTtcbiAgICAgICAgICAgIHRlc3RJZCsrO1xuICAgICAgICAgICAgaWYgKHRlc3RJZCA+IDgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdElkID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICovXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBJbml0VUlDaGF0RW1vaigpXG4gICAgLy8ge1xuICAgIC8vICAgICBsZXQgZ286Zmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDIwOyBpKyspXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGdvID0gdGhpcy51aV9MaXN0Q2hhdEVtb2ouYWRkSXRlbUZyb21Qb29sKCkuYXNDb207XG4gICAgLy8gICAgICAgICB0aGlzLlNlQ2hhdEVtb2pDZWxsSW5mbyhnbywgaSArIDEpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gcHVibGljIFNlQ2hhdEVtb2pDZWxsSW5mbyhjaGF0RW1vakNlbGw6Zmd1aS5HQ29tcG9uZW50LCBpbmRleDpudW1iZXIpXG4gICAgLy8ge1xuICAgIC8vICAgICBVSVV0aWwubG9hZEltYWdlKGNoYXRFbW9qQ2VsbC5nZXRDaGlsZChcImltZ0Vtb2pcIikuYXNMb2FkZXIsIFwiZmFjZVwiICsgaW5kZXgsIFwiVGV4YXNcIik7XG5cbiAgICAvLyAgICAgY2hhdEVtb2pDZWxsLm9uQ2xpY2soKCkgPT5cbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbGV0IG1vZGVsID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWw7XG4gICAgLy8gICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5jc19jaGF0KDIsIDAsIChpbmRleCAtIDEpLnRvU3RyaW5nKCkpO1xuICAgIC8vICAgICAgICAgdGhpcy5IaWRlKCk7XG5cbiAgICAvLyAgICAgICAgIC8q5pa55L6/5rWL6K+VXG4gICAgLy8gICAgICAgICBGX1doaXJsVmlld0N0ci5pbnN0YW5jZS52aWV3LkhhbmRsZUNoYXQodGVzdElkLCAyLCBpbmRleC5Ub1N0cmluZygpKTtcbiAgICAvLyAgICAgICAgIHRlc3RJZCsrO1xuICAgIC8vICAgICAgICAgaWYgKHRlc3RJZCA+IDgpXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdGVzdElkID0gMTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICovXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIHByaXZhdGUgQ2xlYXIoKSB7XG5cbiAgICB9XG4gICAgLy8gcHVibGljIHNob3dMb2coZGF0YTpzY19jaGF0bG9nKVxuICAgIC8vIHtcbiAgICAvLyAgICAgdGhpcy51aV9MaXN0Y2hhdFJlY29yZC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xuICAgIC8vICAgICBpZiAoZGF0YS5kYXRhICE9IG51bGwgJiYgZGF0YS5kYXRhLmxlbmd0aCA+IDApXG4gICAgLy8gICAgIHsgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5kYXRhLmxlbmd0aDsgKytpKVxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YS5kYXRhW2ldO1xuICAgIC8vICAgICAgICAgICAgIHZhciBnbyA9IHRoaXMudWlfTGlzdGNoYXRSZWNvcmQuYWRkSXRlbUZyb21Qb29sKCkuYXNDb207ICAgICAgICAgICAgICAgIFxuICAgIC8vICAgICAgICAgICAgIGxldCB1aVRleHQgPSBnby5nZXRDaGlsZChcIlRleHRcIikuYXNUZXh0RmllbGQ7XG4gICAgLy8gICAgICAgICAgICAgbGV0IHVpVGV4dDIgPSBnby5nZXRDaGlsZChcIlRleHQyXCIpLmFzVGV4dEZpZWxkO1xuICAgIC8vICAgICAgICAgICAgIGlmKHRlbXAudHlwZSA9PSAxKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdWlUZXh0LnRleHQgPSBgJHt0ZW1wLnB0aW1lfSAke3RlbXAudXNlcm5hbWV9OiAgYDtcbiAgICAvLyAgICAgICAgICAgICAgICAgdWlUZXh0Mi50ZXh0ID0gdGVtcC5jb250ZW50O1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICB1aVRleHQudGV4dCA9IGAke3RlbXAucHRpbWV9ICR7dGVtcC51c2VybmFtZX06ICBgOy8v5Y+R6YCB5LqG5LiA5p2h6K+t6Z+zXG4gICAgLy8gICAgICAgICAgICAgICAgIHVpVGV4dDIudGV4dCA9IFwi5Y+R6YCB5LqG5LiA5p2h6K+t6Z+zXCI7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIHVpVGV4dC50ZXh0ID0gdWlUZXh0LnRleHQucmVwbGFjZShcIiBcIiwgXCJcXHUwMEEwXCIpO1xuICAgIC8vICAgICAgICAgICAgIHVpVGV4dDIudGV4dCA9IHVpVGV4dC50ZXh0LnJlcGxhY2UoXCIgXCIsIFwiXFx1MDBBMFwiKTtcbiAgICAvLyAgICAgICAgICAgICAvLyBUb29sc0V4LkZpeFRleHRCb3VuZHNUb0l0c0NvbnRlbnQodWlUZXh0LCBmYWxzZSwgdHJ1ZSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59Il19
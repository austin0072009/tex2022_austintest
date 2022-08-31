
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/FuncSettingPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73592hsHCFPJL/g27wHTYPW', 'FuncSettingPanel');
// Games/texas/script/View/FuncSettingPanel.ts

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
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var TexasLanguage_1 = require("../Model/TexasLanguage");
var FuncSettingPanel = /** @class */ (function (_super) {
    __extends(FuncSettingPanel, _super);
    function FuncSettingPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_close_Set = null;
        _this.ui_cardGroup = null; //换牌面
        _this.ui_deskGroup = null; //换桌布
        _this.ui_cardsGroup = null;
        _this.ui_jiazhuGroup = null;
        _this.ui_jiazhuNumGroup = null;
        _this.ui_jiazhuTipText = null;
        _this.ui_music = null;
        _this.ui_yinxiao_btn = null;
        _this.ui_ins = null;
        _this.ui_lagan = null;
        _this.ui_txtversion = null; //版本号
        _this.deskBgIndex = 3;
        _this.cardBgIndex = 1;
        _this.cardsIndex = 1;
        _this.isChangeDeskOrCardBg = false;
        _this.ui_titleText = null;
        _this.ui_txtMusic = null;
        _this.ui_txtSound = null;
        _this.ui_txtCard = null;
        _this.ui_txtDesktop = null;
        _this.ui_txtIns = null;
        _this.ui_txtInsTip = null;
        _this.ui_txtLagan = null;
        _this.onLoadEnd = false;
        return _this;
    }
    FuncSettingPanel.prototype.OnLoadCompleted = function () {
        this.onLoadEnd = true;
        if (this.mystart)
            this.MyStartEx();
    };
    FuncSettingPanel.prototype.MyStart = function () {
        this.mystart = true;
        if (this.onLoadEnd)
            this.MyStartEx();
    };
    FuncSettingPanel.prototype.AutoSetGoProperty = function () { };
    FuncSettingPanel.prototype.MyStartEx = function () {
        _super.prototype.AutoSetGoProperty.call(this);
        this.musicValue = AudioManager_1.AudioManager.Singleton.MusicVolume;
        this.yinxiaoValue = AudioManager_1.AudioManager.Singleton.YinxiaoVolume;
        this.Init();
        this.Register();
        this.Hide();
    };
    FuncSettingPanel.prototype.InitLanguage = function () {
        this.ui_titleText.text = TexasLanguage_1.TexasLanguage.getLanguageById(1726); //系统设置
        this.ui_txtMusic.text = TexasLanguage_1.TexasLanguage.getLanguageById(1312); //音乐
        this.ui_txtSound.text = TexasLanguage_1.TexasLanguage.getLanguageById(1313); //音效
        this.ui_txtCard.text = TexasLanguage_1.TexasLanguage.getLanguageById(1956); //自定义快捷加注
        this.ui_txtDesktop.text = TexasLanguage_1.TexasLanguage.getLanguageById(1068); //桌面风格
        this.ui_txtIns.text = TexasLanguage_1.TexasLanguage.getLanguageById(1957); //保险提示
        this.ui_txtLagan.text = TexasLanguage_1.TexasLanguage.getLanguageById(1958); //拉杆确认
        this.ui_txtInsTip.text = TexasLanguage_1.TexasLanguage.getLanguageById(1959); //(只对本局有效)
        this.ui_jiazhuTipText.text = TexasLanguage_1.TexasLanguage.getLanguageById(2111); //點擊快速加註按鈕\n可自定義加註底池比例
    };
    FuncSettingPanel.prototype.Init = function () {
        // this.ui_txtversion.text = "Appver:" + AppConfigList.Current.AppVer;
        // if (AppConfigEx.VersionConfig != null)
        // {
        //     this.ui_txtversion.text += "     Resver:" + AppConfigEx.VersionConfig.ResVer;
        // }
    };
    FuncSettingPanel.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
        this.InitLanguage();
        var _loop_1 = function () {
            var t = this_1.ui_jiazhuGroup._children[i].asButton;
            if (t != null) {
                this_1.SetGroupIsOn(this_1.ui_jiazhuGroup, t, false); //t.isOn = false;
                var type_1 = UIUtil_1.PlayerPrefs.GetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + (i + 1), i < 3 ? 1 + 2 * (i + 1) : 1);
                t.asCom._children.forEach(function (obj) {
                    if (obj.node.name == "GTextField")
                        obj.text = i < 3 ? F_TexasViewCtr_1.default.instance.view.GetJiazhuType(type_1) : (type_1 == 1 ? "+" : F_TexasViewCtr_1.default.instance.view.GetJiazhuType2(type_1));
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.ui_jiazhuGroup._children.length; i++) {
            _loop_1();
        }
        this.ui_jiazhuNumGroup.visible = false;
        this.ui_jiazhuTipText.visible = true;
    };
    FuncSettingPanel.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        if (this.isChangeDeskOrCardBg) {
            // if (F_TexasViewCtr.instance.Model.gameid == 52)
            // {
            //     F_WhirlViewCtr.instance.RefreshDeskBgAndCardBg();
            // }
            // else if (LobbyViewCtr.instance.Model.gameid == 51)
            // {
            F_TexasViewCtr_1.default.instance.RefreshDeskBgAndCardBg();
            // }            
        }
        this.isChangeDeskOrCardBg = false;
        this.node.active = false;
    };
    FuncSettingPanel.prototype.Register = function () {
        var _this = this;
        this.deskBgIndex = UIUtil_1.PlayerPrefs.GetInt("key_deskBg_index", 3);
        this.cardBgIndex = UIUtil_1.PlayerPrefs.GetInt("key_cardBg_index", 3);
        this.cardsIndex = UIUtil_1.PlayerPrefs.GetInt("key_cards_index", 1);
        this.OpenMusic(AudioManager_1.AudioManager.TexasMusicStatus);
        this.OpenEffects(AudioManager_1.AudioManager.TexasEffectStatus);
        this.OpenChat(UIUtil_1.PlayerPrefs.GetInt("key_chat_value", 1));
        this.OpenLaGan(UIUtil_1.PlayerPrefs.GetInt("key_lagan_value", 0));
        if (F_TexasViewCtr_1.default.instance.Model.gameid == 51) {
            if (F_TexasViewCtr_1.default.instance.Model.gametype == 2) {
                var insVlaue_1 = 1;
                var insTipStr = UIUtil_1.PlayerPrefs.GetString("key_insTip_value", "");
                if (insTipStr != null && insTipStr != "") {
                    var insArr = insTipStr.split(';');
                    insArr.forEach(function (temp) {
                        var tableInfoArr = temp.split('+');
                        if (tableInfoArr.length < 2)
                            return true;
                        if (F_TexasViewCtr_1.default.instance.Model.Room_tnumber.toString() == tableInfoArr[0]) {
                            insVlaue_1 = Number.parseInt(tableInfoArr[1]);
                        }
                    });
                }
                this.OpenInsTip(insVlaue_1);
            }
            else {
                this.SetSwith(this.ui_ins, false);
                this.OpenInsTip(0);
            }
        }
        else {
            this.SetSwith(this.ui_ins, false);
            this.OpenInsTip(0);
        }
        this.ui_btn_close_Set.onClick(function () {
            _this.Hide();
        });
        //游戏静音设置开关监听事件 
        this.ui_music.clearClick();
        this.ui_music.onClick(function () {
            var isOpen = _this.GetSwith(_this.ui_music);
            _this.OpenMusic(!isOpen);
        });
        //音效按钮设置开关监听事件
        this.ui_yinxiao_btn.clearClick();
        this.ui_yinxiao_btn.onClick(function () {
            var isOpen = _this.GetSwith(_this.ui_yinxiao_btn);
            _this.OpenEffects(!isOpen);
        });
        this.ui_lagan.clearClick();
        this.ui_lagan.onClick(function () {
            _this.SetSwith(_this.ui_lagan, !_this.GetSwith(_this.ui_lagan));
            if (_this.GetSwith(_this.ui_lagan)) {
                _this.OpenLaGan(1);
            }
            else {
                _this.OpenLaGan(0);
            }
        });
        this.ui_ins.clearClick();
        this.ui_ins.onClick(function () {
            _this.SetSwith(_this.ui_ins, !_this.GetSwith(_this.ui_ins));
            if (_this.GetSwith(_this.ui_ins)) {
                _this.OpenInsTip(1);
            }
            else {
                _this.OpenInsTip(0);
            }
        });
        var _loop_2 = function () {
            var t = this_2.ui_cardGroup._children[i].asButton;
            if (t != null) {
                this_2.SetGroupIsOn(this_2.ui_cardGroup, t, i + 1 == this_2.cardBgIndex); //t.isOn = i + 1 == this.cardBgIndex;
                var tempIndex_1 = i + 1;
                t.clearClick();
                t.onClick(function () {
                    if (_this.GetGroupIsOn(t))
                        return;
                    _this.SetGroupIsOn(_this.ui_cardGroup, t, !_this.GetGroupIsOn(t));
                    if (_this.GetGroupIsOn(t)) {
                        if (_this.cardBgIndex != tempIndex_1) {
                            _this.isChangeDeskOrCardBg = true;
                        }
                        _this.cardBgIndex = tempIndex_1;
                        UIUtil_1.PlayerPrefs.SetInt("key_cardBg_index", _this.cardBgIndex);
                        cc.error("index  card:: " + _this.cardBgIndex);
                    }
                });
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.ui_cardGroup._children.length; i++) {
            _loop_2();
        }
        var _loop_3 = function () {
            var t = this_3.ui_cardsGroup._children[i].asButton;
            if (t != null) {
                this_3.SetGroupIsOn(this_3.ui_cardsGroup, t, i + 1 == this_3.cardsIndex); //t.isOn = i + 1 == this.cardsIndex;
                var tempIndex_2 = i + 1;
                t.clearClick();
                t.onClick(function () {
                    if (_this.GetGroupIsOn(t))
                        return;
                    _this.SetGroupIsOn(_this.ui_cardsGroup, t, !_this.GetGroupIsOn(t));
                    if (_this.GetGroupIsOn(t)) {
                        if (_this.cardsIndex != tempIndex_2) {
                            _this.isChangeDeskOrCardBg = true;
                        }
                        _this.cardsIndex = tempIndex_2;
                        UIUtil_1.PlayerPrefs.SetInt("key_cards_index", _this.cardsIndex);
                        cc.error("index  card:: " + _this.cardsIndex);
                    }
                });
            }
        };
        var this_3 = this;
        for (var i = 0; i < this.ui_cardsGroup._children.length; i++) {
            _loop_3();
        }
        var _loop_4 = function () {
            var t = this_4.ui_deskGroup._children[i].asButton;
            if (t != null) {
                this_4.SetGroupIsOn(this_4.ui_deskGroup, t, i + 1 == this_4.deskBgIndex); // t.isOn = i + 1 == this.deskBgIndex;
                var tempIndex_3 = i + 1;
                t.clearClick();
                t.onClick(function () {
                    if (_this.GetGroupIsOn(t))
                        return;
                    _this.SetGroupIsOn(_this.ui_deskGroup, t, !_this.GetGroupIsOn(t));
                    if (_this.GetGroupIsOn(t)) {
                        if (_this.deskBgIndex != tempIndex_3) {
                            _this.isChangeDeskOrCardBg = true;
                        }
                        _this.deskBgIndex = tempIndex_3;
                        cc.error("deskBgIndex  card:: " + _this.deskBgIndex);
                        UIUtil_1.PlayerPrefs.SetInt("key_deskBg_index", _this.deskBgIndex);
                        // if (F_TexasViewCtr.instance.Model.gameid == 52)
                        // {
                        //     F_WhirlViewCtr.instance.view.RefreshDeskImage();
                        // }
                        // else if (LobbyViewCtr.instance.Model.gameid == 51)
                        // {
                        F_TexasViewCtr_1.default.instance.view.RefreshDeskImage();
                        // }
                    }
                });
            }
        };
        var this_4 = this;
        for (var i = 0; i < this.ui_deskGroup._children.length; i++) {
            _loop_4();
        }
        var _loop_5 = function () {
            var t = this_5.ui_jiazhuGroup._children[i].asButton;
            if (t != null) {
                this_5.SetGroupIsOn(this_5.ui_jiazhuGroup, t, false); // t.isOn = false;
                var tempIndex_4 = i;
                t.clearClick();
                t.onClick(function () {
                    console.log(_this.GetGroupIsOn(t));
                    if (_this.GetGroupIsOn(t))
                        return;
                    _this.SetGroupIsOn(_this.ui_jiazhuGroup, t, !_this.GetGroupIsOn(t));
                    if (_this.GetGroupIsOn(t)) {
                        _this.ui_jiazhuNumGroup.visible = true;
                        _this.ui_jiazhuTipText.visible = false;
                        _this.ShowJiazhuList(tempIndex_4);
                    }
                    console.log(_this.GetGroupIsOn(t));
                });
            }
        };
        var this_5 = this;
        for (var i = 0; i < this.ui_jiazhuGroup._children.length; i++) {
            _loop_5();
        }
    };
    FuncSettingPanel.prototype.ShowJiazhuList = function (toggleIdx) {
        var _this = this;
        var _loop_6 = function () {
            var btn = this_6.ui_jiazhuNumGroup._children[i].asButton;
            //根据按钮显示加注的可选择内容
            btn.asCom._children.forEach(function (obj) {
                if (obj.node.name == "GTextField")
                    obj.text = toggleIdx < 3 ? F_TexasViewCtr_1.default.instance.view.GetJiazhuType(i + 1) : F_TexasViewCtr_1.default.instance.view.GetJiazhuType2(i + 1);
            });
            //选择对应的按钮，对应上面点击的按钮位置的显示内容刷新
            if (btn != null) {
                btn.clearClick();
                var tempIndex_5 = i;
                btn.onClick(function () {
                    var t = _this.ui_jiazhuGroup._children[toggleIdx].asButton;
                    if (t != null) {
                        var type_2 = tempIndex_5 + 1;
                        UIUtil_1.PlayerPrefs.SetInt(F_TexasViewCtr_1.default.instance.Model.mPlayerModel.userid + "_key_jiazhu" + (toggleIdx + 1), type_2);
                        t.asCom._children.forEach(function (obj) {
                            obj.text = toggleIdx < 3 ? F_TexasViewCtr_1.default.instance.view.GetJiazhuType(type_2) : (type_2 == 1 ? "+" : F_TexasViewCtr_1.default.instance.view.GetJiazhuType2(type_2));
                        });
                    }
                });
            }
        };
        var this_6 = this;
        for (var i = 0; i < this.ui_jiazhuNumGroup._children.length; i++) {
            _loop_6();
        }
    };
    FuncSettingPanel.prototype.OpenMusic = function (isOpen) {
        if (isOpen) {
            AudioManager_1.AudioManager.Singleton.resumeMusic();
        }
        else {
            AudioManager_1.AudioManager.Singleton.pauseMusic();
        }
        this.SetSwith(this.ui_music, isOpen);
        AudioManager_1.AudioManager.TexasMusicStatus = isOpen;
    };
    FuncSettingPanel.prototype.OpenEffects = function (isOpen) {
        if (isOpen) {
            AudioManager_1.AudioManager.Singleton.resumeAllEffects();
        }
        else {
            AudioManager_1.AudioManager.Singleton.pauseAllEffects();
        }
        this.SetSwith(this.ui_yinxiao_btn, isOpen);
        AudioManager_1.AudioManager.TexasEffectStatus = isOpen;
    };
    FuncSettingPanel.prototype.OpenChat = function (value) {
        UIUtil_1.PlayerPrefs.SetInt("key_chat_value", value);
        // if (LobbyViewCtr.instance.Model.gameid == 52)
        // {
        // }
        // else if (LobbyViewCtr.instance.Model.gameid == 51)
        // {
        F_TexasViewCtr_1.default.instance.view.IsDisplayChat();
        // }
    };
    FuncSettingPanel.prototype.OpenLaGan = function (value) {
        UIUtil_1.PlayerPrefs.SetInt("key_lagan_value", value);
        this.SetSwith(this.ui_lagan, (value == 1));
    };
    FuncSettingPanel.prototype.OpenInsTip = function (value) {
        if (F_TexasViewCtr_1.default.instance.Model.gameid == 51 && F_TexasViewCtr_1.default.instance.Model.gametype == 2) //只记录德州保险房间的保险提示状态
         {
            var insTipStr = UIUtil_1.PlayerPrefs.GetString("key_insTip_value", "");
            var newInsTipStr = "";
            if (insTipStr != null && insTipStr != "") {
                var insArr = insTipStr.split(';');
                for (var i = 0; i < insArr.length; i++) {
                    var temp = insArr[i];
                    var tableInfoArr = temp.split('+');
                    if (tableInfoArr.length < 2)
                        continue;
                    if (F_TexasViewCtr_1.default.instance.Model.Room_tnumber == (tableInfoArr[0]))
                        continue;
                    newInsTipStr += tableInfoArr[0] + "+" + tableInfoArr[1] + ";";
                }
                newInsTipStr += F_TexasViewCtr_1.default.instance.Model.Room_tnumber + "+" + value;
            }
            else {
                newInsTipStr = F_TexasViewCtr_1.default.instance.Model.Room_tnumber + "+" + value;
            }
            UIUtil_1.PlayerPrefs.SetString("key_insTip_value", newInsTipStr);
        }
        this.SetSwith(this.ui_ins, (value == 1));
    };
    FuncSettingPanel.prototype.SetGroupIsOn = function (group, obj, isOn) {
        for (var i = 0; i < group._children.length; i++) {
            var t = group._children[i];
            if (t != null) {
                t.asCom.getController("isOn").setSelectedIndex(0);
            }
        }
        obj.asCom.getController("isOn").setSelectedIndex(isOn ? 1 : 0);
    };
    FuncSettingPanel.prototype.GetGroupIsOn = function (button) {
        var isOn = button.asCom.getController("isOn").selectedIndex;
        if (isOn == null) {
            button.asCom.getController("isOn").setSelectedIndex(0);
            isOn = 0;
        }
        return isOn == 0 ? false : true;
    };
    FuncSettingPanel.prototype.SetSwith = function (button, open) {
        button.asCom.getController("open").setSelectedIndex(open ? 1 : 0);
    };
    FuncSettingPanel.prototype.GetSwith = function (button) {
        var v = button.asCom.getController("open").selectedIndex;
        if (v == null) {
            button.asCom.getController("open").setSelectedIndex(0);
            v = 0;
        }
        return v == 0 ? false : true;
    };
    return FuncSettingPanel;
}(ViewBase_1.default));
exports.default = FuncSettingPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXEZ1bmNTZXR0aW5nUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLGtFQUE2RDtBQUM3RCwyREFBK0Q7QUFDL0QsMkRBQXNEO0FBQ3RELHdEQUF1RDtBQUV2RDtJQUE4QyxvQ0FBUTtJQUF0RDtRQUFBLHFFQXlZQztRQXhZVSxzQkFBZ0IsR0FBaUIsSUFBSSxDQUFDO1FBTXRDLGtCQUFZLEdBQW9CLElBQUksQ0FBQyxDQUFBLEtBQUs7UUFDMUMsa0JBQVksR0FBb0IsSUFBSSxDQUFDLENBQUEsS0FBSztRQUMxQyxtQkFBYSxHQUFvQixJQUFJLENBQUM7UUFDdEMsb0JBQWMsR0FBb0IsSUFBSSxDQUFDO1FBQ3ZDLHVCQUFpQixHQUFvQixJQUFJLENBQUM7UUFDMUMsc0JBQWdCLEdBQW9CLElBQUksQ0FBQztRQUV6QyxjQUFRLEdBQWlCLElBQUksQ0FBQztRQUM5QixvQkFBYyxHQUFpQixJQUFJLENBQUM7UUFDcEMsWUFBTSxHQUFpQixJQUFJLENBQUM7UUFDNUIsY0FBUSxHQUFpQixJQUFJLENBQUM7UUFDOUIsbUJBQWEsR0FBb0IsSUFBSSxDQUFDLENBQUEsS0FBSztRQUUxQyxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUVmLDBCQUFvQixHQUFHLEtBQUssQ0FBQztRQUU5QixrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFDckMsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBQ3BDLGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUNwQyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDbkMsbUJBQWEsR0FBb0IsSUFBSSxDQUFDO1FBQ3RDLGVBQVMsR0FBb0IsSUFBSSxDQUFDO1FBQ2xDLGtCQUFZLEdBQW9CLElBQUks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LElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ08sbUNBQVEsR0FBaEIsVUFBaUIsTUFBb0I7UUFDakMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsR0FBRyxDQUFDLENBQUM7U0FDVDtRQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDakMsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0F6WUEsQUF5WUMsQ0F6WTZDLGtCQUFRLEdBeVlyRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xuaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XG5pbXBvcnQgeyBQbGF5ZXJQcmVmcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL1VJVXRpbFwiO1xuaW1wb3J0IEZfVGV4YXNWaWV3Q3RyIGZyb20gXCIuLi9Db250cmwvRl9UZXhhc1ZpZXdDdHJcIjtcbmltcG9ydCB7IFRleGFzTGFuZ3VhZ2UgfSBmcm9tIFwiLi4vTW9kZWwvVGV4YXNMYW5ndWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jU2V0dGluZ1BhbmVsIGV4dGVuZHMgVmlld0Jhc2Uge1xuICAgIHB1YmxpYyB1aV9idG5fY2xvc2VfU2V0OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG4gICAgLy94aXVnYWloYW9sZVxuICAgIHB1YmxpYyBtdXNpY1ZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIHlpbnhpYW9WYWx1ZTogbnVtYmVyO1xuXG4gICAgcHVibGljIHVpX2NhcmRHcm91cDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDsvL+aNoueJjOmdolxuICAgIHB1YmxpYyB1aV9kZXNrR3JvdXA6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7Ly/mjaLmoYzluINcbiAgICBwdWJsaWMgdWlfY2FyZHNHcm91cDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfamlhemh1R3JvdXA6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHVpX2ppYXpodU51bUdyb3VwOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV9qaWF6aHVUaXBUZXh0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHVibGljIHVpX211c2ljOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV95aW54aWFvX2J0bjogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfaW5zOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHB1YmxpYyB1aV9sYWdhbjogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0dmVyc2lvbjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+eJiOacrOWPt1xuXG4gICAgcHJpdmF0ZSBkZXNrQmdJbmRleCA9IDM7XG4gICAgcHJpdmF0ZSBjYXJkQmdJbmRleCA9IDE7XG4gICAgcHJpdmF0ZSBjYXJkc0luZGV4ID0gMTtcblxuICAgIHByaXZhdGUgaXNDaGFuZ2VEZXNrT3JDYXJkQmcgPSBmYWxzZTtcblxuICAgIHB1YmxpYyB1aV90aXRsZVRleHQ6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dE11c2ljOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRTb3VuZDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0Q2FyZDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0RGVza3RvcDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfdHh0SW5zOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHB1YmxpYyB1aV90eHRJbnNUaXA6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG4gICAgcHVibGljIHVpX3R4dExhZ2FuOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBvbkxvYWRFbmQgPSBmYWxzZTtcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XG4gICAgICAgIHRoaXMub25Mb2FkRW5kID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMubXlzdGFydCkgdGhpcy5NeVN0YXJ0RXgoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTXlTdGFydCgpIHtcbiAgICAgICAgdGhpcy5teXN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMub25Mb2FkRW5kKSB0aGlzLk15U3RhcnRFeCgpO1xuICAgIH1cbiAgICBBdXRvU2V0R29Qcm9wZXJ0eSgpIHsgfVxuXG4gICAgcHVibGljIE15U3RhcnRFeCgpIHtcbiAgICAgICAgc3VwZXIuQXV0b1NldEdvUHJvcGVydHkoKTtcbiAgICAgICAgdGhpcy5tdXNpY1ZhbHVlID0gQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5NdXNpY1ZvbHVtZTtcbiAgICAgICAgdGhpcy55aW54aWFvVmFsdWUgPSBBdWRpb01hbmFnZXIuU2luZ2xldG9uLllpbnhpYW9Wb2x1bWU7XG5cbiAgICAgICAgdGhpcy5Jbml0KCk7XG4gICAgICAgIHRoaXMuUmVnaXN0ZXIoKTtcbiAgICAgICAgdGhpcy5IaWRlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBJbml0TGFuZ3VhZ2UoKSB7XG4gICAgICAgIHRoaXMudWlfdGl0bGVUZXh0LnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxNzI2KTsvL+ezu+e7n+iuvue9rlxuICAgICAgICB0aGlzLnVpX3R4dE11c2ljLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzEyKTsvL+mfs+S5kFxuICAgICAgICB0aGlzLnVpX3R4dFNvdW5kLnRleHQgPSBUZXhhc0xhbmd1YWdlLmdldExhbmd1YWdlQnlJZCgxMzEzKTsvL+mfs+aViFxuICAgICAgICB0aGlzLnVpX3R4dENhcmQudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE5NTYpOy8v6Ieq5a6a5LmJ5b+r5o235Yqg5rOoXG4gICAgICAgIHRoaXMudWlfdHh0RGVza3RvcC50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTA2OCk7Ly/moYzpnaLpo47moLxcblxuICAgICAgICB0aGlzLnVpX3R4dElucy50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTk1Nyk7Ly/kv53pmanmj5DnpLpcbiAgICAgICAgdGhpcy51aV90eHRMYWdhbi50ZXh0ID0gVGV4YXNMYW5ndWFnZS5nZXRMYW5ndWFnZUJ5SWQoMTk1OCk7Ly/mi4nmnYbnoa7orqRcbiAgICAgICAgdGhpcy51aV90eHRJbnNUaXAudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDE5NTkpOy8vKOWPquWvueacrOWxgOacieaViClcblxuICAgICAgICB0aGlzLnVpX2ppYXpodVRpcFRleHQudGV4dCA9IFRleGFzTGFuZ3VhZ2UuZ2V0TGFuZ3VhZ2VCeUlkKDIxMTEpOy8v6bue5pOK5b+r6YCf5Yqg6Ki75oyJ6YiVXFxu5Y+v6Ieq5a6a576p5Yqg6Ki75bqV5rGg5q+U5L6LXG4gICAgfVxuICAgIHByaXZhdGUgSW5pdCgpIHtcbiAgICAgICAgLy8gdGhpcy51aV90eHR2ZXJzaW9uLnRleHQgPSBcIkFwcHZlcjpcIiArIEFwcENvbmZpZ0xpc3QuQ3VycmVudC5BcHBWZXI7XG5cbiAgICAgICAgLy8gaWYgKEFwcENvbmZpZ0V4LlZlcnNpb25Db25maWcgIT0gbnVsbClcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgdGhpcy51aV90eHR2ZXJzaW9uLnRleHQgKz0gXCIgICAgIFJlc3ZlcjpcIiArIEFwcENvbmZpZ0V4LlZlcnNpb25Db25maWcuUmVzVmVyO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHB1YmxpYyBTaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgc3VwZXIuU2hvdygpO1xuICAgICAgICB0aGlzLkluaXRMYW5ndWFnZSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudWlfamlhemh1R3JvdXAuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdCA9IHRoaXMudWlfamlhemh1R3JvdXAuX2NoaWxkcmVuW2ldLmFzQnV0dG9uO1xuICAgICAgICAgICAgaWYgKHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0R3JvdXBJc09uKHRoaXMudWlfamlhemh1R3JvdXAsIHQsIGZhbHNlKTsgLy90LmlzT24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IFBsYXllclByZWZzLkdldEludChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5tUGxheWVyTW9kZWwudXNlcmlkICsgXCJfa2V5X2ppYXpodVwiICsgKGkgKyAxKSwgaSA8IDMgPyAxICsgMiAqIChpICsgMSkgOiAxKTtcbiAgICAgICAgICAgICAgICB0LmFzQ29tLl9jaGlsZHJlbi5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmoubm9kZS5uYW1lID09IFwiR1RleHRGaWVsZFwiKSBvYmoudGV4dCA9IGkgPCAzID8gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5HZXRKaWF6aHVUeXBlKHR5cGUpIDogKHR5cGUgPT0gMSA/IFwiK1wiIDogRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5HZXRKaWF6aHVUeXBlMih0eXBlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aV9qaWF6aHVOdW1Hcm91cC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfamlhemh1VGlwVGV4dC52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgcHVibGljIEhpZGUoKSB7XG4gICAgICAgIHN1cGVyLkhpZGUoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNDaGFuZ2VEZXNrT3JDYXJkQmcpIHtcbiAgICAgICAgICAgIC8vIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5nYW1laWQgPT0gNTIpXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgRl9XaGlybFZpZXdDdHIuaW5zdGFuY2UuUmVmcmVzaERlc2tCZ0FuZENhcmRCZygpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZWxzZSBpZiAoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmdhbWVpZCA9PSA1MSlcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLlJlZnJlc2hEZXNrQmdBbmRDYXJkQmcoKTtcbiAgICAgICAgICAgIC8vIH0gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNDaGFuZ2VEZXNrT3JDYXJkQmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgUmVnaXN0ZXIoKSB7XG4gICAgICAgIHRoaXMuZGVza0JnSW5kZXggPSBQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfZGVza0JnX2luZGV4XCIsIDMpO1xuICAgICAgICB0aGlzLmNhcmRCZ0luZGV4ID0gUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X2NhcmRCZ19pbmRleFwiLCAzKTtcbiAgICAgICAgdGhpcy5jYXJkc0luZGV4ID0gUGxheWVyUHJlZnMuR2V0SW50KFwia2V5X2NhcmRzX2luZGV4XCIsIDEpO1xuICAgICAgICB0aGlzLk9wZW5NdXNpYyhBdWRpb01hbmFnZXIuVGV4YXNNdXNpY1N0YXR1cyk7XG4gICAgICAgIHRoaXMuT3BlbkVmZmVjdHMoQXVkaW9NYW5hZ2VyLlRleGFzRWZmZWN0U3RhdHVzKTtcbiAgICAgICAgdGhpcy5PcGVuQ2hhdChQbGF5ZXJQcmVmcy5HZXRJbnQoXCJrZXlfY2hhdF92YWx1ZVwiLCAxKSk7XG4gICAgICAgIHRoaXMuT3BlbkxhR2FuKFBsYXllclByZWZzLkdldEludChcImtleV9sYWdhbl92YWx1ZVwiLCAwKSk7XG4gICAgICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5nYW1laWQgPT0gNTEpIHtcbiAgICAgICAgICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5nYW1ldHlwZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluc1ZsYXVlID0gMTtcbiAgICAgICAgICAgICAgICBsZXQgaW5zVGlwU3RyOiBzdHJpbmcgPSBQbGF5ZXJQcmVmcy5HZXRTdHJpbmcoXCJrZXlfaW5zVGlwX3ZhbHVlXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIGlmIChpbnNUaXBTdHIgIT0gbnVsbCAmJiBpbnNUaXBTdHIgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5zQXJyOiBzdHJpbmdbXSA9IGluc1RpcFN0ci5zcGxpdCgnOycpO1xuICAgICAgICAgICAgICAgICAgICBpbnNBcnIuZm9yRWFjaCh0ZW1wID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YWJsZUluZm9BcnI6IHN0cmluZ1tdID0gdGVtcC5zcGxpdCgnKycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlSW5mb0Fyci5sZW5ndGggPCAyKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Sb29tX3RudW1iZXIudG9TdHJpbmcoKSA9PSB0YWJsZUluZm9BcnJbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNWbGF1ZSA9IE51bWJlci5wYXJzZUludCh0YWJsZUluZm9BcnJbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5PcGVuSW5zVGlwKGluc1ZsYXVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0U3dpdGgodGhpcy51aV9pbnMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLk9wZW5JbnNUaXAoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLlNldFN3aXRoKHRoaXMudWlfaW5zLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLk9wZW5JbnNUaXAoMCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVpX2J0bl9jbG9zZV9TZXQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/muLjmiI/pnZnpn7Porr7nva7lvIDlhbPnm5HlkKzkuovku7YgXG4gICAgICAgIHRoaXMudWlfbXVzaWMuY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX211c2ljLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGlzT3BlbiA9IHRoaXMuR2V0U3dpdGgodGhpcy51aV9tdXNpYyk7XG4gICAgICAgICAgICB0aGlzLk9wZW5NdXNpYyghaXNPcGVuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/pn7PmlYjmjInpkq7orr7nva7lvIDlhbPnm5HlkKzkuovku7ZcbiAgICAgICAgdGhpcy51aV95aW54aWFvX2J0bi5jbGVhckNsaWNrKCk7XG4gICAgICAgIHRoaXMudWlfeWlueGlhb19idG4ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXNPcGVuID0gdGhpcy5HZXRTd2l0aCh0aGlzLnVpX3lpbnhpYW9fYnRuKTtcbiAgICAgICAgICAgIHRoaXMuT3BlbkVmZmVjdHMoIWlzT3Blbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudWlfbGFnYW4uY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX2xhZ2FuLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5TZXRTd2l0aCh0aGlzLnVpX2xhZ2FuLCAhdGhpcy5HZXRTd2l0aCh0aGlzLnVpX2xhZ2FuKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5HZXRTd2l0aCh0aGlzLnVpX2xhZ2FuKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuT3BlbkxhR2FuKDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLk9wZW5MYUdhbigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy51aV9pbnMuY2xlYXJDbGljaygpO1xuICAgICAgICB0aGlzLnVpX2lucy5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuU2V0U3dpdGgodGhpcy51aV9pbnMsICF0aGlzLkdldFN3aXRoKHRoaXMudWlfaW5zKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5HZXRTd2l0aCh0aGlzLnVpX2lucykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLk9wZW5JbnNUaXAoMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuT3Blbkluc1RpcCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudWlfY2FyZEdyb3VwLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnVpX2NhcmRHcm91cC5fY2hpbGRyZW5baV0uYXNCdXR0b247XG4gICAgICAgICAgICBpZiAodCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXRHcm91cElzT24odGhpcy51aV9jYXJkR3JvdXAsIHQsIGkgKyAxID09IHRoaXMuY2FyZEJnSW5kZXgpOyAvL3QuaXNPbiA9IGkgKyAxID09IHRoaXMuY2FyZEJnSW5kZXg7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXBJbmRleCA9IGkgKyAxO1xuICAgICAgICAgICAgICAgIHQuY2xlYXJDbGljaygpO1xuICAgICAgICAgICAgICAgIHQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkdldEdyb3VwSXNPbih0KSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldEdyb3VwSXNPbih0aGlzLnVpX2NhcmRHcm91cCwgdCwgIXRoaXMuR2V0R3JvdXBJc09uKHQpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuR2V0R3JvdXBJc09uKHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYXJkQmdJbmRleCAhPSB0ZW1wSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2hhbmdlRGVza09yQ2FyZEJnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZEJnSW5kZXggPSB0ZW1wSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZXJQcmVmcy5TZXRJbnQoXCJrZXlfY2FyZEJnX2luZGV4XCIsIHRoaXMuY2FyZEJnSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJpbmRleCAgY2FyZDo6IFwiICsgdGhpcy5jYXJkQmdJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudWlfY2FyZHNHcm91cC5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy51aV9jYXJkc0dyb3VwLl9jaGlsZHJlbltpXS5hc0J1dHRvbjtcbiAgICAgICAgICAgIGlmICh0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNldEdyb3VwSXNPbih0aGlzLnVpX2NhcmRzR3JvdXAsIHQsIGkgKyAxID09IHRoaXMuY2FyZHNJbmRleCk7IC8vdC5pc09uID0gaSArIDEgPT0gdGhpcy5jYXJkc0luZGV4O1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICB0LmNsZWFyQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB0Lm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5HZXRHcm91cElzT24odCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRHcm91cElzT24odGhpcy51aV9jYXJkc0dyb3VwLCB0LCAhdGhpcy5HZXRHcm91cElzT24odCkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5HZXRHcm91cElzT24odCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNhcmRzSW5kZXggIT0gdGVtcEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NoYW5nZURlc2tPckNhcmRCZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzSW5kZXggPSB0ZW1wSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZXJQcmVmcy5TZXRJbnQoXCJrZXlfY2FyZHNfaW5kZXhcIiwgdGhpcy5jYXJkc0luZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKFwiaW5kZXggIGNhcmQ6OiBcIiArIHRoaXMuY2FyZHNJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnVpX2Rlc2tHcm91cC5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy51aV9kZXNrR3JvdXAuX2NoaWxkcmVuW2ldLmFzQnV0dG9uO1xuICAgICAgICAgICAgaWYgKHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuU2V0R3JvdXBJc09uKHRoaXMudWlfZGVza0dyb3VwLCB0LCBpICsgMSA9PSB0aGlzLmRlc2tCZ0luZGV4KTsvLyB0LmlzT24gPSBpICsgMSA9PSB0aGlzLmRlc2tCZ0luZGV4O1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wSW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgICAgICB0LmNsZWFyQ2xpY2soKTtcbiAgICAgICAgICAgICAgICB0Lm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5HZXRHcm91cElzT24odCkpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRHcm91cElzT24odGhpcy51aV9kZXNrR3JvdXAsIHQsICF0aGlzLkdldEdyb3VwSXNPbih0KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkdldEdyb3VwSXNPbih0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVza0JnSW5kZXggIT0gdGVtcEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NoYW5nZURlc2tPckNhcmRCZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tCZ0luZGV4ID0gdGVtcEluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoXCJkZXNrQmdJbmRleCAgY2FyZDo6IFwiICsgdGhpcy5kZXNrQmdJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZXJQcmVmcy5TZXRJbnQoXCJrZXlfZGVza0JnX2luZGV4XCIsIHRoaXMuZGVza0JnSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmdhbWVpZCA9PSA1MilcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBGX1doaXJsVmlld0N0ci5pbnN0YW5jZS52aWV3LlJlZnJlc2hEZXNrSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgKExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5nYW1laWQgPT0gNTEpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LlJlZnJlc2hEZXNrSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy51aV9qaWF6aHVHcm91cC5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy51aV9qaWF6aHVHcm91cC5fY2hpbGRyZW5baV0uYXNCdXR0b247XG4gICAgICAgICAgICBpZiAodCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXRHcm91cElzT24odGhpcy51aV9qaWF6aHVHcm91cCwgdCwgZmFsc2UpOy8vIHQuaXNPbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIHQuY2xlYXJDbGljaygpO1xuICAgICAgICAgICAgICAgIHQub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuR2V0R3JvdXBJc09uKHQpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuR2V0R3JvdXBJc09uKHQpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0R3JvdXBJc09uKHRoaXMudWlfamlhemh1R3JvdXAsIHQsICF0aGlzLkdldEdyb3VwSXNPbih0KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkdldEdyb3VwSXNPbih0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aV9qaWF6aHVOdW1Hcm91cC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWlfamlhemh1VGlwVGV4dC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNob3dKaWF6aHVMaXN0KHRlbXBJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5HZXRHcm91cElzT24odCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBTaG93Smlhemh1TGlzdCh0b2dnbGVJZHg6IG51bWJlcikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudWlfamlhemh1TnVtR3JvdXAuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy51aV9qaWF6aHVOdW1Hcm91cC5fY2hpbGRyZW5baV0uYXNCdXR0b247XG5cbiAgICAgICAgICAgIC8v5qC55o2u5oyJ6ZKu5pi+56S65Yqg5rOo55qE5Y+v6YCJ5oup5YaF5a65XG4gICAgICAgICAgICBidG4uYXNDb20uX2NoaWxkcmVuLmZvckVhY2gob2JqID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLm5vZGUubmFtZSA9PSBcIkdUZXh0RmllbGRcIikgb2JqLnRleHQgPSB0b2dnbGVJZHggPCAzID8gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5HZXRKaWF6aHVUeXBlKGkgKyAxKSA6IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnZpZXcuR2V0Smlhemh1VHlwZTIoaSArIDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8v6YCJ5oup5a+55bqU55qE5oyJ6ZKu77yM5a+55bqU5LiK6Z2i54K55Ye755qE5oyJ6ZKu5L2N572u55qE5pi+56S65YaF5a655Yi35pawXG4gICAgICAgICAgICBpZiAoYnRuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBidG4uY2xlYXJDbGljaygpO1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJ0bi5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHQgPSB0aGlzLnVpX2ppYXpodUdyb3VwLl9jaGlsZHJlblt0b2dnbGVJZHhdLmFzQnV0dG9uO1xuICAgICAgICAgICAgICAgICAgICBpZiAodCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IHRlbXBJbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5ZXJQcmVmcy5TZXRJbnQoRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsLnVzZXJpZCArIFwiX2tleV9qaWF6aHVcIiArICh0b2dnbGVJZHggKyAxKSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmFzQ29tLl9jaGlsZHJlbi5mb3JFYWNoKG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnRleHQgPSB0b2dnbGVJZHggPCAzID8gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5HZXRKaWF6aHVUeXBlKHR5cGUpIDogKHR5cGUgPT0gMSA/IFwiK1wiIDogRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2Uudmlldy5HZXRKaWF6aHVUeXBlMih0eXBlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBPcGVuTXVzaWMoaXNPcGVuOmJvb2xlYW4pIHtcbiAgICAgICAgaWYoaXNPcGVuKXtcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucmVzdW1lTXVzaWMoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wYXVzZU11c2ljKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TZXRTd2l0aCh0aGlzLnVpX211c2ljLCBpc09wZW4pO1xuICAgICAgICBBdWRpb01hbmFnZXIuVGV4YXNNdXNpY1N0YXR1cyA9IGlzT3BlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgT3BlbkVmZmVjdHMoaXNPcGVuOmJvb2xlYW4pXG4gICAge1xuICAgICAgICBpZihpc09wZW4pe1xuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5yZXN1bWVBbGxFZmZlY3RzKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGF1c2VBbGxFZmZlY3RzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TZXRTd2l0aCh0aGlzLnVpX3lpbnhpYW9fYnRuLCBpc09wZW4pO1xuICAgICAgICBBdWRpb01hbmFnZXIuVGV4YXNFZmZlY3RTdGF0dXMgPSBpc09wZW47XG4gICAgfVxuXG4gICAgcHVibGljIE9wZW5DaGF0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgUGxheWVyUHJlZnMuU2V0SW50KFwia2V5X2NoYXRfdmFsdWVcIiwgdmFsdWUpO1xuICAgICAgICAvLyBpZiAoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmdhbWVpZCA9PSA1MilcbiAgICAgICAgLy8ge1xuXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmdhbWVpZCA9PSA1MSlcbiAgICAgICAgLy8ge1xuICAgICAgICBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS52aWV3LklzRGlzcGxheUNoYXQoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBwdWJsaWMgT3BlbkxhR2FuKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgUGxheWVyUHJlZnMuU2V0SW50KFwia2V5X2xhZ2FuX3ZhbHVlXCIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5TZXRTd2l0aCh0aGlzLnVpX2xhZ2FuLCAodmFsdWUgPT0gMSkpO1xuICAgIH1cbiAgICBwdWJsaWMgT3Blbkluc1RpcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5nYW1laWQgPT0gNTEgJiYgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuZ2FtZXR5cGUgPT0gMikvL+WPquiusOW9leW+t+W3nuS/nemZqeaIv+mXtOeahOS/nemZqeaPkOekuueKtuaAgVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaW5zVGlwU3RyID0gUGxheWVyUHJlZnMuR2V0U3RyaW5nKFwia2V5X2luc1RpcF92YWx1ZVwiLCBcIlwiKTtcbiAgICAgICAgICAgIGxldCBuZXdJbnNUaXBTdHIgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGluc1RpcFN0ciAhPSBudWxsICYmIGluc1RpcFN0ciAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluc0Fycjogc3RyaW5nW10gPSBpbnNUaXBTdHIuc3BsaXQoJzsnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluc0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGluc0FycltpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhYmxlSW5mb0Fycjogc3RyaW5nW10gPSB0ZW1wLnNwbGl0KCcrJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZUluZm9BcnIubGVuZ3RoIDwgMikgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Sb29tX3RudW1iZXIgPT0gKHRhYmxlSW5mb0FyclswXSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBuZXdJbnNUaXBTdHIgKz0gdGFibGVJbmZvQXJyWzBdICsgXCIrXCIgKyB0YWJsZUluZm9BcnJbMV0gKyBcIjtcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3SW5zVGlwU3RyICs9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLlJvb21fdG51bWJlciArIFwiK1wiICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdJbnNUaXBTdHIgPSBGX1RleGFzVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5Sb29tX3RudW1iZXIgKyBcIitcIiArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUGxheWVyUHJlZnMuU2V0U3RyaW5nKFwia2V5X2luc1RpcF92YWx1ZVwiLCBuZXdJbnNUaXBTdHIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuU2V0U3dpdGgodGhpcy51aV9pbnMsICh2YWx1ZSA9PSAxKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBTZXRHcm91cElzT24oZ3JvdXA6IGZndWkuR0NvbXBvbmVudCwgb2JqOiBmZ3VpLkdPYmplY3QsIGlzT246IGJvb2xlYW4pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cC5fY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0ID0gZ3JvdXAuX2NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHQuYXNDb20uZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvYmouYXNDb20uZ2V0Q29udHJvbGxlcihcImlzT25cIikuc2V0U2VsZWN0ZWRJbmRleChpc09uID8gMSA6IDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgR2V0R3JvdXBJc09uKGJ1dHRvbjogZmd1aS5HT2JqZWN0KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBpc09uID0gYnV0dG9uLmFzQ29tLmdldENvbnRyb2xsZXIoXCJpc09uXCIpLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChpc09uID09IG51bGwpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hc0NvbS5nZXRDb250cm9sbGVyKFwiaXNPblwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICAgICAgaXNPbiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzT24gPT0gMCA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIFNldFN3aXRoKGJ1dHRvbjogZmd1aS5HT2JqZWN0LCBvcGVuOiBib29sZWFuKSB7XG4gICAgICAgIGJ1dHRvbi5hc0NvbS5nZXRDb250cm9sbGVyKFwib3BlblwiKS5zZXRTZWxlY3RlZEluZGV4KG9wZW4gPyAxIDogMCk7XG4gICAgfVxuICAgIHByaXZhdGUgR2V0U3dpdGgoYnV0dG9uOiBmZ3VpLkdPYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHYgPSBidXR0b24uYXNDb20uZ2V0Q29udHJvbGxlcihcIm9wZW5cIikuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgaWYgKHYgPT0gbnVsbCkge1xuICAgICAgICAgICAgYnV0dG9uLmFzQ29tLmdldENvbnRyb2xsZXIoXCJvcGVuXCIpLnNldFNlbGVjdGVkSW5kZXgoMCk7XG4gICAgICAgICAgICB2ID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdiA9PSAwID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cbn1cbiJdfQ==
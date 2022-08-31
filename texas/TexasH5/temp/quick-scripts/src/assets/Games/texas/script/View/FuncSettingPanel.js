"use strict";
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
import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { PlayerPrefs } from "../../../../Script/Common/UIUtil";
import F_TexasViewCtr from "../Contrl/F_TexasViewCtr";
import { TexasLanguage } from "../Model/TexasLanguage";

export default class FuncSettingPanel extends ViewBase {
    public ui_btn_close_Set: fgui.GButton = null;

    //xiugaihaole
    public musicValue: number;
    public yinxiaoValue: number;

    public ui_cardGroup: fgui.GComponent = null;//换牌面
    public ui_deskGroup: fgui.GComponent = null;//换桌布
    public ui_cardsGroup: fgui.GComponent = null;
    public ui_jiazhuGroup: fgui.GComponent = null;
    public ui_jiazhuNumGroup: fgui.GComponent = null;
    public ui_jiazhuTipText: fgui.GTextField = null;

    public ui_music: fgui.GButton = null;
    public ui_yinxiao_btn: fgui.GButton = null;
    public ui_ins: fgui.GButton = null;
    public ui_lagan: fgui.GButton = null;
    public ui_txtversion: fgui.GTextField = null;//版本号

    private deskBgIndex = 3;
    private cardBgIndex = 1;
    private cardsIndex = 1;

    private isChangeDeskOrCardBg = false;

    public ui_titleText: fgui.GTextField = null;
    public ui_txtMusic: fgui.GTextField = null;
    public ui_txtSound: fgui.GTextField = null;
    public ui_txtCard: fgui.GTextField = null;
    public ui_txtDesktop: fgui.GTextField = null;
    public ui_txtIns: fgui.GTextField = null;
    public ui_txtInsTip: fgui.GTextField = null;
    public ui_txtLagan: fgui.GTextField = null;

    private onLoadEnd = false;
    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }

    public MyStart() {
        this.mystart = true;
        if (this.onLoadEnd) this.MyStartEx();
    }
    AutoSetGoProperty() { }

    public MyStartEx() {
        super.AutoSetGoProperty();
        this.musicValue = AudioManager.Singleton.MusicVolume;
        this.yinxiaoValue = AudioManager.Singleton.YinxiaoVolume;

        this.Init();
        this.Register();
        this.Hide();
    }
    public InitLanguage() {
        this.ui_titleText.text = TexasLanguage.getLanguageById(1726);//系统设置
        this.ui_txtMusic.text = TexasLanguage.getLanguageById(1312);//音乐
        this.ui_txtSound.text = TexasLanguage.getLanguageById(1313);//音效
        this.ui_txtCard.text = TexasLanguage.getLanguageById(1956);//自定义快捷加注
        this.ui_txtDesktop.text = TexasLanguage.getLanguageById(1068);//桌面风格

        this.ui_txtIns.text = TexasLanguage.getLanguageById(1957);//保险提示
        this.ui_txtLagan.text = TexasLanguage.getLanguageById(1958);//拉杆确认
        this.ui_txtInsTip.text = TexasLanguage.getLanguageById(1959);//(只对本局有效)

        this.ui_jiazhuTipText.text = TexasLanguage.getLanguageById(2111);//點擊快速加註按鈕\n可自定義加註底池比例
    }
    private Init() {
        // this.ui_txtversion.text = "Appver:" + AppConfigList.Current.AppVer;

        // if (AppConfigEx.VersionConfig != null)
        // {
        //     this.ui_txtversion.text += "     Resver:" + AppConfigEx.VersionConfig.ResVer;
        // }
    }
    public Show() {
        this.node.active = true;
        super.Show();
        this.InitLanguage();
        for (var i = 0; i < this.ui_jiazhuGroup._children.length; i++) {
            let t = this.ui_jiazhuGroup._children[i].asButton;
            if (t != null) {
                this.SetGroupIsOn(this.ui_jiazhuGroup, t, false); //t.isOn = false;
                let type = PlayerPrefs.GetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + (i + 1), i < 3 ? 1 + 2 * (i + 1) : 1);
                t.asCom._children.forEach(obj => {
                    if (obj.node.name == "GTextField") obj.text = i < 3 ? F_TexasViewCtr.instance.view.GetJiazhuType(type) : (type == 1 ? "+" : F_TexasViewCtr.instance.view.GetJiazhuType2(type));
                });
            }
        }
        this.ui_jiazhuNumGroup.visible = false;
        this.ui_jiazhuTipText.visible = true;
    }
    public Hide() {
        super.Hide();
        if (this.isChangeDeskOrCardBg) {
            // if (F_TexasViewCtr.instance.Model.gameid == 52)
            // {
            //     F_WhirlViewCtr.instance.RefreshDeskBgAndCardBg();
            // }
            // else if (LobbyViewCtr.instance.Model.gameid == 51)
            // {
            F_TexasViewCtr.instance.RefreshDeskBgAndCardBg();
            // }            
        }

        this.isChangeDeskOrCardBg = false;
        this.node.active = false;
    }

    private Register() {
        this.deskBgIndex = PlayerPrefs.GetInt("key_deskBg_index", 3);
        this.cardBgIndex = PlayerPrefs.GetInt("key_cardBg_index", 3);
        this.cardsIndex = PlayerPrefs.GetInt("key_cards_index", 1);
        this.OpenMusic(AudioManager.TexasMusicStatus);
        this.OpenEffects(AudioManager.TexasEffectStatus);
        this.OpenChat(PlayerPrefs.GetInt("key_chat_value", 1));
        this.OpenLaGan(PlayerPrefs.GetInt("key_lagan_value", 0));
        if (F_TexasViewCtr.instance.Model.gameid == 51) {
            if (F_TexasViewCtr.instance.Model.gametype == 2) {
                let insVlaue = 1;
                let insTipStr: string = PlayerPrefs.GetString("key_insTip_value", "");
                if (insTipStr != null && insTipStr != "") {
                    let insArr: string[] = insTipStr.split(';');
                    insArr.forEach(temp => {
                        let tableInfoArr: string[] = temp.split('+');
                        if (tableInfoArr.length < 2) return true;
                        if (F_TexasViewCtr.instance.Model.Room_tnumber.toString() == tableInfoArr[0]) {
                            insVlaue = Number.parseInt(tableInfoArr[1]);
                        }
                    });
                }
                this.OpenInsTip(insVlaue);
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

        this.ui_btn_close_Set.onClick(() => {
            this.Hide();
        });

        //游戏静音设置开关监听事件 
        this.ui_music.clearClick();
        this.ui_music.onClick(() => {
            let isOpen = this.GetSwith(this.ui_music);
            this.OpenMusic(!isOpen);
        });

        //音效按钮设置开关监听事件
        this.ui_yinxiao_btn.clearClick();
        this.ui_yinxiao_btn.onClick(() => {
            let isOpen = this.GetSwith(this.ui_yinxiao_btn);
            this.OpenEffects(!isOpen);
        });

        this.ui_lagan.clearClick();
        this.ui_lagan.onClick(() => {
            this.SetSwith(this.ui_lagan, !this.GetSwith(this.ui_lagan));
            if (this.GetSwith(this.ui_lagan)) {
                this.OpenLaGan(1);
            } else {
                this.OpenLaGan(0);
            }
        });

        this.ui_ins.clearClick();
        this.ui_ins.onClick(() => {
            this.SetSwith(this.ui_ins, !this.GetSwith(this.ui_ins));
            if (this.GetSwith(this.ui_ins)) {
                this.OpenInsTip(1);
            } else {
                this.OpenInsTip(0);
            }
        });


        for (var i = 0; i < this.ui_cardGroup._children.length; i++) {
            let t = this.ui_cardGroup._children[i].asButton;
            if (t != null) {
                this.SetGroupIsOn(this.ui_cardGroup, t, i + 1 == this.cardBgIndex); //t.isOn = i + 1 == this.cardBgIndex;
                let tempIndex = i + 1;
                t.clearClick();
                t.onClick(() => {
                    if (this.GetGroupIsOn(t)) return;
                    this.SetGroupIsOn(this.ui_cardGroup, t, !this.GetGroupIsOn(t));
                    if (this.GetGroupIsOn(t)) {
                        if (this.cardBgIndex != tempIndex) {
                            this.isChangeDeskOrCardBg = true;
                        }
                        this.cardBgIndex = tempIndex;
                        PlayerPrefs.SetInt("key_cardBg_index", this.cardBgIndex);
                        cc.error("index  card:: " + this.cardBgIndex);

                    }

                });
            }
        }

        for (var i = 0; i < this.ui_cardsGroup._children.length; i++) {
            let t = this.ui_cardsGroup._children[i].asButton;
            if (t != null) {
                this.SetGroupIsOn(this.ui_cardsGroup, t, i + 1 == this.cardsIndex); //t.isOn = i + 1 == this.cardsIndex;
                let tempIndex = i + 1;
                t.clearClick();
                t.onClick(() => {
                    if (this.GetGroupIsOn(t)) return;
                    this.SetGroupIsOn(this.ui_cardsGroup, t, !this.GetGroupIsOn(t));
                    if (this.GetGroupIsOn(t)) {
                        if (this.cardsIndex != tempIndex) {
                            this.isChangeDeskOrCardBg = true;
                        }
                        this.cardsIndex = tempIndex;
                        PlayerPrefs.SetInt("key_cards_index", this.cardsIndex);
                        cc.error("index  card:: " + this.cardsIndex);

                    }
                });
            }
        }

        for (var i = 0; i < this.ui_deskGroup._children.length; i++) {
            let t = this.ui_deskGroup._children[i].asButton;
            if (t != null) {
                this.SetGroupIsOn(this.ui_deskGroup, t, i + 1 == this.deskBgIndex);// t.isOn = i + 1 == this.deskBgIndex;
                let tempIndex = i + 1;
                t.clearClick();
                t.onClick(() => {
                    if (this.GetGroupIsOn(t)) return;
                    this.SetGroupIsOn(this.ui_deskGroup, t, !this.GetGroupIsOn(t));
                    if (this.GetGroupIsOn(t)) {
                        if (this.deskBgIndex != tempIndex) {
                            this.isChangeDeskOrCardBg = true;
                        }
                        this.deskBgIndex = tempIndex;
                        cc.error("deskBgIndex  card:: " + this.deskBgIndex);
                        PlayerPrefs.SetInt("key_deskBg_index", this.deskBgIndex);
                        // if (F_TexasViewCtr.instance.Model.gameid == 52)
                        // {
                        //     F_WhirlViewCtr.instance.view.RefreshDeskImage();
                        // }
                        // else if (LobbyViewCtr.instance.Model.gameid == 51)
                        // {
                        F_TexasViewCtr.instance.view.RefreshDeskImage();
                        // }
                    }
                });
            }
        }
        for (var i = 0; i < this.ui_jiazhuGroup._children.length; i++) {
            let t = this.ui_jiazhuGroup._children[i].asButton;
            if (t != null) {
                this.SetGroupIsOn(this.ui_jiazhuGroup, t, false);// t.isOn = false;
                let tempIndex = i;
                t.clearClick();
                t.onClick(() => {
                    console.log(this.GetGroupIsOn(t));
                    if (this.GetGroupIsOn(t)) return;
                    this.SetGroupIsOn(this.ui_jiazhuGroup, t, !this.GetGroupIsOn(t));
                    if (this.GetGroupIsOn(t)) {
                        this.ui_jiazhuNumGroup.visible = true;
                        this.ui_jiazhuTipText.visible = false;
                        this.ShowJiazhuList(tempIndex);
                    }
                    console.log(this.GetGroupIsOn(t));
                });
            }
        }
    }
    public ShowJiazhuList(toggleIdx: number) {
        for (var i = 0; i < this.ui_jiazhuNumGroup._children.length; i++) {
            let btn = this.ui_jiazhuNumGroup._children[i].asButton;

            //根据按钮显示加注的可选择内容
            btn.asCom._children.forEach(obj => {
                if (obj.node.name == "GTextField") obj.text = toggleIdx < 3 ? F_TexasViewCtr.instance.view.GetJiazhuType(i + 1) : F_TexasViewCtr.instance.view.GetJiazhuType2(i + 1);
            });

            //选择对应的按钮，对应上面点击的按钮位置的显示内容刷新
            if (btn != null) {
                btn.clearClick();
                let tempIndex = i;
                btn.onClick(() => {
                    let t = this.ui_jiazhuGroup._children[toggleIdx].asButton;
                    if (t != null) {
                        let type = tempIndex + 1;
                        PlayerPrefs.SetInt(F_TexasViewCtr.instance.Model.mPlayerModel.userid + "_key_jiazhu" + (toggleIdx + 1), type);
                        t.asCom._children.forEach(obj => {
                            obj.text = toggleIdx < 3 ? F_TexasViewCtr.instance.view.GetJiazhuType(type) : (type == 1 ? "+" : F_TexasViewCtr.instance.view.GetJiazhuType2(type));
                        });
                    }
                });
            }
        }
    }
    public OpenMusic(isOpen:boolean) {
        if(isOpen){
            AudioManager.Singleton.resumeMusic();
        }else{
             AudioManager.Singleton.pauseMusic();
        }
        this.SetSwith(this.ui_music, isOpen);
        AudioManager.TexasMusicStatus = isOpen;
    }

    public OpenEffects(isOpen:boolean)
    {
        if(isOpen){
            AudioManager.Singleton.resumeAllEffects();
        }else{
             AudioManager.Singleton.pauseAllEffects();
        }
        this.SetSwith(this.ui_yinxiao_btn, isOpen);
        AudioManager.TexasEffectStatus = isOpen;
    }

    public OpenChat(value: number) {
        PlayerPrefs.SetInt("key_chat_value", value);
        // if (LobbyViewCtr.instance.Model.gameid == 52)
        // {

        // }
        // else if (LobbyViewCtr.instance.Model.gameid == 51)
        // {
        F_TexasViewCtr.instance.view.IsDisplayChat();
        // }
    }
    public OpenLaGan(value: number) {
        PlayerPrefs.SetInt("key_lagan_value", value);
        this.SetSwith(this.ui_lagan, (value == 1));
    }
    public OpenInsTip(value: number) {
        if (F_TexasViewCtr.instance.Model.gameid == 51 && F_TexasViewCtr.instance.Model.gametype == 2)//只记录德州保险房间的保险提示状态
        {
            let insTipStr = PlayerPrefs.GetString("key_insTip_value", "");
            let newInsTipStr = "";
            if (insTipStr != null && insTipStr != "") {
                let insArr: string[] = insTipStr.split(';');
                for (var i = 0; i < insArr.length; i++) {
                    let temp = insArr[i];
                    let tableInfoArr: string[] = temp.split('+');
                    if (tableInfoArr.length < 2) continue;
                    if (F_TexasViewCtr.instance.Model.Room_tnumber == (tableInfoArr[0])) continue;
                    newInsTipStr += tableInfoArr[0] + "+" + tableInfoArr[1] + ";";
                }
                newInsTipStr += F_TexasViewCtr.instance.Model.Room_tnumber + "+" + value;
            }
            else {
                newInsTipStr = F_TexasViewCtr.instance.Model.Room_tnumber + "+" + value;
            }
            PlayerPrefs.SetString("key_insTip_value", newInsTipStr);
        }
        this.SetSwith(this.ui_ins, (value == 1));
    }

    private SetGroupIsOn(group: fgui.GComponent, obj: fgui.GObject, isOn: boolean) {
        for (var i = 0; i < group._children.length; i++) {
            let t = group._children[i];
            if (t != null) {
                t.asCom.getController("isOn").setSelectedIndex(0);
            }
        }
        obj.asCom.getController("isOn").setSelectedIndex(isOn ? 1 : 0);
    }

    private GetGroupIsOn(button: fgui.GObject): boolean {
        let isOn = button.asCom.getController("isOn").selectedIndex;
        if (isOn == null) {
            button.asCom.getController("isOn").setSelectedIndex(0);
            isOn = 0;
        }
        return isOn == 0 ? false : true;
    }

    private SetSwith(button: fgui.GObject, open: boolean) {
        button.asCom.getController("open").setSelectedIndex(open ? 1 : 0);
    }
    private GetSwith(button: fgui.GObject): boolean {
        let v = button.asCom.getController("open").selectedIndex;
        if (v == null) {
            button.asCom.getController("open").setSelectedIndex(0);
            v = 0;
        }
        return v == 0 ? false : true;
    }
}

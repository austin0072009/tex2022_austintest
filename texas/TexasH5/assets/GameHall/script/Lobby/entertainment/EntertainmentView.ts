import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import { SceneManager } from "../../../../Script/BaseFrame/SceneManager";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import { LoginViewCtr } from "../../Login/LoginViewCtr";
import NativeMethod from "../../NativeMethod";
import LobbyViewCtr from "../LobbyViewCtr";
import GameItemInEntertainment from "./GameItemInEntertainment";
import GameUpdateMgr from "../../GameUpdateMgr";
import { LanguageConfig } from "../LanguageConfig";

/**
 * @description 娛樂
 */
export default class EntertainmentView extends fgui.GComponent {
    private otherGameList: fgui.GList = null;
    private bairenGameList: fgui.GList = null;
    private fishGameList: fgui.GList = null;
    private gameTypeCon: fgui.Controller;
    private entergold: fgui.GTextField;

    private slideCom: fgui.GComponent;
    private slideList: fgui.GList;
    private indexController: fgui.Controller;
    private timerId;
    private btn_enteraddGold: fgui.GButton;
    private btn_service: fgui.GButton;
    private enter_eyeBtn: fgui.GButton;

    private _isCanTouch: boolean = true;
    /**游戏配置 */
    public multiplayerGameConfig = [];
    public slotsConfig = [];
    public fishComfig = [];
    /**游戏开关配置 */
    private config: { gameId: number, isopen: number }[] = [];

    protected onConstruct() {
        this.otherGameList = this.getChild("otherGameList").asList;
        this.bairenGameList = this.getChild("bairenGameList").asList;
        this.fishGameList = this.getChild("fishGameList").asList;
        this.entergold = this.getChild("entergold").asTextField;

        //  this.otherGameList.setVirtual();
        //  this.otherGameList.itemRenderer = this.renderListItem.bind(this);


        this.otherGameList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
        this.bairenGameList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
        this.fishGameList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);
        this.gameTypeCon = this.getController("state");
        this.gameTypeCon.onChanged(this.selectGame, this);
        this.gameTypeCon.selectedIndex = 1;

        /**輪播圖 */
        this.slideCom = this.getChild("n27").asCom;
        this.slideList = this.slideCom.getChild("list").asList;
        this.indexController = this.slideCom.getController("index");
        this.slideList.setVirtualAndLoop();
        this.slideList.itemRenderer = this.itemRenderer.bind(this);
        this.slideList.numItems = 4;

        this.btn_enteraddGold = this.getChild("btn_enteraddGold").asButton;
        this.btn_enteraddGold.onClick(this.showTopup, this);
        this.enter_eyeBtn = this.getChild("enter_eyeBtn").asButton;
        this.enter_eyeBtn.onClick(() => {
            AudioManager.Singleton.play('EntertainmentView', "button");
            this.hideGold();
        })
        this.btn_service = this.getChild("btn_service").asButton;
        this.btn_service.onClick(() => {
            AudioManager.Singleton.play('EntertainmentView', "button");
            UIUtil.kefuFunction(LobbyViewCtr.instance.view.openWebsite.bind(LobbyViewCtr.instance.view));
        })

        this.checkUpdate();
        this.initListView();
    }

    public itemRenderer(index: number, obj: fgui.GObject) {
        this.indexController.setSelectedIndex(index);
    }
    public selectGame() {
        // if (!this._isCanTouch) {
        //     return;
        // }
        if (this.gameTypeCon.selectedIndex == 1) {
            // this.otherGameList.numItems = this.multiplayerGameConfig.length;
            this.changedListData(1);
        } else if (this.gameTypeCon.selectedIndex == 2) {
            // this.otherGameList.numItems = this.slotsConfig.length;
            this.changedListData(2);
        } else if (this.gameTypeCon.selectedIndex == 3) {
            //this.otherGameList.numItems = 0;
            this.changedListData(3);
        }
    }

    /**隐藏金币 */
    public hideGold() {
        AudioManager.Singleton.play('EntertainmentView', "button");
        if (this.enter_eyeBtn.selected) {
            this.entergold.text = '*****';
        } else {
            this.entergold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + "";;
        }
    }

    public initListView() {
        // if (type == 1) { //百人
        this.bairenGameList.removeChildrenToPool();
        for (let i = 0, len = this.multiplayerGameConfig.length; i < len; i++) {
            let item = <GameItemInEntertainment>this.bairenGameList.addItemFromPool();
            let data = this.multiplayerGameConfig[i];
            item.setData(data.gameId, data.gameIcon, data.update);
        }
        // } else if (type == 2) { //slots
        this.otherGameList.removeChildrenToPool();
        for (let i = 0, len = this.slotsConfig.length; i < len; i++) {
            let item = <GameItemInEntertainment>this.otherGameList.addItemFromPool();
            let data = this.slotsConfig[i];
            item.setData(data.gameId, data.gameIcon, data.update);
        }
        // } else if (type == 3) { //捕魚
        this.fishGameList.removeChildrenToPool();
        for (let i = 0, len = this.fishComfig.length; i < len; i++) {
            let item = <GameItemInEntertainment>this.fishGameList.addItemFromPool();
            let data = this.fishComfig[i];
            item.setData(data.gameId, data.gameIcon, data.update);
        }
        // }
    }

    public changedListData(type: number) {
        let isShow = LoginViewCtr.instance.Model.cidx == 0;
        if (isShow) {
            this.getChild("n36").asCom.visible = isShow;
            this.otherGameList.visible = !isShow;
            this.bairenGameList.visible = !isShow;
            this.fishGameList.visible = !isShow;
        } else {
            this.getChild("n36").asCom.visible = false;
            this.bairenGameList.visible = type == 1;
            this.otherGameList.visible = type == 2;
            this.fishGameList.visible = type == 3;
        }
    }

    public renderListItem(index: number, obj: fgui.GObject) {
        let item: GameItemInEntertainment = <GameItemInEntertainment>obj;
        let data: { gameId: number, gameIcon: string, name: string, update: boolean };
        let selIndex: number = this.gameTypeCon.selectedIndex;
        if (selIndex == 1) {//多人
            data = this.multiplayerGameConfig[index];
        } else if (selIndex == 2) { //电子
            data = this.slotsConfig[index];
        }
        item.setData(data.gameId, data.gameIcon, data.update);
    }
    /**游戏是否有更新 */
    public checkUpdate(index: number = 0) {
        let config = LoginViewCtr.instance.Model.config;
        this.fishComfig = config.slice(9);
        this.multiplayerGameConfig = config.slice(8, 9);
        this.slotsConfig = config.slice(0, 8);
    }

    public changedData(id: number) {
        let config = LoginViewCtr.instance.Model.config;
        config.forEach((item) => {
            if (item.gameId == id) {
                item.update = false;
            }
        })
        this.checkUpdate();
        this.changCanTouch();
    }

    public changCanTouch() {
        this._isCanTouch = true;
    }


    public onClickItem(item: GameItemInEntertainment) {
        if (!this._isCanTouch) {
            CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(13001));
            return;
        }
        AudioManager.Singleton.play('EntertainmentView', "button");
        this._isCanTouch = false;
        this.checkUpdateGame(item.gameId, item);
    }

    public checkUpdateGame(gameId: number, item?: GameItemInEntertainment) {
        let gameName: string = "";
        switch (gameId) {
            case 21: //龙虎
                AppConst.currentGameId = 21;
                AppConst.currentlevelid = 211;
                gameName = "slotdt";
                break;
            case 201://忍者
                AppConst.currentGameId = 201;
                AppConst.currentlevelid = 2011;
                gameName = "ninjaVSsamurai";
                break;
            case 104://牛仔
                AppConst.currentGameId = 104;
                AppConst.currentlevelid = 1041;
                gameName = "TexasCowboy";
                break;
            case 254: //宙斯
                AppConst.currentGameId = 254;
                AppConst.currentlevelid = 2541;
                gameName = "zues";
                break;
            case 92: // 九线
                AppConst.currentGameId = 92;
                AppConst.currentlevelid = 921;
                gameName = "nineline";
                break;
            case 54: // 火女
                AppConst.currentGameId = 54;
                AppConst.currentlevelid = 541;
                gameName = "slotFireQueen";
                break;
            case 91: // 水果玛丽
                AppConst.currentGameId = 91;
                AppConst.currentlevelid = 911;
                gameName = "slotfruit";
                break;
            case 258: // 财神
                AppConst.currentGameId = 258;
                AppConst.currentlevelid = 2581;
                gameName = "slotrq";
                break;
            case 4096: // 火牛
                AppConst.currentGameId = 4096;
                AppConst.currentlevelid = 40961;
                gameName = "WildHerd";
                break;
            case 1000://捕鱼
                AppConst.currentGameId = 1000;
                AppConst.currentlevelid = 10001;
                gameName = "Fish1000";
                break;

        }
        // 捕鱼暂时提示期待 
        if (gameId == 1000) {
            this._isCanTouch = true;
            CommonCtr.instance.view.ShowTipLabel("敬请期待！");
            return;
        }

        if (!item) {
            for (let i = 0; i < this.otherGameList._children.length; i++) {
                if ((<GameItemInEntertainment>this.otherGameList._children[i]).gameId == gameId) {
                    item = <GameItemInEntertainment>this.otherGameList._children[i];
                    break;
                }
            }
        }
        if (!item) {
            for (let i = 0; i < this.bairenGameList._children.length; i++) {
                if ((<GameItemInEntertainment>this.bairenGameList._children[i]).gameId == gameId) {
                    item = <GameItemInEntertainment>this.bairenGameList._children[i];
                    break;
                }
            }
        }
        if (!item) {
            for (let i = 0; i < this.fishGameList._children.length; i++) {
                if ((<GameItemInEntertainment>this.fishGameList._children[i]).gameId == gameId) {
                    item = <GameItemInEntertainment>this.fishGameList._children[i];
                    break;
                }
            }
        }
        if (item) {
            if (cc.sys.isNative && BaseFrameNative.isNeedUpdate) {  //
                GameUpdateMgr.instance.checkUpdate(gameName, this.enterGame.bind(this), CommonCtr.instance.view, null, (size: number, totleSize: number) => {
                    item.setProgress(size, totleSize);
                }, () => {
                    this.changCanTouch();
                    item.updateFild();
                });
            } else {
                this.enterGame();
            }
        }
    }

    public enterGame() {
        let gameId = AppConst.currentGameId;
        for (let i = 0, len = this.config.length; i < len; i++) {
            if (this.config[i].gameId == gameId) {
                if (this.config[i].isopen == 0) {
                    this.changCanTouch();
                    CommonCtr.instance.ShowTipLabel("抱歉,該游戲暫未開放");
                    return;
                } else {
                    break;
                }
            }
        }

        switch (gameId) {
            case 104: //牛仔
                LobbyViewCtr.instance.cs_entertable_TexBoy();
                break;
            case 1000: //捕鱼
                LobbyViewCtr.instance.entertable_Fish();
                break;
            // case 21: //龙虎
            // case 254://宙斯
            // case 92://九线
            // case 54://火女
            // case 91://水果玛丽
            // case 258://财神
            // case 4096://火牛
            // case 201://忍者
            default:
                let gold = UIUtil.formatNumber(AppConst.mPlayerModel.gold);
                if (gold < 10) {
                    CommonCtr.instance.ShowTipLabel("最低带入10金币，请充值后再进入哦");
                    this.changCanTouch();
                    return;
                }
                LobbyViewCtr.instance.cs_slotentertable();
                break;

        }

    }

    public joinGame() {
        let gameId = AppConst.currentGameId;
        clearInterval(this.timerId);
        switch (gameId) {
            case 21: //龙虎
                SceneManager.Singleton.loadScene("slotdt", "slotdt");
                break;
            case 201://忍者
                SceneManager.Singleton.loadScene("ninjaVSsamurai", "ninjaVSsamurai");
                break;
            case 104: //牛仔
                // 切换横屏
                NativeMethod.changeOrientationH(true);
                setTimeout(() => {
                    SceneManager.Singleton.loadScene("TexasCowboy", "TexasCowboy");
                }, 100)
                break;
            case 254: //宙斯
                NativeMethod.changeOrientationH(true);
                setTimeout(() => {
                    SceneManager.Singleton.loadScene("zues", "zues");
                }, 100)
                break;
            case 92: //九线
                NativeMethod.changeOrientationH(true);
                setTimeout(() => {
                    SceneManager.Singleton.loadScene("nineline", "nineline");
                }, 100)
                break;
            case 54: //火女
                NativeMethod.changeOrientationH(true);
                setTimeout(() => {
                    SceneManager.Singleton.loadScene("slotFireQueen", "SlotFireQuene");
                }, 100)
                break;
            case 91: //水果玛丽
                NativeMethod.changeOrientationH(true);
                setTimeout(() => {
                    SceneManager.Singleton.loadScene("slotfruit", "slotfruit");
                }, 100)
                break;
            case 258: //财神
                NativeMethod.changeOrientationH(true);
                setTimeout(() => {
                    SceneManager.Singleton.loadScene("slotrq", "slotrq");
                }, 100)
                break;
            case 4096: //火牛
                NativeMethod.changeOrientationH(true);
                setTimeout(() => {
                    SceneManager.Singleton.loadScene("WildHerd", "wildHerd");
                }, 100)
                break;
            case 1000: //捕鱼
                // 切换横屏
                NativeMethod.changeOrientationH(true);
                setTimeout(() => {
                    SceneManager.Singleton.loadScene("Fish1000", "fishMain");
                }, 100)
                break;
        }
    }

    public showTopup() {
        AudioManager.Singleton.play('EntertainmentView', "button");
        LobbyViewCtr.instance.view.showTopup();
    }

    public Show() {
        // let gameId = AppConst.currentGameId;
        // if (gameId == 104) {
        //     this.gameTypeCon.selectedIndex = 1;
        // } else if (gameId == 1000) {
        //     this.gameTypeCon.selectedIndex = 3;
        // } else {
        //     this.gameTypeCon.selectedIndex = 2;
        // }
        this.gameTypeCon.selectedIndex = 1;
        this.changedListData(1);
        this.changedGold();
        // this.timerId && clearInterval(this.timerId);
        // this.timerId = setInterval(() => {
        //     this.slideList.scrollPane.scrollRight(1, true);
        // }, 5000)

        this.visible = true;
        this.loopRoll();

        if (this.config.length <= 0) {
            let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetIsOpenInfo";
            HttpHelpEx.instance.get(url)
                .then((res) => {
                    this.config = res.data.data;
                    cc.log("---------------", res)
                })
                .catch(() => {

                })
        }


        // let isShow = LoginViewCtr.instance.Model.cidx == 0;
        // this.otherGameList.visible = !isShow;
        // this.bairenGameList.visible = !isShow;
        // this.fishGameList.visible = !isShow;
        // this.getChild("n36").asCom.visible = isShow;
    }
    public loopRoll() {
        this.node.stopAllActions();
        this.node.runAction(
            cc.repeatForever(
                cc.sequence(
                    cc.delayTime(5),
                    cc.callFunc(() => {
                        this.slideList.scrollPane.scrollRight(1, true);
                    })))
        )
    }


    public changedGold() {
        // this.entergold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + '';
        if (this.enter_eyeBtn.selected) {
            this.entergold.text = '*****';
        } else {
            this.entergold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + "";;
        }
    }
    public Hide() {
        // clearInterval(this.timerId);
        this.node.stopAllActions();
        this.visible = false;
    }
    onDestroy() {
        this.node.stopAllActions();
        // clearInterval(this.timerId);
    }

}
"use strict";
cc._RF.push(module, 'dd81d7Gh+BCQL80NR3/ioph', 'EntertainmentView');
// GameHall/script/Lobby/entertainment/EntertainmentView.ts

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
var SceneManager_1 = require("../../../../Script/BaseFrame/SceneManager");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var LoginViewCtr_1 = require("../../Login/LoginViewCtr");
var NativeMethod_1 = require("../../NativeMethod");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var GameUpdateMgr_1 = require("../../GameUpdateMgr");
var LanguageConfig_1 = require("../LanguageConfig");
/**
 * @description 娛樂
 */
var EntertainmentView = /** @class */ (function (_super) {
    __extends(EntertainmentView, _super);
    function EntertainmentView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherGameList = null;
        _this.bairenGameList = null;
        _this.fishGameList = null;
        _this._isCanTouch = true;
        /**游戏配置 */
        _this.multiplayerGameConfig = [];
        _this.slotsConfig = [];
        _this.fishComfig = [];
        /**游戏开关配置 */
        _this.config = [];
        return _this;
    }
    EntertainmentView.prototype.onConstruct = function () {
        var _this = this;
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
        this.enter_eyeBtn.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('EntertainmentView', "button");
            _this.hideGold();
        });
        this.btn_service = this.getChild("btn_service").asButton;
        this.btn_service.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('EntertainmentView', "button");
            UIUtil_1.UIUtil.kefuFunction(LobbyViewCtr_1.default.instance.view.openWebsite.bind(LobbyViewCtr_1.default.instance.view));
        });
        this.checkUpdate();
        this.initListView();
    };
    EntertainmentView.prototype.itemRenderer = function (index, obj) {
        this.indexController.setSelectedIndex(index);
    };
    EntertainmentView.prototype.selectGame = function () {
        // if (!this._isCanTouch) {
        //     return;
        // }
        if (this.gameTypeCon.selectedIndex == 1) {
            // this.otherGameList.numItems = this.multiplayerGameConfig.length;
            this.changedListData(1);
        }
        else if (this.gameTypeCon.selectedIndex == 2) {
            // this.otherGameList.numItems = this.slotsConfig.length;
            this.changedListData(2);
        }
        else if (this.gameTypeCon.selectedIndex == 3) {
            //this.otherGameList.numItems = 0;
            this.changedListData(3);
        }
    };
    /**隐藏金币 */
    EntertainmentView.prototype.hideGold = function () {
        AudioManager_1.AudioManager.Singleton.play('EntertainmentView', "button");
        if (this.enter_eyeBtn.selected) {
            this.entergold.text = '*****';
        }
        else {
            this.entergold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + "";
            ;
        }
    };
    EntertainmentView.prototype.initListView = function () {
        // if (type == 1) { //百人
        this.bairenGameList.removeChildrenToPool();
        for (var i = 0, len = this.multiplayerGameConfig.length; i < len; i++) {
            var item = this.bairenGameList.addItemFromPool();
            var data = this.multiplayerGameConfig[i];
            item.setData(data.gameId, data.gameIcon, data.update);
        }
        // } else if (type == 2) { //slots
        this.otherGameList.removeChildrenToPool();
        for (var i = 0, len = this.slotsConfig.length; i < len; i++) {
            var item = this.otherGameList.addItemFromPool();
            var data = this.slotsConfig[i];
            item.setData(data.gameId, data.gameIcon, data.update);
        }
        // } else if (type == 3) { //捕魚
        this.fishGameList.removeChildrenToPool();
        for (var i = 0, len = this.fishComfig.length; i < len; i++) {
            var item = this.fishGameList.addItemFromPool();
            var data = this.fishComfig[i];
            item.setData(data.gameId, data.gameIcon, data.update);
        }
        // }
    };
    EntertainmentView.prototype.changedListData = function (type) {
        var isShow = LoginViewCtr_1.LoginViewCtr.instance.Model.cidx == 0;
        if (isShow) {
            this.getChild("n36").asCom.visible = isShow;
            this.otherGameList.visible = !isShow;
            this.bairenGameList.visible = !isShow;
            this.fishGameList.visible = !isShow;
        }
        else {
            this.getChild("n36").asCom.visible = false;
            this.bairenGameList.visible = type == 1;
            this.otherGameList.visible = type == 2;
            this.fishGameList.visible = type == 3;
        }
    };
    EntertainmentView.prototype.renderListItem = function (index, obj) {
        var item = obj;
        var data;
        var selIndex = this.gameTypeCon.selectedIndex;
        if (selIndex == 1) { //多人
            data = this.multiplayerGameConfig[index];
        }
        else if (selIndex == 2) { //电子
            data = this.slotsConfig[index];
        }
        item.setData(data.gameId, data.gameIcon, data.update);
    };
    /**游戏是否有更新 */
    EntertainmentView.prototype.checkUpdate = function (index) {
        if (index === void 0) { index = 0; }
        var config = LoginViewCtr_1.LoginViewCtr.instance.Model.config;
        this.fishComfig = config.slice(9);
        this.multiplayerGameConfig = config.slice(8, 9);
        this.slotsConfig = config.slice(0, 8);
    };
    EntertainmentView.prototype.changedData = function (id) {
        var config = LoginViewCtr_1.LoginViewCtr.instance.Model.config;
        config.forEach(function (item) {
            if (item.gameId == id) {
                item.update = false;
            }
        });
        this.checkUpdate();
        this.changCanTouch();
    };
    EntertainmentView.prototype.changCanTouch = function () {
        this._isCanTouch = true;
    };
    EntertainmentView.prototype.onClickItem = function (item) {
        if (!this._isCanTouch) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(13001));
            return;
        }
        AudioManager_1.AudioManager.Singleton.play('EntertainmentView', "button");
        this._isCanTouch = false;
        this.checkUpdateGame(item.gameId, item);
    };
    EntertainmentView.prototype.checkUpdateGame = function (gameId, item) {
        var _this = this;
        var gameName = "";
        switch (gameId) {
            case 21: //龙虎
                AppConst_1.AppConst.currentGameId = 21;
                AppConst_1.AppConst.currentlevelid = 211;
                gameName = "slotdt";
                break;
            case 201: //忍者
                AppConst_1.AppConst.currentGameId = 201;
                AppConst_1.AppConst.currentlevelid = 2011;
                gameName = "ninjaVSsamurai";
                break;
            case 104: //牛仔
                AppConst_1.AppConst.currentGameId = 104;
                AppConst_1.AppConst.currentlevelid = 1041;
                gameName = "TexasCowboy";
                break;
            case 254: //宙斯
                AppConst_1.AppConst.currentGameId = 254;
                AppConst_1.AppConst.currentlevelid = 2541;
                gameName = "zues";
                break;
            case 92: // 九线
                AppConst_1.AppConst.currentGameId = 92;
                AppConst_1.AppConst.currentlevelid = 921;
                gameName = "nineline";
                break;
            case 54: // 火女
                AppConst_1.AppConst.currentGameId = 54;
                AppConst_1.AppConst.currentlevelid = 541;
                gameName = "slotFireQueen";
                break;
            case 91: // 水果玛丽
                AppConst_1.AppConst.currentGameId = 91;
                AppConst_1.AppConst.currentlevelid = 911;
                gameName = "slotfruit";
                break;
            case 258: // 财神
                AppConst_1.AppConst.currentGameId = 258;
                AppConst_1.AppConst.currentlevelid = 2581;
                gameName = "slotrq";
                break;
            case 4096: // 火牛
                AppConst_1.AppConst.currentGameId = 4096;
                AppConst_1.AppConst.currentlevelid = 40961;
                gameName = "WildHerd";
                break;
            case 1000: //捕鱼
                AppConst_1.AppConst.currentGameId = 1000;
                AppConst_1.AppConst.currentlevelid = 10001;
                gameName = "Fish1000";
                break;
        }
        // 捕鱼暂时提示期待 
        if (gameId == 1000) {
            this._isCanTouch = true;
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("敬请期待！");
            return;
        }
        if (!item) {
            for (var i = 0; i < this.otherGameList._children.length; i++) {
                if (this.otherGameList._children[i].gameId == gameId) {
                    item = this.otherGameList._children[i];
                    break;
                }
            }
        }
        if (!item) {
            for (var i = 0; i < this.bairenGameList._children.length; i++) {
                if (this.bairenGameList._children[i].gameId == gameId) {
                    item = this.bairenGameList._children[i];
                    break;
                }
            }
        }
        if (!item) {
            for (var i = 0; i < this.fishGameList._children.length; i++) {
                if (this.fishGameList._children[i].gameId == gameId) {
                    item = this.fishGameList._children[i];
                    break;
                }
            }
        }
        if (item) {
            if (cc.sys.isNative && BaseFrameNative_1.BaseFrameNative.isNeedUpdate) { //
                GameUpdateMgr_1.default.instance.checkUpdate(gameName, this.enterGame.bind(this), CommonCtr_1.CommonCtr.instance.view, null, function (size, totleSize) {
                    item.setProgress(size, totleSize);
                }, function () {
                    _this.changCanTouch();
                    item.updateFild();
                });
            }
            else {
                this.enterGame();
            }
        }
    };
    EntertainmentView.prototype.enterGame = function () {
        var gameId = AppConst_1.AppConst.currentGameId;
        for (var i = 0, len = this.config.length; i < len; i++) {
            if (this.config[i].gameId == gameId) {
                if (this.config[i].isopen == 0) {
                    this.changCanTouch();
                    CommonCtr_1.CommonCtr.instance.ShowTipLabel("抱歉,該游戲暫未開放");
                    return;
                }
                else {
                    break;
                }
            }
        }
        switch (gameId) {
            case 104: //牛仔
                LobbyViewCtr_1.default.instance.cs_entertable_TexBoy();
                break;
            case 1000: //捕鱼
                LobbyViewCtr_1.default.instance.entertable_Fish();
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
                var gold = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold);
                if (gold < 10) {
                    CommonCtr_1.CommonCtr.instance.ShowTipLabel("最低带入10金币，请充值后再进入哦");
                    this.changCanTouch();
                    return;
                }
                LobbyViewCtr_1.default.instance.cs_slotentertable();
                break;
        }
    };
    EntertainmentView.prototype.joinGame = function () {
        var gameId = AppConst_1.AppConst.currentGameId;
        clearInterval(this.timerId);
        switch (gameId) {
            case 21: //龙虎
                SceneManager_1.SceneManager.Singleton.loadScene("slotdt", "slotdt");
                break;
            case 201: //忍者
                SceneManager_1.SceneManager.Singleton.loadScene("ninjaVSsamurai", "ninjaVSsamurai");
                break;
            case 104: //牛仔
                // 切换横屏
                NativeMethod_1.default.changeOrientationH(true);
                setTimeout(function () {
                    SceneManager_1.SceneManager.Singleton.loadScene("TexasCowboy", "TexasCowboy");
                }, 100);
                break;
            case 254: //宙斯
                NativeMethod_1.default.changeOrientationH(true);
                setTimeout(function () {
                    SceneManager_1.SceneManager.Singleton.loadScene("zues", "zues");
                }, 100);
                break;
            case 92: //九线
                NativeMethod_1.default.changeOrientationH(true);
                setTimeout(function () {
                    SceneManager_1.SceneManager.Singleton.loadScene("nineline", "nineline");
                }, 100);
                break;
            case 54: //火女
                NativeMethod_1.default.changeOrientationH(true);
                setTimeout(function () {
                    SceneManager_1.SceneManager.Singleton.loadScene("slotFireQueen", "SlotFireQuene");
                }, 100);
                break;
            case 91: //水果玛丽
                NativeMethod_1.default.changeOrientationH(true);
                setTimeout(function () {
                    SceneManager_1.SceneManager.Singleton.loadScene("slotfruit", "slotfruit");
                }, 100);
                break;
            case 258: //财神
                NativeMethod_1.default.changeOrientationH(true);
                setTimeout(function () {
                    SceneManager_1.SceneManager.Singleton.loadScene("slotrq", "slotrq");
                }, 100);
                break;
            case 4096: //火牛
                NativeMethod_1.default.changeOrientationH(true);
                setTimeout(function () {
                    SceneManager_1.SceneManager.Singleton.loadScene("WildHerd", "wildHerd");
                }, 100);
                break;
            case 1000: //捕鱼
                // 切换横屏
                NativeMethod_1.default.changeOrientationH(true);
                setTimeout(function () {
                    SceneManager_1.SceneManager.Singleton.loadScene("Fish1000", "fishMain");
                }, 100);
                break;
        }
    };
    EntertainmentView.prototype.showTopup = function () {
        AudioManager_1.AudioManager.Singleton.play('EntertainmentView', "button");
        LobbyViewCtr_1.default.instance.view.showTopup();
    };
    EntertainmentView.prototype.Show = function () {
        var _this = this;
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
            var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetIsOpenInfo";
            HttpHelpEx_1.default.instance.get(url)
                .then(function (res) {
                _this.config = res.data.data;
                cc.log("---------------", res);
            })
                .catch(function () {
            });
        }
        // let isShow = LoginViewCtr.instance.Model.cidx == 0;
        // this.otherGameList.visible = !isShow;
        // this.bairenGameList.visible = !isShow;
        // this.fishGameList.visible = !isShow;
        // this.getChild("n36").asCom.visible = isShow;
    };
    EntertainmentView.prototype.loopRoll = function () {
        var _this = this;
        this.node.stopAllActions();
        this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
            _this.slideList.scrollPane.scrollRight(1, true);
        }))));
    };
    EntertainmentView.prototype.changedGold = function () {
        // this.entergold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + '';
        if (this.enter_eyeBtn.selected) {
            this.entergold.text = '*****';
        }
        else {
            this.entergold.text = UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) + "";
            ;
        }
    };
    EntertainmentView.prototype.Hide = function () {
        // clearInterval(this.timerId);
        this.node.stopAllActions();
        this.visible = false;
    };
    EntertainmentView.prototype.onDestroy = function () {
        this.node.stopAllActions();
        // clearInterval(this.timerId);
    };
    return EntertainmentView;
}(fgui.GComponent));
exports.default = EntertainmentView;

cc._RF.pop();
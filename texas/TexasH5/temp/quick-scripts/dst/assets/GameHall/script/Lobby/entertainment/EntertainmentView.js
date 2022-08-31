
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/entertainment/EntertainmentView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGVudGVydGFpbm1lbnRcXEVudGVydGFpbm1lbnRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF5RTtBQUN6RSxvRUFBbUU7QUFDbkUsMEVBQXlFO0FBQ3pFLDRFQUF1RTtBQUN2RSwyREFBMEQ7QUFDMUQsMkZBQTBGO0FBQzFGLHNFQUFxRTtBQUNyRSx5REFBd0Q7QUFDeEQsbURBQThDO0FBQzlDLGdEQUEyQztBQUUzQyxxREFBZ0Q7QUFDaEQsb0RBQW1EO0FBRW5EOztHQUVHO0FBQ0g7SUFBK0MscUNBQWU7SUFBOUQ7UUFBQSxxRUE0Y0M7UUEzY1csbUJBQWEsR0FBZSxJQUFJLENBQUM7UUFDakMsb0JBQWMsR0FBZSxJQUFJLENBQUM7UUFDbEMsa0JBQVksR0FBZSxJQUFJLENBQUM7UUFZaEMsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFDcEMsVUFBVTtRQUNILDJCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUMzQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUN2QixZQUFZO1FBQ0osWUFBTSxHQUF5QyxFQUFFLENBQUM7O0lBdWI5RCxDQUFDO0lBcmJhLHVDQUFXLEdBQXJCO1FBQUEsaUJBd0NDO1FBdkNHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FB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VUM7UUFURyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNmLEVBQUUsQ0FBQyxhQUFhLENBQ1osRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNmLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDZixDQUFBO0lBQ0wsQ0FBQztJQUdNLHVDQUFXLEdBQWxCO1FBQ0ksOEVBQThFO1FBQzlFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ2pDO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxlQUFNLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUFBLENBQUM7U0FDL0U7SUFDTCxDQUFDO0lBQ00sZ0NBQUksR0FBWDtRQUNJLCtCQUErQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxxQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQiwrQkFBK0I7SUFDbkMsQ0FBQztJQUVMLHdCQUFDO0FBQUQsQ0E1Y0EsQUE0Y0MsQ0E1YzhDLElBQUksQ0FBQyxVQUFVLEdBNGM3RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDb21tb25DdHIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9Db21tb25DdHJcIjtcclxuaW1wb3J0IHsgU2NlbmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCBIdHRwSGVscEV4IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQ29tbW9uL01hbmFnZXJzL0h0dHBIZWxwRXhcIjtcclxuaW1wb3J0IHsgVUlVdGlsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vVUlVdGlsXCI7XHJcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XHJcbmltcG9ydCB7IEJhc2VGcmFtZU5hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lTmF0aXZlXCI7XHJcbmltcG9ydCB7IExvZ2luVmlld0N0ciB9IGZyb20gXCIuLi8uLi9Mb2dpbi9Mb2dpblZpZXdDdHJcIjtcclxuaW1wb3J0IE5hdGl2ZU1ldGhvZCBmcm9tIFwiLi4vLi4vTmF0aXZlTWV0aG9kXCI7XHJcbmltcG9ydCBMb2JieVZpZXdDdHIgZnJvbSBcIi4uL0xvYmJ5Vmlld0N0clwiO1xyXG5pbXBvcnQgR2FtZUl0ZW1JbkVudGVydGFpbm1lbnQgZnJvbSBcIi4vR2FtZUl0ZW1JbkVudGVydGFpbm1lbnRcIjtcclxuaW1wb3J0IEdhbWVVcGRhdGVNZ3IgZnJvbSBcIi4uLy4uL0dhbWVVcGRhdGVNZ3JcIjtcclxuaW1wb3J0IHsgTGFuZ3VhZ2VDb25maWcgfSBmcm9tIFwiLi4vTGFuZ3VhZ2VDb25maWdcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g5aib5qiCXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRlcnRhaW5tZW50VmlldyBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIG90aGVyR2FtZUxpc3Q6IGZndWkuR0xpc3QgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiYWlyZW5HYW1lTGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGZpc2hHYW1lTGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGdhbWVUeXBlQ29uOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcml2YXRlIGVudGVyZ29sZDogZmd1aS5HVGV4dEZpZWxkO1xyXG5cclxuICAgIHByaXZhdGUgc2xpZGVDb206IGZndWkuR0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgc2xpZGVMaXN0OiBmZ3VpLkdMaXN0O1xyXG4gICAgcHJpdmF0ZSBpbmRleENvbnRyb2xsZXI6IGZndWkuQ29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgdGltZXJJZDtcclxuICAgIHByaXZhdGUgYnRuX2VudGVyYWRkR29sZDogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBidG5fc2VydmljZTogZmd1aS5HQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBlbnRlcl9leWVCdG46IGZndWkuR0J1dHRvbjtcclxuXHJcbiAgICBwcml2YXRlIF9pc0NhblRvdWNoOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIC8qKua4uOaIj+mFjee9riAqL1xyXG4gICAgcHVibGljIG11bHRpcGxheWVyR2FtZUNvbmZpZyA9IFtdO1xyXG4gICAgcHVibGljIHNsb3RzQ29uZmlnID0gW107XHJcbiAgICBwdWJsaWMgZmlzaENvbWZpZyA9IFtdO1xyXG4gICAgLyoq5ri45oiP5byA5YWz6YWN572uICovXHJcbiAgICBwcml2YXRlIGNvbmZpZzogeyBnYW1lSWQ6IG51bWJlciwgaXNvcGVuOiBudW1iZXIgfVtdID0gW107XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ29uc3RydWN0KCkge1xyXG4gICAgICAgIHRoaXMub3RoZXJHYW1lTGlzdCA9IHRoaXMuZ2V0Q2hpbGQoXCJvdGhlckdhbWVMaXN0XCIpLmFzTGlzdDtcclxuICAgICAgICB0aGlzLmJhaXJlbkdhbWVMaXN0ID0gdGhpcy5nZXRDaGlsZChcImJhaXJlbkdhbWVMaXN0XCIpLmFzTGlzdDtcclxuICAgICAgICB0aGlzLmZpc2hHYW1lTGlzdCA9IHRoaXMuZ2V0Q2hpbGQoXCJmaXNoR2FtZUxpc3RcIikuYXNMaXN0O1xyXG4gICAgICAgIHRoaXMuZW50ZXJnb2xkID0gdGhpcy5nZXRDaGlsZChcImVudGVyZ29sZFwiKS5hc1RleHRGaWVsZDtcclxuXHJcbiAgICAgICAgLy8gIHRoaXMub3RoZXJHYW1lTGlzdC5zZXRWaXJ0dWFsKCk7XHJcbiAgICAgICAgLy8gIHRoaXMub3RoZXJHYW1lTGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckxpc3RJdGVtLmJpbmQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm90aGVyR2FtZUxpc3Qub24oZmd1aS5FdmVudC5DTElDS19JVEVNLCB0aGlzLm9uQ2xpY2tJdGVtLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJhaXJlbkdhbWVMaXN0Lm9uKGZndWkuRXZlbnQuQ0xJQ0tfSVRFTSwgdGhpcy5vbkNsaWNrSXRlbSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5maXNoR2FtZUxpc3Qub24oZmd1aS5FdmVudC5DTElDS19JVEVNLCB0aGlzLm9uQ2xpY2tJdGVtLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVUeXBlQ29uID0gdGhpcy5nZXRDb250cm9sbGVyKFwic3RhdGVcIik7XHJcbiAgICAgICAgdGhpcy5nYW1lVHlwZUNvbi5vbkNoYW5nZWQodGhpcy5zZWxlY3RHYW1lLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVUeXBlQ29uLnNlbGVjdGVkSW5kZXggPSAxO1xyXG5cclxuICAgICAgICAvKirovKrmkq3lnJYgKi9cclxuICAgICAgICB0aGlzLnNsaWRlQ29tID0gdGhpcy5nZXRDaGlsZChcIm4yN1wiKS5hc0NvbTtcclxuICAgICAgICB0aGlzLnNsaWRlTGlzdCA9IHRoaXMuc2xpZGVDb20uZ2V0Q2hpbGQoXCJsaXN0XCIpLmFzTGlzdDtcclxuICAgICAgICB0aGlzLmluZGV4Q29udHJvbGxlciA9IHRoaXMuc2xpZGVDb20uZ2V0Q29udHJvbGxlcihcImluZGV4XCIpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVMaXN0LnNldFZpcnR1YWxBbmRMb29wKCk7XHJcbiAgICAgICAgdGhpcy5zbGlkZUxpc3QuaXRlbVJlbmRlcmVyID0gdGhpcy5pdGVtUmVuZGVyZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNsaWRlTGlzdC5udW1JdGVtcyA9IDQ7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuX2VudGVyYWRkR29sZCA9IHRoaXMuZ2V0Q2hpbGQoXCJidG5fZW50ZXJhZGRHb2xkXCIpLmFzQnV0dG9uO1xyXG4gICAgICAgIHRoaXMuYnRuX2VudGVyYWRkR29sZC5vbkNsaWNrKHRoaXMuc2hvd1RvcHVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmVudGVyX2V5ZUJ0biA9IHRoaXMuZ2V0Q2hpbGQoXCJlbnRlcl9leWVCdG5cIikuYXNCdXR0b247XHJcbiAgICAgICAgdGhpcy5lbnRlcl9leWVCdG4ub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnRW50ZXJ0YWlubWVudFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlR29sZCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5idG5fc2VydmljZSA9IHRoaXMuZ2V0Q2hpbGQoXCJidG5fc2VydmljZVwiKS5hc0J1dHRvbjtcclxuICAgICAgICB0aGlzLmJ0bl9zZXJ2aWNlLm9uQ2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0VudGVydGFpbm1lbnRWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIFVJVXRpbC5rZWZ1RnVuY3Rpb24oTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcub3BlbldlYnNpdGUuYmluZChMb2JieVZpZXdDdHIuaW5zdGFuY2UudmlldykpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tVcGRhdGUoKTtcclxuICAgICAgICB0aGlzLmluaXRMaXN0VmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpdGVtUmVuZGVyZXIoaW5kZXg6IG51bWJlciwgb2JqOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICB0aGlzLmluZGV4Q29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZWxlY3RHYW1lKCkge1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5faXNDYW5Ub3VjaCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVUeXBlQ29uLnNlbGVjdGVkSW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm90aGVyR2FtZUxpc3QubnVtSXRlbXMgPSB0aGlzLm11bHRpcGxheWVyR2FtZUNvbmZpZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZExpc3REYXRhKDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lVHlwZUNvbi5zZWxlY3RlZEluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5vdGhlckdhbWVMaXN0Lm51bUl0ZW1zID0gdGhpcy5zbG90c0NvbmZpZy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZExpc3REYXRhKDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lVHlwZUNvbi5zZWxlY3RlZEluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgLy90aGlzLm90aGVyR2FtZUxpc3QubnVtSXRlbXMgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRMaXN0RGF0YSgzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6ZqQ6JeP6YeR5biBICovXHJcbiAgICBwdWJsaWMgaGlkZUdvbGQoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdFbnRlcnRhaW5tZW50VmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmVudGVyX2V5ZUJ0bi5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyZ29sZC50ZXh0ID0gJyoqKioqJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyZ29sZC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcihBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCkgKyBcIlwiOztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXRMaXN0VmlldygpIHtcclxuICAgICAgICAvLyBpZiAodHlwZSA9PSAxKSB7IC8v55m+5Lq6XHJcbiAgICAgICAgdGhpcy5iYWlyZW5HYW1lTGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLm11bHRpcGxheWVyR2FtZUNvbmZpZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IDxHYW1lSXRlbUluRW50ZXJ0YWlubWVudD50aGlzLmJhaXJlbkdhbWVMaXN0LmFkZEl0ZW1Gcm9tUG9vbCgpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMubXVsdGlwbGF5ZXJHYW1lQ29uZmlnW2ldO1xyXG4gICAgICAgICAgICBpdGVtLnNldERhdGEoZGF0YS5nYW1lSWQsIGRhdGEuZ2FtZUljb24sIGRhdGEudXBkYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmICh0eXBlID09IDIpIHsgLy9zbG90c1xyXG4gICAgICAgIHRoaXMub3RoZXJHYW1lTGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLnNsb3RzQ29uZmlnLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gPEdhbWVJdGVtSW5FbnRlcnRhaW5tZW50PnRoaXMub3RoZXJHYW1lTGlzdC5hZGRJdGVtRnJvbVBvb2woKTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnNsb3RzQ29uZmlnW2ldO1xyXG4gICAgICAgICAgICBpdGVtLnNldERhdGEoZGF0YS5nYW1lSWQsIGRhdGEuZ2FtZUljb24sIGRhdGEudXBkYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmICh0eXBlID09IDMpIHsgLy/mjZXprZpcclxuICAgICAgICB0aGlzLmZpc2hHYW1lTGlzdC5yZW1vdmVDaGlsZHJlblRvUG9vbCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmZpc2hDb21maWcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSA8R2FtZUl0ZW1JbkVudGVydGFpbm1lbnQ+dGhpcy5maXNoR2FtZUxpc3QuYWRkSXRlbUZyb21Qb29sKCk7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5maXNoQ29tZmlnW2ldO1xyXG4gICAgICAgICAgICBpdGVtLnNldERhdGEoZGF0YS5nYW1lSWQsIGRhdGEuZ2FtZUljb24sIGRhdGEudXBkYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VkTGlzdERhdGEodHlwZTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGlzU2hvdyA9IExvZ2luVmlld0N0ci5pbnN0YW5jZS5Nb2RlbC5jaWR4ID09IDA7XHJcbiAgICAgICAgaWYgKGlzU2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLmdldENoaWxkKFwibjM2XCIpLmFzQ29tLnZpc2libGUgPSBpc1Nob3c7XHJcbiAgICAgICAgICAgIHRoaXMub3RoZXJHYW1lTGlzdC52aXNpYmxlID0gIWlzU2hvdztcclxuICAgICAgICAgICAgdGhpcy5iYWlyZW5HYW1lTGlzdC52aXNpYmxlID0gIWlzU2hvdztcclxuICAgICAgICAgICAgdGhpcy5maXNoR2FtZUxpc3QudmlzaWJsZSA9ICFpc1Nob3c7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRDaGlsZChcIm4zNlwiKS5hc0NvbS52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmFpcmVuR2FtZUxpc3QudmlzaWJsZSA9IHR5cGUgPT0gMTtcclxuICAgICAgICAgICAgdGhpcy5vdGhlckdhbWVMaXN0LnZpc2libGUgPSB0eXBlID09IDI7XHJcbiAgICAgICAgICAgIHRoaXMuZmlzaEdhbWVMaXN0LnZpc2libGUgPSB0eXBlID09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJMaXN0SXRlbShpbmRleDogbnVtYmVyLCBvYmo6IGZndWkuR09iamVjdCkge1xyXG4gICAgICAgIGxldCBpdGVtOiBHYW1lSXRlbUluRW50ZXJ0YWlubWVudCA9IDxHYW1lSXRlbUluRW50ZXJ0YWlubWVudD5vYmo7XHJcbiAgICAgICAgbGV0IGRhdGE6IHsgZ2FtZUlkOiBudW1iZXIsIGdhbWVJY29uOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdXBkYXRlOiBib29sZWFuIH07XHJcbiAgICAgICAgbGV0IHNlbEluZGV4OiBudW1iZXIgPSB0aGlzLmdhbWVUeXBlQ29uLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgaWYgKHNlbEluZGV4ID09IDEpIHsvL+WkmuS6ulxyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5tdWx0aXBsYXllckdhbWVDb25maWdbaW5kZXhdO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsSW5kZXggPT0gMikgeyAvL+eUteWtkFxyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5zbG90c0NvbmZpZ1tpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW0uc2V0RGF0YShkYXRhLmdhbWVJZCwgZGF0YS5nYW1lSWNvbiwgZGF0YS51cGRhdGUpO1xyXG4gICAgfVxyXG4gICAgLyoq5ri45oiP5piv5ZCm5pyJ5pu05pawICovXHJcbiAgICBwdWJsaWMgY2hlY2tVcGRhdGUoaW5kZXg6IG51bWJlciA9IDApIHtcclxuICAgICAgICBsZXQgY29uZmlnID0gTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNvbmZpZztcclxuICAgICAgICB0aGlzLmZpc2hDb21maWcgPSBjb25maWcuc2xpY2UoOSk7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsYXllckdhbWVDb25maWcgPSBjb25maWcuc2xpY2UoOCwgOSk7XHJcbiAgICAgICAgdGhpcy5zbG90c0NvbmZpZyA9IGNvbmZpZy5zbGljZSgwLCA4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlZERhdGEoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjb25maWcgPSBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuY29uZmlnO1xyXG4gICAgICAgIGNvbmZpZy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmdhbWVJZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS51cGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jaGVja1VwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdDYW5Ub3VjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ0NhblRvdWNoKCkge1xyXG4gICAgICAgIHRoaXMuX2lzQ2FuVG91Y2ggPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgb25DbGlja0l0ZW0oaXRlbTogR2FtZUl0ZW1JbkVudGVydGFpbm1lbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzQ2FuVG91Y2gpIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKExhbmd1YWdlQ29uZmlnLmdldExhbmd1YWdlQnlJZCgxMzAwMSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnRW50ZXJ0YWlubWVudFZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLl9pc0NhblRvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaGVja1VwZGF0ZUdhbWUoaXRlbS5nYW1lSWQsIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja1VwZGF0ZUdhbWUoZ2FtZUlkOiBudW1iZXIsIGl0ZW0/OiBHYW1lSXRlbUluRW50ZXJ0YWlubWVudCkge1xyXG4gICAgICAgIGxldCBnYW1lTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBzd2l0Y2ggKGdhbWVJZCkge1xyXG4gICAgICAgICAgICBjYXNlIDIxOiAvL+m+meiZjlxyXG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudEdhbWVJZCA9IDIxO1xyXG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudGxldmVsaWQgPSAyMTE7XHJcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSA9IFwic2xvdGR0XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyMDE6Ly/lv43ogIVcclxuICAgICAgICAgICAgICAgIEFwcENvbnN0LmN1cnJlbnRHYW1lSWQgPSAyMDE7XHJcbiAgICAgICAgICAgICAgICBBcHBDb25zdC5jdXJyZW50bGV2ZWxpZCA9IDIwMTE7XHJcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSA9IFwibmluamFWU3NhbXVyYWlcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwNDovL+eJm+S7lFxyXG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudEdhbWVJZCA9IDEwNDtcclxuICAgICAgICAgICAgICAgIEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID0gMTA0MTtcclxuICAgICAgICAgICAgICAgIGdhbWVOYW1lID0gXCJUZXhhc0Nvd2JveVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjU0OiAvL+WumeaWr1xyXG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudEdhbWVJZCA9IDI1NDtcclxuICAgICAgICAgICAgICAgIEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID0gMjU0MTtcclxuICAgICAgICAgICAgICAgIGdhbWVOYW1lID0gXCJ6dWVzXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5MjogLy8g5Lmd57q/XHJcbiAgICAgICAgICAgICAgICBBcHBDb25zdC5jdXJyZW50R2FtZUlkID0gOTI7XHJcbiAgICAgICAgICAgICAgICBBcHBDb25zdC5jdXJyZW50bGV2ZWxpZCA9IDkyMTtcclxuICAgICAgICAgICAgICAgIGdhbWVOYW1lID0gXCJuaW5lbGluZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTQ6IC8vIOeBq+Wls1xyXG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudEdhbWVJZCA9IDU0O1xyXG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudGxldmVsaWQgPSA1NDE7XHJcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSA9IFwic2xvdEZpcmVRdWVlblwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgOTE6IC8vIOawtOaenOeOm+S4vVxyXG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudEdhbWVJZCA9IDkxO1xyXG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudGxldmVsaWQgPSA5MTE7XHJcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSA9IFwic2xvdGZydWl0XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNTg6IC8vIOi0ouelnlxyXG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudEdhbWVJZCA9IDI1ODtcclxuICAgICAgICAgICAgICAgIEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID0gMjU4MTtcclxuICAgICAgICAgICAgICAgIGdhbWVOYW1lID0gXCJzbG90cnFcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwOTY6IC8vIOeBq+eJm1xyXG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudEdhbWVJZCA9IDQwOTY7XHJcbiAgICAgICAgICAgICAgICBBcHBDb25zdC5jdXJyZW50bGV2ZWxpZCA9IDQwOTYxO1xyXG4gICAgICAgICAgICAgICAgZ2FtZU5hbWUgPSBcIldpbGRIZXJkXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDAwOi8v5o2V6bG8XHJcbiAgICAgICAgICAgICAgICBBcHBDb25zdC5jdXJyZW50R2FtZUlkID0gMTAwMDtcclxuICAgICAgICAgICAgICAgIEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID0gMTAwMDE7XHJcbiAgICAgICAgICAgICAgICBnYW1lTmFtZSA9IFwiRmlzaDEwMDBcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5o2V6bG85pqC5pe25o+Q56S65pyf5b6FIFxyXG4gICAgICAgIGlmIChnYW1lSWQgPT0gMTAwMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0NhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5pWs6K+35pyf5b6F77yBXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm90aGVyR2FtZUxpc3QuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKDxHYW1lSXRlbUluRW50ZXJ0YWlubWVudD50aGlzLm90aGVyR2FtZUxpc3QuX2NoaWxkcmVuW2ldKS5nYW1lSWQgPT0gZ2FtZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IDxHYW1lSXRlbUluRW50ZXJ0YWlubWVudD50aGlzLm90aGVyR2FtZUxpc3QuX2NoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFpcmVuR2FtZUxpc3QuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKDxHYW1lSXRlbUluRW50ZXJ0YWlubWVudD50aGlzLmJhaXJlbkdhbWVMaXN0Ll9jaGlsZHJlbltpXSkuZ2FtZUlkID09IGdhbWVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSA8R2FtZUl0ZW1JbkVudGVydGFpbm1lbnQ+dGhpcy5iYWlyZW5HYW1lTGlzdC5fY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maXNoR2FtZUxpc3QuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKDxHYW1lSXRlbUluRW50ZXJ0YWlubWVudD50aGlzLmZpc2hHYW1lTGlzdC5fY2hpbGRyZW5baV0pLmdhbWVJZCA9PSBnYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0gPEdhbWVJdGVtSW5FbnRlcnRhaW5tZW50PnRoaXMuZmlzaEdhbWVMaXN0Ll9jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIEJhc2VGcmFtZU5hdGl2ZS5pc05lZWRVcGRhdGUpIHsgIC8vXHJcbiAgICAgICAgICAgICAgICBHYW1lVXBkYXRlTWdyLmluc3RhbmNlLmNoZWNrVXBkYXRlKGdhbWVOYW1lLCB0aGlzLmVudGVyR2FtZS5iaW5kKHRoaXMpLCBDb21tb25DdHIuaW5zdGFuY2UudmlldywgbnVsbCwgKHNpemU6IG51bWJlciwgdG90bGVTaXplOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldFByb2dyZXNzKHNpemUsIHRvdGxlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ0NhblRvdWNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51cGRhdGVGaWxkKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJHYW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVudGVyR2FtZSgpIHtcclxuICAgICAgICBsZXQgZ2FtZUlkID0gQXBwQ29uc3QuY3VycmVudEdhbWVJZDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5jb25maWcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnW2ldLmdhbWVJZCA9PSBnYW1lSWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZ1tpXS5pc29wZW4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdDYW5Ub3VjaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLmirHmrYks6Kmy5ri45oiy5pqr5pyq6ZaL5pS+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZ2FtZUlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTA0OiAvL+eJm+S7lFxyXG4gICAgICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2VudGVydGFibGVfVGV4Qm95KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMDAwOiAvL+aNlemxvFxyXG4gICAgICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmVudGVydGFibGVfRmlzaCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIGNhc2UgMjE6IC8v6b6Z6JmOXHJcbiAgICAgICAgICAgIC8vIGNhc2UgMjU0Oi8v5a6Z5pavXHJcbiAgICAgICAgICAgIC8vIGNhc2UgOTI6Ly/kuZ3nur9cclxuICAgICAgICAgICAgLy8gY2FzZSA1NDovL+eBq+Wls1xyXG4gICAgICAgICAgICAvLyBjYXNlIDkxOi8v5rC05p6c546b5Li9XHJcbiAgICAgICAgICAgIC8vIGNhc2UgMjU4Oi8v6LSi56WeXHJcbiAgICAgICAgICAgIC8vIGNhc2UgNDA5NjovL+eBq+eJm1xyXG4gICAgICAgICAgICAvLyBjYXNlIDIwMTovL+W/jeiAhVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbGV0IGdvbGQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKTtcclxuICAgICAgICAgICAgICAgIGlmIChnb2xkIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5pyA5L2O5bim5YWlMTDph5HluIHvvIzor7flhYXlgLzlkI7lho3ov5vlhaXlk6ZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ0NhblRvdWNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX3Nsb3RlbnRlcnRhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgam9pbkdhbWUoKSB7XHJcbiAgICAgICAgbGV0IGdhbWVJZCA9IEFwcENvbnN0LmN1cnJlbnRHYW1lSWQ7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgICAgIHN3aXRjaCAoZ2FtZUlkKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMjE6IC8v6b6Z6JmOXHJcbiAgICAgICAgICAgICAgICBTY2VuZU1hbmFnZXIuU2luZ2xldG9uLmxvYWRTY2VuZShcInNsb3RkdFwiLCBcInNsb3RkdFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDIwMTovL+W/jeiAhVxyXG4gICAgICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLlNpbmdsZXRvbi5sb2FkU2NlbmUoXCJuaW5qYVZTc2FtdXJhaVwiLCBcIm5pbmphVlNzYW11cmFpXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTA0OiAvL+eJm+S7lFxyXG4gICAgICAgICAgICAgICAgLy8g5YiH5o2i5qiq5bGPXHJcbiAgICAgICAgICAgICAgICBOYXRpdmVNZXRob2QuY2hhbmdlT3JpZW50YXRpb25IKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLlNpbmdsZXRvbi5sb2FkU2NlbmUoXCJUZXhhc0Nvd2JveVwiLCBcIlRleGFzQ293Ym95XCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjU0OiAvL+WumeaWr1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlTWV0aG9kLmNoYW5nZU9yaWVudGF0aW9uSCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFNjZW5lTWFuYWdlci5TaW5nbGV0b24ubG9hZFNjZW5lKFwienVlc1wiLCBcInp1ZXNcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA5MjogLy/kuZ3nur9cclxuICAgICAgICAgICAgICAgIE5hdGl2ZU1ldGhvZC5jaGFuZ2VPcmllbnRhdGlvbkgodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTY2VuZU1hbmFnZXIuU2luZ2xldG9uLmxvYWRTY2VuZShcIm5pbmVsaW5lXCIsIFwibmluZWxpbmVcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1NDogLy/ngavlpbNcclxuICAgICAgICAgICAgICAgIE5hdGl2ZU1ldGhvZC5jaGFuZ2VPcmllbnRhdGlvbkgodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTY2VuZU1hbmFnZXIuU2luZ2xldG9uLmxvYWRTY2VuZShcInNsb3RGaXJlUXVlZW5cIiwgXCJTbG90RmlyZVF1ZW5lXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgOTE6IC8v5rC05p6c546b5Li9XHJcbiAgICAgICAgICAgICAgICBOYXRpdmVNZXRob2QuY2hhbmdlT3JpZW50YXRpb25IKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLlNpbmdsZXRvbi5sb2FkU2NlbmUoXCJzbG90ZnJ1aXRcIiwgXCJzbG90ZnJ1aXRcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyNTg6IC8v6LSi56WeXHJcbiAgICAgICAgICAgICAgICBOYXRpdmVNZXRob2QuY2hhbmdlT3JpZW50YXRpb25IKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2NlbmVNYW5hZ2VyLlNpbmdsZXRvbi5sb2FkU2NlbmUoXCJzbG90cnFcIiwgXCJzbG90cnFcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDk2OiAvL+eBq+eJm1xyXG4gICAgICAgICAgICAgICAgTmF0aXZlTWV0aG9kLmNoYW5nZU9yaWVudGF0aW9uSCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFNjZW5lTWFuYWdlci5TaW5nbGV0b24ubG9hZFNjZW5lKFwiV2lsZEhlcmRcIiwgXCJ3aWxkSGVyZFwiKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDEwMDA6IC8v5o2V6bG8XHJcbiAgICAgICAgICAgICAgICAvLyDliIfmjaLmqKrlsY9cclxuICAgICAgICAgICAgICAgIE5hdGl2ZU1ldGhvZC5jaGFuZ2VPcmllbnRhdGlvbkgodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTY2VuZU1hbmFnZXIuU2luZ2xldG9uLmxvYWRTY2VuZShcIkZpc2gxMDAwXCIsIFwiZmlzaE1haW5cIik7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dUb3B1cCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0VudGVydGFpbm1lbnRWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcuc2hvd1RvcHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNob3coKSB7XHJcbiAgICAgICAgLy8gbGV0IGdhbWVJZCA9IEFwcENvbnN0LmN1cnJlbnRHYW1lSWQ7XHJcbiAgICAgICAgLy8gaWYgKGdhbWVJZCA9PSAxMDQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW1lVHlwZUNvbi5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICAvLyB9IGVsc2UgaWYgKGdhbWVJZCA9PSAxMDAwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZVR5cGVDb24uc2VsZWN0ZWRJbmRleCA9IDM7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW1lVHlwZUNvbi5zZWxlY3RlZEluZGV4ID0gMjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5nYW1lVHlwZUNvbi5zZWxlY3RlZEluZGV4ID0gMTtcclxuICAgICAgICB0aGlzLmNoYW5nZWRMaXN0RGF0YSgxKTtcclxuICAgICAgICB0aGlzLmNoYW5nZWRHb2xkKCk7XHJcbiAgICAgICAgLy8gdGhpcy50aW1lcklkICYmIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcclxuICAgICAgICAvLyB0aGlzLnRpbWVySWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2xpZGVMaXN0LnNjcm9sbFBhbmUuc2Nyb2xsUmlnaHQoMSwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gfSwgNTAwMClcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxvb3BSb2xsKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJdGVtLmFwaUFkcmVzcyArIFwiL2FwaS9HYW1lL0dldElzT3BlbkluZm9cIjtcclxuICAgICAgICAgICAgSHR0cEhlbHBFeC5pbnN0YW5jZS5nZXQodXJsKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLS1cIiwgcmVzKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgaXNTaG93ID0gTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmNpZHggPT0gMDtcclxuICAgICAgICAvLyB0aGlzLm90aGVyR2FtZUxpc3QudmlzaWJsZSA9ICFpc1Nob3c7XHJcbiAgICAgICAgLy8gdGhpcy5iYWlyZW5HYW1lTGlzdC52aXNpYmxlID0gIWlzU2hvdztcclxuICAgICAgICAvLyB0aGlzLmZpc2hHYW1lTGlzdC52aXNpYmxlID0gIWlzU2hvdztcclxuICAgICAgICAvLyB0aGlzLmdldENoaWxkKFwibjM2XCIpLmFzQ29tLnZpc2libGUgPSBpc1Nob3c7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbG9vcFJvbGwoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2MucmVwZWF0Rm9yZXZlcihcclxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSg1KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVMaXN0LnNjcm9sbFBhbmUuc2Nyb2xsUmlnaHQoMSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGNoYW5nZWRHb2xkKCkge1xyXG4gICAgICAgIC8vIHRoaXMuZW50ZXJnb2xkLnRleHQgPSBVSVV0aWwuZm9ybWF0TnVtYmVyKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKSArICcnO1xyXG4gICAgICAgIGlmICh0aGlzLmVudGVyX2V5ZUJ0bi5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyZ29sZC50ZXh0ID0gJyoqKioqJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVudGVyZ29sZC50ZXh0ID0gVUlVdGlsLmZvcm1hdE51bWJlcihBcHBDb25zdC5tUGxheWVyTW9kZWwuZ29sZCkgKyBcIlwiOztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgSGlkZSgpIHtcclxuICAgICAgICAvLyBjbGVhckludGVydmFsKHRoaXMudGltZXJJZCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8gY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySWQpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
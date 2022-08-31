"use strict";
cc._RF.push(module, '18ff9fbg8pC4rda99AGqTDk', 'SlotsMasterGameStageBase');
// Script/modules/@slotsmaster/ui-common/lib/SlotsMasterGameStageBase.ts

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
var SlotGameStageBase_1 = require("../../../@mogafa/slots/lib/GameStage/SlotGameStageBase");
//import { CardGet } from "./Card/CardGet";
var SlotsMasterGameStageBase = /** @class */ (function (_super) {
    __extends(SlotsMasterGameStageBase, _super);
    function SlotsMasterGameStageBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SlotsMasterGameStageBase.prototype, "adName", {
        get: function () {
            return this._adName;
        },
        set: function (value) {
            this._adName = value;
        },
        enumerable: false,
        configurable: true
    });
    SlotsMasterGameStageBase.prototype.createChildComponents = function () {
        //this._adPanel = this.addFguiComponent(AdBalloon);
        //this._cardView = this.addFguiComponent(CardGet);
        //this.$message = this.addFguiComponent(Message);
    };
    SlotsMasterGameStageBase.prototype.allChildCreated = function () {
        var _this = this;
        _super.prototype.allChildCreated.call(this);
        this.scheduleOnce(function () {
            _this.showPlane();
        }, 1);
    };
    /**
     * 周期性加载飞机广告
     */
    SlotsMasterGameStageBase.prototype.scheduleShowPlane = function () {
        this.scheduleOnce(this.showPlane, 5);
    };
    /**
     * 显示飞机
     */
    SlotsMasterGameStageBase.prototype.showPlane = function () {
        //this._adPanel.balloonShow(this.setTopBarPermission.bind(this), 1);
    };
    /**
     * 允许设置顶部栏
     * @param data
     */
    SlotsMasterGameStageBase.prototype.setTopBarPermission = function (data) {
        this.scheduleShowPlane();
        if (data.type === 0) {
            this.setTopBarCoin(data.award);
        }
        else {
            this.setTopBarIntegral(data.award);
        }
    };
    /**
     * 设置顶部栏金币
     * @param coin
     */
    SlotsMasterGameStageBase.prototype.setTopBarCoin = function (coin) {
        this.topBar.setUserCoins(coin);
    };
    /**
     * 设置顶部栏积分
     * @param integral
     */
    SlotsMasterGameStageBase.prototype.setTopBarIntegral = function (integral) {
        this.topBar.setUserIntegral(integral);
    };
    SlotsMasterGameStageBase.prototype.bigWinShow = function () {
        //* 存在广告
        if (SlotGameStageBase_1.default.spinResults.bigWinAdAwards) {
            this.win.onAdButtonClick(this.watchAdClick.bind(this, this.adComplete.bind(this)));
        }
        // this.adName = AppConst.AD_POSITION.AD_BIG_WIN_DOUBLE;
        _super.prototype.bigWinShow.call(this);
    };
    /**
     * 升级经验条增长完后的回调
     * @param upgrade
     */
    SlotsMasterGameStageBase.prototype.updateLevelCallback = function (upgrade) {
        _super.prototype.updateLevelCallback.call(this, upgrade);
        if (upgrade) {
            this.levelUp.onAdButtonClick(this.watchAdClick.bind(this, this.adComplete.bind(this)));
        }
    };
    /**
     * 广告看完后的回调
     */
    SlotsMasterGameStageBase.prototype.adComplete = function () {
        cc.log("Ad has been played successfully");
        //todo 根据对应的广告Id获取对应的奖励
    };
    /**
     * 广告点击事件
     * @param callback
     */
    SlotsMasterGameStageBase.prototype.watchAdClick = function (callback) {
        //跳转到广告  看完之后回调 然后关闭该界面
    };
    /**
     *获得卡片的时候调用
     * @param cardsData 卡片数据
     */
    SlotsMasterGameStageBase.prototype.cardViewShow = function (cardsData) {
        this.pauseSymbolBoard();
        // this._cardView.setData(cardsData, () => {
        //     this.continueSymbolBoard();
        // });
    };
    return SlotsMasterGameStageBase;
}(SlotGameStageBase_1.default));
exports.default = SlotsMasterGameStageBase;

cc._RF.pop();
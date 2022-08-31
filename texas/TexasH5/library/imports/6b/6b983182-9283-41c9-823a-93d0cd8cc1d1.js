"use strict";
cc._RF.push(module, '6b983GCkoNByYI6k9DNjMHR', 'MyKnapsackItem');
// GameHall/script/Lobby/knapsack/MyKnapsackItem.ts

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
exports.MyKnapsackItem = void 0;
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var MyKnapsackItem = /** @class */ (function (_super) {
    __extends(MyKnapsackItem, _super);
    function MyKnapsackItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyKnapsackItem.prototype.onConstruct = function () {
        this.typename = this.getChild("typename").asTextField;
        this.btn_exchange = this.getChild("btn_exchange").asButton;
        this.btn_use = this.getChild("btn_use").asButton;
        this.bgController = this.getController("bg");
        this.descGroup = this.getChild("n10").asGroup;
        this.descText = this.getChild("desc").asRichTextField;
        this.isUse = this.getController("isuse");
        this.btn_exchange.onClick(this.exchange, this);
        this.btn_use.onClick(this.useProp, this);
        this.iconLoader = this.getChild("iconLoader").asLoader;
    };
    MyKnapsackItem.prototype.setData = function (data) {
        console.log("data PropInfo == ", data);
        // if (data.PropName == "")
        this.PropType = data.PropType;
        this.count = data.PropCount;
        this.typename.text = data.PropName + "*" + data.PropCount;
        this.descText.text = data.Desc;
        this.isUse.setSelectedIndex(data.UseType);
        this.PropID = data.PropID;
        UIUtil_1.UIUtil.loadShopImage(this.iconLoader, data.ImgUrl);
        this.imgUrl = data.ImgUrl;
        switch (data.PropID) {
            case 10008:
                this.bgController.setSelectedIndex(0);
                break;
            case 10009:
                this.bgController.setSelectedIndex(2);
                break;
            case 10010:
                this.bgController.setSelectedIndex(3);
                break;
            default:
                this.bgController.setSelectedIndex(1);
                break;
        }
    };
    MyKnapsackItem.prototype.showDesc = function () {
        this.descGroup.visible = !this.descGroup.visible;
    };
    /**兑换 */
    MyKnapsackItem.prototype.exchange = function (event) {
        event.bubbles = false;
        AudioManager_1.AudioManager.Singleton.play('MyKnapsackItem', "button");
        if (this.PropType == 0) {
            // LobbyViewCtr.instance.cs_useprop(this.PropID, this.count, true);
            LobbyViewCtr_1.default.instance.cs_useprop(this.PropID, 1, true);
        }
        else {
            LobbyViewCtr_1.default.instance.cs_useprop(this.PropID, 1, true);
        }
    };
    /**使用 */
    MyKnapsackItem.prototype.useProp = function (event) {
        event.bubbles = false;
        AudioManager_1.AudioManager.Singleton.play('MyKnapsackItem', "button");
        if (this.PropType == 1) {
            if (AppConst_1.AppConst.mPlayerModel["headIcos"].indexOf(this.imgUrl) == -1) {
                AppConst_1.AppConst.mPlayerModel["headIcos"].push(this.imgUrl);
            }
        }
        LobbyViewCtr_1.default.instance.cs_useprop(this.PropID, 1, false);
    };
    return MyKnapsackItem;
}(fgui.GComponent));
exports.MyKnapsackItem = MyKnapsackItem;

cc._RF.pop();
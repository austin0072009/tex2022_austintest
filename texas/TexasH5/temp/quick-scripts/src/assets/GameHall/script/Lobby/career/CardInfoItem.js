"use strict";
cc._RF.push(module, '90759nFhnxEFqyXwS4lG3D8', 'CardInfoItem');
// GameHall/script/Lobby/career/CardInfoItem.ts

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
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
/**@description 我的牌普 item */
var CardInfoItem = /** @class */ (function (_super) {
    __extends(CardInfoItem, _super);
    function CardInfoItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataInfo = null;
        _this.isDelect = false;
        return _this;
    }
    CardInfoItem.prototype.onConstruct = function () {
        this.selectBtn = this.getChild("n2").asButton;
        this.cardLoader0 = this.getChild("n6").asLoader;
        this.cardLoader1 = this.getChild("n7").asLoader;
        this.cardLoader2 = this.getChild("n8").asLoader;
        this.cardLoader3 = this.getChild("n9").asLoader;
        this.cardLoader4 = this.getChild("n10").asLoader;
        this.cardLoader5 = this.getChild("n11").asLoader;
        this.cardLoader6 = this.getChild("n12").asLoader;
        this.txtWin = this.getChild("n3").asTextField;
        this.cardLoader0.url = "ui://Lobby/101_1";
        this.cardLoader1.url = "ui://Lobby/102_1";
        this.cardLoader2.url = "ui://Lobby/103_1";
        this.cardLoader3.url = "ui://Lobby/104_1";
        this.cardLoader4.url = "ui://Lobby/105_1";
        this.cardLoader5.url = "ui://Lobby/106_1";
        this.cardLoader6.url = "ui://Lobby/107_1";
        this.selectBtn.onClick(this.selectCard, this);
        this.winController = this.getController("win");
        this.typeController = this.getController("type");
        this.editController = this.getController("edit");
    };
    CardInfoItem.prototype.setData = function (data, OwnWin) {
        for (var i = 0; i < 7; i++) {
            // console.error(`ui://Lobby/${data[i]}_1`);
            this["cardLoader" + i].url = "ui://Lobby/" + data[i] + "_1";
        }
        var num = UIUtil_1.UIUtil.formatNumber100(OwnWin);
        this.txtWin.text = num > 0 ? "+" + num : num + "";
        this.winController.setSelectedIndex(OwnWin > 0 ? 1 : 0);
    };
    CardInfoItem.prototype.selectCard = function () {
        this.isDelect = !this.isDelect;
        this.setTypeCon(this.isDelect ? 1 : 0);
    };
    CardInfoItem.prototype.setTypeCon = function (type) {
        this.typeController.setSelectedIndex(type);
    };
    CardInfoItem.prototype.setEditCon = function (index) {
        this.editController.setSelectedIndex(index);
    };
    return CardInfoItem;
}(fgui.GComponent));
exports.default = CardInfoItem;

cc._RF.pop();
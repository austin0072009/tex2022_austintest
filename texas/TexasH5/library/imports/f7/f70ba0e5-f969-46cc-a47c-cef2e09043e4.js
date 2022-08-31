"use strict";
cc._RF.push(module, 'f70baDl+WlGzKR8zvLgkEPk', 'RoomItem');
// GameHall/script/Lobby/Components/RoomItem.ts

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
/**
 * @description 进入游戏的列表item
 */
var RoomItem = /** @class */ (function (_super) {
    __extends(RoomItem, _super);
    function RoomItem() {
        return _super.call(this) || this;
    }
    RoomItem.prototype.onConstruct = function () {
        this.gameName = this.getChild("name").asTextField;
        this.colorController = this.getController("id");
        this.timeText = this.getChild("time").asTextField;
        this.playNum = this.getChild("play").asTextField;
        this.bet = this.getChild("bet").asTextField;
        this.limitGold = this.getChild("limit").asTextField;
        this.tableId = this.getChild("table").asTextField;
        this.status = this.getChild("status").asTextField;
        this.friendGroup = this.getChild("friendGroup").asGroup;
        this.typeController = this.getController("type");
        this.tableId._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.gameName._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.playNum._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.limitGold._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.timeText._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.getChild("n8").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
    };
    /**设置控制器 */
    RoomItem.prototype.setColor = function (color) {
        this.colorController.setSelectedIndex(color);
    };
    /**设置数据 */
    RoomItem.prototype.setData = function (data) {
        this.gameName.text = data.name;
        this.tableId.text = data.tableId;
        this.timeText.text = this.ChangeHourMinutestr(Math.round(data.time / 60));
        this.playNum.text = data.playNum + "/" + data.maxPlayNum; //9
        this.limitGold.text = this.numToCountingNnit(data.brate * 2 * 100);
        this.bet.text = data.brate + "/" + data.brate * 2 + "/" + data.brate * 4 + "(" + data.preG + ")";
        this.gid = data.gid;
        this.tid = data.tid;
        this.lvid = data.lvid;
        if (data.IsSettle) {
            this.status.text = "已结算";
        }
        else if (data.cgold > 0) {
            this.status.text = "参与中";
        }
        else {
            this.status.text = "";
        }
        console.log("data.ispas == ", data.ispas);
        this.friendGroup.visible = data.ispas == 1;
        if (data.brate < 1) {
            this.setColor(0);
        }
        else if (data.brate == 1 || data.brate == 2 || data.brate == 5) {
            this.setColor(1);
        }
        else if (data.brate == 10 || data.brate == 25 || data.brate == 50) {
            this.setColor(2);
        }
        else if (data.brate == 100 || data.brate == 200 || data.brate == 500) {
            this.setColor(3);
        }
        if (data.t == 20) { //aof
            this.typeController.setSelectedIndex(1);
        }
        else if (data.t == 10) { //短牌
            this.typeController.setSelectedIndex(2);
        }
        else {
            this.typeController.setSelectedIndex(0);
        }
    };
    RoomItem.prototype.ChangeHourMinutestr = function (str) {
        var timeStr = (Math.floor(str / 60)).toString();
        var mtimeStr = (str % 60).toString();
        // return (timeStr.length < 2 ? "0" + timeStr : timeStr) + "h" + (mtimeStr.length < 2 ? "0" + mtimeStr : mtimeStr)+"min";
        return (timeStr) + "h" + (mtimeStr) + "min";
    };
    RoomItem.prototype.numToCountingNnit = function (num) {
        if (num >= 1000) {
            num /= 1000;
            return num + "k";
        }
        return num + '';
    };
    return RoomItem;
}(fgui.GButton));
exports.default = RoomItem;

cc._RF.pop();
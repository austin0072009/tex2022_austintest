
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/Components/RoomItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXENvbXBvbmVudHNcXFJvb21JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztHQUVHO0FBQ0g7SUFBc0MsNEJBQVk7SUFDOUM7ZUFDSSxpQkFBTztJQUNYLENBQUM7SUF3QlMsOEJBQVcsR0FBckI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztR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QUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLHlIQUF5SDtRQUN6SCxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBRWhELENBQUM7SUFFTSxvQ0FBaUIsR0FBeEIsVUFBeUIsR0FBVztRQUNoQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDYixHQUFHLElBQUksSUFBSSxDQUFDO1lBQ1osT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FoSEEsQUFnSEMsQ0FoSHFDLElBQUksQ0FBQyxPQUFPLEdBZ0hqRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOi/m+WFpea4uOaIj+eahOWIl+ihqGl0ZW1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb21JdGVtIGV4dGVuZHMgZmd1aS5HQnV0dG9uIHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgLyoq5ri45oiP5ZCN5a2XICovXHJcbiAgICBwcml2YXRlIGdhbWVOYW1lOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirpopzoibLmjqfliLblmaggKi9cclxuICAgIHByaXZhdGUgY29sb3JDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICAvKirml7bpl7QgKi9cclxuICAgIHByaXZhdGUgdGltZVRleHQ6IGZndWkuR1RleHRGaWVsZDtcclxuICAgIC8qKuS6uuaVsCAqL1xyXG4gICAgcHJpdmF0ZSBwbGF5TnVtOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirlupXms6ggKi9cclxuICAgIHByaXZhdGUgYmV0OiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirlh4blhaXph5HluIEgKi9cclxuICAgIHByaXZhdGUgbGltaXRHb2xkOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirmoYzlrZBpZCAqL1xyXG4gICAgcHJpdmF0ZSB0YWJsZUlkOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirmoYzlrZDnirbmgIEgKi9cclxuICAgIHByaXZhdGUgc3RhdHVzOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirlpb3lj4vmiL8gKi9cclxuICAgIHByaXZhdGUgZnJpZW5kR3JvdXA6IGZndWkuR0dyb3VwO1xyXG5cclxuICAgIHB1YmxpYyBnaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0aWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBsdmlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHR5cGVDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICBwcm90ZWN0ZWQgb25Db25zdHJ1Y3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nYW1lTmFtZSA9IHRoaXMuZ2V0Q2hpbGQoXCJuYW1lXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMuY29sb3JDb250cm9sbGVyID0gdGhpcy5nZXRDb250cm9sbGVyKFwiaWRcIik7XHJcbiAgICAgICAgdGhpcy50aW1lVGV4dCA9IHRoaXMuZ2V0Q2hpbGQoXCJ0aW1lXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMucGxheU51bSA9IHRoaXMuZ2V0Q2hpbGQoXCJwbGF5XCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMuYmV0ID0gdGhpcy5nZXRDaGlsZChcImJldFwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLmxpbWl0R29sZCA9IHRoaXMuZ2V0Q2hpbGQoXCJsaW1pdFwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLnRhYmxlSWQgPSB0aGlzLmdldENoaWxkKFwidGFibGVcIikuYXNUZXh0RmllbGQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLmdldENoaWxkKFwic3RhdHVzXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kR3JvdXAgPSB0aGlzLmdldENoaWxkKFwiZnJpZW5kR3JvdXBcIikuYXNHcm91cDtcclxuICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyID0gdGhpcy5nZXRDb250cm9sbGVyKFwidHlwZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy50YWJsZUlkLl9sYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUjtcclxuICAgICAgICB0aGlzLmdhbWVOYW1lLl9sYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUjtcclxuICAgICAgICB0aGlzLnBsYXlOdW0uX2xhYmVsLmNhY2hlTW9kZSA9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSO1xyXG4gICAgICAgIHRoaXMubGltaXRHb2xkLl9sYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUjtcclxuICAgICAgICB0aGlzLnRpbWVUZXh0Ll9sYWJlbC5jYWNoZU1vZGUgPSBjYy5MYWJlbC5DYWNoZU1vZGUuQ0hBUjtcclxuICAgICAgICB0aGlzLmdldENoaWxkKFwibjhcIikuYXNUZXh0RmllbGQuX2xhYmVsLmNhY2hlTW9kZSA9IGNjLkxhYmVsLkNhY2hlTW9kZS5DSEFSO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuiuvue9ruaOp+WItuWZqCAqL1xyXG4gICAgcHVibGljIHNldENvbG9yKGNvbG9yOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvbG9yQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KGNvbG9yKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKuiuvue9ruaVsOaNriAqL1xyXG4gICAgcHVibGljIHNldERhdGEoZGF0YToge1xyXG4gICAgICAgIG5hbWU6IHN0cmluZywgdGFibGVJZDogc3RyaW5nLCB0aW1lOiBudW1iZXIsIHBsYXlOdW06IG51bWJlcixcclxuICAgICAgICBsaW1pdDogbnVtYmVyLCBtYXhQbGF5TnVtOiBudW1iZXIsIGJyYXRlOiBudW1iZXIsIHByZUc6IG51bWJlciwgZ2lkOiBudW1iZXIsIHRpZDogbnVtYmVyLCBsdmlkOiBudW1iZXIsIHQ6IG51bWJlcixcclxuICAgICAgICBJc1NldHRsZTogYm9vbGVhbiwgY2dvbGQ6IG51bWJlciwgaXNwYXM6IG51bWJlclxyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZU5hbWUudGV4dCA9IGRhdGEubmFtZTtcclxuICAgICAgICB0aGlzLnRhYmxlSWQudGV4dCA9IGRhdGEudGFibGVJZDtcclxuICAgICAgICB0aGlzLnRpbWVUZXh0LnRleHQgPSB0aGlzLkNoYW5nZUhvdXJNaW51dGVzdHIoTWF0aC5yb3VuZChkYXRhLnRpbWUgLyA2MCkpO1xyXG4gICAgICAgIHRoaXMucGxheU51bS50ZXh0ID0gYCR7ZGF0YS5wbGF5TnVtfS8ke2RhdGEubWF4UGxheU51bX1gOyAgIC8vOVxyXG4gICAgICAgIHRoaXMubGltaXRHb2xkLnRleHQgPSB0aGlzLm51bVRvQ291bnRpbmdObml0KGRhdGEuYnJhdGUgKiAyICogMTAwKTtcclxuICAgICAgICB0aGlzLmJldC50ZXh0ID0gYCR7ZGF0YS5icmF0ZX0vJHtkYXRhLmJyYXRlICogMn0vJHtkYXRhLmJyYXRlICogNH0oJHtkYXRhLnByZUd9KWA7XHJcbiAgICAgICAgdGhpcy5naWQgPSBkYXRhLmdpZDtcclxuICAgICAgICB0aGlzLnRpZCA9IGRhdGEudGlkO1xyXG4gICAgICAgIHRoaXMubHZpZCA9IGRhdGEubHZpZDtcclxuICAgICAgICBpZiAoZGF0YS5Jc1NldHRsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1cy50ZXh0ID0gXCLlt7Lnu5PnrpdcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuY2dvbGQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzLnRleHQgPSBcIuWPguS4juS4rVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzLnRleHQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEuaXNwYXMgPT0gXCIsIGRhdGEuaXNwYXMpO1xyXG4gICAgICAgIHRoaXMuZnJpZW5kR3JvdXAudmlzaWJsZSA9IGRhdGEuaXNwYXMgPT0gMTtcclxuICAgICAgICBpZiAoZGF0YS5icmF0ZSA8IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcigwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuYnJhdGUgPT0gMSB8fCBkYXRhLmJyYXRlID09IDIgfHwgZGF0YS5icmF0ZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29sb3IoMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmJyYXRlID09IDEwIHx8IGRhdGEuYnJhdGUgPT0gMjUgfHwgZGF0YS5icmF0ZSA9PSA1MCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbG9yKDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5icmF0ZSA9PSAxMDAgfHwgZGF0YS5icmF0ZSA9PSAyMDAgfHwgZGF0YS5icmF0ZSA9PSA1MDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcigzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEudCA9PSAyMCkgey8vYW9mXHJcbiAgICAgICAgICAgIHRoaXMudHlwZUNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEudCA9PSAxMCkgeyAvL+efreeJjFxyXG4gICAgICAgICAgICB0aGlzLnR5cGVDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlQ29udHJvbGxlci5zZXRTZWxlY3RlZEluZGV4KDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2hhbmdlSG91ck1pbnV0ZXN0cihzdHI6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0aW1lU3RyID0gKE1hdGguZmxvb3Ioc3RyIC8gNjApKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBtdGltZVN0ciA9IChzdHIgJSA2MCkudG9TdHJpbmcoKTtcclxuICAgICAgICAvLyByZXR1cm4gKHRpbWVTdHIubGVuZ3RoIDwgMiA/IFwiMFwiICsgdGltZVN0ciA6IHRpbWVTdHIpICsgXCJoXCIgKyAobXRpbWVTdHIubGVuZ3RoIDwgMiA/IFwiMFwiICsgbXRpbWVTdHIgOiBtdGltZVN0cikrXCJtaW5cIjtcclxuICAgICAgICByZXR1cm4gKHRpbWVTdHIpICsgXCJoXCIgKyAobXRpbWVTdHIpICsgXCJtaW5cIjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG51bVRvQ291bnRpbmdObml0KG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKG51bSA+PSAxMDAwKSB7XHJcbiAgICAgICAgICAgIG51bSAvPSAxMDAwO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVtICsgXCJrXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW0gKyAnJztcclxuICAgIH1cclxuXHJcbn0iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/cs_base.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a8f9J2BLlPhKj9/rA8/oCz', 'cs_base');
// Script/BaseFrame/cs_base.ts

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
exports.sc_commonnotice_n = exports.sc_freshgold_n = exports.sc_entertablenum = exports.cs_entertablenum = exports.RoomInfoSD = exports.sc_getgamelevel = exports.cs_getgamelevel = exports.sc_disconnect_n = exports.sc_exittable_n = exports.sc_warning_n = exports.sc_chat_n = exports.sc_chat = exports.cs_chat = exports.UserRemark = exports.WechatInfoSD = exports.CountInfoSD = exports.OtherUserInfoSD = exports.CommonPosValSD = exports.CommonPosValListSD = exports.PlayerInfoSD = exports.sc_base = exports.cs_base = void 0;
//客户端消息基类
var cs_base = /** @class */ (function () {
    function cs_base() {
        // 函数名
        this.fn = "";
        // constructor() {
        //     this.fn = this.constructor.name
        // }
    }
    return cs_base;
}());
exports.cs_base = cs_base;
var sc_base = /** @class */ (function () {
    function sc_base() {
        // 函数名
        this.fn = "";
        // constructor() {
        //     this.fn = this.constructor.name
        // }
    }
    return sc_base;
}());
exports.sc_base = sc_base;
var PlayerInfoSD = /** @class */ (function () {
    function PlayerInfoSD() {
    }
    return PlayerInfoSD;
}());
exports.PlayerInfoSD = PlayerInfoSD;
var CommonPosValListSD = /** @class */ (function () {
    function CommonPosValListSD() {
    }
    return CommonPosValListSD;
}());
exports.CommonPosValListSD = CommonPosValListSD;
var CommonPosValSD = /** @class */ (function () {
    function CommonPosValSD() {
    }
    return CommonPosValSD;
}());
exports.CommonPosValSD = CommonPosValSD;
var OtherUserInfoSD = /** @class */ (function () {
    function OtherUserInfoSD() {
    }
    return OtherUserInfoSD;
}());
exports.OtherUserInfoSD = OtherUserInfoSD;
var CountInfoSD = /** @class */ (function () {
    function CountInfoSD() {
    }
    return CountInfoSD;
}());
exports.CountInfoSD = CountInfoSD;
var WechatInfoSD = /** @class */ (function () {
    function WechatInfoSD() {
    }
    return WechatInfoSD;
}());
exports.WechatInfoSD = WechatInfoSD;
/// <summary>
/// 玩家备注
/// </summary> 
var UserRemark = /** @class */ (function () {
    function UserRemark() {
    }
    return UserRemark;
}());
exports.UserRemark = UserRemark;
/// <summary>
/// 聊天功能             只有在游戏中，的具体一桌才能发消息
/// </summary>
var cs_chat = /** @class */ (function (_super) {
    __extends(cs_chat, _super);
    function cs_chat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_chat;
}(cs_base));
exports.cs_chat = cs_chat;
var sc_chat = /** @class */ (function (_super) {
    __extends(sc_chat, _super);
    function sc_chat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_chat;
}(sc_base));
exports.sc_chat = sc_chat;
var sc_chat_n = /** @class */ (function (_super) {
    __extends(sc_chat_n, _super);
    function sc_chat_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_chat_n;
}(sc_base));
exports.sc_chat_n = sc_chat_n;
/// <summary>
/// 警告 同IP，或同位置，GPS计算
/// </summary> 
var sc_warning_n = /** @class */ (function (_super) {
    __extends(sc_warning_n, _super);
    function sc_warning_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_warning_n;
}(sc_base));
exports.sc_warning_n = sc_warning_n;
/// <summary>
/// 通知有人离开桌子了，可能是自己人离开，可能是被服务器规则T出
/// </summary>
var sc_exittable_n = /** @class */ (function (_super) {
    __extends(sc_exittable_n, _super);
    function sc_exittable_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_exittable_n;
}(sc_base));
exports.sc_exittable_n = sc_exittable_n;
/// <summary>
/// 游戏中掉线通知，
/// </summary>
var sc_disconnect_n = /** @class */ (function (_super) {
    __extends(sc_disconnect_n, _super);
    function sc_disconnect_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_disconnect_n;
}(sc_base));
exports.sc_disconnect_n = sc_disconnect_n;
var cs_getgamelevel = /** @class */ (function (_super) {
    __extends(cs_getgamelevel, _super);
    function cs_getgamelevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getgamelevel;
}(cs_base));
exports.cs_getgamelevel = cs_getgamelevel;
var sc_getgamelevel = /** @class */ (function (_super) {
    __extends(sc_getgamelevel, _super);
    function sc_getgamelevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getgamelevel;
}(sc_base));
exports.sc_getgamelevel = sc_getgamelevel;
var RoomInfoSD = /** @class */ (function () {
    function RoomInfoSD() {
    }
    return RoomInfoSD;
}());
exports.RoomInfoSD = RoomInfoSD;
/// <summary>
/// 输入房号进入的玩家需再次申请  
/// </summary>
var cs_entertablenum = /** @class */ (function (_super) {
    __extends(cs_entertablenum, _super);
    function cs_entertablenum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_entertablenum;
}(cs_base));
exports.cs_entertablenum = cs_entertablenum;
var sc_entertablenum = /** @class */ (function (_super) {
    __extends(sc_entertablenum, _super);
    function sc_entertablenum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_entertablenum;
}(sc_base));
exports.sc_entertablenum = sc_entertablenum;
// 刷新
var sc_freshgold_n = /** @class */ (function (_super) {
    __extends(sc_freshgold_n, _super);
    function sc_freshgold_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_freshgold_n;
}(sc_base));
exports.sc_freshgold_n = sc_freshgold_n;
/// <summary>
/// 公共消息推送  没有具体讯息
/// </summary>
var sc_commonnotice_n = /** @class */ (function (_super) {
    __extends(sc_commonnotice_n, _super);
    function sc_commonnotice_n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_commonnotice_n;
}(sc_base));
exports.sc_commonnotice_n = sc_commonnotice_n;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXGNzX2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVM7QUFDVDtJQUFBO1FBQ0ksTUFBTTtRQUNDLE9BQUUsR0FBVyxFQUFFLENBQUM7UUFHdkIsa0JBQWtCO1FBQ2xCLHNDQUFzQztRQUN0QyxJQUFJO0lBQ1IsQ0FBQztJQUFELGNBQUM7QUFBRCxDQVJBLEFBUUMsSUFBQTtBQVJZLDBCQUFPO0FBU3BCO0lBQUE7UUFDSSxNQUFNO1FBQ0MsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQU92QixrQkFBa0I7UUFDbEIsc0NBQXNDO1FBQ3RDLElBQUk7SUFDUixDQUFDO0lBQUQsY0FBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksMEJBQU87QUFjcEI7SUFBQTtJQWlGQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQWpGQSxBQWlGQyxJQUFBO0FBakZZLG9DQUFZO0FBbUZ6QjtJQUFBO0lBR0EsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSxnREFBa0I7QUFLL0I7SUFBQTtJQUdBLENBQUM7SUFBRCxxQkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksd0NBQWM7QUFLM0I7SUFBQTtJQXNCQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLDBDQUFlO0FBeUI1QjtJQUFBO0lBNkRBLENBQUM7SUFBRCxrQkFBQztBQUFELENBN0RBLEFBNkRDLElBQUE7QUE3RFksa0NBQVc7QUErRHhCO0lBQUE7SUFnQkEsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxvQ0FBWTtBQWtCekIsYUFBYTtBQUNiLFFBQVE7QUFDUixlQUFlO0FBQ2Y7SUFBQTtJQWFBLENBQUM7SUFBRCxpQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksZ0NBQVU7QUFnQnZCLGFBQWE7QUFDYixzQ0FBc0M7QUFDdEMsY0FBYztBQUNkO0lBQTZCLDJCQUFPO0lBQXBDOztJQW9CQSxDQUFDO0lBQUQsY0FBQztBQUFELENBcEJBLEFBb0JDLENBcEI0QixPQUFPLEdBb0JuQztBQXBCWSwwQkFBTztBQXFCcEI7SUFBNkIsMkJBQU87SUFBcEM7O0lBRUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGNEIsT0FBTyxHQUVuQztBQUZZLDBCQUFPO0FBR3BCO0lBQStCLDZCQUFPO0lBQXRDOztJQXVCQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxDQXZCOEIsT0FBTyxHQXVCckM7QUF2QlksOEJBQVM7QUF5QnRCLGFBQWE7QUFDYixxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0lBQWtDLGdDQUFPO0lBQXpDOztJQVdBLENBQUM7SUFBRCxtQkFBQztBQUFELENBWEEsQUFXQyxDQVhpQyxPQUFPLEdBV3hDO0FBWFksb0NBQVk7QUFZekIsYUFBYTtBQUNiLGtDQUFrQztBQUNsQyxjQUFjO0FBQ2Q7SUFBb0Msa0NBQU87SUFBM0M7O0lBVUEsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FWQSxBQVVDLENBVm1DLE9BQU8sR0FVMUM7QUFWWSx3Q0FBYztBQVczQixhQUFhO0FBQ2IsWUFBWTtBQUNaLGNBQWM7QUFDZDtJQUFxQyxtQ0FBTztJQUE1Qzs7SUFTQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQVRBLEFBU0MsQ0FUb0MsT0FBTyxHQVMzQztBQVRZLDBDQUFlO0FBWTVCO0lBQXFDLG1DQUFPO0lBQTVDOztJQUNBLENBQUM7SUFBRCxzQkFBQztBQUFELENBREEsQUFDQyxDQURvQyxPQUFPLEdBQzNDO0FBRFksMENBQWU7QUFHNUI7SUFBcUMsbUNBQU87SUFBNUM7O0lBR0EsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FIQSxBQUdDLENBSG9DLE9BQU8sR0FHM0M7QUFIWSwwQ0FBZTtBQUs1QjtJQUFBO0lBK0JBLENBQUM7SUFBRCxpQkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksZ0NBQVU7QUFpQ3ZCLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsY0FBYztBQUNkO0lBQXNDLG9DQUFPO0lBQTdDOztJQUVBLENBQUM7SUFBRCx1QkFBQztBQUFELENBRkEsQUFFQyxDQUZxQyxPQUFPLEdBRTVDO0FBRlksNENBQWdCO0FBSTdCO0lBQXNDLG9DQUFPO0lBQTdDOztJQUdBLENBQUM7SUFBRCx1QkFBQztBQUFELENBSEEsQUFHQyxDQUhxQyxPQUFPLEdBRzVDO0FBSFksNENBQWdCO0FBSzdCLEtBQUs7QUFDTDtJQUFvQyxrQ0FBTztJQUEzQzs7SUFNQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQU5BLEFBTUMsQ0FObUMsT0FBTyxHQU0xQztBQU5ZLHdDQUFjO0FBUTNCLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsY0FBYztBQUNkO0lBQXVDLHFDQUFPO0lBQTlDOztJQVdBLENBQUM7SUFBRCx3QkFBQztBQUFELENBWEEsQUFXQyxDQVhzQyxPQUFPLEdBVzdDO0FBWFksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/lrqLmiLfnq6/mtojmga/ln7rnsbtcbmV4cG9ydCBjbGFzcyBjc19iYXNlIHtcbiAgICAvLyDlh73mlbDlkI1cbiAgICBwdWJsaWMgZm46IHN0cmluZyA9IFwiXCI7XG4gICAgLy8g5Y+v6IO95Li6MO+8jOa4uOaIj+eahOWNj+iuruS9v+eUqOWvueW6lOa4uOaIj0lEXG4gICAgcHVibGljIF9nOiBudW1iZXI7XG4gICAgLy8gY29uc3RydWN0b3IoKSB7XG4gICAgLy8gICAgIHRoaXMuZm4gPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAvLyB9XG59XG5leHBvcnQgY2xhc3Mgc2NfYmFzZSB7XG4gICAgLy8g5Ye95pWw5ZCNXG4gICAgcHVibGljIGZuOiBzdHJpbmcgPSBcIlwiO1xuICAgIC8vIOWPr+iDveS4ujDvvIzmuLjmiI/nmoTljY/orq7kvb/nlKjlr7nlupTmuLjmiI9JRFxuICAgIHB1YmxpYyBfbXNnaWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDEu5oiQ5YqfIDDlpLHotKUgLTHlhbfkvZPljp/lm6DjgIJcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyByZXN1bHQ6IG51bWJlcjtcbiAgICAvLyBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyAgICAgdGhpcy5mbiA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIC8vIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllckluZm9TRCB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyBTZXNzaW9u55qESUQg6Z2e6Ieq5aKe6ZW/55qEXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdXNlcmlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDnjqnlrrblkI3lrZdcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfbjogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gIHNpZ24gaW4gY291bnTnjqnlrrbov57nu63nmbvpmYblpKnmlbAgICAgIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9zYzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gSkJcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDpkrvnn7NcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfZGlhbTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g546p5a62dmlw562J57qnIDAg5LiN5pivVklQICAxIDIgM+S7o+ihqOeOqeWutlZJUOetiee6p1xuICAgIC8vL+eOqeWutueahFZJUOetiee6pzDkuI3mmK9WSVAgICAgXG4gICAgLy8vMSAyIDPliIbliKvmmK/ku6PnkIYgICBcbiAgICAvLy84IOWQiOS8meS6ui4556ys5LqM57qnLjEw5Yib5aeL5Lq6XG4gICAgLy8vMTjmmK/kuLvmkq0g5Y+q6IO95Li75pKt56uv55m75b2VIFxuICAgIC8vLzE55piv6IO95Yib5bu65oi/6Ze05pyA5aSn5pWwIFxuICAgIC8vLzIw5piv5re75Yqg5py65Zmo5Lq6XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX3ZsdjogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5ZCMIHR1c2Vy55qEdmxldmVsXHRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBsdjogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g546p5a6255qE5ri45oiP54q25oCB77yM6buY6K6k5Li6MCAgIEluTG9iYnkgPSAxLCBJblJvb20gPSAyLCBJblRhYmxlRGFpUGFpID0gMywgSW5UYWJsZURpcyA9IDRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBzdGF0ZTogbnVtYmVyO1xuICAgIHB1YmxpYyB3ZWNoYXQ6IFdlY2hhdEluZm9TRDtcbiAgICBwdWJsaWMgY2luZm86IENvdW50SW5mb1NEO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyB2aXBMdueOqeWutueahOi/h+acn+aXtumXtFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGV4cGlyZWRhdGU6IERhdGU7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDDmma7pgJrnjqnlrrYgICAx6YeR5Y2h546p5a6277yI5pyI5Y2h77yJICAgMueZvemHkeWNoeeOqeWutu+8iOW5tOWNoe+8iVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHZpcEx2OiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeZu+W9leeOqeWutuWvueeOqeWutueahOWkh+azqOe7k+aehFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHVyZW1hcms6IFVzZXJSZW1hcms7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpuWkhOS6juS/neaKpOeKtuaAgSAgMeaYryAgIDDlkKZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBJc1BybzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g546p5a625b2T5YmN5omA5Zyo54mM5qGMXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+u5pS55ZCN56ew5qyh5pWwXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZnJlZWNvdW50OiBudW1iZXI7XG5cbiAgICAvKirmi6XmnInnmoTlpLTlg4/moYYgKi9cbiAgICBwdWJsaWMgaGVhZEljb3M6IHN0cmluZ1tdO1xuICAgIC8qKuW9k+WJjemAieaLqeeahOWktOWDj+ahhiAqL1xuICAgIHB1YmxpYyBoZWFkRnJhbWU6IHN0cmluZztcbiAgICBwdWJsaWMgVXNlclBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS4vuaKpeeahOasoeaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHJlY291bnQ6IG51bWJlcjtcblxufVxuXG5leHBvcnQgY2xhc3MgQ29tbW9uUG9zVmFsTGlzdFNEIHtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgcHVibGljIHZhbGxpc3Q6IG51bWJlcltdO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tbW9uUG9zVmFsU0Qge1xuICAgIHB1YmxpYyBwb3M6IG51bWJlcjtcbiAgICBwdWJsaWMgdmFsOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBPdGhlclVzZXJJbmZvU0Qge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5YW25a6e55So5oi3XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcHk6IFBsYXllckluZm9TRDtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmmK/lkKbmjonnur/kuoYgICAgICAgMSAgICDlt7Lmjonnur9cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpc0RpczogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm5bey5YeG5aSHICAgICAgMSAgICAg5bey5YeG5aSHXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaXNSOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmmK/lkKbop4LkvJcgICAgICAxICAgIFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGlzVzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5piv5ZCm55WZ5bqnICAgIOeahOaXtumXtCAw6KGo56S65LiN6ZyA6KaB55WZ5bqnIOato+W4uOWAvDF+MzAw56eSXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgaXNLOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIENvdW50SW5mb1NEIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOiOt+iDnOaVsCDog5znjoflj6/ku6Xnm7TmjqXorqHnrpdcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB3aW5jOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlpLHotKXmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBmYWlsYzogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5bmz5bGA5pWwXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZGM6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOe/u+eJjOaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGZyOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliqDms6jmiYvmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBGaWxsaW5nQ291bnQ6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g54mM5bGA5oC75pWwXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdGFibGVudW06IG51bWJlcjtcblxuICAgIC8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlpKfnm7LmiYvmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBCaWdibGluZDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAz5YWs54mM5YmN5Yqg5rOoICAzK1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGJldDM6IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gM+WFrOeJjOWQjuWKoOazqCAgMytcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjYmV0MzogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuLvliqjlhaXmsaDmlbDph49cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBkcml2aW5nbnVtOiBudW1iZXI7XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWKoOazqOWFpeaxoOaVsOmHj1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGFkZHBvb2xudW06IG51bWJlcjtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Zy65Z2H5bim5YWlXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgQXZlaW50bzogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlnLrlnYfmiJjnu6lcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBBdmVHYWluczogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgV2VjaGF0SW5mb1NEIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW+ruS/oeaYteensFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHdOYW1lOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlvq7kv6HlpLTlg49JQ09OXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgd2ljb246IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaAp+WIq1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9TOiBudW1iZXI7XG5cbiAgICAvKirnsL3lkI0gKi9cbiAgICBwdWJsaWMgRGVzYzogc3RyaW5nO1xufVxuXG4vLy8gPHN1bW1hcnk+XG4vLy8g546p5a625aSH5rOoXG4vLy8gPC9zdW1tYXJ5PiBcbmV4cG9ydCBjbGFzcyBVc2VyUmVtYXJrIHtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeOqeWutmlkXG4gICAgLy8vIDwvc3VtbWFyeT4gXG4gICAgcHVibGljIHVzZXJpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g546p5rOV5aSH5rOoIFxuICAgIC8vLyA8L3N1bW1hcnk+IFxuICAgIHB1YmxpYyBwbGF5UmVtYXJrOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlpIfms6jlp5PlkI1cbiAgICAvLy8gPC9zdW1tYXJ5PiBcbiAgICBwdWJsaWMgcmVtYXJrTmFtZTogc3RyaW5nO1xufVxuXG5cbi8vLyA8c3VtbWFyeT5cbi8vLyDogYrlpKnlip/og70gICAgICAgICAgICAg5Y+q5pyJ5Zyo5ri45oiP5Lit77yM55qE5YW35L2T5LiA5qGM5omN6IO95Y+R5raI5oGvXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIGNzX2NoYXQgZXh0ZW5kcyBjc19iYXNlIHtcbiAgICBwdWJsaWMgbGV2ZWxpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB0YWJsZWlkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDopoHlj5HpgIHnmoTogYrlpKnlhoXlrrlcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjb250ZW50OiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAx6K+t6Z+z77yMMuihqOaDhe+8jDPmlofmnKwsIDTluLjnlKjor60sICA156S854mpICA25Y+R5by55bmV5raI6ICXXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdHlwZTogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55uu5qCH5L2N572uIOWmguaenOacieS9v+eUqOeahOivnVxuICAgIC8vLyDlvLnluZXnmoTml7blgJkgIDE65paH5pysICAgMjror63pn7NcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0cG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlj5Hooajmg4XpnIDopoHnmoTph5HluIEgdHlwZT01XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgbmdvbGQ6IG51bWJlcjtcbn1cbmV4cG9ydCBjbGFzcyBzY19jaGF0IGV4dGVuZHMgc2NfYmFzZSB7XG5cbn1cbmV4cG9ydCBjbGFzcyBzY19jaGF0X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgcG9zOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDopoHlj5HpgIHnmoTogYrlpKnlhoXlrrlcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjb250ZW50OiBzdHJpbmdcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDHor63pn7PvvIwy6KGo5oOF77yMM+aWh+acrCwgNOW4uOeUqOivrSwgIDXnpLznialcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55uu5qCH5L2N572uIOWmguaenOacieS9v+eUqOeahOivnVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHRwb3M6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOeOqeWutueVmeW6pyDpnIDopoHlpITnkIbmiJDnprvlvIDkvY3nva7mmL7npLrkv53nlZkzMDDnp5LnmoTlgJLorqHml7YgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMga2VlcDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5Ymp5LiL55qESkJcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnb2xkOiBudW1iZXI7XG59XG5cbi8vLyA8c3VtbWFyeT5cbi8vLyDorablkYog5ZCMSVDvvIzmiJblkIzkvY3nva7vvIxHUFPorqHnrpdcbi8vLyA8L3N1bW1hcnk+IFxuZXhwb3J0IGNsYXNzIHNjX3dhcm5pbmdfbiBleHRlbmRzIHNjX2Jhc2Uge1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gMeWQjElQ77yMMuWQjOS9jee9riBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB0eXBlOiBudW1iZXI7XG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDopoHlj5HpgIHnmoTlhoXlrrlcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjb250ZW50OiBzdHJpbmdcbn1cbi8vLyA8c3VtbWFyeT5cbi8vLyDpgJrnn6XmnInkurrnprvlvIDmoYzlrZDkuobvvIzlj6/og73mmK/oh6rlt7HkurrnprvlvIDvvIzlj6/og73mmK/ooqvmnI3liqHlmajop4TliJlU5Ye6XG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIHNjX2V4aXR0YWJsZV9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gIOS4jeWQjOaEj+eahOWIl+ihqCBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBkaXNhZ3JlZTogbnVtYmVyW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDov5jmsqHmnInlvIDlp4vnmoTor53vvIzmsqHmnInmiaPlh7pGS+eahOaXtuWAmeWwseebtOaOpemAgOWHuu+8jOW8gOWni+WQjumcgOimgeaYvuekuue7k+eul+mdouadv1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIF9zaG93UmVzdWx0OiBib29sZWFuO1xufVxuLy8vIDxzdW1tYXJ5PlxuLy8vIOa4uOaIj+S4reaOiee6v+mAmuefpe+8jFxuLy8vIDwvc3VtbWFyeT5cbmV4cG9ydCBjbGFzcyBzY19kaXNjb25uZWN0X24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG4gICAgcHVibGljIGxldmVsaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgdGFibGVpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBwb3M6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIDHooajnpLog5Y+I6YeN5paw6L+e5o6l5LiK5LqGXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgcmVjb25uZWN0OiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIGNzX2dldGdhbWVsZXZlbCBleHRlbmRzIGNzX2Jhc2Uge1xufVxuXG5leHBvcnQgY2xhc3Mgc2NfZ2V0Z2FtZWxldmVsIGV4dGVuZHMgc2NfYmFzZSB7XG5cbiAgICBwdWJsaWMgbGV2ZWxsaXN0OiBSb29tSW5mb1NEW107XG59XG5cbmV4cG9ydCBjbGFzcyBSb29tSW5mb1NEIHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIENoZXNzR2FtZU1vZGVs55qEaWRcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnYW1laWQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOatpOa4uOaIj+eahOWcqOe6v+S6uue6v1xuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIG9ubGluZUNvdW50OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmuLjmiI/nsbvlnovvvIwx77yMMlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGdhbWV0eXBlOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDliJ3vvIzkuK3vvIzpq5jnuqflnLpcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlupXliIZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBiYXNlcmF0ZTogbnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmnIDkvY5cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBfbWluOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmnIDpq5jpmZDliLYgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgX21heDogbnVtYmVyO1xufVxuXG4vLy8gPHN1bW1hcnk+XG4vLy8g6L6T5YWl5oi/5Y+36L+b5YWl55qE546p5a626ZyA5YaN5qyh55Sz6K+3ICBcbi8vLyA8L3N1bW1hcnk+XG5leHBvcnQgY2xhc3MgY3NfZW50ZXJ0YWJsZW51bSBleHRlbmRzIGNzX2Jhc2Uge1xuICAgIHB1YmxpYyB0bnVtYmVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBzY19lbnRlcnRhYmxlbnVtIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgcHVibGljIF9nOiBudW1iZXI7XG4gICAgcHVibGljIGRhdGE6IHN0cmluZztcbn1cblxuLy8g5Yi35pawXG5leHBvcnQgY2xhc3Mgc2NfZnJlc2hnb2xkX24gZXh0ZW5kcyBzY19iYXNlIHtcbiAgICBwdWJsaWMgZ29sZDogbnVtYmVyO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8gMS7pkrvnn7MgMi5KQiAzLmNsdWJpZHhcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBmcmVzaFR5cGU6IG51bWJlcjtcbn1cblxuLy8vIDxzdW1tYXJ5PlxuLy8vIOWFrOWFsea2iOaBr+aOqOmAgSAg5rKh5pyJ5YW35L2T6K6v5oGvXG4vLy8gPC9zdW1tYXJ5PlxuZXhwb3J0IGNsYXNzIHNjX2NvbW1vbm5vdGljZV9uIGV4dGVuZHMgc2NfYmFzZSB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAx77ya5Yqg5YWl5L+x5LmQ6YOo5oiQ5Yqf6YCa55+lXG4gICAgLy8vIDI66K6+572u566h55CG5ZGY5oiQ5Yqf6YCa55+lXG4gICAgLy8vIDM655Sz6K+35L+x5LmQ6YOo5biB5oiQ5Yqf6YCa55+lXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdHlwZTogbnVtYmVyO1xuXG4gICAgcHVibGljIFVzZXJJZDogbnVtYmVyO1xuXG4gICAgcHVibGljIGNsdWJpZDogbnVtYmVyO1xufSJdfQ==
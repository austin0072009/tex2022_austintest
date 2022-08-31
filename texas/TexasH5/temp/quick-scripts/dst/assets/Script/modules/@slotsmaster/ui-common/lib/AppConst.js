
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/AppConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '742d658OTRGgJQahc03l2Q1', 'AppConst');
// Script/modules/@slotsmaster/ui-common/lib/AppConst.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConst = void 0;
var AppConst = /** @class */ (function () {
    function AppConst() {
    }
    AppConst.serverId = "129.204.109.218"; //106.13.222.130
    AppConst.IsShowLoading = "IsShowLoading"; //菊花转动
    AppConst.IsShowTip = "IsShowTip"; //显示几秒自动消失的提示框
    AppConst.IsShowTipWindow = "IsShowTipWindow"; //显示二级弹窗提示
    AppConst.VERSION = "1.0.0"; //游戏版本号 
    AppConst.httpHost = "http://test.slotsmaster.didabu.com";
    AppConst.accessToken = "";
    AppConst.gameId = 0;
    AppConst.roomId = "";
    AppConst.userId = "";
    AppConst.cidx = 0;
    AppConst.hallData = [];
    AppConst.gameList = [];
    AppConst.Msg = "";
    AppConst.platform = ""; //当前设备类型
    AppConst.orderId = "";
    AppConst.curBet = 100;
    AppConst.dealId = "";
    AppConst.collectCount = 0;
    AppConst.timeCoinRemainTimes = 0;
    AppConst.resUrl = ""; //资源服务器地址
    AppConst.isEditor = true;
    /*是否经过大厅登录 */
    AppConst._lobbt = true;
    AppConst.userMsg = "";
    //分包加载的包名和场景名
    AppConst.packageName = "";
    AppConst.sceneName = "";
    //弹窗描述
    AppConst.Tip = {
        connectError: "connect Error",
        boosting: "Experience is accelerating",
        booster: "You Would earn EXP double times within 5 minutes.",
        update: "New version has been detected. For a better game experience,please upgrade to the latest version.",
        errorCountDown: "There is an error about countdown. The time is being updated for you.",
        countDown: "Remove countdown,collect free coins immediately!",
        noAdCount: "There is no ADs now,and these will arrive later in",
        adShow: "Please take your gift!",
        adLoadFail: "Failed to obtain ADs. Please try again later.",
        coinNotEnough: "coin Not Enough",
        headChangeNameTipOne: "The name is limited to 4-16 characters. Please enter again.",
        headChangeNameTipTwo: "No characters other than upper and lower case or numbers.",
        headChangeNameTipThree: "There are sensitive words in your name.",
    };
    return AppConst;
}());
exports.AppConst = AppConst;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxBcHBDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBMkRBLENBQUM7SUExRFUsaUJBQVEsR0FBVyxpQkFBaUIsQ0FBQyxDQUFDLGdCQUFnQjtJQUN0RCxzQkFBYSxHQUFXLGVBQWUsQ0FBQyxDQUFDLE1BQU07SUFDL0Msa0JBQVMsR0FBVyxXQUFXLENBQUMsQ0FBQyxjQUFjO0lBQy9DLHdCQUFlLEdBQVcsaUJBQWlCLENBQUMsQ0FBQyxVQUFVO0lBQ3ZELGdCQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsUUFBUTtJQUMzQixpQkFBUSxHQUFXLG9DQUFvQyxDQUFDO0lBQ3hELG9CQUFXLEdBQVcsRUFBRSxDQUFDO0lBQ3pCLGVBQU0sR0FBVyxDQUFDLENBQUM7SUFDbkIsZUFBTSxHQUFXLEVBQUUsQ0FBQztJQUNwQixlQUFNLEdBQVcsRUFBRSxDQUFDO0lBQ3BCLGFBQUksR0FBVyxDQUFDLENBQUM7SUFDakIsaUJBQVEsR0FBUSxFQUFFLENBQUM7SUFDbkIsaUJBQVEsR0FBZSxFQUFFLENBQUM7SUFDMUIsWUFBRyxHQUFRLEVBQUUsQ0FBQztJQUNkLGlCQUFRLEdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUTtJQUMvQixnQkFBTyxHQUFXLEVBQUUsQ0FBQztJQUNyQixlQUFNLEdBQVcsR0FBRyxDQUFDO0lBQ3JCLGVBQU0sR0FBVyxFQUFFLENBQUM7SUFDcEIscUJBQVksR0FBVyxDQUFDLENBQUM7SUFDekIsNEJBQW1CLEdBQVcsQ0FBQyxDQUFDO0lBQ2hDLGVBQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0lBQ3RCLGlCQUFRLEdBQVksSUFBSSxDQUFDO0lBQ2hDLGFBQWE7SUFDTixlQUFNLEdBQVksSUFBSSxDQUFDO0lBQ3ZCLGdCQUFPLEdBQVcsRUFBRSxDQUFDO0lBQzVCLGFBQWE7SUFDTixvQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixrQkFBUyxHQUFXLEVBQUUsQ0FBQztJQUM5QixNQUFNO0lBQ0MsWUFBRyxHQUFRO1FBQ2QsWUFBWSxFQUFFLGVBQWU7UUFDN0IsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxPQUFPLEVBQUUsbURBQW1EO1FBQzVELE1BQU0sRUFBRSxtR0FBbUc7UUFDM0csY0FBYyxFQUFFLHVFQUF1RTtRQUN2RixTQUFTLEVBQUUsa0RBQWtEO1FBQzdELFNBQVMsRUFBRSxvREFBb0Q7UUFDL0QsTUFBTSxFQUFFLHdCQUF3QjtRQUNoQyxVQUFVLEVBQUUsK0NBQStDO1FBQzNELGFBQWEsRUFBRSxpQkFBaUI7UUFDaEMsb0JBQW9CLEVBQUUsNkRBQTZEO1FBQ25GLG9CQUFvQixFQUFFLDJEQUEyRDtRQUNqRixzQkFBc0IsRUFBRSx5Q0FBeUM7S0FDcEUsQ0FBQztJQWVOLGVBQUM7Q0EzREQsQUEyREMsSUFBQTtBQTNEWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHBDb25zdCB7XG4gICAgc3RhdGljIHNlcnZlcklkOiBzdHJpbmcgPSBcIjEyOS4yMDQuMTA5LjIxOFwiOyAvLzEwNi4xMy4yMjIuMTMwXG4gICAgc3RhdGljIElzU2hvd0xvYWRpbmc6IHN0cmluZyA9IFwiSXNTaG93TG9hZGluZ1wiOyAvL+iPiuiKsei9rOWKqFxuICAgIHN0YXRpYyBJc1Nob3dUaXA6IHN0cmluZyA9IFwiSXNTaG93VGlwXCI7IC8v5pi+56S65Yeg56eS6Ieq5Yqo5raI5aSx55qE5o+Q56S65qGGXG4gICAgc3RhdGljIElzU2hvd1RpcFdpbmRvdzogc3RyaW5nID0gXCJJc1Nob3dUaXBXaW5kb3dcIjsgLy/mmL7npLrkuoznuqflvLnnqpfmj5DnpLpcbiAgICBzdGF0aWMgVkVSU0lPTiA9IFwiMS4wLjBcIjsgLy/muLjmiI/niYjmnKzlj7cgXG4gICAgc3RhdGljIGh0dHBIb3N0OiBzdHJpbmcgPSBcImh0dHA6Ly90ZXN0LnNsb3RzbWFzdGVyLmRpZGFidS5jb21cIjtcbiAgICBzdGF0aWMgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiXCI7XG4gICAgc3RhdGljIGdhbWVJZDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgcm9vbUlkOiBzdHJpbmcgPSBcIlwiO1xuICAgIHN0YXRpYyB1c2VySWQ6IHN0cmluZyA9IFwiXCI7XG4gICAgc3RhdGljIGNpZHg6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIGhhbGxEYXRhOiBhbnkgPSBbXTtcbiAgICBzdGF0aWMgZ2FtZUxpc3Q6IEFycmF5PGFueT4gPSBbXTtcbiAgICBzdGF0aWMgTXNnOiBhbnkgPSBcIlwiO1xuICAgIHN0YXRpYyBwbGF0Zm9ybTogc3RyaW5nID0gXCJcIjsgLy/lvZPliY3orr7lpIfnsbvlnotcbiAgICBzdGF0aWMgb3JkZXJJZDogc3RyaW5nID0gXCJcIjtcbiAgICBzdGF0aWMgY3VyQmV0OiBudW1iZXIgPSAxMDA7XG4gICAgc3RhdGljIGRlYWxJZDogc3RyaW5nID0gXCJcIjtcbiAgICBzdGF0aWMgY29sbGVjdENvdW50OiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyB0aW1lQ29pblJlbWFpblRpbWVzOiBudW1iZXIgPSAwO1xuICAgIHN0YXRpYyByZXNVcmwgPSBcIlwiOyAvL+i1hOa6kOacjeWKoeWZqOWcsOWdgFxuICAgIHN0YXRpYyBpc0VkaXRvcjogYm9vbGVhbiA9IHRydWU7XG4gICAgLyrmmK/lkKbnu4/ov4flpKfljoXnmbvlvZUgKi9cbiAgICBzdGF0aWMgX2xvYmJ0OiBib29sZWFuID0gdHJ1ZTtcbiAgICBzdGF0aWMgdXNlck1zZzogc3RyaW5nID0gXCJcIjtcbiAgICAvL+WIhuWMheWKoOi9veeahOWMheWQjeWSjOWcuuaZr+WQjVxuICAgIHN0YXRpYyBwYWNrYWdlTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBzdGF0aWMgc2NlbmVOYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIC8v5by556qX5o+P6L+wXG4gICAgc3RhdGljIFRpcDogYW55ID0ge1xuICAgICAgICBjb25uZWN0RXJyb3I6IFwiY29ubmVjdCBFcnJvclwiLFxuICAgICAgICBib29zdGluZzogXCJFeHBlcmllbmNlIGlzIGFjY2VsZXJhdGluZ1wiLFxuICAgICAgICBib29zdGVyOiBcIllvdSBXb3VsZCBlYXJuIEVYUCBkb3VibGUgdGltZXMgd2l0aGluIDUgbWludXRlcy5cIixcbiAgICAgICAgdXBkYXRlOiBcIk5ldyB2ZXJzaW9uIGhhcyBiZWVuIGRldGVjdGVkLiBGb3IgYSBiZXR0ZXIgZ2FtZSBleHBlcmllbmNlLHBsZWFzZSB1cGdyYWRlIHRvIHRoZSBsYXRlc3QgdmVyc2lvbi5cIixcbiAgICAgICAgZXJyb3JDb3VudERvd246IFwiVGhlcmUgaXMgYW4gZXJyb3IgYWJvdXQgY291bnRkb3duLiBUaGUgdGltZSBpcyBiZWluZyB1cGRhdGVkIGZvciB5b3UuXCIsXG4gICAgICAgIGNvdW50RG93bjogXCJSZW1vdmUgY291bnRkb3duLGNvbGxlY3QgZnJlZSBjb2lucyBpbW1lZGlhdGVseSFcIixcbiAgICAgICAgbm9BZENvdW50OiBcIlRoZXJlIGlzIG5vIEFEcyBub3csYW5kIHRoZXNlIHdpbGwgYXJyaXZlIGxhdGVyIGluXCIsXG4gICAgICAgIGFkU2hvdzogXCJQbGVhc2UgdGFrZSB5b3VyIGdpZnQhXCIsXG4gICAgICAgIGFkTG9hZEZhaWw6IFwiRmFpbGVkIHRvIG9idGFpbiBBRHMuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgICAgIGNvaW5Ob3RFbm91Z2g6IFwiY29pbiBOb3QgRW5vdWdoXCIsXG4gICAgICAgIGhlYWRDaGFuZ2VOYW1lVGlwT25lOiBcIlRoZSBuYW1lIGlzIGxpbWl0ZWQgdG8gNC0xNiBjaGFyYWN0ZXJzLiBQbGVhc2UgZW50ZXIgYWdhaW4uXCIsXG4gICAgICAgIGhlYWRDaGFuZ2VOYW1lVGlwVHdvOiBcIk5vIGNoYXJhY3RlcnMgb3RoZXIgdGhhbiB1cHBlciBhbmQgbG93ZXIgY2FzZSBvciBudW1iZXJzLlwiLFxuICAgICAgICBoZWFkQ2hhbmdlTmFtZVRpcFRocmVlOiBcIlRoZXJlIGFyZSBzZW5zaXRpdmUgd29yZHMgaW4geW91ciBuYW1lLlwiLFxuICAgIH07XG4gICAgc3RhdGljIG1QbGF5ZXJNb2RlbDogYW55O1xuICAgIHN0YXRpYyBVbml0aWQ6IGFueTtcbiAgICBzdGF0aWMgQWNjb3VudDogYW55O1xuICAgIHN0YXRpYyBlbnRlclJvb21EYXRhOiBhbnk7XG4gICAgc3RhdGljIGVudGVyVGFibGVEYXRhOiBhbnk7XG4gICAgc3RhdGljIGdhbWVUYWJsZURhdGE6IGFueTtcbiAgICBzdGF0aWMgbGV2ZWxpZDogYW55O1xuICAgIHN0YXRpYyB0YWJsZWlkOiBhbnk7XG4gICAgc3RhdGljIGN1cnJlbnRHYW1lSWQ6IGFueTtcbiAgICBzdGF0aWMgY3VycmVudGxldmVsaWQ6IGFueTtcbiAgICAvKiroqp7oqIDpoZ7lnotcbiAgICAgKiAx57mB6auU5Lit5paHICAy57Ch6auU5Lit5paHICAz6Iux6KqeICA05pel6KqeXG4gICAgICovXG4gICAgc3RhdGljIGxhbmd1YWdlVHlwZTogbnVtYmVyO1xufVxuIl19
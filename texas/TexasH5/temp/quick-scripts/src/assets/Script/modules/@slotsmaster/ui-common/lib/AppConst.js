"use strict";
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
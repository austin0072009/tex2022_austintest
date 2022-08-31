"use strict";
cc._RF.push(module, '7315cHhxHZHALawpPNhw62b', 'HttpApi');
// Script/modules/@slotsmaster/ui-common/lib/HttpApi.ts

"use strict";
/*
 * @Author: 田鑫
 * @Date: 2020-04-02 13:20:33
 * @Version: CocosCreator V2.2.2
 * @Description: http api
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http_GetRewardId = exports.Http_PostCollectReward = exports.Http_GetBalloonAd = exports.Http_GetNotice = exports.Http_GetCard = exports.Http_GetRedeem = exports.Http_PostUserName = exports.Http_PostChangeHead = exports.Http_GetUserInfo = exports.Http_GetVerifyPay = exports.Http_GetOrder = exports.Http_GetContactUS = exports.Http_GetSafeBank = exports.Http_GetDailyBonusMsg = exports.Http_GetMissionMsg = exports.Http_GetMissionReward = exports.Http_GetMailReward = exports.Http_ReadMail = exports.Http_GetInBoxMsg = exports.Http_GetAchievementReward = exports.Http_GetAchievement = exports.Http_GetHeadAvatar = exports.Http_CreatForm = exports.Http_GetShop = exports.Http_GetVip = exports.Http_GetPig = exports.Http_GetDeal = exports.Http_GetVersion = exports.Http_GetWsJWT = exports.Http_RefreshHall = exports.Http_CheckRomm = exports.Http_AppleRoom = exports.Http_EnterHall = exports.Http_Login = void 0;
var Http_1 = require("../../../@mogafa/utils/lib/Http");
//* 登录
exports.Http_Login = "/api/thirdParty/bind";
//* 进入大厅
exports.Http_EnterHall = "/api/hall/info";
//* 申请房间
exports.Http_AppleRoom = "/api/room/application/";
//* 查询房间存在
exports.Http_CheckRomm = "/api/room/query/";
//* 大厅刷新
exports.Http_RefreshHall = "/api/hall/refresh";
//* 获取WSJwt
exports.Http_GetWsJWT = "/api/token/wsJwt";
//* 获取版本号
exports.Http_GetVersion = "/api/config/version";
//* 获取deal
exports.Http_GetDeal = "/api/hall/deal/";
//* 获取小猪
exports.Http_GetPig = "/api/order/pigBank";
//* 获取小猪
exports.Http_GetVip = "/api/user/vip";
//* 获取商城
exports.Http_GetShop = "/api/order/coinRecharge";
//创建订单
exports.Http_CreatForm = "/api/order/create";
//获取头像列表
exports.Http_GetHeadAvatar = "/api/order/heads";
//获取成就列表
exports.Http_GetAchievement = "/api/userTask/achievements";
//获取成就奖励
exports.Http_GetAchievementReward = "/api/userTask/achievements/awards/";
//获取邮件列表
exports.Http_GetInBoxMsg = "/api/user/mail/inbox";
//阅读邮件
exports.Http_ReadMail = "/api/user/mail/read/";
//获取邮件附件
exports.Http_GetMailReward = "/api/user/mail/collect/";
//获取任务奖励
exports.Http_GetMissionReward = "/api/userTask/dailyTask/awards";
//获取任务列表
exports.Http_GetMissionMsg = "/api/userTask/tasks";
//获取签到列表
exports.Http_GetDailyBonusMsg = "/api/user/signInAward";
//获取保险箱
exports.Http_GetSafeBank = "/api/user/safe";
//获取联系我们信息
exports.Http_GetContactUS = "/api/hall/contactUsInfo";
//获取订单
exports.Http_GetOrder = "/api/order/create";
//支付效验
exports.Http_GetVerifyPay = "/api/order/verifyPay";
//获取用户信息
exports.Http_GetUserInfo = "/api/user/information";
//获取卡组
exports.Http_PostChangeHead = "/api/user/head";
//改名
exports.Http_PostUserName = "/api/user/name";
//获取兑换
exports.Http_GetRedeem = "/api/user/redeemList";
//获取卡组
exports.Http_GetCard = "/api/user/cards";
//获取跑马灯
exports.Http_GetNotice = "/api/user/notices";
//获取飞机广告奖励
exports.Http_GetBalloonAd = "/api/hall/balloonAd";
//获取广告奖励
exports.Http_PostCollectReward = "/api/user/awardCollect/";
//获取奖励id
exports.Http_GetRewardId = "/api/user/awardCollect/free";
var HttpApi = /** @class */ (function () {
    function HttpApi() {
    }
    Object.defineProperty(HttpApi, "http", {
        get: function () {
            if (!this._http) {
                this._http = new Http_1.default();
            }
            return this._http;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HttpApi, "server", {
        get: function () {
            return this._server;
        },
        set: function (value) {
            this._server = value;
        },
        enumerable: false,
        configurable: true
    });
    return HttpApi;
}());
exports.default = HttpApi;

cc._RF.pop();
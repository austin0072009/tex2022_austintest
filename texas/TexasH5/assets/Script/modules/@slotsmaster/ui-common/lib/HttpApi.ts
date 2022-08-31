/*
 * @Author: 田鑫
 * @Date: 2020-04-02 13:20:33
 * @Version: CocosCreator V2.2.2
 * @Description: http api
 */

import Http from "../../../@mogafa/utils/lib/Http";


//* 登录
export const Http_Login = "/api/thirdParty/bind";

//* 进入大厅
export const Http_EnterHall = "/api/hall/info";

//* 申请房间
export const Http_AppleRoom = "/api/room/application/";

//* 查询房间存在
export const Http_CheckRomm = "/api/room/query/";

//* 大厅刷新
export const Http_RefreshHall = "/api/hall/refresh";

//* 获取WSJwt
export const Http_GetWsJWT = "/api/token/wsJwt";

//* 获取版本号
export const Http_GetVersion = "/api/config/version";

//* 获取deal
export const Http_GetDeal = "/api/hall/deal/";

//* 获取小猪
export const Http_GetPig = "/api/order/pigBank";

//* 获取小猪
export const Http_GetVip = "/api/user/vip";

//* 获取商城
export const Http_GetShop = "/api/order/coinRecharge";

//创建订单
export const Http_CreatForm = "/api/order/create";

//获取头像列表
export const Http_GetHeadAvatar = "/api/order/heads";

//获取成就列表
export const Http_GetAchievement = "/api/userTask/achievements";

//获取成就奖励
export const Http_GetAchievementReward = "/api/userTask/achievements/awards/";

//获取邮件列表
export const Http_GetInBoxMsg = "/api/user/mail/inbox";

//阅读邮件
export const Http_ReadMail = "/api/user/mail/read/";

//获取邮件附件
export const Http_GetMailReward = "/api/user/mail/collect/";

//获取任务奖励
export const Http_GetMissionReward = "/api/userTask/dailyTask/awards";

//获取任务列表
export const Http_GetMissionMsg = "/api/userTask/tasks";

//获取签到列表
export const Http_GetDailyBonusMsg = "/api/user/signInAward";

//获取保险箱
export const Http_GetSafeBank = "/api/user/safe";

//获取联系我们信息
export const Http_GetContactUS = "/api/hall/contactUsInfo";

//获取订单
export const Http_GetOrder = "/api/order/create";

//支付效验
export const Http_GetVerifyPay = "/api/order/verifyPay";

//获取用户信息
export const Http_GetUserInfo = "/api/user/information";

//获取卡组
export const Http_PostChangeHead = "/api/user/head";

//改名
export const Http_PostUserName = "/api/user/name";

//获取兑换
export const Http_GetRedeem = "/api/user/redeemList";

//获取卡组
export const Http_GetCard = "/api/user/cards";

//获取跑马灯
export const Http_GetNotice = "/api/user/notices";

//获取飞机广告奖励
export const Http_GetBalloonAd = "/api/hall/balloonAd";

//获取广告奖励
export const Http_PostCollectReward = "/api/user/awardCollect/";

//获取奖励id
export const Http_GetRewardId = "/api/user/awardCollect/free";

export default class HttpApi {
    private static _http: Http;
    public static get http(): Http {
        if (!this._http) {
            this._http = new Http();
        }
        return this._http;
    }
    private static _server: string;
    public static set server(value: string) {
        this._server = value;
    }
    public static get server(): string {
        return this._server;
    }

}

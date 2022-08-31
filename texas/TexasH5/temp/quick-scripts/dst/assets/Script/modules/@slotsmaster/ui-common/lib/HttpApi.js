
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/HttpApi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxIdHRwQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRzs7O0FBRUgsd0RBQW1EO0FBR25ELE1BQU07QUFDTyxRQUFBLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQztBQUVqRCxRQUFRO0FBQ0ssUUFBQSxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7QUFFL0MsUUFBUTtBQUNLLFFBQUEsY0FBYyxHQUFHLHdCQUF3QixDQUFDO0FBRXZELFVBQVU7QUFDRyxRQUFBLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQztBQUVqRCxRQUFRO0FBQ0ssUUFBQSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQztBQUVwRCxXQUFXO0FBQ0UsUUFBQSxhQUFhLEdBQUcsa0JBQWtCLENBQUM7QUFFaEQsU0FBUztBQUNJLFFBQUEsZUFBZSxHQUFHLHFCQUFxQixDQUFDO0FBRXJELFVBQVU7QUFDRyxRQUFBLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztBQUU5QyxRQUFRO0FBQ0ssUUFBQSxXQUFXLEdBQUcsb0JBQW9CLENBQUM7QUFFaEQsUUFBUTtBQUNLLFFBQUEsV0FBVyxHQUFHLGVBQWUsQ0FBQztBQUUzQyxRQUFRO0FBQ0ssUUFBQSxZQUFZLEdBQUcseUJBQXlCLENBQUM7QUFFdEQsTUFBTTtBQUNPLFFBQUEsY0FBYyxHQUFHLG1CQUFtQixDQUFDO0FBRWxELFFBQVE7QUFDSyxRQUFBLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0FBRXJELFFBQVE7QUFDSyxRQUFBLG1CQUFtQixHQUFHLDRCQUE0QixDQUFDO0FBRWhFLFFBQVE7QUFDSyxRQUFBLHlCQUF5QixHQUFHLG9DQUFvQyxDQUFDO0FBRTlFLFFBQVE7QUFDSyxRQUFBLGdCQUFnQixHQUFHLHNCQUFzQixDQUFDO0FBRXZELE1BQU07QUFDTyxRQUFBLGFBQWEsR0FBRyxzQkFBc0IsQ0FBQztBQUVwRCxRQUFRO0FBQ0ssUUFBQSxrQkFBa0IsR0FBRyx5QkFBeUIsQ0FBQztBQUU1RCxRQUFRO0FBQ0ssUUFBQSxxQkFBcUIsR0FBRyxnQ0FBZ0MsQ0FBQztBQUV0RSxRQUFRO0FBQ0ssUUFBQSxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQztBQUV4RCxRQUFRO0FBQ0ssUUFBQSxxQkFBcUIsR0FBRyx1QkFBdUIsQ0FBQztBQUU3RCxPQUFPO0FBQ00sUUFBQSxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUVqRCxVQUFVO0FBQ0csUUFBQSxpQkFBaUIsR0FBRyx5QkFBeUIsQ0FBQztBQUUzRCxNQUFNO0FBQ08sUUFBQSxhQUFhLEdBQUcsbUJBQW1CLENBQUM7QUFFakQsTUFBTTtBQUNPLFFBQUEsaUJBQWlCLEdBQUcsc0JBQXNCLENBQUM7QUFFeEQsUUFBUTtBQUNLLFFBQUEsZ0JBQWdCLEdBQUcsdUJBQXVCLENBQUM7QUFFeEQsTUFBTTtBQUNPLFFBQUEsbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUM7QUFFcEQsSUFBSTtBQUNTLFFBQUEsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7QUFFbEQsTUFBTTtBQUNPLFFBQUEsY0FBYyxHQUFHLHNCQUFzQixDQUFDO0FBRXJELE1BQU07QUFDTyxRQUFBLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPO0FBQ00sUUFBQSxjQUFjLEdBQUcsbUJBQW1CLENBQUM7QUFFbEQsVUFBVTtBQUNHLFFBQUEsaUJBQWlCLEdBQUcscUJBQXFCLENBQUM7QUFFdkQsUUFBUTtBQUNLLFFBQUEsc0JBQXNCLEdBQUcseUJBQXlCLENBQUM7QUFFaEUsUUFBUTtBQUNLLFFBQUEsZ0JBQWdCLEdBQUcsNkJBQTZCLENBQUM7QUFFOUQ7SUFBQTtJQWdCQSxDQUFDO0lBZEcsc0JBQWtCLGVBQUk7YUFBdEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksY0FBSSxFQUFFLENBQUM7YUFDM0I7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBa0IsaUJBQU07YUFHeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUxELFVBQXlCLEtBQWE7WUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFLTCxjQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiDnlLDpkatcbiAqIEBEYXRlOiAyMDIwLTA0LTAyIDEzOjIwOjMzXG4gKiBAVmVyc2lvbjogQ29jb3NDcmVhdG9yIFYyLjIuMlxuICogQERlc2NyaXB0aW9uOiBodHRwIGFwaVxuICovXG5cbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi9AbW9nYWZhL3V0aWxzL2xpYi9IdHRwXCI7XG5cblxuLy8qIOeZu+W9lVxuZXhwb3J0IGNvbnN0IEh0dHBfTG9naW4gPSBcIi9hcGkvdGhpcmRQYXJ0eS9iaW5kXCI7XG5cbi8vKiDov5vlhaXlpKfljoVcbmV4cG9ydCBjb25zdCBIdHRwX0VudGVySGFsbCA9IFwiL2FwaS9oYWxsL2luZm9cIjtcblxuLy8qIOeUs+ivt+aIv+mXtFxuZXhwb3J0IGNvbnN0IEh0dHBfQXBwbGVSb29tID0gXCIvYXBpL3Jvb20vYXBwbGljYXRpb24vXCI7XG5cbi8vKiDmn6Xor6LmiL/pl7TlrZjlnKhcbmV4cG9ydCBjb25zdCBIdHRwX0NoZWNrUm9tbSA9IFwiL2FwaS9yb29tL3F1ZXJ5L1wiO1xuXG4vLyog5aSn5Y6F5Yi35pawXG5leHBvcnQgY29uc3QgSHR0cF9SZWZyZXNoSGFsbCA9IFwiL2FwaS9oYWxsL3JlZnJlc2hcIjtcblxuLy8qIOiOt+WPlldTSnd0XG5leHBvcnQgY29uc3QgSHR0cF9HZXRXc0pXVCA9IFwiL2FwaS90b2tlbi93c0p3dFwiO1xuXG4vLyog6I635Y+W54mI5pys5Y+3XG5leHBvcnQgY29uc3QgSHR0cF9HZXRWZXJzaW9uID0gXCIvYXBpL2NvbmZpZy92ZXJzaW9uXCI7XG5cbi8vKiDojrflj5ZkZWFsXG5leHBvcnQgY29uc3QgSHR0cF9HZXREZWFsID0gXCIvYXBpL2hhbGwvZGVhbC9cIjtcblxuLy8qIOiOt+WPluWwj+eMqlxuZXhwb3J0IGNvbnN0IEh0dHBfR2V0UGlnID0gXCIvYXBpL29yZGVyL3BpZ0JhbmtcIjtcblxuLy8qIOiOt+WPluWwj+eMqlxuZXhwb3J0IGNvbnN0IEh0dHBfR2V0VmlwID0gXCIvYXBpL3VzZXIvdmlwXCI7XG5cbi8vKiDojrflj5bllYbln45cbmV4cG9ydCBjb25zdCBIdHRwX0dldFNob3AgPSBcIi9hcGkvb3JkZXIvY29pblJlY2hhcmdlXCI7XG5cbi8v5Yib5bu66K6i5Y2VXG5leHBvcnQgY29uc3QgSHR0cF9DcmVhdEZvcm0gPSBcIi9hcGkvb3JkZXIvY3JlYXRlXCI7XG5cbi8v6I635Y+W5aS05YOP5YiX6KGoXG5leHBvcnQgY29uc3QgSHR0cF9HZXRIZWFkQXZhdGFyID0gXCIvYXBpL29yZGVyL2hlYWRzXCI7XG5cbi8v6I635Y+W5oiQ5bCx5YiX6KGoXG5leHBvcnQgY29uc3QgSHR0cF9HZXRBY2hpZXZlbWVudCA9IFwiL2FwaS91c2VyVGFzay9hY2hpZXZlbWVudHNcIjtcblxuLy/ojrflj5bmiJDlsLHlpZblirFcbmV4cG9ydCBjb25zdCBIdHRwX0dldEFjaGlldmVtZW50UmV3YXJkID0gXCIvYXBpL3VzZXJUYXNrL2FjaGlldmVtZW50cy9hd2FyZHMvXCI7XG5cbi8v6I635Y+W6YKu5Lu25YiX6KGoXG5leHBvcnQgY29uc3QgSHR0cF9HZXRJbkJveE1zZyA9IFwiL2FwaS91c2VyL21haWwvaW5ib3hcIjtcblxuLy/pmIXor7vpgq7ku7ZcbmV4cG9ydCBjb25zdCBIdHRwX1JlYWRNYWlsID0gXCIvYXBpL3VzZXIvbWFpbC9yZWFkL1wiO1xuXG4vL+iOt+WPlumCruS7tumZhOS7tlxuZXhwb3J0IGNvbnN0IEh0dHBfR2V0TWFpbFJld2FyZCA9IFwiL2FwaS91c2VyL21haWwvY29sbGVjdC9cIjtcblxuLy/ojrflj5bku7vliqHlpZblirFcbmV4cG9ydCBjb25zdCBIdHRwX0dldE1pc3Npb25SZXdhcmQgPSBcIi9hcGkvdXNlclRhc2svZGFpbHlUYXNrL2F3YXJkc1wiO1xuXG4vL+iOt+WPluS7u+WKoeWIl+ihqFxuZXhwb3J0IGNvbnN0IEh0dHBfR2V0TWlzc2lvbk1zZyA9IFwiL2FwaS91c2VyVGFzay90YXNrc1wiO1xuXG4vL+iOt+WPluetvuWIsOWIl+ihqFxuZXhwb3J0IGNvbnN0IEh0dHBfR2V0RGFpbHlCb251c01zZyA9IFwiL2FwaS91c2VyL3NpZ25JbkF3YXJkXCI7XG5cbi8v6I635Y+W5L+d6Zmp566xXG5leHBvcnQgY29uc3QgSHR0cF9HZXRTYWZlQmFuayA9IFwiL2FwaS91c2VyL3NhZmVcIjtcblxuLy/ojrflj5bogZTns7vmiJHku6zkv6Hmga9cbmV4cG9ydCBjb25zdCBIdHRwX0dldENvbnRhY3RVUyA9IFwiL2FwaS9oYWxsL2NvbnRhY3RVc0luZm9cIjtcblxuLy/ojrflj5borqLljZVcbmV4cG9ydCBjb25zdCBIdHRwX0dldE9yZGVyID0gXCIvYXBpL29yZGVyL2NyZWF0ZVwiO1xuXG4vL+aUr+S7mOaViOmqjFxuZXhwb3J0IGNvbnN0IEh0dHBfR2V0VmVyaWZ5UGF5ID0gXCIvYXBpL29yZGVyL3ZlcmlmeVBheVwiO1xuXG4vL+iOt+WPlueUqOaIt+S/oeaBr1xuZXhwb3J0IGNvbnN0IEh0dHBfR2V0VXNlckluZm8gPSBcIi9hcGkvdXNlci9pbmZvcm1hdGlvblwiO1xuXG4vL+iOt+WPluWNoee7hFxuZXhwb3J0IGNvbnN0IEh0dHBfUG9zdENoYW5nZUhlYWQgPSBcIi9hcGkvdXNlci9oZWFkXCI7XG5cbi8v5pS55ZCNXG5leHBvcnQgY29uc3QgSHR0cF9Qb3N0VXNlck5hbWUgPSBcIi9hcGkvdXNlci9uYW1lXCI7XG5cbi8v6I635Y+W5YWR5o2iXG5leHBvcnQgY29uc3QgSHR0cF9HZXRSZWRlZW0gPSBcIi9hcGkvdXNlci9yZWRlZW1MaXN0XCI7XG5cbi8v6I635Y+W5Y2h57uEXG5leHBvcnQgY29uc3QgSHR0cF9HZXRDYXJkID0gXCIvYXBpL3VzZXIvY2FyZHNcIjtcblxuLy/ojrflj5bot5Hpqaznga9cbmV4cG9ydCBjb25zdCBIdHRwX0dldE5vdGljZSA9IFwiL2FwaS91c2VyL25vdGljZXNcIjtcblxuLy/ojrflj5bpo57mnLrlub/lkYrlpZblirFcbmV4cG9ydCBjb25zdCBIdHRwX0dldEJhbGxvb25BZCA9IFwiL2FwaS9oYWxsL2JhbGxvb25BZFwiO1xuXG4vL+iOt+WPluW5v+WRiuWlluWKsVxuZXhwb3J0IGNvbnN0IEh0dHBfUG9zdENvbGxlY3RSZXdhcmQgPSBcIi9hcGkvdXNlci9hd2FyZENvbGxlY3QvXCI7XG5cbi8v6I635Y+W5aWW5YqxaWRcbmV4cG9ydCBjb25zdCBIdHRwX0dldFJld2FyZElkID0gXCIvYXBpL3VzZXIvYXdhcmRDb2xsZWN0L2ZyZWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cEFwaSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2h0dHA6IEh0dHA7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgaHR0cCgpOiBIdHRwIHtcbiAgICAgICAgaWYgKCF0aGlzLl9odHRwKSB7XG4gICAgICAgICAgICB0aGlzLl9odHRwID0gbmV3IEh0dHAoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cDtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NlcnZlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0IHNlcnZlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3NlcnZlciA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldCBzZXJ2ZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlcjtcbiAgICB9XG5cbn1cbiJdfQ==
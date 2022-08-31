
using ETModel.Framework.Game.Lang;

namespace ETModel.Script.CsScript.Action
{
    public class SimplifiedLanguage : Language
    {
        /// <summary>
        /// Sign error
        /// </summary>
        public new string SignError = "验证签名出错";

        /// <summary>
        /// validate error
        /// </summary>
        public new string ValidateError = "请求的参数无效";
        /// <summary>
        /// The system is busy
        /// </summary>
        public new string ServerBusy = "服务器繁忙";

        /// <summary>
        /// param error
        /// </summary>
        public new string UrlElement = "缺少请求参数-";

        /// <summary>
        /// 参数名:{0}不存在
        /// </summary>
        public new string UrlNoParam = "参数名:{0}是必须的";
        /// <summary>
        /// 参数名:{0}超出范围[{1}-{2}]
        /// </summary>
        public new string UrlParamOutRange = "参数:{0}超出范围[{1} - {2}]";

        /// <summary>
        /// 服务器正在维护
        /// </summary>
        public new string ServerMaintain = "服务器正在维护";

        /// <summary>
        /// 服务器正在重启中，请稍候...
        /// </summary>
        public new string ServerLoading = "服务器正在重启中，请稍候...";

        /// <summary>
        /// 请求超时
        /// </summary>
        public new string RequestTimeout = "请求超时";
        /// <summary>
        /// 您输入的账号或密码不正确
        /// </summary>
        public new string PasswordError = "您输入的账号或密码不正确";

        /// <summary>
        /// 加载数据失败
        /// </summary>
        public new string LoadDataError = "加载数据失败";

        /// <summary>
        /// 该账号已被封禁
        /// </summary>
        public new string AcountIsLocked = "该账号已被封禁";

        /// <summary>
        /// 您的账号未登录或已过期
        /// </summary>
        public new string AcountNoLogin = "您的账号未登录或已过期";

        /// <summary>
        /// 您的账号已在其它地方登录
        /// </summary>
        public new string AcountLogined = "您的账号已在其它地方登录";

        /// <summary>
        /// 充值失败
        /// </summary>
        public new string AppStorePayError = "充值失败";
        /// <summary>
        /// 获取受权失败
        /// </summary>
        public new string GetAccessFailure = "获取受权失败";

        public string TexasGame = "德州";

        public string openTableXh = "开房消耗";


        public string applydelay = "申请延时";


        public string welcome = "叁叁玖欢迎您! 亲爱的玩家欢迎到来，祝你游戏愉快!";


        public string withIp = "有两人在同一IP";


        public string bigwinMsg = "玩家{0},在{1}赢了{2}金币！";

        /// <summary>
        /// 红包领取 的type GetAgentSendGoldLog
        /// </summary>
        public string RedEnv = "领取";

        public string gufenProfit = "股份收益";

        public string dividProfit = "红利收益";

        /// <summary>
        /// 领取红包时间提示
        /// </summary>
        public string redReciveMsg = "领取红包时间在:{0}至{1}哦~";

        public string luckyRed = "幸运红包";

        public string transportRed = "转运红包";


        public string GameNitice = "本游戏用于比赛，请勿用于赌博，发现立即举报";

        public string activiteOver = "活动已经过期!";

        public string activiteOpen = "活动未开启!";

        public string piMsg = "皮奖励";

        public ChangeText changeType = new ChangeText();
         

        /// <summary>
        /// 
        /// </summary>
        public static  int Success = 1;
        public static int Fail = 0;
    }
}
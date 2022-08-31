
using System;
using ETModel.Framework.Game.Lang;

namespace ETModel.Framework.Game.Lang
{
    /// <summary>
    /// 
    /// </summary>
    [Obsolete]
    public class BaseZHLanguage : ILanguage
    {
		/// <summary>
		/// 
		/// </summary>
		/// <value>The error code.</value>
        public virtual int ErrorCode { get { return 10000; } }
		/// <summary>
		/// 
		/// </summary>
		/// <value>The timeout code.</value>
        public virtual int TimeoutCode { get { return 10001; } }
		/// <summary>
		/// 踢出
		/// </summary>
		/// <value>The kicked out code.</value>
        public virtual int KickedOutCode { get { return 10002; } }
		/// <summary>
		/// 验证参数错误代码
		/// </summary>
		/// <value>The validate code.</value>
        public int ValidateCode { get { return 10003; } }
		/// <summary>
		/// 验证参数错误提示
		/// </summary>
		/// <value>The validate error.</value>
        public virtual string ValidateError { get { return "文字中包含不当内容，请重新输入!"; } }
		/// <summary>
		/// 系统繁忙中
		/// </summary>
		/// <value>The server busy.</value>
        public virtual string ServerBusy { get { return "系统繁忙中!"; } }
		/// <summary>
		/// 请求参数错误
		/// </summary>
		/// <value>The URL element.</value>
        public virtual string UrlElement { get { return "请求参数错误!"; } }
		/// <summary>
		/// 参数名:{0}不存在
		/// </summary>
		/// <value>The URL no parameter.</value>
        public virtual string UrlNoParam { get { return "参数名:{0}不存在"; } }
		/// <summary>
		/// 参数名:{0}超出范围[{1}-{2}]
		/// </summary>
		/// <value>The URL parameter out range.</value>
        public virtual string UrlParamOutRange { get { return "参数名:{0}超出范围[{1}-{2}]"; } }
		/// <summary>
		/// 请求超时
		/// </summary>
		/// <value>The request timeout.</value>
        public string RequestTimeout { get { return "请求响应超时！"; } }
		/// <summary>
		/// 服务器正在维护
		/// </summary>
		/// <value>The server maintain.</value>
        public string ServerMaintain { get { return "服务器正在维护！"; } }
		/// <summary>
		/// 服务器正在重启中，请稍候...
		/// </summary>
		/// <value>The server loading.</value>
        public virtual string ServerLoading { get { return "服务器正在重启中，请稍后..."; } }
		/// <summary>
		/// 您输入的账号或密码不正确
		/// </summary>
		/// <value>The password error.</value>
        public string PasswordError { get { return "您输入的账号或密码不正确!"; } }
		/// <summary>
		/// 加载数据失败
		/// </summary>
		/// <value>The load data error.</value>
        public string LoadDataError { get { return "数据加载失败!"; } }
		/// <summary>
		/// 该账号已被封禁
		/// </summary>
		/// <value>The acount is locked.</value>
        public string AcountIsLocked { get { return "该账号已被封禁，登录失败！"; } }
		/// <summary>
		/// 您的账号未登录或已过期
		/// </summary>
		/// <value>The acount no login.</value>
        public string AcountNoLogin { get { return "您的账号未登录或已过期！"; } }
		/// <summary>
		/// 您的账号已在其它地方登录
		/// </summary>
		/// <value>The acount logined.</value>
        public string AcountLogined { get { return "您的账号已在其它地方登录！"; } }
		/// <summary>
		/// 充值失败
		/// </summary>
		/// <value>The app store pay error.</value>
        public string AppStorePayError { get { return "充值失败!"; } }
		/// <summary>
		/// 获取受权失败
		/// </summary>
		/// <value>The get access failure.</value>
        public string GetAccessFailure
        {
            get { return "获取受权失败！"; }
        }

        public string TexasGame = "德州";

        public string openTableXh = "开房消耗";


        public string applydelay = "申请延时";


        public string welcome = "新世界欢迎您! 亲爱的玩家欢迎到来，祝你游戏愉快!";


        public string withIp = "有两人在同一IP";
        /// <summary>
        /// 
        /// </summary>

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

        public ChangeType changeType = new ChangeType();

        public TexasText TexaText = new TexasText();

        /// <summary>
        /// 
        /// </summary>
        public static int Success = 1;
        public static int Fail = 0;
    }

    public class WhirlText
    {
        public string text1 = "没毛病,干就完了,奥力给.";

        public string text2 = "搞紧,搞紧,你在吃蝙蝠吗？紧到吞不下.";

        public string text3 = "冲撒.上.";

        public string text4 = "我也想低调,但是实力不允许撒.";

        public string text5 = "日月同生,天地人和,来张主牌,急急如律令.";
        public string text6 = "莫管我,输浑了.";
        public string text7 = "干干巴巴,麻麻赖赖,盘他.";
        public string text8 = "东风吹,战鼓擂,现今扯旋谁怕谁.";
        public string text9 = "卧槽,无情啊.";
        public string text10 = "先赢的是纸,后赢的才是金币.";

    }

    public class TexasText
    {
        public string text1 = "少一些套路，多一些真诚。";

        public string text2 = "我不偷鸡，但绝对不要偷我鸡。";

        public string text3 = "快点吧，我等的花儿都谢了。";

        public string text4 = "软的怕硬的，硬的怕不要命的。";

        public string text5 = "自己讲的故事，含泪也要演完。";
        public string text6 = "一次次的弃牌，只是为了下一次的Allin。";
        public string text7 = "你的水平与你扔掉的AA的次数成正比。";
        public string text8 = "撑死胆大的，饿死胆小的。";
        public string text9 = "这一幕好像似曾相识。";

        public string text10 = "论成败人生豪迈，大不了从头再来。";

    }



    public class ChangeType
    {
        public string fjjs = "FJ结算";

        public string lqyj = "领取佣金";

        public string jqrcz = "机器人充值";
        public string yjjb = "邮件金币";

        public string yhzsjb = "用户赠送金币";

        public string zsjb = "赠送金币";
        public string cz = "充值";

        public string tx = "backgold";


        public string qp = "切牌";
        public string slw = "送礼物";
        public string ckyp = "查看余牌";

        public string qzxp = "强制秀牌";
        public string pjxq = "牌局详情";

        public string pjss = "牌局税收";
        public string tpcf = "逃跑惩罚";
        public string sjfl = "输家返利";

        public string fj = "FJ：";

        public string hbjl = "红包奖励";
        public string fjdr = "FJ带入";
        public string drhh = "带入返还";


        public string ftm = "发弹幕";
        public string kfxh = "开房消耗";
        public string bxfc = "保险分成";
        public string tfkl = "退房扣利";

        public string thhl = "退还红利";
        public string mjjs = "麻将结算";

    }
}

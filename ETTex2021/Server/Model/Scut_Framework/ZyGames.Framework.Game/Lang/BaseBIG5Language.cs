
using System;

namespace ETModel.Framework.Game.Lang
{
    /// <summary>
    /// 
    /// </summary>
    [Obsolete]
    public class BaseBIG5Language : ILanguage
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
		/// <value>The validate code.</value>/
        public int ValidateCode { get { return 10003; } }
		/// <summary>
		/// 验证参数错误提示
		/// </summary>
		/// <value>The validate error.</value>
        public virtual string ValidateError { get { return "文字中包含不當內容，請重新輸入!"; } }
		/// <summary>
		/// 系统繁忙中
		/// </summary>
		/// <value>The server busy.</value>
        public virtual string ServerBusy { get { return "系統繁忙中!"; } }
		/// <summary>
		/// 请求参数错误
		/// </summary>
		/// <value>The URL element.</value>
        public virtual string UrlElement { get { return "請求參數錯誤!"; } }
		/// <summary>
		/// 参数名:{0}不存在
		/// </summary>
		/// <value>The URL no parameter.</value>
        public virtual string UrlNoParam { get { return "參數名:{0}不存在"; } }
		/// <summary>
		/// 参数名:{0}超出范围[{1}-{2}]
		/// </summary>
		/// <value>The URL parameter out range.</value>
        public virtual string UrlParamOutRange { get { return "參數名:{0}超出範圍[{1}-{2}]"; } }
		/// <summary>
		/// 服务器正在维护
		/// </summary>
		/// <value>The server maintain.</value>
        public string ServerMaintain { get { return "服務器正在維護！"; } }
		/// <summary>
		/// 服务器正在重启中，请稍候...
		/// </summary>
		/// <value>The server loading.</value>
        public virtual string ServerLoading { get { return "服務器正在重啟中，請稍候..."; } }
		/// <summary>
		/// 请求超时
		/// </summary>
		/// <value>The request timeout.</value>
        public string RequestTimeout { get { return "請求響應超時！"; } }
		/// <summary>
		/// 您输入的账号或密码不正确
		/// </summary>
		/// <value>The password error.</value>
        public string PasswordError { get { return "您輸入的帳號或密碼不正確!"; } }
		/// <summary>
		/// 加载数据失败
		/// </summary>
		/// <value>The load data error.</value>
        public string LoadDataError { get { return "載入數據失敗!"; } }
		/// <summary>
		/// 该账号已被封禁
		/// </summary>
		/// <value>The acount is locked.</value>
        public string AcountIsLocked { get { return "該賬號已被封禁，登錄失敗！"; } }
		/// <summary>
		/// 您的账号未登录或已过期
		/// </summary>
		/// <value>The acount no login.</value>
        public string AcountNoLogin { get { return "您的賬號未登錄或已過期！"; } }
		/// <summary>
		/// 您的账号已在其它地方登录
		/// </summary>
		/// <value>The acount logined.</value>
        public string AcountLogined { get { return "您的賬號已在其它地方登錄！"; } }
	
		/// <summary>
		/// 获取受权失败
		/// </summary>
		/// <value>The get access failure.</value>
        public string GetAccessFailure
        {
            get { return "獲取受權失敗!"; }
        }


        public string TexasGame = "德州";

        public string openTableXh = "開房消耗";


        public string applydelay = "申請延時";


        public string welcome = "新世界歡迎您！親愛的玩家歡迎到來，祝你遊戲愉快！";


        public string withIp = "有兩人在同一IP";


        public string bigwinMsg = "玩家{0}，在{1}贏了{2}金幣！";

        /// <summary>
        /// 红包领取 的type GetAgentSendGoldLog
        /// </summary>
        public string RedEnv = "領取";

        public string gufenProfit = "股份收益";

        public string dividProfit = "紅利收益";

        /// <summary>
        /// 领取红包时间提示
        /// </summary>
        public string redReciveMsg = "領取紅包時間在：{0}至{1}哦~";

        public string luckyRed = "幸運紅包";

        public string transportRed = "轉運紅包";


        public string GameNitice = "本遊戲用於比賽，請勿用於賭博，發現立即舉報";

        public string activiteOver = "活動已經過期！";

        public string activiteOpen = "活動未開啟！";

        public string piMsg = "皮獎勵";

        public ChangeTypeBig changeType = new ChangeTypeBig();

        public TexasTextBig TexaText = new TexasTextBig();


    }


    public class WhirlTextBig
    {
        public string text1 = "沒毛病，幹就完了，奧力給.";

        public string text2 = "搞緊，搞緊，你在吃蝙蝠嗎？緊到吞不下.";

        public string text3 = "沖撒.上.";

        public string text4 = "我也想低調，但是實力不允許撒.";

        public string text5 = "日月同生，天地人和，來張主牌，急急如律令.";
        public string text6 = "莫管我，輸渾了.";
        public string text7 = "幹乾巴巴，麻麻賴賴，盤他.";
        public string text8 = "東風吹，戰鼓擂，現今扯旋誰怕誰.";
        public string text9 = "臥槽，無情啊.";
        public string text10 = "贏的是紙，後贏的才是錢.";

    }

    public class TexasTextBig
    {
        public string text1 = "少一些套路，多一些真誠。";

        public string text2 = "我不偷雞，但絕對不要偷我雞。";

        public string text3 = "快點吧，我等的花兒都謝。";

        public string text4 = "軟的怕硬的，硬的怕不要命的。";

        public string text5 = "自己講的故事，含淚也要演完。";
        public string text6 = "一次次的弃牌，只是為了下一次的Allin。";
        public string text7 = "你的水准與你扔掉的AA的次數成正比。";
        public string text8 = "撐死膽大的，餓死膽小的。";
        public string text9 = "這一幕好像似曾相識。";

        public string text10 = "論成敗人生豪邁，大不了從頭再來。";

    }



    public class ChangeTypeBig
    {
        public string fjjs = "房間結算";

        public string lqyj = "領取傭金";

        public string jqrcz = "機器人充值";
        public string yjjb = "郵件金幣";

        public string yhzsjb = "用戶贈送金幣";

        public string zsjb = "贈送金幣";
        public string cz = "提現";

        public string tx = "充值";


        public string qp = "切牌";
        public string slw = "送禮物";
        public string ckyp = "查看餘牌";

        public string qzxp = "強制秀牌";
        public string pjxq = "牌局詳情";

        public string pjss = "牌局稅收";
        public string tpcf = "逃跑懲罰";
        public string sjfl = "輸家返利";

        public string fj = "房間：";

        public string hbjl = "紅包獎勵";
        public string fjdr = "房間帶入";
        public string drhh = "帶入返還";


        public string ftm = "發彈幕";
        public string kfxh = "開房消耗";
        public string bxfc = "保險分成";
        public string tfkl = "退房扣利";

        public string thhl = "退還紅利";
        public string mjjs = "麻將結算";

    }
}
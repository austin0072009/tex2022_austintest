using Crazy2018_Sys_DBHelper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_Manage
{
    public class cs_base_gm
    {
        public string fn = "";
    }
    public class cs_sendemail_gm : cs_base_gm
    {
        /// <summary>
        /// 用户ID
        /// </summary>
        public int[] userids { get; set; }
        /// <summary>
        /// 金币数量
        /// </summary>
        public long gold { get; set; }
        /// <summary>
        /// 钻石数量
        /// </summary>
        public long diamond { get; set; }
        /// <summary>
        /// 标题
        /// </summary>
        public string _title { get; set; }
        /// <summary>
        /// 内容
        /// </summary>
        public string _content { get; set; }

    }
    /// <summary>
    /// 客户端发送信息基类
    /// </summary>
    public class cs_baseinfo_gm
    {
        /// <summary>
        /// 方法名称
        /// </summary>
        public string fn = "";
    }
    /// <summary>
    /// 客户端发送用户数据信息基类
    /// </summary>
    public class cs_basemsg_gm : cs_baseinfo_gm
    {
        public int gameid;
        public int userid;

        public int levelid;
        public int tableid;
    }
    /// <summary>
    /// 设置代理
    /// </summary>
    public class cs_setagent_ll_gm : cs_basemsg_gm
    {
        /// <summary>
        /// 代理级别 0、表示不是代理 1、代理等级1 2、代理等级2
        /// </summary>
        public int agentid;
    }
    /// <summary>
    /// 充值接口（客户端）
    /// </summary>
    public class cs_charge_gm : cs_basemsg_gm
    {
        /// <summary>
        /// 1、充值金币 2、砖石
        /// </summary>
        public int type;
        /// <summary>
        /// 数量
        /// </summary>
        public float money;
    }
    /// <summary>
    /// 锁定账号到制定时间
    /// </summary>
    public class cs_setlocktime_gm : cs_basemsg_gm
    {
        public string locktime;
    }
    /// <summary>
    /// 机器人设置
    /// </summary>
    public class cs_setrobot_gm : cs_basemsg_gm
    {
        public int isrobot;
        public int winpercent;
        public int robotlevel;
    }
    /// <summary>
    /// 设置用户静态描述字段
    /// </summary>
    public class cs_setuserdes_gm : cs_basemsg_gm
    {
        /// <summary>
        /// 微信用户名称
        /// </summary>
        public string webname;
        /// <summary>
        /// 头像地址
        /// </summary>
        public string headinfo;
        public string AgentId { get; set; }
    }
    /// <summary>
    /// 游戏场次信息
    /// </summary>
    public class cs_gameInfo : cs_base_gm
    {

        /// <summary>
        /// 游戏ID
        /// </summary>
        public int id;

        /// <summary>
        /// 游戏名称
        /// </summary>
        public string name = "";

        /// <summary>
        /// 游戏介绍
        /// </summary>
        public string gameIntroduce = "";

        /// <summary>
        /// 游戏介绍
        /// </summary>
        public string gameRule = "";

        /// <summary>
        /// 是否启用
        /// </summary>
        public int isEnable;

        /// <summary>
        /// 是否启用说明
        /// </summary>
        public string isEnableDesc = "";

        /// <summary>
        /// 是否删除
        /// </summary>
        public int deleteState;

        /// <summary>
        /// 修改人
        /// </summary>
        public string modifyUser = "";

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime modifyTime;
        /// <summary>
        /// 老ID
        /// </summary>
        public int oldid;
        public int Sort;
    }

    /// <summary>
    /// 游戏场次信息
    /// </summary>
    public class cs_tjackpot : cs_base_gm
    {
        /// <summary>
        /// 
        /// </summary>        
        public int Id;
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid;

        /// <summary>
        /// 当前奖池
        /// </summary>
        public int jackpot;

        /// <summary>
        /// 历史总押金
        /// </summary>
        public int historygambleall;

        /// <summary>
        /// 历史总收益
        /// </summary>
        public int income;

        /// <summary>
        /// 抽水
        /// </summary>
        public int pump;

        /// <summary>
        /// 放水
        /// </summary>
        public int waterproof;

        /// <summary>
        /// 是否启用
        /// </summary>
        public int isEnable;

        /// <summary>
        /// 是否启用说明
        /// </summary>
        public string isEnableDesc;

        /// <summary>
        /// 是否删除
        /// </summary>
        public int deleteState;

        /// <summary>
        /// 修改人
        /// </summary>
        public string modifyUser;
        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime modifyTime;
        /// <summary>
        /// 
        /// </summary>        
        public string Description;
        /// <summary>
        /// 税
        /// </summary>        
        public long rax;
        /// <summary>
        /// 彩金
        /// </summary>        
        public int handsel;
        /// <summary>
        /// 场次ID
        /// </summary>        
        public int roomid;
    }

    public class cs_roomInfo : cs_baseinfo_gm {

        /// <summary>
        /// 场次ID
        /// </summary>
        public int id;

        /// <summary>
        /// 房间名称
        /// </summary>
        public string name = "";

        /// <summary>
        /// 底分
        /// </summary>
        public int baserate;

        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid;

        /// <summary>
        /// 最低分
        /// </summary>
        public int _min;

        /// <summary>
        /// 最高分
        /// </summary>
        public int _max;

        /// <summary>
        /// 在线人数
        /// </summary>
        public int onlineCount;

        /// <summary>
        /// 桌子数量
        /// </summary>
        public int openTableCount;

        /// <summary>
        /// 游戏类型
        /// </summary>
        public int gametype;

        /// <summary>
        /// 游戏类型说明
        /// </summary>
        public string gametypeDesc = "";

        /// <summary>
        /// 是否启用
        /// </summary>
        public int isEnable;

        /// <summary>
        /// 是否启用说明
        /// </summary>
        public string isEnableDesc = "";

        /// <summary>
        /// 是否删除
        /// </summary>
        public int deleteState;

        /// <summary>
        /// 修改人
        /// </summary>
        public string modifyUser = "";

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime modifyTime;
        public int oldid;

    }
    public class cs_restpasswrod : cs_base_gm
    {
        public int userid { get; set; }
        public string password { get; set; }
    }
    public class cs_switchgame : cs_base_gm {

        /// <summary>
        /// 机器人2 游戏1
        /// </summary>
        public int switch_type { get; set; }
        /// <summary>
        /// 游戏ID
        /// </summary>
        public int gameid { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public int is_lock { get; set; }
    }
    public class cs_roomlistinfo: sc_base_gm
    {
        public ttablelist param;
        ///// <summary>
        ///// 游戏ID
        ///// </summary>
        //public int gameid;
        ///// <summary>
        ///// 场次ID
        ///// </summary>
        //public int levelid;
        ///// <summary>
        ///// 玩家人数
        ///// </summary>
        //public int numpertable;
        ///// <summary>
        ///// 创建时间
        ///// </summary>
        //public string createTime;

        ///// <summary>
        ///// 总局数 暂定200 相当于不用
        ///// </summary> 
        //public int maxCount;
        ///// <summary>
        ///// 执行时间分钟数 30 60 90 120 
        ///// </summary>  
        //public int Duration;
        ///// <summary>
        ///// 最小带入 50 100  200 500 
        ///// </summary> 
        //public int firstinto;

        ///// <summary>
        ///// 底皮 1.2.5.10.20.40
        ///// </summary> 
        //public int baserate;
        ///// <summary>
        ///// 对应底皮 3.5.10.20.40.80
        ///// </summary> 
        //public int basemango;

        ///// <summary>
        ///// 揍芒
        ///// </summary> 
        //public string IsZm;
        ///// <summary>
        ///// 休芒
        ///// </summary> 
        //public string IsXiu;
        ///// <summary>
        ///// 地王
        ///// </summary> 
        //public string IsDw;
        ///// <summary>
        ///// 手手芒
        ///// </summary> 
        //public string IsSSM;
        //public int MaxNum { get; set; }
    }
    public class cs_giveGold : cs_base_gm
    {
        public int setGiveGold { get; set; }
        public bool givegold { get; set; }
    }
    public class sc_giveGold : sc_base_gm
    {
        public bool giveGold { get; set; }
    }
}
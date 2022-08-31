using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.Model;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    public class cs_compete : cs_base, IBaseInfo
    {
        public int competeid;
        public bool isreturn { get; set; }
    }
    public class sc_compete : sc_base { }
    /// <summary> 比赛报名 </summary>
    public class cs_signup : cs_compete
    {
        public int userid;
        //public int competeid;
    }
    /// <summary> 报名结果 </summary>
    public class sc_signup : sc_compete { }
    /// <summary> 获取比赛列表 </summary>
    public class cs_compete_list : cs_compete
    {
        public int userid;
    }
    public class cs_reload : cs_compete
    {
    }
    //[Serializable, ProtoContract]
    /// <summary> 比赛信息 </summary>
    public class CompeteInfo
    {
        /// <summary> 比赛类型 </summary>
        public CompeteType type;
        /// <summary> 消息名称(用于客户端选择解析逻辑,因该信息存在很多子类) </summary>
        public string msgname;
        /// <summary> 游戏编号 </summary>
        public int gameid;
        /// <summary> 比赛编号 </summary>
        public int competeid;
        /// <summary> 比赛模板名称 </summary>
        public string name;
        /// <summary> 当前报名人数 </summary>
        public int signupcount;
        /// <summary> 最大报名人数 </summary>
        public int maxcount;
        /// <summary> 开赛最小人数 </summary>
        public int mincount;
        /// <summary> 报名开始时间 </summary>
        public string SignupTime;
        /// <summary> 开赛时间 </summary>
        public string StartTime;
        /// <summary> 能否报名 </summary>
        public bool cansignup;
        /// <summary> 比赛是否开始 </summary>
        public bool CompeteStart;
        /// <summary> 是否已报名 </summary>
        public bool IsSignup;
        /// <summary> 报名费 </summary>
        public List<PrizeInfoMessage> free;
        /// <summary> 奖励 </summary>
        public List<CompetePrizeMessage> prizes;
        public CompeteInfo() { msgname = GetType().Name; }
    }
    public class PrizeInfoMessage
    {
        public string name;
        public int num;

        public int minnum;

        public string pic;
    }
    public class CompetePrizeInfoMessage
    {
        public string name;
        public int num;
        public string pic;
        public bool isvalue;
    }
    public class CompetePrizeMessage
    {
        /// <summary> 起始排名 </summary>
        public int starank;
        /// <summary> 结束排名 </summary>
        public int endrank;
        /// <summary> 奖品 </summary>
        public List<CompetePrizeInfoMessage> prizes;
    }
    /// <summary> 德州晋级赛等级信息 </summary>
    public class TexasLeveInfo
    {
        /// <summary> 等级 </summary>
        public int level;
        /// <summary> 底注(小盲) </summary>
        public int basegamble;
        /// <summary> 前注 </summary>
        public int pregamble;
        /// <summary> 大盲 </summary>
        public int Maxblind;
    }
    //[Serializable, ProtoContract]
    /// <summary> 德州晋级赛信息 </summary>
    public class TexasPromotionInfo : CompeteInfo
    {
        /// <summary> 奖池 </summary>
        public int prizepool;
        /// <summary> 最大牌桌人数 </summary>
        public int tablemaxcount;
        /// <summary> 升级时间(涨盲时间): 秒 </summary>
        public int leveluptime;
        /// <summary> 复活次数 </summary>
        public int rebirth;
        /// <summary> 报名延迟时间 秒 </summary>
        public int signupdelay;
        /// <summary> 初始金币 </summary>
        public int initscore;
        /// <summary> 等级信息 </summary>
        public List<TexasLeveInfo> levelinfos;
    }
    /// <summary> 比赛列表 </summary>
    public class sc_compete_list : sc_compete
    {
        public List<CompeteInfo> competes;
    }
    /// <summary> 请求退赛 </summary>
    public class cs_quit : cs_compete
    {
        public int userid;
    }
    /// <summary> 退赛结果 </summary>
    public class sc_quit : sc_compete { }
    /// <summary> 报名结束 </summary>
    public class cs_signup_over : cs_compete { }
    /// <summary> 比赛结束 </summary>
    public class cs_compete_over : cs_compete { }
    /// <summary> 单局结束消息 </summary>
    public class cs_round_over : cs_compete
    {
        public int tableid;
        public List<CompetePlayerInfo> playerinfos;
    }
    /// <summary> 房间结束 </summary>
    public class cs_compete_table_over : cs_compete
    {
        public int tableid;
        public List<int> players;
    }
    /// <summary> 比赛玩家信息 </summary>
    public class CompetePlayerInfo
    {
        /// <summary> 玩家编号 </summary>
        public int playerid;
        /// <summary> 玩家剩余分数 </summary>
        public int score;
        /// <summary> 玩家变更分数 </summary>
        public int change_score;
    }
    /// <summary> 创建比赛房间 </summary>
    public class cs_compete_table_create : cs_compete
    {
        /// <summary> 游戏编号 </summary>
        public int gameid;
        /// <summary> 入房玩家编号 </summary>
        public List<CompetePlayerInfo> players;
        /// <summary> 牌桌信息 </summary>
        public string tableinfo;
    }
    public class sc_compete_table_create : sc_compete
    {
        public int competeid;
        public List<CompetePlayerInfo> players;
        public int tableid;
        public string ip;
    }
    /// <summary> 关闭比赛房 </summary>
    public class cs_compete_table_close : cs_compete
    {
        public int tableid;
    }
    /// <summary> 德州比赛牌桌参数变更 </summary>
    public class cs_compete_texas_ready : cs_compete_ready
    {
        /// <summary> 底注 1.2.5.10.20.40 小盲等于底注 大盲是小盲两倍 straddle是大盲的两倍速 </summary> 
        public int baserate;
        /// <summary> 前注 底注的 2的N次方   1 2 4 8 16 20 40 </summary> 
        public int pregamble;
        /// <summary> 最小大盲100倍 实际带入需要再*带入倍数 50 100  200 500  </summary> 
        public int into;
    }
    public class cs_compete_ready : cs_compete
    {
        public int tableid;
    }

    public class cs_compete_table_join : cs_compete
    {
        public int tableid;
        public CompetePlayerInfo player;
    }
    public class cs_compete_rank_info : cs_compete
    {
        public int userid;
    }
    /// <summary> 排名信息 </summary>
    public class RankInfo
    {
        /// <summary> 玩家编号 </summary>
        public int playerid;
        /// <summary> 用户名 </summary>
        public string name;
        /// <summary> 头像 </summary>
        public string pic;
        /// <summary> 当前分数 </summary>
        public int score;
        /// <summary> 排名 </summary>
        public int rank;
        /// <summary> 是否被淘汰 </summary>
        public bool isouted;

        public RankPrizeInfo ToRankPrizeInfo()
        {
            return new RankPrizeInfo { playerid = playerid, name = name, pic = pic, score = score, rank = rank, isouted = isouted };
        }
    }
    /// <summary> 排名信息 </summary>
    public class sc_compete_rank_info : sc_compete
    {
        public int competeid;
        public List<RankInfo> infos;
    }
    /// <summary> 通知房间转发消息 </summary>
    public class cs_send_table_user : sc_base
    {
        public int tableid;
        /// <summary> 转发类型:0.转发给房间内所有人,1.转发给所有玩家,2.转发给所有观众 </summary>
        public int type;
        public string msg;
    }
    /// <summary> 获奖信息 </summary>
    public class sc_compete_award_info : sc_compete
    {
        /// <summary> 消息类型:0.淘汰,1.颁奖 </summary>
        public int type;
        /// <summary> 比赛编号 </summary>
        public int competeid;
        /// <summary> 比赛名称 </summary>
        public string name;
        /// <summary> 得奖用户 </summary>
        public int userid;
        /// <summary> 复活次数 </summary>
        public int rebirth_count;
        /// <summary> 排名 </summary>
        public int rank;
        /// <summary> 奖品 </summary>
        public List<PrizeInfoMessage> infos;
    }
    public class cs_compete_table_info : cs_compete
    {
        public int userid;
        public int tableid;
    }
    public class sc_compete_table_info : sc_base
    {
        /// <summary> 玩家编号 </summary> 
        public int userid;
        /// <summary> 牌桌号 </summary> 
        public int tableid;
        /// <summary> 当前等级 </summary> 
        public int level;
        /// <summary> 最小等级 </summary> 
        public int min_level;
        /// <summary> 最大等级 </summary> 
        public int max_level;
        /// <summary> 当前底注 </summary> 
        public int baserate;
        /// <summary> 当前最小大盲100倍 实际带入需要再*带入倍数 50 100  200 500  </summary> 
        public int into;
        /// <summary> 下一档底注 1.2.5.10.20.40 小盲等于底注 大盲是小盲两倍 straddle是大盲的两倍速 </summary> 
        public int next_baserate;
        /// <summary> 下一档前注 底注的 2的N次方   1 2 4 8 16 20 40 </summary> 
        public int next_pregamble;
        /// <summary> 下一档最小大盲100倍 实际带入需要再*带入倍数 50 100  200 500  </summary> 
        public int next_into;
        /// <summary> 下一次升级时间(秒) </summary>
        public int next_uplevel_time;
    }
    public class cs_watch : cs_compete
    {
        public int userid;
        public int tableid;
    }
    public class sc_watch : sc_base { }

    public class cs_compete_record : cs_compete
    {
        public int userid;
    }
    /// <summary> 比赛简介 </summary>
    public class CompeteRemark
    {
        public int competeid;
        public string competename;
        /// <summary> 比赛图片 </summary>
        public string pic;
        /// <summary> 获得金币 </summary>
        public int wingold;
        /// <summary> 开赛时间 </summary>
        public string starttime;
        /// <summary> 排名 </summary>
        public int rank;
    }
    /// <summary> 玩家比赛统计 </summary>
    public class sc_compete_record : sc_compete
    {
        /// <summary> 钱圈数 </summary>
        public int WinCount;
        /// <summary> 总手数 </summary>
        public int TotalRoundCount;
        /// <summary> 决赛次数 </summary>
        public int FinalRoundCount;
        /// <summary> 比赛简介(可获取参与比赛数量) </summary>
        public List<CompeteRemark> infos;
    }
    public class cs_compete_record_detail : cs_compete
    {
        public int userid;
    }
    public class RankPrizeInfo
    {
        /// <summary> 玩家编号 </summary>
        public int playerid;
        /// <summary> 用户名 </summary>
        public string name;
        /// <summary> 头像 </summary>
        public string pic;
        /// <summary> 当前分数 </summary>
        public int score;
        /// <summary> 排名 </summary>
        public int rank;
        /// <summary> 是否被淘汰 </summary>
        public bool isouted;
        /// <summary> 比例(万分比) </summary>
        public int proportion;
        /// <summary> 奖品 </summary>
        public List<PrizeInfoMessage> prizes;
    }
    /// <summary> 玩家比赛详情 </summary
    public class sc_compete_record_detail : sc_compete
    {
        //public CompeteDetail detailinfo;
        public int competeid;
        /// <summary> 比赛名称 </summary>
        public string competename;
        /// <summary> 玩家在比赛中获得的奖品 </summary>
        public List<PrizeInfoMessage> prizes;
        /// <summary> 排名(可从中获取玩家人数) </summary>
        public List<RankPrizeInfo> ranking;
        /// <summary> 盈利桌数 </summary>
        public int TableWinCount;
        /// <summary> 总手数 </summary>
        public int TotalRoundCount;
        /// <summary> 回报率 </summary>
        public int RateOfReturn;
        /// <summary> 开赛时间 </summary>
        public string starttime;
    }
}

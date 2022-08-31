using System;
using System.Collections.Generic;
using ETModel.Framework.Game.Contract.Action;

namespace ETModel.Script.CsScript.Action
{
    #region  排行系统
    /// <summary>
    /// 
    /// </summary>
    public class cs_getranklist2 : cs_base
    {
    }

    /// <summary>
    /// 手数排行榜
    /// </summary>
    public class sc_getranklist2 : sc_base
    {
        //代理红利排行距上榜还差
        public string Mess;

        //开始时间
        public DateTime BeginTime;

        //结束时间
        public DateTime EndTime;

        /// <summary>
        /// 代理红利排行榜
        /// </summary>
        public List<RankUserSD> agentRank;
        /// <summary>
        /// 代理红利排行榜   活动开始结束时间
        /// </summary>
        public GameActivities agentRankActive;
        /// <summary>
        /// 代理是否过期
        /// </summary>
        public bool agentExist;


        /// <summary>
        /// 玩家盈利排行榜
        /// </summary>
        public List<RankUserSD> profitRank;

        /// <summary>
        /// 玩家盈利排行榜   活动开始结束时间
        /// </summary>
        public GameActivities profitRankActive;
        /// <summary>
        /// 盈利   活动是否过期
        /// </summary>
        public bool profitExist;

        /// <summary>
        /// 30分钟手数排行榜
        /// </summary>
        public HourHandRank HourHandRank;

        //玩家盈利排行榜还差
        public string Mess4;

        //1皮排名距上榜还差
        public string Mess1;

        /// <summary>
        /// 1皮排名
        /// </summary>
        public List<RankUserSD> BaseRate1Rank;

        //2皮排名距上榜还差
        public string Mess2;

        /// <summary>
        /// 2皮排名
        /// </summary>
        public List<RankUserSD> BaseRate2Rank;

        //5皮排名距上榜还差
        public string Mess5;

        /// <summary>
        /// 5皮排名
        /// </summary>
        public List<RankUserSD> BaseRate5Rank;

        //10皮排名距上榜还差
        public string Mess10;

        /// <summary>
        /// 10皮排名
        /// </summary>
        public List<RankUserSD> BaseRate10Rank;

        //20皮排名距上榜还差
        public string Mess20;

        /// <summary>
        /// 20皮排名
        /// </summary>
        public List<RankUserSD> BaseRate20Rank;

        //50皮排名距上榜还差
        public string Mess50;

        /// <summary>
        /// 50皮排名
        /// </summary>
        public List<RankUserSD> BaseRate50Rank;
    }
    public class HourHandRank
    {
        /// <summary>
        /// 是否开启活动 活动是否过期
        /// </summary>
        public bool IsExist;
        /// <summary>
        /// 返回信息
        /// </summary>
        public string Msg;

        /// <summary>
        /// 含 1，2，5 10 20 50
        /// </summary>
        public List<RankUserSD> BaseRate1Rank;
        /// <summary>
        /// 活动信息
        /// </summary>
        public GameActivities active;
    }

    /// <summary>
    /// 排行榜结构
    /// </summary>
    public class RankUserSD
    {
        public string UserName;
        public int UserId;
        //手数
        public int TotalHand;
        //名次
        public int Rank;
        //奖励
        public int Prize;
        /// <summary>
        ///  1 2 5 10 20 50
        /// </summary>
        public int t;
    }

    #endregion

    #region  排行系统 老版

    public class cs_getranklist : cs_base
    {
        public int gameid;
        /// <summary>
        /// 暂时不用了
        /// </summary>
        public int _onlymine;
        /// <summary>
        /// 类型 1 金币 2钻石
        /// </summary>
        public int type;
    }
    public class sc_getranklist : sc_base
    {
        public List<RankInfoSD> _ranklist;
        /// <summary>
        /// 暂时不用了
        /// </summary>
        public int _onlymine;
        /// <summary>
        /// 1、金币 2、钻石
        /// </summary>
        public int type;
    }
    /// <summary>
    ///  
    /// </summary>
    public class RankInfoSD
    {
        public int userid;
        public string uName;
        public int winScore;
        public int failScore;
        public int rank;   //  名次   
        public string headurl;
    }

    #endregion
}

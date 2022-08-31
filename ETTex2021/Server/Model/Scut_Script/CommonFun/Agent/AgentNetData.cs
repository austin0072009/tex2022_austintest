using System;
using System.Collections.Generic;

using ETModel.Framework.Game.Contract.Action;
namespace ETModel.Script.CsScript.Action
{

    #region 代理相关

    /// <summary>
    /// 获取代理基本信息，我的邀请码 下载地址 我的总佣金 历史佣金
    /// </summary>
    public class cs_getagentinfo : cs_base
    {
        /// <summary>
        /// clubid
        /// </summary>
        public int idx;
    }
    public class sc_getagentinfo : sc_base
    {
        /// <summary>
        /// 父级代理ID
        /// </summary> 
        public int FUserID;
        public int UserId;

        public int clubuserid;

        /// <summary>
        /// 代理获得已领取的历史JB
        /// </summary> 
        public long GoldHistoryC;
        /// <summary>
        /// 代理获得的未领取的JB 含奖池来源
        /// </summary> 
        public long GoldC;
        /// <summary>
        /// 二维码路径
        /// </summary> 
        public string QRPath;

        /// <summary>
        ///   自己的邀请码
        /// </summary>
        public string Code;

        /// <summary>
        /// 最近一次的结算时间 
        /// </summary> 
        public DateTime lastdealtime;

        /// <summary>
        /// 下级给我的所有流水   本周业绩
        /// </summary>
        public long childwater;

        /// <summary>
        /// 下级给我的所有流水   本周佣金
        /// </summary>
        public long weekCommision; 

        /// <summary>
        /// 代理总人数
        /// </summary>
        public int agentcount;
        /// <summary>
        /// 当日代理人数
        /// </summary>
        public int currAgentCount;
        /// <summary>
        /// 一级代理人数
        /// </summary>
        public int agent1count;
        /// <summary>
        /// 上级给我分配的0~100 0不显示
        /// </summary>
        public int rate;
        /// <summary>
        /// 大于1就是代理
        /// </summary>
        public int isagent;
        /// <summary>
        /// 下级代理数据
        /// </summary>
        public List<ChildrenAgentListSD> calist;


        /// <summary>
        /// 今日佣金   123级的返利
        /// </summary>
        public int tCommision;

        /// <summary>
        /// 今日活跃
        /// </summary>
        public int tactive;

        /// <summary>
        /// 今日新增
        /// </summary>
        public int taddnum;

        /// <summary>
        /// 累计佣金
        /// </summary>
        public double income;

        public int lv;

        /// <summary>
        /// 社区奖励说明
        /// </summary>
        public string reward;

        /// <summary>
        /// 社区名
        /// </summary>
        public string clubname;

        /// <summary>
        /// 联盟名
        /// </summary>
        public string allidname;

    }

    /// <summary>
    /// -1社区存在   -4活动已结束
    /// </summary>
    public class sc_extendredinfo:sc_base
    {
        /// <summary>
        /// 反利累计目标值
        /// </summary>
        public long agentTarget;

        /// <summary>
        /// 金额
        /// </summary>
        public long gold;


        /// <summary>
        /// 未领取金额
        /// </summary>
        public long NoReceiveGold;

        /// <summary>
        /// 总领取金额
        /// </summary>
        public long receivegold;

        /// <summary>
        /// 活动描述
        /// </summary>
        public string des;

        /// <summary>
        /// 下级和自己的数据
        /// </summary>
        public List<ExtendUser> calist;
    }

    public class cs_extendredinfo : cs_base
    {

        /// <summary>
        /// 社区id
        /// </summary>
        public int idx;
    }

    /// <summary>
    /// 领取推广金
    /// </summary>
    public class cs_receiveextendgold : cs_base
    {
        /// <summary>
        /// 社区id
        /// </summary>
        public int idx;

        /// <summary>
        /// 玩家id  可能是自己的id
        /// </summary>
        public int userid;
    }

    /// <summary>
    /// -1社区不存在   -2推广金余额不足  -4活动结束
    /// </summary>
    public class sc_receiveextendgold : sc_base
    {

    }





    [Serializable]
    public class ChildrenAgentListSD
    {
        /// <summary>
        /// 我的玩家 二级 三级
        /// </summary>
        public int lv;
        public int UserID;
        public string name;
        public string icon;
        /// <summary>
        /// 总手数
        /// </summary>
        public int pcount;
        /// <summary>
        /// 今日贡献
        /// </summary>
        public int tincome;
        /// <summary>
        /// 累计贡献
        /// </summary>
        public ulong income;
        /// <summary>
        /// 注册时间
        /// </summary>
        public string regtime;
        /// <summary>
        /// 是否是代理了
        /// </summary>
        public int isagent;
        public long gold;
        /// <summary>
        /// 给下一级的比例 0~100
        /// </summary>
        public int rate; 
    }

    /// <summary>
    /// 推广玩家
    /// </summary>
    public class ExtendUser
    {
        /// <summary>
        /// 等级
        /// </summary>
        public int lv;
        public int UserID;
        public string name;

        /// <summary>
        /// 累计反利
        /// </summary>
        public double income;

        /// <summary>
        /// 是否领取  1领取
        /// </summary>
        public int IsReceive;
    }

    /// <summary>
    /// 领取佣金
    /// </summary>
    public class cs_getcommision : cs_base
    {
        public ulong gold;

        public int clubid;

    }
    public class sc_getcommision : sc_base
    {
        public ulong gold;
    }
    /// <summary>
    /// 佣金领取记录
    /// </summary>
    [Serializable]
    public class cs_getagentlog : cs_base
    {

    }

    /// <summary>
    /// 佣金领取记录
    /// </summary>
    [Serializable]
    public class sc_getagentlog : sc_base
    {
        public List<agentlogSD> data;
    }

    /// <summary>
    /// 代理授权
    /// </summary>
    public class cs_setagent_gm : cs_base
    {
        public int userId;

        /// <summary>
        /// 系统给的最大分配比例
        /// </summary>
        public int showrate;

        /// <summary>
        /// clubid
        /// </summary>
        public int clubid;
    }
    /// <summary>
    /// 代理授权
    /// </summary>
    [Serializable]
    public class sc_setagent_gm : sc_base
    { 

        
    }
    /// <summary>
    /// 佣金领取记录
    /// </summary>
    [Serializable]
    public class agentlogSD
    {
        /// <summary>
        /// 金额
        /// </summary>
        public ulong gold;
        /// <summary>
        /// 领取状态 0.成功 -1.失败 -2;游戏服务器扣除JB失败
        /// </summary>
        public int state;
        /// <summary>
        /// 领取时间
        /// </summary>
        public string createtime;
    }

    /// <summary>
    /// CEO给下一级 设置分成比例
    /// </summary>
    public class cs_setsecondtop : cs_base
    {
        public int seconduserId;
        /// <summary>
        /// 0~100
        /// </summary>
        public int rate;
    }
    /// <summary>
    /// CEO给下一级 设置分成比例
    /// </summary>
    [Serializable]
    public class sc_setsecondtop : sc_base
    {

        /// <summary>
        /// 0~100
        /// </summary>
        public int rate;
    }
    #endregion

    #region 合伙人
    /// <summary>
    /// 创始人  第二级 ，合伙人的特殊代理模块 
    /// </summary>
    public class cs_getceomain : cs_base
    {

    }
    public class sc_getceomain : sc_base
    {
        /// <summary>
        /// 父级代理ID
        /// </summary> 
        public int FUserID;
        /// <summary>
        /// ID
        /// </summary> 
        public int UserId;

        /// <summary>
        ///  创始人10  第二级 9  合伙人 8 
        /// </summary>
        public int role; 
        /// <summary>
        ///  上级给自己分配比例
        /// </summary>
        public int  rate;
        /// <summary>
        /// 总收益
        /// </summary>
        public long allincome;

        /// <summary>
        /// 股东授权管理 只有股东 合伙人才有这个值 才显示股东授权按钮  
        /// </summary>
        public List<ChildCEOSD> clist;
    }

    [Serializable]
    public class ChildCEOSD
    { 
        public int UserID;
        public string name; 
        /// <summary>
        /// 注册时间
        /// </summary>
        public string t;
        /// <summary>
        /// 0 普通  2.合伙人 3.CEO  普通的存在2019里面的
        /// </summary>
        public int _type;

        public int lv;

        /// <summary>
        /// 是否是代理了
        /// </summary>
        public int isagent;
        /// <summary>
        /// 分给此角色的比例
        /// </summary>
        public int rate;

        /// <summary>
        /// 直接下级推广玩家数量
        /// </summary>
        public int lowerC;
        public long gold;

    }


    /// <summary>
    /// 授权 只有CEO 合伙人 才有授权功能
    /// </summary>
    public class cs_setagentlv : cs_base
    {
        public int userid;
        /// <summary>
        /// 创始人10  第二级 9    合伙人8
        /// </summary>
        public int lv;
    }

    public class sc_setagentlv : sc_base
    {

    }   

  
    
    #endregion
}

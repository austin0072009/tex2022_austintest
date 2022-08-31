using System;
using System.Collections.Generic;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.Model;

namespace ETModel.Script.CsScript.Action
{

    /// <summary>
    /// 获取VIP权限信息
    /// </summary> 
    public class cs_getvipinfo : cs_base
    {

    }
    /// <summary>
    /// 获取用户免费次数信息
    /// </summary> 
    public class cs_getuservipfreeinfo : cs_base
    {
        public int levelid;
    }
    /// <summary>
    /// 获取用户免费次数信息
    /// </summary> 
    public class sc_getuservipfreeinfo : sc_base
    {
        public int freecount;
    }
    /// <summary>
    /// 获取VIP权限信息
    /// </summary> 
    public class sc_getvipinfo : sc_base
    {
        public List<authSD> data;

    }
    /// <summary>
    /// 权限信息
    /// </summary>
    public class authSD
    {
        /// <summary>
        /// 权限名称
        /// </summary>
        public string authname;
        /// <summary>
        /// 权限值
        /// </summary>
        public int authvalue;
    }

    #region 新增
    /// <summary>
    /// GM获取VIP配置信息
    /// </summary> 
    public class cs_getvipconfig_gm : cs_base_gm
    {
    }
    /// <summary>
    /// GM获取VIP配置信息
    /// </summary> 
    public class sc_getvipconfig_gm : sc_base_gm
    {
        public tVipConfig config;

    }

    /// <summary>
    /// 修改VIP配置
    /// </summary> 
    public class cs_modifyvipconfig_gm : cs_base_gm
    {
        public string Context;
    }
    /// <summary>
    /// 修改VIP配置
    /// </summary> 
    public class sc_modifyvipconfig_gm : sc_base_gm
    {
        public tVipConfig config;

    }
    /// <summary>
    /// 扣除玩家VIP积分
    /// </summary> 
    public class cs_writeuservipscore_gm : cs_base_gm
    {
        public int userid;
        public int lScore;
    }
    /// <summary>
    /// 扣除玩家VIP积分
    /// </summary> 
    public class sc_writeuservipscore_gm : sc_base_gm
    {
        
    }
    /// <summary>
    /// 设置玩家VIP等级
    /// </summary> 
    public class cs_setuserviplev_gm : cs_base_gm
    {
        public int userid;
        public int lev;
        public int lScore;
    }
    /// <summary>
    /// 设置玩家VIP等级
    /// </summary> 
    public class sc_setuserviplev_gm : sc_base_gm
    {
        public int lev;
        public int lScore;
    }

    /// <summary>
    /// 获取VIP配置信息
    /// </summary> 
    public class cs_getvipconfig : cs_base
    {
    }
    /// <summary>
    /// 获取VIP配置信息
    /// </summary> 
    public class sc_getvipconfig : sc_base
    {
        public tVipConfig config;

    }

    /// <summary>
    /// 获取玩家VIP信息
    /// </summary> 
    public class cs_getuservipinfo_gm : cs_base_gm
    {
        public int userid;
    }

    /// <summary>
    /// 获取玩家VIP信息
    /// </summary> 
    public class cs_getuservipinfo : cs_base
    {
    }

    /// <summary>
    /// 获取玩家VIP信息
    /// </summary> 
    public class sc_getuservipinfo : sc_base
    {
        /// <summary>
        /// 当前积分
        /// </summary>
        public int currScore;
        /// <summary>
        /// 当前经验
        /// </summary>
        public int currExp;
        /// <summary>
        /// 晋级礼金状态 0:未领取  1:已领取  2:不可领取
        /// </summary>
        public int UpAwardStatus;
        /// <summary>
        /// 每月奖励状态 0:未领取  1:已领取  2:不可领取
        /// </summary>
        public int MonthAwardStatus;

    }

    /// <summary>
    /// 领取晋级奖励
    /// </summary> 
    public class cs_receiveupaward : cs_base
    {
    }
    /// <summary>
    /// 领取晋级奖励
    /// </summary> 
    public class sc_receiveupaward : sc_base
    {
        /// <summary>
        /// 自身金币
        /// </summary>
        public long MyScore;
        /// <summary>
        /// 奖励礼金
        /// </summary>
        public int AwardScore;
    }

    /// <summary>
    /// 领取每月奖励
    /// </summary> 
    public class cs_receivemonthaward : cs_base
    {
    }
    /// <summary>
    /// 领取每月奖励
    /// </summary> 
    public class sc_receivemonthaward : sc_base
    {
        /// <summary>
        /// 自身金币
        /// </summary>
        public long MyScore;
        /// <summary>
        /// 奖励礼金
        /// </summary>
        public int AwardScore;
    }
    #endregion
}

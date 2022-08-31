using ETModel.Script.Model;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    public class DKUser
    {
        public float ProValue;
        /// <summary>
        /// 最大倍数
        /// </summary>
        public int MaxTimes;
        /// <summary>
        /// 上限
        /// </summary>
        public int MaxLimit;
        /// <summary>
        /// 下限
        /// </summary>
        public int MinLimit;
    }
    /// <summary>
    /// 棋牌点控配置
    /// </summary>
    public class ChessCardDgConfig
    {
        /// <summary>
        /// 自动点赢开启条件（0：不开启自动点赢，1：当日充值触发点赢，2：自动触发自动点赢）
        /// </summary>
        public int WhiteUser;
        /// <summary>
        /// 自动点赢 进入自动点赢最低个人奖池分数   作弊率基数 自动点控额度比例下限 自动点控额度比例上限
        /// </summary>
        public List<float[]> WhiteUserStock;
        /// <summary>
        /// 多套配置组数，点控白名单配置（点赢）
        /// </summary>
        public List<DKUser> DKWhiteUser;
        /// <summary>
        /// 自动点输 进入自动点控最低个人奖池分数   作弊率基数 自动点控额度比例下限 自动点控额度比例上限
        /// </summary>
        public List<float[]> BlackUserStock;
        /// <summary>
        /// 多套配置组数，点控黑名单配置（点输）
        /// </summary>
        public List<DKUser> DKBlackUser;
    }

}

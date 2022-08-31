using ProtoBuf;
using System;

namespace ETModel.Script.CsScript.Action
{
    /// <summary> 奖励类型 </summary>
    [Serializable, ProtoContract]
    public enum PrizeType
    {
        /// <summary> 金币 </summary>
        Gold = 1,
        /// <summary> 钻石 </summary>
        diamond = 2
    }
    /// <summary> 任务类型 </summary>
    [Serializable, ProtoContract]
    public enum TaskType
    {
        /// <summary> 签到任务(周期任务) </summary>
        Signin = 1,
        /// <summary> 每日任务 </summary>
        Daily = 2,
        /// <summary> 游戏任务 </summary>
        GameData = 3,
        /// <summary> 全局任务 </summary>
        Global = 4,
    }
    /// <summary> 任务显示类型 </summary>
    [Serializable, ProtoContract]
    public enum TaskShowType
    {
        /// <summary> 新手任务 </summary>
        NoviceTask = 1,
        /// <summary> 超值任务 </summary>
        TaskPlus = 2,
    }
    /// <summary> 任务数据类型 </summary>
    [Serializable, ProtoContract]
    public enum TaskDataType
    {
        /// <summary>参与次数</summary>
        JoinCount = 1,
        /// <summary>胜利次数</summary>
        WinCount = 2,
        /// <summary>失败次数</summary>
        LoseCount = 3,
        /// <summary>连胜次数</summary>
        WinningStreakCount = 4,
        /// <summary>流水</summary>
        WaterScore = 5,
        /// <summary>赢取金额</summary>
        WinScore = 6,
        /// <summary>输的金额</summary>
        LoseScore = 7,
        /// <summary>邀请次数</summary>
        InviteCount = 8
    }
}

using ETModel.Framework.Game.Contract.Action;
using System;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{

    public class cs_getRedEnvCount : cs_base
    {


        /// <summary>
        /// 任务id
        /// </summary>
        public long taskId;
    }

    public class sc_getRedEnvCount : sc_base
    {
        /// <summary>
        /// 返回成功的任务id
        /// </summary>
        public long taskId;
    }




    /// <summary>
    /// 获取福利红包任务信息
    /// </summary>
    public class cs_getWelfareTask : cs_base
    {
          
    }
    public class sc_getWelfareTask : sc_base
    {
        /// <summary>
        /// 是否领取
        /// </summary>
        public bool IsReceive;
        /// <summary>
        /// 任务列表
        /// </summary>
        public List<WelfareTaskListSD> taskList;
    }
    /// <summary>
    /// 
    /// </summary>
    public class cs_getWelfareCount : cs_base
    {
    }
    /// <summary>
    /// 获取红包次数协议
    /// </summary>
    public class sc_getWelfareCount : sc_base
    {
        /// <summary>
        /// 幸运红包次数
        /// </summary>
        public int xyCount;
        /// <summary>
        /// 转运红包次数
        /// </summary>
        public int zyCount;

        /// <summary>
        /// 锦鲤红包次数
        /// </summary>
        public int jlCount;

        /// <summary>
        /// 房间人数
        /// </summary>
        public int uCount;
        /// <summary>
        /// 1开启   0关闭
        /// </summary>
        public int isopenJl;
    }



    [Serializable]
    public class WelfareTaskListSD
    {
        /// <summary>
        /// 任务ID
        /// </summary>
        public long taskId;
        /// <summary>
        /// 任务描述
        /// </summary>
        public string taskDes;
        /// <summary>
        /// 任务类型 1:幸运红包 2:转运红包 3锦鲤
        /// </summary>
        public int taskType;
        /// <summary>
        /// 奖励次数
        /// </summary>
        public int awardTimes;
        /// <summary>
        /// 任务目标值（每日登陆直接判断是否领取）
        /// </summary>
        public int goalNum;

        /// <summary>
        /// 任务完成值
        /// </summary>
        public int fNum;
        /// <summary>
        /// 是否领取奖励
        /// </summary>
        public bool isGet;
    }

    /// <summary>
    /// 获取福利详情
    /// </summary>
    public class cs_getWelfareInfo : cs_base
    {
        /// <summary>
        /// 红包福利类型 1:幸运红包 2:转运红包
        /// </summary>
        public int welfareType;
    }
    public class sc_getWelfareInfo : sc_base
    {
        /// <summary>
        /// 红包福利类型 1:幸运红包 2:转运红包
        /// </summary>
        public int welfareType;
        /// <summary>
        /// 剩余次数
        /// </summary>
        public int remainTimes;
        /// <summary>
        /// 所有玩家记录
        /// </summary>
        public List<WelfarePlayerInfoSD> calist;
    }

    [Serializable]
    public class WelfarePlayerInfoSD
    {
        public int UserID;
        public string name;
        public int gold;
        /// <summary>
        /// 领取时间
        /// </summary>
        public string receiveTime;
    }


    /// <summary>
    /// 打开红包
    /// </summary>
    public class cs_getWelfare : cs_base
    {
        public int UserID;
        /// <summary>
        /// 红包福利类型 1:幸运红包 2:转运红包 3锦鲤红包
        /// </summary>
        public int welfareType;
    }
    public class sc_getWelfare : sc_base
    {
        public int gold;

        public string msg;

        /// <summary>
        /// 红包福利类型 1:幸运红包 2:转运红包 3锦鲤红包
        /// </summary>
        public int welfareType;
    }
}

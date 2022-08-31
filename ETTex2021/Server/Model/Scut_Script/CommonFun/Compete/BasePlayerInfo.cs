using ETModel.Framework.Game.Contract;
using ETModel.Script.Model;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    public enum CompetePlayerStatus
    {
        /// <summary> 等待分配房间 </summary>
        wait = 0,
        /// <summary> 游戏中 </summary
        playing = 1,
        /// <summary> 已淘汰 </summary
        outed = 2
    }
    public class BasePlayerInfo
    {
        /// <summary> 玩家编号 </summary>
        public int playerid;
        /// <summary> 玩家积分 </summary>
        public int Score;
        /// <summary> 玩家状态(0.等待分配房间,1.游戏中,2.已淘汰) </summary>
        public int status;
        public string name;
        public string pic;
        public bool IsAward;
        public bool IsRobot;
        public List<PrizeInfo> prizes;
        public FailPlayerInfo ToFailInfo(int num)
        {
            return new FailPlayerInfo { playerid = playerid, Score = Score, IsAward = IsAward, prizes = prizes, IsRobot = IsRobot, status = status, name = name, pic = pic, num = num };
        }
        public void SetPrizes(List<PrizeInfo> prizes)
        {
            this.prizes = prizes;
            IsAward = true;
            //Console.WriteLine("玩家[" + playerid + "]开始[" + rank + "]颁奖");
        }
        public void SendMessage(string msg)
        {
            if (!IsRobot) ActionFactory.SendMessage(msg, playerid);
            //else Console.WriteLine("不发送机器人消息:" + msg);
        }
    }
    public class TexasPlayerInfo : BasePlayerInfo
    {
        /// <summary> 可复活次数 </summary>
        public int RebirthCount;
    }
    public class FailPlayerInfo : BasePlayerInfo
    {
        public int num;
    }
}

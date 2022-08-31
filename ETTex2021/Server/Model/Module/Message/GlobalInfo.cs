using System.Collections.Generic;

namespace ETModel
{
    public interface IBaseInfo
    {
        bool isreturn { get; set; }
    }
    public class GlobalInfo : IBaseInfo
    {
        public string name;
        public bool isreturn { get; set; }
        public GlobalInfo()
        {
            name = GetType().Name;
        }

    }
    /// <summary>
    /// 请求获取房间索引(注SLOT游戏的房间索引即为房间号)
    /// </summary>
    public class GameTableIndexReq : GlobalInfo
    {
        public int gameid;
        public GameTableIndexReq()
        {
            isreturn = true;
        }
    }
    /// <summary>
    /// 房间索引(注SLOT游戏的房间索引即为房间号)
    /// </summary>
    public class GameTableIndexRsp : GlobalInfo
    {
        public int tableindex;
    }

    /// <summary>
    /// 请求牌桌号(注SLOT游戏没有该属性)
    /// </summary>
    public class GameTableIDReq : GlobalInfo
    {
        public int gameid;
        public GameTableIDReq()
        {
            isreturn = true;
        }
    }
    /// <summary>
    /// 牌桌号(注SLOT游戏没有该属性)
    /// </summary>
    public class GameTableIDRsp : GlobalInfo
    {
        public int tableid;
    }
    /// <summary>
    /// 排除牌桌号
    /// </summary>
    public class ExcludeTableIDReq : GlobalInfo
    {
        public List<int> tableids;
    }
    /// <summary>
    /// 回收牌桌号
    /// </summary>
    public class RecycleTableIDReq : GlobalInfo
    {
        public int tableid;
    }

    public class RobotDataAddReq : GlobalInfo
    {
        public int userid;
        public string data;
    }
    public class RobotDataReq : GlobalInfo
    {
        public int userid;
        public RobotDataReq() { isreturn = true; }
    }
    public class RobotDataRsp : GlobalInfo
    {
        public int userid;
        public string data;
    }

    /// <summary>
    /// 请求通过房间号获取游戏IP
    /// </summary>
    public class GameIPReq : GlobalInfo
    {
        public int gameid;
        public int tableid;
        public GameIPReq()
        {
            isreturn = true;
        }
    }

    public class GameIPRsp : GlobalInfo
    {
        public string ip;
    }

    public class GameTableRMReq : GlobalInfo
    {
        public int gameid;
        public int tableid;
    }

    public class GameTableAddReq : GlobalInfo
    {
        public int gameid;
        public int tableid;
        public string ip;
    }

    public class GameServerMessage : GlobalInfo
    {
        public int gameid;
        public int appid;
        public string ip;
    }

    public class GameServerStartMessage : GlobalInfo
    {
        public int gameid;
    }
    public class LoginCountReq : GlobalInfo
    {
    }
    public class LoginCountRsp : GlobalInfo
    {
        public int count;
    }
    public class OnlinePlayerReq : GlobalInfo
    {
        public int gameid;
    }
    public class OnlinePlayerRsp : GlobalInfo
    {
        public int[] players;
    }
    public class InGameInfo : GlobalInfo
    {
        public bool IsInGame;
        public bool online;
        public int userid;
        public int gameid;
        public int roomid;
        public int tableid;
        public string ip;
    }
}

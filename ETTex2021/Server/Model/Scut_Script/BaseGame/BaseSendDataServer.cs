using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 自动服务类 即，服务启动就要运行 包括 以下功能：
    /// 1.自动消息队列。 
    /// </summary>
    public abstract class BaseSendDataServer 
    { 
        //全局配置信息
        private int _gameid; 

        /// <summary>
        /// 15 每个桌子的每个动作等待时间 暂定15秒，若超时，进行默认处理
        /// </summary>
        private int _TurnWaitTime = 15;
        /// <summary>
        /// 金币倍率
        /// </summary>
        public float GlodMultiple = 1;

        /// <summary>
        /// 操作的等待时间  FJ模式会很长很长的
        /// </summary>
        public int TurnWaitTime
        {
            get { return _TurnWaitTime; }
            set { _TurnWaitTime = value; }
        }

        /// <summary>
        /// 允许一个游戏配置最大机器人的数量
        /// </summary>
        public int maxRobotCount = 20;

        public int RobotExistNum = 0;
        /// <summary>
        /// 向里面压入数据 即会发送消息  不能放父类，否则会消息发送传了，，，，，-------------
        /// </summary> 
        protected ConcurrentQueue<List<UserIDMSG>> _waittoSendData = new ConcurrentQueue<List<UserIDMSG>>();

        public virtual async void StartServer(int gameid)
        {
            _gameid = gameid;
        }
        public virtual void LogicUpdate()
        { 

        }
 
        public abstract void AutoSendDataTry( );

        public virtual void AutoSendData(List<UserIDMSG> imlist)
        { 
            foreach (UserIDMSG msg in imlist)
            {
                if (msg._isrobot || msg._isDisconnect) continue;

                ActionFactory.SendMessage(JsonUtils.Serialize(msg._senddata), msg._userid);
            } 
        }

        public virtual void SendDataDelay(List<UserIDMSG> imList)
        {

        } 
        

        public static   void AutoNotifySendData(string senddata)
        {
            ActionFactory.SendActorBroadcast(senddata);
        }

        public static async void NotifySendDataUserID(string senddata, int UserID)
        {
            await  ActionFactory.SendMessage(senddata, UserID);
        }
    }

    public class GameBootAttribute : Attribute
    {
        private int _gameid;
        private Type _type;
        public GameBootAttribute(int gameid, Type type = null)
        {
            _gameid = gameid;
            _type = type;
        }
        public int GameID
        {
            get
            {
                return _gameid;
            }
        }
        public Type Type
        {
            get
            {
                return _type;
            }
        }
    }
}


using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Framework.RPC.Sockets;
using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Framework.Game.Contract
{
    /// <summary>
    /// Action管理
    /// </summary>
    public static class ActionFactory
    {
        /// <summary>
        /// 单向推送消息
        /// </summary>
        /// <param name="unitId"></param>
        /// <returns></returns>
        public static async Task<bool> SendMessage(string _data, int userid)
        {
            //var _targetunit = ETModel.Game.Scene.GetComponent<UnitComponent>().GetByUserID(userid);
            Unit _targetunit = await FactoryBaseHelper.GetUnitInMap(userid);
            if (_targetunit != null)
            {
                SS2C_ActorMessage createUnits = new SS2C_ActorMessage();
                BroadcastInfo unitInfo = new BroadcastInfo();
                unitInfo.UnitId = _targetunit.Id;
                unitInfo.Message = _data;
                createUnits.Info.Add(unitInfo);

                Console.WriteLine("\n" + DateTime.Now + "|push data:" + _data);
                // return   await MessageHelper.PushMessageAsync(createUnits, userid);
                MessageHelper.PushMessagetoOne(createUnits, _targetunit);
            }
            else Console.WriteLine(string.Format("..............................fetal error userid:{0} can not find _ActionFactory.SendMessage {1}   ", userid, _data));
            return true;
        }
        /// <summary>
        /// 更新用户断线状态 可能不需要更新
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static async void UpdateDisState( int userid)
        { 
            Unit _targetunit = await FactoryBaseHelper.GetUnitInMap(userid);
            if (_targetunit != null)
            {
                _targetunit.GetComponent<UnitGateComponent>().IsDisconnect = false; 
            } 
        }
        /// <summary>
        /// 广播消息
        /// </summary>
        public static void SendActorBroadcast(string _data)
        {
            // 广播创建的unit
            SS2C_ActorMessage createUnits = new SS2C_ActorMessage();
            Unit[] units = ETModel.Game.Scene.GetComponent<UnitComponent>().GetAll().DistinctByEx(t=>t.UserID).ToArray();
            //foreach (Unit u in units)
            {
                BroadcastInfo unitInfo = new BroadcastInfo();
                //unitInfo.UnitId = u.Id;
                unitInfo.Message = _data;
                createUnits.Info.Add(unitInfo);
            }
            MessageHelper.Broadcast(createUnits);
        }

        /// <summary>
        /// 请求处理  ET发送消息过来的地方
        /// </summary>
        /// <param name="_data"></param>
        /// <param name="resRpcIdponse"></param>
        /// <param name="ActorId"></param>
        public static async Task<string> Request(string _data, string remoteaddress, long ActorId, int userid)
        {
            Console.WriteLine(string.Format("Receive ET： userid:{0} _ {1} {2} {3}  ", userid, _data, remoteaddress, ActorId));
            try
            {
                string _backdata =await ActionReciveSend.Receive(_data, remoteaddress, userid); 
                return _backdata;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009031508 游戏logic error 不能卡死框架 _data:"+ _data);
            }
            return "";
        }

        /// <summary>
        /// 主动推送消息，对逻辑层来说是异步，但先后推送需要有严格的先后顺序 
        /// </summary>
        /// <param name="userList">session id 给哪些人推消息</param>
        /// <param name="jsondata">消息体 </param>
        /// <param name="complateHandle">完成回调</param>
        /// <param name="onlineInterval">广播的时候需要用的参数 100条，间隔好多时间推一个 防卡死</param>
        /// <returns></returns>
        public static async Task SendAction(List<string> userList, string jsondata, Action<SocketAsyncResult> complateHandle, int onlineInterval = 0)
        {// 广播创建的
            sc_base _redata = new sc_base() { cc = 0, fn = "sc_base", result = 1, _msgid = 1 };

            SS2C_BaseNotify notify = new SS2C_BaseNotify();
            notify.ActorId = 0;
            notify.RpcId = 0;
            notify.Data = JsonUtils.Serialize(_redata); 
            return;
        }
        #region 断开与心跳
        public static async void OnDisconnected(int UserId, string RemoteAddress)
        {   //这里处理收到close指令的断线业务
            Console.WriteLine("客户端OnDisconnected UserId:[{0}]{1}已与服务器断开", UserId, RemoteAddress); 
            await ThreadEx.Sleep(1);
            CommonLogic.ExitRoomByDisConnect(UserId);

        }
        public static void OnHeartbeatTimeout(int UserId, string RemoteAddress)
        {    //这里处理未收到close指令的断线业务  网络不好的断线会进来儿。
            Console.WriteLine("客户端OnHeartbeatTimeout UserId:[{0}]{1}已与服务器断开", UserId, RemoteAddress);
            CommonLogic.ExitRoomByDisConnect(UserId);
           // GameSession.ClearSession(m => m.UserId == UserId); 
        }
        
        #endregion
      
         
    }
}
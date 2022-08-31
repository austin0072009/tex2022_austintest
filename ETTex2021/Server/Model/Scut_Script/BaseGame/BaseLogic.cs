using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.Model;
using System.Collections.Generic;
using System.Linq;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 逻辑消息进来 的接口处理
    /// </summary>
    public class BaseLogic : IBaseLogic
    {
        public BaseLogic(BaseLobby lobby)
        {
            _lobby = lobby;
        }

        public BaseLobby _lobby;
        /// <summary>
        /// 处理消息
        /// </summary> 
        /// <returns></returns>
        public virtual async ETTask<string> DealDataEx(int UserID, string _data)
        {
            if (string.IsNullOrEmpty(_data)) return "";
            string senddata = "";
            cs_base _basedata = JsonUtils.Deserialize<cs_base>(_data);
            tUser _user = await BaseHelper.GetBase<tUser>(UserID);
            switch (_basedata.fn)
            {
                #region GM操作
                case "cs_switchgame":
                    cs_switchgame cs_switchgame = JsonUtils.Deserialize<cs_switchgame>(_data); 
                    if(cs_switchgame.switch_type==1)//关闭游戏
                    {
                        _lobby.SwitchGame(cs_switchgame.is_lock == 1);
                    }
                    else
                    {
                        _lobby.SwitchRobot(cs_switchgame.is_lock == 1);
                    }
                    
                    senddata = JsonUtils.Serialize(cs_switchgame);
                    break;
                case "cs_robotjoinroom":
                    sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "cs_base_gm" };
                    cs_robotjoinroom addrobogm = JsonUtils.Deserialize<cs_robotjoinroom>(_data);

                    if (addrobogm.userId != 0)
                    {
                        var res = await FactoryBaseHelper.EnterRobotFromGM(addrobogm.gameId, addrobogm.roomnumber, addrobogm.pos, addrobogm.userId);
                        if (res == 1)
                        {
                            resultmange._info = "添加成功！";
                            resultmange._ret = 0;
                        }
                        else if (res == -2)
                        {
                            resultmange._info = "桌子不存在！";
                            resultmange._ret = 1;
                        }
                        else
                        {
                            resultmange._info = "添加失败！";
                            resultmange._ret = 1;
                        }
                    }
                    else
                    {
                        tUser _robotjoinuser = await tb_UserEx.GetFromCachebyUserID(1008);//给一个默认人
                        var res = await FactoryBaseHelper.EnterRobot(addrobogm.gameId, _robotjoinuser, JsonUtils.Deserialize<cs_enterrobot_tex>(_data));
                        sc_base rdata = JsonUtils.Deserialize<sc_base>(res);
                        if (rdata.result == 1)
                        {
                            resultmange._info = "添加成功！";
                            resultmange._ret = 0;
                        }
                        else
                        {
                            resultmange._info = "添加失败！";
                            resultmange._ret = 1;
                        }
                    }
                    senddata= JsonUtils.Serialize(resultmange);
                    break;
                case "cs_gamelevelinfo":
                    sc_gameInfo sendlevelinfo = new sc_gameInfo { _ret = 1 };
                    cs_gamelevelInfo gameinfo = JsonUtils.Deserialize<cs_gamelevelInfo>(_data);
                    var jser = JsonUtils.Serialize(gameinfo);
                    tgamelevelinfo info = JsonUtils.Deserialize<tgamelevelinfo>(jser);
                    info.Id = gameinfo.oldid; 
                    BaseRoom baseroom = _lobby.roomCache.Find(r => r._levelid == gameinfo.oldid);
                    baseroom._levelinfo = info;
                    sendlevelinfo._ret = 0;
                    senddata = JsonUtils.Serialize(sendlevelinfo);
                    break;
                #endregion
                default:
                    break;
            }
            return senddata;
        }
       

        /// <summary>
        /// 获取游戏场次列表
        /// </summary>
        /// <returns></returns>
        public virtual async ETTask<List<RoomInfoSD>> GetGameLevelList(int gameid)
        {
            var roomList = _lobby.roomList;// await  BaseHelper.GetShareAll<tgamelevelinfo>(g => g.gameid == gameid);

            List<BaseRoom> _roomlist31 = new List<BaseRoom>();
            foreach (var _roomInfo in roomList)
            {
                var roomData = new BaseRoom(_roomInfo);
                _roomlist31.Add(roomData);
            }

            List<RoomInfoSD> roomInfoList31 = new List<RoomInfoSD>();
            List<int> baseRateList = new List<int>();
            foreach (var level in _roomlist31)
            {
                if (!baseRateList.Contains(level.BaseRate))
                {
                    baseRateList.Add(level.BaseRate);
                }
            }
            baseRateList.Sort((x, y) => -x.CompareTo(y));//降序 
            foreach (var level in _roomlist31)
            {
                RoomInfoSD infoSd = new RoomInfoSD()
                {
                    baserate = level._levelinfo.Baserate,
                    gameid = level._levelinfo.gameid,
                    gametype = level._levelinfo.gametype,
                    id = level._levelid,
                    name = level._levelinfo.Name,
                    _max = level._levelinfo._max,
                    _min = level._levelinfo._min,
                    leveltype = level._levelinfo.LevelType,
                    pcount = level._levelinfo.pconut
                };
                infoSd.onlineCount =  level.GetOnlineCount(baseRateList);
                roomInfoList31.Add(infoSd);
            }

            var q31 = from e in roomInfoList31 orderby e.baserate select e;
            roomInfoList31 = q31.ToList();
            return roomInfoList31;
        }
 

        /// <summary>
        ///// 进入FJ 返回现在等待用户数 
        ///// </summary>                          
        ///// <returns></returns>
        //public virtual async ETTask<string> SlotEnterTable(int UserID, cs_slotentertable _data)
        //{
        //    return "";
        //}

        /// <summary>
        /// 用户退出FJ时调用
        /// </summary>
        /// <param name="userID"></param>
        public virtual async ETTask<int> ExitRoom(int levelid, int userID)
        { 
            return 0;
        }

        /// <summary>
        /// 进入FJ中的指定桌子
        /// </summary>                          
        /// <returns></returns>
        public virtual async ETTask<string> EnterRoomTable(int UserID, cs_enterroomtable _data)
        {
            return "";
        }

        /// <summary>
        /// 退出ROOM
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="_us"></param>
        public virtual void ExitRoomByDisConnect(int userid, UserStatus _us)
        {
            return;
        }

        /// <summary>
        /// 申请退出FJ
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        public virtual async ETTask< bool> ApplyExitTable(int UserID, int tableid)
        { 
            return false;
        }

        /// <summary>
        /// 处理退出桌子
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        public virtual void DealExitTable(int UserID, cs_dealexittable _data)
        {
         
        }
        /// <summary>
        /// 取消排队
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        public virtual async ETTask<string> CancelOrder(int UserID)
        {
            sc_cancelorder _senddata = new sc_cancelorder() { result = 0 };
            UserStatus _us = await BaseHelper.GetUserStatusbyUserID(UserID);
            if (_us != null && _us.Levelid != 0 && _us.InRoomandRoomDis())
            {
                _us.SetStatus(UserStatusEnum.InLobby);
                _us.Levelid = 0;
                _us.Gameid = 0; 
                await UserStatusCache.Ins.AddOrUpdate(_us);
            }
            _senddata.result = 1;
            return JsonUtils.Serialize(_senddata); 
        }

        public virtual void DismissTableGM(string data)
        {

        }

        public virtual async ETTask<int> EnterRobotFromGM(int tnum, int pos, int userid)
        {
           
                return -1; 
        }

        public virtual async ETTask<int> ExitRobotFromGM(int userid)
        {

            return -1;//游戏中不能退出 
        }


        /////// <summary>
        /////// 返回指定FJ的在线人数
        /////// </summary>
        /////// <param name="levelid"></param>
        /////// <returns></returns>
        ////public virtual int GetOnlineCount(int levelid)
        ////{
        ////    return 0;
        ////} 
         
         
        /// <summary>
        /// GM创建FJ解散指定FJ   
        /// </summary>                          
        /// <returns></returns>
        public virtual async ETTask<string> CreateTableGM(string _data)
        { 
            return "";
        }

       
        
         
        public virtual string SendChat(tUser _user, cs_chat chat)
        {
            return "";
        } 

        public virtual async ETTask<string> EnterRobot(int UserID, int levelid, int tableid)
        {
            return "";
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public virtual async ETTask<string> AddWatchRobot(string data)
        {
            return "";
        } 

        public virtual async ETTask<int> EnterVMasterFromGM(int levelid, int tableid, int userid)
        {
            return -1;
        }
        public virtual async ETTask<int[]> GetOnlineUserIds() 
        {
            return null;
        }
    }

}

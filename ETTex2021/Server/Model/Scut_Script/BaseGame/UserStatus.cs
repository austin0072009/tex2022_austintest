using ETModel.Framework.Common.Serialization;
using GameSystem;
using Newtonsoft.Json.Converters;
using System;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace ETModel.Script.CsScript.Action
{
    [DataContract]
    public class UserStatus
    {
        public UserStatus()
        {
        }

        public UserStatus(UserStatusEnum _Status, int _gameid, int _RoomID, int _UserID)
        {
            Status = _Status;
            Levelid = _RoomID;
            UserID = _UserID;
            Gameid = _gameid;
        }

        [DataMember]
        public int UserID { get; set; }
       
        [DataMember]
        public UserStatusEnum Status { get; private set; }

        [DataMember]
        public int Gameid { get; set; }

        [DataMember]
        public int Levelid { get; set; }

        [DataMember]
        public int TableID { get; set; }


        /// <summary>
        /// 在FJ中 排队掉线
        /// </summary>
        /// <returns></returns>
        public bool InRoomDis()
        {
            if (Status == UserStatusEnum.InRoomDis) return true;
            return false;
        }

        /// <summary>
        /// 外部调用设置装备 要加锁，看能不能锁住
        /// </summary>
        /// <param name="_se"></param>
        public void SetStatus(UserStatusEnum _se)
        {
            Status = _se;
            if (_se == UserStatusEnum.InLobby)
            {
                Gameid = 0;
                Levelid = 0;
                TableID = 0;
            }
        }

        /// <summary>
        /// 在线人数统计状态
        /// </summary>
        /// <returns></returns>
        public bool InOnlineStatus()
        {
            if (Status == UserStatusEnum.InRoom || Status == UserStatusEnum.InTableDaPai || Status == UserStatusEnum.InTableWaiting) return true;
            return false;
        }
        /// <summary>
        /// 用于可以取消排队的状态 
        /// </summary>
        /// <returns></returns>
        public bool InRoomandRoomDis()
        {
            if (Status == UserStatusEnum.InRoom || Status == UserStatusEnum.InRoomDis) return true;
            return false;
        }
        public bool InLobby()
        {
            if (Status == UserStatusEnum.InLobby) return true;
            return false;
        }
    }

    [DataContract]
    public enum UserStatusEnum
    {
        [EnumMember]
        InLobby = 1,

        [EnumMember]
        InRoom = 2,

        [EnumMember] 
        InTableDaPai = 3,// 在桌子上打牌

        [EnumMember] 
        InTableDaPaiDis = 4,// 在桌子上打牌，但断线了

        [EnumMember] 
        InTableWaiting = 5,// 在桌子上等待，

        [EnumMember] 
        InRoomDis = 6// 排队断线了
    }
}

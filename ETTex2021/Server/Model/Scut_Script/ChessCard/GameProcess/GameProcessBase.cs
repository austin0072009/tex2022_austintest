using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action; 
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    public abstract class GameProcessBase<Logic, Lobby, Room, Table, User> : IGameProcess where Room : BaseRoom where Table : BaseTable  where Lobby : BaseLobby where User : BaseUser
    {
        public int index;
        public List<string> fn;
        public string name;
        public BaseRoom room;
        public Table table; 
        public Lobby lobby; 

        public abstract ETTask Start();
        public abstract ETTask<string> Process(int userid, cs_base cs, string message);
        public abstract ETTask End();

        public abstract void Reset();

        public string GetErrorRsp(cs_base cs, int errcode, string errmsg)
        {
            return JsonUtils.Serialize(new sc_base { fn = cs.fn.Replace("cs_", "sc_"), result = errcode, message = errmsg, cc = cs.cc });
        }
        public User GetUserByID(int userid)
        {
            if (table.TryGetUserByID(userid, out BaseUser user)) return user as User;
            return null;
        }
        public bool TryGetUserByID(int userid, out User user)
        {
            user = GetUserByID(userid);
            return user != null;
        }

        public bool TryGetUserByPos(int pos, out User user)
        {
            var buser = table.GetBaseUserByPos(pos);
            user = buser as User;
            return buser != null;
        }

        public User GetWatchByID(int userid)
        {
            if (table.TryGetWatchByID(userid, out BaseUser user)) return user as User;
            return null;
        }
        public bool TryGetWatchByID(int userid, out User user)
        {
            user = GetWatchByID(userid);
            return user != null;
        }

        public List<string> GetFunName()
        {
            return fn;
        }

        public int GetIndex()
        {
            return index;
        }
        public string GetProcessName()
        {
            return name;
        }

        public virtual bool IsEnd()
        {
            return true;
        }
    }
}

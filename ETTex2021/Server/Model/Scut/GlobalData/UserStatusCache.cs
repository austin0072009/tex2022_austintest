using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ETModel
{
    public class UserStatusCache
    {
        private static UserStatusCache ins;
        public static UserStatusCache Ins { get { if (ins == null) ins = new UserStatusCache(); return ins; } }
        public Dictionary<int, UserStatus> cache = new Dictionary<int, UserStatus>();
        public async Task<UserStatus> GetStatus(int userid, int istry)
        {
            if (cache.TryGetValue(userid, out UserStatus status)) return status;
            string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().USGetAsync(userid, istry);
            status = JsonUtils.Deserialize<UserStatus>(jsonT);
            if (status != null) UpdateCache(status);
            return status;
        }
        public UserStatus TryGetStatus(int userid)
        {
            if (cache.TryGetValue(userid, out UserStatus status)) return status;
            return null;
        }
        public void Remove(int userid)
        {
            cache.Remove(userid);
        }
        public async Task<bool> UpdateStatus(int userid, UserStatusEnum status)
        {
            var us = await GetStatus(userid, 1);
            if (us == null) return false;// us = new UserStatus { UserID = userid };
            if (us.Status != status)
            {
                string jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBCommonFun2Async("UpdateUserStatusByUserID", userid + "", status + "");
                if (jsonT == "true")
                {
                    us.SetStatus(status);
                    IPManager.Ins.SendMessage(new Any2M_USSyncRequest { status = JsonUtils.Serialize(us) }, new Any2S_USSyncRequest { status = JsonUtils.Serialize(us) });
                }
                return false;
            }
            return true;
        }
        public void UpdateCache(UserStatus status)
        {
            cache[status.UserID] = status;
        }
        public async Task<bool> AddOrUpdate(UserStatus status)
        {
            if (!cache.TryGetValue(status.UserID, out UserStatus tmpUs) || tmpUs.Gameid != status.Gameid || tmpUs.Levelid != status.Levelid || tmpUs.TableID != status.TableID || tmpUs.Status != status.Status)
            {
                var rsp = await Game.Scene.GetComponent<RedisDBProxyComponent>().USAddOrUpdateaAsync(JsonUtils.Serialize(status));
                if (rsp == "1")
                {
                    IPManager.Ins.SendMessage(new Any2M_USSyncRequest { status = JsonUtils.Serialize(status) }, new Any2S_USSyncRequest { status = JsonUtils.Serialize(status) });
                    return true;
                }
            }
            return false;
        }
    }
}

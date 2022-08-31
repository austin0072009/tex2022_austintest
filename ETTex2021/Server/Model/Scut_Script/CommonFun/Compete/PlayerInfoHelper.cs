using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    public static class PlayerInfoHelper
    {
        public static T GetPlayerInfo<T>(this Dictionary<int, BasePlayerInfo> self, int userid) where T : BasePlayerInfo
        {
            if (self == null || !self.ContainsKey(userid)) return default;
            else return self[userid] as T;
        }
        public static bool TryGetValue<T>(this Dictionary<int, BasePlayerInfo> self, int userid, out T info) where T : BasePlayerInfo
        {
            if (self == null || !self.ContainsKey(userid)) { info = default; return false; }
            info = self[userid] as T;
            return info != null;
        }
        public static void RemoveByUserID<T>(this List<T> self, int userid) where T : BasePlayerInfo
        {
            if (self != null) return;
            int index = 0;
            for (; index < self.Count && self[index].playerid != userid; index++) ;
            if (index < self.Count) self.RemoveAt(index);
        }
    }
}

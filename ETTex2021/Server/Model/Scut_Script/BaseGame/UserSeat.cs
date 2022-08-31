using ETModel.Framework.Common.Serialization;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;

namespace ETModel.Script.CsScript.Action
{
    public static class UserSeat
    {
       
        public static BaseUser GetUserByID(this ConcurrentDictionary<int, BaseUser> self, int userid, bool is_allow_empty = false, bool istry = false)
        {
            if (self == null) { if (!is_allow_empty) TraceLogEx.Error("2021051411231 UserSeat == null fetal Error 运行正常后去掉 userID:" + userid); return null; }
            foreach (var item in self) if (item.Value._userid == userid) return item.Value;
            if (!istry) TraceLogEx.Error("2021051411232 fetal Error 必需处理   没找到userID:" + userid);
            return null;
        }
        public static ChessUser GetUserByID(this ConcurrentDictionary<int, ChessUser> self, int userid, bool is_allow_empty = false, bool istry = false)
        {
            if (self == null) { if (!is_allow_empty) TraceLogEx.Error("2021051411231 UserSeat == null fetal Error 运行正常后去掉 userID:" + userid); return null; }
            foreach (var item in self) if (item.Value._userid == userid) return item.Value;
            if (!istry) TraceLogEx.Error("20211101009 fetal Error    没找到userID:" + userid);
            return null;
        }
        public static User GetUserByID<User>(this ConcurrentDictionary<int, BaseUser> self, int userid, bool is_allow_empty = false, bool istry = false) where User : BaseUser
        {
            if (self == null) { if (!is_allow_empty) TraceLogEx.Error("2021051411231 UserSeat == null fetal Error 运行正常后去掉 userID:" + userid); return null; }
            foreach (var item in self) if (item.Value._userid == userid) return item.Value as User;
            if (!istry) TraceLogEx.Error("2021051411232 fetal Error 必需处理   没找到userID:" + userid);
            return null;
        }
        public static User GetUserByID<User>(this ConcurrentDictionary<int, ChessUser> self, int userid, bool is_allow_empty = false, bool istry = false) where User : ChessUser
        {
            if (self == null) { if (!is_allow_empty) TraceLogEx.Error("2021051411231 UserSeat == null fetal Error 运行正常后去掉 userID:" + userid); return null; }
            foreach (var item in self) if (item.Value._userid == userid) return item.Value as User;
            if (!istry) TraceLogEx.Error("2021051411232 fetal Error 必需处理   没找到userID:" + userid);
            return null;
        }
      
        public static bool TryGetUserByID<User>(this ConcurrentDictionary<int, BaseUser> self, int userid, out User user, bool is_allow_empty = false) where User : BaseUser
        {
            user = self.GetUserByID<User>(userid, is_allow_empty, true);
            return user != null;
        }
     
        public static bool TryGetUserByID<User>(this ConcurrentDictionary<int, ChessUser> self, int userid, out User user, bool is_allow_empty = false) where User : ChessUser
        {
            user = self.GetUserByID<User>(userid, is_allow_empty, true);
            return user != null;
        }
        
        public static ChessUser GetUserByPos(this ConcurrentDictionary<int, ChessUser> self, int pos, bool is_allow_empty = false, bool istry = false)
        {
            if (self == null) { if (!is_allow_empty) TraceLogEx.Error("2021051411233 UserSeat == null fetal Error 运行正常后去掉 Pos:" + pos); return null; }
            if (self.ContainsKey(pos)) return self[pos];
            if (!istry) TraceLogEx.Error("2021051411234 fetal Error 必需处理   没找到Pos:" + pos);
            return null;
        }
       
        public static bool TryGetUserByPos(this ConcurrentDictionary<int, ChessUser> self, int pos, out ChessUser user, bool is_allow_empty = false)
        {
            user = self.GetUserByPos(pos, is_allow_empty, true);
            return user != null;
        }
        
        public static bool TryGetPairByID(this ConcurrentDictionary<int, BaseUser> self, int userid, out int key, out BaseUser user, int pos = 0)
        {
            key = -1; user = null;
            if (self == null) return false;
            if (self.ContainsKey(pos) && self[pos] != null && self[pos]._userid == userid) { key = pos; user = self[pos]; return true; }
            else foreach (var item in self) if (item.Value._userid == userid) { key = item.Key; user = item.Value; return true; }
            return false;
        }
        public static bool TryGetPairByID(this ConcurrentDictionary<int, ChessUser> self, int userid, out int key, out ChessUser user, int pos = 0)
        {
            key = -1; user = null;
            if (self == null) return false;
            if (self.ContainsKey(pos) && self[pos] != null && self[pos]._userid == userid) { key = pos; user = self[pos]; return true; }
            else foreach (var item in self) if (item.Value._userid == userid) { key = item.Key; user = item.Value; return true; }
            return false;
        }

        public static bool TryGetPairByID<User>(this ConcurrentDictionary<int, BaseUser> self, int userid, out int key, out User user, int pos = 0) where User : BaseUser
        {
            key = -1; user = null;
            if (self == null) return false;
            if (self.ContainsKey(pos) && self[pos] != null && self[pos]._userid == userid) { key = pos; user = self[pos] as User; return true; }
            else foreach (var item in self) if (item.Value._userid == userid) { key = item.Key; user = item.Value as User; return true; }
            return false;
        }
        public static bool TryGetPairByID<User>(this ConcurrentDictionary<int, ChessUser> self, int userid, out int key, out User user, int pos = 0) where User : ChessUser
        {
            key = -1; user = null;
            if (self == null) return false;
            if (self.ContainsKey(pos) && self[pos] != null && self[pos]._userid == userid) { key = pos; user = self[pos] as User; return true; }
            else foreach (var item in self) if (item.Value._userid == userid) { key = item.Key; user = item.Value as User; return true; }
            return false;
        }
        public static bool RemoveByID(this ConcurrentDictionary<int, BaseUser> self, int userid, int pos = 0)
        {
            if (self == null) return false;
            if (self.ContainsKey(pos) && self[pos] != null && self[pos]._userid == userid) return self.Remove(pos);
            foreach (var item in self) if (item.Value._userid == userid) return self.Remove(item.Key);
            return false;
        }
        public static bool RemoveByID(this ConcurrentDictionary<int, ChessUser> self, int userid, int pos = 0)
        {
            if (self == null) return false;
            if (self.ContainsKey(pos) && self[pos] != null && self[pos]._userid == userid) return self.Remove(pos);
            foreach (var item in self) if (item.Value._userid == userid) return self.Remove(item.Key);
            return false;
        }
        public static bool TryRemoveByID(this ConcurrentDictionary<int, BaseUser> self, int userid, out BaseUser user, int pos = 0)
        {
            user = null;
            if (self == null) return false;
            if (self.ContainsKey(pos) && self[pos] != null && self[pos]._userid == userid) return self.TryRemove(pos, out user);
            foreach (var item in self) if (item.Value._userid == userid) return self.TryRemove(item.Key, out user);
            return false;
        }
        public static bool TryRemoveByID<User>(this ConcurrentDictionary<int, BaseUser> self, int userid, out User user, int pos = 0) where User : BaseUser
        {
            user = null;
            if (self == null) return false;
            if (self.ContainsKey(pos) && self[pos] != null && self[pos]._userid == userid && self.TryRemove(pos, out BaseUser temp)) return (user = temp as User) != null;
            foreach (var item in self) if (item.Value._userid == userid && self.TryRemove(item.Key, out temp)) return (user = temp as User) != null;
            return false;
        }
        
        public static bool TryRemoveByID<User>(this ConcurrentDictionary<int, BaseUser> self, int userid, out int seat, out User user, int pos = 0) where User : BaseUser
        {
            user = null; seat = -1;
            if (self == null) return false;
            if (self.ContainsKey(pos) && self[pos] != null && self[pos]._userid == userid && self.TryRemove(pos, out BaseUser temp)) { seat = pos; return (user = temp as User) != null; }
            foreach (var item in self) if (item.Value._userid == userid && self.TryRemove(item.Key, out temp)) { seat = item.Key; return (user = temp as User) != null; }
            return false;
        } 
       
        public static bool TryRemoveByID<User>(this ConcurrentDictionary<int, ChessUser> self, int userid, out int seat, out User user, int pos = 0) where User : ChessUser
        {
            user = null; seat = -1;
            if (self == null) return false;
            if (self.ContainsKey(pos) && self[pos] != null && self[pos]._userid == userid && self.TryRemove(pos, out ChessUser temp)) { seat = pos; return (user = temp as User) != null; }
            foreach (var item in self) if (item.Value._userid == userid && self.TryRemove(item.Key, out temp)) { seat = item.Key; return (user = temp as User) != null; }
            return false;
        }
        public static int GetCount(this ConcurrentDictionary<int, BaseUser> self)
        {
            if (self == null) return 0;
            return self.Count;
        }
        public static int GetCount(this ConcurrentDictionary<int, ChessUser> self)
        {
            if (self == null) return 0;
            return self.Count;
        }
        public static List<User> GetUsers<User>(this ConcurrentDictionary<int, BaseUser> self) where User : BaseUser
        {
            List<User> users = new List<User>();
            if (self != null)
            {
                foreach (var user in self.Values) users.Add(user as User);
            }
            return users;
        }
        public static List<User> GetUsers<User>(this ConcurrentDictionary<int, ChessUser > self) where User : ChessUser
        {
            List<User> users = new List<User>();
            if (self != null)
            {
                foreach (var user in self.Values) users.Add(user as User);
            }
            return users;
        }
        public static string ToUserInfos(this ConcurrentDictionary<int, BaseUser> self)
        {
            if (self == null) return null;
            StringBuilder sb = new StringBuilder();
            foreach (var user in self.Values)
            {
                sb.Append(user.ToString() + "\r\n");
            }
            //if (sb.Length > 0) sb.Remove(sb.Length - 1, 1);
            return sb.ToString();
        }
        public static string ToUserInfos(this ConcurrentDictionary<int, ChessUser> self)
        {
            if (self == null) return null;
            StringBuilder sb = new StringBuilder();
            foreach (var user in self.Values)
            {
                sb.Append(user.ToString() + "\r\n");
            }
            //if (sb.Length > 0) sb.Remove(sb.Length - 1, 1);
            return sb.ToString();
        }
        
        public static bool PrintRepeat(this ConcurrentDictionary<int, BaseUser> self, string name)
        {
            if (self == null) return false;
            Dictionary<int, HashSet<int>> repeats = new Dictionary<int, HashSet<int>>();
            var list = self.ToArray();
            for (int i = 0; i < list.Length - 1; i++)
            {
                for (int j = i + 1; j < list.Length; j++)
                {
                    if (list[i].Value._userid == list[j].Value._userid)
                    {
                        if (!repeats.TryGetValue(i, out HashSet<int> ids)) { ids = new HashSet<int>(); repeats.Add(i, ids); }
                        ids.Add(j);
                    }
                }
            }
            if (repeats.Count > 0) TraceLogEx.Error("当前字典[" + name + "]重复数据:" + JsonUtils.Serialize(repeats));
            return repeats.Count > 0;
        }
        public static bool PrintRepeat(this ConcurrentDictionary<int, ChessUser> self, string name)
        {
            if (self == null) return false;
            Dictionary<int, HashSet<int>> repeats = new Dictionary<int, HashSet<int>>();
            var list = self.ToArray();
            for (int i = 0; i < list.Length - 1; i++)
            {
                for (int j = i + 1; j < list.Length; j++)
                {
                    if (list[i].Value._userid == list[j].Value._userid)
                    {
                        if (!repeats.TryGetValue(i, out HashSet<int> ids)) { ids = new HashSet<int>(); repeats.Add(i, ids); }
                        ids.Add(j);
                    }
                }
            }
            if (repeats.Count > 0) TraceLogEx.Error("当前字典[" + name + "]重复数据:" + JsonUtils.Serialize(repeats));
            return repeats.Count > 0;
        }
        public static bool TryADD<User>(this ConcurrentDictionary<int, BaseUser> self, int pos, User user) where User : BaseUser
        {
            if (self == null) return false;
            //if (self.ContainsKey(user._Pos)) if (self[user._Pos]._userid == user._userid) return true; else if (user._Pos == pos) return false;
            if (self.ContainsKey(pos)) 
                if (self[pos]._userid == user._userid) return true; 
                else return false;
            return self.TryAdd(pos, user);
        }
        public static bool TryADD<User>(this ConcurrentDictionary<int, ChessUser> self, int pos, User user) where User : ChessUser
        {
            if (self == null) return false;
            //if (self.ContainsKey(user._Pos)) if (self[user._Pos]._userid == user._userid) return true; else if (user._Pos == pos) return false;
            if (self.ContainsKey(pos)) if (self[pos]._userid == user._userid) return true; else return false;
            return self.TryAdd(pos, user);
        }
        public static bool TryAddUser<User>(this ConcurrentDictionary<int, BaseUser> self, int pos, User user) where User : BaseUser
        {
            if (self == null) return false;
            if (self.ContainsKey(user.pos)) if (self[user.pos]._userid == user._userid) return true;
            if (self.ContainsKey(pos)) if (self[pos]._userid == user._userid) return true; else return false;
            foreach (var temp in self.Values) if (temp._userid == user._userid) return true;
            return self.TryAdd(pos, user);
        }
        public static void AddNode<User>(this List<User> self, User user) where User : BaseUser
        {
            if (self == null || user == null) return;
            for (int i = 0; i < self.Count; i++)
            {
                if (self[i]._userid == user._userid) return;
            }
            self.Add(user);
        }
        public static void AddAll<User>(this List<User> self, List<User> users) where User : BaseUser
        {
            if (self == null || users == null) return;
            for (int i = 0; i < users.Count; i++)
            {
                self.AddNode(users[i]);
            }
        }
        
         
    }
}

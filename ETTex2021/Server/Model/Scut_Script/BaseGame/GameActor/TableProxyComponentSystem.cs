using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace ETModel.Script.CsScript.Action
{
    [ObjectSystem]
    public class TableComponentStartSystem : AwakeSystem<TableComponent>
    {
        public override void Awake(TableComponent self) { }
    }

    public class TableComponent : Component
    {
        public Dictionary<int, Dictionary<int, Dictionary<int, GameActorHandler>>> tables = new Dictionary<int, Dictionary<int, Dictionary<int, GameActorHandler>>>();
        public Dictionary<int, int> playerInTable = new Dictionary<int, int>();
        public Dictionary<int, int> playerInGame = new Dictionary<int, int>();
        public Dictionary<int, int> playerInRoom = new Dictionary<int, int>();
        //CoroutineLockComponent lockcomponent = new CoroutineLockComponent();

        public GameActorHandler GetTableHandler(int userid)
        {
            if (!playerInGame.TryGetValue(userid, out int gameId) || !playerInRoom.TryGetValue(userid, out int roomId) || !playerInTable.TryGetValue(userid, out int tableId) || !tables.TryGetValue(gameId, out Dictionary<int, Dictionary<int, GameActorHandler>> rooms) || !rooms.TryGetValue(roomId, out Dictionary<int, GameActorHandler> ts) || !ts.TryGetValue(tableId, out GameActorHandler handler))
            {
                return null;
            }
            return handler;
        }


        public void RemoveTable(int gameId, int roomId, int tableId)
        {
            if (tables.TryGetValue(gameId, out Dictionary<int, Dictionary<int, GameActorHandler>> rooms) && rooms.TryGetValue(roomId, out Dictionary<int, GameActorHandler> ts))
            {
                ts.Remove(tableId);
                GlobalDataService.RemoveTable_R(gameId, tableId);
            }
        }
        public void LeaveTable(int userid, int _tableid)
        {
            int tableid = 0;
            if (playerInGame.TryGetValue(userid, out int gameid) && playerInRoom.TryGetValue(userid, out int roomid) && playerInTable.TryGetValue(userid, out tableid))
            {
                GlobalDataService.PlayerInGame_R(new InGameInfo { gameid = gameid, online = false, IsInGame = false, roomid = roomid, tableid = tableid, userid = userid });
            }
            if (_tableid == tableid)
            {
                playerInGame.Remove(userid);
                playerInRoom.Remove(userid);
                playerInTable.Remove(userid);
            }

        }

        public void InitTable(int gameId, int roomId, int tableId, int userId)
        {
            if (tables.TryGetValue(gameId, out Dictionary<int, Dictionary<int, GameActorHandler>> rooms) && rooms.TryGetValue(roomId, out Dictionary<int, GameActorHandler> ts) && ts.TryGetValue(tableId, out GameActorHandler handler))
            {
                if (playerInTable.ContainsKey(userId)) playerInTable[userId] = tableId; else playerInTable.Add(userId, tableId);
                if (playerInRoom.ContainsKey(userId)) playerInRoom[userId] = roomId; else playerInRoom.Add(userId, roomId);
                if (playerInGame.ContainsKey(userId)) playerInGame[userId] = gameId; else playerInGame.Add(userId, gameId);
                GlobalDataService.PlayerInGame_R(new InGameInfo { gameid = gameId, online = true, IsInGame = true, roomid = roomId, tableid = tableId, userid = userId });
                //TraceLogEx.Log("玩家[" + userId + "]在TableComponent中,加入游戏[" + GetGameID(userId) + "]房间[" + GetRoomID(userId) + "]的牌桌[" + GetTableID(userId) + "]\r\n" + GetStack());
                //BaseHelper.AddorUpdateUserStatus(new UserStatus(UserStatusEnum.InRoom, gameId, roomId, userId) { TableID = tableId }).Coroutine();
            }
        }
        public bool GetUserTableInfo(int userid, out int gameid, out int roomid, out int tableid)
        {
            gameid = 0; roomid = 0; tableid = 0;
            if (!playerInGame.TryGetValue(userid, out gameid)) return false;
            if (!playerInRoom.TryGetValue(userid, out roomid)) return false;
            if (!playerInTable.TryGetValue(userid, out tableid)) return false;
            return true;
        }
        public async void PrintUserStatusError(int userid, string msg)
        {
            var status = await BaseHelper.GetUserStatusbyUserID(userid);
            bool iserror = false;
            if ((status == null || status.Status == UserStatusEnum.InLobby)) return; // { if (playerInGame.ContainsKey(userid)) iserror = true; }
            else if (status.Gameid != 0 && playerInTable.TryGetValue(userid, out int tableid) && (!playerInGame.TryGetValue(userid, out int gameid) || status.Gameid != gameid)) iserror = true;
            else if (status.Levelid != 0 && playerInTable.TryGetValue(userid, out tableid) && (!playerInRoom.TryGetValue(userid, out int roomid) || status.Levelid != roomid)) iserror = true;
            else if (status.TableID != 0 && (!playerInTable.TryGetValue(userid, out tableid) || status.TableID != tableid)) iserror = true;
            if (iserror)
            {
                //string InTableInfo = "玩家[" + userid + "]在TableComponent中信息:游戏[" + GetGameID(userid) + "]房间[" + GetRoomID(userid) + "]的牌桌[" + GetTableID(userid) + "]";
                //string errorinfo = "在执行命令[" + msg + "]后用户状态不同步:\r\n" + status.GetUserStatusString(userid) + "\r\n" + InTableInfo;
                //Console.WriteLine(errorinfo);
                //TraceLogEx.Log(errorinfo);
            }
        }
        public string GetStack()
        {
            StringBuilder sb = new StringBuilder();
            StackTrace st = new StackTrace(true);
            for (int i = 0; i < st.FrameCount && i < 5; i++)
            {
                int line = st.GetFrame(i).GetFileLineNumber();
                if (line != 0) sb.Append(string.Format("at：{0}的{1}行\r\n", st.GetFrame(i).GetFileName(), line));
            }
            return sb.ToString();
        }
        public void InitTableHandler(int gameId, int roomId, int tableId, int userId, GameActorHandler handler, bool NeedInTable = true)
        {
            if (!tables.TryGetValue(gameId, out Dictionary<int, Dictionary<int, GameActorHandler>> rooms))
            {
                rooms = new Dictionary<int, Dictionary<int, GameActorHandler>>();
                tables.Add(gameId, rooms);
            }
            if (!rooms.TryGetValue(roomId, out Dictionary<int, GameActorHandler> ts))
            {
                ts = new Dictionary<int, GameActorHandler>();
                rooms.Add(roomId, ts);
            }
            if (!ts.TryGetValue(tableId, out GameActorHandler gametable))
            {
                ts.Add(tableId, handler);
            }
            if (userId <= 0 || !NeedInTable) return;
            if (playerInTable.ContainsKey(userId)) playerInTable[userId] = tableId; else playerInTable.Add(userId, tableId);
            if (playerInRoom.ContainsKey(userId)) playerInRoom[userId] = roomId; else playerInRoom.Add(userId, roomId);
            if (playerInGame.ContainsKey(userId)) playerInGame[userId] = gameId; else playerInGame.Add(userId, gameId);
            GlobalDataService.PlayerInGame_R(new InGameInfo { gameid = gameId, online = true, IsInGame = true, roomid = roomId, tableid = tableId, userid = userId });
        }

        public int GetInGameTableID(int userid, int gameid, int roomid)
        {
            if (playerInGame.TryGetValue(userid, out int gid) && gid == gameid 
                && playerInRoom.TryGetValue(userid, out int rid) && rid == roomid 
                && playerInTable.TryGetValue(userid, out int tid) && tables.TryGetValue(gameid, out Dictionary<int, Dictionary<int, GameActorHandler>> games) 
                && games.TryGetValue(roomid, out Dictionary<int, GameActorHandler> rooms) && rooms.TryGetValue(tid, out GameActorHandler tab))
            { return tid; }
            return -1;
        }

        public override void Dispose()
        {
            tables.Clear();
            playerInTable.Clear();
            playerInRoom.Clear();
            playerInGame.Clear();
            if (this.IsDisposed)
            {
                return;
            }
            base.Dispose();
        }
    }
}

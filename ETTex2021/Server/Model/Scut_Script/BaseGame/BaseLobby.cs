using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 游戏 大厅
    /// </summary>
    public class BaseLobby  
    {
        public BaseLobby()
        {
            var trial_play = t_anythingList.GetString("trial_play");
            if (trial_play == "true") _openRobot = true;
            roomCache = new List<BaseRoom>();
        }

        public BaseLogic _logic;
        public List<BaseRoom> roomCache;
        /// <summary>
        /// 对应的游戏ID
        /// </summary>
        public int _gameid = 0;
        /// <summary>
        /// 机器人开启标识
        /// </summary>
        public bool _openRobot = true;
        /// <summary>
        /// 开关游戏
        /// </summary>
        public bool _CloseGame = false;
        public List<tgamelevelinfo> roomList;
        protected List<tjackpot> tjackpotList;

        /// <summary>
        /// 初始化大厅
        /// </summary>
        public virtual async Task<bool> Initi(int gameid)
        {
            _gameid = gameid;
            roomList = await BaseHelper.GetShareAll<tgamelevelinfo>(g => g.gameid == _gameid);
            var jp = await BaseHelper.GetShareAll<tjackpot>(g => g.gameid == _gameid);
            if (jp == null) jp = new List<tjackpot>(); else tjackpotList = jp;
            return true;
        }
        /// <summary>
        /// 15 每个桌子的每个动作等待时间 暂定15秒，若超时，进行默认处理
        /// </summary>
        private int _TurnWaitTime = 15;

        /// <summary>
        /// 操作的等待时间  FJ模式会很长很长的
        /// </summary>
        public int TurnWaitTime
        {
            get { return _TurnWaitTime; }
            set { _TurnWaitTime = value; }
        }

        public void SwitchRobot(bool open)
        {
            _openRobot = open;
        }

        public void SwitchGame(bool open)
        {
            _CloseGame = open;
        }
        public string LoadConfigFile(int levelid)
        {
            string strPath = StartConfigComponent.Instance.ConfigPath + $"/GameConfig/{_gameid}/{levelid}_config.json";
            string strValue = File.ReadAllText(strPath);
            Regex r = new Regex(@"^/\*((?:(?!\*/)[\s\S])*)\*/", RegexOptions.Multiline);
            strValue = r.Replace(strValue, "");
            return strValue;
        }
        //public T LoadConfig<T>(int levelid) where T : BaseSLOTConfig
        //{
        //    string strValue = LoadConfigFile(levelid);
        //    T t = JsonUtils.Deserialize<T>(strValue);
        //    if (t.GlodMultiple == 0)
        //    {
        //        t.GlodMultiple = FactoryCommon.games[_gameid].GlodMultiple;
        //    }
        //    return t;
        //}
        public virtual object LoadGameConfig(int levelid)
        {
            return null;
        }     

        public virtual void OnlineDataLog()
        {
            foreach (var _troom in roomCache)
            {
                int rCount = 0;
                int userCount = _troom.GetOnlineCountTrue();
                tonlineinfoEx.WriteLog(_gameid, _troom._levelid, userCount, rCount);
            }
        }

        // FK公共功能 1.FJ号管理 2.FJ进入

        /// <summary>
        /// 房号对应BaseTable的列表
        /// </summary>
        public ConcurrentDictionary<int, BaseTable> _tablenum2basetable = new ConcurrentDictionary<int, BaseTable>();

   
        public void AddTable(int key, BaseTable tab)
        {
            if (!_tablenum2basetable.TryAdd(key, tab))
                TraceLogEx.Error("add _tableid fial maybe have exist... 201712251358 key:" + key);

        }
        public BaseTable GetTable(int tablenum)
        {
            if (tablenum==0) return null;
            if (_tablenum2basetable.ContainsKey(tablenum))
            {
                return _tablenum2basetable[tablenum];
            }
            return null;
        }

        public List<BaseTable> GetTableByRoomID(int levelid)
        {
            if (levelid == 0) return new List<BaseTable>();
            List<BaseTable> tables = new List<BaseTable>(_tablenum2basetable.Values);
            
            return tables.FindAll(t=>t._levelid==levelid);
        }

        public BaseTable GetEmptySeatTable(int levelid)
        {
            foreach (BaseTable tab in _tablenum2basetable.Values)
            {
                if(tab._levelid == levelid && tab._playerCount  < tab._num_max)
                {
                    return tab;
                }
            }
            return null;
        }
        /// <summary>
        /// 处理过期FJ 或自己释放的FJ
        /// </summary>
        /// <param name="tablenum"></param>
        public void DealDateOver(int tablenum)
        {
            BaseTable _t;
            _tablenum2basetable.TryRemove(tablenum, out _t);
            ToolsEx.ReleaseNum(tablenum);
        }

        /// <summary>
        /// 对这一桌进行释放 
        /// </summary>
        public void ReleaseTable(int levelid, int tid)
        { 
            var component = Game.Scene.GetComponent<TableComponent>();
            if (component != null) component.RemoveTable(_gameid, levelid, tid);
        }
        public int GetTableCount()
        {
            return _tablenum2basetable.Count;
        }
       
        /// <summary>
        /// 获取有位置的桌子
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="levelid"></param>
        /// <returns></returns>
        public virtual List<T> GetHasPosTablesByRoomID<T>(int levelid) where T : BaseTable
        {
            List<BaseTable> tables = GetTableByRoomID(levelid);
            List<T> freetables = new List<T>();
            foreach (var table in tables)
            {
                var p = table._playerCount;
                if (p < table._num_max)
                {
                    freetables.Add(table as T);
                }
            }
            return freetables;
        } 

    }

}

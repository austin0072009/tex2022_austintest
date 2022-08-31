using System;
using System.Collections.Generic;
using System.Reflection;

namespace ETModel.Script.CsScript.Action
{
    public class FactoryCommon
    {

        private static Dictionary<int, BaseLobby> _gameid2Lobby = new Dictionary<int, BaseLobby>();
        private static List<int> _exitGameid = new List<int>();
        public static void Register(int gameid, BaseLobby _blobby)
        {
            _exitGameid.Add(gameid);
            if (!_gameid2Lobby.ContainsKey(gameid)) _gameid2Lobby.Add(gameid, _blobby);
        }

        public static BaseLobby GetLobby(int gameid)
        {
            if (!_gameid2Lobby.ContainsKey(gameid))
            {
                TraceLogEx.Error("Fetal error gameid" + gameid);
                return null;
            }
            return _gameid2Lobby[gameid];
        }

        public static Dictionary<int, BaseSendDataServer> games;
        static long _ms = 0;

        public static void Update()
        {
            foreach (var game in games)
            {
                game.Value.AutoSendDataTry();
            }

            //_ms++;
            // if (_ms > 1000 * 100)
            {   // 变更频率以方便看日志 2020/12/7
                //_ms = 0;
                LogicUpdate();
            }
        }

        private static void LogicUpdate()
        {
            foreach (var _game in games)
            {
                _game.Value.LogicUpdate();
            }
        }

        public static Dictionary<int, BaseSendDataServer> GetGames(string para)
        {
            if (games == null)
            {
                games = new Dictionary<int, BaseSendDataServer>();
                Assembly assembly = Assembly.GetExecutingAssembly();
                bool IsAllServer = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer;
                foreach (Type type in assembly.GetTypes())
                {
                    object[] objects = type.GetCustomAttributes(typeof(GameBootAttribute), false);
                    if (objects.Length == 0 || (!IsAllServer && !para.Contains(((GameBootAttribute)objects[0]).GameID + ".")))
                    {
                        continue;
                    }
                    if (IsAllServer && para != "" && !para.Contains(((GameBootAttribute)objects[0]).GameID + "."))
                    {
                        continue;
                    }
                    BaseSendDataServer obj = type.GetProperty("instance").GetValue(null) as BaseSendDataServer;
                    if (obj != null)
                    {
                        games.Add(((GameBootAttribute)objects[0]).GameID, obj);
                    }
                }
            }
            return games;
        }

        public static void LoadGame(string para)
        {
            //if (!para.EndsWith(".")) para += ".";
            var games = GetGames(para);
            foreach (var game in games)
            {
                game.Value.StartServer(game.Key);
            }
        }
    }
}

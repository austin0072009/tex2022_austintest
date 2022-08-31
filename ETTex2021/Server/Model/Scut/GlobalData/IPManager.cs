using System;
using System.Collections.Generic;
using System.Net;

namespace ETModel
{
    public class IPManager
    {
        public Action action;
        private static IPManager ins;
        public static IPManager Ins { get { if (ins == null) ins = new IPManager(); return ins; } }
        private IPManager()
        {
            Reload();
        }
        public Dictionary<AppType, List<IPEndPoint>> IPGroups = new Dictionary<AppType, List<IPEndPoint>>();
        public Dictionary<int, IPEndPoint> AppIps = new Dictionary<int, IPEndPoint>();
        public void Reload()
        {
            if (IPGroups == null || IPGroups.Count == 0)
            {
                if (StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer)
                {
                    InitConfig(AppType.Map, StartConfigComponent.Instance.StartConfig);

                    //var ip = StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint;
                    //IPGroups.Add(AppType.Map, new List<IPEndPoint>() { ip });
                    //if (!AppIps.ContainsKey(StartConfigComponent.Instance.StartConfig.AppId)) AppIps.Add(StartConfigComponent.Instance.StartConfig.AppId, ip);
                }
                else
                {
                    //var mapip = StartConfigComponent.Instance.MapConfigs[0].GetComponent<InnerConfig>().IPEndPoint;
                    //IPGroups.Add(AppType.Map, new List<IPEndPoint>() { mapip });
                    //if (!AppIps.ContainsKey(StartConfigComponent.Instance.MapConfigs[0].AppId)) AppIps.Add(StartConfigComponent.Instance.MapConfigs[0].AppId, mapip);
                    //var games = new List<IPEndPoint>();
                    //IPGroups.Add(AppType.ScutGame, games);
                    InitConfig(AppType.Map, StartConfigComponent.Instance.MapConfigs[0]);
                    foreach (var item in StartConfigComponent.Instance.ScutGameConfigs)
                    {
                        InitConfig(item.AppType, item);
                        //IPEndPoint ip = item.GetComponent<InnerConfig>().IPEndPoint;
                        //if (!AppIps.ContainsKey(item.AppId)) AppIps.Add(item.AppId, ip);
                        //if (games.Contains(ip)) games.Add(ip);
                    }
                    InitConfig(AppType.RedisDB, StartConfigComponent.Instance.RedisDBConfig);
                }
            }
        }
        public void InitConfig(AppType type, StartConfig config)
        {
            IPEndPoint ip = config.GetComponent<InnerConfig>().IPEndPoint;
            if (!IPGroups.TryGetValue(type, out List<IPEndPoint> ips)) { ips = new List<IPEndPoint>(); IPGroups.Add(type, ips); }
            if (!ips.Contains(ip)) ips.Add(ip);
            AppIps[config.AppId] = ip;
        }
        public void SendMessage(IRequest request, int appid = 0)
        {
            if (appid > 0) { if (AppIps.TryGetValue(appid, out IPEndPoint ip)) ip.SendRpc(request); return; }
            SendToMap(request);
            SendToGame(request);
        }
        public void SendMessage(IRequest tomap, IRequest togame)
        {
            SendToMap(tomap);
            SendToGame(togame);
        }
        public void SendToMap(IRequest tomap)
        {
            if (IPGroups.TryGetValue(AppType.Map, out List<IPEndPoint> ips))
            {
                foreach (var ip in ips) ip.SendRpc(tomap);
            }
        }
        public void SendToGame(IRequest togame)
        {
            if (IPGroups.TryGetValue(AppType.ScutGame, out List<IPEndPoint> ips))
            {
                foreach (var ip in ips) ip.SendRpc(togame);
            }
        }
    }
}

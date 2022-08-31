using ETModel.Framework.Common.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;

namespace ETModel
{
    [ObjectSystem]
    public class StartConfigComponentSystem : AwakeSystem<StartConfigComponent, string, int>
    {
        public override void Awake(StartConfigComponent self, string a, int b)
        {
            self.Awake(a, b);
        }
    }

    public class StartConfigComponent : Component
    {
        public static StartConfigComponent Instance { get; private set; }

        private Dictionary<int, StartConfig> configDict;

        private Dictionary<int, IPEndPoint> innerAddressDict = new Dictionary<int, IPEndPoint>();

        public StartConfig StartConfig { get; private set; }

        public StartConfig DBConfig { get; private set; }

        public StartConfig RealmConfig { get; private set; }

        public StartConfig LocationConfig { get; private set; }

        public List<StartConfig> MapConfigs { get; private set; }

        public List<StartConfig> GateConfigs { get; private set; }

        public StartConfig RedisDBConfig { get; private set; }


        public List<StartConfig> ScutGameConfigs { get; private set; }

        public string ConfigPath = "";
        public void Awake(string path, int appId)
        {
            Console.WriteLine("StartConfigComponent:" + path);
            Instance = this;
            var dirs = path.Split("/");
            Console.Write("config dirs:" +JsonUtils.Serialize(dirs));
            for (int i = 0; i < dirs.Length; i++)
            {
                ConfigPath += dirs[i] + "/";
                if (dirs[i].ToLower().Equals("config")) break;
            }
            ConfigPath = ConfigPath.Substring(0, ConfigPath.Length - 1);
            this.configDict = new Dictionary<int, StartConfig>();
            this.MapConfigs = new List<StartConfig>();
            this.GateConfigs = new List<StartConfig>();
            this.ScutGameConfigs = new List<StartConfig>();

            string[] ss = File.ReadAllText(path).Split('\n');
            foreach (string s in ss)
            {
                string s2 = s.Trim();
                if (s2 == "")
                {
                    continue;
                }
                try
                {
                    StartConfig startConfig = MongoHelper.FromJson<StartConfig>(s2);
                    this.configDict.Add(startConfig.AppId, startConfig);

                    InnerConfig innerConfig = startConfig.GetComponent<InnerConfig>();
                    if (innerConfig != null)
                    {
                        this.innerAddressDict.Add(startConfig.AppId, innerConfig.IPEndPoint);
                    }

                    if (startConfig.AppType.Is(AppType.Realm))
                    {
                        this.RealmConfig = startConfig;
                    }

                    if (startConfig.AppType.Is(AppType.Location))
                    {
                        this.LocationConfig = startConfig;
                    }

                    if (startConfig.AppType.Is(AppType.DB))
                    {
                        this.DBConfig = startConfig;
                    }

                    if (startConfig.AppType.Is(AppType.Map))
                    {
                        this.MapConfigs.Add(startConfig);
                    }

                    if (startConfig.AppType.Is(AppType.Gate))
                    {
                        this.GateConfigs.Add(startConfig);
                    }

                    if (startConfig.AppType.Is(AppType.RedisDB))
                    {
                        this.RedisDBConfig = startConfig;
                    }


                    if (startConfig.AppType.Is(AppType.ScutGame))
                    {
                        this.ScutGameConfigs.Add(startConfig);
                    }
                }
                catch (Exception e)
                {
                    Log.Error($"config错误: {s2} {e}");
                }
            }

            this.StartConfig = this.Get(appId);
        }

        public override void Dispose()
        {
            if (this.IsDisposed)
            {
                return;
            }
            base.Dispose();

            Instance = null;
        }

        public StartConfig Get(int id)
        {
            try
            {
                return this.configDict[id];
            }
            catch (Exception e)
            {
                throw new Exception($"not found startconfig: {id}", e);
            }
        }

        public IPEndPoint GetInnerAddress(int id)
        {
            try
            {
                return this.innerAddressDict[id];
            }
            catch (Exception e)
            {
                throw new Exception($"not found innerAddress: {id}", e);
            }
        }

        public StartConfig[] GetAll()
        {
            return this.configDict.Values.ToArray();
        }

        public int Count
        {
            get
            {
                return this.configDict.Count;
            }
        }
    }
}

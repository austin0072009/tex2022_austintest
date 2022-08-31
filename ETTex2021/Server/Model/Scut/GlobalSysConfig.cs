using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Sns;
using ETModel.Framework.Model;
using ETModel.Script.Model;
using Model.Scut_Script.Common;
using Serialize.Linq.Serializers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class GlobalSysConfig
    {
        private static List<tsysconfig> tsysconfigs = new List<tsysconfig>();
        public static async void LoadConfig()
        {
            tsysconfigs = await BaseHelper.GetShareAll<tsysconfig>();
            if (tsysconfigs == null) tsysconfigs = new List<tsysconfig>();
        }

        public static string GetValue(string key,string defaultValue="")
        {
            var config = tsysconfigs.Find(t => t.Key == key);
            if (config == null) return defaultValue;
            else return config.Val;
        }
        public static T GetValue<T>(string key)
        {
            try
            {
                var config = tsysconfigs.Find(t => t.Key == key);
                if (config == null) return default(T);
                else return JsonUtils.Deserialize<T>(config.Val);
            }catch (Exception ex)
            {
                TraceLogEx.Error($"获取全局配置【{key}】错误：{ex.Message}");
                return default(T);
            }
            
        }

    }
}
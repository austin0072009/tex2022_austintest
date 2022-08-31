using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using System;
using System.Collections.Generic;

namespace ETModel
{
    public class AppInnerInfo : cs_base, IBaseInfo
    {
        public bool isreturn { get; set; }
    }
    public class RedisIsSuccess : AppInnerInfo { public int appid; }
    public class RedisSuccess : AppInnerInfo { }
    [MessageHandler(AppType.AllServer)]
    public class A2A_AppInfoRequestHandler : InnerRequestHandler<A2A_AppInfoRequest, A2A_AppInfoResponse, AppInnerInfo>
    {
        protected Dictionary<string, Func<string, string>> commands = new Dictionary<string, Func<string, string>>();
        public A2A_AppInfoRequestHandler()
        {
            commands.Add(typeof(RedisIsSuccess).Name, RedisIsSuccess);
            commands.Add(typeof(RedisSuccess).Name, RedisSuccess);
        }

        private string RedisIsSuccess(string json)
        {
            if (AppType.AllServer != StartConfigComponent.Instance.StartConfig.AppType && AppType.RedisDB != StartConfigComponent.Instance.StartConfig.AppType) return null;
            var data = JsonUtils.Deserialize<RedisIsSuccess>(json);
            if (CacheFactory.RedisDBSuccess)
            {
                var success = new A2A_AppInfoRequest { Message = JsonUtils.Serialize(new RedisSuccess()) };
                IPManager.Ins.SendMessage(success, data.appid);
            }
            return null;
        }
        private string RedisSuccess(string arg)
        {
            var actions = Game.Scene.GetComponent<RedisSuccessComponent>()?.actions;
            if (actions != null)
            {
                foreach (var action in actions) action();
                actions.Clear();
            }
            return null;
        }
        protected async override ETTask Run(AppInnerInfo info, string msg, A2A_AppInfoResponse response, Action reply)
        {
            if (info != null && commands.TryGetValue(info.fn, out Func<string, string> fun))
            {
                var rsp = fun(msg);
                if (info.isreturn)
                {
                    response.Message = rsp;
                    reply();
                }
            }
            await ETTask.CompletedTask;
        }
    }
}

using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;

namespace ETModel
{
    [MessageHandler(AppType.AllServer)]
    public class Any2S_USSyncRequestHandler : SyncRequestHandler<Any2S_USSyncRequest>
    {
        public async override ETTask Run(Any2S_USSyncRequest request)
        {
            var status = JsonUtils.Deserialize<UserStatus>(request.status);
            if (status != null && UserStatusCache.Ins.cache.ContainsKey(status.UserID)) UserStatusCache.Ins.UpdateCache(status);
        }
    }
}

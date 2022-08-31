using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;

namespace ETModel
{
    [MessageHandler(AppType.Map)]
    public class Any2M_USSyncRequestHandler : SyncRequestHandler<Any2M_USSyncRequest>
    {
        public async override ETTask Run(Any2M_USSyncRequest request)
        {
            var status = JsonUtils.Deserialize<UserStatus>(request.status);
            if (status != null&& UserStatusCache.Ins.cache.ContainsKey(status.UserID)) UserStatusCache.Ins.UpdateCache(status);
        }
    }
}

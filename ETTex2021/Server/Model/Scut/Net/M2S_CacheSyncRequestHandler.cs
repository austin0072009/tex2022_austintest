using Model.Scut_Script.Common;
using System;

namespace ETModel
{
    [MessageHandler(AppType.ScutGame)]
    public class M2S_CacheSyncRequestHandler : SyncRequestHandler<M2S_CacheSyncRequest>
    {
        public async override ETTask Run(M2S_CacheSyncRequest request)
        {
            GameEntityCache.Instance.Update(Type.GetType(request.TName), request.key, request.Content);
        }
    }
}

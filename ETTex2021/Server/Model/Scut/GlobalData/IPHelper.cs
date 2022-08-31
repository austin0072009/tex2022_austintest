using System.Net;
using System.Threading.Tasks;

namespace ETModel
{
    public static class IPHelper
    {
        public static void SendRpc(this IPEndPoint self, IRequest request)
        {
            if (self == null || request == null) return;
            Game.Scene.GetComponent<NetInnerComponent>().Get(self)?.SendRpc(request);
        }
        public static void Send(this IPEndPoint self, IRequest request)
        {
            if (self == null || request == null) return;
            Game.Scene.GetComponent<NetInnerComponent>().Get(self)?.Send(request);
        }
        public async static Task<Response> Call<Response>(this IPEndPoint self, IRequest request) where Response : IResponse
        {
            if (self == null || request == null) return default;
            Session session = Game.Scene.GetComponent<NetInnerComponent>().Get(self);
            if (session != null)
            {
                var rsp = await session.Call(request);
                if (rsp != null) return (Response)rsp;
            }
            return default;
        }
    }
}

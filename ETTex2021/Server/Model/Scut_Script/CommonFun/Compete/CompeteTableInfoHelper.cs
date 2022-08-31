using ETModel.Framework.Common.Serialization;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public static class CompeteTableInfoHelper
    {
        public static void Send(this CompeteTableInfo self, int gameid, string msg, int userid = 0, string fn = "DealDataEx")
        {
            var session = Game.Scene.GetComponent<NetInnerComponent>().Get(self.IPEndPoint);
            session.Call(new Lobby_CommonFun2Request { _g = gameid, funname = fn, para = msg, UserID = userid });
        }
        public async static Task<Response> Call<Response>(this CompeteTableInfo self, int gameid, string msg, int userid = 0, string fn = "DealDataEx")
        {
            var session = Game.Scene.GetComponent<NetInnerComponent>().Get(self.IPEndPoint);
            var result = (Lobby_CommonFun2Reply)await session.Call(new Lobby_CommonFun2Request { _g = gameid, funname = fn, para = msg, UserID = userid });
            if (result != null && result.Message != null) return JsonUtils.Deserialize<Response>(result.Message);
            return default;
        }
      

    }
}

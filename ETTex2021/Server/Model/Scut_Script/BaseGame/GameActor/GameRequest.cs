using ETModel;
using ETModel.Framework.Game.Contract.Action;

namespace ETModel.Script.CsScript.Action
{
    public class GameRequest:GameData
    {
        //public IActorLocationRequest request;
        public cs_base csbase;
        public string data;
        public GameRequest(int userid, int rpcid, cs_base csbase, string data)
        {
            this.csbase = csbase;
            this.userid = userid;
            this.RpcId = rpcid;
            //this.request = request;
            this.data = data;
        }

    }
}

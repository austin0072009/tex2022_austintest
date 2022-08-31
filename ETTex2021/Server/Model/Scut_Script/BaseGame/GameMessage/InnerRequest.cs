using ETModel.Framework.Game.Contract.Action;

namespace Model.Scut_Script.GameMessage
{
    public class InnerRequest : IGameRequest
    {
        public int InnerId;
        public InnerRequest(int InnerId) {
            this.InnerId = InnerId;
        }
    }
    public class InnerCommand : InnerRequest
    {
        public int userid;
        public cs_base cs;
        public string content;
        public InnerCommand(int id,int userid,cs_base cs,string content):base(id) {
            this.userid = userid;
            this.cs = cs;
            this.content = content;
        }
    }
    public class ProcessEnd : InnerRequest
    {
        public int ProcessIndex;
        public ProcessEnd(int innerid, int index) : base(innerid) {
            ProcessIndex = index;
        }
    }
}

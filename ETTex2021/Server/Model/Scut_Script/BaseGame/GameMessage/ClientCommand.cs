using ETModel;
using System;
namespace Model.Scut_Script.GameMessage
{
    public class ClientCommand<Request, Response> : IGameRequest where Response : IResponse where Request : IRequest
    {
        public Request message;
        public Response response;
        public Action reply;
        public ClientCommand(Request message, Response response, Action reply)
        {
            this.message = message;
            this.response = response;
            this.reply = reply;
        }
    }
    public class ClientRequest : IGameRequest
    {
        public Session session;
        public object message;
        public ClientRequest(Session session, object message)
        {
            this.session = session;
            this.message = message;
        }
    }
}

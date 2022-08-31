using ETModel.Script.CsScript.Action;
using System;

namespace ETModel
{
    [MessageHandler(AppType.ScutGame)]
    public class Lobby2GameDealDataExRequestHandler : AMRpcHandler<Lobby2game_DealDataExRequest, Lobby2game_DealDataExReply>
    {
        protected override async ETTask Run(Session session, Lobby2game_DealDataExRequest request, Lobby2game_DealDataExReply response, Action reply)
        {
            if (CommonFun.IsTableMsg(session, request.UserID, request.RpcId, request)) return; 
            try
            {
                string btt3 = await FactoryBrigeHelper.DealDataEx(request._g, request.UserID, request.para);
              
                response.Message = btt3; 
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "20212090313");
                response.Error = ErrorCode.ERR_ReadDBError;
            }
            //Game.Scene.GetComponent<TableComponent>()?.PrintUserStatusError(request.UserID, request.para);
            reply();
        }

    }
}

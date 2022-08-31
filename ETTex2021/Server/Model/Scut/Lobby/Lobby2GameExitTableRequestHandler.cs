using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;

namespace ETModel
{
    [MessageHandler(AppType.ScutGame)]
    public class Lobby2GameExitTableRequestHandler : AMRpcHandler<Lobby2game_ApplyExitTableRequest, Lobby2game_ApplyExitTableReply>
    {
        protected override async ETTask Run(Session session, Lobby2game_ApplyExitTableRequest request, Lobby2game_ApplyExitTableReply response, Action reply)
        {
             
            if (_tgamelist.Contains(request._g))
            {
                try
                {
                    bool btt3 = await  FactoryBrigeHelper.ApplyExitTable(request._g, request.UserID, request.tableid);

                    response.Message = btt3 ? "1" : "0";
                }
                catch (Exception ex)
                {
                    TraceLogEx.Error(ex, "2021090313");
                    response.Error = ErrorCode.ERR_ReadDBError;
                }
            }
            else
            {
                var component = Game.Scene.GetComponent<TableComponent>();
                if (component != null)
                {
                    var handler = component.GetTableHandler(request.UserID);
                    if (handler != null)
                    { 
                        cs_applyexittable msg = new cs_applyexittable() { _g = request._g, fn= "cs_applyexittable", gameid = request._g   };
                        string para = JsonUtils.Serialize(msg);
                        if (handler.IsTableCommond("cs_applyexittable"))
                        { 
                            handler.Handle(session, new GameRequest(request.UserID, request.RpcId, msg, para));
                            return ;
                        }
                    }
                }
            }
            //Game.Scene.GetComponent<TableComponent>()?.PrintUserStatusError(request.UserID, request.para);
            reply();
        }
        List<int> _tgamelist = new List<int>() { 10005, 1000, 401, 959, 51 , 10003 , 52 , 8003 , 8002 , 8004 , 8001, 103, 100, 104, 102 };

    }
}

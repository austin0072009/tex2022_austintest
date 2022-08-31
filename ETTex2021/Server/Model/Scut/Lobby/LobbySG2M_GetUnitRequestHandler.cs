using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using System;

namespace ETModel
{
    [MessageHandler(AppType.Map)]
    public class LobbySG2M_GetUnitRequestHandler : AMRpcHandler<SG2M_GetUnitResponse, M2SG_GetUnitResponse>
    {
        int count = 0;
        protected override async ETTask Run(Session session, SG2M_GetUnitResponse request, M2SG_GetUnitResponse response, Action reply)
        { 
            //Console.WriteLine(JsonUtils.Serialize(await BaseHelper.GetBase<tUser>(2)));

            //Console.Write($"\n 收到Lobby SG2M_GetUnitResponse... 获取请求：{request.userid}-------------");
            response.Message = "1";
            response._unit = FactoryBrigeHelper.GetUnitInMap(request.userid);
            reply();
        }

    }
}

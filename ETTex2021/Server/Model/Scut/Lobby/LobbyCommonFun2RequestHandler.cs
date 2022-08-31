using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using Model.Scut_Script.Common;
using System;
using System.Threading.Tasks;

namespace ETModel
{
    [MessageHandler(AppType.ScutGame)]
    public class LobbyCommonFun2RequestHandler : AMRpcHandler<Lobby_CommonFun2Request, Lobby_CommonFun2Reply>
    {
        protected override async ETTask Run(Session session, Lobby_CommonFun2Request request, Lobby_CommonFun2Reply response, Action reply)
        {
            Console.WriteLine($"收到LobbyCommonFunRequest... 获取请求：{request.para},");
            if (CommonFun.IsTableMsg(session, request.UserID, request.RpcId, request)) return;
            //if (!CacheFactory.RedisDBSuccess) { Log.Debug($" Lobby boot error!  LobbyCommonFunRequest"); return ; }
            try
            {
                Type pt = typeof(FactoryBrigeHelper);

                string method = request.funname;
                var alltryre = pt.GetMethod(method);

                object[] args = new object[3];
                if (method.Equals("EnterRobot")) args = new object[4];
                args[0] = request._g;
                args[1] = request.UserID;
                switch (method)
                {
                    //case "EnterRoom":
                    //    TraceLogEx.Error("need del undel enterroom.");
                    //    return;
                    case "EnterRobot":
                        var robot = JsonUtils.Deserialize<cs_enterrobot_tex>(request.para);
                        args[2] = robot.levelid;
                        args[3] = robot.tableid;
                        break;
                    case "DealExitTable":
                        args[2] = JsonUtils.Deserialize<cs_dealexittable>(request.para);
                        break;
                    case "ExitRoomByDisConnect":
                        args[2] = JsonUtils.Deserialize<UserStatus>(request.para);
                        break;
                    case "EnterRoomTable":
                        args[2] = JsonUtils.Deserialize<cs_enterroomtable>(request.para);
                        break;
                    case "EnterRoom":
                        args[2] = JsonUtils.Deserialize<cs_enterroom>(request.para);
                        break;
                    case "SlotEnterRoom":
                      //  args[2] = JsonUtils.Deserialize<cs_slotentertable>(request.para);
                        break;
                    case "DealDataEx":
                        CommonFun.initDealDataEx(request, args, "gameid", request.para);
                        break;
                    case "RemoveUserCache":
                        GameEntityCache.Instance.Rmove<tUser>(request.UserID);
                        response.Message = "1";
                        reply();
                        return;
                    default:
                        args[2] = request.para;
                        break;
                }

                object _tobj = alltryre.Invoke(null, args);

                switch (method)
                {
                    case "DealDataEx"://Task<string> 
                    case "EnterRoomTable"://Task<string>  
                    case "EnterRoom"://Task<string> 
                    case "ExitRoom":// Task<string> 
                    case "EnterRobot":
                    case "SlotEnterRoom":
                        Task<string> tt3 = (Task<string>)_tobj;
                        await tt3;
                        response.Message = tt3.Result;
                        break;
                    case "ExitRoomByDisConnect"://void 
                        response.Message = "1";
                        break;
                    case "UpdateUserStatusByUserID":
                        bool btt3 = (bool)_tobj;
                        response.Message = btt3 ? "1" : "0";
                        break;
                    case "DealExitTable":// void
                        response.Message = "1";
                        break;
                    case "LoadGameConfig":// string
                        response.Message = (string)_tobj;
                        break;
                    default:
                        TraceLogEx.Error("fetel erro  undeal method:"+ method);
                        break;
                } 
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2020090313");
                response.Error = ErrorCode.ERR_ReadDBError;
            }
            //Game.Scene.GetComponent<TableComponent>()?.PrintUserStatusError(request.UserID, request.para);
            reply();
        }

    }
}

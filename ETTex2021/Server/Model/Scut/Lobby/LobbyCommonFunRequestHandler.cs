using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ETModel
{
    [MessageHandler(AppType.ScutGame)]
	public class LobbyCommonFunRequestHandler : AMRpcHandler<Lobby_CommonFunRequest, Lobby_CommonFunReply>  
	{
		protected override async ETTask Run(Session session, Lobby_CommonFunRequest request, Lobby_CommonFunReply response, Action reply)
		{
			Console.Write($"\n 收到Lobby CommonFunRequest... 获取请求：{request.funname}-------------"); 
			try
			{
				Type pt = typeof(FactoryBrigeHelper);

				string method = request.funname;
				var alltryre = pt.GetMethod(method);

				object[] args = new object[2];
				args[0] = request._g;
				args[1] = request.para;
				object _tobj = alltryre.Invoke(null, args);
				switch (method)
				{
					case "CheckOpenRobot"://string
						//Task<object> tt = (Task<object>)_tobj;
						//_tobj = tt.Result; 
						response.Message = Convert.ToString(_tobj);
						break;
					case "GetGameLevelList":// Task<List<RoomInfoSD>>
                        Task<List<RoomInfoSD>> tt = (Task<List<RoomInfoSD>>)_tobj;
						await tt;
                        response.Message = JsonUtils.Serialize(tt.Result);
						break;
					case "DismissTableGM"://void
						response.Message = "1";
						break;
					case "CreateTableGM"://Task<string>
						Task<string> tt3 = (Task<string>)_tobj;
						await tt3;
						response.Message = tt3.Result;
						break;
					case "AddWatchRobot":// Task<string>
						Task<string> tt4 = (Task<string>)_tobj;
						await tt4;
						response.Message = tt4.Result;
						break;
					case "ExitRobotFromGM"://Task<int>
						Task<int> tt5 = (Task<int>)_tobj;
						await tt5;
						response.Message = Convert.ToString(tt5.Result);
						break;
					default:
						//Task<object> tt = (Task<object>)_tobj;
						//_tobj = tt.Result;
						break;
				}
				//switch (method)
				//{
				//	case "AddWatchRobot":
				//	case "CreateTableGM":
				//	case "DismissTableGM":
				//	case "CheckOpenRobot":

				//		response.Message = Convert.ToString(_tobj);
				//		break;
				//	default:
				//		response.Message = JsonUtils.Serialize(_tobj);
				//		break;
				//}
			}
			catch (Exception ex)
			{
				TraceLogEx.Error(ex, "202009031321");
				response.Error = ErrorCode.ERR_ReadDBError;
			}
			reply();
		}
		 
	}
}

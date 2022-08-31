using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.CsScript.Action;
using GameSystem;
using System;
using System.Collections.Generic;

namespace ETModel
{
    [ActorMessageHandler(AppType.Map)]
    public class C2SS_ActorRPCRequestHandler : AMActorLocationRpcHandler<Unit, C2SS_ActorRPCRequest, SS2C_ActorRPCReply>
    {
        protected override async ETTask Run(Unit _unit, C2SS_ActorRPCRequest request, SS2C_ActorRPCReply response, Action reply)
        {
            //Console.Write($"IP: {_unit.Remoteaddress}");
            if (string.IsNullOrEmpty(request.Request))
            {
                TraceLogEx.Error("C2SS_ActorRPCRequest request is null.");
                reply();
                await ETTask.CompletedTask;
                return;
            }
            //await Task.Run(() =>
            //{
            //cs_base cs; Type type;
            //if (request.Request != null && (cs = JsonUtils.Deserialize<cs_base>(request.Request)) != null && !string.IsNullOrWhiteSpace(cs.fn) && cs.fn.StartsWith("cs_") && (type = GetCSTypes(cs.fn.Replace("cs_", "sc_"))) != null) Console.WriteLine("预计返回类型[" + type.FullName + "]");
            _unit.GetComponent<UnitGateComponent>().IsDisconnect = false;
            string data = await ActionFactory.Request(request.Request, _unit.Remoteaddress, request.ActorId, (int)_unit.UserID);
            if (!string.IsNullOrWhiteSpace(data))
            {
                response.Message = data;
            }
            else
            {
                //int errorcode = -888999;
                Console.WriteLine("消息[" + request.GetObjectInfo() + "]处理结果为空");
                sc_base senddata = new sc_base { result = -888999, cc = request.Request.GetIntFromJsonString("cc") };
                //if (request.Request != null && (cs = JsonUtils.Deserialize<cs_base>(request.Request)) != null && !string.IsNullOrWhiteSpace(cs.fn) && cs.fn.StartsWith("cs_") && (type = GetCSTypes(cs.fn.Replace("cs_", "sc_"))) != null)
                //senddata = (sc_base)Activator.CreateInstance(type);
                //senddata.result = errorcode;
                cs_base cs; Type type;
                if (request.Request != null && (cs = JsonUtils.Deserialize<cs_base>(request.Request)) != null && !string.IsNullOrWhiteSpace(cs.fn) && cs.fn.StartsWith("cs_")) senddata.fn = cs.fn.Replace("cs_", "sc_");
                response.Message = JsonUtils.Serialize(senddata);

            }
            reply();
            //});

            await ETTask.CompletedTask;
        }
        Dictionary<string, Type> types = new Dictionary<string, Type>();
        Type GetCSTypes(string fn)
        {
            if (types == null || types.Count == 0)
            {
                var subtypes = CommonFun.GetSubClass(typeof(sc_base));
                for (int i = 0; i < subtypes.Count; i++) if (!types.ContainsKey(subtypes[i].Name)) types.Add(subtypes[i].Name, subtypes[i]);
            }
            types.TryGetValue(fn, out Type type);
            return type;
        }

        //private object _obj = new object();
        //protected override async ETTask Run(Unit _unit, C2SS_ActorRPCRequest request, SS2C_ActorRPCReply response, Action reply)
        //{
        //	//Console.Write($"IP: {_unit.Remoteaddress}");
        //	await Task.Run(() =>
        //	{
        //		long key = IdGenerater.GenerateUniqueKey();
        //		try
        //		{ 
        //			{
        //				SS2C_ActorRPCReply response2 = response;
        //				Action reply2 = reply;
        //				unidata.Add(key, "");
        //				object[] objArr = new object[5] { request.Request, _unit.Remoteaddress, request.ActorId, (int)_unit.UserID, key };
        //				OneThreadSynchronizationContext.Instance.Post(PostMessage, objArr);
        //				long waitsecond = 0;
        //				string _data = "";
        //				unidata.TryGetValue(key, out _data);
        //				while (string.IsNullOrEmpty(_data))
        //				{
        //					Thread.Sleep(1);
        //					waitsecond++;
        //					if (waitsecond >= 9000)
        //					{
        //						TraceLogEx.Error("202009031421 timeout 9000 :" + request.Request);
        //						response2.Message = "";
        //						reply2();
        //						unidata.Remove(key);
        //						break;
        //					}
        //					unidata.TryGetValue(key, out _data);
        //				}
        //				if (_data == null) _data = "";
        //				response2.Message = _data;
        //				reply2();
        //				string _d;
        //				unidata.TryRemove(key, out _d);
        //			}
        //		}
        //		catch (Exception ex)
        //		{
        //			TraceLogEx.Error(ex, "202009031359");
        //		}
        //	});
        //	await ETTask.CompletedTask;
        //}
        //private static ConcurrentDictionary<long, string> unidata = new ConcurrentDictionary<long, string>();

        //private void PostMessage(object arr)
        //{
        //	object[] objArr = new object[4];
        //	objArr = (object[])arr;
        //	string Request = (string)objArr[0];
        //	string Remoteaddress = (string)objArr[1];
        //	long ActorId = (long)objArr[2];
        //	int UserID = (int)objArr[3];
        //	long key = (long)objArr[4];
        //	try
        //	{
        //		string data = ActionFactory.Request(Request, Remoteaddress, ActorId, (int)UserID);
        //		if (unidata.ContainsKey(key)) unidata[key] = data;
        //	}
        //	catch (Exception ex)
        //	{
        //		TraceLogEx.Error(ex, "202009031420");
        //	}
        //	//await ETTask.CompletedTask;
        //}
    }
}
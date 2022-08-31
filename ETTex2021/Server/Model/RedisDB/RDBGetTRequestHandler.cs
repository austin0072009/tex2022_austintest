using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Framework.Game.Sns;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
    public class RDBGetTRequestHandler : AMRpcHandler<RedisDB_GetTRequest, RedisDB_GetTReply>
    {
        Dictionary<int, Dictionary<string, KeyValuePair<MethodInfo, ParameterInfo[]>>> methods = new Dictionary<int, Dictionary<string, KeyValuePair<MethodInfo, ParameterInfo[]>>>();
        Type helper = typeof(BaseBrigeHelper);

        public KeyValuePair<MethodInfo, ParameterInfo[]> GetMethod(int personal, string tname)
        {
            if (!methods.TryGetValue(personal, out Dictionary<string, KeyValuePair<MethodInfo, ParameterInfo[]>> tmothed))
            {
                if (personal >= 0 && personal < 4) { tmothed = new Dictionary<string, KeyValuePair<MethodInfo, ParameterInfo[]>>(); methods.Add(personal, tmothed); }
                else throw new Exception("参数[personal:" + personal + "]错误");
            }
            if (!tmothed.TryGetValue(tname, out KeyValuePair<MethodInfo, ParameterInfo[]> info))
            {
                MethodInfo method = GetMethodInfo(personal);
                info = new KeyValuePair<MethodInfo, ParameterInfo[]>(method.MakeGenericMethod(Type.GetType("ETModel.Script.Model." + tname)), method.GetParameters());
                tmothed.Add(tname, info);
            }
            return info;
        }

        MethodInfo GetMethodInfo(int personal)
        {
            if (personal == 0) return helper.GetMethod("GetShareT");
            else if (personal == 1) return helper.GetMethod("GetBaseT");
            else if (personal == 2) return helper.GetMethod("GetShareDB");
            else return helper.GetMethod("GetBaseDB");
        }
        int count = 0;
        protected override async ETTask Run(Session session, RedisDB_GetTRequest request, RedisDB_GetTReply response, Action reply)
        {
            Console.WriteLine($"收到DB 获取请求：{request.idx},{count++}");
            if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!RedisDB_GetTRequest"); return; }
            try
            {
                var mp = GetMethod(request.personal, request.TName);
                var obj = mp.Key.Invoke(null, CommonFun.GetParams(mp.Value, request.idx));
                if (request.personal < 2 && obj == null && request.TName.Equals(typeof(tUser).Name))
                {
                    obj = BaseBrigeHelper.GetBaseDB<tUser>(Convert.ToInt32(request.idx));
                    if (obj != null)
                    {
                        BaseBrigeHelper.AddOrUpdateBase((tUser)obj);
                        var user = await SnsManager.GetUserInfoByUserId(Convert.ToInt32(request.idx));
                        string name = string.IsNullOrWhiteSpace(user.RealName) ? "Palyer_" + ToolsEx.GetRandomSys(1000, 9999) : user.RealName;
                        cs_create1005 _creator = new cs_create1005() { _Sex = 1, HeadID = ToolsEx.GetRandomSys(1,13) + ".jpg", NickName = name, Pid = user.PassportId, RetailID = user.RetailID,ActiveCode = user.ActiveCode };
                        string str = await AccountHelper.Creater1005(_creator, "", Convert.ToInt32(request.idx), (tUser)obj);

                        //((tUser)_tobj).Gold = 9999999;
                        //BaseBrigeHelper.AddOrUpdateBase<tUser>((tUser)_tobj);
                    }
                }
                response.Message = JsonUtils.Serialize(obj);// $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";

                //string tname = "ETModel.Script.Model." + request.TName;
                //var t = Type.GetType(tname);
                ////if (t is BaseEntity)
                //{
                //    Type pt = typeof(BaseBrigeHelper);

                //    string method = "";
                //    if (request.personal == 1) method = "GetBaseT";
                //    else method = "GetShareT";

                //    var alltryre = pt.GetMethod(method);
                //    alltryre = alltryre.MakeGenericMethod(t);
                //    object[] args = CommonFun.GetParams(alltryre.GetParameters(), request.idx);
                //    //args[0] = request.idx.ToString();
                //    object _tobj = null;
                //    //_tobj = alltryre.Invoke(null, args);
                //    try { _tobj = alltryre.Invoke(null, args); } catch (Exception ex) { }
                //    if (_tobj == null && t == typeof(tUser))
                //    {
                //        _tobj = BaseBrigeHelper.GetBaseDB<tUser>(request.idx);
                //        if (_tobj != null)
                //        {
                //            var user = SnsManager.GetUserInfoByUserId((int)request.idx);
                //            string name = string.IsNullOrWhiteSpace(user.RealName) ? "user_" + request.idx : user.RealName;
                //            cs_create1005 _creator = new cs_create1005() { _Sex = 1, HeadID = "17.png", NickName = name, Pid = user.PassportId, RetailID = user.RetailID };
                //            string str = await AccountHelper.Creater1005(_creator, "", (int)request.idx, (tUser)_tobj);

                //            //((tUser)_tobj).Gold = 9999999;
                //            //BaseBrigeHelper.AddOrUpdateBase<tUser>((tUser)_tobj);
                //        }
                //    }
                //    response.Message = JsonUtils.Serialize(_tobj);// $"RedisDB:{dbComponent.InstanceId}  从数据库返回的数据 ";
                //}
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "202009032");
                response.Error = ErrorCode.ERR_ReadDBError;
            }
            reply();
        }

    }
}

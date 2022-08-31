using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using Model.Scut_Script.Common;
using System;
using System.Collections.Generic;
using System.Net;
using System.Reflection;

namespace ETModel
{
    [MessageHandler(AppType.RedisDB)]
    public class RedisDBUpdateDataHandler : AMRpcHandler<RedisDB_UpdateDataRequest, RedisDB_UpdateDataReply>
    {
        class EntityMethod
        {
            public MethodInfo GetMethod;
            public MethodInfo UpdateMethod;
            public MethodInfo InsertMethod;
        }

        private GameEntityCache cache = GameEntityCache.Instance;
        private Dictionary<string, EntityMethod> methods = new Dictionary<string, EntityMethod>();
        private Type classtype = typeof(BaseBrigeHelper);
        private EntityMethod GetMethod(string typename)
        {
            if (!methods.TryGetValue(typename, out EntityMethod method))
            {
                Type type = Type.GetType(typename);
                var get = classtype.GetMethod(cache.IsBaseEntity(type) ? "GetBaseT" : "GetShareT").MakeGenericMethod(type);
                var update = classtype.GetMethod(cache.IsBaseEntity(type) ? "AddOrUpdateBase" : "AddOrUpdate").MakeGenericMethod(type);
                var insert = classtype.GetMethod(cache.IsBaseEntity(type) ? "InsertBase" : "InsertShare").MakeGenericMethod(type);
                method = new EntityMethod() { GetMethod = get, UpdateMethod = update, InsertMethod = insert };
                methods.Add(typename, method);
            }
            return method;
        }
        IPEndPoint mapip = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint : StartConfigComponent.Instance.MapConfigs[0].GetComponent<InnerConfig>().IPEndPoint;
        protected override async ETTask Run(Session session, RedisDB_UpdateDataRequest request, RedisDB_UpdateDataReply response, Action reply)
        {
            Console.WriteLine($"RedisDBUpdateDataHandler 获取请求：{request.TName},");
            if (!CacheFactory.RedisDBSuccess) { Log.Debug($" RedisDB boot error!RedisDBUpdateDataHandler"); return; }
            var method = GetMethod(request.TName);
            Type type = Type.GetType(request.TName);
            Dictionary<int, object> req = null;
            object entity = null;
            int id = -1;
            try
            {
                if (type != null && method != null && request.Content != null && request.Content.Length > 0 && (req = cache.Decode(type, request.Content)) != null && req.Count > 0 && (id = cache.GetEntityKey(type, req)) > 0)
                {
                    if ((entity = method.GetMethod.Invoke(null, new object[] { id.ToString() })) != null)
                    {
                        cache.SetEntity(entity, req);
                        var fields = cache.GetChangeInfo(entity);
                        response.Content = cache.Encode(type, fields); //cache.manager.GetRequestAll(entity);
                        method.UpdateMethod.Invoke(null, new object[] { entity });
                    }
                    else
                    {
                        entity = Activator.CreateInstance(type);
                        cache.manager.SetValue(false, entity, req);
                        response.Content = cache.Encode(type, req); //cache.manager.GetRequestAll(entity);
                        method.InsertMethod.Invoke(null, new object[] { entity });
                    }
                    Game.Scene.GetComponent<NetInnerComponent>().Get(mapip)?.SendRpc(new R2M_CacheSyncRequest { key = id, TName = request.TName, Content = response.Content });
                }
            }
            catch (Exception ex)
            {
                PrintException(type, id, req, entity, ex, request);
            }
            //Type t = Type.GetType(request.TName);
            //Dictionary<int, object> data = null;
            //try
            //{
            //    if (request.Content != null && request.Content.Length > 0)
            //    {
            //        data = cache.Decode(t, request.Content);

            //        Console.WriteLine(cache.GetEntityInfo(t, data));
            //        if (data != null && data.Count > 0)
            //        {
            //            int id = cache.GetEntityKey(t, data);
            //            Console.WriteLine(t.Name + "[" + id + "]产生变更:" + cache.GetEntityInfo(t, data));
            //            Type pt = typeof(BaseBrigeHelper);

            //            object _tobj = pt.GetMethod(cache.IsBaseEntity(t) ? "GetBaseT" : "GetShareT").MakeGenericMethod(t).Invoke(null, new object[] { id.ToString() });
            //            if (_tobj != null)
            //            {
            //                cache.SetEntity(_tobj, data);
            //                var fields = cache.GetChangeInfo(_tobj);
            //                Console.WriteLine(t.Name + "[" + id + "]变更后数据为:" + cache.GetEntityInfo(t, fields));
            //                response.Content = cache.Encode(t, fields);
            //                pt.GetMethod(cache.IsBaseEntity(t) ? "AddOrUpdateBase" : "AddOrUpdate").MakeGenericMethod(t).Invoke(null, new object[] { _tobj });
            //            }
            //        }
            //    }
            //}
            //catch (Exception ex)
            //{
            //    Console.WriteLine("混合更新发生异常\r\n" + ex.Message + "\r\n" + ex.StackTrace);
            //    TraceLogEx.Error(ex, "混合更新发生异常");
            //}
            reply();
            await ETTask.CompletedTask;
        }

        private void PrintException(Type type, int id, Dictionary<int, object> data, object entity, Exception ex, RedisDB_UpdateDataRequest request)
        {
            string errstr;
            if (type == null)
            {
                errstr = "混合更新,处理消息:" + JsonUtils.Serialize(request) + ",获取类型失败";
            }
            else if (data == null)
            {
                errstr = "混合更新[" + type.Name + "],处理消息[" + JsonUtils.Serialize(request) + "],反序列化更新字段失败";
            }
            else if (id <= 0)
            {
                errstr = "混合更新[" + type.Name + "],处理消息[" + JsonUtils.Serialize(request) + "],从数据[" + JsonUtils.Serialize(data) + "]中获取获取主键失败";
            }
            else if (entity == null)
            {
                errstr = "混合更新" + cache.GetEntityInfo(type, data) + ",获取实体[" + id + "]失败";
            }
            else
            {
                errstr = "混合更新" + cache.GetEntityInfo(type, data) + ",给实体赋值时发生异常";
            }
            TraceLogEx.Error(ex, errstr);

        }
    }
}

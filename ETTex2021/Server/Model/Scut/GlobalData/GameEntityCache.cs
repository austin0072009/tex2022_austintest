using ETModel;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Model;
using GameSystem.Entity;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace Model.Scut_Script.Common
{
    public class GameEntityCache
    {
        private static GameEntityCache instance;
        public static GameEntityCache Instance { get { if (instance == null) instance = new GameEntityCache(); return instance; } }
        private GameEntityCache() { }
        private Type baseEntity = typeof(BaseEntity);
        /// <summary> 未知类型比较索引 </summary>
        public Dictionary<Type, MemberManager> equals = new Dictionary<Type, MemberManager>();
        /// <summary> 实例缓存 </summary>
        public Dictionary<Type, GenericClassType> caches = new Dictionary<Type, GenericClassType>();
        /// <summary> 混合更新类管理器 </summary>
        public NumberFieldComponent manager = NumberFieldComponent.Instance;
        /// <summary> 通过编号获取实例 </summary>
        public async Task<T> GetEntity<T>(long id, bool islocal = true) where T : AbstractEntity
        {
            var type = typeof(T);
            //是否是混合更新类
            var hasNumberField = HasNumberField(type);
            //先从本地缓存中获取实例
            if (islocal && hasNumberField && GetEntity(type, id, out T entity)) return entity;
            //本地缓存中不存在去Redis服务器获取实例
            var jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().GetDBDataTAsync(id, type.Name, IsBaseEntity(type) ? 1 : 0);
            entity = JsonUtils.Deserialize<T>(jsonT);
            //如果是混合更新类将获得的实例加入本地缓存中
            if (hasNumberField && entity != null) { SetEntity(entity); }
            return entity;
        }
        /// <summary> 清除缓存数据 </summary>
        public void Rmove<T>(long id)
        {
            var type = typeof(T);
            var hasNumberField = HasNumberField(type);
            if (hasNumberField && caches.TryGetValue(type, out GenericClassType map)) map.Remove(id);
        }
        /// <summary> 获取本地缓存实例 </summary>
        private bool GetEntity<T>(Type type, long id, out T entity) where T : AbstractEntity
        {
            if (!caches.TryGetValue(type, out GenericClassType cache))
            {
                cache = new ClassEntityCache<T>();
                caches.Add(type, cache);
                entity = null;
                return false;
            }
            return ((ClassEntityCache<T>)cache).TryGetEntry(id, out entity);
        }
        /// <summary> 是否是BaseEntity </summary>
        public bool IsBaseEntity(Type type)
        {
            return baseEntity.IsAssignableFrom(type);
        }
        /// <summary> 将成员信息赋值到Redis服务端实例中(增量成员使用增量变更、其他成员使用覆盖变更) </summary>
        public void SetEntity<T>(T entity, Dictionary<int, object> data)
        {
            manager.SetValue(true, entity, data);
        }
        /// <summary> 反序列化成员信息 </summary>
        public Dictionary<int, object> Decode(Type type, byte[] data)
        {
            return manager.Decode(type, data);
        }
        /// <summary> 序列化成员信息 </summary>
        public byte[] Encode(Type type, Dictionary<int, object> data)
        {
            return manager.Encode(type, data);
        }
        /// <summary> 设置实例到本地缓存中 </summary>
        public void SetEntity<T>(T entity) where T : AbstractEntity
        {
            var type = typeof(T);
            //var hasNumberField = HasNumberField(type);
            //if (hasNumberField)
            //{
            if (!caches.TryGetValue(type, out GenericClassType cache))
            {
                cache = new ClassEntityCache<T>();
                ((ClassEntityCache<T>)cache).SetEntity(entity);
                caches.Add(type, cache);
                manager.Init(entity);
            }
            else
            {
                var entrycache = ((ClassEntityCache<T>)cache);
                if (!entrycache.TryGetEntry(entity.GetMessageQueueId(), out T localentity))
                {
                    manager.Init(entity);
                    entrycache.SetEntity(entity);
                }
                else { manager.Update(entity, localentity); }
                //else
                //{
                //    var fields = manager.GetValueAll(entity);
                //    if (fields != null && fields.Count > 0) manager.SetValue(false, entity1, fields);
                //}
            }
            //}
        }
        public void Update<T>(T entity) where T : AbstractEntity
        {
            var type = typeof(T);
            if (caches.TryGetValue(type, out GenericClassType cache))
            {
                var entrycache = ((ClassEntityCache<T>)cache);
                int key = entity.GetKey();
                if (entrycache.TryGetEntry(entity.GetMessageQueueId(), out T localentity) && key > 0 && key == localentity.GetKey()) manager.Update(entity, localentity);
            }
        }
        public void UpdateFromBytes<T>(int key, byte[] bytes) where T : AbstractEntity
        {
            Type type = typeof(T);
            if (caches.TryGetValue(type, out GenericClassType cache))
            {
                var entrycache = ((ClassEntityCache<T>)cache);
                if (entrycache.TryGetEntry(key, out T localentity))
                {
                    var fields = manager.Decode(type, bytes);
                    if (localentity.GetKey() == fields.GetKey<T>()) manager.Update(localentity, fields);
                }
            }
        }
        public void Update(Type type, int id, byte[] bytes)
        {
            var method = GetType().GetMethod("UpdateFromBytes")?.MakeGenericMethod(type)?.Invoke(this, new object[] { id, bytes });
            //method.Invoke(this, new object[] { id, bytes });
        }
        /// <summary> 获取Redis服务端变更信息 </summary>
        public Dictionary<int, object> GetChangeInfo<T>(T entity)
        {
            return manager.GetValue(true, entity);
        }
        /// <summary> 向Redis服务端发送实例变更请求 </summary>
        public async ETTask<bool> AddOrUpdate<T>(T entity, bool UseNumberField = true) where T : AbstractEntity
        {
            var type = entity.GetType();
            bool hasNumberField = HasNumberField(type);

            if (HasSource(entity) && hasNumberField && UseNumberField)
            {
                var msg = manager.GetValue(false, entity);
                if (msg.Count > 0)
                {
                    //Console.WriteLine("发起变更:" + GetEntityInfo(type, msg));
                    var bytes = await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(type.FullName, manager.Encode(type, msg));
                    if (bytes == null) return false;
                    var rsp = manager.Decode(type, bytes);
                    //TraceLogEx.Log("发起变更后,收到的变更结果:" + GetEntityInfo(type, rsp));
                    if (rsp != null && rsp.Count > 0) { manager.SetValue(false, entity, rsp); return true; }
                }
                return false;
            }
            var jsonT = await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(type.Name, IsBaseEntity(type) ? 1 : 0, JsonUtils.Serialize(entity));
            if (hasNumberField && jsonT == "1" && entity.GetMessageQueueId() > 0) { SetEntity(entity); var msg = manager.GetValueAll(entity); manager.SetValue(false, entity, msg); }
            return jsonT == "1";
        }

        public bool HasSource<T>(T entity) where T : AbstractEntity
        {
            if (entity.GetMessageQueueId() <= 0) return false;
            if (manager.types.TryGetValue(entity.GetType(), out TypeDetail tds))
            {
                return tds.Key.values.ContainsKey(entity.GetMessageQueueId());
            }
            return false;
        }
        /// <summary> 是否包含增量更新成员 </summary>
        public bool HasNumberField(Type type)
        {
            return manager.types.ContainsKey(type);
        }
        /// <summary> 获取成员信息中的主键 </summary>
        public int GetEntityKey(Type type, Dictionary<int, object> data)
        {
            if (manager.types.TryGetValue(type, out TypeDetail detail))
            {
                return (int)data[detail.Key.Tag];
            }
            return -1;
        }
        /// <summary> 获取成员信息字符串 </summary>
        public string GetEntityInfo(Type type, Dictionary<int, object> data)
        {
            List<string> fieldinfos = new List<string>();
            object key = null;
            if (manager.types.TryGetValue(type, out TypeDetail detail))
            {
                foreach (var info in data)
                {
                    if (info.Value == null) continue;
                    var field = detail.members.members[info.Key];
                    if (!field.IsKey) fieldinfos.Add(field.Name + ":" + (info.GetType().IsClass ? JsonUtils.Serialize(info.Value) : info.Value.ToString()));
                    else key = info.Value;
                }
            }
            return "[" + type.Name + "." + key + "]成员信息:" + JsonUtils.Serialize(fieldinfos);
        }
        static IPEndPoint mapip = StartConfigComponent.Instance.StartConfig.AppType == AppType.AllServer ? StartConfigComponent.Instance.StartConfig.GetComponent<InnerConfig>().IPEndPoint : StartConfigComponent.Instance.MapConfigs[0].GetComponent<InnerConfig>().IPEndPoint;
        /// <summary> 
        /// 广播同步缓存
        /// </summary>
        public static void SendBroadcastCache<T>( T entity) where T : AbstractEntity
        {
            var type = entity.GetType();
            var msg = Instance.manager.GetValueAll(entity);
            if (msg.Count > 0)
            {
                var id = Instance.GetEntityKey(type, msg);
                var content = Instance.manager.Encode(type, msg);
                Game.Scene.GetComponent<NetInnerComponent>().Get(mapip)?.SendRpc(new R2M_CacheSyncRequest { key = id, TName = type.FullName, Content = content });
            }
            return ;
            
        }

    }
}

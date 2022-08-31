 
using System;
using System.Collections.Generic;
using System.Linq;
using ETModel.Framework.Common;
using Common.NLog;
using ETModel.Framework.Model;
using ETModel.Framework.Net;

namespace ETModel.Framework.Cache.Generic
{ 
    /// <summary>
    /// 共享的缓存模型
    /// </summary>
    public class ShareCacheStruct<T> : BaseCacheStruct<T> where T : ShareEntity, new()
    {
        /// <summary>
        /// 
        /// </summary>
        public ShareCacheStruct()
        {
        }

        /// <summary>
        /// Get loading status from redis or DB
        /// </summary>
        public LoadingStatus LoadingStatus
        {
            get { return DataContainer.LoadStatus; }
        }

        /// <summary>
        /// 遍历数据
        /// </summary>
        /// <param name="func"></param>
        public void Foreach(Func<string, T, bool> func)
        {
            ForeachEntity(func);
        }

        /// <summary>
        /// 通过Key查找
        /// </summary>
        /// <param name="keys"></param>
        /// <returns></returns>
        public T FindKey(params object[] keys)
        {
            T data;
            string key = AbstractEntity.CreateKeyCode(keys);
            if (TryGetEntity(key, out data))
            {
                return data;
            }
            return default(T);
        }

        /// <summary>
        /// 查找第一个匹配数据
        /// </summary>
        /// <param name="match"></param>
        /// <returns></returns>
        public T Find(Predicate<T> match)
        {
            T t = default(T);
            ForeachEntity((key, value) =>
            {
                if (match == null || match(value))
                {
                    t = value;
                    return false;
                }
                return true;
            });
            return t;
        }
        /// <summary>
        /// 
        /// </summary>
        public void Load()
        {
            DataContainer.Load();
        }

        /// <summary>
        /// 查找所有匹配数据
        /// </summary>
        /// <param name="isSort"></param>
        /// <returns></returns>
        public List<T> FindAll(bool isSort = true)
        {
            return FindAll(m => true, isSort);
        }

        /// <summary>
        /// 查找所有匹配数据
        /// </summary>
        /// <param name="match"></param>
        /// <param name="isSort"></param>
        /// <returns></returns>
        public List<T> FindAll(Predicate<T> match, bool isSort = true)
        {
            List<T> list = new List<T>();
            ForeachEntity((key, value) =>
            {
                if (value != null)
                {
                    if (match == null || match(value))
                    {
                        list.Add(value);
                    }
                }
                return true;
            });
            if (isSort)
            {
                return list.QuickSort();
            }
            return list;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IEnumerable<T> Take()
        {
            return DataContainer.ToEntityEnumerable(false);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public IEnumerable<T> TakeOrLoad()
        {
            return DataContainer.ToEntityEnumerable(true);
        }

        /// <summary>
        /// 数据项是否改变
        /// </summary>
        /// <param name="keyCode"></param>
        /// <returns></returns>
        public bool HasChange(string keyCode)
        {
            return HasChangeCache(keyCode);
        }

        /// <summary>
        /// 是否存在
        /// </summary>
        /// <param name="match"></param>
        /// <returns></returns>
        public bool IsExist(Predicate<T> match)
        {
            return IsExistEntity(match);
        }

        /// <summary>
        /// 自动加载
        /// </summary>
        /// <param name="filter"></param>
        /// <returns></returns>
        public bool AutoLoad(DbDataFilter filter)
        {
            if (!IsExistData())
            {
                return OnLoad(filter);
            }
            return true;
        }

        private bool OnLoad(DbDataFilter filter)
        {
            var redisKey = CreateRedisKey();
            TransReceiveParam receiveParam = new TransReceiveParam(redisKey);
            receiveParam.Schema = SchemaTable();
            receiveParam.DbFilter = filter;
            int periodTime = receiveParam.Schema == null ? 0 : receiveParam.Schema.PeriodTime;
            return TryLoadCache(receiveParam, periodTime, false);
        }

        private bool IsExistData()
        {
            return !IsEmpty;
        }

        /// <summary>
        /// 更新所有的数据
        /// </summary>
        /// <param name="isChange"></param>
        /// <param name="changeKey"></param>
        public override bool Update(bool isChange, string changeKey = null)
        {
            return UpdateEntity(isChange, changeKey);
        }

        /// <summary>
        /// 增加
        /// </summary>
        /// <param name="t"></param>
        /// <param name="period"></param>
        /// <returns></returns>
        public bool Add(T t, int period = 0)
        {
            string key = t.GetKeyCode();
            SchemaTable schemaTable = SchemaTable();
            int periodTime = schemaTable == null ? 0 : schemaTable.PeriodTime;
            if (Update(t) && TryAddEntity(key, t, periodTime, true))
            {
                SetLoadSuccess(key);
                return true;
            }
            return false;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="enumerable"></param>
        /// <param name="period"></param>
        /// <returns></returns>
        public bool AddRange(IEnumerable<T> enumerable, int period = 0)
        {
            if (!Update(enumerable))
            {
                return false;
            }
            foreach (var t in enumerable)
            {
                string key = t.GetKeyCode();
                SchemaTable schemaTable = SchemaTable();
                int periodTime = schemaTable == null ? 0 : schemaTable.PeriodTime;
                if (TryAddEntity(key, t, periodTime, true))
                {
                    SetLoadSuccess(key);
                    continue;
                }
            }
            return true;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="enumerable"></param>
        /// <param name="period"></param>
        /// <returns></returns>
        public bool AddOrUpdate(IEnumerable<T> enumerable, int period = 0)
        {
            if (!Update(enumerable))
            {
                return false;
            }
            foreach (var t in enumerable)
            {
                string key = t.GetKeyCode();
                SchemaTable schemaTable = SchemaTable();
                int periodTime = schemaTable == null ? 0 : schemaTable.PeriodTime;
                if (AddOrUpdateEntity(key, t, periodTime, true))
                {
                    SetLoadSuccess(key);
                    continue;
                }
            }
            return true;
        }

        /// <summary>
        /// add or update
        /// </summary>
        /// <param name="t"></param>
        /// <param name="period"></param>
        /// <returns></returns>
        public bool AddOrUpdate(T t, int period = 0)
        {
            string key = t.GetKeyCode();
            SchemaTable schemaTable = SchemaTable();
            int periodTime = schemaTable == null ? 0 : schemaTable.PeriodTime;
            if (Update(t) && AddOrUpdateEntity(key, t, periodTime, true))
            {
                SetLoadSuccess(key);
                return true;
            }
            return false;
        }

        /// <summary>
        /// The value has be removed from the cache
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public bool RemoveCache(T value)
        {
            string key = value.GetKeyCode();
            return TryRemove(key, item => true);
        }
        /// <summary>
        /// 删除数据并移出缓存
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public bool Delete(T value)
        {
            if (value == null) return false;
            string key = value.GetKeyCode();
            return TryRemove(key, item =>
            {
                value.OnDelete();
                TransSendParam sendParam = new TransSendParam() { IsChange = true };
                return DoSend(new[] { new KeyValuePair<string, T>(key, value) }, sendParam);
            });
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        protected override bool LoadFactory(bool isReplace)
        {
            int capacity = 0;
            SchemaTable schemaTable;
            if (EntitySchemaSet.TryGet<T>(out schemaTable))
            {
                capacity = schemaTable.Capacity;
            }
            return OnLoad(new DbDataFilter(capacity));
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="key"></param>
        /// <param name="isReplace"></param>
        /// <returns></returns>
        protected override bool LoadItemFactory(string key, bool isReplace)
        {
            //string redisKey = CreateRedisKey(key);
            //var schema = SchemaTable();
            //if (schema != null && schema.AccessLevel == AccessLevel.ReadWrite)
            //{
            //    int periodTime = schema.PeriodTime;
            //    List<T> dataList;
            //    if (DataContainer.TryLoadHistory(redisKey, out dataList))
            //    {
            //        InitCache(dataList, periodTime);
            //        return true;
            //    }
            //    else
            //    {
            //        return false;
            //    }
            //}
            return true;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="dataList"></param>
        /// <param name="periodTime"></param>
        /// <param name="isReplace"></param>
        /// <returns></returns>
        protected override bool InitCache(List<T> dataList, int periodTime, bool isReplace)
        {
            foreach (var data in dataList)
            {
                if (data == null) continue;
                data.Reset();
                string key = data.GetKeyCode();
                CacheItemSet itemSet;
                bool result = true;
                if (isReplace)
                {
                    result = DataContainer.AddOrUpdateEntity(key, data, periodTime, out itemSet, true);
                }
                else if (!DataContainer.TryAddEntity(key, data, periodTime, out itemSet, true))
                {
                    //gets itemSet in cache
                    DataContainer.TryGetCacheItem(key, out itemSet);
                }
                if (!result)
                {
                    TraceLog.WriteError("Load data:\"{0}\" tryadd key:\"{1}\" error.", DataContainer.RootKey, key);
                    return false;
                }
                if (itemSet != null)
                {
                    itemSet.OnLoadSuccess();
                }
                //reason:load entity is no changed.
                //DataContainer.UnChangeNotify(key);
            }
            return true;
        }
    }
}
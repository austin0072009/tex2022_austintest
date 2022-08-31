
using System;
using System.Collections;
using System.Collections.Generic;
using System.Web;
using System.Linq;
using Microsoft.Extensions.Caching.Memory;


namespace ETModel.Framework.Common
{
    public class Cache : ICache
    {
        // private static System.Web.Caching.Cache cache = HttpRuntime.Cache;
        private static readonly MemoryCache cache = new MemoryCache(new MemoryCacheOptions());
        public T GetCache<T>(string cacheKey) where T : class
        {
            return cache.Get(cacheKey) as T;
        }
        public void WriteCache<T>(T value, string cacheKey) where T : class
        {
            cache.Set(cacheKey, value, DateTime.Now.AddMinutes(10));
        }
        public void WriteCache<T>(T value, string cacheKey, DateTime expireTime) where T : class
        {
            cache.Set(cacheKey, value, expireTime);
        }
        public void RemoveCache(string cacheKey)
        {
            cache.Remove(cacheKey);
        }
        public void RemoveCache()
        {
            if (cache != null)
                cache.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}

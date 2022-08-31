using ETModel.Framework.Model;
using GameSystem.Entity;
using System;
using System.Collections.Generic;

namespace Model.Scut_Script.Common
{
    public static class EntityCacheHelper
    {
        public static int GetKey<T>(this Dictionary<int, object> fields, TypeDetail detail = null) where T : AbstractEntity
        {
            if (fields != null && (detail != null || GameEntityCache.Instance.manager.types.TryGetValue(typeof(T), out detail)) && fields.ContainsKey(detail.Key.Tag))
            {
                return Convert.ToInt32(fields[detail.Key.Tag]);
            }
            return -2;
        }
        public static int GetKey<T>(this T entity, TypeDetail detail = null) where T : AbstractEntity
        {
            if (entity != null && (detail != null || GameEntityCache.Instance.manager.types.TryGetValue(typeof(T), out detail)))
            {
                return Convert.ToInt32(detail.Key.GetValue(entity));
            }
            return -1;
        }
    }
}

using ETModel.Framework.Model;
using System.Collections.Generic;

namespace Model.Scut_Script.Common
{
    public interface GenericClassType
    {
        void Remove(long id);
    }
    public class ClassEntityCache<T> : GenericClassType where T : AbstractEntity
    {
        public ClassEntityCache()
        {
        }
        Dictionary<long, T> entitys = new Dictionary<long, T>();
        public T GetEntity(long id)
        {
            entitys.TryGetValue(id, out T entity);
            return entity;
        }
        public void SetEntity(T entity)
        {
            if (!entitys.ContainsKey(entity.GetMessageQueueId())) { entitys.Add(entity.GetMessageQueueId(), entity); }
        }
        public bool TryGetEntry(long id, out T entity)
        {
            return entitys.TryGetValue(id, out entity);
        }
        public void Remove(long id)
        {
            entitys.Remove(id);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
namespace Crazy2018_Sys_Interface
{
    public interface IBaseService<TEntity, TKey, TContext> where TEntity : class  where TContext:DbContext
    {
        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        TEntity AddEntity(TEntity entity);

        /// <summary>
        /// 异步添加
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        void AddEntityAsync(TEntity entity);
        /// <summary>
        ///  批量添加
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        int AddEntity(List<TEntity> list);
        /// <summary>
        /// 修改
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        TEntity UpdateEntity(TEntity entity);
        /// <summary>
        /// 
        /// </summary>
        void UpdateAsync(TEntity entity);

        /// <summary>
        /// 删除 实体
        /// </summary>
        /// <param name="TEntity"></param>
        /// <returns></returns>
        int DelEntity(TEntity entity);
        // <summary>
        /// 删除  主键
        /// </summary>
        /// <param name="TEntity"></param>
        /// <returns></returns>
        int DelEntity(TKey key);
        // <summary>
        /// 删除  条件
        /// </summary>
        /// <param name="TEntity"></param>
        /// <returns></returns>
        int DelEntity(Dictionary<string, object> where);

        /// <summary>
        /// 根据ID进行查询
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        TEntity GetEntityByID(TKey key);
        /// <summary>
        /// 根据sql进行查询
        /// </summary>
        /// <param name="predicate"></param>
        /// <returns></returns>
        List<TEntity> GetEntityQuerySql(string sql);

        /// <summary>
        /// 根据条件进行查询
        /// </summary>
        /// <param name="fun"></param>
        /// <returns></returns>
        List<TEntity> GetEntityLisrByWhere(Expression<Func<TEntity, bool>> fun);


        List<TEntity> GetEntityLisrByWhere(Expression<Func<TEntity, bool>> fun, int pageindex, int pagesize,Expression<Func<TEntity, DateTime>> orderBy);

        /// <summary>
        /// 根据条件进行查询
        /// </summary>
        /// <param name="fun"></param>
        /// <returns></returns>
        TEntity GetEntityByWhere(Expression<Func<TEntity, bool>> fun);
        int GetCount(Expression<Func<TEntity, bool>> fun);
        IEnumerable<TEntity> GetIEnumerable(Expression<Func<TEntity, bool>> fun);
    }
}

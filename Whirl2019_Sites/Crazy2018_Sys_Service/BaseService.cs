using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Mehdime.Entity;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service
{
    public class BaseService<TEntity, TKey, TContext> : IBaseService<TEntity, TKey, TContext> where TEntity : class where TContext : DbContext
    {
        private readonly AmbientDbContextLocator _ambientDbContextLocator =new AmbientDbContextLocator();
        private readonly DbContextScopeFactory dbContextScopeFactory = new DbContextScopeFactory();
        public string _url = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        public string _domain = ConfigurationManager.AppSettings["RegDomain"].ToString();

        private TContext DbContext
        {
            get
            {
                var dbContext = _ambientDbContextLocator.Get<TContext>();

                if (dbContext == null)
                    throw new InvalidOperationException("");

                return dbContext;
            }
        }
        public virtual TEntity AddEntity(TEntity entity)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                TEntity newEntity = DbContext.Set<TEntity>().Add(entity);

                //DbContext.Configuration.ValidateOnSaveEnabled = false;
                if (DbContext.SaveChanges() > 0)
                    return newEntity;
                return null;
            }
        }



        public int AddEntity(List<TEntity> list)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                DbContext.Configuration.AutoDetectChangesEnabled = false;
                try
                {
                    for (int i = 0, j = list.Count; i < j; i++)
                    {
                        DbContext.Set<TEntity>().Add(list[i]);
                    }
                    return DbContext.SaveChanges();
                }
                finally
                {
                    DbContext.Configuration.AutoDetectChangesEnabled = true;
                }
            }
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="where"></param>
        /// <returns></returns>
        public int DelEntity(Dictionary<string, object> where)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                if (where == null || where.Keys.Count <= 0) return 0;
                StringBuilder sb = new StringBuilder();
                List<string> KeyList = new List<string>(where.Keys);
                List<SqlParameter> plist = new List<SqlParameter>();
                for (int i = 0, j = KeyList.Count; i < j; i++)
                {
                    plist.Add(new SqlParameter()
                    {
                        ParameterName = KeyList[i],
                        Value = where[KeyList[i]]
                    });
                    if (i == j - 1)
                    {
                        sb.Append(string.Format(" {0}=@{0} ", KeyList[i]));
                    }
                    sb.Append(string.Format("{0}=@{0} and ", KeyList[i]));
                }
                string TableName = this.GetType().Name;
                string sql = string.Format("delete from [{0}] where {1}", TableName, sb.ToString());
                DbContext.Set<TEntity>().SqlQuery(sql, plist);
                return DbContext.SaveChanges();
            }
        }

        public int DelEntity(TKey key)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                //string TableName = this.GetType().Name;
                //string sql = string.Format("delete from [{0}] where ID={1}", TableName, key);
                //DbContext.Set<TEntity>().SqlQuery(sql, new object() { });
              var entity=  DbContext.Set<TEntity>().Find(key);
                if (entity != null)
                    DbContext.Set<TEntity>().Remove(entity);
                return DbContext.SaveChanges();
            }
        }

        public virtual int DelEntity(TEntity entity)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                DbSet<TEntity> dbSet = DbContext.Set<TEntity>();
                DbEntityEntry<TEntity> entry = DbContext.Entry<TEntity>(entity);
                dbSet.Attach(entity);
                entry.State = EntityState.Deleted;
                return dbContextScope.SaveChanges();
            }
        }

        public virtual TEntity GetEntityByID(TKey key)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                var entity = DbContext.Set<TEntity>().Find(key);
                return entity;
            }
        }

        /// <summary>
        /// 根据条件查询
        /// </summary>
        /// <param name="fun"></param>
        /// <returns></returns>
        public TEntity GetEntityByWhere(Expression<Func<TEntity, bool>> fun)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                var entity = DbContext.Set<TEntity>().AsNoTracking().Where(fun).FirstOrDefault();
                return entity;
            }
        }

        public List<TEntity> GetEntityLisrByWhere(Expression<Func<TEntity, bool>> fun)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                var entity = DbContext.Set<TEntity>().Where(fun).ToList();
                //var entity = dbHelper.Set<TEntity>().AsNoTracking().Where(fun).ToList();
                return entity;
            }
        }

        public List<TEntity> GetEntityLisrByWhere(Expression<Func<TEntity, bool>> fun,int pageindex,int pagesize, Expression<Func<TEntity, DateTime>> orderBy)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                var entity = DbContext.Set<TEntity>().OrderByDescending(orderBy).Where(fun).Skip((pageindex-1)*pagesize).Take(pagesize).ToList();
                //var entity = dbHelper.Set<TEntity>().AsNoTracking().Where(fun).ToList();
                return entity;
            }
        }

        public List<TEntity> GetEntityQuerySql(string sql)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                var entity = DbContext.Set<TEntity>().SqlQuery(sql, new object[] { }).ToList();
                return entity;
            }
        }
        public virtual TEntity UpdateEntity(TEntity entity)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                DbSet<TEntity> dbSet = DbContext.Set<TEntity>();
                DbEntityEntry<TEntity> entry = DbContext.Entry<TEntity>(entity);
                if (entry.State == EntityState.Detached)
                {
                    dbSet.Attach(entity);
                    entry.State = EntityState.Modified;
                }
                if (DbContext.SaveChanges() > 0)
                    return entity;
                return null;
            }
        }
        public DataTable SqlQueryForDataTatable(string sql, string connectionString = null)
        {
            
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                if (string.IsNullOrEmpty(connectionString))
                    connectionString = DbContext.Database.Connection.ConnectionString;
                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    DataSet ds = new DataSet();
                    conn.Open();
                    MySqlDataAdapter command = new MySqlDataAdapter(sql, conn);
                    command.Fill(ds, "ds");
                    DataTable oldData = ds.Tables[0] as DataTable;
                    if (oldData == null)
                    {
                        return null;
                    }
                    return oldData;
                };
            }
        }
        public bool SqlQueryUpdate(string sql, string connectionString = null)
        {

            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                if (string.IsNullOrEmpty(connectionString))
                    connectionString = DbContext.Database.Connection.ConnectionString;
                using (MySqlConnection conn = new MySqlConnection(connectionString))
                {
                    DataSet ds = new DataSet();
                    conn.Open();
                    MySqlDataAdapter command = new MySqlDataAdapter(sql, conn);
                    command.Fill(ds, "ds");
                
                    if (command.UpdateBatchSize < 0)
                    {
                        return false;
                    }
                    return true;
                };
            }

        }

        //public DataTable SqlQueryTable(string sql, string connectionString = null)
        //{

        //    using (var dbContextScope = dbContextScopeFactory.Create())
        //    {
        //        if (string.IsNullOrEmpty(connectionString))
        //            connectionString = DbContext.Database.Connection.ConnectionString;
        //        using (MySqlConnection conn = new MySqlConnection(connectionString))
        //        {
        //            DataSet ds = new DataSet();
        //            conn.Open();
        //            MySqlDataAdapter command = new MySqlDataAdapter(sql, conn);
        //            command.Fill(ds, "ds");
        //            command.
        //            if (oldData == null)
        //            {
        //                return null;
        //            }
        //            return oldData;

        //        };
        //    }

        //}

        public int GetCount(Expression<Func<TEntity,bool>> fun)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
               return DbContext.Set<TEntity>().Count(fun);
            }
        }
        public IEnumerable<TEntity> GetIEnumerable(Expression<Func<TEntity, bool>> fun) {

            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                return DbContext.Set<TEntity>().Where(fun);
            }
        }

        public void UpdateAsync(TEntity entity)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                DbSet<TEntity> dbSet = DbContext.Set<TEntity>();
                DbEntityEntry<TEntity> entry = DbContext.Entry<TEntity>(entity);
                if (entry.State == EntityState.Detached)
                {
                    dbSet.Attach(entity);
                    entry.State = EntityState.Modified;
                }
                DbContext.SaveChangesAsync();
            }
        }

        public void AddEntityAsync(TEntity entity)
        {
            using (var dbContextScope = dbContextScopeFactory.Create())
            {
                TEntity newEntity = DbContext.Set<TEntity>().Add(entity);
                DbContext.SaveChangesAsync();
            }
        }
    }

}

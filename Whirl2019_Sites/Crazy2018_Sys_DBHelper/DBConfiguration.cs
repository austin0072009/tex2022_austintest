using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_DBHelper
{
    /// <summary>
    /// 数据库迁移配置类
    /// </summary>
    public class DBConfiguration : DbMigrationsConfiguration<DBContextHelper>
    {
        /*
        * 数据库迁移配置
        */
        public DBConfiguration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        /*
         *数据库种子 
         */
        protected override void Seed(DBContextHelper context)
        {

        }
    }
}

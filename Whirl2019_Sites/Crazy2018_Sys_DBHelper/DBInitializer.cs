using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_DBHelper.Migrations;
using Crazy2018_Sys_Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_DBHelper
{
    public static class DBInitializer
    {
        /// <summary>
        /// 数据库初始化策略配置
        /// </summary>
        public static void Initialize()
        {


            /////获得数据库最后一个版本
            Database.SetInitializer<DBContextHelper>(new MigrateDatabaseToLatestVersion<DBContextHelper, Configuration>());
            ///删除原来数据库 重新创建数据库
            //Database.SetInitializer(new DropCreateDatabaseIfModelChanges<DBContextHelper>());
            //Database.SetInitializer<DBContextHelper>(new DropCreateDatabaseIfModelChanges<DBContextHelper>());
        }
    }
}

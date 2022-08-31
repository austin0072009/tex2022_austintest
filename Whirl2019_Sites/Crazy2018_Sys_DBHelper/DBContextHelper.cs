using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Entity.Game;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_DBHelper
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class DBContextHelper : DbContextBase
    {

        #region 数据库配置 DbSet
        public DbSet<BankCardEntity> BankCardEntities { get; set; }
        public DbSet<BankTypeEntity> BankTypeEntities { get; set; }
        public DbSet<UserEntity> UserEntities { get; set; }
        public DbSet<VerifyCodeEntity> VerifyCodeEntities { get; set; }
        public DbSet<UserAgentEntity> UserAgentEntities { get; set; }
        public DbSet<RechargeRecordEntity> RechargeRecordEntities { get; set; }
        public DbSet<TakeNowRecordEntity> TakeNowRecordEntities { get; set; }
        public DbSet<InitialagencyInfo> InitialagencyInfos { get; set; }
        public DbSet<UserAgentStatistics> UserAgentStatistics { get; set; }
        public DbSet<TEntityCard> TEntityCards { get; set; }
        public DbSet<TEntityCardType> TEntityCardTypes { get; set; }
        public DbSet<TEntityCardDetails> TEntityCardDetails { get; set; }

        public DbSet<RechargeChannel> RechargeChannels { get; set; }

        public DbSet<GameActivity> GameActivitys { get; set; }

        public DbSet<VisualTable> VisualTables { get; set; }

        public DbSet<RoomConfiguration> RoomConfiguration { get; set; }

        public DbSet<NoticesEntity> NoticesEntity { get; set; }
        public DbSet<TContact> TContact { get; set; }
        public DbSet<GameLogo> GameLogo { get; set; }
        public DbSet<TSlotConfig> TSlotConfig { get; set; }
        /// <summary>
        /// 收益记录
        /// </summary>
        // public DbSet<ProfitLog> profitLogs { get; set; }
        #endregion

        /*
         * 配置默认的字符串链接
         */
        public DBContextHelper() : base("MyContext") {
           
        }
        /*
         * 自定义数据库链接
         */
        public DBContextHelper(string connenction) : base(connenction) { }
        /*
         * 实体对应规则的映射配置
         */
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        }
    }
}

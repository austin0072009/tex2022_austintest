namespace Crazy2018_Sys_DBHelper.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _1010 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TakeNowRecordEntities", "OrderNum", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.TakeNowRecordEntities", "OrderNum");
        }
    }
}

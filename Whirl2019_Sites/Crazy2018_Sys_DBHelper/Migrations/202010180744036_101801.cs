namespace Crazy2018_Sys_DBHelper.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _101801 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.TakeNowRecordEntities", "DfState", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.TakeNowRecordEntities", "DfState");
        }
    }
}

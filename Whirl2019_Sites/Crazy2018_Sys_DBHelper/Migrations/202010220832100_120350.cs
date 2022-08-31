namespace Crazy2018_Sys_DBHelper.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _120350 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.RechargeChannels", "Discount", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.RechargeChannels", "Discount");
        }
    }
}

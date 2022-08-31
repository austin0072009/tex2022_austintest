namespace Crazy2018_Sys_DBHelper.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _120353 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.GameLogoes", "Url", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.GameLogoes", "Url", c => c.Int(nullable: false));
        }
    }
}

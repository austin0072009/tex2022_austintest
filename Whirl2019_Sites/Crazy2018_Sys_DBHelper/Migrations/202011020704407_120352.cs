namespace Crazy2018_Sys_DBHelper.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _120352 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.GameLogoes",
                c => new
                    {
                        ID = c.Long(nullable: false, identity: true),
                        Url = c.Int(nullable: false),
                        logotype = c.Int(nullable: false),
                        remarks = c.String(unicode: false),
                        IsDel = c.Boolean(nullable: false),
                        CreatTime = c.DateTime(nullable: false, precision: 0),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.GameLogoes");
        }
    }
}

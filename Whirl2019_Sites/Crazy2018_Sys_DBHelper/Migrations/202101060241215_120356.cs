namespace Crazy2018_Sys_DBHelper.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _120356 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TSlotConfigs",
                c => new
                    {
                        ID = c.Long(nullable: false, identity: true),
                        RoomID = c.Int(nullable: false),
                        Config = c.String(unicode: false),
                        UpdateTime = c.DateTime(nullable: false, precision: 0),
                        GameID = c.Int(nullable: false),
                        IsDel = c.Boolean(nullable: false),
                        CreatTime = c.DateTime(nullable: false, precision: 0),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.TSlotConfigs");
        }
    }
}

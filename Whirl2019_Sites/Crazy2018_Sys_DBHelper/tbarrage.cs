//------------------------------------------------------------------------------
// <auto-generated>
//     此代码已从模板生成。
//
//     手动更改此文件可能导致应用程序出现意外的行为。
//     如果重新生成代码，将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Crazy2018_Sys_DBHelper
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbarrage
    {
        public int Id { get; set; }
        public Nullable<int> UserId { get; set; }
        public string BarrageContent { get; set; }
        public Nullable<System.DateTime> CreateTime { get; set; }
        public string BarrageType { get; set; }
        public Nullable<int> BarrageMoney { get; set; }
        public Nullable<int> tableId { get; set; }
        public Nullable<int> RoomId { get; set; }
    }
}
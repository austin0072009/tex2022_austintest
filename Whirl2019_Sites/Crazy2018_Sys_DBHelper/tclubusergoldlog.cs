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
    
    public partial class tclubusergoldlog
    {
        public long Id { get; set; }
        public Nullable<int> ClubId { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<double> BeforeGold { get; set; }
        public Nullable<long> Gold { get; set; }
        public Nullable<long> AfterGold { get; set; }
        public Nullable<System.DateTime> CreateTime { get; set; }
        public string Remark { get; set; }
        public Nullable<int> ChangeType { get; set; }
    }
}

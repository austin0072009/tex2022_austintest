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
    
    public partial class tuserrechargelog
    {
        public long id { get; set; }
        public Nullable<int> userid { get; set; }
        public Nullable<decimal> money { get; set; }
        public Nullable<int> cointype { get; set; }
        public Nullable<int> fromtype { get; set; }
        public Nullable<int> fromuserid { get; set; }
        public Nullable<int> fromadminid { get; set; }
        public string remarks { get; set; }
        public Nullable<System.DateTime> createtime { get; set; }
        public Nullable<decimal> oldmoney { get; set; }
        public Nullable<decimal> currmoney { get; set; }
        public Nullable<decimal> oldGold { get; set; }
        public Nullable<decimal> currGold { get; set; }
    }
}

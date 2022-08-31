using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
  public  class UserContactView:BaseView
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string PostCode { get; set; }
        public string Address { get; set; }
        public int UserId { get; set; }
        public string UpdateDate { get; set; }
    }
}

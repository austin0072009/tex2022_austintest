using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crazy2018_WebSite_GW
{
    public class DataResult<T>
    {
        public int PageIndex { get; set; }
        public int TotalCont { get; set; }
        public List<T> Data { get; set; }
    }
}
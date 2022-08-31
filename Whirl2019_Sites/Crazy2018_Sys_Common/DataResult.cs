using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Common
{
  public   class DataResults<T>: DPagePara where T :class
    {
        public DataResults()
        {
            Message = "获取成功";
            Code = (int)Status.Success;
        }
        public  int Code { get; set; }
        public  List<T> Data { get; set; }
        public  string Message { get; set; }
        public  DataTable table { get; set; }


        /// <summary>
        /// 分页HTML代码
        /// </summary>
        public string InnerHtml { get; set; }
    }

    public class DataResultsList<T> where T : class
    {
        public DataResults<T> One { get; set; }

        public DataResults<T> Two { get; set; }
    }


    public class DataResulta<T> : DPage where T : class
    {
        public DataResulta()
        {
            Message = "获取成功";
            Code = (int)Status.Success;
        }
        public int Code { get; set; }
        public List<T> Data { get; set; }
        public string Message { get; set; }


        /// <summary>
        /// 分页HTML代码
        /// </summary>
        public string InnerHtml { get; set; }
    }

    public class DataResult : DPage
    {
        public DataResult()
        {
            Message = "操作成功";
            Code = (int)Status.Success;
        }
        public int Code { get; set; }
        public string Message { get; set; }
        /// <summary>
        /// 备用字段
        /// </summary>
        public string Spare { get; set; }
    }
    public class DataResult<T> : DPagePara where T : class
    {
        public DataResult()
        {
            Message = "获取成功";
            Code = (int)Status.Success;
        }
        public T Data;
        public int Code { get; set; }
        public string Message { get; set; }
        /// <summary>
        /// 分页HTML代码
        /// </summary>
        public string InnerHtml { get; set; }
    }
    /// <summary>
    /// 返回状态
    /// </summary>
    public enum Status
    {

        fail=-1,
        Success=0
    }

    #region  api返回协议

    public class ApiResult<T>  where T : class
    {
        public ApiResult()
        {
            Message = "获取成功";
            Code = (int)Status.Success;
        }


        public T Data;
        public int Code { get; set; }
        public string Message { get; set; }
    }

    #endregion
}

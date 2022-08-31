using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginSystem
{
    public class MResult<T>
    {
        /// <summary>
        /// 请求结果                    
        /// </summary>
        private bool result;

        /// <summary>
        /// 结果说明
        /// </summary>
        private string msg = string.Empty;

        /// <summary>
        /// 数据信息
        /// </summary>
        private T data;

        /// <summary>
        /// 请求结果
        /// </summary>
        public bool Result
        {
            get
            {
                return result;
            }

            set
            {
                result = value;
            }
        }

        /// <summary>
        /// 结果说明
        /// </summary>
        public string Msg
        {
            get
            {
                return msg;
            }

            set
            {
                msg = value;
            }
        }

        /// <summary>
        /// 数据信息
        /// </summary>
        public T Data
        {
            get
            {
                return data;
            }

            set
            {
                data = value;
            }
        }
    }
}

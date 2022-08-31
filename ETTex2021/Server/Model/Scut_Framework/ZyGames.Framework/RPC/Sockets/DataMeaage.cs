
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETModel.Framework.RPC.Sockets
{
    /// <summary>
    /// 
    /// </summary>
    public class DataMeaage
    {
        /// <summary>
        /// 
        /// </summary>
        public sbyte OpCode { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public byte[] Data { get; set; }

       
    }
}

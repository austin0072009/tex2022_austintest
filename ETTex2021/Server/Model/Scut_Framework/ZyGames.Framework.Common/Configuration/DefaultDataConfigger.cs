
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETModel.Framework.Common.Configuration
{
    /// <summary>
    /// 
    /// </summary>
    public class DefaultDataConfigger : DataConfigger
    {
        /// <summary>
        /// 
        /// </summary>
        protected override void LoadConfigData()
        {
        }

        internal void Add(ConfigSection nodeData)
        {
            AddNodeData(nodeData);
        }
    }
}

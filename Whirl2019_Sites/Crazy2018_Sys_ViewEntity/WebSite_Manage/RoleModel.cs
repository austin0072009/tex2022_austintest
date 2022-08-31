using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_ViewEntity
{
    public class RoleModel
    {
        public RoleModel()
        {
            nvaActions = new List<NvaAction>();
        }
        public int roleId { get; set; }
        public int roleType { get; set; }
        public int roleValue { get; set; }
        public string roleName { get; set; }
        public List<NvaAction> nvaActions { get; set; }

    }
    public class NvaAction
    {
        public NvaAction()
        {
            actions = new List<Taction>();
        }
        public int nvaId { get; set; }
        public List<Taction> actions { get; set; }

    }
    public class Taction {

        public string taction { get; set; }
    }
}

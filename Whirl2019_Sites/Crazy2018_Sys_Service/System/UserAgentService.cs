using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_DBHelper;

namespace Crazy2018_Sys_Service
{
    public class UserAgentService : BaseService<UserAgentEntity, int, DBContextHelper>, IUserAgentService
    {
        public UserAgentView GetUserAgentData(string userId)
        {
            UserAgentView agentView = new UserAgentView();
            if (string.IsNullOrEmpty(userId))
                return agentView;
            int tempId = 0;
            if (!int.TryParse(userId, out tempId))
                return agentView;
            var entity = GetEntityLisrByWhere(w => w != null);
            var agent = entity.Find(w => w.UserId == tempId);
            if (agent == null) return agentView;
            var aLevel = entity.FindAll(w => w.FatherId == tempId);
            var bLevel = from e in entity join a in aLevel on e.FatherId equals a.UserId select e;
            agentView.ALevelCount = aLevel.Count;
            agentView.BLevelCount = bLevel.Count();
            agentView.AagentId = tempId;
            agentView.QRPath = agent.QrPath;
            agentView.CreatTime = agent.CreatTime.ToString("yyyy-MM-dd HH:mm:ss");
            agentView.Remark = agent.Remark;
            return agentView;
        }
    }
}

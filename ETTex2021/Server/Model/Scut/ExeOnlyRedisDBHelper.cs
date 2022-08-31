using ETModel.Script.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class ExeOnlyRedisDBHelper
    {
        /// <summary>
        /// 获取机器人ID
        /// </summary>
        /// <returns></returns>
        public static async Task<List<int>> GetUserIdList(int value )
        {
            return await BaseHelper.GetUserIdList(value);
        }

        public static List<tUser> GetRobotUser()
        {
            return BaseBrigeHelper.GetRobotUser();
        } 
         
    }

     
}

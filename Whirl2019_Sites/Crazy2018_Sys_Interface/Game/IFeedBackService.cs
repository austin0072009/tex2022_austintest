using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.GameCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
  public  interface IFeedBackService: IBaseService<tfeedback, int, texas_2021Entities>, IDependency
    {
        DataResults<FeedBackView> GetFeedBackData(DPage page);
        DataResult FeedBackDelById(string ids);


        DataResults<userloginlogView> GetUserLoginData(DPage page);

        DataResult DelUserLoginLog(string ids);

        DataResults<limitdevice> GetlimitdeviceData(DPage page);

        DataResult DellimitdeviceLog(string ids);


        bool SubmitFormlimitLogin(string dev, int Id, string remark);

        /// <summary>
        /// 得到总代获得保险的列表
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<AgentInsurancePoolView> GetBigAgentInsuranceData(DPagePara page);


        /// <summary>
        /// 
        /// </summary>
        /// <param name="userid">总代ID</param>
        /// <returns></returns>
        DataResult UpdateJackpotlog(int userid);

    }
}

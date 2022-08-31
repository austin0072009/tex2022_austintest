using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
   public interface IRedEnvelopesConfigService : IBaseService<tredenvelopesconfig, int, texas_2021Entities>, IDependency
    {

        /// <summary>
        /// 玩家领取红包记录
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<RedenvelopesLogView> GetUserRedenvelopeslog(DPagePara page);

        DataResult AddRedenvelopeslog(int UserId, int RedenveType, int GoldNum);

        /// <summary>
        /// 获取金额配置表
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<RedEnvelopesConfigView> GetGameRankData(DPagePara page);
        /// <summary>
        /// 删除红包配置
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        DataResult DeleteRedMoneyByids(string ids);

        /// <summary>
        /// 获取红包任务列表条件 
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<tredenvelopestask> GetRedEnveTaskData(DPagePara page);
        /// <summary>
        /// 删除红包任务
        /// </summary>
        /// <param name="ids"></param>
        /// <returns></returns>
        DataResult DeleteRedMoneyTaskByids(string ids);

        DataResult ModifyRedMoneyAndRate(int id,decimal money,string type,string ttype);

        DataResult SubmitRedMoney(decimal money, decimal rate, string type);

        bool SubmitRedMoneyTask(tredenvelopestask entity);


        List<tredenvelopestask> GetRedTaskByType(int id);


    }
}

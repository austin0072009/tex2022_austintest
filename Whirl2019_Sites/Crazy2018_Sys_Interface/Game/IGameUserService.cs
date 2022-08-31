using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
  public  interface IGameUserService: IBaseService<tuser, int, texas_2021Entities>, IDependency
    {
        /// <summary>
        /// 获取游戏用户列表
        /// </summary>
        /// <param name="page">分页参数</param>
        /// <param name="roleValue">取manager_role的值,配置为与游戏代理等级值一样</param>
        /// <param name="roleType">取manager_role的值</param>
        /// <returns></returns>
        DataResults<GameUserView> GetGameUserData(DPagePara page,int roleId=0);

        DataResults<GameUserView> GetGameUserData(DPage page, int roleId = 0, int isrobot = 1);
        DataResults<GameUserView> GetGameUserData(DPage page, int roleId = 0, int isrobot = 1, int robotgameid = -1);
        /// <summary>
        /// 
        /// </summary>
        /// <param name="page"></param>
        /// <param name="roleId"></param>
        /// <returns></returns>
        DataResults<GameUserView> GetGameUserDataForCustomer(DPage page, int roleId = 0);

        DataResult<GameUserView> GetGameUserByID(int userId);

    
        gameuser GetUserById(int userid);

        /// <summary>
        /// 得到30天没有登录的用户数量
        /// </summary>
        /// <returns></returns>
        int GetOneMonthNologin();


        int ChenkUser(string name,string pwd);

        gameuser GetUserByPhone(string phone);


        DataResults<tuser> GetGameUser(DPagePara page);

        DataResults<tuser> GetGameRobotUser();
        bool AddUser(tuser tuser);

    }
}

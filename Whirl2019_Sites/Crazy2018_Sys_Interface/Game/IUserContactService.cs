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
    public interface IUserContactService : IBaseService<tusercontact, int, texas_2021Entities>, IDependency
    {
        /// <summary>
        /// 保存用户联系信息
        /// </summary>
        /// <param name="userId"></param>
        /// <param name="name"></param>
        /// <param name="mobile"></param>
        /// <param name="postCode"></param>
        /// <param name="address"></param>
        /// <returns></returns>
        DataResult SaveUserContact(int userId, string name, string mobile, string postCode, string address);
        /// <summary>
        /// 获取联系人信息
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<UserContactView> GetData(DPage page);
    }
}

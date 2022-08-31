using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace LoginSystem
{
    /// <summary>
    /// 缓存类
    /// </summary>
    public class BCache
    {
        /// <summary>
        /// 电话号码缓存
        /// </summary>
        private static List<string> phoneNumCache = new List<string>();

        /// <summary>
        /// 用户名缓存
        /// </summary>
        private static List<string> userIdCache = new List<string>();

        /// <summary>
        /// 静态锁
        /// </summary>
        private static readonly object lockobj = new object();

        static BCache()
        {
            Refresh();
        }

        /// <summary>
        /// 校验手机号是否已存在
        /// </summary>
        /// <param name="num">手机号</param>
        /// <returns>是否存在</returns>
        public static bool GetPhoneNum(string num)
        {
            bool result = false;
            try
            {
                lock (lockobj)
                {
                    result = phoneNumCache.Contains(num);
                }

                if (!result)
                {
                    BLogin bll = new BLogin();
                    string wherestr = " isDelete=0 and phoneNum='" + num + "'";
                    List<MLogin> list = bll.GetModelList(wherestr);
                    if (list != null && list.Count > 0)
                    {
                        result = true;
                        lock (lockobj)
                        {
                            phoneNumCache.Add(num);
                        }
                    }
                }
            }
            catch (Exception)
            {
                ////异常了就返回成功
                return false; ;
            }

            return result;
        }

        /// <summary>
        /// 校验用户名是否已存在
        /// </summary>
        /// <param name="userId">用户名</param>
        /// <returns>是否存在</returns>
        public static bool GetUserId(string userId)
        {
            bool result = false;
            try
            {
                lock (lockobj)
                {
                    result = userIdCache.Contains(userId);
                }

                if (!result)
                {
                    BLogin bll = new BLogin();
                    string wherestr = " isDelete=0 and userId='" + userId + "'";
                    List<MLogin> list = bll.GetModelList(wherestr);
                    if (list != null && list.Count > 0)
                    {
                        result = true;
                        lock (lockobj)
                        {
                            userIdCache.Add(userId);
                        }
                    }
                }
            }
            catch (Exception)
            {
                ////异常了就返回成功
                return false; ;
            }

            return result;

        }

        /// <summary>
        /// 更新缓存
        /// </summary>
        private static void Refresh()
        {
            try
            {
                List<string> phoneNum = new List<string>();
                List<string> userId = new List<string>();
                BLogin bll = new BLogin();
                string wherestr = " isDelete=0";
                List<MLogin> list = bll.GetModelList(wherestr);
                foreach (var item in list)
                {
                    phoneNum.Add(item.PhoneNum);
                    userId.Add(item.UserId);
                }

                lock (lockobj)
                {
                    phoneNumCache = phoneNum;
                    userIdCache = userId;
                }
            }
            catch (Exception)
            {
            }
        }
    }
}

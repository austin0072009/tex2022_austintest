using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;

namespace Crazy2018_Sys_Interface
{
    public interface IVerifyCodeService : IBaseService<VerifyCodeEntity, int, DBContextHelper>, IDependency
    {
        DataResult CheckCode(string phoneNum, int type, string code);
        /// <summary>
        /// 添加验证码信息
        /// </summary>
        /// <param name="mobile">手机号码</param>
        /// <param name="operType">操作类型 0注册1找回密码2交易密码</param>
        /// <param name="verifyCode">验证码</param>
        /// <returns></returns>
        DataResult Add(string mobile,int operType,string verifyCode);
    }
}

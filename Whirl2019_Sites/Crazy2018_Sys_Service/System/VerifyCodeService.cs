using System;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Common;
using System.Linq;

namespace Crazy2018_Sys_Service
{
    public class VerifyCodeService : BaseService<VerifyCodeEntity, int, DBContextHelper>, IVerifyCodeService
    {
        public DataResult CheckCode(string phoneNum, int type, string code)
        {
            DataResult result = new DataResult();
            var verifyModel = GetEntityLisrByWhere(w => w.PhoneNum == phoneNum && w.IsDel == false).OrderByDescending(o => o.CreatTime).FirstOrDefault();
            if (verifyModel == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "验证码已被使用";
                return result;
            }
            if (verifyModel.CreatTime.AddSeconds(1800) < DateTime.Now)
            {
                result.Code = (int)Status.fail;
                result.Message = "验证码已超时请重新发送";
                verifyModel.IsDel = true;
                UpdateEntity(verifyModel);
                return result;
            }
            if (verifyModel.MatchTimes > 4)
            {
                result.Code = (int)Status.fail;
                result.Message = "短信验证码已超过最大错误次数，请重新发送";
                verifyModel.IsDel = true;
                UpdateEntity(verifyModel);
                return result;
            }
            if (!verifyModel.VerifyCode.ToUpper().Equals(code.ToUpper()))
            {
                result.Code = (int)Status.fail;
                result.Message = "短信验证码错误";
                verifyModel.MatchTimes++;
                UpdateEntity(verifyModel);
                return result;
            }
            result.Message = "验证成功";
            verifyModel.IsDel = true;
            result.Code = UpdateEntity(verifyModel) == null ? (int)Status.fail : (int)Status.Success;
            return result;
        }
        public DataResult Add(string mobile, int operType, string verifyCode)
        {
            DataResult result = new DataResult();
            var ismobile = PageValidate.IsMobile(mobile) || PageValidate.IsEmail(mobile);
            if (ismobile)
            {
                var entity = AddEntity(new VerifyCodeEntity { OperType = operType, PhoneNum = mobile, VerifyCode = verifyCode });
                if (entity == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "添加失败";
                    return result;
                }
                result.Spare = entity.VerifyCode;
            }
            return result;
        }
    }
}

using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service
{
    public class InitialagencyInfoService : BaseService<InitialagencyInfo, int, DBContextHelper>, IInitialagencyInfoService
    {
        public DataResult<InitialagencyView> Create(string code, string qrCode)
        {
            DataResult<InitialagencyView> result = new DataResult<InitialagencyView>();
            if (string.IsNullOrEmpty(code))
            {
                result.Code = (int)Status.fail;
                result.Message = "初始码不能为空";
                return result;
            }
            var enpCode = StringHelper.Encrypto(code);
            var entity = AddEntity(new InitialagencyInfo { InitialaCode = enpCode, CodePath = qrCode });
            if (entity == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "生成失败";
                return result;
            }
            result.Data = new InitialagencyView { CodePath = entity.CodePath, CreatTime = entity.CreatTime.ToString("yyyy-MM-dd HH:mm:ss"), InitialaCode = entity.InitialaCode };
            return result;
        }

        public DataResults<InitialagencyView> GetData(DPage page)
        {
            DataResults<InitialagencyView> result = new DataResults<InitialagencyView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<InitialagencyInfo, bool>> fun = w => w != null;
            result.Data = GetEntityLisrByWhere(fun).OrderByDescending(w => w.CreatTime)
                .Skip((page.PageIndex - 1) * page.PageSize)
                .Take(page.PageSize)
                .Select(w => new InitialagencyView {
                    CodePath = w.CodePath,
                    CreatTime = w.CreatTime.ToString("yyyy-MM-dd HH:mm:ss"),
                    InitialaCode = w.InitialaCode,
                    UserUserId = w.UserUserId??"",
                    Remark=""
                }).ToList();
            result.TotalCount = GetCount(fun);
            return result;
        }
    }
}

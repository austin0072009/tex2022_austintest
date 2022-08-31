using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;

namespace Crazy2018_Sys_Service
{
    public class ActiveCodeService : BaseService<tactivecode, int, texas_2021Entities>, IActiveCodeService
    {
        public DataResult Add(int userid, int activeLevel = 0)
        {
            DataResult result = new DataResult();
            try
            {
                var radom = StringHelper.GetCheckCode(8);
                string activeCode = activeLevel > 0 ? activeLevel + radom : radom;
                var entity = AddEntity(new tactivecode { Activecode = int.Parse(activeCode), CreateDate = DateTime.Now, GenerateUserId = userid, UseUserId = 0 });
                if (entity == null)
                {
                    result.Code = (int)Status.fail;
                    result.Message = "保存失败";
                }
                else
                {
                    result.Spare = entity.Activecode.Value.ToString();
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
                Log.Error(this.GetType().ToString(), ex.Message);
            }
            return result;
        }

        public bool Exist(string activeCode)
        {
            int.TryParse(activeCode,out int ac);
            return GetEntityByWhere(w => w.Activecode == ac) != null;
        }

        public DataResult Initi26Code()
        {
            DataResult result = new DataResult();
            try
            {
                List<tactivecode> olist = GetEntityLisrByWhere(w => w.Activecode.Value==1111);
                if (olist.Count < 9)
                {
                    string AZ = "123456789";
                    foreach (var num in AZ)
                    {
                        string genCode = num+ num+ num+ num+"";
                        if (!Exist(genCode))
                        {
                            var item = new tactivecode
                            {
                                Activecode = int.Parse(genCode),
                                GenerateUserId = int.MaxValue,
                                UseUserId = 0,
                                CreateDate = DateTime.Now,
                            };
                            AddEntity(item);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
                throw;
            }
            return result;
        }

        public DataResult Update(string activeCode, int userid)
        {
            DataResult result = new DataResult();
            int intcode = int.Parse(activeCode);
            var entity = GetEntityByWhere(w => w.Activecode == intcode);
            if (entity == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "当前推广码不存在";
                return result;
            }
            entity.UseUserId = userid;
            result.Code = UpdateEntity(entity) == null ? (int)Status.fail : (int)Status.Success;
            return result;

        }

    }
}

using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.SessionState;

namespace Crazy2018_Sys_Service
{
    public class ManageService : BaseService<dt_manager, int, chesscarddbEntities>, IManageService, IRequiresSessionState
    {
        public bool Exists(int? role_id, string nav_name, string action_type)
        {
            var roleInfo = GetRoleInfo(role_id);
            if (roleInfo != null)
            {
                if (roleInfo.role_type == 1)
                    return true;
                var roleValue = roleInfo.dt_manager_role_value.ToList().Find(w => w.nav_name.Equals(nav_name) && w.action_type.Equals(action_type));
                if (roleValue != null)
                    return true;
            }
            return false;
        }

        public dt_manager_role GetRoleInfo(int? roleId)
        {
            if (roleId <= 0)
                return null;
            else
            {
                using (chesscarddbEntities dbHelper = new chesscarddbEntities())
                {
                    dbHelper.Configuration.LazyLoadingEnabled = false;
                    var entity = dbHelper.Set<dt_manager_role>().Where(w => w.id == roleId).FirstOrDefault();
                    var e = dbHelper.Entry(entity);
                    e.Collection(w => w.dt_manager_role_value).Load();
                    return entity;
                }
            }
        }

        public dt_manager Login(string userName, string passWord)
        {
            var manager = GetEntityByWhere(w => w.user_name == userName);
            if (manager == null) return null;
            var salt = manager.salt;
            var passWordSalt = StringHelper.Encrypto(passWord, salt);
            return passWordSalt == manager.password ? manager : null;
        }

        public DataResult ManageDel(string ids)
        {
            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var noticeIds = ids.Split(',');
            using (chesscarddbEntities dbhelper = new chesscarddbEntities())
            {
                foreach (var item in noticeIds)
                {
                    if (string.IsNullOrEmpty(item)) continue;
                    int id = 0;
                    int.TryParse(item, out id);
                    var entity = dbhelper.dt_manager.Find(id);
                    dbhelper.dt_manager.Remove(entity);
                    dbhelper.SaveChanges();
                }
            }
            result.Message = "删除成功";
            return result;
        }

        public dt_manager Register(dt_manager model)
        {
            model.role_type = GetRoleInfo(model.role_id).role_type;
            var check = GetEntityByWhere(W => W.user_name == model.user_name);
            if (check != null) return null;
            model.salt = Utils.GetCheckCode(6);
            model.password = StringHelper.Encrypto(model.password, model.salt);
            return AddEntity(model);
        }
        public static HttpSessionState _session = HttpContext.Current.Session;
        public void AddActionlog(DTEnums.ActionEnum actiontype, DTEnums.OptAction optaction, string remark)
        {
            try
            {
                if (HttpContext.Current!=null && _session[DTKeys.SESSION_ADMIN_INFO] != null)
                {
                    dt_manager manager = _session[DTKeys.SESSION_ADMIN_INFO] as dt_manager;
                    using (chesscarddbEntities db = new chesscarddbEntities())
                    {
                        dt_manager_log log = new dt_manager_log()
                        {
                            user_ip = DTRequest.GetIP(),
                            add_time = DateTime.Now,
                            user_id = manager.id,
                            user_name = manager.user_name,
                            action_type = actiontype.ToString(),
                            remark = remark,
                            actionmodul = optaction.ToString()
                        };
                        db.dt_manager_log.Add(log);
                        db.SaveChangesAsync();
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error("AddActionlog", ex.ToString());
            }
           
        }

        public dt_manager GetLoginUser()
        {

            if (HttpContext.Current != null && _session[DTKeys.SESSION_ADMIN_INFO] != null)
            {
                dt_manager manager = _session[DTKeys.SESSION_ADMIN_INFO] as dt_manager;
                return manager;
            }
            else return null;


        }
    }
}

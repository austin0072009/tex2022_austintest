using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;
using MySql.Data.MySqlClient;

namespace Crazy2018_Sys_Service
{
    public class ManagerRoleService : BaseService<dt_manager_role, int, chesscarddbEntities>, IManagerRoleService
    {
        public DataResult DelRole(string ids)
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
                dbhelper.Database.ExecuteSqlCommand("delete from dt_manager_role_value where role_id=@roleid",
                 new MySqlParameter("@roleid", id));
                DelEntity(id); 
            }
            }
            result.Message = "删除成功";
            return result;
        }

        public List<dt_manager_role_value> GetRoleValues(int id)
        {
            using (chesscarddbEntities dbhelper = new chesscarddbEntities())
            {
                return dbhelper.dt_manager_role_value.Where(w => w.role_id == id).ToList();
            }
        }

        public DataResult SaveRole(RoleModel model)
        {
            DataResult result = new DataResult { Message = "保存成功" };
            try
            {
                var roleEntity = GetEntityByID(model.roleId);
                if (roleEntity == null || model.roleId == 0)
                {
                    roleEntity = AddEntity(new dt_manager_role { is_sys = model.roleType, role_name = model.roleName, role_type = model.roleType, role_value = model.roleValue });
                }
                SaveRole(roleEntity.id, model.nvaActions);
            }
            catch (Exception ex)
            {
                result.Code = (int)Status.fail;
                result.Message = ex.Message;
                Log.Error("保存角色信息", ex.Message);
            }
            return result;
        }
        private void SaveRole(int roleId, List<NvaAction> nvaData)
        {
            using (chesscarddbEntities dbhelper = new chesscarddbEntities())
            {
                var entitys = dbhelper.dt_navigation;
                foreach (var item in nvaData)
                {
                    var entity = entitys.Find(item.nvaId);
                    if (entity == null) continue;//如果导航不存在则跳过
                    var managerRoleEntitys = dbhelper.dt_manager_role_value;
                    var tempList = item.actions.Select(w => w.taction);
                    var delEntitys = managerRoleEntitys.Where(w => !tempList.Contains(w.action_type) && w.role_id == roleId && w.nav_name == entity.name);//删除该角色的x导航不包含的权限
                    managerRoleEntitys.RemoveRange(delEntitys);
                    foreach (var action in item.actions)
                    {
                        var managerRoleEntity = managerRoleEntitys.FirstOrDefault(w => w.action_type.Equals(action.taction) && w.role_id == roleId && w.nav_name.Equals(entity.name));
                        if (managerRoleEntity == null)
                        {
                            managerRoleEntitys.Add(new dt_manager_role_value { action_type = action.taction, nav_name = entity.name, role_id = roleId });//添加角色权限
                           
                        }

                    }
                }
                dbhelper.SaveChanges();
            }

        }
    }
}

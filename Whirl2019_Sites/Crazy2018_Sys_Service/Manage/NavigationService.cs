using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;

namespace Crazy2018_Sys_Service
{
    public class NavigationService : BaseService<dt_navigation, int, chesscarddbEntities>, INavigationService
    {
        public bool Exists(string name)
        {
            return GetEntityByWhere(w => w.name.Equals(name)) == null ? false : true;
        }

        public bool Exists(int id)
        {
            return GetEntityByID(id) == null ? false : true;
        }

        public DataTable GetList(int parent_id, string nav_type)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select id,parent_id,channel_id,nav_type,name,title,sub_title,icon_url,link_url,sort_id,is_lock,remark,action_type,is_sys");
            strSql.Append(" FROM dt_navigation");
            strSql.Append(" where nav_type='" + nav_type + "'");
            strSql.Append(" order by sort_id asc,id desc");
            DataTable dt = SqlQueryForDataTatable(strSql.ToString());
            if (dt == null)
                return null;
            //创建一个新的DataTable增加一个深度字段
            DataTable newData = new DataTable();
            newData.Columns.Add("id", typeof(int));
            newData.Columns.Add("parent_id", typeof(int));
            newData.Columns.Add("channel_id", typeof(int));
            newData.Columns.Add("class_layer", typeof(int));
            newData.Columns.Add("nav_type", typeof(string));
            newData.Columns.Add("name", typeof(string));
            newData.Columns.Add("title", typeof(string));
            newData.Columns.Add("sub_title", typeof(string));
            newData.Columns.Add("icon_url", typeof(string));
            newData.Columns.Add("link_url", typeof(string));
            newData.Columns.Add("sort_id", typeof(int));
            newData.Columns.Add("is_lock", typeof(int));
            newData.Columns.Add("remark", typeof(string));
            newData.Columns.Add("action_type", typeof(string));
            newData.Columns.Add("is_sys", typeof(int));
            GetChilds(dt, newData, parent_id, 0);
            return newData;
        }

        public string Navigation_validate(string navname, string old_name)
        {
            if (string.IsNullOrEmpty(navname))
            {
                return "{ \"info\":\"该导航别名不可为空！\", \"status\":\"n\" }";
            }
            if (navname.ToLower() == old_name.ToLower())
            {
                return "{ \"info\":\"该导航别名可使用\", \"status\":\"y\" }";
            }
            //检查保留的名称开头
            if (navname.ToLower().StartsWith("channel_"))
            {
                return "{ \"info\":\"该导航别名系统保留，请更换！\", \"status\":\"n\" }";

            }
            if (Exists(navname))
            {
                return "{ \"info\":\"该导航别名已被占用，请更换！\", \"status\":\"n\" }";
            }
            return "{ \"info\":\"该导航别名可使用\", \"status\":\"y\" }";
        }
        private void GetChilds(DataTable oldData, DataTable newData, int parent_id, int class_layer)
        {

            class_layer++;
            DataRow[] dr = oldData.Select("parent_id=" + parent_id);
            for (int i = 0; i < dr.Length; i++)
            {
                //添加一行数据
                DataRow row = newData.NewRow();
                row["id"] = int.Parse(dr[i]["id"].ToString());
                row["parent_id"] = int.Parse(dr[i]["parent_id"].ToString());
                row["channel_id"] = int.Parse(dr[i]["channel_id"].ToString());
                row["class_layer"] = class_layer;
                row["nav_type"] = dr[i]["nav_type"].ToString();
                row["name"] = dr[i]["name"].ToString();
                row["title"] = dr[i]["title"].ToString();
                row["sub_title"] = dr[i]["sub_title"].ToString();
                row["icon_url"] = dr[i]["icon_url"].ToString();
                row["link_url"] = dr[i]["link_url"].ToString();
                row["sort_id"] = int.Parse(dr[i]["sort_id"].ToString());
                row["is_lock"] = int.Parse(dr[i]["is_lock"].ToString());
                row["remark"] = dr[i]["remark"].ToString();
                row["action_type"] = dr[i]["action_type"].ToString();
                row["is_sys"] = dr[i]["is_sys"] == null ? 0 : int.Parse(dr[i]["is_sys"].ToString());
                newData.Rows.Add(row);
                //调用自身迭代
                this.GetChilds(oldData, newData, int.Parse(dr[i]["id"].ToString()), class_layer);
            }
        }
    }
}

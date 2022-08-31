using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoginSystem
{
    public class DUserMsg
    {
        /// <summary>
        /// 数据库操作对象
        /// </summary>
        DbHelperSQL dbHelper = new DbHelperSQL(ConfigurationManager.ConnectionStrings["UsermsgConnStr"].ConnectionString);

        /// <summary>
        /// 得到最大ID
        /// </summary>
        public int GetMaxId()
        {
            return dbHelper.GetMaxID("id", "UserMsg");
        }

        /// <summary>
        /// 是否存在该记录
        /// </summary>
        public bool Exists(int id)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select count(1) from UserMsg");
            strSql.Append(" where id=@id ");
            MySqlParameter[] parameters = {
                    new MySqlParameter("@id", MySqlDbType.Int32,11)         };
            parameters[0].Value = id;

            return dbHelper.Exists(strSql.ToString(), parameters);
        }

        /// <summary>
        /// 增加一条数据
        /// </summary>
        public bool Add(MUserMsg model)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("insert into UserMsg(");
            strSql.Append("userID,phoneNum,operType,verifyCode,matchTimes,addTime,modifyTime,isDelete)");
            strSql.Append(" values (");
            strSql.Append("@userID,@phoneNum,@operType,@verifyCode,@matchTimes,@addTime,@modifyTime,@isDelete)");
            MySqlParameter[] parameters = {
                    new MySqlParameter("@userID", MySqlDbType.VarChar),
                    new MySqlParameter("@phoneNum", MySqlDbType.VarChar),
                    new MySqlParameter("@operType", MySqlDbType.Int32),
                    new MySqlParameter("@verifyCode", MySqlDbType.VarChar),
                    new MySqlParameter("@matchTimes", MySqlDbType.Int32),
                    new MySqlParameter("@addTime", MySqlDbType.DateTime),
                    new MySqlParameter("@isDelete", MySqlDbType.Int32),
                    new MySqlParameter("@modifyTime", MySqlDbType.DateTime)};
            parameters[0].Value = model.UserID;
            parameters[1].Value = model.PhoneNum;
            parameters[2].Value = model.OperType;
            parameters[3].Value = model.VerifyCode;
            parameters[4].Value = model.MatchTimes;
            parameters[5].Value = model.AddTime;
            parameters[6].Value = model.IsDelete;
            parameters[7].Value = model.ModifyTime;

            int rows = dbHelper.ExecuteSql(strSql.ToString(), parameters);
            if (rows > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        /// <summary>
        /// 更新一条数据
        /// </summary>
        public bool Update(MUserMsg model)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("update UserMsg set ");
            strSql.Append("userID=@userID,");
            strSql.Append("phoneNum=@phoneNum,");
            strSql.Append("operType=@operType,");
            strSql.Append("verifyCode=@verifyCode,");
            strSql.Append("matchTimes=@matchTimes,");
            strSql.Append("addTime=@addTime,");
            strSql.Append("isDelete=@isDelete,");
            strSql.Append("modifyTime=@modifyTime");
            strSql.Append(" WHERE id=@id");
            MySqlParameter[] parameters = {
                    new MySqlParameter("@userID", MySqlDbType.VarChar),
                    new MySqlParameter("@phoneNum", MySqlDbType.VarChar),
                    new MySqlParameter("@operType", MySqlDbType.Int32),
                    new MySqlParameter("@verifyCode", MySqlDbType.VarChar),
                    new MySqlParameter("@matchTimes", MySqlDbType.Int32),
                    new MySqlParameter("@addTime", MySqlDbType.DateTime),
                    new MySqlParameter("@isDelete", MySqlDbType.Int32),
                    new MySqlParameter("@modifyTime", MySqlDbType.DateTime),
                    new MySqlParameter("@id", MySqlDbType.Int32)};
            parameters[0].Value = model.UserID;
            parameters[1].Value = model.PhoneNum;
            parameters[2].Value = model.OperType;
            parameters[3].Value = model.VerifyCode;
            parameters[4].Value = model.MatchTimes;
            parameters[5].Value = model.AddTime;
            parameters[6].Value = model.IsDelete;
            parameters[7].Value = model.ModifyTime;
            parameters[8].Value = model.Id;

            int rows = dbHelper.ExecuteSql(strSql.ToString(), parameters);
            if (rows > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// 删除一条数据
        /// </summary>
        public bool Delete(int id)
        {

            StringBuilder strSql = new StringBuilder();
            strSql.Append("delete from UserMsg ");
            strSql.Append(" where id=@id ");
            MySqlParameter[] parameters = {
                    new MySqlParameter("@id", MySqlDbType.Int32)
                    };
            parameters[0].Value = id;

            int rows = dbHelper.ExecuteSql(strSql.ToString(), parameters);
            if (rows > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        /// <summary>
        /// 批量删除数据
        /// </summary>
        public bool DeleteList(string idlist)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("delete from UserMsg ");
            strSql.Append(" where id in (" + idlist + ")  ");
            int rows = dbHelper.ExecuteSql(strSql.ToString());
            if (rows > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        /// <summary>
        /// 得到一个对象实体
        /// </summary>
        public MUserMsg GetModel(int id)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select * from UserMsg ");
            strSql.Append(" where id=@id ");
            MySqlParameter[] parameters = {
                    new MySqlParameter("@id", MySqlDbType.Int32,11)         };
            parameters[0].Value = id;

            MUserMsg model = new MUserMsg();
            DataSet ds = dbHelper.Query(strSql.ToString(), parameters);
            if (ds.Tables[0].Rows.Count > 0)
            {
                return DataRowToModel(ds.Tables[0].Rows[0]);
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// 得到一个对象实体
        /// </summary>
        public MUserMsg GetModel(string phoneNum, int type)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select * from UserMsg ");
            strSql.Append(" where phoneNum=@phoneNum and operType=@operType order by addTime desc");
            MySqlParameter[] parameters = {
                    new MySqlParameter("@phoneNum", MySqlDbType.VarChar),
                    new MySqlParameter("@operType", MySqlDbType.Int32)
            };
            parameters[0].Value = phoneNum;
            parameters[1].Value = type;

            MUserMsg model = new MUserMsg();
            DataSet ds = dbHelper.Query(strSql.ToString(), parameters);
            if (ds.Tables[0].Rows.Count > 0)
            {
                return DataRowToModel(ds.Tables[0].Rows[0]);
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// 得到一个对象实体
        /// </summary>
        public MUserMsg DataRowToModel(DataRow row)
        {
            MUserMsg model = new MUserMsg();
            if (row != null)
            {
                if (row["id"] != null && row["id"].ToString() != "")
                {
                    model.Id = int.Parse(row["id"].ToString());
                }
                if (row["userID"] != null)
                {
                    model.UserID = row["userID"].ToString();
                }
                if (row["phoneNum"] != null)
                {
                    model.PhoneNum = row["phoneNum"].ToString();
                }
                if (row["operType"] != null && row["operType"].ToString() != "")
                {
                    model.OperType = int.Parse(row["operType"].ToString());
                }
                if (row["verifyCode"] != null)
                {
                    model.VerifyCode = row["verifyCode"].ToString();
                }
                if (row["matchTimes"] != null && row["matchTimes"].ToString() != "")
                {
                    model.MatchTimes = int.Parse(row["matchTimes"].ToString());
                }
                if (row["addTime"] != null)
                {
                    model.AddTime = DateTime.Parse(row["addTime"].ToString());
                }
                if (row["isDelete"] != null && row["isDelete"].ToString() != "")
                {
                    model.IsDelete = int.Parse(row["isDelete"].ToString());
                }
                if (row["modifyTime"] != null)
                {
                    model.ModifyTime = DateTime.Parse(row["modifyTime"].ToString());
                }
            }
            return model;
        }

        /// <summary>
        /// 获得数据列表
        /// </summary>
        public DataSet GetList(string strWhere)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select *");
            strSql.Append(" FROM UserMsg ");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere);
            }
            return dbHelper.Query(strSql.ToString());
        }

        /// <summary>
        /// 获取记录总数
        /// </summary>
        public int GetRecordCount(string strWhere)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select count(1) FROM UserMsg ");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere);
            }
            object obj = dbHelper.GetSingle(strSql.ToString());
            if (obj == null)
            {
                return 0;
            }
            else
            {
                return Convert.ToInt32(obj);
            }
        }
        /// <summary>
        /// 分页获取数据列表
        /// </summary>
        public DataSet GetListByPage(string strWhere, string orderby, int startIndex, int endIndex)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("SELECT * FROM ( ");
            strSql.Append(" SELECT ROW_NUMBER() OVER (");
            if (!string.IsNullOrEmpty(orderby.Trim()))
            {
                strSql.Append("order by T." + orderby);
            }
            else
            {
                strSql.Append("order by T.UserID desc");
            }
            strSql.Append(")AS Row, T.*  from UserMsg T ");
            if (!string.IsNullOrEmpty(strWhere.Trim()))
            {
                strSql.Append(" WHERE " + strWhere);
            }
            strSql.Append(" ) TT");
            strSql.AppendFormat(" WHERE TT.Row between {0} and {1}", startIndex, endIndex);
            return dbHelper.Query(strSql.ToString());
        }

        #region  ExtensionMethod
        /// <summary>
        /// 获得前几行数据
        /// </summary>
        public DataSet GetList(int Top, string strWhere, string filedOrder)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select *  FROM UserMsg ");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere);
            }
            strSql.Append(" order by " + filedOrder);
            if (Top > 0)
            {
                strSql.Append(" limit " + Top.ToString());
            }
            return dbHelper.Query(strSql.ToString());
        }

        /// <summary>
        /// 获取记录总数SQL语句
        /// </summary>
        /// <param name="_safeSql">SQL查询语句</param>
        /// <returns>记录总数SQL语句</returns>
        public static string CreateCountingSql(string _safeSql)
        {
            return string.Format(" SELECT COUNT(1) AS RecordCount FROM ({0}) AS T ", _safeSql);
        }
        #endregion  ExtensionMethod
    }
}

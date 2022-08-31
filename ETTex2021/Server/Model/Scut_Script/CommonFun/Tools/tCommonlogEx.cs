using ETModel.Framework.Common;
using ETModel.Framework.Data;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Data;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 房卡房间列表工具类
    /// </summary>
    public class tCommonlogEx
    {

        /// <summary>
        /// 写入club的club币日志
        /// 改变之后调用
        /// </summary>
        /// <param name="AfterGold">之后</param>
        /// <param name="BeforeGold">之前</param>
        /// <param name="ChangeType"></param>
        /// <param name="ClubId"></param>
        /// <param name="Gold"></param>
        /// <param name="Remark"></param>
        /// <param name="userid"></param>
        public static void WriteClubGoldlog(long AfterGold,long BeforeGold,int ChangeType, int ClubId,long Gold,string Remark,int userid)
        {
            tclubgoldlog clublog = new tclubgoldlog();
            clublog.AfterGold = AfterGold;
            clublog.BeforeGold = BeforeGold;
            clublog.ChangeType = ChangeType;
            clublog.ClubId = ClubId;
            clublog.Gold = Gold;
            clublog.Remark = Remark;
            clublog.UserId = userid;
            BaseHelper.AddAsync(clublog);
        }
       
        /// <summary>
        /// 获取申请列表
        /// </summary>
        /// <param name="type">申请类型</param>
        /// <param name="cid">申请目标主键</param>
        /// <returns></returns>
        public static List<tclubapplylog> GetApplyListlog(int type,long cid)
        {
            List<tclubapplylog> list = new List<tclubapplylog>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tclubapplylog", CommandMode.Inquiry);
            command.Columns = "Id,UserId,applyType,Status,applyTime,clubId,ownClubId,ClubCode";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND {1}", dbProvider.FormatFilterParam("applyType"), dbProvider.FormatFilterParam("clubId"));
            command.Filter.AddParam("applyType", type);
            command.Filter.AddParam("clubId", cid);
            command.OrderBy = "applyTime desc";
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    list.Add(new tclubapplylog
                    {
                        Id = dr["Id"].ToLong(),
                        UserId = dr["UserId"].ToInt(),
                        applyType = dr["applyType"].ToInt(),
                        Status = dr["Status"].ToInt(),
                        applyTime = dr["applyTime"].ToDateTime(),
                        clubId = dr["clubId"].ToLong(),
                        ownClubId = dr["ownClubId"].ToInt(),
                        ClubCode = dr["ClubCode"].ToInt(),
                    });
                }
            }
            return list;
        }

        /// <summary>
        /// 获取两种申请类型
        /// </summary>
        /// <param name="ctype">类型1</param>
        /// <param name="atype">类型2</param>
        /// <param name="cid"></param>
        /// <returns></returns>
        public static  List<tclubapplylog> GetApplyListlog(int ctype,int atype, long cid)
        {
            List<tclubapplylog> list = new List<tclubapplylog>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tclubapplylog", CommandMode.Inquiry);
            command.Columns = "Id,UserId,applyType,Status,applyTime,clubId,ownClubId,message,ClubCode";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("applyType IN({0},{1}) AND {2}", ctype, atype, dbProvider.FormatFilterParam("clubId"));
            command.Filter.AddParam("clubId", cid);
            command.OrderBy = "applyTime desc";
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    list.Add(new tclubapplylog
                    {
                        Id = dr["Id"].ToLong(),
                        UserId = dr["UserId"].ToInt(),
                        applyType = dr["applyType"].ToInt(),
                        Status = dr["Status"].ToInt(),
                        applyTime = dr["applyTime"].ToDateTime(),
                        clubId = dr["clubId"].ToLong(),
                        ownClubId = dr["ownClubId"].ToInt(),
                        message = dr["message"].ToString(),
                        ClubCode = dr["ClubCode"].ToInt()
                    });
                }
            }
            return list;
        }

        /// <summary>
        /// 得到未处理的日志
        /// </summary>
        /// <param name="type"></param>
        /// <param name="cid"></param>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static tclubapplylog  Getclubapplylog (int type, long cid,int userid)
        {
            tclubapplylog  list = new tclubapplylog();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tclubapplylog", CommandMode.Inquiry);
            command.Columns = "Id,UserId,applyType,Status,applyTime,clubId,ownClubId,ClubCode";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND {1} AND {2}", dbProvider.FormatFilterParam("applyType"), dbProvider.FormatFilterParam("clubId"), dbProvider.FormatFilterParam("UserId"));
            command.Filter.AddParam("applyType", type);
            command.Filter.AddParam("clubId", cid);
            command.Filter.AddParam("UserId", userid);
            command.Filter.AddParam("Status", 0);
            command.OrderBy = "applyTime desc LIMIT 0,1";
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    var model = new tclubapplylog()
                    {
                        Id = dr["Id"].ToLong(),
                        UserId = dr["UserId"].ToInt(),
                        applyType = dr["applyType"].ToInt(),
                        Status = dr["Status"].ToInt(),
                        applyTime = dr["applyTime"].ToDateTime(),
                        clubId = dr["clubId"].ToLong(),
                        ownClubId = dr["ownClubId"].ToInt(),
                        ClubCode = dr["ClubCode"].ToInt()
                    };
                    dr.Dispose();
                    return model;
                }
            }
            return null;
        }

        /// <summary>
        /// 得到联盟未处理的日志
        /// </summary>
        /// <param name="type"></param>
        /// <param name="cid"></param>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static tclubapplylog GetAlliapplylog(int type, long cid, int ownid)
        {
            tclubapplylog list = new tclubapplylog();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tclubapplylog", CommandMode.Inquiry);
            command.Columns = "Id,UserId,applyType,Status,applyTime,clubId,ownClubId,ClubCode";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND {1} AND {2}", dbProvider.FormatFilterParam("applyType"), dbProvider.FormatFilterParam("clubId"), dbProvider.FormatFilterParam("ownClubId"));
            command.Filter.AddParam("applyType", type);
            command.Filter.AddParam("clubId", cid);
            command.Filter.AddParam("ownClubId", ownid);
            command.Filter.AddParam("Status", 0);
            command.OrderBy = "applyTime desc LIMIT 0,1";
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    var model = new tclubapplylog()
                    {
                        Id = dr["Id"].ToLong(),
                        UserId = dr["UserId"].ToInt(),
                        applyType = dr["applyType"].ToInt(),
                        Status = dr["Status"].ToInt(),
                        applyTime = dr["applyTime"].ToDateTime(),
                        clubId = dr["clubId"].ToLong(),
                        ownClubId = dr["ownClubId"].ToInt(),
                        ClubCode = dr["ClubCode"].ToInt()
                    };
                    dr.Dispose();
                    return model;
                }
            }
            return null;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public static bool UpdateApplylogStatus(long logid,int status)
        {
            try
            {
                var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
                var command = dbProvider.CreateCommandStruct("tclubapplylog", CommandMode.Modify);
                command.AddParameter("Status", status);
                command.Filter = dbProvider.CreateCommandFilter();
                command.Filter.Condition = string.Format("{0}", dbProvider.FormatFilterParam("Id"));
                command.Filter.AddParam("Id", logid);

                command.Parser();

                return ConnectManagerEx.DataProvider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters) > 0 ? true : false;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "UpdateApplylogStatus fail error!!! ");
                return false;
            }
        }

        public static List<tclubusergoldlog> Getclubgoldlog(int clubid,int userid)
        {
            List<tclubusergoldlog> list = new List<tclubusergoldlog>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tclubusergoldlog", CommandMode.Inquiry);
            command.Columns = "Id,ChangeType,BeforeGold,AfterGold,Gold,CreateTime,ClubId,UserId";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND {1} AND ChangeType!=5 AND ChangeType!=11", dbProvider.FormatFilterParam("ClubId"), dbProvider.FormatFilterParam("UserId"));
            command.Filter.AddParam("ClubId", clubid);
            command.Filter.AddParam("UserId", userid);
            command.OrderBy = "CreateTime desc LIMIT 0,100";
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    list.Add(new tclubusergoldlog
                    {
                        Id = dr["Id"].ToInt32(),
                        ChangeType = dr["ChangeType"].ToInt(),
                        BeforeGold = dr["BeforeGold"].ToLong(),
                        AfterGold = dr["AfterGold"].ToLong(),
                        Gold = dr["Gold"].ToLong(),
                        ClubId = dr["ClubId"].ToInt(),
                        UserId = dr["UserId"].ToInt(),
                        CreateTime = dr["CreateTime"].ToDateTime()
                    });
                }
            }
            return list;
        }

        public static List<tclubgoldlog> Getclubgoldlog(int clubid)
        {
            List<tclubgoldlog> list = new List<tclubgoldlog>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tclubgoldlog", CommandMode.Inquiry);
            command.Columns = "Id,ChangeType,BeforeGold,AfterGold,Gold,CreateTime,ClubId,UserId";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0}", dbProvider.FormatFilterParam("ClubId"));
            command.Filter.AddParam("ClubId", clubid);
            command.OrderBy = "CreateTime desc LIMIT 0,100";
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    list.Add(new tclubgoldlog
                    {
                        Id = dr["Id"].ToInt32(),
                        ChangeType = dr["ChangeType"].ToInt(),
                        BeforeGold = dr["BeforeGold"].ToLong(),
                        AfterGold = dr["AfterGold"].ToLong(),
                        Gold = dr["Gold"].ToLong(),
                        ClubId = dr["ClubId"].ToInt(),
                        UserId = dr["UserId"].ToInt(),
                        CreateTime = dr["CreateTime"].ToDateTime()
                    });
                }
            }
            return list;
        }

        public static List<tclubfundlog> GetFondLog(int clubid)
        {
            List<tclubfundlog> list = new List<tclubfundlog>();
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);

            var command = dbProvider.CreateCommandStruct("tclubfundlog", CommandMode.Inquiry);
            command.Columns = "Id,ChangeType,fnum,Price,CreateTime,ClubId,UserId,fundtotal";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0}", dbProvider.FormatFilterParam("ClubId"));
            command.Filter.AddParam("ClubId", clubid);
            command.OrderBy = "CreateTime desc LIMIT 0,20";
            command.Parser();
            using (var dr = dbProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (dr.Read())
                {
                    list.Add(new tclubfundlog
                    {
                        Id = dr["Id"].ToInt32(),
                        ChangeType = dr["ChangeType"].ToInt(),
                        fnum = dr["fnum"].ToInt(),
                        Price = dr["Price"].ToInt(),
                        fundtotal = dr["fundtotal"].ToLong(),
                        ClubId = dr["ClubId"].ToInt(),
                        UserId = dr["UserId"].ToInt(),
                        CreateTime = dr["CreateTime"].ToDateTime()
                    });
                }
            }
            return list;
        }
    }
}


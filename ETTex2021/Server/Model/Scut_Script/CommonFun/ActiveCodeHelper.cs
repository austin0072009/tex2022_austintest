using ETModel.Framework.Common;
using ETModel.Framework.Data;
using ETModel.Framework.Game.Sns;
using ETModel.Script.Model;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

/// <summary>
/// Scut ，?类型
/// </summary>
namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 暂时处理成不要ActiveCode
    /// </summary>
    public class ActiveCodeHelper : ConfigManger
    {
        public static ConcurrentDictionary<string, tActiveCode> ActiveCodeDic { get; set; }
        public static ConcurrentDictionary<int, List<int>> map = new ConcurrentDictionary<int, List<int>>();

        public static int mincode = 10000;
        public static int maxcode = 1000000;

        public static void LocadMap()
        {
            if (map.Count == 0)
            {
                var codes = BaseBrigeHelper.GetBaseAllMatch<tuseragent2021relation>(t=>t.UserID>0); 
                foreach (var item in codes)
                {
                    if (item.Code.Equals("0")) continue;
                    if (map.TryGetValue(item.cidx, out List<int> listcode))
                    {
                        listcode.Add(item.Code.ToInt32());
                    }
                    List<int> nlistcode = new List<int>();
                    map.TryAdd(item.cidx, nlistcode);
                }
            }
        }
        /// <summary>
        /// 暂时不用UpperLimitNumberGenerator
        /// 会有重复1000000邀请码
        /// </summary>
        /// <param name="uid"></param>
        /// <returns></returns>
        //public static UpperLimitNumberGenerator GetGenerator(int uid)
        //{
        //    if (!map.TryGetValue(uid, out int generator))
        //    {
        //        UpperLimitNumberGenerator  _g = new UpperLimitNumberGenerator(1000000, false);
        //        map.Add(uid, _g.generator().ToInt32());
        //        return _g;
        //    }
        //    UpperLimitNumberGenerator _ng = new UpperLimitNumberGenerator(1000000, false);
        //    return _ng;
        //}
        /// <summary>
        /// 
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static int GetNewCode(int cid)
        {
           var code = ToolsEx.GetRandomSys(mincode,maxcode);
            if (map.TryGetValue(cid, out List<int> v))
            {
                 if (v.Any(t=>t== code.ToInt32())) GetNewCode(cid);
                 v.Add(code);
                 return code;
            }
            else
            {
                List<int> nlistcode = new List<int>();
                nlistcode.Add(code);
                map.TryAdd(cid, nlistcode);
                return code;
            }
        }
        public static    int GetUserID(int code)
        {
            var User =   BaseBrigeHelper.GetBase<tuseragent2021relation>(t => t.Code == code.ToString());
            if (User != null) return User.UserID;
            return 0;
        }
        public static int GetCodeDB(int cidx, int userid)
        {
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
            var command = dbProvider.CreateCommandStruct("tActiveCode", CommandMode.Inquiry);
            command.Columns = "Activecode";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND {1}", dbProvider.FormatFilterParam("UseUserId", "="),
                dbProvider.FormatFilterParam("cidx", "="));
            command.Filter.AddParam("UseUserId", userid);
            command.Filter.AddParam("cidx", cidx);
            command.Parser();

            object _res = ConnectManagerEx.DataProvider.ExecuteScalar(CommandType.Text, command.Sql, command.Parameters);
            if (_res != null) return _res.ToInt32();
            else return -1;
        }
        public static tActiveCode GetActive(int cidx, int userid)
        {
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
            var command = dbProvider.CreateCommandStruct("tActiveCode", CommandMode.Inquiry);
            command.Columns = "Id,Activecode,GenerateUserId,cidx,UseUserId,CreateDate";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0} AND {1}", dbProvider.FormatFilterParam("UseUserId", "="),
                dbProvider.FormatFilterParam("cidx", "="));
            command.Filter.AddParam("UseUserId", userid);
            command.Filter.AddParam("cidx", cidx);
            command.Parser();
            using (var reader = ConnectManagerEx.DataProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    tActiveCode ordermode = new tActiveCode
                    {
                        Id = reader["Id"].ToInt32(),
                        Activecode = reader["Activecode"].ToInt32(),
                        GenerateUserId = reader["GenerateUserId"].ToInt32(),
                        cidx = reader["cidx"].ToInt32(),
                        UseUserId = reader["UseUserId"].ToInt32(),
                        CreateDate = reader["CreateDate"].ToDateTime()
                    };
                    reader.Dispose();
                    return ordermode;
                }
            }
            return null;
        }

        public static tActiveCode GetActive(int code)
        {
            var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
            var command = dbProvider.CreateCommandStruct("tActiveCode", CommandMode.Inquiry);
            command.Columns = "Id,Activecode,GenerateUserId,cidx,UseUserId,CreateDate";
            command.Filter = dbProvider.CreateCommandFilter();
            command.Filter.Condition = string.Format("{0}", dbProvider.FormatFilterParam("Activecode", "="));
            command.Filter.AddParam("Activecode", code);
            command.Parser();
            using (var reader = ConnectManagerEx.DataProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
            {
                while (reader.Read())
                {
                    tActiveCode ordermode = new tActiveCode
                    {
                        Id = reader["Id"].ToInt32(),
                        Activecode = reader["Activecode"].ToInt32(),
                        GenerateUserId = reader["GenerateUserId"].ToInt32(),
                        cidx = reader["cidx"].ToInt32(),
                        UseUserId = reader["UseUserId"].ToInt32(),
                        CreateDate = reader["CreateDate"].ToDateTime()
                    };
                    reader.Dispose();
                    return ordermode;
                }
            }
            return null;
        }


        public static void Delete(int cidx, int userid)
        {
            //var active = GetActive(cidx, userid);
            //if (active == null) return;
            //var generator = GetGenerator(cidx);
            //BaseHelper.Delete(active);
            //generator.recycle(active.Activecode);
        }


        public static void InitActiveCodeData()
        {
            ActiveCodeDic = new ConcurrentDictionary<string, tActiveCode>();
            var lst = ActiveCodeHelper.GetActiveCode();
            if (lst != null && lst.Count > 0)
            {
                foreach (var item in lst)
                {
                    ActiveCodeDic.Add(item.Activecode.ToString(), item);
                }
            }
            ActiveCodeHelper.Initi26Code();
        }
        public static void Initi26Code()
        {
            List<tActiveCode> olist = GetActiveCode();
            if (olist.Count < 6)
            {
                string AZ = "123456789";
                foreach (var num in AZ)
                {
                    //string genCode = ToolsEx.GetActiveCode();//"LJHECA";//
                    string genCode = num + num + num + num + "";
                    var item = new tActiveCode
                    {
                        Activecode = int.Parse(genCode),
                        GenerateUserId = 0,//设置为0
                        UseUserId = 0,
                        CreateDate = MathUtils.Now,
                    };
                    if (ActiveCodeDic.TryAdd(genCode, item))
                    {
                        AddActiveCode(item); //直写DB
                    }
                }
            }
        }
        /// <summary>
        /// 重置code
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="code"></param>
        /// <returns></returns>
        public static bool ResetActiveCode(string code)
        {
            try
            {
                var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
                var command = dbProvider.CreateCommandStruct("tActiveCode", CommandMode.Modify);
                command.AddParameter("GenerateUserId", 0);
                command.AddParameter("UseUserId", 0);
                command.Filter = dbProvider.CreateCommandFilter();
                command.Filter.Condition = string.Format("{0}", dbProvider.FormatFilterParam("Activecode"));
                command.Filter.AddParam("Activecode", code);

                command.Parser();

                return ConnectManagerEx.DataProvider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters) > 0 ? true : false;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "      UpdateActiveCode fail error!!! ");
                return false;
            }
        }





        /// <summary>
        /// 找到按ID升序的 第一个未使用的码
        /// </summary>
        /// <returns></returns>
        public static tActiveCode GetActiveCodeByCode(string code)
        {
            try
            {
                var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
                var command = dbProvider.CreateCommandStruct("tActiveCode", CommandMode.Inquiry);
                command.Columns = "*";
                command.Filter = dbProvider.CreateCommandFilter();
                command.Filter.Condition = string.Format("{0}", dbProvider.FormatFilterParam("Activecode"));
                command.Filter.AddParam("Activecode", code);

                command.OrderBy = "id asc LIMIT 0,1";
                command.Parser();

                using (var reader = ConnectManagerEx.DataProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                {

                    while (reader.Read())
                    {
                        tActiveCode ordermode = new tActiveCode
                        {
                            Id = reader["Id"].ToInt32(),
                            Activecode = reader["Activecode"].ToInt32(),
                            GenerateUserId = reader["GenerateUserId"].ToInt32(),
                            UseUserId = reader["UseUserId"].ToInt32(),
                            CreateDate = reader["CreateDate"].ToDateTime()
                        };
                        reader.Dispose();
                        return ordermode;
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "  db error!!! code:" + code);
                return null;
            }
            return null;
        }

        /// <summary>
        /// 初始化生成的时候才会调用
        /// </summary>
        /// <returns></returns>
        public static List<tActiveCode> GetActiveCode()
        {
            try
            {
                var command = ConnectManagerEx.DataProvider.CreateCommandStruct("tActiveCode", CommandMode.Inquiry);
                command.Columns = "Id,Activecode,cidx,GenerateUserId,UseUserId,CreateDate";
                command.Parser();

                using (var reader = ConnectManagerEx.DataProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                {
                    List<tActiveCode> olist = new List<tActiveCode>();
                    while (reader.Read())
                    {
                        tActiveCode ordermode = new tActiveCode
                        {
                            Id = reader["Id"].ToInt32(),
                            cidx = reader["cidx"].ToInt32(),
                            Activecode = reader["Activecode"].ToInt32(),
                            GenerateUserId = reader["GenerateUserId"].ToInt32(),
                            UseUserId = reader["UseUserId"].ToInt32(),
                            CreateDate = reader["CreateDate"].ToDateTime()
                        };
                        olist.Add(ordermode);
                    }
                    reader.Dispose();
                    return olist;
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "tActiveCode  to db error:");
            }
            return new List<tActiveCode>();
        }

        /// <summary>
        /// 生成自已的激活码
        /// </summary>
        /// <param name="UserID"></param> 
        /// <returns></returns>
        public static async Task<string> GenerateCode(int UserID)
        {
            var code = await BaseHelper.GetNoUseActiveCode();
            if (code == null)
            {
                TraceLogEx.Error("GenerateCode  code is null" + UserID);
                return "";
            }
            else
            {
                await BaseHelper.UpdateActiveCode(code.Id, UserID);
                return code.Activecode.ToString();
            }
        }
        public static async Task<bool> AddActiveCode(tActiveCode model)
        {
            return await BaseHelper.InsertShare(model);
            //var command = ConnectManagerEx.DataProvider.CreateCommandStruct("tActiveCode", CommandMode.Insert);

            //command.AddParameter("Activecode", model.Activecode);
            //command.AddParameter("GenerateUserId", model.GenerateUserId);
            //command.AddParameter("UseUserId", model.UseUserId);
            //command.AddParameter("CreateDate", model.CreateDate);
            //command.Parser();

            //return ConfigManger.Provider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters) > 0;
        }

        /// <summary>
        /// 根据激活码获得信息
        /// </summary>
        /// <param name="useUserId"></param>
        /// <returns></returns>
        public static int GetUseUserId1to1GM(int useUserId)
        {
            var command = ConnectManagerEx.DataProvider.CreateCommandStruct("tActiveCode", CommandMode.Inquiry);
            command.Columns = "UseUserId";
            command.Filter = ConnectManagerEx.DataProvider.CreateCommandFilter();
            command.Filter.Condition = command.Filter.FormatExpression("UseUserId");
            command.Filter.AddParam("UseUserId", useUserId);
            command.Parser();
            int UseUserId = ConnectManagerEx.DataProvider.ExecuteScalar(CommandType.Text, command.Sql, command.Parameters).ToInt32();
            return UseUserId;
        }


        public static async Task<string> GetUsedActiveCode(int UserID)
        {
            SnsUser _snsUser = await SnsManager.GetUserInfoByUserId(UserID);
            if (_snsUser == null || string.IsNullOrEmpty(_snsUser.ActiveCode)) return "";

            return _snsUser.ActiveCode;
        }

        /// <summary>
        /// 找到使用此激活码的人
        /// </summary>
        /// <param name="useUserId"></param>
        /// <returns></returns>
        public static int GetUseUserId(string code)
        {
            var command = ConnectManagerEx.DataProvider.CreateCommandStruct("tActiveCode", CommandMode.Inquiry);
            command.Columns = "UseUserId";
            command.Filter = ConnectManagerEx.DataProvider.CreateCommandFilter();
            command.Filter.Condition = command.Filter.FormatExpression("Activecode");
            command.Filter.AddParam("Activecode", code);
            command.Parser();

            object _res = ConnectManagerEx.DataProvider.ExecuteScalar(CommandType.Text, command.Sql, command.Parameters);
            if (_res != null) return _res.ToInt32();
            else return 0;
        }

        /// <summary>
        /// 根据激活码获得信息
        /// </summary>
        /// <param name="useUserId"></param>
        /// <returns></returns>
        public static string GetActiveCodeByGenerateUserId(int UserID)
        {
            var command = ConnectManagerEx.DataProvider.CreateCommandStruct("tActiveCode", CommandMode.Inquiry);
            command.Columns = "Activecode";
            command.Filter = ConnectManagerEx.DataProvider.CreateCommandFilter();
            command.Filter.Condition = command.Filter.FormatExpression("GenerateUserId");
            command.Filter.AddParam("GenerateUserId", UserID);
            command.Parser();
            object _res = ConnectManagerEx.DataProvider.ExecuteScalar(CommandType.Text, command.Sql, command.Parameters);
            if (_res != null) return _res.ToString();
            else return "";
        }

        /// <summary>
        /// 找到按ID升序的 第一个未使用的码
        /// </summary>
        /// <returns></returns>
        public static tActiveCode GetNoUseActiveCode()
        {
            try
            {
                var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
                var command = dbProvider.CreateCommandStruct("tActiveCode", CommandMode.Inquiry);
                command.Columns = "*";
                command.Filter = dbProvider.CreateCommandFilter();
                command.Filter.Condition = string.Format("{0}", dbProvider.FormatFilterParam("UseUserId"));
                command.Filter.AddParam("UseUserId", 0);

                command.OrderBy = "Id asc LIMIT 0,1";
                command.Parser();

                using (var reader = ConnectManagerEx.DataProvider.ExecuteReader(CommandType.Text, command.Sql, command.Parameters))
                {

                    while (reader.Read())
                    {
                        tActiveCode ordermode = new tActiveCode
                        {
                            Id = reader["Id"].ToInt32(),
                            Activecode = reader["Activecode"].ToInt32(),
                            GenerateUserId = reader["GenerateUserId"].ToInt32(),
                            UseUserId = reader["UseUserId"].ToInt32(),
                            CreateDate = reader["CreateDate"].ToDateTime()
                        };
                        reader.Dispose();
                        return ordermode;
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "can not find tActiveCode  int db   fetal error!!!");
                return null;
            }
            return null;
        }

        public static bool UpdateActiveCode(int id, int userid)
        {
            try
            {
                var dbProvider = DbConnectionProvider.CreateDbProvider(strFixed.strConnectstring);
                var command = dbProvider.CreateCommandStruct("tActiveCode", CommandMode.Modify);
                command.AddParameter("GenerateUserId", 0);
                command.AddParameter("UseUserId", userid);
                command.Filter = dbProvider.CreateCommandFilter();
                command.Filter.Condition = string.Format("{0}", dbProvider.FormatFilterParam("Id"));
                command.Filter.AddParam("Id", id);

                command.Parser();

                return ConnectManagerEx.DataProvider.ExecuteQuery(CommandType.Text, command.Sql, command.Parameters) > 0 ? true : false;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "      UpdateActiveCode fail error!!! " + userid);
                return false;
            }
        }
    }
}


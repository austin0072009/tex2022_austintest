using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;
using System.Linq.Expressions;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_Sys_Service
{
    public class GameUserService : BaseService<tuser, int, texas_2021Entities>, IGameUserService
    {
        /// <summary>
        /// 1账号不存在  2;//账号密码错误 3;//账号锁定
        /// </summary>
        /// <param name="name"></param>
        /// <param name="pwd"></param>
        /// <returns></returns>
        public int ChenkUser(string name, string pwd)
        {
            try
            {
                var codepwd = StringHelper.RegUser_MD5_Pwd(pwd);
                using (snscenterwhirlEntities db = new snscenterwhirlEntities())
                {
                   var namedata = db.snsuserinfo.Where(t => t.PassportID == name).FirstOrDefault();
                    if (namedata != null)
                    {
                       var user = db.snsuserinfo.Where(t => t.PassportID == name && t.PassportPwd == codepwd).FirstOrDefault();
                        if (user==null)
                        {
                            return 2;//账号密码错误
                        }
                        else
                        {
                            return 3;
                        }
                    }
                    else return 1;//账号不存在  

                    //return db.snsuserinfo.Where(t => t.PassportID == name && t.PassportPwd == codepwd).FirstOrDefault() == null ? false : true;
                }
            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        public DataResult<GameUserView> GetGameUserByID(int userId)
        {
            DataResult<GameUserView> result = new DataResult<GameUserView>();
            result.Message = "获取成功";
            if (userId <= 0)
            {
                result.Code = (int)Status.fail;
                result.Message = "用户ID不能为空";
                return result;
            }


            var userInfo = GetEntityByWhere(w => w.UserID == userId);
            var gameuser = GetUserById(userId);
            if (userInfo == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "用户不存在" + userId;
                return result;
            }
            result.Data = new GameUserView
            {
               // AgentId = userInfo.AgentId.Value,
                Diamond = userInfo.diamond.Value,
                IP = userInfo.IP,
                IsAgent = "否",
                IsRobot = userInfo.isRobot.Value == 1 ? "是" : "否",
                LockTime = userInfo.lockTime,
                RegTime = userInfo.RegTime.ToString(),
                WechatName = userInfo.wechatName,
                WechatHeadIcon = userInfo.wechatHeadIcon,
               // RobotLevel = userInfo.RobotLevel.Value,
                WinPercent = userInfo.winpercent.Value,
                TotalDiamond = userInfo.totaldiamond.Value,
                TotalMoney = userInfo.TotalGold.Value/100,
                UserName = userInfo.wechatName,
                UserID = userInfo.UserID,
                UserMoney = userInfo.Gold.HasValue ? userInfo.Gold.Value/100:0,
                LastLotinTime = userInfo.LastLotinTime1,
                PhoneNum = gameuser==null ? "": gameuser.MobilePhoneNum,
                  RobotGameid = (int)userInfo.RobotGameid
            };
            return result;
        }

        public DataResults<GameUserView> GetGameUserData(DPagePara page, int roleId = 0)
        {
            DataResults<GameUserView> result = new DataResults<GameUserView>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<tuser, bool>> fun = w => w != null;
            try
            {
                using (snscenterwhirlEntities s = new snscenterwhirlEntities())
                {
                    var snlist = s.snsuserinfo;;//分页获取
                 
                    using (chesscarddbEntities dbhelper = new chesscarddbEntities())
                    {
                        var manager = dbhelper.dt_manager_role.Find(roleId);
                        if (manager == null)
                        {
                            result.Code = (int)Status.fail;
                            result.Message = "管理员角色不存在";
                            return result;
                        }
                        //if (manager.role_type != 1)
                        //   // fun = fun.And(w => w.AgentId.Value == manager.role_value.Value);
                        if (!string.IsNullOrEmpty(page.Keywords))
                        {
                            int tempId = 0;
                            int.TryParse(page.Keywords, out tempId);
                            if (tempId > 0)
                                fun = fun.And(w => w.UserID == tempId);
                            else
                                fun = fun.And(w => w.wechatName.Contains(page.Keywords) || w.wechatName.Contains(page.Keywords));
                        }
                        //if (page.isRobot!=-1)
                        //{
                        fun = fun.And(w => w.isRobot == 0);
                        //}

                        using (texas_2021Entities db = new texas_2021Entities())
                        {
                            var tdata = (from w in GetEntityLisrByWhere(fun)
                                         .OrderBy(t => t.UserID).Skip((page.PageIndex - 1) * page.PageSize)
                                         .Take(page.PageSize).ToList() //; db.tuser.Where(fun)
                                         join b in db.tuseragent2019 on w.UserID equals b.UserID
                                         join e in db.tuser on b.FUserID equals e.UserID
                                         into c
                                         from aa in c.DefaultIfEmpty()
                                         join d in db.gameuser on w.UserID equals d.UserId
                                         into f

                                         from dd in f.DefaultIfEmpty()
                                         select new GameUserView
                                         {
                                             RegTime = w.RegTime == null ? "" : w.RegTime.ToString(),
                                             Diamond = w.diamond.Value,
                                             TopUserName = aa?.wechatName + "(" + aa?.UserID + ")",
                                             IP = w.IP,
                                             vlevel = w.vlevel.HasValue ? w.vlevel.Value : 0,
                                             IsAgent = "否",
                                             IsRobot = w.isRobot.Value == 1 ? "是" : "否",
                                             LastLotinTime = string.IsNullOrEmpty(w.LastLotinTime1) ? "" : w.LastLotinTime1.Substring(5, 14),
                                             TotalDiamond = w.totaldiamond.Value,
                                             TotalMoney = w.TotalGold.Value / 100,
                                             UserID = w.UserID,
                                             UserMoney = w.Gold.Value / 100,
                                             UserName = w.wechatName,
                                             WechatName = w.wechatName,
                                             PhoneNum = dd.MobilePhoneNum,
                                             RobotGameid = (int)w.RobotGameid
                                         }).ToList();


                            var lists = from w in tdata
                                        join b in snlist on w.UserID equals b.UserId into temp
                                        from tt in temp.DefaultIfEmpty()
                                        select new GameUserView
                                        {
                                            RegTime = w.RegTime == null ? "" : w.RegTime.ToString(),
                                            Diamond = w.Diamond,
                                            TopUserName = w.TopUserName,
                                            IP = w.IP,
                                            WinPercent = w.WinPercent,
                                            vlevel = w.vlevel,
                                            IsAgent = "否",
                                            IsRobot = w.IsRobot,
                                            LastLotinTime = w.LastLotinTime,
                                            TotalDiamond = w.TotalDiamond,
                                            TotalMoney = w.TotalMoney,
                                            UserID = w.UserID,
                                            UserMoney = w.UserMoney,
                                            UserName = w.UserName,
                                            WechatName = w.WechatName,
                                            PhoneNum = w.PhoneNum,
                                            RobotGameid = (int)w.RobotGameid,
                                            PassportID = tt != null? tt.PassportID == null ? "" : tt.PassportID:""
                                        };
                            result.Data = lists.ToList();
                            result.TotalCount = lists.Count();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error(this.GetType().ToString(), ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取失败";
            }
            return result;
        }

        public DataResults<GameUserView> GetGameUserData(DPage page, int roleId = 0, int isrobot = 1)
        {
            DataResults<GameUserView> result = new DataResults<GameUserView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<tuser, bool>> fun = w => w != null && w.isRobot == isrobot;
            try
            {
                using (chesscarddbEntities dbhelper = new chesscarddbEntities())
                {
                    var manager = dbhelper.dt_manager_role.Find(roleId);
                    if (manager == null)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "管理员角色不存在";
                        return result;
                    }
                    //if (manager.role_type != 1)
                    //   // fun = fun.And(w => w.AgentId.Value == manager.role_value.Value);
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int tempId = 0;
                        int.TryParse(page.Keywords, out tempId);
                        if (tempId > 0)
                            fun = fun.And(w => w.UserID == tempId);
                        else
                            fun = fun.And(w => w.wechatName.Contains(page.Keywords) || w.wechatName.Contains(page.Keywords));
                    }

                   
                    using (texas_2021Entities db = new texas_2021Entities())
                    {
                        var tdata = from w in GetEntityLisrByWhere(fun)
                                    .OrderByDescending(t => t.UserID)
                                    .Skip((page.PageIndex - 1) * page.PageSize)
                                    .Take(page.PageSize)
                                    .ToList()
                                    join b in db.tuseragent2019 on w.UserID equals b.UserID
                                    join e in db.tuser on b.FUserID equals e.UserID
                                    into c
                                    from aa in c.DefaultIfEmpty()
                                    join d in db.gameuser on w.UserID equals d.UserId
                                    into f
                                    from dd in f.DefaultIfEmpty()
                                    select new GameUserView
                                    {
                                        RegTime = w.RegTime == null ? "" : w.RegTime.ToString(),
                                        Diamond = w.diamond.Value,
                                        TopUserName = aa?.wechatName + "(" + aa?.UserID + ")",
                                        IP = w.IP,
                                        WinPercent = w.winpercent.Value,
                                        vlevel = w.vlevel.HasValue ? w.vlevel.Value : 0,
                                        IsAgent = "否",
                                        IsRobot = w.isRobot.Value == 1 ? "是" : "否",
                                        LastLotinTime = string.IsNullOrEmpty(w.LastLotinTime1) ? "" : w.LastLotinTime1.Substring(5, 14),
                                        TotalDiamond = w.totaldiamond.Value,
                                        TotalMoney = w.TotalGold.Value / 100,
                                        UserID = w.UserID,
                                        UserMoney = w.Gold.Value / 100,
                                        UserName = w.wechatName,
                                        WechatName = w.wechatName,
                                        PhoneNum = dd?.MobilePhoneNum,
                                        RobotGameid = (int)w.RobotGameid
                                    };

                        result.Data = tdata.ToList();
                        result.TotalCount = tdata.Count();

                    }
                    
                }
            }
            catch (Exception ex)
            {
                Log.Error(this.GetType().ToString(), ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取失败";
            }
            return result;
        }

        public DataResults<GameUserView> GetGameUserData(DPage page, int roleId = 0, int isrobot = 1,int robotgameid=-1)
        {
            DataResults<GameUserView> result = new DataResults<GameUserView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<tuser, bool>> fun = w => w != null && w.isRobot == isrobot;
            try
            {
                using (chesscarddbEntities dbhelper = new chesscarddbEntities())
                {
                    var manager = dbhelper.dt_manager_role.Find(roleId);
                    if (manager == null)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "管理员角色不存在";
                        return result;
                    }
                    //if (manager.role_type != 1)
                    //   // fun = fun.And(w => w.AgentId.Value == manager.role_value.Value);
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int tempId = 0;
                        int.TryParse(page.Keywords, out tempId);
                        if (tempId > 0)
                            fun = fun.And(w => w.UserID == tempId);
                        else
                            fun = fun.And(w => w.wechatName.Contains(page.Keywords) || w.wechatName.Contains(page.Keywords));
                    }
                    if (robotgameid!=-1)
                    {
                        fun = fun.And(w => w.RobotGameid==robotgameid);

                    }

                    using (texas_2021Entities db = new texas_2021Entities())
                    {
                        var tdata = from w in GetEntityLisrByWhere(fun)
                                    .OrderByDescending(t => t.UserID)
                                    .Skip((page.PageIndex - 1) * page.PageSize)
                                    .Take(page.PageSize)
                                    .ToList()// db.tuser.Where(fun)
                                    join b in db.tuseragent2019 on w.UserID equals b.UserID
                                    join e in db.tuser on b.FUserID equals e.UserID
                                    into c
                                    from aa in c.DefaultIfEmpty()
                                    join d in db.gameuser on w.UserID equals d.UserId
                                    into f
                                    from dd in f.DefaultIfEmpty()
                                    select new GameUserView
                                    {
                                        RegTime = w.RegTime == null ? "" : w.RegTime.ToString(),
                                        Diamond = w.diamond.Value,
                                        TopUserName = aa.wechatName + "(" + aa.UserID + ")",
                                        IP = w.IP,
                                        WinPercent = w.winpercent.Value,
                                        vlevel = w.vlevel.HasValue ? w.vlevel.Value : 0,
                                        IsAgent = "否",
                                        IsRobot = w.isRobot.Value == 1 ? "是" : "否",
                                        LastLotinTime = string.IsNullOrEmpty(w.LastLotinTime1) ? "" : w.LastLotinTime1.Substring(5, 14),
                                        TotalDiamond = w.totaldiamond.Value,
                                        TotalMoney = w.TotalGold.Value / 100,
                                        UserID = w.UserID,
                                        UserMoney = w.Gold.Value / 100,
                                        UserName = w.wechatName,
                                        WechatName = w.wechatName,
                                        PhoneNum = dd.MobilePhoneNum,
                                        RobotGameid = (int)w.RobotGameid
                                    };
                        result.Data = tdata.ToList();
                        result.TotalCount = tdata.Count();

                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error(this.GetType().ToString(), ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取失败";
            }
            return result;
        }


        public DataResults<GameUserView> GetGameUserDataForCustomer(DPage page, int roleId = 0)
        {
            DataResults<GameUserView> result = new DataResults<GameUserView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<tuser, bool>> fun = w => w != null;
            try
            {
                using (chesscarddbEntities dbhelper = new chesscarddbEntities())
                {
                    var manager = dbhelper.dt_manager_role.Find(roleId);
                    if (manager == null)
                    {
                        result.Code = (int)Status.fail;
                        result.Message = "管理员角色不存在";
                        return result;
                    }
                    //if (manager.role_type != 1)
                    //   // fun = fun.And(w => w.AgentId.Value == manager.role_value.Value);
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int tempId = 0;
                        int.TryParse(page.Keywords, out tempId);
                        if (tempId > 0)
                            fun = fun.And(w => w.UserID == tempId);
                        else
                            fun = fun.And(w => w.wechatName.Contains(page.Keywords) || w.wechatName.Contains(page.Keywords));
                    }

                    result.Data = GetEntityLisrByWhere(fun, page.PageIndex, page.PageSize, (t) => t.RegTime.Value)
                          .Select(w => new GameUserView
                          {
                              RegTime = w.RegTime == null ? "" : w.RegTime.ToString(),
                              Diamond = w.diamond.Value,
                              IP = w.IP,
                              levelName = Enum.GetName(typeof(memberLevel),w.vlevel.Value),   //w.vlevel.HasValue ? w.vlevel.Value : 0,
                              IsAgent = "否",
                              IsRobot = w.isRobot.Value == 1 ? "是" : "否",
                              LastLotinTime = string.IsNullOrEmpty(w.LastLotinTime1) ? "" : w.LastLotinTime1.Substring(5, 14),
                              TotalDiamond = w.totaldiamond.Value,
                              TotalMoney = w.TotalGold.Value / 100,
                              UserID = w.UserID,
                              UserMoney = w.Gold.Value / 100,
                              UserName = w.wechatName,
                              WechatName = w.wechatName,
                              RobotGameid = (int)w.RobotGameid
                          }).ToList();
                    result.TotalCount = GetCount(fun);
                }
            }
            catch (Exception ex)
            {
                Log.Error(this.GetType().ToString(), ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取失败";
            }
            return result;
        }

        public int GetOneMonthNologin()
        {
            try
            {
                using (texas_2021Entities db = new texas_2021Entities())
                {
                    string sql = "select count(userid) num from tuser where isRobot=0 and DATE_FORMAT(LastLotinTime1, '%Y-%m-%d %H:%i:%s')<DATE_SUB(NOW(),INTERVAL 1 MONTH)";
                    return db.Database.SqlQuery<int>(sql).First();

                }
            }
            catch (Exception ex)
            {

                return 0;
            }
        }
        /// <summary>
        /// 通过手机号查找用户
        /// </summary>
        /// <param name="phone"></param>
        /// <returns></returns>
        public gameuser GetUserByPhone(string phone)
        {
            try
            {
                using (texas_2021Entities db = new texas_2021Entities())
                {
                    return db.gameuser.Where(t=>t.MobilePhoneNum== phone).FirstOrDefault();
                }
            }
            catch (Exception ex)
            {

                return null;
            }
        }

        public gameuser GetUserById(int userid)
        {
            try
            {
                using (texas_2021Entities db = new texas_2021Entities())
                {
                   return db.gameuser.Find(userid);
                }
            }
            catch (Exception ex)
            {

                return null;
            }
        }
 

        public DataResults<tuser> GetGameUser(DPagePara page)
        {
            DataResults<tuser> result = new DataResults<tuser>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<tuser, bool>> fun = w => w != null && w.isRobot == 0;
            try
            {
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        int tempId = 0;
                        int.TryParse(page.Keywords, out tempId);
                        if (tempId > 0)
                            fun = fun.And(w => w.UserID == tempId);
                        else
                            fun = fun.And(w => w.wechatName.Contains(page.Keywords) || w.wechatName.Contains(page.Keywords));
                    }

                    using (texas_2021Entities db = new texas_2021Entities())
                    {
                       
                        result.Data = db.tuser.Where(fun).OrderByDescending(t => t.UserID).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                        result.TotalCount = db.tuser.Where(fun).Count();

                    }
                
            }
            catch (Exception ex)
            {
                Log.Error(this.GetType().ToString(), ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取失败";
            }
            return result;
        }

        public DataResults<tuser> GetGameRobotUser()
        {
            DataResults<tuser> result = new DataResults<tuser>();
           
            Expression<Func<tuser, bool>> fun = w => w != null && w.isRobot == 1&&w.RobotGameid==51;
            try
            {
               
                using (texas_2021Entities db = new texas_2021Entities())
                {

                    result.Data = db.tuser.Where(fun).ToList();
                    result.TotalCount = db.tuser.Where(fun).Count();

                }

            }
            catch (Exception ex)
            {
                Log.Error(this.GetType().ToString(), ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取失败";
            }
            return result;
        }


        public bool AddUser(tuser tuser) {

            int total =0;
            string sql = @"INSERT INTO `h5game_2021`.`tuser`
(`UserID`, `wechatName`, `Gold`, `GoldA`, `LastLotinTime1`, 
`LastLotinTime2`, `RegTime`, `IP`, `Desc`, `isRobot`, 
`Status`, `diamond`, `isagent`, `wechatHeadIcon`, 
`Sex`, `TotalMoney`, `totaldiamond`, `lockTime`, 
`winpercent`, `BankGold`, `vlevel`, `givecount`, 
`MaxLose`, `MaxWin`, `MaxGold`, `TotalGold`, 
`showid`, `lat`, `lng`, `UserPassword`, `IsTp`,
`lv`, `IsJdb`, `UpTotalAmount`, `RobotGameid`,
`clublist`, `clubpwd`, `clubProtect`, `Userremark`) 
VALUES ("+ tuser.UserID + ", '"+ tuser.wechatName + "', 999999, NULL, '"+ tuser.LastLotinTime1 + "'," +
" NULL, '"+ tuser.RegTime + "', '"+ tuser.IP + "', '"+ tuser.Desc + "', 0, NULL, NULL, NULL, '"+ tuser.wechatHeadIcon + "', 0, 0.0000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);";
            using (h5game_2021Entities db = new h5game_2021Entities())
            {
                total = db.Database.ExecuteSqlCommand(sql);

                return total==0?false:true;
            }
      
        }
    }
}

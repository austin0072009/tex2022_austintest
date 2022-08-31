using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Linq;
using System.Text;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;
using System.Linq.Expressions;
using Crazy2018_Sys_Entity;
using System.Web;
using Crazy2018_Sys_Interface.Game;
using System.Collections.Generic;
using Crazy2018_Sys_ViewEntity.Game;
using static Crazy2018_Sys_Common.TableUtil;
using Crazy2018_Sys_ViewEntity.GameCore;

namespace Crazy2018_Sys_Service.Game
{
    public class WhirlUserAgentService : BaseService<tuseragent2019, int, texas_2021Entities>, IWhirlUserAgentService
    {
        public DataResults<tuseragent2019View2> GetThisUserAgentList(DPage page, int userid)
        {
            DataResults<tuseragent2019View2> result = new DataResults<tuseragent2019View2>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {

                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    var user = dbhelper.tuseragent2019.Find(userid);
                    var chlidagent = new List<ChildAgentList>();
                    if (user!=null && user.ChildAgents!="[]")
                    {
                        chlidagent = JsonHelper.JSONToObject<List<ChildAgentList>>(user.ChildAgents);
                        if (!string.IsNullOrEmpty(page.Keywords))
                        {
                            var keyuserid = int.Parse(page.Keywords);
                            chlidagent = chlidagent.Where(st => st.UserID == keyuserid).ToList();
                            result.TotalCount = chlidagent.Count();
                        }
                        else
                        {
                            chlidagent = chlidagent.
                            OrderByDescending(o => o.UserID).
                            Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();

                            result.TotalCount = chlidagent.Count();
                        }
                    }
                    var data = from aa in chlidagent
                               join a in dbhelper.tuseragent2019 on aa.UserID equals a.UserID
                               join b in dbhelper.tuser on a.UserID equals b.UserID
                               join c in dbhelper.tuser on a.FUserID equals c.UserID
                               into cc
                               from cca in cc.DefaultIfEmpty()
                               join d in dbhelper.tuser on a.TopUserID equals d.UserID
                               into dd
                               from dda in dd.DefaultIfEmpty()
                               select new tuseragent2019View
                               {
                                   UserName = b.wechatName,
                                   UserID = a.UserID ,
                                   FUserName = cca?.wechatName ,
                                   FUserID = (int)a.FUserID,
                                   GoldHistoryCommission = (long)a.GoldHistoryCommission,
                                   GoldCommission = (long)a.GoldCommission,
                                   QRPath = a.QRPath ,
                                   Code = a.Code ,
                                   Lv = (int)a.Lv ,
                                   HtmlUrl = a.HtmlUrl,
                                   lastdealtime = a.lastdealtime,
                                   watergoldadd = (long)a.watergoldadd,
                                   watergoldreduce = (long)a.watergoldreduce,
                                   childwater = (long)a.childwater,
                                   ChildAgents = a.ChildAgents, //JsonHelper.JSONToObject<List<ChildAgentList>>(a.ChildAgents),
                                   topUserName = dda?.wechatName,
                                   TopUserID = a.TopUserID==null ? 0 : a.TopUserID,
                                   gameWinCount = a.gameWinCount==null?0: a.gameWinCount,
                                   gameLostCount = a.gameLostCount == null ? 0 : a.gameLostCount,
                                   gameDrawCount = a.gameDrawCount == null ? 0 : a.gameDrawCount,
                               };

                   var ss= data.ToList();
                    result.Data = data.ToList().Select(a=>new tuseragent2019View2
                    {
                        UserName = a.UserName ,
                        UserID = a.UserID,
                        FUserName = a.UserName,
                        FUserID = (int)a.FUserID ,
                        GoldHistoryCommission = (long)a.GoldHistoryCommission,
                        GoldCommission = (long)a.GoldCommission ,
                        QRPath = a.QRPath ,
                        Code = a.Code,
                        Agentlevel = Enum.GetName(typeof(memberLevel), a.Lv),
                        HtmlUrl = a.HtmlUrl,
                        lastdealtime = a.lastdealtime,
                        watergoldadd = (long)a.watergoldadd,
                        watergoldreduce = (long)a.watergoldreduce,
                        childwater = (long)a.childwater,
                        ChildAgentsEY = JsonHelper.JSONToObject<List<ChildAgentList>>(a.ChildAgents),
                        topUserName = a.UserName,
                        TopUserID = (int)a.TopUserID,
                        gameWinCount = (int)a.gameWinCount,
                        gameLostCount = (int)a.gameLostCount,
                        gameDrawCount = (int)a.gameDrawCount
                    }).ToList();
                    result.Message = "获取成功";
                    return result;

                }
            }
            catch (Exception ex)
            {
                result.Data = new List<tuseragent2019View2>();
                return result;
            }
        }

        public DataResults<tuseragent2019View2> GetUserAgentList(DPage page,int userid)
        {
            DataResults<tuseragent2019View2> result = new DataResults<tuseragent2019View2>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                using (texas_2021Entities dbhelper = new texas_2021Entities())
                {
                    List<tuseragent2019> IQdata = new List<tuseragent2019>();
                                                        //join b in dbhelper.tuser on a.UserID equals b.UserID
                                                        //where b.vlevel>0
                                                        //select a;
                    if (!string.IsNullOrEmpty(page.Keywords))
                    {
                        var keyuserid = int.Parse(page.Keywords);
                        IQdata = dbhelper.tuseragent2019.Where(st => st.UserID == keyuserid).
                        OrderByDescending(o => o.lastdealtime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    }
                    else
                    {
                        IQdata = IQdata.OrderByDescending(o => o.lastdealtime).Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList(); ;
                    }
                        var data = from a in IQdata
                                   join b in dbhelper.tuser on a.UserID equals b.UserID
                                   where b.vlevel>0
                                   join c in dbhelper.tuser on a.FUserID equals c.UserID
                                   into cc from cca in cc.DefaultIfEmpty()
                                   join d in dbhelper.tuser on a.TopUserID equals d.UserID
                                   into dd from dda in dd.DefaultIfEmpty()
                                   select new tuseragent2019View
                                   {
                                      UserName = b.wechatName,
                                      UserID = a.UserID,
                                      FUserName = cca.wechatName,
                                       FUserID  =a.FUserID,
                                       GoldHistoryCommission =(long) a.GoldHistoryCommission,//(decimal)a.GoldHistoryCommission.,
                                       GoldCommission =(long)a.GoldCommission,//(decimal)a.GoldCommission,
                                       QRPath = a.QRPath,
                                       Code = a.Code,
                                       Lv =b.vlevel,
                                       HtmlUrl = a.HtmlUrl,
                                       lastdealtime = a.lastdealtime,
                                       watergoldadd =(long)a.watergoldadd,
                                       watergoldreduce = (long)a.watergoldreduce,
                                       childwater = (long)a.childwater,
                                       ChildAgents = a.ChildAgents,//JsonHelper.JSONToObject<List<ChildAgentList>>(a.ChildAgents)
                                       topUserName = dda.wechatName,
                                       TopUserID = a.TopUserID,
                                       gameWinCount = a.gameWinCount,
                                       gameLostCount =a.gameLostCount,
                                       gameDrawCount = a.gameDrawCount
                                   };
                         result.TotalCount = data.Count();
                        result.Data = data.Select(a=>new tuseragent2019View2
                        {
                            UserName = a.UserName,
                            UserID = a.UserID,
                            FUserName = a.UserName,
                            FUserID = a.FUserID,
                            GoldHistoryCommission = a.GoldHistoryCommission/100,
                            GoldCommission = a.GoldCommission/100,
                            QRPath = a.QRPath,
                            Code = a.Code,
                            Agentlevel = Enum.GetName(typeof(memberLevel), a.Lv),
                            HtmlUrl = a.HtmlUrl,
                            lastdealtime = a.lastdealtime,
                            watergoldadd = a.watergoldadd/100,
                            watergoldreduce = a.watergoldreduce/100,
                            childwater = a.childwater/100,
                            ChildAgentsEY = JsonHelper.JSONToObject<List<ChildAgentList>>(a.ChildAgents),
                            topUserName = a.UserName,
                            TopUserID = a.TopUserID,
                            gameWinCount = a.gameWinCount,
                            gameLostCount = a.gameLostCount,
                            gameDrawCount = a.gameDrawCount

                        }).ToList();
                        result.Message = "获取成功";
                        return result;
                    
                }
            }
            catch (Exception ex)
            {
                result.Data = new List<tuseragent2019View2>();
                return result;
            }

        }

        public tuseragent2019 GetFuser(int userid, int puid)
        {
            var user = GetEntityByID(userid);
            if (user != null) return user;
            return null;
        }


        public bool IsChildAgent(int userid, int puid)
        {
             var user = GetEntityByID(userid);
            if (user!=null)
            {
                if (user.FUserID == puid) return true;
                if (user.FUserID.Value == 0) return false;
                return IsChildAgent(user.FUserID.Value, puid);//递归调用
            }
            return false;
        }
    }
}

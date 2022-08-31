using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Service.Game
{
   public class TUsergamehand : BaseService<tusergamehand, int, texas_2021Entities>, ITUsergamehand
    {
        IEmailService emailservice;
        public TUsergamehand(IEmailService _emailservice)
        {
            emailservice = _emailservice;
        }

        public DataResult Addtablehandnum(int userId,  int gameid, int count1, int count2, int count5, int count10, int count20, int count50)
        {

            DataResult result = new DataResult();

            using (texas_2021Entities db = new texas_2021Entities())
            {
                ttablehandnumlog ttnum = new ttablehandnumlog();
                ttnum.UserId = userId;
              
                ttnum.GameId = gameid;
                ttnum.pos1Count = count1;
                ttnum.pos2Count = count2;
                ttnum.pos5Count = count5;
                ttnum.pos10Count = count10;
                ttnum.pos20Count = count20;
                ttnum.pos50Count = count50;
                ttnum.CreateTime = DateTime.Now;
                db.ttablehandnumlog.Add(ttnum);
                db.SaveChanges();
            }
            result.Message = "添加成功";
            return result;
        }

        public DataResults<RankUserSD> GetTablehandNumLogList(DPagePara page)
        {
            DataResults<RankUserSD> result = new DataResults<RankUserSD>();
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                using (texas_2021Entities db = new texas_2021Entities())
                {
                    //
                    var handactivit = emailservice.GetRankTime("1") ?? new GameActivity();
                    string sql = $@"SET @row_number = 0;
                              select *,(@row_number:=@row_number+1) AS Rank,(select Val from tsysconfig where `Key`=@row_number and `Dec`='{page.ChangeType}皮奖励') Prize,{page.ChangeType} t from(
                              select SUM(pos{page.ChangeType}Count) as TotalHand,tn.UserId,case when tu.isRobot then '机器人' else '用户' end as isRobot,tu.wechatName as UserName 
                              from ttablehandnumlog as tn join tuser as tu on tn.userid=tu.userid 
                              where CreateTime>='{handactivit.StartTime}' 
                              GROUP BY UserId HAVING TotalHand>0 
                              order by TotalHand desc LIMIT 0,40) tt";

                    var data = db.Database.SqlQuery<RankUserSD>(sql).ToList();

                    result.TotalCount = data.Count();
                    result.Data = data.Skip((page.PageIndex - 1) * page.PageSize).Take(page.PageSize).ToList();
                    result.Message = "获取成功";
                    return result;
                }
            }
            catch (Exception ex)
            {

                result.Message = "fail";
                return result;
            }
        }

        public DataResult DeleteRangings(string ids)
        {
            DataResult result = new DataResult();
            if (string.IsNullOrEmpty(ids))
            {
                result.Code = (int)Status.fail;
                result.Message = "id不能为空";
                return result;
            }
            var noticeIds = ids.Split(',');
            using (texas_2021Entities db = new texas_2021Entities())
            {
                foreach (var item in noticeIds)
                {
                    if (string.IsNullOrEmpty(item)) continue;
                    int id = 0;
                    int.TryParse(item, out id);
                    var emyitty = db.ttablehandnumlog.Find(id);
                    db.ttablehandnumlog.Remove(emyitty);
                }
                db.SaveChanges();
            }
            result.Message = "删除成功";
            return result;
        }
    }
}

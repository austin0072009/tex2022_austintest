using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.GameCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
   public interface IEmailService : IBaseService<temail, int, texas_2021Entities>, IDependency
    {
        DataResults<EmailView> GetEmailData(DPage page);


        DataResult<EmailGiveGoldView> GetEmailGiveGoldStatistic(DPagePara page);


        DataResult RevokeTradeNum(string tradenum);


        List<RechargeChannel> GetRechargeChannel();


        DataResult RechargeCDel(string ids);


        DataResult GameActivityDel(string ids);


        DataResults<GameActivity> GetGameActivityList(DPage page);


        bool SubmitGameActivity(GameActivity page);


        dynamic CloseOpenActivity(int id,bool isenble);


        GameActivity GetRankTime(string type);



        DataResults<GameActityUserView> GetActityUserInfo(int typeid);
        void Update(GameActivity actity);
    }
}

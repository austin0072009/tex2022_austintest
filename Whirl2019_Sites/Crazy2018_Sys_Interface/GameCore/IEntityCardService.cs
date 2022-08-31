using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_ViewEntity.Game;
using Crazy2018_Sys_ViewEntity.GameCore;
using Crazy2018_Sys_ViewEntity.UserAgent;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Crazy2018_Sys_Interface
{
   public interface IEntityCardService : IBaseService<TEntityCard, int, DBContextHelper>, IDependency
    {

        DataResults<TEntityCardType> GetCardTypeList(DPagePara page);

        DataResults<tentitycardView> GetCardList(DPagePara page); 
        DataResults<tentitycardView> GetCardGroup(DPagePara page); 

         DataResult AddCard(TEntityCard entitycard);
        DataResult CardTypeDel(string ids);
        DataResult CardDel(string ids);
        bool SubmitCardTypEntity(TEntityCardType entity);

        List<TEntityCardType> GetCardType();

        DataResults<tentitycardView> GetCardData(DPagePara page);
      
    }
}

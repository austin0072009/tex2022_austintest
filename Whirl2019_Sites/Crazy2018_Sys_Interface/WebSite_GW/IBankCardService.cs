using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Crazy2018_Sys_Interface
{
    public interface IBankCardService : IBaseService<BankCardEntity, int, DBContextHelper>, IDependency
    {
        List<BankCardView> GetCardList(string userID);
        /// <summary>
        /// 该数据是否已经存在
        /// </summary>
        /// <param name="userID"></param>
        /// <param name="cardNo"></param>
        /// <returns></returns>
        bool Exist(string userID, string cardNo);
        /// <summary>
        /// 根据银行编码获取银行类型
        /// </summary>
        /// <param name="binCode"></param>
        /// <returns></returns>
        BankTypeView GetBankTypeByBinCode(string binCode);

        /// <summary>
        /// 保存银行卡接口
        /// </summary>
        /// <param name="name">开户名</param>
        /// <param name="cardNo">银行卡号</param>
        /// <param name="bankAddress">开户地址</param>
        /// <param name="Location">开户区域</param>
        /// <param name="userId">用户id</param>
        ///  <param name="id">数据id</param>
        /// <returns></returns>
        DataResult<BankCardEntity> Save(string name, string cardNo, string bankAddress, string Location, int id = -1, string userId = "-1");
        /// <summary>
        /// 获取银行卡信息(GM后台)
        /// </summary>
        /// <param name="page"></param>
        /// <returns></returns>
        DataResults<BankCardEntity> GetCardData(DPage page);
        /// <summary>
        /// 删除银行卡信息
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        DataResult deleteCard(int id);
        DataResult<BankCardEntity> GetBankCardById(int id);
    }
}

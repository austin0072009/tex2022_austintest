using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_ViewEntity;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Common;
using System.Linq.Expressions;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_Sys_Service
{
    public class BankCardService : BaseService<BankCardEntity, int, DBContextHelper>, IBankCardService
    {
        private readonly IGameUserService _gameUserService;
        private readonly IManageService _ManageService;
        public BankCardService(IGameUserService gameUserService,
            IManageService ManageService)
        {
            _gameUserService = gameUserService;
            _ManageService = ManageService;
        }
        public bool Exist(string userID, string cardNo)
        {
            var entity = GetEntityByWhere(w => w.UserID == userID && w.BankCardID == cardNo);
            return entity != null;
        }

        public BankTypeView GetBankTypeByBinCode(string binCode)
        {
            BankTypeView bankCardView = new BankTypeView();
            using (DBContextHelper dbHelper = new DBContextHelper())
            {
                var bantypeEntity = dbHelper.BankTypeEntities.FirstOrDefault(w => w.BinCode.Equals(binCode));
                if (bantypeEntity != null)
                {
                    bankCardView.BankName = bantypeEntity.BankName;
                    bankCardView.BinCode = bantypeEntity.BinCode;
                    bankCardView.CardType = bantypeEntity.CardType;
                }
            }
            return bankCardView;
        }

        public List<BankCardView> GetCardList(string userID)
        {
            return GetEntityLisrByWhere(w => w.UserID == userID)
                       .Select(w => new BankCardView
                       {
                           CardName = w.CardName,
                           CardNo = w.BankCardID,
                           UserName = w.UserName,
                           CreatTime = w.CreatTime.ToString("yyyy-MM-dd HH:mm:ss")
                       }).ToList();
        }

        public DataResult<BankCardEntity> Save(string name, string cardNo, string bankAddress, string Location, int id = -1, string userId = "-1")
        {
            DataResult<BankCardEntity> result = new DataResult<BankCardEntity>();
            if (string.IsNullOrEmpty(name))
            {
                result.Code = (int)Status.fail;
                result.Message = "银行名称不能为空";
                return result;
            }
            bool c1 = cardNo.Trim().Length < 15 || cardNo.Trim().Length > 19;
            string binCode = cardNo.Substring(0, 6);
            var bankType = GetBankTypeByBinCode(binCode);
            if (string.IsNullOrEmpty(cardNo) || c1 || bankType.BankName == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "银行卡验证失败！";
                return result;
            }
            var user = _gameUserService.GetEntityByID(int.Parse(userId));
            if (user!=null)
            {
                var entity = GetEntityByWhere(w => w.ID == id && w.UserID == userId);

                var ret = new BankCardEntity();
                try
                {
                    var model = new BankCardEntity
                    {
                        UserID = userId,
                        BankCardID = cardNo,
                        CardName = bankType.BankName,
                        CardType = 0,
                        UserName = name,
                        BankAddress = bankAddress,
                        Location = Location
                    };
                    if (entity != null)//修改
                    {
                        entity.UserID = userId;
                        entity.BankCardID = cardNo;
                        entity.CardName = bankType.BankName;
                        entity.CardType = 0;
                        entity.BankAddress = bankAddress;
                        entity.Location = Location;
                        entity.UserName = name;
                        ret = UpdateEntity(entity);
                        _ManageService.AddActionlog(ActionEnum.Edit, OptAction.UserCard, ActionEnum.Edit.ToDescription() +
                            OptAction.UserCard.ToDescription() + "用户ID:" + userId);
                    }
                    else//添加
                    {
                        model.UserID = userId;
                        ret = AddEntity(model);
                        _ManageService.AddActionlog(ActionEnum.Add, OptAction.UserCard, ActionEnum.Add.ToDescription() +
    OptAction.UserCard.ToDescription() + "用户ID:" + userId);
                    }
                    result.Data = ret;
                }
                catch (Exception ex)
                {

                    result.Code = (int)Status.fail;
                    result.Message = ex.Message;
                }
            }
            else
            {
                result.Code = (int)Status.fail;
                result.Message = "不存在该用户！";
            }
            
            return result;
        }
        public DataResults<BankCardEntity> GetCardData(DPage page)
        {
            DataResults<BankCardEntity> result = new DataResults<BankCardEntity>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            Expression<Func<BankCardEntity, bool>> fun = w => w != null;
            if (!string.IsNullOrEmpty(page.Keywords))
            {
                fun = fun.And(w => w.UserID.Contains(page.Keywords) || w.Location.Contains(page.Keywords) || w.UserName.Contains(page.Keywords) || w.BankCardID.Contains(page.Keywords));
            }
            result.Data = GetEntityLisrByWhere(fun).Skip((page.PageIndex - 1) * page.PageSize).
                            Take(page.PageSize).
                            OrderByDescending(w => w.CreatTime).
                            ToList().
                            Select(w => w).ToList();
            result.TotalCount = GetCount(fun);
            return result;
        }
        public DataResult deleteCard(int id)
        {

            DataResult result = new DataResult();
            var entity = GetEntityByWhere(w => w.ID == id);
            if (entity == null)
            {
                result.Code = (int)Status.fail;
                result.Message = "银行卡信息不存在";
                return result;
            }
            try
            {
                result.Code = DelEntity(entity.ID) > 0 ? (int)Status.Success : (int)Status.fail;
            }
            catch (Exception ex)
            {

                throw;
            }
            return result;
        }

        public DataResult<BankCardEntity> GetBankCardById(int id)
        {
            DataResult<BankCardEntity> result = new DataResult<BankCardEntity>();
            var entity = GetEntityByID(id);
            result.Data = entity;
            return result;
        }
    }
}

using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using ETModel.Framework.Cache.Generic;
using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract;
using ETModel.Framework.Net;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class ShopHelper : BaseHelper
    {
        #region 兑换与商城相关
        //商品图片下载根目录 
        /// <summary>
        /// 根据商品类型获取商品信息
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static async ETTask<string> GetCommodity(cs_commodity data, int userid)
        {
            var temptype = data.commodityType;
            sc_commodity senddata = new sc_commodity { result = 1, cc = data.commodityType };
            List<tCommodity> dataList = new List<tCommodity>();
            dataList = await BaseHelper.GetShareAll<tCommodity>(t => t.isEnable == true);
            if (dataList == null || dataList.Count==0) BaseHelper.ReLoad<tCommodity>();

            var commoddata = dataList.Select(w => new GoodsModelSD
            {
                commodityvValue = w.commodityvValue,
                exchangeValue = (float)w.exchangeValue,
                introduce = w.introduce,
                name = w.name,
                url = ToolsEx.GetIpAddress() + w.url,
                commodityId = w.id,
                commodityType = (int)w.commodityType,
            });
            senddata.data = commoddata.ToList();
            return JsonUtils.Serialize(senddata);
        }


        /// <summary>
        /// 兑换商品
        /// </summary>
        /// <param name="data"></param>
        /// <param name="user"></param>
        /// <returns></returns>

        public static async Task<string> exchangeCommodity(cs_exchangeMessage data, tUser user)
        {
            sc_exchangeMessage senddata = new sc_exchangeMessage { result = 1};
            tCommodity goods = tExchangeLogEx.GetGoodsById(data.commodityId);
            switch (goods.commodityType)
            {
                case CommodityType.Diamonds:
                    var exValue = goods.exchangeValue * 1;
                    var exdiaValue = goods.commodityvValue * 1;
                    var vipInfo = tvipinfoEx.GetVipInfoByCommodId(data.commodityId);
                    if (user.GetGoldAndWinGold < (long)exValue)
                    {
                        senddata.result = 0;
                    }
                    else
                    {
                        if (vipInfo == null)//如果不为空则代表是购买的vip
                        {
                            user.diamond += (long)exdiaValue;
                        }
                        else
                        {
                            
                        }
                        senddata.result = 1;
                        user.GoldReduce((long)exValue);
                    }
                    break;
                case CommodityType.Gold:
                    if (user.diamond < goods.commodityvValue)
                    {
                        senddata.result = -1;//砖石余额不足
                    }
                    else
                    {
                        senddata.result = 1;
                        user.diamond -= (long)goods.commodityvValue;
                        user.Gold += Convert.ToInt64(goods.exchangeValue);
                        tgoldchangelog model = new tgoldchangelog();
                        model.UserId = user.UserID;
                        model.Gold = Convert.ToInt64(goods.exchangeValue);
                        model.BeforeGold = user.GetGoldAndWinGold;
                        model.GameId = -2;//-2钻石兑换的金币
                        model.AfterGold = user.GetGoldAndWinGold + Convert.ToInt64(goods.exchangeValue);
                        model.IsRobot = true;
                        model.ChangeType = 3;
                        BaseHelper.AddAsync(model);

                        tDiamondChangeLog goldlog = new tDiamondChangeLog();
                        goldlog.BeforeGold = user.diamond - goods.commodityvValue;
                        goldlog.AfterGold = user.diamond;
                        goldlog.ChangeType = 2;
                        goldlog.Gold = goods.commodityvValue;
                        goldlog.UserId = user.UserID;
                        BaseHelper.AddAsync(goldlog);

                    }
                    break;
                case CommodityType.VipCard:
                    var vipinfo = await tb_userinfoEx.GetFromCachebyUserID(user.UserID);


                    if (user.diamond < goods.commodityvValue)
                    {
                        senddata.result = -1;//砖石余额不足
                    }
                    else
                    {
                        int ulv = 0;
                        if (goods.exchangeValue == 30) ulv = 1;//月卡
                        if (goods.exchangeValue == 365) ulv = 2;//年卡
                        if (vipinfo != null)
                        {
                            vipinfo.vipLv = ulv;
                            if (vipinfo.expiredate < DateTime.Now)
                            {
                                vipinfo.expiredate = DateTime.Now.AddDays(goods.exchangeValue);
                                vipinfo.CreateTime = DateTime.Now;
                            }
                            else
                            {
                                var time = vipinfo.expiredate - DateTime.Now;
                                vipinfo.CreateTime = DateTime.Now.AddDays(-time.Days);//更新开通时间
                                vipinfo.expiredate = vipinfo.expiredate.AddDays(goods.exchangeValue);
                            }
                            vipinfo.cClub = goods.ClubCount;
                            vipinfo.cTable = goods.TableCount;
                            BaseHelper.AddOrUpdateBase(vipinfo);
                        }
                        else
                        {
                            tuserInfoEx vinfo = new tuserInfoEx();
                            vinfo.vipLv = ulv;
                            vinfo.expiredate = DateTime.Now.AddDays(goods.exchangeValue);
                            vinfo.cClub = goods.ClubCount;
                            vinfo.cTable = goods.TableCount;
                            vinfo.UserID = user.UserID;
                            vinfo.vipLv = user.UserID;
                            vinfo.VipTime = DateTime.Now;
                            if (vinfo.BackPack == null) vinfo.BackPack = new CacheList<UserBackPack>();
                            vinfo.BackPack.Add(new UserBackPack()
                            {
                                PropID = 6,//200金币包
                                PropCount = 1,
                            });
                            BaseHelper.AddOrUpdateBase(vinfo);
                        }
                        user.diamond -= (long)goods.commodityvValue;

                        tDiamondChangeLog dlog = new tDiamondChangeLog();
                        dlog.BeforeGold = user.diamond + goods.commodityvValue;
                        dlog.AfterGold = user.diamond;
                        dlog.ChangeType = 3;
                        dlog.UserId = user.UserID;
                        dlog.Gold = goods.commodityvValue;
                        BaseHelper.AddAsync(dlog);
                        senddata.result = 1;
                    }

                    break;
                default:
                    break;
            }
            if (senddata.result == 1)
            {
                var tb_exChangeRecord = new texchangeLog
                {
                    Id = Guid.NewGuid().ToString(),
                    CommodityId = data.commodityId,
                    isHandle = false,
                    CreateTime = DateTime.Now,
                    UserId = user.UserID,
                    oddNumbers = ToolsEx.GenerateId(),
                    name = goods.name,
                    commodityType = goods.commodityType,
                    exchangeCount = 1

                };
                tb_UserEx.UpdateData(user);
                var ret = tExchangeLogEx.Add(tb_exChangeRecord);

            }

            return JsonUtils.Serialize(senddata);
        }
        /// <summary>
        /// 获取实物列表
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public static string GetShopItemsList(tUser user, CommodityType comtype = CommodityType.Material)
        {
            sc_myExchange senddata = new sc_myExchange { result = 1 };
            var tempList = tExchangeLogEx.GetMyGoodList(user.UserID, comtype);
            if (!tempList.Any())
                return JsonUtils.Serialize(senddata);
            var list = tempList.OrderByDescending(w => w.CreateTime).
                Select(w =>
            new myExchangeGoodsSD
            {
                createTime = w.CreateTime.ToString("yyyy-MM-dd HH:mm:ss"),
                expressNumbers = w.oddNumbers,
                name = w.name,
                isHandle = w.isHandle,
                oddNumbers = w.oddNumbers,
                url = ToolsEx.GetIpAddress() + tExchangeLogEx.GetGoodsById(w.CommodityId).url,
                exCount = w.exchangeCount
            }).ToList();
            senddata.data = list;
            return JsonUtils.Serialize(senddata);
        }
        public static async Task<string> addUserContact(cs_addUserContact userContact, tUser user)
        {
            sc_addUserContact sendData = new sc_addUserContact { result = 1 };
            tUserContact model = new tUserContact
            {
                Address = userContact.Address,
                Mobile = userContact.Mobile,
                UserId = user.UserID,
                Name = userContact.Name,
                PostCode = userContact.PostCode,
                Id = Guid.NewGuid().ToString()
            };
            if (tExchangeLogEx.CheckUserContact(user.UserID))
            {
                model.UpdateTime = DateTime.Now;
            }
            else
            {
                model.CreateTime = DateTime.Now;
                model.UpdateTime = DateTime.Now;
            }
            sendData.result =await tExchangeLogEx.addUserContact(model) ? 1 : 0;
            return JsonUtils.Serialize(sendData);
        }
        #endregion

    }
}

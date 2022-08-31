using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Entity;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_Interface.GameCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using static Crazy2018_Sys_Common.DTEnums;

namespace Crazy2018_WebSite_Manage.Controllers
{
    [LoginFilter(IsCheck = false)]
    public class H5GameController : BaseController
    {
        private string _url = ConfigurationManager.AppSettings["SutHttpServer"].ToString();
        private string _domain = ConfigurationManager.AppSettings["RegDomain"].ToString();
        private string h5gameurl = ConfigurationManager.AppSettings["h5gameUrl"].ToString();
        private string h5SignKey = ConfigurationManager.AppSettings["h5SignKey"].ToString();
        private string h5gameKey = ConfigurationManager.AppSettings["h5gameKey"].ToString();


        private string jdbApi = ConfigurationManager.AppSettings["jsbApi"].ToString();
        private static readonly string AES_KEY = ConfigurationManager.AppSettings["jsbKEY"].ToString();
        private static readonly string AES_IV = ConfigurationManager.AppSettings["jsbIV"].ToString();
        private static readonly char[] padding = { '=' };



        private readonly IGameService _gameService;
        private readonly ISnsUserInfo _snsUserInfo;
        private readonly Itgoldchangh5gameService _h5gamegoldchang;
        private readonly ItuserService tuserService;
        private readonly IH5winloseLogService H5winloseLogService;

        private readonly RedisHelper redis;
        public H5GameController(IManageService _manageLogservice,
            IGameService gameService,
            ISnsUserInfo snsUserInfo,
            Itgoldchangh5gameService h5gamegoldchang,
            ItuserService _tuser,
            IH5winloseLogService _H5winloseLogService) :base(_manageLogservice)
        {
            _gameService = gameService;
            _snsUserInfo = snsUserInfo;
            _h5gamegoldchang = h5gamegoldchang;
            redis = new RedisHelper(2);
            tuserService = _tuser;
            H5winloseLogService = _H5winloseLogService;
        }

        


        /// <summary>
        /// 建立tp  h5游戏账号
        /// </summary>
        /// <returns></returns>
        public bool CreateAccount(int _Account)
        {
            var Account = _Account;
            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("Account", Account);
            listkey.Add("Agent", 248);
            listkey.Add("key", h5SignKey);

            var diclist = Utils.SortDictionary(listkey);
            var urlstr = Utils.GetUrlString(diclist);
            var md5string = StringHelper.MD5(urlstr);
            listkey.Add("Sign", md5string);

            var diclist2 = Utils.SortDictionary(listkey);
           
            string _content = Utils.HttpPost2(h5gameurl + "Game/CreateAccount", JsonConvert.SerializeObject(diclist2),h5gameKey);
            H5Game response = JsonHelper.JSONToObject<H5Game>(_content);
            if (response.Message.Equals("Success"))
            {
                return true;
            }else if (response.Message.Equals("MemberExists"))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        /// <summary>
        /// 获取一个游戏的访问地址
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult GetGameUrl(int Account,int GId)
        {
            var game = _gameService.GetEntityByID(GId);
            if(game==null) return Json(new { success = false, msg = "游戏不存在!" }, JsonRequestBehavior.AllowGet);
            if (game.platType==2)  //表示jdb平台
            {
                var user = tuserService.GetEntityByID(Account);
                if (user == null) return Json(new { success = false, msg = "账号异常!" }, JsonRequestBehavior.AllowGet);

                if (user.IsJdb == 0|| user.IsJdb == null)
                {
                    if (!CreateJdbAccount(Account, user.wechatName)) return Json(new { success = false, msg = "创建账号失败!" }, JsonRequestBehavior.AllowGet);
                    else
                    {
                        user.IsJdb = 1;
                        tuserService.UpdateAsync(user);
                    }
                }
                Dictionary<string, object> listkey = new Dictionary<string, object>();
                listkey.Add("action", 11);
                listkey.Add("ts", Utils.GetTimeStampHm());
                //listkey.Add("parent", "nwyxrmbag");
                listkey.Add("uid", Account);
                //listkey.Add("balance", balance);
                listkey.Add("lang", "ch");
                listkey.Add("windowMode", 2);
                listkey.Add("gType", game.jdbType);
                listkey.Add("mType", GId);
                string jsonstr = JsonConvert.SerializeObject(listkey);
                Dictionary<string, object> getpara = new Dictionary<string, object>();
                getpara.Add("dc", "nwyx");
                getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY, AES_IV, padding));
                var str = Utils.GetUrlString(getpara);

                string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
                JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content);
                if (response.status.Equals("0000"))
                {
                    Task task = new Task(()=> 
                    {
                        var ubanlce = BringIn(Account, GId);
                        if (ubanlce > 0)
                        {
                            redis.SetStringKey("login"+Account, ubanlce);//存玩家余额
                            var isComplete = JdbBringIn(Account, ubanlce);
                            _h5gamegoldchang.AddEntity(new tgoldchangh5game()
                            {
                                UserId = Account,
                                CreateTime = DateTime.Now,
                                GameId = GId,
                                Gold = ubanlce,
                                GoldType = 1,//带入
                                IsComplete = isComplete ? 1 : 0  //是否带入成功
                            });
                            if (!isComplete)  //带入失败 上分
                            {
                                cs_jdbIncrdecr_gm jid = new cs_jdbIncrdecr_gm() { fn = "cs_jdbIncrdecr_gm", money = ubanlce * 100, uid = Account, type = 1,gameid=GId };
                                string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(jid));
                                string c_content = Utils.HttpGet(_url + _data);
                                sc_jdbIncrdecr_gm _scsetcard = JsonHelper.JSONToObject<sc_jdbIncrdecr_gm>(c_content);
                                if (_scsetcard._ret != 0)
                                {
                                    _manageService.AddActionlog(ActionEnum.Recharge, OptAction.RechargeGold, ActionEnum.Recharge.ToDescription() + "失败，需要客服手动上分金额:" + ubanlce + "玩家ID:" + Account);
                                }
                            }
                        }
                        else Log.Debug("","游戏服下分失败uid:"+ Account + "ubanlce：" + ubanlce);

                    });
                    task.Start();
                    return Json(new { success = true, msg = "获取成功", gameUrl = response.path }, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    Log.Debug("", "获取jdb地址失败:" + response.err_text+",状态"+ response.status);
                    if (response.status.Equals("7501")) CreateJdbAccount(Account, user.wechatName);
                    return Json(new { success = false, msg = "获取失败!" }, JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                var user = tuserService.GetEntityByID(Account);
                if (user == null) return Json(new { success = false, msg = "账号异常!" }, JsonRequestBehavior.AllowGet);

                if (user.IsTp == 0 || user.IsTp==null)
                {
                    if (!CreateAccount(Account)) return Json(new { success = false, msg = "创建账号失败!" });
                    else
                    {
                        user.IsTp = 1;
                        tuserService.UpdateAsync(user);
                    }
                }

                Dictionary<string, object> listkey = new Dictionary<string, object>();
                listkey.Add("Account", Account);
                listkey.Add("Agent", 248);
                listkey.Add("GId", GId);
                listkey.Add("PlatformType", 900);
                listkey.Add("key", h5SignKey);

                var urlstr = Utils.GetUrlString(listkey);
                var md5string = StringHelper.MD5(urlstr);
                listkey.Add("Sign", md5string);
                //listkey.Add("Language", 0);


                string _content = Utils.HttpPost2(h5gameurl + "Seamless/GetGameUrl", JsonConvert.SerializeObject(listkey), h5gameKey);
                H5Game response = JsonHelper.JSONToObject<H5Game>(_content);
                if (response.Code.Equals(0))
                {
                    //带入操作
                    Task tt = new Task(() =>
                    {

                        cs_jdbIncrdecr_gm jid = new cs_jdbIncrdecr_gm() { fn = "cs_jdbIncrdecr_gm", money = 0, uid = Account, type = 0, gameid = GId };
                        string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(jid));
                        string c_content = Utils.HttpGet(_url + _data);
                        sc_jdbIncrdecr_gm _scsetcard = JsonHelper.JSONToObject<sc_jdbIncrdecr_gm>(c_content);
                        if (_scsetcard._ret == 0)
                        {
                            //表示玩家全部的带入金币
                            decimal allinmoney = _scsetcard.balance;
                            
                            if (allinmoney > 0)
                            {
                                redis.SetStringKey("login" + Account, allinmoney);
                                var isComplete = TransferTo(Account, allinmoney.ToString());
                                //带入日志

                                _h5gamegoldchang.AddEntity(new tgoldchangh5game()
                                {
                                    UserId = Account,
                                    CreateTime = DateTime.Now,
                                    GameId = GId,
                                    Gold = allinmoney,
                                    GoldType = 1,//带入
                                    IsComplete = isComplete ? 1 : 0  //是否带入成功
                                });
                                if (!isComplete)  //带入失败 上分
                                {
                                    cs_jdbIncrdecr_gm upjid = new cs_jdbIncrdecr_gm() { fn = "cs_jdbIncrdecr_gm", money = allinmoney * 100, uid = Account, type = 1, gameid = GId };
                                    string _data2 = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(upjid));
                                    string c_content_fail = Utils.HttpGet(_url + _data2);
                                    sc_jdbIncrdecr_gm _scsetcard_fail = JsonHelper.JSONToObject<sc_jdbIncrdecr_gm>(c_content_fail);
                                    if (_scsetcard_fail._ret != 0)
                                    {
                                        _manageService.AddActionlog(ActionEnum.Recharge, OptAction.RechargeGold, ActionEnum.Recharge.ToDescription() + "失败，需要客服手动上分金额:" + allinmoney + "玩家ID:" + Account);
                                    }
                                }
                            }
                        }
                        else
                        {
                            _h5gamegoldchang.AddEntity(new tgoldchangh5game()
                            {
                                UserId = Account,
                                CreateTime = DateTime.Now,
                                GameId = GId,
                                Gold = _scsetcard.balance,
                                GoldType = 3,//下分
                                IsComplete = 0  //是否成功
                            });
                        }
                    });
                    tt.Start();
                    return Json(new { success = true, msg = "获取成功", gameUrl = response.Data }, JsonRequestBehavior.AllowGet);
                }
                else return Json(new { success = false, msg = "获取失败!-" + response.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        /// <summary>
        /// 登出
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public JsonResult LoginOut(int Account,int GId)
        {
            Log.Error("LoginOut", "LoginOut：" + Account + ","+ GId);
            var game = _gameService.GetEntityByID(GId);
            var user = _snsUserInfo.GetEntityByWhere(t=>t.UserId== Account);
            if (user == null || game==null) return Json(new { success = false, msg = "数据异常!" }, JsonRequestBehavior.AllowGet);

            if (game.platType==1)
            {
                Dictionary<string, object> listkey = new Dictionary<string, object>();
                listkey.Add("Account", Account);
                listkey.Add("Agent", 248);
                listkey.Add("key", h5SignKey);

                var diclist = Utils.SortDictionary(listkey);
                var urlstr = Utils.GetUrlString(diclist);
                var md5string = StringHelper.MD5(urlstr);
                listkey.Add("Sign", md5string);

                var diclist2 = Utils.SortDictionary(listkey);
                //返还金币
                Task tt = new Task(() =>
                {
                    var Balance = GetBalance(Account);
                    if (Balance > 0)
                    {
                        var isOk = TransferBack(Account, Balance.ToString());
                        if (isOk)
                        {
                            //充值到本平台
                            cs_jdbIncrdecr_gm jid = new cs_jdbIncrdecr_gm() { fn = "cs_jdbIncrdecr_gm", money = Balance * 100, uid = Account, type = 1, gameid = GId };
                            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(jid));
                            string c_content = Utils.HttpGet(_url + _data);
                            sc_jdbIncrdecr_gm _scsetcard = JsonHelper.JSONToObject<sc_jdbIncrdecr_gm>(c_content);

                            if (_scsetcard._ret != 0)
                            {
                                _h5gamegoldchang.AddEntityAsync(new tgoldchangh5game()
                                {
                                    UserId = Account,
                                    CreateTime = DateTime.Now,
                                    GameId = GId,
                                    Gold = Balance,
                                    GoldType = 2,
                                    IsComplete = 0  //是否成功
                                });
                            }
                        }
                        _h5gamegoldchang.AddEntityAsync(new tgoldchangh5game()
                        {
                            UserId = Account,
                            CreateTime = DateTime.Now,
                            GameId = GId,
                            Gold = Balance,
                            GoldType = 0,//取出
                            IsComplete = isOk ? 1 : 0  //是否成功
                        });
                    }
                });
                tt.Start();

                string _content = Utils.HttpPost2(h5gameurl + "Seamless/KickUser", JsonConvert.SerializeObject(diclist2), h5gameKey);
                H5Game response = JsonHelper.JSONToObject<H5Game>(_content);
                if (response.Code.Equals(0)) return Json(new { success = true, msg = "退出成功" }, JsonRequestBehavior.AllowGet);
                else return Json(new { success = false, msg = "退出失败" }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var gold = JdbWithdra(Account);
                if (gold < 0)
                {
                    cs_jdbIncrdecr_gm jid = new cs_jdbIncrdecr_gm() { fn = "cs_jdbIncrdecr_gm", money = -gold * 100, uid = Account, type = 1, gameid = GId };
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(jid));
                    string c_content = Utils.HttpGet(_url + _data);
                    sc_jdbIncrdecr_gm _scsetcard = JsonHelper.JSONToObject<sc_jdbIncrdecr_gm>(c_content);
                    if (_scsetcard._ret != 0)
                    {
                        _h5gamegoldchang.AddEntityAsync(new tgoldchangh5game()
                        {
                            UserId = Account,
                            CreateTime = DateTime.Now,
                            GameId = GId,
                            Gold = -gold,
                            GoldType = 2,
                            IsComplete = 0  //是否成功
                        });
                    }
                    _h5gamegoldchang.AddEntityAsync(new tgoldchangh5game()
                    {
                        UserId = Account,
                        CreateTime = DateTime.Now,
                        GameId = GId,
                        Gold = -gold,
                        GoldType = 0,//取出
                        IsComplete = gold<0 ? 1 : 0  //是否成功
                    });
                    var redisGold = redis.GetStringValue("login" + Account);
                    decimal yuen = 0;
                    if (redisGold != null) yuen = decimal.Parse(redisGold);
                    if (yuen>0)
                    {
                        decimal nowgold = -gold * 100;
                        H5winloseLogService.AddEntityAsync(new th5winloselog()
                        {
                            GameId = GId,
                            CreateTime = DateTime.Now,
                            IsRebate = 0,
                            UserId = Account,
                            beforeGold = yuen * 100,
                            afterGold = nowgold,
                            Gold = nowgold - yuen * 100
                        });
                        redis.DeleteStringKey("login" + Account);
                    }
                }
                //JDB 退出
                JdbLoginOut(Account);
                return Json(new { success = true, msg = "退出成功" }, JsonRequestBehavior.AllowGet);
            }
            

        }
        /// <summary>
        /// 获得玩家余额
        /// </summary>
        /// <returns></returns>
        public decimal GetBalance(int Account)
        {
            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("Account", Account);
            listkey.Add("Agent", 248);
            listkey.Add("key", h5SignKey);

            var diclist = Utils.SortDictionary(listkey);
            var urlstr = Utils.GetUrlString(diclist);
            var md5string = StringHelper.MD5(urlstr);
            listkey.Add("Sign", md5string);

            var diclist2 = Utils.SortDictionary(listkey);

            string _content = Utils.HttpPost2(h5gameurl + "Seamless/GetBalance", JsonConvert.SerializeObject(diclist2), h5gameKey);
            H5Game response = JsonHelper.JSONToObject<H5Game>(_content);
            if (response.Code.Equals(0)) return response.Data;
            else return 0;
        }
        [HttpGet]
        public JsonResult ChenkBalance(int Account)
        {

            return Json(new { B = GetBalance(Account) },JsonRequestBehavior.AllowGet);
        }
        
        /// <summary>
        /// 获取游戏列表
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult GetGameList()
        {

            Dictionary<string, object> listkey = new Dictionary<string, object>();

            string _content = Utils.HttpPost2(h5gameurl + "Seamless/GetGameList", JsonConvert.SerializeObject(listkey), h5gameKey);
            H5Game response = JsonHelper.JSONToObject<H5Game>(_content);
            if (response.Code.Equals(0) && response.Message.Equals("Success"))
            {
                //foreach (var item in response.Data)
                //{
                //    int gid = item["Id"];
                //    var game = _gameService.GetEntityByID(gid);
                //    if (game == null)
                //    {
                //        _gameService.AddEntity(new tgameinfo()
                //        {
                //            id = item["Id"],
                //            name = item["GameName"],
                //            modifyUser = "admin",
                //            modifyTime = DateTime.Now,
                //            Sort = 5,
                //            isHot = 0,
                //            isopen = true,
                //            type = item["GameGroupType"]
                //        });
                //    }
                //}
                return Json(new { success = true, msg = "获取成功", GameList = response.Data });
            }
            else return Json(new { success = false, msg = "获取失败" });
        }
        [HttpGet]
        public JsonResult TestTransferTo(int Account, string Amount)
        {
            var ok = TransferTo(Account, Amount);
            return Json(ok, JsonRequestBehavior.AllowGet);
        }


        /// <summary>
        /// 玩家存款
        /// </summary>
        /// <returns></returns>
        public bool TransferTo(int Account,string Amount)
        {
            lock (DTKeys.ReGold)
            {
                Dictionary<string, object> listkey = new Dictionary<string, object>();
                var tf = DateTime.Now.ToString("yyyyMMddHHmmssFFF");
                listkey.Add("Account", Account);
                listkey.Add("Agent", 248);
                listkey.Add("Amount", Amount);
                listkey.Add("TransferSn", tf);
                listkey.Add("key", h5SignKey);

                //var diclist = Utils.SortDictionary(listkey);
                var urlstr = Utils.GetUrlString(listkey);
                var md5string = StringHelper.MD5(urlstr);
                listkey.Add("Sign", md5string);


                string _content = Utils.HttpPost2(h5gameurl + "Seamless/TransferTo", JsonConvert.SerializeObject(listkey), h5gameKey);
                H5Game response = JsonHelper.JSONToObject<H5Game>(_content);
                Log.Error("玩家存款", JsonHelper.ObjectToJSON(response));
                if (response.Code.Equals(0) && response.Message.Equals("Success"))
                {
                    if (response.Data["Result"] == 1) return true;//充值成功
                    else if (response.Data["Result"] == 2) return false;
                    else if (response.Data["Result"] == 3) return false;//处理中
                    else return false;//未知错误
                }
                else return false;//充值失败
            }
           
        }

        /// <summary>
        /// 玩家取款
        /// </summary>
        /// <returns></returns>
        public bool TransferBack(int Account,string Amount)
        {
            lock (DTKeys.returgold)
            {
                Dictionary<string, object> listkey = new Dictionary<string, object>();
                listkey.Add("Account", Account);
                listkey.Add("Agent", 248);
                listkey.Add("key", h5SignKey);
                listkey.Add("Amount", Amount);
                listkey.Add("TransferSn", DateTime.Now.ToString("yyyyMMddHHmmssFFF"));
                var diclist = Utils.SortDictionary(listkey);
                var urlstr = Utils.GetUrlString(diclist);
                var md5string = StringHelper.MD5(urlstr);
                listkey.Add("Sign", md5string);
                string _content = Utils.HttpPost2(h5gameurl + "Seamless/TransferBack", JsonConvert.SerializeObject(listkey), h5gameKey);
                H5Game response = JsonHelper.JSONToObject<H5Game>(_content);
                if (response.Code.Equals(0) && response.Message.Equals("Success"))
                {
                    if (response.Data["Result"] == 1) return true;
                    else if (response.Data["Result"] == 2) return false;
                    else if (response.Data["Result"] == 3) return false; //处理中
                    else return false;
                }
                else return false;
            }
        }

        [HttpGet]
        public JsonResult GetGameUrlPage(int Account,int GId)
        {
            return GetGameUrl(Account, GId);
        }

        #region JDB 接口 

        [HttpGet]
        public JsonResult JdbWithdratest(int Account)
        {
            return Json(JdbWithdra(Account), JsonRequestBehavior.AllowGet);
        }


        public bool CreateJdbAccount(int _Account,string name)
        {
            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("action", 12);
            listkey.Add("ts", Utils.GetTimeStampHm());
            listkey.Add("parent", "nwyxrmbag");
            listkey.Add("uid", _Account);
            listkey.Add("name", Utils.Removebyte(name));

            string jsonstr = JsonConvert.SerializeObject(listkey);
            Dictionary<string, object> getpara = new Dictionary<string, object>();
            getpara.Add("dc", "nwyx");
            getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY, AES_IV, padding));
            var str = Utils.GetUrlString(getpara);

            string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
            JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content); //7602存在
            if (response.status.Equals("0000") || response.status.Equals("7602"))  return true;
            else
            {
                Log.Debug("", "CreateJdbAccount：fasle，Userid:"+ _Account + "，code："+ response.err_text);
                return false;
            }
            
        }

        /// <summary>
        /// h5带入
        /// </summary>
        /// <returns></returns>
        public decimal BringIn(int uid,int gid)
        {
            cs_jdbIncrdecr_gm jid = new cs_jdbIncrdecr_gm() { fn = "cs_jdbIncrdecr_gm", money = 0, uid = uid, type = 0,gameid= gid };
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(jid));
            string c_content = Utils.HttpGet(_url + _data);
            sc_jdbIncrdecr_gm _scsetcard = JsonHelper.JSONToObject<sc_jdbIncrdecr_gm>(c_content);
            if (_scsetcard._ret == 0) return _scsetcard.balance;
            else return -1;
        }
        /// <summary>
        /// jdb存款
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="balance"></param>
        /// <returns></returns>
        public bool JdbBringIn(int uid,decimal balance)
        {
            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("action", 19);
            listkey.Add("ts", Utils.GetTimeStampHm());
            listkey.Add("parent", "nwyxrmbag");

            listkey.Add("uid", uid);
            listkey.Add("serialNo", DateTime.Now.ToString("yyyyMMddHHmmssFFF"));
            //正数: 存款负数: 提款

            listkey.Add("amount", balance);

            string jsonstr = JsonConvert.SerializeObject(listkey);
            Dictionary<string, object> getpara = new Dictionary<string, object>();
            getpara.Add("dc", "nwyx");
            getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY, AES_IV, padding));
            var str = Utils.GetUrlString(getpara);

            string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
            JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content);
            if (response.status.Equals("0000"))    return true;
            else
            {
                Log.Error("JdbBringIn", "h5 存取款失败，交易号：" + response.serialNo + ",Uid：" + uid);
                return false;
            }

        }
        /// <summary>
        /// jdb取款
        /// </summary>
        /// <param name="uid"></param>
        /// <param name="balance"></param>
        /// <returns></returns>
        public decimal JdbWithdra(int uid)
        {
            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("action", 19);
            listkey.Add("ts", Utils.GetTimeStampHm());
            listkey.Add("parent", "nwyxrmbag");

            listkey.Add("uid", uid);
            listkey.Add("serialNo", DateTime.Now.ToString("yyyyMMddHHmmssFFF"));
            listkey.Add("allCashOutFlag", 1);
            //正数: 存款负数: 提款


            string jsonstr = JsonConvert.SerializeObject(listkey);
            Dictionary<string, object> getpara = new Dictionary<string, object>();
            getpara.Add("dc", "nwyx");
            getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY, AES_IV, padding));
            var str = Utils.GetUrlString(getpara);

            string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
            JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content);
            if (response.status.Equals("0000")) return response.amount;
            else
            {
                Log.Error("JdbBringIn", "h5 jdb取款，交易号：" + response.serialNo + ",Uid：" + uid + ",response.status："+ response.status);
                return 0;
            }

        }
        /// <summary>
        /// jdb退出
        /// </summary>
        /// <param name="account"></param>
        /// <returns></returns>
        public bool JdbLoginOut(int account)
        {
            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("action", 17);
            listkey.Add("ts", Utils.GetTimeStampHm());
            listkey.Add("parent", "nwyxrmbag");
            listkey.Add("uid", account);
            string jsonstr = JsonConvert.SerializeObject(listkey);
            Dictionary<string, object> getpara = new Dictionary<string, object>();
            getpara.Add("dc", "nwyx");
            getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY, AES_IV, padding));
            var str = Utils.GetUrlString(getpara);


            string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
            JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content);
            if (response.status.Equals("0000")) return true;
            else return false;
        }
        /// <summary>
        ///单钱包   弃用
        /// </summary>
        /// <returns></returns>

        public JsonResult JDBCallback()
        {
            //单一钱包不支援棋牌游戏
            try
            {
                var data = Utils.AesDecryptBase64(Request.Form["x"], AES_KEY, AES_IV);
                var jsonData = JsonConvert.DeserializeObject<dynamic>(data);
               
                if (jsonData["action"] == "6")  //获取余额
                {
                    int uid = Convert.ToInt32(jsonData["uid"]);
                    cs_jdbIncrdecr_gm jid = new cs_jdbIncrdecr_gm() { fn = "cs_jdbIncrdecr_gm", money = 0, uid = uid, type = 1 };
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(jid));
                    string c_content = Utils.HttpGet(_url + _data);
                    sc_jdbIncrdecr_gm _scsetcard = JsonHelper.JSONToObject<sc_jdbIncrdecr_gm>(c_content);
                    if (_scsetcard._ret == 0) return Json(new { status = "0000", balance = _scsetcard.balance /100 });
                    else return Json(new { status = _scsetcard._ret, err_text = "request was aborted" });

                }
                else if (jsonData["action"] == "8")  //下注信息
                {

                    cs_wagerinfo_gm woinfo = new cs_wagerinfo_gm();
                    woinfo.fn = "cs_wagerinfo_gm";
                    woinfo.bet = jsonData["bet"];
                    woinfo.gType = jsonData["gType"];
                    woinfo.mType = jsonData["mType"];
                    woinfo.netWin = jsonData["netWin"];
                    woinfo.transferId = jsonData["transferId"];
                    woinfo.uid = jsonData["uid"];
                    woinfo.win = jsonData["win"];
                    woinfo.ipAddress = jsonData["ipAddress"];
                    woinfo.gameDate = jsonData["gameDate"];
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(woinfo));
                    string c_content = Utils.HttpGet(_url + _data);
                    sc_wagerinfo_gm _scsetcard = JsonHelper.JSONToObject<sc_wagerinfo_gm>(c_content);
                    if (_scsetcard._ret == 0) return Json(new { status = "0000", balance = _scsetcard.balance/100 });
                    else return Json(new { status = _scsetcard._ret, err_text = "request was aborted" });

                }
                else
                {
                    //action ==  4取消下注
                    cs_cancelwager cacel = new cs_cancelwager();
                    cacel.fn = "sc_cancelwager";
                    cacel.transferId = jsonData["transferId"];
                    cacel.uid = jsonData["uid"];
                    string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(cacel));
                    string c_content = Utils.HttpGet(_url + _data);
                    sc_wagerinfo_gm _scsetcard = JsonHelper.JSONToObject<sc_wagerinfo_gm>(c_content);
                    if (_scsetcard._ret == 0) return Json(new { status = "0000", balance = _scsetcard.balance/100 });
                    else return Json(new { status = _scsetcard._ret, err_text = "request was aborted" });
                }
            }
            catch (Exception e)
            {
                Log.Error("JDBCallback", "Exception：" + e.Message);
                return Json(new { status = "9999", err_text = " request System error" });
            }
            
        }
        [HttpPost]
        public JsonResult GetJdbGamelist()
        {

            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("action", 49);
            listkey.Add("ts", Utils.GetTimeStampHm());
            listkey.Add("parent", "nwyxrmbag");
            listkey.Add("lang", "ch");

            string jsonstr = JsonConvert.SerializeObject(listkey);
            Dictionary<string, object> getpara = new Dictionary<string, object>();
            getpara.Add("dc", "nwyx");
            getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY,AES_IV, padding));
            var str = Utils.GetUrlString(getpara);

            string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
            JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content);
            if (response.status.Equals("0000"))
            {
                List<tgameinfo> jdb = new List<tgameinfo>();
                foreach (var item in response.data)
                {
                    int gType = item["gType"];
                    foreach (var game in item["list"])
                    {
                        int gameid = game["mType"];
                        var gameinfo = _gameService.GetEntityByID(gameid);
                        //if (gameinfo.jdbType == gType) continue;
                        //else
                        //{
                        //    gameinfo.jdbType = gType;
                        //    _gameService.UpdateAsync(gameinfo);
                        //}
                        if (gameinfo==null)
                        {
                            _gameService.AddEntity(new tgameinfo()
                            {
                                //id = game["mType"],
                                name = game["name"],
                                modifyUser = "admin",
                                modifyTime = DateTime.Now,
                                Sort = 5,
                                platType = 2,
                                jdbType = gType,
                                gamePort = game["mType"],
                                gameIp = game["image"],
                                isHot = 0,
                                isopen = true,
                                type = gType
                            });
                        }

                    }
                }
                return Json(new { success = true, msg = "获取成功", GameList = response.data });
            }
            else return Json(new { success = false, msg = "获取失败" });

        }

        [HttpGet]
        public JsonResult GetGameUrlJD(int account,double balance,int gameid,int gtype)
        {
            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("action", 21);
            listkey.Add("ts", Utils.GetTimeStampHm());
            listkey.Add("parent", "nwyxrmbag");
            listkey.Add("uid", account);
            listkey.Add("balance", balance);
            listkey.Add("lang", "ch");
            listkey.Add("windowMode", 2);
            listkey.Add("gType", gtype);
            listkey.Add("mType", gameid);
            string jsonstr = JsonConvert.SerializeObject(listkey);
            Dictionary<string, object> getpara = new Dictionary<string, object>();
            getpara.Add("dc", "nwyx");
            getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY, AES_IV, padding));
            var str = Utils.GetUrlString(getpara);

            string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
            JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content);
            if (response.status.Equals("0000"))
            {
                return Json(new { success = true, msg = "获取成功", gameUrl = response.path }, JsonRequestBehavior.AllowGet);
            }else return Json(new { success = false, msg = "获取失败!-" + response.err_text }, JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 查询玩家状态
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UserStateQuery()
        {
            var userid = Request.Form["UserId"];

            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("action", 52);
            listkey.Add("ts", Utils.GetTimeStampHm());
            listkey.Add("parent", "nwyxrmbag");
            listkey.Add("uid", userid);

            string jsonstr = JsonConvert.SerializeObject(listkey);
            Dictionary<string, object> getpara = new Dictionary<string, object>();
            getpara.Add("dc", "nwyx");
            getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY, AES_IV, padding));
            var str = Utils.GetUrlString(getpara);

            string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
            JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content);
            if (response.status.Equals("0000"))
            {
                return Json(new { success = true, msg = "获取成功", data = response.data });
            }
            else
            {
                return Json(new { success = true, msg = "获取成功", data = response.err_text });
            }
        }
        /// <summary>
        /// 后台踢出玩家
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UserLoginout()
        {
            var userid = Request.Form["UserId"];

            var reslut = JdbLoginOut(int.Parse(userid));
            LoginOut(int.Parse(userid), 7001);
            return Json(new { success = true, msg = "操作成功"+ reslut });

        }
        /// <summary>
        /// 后台踢出全部玩家
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult UserLoginoutAlluser()
        {
            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("action", 58);
            listkey.Add("ts", Utils.GetTimeStampHm());
            listkey.Add("parent", "nwyxrmbag");

            string jsonstr = JsonConvert.SerializeObject(listkey);
            Dictionary<string, object> getpara = new Dictionary<string, object>();
            getpara.Add("dc", "nwyx");
            getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY, AES_IV, padding));
            var str = Utils.GetUrlString(getpara);

            string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
            JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content);
            if (response.status.Equals("0000"))
            {
                return Json(new { success = true, msg = "踢出成功"});
            }
            else
            {
                return Json(new { success = true, msg = response.err_text });
            }
        }
        [HttpPost]
        public JsonResult UserStateLimit()
        {
            var userid = Request.Form["UserId"];
            var state = Request.Form["state"];
            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("action", 14);
            listkey.Add("ts", Utils.GetTimeStampHm());
            listkey.Add("parent", "nwyxrmbag");
            listkey.Add("uid", userid);
            listkey.Add("operation_code", state);

            string jsonstr = JsonConvert.SerializeObject(listkey);
            Dictionary<string, object> getpara = new Dictionary<string, object>();
            getpara.Add("dc", "nwyx");
            getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY, AES_IV, padding));
            var str = Utils.GetUrlString(getpara);

            string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
            JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content);
            if (response.status.Equals("0000"))
            {
                return Json(new { success = true, msg = "操作成功" });
            }
            else
            {
                return Json(new { success = true, msg = response.err_text });
            }

        }
        public JsonResult UserDataQuery()
        {
            var userid = Request.Form["UserId"];
            Dictionary<string, object> listkey = new Dictionary<string, object>();
            listkey.Add("action", 15);
            listkey.Add("ts", Utils.GetTimeStampHm());
            listkey.Add("parent", "nwyxrmbag");
            listkey.Add("uid", userid);

            string jsonstr = JsonConvert.SerializeObject(listkey);
            Dictionary<string, object> getpara = new Dictionary<string, object>();
            getpara.Add("dc", "nwyx");
            getpara.Add("x", Utils.AESEncryptToString(jsonstr, AES_KEY, AES_IV, padding));
            var str = Utils.GetUrlString(getpara);

            string _content = Utils.HttpPost(jdbApi + "?" + str, jsonstr);
            JDBmModel response = JsonHelper.JSONToObject<JDBmModel>(_content);
            if (response.status.Equals("0000"))
            {
                return Json(new { success = true, msg = JsonConvert.SerializeObject(response.data) });
            }
            else
            {
                return Json(new { success = true, msg = response.err_text });
            }

        }

        #endregion

        #region  后台接口
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult GameUserQuery()
        {
            return View();
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="page"></param>
        /// <param name="week">1 本周    0上周</param>
        /// <returns></returns>
        public ActionResult H5Bonus()
        {
            return View();
        }

        public JsonResult H5BonusList(DPagePara page)
        {
            DateTime stime = StringHelper.GetTimeStartByType("Week", page.ChangeType == 1 ? DateTime.Now.ToGetDayStartDateTime(): DateTime.Now.AddDays(-7));
            DateTime etime = StringHelper.GetTimeEndByType("Week", page.ChangeType == 1 ? DateTime.Now.ToGetDayEndDateTime() : DateTime.Now.AddDays(-7));
            var data = H5winloseLogService.GetlastWeekBonus(page, stime, etime);

            string pageUrl = Utils.CombUrlTxt("GoldChangelog", "Keywords={0}&PageSize={2}&PageIndex={1}", page.Keywords, "__id__", page.PageSize.ToString());
            string InnerHtml = Utils.OutPageList(data.PageSize, data.PageIndex, data.TotalCount, pageUrl, 8, true);
            data.InnerHtml = InnerHtml;
            return Json(data);
        }
        /// <summary>
        /// 发放全部玩家
        /// </summary>
        /// <param name="gold"></param>
        /// <param name="uid"></param>
        /// <returns></returns>
        public JsonResult AllBonusGive(int week)
        {
            DateTime stime = StringHelper.GetTimeStartByType("Week", week == 1 ? DateTime.Now.ToGetDayStartDateTime() : DateTime.Now.AddDays(-7));
            DateTime etime = StringHelper.GetTimeEndByType("Week", week == 1 ? DateTime.Now.ToGetDayEndDateTime() : DateTime.Now.AddDays(-7));

            cs_h5bonusgive sendbonus = new cs_h5bonusgive() { fn = "cs_h5bonusgive" };
            sendbonus.data = H5winloseLogService.GetUserWeekBonus(stime, etime).Where(t=>t.Gold<0).Select(t=>new UserBonus { Gold = t.Gold,UserId=t.UserId}).ToList();
            
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(sendbonus));
            string _content = HttpService.GetHttp(_url, _data);
            sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);
            if (_scsetcard._ret == 0)
            {
                H5winloseLogService.UpdateIsRebateBytime(stime, etime);
                return Json(new { sucess = true, msg = "发放成功" });
            }
            return Json(new { sucess = false, msg = "发放失败" });
        }

        /// <summary>
        /// 发放用户红利
        /// </summary>
        /// <param name="Gold"></param>
        /// <param name="uid"></param>
        /// <returns></returns>
        public JsonResult BonusGive(int uid,int week)
        {
            DateTime stime = StringHelper.GetTimeStartByType("Week", week == 1 ? DateTime.Now.ToGetDayStartDateTime() : DateTime.Now.AddDays(-7));
            DateTime etime = StringHelper.GetTimeEndByType("Week", week == 1 ? DateTime.Now.ToGetDayEndDateTime() : DateTime.Now.AddDays(-7));

            cs_h5bonusgive sendbonus = new cs_h5bonusgive() {fn= "cs_h5bonusgive" };
            sendbonus.data = H5winloseLogService.GetUserWeekBonus(stime, etime, uid).Where(t => t.Gold < 0).Select(t => new UserBonus { Gold = t.Gold, UserId = t.UserId }).ToList();
            string _data = HttpUtility.UrlEncode(JsonHelper.ObjectToJSON(sendbonus));
            string _content = HttpService.GetHttp(_url, _data);
            sc_gameInfo _scsetcard = JsonHelper.JSONToObject<sc_gameInfo>(_content);
            if (_scsetcard._ret == 0)
            {
                H5winloseLogService.UpdateIsRebate(uid,1);
                return Json(new { sucess = true, msg = "发放成功" });
            }
            else return Json(new { sucess = false, msg = "发放失败" });
        }

        #endregion
    }
}
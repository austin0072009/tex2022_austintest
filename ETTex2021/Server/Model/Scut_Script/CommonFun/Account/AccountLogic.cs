using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 逻辑消息进来 的接口处理 登录注册 帐号相当于的，还未获取到userid的逻辑
    /// </summary>
    public class AccountLogic
    {   

        public AccountLogic()
        {
        }


        /// <summary>
        /// 处理消息
        /// </summary>
        /// <param name="clientcommand"></param>
        /// <returns></returns>
        public async Task<string> DealDataEx(string _data, string _ipport, string sid)
        {
            string senddata = "";
            sc_visitLimit_n visitLimit = new sc_visitLimit_n() { result = 1 };
            if (!VisitLimit(_ipport, visitLimit))
            {
                senddata = JsonUtils.Serialize(visitLimit);
                return senddata;
            }

            cs_base _basedata = JsonUtils.Deserialize<cs_base>(_data); 
            switch (_basedata.fn)
            {
                case "cs_getexiste_openid":
                    cs_getexiste_openid _existe = JsonUtils.Deserialize<cs_getexiste_openid>(_data);
                    senddata = await AccountHelper.GetExiste(_existe);
                    break;
                case "cs_device":// 
                    cs_device _de = JsonUtils.Deserialize<cs_device>(_data);
                    senddata = await AccountHelper.GetDevice(_de);
                    break;
                case "cs_loginac":
                    cs_loginac _login = JsonUtils.Deserialize<cs_loginac>(_data);
                    senddata =await AccountHelper.LoginAC(_login, _ipport, sid);
                    break;
                case "cs_create1005":
                    cs_create1005 _gamelist = JsonUtils.Deserialize<cs_create1005>(_data);
                    senddata =await AccountHelper.Creater1005(_gamelist, _ipport, 0);
                    break;
                default:

                    break;
            } 
            return senddata;
        }
          
        /// <summary>
        /// 给请求方发送服务器时间
        /// </summary>
        /// <returns></returns>
        public string GetPing()
        {
            sc_ping _senddata = new sc_ping() { result = 1};
            _senddata.fps = 45;
            return JsonUtils.Serialize(_senddata);
        } 

        #region Ip黑名单和访问限制
        /// <summary>
        /// 获取奖池
        /// </summary>
        public static bool VisitLimit(string ipport, sc_visitLimit_n limitback)
        {
            bool result = true;
            return true; 
            ////try
            ////{
            ////    ipport = ipport.Split(':')[0];
            ////    DateTime curdate = DateTime.Now.Date;
            ////    TimeSpan mis = DateTime.Now - DateTime.Now.Date;
            ////    int unit = (int)mis.TotalMinutes;
            ////    int date = int.Parse(DateTime.Now.ToString("yyyyMMdd"));
            ////    var cache = new ShareCacheStruct<tVisitLimit>();
            ////    tVisitLimit limit = cache.Find(p => p.ipport == ipport);
            ////    if (limit == null)
            ////    {
            ////        ////初始化个人奖池
            ////        limit = new tVisitLimit();
            ////        limit.ipport = ipport;
            ////        limit.dateRecord = new Dictionary<int, int>();
            ////        limit.unitRcord = new Dictionary<int, int>();
            ////        limit.dateMaxLimit = 1000;
            ////        limit.unitMaxLimit = 20;
            ////        cache.AddOrUpdate(limit);
            ////    }
            ////    if (limit.unitRcord == null)
            ////    {
            ////        limit.unitRcord = new Dictionary<int, int>();
            ////    }
            ////    if (limit.dateRecord == null)
            ////    {
            ////        limit.dateRecord = new Dictionary<int, int>();
            ////    }

            ////    if (!limit.unitRcord.ContainsKey(unit))
            ////    {
            ////        limit.unitRcord.Add(unit, 0);
            ////    }

            ////    if (!limit.dateRecord.ContainsKey(date))
            ////    {
            ////        limit.dateRecord.Add(date, 0);
            ////    }

            ////    limit.unitRcord[unit]++;
            ////    limit.dateRecord[date]++;
            ////    cache.AddOrUpdate(limit);

            ////    if (limit.unitRcord[unit] >= limit.unitMaxLimit)
            ////    {
            ////        limitback.result = -1;
            ////        //limitback.msg = "访问过于频繁，请稍后重试";
            ////        result = false;
            ////    }
            ////    else if (limit.dateRecord[date] >= limit.dateMaxLimit)
            ////    {
            ////        limitback.result = -2;
            ////        //limitback.msg = "访问超过次数限制";
            ////        result = false;
            ////    }
            ////}
            ////catch (Exception ex)
            ////{
            ////    TraceLogEx.Error(ex, "20170912..........Jackpot get error!");
            ////}

            ////return result;
        }
        #endregion
        
    }
}
using ETModel.Script.Model;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

/// <summary>
/// Scut 缓存获取不支持，?类型
/// </summary>
namespace ETModel.Script.CsScript.Action
{

    public class tUserGamehandEx
    {
        private static Dictionary<string, tUserGameHand> _gameHandDic = new Dictionary<string, tUserGameHand>();
        public static async Task<tUserGameHand> GetUserHandRecord(int userid, int clubid)
        {
            string strKey = $"{userid}_{clubid}";
            if(_gameHandDic.TryGetValue(strKey,out tUserGameHand hand))
            {
                return hand;
            }
            tUserGameHand _tempuser = await BaseHelper.GetShare<tUserGameHand>(t => t.clubid == clubid && t.UserId == userid);
            if (_tempuser == null)
            {
                _tempuser = new tUserGameHand() { UserId = userid, clubid = clubid };
                await BaseHelper.AddOrUpdate(_tempuser);
                return _tempuser;
            }
            _gameHandDic[strKey] = _tempuser;
            return _tempuser;
        }

        /// <summary>
        /// 获取总手数  游戏id   为0时候获取全部游戏手数
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="gameid">游戏id   为0时候获取全部游戏手数</param>
        /// <returns></returns>
        public static async Task<int> GetUserTotalHandNum(int userid, int clubid)
        {
            tUserGameHand chexuaqn = await GetUserHandRecord(userid,clubid);
            return chexuaqn.totalCount;
        }
        /// <summary>
        /// 记录局数
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="clubid"></param>
        /// <param name="gameid"></param>
        /// <param name="levelid"></param>
        /// <param name="winGold"></param>
        public static async void WriteHandNum(int userid,int clubid,int gameid,int levelid,long winGold)
        {
            tUserGameHand gameHand = await GetUserHandRecord(userid, clubid);
            if (gameHand._gamehc == null)
            {
                gameHand._gamehc = new Framework.Cache.Generic.CacheList<GameHandCount>();
            }
            GameHandCount handCount = gameHand._gamehc.Find(g => g.gameid == gameid && g.levelid == levelid);
            if (handCount == null)
            {
                handCount = new GameHandCount()
                {
                    gameid = gameid,
                    levelid = levelid,
                    count = 0,
                    WinCount = 0,
                    LostCount = 0,
                    DrawCount = 0,
                };
                gameHand._gamehc.Add(handCount);
            }
            handCount.count++;
            if(winGold > 0)
            {
                handCount.WinCount++;
            }else if(winGold < 0)
            {
                handCount.LostCount++;
            }
            else
            {
                handCount.DrawCount++;
            }
            gameHand.lastdealtime = System.DateTime.Now;
            await BaseHelper.AddOrUpdate(gameHand);
        }
        /// <summary>
        /// 获取当前玩过的总局数
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="clubid"></param>
        /// <returns></returns>
        public static async Task<int> GetTotalHandCount(int userid, int clubid)
        {
            tUserGameHand gameHand = await GetUserHandRecord(userid, clubid);
            if (gameHand._gamehc == null)
            {
                return 0;
            }
            int iTotalCount = gameHand.totalCount+ gameHand._gamehc.Sum(h => h.count);
            return iTotalCount;
        } 
        /// <summary>
        /// 获取某个游戏的手数，局数
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="clubid"></param>
        /// <param name="gameid"></param>
        /// <param name="levelid"></param>
        /// <returns></returns>
        public static async Task<GameHandCount> GetGameHandCount(int userid, int clubid,int gameid,int levelid)
        {
            tUserGameHand agenthand = await GetUserHandRecord(userid, clubid);
            if (agenthand == null)
            {
                agenthand = new tUserGameHand();
            }
            if (agenthand._gamehc == null)
            {
                agenthand._gamehc = new Framework.Cache.Generic.CacheList<GameHandCount>();
            }
            GameHandCount handCount = agenthand._gamehc.Find(g => g.gameid == gameid && g.levelid == levelid);
            if (handCount == null)
            {
                handCount = new GameHandCount()
                {
                    gameid = gameid,
                    levelid = levelid,
                    count = 0,
                    WinCount = 0,
                    LostCount = 0,
                    DrawCount = 0,
                };
                agenthand._gamehc.Add(handCount);
            }
            return handCount;
        }
    }

}

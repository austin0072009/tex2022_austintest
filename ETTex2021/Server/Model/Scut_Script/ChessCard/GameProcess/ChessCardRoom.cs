using ETModel.Script.Model;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 游戏房间
    /// </summary>
    public class ChessCardRoom : BaseRoom
    {
        /// <summary>
        /// 房主的房间号列表 
        /// </summary>
        public ConcurrentDictionary<int, List<int>> _dicMasterUserID2Tableid;
        public ChessCardRoom()
        { }
        protected override void Initi(tgamelevelinfo _levelinfo)
        {
            base.Initi(_levelinfo);
            _dicMasterUserID2Tableid = new ConcurrentDictionary<int, List<int>>(); 
        }          
       
        /// <summary>
        /// 用户退出房间时调用  手动退出，掉线（清理Session里要调用）       
        /// </summary>
        /// <param name="userID"></param>
        public override async ETTask<bool> ExitRoomBase(int userID)
        {
            return await base.ExitRoomBase(userID);

        } 
         
        /// <summary>
        /// 获取指定用户创建的房间列表
        /// </summary>
        /// <param name="masterUserID"></param>
        /// <returns></returns>
        public List<int> GetTableListByOwnerUserID(int masterUserID)
        {
            if (_dicMasterUserID2Tableid.ContainsKey(masterUserID))
            {
                return _dicMasterUserID2Tableid[masterUserID];
            }
            else return new List<int>();
        }


    }
    public class TableGainSD
    {

        /// <summary>
        /// 用户信息
        /// </summary> 
        public WechatInfoSD wechat;
        /// <summary>
        ///  
        /// </summary> 
        public int UserID;

        /// <summary>
        /// 初始带入
        /// </summary> 
        public long finto;

        /// <summary>
        /// 战绩 收益 正负
        /// </summary> 
        public int gain;
        /// <summary>
        /// 手数
        /// </summary>
        public int pcount;
        /// <summary>
        /// 1表示离线状态
        /// </summary>
        public int offline;
        /// <summary>
        /// 
        /// </summary>
        public int otherMoney;

        /// <summary>
        /// AOF 带出累计
        /// 为0和其他模式都不显示
        /// </summary>
        public long goldout;

    }

    /// <summary>
    /// 简短用户信息
    /// </summary>
    public class PInfoSD
    {
        /// <summary>
        /// userid
        /// </summary>
        public int uid;
        /// <summary>
        /// 头像
        /// </summary>
        public string wicon;
        /// <summary>
        /// 名称
        /// </summary>
        public string wName;
    }

    /// <summary>
    /// 单局的详情 
    /// </summary>
    public class TInfoSD
    {
        /// <summary>
        /// jackpot +-
        /// </summary>
        public int j;
        /// <summary>
        /// 1表示休 2表示揍
        /// </summary>
        public int mt;
        /// <summary>
        /// 8个人的详情
        /// </summary>
        public List<TUserInfoSD> u;

    }


    public class TUserInfoSD
    {
        /// <summary>
        /// UserID list 从ulist获取
        /// </summary>
        public int id;
        /// <summary>
        /// 是否强制show牌（0:表示没有；1：强制秀牌）
        /// </summary>
        public int st;
        /// <summary>
        /// show自己的牌ID(逗号隔开)
        /// </summary>
        public string sp;
        /// <summary>
        /// cardslist 有严格顺序
        /// </summary>
        public List<int> c;
        /// <summary>
        /// 前两张牌(初始底牌)
        /// </summary>
        public List<int> p;
        /// <summary>
        /// 第3张
        /// </summary>
        public int c3;
        /// <summary>
        ///  
        /// 第几轮弃的牌   小于等于1 表示只显示两张牌背 如果是自己要显示两张手牌。 2，3，表示对应第三，第四轮弃牌 5表示分牌
        /// </summary>
        public int s;
        /// <summary>
        /// 自己的下注
        /// </summary>
        public int g;
        /// <summary>
        /// giveup 1 表示弃牌
        /// </summary>
        public int gu;
        /// <summary>
        /// 总赢的金币 减去税收
        /// </summary>
        public int wg;
        /// <summary>
        /// 赢的芒果分
        /// </summary>
        public int wm;
    }

    public class PotUserLog
    {
        /// <summary>
        /// 用户名
        /// </summary>
        public string _n;
        /// <summary>
        /// 奖池类型（1：天皇；2：朵皇；3：朵朵）
        /// </summary>
        public int _jt;
        /// <summary>
        /// 金币
        /// </summary>
        public int _gold;
        /// <summary>
        /// 时间
        /// </summary>
        public string _time;
    }
}

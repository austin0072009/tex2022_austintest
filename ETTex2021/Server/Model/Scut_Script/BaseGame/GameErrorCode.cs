using ETModel.Script.Model;
using System;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    /// <summary>
    /// 游戏错误编码 
    /// </summary>
    public static class GameErrorCode
    {

        /// <summary>
        /// 成功
        /// </summary>
        public const int Success = 1;
        #region 用户
        /// <summary>
        /// 用户不存在
        /// </summary>
        public const int UserNotExist = -101;
        /// <summary>
        /// 你已经在其他牌桌中游戏
        /// </summary>
        public const int InPlaying = -102;
        /// <summary>
        /// 不在游戏中
        /// </summary>
        public const int UnInGame = -103;
        /// <summary>
        /// 不在桌子上
        /// </summary>
        public const int UnInTable = -104;
        /// <summary>
        /// 不在牌局中
        /// </summary>
        public const int UnInGameing = -105;
        /// <summary>
        /// 坐下失败
        /// </summary>
        public const int SitDownFail = -106;

        /// <summary>
        /// 不是你的token
        /// </summary>
        public const int Notoken = -107;

        #endregion

        #region 桌子
        /// <summary>
        /// 创建桌子或匹配失败
        /// </summary>
        public const int CreateTableFail = -201;
        /// <summary>
        /// 裁判不存在
        /// </summary>
        public const int NoJudge = -202;
        /// <summary>
        /// 人数达到上限
        /// </summary>
        public const int PlayerOverMaxLimit = -203;
        /// <summary>
        /// 没找到座位
        /// </summary>
        public const int NoFindSeats = -204;
        /// <summary>
        /// 房间已关闭
        /// </summary>
        public const int RoomClose = -205;
        /// <summary>
        /// 操作失败
        /// </summary>
        public const int OperationFail = -206;
        /// <summary>
        /// 退出桌子失败
        /// </summary>
        public const int ExitTableFail = -207;
        /// <summary>
        /// 押注为空
        /// </summary>
        public const int GambleEmpty = -208;
        /// <summary>
        /// 不能下注
        /// </summary>
        public const int NoGamble = -209;
        /// <summary>
        /// 下注超过限额
        /// </summary>
        public const int GambleOverLimie = -210;
        #endregion

        #region 金币
        /// <summary>
        /// 金币不足
        /// </summary>
        public const int GoldNotEnough = -301;
        #endregion

        #region 牌相关

        /// <summary>
        /// 已经看了自己的牌
        /// </summary>
        public const int SeeedPoker = -401;

        /// <summary>
        /// 已经弃了牌
        /// </summary>
        public const int GiveupEd = -402;

        /// <summary>
        /// 前两轮不能拿比牌
        /// </summary>
        public const int FirsttwoNoCom = -403;

        /// <summary>
        /// 需要看牌
        /// </summary>
        public const int NeedSeenCard = -404;

        #endregion


        #region 其它
        /// <summary>
        /// 流程消息错误
        /// </summary>
        public const int ProcessMsgError = -1001;
        /// <summary>
        /// 系统错误（抛异常）
        /// </summary>
        public const int SystemFail = -1002;
        /// <summary>
        /// 
        /// </summary>
        public const int GPSFail = -1003;
        #endregion
    }
}

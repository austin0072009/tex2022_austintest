namespace ETModel.Script.Model
{
    /// <summary>
    /// 操作类型
    /// </summary>
    public enum ResActionType
    {
        /// <summary>
        /// 加
        /// </summary>
        Add = 1,
        /// <summary>
        /// 减
        /// </summary>
        Minus =2,
        /// <summary>
        /// 玩家奖池贡献
        /// </summary>
        userJackpot = 3,
        /// <summary>
        /// 奖池税收
        /// </summary>
        jackpot = 4,
        /// <summary>
        /// 红利税收
        /// </summary>
        agent = 7, 
        /// <summary>
        /// 切牌税收
        /// </summary>
        cutDeck = 11,
        /// <summary>
        /// 查看余牌税收
        /// </summary>
        seeCards = 12,
        /// <summary>
        /// 强制show牌税收
        /// </summary>
        showCards = 13,
        /// <summary>
        /// 奖池返利
        /// </summary>
        jackpotReturnGold = 22,
        /// <summary>
        /// 红利返利
        /// </summary>
        redReturnGold = 23,
        /// <summary>
        /// 保险抽利
        /// </summary>
        InsGold = 24,
        /// <summary>
        /// 结算抽利
        /// </summary>
        settleGold = 25,
        /// <summary>
        /// 转账
        /// </summary>
        giveGold = 26
    }
 

    public enum MailTypeEnum
    {
        /// <summary>
        /// 交易
        /// </summary>
        Trading = 1,
        /// <summary>
        /// 系统
        /// </summary>
        System=2,
        /// <summary>
        /// 个人
        /// </summary>
        personal=3,
        /// <summary>
        /// 活动
        /// </summary>
        Activity = 4
    }

    public enum MailNameEnum
    {
        /// <summary>
        /// 交易
        /// </summary>
        交易通知 = 1,
        /// <summary>
        /// 系统
        /// </summary>
        系统通知 = 2,
        /// <summary>
        /// 个人
        /// </summary>
        个人邮件 = 3,
        /// <summary>
        /// 活动
        /// </summary>
        活动通知 = 4
    }


    /// <summary>
    /// 会员权限
    /// </summary>
    public enum AuthEnum
    {
        /// <summary>
        /// 开房
        /// </summary>
        OpenRoom=99,
        /// <summary>
        /// 转盘
        /// </summary>
        TurnTable=98,
        /// <summary>
        /// 转盘场次1
        /// </summary>
        TurnTableLevelOne=1,
        /// <summary>
        /// 转盘场次2
        /// </summary>
        TurnTableLevelTwo=2,
        /// <summary>
        /// 转盘场次3
        /// </summary>
        TurnTableLevelThree=3
    }
}

namespace ETModel.Script.Model
{
    /// <summary>
    /// 统计类型
    /// </summary>
    public enum StatisticsType
    {
        /// <summary>
        /// 初始玩家分数
        /// </summary>
        InitUserScore,
        /// <summary>
        /// 当前玩家积分
        /// </summary>
        CurrUserScore,
        /// <summary>
        /// 初始奖池
        /// </summary>
        InitJackPotScore,
        /// <summary>
        /// 初始库存
        /// </summary>
        InitJackPotStockScore,
        /// <summary>
        /// 玩游戏次数
        /// </summary>
        PlayTimes,
        /// <summary>
        /// 免费次数
        /// </summary>
        FreeTimes,
        /// <summary>
        /// 中奖1~30倍次数
        /// </summary>
        MultsTimes30,
        /// <summary>
        /// 中奖31~200倍次数
        /// </summary>
        MultsTimes200,
        /// <summary>
        /// 中奖201~500倍次数
        /// </summary>
        MultsTimes500,
        /// <summary>
        /// 中奖501~800倍次数
        /// </summary>
        MultsTimes800,
        /// <summary>
        /// 中奖801倍以上次数
        /// </summary>
        MultsTimes801,
        /// <summary>
        /// 中奖1~30倍获得分数
        /// </summary>
        MultsScore30,
        /// <summary>
        /// 中奖31~200倍获得分数
        /// </summary>
        MultsScore200,
        /// <summary>
        /// 中奖201~500倍获得分数
        /// </summary>
        MultsScore500,
        /// <summary>
        /// 中奖501~800倍获得分数
        /// </summary>
        MultsScore800,
        /// <summary>
        /// 中奖801倍以上获得分数
        /// </summary>
        MultsScore801,
        /// <summary>
        /// 中奖池的分数
        /// </summary>
        JackPotWinScore,
        /// <summary>
        /// 中奖池次数
        /// </summary>
        JackPotWinTimes,
        /// <summary>
        /// 吐分
        /// </summary>
        OutComes,
        /// <summary>
        /// 吃分
        /// </summary>
        InComes,
        /// <summary>
        /// 连续相邻的wild
        /// </summary>
        Wild,
        /// <summary>
        /// 连续相邻的Scatter
        /// </summary>
        Scatter,
        /// <summary>
        /// 连续相邻的Bonus
        /// </summary>
        Bonus,
        /// <summary>
        /// 连线上连续相邻的wild
        /// </summary>
        LineWild,
        /// <summary>
        /// 连线上连续相邻的Scatter
        /// </summary>
        LineScatter,
        /// <summary>
        /// 连线上连续相邻的Bonus
        /// </summary>
        LineBonus,
        /// <summary>
        /// 连续相邻的3wild
        /// </summary>
        Wild3,
        /// <summary>
        /// 连续相邻的4wild
        /// </summary>
        Wild4,
        /// <summary>
        /// 连续相邻的5wild
        /// </summary>
        Wild5,
        /// <summary>
        /// 连续相邻的3Scatter
        /// </summary>
        Scatter3,
        /// <summary>
        /// 连续相邻的4Scatter
        /// </summary>
        Scatter4,
        /// <summary>
        /// 连续相邻的5Scatter
        /// </summary>
        Scatter5,
        /// <summary>
        /// 连续相邻的3Bonus
        /// </summary>
        Bonus3,
        /// <summary>
        /// 连续相邻的4Bonus
        /// </summary>
        Bonus4,
        /// <summary>
        /// 连续相邻的5Bonus
        /// </summary>
        Bonus5,
        /// <summary>
        /// 连线上连续相邻的3wild
        /// </summary>
        LineWild3,
        /// <summary>
        /// 连线上连续相邻的4wild
        /// </summary>
        LineWild4,
        /// <summary>
        /// 连线上连续相邻的5wild
        /// </summary>
        LineWild5,
        /// <summary>
        /// 连线上连续相邻的3Scatter
        /// </summary>
        LineScatter3,
        /// <summary>
        /// 连线上连续相邻的4Scatter
        /// </summary>
        LineScatter4,
        /// <summary>
        /// 连线上连续相邻的5Scatter
        /// </summary>
        LineScatter5,
        /// <summary>
        /// 连线上连续相邻的3Bonus
        /// </summary>
        LineBonus3,
        /// <summary>
        /// 连线上连续相邻的4Bonus
        /// </summary>
        LineBonus4,
        /// <summary>
        /// 连线上连续相邻的5Bonus
        /// </summary>
        LineBonus5,
        /// <summary>
        /// 总押注消耗
        /// </summary>
        BetTotalScore,
        /// <summary>
        /// 押注中奖次数
        /// </summary>
        BetWinTotalTimes,
        /// <summary>
        /// 押注中奖金额
        /// </summary>
        BetWinTotalScore,
        /// <summary>
        /// 中小玛丽游戏次数
        /// </summary>
        MarryWinTotalTimes,
        /// <summary>
        /// 小玛丽中奖金额
        /// </summary>
        MarryWinTotalScore
    }
}

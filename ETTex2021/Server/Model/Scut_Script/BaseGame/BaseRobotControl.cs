namespace ETModel.Script.CsScript.Action
{
    public class BaseRobotControl
    {
        /*押注间隔ms（机器人在每轮游戏下注的间隔时间，有10%的随机，防止每个机器人下注时间都一致*/
        public int BetIntervalTime;

        /*单局总押注时间ms（机器人在单局游戏的总时间，模拟跑数值的时候，需要缩短单局游戏时间，正式版该项配置无效）测试模式有效*/
        public int BetTotalTime; //相当于模拟数据的时候，机器人每100ms左右下注一次，单局下注总时间1s，单个机器人每局下注10次左右

        /*等待押注时间ms 测试模式有效*/
        public int WaitBetTime;

        /*运行的机器人数量 测试模式有效*/
        public int RobotCount;

        /*机器人玩的次数 测试模式有效*/
        public int PlayTimes;

        /*押注分数（机器人单次押注的随机值，根据权重判定每次下注多少）*/
        public int[] SingleLineScore;

        /*押注分数权重（对应上面押注分数的权重，权重越大的押注，越容易被随机到，权重为0的下注不会被随机到）*/
        public int[] SLpro; //比如前3个权重为0，则机器人只会固定每次下注10000

        /*压对应区域的权重  */
        public int[] Probability;

        /*押注是否进库存*（1代表机器人押注进库存，0代表机器人押注不进库存*/
        public int ku;

        /*测试模式false:正常模式 true:测试模式*/
        public bool bTest;
        
    }
}

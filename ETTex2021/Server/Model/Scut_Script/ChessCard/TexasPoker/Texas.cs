using ETModel.Framework.Common.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ETModel.Script.CsScript.Action
{
    public class TexasConfig
    {
        /// <summary>
        /// 触发概率 千分比
        /// </summary>
        public int TriggerProbability;
        /// <summary>
        /// 牌型权重  小同花或顺子、大同花、葫芦、四条、同花顺
        /// </summary>
        public int[] Probability;
    }
    /// <summary>
    /// 德州扑克牌的数据类
    /// </summary>
    public class Texas
    { 

        /// <summary>
        /// 黑
        /// </summary>
        public static int[] arrSpade = { 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114 };
        /// <summary>
        /// 红
        /// </summary>
        public static int[] arrHeart = { 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214 };
        /// <summary>
        /// 梅
        /// </summary>
        public static int[] arrClub = { 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314 };
        /// <summary>
        /// 方
        /// </summary>
        public static int[] arrDiamond = { 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414 };

        /// <summary>
        /// 一付Poker 52张
        /// </summary>
        private Queue<int> _ALLPoker;

        /// <summary>
        /// 不要大小王
        /// </summary>
        private static int mNumALLPoker = 52;
        /// <summary>
        /// 单个用户牌的个数
        /// </summary>
        private static int _NumPerUser = 2;
        private static TexasConfig config;

        public static void UpdateTexasConfig(int gameid, TexasConfig _config =null)
        {
            if (_config == null)
            {
                config = CommonFun.LoadControlConfig<TexasConfig>(gameid, $"{gameid}_config");
            }
            else
            {
                config = _config;
                CommonFun.SaveControlConfig(gameid, $"{gameid}_config", JsonUtils.Serialize(_config));
            }
            
        }
        /// <summary>
        /// 洗牌， 让所有纸牌，随机顺序
        /// </summary>
        private Queue<int> Shuffle(int _gametype)
        {
            Queue<int> ALLPoker = new Queue<int>();
            List<int> arrPoker = new List<int>();
            arrPoker.AddRange(arrHeart);
            arrPoker.AddRange(arrSpade);
            arrPoker.AddRange(arrClub);
            arrPoker.AddRange(arrDiamond);
            List<int> _shortpoker = new List<int>();
            if (_gametype == 10)
            {//短牌  
                foreach(var p in arrPoker)
                {
                    if (p % 100 >= 6) _shortpoker.Add(p);
                }
            }
            //随机生成排序这x张牌
            ALLPoker = new Queue<int>(ToolsEx.DisrupteList(_gametype == 10 ? _shortpoker : arrPoker));
            ALLPoker = new Queue<int>(ToolsEx.DisrupteList(ALLPoker.ToList()));//多洗一次
            if (ALLPoker.Count != mNumALLPoker)
            {
                TraceLogEx.Error("201610212116 ALLPoker.Count != mNumALLPoker 即扑克初始不正确");
            }
            return ALLPoker;
        }

        /// <summary>
        /// 初始化后 把纸牌分给2~6人
        /// </summary> 
        /// <returns></returns>
        public List<List<int>> DistributePokerAI(int _gametype, int gameid,out Queue<int> LeftCard, int userCount)
        {
            int rate = userCount * 50 * 1000;
            int _rate = ToolsEx.GetRandomSys(1, 10001);
            if (config == null)
            {
                UpdateTexasConfig(gameid);
            }
            if (config != null)
            {
                rate = config.TriggerProbability * userCount;
                if (_rate <= rate)
                {
                    List<List<int>> tmp = DistributePokerAIVS(_gametype, out LeftCard, userCount); 
                    return tmp;
                }
            }

            if (userCount > 9 || userCount < 2)
            {
                TraceLogEx.Error("201610212210tex  userCount > 9 || userCount < 2   " + userCount);
                LeftCard = null;
                return null;
            }
            Queue<int> ALLPoker = Shuffle(_gametype);

            List<List<int>> retDic = new List<List<int>>();
            for (int j = 1; j <= userCount; j++)
            {
                retDic.Add(new List<int>());
            }
            for (int i = 0; i < _NumPerUser; i++)
            {
                for (int j = 0; j < userCount; j++)
                {
                    retDic[j].Add(ALLPoker.Dequeue());
                }
            }
            LeftCard = ALLPoker;
            if (ALLPoker.Count != mNumALLPoker - _NumPerUser * userCount)
            {
                TraceLogEx.Error(" 20120824154501tex   分牌都分错了");//duan pai 不是52
            }
            if (LeftCard.Count < 5)
            {
                TraceLogEx.Error(" 20120824154501tex   分牌都分错了 公牌不够5张了");
            }
            return retDic;
        }
        /// <summary>
        ///  分给2~9人 出现冤牌的
        /// </summary> 
        /// <returns></returns>
        public List<List<int>> DistributePokerAIVS(int gametype, out Queue<int> LeftCard, int userCount)
        {
            if (userCount > 9 || userCount < 2)
            {
                TraceLogEx.Error("201610212210tex  userCount > 9 || userCount < 2   " + userCount);
                LeftCard = null;
                return null;
            }
            var ALLPoker =  Shuffle(gametype);

            Dictionary<int, int> _type2rate = new Dictionary<int, int>();
            _type2rate.Add((int)TexasPokerType.Five_Flush_LoyalStraight, 10); //皇家同花顺牌
            _type2rate.Add((int)TexasPokerType.Five_Flush_Straight, 60);//同花顺
            _type2rate.Add((int)TexasPokerType.Five_Bomb, 200); //四条
            _type2rate.Add((int)TexasPokerType.Five_THREE_TWO, 3000); //葫芦
            _type2rate.Add((int)TexasPokerType.Five_Flush, 10000);//同花

            int vs1 = ToolsEx.GetRandomSys(0, userCount);
            List<int> newArray = new List<int>();
            for (int i = 0; i < userCount; i++)
            {
                if (i == vs1) continue;
                newArray.Add(i);
            }
            int vs2 = newArray[ToolsEx.GetRandomSys(0, newArray.Count)];

            List<int> Lpoker = new List<int>(ALLPoker);
            List<int> _common = new List<int>();
            List<List<int>> retDic = new List<List<int>>();
            int iFlag =  CommonFun.GetRandItem(config.Probability);
            //iFlag = 1;
            if (iFlag == 6)//同花顺
            {
                retDic = DistributeSameShunCard(_common, Lpoker, vs1, vs2, userCount);
            }
            else if (iFlag == 5)//四条
            {
                retDic = DistributeBombCard(_common, Lpoker, vs1, vs2, userCount);
            }
            else if (iFlag == 4)//葫芦
            {
                retDic = DistributeThreeTwo(_common, Lpoker, vs1, vs2, userCount);
            }
            else if (iFlag == 3)//大同花
            {
                retDic = DistributeBigFiveFlush(_common, Lpoker, vs1, vs2, userCount);
            }
            else if (iFlag == 2)//小同花或者顺子
            {
                retDic = DistributeSmallFiveFlush(_common, Lpoker, vs1, vs2, userCount);
            }
            else if (iFlag == 1)//三条两对
            {
                retDic = DistributeThreeOrTwo(_common, Lpoker, vs1, vs2, userCount);
            }
            else
            {
                for (int j = 1; j <= userCount; j++)
                {
                    retDic.Add(new List<int>());
                }
            }
            ALLPoker = new Queue<int>(Lpoker);
            for (int i = 0; i < _NumPerUser; i++)
            {
                for (int j = 0; j < userCount; j++)
                {
                    if (j == vs1 || j == vs2)
                    {
                        if (retDic[j].Count != 2) retDic[j].Add(ALLPoker.Dequeue());
                        continue;
                    }
                    retDic[j].Add(ALLPoker.Dequeue());
                }
            }
            for (int c = 0; c < _common.Count; c++)
            {
                ALLPoker.Enqueue(_common[c]);
            }
            LeftCard = new Queue<int>(ALLPoker.Reverse());
            if (ALLPoker.Count != mNumALLPoker - _NumPerUser * userCount)
            {
                TraceLogEx.Error(" 20120824154501tex   分牌都分错了");
            }
            if (LeftCard.Count < 5)
            {
                TraceLogEx.Error(" 20120824154501tex   分牌都分错了 公牌不够5张了");
            }
            return retDic;
        }
        /// <summary>
        /// 大同花
        /// </summary>
        /// <param name="LeftCard"></param>
        /// <param name="userCount"></param>
        /// <returns></returns>
        public List<List<int>> DistributeBigFiveFlush(List<int> _common, List<int> Lpoker, int vs1, int vs2, int userCount)
        {
            List<List<int>> retDic = new List<List<int>>();
            for (int j = 1; j <= userCount; j++)
            {
                retDic.Add(new List<int>());
            }
            int _color = ToolsEx.GetRandomSys(1, 5);
            List<int> _soure = new List<int>();
            _soure.AddRange(GetSameCardList(_color));
            int Color = _soure[0] - (_soure[0] % 100);
            int cardValue = ToolsEx.GetRandomSys(11, 15);
            retDic[vs1].Add(Color + cardValue);
            for (int i = cardValue; i < 15; i++)
            {
                _soure.Remove(Color + i);
            }
            retDic[vs1].Add(_soure[ToolsEx.GetRandomSys(0, _soure.Count)]);
            _soure.Remove(retDic[vs1][1]);
            Lpoker.Remove(retDic[vs1][0]);
            Lpoker.Remove(retDic[vs1][1]);

            for (int i = 0; i < 3; i++)
            {
                int p = _soure[ToolsEx.GetRandomSys(0, _soure.Count)];
                _common.Add(p);
                _soure.Remove(p);
                Lpoker.Remove(p);
            }
            for (int i = 0; i < 2; i++)
            {
                int p = _soure[ToolsEx.GetRandomSys(0, _soure.Count)];
                retDic[vs2].Add(p);
                _soure.Remove(p);
                Lpoker.Remove(p);
            }
            return retDic;
        }
        /// <summary>
        /// 三条或两对
        /// </summary>
        /// <param name="LeftCard"></param>
        /// <param name="userCount"></param>
        /// <returns></returns>
        public List<List<int>> DistributeThreeOrTwo(List<int> _common, List<int> Lpoker, int vs1, int vs2, int userCount)
        {
            List<List<int>> retDic = new List<List<int>>();
            for (int j = 1; j <= userCount; j++)
            {
                retDic.Add(new List<int>());
            }
            bool bThree = ToolsEx.GetRandomSys(0, 2) == 0 ? true : false;
            List<int> _soure = new List<int>();
            int iValue = ToolsEx.GetRandomSys(2, 15);
            _soure.AddRange(arrSpade);
            _soure.AddRange(arrHeart);
            _soure.AddRange(arrClub);
            _soure.AddRange(arrDiamond);
            List<int> tmpCardData = new List<int>();
            if (bThree)
            {
                int _color = ToolsEx.GetRandomSys(1, 5);
                for (int i = _color; i < 3+ _color; i++)
                {
                    int tmpCardValue = (i%4+1) * 100 + iValue;
                    tmpCardData.Add(tmpCardValue);
                    _soure.Remove(tmpCardValue);
                    Lpoker.Remove(tmpCardValue);
                }
                _soure.Remove(((_color+3)%4+1) *100 + iValue);
                retDic[vs1].Add(tmpCardData[0]);
                retDic[vs1].Add(tmpCardData[1]);
                _common.Add(tmpCardData[2]);
                int iTmpValue = 0;
                while (true)
                {
                    _color = ToolsEx.GetRandomSys(1, 5);
                    iValue = ToolsEx.GetRandomSys(2, 15);
                    if (iValue == (tmpCardData[0] % 100) || iValue == iTmpValue) continue;
                    iTmpValue = iValue;
                    int tmpCardValue = _color * 100 + iValue;
                    _common.Add(tmpCardValue);
                    _soure.Remove(tmpCardValue);
                    Lpoker.Remove(tmpCardValue);
                    if (_common.Count >= 3) break;
                }

            }
            else
            {
                int _color = ToolsEx.GetRandomSys(1, 5);
                for (int i = _color; i < 2 + _color; i++)
                {
                    int tmpCardValue = (i % 4 + 1) * 100 + iValue;
                    retDic[vs1].Add(tmpCardValue);
                    _soure.Remove(tmpCardValue);
                    Lpoker.Remove(tmpCardValue);
                }
                _soure.Remove(((_color + 2) % 4 + 1) * 100 + iValue);
                _soure.Remove(((_color + 3) % 4 + 1) * 100 + iValue);

                while (true)
                {
                    iValue = ToolsEx.GetRandomSys(2, 15);
                    if (iValue == (retDic[vs1][0] % 100)) continue;

                    _color = ToolsEx.GetRandomSys(1, 5);
                    for (int i = _color; i < 2 + _color; i++)
                    {
                        int tmpCardValue = (i % 4 + 1) * 100 + iValue;
                        _common.Add(tmpCardValue);
                        _soure.Remove(tmpCardValue);
                        Lpoker.Remove(tmpCardValue);
                    }
                    _soure.Remove(((_color + 2) % 4 + 1) * 100 + iValue);
                    _soure.Remove(((_color + 3) % 4 + 1) * 100 + iValue);
                    break;
                }
                while (true)
                {
                    _color = ToolsEx.GetRandomSys(1, 5);
                    iValue = ToolsEx.GetRandomSys(2, 15);
                    if (iValue == (retDic[vs1][0] % 100) || iValue == (_common[0] % 100)) continue;
                    int tmpCardValue = _color * 100 + iValue;
                    _common.Add(tmpCardValue);
                    _soure.Remove(tmpCardValue);
                    Lpoker.Remove(tmpCardValue);
                    if (_common.Count >= 3) break;
                }
            }


            List<int> tmpValues = GetPokerCardValue(_common, _soure, (TexasPokerType)(ToolsEx.GetRandomSys(2, 5)));
            while (tmpValues.Count <= 0)
            {
                tmpValues = GetPokerCardValue(_common, _soure, (TexasPokerType)(ToolsEx.GetRandomSys(2, 7)));
            }
            foreach (var v in tmpValues)
            {
                if (_soure.Contains(v)) _soure.Remove(v);
                Lpoker.Remove(v);
            }
            for (int i = 3; i < _common.Count; i++)
            {
                if (_soure.Contains(_common[i])) _soure.Remove(_common[i]);
                if (Lpoker.Contains(_common[i])) Lpoker.Remove(_common[i]);
            }
            if (tmpValues.Count < 2)
            {
                int tmpValue = Lpoker[ToolsEx.GetRandomSys(0, _soure.Count)];
                tmpValues.Add(tmpValue);
                Lpoker.Remove(tmpValue);
            }
            retDic[vs2].AddRange(tmpValues);
            return retDic;
        }
        /// <summary>
        /// 小同花或顺子
        /// </summary>
        /// <param name="LeftCard"></param>
        /// <param name="userCount"></param>
        /// <returns></returns>
        public List<List<int>> DistributeSmallFiveFlush(List<int> _common, List<int> Lpoker, int vs1, int vs2, int userCount)
        {
            List<List<int>> retDic = new List<List<int>>();
            for (int j = 1; j <= userCount; j++)
            {
                retDic.Add(new List<int>());
            }
            bool bShunZi = ToolsEx.GetRandomSys(0, 2) == 0 ? true:false;
            List<int> _soure = new List<int>();
            List<int> _tmpSoure = new List<int>();
            if (bShunZi)
            {
                int iValue = ToolsEx.GetRandomSys(6, 15);
                _soure.AddRange(arrSpade);
                _soure.AddRange(arrHeart);
                _soure.AddRange(arrClub);
                _soure.AddRange(arrDiamond);
                List<int> tmpCardData = new List<int>();
                for(int i = iValue; i > iValue - 5; i--)
                {
                    int _color = ToolsEx.GetRandomSys(1, 5);
                    int tmpCardValue = _color * 100 + i;
                    tmpCardData.Add(tmpCardValue);
                    _soure.Remove(tmpCardValue);
                    Lpoker.Remove(tmpCardValue);
                }
                retDic[vs1].Add(tmpCardData[0]);
                tmpCardData.RemoveAt(0);
                int iIndex = ToolsEx.GetRandomSys(0, tmpCardData.Count);
                retDic[vs1].Add(tmpCardData[iIndex]);
                tmpCardData.RemoveAt(iIndex);
                _common.AddRange(tmpCardData);
            }
            else
            {
                int _color = ToolsEx.GetRandomSys(1, 5);
                for (int i = 1; i < 5; i++)
                {
                    if (i == _color)
                    {
                        _soure.AddRange(GetSameCardList(i));
                    }
                    else
                    {
                        _tmpSoure.AddRange(GetSameCardList(i));
                    }
                }
                int Color = _soure[0] - (_soure[0] % 100);
                int cardValue = ToolsEx.GetRandomSys(7, 11);
                retDic[vs1].Add(Color + cardValue);
                for (int i = cardValue; i < 15; i++)
                {
                    _soure.Remove(Color + i);
                }
                retDic[vs1].Add(_soure[ToolsEx.GetRandomSys(0, _soure.Count)]);
                _soure.Remove(retDic[vs1][1]);
                Lpoker.Remove(retDic[vs1][0]);
                Lpoker.Remove(retDic[vs1][1]);
                for (int i = 0; i < 3; i++)
                {
                    int p = _soure[ToolsEx.GetRandomSys(0, _soure.Count)];
                    _common.Add(p);
                    _soure.Remove(p);
                    Lpoker.Remove(p);
                }
                _soure.AddRange(_tmpSoure);
            }


            List<int> tmpValues = GetPokerCardValue(_common, _soure, (TexasPokerType)(ToolsEx.GetRandomSys(5, 7)));
            while (tmpValues.Count <= 0)
            {
                tmpValues = GetPokerCardValue(_common, _soure, (TexasPokerType)(ToolsEx.GetRandomSys(2, 7)));
            }
            foreach(var v in tmpValues)
            {
                if(_soure.Contains(v)) _soure.Remove(v);
                Lpoker.Remove(v);
            }
            for(int i = 3; i < _common.Count; i++)
            {
                if (_soure.Contains(_common[i])) _soure.Remove(_common[i]);
                if (Lpoker.Contains(_common[i])) Lpoker.Remove(_common[i]);
            }
            if(tmpValues.Count < 2)
            {
                int tmpValue = Lpoker[ToolsEx.GetRandomSys(0, _soure.Count)];
                tmpValues.Add(tmpValue);
                Lpoker.Remove(tmpValue);
            }
            retDic[vs2].AddRange(tmpValues);
            return retDic;
        }

        /// <summary>
        /// 葫芦冤家
        /// </summary>
        /// <param name="LeftCard"></param>
        /// <param name="userCount"></param>
        /// <returns></returns>
        public List<List<int>> DistributeThreeTwo(List<int> _common, List<int> Lpoker, int vs1, int vs2, int userCount)
        {
            List<List<int>> retDic = new List<List<int>>();
            for (int j = 1; j <= userCount; j++)
            {
                retDic.Add(new List<int>());
            }
            List<int> _soure = new List<int>();
            _soure.AddRange(arrSpade);
            _soure.AddRange(arrHeart);
            _soure.AddRange(arrClub);
            _soure.AddRange(arrDiamond);

            int cardValue = ToolsEx.GetRandomSys(6, 15);
            List<int> tmpBuffCards = _soure.FindAll(s => (s % 100) == cardValue);
            for (int i = cardValue; i < 15; i++)
            {
                _soure.Remove(100 + i);
                _soure.Remove(200 + i);
                _soure.Remove(300 + i);
                _soure.Remove(400 + i);
            }
            foreach(var v in tmpBuffCards)
            {
                Lpoker.Remove(v);
                if (retDic[vs1].Count<2)
                {
                    retDic[vs1].Add(v);
                }
                else
                {
                    _common.Add(v);
                    break;
                }
            }
            int doubleCardValue = _soure[ToolsEx.GetRandomSys(0, _soure.Count)];
            _common.Add(doubleCardValue);
            Lpoker.Remove(doubleCardValue);
            _soure.Remove(doubleCardValue);

            int doubleCardValue1 = _soure.Find(s=>(s%100)==(doubleCardValue%100));
            _common.Add(doubleCardValue1);
            Lpoker.Remove(doubleCardValue1);
            _soure.Remove(doubleCardValue1);



            List<int> tmpValues = GetPokerCardValue(_common, _soure, (TexasPokerType)(ToolsEx.GetRandomSys(6, 8)));
            while (tmpValues.Count <= 0)
            {
                tmpValues = GetPokerCardValue(_common, _soure, (TexasPokerType)(ToolsEx.GetRandomSys(2, 7)));
            }
            foreach (var v in tmpValues)
            {
                if (_soure.Contains(v)) _soure.Remove(v);
                Lpoker.Remove(v);
            }
            for (int i = 3; i < _common.Count; i++)
            {
                if (_soure.Contains(_common[i])) _soure.Remove(_common[i]);
                if (Lpoker.Contains(_common[i])) Lpoker.Remove(_common[i]);
            }
            if (tmpValues.Count < 2)
            {
                int tmpValue = Lpoker[ToolsEx.GetRandomSys(0, _soure.Count)];
                tmpValues.Add(tmpValue);
                Lpoker.Remove(tmpValue);
            }
            retDic[vs2].AddRange(tmpValues);
            return retDic;
        }

        /// <summary>
        /// 四条冤家
        /// </summary>
        /// <param name="LeftCard"></param>
        /// <param name="userCount"></param>
        /// <returns></returns>
        public List<List<int>> DistributeBombCard(List<int> _common, List<int> Lpoker, int vs1, int vs2, int userCount)
        {
            List<List<int>> retDic = new List<List<int>>();
            for (int j = 1; j <= userCount; j++)
            {
                retDic.Add(new List<int>());
            }
            List<int> _soure = new List<int>();
            _soure.AddRange(arrSpade);
            _soure.AddRange(arrHeart);
            _soure.AddRange(arrClub);
            _soure.AddRange(arrDiamond);

            int cardValue = ToolsEx.GetRandomSys(6, 15);
            List<int> tmpBuffCards = _soure.FindAll(s => (s % 100) == cardValue);
            for (int i = cardValue; i < 15; i++)
            {
                _soure.Remove(100 + i);
                _soure.Remove(200 + i);
                _soure.Remove(300 + i);
                _soure.Remove(400 + i);
            }
            foreach (var v in tmpBuffCards)
            {
                Lpoker.Remove(v);
                if (retDic[vs1].Count < 2)
                {
                    retDic[vs1].Add(v);
                }
                else
                {
                    _common.Add(v);
                }
            }
            int doubleCardValue = _soure[ToolsEx.GetRandomSys(0, _soure.Count)];
            _common.Add(doubleCardValue);
            Lpoker.Remove(doubleCardValue);
            _soure.Remove(doubleCardValue);

            List<int> tmpValues = GetPokerCardValue(_common, _soure, (TexasPokerType)(ToolsEx.GetRandomSys(6, 8)));
            while (tmpValues.Count <= 0)
            {
                tmpValues = GetPokerCardValue(_common, _soure, (TexasPokerType)(ToolsEx.GetRandomSys(2, 7)));
            }
            foreach (var v in tmpValues)
            {
                if (_soure.Contains(v)) _soure.Remove(v);
                Lpoker.Remove(v);
            }
            for (int i = 3; i < _common.Count; i++)
            {
                if (_soure.Contains(_common[i])) _soure.Remove(_common[i]);
                if (Lpoker.Contains(_common[i])) Lpoker.Remove(_common[i]);
            }
            if (tmpValues.Count < 2)
            {
                int tmpValue = Lpoker[ToolsEx.GetRandomSys(0, _soure.Count)];
                tmpValues.Add(tmpValue);
                Lpoker.Remove(tmpValue);
            }
            retDic[vs2].AddRange(tmpValues);
            return retDic;
        }

        /// <summary>
        /// 同花顺冤家
        /// </summary>
        /// <param name="LeftCard"></param>
        /// <param name="userCount"></param>
        /// <returns></returns>
        public List<List<int>> DistributeSameShunCard(List<int> _common, List<int> Lpoker, int vs1, int vs2, int userCount)
        {
            List<List<int>> retDic = new List<List<int>>();
            for (int j = 1; j <= userCount; j++)
            {
                retDic.Add(new List<int>());
            }
            List<int> _soure = new List<int>();
            List<int> _TmpSoure = new List<int>();
            int _color = ToolsEx.GetRandomSys(1, 5);
            for(int i = 1; i < 5; i++)
            {
                if (i == _color)
                {
                    _soure.AddRange(GetSameCardList(i));
                }
                else
                {
                    _TmpSoure.AddRange(GetSameCardList(i));
                }
            }
            int cardValue = ToolsEx.GetRandomSys(6, 15);
            List<int> tmpSameShunCard = new List<int>();
            int SameCardValue = _color * 100+cardValue;
            for (int i = 0; i < 5; i++)
            {
                int TmpSameCardValue = SameCardValue - i;
                _soure.Remove(TmpSameCardValue);
                Lpoker.Remove(TmpSameCardValue);
                tmpSameShunCard.Add(TmpSameCardValue);
            }
            tmpSameShunCard.RemoveAt(0);
            retDic[vs1].Add(SameCardValue);
            retDic[vs1].Add(tmpSameShunCard[ToolsEx.GetRandomSys(0,tmpSameShunCard.Count)]);
            tmpSameShunCard.Remove(retDic[vs1][1]);
            _common.AddRange(tmpSameShunCard);

            _soure.AddRange(_TmpSoure);

            List<int> tmpValues = GetPokerCardValue(_common, _soure, (TexasPokerType)(ToolsEx.GetRandomSys(7, 9)));
            while (tmpValues.Count <= 0)
            {
                tmpValues = GetPokerCardValue(_common, _soure, (TexasPokerType)(ToolsEx.GetRandomSys(5, 9)));
            }
            foreach (var v in tmpValues)
            {
                if (_soure.Contains(v)) _soure.Remove(v);
                Lpoker.Remove(v);
            }
            for (int i = 3; i < _common.Count; i++)
            {
                if (_soure.Contains(_common[i])) _soure.Remove(_common[i]);
                if (Lpoker.Contains(_common[i])) Lpoker.Remove(_common[i]);
            }
            if (tmpValues.Count < 2)
            {
                int tmpValue = Lpoker[ToolsEx.GetRandomSys(0, _soure.Count)];
                tmpValues.Add(tmpValue);
                Lpoker.Remove(tmpValue);
            }
            retDic[vs2].AddRange(tmpValues);
            return retDic;
        }


        /// <summary>
        /// 获得冤家牌第二冤家牌型
        /// </summary>
        /// <param name="_common"></param>
        /// <param name="leftCards"></param>
        /// <param name="pokerType"></param>
        /// <returns></returns>
        public List<int> GetPokerCardValue(List<int> _common,List<int> leftCards,TexasPokerType pokerType)
        {
            List<int> retValues = new List<int>();
            List<int> tmpCardValues = new List<int>();
            List<int> tmpLeftCardValue = new List<int>();
            foreach (var v in leftCards)
            {
                tmpLeftCardValue.Add(v % 100);
            }
            tmpLeftCardValue.Sort();
            foreach (var v in _common)
            {
                tmpCardValues.Add(v % 100);
            }
            tmpCardValues.Sort();

            if (pokerType == TexasPokerType.Five_Flush_LoyalStraight)//皇家同花顺牌型
            {

            }else if(pokerType == TexasPokerType.Five_Flush_Straight)//同花顺牌型 
            {
                _common.Sort();
                for (int n = 0; n < 3; n++)
                {
                    int tmpValue = _common.Find(c => (c % 100) == tmpCardValues[n]);
                    int colorValue = tmpValue - (tmpValue % 100);
                    int commonColorCount = _common.FindAll(c => (c - c % 100) == colorValue).Count;
                    List<int> tmpSameColorCards = leftCards.FindAll(l => (l - l % 100) == colorValue);
                    tmpSameColorCards.Sort();
                    int UpOrDownValue = 0;
                    for(int i = 0; i < 5; i++)//递减
                    {
                        int iTmpValue = tmpValue - i;
                        if(_common.Contains(iTmpValue) || tmpSameColorCards.Contains(iTmpValue))
                        {
                            UpOrDownValue = -1;
                            continue;
                        }
                        UpOrDownValue = 0;
                        break;
                    }
                    if (UpOrDownValue == 0)
                    {
                        for (int i = 0; i < 5; i++)//递减
                        {
                            int iTmpValue = tmpValue + i;
                            if (_common.Contains(iTmpValue) || tmpSameColorCards.Contains(iTmpValue))
                            {
                                UpOrDownValue = 1;
                                continue;
                            }
                            UpOrDownValue = 0;
                            break;
                        }
                    }
                    if (UpOrDownValue != 0)
                    {
                        for (int i = 0; i < 5; i++)
                        {
                            int iTmpValue = tmpValue + i* UpOrDownValue;
                            if (tmpSameColorCards.Contains(iTmpValue) && !tmpCardValues.Contains(iTmpValue))
                            {
                                if (retValues.Count < 2)
                                {
                                    retValues.Add(iTmpValue);
                                }
                                else
                                {
                                    _common.Add(iTmpValue);
                                }
                            }
                        }
                        break;
                    }
                }
            }
            else if (pokerType == TexasPokerType.Five_Bomb) //四条牌型
            {
                List<int> tmpBomBValue = tmpLeftCardValue.GroupBy(x => x).Where(x => x.Count() > 3).Select(x => x.Key).ToList();
                int iLen = tmpCardValues.Count;
                for(int i = 0; i < iLen; i++)
                {
                    int commonCount = tmpLeftCardValue.FindAll(t => t == tmpCardValues[i]).Count;
                    if (commonCount + tmpCardValues.FindAll(t => t == tmpCardValues[i]).Count == 4)
                    {
                        foreach (var v in leftCards)
                        {
                            if (v % 100 == tmpCardValues[i])
                            {
                                if (retValues.Count > 1)
                                {
                                    _common.Add(v);
                                }
                                else
                                {
                                    retValues.Add(v);
                                }
                            }
                        }
                        break;
                    }
                }
                if (retValues.Count <=0)
                {
                    int bombValue = tmpBomBValue[ToolsEx.GetRandomSys(0, tmpBomBValue.Count)];
                    foreach (var v in leftCards)
                    {
                        if (v % 100 == bombValue)
                        {
                            if (retValues.Count > 1)
                            {
                                _common.Add(v);
                            }
                            else
                            {
                                retValues.Add(v);
                            }
                        }
                    }
                }
            }
            else if (pokerType == TexasPokerType.Five_THREE_TWO)//葫芦牌型
            {
                List<int> tmpThreeValue = tmpLeftCardValue.GroupBy(x => x).Where(x => x.Count() >= 3).Select(x => x.Key).ToList();
                int iLen = tmpCardValues.Count;
                for (int i = iLen-1; i >=0; i--)
                {
                    int commonCount = tmpCardValues.FindAll(t => t == tmpCardValues[i]).Count; 
                    int leftCount = tmpLeftCardValue.FindAll(t => t == tmpCardValues[i]).Count;
                    if (commonCount + leftCount >= 3&&leftCount>1&& commonCount==1)
                    {
                        foreach (var v in leftCards)
                        {
                            if (v % 100 == tmpCardValues[i])
                            {
                                if (retValues.Count > 1)
                                {
                                    break;
                                }
                                else
                                {
                                    tmpLeftCardValue.Remove(tmpCardValues[i]);
                                    retValues.Add(v);
                                }
                            }
                        }

                    }
                }
                if (retValues.Count <= 0&& tmpCardValues.GroupBy(x => x).Where(x => x.Count() >= 3).Select(x => x.Key).ToList().Count>0)
                {
                    int bombValue = tmpThreeValue[ToolsEx.GetRandomSys(0, tmpThreeValue.Count)];
                    foreach (var v in leftCards)
                    {
                        if (v % 100 == bombValue)
                        {
                            tmpLeftCardValue.Remove(bombValue);
                            if (retValues.Count > 1)
                            {
                                _common.Add(v);
                                break;
                            }
                            else
                            {
                                retValues.Add(v);
                            }
                        }
                    }
                }
                if(tmpCardValues.GroupBy(x => x).Where(x => x.Count() >1).Select(x => x.Key).ToList().Count == 0)
                {
                    List<int> tmpTwoValue = tmpLeftCardValue.GroupBy(x => x).Where(x => x.Count() >= 2).Select(x => x.Key).ToList();
                    int bombValue = tmpTwoValue[ToolsEx.GetRandomSys(0, tmpTwoValue.Count)];
                    foreach (var v in leftCards)
                    {
                        if (v % 100 == bombValue)
                        {
                            if (_common.Count <5)
                            {
                                _common.Add(v);
                            }
                        }
                    }
                }
            }
            else if(pokerType== TexasPokerType.Five_Flush)//同花牌型
            {
                _common.Sort();
                for(int n = 0; n < 3; n++)
                {
                    int tmpValue = _common.Find(c => (c % 100) == tmpCardValues[n]);
                    int colorValue = tmpValue - (tmpValue % 100);
                    int commonColorCount = _common.FindAll(c => (c - c % 100) == colorValue).Count;
                    List<int> tmpSameColorCards = leftCards.FindAll(l => (l - l % 100) == colorValue);
                    if (tmpSameColorCards.Count < 5 - commonColorCount) continue;
                    for (int i = 0; i < 5 - commonColorCount; i++)
                    {
                        int tmpColorCardData = tmpSameColorCards[ToolsEx.GetRandomSys(0, tmpSameColorCards.Count)];
                        if (retValues.Count < 2)
                        {
                            retValues.Add(tmpColorCardData);
                        }
                        else
                        {
                            _common.Add(tmpColorCardData);
                        }
                        tmpSameColorCards.Remove(tmpColorCardData);
                    }
                    break;
                }
                
            }
            else if (pokerType == TexasPokerType.Five_Straight)//顺子牌型
            {
                for (int n = 0; n < 3; n++)
                {
                    int tmpValue = tmpCardValues[n];
                    int UpOrDownValue = 0;
                    for (int i = 0; i < 5; i++)//递减
                    {
                        int iTmpValue = tmpValue - i;
                        if (tmpCardValues.Contains(iTmpValue) || tmpLeftCardValue.Contains(iTmpValue))
                        {
                            UpOrDownValue = -1;
                            continue;
                        }
                        UpOrDownValue = 0;
                        break;
                    }
                    if (UpOrDownValue == 0)
                    {
                        for (int i = 0; i < 5; i++)//递减
                        {
                            int iTmpValue = tmpValue + i;
                            if (tmpCardValues.Contains(iTmpValue) || tmpLeftCardValue.Contains(iTmpValue))
                            {
                                UpOrDownValue = 1;
                                continue;
                            }
                            UpOrDownValue = 0;
                            break;
                        }
                    }
                    if (UpOrDownValue != 0)
                    {
                        for (int i = 0; i < 5; i++)
                        {
                            int iTmpValue = tmpValue + i * UpOrDownValue;
                            if (tmpLeftCardValue.Contains(iTmpValue)&& !tmpCardValues.Contains(iTmpValue))
                            {
                                List<int> tmpValues = leftCards.FindAll(l => (l % 100) == iTmpValue);
                                if (retValues.Count < 2)
                                {
                                    retValues.Add(tmpValues[ToolsEx.GetRandomSys(0, tmpValues.Count)]);
                                }
                                else
                                {
                                    _common.Add(tmpValues[ToolsEx.GetRandomSys(0, tmpValues.Count)]);
                                }
                            }
                        }
                        break;
                    }

                }
            }
            else if (pokerType == TexasPokerType.Five_THREE)//三条牌型
            {
                List<int> tmpThreeValue = tmpLeftCardValue.GroupBy(x => x).Where(x => x.Count() >= 3).Select(x => x.Key).ToList();
                int iLen = tmpCardValues.Count;
                for (int i = iLen - 1; i >= 0; i--)
                {
                    int commonCount = tmpCardValues.FindAll(t => t == tmpCardValues[i]).Count;
                    int leftCount = tmpLeftCardValue.FindAll(t => t == tmpCardValues[i]).Count;
                    if (commonCount + leftCount >= 3 && leftCount > 1)
                    {
                        foreach (var v in leftCards)
                        {
                            if (v % 100 == tmpCardValues[i])
                            {
                                if (retValues.Count > 1)
                                {
                                    break;
                                }
                                else
                                {
                                    retValues.Add(v);
                                }
                            }
                        }
                        break;
                    }
                }
                if (retValues.Count <= 0 && tmpCardValues.GroupBy(x => x).Where(x => x.Count() >= 3).Select(x => x.Key).ToList().Count > 0)
                {
                    int bombValue = tmpThreeValue[ToolsEx.GetRandomSys(0, tmpThreeValue.Count)];
                    foreach (var v in leftCards)
                    {
                        if (v % 100 == bombValue)
                        {
                            if (retValues.Count > 1)
                            {
                                _common.Add(v);
                                break;
                            }
                            else
                            {
                                retValues.Add(v);
                            }
                        }
                    }
                }
            }
            else if (pokerType == TexasPokerType.Five_TWO_PAIR)//两对牌型
            {
                List<int> tmpFourValue = tmpLeftCardValue.GroupBy(x => x).Where(x => x.Count() >= 4).Select(x => x.Key).ToList();
                int bombValue = tmpFourValue[ToolsEx.GetRandomSys(0, tmpFourValue.Count)];
                foreach (var v in leftCards)
                {
                    if (v % 100 == bombValue)
                    {
                        if (retValues.Count < 2)
                        {
                            retValues.Add(v);
                        }
                        else break;
                    }
                }
                if(tmpCardValues.GroupBy(x => x).Where(x => x.Count() >= 2).Select(x => x.Key).ToList().Count == 0)
                {
                    foreach(var v in tmpCardValues)
                    {
                        foreach (var l in leftCards)
                        {
                            if (l % 100 == v)
                            {
                                _common.Add(l);
                                break;
                            }
                        }
                        if (_common.Count >= 4) break;
                    }
                }

            }
            else if (pokerType == TexasPokerType.Five_ONE_PAIR)//一对牌型
            {
                List<int> tmpThreeValue = tmpLeftCardValue.GroupBy(x => x).Where(x => x.Count() > 2).Select(x => x.Key).ToList();
                int bombValue = tmpThreeValue[ToolsEx.GetRandomSys(0, tmpThreeValue.Count)];
                foreach (var v in leftCards)
                {
                    if (v % 100 == bombValue)
                    {
                        if (retValues.Count < 2)
                        {
                            retValues.Add(v);
                        }
                        else break;
                    }
                }
            }            
            return retValues;
        }

        public int[] GetSameCardList(int iColor)
        {
            if (iColor == 1)
            {
                return arrSpade;
            }
            else if (iColor == 2)
            {
                return arrHeart;
            }
            else if (iColor == 3)
            {
                return arrClub;
            }
            else
            {
                return arrDiamond;
            }
        }

        #region   排序 

        /// <summary>
        /// 去掉花色 从大到小排序 
        /// </summary>
        /// <param name="paiarr"></param>
        /// <returns></returns>
        public static List<int> OrderPaiNoColor(List<int> paiarr)
        {
            List<int> _tempList = new List<int>(paiarr);
            for (int i = 0; i < _tempList.Count; i++)
            {
                if (_tempList[i] > 100) _tempList[i] %= 100;
            }
            int[] temparr = _tempList.ToArray<int>();
            Array.Sort<int>(temparr);
            List<int> _ASCList = temparr.ToList<int>();
            _ASCList.Reverse();//默认是升序反转一下就降序了
            return _ASCList;
        }
        /// <summary>
        ///  从大到小排序      保留花色
        /// </summary>
        /// <param name="paiarr"></param>
        /// <returns></returns>
        public static List<int> OrderPaiWithColor(List<int> paiarr)
        {
            List<int> _tempList = new List<int>(paiarr);
            for (int i = 0; i < _tempList.Count; i++)
            {
                if (_tempList[i] > 100) _tempList[i] %= 100;
            }
            int[] temparr = _tempList.ToArray<int>();
            Array.Sort<int>(temparr);
            List<int> _ASCList = temparr.ToList<int>();
            _ASCList.Reverse();//默认是升序反转一下就降序了

            //带上花色，有点小复杂 
            Dictionary<int, int> _dicPoker2Count = GetPoker_Count(_ASCList);
            Dictionary<int, int> _dicPoker2CountUsed = new Dictionary<int, int>();
            for (int j = 0; j < _ASCList.Count; j++)
            {
                if (!_dicPoker2CountUsed.ContainsKey(_ASCList[j])) _dicPoker2CountUsed.Add(_ASCList[j], 1);

                for (int c = _dicPoker2CountUsed[_ASCList[j]]; c <= 4; c++)
                {
                    _dicPoker2CountUsed[_ASCList[j]]++;
                    if (paiarr.Contains(_ASCList[j] + 100 * c))
                    {
                        _ASCList[j] = _ASCList[j] + 100 * c;
                        break;
                    }
                }
            }
            return _ASCList;
        }

        /// <summary>
        ///    带上花色，从手牌中查找       传入的参数都是排序过的
        /// </summary>
        /// <param name="_shoupai"></param>
        /// <param name="pokervalue"></param>
        /// <returns></returns>
        public static List<int> GetPaiColor(List<int> _shoupai, List<int> pokervalue)
        {
            List<int> _ASCList = new List<int>(pokervalue);
            //带上花色，有点小复杂 
            Dictionary<int, int> _dicPoker2Count = GetPoker_Count(_ASCList);
            Dictionary<int, int> _dicPoker2CountUsed = new Dictionary<int, int>();
            for (int j = 0; j < _ASCList.Count; j++)
            {
                if (!_dicPoker2CountUsed.ContainsKey(_ASCList[j])) _dicPoker2CountUsed.Add(_ASCList[j], 1);

                for (int c = _dicPoker2CountUsed[_ASCList[j]]; c <= 4; c++)
                {
                    _dicPoker2CountUsed[_ASCList[j]]++;
                    if (_shoupai.Contains(_ASCList[j] + 100 * c))
                    {
                        _ASCList[j] = _ASCList[j] + 100 * c;
                        break;
                    }
                }
            }
            return _ASCList;
        }

        public static int GetPaiNoColor(int poker)
        {
            int _ret = poker;
            if (poker > 100)
            {
                _ret = poker % 100;
            }
            return _ret;
        }
        //获取花色
        public static int GetCardColor(int cbCardData)
        {
            return cbCardData / 100;
        }
        #endregion
        public static Dictionary<int, int> GetPoker_Count(List<int> paiList)
        {
            Dictionary<int, int> _dicPoker2Count = new Dictionary<int, int>();
            foreach (int poke in paiList)
            {
                if (_dicPoker2Count.ContainsKey(poke)) _dicPoker2Count[poke]++;
                else _dicPoker2Count.Add(poke, 1);
            }
            return _dicPoker2Count;
        }

        /// <summary>
        /// 返回刻子的值
        /// </summary>
        /// <param name="cardlist"></param>
        /// <returns></returns>
        private static int GetThreeTypeValue(List<int> cardlist)
        {
            if (cardlist[0] == cardlist[1] && cardlist[0] == cardlist[2])
            {
                return cardlist[0];
            }
            return 0;
        }

        /// <summary>
        ///  是否同花 
        /// </summary>
        /// <param name="cardlist">===***需要带花色的牌***===</param>
        /// <returns></returns>
        public static bool IsFlush(List<int> cardlist)
        {
            bool _isflush = true;
            int flush0 = cardlist[0] / 100;
            for (int i = 1; i < cardlist.Count; i++)
            {
                if (flush0 != cardlist[i] / 100)
                {
                    _isflush = false;
                    break;
                }
            }

            return _isflush;
        }

        /// <summary> 
        /// 判断牌组是否为顺子  支持3个以前的顺子判断
        /// </summary> 
        /// <param name="PG">牌组 需要去色与从大到小排序</param> 
        /// <returns>是否为顺子</returns> 
        public static bool IsStraight(List<int> PG)
        {
            bool _IsStraight = false;
            for (int i = 0; i < PG.Count - 1; i++)
            {
                if (PG[i] - 1 == PG[i + 1]) _IsStraight = true;
                else
                {
                    _IsStraight = false;
                    break;
                }
            }
            if (!_IsStraight)
            {//14 转 1 针对特殊顺子处理
                List<int> _tempArr = new List<int>(PG);
                for (int i = 0; i < _tempArr.Count; i++)
                {
                    if (_tempArr[i] == 14) _tempArr[i] = 1;
                }
                _tempArr = OrderPaiNoColor(_tempArr);//需要从大到小排序一下
                for (int i = 0; i < _tempArr.Count - 1; i++)
                {
                    if (_tempArr[i] - 1 == _tempArr[i + 1]) _IsStraight = true;
                    else
                    {
                        _IsStraight = false;
                        break;
                    }
                }
            }
            return _IsStraight;
        }
        /// <summary> 
        /// 判断牌组是否为顺子  123   14,3,2
        /// </summary> 
        /// <param name="PG">牌组</param> 
        /// <returns>是否为顺子</returns> 
        private static bool IsSunZhi123(List<int> cardlist)
        {
            if (cardlist[0] == 14 && cardlist[1] == 3 && cardlist[2] == 2) return true;
            return false;
        }
        /// <summary>
        /// 是否差一个成同花
        /// </summary>
        /// <param name="_shoupai"></param>
        /// <returns></returns>
        public static bool IsSameColoronly4(List<int> _shoupai)
        {
            if (_shoupai.Count != 5) return false;
            bool cbSameColor = IsFlush(_shoupai);

            if (cbSameColor) return true;
            List<int> clist = new List<int>();
            for (int i = 1; i < _shoupai.Count; i++)
            {
                int _tempc = _shoupai[i] / 100;
                if (!clist.Contains(_tempc)) clist.Add(_tempc);
            }
            if (clist.Count == 2) return true;//2,3 情况也计算了
            return false;
        }

        public static int IsSameValue(List<int> cardlist)
        {
            if (cardlist.Count < 2) return 0;
            int sameval = cardlist[0] % 100;
            for (int i = 1; i < cardlist.Count; i++)
            {
                if (cardlist[i] % 100 == sameval) continue;
                else return 0;
            }
            return sameval;
        }

        //获取类型
        public static TexasPokerType GetTexasType(List<int> _shoupai)
        {
            if (_shoupai == null || _shoupai.Count != 5) return TexasPokerType.Error;
            bool cbSameColor = IsFlush(_shoupai);
            List<int> _tempNoColor = OrderPaiNoColor(_shoupai);
            bool cbLineCard = IsStraight(_tempNoColor);

            if (cbSameColor && cbLineCard)
            {
                if (_tempNoColor.Max().Equals(14) && _tempNoColor.Min().Equals(10))
                {
                    return TexasPokerType.Five_Flush_LoyalStraight;
                }
                else return TexasPokerType.Five_Flush_Straight;
            }

            if ((cbSameColor == false) && (cbLineCard == true)) return TexasPokerType.Five_Straight;
            if ((cbSameColor == true) && (cbLineCard == false)) return TexasPokerType.Five_Flush;

            //扑克分析
            TexasSplitHelper _splitHelper = new TexasSplitHelper();
            _splitHelper.Split(_shoupai);
            //类型判断
            if (_splitHelper._four.Count == 1) return TexasPokerType.Five_Bomb;
            if ((_splitHelper._three.Count == 1) && (_splitHelper._two.Count == 2)) return TexasPokerType.Five_THREE_TWO;
            if ((_splitHelper._three.Count == 1) && (_splitHelper._two.Count == 1)) return TexasPokerType.Five_THREE;
            if (_splitHelper._two.Count == 2) return TexasPokerType.Five_TWO_PAIR;
            if ((_splitHelper._two.Count == 1) && (_splitHelper._one.Count == 4)) return TexasPokerType.Five_ONE_PAIR;
            return TexasPokerType.Five_Single;
        } 
             
        //最大牌型
        public static List<int> GetFiveFromSeven(List<int> cbHandCardData, List<int> cbCenterCardData, int allCount = 7)
        {
            List<int> cbTempCardData = new List<int>();//临时变量
            cbTempCardData.AddRange(cbHandCardData);
            cbTempCardData.AddRange(cbCenterCardData);
            if (cbTempCardData.Count != allCount || cbTempCardData.Count < 5) return new List<int>();

            List<int> _tempCardCompare = OrderPaiWithColor(cbTempCardData);
            List<int> cbLastCardData = new List<int>() { _tempCardCompare[0], _tempCardCompare[1], _tempCardCompare[2], _tempCardCompare[3], _tempCardCompare[4] };
            TexasPokerType cbCardKind = GetTexasType(cbLastCardData);
            TexasPokerType cbTempCardKind = 0;

            List<int> cbTempLastCardData = new List<int>() { 0, 0, 0, 0, 0 };//只做初始暂位用

            //组合算法
            for (int i = 0; i < allCount - 4; i++)
            {
                for (int j = i + 1; j < allCount - 3; j++)
                {
                    for (int k = j + 1; k < allCount - 2; k++)
                    {
                        for (int l = k + 1; l < allCount - 1; l++)
                        {
                            for (int m = l + 1; m < allCount; m++)
                            {   //获取数据
                                cbTempLastCardData[0] = _tempCardCompare[i];
                                cbTempLastCardData[1] = _tempCardCompare[j];
                                cbTempLastCardData[2] = _tempCardCompare[k];
                                cbTempLastCardData[3] = _tempCardCompare[l];
                                cbTempLastCardData[4] = _tempCardCompare[m];

                                cbTempCardKind = GetTexasType(cbTempLastCardData);//获取牌型

                                //牌型大小
                                if (ComparePoker(cbTempLastCardData, cbLastCardData) == TexasEnmuResult.Win)
                                {
                                    cbCardKind = cbTempCardKind;
                                    cbLastCardData = new List<int>(cbTempLastCardData);
                                }
                            }
                        }
                    }
                }
            }

            return cbLastCardData;
        }

        /// <summary>
        ///  
        /// </summary>
        /// <param name="applycard"></param>
        /// <param name="cardlist"></param>
        /// <returns></returns>
        public static TexasEnmuResult ComparePoker(List<int> applycard, List<int> cardlist)
        {
            TexasPokerType _applytype = GetTexasType(applycard);
            TexasPokerType _type = GetTexasType(cardlist);
            return ComparePoker(applycard, _applytype, cardlist, _type);
        }

        /// <summary>
        /// applycard 表示申请比牌的人
        /// </summary>
        /// <param name="applycard"></param>
        /// <param name="_applytype"></param>
        /// <param name="cardlist"></param>
        /// <param name="_type"></param>
        /// <returns></returns>
        private static TexasEnmuResult ComparePoker(List<int> applycard, TexasPokerType _applytype, List<int> cardlist, TexasPokerType _type)
        {
            if (_applytype > _type) return TexasEnmuResult.Win;
            else if (_applytype < _type) return TexasEnmuResult.Lost;
            else
            {   //相同类型 需要根据规则再处理一次，  
                List<int> _tapplyList = OrderPaiNoColor(applycard);
                List<int> _targetCardList = OrderPaiNoColor(cardlist);
                switch (_applytype)
                {
                    case TexasPokerType.Five_Single:
                    case TexasPokerType.Five_Flush:
                        return CompareListOneByOne(_tapplyList, _targetCardList);
                    case TexasPokerType.Five_Straight:
                    case TexasPokerType.Five_Flush_Straight:
                        _tapplyList = DealA2345(_tapplyList);
                        _targetCardList = DealA2345(_targetCardList);
                        return CompareListOneByOne(_tapplyList, _targetCardList);
                    case TexasPokerType.Five_ONE_PAIR:
                        List<int> _applyMoreOne_P1 = GetMoreOneList(_tapplyList);
                        List<int> _targetMoreOne_P1 = GetMoreOneList(_targetCardList);
                        TexasEnmuResult _tempPair1 = CompareListOneByOne(_applyMoreOne_P1, _targetMoreOne_P1, 1);
                        if (_tempPair1 == TexasEnmuResult.Draw)
                        {
                            List<int> _applyOnlyOne = GetOnlyOneList(_tapplyList);
                            List<int> _targetOnlyOne = GetOnlyOneList(_targetCardList);
                            return CompareListOneByOne(_applyOnlyOne, _targetOnlyOne, 3);
                        }
                        else
                            return _tempPair1;
                    case TexasPokerType.Five_TWO_PAIR:
                        List<int> _applyMoreOne_P2 = GetMoreOneList(_tapplyList);
                        List<int> _targetMoreOne_P2 = GetMoreOneList(_targetCardList);
                        TexasEnmuResult _tempPair2 = CompareListOneByOne(_applyMoreOne_P2, _targetMoreOne_P2, 2);
                        if (_tempPair2 == TexasEnmuResult.Draw)
                        {
                            List<int> _applyOnlyOne = GetOnlyOneList(_tapplyList);
                            List<int> _targetOnlyOne = GetOnlyOneList(_targetCardList);
                            return CompareListOneByOne(_applyOnlyOne, _targetOnlyOne, 1);
                        }
                        else
                            return _tempPair2;
                    case TexasPokerType.Five_THREE:
                        List<int> _applyMoreOne_31 = GetMoreOneList(_tapplyList, 3);
                        List<int> _targetMoreOne_31 = GetMoreOneList(_targetCardList, 3);
                        TexasEnmuResult _tempPair31 = CompareListOneByOne(_applyMoreOne_31, _targetMoreOne_31, 1);
                        if (_tempPair31 == TexasEnmuResult.Draw)
                        {
                            List<int> _applyOnlyone_31 = GetOnlyOneList(_tapplyList);
                            List<int> _targetOnlyone_31 = GetOnlyOneList(_targetCardList);
                            return CompareListOneByOne(_applyOnlyone_31, _targetOnlyone_31, 2);//需要修改为2级
                        }
                        else
                            return _tempPair31;
                    case TexasPokerType.Five_THREE_TWO://Texas因为有公牌 可能一样的牌，需要进行对子比较
                        List<int> _applyMoreOne_3 = GetMoreOneList(_tapplyList, 3);
                        List<int> _targetMoreOne_3 = GetMoreOneList(_targetCardList, 3);
                        TexasEnmuResult _tempPair3 = CompareListOneByOne(_applyMoreOne_3, _targetMoreOne_3, 1);
                        if (_tempPair3 == TexasEnmuResult.Draw)
                        {
                            List<int> _applyMoreOne_2 = GetOnlyNumList(_tapplyList, 2);
                            List<int> _targetMoreOne_2 = GetOnlyNumList(_targetCardList, 2);
                            return CompareListOneByOne(_applyMoreOne_2, _targetMoreOne_2, 1);
                        }
                        else
                            return _tempPair3;
                    case TexasPokerType.Five_Bomb://Texas因为有公牌 需要再次比较
                        List<int> _applyMoreOne_4 = GetMoreOneList(_tapplyList, 4);
                        List<int> _targetMoreOne_4 = GetMoreOneList(_targetCardList, 4);
                        TexasEnmuResult _tempPair4 = CompareListOneByOne(_applyMoreOne_4, _targetMoreOne_4, 1);
                        if (_tempPair4 == TexasEnmuResult.Draw)
                        {
                            List<int> _applyOnlyOne = GetOnlyOneList(_tapplyList);
                            List<int> _targetOnlyOne = GetOnlyOneList(_targetCardList);
                            return CompareListOneByOne(_applyOnlyOne, _targetOnlyOne, 1);
                        }
                        else
                            return _tempPair4;
                    default:
                        return TexasEnmuResult.Draw;
                }
            }
        }

        /// <summary>
        /// 一样大 平局不需要比花色
        /// </summary>
        /// <param name="applycard">从大到小排序 没有花色</param>
        /// <param name="cardlist">从大到小排序 没有花色</param>
        /// <returns></returns>
        private static TexasEnmuResult CompareListOneByOne(List<int> applylist, List<int> cardlist, int CompareLen = 5)
        {
            if (applylist[0] > cardlist[0]) return TexasEnmuResult.Win;
            else if (applylist[0] < cardlist[0]) return TexasEnmuResult.Lost;
            else
            {
                if (CompareLen == 1)
                {
                    return TexasEnmuResult.Draw;
                }
                else
                {
                    if (applylist[1] > cardlist[1]) return TexasEnmuResult.Win;
                    else if (applylist[1] < cardlist[1]) return TexasEnmuResult.Lost;
                    else
                    {
                        if (CompareLen == 2)
                        {
                            return TexasEnmuResult.Draw;
                        }
                        else
                        {
                            if (applylist[2] > cardlist[2]) return TexasEnmuResult.Win;
                            else if (applylist[2] < cardlist[2]) return TexasEnmuResult.Lost;
                            else
                            {
                                if (CompareLen == 3)
                                {
                                    return TexasEnmuResult.Draw;
                                }
                                else
                                {
                                    if (applylist[3] > cardlist[3]) return TexasEnmuResult.Win;
                                    else if (applylist[3] < cardlist[3]) return TexasEnmuResult.Lost;
                                    else
                                    {
                                        if (applylist[4] > cardlist[4]) return TexasEnmuResult.Win;
                                        else if (applylist[4] < cardlist[4]) return TexasEnmuResult.Lost;
                                        else
                                        {
                                            return TexasEnmuResult.Draw;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        /// <summary>
        /// A2345转成12345
        /// </summary>
        /// <param name="applycard">需要去色，排序，从大到小，</param> 
        /// <returns></returns>
        private static List<int> DealA2345(List<int> shouPai)
        {
            if (shouPai[0] == 14 && shouPai[1] == 5 && shouPai[2] == 4 && shouPai[3] == 3 && shouPai[4] == 2)
            {
                List<int> s12345 = new List<int>(shouPai);
                s12345[0] = 1;//需要比较成最小的
                s12345 = OrderPaiNoColor(s12345);
                return s12345;
            }
            return shouPai;
        }


        /// <summary>
        ///     
        /// </summary>
        /// <param name="_shouPai">需要去色，排序，从大到小，</param>
        /// <param name="_num"></param>
        /// <returns></returns>
        private static List<int> GetMoreOneList(List<int> _shouPai, int _num = 2)
        {
            TexasSplitHelper _splitHelper = new TexasSplitHelper();
            _splitHelper.Split(_shouPai);
            List<int> _retList = new List<int>();
            switch (_num)
            {
                case 2:
                    _retList = new List<int>(_splitHelper._two);
                    break;
                case 3:
                    _retList = new List<int>(_splitHelper._three);
                    break;
                case 4:
                    _retList = new List<int>(_splitHelper._four);
                    break;
                default: break;
            }
            return _retList;
        }
        /// <summary>
        ///     
        /// </summary>
        /// <param name="_shouPai">需要去色，排序，从大到小，</param>
        /// <param name="_num"></param>
        /// <returns></returns>
        private static List<int> GetOnlyNumList(List<int> _shouPai, int _num)
        {
            TexasSplitHelper _splitHelper = new TexasSplitHelper();
            _splitHelper.Split(_shouPai);
            List<int> _retList = new List<int>();
            switch (_num)
            {
                case 2:
                    _retList = new List<int>(_splitHelper._twoOnly);
                    break;
                case 3:
                    _retList = new List<int>(_splitHelper._threeOnly);
                    break; 
                default: break;
            }
            return _retList;
        }
        /// <summary>
        ///     
        /// </summary>
        /// <param name="_shouPai">需要去色，排序，从大到小，</param>
        /// <param name="_num"></param>
        /// <returns></returns>
        private static List<int> GetOnlyOneList(List<int> _shouPai)
        {
            TexasSplitHelper _splitHelper = new TexasSplitHelper();
            _splitHelper.Split(_shouPai);
            List<int> _retList = new List<int>(_splitHelper._oneOnly);
            return _retList;
        }

        /// <summary>
        ///  同花顺〉四条〉三条+一对〉同花〉顺〉三条〉两条〉一对〉大无赖
        /// </summary>
        public enum TexasPokerType
        {
            //扑克类型
            Error = 0,
            Five_Single = 1,// 单张 专业也叫高牌牌型
            Five_ONE_PAIR = 2,    //一对牌型
            Five_TWO_PAIR = 3,    //两对牌型
            Five_THREE = 4,       //三条牌型
            Five_Straight = 5,    //顺子牌型
            Five_Flush = 6,       //同花牌型
            Five_THREE_TWO = 7,   //葫芦牌型
            Five_Bomb = 8,        //四条牌型
            Five_Flush_Straight = 9,     //同花顺牌型 
            Five_Flush_LoyalStraight = 10,  //皇家同花顺牌型
        }
        public enum TexasEnmuResult
        {
            Draw = 0,
            Lost = 1,
            Win = 2
        }

        #region insurance
        public static Dictionary<int, double> _dicInsRate = new Dictionary<int, double>();
        public static void InitRate()
        {
            if (_dicInsRate.Count >= 20) return;
            _dicInsRate.Add(1, 31);
            _dicInsRate.Add(2, 16);
            _dicInsRate.Add(3, 10);
            _dicInsRate.Add(4, 8);
            _dicInsRate.Add(5, 6);
            _dicInsRate.Add(6, 5);
            _dicInsRate.Add(7, 4);
            _dicInsRate.Add(8, 3.5);
            _dicInsRate.Add(9, 3);
            _dicInsRate.Add(10, 2.5);
            _dicInsRate.Add(11, 2.3);
            _dicInsRate.Add(12, 2);
            _dicInsRate.Add(13, 1.8);
            _dicInsRate.Add(14, 1.6);//后面的为背保险赔率
            _dicInsRate.Add(15, 1.4);
            _dicInsRate.Add(16, 1.3);
            _dicInsRate.Add(17, 1.2);
            _dicInsRate.Add(18, 1.1);
            _dicInsRate.Add(19, 1.0);
            _dicInsRate.Add(20, 0.8);//20+统一用这个
        }
        public static double GetRatebyCount(int c)
        {
            if (c < 1)
            {
                TraceLogEx.Error(" fetal error outs.count is 0 card: c:"+c);
                return 0.5;
            }
            if (c > 20)
            {
                c = 20;
            }
            if (_dicInsRate.ContainsKey(c)) return _dicInsRate[c];
            return 0;
        }
         
        /// <summary>
        /// 计算补牌数量 Expected value count
        /// </summary>
        /// <returns></returns>
        public static List<int> GetOutsList(List<int> mycards, List<int> tcards, List<int> commoncards, int _texasTurn, List<int> delcard, out List<int> drawcard)
        {
            List<int> _outs = new List<int>();
            drawcard = new List<int>();
            if (mycards == null || mycards.Count != 2) return _outs;
            if (tcards == null || tcards.Count != 2) return _outs;
            List<int> tcommoncard = new List<int>();
            for (int i = 0; i < commoncards.Count; i++)
            {
                if (i == 3 && _texasTurn == 2) break;//还没有发第5张公牌的时候
                if (i == 4 && _texasTurn == 3) break;//TexasTurnEnum.Turn3_4
                tcommoncard.Add(commoncards[i]);
            }
            List<int> LeftCard = new List<int>();
            LeftCard.AddRange(arrClub.ToList());
            LeftCard.AddRange(arrDiamond.ToList());
            LeftCard.AddRange(arrHeart.ToList());
            LeftCard.AddRange(arrSpade.ToList());
            if (delcard == null)
            {
                delcard = new List<int>();
                delcard.AddRange(tcommoncard);
                delcard.AddRange(mycards);
                delcard.AddRange(tcards);
            }

            foreach (var c in delcard)
            {
                if (LeftCard.Contains(c)) LeftCard.Remove(c);
            }

            List<int> _tempcommon = new List<int>();
            foreach (var c in LeftCard)
            {
                _tempcommon.Add(c);
                _tempcommon.AddRange(tcommoncard);
                var max_mycardarr = GetFiveFromSeven(mycards, _tempcommon, _tempcommon.Count + 2);//未分配的牌组合最大牌
                var max_tcardarr = GetFiveFromSeven(tcards, _tempcommon, _tempcommon.Count + 2);//其他用户最大牌

                var _res = ComparePoker(max_mycardarr, max_tcardarr);
                if (_res == TexasEnmuResult.Lost)
                {
                    _outs.Add(c);
                }
                else if (_res == TexasEnmuResult.Draw)
                {
                    drawcard.Add(c);
                }
                _tempcommon.Clear();
            }
            if (_outs.Count > 14)
            {
                ////TraceLogEx.Log(string.Format("_outs > 14 mycards:{0}, tcards:{1}, commoncards:{2}, delcard:{3}",
                ////    JsonUtilityEx.ListIntToString(mycards),
                ////    JsonUtilityEx.ListIntToString(tcards),
                ////    JsonUtilityEx.ListIntToString(commoncards),
                ////    JsonUtilityEx.ListIntToString(delcard)));
            }
            if (_outs.Count == 0)
            {
                ////TraceLogEx.Error(string.Format("mycards:{0}, tcards:{1}, commoncards:{2}, delcard:{3}",
                ////JsonUtilityEx.ListIntToString(mycards),
                ////JsonUtilityEx.ListIntToString(tcards),
                ////JsonUtilityEx.ListIntToString(commoncards),
                ////JsonUtilityEx.ListIntToString(delcard)));
            }
            return _outs;
        }
        #endregion

        #region tax config
        private static List<taxconfig_tex> taxconfig = null ;
        public static List<taxconfig_tex> initializTax()
        {
            if (taxconfig != null) return taxconfig;
            taxconfig = new List<taxconfig_tex>()
            {
              new taxconfig_tex(){Gamle=2,pnum=0,scale=0.04,upperLi=15 },
              new taxconfig_tex(){Gamle=10,pnum=0,scale=0.04,upperLi=60 },
              new taxconfig_tex(){Gamle=20,pnum=0,scale=0.04,upperLi=150 },
              new taxconfig_tex(){Gamle=50,pnum=0,scale=0.04,upperLi=300 },
              new taxconfig_tex(){Gamle=100,pnum=0,scale=0.03,upperLi=600 },
              new taxconfig_tex(){Gamle=200,pnum=0,scale=0.03,upperLi=1200 },


              new taxconfig_tex(){Gamle=500,pnum=1,scale=0.01,upperLi=1500 },
              new taxconfig_tex(){Gamle=500,pnum=2,scale=0.02,upperLi=3000 },

              new taxconfig_tex(){Gamle=1000,pnum=1,scale=0.03,upperLi=3000 },
              new taxconfig_tex(){Gamle=1000,pnum=2,scale=0.03,upperLi=6000 },

              new taxconfig_tex(){Gamle=2500,pnum=1,scale=0.03,upperLi=7500 },
              new taxconfig_tex(){Gamle=2500,pnum=2,scale=0.03,upperLi=15000 },

              new taxconfig_tex(){Gamle=5000,pnum=1,scale=0.03,upperLi=10000 },
              new taxconfig_tex(){Gamle=5000,pnum=2,scale=0.03,upperLi=20000 },

              new taxconfig_tex(){Gamle=10000,pnum=1,scale=0.03,upperLi=20000 },
              new taxconfig_tex(){Gamle=10000,pnum=2,scale=0.03,upperLi=20000 },
            };
            return taxconfig;
        }
        #endregion
    }

    public class TexasSplitHelper
    {
        /// <summary>
        /// 没有颜色的
        /// </summary>
        public List<int> _shouPai;
        public List<int> _shouPaiColor;

        public List<int> _oneOnly = new List<int>();
        public List<int> _twoOnly = new List<int>(); 
        public List<int> _threeOnly = new List<int>();
        /// <summary>
        /// 散牌，A，2，3，4，5 不算散牌了  个数为1且不在连子中。
        /// </summary>
        public List<int> _uron5One = new List<int>();
        public List<int> _uron5OneColor = new List<int>();
        //基础结构 
        public List<int> _one = new List<int>();
        public List<int> _two = new List<int>();
        public List<int> _three = new List<int>();
        public List<int> _four = new List<int>();
         

        public List<List<int>> _straight = new List<List<int>>();  //连子 从3~A的最长单连   可能是两个连子

        public Dictionary<int, List<int>> _dicColor2List = new Dictionary<int, List<int>>();
        public void Split(List<int> shoupai)
        {
            _shouPaiColor = new List<int>(shoupai);
            SearchColor();
            _shouPai = new List<int>(shoupai);
            _shouPai = Texas.OrderPaiNoColor(_shouPai);
            SearchBase();

            _straight = new List<List<int>>();
            SearchStraight();
            SearchStraightA();

            _uron5One = new List<int>();
            SearchUnron();
        }

        public void SearchColor()
        {
            foreach (int pai in _shouPaiColor)
            {
                int _color = Texas.GetCardColor(pai);
                if (!_dicColor2List.ContainsKey(_color)) _dicColor2List.Add(_color, new List<int>());
                _dicColor2List[_color].Add(pai);
            }
        }
        //分成四个数组
        public void SearchBase()
        {
            Dictionary<int, int> _dicPoker2Count = Texas.GetPoker_Count(_shouPai);
            List<int> _temp = new List<int>();
            foreach (int key in _dicPoker2Count.Keys)
            {
                if (_dicPoker2Count[key] == 4)
                {
                    _one.Add(key);
                    _two.Add(key);
                    _three.Add(key);
                    _four.Add(key);
                }
                else if (_dicPoker2Count[key] == 3)
                {
                    _one.Add(key);
                    _two.Add(key);
                    _three.Add(key); 
                    _threeOnly.Add(key);
                }
                else if (_dicPoker2Count[key] == 2)
                {
                    _one.Add(key);
                    _two.Add(key);
                    _twoOnly.Add(key);
                }
                else if (_dicPoker2Count[key] == 1)
                {
                    _one.Add(key);
                    _oneOnly.Add(key);
                }
            }
            _one = Texas.OrderPaiNoColor(_one);
            _two = Texas.OrderPaiNoColor(_two);
            _three = Texas.OrderPaiNoColor(_three);
            _four = Texas.OrderPaiNoColor(_four);
        }

        /// <summary>
        /// 
        /// </summary>
        private void SearchStraight()
        {
            if (_shouPai.Count < 5) return;//不足5个牌就不处理的    
            List<int> _tempone = new List<int>(_one);
            List<int> _minStraight = new List<int>();
            for (int i = 0; i < _tempone.Count - 1; i++)
            {
                if (_tempone[i] - 1 == _tempone[i + 1])
                {
                    _minStraight.Add(_tempone[i]);
                    if (i + 1 == _tempone.Count - 1) _minStraight.Add(_tempone[i + 1]);//最后一个要加上
                }
                else
                {//可能会出现刚才好5个，而后还有牌，搜索不到
                    _minStraight.Add(_tempone[i]);
                    if (_minStraight.Count >= 5) _straight.Add(_minStraight);
                    _minStraight = new List<int>();
                }
            }
            if (_minStraight.Count >= 5) _straight.Add(_minStraight);//最后一组必须加进去 不然一个长连子没搜索到
        }
        /// <summary>
        /// 只处理A2345   
        /// </summary>
        private void SearchStraightA()
        {
            if (_shouPai.Count < 5) return;//不足5个牌就不处理的  
            if (!_shouPai.Contains(14)) return;//没有A就不处理了
            List<int> _tempShouPai = new List<int>(_shouPai);
            for (int i = 0; i < _tempShouPai.Count - 1; i++)
            {
                if (_tempShouPai[i] == 14) _tempShouPai[i] = 1;
            }

            List<int> _minStraight = new List<int>();
            for (int i = 0; i < _tempShouPai.Count - 1; i++)
            {
                if (_tempShouPai[i] - 1 == _tempShouPai[i + 1])
                {
                    _minStraight.Add(_tempShouPai[i]);
                    if (i + 1 == _tempShouPai.Count - 1) _minStraight.Add(_tempShouPai[i + 1]);//最后一个要加上
                }
                else
                {//可能会出现刚才好5个，而后还有牌，搜索不到
                    _minStraight.Add(_tempShouPai[i]);
                    if (_minStraight.Count >= 5) _straight.Add(_minStraight);
                    _minStraight = new List<int>();
                }
            }
            if (_minStraight.Count >= 5 && _minStraight.Contains(1))
            {
                for (int i = 0; i < _tempShouPai.Count - 1; i++)
                {
                    if (_tempShouPai[i] == 1) _tempShouPai[i] = 14;
                }
                _straight.Add(_minStraight);//最后一组必须加进去 不然一个长连子没搜索到
            }
        }
        /// <summary>
        /// 搜索散牌 个数不能大于1，不在连子中。
        /// </summary>
        private void SearchUnron()
        {
            List<int> _tempUnron = new List<int>(_oneOnly);
            foreach (var _tempStraight in _straight)
            {
                foreach (var _cardVal in _tempStraight)
                {
                    if (_tempUnron.Contains(_cardVal)) _tempUnron.Remove(_cardVal);
                }
            }
            _uron5One = new List<int>(_tempUnron);
            _uron5OneColor = new List<int>(_uron5One);
            for (int i = 0; i < _uron5OneColor.Count; i++)
            {
                foreach (var _cl in _shouPaiColor)
                {
                    if (_cl % 100 == _uron5OneColor[i])
                    {
                        _uron5OneColor[i] = _cl;
                        break;
                    }
                }
            }
        } 
    }

    /// <summary>
    /// 抽水结构配置
    /// </summary>
    public class taxconfig_tex
    {
        /// <summary>
        /// 12级   2-4人   4人以上
        /// </summary>
        public int pnum;
        /// <summary>
        /// 盲注级别
        /// </summary>
        public int Gamle;

        /// <summary>
        /// 比例
        /// </summary>
        public double scale;

        /// <summary>
        /// 上限
        /// </summary>
        public double upperLi; 
    }
}

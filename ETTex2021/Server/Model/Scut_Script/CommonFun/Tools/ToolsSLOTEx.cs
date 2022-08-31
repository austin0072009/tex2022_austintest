namespace ETModel.Script.CsScript.Action
{
    public class ToolsSLOTEx
    { 
        public ToolsSLOTEx()
        {
           
        }

        /// <summary>
        /// 根据权重获得随下标
        /// </summary>
        /// <param name="iTotalValue"></param>
        /// <param name="iLen"></param>
        /// <param name="iProValues"></param>
        /// <returns></returns>
        public static int GetRandItem(int iTotalValue, int iLen, int[] iProValues)
        {
            int iReValue = 1;
            int iTmpProValue = ToolsEx.GetRandomSys(0, iTotalValue);
            //int MinSum = 0;
            int MaxSum = 0;
            for (int k = 0; k < iLen; k++)
            {
                //MinSum += k == 0 ? 0 : iProValues[k - 1];
                MaxSum += iProValues[k];
                if (iProValues[k] != 0 && iTmpProValue < MaxSum)
                {
                    iReValue = (k + 1);
                    break;
                }
            }
            return iReValue;
        }
    }
    public class ThreadEx
    {

        public static async ETTask Sleep(int ms)
        { 
            await Game.Scene.GetComponent<TimerComponent>().WaitAsync(ms);
        }
        public static async ETTask DelayCall(int ms, System.Action _action)
        {  
            await Game.Scene.GetComponent<TimerComponent>().WaitAsync(ms);
            _action();
        }

    }
    public class GameSessionEx
    {
        public static int Count
        {
            get { return ToolsEx.GetRandomSys(1, 15); }
        }
    }
}

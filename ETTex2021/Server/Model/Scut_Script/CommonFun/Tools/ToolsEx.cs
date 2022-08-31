using ETModel.Framework.Common.Configuration;
using ETModel.Framework.Game.Contract;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class ToolsEx
    {
        private static char[] Codes;
        private static int codesLen = 0;
        private static string _tempId = "";
        /// <summary>
        /// 金币砖石锁
        /// </summary>
        public static object rechargelock = new object();


        public ToolsEx()
        {
            Codes = "0123456789".ToArray();
            codesLen = Codes.Length;
        }
        public static Queue<int> DisrupteList(List<int> _list)
        {
            Queue<int> _tempQue = new Queue<int>();
            Array array = Array.CreateInstance(typeof(int), _list.Count);
            for (int i = 0; i < _list.Count; i++)
            {
                array.SetValue(_list[i], i);
            }
            array = MixArray(array);
            for (int i = 0; i < _list.Count; i++)
            {
                _tempQue.Enqueue((int)array.GetValue(i));
            }
            return _tempQue;
        }

        public static List<int> DisrupteListToList(List<int> _list)
        {
            List<int> _tempQue = new List<int>();
            Array array = Array.CreateInstance(typeof(int), _list.Count);
            for (int i = 0; i < _list.Count; i++)
            {
                array.SetValue(_list[i], i);
            }
            array = MixArray(array);
            for (int i = 0; i < _list.Count; i++)
            {
                _tempQue.Add((int)array.GetValue(i));
            }
            return _tempQue;
        }
        public static List<int> ListDisrupte(List<int> _list)
        {
            List<int> _tempQue = new List<int>(_list);
            Random rnd = new Random();//实例化一个伪随机数生成器
            int _temp = 0;
            for (int i = 0; i < _tempQue.Count; i++)
            { //循环要处理的数组
                //随机生成一个数组索引号，注意每循环一次，将范围缩小一个
                int pos = rnd.Next(0, _tempQue.Count - i - 1);
                //将随机的索引号pos所在的值 赋给输出数组中的当前循环索引（i）
                _temp = _tempQue[i];
                _tempQue[i] = _tempQue[pos];
                _tempQue[pos] = _temp;
            }
            return _tempQue;
        }
        /// <summary>
        /// 随机打乱数组中数据顺序
        /// </summary>
        /// <param name="arr">要处理的数组</param>
        /// <param name="type">要处理的数组值类型</param>
        /// <returns></returns>
        public static Array MixArray(Array arr)
        {
            Array goal = Array.CreateInstance(typeof(int), arr.Length);
            Random rnd = new Random();//实例化一个伪随机数生成器
            for (int i = 0; i < arr.Length; i++)
            { //循环要处理的数组
                //随机生成一个数组索引号，注意每循环一次，将范围缩小一个
                int pos = rnd.Next(0, arr.Length - i - 1);
                //将随机的索引号pos所在的值 赋给输出数组中的当前循环索引（i）
                goal.SetValue(arr.GetValue(pos), i);
                //由于每次循环，范围都缩小了一个，而在该范围外的一个值，可能会丢掉了。
                //所以要将原数组pos位置的值更改为该范围外的那个值，当前位置的值已传给输出数组了
                arr.SetValue(arr.GetValue(arr.Length - 1 - i), pos);
            }
            return goal;
        }

        /// <summary>
        /// 全局种子 用静态的才能有用
        /// </summary>
        private static int Seeds = 0;

        /// <summary>
        /// 返回一个指定范围内的随机数。
        /// </summary>
        /// <param name="min">（随机数可取该下界值）</param>
        /// <param name="max">（随机数不能取该上界值），maxValue 必须大于等于 minValue。</param>
        /// <returns></returns>
        public static int GetRandomSys(int min, int max)
        {
            if (max < min)
            {
                return min;
            }
            try
            {
                checked
                {
                    Seeds += Convert.ToInt32(DateTime.Now.Ticks & 0xffff);//可能会 算术运算导致溢出 OverflowException
                }
            }
            catch (Exception ex)
            {
                Seeds = 0;
            }
            return new Random(Seeds).Next(min, max);
        }


        /// <summary>
        /// 快捷判断是否在百分比范围内
        /// </summary>
        /// <param name="rate">1~100</param>
        /// <returns></returns>
        public static bool CheckPercent(int rate,int max=100)
        {
            int _rate = GetRandomSys(1, max+1);
            if (_rate <= rate) return true;
            else return false;
        }
        #region 6位编号功能

        private static ConcurrentDictionary<int, bool> _SixRoomID = new ConcurrentDictionary<int, bool>();

        /// <summary>
        /// 获取进入房间的6位ID, 缺陷比较多，每周维护重启一次应该没什么问题
        /// </summary>
        /// <returns></returns>
        public static async Task<int> GetRoomEnterSixID()
        {
            if (_SixRoomID.Count > 200)
            {
                TraceLogEx.Error("房间号列表中有200桌房间了...注意性能!_SixRoomID.Count：" + _SixRoomID.Count);
            }
            return await GetIDloop();
        }
        private static async Task<int> GetIDloop()
        {
            int num = GetRandomSys(100000, 999999);
            var table = await ttablelistEx.GetTableByNumber(0, num, true);//库里不存在
            if (table == null || table.tableid != num)
            {
                if (!_SixRoomID.TryAdd(num, true)) await GetIDloop();//内存字典里不存在
                return num;
            }
            else
                return await GetIDloop();
        }

        public static void ReleaseNum(int num)
        {
            bool _t;
            if (_SixRoomID.ContainsKey(num)) _SixRoomID.TryRemove(num, out _t);
        }
        #endregion
        #region 8位编号功能

        private static ConcurrentDictionary<int, bool> _EightClubID = new ConcurrentDictionary<int, bool>();

        /// <summary>
        /// 生成时，获取8位ID 
        /// </summary>
        /// <returns></returns>
        public static async Task<int> GetClubEightID()
        {
            if (_EightClubID.Count > 1000)
            {
                TraceLogEx.Error("有表中有1000...注意性能!_EightClubID.Count：" + _EightClubID.Count);
            }
            return await GetEightIDloop();
        }
        private static async Task<int> GetEightIDloop()
        {
            int num = GetRandomSys(10000000, 99999999);
            var table = await ttablelistEx.GetTableByNumber(0, num, true);//库里不存在//===========================错误 处理club的重复ID
            if (table == null || table.tableid != num)
            {
                if (!_EightClubID.TryAdd(num, true)) GetEightIDloop();//内存字典里不存在
                return num;
            }
            else
                return await GetEightIDloop();
        }

        public static void ReleaseClubEight(int num)
        {
            bool _t;
            if (_EightClubID.ContainsKey(num)) _EightClubID.TryRemove(num, out _t);
        }
        #endregion
        /// <summary>
        /// 获取本地IP地址
        /// </summary>
        /// <returns></returns>
        public static string GetIpAddress()
        {
            //获取本地的IP地址
            string AddressIP = ConfigUtils.GetSetting("ServerIp") + "/";
            return AddressIP;
        }
        /// <summary>
        /// 获取系统站点url
        /// </summary>
        /// <returns></returns>
        public static string GetSysAddress()
        {
            //获取本地的IP地址
            string surl = ConfigUtils.GetSetting("RegDomain");
            return surl;
        }

        /// <summary>
        /// 机器人使用随机的头像，不是数据库中配置的值 不带serverIP
        /// </summary>
        /// <param name="_isRobot"></param>
        /// <param name="wechatHeadIcon"></param>
        /// <returns></returns>
        public static string IsHandlePhoto(int _isRobot, string wechatHeadIcon)
        {
            wechatHeadIcon = wechatHeadIcon == null ? "" : wechatHeadIcon;

            if(wechatHeadIcon.Contains("fordlc/wechat")) return wechatHeadIcon;
            //if (wechatHeadIcon.Contains(".png") || wechatHeadIcon.Contains(".jpg")) return ConfigUtils.GetSetting("ApiDomain", "localhost") + "/fordlc/wechat/" + wechatHeadIcon;
            if (wechatHeadIcon.Contains(".png") || wechatHeadIcon.Contains(".jpg")) return  "/fordlc/wechat/" + wechatHeadIcon;
            else return wechatHeadIcon;
        }
       
        public static WechatInfoSD GetWechatStruct(string name, string url, int isrohot = 1)
        {
            WechatInfoSD wechatinfoSd = new WechatInfoSD();
            wechatinfoSd.wName = name;
            wechatinfoSd.wicon = ToolsEx.IsHandlePhoto(isrohot, url);
            return wechatinfoSd;
        }


        /// <summary>
        /// 生成订单编号
        /// </summary>
        public static string GenerateId()
        {
            var orderId = DateTime.Now.ToString("yyyyMMddHHmmssfff") + GetRandomSys(1000, 9999);
            if (string.Equals(_tempId, orderId))
            {
                orderId = DateTime.Now.ToString("yyyyMMddHHmmssfff") + GetRandomSys(1000, 9999);
            }

            _tempId = orderId;
            return orderId;
        }

        public static string GetActiveCode()
        {
            Random ran = new Random();
            return ran.Next(1000, 9999).ToString();
            //Codes = "0123456789".ToArray();
            //codesLen = Codes.Length;
            //string code = string.Empty;
            //for (int i = 0; i < 4; i++)
            //{
            //    code += Codes[codesLen.Next()];
            //}
            //return code;
        }
        /// <summary>
        /// 深拷贝，会生成一个新的引用 
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="obj"></param>
        /// <returns></returns>
        public static T DeepCopy<T>(T obj)
        {
            //如果是字符串或值类型则直接返回
            if (obj is string || obj.GetType().IsValueType) return obj;

            object retval = Activator.CreateInstance(obj.GetType());
            FieldInfo[] fields = obj.GetType().GetFields(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Static);
            foreach (FieldInfo field in fields)
            {
                object objValue = field.GetValue(obj);
                if (objValue == null) continue;
                try { field.SetValue(retval, DeepCopy(field.GetValue(obj))); }
                catch { }
            }
            return (T)retval;
        }

        /// <summary>
        /// 时间分量转换成实际的秒数
        /// </summary>
        /// <param name="dateTime"></param>
        /// <returns></returns>
        public static ulong GetLongTime(DateTime dateTime)
        {
            ulong dateVal = 0;
            try
            {
                DateTime dt = dateTime;
                DateTime dt0 = new DateTime(1970, 1, 1);
                TimeSpan ts = new TimeSpan(dt.Ticks - dt0.Ticks);
                dateVal = (ulong)ts.TotalSeconds;
            }
            catch (Exception e)
            {
            }
            return dateVal;
        }
        /// <summary>  
        /// 将c# DateTime时间格式转换为Unix时间戳格式  
        /// </summary>  
        /// <param name="time">时间</param>  
        /// <returns>long</returns>  
        public static long ConvertDateTimeToInt(System.DateTime time)
        {
            System.DateTime startTime = TimeZone.CurrentTimeZone.ToLocalTime(new System.DateTime(1970, 1, 1, 0, 0, 0, 0));
            long t = (time.Ticks - startTime.Ticks) / 10000;   //除10000调整为13位      
            return t;
        }
        /// <summary>
        /// 时间戳转为C#格式时间10位
        /// </summary>
        /// <param name="timeStamp">Unix时间戳格式</param>
        /// <returns>C#格式时间</returns>
        public static DateTime GetDateTimeFrom1970Ticks(long curSeconds)
        {
            DateTime dtStart = TimeZone.CurrentTimeZone.ToLocalTime(new DateTime(1970, 1, 1));
            return dtStart.AddSeconds(curSeconds);
        }

        /// <summary>
        /// 修改队列 非线程安全，仅初始时调用 
        /// </summary>
        /// <param name="_que"></param>
        /// <param name="target"></param>
        /// <returns></returns>
        public static ConcurrentQueue<int> DeleteQueue(ConcurrentQueue<int> _que, int target)
        {
            List<int> _list = new List<int>(_que.ToArray());
            if (_list.Contains(target)) _list.Remove(target);
            ConcurrentQueue<int> _ret = new ConcurrentQueue<int>(_list);
            return _ret;
        }
        //地球半径，单位米
        private const double EARTH_RADIUS = 6378137;
        /// <summary>
        /// 计算两点位置的距离，返回两点的距离，单位 米
        /// 该公式为GOOGLE提供，误差小于0.2米
        /// </summary>
        /// <param name="lat1">第一点纬度</param>
        /// <param name="lng1">第一点经度</param>
        /// <param name="lat2">第二点纬度</param>
        /// <param name="lng2">第二点经度</param>
        /// <returns></returns>
        public static double GetDistancelat_lng(double lat1, double lng1, double lat2, double lng2)
        {
            double radLat1 = Rad(lat1);
            double radLng1 = Rad(lng1);
            double radLat2 = Rad(lat2);
            double radLng2 = Rad(lng2);
            double a = radLat1 - radLat2;
            double b = radLng1 - radLng2;
            double result = 2 * Math.Asin(Math.Sqrt(Math.Pow(Math.Sin(a / 2), 2) + Math.Cos(radLat1) * Math.Cos(radLat2) * Math.Pow(Math.Sin(b / 2), 2))) * EARTH_RADIUS;
            return result;
        }

        /// <summary>
        /// 经纬度转化成弧度
        /// </summary>
        /// <param name="d"></param>
        /// <returns></returns>
        private static double Rad(double d)
        {
            return (double)d * Math.PI / 180d;
        }

        /// <summary>
        /// 获取德州随机语音文本
        /// </summary>
        /// <returns></returns>
        public static string GetTexasRandText()
        {
            List<string> languageList = new List<string>();
            //languageList.Add(Language.Instance.Texas_text1);
            //languageList.Add(Language.Instance.Texas_text2);
            //languageList.Add(Language.Instance.Texas_text3);
            //languageList.Add(Language.Instance.Texas_text4);
            languageList.Add(Language.Instance.Texas_text5);
            languageList.Add(Language.Instance.Texas_text6);
            languageList.Add(Language.Instance.Texas_text7);
            languageList.Add(Language.Instance.Texas_text8);
            languageList.Add(Language.Instance.Texas_text9);
            languageList.Add(Language.Instance.Texas_text10);
            int index = ToolsEx.GetRandomSys(0, languageList.Count);
            return languageList[index];
        } 
        /// <summary>
        /// 随机表情
        /// </summary>
        /// <returns></returns>
        public static string GetTPRandText()
        {
            List<string> languageList = new List<string>();
            languageList.Add("gaokuaidian");
            languageList.Add("pc_emojgift_03");
            languageList.Add("pc_emojgift_04");
            languageList.Add("pc_emojgift_05");
            languageList.Add("pc_emojgift_06");   
            languageList.Add("pc_emojgift_07");
            languageList.Add("pc_emojgift_08");
            languageList.Add("pc_emojgift_10");
            languageList.Add("pc_emojgift_11");
            languageList.Add("pc_emojgift_12");
            languageList.Add("pc_emojgift_13");
            languageList.Add("pc_emojgift_15");
            languageList.Add("pc_lw_dy");
            languageList.Add("pc_lw_fw");
            languageList.Add("pc_lw_hb");
            languageList.Add("pc_lw_jd");
            languageList.Add("pc_lw_pc");
            languageList.Add("pc_lw_xhs");
            languageList.Add("pc_lw_ysmg");
            languageList.Add("pc_lw_yzmg");
            languageList.Add("pc_lw_zj");
            int index = ToolsEx.GetRandomSys(0, languageList.Count);
            return languageList[index];
        }

        public static string GetNPRandBq()
        {
            string E = "emoji";
            int index = ToolsEx.GetRandomSys(1, 18);
            return E + index;
        }


        /// <summary>
        /// 获取开房消耗的砖石
        /// </summary>
        /// <param name="bas"></param>
        /// <returns></returns>
        public static int GetOpentableDiamond(int bas)
        {
            Dictionary<int, int> d = new Dictionary<int, int>();
            d.Add(100, 1500);
            d.Add(200, 3000);
            d.Add(500, 6000);
            d.Add(1000, 10000);
            d.Add(2000, 10000);
            d.Add(5000, 10000);
            int ngold = 0;
            d.TryGetValue(bas, out ngold);
            return ngold;
        }
    }


    /// <summary>
    /// 排列组合
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class PermutationAndCombination<T>
    {

        /// <summary>
        /// 交换两个变量
        /// </summary>
        /// <param name="a">变量1</param>
        /// <param name="b">变量2</param>
        public static void Swap(ref T a, ref T b)
        {
            T temp = a;
            a = b;
            b = temp;
        }
        /// <summary>
        /// 递归算法求数组的组合(私有成员)
        /// </summary>
        /// <param name="list">返回的范型</param>
        /// <param name="t">所求数组</param>
        /// <param name="n">辅助变量</param>
        /// <param name="m">辅助变量</param>
        /// <param name="b">辅助数组</param>
        /// <param name="M">辅助变量M</param>
        private static void GetCombination(ref List<T[]> list, T[] t, int n, int m, int[] b, int M)
        {
            for (int i = n; i >= m; i--)
            {
                b[m - 1] = i - 1;
                if (m > 1)
                {
                    GetCombination(ref list, t, i - 1, m - 1, b, M);
                }
                else
                {
                    if (list == null)
                    {
                        list = new List<T[]>();
                    }
                    T[] temp = new T[M];
                    for (int j = 0; j < b.Length; j++)
                    {
                        temp[j] = t[b[j]];
                    }
                    list.Add(temp);
                }
            }
        }
        /// <summary>
        /// 递归算法求排列(私有成员)
        /// </summary>
        /// <param name="list">返回的列表</param>
        /// <param name="t">所求数组</param>
        /// <param name="startIndex">起始标号</param>
        /// <param name="endIndex">结束标号</param>
        private static void GetPermutation(ref List<T[]> list, T[] t, int startIndex, int endIndex)
        {
            if (startIndex == endIndex)
            {
                if (list == null)
                {
                    list = new List<T[]>();
                }
                T[] temp = new T[t.Length];
                t.CopyTo(temp, 0);
                list.Add(temp);
            }
            else
            {
                for (int i = startIndex; i <= endIndex; i++)
                {
                    Swap(ref t[startIndex], ref t[i]);
                    GetPermutation(ref list, t, startIndex + 1, endIndex);
                    Swap(ref t[startIndex], ref t[i]);
                }
            }
        }
        /// <summary>
        /// 求从起始标号到结束标号的排列，其余元素不变
        /// </summary>
        /// <param name="t">所求数组</param>
        /// <param name="startIndex">起始标号</param>
        /// <param name="endIndex">结束标号</param>
        /// <returns>从起始标号到结束标号排列的范型</returns>
        public static List<T[]> GetPermutation(T[] t, int startIndex, int endIndex)
        {
            if (startIndex < 0 || endIndex > t.Length - 1)
            {
                return null;
            }
            List<T[]> list = new List<T[]>();
            GetPermutation(ref list, t, startIndex, endIndex);
            return list;
        }
        /// <summary>
        /// 返回数组所有元素的全排列
        /// </summary>
        /// <param name="t">所求数组</param>
        /// <returns>全排列的范型</returns>
        public static List<T[]> GetPermutation(T[] t)
        {
            return GetPermutation(t, 0, t.Length - 1);
        }
        /// <summary>
        /// 求数组中n个元素的排列
        /// </summary>
        /// <param name="t">所求数组</param>
        /// <param name="n">元素个数</param>
        /// <returns>数组中n个元素的排列</returns>
        public static List<T[]> GetPermutation(T[] t, int n)
        {
            if (n > t.Length)
            {
                return null;
            }
            List<T[]> list = new List<T[]>();
            List<T[]> c = GetCombination(t, n);
            for (int i = 0; i < c.Count; i++)
            {
                List<T[]> l = new List<T[]>();
                GetPermutation(ref l, c[i], 0, n - 1);
                list.AddRange(l);
            }
            return list;
        }
        /// <summary>
        /// 求数组中n个元素的组合
        /// </summary>
        /// <param name="t">所求数组</param>
        /// <param name="n">元素个数</param>
        /// <returns>数组中n个元素的组合的范型</returns>
        public static List<T[]> GetCombination(T[] t, int n)
        {
            if (t.Length < n)
            {
                return null;
            }
            int[] temp = new int[n];
            List<T[]> list = new List<T[]>();
            GetCombination(ref list, t, t.Length, n, temp, n);
            return list;
        }



    }

    public class ListContainsEx
    {
        /// <summary>
        /// 判断两个集合是否是相等的(所有的元素及数量都相等)
        /// </summary>
        /// <typeparam name="T">集合元素类型</typeparam>
        /// <param name="sourceCollection">源集合列表</param>
        /// <param name="targetCollection">目标集合列表</param>
        /// <returns>两个集合相等则返回True,否则返回False</returns>
        public static bool EqualList<T>(IList<T> sourceCollection, IList<T> targetCollection) where T : IEquatable<T>
        {
            //空集合直接返回False,即使是两个都是空集合,也返回False
            if (sourceCollection == null || targetCollection == null)
            {
                return false;
            }

            if (object.ReferenceEquals(sourceCollection, targetCollection))
            {
                return true;
            }

            if (sourceCollection.Count != targetCollection.Count)
            {
                return false;
            }

            var sourceCollectionStaticsDict = StatisticRepetition(sourceCollection);
            var targetCollectionStaticsDict = StatisticRepetition(targetCollection);

            return EqualDictionary(sourceCollectionStaticsDict, targetCollectionStaticsDict);
        }
        public static bool Contains<T>(IList<T> sourceCollection, IList<T> targetCollection) where T : IEquatable<T>
        {
            if (sourceCollection == null || targetCollection == null)
            {
                return false;
            }
            if (object.ReferenceEquals(sourceCollection, targetCollection))
            {
                return true;
            }
            var sourceCollectionStaticsDict = StatisticRepetition(sourceCollection);
            var targetCollectionStaticsDict = StatisticRepetition(targetCollection);

            var collectionStaticsDict = new Dictionary<T, int>();
            foreach (var key in targetCollectionStaticsDict.Keys)
            {
                if (sourceCollectionStaticsDict.ContainsKey(key) && sourceCollectionStaticsDict[key] >= targetCollectionStaticsDict[key])
                { }
                else
                {
                    return false;
                }
            }

            return true;
        }

        /// <summary>
        /// 判断两个字典是否是相等的(所有的字典项对应的值都相等)
        /// </summary>
        /// <typeparam name="TKey">字典项类型</typeparam>
        /// <typeparam name="TValue">字典值类型</typeparam>
        /// <param name="sourceDictionary">源字典</param>
        /// <param name="targetDictionary">目标字典</param>
        /// <returns>两个字典相等则返回True,否则返回False</returns>
        public static bool EqualDictionary<TKey, TValue>(Dictionary<TKey, TValue> sourceDictionary, Dictionary<TKey, TValue> targetDictionary)
            where TKey : IEquatable<TKey>
            where TValue : IEquatable<TValue>
        {
            //空字典直接返回False,即使是两个都是空字典,也返回False
            if (sourceDictionary == null || targetDictionary == null)
            {
                return false;
            }

            if (object.ReferenceEquals(sourceDictionary, targetDictionary))
            {
                return true;
            }

            if (sourceDictionary.Count != targetDictionary.Count)
            {
                return false;
            }

            //比较两个字典的Key与Value
            foreach (var item in sourceDictionary)
            {
                //如果目标字典不包含源字典任意一项,则不相等
                if (!targetDictionary.ContainsKey(item.Key))
                {
                    return false;
                }

                //如果同一个字典项的值不相等,则不相等
                if (!targetDictionary[item.Key].Equals(item.Value))
                {
                    return false;
                }
            }

            return true;
        }

        /// <summary>
        /// 统计集合的重复项,并返回一个字典
        /// </summary>
        /// <typeparam name="T">集合元素类型</typeparam>
        /// <param name="sourceCollection">统计集合列表</param>
        /// <returns>返回一个集合元素及重复数量的字典</returns>
        private static Dictionary<T, int> StatisticRepetition<T>(IEnumerable<T> sourceCollection) where T : IEquatable<T>
        {
            var collectionStaticsDict = new Dictionary<T, int>();
            foreach (var item in sourceCollection)
            {
                if (collectionStaticsDict.ContainsKey(item))
                {
                    collectionStaticsDict[item]++;
                }
                else
                {
                    collectionStaticsDict.Add(item, 1);
                }
            }

            return collectionStaticsDict;
        }

    } 
}

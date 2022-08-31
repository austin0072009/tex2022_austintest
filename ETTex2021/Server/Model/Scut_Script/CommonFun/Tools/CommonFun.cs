using ETModel.Framework.Common.Serialization;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using GameSystem;
using GameSystem.Entity;
using Model.Scut_Script.Common;
using MongoDB.Bson.Serialization.Attributes;
using ProtoBuf;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

namespace ETModel
{
    public static class CommonFun
    {
        public static HashSet<int> levels = new HashSet<int> { };
         

        public static bool IsTableMsg(Session session, int userid, int rpcid, object request)
        {
            if (request is Lobby_CommonFun2Request)
            {
                var component = Game.Scene.GetComponent<TableComponent>();
                if (component != null)
                {
                    var handler = component.GetTableHandler(userid);
                    if (handler != null)
                    {
                        Lobby_CommonFun2Request message = (Lobby_CommonFun2Request)request;
                        cs_base msg = JsonUtils.Deserialize<cs_base>(message.para);
                        if (handler.IsTableCommond(msg.fn))
                        {
                            //GameRequest gameRequest = new GameRequest(userid, rpcid, msg, message.para);
                            //handler.handler.Handle(session, gameRequest);
                            //component.SendMsg(session, handler.handler, new GameRequest(userid, rpcid, msg, message.para)).Coroutine();
                            handler.Handle(session, new GameRequest(userid, rpcid, msg, message.para));
                            return true;
                        }
                    }
                }
            }else if (request is Lobby2game_DealDataExRequest)
            {
                var component = Game.Scene.GetComponent<TableComponent>();
                if (component != null)
                {
                    var handler = component.GetTableHandler(userid);
                    if (handler != null)
                    {
                        Lobby2game_DealDataExRequest message = (Lobby2game_DealDataExRequest)request;
                        cs_base msg = JsonUtils.Deserialize<cs_base>(message.para);
                        if (handler.IsTableCommond(msg.fn))
                        {
                            //GameRequest gameRequest = new GameRequest(userid, rpcid, msg, message.para);
                            //handler.handler.Handle(session, gameRequest);
                            //component.SendMsg(session, handler.handler, new GameRequest(userid, rpcid, msg, message.para)).Coroutine();
                            handler.Handle(session, new GameRequest(userid, rpcid, msg, message.para));
                            return true;
                        }
                    }
                }
            }
           
            else if (request is C2SS_ActorRPCRequest)
            {
                var component = Game.Scene.GetComponent<TableComponent>();
                if (component != null)
                {
                    var handler = component.GetTableHandler(userid);
                    if (handler != null)
                    {
                        C2SS_ActorRPCRequest message = (C2SS_ActorRPCRequest)request;
                        cs_base msg = JsonUtils.Deserialize<cs_base>(message.Request);
                        if (handler.IsTableCommond(msg.fn))
                        {
                            //GameRequest gameRequest = new GameRequest(userid, rpcid, msg, message.Request);
                            //handler.handler.Handle(session, gameRequest);
                            //component.SendMsg(session, handler.handler, new GameRequest(userid, rpcid, msg, message.Request)).Coroutine();
                            handler.Handle(session, new GameRequest(userid, rpcid, msg, message.Request));
                            return true;
                        }
                    }
                }
            }
            return false;
        }
        public static bool IsEnum(this string self, params TaskDataType[] es)
        {
            if (self == null || es == null) return false;
            foreach (var item in es)
            {
                if (self.Equals(item.ToString())) return true;
            }
            return false;
        }
        public static object[] GetParams(ParameterInfo[] infos, params object[] ps)
        {
            object[] args = new object[infos.Length];
            for (int i = 0; i < infos.Length && i < ps.Length; i++)
            {
                if (infos[i].ParameterType.IsEnum) args[i] = Enum.Parse(infos[i].ParameterType, ps[i].ToString());
                else if (infos[i].ParameterType.IsValueType || infos[i].ParameterType == typeof(string)) args[i] = Convert.ChangeType(ps[i], infos[i].ParameterType);
                else if (infos[i].ParameterType.IsClass) args[i] = JsonUtils.Deserialize(ps[i].ToString(), infos[i].ParameterType);
                else args[i] = Convert.ChangeType(ps[i], infos[i].ParameterType);
            }
            return args;
        }
        public static bool TryToInt32(this PropertyInfo self, object obj, out int num)
        {
            num = 0;
            if (self == null) return false;
            var value = self.GetValue(obj);
            if (value == null) return false;
            return int.TryParse(value.ToString(), out num);
        }
        public static bool TryToInt32(this FieldInfo self, object obj, out int num)
        {
            num = 0;
            if (self == null) return false;
            var value = self.GetValue(obj);
            if (value == null) return false;
            return int.TryParse(value.ToString(), out num);
        }
        /// <summary>
        /// C#获取一个类在其所在的程序集中的所有子类
        /// </summary>
        /// <param name="parentType">给定的类型</param>
        /// <returns>所有子类的名称</returns>
        public static List<Type> GetSubClass(Type parentType)
        {
            var subTypeList = new List<Type>();
            var assembly = parentType.Assembly;//获取当前父类所在的程序集``
            var assemblyAllTypes = assembly.GetTypes();//获取该程序集中的所有类型
            foreach (var itemType in assemblyAllTypes)//遍历所有类型进行查找
            {
                var baseType = itemType.BaseType;//获取元素类型的基类
                if (baseType != null)//如果有基类
                {
                    if (baseType.Name == parentType.Name)//如果基类就是给定的父类
                    {
                        subTypeList.Add(itemType);//加入子类表中
                    }
                }
            }
            return subTypeList;//获取所有子类类型的名称
        }
        public static T GetAttribute<T>(MemberInfo info) where T : Attribute
        {
            if (info != null)
            {
                var attrs = info.GetCustomAttributes(false);
                foreach (var attr in attrs)
                {
                    if (attr is T)
                    {
                        return (T)attr;
                    }
                }
            }
            return null;
        }

        public static bool IsInArray(int num, int[] array)
        {
            if (array == null)
            {
                return false;
            }
            for (int i = 0; i < array.Length; i++)
            {
                if (num == array[i])
                {
                    return true;
                }
            }
            return false;
        }

        public static int[] Copy(int[] array, int sta, int len)
        {
            if (array == null) return null;
            if (len > 0 && array.Length >= sta + len)
            {
                int[] arr = new int[len];
                for (int i = 0; i < len; i++)
                {
                    arr[i] = array[sta + len];
                }
                return arr;
            }
            return null;
        }

        public static List<int[]> Copy(List<int[]> array, int sta, int len)
        {
            List<int[]> list = new List<int[]>();
            for (int i = 0; i < array.Count; i++)
            {
                if (array[i].Length >= sta + len)
                {
                    int[] pors = new int[len];
                    list.Add(pors);
                    for (int index = sta; index < len + sta; index++)
                    {
                        pors[index] = array[i][index];
                    }
                }
            }
            return list;
        }

        public static int[,] Copy(int[,] array)
        {
            if (array == null) return null;
            int[,] arr = new int[array.GetLength(0), array.GetLength(1)];
            for (int i = 0; i < arr.GetLength(0); i++)
            {
                for (int j = 0; j < arr.GetLength(1); j++)
                {
                    arr[i, j] = array[i, j];
                }
            }
            return arr;
        }
        public static void Copy(int[,] arr1, int[,] arr2)
        {
            if (arr1 == null || arr2 == null || arr1.GetLength(0) != arr2.GetLength(0) || arr1.GetLength(1) != arr2.GetLength(1)) return;
            for (int i = 0; i < arr1.GetLength(0); i++)
            {
                for (int j = 0; j < arr1.GetLength(1); j++)
                {
                    arr2[i, j] = arr1[i, j];
                }
            }
        }

        public static void print(int[,] array)
        {
            Console.WriteLine(GetString(array));
        }
        public static string GetString(int[,] array)
        {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < array.GetLength(0); i++)
            {
                for (int j = 0; j < array.GetLength(1); j++)
                {
                    sb.Append(array[i, j] + (array[i, j] > 9 ? "" : " ") + (j < array.GetLength(1) - 1 ? "," : ""));
                }
                sb.Append("\r\n");
            }
            return sb.ToString();
        }

        public static List<PointSlotEx> GetSpecialCardCount(int[,] cards, int card)
        {
            List<PointSlotEx> ps = new List<PointSlotEx>();
            for (int row = 0; row < cards.GetLength(0); row++)
            {
                for (int col = 0; col < cards.GetLength(1); col++)
                {
                    if (cards[row, col] == card)
                    {
                        ps.Add(new PointSlotEx(row, col));
                    }
                }
            }
            return ps;
        }

        /// <summary>
        /// 根据权重获得随机棋子
        /// </summary>
        /// <param name="iTotalValue">权重总数</param>
        /// <param name="iLen">棋子个数</param>
        /// <param name="iProValues">棋子权重列表</param>
        /// <returns></returns>
        public static int GetRandItem(int iTotalValue, int iLen, int[] iProValues)
        {
            int iReValue = 1;
            int iTmpProValue = RandomHelper.RandomNumber(0, iTotalValue);
            int MaxSum = 0;
            for (int k = 0; k < iLen; k++)
            {
                MaxSum += iProValues[k];
                if (iProValues[k] != 0 && iTmpProValue <= MaxSum)
                {
                    iReValue = (k + 1);
                    break;
                }
            }
            return iReValue;
        }
        /// <summary>
        /// 根据权重获得随机棋子
        /// </summary>
        /// <param name="iProValues"></param>
        /// <returns></returns>
        public static int GetRandItem(int[] iProValues)
        {
            int iTotalValue = iProValues.Sum();
            int iLen = iProValues.Length;
            int iReValue = 1;
            int iTmpProValue = RandomHelper.RandomNumber(0, iTotalValue);
            int MaxSum = 0;
            for (int k = 0; k < iLen; k++)
            {
                MaxSum += iProValues[k];
                if (iProValues[k] != 0 && iTmpProValue <= MaxSum)
                {
                    iReValue = (k + 1);
                    break;
                }
            }
            return iReValue;
        }
        /// <summary>
        /// 获取不中奖结果
        /// </summary>
        /// <param name="itemCount"></param>
        /// <param name="row"></param>
        /// <param name="col"></param>
        /// <returns></returns>
        public static int[,] GetNoRewardResult(Type type,int iSpaceCount=0, int row = 3, int col = 5, List<int> rms=null)
        {
            int itemCount = Enum.GetValues(type).Length- iSpaceCount;
            int[,] reslut = new int[row, col];
            List<int> maps = new List<int>();
            for (int i = 0; i < col; i++)
            {
                if (i == 1)
                {
                    for (int j = 0; j < row; j++)
                    {
                        maps.Remove(reslut[j, 0]);
                    }
                }
                else if (i == 3)
                {
                    for (int j = 0; j < row; j++)
                    {
                        maps.Remove(reslut[j, 2]);
                    }
                }
                else if (i == 5)
                {
                    for (int j = 0; j < row; j++)
                    {
                        maps.Remove(reslut[j, 2]);
                    }
                }
                else
                {
                    maps.Clear();
                    for (int k = 1; k < itemCount; k++)
                    {
                        if (rms != null && rms.Contains(k)) continue;
                        maps.Add(k);
                    }
                }
                for (int j = 0; j < row; j++)
                {
                    int index = RandomHelper.RandomNumber(0, maps.Count);
                    reslut[j, i] = maps[index];
                }
            }
            return reslut;
        }
    

        public static void initDealDataEx(Lobby_CommonFun2Request request, object[] arr, string FieldName, string JsonString)
        {
            if (request._g == 0)
            {
                int id = JsonString.GetIntFromJsonString(FieldName); //GetIntFromJsonString(statag, content);
                if (id > -1)
                {
                    request._g = id;
                    arr[0] = id;
                }
            }
            arr[2] = JsonString;
        }
        /// <summary>
        /// 获取随机卡牌(两种分配机制:1.根据min和max同等概率随机生成卡牌,2.按卡牌出现几率map生成卡牌)
        /// </summary>
        /// <param name="min">最小卡牌</param>
        /// <param name="max">最大卡牌</param>
        /// <param name="vmap">各个卡牌出现几率</param>
        /// <returns></returns>
        public static int getRandomCard(int min, int max, Dictionary<int, int> vmap = null, int total = 0)
        {
            if (vmap != null && vmap.Count > 0)
            {
                int value = new Random().Next(0, total);
                foreach (var item in vmap)
                {
                    if (value < item.Value)
                    {
                        return item.Key;
                    }
                }
                return 0;
            }
            else
            {
                Random ran = new Random();
                int value = ran.Next(min, max + 1);
                return value;
            }
        }
        public static void SetStringValue(this PropertyInfo info, object obj, string value)
        {
            if (info.PropertyType.Equals(typeof(short)))
            {
                info.SetValue(obj, Convert.ToInt16(value));
            }
            else if (info.PropertyType.Equals(typeof(int)))
            {
                info.SetValue(obj, Convert.ToInt32(value));
            }
            else if (info.PropertyType.Equals(typeof(long)))
            {
                info.SetValue(obj, Convert.ToInt64(value));
            }
            else if (info.PropertyType.Equals(typeof(ushort)))
            {
                info.SetValue(obj, Convert.ToUInt16(value));
            }
            else if (info.PropertyType.Equals(typeof(uint)))
            {
                info.SetValue(obj, Convert.ToUInt32(value));
            }
            else if (info.PropertyType.Equals(typeof(ulong)))
            {
                info.SetValue(obj, Convert.ToUInt64(value));
            }
            else if (info.PropertyType.Equals(typeof(float)))
            {
                info.SetValue(obj, Convert.ToSingle(value));
            }
            else if (info.PropertyType.Equals(typeof(double)))
            {
                info.SetValue(obj, Convert.ToDouble(value));
            }
            else if (info.PropertyType.Equals(typeof(decimal)))
            {
                info.SetValue(obj, Convert.ToDecimal(value));
            }
            else if (info.PropertyType == typeof(string))
            {
                info.SetValue(obj, value);
            }
            else if (info.PropertyType == typeof(DateTime))
            {
                info.SetValue(obj, DateTime.Parse(value));
            }
            else if (!typeof(IFormattable).IsAssignableFrom(info.PropertyType))
            {
                info.SetValue(obj, JsonUtils.Deserialize(value, info.PropertyType));
            }
            else { info.SetValue(obj, value); }
        }
        /// <summary>
        /// 加
        /// </summary>
        /// <param name="obj"></param>
        /// <param name="info"></param>
        /// <param name="addval"></param>
        public static void NumberIncrease(object obj, PropertyInfo info, long addval)
        {
            object num = GetNumberIncrease(info.PropertyType, info.GetValue(obj), addval);
            if (num != null) info.GetSetMethod().Invoke(obj, new object[] { num });
        }
        /// <summary>
        /// 赋值替换
        /// </summary>
        /// <param name="obj"></param>
        /// <param name="info"></param>
        /// <param name="val"></param>
        public static void NumberEval(object obj, PropertyInfo info, long val)
        {
            object num = GetNumberEval(info.PropertyType, info.GetValue(obj), val);
            if (num != null) info.GetSetMethod().Invoke(obj, new object[] { num });
        }
        /// <summary>
        /// 替换赋值
        /// </summary>
        /// <param name="type"></param>
        /// <param name="value"></param>
        /// <param name="val"></param>
        /// <returns></returns>
        public static object GetNumberEval(Type type, object value, object val)
        {
            object num = null;
            if (type.Equals(typeof(short)))
            {
                num = (short)(Convert.ToInt16(val));
            }
            else if (type.Equals(typeof(int)))
            {
                num = (int)(Convert.ToInt32(val));
            }
            else if (type.Equals(typeof(long)))
            {
                num = (long)(Convert.ToInt64(val));
            }
            else if (type.Equals(typeof(ushort)))
            {
                num = (ushort)(Convert.ToUInt16(val));
            }
            else if (type.Equals(typeof(uint)))
            {
                num = (uint)(Convert.ToUInt32(val));
            }
            else if (type.Equals(typeof(ulong)))
            {
                num = (ulong)(Convert.ToUInt64(val));
            }
            else if (type.Equals(typeof(float)))
            {
                num = (float)(Convert.ToSingle(val));
            }
            else if (type.Equals(typeof(double)))
            {
                num = (double)(Convert.ToDouble(val));
            }
            else if (type.Equals(typeof(decimal)))
            {
                num = (decimal)(Convert.ToDecimal(val));
            }
            return num;
        }
        /// <summary>
        /// 加
        /// </summary>
        /// <param name="type"></param>
        /// <param name="value"></param>
        /// <param name="addval"></param>
        /// <returns></returns>
        public static object GetNumberIncrease(Type type, object value, object addval)
        {
            object num = null;
            if (type.Equals(typeof(short)))
            {
                num = (short)((short)value + Convert.ToInt16(addval));
            }
            else if (type.Equals(typeof(int)))
            {
                num = (int)((int)value + Convert.ToInt32(addval));
            }
            else if (type.Equals(typeof(long)))
            {
                num = (long)((long)value + Convert.ToInt64(addval));
            }
            else if (type.Equals(typeof(ushort)))
            {
                num = (ushort)((ushort)value + Convert.ToUInt16(addval));
            }
            else if (type.Equals(typeof(uint)))
            {
                num = (uint)((uint)value + Convert.ToUInt32(addval));
            }
            else if (type.Equals(typeof(ulong)))
            {
                num = (ulong)((ulong)value + Convert.ToUInt64(addval));
            }
            else if (type.Equals(typeof(float)))
            {
                num = (float)((float)value + Convert.ToSingle(addval));
            }
            else if (type.Equals(typeof(double)))
            {
                num = (double)((double)value + Convert.ToDouble(addval));
            }
            else if (type.Equals(typeof(decimal)))
            {
                num = (decimal)((decimal)value + Convert.ToDecimal(addval));
            }
            return num;
        }
        /// <summary>
        /// 减
        /// </summary>
        /// <param name="type"></param>
        /// <param name="value"></param>
        /// <param name="addval"></param>
        /// <returns></returns>
        public static object GetNumberDecrease(Type type, object value, object addval)
        {
            object num = null;
            if (type.Equals(typeof(short)))
            {
                num = (short)((short)value - Convert.ToInt16(addval));
            }
            else if (type.Equals(typeof(int)))
            {
                num = (int)((int)value - Convert.ToInt32(addval));
            }
            else if (type.Equals(typeof(long)))
            {
                num = (long)((long)value - Convert.ToInt64(addval));
            }
            else if (type.Equals(typeof(ushort)))
            {
                num = (ushort)((ushort)value - Convert.ToUInt16(addval));
            }
            else if (type.Equals(typeof(uint)))
            {
                num = (uint)((uint)value - Convert.ToUInt32(addval));
            }
            else if (type.Equals(typeof(ulong)))
            {
                num = (ulong)((ulong)value - Convert.ToUInt64(addval));
            }
            else if (type.Equals(typeof(float)))
            {
                num = (float)((float)value - Convert.ToSingle(addval));
            }
            else if (type.Equals(typeof(double)))
            {
                num = (double)((double)value - Convert.ToDouble(addval));
            }
            else if (type.Equals(typeof(decimal)))
            {
                num = (decimal)((decimal)value - Convert.ToDecimal(addval));
            }
            return num;

        }

        private static string IEquatable = typeof(IEquatable<>).FullName;
        public static Type GetCollectionElementType(this Type type)
        {
            if (null == type) throw new ArgumentNullException("type");
            if (!typeof(ICollection).IsAssignableFrom(type)) return type.GetElementType();
            if (type.GenericTypeArguments != null && type.GenericTypeArguments.Length == 1) return type.GenericTypeArguments[0];
            var etype = typeof(IEnumerable<>);
            foreach (var bt in type.GetInterfaces()) if (bt.IsGenericType && bt.GetGenericTypeDefinition() == etype) return bt.GetGenericArguments()[0];

            if (typeof(IDictionary).IsAssignableFrom(type)) return typeof(DictionaryEntry);

            ParameterInfo[] pis;
            if (typeof(IList).IsAssignableFrom(type))
                foreach (var prop in type.GetProperties()) if ("Item".Equals(prop.Name) && typeof(object) != prop.PropertyType) if ((pis = prop.GetIndexParameters()) != null && 1 == pis.Length && typeof(int) == pis[0].ParameterType) return prop.PropertyType;
            //return type.GetProperties().Where(p => p.Name == "Item" && p.PropertyType != typeof(object) && p.GetIndexParameters().Length == 1 && p.GetIndexParameters()[0].ParameterType == typeof(int)).ToList()[0].GetIndexParameters()[0].ParameterType;

            if (typeof(ICollection).IsAssignableFrom(type))
                foreach (var meth in type.GetMethods()) if ("Add".Equals(meth.Name)) if ((pis = meth.GetParameters()) != null && 1 == pis.Length && typeof(object) != pis[0].ParameterType) return pis[0].ParameterType;
            //return type.GetMethods().Where(p => p.Name == "Add" && p.GetParameters().Length == 1 && p.GetParameters()[0].ParameterType != typeof(object)).ToList()[0].GetParameters()[0].ParameterType;
            if (typeof(IEnumerable).IsAssignableFrom(type)) return typeof(object);
            return null;
        }

        public static bool MyEquals(this Array self, Array other)
        {
            int status = self.EqualsNullStatus(other);
            if (status < 0) return false;
            if (status == 0) return true;
            if (self.GetType().GetElementType() == other.GetType().GetElementType())
            {
                if (self.Rank == other.Rank && self.Length == other.Length)
                {
                    //for (int i = 0; i < self.Rank; i++) if (self.GetLength(i) != other.GetLength(i)) return false;
                    //for (int i = 0; i < self.Length; i++) if (!self.GetValue(i).MyEquals(other.GetValue(i))) return false;
                    return self.Equals(other, new int[0]);
                }
            }
            return false;
        }
        public static bool MyEquals(this IDictionary self, IDictionary other)
        {
            int status = self.EqualsNullStatus(other);
            if (status < 0) return false;
            if (status == 0) return true;
            if (self.Count == other.Count)
            {
                if (self.GetType().GetCollectionElementType() == other.GetType().GetCollectionElementType())
                {
                    var ses = self.GetEnumerator(); var des = other.GetEnumerator();
                    while (ses.MoveNext() && des.MoveNext())
                    {
                        var sdata = ((DictionaryEntry)ses.Current);
                        var ddata = ((DictionaryEntry)des.Current);
                        if (!sdata.Key.MyEquals(ddata.Key)) return false;
                        if (!sdata.Value.MyEquals(ddata.Value)) return false;
                    }
                    return true;
                }
            }
            return false;
        }

        //public static Dictionary<Type, MemberManager> equalmap = new Dictionary<Type, MemberManager>();
        public static string GetKey(params string[] param)
        {
            StringBuilder sb = new StringBuilder();
            string str;
            foreach (var item in param)
            {
                if (item != null && !string.IsNullOrWhiteSpace(str = item.Trim())) sb.Append(str + ",");
            }
            sb.Remove(sb.Length - 1, 1);
            Console.WriteLine($"加密前:{sb}");
            MD5 md5 = MD5.Create();
            string pwd = "";
            byte[] s = md5.ComputeHash(Encoding.UTF8.GetBytes(sb.ToString()));
            for (int i = 0; i < s.Length; i++)
            {
                pwd = pwd + s[i].ToString("X");
            }
            Console.WriteLine($"加密后:{sb}");
            return pwd;
        }
        public static string GetGMResult(this cs_agent_base cs, int ret, string info, string secret)
        {
            var sc = new sc_agent_base { fn = cs.fn.Replace("cs_", "sc_"), _ret = ret, _info = info };
            sc.key = sc.GetKey(secret);
            return JsonUtils.Serialize(sc);
        }
        //public static string GetKey(this cs_agent_base cs, string secret)
        //{
        //    List<string> list = new List<string>();
        //    var type = cs.GetType();
        //    var fs = type.GetFields(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance);
        //    for (int i = 0; i < fs.Length; i++) { string value = Convert.ToString(fs[i].GetValue(cs)); if (value != null) list.Add(value); }
        //    var ps = type.GetProperties(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance);
        //    for (int i = 0; i < ps.Length; i++) { string value = Convert.ToString(ps[i].GetValue(cs)); if (value != null) list.Add(value); }
        //    list.Add(cs.fn);
        //    list.Add(cs.time.ToString());
        //    list.Add(secret);
        //    return GetKey(list.ToArray());
        //}
        //public static string GetKey(this sc_agent_base sc, string secret)
        //{
        //    List<string> list = new List<string>();
        //    var type = sc.GetType();
        //    var fs = type.GetFields(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance);
        //    for (int i = 0; i < fs.Length; i++) { string value = Convert.ToString(fs[i].GetValue(sc)); if (value != null) list.Add(value); }
        //    var ps = type.GetProperties(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Instance);
        //    for (int i = 0; i < ps.Length; i++) { string value = Convert.ToString(ps[i].GetValue(sc)); if (value != null) list.Add(value); }
        //    list.Add(sc.fn);
        //    list.Add(sc._ret.ToString());
        //    list.Add(sc._info);
        //    list.Add(sc.time.ToString());
        //    list.Add(secret);
        //    return GetKey(list.ToArray());
        //}
        public static bool IsEquatable(this object self)
        {
            return self.GetType().GetInterfaces().Where(p => p.IsGenericType && p.GetGenericTypeDefinition().FullName.Equals(IEquatable)).ToList().Count > 0;
        }
        public static bool MyEquals(this object self, object other)
        {
            int status = self.EqualsNullStatus(other);
            if (status < 0) return false;
            if (status == 0) return true;
            if (self.GetType() != other.GetType()) return false;
            if (self.GetType().IsArray) return ((Array)self).MyEquals((Array)other);
            else if (typeof(IDictionary).IsAssignableFrom(self.GetType())) return ((IDictionary)self).MyEquals((IDictionary)other);
            else if (typeof(ICollection).IsAssignableFrom(self.GetType())) return ((ICollection)self).MyEquals((ICollection)other);
            else if (self.GetType().IsValueType || self.IsEquatable()) return self.Equals(other);
            else if (self.GetType().IsClass)
            {
                var detail = GetMemberDetail(GameEntityCache.Instance.equals, self.GetType());
                foreach (var info in detail.members.Values) if (!info.GetValue(self).MyEquals(info.GetValue(other))) return false;
                //var type = self.GetType();

                //var fs = type.GetRuntimeFields();
                //foreach (var finfo in fs) if (!finfo.Name.StartsWith("<") && !finfo.GetValue(self).MyEquals(finfo.GetValue(other))) return false;
                //var ps = type.GetRuntimeProperties();
                //foreach (var pinfo in ps) if (pinfo.GetMethod.GetParameters().Length == 0 && !CheckIgnore(pinfo) && !pinfo.GetValue(self).MyEquals(pinfo.GetValue(other))) return false;
                return true;
            }
            return self.Equals(other);
        }
        public static MemberManager GetMemberDetail(Dictionary<Type, MemberManager> map, Type type)
        {
            if (!map.TryGetValue(type, out MemberManager detail))
            {
                detail = new MemberManager();
                int count = 0;
                var fs = type.GetRuntimeFields();
                foreach (var finfo in fs) if (!finfo.Name.StartsWith("<") && !CheckIgnore(finfo)) detail.members.Add(count, new MemberDetail(count++, finfo, false, false));
                var ps = type.GetRuntimeProperties();
                foreach (var pinfo in ps) if (pinfo.GetMethod.GetParameters().Length == 0 && !CheckIgnore(pinfo)) detail.members.Add(count, new MemberDetail(count++, pinfo, false, false));
                map.Add(type, detail);
            }
            return detail;
        }
        public static bool CheckIgnore(MemberInfo info)
        {
            return GetAttribute<JsonIgnoreAttribute>(info) != null || GetAttribute<BsonIgnoreAttribute>(info) != null || GetAttribute<ProtoIgnoreAttribute>(info) != null;
        }

        public static bool MyEquals(this ICollection self, ICollection other)
        {
            int status = self.EqualsNullStatus(other);
            if (status < 0) return false;
            if (status == 0) return true;
            if (self.Count == other.Count)
            {
                if (self.GetType().GetCollectionElementType() == other.GetType().GetCollectionElementType())
                {
                    var ses = self.GetEnumerator(); var oes = other.GetEnumerator();
                    while (ses.MoveNext() && oes.MoveNext())
                    {
                        if (!ses.Current.MyEquals(oes.Current)) return false;
                    }
                    return true;
                }
            }
            return false;
        }

        public static int EqualsNullStatus(this object self, object other)
        {
            if ((self == null && other != null) || (self != null && other == null)) return -1;
            if (self == null && other == null) return 0;
            return 1;
        }
        public static bool Equals(this Array self, Array other, int[] indexs)
        {
            if (self.Rank <= indexs.Length) return self.GetValue(indexs).MyEquals(other.GetValue(indexs));
            else if (self.GetLength(indexs.Length) != other.GetLength(indexs.Length)) return false;
            else for (int i = 0; i < self.GetLength(indexs.Length); i++) { int[] idxs = indexs.Copy(indexs.Length + 1); idxs[indexs.Length] = i; if (!self.Equals(other, idxs)) return false; }
            return true;
        }

        public static T[] Copy<T>(this T[] self, int len)
        {
            return self.Copy(new T[len]);
        }
        public static T[] Copy<T>(this T[] self, T[] other)
        {
            for (int i = 0; i < self.Length && i < other.Length; i++) other[i] = self[i];
            return other;
        }

    
        public static void PrintError(string content, Exception ex = null, int level = 0)
        {
            if (levels == null || levels.Count == 0 || levels.Contains(level))
            {
                Console.WriteLine(content, ex);
                TraceLogEx.Error(ex, content);
            }
        }

        public static T LoadControlConfig<T>(int gameid, string strFileName)
        {
            string strPath = StartConfigComponent.Instance.ConfigPath + $"/GameConfig/{gameid}/{strFileName}.json";
            if (gameid == 0)
            {
                strPath = StartConfigComponent.Instance.ConfigPath + $"/GameConfig/{strFileName}.json";
            }
            string strValue = File.ReadAllText(strPath);
            Regex r = new Regex(@"^/\*((?:(?!\*/)[\s\S])*)\*/", RegexOptions.Multiline);
            strValue = r.Replace(strValue, "");
            return JsonUtils.Deserialize<T>(strValue);  
        }
        public static void SaveControlConfig(int gameid, string strFileName, string strValue)
        {
            string strPath = StartConfigComponent.Instance.ConfigPath + $"/GameConfig/{gameid}/{strFileName}.json";
            File.WriteAllText(strPath, strValue);

        }

        public static T LoadTmpFile<T>(string strFileName)
        {
            string strPath = $"./tmpFile/";
            if (!Directory.Exists(strPath))
            {
                Directory.CreateDirectory(strPath);
            }
            strPath = $"{strPath}{strFileName}.json";
            if (!File.Exists(strPath))
            {
                return default(T);
            }
            string strValue = File.ReadAllText(strPath);
            return JsonUtils.Deserialize<T>(strValue); ;
        }
        public static void SaveTmpFile(string strFileName, object obj)
        {
            string strPath = $"./tmpFile/{strFileName}.json";
            File.WriteAllText(strPath, JsonUtils.Serialize(obj));
        }
        public static List<PrizeInfoMessage> GetPrizes(ICollection<PrizeInfo> infos, Dictionary<int, tPropConfig> props)
        {
            List<PrizeInfoMessage> prizes = new List<PrizeInfoMessage>();
            foreach (var info in infos) prizes.Add(GetPrize(info, props)); ;
            return prizes;
        }
        public static PrizeInfoMessage GetPrize(PrizeInfo info, Dictionary<int, tPropConfig> props)
        {
            props.TryGetValue(info.type, out tPropConfig prop);
            return new PrizeInfoMessage { name = prop != null ? prop.PropName : null, num = info.num,minnum = info.minnum, pic = prop != null ? prop.PropName : null };
        }
        public static List<CompetePrizeMessage> GetPrizes(ICollection<CompetePrize> infos, Dictionary<int, tPropConfig> props)
        {
            List<CompetePrizeMessage> prizes = new List<CompetePrizeMessage>();
            foreach (var info in infos) prizes.Add(new CompetePrizeMessage { starank = info.starank, endrank = info.endrank, prizes = GetPrizes(info.prizes, props) });
            return prizes;
        }
        public static List<CompetePrizeInfoMessage> GetPrizes(ICollection<CompetePrizeInfo> infos, Dictionary<int, tPropConfig> props)
        {
            List<CompetePrizeInfoMessage> prizes = new List<CompetePrizeInfoMessage>();
            foreach (var info in infos) { prizes.Add(GetPrize(info, props)); }
            return prizes;
        }
        public static CompetePrizeInfoMessage GetPrize(CompetePrizeInfo info, Dictionary<int, tPropConfig> props)
        {
            props.TryGetValue(info.type, out tPropConfig prop);
            return new CompetePrizeInfoMessage { name = prop != null ? prop.PropName : null, num = info.num, pic = prop != null ? prop.PropName : null, isvalue = info.IsValue };
        }
        public static T CopyTo<T>(this object self)
        {
            try
            {
                var rsp = (T)Activator.CreateInstance(typeof(T));
                var ops = rsp.GetType().GetProperties();
                var ofs = rsp.GetType().GetFields();
                var sps = self.GetType().GetProperties();
                var sfs = self.GetType().GetFields();
                Dictionary<string, PropertyInfo> opmap = new Dictionary<string, PropertyInfo>();
                Dictionary<string, FieldInfo> ofmap = new Dictionary<string, FieldInfo>();
                foreach (var pinfo in ops) opmap.Add(pinfo.Name, pinfo);
                foreach (var finfo in ofs) ofmap.Add(finfo.Name, finfo);
                foreach (var pinfo in sps) if (opmap.TryGetValue(pinfo.Name, out PropertyInfo info) && pinfo.PropertyType == info.PropertyType) info.SetValue(rsp, pinfo.GetValue(self));
                foreach (var finfo in sfs) if (ofmap.TryGetValue(finfo.Name, out FieldInfo info) && finfo.FieldType == info.FieldType) info.SetValue(rsp, finfo.GetValue(self));
                return rsp;
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex,"["+self.GetType().Name+"]类型转换["+typeof(T).Name+"]错误,数据为:"+ JsonUtils.Serialize(self));
            }
            return default;
        }
       

        /// <summary>
        /// 金币或者钻石日志
        /// </summary>
        /// <param name="userid">玩家ID</param>
        /// <param name="lGamble">押注金额</param>
        /// <param name="afterGold">变化后金币</param>
        /// <param name="changeGold">变化的金币</param>
        /// <param name="iChangeType">改变的分类</param>
        /// <param name="gameid">游戏ID</param>
        /// <param name="remark">描述</param>
        /// <param name="tnum">座号</param>
        /// <param name="clubid">clubID</param>
        /// <param name="bDiamond">是否为钻石日志，默认不是</param>
        /// <param name="tax">税收</param>
        public static async void WriteGoldOrDiamondChangeLog(int userid, long lGamble, double afterGold, double changeGold, int iChangeType, int gameid, string remark = "", int tnum = 0, int clubid = 0, bool bDiamond = false, int tax = 0)
        {
            if (bDiamond)
            {
                tDiamondChangeLog dlog = new tDiamondChangeLog();
                dlog.BeforeGold = afterGold - changeGold;
                dlog.AfterGold = afterGold;
                dlog.ChangeType = iChangeType;
                dlog.UserId = userid;
                dlog.Gold = changeGold;
                dlog.Remark = remark;
                dlog.CreateTime = DateTime.Now;
                BaseHelper.AddAsync(dlog);
            }
            else
            {
                tgoldchangelog model = new tgoldchangelog();
                model.UserId = userid;
                model.gamble = lGamble;
                model.Gold = changeGold;
                model.BeforeGold = afterGold - changeGold;
                model.GameId = gameid;
                model.AfterGold = changeGold;
                model.IsRobot = false;
                model.ChangeType = iChangeType;
                model.tnum = tnum;
                model.clubid = clubid;
                model.Remark = remark;
                model.tax = tax;
                model.CreateTime = DateTime.Now;
                BaseHelper.AddAsync(model);
            }
        }
    }
}

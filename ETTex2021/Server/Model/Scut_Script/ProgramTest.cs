using ETModel.Framework.Common.Security;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using GameSystem;
using GameSystem.Entity;
using Microsoft.VisualStudio.Services.CircuitBreaker;
using Model.Scut_Script.Common;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading; 

namespace ETModel
{
    public class TestObject
    {
        [NumberField]
        private int v1 { get; set; }
        [NumberField]
        private int v2;
        [NumberField]
        public int v3 { get; set; }
        [NumberField]
        public int v4;
        public TestObject(int v1, int v3 = 0)
        {
            this.v1 = v1; this.v3 = v3;
        }
    }
    public class JsonTest
    {
        public int val1;
        public string val2;
        public JsonTest1 val3;
        public string val4;
        public string[][] val5 = new string[][] { new string[] { "1", "6", "11" }, new string[] { "2", "7", "12" }, new string[] { "3", "8", "13" }, new string[] { "4", "9", "14" }, new string[] { "5", "10", "15" } };
        public string val6;
        public string val7;
        //public string v;
    }
    public class JsonTest1
    {
        public int val1;
        public string val2;
        public JsonTest1 val3;
    }
    public static class IntList
    {
        public static void Insert(this List<int> self, int id)
        {
            var low = 0; //数组最小索引值
            var high = self.Count - 1; //数组最大索引值
            var mid = 0;
            while (low <= high)
            {
                mid = (low + high) / 2;
                if (id == self[mid])
                {
                    return;
                }
                else if (id > self[mid])
                {
                    low = mid + 1;
                }
                else
                {
                    high = mid - 1;
                }
            }
            //if (high == low) {
            if (low >= self.Count) self.Add(id);
            else if (self[low] > id) self.Insert(low, id);
            else self.Insert(low - 1, id);
            //}
            //if (type == 1) self.Insert(high + 1, id);
            //else if (type == 2) self.Insert(low - 1, id);
            //else if()
        }
    }
    public class ProgramTest
    {
        public static void GeneratorIDTest()
        {
            long sta = DateTime.Now.Ticks;
            int Lenght = 10000;
            for (int i = 0; i < Lenght * Lenght; i++) NumberTest(Lenght);
            Console.WriteLine("ID数据生成[" + Lenght * Lenght + "]次，用时:" + (DateTime.Now.Ticks - sta) / (double)(1000 * 1000 * 10) + "秒");
        }

        public static void IntListTast()
        {
            int[] array = new int[10000];
            List<int> temps;
            List<int> nums;
            long sta = DateTime.Now.Ticks;
            for (int i = 0; i < array.Length; i++) array[i] = i;
            for (int count = 0; count < array.Length; count++)
            {
                temps = new List<int>(array);
                nums = new List<int>();
                for (int i = 0; i < array.Length; i++)
                {
                    int index = RandomHelper.RandomNumber(0, temps.Count);
                    nums.Insert(temps[index]);
                    temps.RemoveAt(index);
                }
                //CheckIntList(nums);
            }
            Console.WriteLine("List执行[" + (array.Length * (long)array.Length) + "]次数据插入，用时:" + (DateTime.Now.Ticks - sta) / (double)10000000 + "秒");
        }
      
        //static ConcurrentDictionary<int, BaseUser> dic;
        public async static void UserSeatTest()
        {
            //int intvalue = 0;
            //Console.WriteLine(Interlocked.Increment(ref intvalue) + "，" + intvalue);
            //List<int> userids = new List<int> { 27478, 48576, 63238, 45342, 35903, 48258, 55169, 48499, 68724, 34201 };
            //await Game.Scene.GetComponent<TimerComponent>().WaitAsync(11000);
            ////Console.WriteLine(dic.GetUserByID(1));
            ////Console.WriteLine(dic.TryGetUserByID(1, out BaseUser user));
            //var room = NinePointLobby.instance.GetRoomByRoomID(100051);
            //var tableid = await GlobalDataService.GetTableID_R(10005);
            //NinePointTable tab = new NinePointTable(room._gameid, room, tableid, new cs_createtable_np { bankert = 1, pc = 2, maxpc = 10, maxrate = 5, baserate = room._levelinfo.Baserate, maxCount = 50, dura = 30, o_master = true }, 0, room._levelinfo._min, DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
            ////tab.manager.index = 2;
            //tab.manager.StopTimer();
            //List<NinePointUser> users = new List<NinePointUser>();
            //for (int i = 0; i < userids.Count; i++)
            //{
            //    tUser tbuser = await BaseHelper.GetBase<tUser>(userids[i]);
            //    NinePointUser temp = new NinePointUser();
            //    await temp.InitiChess(room._gameid, room._levelinfo.Id, tbuser, 0, typeof(NinePointRobot));
            //    temp.pos = i + 1;
            //    tab._DicPos2UserWatch[temp.pos] = temp;
            //    users.Add(temp);
            //}
            //Console.WriteLine(tab.GetUserInfos());
            

        }
       


        public static void JsonStringTest()
        {
            return;
            List<KeyValSD> kv = new List<KeyValSD>();
            kv.Add(new KeyValSD() { pos = 1, val = 10 });
            kv.Add(new KeyValSD() { pos = 2, val = 2 });
            kv.Add(new KeyValSD() { pos = 4, val = 25 });
            kv.Add(new KeyValSD() { pos = 5, val = 5 });
            kv.Add(new KeyValSD() { pos = 6, val = 70 });
            kv.Add(new KeyValSD() { pos = 7, val = 1 });
           var key =  KeyValueOrderHelper.Order(kv);

            Console.WriteLine(CryptoHelper.DES_Decrypt("5D17043A6F4F02107B0C0280813ABE46FB98276FCA666B215D9007C81D4885B9ADF63DDE8F6AE0FC553CF74E3B1C0BA21B0ADE6D7ECBBF982A8D4CFFA714D805CB53CCDE993421A51AFA7E7C0557169CD3E37266F467BD492C18D37D458CD586541A2E26831280BA6715074E3C9B6B79A145D36658761A270FB350183588E1A3"));

            StringBuilder sb = new StringBuilder().Append('"').Append(',').Append('"').Append(',').Append('"').Append("asdfasdfad").Append('"').Append(',').Append('"').Append("aasdfawerdassdf").Append('"').Append(',').Append('"').Append("asdfasdfasdf").Append('"').Append(',').Append('\\');
            string str = sb.ToString();// "\"\",\"asdfawerqwe\",\"asdfasdfad\",\"aasdfawerdassdf\",\"asdfasdfasdf\"";
            Console.WriteLine(str);

            JsonTest obj = new JsonTest() { val1 = 1, val2 = "1", val3 = new JsonTest1() { val1 = 2, val2 = "2" }, val4 = "1324123412", val6 = str, val7 = str };
            var fields = obj.GetType().GetFields();
            string json = JsonUtils.Serialize(obj);
            Console.WriteLine("val6:" + json.GetObjectStringFromJson("val6"));
            for (int i = 0; i < fields.Length; i++)
            {
                Console.WriteLine(fields[i].Name + ":" + json.GetObjectStringFromJson(fields[i].Name));
            }
            Console.WriteLine("val2:" + json.GetIntFromJsonString("val2"));
            Console.WriteLine("val4:" + json.GetIntFromJsonString("val4"));
            Console.WriteLine("val5:" + JsonUtils.Serialize(JsonUtils.Deserialize<string[][]>(json.GetObjectStringFromJson("val5"))));
        }
        [NumberField]
        public long number { get; set; }
        [NumberField]
        public long number1 { get; set; }
        public static void ValueTypeTest()
        {
            object[] objs = new object[] { (int)0, DateTime.Now, new GameData(), Guid.NewGuid(), "", false, (decimal)1, MemberType.Key, new int[0], new List<object>(), new object[0], new Dictionary<int, int>(), new HashSet<object>(), new int[3, 4] };
            for (int i = 0; i < objs.Length; i++)
            {
                Console.WriteLine("=========================[" + objs[i].GetType() + "]=========================");
                Console.WriteLine("类型[" + objs[i].GetType() + "]" + (objs[i].GetType().IsValueType ? "为值类型" : "不是值类型"));
                if (objs[i].GetType().IsArray) Console.WriteLine("类型[" + objs[i].GetType() + "],IsArray:" + objs[i].GetType().IsArray);
                if (objs[i].GetType().IsSZArray) Console.WriteLine("类型[" + objs[i].GetType() + "],IsSZArray:" + objs[i].GetType().IsSZArray);
                if (objs[i].GetType().IsVariableBoundArray) Console.WriteLine("类型[" + objs[i].GetType() + "],IsVariableBoundArray:" + objs[i].GetType().IsVariableBoundArray);
                if (objs[i].GetType().IsAnsiClass) Console.WriteLine("类型[" + objs[i].GetType() + "],IsAnsiClass:" + objs[i].GetType().IsAnsiClass);
                if (objs[i].GetType().IsAutoClass) Console.WriteLine("类型[" + objs[i].GetType() + "],IsAutoClass:" + objs[i].GetType().IsAutoClass);
                if (objs[i].GetType().IsAutoLayout) Console.WriteLine("类型[" + objs[i].GetType() + "],IsAutoLayout:" + objs[i].GetType().IsAutoLayout);
                if (objs[i].GetType().IsByRef) Console.WriteLine("类型[" + objs[i].GetType() + "],IsByRef:" + objs[i].GetType().IsByRef);
                if (objs[i].GetType().IsByRefLike) Console.WriteLine("类型[" + objs[i].GetType() + "],IsByRefLike:" + objs[i].GetType().IsByRefLike);
                if (objs[i].GetType().IsClass) Console.WriteLine("类型[" + objs[i].GetType() + "],IsClass:" + objs[i].GetType().IsClass);
                if (objs[i].GetType().IsCollectible) Console.WriteLine("类型[" + objs[i].GetType() + "],IsCollectible:" + objs[i].GetType().IsCollectible);
                if (objs[i].GetType().IsCOMObject) Console.WriteLine("类型[" + objs[i].GetType() + "],IsCOMObject:" + objs[i].GetType().IsCOMObject);
                if (objs[i].GetType().IsConstructedGenericType) Console.WriteLine("类型[" + objs[i].GetType() + "],IsConstructedGenericType:" + objs[i].GetType().IsConstructedGenericType);
                if (objs[i].GetType().IsContextful) Console.WriteLine("类型[" + objs[i].GetType() + "],IsContextful:" + objs[i].GetType().IsContextful);
                if (objs[i].GetType().IsEnum) Console.WriteLine("类型[" + objs[i].GetType() + "],IsEnum:" + objs[i].GetType().IsEnum);
                if (objs[i].GetType().IsExplicitLayout) Console.WriteLine("类型[" + objs[i].GetType() + "],IsExplicitLayout:" + objs[i].GetType().IsExplicitLayout);
                if (objs[i].GetType().IsGenericMethodParameter) Console.WriteLine("类型[" + objs[i].GetType() + "],IsGenericMethodParameter:" + objs[i].GetType().IsGenericMethodParameter);
                if (objs[i].GetType().IsGenericParameter) Console.WriteLine("类型[" + objs[i].GetType() + "],IsGenericParameter:" + objs[i].GetType().IsGenericParameter);
                if (objs[i].GetType().IsGenericType) Console.WriteLine("类型[" + objs[i].GetType() + "],IsGenericType:" + objs[i].GetType().IsGenericType);
                if (objs[i].GetType().IsGenericTypeDefinition) Console.WriteLine("类型[" + objs[i].GetType() + "],IsGenericTypeDefinition:" + objs[i].GetType().IsGenericTypeDefinition);
                if (objs[i].GetType().IsGenericTypeParameter) Console.WriteLine("类型[" + objs[i].GetType() + "],IsGenericTypeParameter:" + objs[i].GetType().IsGenericTypeParameter);
                if (objs[i].GetType().IsImport) Console.WriteLine("类型[" + objs[i].GetType() + "],IsImport:" + objs[i].GetType().IsImport);
                if (objs[i].GetType().IsInterface) Console.WriteLine("类型[" + objs[i].GetType() + "],IsInterface:" + objs[i].GetType().IsInterface);
                if (objs[i].GetType().IsLayoutSequential) Console.WriteLine("类型[" + objs[i].GetType() + "],IsLayoutSequential:" + objs[i].GetType().IsLayoutSequential);
                if (objs[i].GetType().IsMarshalByRef) Console.WriteLine("类型[" + objs[i].GetType() + "],IsMarshalByRef:" + objs[i].GetType().IsMarshalByRef);
                if (objs[i].GetType().IsNested) Console.WriteLine("类型[" + objs[i].GetType() + "],IsNested:" + objs[i].GetType().IsNested);
                if (objs[i].GetType().IsNestedAssembly) Console.WriteLine("类型[" + objs[i].GetType() + "],IsNestedAssembly:" + objs[i].GetType().IsNestedAssembly);
                if (objs[i].GetType().IsNestedFamANDAssem) Console.WriteLine("类型[" + objs[i].GetType() + "],IsNestedFamANDAssem:" + objs[i].GetType().IsNestedFamANDAssem);
                if (objs[i].GetType().IsNestedFamily) Console.WriteLine("类型[" + objs[i].GetType() + "],IsNestedFamily:" + objs[i].GetType().IsNestedFamily);
                if (objs[i].GetType().IsNestedFamORAssem) Console.WriteLine("类型[" + objs[i].GetType() + "],IsNestedFamORAssem:" + objs[i].GetType().IsNestedFamORAssem);
                if (objs[i].GetType().IsNestedPrivate) Console.WriteLine("类型[" + objs[i].GetType() + "],IsNestedPrivate:" + objs[i].GetType().IsNestedPrivate);
                if (objs[i].GetType().IsNestedPublic) Console.WriteLine("类型[" + objs[i].GetType() + "],IsNestedPublic:" + objs[i].GetType().IsNestedPublic);
                if (objs[i].GetType().IsNotPublic) Console.WriteLine("类型[" + objs[i].GetType() + "],IsNotPublic:" + objs[i].GetType().IsNotPublic);
                if (objs[i].GetType().IsPointer) Console.WriteLine("类型[" + objs[i].GetType() + "],IsPointer:" + objs[i].GetType().IsPointer);
                if (objs[i].GetType().IsPrimitive) Console.WriteLine("类型[" + objs[i].GetType() + "],IsPrimitive:" + objs[i].GetType().IsPrimitive);
                if (objs[i].GetType().IsPublic) Console.WriteLine("类型[" + objs[i].GetType() + "],IsPublic:" + objs[i].GetType().IsPublic);
                if (objs[i].GetType().IsSealed) Console.WriteLine("类型[" + objs[i].GetType() + "],IsSealed:" + objs[i].GetType().IsSealed);
                if (objs[i].GetType().IsSecurityCritical) Console.WriteLine("类型[" + objs[i].GetType() + "],IsSecurityCritical:" + objs[i].GetType().IsSecurityCritical);
                if (objs[i].GetType().IsSecuritySafeCritical) Console.WriteLine("类型[" + objs[i].GetType() + "],IsSecuritySafeCritical:" + objs[i].GetType().IsSecuritySafeCritical);
                if (objs[i].GetType().IsSecurityTransparent) Console.WriteLine("类型[" + objs[i].GetType() + "],IsSecurityTransparent:" + objs[i].GetType().IsSecurityTransparent);
                if (objs[i].GetType().IsSerializable) Console.WriteLine("类型[" + objs[i].GetType() + "],IsSerializable:" + objs[i].GetType().IsSerializable);
                if (objs[i].GetType().IsSignatureType) Console.WriteLine("类型[" + objs[i].GetType() + "],IsSignatureType:" + objs[i].GetType().IsSignatureType);
                if (objs[i].GetType().IsSpecialName) Console.WriteLine("类型[" + objs[i].GetType() + "],IsSpecialName:" + objs[i].GetType().IsSpecialName);
                if (objs[i].GetType().IsTypeDefinition) Console.WriteLine("类型[" + objs[i].GetType() + "],IsTypeDefinition:" + objs[i].GetType().IsTypeDefinition);
                if (objs[i].GetType().IsUnicodeClass) Console.WriteLine("类型[" + objs[i].GetType() + "],IsUnicodeClass:" + objs[i].GetType().IsUnicodeClass);
                if (objs[i].GetType().IsVisible) Console.WriteLine("类型[" + objs[i].GetType() + "],IsVisible:" + objs[i].GetType().IsVisible);
                Console.WriteLine("\r\n");
            }

        }
        public static void ArrayTest()
        {
            //var stype=typeof(string);
            //var ieqatablename=typeof(IEquatable<>).FullName;
            //var ieqtype= Type.GetType(ieqatablename);
            //if (!(stype.GetInterfaces().Where(p=>p.IsGenericType&&p.GetGenericTypeDefinition().GetTypeInfo().FullName.Equals(ieqatablename)).ToList().Count>0)) {
            //    Console.WriteLine();
            //}
            int[,,,,,] arrays = new int[2, 2, 2, 2, 2, 2] { { { { { { 1, 2 }, { 3, 5 } }, { { 6, 7 }, { 8, 9 } } }, { { { 10, 11 }, { 14, 66 } }, { { 67, 69 }, { 111, 112 } } } }, { { { { 115, 116 }, { 121, 122 } }, { { 131, 132 }, { 133, 134 } } }, { { { 152, 153 }, { 119, 118 } }, { { 115, 117 }, { 124, 1321 } } } } }, { { { { { 11221, 11433 }, { 13211, 543234 } }, { { 434232343, 5453 }, { 3232, 4564 } } }, { { { 11223, 234 }, { 4353, 6523 } }, { { 34, 224 }, { 34532, 65 } } } }, { { { { 234534, 6756 }, { 1231, 533 } }, { { 3456, 755 }, { 76863, 1134 } } }, { { { 34535, 76575 }, { 2345234, 6464 } }, { { 3242, 465456 }, { 24255464, 7688754 } } } } } };
            using (MemoryStream stream = new MemoryStream())
            {
                stream.WriteTo(arrays);
                stream.Seek(0, 0);
                var arrays1 = stream.ReadArray(arrays.GetType());
                if (!arrays.MyEquals(arrays1)) Console.WriteLine("================ 对象比较结果不同 ================");
                Console.WriteLine(JsonUtils.Serialize(arrays));
                Console.WriteLine(JsonUtils.Serialize(arrays1));

                //stream.WriteTo(arrays.Length);
                //for (int i = 0; i < arrays.Length; i++) stream.WriteTo(arrays[i]);
                //stream.Seek(0, 0);
                //int[] arr2 = (int[])stream.ReadArray(array.GetType());
                //Console.WriteLine(JsonUtils.Serialize(array));
                //Console.WriteLine(JsonUtils.Serialize(arr2));
            }
            int[][] arrs = new int[][] { new int[] { 1, 3, 45, 22 }, new int[] { 3434, 556, 3242, 665 } };
            using (MemoryStream stream = new MemoryStream())
            {
                stream.WriteTo(arrs);
                stream.Seek(0, 0);
                var arrays1 = stream.ReadArray(arrs.GetType());
                if (!arrs.MyEquals(arrays1)) Console.WriteLine("================ 对象比较结果不同 ================");
                Console.WriteLine(JsonUtils.Serialize(arrs));
                Console.WriteLine(JsonUtils.Serialize(arrays1));
                //stream.WriteTo(arrays.Length);
                //for (int i = 0; i < arrays.Length; i++) stream.WriteTo(arrays[i]);
                //stream.Seek(0, 0);
                //int[] arr2 = (int[])stream.ReadArray(array.GetType());
                //Console.WriteLine(JsonUtils.Serialize(array));
                //Console.WriteLine(JsonUtils.Serialize(arr2));
            }

        }
        //public static void StreamWriteTo(MemoryStream stream, Array array)
        //{
        //    stream.WriteTo(array.Rank);
        //    for (int i = 0; i < array.Rank; i++) stream.WriteTo(array.GetLength(i));
        //    StreamWriteTo(stream, new List<int>(), array, 0);
        //}
        //public static void StreamWriteTo(MemoryStream stream, List<int> indexs, Array array, int rank)
        //{
        //    if (array.Rank <= rank) for (int i = 0; i < array.GetLength(rank - 1); i++) stream.WriteTo(array.GetType().GetElementType(), array.GetValue(indexs.ToArray()));
        //    //else for (int i = 0; i < array.GetLength(rank); i++) StreamWriteTo(stream, array, rank + 1);
        //    else for (int i = 0; i < array.GetLength(rank); i++) { List<int> indexlist = new List<int>(indexs); indexlist.Add(i); StreamWriteTo(stream, indexlist, array, rank + 1); }

        //}

        //public static Array StreamReadArray(MemoryStream stream, Type type)
        //{
        //    var ranks = new int[stream.ReadInt32()];
        //    for (int i = 0; i < ranks.Length; i++) ranks[i] = stream.ReadInt32();
        //    Array array = Array.CreateInstance(type.GetElementType(), ranks);
        //    StreamReadArray(stream, new List<int>(), array, 0);
        //    return array;
        //}

        //public static void StreamReadArray(MemoryStream stream, List<int> indexs, Array array, int rank)
        //{
        //    if (array.Rank <= rank) for (int i = 0; i < array.GetLength(rank - 1); i++) array.SetValue(stream.Read(array.GetType().GetElementType()), indexs.ToArray());
        //    else for (int i = 0; i < array.GetLength(rank); i++) { List<int> indexlist = new List<int>(indexs); indexlist.Add(i); StreamReadArray(stream, indexlist, array, rank + 1); }
        //}


        //public static void ArrayRun(Array array, int rank, int r)
        //{
        //    if ()
        //        for (int i = 0; i < array.GetLength(r); i++)
        //        {
        //            ArrayRun()
        //        }
        //}
        public static void AttributeTest()
        {
            //byte[] bbs = new byte[4];
            //bbs.WriteTo(0,999900);
            //var encoder=Encoding.BigEndianUnicode;
            //Console.WriteLine(encoder.GetBytes(encoder.GetString(bbs)).ReadInt32(0));
            //int[] a = new int[] { 1, 2, 3 };
            //Console.WriteLine(a.GetType().IsAssignableFrom(typeof(ICollection)) + "," + typeof(ICollection).IsAssignableFrom(a.GetType()));
            //Type intarrtype = a.GetType();
            //Console.WriteLine(intarrtype + "," + intarrtype.DeclaringType + "," + intarrtype.GenericTypeArguments + "," + intarrtype.GetElementType());
            Dictionary<int, string> dic = new Dictionary<int, string>();
            dic.Add(1, "2342"); dic.Add(2, ""); dic.Add(31, "345643563"); dic.Add(4, "234132"); dic.Add(5, "5674564");
            using (MemoryStream stream = new MemoryStream())
            {
                stream.WriteTo(dic.GetType(), dic);
                stream.Seek(0, 0);
                var dic1 = stream.Read(dic.GetType());
                if (!dic.MyEquals(dic1)) Console.WriteLine("================ 对象比较结果不同 ================");
                Console.WriteLine(JsonUtils.Serialize(dic));
                Console.WriteLine(JsonUtils.Serialize(dic1));
            }
            var kv = KeyValuePair.Create(1, "12312");
            using (MemoryStream stream = new MemoryStream())
            {
                stream.WriteTo(kv.GetType(), kv);
                stream.Seek(0, 0);
                var kv1 = stream.Read(kv.GetType());
                if (!kv.MyEquals(kv1)) Console.WriteLine("================ 对象比较结果不同 ================");
                Console.WriteLine(JsonUtils.Serialize(kv));
                Console.WriteLine(JsonUtils.Serialize(kv1));
            }
            
            int[] arr = new int[] { 34431, 43544, 67, 57, 7856, 9, 789, 87, 09, 90, 89 };
            int[,] array = new int[,] { { 1, 2 }, { 3, 4 }, { 5, 6 }, { 7, 8 } };
            List<int> list = new List<int>() { 1, 2, 3, 4, 65, 7, 353, 5354353 };
            using (MemoryStream stream = new MemoryStream())
            {
                stream.WriteTo(list.GetType(), list);
                stream.Seek(0, 0);
                var arr2 = stream.Read(list.GetType());
                if (!list.MyEquals(arr2)) Console.WriteLine("================ 对象比较结果不同 ================");
                Console.WriteLine(JsonUtils.Serialize(list));
                Console.WriteLine(JsonUtils.Serialize(arr2));
            }

            using (MemoryStream stream = new MemoryStream())
            {
                stream.WriteTo(array);
                stream.Seek(0, 0);
                var arr2 = stream.Read(array.GetType());
                if (!array.MyEquals(arr2)) Console.WriteLine("================ 对象比较结果不同 ================");
                Console.WriteLine(JsonUtils.Serialize(array));
                Console.WriteLine(JsonUtils.Serialize(arr2));
            }
            using (MemoryStream stream = new MemoryStream())
            {
                stream.WriteTo(arr);
                stream.Seek(0, 0);
                var arr2 = stream.Read(arr.GetType());
                if (!arr.MyEquals(arr2)) Console.WriteLine("================ 对象比较结果不同 ================");
                Console.WriteLine(JsonUtils.Serialize(arr));
                Console.WriteLine(JsonUtils.Serialize(arr2));
            } 

            TestObject obj = new TestObject(1);
            var ps = obj.GetType().GetRuntimeProperties();
            int count = 5;

            foreach (var pinfo in ps)
            {
                Console.WriteLine("属性[" + pinfo.Name + ":" + pinfo.PropertyType + "]变更前:" + pinfo.GetValue(obj));
                pinfo.SetValue(obj, (int)pinfo.GetValue(obj) + count++);
                Console.WriteLine("属性[" + pinfo.Name + ":" + pinfo.PropertyType + "]变更后:" + pinfo.GetValue(obj));
            }
            var fs = obj.GetType().GetRuntimeFields();
            foreach (var finfo in fs)
            {
                if (!finfo.Name.StartsWith("<"))
                {
                    Console.WriteLine("字段[" + finfo.Name + ":" + finfo.FieldType + "]变更前:" + finfo.GetValue(obj));
                    finfo.SetValue(obj, (int)finfo.GetValue(obj) + count++);
                    Console.WriteLine("字段[" + finfo.Name + ":" + finfo.FieldType + "]变更后:" + finfo.GetValue(obj));
                }
            }

            var info = typeof(ProgramTest).GetProperty("number");
            var info1 = typeof(ProgramTest).GetProperty("number1");
            //DateTime sta;
            var attr = CommonFun.GetAttribute<NumberFieldAttribute>(info);
            var attr1 = CommonFun.GetAttribute<NumberFieldAttribute>(info);
            var attr3 = CommonFun.GetAttribute<NumberFieldAttribute>(info1);
            var attr4 = CommonFun.GetAttribute<NumberFieldAttribute>(info1);

            //Console.WriteLine(attr.Tag + "_" + attr1.Tag);
        }
        static UpperLimitNumberGenerator generator = UpperLimitNumberGenerator.Generator(6);
        static List<int> ints = new List<int>();
        static int basenum = 5000000;
        public static int[] ids = new int[] { 10001 + generator.basevalue, 10002 + generator.basevalue, 10003 + generator.basevalue, 10001 + generator.basevalue, 10002 + generator.basevalue, 10003 + generator.basevalue };
        public static void stream()
        {
            //RobotDataRsp rsp = new RobotDataRsp() { userid = 1, data = "123456789" };
            //GlobalInfoReply reply = new GlobalInfoReply() { RpcId = 1, Message = JsonUtils.Serialize(rsp) };
            //Console.WriteLine(JsonUtils.Serialize(reply));
            //memoryStream.WriteTo(1);
            //MyJsonPacker packer = new MyJsonPacker();
            //memoryStream.Seek(Packet.MessageIndex, SeekOrigin.Begin);
            //packer.SerializeTo(reply, memoryStream);
            //memoryStream.Seek(Packet.MessageIndex, SeekOrigin.Begin);
            //var reply1 = packer.DeserializeFrom(reply, memoryStream);
            //Console.WriteLine(JsonUtils.Serialize(reply1));
            //memoryStream.Write();
            MemoryStream memoryStream = new MemoryStream();
            byte[] bytes = new byte[8];
            var sta = DateTime.Now;
            ReadInt16(memoryStream);
            Console.WriteLine("Stream.int16:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadInt32(memoryStream);
            Console.WriteLine("Stream.int32:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadInt64(memoryStream);
            Console.WriteLine("Stream.int64:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadUInt16(memoryStream);
            Console.WriteLine("Stream.uint16:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadUInt32(memoryStream);
            Console.WriteLine("Stream.uint32:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadUInt64(memoryStream);
            Console.WriteLine("Stream.uint64:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadFloat(memoryStream);
            Console.WriteLine("Stream.float:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadDouble(memoryStream);
            Console.WriteLine("Stream.double:" + sta.ToSpanMilliSeconds(DateTime.Now));
            Console.WriteLine("");

            sta = DateTime.Now;
            ReadInt16(bytes);
            Console.WriteLine("Byte.int16:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadInt32(bytes);
            Console.WriteLine("Byte.int32:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadInt64(bytes);
            Console.WriteLine("Byte.int64:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadUInt16(bytes);
            Console.WriteLine("Byte.uint16:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadUInt32(bytes);
            Console.WriteLine("Byte.uint32:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadUInt64(bytes);
            Console.WriteLine("Byte.uint64:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadFloat(bytes);
            Console.WriteLine("Byte.float:" + sta.ToSpanMilliSeconds(DateTime.Now));
            sta = DateTime.Now;
            ReadDouble(bytes);
            Console.WriteLine("Byte.double:" + sta.ToSpanMilliSeconds(DateTime.Now));
        }
        public static void ReadInt32(byte[] bytes)
        {
            for (int i = int.MinValue; i <= int.MinValue + basenum * 2; i++)
            {
                bytes.WriteTo(0, i);
                int num = bytes.ReadInt32(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }

            for (int i = -basenum; i <= basenum; i++)
            {
                bytes.WriteTo(0, i);
                int num = bytes.ReadInt32(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (int i = int.MaxValue; i >= int.MaxValue - basenum * 2; i--)
            {
                bytes.WriteTo(0, i);
                int num = bytes.ReadInt32(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }
        public static void ReadUInt32(byte[] bytes)
        {
            uint mid = uint.MaxValue / 2;
            for (uint i = 0; i <= basenum * 2; i++)
            {
                bytes.WriteTo(0, i);
                uint num = bytes.ReadUInt32(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }

            for (uint i = mid - (uint)basenum; i <= mid + basenum; i++)
            {
                bytes.WriteTo(0, i);
                uint num = bytes.ReadUInt32(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (uint i = uint.MaxValue; i >= uint.MaxValue - basenum * 2; i--)
            {
                bytes.WriteTo(0, i);
                uint num = bytes.ReadUInt32(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }

        public static void ReadInt16(byte[] bytes)
        {
            for (short i = short.MinValue; i < short.MaxValue; i++)
            {
                bytes.WriteTo(0, i);
                short num = bytes.ReadInt16(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }
        public static void ReadUInt16(byte[] bytes)
        {
            for (ushort i = 0; i < ushort.MaxValue; i++)
            {
                bytes.WriteTo(0, i);
                ushort num = bytes.ReadUInt16(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }


        public static void ReadInt64(byte[] bytes)
        {
            for (long i = long.MinValue; i <= long.MinValue + basenum * 2; i++)
            {
                bytes.WriteTo(0, i);
                long num = bytes.ReadInt64(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (long i = -basenum; i <= basenum; i++)
            {
                bytes.WriteTo(0, i);
                long num = bytes.ReadInt64(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (long i = long.MaxValue; i >= long.MaxValue - basenum * 2; i--)
            {
                bytes.WriteTo(0, i);
                long num = bytes.ReadInt64(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }

        }
        public static void ReadUInt64(byte[] bytes)
        {
            ulong mid = ulong.MaxValue / 2;

            for (ulong i = 0; i <= (ulong)basenum * 2; i++)
            {
                bytes.WriteTo(0, i);
                ulong num = bytes.ReadUInt64(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (ulong i = mid - (ulong)basenum; i <= mid + (ulong)basenum; i++)
            {
                bytes.WriteTo(0, i);
                ulong num = bytes.ReadUInt64(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (ulong i = ulong.MaxValue; i >= ulong.MaxValue - (ulong)basenum * 2; i--)
            {
                bytes.WriteTo(0, i);
                ulong num = bytes.ReadUInt64(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }
        public static void ReadFloat(byte[] bytes)
        {
            for (float i = 0; i <= float.Epsilon * basenum * 2; i += float.Epsilon)
            {
                bytes.WriteTo(0, i);
                float num = bytes.ReadSingle(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (float i = -(float.Epsilon * basenum * 2); i < 0; i += float.Epsilon)
            {
                bytes.WriteTo(0, i);
                float num = bytes.ReadSingle(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }
        public static void ReadDouble(byte[] bytes)
        {
            for (double i = -(double.Epsilon * basenum * 2); i < 0; i += double.Epsilon)
            {
                bytes.WriteTo(0, i);
                double num = bytes.ReadDouble(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (double i = 0; i <= double.Epsilon * basenum * 2; i += double.Epsilon)
            {
                bytes.WriteTo(0, i);
                double num = bytes.ReadDouble(0);
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }

        public static void ReadInt32(MemoryStream memoryStream)
        {
            for (int i = int.MinValue; i <= int.MinValue + basenum * 2; i++)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                int num = memoryStream.ReadInt32();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }

            for (int i = -basenum; i <= basenum; i++)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                int num = memoryStream.ReadInt32();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (int i = int.MaxValue; i >= int.MaxValue - basenum * 2; i--)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                int num = memoryStream.ReadInt32();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }

        public static void ReadUInt32(MemoryStream memoryStream)
        {
            uint mid = uint.MaxValue / 2;
            for (uint i = 0; i <= basenum * 2; i++)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                uint num = memoryStream.ReadUInt32();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }

            for (uint i = mid - (uint)basenum; i <= mid + basenum; i++)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                uint num = memoryStream.ReadUInt32();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (int i = int.MaxValue; i >= int.MaxValue - basenum * 2; i--)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                uint num = memoryStream.ReadUInt32();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }

        public static void ReadInt16(MemoryStream memoryStream)
        {
            for (short i = short.MinValue; i < short.MaxValue; i++)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                short num = memoryStream.ReadInt16();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }
        public static void ReadUInt16(MemoryStream memoryStream)
        {
            for (ushort i = 0; i < ushort.MaxValue; i++)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                ushort num = memoryStream.ReadUInt16();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }


        public static void ReadInt64(MemoryStream memoryStream)
        {
            for (long i = long.MinValue; i <= long.MinValue + basenum * 2; i++)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                long num = memoryStream.ReadInt64();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (long i = -basenum; i <= basenum; i++)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                long num = memoryStream.ReadInt64();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (long i = long.MaxValue; i >= long.MaxValue - basenum * 2; i--)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                long num = memoryStream.ReadInt64();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }
        public static void ReadUInt64(MemoryStream memoryStream)
        {
            ulong mid = ulong.MaxValue / 2;
            for (ulong i = 0; i <= (ulong)basenum * 2; i++)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                ulong num = memoryStream.ReadUInt64();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (ulong i = mid - (ulong)basenum; i <= mid + (ulong)basenum; i++)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                ulong num = memoryStream.ReadUInt64();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (ulong i = ulong.MaxValue; i >= ulong.MaxValue - (ulong)basenum * 2; i--)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                ulong num = memoryStream.ReadUInt64();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }
        public static void ReadFloat(MemoryStream memoryStream)
        {
            for (float i = 0; i <= float.Epsilon * basenum * 2; i += float.Epsilon)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                float num = memoryStream.ReadSingle();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (float i = -(float.Epsilon * basenum * 2); i < 0; i += float.Epsilon)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                float num = memoryStream.ReadSingle();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }
        public static void ReadDouble(MemoryStream memoryStream)
        {
            for (double i = -(double.Epsilon * basenum * 2); i < 0; i += double.Epsilon)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                double num = memoryStream.ReadDouble();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
            for (double i = 0; i <= double.Epsilon * basenum * 2; i += double.Epsilon)
            {
                memoryStream.Seek(0, 0);
                memoryStream.WriteTo(i);
                memoryStream.Seek(0, 0);
                double num = memoryStream.ReadDouble();
                if (num != i)
                {
                    Console.WriteLine($"{i}不等于{num}");
                }
            }
        }

        public static void GeneratorTableID()
        {
            int[] array = new int[generator.node.InitCount];
            for (int i = 0; i < array.Length; i++)
            {
                array[i] = (int)generator.generator();
            }
            for (int x = 0; x < array.Length; x++)
            {
                List<int> temps = new List<int>(array);
                for (int i = 0; i < array.Length; i++)
                {
                    int index = RandomHelper.RandomNumber(0, temps.Count);
                    generator.recycle(temps[index]);
                    temps.RemoveAt(index);
                }
                for (int i = 0; i < array.Length; i++) generator.exclude(array[i]);
                temps = new List<int>(array);
                for (int i = 0; i < array.Length; i++)
                {
                    int index = RandomHelper.RandomNumber(0, temps.Count);
                    generator.recycle(temps[index]);
                    temps.RemoveAt(index);
                }
                for (int i = 0; i < array.Length; i++) generator.generator();
            }
            Console.WriteLine("已经生成编号[" + (generator.node.InitCount - generator.node.remainCount) + "]个");
            //UpperLimitNumberGenerator generator = null;
            //generator = UpperLimitNumberGenerator.Generator(1);
            //generator = UpperLimitNumberGenerator.Generator(3);
            //generator = UpperLimitNumberGenerator.Generator(4);
            //generator = UpperLimitNumberGenerator.Generator(5);
            //generator = UpperLimitNumberGenerator.Generator(6);
            //generator = UpperLimitNumberGenerator.Generator(7);
            //generator = UpperLimitNumberGenerator.Generator(8);
            //generator = UpperLimitNumberGenerator.Generator(9);
            //generator = UpperLimitNumberGenerator.Generator(10);

            //generator = new UpperLimitNumberGenerator(1000000);
            //generator = new UpperLimitNumberGenerator(990000);
            //generator = new UpperLimitNumberGenerator(900000);
            //generator = new UpperLimitNumberGenerator(800000);
            //generator = new UpperLimitNumberGenerator(700000);
            //generator = new UpperLimitNumberGenerator(600000);
            //generator = new UpperLimitNumberGenerator(500000);
            //generator = new UpperLimitNumberGenerator(400000);
            //generator = new UpperLimitNumberGenerator(300000);
            //generator = new UpperLimitNumberGenerator(200000);
            //generator = new UpperLimitNumberGenerator(100001);
            //generator = new UpperLimitNumberGenerator(100000);
            //generator.node.printChildAll();
            //generator.add(1000 + generator.basevalue);
            //generator.add(1000 + generator.basevalue);
            //generator.add(1000 + generator.basevalue);
            //generator.add(1001 + generator.basevalue);
            //for (int i = 0; i < ids.Length; i++)
            //{
            //    generator.add(ids[i]);
            //}
            List<int> ids = new List<int>();
            int addcount = (int)generator.node.getRemainCount() / 20;
            for (int i = 0; i < addcount; i++)
            {
                generator.exclude(i + generator.basevalue);
                ids.Add(i + generator.basevalue);
            }
            DateTime end;
            DateTime sta;
            int len = (int)generator.node.getRemainCount() / 20;
            List<int> list = new List<int>(len);
            //for (int x = 0; x < 100; x++)
            //{
            list.Clear();
            sta = DateTime.Now;
            for (int i = 0; i < len; i++)
            {
                var num = (int)generator.generator();
                //list.Add(num);
                if (num < 0)
                {
                    Console.WriteLine($"生成第[{list.Count}]个编号时产生错误编号:[{num}]");
                }
                generator.recycle(num);
            }
            end = DateTime.Now;
            Console.WriteLine($"生成[{len}]次,用时:" + (double)sta.ToSpanMilliSeconds(end) / 1000);
            for (int i = 0; i < list.Count; i++)
            {
                for (int j = 0; j < ids.Count; j++)
                {
                    if (list[i] == ids[j])
                    {
                        Console.WriteLine($"错误编号[{list[i]}],[i={i}],[j={j}]:" + ids[j]);
                    }
                }
            }

            sta = DateTime.Now;
            for (int i = 0; i < list.Count; i++)
            {
                generator.recycle(list[i]);
            }

            //}
            Dictionary<int, int> dic = new Dictionary<int, int>();
            for (int i = 0; i < list.Count; i++)
            {
                if (!dic.TryGetValue(list[i], out int count))
                {
                    dic[list[i]] = 0;
                }
                dic[list[i]]++;
            }
            end = DateTime.Now;
            Console.WriteLine($"回收[{len}]次,用时:" + (double)sta.ToSpanMilliSeconds(end) / 1000);
            //generator.node.printChildAll();

            //foreach (var item in dic)
            //{
            //    if (item.Value > 1) Console.WriteLine(item.Key + "      " + item.Value);
            //}
            //Console.WriteLine($"生成第[{list.Count}]个编号时产生错误编号:[{num}]");

        }
        private static void NumberTest(int len)
        {
            if (ints.Count >= len) RecycleID();
            else if (ints.Count <= 0) GeneratorID();
            else if (RandomHelper.RandomNumber(0, 2) == 0) GeneratorID();
            else RecycleID();
            //{
            //    if (RandomHelper.RandomNumber(0, 2) == 0) RecycleID();
            //    else GeneratorID();
            //}
            //if(generator.node.InitCount-generator.node.remainCount)
        }
        private static void RecycleID()
        {
            int index = RandomHelper.RandomNumber(0, ints.Count);
            generator.recycle(ints[index]);
            ints.RemoveAt(index);
        }
        private static void GeneratorID()
        {
            ints.Insert((int)generator.generator());
        } 
        public static async void NumberFieldTest(int gameid)
        {
            int playerID = 1009;
            var tuser = await BaseHelper.GetBase<tUser>(playerID);
            long initgold = tuser.GetGoldAndWinGold;
            Console.WriteLine("玩家[" + playerID + "]初始金币为[" + tuser.GetGoldAndWinGold + "]");
            await Game.Scene.GetComponent<TimerComponent>().WaitAsync(1000);
            long TotalGold = 0;
            int len = 5000;
            for (int i = 0; i < len; i++)
            {
                int gold = RandomHelper.RandomNumber(-10000, 10000);
                tuser.Gold += gold;
                TotalGold += gold;
                await BaseHelper.AddOrUpdateBase(tuser);
                //await Game.Scene.GetComponent<TimerComponent>().WaitAsync(2);
            }
            Console.WriteLine("对玩家[" + playerID + ":" + initgold + "]进行[" + len + "]次金币变更,变更金额为[" + TotalGold + "],玩家当前金币为[" + tuser.GetGoldAndWinGold + "]");
        }
        public static async void AtomicBooleanTest()
        {
            AtomicBoolean islock = new AtomicBoolean();
            Console.WriteLine(islock.CompareAndSet(true, true) + "," + islock);
            Console.WriteLine(islock.CompareAndSet(false, true) + "," + islock);
            Console.WriteLine(islock.CompareAndSet(false, false) + "," + islock);
            Console.WriteLine(islock.Exchange(false) + "," + islock);
        }
        public static void DicEncodTest()
        {
            MemoryStream stream = new MemoryStream();
            Dictionary<int, Dictionary<int, string>> dic = new Dictionary<int, Dictionary<int, string>>();
            //Dictionary<int, int> dic2 = new Dictionary<int, int>();
            //if (dic.GetType() == dic2.GetType()) Console.WriteLine("错误");
            for (int i = 0; i < 50; i++) { Dictionary<int, string> objs = new Dictionary<int, string>(); objs.Add(i, i.ToString()); dic.Add(i, objs); }
            stream.WriteTo(dic);
            stream.Seek(0L, SeekOrigin.Begin);
            var dic1 = stream.ReadDic(typeof(Dictionary<int, Dictionary<int, string>>));
            if (!dic1.MyEquals(dic)) Console.WriteLine("错误");
        }
        public async static void AgentTest()
        {
            await Game.Scene.GetComponent<TimerComponent>().WaitAsync(2000);
            var userids = new int[] { 101, 102, 103, 104, 221, 222, 1008, 1009, 1010, 10045, 10076, 10112, 10121, 10122, 10125, 10134, 10140, 10161, 10194, 10202, 10213, 10218, 10238, 10240, 10252, 10264, 10265, 10274, 10276, 10292 };
            int remain = AgentRelationHelper.maxrate;
            for (int i = 1; i < userids.Length; i++) { AgentRelationHelper.Add_Local(userids[i], userids[i - 1], 1, remain * 4 / 5, "123123", out string info); remain = remain * 4 / 5; }
        }
        public async static void AgentChangeTest()
        {
            await Game.Scene.GetComponent<TimerComponent>().WaitAsync(2000);
            AgentRelationHelper.UpdateShowRate_Local(102, 101, 1, 4000, out string info);
        }
        public async static void AgentRemoveTest()
        {
            await Game.Scene.GetComponent<TimerComponent>().WaitAsync(2000);
            AgentRelationHelper.Delete_Local(10076, 104, 1, out string info);
        }
        public async static void AddTask()
        {
            await Game.Scene.GetComponent<TimerComponent>().WaitAsync(1000);
            var prizes = new Framework.Cache.Generic.CacheList<PrizeInfo>();
            prizes.Add(new PrizeInfo { type = 1, num = 100 });

            TaskHelper.AddTask(new ttask { award = prizes, type = TaskType.Signin, CreateDate = DateTime.Now, level = 1, name = "签到第一天", remark = "签到第一天" });
            TaskHelper.AddTask(new ttask { award = prizes, type = TaskType.Signin, CreateDate = DateTime.Now, level = 2, name = "签到第二天", remark = "签到第二天" });
            TaskHelper.AddTask(new ttask { award = prizes, type = TaskType.Signin, CreateDate = DateTime.Now, level = 3, name = "签到第三天", remark = "签到第三天" });
            TaskHelper.AddTask(new ttask { award = prizes, type = TaskType.Signin, CreateDate = DateTime.Now, level = 4, name = "签到第四天", remark = "签到第四天" });
            TaskHelper.AddTask(new ttask { award = prizes, type = TaskType.Signin, CreateDate = DateTime.Now, level = 5, name = "签到第五天", remark = "签到第五天" });
            TaskHelper.AddTask(new ttask { award = prizes, type = TaskType.Signin, CreateDate = DateTime.Now, level = 6, name = "签到第六天", remark = "签到第六天" });
            TaskHelper.AddTask(new ttask { award = prizes, type = TaskType.Signin, CreateDate = DateTime.Now, level = 7, name = "签到第七天", remark = "签到第七天" });
             
        }

        public async static void SigninTest()
        {
            await Game.Scene.GetComponent<TimerComponent>().WaitAsync(1000);
            DateTime current = DateTime.Now;
            //BaseBrigeHelper.InsertBase(new tTaskCompletionInfo { CreateDate = current.AddDays(-6), userid = 101, taskid = 1, IsEnable = true });
            //BaseBrigeHelper.InsertBase(new tTaskCompletionInfo { CreateDate = current.AddDays(-5), userid = 101, taskid = 2, IsEnable = true });
            //BaseBrigeHelper.InsertBase(new tTaskCompletionInfo { CreateDate = current.AddDays(-4), userid = 101, taskid = 3, IsEnable = true });
            //BaseBrigeHelper.InsertBase(new tTaskCompletionInfo { CreateDate = current.AddDays(-3), userid = 101, taskid = 4, IsEnable = true });
            //BaseBrigeHelper.InsertBase(new tTaskCompletionInfo { CreateDate = current.AddDays(-2), userid = 101, taskid = 5, IsEnable = true });
            //BaseBrigeHelper.InsertBase(new tTaskCompletionInfo { CreateDate = current.AddDays(-1), userid = 101, taskid = 6, IsEnable = true });
            //BaseBrigeHelper.InsertBase(new tTaskCompletionInfo { CreateDate = current, userid = 101, taskid = 7, IsEnable = false });
            Console.WriteLine(BaseBrigeHelper.GetBaseT<tUser>(101.ToString()).UserID);
            SigninHelper signinHelper = new SigninHelper();
            signinHelper.Signin(101);
        }

        public async static void GMMsgTest()
        {
            string json = "{\"task\":{\"id\":0,\"name\":\"测试\",\"type\":3,\"level\":0,\"condition\":[{\"ColumnName\":\"JoinCount\",\"Number\":1,\"GameId\":21}],\"award\":[{\"type\":1,\"num\":1}],\"remark\":null,\"CreateDate\":\"0001-01-01T00:00:00\"},\"time\":63764296473421,\"key\":\"F6EB47DD247DA8DFAC424CC23A72BB7A\",\"fn\":\"cs_task_add\",\"_g\":0,\"cc\":0}";
            var cs = JsonUtils.Deserialize<cs_task_add>(json);
            Console.WriteLine(JsonUtils.Serialize(BaseHelper.TaskAdd(cs.task)));
            Console.WriteLine();
            Console.WriteLine(cs.GetKey(GMService.secret));
            Console.WriteLine(cs.Check(GMService.secret));
        }
      
        public async static void CompeteTest()
        {
            //return;
            Dictionary<int, object> dic = new Dictionary<int, object>();
            dic.Add(1, 12);
            dic.Add(2, 12);
            dic.Add(3, 13);
            dic.Add(4, 12.23);
            dic.Add(5, 12.23);
            dic.Add(6, 12.231);

            Console.WriteLine("dic[1].Equals(dic[2]) 比较 :" + dic[1].Equals(dic[2]));
            Console.WriteLine("dic[2].Equals(dic[3]) 比较 :" + dic[2].Equals(dic[3]));
            Console.WriteLine("dic[1].Equals(dic[4]) 比较 :" + dic[1].Equals(dic[4]));
            Console.WriteLine("dic[4].Equals(dic[5]) 比较 :" + dic[4].Equals(dic[5]));
            Console.WriteLine("dic[5].Equals(dic[6]) 比较 :" + dic[5].Equals(dic[6]));

            //int modelid = 0;
            //await Game.Scene.GetComponent<TimerComponent>().WaitAsync(1000);
            int gameid = CommonFun.GetAttribute<GameBootAttribute>(typeof(TexasSendDataServer)).GameID;
            var type = CompeteType.Promotion;
            var models = await BaseHelper.GetBaseAll<CompeteModel>(x => x.GameID == gameid);
            var model = models.Find(x => x.Type == type);
            CompeteInfo compete = null;
            int timeType = 0;
            //var list = await CompeteService.Call<sc_compete_list>(new cs_compete_list { });
            if (model == null)
            {
                model = new CompeteModel
                {
                    GameID = gameid,
                    Type = type,
                    ShelfTime = new CompeteTime(DateTime.Now.AddMinutes(-2), timeType),
                    SignupTime = new CompeteTime(DateTime.Now.AddMinutes(-1), timeType),
                    CompeteStart = new CompeteTime(DateTime.Now.AddMinutes(10), timeType),
                    MaxCount = 200,
                    MinCount = 3,
                    Free = new Framework.Cache.Generic.CacheList<PrizeInfo> { new PrizeInfo { type = 1, num = 100 } },
                    prizes = new Framework.Cache.Generic.CacheList<CompetePrize>
                    {
                        new CompetePrize { starank = 1, prizes = new List<CompetePrizeInfo> { new CompetePrizeInfo { type = 1, num = 100000 } } },
                        new CompetePrize { starank = 2, prizes = new List<CompetePrizeInfo> { new CompetePrizeInfo { type = 1, num = 50000 } } },
                        new CompetePrize { starank = 3, prizes = new List<CompetePrizeInfo> { new CompetePrizeInfo { type = 1, num = 20000 } } },
                        new CompetePrize { starank = 4,endrank=10, prizes = new List<CompetePrizeInfo> { new CompetePrizeInfo { type = 1, num = 5000 } } },
                        new CompetePrize { starank = 11,endrank=30, prizes = new List<CompetePrizeInfo> { new CompetePrizeInfo { type = 1, num = 1000 } } },
                    }
                };
                await BaseHelper.InsertBase(model);
                models = await BaseHelper.GetBaseAll<CompeteModel>(x => x.GameID == gameid);
                model = models.Find(x => x.Type == type);
                if (model == null) return;
                var competetemp = new TexasPromotionRace(1, model)
                {
                    LevelConfigID = 2,
                    LevelStopRebirth = 11,
                    LevelUpSecond = 100,
                    MaxShowRank = 30,
                    PlayerRebirthCount = 5,
                    SignupDelayOverCount = 1,
                    SignupDelayOverMinute = 1,
                    SignupDelayOverSecond = 30,
                    TableBaseScore = 10,
                    TableDuration = 30,
                    TableGameType = 1,
                    TableInitScore = 500000,
                    TableInto = 50,
                    TableMinCount = 2,
                    TableMaxCount = 9,
                    TablePregamble = 10,
                    TableRoundCount = 5,
                };
                //var ps = compete.GetType().GetProperties();
                //List<CompeteProperty> cps = new List<CompeteProperty>();
                //foreach (var pinfo in ps)
                //{
                //    var obj = pinfo.GetValue(compete);
                //    if (obj.GetType().IsValueType || (obj.GetType() == typeof(string) && obj != null && !Convert.ToString(obj).IsNullOrWhiteSpace()))
                //    {
                //        cps.Add(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = pinfo.Name, Value = Convert.ToString(obj) });
                //    }
                //    else if (obj != null)
                //    {
                //        cps.Add(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = pinfo.Name, Value = JsonUtils.Serialize(obj) });
                //    }
                //}
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "LevelConfigID", Name = "等级配置编号", Value = competetemp.LevelConfigID.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "LevelStopRebirth", Name = "停止复活等级", Value = competetemp.LevelStopRebirth.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "LevelUpSecond", Name = "比赛升级时间（秒）", Value = competetemp.LevelUpSecond.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "MaxShowRank", Name = "最大显示排名", Value = competetemp.MaxShowRank.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "PlayerRebirthCount", Name = "玩家复活次数", Value = competetemp.PlayerRebirthCount.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "SignupDelayOverCount", Name = "报名时间延迟次数", Value = competetemp.SignupDelayOverCount.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "SignupDelayOverMinute", Name = "报名时间延迟分钟数", Value = competetemp.SignupDelayOverMinute.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "SignupDelayOverSecond", Name = "报名时间延迟秒数", Value = competetemp.SignupDelayOverSecond.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableBaseScore", Name = "牌桌初始底注", Value = competetemp.TableBaseScore.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableDuration", Name = "执行时间分钟数", Value = competetemp.TableDuration.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableGameType", Name = "德州游戏类型", Value = competetemp.TableGameType.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableInitScore", Name = "入桌分数", Value = competetemp.TableInitScore.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableInto", Name = "大盲", Value = competetemp.TableInto.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableMinCount", Name = "房间最小人数", Value = competetemp.TableMinCount.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableMaxCount", Name = "房间最大人数", Value = competetemp.TableMaxCount.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TablePregamble", Name = "前注", Value = competetemp.TablePregamble.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableRoundCount", Name = "牌桌局数", Value = competetemp.TableRoundCount.ToString(), IsEnable = true });
                CompeteService.Send(new cs_reload { });
            }
            else // if (model.CompeteStart.CompareNow() <= 0)
            {
                model.ShelfTime = new CompeteTime(DateTime.Now.AddMinutes(-2), timeType);
                model.SignupTime = new CompeteTime(DateTime.Now.AddMinutes(-1), timeType);
                model.CompeteStart = new CompeteTime(DateTime.Now.AddMinutes(3), timeType);
                model.MinCount = 3;
                await BaseHelper.AddOrUpdateBase(model);
            }
            CompeteService.Send(new cs_reload { }); 
        }

        public async static void CompeteLoopTest()
        {
            int gameid = CommonFun.GetAttribute<GameBootAttribute>(typeof(TexasSendDataServer)).GameID;
            var type = CompeteType.Loop;
            var models = await BaseHelper.GetBaseAll<CompeteModel>(x => x.GameID == gameid);
            var model = models.Find(x => x.Type == type);
            CompeteInfo compete = null;
            int timeType = 0; 
            if (model == null)
            {
                model = new CompeteModel
                {
                    GameID = gameid,
                    Type = type,
                    MaxCount = 20,
                    MinCount = 20,
                    Free = new Framework.Cache.Generic.CacheList<PrizeInfo> { new PrizeInfo { type = 1, num = 100 } },
                    prizes = new Framework.Cache.Generic.CacheList<CompetePrize>
                    {
                        new CompetePrize { starank = 1, prizes = new List<CompetePrizeInfo> { new CompetePrizeInfo { type = 1, num = 100000 } } },
                        new CompetePrize { starank = 2, prizes = new List<CompetePrizeInfo> { new CompetePrizeInfo { type = 1, num = 50000 } } },
                        new CompetePrize { starank = 3, prizes = new List<CompetePrizeInfo> { new CompetePrizeInfo { type = 1, num = 20000 } } },
                        new CompetePrize { starank = 4,endrank=10, prizes = new List<CompetePrizeInfo> { new CompetePrizeInfo { type = 1, num = 5000 } } },
                        new CompetePrize { starank = 11,endrank=30, prizes = new List<CompetePrizeInfo> { new CompetePrizeInfo { type = 1, num = 1000 } } },
                    }
                };
                await BaseHelper.InsertBase(model);
                models = await BaseHelper.GetBaseAll<CompeteModel>(x => x.GameID == gameid);
                model = models.Find(x => x.Type == type);
                var competetemp = new TexasLoopRace(1, model)
                {
                    MaxShowRank = 30,
                    SignupDelayOverCount = 1,
                    SignupDelayOverMinute = 1,
                    SignupDelayOverSecond = 30,
                    TableBaseScore = 10,
                    TableDuration = 30,
                    TableGameType = 1,
                    TableInitScore = 500000,
                    TableInto = 50,
                    TableMinCount = 2,
                    TableMaxCount = 9,
                    TablePregamble = 10,
                    TablePromotionCount = 2,
                    TableRoundCount = 5,
                };

                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableBaseScore", Name = "牌桌初始底注", Value = competetemp.TableBaseScore.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableDuration", Name = "执行时间分钟数", Value = competetemp.TableDuration.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableGameType", Name = "德州游戏类型", Value = competetemp.TableGameType.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableInitScore", Name = "入桌分数", Value = competetemp.TableInitScore.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableInto", Name = "大盲", Value = competetemp.TableInto.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableMinCount", Name = "房间最小人数", Value = competetemp.TableMinCount.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableMaxCount", Name = "房间最大人数", Value = competetemp.TableMaxCount.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TablePregamble", Name = "前注", Value = competetemp.TablePregamble.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TableRoundCount", Name = "牌桌局数", Value = competetemp.TableRoundCount.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "MaxShowRank", Name = "最大显示排名", Value = competetemp.MaxShowRank.ToString(), IsEnable = true });
                await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TablePromotionCount", Name = "牌桌晋级人数", Value = competetemp.TablePromotionCount.ToString(), IsEnable = true });
                CompeteService.Send(new cs_reload { });
            }
            if ((await BaseHelper.GetBase<CompeteProperty>(x => x.FieldName == "TablePromotionCount" && x.CompeteTemplateID == model.ID)) == null) await BaseHelper.InsertBase(new CompeteProperty { CompeteTemplateID = model.ID, FieldName = "TablePromotionCount", Name = "牌桌晋级人数", Value = 2.ToString(), IsEnable = true });

            var list = await CompeteService.Call<sc_compete_list>(new cs_compete_list { });
            Console.WriteLine(list);
            if (model != null && list != null && (compete = list.competes.Find(x => x.gameid == gameid && x.type == type)) != null)
            {
                for (int i = 0; i < model.MaxCount; i++)
                {
                    tUser robot = null;
                    while ((robot = await BaseHelper.GetARobot()) == null) ;
                    while ((await CompeteService.Call<sc_signup>(new cs_signup { competeid = compete.competeid, userid = robot.UserID })).result != 1) ;
                    await Game.Scene.GetComponent<TimerComponent>().WaitAsync(5);
                }
            }
        }

        public async static void CompeteRecordTest()
        {
            var relations = await BaseHelper.GetBaseAll<tcompeterelation>(x => x.IsEnable);
            HashSet<int> ids = new HashSet<int>();
            foreach (var item in relations) ids.Add(item.playerid);
            long sta = DateTime.Now.Ticks;
            List<sc_compete_record> records = new List<sc_compete_record>();
            foreach (var id in ids) records.Add(await CompeteService.Call<sc_compete_record>(new cs_compete_record { userid = id }));
            var str = "获取比赛记录列表[" + ids.Count + "]次，用时" + (DateTime.Now.Ticks - sta) / (double)100000000 + "秒:" + JsonUtils.Serialize(records);
            Console.WriteLine(str);
            TraceLogEx.Log(str);
        }
        public async static void CompeteRecordDetailTest()
        {
            var relations = await BaseHelper.GetBaseAll<tcompeterelation>(x => x.IsEnable);
            List<sc_compete_record_detail> details = new List<sc_compete_record_detail>();
            long sta = DateTime.Now.Ticks;
            foreach (var item in relations) details.Add(await CompeteService.Call<sc_compete_record_detail>(new cs_compete_record_detail { userid = item.playerid, competeid = item.competeid }));
            var str = "获取比赛详情[" + details.Count + "]次，用时" + (DateTime.Now.Ticks - sta) / (double)100000000 + "秒:" + JsonUtils.Serialize(details);
            Console.WriteLine(str);
            TraceLogEx.Log(str);
        }
    }
}

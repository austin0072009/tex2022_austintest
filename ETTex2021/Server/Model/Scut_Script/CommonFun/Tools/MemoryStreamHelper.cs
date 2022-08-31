using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace ETModel
{
    public static class MemoryStreamHelper
    {
        public static Dictionary<Type, KeyValueInfo> KV = new Dictionary<Type, KeyValueInfo>();
        public static Dictionary<Type, MethodInfo> DicAddDic = new Dictionary<Type, MethodInfo>();
        public static Encoding encoding = Encoding.BigEndianUnicode;
        public static Dictionary<Type, MethodInfo> minfos = new Dictionary<Type, MethodInfo>();
        public static void WriteTo(this MemoryStream stream, double num)
        {
            //unsafe
            //{
            //    byte* pdata = (byte*)&num;
            //    stream.WriteByte(*pdata++);
            //    stream.WriteByte(*pdata++);
            //    stream.WriteByte(*pdata++);
            //    stream.WriteByte(*pdata++);
            //    stream.WriteByte(*pdata++);
            //    stream.WriteByte(*pdata++);
            //    stream.WriteByte(*pdata++);
            //    stream.WriteByte(*pdata);
            //}
            stream.WriteTo(BitConverter.GetBytes(num));
        }
        public static void WriteTo(this MemoryStream stream, float num)
        {
            //unsafe
            //{
            //    byte* pdata = (byte*)&num;
            //    stream.WriteByte(*pdata++);
            //    stream.WriteByte(*pdata++);
            //    stream.WriteByte(*pdata++);
            //    stream.WriteByte(*pdata);
            //}
            stream.WriteTo(BitConverter.GetBytes(num));
        }
        public static void WriteTo(this MemoryStream stream, ulong num)
        {
            stream.WriteByte((byte)(num & 0xff));
            stream.WriteByte((byte)((num >> 8) & 0xff));
            stream.WriteByte((byte)((num >> 16) & 0xff));
            stream.WriteByte((byte)((num >> 24) & 0xff));
            stream.WriteByte((byte)((num >> 32) & 0xff));
            stream.WriteByte((byte)((num >> 40) & 0xff));
            stream.WriteByte((byte)((num >> 48) & 0xff));
            stream.WriteByte((byte)((num >> 56) & 0xff));
        }
        public static void WriteTo(this MemoryStream stream, long num)
        {
            stream.WriteByte((byte)(num & 0xff));
            stream.WriteByte((byte)((num >> 8) & 0xff));
            stream.WriteByte((byte)((num >> 16) & 0xff));
            stream.WriteByte((byte)((num >> 24) & 0xff));
            stream.WriteByte((byte)((num >> 32) & 0xff));
            stream.WriteByte((byte)((num >> 40) & 0xff));
            stream.WriteByte((byte)((num >> 48) & 0xff));
            stream.WriteByte((byte)((num >> 56) & 0xff));
        }
        public static void WriteTo(this MemoryStream stream, uint num)
        {
            stream.WriteByte((byte)(num & 0xff));
            stream.WriteByte((byte)((num >> 8) & 0xff));
            stream.WriteByte((byte)((num >> 16) & 0xff));
            stream.WriteByte((byte)((num >> 24) & 0xff));
        }
        public static void WriteTo(this MemoryStream stream, int num)
        {
            stream.WriteByte((byte)(num & 0xff));
            stream.WriteByte((byte)((num >> 8) & 0xff));
            stream.WriteByte((byte)((num >> 16) & 0xff));
            stream.WriteByte((byte)((num >> 24) & 0xff));
        }
        public static void WriteTo(this MemoryStream stream, ushort num)
        {
            stream.WriteByte((byte)(num & 0xff));
            stream.WriteByte((byte)((num >> 8) & 0xff));
        }
        public static void WriteTo(this MemoryStream stream, short num)
        {
            stream.WriteByte((byte)(num & 0xff));
            stream.WriteByte((byte)((num >> 8) & 0xff));
        }
        public static double ReadDouble(this MemoryStream stream)
        {
            //unsafe
            //{
            //    double num = 0.0F;
            //    byte* pdata = (byte*)&num;
            //    *pdata++ = (byte)stream.ReadByte();
            //    *pdata++ = (byte)stream.ReadByte();
            //    *pdata++ = (byte)stream.ReadByte();
            //    *pdata++ = (byte)stream.ReadByte();
            //    *pdata++ = (byte)stream.ReadByte();
            //    *pdata++ = (byte)stream.ReadByte();
            //    *pdata++ = (byte)stream.ReadByte();
            //    *pdata = (byte)stream.ReadByte();
            //    return num;
            //}
            return BitConverter.ToDouble(stream.ReadBytes(8));
        }
        public static float ReadSingle(this MemoryStream stream)
        {
            //unsafe
            //{
            //    float num = 0.0F;
            //    byte* pdata = (byte*)&num;
            //    *pdata++ = (byte)stream.ReadByte();
            //    *pdata++ = (byte)stream.ReadByte();
            //    *pdata++ = (byte)stream.ReadByte();
            //    *pdata = (byte)stream.ReadByte();
            //    return num;
            //}
            return BitConverter.ToSingle(stream.ReadBytes(4));
        }
        public static ulong ReadUInt64(this MemoryStream stream)
        {
            ulong num = (ulong)stream.ReadByte();
            num += (ulong)stream.ReadByte() << 8;
            num += (ulong)stream.ReadByte() << 16;
            num += (ulong)stream.ReadByte() << 24;
            num += (ulong)stream.ReadByte() << 32;
            num += (ulong)stream.ReadByte() << 40;
            num += (ulong)stream.ReadByte() << 48;
            num += (ulong)stream.ReadByte() << 56;
            return num;
        }
        public static long ReadInt64(this MemoryStream stream)
        {
            long num = stream.ReadByte();
            num += stream.ReadByte() << 8;
            num += stream.ReadByte() << 16;
            num += (long)stream.ReadByte() << 24;
            num += (long)stream.ReadByte() << 32;
            num += (long)stream.ReadByte() << 40;
            num += (long)stream.ReadByte() << 48;
            num += (long)stream.ReadByte() << 56;
            return num;
        }
        public static uint ReadUInt32(this MemoryStream stream)
        {
            uint num = (uint)stream.ReadByte();
            num += (uint)stream.ReadByte() << 8;
            num += (uint)stream.ReadByte() << 16;
            num += (uint)stream.ReadByte() << 24;
            return num;
        }
        public static int ReadInt32(this MemoryStream stream)
        {
            int num = stream.ReadByte();
            num += stream.ReadByte() << 8;
            num += stream.ReadByte() << 16;
            num += stream.ReadByte() << 24;
            return num;
        }
        public static ushort ReadUInt16(this MemoryStream stream)
        {
            ushort num = (ushort)stream.ReadByte();
            num += (ushort)(stream.ReadByte() << 8);
            return num;
        }
        public static short ReadInt16(this MemoryStream stream)
        {
            short num = (short)stream.ReadByte();
            num += (short)(stream.ReadByte() << 8);
            return num;
        }
        public static byte[] ReadBytes(this MemoryStream stream)
        {
            byte[] bytes = new byte[stream.Length - stream.Position];
            stream.Read(bytes, 0, bytes.Length);
            return bytes;
        }
        public static byte[] ReadBytes(this MemoryStream stream, int len)
        {
            byte[] bytes = new byte[len];
            stream.Read(bytes, 0, len);
            return bytes;
        }
        public static string ReadString(this MemoryStream stream)
        {
            int len = stream.ReadInt32();
            return stream.ReadString(len);
        }
        public static string ReadString(this MemoryStream stream, int len)
        {
            if (len > 0) return encoding.GetString(stream.ReadBytes(len));
            return null;
        }
        public static void WriteTo(this MemoryStream stream, byte[] bytes)
        {
            if (bytes != null) stream.Write(bytes, 0, bytes.Length);
        }
        public static void WriteTo(this MemoryStream stream, string str)
        {
            if (str != null) { byte[] bs = encoding.GetBytes(str); stream.WriteTo(bs.Length); stream.WriteTo(bs); }
            else stream.WriteTo(-1);
        }

        public static void WriteObject(this MemoryStream stream, object obj)
        {
            var fields = obj.GetType().GetFields();
        }

        public static byte[] GetObjectInfo(object obj)
        {
            using (MemoryStream stream = new MemoryStream())
            {
                obj.GetType().GetProperties();
                stream.Seek(0, 0);
                return stream.ToArray();
            }
        }

        public static void WriteTo(this MemoryStream stream, Type type, object obj)
        {
            if (type.Equals(typeof(bool))) stream.WriteByte((byte)(Convert.ToBoolean(obj) ? 1 : 0));
            else if (type.Equals(typeof(byte))) stream.WriteByte(Convert.ToByte(obj));
            else if (type.Equals(typeof(short))) stream.WriteTo(Convert.ToInt16(obj));
            else if (type.Equals(typeof(int))) stream.WriteTo(Convert.ToInt32(obj));
            else if (type.Equals(typeof(long))) stream.WriteTo(Convert.ToInt64(obj));
            else if (type.Equals(typeof(ushort))) stream.WriteTo(Convert.ToUInt16(obj));
            else if (type.Equals(typeof(uint))) stream.WriteTo(Convert.ToUInt32(obj));
            else if (type.Equals(typeof(ulong))) stream.WriteTo(Convert.ToUInt64(obj));
            else if (type.Equals(typeof(float))) stream.WriteTo(Convert.ToSingle(obj));
            else if (type.Equals(typeof(double))) stream.WriteTo(Convert.ToDouble(obj));
            else if (type.IsArray) stream.WriteTo((Array)obj);
            //else if (typeof(IDictionary).IsAssignableFrom(type)) stream.WriteTo((IDictionary)obj);
            else if (type.IsGenericType && typeof(KeyValuePair<,>).IsAssignableFrom(type.GetGenericTypeDefinition())) stream.WriteToKV(type, obj);
            else if (typeof(ICollection).IsAssignableFrom(type)) stream.WriteTo((ICollection)obj);
            else
            {
                if (obj == null) stream.WriteTo(-1);
                else if (type.Equals(typeof(string))) stream.WriteTo((string)obj);
                else if (type.IsValueType) stream.WriteTo(obj.ToString());
                else stream.WriteTo(MongoHelper.ToJson(obj));
            }
        }

        public static object Read(this MemoryStream stream, Type type)
        {
            if (type.Equals(typeof(bool))) return stream.ReadByte() == 1;
            else if (type.Equals(typeof(byte))) return stream.ReadByte();
            else if (type.Equals(typeof(short))) return stream.ReadInt16();
            else if (type.Equals(typeof(int))) return stream.ReadInt32();
            else if (type.Equals(typeof(long))) return stream.ReadInt64();
            else if (type.Equals(typeof(ushort))) return stream.ReadUInt16();
            else if (type.Equals(typeof(uint))) return stream.ReadUInt32();
            else if (type.Equals(typeof(ulong))) return stream.ReadUInt64();
            else if (type.Equals(typeof(float))) return stream.ReadSingle();
            else if (type.Equals(typeof(double))) return stream.ReadDouble();
            else if (type.IsArray) return stream.ReadArray(type);
            //else if (typeof(IDictionary).IsAssignableFrom(type)) return stream.ReadDic(type);
            else if (typeof(ICollection).IsAssignableFrom(type)) return stream.ReadCollection(type);
            else if (type.IsGenericType && typeof(KeyValuePair<,>).IsAssignableFrom(type.GetGenericTypeDefinition())) return stream.ReadKV(type);
            else
            {
                int len = stream.ReadInt32();
                if (len == -1) return null;
                else if (len == 0) { if (type == typeof(string)) return ""; else if (type.IsArray) return Array.CreateInstance(type, 0); else return Activator.CreateInstance(type, new object[0]); }
                else if (type.IsValueType) return Convert.ChangeType(stream.ReadString(len), type);
                else if (type.Equals(typeof(string))) return stream.ReadString(len);
                else return MongoHelper.FromJson(type, stream.ReadString(len));
            }
        }
        public static void WriteTo(this MemoryStream stream, ICollection collection, bool haslen = false)
        {
            if (collection == null) stream.WriteTo(-1);
            if (!haslen) stream.WriteTo(collection.Count);
            if (collection.Count == 0) return;
            var etype = collection.GetType().GetCollectionElementType();// collection.GetType().GenericTypeArguments.Length == 1 ? collection.GetType().GenericTypeArguments[0] : GetDicElementType(collection.GetType());
            foreach (var item in collection) stream.WriteTo(etype, item);
        }

        public static Type GetDicElementType(Type type)
        {
            var etype = typeof(IEnumerable<>);
            foreach (var bt in type.GetInterfaces()) if (bt.IsGenericType && bt.GetGenericTypeDefinition() == etype) return bt.GetGenericArguments()[0];
            return null;
        }
        public static object ReadCollection(this MemoryStream stream, Type type)
        {
            int len = stream.ReadInt32();
            return stream.ReadCollection(type, len);
        }
        public static object ReadCollection(this MemoryStream stream, Type type, int len)
        {
            if (len == -1) return null;
            var etype = type.GetCollectionElementType();
            object obj = Activator.CreateInstance(type);
            if (len == 0) return obj;
            if (typeof(IDictionary).IsAssignableFrom(type))
            {
                var dic = (IDictionary)obj;
                var ets = type.GenericTypeArguments;
                for (int i = 0; i < len; i++) dic.Add(stream.Read(ets[0]), stream.Read(ets[1]));
            }
            else
            {
                var method = GetAddMethod(type);
                if (method != null) for (int i = 0; i < len; i++) method.Invoke(obj, new object[] { stream.Read(etype) }); else Console.WriteLine("获取Collection添加方法失败");
            }
            return obj;
        }
        public static void WriteToKV(this MemoryStream stream, Type type, object obj)
        {
            var kv = GetKeyValue(type);
            stream.WriteTo(kv.KType, kv.GetKey(obj));
            stream.WriteTo(kv.VType, kv.GetValue(obj));
        }
        public static object ReadKV(this MemoryStream stream, Type type)
        {
            var kv = GetKeyValue(type);
            return Activator.CreateInstance(type, new object[] { stream.Read(kv.KType), stream.Read(kv.VType) });
        }
        public static KeyValueInfo GetKeyValue(Type type)
        {
            if (!KV.TryGetValue(type, out KeyValueInfo map))
            {
                map = new KeyValueInfo(type.GetProperty("Key"), type.GetProperty("Value"));
                KV.Add(type, map);
            }
            return map;
        }
        public static MethodInfo GetAddMethod(Type type)
        {
            if (!minfos.TryGetValue(type, out MethodInfo method))
            {
                method = type.GetMethods().Where(p => p.Name.Equals("Add") && p.GetParameters().Length == 1).ToList<MethodInfo>()[0];
                minfos.Add(type, method);
            }
            return method;
        }
        public static void WriteTo(this MemoryStream stream, IDictionary dic)
        {
            if (dic == null) { stream.WriteTo(-1); return; }
            stream.WriteTo(dic.Count);
            if (dic.Count == 0) return;
            var keys = dic.Keys.GetEnumerator(); var vals = dic.Values.GetEnumerator();
            var ets = dic.GetType().GenericTypeArguments;
            while (keys.MoveNext() && vals.MoveNext())
            {
                stream.WriteTo(ets[0], keys.Current);
                stream.WriteTo(ets[1], vals.Current);
            }
        }
        public static IDictionary ReadDic(this MemoryStream stream, Type type)
        {
            int count = stream.ReadInt32();
            if (count == -1) return null;
            IDictionary dic = (IDictionary)Activator.CreateInstance(type);
            if (count == 0) return dic;
            for (int i = 0; i < count; i++) { dic.Add(stream.Read(type.GenericTypeArguments[0]), stream.Read(type.GenericTypeArguments[1])); }
            return dic;
        }
        public static void WriteTo(this MemoryStream stream, Array array)
        {
            if (array == null) { stream.WriteTo(-1); return; }
            stream.WriteTo(array.Rank);
            for (int i = 0; i < array.Rank; i++) stream.WriteTo(array.GetLength(i));
            stream.WriteTo(array, new int[0]);
        }
        public static void WriteTo(this MemoryStream stream, Array array, int[] indexs)
        {
            if (array.Rank <= indexs.Length) stream.WriteTo(array.GetType().GetElementType(), array.GetValue(indexs));
            else for (int i = 0; i < array.GetLength(indexs.Length); i++) { int[] idxs = indexs.Copy(indexs.Length + 1); idxs[indexs.Length] = i; stream.WriteTo(array, idxs); }
        }

        public static Array ReadArray(this MemoryStream stream, Type type)
        {
            int rank = stream.ReadInt32();
            return stream.ReadArray(type, rank);
        }
        public static Array ReadArray(this MemoryStream stream, Type type, int rank)
        {
            if (rank == -1) return null;
            var ranks = new int[rank];
            for (int i = 0; i < ranks.Length; i++) ranks[i] = stream.ReadInt32();
            Array array = Array.CreateInstance(type.GetElementType(), ranks);
            stream.ReadArray(array, new int[0]);
            return array;
        }

        public static void ReadArray(this MemoryStream stream, Array array, int[] indexs)
        {
            if (array.Rank <= indexs.Length) array.SetValue(stream.Read(array.GetType().GetElementType()), indexs);
            else for (int i = 0; i < array.GetLength(indexs.Length); i++) { int[] idxs = indexs.Copy(indexs.Length + 1); idxs[indexs.Length] = i; stream.ReadArray(array, idxs); }
        }

        //private static int[] Copy(this int[] self, int len)
        //{
        //    return self.Copy(new int[len]);
        //}

        //private static int[] Copy(this int[] self, int[] other)
        //{
        //    for (int i = 0; i < self.Length && i < other.Length; i++) other[i] = self[i];
        //    return other;
        //}
    }
}

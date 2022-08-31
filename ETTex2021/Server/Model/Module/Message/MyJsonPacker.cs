using ETModel.Framework.Common.Serialization;
using System;
using System.IO;
using System.Text;

namespace ETModel
{
    public class MyJsonPacker : IMessagePacker
    {
        public object DeserializeFrom(Type type, byte[] bytes, int index, int count)
        {
            var str = Encoding.UTF8.GetString(bytes, index, count);
            if (type == typeof(DB_CommonFunReply)) Console.WriteLine("数据[" + type.Name + "]解码:" + str);
            try { return JsonUtils.Deserialize(str, type); } catch (Exception ex) { Console.WriteLine("解码异常,发生在对数据[" + type.Name + "]解码" + str); throw ex; }
        }

        public object DeserializeFrom(object instance, byte[] bytes, int index, int count)
        {
            var str = Encoding.UTF8.GetString(bytes, index, count);
            if (str[0] != '{') { str.Insert(0, "{"); }
            if (str[1] != '\"') { str.Insert(1, "\""); }
            if (instance is DB_CommonFunReply) Console.WriteLine("数据[" + instance.GetType().Name + "]解码:" + str);
            try { return JsonUtils.Deserialize(str, instance.GetType()); } catch (Exception ex) { Console.WriteLine("解码异常,发生在对数据[" + instance.GetType().Name + "]解码" + str); throw ex; }
        }

        public object DeserializeFrom(Type type, MemoryStream stream)
        {
            var str = Encoding.UTF8.GetString(stream.GetBuffer(), (int)stream.Position, (int)(stream.Length - stream.Position));
            if (str[0] != '{') { str.Insert(0, "{"); }
            if (str[1] != '\"') { str.Insert(1, "\""); }
            if (type == typeof(DB_CommonFunReply)) Console.WriteLine("数据[" + type.Name + "]解码:" + str);
            try { return JsonUtils.Deserialize(str, type); } catch (Exception ex) { Console.WriteLine("解码异常,发生在对数据[" + type.Name + "]解码" + str); throw ex; }

        }

        public object DeserializeFrom(object instance, MemoryStream stream)
        {
            var str = Encoding.UTF8.GetString(stream.GetBuffer(), (int)stream.Position, (int)(stream.Length - stream.Position));
            if (str[0] != '{') { str.Insert(0, "{"); }
            if (str[1] != '\"') { str.Insert(1, "\""); }
            if (instance is DB_CommonFunReply) Console.WriteLine("数据[" + instance.GetType().Name + "]解码:" + str);
            try { return JsonUtils.Deserialize(str, instance.GetType()); } catch (Exception ex) { Console.WriteLine("解码异常,发生在对数据[" + instance.GetType().Name + "]解码" + str); throw ex; }
        }

        public byte[] SerializeTo(object obj)
        {
            var json = JsonUtils.Serialize(obj);
            if (obj is DB_CommonFunReply) Console.WriteLine("数据[" + obj.GetType().Name + "]编码:" + JsonUtils.Serialize(obj));
            return json.ToUtf8();
            //return Encoding.ASCII.GetBytes(JsonUtils.Serialize(obj));
        }

        public void SerializeTo(object obj, MemoryStream stream)
        {
            var bs = SerializeTo(obj);
            stream.Write(bs, 0, bs.Length);
        }
    }
}

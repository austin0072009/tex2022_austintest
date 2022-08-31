using System;
using System.Collections;
using System.Reflection;
using System.Text;

namespace GameSystem
{
    public static class JsonStringHelper
    {
        public static int GetIntFromJsonString(this string self, string fieldname)
        {
            string num = self.GetObjectStringFromJson(fieldname);
            if (num != null && num.Length > 0)
            {
                try
                {
                    //if (num.StartsWith("\"")) num = num.Substring(1, num.Length - 1);
                    //if (num.EndsWith("\"")) num = num.Substring(0, num.Length - 1);
                    return Convert.ToInt32(num);
                }
                catch (Exception e)
                {
                    Console.WriteLine("字符串[" + num + "]转换数字失败");
                }
            }
            return -1;
        }

        public static string GetStringFromJsonString(this string self, string fieldname, params string[] endstrs)
        {
            if (fieldname == null) return null;
            //if (!fieldname.StartsWith('"')) fieldname = '"' + fieldname;
            //if (!fieldname.EndsWith("\":")) fieldname += "\":";
            int sta = self.GetStringStaIndex(fieldname);
            if (sta > -1)
            {
                sta += fieldname.Length + 2;
                int end = -1;
                for (int i = 0; i < endstrs.Length; i++)
                {
                    int temp = self.IndexOf(endstrs[i], sta);
                    if (temp > -1 && (end == -1 || temp < end))
                    {
                        end = temp;
                    }
                }
                if (end > -1)
                {
                    return self.Substring(sta, end - sta).Trim();
                }
            }
            return null;
        }

        public static string GetObjectStringFromJson(this string self, string fieldname, bool hasquote = false)
        {
            if (fieldname == null) return null;
            //if (!fieldname.StartsWith('"')) fieldname = '"' + fieldname;
            //if (!fieldname.EndsWith("\":")) fieldname += "\":";
            int StaIndex = self.GetStringStaIndex(fieldname);
            if (StaIndex > -1 && (StaIndex += fieldname.Length + 2) < self.Length)
            {
                string obj;
                if ((obj = self.GetObjectFromJson(StaIndex)) != null) return obj;
                if ((obj = self.GetArrayFromJson(StaIndex)) != null) return obj;
                if ((obj = self.GetStringFromJson(StaIndex, hasquote)) != null) return obj;
                int EndIndex = self.IndexOf(',', StaIndex);
                if (EndIndex > 0) return self.Substring(StaIndex, EndIndex - StaIndex).Trim();
            }
            return null;
        }
        /// <summary> 从Json中获取数组 </summary>
        private static string GetArrayFromJson(this string self, int StaIndex)
        {
            if (self[StaIndex] == '[')
            {
                int depth = 0;
                StringBuilder sb = new StringBuilder();
                for (int i = StaIndex; i < self.Length; i++)
                {
                    char c = self[i];
                    if (c == '[') { depth++; }
                    else if (c == ']') { depth--; }
                    sb.Append(c);
                    if (sb.Length > 0 && depth == 0) break;
                }
                return sb.ToString().Trim();
            }
            return null;
        }
        /// <summary> 判断字符是否符合字段命名规范 </summary>
        private static bool CheckFieldChar(char c)
        {
            if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') || c == '_') return true;
            return false;
        }
        /// <summary> 获取字符串结束索引 </summary>
        private static int GetStringEndIndex(this string self, int StaIndex, bool hasmark = false)
        {
            for (; StaIndex < self.Length && (self[StaIndex] != '"' || self.IsEscapeChar(StaIndex - 1)); StaIndex++) ;
            if (StaIndex < self.Length) return hasmark ? StaIndex + 1 : StaIndex;
            return -1;
            //while (StaIndex + 1 < json.Length && (StaIndex = json.IndexOf('"', StaIndex)) > -1)
            //{
            //    if (json[StaIndex - 1] != '\\') return hasmark ? StaIndex + 1 : StaIndex;
            //    StaIndex++;
            //    //if (StaIndex + 2 < json.Length && json[StaIndex + 1] == ',' && json[StaIndex + 2] == '"') return hasmark ? StaIndex + 1 : StaIndex;
            //    ////{
            //    ////    int NameEnd = index + 3;
            //    ////    for (; NameEnd < json.Length && CheckFieldChar(json[NameEnd]); NameEnd++) ;
            //    ////    if (NameEnd + 1 < json.Length && json[NameEnd] == '"' && json[NameEnd + 1] == ':') return hasmark ? index + 1 : index;
            //    ////    else { index += 2; }
            //    ////}
            //    //else if (json[StaIndex + 1] == '}') return hasmark ? StaIndex + 1 : StaIndex;
            //}
            //return -1;
        }
        private static bool IsEscapeChar(this string self, int index)
        {
            int count = 0;
            for (; index >= 0 && self[index] == '\\'; count++, index--) ;
            return count % 2 == 1;
        }

        private static int GetStringStaIndex(this string self, string fieldname)
        {
            if (self == null || fieldname == null || self.Length < fieldname.Length + 3) return -1;
            int StartIndex = 0;
            for (; StartIndex < self.Length - fieldname.Length + 1 && !self.Equals(StartIndex, fieldname); StartIndex++) ;
            return StartIndex < self.Length ? StartIndex : -1;
        }
        private static bool Equals(this string self, int sta, string other)
        {
            int index = 0;
            for (; index < other.Length && self[index + sta] == other[index]; index++) ;
            return index >= other.Length && self[index + sta] == '"' && self[index + sta + 1] == ':' && (sta <= 0 || self[sta - 1] == '"') && !self.IsEscapeChar(sta - 2);
        }
        /// <summary> 从Json中获取字符串 </summary>
        private static string GetStringFromJson(this string self, int StaIndex, bool hasmark)
        {
            if (self[StaIndex] == '"')
            {
                //if ((obj = GetObjectStringFromJson(json, sta)) != null) return obj;
                int EndIndex = self.GetStringEndIndex(StaIndex + 1, hasmark);
                if (!hasmark) StaIndex++;
                if (EndIndex > -1) return self.Substring(StaIndex, EndIndex - StaIndex).Trim().Replace("\\\"", "\"");
            }
            return null;
        }
        /// <summary> 从Json中获取对象 </summary>
        private static string GetObjectFromJson(this string self, int StaIndex)
        {
            if (self[StaIndex] == '{')
            {
                int depth = 0;
                StringBuilder sb = new StringBuilder();
                for (int i = StaIndex; i < self.Length; i++)
                {
                    char c = self[i];
                    if (c == '{') { depth++; }
                    else if (c == '}') { depth--; }
                    sb.Append(c);
                    if (sb.Length > 0 && depth == 0) break;
                }
                return sb.ToString().Trim();
            }
            return null;
        }

        public static string GetObjectInfo(this object self)
        {
            if (self == null)
            {
                return null;
            }
            StringBuilder sb = new StringBuilder();
            Type type = self.GetType();
            if (type == typeof(string))
            {
                return (string)self;
            }
            PropertyInfo[] properties = self.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public);
            FieldInfo[] fields = self.GetType().GetFields(BindingFlags.Instance | BindingFlags.Public);
            if (properties.Length <= 0 && fields.Length <= 0)
            {
                return sb.ToString();
            }
            sb.Append("{\"" + type.Name + "\":{");
            foreach (PropertyInfo item in properties)
            {
                try
                {
                    object value = item.GetValue(self, null);
                    if (value != null)
                    {
                        sb.Append(item.Name + ":");
                        if (value is ICollection)
                        {
                            sb.Append(((ICollection)value).GetArrayInfo() + ",");
                        }
                        else if (value.GetType().IsArray)
                        {
                            sb.Append(((Array)value).GetArrayInfo() + ",");
                        }
                        else if (item.PropertyType.IsValueType)
                        {
                            sb.Append(value + ",");
                        }
                        else if (value.GetType() == typeof(string))
                        {
                            sb.Append(((string)value).Trim() + ",");
                        }
                        else
                        {
                            sb.Append(GetObjectInfo(value) + ",");
                        }
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine("获取字段[" + item.Name + "]发生异常", e);
                }
            }
            foreach (FieldInfo item in fields)
            {
                try
                {
                    object value = item.GetValue(self);
                    if (value != null)
                    {
                        sb.Append(item.Name + ":");
                        if (value is ICollection)
                        {
                            sb.Append(((ICollection)value).GetArrayInfo() + ",");
                        }
                        else if (value.GetType().IsArray)
                        {
                            sb.Append(((Array)value).GetArrayInfo() + ",");
                        }
                        else if (item.FieldType.IsValueType)
                        {
                            sb.Append(value + ",");
                        }
                        else if (value.GetType() == typeof(string))
                        {
                            sb.Append(((string)value).Trim() + ",");
                        }
                        else
                        {
                            sb.Append(GetObjectInfo(value) + ",");
                        }
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine("获取字段[" + item.Name + "]发生异常", e);
                }
            }
            if (sb.ToString().EndsWith(",")) { sb.Remove(sb.Length - 1, 1); }
            sb.Append("}}");
            return sb.ToString();
        }

        public static string GetArrayInfo(this ICollection array)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("[");
            foreach (object value in array)
            {
                if (value != null)
                {
                    if (value is ICollection)
                    {
                        sb.Append(((ICollection)value).GetArrayInfo() + ",");
                    }
                    else if (value.GetType().IsArray)
                    {
                        sb.Append(((Array)value).GetArrayInfo() + ",");
                    }
                    else if (value.GetType().IsValueType)
                    {
                        sb.Append(value + ",");
                    }
                    else if (value is string)
                    {
                        sb.Append(((string)value).Trim() + ",");
                    }
                    else
                    {
                        sb.Append(GetObjectInfo(value) + ",");
                    }
                }
            }
            if (sb.ToString().EndsWith(",")) { sb.Remove(sb.Length - 1, 1); }
            sb.Append("]");

            return sb.ToString();
        }
    }
}

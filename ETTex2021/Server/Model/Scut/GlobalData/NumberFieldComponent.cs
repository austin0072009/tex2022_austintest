using ETModel;
using ETModel.Framework.Model;
using ProtoBuf;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace GameSystem.Entity
{
    /// <summary>
    /// 成员类型
    /// </summary>
    public enum MemberType
    {
        /// <summary>
        /// 数字字段(增量更新)
        /// </summary>
        Number = 1,
        /// <summary>
        /// 普通字段(覆盖跟新)
        /// </summary>
        Normal = 2,
        /// <summary>
        /// 主键
        /// </summary>
        Key = 3
    }
    //[ObjectSystem]
    //public class NumberCarrierAwakeSystem : AwakeSystem<NumberFieldComponent>
    //{
    //    public override void Awake(NumberFieldComponent self)
    //    {
    //        self.Load();
    //    }
    //}
    //public static class NumberCarrierHelper
    //{
    //    public static NumberCarrierEntity GetInfo(this NumberFieldComponent self, object obj)
    //    {
    //        return self.GetInfo(obj);
    //    }
    //}

    /// <summary> 成员详情 </summary>
    public class MemberDetail
    {
        /// <summary> 是否是主键 </summary>
        public bool IsKey;
        /// <summary> 字段标记 </summary>
        public int Tag;
        /// <summary> 字段信息 </summary>
        public FieldInfo finfo;
        /// <summary> 属性信息 </summary>
        public PropertyInfo pinfo;
        /// <summary> 是否是字段 </summary>
        public bool IsField;
        /// <summary> 是否是增量变更 </summary>
        public bool IsNumber;
        /// <summary> 本成员是否被变更(仅Redis服务端使用该值判断,客户端使用当前值与原值比较作判断) </summary>
        public bool IsChange;
        /// <summary> 本成员原值(Key为主键,value为值,用于判断字段是否变更,获取变更量) </summary>
        public Dictionary<int, object> values = new Dictionary<int, object>();
        /// <summary> 实例化字段成员 </summary>
        public MemberDetail(int tag, FieldInfo finfo, bool isnumber, bool iskey = false)
        {
            this.finfo = finfo;
            this.IsKey = iskey;
            this.Tag = tag;
            this.IsField = true;
            IsNumber = isnumber;
        }
        /// <summary> 实例化属性成员 </summary>
        public MemberDetail(int tag, PropertyInfo pinfo, bool isnumber, bool iskey = false)
        {
            this.pinfo = pinfo;
            this.IsKey = iskey;
            this.Tag = tag;
            IsNumber = isnumber;
        }
        /// <summary> 获取成员类型 </summary>
        public Type Type
        {
            get
            {
                if (IsField) return finfo.FieldType;
                return pinfo.PropertyType;
            }
        }
        /// <summary> 获取对象中本成员的值 </summary>
        public object GetValue(object obj)
        {
            if (IsField) try { return finfo.GetValue(obj); } catch (Exception ex) { Console.WriteLine("获取字段[" + finfo.Name + "]发生异常\r\n" + ex.Message + "\r\n" + ex.StackTrace); return 0; };
            try { return pinfo.GetValue(obj); } catch (Exception ex) { Console.WriteLine("获取属性[" + pinfo.Name + ":" + pinfo.PropertyType.Name + "]发生异常\r\n" + ex.Message + "\r\n" + ex.StackTrace); return 0; }

        }
        /// <summary> 成员名称 </summary>
        public string Name
        {
            get
            {
                if (IsField) return finfo.Name;
                return pinfo.Name;
            }
        }
        /// <summary> 获取成员信息 </summary>
        public MemberInfo MemberInfo
        {
            get
            {
                if (IsField) return finfo;
                return pinfo;
            }
        }
        /// <summary> 设置成员值 </summary>
        public void SetValue(object obj, object value)
        {
            if (IsField) finfo.SetValue(obj, value);
            else pinfo.SetValue(obj, value);
        }
        /// <summary> 如果该成员被变更则将其填充进成员信息列表 </summary>
        public void GetValue(bool isdb, object obj, int key, Dictionary<int, object> fields)
        {
            if (isdb)
            {
                if (IsChange)
                {
                    if (IsNumber)
                    { fields.Add(Tag, GetValue(obj)); }
                    else
                    { fields.Add(Tag, GetValue(obj)); }
                    IsChange = false;
                }
                else if (IsKey) fields.Add(Tag, GetValue(obj));
            }
            else
            {
                if (IsNumber)
                {
                    //如果是增量成员,提交的将是该值的增量值
                    var val = GetValue(obj);
                    if (!values.TryGetValue(key, out object value)) value = 0;
                    object num = CommonFun.GetNumberDecrease(Type, val, value);
                    if (Convert.ToInt64(num) != 0) fields.Add(Tag, num);
                }
                else
                {
                    var val = GetValue(obj);
                    values.TryGetValue(key, out object value);
                    if (IsKey) fields.Add(Tag, val);
                    else if (val != null ? !val.Equals(value) : (value != null ? true : false)) fields.Add(Tag, val);
                }
            }
        }
        /// <summary> 将本成员值无条件填充进成员信息列表 </summary>
        public void GetValueAll(object obj, Dictionary<int, object> fields)
        {
            fields.Add(Tag, GetValue(obj));
        }
        /// <summary> 将成员信息列表的值的赋值到对象和原值中(如果是Redis服务端对增量成员做增量变更,并变更IsChange为true.客户端直接覆盖) </summary>
        public void SetValue(bool isdb, object obj, int key, Dictionary<int, object> fields)
        {
            if (IsKey && (!isdb || values.ContainsKey(key))) return;
            if (isdb)
            {
                //Redis服务端对增量成员做增量变更并变更IsChange为true
                if (IsNumber)
                {
                    if (fields.TryGetValue(Tag, out object value))
                    {
                        SetValue(obj, CommonFun.GetNumberIncrease(Type, GetValue(obj), value));
                        IsChange = true;
                    }
                }
                else
                {
                    if (fields.TryGetValue(Tag, out object value))
                    {
                        SetValue(obj, value);
                        IsChange = true;
                    }
                }
            }
            else
            {
                //客户端所有成员全部覆盖变更
                if (IsNumber)
                { if (fields.TryGetValue(Tag, out object value)) { SetValue(obj, value); values[key] = value; } }
                else
                {
                    if (fields.TryGetValue(Tag, out object value))
                    {
                        object ob = new { value };
                        SetValue(obj, value); values[key] = ob;

                    }
                }
            }
        }
    }
    /// <summary> 成员管理器 </summary>
    public class MemberManager
    {
        /// <summary> 成员列表 </summary>
        public Dictionary<int, MemberDetail> members = new Dictionary<int, MemberDetail>();
    }
    /// <summary> 类型详情 </summary>
    public class TypeDetail
    {
        /// <summary> 类型 </summary>
        public Type type;
        /// <summary> 成员管理器 </summary>
        public MemberManager members = new MemberManager();
        /// <summary> 主键 </summary>
        public MemberDetail Key;
    }
    public class NumberFieldComponent : Component
    {
        private static NumberFieldComponent instance;
        public static NumberFieldComponent Instance { get { if (instance == null) { instance = new NumberFieldComponent(); } return instance; } }
        public bool IsDataBase = StartConfigComponent.Instance != null ? StartConfigComponent.Instance.StartConfig.AppType == AppType.RedisDB || StartConfigComponent.Instance.StartConfig.AppType == AppType.DB : false;
        /// <summary> 增量成员字典 </summary>
        public Dictionary<Type, TypeDetail> types = new Dictionary<Type, TypeDetail>();
        private NumberFieldComponent()
        {
            Load();
        }

        //Dictionary<Type, Dictionary<MemberType, Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>>>> fieldMaps = new Dictionary<Type, Dictionary<MemberType, Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>>>>();

        //Dictionary<Type, Dictionary<MemberType, Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>>>> propertityMaps = new Dictionary<Type, Dictionary<MemberType, Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>>>>();
        //public class NumberCarrierEntity
        //{
        //    public byte[] content;
        //    public Dictionary<int, object> infos;
        //}
        //public class NumberFieldInfo
        //{
        //    public int Tag;
        //    public long num;
        //}

        /// <summary> 初始化增量成员字典 </summary>
        public void Load()
        {
            if (types.Count == 0)
            {
                var types = typeof(EntityHistory).Assembly.GetTypes().Where(p => p.GetCustomAttributes(typeof(NumberFieldAttribute), false).Count() > 0).ToList();
                foreach (var type in types) Load(type);
                //foreach (var type in ProtoBufUtils.TypeModel.GetTypes()) { Load((type as MetaType).Type); }
            }
        }

        //public NumberCarrierEntity GetInfo(AbstractEntity obj)
        //{
        //    Dictionary<int, object> map = new Dictionary<int, object>();
        //    if (fieldMaps.TryGetValue(obj.GetType(), out Dictionary<MemberType, Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>>> fmap))
        //    {
        //        if (fmap.TryGetValue(MemberType.Number, out Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>> numbers))
        //        {
        //            foreach (var field in numbers)
        //            {
        //                foreach (var fs in field.Value)
        //                {
        //                    if (!fs.Value.TryGetValue(obj.GetMessageQueueId(), out object value)) { value = 0; fs.Value.Add(obj.GetMessageQueueId(), 0); }
        //                    long num = (long)CommonFun.GetNumberDecrease(fs.Key.FieldType, fs.Key.GetValue(obj), value);
        //                    if (num != 0) map.Add(field.Key, num);
        //                }
        //            }
        //        }
        //    }
        //    if (propertityMaps.TryGetValue(obj.GetType(), out Dictionary<MemberType, Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>>> pmap))
        //    {
        //        if (pmap.TryGetValue(MemberType.Number, out Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>> numbers))
        //        {
        //            foreach (var propertity in numbers)
        //            {
        //                foreach (var fs in propertity.Value)
        //                {
        //                    if (!fs.Value.TryGetValue(obj.GetMessageQueueId(), out object value)) { value = 0; fs.Value.Add(obj.GetMessageQueueId(), 0); }
        //                    long num = (long)CommonFun.GetNumberDecrease(fs.Key.PropertyType, fs.Key.GetValue(obj), value);
        //                    if (num != 0) map.Add(propertity.Key, num);
        //                }
        //            }
        //        }
        //    }
        //    if (map.Count > 0) { return new NumberCarrierEntity() { content = MongoHelper.ToBson(obj), infos = map }; }
        //    return null;
        //}

        //public void InitInfo(AbstractEntity obj)
        //{
        //    if (fieldMaps.TryGetValue(obj.GetType(), out Dictionary<MemberType, Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>>> fmap))
        //    {
        //        if (fmap.TryGetValue(MemberType.Number, out Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>> numbers))
        //        {
        //            foreach (var item in numbers)
        //            {
        //                foreach (var finfo in item.Value)
        //                {
        //                    finfo.Value[obj.GetMessageQueueId()] = finfo.Key.GetValue(obj);
        //                }
        //            }
        //        }
        //    }
        //    if (propertityMaps.TryGetValue(obj.GetType(), out Dictionary<MemberType, Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>>> pmap))
        //    {
        //        if (pmap.TryGetValue(MemberType.Number, out Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>> numbers))
        //        {
        //            foreach (var map in numbers)
        //            {
        //                foreach (var finfo in map.Value)
        //                {
        //                    finfo.Value[obj.GetMessageQueueId()] = finfo.Key.GetValue(obj);
        //                }
        //            }
        //        }
        //    }
        //}

        //public void InitInfo(AbstractEntity obj, Dictionary<int, object> map)
        //{
        //    if (fieldMaps.TryGetValue(obj.GetType(), out Dictionary<MemberType, Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>>> fmap))
        //    {
        //        if (fmap.TryGetValue(MemberType.Number, out Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>> numbers))
        //        {
        //            foreach (var item in numbers)
        //            {
        //                if (numbers.TryGetValue(item.Key, out Dictionary<FieldInfo, Dictionary<int, object>> fs))
        //                {
        //                    foreach (var field in fs)
        //                    {
        //                        field.Value[obj.GetMessageQueueId()] = item.Value;
        //                        field.Key.SetValue(obj, item.Value);
        //                    }
        //                }
        //            }
        //        }
        //    }
        //    if (propertityMaps.TryGetValue(obj.GetType(), out Dictionary<MemberType, Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>>> pmap))
        //    {
        //        if (pmap.TryGetValue(MemberType.Number, out Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>> numbers))
        //        {
        //            foreach (var item in map)
        //            {
        //                if (numbers.TryGetValue(item.Key, out Dictionary<PropertyInfo, Dictionary<int, object>> ps))
        //                {
        //                    foreach (var propertity in ps)
        //                    {
        //                        propertity.Value[obj.GetMessageQueueId()] = item.Value;
        //                        propertity.Key.SetValue(obj, item.Value);
        //                    }
        //                }
        //            }
        //        }
        //    }
        //}

        private void Load(Type type)
        {
            if (type.GetCustomAttribute<NumberFieldAttribute>() == null) return;
            var fs = type.GetRuntimeFields();
            var ns = new MemberManager();
            //var ks = new MemberDetail() { type = MemberType.Key };
            MemberDetail key = null;
            foreach (var info in fs)
            {
                if (!info.Name.StartsWith("<"))
                {
                    var proto = info.GetCustomAttribute<ProtoMemberAttribute>();
                    if (proto != null)
                    {
                        MemberDetail finfo = new MemberDetail(proto.Tag, info, info.GetCustomAttribute<NumberFieldAttribute>() != null, IsKey(info));
                        ns.members.Add(proto.Tag, finfo);
                        if (finfo.IsKey) key = finfo;
                        //bool iskey = IsKey(info);
                        //bool isnumber = false;
                        //if (info.GetCustomAttribute<NumberFieldAttribute>() != null)
                        //{
                        //    //if (!fieldMaps.TryGetValue(type, out Dictionary<MemberType, Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>>> map))
                        //    //{
                        //    //    map = new Dictionary<MemberType, Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>>>();
                        //    //    fieldMaps.Add(type, map);
                        //    //}
                        //    //if (!map.TryGetValue(MemberType.Number, out Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>> numbers))
                        //    //{
                        //    //    numbers = new Dictionary<int, Dictionary<FieldInfo, Dictionary<int, object>>>();
                        //    //    map.Add(MemberType.Number, numbers);
                        //    //}
                        //    //var field = new Dictionary<FieldInfo, Dictionary<int, object>>();
                        //    //field.Add(info, new Dictionary<int, object>());
                        //    //numbers.Add(proto.Tag, field);
                        //    //fieldMaps.Add(type, map);
                        //    isnumber = true;
                        //    ns.fields.Add(proto.Tag, new FieldDetail(proto.Tag, info, isnumber, iskey));
                        //}
                        //else ns.fields.Add(proto.Tag, new FieldDetail(proto.Tag, info, isnumber, iskey));
                        //if (iskey) key = new FieldDetail(proto.Tag, info, isnumber, iskey);
                    }
                }
            }
            var ps = type.GetRuntimeProperties();
            foreach (var info in ps)
            {
                var proto = info.GetCustomAttribute<ProtoMemberAttribute>();
                if (proto != null)
                {
                    try
                    {
                        MemberDetail finfo = new MemberDetail(proto.Tag, info, info.GetCustomAttribute<NumberFieldAttribute>() != null, IsKey(info));
                        ns.members.Add(proto.Tag, finfo);
                        if (finfo.IsKey) key = finfo;
                    }
                    catch (Exception ex)
                    {
                        CommonFun.PrintError(type.Name + "[" + info.Name + "]字段与[" + ns.members[proto.Tag].pinfo.Name + "]字段编号重复", ex);
                    }
                    //bool iskey = IsKey(info);
                    //bool isnumber = false;
                    //if (info.GetCustomAttribute<NumberFieldAttribute>() != null)
                    //{
                    //    //if (!propertityMaps.TryGetValue(type, out Dictionary<MemberType, Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>>> map))
                    //    //{
                    //    //    map = new Dictionary<MemberType, Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>>>();
                    //    //    propertityMaps.Add(type, map);
                    //    //}
                    //    //if (!map.TryGetValue(MemberType.Number, out Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>> numbers))
                    //    //{
                    //    //    numbers = new Dictionary<int, Dictionary<PropertyInfo, Dictionary<int, object>>>();
                    //    //    map.Add(MemberType.Number, numbers);
                    //    //}
                    //    //var field = new Dictionary<PropertyInfo, Dictionary<int, object>>();
                    //    //field.Add(info, new Dictionary<int, object>());
                    //    //numbers.Add(proto.Tag, field);
                    //    isnumber = true;
                    //    ns.fields.Add(proto.Tag, new FieldDetail(proto.Tag, info, isnumber, iskey));
                    //}
                    //else ns.fields.Add(proto.Tag, new FieldDetail(proto.Tag, info, isnumber, iskey));
                    //if (iskey) key = new FieldDetail(proto.Tag, info, isnumber, iskey);
                }
            }
            if (ns.members.Count > 0)
            {
                TypeDetail detail = new TypeDetail() { type = type };
                detail.members = ns;
                //detail.members.Add(cs.type, cs);
                detail.Key = key;
                types.Add(type, detail);
            }
        }
        /// <summary> 判断该成员是否是主键 </summary>
        public bool IsKey(MemberInfo info)
        {
            var ef = info.GetCustomAttribute<EntityFieldAttribute>();
            if (ef != null && ef.IsKey)
            {
                return true;
            }
            return false;
        }
        /// <summary> 从实例中获取被变更的成员 </summary>
        public Dictionary<int, object> GetValue(bool isdb, object obj)
        {
            if (types.TryGetValue(obj.GetType(), out TypeDetail tds))
            {
                Dictionary<int, object> fields = new Dictionary<int, object>();
                int key = Convert.ToInt32(tds.Key.GetValue(obj));
                foreach (var field in tds.members.members) field.Value.GetValue(isdb, obj, key, fields);
                return fields;
            }
            return null;
        }
        /// <summary> 将实例中成员赋值到原值中 </summary>
        public void Init(object obj)
        {
            if (types.TryGetValue(obj.GetType(), out TypeDetail tds))
            {
                int key = (int)tds.Key.GetValue(obj);
                if (tds.Key.values.Count == 0 || !tds.Key.values.ContainsKey(key))
                {
                    var fields = GetValueAll(obj, tds);
                    tds.Key.values[key] = key;
                    SetValue(false, obj, fields);
                }
            }
            else
            {
                var fields = GetValueAll(obj);
                int key = (int)tds.Key.GetValue(obj);
                foreach (var member in tds.members.members) member.Value.SetValue(false, obj, key, fields);
            }
        }
        public void Update(object obj, object local)
        {
            if (obj != null || obj.GetType() != local.GetType()) return;
            if (types.TryGetValue(obj.GetType(), out TypeDetail tds))
            {
                int key = (int)tds.Key.GetValue(obj);
                foreach (var info in tds.members.members)
                {
                    var member = info.Value;
                    if (member.values.ContainsKey(key))
                    {
                        var value = member.GetValue(obj);
                        if (member.IsNumber)
                        {
                            var localval = member.GetValue(local);
                            var oldvalue = member.values[key];
                            if (localval.Equals(oldvalue))
                            {
                                if (!value.Equals(localval))
                                {
                                    member.SetValue(local, value);
                                    member.values[key] = value;
                                }
                            }
                            else
                            {
                                object num = CommonFun.GetNumberDecrease(member.Type, value, oldvalue);
                                member.SetValue(local, CommonFun.GetNumberIncrease(member.Type, localval, num));
                                member.values[key] = value;
                            }
                        }
                        else
                        {
                            member.SetValue(local, value);
                            member.values[key] = value;
                        }
                    }
                }
            }
        }
        public void Update(object local, Dictionary<int, object> fields)
        {
            if (fields == null || fields.Count == 0) return;
            if (types.TryGetValue(local.GetType(), out TypeDetail tds))
            {
                int key = Convert.ToInt32(fields[tds.Key.Tag]);
                foreach (var field in fields)
                {
                    object value = field.Value;
                    if (tds.members.members.TryGetValue(field.Key, out MemberDetail member) && member.values.ContainsKey(key))
                    {
                        if (member.IsNumber)
                        {
                            var localval = member.GetValue(local);
                            var oldvalue = member.values[key];
                            if (localval.Equals(oldvalue))
                            {
                                if (!value.Equals(localval))
                                {
                                    member.SetValue(local, value);
                                    member.values[key] = value;
                                }
                            }
                            else
                            {
                                object num = CommonFun.GetNumberDecrease(member.Type, value, oldvalue);
                                member.SetValue(local, CommonFun.GetNumberIncrease(member.Type, localval, num));
                                member.values[key] = value;
                            }
                        }
                        else
                        {
                            member.SetValue(local, value);
                            member.values[key] = value;
                        }
                    }
                }
            }
        }
        /// <summary> 获取客户端变更成员信息并将其转为二进制流 </summary>
        public byte[] GetRequest(object obj)
        {
            return Encode(obj.GetType(), GetValue(false, obj));
        }
        /// <summary> 获取Redis服务端变更成员信息并将其转为二进制流 </summary>
        public byte[] GetRsponse(object obj)
        {
            return Encode(obj.GetType(), GetValue(false, obj));
        }
        /// <summary> 获取客户端变更成员信息 </summary>
        public Dictionary<int, object> GetRequest(MemoryStream stream, Type type)
        {
            Dictionary<int, object> fields = null;
            if (types.TryGetValue(type, out TypeDetail tds))
            {
                fields = new Dictionary<int, object>();
                while (stream.Position < stream.Length)
                {
                    var tag = stream.ReadInt32();
                    if (tds.members.members.TryGetValue(tag, out MemberDetail detail))
                    {
                        fields.Add(tag, stream.Read(detail.Type));
                    }
                }
            }
            return fields;
        }
        /// <summary> 获取实例中所有成员信息并将其转为二进制流 </summary>
        public byte[] GetRequestAll(object obj)
        {
            var fields = GetValueAll(obj);
            if (fields != null)
            {
                return Encode(obj.GetType(), fields);
            }
            return null;

        }
        /// <summary> 获取实例中所有成员信息 </summary>
        public Dictionary<int, object> GetValueAll(object obj)
        {
            if (types.TryGetValue(obj.GetType(), out TypeDetail tds))
            {
                return GetValueAll(obj, tds);
            }
            return null;
        }
        /// <summary> 获取实例中所有成员信息 </summary>
        private Dictionary<int, object> GetValueAll(object obj, TypeDetail tds)
        {
            Dictionary<int, object> fields = new Dictionary<int, object>();
            foreach (var field in tds.members.members)
                field.Value.GetValueAll(obj, fields);
            return fields;
        }
        /// <summary> 序列化成员信息为二进制流 </summary>
        public byte[] Encode(Type type, Dictionary<int, object> fields)
        {
            if (fields != null)
            {
                if (types.TryGetValue(type, out TypeDetail tds))
                {
                    using (MemoryStream stream = new MemoryStream())
                    {
                        foreach (var item in fields)
                        {
                            if (tds.members.members.TryGetValue(item.Key, out MemberDetail detail))
                            {
                                int sta = (int)stream.Position;
                                stream.WriteTo(item.Key);
                                try
                                {
                                    stream.WriteTo(detail.Type, item.Value);
                                }
                                catch (Exception ex)
                                {
                                    Console.WriteLine("序列化[" + item.Key + "." + detail.Type + "]错误:" + item.Value.ToString(), ex);
                                    stream.Seek(sta, SeekOrigin.Begin);
                                }
                            }
                        }
                        stream.Seek(0, 0);
                        return stream.ReadBytes();
                    }
                }
            }
            return null;
        }
        /// <summary> 将二进制流反序列化为成员信息 </summary>
        public Dictionary<int, object> Decode(Type type, byte[] bytes)
        {
            using (MemoryStream stream = new MemoryStream(bytes)) { return Decode(type, stream); }
        }
        /// <summary> 将二进制流反序列化为成员信息 </summary>
        public Dictionary<int, object> Decode(Type type, MemoryStream stream)
        {
            Dictionary<int, object> fields = null;
            if (types.TryGetValue(type, out TypeDetail tds))
            {
                fields = new Dictionary<int, object>();
                while (stream.Position < stream.Length)
                {
                    var tag = stream.ReadInt32();
                    if (tds.members.members.TryGetValue(tag, out MemberDetail detail))
                    {
                        try
                        {
                            var value = stream.Read(detail.Type);
                            fields.Add(tag, value);
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine("反序列化[" + tag + "." + detail.Type + "]错误:", ex);
                        }
                    }
                }
            }
            return fields;
        }
        /// <summary> 将成员信息赋值到Redis服务端实例中(如果是Redis服务端,增量成员使用增量变更、其他成员使用覆盖变更。客户端所有成员都以覆盖变更) </summary>
        public void SetValue(bool isdb, object obj, Dictionary<int, object> fields)
        {
            if (types.TryGetValue(obj.GetType(), out TypeDetail tds))
            {
                int key = Convert.ToInt32(fields[tds.Key.Tag]);
                foreach (var field in tds.members.members)
                    field.Value.SetValue(isdb, obj, key, fields);
            }
        }
        public int GetKey(object obj)
        {
            if (types.TryGetValue(obj.GetType(), out TypeDetail tds))
            {
                return (int)tds.Key.GetValue(obj);
            }
            return -1;
        }
    }
}

using System;
using System.Reflection;

namespace ETModel
{
    public class KeyValueInfo
    {
        private PropertyInfo keyinfo;
        private PropertyInfo valueinfo;
        public KeyValueInfo(PropertyInfo keyinfo, PropertyInfo valueinfo)
        {
            this.keyinfo = keyinfo;
            this.valueinfo = valueinfo;
        }
        public object GetKey(object obj)
        {
            return keyinfo.GetValue(obj);
        }
        public object GetValue(object obj)
        {
            return valueinfo.GetValue(obj);
        }
        public Type KType { get { if (keyinfo == null) return null; return keyinfo.PropertyType; } }
        public Type VType { get { if (valueinfo == null) return null; return valueinfo.PropertyType; } }

    }
}

using ETModel.Script.Model;
using System.Collections.Generic;
using System.Net;

namespace ETModel.Script.CsScript.Action
{
    public class PropsManager
    {
        private static PropsManager ins;
        public static PropsManager Ins { get { if (ins == null) ins = new PropsManager(); return ins; } }
        public Dictionary<int, tPropConfig> props = new Dictionary<int, tPropConfig>();
        private PropsManager()
        {
            Reload();

        }
        public async void Reload()
        {
            props.Clear();
            var list = await BaseHelper.GetShareAll<tPropConfig>();
            foreach (var item in list)
            {
                if (!props.ContainsKey(item.PropID)) props.Add(item.PropID, item);
                else props[item.PropID] = item;
            }
        }
 
    }
}

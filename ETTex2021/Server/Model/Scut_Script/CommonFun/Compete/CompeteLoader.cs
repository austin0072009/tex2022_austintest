using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System.Collections.Generic;

namespace ETModel.Script.CsScript.Action
{
    public class CompeteLoader
    {
        string tscode;
        string pscode;
        public Dictionary<int, CompeteModel> tmap = new Dictionary<int, CompeteModel>();
        public Dictionary<int, List<CompeteProperty>> pmap = new Dictionary<int, List<CompeteProperty>>();
        public async void ReLoad()
        {
            string tempcode;
            var ts = await BaseHelper.GetBaseAll<CompeteModel>(x => x.ID > 0);
            if (ts != null && (tempcode = CommonFun.GetKey(JsonUtils.Serialize(ts))) != tscode)
            {
                tscode = tempcode;
                pmap.Clear();
                tmap.Clear();
                foreach (var item in ts) tmap.Add(item.ID, item);
            }
            var ps = await BaseHelper.GetBaseAll<CompeteProperty>(x => x.ID > 0);
            if (ps != null && (tempcode = CommonFun.GetKey(JsonUtils.Serialize(ps))) != pscode)
            {
                pscode = tempcode;
                pmap.Clear();
                foreach (var item in ps)
                {
                    if (!pmap.TryGetValue(item.ID, out List<CompeteProperty> plist))
                    {
                        plist = new List<CompeteProperty>();
                        pmap.Add(item.ID, plist);
                    }
                    plist.Add(item);
                }
            }
        }
    }
}

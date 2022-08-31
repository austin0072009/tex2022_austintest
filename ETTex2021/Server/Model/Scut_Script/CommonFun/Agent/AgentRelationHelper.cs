using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class AgentRelationHelper
    {
        public static int maxrate = 5000;
        public static int basescore = 10000;
        /// <summary> 获取代理关系 </summary>
        public static async ETTask<tuseragent2021relation> GetAgentRelation(int userid, int parentid, int cidx)
        {
            return await BaseHelper.GetBase<tuseragent2021relation>((x) => x.UserID == userid && x.ParentID == parentid && x.cidx == cidx);
        }
        /// <summary> 获取代理信息 </summary>
        public static async ETTask<tuseragent2021> GetAgent(int userid, int cidx)
        {
            return await BaseHelper.GetBase<tuseragent2021>((x) => x.UserID == userid && x.cidx == cidx);
        }

        /// <summary> 获取上级代理 </summary>
        public static async ETTask<List<tuseragent2021relation>> GetParentAll(int userid, int cidx)
        {
            return await BaseHelper.GetBaseAll<tuseragent2021relation>((x) => x.UserID == userid && x.cidx == cidx);
        }
        #region get child list

        /// <summary> 获取全部下级代理 </summary>
        public static void GetChildAll_local(int parentid, int cidx,List<tuseragent2021relation> Childalluser)
        {
            var userrele = BaseBrigeHelper.GetBaseAllMatch<tuseragent2021relation>((x) => x.ParentID == parentid && x.cidx == cidx);
            if (userrele == null && userrele.Count == 0)
            {  
                return;
            }
            else
            {
                foreach (var item in userrele)
                {
                    Childalluser.Add(item);
                    GetChildAll_local(item.UserID, cidx, Childalluser);
                }
            }
        }
        /// <summary>
        /// 获取玩家的直接下级
        /// </summary>
        /// <param name="parentid"></param>
        /// <param name="cidx"></param>
        /// <param name="Childalluser"></param>
        public static List<tuseragent2021relation> GetChildlocal(int parentid, int cidx)
        {
            return BaseBrigeHelper.GetBaseAllMatch<tuseragent2021relation>((x) => x.ParentID == parentid && x.cidx == cidx);
        }

        #endregion
        /// <summary> 删除代理 </summary>
        public static async ETTask Delete(int userid, int parentid, int cidx)
        {
            var list = await GetParentAll(userid, cidx);
            if (list.Exists((x) => x.UserID == userid && x.ParentID == parentid))
            {
                tuseragent2021 agent = await GetAgent(userid, cidx);
                if (agent == null) return;
                if (agent.FUserID == parentid)
                {
                    await BaseHelper.DeleteBase(agent);
                    for (int i = 0; i < list.Count; i++) await BaseHelper.DeleteBase(list[i]);
                    await UpdateParentID(cidx, userid, parentid);
                }
                //await DeleteChildAll(userid, cidx);
            }
        }
        /// <summary>
        /// 修改上级代理为上上级代理
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="cidx"></param>
        /// <param name="parentid"></param>
        /// <param name="grandfatherid"></param>
        /// <returns></returns>
        public static async ETTask UpdateParentID(int cidx, int parentid, int grandfatherid)
        {
            List<tuseragent2021relation> list = new List<tuseragent2021relation>();
            GetChildAll_local(parentid, cidx, list);
            foreach (var item in list)
            {
                var agent = await GetAgent(item.UserID, cidx);
                if (item.lv == 1) agent.FUserID = grandfatherid;
                agent.Lv = agent.Lv - 1;
                await BaseHelper.AddOrUpdateBase(agent);
                await BaseHelper.DeleteBase(item);
                await UpdateChildShowRate(item.UserID, cidx);
            }

            //var list = await BaseHelper.GetBaseAll<tuseragent2021relation>((x) => x.cidx == cidx && x.ParentID == parentid && x.lv == 1);
            //foreach (var item in list)
            //{
            //    var agent = await GetAgent(item.UserID, cidx);
            //    agent.FUserID = grandfatherid;
            //    item.ParentID = grandfatherid;
            //    await BaseHelper.AddOrUpdateBase(item);
            //    await UpdateChildShowRate(item.UserID, cidx);
            //    var childs = await GetChildAll(item.UserID, cidx);
            //    foreach (var child in childs) await UpdateChildShowRate(child.UserID, cidx);
            //}
        }
        /// <summary>
        /// 修改代理税率
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="parentid"></param>
        /// <param name="cidx"></param>
        /// <param name="showrate"></param>
        /// <returns></returns>
        public static async ETTask<int> UpdateShowRate(int userid, int parentid, int cidx, int showrate)
        {
            var agent = await GetAgent(userid, cidx);
            if (agent != null) return -1;
            if (agent.FUserID != parentid) return -2;
            var relation = await GetAgentRelation(userid, parentid, cidx);
            relation.showrate = showrate;
            await BaseHelper.AddOrUpdateBase(relation);
            await UpdateChildShowRate(userid, cidx);
            List<tuseragent2021relation> childs = new List<tuseragent2021relation>();
            GetChildAll_local(userid, cidx, childs);
            foreach (var child in childs) await UpdateChildShowRate(child.UserID, cidx);
            return 1;
        }
        /// <summary>
        /// 修改子节点税率
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="cidx"></param>
        /// <returns></returns>
        public static async ETTask<int> UpdateChildShowRate(int userid, int cidx)
        {
            var parents = await GetParentAll(userid, cidx);
            parents.Sort((x, y) => { if (x.lv > y.lv) return 1; else if (x.lv == y.lv) return 0; return -1; });
            Dictionary<int, int> ratemap = new Dictionary<int, int>();
            int totalrate = basescore;
            int remainrate = basescore;
            for (int i = parents.Count - 1; i > 0; i--) { totalrate = totalrate * parents[i].showrate / basescore; int temprate = remainrate - totalrate; ratemap.Add(parents[i].ParentID, temprate); remainrate -= temprate; }
            //if (parents.Count > 1) { totalrate = totalrate * parents[0].showrate / basescore; ratemap.Add(parents[1].ParentID, remainrate - totalrate); }
            ratemap.Add(parents[0].ParentID, remainrate);
            int count = 1;
            foreach (var parent in parents) { parent.rate = ratemap[parent.ParentID]; parent.lv = count++; await BaseHelper.AddOrUpdateBase(parent); }
            var agent = await GetAgent(userid, cidx);
            agent.rate = ratemap[parents[0].ParentID];
            await BaseHelper.AddOrUpdateBase(agent);
            return 1;
        }
        public static async ETTask<int> Add(int userid, int parentid, int cidx, int showrate, string ActiveCode)
        {
            if (await GetAgent(userid, cidx) != null) return -1;
            var parentAgent = await GetAgent(parentid, cidx);
            if (parentAgent == null) return -2;
            var parents = await GetParentAll(parentid, cidx);
            parents.Sort((x, y) => { if (x.lv > y.lv) return 1; else if (x.lv == y.lv) return 0; return -1; });
            Dictionary<int, int> ratemap = new Dictionary<int, int>();
            var topuserid = parents == null || parents.Count == 0 ? parentid : parents[parents.Count - 1].ParentID;
            int totalrate = basescore;
            int remainrate = basescore;
            for (int i = parents.Count - 1; i > 0; i--) { totalrate = totalrate * parents[i].showrate / basescore; int temprate = remainrate - totalrate; ratemap.Add(parents[i].ParentID, temprate); remainrate -= temprate; }
            if (parents.Count > 0) { totalrate = totalrate * showrate / basescore; ratemap.Add(parents[0].ParentID, remainrate - totalrate); }
            ratemap.Add(parentid, totalrate);
            //int rate = (parentAgent.rate == 0 ? 10000 : parentAgent.rate) * showrate / 10000;
            var agent = new tuseragent2021 { UserID = userid, cidx = cidx, FUserID = parentid, rate = ratemap[parentid], Lv = parentAgent.Lv + 1, TopUserID = topuserid, Code = ActiveCode };
            await BaseHelper.AddOrUpdateBase(agent);
            var create = DateTime.Now;
            int lv = 1;
            var relation = new tuseragent2021relation { UserID = userid, cidx = cidx, ParentID = parentid, CreatTime = create, lv = lv, rate = ratemap[parentid], showrate = showrate };
            await BaseHelper.AddOrUpdateBase(relation);
            //await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(relation.GetType().Name, 0, JsonUtils.Serialize(relation));
            //int remain = 10000 - rate;
            //if (userid == 10292)
            //{
            //    int x = 0;
            //}
            foreach (var prelation in parents)
            {
                lv++;
                //var realrate = remain * prelation.showrate / 10000;
                //if (prelation.ParentID == topuserid) realrate = remain;
                //if (realrate < 0) realrate = 0;
                var parent = new tuseragent2021relation { UserID = userid, cidx = cidx, ParentID = prelation.ParentID, CreatTime = create, lv = lv, rate = ratemap[prelation.ParentID], showrate = prelation.showrate };
                //remain -= realrate;
                //if (remain < 0) remain = 0;
                await BaseHelper.AddOrUpdateBase(parent);
                //await Game.Scene.GetComponent<RedisDBProxyComponent>().AddOrUpdateaAsync(parent.GetType().Name, 0, JsonUtils.Serialize(parent));
            }
            return 1;
        }

       
        #region 本地方法
        /// <summary> 获取代理信息(本地) </summary>
        public static tuseragent2021 GetAgent_Local(int userid)
        {
            return BaseBrigeHelper.GetBase<tuseragent2021>((x) => x.UserID == userid);
        }
        /// <summary>  获取代理关系(本地) </summary>
        public static tuseragent2021relation GetAgentRelation_Local(int userid, int parentid, int cidx)
        {
            return BaseBrigeHelper.GetBase<tuseragent2021relation>((x) => x.UserID == userid && x.ParentID == parentid && x.cidx == cidx);
        }
       

        /// <summary>
        /// 递归获取上线全部代理
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="cidx"></param>
        /// <returns></returns>
        public static void GetParentAll_Local(int userid, int cidx, List<tuseragent2021relation> topalluser)
        {
            var userrele = BaseBrigeHelper.GetBase<tuseragent2021relation>((x) => x.UserID == userid && x.cidx == cidx);
            if (userrele!=null && userrele.ParentID==0) 
            {
                topalluser.Add(userrele);
                return;
            }
            if(userrele != null)
            {
                topalluser.Add(userrele);
                GetParentAll_Local(userrele.ParentID, cidx, topalluser);
            }  
        }
        /// <summary> 获取下级代理(本地) </summary>
        public static List<tuseragent2021relation> GetChildAll_Local(int parentid, int cidx)
        {
            return BaseBrigeHelper.GetBaseAllMatch<tuseragent2021relation>((x) => x.ParentID == parentid && x.cidx == cidx);
        }
        /// <summary>
        /// 得到下级关系
        /// </summary>
        /// <param name="parentid"></param>
        /// <param name="cidx"></param>
        /// <returns></returns>
        public static tuseragent2021relation GetChildLocal(int userid, int cidx)
        {
            return BaseBrigeHelper.GetBase<tuseragent2021relation>((x) => x.ParentID == userid && x.cidx == cidx);
        }


        /// <summary> 删除代理(本地,百分百showrate) </summary>
        public static int Delete_Local(int userid, int parentid, int cidx)
        {
            try
            {
                List<tuseragent2021relation> list = new List<tuseragent2021relation>();
                GetParentAll_Local(userid, cidx, list);
                if (list.Exists((x) => x.UserID == userid && x.ParentID == parentid))
                {
                    tuseragent2021 agent = GetAgent_Local(userid);
                    if (agent == null) return -1;
                    if (agent.FUserID == parentid)
                    {
                        BaseBrigeHelper.DeleteForBase(agent);
                        for (int i = 0; i < list.Count; i++) BaseBrigeHelper.DeleteForBase(list[i]);
                        ActiveCodeHelper.Delete(cidx, userid);
                        return UpdateParentID_Local(cidx, userid, agent.FUserID);
                    }
                    return -2;
                }
            }
            catch (Exception ex) { return -5; }
            return 1;
        }
        /// <summary> 删除所有子节点(本地) </summary>
        public static void DeleteChildAll_Local(int userid, int cidx)
        {
            var childs = GetChildAll_Local(userid, cidx);
            for (int i = 0; i < childs.Count; i++)
            {
                Delete_Local(childs[i].UserID, userid, cidx);
            }
        }
        /// <summary> 修改上级代理为上上级代理(本地,百分百showrate) </summary>
        public static int UpdateParentID_Local(int cidx, int parentid, int grandfatherid)
        {
            try
            {
                var list = GetChildAll_Local(parentid, cidx);
                //var list = BaseBrigeHelper.GetBaseAllMatch<tuseragent2021relation>((x) => x.cidx == cidx && x.ParentID == parentid && x.lv == 1);
                int temp = 1;
                bool haserror = false;
                foreach (var item in list)
                {
                    var agent = GetAgent_Local(item.UserID);
                    if (item.lv == 1) agent.FUserID = grandfatherid;
                    agent.Lv = agent.Lv - 1;
                    BaseBrigeHelper.AddOrUpdateBase(agent);
                    BaseBrigeHelper.DeleteForBase(item);
                    if (UpdateChildShowRate_Local(item.UserID, cidx) != 1) haserror = true;
                }
                if (haserror) return -3;
            }
            catch (Exception ex) { return -4; }
            return 1;
        }
        /// <summary> 修改代理税率(本地,百分百showrate) </summary>
        public static int UpdateShowRate_Local(int userid, int parentid, int cidx, int showrate)
        {
            try
            {
                var agent = GetAgent_Local(userid);
                if (agent == null) return -1;
                if (agent.FUserID != parentid) return -2;
                var relation = GetAgentRelation_Local(userid, parentid, cidx);
                relation.showrate = showrate;
                agent.rate = showrate;
                BaseBrigeHelper.AddOrUpdateBase(agent);
                BaseBrigeHelper.AddOrUpdateBase(relation);
                if (UpdateChildShowRate_Local(userid, cidx) != 1) return -3;
                var childs = GetChildAll_Local(userid, cidx);
                childs.Sort((x, y) => { if (x.UserID < y.UserID) return -1; else if (x.UserID == y.UserID) return 0; else return 1; });
                bool haserror = false;
                foreach (var child in childs)
                {
                    var crelation = GetAgentRelation_Local(child.UserID, parentid, cidx);
                    var cagent = GetAgent_Local(child.UserID);
                    crelation.showrate = showrate;
                    cagent.rate = showrate;
                    BaseBrigeHelper.AddOrUpdateBase(cagent);
                    BaseBrigeHelper.AddOrUpdateBase(crelation);
                    if (UpdateChildShowRate_Local(child.UserID, cidx) != 1) haserror = true;
                }
                if (haserror) return -4;
            }
            catch (Exception ex) { return -5; }
            return 1;
        }
        /// <summary> 修改子节点税率(本地,百分百showrate) </summary>
        public static int UpdateChildShowRate_Local(int userid, int cidx)
        {
            try
            {
                List<tuseragent2021relation> parents = new List<tuseragent2021relation>();
                GetParentAll_Local(userid, cidx, parents);
                parents.Sort((x, y) => { if (x.lv > y.lv) return 1; else if (x.lv == y.lv) return 0; return -1; });
                Dictionary<int, int> ratemap = new Dictionary<int, int>();
                int totalrate = basescore;
                int remainrate = basescore;
                for (int i = parents.Count - 1; i > 0; i--) { totalrate = totalrate * parents[i].showrate / basescore; int temprate = remainrate - totalrate; ratemap.Add(parents[i].ParentID, temprate); remainrate -= temprate; }
                //if (parents.Count > 0) { totalrate = totalrate * parents[0].showrate / basescore; ratemap.Add(parents[1].ParentID, remainrate - totalrate); }
                ratemap.Add(parents[0].ParentID, remainrate);
                int count = 1;
                foreach (var parent in parents) { parent.rate = ratemap[parent.ParentID]; parent.lv = count++; BaseBrigeHelper.AddOrUpdateBase(parent); }
                //var agent = GetAgent_Local(userid, cidx);
                //agent.rate = ratemap[parents[0].ParentID];
                //BaseBrigeHelper.AddOrUpdateBase(agent);
            }
            catch (Exception ex) { return -3; }
            return 1;
        }
        /// <summary> 添加代理(本地,百分百showrate) </summary>
        public static int Add_Local(int userid, int parentid, int cidx, int showrate, string ActiveCode)
        {
            try
            {
                if (GetAgent_Local(userid) != null) return -1;
                var parentAgent = BaseBrigeHelper.GetBase<tuseragent2021relation>((x) => x.UserID == parentid && x.cidx == cidx);
                if (parentAgent == null) return -2;
                int code = ActiveCodeHelper.GetNewCode(cidx);
                if (code <= 0) return -3;
                List<tuseragent2021relation> parents = new List<tuseragent2021relation>();
                GetParentAll_Local(parentid, cidx, parents);
                parents.Sort((x, y) => { if (x.lv > y.lv) return 1; else if (x.lv == y.lv) return 0; return -1; });
                Dictionary<int, int> ratemap = new Dictionary<int, int>();
                var topuserid = parents == null || parents.Count == 0 ? parentid : parents[parents.Count - 1].ParentID;
                int totalrate = maxrate;
                int remainrate = maxrate;
                for (int i = parents.Count - 1; i >= 0; i--) { totalrate = totalrate * parents[i].showrate / basescore; int temprate = remainrate - totalrate; ratemap.Add(parents[i].ParentID, temprate); remainrate -= temprate; }
                //if (parents.Count > 0) { totalrate = totalrate * showrate / basescore; ratemap.Add(parents[0].ParentID, remainrate - totalrate); }
                ratemap.Add(parentid, remainrate);
                var agent = new tuseragent2021 { UserID = userid, cidx = cidx, FUserID = parentid, rate = showrate, Lv = parentAgent.lv + 1, TopUserID = topuserid, Code = Convert.ToString(code, 16) };
                BaseBrigeHelper.InsertBase(agent);
                var create = DateTime.Now;
                int lv = parentAgent.lv;
                var relation = new tuseragent2021relation { UserID = userid, cidx = cidx, ParentID = parentid, CreatTime = create, lv = lv, rate = ratemap[parentid], showrate = showrate };
                BaseBrigeHelper.InsertBase(relation);
                foreach (var prelation in parents)
                {
                    lv++;
                    var parent = new tuseragent2021relation { UserID = userid, cidx = cidx, ParentID = prelation.ParentID, CreatTime = create, lv = lv, rate = ratemap[prelation.ParentID], showrate = prelation.showrate };
                    BaseBrigeHelper.InsertBase(parent);
                }
            }
            catch (Exception ex) { return -4; }
            return 1;
        }

        public static int Set_agentrate(int userid,int rate,out string info)
        {
            info = "设置成功";
            var agent = BaseBrigeHelper.GetBase<tuseragent2021relation>((x) => x.cidx !=0 && x.UserID == userid && x.lv==1);
            if (agent==null)
            {
                info = "没有这个社区1级代理";
                return 2;
            }
            agent.showrate = rate;
            BaseBrigeHelper.AddOrUpdateBase(agent);
            return 1;
        }



        /// <summary>
        /// 添加总代
        /// </summary>
        /// <param name="userid"></param>
        /// <returns></returns>
        public static int Add_bigagentLocal(int userid, int cidx,int showrate, out string info)
        {
            info = "";
            var agent = BaseBrigeHelper.GetBase<tuseragent2021relation>((x) => x.cidx == cidx && x.UserID == userid && x.ParentID == 0);
            if (agent != null && agent.IsAgent==1)
            {
                info = "已经是总代身份";
                return 2;//已经存在这个总代
            }
            if (agent != null && agent.IsAgent == 0)
            {
                agent.IsAgent = 1;
                agent.lv = 1;
                BaseBrigeHelper.AddOrUpdateBase(agent);
                return 1;
            }
            var parent = new tuseragent2021relation { UserID = userid,Code = ActiveCodeHelper.GetNewCode(cidx).ToString(), cidx = cidx, ParentID = 0, CreatTime = DateTime.Now, lv = 1, rate = 0, showrate = showrate,IsAgent = 1 };
            BaseBrigeHelper.InsertBase(parent);
            info = "设置成功!";
            return 1;
        }
        /// <summary>
        ///设置代理  并且设置代理最大返利
        /// </summary>
        /// <param name="userid"></param>
        /// <param name="clubid"></param>
        /// <param name="showrate"></param>
        /// <returns></returns>
        public static dynamic Add_agentlocal(int userid,int fuserid,int clubid,int showrate)
        {
            var rinfo = new { key = 1,info = "设置成功" };

            var agent = BaseBrigeHelper.GetBase<tuseragent2021relation>((x) => x.cidx == clubid && x.UserID == userid);
            var Fagent = BaseBrigeHelper.GetBase<tuseragent2021relation>((x) => x.cidx == clubid && x.UserID == fuserid);
            var user_lower = GetChildLocal(userid, clubid);//下级关系


            if (agent == null || Fagent == null)
            {
                rinfo = new { key = -1, info = "代理关系异常" };
                return rinfo;
            }
            if (Fagent.showrate <= showrate)
            {
                rinfo = new { key = -2, info = "设置最大反利必须比父级小" };
                return rinfo;
            }
            if(agent.lv - Fagent.lv != 1)
            {
                rinfo = new { key = -3, info = "只能给自己直接下级设置" };
                return rinfo;
            }
            if (user_lower != null && agent.showrate!=0 && user_lower.IsAgent==1 && user_lower.showrate > showrate)
            {
                rinfo = new { key = -4, info = "下级showrate必须小于自己的showrate" };
                return rinfo;
            }

            agent.IsAgent = 1;
            agent.showrate = showrate;
            BaseBrigeHelper.AddOrUpdateBase(agent);
            return rinfo;
        }



        public static int Add_Local(int userid, int parentid, int cidx, int showrate, string ActiveCode, out string info)
        { 
            if (parentid > 0)
            {
                if (GetAgentRelation_Local(userid, parentid, cidx) != null) { info = "代理已存在"; return -1; }
                int ocode = ActiveCodeHelper.GetNewCode(cidx);


                var parents = BaseBrigeHelper.GetBase<tuseragent2021relation>((x) => x.UserID == parentid && x.cidx == cidx);
                //if (parents == null) { info = "上级代理异常"; return -5; }
                if (parents != null && parents.lv >= 10) parents = null;

                if (parents!=null && parents.showrate< showrate) { info = "税率超范围"; return -5; }

                var agent = new tuseragent2021 { UserID = userid, cidx = cidx, FUserID = parentid, rate = showrate, Lv = 0, TopUserID = parentid, Code = "" };
                BaseBrigeHelper.InsertBase(agent);
                var create = DateTime.Now;
                int lv = parents == null? 0 : parents.lv; 
                lv++; 

                var userrela = BaseBrigeHelper.GetBase<tuseragent2021relation>((x) => x.UserID == userid && x.cidx== cidx);
                if (userrela == null)
                {
                    var parent = new tuseragent2021relation { UserID = userid,ExtenGold=0, Code = ocode.ToString(), cidx = cidx, ParentID = parents.UserID, CreatTime = create, lv = lv, rate = 0, showrate = 0,IsDel=0 };//未开启设置为0
                    BaseBrigeHelper.InsertBase(parent);
                }
                else
                {
                    userrela.Code = ocode.ToString();
                    userrela.cidx = cidx;
                    userrela.IsDel = 0;
                    BaseBrigeHelper.AddOrUpdateBase(userrela);
                }
                info = null;
                return 1;
            }
            else
            { 
                var agent = new tuseragent2021 { cidx = cidx, UserID = userid, Code = "", FUserID = userid, Lv = 1, TopUserID = userid };
                BaseBrigeHelper.InsertBase(agent);
                int _lv1_rate = t_anythingList.GetInt("textax_rateshare");//配置80
                int ocode = ActiveCodeHelper.GetNewCode(cidx);
                var parent = new tuseragent2021relation { UserID = userid, Code = ocode.ToString(), cidx = cidx, ParentID = 0, CreatTime = DateTime.Now, lv = 1, rate = _lv1_rate, showrate = _lv1_rate };
                BaseBrigeHelper.InsertBase(parent);
                info = null;
                return 1;
            } 
        }
        /// <summary>
        /// 计算剩余最大反利值
        /// </summary>
        /// <returns></returns>
        public static int ComputeSurplusShowrate(int clubid,int fuserid)
        {
            List<tuseragent2021relation> parents = new List<tuseragent2021relation>();
            GetParentAll_Local(fuserid, clubid, parents);
            if (parents.Count>0)
            {
                if (parents.Count == 1) return parents[0].showrate;

                parents = parents.OrderBy(t=>t.lv).ToList();
                int totalrate = 0;
                var maxshowrate = parents[0].showrate;
                foreach (var item in parents)
                {
                    for (int i = 1; i < parents.Count; i++)
                    {
                        var rate = item.showrate - parents[i].showrate;
                        totalrate += rate;
                    }
                }

                return maxshowrate - totalrate;
            }
            return 0;
        }


        /// <summary> 修改代理税率(本地) </summary>
        public static int UpdateShowRate_Local(int userid, int parentid, int cidx, int showrate, out string info)
        {
            try
            {
                var agent = GetAgent_Local(userid);
                if (agent == null) { info = "代理不存在，修改税率失败"; return -1; }
                if (agent.FUserID != parentid) { info = "你不是被修改代理的上级代理，没有修改税率的权限"; return -2; }
                var pagent = GetAgent_Local(parentid);
                if (pagent == null) { info = "你不是该联盟成员，无法修改该联盟成员的税率"; return -6; }
                if (agent.TopUserID == parentid ? maxrate < showrate : pagent.rate < showrate) { info = "税率超范围,修改税率失败"; return -7; }
                var relation = GetAgentRelation_Local(userid, parentid, cidx);
                relation.showrate = showrate;
                agent.rate = showrate;
                BaseBrigeHelper.AddOrUpdateBase(agent);
                BaseBrigeHelper.AddOrUpdateBase(relation);
                if (UpdateChildShowRate_Local(userid, cidx, true) != 1) { info = "变更税率失败"; return -3; }
                var childs = GetChildAll_Local(userid, cidx);
                childs.Sort((x, y) => { if (x.UserID < y.UserID) return -1; else if (x.UserID == y.UserID) return 0; else return 1; });
                bool haserror = false;
                foreach (var child in childs)
                {
                    var crelation = GetAgentRelation_Local(child.UserID, parentid, cidx);
                    crelation.showrate = showrate;
                    BaseBrigeHelper.AddOrUpdateBase(crelation);
                    if (UpdateChildShowRate_Local(child.UserID, cidx, true) != 1) haserror = true;
                }
                if (haserror) { info = "变更下级代理未完全成功"; return -4; }
            }
            catch (Exception ex) { info = "修改税率异常，请与服务器联系"; return -5; }
            info = null;
            return 1;
        }
        public static int UpdateChildShowRate_Local(int userid, int cidx, bool ReturnSelf)
        {
            try
            {
                List<tuseragent2021relation> parents = new List<tuseragent2021relation>();
                GetParentAll_Local(userid, cidx, parents);
                parents.Sort((x, y) => { if (x.lv > y.lv) return 1; else if (x.lv == y.lv) return 0; return -1; });
                Dictionary<int, int> ratemap = new Dictionary<int, int>();
                int remainrate = maxrate;
                for (int i = parents.Count - 1; i > 0; i--)
                {
                    if (remainrate < parents[i].showrate) parents[i].showrate = remainrate;
                    int temprate = remainrate - parents[i].showrate;
                    ratemap.Add(parents[i].ParentID, temprate);
                    remainrate = parents[i].showrate;
                }
                //if (ReturnSelf) remainrate -= parents[0].showrate;
                if (remainrate < parents[0].showrate) { parents[0].showrate = remainrate; var agent = GetAgent_Local(userid); agent.rate = parents[0].showrate; BaseBrigeHelper.AddOrUpdateBase(agent); }
                ratemap.Add(parents[0].ParentID, remainrate);
                int count = 1;
                foreach (var parent in parents) { parent.rate = ratemap[parent.ParentID]; parent.lv = count++; BaseBrigeHelper.AddOrUpdateBase(parent); }
            }
            catch (Exception ex) { return -3; }
            return 1;
        }
        /// <summary> 删除代理(本地,百分百showrate) </summary>
        public static int Delete_Local(int userid, int parentid, int cidx, out string info)
        {
            try
            {
                List<tuseragent2021relation> list = new List<tuseragent2021relation>();
                GetParentAll_Local(userid, cidx, list);
                if (list.Exists((x) => x.UserID == userid && x.ParentID == parentid))
                {
                    tuseragent2021 agent = GetAgent_Local(userid);
                    if (agent == null) { info = "你要删除的代理不存在"; return -1; }
                    if (agent.FUserID == parentid)
                    {
                        BaseBrigeHelper.DeleteForBase(agent);
                        for (int i = 0; i < list.Count; i++) BaseBrigeHelper.DeleteForBase(list[i]);
                        ActiveCodeHelper.Delete(cidx, userid);
                        return UpdateParentID_Local(cidx, userid, agent.FUserID, out info);
                    }
                    info = "只能删除你的下级代理";
                    return -2;
                }
            }
            catch (Exception ex) { info = "删除代理异常，请与服务器联系"; return -5; }
            info = null;
            return 1;
        }
        /// <summary> 修改上级代理为上上级代理(本地) </summary>
        public static int UpdateParentID_Local(int cidx, int parentid, int grandfatherid, out string info)
        {
            try
            {
                var list = GetChildAll_Local(parentid, cidx);
                //var list = BaseBrigeHelper.GetBaseAllMatch<tuseragent2021relation>((x) => x.cidx == cidx && x.ParentID == parentid && x.lv == 1);
                //int temp = 1;
                bool haserror = false;
                foreach (var item in list)
                {
                    var agent = GetAgent_Local(item.UserID);
                    if (item.lv == 1) agent.FUserID = grandfatherid;
                    agent.Lv = agent.Lv - 1;
                    BaseBrigeHelper.AddOrUpdateBase(agent);
                    BaseBrigeHelper.DeleteForBase(item);
                    if (UpdateChildShowRate_Local(item.UserID, cidx, true) != 1) haserror = true;
                }
                if (haserror) { info = "修改子代理关系存在失败，请与服务器联系"; return -3; }
            }
            catch (Exception ex) { info = "修改子代理关系异常，请与服务器联系"; return -4; }
            info = null;
            return 1;
        }



        #endregion 本地方法结束
    }
}

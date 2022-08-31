using Crazy2018_Sys_Common;
using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using Crazy2018_Sys_Interface.Game;
using Crazy2018_Sys_ViewEntity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static Crazy2018_Sys_Common.TableUtil;

namespace Crazy2018_Sys_Service.Game
{
    public class RoomListService : BaseService<ttablelist, int, texas_2021Entities>, IRoomListService
    {
        private readonly IGameService _gameService;
        public RoomListService(IGameService gameService)
        {
            _gameService = gameService;
        }
        public List<tgameinfo> GetGamelist()
        {
            return _gameService.GetEntityLisrByWhere(st=>st.isopen==true );//&& st.deleteState==false
        }

        public DataResults<RoomListView> GetListRoomTable(DPagePara page)
        {
            DataResults<RoomListView> result = new DataResults<RoomListView>();
            Expression<Func<ttablelist, bool>> fun = w => w != null;
            if (page == null) page = new DPagePara();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            using (texas_2021Entities dbhelper = new texas_2021Entities())
            {

                List<ttablelist> roomdata = new List<ttablelist>();
                
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    fun = fun.And(st => st.tableNum.ToString().Contains(page.Keywords));
                }
                if (page.GameId!=-1)
                {
                    fun = fun.And(st => st.gameid == page.GameId);
                }
                List<ttablelist> _data = dbhelper.ttablelist.Where(fun).OrderByDescending(o => o.createTime).
                    Skip((page.PageIndex - 1) * page.PageSize).
                    Take(page.PageSize).
                    ToList();
                var  data = from a in _data
                            join b in dbhelper.tgameinfo on a.gameid equals b.id 
                            join c in dbhelper.tgamelevelinfo on a.levelid equals c.Id into cc
                            from cca in cc.DefaultIfEmpty()
                               orderby a.createTime descending
                               select new RoomListView
                               {
                                   tableNum = a.tableNum,
                                   RoomName = cca.Name,
                                   Gamename = b.name,
                                   maxCount = a.maxCount,
                                   curCount = a.curCount,
                                   Duration = a.Duration,
                                   tableStatus = a.tableStatus.ToString(),
                                   tableid = a.tableid,
                                   firstinto = a.firstinto,
                                   baserate = a.baserate,
                                   para = a.para,
                                   createTime = a.createTime.ToString()
                               };
                
                
               


                result.TotalCount = data.Count();
                result.Data = data.
                    //OrderByDescending(o => o.createTime).
                    //Skip((page.PageIndex - 1) * page.PageSize).
                    //Take(page.PageSize).
                    //ToList().
                    Select(a=>new RoomListView
                    {
                        tableNum = a.tableNum,
                        RoomName = a.RoomName,
                        Gamename = a.Gamename,
                        maxCount = a.maxCount,
                        curCount = a.curCount,
                        Duration = a.Duration,
                        tableStatus = Enum.GetName(typeof(TableStatus), int.Parse(a.tableStatus)),
                        tableid = a.tableid,
                        firstinto = a.firstinto,
                        baserate = a.baserate,
                        JsonPara = JsonHelper.JSONToObject<ParaView>(a.para),
                        //basemango = a.basemango,

                        //IsZm = a.IsZm.Equals("1") ? "是" : "否",
                        //IsXiu = string.IsNullOrEmpty(a.IsXiu) ? "否" : a.IsDw.Equals("1") ? "是" : "否",
                        //IsDw = string.IsNullOrEmpty(a.IsDw)? "否" :a.IsDw.Equals("1") ? "是" : "否",
                        //IsSSM = a.IsSSM.Equals("1") ? "是" : "否",
                        createTime = DateTime.Parse(a.createTime.ToString()).ToString("MM-dd hh:mm")
                    }).ToList();
                result.Message = "获取成功";
                return result;
            }
        }

        public ttablelist GetRoomTableById(int id)
        {
            
            return GetEntityByID(id);
        }

        public bool SubmitRoomtable(ttablelist entitiy)
        {
           
            throw new NotImplementedException();
        }
    }
}

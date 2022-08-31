using Crazy2018_Sys_DBHelper;
using Crazy2018_Sys_Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Crazy2018_Sys_Common;
using Crazy2018_Sys_ViewEntity;
using System.Linq.Expressions;

namespace Crazy2018_Sys_Service
{
    public class RoomService : BaseService<tgamelevelinfo, int, texas_2021Entities>, IRoomService
    {
        public DataResults<RoomInfoView> GetRoomInfoData(DPage page)
        {
            DataResults<RoomInfoView> result = new DataResults<RoomInfoView>();
            if (page == null) page = new DPage();
            result.Keywords = page.Keywords;
            result.PageIndex = page.PageIndex;
            result.PageSize = page.PageSize;
            try
            {
                Expression<Func<tgamelevelinfo, bool>> fun = w => w != null && w.deleteState == 0;
                if (!string.IsNullOrEmpty(page.Keywords))
                {
                    fun = w => w != null && w.Name.Contains(page.Keywords) || w.isEnableDesc.Contains(page.Keywords) || w.gametypeDesc.Contains(page.Keywords);
                }
                List<tgamelevelinfo> data = GetEntityLisrByWhere(fun).OrderByDescending(w => w.modifyTime.Value)
                    .Skip((page.PageIndex - 1) * page.PageSize)
                    .Take(page.PageSize).ToList();
                result.TotalCount = data.Count;
                result.Data = data
                    .Select(w => new RoomInfoView
                    {
                        CreatTime = w.modifyTime.Value.ToString("yyyy-MM-dd HH:mm:ss"),
                        BaseRate = w.Baserate.Value,
                        gameid = w.gameid.Value,
                        GametypeDesc = w.gametypeDesc==null?"":w.gametypeDesc,
                        Id = w.Id,
                        Max = w.C_max.Value,
                        Min = w.C_min.Value,
                        OnlineCount = w.onlineCount.Value,
                        OpenTableCount = w.openTableCount.Value,
                        Remark = w.Description,
                        IsEnable=w.isEnable.Value==1?true:false,
                        IsEnableDesc = w.isEnableDesc,
                        ModifyUser = w.modifyUser,
                        Name = w.Name,
                        gameType=w.gametype.Value
                    }).ToList();
                result.Message = "获取数据成功";
            }
            catch (Exception ex)
            {
                Log.Error("获取游戏信息", ex.Message);
                result.Code = (int)Status.fail;
                result.Message = "获取数据失败";
            }
            return result;
        }
    }
}

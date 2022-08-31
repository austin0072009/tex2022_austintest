using ETModel;
using ETModel.Framework.Game.Contract.Action;
using ETModel.Script.CsScript.Action;
using ETModel.Script.Model;
using Model.Scut_Script.Common;
using System;

namespace Model.RedisDB
{
    [MessageHandler(AppType.RedisDB)]
    public class RedisDBRetailUserHandler : AMRpcHandler<RedisDB_RatailUserRequset, RedisDB_RatailUserReply>
    {
        protected async override ETTask Run(Session session, RedisDB_RatailUserRequset request, RedisDB_RatailUserReply response, Action reply)
        {
            var user = BaseBrigeHelper.GetBaseT<tUser>(request.UserID.ToString());
            if (user == null)
            {
                if (request.Type == 1 /*|| request.Type==2*/)
                {
                    response.Error = ErrorCode.ERR_Fail+2;
                    response.Message = $"未找到该玩家";
                    reply();
                    return;
                }                     
                user = BaseBrigeHelper.GetBaseDB<tUser>(request.UserID); 
                if (user != null) BaseBrigeHelper.AddOrUpdateBase(user); 
            }

            if (user == null)
            {
                string headImg = $"{ToolsEx.GetRandomSys(1, 700)}.jpg";
                user = AccountHelper.GetNewUser(request.UserID, 0, 0, "", request.UserName, request.RetailID, 1, headImg);
                BaseBrigeHelper.AddOrUpdateBase(user);
                await AccountHelper.Creater1005(new cs_create1005 { _Sex = 1, HeadID = headImg, NickName = request.UserName, Pid = request.PassportId, RetailID = request.RetailID.ToString() }, "", request.UserID, user);
            }
            if (user != null && request.Gold != 0)
            {
                long lTmpGold = request.Gold;//负数表示转出 正表示转入
                if (request.Gold < 0)
                {// kk 2 out 转出
                    //lTmpGold = -user.GetGoldAndWinGold;
                    request.Type = 1;
                }
                else
                {// out 2 kk 
                    request.Type = 2;
                }
                if (lTmpGold<0 && (user.GetGoldAndWinGold / request.Ratio) < -lTmpGold)
                { 
                    response.Error = ErrorCode.ERR_Fail + 12;
                    response.Message = $"余额不足满足转出";
                    reply();
                    TraceLogEx.Log($"商户日志 userid:  {user.UserID} user.GetGoldAndWinGold:{user.GetGoldAndWinGold} request.Ratio:{request.Ratio} lTmpGold:{-lTmpGold}");
                    return;
                }

                string remark = "";
                if (request.Type == 1)//离开游戏转额度
                {
                    remark = $"商户玩家{GetUInfo(request)}退出游戏,返还金币[{lTmpGold}]给商户[{request.RetailID}]";
                    //request.TransID = IdGenerater.GenerateId().ToString();
                }
                else if (request.Type == 2)//转入额度
                {
                    remark = $"玩家{GetUInfo(request)}在游戏中,从商户[{request.RetailID}]获取金币[{lTmpGold}]";
                }

                if (string.IsNullOrEmpty(request.TransID))
                {
                    response.Error = ErrorCode.ERR_Fail + 7;
                    response.Message = $"订单号不能为null";
                    reply();
                    return;
                }

                if (request.Ratio <= 0) request.Ratio = 1;

                

                long logid = BaseBrigeHelper.UpdateRetailUserTransGoldLog(request.RetailID, user.UserID, request.TransID, 0, lTmpGold, user.Gold, user.Gold + lTmpGold, remark, request.Type);
                if (logid < 0)
                {
                    response.Error = ErrorCode.ERR_Fail + 8;
                    response.Message = $"日志写入失败，Type:{request.Type}";
                    TraceLogEx.Log($"商户日志:  日志写入失败 logid < 0");
                }
                else
                {

                    tgoldchangelog model = new tgoldchangelog()
                    {
                        UserId = request.UserID,
                        Gold = lTmpGold,
                        BeforeGold = user.Gold,
                        AfterGold = user.Gold + lTmpGold,
                        ChangeType = 10,
                        CreateTime = DateTime.Now,
                        Remark = $"{remark}(只记录，不做有效判断)"
                    };
                    BaseBrigeHelper.AddAsync<tgoldchangelog>(model);

                    bool bSuccess = await BaseHelper.UpdateUserGold(request.UserID, lTmpGold) != -999999999;                    
                    RetailInfo retail = BaseBrigeHelper.UpdateTIncre<RetailInfo>("Gold", -lTmpGold, request.RetailID, true, strFixed.strConnectstring_Sns);
                    bool rSuccess = retail != null;
                    //bSuccess rSuccess 为true 才能算成否则要回滚
                    if (bSuccess && rSuccess)
                    {
                        BaseBrigeHelper.UpdateRetailUserTransGoldLogStatus(logid, 1);
                        BaseBrigeHelper.UpdateRetailGoldLog(request.RetailID, request.RetailUser, request.Type, (int)-lTmpGold, remark);
                        CommonLogic.updategold(user, 2);
                        
                        response.lGold = -lTmpGold;
                    }
                    else if (bSuccess && !rSuccess)
                    {
                        response.Error = ErrorCode.ERR_Fail + 9;
                        response.Message = $"商户写分失败"; // user.Gold -= lTmpGold;
                        TraceLogEx.Log($"商户日志: userid:  {user.UserID}   转额为：{lTmpGold}  商户写分失败 bSuccess{bSuccess}  rSuccess:{rSuccess}");
                        await BaseHelper.UpdateUserGold(request.UserID, -lTmpGold);//bSuccess 失败需要回金币
                        BaseBrigeHelper.UpdateRetailUserTransGoldLogStatus(logid, 2);
                    }
                    else if (!bSuccess && rSuccess)
                    {
                        TraceLogEx.Log($"商户日志: userid: {user.UserID}   转额为：{lTmpGold}   玩家写分失败 bSuccess{bSuccess} rSuccess:{rSuccess}");
                        response.Error = ErrorCode.ERR_Fail + 10;
                        response.Message = $"玩家写分失败";
                        BaseBrigeHelper.UpdateTIncre<RetailInfo>("Gold", lTmpGold, request.RetailID, true);//两个都失败不需要回滚
                        BaseBrigeHelper.UpdateRetailUserTransGoldLogStatus(logid, 2);
                    }
                    else
                    {
                        TraceLogEx.Log($"商户日志:  userid: {user.UserID}   转额为：{lTmpGold}   玩家双写分失败 bSuccess{bSuccess} rSuccess:{rSuccess}");
                        response.Error = ErrorCode.ERR_Fail + 11;
                        response.Message = $"玩家双写分失败";
                        BaseBrigeHelper.UpdateRetailUserTransGoldLogStatus(logid, 2);
                    }
                }
            }
            else if (request.Gold == 0)
            {
                response.Error = ErrorCode.ERR_Fail + 11;
                response.Message = "玩家携带金币不能为0";
            }
            else { response.Error = ErrorCode.ERR_Fail + 2; response.Message = "玩家[" + request.UserID + "]不存在"; }
            reply();
        }

        private string GetUInfo(RedisDB_RatailUserRequset request)
        {
            return $"[{request.UserID}]";
        }
    }
}

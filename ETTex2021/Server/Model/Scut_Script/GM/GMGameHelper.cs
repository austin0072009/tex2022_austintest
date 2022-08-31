using Common.NLog;
using ETModel.Framework.Common.Serialization;
using ETModel.Script.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ETModel.Script.CsScript.Action
{
    public class GMGameHelper
    {

        /// <summary>
        /// //设置指定玩家牌型 
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async static Task<string> SetCardWhiGM(string json)
        {
            cs_currentitydto_gm<cs_setcard_gm> _setcard = JsonUtils.Deserialize<cs_currentitydto_gm<cs_setcard_gm>>(json);
            string strValue = "";
            if (_setcard != null)
            {
                int _gameid1001 = _setcard.entity.gameid;
                int tnum = _setcard.entity.tablenum;
                strValue = await FactoryBaseHelper.DealDataExGM(_gameid1001, tnum, _setcard.fn, json );
                sc_base_gm _scSetcard = new sc_base_gm() {  _info = "", _ret = 1 }; 

                return strValue;
            }
            else return "0";
        }

        /// <summary>
        /// 修改充值金额或钻石
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CsChargegm(string json)
        {
            cs_charge_gm _charge = JsonUtils.Deserialize<cs_charge_gm>(json);
            sc_charge_gm _scResult = new sc_charge_gm() {  _info = "", _ret = 0, UserMoney = 0 };
            if (_charge != null)
            {
                {
                    tUser _user = await tb_UserEx.GetFromCachebyUserID(_charge.userid);
                    if (_user != null)
                    {
                        if (_charge.money < 0)
                        {   //金币不足不能减金币
                            sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "金币不能为负" + _charge.money, _ret = 1 };
                            return JsonUtils.Serialize(_scSetcard);
                        }
                        long changeMoney = (long)_charge.money;
                        long usergold = 0;//充值之前的金币数量
                        if (_charge.type == 1)
                        {
                            var intmax = _charge.money + _user.GetGoldAndWinGold;
                            if (intmax >= int.MaxValue)
                            {
                                _scResult._ret = 0;
                                _scResult._info = "超过最大限制";
                                return JsonUtils.Serialize(_scResult);
                            }
                            _user.Gold += (long)_charge.money;
                            _user.TotalGold += (long)_charge.money;
                            tb_userinfoEx.UpdateSigninData(_user.UserID, (long)_charge.money);

                            _scResult.UserMoney = _user.GetGoldAndWinGold;
                            usergold = _user.GetGoldAndWinGold;
                            BaseHelper.ChangeUserGameDate(_user.UserID, 0, "RechargeCount");
                            BaseHelper.ChangeUserGameDate(_user.UserID, 0, "RechargeAmount", (int)_charge.money);
                            tUserJackpotEx.CheckReChangeDg(_user.UserID);
                            if(_charge.money >= 10000) await VIPHelper.SetUserVipLev(_user.UserID, 1,-1);
                        }
                        else if (_charge.type == 2)
                        {
                            if (_charge.money > _user.GetGoldAndWinGold)
                            {   //金币不足不能减金币
                                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "下分金币大于了身上的金币" + _charge.money, _ret = 1 };
                                return JsonUtils.Serialize(_scSetcard);
                            }
                            _user.GoldReduce((long)_charge.money);
                            _scResult.UserMoney = _user.GetGoldAndWinGold;
                            changeMoney = changeMoney * -1;

                            usergold = _user.GetGoldAndWinGold;
                            _scResult.UserMoney = _user.GetGoldAndWinGold;
                        }
                        else if (_charge.type == 3)
                        {
                            var intmax = _charge.money + _user.diamond;
                            if (intmax >= int.MaxValue)
                            {
                                _scResult._ret = 0;
                                _scResult._info = "超过最大限制";
                                return JsonUtils.Serialize(_scResult);
                            }

                            _scResult.UserMoney = _user.diamond;
                            _user.diamond += (long)_charge.money;
                            _user.Totaldiamond += (long)_charge.money;

                            usergold = _user.diamond;
                        }
                        else if (_charge.type == 4)
                        {
                            if ((long)_charge.money > (long)_user.diamond)
                            {   //金币不足不能减金币
                                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "下分金币大于了身上的金币" + _charge.money, _ret = 1 };
                                return JsonUtils.Serialize(_scSetcard);
                            }
                            _scResult.UserMoney = _user.diamond;

                            _user.diamond -= (long)_charge.money;
                            _scResult.UserMoney = _user.diamond;
                            usergold = _user.diamond;
                            changeMoney = Convert.ToInt64(_charge.money) * -1;//变化值
                        }

                        #region 充值也加上充值日志

                        if (_charge.type == 4 || _charge.type == 3)
                        {
                            tDiamondChangeLog dlog = new tDiamondChangeLog();
                            dlog.BeforeGold = usergold - changeMoney;
                            dlog.AfterGold = usergold;
                            dlog.ChangeType = 1;
                            dlog.UserId = _user.UserID;
                            dlog.Gold = changeMoney;
                            BaseHelper.AddAsync(dlog);
                        }
                        else
                        {
                            tgoldchangelog model = new tgoldchangelog();
                            model.UserId = _user.UserID;
                            model.Gold = changeMoney;
                            model.BeforeGold = usergold - changeMoney;
                            model.GameId = 51;
                            model.AfterGold = usergold;
                            model.IsRobot = false;
                            model.ChangeType = _charge.type == 2 ? 47 : 10;
                            BaseHelper.AddAsync(model);
                        }
                        #endregion
                        tb_UserEx.UpdateData(_user);
                        _charge.type = _charge.type < 3 ? 2 : 1;
                        CommonLogic.updategold(_user, _charge.type);
                    }
                    else
                    {
                        _scResult._ret = 1;
                        _scResult._info = "会员不存在";
                    }
                    return JsonUtils.Serialize(_scResult);
                }
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }
            return JsonUtils.Serialize(_scResult);
        }


        public static async Task<string> AllianceCharge(string json)
        {
            cs_alliancecharge_gm _charge = JsonUtils.Deserialize<cs_alliancecharge_gm>(json);
            sc_alliancecharge_gm _scResult = new sc_alliancecharge_gm() {  _info = "", _ret = 1 };
            if (_charge != null)
            {
                tcluballiance allian = await BaseHelper.GetShare<tcluballiance>(_charge.allid);
                if (allian != null)
                {
                    if (_charge.type.Equals(1))
                    {
                        allian.gold += _charge.gold;
                        BaseHelper.AddOrUpdate(allian);
                        _scResult._ret = 0;
                    }
                    else
                    {
                        if (allian.gold < _charge.gold)
                        {
                            _scResult._ret = 1;
                            _scResult._info = "余额不足";
                        }
                        else
                        {
                            allian.gold -= _charge.gold;
                            BaseHelper.AddOrUpdate(allian);
                            _scResult._ret = 0;
                        }
                    }
                }
            }
            return JsonUtils.Serialize(_scResult);
        }


        /// <summary>
        /// 修改充值金额或钻石
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CsClubChargegm(string json)
        {
            cs_clubcharge_gm _charge = JsonUtils.Deserialize<cs_clubcharge_gm>(json);
            if (_charge != null)
            {
                sc_charge_gm _scResult = new sc_charge_gm() { fn = "sc_charge_gm", _info = "", _ret = 1, UserMoney = 0 };
                tclub _tclub = await ClubHelper.GetFromCachebyID(_charge.idx);//获取club
                tUser clubUser = await BaseHelper.GetBase<tUser>(_tclub.UserId);
                if (_tclub != null && clubUser != null)
                {
                    if (_charge.money < 0)
                    {   //金币不足不能减金币
                        _scResult._info = "club币不能为负" + _charge.money; _scResult._ret = -1;
                        return JsonUtils.Serialize(_scResult);
                    }
                    long changeMoney = (long)_charge.money;
                    long usergold = 0;//充值之前的金币数量
                    if (_charge.type == 1)
                    {

                        clubUser.Gold += (long)_charge.money;
                        await BaseHelper.AddOrUpdateBase(clubUser);
                        _scResult.UserMoney = clubUser.GetGoldAndWinGold;
                        usergold = clubUser.GetGoldAndWinGold;
                    }
                    else if (_charge.type == 2)
                    {
                        if ((int)_charge.money > (int)clubUser.GetGoldAndWinGold)
                        {   //金币不足不能减金币
                            sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "下分club币大于了身上的club币" + _charge.money, _ret = -1 };
                            return JsonUtils.Serialize(_scSetcard);
                        }
                        clubUser.GoldReduce((long)_charge.money);
                        await BaseHelper.AddOrUpdateBase(clubUser);

                        _scResult.UserMoney = clubUser.GetGoldAndWinGold;
                        changeMoney = changeMoney * -1;
                        usergold = clubUser.GetGoldAndWinGold;
                        _scResult.UserMoney = clubUser.GetGoldAndWinGold;
                    }
                    else if (_charge.type == 3)
                    {
                        if (_tclub.diam < _charge.money)
                        {
                            sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "钻石不足" + _charge.money, _ret = -1 };
                            return JsonUtils.Serialize(_scSetcard);
                        }
                        _scResult.UserMoney = _tclub.diam;
                        _tclub.diam += (long)_charge.money;
                        usergold = _tclub.diam;
                    }
                    else if (_charge.type == 4)
                    {
                        if ((int)_charge.money > (int)_tclub.diam)
                        {   //金币不足不能减金币
                            sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "下分钻石大于了身上的钻石" + _charge.money, _ret = -1 };
                            return JsonUtils.Serialize(_scSetcard);
                        }
                        _scResult.UserMoney = _tclub.diam;
                        _tclub.diam -= (long)_charge.money;
                        _scResult.UserMoney = _tclub.diam;
                        usergold = _tclub.diam;
                        changeMoney = Convert.ToInt64(_charge.money) * -1;//变化值

                    }

                    #region 充值也加上充值日志

                    if (_charge.type == 4 || _charge.type == 3)
                    {
                        tDiamondChangeLog dlog = new tDiamondChangeLog();
                        dlog.BeforeGold = usergold - changeMoney;
                        dlog.AfterGold = usergold;
                        dlog.ChangeType = 1;
                        dlog.UserId = _tclub.idx;
                        dlog.Gold = changeMoney;
                        BaseHelper.AddAsync(dlog);
                    }
                    else
                    {
                        tgoldchangelog model = new tgoldchangelog();
                        model.UserId = clubUser.UserID;
                        model.Gold = changeMoney;
                        model.BeforeGold = usergold - changeMoney;
                        model.GameId = TexasLobby.instance._gameid;
                        model.AfterGold = usergold;
                        model.IsRobot = false;
                        model.ChangeType = _charge.type == 1 ? 10 : 47;
                        BaseHelper.AddAsync(model);
                    }
                    #endregion
                    ClubHelper.UpdateData(_tclub);
                    CommonLogic.updategold(clubUser,2);
                    _charge.type = _charge.type < 3 ? 2 : 1;
                    _scResult._ret = 0;
                    _scResult._info = "操作成功!";
                }
                else
                {
                    _scResult._ret = -1;
                    _scResult._info = "club不存在";
                }
                return JsonUtils.Serialize(_scResult);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "参数错误", _ret = -1 };
                return JsonUtils.Serialize(_scSetcard);
            }
        }

        /// <summary>
        /// 修改充值金额或钻石
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CsUnionChargegm(string json)
        {
            cs_unioncharge_gm _charge = JsonUtils.Deserialize<cs_unioncharge_gm>(json);
            if (_charge != null)
            {
                sc_charge_gm _scResult = new sc_charge_gm() {  _info = "", _ret = 0, UserMoney = 0 };
                tcluballiance _tclub = await AllianceHelper.GetUnionByIdx(_charge.idx);//获取club
                if (_tclub != null)
                {
                    long changeMoney = (long)_charge.money;
                    long usergold = 0;//充值之前的金币数量
                    if (_charge.type == 1)
                    {
                        _tclub.gold += (long)_charge.money;
                        _scResult.UserMoney = _tclub.gold;
                        usergold = _tclub.gold;
                    }
                    else if (_charge.type == 2)
                    {
                        if ((int)_charge.money > (int)_tclub.gold)
                        {   //金币不足不能减金币
                            sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "下分金币大于了身上的金币" + _charge.money, _ret = 1 };
                            return JsonUtils.Serialize(_scSetcard);
                        }
                        _tclub.gold -= (long)_charge.money;
                        _scResult.UserMoney = _tclub.gold;
                        changeMoney = changeMoney * -1;
                        usergold = _tclub.gold;
                        _scResult.UserMoney = _tclub.gold;
                    }
                    else if (_charge.type == 3)
                    {
                        _scResult.UserMoney = _tclub.diam;
                        _tclub.diam += (long)_charge.money;
                        usergold = _tclub.diam;
                    }
                    else if (_charge.type == 4)
                    {
                        if ((int)_charge.money > (int)_tclub.diam)
                        {   //金币不足不能减金币
                            sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "下分金币大于了身上的金币" + _charge.money, _ret = 1 };
                            return JsonUtils.Serialize(_scSetcard);
                        }
                        _scResult.UserMoney = _tclub.diam;
                        _tclub.diam -= (long)_charge.money;
                        _scResult.UserMoney = _tclub.diam;
                        usergold = _tclub.diam;
                        changeMoney = Convert.ToInt64(_charge.money) * -1;//变化值

                    }

                    #region 充值也加上充值日志

                    if (_charge.type == 4 || _charge.type == 3)
                    {
                        tDiamondChangeLog dlog = new tDiamondChangeLog();
                        dlog.BeforeGold = usergold - changeMoney;
                        dlog.AfterGold = usergold;
                        dlog.ChangeType = 1;
                        dlog.UserId = (int)_tclub.idx;
                        dlog.Gold = changeMoney;
                        BaseHelper.AddAsync(dlog);
                    }
                    else
                    {
                        tgoldchangelog model = new tgoldchangelog();
                        model.UserId = (int)_tclub.idx;
                        model.Gold = changeMoney;
                        model.BeforeGold = usergold - changeMoney;
                        model.GameId = TexasLobby.instance._gameid;
                        model.AfterGold = usergold;
                        model.IsRobot = false;
                        model.ChangeType = 10;
                        BaseHelper.AddAsync(model);
                    }
                    #endregion
                    AllianceHelper.UpdateData(_tclub);
                    _charge.type = _charge.type < 3 ? 2 : 1;
                    // CommonLogic.updategold(_user, _charge.type);
                }
                else
                {
                    _scResult._ret = 1;
                    _scResult._info = "联盟不存在";
                }
                return JsonUtils.Serialize(_scResult);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }
        }

        /// <summary>
        /// club会员充值club币
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CsChlidChargegm(string json)
        {
            cs_chlidcharge_gm _charge = JsonUtils.Deserialize<cs_chlidcharge_gm>(json);
            if (_charge != null)
            {
                sc_charge_gm _scResult = new sc_charge_gm() {  _info = "", _ret = 1, UserMoney = 0 };
                tclub _tclub = await ClubHelper.GetFromCachebyID(_charge.idx);//获取club
                if (_tclub != null)
                {
                    tUser chlid = await tb_UserEx.GetFromCachebyUserID(_charge.userid);
                    if (chlid != null)
                    {
                        tUser _creauser = await tb_UserEx.GetFromCachebyUserID(_tclub.UserId);//创始人id
                        if (_charge.money < 0)
                        {   //金币不足不能减金币
                            _scResult._info = "金币不能为负" + _charge.money; _scResult._ret = -1;
                            return JsonUtils.Serialize(_scResult);
                        }
                        long changeMoney = (long)_charge.money;
                        long usergold = 0;//充值之前的金币数量
                        if (_charge.type == 1)
                        {
                            if (_creauser.Gold < _charge.money)
                            {
                                _scResult._info = "club币不足" + _charge.money;
                                return JsonUtils.Serialize(_scResult);
                            }
                            chlid.Gold += (long)_charge.money;
                            _creauser.GoldReduce((long)_charge.money);
                            _scResult.UserMoney = chlid.Gold;
                            usergold = chlid.Gold;


                        }
                        else if (_charge.type == 2)
                        {
                            if ((int)_charge.money > (int)chlid.Gold)
                            {   //金币不足不能减金币
                                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "下分金币大于了身上的金币" + _charge.money, _ret = -1 };
                                return JsonUtils.Serialize(_scSetcard);
                            }
                            chlid.GoldReduce((long)_charge.money);
                            _creauser.Gold += (long)_charge.money;
                            _scResult.UserMoney = chlid.GetGoldAndWinGold;
                            changeMoney = changeMoney * -1;
                            usergold = chlid.GetGoldAndWinGold;
                            _scResult.UserMoney = chlid.GetGoldAndWinGold;


                        }
                        else if (_charge.type == 3)
                        {
                            if ((int)_creauser.diamond < (int)_charge.money)
                            {   //钻石不足不
                                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "当前钻石不足" + _charge.money, _ret = -1 };
                                return JsonUtils.Serialize(_scSetcard);
                            }
                            _scResult.UserMoney = _creauser.diamond;
                            _creauser.diamond -= (long)_charge.money;
                            chlid.diamond += (long)_charge.money;
                            chlid.Totaldiamond += (long)_charge.money;
                            usergold = _tclub.diam;
                            tDiamondChangeLog dlog = new tDiamondChangeLog();
                            dlog.BeforeGold = _creauser.diamond - (long)_charge.money;
                            dlog.AfterGold = _creauser.diamond;
                            dlog.ChangeType = 1;
                            dlog.UserId = chlid.UserID;
                            dlog.Gold = (long)_charge.money;
                            BaseHelper.AddAsync(dlog);
                        }
                        else if (_charge.type == 4)
                        {
                            if ((int)_charge.money > (int)chlid.diamond)
                            {   //金币不足不能减金币
                                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "下分钻石大于了身上的钻石" + _charge.money, _ret = -1 };
                                return JsonUtils.Serialize(_scSetcard);
                            }
                            _scResult.UserMoney = _tclub.diam;
                            _creauser.diamond += (long)_charge.money;
                            chlid.diamond -= (long)_charge.money;
                            chlid.Totaldiamond -= (long)_charge.money;
                            _scResult.UserMoney = _creauser.diamond;
                            usergold = _creauser.diamond;
                            changeMoney = Convert.ToInt64(_charge.money) * -1;//变化值
                            tDiamondChangeLog dlog = new tDiamondChangeLog();
                            dlog.BeforeGold = _creauser.diamond + (long)_charge.money;
                            dlog.AfterGold = _creauser.diamond;
                            dlog.ChangeType = 1;
                            dlog.UserId = chlid.UserID;
                            dlog.Gold = (long)_charge.money;
                            BaseHelper.AddAsync(dlog);
                        }

                        ClubHelper.UpdateData(_tclub);
                        tb_UserEx.UpdateData(chlid);
                        tb_UserEx.UpdateData(_creauser);
                        _charge.type = _charge.type < 3 ? 2 : 1;
                        _scResult._ret = 0;
                        // CommonLogic.updategold(_user, _charge.type);
                    }

                }
                else
                {
                    _scResult._ret = -1;
                    _scResult._info = "club不存在";
                }
                return JsonUtils.Serialize(_scResult);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "参数错误", _ret = -1 };
                return JsonUtils.Serialize(_scSetcard);
            }
        }
        /// <summary>
        /// 修改club币   联盟向club发币 或钻石
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> ModifyClubgold(string json)
        {
            cs_modifyclubgolg_club _data = JsonUtils.Deserialize<cs_modifyclubgolg_club>(json);
            sc_modifyclubgolg_club _senddata = new sc_modifyclubgolg_club() { result = 0};
            var calli = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _data.alliIid);
            tUser _alluser = await tb_UserEx.GetFromCachebyUserID(calli.UserId);//创始人id
            var club = await BaseHelper.GetShare<tclub>((x) => x.idx == _data.clubId);
            tUser _cuser = await tb_UserEx.GetFromCachebyUserID(club.UserId);//club创始人id
            int reslut = 0;
            if (_data.gold <= 0)
            {
                reslut = 0;
            }
            else
            {
                if (calli != null && club != null)
                {
                    if (_data.type.Equals(1))  //发放
                    {
                        if (calli.gold < _data.gold)
                        {
                            reslut = -2;//联盟币不足
                        }
                        else
                        {
                            calli.gold -= _data.gold;
                            club.gold += _data.gold;

                            tclubusergoldlog clibuserlog = new tclubusergoldlog();
                            clibuserlog.ClubId = club.idx;
                            clibuserlog.BeforeGold = club.gold - _data.gold;
                            clibuserlog.AfterGold = club.gold;
                            clibuserlog.ChangeType = 8;
                            clibuserlog.Gold = _data.gold;
                            clibuserlog.UserId = 0;
                            await BaseHelper.AddAsyncWait(clibuserlog);
                            tCommonlogEx.WriteClubGoldlog(club.gold, club.gold - _data.gold, 8, club.idx, _data.gold, "", 0);


                            await BaseHelper.AddOrUpdate(calli);
                            await BaseHelper.AddOrUpdate(club);
                            reslut = 1;
                        }
                    }
                    else if (_data.type.Equals(2))//回收
                    {
                        if (club.gold < _data.gold)
                        {
                            reslut = -3;//回收club币不足
                        }
                        else
                        {
                            club.gold -= _data.gold;
                            calli.gold += _data.gold;
                            if (club.gold < 100) club.gold = 0;//不足1  直接清0

                            tclubusergoldlog clibuserlog = new tclubusergoldlog();
                            clibuserlog.ClubId = club.idx;
                            clibuserlog.BeforeGold = club.gold + _data.gold;
                            clibuserlog.AfterGold = club.gold;
                            clibuserlog.ChangeType = 9;
                            clibuserlog.Gold = _data.gold;
                            clibuserlog.UserId = 0;
                            await BaseHelper.AddAsyncWait(clibuserlog);
                            tCommonlogEx.WriteClubGoldlog(club.gold, club.gold + _data.gold, 9, club.idx, _data.gold, "", 0);

                            await BaseHelper.AddOrUpdate(calli);
                            await BaseHelper.AddOrUpdate(club);
                            reslut = 1;
                        }
                    }
                    else if (_data.type.Equals(3))//钻石发放 
                    {
                        if (_alluser.diamond < _data.gold)
                        {
                            reslut = -2;//联盟币不足
                        }
                        else
                        {
                            _alluser.diamond -= _data.gold;
                            _cuser.diamond += _data.gold;

                            //tclubusergoldlog clibuserlog = new tclubusergoldlog();
                            //clibuserlog.ClubId = club.idx;
                            //clibuserlog.BeforeGold = club.gold - _data.gold * 100;
                            //clibuserlog.AfterGold = club.gold;
                            //clibuserlog.ChangeType = 8;
                            //clibuserlog.Gold = _data.gold * 100;
                            //clibuserlog.UserId = 0;
                            //BaseHelper.AddAsync(clibuserlog);
                            tDiamondChangeLog dlog = new tDiamondChangeLog();
                            dlog.BeforeGold = club.gold - _data.gold;
                            dlog.AfterGold = club.gold;
                            dlog.ChangeType = 1;
                            dlog.UserId = 0;
                            dlog.Gold = _data.gold;
                            await BaseHelper.AddAsyncWait(dlog);
                            //  tCommonlogEx.WriteClubGoldlog(club.gold, club.gold - _data.gold * 100, 8, club.idx, _data.gold * 100, "", 0);


                            await BaseHelper.AddOrUpdate(calli);
                            await BaseHelper.AddOrUpdate(club);
                            reslut = 1;
                        }

                    }
                    else //钻石回收
                    {
                        if (club.gold < _data.gold)
                        {
                            reslut = -3;//回收club币不足
                        }
                        else
                        {
                            _cuser.diamond -= _data.gold;
                            _alluser.diamond += _data.gold;

                            if (club.diam < 100) club.diam = 0;//不足1  直接清0

                            //tclubusergoldlog clibuserlog = new tclubusergoldlog();
                            //clibuserlog.ClubId = club.idx;
                            //clibuserlog.BeforeGold = club.gold + _data.gold * 100;
                            //clibuserlog.AfterGold = club.gold;
                            //clibuserlog.ChangeType = 9;
                            //clibuserlog.Gold = _data.gold * 100;
                            //clibuserlog.UserId = 0;
                            //BaseHelper.AddAsync(clibuserlog);
                            tDiamondChangeLog dlog = new tDiamondChangeLog();
                            dlog.BeforeGold = club.gold + _data.gold;
                            dlog.AfterGold = club.gold;
                            dlog.ChangeType = 1;
                            dlog.UserId = 0;
                            dlog.Gold = _data.gold;
                            await BaseHelper.AddAsyncWait(dlog);
                            // tCommonlogEx.WriteClubGoldlog(club.gold, club.gold + _data.gold * 100, 9, club.idx, _data.gold * 100, "", 0);

                            await BaseHelper.AddOrUpdate(calli);
                            await BaseHelper.AddOrUpdate(club);
                            reslut = 1;
                        }

                    }
                }
                else reslut = -1;
            }
            _senddata.result = reslut;
            return JsonUtils.Serialize(_senddata);
        }
        /// <summary>
        /// club会员 解冻或者冻结
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> UPdateChlidStatus(string json)
        {
            cs_chlidstatus_gm _charge = JsonUtils.Deserialize<cs_chlidstatus_gm>(json);
            if (_charge != null)
            {
                sc_status_gm _scResult = new sc_status_gm() {  _info = "", _ret = 0, status = 0 };
                tclub _tclub = await ClubHelper.GetFromCachebyID(_charge.idx);//获取club
                if (_tclub != null)
                {
                    UserClub chlid = _tclub.childs.Where(x => x.userid == _charge.userid).FirstOrDefault();
                    if (chlid != null)
                    {
                        chlid.status = _charge.status;
                        _scResult.status = _charge.status;
                        ClubHelper.UpdateData(_tclub);
                    }
                }
                return JsonUtils.Serialize(_scResult);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }
        }

        /// <summary>
        /// 升级联盟
        /// </summary>
        /// <param name="_user"></param>
        /// <param name="_data"></param>
        /// <returns></returns>
        public static async Task<string> UpAllilevel(string json)
        {
            cs_allilevel_alli _data = JsonUtils.Deserialize<cs_allilevel_alli>(json);

            sc_allilevel_alli _senddata = new sc_allilevel_alli() { result = 0 };
            var alli = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _data.alliId);
            tUser _user = await tb_UserEx.GetFromCachebyUserID(alli.UserId);
            int result = 0;
            if (alli != null)
            {
                if (_data.lv <= alli.lv) result = -2;
                else
                {
                    var levelcofig = await AllianceHelper.GetLevelCofigBylevel(2, _data.lv);
                    alli.lv = _data.lv;
                    _user.diamond -= levelcofig.diamond;
                    tb_UserEx.UpdateData(_user);
                    await BaseHelper.AddOrUpdate<tcluballiance>(alli);

                    tDiamondChangeLog dlog = new tDiamondChangeLog();
                    dlog.BeforeGold = _user.diamond + levelcofig.diamond;
                    dlog.AfterGold = _user.diamond;
                    dlog.ChangeType = 4;
                    dlog.UserId = _user.UserID;
                    dlog.Gold = levelcofig.diamond;
                    BaseHelper.AddAsync(dlog);

                    CommonLogic.updategold(_user, 1);
                    result = 1;
                }
            }
            else result = -1;

            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;


        }

        /// <summary>
        /// 联盟会员充值club币
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CsUnionChlidChargegm(string json)
        {
            cs_unionchlidcharge_gm _charge = JsonUtils.Deserialize<cs_unionchlidcharge_gm>(json);
            sc_unionchlidcharge_gm _senddata = new sc_unionchlidcharge_gm() { _ret = 0,_info = "" };
            if (_charge != null)
            {
                sc_charge_gm _scResult = new sc_charge_gm() {  _info = "", _ret = 0, UserMoney = 0 };
                tcluballiance alliance = await AllianceHelper.GetUnionByIdx(_charge.allid);//获取club
                if (alliance != null)
                {
                    tclub _tclub = await BaseHelper.GetShare<tclub>(_charge.clubid);
                    tUser clubuser = await BaseHelper.GetBase<tUser>(_tclub.UserId);
                    if (_tclub != null && clubuser!=null)
                    {
                        if (_charge.money < 0)
                        {   //金币不足不能减金币
                            _senddata._ret = 1;
                            _senddata._info = "金币不能为负!";
                            return JsonUtils.Serialize(_senddata);
                        }
                        long usergold = 0;//充值之前的金币数量
                        if (_charge.type == 1)
                        {
                            if (alliance.gold < _charge.money)
                            {
                                _senddata._ret = -2;
                                _senddata._info = "联盟余额不足!";
                                return JsonUtils.Serialize(_senddata);
                            }
                            alliance.gold -= (int)_charge.money;
                            clubuser.Gold += (int)_charge.money;
                            _scResult.UserMoney = clubuser.GetGoldAndWinGold;
                            usergold = clubuser.GetGoldAndWinGold;
                        }
                        else if (_charge.type == 2)
                        {
                            if (_charge.money > clubuser.GetGoldAndWinGold)
                            {   //金币不足不能减金币
                                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "下分金币大于了身上的金币" + _charge.money, _ret = 1 };
                                return JsonUtils.Serialize(_scSetcard);
                            }
                            clubuser.GoldReduce(_charge.money);
                            alliance.gold += _charge.money;
                            _scResult.UserMoney = clubuser.GetGoldAndWinGold;
                            usergold = clubuser.GetGoldAndWinGold;
                            _scResult.UserMoney = clubuser.GetGoldAndWinGold;
                        }

                        tgoldchangelog model = new tgoldchangelog();
                        model.UserId = (int)clubuser.UserID;
                        model.Gold = _charge.money;
                        model.BeforeGold = usergold - _charge.money;
                        model.GameId = TexasLobby.instance._gameid;
                        model.AfterGold = usergold;
                        model.IsRobot = false;
                        model.ChangeType = _charge.type == 1 ? 10 : 47;
                        BaseHelper.AddAsync(model);

                        AllianceHelper.UpdateData(alliance);
                        await BaseHelper.AddOrUpdateBase<tUser>(clubuser);
                    }

                }
                else
                {
                    _scResult._ret = 1;
                    _scResult._info = "联盟不存在";
                }
                return JsonUtils.Serialize(_scResult);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }
        }

        /// <summary>
        /// 修改商品信息
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> UPdateCommodity(string json)
        {
            cs_commodity_gm _charge = JsonUtils.Deserialize<cs_commodity_gm>(json);
            if (_charge != null)
            {
                sc_charge_gm _scResult = new sc_charge_gm() {  _info = "", _ret = 0, UserMoney = 0 };
                tCommodity _comm = await BaseHelper.GetShare<tCommodity>(_charge.id);
                if (_comm != null)
                {

                    _comm.name = _charge.Name;
                    _comm.introduce = _charge.Introduce;
                    _comm.exchangeValue = _charge.ExchangeValue;
                    _comm.commodityvValue = _charge.CommodityvValue;
                    _comm.commodityType = (CommodityType)_charge.CommodityType;
                    _comm.isEnable = _charge.IsEnable;
                    _comm.url = _charge.ImgUrl;
                    await BaseHelper.AddOrUpdate(_comm);

                }
                else
                {
                    _scResult._ret = 1;
                    _scResult._info = "商品不存在";
                }
                return JsonUtils.Serialize(_scResult);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }
        }


        public static string UpdateServerlist(string json)
        {
            sc_updateserverlist_gm_n send = new sc_updateserverlist_gm_n() { result = 1 };
            LobbySendDataServer.AutoNotifySendData(JsonUtils.Serialize((send)));
            return JsonUtils.Serialize(new sc_base_gm() {  _ret = 0 });
        }

        public static async Task<string> EnterRoomGM(string json)
        {
            cs_enterroom cs = null;
            try
            {
                cs = JsonUtils.Deserialize<cs_enterroom>(json);
                if (cs != null && cs._g > 0)
                {
                    var user = await BaseHelper.GetARobot();
                    int userid = user.UserID;
                    BaseHelper.RobotCallback(user);
                    string errcode = "机器人[" + userid + "]加入游戏[" + cs._g + "]房间[" + cs.levelid + "]失败";
                    var result = await Game.Scene.GetComponent<LobbyProxyComponent>().GetDBCommonFun2Async(cs._g, "EnterRoom", userid, json);
                    try
                    {
                        var msg = JsonUtils.Deserialize<sc_enterroom>(result);
                        if (msg != null && msg.tableid > 0 && msg.result == 1) return await EnterTableGM(JsonUtils.Serialize(new cs_enterrobot_gm { cc = cs.cc, _g = cs._g, tableid = msg.tableid, levelid = cs.levelid }));
                    }
                    catch (Exception ex)
                    {
                        TraceLogEx.Error(ex, errcode);
                    }
                    return errcode;
                }
            }
            catch (Exception ex) { TraceLogEx.Error(ex, "消息错误,机器人加入房间失败,消息为:" + json); }
            return "消息错误,机器人加入房间失败";
        }

        public static async Task<string> EnterTableGM(string json)
        {
            try
            {
                var enter = JsonUtils.Deserialize<cs_enterrobot_gm>(json);
                if (enter != null)
                {
                    if (enter._g <= 0) return "无法在[" + enter._g + "]游戏中加入机器人";
                    if (enter.tableid <= 0) return "牌桌号[" + enter.tableid + "]错误，在游戏[" + enter._g + "]中加入机器人失败";
                    var result = await FactoryBaseHelper.DealDataExGM(enter._g, enter.tableid, enter.fn, json); 
                    try
                    {
                        var sc = JsonUtils.Deserialize<sc_enterrobot_gm>(result);
                        if (sc != null && sc.result == 1)
                        {
                            return "在游戏[" + enter._g + "]牌桌[" + enter.tableid + "]中加入机器人成功!!!";
                        }
                        return "在游戏[" + enter._g + "]牌桌[" + enter.tableid + "]中加入机器人失败!!!";
                    }
                    catch (Exception ex)
                    {
                        TraceLogEx.Error(ex, "加入机器人时解析返回值发生异常,返回值为:" + result);
                        return "解析返回值发生异常,加入机器人发生失败";
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "加入机器人时发生异常,消息为:" + json);
                return "加入机器人时发生异常";
            }
            return "消息错误,机器人加入牌桌失败";
        }
        public static async Task<string> CreateClubGM(string _data)
        { 
            cs_create_club enter = JsonUtils.Deserialize<cs_create_club>(_data);
            if (enter != null)
            { 
                tUser user = await tb_UserEx.GetFromCachebyUserID(enter.userid);
                if (user != null)
                { 
                    return await ClubHelper.CreateClub(user, enter);
                }
                return JsonUtils.Serialize(new sc_create_club() { _ret = 0, fn = "sc_create_club",_info= "在userid:[" + enter.userid + "] 没找到， 创建失败!" });
            }
            return JsonUtils.Serialize(new sc_create_club() { _ret = 0, fn = "sc_create_club", _info = "消息错误,创建失败" });
        }

        public static async Task<string> CreateAllinaceGM(string _data)
        {
            cs_create_alli enter = JsonUtils.Deserialize<cs_create_alli>(_data);
            if (enter != null)
            {
                return await AllianceHelper.CreateAllinace(enter);
            }

            return "消息错误,创建失败";
        }

        /// <summary>
        /// 修改社区得参数
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> ModifyClubinfo(string json)
        {
            cs_setclubinfo_gm _data = JsonUtils.Deserialize<cs_setclubinfo_gm>(json);
            sc_setclubinfo_gm _senddata = new sc_setclubinfo_gm() { _info = "设置成功！", _ret = 0 };

            if (_data.idType.Equals(1))
            {
                var allian = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _data.id);
                if (allian != null)
                {
                    if (_data.type.Equals(1))
                    {
                        allian.limitcount = _data.value;

                    }
                    else if (_data.type.Equals(2))
                    {
                        var _clublist = await BaseHelper.GetShareAll<tclub>((x) => x.alliancid == allian.idx);
                        var drate = _clublist.Where(t => t.insRate > _data.value);
                        if (_clublist!=null && drate.Count() > 0)
                        {
                            _senddata._info = "下级社区基金比例不能大于联盟基金比例！范围 0-"+ drate.OrderByDescending(t => t.insRate).FirstOrDefault().insRate;
                            _senddata._ret = 1;
                            return JsonUtils.Serialize(_senddata);
                        }else if (_data.value>100)
                        {
                            _senddata._info = "值异常 小于等于100";
                            _senddata._ret = 1;
                            return JsonUtils.Serialize(_senddata);
                        }
                        else allian.insRate = _data.value;
                    }else if (_data.type.Equals(4))
                    {
                        if(_data.value > 100)
                        {
                            _senddata._info = "反利值异常 小于等于100";
                            _senddata._ret = 1;
                            return JsonUtils.Serialize(_senddata);
                        }
                        allian.cgoldRate = _data.value;
                    }else if (_data.type.Equals(6))
                    {
                        if (allian.bankinfo == null) allian.bankinfo = new Framework.Cache.Generic.CacheList<cardinfo>();
                        var binfo = JsonUtils.Deserialize<Framework.Cache.Generic.CacheList<cardinfo>>(_data.svalue);
                        allian.bankinfo = binfo;
                    }
                    else
                    {
                        if (allian.gold < _data.value * 100)
                        {
                            _senddata._info = "联盟余额不足";
                            _senddata._ret = 1;
                            return JsonUtils.Serialize(_senddata);
                        }
                        allian.gold -= _data.value * 100;
                        allian.inspot += _data.value * 100;

                        tclubfundlog fundlog = new tclubfundlog();
                        fundlog.ClubId = allian.idx;
                        fundlog.ChangeType = 1;
                        fundlog.Price = (int)_data.value;
                        fundlog.UserId = 0;
                        fundlog.fundtotal = 3;
                        fundlog.Role = 1;
                        await BaseHelper.AddAsyncWait(fundlog);
                    }
                    await BaseHelper.AddOrUpdate<tcluballiance>(allian);
                }
                else
                {
                    _senddata._info = "联盟不存在！";
                    _senddata._ret = 1;
                }
            }
            else
            {
                var _club = await BaseHelper.GetShare<tclub>((x) => x.idx == _data.id);
                if (_club!=null)
                {
                    if (_data.type.Equals(2))
                    {
                        var calllid = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _club.alliancid);
                        if (calllid!=null && calllid.insRate < _data.value)
                        {
                            _senddata._info = "设置社区基金比例不能大于联盟基金比例！允许范围 0-"+ calllid.insRate;
                            _senddata._ret = 1;
                            return JsonUtils.Serialize(_senddata);
                        }
                        else _club.insRate = _data.value;

                    }
                    else if (_data.type.Equals(3))
                    {
                        var user = await BaseHelper.GetBase<tUser>((x) => x.UserID == _club.UserId);
                        if (user != null)
                        {
                            if (user.Gold < _data.value * 100)
                            {
                                _senddata._info = "社区余额不足";
                                _senddata._ret = 1;
                                return JsonUtils.Serialize(_senddata);
                            }
                            user.GoldReduce(_data.value * 100);
                            _club.inspot += _data.value * 100;

                            await BaseHelper.AddOrUpdateBase<tUser>(user);
                            CommonLogic.updategold(user, 2);
                        }
                    }
                    else if (_data.type.Equals(4))
                    {
                        var calllid = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _club.alliancid);
                        if (calllid != null && calllid.cgoldRate < _data.value)
                        {
                            _senddata._info = "社区反利比例不能大于联盟反利比例" + calllid.cgoldRate;
                            _senddata._ret = 1;
                            return JsonUtils.Serialize(_senddata);
                        }else if (_data.value>100)
                        {
                            _senddata._info = "反利值异常 小于等于100";
                            _senddata._ret = 1;
                            return JsonUtils.Serialize(_senddata);
                        }
                        else _club.cgoldRate = _data.value;
                    }
                    else if (_data.type.Equals(5))
                    {
                        _club.reward = _data.svalue;
                    }
                    await BaseHelper.AddOrUpdate<tclub>(_club);
                }
                else
                {
                    _senddata._info = "社区不存在！";
                    _senddata._ret = 1;
                }
            }


            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }
        /// <summary>
        /// 踢出玩家
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> TickUser(string json)
        {
            cs_tickuser_gm tick = JsonUtils.Deserialize<cs_tickuser_gm>(json);
            sc_tickuser_gm senddata = new sc_tickuser_gm() { _ret = 1 };
            UserStatus _curStatus = await BaseHelper.TryGetUserStatus(tick.userid);
            if (_curStatus != null)
            {
                if((_curStatus.Status==UserStatusEnum.InLobby || _curStatus.Status == UserStatusEnum.InRoom)&&_curStatus.Gameid==0)
                {
                    var mapip = IPManager.Ins.IPGroups[AppType.Map][0];
                    var mapsession = Game.Scene.GetComponent<NetInnerComponent>().Get(mapip);
                    M2SG_GetUnitResponse redisDB_RPCResponse = (M2SG_GetUnitResponse)await mapsession.Call(new SG2M_GetUnitResponse { userid = tick.userid });
                    Unit _targetunit = redisDB_RPCResponse._unit;
                    if (_targetunit == null)
                    {
                        senddata._info = "该玩家不在线";
                    }
                    else
                    {
                        if (_targetunit.TryGetGateSession(out Session gatesession, out long GateSessionID))
                        {
                            //顶号逻辑
                            var rsp = (G2G_GetPlayerResponse)await gatesession.Call(new G2G_GetPlayerRequest { GateSessionId = GateSessionID, UnitID = _targetunit.Id, UserID = _targetunit.UserID, Message = string.IsNullOrEmpty(tick.msg) ? "您已被踢出游戏" : tick.msg });
                            if (rsp == null)
                            {
                                senddata._info = "未找到该玩家在Gate上的信息";
                            }
                            else if (rsp.player != null) 
                            {
                                senddata._info = "踢出成功";
                                senddata._ret = 0;
                            }
                        }
                        else
                        {
                            senddata._info = "该玩家不在线或已断开链接";
                        }
                    }
                    
                }
                else
                {
                    senddata._info = $"在游戏[{_curStatus.Gameid}]中，不能踢出游戏";
                }
            }
            else
            {
                senddata._info = "未找到该玩家";
            }
            return JsonUtils.Serialize(senddata);
        }

        /// <summary>
        /// 平台设置一级二级代理基金的转入转出
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> FundChange(string json)
        {
            cs_fundchange_gm _data = JsonUtils.Deserialize<cs_fundchange_gm>(json);
            sc_fundchange_gm _senddata = new sc_fundchange_gm() { _info = "设置成功！", _ret = 0 };
            if (_data.idType.Equals(1))
            {
                var allian = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _data.id);
                if (allian != null)
                {
                    if (_data.type.Equals(2))
                    {
                        if (allian.inspot < _data.gold)
                        {
                            _senddata._info = "基金不足";
                            _senddata._ret = 1;
                        }
                        else
                        {
                            allian.gold+= _data.gold;
                            allian.inspot -= _data.gold;

                            tclubfundlog fundlog = new tclubfundlog();
                            fundlog.ClubId = allian.idx;
                            fundlog.ChangeType = _data.type;
                            fundlog.Price = (int)_data.gold;
                            fundlog.UserId = allian.UserId;
                            fundlog.fundtotal = 3;
                            fundlog.Role = 1;
                            await BaseHelper.AddAsyncWait(fundlog);
                        }
                    }
                    else
                    {
                        if(allian.gold < _data.gold)
                        {
                            _senddata._info = "余额不足";
                            _senddata._ret = 1;
                        }
                        else
                        {
                            allian.inspot += _data.gold;
                            allian.gold -= _data.gold;

                            tclubfundlog fundlog = new tclubfundlog();
                            fundlog.ClubId = allian.idx;
                            fundlog.ChangeType = _data.type;
                            fundlog.Price = (int)_data.gold;
                            fundlog.UserId = allian.UserId;
                            fundlog.fundtotal =3;
                            fundlog.Role = 1;
                            await BaseHelper.AddAsyncWait(fundlog);
                        }
                        
                    }

                    await BaseHelper.AddOrUpdate<tcluballiance>(allian);
                }
                else
                {
                    _senddata._info = "联盟不存在！";
                    _senddata._ret = 1;
                }
            }
            else
            {
                var _club = await BaseHelper.GetShare<tclub>((x) => x.idx == _data.id);
                var user = await BaseHelper.GetBase<tUser>((x) => x.UserID == _club.UserId);
                if (_club != null && user!=null)
                {
                    if (_data.type.Equals(2))
                    {
                        if (_club.inspot < _data.gold)
                        {
                            _senddata._info = "社区基金不足";
                            _senddata._ret = 1;
                        }
                        else
                        {
                            user.Gold += _data.gold;
                            _club.inspot -= _data.gold;

                            await BaseHelper.AddOrUpdateBase<tUser>(user);
                            CommonLogic.updategold(user, 2);
                            tclubfundlog fundlog = new tclubfundlog();
                            fundlog.ClubId = _club.idx;
                            fundlog.ChangeType = _data.type;
                            fundlog.Price = (int)_data.gold;
                            fundlog.UserId = _club.UserId;
                            fundlog.fundtotal = 3;
                            fundlog.Role = 2;
                            await BaseHelper.AddAsyncWait(fundlog);
                        }
                    }
                    else
                    {
                        if (user.Gold < _data.gold)
                        {
                            _senddata._info = "社区余额不足";
                            _senddata._ret = 1;
                        }
                        else
                        {
                            user.GoldReduce( _data.gold);
                            _club.inspot += _data.gold;
                            await BaseHelper.AddOrUpdateBase<tUser>(user);
                            CommonLogic.updategold(user, 2);
                            tclubfundlog fundlog = new tclubfundlog();
                            fundlog.ClubId = _club.idx;
                            fundlog.ChangeType = _data.type;
                            fundlog.Price = (int)_data.gold;
                            fundlog.UserId = _club.UserId;
                            fundlog.fundtotal = 3;
                            fundlog.Role = 2;
                            await BaseHelper.AddAsyncWait(fundlog);
                        }
                    }
                    await BaseHelper.AddOrUpdate<tclub>(_club);
                }
                else
                {
                    _senddata._info = "社区不存在！";
                    _senddata._ret = 1;
                }
            }
           
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;

        }



        public static async Task<string> ClubGiveOther(string json)
        {
            cs_clubgive_gm _data = JsonUtils.Deserialize<cs_clubgive_gm>(json);
            sc_clubgive_gm _senddata = new sc_clubgive_gm() { _info = "", _ret = 0 };

            if (_data.type <= 3)
            {
                var allian = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _data.gid);
                if (allian!=null)
                {
                    if(allian.gold < _data.gold)
                    {
                        _senddata._info = "联盟余额不足！";
                        _senddata._ret = -1;
                    }
                    else
                    {
                        if (_data.type == 1)
                        {
                            var callid = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _data.cid);
                            if (callid!=null)
                            {
                                allian.gold -= _data.gold;
                                callid.gold += _data.gold;
                                await BaseHelper.AddOrUpdate<tcluballiance>(allian);
                                await BaseHelper.AddOrUpdate<tcluballiance>(callid);
                            }
                            else
                            {
                                _senddata._info = "被赠送的联盟不存在！";
                                _senddata._ret = -1;
                            }
                        }
                        else if (_data.type == 2)
                        {
                            var user = await BaseHelper.GetBase<tUser>((x) => x.UserID == _data.cid);
                            if (user!=null)
                            {
                                allian.gold -= _data.gold;
                                user.Gold += _data.gold;
                                await BaseHelper.AddOrUpdate<tcluballiance>(allian);
                                await BaseHelper.AddOrUpdateBase<tUser>(user);
                                CommonLogic.updategold(user, 2);

                            }
                            else
                            {
                                _senddata._info = "被赠送的玩家不存在！";
                                _senddata._ret = -1;
                            }
                        }
                        else
                        {
                            var _club = await BaseHelper.GetShare<tclub>((x) => x.idx == _data.cid);
                            int u = _club == null ? 0 : _club.UserId;
                            var user = await BaseHelper.GetBase<tUser>((x) => x.UserID == u);
                            if (_club!=null && user!=null)
                            {
                                allian.gold -= _data.gold;
                                user.Gold += _data.gold;
                                await BaseHelper.AddOrUpdate<tcluballiance>(allian);
                                await BaseHelper.AddOrUpdateBase<tUser>(user);
                                CommonLogic.updategold(user, 2);
                            }
                            else
                            {
                                _senddata._info = "被赠送的社区人不存在！";
                                _senddata._ret = -1;
                            }
                        }
                    }
                }
                else
                {
                    _senddata._info = "联盟不存在！";
                    _senddata._ret = -1;
                }
            }
            if (_data.type > 3)
            {
                var user = await BaseHelper.GetBase<tUser>((x) => x.UserID == _data.gid);
                if (user != null)
                {
                    if (user.Gold < _data.gold)
                    {
                        _senddata._info = "赠送人余额不足！";
                        _senddata._ret = -1;
                    }
                    else
                    {
                        if (_data.type == 4)
                        {
                            var _club = await BaseHelper.GetShare<tclub>((x) => x.idx == _data.cid);
                            int u = _club == null ? 0 : _club.UserId;
                            var cuser = await BaseHelper.GetBase<tUser>((x) => x.UserID == u);
                            if (_club != null && cuser != null)
                            {
                                user.GoldReduce(_data.gold);
                                cuser.Gold += _data.gold;
                                await BaseHelper.AddOrUpdateBase(user);
                                await BaseHelper.AddOrUpdateBase(cuser);
                                CommonLogic.updategold(user, 2);
                                CommonLogic.updategold(cuser, 2);
                            }
                            else
                            {
                                _senddata._info = "被赠送的社区人不存在！";
                                _senddata._ret = -1;
                            }
                        }
                        else if (_data.type == 5)
                        {
                            var cuser = await BaseHelper.GetBase<tUser>((x) => x.UserID == _data.cid);
                            if (cuser!=null)
                            {
                                user.GoldReduce(_data.gold);
                                cuser.Gold += _data.gold;
                                await BaseHelper.AddOrUpdateBase(user);
                                await BaseHelper.AddOrUpdateBase(cuser);
                                CommonLogic.updategold(user, 2);
                                CommonLogic.updategold(cuser, 2);
                            }
                            else
                            {
                                _senddata._info = "玩家不存在！";
                                _senddata._ret = -1;
                            }
                        }
                        else
                        {
                            var callid = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _data.cid);
                            if (callid != null)
                            {
                                user.GoldReduce(_data.gold);
                                callid.gold += _data.gold;
                                await BaseHelper.AddOrUpdateBase(user);
                                await BaseHelper.AddOrUpdate<tcluballiance>(callid);
                            }
                            else
                            {
                                _senddata._info = "被赠送的联盟不存在！";
                                _senddata._ret = -1;
                            }
                        }
                    }
                }
                else
                {
                    _senddata._info = "社区人不存在！";
                    _senddata._ret = -1;
                }
            }
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        /// <summary>
        /// 查询联盟或者club在线人数
        /// </summary>
        /// <returns></returns>
        public static async Task<string> QueryOnlineClub(string json)
        {
            cs_onlineuser_gm club = JsonUtils.Deserialize<cs_onlineuser_gm>(json);
            sc_onlineuser_gm _senddata = new sc_onlineuser_gm() {  _info = "", _ret = 0 };
            if (club.type == 0)
            {
                var _club = await BaseHelper.GetShare<tclub>(x => x.idx == club.id);
                if (_club != null)
                {
                    var agentRe = await BaseHelper.GetBaseAll<tuseragent2021relation>((x) => x.cidx == club.id);

                    if (agentRe != null)
                    {
                        List<onlineuser> rdata = new List<onlineuser>();
                        foreach (var item in agentRe)
                        {
                            UserStatus _curStatus = await BaseHelper.TryGetUserStatus(item.UserID);
                            if (_curStatus != null)
                            {

                                onlineuser ouser = new onlineuser();
                                ouser.userid = item.UserID;
                                ouser.status = 0;
                                ouser.clubidx = _club.idx;
                                tUser user = await tb_UserEx.GetFromCachebyUserID(item.UserID);
                                if (user != null) ouser.name = user.wechatName;
                                if (_curStatus.TableID != 0 && _curStatus.Levelid != 0)
                                {
                                    ouser.userstatus = (int)_curStatus.Status;
                                    //TexasTable table = TexasLobby.instance.GetTableByRoomIDandTableID(_curStatus.RoomID, _curStatus.TableID);
                                    //if (table != null)
                                    //{
                                    //    var texauser = table.GetUserByID(item.userid);
                                    //    if (texauser != null)
                                    //    {
                                    //        ouser.brogold = texauser._CurrentGold;
                                    //        ouser.tabnum = table._tableid;
                                    //        ouser.pos = texauser._Pos;
                                    //    }
                                    //}
                                    ouser.brogold = 0;
                                    ouser.tabnum = _curStatus.TableID;
                                    ouser.pos = 0;
                                }
                                rdata.Add(ouser);
                            }
                        }
                        _senddata.users = rdata;
                    }
                }
            }
            else
            {
                var allin = await BaseHelper.GetShare<tcluballiance>(x => x.idx == club.id);
                if (allin != null)
                {
                    var _clublist = await BaseHelper.GetShareAll<tclub>(x => x.alliancid == allin.idx);
                    if (_clublist != null)
                    {
                        List<onlineuser> rdata = new List<onlineuser>();
                        int acount = 0;
                        foreach (var citem in _clublist)
                        {
                            var _childs_club = await BaseHelper.GetShare<tclub>(x => x.idx == citem.idx);
                            if (_childs_club != null)
                            {
                                var agentRe = await BaseHelper.GetBaseAll<tuseragent2021relation>((x) => x.cidx == citem.idx);
                                if (agentRe != null)
                                {
                                        foreach (var item in agentRe)
                                        {
                                            if (rdata.Any(t => t.userid == item.UserID)) continue;
                                            UserStatus _curStatus = await BaseHelper.TryGetUserStatus(item.UserID);
                                            if (_curStatus != null)
                                            {
                                                onlineuser ouser = new onlineuser();
                                                ouser.userid = item.UserID;
                                                ouser.status = 0;
                                                ouser.clubidx = citem.idx;
                                                tUser user = await tb_UserEx.GetFromCachebyUserID(item.UserID);
                                                if (user != null) ouser.name = user.wechatName;
                                                if (_curStatus.TableID != 0 && _curStatus.Levelid != 0)
                                                {
                                                    ouser.userstatus = (int)_curStatus.Status;
                                                //TexasTable table = TexasLobby.instance.GetTableByRoomIDandTableID(_curStatus.RoomID, _curStatus.TableID);
                                                //if (table != null)
                                                //{
                                                //    var texauser = table.GetUserByID(item.userid);
                                                //    if (texauser != null)
                                                //    {
                                                //        ouser.brogold = texauser._CurrentGold;
                                                //        ouser.tabnum = table._tableid;
                                                //        ouser.pos = texauser._Pos;
                                                //    }
                                                //}
                                                ouser.brogold = 0;
                                                ouser.tabnum = _curStatus.TableID;
                                                ouser.pos = 0;
                                            }
                                                rdata.Add(ouser);
                                            }
                                        }
                                        _senddata.users = rdata;
                                    }
                            }
                        }
                    }
                }
            }

            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }


        public static async Task<string> ModifyclubLosemax(string json)
        {
            cs_modifyclubLosemax _data = JsonUtils.Deserialize<cs_modifyclubLosemax>(json);
            sc_modifyclubLosemax _senddata = new sc_modifyclubLosemax() { _ret = 1 };
            var club = await BaseHelper.GetShare<tclub>((x) => x.idx == _data.clubid);
            if (club != null)
            {
                club.losemax = _data.Losemax * 100;
                await BaseHelper.AddOrUpdate(club);
                _senddata._ret = 0;
            }
            return JsonUtils.Serialize(_senddata);
        }


        public async static Task<string> QueryTableinfo(string json)
        {
            cs_tableinfo_gm _addclubchlid = JsonUtils.Deserialize<cs_tableinfo_gm>(json);
            return await FactoryBaseHelper.DealDataExGM(51, _addclubchlid.tid, "cs_tableinfo_gm", json); 
        }

        /// <summary>
        /// 添加用户进入club
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CsAddClunChlid(string json)
        {

            cs_addchlid_club _addclubchlid = JsonUtils.Deserialize<cs_addchlid_club>(json);
            sc_apply_club _senddata = new sc_apply_club() { result = 0};
            var result = await ClubHelper.Agree(0, _addclubchlid.userid,  0, _addclubchlid.code);
            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        /// <summary>
        /// 移除club中的会员
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CsRemoveClunChlid(string json)
        {

            cs_removechlid_club _addclubchlid = JsonUtils.Deserialize<cs_removechlid_club>(json);
            sc_apply_club _senddata = new sc_apply_club() { result = 0 };
            var result = await ClubHelper.RemoveAgree(_addclubchlid.idx, _addclubchlid.userid);
            _senddata.result = result;
            string _redata = JsonUtils.Serialize(_senddata);
            return _redata;
        }

        /// <summary>
        /// 修改club中的会员
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CsUpdateClubChlid(string json)
        {

            cs_updatechlid_club _clubchlid = JsonUtils.Deserialize<cs_updatechlid_club>(json);
            if (_clubchlid != null)
            {
                sc_charge_gm _scResult = new sc_charge_gm() {  _info = "", _ret = 0, UserMoney = 0 };
                tclub tclub = await ClubHelper.GetFromCachebyID(_clubchlid.idx);
                if (tclub != null)
                {
                    UserClub chlids = tclub.childs.Where(x => x.userid == _clubchlid.userid).FirstOrDefault();
                    if (chlids != null)
                    {
                        chlids.rate = _clubchlid.rate;
                        chlids.playcount = _clubchlid.playcount;
                        await ClubHelper.AddOrUpdate(tclub);
                    }
                }
                else
                {
                    _scResult._ret = 1;
                    _scResult._info = "club不存在";
                }
                return JsonUtils.Serialize(_scResult);
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }

        }



        /// <summary>
        /// 修改 club or Union idx
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CsClubOrUnionIdx(string json)
        {

            cs_cluborunion_gm _clubunion = JsonUtils.Deserialize<cs_cluborunion_gm>(json);
            if (_clubunion != null)
            {
                sc_cluborunion_gm _scResult = new sc_cluborunion_gm() {  _info = "", _ret = 0, NewIdx = 0 };

                if (_clubunion.type == 1)//如果是club
                {
                    tclub _tclub = await BaseHelper.GetShare<tclub>(_clubunion.idx); //ClubHelper.(_clubunion.idx);//获取club 
                    List<tcluballiance> _tcluballiance = await AllianceHelper.GetShareAll<tcluballiance>(x => x.clubid == _clubunion.idx); //ClubHelper.(_clubunion.idx);//获取club 
                    if (_tclub != null)
                    {
                        if (_tclub.childs.Count < 2)
                        {
                            tclub newclub = new tclub();
                            //  newclub = _tclub;
                            await ClubHelper.Delete<tclub>(_tclub);
                            newclub.idx = _clubunion.newidx;
                            newclub.UserId = _tclub.UserId;
                            newclub.State = _tclub.State;
                            newclub.CreateDate = _tclub.CreateDate;
                            newclub.Title = _tclub.Title;
                            newclub.childs = _tclub.childs;
                            newclub.limitcount = _tclub.limitcount;
                            newclub.search = _tclub.search;
                            newclub.manager = _tclub.manager;
                            newclub.gold = _tclub.gold;
                            newclub.diam = _tclub.diam;
                            newclub.applyUserID = _tclub.applyUserID;
                            newclub.Loc = _tclub.Loc;
                            newclub.lv = _tclub.lv;
                            newclub.closeapply = _tclub.closeapply;
                            newclub.Content = _tclub.Content;
                            newclub.applyGoldList = _tclub.applyGoldList;
                            newclub.alliancid = _tclub.alliancid;
                            var s = newclub.GetKeyCode();
                            //  _tclub.idx = _clubunion.newidx;//虽然在这里进行的赋值 但是两个的idx还是为newidx 的值 
                            _scResult.NewIdx = (int)_tclub.idx;
                            await ClubHelper.Add<tclub>(newclub);
                            foreach (var item in _tcluballiance)
                            {
                                item.clubid = newclub.idx;
                                await BaseHelper.AddOrUpdate<tcluballiance>(item);
                            }
                            var s2 = _tclub.GetKeyCode();



                            //  BaseHelper.Delete<tclub>(logclub);

                            _clubunion.type = _clubunion.type < 3 ? 2 : 1;
                        }
                        else
                        {
                            _scResult._ret = 1;
                            _scResult._info = "club已存在成员，不允许修改club编码";
                        }


                    }
                    else
                    {
                        _scResult._ret = 1;
                        _scResult._info = "club不存在";
                    }
                    return JsonUtils.Serialize(_scResult);
                }
                else
                {

                    tcluballiance _tunion = await AllianceHelper.GetUnionByIdx(_clubunion.idx);//获取联盟
                    List<tclub> _tclub = await BaseHelper.GetShareAll<tclub>(x => x.alliancid == _clubunion.idx);//获取club
                    if (_tunion != null)
                    {
                        if (_tunion.childs.Count < 2)
                        {
                            tcluballiance newalliance = new tcluballiance();
                            newalliance.idx = _clubunion.newidx;
                            newalliance.UserId = _tunion.UserId;
                            newalliance.State = _tunion.State;
                            newalliance.CreateDate = _tunion.CreateDate;
                            newalliance.childs = _tunion.childs;
                            newalliance.Title = _tunion.Title;
                            newalliance.Content = _tunion.Content;
                            newalliance.limitcount = _tunion.limitcount;
                            newalliance.search = _tunion.search;
                            newalliance.manager = _tunion.manager;
                            newalliance.gold = _tunion.gold;
                            newalliance.diam = _tunion.diam;
                            newalliance.applyclubidx = _tunion.applyclubidx;
                            newalliance.lv = _tunion.lv;
                            newalliance.closeapply = _tunion.closeapply;
                            newalliance.clubid = _tunion.clubid;
                            // _tunion.idx = _clubunion.newidx;
                            _scResult.NewIdx = (int)newalliance.idx;
                            await AllianceHelper.Delete<tcluballiance>(_tunion);//删除原来的idx数据
                            await AllianceHelper.Add<tcluballiance>(newalliance);//重新添加一条数据
                            foreach (var item in _tclub)
                            {
                                item.alliancid = (int)newalliance.idx;
                                await BaseHelper.AddOrUpdate<tclub>(item);
                            }

                            _clubunion.type = _clubunion.type < 3 ? 2 : 1;
                        }
                        else
                        {
                            _scResult._ret = 1;
                            _scResult._info = "联盟已存在会员，不允许修改联盟编码";
                        }


                    }
                    else
                    {
                        _scResult._ret = 1;
                        _scResult._info = "联盟不存在";
                    }
                    return JsonUtils.Serialize(_scResult);
                }
            }
            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> UnionAddClubUser(string json)
        {
            cs_agree_union _data = JsonUtils.Deserialize<cs_agree_union>(json);
            if (_data != null)
            {
                sc_agree_alli _senddata = new sc_agree_alli() { result = 0 };
                var allianc = await BaseHelper.GetShare<tcluballiance>(x => x.idx == _data.aId);
                //   var applylog = tCommonlogEx.GetAlliapplylog(3, _data.idx, _data.ownclubid);

                var result = await AllianceHelper.Agree(_data.aId, _data.userid, _data.ownclubid, allianc);
                if (result == 1)
                {
                    var club = await BaseHelper.GetShare<tclub>((x) => x.idx == _data.ownclubid);
                    club.alliancid = _data.aId;
                    BaseHelper.AddOrUpdate<tcluballiance>(allianc);
                    BaseHelper.AddOrUpdate<tclub>(club);
                }
                _senddata.result = result;


                string _redata = JsonUtils.Serialize(_senddata);
                return JsonUtils.Serialize(_senddata);
            }

            else
            {
                sc_base_gm _scSetcard = new sc_base_gm() { fn = "sc_charge_gm", _info = "参数错误", _ret = 1 };
                return JsonUtils.Serialize(_scSetcard);
            }

        }
        /// <summary>
        /// 进入FJ
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CsEnterRoomgm(string json)
        {
            return "0";
        }


        public static async Task<string> DismissTable(string json)
        {
            sc_base_gm reult = new sc_base_gm() { fn = "cs_enterroom_gm", _info = "解散成功", _ret = 0 };
            try
            {
                cs_currdto_gm cd = JsonUtils.Deserialize<cs_currdto_gm>(json);
                string[] tableIds = cd.tableid.Split(',');

                foreach (string tableId in tableIds)
                {
                    if (string.IsNullOrEmpty(tableId))
                        continue;
                    int id = Convert.ToInt32(tableId.Trim());
                    var table = await ttablelistEx.GetTableByNumber(cd.gameid, id);

                    if (table != null)
                    {
                        if (cd.gameid.Equals(table.gameid))
                        {
                            FactoryBaseHelper.DismissTableGM(cd.gameid, JsonHelper.ToJson(new { tableid= tableId, levelid= table.levelid }));
                        }
                        else
                        {
                            reult._ret = 1;
                            reult._info = "游戏FJ与游戏id匹配失败!";
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2020032512361gm");
                reult._ret = 1;
                reult._info = "服务器错误";
            }
            return JsonUtils.Serialize(reult);
        }

        public static async Task<string> CsSendEmailgm(string json)
        {
            cs_currentitydto_gm<cs_sendemail_gm> cs_sendemail = JsonUtils.Deserialize<cs_currentitydto_gm<cs_sendemail_gm>>(json);
            sc_sendemail_gm sendmaildata = new sc_sendemail_gm { _info = "" };
            sendmaildata._ret = await MailHelper.SendGMEmail(cs_sendemail.entity.Title, cs_sendemail.entity.Content,cs_sendemail.entity.userids,cs_sendemail.entity.MailType,cs_sendemail.entity.attaches);

            return JsonUtils.Serialize(sendmaildata);
        }
        public static async Task<string> CsRemoveEmailgm(string json)
        {
            cs_currentitydto_gm<cs_removeemail_gm> cs_sendemail = JsonUtils.Deserialize<cs_currentitydto_gm<cs_removeemail_gm>>(json);
            sc_removeemail_gm sendmaildata = new sc_removeemail_gm { _info = "" };
            sendmaildata._ret = await MailHelper.GMRemoveEmail(cs_sendemail.entity.TradeNo,cs_sendemail.entity.ToUserId);

            return JsonUtils.Serialize(sendmaildata);
        }

        /// <summary>
        /// 机器人开关设置
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static string CsSwitchGame(string json)
        {
            cs_switchgame cs_switchgame = JsonUtils.Deserialize<cs_switchgame>(json);
            sc_base_gm sc_switch = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "sc_base_gm" };

            //CommonLogic.DealDataEx(cs_switchgame.gameid, 0, json);
            //await FactoryBaseHelper.DealDataEx(_basedata._g, _data, _tempuser); //

            FactoryBaseHelper.SwitchGame(cs_switchgame.gameid, cs_switchgame.is_lock == 1);
            return JsonUtils.Serialize(sc_switch);
        }

        /// <summary>
        /// 创建桌子
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> CreateTableByGM(string json)
        {
            sc_createtablelist_gm resultmange = new sc_createtablelist_gm { _ret = 0, _info = "操作成功" };
            try
            {
                cs_createtablelist_gm cs_roomlistinfo = JsonUtils.Deserialize<cs_createtablelist_gm>(json);//后台返回类

                string _res = await FactoryBaseHelper.CreateTableGM(cs_roomlistinfo.gameid, cs_roomlistinfo.param);
                if (_res != "")
                {
                    sc_createtablelist_gm rdata = JsonUtils.Deserialize<sc_createtablelist_gm>(_res);
                    TraceLog.WriteInfo("返回指令:{0}", _res);
                    if (rdata._ret == 0)
                    {
                        resultmange.levelid = rdata.levelid;
                        resultmange.tableid = rdata.tableid;
                        resultmange.tnumber = rdata.tnumber;
                    }
                    else
                    {
                        resultmange._ret = 1;
                        resultmange._info = "创建失败！";
                    }
                }
                return JsonUtils.Serialize(resultmange);
            }
            catch (Exception ex)
            {
                TraceLogEx.Error(ex, "2020032512311");
                resultmange._info = "处理失败";
                resultmange._ret = 1;
            }
            return JsonUtils.Serialize(resultmange);
        }

        public static string SeeHandcard(string json)
        {
            sc_seehandcard resjson = new sc_seehandcard() { _ret = 0, _info = "获取成功", fn = "cs_seehandcard" };
            cs_seehandcard msg = JsonUtils.Deserialize<cs_seehandcard>(json);
            if (msg.tableId != 0)
            {
                //await FactoryBaseHelper.DealDataEx(_basedata._g, _data, _tempuser);
                //CommonLogic.DealDataEx(msg.gameid, 0, json);
            }
            return JsonUtils.Serialize(resjson);
        }

        /// <summary>
        /// 通知跑马灯
        /// </summary>
        /// <returns></returns>
        public static async void Noticemsg(tnotice _notice)
        {

            CommonLogic common = new CommonLogic();

            sc_notice_n _getnotice = new sc_notice_n() { result = 1 };
            sc_getnotice_n _gamenotice = new sc_getnotice_n() { result = 1, noticelist = new List<string>() };
            if (_notice != null)
            {
                _getnotice.notice = new noticemsg();
                _getnotice.notice.content = _notice.content;
                _getnotice.notice.starttime = _notice.starttime;
                _getnotice.notice.endtime = _notice.endtime;
                _getnotice.notice.title = _notice.title;
                _getnotice.notice.interval = _notice.interval;
                _getnotice.notice.marqueeType = _notice.marqueeType;
                _getnotice._t = 1;
                _getnotice.gameid = 0;
                common.DealGM(_getnotice);

                _gamenotice.noticelist.Add(_notice.content);
                _gamenotice._t = 1;
                _gamenotice.gameid = 0;
                common.DealGM(_gamenotice);
            }
        }

        public static async Task<string> NoticeMsgDel(string json)
        {
            sc_base_gm resjson = new sc_base_gm() { _ret = 0, _info = "成功", fn = "cs_noticemsg" };
            cs_noticemsgdel_gm data = JsonUtils.Deserialize<cs_noticemsgdel_gm>(json);
            var notice = await BaseHelper.GetShare<tnotice>(t => t.id == data.id);
            if (notice != null) await BaseHelper.Delete(notice);

            return JsonUtils.Serialize(resjson);
        }

        public static async Task<string> NoticeAdd(string json)
        {
            sc_base_gm resjson = new sc_base_gm() { _ret = 0, _info = "成功" };
            cs_noticemsgAdd_gm data = JsonUtils.Deserialize<cs_noticemsgAdd_gm>(json);
            tnotice model = JsonUtils.Deserialize<tnotice>(data.data);
            if (model != null)
            {
                if (model.type.Equals("1"))
                {
                    Noticemsg(model);
                }
                model.type = model.type;
                await BaseHelper.AddOrUpdate(model);
            }

            return JsonUtils.Serialize(resjson);
        }

        public static async Task<string> AddWatchRobot(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "sc_addwatchrobot_whi" };
            cs_addwatchrobot_whi data = JsonUtils.Deserialize<cs_addwatchrobot_whi>(json);

            if (data.gameid != 0)
            {
                return await FactoryBaseHelper.AddWatchRobot(data.gameid, json);
            }
            return JsonUtils.Serialize(resultmange);
        }

        public static async Task<string> IntoRoomRobot(string json)
        {
            cs_robotjoinroom addrobogm = JsonUtils.Deserialize<cs_robotjoinroom>(json);
            return await FactoryBaseHelper.DealDataExGM(addrobogm.gameId, addrobogm.tableid, "cs_robotjoinroom", json); 
        }


        public static async Task<string> OnekeyAddRobot(string json)
        {
            cs_OnekeyAddRobot_gm addrobogm = JsonUtils.Deserialize<cs_OnekeyAddRobot_gm>(json);
            return await FactoryBaseHelper.DealDataExGM(addrobogm.gameId, addrobogm.tnum, "cs_OnekeyAddRobot_gm", json); 
        }

        public static async Task<string> Set100RoomRobot(string json)
        {
            cs_set100roomrobot addrobogm = JsonUtils.Deserialize<cs_set100roomrobot>(json);
            if (addrobogm.robotCount < 1)
            {
                sc_set100roomrobot reValue = new sc_set100roomrobot() { _ret = 1 };
                reValue._info = "机器人数量不能少于1";
                return JsonUtils.Serialize(reValue);
            } 
            return await FactoryBaseHelper.DealDataExGM(addrobogm.gameId, addrobogm.levelid, "sc_set100roomrobot", json); 
        }


        public static async Task<string> ExitRoomRobot(string json)
        {
            sc_base_gm resultmange = new sc_base_gm { _ret = 0, _info = "操作成功", fn = "cs_base_gm" };
            cs_RobottKickOut addrobogm = JsonUtils.Deserialize<cs_RobottKickOut>(json);
            UserStatus _curStatus = await BaseHelper.TryGetUserStatus(addrobogm.uId);
            if (_curStatus == null)
            {
                resultmange._info = "机器人不在座或已经空闲!";
                resultmange._ret = 0;
                return JsonUtils.Serialize(resultmange);
            }

            var res = await FactoryBaseHelper.ExitRobotFromGM(_curStatus.Gameid, addrobogm.uId);
            if (res == 1)
            {
                resultmange._info = "添加成功！";
                resultmange._ret = 0;
            }
            else if (res == -1)
            {
                resultmange._info = "游戏中！不能踢出";
                resultmange._ret = 1;
            }
            else if (res == -997)
            {
                resultmange._info = "机器人不在座或已经空闲!";
                resultmange._ret = 0;
            }
            else if (res == -998)
            {
                resultmange._info = "打牌中不能退出!";
                resultmange._ret = 0;
            }
            else
            {
                resultmange._info = "添加失败！";
                resultmange._ret = 1;
            }

            return JsonUtils.Serialize(resultmange);
        }

        public async static Task<string> GetGameRoom(string json)
        {
            //sc_gameroom_gm roomdata = new sc_gameroom_gm { _ret = 0, _info = "获取成功" };
            return "";
        }

        /// <summary>
        /// 得到视讯房
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> GetGameVideosRoom(string json)
        {
            //sc_getvideosroom_gm resultmange = new sc_getvideosroom_gm { _ret = 0, _info = "操作成功", fn = "sc_getvideosroom_gm" };

            return "";
        }

        public static async Task<string> AnchorJoinRoom(string json)
        {
            cs_anchorjoinroom_gm _senddata = JsonUtils.Deserialize<cs_anchorjoinroom_gm>(json);
            //sc_anchorjoinroom_gm resdata = new sc_anchorjoinroom_gm { _ret = 0, _info = "操作成功", fn = "sc_base_gm" };
            return "";
        }

        /// <summary>
        /// 修改配置
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> UpdateSysConfig(string json)
        {
            cs_syskeyvalue _senddata = JsonUtils.Deserialize<cs_syskeyvalue>(json);
            sc_syskeyvalue resdata = new sc_syskeyvalue { _ret = 0, _info = "操作成功" };
            var config = await RankHelper.GetValByKey(_senddata.key);
            if (config != null)
            {
                config.Val = _senddata.value;
                config.Dec = _senddata.Des;
                await BaseHelper.AddOrUpdate(config);
            }
            return JsonUtils.Serialize(resdata);
        }
        /// <summary>
        /// 更新推广红包
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public static async Task<string> UpdateExtenConfig(string json)
        {
            cs_extenconfig_gm _senddata = JsonUtils.Deserialize<cs_extenconfig_gm>(json);
            sc_extenconfig_gm resdata = new sc_extenconfig_gm { _ret = 0, _info = "操作成功" };
            textenconfig data = JsonUtils.Deserialize<textenconfig>(_senddata.json);
            if (data != null)
            {
                await BaseHelper.AddOrUpdate(data);
            }
            return JsonUtils.Serialize(resdata);
        }



        public static async Task<string> SetInvitacode(string json)
        {
            cs_setInvitacode _senddata = JsonUtils.Deserialize<cs_setInvitacode>(json);
            sc_setInvitacode resdata = new sc_setInvitacode { _ret = 1, _info = "error" };
            var agentuser = await tuseragent2021Ex.GetAgentFromCachebyUserID(_senddata.uid,0);
            if (agentuser == null)
            {
                resdata._ret = 1;
                resdata._info = "玩家不存在";
            }
            else
            {
                resdata._ret = 0;
                agentuser.Code = _senddata.code.ToString();
                tuseragent2021Ex.AddOrUpdate(agentuser);
            }
            return JsonUtils.Serialize(resdata);
        }
        public static async Task<string> DisMiss(string json)//(cs_dismissalliance_alli _data)
        {
            cs_dismissalliance_alli _senddata = JsonUtils.Deserialize<cs_dismissalliance_alli>(json);
            sc_dismissalliance_alli resdata = new sc_dismissalliance_alli() { result = 0 };
            int result = 0;
            var calli = await BaseHelper.GetShare<tcluballiance>((x) => x.idx == _senddata.cid);
            if (calli != null)
            {
                if (_senddata.clubid != calli.clubid)
                {
                    var clublist = await BaseHelper.GetShare<tclub>((x) => x.idx == _senddata.clubid);
                    if (clublist.gold < 100)
                    {
                        clublist.alliancid = 0;
                        await BaseHelper.AddOrUpdate<tclub>(clublist);
                        calli.childs.RemoveAll(t => t.clubId == _senddata.clubid);
                        await BaseHelper.AddOrUpdate<tcluballiance>(calli);
                        result = 1;
                    }
                    else
                    {
                        result = -4;
                    }
                }
                else
                {
                    if (calli.childs.Count() > 1) result = -2;
                    else if (calli.diam > 0) result = -3;
                    else
                    {
                        var clublist = await BaseHelper.GetShareAll<tclub>((x) => x.alliancid == calli.idx);
                        foreach (var club in clublist)
                        {
                            club.alliancid = 0;
                            await BaseHelper.AddOrUpdate(club);
                        }
                        await BaseHelper.Delete<tcluballiance>(calli);
                        result = 1;
                    }
                }

            }
            else result = -1;

            resdata.result = result;
            string _redata = JsonUtils.Serialize(resdata);
            return _redata;
        }

        public static async Task<string> GetUserInfo(string json)
        {
            try
            {
                cs_getuserinfo_gm info = JsonUtils.Deserialize<cs_getuserinfo_gm>(json);
                sc_getuserinfo_gm reValue = new sc_getuserinfo_gm() { _ret = 0 };
                tUser user = await BaseHelper.GetBase<tUser>(info.userid);
                if (user != null)
                {
                    reValue.lGold = user.GetGoldAndWinGold;
                }
                else
                {
                    reValue.lGold = 0;
                    reValue._ret = 1;
                    reValue._info = "未找到该玩家";
                }
                return JsonUtils.Serialize(reValue);
            }
            catch (Exception ex)
            {
                return JsonUtils.Serialize(new sc_getuserinfo_gm() { _ret = 1,_info=$"抛异常了【{ex.Message}】" });
            }
            
        }
    }
}
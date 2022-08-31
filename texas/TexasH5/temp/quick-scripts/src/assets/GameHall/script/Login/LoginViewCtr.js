"use strict";
cc._RF.push(module, '6eaf6maPVZHEKJk8fDj3Zol', 'LoginViewCtr');
// GameHall/script/Login/LoginViewCtr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeChatInfo = exports.LoginModel = exports.LoginViewCtr = void 0;
var CommonCtr_1 = require("../../../Script/BaseFrame/CommonCtr");
var WebSocketManager_1 = require("../../../Script/BaseFrame/WebSocketManager");
var LocalStorage_1 = require("../../../Script/Common/LocalStorage");
var AppConst_1 = require("../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../Script/BaseFrameNative");
var LoginNetDataStruct_1 = require("./LoginNetDataStruct");
var GameUpdateMgr_1 = require("../GameUpdateMgr");
var LoginViewCtr = /** @class */ (function () {
    function LoginViewCtr() {
    }
    Object.defineProperty(LoginViewCtr, "instance", {
        get: function () {
            if (this._viewCtr == null) {
                this._viewCtr = new LoginViewCtr();
                //初始注册这个Ctrl里面的服务器推送方法 
                this._viewCtr.RegistNotify();
            }
            return this._viewCtr;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginViewCtr.prototype, "Model", {
        get: function () {
            if (this._model == null) {
                this._model = new LoginModel();
                this._model.Init();
            }
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    LoginViewCtr.prototype.RegistNotify = function () {
        // WebSocketManager.getInstance.RegistNotify("sc_gambleover_bf_n", this.sc_gambleover_bf_n.bind(this));  
        // WebSocketManager.getInstance.RegistNotify("sc_chat_n", this.sc_chat_n.bind(this)); 
    };
    Object.defineProperty(LoginViewCtr.prototype, "IsDestory", {
        /**判断此View是否已经释放  */
        get: function () {
            if (this.view == null || this.view._isDestory)
                return true;
            return false;
        },
        enumerable: false,
        configurable: true
    });
    LoginViewCtr.prototype.cs_device = function (openid, unionid) {
        var pkg = new LoginNetDataStruct_1.cs_device();
        pkg.fn = "cs_device";
        // GameSetting.Instance.OpenID = openid;
        // GameSetting.Instance.UnionID = unionid;
        // _data.ClientAppVersion = GameSetting.Instance.ClientAppVersion;
        // _data.DeviceID = GameSetting.Instance.DeviceID;
        // _data.GameID = GameSetting.Instance.GameID;
        // _data.MobileType = GameSetting.Instance.MobileType;
        // _data.RetailID = GameSetting.Instance.RetailID;
        // _data.ScreenX = GameSetting.Instance.ScreenX;
        // _data.ScreenY = GameSetting.Instance.ScreenY;
        // _data.ServerID = GameSetting.Instance.ServerID; 
        pkg._openid = openid;
        pkg._unionid = unionid;
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_device.bind(this));
    };
    LoginViewCtr.prototype.sc_device = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        // CommonCtr.instance.ShowLoad_Circle(false); 
        if (data == null)
            return;
        this.Model.mPid = data.passportid;
        this.Model.mPwd = data.password;
        this.cs_loginac(this.Model.mPid, this.Model.mPwd);
    };
    LoginViewCtr.prototype.cs_loginac = function (mPid, mPwd) {
        var MachineType = 2;
        var DeviceID = ""; // ToolsEx.GetMachineCode(ref MachineType);
        var MobileType = ""; // MachineType.ToString();
        var pwd = mPwd; // new DESAlgorithmNew().EncodePwd(mPwd, GameSetting.ClientPasswordKey);
        var pkg = new LoginNetDataStruct_1.cs_loginac();
        pkg.fn = "cs_loginac";
        pkg.DeviceID = DeviceID;
        pkg.PassportId = mPid;
        pkg.Password = pwd;
        pkg.RetailID = "0019";
        if (this.Model.mWeChatinfo != null)
            pkg.retailUser = this.Model.mWeChatinfo.openid;
        pkg.ScreenX = 1920; // cc.screen. Screen.width;
        pkg.ScreenY = 1080; //Screen.height;
        pkg.ServerID = 1;
        pkg.UserType = 1;
        // _data.IP = CommonCtr.instance.Model._curIP;
        // GameSetting.Instance.Pid = mPid;
        // GameSetting.Instance.Password = mPwd;  
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_loginac.bind(this));
    };
    LoginViewCtr.prototype.sc_loginac = function (data) {
        if (this.view == null || this.view._isDestory)
            return;
        if (data == null)
            return;
        if (data.result == 1) {
            // GameSetting.SetLoginInfo(AppConfigList.Current.sdk_type == 0);
            this.Model.phone = data.phone;
            if (data.GuideID == 1005) {
                // this.view.openCreateRole(data.aCode);
            }
            else {
                // this. view._canLoginClick = true;
                this.cs_login();
            }
        }
        else if (data.result == -1) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("用戶名密碼錯誤！");
        }
        else if (data.result == -99) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("賬號被凍結請聯繫客服！");
        }
        else if (data.result == -10) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("賬號角色數據異常請聯繫客服！");
        }
    };
    LoginViewCtr.prototype.cs_create1005 = function (pid, ActiveCode, roleName, headid) {
        var pkg = new LoginNetDataStruct_1.cs_create1005();
        pkg.fn = "cs_create1005";
        // _createdata.ClientAppVersion = GameSetting.Instance.ClientAppVersion;
        // _createdata.GameID = GameSetting.Instance.GameID;
        pkg.Pid = pid;
        // _createdata.MobileType = GameSetting.Instance.MobileType;
        // _createdata.RetailID = GameSetting.Instance.RetailID;
        //_createdata.ActiveCode = ActiveCode;
        // _createdata.ServerID = GameSetting.Instance.ServerID + "";
        pkg.NickName = roleName;
        pkg.HeadID = headid;
        pkg._Sex = 1;
        // _createdata.IP = CommonCtr.instance.Model._curIP; 
        WebSocketManager_1.WebSocketManager.getInstance.SendJSON(pkg, this.sc_create1005.bind(this));
    };
    LoginViewCtr.prototype.sc_create1005 = function (_data) {
        if (this.view == null || this.view._isDestory)
            return;
        // CommonCtr.instance.ShowLoad_Circle(false);
        // this. view._canLoginClick = true;
        if (_data.result == 1) {
            LoginViewCtr.instance.cs_login();
        }
        else if (_data.result == -1) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabelMove("邀请码输入错误", true); //邀请码输入错误
        }
        else if (_data.result == -5) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabelMove("不能同名", true); //不能同名
            this.view.ui_nicknamecf.visible = true;
        }
        else {
            CommonCtr_1.CommonCtr.instance.ShowTipLabelMove("进入游戏失败,请联系客服 ", true); //进入游戏失败,请联系客服 
        }
    };
    LoginViewCtr.prototype.cs_login = function () {
        var pkg = new LoginNetDataStruct_1.cs_login();
        pkg.fn = "cs_login";
        var MachineType = 2;
        pkg.deviceType = MachineType;
        pkg.accountId = this.Model.accountId;
        // if (Common_SecCtr.instance.Model.loc.lat == 0 && Common_SecCtr.instance.Model.loc.lng == 0 && Input.location.isEnabledByUser)
        // {
        //     CommonCtr.instance.ShowLoad_Circle(true);
        //     LocationHelp.GetLocation((loc) =>
        //     {
        //         CommonCtr.instance.ShowLoad_Circle(false);
        //         Common_SecCtr.instance.Model.loc = loc;
        //         login.lat = Common_SecCtr.instance.Model.loc.lat;
        //         login.lng = Common_SecCtr.instance.Model.loc.lng;
        //         login.fn = "cs_login";
        //         MySocket.SendData(login, () => { return true; });
        //     });//获取经纬度 
        // }
        // else
        {
            // login.lat = Common_SecCtr.instance.Model.loc.lat;
            // login.lng = Common_SecCtr.instance.Model.loc.lng; 
            // WebSocketManager.getInstance.SendJSON(pkg, this.sc_login.bind(this));
            WebSocketManager_1.WebSocketManager.getInstance.SendJSONTimeOut(pkg, this.sc_login.bind(this));
        }
    };
    LoginViewCtr.prototype.LogintoFishLevel = function (pid, pwd) {
        // WebSocketManager.getInstance.GateServer(AppConst.serverId);
        // WebSocketManager.getInstance.GatePort(10002);
        WebSocketManager_1.WebSocketManager.getInstance.CSLoginCallback = this.sc_login.bind(this);
        WebSocketManager_1.WebSocketManager.getInstance.LoginByPIDPWD(pid, pwd);
    };
    /**login succ */
    LoginViewCtr.prototype.sc_login = function (data) {
        this.view.loginSuccess();
        if (data == null) {
            return;
        }
        if (data.result == 1) {
            AppConst_1.AppConst.Account = data.user.userid;
            AppConst_1.AppConst.gameId = data.gameid;
            AppConst_1.AppConst.cidx = data.cidx;
            AppConst_1.AppConst.mPlayerModel = data.user;
            LocalStorage_1.LocalStorage.getInstance().setItem("login_pid", this.Model.mPid);
            LocalStorage_1.LocalStorage.getInstance().setItem("login_pwd", this.Model.mPwd);
            this.Model.mPlayerModel = data.user;
            AppConst_1.AppConst.currentGameId = data.gameid;
            this.Model.userid = data.user.userid;
            this.Model.gameid = data.gameid;
            this.Model.cidx = data.cidx;
            AppConst_1.AppConst.mPlayerModel["UserPassword"] = data.UserPassword;
            AppConst_1.AppConst.mPlayerModel["headIcos"] = data.headIcos;
            AppConst_1.AppConst.mPlayerModel["headFrame"] = data.headFrame;
            if (this.Model.mPlayerModel.state > 0) {
                // CommonCtr.instance.ShowTipLabel("断线重连中...");
                console.log("需要进入断线重连处理" + data.gameid + "." + data.user.tableid + " roomid：" + data.roomid);
                // 这里只存储数据 重连放到大厅处理
                AppConst_1.AppConst.roomId = "" + data.user.tableid; //借用字段
                AppConst_1.AppConst.currentGameId = data.gameid;
                AppConst_1.AppConst.currentlevelid = data.roomid;
            }
            this.view.cleanEvent(); //跳转大厅 
        }
        else if (data.result == -1) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("邀請碼不存在！"); //邀请码不存在
        }
        else if (data.result == -99) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("賬號被凍結請聯繫客服！");
            // 停止心跳
            WebSocketManager_1.WebSocketManager.getInstance.webSocket.clearTimer();
            WebSocketManager_1.WebSocketManager.getInstance.DisConnect();
        }
        else if (data.result == -1005) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("請輸入暱稱創建角色！");
            // 暂时先随机性别头像和昵称，让新用户可以进游戏
            // let nickName: string = "游客-" + (Math.floor(Math.random() * 100000) + 100000);
            // let sex: string = "" + (Math.random() * 10) % 2 + 1;
            //  let headid: string = "ui://Lobby/head" + Math.floor(Math.random() * 15);
            // this.cs_create1005(LoginViewCtr.instance.Model.userid + "", "1", nickName, headid);
            this.view.showRolePanel();
        }
        else {
            ////CommonCtr.instance.ShowTip(StrFixedServerResult.GetString(data.result));
        }
    };
    return LoginViewCtr;
}());
exports.LoginViewCtr = LoginViewCtr;
var LoginModel = /** @class */ (function () {
    function LoginModel() {
        this.ExitBattle = false;
        this.FirstClass = true;
        this.mPlayerModel = null;
        this.loginType = 1; //1 :微信登录  2:账号登录
        this._openExperience = false;
        /**游戏配置 */
        this.config = [
            { gameId: 254, gameIcon: "zues", name: "zues", update: false },
            { gameId: 92, gameIcon: "jxlw", name: "nineline", update: false },
            { gameId: 91, gameIcon: "sgml", name: "slotfruit", update: false },
            { gameId: 258, gameIcon: "csgn", name: "slotrq", update: false },
            { gameId: 4096, gameIcon: "huoniu", name: "WildHerd", update: false },
            { gameId: 21, gameIcon: "iconlh", name: "slotdt", update: false },
            { gameId: 54, gameIcon: "hznw", name: "slotFireQueen", update: false },
            { gameId: 201, gameIcon: "iconrz", name: "ninjaVSsamurai", update: false },
            { gameId: 104, gameIcon: "icondeniuzai", name: "TexasCowboy", update: false },
            { gameId: 1000, gameIcon: "iconfish", name: "fish", update: false },
        ];
    }
    LoginModel.prototype.Init = function () {
        this._openExperience = false;
        this.isOpenRoom = false;
        if (CC_JSB && BaseFrameNative_1.BaseFrameNative.isNeedUpdate) { //
            this.checkUpdate();
        }
    };
    /**游戏是否有更新 */
    LoginModel.prototype.checkUpdate = function (index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        var config = this.config;
        if (index > config.length - 1) {
            // console.log("GameCommon.gameVersion = ", JSON.stringify(GameCommon.gameVersion));
            return;
        }
        // 先判断serverlist配置版本号 如果有需要更新再继续下一步判断
        var keyName = config[index].name + "_version";
        var version = cc.sys.localStorage.getItem(keyName);
        var isNeedUpdate = true;
        if (version === undefined || version === null) {
            isNeedUpdate = true;
        }
        else {
            isNeedUpdate = this.versionCompareHandle(version, this.getGameVersion(config[index].gameId));
        }
        if (isNeedUpdate) {
            GameUpdateMgr_1.default.instance.checkUpdate(config[index].name, null, CommonCtr_1.CommonCtr.instance.view, function (isUpdate) {
                config[index].update = isUpdate;
                index += 1;
                _this.checkUpdate(index);
            });
        }
        else {
            config[index].update = false;
            index += 1;
            this.checkUpdate(index);
        }
    };
    LoginModel.prototype.setVersionCallBack = function (name, version) {
        console.log("name : " + name, "version : " + version);
        // GameCommon.gameVersion[name] = version;
    };
    // 获取游戏版本信息
    LoginModel.prototype.getGameVersion = function (gameid) {
        var list = BaseFrameNative_1.BaseFrameNative.serverList.gamereslist;
        for (var index = 0; index < list.length; index++) {
            var data = list[index];
            if (data.id == gameid) {
                return data.version;
            }
        }
        return "1.0.0";
    };
    // 版本检查 比较方法versionA旧  versionB新
    LoginModel.prototype.versionCompareHandle = function (versionA, versionB) {
        if (versionA == null || versionB == null)
            return false;
        var vA = versionA.split(".");
        var vB = versionB.split(".");
        for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i]);
            if (a === b) {
                continue;
            }
            else {
                return b - a > 0;
            }
        }
        if (vB.length > vA.length) {
            return true;
        }
        else {
            return false;
        }
    };
    return LoginModel;
}());
exports.LoginModel = LoginModel;
var WeChatInfo = /** @class */ (function () {
    function WeChatInfo() {
    }
    return WeChatInfo;
}());
exports.WeChatInfo = WeChatInfo;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Login/LoginViewCtr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9naW5cXExvZ2luVmlld0N0ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQyxpRUFBZ0U7QUFFakUsK0VBQThFO0FBQzlFLG9FQUFtRTtBQUNuRSx3RkFBdUY7QUFDdkYsbUVBQWtFO0FBQ2xFLDJEQUFzSTtBQUV0SSxrREFBNkM7QUFJN0M7SUFBQTtJQTJPQSxDQUFDO0lBck9HLHNCQUFXLHdCQUFRO2FBQW5CO1lBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUNuQyx1QkFBdUI7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDaEM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVywrQkFBSzthQUFoQjtZQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QjtZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVNLG1DQUFZLEdBQW5CO1FBRUkseUdBQXlHO1FBQ3pHLHNGQUFzRjtJQUMxRixDQUFDO0lBR0Qsc0JBQVcsbUNBQVM7UUFEcEIsb0JBQW9CO2FBQ3BCO1lBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFDM0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixNQUFjLEVB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Q0FBQyxPQUFPLENBQUM7YUFDdkI7U0FDSjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQ0FBZ0M7SUFDekIseUNBQW9CLEdBQTNCLFVBQTRCLFFBQWdCLEVBQUUsUUFBZ0I7UUFDMUQsSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDdkQsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNULFNBQVM7YUFDWjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1NBQ0o7UUFDRCxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBOUhBLEFBOEhDLElBQUE7QUE5SFksZ0NBQVU7QUFnSXZCO0lBQUE7SUFXQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvU0QsIFJvb21JbmZvU0QgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9jc19iYXNlXCI7XG5pbXBvcnQgeyBXZWJTb2NrZXRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvV2ViU29ja2V0TWFuYWdlclwiO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9Db21tb24vTG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xuaW1wb3J0IHsgQmFzZUZyYW1lTmF0aXZlIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWVOYXRpdmVcIjtcbmltcG9ydCB7IGNzX2RldmljZSwgc2NfZGV2aWNlLCBjc19sb2dpbmFjLCBzY19sb2dpbmFjLCBjc19jcmVhdGUxMDA1LCBzY19jcmVhdGUxMDA1LCBjc19sb2dpbiwgc2NfbG9naW4gfSBmcm9tIFwiLi9Mb2dpbk5ldERhdGFTdHJ1Y3RcIjtcbmltcG9ydCBMb2dpblZpZXcgZnJvbSBcIi4vTG9naW5WaWV3XCI7XG5pbXBvcnQgR2FtZVVwZGF0ZU1nciBmcm9tIFwiLi4vR2FtZVVwZGF0ZU1nclwiO1xuXG5cblxuZXhwb3J0IGNsYXNzIExvZ2luVmlld0N0ciB7XG5cbiAgICBwdWJsaWMgdmlldzogTG9naW5WaWV3O1xuICAgIHByaXZhdGUgc3RhdGljIF92aWV3Q3RyOiBMb2dpblZpZXdDdHI7XG5cbiAgICBwcml2YXRlIF9tb2RlbDogTG9naW5Nb2RlbDtcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IExvZ2luVmlld0N0ciB7XG4gICAgICAgIGlmICh0aGlzLl92aWV3Q3RyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdDdHIgPSBuZXcgTG9naW5WaWV3Q3RyKCk7XG4gICAgICAgICAgICAvL+WIneWni+azqOWGjOi/meS4qkN0cmzph4zpnaLnmoTmnI3liqHlmajmjqjpgIHmlrnms5UgXG4gICAgICAgICAgICB0aGlzLl92aWV3Q3RyLlJlZ2lzdE5vdGlmeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3Q3RyO1xuICAgIH1cblxuXG4gICAgcHVibGljIGdldCBNb2RlbCgpOiBMb2dpbk1vZGVsIHtcbiAgICAgICAgaWYgKHRoaXMuX21vZGVsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsID0gbmV3IExvZ2luTW9kZWwoKTtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsLkluaXQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZWw7XG4gICAgfVxuXG4gICAgcHVibGljIFJlZ2lzdE5vdGlmeSgpIHtcblxuICAgICAgICAvLyBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX2dhbWJsZW92ZXJfYmZfblwiLCB0aGlzLnNjX2dhbWJsZW92ZXJfYmZfbi5iaW5kKHRoaXMpKTsgIFxuICAgICAgICAvLyBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlJlZ2lzdE5vdGlmeShcInNjX2NoYXRfblwiLCB0aGlzLnNjX2NoYXRfbi5iaW5kKHRoaXMpKTsgXG4gICAgfVxuXG4gICAgLyoq5Yik5pat5q2kVmlld+aYr+WQpuW3sue7j+mHiuaUviAgKi9cbiAgICBwdWJsaWMgZ2V0IElzRGVzdG9yeSgpOiBCb29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudmlldyA9PSBudWxsIHx8IHRoaXMudmlldy5faXNEZXN0b3J5KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBjc19kZXZpY2Uob3BlbmlkOiBzdHJpbmcsIHVuaW9uaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgcGtnOiBjc19kZXZpY2UgPSBuZXcgY3NfZGV2aWNlKCk7XG4gICAgICAgIHBrZy5mbiA9IFwiY3NfZGV2aWNlXCI7XG4gICAgICAgIC8vIEdhbWVTZXR0aW5nLkluc3RhbmNlLk9wZW5JRCA9IG9wZW5pZDtcbiAgICAgICAgLy8gR2FtZVNldHRpbmcuSW5zdGFuY2UuVW5pb25JRCA9IHVuaW9uaWQ7XG4gICAgICAgIC8vIF9kYXRhLkNsaWVudEFwcFZlcnNpb24gPSBHYW1lU2V0dGluZy5JbnN0YW5jZS5DbGllbnRBcHBWZXJzaW9uO1xuICAgICAgICAvLyBfZGF0YS5EZXZpY2VJRCA9IEdhbWVTZXR0aW5nLkluc3RhbmNlLkRldmljZUlEO1xuICAgICAgICAvLyBfZGF0YS5HYW1lSUQgPSBHYW1lU2V0dGluZy5JbnN0YW5jZS5HYW1lSUQ7XG4gICAgICAgIC8vIF9kYXRhLk1vYmlsZVR5cGUgPSBHYW1lU2V0dGluZy5JbnN0YW5jZS5Nb2JpbGVUeXBlO1xuICAgICAgICAvLyBfZGF0YS5SZXRhaWxJRCA9IEdhbWVTZXR0aW5nLkluc3RhbmNlLlJldGFpbElEO1xuICAgICAgICAvLyBfZGF0YS5TY3JlZW5YID0gR2FtZVNldHRpbmcuSW5zdGFuY2UuU2NyZWVuWDtcbiAgICAgICAgLy8gX2RhdGEuU2NyZWVuWSA9IEdhbWVTZXR0aW5nLkluc3RhbmNlLlNjcmVlblk7XG4gICAgICAgIC8vIF9kYXRhLlNlcnZlcklEID0gR2FtZVNldHRpbmcuSW5zdGFuY2UuU2VydmVySUQ7IFxuICAgICAgICBwa2cuX29wZW5pZCA9IG9wZW5pZDtcbiAgICAgICAgcGtnLl91bmlvbmlkID0gdW5pb25pZDtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTihwa2csIHRoaXMuc2NfZGV2aWNlLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY19kZXZpY2UoZGF0YTogc2NfZGV2aWNlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICAvLyBDb21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKGZhbHNlKTsgXG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5Nb2RlbC5tUGlkID0gZGF0YS5wYXNzcG9ydGlkO1xuICAgICAgICB0aGlzLk1vZGVsLm1Qd2QgPSBkYXRhLnBhc3N3b3JkO1xuICAgICAgICB0aGlzLmNzX2xvZ2luYWModGhpcy5Nb2RlbC5tUGlkLCB0aGlzLk1vZGVsLm1Qd2QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjc19sb2dpbmFjKG1QaWQ6IHN0cmluZywgbVB3ZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGxldCBNYWNoaW5lVHlwZTogbnVtYmVyID0gMjtcbiAgICAgICAgbGV0IERldmljZUlEOiBzdHJpbmcgPSBcIlwiOy8vIFRvb2xzRXguR2V0TWFjaGluZUNvZGUocmVmIE1hY2hpbmVUeXBlKTtcbiAgICAgICAgbGV0IE1vYmlsZVR5cGU6IHN0cmluZyA9IFwiXCI7Ly8gTWFjaGluZVR5cGUuVG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IHB3ZDogc3RyaW5nID0gbVB3ZDsvLyBuZXcgREVTQWxnb3JpdGhtTmV3KCkuRW5jb2RlUHdkKG1Qd2QsIEdhbWVTZXR0aW5nLkNsaWVudFBhc3N3b3JkS2V5KTtcblxuICAgICAgICBsZXQgcGtnOiBjc19sb2dpbmFjID0gbmV3IGNzX2xvZ2luYWMoKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19sb2dpbmFjXCI7XG4gICAgICAgIHBrZy5EZXZpY2VJRCA9IERldmljZUlEO1xuICAgICAgICBwa2cuUGFzc3BvcnRJZCA9IG1QaWQ7XG4gICAgICAgIHBrZy5QYXNzd29yZCA9IHB3ZDtcbiAgICAgICAgcGtnLlJldGFpbElEID0gXCIwMDE5XCI7XG4gICAgICAgIGlmICh0aGlzLk1vZGVsLm1XZUNoYXRpbmZvICE9IG51bGwpIHBrZy5yZXRhaWxVc2VyID0gdGhpcy5Nb2RlbC5tV2VDaGF0aW5mby5vcGVuaWQ7XG4gICAgICAgIHBrZy5TY3JlZW5YID0gMTkyMDsvLyBjYy5zY3JlZW4uIFNjcmVlbi53aWR0aDtcbiAgICAgICAgcGtnLlNjcmVlblkgPSAxMDgwOyAvL1NjcmVlbi5oZWlnaHQ7XG4gICAgICAgIHBrZy5TZXJ2ZXJJRCA9IDE7XG4gICAgICAgIHBrZy5Vc2VyVHlwZSA9IDE7XG4gICAgICAgIC8vIF9kYXRhLklQID0gQ29tbW9uQ3RyLmluc3RhbmNlLk1vZGVsLl9jdXJJUDtcbiAgICAgICAgLy8gR2FtZVNldHRpbmcuSW5zdGFuY2UuUGlkID0gbVBpZDtcbiAgICAgICAgLy8gR2FtZVNldHRpbmcuSW5zdGFuY2UuUGFzc3dvcmQgPSBtUHdkOyAgXG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX2xvZ2luYWMuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjX2xvZ2luYWMoZGF0YTogc2NfbG9naW5hYyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy52aWV3ID09IG51bGwgfHwgdGhpcy52aWV3Ll9pc0Rlc3RvcnkpIHJldHVybjtcbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAoZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgLy8gR2FtZVNldHRpbmcuU2V0TG9naW5JbmZvKEFwcENvbmZpZ0xpc3QuQ3VycmVudC5zZGtfdHlwZSA9PSAwKTtcbiAgICAgICAgICAgIHRoaXMuTW9kZWwucGhvbmUgPSBkYXRhLnBob25lO1xuICAgICAgICAgICAgaWYgKGRhdGEuR3VpZGVJRCA9PSAxMDA1KSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy52aWV3Lm9wZW5DcmVhdGVSb2xlKGRhdGEuYUNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy4gdmlldy5fY2FuTG9naW5DbGljayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jc19sb2dpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLnlKjmiLblkI3lr4bnorzpjK/oqqTvvIFcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTk5KSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLos6zomZ/ooqvlh43ntZDoq4voga/nuavlrqLmnI3vvIFcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTEwKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLos6zomZ/op5LoibLmlbjmk5rnlbDluLjoq4voga/nuavlrqLmnI3vvIFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3NfY3JlYXRlMTAwNShwaWQ6IHN0cmluZywgQWN0aXZlQ29kZTogc3RyaW5nLCByb2xlTmFtZTogc3RyaW5nLCBoZWFkaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgcGtnOiBjc19jcmVhdGUxMDA1ID0gbmV3IGNzX2NyZWF0ZTEwMDUoKTtcbiAgICAgICAgcGtnLmZuID0gXCJjc19jcmVhdGUxMDA1XCI7XG4gICAgICAgIC8vIF9jcmVhdGVkYXRhLkNsaWVudEFwcFZlcnNpb24gPSBHYW1lU2V0dGluZy5JbnN0YW5jZS5DbGllbnRBcHBWZXJzaW9uO1xuICAgICAgICAvLyBfY3JlYXRlZGF0YS5HYW1lSUQgPSBHYW1lU2V0dGluZy5JbnN0YW5jZS5HYW1lSUQ7XG4gICAgICAgIHBrZy5QaWQgPSBwaWQ7XG4gICAgICAgIC8vIF9jcmVhdGVkYXRhLk1vYmlsZVR5cGUgPSBHYW1lU2V0dGluZy5JbnN0YW5jZS5Nb2JpbGVUeXBlO1xuICAgICAgICAvLyBfY3JlYXRlZGF0YS5SZXRhaWxJRCA9IEdhbWVTZXR0aW5nLkluc3RhbmNlLlJldGFpbElEO1xuICAgICAgICAvL19jcmVhdGVkYXRhLkFjdGl2ZUNvZGUgPSBBY3RpdmVDb2RlO1xuICAgICAgICAvLyBfY3JlYXRlZGF0YS5TZXJ2ZXJJRCA9IEdhbWVTZXR0aW5nLkluc3RhbmNlLlNlcnZlcklEICsgXCJcIjtcbiAgICAgICAgcGtnLk5pY2tOYW1lID0gcm9sZU5hbWU7XG4gICAgICAgIHBrZy5IZWFkSUQgPSBoZWFkaWQ7XG4gICAgICAgIHBrZy5fU2V4ID0gMTtcbiAgICAgICAgLy8gX2NyZWF0ZWRhdGEuSVAgPSBDb21tb25DdHIuaW5zdGFuY2UuTW9kZWwuX2N1cklQOyBcblxuICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmRKU09OKHBrZywgdGhpcy5zY19jcmVhdGUxMDA1LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY19jcmVhdGUxMDA1KF9kYXRhOiBzY19jcmVhdGUxMDA1KTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnZpZXcgPT0gbnVsbCB8fCB0aGlzLnZpZXcuX2lzRGVzdG9yeSkgcmV0dXJuO1xuICAgICAgICAvLyBDb21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKGZhbHNlKTtcbiAgICAgICAgLy8gdGhpcy4gdmlldy5fY2FuTG9naW5DbGljayA9IHRydWU7XG4gICAgICAgIGlmIChfZGF0YS5yZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgTG9naW5WaWV3Q3RyLmluc3RhbmNlLmNzX2xvZ2luKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoX2RhdGEucmVzdWx0ID09IC0xKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsTW92ZShcIumCgOivt+eggei+k+WFpemUmeivr1wiLCB0cnVlKTsvL+mCgOivt+eggei+k+WFpemUmeivr1xuICAgICAgICB9IGVsc2UgaWYgKF9kYXRhLnJlc3VsdCA9PSAtNSkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbE1vdmUoXCLkuI3og73lkIzlkI1cIiwgdHJ1ZSk7Ly/kuI3og73lkIzlkI1cbiAgICAgICAgICAgIHRoaXMudmlldy51aV9uaWNrbmFtZWNmLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbE1vdmUoXCLov5vlhaXmuLjmiI/lpLHotKUs6K+36IGU57O75a6i5pyNIFwiLCB0cnVlKTsvL+i/m+WFpea4uOaIj+Wksei0pSzor7fogZTns7vlrqLmnI0gXG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcHVibGljIGNzX2xvZ2luKCk6IHZvaWQge1xuICAgICAgICBsZXQgcGtnOiBjc19sb2dpbiA9IG5ldyBjc19sb2dpbigpO1xuICAgICAgICBwa2cuZm4gPSBcImNzX2xvZ2luXCI7XG4gICAgICAgIGxldCBNYWNoaW5lVHlwZTogbnVtYmVyID0gMjtcbiAgICAgICAgcGtnLmRldmljZVR5cGUgPSBNYWNoaW5lVHlwZTtcbiAgICAgICAgcGtnLmFjY291bnRJZCA9IHRoaXMuTW9kZWwuYWNjb3VudElkO1xuICAgICAgICAvLyBpZiAoQ29tbW9uX1NlY0N0ci5pbnN0YW5jZS5Nb2RlbC5sb2MubGF0ID09IDAgJiYgQ29tbW9uX1NlY0N0ci5pbnN0YW5jZS5Nb2RlbC5sb2MubG5nID09IDAgJiYgSW5wdXQubG9jYXRpb24uaXNFbmFibGVkQnlVc2VyKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd0xvYWRfQ2lyY2xlKHRydWUpO1xuICAgICAgICAvLyAgICAgTG9jYXRpb25IZWxwLkdldExvY2F0aW9uKChsb2MpID0+XG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dMb2FkX0NpcmNsZShmYWxzZSk7XG4gICAgICAgIC8vICAgICAgICAgQ29tbW9uX1NlY0N0ci5pbnN0YW5jZS5Nb2RlbC5sb2MgPSBsb2M7XG4gICAgICAgIC8vICAgICAgICAgbG9naW4ubGF0ID0gQ29tbW9uX1NlY0N0ci5pbnN0YW5jZS5Nb2RlbC5sb2MubGF0O1xuICAgICAgICAvLyAgICAgICAgIGxvZ2luLmxuZyA9IENvbW1vbl9TZWNDdHIuaW5zdGFuY2UuTW9kZWwubG9jLmxuZztcbiAgICAgICAgLy8gICAgICAgICBsb2dpbi5mbiA9IFwiY3NfbG9naW5cIjtcbiAgICAgICAgLy8gICAgICAgICBNeVNvY2tldC5TZW5kRGF0YShsb2dpbiwgKCkgPT4geyByZXR1cm4gdHJ1ZTsgfSk7XG4gICAgICAgIC8vICAgICB9KTsvL+iOt+WPlue7j+e6rOW6piBcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGxvZ2luLmxhdCA9IENvbW1vbl9TZWNDdHIuaW5zdGFuY2UuTW9kZWwubG9jLmxhdDtcbiAgICAgICAgICAgIC8vIGxvZ2luLmxuZyA9IENvbW1vbl9TZWNDdHIuaW5zdGFuY2UuTW9kZWwubG9jLmxuZzsgXG5cbiAgICAgICAgICAgIC8vIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZEpTT04ocGtnLCB0aGlzLnNjX2xvZ2luLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5TZW5kSlNPTlRpbWVPdXQocGtnLCB0aGlzLnNjX2xvZ2luLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHB1YmxpYyBMb2dpbnRvRmlzaExldmVsKHBpZDogc3RyaW5nLCBwd2Q6IHN0cmluZykge1xuICAgICAgICAvLyBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLkdhdGVTZXJ2ZXIoQXBwQ29uc3Quc2VydmVySWQpO1xuICAgICAgICAvLyBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLkdhdGVQb3J0KDEwMDAyKTtcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5DU0xvZ2luQ2FsbGJhY2sgPSB0aGlzLnNjX2xvZ2luLmJpbmQodGhpcyk7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuTG9naW5CeVBJRFBXRChwaWQsIHB3ZCk7XG4gICAgfVxuXG4gICAgLyoqbG9naW4gc3VjYyAqL1xuICAgIHByaXZhdGUgc2NfbG9naW4oZGF0YTogc2NfbG9naW4pIHtcbiAgICAgICAgdGhpcy52aWV3LmxvZ2luU3VjY2VzcygpO1xuICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEucmVzdWx0ID09IDEpIHtcbiAgICAgICAgICAgIEFwcENvbnN0LkFjY291bnQgPSBkYXRhLnVzZXIudXNlcmlkO1xuICAgICAgICAgICAgQXBwQ29uc3QuZ2FtZUlkID0gZGF0YS5nYW1laWQ7XG4gICAgICAgICAgICBBcHBDb25zdC5jaWR4ID0gZGF0YS5jaWR4O1xuICAgICAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsID0gZGF0YS51c2VyO1xuICAgICAgICAgICAgTG9jYWxTdG9yYWdlLmdldEluc3RhbmNlKCkuc2V0SXRlbShcImxvZ2luX3BpZFwiLCB0aGlzLk1vZGVsLm1QaWQpO1xuICAgICAgICAgICAgTG9jYWxTdG9yYWdlLmdldEluc3RhbmNlKCkuc2V0SXRlbShcImxvZ2luX3B3ZFwiLCB0aGlzLk1vZGVsLm1Qd2QpO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5tUGxheWVyTW9kZWwgPSBkYXRhLnVzZXI7XG4gICAgICAgICAgICBBcHBDb25zdC5jdXJyZW50R2FtZUlkID0gZGF0YS5nYW1laWQ7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLnVzZXJpZCA9IGRhdGEudXNlci51c2VyaWQ7XG4gICAgICAgICAgICB0aGlzLk1vZGVsLmdhbWVpZCA9IGRhdGEuZ2FtZWlkO1xuICAgICAgICAgICAgdGhpcy5Nb2RlbC5jaWR4ID0gZGF0YS5jaWR4O1xuICAgICAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsW1wiVXNlclBhc3N3b3JkXCJdID0gZGF0YS5Vc2VyUGFzc3dvcmQ7XG4gICAgICAgICAgICBBcHBDb25zdC5tUGxheWVyTW9kZWxbXCJoZWFkSWNvc1wiXSA9IGRhdGEuaGVhZEljb3M7XG4gICAgICAgICAgICBBcHBDb25zdC5tUGxheWVyTW9kZWxbXCJoZWFkRnJhbWVcIl0gPSBkYXRhLmhlYWRGcmFtZTtcbiAgICAgICAgICAgIGlmICh0aGlzLk1vZGVsLm1QbGF5ZXJNb2RlbC5zdGF0ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5pat57q/6YeN6L+e5LitLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZyA6KaB6L+b5YWl5pat57q/6YeN6L+e5aSE55CGXCIgKyBkYXRhLmdhbWVpZCArIFwiLlwiICsgZGF0YS51c2VyLnRhYmxlaWQgKyBcIiByb29taWTvvJpcIiArIGRhdGEucm9vbWlkKTtcbiAgICAgICAgICAgICAgICAvLyDov5nph4zlj6rlrZjlgqjmlbDmja4g6YeN6L+e5pS+5Yiw5aSn5Y6F5aSE55CGXG4gICAgICAgICAgICAgICAgQXBwQ29uc3Qucm9vbUlkID0gXCJcIiArIGRhdGEudXNlci50YWJsZWlkOy8v5YCf55So5a2X5q61XG4gICAgICAgICAgICAgICAgQXBwQ29uc3QuY3VycmVudEdhbWVJZCA9IGRhdGEuZ2FtZWlkO1xuICAgICAgICAgICAgICAgIEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID0gZGF0YS5yb29taWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZpZXcuY2xlYW5FdmVudCgpOy8v6Lez6L2s5aSn5Y6FIFxuICAgICAgICB9IGVsc2UgaWYgKGRhdGEucmVzdWx0ID09IC0xKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6YKA6KuL56K85LiN5a2Y5Zyo77yBXCIpOy8v6YKA6K+356CB5LiN5a2Y5ZyoXG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5yZXN1bHQgPT0gLTk5KSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6LOs6Jmf6KKr5YeN57WQ6KuL6IGv57mr5a6i5pyN77yBXCIpO1xuICAgICAgICAgICAgLy8g5YGc5q2i5b+D6LezXG4gICAgICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLndlYlNvY2tldC5jbGVhclRpbWVyKCk7XG4gICAgICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLkRpc0Nvbm5lY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLnJlc3VsdCA9PSAtMTAwNSkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuiri+i8uOWFpeaaseeoseWJteW7uuinkuiJsu+8gVwiKTtcbiAgICAgICAgICAgIC8vIOaaguaXtuWFiOmaj+acuuaAp+WIq+WktOWDj+WSjOaYteensO+8jOiuqeaWsOeUqOaIt+WPr+S7pei/m+a4uOaIj1xuICAgICAgICAgICAgLy8gbGV0IG5pY2tOYW1lOiBzdHJpbmcgPSBcIua4uOWuoi1cIiArIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApICsgMTAwMDAwKTtcbiAgICAgICAgICAgIC8vIGxldCBzZXg6IHN0cmluZyA9IFwiXCIgKyAoTWF0aC5yYW5kb20oKSAqIDEwKSAlIDIgKyAxO1xuICAgICAgICAgICAgLy8gIGxldCBoZWFkaWQ6IHN0cmluZyA9IFwidWk6Ly9Mb2JieS9oZWFkXCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNSk7XG4gICAgICAgICAgICAvLyB0aGlzLmNzX2NyZWF0ZTEwMDUoTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnVzZXJpZCArIFwiXCIsIFwiMVwiLCBuaWNrTmFtZSwgaGVhZGlkKTtcbiAgICAgICAgICAgIHRoaXMudmlldy5zaG93Um9sZVBhbmVsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLy8vQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXAoU3RyRml4ZWRTZXJ2ZXJSZXN1bHQuR2V0U3RyaW5nKGRhdGEucmVzdWx0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuXG5cbmV4cG9ydCBjbGFzcyBMb2dpbk1vZGVsIHtcblxuICAgIHB1YmxpYyBFeGl0QmF0dGxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIEZpcnN0Q2xhc3M6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiAgICBwdWJsaWMgbVBpZDogc3RyaW5nO1xuICAgIHB1YmxpYyBtTmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBtUHdkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgbUlwOiBzdHJpbmc7XG4gICAgcHVibGljIG1NYWNoaW5lQ29kZTogc3RyaW5nO1xuICAgIHB1YmxpYyBtTWFjaGluZVR5cGU6IGJvb2xlYW47XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmlq3nur/ph43ov57pgJrnlKhcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyB1c2VyaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgZ2FtZWlkOiBudW1iZXI7XG4gICAgLy/lvZPliY3nmoRjbHViIGlkeFxuICAgIHB1YmxpYyBjaWR4OiBudW1iZXI7XG4gICAgcHVibGljIG1QbGF5ZXJNb2RlbDogUGxheWVySW5mb1NEID0gbnVsbDtcbiAgICBwdWJsaWMgZ2FtZWxpc3Q6IFJvb21JbmZvU0Q7XG4gICAgLy8gcHVibGljICBhdXRoc2RsaXN0OmF1dGhTRFtdO1xuICAgIHB1YmxpYyBpc09wZW5Sb29tOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc1JvbGxQYW46IGJvb2xlYW47XG4gICAgcHVibGljIG1XZUNoYXRpbmZvOiBXZUNoYXRJbmZvO1xuICAgIHB1YmxpYyBsb2dpblR5cGU6IG51bWJlciA9IDE7Ly8xIDrlvq7kv6HnmbvlvZUgIDI66LSm5Y+355m75b2VXG4gICAgcHVibGljIHBob25lOiBzdHJpbmc7Ly/nu5HlrprnmoTmiYvmnLrlj7dcbiAgICAvLyDku6PnkIZcbiAgICBwdWJsaWMgTXlBZ2VudDogc3RyaW5nO1xuICAgIHB1YmxpYyBNeUFnZW50SUQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaJgOaciea4uOaIj+WlluaxoFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGFsbGphY2twb3Q6IG51bWJlcjtcbiAgICBwdWJsaWMgX29wZW5FeHBlcmllbmNlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIEluaXQoKSB7XG4gICAgICAgIHRoaXMuX29wZW5FeHBlcmllbmNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNPcGVuUm9vbSA9IGZhbHNlO1xuICAgICAgICBpZiAoQ0NfSlNCICYmIEJhc2VGcmFtZU5hdGl2ZS5pc05lZWRVcGRhdGUpIHsgIC8vXG4gICAgICAgICAgICB0aGlzLmNoZWNrVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq5ri45oiP6YWN572uICovXG4gICAgcHVibGljIGNvbmZpZyA9IFtcbiAgICAgICAgeyBnYW1lSWQ6IDI1NCwgZ2FtZUljb246IFwienVlc1wiLCBuYW1lOiBcInp1ZXNcIiwgdXBkYXRlOiBmYWxzZSB9LCAvL+WumeaWr1xuICAgICAgICB7IGdhbWVJZDogOTIsIGdhbWVJY29uOiBcImp4bHdcIiwgbmFtZTogXCJuaW5lbGluZVwiLCB1cGRhdGU6IGZhbHNlIH0sIC8v5Lmd57q/XG4gICAgICAgIHsgZ2FtZUlkOiA5MSwgZ2FtZUljb246IFwic2dtbFwiLCBuYW1lOiBcInNsb3RmcnVpdFwiLCB1cGRhdGU6IGZhbHNlIH0sIC8v5rC05p6c546b5Li9XG4gICAgICAgIHsgZ2FtZUlkOiAyNTgsIGdhbWVJY29uOiBcImNzZ25cIiwgbmFtZTogXCJzbG90cnFcIiwgdXBkYXRlOiBmYWxzZSB9LCAvL+i0ouelnlxuICAgICAgICB7IGdhbWVJZDogNDA5NiwgZ2FtZUljb246IFwiaHVvbml1XCIsIG5hbWU6IFwiV2lsZEhlcmRcIiwgdXBkYXRlOiBmYWxzZSB9LCAvL+eBq+eJm1xuICAgICAgICB7IGdhbWVJZDogMjEsIGdhbWVJY29uOiBcImljb25saFwiLCBuYW1lOiBcInNsb3RkdFwiLCB1cGRhdGU6IGZhbHNlIH0sLy/pvpnomY5cbiAgICAgICAgeyBnYW1lSWQ6IDU0LCBnYW1lSWNvbjogXCJoem53XCIsIG5hbWU6IFwic2xvdEZpcmVRdWVlblwiLCB1cGRhdGU6IGZhbHNlIH0sIC8v54Gr5aWzXG4gICAgICAgIHsgZ2FtZUlkOiAyMDEsIGdhbWVJY29uOiBcImljb25yelwiLCBuYW1lOiBcIm5pbmphVlNzYW11cmFpXCIsIHVwZGF0ZTogZmFsc2UgfSwgLy/lv43ogIVcblxuICAgICAgICB7IGdhbWVJZDogMTA0LCBnYW1lSWNvbjogXCJpY29uZGVuaXV6YWlcIiwgbmFtZTogXCJUZXhhc0Nvd2JveVwiLCB1cGRhdGU6IGZhbHNlIH0sIC8v54mb5LuUICAg55m+5Lq65Zy6XG5cbiAgICAgICAgeyBnYW1lSWQ6IDEwMDAsIGdhbWVJY29uOiBcImljb25maXNoXCIsIG5hbWU6IFwiZmlzaFwiLCB1cGRhdGU6IGZhbHNlIH0sLy/mjZXpsbxcbiAgICBdO1xuXG4gICAgLyoq5ri45oiP5piv5ZCm5pyJ5pu05pawICovXG4gICAgcHVibGljIGNoZWNrVXBkYXRlKGluZGV4OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgaWYgKGluZGV4ID4gY29uZmlnLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiR2FtZUNvbW1vbi5nYW1lVmVyc2lvbiA9IFwiLCBKU09OLnN0cmluZ2lmeShHYW1lQ29tbW9uLmdhbWVWZXJzaW9uKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YWI5Yik5patc2VydmVybGlzdOmFjee9rueJiOacrOWPtyDlpoLmnpzmnInpnIDopoHmm7TmlrDlho3nu6fnu63kuIvkuIDmraXliKTmlq1cbiAgICAgICAgbGV0IGtleU5hbWU6IHN0cmluZyA9IGNvbmZpZ1tpbmRleF0ubmFtZSArIFwiX3ZlcnNpb25cIjtcbiAgICAgICAgbGV0IHZlcnNpb24gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5TmFtZSk7XG4gICAgICAgIGxldCBpc05lZWRVcGRhdGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgICBpZiAodmVyc2lvbiA9PT0gdW5kZWZpbmVkIHx8IHZlcnNpb24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGlzTmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc05lZWRVcGRhdGUgPSB0aGlzLnZlcnNpb25Db21wYXJlSGFuZGxlKHZlcnNpb24sIHRoaXMuZ2V0R2FtZVZlcnNpb24oY29uZmlnW2luZGV4XS5nYW1lSWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOZWVkVXBkYXRlKSB7XG4gICAgICAgICAgICBHYW1lVXBkYXRlTWdyLmluc3RhbmNlLmNoZWNrVXBkYXRlKGNvbmZpZ1tpbmRleF0ubmFtZSwgbnVsbCwgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcsIChpc1VwZGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1tpbmRleF0udXBkYXRlID0gaXNVcGRhdGU7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVXBkYXRlKGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnW2luZGV4XS51cGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgICAgICB0aGlzLmNoZWNrVXBkYXRlKGluZGV4KTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmVyc2lvbkNhbGxCYWNrKG5hbWU6IHN0cmluZywgdmVyc2lvbjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmFtZSA6IFwiICsgbmFtZSwgXCJ2ZXJzaW9uIDogXCIgKyB2ZXJzaW9uKTtcbiAgICAgICAgLy8gR2FtZUNvbW1vbi5nYW1lVmVyc2lvbltuYW1lXSA9IHZlcnNpb247XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5ri45oiP54mI5pys5L+h5oGvXG4gICAgcHVibGljIGdldEdhbWVWZXJzaW9uKGdhbWVpZDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGxpc3QgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVyTGlzdC5nYW1lcmVzbGlzdDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGRhdGEuaWQgPT0gZ2FtZWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEudmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCIxLjAuMFwiO1xuICAgIH1cblxuICAgIC8vIOeJiOacrOajgOafpSDmr5TovoPmlrnms5V2ZXJzaW9uQeaXpyAgdmVyc2lvbkLmlrBcbiAgICBwdWJsaWMgdmVyc2lvbkNvbXBhcmVIYW5kbGUodmVyc2lvbkE6IHN0cmluZywgdmVyc2lvbkI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodmVyc2lvbkEgPT0gbnVsbCB8fCB2ZXJzaW9uQiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCB2QSA9IHZlcnNpb25BLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgbGV0IHZCID0gdmVyc2lvbkIuc3BsaXQoXCIuXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZBLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgYSA9IHBhcnNlSW50KHZBW2ldKTtcbiAgICAgICAgICAgIGxldCBiID0gcGFyc2VJbnQodkJbaV0pO1xuICAgICAgICAgICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgLSBhID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodkIubGVuZ3RoID4gdkEubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdlQ2hhdEluZm8ge1xuICAgIHB1YmxpYyBjb3VudHJ5OiBzdHJpbmc7Ly/lm73lrrZcbiAgICBwdWJsaWMgcHJvdmluY2U6IHN0cmluZzsvL+ecgVxuICAgIHB1YmxpYyBoZWFkaW1ndXJsOiBzdHJpbmc7Ly/lpLTlg49cbiAgICBwdWJsaWMgdW5pb25pZDogc3RyaW5nOy8vSURcbiAgICBwdWJsaWMgb3BlbmlkOiBzdHJpbmc7Ly9JRFxuICAgIHB1YmxpYyBuaWNrbmFtZTogc3RyaW5nOy8v5b6u5L+h5ZCN56ewXG4gICAgcHVibGljIGNpdHk6IHN0cmluZzsvL+WfjuW4glxuICAgIHB1YmxpYyBzZXg6IG51bWJlcjsvL+W+ruS/oeW5tOm+hFxuICAgIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nOy8v6K+t6KiAXG4gICAgcHVibGljIHByaXZpbGVnZTogc3RyaW5nW107Ly/nibnmnYNcbn0iXX0=
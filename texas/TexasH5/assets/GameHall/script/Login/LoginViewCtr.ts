import { CommonCtr } from "../../../Script/BaseFrame/CommonCtr";
import { PlayerInfoSD, RoomInfoSD } from "../../../Script/BaseFrame/cs_base";
import { WebSocketManager } from "../../../Script/BaseFrame/WebSocketManager";
import { LocalStorage } from "../../../Script/Common/LocalStorage";
import { AppConst } from "../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../Script/BaseFrameNative";
import { cs_device, sc_device, cs_loginac, sc_loginac, cs_create1005, sc_create1005, cs_login, sc_login } from "./LoginNetDataStruct";
import LoginView from "./LoginView";
import GameUpdateMgr from "../GameUpdateMgr";



export class LoginViewCtr {

    public view: LoginView;
    private static _viewCtr: LoginViewCtr;

    private _model: LoginModel;
    static get instance(): LoginViewCtr {
        if (this._viewCtr == null) {
            this._viewCtr = new LoginViewCtr();
            //初始注册这个Ctrl里面的服务器推送方法 
            this._viewCtr.RegistNotify();
        }
        return this._viewCtr;
    }


    public get Model(): LoginModel {
        if (this._model == null) {
            this._model = new LoginModel();
            this._model.Init();
        }
        return this._model;
    }

    public RegistNotify() {

        // WebSocketManager.getInstance.RegistNotify("sc_gambleover_bf_n", this.sc_gambleover_bf_n.bind(this));  
        // WebSocketManager.getInstance.RegistNotify("sc_chat_n", this.sc_chat_n.bind(this)); 
    }

    /**判断此View是否已经释放  */
    public get IsDestory(): Boolean {
        if (this.view == null || this.view._isDestory) return true;
        return false;
    }

    public cs_device(openid: string, unionid: string): void {
        let pkg: cs_device = new cs_device();
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
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_device.bind(this));
    }

    public sc_device(data: sc_device): void {
        if (this.view == null || this.view._isDestory) return;
        // CommonCtr.instance.ShowLoad_Circle(false); 
        if (data == null) return;
        this.Model.mPid = data.passportid;
        this.Model.mPwd = data.password;
        this.cs_loginac(this.Model.mPid, this.Model.mPwd);
    }

    public cs_loginac(mPid: string, mPwd: string): void {
        let MachineType: number = 2;
        let DeviceID: string = "";// ToolsEx.GetMachineCode(ref MachineType);
        let MobileType: string = "";// MachineType.ToString();
        let pwd: string = mPwd;// new DESAlgorithmNew().EncodePwd(mPwd, GameSetting.ClientPasswordKey);

        let pkg: cs_loginac = new cs_loginac();
        pkg.fn = "cs_loginac";
        pkg.DeviceID = DeviceID;
        pkg.PassportId = mPid;
        pkg.Password = pwd;
        pkg.RetailID = "0019";
        if (this.Model.mWeChatinfo != null) pkg.retailUser = this.Model.mWeChatinfo.openid;
        pkg.ScreenX = 1920;// cc.screen. Screen.width;
        pkg.ScreenY = 1080; //Screen.height;
        pkg.ServerID = 1;
        pkg.UserType = 1;
        // _data.IP = CommonCtr.instance.Model._curIP;
        // GameSetting.Instance.Pid = mPid;
        // GameSetting.Instance.Password = mPwd;  
        WebSocketManager.getInstance.SendJSON(pkg, this.sc_loginac.bind(this));
    }

    public sc_loginac(data: sc_loginac): void {
        if (this.view == null || this.view._isDestory) return;
        if (data == null) return;
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
            CommonCtr.instance.view.ShowTipLabel("用戶名密碼錯誤！");
        }
        else if (data.result == -99) {
            CommonCtr.instance.view.ShowTipLabel("賬號被凍結請聯繫客服！");
        }
        else if (data.result == -10) {
            CommonCtr.instance.view.ShowTipLabel("賬號角色數據異常請聯繫客服！");
        }
    }

    public cs_create1005(pid: string, ActiveCode: string, roleName: string, headid: string): void {
        let pkg: cs_create1005 = new cs_create1005();
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

        WebSocketManager.getInstance.SendJSON(pkg, this.sc_create1005.bind(this));
    }

    public sc_create1005(_data: sc_create1005): void {
        if (this.view == null || this.view._isDestory) return;
        // CommonCtr.instance.ShowLoad_Circle(false);
        // this. view._canLoginClick = true;
        if (_data.result == 1) {
            LoginViewCtr.instance.cs_login();
        } else if (_data.result == -1) {
            CommonCtr.instance.ShowTipLabelMove("邀请码输入错误", true);//邀请码输入错误
        } else if (_data.result == -5) {
            CommonCtr.instance.ShowTipLabelMove("不能同名", true);//不能同名
            this.view.ui_nicknamecf.visible = true;
        } else {
            CommonCtr.instance.ShowTipLabelMove("进入游戏失败,请联系客服 ", true);//进入游戏失败,请联系客服 
        }

    }


    public cs_login(): void {
        let pkg: cs_login = new cs_login();
        pkg.fn = "cs_login";
        let MachineType: number = 2;
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
            WebSocketManager.getInstance.SendJSONTimeOut(pkg, this.sc_login.bind(this));
        }
    }



    public LogintoFishLevel(pid: string, pwd: string) {
        // WebSocketManager.getInstance.GateServer(AppConst.serverId);
        // WebSocketManager.getInstance.GatePort(10002);
        WebSocketManager.getInstance.CSLoginCallback = this.sc_login.bind(this);
        WebSocketManager.getInstance.LoginByPIDPWD(pid, pwd);
    }

    /**login succ */
    private sc_login(data: sc_login) {
        this.view.loginSuccess();
        if (data == null) {
            return;
        }
        if (data.result == 1) {
            AppConst.Account = data.user.userid;
            AppConst.gameId = data.gameid;
            AppConst.cidx = data.cidx;
            AppConst.mPlayerModel = data.user;
            LocalStorage.getInstance().setItem("login_pid", this.Model.mPid);
            LocalStorage.getInstance().setItem("login_pwd", this.Model.mPwd);
            this.Model.mPlayerModel = data.user;
            AppConst.currentGameId = data.gameid;
            this.Model.userid = data.user.userid;
            this.Model.gameid = data.gameid;
            this.Model.cidx = data.cidx;
            AppConst.mPlayerModel["UserPassword"] = data.UserPassword;
            AppConst.mPlayerModel["headIcos"] = data.headIcos;
            AppConst.mPlayerModel["headFrame"] = data.headFrame;
            if (this.Model.mPlayerModel.state > 0) {
                // CommonCtr.instance.ShowTipLabel("断线重连中...");
                console.log("需要进入断线重连处理" + data.gameid + "." + data.user.tableid + " roomid：" + data.roomid);
                // 这里只存储数据 重连放到大厅处理
                AppConst.roomId = "" + data.user.tableid;//借用字段
                AppConst.currentGameId = data.gameid;
                AppConst.currentlevelid = data.roomid;
            }
            this.view.cleanEvent();//跳转大厅 
        } else if (data.result == -1) {
            CommonCtr.instance.ShowTipLabel("邀請碼不存在！");//邀请码不存在
        } else if (data.result == -99) {
            CommonCtr.instance.ShowTipLabel("賬號被凍結請聯繫客服！");
            // 停止心跳
            WebSocketManager.getInstance.webSocket.clearTimer();
            WebSocketManager.getInstance.DisConnect();
        } else if (data.result == -1005) {
            CommonCtr.instance.ShowTipLabel("請輸入暱稱創建角色！");
            // 暂时先随机性别头像和昵称，让新用户可以进游戏
            // let nickName: string = "游客-" + (Math.floor(Math.random() * 100000) + 100000);
            // let sex: string = "" + (Math.random() * 10) % 2 + 1;
            //  let headid: string = "ui://Lobby/head" + Math.floor(Math.random() * 15);
            // this.cs_create1005(LoginViewCtr.instance.Model.userid + "", "1", nickName, headid);
            this.view.showRolePanel();
        } else {
            ////CommonCtr.instance.ShowTip(StrFixedServerResult.GetString(data.result));
        }
    }

}



export class LoginModel {

    public ExitBattle: boolean = false;
    public FirstClass: boolean = true;
    public accountId: string;
    public mPid: string;
    public mName: string;
    public mPwd: string;

    public mIp: string;
    public mMachineCode: string;
    public mMachineType: boolean;
    /// <summary>
    /// 断线重连通用
    /// </summary>
    public userid: number;
    public gameid: number;
    //当前的club idx
    public cidx: number;
    public mPlayerModel: PlayerInfoSD = null;
    public gamelist: RoomInfoSD;
    // public  authsdlist:authSD[];
    public isOpenRoom: boolean;
    public isRollPan: boolean;
    public mWeChatinfo: WeChatInfo;
    public loginType: number = 1;//1 :微信登录  2:账号登录
    public phone: string;//绑定的手机号
    // 代理
    public MyAgent: string;
    public MyAgentID: number;
    /// <summary>
    /// 所有游戏奖池
    /// </summary>
    public alljackpot: number;
    public _openExperience: boolean = false;
    public Init() {
        this._openExperience = false;
        this.isOpenRoom = false;
        if (CC_JSB && BaseFrameNative.isNeedUpdate) {  //
            this.checkUpdate();
        }
    }
    /**游戏配置 */
    public config = [
        { gameId: 254, gameIcon: "zues", name: "zues", update: false }, //宙斯
        { gameId: 92, gameIcon: "jxlw", name: "nineline", update: false }, //九线
        { gameId: 91, gameIcon: "sgml", name: "slotfruit", update: false }, //水果玛丽
        { gameId: 258, gameIcon: "csgn", name: "slotrq", update: false }, //财神
        { gameId: 4096, gameIcon: "huoniu", name: "WildHerd", update: false }, //火牛
        { gameId: 21, gameIcon: "iconlh", name: "slotdt", update: false },//龙虎
        { gameId: 54, gameIcon: "hznw", name: "slotFireQueen", update: false }, //火女
        { gameId: 201, gameIcon: "iconrz", name: "ninjaVSsamurai", update: false }, //忍者

        { gameId: 104, gameIcon: "icondeniuzai", name: "TexasCowboy", update: false }, //牛仔   百人场

        { gameId: 1000, gameIcon: "iconfish", name: "fish", update: false },//捕鱼
    ];

    /**游戏是否有更新 */
    public checkUpdate(index: number = 0) {
        let config = this.config;
        if (index > config.length - 1) {
            // console.log("GameCommon.gameVersion = ", JSON.stringify(GameCommon.gameVersion));
            return;
        }
        // 先判断serverlist配置版本号 如果有需要更新再继续下一步判断
        let keyName: string = config[index].name + "_version";
        let version = cc.sys.localStorage.getItem(keyName);
        let isNeedUpdate: boolean = true;
        if (version === undefined || version === null) {
            isNeedUpdate = true;
        } else {
            isNeedUpdate = this.versionCompareHandle(version, this.getGameVersion(config[index].gameId));
        }
        if (isNeedUpdate) {
            GameUpdateMgr.instance.checkUpdate(config[index].name, null, CommonCtr.instance.view, (isUpdate) => {
                config[index].update = isUpdate;
                index += 1;
                this.checkUpdate(index);
            });
        } else {
            config[index].update = false;
            index += 1;
            this.checkUpdate(index);
        }


    }

    public setVersionCallBack(name: string, version: string) {
        console.log("name : " + name, "version : " + version);
        // GameCommon.gameVersion[name] = version;
    }

    // 获取游戏版本信息
    public getGameVersion(gameid: number): string {
        let list = BaseFrameNative.serverList.gamereslist;
        for (let index = 0; index < list.length; index++) {
            let data = list[index];
            if (data.id == gameid) {
                return data.version;
            }
        }
        return "1.0.0";
    }

    // 版本检查 比较方法versionA旧  versionB新
    public versionCompareHandle(versionA: string, versionB: string): boolean {
        if (versionA == null || versionB == null) return false;
        let vA = versionA.split(".");
        let vB = versionB.split(".");
        for (let i = 0; i < vA.length; ++i) {
            let a = parseInt(vA[i]);
            let b = parseInt(vB[i]);
            if (a === b) {
                continue;
            } else {
                return b - a > 0;
            }
        }
        if (vB.length > vA.length) {
            return true;
        } else {
            return false;
        }
    }
}

export class WeChatInfo {
    public country: string;//国家
    public province: string;//省
    public headimgurl: string;//头像
    public unionid: string;//ID
    public openid: string;//ID
    public nickname: string;//微信名称
    public city: string;//城市
    public sex: number;//微信年龄
    public language: string;//语言
    public privilege: string[];//特权
}
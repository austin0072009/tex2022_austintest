import { cs_base, sc_base, PlayerInfoSD } from "../../../Script/BaseFrame/cs_base";



export class cs_getexiste_openid extends cs_base {
    public openid: string;
    public _istrueWeiXin: boolean;
}

export class sc_getexiste_openid extends sc_base {
    public _existe: boolean;
    public _pid: string;
}


export class cs_device extends cs_base {
    public MobileType: number;
    public GameID: number;
    public RetailID: string;
    public ClientAppVersion;
    public DeviceID: string;
    public ScreenX: number;
    public ScreenY: number;
    public ServerID: number;
    public _openid: string;
    public _unionid: string;
}

export class sc_device extends sc_base {
    public passportid: string;
    public password: string;
}


export class cs_ping extends cs_base {

}
export class sc_ping extends sc_base {
    public fps: number;
}

/**登录 */
export class cs_login extends cs_base {
    public accountId: string;
    public lat: number;
    public lng: number;
    /**用户mac地址 */
    public deviceID: string;
    /**机器类型（1： 安卓；2：IOS） */
    public deviceType: number;
}

/** 登录返回*/
export class sc_login extends sc_base {
    public gameid: number;
    public roomid: number;
    public UserPassword: string;
    public user: PlayerInfoSD;
    public cidx: number;
    /**拥有的头像框 */
    public headIcos: string[];
    /**当前选择的头像框 */
    public headFrame: string;
}

export class cs_loginac extends cs_base {
    public PassportId: string;
    /// <summary>
    /// The password.
    /// </summary>
    public Password: string;
    /// <summary>
    /// The device I.
    /// </summary>
    public DeviceID: string;
    /// <summary>
    /// 当OPENID
    /// </summary>
    public retailUser: string;
    public ScreenX: number;
    public ScreenY: number;
    /// <summary>
    /// The retail I.
    /// </summary>
    public RetailID: string;
    /// <summary>
    /// The type of the user.
    /// </summary>
    public UserType: number;
    /// <summary>
    /// The server I.
    /// </summary>
    public ServerID: number;
    /// <summary>
    /// The type of the game.
    /// </summary>
    public GameType: number;
    public wechatename: string;
    public wechathead: string;
}

export class sc_loginac extends sc_base {
    public SessionId: string;
    public UserId: number;
    public UserType: number;
    public LoginTime: string;
    public GuideID: number;
    public PassportId: string;
    public refresh_token: string;
    public scope: string;
    public phone: string;
    /**邀请码 */
    public aCode: string;
}
export class cs_create1005 extends cs_base {
    public RetailID: string;
    public Pid: string;
    public MobileType: number;
    public ClientAppVersion: string;
    public GameID: number;
    public ServerID: string;
    public _Sex: number;
    public NickName: string;
    public HeadID: string;
    /// <summary>
    /// 玩家ip
    /// </summary>
    public IP: string;
    //public string ActiveCode;
}

export class sc_create1005 extends sc_base { }

/** 服务器列表*/
export class ServerListPod {
    public apksite: string;
    public ipasite: string;
    // app版本号
    public AppVersion: string;
    public IpaVersion: string;

    // 资源版本号
    public ResVersion: number;
    public IpaResVersion: number;
    /** 后台激活码*/
    public key: string;
    /**是否通过审核 */
    public review: boolean = false;
    public wechatsdk: boolean = false;
    /** 体验服id*/
    public experience: number = 0;//203
    /**是否加密 1表示加密过 */
    public encrypt: string;
    /**是否开启网页登录验证 1表示要请求 0表示不用去请求 */
    public webcheck: string;
    /**服务器列表 */
    public serverlist: ServerPod[];
    /**资源服务器 */
    public ResServer: ServerPod[];
    /** 资源版本信息*/
    public gamereslist: GameVersionPod[];
    /**登陆白名单 */
    public TrustList: string[];
    /** 白名单测试版本号*/
    public TrueVer: string;

    public serviceUrl: string;
    public downloadurl: string;
    // 资源Url
    public getResourceUrl(): string {
        if (this.ResServer == null || this.ResServer.length == 0) return "";
        return this.ResServer[0].url;
    }
    public home_url: string;
}
// 服务器列表结构
export class ServerPod {
    public idx: number;
    public name: string;
    /** ip 或域名 */
    public url: string;
    public port: number;
    /**0 本地 1 正式服 2 测试服 */
    public status: number;
    public open: boolean;
    public random: number;
    /**官网地址 */
    public homeAdress: string;
    /**api地址 */
    public apiAdress: string;
    /**api地址 */
    public api2: string;
    /**1国内 0国外 */
    public interstatus: number;
}
export class IPDataResulta {
    public ret: string
    public data: string[]
    public ip: string
}
export class GameVersionPod {
    public id: number;
    public version: number;
}


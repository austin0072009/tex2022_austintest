export class AppConst {
    static serverId: string = "129.204.109.218"; //106.13.222.130
    static IsShowLoading: string = "IsShowLoading"; //菊花转动
    static IsShowTip: string = "IsShowTip"; //显示几秒自动消失的提示框
    static IsShowTipWindow: string = "IsShowTipWindow"; //显示二级弹窗提示
    static VERSION = "1.0.0"; //游戏版本号 
    static httpHost: string = "http://test.slotsmaster.didabu.com";
    static accessToken: string = "";
    static gameId: number = 0;
    static roomId: string = "";
    static userId: string = "";
    static cidx: number = 0;
    static hallData: any = [];
    static gameList: Array<any> = [];
    static Msg: any = "";
    static platform: string = ""; //当前设备类型
    static orderId: string = "";
    static curBet: number = 100;
    static dealId: string = "";
    static collectCount: number = 0;
    static timeCoinRemainTimes: number = 0;
    static resUrl = ""; //资源服务器地址
    static isEditor: boolean = true;
    /*是否经过大厅登录 */
    static _lobbt: boolean = true;
    static userMsg: string = "";
    //分包加载的包名和场景名
    static packageName: string = "";
    static sceneName: string = "";
    //弹窗描述
    static Tip: any = {
        connectError: "connect Error",
        boosting: "Experience is accelerating",
        booster: "You Would earn EXP double times within 5 minutes.",
        update: "New version has been detected. For a better game experience,please upgrade to the latest version.",
        errorCountDown: "There is an error about countdown. The time is being updated for you.",
        countDown: "Remove countdown,collect free coins immediately!",
        noAdCount: "There is no ADs now,and these will arrive later in",
        adShow: "Please take your gift!",
        adLoadFail: "Failed to obtain ADs. Please try again later.",
        coinNotEnough: "coin Not Enough",
        headChangeNameTipOne: "The name is limited to 4-16 characters. Please enter again.",
        headChangeNameTipTwo: "No characters other than upper and lower case or numbers.",
        headChangeNameTipThree: "There are sensitive words in your name.",
    };
    static mPlayerModel: any;
    static Unitid: any;
    static Account: any;
    static enterRoomData: any;
    static enterTableData: any;
    static gameTableData: any;
    static levelid: any;
    static tableid: any;
    static currentGameId: any;
    static currentlevelid: any;
    /**語言類型
     * 1繁體中文  2簡體中文  3英語  4日語
     */
    static languageType: number;
}

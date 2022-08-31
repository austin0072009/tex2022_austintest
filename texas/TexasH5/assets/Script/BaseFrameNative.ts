export class BaseFrameNative {
    static isNeedUpdate: boolean = false; // 这个值很重要，发包和热更新的时候一定改为true
    static VERSION = "1.0.0"; //游戏版本号
    //serverList
    static defaultServerList: any = {};
    static serverList: any = {};
    static isOpenUpdate: boolean = true;
    static serverlistItem: any = null;
    static serverlistID: string = "201";
    // 是否重新打开APP
    static isOpenApp: boolean = false;
    // 是否在大厅中
    static isInHall: boolean = false;
    // 是否和服务器连接中
    static isConnect: boolean = false;
    // broadnotice 跑马灯消息
    static broadnotice: any[] = [];
    // 当前运行的游戏场景类
    static nowGameView: any = null;
}
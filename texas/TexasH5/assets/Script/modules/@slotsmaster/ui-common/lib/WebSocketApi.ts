
import WebSocket from "../../../@mogafa/utils/lib/WebSocket";

//* 建立websocket连接 验证access_token
export const Socket_QueryEnter = "gate.gateHandler.queryEntry";

//* 进入房间
export const Socket_EnterRoom = "gamePlatform.roomHandler.enterRoom";

//* 退出房间
export const Socket_ExitRoom = "gamePlatform.roomHandler.leaveRoom";

//* 获取奖池
export const Socket_GetJackpot = "gambling.gamblingHandler.getJackpot";

//* 聚宝盆获取新棋盘的手牌
export const Socket_GetJuBaoPenHand = "jubaopen.jubaopenHandler.getHand";

//* 聚宝盆Jackpot翻金币
export const Socket_GetJuBaoPenFlipCoin = "jubaopen.jubaopenHandler.flipCoin";

//* 获取奖池
export const Socket_GetGameJackpot = "Handler.getJackpot";

export default class WebSocketApi {
    private static _socket: WebSocket;
    public static get socket(): WebSocket {
        if (!this._socket) {
            this._socket = new WebSocket();
        }
        return this._socket;
    }

    private static _gateServer: string = "";
    public static set gateServer(value: string) {
        this._gateServer = value;
    }
    public static get gateServer(): string {
        return this._gateServer;
    }
    private static _gatePort: number = 10002;
    public static get gatePort(): number {
        return this._gatePort;
    }
    public static set gatePort(value: number) {
        this._gatePort = value;
    }
    public static setHeartBeatCallback(func: Function) {
        this.socket.setHeartBeatCallback(func);
    }
    public static setRefreshCallback(func: Function) {
        this.socket.setRefreshCallback(func);
    }
}

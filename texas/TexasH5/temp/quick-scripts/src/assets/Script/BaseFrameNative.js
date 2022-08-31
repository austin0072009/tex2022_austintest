"use strict";
cc._RF.push(module, 'da9009fvvZB0b7MePGuWC93', 'BaseFrameNative');
// Script/BaseFrameNative.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFrameNative = void 0;
var BaseFrameNative = /** @class */ (function () {
    function BaseFrameNative() {
    }
    BaseFrameNative.isNeedUpdate = false; // 这个值很重要，发包和热更新的时候一定改为true
    BaseFrameNative.VERSION = "1.0.0"; //游戏版本号
    //serverList
    BaseFrameNative.defaultServerList = {};
    BaseFrameNative.serverList = {};
    BaseFrameNative.isOpenUpdate = true;
    BaseFrameNative.serverlistItem = null;
    BaseFrameNative.serverlistID = "201";
    // 是否重新打开APP
    BaseFrameNative.isOpenApp = false;
    // 是否在大厅中
    BaseFrameNative.isInHall = false;
    // 是否和服务器连接中
    BaseFrameNative.isConnect = false;
    // broadnotice 跑马灯消息
    BaseFrameNative.broadnotice = [];
    // 当前运行的游戏场景类
    BaseFrameNative.nowGameView = null;
    return BaseFrameNative;
}());
exports.BaseFrameNative = BaseFrameNative;

cc._RF.pop();
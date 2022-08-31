"use strict";
cc._RF.push(module, '8754aSczL9CRbeY18sO71gi', 'TimeInfoMgr');
// Script/BaseFrame/TimeInfoMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Res = void 0;
var TimeInfoServerEx = /** @class */ (function () {
    function TimeInfoServerEx() {
        this.tick = 0; // CD开始计时          
    }
    return TimeInfoServerEx;
}());
/// <summary>
/// 时间事件结构
/// </summary>
var TimeFuncStruct = /** @class */ (function () {
    function TimeFuncStruct() {
    }
    return TimeFuncStruct;
}());
var Res = /** @class */ (function () {
    function Res() {
        /// <summary>
        /// 事件列表
        /// </summary>   
        this.listTimer = [];
        this.fTimeServer = 0;
        this.ID = 5000;
    }
    Object.defineProperty(Res, "Singleton", {
        //单例
        get: function () {
            if (!this._instance) {
                this._instance = new Res();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Res.prototype, "dateServer", {
        get: function () {
            if (this._dateServer == null)
                this._dateServer = new TimeInfoServerEx(); //初始化
            return this._dateServer;
        },
        set: function (value) {
            this._dateServer = value;
        },
        enumerable: false,
        configurable: true
    });
    /// <summary>
    /// 心跳返回同步 服务器时间
    /// </summary>
    /// <param name="unixTime">服务器时间</param>
    Res.prototype.OnServerTime = function (unixTime) {
        if (unixTime > 0) {
            this.dateServer.tick = unixTime; //同步服务器时间 
        }
        this.fTimeServer = unixTime;
    };
    /// <summary>
    /// 取消 指定的时间事件 
    /// </summary>
    /// <param name="id"></param>
    Res.prototype.StopTimer = function (id) {
        var timer = this.listTimer.splice(this.listTimer.findIndex(function (item) { return item.id == id; }), 1);
        if (timer == null) {
            return;
        }
        clearTimeout(timer[0].systemID);
    };
    Res.prototype.StopTimerScene = function (scenename) {
        for (var i = this.listTimer.length - 1; i >= 0; i--) {
            var timer = this.listTimer[i];
            if (timer == null) {
                continue;
            }
            if (timer.scene_name == scenename) {
                clearTimeout(timer[0].systemID);
                this.listTimer.splice(i, 1);
            }
        }
    };
    /// <summary>
    /// 计时器
    /// </summary>
    /// <param name="tick">时间：毫秒计单位</param>
    /// <param name="action">时间回调函数</param>
    /// <param name="count">出发次数，-1无限制</param>
    /// <returns></returns>
    Res.prototype.AddTimer = function (tick, action, count, scenename) {
        if (count === void 0) { count = 1; }
        if (scenename === void 0) { scenename = ""; }
        this.ID++;
        var timer = new TimeFuncStruct();
        timer.id = this.ID;
        timer.count = count;
        timer.fStart = 0;
        timer.scene_name = scenename;
        var id = this.AddInterval(this.ID, tick, action, count);
        timer.systemID = id;
        this.listTimer.push(timer);
        return this.ID;
    };
    Res.prototype.AddInterval = function (ID, tick, action, count) {
        var _this = this;
        var that = this;
        var sysID = setTimeout(function () {
            action();
            var index = _this.listTimer.findIndex(function (item) { item.id == ID; });
            if (count == -1) {
            }
            else if (count == 0) {
                _this.listTimer.splice(_this.listTimer.findIndex(function (item) { return item.id == ID; }), 1);
                return;
            }
            else {
                count = count - 1;
                _this.listTimer[index].count = count;
            }
            var sysID = that.AddInterval(ID, tick, action, count);
            _this.listTimer[index].systemID = sysID;
        }, tick);
        return sysID;
    };
    return Res;
}());
exports.Res = Res;

cc._RF.pop();
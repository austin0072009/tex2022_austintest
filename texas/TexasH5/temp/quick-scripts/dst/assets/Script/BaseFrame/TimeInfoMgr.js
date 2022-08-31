
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/TimeInfoMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXFRpbWVJbmZvTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7UUFFVyxTQUFJLEdBQVUsQ0FBQyxDQUFDLENBQUEsbUJBQW1CO0lBRTlDLENBQUM7SUFBRCx1QkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBRUQsYUFBYTtBQUNiLFVBQVU7QUFDVixjQUFjO0FBQ2Q7SUFBQTtJQXNCQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBRUQ7SUFnQkk7UUFMQSxhQUFhO1FBQ2IsUUFBUTtRQUNSLGlCQUFpQjtRQUNULGNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBSXBDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFHRCxzQkFBVyxnQkFBUztRQURwQixJQUFJO2FBQ0o7WUFFRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO2FBQzVCO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsMkJBQVU7YUFBckI7WUFFSSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBLEtBQUs7WUFDN0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFzQixLQUFzQjtZQUV4QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FMQTtJQU9ELGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHdDQUF3QztJQUNoQywwQkFBWSxHQUFwQixVQUFz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Q0FBQyxDQUFBO1lBQ3JFLElBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUNkO2FBRUM7aUJBQ0ksSUFBRyxLQUFLLElBQUksQ0FBQyxFQUNsQjtnQkFDSSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFiLENBQWEsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUN4RSxPQUFPO2FBQ1Y7aUJBRUQ7Z0JBQ0ksS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUE7Z0JBQ2pCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUN2QztZQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUE7WUFDbEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzNDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNQLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0F0SUEsQUFzSUMsSUFBQTtBQXRJWSxrQkFBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRpbWVJbmZvU2VydmVyRXhcbntcbiAgICBwdWJsaWMgdGljazpudW1iZXIgPSAwOy8vIENE5byA5aeL6K6h5pe2ICAgICAgICAgIFxuXG59XG5cbi8vLyA8c3VtbWFyeT5cbi8vLyDml7bpl7Tkuovku7bnu5PmnoRcbi8vLyA8L3N1bW1hcnk+XG5jbGFzcyBUaW1lRnVuY1N0cnVjdFxue1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g55So5LqO5pe26Ze05LqL5Lu25ZSv5LiASUQg5Lya6Ieq5Yqo5aKe5YqgIOS4jemcgOimgeaJi+WKqOi1i+WAvFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljICBpZDphbnk7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDml7bpl7Tkuovku7bop6blj5HnmoTlvIDlp4vml7bpl7Tngrkg5pivVW5pdHnkuK3nmoTluKfml7bpl7RcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyAgZlN0YXJ0Om51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaXtumXtOS6i+S7tuaJp+ihjOeahOasoeaVsFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljICBjb3VudDpudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDpmLLmraLkuI3lkIzlnLrmma/lkI7vvIzlu7bml7blh73mlbDnmoTlvILluLjlpITnkIZcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyAgc2NlbmVfbmFtZTpzdHJpbmc7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDljZXkuKrml7bpl7Tns7vnu5/ov5Tlm57llK/kuIBJRFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIHN5c3RlbUlEOmFueTtcbn1cblxuZXhwb3J0IGNsYXNzIFJlc1xue1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBSZXM7IC8v57G75Z6L5Li66L+Z5Liq57G7XG4gICAgcHJpdmF0ZSAgSUQ6bnVtYmVyO1xuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDlkIzmraXmnI3liqHlmajml7bpl7RcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHByaXZhdGUgIGZUaW1lU2VydmVyOm51bWJlcjtcbiAgICBwcml2YXRlIF9kYXRlU2VydmVyOlRpbWVJbmZvU2VydmVyRXg7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDkuovku7bliJfooahcbiAgICAvLy8gPC9zdW1tYXJ5PiAgIFxuICAgIHByaXZhdGUgbGlzdFRpbWVyOlRpbWVGdW5jU3RydWN0W10gPSBbXTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5mVGltZVNlcnZlciA9IDA7XG4gICAgICAgIHRoaXMuSUQgPSA1MDAwOyBcbiAgICB9XG5cbiAgICAvL+WNleS+i1xuICAgIHN0YXRpYyBnZXQgU2luZ2xldG9uKCkgXG4gICAge1xuICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBSZXMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG4gICAgXG5cbiAgICBwdWJsaWMgZ2V0IGRhdGVTZXJ2ZXIoKTpUaW1lSW5mb1NlcnZlckV4XG4gICAge1xuICAgICAgICBpZiAodGhpcy5fZGF0ZVNlcnZlciA9PSBudWxsKSB0aGlzLl9kYXRlU2VydmVyID0gbmV3IFRpbWVJbmZvU2VydmVyRXgoKTsvL+WIneWni+WMllxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0ZVNlcnZlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRhdGVTZXJ2ZXIodmFsdWU6VGltZUluZm9TZXJ2ZXJFeClcbiAgICB7XG4gICAgICAgIHRoaXMuX2RhdGVTZXJ2ZXIgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOW/g+i3s+i/lOWbnuWQjOatpSDmnI3liqHlmajml7bpl7RcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInVuaXhUaW1lXCI+5pyN5Yqh5Zmo5pe26Ze0PC9wYXJhbT5cbiAgICBwdWJsaWMgIE9uU2VydmVyVGltZSggdW5peFRpbWU6bnVtYmVyKVxuICAgIHsgXG4gICAgICAgIGlmICh1bml4VGltZSA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZVNlcnZlci50aWNrID0gdW5peFRpbWU7IC8v5ZCM5q2l5pyN5Yqh5Zmo5pe26Ze0IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZlRpbWVTZXJ2ZXIgPSB1bml4VGltZTtcbiAgICB9XG5cbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWPlua2iCDmjIflrprnmoTml7bpl7Tkuovku7YgXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICAvLy8gPHBhcmFtIG5hbWU9XCJpZFwiPjwvcGFyYW0+XG4gICAgcHVibGljIFN0b3BUaW1lciggaWQ6YW55KVxuICAgIHtcbiAgICAgICAgbGV0IHRpbWVyID0gdGhpcy5saXN0VGltZXIuc3BsaWNlKHRoaXMubGlzdFRpbWVyLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT0gaWQpLDEpXG4gICAgICAgIGlmKHRpbWVyID09IG51bGwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJbMF0uc3lzdGVtSUQpXG4gICAgfVxuXG4gICAgcHVibGljIFN0b3BUaW1lclNjZW5lKCBzY2VuZW5hbWU6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubGlzdFRpbWVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdGltZXI6VGltZUZ1bmNTdHJ1Y3QgPSB0aGlzLmxpc3RUaW1lcltpXTtcbiAgICAgICAgICAgIGlmKHRpbWVyID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGltZXIuc2NlbmVfbmFtZSA9PSBzY2VuZW5hbWUpIFxuICAgICAgICAgICAgeyAgXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyWzBdLnN5c3RlbUlEKVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFRpbWVyLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDorqHml7blmahcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cInRpY2tcIj7ml7bpl7TvvJrmr6vnp5LorqHljZXkvY08L3BhcmFtPlxuICAgIC8vLyA8cGFyYW0gbmFtZT1cImFjdGlvblwiPuaXtumXtOWbnuiwg+WHveaVsDwvcGFyYW0+XG4gICAgLy8vIDxwYXJhbSBuYW1lPVwiY291bnRcIj7lh7rlj5HmrKHmlbDvvIwtMeaXoOmZkOWItjwvcGFyYW0+XG4gICAgLy8vIDxyZXR1cm5zPjwvcmV0dXJucz5cbiAgICBwdWJsaWMgQWRkVGltZXIoIHRpY2s6bnVtYmVyLCAgYWN0aW9uOkZ1bmN0aW9uLCBjb3VudDpudW1iZXIgPTEsICBzY2VuZW5hbWU6c3RyaW5nID0gXCJcIik6bnVtYmVyXG4gICAgeyAgIFxuICAgICAgICB0aGlzLklEKys7XG4gICAgICAgIGxldCB0aW1lcjpUaW1lRnVuY1N0cnVjdCA9IG5ldyBUaW1lRnVuY1N0cnVjdCgpO1xuICAgICAgICB0aW1lci5pZCA9IHRoaXMuSUQ7XG4gICAgICAgIHRpbWVyLmNvdW50ID0gY291bnQ7XG4gICAgICAgIHRpbWVyLmZTdGFydCA9IDA7XG4gICAgICAgIHRpbWVyLnNjZW5lX25hbWUgPSBzY2VuZW5hbWU7XG4gICAgICAgIGxldCBpZCA9IHRoaXMuQWRkSW50ZXJ2YWwodGhpcy5JRCx0aWNrLGFjdGlvbixjb3VudCk7XG4gICAgICAgIHRpbWVyLnN5c3RlbUlEID0gaWQ7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxpc3RUaW1lci5wdXNoKHRpbWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuSUQ7XG4gICAgfVxuXG4gICAgcHVibGljIEFkZEludGVydmFsKElEOm51bWJlcix0aWNrOm51bWJlciwgIGFjdGlvbjpGdW5jdGlvbixjb3VudDpudW1iZXIpOmFueVxuICAgIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgc3lzSUQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBhY3Rpb24oKTtcbiAgICAgICAgICAgIGxldCBpbmRleDpudW1iZXIgPSAgdGhpcy5saXN0VGltZXIuZmluZEluZGV4KChpdGVtKT0+e2l0ZW0uaWQgPT0gSUR9KVxuICAgICAgICAgICAgaWYoY291bnQgPT0gLTEpXG4gICAgICAgICAgICB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoY291bnQgPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RUaW1lci5zcGxpY2UodGhpcy5saXN0VGltZXIuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PSBJRCksMSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291bnQgPSBjb3VudCAtIDFcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RUaW1lcltpbmRleF0uY291bnQgPSBjb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzeXNJRCA9IHRoYXQuQWRkSW50ZXJ2YWwoSUQsdGljayxhY3Rpb24sY291bnQpXG4gICAgICAgICAgICB0aGlzLmxpc3RUaW1lcltpbmRleF0uc3lzdGVtSUQgPSBzeXNJRDtcbiAgICAgICAgfSx0aWNrKVxuICAgICAgICByZXR1cm4gc3lzSUQ7XG4gICAgfVxufSJdfQ==
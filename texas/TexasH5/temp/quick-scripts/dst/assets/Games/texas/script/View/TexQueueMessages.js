
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TexQueueMessages.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7fde1n07JhD4bjz8scH29wD', 'TexQueueMessages');
// Games/texas/script/View/TexQueueMessages.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TexQueueMessages = void 0;
var TexQueueMessages = /** @class */ (function () {
    function TexQueueMessages() {
        //处理并发消息,消息名，数据
        this.listMessages = [];
    }
    Object.defineProperty(TexQueueMessages, "instance", {
        get: function () {
            if (this._texms == null) {
                this._texms = new TexQueueMessages();
            }
            return this._texms;
        },
        enumerable: false,
        configurable: true
    });
    TexQueueMessages.prototype.AddTexMes = function (funName, _data, fun) {
        console.error("添加消息队列：" + funName);
        var ms = new TexQueueMsg();
        ms.name = funName;
        ms.status = false;
        ms.data = _data;
        ms.fun = fun;
        this.listMessages.push(ms);
    };
    //是否可以执行下一个消息
    TexQueueMessages.prototype.isCanExeNext = function () {
        if (this.listMessages.length != 0 && this.listMessages[0].status == false) {
            return true;
        }
        return false;
    };
    TexQueueMessages.prototype.ExeNextMes = function () {
        if (this.listMessages.length > 0) {
            console.error("====执行消息：" + this.listMessages[0].name + "--->" + this.listMessages[0].data);
            this.listMessages[0].status = true;
            this.listMessages[0].fun(this.listMessages[0].data);
            this.listMessages.shift();
        }
    };
    TexQueueMessages.prototype.RemoveFirstMes = function () {
        if (this.listMessages.length > 0 && this.listMessages[0].status == true)
            this.listMessages.shift();
    };
    TexQueueMessages.prototype.removeAllMes = function () {
        this.listMessages = [];
    };
    return TexQueueMessages;
}());
exports.TexQueueMessages = TexQueueMessages;
//并发消息
var TexQueueMsg = /** @class */ (function () {
    function TexQueueMsg() {
    }
    return TexQueueMsg;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFRleFF1ZXVlTWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtRQVNJLGVBQWU7UUFDUixpQkFBWSxHQUFrQixFQUFFLENBQUM7SUFvQzVDLENBQUM7SUEzQ0csc0JBQVcsNEJBQVE7YUFBbkI7WUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUlNLG9DQUFTLEdBQWhCLFVBQWlCLE9BQWUsRUFBRSxLQUFVLEVBQUUsR0FBYTtRQUN2RCxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLEVBQUUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLEVBQUUsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGFBQWE7SUFDTix1Q0FBWSxHQUFuQjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRTtZQUN2RSxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLHFDQUFVLEdBQWpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDM0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTSx5Q0FBYyxHQUFyQjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZHLENBQUM7SUFFTSx1Q0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTCx1QkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksNENBQWdCO0FBaUQ3QixNQUFNO0FBQ047SUFBQTtJQVNBLENBQUM7SUFBRCxrQkFBQztBQUFELENBVEEsQUFTQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgVGV4UXVldWVNZXNzYWdlcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX3RleG1zOiBUZXhRdWV1ZU1lc3NhZ2VzO1xuXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBUZXhRdWV1ZU1lc3NhZ2VzIHtcbiAgICAgICAgaWYgKHRoaXMuX3RleG1zID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RleG1zID0gbmV3IFRleFF1ZXVlTWVzc2FnZXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4bXM7XG4gICAgfVxuICAgIC8v5aSE55CG5bm25Y+R5raI5oGvLOa2iOaBr+WQje+8jOaVsOaNrlxuICAgIHB1YmxpYyBsaXN0TWVzc2FnZXM6IFRleFF1ZXVlTXNnW10gPSBbXTtcblxuICAgIHB1YmxpYyBBZGRUZXhNZXMoZnVuTmFtZTogc3RyaW5nLCBfZGF0YTogYW55LCBmdW46IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLmt7vliqDmtojmga/pmJ/liJfvvJpcIiArIGZ1bk5hbWUpO1xuICAgICAgICBsZXQgbXMgPSBuZXcgVGV4UXVldWVNc2coKTtcbiAgICAgICAgbXMubmFtZSA9IGZ1bk5hbWU7XG4gICAgICAgIG1zLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgICBtcy5kYXRhID0gX2RhdGE7XG4gICAgICAgIG1zLmZ1biA9IGZ1bjtcbiAgICAgICAgdGhpcy5saXN0TWVzc2FnZXMucHVzaChtcyk7XG4gICAgfVxuXG4gICAgLy/mmK/lkKblj6/ku6XmiafooYzkuIvkuIDkuKrmtojmga9cbiAgICBwdWJsaWMgaXNDYW5FeGVOZXh0KCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5saXN0TWVzc2FnZXMubGVuZ3RoICE9IDAgJiYgdGhpcy5saXN0TWVzc2FnZXNbMF0uc3RhdHVzID09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIEV4ZU5leHRNZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmxpc3RNZXNzYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiPT09PeaJp+ihjOa2iOaBr++8mlwiICsgdGhpcy5saXN0TWVzc2FnZXNbMF0ubmFtZSArIFwiLS0tPlwiICsgdGhpcy5saXN0TWVzc2FnZXNbMF0uZGF0YSlcbiAgICAgICAgICAgIHRoaXMubGlzdE1lc3NhZ2VzWzBdLnN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpc3RNZXNzYWdlc1swXS5mdW4odGhpcy5saXN0TWVzc2FnZXNbMF0uZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RNZXNzYWdlcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIFJlbW92ZUZpcnN0TWVzKCkge1xuICAgICAgICBpZiAodGhpcy5saXN0TWVzc2FnZXMubGVuZ3RoID4gMCAmJiB0aGlzLmxpc3RNZXNzYWdlc1swXS5zdGF0dXMgPT0gdHJ1ZSkgdGhpcy5saXN0TWVzc2FnZXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlQWxsTWVzKCkge1xuICAgICAgICB0aGlzLmxpc3RNZXNzYWdlcyA9IFtdO1xuICAgIH1cbn1cblxuXG4vL+W5tuWPkea2iOaBr1xuY2xhc3MgVGV4UXVldWVNc2cge1xuICAgIC8v5raI5oGv5ZCNXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICAvL+ato+WcqOaJp+ihjFxuICAgIHB1YmxpYyBzdGF0dXM6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgZnVuOiBGdW5jdGlvbjtcblxuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG59Il19
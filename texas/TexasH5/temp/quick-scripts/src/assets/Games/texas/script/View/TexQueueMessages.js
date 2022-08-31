"use strict";
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
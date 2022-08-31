"use strict";
cc._RF.push(module, '32eef4rFABEoaBY+RmyFwBY', 'Message');
// Script/modules/@mogafa/utils/lib/Message.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyByteBuffer_1 = require("./MyByteBuffer");
var Message = /** @class */ (function () {
    function Message() {
        this.msgid = 0;
        this.playerid = 0;
    }
    Message.fromBuffer = function (data) {
        var buffer = MyByteBuffer_1.default.warpBytes(data);
        var message = new Message();
        message.msgid = buffer.readUint8();
        message.msgid += buffer.readUint8() << 8;
        message.data = buffer.readBytes(data.byteLength - 2);
        return message;
    };
    Message.toBuffer = function (msgid, data) {
        var buffer = MyByteBuffer_1.default.warp(2 + data.byteLength);
        buffer.writeUint8(msgid & 0xff);
        buffer.writeUint8((msgid >> 8) & 0xff);
        // buffer.writeInt16(msgid);
        buffer.setBytes(data);
        return buffer.buffer.buffer;
    };
    return Message;
}());
exports.default = Message;

cc._RF.pop();
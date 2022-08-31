
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/utils/lib/Message.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFx1dGlsc1xcbGliXFxNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBRTFDO0lBQUE7UUFDSSxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGFBQVEsR0FBVyxDQUFDLENBQUM7SUFvQnpCLENBQUM7SUFqQlUsa0JBQVUsR0FBakIsVUFBa0IsSUFBaUI7UUFDL0IsSUFBSSxNQUFNLEdBQUcsc0JBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQyxPQUFPLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckQsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVNLGdCQUFRLEdBQWYsVUFBZ0IsS0FBYSxFQUFFLElBQWlCO1FBQzVDLElBQUksTUFBTSxHQUFHLHNCQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN2Qyw0QkFBNEI7UUFDNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNeUJ5dGVCdWZmZXIgZnJvbSBcIi4vTXlCeXRlQnVmZmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2Uge1xuICAgIG1zZ2lkOiBudW1iZXIgPSAwO1xuICAgIHBsYXllcmlkOiBudW1iZXIgPSAwO1xuICAgIGRhdGE6IEFycmF5QnVmZmVyO1xuXG4gICAgc3RhdGljIGZyb21CdWZmZXIoZGF0YTogQXJyYXlCdWZmZXIpOiBNZXNzYWdlIHtcbiAgICAgICAgbGV0IGJ1ZmZlciA9IE15Qnl0ZUJ1ZmZlci53YXJwQnl0ZXMoZGF0YSk7XG4gICAgICAgIGxldCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UoKTtcbiAgICAgICAgbWVzc2FnZS5tc2dpZCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgbWVzc2FnZS5tc2dpZCArPSBidWZmZXIucmVhZFVpbnQ4KCkgPDwgODtcbiAgICAgICAgbWVzc2FnZS5kYXRhID0gYnVmZmVyLnJlYWRCeXRlcyhkYXRhLmJ5dGVMZW5ndGggLSAyKTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuXG4gICAgc3RhdGljIHRvQnVmZmVyKG1zZ2lkOiBudW1iZXIsIGRhdGE6IEFycmF5QnVmZmVyKTogQXJyYXlCdWZmZXIge1xuICAgICAgICBsZXQgYnVmZmVyID0gTXlCeXRlQnVmZmVyLndhcnAoMiArIGRhdGEuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGJ1ZmZlci53cml0ZVVpbnQ4KG1zZ2lkICYgMHhmZik7XG4gICAgICAgIGJ1ZmZlci53cml0ZVVpbnQ4KChtc2dpZCA+PiA4KSAmIDB4ZmYpO1xuICAgICAgICAvLyBidWZmZXIud3JpdGVJbnQxNihtc2dpZCk7XG4gICAgICAgIGJ1ZmZlci5zZXRCeXRlcyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci5idWZmZXIuYnVmZmVyO1xuICAgIH1cbn1cbiJdfQ==
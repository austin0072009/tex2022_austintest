
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/utils/lib/MyByteBuffer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94eb4wk+Z5CCI3MYsKXJAfr', 'MyByteBuffer');
// Script/modules/@mogafa/utils/lib/MyByteBuffer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyByteBuffer = /** @class */ (function () {
    function MyByteBuffer() {
        this.offset = 0;
        this.buffer = null;
    }
    MyByteBuffer.warpBytes = function (data) {
        var buffer = new MyByteBuffer();
        buffer.buffer = new DataView(data);
        return buffer;
    };
    MyByteBuffer.warp = function (capacity) {
        var array = new ArrayBuffer(capacity);
        var buffer = new MyByteBuffer();
        buffer.buffer = new DataView(array);
        return buffer;
    };
    // public readInt64(): bigint {
    //     if (this.offset + 7 < this.buffer.byteLength) {
    //         let value = this.buffer.getBigUint64(this.offset);
    //         this.offset += 8;
    //         return value;
    //     }
    //     return null;
    // }
    MyByteBuffer.prototype.readUint32 = function () {
        if (this.offset + 3 < this.buffer.byteLength) {
            var value = this.buffer.getUint32(this.offset);
            this.offset += 4;
            return value;
        }
        return null;
    };
    MyByteBuffer.prototype.readInt32 = function () {
        if (this.offset + 3 < this.buffer.byteLength) {
            var value = this.buffer.getInt32(this.offset);
            this.offset += 4;
            return value;
        }
        return null;
    };
    MyByteBuffer.prototype.readUint16 = function () {
        if (this.offset + 1 < this.buffer.byteLength) {
            var value = this.buffer.getUint16(this.offset);
            this.offset += 2;
            return value;
        }
        return null;
    };
    MyByteBuffer.prototype.readInt16 = function () {
        if (this.offset + 1 < this.buffer.byteLength) {
            var value = this.buffer.getInt16(this.offset);
            this.offset += 2;
            return value;
        }
        return null;
    };
    MyByteBuffer.prototype.readUint8 = function () {
        if (this.offset < this.buffer.byteLength) {
            var value = this.buffer.getUint8(this.offset);
            this.offset++;
            return value;
        }
        return null;
    };
    MyByteBuffer.prototype.readInt8 = function () {
        if (this.offset < this.buffer.byteLength) {
            var value = this.buffer.getInt8(this.offset);
            this.offset++;
            return value;
        }
        return null;
    };
    MyByteBuffer.prototype.readFloat = function () {
        if (this.offset + 3 < this.buffer.byteLength) {
            var value = this.buffer.getFloat32(this.offset);
            this.offset += 4;
            return value;
        }
        return null;
    };
    MyByteBuffer.prototype.readDouble = function () {
        if (this.offset + 7 < this.buffer.byteLength) {
            var value = this.buffer.getFloat64(this.offset);
            this.offset += 8;
            return value;
        }
        return null;
    };
    MyByteBuffer.prototype.readBytes = function (len) {
        if (this.offset + len - 1 < this.buffer.byteLength) {
            var array = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                array[i] = this.buffer.getUint8(this.offset);
                // (, i, i + 1);
                this.offset++;
            }
            return array;
        }
        return null;
    };
    MyByteBuffer.prototype.writeInt64 = function (num) {
        if (this.offset + 7 < this.buffer.byteLength) {
            this.buffer.setBigInt64(this.offset, num);
            this.offset += 8;
        }
    };
    MyByteBuffer.prototype.writeUint32 = function (num) {
        if (this.offset + 3 < this.buffer.byteLength) {
            this.buffer.setUint32(this.offset, num);
            this.offset += 4;
        }
    };
    MyByteBuffer.prototype.writeInt32 = function (num) {
        if (this.offset + 3 < this.buffer.byteLength) {
            this.buffer.setInt32(this.offset, num);
            this.offset += 4;
        }
    };
    MyByteBuffer.prototype.writeUint16 = function (num) {
        if (this.offset + 1 < this.buffer.byteLength) {
            this.buffer.setUint16(this.offset, num);
            this.offset += 2;
        }
    };
    MyByteBuffer.prototype.writeInt16 = function (num) {
        if (this.offset + 1 < this.buffer.byteLength) {
            this.buffer.setInt16(this.offset, num);
            this.offset += 2;
        }
    };
    MyByteBuffer.prototype.writeUint8 = function (num) {
        if (this.offset < this.buffer.byteLength) {
            this.buffer.setUint8(this.offset, num);
            this.offset++;
        }
    };
    MyByteBuffer.prototype.writeInt8 = function (num) {
        if (this.offset < this.buffer.byteLength) {
            this.buffer.setInt8(this.offset, num);
            this.offset++;
        }
    };
    MyByteBuffer.prototype.writeFloat32 = function (num) {
        if (this.offset + 3 < this.buffer.byteLength) {
            this.buffer.setFloat32(this.offset, num);
            this.offset += 4;
        }
    };
    MyByteBuffer.prototype.writeFloat64 = function (num) {
        if (this.offset + 7 < this.buffer.byteLength) {
            this.buffer.setFloat64(this.offset, num);
            this.offset += 8;
        }
    };
    MyByteBuffer.prototype.writeBytes = function (data) {
        if (this.offset + data.length - 1 < this.buffer.byteLength) {
            for (var i = 0; i < data.length; i++) {
                this.buffer.setUint8(this.offset, data[i]);
                this.offset++;
            }
        }
    };
    MyByteBuffer.prototype.setBytes = function (data) {
        if (this.offset + data.byteLength - 1 < this.buffer.byteLength) {
            for (var i = 0; i < data.byteLength; i++) {
                this.buffer.setUint8(this.offset, data[i]);
                this.offset++;
            }
        }
    };
    return MyByteBuffer;
}());
exports.default = MyByteBuffer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFx1dGlsc1xcbGliXFxNeUJ5dGVCdWZmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO1FBQ0ksV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFNLEdBQWEsSUFBSSxDQUFDO0lBc0w1QixDQUFDO0lBckxpQixzQkFBUyxHQUF2QixVQUF3QixJQUFpQjtRQUNyQyxJQUFJLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVhLGlCQUFJLEdBQWxCLFVBQW1CLFFBQWdCO1FBQy9CLElBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLElBQUksTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsK0JBQStCO0lBQy9CLHNEQUFzRDtJQUN0RCw2REFBNkQ7SUFDN0QsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixRQUFRO0lBQ1IsbUJBQW1CO0lBQ25CLElBQUk7SUFFRyxpQ0FBVSxHQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0Qs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RSxDQUFDO2FBQ2pCO1NBQ0o7SUFDTCxDQUFDO0lBQ00sK0JBQVEsR0FBZixVQUFnQixJQUFpQjtRQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDNUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNqQjtTQUNKO0lBQ0wsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0F4TEEsQUF3TEMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE15Qnl0ZUJ1ZmZlciB7XG4gICAgb2Zmc2V0OiBudW1iZXIgPSAwO1xuICAgIGJ1ZmZlcjogRGF0YVZpZXcgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgd2FycEJ5dGVzKGRhdGE6IEFycmF5QnVmZmVyKTogTXlCeXRlQnVmZmVyIHtcbiAgICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBNeUJ5dGVCdWZmZXIoKTtcbiAgICAgICAgYnVmZmVyLmJ1ZmZlciA9IG5ldyBEYXRhVmlldyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHdhcnAoY2FwYWNpdHk6IG51bWJlcik6IE15Qnl0ZUJ1ZmZlciB7XG4gICAgICAgIGxldCBhcnJheSA9IG5ldyBBcnJheUJ1ZmZlcihjYXBhY2l0eSk7XG4gICAgICAgIGxldCBidWZmZXIgPSBuZXcgTXlCeXRlQnVmZmVyKCk7XG4gICAgICAgIGJ1ZmZlci5idWZmZXIgPSBuZXcgRGF0YVZpZXcoYXJyYXkpO1xuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyByZWFkSW50NjQoKTogYmlnaW50IHtcbiAgICAvLyAgICAgaWYgKHRoaXMub2Zmc2V0ICsgNyA8IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAvLyAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuYnVmZmVyLmdldEJpZ1VpbnQ2NCh0aGlzLm9mZnNldCk7XG4gICAgLy8gICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgIC8vICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBudWxsO1xuICAgIC8vIH1cblxuICAgIHB1YmxpYyByZWFkVWludDMyKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCArIDMgPCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmJ1ZmZlci5nZXRVaW50MzIodGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVhZEludDMyKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCArIDMgPCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmJ1ZmZlci5nZXRJbnQzMih0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA0O1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWFkVWludDE2KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCArIDEgPCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmJ1ZmZlci5nZXRVaW50MTYodGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gMjtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHVibGljIHJlYWRJbnQxNigpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5vZmZzZXQgKyAxIDwgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5idWZmZXIuZ2V0SW50MTYodGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gMjtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVhZFVpbnQ4KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCA8IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuYnVmZmVyLmdldFVpbnQ4KHRoaXMub2Zmc2V0KTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0Kys7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHJlYWRJbnQ4KCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCA8IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuYnVmZmVyLmdldEludDgodGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cblxuICAgIHB1YmxpYyByZWFkRmxvYXQoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0ICsgMyA8IHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuYnVmZmVyLmdldEZsb2F0MzIodGhpcy5vZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVhZERvdWJsZSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5vZmZzZXQgKyA3IDwgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5idWZmZXIuZ2V0RmxvYXQ2NCh0aGlzLm9mZnNldCk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuXG4gICAgcHVibGljIHJlYWRCeXRlcyhsZW46IG51bWJlcik6IFVpbnQ4QXJyYXkge1xuICAgICAgICBpZiAodGhpcy5vZmZzZXQgKyBsZW4gLSAxIDwgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJheVtpXSA9IHRoaXMuYnVmZmVyLmdldFVpbnQ4KHRoaXMub2Zmc2V0KTtcbiAgICAgICAgICAgICAgICAvLyAoLCBpLCBpICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVJbnQ2NChudW06IGJpZ2ludCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vZmZzZXQgKyA3IDwgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIuc2V0QmlnSW50NjQodGhpcy5vZmZzZXQsIG51bSk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlVWludDMyKG51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCArIDMgPCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci5zZXRVaW50MzIodGhpcy5vZmZzZXQsIG51bSk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSA0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyB3cml0ZUludDMyKG51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCArIDMgPCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci5zZXRJbnQzMih0aGlzLm9mZnNldCwgbnVtKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHdyaXRlVWludDE2KG51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCArIDEgPCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci5zZXRVaW50MTYodGhpcy5vZmZzZXQsIG51bSk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSAyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyB3cml0ZUludDE2KG51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCArIDEgPCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci5zZXRJbnQxNih0aGlzLm9mZnNldCwgbnVtKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHdyaXRlVWludDgobnVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0IDwgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIuc2V0VWludDgodGhpcy5vZmZzZXQsIG51bSk7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyB3cml0ZUludDgobnVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0IDwgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIuc2V0SW50OCh0aGlzLm9mZnNldCwgbnVtKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0Kys7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVGbG9hdDMyKG51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCArIDMgPCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci5zZXRGbG9hdDMyKHRoaXMub2Zmc2V0LCBudW0pO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gNDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgd3JpdGVGbG9hdDY0KG51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCArIDcgPCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlci5zZXRGbG9hdDY0KHRoaXMub2Zmc2V0LCBudW0pO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXQgKz0gODtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB3cml0ZUJ5dGVzKGRhdGE6IFVpbnQ4QXJyYXkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0ICsgZGF0YS5sZW5ndGggLSAxIDwgdGhpcy5idWZmZXIuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuc2V0VWludDgodGhpcy5vZmZzZXQsIGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNldEJ5dGVzKGRhdGE6IEFycmF5QnVmZmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9mZnNldCArIGRhdGEuYnl0ZUxlbmd0aCAtIDEgPCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXIuc2V0VWludDgodGhpcy5vZmZzZXQsIGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgIHRoaXMub2Zmc2V0Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
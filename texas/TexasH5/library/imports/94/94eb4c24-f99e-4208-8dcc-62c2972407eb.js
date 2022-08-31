"use strict";
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
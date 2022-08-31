export default class MyByteBuffer {
    offset: number = 0;
    buffer: DataView = null;
    public static warpBytes(data: ArrayBuffer): MyByteBuffer {
        let buffer = new MyByteBuffer();
        buffer.buffer = new DataView(data);
        return buffer;
    }

    public static warp(capacity: number): MyByteBuffer {
        let array = new ArrayBuffer(capacity);
        let buffer = new MyByteBuffer();
        buffer.buffer = new DataView(array);
        return buffer;
    }

    // public readInt64(): bigint {
    //     if (this.offset + 7 < this.buffer.byteLength) {
    //         let value = this.buffer.getBigUint64(this.offset);
    //         this.offset += 8;
    //         return value;
    //     }
    //     return null;
    // }

    public readUint32(): number {
        if (this.offset + 3 < this.buffer.byteLength) {
            let value = this.buffer.getUint32(this.offset);
            this.offset += 4;
            return value;
        }
        return null;
    }

    public readInt32(): number {
        if (this.offset + 3 < this.buffer.byteLength) {
            let value = this.buffer.getInt32(this.offset);
            this.offset += 4;
            return value;
        }
        return null;
    }

    public readUint16(): number {
        if (this.offset + 1 < this.buffer.byteLength) {
            let value = this.buffer.getUint16(this.offset);
            this.offset += 2;
            return value;
        }
        return null;
    }
    public readInt16(): number {
        if (this.offset + 1 < this.buffer.byteLength) {
            let value = this.buffer.getInt16(this.offset);
            this.offset += 2;
            return value;
        }
        return null;
    }

    public readUint8(): number {
        if (this.offset < this.buffer.byteLength) {
            let value = this.buffer.getUint8(this.offset);
            this.offset++;
            return value;
        }
        return null;
    }

    public readInt8(): number {
        if (this.offset < this.buffer.byteLength) {
            let value = this.buffer.getInt8(this.offset);
            this.offset++;
            return value;
        }
        return null;
    }


    public readFloat(): number {
        if (this.offset + 3 < this.buffer.byteLength) {
            let value = this.buffer.getFloat32(this.offset);
            this.offset += 4;
            return value;
        }
        return null;
    }

    public readDouble(): number {
        if (this.offset + 7 < this.buffer.byteLength) {
            let value = this.buffer.getFloat64(this.offset);
            this.offset += 8;
            return value;
        }
        return null;
    }


    public readBytes(len: number): Uint8Array {
        if (this.offset + len - 1 < this.buffer.byteLength) {
            let array = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                array[i] = this.buffer.getUint8(this.offset);
                // (, i, i + 1);
                this.offset++;
            }
            return array;
        }
        return null;
    }

    public writeInt64(num: bigint): void {
        if (this.offset + 7 < this.buffer.byteLength) {
            this.buffer.setBigInt64(this.offset, num);
            this.offset += 8;
        }
    }

    public writeUint32(num: number): void {
        if (this.offset + 3 < this.buffer.byteLength) {
            this.buffer.setUint32(this.offset, num);
            this.offset += 4;
        }
    }
    public writeInt32(num: number): void {
        if (this.offset + 3 < this.buffer.byteLength) {
            this.buffer.setInt32(this.offset, num);
            this.offset += 4;
        }
    }
    public writeUint16(num: number): void {
        if (this.offset + 1 < this.buffer.byteLength) {
            this.buffer.setUint16(this.offset, num);
            this.offset += 2;
        }
    }
    public writeInt16(num: number): void {
        if (this.offset + 1 < this.buffer.byteLength) {
            this.buffer.setInt16(this.offset, num);
            this.offset += 2;
        }
    }
    public writeUint8(num: number): void {
        if (this.offset < this.buffer.byteLength) {
            this.buffer.setUint8(this.offset, num);
            this.offset++;
        }
    }
    public writeInt8(num: number): void {
        if (this.offset < this.buffer.byteLength) {
            this.buffer.setInt8(this.offset, num);
            this.offset++;
        }
    }

    public writeFloat32(num: number): void {
        if (this.offset + 3 < this.buffer.byteLength) {
            this.buffer.setFloat32(this.offset, num);
            this.offset += 4;
        }
    }
    public writeFloat64(num: number): void {
        if (this.offset + 7 < this.buffer.byteLength) {
            this.buffer.setFloat64(this.offset, num);
            this.offset += 8;
        }
    }

    public writeBytes(data: Uint8Array): void {
        if (this.offset + data.length - 1 < this.buffer.byteLength) {
            for (let i = 0; i < data.length; i++) {
                this.buffer.setUint8(this.offset, data[i]);
                this.offset++;
            }
        }
    }
    public setBytes(data: ArrayBuffer): void {
        if (this.offset + data.byteLength - 1 < this.buffer.byteLength) {
            for (let i = 0; i < data.byteLength; i++) {
                this.buffer.setUint8(this.offset, data[i]);
                this.offset++;
            }
        }
    }
}

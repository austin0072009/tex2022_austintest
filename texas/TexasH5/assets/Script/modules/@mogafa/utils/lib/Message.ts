import MyByteBuffer from "./MyByteBuffer";

export default class Message {
    msgid: number = 0;
    playerid: number = 0;
    data: ArrayBuffer;

    static fromBuffer(data: ArrayBuffer): Message {
        let buffer = MyByteBuffer.warpBytes(data);
        let message = new Message();
        message.msgid = buffer.readUint8();
        message.msgid += buffer.readUint8() << 8;
        message.data = buffer.readBytes(data.byteLength - 2);
        return message;
    }

    static toBuffer(msgid: number, data: ArrayBuffer): ArrayBuffer {
        let buffer = MyByteBuffer.warp(2 + data.byteLength);
        buffer.writeUint8(msgid & 0xff);
        buffer.writeUint8((msgid >> 8) & 0xff);
        // buffer.writeInt16(msgid);
        buffer.setBytes(data);
        return buffer.buffer.buffer;
    }
}

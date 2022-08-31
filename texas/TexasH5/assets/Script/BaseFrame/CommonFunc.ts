import { BaseFrameNative } from "../../Script/BaseFrameNative";

export class CommonFunc {
    // 通关id获取本地配置的版本
    static getDefaultVersionJsonByID(idx: number) {
        let list = BaseFrameNative.defaultServerList.gamereslist;
        for (let index = 0; index < list.length; index++) {
            let data = list[index];
            if (data.id == idx) {
                return data;
            }
        }
        console.log(`未找到id${idx},请检查是否传输正确！`);
        return null;
    }

    // 通关id获取最新的游戏配置的版本
    static getLasteNewVersionJsonByID(idx: number) {
        let list = BaseFrameNative.serverList.gamereslist;
        for (let index = 0; index < list.length; index++) {
            let data = list[index];
            if (data.id == idx) {
                return data;
            }
        }
        console.log(`未找到id${idx},请检查是否传输正确！`);
        return null;
    }
}
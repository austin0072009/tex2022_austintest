/*
 * @Author: 田鑫
 * @Date: 2020-07-31 13:37:25
 * @LastEditors: 田鑫
 * @LastEditTime: 2020-08-05 13:49:18
 * @Version: CocosCreator V2.2.2
 * @Description: notice基类
 */

import FguiComponentBase from "./FguiComponentBase";

export default abstract class MessageBase extends FguiComponentBase {
    public abstract showMarquee(): Promise<void>;
    public abstract showTips(message: string, type?: number): void;
}

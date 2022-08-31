/*
 * @Author: 田鑫
 * @Date: 2020-04-02 10:54:41
 * @LastEditors: 田鑫
 * @LastEditTime: 2020-04-20 15:27:03
 * @Version: CocosCreator V2.2.2
 * @Description:
 */

type T = Window & typeof globalThis;
interface Window extends T {
	[key: string]: any;
}

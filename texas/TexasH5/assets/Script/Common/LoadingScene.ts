/*
 * @Author: sin2021
 * @Date: 2020-05-12 09:57:34
 * @LastEditors: sin2021
 * @LastEditTime: 2020-07-30 13:46:12
 * @Version: CocosCreator V2.2.2
 * @Description:
 */


import { EN, CN } from "../config/LoadingTips";
const { ccclass, property, menu } = cc._decorator;
@ccclass
@menu("LoadingScene/LoadingScene")
export default class LoadingScene extends cc.Component {
    @property(cc.Node)
    private _loadingMask: cc.Node = null;

    @property(cc.Node)
    public _progress: cc.Node = null;

    @property(cc.Node)
    private _Tip: cc.Node = null;

    private coldTime: number;
    private languae: any;
    private Index: number = 0;
    onLoad() {
        this._loadingMask = this.node.getChildByName("mask");
        this._progress = this._loadingMask.getChildByName("progress");
        this._Tip = this.node.getChildByName("label");
        if (this._Tip) {
            this._Tip.getComponent(cc.Label).string = ""
        }
        this.coldTime = 1;
        this.Index = 0;
        this.languae = EN
    }

    /**
     * 加载进度条
     * @param process
     */
    public loading(process: number): void {
        this._loadingMask.getComponent(cc.Mask).node.width = (this._progress.width * process) / 100;
    }

    public loadingTest(step: number = 10, callback: Function) {
        this._loadingMask.getComponent(cc.Mask).node.width += step;
        if (this._loadingMask.getComponent(cc.Mask).node.width >= this._progress.width) {
            callback();
        }
    }

    update(dt) {
        if (this.coldTime < 0 && this._Tip) {
            this.coldTime = 5
            let string = this.languae[this.Index]
            if (!string) {
                this.Index = 0
                string = this.languae[this.Index]
            }
            this._Tip.getComponent(cc.Label).string = string

            this.Index++
        }

        this.coldTime -= dt
    }
}

import SpineCommon from "../../../../Script/modules/@mogafa/fairygui-component/lib/SpineCommon";
import TimeInfoMgrTex from "../View/TimeInfoMgrTex";


const freeSpinResource = {
    PATH: "res/Spine/bigwin/",
    SHINE: "skeleton",
};

export default class TexasBigWinSpin extends SpineCommon {
    protected get packageResourceName(): string {
        return "texas";
    }
    constructor(node: cc.Node) {
        super(node, [freeSpinResource.PATH + freeSpinResource.SHINE])
    }

    bgStart() {
        this._skeleton.skeletonData = this._resources[freeSpinResource.SHINE];
        let timeout = setTimeout(() => {
            this.skeleton.setAnimation(1, "start", false);
            this.skeleton.setCompleteListener((trackEntry: any) => {
                if (!!trackEntry && trackEntry.animation.name === "start" && trackEntry.trackIndex === 1) {
                    this._skeleton.skeletonData = this._resources[freeSpinResource.SHINE];
                    this.skeleton.setAnimation(0, "idle", true);
                }
            });
        }, 100);
        TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }
}
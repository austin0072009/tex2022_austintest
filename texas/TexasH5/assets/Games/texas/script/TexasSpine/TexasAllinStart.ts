import SpineCommon from "../../../../Script/modules/@mogafa/fairygui-component/lib/SpineCommon";
import TimeInfoMgrTex from "../View/TimeInfoMgrTex";



export default class TexasAllinStart extends SpineCommon {
    private allinKeep: TexasAllinKeep = null;
    protected get packageResourceName(): string {
        return "texas";
    }
    constructor(node: cc.Node) {
        super(node, ["res/Spine/allin_start/" + "skeleton"])

    }

    bgStart(callBack: Function) {
        this._skeleton.skeletonData = this._resources["skeleton"];
        let timeout = setTimeout(() => {
            this.skeleton.setAnimation(1, "animation", false);
            this.skeleton.setCompleteListener((trackEntry: any) => {
                if (!!trackEntry && trackEntry.animation.name === "animation" && trackEntry.trackIndex === 1) {
                    callBack();
                }
            });
        }, 100);
        TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
        this.allinKeep.onDestroy();
    }
}

export class TexasAllinKeep extends SpineCommon {
    protected get packageResourceName(): string {
        return "texas";
    }
    constructor(node: cc.Node) {
        super(node, ["res/Spine/allin_keep/" + "skeleton"]);
        // node.opacity = 1;

    }

    bgStart() {
        this._skeleton.skeletonData = this._resources["skeleton"];
        let timeout = setTimeout(() => {
            this.skeleton.setAnimation(1, "animation", true);
        }, 100);
        TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
    }

    onDestroy() {
        this.unscheduleAllCallbacks();
    }
}
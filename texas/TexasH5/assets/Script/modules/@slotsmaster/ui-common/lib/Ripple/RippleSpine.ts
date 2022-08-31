import SpineCommon from "../../../../@mogafa/fairygui-component/lib/SpineCommon";





class RippleSpineResources {
    public static PATH: string = "GameHall/Spine/Ripple/";
    public static RIPPLE: string = "spine_ui_guanghuan";
}

export default class RippleSpine extends SpineCommon {
    constructor(node: cc.Node) {
        super(node, [RippleSpineResources.PATH + RippleSpineResources.RIPPLE]);
    }

    public ripple(): void {
        this._skeleton.skeletonData = this._resources[RippleSpineResources.RIPPLE];
        this.skeleton.setAnimation(1, "finish", true);
    }

    public closeRipple(): void {
        this._skeleton.skeletonData = this._resources[RippleSpineResources.RIPPLE];
        this.skeleton.clearTrack(1);
    }
}

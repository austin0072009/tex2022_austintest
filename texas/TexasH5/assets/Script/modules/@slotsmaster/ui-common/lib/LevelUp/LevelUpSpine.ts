import SpineCommon from "../../../../@mogafa/fairygui-component/lib/SpineCommon";

/*
 * @Author: 田鑫
 * @Date: 2020-03-31 16:11:05
 * @LastEditors: 田鑫
 * @LastEditTime: 2020-08-11 15:42:30
 * @Version: CocosCreator V2.2.2
 * @Description:
 */
class levelUpSpineResource {
    public static PATH: string = "Games/Common/UI/popup_update/";
    public static UPDATE1: string = "popup_update";
}
export default class LevelUpSpine extends SpineCommon {
    constructor(node: cc.Node) {
        super(node, [levelUpSpineResource.PATH + levelUpSpineResource.UPDATE1]);
    }

    public primary(maxBetUnlocked: number) {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "primary_start", false);
        this.skeleton.addAnimation(0, "primary_breath", true);
        if (maxBetUnlocked) {
            this.skeleton.setSkin("skin1");
        } else {
            this.skeleton.setSkin("default");
        }
    }
    public dvanced(maxBetUnlocked: number) {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "dvanced_start", false);
        this.skeleton.addAnimation(0, "dvanced_breath", true);
        if (maxBetUnlocked) {
            this.skeleton.setSkin("skin1");
        } else {
            this.skeleton.setSkin("default");
        }
    }
    public small(maxBetUnlocked: number) {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "small_start", false);
        this.skeleton.addAnimation(0, "small_breath", true);
        if (maxBetUnlocked) {
            this.skeleton.setSkin("skin2");
        } else {
            this.skeleton.setSkin("default");
        }
    }
    public primaryClose() {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "primary_over", false);
    }
    public dvancedClose() {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "dvanced_over", false);
    }
    public smallClose() {
        this._skeleton.skeletonData = this._resources[levelUpSpineResource.UPDATE1];
        this.skeleton.setAnimation(0, "small_over", false);
    }
}

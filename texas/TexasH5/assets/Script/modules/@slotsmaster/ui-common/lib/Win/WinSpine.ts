

import SpineCommon from "../../../../@mogafa/fairygui-component/lib/SpineCommon";
import SoundMgr from "../../../../@mogafa/utils/lib/SoundMgr";

class WinSpineResources {
    public static PATH: string = "Games/Common/UI/Win/Spine/";
    public static BIGWIN: string = "spine_ui_function_bigwin_up";
    public static BIGWINBG: string = "spine_ui_function_bigwin_down";
    public static MEGAWIN: string = "spine_ui_function_megawin_up";
    public static MEGAWINBG: string = "spine_ui_function_megawin_down";
    public static SUPERWIN: string = "spine_ui_function_superwin_up";
    public static SUPERWINBG: string = "spine_ui_function_superwin_down";
}
export default class WinSpine extends SpineCommon {
    constructor(node: cc.Node) {
        super(node, [
            WinSpineResources.PATH + WinSpineResources.BIGWIN,
            WinSpineResources.PATH + WinSpineResources.BIGWINBG,
            WinSpineResources.PATH + WinSpineResources.MEGAWIN,
            WinSpineResources.PATH + WinSpineResources.MEGAWINBG,
            WinSpineResources.PATH + WinSpineResources.SUPERWIN,
            WinSpineResources.PATH + WinSpineResources.SUPERWINBG,
        ]);
    }

    bigWin() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.BIGWIN];
        SoundMgr.getInstance().playEffect("vo_big_win");
        this.skeleton.setAnimation(0, "big_start", false);
        this.skeleton.addAnimation(0, "big_breath", true);
    }

    megaWin() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.MEGAWIN];
        SoundMgr.getInstance().playEffect("vo_maga_win");
        this.skeleton.setAnimation(0, "mega_start", false);
        this.skeleton.addAnimation(0, "mega_breath", true);
    }

    superWin() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.SUPERWIN];
        SoundMgr.getInstance().playEffect("vo_super_win");
        this.skeleton.setAnimation(0, "super_start", false);
        this.skeleton.addAnimation(0, "super_breath", true);
    }

    bigWinBg() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.BIGWINBG];
        this.skeleton.setAnimation(0, "big_start", false);
        this.skeleton.addAnimation(0, "big_breath", true);
    }

    megaWinBg() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.MEGAWINBG];
        this.skeleton.setAnimation(0, "mega_start", false);
        this.skeleton.addAnimation(0, "mega_breath", true);
    }

    superWinBg() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.SUPERWINBG];
        this.skeleton.setAnimation(0, "super_start", false);
        this.skeleton.addAnimation(0, "super_breath", true);
    }
    bgWinHide() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.BIGWIN];
        this.skeleton.setAnimation(0, "big_over", false);
    }
    bgWinBgHide() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.BIGWINBG];
        this.skeleton.setAnimation(0, "big_over", false);
    }
    superWinHide() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.SUPERWIN];
        this.skeleton.setAnimation(0, "super_over", false);
    }
    superWinBgHide() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.SUPERWINBG];
        this.skeleton.setAnimation(0, "super_over", false);
    }
    megaWinHide() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.MEGAWIN];
        this.skeleton.setAnimation(0, "mega_over", false);
    }
    megaWinBgHide() {
        this._skeleton.skeletonData = this._resources[WinSpineResources.MEGAWINBG];
        this.skeleton.setAnimation(0, "mega_over", false);
    }
}

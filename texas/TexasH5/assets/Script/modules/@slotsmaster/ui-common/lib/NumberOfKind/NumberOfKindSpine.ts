/*
 * @Author: 田鑫
 * @Date: 2020-05-14 14:59:34
 * @LastEditors: 田鑫
 * @LastEditTime: 2020-08-11 15:42:00
 * @Version: CocosCreator V2.2.2
 * @Description: numberOfKind 连线SPINE
 */

import SpineCommon from "../../../../@mogafa/fairygui-component/lib/SpineCommon";
import SoundMgr from "../../../../@mogafa/utils/lib/SoundMgr";




class NumberOfKindSpineResources {
    public static PATH: string = "Games/Common/UI/NumberOfKind/Spine/";
    public static KINDUP: string = "spine_ui_function_5kind_up";
    public static KINDDOWN: string = "spine_ui_function_5kind_down";
}

export default class NumberOfKindSpine extends SpineCommon {
    constructor(node: cc.Node) {
        super(node, [
            NumberOfKindSpineResources.PATH + NumberOfKindSpineResources.KINDUP,
            NumberOfKindSpineResources.PATH + NumberOfKindSpineResources.KINDDOWN,
        ]);
    }

    /**
     * numberOfKind动画周期
     * @param kindNumber
     * @param holding 存在时间
     */
    kindCycle(kindNumber: number, holding: number = 1.5) {
        this._skeleton.skeletonData = this._resources[NumberOfKindSpineResources.KINDUP];
        //* 播放ofKind连线音效
        SoundMgr.getInstance().playEffect(`vo_${kindNumber}_of_kind`);
        this.skeleton.setAnimation(0, `${kindNumber}_finish`, false);
        this.skeleton.addAnimation(0, `${kindNumber}_breath`, false);
        this.skeleton.setCompleteListener((trackEntry: any) => {
            if (!!trackEntry && trackEntry.animation.name === `${kindNumber}_breath`) {
                this.skeleton.addAnimation(0, `${kindNumber}_over`, false);
            }
        });
    }

    /**
     * numberOfKind背景动画周期
     * @param kindNumber
     * @param holding 存在时间
     */
    kindCycleBg(kindNumber: number, holding: number = 1.5) {
        this._skeleton.skeletonData = this._resources[NumberOfKindSpineResources.KINDDOWN];
        this.skeleton.setAnimation(0, `${kindNumber}_finish`, false);
        this.skeleton.addAnimation(0, `${kindNumber}_breath`, false);
        this.skeleton.setCompleteListener((trackEntry: any) => {
            if (!!trackEntry && trackEntry.animation.name === `${kindNumber}_breath`) {
                this.skeleton.addAnimation(0, `${kindNumber}_over`, false);
            }
        });
    }

    /**
     * numberOfKind通用方法
     * @param kindNumber
     * @param holding
     */
    numberOfKind(kindNumber: number, holding: number = 1.5) {
        this.skeleton.setAnimation(0, `${kindNumber}_finish`, false);
        this.skeleton.addAnimation(0, `${kindNumber}_breath`, true);
        this.scheduleOnce(() => {
            this.skeleton.setCompleteListener((trackEntry: any) => {
                if (!!trackEntry && trackEntry.animation.name === `${kindNumber}_breath`) {
                    this.skeleton.addAnimation(0, `${kindNumber}_over`, false);
                }
            });
        }, holding);
    }
}

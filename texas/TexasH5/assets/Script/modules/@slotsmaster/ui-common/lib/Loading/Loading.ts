
import { Utils } from "../../../../@mogafa/utils/lib/Utils";
import { AppConst } from "../AppConst";
import { Popup } from "../Popup";

export class Loading extends Popup {
    protected get basePanel(): string {
        return "";
    }
    protected get animNode(): cc.Node[] {
        throw new Error("Method not implemented.");
    }
    protected get buttonOKName(): string {
        return null;
    }
    protected get goldGrowName(): string[] {
        throw new Error("Method not implemented.");
    }
    protected get normalNumName(): string[] {
        throw new Error("Method not implemented.");
    }
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Loading";
    }
    protected get componentName(): string {
        return "ShowLoading";
    }
    get closeTime(): number {
        return -1;
    }
    private spineResources: string = "GameHall/Spine/loading/loading01";
    protected createChildComponents(): void {
        super.createChildComponents();
        this.node.on(AppConst.IsShowLoading, this.isShow, this);
    }
    doRotate() {
        // this.fguiComponent.getChild("JUHUA").node.stopAllActions();
        // this.fguiComponent.getChild("JUHUA").node.runAction(cc.rotateBy(1, 360).repeatForever());
    }
    private isShow(isShow: boolean = true): void {
        console.log("Loading--", isShow);
        if (isShow) this.show();
        else this.hide();
    }
    show() {
        super.show();
        Utils.addSpine(this.spineResources, this.fguiComponent.getChild("spine").node, (loadBg: sp.Skeleton) => {
            loadBg.setAnimation(0, "loading", true);
        });
        Utils.addSpine(this.spineResources, this.getChild("load.spine").node, (load: sp.Skeleton) => {
            load.setAnimation(0, "slots", true);
        });
        // this.doRotate();
    }

    hide() {
        // this.fguiComponent.getChild("JUHUA").node.stopAllActions();
        super.hide();
    }

    protected onPlayShowAni(): void { }

    protected onPlayHideAni(): void { }
}

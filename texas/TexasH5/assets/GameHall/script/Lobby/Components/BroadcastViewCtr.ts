import { BroadcastView } from "./BroadcastView";

export class BroadcastViewCtr {
    public view: BroadcastView;
    private static _viewCtr: BroadcastViewCtr;
    public static get instance(): BroadcastViewCtr {
        if (this._viewCtr == null) {
            this._viewCtr = new BroadcastViewCtr();
        }
        return this._viewCtr;
    }

    public addMessage(str: string, delayTime = 0) {
        this.view && this.view.addMessage(str, delayTime);
    }

}

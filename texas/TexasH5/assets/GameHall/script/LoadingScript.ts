const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingScript extends cc.Component {
    @property(cc.Node)
    layoutNode: cc.Node = null;
    @property(cc.Label)
    tipLabel: cc.Label = null;
    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    public progressBarCB: Function = null;

    onLoad() {
        let scaleW = cc.winSize.width / 1080;
        let scaleH = cc.winSize.height / 2340;
        this.node.scaleX = scaleW;
        this.node.scaleY = scaleH;
    }

    onEnable() {
        // loading
        let time: number = 0;
        this.progressBar.barSprite.fillRange = time;
        this.progressBarCB = () => {
            time += 0.08;
            if (time >= 0.95) {
                return;
            }
            this.progressBar.barSprite.fillRange = time;
            this.tipLabel.string = "Loading..." + Math.ceil(time * 100) + "%";
        }
        this.schedule(() => {
            this.progressBarCB();
        }, 0.01)
    }

    public loadCompelete() {
        this.progressBar.barSprite.fillRange = 0.99;
        this.tipLabel.string = "Loading..." + Math.ceil(0.99 * 100) + "%";
        this.unschedule(this.progressBarCB);
        this.layoutNode.active = false;
    }
}

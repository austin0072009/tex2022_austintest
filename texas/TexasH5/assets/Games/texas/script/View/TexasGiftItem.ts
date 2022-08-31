export default class TexasGiftItem extends fgui.GComponent {
    public constructor() {
        super();
    }
    // private loader: fgui.GLoader;
    protected onConstruct(): void {
        // this.loader = this.getChild("loader").asLoader;
    }
    public prefadAni: cc.Prefab;

    public showGift(prefad: cc.Prefab) {
        this.prefadAni = prefad;
        let sk = cc.instantiate(prefad);
        // this.loader.node.addChild(sk);
        // sk.setPosition(0, 0);
    }

    public createAnimationNode() {
        return cc.instantiate(this.prefadAni);
    }


}
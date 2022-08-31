
/**
 * @description 轮播图
 */
export default class SlideShow extends fgui.GComponent {
    public constructor() {
        super();
    }
    private indexController: fgui.Controller;
    private list: fgui.GList;
    private timerId;

    protected onConstruct(): void {
        this.indexController = this.getController("index");
        this.list = this.getChild("list").asList;
        this.list.setVirtualAndLoop();
        this.list.itemRenderer = this.itemRenderer.bind(this);
        this.list.numItems = 4;
        // this.timerId = setInterval(() => {
        //     this.list.scrollPane.scrollRight(1, true);
        // }, 5000)
        this.loopRoll();
    }

    public loopRoll() {
        this.node.stopAllActions();
        this.node.runAction(
            cc.repeatForever(
                cc.sequence(
                    cc.delayTime(5),
                    cc.callFunc(() => {
                        this.list.scrollPane.scrollRight(1, true);
                    })))
        )
    }

    private itemRenderer(index: number, obj: fgui.GObject) {
        let item = <fgui.GComponent>obj;
        let loader = item.getChild("n0").asLoader;
        if (index == 0 || index == 2) {
            loader.url = "ui://Lobby/BANNER";
        } else {
            loader.url = "ui://Lobby/BANNER1";
        }
        this.indexController.setSelectedIndex(index);
    }
    public clean() {
        // clearInterval(this.timerId);
        this.node.stopAllActions();
    }
    public onDestroy() {
        this.node.stopAllActions();
        // clearInterval(this.timerId);
    }

}
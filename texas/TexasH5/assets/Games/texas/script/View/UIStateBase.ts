import ViewBase from "../../../../Script/BaseFrame/ViewBase";

export default class UIStateBase extends ViewBase {
    public StateToActive = false;//true:表示state<0时隐藏对象本身,false:自身不受state控制
    public state = 0;
    public get State(): number {
        return this.state;
    }
    public set State(value: number) {
        this.SetState(value);
    }

    public image: fgui.GLoader;
    public text: fgui.GTextField;
    public sprites: string[];
    public texts: string[];
    public objs: fgui.GObject[];
    private preObj: fgui.GObject = null;

    private onLoadEnd = false;
    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }

    MyStart() {
        this.mystart = true;
        if (this.onLoadEnd) this.MyStartEx();
    }

    MyStartEx() {
        // super.AutoSetGoProperty();
        if (this.image == null) { if (this.node.name == "GLoader") this.image = this.fguiComponent.asLoader }
        if (this.text == null) { if (this.node.name == "GTextField") this.text = this.fguiComponent.asTextField; }
        this.HideObjs();

        this.SetState(this.state);
    }





    AutoSetGoProperty() { }

    public SetState(state: number) {
        this.state = state;
        if (this.StateToActive) { this.fguiComponent.visible = (state >= 0); }
        this.ShowObj(this.state);
        this.ShowSprite(state);
        this.ShowText(state);
    }

    private ShowSprite(state: number) {
        if (state < 0) { return; }

        if (this.sprites != null && this.sprites.length > state && this.image != null) {
            this.image.url = this.sprites[state];
        }
    }

    private ShowText(state: number) {
        if (state < 0) { return; }
        if (this.texts != null && this.texts.length > state && this.text != null) {
            this.text.text = this.texts[state];
        }

    }

    private HideObjs() {
        if (this.objs == null) { return; }
        for (var i = 0; i < this.objs.length; i++) {
            this.objs[i].visible = false;
        }
    }

    private ShowObj(state: number) {
        this.HidePreObj();
        if (state < 0) { return; } // state 小于 0 默认隐藏全部
        if (this.objs == null || this.objs.length <= state) { return; }
        this.objs[state].visible = true;
        this.preObj = this.objs[state];
    }

    private HidePreObj() {
        if (this.preObj != null) { this.preObj.visible = false; }
    }

    public Show() {
        this.node.active = true;
        super.Show();
    }

    public Hide() {
        super.Hide();
        this.node.active = false;
    }
}
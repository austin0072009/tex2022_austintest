
import FguiComponentBase from "../../../../@mogafa/fairygui-component/lib/FguiComponentBase";


export class BigWinSpread extends FguiComponentBase {
    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "BigWinCoin";
    }

    private _coin: cc.Node;
    private _windowWidth: number;
    private _windowHeight: number;

    protected createChildComponents() {
        super.createChildComponents();
        this._windowWidth = fairygui.GRoot.inst.width;
        this._windowHeight = fairygui.GRoot.inst.height;
        this._coin = this.fguiComponent.node;
        this._coin.anchorX = 0.5;
        this._coin.anchorY = 0.5;
        this._coin.x = fairygui.GRoot.inst.width / 2;
        this._coin.y = -fairygui.GRoot.inst.height / 2;
        this._coin.scale = Math.random() + 0.4;
        this._coin.angle = Math.random() * 360;
        this._radius = this._windowWidth / 4;
        console.log("BigWinCoin  createChildComponents")
        this._startPosition = cc.v2(this._coin.x, this._coin.y);
        this._bezierTime = 2;
    }

    protected allChildCreated(): void {
        super.allChildCreated();
    }

    private _radius: number;
    private _startPosition: cc.Vec2;
    private _bezierTime: number;
    private bezierArr: cc.Vec2[];
    public coinFlyByCurve(startPos: cc.Vec2, endPos: cc.Vec2, angle: number = 30): void {
        this._coin.position = cc.v3(startPos.x, startPos.y, 0);
        this._coin.scale = 0.4;
        this._coin.angle = 360 * Math.random();
        let radius: number = ((Math.abs(endPos.y) / Math.cos((Math.PI * 2) / 360)) * angle) / 2;
        let trangleLen: number = radius * Math.sin((Math.PI * 2) / 360) * angle;
        let peak1: cc.Vec2 = cc.v2(startPos.x + trangleLen, startPos.y - startPos.y / 2);
        let trough1: cc.Vec2 = cc.v2(startPos.x - trangleLen * 2, startPos.y - startPos.y / 2);
        let peak2: cc.Vec2 = cc.v2(endPos.x - trangleLen * 2, endPos.y + startPos.y / 2);
        let bezierCurve: cc.Vec2[] = [peak1, peak2, endPos];
        this._coin.runAction(
            cc
                .sequence(
                    cc.bezierTo(0.5, bezierCurve),
                    cc.callFunc(() => {
                        if (this._coin.isValid) {
                            this._coin.destroy();
                        }
                    })
                )
                .easing(cc.easeInOut(1.2))
        );
    }

    public degree30CoinsLeft(): void {
        let nodeLeftX: number = this._radius;
        let nodeY: number = this._radius * Math.tan(((Math.PI * 2) / 360) * (60 + Math.random() * 10));
        let nodeLeftPosition: cc.Vec2 = cc.v2(nodeLeftX, nodeY);
        let endLeftX: number = 300 * Math.random();
        let endY: number = -fairygui.GRoot.inst.height;
        let endPosition: cc.Vec2 = cc.v2(endLeftX, endY);
        this.bezierArr = [this._startPosition, nodeLeftPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    }
    public degree30CoinsRight(): void {
        let nodeRightX: number = this._windowWidth / 2 + this._radius;
        let nodeY: number = this._radius * Math.tan(((Math.PI * 2) / 360) * (60 + Math.random() * 10));
        let nodeRightPosition: cc.Vec2 = cc.v2(nodeRightX, nodeY);
        let endRightX: number = this._windowWidth + 100 * Math.random();
        let endY: number = -fairygui.GRoot.inst.height;
        let endPosition: cc.Vec2 = cc.v2(endRightX, endY);
        this.bezierArr = [this._startPosition, nodeRightPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    }
    public degree50CoinsLeft(): void {
        let nodeLeftX: number = this._radius;
        let nodeY: number = this._radius * Math.tan(((Math.PI * 2) / 360) * (50 + Math.random() * 10));
        let nodeLeftPosition: cc.Vec2 = cc.v2(nodeLeftX, nodeY);
        let endLeftX: number = 300 * Math.random();
        let endY: number = -fairygui.GRoot.inst.height;
        let endPosition: cc.Vec2 = cc.v2(endLeftX, endY);
        this.bezierArr = [this._startPosition, nodeLeftPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    }
    public degree50CoinsRight(): void {
        let nodeRightX: number = this._windowWidth / 2 + this._radius;
        let nodeY: number = this._radius * Math.tan(((Math.PI * 2) / 360) * (50 + Math.random() * 10));
        let nodeRightPosition: cc.Vec2 = cc.v2(nodeRightX, nodeY);
        let endRightX: number = this._windowWidth + 100 * Math.random();
        let endY: number = -fairygui.GRoot.inst.height;
        let endPosition: cc.Vec2 = cc.v2(endRightX, endY);
        this.bezierArr = [this._startPosition, nodeRightPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    }
    public degree70CoinsLeft(): void {
        let nodeLeftX: number = this._radius;
        let nodeY: number = this._radius * Math.tan(((Math.PI * 2) / 360) * (60 + Math.random() * 5));
        let nodeLeftPosition: cc.Vec2 = cc.v2(nodeLeftX, nodeY);
        let endLeftX: number = this._coin.x - 600 * Math.random();
        let endY: number = -fairygui.GRoot.inst.height;
        let endPosition: cc.Vec2 = cc.v2(endLeftX, endY);
        this.bezierArr = [this._startPosition, nodeLeftPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    }
    public degree70CoinsRight(): void {
        let nodeRightX: number = this._windowWidth / 2 + this._radius;
        let nodeY: number = this._radius * Math.tan(((Math.PI * 2) / 360) * (60 + Math.random() * 5));
        let nodeRightPosition: cc.Vec2 = cc.v2(nodeRightX, nodeY);
        let endRightX: number = this._coin.x + 600 * Math.random();
        let endY: number = -fairygui.GRoot.inst.height;
        let endPosition: cc.Vec2 = cc.v2(endRightX, endY);
        this.bezierArr = [this._startPosition, nodeRightPosition, endPosition];
        this.bezier(this._bezierTime, this.bezierArr);
    }
    public verticalCoinsLeft(): void {
        let nodeLeftX: number = this._windowWidth / 2 - (80 + Math.random() * 100);
        let nodeLeftPosition: cc.Vec2 = cc.v2(nodeLeftX, this._windowHeight + (50 + Math.random() * 100));
        let endLeftX: number = this._windowWidth / 2 - (80 + Math.random() * 100);
        let endY: number = -fairygui.GRoot.inst.height;
        this.bezierArr = [this._startPosition, nodeLeftPosition, cc.v2(endLeftX, endY)];
        this.bezier(this._bezierTime, this.bezierArr);
    }
    public verticalCoinsRight(): void {
        let nodeRightX: number = this._windowWidth / 2 + (80 + Math.random() * 100);
        let nodeRightPosition: cc.Vec2 = cc.v2(nodeRightX, this._windowHeight + (50 + Math.random() * 100));
        let endRightX: number = this._windowWidth / 2 + (80 + Math.random() * 100);
        let endY: number = -fairygui.GRoot.inst.height;
        this.bezierArr = [this._startPosition, nodeRightPosition, cc.v2(endRightX, endY)];
        this.bezier(this._bezierTime, this.bezierArr);
    }
    private bezier(time: number, bezierArr: cc.Vec2[]) {
        this.fguiComponent.node.runAction(
            cc.sequence(
                cc.bezierTo(time, bezierArr),
                cc.callFunc(() => {
                    if (this.fguiComponent.node.isValid) {
                        this.fguiComponent.node.destroy();
                    }
                })
            )
        );
    }
}


import FguiComponentBase from "../../../../@mogafa/fairygui-component/lib/FguiComponentBase";
import CoinSpread from "./CoinSpread";
export class Coin extends FguiComponentBase {
    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "Coin";
    }

    private _coinSpread: CoinSpread;

    //* 抛物线顶点最小y坐标
    private targetNodeMinY: number = -300;

    //* 抛物线顶点最大y坐标
    private targetNodeMaxY: number = 0;

    private leftTargetNode: cc.Vec2;

    //* 金币最小速度
    private minspeed: number = 120;

    //* 金币最大速度
    private maxspeed: number = 200;
    private _coinNode: cc.Node;
    private _isCoinSpred: boolean = false;

    protected createChildComponents() {
        super.createChildComponents();
        this._coinSpread = new CoinSpread(this.fguiComponent.node);
        this._coinNode = this.fguiComponent.node;
    }

    update(dt: number) {
        if (this._isCoinSpred) {
            this._coinSpread.update(dt);
        }
    }

    onDestroy() {
        console.log("has been destroyed.");
    }

    /**
     * 金币飞行动画
     * @param startPos
     * @param endPos
     */
    coinFly(startPos: cc.Vec2, endPos: cc.Vec2) {
        this._isCoinSpred = false;
        this._coinNode.zIndex = 2000;
        this._coinNode.scale = 0.4;
        this._coinNode.position = cc.v3(startPos.x, startPos.y, 0);

        let randomx1 = endPos.x - startPos.x;

        let randomx2 = startPos.x - endPos.x;

        let randomy1 = endPos.y - startPos.y;

        let randomy2 = startPos.y - endPos.y;

        let q1 = cc.v2(0, 0);
        let q2 = cc.v2(0, 0);
        let romx = cc.misc.lerp(-100, 100, Math.random());

        let romy = cc.misc.lerp(-100, 100, Math.random());

        if (romx > 0) {
            q1.x = startPos.x + romx + 100;
        } else {
            q1.x = startPos.x + romx - 100;
        }

        if (romy > 0) {
            q1.y = startPos.y + romy + 100;
        } else {
            q1.y = startPos.y + romy - 100;
        }

        if (endPos.x > startPos.x) {
            q2.x = q1.x + randomx1 * Math.random();
        } else {
            q2.x = q1.x - randomx2 * Math.random();
        }

        if (endPos.y > startPos.y) {
            q2.y = q1.y - randomy1 * Math.random();
        } else {
            q2.y = q1.y + randomy2 * Math.random();
        }
        this._coinNode.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(1 / 30)));
        this._coinNode.runAction(
            cc.sequence(
                cc.bezierTo(1, [q1, q2, endPos]),
                cc.callFunc(() => {
                    if (this.fguiComponent.node.isValid) {
                        this.fguiComponent.node.destroy();
                    }
                })
            )
        );
    }

    coinFlyByCurve(coins: number, startPos: cc.Vec2, endPos: cc.Vec2) {
        if (coins % 2 !== 0) {
            if (this.fguiComponent.node.isValid) {
                this.fguiComponent.node.destroy();
            }
            return;
        }
        this._coinNode.position = cc.v3(startPos.x, startPos.y, 0);
        let radius: number = (endPos.y - startPos.y) / 2;
        let distance: number = Math.abs(endPos.y - startPos.y);
        let peak1: cc.Vec2 = cc.v2(
            startPos.x + radius * Math.tan(((Math.PI * 2) / 360) * 30),
            distance * (1 / 4) + startPos.y
        );
        let trough1: cc.Vec2 = cc.v2(startPos.x, startPos.y + distance / 2);
        let bezierPeak1: cc.Vec2[] = [startPos, peak1, trough1];
        let peak2: cc.Vec2 = cc.v2(
            startPos.x - radius * Math.tan(((Math.PI * 2) / 360) * 30),
            distance * (3 / 4) + startPos.y
        );
        let trough2: cc.Vec2 = endPos;
        let bezierPeak2: cc.Vec2[] = [trough1, peak2, trough2];
        this._coinNode.runAction(
            cc.sequence(
                cc.bezierTo(0.5, bezierPeak1),
                cc.bezierTo(0.5, bezierPeak2),
                cc.callFunc(() => {
                    if (this.fguiComponent.node.isValid) {
                        this.fguiComponent.node.destroy();
                    }
                })
            )
        );
    }

    /**
     * 金币挥洒动画
     */
    coinSpread() {
        this._isCoinSpred = true;
        let startX: number = -300;
        let startY: number = 600;
        let endX: number = 800;
        let endY: number = 100;

        if (Math.random() * 100 > 65) {
            this._coinNode.zIndex = 100;
        } else {
            this._coinNode.zIndex = 10;
        }
        let startpos: cc.Vec2;
        if (Math.floor(Math.random() * 10) % 2 == 0) {
            this.leftTargetNode = cc.v2(
                cc.misc.lerp(-endX, -endY, Math.random()),
                cc.misc.lerp(this.targetNodeMinY, this.targetNodeMaxY, Math.random())
            );
            startpos = cc.v2(cc.misc.lerp(-startX, 0, Math.random()), -startY);
        } else {
            this.leftTargetNode = cc.v2(
                cc.misc.lerp(endY, endX, Math.random()),
                cc.misc.lerp(this.targetNodeMaxY, this.targetNodeMinY, Math.random())
            );
            startpos = cc.v2(cc.misc.lerp(0, startX, Math.random()), -startY);
        }
        let coinspeed = cc.misc.lerp(this.minspeed, this.maxspeed, Math.random());
        this._coinSpread.coinSpread(startpos, this.leftTargetNode, coinspeed, this.coinSpreadCallback.bind(this));
    }

    /**
     * 金币挥洒动画回调
     */
    private coinSpreadCallback(): void {
        if (this.fguiComponent.node.isValid) {
            this.fguiComponent.node.destroy();
            this._isCoinSpred = false;
        }
    }

    /**
     * 底部栏getCoin金币收集动画
     * @param startPos
     * @param endPos
     * @param flyTime
     */
    public getCoinCollect(startPos: cc.Vec2, endPos: cc.Vec2, flyTime: number = 1): void {
        this._coinNode.scale = 0.4;
        this._coinNode.position = cc.v3(startPos.x, startPos.y, 0);

        let randomx1 = endPos.x - startPos.x;

        let randomx2 = startPos.x - endPos.x;

        let randomy1 = endPos.y - startPos.y;

        let randomy2 = startPos.y - endPos.y;

        let q1 = cc.v2(0, 0);
        let q2 = cc.v2(0, 0);
        let romx = cc.misc.lerp(-100, 100, Math.random());

        let romy = cc.misc.lerp(-100, 100, Math.random());

        if (romx > 0) {
            q1.x = startPos.x + romx + 160;
        } else {
            q1.x = startPos.x + romx - 100;
        }

        if (romy > 0) {
            q1.y = startPos.y + romy + 400;
        } else {
            q1.y = startPos.y + romy + 300;
        }

        if (endPos.x > startPos.x) {
            q2.x = q1.x + randomx1 * Math.random();
        } else {
            q2.x = q1.x - randomx2 * Math.random();
        }

        if (endPos.y > startPos.y) {
            q2.y = q1.y - randomy1 * Math.random();
        } else {
            q2.y = q1.y + randomy2 * Math.random();
        }
        this._coinNode.runAction(cc.sequence(cc.delayTime(flyTime), cc.fadeOut(1 / 30)));
        this._coinNode.runAction(
            cc
                .sequence(
                    cc.bezierTo(flyTime, [q1, q2, endPos]),
                    cc.callFunc(() => {
                        if (this.fguiComponent.node.isValid) {
                            this.fguiComponent.node.destroy();
                        }
                    })
                )
                .easing(cc.easeOut(1))
        );
    }
}

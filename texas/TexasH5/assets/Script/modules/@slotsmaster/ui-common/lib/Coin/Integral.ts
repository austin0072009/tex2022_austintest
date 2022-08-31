
import FguiComponentBase from "../../../../@mogafa/fairygui-component/lib/FguiComponentBase";


export class Integral extends FguiComponentBase {
    protected get packageResourceName(): string {
        return null;
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "Integral";
    }

    private _coinNode: cc.Node;
    private _isCoinSpred: boolean = false;

    protected createChildComponents() {
        super.createChildComponents();
        this._coinNode = this.fguiComponent.node;
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
}

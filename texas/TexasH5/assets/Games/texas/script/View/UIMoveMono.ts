import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import TimeInfoMgrTex from "./TimeInfoMgrTex";

const { ccclass, property } = cc._decorator;

@ccclass
export class UIMoveMonoFgui extends fgui.GComponent {
    public isFade = false;
    public delay = 0;
    public speed = 500;
    public fixedTime = 1;
    public isUseSpeed = true;
    public isEndHide = false;//结束之后是隐藏
    public isResetPos = true;//结束之后是否还原位置
    public ease: number;

    public fromTs: fgui.GComponent = null;
    public toTs: fgui.GComponent = null;
    private onCmp: Function[] = null;

    // Start is called before the first frame update
    Start() {
        //Move();旁观玩家进来如果有下注会造成筹码第一次不移动到底池bug
    }

    OnLoadCompleted() {
        this.node.active = false;
    }

    AutoSetGoProperty() { }

    public Move(toTarget: fgui.GComponent = null, onCmp: Function[] = null) {
        this.Move2(this.delay, toTarget, onCmp);
    }

    public Move2(delay: number, toTarget: fgui.GComponent = null, onCmp: Function[] = null) {
        if (toTarget == null) {
            toTarget = this.toTs;
        }

        if (toTarget == null) { return; }
        this.onCmp = onCmp;
        this.node.stopAllActions();
        if (delay > 0) {
            let timeout = setTimeout(() => {
                this.DoMove(toTarget);
            }, delay * 1000);
            TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
        }
        else {
            this.DoMove(toTarget);
        }
    }
    private startPos: cc.Node;
    private DoMove(toTarget: fgui.GComponent) {
        if (toTarget == null) { return; }
        // this.Show();
        if (this.isFade) {
            this.node.runAction(cc.fadeTo(0, 1));//gameObject.getOrAddComponent<CanvasGroup>().DOFade(1, 0);
        }


        this.startPos = this.fromTs != null ? this.fromTs.node : this.node;
        this.moveN1toN2(this.node, this.startPos)
        let time = this.fixedTime;
        // if (this.isUseSpeed)
        // {
        //     let worldTo = toTarget.node.parent.convertToWorldSpaceAR(toTarget.node.position);
        //     let worldStart = this.node.parent.convertToWorldSpaceAR(this.node.position);
        //     let dis:cc.Vec2 = cc.v2(worldTo.x - worldStart.x, worldTo.y - worldStart.y);
        //     if (this.speed <= 0) { this.speed = 1; }
        //     time = dis.mag() / this.speed;
        //     console.log("======MoveTime="+time);
        // }
        let sequence: any = cc.sequence(cc.moveTo(time, this.convertNodeSpaceAR(this.node, toTarget.node)), cc.callFunc(() => {
            this.HandleMoveComplete();
            console.log("移动筹码完成======pos= " + this.node.position);
        }))
        this.node.runAction(sequence)
    }

    public HandleMoveComplete() {
        if (this.isFade) {
            let sequence: any = cc.sequence(cc.fadeTo(1, 0), cc.callFunc(() => {
                this.HandleOnComplete();
            }))
            this.node.runAction(sequence)
        }
        else {
            this.HandleOnComplete();
        }
    }


    public HandleOnComplete() {
        if (this.isEndHide) { this.Hide(); }
        if (this.isResetPos) { this.moveN1toN2(this.node, this.startPos); }
        if (this.onCmp != null) {
            for (var i = 0; i < this.onCmp.length; i++) {
                this.onCmp[i]();
            }
            this.onCmp = null;
        }
    }

    public Stop() {
        this.node.stopAllActions();
    }

    // 把 node1移动到 node2的位置
    public moveN1toN2(node1: cc.Node, node2: cc.Node) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position))
    }
    // 获取把 node1移动到 node2位置后的坐标
    public convertNodeSpaceAR(node1: cc.Node, node2: cc.Node): cc.Vec2 {
        let v = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
        return cc.v2(v.x, v.y);
    }

    public Show() {
        this.node.active = true;
        this.visible = true;
    }

    public Hide() {
        this.node.active = false;
        this.visible = false;
    }
}


export class UIMoveMono extends ViewBase {
    public isFade = false;
    public delay = 0;
    public speed = 500;
    public fixedTime = 1;
    public isUseSpeed = true;
    public isEndHide = false;//结束之后是隐藏
    public isResetPos = true;//结束之后是否还原位置
    public ease: number;

    public fromTs: fgui.GComponent = null;
    public toTs: fgui.GComponent = null;
    private onCmp: Function = null;

    // Start is called before the first frame update
    Start() {

    }

    OnLoadCompleted() {
        this.node.active = false;
    }

    AutoSetGoProperty() { }

    public Move(toTarget: fgui.GComponent = null, onCmp: Function = null) {
        this.Move2(this.delay, toTarget, onCmp);
    }

    public Move2(delay: number, toTarget: fgui.GComponent = null, onCmp: Function = null) {
        if (toTarget == null) {
            toTarget = this.toTs;
        }

        if (toTarget == null) { return; }
        this.onCmp = onCmp;
        this.node.stopAllActions();
        if (delay > 0) {
            let timeout = setTimeout(() => {
                this.DoMove(toTarget);
            }, delay * 1000);
            TimeInfoMgrTex.instance.addTimerNoCallback(timeout);
        }
        else {
            this.DoMove(toTarget);
        }
    }
    private startPos: cc.Node;
    private DoMove(toTarget: fgui.GComponent) {
        if (toTarget == null) { return; }
        console.log("开始移动物体：" + this.name);
        if (this.isFade) {
            this.node.runAction(cc.fadeTo(0, 1));//gameObject.getOrAddComponent<CanvasGroup>().DOFade(1, 0);
        }


        this.startPos = this.fromTs != null ? this.fromTs.node : this.node;
        this.moveN1toN2(this.node, this.startPos)
        let time = 2// this.fixedTime;
        // if (this.isUseSpeed)
        // {
        //     let worldTo = toTarget.node.parent.convertToWorldSpaceAR(toTarget.node.position);
        //     let worldStart = this.node.parent.convertToWorldSpaceAR(this.node.position);
        //     let dis:cc.Vec2 = cc.v2(worldTo.x - worldStart.x, worldTo.y - worldStart.y);
        //     if (this.speed <= 0) { this.speed = 1; }
        //     time = dis.mag() / this.speed;
        //     console.log("======MoveTime="+time);
        // }
        var self = this;
        let sequence: any = cc.sequence(
            cc.moveTo(time, self.convertNodeSpaceAR(self.fguiComponent.node, toTarget.node)),
            cc.callFunc(() => {
                self.HandleMoveComplete();
                console.log("完成移动物体：" + this.name);
            })
        );
        this.node.runAction(sequence)
    }

    public HandleMoveComplete() {
        if (this.isFade) {
            let sequence: any = cc.sequence(cc.fadeTo(1, 0), cc.callFunc(() => {
                this.HandleOnComplete();
            }))
            this.node.runAction(sequence)
        }
        else {
            this.HandleOnComplete();
        }
    }


    public HandleOnComplete() {
        if (this.isEndHide) { this.Hide(); }
        if (this.isResetPos) { this.moveN1toN2(this.node, this.startPos); }
        if (this.onCmp != null) { this.onCmp(); this.onCmp = null; }
    }

    public Stop() {
        this.node.stopAllActions();
    }

    // 把 node1移动到 node2的位置
    public moveN1toN2(node1: cc.Node, node2: cc.Node) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position))
    }
    // 获取把 node1移动到 node2位置后的坐标
    public convertNodeSpaceAR(node1: cc.Node, node2: cc.Node): cc.Vec2 {
        let v = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
        return cc.v2(v.x, v.y);
    }

    public Show() {
        this.node.active = true;
        super.Show();
    }

    public Hide() {
        this.node.active = false;
        super.Hide();
    }
}


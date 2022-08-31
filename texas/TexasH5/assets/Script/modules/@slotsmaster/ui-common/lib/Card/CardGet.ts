import { Popup } from "../Popup";

export class CardGet extends Popup {
    protected get basePanel(): string {
        return "base";
    }
    protected get animNode(): cc.Node[] {
        throw new Error("Method not implemented.");
    }
    protected get buttonOKName(): string {
        return "closeButton";
    }
    protected get goldGrowName(): string[] {
        throw new Error("Method not implemented.");
    }
    protected get normalNumName(): string[] {
        throw new Error("Method not implemented.");
    }
    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "CardGet";
    }
    get closeTime(): number {
        return -1;
    }
    private _moveClip: fgui.GMovieClip;
    private _cardCount: number = 0;
    private _callBack: Function;
    private _initY: number = 230;
    protected createChildComponents() {
        super.createChildComponents();
    }
    private getPosX(): number {
        let designSize = cc.view.getDesignResolutionSize().width;
        let visibleSize = cc.view.getVisibleSize().width;
        let size = 960 + (visibleSize - designSize) / 2;
        return size;
    }
    private playAction(): void {
        switch (this._cardCount) {
            case 1:
                this.actionOne();
                break;
            case 2:
                this.actionTwo();
                break;
            case 3:
                this.actionThree();
                break;
            case 4:
                this.actionFour();
                break;
            default:
                break;
        }
    }
    private actionOne(): void {
        let self = this;
        let item1 = this._base.getChild("0").asCom;
        let callBack = cc.callFunc(function () {
            self.moveAllItemBottom();
        });
        item1.node.runAction(cc.sequence(cc.delayTime(2), callBack));
    }
    private actionTwo(): void {
        let self = this;
        let item1 = this._base.getChild("0").asCom;
        let item2 = this._base.getChild("1").asCom;
        let action1 = cc.moveBy(1, -230, 0);
        let action2 = cc.rotateBy(1, -5);
        let action3 = cc.moveBy(1, 230, 0);
        let action4 = cc.rotateBy(1, 5);

        let callBack = cc.callFunc(function () {
            self.moveAllItemBottom();
        });
        item1.node.runAction(cc.spawn(action1, action2));
        item2.node.runAction(cc.sequence(cc.spawn(action3, action4), cc.delayTime(2), callBack));
    }
    private actionThree(): void {
        let self = this;
        let item1 = this._base.getChild("0").asCom;
        let item2 = this._base.getChild("1").asCom;
        let action1 = cc.moveBy(1, -458, -30);
        let action2 = cc.rotateBy(1, -5);
        let action3 = cc.moveBy(1, 458, -30);
        let action4 = cc.rotateBy(1, 5);

        let callBack = cc.callFunc(function () {
            self.moveAllItemBottom();
        });
        item1.node.runAction(cc.spawn(action1, action2));
        item2.node.runAction(cc.sequence(cc.spawn(action3, action4), cc.delayTime(2), callBack));
    }
    private actionFour(): void {
        this.actionTwo();
        let self = this;
        let item1 = this._base.getChild("2").asCom;
        let item2 = this._base.getChild("3").asCom;
        let action1 = cc.moveBy(1, -458 - 230, -60);
        let action2 = cc.rotateBy(1, -10);
        let action3 = cc.moveBy(1, 458 + 230, -60);
        let action4 = cc.rotateBy(1, 10);

        let callBack = cc.callFunc(function () {
            self.moveAllItemBottom();
        });
        item1.node.runAction(cc.spawn(action1, action2));
        item2.node.runAction(cc.spawn(action3, action4));
    }
    private moveAllItemBottom(): void {
        let self = this;
        let designSize = cc.view.getDesignResolutionSize().width;
        let visibleSize = cc.view.getVisibleSize().width;
        let size = 200 + (visibleSize - designSize) / 2;
        let callBack = cc.callFunc(function () {
            self.hide();
        });
        for (let index = 0; index < this._cardCount; index++) {
            let item = this._base.getChild(index.toString()).asCom;
            item.visible = true;
            let action1 = cc.scaleTo(1, 0);
            let action2 = cc.moveTo(1, size, -1000);
            if (index == this._cardCount - 1) {
                item.node.runAction(cc.sequence(cc.spawn(action1, action2), callBack));
            } else {
                item.node.runAction(cc.spawn(action1, action2));
            }
        }
    }
    private hideItem(): void {
        for (let index = 0; index < 4; index++) {
            let item = this._base.getChild(index.toString()).asCom;
            item.visible = false;
            item.node.scale = 0.8;
            item.node.angle = 0;
            item.node.x = this.getPosX();
            item.node.y = this._initY;
            item.node.stopAllActions();
        }
    }
    public setData(cardData: any, callBack: Function) {
        //this._moveClip.node.opacity = 255;
        //console.log(this._moveClip.node.opacity);
        this._cardCount = cardData.length;
        if (this._cardCount <= 0) return;

        this._callBack = callBack;
        this._base.getChild("count").asLabel.text = this._cardCount.toString();

        let self = this;
        this.show();
        this.hideItem();
        let isNew = 0;
        for (let index = 0; index < this._cardCount; index++) {
            let item = this._base.getChild(index.toString()).asCom;
            item.visible = true;

            item.getChild("icon").asLoader.url = cardData[index].imageUrl;
            item.getChild("count").asLabel.text = cardData[index].cardCount;
            isNew = cardData[index].isNewCard == true ? 1 : 0;
            item.getController("isNew").setSelectedIndex(isNew);
        }

        //this._moveClip.playing = true;
        //this._moveClip.setPlaySettings(
        //    0,
        //    -1,
        //    1,
        //    -1,
        //    function () {
        //        self._moveClip.node.runAction(cc.fadeOut(0.2));
        //        self._moveClip.playing = false;
        //       self.playAction();
        //    },
        //    this
        // );
    }
    show(): void {
        super.show();
    }
    hide(): void {
        this._callBack();
        super.hide();
    }
    onPlayHideAni(): void { }
}

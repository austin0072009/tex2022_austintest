import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { PlayerPrefs, UIUtil } from "../../../../Script/Common/UIUtil";

const { ccclass, property } = cc._decorator;

// @ccclass
export default class CardRedbetComp extends ViewBase {

    public ui_eye: fgui.GLoader = null;
    public originRotate: cc.Vec3;
    public _canClick = false;
    public _showType: number;// 0取消    1展示
    public ui_val: fgui.GLoader = null;
    public Value = 0;
    private static UnSelectPostionY: number;
    private SelectPostion: number;
    public Select: boolean;
    public ui_MaxImage: fgui.GImage = null;

    private onLoadEnd: boolean = false;
    public set visible(value: boolean) {
        this.fguiComponent.visible = true;
        this.node.active = true;
    }
    /// <summary>
    /// 初始化
    /// </summary>
    public Init(_click: boolean) {
        this.mystart = true;
        this._canClick = _click;
        if (this.onLoadEnd) this.MyStartEx();
    }
    AutoSetGoProperty() { }

    OnLoadCompleted() {
        this.onLoadEnd = true;
        if (this.mystart) this.MyStartEx();
    }

    MyStartEx() {
        super.AutoSetGoProperty();
        this._showType = 0;
        this.ShowEye(false);
        this.AddListener();
        this.Reset();
    }




    public Clear() {
        CardRedbetComp.UnSelectPostionY = this.node.y;
        this.SelectPostion = CardRedbetComp.UnSelectPostionY - 10;
        this.Select = false;
    }

    private UpdateUI(isAutoShow: boolean) {
        this.SetCardImage(this.Value, isAutoShow);
    }

    private SetCardImage(id: number, isAutoShow: boolean) {
        if (!this.ui_val) return;
        if (CardRedbetComp.cardTypeName == null) CardRedbetComp.cardTypeName = CardRedbetComp.cardType3;
        let cardType = PlayerPrefs.GetInt("key_cards_index", 1);
        UIUtil.loadImage(this.ui_val, (id == 0 || id == null ? CardRedbetComp.cardTypeName : id + "_" + cardType), "Texas");

        if (isAutoShow) {
            this.ui_val.visible = true;
        }

    }
    public SetVal(value: number, isAutoShow = true) {
        this.Value = value;
        this.UpdateUI(isAutoShow);
    }

    public UpdateCardImage() {
        if (this.Value == 0) {
            //只修改牌背面    
            this.UpdateUI(false);
        }
    }

    private AddListener() {
        if (!this._canClick) return;

    }
    public SetUnSelected() {
        if (this.Select) {
            this.node.position = cc.v3(this.node.position.x, CardRedbetComp.UnSelectPostionY, 0);
            this.Select = false;
        }
    }
    /// <summary>
    /// 仅十三水特有的
    /// </summary>
    /// <param name="go"></param>
    /// <param name="eventData"></param>
    public SelectCard(go: fgui.GComponent)//, eventData:BaseEventData)
    {
        if (!this._canClick) return;
        if (this.Value == 0) {
            console.log("TW  value is 0");
            return;
        }
        this.Select = !this.Select;
        if (this.Select) {
            go.node.runAction(cc.moveTo(0.2, cc.v2(go.node.x, CardRedbetComp.UnSelectPostionY + 20)));//go.transform.DOLocalMoveY(UnSelectPostionY + 20, 0.2f);
        }
        else {
            go.node.runAction(cc.moveTo(0.2, cc.v2(go.node.x, CardRedbetComp.UnSelectPostionY)));//go.transform.DOLocalMoveY(UnSelectPostionY, 0.2f);
        }
    }


    public onDown(go: fgui.GComponent)//, BaseEventData eventData)
    {

    }
    public onEnter(go: fgui.GComponent)//, BaseEventData eventData)
    {

    }

    /// <summary>
    /// Texas 专用
    /// </summary>
    /// <param name="_cardList"></param>
    public SetShowState(_cardList: number[]) {
        if (_cardList.indexOf(this.Value) >= 0) {
            this.ResetColor();
        }
        else {

            this.SetColorGary();
        }
    }

    public ResetColor() {
        if (!this.ui_val) return;
        this.ui_val.color = new cc.Color(255, 255, 255);
    }

    public SetColorGary() {
        if (!this.ui_val) return;
        this.ui_val.color = new cc.Color(164, 158, 158);
        this.ui_val.color = cc.Color.GRAY;
    }

    public ShowMaxCardBg(isShow: boolean) {
        if (this.ui_MaxImage != null)
            this.ui_MaxImage.visible = isShow;
    }
    public Reset(isResetValue = true) {
        this.ResetColor();
        this.Clear();
        this.Show();
        this.StopTrunPage();
        this.ShowEye(false);
        if (isResetValue) {
            this.SetVal(0);
        }
        else {
            this.SetCardImage(0, false);
        }

        if (this.ui_val) this.ui_val.visible = false;
        this.ShowMaxCardBg(false);
    }

    private static cardType1 = /*"000"; //*/"001";
    private static cardType2 = /*"000"; //*/"002";
    private static cardType3 = /*"000";//*/"003";
    private static cardType4 = /*"000";//*/"004";
    private static cardType5 = /*"000";//*/"005";
    public static cardTypeName = /*"000";//*/"001";

    public static SetCardImageType(type: number) {
        let cardName: string = null;
        switch (type) {
            case 1: cardName = CardRedbetComp.cardType1; break;
            case 2: cardName = CardRedbetComp.cardType2; break;
            case 3: cardName = CardRedbetComp.cardType3; break;
            case 4: cardName = CardRedbetComp.cardType4; break;
            case 5: cardName = CardRedbetComp.cardType5; break;
            default:
                break;
        }

        if (cardName != this.cardTypeName) {
            this.cardTypeName = cardName;
        }
    }

    public ShowTurnPage() {
        if (!this.ui_val) return;
        UIUtil.loadImage(this.ui_val, CardRedbetComp.cardTypeName, "Texas");
        this.node.anchorX = 0.5
        this.node.anchorY = 0.5
        let action = cc.sequence(
            cc.spawn(
                cc.scaleTo(0.2, 0, 1),
                cc.skewTo(0.2, 0, 20),
            ),
            cc.callFunc(() => {
                this.UpdateUI(false);
                this.node.skewY = -20;
            }),
            cc.spawn(
                cc.scaleTo(0.2, 1, 1),
                cc.skewTo(0.2, 0, 0)
            ),
        );
        this.ui_val.node.runAction(action);
    }

    public StopTrunPage() {
        if (this.ui_val) this.ui_val.node.stopAllActions();
        this.UpdateUI(false);
    }

    public ShowEye(isShow: boolean) {
        this._showType = isShow ? 1 : 0;
        if (this.ui_eye != null) this.ui_eye.visible = isShow;
    }

    //翻牌
    public Turnover(value: number) {
        this.node.anchorX = 0.5
        this.node.anchorY = 0.5
        let action = cc.sequence(
            cc.spawn(
                cc.scaleTo(0.2, 0, 1),
                cc.skewTo(0.2, 0, 20),
            ),
            cc.callFunc(() => {
                this.SetVal(value);
                this.node.skewY = -20;
            }),
            cc.spawn(
                cc.scaleTo(0.2, 1, 1),
                cc.skewTo(0.2, 0, 0)
            ),
        );
        this.node.runAction(action);
    }

    Show() {
        this.node.active = true;
        this.fguiComponent.visible = true;
        if (this.ui_val) {
            this.ui_val.visible = true;
            this.ui_val.node.active = true;
        }
    }

    Hide() {
        this.node.active = false;
        this.fguiComponent.visible = false;
    }
}
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { TexasCollectList } from "./CareerNetDataStruct";

/**@description 我的牌普 item */
export default class CardInfoItem extends fgui.GComponent {
    public dataInfo: TexasCollectList = null;
    private selectBtn: fgui.GButton;
    private txtWin: fgui.GTextField;
    private cardLoader0: fgui.GLoader;
    private cardLoader1: fgui.GLoader;
    private cardLoader2: fgui.GLoader;
    private cardLoader3: fgui.GLoader;
    private cardLoader4: fgui.GLoader;
    private cardLoader5: fgui.GLoader;
    private cardLoader6: fgui.GLoader;
    private winController: fgui.Controller;
    private typeController: fgui.Controller;
    private editController: fgui.Controller;
    protected onConstruct() {
        this.selectBtn = this.getChild("n2").asButton;
        this.cardLoader0 = this.getChild("n6").asLoader;
        this.cardLoader1 = this.getChild("n7").asLoader;
        this.cardLoader2 = this.getChild("n8").asLoader;
        this.cardLoader3 = this.getChild("n9").asLoader;
        this.cardLoader4 = this.getChild("n10").asLoader;
        this.cardLoader5 = this.getChild("n11").asLoader;
        this.cardLoader6 = this.getChild("n12").asLoader;
        this.txtWin = this.getChild("n3").asTextField;

        this.cardLoader0.url = "ui://Lobby/101_1";
        this.cardLoader1.url = "ui://Lobby/102_1";
        this.cardLoader2.url = "ui://Lobby/103_1";
        this.cardLoader3.url = "ui://Lobby/104_1";
        this.cardLoader4.url = "ui://Lobby/105_1";
        this.cardLoader5.url = "ui://Lobby/106_1";
        this.cardLoader6.url = "ui://Lobby/107_1";

        this.selectBtn.onClick(this.selectCard, this);
        this.winController = this.getController("win");
        this.typeController = this.getController("type");
        this.editController = this.getController("edit");
    }

    public setData(data: number[], OwnWin: number) {
        for (let i = 0; i < 7; i++) {
            // console.error(`ui://Lobby/${data[i]}_1`);
            this["cardLoader" + i].url = `ui://Lobby/${data[i]}_1`;
        }
        let num = UIUtil.formatNumber100(OwnWin);
        this.txtWin.text = num > 0 ? "+" + num : num + "";
        this.winController.setSelectedIndex(OwnWin > 0 ? 1 : 0);
    }

    public isDelect: boolean = false;

    public selectCard() {
        this.isDelect = !this.isDelect;
        this.setTypeCon(this.isDelect ? 1 : 0);
    }
    public setTypeCon(type: number) {
        this.typeController.setSelectedIndex(type);
    }
    public setEditCon(index: number) {
        this.editController.setSelectedIndex(index);
    }
}
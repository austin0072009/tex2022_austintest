import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { PropInfo } from "../LobbyNetData";
import LobbyViewCtr from "../LobbyViewCtr";


export class MyKnapsackItem extends fgui.GComponent {
    private typename: fgui.GTextField;
    private btn_exchange: fgui.GButton;
    private btn_use: fgui.GButton;
    private bgController: fgui.Controller;
    private descText: fgui.GRichTextField;
    private descGroup: fgui.GGroup;
    private isUse: fgui.Controller;
    private PropID: number;
    private imgUrl: string;
    private iconLoader: fgui.GLoader;
    private count: number;
    /** 0:金币  1:头像框 */
    private PropType: number;

    protected onConstruct() {
        this.typename = this.getChild("typename").asTextField;
        this.btn_exchange = this.getChild("btn_exchange").asButton;
        this.btn_use = this.getChild("btn_use").asButton;
        this.bgController = this.getController("bg");
        this.descGroup = this.getChild("n10").asGroup;
        this.descText = this.getChild("desc").asRichTextField;
        this.isUse = this.getController("isuse");
        this.btn_exchange.onClick(this.exchange, this);
        this.btn_use.onClick(this.useProp, this);
        this.iconLoader = this.getChild("iconLoader").asLoader;
    }
    public setData(data: PropInfo) {
        console.log("data PropInfo == ", data);
        // if (data.PropName == "")
        this.PropType = data.PropType;
        this.count = data.PropCount;
        this.typename.text = data.PropName + "*" + data.PropCount;
        this.descText.text = data.Desc;
        this.isUse.setSelectedIndex(data.UseType);
        this.PropID = data.PropID;
        UIUtil.loadShopImage(this.iconLoader, data.ImgUrl);
        this.imgUrl = data.ImgUrl;
        switch (data.PropID) {
            case 10008:
                this.bgController.setSelectedIndex(0);
                break;
            case 10009:
                this.bgController.setSelectedIndex(2);
                break;
            case 10010:
                this.bgController.setSelectedIndex(3);
                break;
            default:
                this.bgController.setSelectedIndex(1);
                break;
        }
    }

    public showDesc() {
        this.descGroup.visible = !this.descGroup.visible;
    }
    /**兑换 */
    public exchange(event: fgui.Event) {
        event.bubbles = false;
        AudioManager.Singleton.play('MyKnapsackItem', "button");
        if (this.PropType == 0) {
            // LobbyViewCtr.instance.cs_useprop(this.PropID, this.count, true);
            LobbyViewCtr.instance.cs_useprop(this.PropID, 1, true);
        } else {
            LobbyViewCtr.instance.cs_useprop(this.PropID, 1, true);
        }
    }
    /**使用 */
    public useProp(event: fgui.Event) {
        event.bubbles = false;
        AudioManager.Singleton.play('MyKnapsackItem', "button");
        if (this.PropType == 1) {
            if (AppConst.mPlayerModel["headIcos"].indexOf(this.imgUrl) == -1) {
                AppConst.mPlayerModel["headIcos"].push(this.imgUrl);
            }

        }
        LobbyViewCtr.instance.cs_useprop(this.PropID, 1, false);
    }

}
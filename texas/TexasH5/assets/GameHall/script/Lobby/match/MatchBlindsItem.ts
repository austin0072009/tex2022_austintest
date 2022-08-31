import { TexasLeveInfo } from "../LobbyNetData";

/**
 * @description 賽事盲注表信息 item
 */
export default class MatchBlindsItem extends fgui.GButton {
    /**等级*/
    private level: fgui.GTextField;
    /**小盲 */
    private small: fgui.GTextField;
    /**大盲 */
    private big: fgui.GTextField;
    /**前注 */
    private ante: fgui.GComponent;
    protected onConstruct() {
        this.level = this.getChild("level").asTextField;
        this.small = this.getChild("small").asTextField;
        this.big = this.getChild("big").asTextField;
        this.ante = this.getChild("ante").asCom;
    }
    /**设置数据 */
    public setData(data: TexasLeveInfo) {
        this.level.text = data.level + '';
        this.small.text = data.basegamble + '';
        this.big.text = data.Maxblind + '';
        this.ante.text = data.pregamble + '';
    }


}
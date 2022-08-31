import { RankInfo } from "../LobbyNetData";

/**
 * @description 賽事玩家信息 item
 */
export default class MatchPlayInfoItem extends fgui.GButton {
    /**玩家的计分 */
    private playintegral: fgui.GTextField;
    /**玩家的昵称 */
    private playName: fgui.GTextField;
    /**玩家的排名 */
    private playranking: fgui.GTextField;
    private levelController: fgui.Controller;
    protected onConstruct() {
        this.playintegral = this.getChild("playintegral").asTextField;
        this.playName = this.getChild("playName").asTextField;
        this.playranking = this.getChild("playranking").asTextField;
        this.levelController = this.getController("c1");
    }
    /**设置数据 */
    public setData(index: number, data: RankInfo) {
        if (index < 3) {
            this.levelController.setSelectedIndex(index + 1);
        } else {
            this.levelController.setSelectedIndex(0);
        }
        this.playranking.text = data.rank + '';
        this.playName.text = data.name;
        this.playintegral.text = data.score + '';
    }


}
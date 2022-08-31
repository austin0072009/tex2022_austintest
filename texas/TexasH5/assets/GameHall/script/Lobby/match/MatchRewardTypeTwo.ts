/**
 * @description 賽事奖励信息 2  item
 */
export default class MatchRewardTypeTwo extends fgui.GButton {
    /**名次 */
    private ranking: fgui.GTextField;
    /**奖池奖金 */
    private bonus: fgui.GTextField;
    private typeController: fgui.Controller;

    protected onConstruct() {
        this.ranking = this.getChild("n6").asTextField;
        this.bonus = this.getChild("n5").asTextField;
        this.typeController = this.getController("c1");

        this.ranking._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.bonus._label.cacheMode = cc.Label.CacheMode.CHAR;
    }
    /**设置数据 */
    public setData(index: number, data, jack: number) {
        if (index < 3) {
            this.typeController.setSelectedIndex(index + 1);
        } else {
            this.typeController.setSelectedIndex(0);
        }
        this.ranking.text = (index + 1) + '';
        this.bonus.text = data[0].num + '';
    }


}
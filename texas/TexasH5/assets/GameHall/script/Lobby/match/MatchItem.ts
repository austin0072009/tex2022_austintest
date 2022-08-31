import { CompeteInfo } from "../LobbyNetData";

/**
 * @description 賽事 item
 */
export default class MatchItem extends fgui.GButton {
    /**赛事名字 */
    private matchName: fgui.GTextField;
    /**赛事的状态 */
    private matchState: fgui.GTextField;

    /**赛事的奖金 */
    private jackpotNum: fgui.GTextField;

    /**参赛人数 */
    private enrollPlayNum: fgui.GTextField;

    private year: fgui.GTextField;
    /**报名时间 */
    private enrollTime: fgui.GTextField;
    /**自己是否报名 */
    private signup: fgui.GImage;

    /**赛事数据 */
    public data: CompeteInfo;

    /**报名费 */
    private free: fgui.GTextField;

    /**颜色controller */
    private colorController: fgui.Controller;

    protected onConstruct() {
        this.matchName = this.getChild("name").asTextField;
        this.jackpotNum = this.getChild("jack").asTextField;
        this.enrollPlayNum = this.getChild("playNum").asTextField;
        this.matchState = this.getChild("state").asTextField;
        this.year = this.getChild("year").asTextField;
        this.enrollTime = this.getChild("time").asTextField;
        this.free = this.getChild("free").asTextField;

        this.signup = this.getChild("signup").asImage;
        this.colorController = this.getController("color");
    }
    /**设置数据 */
    public setData(data: CompeteInfo) {
        this.data = data;
        let str = data.StartTime.split(" ");
        this.year.text = str[0].slice(str[0].indexOf("-") + 1);
        this.enrollTime.text = str[1].slice(0, str[1].lastIndexOf(":"));
        this.jackpotNum.text = "¥" + this.toThousands(data.prizepool);
        this.enrollPlayNum.text = `${data.signupcount}/${data.maxcount}`;
        this.matchName.text = data.name;
        this.free.text = `${data.free[0].name}*${data.free[0].num}`;

        this.signup.visible = data.IsSignup;

        if (!data.cansignup) {
            if (Date.now() < new Date(data.SignupTime).getTime()) { //报名未开始
                this.matchState.text = '報名未開始';
            } else {
                this.matchState.text = '報名結束';
            }
        } else {
            this.matchState.text = '報名中';
        }
    }
    public toThousands(nums) {
        let num = (nums || 0).toString();
        let result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) { result = num + result; }
        return result;
    }

}
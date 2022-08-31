import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { tasklist } from "../LobbyNetData";
import LobbyViewCtr from "../LobbyViewCtr";


export default class WelfareQuestItem extends fgui.GButton {
    /**完成奖励的金额 */
    private gold: fgui.GTextField;
    /**任务的标题 */
    private rwTitle: fgui.GTextField;
    /**任务的详情 */
    private desc: fgui.GTextField;
    /**领取 */
    private btn_Collect: fgui.GButton;
    /**去完成 */
    private btn_complete: fgui.GButton;
    private typeController: fgui.Controller;

    private imageLoader: fgui.GLoader;
    /**任务编号 */
    public taskid: number;
    public tname: string;

    protected onConstruct() {
        this.gold = this.getChild("gold").asTextField;
        this.rwTitle = this.getChild("title").asTextField;
        this.desc = this.getChild("desc").asTextField;
        this.btn_Collect = this.getChild("btn_Collect").asButton;
        this.btn_complete = this.getChild("btn_complete").asButton;
        this.btn_Collect.onClick(this.collect, this);
        this.btn_complete.onClick(this.goComplete, this);
        this.typeController = this.getController("type");
        this.imageLoader = this.getChild("n0").asLoader;

        this.gold._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.rwTitle._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.desc._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.btn_Collect.getTextField()._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.btn_complete.getTextField()._label.cacheMode = cc.Label.CacheMode.CHAR;

    }

    /**领取 */
    public collect(event: fgui.Event) {
        event.bubbles = false;
        AudioManager.Singleton.play('WelfareQuestItem', "button");
        LobbyViewCtr.instance.cs_award(this.taskid);
    }
    /**去完成 */
    public goComplete(event: fgui.Event) {
        event.bubbles = false;
        AudioManager.Singleton.play('WelfareQuestItem', "button");
        let view = LobbyViewCtr.instance.view;
        view.welfareView && view.welfareView.Hide();
        if (this.tname.indexOf("设置") != -1 || this.tname.indexOf("更换") != -1) {
            view.showMyinfoView(); //设置
        } else if (this.tname.indexOf("充值") != -1) {
            view.showTopup(); //设置
        } else if (this.tname.indexOf("德州扑克") != -1) {
            view.barController.selectedIndex = 3;
        } else {
            view.barController.selectedIndex = 5;
            view.entertainmentView.Show();
        }
    }

    /**设置数据 */
    public setData(data: tasklist) {
        this.taskid = data.taskid;
        this.rwTitle.text = data.name; //任务名字
        this.tname = data.name;
        if (data.name.indexOf("签到") == -1) {
            this.desc.text = `${data.remark}(${data.current}/${data.total})`;  //任务描述
        } else {
            this.desc.text = `${data.remark}`;  //任务描述
        }
        if (data.pic) {
            UIUtil.loadShopImage(this.imageLoader, data.pic);
        }

        if (data.iscomplate) {
            if (data.isaward) {
                this.typeController.setSelectedIndex(2);
            } else {
                this.typeController.setSelectedIndex(1);
            }
        } else {
            this.typeController.setSelectedIndex(0);
        }
        for (let i = 0; i < data.prizes.length; i++) {
            // if (data.prizes[i].type == 1) {
            //     this.gold.text = data.prizes[0].num + '';
            // } else if (data.prizes[i].type == 2) {
            //     this.gold.text = data.prizes[0].num * 1000 + '';
            // } else if (data.prizes[i].type == 3) {
            //     this.gold.text = data.prizes[0].num * 500 + '';
            // } else if (data.prizes[i].type == 4) {
            //     this.gold.text = data.prizes[0].num * 400 + '';
            // } else if (data.prizes[i].type == 5) {
            //     this.gold.text = data.prizes[0].num * 300 + '';
            // } else if (data.prizes[i].type == 6) {
            //     this.gold.text = data.prizes[0].num * 200 + '';
            // } else {
            this.gold.text = data.prizes[0].name + '';
            //}
        }
    }
}
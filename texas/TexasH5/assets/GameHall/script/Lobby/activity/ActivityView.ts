import { AudioManager } from '../../../../Script/BaseFrame/AudioManager';
import { CommonCtr } from '../../../../Script/BaseFrame/CommonCtr';
import { BaseFrameNative } from '../../../../Script/BaseFrameNative';
import HttpHelpEx from '../../../../Script/Common/Managers/HttpHelpEx';
import { UIUtil } from '../../../../Script/Common/UIUtil';
import { AppConst } from '../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst';
import LobbyViewCtr from '../LobbyViewCtr';
/**
 * @description 活动
 */
export default class ActivityView extends fgui.GComponent {
    private Activitylist: fgui.GList = null;

    private ACListData: any[] = [];

    protected onConstruct() {
        this.Activitylist = this.getChild("Activitylist").asList;
        this.Activitylist.itemRenderer = this.renderACList.bind(this);
    }

    public onClickItem(data: any) {
        AudioManager.Singleton.play('ActivityView', "button");
        LobbyViewCtr.instance.view.showactivityDetails(data);
    }

    public Show() {
        this.visible = true;
        this.getListData();
    }
    public Hide() {
        this.visible = false;
    }

    private getListData() {
        this.Activitylist.numItems = 0;
        let url = "http://182.61.6.67:82" + "/api/Game/ActivityList";//BaseFrameNative.serverlistItem.apiAdress +
        let params = {
            pageindex: 0,
            pagesize: 0,
            userid: AppConst.mPlayerModel.userid,
            datestring: "",
        }
        HttpHelpEx.instance.post(url, params,
            {
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                }
            }
        ).then((res) => {
            console.log("---ActivityList---", res);
            if (res.data != null) {
                this.ACListData = res.data;
                this.Activitylist.numItems = this.ACListData.length;
                // acContent: "测试1111111111"
                // acTitle: "测试1"
                // acType: 1
                // backField: "0"
                // creatTime: "2021-11-08T15:33:55"
                // endTime: "2021-11-13T00:00:00"
                // gType: 0
                // height: 1400
                // id: 1
                // isDel: false
                // isEnble: true
                // picUrl: null
                // startTime: "2021-11-11T00:00:00"
                // theight: 150
                // title: "测试"
                // titleContent: "测试1"
                // titleUrl: "/fordlc/wechat/202111081533553071.png"
                // twidth: 1000
                // type: 0
                // userIds: null
                // webUrl: null
                // width: 1000
            } else {
                CommonCtr.instance.view.ShowTipLabel("獲取活動數據失敗！");
            }
        }).catch((err) => {
            console.log("---err---", err)
            CommonCtr.instance.view.ShowTipLabel("獲取活動數據失敗！");
        });
    }

    public renderACList(index: number, item: fgui.GObject) {
        let go = <fgui.GButton>item;
        let itemData = this.ACListData[index];
        //acType = 1:文字，2圖片
        if (itemData.acType == 1) {
            go.getController("acType").setSelectedIndex(1);
            go.getChild("acImg").asLoader.url = "http://182.61.6.67:81" + itemData.titleUrl;
            go.getChild("acTitle").asTextField.text = itemData.title;
            go.getChild("acCountent").asTextField.text = itemData.titleContent;
            go.getChild("acStartTime").asTextField.text = "開始時間：" + itemData.startTime;
            go.getChild("acEndTime").asTextField.text = "結束時間：" + itemData.endTime;
        } else if (itemData.acType == 2) {
            go.getController("acType").setSelectedIndex(0);
            go.getChild("acCImg").asLoader.url = "http://182.61.6.67:81" + itemData.titleUrl;
        }
        go.clearClick();
        go.onClick(() => {
            this.onClickItem(itemData);
        });
    }
}
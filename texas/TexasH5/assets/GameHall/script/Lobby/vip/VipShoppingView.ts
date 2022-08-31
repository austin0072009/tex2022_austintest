import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description vip 商城
 * 
 */
export default class VipShoppingView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "vipShopping";
    }

    private ui_btn_shoppingBreak: fgui.GButton = null;
    /**兑换记录 */
    private ui_btn_exchangLog: fgui.GButton = null;
    /**设置地址 */
    private ui_btn_setAddress: fgui.GButton = null;
    /**当前的积分 */
    private ui_nowNumTip: fgui.GTextField = null;
    /**原价的积分 */
    private ui_nowintegral: fgui.GTextField = null;
    /**当前折扣 */
    private ui_nowdiscount: fgui.GTextField = null;
    /**下拉 */
    private ui_btn_goods: fgui.GComboBox = null;
    /**物品列表 */
    private ui_goodsList: fgui.GList = null;

    private ui_btn_exchange: fgui.GButton = null;



    private ui_stips: fgui.GComponent = null;
    private ui_btn_tipqx: fgui.GButton = null;
    private ui_btn_tipqr: fgui.GButton = null;
    /**积分 */
    private ui_integralNum: fgui.GTextField = null;
    /**物品名 */
    private ui_goodsName: fgui.GTextField = null;
    /**订单号 */
    private ui_orderNum: fgui.GTextField = null;

    private tipController: fgui.Controller;

    private goodsConfig: { name: string, type: number, imgPic: string, integral: number }[] = []

    /**物品数据 */
    private goodsListData: { name: string, type: number, imgPic: string, integral: number }[] = [];
    private selectGoods;

    /**收货地址 */
    public address: string;
    public addressInfo: { address: string, userId: number, id: number };
    /**当前折扣 */
    private discount: number;


    private ui_vipshopping: fgui.GLoader = null;
    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_shoppingBreak.onClick(this.Hide, this);
        this.ui_btn_exchangLog.onClick(this.showExchangeLog, this);
        this.ui_btn_setAddress.onClick(this.showSetAddress, this);
        this.ui_btn_exchange.onClick(this.exchangeGoods, this);

        this.ui_goodsList.setVirtual();
        this.ui_goodsList.itemRenderer = this.renderListItem.bind(this);
        this.ui_goodsList.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);

        this.ui_btn_goods.on(fgui.Event.STATUS_CHANGED, this.onChanged, this);

        this.goodsListData = this.goodsConfig.slice(0);
        this.ui_goodsList.numItems = this.goodsListData.length;

        this.tipController = this.ui_stips.getController("c1");

        this.ui_btn_tipqx.onClick(this.colseTip, this);
        this.ui_btn_tipqr.onClick(this.qrExchange, this);

        // NativeMethod.setUrlByLanguage(this.ui_vipshopping["_contentItem"].name, this.ui_vipshopping);
    }
    OnLoadCompleted() {
        this.GetaddressInfo();
        this.Show();
    }

    public renderListItem(index: number, obj: fgui.GObject) {
        let item = <fgui.GButton>obj;
        let name = item.getChild("name").asTextField;  //物品名
        let discount = item.getChild("discount").asTextField; //折扣
        let oldSoucre = item.getChild("oldSoucre").asTextField; //原价
        let nowSoucre = item.getChild("nowSoucre").asTextField;  // 现价
        if (this.discount == 0) {
            discount.visible = false;
        } else {
            discount.visible = true;
            discount.setVar("zk", this.discount + "折").flushVars();
        }
        oldSoucre.setVar("jf", this.goodsListData[index].integral + '').flushVars();
        let nowScore = this.goodsListData[index].integral * (this.discount == 0 ? 1 : this.discount * 0.1);
        nowSoucre.setVar("zf", nowScore.toFixed(0)).flushVars();

        let goodsLoader = item.getChild("goodsLoader").asLoader;//商品的loader

        name.text = this.goodsListData[index].name;

        item.name = index + '';
        UIUtil.loadShopImage(goodsLoader, this.goodsListData[index].imgPic);
    }



    public onClickItem(item: fgui.GButton) {
        this.selectGoods = item.name;
    }

    /**下拉状态改变 */
    public onChanged() {
        this.ui_goodsList.selectNone();
        this.selectGoods = null;
        let index = this.ui_btn_goods.selectedIndex;
        this.goodsListData = [];
        cc.log("数据--------------", this.goodsConfig)
        if (index == 0) { //全部
            this.goodsListData = this.goodsConfig.slice(0);
        } else if (index == 1) { //游戏
            for (let i = 0; i < this.goodsConfig.length; i++) {
                if (this.goodsConfig[i].type == 0) {
                    this.goodsListData.push(this.goodsConfig[i]);
                }
            }
        } else if (index == 2) {//实物
            for (let i = 0; i < this.goodsConfig.length; i++) {
                if (this.goodsConfig[i].type == 1) {
                    this.goodsListData.push(this.goodsConfig[i]);
                }
            }
        }
        this.ui_goodsList.numItems = this.goodsListData.length;
    }



    public showExchangeLog() {
        LobbyViewCtr.instance.view.showVipExchangeLogView();
    }
    public showSetAddress() {
        LobbyViewCtr.instance.view.showVipExidAdressView();
    }

    Hide() {
        AudioManager.Singleton.play('VipShoppingView', "button");
        super.Hide();
    }


    public handleData() {
        let model = LobbyViewCtr.instance.Model;
        this.ui_nowintegral.setVar("integral", model.vipInfo.currScore + '').flushVars();
        let vipConfig = model.vipConfig;
        let lv = model.vipLevel;
        this.discount = vipConfig.Discount[lv];
        if (this.discount == 0) {
            this.ui_nowdiscount.setVar("zk", '无').flushVars();
        } else {
            this.ui_nowdiscount.setVar("zk", this.discount + '折').flushVars();
        }

    }
    public Show() {
        super.Show();
        this.ui_goodsList.selectNone();
        this.selectGoods = null;
        this.handleData();
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetitemmanagerInfo";
        HttpHelpEx.instance.get(url)
            .then((res) => {
                cc.log("=================", res);
                if (res.code == 1) {
                    this.goodsConfig = res.data.data;
                    this.onChanged();
                } else {
                    CommonCtr.instance.ShowTipLabel("获取商品失败");
                }
            })
            .catch(() => {
                // CommonCtr.instance.ShowTipLabel("获取商品失败");
            })

    }
    private colseTip() {
        this.ui_stips.visible = false;
    }

    public qrExchange() {
        this.ui_stips.visible = false;
        if (this.tipController.selectedIndex == 0) {
            if (this.goodsListData[this.selectGoods].type == 0) {//游戲物品
                this.sendExchangeGoods();
            } else { //實物 要填寫地址
                if (this.address) {
                    //跳確認地址
                    LobbyViewCtr.instance.view.showVipConfirmAdressView();
                    //跳确认订单
                    // LobbyViewCtr.instance.view.showVipConfirmOrderView();
                } else {
                    //跳編輯地址
                    LobbyViewCtr.instance.view.showVipExidAdressView();
                }
            }
        }

    }

    public setTipData() {
        let nowScore = this.goodsListData[this.selectGoods].integral * (this.discount == 0 ? 1 : this.discount * 0.1);
        this.ui_nowNumTip.setVar("yj", nowScore.toFixed(0)).flushVars();
        this.ui_integralNum.setVar("jf", this.goodsListData[this.selectGoods].integral + '').flushVars();
        this.ui_goodsName.setVar("name", this.goodsListData[this.selectGoods].name).flushVars();
    }

    /**获取当前选择的物品信息 */
    public getSelectInfo() {
        return { info: this.goodsListData[this.selectGoods], address: this.address };
    }

    /**兑换物品 */
    public exchangeGoods() {
        if (this.selectGoods >= 0 && this.selectGoods != null) {
            let currScore = LobbyViewCtr.instance.Model.vipInfo.currScore;
            let nowScore = this.goodsListData[this.selectGoods].integral * (this.discount == 0 ? 1 : this.discount * 0.1);
            nowScore = +nowScore.toFixed(0);
            console.log("currScore == ", currScore);
            console.log("nowScore == ", nowScore);
            if (currScore < nowScore) {
                this.tipController.setSelectedIndex(1);
                this.ui_stips.visible = true;
                return;
            }
            this.tipController.setSelectedIndex(0);
            this.setTipData();
            this.ui_stips.visible = true;
        } else {
            CommonCtr.instance.ShowTipLabel("請選擇兌換的物品");
        }
    }

    /**发送兑换 */
    public sendExchangeGoods() {
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Additemorderlog";
        let params = {
            UserId: AppConst.mPlayerModel.userid,
            Viplevel: LobbyViewCtr.instance.Model.vipLevel,
            UserName: AppConst.mPlayerModel._n,
            scores: LobbyViewCtr.instance.Model.vipInfo.currScore,
            ItemName: this.goodsListData[this.selectGoods].name,
            ItemScores: this.goodsListData[this.selectGoods].integral,
            Type: this.goodsListData[this.selectGoods].type,
            Address: this.address,
        }
        fgui.GRoot.inst.showModalWait();
        HttpHelpEx.instance.post(url, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
            .then((response) => {
                cc.log("-----------兌換---", response)
                fgui.GRoot.inst.closeModalWait();
                if (response.code == 1) {
                    CommonCtr.instance.ShowTipLabel(response.message);
                    LobbyViewCtr.instance.Model.vipInfo.currScore -= this.goodsListData[this.selectGoods].integral * (this.discount == 0 ? 1 : this.discount / 10)
                    let nowscore = LobbyViewCtr.instance.Model.vipInfo.currScore.toFixed(0);
                    this.ui_nowintegral.setVar("integral", nowscore).flushVars();
                    if (LobbyViewCtr.instance.view.myVipPrivilegeView) {
                        LobbyViewCtr.instance.view.myVipPrivilegeView.handleData();
                    }
                    if (LobbyViewCtr.instance.view.vipConfirmOrderView) {
                        LobbyViewCtr.instance.view.vipConfirmOrderView.showTip(response.data[0]);
                    }
                } else {
                    CommonCtr.instance.ShowTipLabel(response.message);
                }

            })
            .catch((err) => {
                console.log("---catch---", err);
                fgui.GRoot.inst.closeModalWait();
                CommonCtr.instance.ShowTipLabel("兌換失敗");
            })
    }

    /**獲取收穫地址 */
    public GetaddressInfo() {
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetaddressInfo" + `?userid=${AppConst.mPlayerModel.userid}`;
        HttpHelpEx.instance.get(url)
            .then((res) => {
                cc.log("========收货地址==========", res);
                if (res.code == 1) {
                    this.addressInfo = res.data;
                    if (res.data != "") {
                        this.address = res.data.address;
                        LobbyViewCtr.instance.Model.vipAddress = res.data.address;
                    }
                }
            })
            .catch(() => {

            })
    }


}
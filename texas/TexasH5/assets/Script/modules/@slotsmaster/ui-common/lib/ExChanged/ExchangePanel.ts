/*
 * @Description:
 * @Author: 张菊
 * @Date: 2020-06-01 17:30:18
 * @LastEditTime: 2020-07-13 15:26:04
 * @LastEditors: 张菊
 */

import { Popup } from "../Popup";
import { AppConst } from "../AppConst";
import HttpApi, { Http_GetRedeem } from "../HttpApi";
import { Utils } from "../../../../@mogafa/utils/lib/Utils";

export default class ExchangePanel extends Popup {
    protected get basePanel(): string {
        return "base";
    }
    protected get animNode(): cc.Node[] {
        throw new Error("Method not implemented.");
    }
    protected get buttonOKName(): string {
        return "closeButton";
    }
    protected get goldGrowName(): string[] {
        throw new Error("Method not implemented.");
    }
    protected get normalNumName(): string[] {
        throw new Error("Method not implemented.");
    }
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Exchange";
    }
    protected get componentName(): string {
        return "MainView";
    }
    get closeTime(): number {
        return -1;
    }
    private _redeemList = null;
    private _backGroundSpineName: string = "GameHall/Spine/spine_ui_popup/spine_ui_popup";
    private _backGroundSpine: sp.Skeleton;
    allChildCreated() {
        super.allChildCreated();
    }
    protected async createChildComponents() {
        super.createChildComponents();
        this.initSpine();
    }
    private initSpine(): void {
        Utils.addSpine(
            this._backGroundSpineName,
            this._base.getChild("backGroundSpine").node,
            (backGroundSpine: sp.Skeleton) => {
                this._backGroundSpine = backGroundSpine;
                backGroundSpine.setCompleteListener((trackEntry: any, loopCount: number) => {
                    var animName: string = trackEntry.animation ? trackEntry.animation.name : "";
                    if (animName == "Popup") {
                        backGroundSpine.setAnimation(0, "loop", true);
                    }
                });
            }
        );
    }
    private initData(callBack: Function): void {
        this.node.emit(AppConst.IsShowLoading);
        HttpApi.http
            .get(HttpApi.server + Http_GetRedeem, {
                headers: {
                    // 'Content-Type': "application/json",
                    Authorization: AppConst.accessToken,
                },
            })
            .then(
                (res: any) => {
                    console.log(res);
                    if (res.code == 200) {
                        this._redeemList = res.data;
                        console.log("initDatainitData:", this._redeemList);
                        this.node.emit(AppConst.IsShowLoading, false);
                        callBack();
                    }
                },
                (err) => {
                    console.log("err", JSON.stringify(err));
                    this.node.emit(AppConst.IsShowLoading, false);
                }
            )
            .catch((err) => {
                console.log("catch", JSON.stringify(err));
                this.node.emit(AppConst.IsShowLoading, false);
            });
    }
    private initShow(): void {
        for (let index = 0; index < 4; index++) {
            let data = this._redeemList.cardRedeemInfoList[index];
            let item = this._base.getChild(index.toString()).asCom;
            item.getChild("exChangeButton").asButton.onClick(this.exChangeClick, this);
            item.getChild("exChangeButton")._id = (3 - index).toString();

            item.getChild("detailsButton").asButton.onClick(this.goToCardPanel, this);
            item.getChild("detailsButton")._id = (3 - index).toString();

            item.getChild("icon").asLoader.url = data.info.collectionIconUrl;
            item.getChild("cardImage").asLoader.url = data.info.redeemItemIconUrl;

            item.getChild("rewardCount").asLabel.text = "$" + data.info.redeemRewards.toString();
            item.getChild("rewardCount1").asLabel.text = "$" + data.info.redeemRewards;
            if (index == 3) {
                item.getChild("describe").asLabel.text = "Collect this card";
            }
            item.getChild("num").asLabel.text = data.info.collectedValue + "/" + data.info.expiredValue;
        }
        let item = this._base.getChild("4").asCom;
        item.getChild("exChangeButton").asButton.onClick(this.exChangeClick, this);
        item.getChild("exChangeButton")._id = "4";
        item.getChild("icon").asLoader.url = this._redeemList.points.collectionIconUrl;
        item.getChild("cardImage").asLoader.url = this._redeemList.points.redeemItemIconUrl;
        item.getChild("describe").asLabel.text = this._redeemList.points.description;
        item.getChild("rewardCount").asLabel.text = this._redeemList.points.redeemRewards.toString();
        item.getChild("rewardCount1").asLabel.text = this._redeemList.points.redeemRewards;
        item.getChild("num").asLabel.text =
            this._redeemList.points.collectedValue + "/" + this._redeemList.points.expiredValue;
    }
    private exChangeClick(event: any): void {
        //请求服务器是否可以兑换  成功跳转第三方网页 失败 弹框提示
        this.onButtonClickMusic();
        let _id = parseInt(event.initiator.id);
    }
    private goToCardPanel(event: any): void {
        this.onButtonClickMusic();
        //跳转到对应卡组
        let _id = parseInt(event.initiator.id);
        this.node.emit("SHOWCARD", _id);
        this.hide();
    }
    hide(): void {
        super.hide();
    }
    showPanel(): void {
        this._base.getChild("allChildren").visible = false;
        let self = this;
        this.initData(function () {
            self.show();
            self._backGroundSpine.setAnimation(0, "Popup", false);
            self.initShow();
            setTimeout(() => {
                self._base.getChild("allChildren").visible = true;
            }, 1000);
        });
    }
}

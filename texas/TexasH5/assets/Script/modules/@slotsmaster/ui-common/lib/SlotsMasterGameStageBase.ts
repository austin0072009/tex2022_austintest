
import SlotGameStageBase from "../../../@mogafa/slots/lib/GameStage/SlotGameStageBase";
import { AppConst } from "./AppConst";
import SpinResultsUpgrade from "../../../spin-result/SpinResultsUpgrade";
import SpinResultsCard from "../../../spin-result/SpinResultsCard";

//import { CardGet } from "./Card/CardGet";
export default abstract class SlotsMasterGameStageBase extends SlotGameStageBase {

    private _adName: string;
    protected get adName(): string {
        return this._adName;
    }
    protected set adName(value: string) {
        this._adName = value;
    }

    createChildComponents(): void {
        //this._adPanel = this.addFguiComponent(AdBalloon);
        //this._cardView = this.addFguiComponent(CardGet);
        //this.$message = this.addFguiComponent(Message);
    }

    allChildCreated(): void {
        super.allChildCreated();
        this.scheduleOnce(() => {
            this.showPlane();
        }, 1);
    }

    /**
     * 周期性加载飞机广告
     */
    private scheduleShowPlane(): void {
        this.scheduleOnce(this.showPlane, 5);
    }

    /**
     * 显示飞机
     */
    private showPlane(): void {
        //this._adPanel.balloonShow(this.setTopBarPermission.bind(this), 1);
    }

    /**
     * 允许设置顶部栏
     * @param data
     */
    private setTopBarPermission(data: any): void {
        this.scheduleShowPlane();
        if (data.type === 0) {
            this.setTopBarCoin(data.award);
        } else {
            this.setTopBarIntegral(data.award);
        }
    }

    /**
     * 设置顶部栏金币
     * @param coin
     */
    private setTopBarCoin(coin: number): void {
        this.topBar.setUserCoins(coin);
    }

    /**
     * 设置顶部栏积分
     * @param integral
     */
    private setTopBarIntegral(integral: number): void {
        this.topBar.setUserIntegral(integral);
    }

    protected bigWinShow(): void {
        //* 存在广告
        if (SlotGameStageBase.spinResults.bigWinAdAwards) {
            this.win.onAdButtonClick(this.watchAdClick.bind(this, this.adComplete.bind(this)));
        }
        // this.adName = AppConst.AD_POSITION.AD_BIG_WIN_DOUBLE;
        super.bigWinShow();
    }

    /**
     * 升级经验条增长完后的回调
     * @param upgrade
     */
    protected updateLevelCallback(upgrade: SpinResultsUpgrade): void {
        super.updateLevelCallback(upgrade);
        if (upgrade) {
            this.levelUp.onAdButtonClick(this.watchAdClick.bind(this, this.adComplete.bind(this)));
        }
    }

    /**
     * 广告看完后的回调
     */
    private adComplete(): void {
        cc.log("Ad has been played successfully");
        //todo 根据对应的广告Id获取对应的奖励
    }

    /**
     * 广告点击事件
     * @param callback
     */
    private watchAdClick(callback: Function): void {
        //跳转到广告  看完之后回调 然后关闭该界面

    }

    /**
     *获得卡片的时候调用
     * @param cardsData 卡片数据
     */
    protected cardViewShow(cardsData: SpinResultsCard[]): void {
        this.pauseSymbolBoard();
        // this._cardView.setData(cardsData, () => {
        //     this.continueSymbolBoard();
        // });
    }
}

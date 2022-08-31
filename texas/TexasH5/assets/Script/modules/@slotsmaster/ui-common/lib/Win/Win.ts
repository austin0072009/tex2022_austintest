

import { Coin } from "../Coin/Coin";
import { BigWinSpread } from "../Coin/BigWinSpread";
import WinSpine from "./WinSpine"; 
import { Popup } from "../Popup"; 
import RippleSpine from "../Ripple/RippleSpine";
import SoundMgr from "../../../../@mogafa/utils/lib/SoundMgr";
import { Integral } from "../Coin/Integral";
import { Utils } from "../../../../@mogafa/utils/lib/Utils";
import SpinResultsGameWheel from "../../../../spin-result/SpinResultsGameWheel";


enum WinType {
    BIG = 2,
    SUPER,
    MEGA,
}

const BIG_WIN_AD: string = "BIG_WIN_AD";

export class Win extends Popup {
    protected get basePanel(): string {
        return "";
    }
    protected get animNode(): cc.Node[] {
        throw new Error("Method not implemented.");
    }
    protected get buttonOKName(): string {
        return "";
    }
    protected get goldGrowName(): string[] {
        throw new Error("Method not implemented.");
    }
    protected get normalNumName(): string[] {
        throw new Error("Method not implemented.");
    }
    public _winUp: WinSpine;
    public _winDown: WinSpine;
    //* win up节点
    public _winUpNode: cc.Node;
    //* win down节点
    public _winDownNode: cc.Node;
    //* 收集按钮
    public _collectButton: fgui.GButton;
    //* 双别按钮
    public _doubleButton: fgui.GButton;
    //* 金币对象
    public _coin: fgui.GObject;
    //* 积分对象
    public _integral: fgui.GObject;
    //* win类型
    public _winType: number;
    //private bigWinTable: PublicTurnTable;
    public _gameWheel: SpinResultsGameWheel;
    //* 金币动画结束坐标
    public _coinEndPos: cc.Vec2;
    //* 积分动画结束坐标
    public _integralEndPos: cc.Vec2;
    //* 飞行金币数
    public _flyCoins: number = 100;
    //* 飞行积分数
    public _flyIntegrals: number = 20;
    //* 金币是否开始飞行
    public _isCoinFly: boolean = false;
    //* 奖励金币
    public _rewardCoins: number;
    //* 奖励积分
    public _rewardIntegral: number;
    //* 点击缓存
    public _clickBuffer: number = 0;
    //* 波纹节点
    public _rippleNode: cc.Node;
    //* 波纹spine
    public _rippleSpine: RippleSpine;
    //* 倒计时
    public _countdownText: fgui.GTextField;

    public _btnground: cc.Button;

    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "Win";
    }
    public get closeTime(): number {
        return -1;
    }
    public get coinEndPos(): cc.Vec2 {
        return this._coinEndPos;
    }
    public set coinEndPos(value: cc.Vec2) {
        this._coinEndPos = value;
    }
    public get integralEndPos(): cc.Vec2 {
        return this._integralEndPos;
    }
    public set integralEndPos(value: cc.Vec2) {
        this._integralEndPos = value;
    }
    public get isCoinFly(): boolean {
        return this._isCoinFly;
    }

    public set isCoinFly(value: boolean) {
        this._isCoinFly = value;
    }
    public _autoCloseCount: number = -1;
    public get autoCloseCount(): number {
        return this._autoCloseCount;
    }
    public set autoCloseCount(value: number) {
        this._autoCloseCount = value;
        if (this.autoCloseCount > 0) {
            this._countdownText.text = this.autoCloseCount + "";
        } else if (this.autoCloseCount === 0) {
            this.collectAward();
        } else {
            return;
        }
    }
    //* 倒计时
    public _countdown: number = -1;

    protected createChildComponents() {
        console.log("Win ======createChildComponents")
        super.createChildComponents();
        this.initChildComponents()
    }

    allChildCreated() {
        super.allChildCreated();
        //this.parent.addChild(this.bigWinTable);
        //this._collectButton.x+=180


    }

    public initChildComponents() {
        //* bigwin节点及spine
        this._winUpNode = this.fguiComponent.getChild("winUp").node;
        this._winDownNode = this.fguiComponent.getChild("winDown").node;
        this._winUpNode.zIndex = 90;
        this._winUp = new WinSpine(this._winUpNode);
        this.addChild(this._winUp);
        this._winDown = new WinSpine(this._winDownNode);
        this.addChild(this._winDown);
        //* 收集按钮
        this._collectButton = this.getChild("collectButton").asButton;
        this._collectButton.onClick(this.collectAward.bind(this));
        //* 双倍收集按钮
        this._doubleButton = this.getChild("doubleButton").asButton;
        this._doubleButton.onClick(this.adButtonClick.bind(this));
        //* 金币、积分文本
        this._coin = this.fguiComponent.getChild("winCoin");
        this._integral = this.fguiComponent.getChild("winIntegral");
        this._coin.node.zIndex = 99;
        this._integral.node.zIndex = 99;
        //* bigwin转盘
        //this.bigWinTable = this.addFguiComponent(PublicTurnTable);
        //* 金币、积分飞行动画终点
        //@ts-ignore
        this.coinEndPos = this.getChild("coin").node.position;
         //@ts-ignore
        this.integralEndPos = this.getChild("integral").node.position;
        //* 加载波纹节点、spine
        this._rippleNode = this.getChild("ripple").node;
        this._rippleNode.zIndex = 99;
        this._rippleSpine = new RippleSpine(this._rippleNode);
        this.addChild(this._rippleSpine);
        //* 倒计时文本
        this._countdownText = this.getChild("countdown").asTextField;
        this.toggleStaticUI(false);
    }

    /**
     * 收集奖励
     */
    public collectAward(): void {
        console.log("collectAward")
        SoundMgr.getInstance().playEffect("button");
        if (!this.isCoinFly && this._clickBuffer === 0) {
            // this.unschedule(this.executeCountdown);
            this.unscheduleAllCallbacks()
            this.resetBigWinSpread();
            this._countdownText.visible = false;
            this._clickBuffer++;
            this.isCoinFly = true;
            //* 金币飞行音效
            SoundMgr.getInstance().playEffect("frame_coins");
            this.stopWinAnimation();

        }
    }

    /**
     * 收集奖励
     */
    public collectAward2(): void {
        console.log("collectAward2")

        // this.unschedule(this.executeCountdown);
        this.unscheduleAllCallbacks()
        this.resetBigWinSpread();
        this._countdownText.visible = false;
        this._clickBuffer = 0;
        this.fguiComponent.node.off(cc.Node.EventType.TOUCH_END)
        if (this.winFinishedCallback) {
            this.winFinishedCallback(this._rewardCoins, this._rewardIntegral);
            this.winFinishedCallback = null;
        }
        this.stopWinAnimation();
        this.hide()

    }
    /**
     * 双倍收集奖励
     */
    public adButtonClick(): void {
        SoundMgr.getInstance().playEffect("button");
        this.node.emit(BIG_WIN_AD);
        // this.stopWinAnimation();
    }
    /**
     * 绑定广告按钮点击事件
     * @param listener
     */
    public onAdButtonClick(listener: Function): void {
        this.node.off(BIG_WIN_AD);
        this.node.on(BIG_WIN_AD, listener);
    }

    update(dt: number): void {
        if (this.isCoinFly) {
            if (this._rewardCoins && this._rewardCoins > 0 && this._flyCoins > 0) {
                this._flyCoins -= 2;
                this.coinFly();
                this._rippleSpine.ripple();
            } else if (this._rewardIntegral && this._rewardIntegral > 0 && this._flyIntegrals > 0) {
                this._flyIntegrals -= 2;
                this.integralFly();
            } else {
                this.isCoinFly = false;
                this.coinFlyCallback();
            }
        }
    }

    /**
     * 金币动画执行完毕回调
     */
    public coinFlyCallback(): void {
        if (this._clickBuffer > 1) {
            return;
        }
        this.scheduleOnce(() => {
            this._rippleSpine.closeRipple();
            //* 停止金币飞行音效
            SoundMgr.getInstance().stopEffect("frame_coins");
            this.hide();
            if (this.winFinishedCallback) {
                this.winFinishedCallback(this._rewardCoins, this._rewardIntegral);
                this.winFinishedCallback = null;
            }
        }, 1.2);
    }

    /**
     * 执行金币飞行动画
     */
    public coinFly(): void {
        let coin: Coin = this.addFguiComponent(Coin);
        coin.onAllChildCreated(() => {
            let startPos: cc.Vec2 = cc.v2(660 + Math.random() * 200, -500 - Math.random() * 100);
            coin.coinFly(startPos, this.coinEndPos);
        });
    }
    /**
     * 执行积分飞行动画
     */
    public integralFly(): void {
        let integral: Integral = this.addFguiComponent(Integral);
        integral.onAllChildCreated(() => {
            let startPos: cc.Vec2 = cc.v2(660 + Math.random() * 200, -650 - Math.random() * 100);
            integral.coinFly(startPos, this.integralEndPos);
        });
    }

    public winFinishedCallback: Function;

    /**
     * 弹出win框
     * @param WinType win框类型
     * @param coin 金币数
     * @param countdown 倒计时
     * @param gameWheel 游戏转盘数据
     * @param callback win框关闭后回调
     */
    public popUpWin(
        winType: number,
        coin: number,
        countdown: number,
        gameWheel?: SpinResultsGameWheel,
        callback?: Function
    ) {
        this.resetFly();
        this._rewardCoins = !isNaN(coin) ? coin : 0;
        // this._rewardIntegral = !isNaN(integral) ? integral : 0;
        this.winFinishedCallback = callback;
        this._gameWheel = gameWheel;
        this._winType = winType;
        this._countdown = countdown;
        this.autoCloseCount = this._countdown;
        this.show();
        this.fguiComponent.node.on(cc.Node.EventType.TOUCH_END, this.collectAward2, this)
        //* 获取到win框类型后执行spine动画
        switch (winType) {
            case WinType.BIG:
                this._winUp.bigWin();
                this._winDown.bigWinBg();
                break;
            case WinType.SUPER:
                this._winUp.superWin();
                this._winDown.superWinBg();
                break;
            case WinType.MEGA:
                this._winUp.megaWin();
                this._winDown.megaWinBg();
                break;
            default:
                this._winUp.bigWin();
                this._winDown.bigWinBg();
                break;
        }
        this.scheduleOnce(() => {
            //* 播放win框背景音效
            SoundMgr.getInstance().playEffect("big_win");
            this.showCoin(coin);
            this._collectButton.visible = true;
            this.countdown();

        }, 0.6);
        //* 延时展示按钮
        //this.scheduleOnce(() => {
        //this._collectButton.visible = true;
        //this._doubleButton.visible = true;
        // this._countdownText.visible = true;
        //this.countdown();
        //}, 2);
    }

    /**
     * 倒计时
     */
    public countdown(): void {
        if (this._countdown < 0) {
            return;
        }
        this.schedule(this.executeCountdown.bind(this), 1, this._countdown);
    }

    /**
     * 执行倒计时
     */
    public executeCountdown(): void {
        this.autoCloseCount--;
    }

    /**
     * 金币展示
     * @param coin
     * @param integral
     */
    public showCoin(coin: number, integral?: number): void {
        let winCoinField = this._coin.asTextField;
        let winIntegralField = this._integral.asTextField;
        winCoinField.text = Utils.formatNumberToInt("0");
        winIntegralField.text = Utils.formatNumberToInt("0");
        this._coin.visible = true;
        // this._integral.visible = true;
        winCoinField.asMogafaNumberField().play(0, coin, 2);
        // winIntegralField.asMogafaNumberField().play(0, integral, 1);
        this._integral;
        //* 执行金币飞洒动画
        this.coinSpread();
        //* 播放金币飞洒音效
        SoundMgr.getInstance().playEffect("big_win_cions");
        this.scheduleOnce(() => {
            SoundMgr.getInstance().stopEffect("big_win_cions");
        }, 4);
    }
    /**
     * 关闭WIN弹窗动画
     */
    public stopWinAnimation(): void {
        //* 停止播放win框背景音效
        SoundMgr.getInstance().stopEffect("big_win");
        SoundMgr.getInstance().stopEffect("big_win_cions");
        switch (this._winType) {
            case WinType.BIG:
                this._winUp.bgWinHide();
                this._winDown.bgWinBgHide();
                break;
            case WinType.SUPER:
                this._winUp.superWinHide();
                this._winDown.superWinBgHide();
                break;
            case WinType.MEGA:
                this._winUp.megaWinHide();
                this._winDown.megaWinBgHide();
                break;
            default:
                this._winUp.bgWinHide();
                this._winDown.bgWinBgHide();
                break;
        }
        this._clickBuffer = 0;
        this.scheduleOnce(() => {
            this.toggleStaticUI(false);
        }, 0.3);
    }

    /**
     * 金币飞洒动画
     * @param interval
     * @param repeat
     */
    public sccoinSpread(): void {
        let coin1 = this.addFguiComponent(BigWinSpread);
        coin1.onAllChildCreated(coin1.degree30CoinsLeft);
        let coin2 = this.addFguiComponent(BigWinSpread);
        coin2.onAllChildCreated(coin2.degree30CoinsRight);
        let coin3 = this.addFguiComponent(BigWinSpread);
        coin3.onAllChildCreated(coin3.degree50CoinsLeft);
        let coin4 = this.addFguiComponent(BigWinSpread);
        coin4.onAllChildCreated(coin4.degree50CoinsRight);
        let coin5 = this.addFguiComponent(BigWinSpread);
        coin5.onAllChildCreated(coin5.degree70CoinsLeft);
        let coin6 = this.addFguiComponent(BigWinSpread);
        coin6.onAllChildCreated(coin6.degree70CoinsRight);
        let coin7 = this.addFguiComponent(BigWinSpread);
        coin7.onAllChildCreated(coin7.verticalCoinsLeft);
        let coin8 = this.addFguiComponent(BigWinSpread);
        coin8.onAllChildCreated(coin8.verticalCoinsRight);
    }


    public coinSpread(interval: number = 0.1, repeat: number = 20) {
        this.schedule(
            this.sccoinSpread.bind(this),
            0.1,
            repeat - 1
        );
    }

    /**
     * 显示/隐藏静态UI
     */
    public toggleStaticUI(isShow: boolean): void {
        this._coin.visible = isShow;
        this._integral.visible = isShow;
        this._collectButton.visible = isShow;
        this._doubleButton.visible = isShow;
        // this._countdownText.visible = isShow;
    }

    /**
     * 重置飞行参数
     */
    public resetFly(): void {
        console.log("resetFly")
        this._rewardCoins = 0;
        this._rewardIntegral = 0;
        this._flyCoins = 100;
        this._flyIntegrals = 20;
    }


    public resetBigWinSpread(): void {
        let list = []
        for (let i = 0; i < this._children.length; i++) {
            let value = this._children[i]
            if (i > 2) {
                if (value.fguiComponent && value.fguiComponent.node) {
                    value.fguiComponent.node.destroy();
                }
            } else {
                list.push(value)
            }
        }

        this._children = list
    }
}

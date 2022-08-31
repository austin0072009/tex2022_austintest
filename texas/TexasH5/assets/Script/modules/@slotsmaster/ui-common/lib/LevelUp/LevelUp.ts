//import { fgui } from "fairygui";
import LevelUpSpine from "./LevelUpSpine";


import { Coin } from "../Coin/Coin";

import { Popup } from "../Popup";
import { Integral } from "../Coin/Integral";

import RippleSpine from "../Ripple/RippleSpine";
import { MogafaNumberField } from "../../../../@mogafa/fairygui-component/lib/extensions/MogafaNumberField";
import SoundMgr from "../../../../@mogafa/utils/lib/SoundMgr";
import { Utils } from "../../../../@mogafa/utils/lib/Utils";
import SpinResultsUpgrade from "../../../../spin-result/SpinResultsUpgrade";

enum UpgradeMode {
    Primary,
    Advanced,
    Small,
}
const LEVEL_UP_AD: string = "LEVEL_UP_AD";
export class LevelUp extends Popup {
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
    public get closeTime(): number {
        return -1;
    }
    private _maskNode: cc.Node;
    //* 升级spine
    private _levelUpSpine: LevelUpSpine;
    //* 大升级弹窗等级
    private _levelLabel: fgui.GLabel;
    //* 大升级弹框金币
    private _coinLabel: fgui.GLabel;
    //* 大升级弹框积分
    private _integralLabel: fgui.GLabel;
    //* 小升级弹窗等级
    private _levelLabelTop: fgui.GLabel;
    //* 小升级弹窗金币
    private _coinLabelTop: fgui.GLabel;
    //* 小升级弹窗积分
    private _integralLabelTop: fgui.GLabel;
    //* coin LltyuNumberField
    private _coin: MogafaNumberField;
    //* integral LltyuNumberField
    private _integral: MogafaNumberField;
    //* 收集按钮
    private _collectButton: fgui.GButton;
    //* 双击按钮
    private _doubleButton: fgui.GButton;
    //* 金币增长需要时间
    private _coinIncreaseTime: number = 1.5;
    //* 升级获取的金币奖励
    private _rewardCoins: number;
    //* 升级获取的积分奖励
    private _rewardIntegral: number;
    //* 飞行金币数
    private _flyCoins: number = 100;
    //* 飞行积分数
    private _flyIntegrals: number = 20;
    //* 金币动画结束坐标
    private _coinEndPos: cc.Vec2;
    //* 积分动画结束坐标
    private _integralEndPos: cc.Vec2;
    //* 金币是否可以飞行
    private _isCoinFly: boolean;
    //* 升级模式
    private _upgradeMode: UpgradeMode;
    //* 点击缓存
    private _clickBuffer: number = 0;
    //* 波纹节点
    private _rippleNode: cc.Node;
    //* 波纹spine
    private _rippleSpine: RippleSpine;
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
    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "LevelUp";
    }
    private get isCoinFly(): boolean {
        return this._isCoinFly;
    }
    private set isCoinFly(value: boolean) {
        this._isCoinFly = value;
        if (this._isCoinFly) {
            //* 飞行时间，与每个金币飞行时间保持同步
            let flyTime: number = 1;
            this.scheduleOnce(() => {
                this.awardIncreaseCallback(this._rewardCoins, this._rewardIntegral);
            }, flyTime);
        }
    }
    protected async createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.makeFullScreen();
        let spineNode = this.fguiComponent.getChild("levelUp").node;
        this._maskNode = this.getChild("mask").node;
        this._levelUpSpine = new LevelUpSpine(spineNode);
        this.addChild(this._levelUpSpine);
        //* 小升级弹框label
        this._levelLabelTop = this.fguiComponent.getChild("levelLabelTop").asLabel;
        this._coinLabelTop = this.fguiComponent.getChild("coinLabelTop").asLabel;
        this._integralLabelTop = this.fguiComponent.getChild("integralLabelTop").asLabel;
        //* 大升级弹框label、image
        this._levelLabel = this.fguiComponent.getChild("levelLabel").asLabel;
        this._coinLabel = this.fguiComponent.getChild("coinLabel").asLabel;
        this._integralLabel = this.fguiComponent.getChild("integralLabel").asLabel;
        this._coin = this.fguiComponent.getChild("coinLabel").asMogafaNumberField();
        this._integral = this.fguiComponent.getChild("integralLabel").asMogafaNumberField();
        //* 收集按钮
        this._collectButton = this.fguiComponent.getChild("collectButton").asButton;
        this._collectButton.onClick(this.collectClick, this);
        //* 双击按钮
        this._doubleButton = this.fguiComponent.getChild("doubleButton").asButton;
        this._doubleButton.onClick(this.adButtonClick, this);

        this.coinEndPos = cc.v2(this.getChild("coin").node.position.x, this.getChild("coin").node.position.y);
        this.integralEndPos = cc.v2(this.getChild("integral").node.position.x, this.getChild("integral").node.position.y);
        //* 加载波纹节点、spine
        this._rippleNode = this.getChild("ripple").node;
        this._rippleNode.zIndex = 99;
        this._rippleSpine = new RippleSpine(this._rippleNode);
        this.addChild(this._rippleSpine);
        //* 初始化隐藏所有label
        this.hideLevelLabel();
    }
    private awardIncreaseCallback: Function;
    /**
     * 升级
     * @param upgrade 升级数据
     * @param awardIncreaseCallback 奖励数字增加回调
     */
    public upgrade(upgrade: SpinResultsUpgrade, awardIncreaseCallback: Function) {
        this.resetFly();
        this._rewardCoins = upgrade.award;
        this._rewardIntegral = upgrade.points;
        this._upgradeMode = this.getUpgradeMode(upgrade.level);
        this.awardIncreaseCallback = awardIncreaseCallback;
        this.show();
        switch (this._upgradeMode) {
            case UpgradeMode.Primary:
                this._maskNode.active = true;
                this._levelUpSpine.primary(upgrade.maxBet);
                break;
            case UpgradeMode.Advanced:
                this._maskNode.active = true;
                this._levelUpSpine.dvanced(upgrade.maxBet);
                break;
            case UpgradeMode.Small:
                this.scheduleOnce(() => {
                    this.isCoinFly = true;
                    //* 金币飞行音效
                    SoundMgr.getInstance().playEffect("frame_coins");
                }, 0.5);
                this._levelUpSpine.small(upgrade.maxBet);
                break;
        }
        this.scheduleOnce(() => {
            this.showLevel(upgrade.level, upgrade.award, upgrade.points, this._upgradeMode);
        }, 0.5);
    }
    private _closeCallback: Function;
    public closeCallback(callback: Function): void {
        this._closeCallback = callback;
    }
    /**
     * 重置飞行参数
     */
    private resetFly(): void {
        this._rewardCoins = 0;
        this._rewardIntegral = 0;
        this._flyCoins = 100;
        this._flyIntegrals = 20;
    }
    /**
     * 获取升级模式
     * @param level
     */
    private getUpgradeMode(level: number): UpgradeMode {
        if (level % 5 !== 0) {
            return UpgradeMode.Small;
        }
        if (level % 10 == 0) {
            return UpgradeMode.Advanced;
        }
        return UpgradeMode.Primary;
    }
    /**
     * 关闭升级弹窗
     */
    private closeLevelUp() {
        switch (this._upgradeMode) {
            case UpgradeMode.Primary:
                this._levelUpSpine.primaryClose();
                break;
            case UpgradeMode.Advanced:
                this._levelUpSpine.dvancedClose();
                break;
            case UpgradeMode.Small:
                this._levelUpSpine.smallClose();
                break;
        }
        this.hideLevelLabel();
        this._maskNode.active = false;
        this.scheduleOnce(() => {
            this._clickBuffer = 0;
            this.hide();
            if (this._closeCallback) {
                this._closeCallback();
            }
        }, 0.5);
    }
    /**
     * 执行金币飞行动画
     */
    private coinFly(): void {
        let coin: Coin = this.addFguiComponent(Coin);
        let startPos: cc.Vec2;
        //* 小升级
        if (this._upgradeMode === UpgradeMode.Small) {
            startPos = cc.v2(1764 + Math.random() * 200, -250 - Math.random() * 100);
        }
        //* 大升级
        else {
            startPos = cc.v2(660 + Math.random() * 200, -500 - Math.random() * 100);
        }
        coin.onAllChildCreated(() => {
            coin.coinFly(startPos, this.coinEndPos);
        });
    }
    /**
     * 执行积分飞行动画
     */
    private integralFly(): void {
        let integral: Integral = this.addFguiComponent(Integral);
        let startPos: cc.Vec2;
        //* 小升级
        if (this._upgradeMode === UpgradeMode.Small) {
            startPos = cc.v2(1764 + Math.random() * 200, -250 - Math.random() * 100);
        }
        //* 大升级
        else {
            startPos = cc.v2(660 + Math.random() * 200, -650 - Math.random() * 100);
        }
        integral.coinFly(startPos, this.integralEndPos);
    }
    /**
     * 收集按钮点击事件
     */
    private collectClick(): void {
        SoundMgr.getInstance().playEffect("button");
        //* 大升级弹框的金币动画需要手动触发
        if (!this.isCoinFly) {
            this._clickBuffer++;
            this.isCoinFly = true;
            this.scheduleOnce(() => {
                //* 金币飞行音效
                SoundMgr.getInstance().playEffect("frame_coins");
            }, 0.5);
        }
    }
    /**
     * 双击按钮点击事件
     */
    private adButtonClick(): void {
        SoundMgr.getInstance().playEffect("button");
        this.node.emit(LEVEL_UP_AD);
    }
    /**
     * 绑定广告按钮点击事件
     * @param listener
     */
    public onAdButtonClick(listener: Function): void {
        this.node.off(LEVEL_UP_AD);
        this.node.on(LEVEL_UP_AD, listener);
    }
    /**
     * 展示等级
     * @param level
     * @param rewardCoins
     * @param rewardIntegral
     * @param upgradeMode
     */
    private showLevel(level: number, rewardCoins: number, rewardIntegral: number, upgradeMode: UpgradeMode) {
        if (upgradeMode === UpgradeMode.Small) {
            this._levelLabelTop.text = level.toString();
            this._levelLabelTop.visible = true;
            this._coinLabelTop.text = Utils.formatNumberToInt(rewardCoins);
            this._coinLabelTop.visible = true;
            this._integralLabelTop.text = Utils.formatNumberToInt(rewardIntegral);
            this._integralLabelTop.visible = true;
        } else {
            //* 金币增长动画
            this._coin.gtextField.visible = true;
            this._coin.gtextField.text = Utils.formatNumberToInt(rewardCoins);
            this._coin.play(0, rewardCoins, this._coinIncreaseTime);
            //* 积分增长动画
            this._integral.gtextField.visible = true;
            this._integral.gtextField.text = Utils.formatNumberToInt(rewardIntegral);
            this._integral.play(0, rewardIntegral, this._coinIncreaseTime);
            //* 等级
            this._levelLabel.text = level.toString();
            this._levelLabel.visible = true;

            this._collectButton.visible = true;
            this._doubleButton.visible = true;
        }
    }
    /**
     * 隐藏等级文本
     */
    private hideLevelLabel() {
        this._levelLabel.visible = false;
        this._coin.gtextField.visible = false;
        this._integral.gtextField.visible = false;
        this._levelLabelTop.visible = false;
        this._coinLabelTop.visible = false;
        this._integralLabelTop.visible = false;
        this._collectButton.visible = false;
        this._doubleButton.visible = false;
    }
    /**
     * 金币动画执行完毕回调
     */
    private coinFlyCallback(): void {
        if (this._clickBuffer > 1) {
            return;
        }
        this.scheduleOnce(() => {
            this._rippleSpine.closeRipple();
            //* 停止金币飞行音效
            SoundMgr.getInstance().stopEffect("frame_coins");
        }, 0.8);
        this.scheduleOnce(() => {
            this.closeLevelUp();
        }, 1.5);
    }

    update(dt: number) {
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
}

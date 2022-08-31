import { AppConst } from "../../../@slotsmaster/ui-common/lib/AppConst";
import FguiComponentBase from "../../fairygui-component/lib/FguiComponentBase";
import SymbolSpineResource from "./SymbolBoard/SymbolSpineResource";
import SymbolSpineShowConfig from "./SymbolBoard/SymbolSpineShowConfig";


/**
 * mogafa slots游戏关卡资源存放器
 * 比如棋子spine资源，棋子spine播放配置
 * 一些需要在棋子上使用的资源但是不宜直接加载到棋子里面去的资源，因为棋子数量众多
 */
export default class MogafaSlotsGameStage {
    private static _gameStages: { [key: string]: MogafaSlotsGameStage } = {};
    public static get gameStages(): { [key: string]: MogafaSlotsGameStage } {
        return MogafaSlotsGameStage._gameStages;
    }
    public static setGameStages(gameCode: string, gameStage: MogafaSlotsGameStage) {
        if (gameCode && gameStage) {
            MogafaSlotsGameStage.gameStages[gameCode] = gameStage;
        }
    }
    public BundlePath: string = ""
    private _symbolSpineResources: SymbolSpineResource[] = [];
    private _symbolSpineShowConfigs: { [key: string]: SymbolSpineShowConfig[] } = {};
    private _shareComponents: { [key: string]: FguiComponentBase } = {};
    private _extra: any = {};
    private symbolSpineResourceLoadedIndex: number = 0;

    /**
     * 获取所有棋子上的spine资源
     */
    get symbolSpineResources(): SymbolSpineResource[] {
        return this._symbolSpineResources;
    }
    /**
     * Sets symbol spine resources
     * 设置所有棋子的spine资源
     */
    set symbolSpineResources(value: SymbolSpineResource[]) {
        console.log("symbolSpineResources")
        this._symbolSpineResources = value;
        if (!this._symbolSpineResources) {
            this._symbolSpineResources = [];
        }
        this.symbolSpineResourceLoadedIndex = 0;
        this.loadSymbolSpineResources();
    }
    /**
     * Gets symbol spine show configs
     * 获取棋子spine展示配置
     */
    get symbolSpineShowConfigs(): { [key: string]: SymbolSpineShowConfig[] } {
        return this._symbolSpineShowConfigs;
    }
    /**
     * 添加棋子spine展示配置
     *
     * @param name 配置名称
     * @param configs 配置
     */
    addSymbolSpineShowConfigs(name: string, configs: SymbolSpineShowConfig[]) {
        console.log("addSymbolSpineShowConfigs")
        this._symbolSpineShowConfigs[name] = configs;
        if (!this._symbolSpineShowConfigs[name]) {
            this._symbolSpineShowConfigs[name] = [];
        }
    }
    get shareComponents(): { [key: string]: FguiComponentBase } {
        return this._shareComponents;
    }
    addShareComponents(name: string, component: FguiComponentBase) {
        this._shareComponents[name] = component;
    }
    private loadSymbolSpineResources(): void {
       // console.log("loadSymbolSpineResources")
        if (
            this._symbolSpineResources &&
            this._symbolSpineResources.length >= 0 &&
            this.symbolSpineResourceLoadedIndex < this._symbolSpineResources.length
        ) {
            let urls = this._symbolSpineResources[this.symbolSpineResourceLoadedIndex].urls;
            if (urls && urls.length > 0) {
                let bundle = cc.assetManager.getBundle(this.BundlePath)
                if (bundle) {
                    bundle.load(urls, sp.SkeletonData, this.symbolSpineResourcesLoaded.bind(this))
                } else {
                    cc.assetManager.loadBundle(AppConst.resUrl + this.BundlePath, (err, bundle) => {
                        bundle.load(urls, sp.SkeletonData, this.symbolSpineResourcesLoaded.bind(this))
                    })
                }

                // cc.loader.loadResArray(urls, sp.SkeletonData, this.symbolSpineResourcesLoaded.bind(this));
            } else {
                this.symbolSpineResourceLoadedIndex++;
                this.loadSymbolSpineResources();
            }
        }
    }
    private symbolSpineResourcesLoaded(error: any, resources: sp.SkeletonData[]): void {
        if (error) {
            cc.error(`棋子spine动画载入错误`);
        } else {
            let urls = this._symbolSpineResources[this.symbolSpineResourceLoadedIndex];
            for (let i = 0; i < resources.length; i++) {
                const resource = resources[i];
                this._symbolSpineResources[this.symbolSpineResourceLoadedIndex].addResource(resource.name, resource);
            }
            this.symbolSpineResourceLoadedIndex++;
            this.loadSymbolSpineResources();
        }
    }
    /**
     * Gets extra
     * 获取额外数据。
     * 可以放一些当前游戏关卡需要的全局数据
     * 比如野牛：如果最终是2倍wild，第一次替换棋子不显示2倍的图标，可以设置：
     * extra.isFirstReplace = true,表示第一次替换，false表示第二次替换
     *
     * 还有海盗，也可以设置extra.isLastReplace = true来表示最后一次替换，
     * 用此来判断骰子棋子在替换过程中是否出现特效。
     * 注意：在此设置的额外数据，需要在游戏关卡的reset方法中重置成需要的初始化值
     */
    get extra(): any {
        return this._extra;
    }
}

import SpineAnimationPlayParameter from "./SpineAnimationPlayParameter";
import FguiComponentBase from "./FguiComponentBase";
import { AppConst } from "../../../@slotsmaster/ui-common/lib/AppConst";

export default class SpineCommon extends FguiComponentBase {
    protected get packageResourceName(): string {
        return null;
    }
    protected get packageName(): string {
        return null;
    }
    protected get componentName(): string {
        return null;
    }
    protected _node: cc.Node;
    private _urls: string[];
    protected _resources: { [key: string]: sp.SkeletonData } = {};
    private _isReady: boolean;
    private _trackIndex: number = 0;
    private _animationsAfterLoaded: SpineAnimationPlayParameter[];
    protected _skeleton: sp.Skeleton;
    constructor(node: cc.Node, urls: string[], animationsAfterLoaded?: SpineAnimationPlayParameter[]) {
        super();
        this._node = node;
        this._isReady = false;
        this._urls = urls;
        this._animationsAfterLoaded = animationsAfterLoaded;
        this._skeleton = this._node.addComponent(sp.Skeleton);
        if (urls) {
            let self = this
            let bundle = cc.assetManager.getBundle(self.packageResourceName)
            if (bundle) 
            {
                bundle.load(urls, sp.SkeletonData, this.resourceLoaded.bind(this))
            } else {
                let resUrl = self.packageResourceName;
                if (!AppConst.isEditor) 
                {
                    resUrl = AppConst.resUrl + self.packageResourceName;
                }
                cc.assetManager.loadBundle(resUrl, ((err, bundle) => 
                {
                    bundle.load(urls, sp.SkeletonData, this.resourceLoaded.bind(this))
                }));
            } 
        } else 
        {
            this._created = true;
        }
    }
    /**
     * 资源加载
     * @param error
     * @param resources
     */
    private resourceLoaded(error: any, resources: sp.SkeletonData[]) {
        if (error) {
            cc.error(`spine动画${this._urls}载入错误`);
        } else {
            for (let i = 0; i < resources.length; i++) {
                const resource = resources[i];
                this._resources[resource.name] = resource;
            }

            //this._skeleton.skeletonData = resources[0];
            //this._skeleton.clearTracks();
            this._isReady = this._urls.length == resources.length;
            if (this._isReady && this._animationsAfterLoaded) {
                this.playInOrder(this._animationsAfterLoaded);
            }
            if (this._isReady) {
                this._created = true;
                if (this.parent) {
                    let parent = this.parent as any;
                    parent.childCreatedInternal(this);
                }
            }
            this.afterResourceLoaded();
        }
    }
    protected afterResourceLoaded() { }
    public get skeleton(): sp.Skeleton {
        return this._skeleton;
    }
    public get isReady(): boolean {
        return this._isReady;
    }
    public get trackIndex(): number {
        return this._trackIndex;
    }
    public set trackIndex(value: number) {
        this._trackIndex = value;
        if (!this._trackIndex) {
            this._trackIndex = 0;
        }
    }
    /**
     * 获取资源
     * @param spineName
     */
    private getResource(spineName: string) {
        let resource: sp.SkeletonData = null;
        for (let key in this._resources) {
            resource = this._resources[key];
            if (!spineName) {
                break;
            }
            if (spineName == key) {
                break;
            }
        }
        return resource;
    }
    /**
     * 按顺序播放动画
     * @param animations 顺序播放的动画列表（注意顺序播放的动画，除了最后一个的isLoop有效，其他的isLoop都是false
     */
    public playInOrder(animations: SpineAnimationPlayParameter[], skin?: string, spineName?: string): void {
        if (!animations || animations.length == 0) {
            return;
        }
        this._skeleton.skeletonData = this.getResource(spineName);
        if (skin) {
            this._skeleton.setSkin(skin);
        }
        let count = animations.length;
        for (let i = 0; i < animations.length; i++) {
            const animation = animations[i];
            const isLast = i == count - 1;
            const isLoop = isLast ? animation.isLoop : false;
            if (i == 0) {
                this.scheduleOnce(() => {
                    this._skeleton.setAnimation(this._trackIndex, animation.animationName, isLoop);
                }, 4 / 60)
            } else {
                this.scheduleOnce(() => {
                    this._skeleton.addAnimation(this._trackIndex, animation.animationName, isLoop);
                }, 4 / 60)
            }
        }
    }
}

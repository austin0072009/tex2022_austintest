import FguiComponentBase from "../modules/@mogafa/fairygui-component/lib/FguiComponentBase";


/**
 * 获取Class的所有可枚举属性
 * @param type
 */
function getPrototypes<T>(clazz: T): Array<string> {
    return Object.getOwnPropertyNames(clazz);
}

/**
 * 首字符包含ui_
 * @param str
 */
const propertyCondition = function (str: string) {
    return str.slice(0, 3) == "ui_" ? str.slice(3, str.length) : "";
};

/**
 * 内容转换器
 */
export default class ViewBase extends FguiComponentBase {

    protected get packageResourceName(): string {
        return "";
    }
    protected get packageName(): string {
        return "";
    }
    protected get componentName(): string {
        return "";
    }
    public mystart: boolean = false;
    private _parentComponent: fgui.GComponent;
    public _isDestory: boolean = false;

    createChildComponents(): void {
        super.createChildComponents();
        this.AutoSetGoProperty();
        this._isDestory = false;

        if (this._parentComponent) {
            this._parentComponent.node.addChild(this.fguiComponent.node);
            this.fguiComponent._parent = this._parentComponent;
        }
    }

    OnLoadStart() {
        this._isDestory = false;
    }

    OnLoadCompleted() {
        console.log("--- ViewBase OnLoadCompleted ---");
    }

    onDestroy() {
        super.destroy();
        this._isDestory = true;
    }

    Show() {
        this.node.active = true;
        if (this._fguiComponent) {
            this._fguiComponent.visible = true;
        }
    }

    Hide() {
        this._fguiComponent.visible = false;
        // this.node.active = false;
    }

    onEnable() {

    }

    onDisable() {

    }

    allChildCreated() {
        super.allChildCreated();
        this.OnLoadCompleted();
    }

    onLoad() {
        super.onLoad();
        this.OnLoadStart();
    }

    public setParentComponent(parentComponent: fgui.GComponent) {
        this._parentComponent = parentComponent;
    }

    protected AutoSetGoProperty() {
        // 判断是不是类
        const prototypes = getPrototypes(this);
        let childrenMap: Map<string, any> = new Map<string, any>();
        childrenMap = this.FindChildren(this.fguiComponent)

        for (const Key of prototypes) {
            const getKey = propertyCondition(Key);
            if (getKey == "") continue;
            if (childrenMap.has(getKey)) {
                this[Key] = childrenMap.get(getKey)
            }
        }
    }

    private FindChildren(view: any): Map<string, any> {
        let childrenMap: Map<string, any> = new Map<string, any>();
        if (view._children == null)
            return childrenMap;
        for (const child of view._children) {
            childrenMap.set(child._name, child)
            let temp: Map<string, any> = this.FindChildren(child)
            if (temp.size > 0) {
                temp.forEach((value, key) => {
                    childrenMap.set(key, value);
                })
            }
        }

        return childrenMap;
    }
}

import EventReporter, { EventReporterIocContainerName } from "./analytics/EventReporter";
import IocContainer from "./IocContainer";
import EmptyLogEventReporter from "./analytics/EmptyLogEventReporter";
import MessageBase from "./MessageBase";
import { AppConst } from "../../../@slotsmaster/ui-common/lib/AppConst";
const { ccclass } = cc._decorator;

@ccclass
export default abstract class FguiComponentBase extends cc.Component {
    protected abstract get packageResourceName(): string;
    protected abstract get packageName(): string;
    protected abstract get componentName(): string;
    public _children: FguiComponentBase[] = [];
    protected _created: boolean = false;
    private _parent: FguiComponentBase;
    private _allChildCreatedExecuted: boolean = false;
    private _expectLoads: number;
    private _currentLoads: number;
    private _loadProcess: number;
    private loadProcessTimer: number;
    protected get needProcess(): boolean {
        return false;
    }
    public get parent(): FguiComponentBase {
        return this._parent;
    }
    public $message: MessageBase;
    protected _fguiComponent: fgui.GComponent;
    private _fguiX: number;
    private _fguiY: number;
    private _fguiWidth: number;
    private _fguiHeight: number;
    private _active: boolean;
    private _fguiComponentList: FguiComponentBase[] = [];

    public get active(): boolean {
        return this._active;
    }
    public set active(bool: boolean) {
        this._active = bool;
    }

    public get fguiComponentList(): FguiComponentBase[] {
        return this._fguiComponentList;
    }
    public set fguiComponentList(component: FguiComponentBase[]) {
        this._fguiComponentList = component;
    }

    public get fguiX(): number {
        if (this._fguiComponent) {
            this._fguiX = this._fguiComponent.x;
        }
        return this._fguiX;
    }
    public set fguiX(x: number) {
        if (x || x == 0) {
            if (this._fguiComponent) {
                this._fguiComponent.x = x;
            }
            this._fguiX = x;
        }
    }
    public get fguiY(): number {
        if (this._fguiComponent) {
            this._fguiY = this._fguiComponent.y;
        }
        return this._fguiY;
    }
    public set fguiY(y: number) {
        if (y || y == 0) {
            if (this._fguiComponent) {
                this._fguiComponent.y = y;
            }
            this._fguiY = y;
        }
    }
    public get fguiWidth(): number {
        if (this._fguiComponent) {
            this._fguiWidth = this._fguiComponent.width;
        }
        return this._fguiWidth;
    }
    public set fguiWidth(width: number) {
        if (width || width == 0) {
            if (this._fguiComponent) {
                this._fguiComponent.width = width;
            }
            this._fguiWidth = width;
        }
    }
    public get fguiHeight(): number {
        if (this._fguiComponent) {
            this._fguiHeight = this._fguiComponent.height;
        }
        return this._fguiHeight;
    }
    public set fguiHeight(height: number) {
        if (height || height == 0) {
            if (this._fguiComponent) {
                this._fguiComponent.height = height;
            }
            this._fguiHeight = height;
        }
    }
    public addChild(child: FguiComponentBase) {
        if (child) {
            child._parent = this;
            const oldChild = this._children.find((c) => c == child);
            if (!oldChild) {
                this._children.push(child);
            }
            if (this.fguiComponent && child.fguiComponent) {
                this.fguiComponent.addChild(child.fguiComponent);
            }
        }
    }
    public addFguiComponent<T extends FguiComponentBase>(type: { new(): T }, changeSize: boolean = true): T {
        this._expectLoads++;
        let component = this.node.addComponent(type);
        this.addChild(component);
        if (changeSize) {
            component.fguiHeight = this.fguiHeight;
            component.fguiWidth = this.fguiWidth;
        }
        let list = this.fguiComponentList;
        list.push(component);
        this.fguiComponentList = list;
        return component;
    }
    onLoad() {
        let self = this;
        this._expectLoads = 0;
        this._currentLoads = 0;
        this._loadProcess = 0;
        if (this.needProcess) {
            this.schedule(this.loadProcessInternal, 0);
        }

        if (self.beforeLoadPackage(self.packageResourceName)) {//http://106.13.222.130:84/dlc/games_common/games_common
            let bundle = cc.assetManager.getBundle(self.packageResourceName);
            if (bundle) {
                fgui.UIPackage.loadPackage(bundle, self.packageName, self.createComponent.bind(self));
            }
            else {
                let resUrl = self.packageResourceName;
                if (!AppConst.isEditor) {
                    resUrl = AppConst.resUrl + self.packageResourceName
                }
                cc.assetManager.loadBundle(resUrl, ((err, bundle) => {
                    fgui.UIPackage.loadPackage(bundle, self.packageName, self.createComponent.bind(self));
                }));
            }
        }
        else {
            self.createComponent();
        }
    }
    protected beforeLoadPackage(pacakgeSourceName: string): boolean {
        return !!pacakgeSourceName;
    }

    /**
     * Creates component
     * @returns component
     */
    private createComponent(error?: any): void {
        if (error) {
            cc.error(`fairygui 包${this.packageResourceName}不存在 :` + error.message);
            return;
        }
        if (this.beforeCreateComponent(this.packageName, this.componentName)) {
            let obj = fgui.UIPackage.createObject(this.packageName, this.componentName);
            if (!obj) {
                cc.error(`包名：${this.packageName},或组件名：${this.componentName}不存在`);
                return;
            }
            this.fguiComponent = obj.asCom;
            if (this.parent) {
                let child = this.parent.fguiComponent.getChildById(this.fguiComponent._id);
                if (!child) {
                    this.parent.addChild(this);
                }
            }
        }
        fgui.GRoot.inst.center();
        this.createChildComponents();
        this.checkAllChildCreated();
    }
    protected beforeCreateComponent(packageName: string, componentName: string): boolean {
        return !!packageName && !!componentName;
    }
    //createChildComponents()
    protected createChildComponents(): void { }

    protected checkAllChildCreated(): void {
        let notCreatedChild = this._children.find((c) => c._created === false);
        if (!notCreatedChild) {
            this._created = true;
            if (!this._allChildCreatedExecuted) {
                this.unschedule(this.loadProcessInternal);
                this.allChildCreated();
                this._allChildCreatedExecuted = true;
                if (this.allChildCreatedCallback) {
                    this.allChildCreatedCallback();
                }
            }
            if (this.parent) {
                this.parent.childCreatedInternal(this);
            }
        }
    }
    private childCreatedInternal(child: FguiComponentBase): void {
        this._currentLoads++;
        this.childCreated(child);
        this.checkAllChildCreated();
    }
    protected childCreated(child: FguiComponentBase): void { }
    protected allChildCreated(): void { }
    private allChildCreatedCallback: Function;
    onAllChildCreated(callback: Function): void {
        if (this._allChildCreatedExecuted) {
            if (callback) {
                callback();
            }
        } else {
            this.allChildCreatedCallback = callback;
        }
    }
    private loadProcessInternal(): void {
        const nextValue = Math.round(((this._currentLoads + 1) / this._expectLoads) * 100);
        let processValue = Math.round((this._currentLoads / this._expectLoads) * 100);
        if (processValue < this._loadProcess) {
            processValue = this._loadProcess;
        } else {
            processValue += 10;
        }
        if (processValue >= nextValue) {
            processValue -= 10;
        }
        if (processValue > this._loadProcess) {
            this._loadProcess = processValue;
        }
        if (this._loadProcess >= 100) {
            this._loadProcess = 99;
        }
        this.loadProcess(100, this._loadProcess, this._loadProcess);
    }
    protected loadProcess(expectValue: number, currentValue: number, process: number): void { }
    public get fguiComponent(): fgui.GComponent {
        return this._fguiComponent;
    }
    public set fguiComponent(value: fgui.GComponent) {
        this._fguiComponent = value;
        if (value) {
            if (this._fguiX) {
                this.fguiX = this._fguiX;
            }
            if (this._fguiY) {
                this.fguiY = this._fguiY;
            }
            if (this._fguiWidth) {
                this.fguiWidth = this._fguiWidth;
            }
            if (this._fguiHeight) {
                this.fguiHeight = this._fguiHeight;
            }
        }
    }
    /**
     * 根据名称获取子组件
     * @param name 属性名称,比如"a.b.c",其中a可以是fgui.GComponent
     */
    public getChildAdvance(name: string): fgui.GComponent | cc.Node {
        let names = name.split(".");
        let parent: fgui.GComponent | cc.Node = this._fguiComponent;
        let child: fgui.GComponent | cc.Node;
        let isFgui: boolean = true;
        for (let i = 0; i < names.length; i++) {
            let childName = names[i];
            if (isFgui) {
                const childObject = ((parent as any) as fgui.GComponent).getChild(childName);
                if (childObject) {
                    child = childObject.asCom;
                } else {
                    parent = ((parent as any) as fgui.GComponent).node;
                    isFgui = false;
                }
            }
            if (!isFgui) {
                child = ((parent as any) as cc.Node).getChildByName(childName);
                if (!child) {
                    cc.error(`属性${childName}不存在`);
                    return null;
                }
            }
            parent = child;
        }
        return child;
    }
    public getCCChild(node: cc.Node, name: string): cc.Node {
        let names = name.split(".");
        let child = node;
        for (let i = 0; i < names.length; i++) {
            const childName = names[i];
            child = child.getChildByName(childName);
            if (!child) {
                cc.error(`cc组件不存在${childName}`);
                return null;
            }
        }
        return child;
    }
    public getChild(name: string): fgui.GComponent {
        let names = name.split(".");
        let child = this._fguiComponent;
        for (let i = 0; i < names.length; i++) {
            let childName = names[i];
            const component = child.getChild(childName);
            if (!component) {
                cc.error(`属性${childName}不存在`);
                return null;
            }
            child = component.asCom;
        }
        return child;
    }
    public setControllerProperty(name: string, value: number) {
        if (!this._fguiComponent) {
            return;
        }
        let names = name.split(".");
        const propertyName = names[names.length - 1];
        let child = this._fguiComponent;
        if (names.length > 1) {
            const theNameWithoutPropertyName = name.replace("." + propertyName, "");
            child = this.getChild(theNameWithoutPropertyName);
            if (!child) {
                cc.error(`属性${name}不存在`);
            }
        }
        const controller = child.controllers.find((c) => c.name == propertyName);
        if (!controller) {
            cc.error(`控制器${propertyName}不存在`);
            return;
        }
        controller.selectedIndex = value;
    }
    public getControllerProperty(name: string): number {
        if (!this._fguiComponent) {
            return null;
        }
        let names = name.split(".");
        const propertyName = names[names.length - 1];
        let child = this._fguiComponent;
        if (names.length > 1) {
            const theNameWithoutPropertyName = name.replace("." + propertyName, "");
            child = this.getChild(theNameWithoutPropertyName);
            if (!child) {
                cc.error(`属性${name}不存在`);
            }
        }
        const controller = child.controllers.find((c) => c.name == propertyName);
        if (!controller) {
            cc.error(`控制器${propertyName}不存在`);
            return;
        }
        return controller.selectedIndex;
    }
    protected isSubclassOf(source: any, target: any): boolean {
        if (!source || !target) {
            return false;
        }
        if (target.name == source.name) {
            return true;
        }
        let targetAny = target as any;
        targetAny = targetAny.$super;
        let result: boolean = false;
        while (targetAny) {
            result = targetAny.name == source.name;
            if (result) {
                break;
            }
            targetAny = targetAny.$super;
        }
        return result;
    }
    //#region 埋点
    private _logEventReporter: EventReporter;
    protected get logEventReporter(): EventReporter {
        if (this._logEventReporter == null && IocContainer.container.isBound(EventReporterIocContainerName)) {
            this._logEventReporter = IocContainer.container.get<EventReporter>(EventReporterIocContainerName);
        }
        if (this._logEventReporter == null) {
            return EmptyLogEventReporter.instance;
        }
        return this._logEventReporter;
    }
    //#endregion
}

export abstract class FguiWindow extends FguiComponentBase {
    private _window: fgui.Window;
    protected createChildComponents(): void {
        this.fguiComponent.makeFullScreen();
        this._window = new fgui.Window();
        this._window.contentPane = this.fguiComponent;
    }
    get window(): fgui.Window {
        return this._window;
    }
}

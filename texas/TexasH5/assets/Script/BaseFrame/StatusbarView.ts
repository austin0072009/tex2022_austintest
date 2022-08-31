import ViewBase from "./ViewBase";

/**状态栏信息 */
export default class StatusbarView extends ViewBase {
    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "statusbar";
    }
    private ui_time: fgui.GTextField = null;
    /**电量 */
    private ui_battery: fgui.GProgressBar = null;
    /**信号显示 */
    private signalController: fgui.Controller = null;
    /**强度 */
    private strengthController: fgui.Controller = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.sortingOrder = 9999;
        this.signalController = this.fguiComponent.getController("signal");
        this.strengthController = this.fguiComponent.getController("strength");
        this.schedule(() => {
            this.callNativeMethod();
            let date = new Date();
            let hous = date.getHours();
            let minutes = date.getMinutes();
            this.ui_time.text = `${hous}:${minutes < 10 ? "0" + minutes : minutes}`;
        }, 1);
    }

    public callNativeMethod() {
        let battery: string = "";
        let net: string = "";
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            /**获取电池电量信息 */
            let method = "getBatteryStatusInfo";
            let methodSignature = "()Ljava/lang/String;";
            battery = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method, methodSignature);

            /**获取网络状态 */
            let method1 = "getNetWorkInfo";
            net = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method1, methodSignature);
        } else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            // UIDeviceBatteryStateUnknown,
            // UIDeviceBatteryStateUnplugged,   // on battery, discharging
            // UIDeviceBatteryStateCharging,    // plugged in, less than 100%
            // UIDeviceBatteryStateFull,        // plugged in, at 100%
            // 10_100_2  当前电量_总电量_电池状态
            battery = jsb.reflection.callStaticMethod("TSObjectCBridge", "GetBatteryLv");
            // 返回值 示例：1_1
            // 第一个值 网络类型 -1: 没有网络    1: 移动数据    2: WIFI
            // 第二个值 网络信号 0: None  1:poor  2:moderate  3:good  4:great
            net = jsb.reflection.callStaticMethod("TSObjectCBridge", "getNetworkType");
        }
        if (battery) {
            let batteryArr = battery.split("_");
            this.ui_battery.value = +batteryArr[0];
        }

        if (net) {
            let netArr = net.split("_");
            if (netArr[0] == "1") { //移动网络
                this.signalController.setSelectedIndex(0);
                this.strengthController.setSelectedIndex(4);
            } else if (netArr[0] == "2") { //wifi
                this.signalController.setSelectedIndex(1);
                this.strengthController.setSelectedIndex(+netArr[1]);
            }
        }
    }



    onDisable() {
        this.unscheduleAllCallbacks();
    }
    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    OnLoadCompleted() {
        this.Show();
    }
}
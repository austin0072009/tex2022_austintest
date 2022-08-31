/*
 * @Description:
 * @Version: CocosCreator V2.2.2
 * @Autor: sin2021
 * @Date: 2020-04-27 11:18:54
 * @LastEditors: sin2021
 * @LastEditTime: 2020-09-02 15:46:54
 */

const ANDROID_APITS = "org/cocos2dx/javascript/TSJavaBridge";
const IOS_APITS = "TSObjectCBridge";
export class MgrNative {
    protected static instance: MgrNative;
    public static getInstance(): MgrNative {
        if (!this.instance) {
            this.instance = new MgrNative();
        }
        return this.instance;
    }

    // 获取包版本号
    public getAppVersion(): string {
        let version: string = "";
        if (!CC_DEV && cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                version = jsb.reflection.callStaticMethod(ANDROID_APITS, "getAppVersion", "()Ljava/lang/String;");
            } else if (cc.sys.os == cc.sys.OS_IOS) {
                version = jsb.reflection.callStaticMethod(IOS_APITS, "getAppVersion");
            }
        }
        return version;
    }

    public getDeviceUUID(): string {
        return "111";
    }

    // 获取GPS
    public getDeviceGPS(): string {
        let gps: string = "";
        if (!CC_DEV && cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                // gps = jsb.reflection.callStaticMethod(ANDROID_APITS, "getAppVersion", "()Ljava/lang/String;");
            } else if (cc.sys.os == cc.sys.OS_IOS) {
                gps = jsb.reflection.callStaticMethod(IOS_APITS, "getGPSLocation");
            }
        }
        console.log("getGPSLocation === ", gps);
        return gps;
    }

    // 获取GPS
    public getDeviceIPAddresses(): string {
        let ip: string = "";
        if (!CC_DEV && cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                // gps = jsb.reflection.callStaticMethod(ANDROID_APITS, "getAppVersion", "()Ljava/lang/String;");
            } else if (cc.sys.os == cc.sys.OS_IOS) {
                ip = jsb.reflection.callStaticMethod(IOS_APITS, "getDeviceIpAddresses");
            }
        }
        console.log("getDeviceIpAddresses === ", ip);
        return ip;
    }
}

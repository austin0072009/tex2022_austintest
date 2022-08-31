import { AppConst } from "../../Script/modules/@slotsmaster/ui-common/lib/AppConst";

export default class NativeMethod {
    /**显示状态栏 
     *  @param flag true  显示    false  不显示
    */
    // public static showState(flag: boolean) {
    // if (cc.sys.os == cc.sys.OS_ANDROID) {
    //     let method = "fullscreen";
    //     let bool = flag;
    //     let methodSignature = "(Z)V";
    //     jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method, methodSignature, bool);
    // } else if (cc.sys.os == cc.sys.OS_IOS) {

    // }
    // }


    /**切换横竖屏
     * @param flag true  横屏    false  竖屏
     */
    public static changeOrientationH(flag: boolean) {
        if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            let method = "changeOrientationH";
            let bool = flag;
            let methodSignature = "(Z)V";
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method, methodSignature, bool);
            let w = cc.view.getFrameSize().width;
            let h = cc.view.getFrameSize().height;
            if (flag) {
                if (h > w) {
                    cc.view.setFrameSize(h, w);
                }
                // cc.Canvas.instance.designResolution = cc.size(2340, 1080);
            } else {
                //  if (w > h) {
                cc.view.setFrameSize(h, w);
                // }
                // cc.Canvas.instance.designResolution = cc.size(1080, 2340);
                let size: number;
                w > h ? (size = w) : (size = h);
                if (cc.Canvas.instance.node) {
                    cc.Canvas.instance.node.y = size / 2;
                }
            }

        } else if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            let dict = {
                isLand: flag ? "1" : "0"
            }
            jsb.reflection.callStaticMethod("TSObjectCBridge", "changeOrientationH:", JSON.stringify(dict));
            let w = cc.view.getFrameSize().width;
            let h = cc.view.getFrameSize().height;
            if (flag) {
                if (h > w) {
                    cc.view.setFrameSize(h, w);
                }
                // cc.Canvas.instance.designResolution = cc.size(2340, 1080);
            } else {
                //  if (w > h) {
                cc.view.setFrameSize(h, w);
                // }
                // cc.Canvas.instance.designResolution = cc.size(1080, 2340);
                let size: number;
                w > h ? (size = w) : (size = h);
                if (cc.Canvas.instance.node) {
                    cc.Canvas.instance.node.y = size / 2;
                }
            }
        } else {
            let w = cc.view.getFrameSize().width;
            let h = cc.view.getFrameSize().height;
            if (flag) {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                if (h > w) {
                    cc.view.setFrameSize(h, w);
                }
                // cc.Canvas.instance.designResolution = cc.size(2340, 1080);
            } else {
                cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
                if (w > h) {
                    cc.view.setFrameSize(h, w);
                }
                // cc.Canvas.instance.designResolution = cc.size(1080, 2340);
                if (cc.Canvas.instance.node) {
                    cc.Canvas.instance.node.y = cc.view.getVisibleSize().height / 2;
                }
            }

        }
    }

    /**複製到剪切板 */
    public static copyTextString(text: string) {
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", "copyUserId", "(Ljava/lang/String;)V", text);
        } else if (cc.sys.os == cc.sys.OS_IOS) {
            let dict = {
                userID: text
            }
            jsb.reflection.callStaticMethod("TSObjectCBridge", "copyUserId:", JSON.stringify(dict));
        }
    }

    public static setUrlByLanguage(loader: fgui.GLoader) {
        let url = loader["_contentItem"].name;
        url = url.substr(0, url.length - 1);
        switch (AppConst.languageType) {
            case 1: //繁体
                url = "ui://Lobby/" + url + "1";
                break;
            case 2:  //简体
                url = "ui://Lobby/" + url + "2";
                break;
            case 3:
                break;
            case 4:
                break;
        }
        loader.url = url;
    }
}
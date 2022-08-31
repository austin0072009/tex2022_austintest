"use strict";
cc._RF.push(module, 'd68edg/LblIobk9A02ndhoB', 'NativeMethod');
// GameHall/script/NativeMethod.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppConst_1 = require("../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var NativeMethod = /** @class */ (function () {
    function NativeMethod() {
    }
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
    NativeMethod.changeOrientationH = function (flag) {
        if (cc.sys.os == cc.sys.OS_ANDROID && cc.sys.isNative) {
            var method = "changeOrientationH";
            var bool = flag;
            var methodSignature = "(Z)V";
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", method, methodSignature, bool);
            var w = cc.view.getFrameSize().width;
            var h = cc.view.getFrameSize().height;
            if (flag) {
                if (h > w) {
                    cc.view.setFrameSize(h, w);
                }
                // cc.Canvas.instance.designResolution = cc.size(2340, 1080);
            }
            else {
                //  if (w > h) {
                cc.view.setFrameSize(h, w);
                // }
                // cc.Canvas.instance.designResolution = cc.size(1080, 2340);
                var size = void 0;
                w > h ? (size = w) : (size = h);
                if (cc.Canvas.instance.node) {
                    cc.Canvas.instance.node.y = size / 2;
                }
            }
        }
        else if (cc.sys.os == cc.sys.OS_IOS && cc.sys.isNative) {
            var dict = {
                isLand: flag ? "1" : "0"
            };
            jsb.reflection.callStaticMethod("TSObjectCBridge", "changeOrientationH:", JSON.stringify(dict));
            var w = cc.view.getFrameSize().width;
            var h = cc.view.getFrameSize().height;
            if (flag) {
                if (h > w) {
                    cc.view.setFrameSize(h, w);
                }
                // cc.Canvas.instance.designResolution = cc.size(2340, 1080);
            }
            else {
                //  if (w > h) {
                cc.view.setFrameSize(h, w);
                // }
                // cc.Canvas.instance.designResolution = cc.size(1080, 2340);
                var size = void 0;
                w > h ? (size = w) : (size = h);
                if (cc.Canvas.instance.node) {
                    cc.Canvas.instance.node.y = size / 2;
                }
            }
        }
        else {
            var w = cc.view.getFrameSize().width;
            var h = cc.view.getFrameSize().height;
            if (flag) {
                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                if (h > w) {
                    cc.view.setFrameSize(h, w);
                }
                // cc.Canvas.instance.designResolution = cc.size(2340, 1080);
            }
            else {
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
    };
    /**複製到剪切板 */
    NativeMethod.copyTextString = function (text) {
        if (cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/TSJavaBridge", "copyUserId", "(Ljava/lang/String;)V", text);
        }
        else if (cc.sys.os == cc.sys.OS_IOS) {
            var dict = {
                userID: text
            };
            jsb.reflection.callStaticMethod("TSObjectCBridge", "copyUserId:", JSON.stringify(dict));
        }
    };
    NativeMethod.setUrlByLanguage = function (loader) {
        var url = loader["_contentItem"].name;
        url = url.substr(0, url.length - 1);
        switch (AppConst_1.AppConst.languageType) {
            case 1: //繁体
                url = "ui://Lobby/" + url + "1";
                break;
            case 2: //简体
                url = "ui://Lobby/" + url + "2";
                break;
            case 3:
                break;
            case 4:
                break;
        }
        loader.url = url;
    };
    return NativeMethod;
}());
exports.default = NativeMethod;

cc._RF.pop();
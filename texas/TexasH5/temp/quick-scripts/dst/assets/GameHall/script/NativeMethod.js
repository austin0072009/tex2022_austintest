
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/NativeMethod.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTmF0aXZlTWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBRXBGO0lBQUE7SUF1SEEsQ0FBQztJQXRIRzs7TUFFRTtJQUNGLDJDQUEyQztJQUMzQyx3Q0FBd0M7SUFDeEMsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsOEdBQThHO0lBQzlHLDJDQUEyQztJQUUzQyxJQUFJO0lBQ0osSUFBSTtJQUdKOztPQUVHO0lBQ1csK0JBQWtCLEdBQWhDLFVBQWlDLElBQWE7UUFDMUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNuRCxJQUFJLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQztZQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsc0NBQXNDLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2RyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNyQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1AsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCw2REFBNkQ7YUFDaEU7aUJBQU07Z0JBQ0gsZ0JBQWdCO2dCQUNoQixFQUFFLENBQUMsSUFBSSxD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RyxHQUFHLGFBQWEsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNoQyxNQUFNO1lBQ1YsS0FBSyxDQUFDLEVBQUcsSUFBSTtnQkFDVCxHQUFHLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7Z0JBQ2hDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixNQUFNO1NBQ2I7UUFDRCxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXZIQSxBQXVIQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdGl2ZU1ldGhvZCB7XHJcbiAgICAvKirmmL7npLrnirbmgIHmoI8gXHJcbiAgICAgKiAgQHBhcmFtIGZsYWcgdHJ1ZSAg5pi+56S6ICAgIGZhbHNlICDkuI3mmL7npLpcclxuICAgICovXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIHNob3dTdGF0ZShmbGFnOiBib29sZWFuKSB7XHJcbiAgICAvLyBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XHJcbiAgICAvLyAgICAgbGV0IG1ldGhvZCA9IFwiZnVsbHNjcmVlblwiO1xyXG4gICAgLy8gICAgIGxldCBib29sID0gZmxhZztcclxuICAgIC8vICAgICBsZXQgbWV0aG9kU2lnbmF0dXJlID0gXCIoWilWXCI7XHJcbiAgICAvLyAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L1RTSmF2YUJyaWRnZVwiLCBtZXRob2QsIG1ldGhvZFNpZ25hdHVyZSwgYm9vbCk7XHJcbiAgICAvLyB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKSB7XHJcblxyXG4gICAgLy8gfVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvKirliIfmjaLmqKrnq5blsY9cclxuICAgICAqIEBwYXJhbSBmbGFnIHRydWUgIOaoquWxjyAgICBmYWxzZSAg56uW5bGPXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlT3JpZW50YXRpb25IKGZsYWc6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEICYmIGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICBsZXQgbWV0aG9kID0gXCJjaGFuZ2VPcmllbnRhdGlvbkhcIjtcclxuICAgICAgICAgICAgbGV0IGJvb2wgPSBmbGFnO1xyXG4gICAgICAgICAgICBsZXQgbWV0aG9kU2lnbmF0dXJlID0gXCIoWilWXCI7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9UU0phdmFCcmlkZ2VcIiwgbWV0aG9kLCBtZXRob2RTaWduYXR1cmUsIGJvb2wpO1xyXG4gICAgICAgICAgICBsZXQgdyA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaCA+IHcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy52aWV3LnNldEZyYW1lU2l6ZShoLCB3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNjLkNhbnZhcy5pbnN0YW5jZS5kZXNpZ25SZXNvbHV0aW9uID0gY2Muc2l6ZSgyMzQwLCAxMDgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICBpZiAodyA+IGgpIHtcclxuICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0RnJhbWVTaXplKGgsIHcpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gY2MuQ2FudmFzLmluc3RhbmNlLmRlc2lnblJlc29sdXRpb24gPSBjYy5zaXplKDEwODAsIDIzNDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpemU6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHcgPiBoID8gKHNpemUgPSB3KSA6IChzaXplID0gaCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS55ID0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyAmJiBjYy5zeXMuaXNOYXRpdmUpIHtcclxuICAgICAgICAgICAgbGV0IGRpY3QgPSB7XHJcbiAgICAgICAgICAgICAgICBpc0xhbmQ6IGZsYWcgPyBcIjFcIiA6IFwiMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIlRTT2JqZWN0Q0JyaWRnZVwiLCBcImNoYW5nZU9yaWVudGF0aW9uSDpcIiwgSlNPTi5zdHJpbmdpZnkoZGljdCkpO1xyXG4gICAgICAgICAgICBsZXQgdyA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaCA+IHcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy52aWV3LnNldEZyYW1lU2l6ZShoLCB3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNjLkNhbnZhcy5pbnN0YW5jZS5kZXNpZ25SZXNvbHV0aW9uID0gY2Muc2l6ZSgyMzQwLCAxMDgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vICBpZiAodyA+IGgpIHtcclxuICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0RnJhbWVTaXplKGgsIHcpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gY2MuQ2FudmFzLmluc3RhbmNlLmRlc2lnblJlc29sdXRpb24gPSBjYy5zaXplKDEwODAsIDIzNDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpemU6IG51bWJlcjtcclxuICAgICAgICAgICAgICAgIHcgPiBoID8gKHNpemUgPSB3KSA6IChzaXplID0gaCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS55ID0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdyA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGg7XHJcbiAgICAgICAgICAgIGxldCBoID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBjYy52aWV3LnNldE9yaWVudGF0aW9uKGNjLm1hY3JvLk9SSUVOVEFUSU9OX0xBTkRTQ0FQRSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaCA+IHcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy52aWV3LnNldEZyYW1lU2l6ZShoLCB3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNjLkNhbnZhcy5pbnN0YW5jZS5kZXNpZ25SZXNvbHV0aW9uID0gY2Muc2l6ZSgyMzQwLCAxMDgwKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0T3JpZW50YXRpb24oY2MubWFjcm8uT1JJRU5UQVRJT05fUE9SVFJBSVQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHcgPiBoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Mudmlldy5zZXRGcmFtZVNpemUoaCwgdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5DYW52YXMuaW5zdGFuY2UuZGVzaWduUmVzb2x1dGlvbiA9IGNjLnNpemUoMTA4MCwgMjM0MCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS55ID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuikh+ijveWIsOWJquWIh+advyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjb3B5VGV4dFN0cmluZyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKSB7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9UU0phdmFCcmlkZ2VcIiwgXCJjb3B5VXNlcklkXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIHRleHQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcclxuICAgICAgICAgICAgbGV0IGRpY3QgPSB7XHJcbiAgICAgICAgICAgICAgICB1c2VySUQ6IHRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiVFNPYmplY3RDQnJpZGdlXCIsIFwiY29weVVzZXJJZDpcIiwgSlNPTi5zdHJpbmdpZnkoZGljdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVybEJ5TGFuZ3VhZ2UobG9hZGVyOiBmZ3VpLkdMb2FkZXIpIHtcclxuICAgICAgICBsZXQgdXJsID0gbG9hZGVyW1wiX2NvbnRlbnRJdGVtXCJdLm5hbWU7XHJcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCB1cmwubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgc3dpdGNoIChBcHBDb25zdC5sYW5ndWFnZVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOiAvL+e5geS9k1xyXG4gICAgICAgICAgICAgICAgdXJsID0gXCJ1aTovL0xvYmJ5L1wiICsgdXJsICsgXCIxXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOiAgLy/nroDkvZNcclxuICAgICAgICAgICAgICAgIHVybCA9IFwidWk6Ly9Mb2JieS9cIiArIHVybCArIFwiMlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZGVyLnVybCA9IHVybDtcclxuICAgIH1cclxufSJdfQ==
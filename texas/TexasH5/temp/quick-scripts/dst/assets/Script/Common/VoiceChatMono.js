
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Common/VoiceChatMono.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70e01okYzxAkIxl937/Ry5K', 'VoiceChatMono');
// Script/Common/VoiceChatMono.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../BaseFrame/ViewBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VoiceChatMono = /** @class */ (function (_super) {
    __extends(VoiceChatMono, _super);
    function VoiceChatMono() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mHasMicroPhonePermission = false; //查看麦克风权限
        _this.mFlag = false;
        _this.mLengthSec = 10;
        _this.mFrequency = 8000;
        return _this;
        // private   _OnVoiceDown(GameObject arg1, UnityEngine.EventSystems.PointerEventData arg2):void
        // {
        //     if (!mHasMicroPhonePermission)
        //     {
        //         Debuger.Log("没有麦克风权限");
        //         return;
        //     }
        //     if (!mHasMicroPhone)
        //     {
        //         Debuger.Log("没有插入麦克风");
        //         return;
        //     }
        //     mCostTime = 0;
        //     mFlag = true;
        //     mDisplayTime = 0;
        //     mAudioClip = Microphone.Start(mDeviceName, mLoop, mLengthSec, mFrequency);       //44100
        // }
        // private   _OnVoiceUp(GameObject arg1, UnityEngine.EventSystems.PointerEventData arg2):void
        // {
        //     if (!mHasMicroPhonePermission || !mHasMicroPhone)
        //         return;
        //     mFlag = false;
        //     Microphone.End(mDeviceName);
        //     if (mCostTime < 1)
        //         return;
        //     if (mCostTime > mAudioClip.length)
        //         mCostTime = mAudioClip.length;
        //     float[] data = AudioClipConverter.Trim(mAudioClip, mCostTime);
        //     if (data == null)
        //         return;
        //     byte[] voice = AudioClipConverter.AudioClipToBytes(data);
        //     if (voice == null || voice.Length == 0)
        //         return;
        //     //发送的语言内容转换
        //     string str = AudioClipConverter.BytesToString(voice);
        //     if (mRetirnVoice != null)
        //     {
        //         mRetirnVoice(str);
        //     }
        // }
    }
    Object.defineProperty(VoiceChatMono.prototype, "packageResourceName", {
        get: function () {
            return "bullfight";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VoiceChatMono.prototype, "packageName", {
        get: function () {
            return "bullfight";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VoiceChatMono.prototype, "componentName", {
        get: function () {
            return "bullfight";
        },
        enumerable: false,
        configurable: true
    });
    VoiceChatMono.prototype.Awake = function () {
        this.mLengthSec = 10;
        this.mFrequency = 8000;
    };
    VoiceChatMono.prototype.MyStart = function (_retirnVoice) {
        if (_retirnVoice === void 0) { _retirnVoice = null; }
        //base.AutoSetGoProperty(this, gameObject);
        if (_retirnVoice != null)
            this.mRetirnVoice = _retirnVoice;
        this.mHasMicroPhonePermission = true;
        // 判断是否有麦克风 有则默认使用第一个
        // if (Microphone.devices.Length > 0)
        // {
        //     mDeviceName = Microphone.devices[0];
        //     mHasMicroPhone = true;
        // }
        // else
        // {
        //     mHasMicroPhone = false;
        // }
        // ZUIEventListener.OverWriteCallBack(ui_btnYuYin.gameObject, _OnVoiceDown, ZUIEventType.Down);
        // ZUIEventListener.OverWriteCallBack(ui_btnYuYin.gameObject, _OnVoiceUp, ZUIEventType.Up);
    };
    // Update is called once per frame
    VoiceChatMono.prototype.Update = function () {
        if (this.mFlag) {
            // mCostTime += Time.deltaTime;
            // if ((int)mCostTime > mDisplayTime)
            // {
            //     Debug.Log(mCostTime);
            //     mDisplayTime = (int)mCostTime;
            //     if (mCostTime > mLengthSec)
            //     {
            //         _OnVoiceUp(null, null);
            //     }
            // }
        }
    };
    VoiceChatMono = __decorate([
        ccclass
    ], VoiceChatMono);
    return VoiceChatMono;
}(ViewBase_1.default));
exports.default = VoiceChatMono;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25cXFZvaWNlQ2hhdE1vbm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBRXZDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFRO0lBQW5EO1FBQUEscUVBMEhDO1FBL0dhLDhCQUF3QixHQUFXLEtBQUssQ0FBQyxDQUFFLFNBQVM7UUFLcEQsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUd4QixnQkFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixnQkFBVSxHQUFVLElBQUksQ0FBQzs7UUFrRGxDLCtGQUErRjtRQUMvRixJQUFJO1FBQ0oscUNBQXFDO1FBQ3JDLFFBQVE7UUFDUixrQ0FBa0M7UUFDbEMsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUiwyQkFBMkI7UUFDM0IsUUFBUTtRQUNSLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsUUFBUTtRQUVSLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLCtGQUErRjtRQUMvRixJQUFJO1FBRUosNkZBQTZGO1FBQzdGLElBQUk7UUFDSix3REFBd0Q7UUFDeEQsa0JBQWtCO1FBRWxCLHFCQUFxQjtRQUVyQixtQ0FBbUM7UUFFbkMseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUVsQix5Q0FBeUM7UUFDekMseUNBQXlDO1FBRXpDLHFFQUFxRTtRQUNyRSx3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLGdFQUFnRTtRQUNoRSw4Q0FBOEM7UUFDOUMsa0JBQWtCO1FBRWxCLGtCQUFrQjtRQUNsQiw0REFBNEQ7UUFFNUQsZ0NBQWdDO1FBQ2hDLFFBQVE7UUFDUiw2QkFBNkI7UUFDN0IsUUFBUTtRQUVSLElBQUk7SUFHUixDQUFDO0lBeEhHLHNCQUFjLDhDQUFtQjthQUFqQztZQUNJLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsc0NBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHdDQUFhO2FBQTNCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFlTSw2QkFBSyxHQUFaO1FBRUksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVRLCtCQUFPLEdBQWhCLFVBQW1CLFlBQTBCO1FBQTFCLDZCQUFBLEVBQUEsbUJBQTBCO1FBRXpDLDJDQUEyQztRQUMzQyxJQUFJLFlBQVksSUFBSSxJQUFJO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBRSx3QkFBd0IsR0FBRyxJQUFJLENBQUM7UUFDdEMscUJBQXFCO1FBQ3JCLHFDQUFxQztRQUNyQyxJQUFJO1FBQ0osMkNBQTJDO1FBQzNDLDZCQUE2QjtRQUM3QixJQUFJO1FBQ0osT0FBTztRQUNQLElBQUk7UUFDSiw4QkFBOEI7UUFDOUIsSUFBSTtRQUNKLCtGQUErRjtRQUMvRiwyRkFBMkY7SUFDL0YsQ0FBQztJQUdELGtDQUFrQztJQUNoQyw4QkFBTSxHQUFOO1FBRUUsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUNkO1lBQ0ksK0JBQStCO1lBQy9CLHFDQUFxQztZQUNyQyxJQUFJO1lBQ0osNEJBQTRCO1lBQzVCLHFDQUFxQztZQUNyQyxrQ0FBa0M7WUFDbEMsUUFBUTtZQUNSLGtDQUFrQztZQUNsQyxRQUFRO1lBQ1IsSUFBSTtTQUNQO0lBQ0wsQ0FBQztJQXBFZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTBIakM7SUFBRCxvQkFBQztDQTFIRCxBQTBIQyxDQTFIMEMsa0JBQVEsR0EwSGxEO2tCQTFIb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XG4gXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZvaWNlQ2hhdE1vbm8gZXh0ZW5kcyBWaWV3QmFzZSB7XG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiYnVsbGZpZ2h0XCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZU5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiYnVsbGZpZ2h0XCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJidWxsZmlnaHRcIjtcbiAgICB9XG4gICAgcHJpdmF0ZSAgIG1IYXNNaWNyb1Bob25lUGVybWlzc2lvbjpib29sZWFuID0gZmFsc2U7ICAvL+afpeeci+m6puWFi+mjjuadg+mZkFxuICAgIHByaXZhdGUgIG1EZXZpY2VOYW1lOnN0cmluZztcbiAgICBwcml2YXRlICAgbUhhc01pY3JvUGhvbmU6Ym9vbGVhbiA7XG5cbiAgICBwcml2YXRlICAgbUNvc3RUaW1lOmJvb2xlYW47XG4gICAgcHJpdmF0ZSAgIG1GbGFnIDpib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSAgIG1EaXNwbGF5VGltZTpudW1iZXI7XG4gICAgcHVibGljICAgbUxvb3A6Ym9vbGVhbiBcbiAgICBwdWJsaWMgICBtTGVuZ3RoU2VjOm51bWJlciA9IDEwO1xuICAgIHB1YmxpYyAgIG1GcmVxdWVuY3k6bnVtYmVyID0gODAwMDtcbiAgICBwcml2YXRlICBtQXVkaW9DbGk6Y2MuQXVkaW9DbGlwO1xuICAgIHB1YmxpYyAgIHVpX2J0bll1WWluOmNjLk5vZGU7XG4gICAgcHVibGljICBtUmV0aXJuVm9pY2U6RnVuY3Rpb247Ly9GdW5jdGlvbjxzdHJpbmc+O1xuXG4gICAgcHVibGljIEF3YWtlKCkgOnZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubUxlbmd0aFNlYyA9IDEwO1xuICAgICAgICB0aGlzLm1GcmVxdWVuY3kgPSA4MDAwO1xuICAgIH1cblxuICAgIHB1YmxpYyAgIE15U3RhcnQoICBfcmV0aXJuVm9pY2U6RnVuY3Rpb249bnVsbCk6dm9pZFxuICAgIHtcbiAgICAgICAgLy9iYXNlLkF1dG9TZXRHb1Byb3BlcnR5KHRoaXMsIGdhbWVPYmplY3QpO1xuICAgICAgICBpZiAoX3JldGlyblZvaWNlICE9IG51bGwpXG4gICAgICAgIHRoaXMubVJldGlyblZvaWNlID0gX3JldGlyblZvaWNlO1xuICAgICAgICB0aGlzLiBtSGFzTWljcm9QaG9uZVBlcm1pc3Npb24gPSB0cnVlO1xuICAgICAgICAvLyDliKTmlq3mmK/lkKbmnInpuqblhYvpo44g5pyJ5YiZ6buY6K6k5L2/55So56ys5LiA5LiqXG4gICAgICAgIC8vIGlmIChNaWNyb3Bob25lLmRldmljZXMuTGVuZ3RoID4gMClcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgbURldmljZU5hbWUgPSBNaWNyb3Bob25lLmRldmljZXNbMF07XG4gICAgICAgIC8vICAgICBtSGFzTWljcm9QaG9uZSA9IHRydWU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBtSGFzTWljcm9QaG9uZSA9IGZhbHNlO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIFpVSUV2ZW50TGlzdGVuZXIuT3ZlcldyaXRlQ2FsbEJhY2sodWlfYnRuWXVZaW4uZ2FtZU9iamVjdCwgX09uVm9pY2VEb3duLCBaVUlFdmVudFR5cGUuRG93bik7XG4gICAgICAgIC8vIFpVSUV2ZW50TGlzdGVuZXIuT3ZlcldyaXRlQ2FsbEJhY2sodWlfYnRuWXVZaW4uZ2FtZU9iamVjdCwgX09uVm9pY2VVcCwgWlVJRXZlbnRUeXBlLlVwKTtcbiAgICB9XG5cblxuICAgIC8vIFVwZGF0ZSBpcyBjYWxsZWQgb25jZSBwZXIgZnJhbWVcbiAgICAgIFVwZGF0ZSgpOnZvaWRcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLm1GbGFnKVxuICAgICAgICB7XG4gICAgICAgICAgICAvLyBtQ29zdFRpbWUgKz0gVGltZS5kZWx0YVRpbWU7XG4gICAgICAgICAgICAvLyBpZiAoKGludCltQ29zdFRpbWUgPiBtRGlzcGxheVRpbWUpXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgRGVidWcuTG9nKG1Db3N0VGltZSk7XG4gICAgICAgICAgICAvLyAgICAgbURpc3BsYXlUaW1lID0gKGludCltQ29zdFRpbWU7XG4gICAgICAgICAgICAvLyAgICAgaWYgKG1Db3N0VGltZSA+IG1MZW5ndGhTZWMpXG4gICAgICAgICAgICAvLyAgICAge1xuICAgICAgICAgICAgLy8gICAgICAgICBfT25Wb2ljZVVwKG51bGwsIG51bGwpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHByaXZhdGUgICBfT25Wb2ljZURvd24oR2FtZU9iamVjdCBhcmcxLCBVbml0eUVuZ2luZS5FdmVudFN5c3RlbXMuUG9pbnRlckV2ZW50RGF0YSBhcmcyKTp2b2lkXG4gICAgLy8ge1xuICAgIC8vICAgICBpZiAoIW1IYXNNaWNyb1Bob25lUGVybWlzc2lvbilcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgRGVidWdlci5Mb2coXCLmsqHmnInpuqblhYvpo47mnYPpmZBcIik7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKCFtSGFzTWljcm9QaG9uZSlcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgRGVidWdlci5Mb2coXCLmsqHmnInmj5LlhaXpuqblhYvpo45cIik7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBtQ29zdFRpbWUgPSAwO1xuICAgIC8vICAgICBtRmxhZyA9IHRydWU7XG4gICAgLy8gICAgIG1EaXNwbGF5VGltZSA9IDA7XG4gICAgLy8gICAgIG1BdWRpb0NsaXAgPSBNaWNyb3Bob25lLlN0YXJ0KG1EZXZpY2VOYW1lLCBtTG9vcCwgbUxlbmd0aFNlYywgbUZyZXF1ZW5jeSk7ICAgICAgIC8vNDQxMDBcbiAgICAvLyB9XG5cbiAgICAvLyBwcml2YXRlICAgX09uVm9pY2VVcChHYW1lT2JqZWN0IGFyZzEsIFVuaXR5RW5naW5lLkV2ZW50U3lzdGVtcy5Qb2ludGVyRXZlbnREYXRhIGFyZzIpOnZvaWRcbiAgICAvLyB7XG4gICAgLy8gICAgIGlmICghbUhhc01pY3JvUGhvbmVQZXJtaXNzaW9uIHx8ICFtSGFzTWljcm9QaG9uZSlcbiAgICAvLyAgICAgICAgIHJldHVybjtcblxuICAgIC8vICAgICBtRmxhZyA9IGZhbHNlO1xuXG4gICAgLy8gICAgIE1pY3JvcGhvbmUuRW5kKG1EZXZpY2VOYW1lKTtcblxuICAgIC8vICAgICBpZiAobUNvc3RUaW1lIDwgMSlcbiAgICAvLyAgICAgICAgIHJldHVybjtcblxuICAgIC8vICAgICBpZiAobUNvc3RUaW1lID4gbUF1ZGlvQ2xpcC5sZW5ndGgpXG4gICAgLy8gICAgICAgICBtQ29zdFRpbWUgPSBtQXVkaW9DbGlwLmxlbmd0aDtcblxuICAgIC8vICAgICBmbG9hdFtdIGRhdGEgPSBBdWRpb0NsaXBDb252ZXJ0ZXIuVHJpbShtQXVkaW9DbGlwLCBtQ29zdFRpbWUpO1xuICAgIC8vICAgICBpZiAoZGF0YSA9PSBudWxsKVxuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICBieXRlW10gdm9pY2UgPSBBdWRpb0NsaXBDb252ZXJ0ZXIuQXVkaW9DbGlwVG9CeXRlcyhkYXRhKTtcbiAgICAvLyAgICAgaWYgKHZvaWNlID09IG51bGwgfHwgdm9pY2UuTGVuZ3RoID09IDApXG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgIC8vICAgICAvL+WPkemAgeeahOivreiogOWGheWuuei9rOaNolxuICAgIC8vICAgICBzdHJpbmcgc3RyID0gQXVkaW9DbGlwQ29udmVydGVyLkJ5dGVzVG9TdHJpbmcodm9pY2UpO1xuXG4gICAgLy8gICAgIGlmIChtUmV0aXJuVm9pY2UgIT0gbnVsbClcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbVJldGlyblZvaWNlKHN0cik7XG4gICAgLy8gICAgIH1cbiBcbiAgICAvLyB9XG4gIFxuXG59XG4iXX0=
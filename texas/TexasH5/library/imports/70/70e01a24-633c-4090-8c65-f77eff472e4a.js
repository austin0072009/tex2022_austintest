"use strict";
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
"use strict";
cc._RF.push(module, 'c4692RiYztG074jtqNG/vfe', 'RecordUiLayer');
// Script/BaseFrame/RecordUiLayer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VoiceNative_1 = require("./VoiceNative");
var RecordUiLayer = /** @class */ (function () {
    function RecordUiLayer() {
    }
    RecordUiLayer.instance = function () {
        if (!this._instance) {
            this._instance = new RecordUiLayer();
        }
        return this._instance;
    };
    // onLoad() {
    //     voiceNative.init();
    //     this.SoundBtnNode.active = true;
    //     this.showMicBtn(true);
    // }
    RecordUiLayer.prototype.init = function (node) {
        this.SoundBtnNode = node;
        VoiceNative_1.default.init();
        this.SoundBtnNode.active = true;
        this.showMicBtn(true);
    };
    //是否显示麦克风按钮，并根据显示状态注册监听事件
    RecordUiLayer.prototype.showMicBtn = function (enable) {
        var self = this;
        cc.log("GameManager ShowMicBtn: " + enable);
        var lastTouchTime = null;
        self.SoundBtnNode.active = enable;
        var micBtnDown = function (event) {
            cc.log("GameManager micBtn event down");
            lastTouchTime = Date.now();
            //开始录音
            VoiceNative_1.default.prepare("record.amr");
        };
        var micBtnUp = function (event) {
            cc.log("GameManager micBtn event up");
            // voiceNativeCall.SetMicMute(true);
            if (Date.now() - lastTouchTime < 100) {
                VoiceNative_1.default.cancel();
                cc.log("时间小于一秒");
                // require("TipsUtil").ShowFloatText("时间小于1秒", require("TipsUtil").FloatType.type2);
            }
            else {
                if (lastTouchTime != null) {
                    // 录音结束
                    VoiceNative_1.default.release();
                    // 录音时间
                    var time = Date.now() - lastTouchTime;
                    cc.log("现在时间。。。。。  " + Date.now());
                    cc.log("开始时间。。。。。  " + lastTouchTime);
                    cc.log("录音时间。。。。。  " + time);
                    // 读取录音文件
                    var msgStr = VoiceNative_1.default.getVoiceData("record.amr");
                    cc.log(" 发送的字符串录音文件。。。。。  " + msgStr);
                    // 等待发送
                    // var baseData = require("BaseScript")._utf8_encode(msgStr);
                    // cc.log(" base64 打包录音文件。。。。。  " + baseData);
                    // 直接发送二进制 
                    //   require("VoiceMsgHandler").GetCS_VoiceChatReq(time, msgStr);
                    //  本地测试测试
                    setTimeout(function () {
                        // 间隔两秒播放录音
                        var msgfile = "record.amr";
                        VoiceNative_1.default.play(msgfile);
                        // 到这里结束
                        //voiceNative.writeVoice 根据msgStr 文件  和命名 把后端发送过来的语音存放本地
                        // 本地测试不需要这步
                        VoiceNative_1.default.writeVoice(msgfile, msgStr);
                        cc.log("即将要播放的语音内容" + msgStr);
                        self.showSpeaker(msgfile);
                        self._lastPlayTime = Date.now() + time;
                    }, 2000);
                }
            }
        };
        var micBtnCancel = function (event) {
            cc.log("GameManager micBtn event cancel");
            VoiceNative_1.default.cancel();
        };
        if (this.SoundBtnNode.active == true) {
            this.SoundBtnNode.on(cc.Node.EventType.TOUCH_START, micBtnDown);
            this.SoundBtnNode.on(cc.Node.EventType.TOUCH_END, micBtnUp);
            this.SoundBtnNode.on(cc.Node.EventType.TOUCH_CANCEL, micBtnCancel);
        }
        else {
            this.SoundBtnNode.off(cc.Node.EventType.TOUCH_START, micBtnDown);
            this.SoundBtnNode.off(cc.Node.EventType.TOUCH_END, micBtnUp);
            this.SoundBtnNode.off(cc.Node.EventType.TOUCH_CANCEL, micBtnCancel);
        }
    };
    // 播放语音通知 
    RecordUiLayer.prototype.PlayVoiceNotes = function (time, data) {
        var msgfile = "cord.amr";
        var self = this;
        // var baseData = require("BaseScript")._utf8_decode(data);
        var dataView = new Uint8Array(data.buffer, data.offset);
        // cc.log("dataView=" + dataView);
        VoiceNative_1.default.writeVoice(msgfile, dataView);
        cc.log("即将要播放的语音内容" + dataView);
        setTimeout(function () {
            self.showSpeaker(msgfile);
            self._lastPlayTime = Date.now() + time;
        }, 100);
    };
    RecordUiLayer.prototype.showSpeaker = function (msgfile) {
        VoiceNative_1.default.play(msgfile);
    };
    RecordUiLayer.prototype.onPlayerOver = function () {
        cc.audioEngine.resumeAll();
    };
    RecordUiLayer.prototype.update = function (dt) {
        if (this._lastPlayTime != null) {
            if (Date.now() > this._lastPlayTime + 200) {
                this.onPlayerOver();
                this._lastPlayTime = null;
            }
        }
        else {
            // FunctionUILayer.SetPlayVice();
        }
    };
    return RecordUiLayer;
}());
exports.default = RecordUiLayer;

cc._RF.pop();
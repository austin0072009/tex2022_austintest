
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BaseFrame/RecordUiLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCYXNlRnJhbWVcXFJlY29yZFVpTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBd0M7QUFDeEM7SUFBQTtJQWdJQSxDQUFDO0lBN0hpQixzQkFBUSxHQUF0QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBS0QsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1Q0FBdUM7SUFDdkMsNkJBQTZCO0lBQzdCLElBQUk7SUFFSiw0QkFBSSxHQUFKLFVBQUssSUFBYTtRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLHFCQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHlCQUF5QjtJQUNsQixrQ0FBVSxHQUFqQixVQUFrQixNQUFNO1FBQ3BCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixFQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbEMsSUFBSSxVQUFVLEdBQUcsVUFBVSxLQUFLO1lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztZQUN4QyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzNCLE1BQU07WUFDTixxQkFBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUM7UUFFRixJQUFJLFFBQVEsR0FBRyxVQUFVLEtBQUs7WUFDMUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3RDLG9DQUFvQztZQUNwQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxhQUFhLEdBQUcsR0FBRyxFQUFFO2dCQUNsQyxxQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqQixvRkFBb0Y7YUFDdkY7aUJBQU07Z0JBQ0gsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFO29CQUN2QixPQUFPO29CQUNQLHFCQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3RCLE9BQU87b0JBQ1AsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLGFBQWEsQ0FBQztvQkFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxDQUFDO29CQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDN0IsU0FBUztvQkFDVCxJQUFJLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsT0FBTztvQkFDUCw2REFBNkQ7b0JBQzdELDhDQUE4QztvQkFDOUMsV0FBVztvQkFDWCxpRUFBaUU7b0JBRWpFLFVBQVU7b0JBQ1YsVUFBVSxDQUFDO3dCQUNQLFdBQVc7d0JBQ1gsSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDO3dCQUMzQixxQkFBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDMUIsUUFBUTt3QkFDUix3REFBd0Q7d0JBQ3hELFlBQVk7d0JBQ1oscUJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUN4QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7aUJBRVg7YUFDSjtRQUNMLENBQUMsQ0FBQztRQUNGLElBQUksWUFBWSxHQUFHLFVBQVUsS0FBSztZQUM5QixFQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDMUMscUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDdkU7SUFDTCxDQUFDO0lBQ0QsVUFBVTtJQUNWLHNDQUFjLEdBQWQsVUFBZSxJQUFJLEVBQUUsSUFBSTtRQUNyQixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLDJEQUEyRDtRQUMzRCxJQUFJLFFBQVEsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxrQ0FBa0M7UUFDbEMscUJBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLFVBQVUsQ0FBQztZQUNQLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzNDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNYLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksT0FBTztRQUNmLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxvQ0FBWSxHQUFaO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsOEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQzVCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxFQUFFO2dCQUN2QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQzdCO1NBQ0o7YUFBTTtZQUNILGlDQUFpQztTQUNwQztJQUNMLENBQUM7SUFDTCxvQkFBQztBQUFELENBaElBLEFBZ0lDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdm9pY2VOYXRpdmUgZnJvbSBcIi4vVm9pY2VOYXRpdmVcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZFVpTGF5ZXIge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUmVjb3JkVWlMYXllcjtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFJlY29yZFVpTGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgU291bmRCdG5Ob2RlOiBjYy5Ob2RlO1xuICAgIHB1YmxpYyBfbGFzdFBsYXlUaW1lOiBudW1iZXI7XG4gICAgLy8gb25Mb2FkKCkge1xuICAgIC8vICAgICB2b2ljZU5hdGl2ZS5pbml0KCk7XG4gICAgLy8gICAgIHRoaXMuU291bmRCdG5Ob2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMuc2hvd01pY0J0bih0cnVlKTtcbiAgICAvLyB9XG5cbiAgICBpbml0KG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5Tb3VuZEJ0bk5vZGUgPSBub2RlO1xuICAgICAgICB2b2ljZU5hdGl2ZS5pbml0KCk7XG4gICAgICAgIHRoaXMuU291bmRCdG5Ob2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd01pY0J0bih0cnVlKTtcbiAgICB9XG5cbiAgICAvL+aYr+WQpuaYvuekuum6puWFi+mjjuaMiemSru+8jOW5tuagueaNruaYvuekuueKtuaAgeazqOWGjOebkeWQrOS6i+S7tlxuICAgIHB1YmxpYyBzaG93TWljQnRuKGVuYWJsZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNjLmxvZyhcIkdhbWVNYW5hZ2VyIFNob3dNaWNCdG46IFwiICsgZW5hYmxlKTtcbiAgICAgICAgbGV0IGxhc3RUb3VjaFRpbWUgPSBudWxsO1xuICAgICAgICBzZWxmLlNvdW5kQnRuTm9kZS5hY3RpdmUgPSBlbmFibGU7XG4gICAgICAgIGxldCBtaWNCdG5Eb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBjYy5sb2coXCJHYW1lTWFuYWdlciBtaWNCdG4gZXZlbnQgZG93blwiKTtcbiAgICAgICAgICAgIGxhc3RUb3VjaFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgLy/lvIDlp4vlvZXpn7NcbiAgICAgICAgICAgIHZvaWNlTmF0aXZlLnByZXBhcmUoXCJyZWNvcmQuYW1yXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBtaWNCdG5VcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgY2MubG9nKFwiR2FtZU1hbmFnZXIgbWljQnRuIGV2ZW50IHVwXCIpO1xuICAgICAgICAgICAgLy8gdm9pY2VOYXRpdmVDYWxsLlNldE1pY011dGUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIGxhc3RUb3VjaFRpbWUgPCAxMDApIHtcbiAgICAgICAgICAgICAgICB2b2ljZU5hdGl2ZS5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLml7bpl7TlsI/kuo7kuIDnp5JcIik7XG4gICAgICAgICAgICAgICAgLy8gcmVxdWlyZShcIlRpcHNVdGlsXCIpLlNob3dGbG9hdFRleHQoXCLml7bpl7TlsI/kuo4x56eSXCIsIHJlcXVpcmUoXCJUaXBzVXRpbFwiKS5GbG9hdFR5cGUudHlwZTIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGFzdFRvdWNoVGltZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW9lemfs+e7k+adn1xuICAgICAgICAgICAgICAgICAgICB2b2ljZU5hdGl2ZS5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW9lemfs+aXtumXtFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGltZSA9IERhdGUubm93KCkgLSBsYXN0VG91Y2hUaW1lO1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLnjrDlnKjml7bpl7TjgILjgILjgILjgILjgIIgIFwiICsgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIuW8gOWni+aXtumXtOOAguOAguOAguOAguOAgiAgXCIgKyBsYXN0VG91Y2hUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5b2V6Z+z5pe26Ze044CC44CC44CC44CC44CCICBcIiArIHRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyDor7vlj5blvZXpn7Pmlofku7ZcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1zZ1N0ciA9IHZvaWNlTmF0aXZlLmdldFZvaWNlRGF0YShcInJlY29yZC5hbXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIiDlj5HpgIHnmoTlrZfnrKbkuLLlvZXpn7Pmlofku7bjgILjgILjgILjgILjgIIgIFwiICsgbXNnU3RyKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g562J5b6F5Y+R6YCBXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBiYXNlRGF0YSA9IHJlcXVpcmUoXCJCYXNlU2NyaXB0XCIpLl91dGY4X2VuY29kZShtc2dTdHIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCIgYmFzZTY0IOaJk+WMheW9lemfs+aWh+S7tuOAguOAguOAguOAguOAgiAgXCIgKyBiYXNlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpeWPkemAgeS6jOi/m+WItiBcbiAgICAgICAgICAgICAgICAgICAgLy8gICByZXF1aXJlKFwiVm9pY2VNc2dIYW5kbGVyXCIpLkdldENTX1ZvaWNlQ2hhdFJlcSh0aW1lLCBtc2dTdHIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICDmnKzlnLDmtYvor5XmtYvor5VcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDpl7TpmpTkuKTnp5Lmkq3mlL7lvZXpn7NcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtc2dmaWxlID0gXCJyZWNvcmQuYW1yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2ljZU5hdGl2ZS5wbGF5KG1zZ2ZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yiw6L+Z6YeM57uT5p2fXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZvaWNlTmF0aXZlLndyaXRlVm9pY2Ug5qC55o2ubXNnU3RyIOaWh+S7tiAg5ZKM5ZG95ZCNIOaKiuWQjuerr+WPkemAgei/h+adpeeahOivremfs+WtmOaUvuacrOWcsFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pys5Zyw5rWL6K+V5LiN6ZyA6KaB6L+Z5q2lXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2ljZU5hdGl2ZS53cml0ZVZvaWNlKG1zZ2ZpbGUsIG1zZ1N0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCLljbPlsIbopoHmkq3mlL7nmoTor63pn7PlhoXlrrlcIiArIG1zZ1N0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dTcGVha2VyKG1zZ2ZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fbGFzdFBsYXlUaW1lID0gRGF0ZS5ub3coKSArIHRpbWU7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBtaWNCdG5DYW5jZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIkdhbWVNYW5hZ2VyIG1pY0J0biBldmVudCBjYW5jZWxcIik7XG4gICAgICAgICAgICB2b2ljZU5hdGl2ZS5jYW5jZWwoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5Tb3VuZEJ0bk5vZGUuYWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuU291bmRCdG5Ob2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBtaWNCdG5Eb3duKTtcbiAgICAgICAgICAgIHRoaXMuU291bmRCdG5Ob2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgbWljQnRuVXApO1xuICAgICAgICAgICAgdGhpcy5Tb3VuZEJ0bk5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBtaWNCdG5DYW5jZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5Tb3VuZEJ0bk5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBtaWNCdG5Eb3duKTtcbiAgICAgICAgICAgIHRoaXMuU291bmRCdG5Ob2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIG1pY0J0blVwKTtcbiAgICAgICAgICAgIHRoaXMuU291bmRCdG5Ob2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIG1pY0J0bkNhbmNlbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5pKt5pS+6K+t6Z+z6YCa55+lIFxuICAgIFBsYXlWb2ljZU5vdGVzKHRpbWUsIGRhdGEpIHtcbiAgICAgICAgdmFyIG1zZ2ZpbGUgPSBcImNvcmQuYW1yXCI7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gdmFyIGJhc2VEYXRhID0gcmVxdWlyZShcIkJhc2VTY3JpcHRcIikuX3V0ZjhfZGVjb2RlKGRhdGEpO1xuICAgICAgICB2YXIgZGF0YVZpZXcgPSBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5vZmZzZXQpO1xuICAgICAgICAvLyBjYy5sb2coXCJkYXRhVmlldz1cIiArIGRhdGFWaWV3KTtcbiAgICAgICAgdm9pY2VOYXRpdmUud3JpdGVWb2ljZShtc2dmaWxlLCBkYXRhVmlldyk7XG4gICAgICAgIGNjLmxvZyhcIuWNs+WwhuimgeaSreaUvueahOivremfs+WGheWuuVwiICsgZGF0YVZpZXcpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuc2hvd1NwZWFrZXIobXNnZmlsZSk7XG4gICAgICAgICAgICBzZWxmLl9sYXN0UGxheVRpbWUgPSBEYXRlLm5vdygpICsgdGltZTtcbiAgICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIHNob3dTcGVha2VyKG1zZ2ZpbGUpIHtcbiAgICAgICAgdm9pY2VOYXRpdmUucGxheShtc2dmaWxlKTtcbiAgICB9XG5cbiAgICBvblBsYXllck92ZXIoKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RQbGF5VGltZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSA+IHRoaXMuX2xhc3RQbGF5VGltZSArIDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25QbGF5ZXJPdmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdFBsYXlUaW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZ1bmN0aW9uVUlMYXllci5TZXRQbGF5VmljZSgpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==
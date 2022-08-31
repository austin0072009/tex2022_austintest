
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/share/ShareView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1db4HKML5DUaJ/m1pLkslZ', 'ShareView');
// GameHall/script/Lobby/share/ShareView.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var NativeMethod_1 = require("../../NativeMethod");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
var qrcode_1 = require("./qrcode");
/**
 * @description 分享
 */
var ShareView = /** @class */ (function (_super) {
    __extends(ShareView, _super);
    function ShareView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_CommunityBreak = null;
        /** */
        _this.ui_btn_saveImg = null;
        _this.ui_btn_copyLink = null;
        _this.ui_shareUrl = null;
        _this.ui_sqnum = null;
        _this.ui_qrcodeNode = null;
        _this.ui_invitationGroup = null;
        _this.linkHost = "";
        return _this;
    }
    Object.defineProperty(ShareView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShareView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShareView.prototype, "componentName", {
        get: function () {
            return "share";
        },
        enumerable: false,
        configurable: true
    });
    ShareView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_CommunityBreak.onClick(this.Hide, this);
        this.ui_btn_saveImg.onClick(this.saveImage, this);
        this.ui_btn_copyLink.onClick(this.copyLink, this);
        this.qrNode = this.ui_qrcodeNode.node;
    };
    ShareView.prototype.OnLoadCompleted = function () {
        this.setQRCode();
        this.Show();
    };
    ShareView.prototype.Hide = function () {
        AudioManager_1.AudioManager.Singleton.play('ShareView', "button");
        _super.prototype.Hide.call(this);
    };
    ShareView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        this.setLinkUrl();
    };
    ShareView.prototype.setLinkUrl = function () {
        if (LobbyViewCtr_1.default.instance.Model.ageninfo) { //&& LobbyViewCtr.instance.Model.ageninfo.lv <= 3
            this.ui_invitationGroup.asCom.visible = true;
            this.ui_sqnum.text = LobbyViewCtr_1.default.instance.Model.ageninfo.Code;
        }
        else {
            this.ui_invitationGroup.asCom.visible = false;
        }
    };
    ShareView.prototype.setQRCode = function () {
        var url = "";
        if (AppConst_1.AppConst.platform == "Android") {
            url = BaseFrameNative_1.BaseFrameNative.serverList.apksite;
        }
        else if (AppConst_1.AppConst.platform == "iOS") {
            url = BaseFrameNative_1.BaseFrameNative.serverList.ipasite;
        }
        else {
            url = BaseFrameNative_1.BaseFrameNative.serverList.apksite;
        }
        this.linkHost = url;
        this.ui_shareUrl.setVar("host", url).flushVars();
        this.setContent(url);
    };
    ShareView.prototype.setContent = function (value) {
        var qrcode = new qrcode_1.QRCode(-1, 2);
        qrcode.addData(value);
        qrcode.make();
        var size = 370;
        var num = qrcode.getModuleCount();
        var ctx = this.qrNode.addComponent(cc.Graphics);
        ctx.clear();
        ctx.fillColor = cc.Color.BLACK;
        // compute tileW/tileH based on node width and height
        var tileW = size / num;
        var tileH = size / num;
        // draw in the Graphics
        for (var row = 0; row < num; row++) {
            for (var col = 0; col < num; col++) {
                if (qrcode.isDark(row, col)) {
                    // cc.log(row, col)
                    // ctx.fillColor = cc.Color.BLACK;
                    var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
                    var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
                    ctx.rect(Math.round(col * tileW), size - tileH - Math.round(row * tileH), w, h);
                    ctx.fill();
                }
                else {
                    // ctx.fillColor = cc.Color.WHITE;
                }
            }
        }
    };
    /**複製鏈接 */
    ShareView.prototype.copyLink = function () {
        AudioManager_1.AudioManager.Singleton.play('ShareView', "button");
        var linkUrl = this.linkHost;
        NativeMethod_1.default.copyTextString(linkUrl);
        CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("复制成功");
    };
    ShareView.prototype.filpYImage = function (data, width, height) {
        // create the data array
        var picData = new Uint8Array(width * height * 4);
        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var srow = height - 1 - row;
            var start = srow * width * 4;
            var reStart = row * width * 4;
            // save the piexls data
            for (var i = 0; i < rowBytes; i++) {
                picData[reStart + i] = data[start + i];
            }
        }
        return picData;
    };
    ShareView.prototype.initImage = function () {
        var data = this.texture.readPixels();
        //this._width = this.texture.width;
        //this._height = this.texture.height;
        var picData = this.filpYImage(data, this._width, this._height);
        return picData;
    };
    /**截图 */
    ShareView.prototype.saveImage = function () {
        var _this = this;
        AudioManager_1.AudioManager.Singleton.play('ShareView', "button");
        if (CC_JSB) {
            var size = cc.view.getVisibleSize(); //cc.director.getWinSize(); cc.view.getVisibleSize()
            var node_1 = new cc.Node();
            node_1.parent = cc.director.getScene();
            var width_1 = Math.floor(size.width);
            var height_1 = Math.floor(size.height);
            this._width = width_1;
            this._height = height_1;
            node_1.width = width_1;
            node_1.height = height_1;
            node_1.x = size.width / 2;
            node_1.y = size.height / 2;
            var camera_1 = node_1.addComponent(cc.Camera);
            // 设置你想要的截图内容的 cullingMask
            camera_1.cullingMask = 0xffffffff;
            // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样        camera 的内容将会渲染到新建的 RenderTexture 中。
            var texture = new cc.RenderTexture();
            this.texture = texture;
            //@ts-ignore
            // let gl = cc.game["_renderContext"];
            // console.log("===============", width, height, gl.STENCIL_INDEX8)
            texture.initWithSize(width_1, height_1); //cc["gfx"].RB_FMT_S8
            // 如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
            camera_1.targetTexture = texture;
            camera_1.render();
            var picData_1 = this.initImage();
            this.schedule(function () {
                _this.createCanvas(picData_1);
                //jsb.fileUtils.getWritablePath()     "/sdcard/Pictures/"
                var filePath = jsb.fileUtils.getWritablePath() + 'render_to_sprite_image.png';
                if (cc.sys.os == cc.sys.OS_ANDROID) {
                    filePath = "/sdcard/Pictures/render_to_sprite_image.png";
                }
                //@ts-ignore
                var success = jsb.saveImageData(picData_1, width_1, height_1, filePath);
                camera_1.enabled = false;
                camera_1.destroy();
                node_1.destroy();
                // if (success) {
                //     console.log("save image data success, file: " + filePath);
                // } else {
                //     console.log("保存失败");
                // }
            }, 1, 0);
        }
        else {
            cc.director.once(cc.Director.EVENT_AFTER_DRAW, function () {
                //此处开始执行截屏
                var canvas = cc.game.canvas;
                var base64 = canvas.toDataURL("image/png");
                // const href = base64.replace(/^data:image[^;]*/, "data:image/octet-stream");
                //document.location.href = href;
                var a = document.createElement("a");
                a.href = base64;
                a.download = "image";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        }
    };
    ShareView.prototype.createCanvas = function (picData) {
        var texture = new cc.Texture2D();
        texture.initWithData(picData, 32, this._width, this._height);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = cc.director.getScene();
        // set position
        var width = cc.winSize.width;
        var height = cc.winSize.height;
        node.x = width / 2;
        node.y = height / 2;
        // node.on(cc.Node.EventType.TOUCH_START, () => {
        //     node.parent = null;
        //     node.destroy();
        // });
        this.captureAction(node, width, height);
    };
    ShareView.prototype.captureAction = function (capture, width, height) {
        var scaleAction = cc.scaleTo(1, 0.3);
        var targetPos = cc.v2(width - width / 6, height / 4);
        var moveAction = cc.moveTo(1, targetPos);
        var spawn = cc.spawn(scaleAction, moveAction);
        capture.runAction(cc.sequence(spawn, cc.delayTime(3), cc.callFunc(function () {
            capture.parent = null;
            capture.destroy();
        })));
        var blinkAction = cc.blink(0.1, 1);
        // scene action
        this.node.runAction(blinkAction);
    };
    return ShareView;
}(ViewBase_1.default));
exports.default = ShareView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHNoYXJlXFxTaGFyZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEVBQXlFO0FBQ3pFLG9FQUFtRTtBQUNuRSxrRUFBNkQ7QUFDN0QsMkZBQTBGO0FBQzFGLHNFQUFxRTtBQUNyRSxtREFBOEM7QUFDOUMsZ0RBQTJDO0FBQzNDLG1DQUFrQztBQUVsQzs7R0FFRztBQUNIO0lBQXVDLDZCQUFRO0lBQS9DO1FBQUEscUVBdVBDO1FBNU9XLDJCQUFxQixHQUFpQixJQUFJLENBQUM7UUFDbkQsTUFBTTtRQUNFLG9CQUFjLEdBQWlCLElBQUksQ0FBQztRQUVwQyxxQkFBZSxHQUFpQixJQUFJLENBQUM7UUFFckMsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBRXBDLGNBQVEsR0FBb0IsSUFBSSxDQUFDO1FBQ2pDLG1CQUFhLEdBQWlCLElBQUksQ0FBQztRQUNuQyx3QkFBa0IsR0FBZ0IsSUFBSSxDQUFDO1FBd0J2QyxjQUFRLEdBQVcsRUFBRSxDQUFDOztJQTBNbEMsQ0FBQztJQXRQRyxzQkFBYywwQ0FBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLGtDQUFXO2FBQXpCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYyxvQ0FBYTthQUEzQjtZQUNJLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBY0QseUNBQXFCLEdBQXJCO1FBQ0ksaUJBQU0scUJBQXFCLFdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFj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SUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsZUFBZTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTCxnQkFBQztBQUFELENBdlBBLEFBdVBDLENBdlBzQyxrQkFBUSxHQXVQOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ29tbW9uQ3RyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQ29tbW9uQ3RyXCI7XHJcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xyXG5pbXBvcnQgeyBCYXNlRnJhbWVOYXRpdmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZU5hdGl2ZVwiO1xyXG5pbXBvcnQgTmF0aXZlTWV0aG9kIGZyb20gXCIuLi8uLi9OYXRpdmVNZXRob2RcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcbmltcG9ydCB7IFFSQ29kZSB9IGZyb20gXCIuL3FyY29kZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDliIbkuqtcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJzaGFyZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX0NvbW11bml0eUJyZWFrOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG4gICAgLyoqICovXHJcbiAgICBwcml2YXRlIHVpX2J0bl9zYXZlSW1nOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlfYnRuX2NvcHlMaW5rOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlfc2hhcmVVcmw6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB1aV9zcW51bTogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfcXJjb2RlTm9kZTogZmd1aS5HTG9hZGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfaW52aXRhdGlvbkdyb3VwOiBmZ3VpLkdHcm91cCA9IG51bGw7XHJcblxyXG4gICAgY3JlYXRlQ2hpbGRDb21wb25lbnRzKCkge1xyXG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51aV9idG5fQ29tbXVuaXR5QnJlYWsub25DbGljayh0aGlzLkhpZGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NhdmVJbWcub25DbGljayh0aGlzLnNhdmVJbWFnZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9idG5fY29weUxpbmsub25DbGljayh0aGlzLmNvcHlMaW5rLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5xck5vZGUgPSB0aGlzLnVpX3FyY29kZU5vZGUubm9kZTtcclxuXHJcbiAgICB9XHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRRUkNvZGUoKTtcclxuICAgICAgICB0aGlzLlNob3coKTtcclxuICAgIH1cclxuICAgIEhpZGUoKSB7XHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdTaGFyZVZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBzdXBlci5IaWRlKCk7XHJcbiAgICB9XHJcbiAgICBTaG93KCkge1xyXG4gICAgICAgIHN1cGVyLlNob3coKTtcclxuICAgICAgICB0aGlzLnNldExpbmtVcmwoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbGlua0hvc3Q6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwdWJsaWMgc2V0TGlua1VybCgpIHtcclxuICAgICAgICBpZiAoTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmFnZW5pbmZvKSB7Ly8mJiBMb2JieVZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuYWdlbmluZm8ubHYgPD0gM1xyXG4gICAgICAgICAgICB0aGlzLnVpX2ludml0YXRpb25Hcm91cC5hc0NvbS52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51aV9zcW51bS50ZXh0ID0gTG9iYnlWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmFnZW5pbmZvLkNvZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51aV9pbnZpdGF0aW9uR3JvdXAuYXNDb20udmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHFyTm9kZTogY2MuTm9kZTtcclxuICAgIHB1YmxpYyBzZXRRUkNvZGUoKSB7XHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBpZiAoQXBwQ29uc3QucGxhdGZvcm0gPT0gXCJBbmRyb2lkXCIpIHtcclxuICAgICAgICAgICAgdXJsID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlckxpc3QuYXBrc2l0ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKEFwcENvbnN0LnBsYXRmb3JtID09IFwiaU9TXCIpIHtcclxuICAgICAgICAgICAgdXJsID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlckxpc3QuaXBhc2l0ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVyTGlzdC5hcGtzaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtIb3N0ID0gdXJsO1xyXG4gICAgICAgIHRoaXMudWlfc2hhcmVVcmwuc2V0VmFyKFwiaG9zdFwiLCB1cmwpLmZsdXNoVmFycygpO1xyXG4gICAgICAgIHRoaXMuc2V0Q29udGVudCh1cmwpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldENvbnRlbnQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBxcmNvZGUgPSBuZXcgUVJDb2RlKC0xLCAyKTtcclxuICAgICAgICBxcmNvZGUuYWRkRGF0YSh2YWx1ZSk7XHJcbiAgICAgICAgcXJjb2RlLm1ha2UoKTtcclxuXHJcbiAgICAgICAgbGV0IHNpemUgPSAzNzA7XHJcbiAgICAgICAgbGV0IG51bSA9IHFyY29kZS5nZXRNb2R1bGVDb3VudCgpO1xyXG4gICAgICAgIGxldCBjdHggPSB0aGlzLnFyTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGN0eC5jbGVhcigpO1xyXG4gICAgICAgIGN0eC5maWxsQ29sb3IgPSBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICAvLyBjb21wdXRlIHRpbGVXL3RpbGVIIGJhc2VkIG9uIG5vZGUgd2lkdGggYW5kIGhlaWdodFxyXG4gICAgICAgIGxldCB0aWxlVyA9IHNpemUgLyBudW07XHJcbiAgICAgICAgbGV0IHRpbGVIID0gc2l6ZSAvIG51bTtcclxuICAgICAgICAvLyBkcmF3IGluIHRoZSBHcmFwaGljc1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG51bTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgbnVtOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHFyY29kZS5pc0Rhcmsocm93LCBjb2wpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKHJvdywgY29sKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGN0eC5maWxsQ29sb3IgPSBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdyA9IChNYXRoLmNlaWwoKGNvbCArIDEpICogdGlsZVcpIC0gTWF0aC5mbG9vcihjb2wgKiB0aWxlVykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoID0gKE1hdGguY2VpbCgocm93ICsgMSkgKiB0aWxlVykgLSBNYXRoLmZsb29yKHJvdyAqIHRpbGVXKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LnJlY3QoTWF0aC5yb3VuZChjb2wgKiB0aWxlVyksIHNpemUgLSB0aWxlSCAtIE1hdGgucm91bmQocm93ICogdGlsZUgpLCB3LCBoKTtcclxuICAgICAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjdHguZmlsbENvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiropIfoo73pj4jmjqUgKi9cclxuICAgIHB1YmxpYyBjb3B5TGluaygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ1NoYXJlVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBsaW5rVXJsID0gdGhpcy5saW5rSG9zdDtcclxuICAgICAgICBOYXRpdmVNZXRob2QuY29weVRleHRTdHJpbmcobGlua1VybCk7XHJcbiAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5aSN5Yi25oiQ5YqfXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHRleHR1cmU6IGNjLlJlbmRlclRleHR1cmU7XHJcbiAgICBwcml2YXRlIF93aWR0aDtcclxuICAgIHByaXZhdGUgX2hlaWdodDtcclxuICAgIGZpbHBZSW1hZ2UoZGF0YSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZGF0YSBhcnJheVxyXG4gICAgICAgIGxldCBwaWNEYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuICAgICAgICBsZXQgcm93Qnl0ZXMgPSB3aWR0aCAqIDQ7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgaGVpZ2h0OyByb3crKykge1xyXG4gICAgICAgICAgICBsZXQgc3JvdyA9IGhlaWdodCAtIDEgLSByb3c7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHNyb3cgKiB3aWR0aCAqIDQ7XHJcbiAgICAgICAgICAgIGxldCByZVN0YXJ0ID0gcm93ICogd2lkdGggKiA0O1xyXG4gICAgICAgICAgICAvLyBzYXZlIHRoZSBwaWV4bHMgZGF0YVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBpY0RhdGFbcmVTdGFydCArIGldID0gZGF0YVtzdGFydCArIGldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwaWNEYXRhO1xyXG5cclxuICAgIH1cclxuICAgIGluaXRJbWFnZSgpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMudGV4dHVyZS5yZWFkUGl4ZWxzKCk7XHJcbiAgICAgICAgLy90aGlzLl93aWR0aCA9IHRoaXMudGV4dHVyZS53aWR0aDtcclxuICAgICAgICAvL3RoaXMuX2hlaWdodCA9IHRoaXMudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IHBpY0RhdGEgPSB0aGlzLmZpbHBZSW1hZ2UoZGF0YSwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIHBpY0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5oiq5Zu+ICovXHJcbiAgICBwdWJsaWMgc2F2ZUltYWdlKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnU2hhcmVWaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgaWYgKENDX0pTQikge1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTsgLy9jYy5kaXJlY3Rvci5nZXRXaW5TaXplKCk7IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKVxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IE1hdGguZmxvb3Ioc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLmZsb29yKHNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgbm9kZS53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgbm9kZS54ID0gc2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIG5vZGUueSA9IHNpemUuaGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgbGV0IGNhbWVyYSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkNhbWVyYSk7XHJcbiAgICAgICAgICAgIC8vIOiuvue9ruS9oOaDs+imgeeahOaIquWbvuWGheWuueeahCBjdWxsaW5nTWFza1xyXG4gICAgICAgICAgICBjYW1lcmEuY3VsbGluZ01hc2sgPSAweGZmZmZmZmZmO1xyXG4gICAgICAgICAgICAvLyDmlrDlu7rkuIDkuKogUmVuZGVyVGV4dHVyZe+8jOW5tuS4lOiuvue9riBjYW1lcmEg55qEIHRhcmdldFRleHR1cmUg5Li65paw5bu655qEIFJlbmRlclRleHR1cmXvvIzov5nmoLcgICAgICAgIGNhbWVyYSDnmoTlhoXlrrnlsIbkvJrmuLLmn5PliLDmlrDlu7rnmoQgUmVuZGVyVGV4dHVyZSDkuK3jgIJcclxuICAgICAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgICAgICAgLy8gbGV0IGdsID0gY2MuZ2FtZVtcIl9yZW5kZXJDb250ZXh0XCJdO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PVwiLCB3aWR0aCwgaGVpZ2h0LCBnbC5TVEVOQ0lMX0lOREVYOClcclxuICAgICAgICAgICAgdGV4dHVyZS5pbml0V2l0aFNpemUod2lkdGgsIGhlaWdodCk7ICAvL2NjW1wiZ2Z4XCJdLlJCX0ZNVF9TOFxyXG4gICAgICAgICAgICAvLyDlpoLmnpzmiKrlm77lhoXlrrnkuK3kuI3ljIXlkKsgTWFzayDnu4Tku7bvvIzlj6/ku6XkuI3nlKjkvKDpgJLnrKzkuInkuKrlj4LmlbBcclxuICAgICAgICAgICAgY2FtZXJhLnRhcmdldFRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgICAgICBjYW1lcmEucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIGxldCBwaWNEYXRhID0gdGhpcy5pbml0SW1hZ2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNhbnZhcyhwaWNEYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vanNiLmZpbGVVdGlscy5nZXRXcml0YWJsZVBhdGgoKSAgICAgXCIvc2RjYXJkL1BpY3R1cmVzL1wiXHJcbiAgICAgICAgICAgICAgICBsZXQgZmlsZVBhdGggPSBqc2IuZmlsZVV0aWxzLmdldFdyaXRhYmxlUGF0aCgpICsgJ3JlbmRlcl90b19zcHJpdGVfaW1hZ2UucG5nJztcclxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aCA9IFwiL3NkY2FyZC9QaWN0dXJlcy9yZW5kZXJfdG9fc3ByaXRlX2ltYWdlLnBuZ1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBsZXQgc3VjY2VzcyA9IGpzYi5zYXZlSW1hZ2VEYXRhKHBpY0RhdGEsIHdpZHRoLCBoZWlnaHQsIGZpbGVQYXRoKVxyXG4gICAgICAgICAgICAgICAgY2FtZXJhLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNhbWVyYS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJzYXZlIGltYWdlIGRhdGEgc3VjY2VzcywgZmlsZTogXCIgKyBmaWxlUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwi5L+d5a2Y5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9LCAxLCAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5vbmNlKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX0RSQVcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v5q2k5aSE5byA5aeL5omn6KGM5oiq5bGPXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBjYy5nYW1lLmNhbnZhcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBocmVmID0gYmFzZTY0LnJlcGxhY2UoL15kYXRhOmltYWdlW147XSovLCBcImRhdGE6aW1hZ2Uvb2N0ZXQtc3RyZWFtXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9kb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gaHJlZjtcclxuICAgICAgICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgICBhLmhyZWYgPSBiYXNlNjQ7XHJcbiAgICAgICAgICAgICAgICBhLmRvd25sb2FkID0gXCJpbWFnZVwiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICAgICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNyZWF0ZUNhbnZhcyhwaWNEYXRhKSB7XHJcbiAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuVGV4dHVyZTJEKCk7XHJcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aERhdGEocGljRGF0YSwgMzIsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xyXG5cclxuICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgICAgICBzcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRleHR1cmUpO1xyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcblxyXG4gICAgICAgIG5vZGUuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcclxuICAgICAgICBub2RlLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgLy8gc2V0IHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2Mud2luU2l6ZS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgbm9kZS54ID0gd2lkdGggLyAyO1xyXG4gICAgICAgIG5vZGUueSA9IGhlaWdodCAvIDI7XHJcblxyXG4gICAgICAgIC8vIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIC8vICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXB0dXJlQWN0aW9uKG5vZGUsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcHR1cmVBY3Rpb24oY2FwdHVyZTogY2MuTm9kZSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGxldCBzY2FsZUFjdGlvbiA9IGNjLnNjYWxlVG8oMSwgMC4zKTtcclxuICAgICAgICBsZXQgdGFyZ2V0UG9zID0gY2MudjIod2lkdGggLSB3aWR0aCAvIDYsIGhlaWdodCAvIDQpO1xyXG4gICAgICAgIGxldCBtb3ZlQWN0aW9uID0gY2MubW92ZVRvKDEsIHRhcmdldFBvcyk7XHJcbiAgICAgICAgbGV0IHNwYXduID0gY2Muc3Bhd24oc2NhbGVBY3Rpb24sIG1vdmVBY3Rpb24pO1xyXG4gICAgICAgIGNhcHR1cmUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKHNwYXduLCBjYy5kZWxheVRpbWUoMyksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgY2FwdHVyZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICBjYXB0dXJlLmRlc3Ryb3koKTtcclxuICAgICAgICB9KSkpO1xyXG5cclxuICAgICAgICBsZXQgYmxpbmtBY3Rpb24gPSBjYy5ibGluaygwLjEsIDEpO1xyXG4gICAgICAgIC8vIHNjZW5lIGFjdGlvblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYmxpbmtBY3Rpb24pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
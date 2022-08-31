"use strict";
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
import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import NativeMethod from "../../NativeMethod";
import LobbyViewCtr from "../LobbyViewCtr";
import { QRCode } from "./qrcode";

/**
 * @description 分享
 */
export default class ShareView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "share";
    }

    private ui_btn_CommunityBreak: fgui.GButton = null;
    /** */
    private ui_btn_saveImg: fgui.GButton = null;

    private ui_btn_copyLink: fgui.GButton = null;

    private ui_shareUrl: fgui.GTextField = null;

    private ui_sqnum: fgui.GTextField = null;
    private ui_qrcodeNode: fgui.GLoader = null;
    private ui_invitationGroup: fgui.GGroup = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_CommunityBreak.onClick(this.Hide, this);
        this.ui_btn_saveImg.onClick(this.saveImage, this);
        this.ui_btn_copyLink.onClick(this.copyLink, this);

        this.qrNode = this.ui_qrcodeNode.node;

    }
    OnLoadCompleted() {
        this.setQRCode();
        this.Show();
    }
    Hide() {
        AudioManager.Singleton.play('ShareView', "button");
        super.Hide();
    }
    Show() {
        super.Show();
        this.setLinkUrl();
    }
    private linkHost: string = "";
    public setLinkUrl() {
        if (LobbyViewCtr.instance.Model.ageninfo) {//&& LobbyViewCtr.instance.Model.ageninfo.lv <= 3
            this.ui_invitationGroup.asCom.visible = true;
            this.ui_sqnum.text = LobbyViewCtr.instance.Model.ageninfo.Code;
        } else {
            this.ui_invitationGroup.asCom.visible = false;
        }
    }

    private qrNode: cc.Node;
    public setQRCode() {
        let url: string = "";
        if (AppConst.platform == "Android") {
            url = BaseFrameNative.serverList.apksite;
        } else if (AppConst.platform == "iOS") {
            url = BaseFrameNative.serverList.ipasite;
        } else {
            url = BaseFrameNative.serverList.apksite;
        }
        this.linkHost = url;
        this.ui_shareUrl.setVar("host", url).flushVars();
        this.setContent(url);
    }
    public setContent(value: string) {
        let qrcode = new QRCode(-1, 2);
        qrcode.addData(value);
        qrcode.make();

        let size = 370;
        let num = qrcode.getModuleCount();
        let ctx = this.qrNode.addComponent(cc.Graphics);
        ctx.clear();
        ctx.fillColor = cc.Color.BLACK;
        // compute tileW/tileH based on node width and height
        let tileW = size / num;
        let tileH = size / num;
        // draw in the Graphics
        for (let row = 0; row < num; row++) {
            for (let col = 0; col < num; col++) {
                if (qrcode.isDark(row, col)) {
                    // cc.log(row, col)
                    // ctx.fillColor = cc.Color.BLACK;
                    let w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
                    let h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
                    ctx.rect(Math.round(col * tileW), size - tileH - Math.round(row * tileH), w, h);
                    ctx.fill();
                } else {
                    // ctx.fillColor = cc.Color.WHITE;
                }

            }
        }
    }


    /**複製鏈接 */
    public copyLink() {
        AudioManager.Singleton.play('ShareView', "button");
        let linkUrl = this.linkHost;
        NativeMethod.copyTextString(linkUrl);
        CommonCtr.instance.view.ShowTipLabel("复制成功");
    }


    private texture: cc.RenderTexture;
    private _width;
    private _height;
    filpYImage(data, width, height) {
        // create the data array
        let picData = new Uint8Array(width * height * 4);
        let rowBytes = width * 4;
        for (let row = 0; row < height; row++) {
            let srow = height - 1 - row;
            let start = srow * width * 4;
            let reStart = row * width * 4;
            // save the piexls data
            for (let i = 0; i < rowBytes; i++) {
                picData[reStart + i] = data[start + i];
            }
        }
        return picData;

    }
    initImage() {
        let data = this.texture.readPixels();
        //this._width = this.texture.width;
        //this._height = this.texture.height;
        let picData = this.filpYImage(data, this._width, this._height);
        return picData;
    }

    /**截图 */
    public saveImage() {
        AudioManager.Singleton.play('ShareView', "button");
        if (CC_JSB) {
            let size = cc.view.getVisibleSize(); //cc.director.getWinSize(); cc.view.getVisibleSize()
            let node = new cc.Node();
            node.parent = cc.director.getScene();

            let width = Math.floor(size.width);
            let height = Math.floor(size.height);
            this._width = width;
            this._height = height;

            node.width = width;
            node.height = height;
            node.x = size.width / 2;
            node.y = size.height / 2;
            let camera = node.addComponent(cc.Camera);
            // 设置你想要的截图内容的 cullingMask
            camera.cullingMask = 0xffffffff;
            // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样        camera 的内容将会渲染到新建的 RenderTexture 中。
            let texture = new cc.RenderTexture();
            this.texture = texture;
            //@ts-ignore
            // let gl = cc.game["_renderContext"];
            // console.log("===============", width, height, gl.STENCIL_INDEX8)
            texture.initWithSize(width, height);  //cc["gfx"].RB_FMT_S8
            // 如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
            camera.targetTexture = texture;
            camera.render();
            let picData = this.initImage();
            this.schedule(() => {
                this.createCanvas(picData);
                //jsb.fileUtils.getWritablePath()     "/sdcard/Pictures/"
                let filePath = jsb.fileUtils.getWritablePath() + 'render_to_sprite_image.png';
                if (cc.sys.os == cc.sys.OS_ANDROID) {
                    filePath = "/sdcard/Pictures/render_to_sprite_image.png";
                }
                //@ts-ignore
                let success = jsb.saveImageData(picData, width, height, filePath)
                camera.enabled = false;
                camera.destroy();
                node.destroy();
                // if (success) {
                //     console.log("save image data success, file: " + filePath);
                // } else {
                //     console.log("保存失败");
                // }
            }, 1, 0);
        } else {
            cc.director.once(cc.Director.EVENT_AFTER_DRAW, () => {
                //此处开始执行截屏
                const canvas = cc.game.canvas;
                const base64 = canvas.toDataURL("image/png");
                // const href = base64.replace(/^data:image[^;]*/, "data:image/octet-stream");
                //document.location.href = href;
                let a = document.createElement("a");
                a.href = base64;
                a.download = "image";
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            });
        }

    }


    createCanvas(picData) {
        let texture = new cc.Texture2D();
        texture.initWithData(picData, 32, this._width, this._height);

        let spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);

        let node = new cc.Node();
        let sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;

        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = cc.director.getScene();
        // set position
        let width = cc.winSize.width;
        let height = cc.winSize.height;
        node.x = width / 2;
        node.y = height / 2;

        // node.on(cc.Node.EventType.TOUCH_START, () => {
        //     node.parent = null;
        //     node.destroy();
        // });

        this.captureAction(node, width, height);
    }

    captureAction(capture: cc.Node, width, height) {
        let scaleAction = cc.scaleTo(1, 0.3);
        let targetPos = cc.v2(width - width / 6, height / 4);
        let moveAction = cc.moveTo(1, targetPos);
        let spawn = cc.spawn(scaleAction, moveAction);
        capture.runAction(cc.sequence(spawn, cc.delayTime(3), cc.callFunc(() => {
            capture.parent = null;
            capture.destroy();
        })));

        let blinkAction = cc.blink(0.1, 1);
        // scene action
        this.node.runAction(blinkAction);
    }

}
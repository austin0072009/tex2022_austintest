import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description 我的個人信息
 */
export default class MyinfoView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "myinfo";
    }

    private ui_btn_myinfoBreak: fgui.GButton = null;
    private ui_tophead: fgui.GComponent = null;
    private ui_nickname: fgui.GTextInput = null;
    private ui_headlist: fgui.GList = null;
    private sexController: fgui.Controller;
    private topHeadLoader: fgui.GLoader;
    private ui_topHeadFrameLoader: fgui.GLoader = null;
    private ui_btn_infosave: fgui.GButton = null;

    private ui_goldTip: fgui.GComponent = null;
    private ui_xhgoldqr: fgui.GButton = null;
    private ui_xhgoldqx: fgui.GButton = null;

    private ui_nogoldTip: fgui.GComponent = null;
    private ui_gotopupqr: fgui.GButton = null;
    private ui_gotopupqx: fgui.GButton = null;

    private typeController: fgui.Controller;
    /**头像框 */
    private ui_headframelist: fgui.GList = null;
    /**当前选择的头像框 */
    public selectHeadFrame: string;
    public isChangeName: boolean = false;
    private cantouch: boolean = true;
    public headFrames: string[] = [];

    public deleteHeadIcons: number[] = [21, 22, 23, 24, 25, 26, 27, 28];

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_myinfoBreak.onClick(this.HideView, this);
        this.sexController = this.fguiComponent.getController("sex");
        this.ui_headlist.setVirtual();
        this.ui_headlist.itemRenderer = this.renderListItem.bind(this);
        this.ui_headlist.on(fgui.Event.CLICK_ITEM, this.onClickItem, this);

        this.ui_tophead.onClick(this.upLoadHead, this);

        this.topHeadLoader = this.ui_tophead.getChild("n41").asButton.getChild("head").asCom.getChild("n0").asLoader;
        // this.topHeadFrameLoader = this.ui_tophead.getChild("n41").asButton.getChild("head").asCom.getChild("n4").asLoader;

        this.ui_btn_infosave.onClick(this.savaInfo, this);

        this.ui_xhgoldqr.onClick(this.affirmChanged, this);
        this.ui_xhgoldqx.onClick(this.cancelChanged, this);
        this.ui_gotopupqr.onClick(this.showTopupView, this);
        this.ui_gotopupqx.onClick(this.hideNogoldTip, this);

        // this.typeController = this.fguiComponent.getController("type");
        this.ui_headframelist.setVirtual();
        this.ui_headframelist.itemRenderer = this.renderListFrameItem.bind(this);
        this.ui_headframelist.on(fgui.Event.CLICK_ITEM, this.onClickFrameItem, this);
    }

    OnLoadCompleted() {
        window.disposeImageHead = this.disposeImageHead.bind(this);
        this.ui_headlist.numItems = 59;
        this.Show();
    }
    Hide() {
        super.Hide();
    }

    public HideView() {
        AudioManager.Singleton.play('MyinfoView', "button");
        this.Hide();
    }

    public getByteLength(str: string) {
        let b = 0;
        for (let i = 0; i < str.length; i++) {
            let c = str.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(c)) {
                b++;
            } else { b += 2; }
        }
        return b;
    }


    /**修改信息  同一个接口  判断当前在修改哪个  1当前在修改昵称  2当前在修改头像 */
    public changeSome: number = 0;
    /**當前選擇的頭像 */
    public selectHeadIndex: string;

    public initData() {
        let play = AppConst.mPlayerModel;
        this.ui_nickname.text = play._n;
        let sex = AppConst.mPlayerModel.wechat._S;
        this.sexController.setSelectedIndex(sex);
        console.log("play.wechat.wicon == ", play.wechat.wicon);
        UIUtil.loadImage(this.topHeadLoader, play.wechat.wicon);
    }

    public renderListItem(index: number, obj: fgui.GObject) {
        let com = <fgui.GButton>obj;
        let head = com.getChild("head").asCom;
        let headLoader = head.getChild("n0").asLoader;
        // UIUtil.loadImage(headLoader, "/fordlc/wechat/user_" + (index + 1) + ".png");
        if (this.isDeleteHeadIcon(index + 1)) return;
        let name = "user_" + (index + 1) + '.png';
        UIUtil.loadImage(headLoader, "user_" + (index + 1), "Lobby");
        com.name = name;
    }

    public isDeleteHeadIcon(index: number): boolean {
        for (let index = 0; index < this.deleteHeadIcons.length; index++) {
            let deleteNum = this.deleteHeadIcons[index];
            if (deleteNum == index) {
                return true;
            }
        }
        return false;
    }

    public onClickItem(item: fgui.GButton) {
        // this.topHeadLoader.url = "ui://Common/user_" + item.name;
        AudioManager.Singleton.play('MyinfoView', "button");
        this.selectHeadIndex = item.name;
    }

    /**头像框 */
    public renderListFrameItem(index: number, obj: fgui.GObject) {
        let com = <fgui.GButton>obj;
        let frame = com.getChild("n0").asLoader;
        let name = this.headFrames[index].split("/")[3];
        com.name = name;
        UIUtil.loadShopImage(frame, this.headFrames[index]);
    }
    public onClickFrameItem(item: fgui.GButton) {
        AudioManager.Singleton.play('MyinfoView', "button");
        this.selectHeadFrame = item.name;
    }

    /**保存信息 */
    public savaInfo() {
        AudioManager.Singleton.play('MyinfoView', "button");
        let sendName: string;
        let sendSex: number;

        let editname = this.ui_nickname.text;
        let sex = this.sexController.selectedIndex;
        if (editname == AppConst.mPlayerModel._n) {
            this.isChangeName = false;
            sendName = '';
        } else {
            this.isChangeName = true;
            sendName = editname;
            if (AppConst.mPlayerModel.freecount <= 0) { //沒有免費的修改次數
                this.ui_goldTip.visible = true;
                return;
            }
        }
        if (sex == AppConst.mPlayerModel.wechat._S) {
            sendSex = -1;
        } else {
            sendSex = sex;
        }
        this.changeSome = 1;
        this.sendChanged();
    }

    /**金幣不足去充值 */
    public showTopupView() {
        AudioManager.Singleton.play('MyinfoView', "button");
        LobbyViewCtr.instance.view.showTopup();
        this.ui_nogoldTip.visible = false;
    }

    /**不充值 */
    public hideNogoldTip() {
        AudioManager.Singleton.play('MyinfoView', "button");
        this.ui_nogoldTip.visible = false;
    }

    /**取消修改 */
    public cancelChanged() {
        AudioManager.Singleton.play('MyinfoView', "button");
        this.ui_goldTip.visible = false;
    }
    /**確認修改 */
    public affirmChanged() {
        AudioManager.Singleton.play('MyinfoView', "button");
        this.ui_goldTip.visible = false;
        if (UIUtil.formatNumber(AppConst.mPlayerModel.gold) < 100) {
            this.ui_nogoldTip.visible = true;
            return;
        }
        this.sendChanged();
    }

    public sendChanged() {
        let sendName: string;
        let sendSex: number;

        let editname = this.ui_nickname.text;

        if (this.getByteLength(editname) > 14) {
            CommonCtr.instance.view.ShowTipLabel("输入的昵称太长了");
            return;
        }

        if (editname == AppConst.mPlayerModel._n) {
            sendName = '';
        } else {
            sendName = editname;
        }

        sendSex = this.sexController.selectedIndex;
        console.log("sendSex == ", sendSex);
        if ((editname == AppConst.mPlayerModel._n) && (sendSex == AppConst.mPlayerModel.wechat._S) && !this.selectHeadIndex && !this.selectHeadFrame) {
            CommonCtr.instance.view.ShowTipLabel("無修改");
            return;
        }

        let info = { UserId: null, HeadIcon: null, nikename: null, sex: null, Desc: null, HeadFrame: null };
        info.UserId = AppConst.mPlayerModel.userid;
        info.HeadIcon = this.selectHeadIndex;
        info.nikename = sendName;
        info.Desc = '';
        info.sex = sendSex;
        info.HeadFrame = this.selectHeadFrame;
        LobbyViewCtr.instance.cs_personalinfo(info);
    }

    /**修改成功的返回 */
    public handleChanged() {
        // if (this.changeSome == 1) {//修改 昵称返回
        //     // AppConst.mPlayerModel._n = this.ui_nickname.text;
        //     // AppConst.mPlayerModel.wechat._S = this.sexController.selectedIndex;
        //     LobbyViewCtr.instance.view.meView.initData();
        //     CommonCtr.instance.view.ShowTipLabel("修改成功");
        // } else if (this.changeSome == 2) {
        //     this.uploadHeadSuccess();
        // }
        if (this.isChangeName) {
            AppConst.mPlayerModel.freecount = 0;
        }
        AppConst.mPlayerModel.wechat._S = this.sexController.selectedIndex;
        AppConst.mPlayerModel._n = this.ui_nickname.text;
        let headUrl: string;
        if (this.selectHeadFrame) {
            AppConst.mPlayerModel["headFrame"] = "/fordlc/wechat/" + this.selectHeadFrame;
            UIUtil.loadShopImage(this.ui_topHeadFrameLoader, AppConst.mPlayerModel["headFrame"]);
            LobbyViewCtr.instance.view.meView.setHeadFram();
        }
        if (this.selectHeadIndex) {
            AppConst.mPlayerModel.wechat.wicon = "/fordlc/wechat/" + this.selectHeadIndex;
            headUrl = AppConst.mPlayerModel.wechat.wicon;
            UIUtil.loadImage(this.topHeadLoader, headUrl);
            LobbyViewCtr.instance.view.meView.setHead(headUrl);
        }
        LobbyViewCtr.instance.view.meView.initData();
        LobbyViewCtr.instance.cs_tasklist();
    }



    /**選擇自定義頭像 */
    private fileInputElement;
    /**上傳頭像 */
    public upLoadHead() {
        if (!this.cantouch) {
            return;
        }
        this.cantouch = false;
        this.scheduleOnce(() => {
            this.cantouch = true;
        }, 1)
        AudioManager.Singleton.play('MyinfoView', "button");
        let dict = {
            needClip: 1, //1是裁剪，2是不裁剪
            clipX: 200, //裁剪x尺寸
            clipY: 200, //裁剪y尺寸
        }
        if (cc.sys.platform === cc.sys.ANDROID) { //android
            let method = "openPhoto";
            let data = JSON.stringify(dict);
            let methodSignature = "(Ljava/lang/String;)V";
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/ImagePicker", method, methodSignature, data);
        } else if (cc.sys.os === cc.sys.OS_IOS) { //ios
            jsb.reflection.callStaticMethod("ImagePickerViewController", "pickImage:", JSON.stringify(dict));
        } else {
            if (!this.fileInputElement) {
                let formEle = document.createElement("from");
                formEle["name"] = "fileUploadForm";
                document.getElementById("GameCanvas").appendChild(formEle);
                let aElement = document.createElement("input");
                aElement.id = "testinputid";
                aElement.name = "test";
                aElement.accept = "image/*";
                aElement.type = "file";
                aElement.style.zIndex = "-1";
                aElement.style.position = "absolute";
                aElement.style.top = "0px";
                aElement.style.left = "0px";
                aElement.style.maxHeight = "100%";
                aElement.style.maxWidth = "100%";
                aElement.style.border = "0";
                aElement.style.cursor = "pointer";
                formEle.appendChild(aElement);
                this.fileInputElement = aElement;
                this.fileInputElement.addEventListener("change", async (type) => {
                    let fileList = this.fileInputElement.files[0];
                    let reader = new FileReader();
                    reader.readAsDataURL(fileList);
                    reader.onload = (event) => {
                        let image = new Image() //新建一个img标签（还没嵌入DOM节点)
                        let dataImg = event.target.result as string;
                        let num = 0;
                        image.src = event.target.result as string;
                        image.onload = () => {
                            cc.log(fileList.size)
                            //由于不能将太多Base64字符给服务端发过于，咱们压缩一下
                            //如果想支持更大图片，请继续加判断，增加除数
                            if (fileList.size > 20000000) {
                                cc.log("文件大小不能大于20M！")
                                // param.value = '';
                                return;
                            } else if (fileList.size > 20000000) {
                                num = 100;
                            } else if (fileList.size > 19000000) {
                                num = 95;
                            } else if (fileList.size > 18000000) {
                                num = 90;
                            } else if (fileList.size > 17000000) {
                                num = 85;
                            } else if (fileList.size > 16000000) {
                                num = 80;
                            } else if (fileList.size > 15000000) {
                                num = 75;
                            } else if (fileList.size > 14000000) {
                                num = 70;
                            } else if (fileList.size > 13000000) {
                                num = 65;
                            } else if (fileList.size > 12000000) {
                                num = 60;
                            } else if (fileList.size > 11000000) {
                                num = 55;
                            } else if (fileList.size > 10000000) {
                                num = 50;
                            } else if (fileList.size > 9000000) {
                                num = 45;
                            } else if (fileList.size > 8000000) {
                                num = 40;
                            } else if (fileList.size > 7000000) {
                                num = 35;
                            } else if (fileList.size > 6000000) {
                                num = 30;
                            } else if (fileList.size > 5000000) {
                                num = 25;
                            } else if (fileList.size > 4000000) {
                                num = 20;
                            } else if (fileList.size > 3000000) {
                                num = 15;
                            } else if (fileList.size > 2000000) {
                                num = 10;
                            } else if (fileList.size > 1000000) {
                                num = 5;
                            } else if (fileList.size > 500000) {
                                num = 2.5;
                            } else if (fileList.size > 250000) {
                                num = 1.5;
                            } else {
                                num = 0;
                            }
                            let canvas = document.createElement('canvas');
                            let context = canvas.getContext('2d');
                            let imageWidth = image.width / num;  //压缩后图片的大小
                            let imageHeight = image.height / num;
                            canvas.width = imageWidth;
                            canvas.height = imageHeight;
                            context.drawImage(image, 0, 0, imageWidth, imageHeight);
                            dataImg = canvas.toDataURL('image/png');
                            let b64 = dataImg.replace('data:image/png;base64,', '');
                            this.disposeImageHead(b64);
                            //cc.log(dataImg);
                            //此时的dataImg就是你要上传给服务器的字符
                            // let imageObj = new Image();
                            // imageObj.src = dataImg;
                            // imageObj.onload = () => {
                            //     let textureObj = new cc.Texture2D();
                            //     textureObj.initWithElement(imageObj);
                            //     textureObj.handleLoadedTexture();
                            //     textureObj.width = 200;
                            //     textureObj.height = 200;
                            //     let spriteFrame = new cc.SpriteFrame(textureObj);
                            //     this.headLoader.texture = spriteFrame;
                            // }
                        }
                    }
                })
            }
            this.fileInputElement.click();
        }
    }
    private tempHeadPath: string;
    /**手機上次頭像的調用 */
    public disposeImageHead(base64: string) {
        let self = this;
        console.log("--- base64---", base64);
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/UploadHead";

        let params = {
            filebate: base64,
            tablenum: 0,
            Account: 0,
            gid: 0
        }
        HttpHelpEx.instance.post(url, params).then((res) => {
            // console.log("---api/game/UploadHead res---", res);
            console.log("---api/game/UploadHead res---", JSON.stringify(res));
            if (res.code == 1) {
                this.changeSome = 2;
                let headName = res.data;
                this.selectHeadIndex = headName;

                // let imageObj = new Image();
                // imageObj.src = base64;
                // imageObj.onload = () => {
                //     let textureObj = new cc.Texture2D();
                //     textureObj.initWithElement(imageObj);
                //     textureObj.handleLoadedTexture();
                //     textureObj.width = 200;
                //     textureObj.height = 200;
                //     let spriteFrame = new cc.SpriteFrame(textureObj);
                //     this.topHeadLoader.texture = spriteFrame;
                // }
                this.sendChanged();
                // let info = { UserId: null, HeadIcon: null, nikename: null, sex: null, Desc: null };
                // info.UserId = AppConst.mPlayerModel.userid;
                // info.HeadIcon = headName;
                // info.nikename = AppConst.mPlayerModel.wechat.wName;
                // info.Desc = AppConst.mPlayerModel.wechat.Desc;
                // info.sex = AppConst.mPlayerModel.wechat._S;
                // LobbyViewCtr.instance.cs_personalinfo(info);
            } else {
                CommonCtr.instance.view.ShowTipLabel("上传失败");
            }
        }).catch((err) => {
            console.log("----err----", err)
            CommonCtr.instance.view.ShowTipLabel("选择头像错误");
        })
    }

    public uploadHeadSuccess() {
        // cc.sys.localStorage.removeItem("saveHead");
        let headUrl: string = AppConst.mPlayerModel.wechat.wicon;
        CommonCtr.instance.view.ShowTipLabel("上传成功");
        UIUtil.loadImage(this.topHeadLoader, headUrl);
        LobbyViewCtr.instance.view.meView.setHead(headUrl);
    }

    public uint8arrayToBase64(u8Arr: Uint8Array) {
        let CHUNK_SIZE = 0x8000; //arbitrary number
        let index = 0;
        let length = u8Arr.length;
        let result = '';
        let slice;
        while (index < length) {
            slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
            result += String.fromCharCode.apply(null, slice);
            index += CHUNK_SIZE;
        }
        // web image base64图片格式: "data:image/png;base64," + b64encoded;
        // return  "data:image/png;base64," + btoa(result);
        return btoa(result);
    }

    public setHeadFram() {
        if (AppConst.mPlayerModel["headFrame"]) {
            UIUtil.loadShopImage(this.ui_topHeadFrameLoader, AppConst.mPlayerModel["headFrame"]);
        }
    }


    public Show() {
        this.cantouch = true;
        this.ui_headlist.selectNone();
        this.ui_headframelist.selectNone();
        this.selectHeadIndex = '';
        this.selectHeadFrame = '';
        if (this.headFrames.length != AppConst.mPlayerModel["headIcos"].length) {
            this.headFrames = AppConst.mPlayerModel["headIcos"];
            this.ui_headframelist.numItems = this.headFrames.length;
        }
        this.initData();
        this.setHeadFram();
        super.Show();
    }


}
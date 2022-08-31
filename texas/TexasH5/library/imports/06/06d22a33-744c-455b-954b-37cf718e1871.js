"use strict";
cc._RF.push(module, '06d22ozdExFW5VLN89xjhhx', 'MyinfoView');
// GameHall/script/Lobby/myinfo/MyinfoView.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AudioManager_1 = require("../../../../Script/BaseFrame/AudioManager");
var CommonCtr_1 = require("../../../../Script/BaseFrame/CommonCtr");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var HttpHelpEx_1 = require("../../../../Script/Common/Managers/HttpHelpEx");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../../Script/BaseFrameNative");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/**
 * @description 我的個人信息
 */
var MyinfoView = /** @class */ (function (_super) {
    __extends(MyinfoView, _super);
    function MyinfoView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_myinfoBreak = null;
        _this.ui_tophead = null;
        _this.ui_nickname = null;
        _this.ui_headlist = null;
        _this.ui_topHeadFrameLoader = null;
        _this.ui_btn_infosave = null;
        _this.ui_goldTip = null;
        _this.ui_xhgoldqr = null;
        _this.ui_xhgoldqx = null;
        _this.ui_nogoldTip = null;
        _this.ui_gotopupqr = null;
        _this.ui_gotopupqx = null;
        /**头像框 */
        _this.ui_headframelist = null;
        _this.isChangeName = false;
        _this.cantouch = true;
        _this.headFrames = [];
        _this.deleteHeadIcons = [21, 22, 23, 24, 25, 26, 27, 28];
        /**修改信息  同一个接口  判断当前在修改哪个  1当前在修改昵称  2当前在修改头像 */
        _this.changeSome = 0;
        return _this;
    }
    Object.defineProperty(MyinfoView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyinfoView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyinfoView.prototype, "componentName", {
        get: function () {
            return "myinfo";
        },
        enumerable: false,
        configurable: true
    });
    MyinfoView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
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
    };
    MyinfoView.prototype.OnLoadCompleted = function () {
        window.disposeImageHead = this.disposeImageHead.bind(this);
        this.ui_headlist.numItems = 59;
        this.Show();
    };
    MyinfoView.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
    };
    MyinfoView.prototype.HideView = function () {
        AudioManager_1.AudioManager.Singleton.play('MyinfoView', "button");
        this.Hide();
    };
    MyinfoView.prototype.getByteLength = function (str) {
        var b = 0;
        for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(c)) {
                b++;
            }
            else {
                b += 2;
            }
        }
        return b;
    };
    MyinfoView.prototype.initData = function () {
        var play = AppConst_1.AppConst.mPlayerModel;
        this.ui_nickname.text = play._n;
        var sex = AppConst_1.AppConst.mPlayerModel.wechat._S;
        this.sexController.setSelectedIndex(sex);
        console.log("play.wechat.wicon == ", play.wechat.wicon);
        UIUtil_1.UIUtil.loadImage(this.topHeadLoader, play.wechat.wicon);
    };
    MyinfoView.prototype.renderListItem = function (index, obj) {
        var com = obj;
        var head = com.getChild("head").asCom;
        var headLoader = head.getChild("n0").asLoader;
        // UIUtil.loadImage(headLoader, "/fordlc/wechat/user_" + (index + 1) + ".png");
        if (this.isDeleteHeadIcon(index + 1))
            return;
        var name = "user_" + (index + 1) + '.png';
        UIUtil_1.UIUtil.loadImage(headLoader, "user_" + (index + 1), "Lobby");
        com.name = name;
    };
    MyinfoView.prototype.isDeleteHeadIcon = function (index) {
        for (var index_1 = 0; index_1 < this.deleteHeadIcons.length; index_1++) {
            var deleteNum = this.deleteHeadIcons[index_1];
            if (deleteNum == index_1) {
                return true;
            }
        }
        return false;
    };
    MyinfoView.prototype.onClickItem = function (item) {
        // this.topHeadLoader.url = "ui://Common/user_" + item.name;
        AudioManager_1.AudioManager.Singleton.play('MyinfoView', "button");
        this.selectHeadIndex = item.name;
    };
    /**头像框 */
    MyinfoView.prototype.renderListFrameItem = function (index, obj) {
        var com = obj;
        var frame = com.getChild("n0").asLoader;
        var name = this.headFrames[index].split("/")[3];
        com.name = name;
        UIUtil_1.UIUtil.loadShopImage(frame, this.headFrames[index]);
    };
    MyinfoView.prototype.onClickFrameItem = function (item) {
        AudioManager_1.AudioManager.Singleton.play('MyinfoView', "button");
        this.selectHeadFrame = item.name;
    };
    /**保存信息 */
    MyinfoView.prototype.savaInfo = function () {
        AudioManager_1.AudioManager.Singleton.play('MyinfoView', "button");
        var sendName;
        var sendSex;
        var editname = this.ui_nickname.text;
        var sex = this.sexController.selectedIndex;
        if (editname == AppConst_1.AppConst.mPlayerModel._n) {
            this.isChangeName = false;
            sendName = '';
        }
        else {
            this.isChangeName = true;
            sendName = editname;
            if (AppConst_1.AppConst.mPlayerModel.freecount <= 0) { //沒有免費的修改次數
                this.ui_goldTip.visible = true;
                return;
            }
        }
        if (sex == AppConst_1.AppConst.mPlayerModel.wechat._S) {
            sendSex = -1;
        }
        else {
            sendSex = sex;
        }
        this.changeSome = 1;
        this.sendChanged();
    };
    /**金幣不足去充值 */
    MyinfoView.prototype.showTopupView = function () {
        AudioManager_1.AudioManager.Singleton.play('MyinfoView', "button");
        LobbyViewCtr_1.default.instance.view.showTopup();
        this.ui_nogoldTip.visible = false;
    };
    /**不充值 */
    MyinfoView.prototype.hideNogoldTip = function () {
        AudioManager_1.AudioManager.Singleton.play('MyinfoView', "button");
        this.ui_nogoldTip.visible = false;
    };
    /**取消修改 */
    MyinfoView.prototype.cancelChanged = function () {
        AudioManager_1.AudioManager.Singleton.play('MyinfoView', "button");
        this.ui_goldTip.visible = false;
    };
    /**確認修改 */
    MyinfoView.prototype.affirmChanged = function () {
        AudioManager_1.AudioManager.Singleton.play('MyinfoView', "button");
        this.ui_goldTip.visible = false;
        if (UIUtil_1.UIUtil.formatNumber(AppConst_1.AppConst.mPlayerModel.gold) < 100) {
            this.ui_nogoldTip.visible = true;
            return;
        }
        this.sendChanged();
    };
    MyinfoView.prototype.sendChanged = function () {
        var sendName;
        var sendSex;
        var editname = this.ui_nickname.text;
        if (this.getByteLength(editname) > 14) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("输入的昵称太长了");
            return;
        }
        if (editname == AppConst_1.AppConst.mPlayerModel._n) {
            sendName = '';
        }
        else {
            sendName = editname;
        }
        sendSex = this.sexController.selectedIndex;
        console.log("sendSex == ", sendSex);
        if ((editname == AppConst_1.AppConst.mPlayerModel._n) && (sendSex == AppConst_1.AppConst.mPlayerModel.wechat._S) && !this.selectHeadIndex && !this.selectHeadFrame) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("無修改");
            return;
        }
        var info = { UserId: null, HeadIcon: null, nikename: null, sex: null, Desc: null, HeadFrame: null };
        info.UserId = AppConst_1.AppConst.mPlayerModel.userid;
        info.HeadIcon = this.selectHeadIndex;
        info.nikename = sendName;
        info.Desc = '';
        info.sex = sendSex;
        info.HeadFrame = this.selectHeadFrame;
        LobbyViewCtr_1.default.instance.cs_personalinfo(info);
    };
    /**修改成功的返回 */
    MyinfoView.prototype.handleChanged = function () {
        // if (this.changeSome == 1) {//修改 昵称返回
        //     // AppConst.mPlayerModel._n = this.ui_nickname.text;
        //     // AppConst.mPlayerModel.wechat._S = this.sexController.selectedIndex;
        //     LobbyViewCtr.instance.view.meView.initData();
        //     CommonCtr.instance.view.ShowTipLabel("修改成功");
        // } else if (this.changeSome == 2) {
        //     this.uploadHeadSuccess();
        // }
        if (this.isChangeName) {
            AppConst_1.AppConst.mPlayerModel.freecount = 0;
        }
        AppConst_1.AppConst.mPlayerModel.wechat._S = this.sexController.selectedIndex;
        AppConst_1.AppConst.mPlayerModel._n = this.ui_nickname.text;
        var headUrl;
        if (this.selectHeadFrame) {
            AppConst_1.AppConst.mPlayerModel["headFrame"] = "/fordlc/wechat/" + this.selectHeadFrame;
            UIUtil_1.UIUtil.loadShopImage(this.ui_topHeadFrameLoader, AppConst_1.AppConst.mPlayerModel["headFrame"]);
            LobbyViewCtr_1.default.instance.view.meView.setHeadFram();
        }
        if (this.selectHeadIndex) {
            AppConst_1.AppConst.mPlayerModel.wechat.wicon = "/fordlc/wechat/" + this.selectHeadIndex;
            headUrl = AppConst_1.AppConst.mPlayerModel.wechat.wicon;
            UIUtil_1.UIUtil.loadImage(this.topHeadLoader, headUrl);
            LobbyViewCtr_1.default.instance.view.meView.setHead(headUrl);
        }
        LobbyViewCtr_1.default.instance.view.meView.initData();
        LobbyViewCtr_1.default.instance.cs_tasklist();
    };
    /**上傳頭像 */
    MyinfoView.prototype.upLoadHead = function () {
        var _this = this;
        if (!this.cantouch) {
            return;
        }
        this.cantouch = false;
        this.scheduleOnce(function () {
            _this.cantouch = true;
        }, 1);
        AudioManager_1.AudioManager.Singleton.play('MyinfoView', "button");
        var dict = {
            needClip: 1,
            clipX: 200,
            clipY: 200,
        };
        if (cc.sys.platform === cc.sys.ANDROID) { //android
            var method = "openPhoto";
            var data = JSON.stringify(dict);
            var methodSignature = "(Ljava/lang/String;)V";
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/ImagePicker", method, methodSignature, data);
        }
        else if (cc.sys.os === cc.sys.OS_IOS) { //ios
            jsb.reflection.callStaticMethod("ImagePickerViewController", "pickImage:", JSON.stringify(dict));
        }
        else {
            if (!this.fileInputElement) {
                var formEle = document.createElement("from");
                formEle["name"] = "fileUploadForm";
                document.getElementById("GameCanvas").appendChild(formEle);
                var aElement = document.createElement("input");
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
                this.fileInputElement.addEventListener("change", function (type) { return __awaiter(_this, void 0, void 0, function () {
                    var fileList, reader;
                    var _this = this;
                    return __generator(this, function (_a) {
                        fileList = this.fileInputElement.files[0];
                        reader = new FileReader();
                        reader.readAsDataURL(fileList);
                        reader.onload = function (event) {
                            var image = new Image(); //新建一个img标签（还没嵌入DOM节点)
                            var dataImg = event.target.result;
                            var num = 0;
                            image.src = event.target.result;
                            image.onload = function () {
                                cc.log(fileList.size);
                                //由于不能将太多Base64字符给服务端发过于，咱们压缩一下
                                //如果想支持更大图片，请继续加判断，增加除数
                                if (fileList.size > 20000000) {
                                    cc.log("文件大小不能大于20M！");
                                    // param.value = '';
                                    return;
                                }
                                else if (fileList.size > 20000000) {
                                    num = 100;
                                }
                                else if (fileList.size > 19000000) {
                                    num = 95;
                                }
                                else if (fileList.size > 18000000) {
                                    num = 90;
                                }
                                else if (fileList.size > 17000000) {
                                    num = 85;
                                }
                                else if (fileList.size > 16000000) {
                                    num = 80;
                                }
                                else if (fileList.size > 15000000) {
                                    num = 75;
                                }
                                else if (fileList.size > 14000000) {
                                    num = 70;
                                }
                                else if (fileList.size > 13000000) {
                                    num = 65;
                                }
                                else if (fileList.size > 12000000) {
                                    num = 60;
                                }
                                else if (fileList.size > 11000000) {
                                    num = 55;
                                }
                                else if (fileList.size > 10000000) {
                                    num = 50;
                                }
                                else if (fileList.size > 9000000) {
                                    num = 45;
                                }
                                else if (fileList.size > 8000000) {
                                    num = 40;
                                }
                                else if (fileList.size > 7000000) {
                                    num = 35;
                                }
                                else if (fileList.size > 6000000) {
                                    num = 30;
                                }
                                else if (fileList.size > 5000000) {
                                    num = 25;
                                }
                                else if (fileList.size > 4000000) {
                                    num = 20;
                                }
                                else if (fileList.size > 3000000) {
                                    num = 15;
                                }
                                else if (fileList.size > 2000000) {
                                    num = 10;
                                }
                                else if (fileList.size > 1000000) {
                                    num = 5;
                                }
                                else if (fileList.size > 500000) {
                                    num = 2.5;
                                }
                                else if (fileList.size > 250000) {
                                    num = 1.5;
                                }
                                else {
                                    num = 0;
                                }
                                var canvas = document.createElement('canvas');
                                var context = canvas.getContext('2d');
                                var imageWidth = image.width / num; //压缩后图片的大小
                                var imageHeight = image.height / num;
                                canvas.width = imageWidth;
                                canvas.height = imageHeight;
                                context.drawImage(image, 0, 0, imageWidth, imageHeight);
                                dataImg = canvas.toDataURL('image/png');
                                var b64 = dataImg.replace('data:image/png;base64,', '');
                                _this.disposeImageHead(b64);
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
                            };
                        };
                        return [2 /*return*/];
                    });
                }); });
            }
            this.fileInputElement.click();
        }
    };
    /**手機上次頭像的調用 */
    MyinfoView.prototype.disposeImageHead = function (base64) {
        var _this = this;
        var self = this;
        console.log("--- base64---", base64);
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/UploadHead";
        var params = {
            filebate: base64,
            tablenum: 0,
            Account: 0,
            gid: 0
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            // console.log("---api/game/UploadHead res---", res);
            console.log("---api/game/UploadHead res---", JSON.stringify(res));
            if (res.code == 1) {
                _this.changeSome = 2;
                var headName = res.data;
                _this.selectHeadIndex = headName;
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
                _this.sendChanged();
                // let info = { UserId: null, HeadIcon: null, nikename: null, sex: null, Desc: null };
                // info.UserId = AppConst.mPlayerModel.userid;
                // info.HeadIcon = headName;
                // info.nikename = AppConst.mPlayerModel.wechat.wName;
                // info.Desc = AppConst.mPlayerModel.wechat.Desc;
                // info.sex = AppConst.mPlayerModel.wechat._S;
                // LobbyViewCtr.instance.cs_personalinfo(info);
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("上传失败");
            }
        }).catch(function (err) {
            console.log("----err----", err);
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("选择头像错误");
        });
    };
    MyinfoView.prototype.uploadHeadSuccess = function () {
        // cc.sys.localStorage.removeItem("saveHead");
        var headUrl = AppConst_1.AppConst.mPlayerModel.wechat.wicon;
        CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("上传成功");
        UIUtil_1.UIUtil.loadImage(this.topHeadLoader, headUrl);
        LobbyViewCtr_1.default.instance.view.meView.setHead(headUrl);
    };
    MyinfoView.prototype.uint8arrayToBase64 = function (u8Arr) {
        var CHUNK_SIZE = 0x8000; //arbitrary number
        var index = 0;
        var length = u8Arr.length;
        var result = '';
        var slice;
        while (index < length) {
            slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
            result += String.fromCharCode.apply(null, slice);
            index += CHUNK_SIZE;
        }
        // web image base64图片格式: "data:image/png;base64," + b64encoded;
        // return  "data:image/png;base64," + btoa(result);
        return btoa(result);
    };
    MyinfoView.prototype.setHeadFram = function () {
        if (AppConst_1.AppConst.mPlayerModel["headFrame"]) {
            UIUtil_1.UIUtil.loadShopImage(this.ui_topHeadFrameLoader, AppConst_1.AppConst.mPlayerModel["headFrame"]);
        }
    };
    MyinfoView.prototype.Show = function () {
        this.cantouch = true;
        this.ui_headlist.selectNone();
        this.ui_headframelist.selectNone();
        this.selectHeadIndex = '';
        this.selectHeadFrame = '';
        if (this.headFrames.length != AppConst_1.AppConst.mPlayerModel["headIcos"].length) {
            this.headFrames = AppConst_1.AppConst.mPlayerModel["headIcos"];
            this.ui_headframelist.numItems = this.headFrames.length;
        }
        this.initData();
        this.setHeadFram();
        _super.prototype.Show.call(this);
    };
    return MyinfoView;
}(ViewBase_1.default));
exports.default = MyinfoView;

cc._RF.pop();
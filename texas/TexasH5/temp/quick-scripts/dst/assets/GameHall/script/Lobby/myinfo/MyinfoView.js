
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/myinfo/MyinfoView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG15aW5mb1xcTXlpbmZvVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwRUFBeUU7QUFDekUsb0VBQW1FO0FBQ25FLGtFQUE2RDtBQUM3RCw0RUFBdUU7QUFDdkUsMkRBQTBEO0FBQzFELDJGQUEwRjtBQUMxRixzRUFBcUU7QUFDckUsZ0RBQTJDO0FBRTNDOztHQUVHO0FBQ0g7SUFBd0MsOEJBQVE7SUFBaEQ7UUFBQSxxRUF3ZkM7UUE3ZVcsd0JBQWtCLEdBQWlCLElBQUksQ0FBQztRQUN4QyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFDbkMsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBQ3BDLGlCQUFXLEdBQWUsSUFBSSxDQUFDO1FBRy9CLDJCQUFxQixHQUFpQixJQUFJLENBQUM7UUFDM0MscUJBQWUsR0FBaUIsSUFBSSxDQUFDO1FBRXJDLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUNuQyxpQkFBVyxHQUFpQixJQUFJLENBQUM7UUFDakMsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBRWpDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUNyQyxrQkFBWSxHQUFpQixJQUFJLENBQUM7UUFDbEMsa0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRzFDLFNBQVM7UUFDRCxzQkFBZ0IsR0FBZSxJQUFJLENBQUM7UUFHckMsa0JBQVksR0FBWSxLQUFLLENBQUM7UUFDN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFhLEVBQUUsQ0FBQztRQUUxQixxQkFBZSxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBdURwRSxnREFBZ0Q7UUFDekMsZ0JBQVUsR0FBVyxDQUFDLENBQUM7O0lBMlpsQyxDQUFDO0lBdmZHLHNCQUFjLDJDQUFtQjthQUFqQztZQUNJLE9BQU8sVUFBVSxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMsbUNBQVc7YUFBekI7WUFDSSxPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHFDQUFhO2FBQTNCO1lBQ0ksT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUE4QkQsMENBQXFCLEdBQXJCO1FBQ0ksaUJBQU0scUJBQXFCLFdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzdHLHFIQUFxSDtRQUVySCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFcEQsa0VBQWtFO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELG9DQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDRCx5QkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLDZCQUFRLEdBQWY7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sa0NBQWEsR0FBcEIsVUFBcUIsR0FBVztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3QixDQUFDLEVBQUUsQ0FBQzthQUNQO2lCQUFNO2dCQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7YUFBRTtTQUNyQjtRQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQVFNLDZCQUFRLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRyxtQkFBUSxDQUFDLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2hDLElBQUksR0FBRyxHQUFHLG1CQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLG1DQUFjLEdBQXJCLFVBQXNCLEtBQWEsRUFBRSxHQUFpQjtRQUNsRCxJQUFJLEdBQUcsR0FBaUIsR0FBRyxDQUFDO1FBQzVCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzlDLCtFQUErRTtRQUMvRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQUUsT0FBTztRQUM3QyxJQUFJLElBQUksR0FBRyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzFDLGVBQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RCxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRU0scUNBQWdCLEdBQXZCLFVBQXdCLEtBQWE7UUFDakMsS0FBSyxJQUFJLE9BQUssR0FBRyxDQUFDLEVBQUUsT0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLE9BQUssRUFBRSxFQUFFO1lBQzlELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxTQUFTLElBQUksT0FBSyxFQUFFO2dCQUNwQixPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sZ0NBQVcsR0FBbEIsVUFBbUIsSUFBa0I7UUFDakMsNERBQTREO1FBQzVELDJCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxTQUFTO0lBQ0Ysd0NBQW1CLEdBQTFCLFVBQTJCLEtBQWEsRUFBRSxHQUFpQjtRQUN2RCxJQUFJLEdBQUcsR0FBaUIsR0FBRyxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ00scUNBQWdCLEdBQXZCLFVBQXdCLElBQWtCO1FBQ3RDLDJCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVO0lBQ0gsNkJBQVEsR0FBZjtRQUNJLDJCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxRQUFnQixDQUFDO1FBQ3JCLElBQUksT0FBZSxDQUFDO1FBRXBCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ3JDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksUUFBUSxJQUFJLG1CQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3BCLElBQUksbUJBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVc7Z0JBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDL0IsT0FBTzthQUNWO1NBQ0o7UUFDRCxJQUFJLEdBQUcsSUFBSSxtQkFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ3hDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0gsT0FBTyxHQUFHLEdBQUcsQ0FBQztTQUNqQjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsYUFBYTtJQUNOLGtDQUFhLEdBQXBCO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxTQUFTO0lBQ0Ysa0NBQWEsR0FBcEI7UUFDSSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsVUFBVTtJQUNILGtDQUFhLEdBQXBCO1FBQ0ksMkJBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUNELFVBQVU7SUFDSCxrQ0FBYSxHQUFwQjtRQUNJLDJCQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksZUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU0sZ0NBQVcsR0FBbEI7UUFDSSxJQUFJLFFBQWdCLENBQUM7UUFDckIsSUFBSSxPQUFlLENBQUM7UUFFcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNuQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pELE9BQU87U0FDVjtRQUVELElBQUksUUFBUSxJQUFJLG1CQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO2FBQU07WUFDSCxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO1FBRUQsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLElBQUksbUJBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksbUJBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDMUkscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDcEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3RDLHNCQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsYUFBYTtJQUNOLGtDQUFhLEdBQXBCO1FBQ0ksdUNBQXVDO1FBQ3ZDLDJEQUEyRDtRQUMzRCw2RUFBNkU7UUFDN0Usb0RBQW9EO1FBQ3BELG9EQUFvRDtRQUNwRCxxQ0FBcUM7UUFDckMsZ0NBQWdDO1FBQ2hDLElBQUk7UUFDSixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsbUJBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUN2QztRQUNELG1CQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDbkUsbUJBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQ2pELElBQUksT0FBZSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixtQkFBUSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlFLGVBQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLG1CQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckYsc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuRDtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixtQkFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDOUUsT0FBTyxHQUFHLG1CQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDN0MsZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3REO1FBQ0Qsc0JBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBTUQsVUFBVTtJQUNILCtCQUFVLEdBQWpCO1FBQUEsaUJBc0lDO1FBcklHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDTCwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSSxHQUFHO1lBQ1AsUUFBUSxFQUFFLENBQUM7WUFDWCxLQUFLLEVBQUUsR0FBRztZQUNWLEtBQUssRUFBRSxHQUFHO1NBQ2IsQ0FBQTtRQUNELElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxTQUFTO1lBQy9DLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUksZUFBZSxHQUFHLHVCQUF1QixDQUFDO1lBQzlDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6RzthQUFNLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLO1lBQzNDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNwRzthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDeEIsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDO2dCQUNuQyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0MsUUFBUSxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUM7Z0JBQzVCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUN2QixRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFDNUIsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO2dCQUNyQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDNUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2dCQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7Z0JBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDNUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQU8sSUFBSTs7Ozt3QkFDcEQsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFDLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO3dCQUM5QixNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUMsTUFBTSxHQUFHLFVBQUMsS0FBSzs0QkFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQSxDQUFDLHNCQUFzQjs0QkFDOUMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFnQixDQUFDOzRCQUM1QyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7NEJBQ1osS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQWdCLENBQUM7NEJBQzFDLEtBQUssQ0FBQyxNQUFNLEdBQUc7Z0NBQ1gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7Z0NBQ3JCLCtCQUErQjtnQ0FDL0IsdUJBQXVCO2dDQUN2QixJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUFFO29DQUMxQixFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO29DQUN0QixvQkFBb0I7b0NBQ3BCLE9BQU87aUNBQ1Y7cUNBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFBRTtvQ0FDakMsR0FBRyxHQUFHLEdBQUcsQ0FBQztpQ0FDYjtxQ0FBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUFFO29DQUNqQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2lDQUNaO3FDQUFNLElBQUksUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUU7b0NBQ2pDLEdBQUcsR0FBRyxFQUFFLENBQUM7aUNBQ1o7cUNBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFBRTtvQ0FDakMsR0FBRyxHQUFHLEVBQUUsQ0FBQztpQ0FDWjtxQ0FBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUFFO29DQUNqQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2lDQUNaO3FDQUFNLElBQUksUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUU7b0NBQ2pDLEdBQUcsR0FBRyxFQUFFLENBQUM7aUNBQ1o7cUNBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFBRTtvQ0FDakMsR0FBRyxHQUFHLEVBQUUsQ0FBQztpQ0FDWjtxQ0FBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUFFO29DQUNqQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2lDQUNaO3FDQUFNLElBQUksUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLEVBQUU7b0NBQ2pDLEdBQUcsR0FBRyxFQUFFLENBQUM7aUNBQ1o7cUNBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFBRTtvQ0FDakMsR0FBRyxHQUFHLEVBQUUsQ0FBQztpQ0FDWjtxQ0FBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxFQUFFO29DQUNqQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2lDQUNaO3FDQUFNLElBQUksUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUU7b0NBQ2hDLEdBQUcsR0FBRyxFQUFFLENBQUM7aUNBQ1o7cUNBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBRTtvQ0FDaEMsR0FBRyxHQUFHLEVBQUUsQ0FBQztpQ0FDWjtxQ0FBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFO29DQUNoQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2lDQUNaO3FDQUFNLElBQUksUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUU7b0NBQ2hDLEdBQUcsR0FBRyxFQUFFLENBQUM7aUNBQ1o7cUNBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBRTtvQ0FDaEMsR0FBRyxHQUFHLEVBQUUsQ0FBQztpQ0FDWjtxQ0FBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFO29DQUNoQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2lDQUNaO3FDQUFNLElBQUksUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLEVBQUU7b0NBQ2hDLEdBQUcsR0FBRyxFQUFFLENBQUM7aUNBQ1o7cUNBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sRUFBRTtvQ0FDaEMsR0FBRyxHQUFHLEVBQUUsQ0FBQztpQ0FDWjtxQ0FBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEdBQUcsT0FBTyxFQUFFO29DQUNoQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2lDQUNYO3FDQUFNLElBQUksUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLEVBQUU7b0NBQy9CLEdBQUcsR0FBRyxHQUFHLENBQUM7aUNBQ2I7cUNBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sRUFBRTtvQ0FDL0IsR0FBRyxHQUFHLEdBQUcsQ0FBQztpQ0FDYjtxQ0FBTTtvQ0FDSCxHQUFHLEdBQUcsQ0FBQyxDQUFDO2lDQUNYO2dDQUNELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBQzlDLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ3RDLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUUsVUFBVTtnQ0FDL0MsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0NBQ3JDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2dDQUMxQixNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztnQ0FDNUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0NBQ3hELE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dDQUN4QyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dDQUN4RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQzNCLGtCQUFrQjtnQ0FDbEIseUJBQXlCO2dDQUN6Qiw4QkFBOEI7Z0NBQzlCLDBCQUEwQjtnQ0FDMUIsNEJBQTRCO2dDQUM1QiwyQ0FBMkM7Z0NBQzNDLDRDQUE0QztnQ0FDNUMsd0NBQXdDO2dDQUN4Qyw4QkFBOEI7Z0NBQzlCLCtCQUErQjtnQ0FDL0Isd0RBQXdEO2dDQUN4RCw2Q0FBNkM7Z0NBQzdDLElBQUk7NEJBQ1IsQ0FBQyxDQUFBO3dCQUNMLENBQUMsQ0FBQTs7O3FCQUNKLENBQUMsQ0FBQTthQUNMO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELGVBQWU7SUFDUixxQ0FBZ0IsR0FBdkIsVUFBd0IsTUFBYztRQUF0QyxpQkE2Q0M7UUE1Q0csSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksR0FBRyxHQUFHLGlDQUFlLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUU1RSxJQUFJLE1BQU0sR0FBRztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsT0FBTyxFQUFFLENBQUM7WUFDVixHQUFHLEVBQUUsQ0FBQztTQUNULENBQUE7UUFDRCxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDM0MscURBQXFEO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2YsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO2dCQUVoQyw4QkFBOEI7Z0JBQzlCLHlCQUF5QjtnQkFDekIsNEJBQTRCO2dCQUM1QiwyQ0FBMkM7Z0JBQzNDLDRDQUE0QztnQkFDNUMsd0NBQXdDO2dCQUN4Qyw4QkFBOEI7Z0JBQzlCLCtCQUErQjtnQkFDL0Isd0RBQXdEO2dCQUN4RCxnREFBZ0Q7Z0JBQ2hELElBQUk7Z0JBQ0osS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixzRkFBc0Y7Z0JBQ3RGLDhDQUE4QztnQkFDOUMsNEJBQTRCO2dCQUM1QixzREFBc0Q7Z0JBQ3RELGlEQUFpRDtnQkFDakQsOENBQThDO2dCQUM5QywrQ0FBK0M7YUFDbEQ7aUJBQU07Z0JBQ0gscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoRDtRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQTtZQUMvQixxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLHNDQUFpQixHQUF4QjtRQUNJLDhDQUE4QztRQUM5QyxJQUFJLE9BQU8sR0FBVyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3pELHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLHNCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSx1Q0FBa0IsR0FBekIsVUFBMEIsS0FBaUI7UUFDdkMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsa0JBQWtCO1FBQzNDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksS0FBSyxDQUFDO1FBQ1YsT0FBTyxLQUFLLEdBQUcsTUFBTSxFQUFFO1lBQ25CLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2pELEtBQUssSUFBSSxVQUFVLENBQUM7U0FDdkI7UUFDRCwrREFBK0Q7UUFDL0QsbURBQW1EO1FBQ25ELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxnQ0FBVyxHQUFsQjtRQUNJLElBQUksbUJBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDcEMsZUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsbUJBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUN4RjtJQUNMLENBQUM7SUFHTSx5QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxtQkFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxtQkFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixpQkFBTSxJQUFJLFdBQUUsQ0FBQztJQUNqQixDQUFDO0lBR0wsaUJBQUM7QUFBRCxDQXhmQSxBQXdmQyxDQXhmdUMsa0JBQVEsR0F3Zi9DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IENvbW1vbkN0ciB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vbkN0clwiO1xyXG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcclxuaW1wb3J0IEh0dHBIZWxwRXggZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9Db21tb24vTWFuYWdlcnMvSHR0cEhlbHBFeFwiO1xyXG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcclxuaW1wb3J0IHsgQXBwQ29uc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L21vZHVsZXMvQHNsb3RzbWFzdGVyL3VpLWNvbW1vbi9saWIvQXBwQ29uc3RcIjtcclxuaW1wb3J0IHsgQmFzZUZyYW1lTmF0aXZlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWVOYXRpdmVcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOaIkeeahOWAi+S6uuS/oeaBr1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlpbmZvVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImdhbWVIYWxsXCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwicmVzL0xvYmJ5XCI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJteWluZm9cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVpX2J0bl9teWluZm9CcmVhazogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfdG9waGVhZDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfbmlja25hbWU6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2hlYWRsaXN0OiBmZ3VpLkdMaXN0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2V4Q29udHJvbGxlcjogZmd1aS5Db250cm9sbGVyO1xyXG4gICAgcHJpdmF0ZSB0b3BIZWFkTG9hZGVyOiBmZ3VpLkdMb2FkZXI7XHJcbiAgICBwcml2YXRlIHVpX3RvcEhlYWRGcmFtZUxvYWRlcjogZmd1aS5HTG9hZGVyID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfYnRuX2luZm9zYXZlOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlfZ29sZFRpcDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdWlfeGhnb2xkcXI6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX3hoZ29sZHF4OiBmZ3VpLkdCdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdWlfbm9nb2xkVGlwOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB1aV9nb3RvcHVwcXI6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwcml2YXRlIHVpX2dvdG9wdXBxeDogZmd1aS5HQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHR5cGVDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XHJcbiAgICAvKirlpLTlg4/moYYgKi9cclxuICAgIHByaXZhdGUgdWlfaGVhZGZyYW1lbGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XHJcbiAgICAvKirlvZPliY3pgInmi6nnmoTlpLTlg4/moYYgKi9cclxuICAgIHB1YmxpYyBzZWxlY3RIZWFkRnJhbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBpc0NoYW5nZU5hbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY2FudG91Y2g6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHVibGljIGhlYWRGcmFtZXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZUhlYWRJY29uczogbnVtYmVyW10gPSBbMjEsIDIyLCAyMywgMjQsIDI1LCAyNiwgMjcsIDI4XTtcclxuXHJcbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKSB7XHJcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnVpX2J0bl9teWluZm9CcmVhay5vbkNsaWNrKHRoaXMuSGlkZVZpZXcsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2V4Q29udHJvbGxlciA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDb250cm9sbGVyKFwic2V4XCIpO1xyXG4gICAgICAgIHRoaXMudWlfaGVhZGxpc3Quc2V0VmlydHVhbCgpO1xyXG4gICAgICAgIHRoaXMudWlfaGVhZGxpc3QuaXRlbVJlbmRlcmVyID0gdGhpcy5yZW5kZXJMaXN0SXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfaGVhZGxpc3Qub24oZmd1aS5FdmVudC5DTElDS19JVEVNLCB0aGlzLm9uQ2xpY2tJdGVtLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy51aV90b3BoZWFkLm9uQ2xpY2sodGhpcy51cExvYWRIZWFkLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy50b3BIZWFkTG9hZGVyID0gdGhpcy51aV90b3BoZWFkLmdldENoaWxkKFwibjQxXCIpLmFzQnV0dG9uLmdldENoaWxkKFwiaGVhZFwiKS5hc0NvbS5nZXRDaGlsZChcIm4wXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIC8vIHRoaXMudG9wSGVhZEZyYW1lTG9hZGVyID0gdGhpcy51aV90b3BoZWFkLmdldENoaWxkKFwibjQxXCIpLmFzQnV0dG9uLmdldENoaWxkKFwiaGVhZFwiKS5hc0NvbS5nZXRDaGlsZChcIm40XCIpLmFzTG9hZGVyO1xyXG5cclxuICAgICAgICB0aGlzLnVpX2J0bl9pbmZvc2F2ZS5vbkNsaWNrKHRoaXMuc2F2YUluZm8sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnVpX3hoZ29sZHFyLm9uQ2xpY2sodGhpcy5hZmZpcm1DaGFuZ2VkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX3hoZ29sZHF4Lm9uQ2xpY2sodGhpcy5jYW5jZWxDaGFuZ2VkLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnVpX2dvdG9wdXBxci5vbkNsaWNrKHRoaXMuc2hvd1RvcHVwVmlldywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9nb3RvcHVwcXgub25DbGljayh0aGlzLmhpZGVOb2dvbGRUaXAsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnR5cGVDb250cm9sbGVyID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpO1xyXG4gICAgICAgIHRoaXMudWlfaGVhZGZyYW1lbGlzdC5zZXRWaXJ0dWFsKCk7XHJcbiAgICAgICAgdGhpcy51aV9oZWFkZnJhbWVsaXN0Lml0ZW1SZW5kZXJlciA9IHRoaXMucmVuZGVyTGlzdEZyYW1lSXRlbS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudWlfaGVhZGZyYW1lbGlzdC5vbihmZ3VpLkV2ZW50LkNMSUNLX0lURU0sIHRoaXMub25DbGlja0ZyYW1lSXRlbSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xyXG4gICAgICAgIHdpbmRvdy5kaXNwb3NlSW1hZ2VIZWFkID0gdGhpcy5kaXNwb3NlSW1hZ2VIZWFkLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51aV9oZWFkbGlzdC5udW1JdGVtcyA9IDU5O1xyXG4gICAgICAgIHRoaXMuU2hvdygpO1xyXG4gICAgfVxyXG4gICAgSGlkZSgpIHtcclxuICAgICAgICBzdXBlci5IaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEhpZGVWaWV3KCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTXlpbmZvVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuSGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCeXRlTGVuZ3RoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjID0gc3RyLmNoYXJBdChpKTtcclxuICAgICAgICAgICAgaWYgKC9eW1xcdTAwMDAtXFx1MDBmZl0kLy50ZXN0KGMpKSB7XHJcbiAgICAgICAgICAgICAgICBiKys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7IGIgKz0gMjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoq5L+u5pS55L+h5oGvICDlkIzkuIDkuKrmjqXlj6MgIOWIpOaWreW9k+WJjeWcqOS/ruaUueWTquS4qiAgMeW9k+WJjeWcqOS/ruaUueaYteensCAgMuW9k+WJjeWcqOS/ruaUueWktOWDjyAqL1xyXG4gICAgcHVibGljIGNoYW5nZVNvbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKirnlbbliY3pgbjmk4fnmoTpoK3lg48gKi9cclxuICAgIHB1YmxpYyBzZWxlY3RIZWFkSW5kZXg6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgbGV0IHBsYXkgPSBBcHBDb25zdC5tUGxheWVyTW9kZWw7XHJcbiAgICAgICAgdGhpcy51aV9uaWNrbmFtZS50ZXh0ID0gcGxheS5fbjtcclxuICAgICAgICBsZXQgc2V4ID0gQXBwQ29uc3QubVBsYXllck1vZGVsLndlY2hhdC5fUztcclxuICAgICAgICB0aGlzLnNleENvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleChzZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheS53ZWNoYXQud2ljb24gPT0gXCIsIHBsYXkud2VjaGF0LndpY29uKTtcclxuICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMudG9wSGVhZExvYWRlciwgcGxheS53ZWNoYXQud2ljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXJMaXN0SXRlbShpbmRleDogbnVtYmVyLCBvYmo6IGZndWkuR09iamVjdCkge1xyXG4gICAgICAgIGxldCBjb20gPSA8Zmd1aS5HQnV0dG9uPm9iajtcclxuICAgICAgICBsZXQgaGVhZCA9IGNvbS5nZXRDaGlsZChcImhlYWRcIikuYXNDb207XHJcbiAgICAgICAgbGV0IGhlYWRMb2FkZXIgPSBoZWFkLmdldENoaWxkKFwibjBcIikuYXNMb2FkZXI7XHJcbiAgICAgICAgLy8gVUlVdGlsLmxvYWRJbWFnZShoZWFkTG9hZGVyLCBcIi9mb3JkbGMvd2VjaGF0L3VzZXJfXCIgKyAoaW5kZXggKyAxKSArIFwiLnBuZ1wiKTtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0ZUhlYWRJY29uKGluZGV4ICsgMSkpIHJldHVybjtcclxuICAgICAgICBsZXQgbmFtZSA9IFwidXNlcl9cIiArIChpbmRleCArIDEpICsgJy5wbmcnO1xyXG4gICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UoaGVhZExvYWRlciwgXCJ1c2VyX1wiICsgKGluZGV4ICsgMSksIFwiTG9iYnlcIik7XHJcbiAgICAgICAgY29tLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RlbGV0ZUhlYWRJY29uKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5kZWxldGVIZWFkSWNvbnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkZWxldGVOdW0gPSB0aGlzLmRlbGV0ZUhlYWRJY29uc1tpbmRleF07XHJcbiAgICAgICAgICAgIGlmIChkZWxldGVOdW0gPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DbGlja0l0ZW0oaXRlbTogZmd1aS5HQnV0dG9uKSB7XHJcbiAgICAgICAgLy8gdGhpcy50b3BIZWFkTG9hZGVyLnVybCA9IFwidWk6Ly9Db21tb24vdXNlcl9cIiArIGl0ZW0ubmFtZTtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ015aW5mb1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLnNlbGVjdEhlYWRJbmRleCA9IGl0ZW0ubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlpLTlg4/moYYgKi9cclxuICAgIHB1YmxpYyByZW5kZXJMaXN0RnJhbWVJdGVtKGluZGV4OiBudW1iZXIsIG9iajogZmd1aS5HT2JqZWN0KSB7XHJcbiAgICAgICAgbGV0IGNvbSA9IDxmZ3VpLkdCdXR0b24+b2JqO1xyXG4gICAgICAgIGxldCBmcmFtZSA9IGNvbS5nZXRDaGlsZChcIm4wXCIpLmFzTG9hZGVyO1xyXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5oZWFkRnJhbWVzW2luZGV4XS5zcGxpdChcIi9cIilbM107XHJcbiAgICAgICAgY29tLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIFVJVXRpbC5sb2FkU2hvcEltYWdlKGZyYW1lLCB0aGlzLmhlYWRGcmFtZXNbaW5kZXhdKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkNsaWNrRnJhbWVJdGVtKGl0ZW06IGZndWkuR0J1dHRvbikge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTXlpbmZvVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SGVhZEZyYW1lID0gaXRlbS5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuS/neWtmOS/oeaBryAqL1xyXG4gICAgcHVibGljIHNhdmFJbmZvKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTXlpbmZvVmlldycsIFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGxldCBzZW5kTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBzZW5kU2V4OiBudW1iZXI7XHJcblxyXG4gICAgICAgIGxldCBlZGl0bmFtZSA9IHRoaXMudWlfbmlja25hbWUudGV4dDtcclxuICAgICAgICBsZXQgc2V4ID0gdGhpcy5zZXhDb250cm9sbGVyLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgaWYgKGVkaXRuYW1lID09IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5fbikge1xyXG4gICAgICAgICAgICB0aGlzLmlzQ2hhbmdlTmFtZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzZW5kTmFtZSA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDaGFuZ2VOYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2VuZE5hbWUgPSBlZGl0bmFtZTtcclxuICAgICAgICAgICAgaWYgKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5mcmVlY291bnQgPD0gMCkgeyAvL+aykuacieWFjeiyu+eahOS/ruaUueasoeaVuFxyXG4gICAgICAgICAgICAgICAgdGhpcy51aV9nb2xkVGlwLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZXggPT0gQXBwQ29uc3QubVBsYXllck1vZGVsLndlY2hhdC5fUykge1xyXG4gICAgICAgICAgICBzZW5kU2V4ID0gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2VuZFNleCA9IHNleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTb21lID0gMTtcclxuICAgICAgICB0aGlzLnNlbmRDaGFuZ2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq6YeR5bmj5LiN6Laz5Y675YWF5YC8ICovXHJcbiAgICBwdWJsaWMgc2hvd1RvcHVwVmlldygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ015aW5mb1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5zaG93VG9wdXAoKTtcclxuICAgICAgICB0aGlzLnVpX25vZ29sZFRpcC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5LiN5YWF5YC8ICovXHJcbiAgICBwdWJsaWMgaGlkZU5vZ29sZFRpcCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ015aW5mb1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLnVpX25vZ29sZFRpcC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Y+W5raI5L+u5pS5ICovXHJcbiAgICBwdWJsaWMgY2FuY2VsQ2hhbmdlZCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ015aW5mb1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLnVpX2dvbGRUaXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoq56K66KqN5L+u5pS5ICovXHJcbiAgICBwdWJsaWMgYWZmaXJtQ2hhbmdlZCgpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ015aW5mb1ZpZXcnLCBcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLnVpX2dvbGRUaXAudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChVSVV0aWwuZm9ybWF0TnVtYmVyKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5nb2xkKSA8IDEwMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVpX25vZ29sZFRpcC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbmRDaGFuZ2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbmRDaGFuZ2VkKCkge1xyXG4gICAgICAgIGxldCBzZW5kTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBzZW5kU2V4OiBudW1iZXI7XHJcblxyXG4gICAgICAgIGxldCBlZGl0bmFtZSA9IHRoaXMudWlfbmlja25hbWUudGV4dDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0Qnl0ZUxlbmd0aChlZGl0bmFtZSkgPiAxNCkge1xyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLovpPlhaXnmoTmmLXnp7DlpKrplb/kuoZcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlZGl0bmFtZSA9PSBBcHBDb25zdC5tUGxheWVyTW9kZWwuX24pIHtcclxuICAgICAgICAgICAgc2VuZE5hbWUgPSAnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZW5kTmFtZSA9IGVkaXRuYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VuZFNleCA9IHRoaXMuc2V4Q29udHJvbGxlci5zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VuZFNleCA9PSBcIiwgc2VuZFNleCk7XHJcbiAgICAgICAgaWYgKChlZGl0bmFtZSA9PSBBcHBDb25zdC5tUGxheWVyTW9kZWwuX24pICYmIChzZW5kU2V4ID09IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC53ZWNoYXQuX1MpICYmICF0aGlzLnNlbGVjdEhlYWRJbmRleCAmJiAhdGhpcy5zZWxlY3RIZWFkRnJhbWUpIHtcclxuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi54Sh5L+u5pS5XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaW5mbyA9IHsgVXNlcklkOiBudWxsLCBIZWFkSWNvbjogbnVsbCwgbmlrZW5hbWU6IG51bGwsIHNleDogbnVsbCwgRGVzYzogbnVsbCwgSGVhZEZyYW1lOiBudWxsIH07XHJcbiAgICAgICAgaW5mby5Vc2VySWQgPSBBcHBDb25zdC5tUGxheWVyTW9kZWwudXNlcmlkO1xyXG4gICAgICAgIGluZm8uSGVhZEljb24gPSB0aGlzLnNlbGVjdEhlYWRJbmRleDtcclxuICAgICAgICBpbmZvLm5pa2VuYW1lID0gc2VuZE5hbWU7XHJcbiAgICAgICAgaW5mby5EZXNjID0gJyc7XHJcbiAgICAgICAgaW5mby5zZXggPSBzZW5kU2V4O1xyXG4gICAgICAgIGluZm8uSGVhZEZyYW1lID0gdGhpcy5zZWxlY3RIZWFkRnJhbWU7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX3BlcnNvbmFsaW5mbyhpbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirkv67mlLnmiJDlip/nmoTov5Tlm54gKi9cclxuICAgIHB1YmxpYyBoYW5kbGVDaGFuZ2VkKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmNoYW5nZVNvbWUgPT0gMSkgey8v5L+u5pS5IOaYteensOi/lOWbnlxyXG4gICAgICAgIC8vICAgICAvLyBBcHBDb25zdC5tUGxheWVyTW9kZWwuX24gPSB0aGlzLnVpX25pY2tuYW1lLnRleHQ7XHJcbiAgICAgICAgLy8gICAgIC8vIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC53ZWNoYXQuX1MgPSB0aGlzLnNleENvbnRyb2xsZXIuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICAvLyAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcubWVWaWV3LmluaXREYXRhKCk7XHJcbiAgICAgICAgLy8gICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuS/ruaUueaIkOWKn1wiKTtcclxuICAgICAgICAvLyB9IGVsc2UgaWYgKHRoaXMuY2hhbmdlU29tZSA9PSAyKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXBsb2FkSGVhZFN1Y2Nlc3MoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaGFuZ2VOYW1lKSB7XHJcbiAgICAgICAgICAgIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5mcmVlY291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcHBDb25zdC5tUGxheWVyTW9kZWwud2VjaGF0Ll9TID0gdGhpcy5zZXhDb250cm9sbGVyLnNlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsLl9uID0gdGhpcy51aV9uaWNrbmFtZS50ZXh0O1xyXG4gICAgICAgIGxldCBoZWFkVXJsOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0SGVhZEZyYW1lKSB7XHJcbiAgICAgICAgICAgIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbFtcImhlYWRGcmFtZVwiXSA9IFwiL2ZvcmRsYy93ZWNoYXQvXCIgKyB0aGlzLnNlbGVjdEhlYWRGcmFtZTtcclxuICAgICAgICAgICAgVUlVdGlsLmxvYWRTaG9wSW1hZ2UodGhpcy51aV90b3BIZWFkRnJhbWVMb2FkZXIsIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbFtcImhlYWRGcmFtZVwiXSk7XHJcbiAgICAgICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3Lm1lVmlldy5zZXRIZWFkRnJhbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RIZWFkSW5kZXgpIHtcclxuICAgICAgICAgICAgQXBwQ29uc3QubVBsYXllck1vZGVsLndlY2hhdC53aWNvbiA9IFwiL2ZvcmRsYy93ZWNoYXQvXCIgKyB0aGlzLnNlbGVjdEhlYWRJbmRleDtcclxuICAgICAgICAgICAgaGVhZFVybCA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC53ZWNoYXQud2ljb247XHJcbiAgICAgICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UodGhpcy50b3BIZWFkTG9hZGVyLCBoZWFkVXJsKTtcclxuICAgICAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLnZpZXcubWVWaWV3LnNldEhlYWQoaGVhZFVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS52aWV3Lm1lVmlldy5pbml0RGF0YSgpO1xyXG4gICAgICAgIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc190YXNrbGlzdCgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoq6YG45pOH6Ieq5a6a576p6aCt5YOPICovXHJcbiAgICBwcml2YXRlIGZpbGVJbnB1dEVsZW1lbnQ7XHJcbiAgICAvKirkuIrlgrPpoK3lg48gKi9cclxuICAgIHB1YmxpYyB1cExvYWRIZWFkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYW50b3VjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FudG91Y2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIH0sIDEpXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdNeWluZm9WaWV3JywgXCJidXR0b25cIik7XHJcbiAgICAgICAgbGV0IGRpY3QgPSB7XHJcbiAgICAgICAgICAgIG5lZWRDbGlwOiAxLCAvLzHmmK/oo4HliarvvIwy5piv5LiN6KOB5YmqXHJcbiAgICAgICAgICAgIGNsaXBYOiAyMDAsIC8v6KOB5YmqeOWwuuWvuFxyXG4gICAgICAgICAgICBjbGlwWTogMjAwLCAvL+ijgeWJqnnlsLrlr7hcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkFORFJPSUQpIHsgLy9hbmRyb2lkXHJcbiAgICAgICAgICAgIGxldCBtZXRob2QgPSBcIm9wZW5QaG90b1wiO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRpY3QpO1xyXG4gICAgICAgICAgICBsZXQgbWV0aG9kU2lnbmF0dXJlID0gXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIjtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0ltYWdlUGlja2VyXCIsIG1ldGhvZCwgbWV0aG9kU2lnbmF0dXJlLCBkYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNjLnN5cy5vcyA9PT0gY2Muc3lzLk9TX0lPUykgeyAvL2lvc1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiSW1hZ2VQaWNrZXJWaWV3Q29udHJvbGxlclwiLCBcInBpY2tJbWFnZTpcIiwgSlNPTi5zdHJpbmdpZnkoZGljdCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5maWxlSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmcm9tXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUVsZVtcIm5hbWVcIl0gPSBcImZpbGVVcGxvYWRGb3JtXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdhbWVDYW52YXNcIikuYXBwZW5kQ2hpbGQoZm9ybUVsZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgICAgICBhRWxlbWVudC5pZCA9IFwidGVzdGlucHV0aWRcIjtcclxuICAgICAgICAgICAgICAgIGFFbGVtZW50Lm5hbWUgPSBcInRlc3RcIjtcclxuICAgICAgICAgICAgICAgIGFFbGVtZW50LmFjY2VwdCA9IFwiaW1hZ2UvKlwiO1xyXG4gICAgICAgICAgICAgICAgYUVsZW1lbnQudHlwZSA9IFwiZmlsZVwiO1xyXG4gICAgICAgICAgICAgICAgYUVsZW1lbnQuc3R5bGUuekluZGV4ID0gXCItMVwiO1xyXG4gICAgICAgICAgICAgICAgYUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgICAgICAgICBhRWxlbWVudC5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgICAgICAgICAgICAgYUVsZW1lbnQuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICAgICAgICAgICAgICBhRWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICAgICAgICAgIGFFbGVtZW50LnN0eWxlLm1heFdpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgICAgICAgICBhRWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGFFbGVtZW50LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgZm9ybUVsZS5hcHBlbmRDaGlsZChhRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVJbnB1dEVsZW1lbnQgPSBhRWxlbWVudDtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZUlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGFzeW5jICh0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVMaXN0ID0gdGhpcy5maWxlSW5wdXRFbGVtZW50LmZpbGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpIC8v5paw5bu65LiA5LiqaW1n5qCH562+77yI6L+Y5rKh5bWM5YWlRE9N6IqC54K5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YUltZyA9IGV2ZW50LnRhcmdldC5yZXN1bHQgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdCBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhmaWxlTGlzdC5zaXplKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nlLHkuo7kuI3og73lsIblpKrlpJpCYXNlNjTlrZfnrKbnu5nmnI3liqHnq6/lj5Hov4fkuo7vvIzlkrHku6zljovnvKnkuIDkuItcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5oOz5pSv5oyB5pu05aSn5Zu+54mH77yM6K+357un57ut5Yqg5Yik5pat77yM5aKe5Yqg6Zmk5pWwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZUxpc3Quc2l6ZSA+IDIwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwi5paH5Lu25aSn5bCP5LiN6IO95aSn5LqOMjBN77yBXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyYW0udmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiAyMDAwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZUxpc3Quc2l6ZSA+IDE5MDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gOTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiAxODAwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9IDkwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWxlTGlzdC5zaXplID4gMTcwMDAwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW0gPSA4NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZUxpc3Quc2l6ZSA+IDE2MDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gODA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiAxNTAwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9IDc1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWxlTGlzdC5zaXplID4gMTQwMDAwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW0gPSA3MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZUxpc3Quc2l6ZSA+IDEzMDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gNjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiAxMjAwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9IDYwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWxlTGlzdC5zaXplID4gMTEwMDAwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW0gPSA1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZUxpc3Quc2l6ZSA+IDEwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiA5MDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gNDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiA4MDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiA3MDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gMzU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiA2MDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiA1MDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gMjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiA0MDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiAzMDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiAyMDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVMaXN0LnNpemUgPiAxMDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZUxpc3Quc2l6ZSA+IDUwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9IDIuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZUxpc3Quc2l6ZSA+IDI1MDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VXaWR0aCA9IGltYWdlLndpZHRoIC8gbnVtOyAgLy/ljovnvKnlkI7lm77niYfnmoTlpKflsI9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZUhlaWdodCA9IGltYWdlLmhlaWdodCAvIG51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltYWdlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW1hZ2VIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUltZyA9IGNhbnZhcy50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGI2NCA9IGRhdGFJbWcucmVwbGFjZSgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcG9zZUltYWdlSGVhZChiNjQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coZGF0YUltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+atpOaXtueahGRhdGFJbWflsLHmmK/kvaDopoHkuIrkvKDnu5nmnI3liqHlmajnmoTlrZfnrKZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBpbWFnZU9iaiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1hZ2VPYmouc3JjID0gZGF0YUltZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltYWdlT2JqLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgdGV4dHVyZU9iaiA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0dXJlT2JqLmluaXRXaXRoRWxlbWVudChpbWFnZU9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dHVyZU9iai5oYW5kbGVMb2FkZWRUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dHVyZU9iai53aWR0aCA9IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0dXJlT2JqLmhlaWdodCA9IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZU9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5oZWFkTG9hZGVyLnRleHR1cmUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5maWxlSW5wdXRFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB0ZW1wSGVhZFBhdGg6IHN0cmluZztcclxuICAgIC8qKuaJi+apn+S4iuasoemgreWDj+eahOiqv+eUqCAqL1xyXG4gICAgcHVibGljIGRpc3Bvc2VJbWFnZUhlYWQoYmFzZTY0OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gYmFzZTY0LS0tXCIsIGJhc2U2NCk7XHJcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZS9VcGxvYWRIZWFkXCI7XHJcblxyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGZpbGViYXRlOiBiYXNlNjQsXHJcbiAgICAgICAgICAgIHRhYmxlbnVtOiAwLFxyXG4gICAgICAgICAgICBBY2NvdW50OiAwLFxyXG4gICAgICAgICAgICBnaWQ6IDBcclxuICAgICAgICB9XHJcbiAgICAgICAgSHR0cEhlbHBFeC5pbnN0YW5jZS5wb3N0KHVybCwgcGFyYW1zKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS1hcGkvZ2FtZS9VcGxvYWRIZWFkIHJlcy0tLVwiLCByZXMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLWFwaS9nYW1lL1VwbG9hZEhlYWQgcmVzLS0tXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTb21lID0gMjtcclxuICAgICAgICAgICAgICAgIGxldCBoZWFkTmFtZSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RIZWFkSW5kZXggPSBoZWFkTmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgaW1hZ2VPYmogPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIC8vIGltYWdlT2JqLnNyYyA9IGJhc2U2NDtcclxuICAgICAgICAgICAgICAgIC8vIGltYWdlT2JqLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgdGV4dHVyZU9iaiA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0dXJlT2JqLmluaXRXaXRoRWxlbWVudChpbWFnZU9iaik7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGV4dHVyZU9iai5oYW5kbGVMb2FkZWRUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGV4dHVyZU9iai53aWR0aCA9IDIwMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0dXJlT2JqLmhlaWdodCA9IDIwMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZU9iaik7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy50b3BIZWFkTG9hZGVyLnRleHR1cmUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZENoYW5nZWQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBpbmZvID0geyBVc2VySWQ6IG51bGwsIEhlYWRJY29uOiBudWxsLCBuaWtlbmFtZTogbnVsbCwgc2V4OiBudWxsLCBEZXNjOiBudWxsIH07XHJcbiAgICAgICAgICAgICAgICAvLyBpbmZvLlVzZXJJZCA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC51c2VyaWQ7XHJcbiAgICAgICAgICAgICAgICAvLyBpbmZvLkhlYWRJY29uID0gaGVhZE5hbWU7XHJcbiAgICAgICAgICAgICAgICAvLyBpbmZvLm5pa2VuYW1lID0gQXBwQ29uc3QubVBsYXllck1vZGVsLndlY2hhdC53TmFtZTtcclxuICAgICAgICAgICAgICAgIC8vIGluZm8uRGVzYyA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC53ZWNoYXQuRGVzYztcclxuICAgICAgICAgICAgICAgIC8vIGluZm8uc2V4ID0gQXBwQ29uc3QubVBsYXllck1vZGVsLndlY2hhdC5fUztcclxuICAgICAgICAgICAgICAgIC8vIExvYmJ5Vmlld0N0ci5pbnN0YW5jZS5jc19wZXJzb25hbGluZm8oaW5mbyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLkuIrkvKDlpLHotKVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLWVyci0tLS1cIiwgZXJyKVxyXG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLpgInmi6nlpLTlg4/plJnor69cIik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBsb2FkSGVhZFN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic2F2ZUhlYWRcIik7XHJcbiAgICAgICAgbGV0IGhlYWRVcmw6IHN0cmluZyA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC53ZWNoYXQud2ljb247XHJcbiAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5LiK5Lyg5oiQ5YqfXCIpO1xyXG4gICAgICAgIFVJVXRpbC5sb2FkSW1hZ2UodGhpcy50b3BIZWFkTG9hZGVyLCBoZWFkVXJsKTtcclxuICAgICAgICBMb2JieVZpZXdDdHIuaW5zdGFuY2Uudmlldy5tZVZpZXcuc2V0SGVhZChoZWFkVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdWludDhhcnJheVRvQmFzZTY0KHU4QXJyOiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgbGV0IENIVU5LX1NJWkUgPSAweDgwMDA7IC8vYXJiaXRyYXJ5IG51bWJlclxyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IHU4QXJyLmxlbmd0aDtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgbGV0IHNsaWNlO1xyXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICBzbGljZSA9IHU4QXJyLnN1YmFycmF5KGluZGV4LCBNYXRoLm1pbihpbmRleCArIENIVU5LX1NJWkUsIGxlbmd0aCkpO1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBzbGljZSk7XHJcbiAgICAgICAgICAgIGluZGV4ICs9IENIVU5LX1NJWkU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdlYiBpbWFnZSBiYXNlNjTlm77niYfmoLzlvI86IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiICsgYjY0ZW5jb2RlZDtcclxuICAgICAgICAvLyByZXR1cm4gIFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFwiICsgYnRvYShyZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiBidG9hKHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEhlYWRGcmFtKCkge1xyXG4gICAgICAgIGlmIChBcHBDb25zdC5tUGxheWVyTW9kZWxbXCJoZWFkRnJhbWVcIl0pIHtcclxuICAgICAgICAgICAgVUlVdGlsLmxvYWRTaG9wSW1hZ2UodGhpcy51aV90b3BIZWFkRnJhbWVMb2FkZXIsIEFwcENvbnN0Lm1QbGF5ZXJNb2RlbFtcImhlYWRGcmFtZVwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgU2hvdygpIHtcclxuICAgICAgICB0aGlzLmNhbnRvdWNoID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVpX2hlYWRsaXN0LnNlbGVjdE5vbmUoKTtcclxuICAgICAgICB0aGlzLnVpX2hlYWRmcmFtZWxpc3Quc2VsZWN0Tm9uZSgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SGVhZEluZGV4ID0gJyc7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RIZWFkRnJhbWUgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5oZWFkRnJhbWVzLmxlbmd0aCAhPSBBcHBDb25zdC5tUGxheWVyTW9kZWxbXCJoZWFkSWNvc1wiXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkRnJhbWVzID0gQXBwQ29uc3QubVBsYXllck1vZGVsW1wiaGVhZEljb3NcIl07XHJcbiAgICAgICAgICAgIHRoaXMudWlfaGVhZGZyYW1lbGlzdC5udW1JdGVtcyA9IHRoaXMuaGVhZEZyYW1lcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5pdERhdGEoKTtcclxuICAgICAgICB0aGlzLnNldEhlYWRGcmFtKCk7XHJcbiAgICAgICAgc3VwZXIuU2hvdygpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=
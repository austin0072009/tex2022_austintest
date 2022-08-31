"use strict";
cc._RF.push(module, 'a8bd595L7tDIq5U64X11oi8', 'LoginView');
// GameHall/script/Login/LoginView.ts

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
var AudioManager_1 = require("../../../Script/BaseFrame/AudioManager");
var CommonCtr_1 = require("../../../Script/BaseFrame/CommonCtr");
var CommonView_1 = require("../../../Script/BaseFrame/CommonView");
var PublicMethods_1 = require("../../../Script/BaseFrame/PublicMethods");
var SceneManager_1 = require("../../../Script/BaseFrame/SceneManager");
var StatusbarView_1 = require("../../../Script/BaseFrame/StatusbarView");
var ViewBase_1 = require("../../../Script/BaseFrame/ViewBase");
var WebSocketManager_1 = require("../../../Script/BaseFrame/WebSocketManager");
var HttpHelpEx_1 = require("../../../Script/Common/Managers/HttpHelpEx");
var ToolsEx_1 = require("../../../Script/Common/ToolsEx");
var UIUtil_1 = require("../../../Script/Common/UIUtil");
var AppConst_1 = require("../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var BaseFrameNative_1 = require("../../../Script/BaseFrameNative");
var GameCommon_1 = require("../GameCommon");
var NativeMethod_1 = require("../NativeMethod");
var LoginViewCtr_1 = require("./LoginViewCtr");
var LanguageConfig_1 = require("../Lobby/LanguageConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoginView = /** @class */ (function (_super) {
    __extends(LoginView, _super);
    function LoginView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animationNode = null;
        _this.loginTimer = null;
        /**----------------------------------------------------------------- */
        _this.ui_view_node = null;
        _this.ui_logo_Animation = null;
        /**注册按钮 */
        _this.ui_btn_register = null;
        /**手机注册 */
        _this.ui_phoneRegister = null;
        /**邮箱注册 */
        _this.ui_emailRegister = null;
        /**手机注册关闭 */
        _this.ui_btn_closePhoneReg = null;
        /**邮箱注册关闭 */
        _this.ui_btn_closeEmailReg = null;
        /**忘记密码按钮 */
        _this.ui_btn_forgetPwd = null;
        /**手机忘记密码 */
        _this.ui_phoneForgetPwd = null;
        /**邮箱忘记密码 */
        _this.ui_emailForgetPwd = null;
        /**关闭 */
        _this.ui_btn_closePhoneForgetPwd = null;
        _this.ui_btn_closeEmailForgetPwd = null;
        /**手机注册界面的邮箱注册 */
        _this.ui_btn_EmailRegInPhone = null;
        _this.ui_btn_PhoneRegInEmail = null;
        /**手机忘记密码界面的邮箱忘记 */
        _this.ui_btn_emailForgetPwdInPhone = null;
        _this.ui_btn_phoneForgetPwdInEmail = null;
        /**语言按钮 */
        _this.ui_btn_language = null;
        _this.ui_setLanguage = null;
        _this.ui_btn_closeLanguage = null;
        _this.ui_btn_serviceLogin = null;
        /**账号输入框 */
        _this.ui_account = null;
        /**邮箱账户 */
        _this.ui_emailAccount = null;
        /**密码输入框 */
        _this.ui_password = null;
        /**登陆按钮 */
        _this.ui_btn_login = null;
        _this.ui_phoneAreacode = null;
        /**记住密码按钮 */
        _this.ui_btn_remerpwd = null;
        /**手机注册 */
        _this.ui_phoneRegAccount = null;
        _this.ui_phoneRegCode = null;
        _this.ui_phoneRegPwd = null;
        _this.ui_phoneRegComPwd = null;
        _this.ui_btn_sendCode = null;
        _this.ui_btn_phoneRegConfirm = null;
        _this.ui_regPhoneAreacode = null;
        /**邮箱注册 */
        _this.ui_emailRegAccount = null;
        _this.ui_emailRegCode = null;
        _this.ui_emailRegPwd = null;
        _this.ui_emailRegComPwd = null;
        _this.ui_btn_sendCodeEmail = null;
        _this.ui_btn_emailRegConfirm = null;
        /**手机找回密码 */
        _this.ui_phoneForgetNum = null;
        _this.ui_phoneForgetCode = null;
        _this.ui_phoneForgetNewPwd = null;
        _this.ui_phoneForgetNewPwdCom = null;
        _this.ui_btn_phoneForgetCode = null;
        _this.ui_btn_phoneForgetConfirm = null;
        _this.ui_ForgetPhoneAreacode = null;
        /**邮箱找回密码 */
        _this.ui_emailForgetNum = null;
        _this.ui_emailForgetCode = null;
        _this.ui_emailForgetNewPwd = null;
        _this.ui_emailForgetNewPwdCom = null;
        _this.ui_btn_emailForgetCode = null;
        _this.ui_btn_emailForgetConfirm = null;
        _this.ui_confirmsetLanguage = null;
        /**确定选择语言 */
        _this.ui_btn_confirmLanguage = null;
        /**取消选择语言 */
        _this.ui_btn_cancelLanguage = null;
        /**版本号 */
        _this.ui_ver = null;
        /**創建角色 */
        _this.ui_role = null;
        _this.ui_btn_closehead = null;
        _this.ui_nickname = null;
        _this.ui_btn_sendinfo = null;
        _this.ui_head = null;
        _this.ui_headList = null;
        _this.headLoader = null;
        _this.ui_listGroup = null;
        _this.ui_changeserver = null;
        _this.ui_btn_change = null;
        _this.ui_serverid = null;
        _this.ui_loadingNodeGroup = null;
        _this.ui_loadingLabel = null;
        _this.ui_loading = null;
        _this.ui_loadingPic = null;
        _this.ui_logoIcon = null;
        _this.touchTime = 0;
        _this.headName = "user_1.png";
        _this.ui_nicknamecf = null;
        /**語言 */
        _this.ui_btn_ftzw = null;
        _this.ui_btn_jtzw = null;
        _this.ui_btn_yinyu = null;
        _this.ui_btn_ry = null;
        _this.ui_yuyanque = null;
        _this.ui_btn_breakw = null;
        _this.ui_logoParent = null;
        _this.isCanTouch = true;
        _this.deleteHeadIcons = [21, 22, 23, 24, 25, 26, 27, 28];
        return _this;
    }
    Object.defineProperty(LoginView.prototype, "needProcess", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginView.prototype, "packageName", {
        get: function () {
            return "res/Login/login";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginView.prototype, "componentName", {
        get: function () {
            return "LoginPanel";
        },
        enumerable: false,
        configurable: true
    });
    LoginView.prototype.onLoad = function () {
        var _this = this;
        this.animationNode.active = false;
        NativeMethod_1.default.changeOrientationH(false);
        var languageType = cc.sys.localStorage.getItem("languageType");
        var filename;
        console.log("languageType == ", languageType);
        if (languageType) {
            AppConst_1.AppConst["languageType"] = +languageType;
            switch (+languageType) {
                case 1:
                    filename = "loginZWFT";
                    break;
                case 2:
                    filename = "loginZWJT";
                    break;
                case 3:
                    break;
                case 4:
                    break;
            }
        }
        else {
            AppConst_1.AppConst["languageType"] = 2;
            languageType = 2;
            filename = "loginZWJT";
        }
        fgui.UIConfig.defaultFont = "Microsoft YaHei";
        console.log("filename == ", filename);
        // if (AppConst["languageType"] == 1) {
        //     fgui.addLoadHandler();
        //     fgui.GRoot.create();
        //     super.onLoad();
        //     return;
        // }
        var bundle = cc.assetManager.getBundle("gameHall");
        bundle.load("/res/language/" + filename, function (err, data) {
            if (err) {
                cc.log("语言文件加载失败");
                fgui.addLoadHandler();
                fgui.GRoot.create();
                _super.prototype.onLoad.call(_this);
                return;
            }
            fgui.UIPackage.setStringsSource(data.text);
            fgui.addLoadHandler();
            fgui.GRoot.create();
            _super.prototype.onLoad.call(_this);
        });
    };
    LoginView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        console.log("---createChildComponents---");
        this.getServerListItemByID(); //根据id获取连接的服务器
    };
    LoginView.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
        console.log("---allChildCreated---");
    };
    LoginView.prototype.OnLoadCompleted = function () {
        // 动画
        // this.ui_view_node.visible = false;
        // this.ui_logo_Animation.setPlaySettings(0, -1, 1, -1, () => {
        //     console.log("---play end---");
        //     this.ui_logo_Animation.visible = false;
        //     this.isNeedAutoLogin();
        // });
        // setTimeout(() => {
        //     this.ui_view_node.visible = true;
        //     let action = this.fguiComponent.getTransition("loginAnimation");
        //     action.play();
        // }, 800);
        var _this = this;
        // cc.game.setFrameRate(30);
        this.isCanTouch = true;
        this.ui_view_node.visible = false;
        this.ui_logoIcon.visible = false;
        fgui.GRoot.inst.addChild(this.fguiComponent);
        // this.fguiComponent.makeFullScreen();
        PublicMethods_1.PublicMethods.screenFit(this.fguiComponent);
        // this.fguiComponent.node.opacity = 0;
        LoginViewCtr_1.LoginViewCtr.instance.view = this;
        this.ui_loadingNodeGroup.asCom.visible = false;
        this.ui_loadingLabel.visible = false;
        this.ui_btn_register.onClick(this.showRegisterPanel.bind(this));
        this.ui_btn_closePhoneReg.onClick(this.colsePhonePanel, this);
        this.ui_btn_closeEmailReg.onClick(this.colseEmailPanel, this);
        this.ui_btn_EmailRegInPhone.onClick(this.openEmailReg, this);
        this.ui_btn_PhoneRegInEmail.onClick(this.openPhoneReg, this);
        this.ui_btn_sendCodeEmail.onClick(this.sendEmailCode, this);
        this.ui_btn_emailForgetCode.onClick(this.sendEmailCode, this);
        this.ui_btn_forgetPwd.onClick(this.showForgetPanel, this);
        this.ui_btn_closePhoneForgetPwd.onClick(this.colsePhoneForgetPwd, this);
        this.ui_btn_closeEmailForgetPwd.onClick(this.colseEmailForgetPwd, this);
        this.ui_btn_emailForgetPwdInPhone.onClick(this.openEmailForget, this);
        this.ui_btn_phoneForgetPwdInEmail.onClick(this.openPhoneForget, this);
        this.ui_btn_language.onClick(this.showChooseLanguage, this);
        this.ui_btn_closeLanguage.onClick(this.closeLanguage, this);
        this.ui_btn_login.onClick(this.sendLogin.bind(this));
        this.ui_btn_serviceLogin.onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
            UIUtil_1.UIUtil.kefuFunction(_this.openWebsite.bind(_this));
        }, this);
        /**手机注册 */
        this.ui_btn_phoneRegConfirm.onClick(this.phoneRegisterConfirm, this);
        this.ui_btn_sendCode.onClick(this.GetVerifyCode, this);
        /**邮箱注册 */
        this.ui_btn_emailRegConfirm.onClick(this.emailRegisterConfirm, this);
        /**手机找回 密码*/
        this.ui_btn_phoneForgetConfirm.onClick(this.phoneFindPwd, this);
        this.ui_btn_phoneForgetCode.onClick(this.GetVerifyCode, this);
        /**邮箱找回密码 */
        this.ui_btn_emailForgetConfirm.onClick(this.emailFindPwd, this);
        this.languageController = this.ui_setLanguage.getController("type");
        this.languageController.onChanged(this.languageChanged, this);
        this.ui_btn_confirmLanguage.onClick(this.changedLanguage, this);
        this.ui_btn_cancelLanguage.onClick(this.canceLanguage, this);
        this.loginTypeController = this.fguiComponent.getController("type");
        this.loginTypeController.onChanged(this.controChanged, this);
        this.loginTypeController.selectedIndex = 0;
        this.ui_ver.setVar("ver", BaseFrameNative_1.BaseFrameNative.VERSION).flushVars();
        this.ui_btn_closehead.onClick(this.closeHead, this);
        this.ui_head.onClick(this.showHead, this);
        this.ui_headList.setVirtual();
        this.ui_headList.itemRenderer = this.renderListItem.bind(this);
        this.ui_headList.on(fgui.Event.CLICK_ITEM, this.onclickItem, this);
        this.headLoader = this.ui_head.getChild("headLoader").asLoader;
        this.ui_btn_sendinfo.onClick(this.sendRoleInfo, this);
        this.loadSounds();
        var state = this.addFguiComponent(StatusbarView_1.default, false);
        state.fguiY = 10;
        this.tipview = this.addFguiComponent(CommonView_1.default);
        this.fguiComponent.node.runAction(cc.fadeIn(0.5));
        this.readLocal();
        this.ui_serverid.visible = BaseFrameNative_1.BaseFrameNative.serverlistItem.status == 0;
        this.ui_serverid.text = BaseFrameNative_1.BaseFrameNative.serverlistID + "";
        this.ui_changeserver.visible = false;
        this.ui_btn_change.on(fgui.Event.TOUCH_BEGIN, function () {
            _this.touchTime = new Date().getTime();
            _this.schedule(_this.showSecretWindow, 1);
        });
        this.ui_btn_change.on(fgui.Event.TOUCH_END, function () {
            _this.unschedule(_this.showSecretWindow);
        });
        this.ui_changeserver.getChild("cancel").onClick(function () {
            AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
            _this.ui_changeserver.visible = false;
        });
        this.ui_btn_breakw.node.zIndex = cc.macro.MAX_ZINDEX;
        this.ui_btn_breakw.onClick(function () {
            _this.closeWebView();
        }, this);
        this.initChangeServer();
        this.intiWebView();
        window.closeWebView = this.closeWebView.bind(this);
        this.getPhoneAreaCode();
        // 首次打开App才需要播放动画
        if (BaseFrameNative_1.BaseFrameNative.isOpenApp) {
            BaseFrameNative_1.BaseFrameNative.isOpenApp = false;
            var animation = cc.instantiate(this.animationNode);
            animation.parent = this.ui_logoParent.node;
            animation.active = true;
            animation.position = cc.v3(0, 0, 0);
            animation.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            animation.getComponent(sp.Skeleton).setCompleteListener(function (trackEntry, loopCount) {
                var name = trackEntry.animation ? trackEntry.animation.name : '';
                if (name === "animation") {
                    _this.scheduleOnce(function () {
                        _this.ui_view_node.visible = true;
                        _this.isNeedAutoLogin();
                    }, 0.7);
                }
            });
        }
        else {
            this.ui_logoIcon.visible = true;
            this.ui_view_node.visible = true;
            this.isNeedAutoLogin();
        }
    };
    // 是否需要自动登录
    LoginView.prototype.isNeedAutoLogin = function () {
        // 未勾选保存密码不需要自动登录
        var state = cc.sys.localStorage.getItem("rememberPWD");
        if (state != "1")
            return;
        var account = cc.sys.localStorage.getItem("login_pid");
        var pwd = cc.sys.localStorage.getItem("login_pwd");
        if (account && account != "" && pwd && pwd != "" && GameCommon_1.GameCommon.isAutoLogin) {
            GameCommon_1.GameCommon.isAutoLogin = false;
            this.sendLogin(false);
        }
    };
    // 获取手机区号
    LoginView.prototype.getPhoneAreaCode = function () {
        var self = this;
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetAllSmsCode";
        HttpHelpEx_1.default.instance.get(url)
            .then(function (res) {
            console.log("---GetAllSmsCode---", res);
            if (res.code == 1) {
                GameCommon_1.GameCommon.allSmsCode = res.data;
                self.initAreaCodeList(res.data);
            }
            else {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("获取手机区号信息失败");
            }
        });
    };
    // 初始化区号列表
    LoginView.prototype.initAreaCodeList = function (data) {
        var areacodeList = [];
        for (var index = 0; index < data.length; index++) {
            var element = data[index];
            areacodeList[index] = "+" + element.prefix;
        }
        // 登录界面
        this.ui_phoneAreacode.items = areacodeList;
        this.ui_phoneAreacode.text = "+86";
        // 注册界面
        this.ui_regPhoneAreacode.items = areacodeList;
        this.ui_regPhoneAreacode.text = "+86";
        // 忘记密码界面
        this.ui_ForgetPhoneAreacode.items = areacodeList;
        this.ui_ForgetPhoneAreacode.text = "+86";
    };
    LoginView.prototype.intiWebView = function () {
        var node = this.getChild("webview").asLoader.node;
        this.webView = node.addComponent(cc.WebView);
        var webviewEventHandler = new cc.Component.EventHandler();
        webviewEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        webviewEventHandler.component = "LoginView";
        webviewEventHandler.handler = "webViewEvent";
        //@ts-ignore
        this.webView.webviewEvents.push(webviewEventHandler);
        this.webView.node.active = false;
    };
    LoginView.prototype.webViewEvent = function (sender, event) {
        if (event === cc.WebView.EventType.LOADED) {
            console.log("-webView---loaded---finish!");
        }
        else if (event === cc.WebView.EventType.LOADING) {
            console.log("webView---loading");
        }
        else if (event === cc.WebView.EventType.ERROR) {
            console.log("webView---sender", JSON.stringify(sender));
            console.log("webView---event", event);
            // this.closeWebView();
        }
    };
    LoginView.prototype.closeWebView = function () {
        this.ui_btn_breakw.visible = false;
        this.webView.url = '';
        this.webView.node.active = false;
    };
    /**打開網頁 */
    LoginView.prototype.openWebsite = function (url) {
        this.ui_btn_breakw.visible = true;
        this.webView.node.active = true;
        this.webView.url = url;
    };
    LoginView.prototype.loadSounds = function () {
        var abbf = cc.assetManager.getBundle("gameHall");
        abbf.loadDir("res/Sounds", cc.AudioClip, function (err, clips) {
            for (var i = 0; i < clips.length; i++) {
                AudioManager_1.AudioManager.Singleton.add(clips[i].name, clips[i]);
            }
            AudioManager_1.AudioManager.Singleton.playBGM("bgmusic");
            console.log("音乐和音效初始化");
            // 音乐和音效初始化
            // let soundBool = AudioManager.Singleton.getSoundStatus();
            // let soundStr = soundBool ? "open" : "close";
            // console.log("soundStr == ", soundStr);
            // AudioManager.Singleton.setSoundStatus(soundStr);
            // let effectBool = AudioManager.Singleton.getEffectStatus();
            // let effectStr = effectBool ? "open" : "close";
            // console.log("effectStr == ", effectStr);
            // AudioManager.Singleton.setEffectStatus(effectStr);
            AudioManager_1.AudioManager.Singleton.setSoundStatus(AudioManager_1.AudioManager.TexasMusicStatus ? "open" : "close");
            AudioManager_1.AudioManager.Singleton.setEffectStatus(AudioManager_1.AudioManager.TexasEffectStatus ? "open" : "close");
        });
    };
    //显示命令窗口
    LoginView.prototype.showSecretWindow = function () {
        var endtime = new Date().getTime();
        console.log(endtime - this.touchTime);
        if (endtime - this.touchTime > 10000) {
            this.unschedule(this.showSecretWindow);
            var inputUI = this.ui_changeserver.getChild("secretInput").asTextInput;
            inputUI.text = "";
            this.ui_changeserver.visible = true;
        }
    };
    //初始化切换服务器页面
    LoginView.prototype.initChangeServer = function () {
        var _this = this;
        var inputUI = this.ui_changeserver.getChild("secretInput").asTextInput;
        this.ui_changeserver.getChild("btn_sure").onClick(function () {
            var input = inputUI.text;
            if (input == "") {
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("请输入正确的命令");
            }
            else {
                _this.changeServer(input);
            }
        });
    };
    //切换服务器
    LoginView.prototype.changeServer = function (secret) {
        var key = BaseFrameNative_1.BaseFrameNative.defaultServerList.key;
        if (secret.indexOf(key) != -1) {
            var serverid = secret.substring(secret.indexOf(key) + key.length);
            console.log("serverid === ", serverid);
            var list = BaseFrameNative_1.BaseFrameNative.serverList.serverlist;
            for (var index = 0; index < list.length; index++) {
                var data = list[index];
                if (data.idx == serverid) {
                    this.ui_serverid.text = serverid + "";
                    BaseFrameNative_1.BaseFrameNative.serverlistID = serverid;
                    BaseFrameNative_1.BaseFrameNative.serverlistItem = data;
                    this.ui_serverid.visible = BaseFrameNative_1.BaseFrameNative.serverlistItem.status == 0;
                    this.ui_changeserver.visible = false;
                    CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("切换服务器配置成功");
                    cc.sys.localStorage.setItem("serverid", serverid);
                    return;
                }
            }
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("未找到配置的服务器");
        }
        else {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("输入的秘钥不正确");
        }
    };
    LoginView.prototype.closeHead = function () {
        // 需要断开连接
        WebSocketManager_1.WebSocketManager.getInstance.DisConnect();
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_role.visible = false;
    };
    LoginView.prototype.showRolePanel = function () {
        UIUtil_1.UIUtil.loadImage(this.headLoader, "/fordlc/wechat/user_1.png");
        this.ui_role.visible = true;
        this.ui_headList.numItems = 59;
        this.ui_nicknamecf.visible = false;
    };
    LoginView.prototype.showHead = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_listGroup.visible = !this.ui_listGroup.visible;
    };
    LoginView.prototype.renderListItem = function (index, obj) {
        var item = obj;
        var loader = item.getChild("headLoader").asLoader;
        if (this.isDeleteHeadIcon(index + 1))
            return;
        UIUtil_1.UIUtil.loadImage(loader, "/fordlc/wechat/user_" + (index + 1) + ".png");
        item.name = "user_" + (index + 1) + '.png';
    };
    LoginView.prototype.isDeleteHeadIcon = function (index) {
        for (var index_1 = 0; index_1 < this.deleteHeadIcons.length; index_1++) {
            var deleteNum = this.deleteHeadIcons[index_1];
            if (deleteNum == index_1) {
                return true;
            }
        }
        return false;
    };
    LoginView.prototype.onclickItem = function (item) {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        var loader = item.getChild("headLoader").asLoader;
        this.headLoader.url = loader.url;
        this.headName = item.name;
        this.ui_listGroup.visible = false;
    };
    LoginView.prototype.sendRoleInfo = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        var userName = this.ui_nickname.text;
        if (!userName) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("請輸入昵稱");
            return;
        }
        LoginViewCtr_1.LoginViewCtr.instance.cs_create1005(LoginViewCtr_1.LoginViewCtr.instance.Model.userid + "", "1", userName, this.headName);
    };
    LoginView.prototype.controChanged = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        if (this.loginTypeController.selectedIndex == 0) { //手机
            if (this.ui_account.text == '') {
                this.ui_password.text = '';
            }
            else {
                var pwd = cc.sys.localStorage.getItem("login_pwd");
                this.ui_password.text = pwd;
            }
        }
        else {
            if (this.ui_emailAccount.text == '') {
                this.ui_password.text = '';
            }
            else {
                var pwd = cc.sys.localStorage.getItem("login_pwd");
                this.ui_password.text = pwd;
            }
        }
    };
    /**显示注册界面 */
    LoginView.prototype.showRegisterPanel = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        var index = this.fguiComponent.getController("type").selectedIndex;
        if (index == 0) {
            this.ui_phoneRegister.visible = true;
            // this.ui_btn_sendCode.getController("type").setSelectedIndex(0);
            //  this.ui_btn_sendCode.enabled = true;
        }
        else {
            this.ui_emailRegister.visible = true;
        }
    };
    LoginView.prototype.colsePhonePanel = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneRegister.visible = false;
    };
    LoginView.prototype.colseEmailPanel = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_emailRegister.visible = false;
    };
    LoginView.prototype.openEmailReg = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneRegister.visible = false;
        this.ui_emailRegister.visible = true;
    };
    LoginView.prototype.openPhoneReg = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneRegister.visible = true;
        this.ui_emailRegister.visible = false;
    };
    /**显示忘记密码界面 */
    LoginView.prototype.showForgetPanel = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        var index = this.fguiComponent.getController("type").selectedIndex;
        if (index == 0) {
            this.ui_phoneForgetPwd.visible = true;
        }
        else {
            this.ui_emailForgetPwd.visible = true;
        }
    };
    LoginView.prototype.colsePhoneForgetPwd = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneForgetPwd.visible = false;
    };
    LoginView.prototype.colseEmailForgetPwd = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_emailForgetPwd.visible = false;
    };
    LoginView.prototype.openEmailForget = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneForgetPwd.visible = false;
        this.ui_emailForgetPwd.visible = true;
        this.ui_phoneForgetCode.text = "";
        this.ui_emailForgetCode.text = "";
    };
    LoginView.prototype.openPhoneForget = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneForgetPwd.visible = true;
        this.ui_emailForgetPwd.visible = false;
        this.ui_phoneForgetCode.text = "";
        this.ui_emailForgetCode.text = "";
    };
    /**显示语言*/
    LoginView.prototype.showChooseLanguage = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_setLanguage.visible = true;
    };
    LoginView.prototype.closeLanguage = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_setLanguage.visible = false;
    };
    /**发送登录 */
    LoginView.prototype.sendLogin = function (playSound) {
        var _this = this;
        if (playSound === void 0) { playSound = true; }
        if (playSound) {
            AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        }
        if (!this.isCanTouch) {
            return;
        }
        this.isCanTouch = false;
        var account;
        var password = this.ui_password.text;
        if (this.loginTypeController.selectedIndex == 0) { //手機
            account = this.ui_account.text;
        }
        else { //郵箱
            account = this.ui_emailAccount.text;
            if (!this.isEmail(account)) {
                this.isCanTouch = true;
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("請輸入正確的郵箱賬號");
                return;
            }
        }
        if (account == "" || password == "" || password.length < 6) {
            this.isCanTouch = true;
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("账号或密码格式不正确");
            return;
        }
        LoginViewCtr_1.LoginViewCtr.instance.Model.mPid = account;
        LoginViewCtr_1.LoginViewCtr.instance.Model.mPwd = password;
        var pwd = ToolsEx_1.ToolsEx.Singleton.EncryptionPWD(password);
        LoginViewCtr_1.LoginViewCtr.instance.LogintoFishLevel(account, pwd);
        // 0.5S没登上 显示laoding
        this.ui_loadingNodeGroup.asCom.visible = true;
        // this.ui_loadingLabel.visible = false;
        this.ui_loading.asCom.visible = false;
        this.scheduleOnce(function () {
            _this.showLoginLoading();
        }, 0.5);
    };
    LoginView.prototype.showLoginLoading = function () {
        var _this = this;
        this.ui_loading.asCom.visible = true;
        // // 文字
        // this.ui_loadingLabel.visible = true;
        // let time: number = 0;
        // let tipStr: string = "登录中";
        // this.ui_loadingLabel.text = tipStr;
        // this.schedule(() => {
        //     time += 1;
        //     if (time % 4 == 1) {
        //         tipStr = "登录中";
        //     } else if (time % 4 == 2) {
        //         tipStr = "登录中.";
        //     } else if (time % 4 == 3) {
        //         tipStr = "登录中..";
        //     } else if (time % 4 == 0) {
        //         tipStr = "登录中...";
        //     }
        //     this.ui_loadingLabel.text = tipStr;
        //     if (time >= 4) time = 0;
        // }, 0.5)
        // 图片
        cc.tween(this.ui_loadingPic.node)
            .by(1, { angle: -360 })
            .repeatForever()
            .start();
        if (!this.loginTimer) {
            this.loginTimer = setTimeout(function () {
                console.log("--- time out ---");
                _this.ui_loadingNodeGroup.asCom.visible = false;
                _this.ui_loading.asCom.visible = false;
                CommonCtr_1.CommonCtr.instance.view.ShowTipLabel(LanguageConfig_1.LanguageConfig.getLanguageById(10001));
                _this.isCanTouch = true;
                _this.loginTimer = null;
            }, 10000);
        }
    };
    LoginView.prototype.loginSuccess = function () {
        if (this.loginTimer) {
            console.log("clearTimeout this.loginTimer");
            clearTimeout(this.loginTimer);
            this.loginTimer = null;
        }
        this.isCanTouch = true;
        this.ui_loadingNodeGroup.asCom.visible = false;
    };
    /**发送手机注册 */
    LoginView.prototype.phoneRegisterConfirm = function () {
        var _this = this;
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        var phone = this.ui_phoneRegAccount.text;
        if (!phone ||
            !this.ui_phoneRegPwd.text || !this.ui_phoneRegComPwd.text || !this.ui_phoneRegCode.text) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请填写完整的信息");
            return;
        }
        if (this.ui_phoneRegPwd.text != this.ui_phoneRegComPwd.text) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("两次输入的密码不一致");
            return;
        }
        if (!this.isPhone(phone)) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请输入正确的手机号");
            return;
        }
        // let url = `${BaseFrameNative.serverlistItem.apiAdress}/api/Game/RegisterGameUser?account=${phone}&password=${this.ui_phoneRegPwd.text}&VeCode=${this.ui_phoneRegCode.text}`;
        // HttpHelpEx.instance.get(url).then((res) => {
        //     console.log("/api/Game/RegisterGameUser = ", res);
        //     if (res.code == 1) {
        //         CommonCtr.instance.ShowTipLabel("注册成功");
        //     } else {
        //         CommonCtr.instance.ShowTipLabel(res.message);
        //     }
        // }).catch(() => {
        //     CommonCtr.instance.ShowTipLabel("注册失败");
        // })
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/RegUser";
        var params = {
            mobile: phone,
            smscode: this.ui_phoneRegCode.text,
            password: this.ui_phoneRegPwd.text
        };
        console.log("/api/Game/RegUser 11== ", url);
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log("/api/Game/RegUser 22=== ", res.code);
            if (res.code == 1) {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("注册成功");
                _this.ui_phoneRegister.visible = false;
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel(res.message);
            }
        }).catch(function (err) {
            console.log("hhhhhhhhhhh---", err);
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("11注册失败");
        });
    };
    /**发送邮箱注册 */
    LoginView.prototype.emailRegisterConfirm = function () {
        var _this = this;
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        if (!this.ui_emailRegAccount.text || !this.ui_emailRegCode.text ||
            !this.ui_emailRegPwd.text || !this.ui_emailRegComPwd.text) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("請填寫完整的信息");
            return;
        }
        if (this.ui_emailRegPwd.text != this.ui_emailRegComPwd.text) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("兩次輸入的密碼不一致");
            return;
        }
        var bool = this.isEmail(this.ui_emailRegAccount.text);
        if (!bool) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("請輸入正確的郵箱地址");
            return;
        }
        // let url = `${BaseFrameNative.serverlistItem.apiAdress}/api/Game/RegGameUser?account=${this.ui_emailRegAccount.text}&password=${this.ui_emailRegPwd.text}`;
        // HttpHelpEx.instance.get(url).then(() => {
        //     CommonCtr.instance.ShowTipLabel("注册成功")
        // }).catch(() => {
        //     CommonCtr.instance.ShowTipLabel("注册失败")
        // });
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/RegUser";
        var params = {
            mobile: this.ui_emailRegAccount.text,
            smscode: this.ui_emailRegCode.text,
            password: this.ui_emailRegPwd.text
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log("/api/Game/RegUser == ", res);
            if (res.code == 1) {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("注册成功");
                _this.ui_phoneRegister.visible = false;
                _this.ui_emailRegister.visible = false;
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel(res.message);
            }
        }).catch(function (err) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("22注册失败");
        });
    };
    /**手机找回密码 */
    LoginView.prototype.phoneFindPwd = function () {
        var _this = this;
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        var phone = this.ui_phoneForgetNum.text;
        var newpwd = this.ui_phoneForgetNewPwd.text;
        var newpwd2 = this.ui_phoneForgetNewPwdCom.text;
        var code = this.ui_phoneForgetCode.text;
        if (!phone || !newpwd || !newpwd2 || !code) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请填写完整的信息");
            return;
        }
        if (newpwd != newpwd2) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("两次输入的密码不一致");
            return;
        }
        if (!this.isPhone(phone)) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请输入正确的手机号");
            return;
        }
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/ChangePassWord";
        var params = {
            phone: phone,
            verifyCode: code,
            password: newpwd
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function () {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("密码修改成功");
            _this.ui_phoneForgetPwd.visible = false;
            _this.ui_emailForgetPwd.visible = false;
        }).catch(function () {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("密码修改失败");
        });
    };
    /**邮箱找回密码 */
    LoginView.prototype.emailFindPwd = function () {
        var _this = this;
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        var email = this.ui_emailForgetNum.text;
        var newpwd = this.ui_emailForgetNewPwd.text;
        var newpwd2 = this.ui_emailForgetNewPwdCom.text;
        var code = this.ui_emailForgetCode.text;
        if (!email || !newpwd || !newpwd2 || !code) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请填写完整的信息");
            return;
        }
        if (newpwd != newpwd2) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("两次输入的密码不一致");
            return;
        }
        if (!this.isEmail(email)) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("请输入正确的邮箱地址");
            return;
        }
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/ChangePassWord";
        var params = {
            phone: email,
            verifyCode: code,
            password: newpwd
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function () {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("密码修改成功");
            _this.ui_phoneForgetPwd.visible = false;
            _this.ui_emailForgetPwd.visible = false;
        }).catch(function () {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("密码修改失败");
        });
    };
    /**点击语言 */
    LoginView.prototype.languageChanged = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        var index = this.languageController.selectedIndex;
        switch (index) {
            case 0:
                break;
            case 1:
                this.ui_yuyanque.setVar("2", this.ui_btn_ftzw.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
            case 2:
                this.ui_yuyanque.setVar("2", this.ui_btn_jtzw.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
            case 3:
                this.ui_yuyanque.setVar("2", this.ui_btn_yinyu.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
            case 4:
                this.ui_yuyanque.setVar("2", this.ui_btn_ry.title).flushVars();
                this.ui_confirmsetLanguage.visible = true;
                break;
        }
    };
    /**确定选择语言 */
    LoginView.prototype.changedLanguage = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_confirmsetLanguage.visible = false;
        var index = this.languageController.selectedIndex;
        if (AppConst_1.AppConst.languageType == index) { //切換相同的語言
            return;
        }
        if (index == 3 || index == 4) {
            CommonCtr_1.CommonCtr.instance.view.ShowTipLabel("暫無相關語言");
            return;
        }
        AppConst_1.AppConst.languageType = index;
        cc.sys.localStorage.setItem("languageType", AppConst_1.AppConst.languageType + '');
        fgui.UIPackage.removePackage(this.packageName);
        GameCommon_1.GameCommon.loadScene("gameHall", "login");
    };
    /**取消选择语言 */
    LoginView.prototype.canceLanguage = function () {
        AudioManager_1.AudioManager.Singleton.play('LoginView', "button");
        this.ui_confirmsetLanguage.visible = false;
        this.languageController.selectedIndex = 0;
    };
    /**登录成功 */
    LoginView.prototype.cleanEvent = function () {
        this.savePassword();
        this.unscheduleAllCallbacks();
        AudioManager_1.AudioManager.Singleton.stopBGM();
        console.log("--- login success to lobby ---");
        SceneManager_1.SceneManager.Singleton.loadScene("gameHall", "lobby");
    };
    LoginView.prototype.onDestroy = function () {
        if (this.loginTimer) {
            console.log("clearTimeout this.loginTimer");
            clearTimeout(this.loginTimer);
            this.loginTimer = null;
        }
        fgui.UIPackage.removePackage("res/Login/login");
        this.node.destroyAllChildren();
        _super.prototype.onDestroy.call(this);
    };
    /**记住密码 时存密码 */
    LoginView.prototype.savePassword = function () {
        if (this.ui_btn_remerpwd.selected) {
            if (this.loginTypeController.selectedIndex == 0) { //手機
                cc.sys.localStorage.setItem("loginType", '0');
            }
            else { //郵箱
                cc.sys.localStorage.setItem("loginType", '1');
            }
            cc.sys.localStorage.setItem("rememberPWD", "1");
        }
        else {
            cc.sys.localStorage.setItem("rememberPWD", "0");
        }
    };
    /**获取记住密码的信息 */
    LoginView.prototype.readLocal = function () {
        var state = cc.sys.localStorage.getItem("rememberPWD");
        if (state == "1") { //记住了密码的
            this.ui_btn_remerpwd.selected = true;
            var type = cc.sys.localStorage.getItem("loginType"); //登录的方式
            var account = cc.sys.localStorage.getItem("login_pid");
            var pwd = cc.sys.localStorage.getItem("login_pwd");
            if (type == '0') { //手机登录
                this.loginTypeController.setSelectedIndex(0);
                this.ui_account.text = account;
            }
            else {
                this.loginTypeController.setSelectedIndex(1);
                this.ui_emailAccount.text = account;
            }
            this.ui_password.text = pwd;
        }
    };
    /**手机验证 */
    LoginView.prototype.isPhone = function (phone) {
        if (phone == "") {
            return false;
        }
        // 手机号码第一位是[1]开头，第二位[3,4,5,7,8]中的一位，第三位到第十一位则是[0-9]中的数字；
        //^1表示开头为1
        //[3|4|5|7|8] 表示3、4、5、7、8中的一位数值
        //[0-9]{9} 匹配包含0-9的数字
        var reg = /^1[3|4|5|7|8|9][0-9]{9}/;
        if (reg.test(phone)) {
            return true; //手机号码正确
        }
        return false;
    };
    /**判斷是否是郵箱 */
    LoginView.prototype.isEmail = function (email) {
        if (email == "") {
            return false;
        }
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (reg.test(email)) {
            return true; //郵箱号码正确
        }
        return false;
    };
    /**发送验证码 */
    LoginView.prototype.GetVerifyCode = function (event) {
        var _this = this;
        console.log("------------", event.target.$gobj);
        var but = event.target.$gobj;
        var controller = but.getController("type");
        but.enabled = false;
        var phone = '';
        var state;
        if (this.ui_phoneRegister.visible) { //手機注冊
            phone = this.ui_phoneRegAccount.text;
            state = '0';
        }
        else if (this.ui_phoneForgetPwd.visible) { //手機忘記密碼
            phone = this.ui_phoneForgetNum.text;
            state = '1';
        }
        var isphone = this.isPhone(phone);
        if (!isphone) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("手機號碼不正確,請重新輸入!");
            but.enabled = true;
            return;
        }
        var areaCode = this.ui_regPhoneAreacode.text;
        console.log("areaCode == ", areaCode);
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/SendSMS";
        var params = {
            mobile: phone,
            smstype: state,
            region: areaCode,
            UserId: ""
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log(res);
            if (res.code == 1) {
                controller.setSelectedIndex(1);
                var textCode_1 = but.getChild("code").asTextField;
                var code_1 = 60;
                textCode_1.text = 60 + '';
                _this.schedule(function () {
                    code_1--;
                    textCode_1.text = code_1 + '';
                    if (code_1 == 0) {
                        controller.setSelectedIndex(0);
                        but.enabled = true;
                    }
                }, 1, 59);
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
                but.enabled = true;
            }
        }).catch(function () {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
            but.enabled = true;
        });
    };
    /**发送验证码 */
    LoginView.prototype.sendEmailCode = function (event) {
        var _this = this;
        console.log("------------", event.target.$gobj);
        var but = event.target.$gobj;
        var controller = but.getController("type");
        but.enabled = false;
        var email = '';
        var state;
        if (this.ui_emailRegister.visible) {
            email = this.ui_emailRegAccount.text;
            state = '0';
        }
        else if (this.ui_emailForgetPwd.visible) {
            email = this.ui_emailForgetNum.text;
            state = '1';
        }
        // let isphone = this.isPhone(phone);
        // if (!isphone) {
        //     CommonCtr.instance.ShowTipLabel("手機號碼不正確,請重新輸入!");
        //     but.enabled = true;
        //     return;
        // }
        var bool = this.isEmail(email);
        if (!bool) {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("請輸入正確的郵箱地址");
            but.enabled = true;
            return;
        }
        var url = BaseFrameNative_1.BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Sendmail";
        console.log("S=======" + url + "=======");
        var params = {
            email: email,
            smstype: state,
            UserId: ""
        };
        HttpHelpEx_1.default.instance.post(url, params).then(function (res) {
            console.log(res);
            if (res.code == 1) {
                controller.setSelectedIndex(1);
                var textCode_2 = but.getChild("code").asTextField;
                var code_2 = 60;
                textCode_2.text = 60 + '';
                _this.schedule(function () {
                    code_2--;
                    textCode_2.text = code_2 + '';
                    if (code_2 == 0) {
                        controller.setSelectedIndex(0);
                        but.enabled = true;
                    }
                }, 1, 59);
            }
            else {
                CommonCtr_1.CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
                but.enabled = true;
            }
        }).catch(function () {
            CommonCtr_1.CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
            but.enabled = true;
        });
    };
    // 获取serverlistItem
    LoginView.prototype.getServerListItemByID = function () {
        var serverId = cc.sys.localStorage.getItem("serverid");
        if (serverId === undefined || serverId === null) {
            // 不管
        }
        else {
            BaseFrameNative_1.BaseFrameNative.serverlistID = serverId;
        }
        console.log("BaseFrameNative.serverlistID == ", BaseFrameNative_1.BaseFrameNative.serverlistID);
        var list = BaseFrameNative_1.BaseFrameNative.serverList.serverlist;
        for (var index = 0; index < list.length; index++) {
            var data = list[index];
            if (data.idx == BaseFrameNative_1.BaseFrameNative.serverlistID) {
                BaseFrameNative_1.BaseFrameNative.serverlistItem = data;
                break;
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], LoginView.prototype, "animationNode", void 0);
    LoginView = __decorate([
        ccclass
    ], LoginView);
    return LoginView;
}(ViewBase_1.default));
exports.default = LoginView;

cc._RF.pop();
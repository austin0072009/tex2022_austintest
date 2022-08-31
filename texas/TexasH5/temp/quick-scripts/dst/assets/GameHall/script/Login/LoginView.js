
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Login/LoginView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9naW5cXExvZ2luVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQyx1RUFBc0U7QUFDdkUsaUVBQWdFO0FBQ2hFLG1FQUE4RDtBQUM5RCx5RUFBd0U7QUFDeEUsdUVBQXNFO0FBQ3RFLHlFQUFvRTtBQUNwRSwrREFBMEQ7QUFDMUQsK0VBQThFO0FBQzlFLHlFQUFvRTtBQUNwRSwwREFBeUQ7QUFDekQsd0RBQXVEO0FBQ3ZELHdGQUF1RjtBQUN2RixtRUFBa0U7QUFDbEUsNENBQTJDO0FBQzNDLGdEQUEyQztBQUMzQywrQ0FBOEM7QUFDOUMsMERBQXlEO0FBSW5ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXVDLDZCQUFRO0lBQS9DO1FBQUEscUVBdXFDQztRQXhwQ0csbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFdEIsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBdUQxQyx1RUFBdUU7UUFDL0Qsa0JBQVksR0FBZ0IsSUFBSSxDQUFDO1FBQ2pDLHVCQUFpQixHQUFvQixJQUFJLENBQUM7UUFDbEQsVUFBVTtRQUNGLHFCQUFlLEdBQWlCLElBQUksQ0FBQztRQUU3QyxVQUFVO1FBQ0Ysc0JBQWdCLEdBQW9CLElBQUksQ0FBQztRQUNqRCxVQUFVO1FBQ0Ysc0JBQWdCLEdBQW9CLElBQUksQ0FBQztRQUNqRCxZQUFZO1FBQ0osMEJBQW9CLEdBQWlCLElBQUksQ0FBQztRQUNsRCxZQUFZO1FBQ0osMEJBQW9CLEdBQWlCLElBQUksQ0FBQztRQUVsRCxZQUFZO1FBQ0osc0JBQWdCLEdBQWlCLElBQUksQ0FBQztRQUU5QyxZQUFZO1FBQ0osdUJBQWlCLEdBQW9CLElBQUksQ0FBQztRQUNsRCxZQUFZO1FBQ0osdUJBQWlCLEdBQW9CLElBQUksQ0FBQztRQUNs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LENBQUM7b0RBQ1k7SUFmYixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBdXFDN0I7SUFBRCxnQkFBQztDQXZxQ0QsQUF1cUNDLENBdnFDc0Msa0JBQVEsR0F1cUM5QztrQkF2cUNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvQXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBDb21tb25DdHIgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9Db21tb25DdHJcIjtcbmltcG9ydCBDb21tb25WaWV3IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL0NvbW1vblZpZXdcIjtcbmltcG9ydCB7IFB1YmxpY01ldGhvZHMgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9QdWJsaWNNZXRob2RzXCI7XG5pbXBvcnQgeyBTY2VuZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9TY2VuZU1hbmFnZXJcIjtcbmltcG9ydCBTdGF0dXNiYXJWaWV3IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1N0YXR1c2JhclZpZXdcIjtcbmltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xuaW1wb3J0IHsgV2ViU29ja2V0TWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1dlYlNvY2tldE1hbmFnZXJcIjtcbmltcG9ydCBIdHRwSGVscEV4IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvQ29tbW9uL01hbmFnZXJzL0h0dHBIZWxwRXhcIjtcbmltcG9ydCB7IFRvb2xzRXggfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9Ub29sc0V4XCI7XG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uL1NjcmlwdC9tb2R1bGVzL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XG5pbXBvcnQgeyBCYXNlRnJhbWVOYXRpdmUgfSBmcm9tIFwiLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZU5hdGl2ZVwiO1xuaW1wb3J0IHsgR2FtZUNvbW1vbiB9IGZyb20gXCIuLi9HYW1lQ29tbW9uXCI7XG5pbXBvcnQgTmF0aXZlTWV0aG9kIGZyb20gXCIuLi9OYXRpdmVNZXRob2RcIjtcbmltcG9ydCB7IExvZ2luVmlld0N0ciB9IGZyb20gXCIuL0xvZ2luVmlld0N0clwiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VDb25maWcgfSBmcm9tIFwiLi4vTG9iYnkvTGFuZ3VhZ2VDb25maWdcIjtcbmltcG9ydCB7IE1nck5hdGl2ZSB9IGZyb20gXCIuLi8uLi8uLi9TY3JpcHQvTWdyTmF0aXZlXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblZpZXcgZXh0ZW5kcyBWaWV3QmFzZSB7XG4gICAgcHJvdGVjdGVkIGdldCBuZWVkUHJvY2VzcygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcInJlcy9Mb2dpbi9sb2dpblwiO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwiTG9naW5QYW5lbFwiO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFuaW1hdGlvbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBsb2dpblRpbWVyOiBOb2RlSlMuVGltZW91dCA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgTmF0aXZlTWV0aG9kLmNoYW5nZU9yaWVudGF0aW9uSChmYWxzZSk7XG5cbiAgICAgICAgbGV0IGxhbmd1YWdlVHlwZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmd1YWdlVHlwZVwiKTtcbiAgICAgICAgbGV0IGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibGFuZ3VhZ2VUeXBlID09IFwiLCBsYW5ndWFnZVR5cGUpO1xuICAgICAgICBpZiAobGFuZ3VhZ2VUeXBlKSB7XG4gICAgICAgICAgICBBcHBDb25zdFtcImxhbmd1YWdlVHlwZVwiXSA9ICtsYW5ndWFnZVR5cGU7XG4gICAgICAgICAgICBzd2l0Y2ggKCtsYW5ndWFnZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lID0gXCJsb2dpblpXRlRcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZSA9IFwibG9naW5aV0pUXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQXBwQ29uc3RbXCJsYW5ndWFnZVR5cGVcIl0gPSAyO1xuICAgICAgICAgICAgbGFuZ3VhZ2VUeXBlID0gMjtcbiAgICAgICAgICAgIGZpbGVuYW1lID0gXCJsb2dpblpXSlRcIjtcbiAgICAgICAgfVxuICAgICAgICBmZ3VpLlVJQ29uZmlnLmRlZmF1bHRGb250ID0gXCJNaWNyb3NvZnQgWWFIZWlcIjtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbGVuYW1lID09IFwiLCBmaWxlbmFtZSk7XG4gICAgICAgIC8vIGlmIChBcHBDb25zdFtcImxhbmd1YWdlVHlwZVwiXSA9PSAxKSB7XG4gICAgICAgIC8vICAgICBmZ3VpLmFkZExvYWRIYW5kbGVyKCk7XG4gICAgICAgIC8vICAgICBmZ3VpLkdSb290LmNyZWF0ZSgpO1xuICAgICAgICAvLyAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJnYW1lSGFsbFwiKTtcbiAgICAgICAgYnVuZGxlLmxvYWQoYC9yZXMvbGFuZ3VhZ2UvJHtmaWxlbmFtZX1gLCAoZXJyLCBkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLor63oqIDmlofku7bliqDovb3lpLHotKVcIik7XG4gICAgICAgICAgICAgICAgZmd1aS5hZGRMb2FkSGFuZGxlcigpO1xuICAgICAgICAgICAgICAgIGZndWkuR1Jvb3QuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgc3VwZXIub25Mb2FkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmd1aS5VSVBhY2thZ2Uuc2V0U3RyaW5nc1NvdXJjZShkYXRhLnRleHQpO1xuICAgICAgICAgICAgZmd1aS5hZGRMb2FkSGFuZGxlcigpO1xuICAgICAgICAgICAgZmd1aS5HUm9vdC5jcmVhdGUoKTtcbiAgICAgICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgdGlwdmlldzogQ29tbW9uVmlldztcbiAgICAvKiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIHByaXZhdGUgdWlfdmlld19ub2RlOiBmZ3VpLkdHcm91cCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9sb2dvX0FuaW1hdGlvbjogZmd1aS5HTW92aWVDbGlwID0gbnVsbDtcbiAgICAvKirms6jlhozmjInpkq4gKi9cbiAgICBwcml2YXRlIHVpX2J0bl9yZWdpc3RlcjogZmd1aS5HQnV0dG9uID0gbnVsbDtcblxuICAgIC8qKuaJi+acuuazqOWGjCAqL1xuICAgIHByaXZhdGUgdWlfcGhvbmVSZWdpc3RlcjogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICAvKirpgq7nrrHms6jlhowgKi9cbiAgICBwcml2YXRlIHVpX2VtYWlsUmVnaXN0ZXI6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgLyoq5omL5py65rOo5YaM5YWz6ZetICovXG4gICAgcHJpdmF0ZSB1aV9idG5fY2xvc2VQaG9uZVJlZzogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICAvKirpgq7nrrHms6jlhozlhbPpl60gKi9cbiAgICBwcml2YXRlIHVpX2J0bl9jbG9zZUVtYWlsUmVnOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG4gICAgLyoq5b+Y6K6w5a+G56CB5oyJ6ZKuICovXG4gICAgcHJpdmF0ZSB1aV9idG5fZm9yZ2V0UHdkOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG4gICAgLyoq5omL5py65b+Y6K6w5a+G56CBICovXG4gICAgcHJpdmF0ZSB1aV9waG9uZUZvcmdldFB3ZDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICAvKirpgq7nrrHlv5jorrDlr4bnoIEgKi9cbiAgICBwcml2YXRlIHVpX2VtYWlsRm9yZ2V0UHdkOiBmZ3VpLkdDb21wb25lbnQgPSBudWxsO1xuICAgIC8qKuWFs+mXrSAqL1xuICAgIHByaXZhdGUgdWlfYnRuX2Nsb3NlUGhvbmVGb3JnZXRQd2Q6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9idG5fY2xvc2VFbWFpbEZvcmdldFB3ZDogZmd1aS5HQnV0dG9uID0gbnVsbDtcblxuICAgIC8qKuaJi+acuuazqOWGjOeVjOmdoueahOmCrueuseazqOWGjCAqL1xuICAgIHByaXZhdGUgdWlfYnRuX0VtYWlsUmVnSW5QaG9uZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9QaG9uZVJlZ0luRW1haWw6IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICAvKirmiYvmnLrlv5jorrDlr4bnoIHnlYzpnaLnmoTpgq7nrrHlv5jorrAgKi9cbiAgICBwcml2YXRlIHVpX2J0bl9lbWFpbEZvcmdldFB3ZEluUGhvbmU6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9idG5fcGhvbmVGb3JnZXRQd2RJbkVtYWlsOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG4gICAgLyoq6K+t6KiA5oyJ6ZKuICovXG4gICAgcHJpdmF0ZSB1aV9idG5fbGFuZ3VhZ2U6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9zZXRMYW5ndWFnZTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9jbG9zZUxhbmd1YWdlOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIHVpX2J0bl9zZXJ2aWNlTG9naW46IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICAvKirotKblj7fovpPlhaXmoYYgKi9cbiAgICBwcml2YXRlIHVpX2FjY291bnQ6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XG4gICAgLyoq6YKu566x6LSm5oi3ICovXG4gICAgcHJpdmF0ZSB1aV9lbWFpbEFjY291bnQ6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XG4gICAgLyoq5a+G56CB6L6T5YWl5qGGICovXG4gICAgcHJpdmF0ZSB1aV9wYXNzd29yZDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICAvKirnmbvpmYbmjInpkq4gKi9cbiAgICBwcml2YXRlIHVpX2J0bl9sb2dpbjogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX3Bob25lQXJlYWNvZGU6IGZndWkuR0NvbWJvQm94ID0gbnVsbDtcblxuICAgIC8qKuiusOS9j+WvhueggeaMiemSriAqL1xuICAgIHByaXZhdGUgdWlfYnRuX3JlbWVycHdkOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBsb2dpblR5cGVDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XG5cbiAgICAvKirmiYvmnLrms6jlhowgKi9cbiAgICBwcml2YXRlIHVpX3Bob25lUmVnQWNjb3VudDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX3Bob25lUmVnQ29kZTogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX3Bob25lUmVnUHdkOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfcGhvbmVSZWdDb21Qd2Q6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9idG5fc2VuZENvZGU6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9idG5fcGhvbmVSZWdDb25maXJtOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHByaXZhdGUgdWlfcmVnUGhvbmVBcmVhY29kZTogZmd1aS5HQ29tYm9Cb3ggPSBudWxsO1xuXG4gICAgLyoq6YKu566x5rOo5YaMICovXG4gICAgcHJpdmF0ZSB1aV9lbWFpbFJlZ0FjY291bnQ6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9lbWFpbFJlZ0NvZGU6IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9lbWFpbFJlZ1B3ZDogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2VtYWlsUmVnQ29tUHdkOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfYnRuX3NlbmRDb2RlRW1haWw6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9idG5fZW1haWxSZWdDb25maXJtOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuXG4gICAgLyoq5omL5py65om+5Zue5a+G56CBICovXG4gICAgcHJpdmF0ZSB1aV9waG9uZUZvcmdldE51bTogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX3Bob25lRm9yZ2V0Q29kZTogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX3Bob25lRm9yZ2V0TmV3UHdkOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfcGhvbmVGb3JnZXROZXdQd2RDb206IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9idG5fcGhvbmVGb3JnZXRDb2RlOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHByaXZhdGUgdWlfYnRuX3Bob25lRm9yZ2V0Q29uZmlybTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX0ZvcmdldFBob25lQXJlYWNvZGU6IGZndWkuR0NvbWJvQm94ID0gbnVsbDtcblxuXG4gICAgLyoq6YKu566x5om+5Zue5a+G56CBICovXG4gICAgcHJpdmF0ZSB1aV9lbWFpbEZvcmdldE51bTogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2VtYWlsRm9yZ2V0Q29kZTogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2VtYWlsRm9yZ2V0TmV3UHdkOiBmZ3VpLkdUZXh0SW5wdXQgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfZW1haWxGb3JnZXROZXdQd2RDb206IGZndWkuR1RleHRJbnB1dCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9idG5fZW1haWxGb3JnZXRDb2RlOiBmZ3VpLkdCdXR0b24gPSBudWxsO1xuICAgIHByaXZhdGUgdWlfYnRuX2VtYWlsRm9yZ2V0Q29uZmlybTogZmd1aS5HQnV0dG9uID0gbnVsbDtcblxuICAgIHByaXZhdGUgbGFuZ3VhZ2VDb250cm9sbGVyOiBmZ3VpLkNvbnRyb2xsZXI7XG5cbiAgICBwcml2YXRlIHVpX2NvbmZpcm1zZXRMYW5ndWFnZTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICAvKirnoa7lrprpgInmi6nor63oqIAgKi9cbiAgICBwcml2YXRlIHVpX2J0bl9jb25maXJtTGFuZ3VhZ2U6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgLyoq5Y+W5raI6YCJ5oup6K+t6KiAICovXG4gICAgcHJpdmF0ZSB1aV9idG5fY2FuY2VsTGFuZ3VhZ2U6IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICAvKirniYjmnKzlj7cgKi9cbiAgICBwcml2YXRlIHVpX3ZlcjogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIC8qKuWJteW7uuinkuiJsiAqL1xuICAgIHByaXZhdGUgdWlfcm9sZTogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9jbG9zZWhlYWQ6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9uaWNrbmFtZTogZmd1aS5HVGV4dElucHV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9zZW5kaW5mbzogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2hlYWQ6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9oZWFkTGlzdDogZmd1aS5HTGlzdCA9IG51bGw7XG4gICAgcHJpdmF0ZSBoZWFkTG9hZGVyOiBmZ3VpLkdMb2FkZXIgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfbGlzdEdyb3VwOiBmZ3VpLkdHcm91cCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHVpX2NoYW5nZXNlcnZlcjogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9jaGFuZ2U6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9zZXJ2ZXJpZDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHByaXZhdGUgdWlfbG9hZGluZ05vZGVHcm91cDogZmd1aS5HR3JvdXAgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfbG9hZGluZ0xhYmVsOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfbG9hZGluZzogZmd1aS5HR3JvdXAgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfbG9hZGluZ1BpYzogZmd1aS5HSW1hZ2UgPSBudWxsO1xuICAgIHByaXZhdGUgdWlfbG9nb0ljb246IGZndWkuR0ltYWdlID0gbnVsbDtcblxuICAgIHByaXZhdGUgdG91Y2hUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBoZWFkTmFtZTogc3RyaW5nID0gXCJ1c2VyXzEucG5nXCI7XG4gICAgcHVibGljIHVpX25pY2tuYW1lY2Y6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7XG5cblxuICAgIC8qKuiqnuiogCAqL1xuICAgIHByaXZhdGUgdWlfYnRuX2Z0enc6IGZndWkuR0J1dHRvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aV9idG5fanR6dzogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl95aW55dTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9yeTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX3l1eWFucXVlOiBmZ3VpLkdSaWNoVGV4dEZpZWxkID0gbnVsbDtcbiAgICBwcml2YXRlIHVpX2J0bl9icmVha3c6IGZndWkuR0J1dHRvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHVpX2xvZ29QYXJlbnQ6IGZndWkuR0xvYWRlciA9IG51bGw7XG5cbiAgICBwdWJsaWMgaXNDYW5Ub3VjaDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjcmVhdGVDaGlsZENvbXBvbmVudHMoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkQ29tcG9uZW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLWNyZWF0ZUNoaWxkQ29tcG9uZW50cy0tLVwiKTtcbiAgICAgICAgdGhpcy5nZXRTZXJ2ZXJMaXN0SXRlbUJ5SUQoKTsgLy/moLnmja5pZOiOt+WPlui/nuaOpeeahOacjeWKoeWZqFxuICAgIH1cblxuICAgIGFsbENoaWxkQ3JlYXRlZCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIuYWxsQ2hpbGRDcmVhdGVkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tYWxsQ2hpbGRDcmVhdGVkLS0tXCIpO1xuICAgIH1cblxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcbiAgICAgICAgLy8g5Yqo55S7XG4gICAgICAgIC8vIHRoaXMudWlfdmlld19ub2RlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy51aV9sb2dvX0FuaW1hdGlvbi5zZXRQbGF5U2V0dGluZ3MoMCwgLTEsIDEsIC0xLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIi0tLXBsYXkgZW5kLS0tXCIpO1xuICAgICAgICAvLyAgICAgdGhpcy51aV9sb2dvX0FuaW1hdGlvbi52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB0aGlzLmlzTmVlZEF1dG9Mb2dpbigpO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLnVpX3ZpZXdfbm9kZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIGxldCBhY3Rpb24gPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0VHJhbnNpdGlvbihcImxvZ2luQW5pbWF0aW9uXCIpO1xuICAgICAgICAvLyAgICAgYWN0aW9uLnBsYXkoKTtcbiAgICAgICAgLy8gfSwgODAwKTtcblxuICAgICAgICAvLyBjYy5nYW1lLnNldEZyYW1lUmF0ZSgzMCk7XG4gICAgICAgIHRoaXMuaXNDYW5Ub3VjaCA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfdmlld19ub2RlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV9sb2dvSWNvbi52aXNpYmxlID0gZmFsc2U7XG5cbiAgICAgICAgZmd1aS5HUm9vdC5pbnN0LmFkZENoaWxkKHRoaXMuZmd1aUNvbXBvbmVudCk7XG4gICAgICAgIC8vIHRoaXMuZmd1aUNvbXBvbmVudC5tYWtlRnVsbFNjcmVlbigpO1xuICAgICAgICBQdWJsaWNNZXRob2RzLnNjcmVlbkZpdCh0aGlzLmZndWlDb21wb25lbnQpO1xuICAgICAgICAvLyB0aGlzLmZndWlDb21wb25lbnQubm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgTG9naW5WaWV3Q3RyLmluc3RhbmNlLnZpZXcgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudWlfbG9hZGluZ05vZGVHcm91cC5hc0NvbS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfbG9hZGluZ0xhYmVsLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV9idG5fcmVnaXN0ZXIub25DbGljayh0aGlzLnNob3dSZWdpc3RlclBhbmVsLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnVpX2J0bl9jbG9zZVBob25lUmVnLm9uQ2xpY2sodGhpcy5jb2xzZVBob25lUGFuZWwsIHRoaXMpO1xuICAgICAgICB0aGlzLnVpX2J0bl9jbG9zZUVtYWlsUmVnLm9uQ2xpY2sodGhpcy5jb2xzZUVtYWlsUGFuZWwsIHRoaXMpO1xuICAgICAgICB0aGlzLnVpX2J0bl9FbWFpbFJlZ0luUGhvbmUub25DbGljayh0aGlzLm9wZW5FbWFpbFJlZywgdGhpcyk7XG4gICAgICAgIHRoaXMudWlfYnRuX1Bob25lUmVnSW5FbWFpbC5vbkNsaWNrKHRoaXMub3BlblBob25lUmVnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLnVpX2J0bl9zZW5kQ29kZUVtYWlsLm9uQ2xpY2sodGhpcy5zZW5kRW1haWxDb2RlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51aV9idG5fZW1haWxGb3JnZXRDb2RlLm9uQ2xpY2sodGhpcy5zZW5kRW1haWxDb2RlLCB0aGlzKTtcblxuICAgICAgICB0aGlzLnVpX2J0bl9mb3JnZXRQd2Qub25DbGljayh0aGlzLnNob3dGb3JnZXRQYW5lbCwgdGhpcyk7XG4gICAgICAgIHRoaXMudWlfYnRuX2Nsb3NlUGhvbmVGb3JnZXRQd2Qub25DbGljayh0aGlzLmNvbHNlUGhvbmVGb3JnZXRQd2QsIHRoaXMpO1xuICAgICAgICB0aGlzLnVpX2J0bl9jbG9zZUVtYWlsRm9yZ2V0UHdkLm9uQ2xpY2sodGhpcy5jb2xzZUVtYWlsRm9yZ2V0UHdkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLnVpX2J0bl9lbWFpbEZvcmdldFB3ZEluUGhvbmUub25DbGljayh0aGlzLm9wZW5FbWFpbEZvcmdldCwgdGhpcyk7XG4gICAgICAgIHRoaXMudWlfYnRuX3Bob25lRm9yZ2V0UHdkSW5FbWFpbC5vbkNsaWNrKHRoaXMub3BlblBob25lRm9yZ2V0LCB0aGlzKTtcblxuICAgICAgICB0aGlzLnVpX2J0bl9sYW5ndWFnZS5vbkNsaWNrKHRoaXMuc2hvd0Nob29zZUxhbmd1YWdlLCB0aGlzKTtcbiAgICAgICAgdGhpcy51aV9idG5fY2xvc2VMYW5ndWFnZS5vbkNsaWNrKHRoaXMuY2xvc2VMYW5ndWFnZSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy51aV9idG5fbG9naW4ub25DbGljayh0aGlzLnNlbmRMb2dpbi5iaW5kKHRoaXMpKTtcblxuICAgICAgICB0aGlzLnVpX2J0bl9zZXJ2aWNlTG9naW4ub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xvZ2luVmlldycsIFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgVUlVdGlsLmtlZnVGdW5jdGlvbih0aGlzLm9wZW5XZWJzaXRlLmJpbmQodGhpcykpO1xuICAgICAgICB9LCB0aGlzKVxuXG4gICAgICAgIC8qKuaJi+acuuazqOWGjCAqL1xuICAgICAgICB0aGlzLnVpX2J0bl9waG9uZVJlZ0NvbmZpcm0ub25DbGljayh0aGlzLnBob25lUmVnaXN0ZXJDb25maXJtLCB0aGlzKTtcbiAgICAgICAgdGhpcy51aV9idG5fc2VuZENvZGUub25DbGljayh0aGlzLkdldFZlcmlmeUNvZGUsIHRoaXMpO1xuXG4gICAgICAgIC8qKumCrueuseazqOWGjCAqL1xuICAgICAgICB0aGlzLnVpX2J0bl9lbWFpbFJlZ0NvbmZpcm0ub25DbGljayh0aGlzLmVtYWlsUmVnaXN0ZXJDb25maXJtLCB0aGlzKTtcblxuICAgICAgICAvKirmiYvmnLrmib7lm54g5a+G56CBKi9cbiAgICAgICAgdGhpcy51aV9idG5fcGhvbmVGb3JnZXRDb25maXJtLm9uQ2xpY2sodGhpcy5waG9uZUZpbmRQd2QsIHRoaXMpO1xuICAgICAgICB0aGlzLnVpX2J0bl9waG9uZUZvcmdldENvZGUub25DbGljayh0aGlzLkdldFZlcmlmeUNvZGUsIHRoaXMpO1xuXG4gICAgICAgIC8qKumCrueuseaJvuWbnuWvhueggSAqL1xuICAgICAgICB0aGlzLnVpX2J0bl9lbWFpbEZvcmdldENvbmZpcm0ub25DbGljayh0aGlzLmVtYWlsRmluZFB3ZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5sYW5ndWFnZUNvbnRyb2xsZXIgPSB0aGlzLnVpX3NldExhbmd1YWdlLmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpO1xuICAgICAgICB0aGlzLmxhbmd1YWdlQ29udHJvbGxlci5vbkNoYW5nZWQodGhpcy5sYW5ndWFnZUNoYW5nZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLnVpX2J0bl9jb25maXJtTGFuZ3VhZ2Uub25DbGljayh0aGlzLmNoYW5nZWRMYW5ndWFnZSwgdGhpcyk7XG4gICAgICAgIHRoaXMudWlfYnRuX2NhbmNlbExhbmd1YWdlLm9uQ2xpY2sodGhpcy5jYW5jZUxhbmd1YWdlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5sb2dpblR5cGVDb250cm9sbGVyID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpO1xuICAgICAgICB0aGlzLmxvZ2luVHlwZUNvbnRyb2xsZXIub25DaGFuZ2VkKHRoaXMuY29udHJvQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgIHRoaXMubG9naW5UeXBlQ29udHJvbGxlci5zZWxlY3RlZEluZGV4ID0gMDtcblxuICAgICAgICB0aGlzLnVpX3Zlci5zZXRWYXIoXCJ2ZXJcIiwgQmFzZUZyYW1lTmF0aXZlLlZFUlNJT04pLmZsdXNoVmFycygpO1xuICAgICAgICB0aGlzLnVpX2J0bl9jbG9zZWhlYWQub25DbGljayh0aGlzLmNsb3NlSGVhZCwgdGhpcyk7XG4gICAgICAgIHRoaXMudWlfaGVhZC5vbkNsaWNrKHRoaXMuc2hvd0hlYWQsIHRoaXMpO1xuICAgICAgICB0aGlzLnVpX2hlYWRMaXN0LnNldFZpcnR1YWwoKTtcbiAgICAgICAgdGhpcy51aV9oZWFkTGlzdC5pdGVtUmVuZGVyZXIgPSB0aGlzLnJlbmRlckxpc3RJdGVtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudWlfaGVhZExpc3Qub24oZmd1aS5FdmVudC5DTElDS19JVEVNLCB0aGlzLm9uY2xpY2tJdGVtLCB0aGlzKTtcbiAgICAgICAgdGhpcy5oZWFkTG9hZGVyID0gdGhpcy51aV9oZWFkLmdldENoaWxkKFwiaGVhZExvYWRlclwiKS5hc0xvYWRlcjtcbiAgICAgICAgdGhpcy51aV9idG5fc2VuZGluZm8ub25DbGljayh0aGlzLnNlbmRSb2xlSW5mbywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5sb2FkU291bmRzKCk7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChTdGF0dXNiYXJWaWV3LCBmYWxzZSk7XG4gICAgICAgIHN0YXRlLmZndWlZID0gMTA7XG4gICAgICAgIHRoaXMudGlwdmlldyA9IHRoaXMuYWRkRmd1aUNvbXBvbmVudChDb21tb25WaWV3KTtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50Lm5vZGUucnVuQWN0aW9uKGNjLmZhZGVJbigwLjUpKVxuICAgICAgICB0aGlzLnJlYWRMb2NhbCgpO1xuXG4gICAgICAgIHRoaXMudWlfc2VydmVyaWQudmlzaWJsZSA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5zdGF0dXMgPT0gMDtcbiAgICAgICAgdGhpcy51aV9zZXJ2ZXJpZC50ZXh0ID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJRCArIFwiXCI7XG4gICAgICAgIHRoaXMudWlfY2hhbmdlc2VydmVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV9idG5fY2hhbmdlLm9uKGZndWkuRXZlbnQuVE9VQ0hfQkVHSU4sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuc2hvd1NlY3JldFdpbmRvdywgMSk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMudWlfYnRuX2NoYW5nZS5vbihmZ3VpLkV2ZW50LlRPVUNIX0VORCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2hvd1NlY3JldFdpbmRvdyk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy51aV9jaGFuZ2VzZXJ2ZXIuZ2V0Q2hpbGQoXCJjYW5jZWxcIikub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xvZ2luVmlldycsIFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgdGhpcy51aV9jaGFuZ2VzZXJ2ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLnVpX2J0bl9icmVha3cubm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xuICAgICAgICB0aGlzLnVpX2J0bl9icmVha3cub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlV2ViVmlldygpO1xuICAgICAgICB9LCB0aGlzKVxuICAgICAgICB0aGlzLmluaXRDaGFuZ2VTZXJ2ZXIoKTtcbiAgICAgICAgdGhpcy5pbnRpV2ViVmlldygpO1xuICAgICAgICB3aW5kb3cuY2xvc2VXZWJWaWV3ID0gdGhpcy5jbG9zZVdlYlZpZXcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRQaG9uZUFyZWFDb2RlKCk7XG5cbiAgICAgICAgLy8g6aaW5qyh5omT5byAQXBw5omN6ZyA6KaB5pKt5pS+5Yqo55S7XG4gICAgICAgIGlmIChCYXNlRnJhbWVOYXRpdmUuaXNPcGVuQXBwKSB7XG4gICAgICAgICAgICBCYXNlRnJhbWVOYXRpdmUuaXNPcGVuQXBwID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gY2MuaW5zdGFudGlhdGUodGhpcy5hbmltYXRpb25Ob2RlKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi5wYXJlbnQgPSB0aGlzLnVpX2xvZ29QYXJlbnQubm9kZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYW5pbWF0aW9uLnBvc2l0aW9uID0gY2MudjMoMCwgMCwgMCk7XG4gICAgICAgICAgICBhbmltYXRpb24uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuICAgICAgICAgICAgYW5pbWF0aW9uLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeSwgbG9vcENvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB0cmFja0VudHJ5LmFuaW1hdGlvbiA/IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgOiAnJztcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gXCJhbmltYXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3ZpZXdfbm9kZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNOZWVkQXV0b0xvZ2luKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudWlfbG9nb0ljb24udmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVpX3ZpZXdfbm9kZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNOZWVkQXV0b0xvZ2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDmmK/lkKbpnIDopoHoh6rliqjnmbvlvZVcbiAgICBwdWJsaWMgaXNOZWVkQXV0b0xvZ2luKCkge1xuICAgICAgICAvLyDmnKrli77pgInkv53lrZjlr4bnoIHkuI3pnIDopoHoh6rliqjnmbvlvZVcbiAgICAgICAgbGV0IHN0YXRlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVtZW1iZXJQV0RcIik7XG4gICAgICAgIGlmIChzdGF0ZSAhPSBcIjFcIikgcmV0dXJuO1xuXG4gICAgICAgIGxldCBhY2NvdW50ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9naW5fcGlkXCIpO1xuICAgICAgICBsZXQgcHdkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9naW5fcHdkXCIpO1xuICAgICAgICBpZiAoYWNjb3VudCAmJiBhY2NvdW50ICE9IFwiXCIgJiYgcHdkICYmIHB3ZCAhPSBcIlwiICYmIEdhbWVDb21tb24uaXNBdXRvTG9naW4pIHtcbiAgICAgICAgICAgIEdhbWVDb21tb24uaXNBdXRvTG9naW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VuZExvZ2luKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOiOt+WPluaJi+acuuWMuuWPt1xuICAgIHB1YmxpYyBnZXRQaG9uZUFyZWFDb2RlKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzICsgXCIvYXBpL0dhbWUvR2V0QWxsU21zQ29kZVwiXG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UuZ2V0KHVybClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLUdldEFsbFNtc0NvZGUtLS1cIiwgcmVzKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBHYW1lQ29tbW9uLmFsbFNtc0NvZGUgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pbml0QXJlYUNvZGVMaXN0KHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLojrflj5bmiYvmnLrljLrlj7fkv6Hmga/lpLHotKVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyDliJ3lp4vljJbljLrlj7fliJfooahcbiAgICBwdWJsaWMgaW5pdEFyZWFDb2RlTGlzdChkYXRhKSB7XG4gICAgICAgIGxldCBhcmVhY29kZUxpc3Q6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRhdGFbaW5kZXhdO1xuICAgICAgICAgICAgYXJlYWNvZGVMaXN0W2luZGV4XSA9IFwiK1wiICsgZWxlbWVudC5wcmVmaXg7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55m75b2V55WM6Z2iXG4gICAgICAgIHRoaXMudWlfcGhvbmVBcmVhY29kZS5pdGVtcyA9IGFyZWFjb2RlTGlzdDtcbiAgICAgICAgdGhpcy51aV9waG9uZUFyZWFjb2RlLnRleHQgPSBcIis4NlwiO1xuXG4gICAgICAgIC8vIOazqOWGjOeVjOmdolxuICAgICAgICB0aGlzLnVpX3JlZ1Bob25lQXJlYWNvZGUuaXRlbXMgPSBhcmVhY29kZUxpc3Q7XG4gICAgICAgIHRoaXMudWlfcmVnUGhvbmVBcmVhY29kZS50ZXh0ID0gXCIrODZcIjtcblxuICAgICAgICAvLyDlv5jorrDlr4bnoIHnlYzpnaJcbiAgICAgICAgdGhpcy51aV9Gb3JnZXRQaG9uZUFyZWFjb2RlLml0ZW1zID0gYXJlYWNvZGVMaXN0O1xuICAgICAgICB0aGlzLnVpX0ZvcmdldFBob25lQXJlYWNvZGUudGV4dCA9IFwiKzg2XCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB3ZWJWaWV3OiBjYy5XZWJWaWV3O1xuICAgIHB1YmxpYyBpbnRpV2ViVmlldygpIHtcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmdldENoaWxkKFwid2Vidmlld1wiKS5hc0xvYWRlci5ub2RlO1xuICAgICAgICB0aGlzLndlYlZpZXcgPSBub2RlLmFkZENvbXBvbmVudChjYy5XZWJWaWV3KTtcbiAgICAgICAgbGV0IHdlYnZpZXdFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICB3ZWJ2aWV3RXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgLy/ov5nkuKogbm9kZSDoioLngrnmmK/kvaDnmoTkuovku7blpITnkIbku6PnoIHnu4Tku7bmiYDlsZ7nmoToioLngrlcbiAgICAgICAgd2Vidmlld0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIkxvZ2luVmlld1wiO1xuICAgICAgICB3ZWJ2aWV3RXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIndlYlZpZXdFdmVudFwiO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy53ZWJWaWV3LndlYnZpZXdFdmVudHMucHVzaCh3ZWJ2aWV3RXZlbnRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy53ZWJWaWV3Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyB3ZWJWaWV3RXZlbnQoc2VuZGVyLCBldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQgPT09IGNjLldlYlZpZXcuRXZlbnRUeXBlLkxPQURFRCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItd2ViVmlldy0tLWxvYWRlZC0tLWZpbmlzaCFcIilcbiAgICAgICAgfSBlbHNlIGlmIChldmVudCA9PT0gY2MuV2ViVmlldy5FdmVudFR5cGUuTE9BRElORykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJWaWV3LS0tbG9hZGluZ1wiKVxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBjYy5XZWJWaWV3LkV2ZW50VHlwZS5FUlJPUikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJWaWV3LS0tc2VuZGVyXCIsIEpTT04uc3RyaW5naWZ5KHNlbmRlcikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZWJWaWV3LS0tZXZlbnRcIiwgZXZlbnQpO1xuICAgICAgICAgICAgLy8gdGhpcy5jbG9zZVdlYlZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgY2xvc2VXZWJWaWV3KCkge1xuICAgICAgICB0aGlzLnVpX2J0bl9icmVha3cudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLndlYlZpZXcudXJsID0gJyc7XG4gICAgICAgIHRoaXMud2ViVmlldy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvKirmiZPplovntrLpoIEgKi9cbiAgICBwdWJsaWMgb3BlbldlYnNpdGUodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy51aV9idG5fYnJlYWt3LnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLndlYlZpZXcubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLndlYlZpZXcudXJsID0gdXJsO1xuICAgIH1cblxuXG4gICAgcHVibGljIGxvYWRTb3VuZHMoKSB7XG4gICAgICAgIGxldCBhYmJmID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcImdhbWVIYWxsXCIpO1xuICAgICAgICBhYmJmLmxvYWREaXIoXCJyZXMvU291bmRzXCIsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLmFkZChjbGlwc1tpXS5uYW1lLCBjbGlwc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXlCR00oXCJiZ211c2ljXCIpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumfs+S5kOWSjOmfs+aViOWIneWni+WMllwiKTtcbiAgICAgICAgICAgIC8vIOmfs+S5kOWSjOmfs+aViOWIneWni+WMllxuICAgICAgICAgICAgLy8gbGV0IHNvdW5kQm9vbCA9IEF1ZGlvTWFuYWdlci5TaW5nbGV0b24uZ2V0U291bmRTdGF0dXMoKTtcbiAgICAgICAgICAgIC8vIGxldCBzb3VuZFN0ciA9IHNvdW5kQm9vbCA/IFwib3BlblwiIDogXCJjbG9zZVwiO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzb3VuZFN0ciA9PSBcIiwgc291bmRTdHIpO1xuICAgICAgICAgICAgLy8gQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5zZXRTb3VuZFN0YXR1cyhzb3VuZFN0cik7XG4gICAgICAgICAgICAvLyBsZXQgZWZmZWN0Qm9vbCA9IEF1ZGlvTWFuYWdlci5TaW5nbGV0b24uZ2V0RWZmZWN0U3RhdHVzKCk7XG4gICAgICAgICAgICAvLyBsZXQgZWZmZWN0U3RyID0gZWZmZWN0Qm9vbCA/IFwib3BlblwiIDogXCJjbG9zZVwiO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJlZmZlY3RTdHIgPT0gXCIsIGVmZmVjdFN0cik7XG4gICAgICAgICAgICAvLyBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnNldEVmZmVjdFN0YXR1cyhlZmZlY3RTdHIpO1xuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5zZXRTb3VuZFN0YXR1cyhBdWRpb01hbmFnZXIuVGV4YXNNdXNpY1N0YXR1cyA/IFwib3BlblwiIDogXCJjbG9zZVwiKTtcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24uc2V0RWZmZWN0U3RhdHVzKEF1ZGlvTWFuYWdlci5UZXhhc0VmZmVjdFN0YXR1cyA/IFwib3BlblwiIDogXCJjbG9zZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8v5pi+56S65ZG95Luk56qX5Y+jXG4gICAgcHVibGljIHNob3dTZWNyZXRXaW5kb3coKSB7XG4gICAgICAgIGxldCBlbmR0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGVuZHRpbWUgLSB0aGlzLnRvdWNoVGltZSk7XG4gICAgICAgIGlmIChlbmR0aW1lIC0gdGhpcy50b3VjaFRpbWUgPiAxMDAwMCkge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2hvd1NlY3JldFdpbmRvdyk7XG4gICAgICAgICAgICBsZXQgaW5wdXRVSSA9IHRoaXMudWlfY2hhbmdlc2VydmVyLmdldENoaWxkKFwic2VjcmV0SW5wdXRcIikuYXNUZXh0SW5wdXQ7XG4gICAgICAgICAgICBpbnB1dFVJLnRleHQgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy51aV9jaGFuZ2VzZXJ2ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WIneWni+WMluWIh+aNouacjeWKoeWZqOmhtemdolxuICAgIHB1YmxpYyBpbml0Q2hhbmdlU2VydmVyKCkge1xuICAgICAgICBsZXQgaW5wdXRVSSA9IHRoaXMudWlfY2hhbmdlc2VydmVyLmdldENoaWxkKFwic2VjcmV0SW5wdXRcIikuYXNUZXh0SW5wdXQ7XG4gICAgICAgIHRoaXMudWlfY2hhbmdlc2VydmVyLmdldENoaWxkKFwiYnRuX3N1cmVcIikub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBpbnB1dFVJLnRleHQ7XG4gICAgICAgICAgICBpZiAoaW5wdXQgPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChcIuivt+i+k+WFpeato+ehrueahOWRveS7pFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTZXJ2ZXIoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8v5YiH5o2i5pyN5Yqh5ZmoXG4gICAgcHVibGljIGNoYW5nZVNlcnZlcihzZWNyZXQ6IHN0cmluZykge1xuICAgICAgICBsZXQga2V5ID0gQmFzZUZyYW1lTmF0aXZlLmRlZmF1bHRTZXJ2ZXJMaXN0LmtleTtcbiAgICAgICAgaWYgKHNlY3JldC5pbmRleE9mKGtleSkgIT0gLTEpIHtcbiAgICAgICAgICAgIGxldCBzZXJ2ZXJpZCA9IHNlY3JldC5zdWJzdHJpbmcoc2VjcmV0LmluZGV4T2Yoa2V5KSArIGtleS5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2ZXJpZCA9PT0gXCIsIHNlcnZlcmlkKTtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlckxpc3Quc2VydmVybGlzdDtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaWR4ID09IHNlcnZlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfc2VydmVyaWQudGV4dCA9IHNlcnZlcmlkICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJRCA9IHNlcnZlcmlkO1xuICAgICAgICAgICAgICAgICAgICBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVpX3NlcnZlcmlkLnZpc2libGUgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uc3RhdHVzID09IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfY2hhbmdlc2VydmVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLnZpZXcuU2hvd1RpcExhYmVsKFwi5YiH5o2i5pyN5Yqh5Zmo6YWN572u5oiQ5YqfXCIpO1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzZXJ2ZXJpZFwiLCBzZXJ2ZXJpZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLmnKrmib7liLDphY3nva7nmoTmnI3liqHlmahcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLovpPlhaXnmoTnp5jpkqXkuI3mraPnoa5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlSGVhZEljb25zOiBudW1iZXJbXSA9IFsyMSwgMjIsIDIzLCAyNCwgMjUsIDI2LCAyNywgMjhdO1xuICAgIHByaXZhdGUgY2xvc2VIZWFkKCkge1xuICAgICAgICAvLyDpnIDopoHmlq3lvIDov57mjqVcbiAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5EaXNDb25uZWN0KCk7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9naW5WaWV3JywgXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMudWlfcm9sZS52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93Um9sZVBhbmVsKCkge1xuICAgICAgICBVSVV0aWwubG9hZEltYWdlKHRoaXMuaGVhZExvYWRlciwgXCIvZm9yZGxjL3dlY2hhdC91c2VyXzEucG5nXCIpO1xuICAgICAgICB0aGlzLnVpX3JvbGUudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMudWlfaGVhZExpc3QubnVtSXRlbXMgPSA1OTtcbiAgICAgICAgdGhpcy51aV9uaWNrbmFtZWNmLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93SGVhZCgpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2dpblZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy51aV9saXN0R3JvdXAudmlzaWJsZSA9ICF0aGlzLnVpX2xpc3RHcm91cC52aXNpYmxlO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXJMaXN0SXRlbShpbmRleDogbnVtYmVyLCBvYmo6IGZndWkuR09iamVjdCkge1xuICAgICAgICBsZXQgaXRlbSA9IDxmZ3VpLkdDb21wb25lbnQ+b2JqO1xuICAgICAgICBsZXQgbG9hZGVyID0gaXRlbS5nZXRDaGlsZChcImhlYWRMb2FkZXJcIikuYXNMb2FkZXI7XG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlSGVhZEljb24oaW5kZXggKyAxKSkgcmV0dXJuO1xuICAgICAgICBVSVV0aWwubG9hZEltYWdlKGxvYWRlciwgXCIvZm9yZGxjL3dlY2hhdC91c2VyX1wiICsgKGluZGV4ICsgMSkgKyBcIi5wbmdcIik7XG4gICAgICAgIGl0ZW0ubmFtZSA9IFwidXNlcl9cIiArIChpbmRleCArIDEpICsgJy5wbmcnO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0RlbGV0ZUhlYWRJY29uKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZGVsZXRlSGVhZEljb25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGRlbGV0ZU51bSA9IHRoaXMuZGVsZXRlSGVhZEljb25zW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChkZWxldGVOdW0gPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbmNsaWNrSXRlbShpdGVtKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9naW5WaWV3JywgXCJidXR0b25cIik7XG4gICAgICAgIGxldCBsb2FkZXIgPSBpdGVtLmdldENoaWxkKFwiaGVhZExvYWRlclwiKS5hc0xvYWRlcjtcbiAgICAgICAgdGhpcy5oZWFkTG9hZGVyLnVybCA9IGxvYWRlci51cmw7XG4gICAgICAgIHRoaXMuaGVhZE5hbWUgPSBpdGVtLm5hbWU7XG4gICAgICAgIHRoaXMudWlfbGlzdEdyb3VwLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2VuZFJvbGVJbmZvKCkge1xuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xvZ2luVmlldycsIFwiYnV0dG9uXCIpO1xuICAgICAgICBsZXQgdXNlck5hbWUgPSB0aGlzLnVpX25pY2tuYW1lLnRleHQ7XG4gICAgICAgIGlmICghdXNlck5hbWUpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLoq4vovLjlhaXmmLXnqLFcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgTG9naW5WaWV3Q3RyLmluc3RhbmNlLmNzX2NyZWF0ZTEwMDUoTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLnVzZXJpZCArIFwiXCIsIFwiMVwiLCB1c2VyTmFtZSwgdGhpcy5oZWFkTmFtZSk7XG4gICAgfVxuICAgIHByaXZhdGUgY29udHJvQ2hhbmdlZCgpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2dpblZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgaWYgKHRoaXMubG9naW5UeXBlQ29udHJvbGxlci5zZWxlY3RlZEluZGV4ID09IDApIHsgLy/miYvmnLpcbiAgICAgICAgICAgIGlmICh0aGlzLnVpX2FjY291bnQudGV4dCA9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMudWlfcGFzc3dvcmQudGV4dCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcHdkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9naW5fcHdkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfcGFzc3dvcmQudGV4dCA9IHB3ZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVpX2VtYWlsQWNjb3VudC50ZXh0ID09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9wYXNzd29yZC50ZXh0ID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBwd2QgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dpbl9wd2RcIik7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9wYXNzd29yZC50ZXh0ID0gcHdkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoq5pi+56S65rOo5YaM55WM6Z2iICovXG4gICAgcHJpdmF0ZSBzaG93UmVnaXN0ZXJQYW5lbCgpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2dpblZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5mZ3VpQ29tcG9uZW50LmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVpX3Bob25lUmVnaXN0ZXIudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAvLyB0aGlzLnVpX2J0bl9zZW5kQ29kZS5nZXRDb250cm9sbGVyKFwidHlwZVwiKS5zZXRTZWxlY3RlZEluZGV4KDApO1xuICAgICAgICAgICAgLy8gIHRoaXMudWlfYnRuX3NlbmRDb2RlLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51aV9lbWFpbFJlZ2lzdGVyLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNvbHNlUGhvbmVQYW5lbCgpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2dpblZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy51aV9waG9uZVJlZ2lzdGVyLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIGNvbHNlRW1haWxQYW5lbCgpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2dpblZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy51aV9lbWFpbFJlZ2lzdGVyLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvcGVuRW1haWxSZWcoKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9naW5WaWV3JywgXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMudWlfcGhvbmVSZWdpc3Rlci52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfZW1haWxSZWdpc3Rlci52aXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvcGVuUGhvbmVSZWcoKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9naW5WaWV3JywgXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMudWlfcGhvbmVSZWdpc3Rlci52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9lbWFpbFJlZ2lzdGVyLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKirmmL7npLrlv5jorrDlr4bnoIHnlYzpnaIgKi9cbiAgICBwdWJsaWMgc2hvd0ZvcmdldFBhbmVsKCkge1xuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xvZ2luVmlldycsIFwiYnV0dG9uXCIpO1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZndWlDb21wb25lbnQuZ2V0Q29udHJvbGxlcihcInR5cGVcIikuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMudWlfcGhvbmVGb3JnZXRQd2QudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVpX2VtYWlsRm9yZ2V0UHdkLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY29sc2VQaG9uZUZvcmdldFB3ZCgpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2dpblZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy51aV9waG9uZUZvcmdldFB3ZC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIHByaXZhdGUgY29sc2VFbWFpbEZvcmdldFB3ZCgpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2dpblZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy51aV9lbWFpbEZvcmdldFB3ZC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIHByaXZhdGUgb3BlbkVtYWlsRm9yZ2V0KCkge1xuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xvZ2luVmlldycsIFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnVpX3Bob25lRm9yZ2V0UHdkLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51aV9lbWFpbEZvcmdldFB3ZC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9waG9uZUZvcmdldENvZGUudGV4dCA9IFwiXCI7XG4gICAgICAgIHRoaXMudWlfZW1haWxGb3JnZXRDb2RlLnRleHQgPSBcIlwiO1xuICAgIH1cbiAgICBwcml2YXRlIG9wZW5QaG9uZUZvcmdldCgpIHtcbiAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2dpblZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy51aV9waG9uZUZvcmdldFB3ZC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9lbWFpbEZvcmdldFB3ZC52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudWlfcGhvbmVGb3JnZXRDb2RlLnRleHQgPSBcIlwiO1xuICAgICAgICB0aGlzLnVpX2VtYWlsRm9yZ2V0Q29kZS50ZXh0ID0gXCJcIjtcbiAgICB9XG5cbiAgICAvKirmmL7npLror63oqIAqL1xuICAgIHByaXZhdGUgc2hvd0Nob29zZUxhbmd1YWdlKCkge1xuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xvZ2luVmlldycsIFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnVpX3NldExhbmd1YWdlLnZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgICBwcml2YXRlIGNsb3NlTGFuZ3VhZ2UoKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9naW5WaWV3JywgXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMudWlfc2V0TGFuZ3VhZ2UudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKuWPkemAgeeZu+W9lSAqL1xuICAgIHByaXZhdGUgc2VuZExvZ2luKHBsYXlTb3VuZDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgaWYgKHBsYXlTb3VuZCkge1xuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlNpbmdsZXRvbi5wbGF5KCdMb2dpblZpZXcnLCBcImJ1dHRvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNDYW5Ub3VjaCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNDYW5Ub3VjaCA9IGZhbHNlO1xuICAgICAgICBsZXQgYWNjb3VudDogc3RyaW5nO1xuICAgICAgICBsZXQgcGFzc3dvcmQ6IHN0cmluZyA9IHRoaXMudWlfcGFzc3dvcmQudGV4dDtcbiAgICAgICAgaWYgKHRoaXMubG9naW5UeXBlQ29udHJvbGxlci5zZWxlY3RlZEluZGV4ID09IDApIHsvL+aJi+apn1xuICAgICAgICAgICAgYWNjb3VudCA9IHRoaXMudWlfYWNjb3VudC50ZXh0O1xuICAgICAgICB9IGVsc2Ugey8v6YO1566xXG4gICAgICAgICAgICBhY2NvdW50ID0gdGhpcy51aV9lbWFpbEFjY291bnQudGV4dDtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0VtYWlsKGFjY291bnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0NhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6KuL6Ly45YWl5q2j56K655qE6YO1566x6LOs6JmfXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWNjb3VudCA9PSBcIlwiIHx8IHBhc3N3b3JkID09IFwiXCIgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgICAgICAgICAgdGhpcy5pc0NhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLotKblj7fmiJblr4bnoIHmoLzlvI/kuI3mraPnoa5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgTG9naW5WaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QaWQgPSBhY2NvdW50O1xuICAgICAgICBMb2dpblZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVB3ZCA9IHBhc3N3b3JkO1xuICAgICAgICBsZXQgcHdkID0gVG9vbHNFeC5TaW5nbGV0b24uRW5jcnlwdGlvblBXRChwYXNzd29yZCk7XG4gICAgICAgIExvZ2luVmlld0N0ci5pbnN0YW5jZS5Mb2dpbnRvRmlzaExldmVsKGFjY291bnQsIHB3ZCk7XG5cbiAgICAgICAgLy8gMC41U+ayoeeZu+S4iiDmmL7npLpsYW9kaW5nXG4gICAgICAgIHRoaXMudWlfbG9hZGluZ05vZGVHcm91cC5hc0NvbS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy51aV9sb2FkaW5nTGFiZWwudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2xvYWRpbmcuYXNDb20udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2dpbkxvYWRpbmcoKTtcbiAgICAgICAgfSwgMC41KVxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93TG9naW5Mb2FkaW5nKCkge1xuICAgICAgICB0aGlzLnVpX2xvYWRpbmcuYXNDb20udmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vIC8vIOaWh+Wtl1xuICAgICAgICAvLyB0aGlzLnVpX2xvYWRpbmdMYWJlbC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gbGV0IHRpbWU6IG51bWJlciA9IDA7XG4gICAgICAgIC8vIGxldCB0aXBTdHI6IHN0cmluZyA9IFwi55m75b2V5LitXCI7XG4gICAgICAgIC8vIHRoaXMudWlfbG9hZGluZ0xhYmVsLnRleHQgPSB0aXBTdHI7XG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAvLyAgICAgdGltZSArPSAxO1xuICAgICAgICAvLyAgICAgaWYgKHRpbWUgJSA0ID09IDEpIHtcbiAgICAgICAgLy8gICAgICAgICB0aXBTdHIgPSBcIueZu+W9leS4rVwiO1xuICAgICAgICAvLyAgICAgfSBlbHNlIGlmICh0aW1lICUgNCA9PSAyKSB7XG4gICAgICAgIC8vICAgICAgICAgdGlwU3RyID0gXCLnmbvlvZXkuK0uXCI7XG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYgKHRpbWUgJSA0ID09IDMpIHtcbiAgICAgICAgLy8gICAgICAgICB0aXBTdHIgPSBcIueZu+W9leS4rS4uXCI7XG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYgKHRpbWUgJSA0ID09IDApIHtcbiAgICAgICAgLy8gICAgICAgICB0aXBTdHIgPSBcIueZu+W9leS4rS4uLlwiO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgdGhpcy51aV9sb2FkaW5nTGFiZWwudGV4dCA9IHRpcFN0cjtcbiAgICAgICAgLy8gICAgIGlmICh0aW1lID49IDQpIHRpbWUgPSAwO1xuICAgICAgICAvLyB9LCAwLjUpXG4gICAgICAgIC8vIOWbvueJh1xuICAgICAgICBjYy50d2Vlbih0aGlzLnVpX2xvYWRpbmdQaWMubm9kZSlcbiAgICAgICAgICAgIC5ieSgxLCB7IGFuZ2xlOiAtMzYwIH0pXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXG4gICAgICAgICAgICAuc3RhcnQoKVxuXG4gICAgICAgIGlmICghdGhpcy5sb2dpblRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLSB0aW1lIG91dCAtLS1cIik7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9sb2FkaW5nTm9kZUdyb3VwLmFzQ29tLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2xvYWRpbmcuYXNDb20udmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS52aWV3LlNob3dUaXBMYWJlbChMYW5ndWFnZUNvbmZpZy5nZXRMYW5ndWFnZUJ5SWQoMTAwMDEpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuVG91Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9naW5UaW1lciA9IG51bGw7XG4gICAgICAgICAgICB9LCAxMDAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbG9naW5TdWNjZXNzKCkge1xuICAgICAgICBpZiAodGhpcy5sb2dpblRpbWVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyVGltZW91dCB0aGlzLmxvZ2luVGltZXJcIik7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5sb2dpblRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5UaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0NhblRvdWNoID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51aV9sb2FkaW5nTm9kZUdyb3VwLmFzQ29tLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIC8qKuWPkemAgeaJi+acuuazqOWGjCAqL1xuICAgIHByaXZhdGUgcGhvbmVSZWdpc3RlckNvbmZpcm0oKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9naW5WaWV3JywgXCJidXR0b25cIik7XG4gICAgICAgIGxldCBwaG9uZSA9IHRoaXMudWlfcGhvbmVSZWdBY2NvdW50LnRleHQ7XG4gICAgICAgIGlmICghcGhvbmUgfHxcbiAgICAgICAgICAgICF0aGlzLnVpX3Bob25lUmVnUHdkLnRleHQgfHwgIXRoaXMudWlfcGhvbmVSZWdDb21Qd2QudGV4dCB8fCAhdGhpcy51aV9waG9uZVJlZ0NvZGUudGV4dFxuICAgICAgICApIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLor7floavlhpnlrozmlbTnmoTkv6Hmga9cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudWlfcGhvbmVSZWdQd2QudGV4dCAhPSB0aGlzLnVpX3Bob25lUmVnQ29tUHdkLnRleHQpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLkuKTmrKHovpPlhaXnmoTlr4bnoIHkuI3kuIDoh7RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzUGhvbmUocGhvbmUpKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IHVybCA9IGAke0Jhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3N9L2FwaS9HYW1lL1JlZ2lzdGVyR2FtZVVzZXI/YWNjb3VudD0ke3Bob25lfSZwYXNzd29yZD0ke3RoaXMudWlfcGhvbmVSZWdQd2QudGV4dH0mVmVDb2RlPSR7dGhpcy51aV9waG9uZVJlZ0NvZGUudGV4dH1gO1xuICAgICAgICAvLyBIdHRwSGVscEV4Lmluc3RhbmNlLmdldCh1cmwpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCIvYXBpL0dhbWUvUmVnaXN0ZXJHYW1lVXNlciA9IFwiLCByZXMpO1xuICAgICAgICAvLyAgICAgaWYgKHJlcy5jb2RlID09IDEpIHtcbiAgICAgICAgLy8gICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5rOo5YaM5oiQ5YqfXCIpO1xuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKHJlcy5tZXNzYWdlKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAvLyAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuazqOWGjOWksei0pVwiKTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgbGV0IHVybCA9IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SXRlbS5hcGlBZHJlc3MgKyBcIi9hcGkvR2FtZS9SZWdVc2VyXCI7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBtb2JpbGU6IHBob25lLFxuICAgICAgICAgICAgc21zY29kZTogdGhpcy51aV9waG9uZVJlZ0NvZGUudGV4dCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVpX3Bob25lUmVnUHdkLnRleHRcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIi9hcGkvR2FtZS9SZWdVc2VyIDExPT0gXCIsIHVybCk7XG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtcykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi9hcGkvR2FtZS9SZWdVc2VyIDIyPT09IFwiLCByZXMuY29kZSk7XG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMSkge1xuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLms6jlhozmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9waG9uZVJlZ2lzdGVyLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChyZXMubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGhoaGhoaGhoaGgtLS1cIiwgZXJyKTtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCIxMeazqOWGjOWksei0pVwiKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKirlj5HpgIHpgq7nrrHms6jlhowgKi9cbiAgICBwcml2YXRlIGVtYWlsUmVnaXN0ZXJDb25maXJtKCkge1xuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xvZ2luVmlldycsIFwiYnV0dG9uXCIpO1xuICAgICAgICBpZiAoIXRoaXMudWlfZW1haWxSZWdBY2NvdW50LnRleHQgfHwgIXRoaXMudWlfZW1haWxSZWdDb2RlLnRleHQgfHxcbiAgICAgICAgICAgICF0aGlzLnVpX2VtYWlsUmVnUHdkLnRleHQgfHwgIXRoaXMudWlfZW1haWxSZWdDb21Qd2QudGV4dFxuICAgICAgICApIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLoq4vloavlr6vlrozmlbTnmoTkv6Hmga9cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudWlfZW1haWxSZWdQd2QudGV4dCAhPSB0aGlzLnVpX2VtYWlsUmVnQ29tUHdkLnRleHQpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLlhanmrKHovLjlhaXnmoTlr4bnorzkuI3kuIDoh7RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJvb2wgPSB0aGlzLmlzRW1haWwodGhpcy51aV9lbWFpbFJlZ0FjY291bnQudGV4dCk7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuiri+i8uOWFpeato+eiuueahOmDteeuseWcsOWdgFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgdXJsID0gYCR7QmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJdGVtLmFwaUFkcmVzc30vYXBpL0dhbWUvUmVnR2FtZVVzZXI/YWNjb3VudD0ke3RoaXMudWlfZW1haWxSZWdBY2NvdW50LnRleHR9JnBhc3N3b3JkPSR7dGhpcy51aV9lbWFpbFJlZ1B3ZC50ZXh0fWA7XG4gICAgICAgIC8vIEh0dHBIZWxwRXguaW5zdGFuY2UuZ2V0KHVybCkudGhlbigoKSA9PiB7XG4gICAgICAgIC8vICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5rOo5YaM5oiQ5YqfXCIpXG4gICAgICAgIC8vIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgLy8gICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLms6jlhozlpLHotKVcIilcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzICsgXCIvYXBpL0dhbWUvUmVnVXNlclwiO1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgbW9iaWxlOiB0aGlzLnVpX2VtYWlsUmVnQWNjb3VudC50ZXh0LFxuICAgICAgICAgICAgc21zY29kZTogdGhpcy51aV9lbWFpbFJlZ0NvZGUudGV4dCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnVpX2VtYWlsUmVnUHdkLnRleHRcbiAgICAgICAgfVxuICAgICAgICBIdHRwSGVscEV4Lmluc3RhbmNlLnBvc3QodXJsLCBwYXJhbXMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCIvYXBpL0dhbWUvUmVnVXNlciA9PSBcIiwgcmVzKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuazqOWGjOaIkOWKn1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3Bob25lUmVnaXN0ZXIudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfZW1haWxSZWdpc3Rlci52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwocmVzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwiMjLms6jlhozlpLHotKVcIik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoq5omL5py65om+5Zue5a+G56CBICovXG4gICAgcHJpdmF0ZSBwaG9uZUZpbmRQd2QoKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9naW5WaWV3JywgXCJidXR0b25cIik7XG5cbiAgICAgICAgbGV0IHBob25lID0gdGhpcy51aV9waG9uZUZvcmdldE51bS50ZXh0O1xuICAgICAgICBsZXQgbmV3cHdkID0gdGhpcy51aV9waG9uZUZvcmdldE5ld1B3ZC50ZXh0O1xuICAgICAgICBsZXQgbmV3cHdkMiA9IHRoaXMudWlfcGhvbmVGb3JnZXROZXdQd2RDb20udGV4dDtcbiAgICAgICAgbGV0IGNvZGUgPSB0aGlzLnVpX3Bob25lRm9yZ2V0Q29kZS50ZXh0O1xuXG4gICAgICAgIGlmICghcGhvbmUgfHwgIW5ld3B3ZCB8fCAhbmV3cHdkMiB8fCAhY29kZSkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuivt+Whq+WGmeWujOaVtOeahOS/oeaBr1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3cHdkICE9IG5ld3B3ZDIpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLkuKTmrKHovpPlhaXnmoTlr4bnoIHkuI3kuIDoh7RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzUGhvbmUocGhvbmUpKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB1cmwgPSBgJHtCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzfS9hcGkvR2FtZS9DaGFuZ2VQYXNzV29yZGA7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBwaG9uZTogcGhvbmUsXG4gICAgICAgICAgICB2ZXJpZnlDb2RlOiBjb2RlLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IG5ld3B3ZFxuICAgICAgICB9XG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5a+G56CB5L+u5pS55oiQ5YqfXCIpXG4gICAgICAgICAgICB0aGlzLnVpX3Bob25lRm9yZ2V0UHdkLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudWlfZW1haWxGb3JnZXRQd2QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5a+G56CB5L+u5pS55aSx6LSlXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoq6YKu566x5om+5Zue5a+G56CBICovXG4gICAgcHJpdmF0ZSBlbWFpbEZpbmRQd2QoKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9naW5WaWV3JywgXCJidXR0b25cIik7XG5cbiAgICAgICAgbGV0IGVtYWlsID0gdGhpcy51aV9lbWFpbEZvcmdldE51bS50ZXh0O1xuICAgICAgICBsZXQgbmV3cHdkID0gdGhpcy51aV9lbWFpbEZvcmdldE5ld1B3ZC50ZXh0O1xuICAgICAgICBsZXQgbmV3cHdkMiA9IHRoaXMudWlfZW1haWxGb3JnZXROZXdQd2RDb20udGV4dDtcbiAgICAgICAgbGV0IGNvZGUgPSB0aGlzLnVpX2VtYWlsRm9yZ2V0Q29kZS50ZXh0O1xuXG4gICAgICAgIGlmICghZW1haWwgfHwgIW5ld3B3ZCB8fCAhbmV3cHdkMiB8fCAhY29kZSkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuivt+Whq+WGmeWujOaVtOeahOS/oeaBr1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3cHdkICE9IG5ld3B3ZDIpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLkuKTmrKHovpPlhaXnmoTlr4bnoIHkuI3kuIDoh7RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzRW1haWwoZW1haWwpKSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi6K+36L6T5YWl5q2j56Gu55qE6YKu566x5Zyw5Z2AXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB1cmwgPSBgJHtCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzfS9hcGkvR2FtZS9DaGFuZ2VQYXNzV29yZGA7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBwaG9uZTogZW1haWwsXG4gICAgICAgICAgICB2ZXJpZnlDb2RlOiBjb2RlLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IG5ld3B3ZFxuICAgICAgICB9XG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5a+G56CB5L+u5pS55oiQ5YqfXCIpXG4gICAgICAgICAgICB0aGlzLnVpX3Bob25lRm9yZ2V0UHdkLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudWlfZW1haWxGb3JnZXRQd2QudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5a+G56CB5L+u5pS55aSx6LSlXCIpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoq54K55Ye76K+t6KiAICovXG4gICAgcHJpdmF0ZSBsYW5ndWFnZUNoYW5nZWQoKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9naW5WaWV3JywgXCJidXR0b25cIik7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGFuZ3VhZ2VDb250cm9sbGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3l1eWFucXVlLnNldFZhcihcIjJcIiwgdGhpcy51aV9idG5fZnR6dy50aXRsZSkuZmx1c2hWYXJzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9jb25maXJtc2V0TGFuZ3VhZ2UudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy51aV95dXlhbnF1ZS5zZXRWYXIoXCIyXCIsIHRoaXMudWlfYnRuX2p0encudGl0bGUpLmZsdXNoVmFycygpO1xuICAgICAgICAgICAgICAgIHRoaXMudWlfY29uZmlybXNldExhbmd1YWdlLnZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHRoaXMudWlfeXV5YW5xdWUuc2V0VmFyKFwiMlwiLCB0aGlzLnVpX2J0bl95aW55dS50aXRsZSkuZmx1c2hWYXJzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9jb25maXJtc2V0TGFuZ3VhZ2UudmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgdGhpcy51aV95dXlhbnF1ZS5zZXRWYXIoXCIyXCIsIHRoaXMudWlfYnRuX3J5LnRpdGxlKS5mbHVzaFZhcnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2NvbmZpcm1zZXRMYW5ndWFnZS52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKirnoa7lrprpgInmi6nor63oqIAgKi9cbiAgICBwdWJsaWMgY2hhbmdlZExhbmd1YWdlKCkge1xuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnBsYXkoJ0xvZ2luVmlldycsIFwiYnV0dG9uXCIpO1xuICAgICAgICB0aGlzLnVpX2NvbmZpcm1zZXRMYW5ndWFnZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGFuZ3VhZ2VDb250cm9sbGVyLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChBcHBDb25zdC5sYW5ndWFnZVR5cGUgPT0gaW5kZXgpIHsgLy/liIfmj5vnm7jlkIznmoToqp7oqIBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT0gMyB8fCBpbmRleCA9PSA0KSB7XG4gICAgICAgICAgICBDb21tb25DdHIuaW5zdGFuY2Uudmlldy5TaG93VGlwTGFiZWwoXCLmmqvnhKHnm7jpl5zoqp7oqIBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwQ29uc3QubGFuZ3VhZ2VUeXBlID0gaW5kZXg7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhbmd1YWdlVHlwZVwiLCBBcHBDb25zdC5sYW5ndWFnZVR5cGUgKyAnJyk7XG4gICAgICAgIGZndWkuVUlQYWNrYWdlLnJlbW92ZVBhY2thZ2UodGhpcy5wYWNrYWdlTmFtZSk7XG4gICAgICAgIEdhbWVDb21tb24ubG9hZFNjZW5lKFwiZ2FtZUhhbGxcIiwgXCJsb2dpblwiKTtcbiAgICB9XG4gICAgLyoq5Y+W5raI6YCJ5oup6K+t6KiAICovXG4gICAgcHVibGljIGNhbmNlTGFuZ3VhZ2UoKSB7XG4gICAgICAgIEF1ZGlvTWFuYWdlci5TaW5nbGV0b24ucGxheSgnTG9naW5WaWV3JywgXCJidXR0b25cIik7XG4gICAgICAgIHRoaXMudWlfY29uZmlybXNldExhbmd1YWdlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUNvbnRyb2xsZXIuc2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgLyoq55m75b2V5oiQ5YqfICovXG4gICAgcHVibGljIGNsZWFuRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuc2F2ZVBhc3N3b3JkKCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xuICAgICAgICBBdWRpb01hbmFnZXIuU2luZ2xldG9uLnN0b3BCR00oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0gbG9naW4gc3VjY2VzcyB0byBsb2JieSAtLS1cIik7XG4gICAgICAgIFNjZW5lTWFuYWdlci5TaW5nbGV0b24ubG9hZFNjZW5lKFwiZ2FtZUhhbGxcIiwgXCJsb2JieVwiKTtcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5sb2dpblRpbWVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsZWFyVGltZW91dCB0aGlzLmxvZ2luVGltZXJcIik7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5sb2dpblRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5UaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZmd1aS5VSVBhY2thZ2UucmVtb3ZlUGFja2FnZShcInJlcy9Mb2dpbi9sb2dpblwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKirorrDkvY/lr4bnoIEg5pe25a2Y5a+G56CBICovXG4gICAgcHVibGljIHNhdmVQYXNzd29yZCgpIHtcbiAgICAgICAgaWYgKHRoaXMudWlfYnRuX3JlbWVycHdkLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2dpblR5cGVDb250cm9sbGVyLnNlbGVjdGVkSW5kZXggPT0gMCkgey8v5omL5qmfXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9naW5UeXBlXCIsICcwJyk7XG4gICAgICAgICAgICB9IGVsc2Ugey8v6YO1566xXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9naW5UeXBlXCIsICcxJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZW1lbWJlclBXRFwiLCBcIjFcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZW1lbWJlclBXRFwiLCBcIjBcIik7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAvKirojrflj5borrDkvY/lr4bnoIHnmoTkv6Hmga8gKi9cbiAgICBwdWJsaWMgcmVhZExvY2FsKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZW1lbWJlclBXRFwiKTtcbiAgICAgICAgaWYgKHN0YXRlID09IFwiMVwiKSB7Ly/orrDkvY/kuoblr4bnoIHnmoRcbiAgICAgICAgICAgIHRoaXMudWlfYnRuX3JlbWVycHdkLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCB0eXBlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9naW5UeXBlXCIpOyAvL+eZu+W9leeahOaWueW8j1xuICAgICAgICAgICAgbGV0IGFjY291bnQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dpbl9waWRcIik7XG4gICAgICAgICAgICBsZXQgcHdkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9naW5fcHdkXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJzAnKSB7IC8v5omL5py655m75b2VXG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblR5cGVDb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy51aV9hY2NvdW50LnRleHQgPSBhY2NvdW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luVHlwZUNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2VtYWlsQWNjb3VudC50ZXh0ID0gYWNjb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudWlfcGFzc3dvcmQudGV4dCA9IHB3ZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKuaJi+acuumqjOivgSAqL1xuICAgIHB1YmxpYyBpc1Bob25lKHBob25lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHBob25lID09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmiYvmnLrlj7fnoIHnrKzkuIDkvY3mmK9bMV3lvIDlpLTvvIznrKzkuozkvY1bMyw0LDUsNyw4XeS4reeahOS4gOS9je+8jOesrOS4ieS9jeWIsOesrOWNgeS4gOS9jeWImeaYr1swLTld5Lit55qE5pWw5a2X77ybXG4gICAgICAgIC8vXjHooajnpLrlvIDlpLTkuLoxXG4gICAgICAgIC8vWzN8NHw1fDd8OF0g6KGo56S6M+OAgTTjgIE144CBN+OAgTjkuK3nmoTkuIDkvY3mlbDlgLxcbiAgICAgICAgLy9bMC05XXs5fSDljLnphY3ljIXlkKswLTnnmoTmlbDlrZdcbiAgICAgICAgbGV0IHJlZyA9IC9eMVszfDR8NXw3fDh8OV1bMC05XXs5fS87XG4gICAgICAgIGlmIChyZWcudGVzdChwaG9uZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOy8v5omL5py65Y+356CB5q2j56GuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvKirliKTmlrfmmK/lkKbmmK/pg7XnrrEgKi9cbiAgICBwdWJsaWMgaXNFbWFpbChlbWFpbDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChlbWFpbCA9PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlZyA9IC9eW2EtekEtWjAtOV8tXStAW2EtekEtWjAtOV8tXSsoXFwuW2EtekEtWjAtOV8tXSspKyQvO1xuICAgICAgICBpZiAocmVnLnRlc3QoZW1haWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsvL+mDteeuseWPt+eggeato+ehrlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKirlj5HpgIHpqozor4HnoIEgKi9cbiAgICBwcml2YXRlIEdldFZlcmlmeUNvZGUoZXZlbnQ6IGZndWkuRXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS1cIiwgZXZlbnQudGFyZ2V0LiRnb2JqKTtcbiAgICAgICAgbGV0IGJ1dCA9IDxmZ3VpLkdCdXR0b24+ZXZlbnQudGFyZ2V0LiRnb2JqO1xuXG4gICAgICAgIGxldCBjb250cm9sbGVyID0gYnV0LmdldENvbnRyb2xsZXIoXCJ0eXBlXCIpO1xuICAgICAgICBidXQuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgcGhvbmU6IHN0cmluZyA9ICcnO1xuICAgICAgICBsZXQgc3RhdGU6IHN0cmluZztcbiAgICAgICAgaWYgKHRoaXMudWlfcGhvbmVSZWdpc3Rlci52aXNpYmxlKSB7IC8v5omL5qmf5rOo5YaKXG4gICAgICAgICAgICBwaG9uZSA9IHRoaXMudWlfcGhvbmVSZWdBY2NvdW50LnRleHQ7XG4gICAgICAgICAgICBzdGF0ZSA9ICcwJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVpX3Bob25lRm9yZ2V0UHdkLnZpc2libGUpIHsgLy/miYvmqZ/lv5joqJjlr4bnorxcbiAgICAgICAgICAgIHBob25lID0gdGhpcy51aV9waG9uZUZvcmdldE51bS50ZXh0O1xuICAgICAgICAgICAgc3RhdGUgPSAnMSc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzcGhvbmUgPSB0aGlzLmlzUGhvbmUocGhvbmUpO1xuICAgICAgICBpZiAoIWlzcGhvbmUpIHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLmiYvmqZ/omZ/norzkuI3mraPnoros6KuL6YeN5paw6Ly45YWlIVwiKTtcbiAgICAgICAgICAgIGJ1dC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhcmVhQ29kZSA9IHRoaXMudWlfcmVnUGhvbmVBcmVhY29kZS50ZXh0O1xuICAgICAgICBjb25zb2xlLmxvZyhcImFyZWFDb2RlID09IFwiLCBhcmVhQ29kZSk7XG4gICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzICsgXCIvYXBpL0dhbWUvU2VuZFNNU1wiO1xuICAgICAgICBsZXQgcGFyYW1zOiBhbnkgPSB7XG4gICAgICAgICAgICBtb2JpbGU6IHBob25lLFxuICAgICAgICAgICAgc21zdHlwZTogc3RhdGUsIC8vMOazqOWGjDHmib7lm57lr4bnoIEy5Lqk5piT5a+G56CBM+mHjee9ruWvhueggVxuICAgICAgICAgICAgcmVnaW9uOiBhcmVhQ29kZSxcbiAgICAgICAgICAgIFVzZXJJZDogXCJcIlxuICAgICAgICB9XG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtcykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDEpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMSk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHRDb2RlID0gYnV0LmdldENoaWxkKFwiY29kZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9IDYwO1xuICAgICAgICAgICAgICAgIHRleHRDb2RlLnRleHQgPSA2MCArICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb2RlLS07XG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2RlLnRleHQgPSBjb2RlICsgJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEsIDU5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIumpl+itieeivOeZvOmAgeWkseaVl1wiKTtcbiAgICAgICAgICAgICAgICBidXQuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLpqZforYnnorznmbzpgIHlpLHmlZdcIik7XG4gICAgICAgICAgICBidXQuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoq5Y+R6YCB6aqM6K+B56CBICovXG4gICAgcHJpdmF0ZSBzZW5kRW1haWxDb2RlKGV2ZW50OiBmZ3VpLkV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tXCIsIGV2ZW50LnRhcmdldC4kZ29iaik7XG4gICAgICAgIGxldCBidXQgPSA8Zmd1aS5HQnV0dG9uPmV2ZW50LnRhcmdldC4kZ29iajtcblxuICAgICAgICBsZXQgY29udHJvbGxlciA9IGJ1dC5nZXRDb250cm9sbGVyKFwidHlwZVwiKTtcbiAgICAgICAgYnV0LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGVtYWlsOiBzdHJpbmcgPSAnJztcbiAgICAgICAgbGV0IHN0YXRlOiBzdHJpbmc7XG4gICAgICAgIGlmICh0aGlzLnVpX2VtYWlsUmVnaXN0ZXIudmlzaWJsZSkge1xuICAgICAgICAgICAgZW1haWwgPSB0aGlzLnVpX2VtYWlsUmVnQWNjb3VudC50ZXh0O1xuICAgICAgICAgICAgc3RhdGUgPSAnMCc7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy51aV9lbWFpbEZvcmdldFB3ZC52aXNpYmxlKSB7XG4gICAgICAgICAgICBlbWFpbCA9IHRoaXMudWlfZW1haWxGb3JnZXROdW0udGV4dDtcbiAgICAgICAgICAgIHN0YXRlID0gJzEnO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxldCBpc3Bob25lID0gdGhpcy5pc1Bob25lKHBob25lKTtcbiAgICAgICAgLy8gaWYgKCFpc3Bob25lKSB7XG4gICAgICAgIC8vICAgICBDb21tb25DdHIuaW5zdGFuY2UuU2hvd1RpcExhYmVsKFwi5omL5qmf6Jmf56K85LiN5q2j56K6LOiri+mHjeaWsOi8uOWFpSFcIik7XG4gICAgICAgIC8vICAgICBidXQuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgYm9vbCA9IHRoaXMuaXNFbWFpbChlbWFpbCk7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIuiri+i8uOWFpeato+eiuueahOmDteeuseWcsOWdgFwiKTtcbiAgICAgICAgICAgIGJ1dC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1cmwgPSBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0uYXBpQWRyZXNzICsgXCIvYXBpL0dhbWUvU2VuZG1haWxcIjtcbiAgICAgICAgY29uc29sZS5sb2coXCJTPT09PT09PVwiK3VybCtcIj09PT09PT1cIik7XG4gICAgICAgIGxldCBwYXJhbXM6IGFueSA9IHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIHNtc3R5cGU6IHN0YXRlLCAvLzDms6jlhowx5om+5Zue5a+G56CBMuS6pOaYk+WvhueggTPph43nva7lr4bnoIFcbiAgICAgICAgICAgIFVzZXJJZDogXCJcIlxuICAgICAgICB9XG4gICAgICAgIEh0dHBIZWxwRXguaW5zdGFuY2UucG9zdCh1cmwsIHBhcmFtcykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDEpIHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNldFNlbGVjdGVkSW5kZXgoMSk7XG4gICAgICAgICAgICAgICAgbGV0IHRleHRDb2RlID0gYnV0LmdldENoaWxkKFwiY29kZVwiKS5hc1RleHRGaWVsZDtcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9IDYwO1xuICAgICAgICAgICAgICAgIHRleHRDb2RlLnRleHQgPSA2MCArICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb2RlLS07XG4gICAgICAgICAgICAgICAgICAgIHRleHRDb2RlLnRleHQgPSBjb2RlICsgJyc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2V0U2VsZWN0ZWRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEsIDU5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uQ3RyLmluc3RhbmNlLlNob3dUaXBMYWJlbChcIumpl+itieeivOeZvOmAgeWkseaVl1wiKTtcbiAgICAgICAgICAgICAgICBidXQuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIENvbW1vbkN0ci5pbnN0YW5jZS5TaG93VGlwTGFiZWwoXCLpqZforYnnorznmbzpgIHlpLHmlZdcIik7XG4gICAgICAgICAgICBidXQuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8g6I635Y+Wc2VydmVybGlzdEl0ZW1cbiAgICBwdWJsaWMgZ2V0U2VydmVyTGlzdEl0ZW1CeUlEKCkge1xuICAgICAgICBsZXQgc2VydmVySWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzZXJ2ZXJpZFwiKTtcbiAgICAgICAgaWYgKHNlcnZlcklkID09PSB1bmRlZmluZWQgfHwgc2VydmVySWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIOS4jeeuoVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJRCA9IHNlcnZlcklkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJRCA9PSBcIiwgQmFzZUZyYW1lTmF0aXZlLnNlcnZlcmxpc3RJRCk7XG4gICAgICAgIGxldCBsaXN0ID0gQmFzZUZyYW1lTmF0aXZlLnNlcnZlckxpc3Quc2VydmVybGlzdDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGxpc3RbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKGRhdGEuaWR4ID09IEJhc2VGcmFtZU5hdGl2ZS5zZXJ2ZXJsaXN0SUQpIHtcbiAgICAgICAgICAgICAgICBCYXNlRnJhbWVOYXRpdmUuc2VydmVybGlzdEl0ZW0gPSBkYXRhO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==
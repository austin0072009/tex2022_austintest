import { AudioManager } from "../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../Script/BaseFrame/CommonCtr";
import CommonView from "../../../Script/BaseFrame/CommonView";
import { PublicMethods } from "../../../Script/BaseFrame/PublicMethods";
import { SceneManager } from "../../../Script/BaseFrame/SceneManager";
import StatusbarView from "../../../Script/BaseFrame/StatusbarView";
import ViewBase from "../../../Script/BaseFrame/ViewBase";
import { WebSocketManager } from "../../../Script/BaseFrame/WebSocketManager";
import HttpHelpEx from "../../../Script/Common/Managers/HttpHelpEx";
import { ToolsEx } from "../../../Script/Common/ToolsEx";
import { UIUtil } from "../../../Script/Common/UIUtil";
import { AppConst } from "../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../Script/BaseFrameNative";
import { GameCommon } from "../GameCommon";
import NativeMethod from "../NativeMethod";
import { LoginViewCtr } from "./LoginViewCtr";
import { LanguageConfig } from "../Lobby/LanguageConfig";
import { MgrNative } from "../../../Script/MgrNative";


const { ccclass, property } = cc._decorator;
@ccclass
export default class LoginView extends ViewBase {
    protected get needProcess(): boolean {
        return true;
    }
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Login/login";
    }
    protected get componentName(): string {
        return "LoginPanel";
    }

    @property(cc.Node)
    animationNode: cc.Node = null;

    private loginTimer: NodeJS.Timeout = null;

    onLoad() {
        this.animationNode.active = false;
        NativeMethod.changeOrientationH(false);

        let languageType = cc.sys.localStorage.getItem("languageType");
        let filename: string;
        console.log("languageType == ", languageType);
        if (languageType) {
            AppConst["languageType"] = +languageType;
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

        } else {
            AppConst["languageType"] = 2;
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
        let bundle = cc.assetManager.getBundle("gameHall");
        bundle.load(`/res/language/${filename}`, (err, data: any) => {
            if (err) {
                cc.log("语言文件加载失败");
                fgui.addLoadHandler();
                fgui.GRoot.create();
                super.onLoad();
                return;
            }
            fgui.UIPackage.setStringsSource(data.text);
            fgui.addLoadHandler();
            fgui.GRoot.create();
            super.onLoad();
        })
    }

    private tipview: CommonView;
    /**----------------------------------------------------------------- */
    private ui_view_node: fgui.GGroup = null;
    private ui_logo_Animation: fgui.GMovieClip = null;
    /**注册按钮 */
    private ui_btn_register: fgui.GButton = null;

    /**手机注册 */
    private ui_phoneRegister: fgui.GComponent = null;
    /**邮箱注册 */
    private ui_emailRegister: fgui.GComponent = null;
    /**手机注册关闭 */
    private ui_btn_closePhoneReg: fgui.GButton = null;
    /**邮箱注册关闭 */
    private ui_btn_closeEmailReg: fgui.GButton = null;

    /**忘记密码按钮 */
    private ui_btn_forgetPwd: fgui.GButton = null;

    /**手机忘记密码 */
    private ui_phoneForgetPwd: fgui.GComponent = null;
    /**邮箱忘记密码 */
    private ui_emailForgetPwd: fgui.GComponent = null;
    /**关闭 */
    private ui_btn_closePhoneForgetPwd: fgui.GButton = null;
    private ui_btn_closeEmailForgetPwd: fgui.GButton = null;

    /**手机注册界面的邮箱注册 */
    private ui_btn_EmailRegInPhone: fgui.GButton = null;
    private ui_btn_PhoneRegInEmail: fgui.GButton = null;

    /**手机忘记密码界面的邮箱忘记 */
    private ui_btn_emailForgetPwdInPhone: fgui.GButton = null;
    private ui_btn_phoneForgetPwdInEmail: fgui.GButton = null;

    /**语言按钮 */
    private ui_btn_language: fgui.GButton = null;
    private ui_setLanguage: fgui.GComponent = null;
    private ui_btn_closeLanguage: fgui.GButton = null;


    private ui_btn_serviceLogin: fgui.GButton = null;

    /**账号输入框 */
    private ui_account: fgui.GTextInput = null;
    /**邮箱账户 */
    private ui_emailAccount: fgui.GTextInput = null;
    /**密码输入框 */
    private ui_password: fgui.GTextInput = null;
    /**登陆按钮 */
    private ui_btn_login: fgui.GButton = null;
    private ui_phoneAreacode: fgui.GComboBox = null;

    /**记住密码按钮 */
    private ui_btn_remerpwd: fgui.GButton = null;

    private loginTypeController: fgui.Controller;

    /**手机注册 */
    private ui_phoneRegAccount: fgui.GTextInput = null;
    private ui_phoneRegCode: fgui.GTextInput = null;
    private ui_phoneRegPwd: fgui.GTextInput = null;
    private ui_phoneRegComPwd: fgui.GTextInput = null;
    private ui_btn_sendCode: fgui.GButton = null;
    private ui_btn_phoneRegConfirm: fgui.GButton = null;
    private ui_regPhoneAreacode: fgui.GComboBox = null;

    /**邮箱注册 */
    private ui_emailRegAccount: fgui.GTextInput = null;
    private ui_emailRegCode: fgui.GTextInput = null;
    private ui_emailRegPwd: fgui.GTextInput = null;
    private ui_emailRegComPwd: fgui.GTextInput = null;
    private ui_btn_sendCodeEmail: fgui.GButton = null;
    private ui_btn_emailRegConfirm: fgui.GButton = null;

    /**手机找回密码 */
    private ui_phoneForgetNum: fgui.GTextInput = null;
    private ui_phoneForgetCode: fgui.GTextInput = null;
    private ui_phoneForgetNewPwd: fgui.GTextInput = null;
    private ui_phoneForgetNewPwdCom: fgui.GTextInput = null;
    private ui_btn_phoneForgetCode: fgui.GButton = null;
    private ui_btn_phoneForgetConfirm: fgui.GButton = null;
    private ui_ForgetPhoneAreacode: fgui.GComboBox = null;


    /**邮箱找回密码 */
    private ui_emailForgetNum: fgui.GTextInput = null;
    private ui_emailForgetCode: fgui.GTextInput = null;
    private ui_emailForgetNewPwd: fgui.GTextInput = null;
    private ui_emailForgetNewPwdCom: fgui.GTextInput = null;
    private ui_btn_emailForgetCode: fgui.GButton = null;
    private ui_btn_emailForgetConfirm: fgui.GButton = null;

    private languageController: fgui.Controller;

    private ui_confirmsetLanguage: fgui.GComponent = null;
    /**确定选择语言 */
    private ui_btn_confirmLanguage: fgui.GButton = null;
    /**取消选择语言 */
    private ui_btn_cancelLanguage: fgui.GButton = null;

    /**版本号 */
    private ui_ver: fgui.GTextField = null;

    /**創建角色 */
    private ui_role: fgui.GComponent = null;
    private ui_btn_closehead: fgui.GButton = null;
    private ui_nickname: fgui.GTextInput = null;
    private ui_btn_sendinfo: fgui.GButton = null;
    private ui_head: fgui.GComponent = null;
    private ui_headList: fgui.GList = null;
    private headLoader: fgui.GLoader = null;
    private ui_listGroup: fgui.GGroup = null;

    private ui_changeserver: fgui.GComponent = null;
    private ui_btn_change: fgui.GButton = null;
    private ui_serverid: fgui.GTextField = null;

    private ui_loadingNodeGroup: fgui.GGroup = null;
    private ui_loadingLabel: fgui.GTextField = null;
    private ui_loading: fgui.GGroup = null;
    private ui_loadingPic: fgui.GImage = null;
    private ui_logoIcon: fgui.GImage = null;

    private touchTime: number = 0;

    private headName: string = "user_1.png";
    public ui_nicknamecf: fgui.GTextField = null;


    /**語言 */
    private ui_btn_ftzw: fgui.GButton = null;
    private ui_btn_jtzw: fgui.GButton = null;
    private ui_btn_yinyu: fgui.GButton = null;
    private ui_btn_ry: fgui.GButton = null;
    private ui_yuyanque: fgui.GRichTextField = null;
    private ui_btn_breakw: fgui.GButton = null;

    private ui_logoParent: fgui.GLoader = null;

    public isCanTouch: boolean = true;

    createChildComponents(): void {
        super.createChildComponents();
        console.log("---createChildComponents---");
        this.getServerListItemByID(); //根据id获取连接的服务器
    }

    allChildCreated(): void {
        super.allChildCreated();
        console.log("---allChildCreated---");
    }

    OnLoadCompleted() {
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

        // cc.game.setFrameRate(30);
        this.isCanTouch = true;
        this.ui_view_node.visible = false;
        this.ui_logoIcon.visible = false;

        fgui.GRoot.inst.addChild(this.fguiComponent);
        // this.fguiComponent.makeFullScreen();
        PublicMethods.screenFit(this.fguiComponent);
        // this.fguiComponent.node.opacity = 0;
        LoginViewCtr.instance.view = this;

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

        this.ui_btn_serviceLogin.onClick(() => {
            AudioManager.Singleton.play('LoginView', "button");
            UIUtil.kefuFunction(this.openWebsite.bind(this));
        }, this)

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

        this.ui_ver.setVar("ver", BaseFrameNative.VERSION).flushVars();
        this.ui_btn_closehead.onClick(this.closeHead, this);
        this.ui_head.onClick(this.showHead, this);
        this.ui_headList.setVirtual();
        this.ui_headList.itemRenderer = this.renderListItem.bind(this);
        this.ui_headList.on(fgui.Event.CLICK_ITEM, this.onclickItem, this);
        this.headLoader = this.ui_head.getChild("headLoader").asLoader;
        this.ui_btn_sendinfo.onClick(this.sendRoleInfo, this);

        this.loadSounds();
        let state = this.addFguiComponent(StatusbarView, false);
        state.fguiY = 10;
        this.tipview = this.addFguiComponent(CommonView);
        this.fguiComponent.node.runAction(cc.fadeIn(0.5))
        this.readLocal();

        this.ui_serverid.visible = BaseFrameNative.serverlistItem.status == 0;
        this.ui_serverid.text = BaseFrameNative.serverlistID + "";
        this.ui_changeserver.visible = false;
        this.ui_btn_change.on(fgui.Event.TOUCH_BEGIN, () => {
            this.touchTime = new Date().getTime();
            this.schedule(this.showSecretWindow, 1);
        })
        this.ui_btn_change.on(fgui.Event.TOUCH_END, () => {
            this.unschedule(this.showSecretWindow);
        })

        this.ui_changeserver.getChild("cancel").onClick(() => {
            AudioManager.Singleton.play('LoginView', "button");
            this.ui_changeserver.visible = false;
        })
        this.ui_btn_breakw.node.zIndex = cc.macro.MAX_ZINDEX;
        this.ui_btn_breakw.onClick(() => {
            this.closeWebView();
        }, this)
        this.initChangeServer();
        this.intiWebView();
        window.closeWebView = this.closeWebView.bind(this);
        this.getPhoneAreaCode();

        // 首次打开App才需要播放动画
        if (BaseFrameNative.isOpenApp) {
            BaseFrameNative.isOpenApp = false;
            let animation = cc.instantiate(this.animationNode);
            animation.parent = this.ui_logoParent.node;
            animation.active = true;
            animation.position = cc.v3(0, 0, 0);
            animation.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            animation.getComponent(sp.Skeleton).setCompleteListener((trackEntry, loopCount) => {
                let name = trackEntry.animation ? trackEntry.animation.name : '';
                if (name === "animation") {
                    this.scheduleOnce(() => {
                        this.ui_view_node.visible = true;
                        this.isNeedAutoLogin();
                    }, 0.7)
                }
            });
        } else {
            this.ui_logoIcon.visible = true;
            this.ui_view_node.visible = true;
            this.isNeedAutoLogin();
        }
    }

    // 是否需要自动登录
    public isNeedAutoLogin() {
        // 未勾选保存密码不需要自动登录
        let state = cc.sys.localStorage.getItem("rememberPWD");
        if (state != "1") return;

        let account = cc.sys.localStorage.getItem("login_pid");
        let pwd = cc.sys.localStorage.getItem("login_pwd");
        if (account && account != "" && pwd && pwd != "" && GameCommon.isAutoLogin) {
            GameCommon.isAutoLogin = false;
            this.sendLogin(false);
        }
    }

    // 获取手机区号
    public getPhoneAreaCode() {
        let self = this;
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/GetAllSmsCode"
        HttpHelpEx.instance.get(url)
            .then((res) => {
                console.log("---GetAllSmsCode---", res);
                if (res.code == 1) {
                    GameCommon.allSmsCode = res.data;
                    self.initAreaCodeList(res.data);
                } else {
                    CommonCtr.instance.view.ShowTipLabel("获取手机区号信息失败");
                }
            })
    }

    // 初始化区号列表
    public initAreaCodeList(data) {
        let areacodeList: string[] = [];
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
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
    }

    private webView: cc.WebView;
    public intiWebView() {
        let node = this.getChild("webview").asLoader.node;
        this.webView = node.addComponent(cc.WebView);
        let webviewEventHandler = new cc.Component.EventHandler();
        webviewEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        webviewEventHandler.component = "LoginView";
        webviewEventHandler.handler = "webViewEvent";
        //@ts-ignore
        this.webView.webviewEvents.push(webviewEventHandler);
        this.webView.node.active = false;
    }
    public webViewEvent(sender, event) {
        if (event === cc.WebView.EventType.LOADED) {
            console.log("-webView---loaded---finish!")
        } else if (event === cc.WebView.EventType.LOADING) {
            console.log("webView---loading")
        } else if (event === cc.WebView.EventType.ERROR) {
            console.log("webView---sender", JSON.stringify(sender));
            console.log("webView---event", event);
            // this.closeWebView();
        }
    }
    public closeWebView() {
        this.ui_btn_breakw.visible = false;
        this.webView.url = '';
        this.webView.node.active = false;
    }
    /**打開網頁 */
    public openWebsite(url: string) {
        this.ui_btn_breakw.visible = true;
        this.webView.node.active = true;
        this.webView.url = url;
    }


    public loadSounds() {
        let abbf = cc.assetManager.getBundle("gameHall");
        abbf.loadDir("res/Sounds", cc.AudioClip, function (err, clips) {
            for (let i = 0; i < clips.length; i++) {
                AudioManager.Singleton.add(clips[i].name, clips[i]);
            }
            AudioManager.Singleton.playBGM("bgmusic");

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
            AudioManager.Singleton.setSoundStatus(AudioManager.TexasMusicStatus ? "open" : "close");
            AudioManager.Singleton.setEffectStatus(AudioManager.TexasEffectStatus ? "open" : "close");
        });
    }
    //显示命令窗口
    public showSecretWindow() {
        let endtime = new Date().getTime();
        console.log(endtime - this.touchTime);
        if (endtime - this.touchTime > 10000) {
            this.unschedule(this.showSecretWindow);
            let inputUI = this.ui_changeserver.getChild("secretInput").asTextInput;
            inputUI.text = "";
            this.ui_changeserver.visible = true;
        }
    }

    //初始化切换服务器页面
    public initChangeServer() {
        let inputUI = this.ui_changeserver.getChild("secretInput").asTextInput;
        this.ui_changeserver.getChild("btn_sure").onClick(() => {
            let input = inputUI.text;
            if (input == "") {
                CommonCtr.instance.view.ShowTipLabel("请输入正确的命令");
            } else {
                this.changeServer(input);
            }
        })
    }

    //切换服务器
    public changeServer(secret: string) {
        let key = BaseFrameNative.defaultServerList.key;
        if (secret.indexOf(key) != -1) {
            let serverid = secret.substring(secret.indexOf(key) + key.length);
            console.log("serverid === ", serverid);
            let list = BaseFrameNative.serverList.serverlist;
            for (let index = 0; index < list.length; index++) {
                let data = list[index];
                if (data.idx == serverid) {
                    this.ui_serverid.text = serverid + "";
                    BaseFrameNative.serverlistID = serverid;
                    BaseFrameNative.serverlistItem = data;
                    this.ui_serverid.visible = BaseFrameNative.serverlistItem.status == 0;
                    this.ui_changeserver.visible = false;
                    CommonCtr.instance.view.ShowTipLabel("切换服务器配置成功");
                    cc.sys.localStorage.setItem("serverid", serverid);
                    return;
                }
            }
            CommonCtr.instance.view.ShowTipLabel("未找到配置的服务器");
        } else {
            CommonCtr.instance.view.ShowTipLabel("输入的秘钥不正确");
        }
    }

    public deleteHeadIcons: number[] = [21, 22, 23, 24, 25, 26, 27, 28];
    private closeHead() {
        // 需要断开连接
        WebSocketManager.getInstance.DisConnect();
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_role.visible = false;
    }
    public showRolePanel() {
        UIUtil.loadImage(this.headLoader, "/fordlc/wechat/user_1.png");
        this.ui_role.visible = true;
        this.ui_headList.numItems = 59;
        this.ui_nicknamecf.visible = false;
    }
    private showHead() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_listGroup.visible = !this.ui_listGroup.visible;
    }

    public renderListItem(index: number, obj: fgui.GObject) {
        let item = <fgui.GComponent>obj;
        let loader = item.getChild("headLoader").asLoader;
        if (this.isDeleteHeadIcon(index + 1)) return;
        UIUtil.loadImage(loader, "/fordlc/wechat/user_" + (index + 1) + ".png");
        item.name = "user_" + (index + 1) + '.png';
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

    private onclickItem(item) {
        AudioManager.Singleton.play('LoginView', "button");
        let loader = item.getChild("headLoader").asLoader;
        this.headLoader.url = loader.url;
        this.headName = item.name;
        this.ui_listGroup.visible = false;
    }

    public sendRoleInfo() {
        AudioManager.Singleton.play('LoginView', "button");
        let userName = this.ui_nickname.text;
        if (!userName) {
            CommonCtr.instance.ShowTipLabel("請輸入昵稱");
            return;
        }
        LoginViewCtr.instance.cs_create1005(LoginViewCtr.instance.Model.userid + "", "1", userName, this.headName);
    }
    private controChanged() {
        AudioManager.Singleton.play('LoginView', "button");
        if (this.loginTypeController.selectedIndex == 0) { //手机
            if (this.ui_account.text == '') {
                this.ui_password.text = '';
            } else {
                let pwd = cc.sys.localStorage.getItem("login_pwd");
                this.ui_password.text = pwd;
            }
        } else {
            if (this.ui_emailAccount.text == '') {
                this.ui_password.text = '';
            } else {
                let pwd = cc.sys.localStorage.getItem("login_pwd");
                this.ui_password.text = pwd;
            }
        }
    }

    /**显示注册界面 */
    private showRegisterPanel() {
        AudioManager.Singleton.play('LoginView', "button");
        let index = this.fguiComponent.getController("type").selectedIndex;
        if (index == 0) {
            this.ui_phoneRegister.visible = true;
            // this.ui_btn_sendCode.getController("type").setSelectedIndex(0);
            //  this.ui_btn_sendCode.enabled = true;
        } else {
            this.ui_emailRegister.visible = true;
        }
    }

    public colsePhonePanel() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneRegister.visible = false;
    }
    public colseEmailPanel() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_emailRegister.visible = false;
    }
    private openEmailReg() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneRegister.visible = false;
        this.ui_emailRegister.visible = true;
    }
    private openPhoneReg() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneRegister.visible = true;
        this.ui_emailRegister.visible = false;
    }

    /**显示忘记密码界面 */
    public showForgetPanel() {
        AudioManager.Singleton.play('LoginView', "button");
        let index = this.fguiComponent.getController("type").selectedIndex;
        if (index == 0) {
            this.ui_phoneForgetPwd.visible = true;
        } else {
            this.ui_emailForgetPwd.visible = true;
        }
    }
    private colsePhoneForgetPwd() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneForgetPwd.visible = false;
    }
    private colseEmailForgetPwd() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_emailForgetPwd.visible = false;
    }
    private openEmailForget() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneForgetPwd.visible = false;
        this.ui_emailForgetPwd.visible = true;
        this.ui_phoneForgetCode.text = "";
        this.ui_emailForgetCode.text = "";
    }
    private openPhoneForget() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_phoneForgetPwd.visible = true;
        this.ui_emailForgetPwd.visible = false;
        this.ui_phoneForgetCode.text = "";
        this.ui_emailForgetCode.text = "";
    }

    /**显示语言*/
    private showChooseLanguage() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_setLanguage.visible = true;
    }
    private closeLanguage() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_setLanguage.visible = false;
    }

    /**发送登录 */
    private sendLogin(playSound: boolean = true) {
        if (playSound) {
            AudioManager.Singleton.play('LoginView', "button");
        }
        if (!this.isCanTouch) {
            return;
        }
        this.isCanTouch = false;
        let account: string;
        let password: string = this.ui_password.text;
        if (this.loginTypeController.selectedIndex == 0) {//手機
            account = this.ui_account.text;
        } else {//郵箱
            account = this.ui_emailAccount.text;
            if (!this.isEmail(account)) {
                this.isCanTouch = true;
                CommonCtr.instance.ShowTipLabel("請輸入正確的郵箱賬號");
                return;
            }
        }
        if (account == "" || password == "" || password.length < 6) {
            this.isCanTouch = true;
            CommonCtr.instance.ShowTipLabel("账号或密码格式不正确");
            return;
        }
        LoginViewCtr.instance.Model.mPid = account;
        LoginViewCtr.instance.Model.mPwd = password;
        let pwd = ToolsEx.Singleton.EncryptionPWD(password);
        LoginViewCtr.instance.LogintoFishLevel(account, pwd);

        // 0.5S没登上 显示laoding
        this.ui_loadingNodeGroup.asCom.visible = true;
        // this.ui_loadingLabel.visible = false;
        this.ui_loading.asCom.visible = false;
        this.scheduleOnce(() => {
            this.showLoginLoading();
        }, 0.5)
    }

    public showLoginLoading() {
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
            .start()

        if (!this.loginTimer) {
            this.loginTimer = setTimeout(() => {
                console.log("--- time out ---");
                this.ui_loadingNodeGroup.asCom.visible = false;
                this.ui_loading.asCom.visible = false;
                CommonCtr.instance.view.ShowTipLabel(LanguageConfig.getLanguageById(10001));
                this.isCanTouch = true;
                this.loginTimer = null;
            }, 10000);
        }
    }

    public loginSuccess() {
        if (this.loginTimer) {
            console.log("clearTimeout this.loginTimer");
            clearTimeout(this.loginTimer);
            this.loginTimer = null;
        }
        this.isCanTouch = true;
        this.ui_loadingNodeGroup.asCom.visible = false;
    }


    /**发送手机注册 */
    private phoneRegisterConfirm() {
        AudioManager.Singleton.play('LoginView', "button");
        let phone = this.ui_phoneRegAccount.text;
        if (!phone ||
            !this.ui_phoneRegPwd.text || !this.ui_phoneRegComPwd.text || !this.ui_phoneRegCode.text
        ) {
            CommonCtr.instance.ShowTipLabel("请填写完整的信息");
            return;
        }
        if (this.ui_phoneRegPwd.text != this.ui_phoneRegComPwd.text) {
            CommonCtr.instance.ShowTipLabel("两次输入的密码不一致");
            return;
        }
        if (!this.isPhone(phone)) {
            CommonCtr.instance.ShowTipLabel("请输入正确的手机号");
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
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/RegUser";
        let params = {
            mobile: phone,
            smscode: this.ui_phoneRegCode.text,
            password: this.ui_phoneRegPwd.text
        }
        console.log("/api/Game/RegUser 11== ", url);
        HttpHelpEx.instance.post(url, params).then((res) => {
            console.log("/api/Game/RegUser 22=== ", res.code);
            if (res.code == 1) {
                CommonCtr.instance.ShowTipLabel("注册成功");
                this.ui_phoneRegister.visible = false;
            } else {
                CommonCtr.instance.ShowTipLabel(res.message);
            }
        }).catch((err) => {
            console.log("hhhhhhhhhhh---", err);
            CommonCtr.instance.ShowTipLabel("11注册失败");
        })
    }

    /**发送邮箱注册 */
    private emailRegisterConfirm() {
        AudioManager.Singleton.play('LoginView', "button");
        if (!this.ui_emailRegAccount.text || !this.ui_emailRegCode.text ||
            !this.ui_emailRegPwd.text || !this.ui_emailRegComPwd.text
        ) {
            CommonCtr.instance.ShowTipLabel("請填寫完整的信息");
            return;
        }
        if (this.ui_emailRegPwd.text != this.ui_emailRegComPwd.text) {
            CommonCtr.instance.ShowTipLabel("兩次輸入的密碼不一致");
            return;
        }
        let bool = this.isEmail(this.ui_emailRegAccount.text);
        if (!bool) {
            CommonCtr.instance.ShowTipLabel("請輸入正確的郵箱地址");
            return;
        }
        // let url = `${BaseFrameNative.serverlistItem.apiAdress}/api/Game/RegGameUser?account=${this.ui_emailRegAccount.text}&password=${this.ui_emailRegPwd.text}`;
        // HttpHelpEx.instance.get(url).then(() => {
        //     CommonCtr.instance.ShowTipLabel("注册成功")
        // }).catch(() => {
        //     CommonCtr.instance.ShowTipLabel("注册失败")
        // });
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/RegUser";
        let params = {
            mobile: this.ui_emailRegAccount.text,
            smscode: this.ui_emailRegCode.text,
            password: this.ui_emailRegPwd.text
        }
        HttpHelpEx.instance.post(url, params).then((res) => {
            console.log("/api/Game/RegUser == ", res);
            if (res.code == 1) {
                CommonCtr.instance.ShowTipLabel("注册成功");
                this.ui_phoneRegister.visible = false;
                this.ui_emailRegister.visible = false;
            } else {
                CommonCtr.instance.ShowTipLabel(res.message);
            }
        }).catch((err) => {
            CommonCtr.instance.ShowTipLabel("22注册失败");
        })
    }

    /**手机找回密码 */
    private phoneFindPwd() {
        AudioManager.Singleton.play('LoginView', "button");

        let phone = this.ui_phoneForgetNum.text;
        let newpwd = this.ui_phoneForgetNewPwd.text;
        let newpwd2 = this.ui_phoneForgetNewPwdCom.text;
        let code = this.ui_phoneForgetCode.text;

        if (!phone || !newpwd || !newpwd2 || !code) {
            CommonCtr.instance.ShowTipLabel("请填写完整的信息");
            return;
        }
        if (newpwd != newpwd2) {
            CommonCtr.instance.ShowTipLabel("两次输入的密码不一致");
            return;
        }
        if (!this.isPhone(phone)) {
            CommonCtr.instance.ShowTipLabel("请输入正确的手机号");
            return;
        }
        let url = `${BaseFrameNative.serverlistItem.apiAdress}/api/Game/ChangePassWord`;
        let params = {
            phone: phone,
            verifyCode: code,
            password: newpwd
        }
        HttpHelpEx.instance.post(url, params).then(() => {
            CommonCtr.instance.ShowTipLabel("密码修改成功")
            this.ui_phoneForgetPwd.visible = false;
            this.ui_emailForgetPwd.visible = false;
        }).catch(() => {
            CommonCtr.instance.ShowTipLabel("密码修改失败")
        })
    }

    /**邮箱找回密码 */
    private emailFindPwd() {
        AudioManager.Singleton.play('LoginView', "button");

        let email = this.ui_emailForgetNum.text;
        let newpwd = this.ui_emailForgetNewPwd.text;
        let newpwd2 = this.ui_emailForgetNewPwdCom.text;
        let code = this.ui_emailForgetCode.text;

        if (!email || !newpwd || !newpwd2 || !code) {
            CommonCtr.instance.ShowTipLabel("请填写完整的信息");
            return;
        }
        if (newpwd != newpwd2) {
            CommonCtr.instance.ShowTipLabel("两次输入的密码不一致");
            return;
        }
        if (!this.isEmail(email)) {
            CommonCtr.instance.ShowTipLabel("请输入正确的邮箱地址");
            return;
        }
        let url = `${BaseFrameNative.serverlistItem.apiAdress}/api/Game/ChangePassWord`;
        let params = {
            phone: email,
            verifyCode: code,
            password: newpwd
        }
        HttpHelpEx.instance.post(url, params).then(() => {
            CommonCtr.instance.ShowTipLabel("密码修改成功")
            this.ui_phoneForgetPwd.visible = false;
            this.ui_emailForgetPwd.visible = false;
        }).catch(() => {
            CommonCtr.instance.ShowTipLabel("密码修改失败")
        })
    }

    /**点击语言 */
    private languageChanged() {
        AudioManager.Singleton.play('LoginView', "button");
        let index = this.languageController.selectedIndex;
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
    }
    /**确定选择语言 */
    public changedLanguage() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_confirmsetLanguage.visible = false;
        let index = this.languageController.selectedIndex;
        if (AppConst.languageType == index) { //切換相同的語言
            return;
        }
        if (index == 3 || index == 4) {
            CommonCtr.instance.view.ShowTipLabel("暫無相關語言");
            return;
        }
        AppConst.languageType = index;
        cc.sys.localStorage.setItem("languageType", AppConst.languageType + '');
        fgui.UIPackage.removePackage(this.packageName);
        GameCommon.loadScene("gameHall", "login");
    }
    /**取消选择语言 */
    public canceLanguage() {
        AudioManager.Singleton.play('LoginView', "button");
        this.ui_confirmsetLanguage.visible = false;
        this.languageController.selectedIndex = 0;
    }

    /**登录成功 */
    public cleanEvent() {
        this.savePassword();
        this.unscheduleAllCallbacks();
        AudioManager.Singleton.stopBGM();
        console.log("--- login success to lobby ---");
        SceneManager.Singleton.loadScene("gameHall", "lobby");
    }
    onDestroy() {
        if (this.loginTimer) {
            console.log("clearTimeout this.loginTimer");
            clearTimeout(this.loginTimer);
            this.loginTimer = null;
        }
        fgui.UIPackage.removePackage("res/Login/login");
        this.node.destroyAllChildren();
        super.onDestroy();
    }

    /**记住密码 时存密码 */
    public savePassword() {
        if (this.ui_btn_remerpwd.selected) {
            if (this.loginTypeController.selectedIndex == 0) {//手機
                cc.sys.localStorage.setItem("loginType", '0');
            } else {//郵箱
                cc.sys.localStorage.setItem("loginType", '1');
            }
            cc.sys.localStorage.setItem("rememberPWD", "1");
        } else {
            cc.sys.localStorage.setItem("rememberPWD", "0");
        }

    }
    /**获取记住密码的信息 */
    public readLocal() {
        let state = cc.sys.localStorage.getItem("rememberPWD");
        if (state == "1") {//记住了密码的
            this.ui_btn_remerpwd.selected = true;
            let type = cc.sys.localStorage.getItem("loginType"); //登录的方式
            let account = cc.sys.localStorage.getItem("login_pid");
            let pwd = cc.sys.localStorage.getItem("login_pwd");
            if (type == '0') { //手机登录
                this.loginTypeController.setSelectedIndex(0);
                this.ui_account.text = account;
            } else {
                this.loginTypeController.setSelectedIndex(1);
                this.ui_emailAccount.text = account;
            }
            this.ui_password.text = pwd;
        }
    }

    /**手机验证 */
    public isPhone(phone: string) {
        if (phone == "") {
            return false;
        }
        // 手机号码第一位是[1]开头，第二位[3,4,5,7,8]中的一位，第三位到第十一位则是[0-9]中的数字；
        //^1表示开头为1
        //[3|4|5|7|8] 表示3、4、5、7、8中的一位数值
        //[0-9]{9} 匹配包含0-9的数字
        let reg = /^1[3|4|5|7|8|9][0-9]{9}/;
        if (reg.test(phone)) {
            return true;//手机号码正确
        }
        return false;
    }
    /**判斷是否是郵箱 */
    public isEmail(email: string) {
        if (email == "") {
            return false;
        }
        let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (reg.test(email)) {
            return true;//郵箱号码正确
        }
        return false;
    }

    /**发送验证码 */
    private GetVerifyCode(event: fgui.Event) {
        console.log("------------", event.target.$gobj);
        let but = <fgui.GButton>event.target.$gobj;

        let controller = but.getController("type");
        but.enabled = false;
        let phone: string = '';
        let state: string;
        if (this.ui_phoneRegister.visible) { //手機注冊
            phone = this.ui_phoneRegAccount.text;
            state = '0';
        } else if (this.ui_phoneForgetPwd.visible) { //手機忘記密碼
            phone = this.ui_phoneForgetNum.text;
            state = '1';
        }
        let isphone = this.isPhone(phone);
        if (!isphone) {
            CommonCtr.instance.ShowTipLabel("手機號碼不正確,請重新輸入!");
            but.enabled = true;
            return;
        }

        let areaCode = this.ui_regPhoneAreacode.text;
        console.log("areaCode == ", areaCode);
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/SendSMS";
        let params: any = {
            mobile: phone,
            smstype: state, //0注册1找回密码2交易密码3重置密码
            region: areaCode,
            UserId: ""
        }
        HttpHelpEx.instance.post(url, params).then((res) => {
            console.log(res);
            if (res.code == 1) {
                controller.setSelectedIndex(1);
                let textCode = but.getChild("code").asTextField;
                let code = 60;
                textCode.text = 60 + '';
                this.schedule(() => {
                    code--;
                    textCode.text = code + '';
                    if (code == 0) {
                        controller.setSelectedIndex(0);
                        but.enabled = true;
                    }
                }, 1, 59);
            } else {
                CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
                but.enabled = true;
            }
        }).catch(() => {
            CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
            but.enabled = true;
        })
    }

    /**发送验证码 */
    private sendEmailCode(event: fgui.Event) {
        console.log("------------", event.target.$gobj);
        let but = <fgui.GButton>event.target.$gobj;

        let controller = but.getController("type");
        but.enabled = false;
        let email: string = '';
        let state: string;
        if (this.ui_emailRegister.visible) {
            email = this.ui_emailRegAccount.text;
            state = '0';
        } else if (this.ui_emailForgetPwd.visible) {
            email = this.ui_emailForgetNum.text;
            state = '1';
        }
        // let isphone = this.isPhone(phone);
        // if (!isphone) {
        //     CommonCtr.instance.ShowTipLabel("手機號碼不正確,請重新輸入!");
        //     but.enabled = true;
        //     return;
        // }

        let bool = this.isEmail(email);
        if (!bool) {
            CommonCtr.instance.ShowTipLabel("請輸入正確的郵箱地址");
            but.enabled = true;
            return;
        }

        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Sendmail";
        console.log("S======="+url+"=======");
        let params: any = {
            email: email,
            smstype: state, //0注册1找回密码2交易密码3重置密码
            UserId: ""
        }
        HttpHelpEx.instance.post(url, params).then((res) => {
            console.log(res);
            if (res.code == 1) {
                controller.setSelectedIndex(1);
                let textCode = but.getChild("code").asTextField;
                let code = 60;
                textCode.text = 60 + '';
                this.schedule(() => {
                    code--;
                    textCode.text = code + '';
                    if (code == 0) {
                        controller.setSelectedIndex(0);
                        but.enabled = true;
                    }
                }, 1, 59);
            } else {
                CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
                but.enabled = true;
            }
        }).catch(() => {
            CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
            but.enabled = true;
        })
    }

    // 获取serverlistItem
    public getServerListItemByID() {
        let serverId = cc.sys.localStorage.getItem("serverid");
        if (serverId === undefined || serverId === null) {
            // 不管
        } else {
            BaseFrameNative.serverlistID = serverId;
        }
        console.log("BaseFrameNative.serverlistID == ", BaseFrameNative.serverlistID);
        let list = BaseFrameNative.serverList.serverlist;
        for (let index = 0; index < list.length; index++) {
            let data = list[index];
            if (data.idx == BaseFrameNative.serverlistID) {
                BaseFrameNative.serverlistItem = data;
                break;
            }
        }
    }
}
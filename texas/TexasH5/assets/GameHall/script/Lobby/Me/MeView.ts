import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import { PlayerPrefs, UIUtil } from "../../../../Script/Common/UIUtil";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { LoginViewCtr } from "../../Login/LoginViewCtr";
import NativeMethod from "../../NativeMethod";
import { sc_getemaillist } from "../LobbyNetData";
import LobbyViewCtr from "../LobbyViewCtr";


export default class MeView extends fgui.GComponent {

    private gold: fgui.GTextField;
    /**充值 */
    private btn_cz: fgui.GButton;
    /**转账 */
    private btn_zz: fgui.GButton;
    /**提现 */
    private btn_tx: fgui.GButton;
    /**福利 */
    private btn_fl: fgui.GButton;
    private btn_eye: fgui.GButton;
    /**设置 */
    private btn_setting: fgui.GButton;
    /**社区 */
    private btn_shequ: fgui.GButton;

    private btn_redPacket: fgui.GButton = null;

    /**id */
    private userid: fgui.GTextField;
    /**昵稱 */
    private userName: fgui.GTextField;
    /**vip controller */
    private VipController: fgui.Controller;

    /**複製id按鈕 */
    private btn_copyId: fgui.GButton;

    /**編輯 */
    private btn_Exid: fgui.GButton;

    private meVip: fgui.GComponent;

    /**頭像 */
    private headLoader: fgui.GLoader;
    private head: fgui.GComponent;
    private btn_share: fgui.GButton;
    /**生涯 */
    private btn_mysY: fgui.GButton;

    private allbtnCom: fgui.GComponent;

    /**背包 */
    private btn_beibao: fgui.GButton;
    /**性別 */
    private btn_sex: fgui.GButton;

    private btn_EditName: fgui.GButton;

    private headBold: fgui.GLoader;

    private btn_flowingWater: fgui.GButton;

    private btn_vipxq: fgui.GButton;

    private walletBtn: fgui.GButton;

    protected onConstruct() {
        this.allbtnCom = this.getChild("allbtn").asCom;

        this.gold = this.getChild("megold").asTextField;
        this.btn_cz = this.getChild("n5").asButton;
        this.btn_zz = this.getChild("n8").asButton;
        this.btn_tx = this.getChild("n7").asButton;
        this.btn_eye = this.getChild("n6").asButton;
        this.btn_setting = this.allbtnCom.getChild("n14").asButton;
        this.btn_shequ = this.allbtnCom.getChild("n9").asButton;
        this.btn_share = this.allbtnCom.getChild("n12").asButton;
        this.btn_mysY = this.allbtnCom.getChild("n10").asButton;
        this.btn_beibao = this.allbtnCom.getChild("btn_beibao").asButton;
        this.btn_flowingWater = this.allbtnCom.getChild("n11").asButton;
        this.btn_redPacket = this.getChild("btn_redPacket").asButton;

        this.allbtnCom.getChild("n22").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.allbtnCom.getChild("n23").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.allbtnCom.getChild("n24").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.allbtnCom.getChild("n25").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.allbtnCom.getChild("n26").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;
        this.allbtnCom.getChild("n27").asTextField._label.cacheMode = cc.Label.CacheMode.CHAR;

        this.walletBtn = this.getChild("walletBtn").asButton;

        this.btn_fl = this.getChild("n19").asButton;
        this.btn_cz.onClick(this.showTopup, this);
        this.btn_zz.onClick(this.showTransferView, this);
        this.btn_tx.onClick(this.showWithdrawal, this);
        this.btn_fl.onClick(this.showWelfareView, this);

        this.btn_eye.onClick(this.hideGold, this);

        this.walletBtn.onClick(this.showWallet, this);

        this.btn_setting.onClick(this.showSetting, this);
        this.btn_shequ.onClick(this.showCommunity, this);
        this.btn_share.onClick(this.showShareView, this);
        this.btn_mysY.onClick(this.showCareerView, this);
        this.btn_beibao.onClick(this.showKnspsack, this);
        this.btn_flowingWater.onClick(this.showFlowingwater, this);

        this.meVip = this.getChild("mevip").asCom;
        this.VipController = this.meVip.getController("vip");
        this.userid = this.meVip.getChild("id").asTextField;
        this.userName = this.meVip.getChild("name").asTextField;
        this.btn_copyId = this.meVip.getChild("btn_copyid").asButton;
        this.btn_copyId.onClick(this.copyId, this);
        this.btn_sex = this.meVip.getChild("sex").asButton;
        this.btn_EditName = this.meVip.getChild("btn_EditName").asButton;
        this.btn_EditName.onClick(this.showEditPanel, this);
        this.btn_vipxq = this.meVip.getChild("vipxq").asButton;
        this.btn_vipxq.onClick(this.showVipPriView, this);
        this.btn_redPacket.onClick(this.showRedPacketView, this);
        this.btn_redPacket.node.scale = 0.4;
        this.btn_redPacket.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.5, 0.4 * 0.95), cc.scaleTo(0.5, 0.4 * 1.05))));

        this.head = this.meVip.getChild("head").asCom;
        this.headLoader = this.head.getChild("n0").asLoader;

        this.headBold = this.meVip.getChild("headFrame").asLoader;     // this.head.getChild("n4").asLoader;

    }
    /** 下面功能按钮的溢出时  550 为组件高 */
    public changedBtnCom(height: number) {
        let dx = height - this.allbtnCom.y;
        if (dx < 550) {
            this.allbtnCom.height = dx;
        }
    }


    /**顯示編輯界面 */
    public showEditPanel() {
        AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr.instance.view.showMyinfoView();
    }

    public initData() {
        let play = AppConst.mPlayerModel;
        // this.gold.text = (play.gold / 100) + '';
        this.userid.setVar("id", play.userid + '').flushVars();
        this.userName.text = play._n;

        // if (this.userName.width > 300) {
        //     this.btn_EditName.x = this.userName.x + this.userName.width + 70;
        //     if (this.btn_EditName.x < this.btn_copyId.x) {
        //         this.btn_EditName.x = this.btn_copyId.x;
        //     } else if (this.btn_EditName.x > 839) {
        //         this.btn_EditName.x = 839;
        //     }
        // } else {
        //     this.btn_EditName.x = this.btn_copyId.x;
        // }
        let viplv = LobbyViewCtr.instance.Model.vipLevel;
        if (viplv > 9) {
            viplv = 9;
        }
        this.VipController.selectedIndex = viplv;
        let sex = AppConst.mPlayerModel.wechat._S;
        this.btn_sex.selected = !!sex;
        this.hideGold();

        // 刷新消息
        this.refreshMessageEmail();

        // 隐藏VIP功能
        this.btn_vipxq.visible = false;
        this.VipController.selectedIndex = 10;
    }

    // 刷新消息
    public refreshMessageEmail() {
        let data: sc_getemaillist = LobbyViewCtr.instance.Model.emailInfo;
        let haveNoLook: boolean = false;
        if (data && data.emaillist.length > 0) {
            for (let index = 0; index < data.emaillist.length; index++) {
                let email = data.emaillist[index];
                let userid = LoginViewCtr.instance.Model.mPlayerModel.userid;
                let tradeno = email.tradeno;
                let lookN = PlayerPrefs.GetInt("ISLOOK" + userid + "" + tradeno, 0);
                let islook = lookN == 0 ? false : true;
                if (!islook) {
                    haveNoLook = true;
                    break;
                }
            }
        }
        LobbyViewCtr.instance.view.setFlowingRead(haveNoLook);
    }

    /**設置頭像 */
    public setHead(url: string) {
        UIUtil.loadImage(this.headLoader, url);
        this.setHeadFram();
    }
    public setHeadFram() {
        if (AppConst.mPlayerModel["headFrame"]) {
            UIUtil.loadShopImage(this.headBold, AppConst.mPlayerModel["headFrame"]);
        }
    }

    /**复制 id */
    private copyId() {
        //  iOS  CC_JSB
        AudioManager.Singleton.play('MeView', "button");
        let id = AppConst.mPlayerModel.userid + '';
        if (CC_JSB) {
            NativeMethod.copyTextString(id);
            CommonCtr.instance.view.ShowTipLabel("复制成功");
        } else {
            let bool = this.commandCopy(id);
            let str = bool ? "复制成功" : "复制失败";
            CommonCtr.instance.view.ShowTipLabel(str);
        }
    }

    /**复制 */
    public commandCopy(input) {
        const el = document.createElement('textarea');
        el.value = input;
        // Prevent keyboard from showing on mobile
        el.setAttribute('readonly', '');
        //el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS
        const selection = getSelection();
        let originalRange: any = false;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        // Explicit selection workaround for iOS
        el.selectionStart = 0;
        el.selectionEnd = input.length;
        let success = false;
        try {
            success = document.execCommand('copy');
        } catch (err) { }

        document.body.removeChild(el);

        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }
        return success;
    };


    public hideGold() {
        if (this.btn_eye.selected) {
            // let str = this.gold.text;
            // let temp = '';
            this.gold.text = '*****';

        } else {
            this.gold.text = UIUtil.formatNumber(AppConst.mPlayerModel.gold) + '';
        }
    }

    public showTopup() {
        AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr.instance.view.showTopup();
    }
    public showTransferView() {
        AudioManager.Singleton.play('MeView', "button");
        if (LobbyViewCtr.instance.Model.isSetPayPassword) {
            LobbyViewCtr.instance.view.showVerificationPwdView();
        } else {
            LobbyViewCtr.instance.view.showSetPayPasswordView();
        }
    }
    public showWithdrawal() {
        AudioManager.Singleton.play('MeView', "button");
        if (LobbyViewCtr.instance.Model.isSetPayPassword) {
            LobbyViewCtr.instance.view.showWithdrawal();
        } else {
            LobbyViewCtr.instance.view.showSetPayPasswordView();
        }
    }
    public showWelfareView() {
        AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr.instance.view.showWelfareView();
    }

    public showSetting() {
        AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr.instance.view.showSettingView();
    }

    /**社区 */
    public showCommunity() {
        AudioManager.Singleton.play('MeView', "button");
        if (LoginViewCtr.instance.Model.cidx == 0) {
            // LobbyViewCtr.instance.view.showcommunityView();
            // 跳转到首页
            LobbyViewCtr.instance.view.jumpHomePage();
        } else {
            LobbyViewCtr.instance.cs_getagentinfo(LoginViewCtr.instance.Model.cidx);
        }
    }
    /**分享 */
    public showShareView() {
        AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr.instance.view.showShareView();
    }
    /**顯示錢包記錄 */
    public showWallet() {
        AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr.instance.view.showWalletRecordView();
    }

    public showCareerView() {
        AudioManager.Singleton.play('MeView', "button");
        LobbyViewCtr.instance.view.showCareerView();
    }
    public showKnspsack() {
        AudioManager.Singleton.play('MeView', "button");
        // LobbyViewCtr.instance.view.showknapsackView();
        LobbyViewCtr.instance.cs_getbackpacklist();
    }
    public showFlowingwater() {
        AudioManager.Singleton.play('MeView', "button");
        // LobbyViewCtr.instance.view.showMyInformationView();
        // this.setFlowingRead(false);
        LobbyViewCtr.instance.cs_getemaillist(true);
    }
    public setFlowingRead(isRead: boolean) {
        this.btn_flowingWater.getController("read").setSelectedIndex(isRead ? 1 : 0);
    }
    /**vip 特權 */
    public showVipPriView() {
        AudioManager.Singleton.play('MeView', "button");
        // LobbyViewCtr.instance.view.showVipPrivilegeView();
        LobbyViewCtr.instance.cs_getuservipinfo(true);
    }

    public showRedPacketView() {
        AudioManager.Singleton.play('MeView', "button");
        let cidx: number = LoginViewCtr.instance.Model.cidx;
        LobbyViewCtr.instance.cs_extendredinfo(cidx);
    }

    Show() {
        this.initData();
        this.visible = true;
    }
    Hide() {
        this.visible = false;
    }

}
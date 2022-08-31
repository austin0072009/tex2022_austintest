import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { GameCommon } from "../../GameCommon";
import LobbyViewCtr from "../LobbyViewCtr";

/**
 * @description 修改支付密碼
 */
export default class ModifyPlayPwdView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "modifyPlayPwd";
    }

    private ui_btn_modifyplayBreak: fgui.GButton = null;
    private ui_btn_wjpwd: fgui.GButton = null;
    private ui_ForgetPlaypwd: fgui.GComponent = null;
    private ui_btn_forgetplaybreak: fgui.GButton = null;

    private ui_emailForgetNum: fgui.GTextInput = null;
    private ui_oldplaypwd: fgui.GTextInput = null;
    private ui_newplaypwd: fgui.GTextInput = null;
    private ui_newplaypwd2: fgui.GTextInput = null;
    /**修改 */
    private ui_btn_modify: fgui.GButton = null;
    private ui_btnEmailGetPwd: fgui.GButton = null;
    private ui_btnPhoneGetPwd: fgui.GButton = null;

    private ui_controllerC1: fgui.Controller = null;

    /**取消 */
    private ui_btn_forgetqx: fgui.GButton = null;
    private ui_btn_forgetConfirm: fgui.GButton = null;
    private ui_newPayPwd: fgui.GTextInput = null;
    private ui_newPayPwd2: fgui.GTextInput = null;

    private ui_regPhoneAreacode: fgui.GComboBox = null;
    private ui_btnCode: fgui.GButton = null;
    private ui_phoneAccount: fgui.GTextInput = null;
    private ui_phoneRegCode: fgui.GTextInput = null;

    public findType: string = "phone";

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_modifyplayBreak.onClick(this.Hide, this);
        this.ui_btn_wjpwd.onClick(this.showForgetPlay, this);
        this.ui_btn_forgetplaybreak.onClick(this.hideForgetPlay, this);
        this.ui_btn_modify.onClick(this.changePwd, this);

        this.ui_btn_forgetqx.onClick(this.hideForgetPlay, this);
        this.ui_btn_forgetConfirm.onClick(this.sendChangedPwd, this);

        this.ui_btnCode.onClick(this.sendPhoneCode, this);

        this.ui_btnEmailGetPwd.onClick(() => {
            AudioManager.Singleton.play('ModifyPlayPwdView', "button");
            this.ui_controllerC1.setSelectedIndex(1);
            this.findType = "email";
        });
        this.ui_btnPhoneGetPwd.onClick(() => {
            AudioManager.Singleton.play('ModifyPlayPwdView', "button");
            this.ui_controllerC1.setSelectedIndex(0);
            this.findType = "phone";
        });
    }

    OnLoadCompleted() {
        this.ui_controllerC1 = this.ui_ForgetPlaypwd.getController("c1");

        this.Show();
    }

    Hide() {
        AudioManager.Singleton.play('ModifyPlayPwdView', "button");
        super.Hide();
    }

    public changePwd() {
        AudioManager.Singleton.play('ModifyPlayPwdView', "button");
        let oldPwd = this.ui_oldplaypwd.text;
        let newPwd = this.ui_newplaypwd.text;
        let newPwd2 = this.ui_newplaypwd2.text;
        if (!oldPwd || !newPwd || !newPwd2) {
            CommonCtr.instance.view.ShowTipLabel("请检查是否填写完整");
            return;
        }
        if (newPwd != newPwd2) {
            CommonCtr.instance.view.ShowTipLabel("两次输入的新密码不一致");
            return;
        }
        if (newPwd.length != 6) {
            CommonCtr.instance.view.ShowTipLabel("输入的新密码格式不正确");
            return;
        }
        LobbyViewCtr.instance.cs_changePassword_appbk(oldPwd, newPwd, true);
    }


    /**忘记密码里的修改密码 */
    public sendChangedPwd() {
        AudioManager.Singleton.play('ModifyPlayPwdView', "button");
        if (this.findType == "phone") {
            if (!this.ui_phoneAccount.text || !this.ui_phoneRegCode.text) {
                CommonCtr.instance.view.ShowTipLabel("请检查是否填写完整");
                return;
            }
        } else if (this.findType == "email") {
            if (!this.ui_emailForgetNum.text || !this.ui_phoneRegCode.text) {
                CommonCtr.instance.view.ShowTipLabel("请检查是否填写完整");
                return;
            }
        }

        if (!this.ui_newPayPwd.text || !this.ui_newPayPwd2.text) {
            CommonCtr.instance.view.ShowTipLabel("请检查是否填写完整");
            return;
        }
        if (this.ui_newPayPwd.text != this.ui_newPayPwd2.text) {
            CommonCtr.instance.view.ShowTipLabel("两次输入的新密码不一致");
            return;
        }
        if (this.ui_newPayPwd.text.length != 6) {
            CommonCtr.instance.view.ShowTipLabel("输入的新密码格式不正确");
            return;
        }
        // LobbyViewCtr.instance.cs_changePassword_appbk(this.ui_loginPwd.text, this.ui_newPayPwd.text, true);
        let phone = this.ui_phoneAccount.text;
        if (this.findType == "email") {
            phone = this.ui_emailForgetNum.text;
        }
        // 修改为http
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/UpdateUserPayPWD"
            + `?userid=${AppConst.mPlayerModel.userid}&newpassword=${this.ui_newPayPwd.text}&code=${this.ui_phoneRegCode.text}&phone=${phone}`;
        HttpHelpEx.instance.get(url).then((res) => {
            console.log("---GetContactInfo---", res);
            if (res.code == 1) {
                this.hideForgetPlay();
                CommonCtr.instance.view.ShowTipLabel("找回支付密码成功！");
            } else {
                CommonCtr.instance.view.ShowTipLabel(res.message);
            }
        }).catch((err) => {
            CommonCtr.instance.view.ShowTipLabel("找回支付密码失败！");
        })
    }

    // 发送验证码
    public sendPhoneCode(event: fgui.Event) {
        if (this.findType == "email") {
            this.sendEmailCode(event);
            return;
        }
        console.log("------------", event.target.$gobj);
        let but = <fgui.GButton>event.target.$gobj;

        let controller = but.getController("type");
        but.enabled = false;
        let phone: string = this.ui_phoneAccount.text;
        let state: string = "2";
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
            smstype: state,  // 0注册1找回密码2交易密码3重置密码
            region: areaCode,
            UserId: AppConst.mPlayerModel.userid
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
            }
        }).catch(() => {
            CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
        })
    }

    // 发送验证码
    public sendEmailCode(event: fgui.Event) {
        console.log("------------", event.target.$gobj);
        let but = <fgui.GButton>event.target.$gobj;

        let controller = but.getController("type");
        but.enabled = false;
        let email: string = this.ui_emailForgetNum.text;
        let state: string = "2";
        let isemail = this.isEmail(email);
        if (!isemail) {
            CommonCtr.instance.ShowTipLabel("邮箱号不正確,請重新輸入!");
            but.enabled = true;
            return;
        }
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/Sendmail";
        
        let params: any = {
            email: email,
            smstype: state, //0注册1找回密码2交易密码3重置密码
            UserId: AppConst.mPlayerModel.userid
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
            }
        }).catch(() => {
            CommonCtr.instance.ShowTipLabel("驗證碼發送失敗");
        })
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

    public showForgetPlay() {
        AudioManager.Singleton.play('ModifyPlayPwdView', "button");
        this.ui_phoneAccount.text = "";
        this.ui_emailForgetNum.text = "";
        this.ui_oldplaypwd.text = '';
        this.ui_newplaypwd.text = '';
        this.ui_newplaypwd2.text = '';
        this.initAreaCodeList();
        this.ui_ForgetPlaypwd.visible = true;
    }
    public hideForgetPlay() {
        AudioManager.Singleton.play('ModifyPlayPwdView', "button");
        this.ui_ForgetPlaypwd.visible = false;
    }

    public Show() {
        this.ui_phoneAccount.text = "";
        this.ui_emailForgetNum.text = "";
        this.ui_oldplaypwd.text = '';
        this.ui_newplaypwd.text = '';
        this.ui_newplaypwd2.text = '';
        this.initAreaCodeList();
        this.ui_controllerC1.setSelectedIndex(0);
        this.findType = "phone";
        super.Show();
    }

    public initAreaCodeList() {
        let areacodeList: string[] = [];
        let data = GameCommon.allSmsCode;
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            areacodeList[index] = "+" + element.prefix;
        }

        this.ui_regPhoneAreacode.items = areacodeList;
        this.ui_regPhoneAreacode.text = "+86";
    }

}
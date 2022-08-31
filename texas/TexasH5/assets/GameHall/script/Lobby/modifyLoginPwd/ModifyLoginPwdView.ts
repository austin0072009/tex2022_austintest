import { AudioManager } from "../../../../Script/BaseFrame/AudioManager";
import { CommonCtr } from "../../../../Script/BaseFrame/CommonCtr";
import { SceneManager } from "../../../../Script/BaseFrame/SceneManager";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { WebSocketManager } from "../../../../Script/BaseFrame/WebSocketManager";
import HttpHelpEx from "../../../../Script/Common/Managers/HttpHelpEx";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import { BaseFrameNative } from "../../../../Script/BaseFrameNative";
import { GameCommon } from "../../GameCommon";

/**
 * @description 修改登錄密碼
 */
export default class ModifyLoginPwdView extends ViewBase {
    protected get packageResourceName(): string {
        return "gameHall";
    }
    protected get packageName(): string {
        return "res/Lobby";
    }
    protected get componentName(): string {
        return "modifyLoginPwd";
    }

    private ui_btn_modifyloginBreak: fgui.GButton = null;
    private ui_oldPwd: fgui.GTextInput = null;
    private ui_newPwd: fgui.GTextInput = null;
    private ui_newPwd1: fgui.GTextInput = null;
    private ui_btn_modify: fgui.GButton = null;

    createChildComponents() {
        super.createChildComponents();
        this.fguiComponent.visible = false;
        this.ui_btn_modifyloginBreak.onClick(this.Hide, this);

        this.ui_btn_modify.onClick(this.changedLoginPwd, this);
    }

    Hide() {
        AudioManager.Singleton.play('ModifyLoginPwdView', "button");
        super.Hide();
    }
    private flag: boolean = false;

    public changedLoginPwd() {
        AudioManager.Singleton.play('ModifyLoginPwdView', "button");
        let oldpwd = this.ui_oldPwd.text;
        let newPwd = this.ui_newPwd.text;
        let newPwd2 = this.ui_newPwd1.text;

        if (!oldpwd || !newPwd || !newPwd2) {
            CommonCtr.instance.view.ShowTipLabel("请检查是否填写完整");
            return;
        }
        if (newPwd != newPwd2) {
            CommonCtr.instance.view.ShowTipLabel("两次输入的新密码不一致");
            return;
        }
        let pwd = cc.sys.localStorage.getItem("login_pwd");
        if (oldpwd != pwd) {
            CommonCtr.instance.view.ShowTipLabel("输入的旧密码不正确");
            return;
        }
        if (oldpwd == newPwd) {
            CommonCtr.instance.view.ShowTipLabel("新密码与旧密码一样");
            return;
        }
        // if (newPwd.length != 6) {
        //     CommonCtr.instance.view.ShowTipLabel("新密码的格式不正确");
        //     return;
        // }

        let params = {
            newpassword: newPwd,
            userid: AppConst.mPlayerModel.userid,
        };
        let url = BaseFrameNative.serverlistItem.apiAdress + "/api/Game/ChangePWD";
        if (this.flag) {
            return;
        }
        this.flag = true;
        fgui.GRoot.inst.showModalWait();
        HttpHelpEx.instance.post(url, params
            // {
            //     headers: {
            //         "Content-Type": "application/json; charset=utf-8"
            //     }
            // }
        )
            .then((res) => {
                fgui.GRoot.inst.closeModalWait();
                if (res.code == 0) {
                    CommonCtr.instance.view.ShowTipLabel("修改成功，請重新登陸！");
                    this.schedule(() => {
                        WebSocketManager.getInstance.DisConnect();
                        SceneManager.Singleton.loadScene("gameHall", "login");
                    }, 1);
                } else {
                    CommonCtr.instance.view.ShowTipLabel(res.message);
                }
            })
            .catch(() => {
                fgui.GRoot.inst.closeModalWait();
                CommonCtr.instance.view.ShowTipLabel("修改密码失败");
            })
    }


    OnLoadCompleted() {
        this.Show();
    }

    public Show() {
        this.flag = false;
        super.Show();
    }

}
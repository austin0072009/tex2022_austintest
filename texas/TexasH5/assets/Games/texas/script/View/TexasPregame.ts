import { cs_base, sc_base, RoomInfoSD } from "../../../../Script/BaseFrame/cs_base";
import ViewBase from "../../../../Script/BaseFrame/ViewBase";
import { WebSocketManager } from "../../../../Script/BaseFrame/WebSocketManager";
import { AppConst } from "../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst";
import F_TexasViewCtr from "../Contrl/F_TexasViewCtr";
import F_TexasView from "./F_TexasView";


const { ccclass, property } = cc._decorator;

@ccclass
export default class TexasPregame extends ViewBase {
    protected get packageResourceName(): string {
        return "GameCommon";
    }
    protected get packageName(): string {
        return "Common";
    }
    protected get componentName(): string {
        return "GameLoading";
    }
    @property(cc.Node)
    layoutNode: cc.Node = null;
    @property(cc.Label)
    tipLabel: cc.Label = null;
    @property(cc.Node)
    gameNode: cc.Node = null;
    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    public ui_btnCreateTable: fgui.GButton = null;
    public ui_btnEnterTable: fgui.GButton = null;
    public ui_Text: fgui.GTextField = null;

    private view: F_TexasView = null;
    private talbeid = "";

    private progressBarCB: Function = null;
    private progressBarCB2: Function = null;

    onLoad() {
        F_TexasViewCtr.instance;
        super.onLoad();
        fgui.addLoadHandler();
        fgui.GRoot.create();
        this.layoutNode.active = true;
        this.gameNode.active = false;
        let times = 0;
        this.tipLabel.string = "Loading";
        this.progressBarCB = () => {
            times += 1;
            let tipString = "";
            if (times % 4 == 1) {
                tipString = "Loading.";
            } else if (times % 4 == 2) {
                tipString = "Loading..";
            } else if (times % 4 == 3) {
                tipString = "Loading...";
            } else if (times % 4 == 0) {
                tipString = "Loading";
            }
            this.tipLabel.string = tipString;
            if (times >= 4) {
                times = 0;
            }
        }
        this.schedule(() => {
            this.progressBarCB();
        }, 0.3)

        let time: number = 0;
        this.progressBar.barSprite.fillRange = time;
        this.progressBarCB2 = () => {
            time += 0.08;
            this.progressBar.barSprite.fillRange = time;
            this.tipLabel.string = "Loading..." + Math.ceil(time * 100) + "%";
            if (time >= 0.98) {
                this.unscheduleAllCallbacks();
                this.cs_getgamelevel();
                return;
            } else if (time >= 0.6) {
                time -= 0.03;
            }
        }
        this.schedule(() => {
            this.progressBarCB2();
        }, 0.05)
    }

    createChildComponents() {
        super.createChildComponents();
        fgui.GRoot.inst.addChild(this.fguiComponent);
        // if (this.view) {
        //     this.view.fguiComponent.visible = true;
        //     this.view.initManager();
        // } else {
        // this.view = this.addComponent(F_TexasView);
        // }

    }

    allChildCreated() {
        super.allChildCreated();
        this.ui_btnCreateTable.visible = false;
        this.ui_btnEnterTable.visible = false;
        this.ui_Text.text = "";
        F_TexasViewCtr.instance.sc_entertablenum_tex(AppConst.enterTableData);
        F_TexasViewCtr.instance.Model.mPlayerModel = AppConst.mPlayerModel;
        // this.cs_getgamelevel();
        //     if(AppConst.roomId == "")
        //     {
        //         this.ui_Text.text = "正在登录中...";
        //         AppConst.currentGameId =  51;
        //         AppConst.currentlevelid = 511;
        //         WebSocketManager.getInstance.GateServer(window.Ip || "106.13.222.130"); 
        //         WebSocketManager.getInstance.GatePort(10002); 
        //         WebSocketManager.getInstance.EnterRoomCallback =this.LoginSuccess.bind(this);
        //         WebSocketManager.getInstance.LoginByPIDPWD(window.user_account,window.user_pwd)
        //     }    
        //     else
        //     {
        //         F_TexasViewCtr.instance.Model.mPlayerModel = AppConst.mPlayerModel;
        //         this.ui_Text.text = "正在进入房间...";
        //         this.ui_btnCreateTable.visible = false;
        //         this.ui_btnEnterTable.visible = false;
        //         this.cs_entertablenum_tex(AppConst.roomId); 
        //     } 
        //     WebSocketManager.getInstance.webSocket.setRefreshCallback(this.cs_entertablenum_tex.bind(this));
    }

    OnLoadCompleted() {
        // this.layoutNode.active = false;
        // 加载完毕 取消loading
        // this.unschedule(this.progressBarCB);
    }

    public cs_getgamelevel() {
        let data: cs_getgamelevel = new cs_getgamelevel();
        data.gameid = F_TexasViewCtr.instance.Model.gameid;
        data.fn = "cs_getgamelevel";
        WebSocketManager.getInstance.Send(JSON.stringify(data), this.sc_getgamelevel.bind(this));
    }
    public sc_getgamelevel(data: sc_getgamelevel) {
        if (data.result == 1) {
            console.log("AppConst.currentlevelid = 1" + AppConst.currentlevelid);
            F_TexasViewCtr.instance.Model.gamelevel = data.levellist.find(item => AppConst.currentlevelid == item.id);
            if (F_TexasViewCtr.instance.Model.gamelevel != null) {
                this.gameNode.active = true;
            } else {
                console.log("gamelevel is null");
            }
        }

    }

    // public LoginSuccess()
    // {
    //     this.cs_getgamelevel();
    //     F_TexasViewCtr.instance.Model.mPlayerModel = AppConst.mPlayerModel ;
    //     this.talbeid = cc.sys.localStorage.getItem("tableid");
    //     if(this.talbeid && this.talbeid!=""){
    //         this.ui_Text.text = "登录完成,可以选择进入房间：" + this.talbeid;
    //     }else{
    //         this.ui_Text.text = "登录完成,请创建房间！";
    //         this.ui_btnEnterTable.visible=false;
    //     }

    //     // //正在房间直接进入
    //     if(AppConst.gameId  != AppConst.currentGameId && AppConst.gameId != 0){
    //         this.ui_Text.text = "登录失败，您正在其他游戏中！";
    //         return;
    //     }

    //     // AppConst.mPlayerModel.state = 539963/////////////测试，直接进入房间

    //     if(AppConst.mPlayerModel.state!=0){
    //         this.talbeid = AppConst.mPlayerModel.state.toString();
    //         this.cs_entertablenum_tex(this.talbeid);
    //      }

    //     this.ui_btnCreateTable.onClick(()=>{this.createtable();});
    //     this.ui_btnEnterTable.onClick(()=>{this.cs_entertablenum_tex(this.talbeid);});  

    // }

    // private createtable(){
    //     this.ui_Text.text = "正在进入房间...";
    //     this.ui_btnCreateTable.visible=false;
    //     this.ui_btnEnterTable.visible=false;
    //     F_TexasViewCtr.instance.CreateTableCallBack = this.cs_entertablenum_tex.bind(this);
    //     F_TexasViewCtr.instance.cs_createtable_tex(); 
    // }


    // public cs_entertablenum_tex(tableid:string ="")
    // {
    //     if(tableid!="") cc.sys.localStorage.setItem("tableid",tableid);
    //     this.talbeid = cc.sys.localStorage.getItem("tableid");

    //     console.log("cs_entertablenum_tex talbeid="+this.talbeid);
    //     let data:cs_entertablenum_tex = new cs_entertablenum_tex(); 
    //     // data.levelid = F_TexasViewCtr.instance.Model.levelid;
    //     // data.tableid = Number.parseInt(this.talbeid);
    //     data.tnumber = this.talbeid;
    //     data._g = F_TexasViewCtr.instance.Model.gameid ;
    //     data.fn = "cs_entertablenum_tex"; 
    //     WebSocketManager.getInstance.Send(JSON.stringify(data),this.sc_entertablenum_tex.bind(this));
    // }

    public entertable() {
        // if (this.view) {
        //     this.view.fguiComponent.visible = true;
        //     this.view.initManager();
        // } else {
        //     this.view = this.addComponent(F_TexasView)
        // }
    }
}

export class cs_getgamelevel extends cs_base {
    public gameid: number;
}

export class sc_getgamelevel extends sc_base {

    public levellist: RoomInfoSD[];
}

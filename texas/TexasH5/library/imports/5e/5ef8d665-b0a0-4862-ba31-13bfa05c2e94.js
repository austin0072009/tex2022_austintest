"use strict";
cc._RF.push(module, '5ef8dZlsKBIYroxE7+gXC6U', 'TexasPregame');
// Games/texas/script/View/TexasPregame.ts

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
exports.sc_getgamelevel = exports.cs_getgamelevel = void 0;
var cs_base_1 = require("../../../../Script/BaseFrame/cs_base");
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var WebSocketManager_1 = require("../../../../Script/BaseFrame/WebSocketManager");
var AppConst_1 = require("../../../../Script/modules/@slotsmaster/ui-common/lib/AppConst");
var F_TexasViewCtr_1 = require("../Contrl/F_TexasViewCtr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TexasPregame = /** @class */ (function (_super) {
    __extends(TexasPregame, _super);
    function TexasPregame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layoutNode = null;
        _this.tipLabel = null;
        _this.gameNode = null;
        _this.progressBar = null;
        _this.ui_btnCreateTable = null;
        _this.ui_btnEnterTable = null;
        _this.ui_Text = null;
        _this.view = null;
        _this.talbeid = "";
        _this.progressBarCB = null;
        _this.progressBarCB2 = null;
        return _this;
    }
    Object.defineProperty(TexasPregame.prototype, "packageResourceName", {
        get: function () {
            return "GameCommon";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TexasPregame.prototype, "packageName", {
        get: function () {
            return "Common";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TexasPregame.prototype, "componentName", {
        get: function () {
            return "GameLoading";
        },
        enumerable: false,
        configurable: true
    });
    TexasPregame.prototype.onLoad = function () {
        var _this = this;
        F_TexasViewCtr_1.default.instance;
        _super.prototype.onLoad.call(this);
        fgui.addLoadHandler();
        fgui.GRoot.create();
        this.layoutNode.active = true;
        this.gameNode.active = false;
        var times = 0;
        this.tipLabel.string = "Loading";
        this.progressBarCB = function () {
            times += 1;
            var tipString = "";
            if (times % 4 == 1) {
                tipString = "Loading.";
            }
            else if (times % 4 == 2) {
                tipString = "Loading..";
            }
            else if (times % 4 == 3) {
                tipString = "Loading...";
            }
            else if (times % 4 == 0) {
                tipString = "Loading";
            }
            _this.tipLabel.string = tipString;
            if (times >= 4) {
                times = 0;
            }
        };
        this.schedule(function () {
            _this.progressBarCB();
        }, 0.3);
        var time = 0;
        this.progressBar.barSprite.fillRange = time;
        this.progressBarCB2 = function () {
            time += 0.08;
            _this.progressBar.barSprite.fillRange = time;
            _this.tipLabel.string = "Loading..." + Math.ceil(time * 100) + "%";
            if (time >= 0.98) {
                _this.unscheduleAllCallbacks();
                _this.cs_getgamelevel();
                return;
            }
            else if (time >= 0.6) {
                time -= 0.03;
            }
        };
        this.schedule(function () {
            _this.progressBarCB2();
        }, 0.05);
    };
    TexasPregame.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        fgui.GRoot.inst.addChild(this.fguiComponent);
        // if (this.view) {
        //     this.view.fguiComponent.visible = true;
        //     this.view.initManager();
        // } else {
        // this.view = this.addComponent(F_TexasView);
        // }
    };
    TexasPregame.prototype.allChildCreated = function () {
        _super.prototype.allChildCreated.call(this);
        this.ui_btnCreateTable.visible = false;
        this.ui_btnEnterTable.visible = false;
        this.ui_Text.text = "";
        F_TexasViewCtr_1.default.instance.sc_entertablenum_tex(AppConst_1.AppConst.enterTableData);
        F_TexasViewCtr_1.default.instance.Model.mPlayerModel = AppConst_1.AppConst.mPlayerModel;
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
    };
    TexasPregame.prototype.OnLoadCompleted = function () {
        // this.layoutNode.active = false;
        // 加载完毕 取消loading
        // this.unschedule(this.progressBarCB);
    };
    TexasPregame.prototype.cs_getgamelevel = function () {
        var data = new cs_getgamelevel();
        data.gameid = F_TexasViewCtr_1.default.instance.Model.gameid;
        data.fn = "cs_getgamelevel";
        WebSocketManager_1.WebSocketManager.getInstance.Send(JSON.stringify(data), this.sc_getgamelevel.bind(this));
    };
    TexasPregame.prototype.sc_getgamelevel = function (data) {
        if (data.result == 1) {
            console.log("AppConst.currentlevelid = 1" + AppConst_1.AppConst.currentlevelid);
            F_TexasViewCtr_1.default.instance.Model.gamelevel = data.levellist.find(function (item) { return AppConst_1.AppConst.currentlevelid == item.id; });
            if (F_TexasViewCtr_1.default.instance.Model.gamelevel != null) {
                this.gameNode.active = true;
            }
            else {
                console.log("gamelevel is null");
            }
        }
    };
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
    TexasPregame.prototype.entertable = function () {
        // if (this.view) {
        //     this.view.fguiComponent.visible = true;
        //     this.view.initManager();
        // } else {
        //     this.view = this.addComponent(F_TexasView)
        // }
    };
    __decorate([
        property(cc.Node)
    ], TexasPregame.prototype, "layoutNode", void 0);
    __decorate([
        property(cc.Label)
    ], TexasPregame.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.Node)
    ], TexasPregame.prototype, "gameNode", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], TexasPregame.prototype, "progressBar", void 0);
    TexasPregame = __decorate([
        ccclass
    ], TexasPregame);
    return TexasPregame;
}(ViewBase_1.default));
exports.default = TexasPregame;
var cs_getgamelevel = /** @class */ (function (_super) {
    __extends(cs_getgamelevel, _super);
    function cs_getgamelevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cs_getgamelevel;
}(cs_base_1.cs_base));
exports.cs_getgamelevel = cs_getgamelevel;
var sc_getgamelevel = /** @class */ (function (_super) {
    __extends(sc_getgamelevel, _super);
    function sc_getgamelevel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sc_getgamelevel;
}(cs_base_1.sc_base));
exports.sc_getgamelevel = sc_getgamelevel;

cc._RF.pop();
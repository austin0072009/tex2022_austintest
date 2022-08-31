
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/TexasPregame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFRleGFzUHJlZ2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQW9GO0FBQ3BGLGtFQUE2RDtBQUM3RCxrRkFBaUY7QUFDakYsMkZBQTBGO0FBQzFGLDJEQUFzRDtBQUloRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBUTtJQUFsRDtRQUFBLHFFQThNQztRQW5NRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRTVCLHVCQUFpQixHQUFpQixJQUFJLENBQUM7UUFDdkMsc0JBQWdCLEdBQWlCLElBQUksQ0FBQztRQUN0QyxhQUFPLEdBQW9CLElBQUksQ0FBQztRQUUvQixVQUFJLEdBQWdCLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFDL0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7O0lBbUw1QyxDQUFDO0lBN01HLHNCQUFjLDZDQUFtQjthQUFqQztZQUNJLE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQWMscUNBQVc7YUFBekI7WUFDSSxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHVDQUFhO2FBQTNCO1lBQ0ksT0FBTyxhQUFhLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFvQkQsNkJBQU0sR0FBTjtRQUFBLGlCQStDQztRQTlDRyx3QkFBYyxDQUFDLFFBQVEsQ0FBQztRQUN4QixpQkFBTSxNQUFNLFdBQUUsQ0FBQztRQUNmLElBQUksQ0FB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K0I7UUFDL0IsV0FBVztRQUNYLGlEQUFpRDtRQUNqRCxJQUFJO0lBQ1IsQ0FBQztJQWxNRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FEQUNVO0lBakJsQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBOE1oQztJQUFELG1CQUFDO0NBOU1ELEFBOE1DLENBOU15QyxrQkFBUSxHQThNakQ7a0JBOU1vQixZQUFZO0FBZ05qQztJQUFxQyxtQ0FBTztJQUE1Qzs7SUFFQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUZBLEFBRUMsQ0FGb0MsaUJBQU8sR0FFM0M7QUFGWSwwQ0FBZTtBQUk1QjtJQUFxQyxtQ0FBTztJQUE1Qzs7SUFHQSxDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUhBLEFBR0MsQ0FIb0MsaUJBQU8sR0FHM0M7QUFIWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzX2Jhc2UsIHNjX2Jhc2UsIFJvb21JbmZvU0QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9jc19iYXNlXCI7XG5pbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcbmltcG9ydCB7IFdlYlNvY2tldE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9XZWJTb2NrZXRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBBcHBDb25zdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvbW9kdWxlcy9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9BcHBDb25zdFwiO1xuaW1wb3J0IEZfVGV4YXNWaWV3Q3RyIGZyb20gXCIuLi9Db250cmwvRl9UZXhhc1ZpZXdDdHJcIjtcbmltcG9ydCBGX1RleGFzVmlldyBmcm9tIFwiLi9GX1RleGFzVmlld1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXhhc1ByZWdhbWUgZXh0ZW5kcyBWaWV3QmFzZSB7XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlUmVzb3VyY2VOYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdhbWVDb21tb25cIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJDb21tb25cIjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdhbWVMb2FkaW5nXCI7XG4gICAgfVxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheW91dE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aXBMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcblxuICAgIHB1YmxpYyB1aV9idG5DcmVhdGVUYWJsZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfYnRuRW50ZXJUYWJsZTogZmd1aS5HQnV0dG9uID0gbnVsbDtcbiAgICBwdWJsaWMgdWlfVGV4dDogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDtcblxuICAgIHByaXZhdGUgdmlldzogRl9UZXhhc1ZpZXcgPSBudWxsO1xuICAgIHByaXZhdGUgdGFsYmVpZCA9IFwiXCI7XG5cbiAgICBwcml2YXRlIHByb2dyZXNzQmFyQ0I6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBwcml2YXRlIHByb2dyZXNzQmFyQ0IyOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlO1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICAgICAgZmd1aS5hZGRMb2FkSGFuZGxlcigpO1xuICAgICAgICBmZ3VpLkdSb290LmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLmxheW91dE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nYW1lTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHRpbWVzID0gMDtcbiAgICAgICAgdGhpcy50aXBMYWJlbC5zdHJpbmcgPSBcIkxvYWRpbmdcIjtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckNCID0gKCkgPT4ge1xuICAgICAgICAgICAgdGltZXMgKz0gMTtcbiAgICAgICAgICAgIGxldCB0aXBTdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKHRpbWVzICUgNCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgdGlwU3RyaW5nID0gXCJMb2FkaW5nLlwiO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aW1lcyAlIDQgPT0gMikge1xuICAgICAgICAgICAgICAgIHRpcFN0cmluZyA9IFwiTG9hZGluZy4uXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVzICUgNCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgdGlwU3RyaW5nID0gXCJMb2FkaW5nLi4uXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVzICUgNCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGlwU3RyaW5nID0gXCJMb2FkaW5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IHRpcFN0cmluZztcbiAgICAgICAgICAgIGlmICh0aW1lcyA+PSA0KSB7XG4gICAgICAgICAgICAgICAgdGltZXMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhckNCKCk7XG4gICAgICAgIH0sIDAuMylcblxuICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5iYXJTcHJpdGUuZmlsbFJhbmdlID0gdGltZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckNCMiA9ICgpID0+IHtcbiAgICAgICAgICAgIHRpbWUgKz0gMC4wODtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuYmFyU3ByaXRlLmZpbGxSYW5nZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IFwiTG9hZGluZy4uLlwiICsgTWF0aC5jZWlsKHRpbWUgKiAxMDApICsgXCIlXCI7XG4gICAgICAgICAgICBpZiAodGltZSA+PSAwLjk4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jc19nZXRnYW1lbGV2ZWwoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRpbWUgPj0gMC42KSB7XG4gICAgICAgICAgICAgICAgdGltZSAtPSAwLjAzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhckNCMigpO1xuICAgICAgICB9LCAwLjA1KVxuICAgIH1cblxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XG4gICAgICAgIGZndWkuR1Jvb3QuaW5zdC5hZGRDaGlsZCh0aGlzLmZndWlDb21wb25lbnQpO1xuICAgICAgICAvLyBpZiAodGhpcy52aWV3KSB7XG4gICAgICAgIC8vICAgICB0aGlzLnZpZXcuZmd1aUNvbXBvbmVudC52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHRoaXMudmlldy5pbml0TWFuYWdlcigpO1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyB0aGlzLnZpZXcgPSB0aGlzLmFkZENvbXBvbmVudChGX1RleGFzVmlldyk7XG4gICAgICAgIC8vIH1cblxuICAgIH1cblxuICAgIGFsbENoaWxkQ3JlYXRlZCgpIHtcbiAgICAgICAgc3VwZXIuYWxsQ2hpbGRDcmVhdGVkKCk7XG4gICAgICAgIHRoaXMudWlfYnRuQ3JlYXRlVGFibGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX2J0bkVudGVyVGFibGUudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVpX1RleHQudGV4dCA9IFwiXCI7XG4gICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLnNjX2VudGVydGFibGVudW1fdGV4KEFwcENvbnN0LmVudGVyVGFibGVEYXRhKTtcbiAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubVBsYXllck1vZGVsID0gQXBwQ29uc3QubVBsYXllck1vZGVsO1xuICAgICAgICAvLyB0aGlzLmNzX2dldGdhbWVsZXZlbCgpO1xuICAgICAgICAvLyAgICAgaWYoQXBwQ29uc3Qucm9vbUlkID09IFwiXCIpXG4gICAgICAgIC8vICAgICB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy51aV9UZXh0LnRleHQgPSBcIuato+WcqOeZu+W9leS4rS4uLlwiO1xuICAgICAgICAvLyAgICAgICAgIEFwcENvbnN0LmN1cnJlbnRHYW1lSWQgPSAgNTE7XG4gICAgICAgIC8vICAgICAgICAgQXBwQ29uc3QuY3VycmVudGxldmVsaWQgPSA1MTE7XG4gICAgICAgIC8vICAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5HYXRlU2VydmVyKHdpbmRvdy5JcCB8fCBcIjEwNi4xMy4yMjIuMTMwXCIpOyBcbiAgICAgICAgLy8gICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLkdhdGVQb3J0KDEwMDAyKTsgXG4gICAgICAgIC8vICAgICAgICAgV2ViU29ja2V0TWFuYWdlci5nZXRJbnN0YW5jZS5FbnRlclJvb21DYWxsYmFjayA9dGhpcy5Mb2dpblN1Y2Nlc3MuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gICAgICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLkxvZ2luQnlQSURQV0Qod2luZG93LnVzZXJfYWNjb3VudCx3aW5kb3cudXNlcl9wd2QpXG4gICAgICAgIC8vICAgICB9ICAgIFxuICAgICAgICAvLyAgICAgZWxzZVxuICAgICAgICAvLyAgICAge1xuICAgICAgICAvLyAgICAgICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbCA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbDtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnVpX1RleHQudGV4dCA9IFwi5q2j5Zyo6L+b5YWl5oi/6Ze0Li4uXCI7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy51aV9idG5DcmVhdGVUYWJsZS52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy51aV9idG5FbnRlclRhYmxlLnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmNzX2VudGVydGFibGVudW1fdGV4KEFwcENvbnN0LnJvb21JZCk7IFxuICAgICAgICAvLyAgICAgfSBcbiAgICAgICAgLy8gICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2Uud2ViU29ja2V0LnNldFJlZnJlc2hDYWxsYmFjayh0aGlzLmNzX2VudGVydGFibGVudW1fdGV4LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIE9uTG9hZENvbXBsZXRlZCgpIHtcbiAgICAgICAgLy8gdGhpcy5sYXlvdXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyDliqDovb3lrozmr5Ug5Y+W5raIbG9hZGluZ1xuICAgICAgICAvLyB0aGlzLnVuc2NoZWR1bGUodGhpcy5wcm9ncmVzc0JhckNCKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3NfZ2V0Z2FtZWxldmVsKCkge1xuICAgICAgICBsZXQgZGF0YTogY3NfZ2V0Z2FtZWxldmVsID0gbmV3IGNzX2dldGdhbWVsZXZlbCgpO1xuICAgICAgICBkYXRhLmdhbWVpZCA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmdhbWVpZDtcbiAgICAgICAgZGF0YS5mbiA9IFwiY3NfZ2V0Z2FtZWxldmVsXCI7XG4gICAgICAgIFdlYlNvY2tldE1hbmFnZXIuZ2V0SW5zdGFuY2UuU2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5zY19nZXRnYW1lbGV2ZWwuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzY19nZXRnYW1lbGV2ZWwoZGF0YTogc2NfZ2V0Z2FtZWxldmVsKSB7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID0gMVwiICsgQXBwQ29uc3QuY3VycmVudGxldmVsaWQpO1xuICAgICAgICAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwuZ2FtZWxldmVsID0gZGF0YS5sZXZlbGxpc3QuZmluZChpdGVtID0+IEFwcENvbnN0LmN1cnJlbnRsZXZlbGlkID09IGl0ZW0uaWQpO1xuICAgICAgICAgICAgaWYgKEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmdhbWVsZXZlbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVsZXZlbCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBwdWJsaWMgTG9naW5TdWNjZXNzKClcbiAgICAvLyB7XG4gICAgLy8gICAgIHRoaXMuY3NfZ2V0Z2FtZWxldmVsKCk7XG4gICAgLy8gICAgIEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLm1QbGF5ZXJNb2RlbCA9IEFwcENvbnN0Lm1QbGF5ZXJNb2RlbCA7XG4gICAgLy8gICAgIHRoaXMudGFsYmVpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhYmxlaWRcIik7XG4gICAgLy8gICAgIGlmKHRoaXMudGFsYmVpZCAmJiB0aGlzLnRhbGJlaWQhPVwiXCIpe1xuICAgIC8vICAgICAgICAgdGhpcy51aV9UZXh0LnRleHQgPSBcIueZu+W9leWujOaIkCzlj6/ku6XpgInmi6nov5vlhaXmiL/pl7TvvJpcIiArIHRoaXMudGFsYmVpZDtcbiAgICAvLyAgICAgfWVsc2V7XG4gICAgLy8gICAgICAgICB0aGlzLnVpX1RleHQudGV4dCA9IFwi55m75b2V5a6M5oiQLOivt+WIm+W7uuaIv+mXtO+8gVwiO1xuICAgIC8vICAgICAgICAgdGhpcy51aV9idG5FbnRlclRhYmxlLnZpc2libGU9ZmFsc2U7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICAvLyAvL+ato+WcqOaIv+mXtOebtOaOpei/m+WFpVxuICAgIC8vICAgICBpZihBcHBDb25zdC5nYW1lSWQgICE9IEFwcENvbnN0LmN1cnJlbnRHYW1lSWQgJiYgQXBwQ29uc3QuZ2FtZUlkICE9IDApe1xuICAgIC8vICAgICAgICAgdGhpcy51aV9UZXh0LnRleHQgPSBcIueZu+W9leWksei0pe+8jOaCqOato+WcqOWFtuS7lua4uOaIj+S4re+8gVwiO1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgLy8gQXBwQ29uc3QubVBsYXllck1vZGVsLnN0YXRlID0gNTM5OTYzLy8vLy8vLy8vLy8vL+a1i+ivle+8jOebtOaOpei/m+WFpeaIv+mXtFxuXG4gICAgLy8gICAgIGlmKEFwcENvbnN0Lm1QbGF5ZXJNb2RlbC5zdGF0ZSE9MCl7XG4gICAgLy8gICAgICAgICB0aGlzLnRhbGJlaWQgPSBBcHBDb25zdC5tUGxheWVyTW9kZWwuc3RhdGUudG9TdHJpbmcoKTtcbiAgICAvLyAgICAgICAgIHRoaXMuY3NfZW50ZXJ0YWJsZW51bV90ZXgodGhpcy50YWxiZWlkKTtcbiAgICAvLyAgICAgIH1cblxuICAgIC8vICAgICB0aGlzLnVpX2J0bkNyZWF0ZVRhYmxlLm9uQ2xpY2soKCk9Pnt0aGlzLmNyZWF0ZXRhYmxlKCk7fSk7XG4gICAgLy8gICAgIHRoaXMudWlfYnRuRW50ZXJUYWJsZS5vbkNsaWNrKCgpPT57dGhpcy5jc19lbnRlcnRhYmxlbnVtX3RleCh0aGlzLnRhbGJlaWQpO30pOyAgXG5cbiAgICAvLyB9XG5cbiAgICAvLyBwcml2YXRlIGNyZWF0ZXRhYmxlKCl7XG4gICAgLy8gICAgIHRoaXMudWlfVGV4dC50ZXh0ID0gXCLmraPlnKjov5vlhaXmiL/pl7QuLi5cIjtcbiAgICAvLyAgICAgdGhpcy51aV9idG5DcmVhdGVUYWJsZS52aXNpYmxlPWZhbHNlO1xuICAgIC8vICAgICB0aGlzLnVpX2J0bkVudGVyVGFibGUudmlzaWJsZT1mYWxzZTtcbiAgICAvLyAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuQ3JlYXRlVGFibGVDYWxsQmFjayA9IHRoaXMuY3NfZW50ZXJ0YWJsZW51bV90ZXguYmluZCh0aGlzKTtcbiAgICAvLyAgICAgRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuY3NfY3JlYXRldGFibGVfdGV4KCk7IFxuICAgIC8vIH1cblxuXG4gICAgLy8gcHVibGljIGNzX2VudGVydGFibGVudW1fdGV4KHRhYmxlaWQ6c3RyaW5nID1cIlwiKVxuICAgIC8vIHtcbiAgICAvLyAgICAgaWYodGFibGVpZCE9XCJcIikgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFibGVpZFwiLHRhYmxlaWQpO1xuICAgIC8vICAgICB0aGlzLnRhbGJlaWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YWJsZWlkXCIpO1xuXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY3NfZW50ZXJ0YWJsZW51bV90ZXggdGFsYmVpZD1cIit0aGlzLnRhbGJlaWQpO1xuICAgIC8vICAgICBsZXQgZGF0YTpjc19lbnRlcnRhYmxlbnVtX3RleCA9IG5ldyBjc19lbnRlcnRhYmxlbnVtX3RleCgpOyBcbiAgICAvLyAgICAgLy8gZGF0YS5sZXZlbGlkID0gRl9UZXhhc1ZpZXdDdHIuaW5zdGFuY2UuTW9kZWwubGV2ZWxpZDtcbiAgICAvLyAgICAgLy8gZGF0YS50YWJsZWlkID0gTnVtYmVyLnBhcnNlSW50KHRoaXMudGFsYmVpZCk7XG4gICAgLy8gICAgIGRhdGEudG51bWJlciA9IHRoaXMudGFsYmVpZDtcbiAgICAvLyAgICAgZGF0YS5fZyA9IEZfVGV4YXNWaWV3Q3RyLmluc3RhbmNlLk1vZGVsLmdhbWVpZCA7XG4gICAgLy8gICAgIGRhdGEuZm4gPSBcImNzX2VudGVydGFibGVudW1fdGV4XCI7IFxuICAgIC8vICAgICBXZWJTb2NrZXRNYW5hZ2VyLmdldEluc3RhbmNlLlNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YSksdGhpcy5zY19lbnRlcnRhYmxlbnVtX3RleC5iaW5kKHRoaXMpKTtcbiAgICAvLyB9XG5cbiAgICBwdWJsaWMgZW50ZXJ0YWJsZSgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMudmlldykge1xuICAgICAgICAvLyAgICAgdGhpcy52aWV3LmZndWlDb21wb25lbnQudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB0aGlzLnZpZXcuaW5pdE1hbmFnZXIoKTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMudmlldyA9IHRoaXMuYWRkQ29tcG9uZW50KEZfVGV4YXNWaWV3KVxuICAgICAgICAvLyB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgY3NfZ2V0Z2FtZWxldmVsIGV4dGVuZHMgY3NfYmFzZSB7XG4gICAgcHVibGljIGdhbWVpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3Mgc2NfZ2V0Z2FtZWxldmVsIGV4dGVuZHMgc2NfYmFzZSB7XG5cbiAgICBwdWJsaWMgbGV2ZWxsaXN0OiBSb29tSW5mb1NEW107XG59XG4iXX0=
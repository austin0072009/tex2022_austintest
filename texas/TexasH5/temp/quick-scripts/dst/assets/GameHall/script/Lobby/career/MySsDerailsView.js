
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/career/MySsDerailsView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b1d3beVOdBC5/BkeC9PFWm', 'MySsDerailsView');
// GameHall/script/Lobby/career/MySsDerailsView.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var UIUtil_1 = require("../../../../Script/Common/UIUtil");
var LobbyViewCtr_1 = require("../LobbyViewCtr");
/*
 * @description 賽事详情
 */
var MySsDerailsView = /** @class */ (function (_super) {
    __extends(MySsDerailsView, _super);
    function MySsDerailsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ui_btn_ssplayDerailsBreak = null;
        _this.Competeid = 0;
        _this.ui_sstime = null; //赛事名
        _this.ui_ssbet = null; //赛事时间
        _this.ui_allNumInGamess = null; //获得金额
        _this.ui_changjunRecordss = null; //盈利局
        _this.ui_damangOrBaishouss = null; //参与人数
        _this.ui_allShoushuss = null; //总手数
        _this.ui_changjunDairuss = null; //投资回报率
        _this.ui_n130 = null; //玩家列表
        _this.rankingList = [];
        return _this;
    }
    Object.defineProperty(MySsDerailsView.prototype, "packageResourceName", {
        get: function () {
            return "gameHall";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MySsDerailsView.prototype, "packageName", {
        get: function () {
            return "res/Lobby";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MySsDerailsView.prototype, "componentName", {
        get: function () {
            return "ssDerails";
        },
        enumerable: false,
        configurable: true
    });
    MySsDerailsView.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.fguiComponent.visible = false;
        this.ui_btn_ssplayDerailsBreak.onClick(this.Hide, this);
    };
    MySsDerailsView.prototype.OnLoadCompleted = function () {
        this.Show();
        this.ui_n130.numItems = 0;
        this.ui_n130.itemRenderer = this.renderList.bind(this);
    };
    MySsDerailsView.prototype.Show = function () {
        _super.prototype.Show.call(this);
        LobbyViewCtr_1.default.instance.cs_compete_record_detail(this.Competeid);
    };
    MySsDerailsView.prototype.sc_compete_record_detail = function (data) {
        this.ui_sstime.text = data.competename;
        this.ui_ssbet.text = data.starttime;
        data.prizes.forEach(function (item) {
            console.log("赛事奖品：" + item.name + "_" + item.num);
        });
        this.ui_allNumInGamess.text = data.prizes[0].num + "";
        this.ui_changjunRecordss.text = data.TableWinCount + "";
        this.ui_damangOrBaishouss.text = data.ranking.length + "";
        this.ui_allShoushuss.text = data.TotalRoundCount + "";
        this.ui_changjunDairuss.text = data.RateOfReturn + "%";
        this.rankingList = data.ranking;
        this.rankingList.sort(function (a, b) {
            return a.rank - b.rank;
        });
        this.ui_n130.numItems = data.ranking.length;
    };
    MySsDerailsView.prototype.renderList = function (index, item) {
        var go = item;
        go.getChild("n6").asTextField.text = this.rankingList[index].rank + "";
        UIUtil_1.UIUtil.loadImage(go.getChild("n7").asCom.getChild("n0").asLoader, this.rankingList[index].pic);
        go.getChild("n8").asTextField.text = this.rankingList[index].name;
        go.getChild("n5").asTextField.text = this.rankingList[index].prizes[0].num + "";
        go.getChild("n9").asTextField.text = (this.rankingList[index].proportion * 100) + "%";
    };
    return MySsDerailsView;
}(ViewBase_1.default));
exports.default = MySsDerailsView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXGNhcmVlclxcTXlTc0RlcmFpbHNWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCwyREFBMEQ7QUFDMUQsZ0RBQTJDO0FBRzNDOztHQUVHO0FBQ0g7SUFBNkMsbUNBQVE7SUFBckQ7UUFBQSxxRUFtRUM7UUF4RFcsK0JBQXlCLEdBQWlCLElBQUksQ0FBQztRQUNoRCxlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLGVBQVMsR0FBb0IsSUFBSSxDQUFDLENBQUEsS0FBSztRQUN2QyxjQUFRLEdBQW9CLElBQUksQ0FBQyxDQUFBLE1BQU07UUFDdkMsdUJBQWlCLEdBQW9CLElBQUksQ0FBQyxDQUFBLE1BQU07UUFDaEQseUJBQW1CLEdBQW9CLElBQUksQ0FBQyxDQUFBLEtBQUs7UUFDakQsMEJBQW9CLEdBQW9CLElBQUksQ0FBQyxDQUFBLE1BQU07UUFDbkQscUJBQWUsR0FBb0IsSUFBSSxDQUFDLENBQUEsS0FBSztRQUM3Qyx3QkFBa0IsR0FBb0IsSUFBSSxDQUFDLENBQUEsT0FBTztRQUNsRCxhQUFPLEdBQWUsSUFBSSxDQUFDLENBQUEsTUFBTTtRQWtCakMsaUJBQVcsR0FBb0IsRUFBRSxDQUFDOztJQTRCOUMsQ0FBQztJQWpFRyxzQkFBYyxnREFBbUI7YUFBakM7WUFDSSxPQUFPLFVBQVUsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUNELHNCQUFjLHdDQUFXO2FBQXpCO1lBQ0ksT0FBTyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYywwQ0FBYTthQUEzQjtZQUNJLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBYUQsK0NBQXFCLEdBQXJCO1FBQ0ksaUJBQU0scUJBQXFCLFdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENB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QVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNoRixFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDMUYsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FuRUEsQUFtRUMsQ0FuRTRDLGtCQUFRLEdBbUVwRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3QmFzZSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0Jhc2VGcmFtZS9WaWV3QmFzZVwiO1xyXG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vU2NyaXB0L0NvbW1vbi9VSVV0aWxcIjtcclxuaW1wb3J0IExvYmJ5Vmlld0N0ciBmcm9tIFwiLi4vTG9iYnlWaWV3Q3RyXCI7XHJcbmltcG9ydCB7IFJhbmtQcml6ZUluZm8sIHNjX2NvbXBldGVfcmVjb3JkX2RldGFpbCB9IGZyb20gXCIuL0NhcmVlck5ldERhdGFTdHJ1Y3RcIjtcclxuXHJcbi8qXHJcbiAqIEBkZXNjcmlwdGlvbiDos73kuovor6bmg4VcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15U3NEZXJhaWxzVmlldyBleHRlbmRzIFZpZXdCYXNlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IHBhY2thZ2VSZXNvdXJjZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJnYW1lSGFsbFwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJlcy9Mb2JieVwiO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwic3NEZXJhaWxzXCI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHVpX2J0bl9zc3BsYXlEZXJhaWxzQnJlYWs6IGZndWkuR0J1dHRvbiA9IG51bGw7XHJcbiAgICBwdWJsaWMgQ29tcGV0ZWlkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgdWlfc3N0aW1lOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsOy8v6LWb5LqL5ZCNXHJcbiAgICBwcml2YXRlIHVpX3NzYmV0OiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsOy8v6LWb5LqL5pe26Ze0XHJcbiAgICBwcml2YXRlIHVpX2FsbE51bUluR2FtZXNzOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsOy8v6I635b6X6YeR6aKdXHJcbiAgICBwcml2YXRlIHVpX2NoYW5nanVuUmVjb3Jkc3M6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7Ly/nm4jliKnlsYBcclxuICAgIHByaXZhdGUgdWlfZGFtYW5nT3JCYWlzaG91c3M6IGZndWkuR1RleHRGaWVsZCA9IG51bGw7Ly/lj4LkuI7kurrmlbBcclxuICAgIHByaXZhdGUgdWlfYWxsU2hvdXNodXNzOiBmZ3VpLkdUZXh0RmllbGQgPSBudWxsOy8v5oC75omL5pWwXHJcbiAgICBwcml2YXRlIHVpX2NoYW5nanVuRGFpcnVzczogZmd1aS5HVGV4dEZpZWxkID0gbnVsbDsvL+aKlei1hOWbnuaKpeeOh1xyXG4gICAgcHJpdmF0ZSB1aV9uMTMwOiBmZ3VpLkdMaXN0ID0gbnVsbDsvL+eOqeWutuWIl+ihqFxyXG5cclxuICAgIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcclxuICAgICAgICBzdXBlci5jcmVhdGVDaGlsZENvbXBvbmVudHMoKTtcclxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudWlfYnRuX3NzcGxheURlcmFpbHNCcmVhay5vbkNsaWNrKHRoaXMuSGlkZSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5TaG93KCk7XHJcbiAgICAgICAgdGhpcy51aV9uMTMwLm51bUl0ZW1zID0gMDtcclxuICAgICAgICB0aGlzLnVpX24xMzAuaXRlbVJlbmRlcmVyID0gdGhpcy5yZW5kZXJMaXN0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgU2hvdygpIHtcclxuICAgICAgICBzdXBlci5TaG93KCk7XHJcbiAgICAgICAgTG9iYnlWaWV3Q3RyLmluc3RhbmNlLmNzX2NvbXBldGVfcmVjb3JkX2RldGFpbCh0aGlzLkNvbXBldGVpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5raW5nTGlzdDogUmFua1ByaXplSW5mb1tdID0gW107XHJcbiAgICBwdWJsaWMgc2NfY29tcGV0ZV9yZWNvcmRfZGV0YWlsKGRhdGE6IHNjX2NvbXBldGVfcmVjb3JkX2RldGFpbCkge1xyXG4gICAgICAgIHRoaXMudWlfc3N0aW1lLnRleHQgPSBkYXRhLmNvbXBldGVuYW1lO1xyXG4gICAgICAgIHRoaXMudWlfc3NiZXQudGV4dCA9IGRhdGEuc3RhcnR0aW1lO1xyXG4gICAgICAgIGRhdGEucHJpemVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLotZvkuovlpZblk4HvvJpcIiArIGl0ZW0ubmFtZSArIFwiX1wiICsgaXRlbS5udW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudWlfYWxsTnVtSW5HYW1lc3MudGV4dCA9IGRhdGEucHJpemVzWzBdLm51bSArIFwiXCI7XHJcbiAgICAgICAgdGhpcy51aV9jaGFuZ2p1blJlY29yZHNzLnRleHQgPSBkYXRhLlRhYmxlV2luQ291bnQgKyBcIlwiO1xyXG4gICAgICAgIHRoaXMudWlfZGFtYW5nT3JCYWlzaG91c3MudGV4dCA9IGRhdGEucmFua2luZy5sZW5ndGggKyBcIlwiO1xyXG4gICAgICAgIHRoaXMudWlfYWxsU2hvdXNodXNzLnRleHQgPSBkYXRhLlRvdGFsUm91bmRDb3VudCArIFwiXCI7XHJcbiAgICAgICAgdGhpcy51aV9jaGFuZ2p1bkRhaXJ1c3MudGV4dCA9IGRhdGEuUmF0ZU9mUmV0dXJuICsgXCIlXCI7XHJcblxyXG4gICAgICAgIHRoaXMucmFua2luZ0xpc3QgPSBkYXRhLnJhbmtpbmc7XHJcbiAgICAgICAgdGhpcy5yYW5raW5nTGlzdC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLnJhbmsgLSBiLnJhbms7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51aV9uMTMwLm51bUl0ZW1zID0gZGF0YS5yYW5raW5nLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyTGlzdChpbmRleDogbnVtYmVyLCBpdGVtOiBmZ3VpLkdPYmplY3QpIHtcclxuICAgICAgICBsZXQgZ28gPSA8Zmd1aS5HQ29tcG9uZW50Pml0ZW07XHJcbiAgICAgICAgZ28uZ2V0Q2hpbGQoXCJuNlwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdGhpcy5yYW5raW5nTGlzdFtpbmRleF0ucmFuayArIFwiXCI7XHJcbiAgICAgICAgVUlVdGlsLmxvYWRJbWFnZShnby5nZXRDaGlsZChcIm43XCIpLmFzQ29tLmdldENoaWxkKFwibjBcIikuYXNMb2FkZXIsIHRoaXMucmFua2luZ0xpc3RbaW5kZXhdLnBpYyk7XHJcbiAgICAgICAgZ28uZ2V0Q2hpbGQoXCJuOFwiKS5hc1RleHRGaWVsZC50ZXh0ID0gdGhpcy5yYW5raW5nTGlzdFtpbmRleF0ubmFtZTtcclxuICAgICAgICBnby5nZXRDaGlsZChcIm41XCIpLmFzVGV4dEZpZWxkLnRleHQgPSB0aGlzLnJhbmtpbmdMaXN0W2luZGV4XS5wcml6ZXNbMF0ubnVtICsgXCJcIjtcclxuICAgICAgICBnby5nZXRDaGlsZChcIm45XCIpLmFzVGV4dEZpZWxkLnRleHQgPSAodGhpcy5yYW5raW5nTGlzdFtpbmRleF0ucHJvcG9ydGlvbiAqIDEwMCkgKyBcIiVcIjtcclxuICAgIH1cclxufSJdfQ==
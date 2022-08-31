
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@slotsmaster/ui-common/lib/TurnTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27b0842uy5PM6U3vPQGau6f', 'TurnTable');
// Script/modules/@slotsmaster/ui-common/lib/TurnTable.ts

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
var FguiComponentBase_1 = require("../../../@mogafa/fairygui-component/lib/FguiComponentBase");
var TurnTable = /** @class */ (function (_super) {
    __extends(TurnTable, _super);
    function TurnTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ifRun = false;
        _this.time = 6;
        _this.circle = 5;
        _this.degree = 0; //结束目标点
        return _this;
    }
    TurnTable.prototype.createChildComponents = function () {
        _super.prototype.createChildComponents.call(this);
        this.addButtonEvent();
        //内部转盘
        this.insideWheel = this.fguiComponent.getChild("internalTurntable").asCom;
    };
    TurnTable.prototype.onShow = function (callBack, wheelData) {
        this.wheelFinishedCallback = callBack;
    };
    TurnTable.prototype.addButtonEvent = function () {
        this.fguiComponent.getChild(this.SpinButtonName).asButton.onClick(this.onClickGetSpin, this);
        this.fguiComponent.getChild(this.CollectButtonName).asButton.onClick(this.onClickCollect, this);
    };
    Object.defineProperty(TurnTable.prototype, "gameWheel", {
        get: function () {
            return this._gameWheel;
        },
        set: function (data) {
            this._gameWheel = data;
        },
        enumerable: false,
        configurable: true
    });
    TurnTable.prototype.onClickGetSpin = function () {
        //this.StartSpin();
    };
    TurnTable.prototype.onClickCollect = function () {
        if (this.wheelFinishedCallback) {
            this.wheelFinishedCallback();
        }
        this.fguiComponent.visible = false;
    };
    TurnTable.prototype.StartSpin = function () {
        if (this.ifRun)
            return;
        this.ifRun = true;
        this.startTurn();
    };
    /**
     * 转盘数据
     * @param finalCodes 目标值
     * @param offset  偏差值
     */
    TurnTable.prototype.initData = function (finalCodes, offset) {
        if (offset === void 0) { offset = 0; }
        var dataArr = this.goldTurnData;
        if (dataArr.length != this.goldTurnLabel.length) {
            cc.error("转盘数据不一致");
        }
        else {
            //取目标值index
            this.insideWheel.node.angle = 0;
            var finalIndex = dataArr.indexOf(finalCodes);
            var angle = 360 / dataArr.length;
            if (finalIndex != -1) {
                this.degree = (dataArr.length - finalIndex) * angle + offset;
                for (var i = 0; i < this.goldTurnLabel.length; i++) {
                    this.insideWheel.getChild(this.goldTurnLabel[i]).asLabel.text = String(dataArr[i]);
                }
            }
            else {
                cc.error("查找结果数据失败");
            }
        }
    };
    TurnTable.prototype.startTurn = function () {
        var finished = cc.callFunc(function () {
            this.finished();
        }, this);
        var roActEas = cc
            .rotateTo(this.time, 360 * this.circle + this.degree + 11.25)
            .easing(cc.easeCubicActionInOut());
        var roActEas_stop = cc.rotateBy(0.5, 11.25).easing(cc.easeCircleActionIn());
        var action = cc.sequence(roActEas, roActEas_stop, finished); //停止状态 慢 - 快 - 慢
        this.insideWheel.node.runAction(action);
    };
    /**
     * 转盘结束回调(可用于显示结果之后后续步骤)
     */
    TurnTable.prototype.finished = function () {
        this.ifRun = false;
    };
    TurnTable.prototype.Show = function () {
        this.active = true;
        if (this._fguiComponent) {
            this._fguiComponent.visible = true;
        }
    };
    TurnTable.prototype.Hide = function () {
        this.active = false;
        this._fguiComponent.visible = false;
    };
    return TurnTable;
}(FguiComponentBase_1.default));
exports.default = TurnTable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAc2xvdHNtYXN0ZXJcXHVpLWNvbW1vblxcbGliXFxUdXJuVGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0ZBQTBGO0FBRzFGO0lBQWdELDZCQUFpQjtJQUFqRTtRQUFBLHFFQWlIQztRQTFHYSxXQUFLLEdBQVksS0FBSyxDQUFDO1FBSXZCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixZQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTzs7SUFvR3pDLENBQUM7SUFsR2EseUNBQXFCLEdBQS9CO1FBQ0ksaUJBQU0scUJBQXFCLFdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsTUFBTTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDOUUsQ0FBQztJQUVNLDBCQUFNLEdBQWIsVUFBYyxRQUFrQixFQUFFLFNBQStCO1FBQzdELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUVPLGtDQUFjLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVELHNCQUFjLGdDQUFTO2FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFB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RztJQUNPLDRCQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUdELHdCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FqSEEsQUFpSEMsQ0FqSCtDLDJCQUFpQixHQWlIaEUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBGZ3VpQ29tcG9uZW50QmFzZSBmcm9tIFwiLi4vLi4vLi4vQG1vZ2FmYS9mYWlyeWd1aS1jb21wb25lbnQvbGliL0ZndWlDb21wb25lbnRCYXNlXCI7XG5pbXBvcnQgU3BpblJlc3VsdHNHYW1lV2hlZWwgZnJvbSBcIi4uLy4uLy4uL3NwaW4tcmVzdWx0L1NwaW5SZXN1bHRzR2FtZVdoZWVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFR1cm5UYWJsZSBleHRlbmRzIEZndWlDb21wb25lbnRCYXNlIHtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGdvbGRUdXJuTGFiZWwoKTogc3RyaW5nW107XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBnb2xkVHVybkRhdGEoKTogc3RyaW5nW107XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBTcGluQnV0dG9uTmFtZSgpOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldCBDb2xsZWN0QnV0dG9uTmFtZSgpOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGluc2lkZVdoZWVsOiBmZ3VpLkdDb21wb25lbnQ7XG4gICAgcHJvdGVjdGVkIHR1cm5TcGluOiBmZ3VpLkdCdXR0b247XG4gICAgcHJvdGVjdGVkIGlmUnVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIHdoZWVsRmluaXNoZWRDYWxsYmFjazogRnVuY3Rpb247XG4gICAgcHJvdGVjdGVkIF9nYW1lV2hlZWw6IFNwaW5SZXN1bHRzR2FtZVdoZWVsO1xuXG4gICAgcHJvdGVjdGVkIHRpbWU6IG51bWJlciA9IDY7XG4gICAgcHJvdGVjdGVkIGNpcmNsZTogbnVtYmVyID0gNTtcbiAgICBwcm90ZWN0ZWQgZGVncmVlOiBudW1iZXIgPSAwOyAvL+e7k+adn+ebruagh+eCuVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNoaWxkQ29tcG9uZW50cygpIHtcbiAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuYWRkQnV0dG9uRXZlbnQoKTtcbiAgICAgICAgLy/lhoXpg6jovaznm5hcbiAgICAgICAgdGhpcy5pbnNpZGVXaGVlbCA9IHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZChcImludGVybmFsVHVybnRhYmxlXCIpLmFzQ29tO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNob3coY2FsbEJhY2s6IEZ1bmN0aW9uLCB3aGVlbERhdGE6IFNwaW5SZXN1bHRzR2FtZVdoZWVsKSB7XG4gICAgICAgIHRoaXMud2hlZWxGaW5pc2hlZENhbGxiYWNrID0gY2FsbEJhY2s7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRCdXR0b25FdmVudCgpIHtcbiAgICAgICAgdGhpcy5mZ3VpQ29tcG9uZW50LmdldENoaWxkKHRoaXMuU3BpbkJ1dHRvbk5hbWUpLmFzQnV0dG9uLm9uQ2xpY2sodGhpcy5vbkNsaWNrR2V0U3BpbiwgdGhpcyk7XG4gICAgICAgIHRoaXMuZmd1aUNvbXBvbmVudC5nZXRDaGlsZCh0aGlzLkNvbGxlY3RCdXR0b25OYW1lKS5hc0J1dHRvbi5vbkNsaWNrKHRoaXMub25DbGlja0NvbGxlY3QsIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXQgZ2FtZVdoZWVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZVdoZWVsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZXQgZ2FtZVdoZWVsKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZ2FtZVdoZWVsID0gZGF0YTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DbGlja0dldFNwaW4oKSB7XG4gICAgICAgIC8vdGhpcy5TdGFydFNwaW4oKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25DbGlja0NvbGxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLndoZWVsRmluaXNoZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy53aGVlbEZpbmlzaGVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZndWlDb21wb25lbnQudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBTdGFydFNwaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlmUnVuKSByZXR1cm47XG4gICAgICAgIHRoaXMuaWZSdW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0VHVybigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi9rOebmOaVsOaNrlxuICAgICAqIEBwYXJhbSBmaW5hbENvZGVzIOebruagh+WAvFxuICAgICAqIEBwYXJhbSBvZmZzZXQgIOWBj+W3ruWAvFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0RGF0YShmaW5hbENvZGVzOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyID0gMCkge1xuICAgICAgICBjb25zdCBkYXRhQXJyOiBzdHJpbmdbXSA9IHRoaXMuZ29sZFR1cm5EYXRhO1xuICAgICAgICBpZiAoZGF0YUFyci5sZW5ndGggIT0gdGhpcy5nb2xkVHVybkxhYmVsLmxlbmd0aCkge1xuICAgICAgICAgICAgY2MuZXJyb3IoXCLovaznm5jmlbDmja7kuI3kuIDoh7RcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+WPluebruagh+WAvGluZGV4XG4gICAgICAgICAgICB0aGlzLmluc2lkZVdoZWVsLm5vZGUuYW5nbGUgPSAwO1xuICAgICAgICAgICAgbGV0IGZpbmFsSW5kZXg6IG51bWJlciA9IGRhdGFBcnIuaW5kZXhPZihmaW5hbENvZGVzKTtcbiAgICAgICAgICAgIGxldCBhbmdsZTogbnVtYmVyID0gMzYwIC8gZGF0YUFyci5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoZmluYWxJbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVncmVlID0gKGRhdGFBcnIubGVuZ3RoIC0gZmluYWxJbmRleCkgKiBhbmdsZSArIG9mZnNldDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ29sZFR1cm5MYWJlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2lkZVdoZWVsLmdldENoaWxkKHRoaXMuZ29sZFR1cm5MYWJlbFtpXSkuYXNMYWJlbC50ZXh0ID0gU3RyaW5nKGRhdGFBcnJbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoXCLmn6Xmib7nu5PmnpzmlbDmja7lpLHotKVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc3RhcnRUdXJuKCkge1xuICAgICAgICBsZXQgZmluaXNoZWQgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIGxldCByb0FjdEVhcyA9IGNjXG4gICAgICAgICAgICAucm90YXRlVG8odGhpcy50aW1lLCAzNjAgKiB0aGlzLmNpcmNsZSArIHRoaXMuZGVncmVlICsgMTEuMjUpXG4gICAgICAgICAgICAuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluT3V0KCkpO1xuICAgICAgICBsZXQgcm9BY3RFYXNfc3RvcCA9IGNjLnJvdGF0ZUJ5KDAuNSwgMTEuMjUpLmVhc2luZyhjYy5lYXNlQ2lyY2xlQWN0aW9uSW4oKSk7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShyb0FjdEVhcywgcm9BY3RFYXNfc3RvcCwgZmluaXNoZWQpOyAvL+WBnOatoueKtuaAgSDmhaIgLSDlv6sgLSDmhaJcbiAgICAgICAgdGhpcy5pbnNpZGVXaGVlbC5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi9rOebmOe7k+adn+Wbnuiwgyjlj6/nlKjkuo7mmL7npLrnu5PmnpzkuYvlkI7lkI7nu63mraXpqqQpXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZpbmlzaGVkKCkge1xuICAgICAgICB0aGlzLmlmUnVuID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBTaG93KCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9mZ3VpQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9mZ3VpQ29tcG9uZW50LnZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgSGlkZSgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmd1aUNvbXBvbmVudC52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxufVxuIl19
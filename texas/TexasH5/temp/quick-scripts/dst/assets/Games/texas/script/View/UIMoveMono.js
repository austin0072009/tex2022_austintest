
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/UIMoveMono.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c262aQhFRBAX5WKUBL1tT+Y', 'UIMoveMono');
// Games/texas/script/View/UIMoveMono.ts

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
exports.UIMoveMono = exports.UIMoveMonoFgui = void 0;
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var TimeInfoMgrTex_1 = require("./TimeInfoMgrTex");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIMoveMonoFgui = /** @class */ (function (_super) {
    __extends(UIMoveMonoFgui, _super);
    function UIMoveMonoFgui() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFade = false;
        _this.delay = 0;
        _this.speed = 500;
        _this.fixedTime = 1;
        _this.isUseSpeed = true;
        _this.isEndHide = false; //结束之后是隐藏
        _this.isResetPos = true; //结束之后是否还原位置
        _this.fromTs = null;
        _this.toTs = null;
        _this.onCmp = null;
        return _this;
    }
    // Start is called before the first frame update
    UIMoveMonoFgui.prototype.Start = function () {
        //Move();旁观玩家进来如果有下注会造成筹码第一次不移动到底池bug
    };
    UIMoveMonoFgui.prototype.OnLoadCompleted = function () {
        this.node.active = false;
    };
    UIMoveMonoFgui.prototype.AutoSetGoProperty = function () { };
    UIMoveMonoFgui.prototype.Move = function (toTarget, onCmp) {
        if (toTarget === void 0) { toTarget = null; }
        if (onCmp === void 0) { onCmp = null; }
        this.Move2(this.delay, toTarget, onCmp);
    };
    UIMoveMonoFgui.prototype.Move2 = function (delay, toTarget, onCmp) {
        var _this = this;
        if (toTarget === void 0) { toTarget = null; }
        if (onCmp === void 0) { onCmp = null; }
        if (toTarget == null) {
            toTarget = this.toTs;
        }
        if (toTarget == null) {
            return;
        }
        this.onCmp = onCmp;
        this.node.stopAllActions();
        if (delay > 0) {
            var timeout = setTimeout(function () {
                _this.DoMove(toTarget);
            }, delay * 1000);
            TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
        }
        else {
            this.DoMove(toTarget);
        }
    };
    UIMoveMonoFgui.prototype.DoMove = function (toTarget) {
        var _this = this;
        if (toTarget == null) {
            return;
        }
        // this.Show();
        if (this.isFade) {
            this.node.runAction(cc.fadeTo(0, 1)); //gameObject.getOrAddComponent<CanvasGroup>().DOFade(1, 0);
        }
        this.startPos = this.fromTs != null ? this.fromTs.node : this.node;
        this.moveN1toN2(this.node, this.startPos);
        var time = this.fixedTime;
        // if (this.isUseSpeed)
        // {
        //     let worldTo = toTarget.node.parent.convertToWorldSpaceAR(toTarget.node.position);
        //     let worldStart = this.node.parent.convertToWorldSpaceAR(this.node.position);
        //     let dis:cc.Vec2 = cc.v2(worldTo.x - worldStart.x, worldTo.y - worldStart.y);
        //     if (this.speed <= 0) { this.speed = 1; }
        //     time = dis.mag() / this.speed;
        //     console.log("======MoveTime="+time);
        // }
        var sequence = cc.sequence(cc.moveTo(time, this.convertNodeSpaceAR(this.node, toTarget.node)), cc.callFunc(function () {
            _this.HandleMoveComplete();
            console.log("移动筹码完成======pos= " + _this.node.position);
        }));
        this.node.runAction(sequence);
    };
    UIMoveMonoFgui.prototype.HandleMoveComplete = function () {
        var _this = this;
        if (this.isFade) {
            var sequence = cc.sequence(cc.fadeTo(1, 0), cc.callFunc(function () {
                _this.HandleOnComplete();
            }));
            this.node.runAction(sequence);
        }
        else {
            this.HandleOnComplete();
        }
    };
    UIMoveMonoFgui.prototype.HandleOnComplete = function () {
        if (this.isEndHide) {
            this.Hide();
        }
        if (this.isResetPos) {
            this.moveN1toN2(this.node, this.startPos);
        }
        if (this.onCmp != null) {
            for (var i = 0; i < this.onCmp.length; i++) {
                this.onCmp[i]();
            }
            this.onCmp = null;
        }
    };
    UIMoveMonoFgui.prototype.Stop = function () {
        this.node.stopAllActions();
    };
    // 把 node1移动到 node2的位置
    UIMoveMonoFgui.prototype.moveN1toN2 = function (node1, node2) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    };
    // 获取把 node1移动到 node2位置后的坐标
    UIMoveMonoFgui.prototype.convertNodeSpaceAR = function (node1, node2) {
        var v = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
        return cc.v2(v.x, v.y);
    };
    UIMoveMonoFgui.prototype.Show = function () {
        this.node.active = true;
        this.visible = true;
    };
    UIMoveMonoFgui.prototype.Hide = function () {
        this.node.active = false;
        this.visible = false;
    };
    UIMoveMonoFgui = __decorate([
        ccclass
    ], UIMoveMonoFgui);
    return UIMoveMonoFgui;
}(fgui.GComponent));
exports.UIMoveMonoFgui = UIMoveMonoFgui;
var UIMoveMono = /** @class */ (function (_super) {
    __extends(UIMoveMono, _super);
    function UIMoveMono() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFade = false;
        _this.delay = 0;
        _this.speed = 500;
        _this.fixedTime = 1;
        _this.isUseSpeed = true;
        _this.isEndHide = false; //结束之后是隐藏
        _this.isResetPos = true; //结束之后是否还原位置
        _this.fromTs = null;
        _this.toTs = null;
        _this.onCmp = null;
        return _this;
    }
    // Start is called before the first frame update
    UIMoveMono.prototype.Start = function () {
    };
    UIMoveMono.prototype.OnLoadCompleted = function () {
        this.node.active = false;
    };
    UIMoveMono.prototype.AutoSetGoProperty = function () { };
    UIMoveMono.prototype.Move = function (toTarget, onCmp) {
        if (toTarget === void 0) { toTarget = null; }
        if (onCmp === void 0) { onCmp = null; }
        this.Move2(this.delay, toTarget, onCmp);
    };
    UIMoveMono.prototype.Move2 = function (delay, toTarget, onCmp) {
        var _this = this;
        if (toTarget === void 0) { toTarget = null; }
        if (onCmp === void 0) { onCmp = null; }
        if (toTarget == null) {
            toTarget = this.toTs;
        }
        if (toTarget == null) {
            return;
        }
        this.onCmp = onCmp;
        this.node.stopAllActions();
        if (delay > 0) {
            var timeout = setTimeout(function () {
                _this.DoMove(toTarget);
            }, delay * 1000);
            TimeInfoMgrTex_1.default.instance.addTimerNoCallback(timeout);
        }
        else {
            this.DoMove(toTarget);
        }
    };
    UIMoveMono.prototype.DoMove = function (toTarget) {
        var _this = this;
        if (toTarget == null) {
            return;
        }
        console.log("开始移动物体：" + this.name);
        if (this.isFade) {
            this.node.runAction(cc.fadeTo(0, 1)); //gameObject.getOrAddComponent<CanvasGroup>().DOFade(1, 0);
        }
        this.startPos = this.fromTs != null ? this.fromTs.node : this.node;
        this.moveN1toN2(this.node, this.startPos);
        var time = 2; // this.fixedTime;
        // if (this.isUseSpeed)
        // {
        //     let worldTo = toTarget.node.parent.convertToWorldSpaceAR(toTarget.node.position);
        //     let worldStart = this.node.parent.convertToWorldSpaceAR(this.node.position);
        //     let dis:cc.Vec2 = cc.v2(worldTo.x - worldStart.x, worldTo.y - worldStart.y);
        //     if (this.speed <= 0) { this.speed = 1; }
        //     time = dis.mag() / this.speed;
        //     console.log("======MoveTime="+time);
        // }
        var self = this;
        var sequence = cc.sequence(cc.moveTo(time, self.convertNodeSpaceAR(self.fguiComponent.node, toTarget.node)), cc.callFunc(function () {
            self.HandleMoveComplete();
            console.log("完成移动物体：" + _this.name);
        }));
        this.node.runAction(sequence);
    };
    UIMoveMono.prototype.HandleMoveComplete = function () {
        var _this = this;
        if (this.isFade) {
            var sequence = cc.sequence(cc.fadeTo(1, 0), cc.callFunc(function () {
                _this.HandleOnComplete();
            }));
            this.node.runAction(sequence);
        }
        else {
            this.HandleOnComplete();
        }
    };
    UIMoveMono.prototype.HandleOnComplete = function () {
        if (this.isEndHide) {
            this.Hide();
        }
        if (this.isResetPos) {
            this.moveN1toN2(this.node, this.startPos);
        }
        if (this.onCmp != null) {
            this.onCmp();
            this.onCmp = null;
        }
    };
    UIMoveMono.prototype.Stop = function () {
        this.node.stopAllActions();
    };
    // 把 node1移动到 node2的位置
    UIMoveMono.prototype.moveN1toN2 = function (node1, node2) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    };
    // 获取把 node1移动到 node2位置后的坐标
    UIMoveMono.prototype.convertNodeSpaceAR = function (node1, node2) {
        var v = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
        return cc.v2(v.x, v.y);
    };
    UIMoveMono.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
    };
    UIMoveMono.prototype.Hide = function () {
        this.node.active = false;
        _super.prototype.Hide.call(this);
    };
    return UIMoveMono;
}(ViewBase_1.default));
exports.UIMoveMono = UIMoveMono;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFVJTW92ZU1vbm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtFQUE2RDtBQUM3RCxtREFBOEM7QUFFeEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0Msa0NBQWU7SUFBbkQ7UUFBQSxxRUEwSEM7UUF6SFUsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFdBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1osZUFBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQSxTQUFTO1FBQzNCLGdCQUFVLEdBQUcsSUFBSSxDQUFDLENBQUEsWUFBWTtRQUc5QixZQUFNLEdBQW9CLElBQUksQ0FBQztRQUMvQixVQUFJLEdBQW9CLElBQUksQ0FBQztRQUM1QixXQUFLLEdBQWUsSUFBSSxDQUFDOztJQThHckMsQ0FBQztJQTVHRyxnREFBZ0Q7SUFDaEQsOEJBQUssR0FBTDtRQUNJLHFDQUFxQztJQUN6QyxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsMENBQWlCLEdBQWpCLGNBQXNCLENBQUM7SUFFaEIsNkJBQUksR0FBWCxVQUFZLFFBQWdDLEVBQUUsS0FBd0I7UUFBMUQseUJBQUEsRUFBQSxlQUFnQztRQUFFLHNCQUFBLEVBQUEsWUFBd0I7UUFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sOEJBQUssR0FBWixVQUFhLEtBQWEsRUFBRSxRQUFnQyxFQUFFLEtBQXdCO1FBQXRGLGlCQWlCQztRQWpCMkIseUJBQUEsRUFBQSxlQUFnQztRQUFFLHNCQUFBLEVBQUEsWUFBd0I7UUFDbEYsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ2xCLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDO2dCQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDakIsd0JBQWMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkQ7YUFDSTtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRU8sK0JBQU0sR0FBZCxVQUFlLFFBQXlCO1FBQXhDLGlCQXlCQztRQXhCRyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDakMsZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSwyREFBMkQ7U0FDbkc7UUFHRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsdUJBQXVCO1FBQ3ZCLElBQUk7UUFDSix3RkFBd0Y7UUFDeEYsbUZBQW1GO1FBQ25GLG1GQUFtRjtRQUNuRiwrQ0FBK0M7UUFDL0MscUNBQXFDO1FBQ3JDLDJDQUEyQztRQUMzQyxJQUFJO1FBQ0osSUFBSSxRQUFRLEdBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzVHLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVNLDJDQUFrQixHQUF6QjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxRQUFRLEdBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUN6RCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDaEM7YUFDSTtZQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUdNLHlDQUFnQixHQUF2QjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUFFO1FBQ3BDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FBRTtRQUNuRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBRU0sNkJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELHNCQUFzQjtJQUNmLG1DQUFVLEdBQWpCLFVBQWtCLEtBQWMsRUFBRSxLQUFjO1FBQzVDLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQzFHLENBQUM7SUFDRCwyQkFBMkI7SUFDcEIsMkNBQWtCLEdBQXpCLFVBQTBCLEtBQWMsRUFBRSxLQUFjO1FBQ3BELElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5RixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQXpIUSxjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBMEgxQjtJQUFELHFCQUFDO0NBMUhELEFBMEhDLENBMUhtQyxJQUFJLENBQUMsVUFBVSxHQTBIbEQ7QUExSFksd0NBQWM7QUE2SDNCO0lBQWdDLDhCQUFRO0lBQXhDO1FBQUEscUVBeUhDO1FBeEhVLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixXQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFTLEdBQUcsS0FBSyxDQUFDLENBQUEsU0FBUztRQUMzQixnQkFBVSxHQUFHLElBQUksQ0FBQyxDQUFBLFlBQVk7UUFHOUIsWUFBTSxHQUFvQixJQUFJLENBQUM7UUFDL0IsVUFBSSxHQUFvQixJQUFJLENBQUM7UUFDNUIsV0FBSyxHQUFhLElBQUksQ0FBQzs7SUE2R25DLENBQUM7SUEzR0csZ0RBQWdEO0lBQ2hELDBCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsb0NBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsc0NBQWlCLEdBQWpCLGNBQXNCLENBQUM7SUFFaEIseUJBQUksR0FBWCxVQUFZLFFBQWdDLEVBQUUsS0FBc0I7UUFBeEQseUJBQUEsRUFBQSxlQUFnQztRQUFFLHNCQUFBLEVBQUEsWUFBc0I7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU0sMEJBQUssR0FBWixVQUFhLEtBQWEsRUFBRSxRQUFnQyxFQUFFLEtBQXNCO1FBQXBGLGlCQWlCQztRQWpCMkIseUJBQUEsRUFBQSxlQUFnQztRQUFFLHNCQUFBLEVBQUEsWUFBc0I7UUFDaEYsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ2xCLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDO2dCQUNyQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFCLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDakIsd0JBQWMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkQ7YUFDSTtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRU8sMkJBQU0sR0FBZCxVQUFlLFFBQXlCO1FBQXhDLGlCQTZCQztRQTVCRyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSwyREFBMkQ7U0FDbkc7UUFHRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3pDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQSxDQUFBLGtCQUFrQjtRQUM5Qix1QkFBdUI7UUFDdkIsSUFBSTtRQUNKLHdGQUF3RjtRQUN4RixtRkFBbUY7UUFDbkYsbUZBQW1GO1FBQ25GLCtDQUErQztRQUMvQyxxQ0FBcUM7UUFDckMsMkNBQTJDO1FBQzNDLElBQUk7UUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxRQUFRLEdBQVEsRUFBRSxDQUFDLFFBQVEsQ0FDM0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNoRixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUNMLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRU0sdUNBQWtCLEdBQXpCO1FBQUEsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLFFBQVEsR0FBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3pELEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtTQUNoQzthQUNJO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBR00scUNBQWdCLEdBQXZCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQUU7UUFDcEMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUFFO1FBQ25FLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUFFO0lBQ2hFLENBQUM7SUFFTSx5QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0JBQXNCO0lBQ2YsK0JBQVUsR0FBakIsVUFBa0IsS0FBYyxFQUFFLEtBQWM7UUFDNUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDMUcsQ0FBQztJQUNELDJCQUEyQjtJQUNwQix1Q0FBa0IsR0FBekIsVUFBMEIsS0FBYyxFQUFFLEtBQWM7UUFDcEQsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzlGLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixpQkFBTSxJQUFJLFdBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0seUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixpQkFBTSxJQUFJLFdBQUUsQ0FBQztJQUNqQixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQXpIQSxBQXlIQyxDQXpIK0Isa0JBQVEsR0F5SHZDO0FBekhZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXdCYXNlIGZyb20gXCIuLi8uLi8uLi8uLi9TY3JpcHQvQmFzZUZyYW1lL1ZpZXdCYXNlXCI7XG5pbXBvcnQgVGltZUluZm9NZ3JUZXggZnJvbSBcIi4vVGltZUluZm9NZ3JUZXhcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBVSU1vdmVNb25vRmd1aSBleHRlbmRzIGZndWkuR0NvbXBvbmVudCB7XG4gICAgcHVibGljIGlzRmFkZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBkZWxheSA9IDA7XG4gICAgcHVibGljIHNwZWVkID0gNTAwO1xuICAgIHB1YmxpYyBmaXhlZFRpbWUgPSAxO1xuICAgIHB1YmxpYyBpc1VzZVNwZWVkID0gdHJ1ZTtcbiAgICBwdWJsaWMgaXNFbmRIaWRlID0gZmFsc2U7Ly/nu5PmnZ/kuYvlkI7mmK/pmpDol49cbiAgICBwdWJsaWMgaXNSZXNldFBvcyA9IHRydWU7Ly/nu5PmnZ/kuYvlkI7mmK/lkKbov5jljp/kvY3nva5cbiAgICBwdWJsaWMgZWFzZTogbnVtYmVyO1xuXG4gICAgcHVibGljIGZyb21UczogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgdG9UczogZmd1aS5HQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIG9uQ21wOiBGdW5jdGlvbltdID0gbnVsbDtcblxuICAgIC8vIFN0YXJ0IGlzIGNhbGxlZCBiZWZvcmUgdGhlIGZpcnN0IGZyYW1lIHVwZGF0ZVxuICAgIFN0YXJ0KCkge1xuICAgICAgICAvL01vdmUoKTvml4Hop4Lnjqnlrrbov5vmnaXlpoLmnpzmnInkuIvms6jkvJrpgKDmiJDnrbnnoIHnrKzkuIDmrKHkuI3np7vliqjliLDlupXmsaBidWdcbiAgICB9XG5cbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBBdXRvU2V0R29Qcm9wZXJ0eSgpIHsgfVxuXG4gICAgcHVibGljIE1vdmUodG9UYXJnZXQ6IGZndWkuR0NvbXBvbmVudCA9IG51bGwsIG9uQ21wOiBGdW5jdGlvbltdID0gbnVsbCkge1xuICAgICAgICB0aGlzLk1vdmUyKHRoaXMuZGVsYXksIHRvVGFyZ2V0LCBvbkNtcCk7XG4gICAgfVxuXG4gICAgcHVibGljIE1vdmUyKGRlbGF5OiBudW1iZXIsIHRvVGFyZ2V0OiBmZ3VpLkdDb21wb25lbnQgPSBudWxsLCBvbkNtcDogRnVuY3Rpb25bXSA9IG51bGwpIHtcbiAgICAgICAgaWYgKHRvVGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRvVGFyZ2V0ID0gdGhpcy50b1RzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvVGFyZ2V0ID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMub25DbXAgPSBvbkNtcDtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgICAgICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5Eb01vdmUodG9UYXJnZXQpO1xuICAgICAgICAgICAgfSwgZGVsYXkgKiAxMDAwKTtcbiAgICAgICAgICAgIFRpbWVJbmZvTWdyVGV4Lmluc3RhbmNlLmFkZFRpbWVyTm9DYWxsYmFjayh0aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuRG9Nb3ZlKHRvVGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHN0YXJ0UG9zOiBjYy5Ob2RlO1xuICAgIHByaXZhdGUgRG9Nb3ZlKHRvVGFyZ2V0OiBmZ3VpLkdDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKHRvVGFyZ2V0ID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgIC8vIHRoaXMuU2hvdygpO1xuICAgICAgICBpZiAodGhpcy5pc0ZhZGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MuZmFkZVRvKDAsIDEpKTsvL2dhbWVPYmplY3QuZ2V0T3JBZGRDb21wb25lbnQ8Q2FudmFzR3JvdXA+KCkuRE9GYWRlKDEsIDApO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLnN0YXJ0UG9zID0gdGhpcy5mcm9tVHMgIT0gbnVsbCA/IHRoaXMuZnJvbVRzLm5vZGUgOiB0aGlzLm5vZGU7XG4gICAgICAgIHRoaXMubW92ZU4xdG9OMih0aGlzLm5vZGUsIHRoaXMuc3RhcnRQb3MpXG4gICAgICAgIGxldCB0aW1lID0gdGhpcy5maXhlZFRpbWU7XG4gICAgICAgIC8vIGlmICh0aGlzLmlzVXNlU3BlZWQpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGxldCB3b3JsZFRvID0gdG9UYXJnZXQubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRvVGFyZ2V0Lm5vZGUucG9zaXRpb24pO1xuICAgICAgICAvLyAgICAgbGV0IHdvcmxkU3RhcnQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAvLyAgICAgbGV0IGRpczpjYy5WZWMyID0gY2MudjIod29ybGRUby54IC0gd29ybGRTdGFydC54LCB3b3JsZFRvLnkgLSB3b3JsZFN0YXJ0LnkpO1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc3BlZWQgPD0gMCkgeyB0aGlzLnNwZWVkID0gMTsgfVxuICAgICAgICAvLyAgICAgdGltZSA9IGRpcy5tYWcoKSAvIHRoaXMuc3BlZWQ7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIj09PT09PU1vdmVUaW1lPVwiK3RpbWUpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGxldCBzZXF1ZW5jZTogYW55ID0gY2Muc2VxdWVuY2UoY2MubW92ZVRvKHRpbWUsIHRoaXMuY29udmVydE5vZGVTcGFjZUFSKHRoaXMubm9kZSwgdG9UYXJnZXQubm9kZSkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkhhbmRsZU1vdmVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLnp7vliqjnrbnnoIHlrozmiJA9PT09PT1wb3M9IFwiICsgdGhpcy5ub2RlLnBvc2l0aW9uKTtcbiAgICAgICAgfSkpXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oc2VxdWVuY2UpXG4gICAgfVxuXG4gICAgcHVibGljIEhhbmRsZU1vdmVDb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGYWRlKSB7XG4gICAgICAgICAgICBsZXQgc2VxdWVuY2U6IGFueSA9IGNjLnNlcXVlbmNlKGNjLmZhZGVUbygxLCAwKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuSGFuZGxlT25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHNlcXVlbmNlKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5IYW5kbGVPbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyBIYW5kbGVPbkNvbXBsZXRlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0VuZEhpZGUpIHsgdGhpcy5IaWRlKCk7IH1cbiAgICAgICAgaWYgKHRoaXMuaXNSZXNldFBvcykgeyB0aGlzLm1vdmVOMXRvTjIodGhpcy5ub2RlLCB0aGlzLnN0YXJ0UG9zKTsgfVxuICAgICAgICBpZiAodGhpcy5vbkNtcCAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub25DbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ21wW2ldKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uQ21wID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBTdG9wKCkge1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB9XG5cbiAgICAvLyDmioogbm9kZTHnp7vliqjliLAgbm9kZTLnmoTkvY3nva5cbiAgICBwdWJsaWMgbW92ZU4xdG9OMihub2RlMTogY2MuTm9kZSwgbm9kZTI6IGNjLk5vZGUpIHtcbiAgICAgICAgbm9kZTEucG9zaXRpb24gPSBub2RlMS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbikpXG4gICAgfVxuICAgIC8vIOiOt+WPluaKiiBub2RlMeenu+WKqOWIsCBub2RlMuS9jee9ruWQjueahOWdkOagh1xuICAgIHB1YmxpYyBjb252ZXJ0Tm9kZVNwYWNlQVIobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlKTogY2MuVmVjMiB7XG4gICAgICAgIGxldCB2ID0gbm9kZTEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG5vZGUyLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTIucG9zaXRpb24pKTtcbiAgICAgICAgcmV0dXJuIGNjLnYyKHYueCwgdi55KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIEhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBVSU1vdmVNb25vIGV4dGVuZHMgVmlld0Jhc2Uge1xuICAgIHB1YmxpYyBpc0ZhZGUgPSBmYWxzZTtcbiAgICBwdWJsaWMgZGVsYXkgPSAwO1xuICAgIHB1YmxpYyBzcGVlZCA9IDUwMDtcbiAgICBwdWJsaWMgZml4ZWRUaW1lID0gMTtcbiAgICBwdWJsaWMgaXNVc2VTcGVlZCA9IHRydWU7XG4gICAgcHVibGljIGlzRW5kSGlkZSA9IGZhbHNlOy8v57uT5p2f5LmL5ZCO5piv6ZqQ6JePXG4gICAgcHVibGljIGlzUmVzZXRQb3MgPSB0cnVlOy8v57uT5p2f5LmL5ZCO5piv5ZCm6L+Y5Y6f5L2N572uXG4gICAgcHVibGljIGVhc2U6IG51bWJlcjtcblxuICAgIHB1YmxpYyBmcm9tVHM6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHVibGljIHRvVHM6IGZndWkuR0NvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBvbkNtcDogRnVuY3Rpb24gPSBudWxsO1xuXG4gICAgLy8gU3RhcnQgaXMgY2FsbGVkIGJlZm9yZSB0aGUgZmlyc3QgZnJhbWUgdXBkYXRlXG4gICAgU3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBPbkxvYWRDb21wbGV0ZWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBBdXRvU2V0R29Qcm9wZXJ0eSgpIHsgfVxuXG4gICAgcHVibGljIE1vdmUodG9UYXJnZXQ6IGZndWkuR0NvbXBvbmVudCA9IG51bGwsIG9uQ21wOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5Nb3ZlMih0aGlzLmRlbGF5LCB0b1RhcmdldCwgb25DbXApO1xuICAgIH1cblxuICAgIHB1YmxpYyBNb3ZlMihkZWxheTogbnVtYmVyLCB0b1RhcmdldDogZmd1aS5HQ29tcG9uZW50ID0gbnVsbCwgb25DbXA6IEZ1bmN0aW9uID0gbnVsbCkge1xuICAgICAgICBpZiAodG9UYXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdG9UYXJnZXQgPSB0aGlzLnRvVHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9UYXJnZXQgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5vbkNtcCA9IG9uQ21wO1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLkRvTW92ZSh0b1RhcmdldCk7XG4gICAgICAgICAgICB9LCBkZWxheSAqIDEwMDApO1xuICAgICAgICAgICAgVGltZUluZm9NZ3JUZXguaW5zdGFuY2UuYWRkVGltZXJOb0NhbGxiYWNrKHRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5Eb01vdmUodG9UYXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgc3RhcnRQb3M6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBEb01vdmUodG9UYXJnZXQ6IGZndWkuR0NvbXBvbmVudCkge1xuICAgICAgICBpZiAodG9UYXJnZXQgPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgY29uc29sZS5sb2coXCLlvIDlp4vnp7vliqjniankvZPvvJpcIiArIHRoaXMubmFtZSk7XG4gICAgICAgIGlmICh0aGlzLmlzRmFkZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5mYWRlVG8oMCwgMSkpOy8vZ2FtZU9iamVjdC5nZXRPckFkZENvbXBvbmVudDxDYW52YXNHcm91cD4oKS5ET0ZhZGUoMSwgMCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuc3RhcnRQb3MgPSB0aGlzLmZyb21UcyAhPSBudWxsID8gdGhpcy5mcm9tVHMubm9kZSA6IHRoaXMubm9kZTtcbiAgICAgICAgdGhpcy5tb3ZlTjF0b04yKHRoaXMubm9kZSwgdGhpcy5zdGFydFBvcylcbiAgICAgICAgbGV0IHRpbWUgPSAyLy8gdGhpcy5maXhlZFRpbWU7XG4gICAgICAgIC8vIGlmICh0aGlzLmlzVXNlU3BlZWQpXG4gICAgICAgIC8vIHtcbiAgICAgICAgLy8gICAgIGxldCB3b3JsZFRvID0gdG9UYXJnZXQubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRvVGFyZ2V0Lm5vZGUucG9zaXRpb24pO1xuICAgICAgICAvLyAgICAgbGV0IHdvcmxkU3RhcnQgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUucG9zaXRpb24pO1xuICAgICAgICAvLyAgICAgbGV0IGRpczpjYy5WZWMyID0gY2MudjIod29ybGRUby54IC0gd29ybGRTdGFydC54LCB3b3JsZFRvLnkgLSB3b3JsZFN0YXJ0LnkpO1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuc3BlZWQgPD0gMCkgeyB0aGlzLnNwZWVkID0gMTsgfVxuICAgICAgICAvLyAgICAgdGltZSA9IGRpcy5tYWcoKSAvIHRoaXMuc3BlZWQ7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIj09PT09PU1vdmVUaW1lPVwiK3RpbWUpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNlcXVlbmNlOiBhbnkgPSBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLm1vdmVUbyh0aW1lLCBzZWxmLmNvbnZlcnROb2RlU3BhY2VBUihzZWxmLmZndWlDb21wb25lbnQubm9kZSwgdG9UYXJnZXQubm9kZSkpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuSGFuZGxlTW92ZUNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlrozmiJDnp7vliqjniankvZPvvJpcIiArIHRoaXMubmFtZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHNlcXVlbmNlKVxuICAgIH1cblxuICAgIHB1YmxpYyBIYW5kbGVNb3ZlQ29tcGxldGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRmFkZSkge1xuICAgICAgICAgICAgbGV0IHNlcXVlbmNlOiBhbnkgPSBjYy5zZXF1ZW5jZShjYy5mYWRlVG8oMSwgMCksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLkhhbmRsZU9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihzZXF1ZW5jZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuSGFuZGxlT25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgSGFuZGxlT25Db21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbmRIaWRlKSB7IHRoaXMuSGlkZSgpOyB9XG4gICAgICAgIGlmICh0aGlzLmlzUmVzZXRQb3MpIHsgdGhpcy5tb3ZlTjF0b04yKHRoaXMubm9kZSwgdGhpcy5zdGFydFBvcyk7IH1cbiAgICAgICAgaWYgKHRoaXMub25DbXAgIT0gbnVsbCkgeyB0aGlzLm9uQ21wKCk7IHRoaXMub25DbXAgPSBudWxsOyB9XG4gICAgfVxuXG4gICAgcHVibGljIFN0b3AoKSB7XG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgIH1cblxuICAgIC8vIOaKiiBub2RlMeenu+WKqOWIsCBub2RlMueahOS9jee9rlxuICAgIHB1YmxpYyBtb3ZlTjF0b04yKG5vZGUxOiBjYy5Ob2RlLCBub2RlMjogY2MuTm9kZSkge1xuICAgICAgICBub2RlMS5wb3NpdGlvbiA9IG5vZGUxLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihub2RlMi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKG5vZGUyLnBvc2l0aW9uKSlcbiAgICB9XG4gICAgLy8g6I635Y+W5oqKIG5vZGUx56e75Yqo5YiwIG5vZGUy5L2N572u5ZCO55qE5Z2Q5qCHXG4gICAgcHVibGljIGNvbnZlcnROb2RlU3BhY2VBUihub2RlMTogY2MuTm9kZSwgbm9kZTI6IGNjLk5vZGUpOiBjYy5WZWMyIHtcbiAgICAgICAgbGV0IHYgPSBub2RlMS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbikpO1xuICAgICAgICByZXR1cm4gY2MudjIodi54LCB2LnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBTaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgc3VwZXIuU2hvdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBIaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHN1cGVyLkhpZGUoKTtcbiAgICB9XG59XG5cbiJdfQ==
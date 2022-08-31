"use strict";
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
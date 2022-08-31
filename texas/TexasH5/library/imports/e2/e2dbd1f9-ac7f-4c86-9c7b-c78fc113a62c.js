"use strict";
cc._RF.push(module, 'e2dbdH5rH9Mhpx7x4/BE6Ys', 'UIStatePos');
// Games/texas/script/View/UIStatePos.ts

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
var UIStateBase_1 = require("./UIStateBase");
var UIStatePos = /** @class */ (function (_super) {
    __extends(UIStatePos, _super);
    function UIStatePos() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLocal = true;
        return _this;
    }
    UIStatePos.prototype.OnLoadCompleted = function () {
        // this.node.active = false;
    };
    UIStatePos.prototype.SetState = function (state) {
        _super.prototype.SetState.call(this, state);
        this.SetPos(state);
    };
    UIStatePos.prototype.SetPos = function (state) {
        if (state < 0) {
            return;
        }
        if (this.postions != null && this.postions.length > state) {
            if (this.isLocal) {
                this.node.position = this.postions[state];
            }
            else {
                this.node.position = this.postions[state];
            }
        }
    };
    // 把 node1移动到 node2的位置
    UIStatePos.prototype.moveN1toN2 = function (node1, node2) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    };
    // 获取把 node1移动到 node2位置后的坐标
    UIStatePos.prototype.convertNodeSpaceAR = function (node1, node2) {
        return node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    };
    UIStatePos.prototype.Show = function () {
        this.node.active = true;
        _super.prototype.Show.call(this);
    };
    UIStatePos.prototype.Hide = function () {
        _super.prototype.Hide.call(this);
        this.node.active = false;
    };
    return UIStatePos;
}(UIStateBase_1.default));
exports.default = UIStatePos;

cc._RF.pop();
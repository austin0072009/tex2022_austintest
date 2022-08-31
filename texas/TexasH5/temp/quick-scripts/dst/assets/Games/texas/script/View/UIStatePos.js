
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/UIStatePos.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXFVJU3RhdGVQb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBRXhDO0lBQXdDLDhCQUFXO0lBQW5EO1FBQUEscUVBbURDO1FBakRVLGFBQU8sR0FBRyxJQUFJLENBQUM7O0lBaUQxQixDQUFDO0lBOUNHLG9DQUFlLEdBQWY7UUFDSSw0QkFBNEI7SUFDaEMsQ0FBQztJQUVNLDZCQUFRLEdBQWYsVUFBZ0IsS0FBWTtRQUV4QixpQkFBTSxRQUFRLFlBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRU8sMkJBQU0sR0FBZCxVQUFlLEtBQVk7UUFFdkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQUUsT0FBTztTQUFFO1FBRTFCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxFQUN6RDtZQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFDaEI7Z0JBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QztpQkFFRDtnQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdDO1NBRUo7SUFDTCxDQUFDO0lBRUQsc0JBQXNCO0lBQ2YsK0JBQVUsR0FBakIsVUFBa0IsS0FBYyxFQUFFLEtBQWM7UUFDNUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDMUcsQ0FBQztJQUNELDJCQUEyQjtJQUNwQix1Q0FBa0IsR0FBekIsVUFBMEIsS0FBYyxFQUFFLEtBQWM7UUFDcEQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDaEcsQ0FBQztJQUVNLHlCQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsaUJBQU0sSUFBSSxXQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLHlCQUFJLEdBQVg7UUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQW5EQSxBQW1EQyxDQW5EdUMscUJBQVcsR0FtRGxEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3RhdGVCYXNlIGZyb20gJy4vVUlTdGF0ZUJhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVN0YXRlUG9zIGV4dGVuZHMgVUlTdGF0ZUJhc2VcbntcbiAgICBwdWJsaWMgaXNMb2NhbCA9IHRydWU7XG4gICAgcHVibGljIHBvc3Rpb25zOmNjLlZlYzNbXTtcblxuICAgIE9uTG9hZENvbXBsZXRlZCgpe1xuICAgICAgICAvLyB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIFNldFN0YXRlKHN0YXRlOm51bWJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyLlNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgdGhpcy5TZXRQb3Moc3RhdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgU2V0UG9zKHN0YXRlOm51bWJlcilcbiAgICB7XG4gICAgICAgIGlmIChzdGF0ZSA8IDApIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9zdGlvbnMgIT0gbnVsbCAmJiB0aGlzLnBvc3Rpb25zLmxlbmd0aCA+IHN0YXRlIClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2NhbClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLnBvc3Rpb25zW3N0YXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLnBvc3Rpb25zW3N0YXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5oqKIG5vZGUx56e75Yqo5YiwIG5vZGUy55qE5L2N572uXG4gICAgcHVibGljIG1vdmVOMXRvTjIobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlKSB7XG4gICAgICAgIG5vZGUxLnBvc2l0aW9uID0gbm9kZTEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG5vZGUyLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTIucG9zaXRpb24pKVxuICAgIH1cbiAgICAvLyDojrflj5bmioogbm9kZTHnp7vliqjliLAgbm9kZTLkvY3nva7lkI7nmoTlnZDmoIdcbiAgICBwdWJsaWMgY29udmVydE5vZGVTcGFjZUFSKG5vZGUxOiBjYy5Ob2RlLCBub2RlMjogY2MuTm9kZSkge1xuICAgICAgICByZXR1cm4gbm9kZTEucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKG5vZGUyLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZTIucG9zaXRpb24pKVxuICAgIH1cblxuICAgIHB1YmxpYyBTaG93KCl7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBzdXBlci5TaG93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIEhpZGUoKXtcbiAgICAgICAgc3VwZXIuSGlkZSgpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxufSJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/View/CachePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '136d38o+C9DbpGB1g6XQ1VW', 'CachePool');
// Games/texas/script/View/CachePool.ts

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
exports.CacheHelper = void 0;
var ViewBase_1 = require("../../../../Script/BaseFrame/ViewBase");
var InstanceGameObjectCache_1 = require("./InstanceGameObjectCache");
var UIMoveMono_1 = require("./UIMoveMono");
var CachePool = /** @class */ (function (_super) {
    __extends(CachePool, _super);
    function CachePool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.objPools = new InstanceGameObjectCache_1.default();
        return _this;
    }
    CachePool.prototype.OnLoadCompleted = function () {
        // console.log("====CachePool====");
        fgui.UIObjectFactory.setExtension("ui://Texas/ImgChipTemplete", UIMoveMono_1.UIMoveMonoFgui);
        if (this.objPools == null) {
            this.objPools = new InstanceGameObjectCache_1.default();
        }
    };
    CachePool.prototype.AutoSetGoProperty = function () { };
    CachePool.prototype.GetCacheObject = function (name, parent, templete) {
        if (templete === void 0) { templete = null; }
        var obj = this.objPools.PopItem(name);
        if (obj == null && templete != null) {
            // console.log("====创建筹码");
            obj = fgui.UIPackage.createObject("Texas", templete, UIMoveMono_1.UIMoveMonoFgui);
            this.node.addChild(obj.node);
        }
        if (obj != null) {
            obj.name = name + obj.id;
            // console.log("====设置筹码，parent="+parent.name+" ,  obj = "+ obj.name);
            obj.node.parent = parent.node;
            obj.node.position = this.convertNodeSpaceAR(obj.node, parent.node);
        }
        return obj;
    };
    CachePool.prototype.DestroyObject = function (obj, isCache) {
        if (isCache === void 0) { isCache = true; }
        if (obj == null) {
            return;
        }
        if (isCache) {
            // console.log("----删除筹码，CacheParent ="+CacheHelper.CacheParent);
            // obj.node.setParent(CacheHelper.CacheParent);
            this.objPools.PushItem(obj, obj.name);
        }
        else {
            this.objPools.DestroyExistItem(obj, obj.name);
        }
        obj = null;
    };
    CachePool.prototype.ClearAllCache = function () {
        this.objPools.cleanAll();
    };
    // 把 node1移动到 node2的位置
    CachePool.prototype.moveN1toN2 = function (node1, node2) {
        node1.position = node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    };
    // 获取把 node1移动到 node2位置后的坐标
    CachePool.prototype.convertNodeSpaceAR = function (node1, node2) {
        return node1.parent.convertToNodeSpaceAR(node2.parent.convertToWorldSpaceAR(node2.position));
    };
    return CachePool;
}(ViewBase_1.default));
exports.default = CachePool;
var CacheHelper = /** @class */ (function () {
    function CacheHelper() {
    }
    Object.defineProperty(CacheHelper, "CacheParent", {
        get: function () {
            if (CacheHelper.cache == null) {
                // CacheHelper.CacheParent.destroy();// GameObject.DontDestroyOnLoad(this.CacheParent.gameObject);
                CacheHelper.cache = new cc.Node("_cache_");
            }
            return CacheHelper.cache;
        },
        enumerable: false,
        configurable: true
    });
    CacheHelper.cache = null;
    return CacheHelper;
}());
exports.CacheHelper = CacheHelper;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXFZpZXdcXENhY2hlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBQzdELHFFQUFnRTtBQUNoRSwyQ0FBOEM7QUFFOUM7SUFBdUMsNkJBQVE7SUFBL0M7UUFBQSxxRUEwREM7UUF6RFcsY0FBUSxHQUE0QixJQUFJLGlDQUF1QixFQUFFLENBQUM7O0lBeUQ5RSxDQUFDO0lBdkRHLG1DQUFlLEdBQWY7UUFDSSxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsNEJBQTRCLEVBQUUsMkJBQWMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGlDQUF1QixFQUFFLENBQUM7U0FDakQ7SUFDTCxDQUFDO0lBRUQscUNBQWlCLEdBQWpCLGNBQXNCLENBQUM7SUFFaEIsa0NBQWMsR0FBckIsVUFBc0IsSUFBWSxFQUFFLE1BQXVCLEVBQUUsUUFBdUI7UUFBdkIseUJBQUEsRUFBQSxlQUF1QjtRQUNoRixJQUFJLEdBQUcsR0FBaUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDakMsMkJBQTJCO1lBQzNCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLDJCQUFjLENBQUMsQ0FBQTtZQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDYixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3pCLHNFQUFzRTtZQUN0RSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUV0RTtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVNLGlDQUFhLEdBQXBCLFVBQXFCLEdBQWlCLEVBQUUsT0FBYztRQUFkLHdCQUFBLEVBQUEsY0FBYztRQUNsRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFFNUIsSUFBSSxPQUFPLEVBQUU7WUFDVCxpRUFBaUU7WUFDakUsK0NBQStDO1lBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7YUFDSTtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDtRQUNELEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRU0saUNBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBc0I7SUFDZiw4QkFBVSxHQUFqQixVQUFrQixLQUFjLEVBQUUsS0FBYztRQUM1QyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUMxRyxDQUFDO0lBQ0QsMkJBQTJCO0lBQ3BCLHNDQUFrQixHQUF6QixVQUEwQixLQUFjLEVBQUUsS0FBYztRQUNwRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUNoRyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTFEQSxBQTBEQyxDQTFEc0Msa0JBQVEsR0EwRDlDOztBQU9EO0lBQUE7SUFVQSxDQUFDO0lBUkcsc0JBQWtCLDBCQUFXO2FBQTdCO1lBQ0ksSUFBSSxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDM0Isa0dBQWtHO2dCQUNsRyxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QztZQUNELE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQztRQUU3QixDQUFDOzs7T0FBQTtJQVJjLGlCQUFLLEdBQVksSUFBSSxDQUFDO0lBU3pDLGtCQUFDO0NBVkQsQUFVQyxJQUFBO0FBVlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlld0Jhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL1NjcmlwdC9CYXNlRnJhbWUvVmlld0Jhc2VcIjtcbmltcG9ydCBJbnN0YW5jZUdhbWVPYmplY3RDYWNoZSBmcm9tIFwiLi9JbnN0YW5jZUdhbWVPYmplY3RDYWNoZVwiO1xuaW1wb3J0IHsgVUlNb3ZlTW9ub0ZndWkgfSBmcm9tIFwiLi9VSU1vdmVNb25vXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhY2hlUG9vbCBleHRlbmRzIFZpZXdCYXNlIHtcbiAgICBwcml2YXRlIG9ialBvb2xzOiBJbnN0YW5jZUdhbWVPYmplY3RDYWNoZSA9IG5ldyBJbnN0YW5jZUdhbWVPYmplY3RDYWNoZSgpO1xuXG4gICAgT25Mb2FkQ29tcGxldGVkKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT1DYWNoZVBvb2w9PT09XCIpO1xuICAgICAgICBmZ3VpLlVJT2JqZWN0RmFjdG9yeS5zZXRFeHRlbnNpb24oXCJ1aTovL1RleGFzL0ltZ0NoaXBUZW1wbGV0ZVwiLCBVSU1vdmVNb25vRmd1aSk7XG4gICAgICAgIGlmICh0aGlzLm9ialBvb2xzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMub2JqUG9vbHMgPSBuZXcgSW5zdGFuY2VHYW1lT2JqZWN0Q2FjaGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEF1dG9TZXRHb1Byb3BlcnR5KCkgeyB9XG5cbiAgICBwdWJsaWMgR2V0Q2FjaGVPYmplY3QobmFtZTogc3RyaW5nLCBwYXJlbnQ6IGZndWkuR0NvbXBvbmVudCwgdGVtcGxldGU6IHN0cmluZyA9IG51bGwpOiBmZ3VpLkdPYmplY3Qge1xuICAgICAgICB2YXIgb2JqOiBmZ3VpLkdPYmplY3QgPSB0aGlzLm9ialBvb2xzLlBvcEl0ZW0obmFtZSk7XG4gICAgICAgIGlmIChvYmogPT0gbnVsbCAmJiB0ZW1wbGV0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT3liJvlu7rnrbnnoIFcIik7XG4gICAgICAgICAgICBvYmogPSBmZ3VpLlVJUGFja2FnZS5jcmVhdGVPYmplY3QoXCJUZXhhc1wiLCB0ZW1wbGV0ZSwgVUlNb3ZlTW9ub0ZndWkpXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQob2JqLm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9iaiAhPSBudWxsKSB7XG4gICAgICAgICAgICBvYmoubmFtZSA9IG5hbWUgKyBvYmouaWQ7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT3orr7nva7nrbnnoIHvvIxwYXJlbnQ9XCIrcGFyZW50Lm5hbWUrXCIgLCAgb2JqID0gXCIrIG9iai5uYW1lKTtcbiAgICAgICAgICAgIG9iai5ub2RlLnBhcmVudCA9IHBhcmVudC5ub2RlO1xuICAgICAgICAgICAgb2JqLm5vZGUucG9zaXRpb24gPSB0aGlzLmNvbnZlcnROb2RlU3BhY2VBUihvYmoubm9kZSwgcGFyZW50Lm5vZGUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHB1YmxpYyBEZXN0cm95T2JqZWN0KG9iajogZmd1aS5HT2JqZWN0LCBpc0NhY2hlID0gdHJ1ZSk6IGZndWkuR09iamVjdCB7XG4gICAgICAgIGlmIChvYmogPT0gbnVsbCkgeyByZXR1cm47IH1cblxuICAgICAgICBpZiAoaXNDYWNoZSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0t5Yig6Zmk562556CB77yMQ2FjaGVQYXJlbnQgPVwiK0NhY2hlSGVscGVyLkNhY2hlUGFyZW50KTtcbiAgICAgICAgICAgIC8vIG9iai5ub2RlLnNldFBhcmVudChDYWNoZUhlbHBlci5DYWNoZVBhcmVudCk7XG4gICAgICAgICAgICB0aGlzLm9ialBvb2xzLlB1c2hJdGVtKG9iaiwgb2JqLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vYmpQb29scy5EZXN0cm95RXhpc3RJdGVtKG9iaiwgb2JqLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIG9iaiA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIENsZWFyQWxsQ2FjaGUoKSB7XG4gICAgICAgIHRoaXMub2JqUG9vbHMuY2xlYW5BbGwoKTtcbiAgICB9XG5cbiAgICAvLyDmioogbm9kZTHnp7vliqjliLAgbm9kZTLnmoTkvY3nva5cbiAgICBwdWJsaWMgbW92ZU4xdG9OMihub2RlMTogY2MuTm9kZSwgbm9kZTI6IGNjLk5vZGUpIHtcbiAgICAgICAgbm9kZTEucG9zaXRpb24gPSBub2RlMS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbikpXG4gICAgfVxuICAgIC8vIOiOt+WPluaKiiBub2RlMeenu+WKqOWIsCBub2RlMuS9jee9ruWQjueahOWdkOagh1xuICAgIHB1YmxpYyBjb252ZXJ0Tm9kZVNwYWNlQVIobm9kZTE6IGNjLk5vZGUsIG5vZGUyOiBjYy5Ob2RlKTogY2MuVmVjMyB7XG4gICAgICAgIHJldHVybiBub2RlMS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIobm9kZTIucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihub2RlMi5wb3NpdGlvbikpXG4gICAgfVxufVxuXG5cblxuXG5cblxuZXhwb3J0IGNsYXNzIENhY2hlSGVscGVyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBjYWNoZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXQgQ2FjaGVQYXJlbnQoKTogY2MuTm9kZSB7XG4gICAgICAgIGlmIChDYWNoZUhlbHBlci5jYWNoZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBDYWNoZUhlbHBlci5DYWNoZVBhcmVudC5kZXN0cm95KCk7Ly8gR2FtZU9iamVjdC5Eb250RGVzdHJveU9uTG9hZCh0aGlzLkNhY2hlUGFyZW50LmdhbWVPYmplY3QpO1xuICAgICAgICAgICAgQ2FjaGVIZWxwZXIuY2FjaGUgPSBuZXcgY2MuTm9kZShcIl9jYWNoZV9cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIENhY2hlSGVscGVyLmNhY2hlO1xuXG4gICAgfVxufSJdfQ==
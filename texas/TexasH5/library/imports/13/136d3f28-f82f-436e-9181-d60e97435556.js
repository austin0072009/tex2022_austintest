"use strict";
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
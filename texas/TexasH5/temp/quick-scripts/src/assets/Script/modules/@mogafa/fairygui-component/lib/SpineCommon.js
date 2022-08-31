"use strict";
cc._RF.push(module, '70274SDqPVMJYvqDi6EQhdn', 'SpineCommon');
// Script/modules/@mogafa/fairygui-component/lib/SpineCommon.ts

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
var FguiComponentBase_1 = require("./FguiComponentBase");
var AppConst_1 = require("../../../@slotsmaster/ui-common/lib/AppConst");
var SpineCommon = /** @class */ (function (_super) {
    __extends(SpineCommon, _super);
    function SpineCommon(node, urls, animationsAfterLoaded) {
        var _this = _super.call(this) || this;
        _this._resources = {};
        _this._trackIndex = 0;
        _this._node = node;
        _this._isReady = false;
        _this._urls = urls;
        _this._animationsAfterLoaded = animationsAfterLoaded;
        _this._skeleton = _this._node.addComponent(sp.Skeleton);
        if (urls) {
            var self = _this;
            var bundle = cc.assetManager.getBundle(self.packageResourceName);
            if (bundle) {
                bundle.load(urls, sp.SkeletonData, _this.resourceLoaded.bind(_this));
            }
            else {
                var resUrl = self.packageResourceName;
                if (!AppConst_1.AppConst.isEditor) {
                    resUrl = AppConst_1.AppConst.resUrl + self.packageResourceName;
                }
                cc.assetManager.loadBundle(resUrl, (function (err, bundle) {
                    bundle.load(urls, sp.SkeletonData, _this.resourceLoaded.bind(_this));
                }));
            }
        }
        else {
            _this._created = true;
        }
        return _this;
    }
    Object.defineProperty(SpineCommon.prototype, "packageResourceName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpineCommon.prototype, "packageName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpineCommon.prototype, "componentName", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 资源加载
     * @param error
     * @param resources
     */
    SpineCommon.prototype.resourceLoaded = function (error, resources) {
        if (error) {
            cc.error("spine\u52A8\u753B" + this._urls + "\u8F7D\u5165\u9519\u8BEF");
        }
        else {
            for (var i = 0; i < resources.length; i++) {
                var resource = resources[i];
                this._resources[resource.name] = resource;
            }
            //this._skeleton.skeletonData = resources[0];
            //this._skeleton.clearTracks();
            this._isReady = this._urls.length == resources.length;
            if (this._isReady && this._animationsAfterLoaded) {
                this.playInOrder(this._animationsAfterLoaded);
            }
            if (this._isReady) {
                this._created = true;
                if (this.parent) {
                    var parent = this.parent;
                    parent.childCreatedInternal(this);
                }
            }
            this.afterResourceLoaded();
        }
    };
    SpineCommon.prototype.afterResourceLoaded = function () { };
    Object.defineProperty(SpineCommon.prototype, "skeleton", {
        get: function () {
            return this._skeleton;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpineCommon.prototype, "isReady", {
        get: function () {
            return this._isReady;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpineCommon.prototype, "trackIndex", {
        get: function () {
            return this._trackIndex;
        },
        set: function (value) {
            this._trackIndex = value;
            if (!this._trackIndex) {
                this._trackIndex = 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 获取资源
     * @param spineName
     */
    SpineCommon.prototype.getResource = function (spineName) {
        var resource = null;
        for (var key in this._resources) {
            resource = this._resources[key];
            if (!spineName) {
                break;
            }
            if (spineName == key) {
                break;
            }
        }
        return resource;
    };
    /**
     * 按顺序播放动画
     * @param animations 顺序播放的动画列表（注意顺序播放的动画，除了最后一个的isLoop有效，其他的isLoop都是false
     */
    SpineCommon.prototype.playInOrder = function (animations, skin, spineName) {
        var _this = this;
        if (!animations || animations.length == 0) {
            return;
        }
        this._skeleton.skeletonData = this.getResource(spineName);
        if (skin) {
            this._skeleton.setSkin(skin);
        }
        var count = animations.length;
        var _loop_1 = function (i) {
            var animation = animations[i];
            var isLast = i == count - 1;
            var isLoop = isLast ? animation.isLoop : false;
            if (i == 0) {
                this_1.scheduleOnce(function () {
                    _this._skeleton.setAnimation(_this._trackIndex, animation.animationName, isLoop);
                }, 4 / 60);
            }
            else {
                this_1.scheduleOnce(function () {
                    _this._skeleton.addAnimation(_this._trackIndex, animation.animationName, isLoop);
                }, 4 / 60);
            }
        };
        var this_1 = this;
        for (var i = 0; i < animations.length; i++) {
            _loop_1(i);
        }
    };
    return SpineCommon;
}(FguiComponentBase_1.default));
exports.default = SpineCommon;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/SpineCommon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcU3BpbmVDb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseURBQW9EO0FBQ3BELHlFQUF3RTtBQUV4RTtJQUF5QywrQkFBaUI7SUFpQnRELHFCQUFZLElBQWEsRUFBRSxJQUFjLEVBQUUscUJBQXFEO1FBQWhHLFlBQ0ksaUJBQU8sU0EyQlY7UUFqQ1MsZ0JBQVUsR0FBdUMsRUFBRSxDQUFDO1FBRXRELGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBSzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxxQkFBcUIsQ0FBQztRQUNwRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQTtZQUNmLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1lBQ2hFLElBQUksTUFBTSxFQUNWO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQTthQUNyRTtpQkFBTTtnQkFDSCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxtQkFBUSxDQUFDLFFBQVEsRUFDdEI7b0JBQ0ks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QUE7YUFDYjtpQkFBTTtnQkFDSCxPQUFLLFlBQVksQ0FBQztvQkFDZCxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ25GLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7YUFDYjs7O1FBWkwsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUFqQyxDQUFDO1NBYVQ7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQXpJQSxBQXlJQyxDQXpJd0MsMkJBQWlCLEdBeUl6RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGluZUFuaW1hdGlvblBsYXlQYXJhbWV0ZXIgZnJvbSBcIi4vU3BpbmVBbmltYXRpb25QbGF5UGFyYW1ldGVyXCI7XG5pbXBvcnQgRmd1aUNvbXBvbmVudEJhc2UgZnJvbSBcIi4vRmd1aUNvbXBvbmVudEJhc2VcIjtcbmltcG9ydCB7IEFwcENvbnN0IH0gZnJvbSBcIi4uLy4uLy4uL0BzbG90c21hc3Rlci91aS1jb21tb24vbGliL0FwcENvbnN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwaW5lQ29tbW9uIGV4dGVuZHMgRmd1aUNvbXBvbmVudEJhc2Uge1xuICAgIHByb3RlY3RlZCBnZXQgcGFja2FnZVJlc291cmNlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBwYWNrYWdlTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgX25vZGU6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBfdXJsczogc3RyaW5nW107XG4gICAgcHJvdGVjdGVkIF9yZXNvdXJjZXM6IHsgW2tleTogc3RyaW5nXTogc3AuU2tlbGV0b25EYXRhIH0gPSB7fTtcbiAgICBwcml2YXRlIF9pc1JlYWR5OiBib29sZWFuO1xuICAgIHByaXZhdGUgX3RyYWNrSW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uc0FmdGVyTG9hZGVkOiBTcGluZUFuaW1hdGlvblBsYXlQYXJhbWV0ZXJbXTtcbiAgICBwcm90ZWN0ZWQgX3NrZWxldG9uOiBzcC5Ta2VsZXRvbjtcbiAgICBjb25zdHJ1Y3Rvcihub2RlOiBjYy5Ob2RlLCB1cmxzOiBzdHJpbmdbXSwgYW5pbWF0aW9uc0FmdGVyTG9hZGVkPzogU3BpbmVBbmltYXRpb25QbGF5UGFyYW1ldGVyW10pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fbm9kZSA9IG5vZGU7XG4gICAgICAgIHRoaXMuX2lzUmVhZHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdXJscyA9IHVybHM7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbnNBZnRlckxvYWRlZCA9IGFuaW1hdGlvbnNBZnRlckxvYWRlZDtcbiAgICAgICAgdGhpcy5fc2tlbGV0b24gPSB0aGlzLl9ub2RlLmFkZENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIGlmICh1cmxzKSB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKHNlbGYucGFja2FnZVJlc291cmNlTmFtZSlcbiAgICAgICAgICAgIGlmIChidW5kbGUpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkKHVybHMsIHNwLlNrZWxldG9uRGF0YSwgdGhpcy5yZXNvdXJjZUxvYWRlZC5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzVXJsID0gc2VsZi5wYWNrYWdlUmVzb3VyY2VOYW1lO1xuICAgICAgICAgICAgICAgIGlmICghQXBwQ29uc3QuaXNFZGl0b3IpIFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzVXJsID0gQXBwQ29uc3QucmVzVXJsICsgc2VsZi5wYWNrYWdlUmVzb3VyY2VOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShyZXNVcmwsICgoZXJyLCBidW5kbGUpID0+IFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmxvYWQodXJscywgc3AuU2tlbGV0b25EYXRhLCB0aGlzLnJlc291cmNlTG9hZGVkLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgfSBlbHNlIFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDotYTmupDliqDovb1cbiAgICAgKiBAcGFyYW0gZXJyb3JcbiAgICAgKiBAcGFyYW0gcmVzb3VyY2VzXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNvdXJjZUxvYWRlZChlcnJvcjogYW55LCByZXNvdXJjZXM6IHNwLlNrZWxldG9uRGF0YVtdKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY2MuZXJyb3IoYHNwaW5l5Yqo55S7JHt0aGlzLl91cmxzfei9veWFpemUmeivr2ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc291cmNlc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNvdXJjZXNbcmVzb3VyY2UubmFtZV0gPSByZXNvdXJjZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy90aGlzLl9za2VsZXRvbi5za2VsZXRvbkRhdGEgPSByZXNvdXJjZXNbMF07XG4gICAgICAgICAgICAvL3RoaXMuX3NrZWxldG9uLmNsZWFyVHJhY2tzKCk7XG4gICAgICAgICAgICB0aGlzLl9pc1JlYWR5ID0gdGhpcy5fdXJscy5sZW5ndGggPT0gcmVzb3VyY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1JlYWR5ICYmIHRoaXMuX2FuaW1hdGlvbnNBZnRlckxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheUluT3JkZXIodGhpcy5fYW5pbWF0aW9uc0FmdGVyTG9hZGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1JlYWR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLnBhcmVudCBhcyBhbnk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jaGlsZENyZWF0ZWRJbnRlcm5hbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFmdGVyUmVzb3VyY2VMb2FkZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgYWZ0ZXJSZXNvdXJjZUxvYWRlZCgpIHsgfVxuICAgIHB1YmxpYyBnZXQgc2tlbGV0b24oKTogc3AuU2tlbGV0b24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2tlbGV0b247XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNSZWFkeSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzUmVhZHk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdHJhY2tJbmRleCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhY2tJbmRleDtcbiAgICB9XG4gICAgcHVibGljIHNldCB0cmFja0luZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fdHJhY2tJbmRleCA9IHZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMuX3RyYWNrSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNrSW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOiOt+WPlui1hOa6kFxuICAgICAqIEBwYXJhbSBzcGluZU5hbWVcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFJlc291cmNlKHNwaW5lTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCByZXNvdXJjZTogc3AuU2tlbGV0b25EYXRhID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3Jlc291cmNlcykge1xuICAgICAgICAgICAgcmVzb3VyY2UgPSB0aGlzLl9yZXNvdXJjZXNba2V5XTtcbiAgICAgICAgICAgIGlmICghc3BpbmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3BpbmVOYW1lID09IGtleSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5oyJ6aG65bqP5pKt5pS+5Yqo55S7XG4gICAgICogQHBhcmFtIGFuaW1hdGlvbnMg6aG65bqP5pKt5pS+55qE5Yqo55S75YiX6KGo77yI5rOo5oSP6aG65bqP5pKt5pS+55qE5Yqo55S777yM6Zmk5LqG5pyA5ZCO5LiA5Liq55qEaXNMb29w5pyJ5pWI77yM5YW25LuW55qEaXNMb29w6YO95pivZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcGxheUluT3JkZXIoYW5pbWF0aW9uczogU3BpbmVBbmltYXRpb25QbGF5UGFyYW1ldGVyW10sIHNraW4/OiBzdHJpbmcsIHNwaW5lTmFtZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIWFuaW1hdGlvbnMgfHwgYW5pbWF0aW9ucy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NrZWxldG9uLnNrZWxldG9uRGF0YSA9IHRoaXMuZ2V0UmVzb3VyY2Uoc3BpbmVOYW1lKTtcbiAgICAgICAgaWYgKHNraW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3NrZWxldG9uLnNldFNraW4oc2tpbik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50ID0gYW5pbWF0aW9ucy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW5pbWF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gYW5pbWF0aW9uc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGlzTGFzdCA9IGkgPT0gY291bnQgLSAxO1xuICAgICAgICAgICAgY29uc3QgaXNMb29wID0gaXNMYXN0ID8gYW5pbWF0aW9uLmlzTG9vcCA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2tlbGV0b24uc2V0QW5pbWF0aW9uKHRoaXMuX3RyYWNrSW5kZXgsIGFuaW1hdGlvbi5hbmltYXRpb25OYW1lLCBpc0xvb3ApO1xuICAgICAgICAgICAgICAgIH0sIDQgLyA2MClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9za2VsZXRvbi5hZGRBbmltYXRpb24odGhpcy5fdHJhY2tJbmRleCwgYW5pbWF0aW9uLmFuaW1hdGlvbk5hbWUsIGlzTG9vcCk7XG4gICAgICAgICAgICAgICAgfSwgNCAvIDYwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
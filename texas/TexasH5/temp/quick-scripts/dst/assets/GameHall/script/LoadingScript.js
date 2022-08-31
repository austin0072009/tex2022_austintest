
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/LoadingScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c695UaNo9HdqUwSpd2sGAG', 'LoadingScript');
// GameHall/script/LoadingScript.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingScript = /** @class */ (function (_super) {
    __extends(LoadingScript, _super);
    function LoadingScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layoutNode = null;
        _this.tipLabel = null;
        _this.progressBar = null;
        _this.progressBarCB = null;
        return _this;
    }
    LoadingScript.prototype.onLoad = function () {
        var scaleW = cc.winSize.width / 1080;
        var scaleH = cc.winSize.height / 2340;
        this.node.scaleX = scaleW;
        this.node.scaleY = scaleH;
    };
    LoadingScript.prototype.onEnable = function () {
        var _this = this;
        // loading
        var time = 0;
        this.progressBar.barSprite.fillRange = time;
        this.progressBarCB = function () {
            time += 0.08;
            if (time >= 0.95) {
                return;
            }
            _this.progressBar.barSprite.fillRange = time;
            _this.tipLabel.string = "Loading..." + Math.ceil(time * 100) + "%";
        };
        this.schedule(function () {
            _this.progressBarCB();
        }, 0.01);
    };
    LoadingScript.prototype.loadCompelete = function () {
        this.progressBar.barSprite.fillRange = 0.99;
        this.tipLabel.string = "Loading..." + Math.ceil(0.99 * 100) + "%";
        this.unschedule(this.progressBarCB);
        this.layoutNode.active = false;
    };
    __decorate([
        property(cc.Node)
    ], LoadingScript.prototype, "layoutNode", void 0);
    __decorate([
        property(cc.Label)
    ], LoadingScript.prototype, "tipLabel", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], LoadingScript.prototype, "progressBar", void 0);
    LoadingScript = __decorate([
        ccclass
    ], LoadingScript);
    return LoadingScript;
}(cc.Component));
exports.default = LoadingScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9hZGluZ1NjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXdDQztRQXRDRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFhLElBQUksQ0FBQzs7SUFnQzFDLENBQUM7SUE5QkcsOEJBQU0sR0FBTjtRQUNJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQWVDO1FBZEcsVUFBVTtRQUNWLElBQUksSUFBSSxHQUFXLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDakIsSUFBSSxJQUFJLElBQUksQ0FBQztZQUNiLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDZCxPQUFPO2FBQ1Y7WUFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzVDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdEUsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDO0lBRU0scUNBQWEsR0FBcEI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ25DLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1U7SUFObEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQXdDakM7SUFBRCxvQkFBQztDQXhDRCxBQXdDQyxDQXhDMEMsRUFBRSxDQUFDLFNBQVMsR0F3Q3REO2tCQXhDb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nU2NyaXB0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXlvdXROb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGlwTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcblxuICAgIHB1YmxpYyBwcm9ncmVzc0JhckNCOiBGdW5jdGlvbiA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGxldCBzY2FsZVcgPSBjYy53aW5TaXplLndpZHRoIC8gMTA4MDtcbiAgICAgICAgbGV0IHNjYWxlSCA9IGNjLndpblNpemUuaGVpZ2h0IC8gMjM0MDtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHNjYWxlVztcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSA9IHNjYWxlSDtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgLy8gbG9hZGluZ1xuICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5iYXJTcHJpdGUuZmlsbFJhbmdlID0gdGltZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckNCID0gKCkgPT4ge1xuICAgICAgICAgICAgdGltZSArPSAwLjA4O1xuICAgICAgICAgICAgaWYgKHRpbWUgPj0gMC45NSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuYmFyU3ByaXRlLmZpbGxSYW5nZSA9IHRpbWU7XG4gICAgICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IFwiTG9hZGluZy4uLlwiICsgTWF0aC5jZWlsKHRpbWUgKiAxMDApICsgXCIlXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyQ0IoKTtcbiAgICAgICAgfSwgMC4wMSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZENvbXBlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5iYXJTcHJpdGUuZmlsbFJhbmdlID0gMC45OTtcbiAgICAgICAgdGhpcy50aXBMYWJlbC5zdHJpbmcgPSBcIkxvYWRpbmcuLi5cIiArIE1hdGguY2VpbCgwLjk5ICogMTAwKSArIFwiJVwiO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5wcm9ncmVzc0JhckNCKTtcbiAgICAgICAgdGhpcy5sYXlvdXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==
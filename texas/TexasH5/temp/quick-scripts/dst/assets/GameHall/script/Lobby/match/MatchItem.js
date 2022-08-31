
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/match/MatchItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3138TAnaBLx5lP3LrfHXsB', 'MatchItem');
// GameHall/script/Lobby/match/MatchItem.ts

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
/**
 * @description 賽事 item
 */
var MatchItem = /** @class */ (function (_super) {
    __extends(MatchItem, _super);
    function MatchItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MatchItem.prototype.onConstruct = function () {
        this.matchName = this.getChild("name").asTextField;
        this.jackpotNum = this.getChild("jack").asTextField;
        this.enrollPlayNum = this.getChild("playNum").asTextField;
        this.matchState = this.getChild("state").asTextField;
        this.year = this.getChild("year").asTextField;
        this.enrollTime = this.getChild("time").asTextField;
        this.free = this.getChild("free").asTextField;
        this.signup = this.getChild("signup").asImage;
        this.colorController = this.getController("color");
    };
    /**设置数据 */
    MatchItem.prototype.setData = function (data) {
        this.data = data;
        var str = data.StartTime.split(" ");
        this.year.text = str[0].slice(str[0].indexOf("-") + 1);
        this.enrollTime.text = str[1].slice(0, str[1].lastIndexOf(":"));
        this.jackpotNum.text = "¥" + this.toThousands(data.prizepool);
        this.enrollPlayNum.text = data.signupcount + "/" + data.maxcount;
        this.matchName.text = data.name;
        this.free.text = data.free[0].name + "*" + data.free[0].num;
        this.signup.visible = data.IsSignup;
        if (!data.cansignup) {
            if (Date.now() < new Date(data.SignupTime).getTime()) { //报名未开始
                this.matchState.text = '報名未開始';
            }
            else {
                this.matchState.text = '報名結束';
            }
        }
        else {
            this.matchState.text = '報名中';
        }
    };
    MatchItem.prototype.toThousands = function (nums) {
        var num = (nums || 0).toString();
        var result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return result;
    };
    return MatchItem;
}(fgui.GButton));
exports.default = MatchItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXG1hdGNoXFxNYXRjaEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0dBRUc7QUFDSDtJQUF1Qyw2QkFBWTtJQUFuRDs7SUF5RUEsQ0FBQztJQTlDYSwrQkFBVyxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQzFELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFFOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELFVBQVU7SUFDSCwyQkFBTyxHQUFkLFVBQWUsSUFBaUI7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDLFdBQVcsU0FBSSxJQUFJLENBQUMsUUFBVSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFLLENBQUM7UUFFNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUVwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPO2dCQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2FBQ2pDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNoQztJQUNMLENBQUM7SUFDTSwrQkFBVyxHQUFsQixVQUFtQixJQUFJO1FBQ25CLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUN0QyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksR0FBRyxFQUFFO1lBQUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7U0FBRTtRQUNuQyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUwsZ0JBQUM7QUFBRCxDQXpFQSxBQXlFQyxDQXpFc0MsSUFBSSxDQUFDLE9BQU8sR0F5RWxEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcGV0ZUluZm8gfSBmcm9tIFwiLi4vTG9iYnlOZXREYXRhXCI7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uIOizveS6iyBpdGVtXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRjaEl0ZW0gZXh0ZW5kcyBmZ3VpLkdCdXR0b24ge1xyXG4gICAgLyoq6LWb5LqL5ZCN5a2XICovXHJcbiAgICBwcml2YXRlIG1hdGNoTmFtZTogZmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgLyoq6LWb5LqL55qE54q25oCBICovXHJcbiAgICBwcml2YXRlIG1hdGNoU3RhdGU6IGZndWkuR1RleHRGaWVsZDtcclxuXHJcbiAgICAvKirotZvkuovnmoTlpZbph5EgKi9cclxuICAgIHByaXZhdGUgamFja3BvdE51bTogZmd1aS5HVGV4dEZpZWxkO1xyXG5cclxuICAgIC8qKuWPgui1m+S6uuaVsCAqL1xyXG4gICAgcHJpdmF0ZSBlbnJvbGxQbGF5TnVtOiBmZ3VpLkdUZXh0RmllbGQ7XHJcblxyXG4gICAgcHJpdmF0ZSB5ZWFyOiBmZ3VpLkdUZXh0RmllbGQ7XHJcbiAgICAvKirmiqXlkI3ml7bpl7QgKi9cclxuICAgIHByaXZhdGUgZW5yb2xsVGltZTogZmd1aS5HVGV4dEZpZWxkO1xyXG4gICAgLyoq6Ieq5bex5piv5ZCm5oql5ZCNICovXHJcbiAgICBwcml2YXRlIHNpZ251cDogZmd1aS5HSW1hZ2U7XHJcblxyXG4gICAgLyoq6LWb5LqL5pWw5o2uICovXHJcbiAgICBwdWJsaWMgZGF0YTogQ29tcGV0ZUluZm87XHJcblxyXG4gICAgLyoq5oql5ZCN6LS5ICovXHJcbiAgICBwcml2YXRlIGZyZWU6IGZndWkuR1RleHRGaWVsZDtcclxuXHJcbiAgICAvKirpopzoibJjb250cm9sbGVyICovXHJcbiAgICBwcml2YXRlIGNvbG9yQ29udHJvbGxlcjogZmd1aS5Db250cm9sbGVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkNvbnN0cnVjdCgpIHtcclxuICAgICAgICB0aGlzLm1hdGNoTmFtZSA9IHRoaXMuZ2V0Q2hpbGQoXCJuYW1lXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMuamFja3BvdE51bSA9IHRoaXMuZ2V0Q2hpbGQoXCJqYWNrXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMuZW5yb2xsUGxheU51bSA9IHRoaXMuZ2V0Q2hpbGQoXCJwbGF5TnVtXCIpLmFzVGV4dEZpZWxkO1xyXG4gICAgICAgIHRoaXMubWF0Y2hTdGF0ZSA9IHRoaXMuZ2V0Q2hpbGQoXCJzdGF0ZVwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLnllYXIgPSB0aGlzLmdldENoaWxkKFwieWVhclwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLmVucm9sbFRpbWUgPSB0aGlzLmdldENoaWxkKFwidGltZVwiKS5hc1RleHRGaWVsZDtcclxuICAgICAgICB0aGlzLmZyZWUgPSB0aGlzLmdldENoaWxkKFwiZnJlZVwiKS5hc1RleHRGaWVsZDtcclxuXHJcbiAgICAgICAgdGhpcy5zaWdudXAgPSB0aGlzLmdldENoaWxkKFwic2lnbnVwXCIpLmFzSW1hZ2U7XHJcbiAgICAgICAgdGhpcy5jb2xvckNvbnRyb2xsZXIgPSB0aGlzLmdldENvbnRyb2xsZXIoXCJjb2xvclwiKTtcclxuICAgIH1cclxuICAgIC8qKuiuvue9ruaVsOaNriAqL1xyXG4gICAgcHVibGljIHNldERhdGEoZGF0YTogQ29tcGV0ZUluZm8pIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIGxldCBzdHIgPSBkYXRhLlN0YXJ0VGltZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgdGhpcy55ZWFyLnRleHQgPSBzdHJbMF0uc2xpY2Uoc3RyWzBdLmluZGV4T2YoXCItXCIpICsgMSk7XHJcbiAgICAgICAgdGhpcy5lbnJvbGxUaW1lLnRleHQgPSBzdHJbMV0uc2xpY2UoMCwgc3RyWzFdLmxhc3RJbmRleE9mKFwiOlwiKSk7XHJcbiAgICAgICAgdGhpcy5qYWNrcG90TnVtLnRleHQgPSBcIsKlXCIgKyB0aGlzLnRvVGhvdXNhbmRzKGRhdGEucHJpemVwb29sKTtcclxuICAgICAgICB0aGlzLmVucm9sbFBsYXlOdW0udGV4dCA9IGAke2RhdGEuc2lnbnVwY291bnR9LyR7ZGF0YS5tYXhjb3VudH1gO1xyXG4gICAgICAgIHRoaXMubWF0Y2hOYW1lLnRleHQgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5mcmVlLnRleHQgPSBgJHtkYXRhLmZyZWVbMF0ubmFtZX0qJHtkYXRhLmZyZWVbMF0ubnVtfWA7XHJcblxyXG4gICAgICAgIHRoaXMuc2lnbnVwLnZpc2libGUgPSBkYXRhLklzU2lnbnVwO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEuY2Fuc2lnbnVwKSB7XHJcbiAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIDwgbmV3IERhdGUoZGF0YS5TaWdudXBUaW1lKS5nZXRUaW1lKCkpIHsgLy/miqXlkI3mnKrlvIDlp4tcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hTdGF0ZS50ZXh0ID0gJ+WgseWQjeacqumWi+Wniyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoU3RhdGUudGV4dCA9ICfloLHlkI3ntZDmnZ8nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXRjaFN0YXRlLnRleHQgPSAn5aCx5ZCN5LitJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9UaG91c2FuZHMobnVtcykge1xyXG4gICAgICAgIGxldCBudW0gPSAobnVtcyB8fCAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgICAgICB3aGlsZSAobnVtLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gJywnICsgbnVtLnNsaWNlKC0zKSArIHJlc3VsdDtcclxuICAgICAgICAgICAgbnVtID0gbnVtLnNsaWNlKDAsIG51bS5sZW5ndGggLSAzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG51bSkgeyByZXN1bHQgPSBudW0gKyByZXN1bHQ7IH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxufSJdfQ==
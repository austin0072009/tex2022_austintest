
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Games/texas/script/Balence/BalenceCtr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14840BwgBVAd5A1nUcVu7YO', 'BalenceCtr');
// Games/texas/script/Balence/BalenceCtr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalenceModel = void 0;
var BalenceCtr = /** @class */ (function () {
    function BalenceCtr() {
    }
    Object.defineProperty(BalenceCtr, "instance", {
        get: function () {
            if (this._instance == null)
                this._instance = new BalenceCtr();
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BalenceCtr.prototype, "Model", {
        get: function () {
            if (this._model == null) {
                this._model = new BalenceModel();
                this._model.Init();
            }
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    BalenceCtr._instance = null;
    return BalenceCtr;
}());
exports.default = BalenceCtr;
var BalenceModel = /** @class */ (function () {
    function BalenceModel() {
    }
    BalenceModel.prototype.Init = function () {
        this.gainlist = [];
    };
    BalenceModel.prototype.Reset = function () {
        this.gainlist = [];
        this.begintime = null;
        this.endtime = null;
        this.duration = 0;
        this.tax = 0;
        this.pcount = 0;
        this.allintogold = 0;
        this.InsurTotal = 0;
        this.clubWl = null;
        this.clunbins = null;
        this.isnamger = false;
    };
    return BalenceModel;
}());
exports.BalenceModel = BalenceModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZXNcXHRleGFzXFxzY3JpcHRcXEJhbGVuY2VcXEJhbGVuY2VDdHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFBQTtJQW1CQSxDQUFDO0lBZkcsc0JBQVcsc0JBQVE7YUFBbkI7WUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSTtnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBRXRDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDZCQUFLO2FBQWhCO1lBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBZmMsb0JBQVMsR0FBZSxJQUFJLENBQUM7SUFnQmhELGlCQUFDO0NBbkJELEFBbUJDLElBQUE7a0JBbkJvQixVQUFVO0FBcUIvQjtJQUFBO0lBb0VBLENBQUM7SUFoQlUsMkJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSw0QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXBFQSxBQW9FQyxJQUFBO0FBcEVZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGVHYWluU0QsIFRhYmxlQ2x1Ykxvc2VXaW4sIGNsdWJpbmZvIH0gZnJvbSBcIi4uL01vZGVsL1RleGFzTmV0RGF0YVwiO1xuaW1wb3J0IEJhbGVuY2VDb21wIGZyb20gXCIuL0JhbGVuY2VDb21wXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGVuY2VDdHIge1xuICAgIHB1YmxpYyB2aWV3OiBCYWxlbmNlQ29tcDtcblxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQmFsZW5jZUN0ciA9IG51bGw7XG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBCYWxlbmNlQ3RyIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBCYWxlbmNlQ3RyKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21vZGVsOiBCYWxlbmNlTW9kZWw7XG4gICAgcHVibGljIGdldCBNb2RlbCgpOiBCYWxlbmNlTW9kZWwge1xuICAgICAgICBpZiAodGhpcy5fbW9kZWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbW9kZWwgPSBuZXcgQmFsZW5jZU1vZGVsKCk7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbC5Jbml0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJhbGVuY2VNb2RlbCB7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyAxLTNcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBicjogc3RyaW5nO1xuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5byA5aeL5pe26Ze0XG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgYmVnaW50aW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGVuZHRpbWU6IHN0cmluZztcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaMgee7reaXtumXtCDliIbpkp/mmL7npLrovazmjaLmiJAwLjVoIDFoXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgZHVyYXRpb246IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOWlluaxoCDlj6/og73kuLrotJ8g5pyJ5Lq65Ye75Lit5py15py15Y+v6IO95Li66LSfXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgdGF4OiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmnKzlsYDmgLvmiYvmlbBcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBwY291bnQ6IG51bWJlcjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOacrOWxgOaAu+W4puWFpVxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIGFsbGludG9nb2xkOiBudW1iZXI7XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmiYDmnInlj4LkuI7kurrlkZgg5bey5oyJ6LWi55qE5aSa5bCR6L+b6KGM5LqG5o6S5bqPICBNVlDjgJDotaLmnIDlpJrnmoTjgJEg5aSn6bG844CQ6L6T5pyA5aSa55qE44CRIOWcn+ixquOAkOW4puWFpeacgOWkmueahOOAkSDlnKjmraTmn6Xmib5cbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBnYWlubGlzdDogVGFibGVHYWluU0RbXTtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOS/nemZqei0oeeMrlxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIEluc3VyVG90YWw6IG51bWJlcjtcbiAgICAvLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+x5LmQ6YOo6L6T6LWiICDotoXnuqfogZTnm5/miY3mnIlcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBjbHViV2w6IFRhYmxlQ2x1Ykxvc2VXaW5bXTtcblxuICAgIC8vLyA8c3VtbWFyeT5cbiAgICAvLy8g5L+x5LmQ6YOo5L+d6Zmp6L6T6LWiXG4gICAgLy8vIDwvc3VtbWFyeT5cbiAgICBwdWJsaWMgY2x1bmJpbnM6IGNsdWJpbmZvW107XG4gICAgLy8vIDxzdW1tYXJ5PlxuICAgIC8vLyDmoIfor4bmmK/lkKbnrqHnkIblkZjmiJbogIXliJvlu7rogIVcbiAgICAvLy8gPC9zdW1tYXJ5PlxuICAgIHB1YmxpYyBpc25hbWdlcjogYm9vbGVhbjtcbiAgICAvLy8gPHN1bW1hcnk+XG4gICAgLy8vIOaYr+WQpui2hee6p+iBlOebn+aIv+mXtFxuICAgIC8vLyA8L3N1bW1hcnk+XG4gICAgcHVibGljIElzU3VwcGVyOiBib29sZWFuO1xuXG4gICAgcHVibGljIEluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2Fpbmxpc3QgPSBbXTtcbiAgICB9XG4gICAgcHVibGljIFJlc2V0KCkge1xuICAgICAgICB0aGlzLmdhaW5saXN0ID0gW107XG4gICAgICAgIHRoaXMuYmVnaW50aW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbmR0aW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgICAgIHRoaXMudGF4ID0gMDtcbiAgICAgICAgdGhpcy5wY291bnQgPSAwO1xuICAgICAgICB0aGlzLmFsbGludG9nb2xkID0gMDtcbiAgICAgICAgdGhpcy5JbnN1clRvdGFsID0gMDtcbiAgICAgICAgdGhpcy5jbHViV2wgPSBudWxsO1xuICAgICAgICB0aGlzLmNsdW5iaW5zID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc25hbWdlciA9IGZhbHNlO1xuICAgIH1cbn0iXX0=
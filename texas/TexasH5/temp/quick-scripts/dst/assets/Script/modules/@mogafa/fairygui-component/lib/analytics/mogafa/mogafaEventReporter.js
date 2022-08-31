
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/modules/@mogafa/fairygui-component/lib/analytics/mogafa/mogafaEventReporter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '052709erP5OsbzUPzjUbu83', 'mogafaEventReporter');
// Script/modules/@mogafa/fairygui-component/lib/analytics/mogafa/mogafaEventReporter.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var HttpApi_1 = require("../../../../../@slotsmaster/ui-common/lib/HttpApi");
var REPORT_LOCAL_NAME = "reportData";
var MoagfaEventReporter = /** @class */ (function () {
    function MoagfaEventReporter(assetGetter) {
        this.MaxEventCount = 100;
        this.ReportInterval = 5000;
        this.reportUrl = "https://0q7op0mbp1.execute-api.us-west-2.amazonaws.com/prod/events";
        this._isReporting = false;
        this.assetGetter = assetGetter;
    }
    MoagfaEventReporter.prototype.initialize = function (commonParamter) {
        var _this = this;
        this.commonParameter = commonParamter;
        //todo:从本地获取之前保存的数据，然后上报
        this.readFromLocal();
        setInterval(function () {
            _this.callLogEventReportUp();
        }, 10000);
    };
    MoagfaEventReporter.prototype.logEventReportableObject = function (reportableObject) {
        var mogafaReportableObject = reportableObject;
        mogafaReportableObject.assets = this.assetGetter.getAssets();
        this.commonParameter.addEvent(reportableObject);
        if (this.commonParameter.events.length >= this.MaxEventCount) {
            //调用http请求
            this.callLogEventReportUp();
            this.commonParameter.clearEvents();
        }
        //todo:存储在本地
        this.saveToLocal(this.commonParameter);
    };
    MoagfaEventReporter.prototype.reportUp = function (commonParameter) {
        return __awaiter(this, void 0, void 0, function () {
            var rst;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, HttpApi_1.default.http.post(this.reportUrl, commonParameter, {
                            headers: {
                                gameId: commonParameter.appId,
                            },
                        })];
                    case 1:
                        rst = _a.sent();
                        if (rst.code != 0) {
                            this.saveToLocal(commonParameter);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MoagfaEventReporter.prototype.callLogEventReportUp = function () {
        if (!this._isReporting) {
            this._isReporting = true;
            this.reportUp(this.commonParameter);
        }
    };
    /**
     *存储到本地，防止丢数据
     */
    MoagfaEventReporter.prototype.saveToLocal = function (commonParameter) {
        var saveData = commonParameter.toEventParameters();
        var saveLocal = JSON.stringify(saveData);
        cc.sys.localStorage.setItem(REPORT_LOCAL_NAME, saveLocal);
        this.commonParameter.clearEvents();
    };
    /**
     *获取本地缓存，并清空本地缓村
     */
    MoagfaEventReporter.prototype.readFromLocal = function () {
        var sysValue = cc.sys.localStorage.getItem(REPORT_LOCAL_NAME);
        if (sysValue) {
            cc.sys.localStorage.removeItem(REPORT_LOCAL_NAME);
            var reportData = JSON.parse(sysValue);
            if (reportData) {
                var reportObj = reportData;
                //上报
                this.reportUp(reportObj);
            }
        }
    };
    MoagfaEventReporter.prototype.logEvent = function (name, parameterName, parameterValue) {
        var rest = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            rest[_i - 3] = arguments[_i];
        }
        if (!this.instanceOfReportableObject(name)) {
            return;
        }
        this.logEventReportableObject(name);
    };
    MoagfaEventReporter.prototype.instanceOfReportableObject = function (object) {
        return "eventName" in object || "toEventParameters" in object;
    };
    return MoagfaEventReporter;
}());
exports.default = MoagfaEventReporter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtb2R1bGVzXFxAbW9nYWZhXFxmYWlyeWd1aS1jb21wb25lbnRcXGxpYlxcYW5hbHl0aWNzXFxtb2dhZmFcXG1vZ2FmYUV2ZW50UmVwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSw2RUFBd0U7QUFDeEUsSUFBTSxpQkFBaUIsR0FBRyxZQUFZLENBQUM7QUFNdkM7SUFPSSw2QkFBWSxXQUF3QjtRQU5uQixrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUM1QixtQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5QixjQUFTLEdBQVcsb0VBQW9FLENBQUM7UUFFbEcsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELHdDQUFVLEdBQVYsVUFBVyxjQUFvQztRQUEvQyxpQkFPQztRQU5HLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBNEMsQ0FBQztRQUNwRSx3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLFdBQVcsQ0FBQztZQUNSLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2hDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNkLENBQUM7SUFDTyxzREFBd0IsR0FBaEMsVUFBaUMsZ0JBQWtDO1FBQy9ELElBQUksc0JBQXNCLEdBQUcsZ0JBQTBDLENBQUM7UUFDeEUsc0JBQXNCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzFELFVBQVU7WUFDVixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO1FBQ0QsWUFBWTtRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFYSxzQ0FBUSxHQUF0QixVQUF1QixlQUEyQzs7Ozs7NEJBQ3RCLHFCQUFNLGlCQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRTs0QkFDN0YsT0FBTyxFQUFFO2dDQUNMLE1BQU0sRUFBRSxlQUFlLENBQUMsS0FBSzs2QkFDaEM7eUJBQ0osQ0FBQyxFQUFBOzt3QkFKRSxHQUFHLEdBQWlDLFNBSXRDO3dCQUNGLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7NEJBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQzt5QkFDckM7Ozs7O0tBQ0o7SUFFTyxrREFBb0IsR0FBNUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNLLHlDQUFXLEdBQW5CLFVBQW9CLGVBQTJDO1FBQzNELElBQUksUUFBUSxHQUFHLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ25ELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ssMkNBQWEsR0FBckI7UUFDSSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RCxJQUFJLFFBQVEsRUFBRTtZQUNWLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2xELElBQUksVUFBVSxHQUF5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVELElBQUksVUFBVSxFQUFFO2dCQUNaLElBQUksU0FBUyxHQUFHLFVBQXdDLENBQUM7Z0JBQ3pELElBQUk7Z0JBQ0osSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QjtTQUNKO0lBQ0wsQ0FBQztJQU1ELHNDQUFRLEdBQVIsVUFBUyxJQUFTLEVBQUUsYUFBbUIsRUFBRSxjQUFvQjtRQUFFLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEMsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLHdCQUF3QixDQUFFLElBQW9DLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ08sd0RBQTBCLEdBQWxDLFVBQW1DLE1BQVc7UUFDMUMsT0FBTyxXQUFXLElBQUksTUFBTSxJQUFJLG1CQUFtQixJQUFJLE1BQU0sQ0FBQztJQUNsRSxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQXhGQSxBQXdGQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50UmVwb3J0ZXIgZnJvbSBcIi4uL0V2ZW50UmVwb3J0ZXJcIjtcbmltcG9ydCBDb21tb25FdmVudFBhcmFtZXRlciBmcm9tIFwiLi4vY29tbW9uRXZlbnRQYXJhbWV0ZXJcIjtcbmltcG9ydCBFdmVudFBhcmFtZXRlciBmcm9tIFwiLi4vRXZlbnRQYXJhbWV0ZXJcIjtcbmltcG9ydCBSZXBvcnRhYmxlT2JqZWN0IGZyb20gXCIuLi9yZXBvcnRhYmxlT2JqZWN0XCI7XG5pbXBvcnQgQXNzZXRHZXR0ZXIgZnJvbSBcIi4vYXNzZXRHZXR0YWJsZVwiO1xuaW1wb3J0IE1vZ2FmYUNvbW1vbkV2ZW50UGFyYW1ldGVyIGZyb20gXCIuL21vZ2FmYUNvbW1vbkV2ZW50UGFyYW1ldGVyXCI7XG5pbXBvcnQgTW9nYWZhUmVwb3J0YWJsZU9iamVjdCBmcm9tIFwiLi9tb2dhZmFSZXBvcnRhYmxlT2JqZWN0XCI7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvbGliL0h0dHBJbnRlcmZhY2VcIjtcbmltcG9ydCBIdHRwQXBpIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9Ac2xvdHNtYXN0ZXIvdWktY29tbW9uL2xpYi9IdHRwQXBpXCI7XG5jb25zdCBSRVBPUlRfTE9DQUxfTkFNRSA9IFwicmVwb3J0RGF0YVwiO1xuaW50ZXJmYWNlIFJlcG9ydFJlc3BvbnNlIHtcbiAgICByZXF1ZXN0SWQ6IHN0cmluZztcbiAgICB0aW1lc3RhbXA6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2FnZmFFdmVudFJlcG9ydGVyIGltcGxlbWVudHMgRXZlbnRSZXBvcnRlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBNYXhFdmVudENvdW50OiBudW1iZXIgPSAxMDA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBSZXBvcnRJbnRlcnZhbDogbnVtYmVyID0gNTAwMDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlcG9ydFVybDogc3RyaW5nID0gXCJodHRwczovLzBxN29wMG1icDEuZXhlY3V0ZS1hcGkudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcHJvZC9ldmVudHNcIjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFzc2V0R2V0dGVyOiBBc3NldEdldHRlcjtcbiAgICBwcml2YXRlIF9pc1JlcG9ydGluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgY29tbW9uUGFyYW1ldGVyOiBNb2dhZmFDb21tb25FdmVudFBhcmFtZXRlcjtcbiAgICBjb25zdHJ1Y3Rvcihhc3NldEdldHRlcjogQXNzZXRHZXR0ZXIpIHtcbiAgICAgICAgdGhpcy5hc3NldEdldHRlciA9IGFzc2V0R2V0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKGNvbW1vblBhcmFtdGVyOiBDb21tb25FdmVudFBhcmFtZXRlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbW1vblBhcmFtZXRlciA9IGNvbW1vblBhcmFtdGVyIGFzIE1vZ2FmYUNvbW1vbkV2ZW50UGFyYW1ldGVyO1xuICAgICAgICAvL3RvZG865LuO5pys5Zyw6I635Y+W5LmL5YmN5L+d5a2Y55qE5pWw5o2u77yM54S25ZCO5LiK5oqlXG4gICAgICAgIHRoaXMucmVhZEZyb21Mb2NhbCgpO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbGxMb2dFdmVudFJlcG9ydFVwKCk7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBsb2dFdmVudFJlcG9ydGFibGVPYmplY3QocmVwb3J0YWJsZU9iamVjdDogUmVwb3J0YWJsZU9iamVjdCk6IHZvaWQge1xuICAgICAgICBsZXQgbW9nYWZhUmVwb3J0YWJsZU9iamVjdCA9IHJlcG9ydGFibGVPYmplY3QgYXMgTW9nYWZhUmVwb3J0YWJsZU9iamVjdDtcbiAgICAgICAgbW9nYWZhUmVwb3J0YWJsZU9iamVjdC5hc3NldHMgPSB0aGlzLmFzc2V0R2V0dGVyLmdldEFzc2V0cygpO1xuICAgICAgICB0aGlzLmNvbW1vblBhcmFtZXRlci5hZGRFdmVudChyZXBvcnRhYmxlT2JqZWN0KTtcbiAgICAgICAgaWYgKHRoaXMuY29tbW9uUGFyYW1ldGVyLmV2ZW50cy5sZW5ndGggPj0gdGhpcy5NYXhFdmVudENvdW50KSB7XG4gICAgICAgICAgICAvL+iwg+eUqGh0dHDor7fmsYJcbiAgICAgICAgICAgIHRoaXMuY2FsbExvZ0V2ZW50UmVwb3J0VXAoKTtcbiAgICAgICAgICAgIHRoaXMuY29tbW9uUGFyYW1ldGVyLmNsZWFyRXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy90b2RvOuWtmOWCqOWcqOacrOWcsFxuICAgICAgICB0aGlzLnNhdmVUb0xvY2FsKHRoaXMuY29tbW9uUGFyYW1ldGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIHJlcG9ydFVwKGNvbW1vblBhcmFtZXRlcjogTW9nYWZhQ29tbW9uRXZlbnRQYXJhbWV0ZXIpIHtcbiAgICAgICAgbGV0IHJzdDogSHR0cFJlc3BvbnNlPFJlcG9ydFJlc3BvbnNlPiA9IGF3YWl0IEh0dHBBcGkuaHR0cC5wb3N0KHRoaXMucmVwb3J0VXJsLCBjb21tb25QYXJhbWV0ZXIsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBnYW1lSWQ6IGNvbW1vblBhcmFtZXRlci5hcHBJZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChyc3QuY29kZSAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVUb0xvY2FsKGNvbW1vblBhcmFtZXRlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGxMb2dFdmVudFJlcG9ydFVwKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzUmVwb3J0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1JlcG9ydGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydFVwKHRoaXMuY29tbW9uUGFyYW1ldGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAq5a2Y5YKo5Yiw5pys5Zyw77yM6Ziy5q2i5Lii5pWw5o2uXG4gICAgICovXG4gICAgcHJpdmF0ZSBzYXZlVG9Mb2NhbChjb21tb25QYXJhbWV0ZXI6IE1vZ2FmYUNvbW1vbkV2ZW50UGFyYW1ldGVyKSB7XG4gICAgICAgIGxldCBzYXZlRGF0YSA9IGNvbW1vblBhcmFtZXRlci50b0V2ZW50UGFyYW1ldGVycygpO1xuICAgICAgICBsZXQgc2F2ZUxvY2FsID0gSlNPTi5zdHJpbmdpZnkoc2F2ZURhdGEpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oUkVQT1JUX0xPQ0FMX05BTUUsIHNhdmVMb2NhbCk7XG4gICAgICAgIHRoaXMuY29tbW9uUGFyYW1ldGVyLmNsZWFyRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICrojrflj5bmnKzlnLDnvJPlrZjvvIzlubbmuIXnqbrmnKzlnLDnvJPmnZFcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlYWRGcm9tTG9jYWwoKSB7XG4gICAgICAgIGxldCBzeXNWYWx1ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShSRVBPUlRfTE9DQUxfTkFNRSk7XG4gICAgICAgIGlmIChzeXNWYWx1ZSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFJFUE9SVF9MT0NBTF9OQU1FKTtcbiAgICAgICAgICAgIGxldCByZXBvcnREYXRhOiBDb21tb25FdmVudFBhcmFtZXRlciA9IEpTT04ucGFyc2Uoc3lzVmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJlcG9ydERhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVwb3J0T2JqID0gcmVwb3J0RGF0YSBhcyBNb2dhZmFDb21tb25FdmVudFBhcmFtZXRlcjtcbiAgICAgICAgICAgICAgICAvL+S4iuaKpVxuICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0VXAocmVwb3J0T2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ0V2ZW50KG5hbWU6IGFueSk6IHZvaWQ7XG4gICAgbG9nRXZlbnQobmFtZTogYW55LCBwYXJhbWV0ZXJOYW1lOiBzdHJpbmcsIHBhcmFtZXRlclZhbHVlOiBudW1iZXIpOiB2b2lkO1xuICAgIGxvZ0V2ZW50KG5hbWU6IGFueSwgcGFyYW1ldGVyTmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJWYWx1ZTogc3RyaW5nKTogdm9pZDtcbiAgICBsb2dFdmVudChuYW1lOiBhbnksIC4uLnBhcmFtZXRlcnM6IEV2ZW50UGFyYW1ldGVyW10pOiB2b2lkO1xuICAgIGxvZ0V2ZW50KG5hbWU6IGFueSwgcGFyYW1ldGVyTmFtZT86IGFueSwgcGFyYW1ldGVyVmFsdWU/OiBhbnksIC4uLnJlc3Q6IGFueVtdKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZU9mUmVwb3J0YWJsZU9iamVjdChuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nRXZlbnRSZXBvcnRhYmxlT2JqZWN0KChuYW1lIGFzIHVua25vd24pIGFzIFJlcG9ydGFibGVPYmplY3QpO1xuICAgIH1cbiAgICBwcml2YXRlIGluc3RhbmNlT2ZSZXBvcnRhYmxlT2JqZWN0KG9iamVjdDogYW55KTogb2JqZWN0IGlzIFJlcG9ydGFibGVPYmplY3Qge1xuICAgICAgICByZXR1cm4gXCJldmVudE5hbWVcIiBpbiBvYmplY3QgfHwgXCJ0b0V2ZW50UGFyYW1ldGVyc1wiIGluIG9iamVjdDtcbiAgICB9XG59XG4iXX0=
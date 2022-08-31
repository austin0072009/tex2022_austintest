"use strict";
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
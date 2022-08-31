"use strict";
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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SpinResultsChess {
    constructor(code, assets, position) {
        this._code = code;
        this._assets = assets;
        this._position = position;
    }
    /**
     * 获取结果棋子编码
     */
    get code() {
        return this._code;
    }
    /**
     * 设置结果棋子编码
     *
     */
    set code(value) {
        this._code = value;
    }
    /**
     * 获取棋子上的资产（比如金币数、freespin次数）
     */
    get assets() {
        return this._assets;
    }
    /**
     * 设置棋子上的资产（比如金币数、freespin次数）
     */
    set assets(value) {
        this._assets = value;
    }
    /**
     * 获取棋子位置
     */
    get position() {
        return this._position;
    }
    /**
     * 设置棋子位置
     */
    set position(value) {
        this._position = value;
    }
}
exports.default = SpinResultsChess;

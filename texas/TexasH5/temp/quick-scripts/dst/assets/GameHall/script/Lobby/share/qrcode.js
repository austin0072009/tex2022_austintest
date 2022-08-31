
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/GameHall/script/Lobby/share/qrcode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ee7e625lRNraA5ibF0c2sy', 'qrcode');
// GameHall/script/Lobby/share/qrcode.ts

"use strict";
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of 
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRBitBuffer = exports.QRRSBlock = exports.QRPolynomial = exports.QRCode = exports.QR8bitByte = void 0;
//---------------------------------------------------------------------
// QR8bitByte
//---------------------------------------------------------------------
var QR8bitByte = /** @class */ (function () {
    function QR8bitByte(data) {
        this.mode = QRMode.MODE_8BIT_BYTE;
        this.data = data;
    }
    QR8bitByte.prototype.getLength = function () {
        return this.data.length;
    };
    QR8bitByte.prototype.write = function (buffer) {
        for (var i = 0; i < this.data.length; i++) {
            // not JIS ...
            buffer.put(this.data.charCodeAt(i), 8);
        }
    };
    return QR8bitByte;
}());
exports.QR8bitByte = QR8bitByte;
//---------------------------------------------------------------------
// QRCode
//---------------------------------------------------------------------
var QRCode = /** @class */ (function () {
    function QRCode(typeNumber, errorCorrectLevel) {
        this.typeNumber = typeNumber;
        this.errorCorrectLevel = errorCorrectLevel;
        this.modules = null;
        this.moduleCount = 0;
        this.dataCache = null;
        this.dataList = new Array();
    }
    QRCode.prototype.addData = function (data) {
        var newData = new QR8bitByte(data);
        this.dataList.push(newData);
        this.dataCache = null;
    };
    QRCode.prototype.isDark = function (row, col) {
        if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
            throw new Error(row + "," + col);
        }
        return this.modules[row][col];
    };
    QRCode.prototype.getModuleCount = function () {
        return this.moduleCount;
    };
    QRCode.prototype.make = function () {
        if (this.typeNumber < 1) {
            var typeNumber = 1;
            for (typeNumber = 1; typeNumber < 40; typeNumber++) {
                var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
                var buffer = new QRBitBuffer();
                var totalDataCount = 0;
                for (var i = 0; i < rsBlocks.length; i++) {
                    totalDataCount += rsBlocks[i].dataCount;
                }
                for (var i = 0; i < this.dataList.length; i++) {
                    var data = this.dataList[i];
                    buffer.put(data.mode, 4);
                    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
                    data.write(buffer);
                }
                if (buffer.getLengthInBits() <= totalDataCount * 8)
                    break;
            }
            this.typeNumber = typeNumber;
        }
        this.makeImpl(false, this.getBestMaskPattern());
    };
    QRCode.prototype.makeImpl = function (test, maskPattern) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = new Array(this.moduleCount);
        for (var row = 0; row < this.moduleCount; row++) {
            this.modules[row] = new Array(this.moduleCount);
            for (var col = 0; col < this.moduleCount; col++) {
                this.modules[row][col] = null; //(col + row) % 3;
            }
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(test, maskPattern);
        if (this.typeNumber >= 7) {
            this.setupTypeNumber(test);
        }
        if (this.dataCache == null) {
            this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
        }
        this.mapData(this.dataCache, maskPattern);
    };
    QRCode.prototype.setupPositionProbePattern = function (row, col) {
        for (var r = -1; r <= 7; r++) {
            if (row + r <= -1 || this.moduleCount <= row + r)
                continue;
            for (var c = -1; c <= 7; c++) {
                if (col + c <= -1 || this.moduleCount <= col + c)
                    continue;
                if ((0 <= r && r <= 6 && (c == 0 || c == 6))
                    || (0 <= c && c <= 6 && (r == 0 || r == 6))
                    || (2 <= r && r <= 4 && 2 <= c && c <= 4)) {
                    this.modules[row + r][col + c] = true;
                }
                else {
                    this.modules[row + r][col + c] = false;
                }
            }
        }
    };
    QRCode.prototype.getBestMaskPattern = function () {
        var minLostPoint = 0;
        var pattern = 0;
        for (var i = 0; i < 8; i++) {
            this.makeImpl(true, i);
            var lostPoint = QRUtil.getLostPoint(this);
            if (i == 0 || minLostPoint > lostPoint) {
                minLostPoint = lostPoint;
                pattern = i;
            }
        }
        return pattern;
    };
    QRCode.prototype.createMovieClip = function (target_mc, instance_name, depth) {
        var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
        var cs = 1;
        this.make();
        for (var row = 0; row < this.modules.length; row++) {
            var y = row * cs;
            for (var col = 0; col < this.modules[row].length; col++) {
                var x = col * cs;
                var dark = this.modules[row][col];
                if (dark) {
                    qr_mc.beginFill(0, 100);
                    qr_mc.moveTo(x, y);
                    qr_mc.lineTo(x + cs, y);
                    qr_mc.lineTo(x + cs, y + cs);
                    qr_mc.lineTo(x, y + cs);
                    qr_mc.endFill();
                }
            }
        }
        return qr_mc;
    };
    QRCode.prototype.setupTimingPattern = function () {
        for (var r = 8; r < this.moduleCount - 8; r++) {
            if (this.modules[r][6] != null) {
                continue;
            }
            this.modules[r][6] = (r % 2 == 0);
        }
        for (var c = 8; c < this.moduleCount - 8; c++) {
            if (this.modules[6][c] != null) {
                continue;
            }
            this.modules[6][c] = (c % 2 == 0);
        }
    };
    QRCode.prototype.setupPositionAdjustPattern = function () {
        var pos = QRUtil.getPatternPosition(this.typeNumber);
        for (var i = 0; i < pos.length; i++) {
            for (var j = 0; j < pos.length; j++) {
                var row = pos[i];
                var col = pos[j];
                if (this.modules[row][col] != null) {
                    continue;
                }
                for (var r = -2; r <= 2; r++) {
                    for (var c = -2; c <= 2; c++) {
                        if (r == -2 || r == 2 || c == -2 || c == 2
                            || (r == 0 && c == 0)) {
                            this.modules[row + r][col + c] = true;
                        }
                        else {
                            this.modules[row + r][col + c] = false;
                        }
                    }
                }
            }
        }
    };
    QRCode.prototype.setupTypeNumber = function (test) {
        var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
        for (var i = 0; i < 18; i++) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
        }
        for (var i = 0; i < 18; i++) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
        }
    };
    QRCode.prototype.setupTypeInfo = function (test, maskPattern) {
        var data = (this.errorCorrectLevel << 3) | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data);
        // vertical		
        for (var i = 0; i < 15; i++) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            if (i < 6) {
                this.modules[i][8] = mod;
            }
            else if (i < 8) {
                this.modules[i + 1][8] = mod;
            }
            else {
                this.modules[this.moduleCount - 15 + i][8] = mod;
            }
        }
        // horizontal
        for (var i = 0; i < 15; i++) {
            var mod = (!test && ((bits >> i) & 1) == 1);
            if (i < 8) {
                this.modules[8][this.moduleCount - i - 1] = mod;
            }
            else if (i < 9) {
                this.modules[8][15 - i - 1 + 1] = mod;
            }
            else {
                this.modules[8][15 - i - 1] = mod;
            }
        }
        // fixed module
        this.modules[this.moduleCount - 8][8] = (!test);
    };
    QRCode.prototype.mapData = function (data, maskPattern) {
        var inc = -1;
        var row = this.moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;
        for (var col = this.moduleCount - 1; col > 0; col -= 2) {
            if (col == 6)
                col--;
            while (true) {
                for (var c = 0; c < 2; c++) {
                    if (this.modules[row][col - c] == null) {
                        var dark = false;
                        if (byteIndex < data.length) {
                            dark = (((data[byteIndex] >>> bitIndex) & 1) == 1);
                        }
                        var mask = QRUtil.getMask(maskPattern, row, col - c);
                        if (mask) {
                            dark = !dark;
                        }
                        this.modules[row][col - c] = dark;
                        bitIndex--;
                        if (bitIndex == -1) {
                            byteIndex++;
                            bitIndex = 7;
                        }
                    }
                }
                row += inc;
                if (row < 0 || this.moduleCount <= row) {
                    row -= inc;
                    inc = -inc;
                    break;
                }
            }
        }
    };
    QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
        var buffer = new QRBitBuffer();
        for (var i = 0; i < dataList.length; i++) {
            var data = dataList[i];
            buffer.put(data.mode, 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
            data.write(buffer);
        }
        // calc num max data.
        var totalDataCount = 0;
        for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
        }
        if (buffer.getLengthInBits() > totalDataCount * 8) {
            throw new Error("code length overflow. ("
                + buffer.getLengthInBits()
                + ">"
                + totalDataCount * 8
                + ")");
        }
        // end code
        if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
            buffer.put(0, 4);
        }
        // padding
        while (buffer.getLengthInBits() % 8 != 0) {
            buffer.putBit(false);
        }
        // padding
        while (true) {
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
                break;
            }
            buffer.put(QRCode.PAD0, 8);
            if (buffer.getLengthInBits() >= totalDataCount * 8) {
                break;
            }
            buffer.put(QRCode.PAD1, 8);
        }
        return QRCode.createBytes(buffer, rsBlocks);
    };
    QRCode.createBytes = function (buffer, rsBlocks) {
        var offset = 0;
        var maxDcCount = 0;
        var maxEcCount = 0;
        var dcdata = new Array(rsBlocks.length);
        var ecdata = new Array(rsBlocks.length);
        for (var r = 0; r < rsBlocks.length; r++) {
            var dcCount = rsBlocks[r].dataCount;
            var ecCount = rsBlocks[r].totalCount - dcCount;
            maxDcCount = Math.max(maxDcCount, dcCount);
            maxEcCount = Math.max(maxEcCount, ecCount);
            dcdata[r] = new Array(dcCount);
            for (var i = 0; i < dcdata[r].length; i++) {
                dcdata[r][i] = 0xff & buffer.buffer[i + offset];
            }
            offset += dcCount;
            var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
            var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
            var modPoly = rawPoly.mod(rsPoly);
            ecdata[r] = new Array(rsPoly.getLength() - 1);
            for (var i = 0; i < ecdata[r].length; i++) {
                var modIndex = i + modPoly.getLength() - ecdata[r].length;
                ecdata[r][i] = (modIndex >= 0) ? modPoly.get(modIndex) : 0;
            }
        }
        var totalCodeCount = 0;
        for (var i = 0; i < rsBlocks.length; i++) {
            totalCodeCount += rsBlocks[i].totalCount;
        }
        var data = new Array(totalCodeCount);
        var index = 0;
        for (var i = 0; i < maxDcCount; i++) {
            for (var r = 0; r < rsBlocks.length; r++) {
                if (i < dcdata[r].length) {
                    data[index++] = dcdata[r][i];
                }
            }
        }
        for (var i = 0; i < maxEcCount; i++) {
            for (var r = 0; r < rsBlocks.length; r++) {
                if (i < ecdata[r].length) {
                    data[index++] = ecdata[r][i];
                }
            }
        }
        return data;
    };
    QRCode.PAD0 = 0xEC;
    QRCode.PAD1 = 0x11;
    return QRCode;
}());
exports.QRCode = QRCode;
//---------------------------------------------------------------------
// QRMode
//---------------------------------------------------------------------
var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
};
//---------------------------------------------------------------------
// QRErrorCorrectLevel
//---------------------------------------------------------------------
var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
};
//---------------------------------------------------------------------
// QRMaskPattern
//---------------------------------------------------------------------
var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
//---------------------------------------------------------------------
// QRUtil
//---------------------------------------------------------------------
var QRUtil = {
    PATTERN_POSITION_TABLE: [
        [],
        [6, 18],
        [6, 22],
        [6, 26],
        [6, 30],
        [6, 34],
        [6, 22, 38],
        [6, 24, 42],
        [6, 26, 46],
        [6, 28, 50],
        [6, 30, 54],
        [6, 32, 58],
        [6, 34, 62],
        [6, 26, 46, 66],
        [6, 26, 48, 70],
        [6, 26, 50, 74],
        [6, 30, 54, 78],
        [6, 30, 56, 82],
        [6, 30, 58, 86],
        [6, 34, 62, 90],
        [6, 28, 50, 72, 94],
        [6, 26, 50, 74, 98],
        [6, 30, 54, 78, 102],
        [6, 28, 54, 80, 106],
        [6, 32, 58, 84, 110],
        [6, 30, 58, 86, 114],
        [6, 34, 62, 90, 118],
        [6, 26, 50, 74, 98, 122],
        [6, 30, 54, 78, 102, 126],
        [6, 26, 52, 78, 104, 130],
        [6, 30, 56, 82, 108, 134],
        [6, 34, 60, 86, 112, 138],
        [6, 30, 58, 86, 114, 142],
        [6, 34, 62, 90, 118, 146],
        [6, 30, 54, 78, 102, 126, 150],
        [6, 24, 50, 76, 102, 128, 154],
        [6, 28, 54, 80, 106, 132, 158],
        [6, 32, 58, 84, 110, 136, 162],
        [6, 26, 54, 82, 110, 138, 166],
        [6, 30, 58, 86, 114, 142, 170]
    ],
    G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
    G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
    G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
    getBCHTypeInfo: function (data) {
        var d = data << 10;
        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
            d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15)));
        }
        return ((data << 10) | d) ^ QRUtil.G15_MASK;
    },
    getBCHTypeNumber: function (data) {
        var d = data << 12;
        while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
            d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18)));
        }
        return (data << 12) | d;
    },
    getBCHDigit: function (data) {
        var digit = 0;
        while (data != 0) {
            digit++;
            data >>>= 1;
        }
        return digit;
    },
    getPatternPosition: function (typeNumber) {
        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    getMask: function (maskPattern, i, j) {
        switch (maskPattern) {
            case QRMaskPattern.PATTERN000: return (i + j) % 2 == 0;
            case QRMaskPattern.PATTERN001: return i % 2 == 0;
            case QRMaskPattern.PATTERN010: return j % 3 == 0;
            case QRMaskPattern.PATTERN011: return (i + j) % 3 == 0;
            case QRMaskPattern.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
            case QRMaskPattern.PATTERN101: return (i * j) % 2 + (i * j) % 3 == 0;
            case QRMaskPattern.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 == 0;
            case QRMaskPattern.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + maskPattern);
        }
    },
    getErrorCorrectPolynomial: function (errorCorrectLength) {
        var a = new QRPolynomial([1], 0);
        for (var i = 0; i < errorCorrectLength; i++) {
            a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
        }
        return a;
    },
    getLengthInBits: function (mode, type) {
        if (1 <= type && type < 10) {
            // 1 - 9
            switch (mode) {
                case QRMode.MODE_NUMBER: return 10;
                case QRMode.MODE_ALPHA_NUM: return 9;
                case QRMode.MODE_8BIT_BYTE: return 8;
                case QRMode.MODE_KANJI: return 8;
                default:
                    throw new Error("mode:" + mode);
            }
        }
        else if (type < 27) {
            // 10 - 26
            switch (mode) {
                case QRMode.MODE_NUMBER: return 12;
                case QRMode.MODE_ALPHA_NUM: return 11;
                case QRMode.MODE_8BIT_BYTE: return 16;
                case QRMode.MODE_KANJI: return 10;
                default:
                    throw new Error("mode:" + mode);
            }
        }
        else if (type < 41) {
            // 27 - 40
            switch (mode) {
                case QRMode.MODE_NUMBER: return 14;
                case QRMode.MODE_ALPHA_NUM: return 13;
                case QRMode.MODE_8BIT_BYTE: return 16;
                case QRMode.MODE_KANJI: return 12;
                default:
                    throw new Error("mode:" + mode);
            }
        }
        else {
            throw new Error("type:" + type);
        }
    },
    getLostPoint: function (qrCode) {
        var moduleCount = qrCode.getModuleCount();
        var lostPoint = 0;
        // LEVEL1
        for (var row = 0; row < moduleCount; row++) {
            for (var col = 0; col < moduleCount; col++) {
                var sameCount = 0;
                var dark = qrCode.isDark(row, col);
                for (var r = -1; r <= 1; r++) {
                    if (row + r < 0 || moduleCount <= row + r) {
                        continue;
                    }
                    for (var c = -1; c <= 1; c++) {
                        if (col + c < 0 || moduleCount <= col + c) {
                            continue;
                        }
                        if (r == 0 && c == 0) {
                            continue;
                        }
                        if (dark == qrCode.isDark(row + r, col + c)) {
                            sameCount++;
                        }
                    }
                }
                if (sameCount > 5) {
                    lostPoint += (3 + sameCount - 5);
                }
            }
        }
        // LEVEL2
        for (var row = 0; row < moduleCount - 1; row++) {
            for (var col = 0; col < moduleCount - 1; col++) {
                var count = 0;
                if (qrCode.isDark(row, col))
                    count++;
                if (qrCode.isDark(row + 1, col))
                    count++;
                if (qrCode.isDark(row, col + 1))
                    count++;
                if (qrCode.isDark(row + 1, col + 1))
                    count++;
                if (count == 0 || count == 4) {
                    lostPoint += 3;
                }
            }
        }
        // LEVEL3
        for (var row = 0; row < moduleCount; row++) {
            for (var col = 0; col < moduleCount - 6; col++) {
                if (qrCode.isDark(row, col)
                    && !qrCode.isDark(row, col + 1)
                    && qrCode.isDark(row, col + 2)
                    && qrCode.isDark(row, col + 3)
                    && qrCode.isDark(row, col + 4)
                    && !qrCode.isDark(row, col + 5)
                    && qrCode.isDark(row, col + 6)) {
                    lostPoint += 40;
                }
            }
        }
        for (var col = 0; col < moduleCount; col++) {
            for (var row = 0; row < moduleCount - 6; row++) {
                if (qrCode.isDark(row, col)
                    && !qrCode.isDark(row + 1, col)
                    && qrCode.isDark(row + 2, col)
                    && qrCode.isDark(row + 3, col)
                    && qrCode.isDark(row + 4, col)
                    && !qrCode.isDark(row + 5, col)
                    && qrCode.isDark(row + 6, col)) {
                    lostPoint += 40;
                }
            }
        }
        // LEVEL4
        var darkCount = 0;
        for (var col = 0; col < moduleCount; col++) {
            for (var row = 0; row < moduleCount; row++) {
                if (qrCode.isDark(row, col)) {
                    darkCount++;
                }
            }
        }
        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;
        return lostPoint;
    }
};
//---------------------------------------------------------------------
// QRMath
//---------------------------------------------------------------------
var QRMath = {
    glog: function (n) {
        if (n < 1) {
            throw new Error("glog(" + n + ")");
        }
        return QRMath.LOG_TABLE[n];
    },
    gexp: function (n) {
        while (n < 0) {
            n += 255;
        }
        while (n >= 256) {
            n -= 255;
        }
        return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
};
for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4]
        ^ QRMath.EXP_TABLE[i - 5]
        ^ QRMath.EXP_TABLE[i - 6]
        ^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}
//---------------------------------------------------------------------
// QRPolynomial
//---------------------------------------------------------------------
var QRPolynomial = /** @class */ (function () {
    function QRPolynomial(num, shift) {
        if (num.length == undefined) {
            throw new Error(num.length + "/" + shift);
        }
        var offset = 0;
        while (offset < num.length && num[offset] == 0) {
            offset++;
        }
        this.num = new Array(num.length - offset + shift);
        for (var i = 0; i < num.length - offset; i++) {
            this.num[i] = num[i + offset];
        }
    }
    QRPolynomial.prototype.get = function (index) {
        return this.num[index];
    };
    QRPolynomial.prototype.getLength = function () {
        return this.num.length;
    };
    QRPolynomial.prototype.multiply = function (e) {
        var num = new Array(this.getLength() + e.getLength() - 1);
        for (var i = 0; i < this.getLength(); i++) {
            for (var j = 0; j < e.getLength(); j++) {
                num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
            }
        }
        return new QRPolynomial(num, 0);
    };
    QRPolynomial.prototype.mod = function (e) {
        if (this.getLength() - e.getLength() < 0) {
            return this;
        }
        var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
        var num = new Array(this.getLength());
        for (var i = 0; i < this.getLength(); i++) {
            num[i] = this.get(i);
        }
        for (var i = 0; i < e.getLength(); i++) {
            num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
        }
        // recursive call
        return new QRPolynomial(num, 0).mod(e);
    };
    return QRPolynomial;
}());
exports.QRPolynomial = QRPolynomial;
// QRRSBlock
//---------------------------------------------------------------------
var QRRSBlock = /** @class */ (function () {
    function QRRSBlock(totalCount, dataCount) {
        this.totalCount = totalCount;
        this.dataCount = dataCount;
    }
    QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
        var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
        if (rsBlock == undefined) {
            throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
        }
        var length = rsBlock.length / 3;
        var list = new Array();
        for (var i = 0; i < length; i++) {
            var count = rsBlock[i * 3 + 0];
            var totalCount = rsBlock[i * 3 + 1];
            var dataCount = rsBlock[i * 3 + 2];
            for (var j = 0; j < count; j++) {
                list.push(new QRRSBlock(totalCount, dataCount));
            }
        }
        return list;
    };
    QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
        switch (errorCorrectLevel) {
            case QRErrorCorrectLevel.L:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
            case QRErrorCorrectLevel.M:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
            case QRErrorCorrectLevel.Q:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
            case QRErrorCorrectLevel.H:
                return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
            default:
                return undefined;
        }
    };
    QRRSBlock.RS_BLOCK_TABLE = [
        // L
        // M
        // Q
        // H
        // 1
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        // 2
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        // 3
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        // 4		
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        // 5
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        // 6
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        // 7		
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        // 8
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        // 9
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        // 10		
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        // 11
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        // 12
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        // 13
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        // 14
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        // 15
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        // 16
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        // 17
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        // 18
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        // 19
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        // 20
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        // 21
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        // 22
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        // 23
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        // 24
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        // 25
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        // 26
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        // 27
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        // 28
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        // 29
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        // 30
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        // 31
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        // 32
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        // 33
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        // 34
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        // 35
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        // 36
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        // 37
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        // 38
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        // 39
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        // 40
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ];
    return QRRSBlock;
}());
exports.QRRSBlock = QRRSBlock;
//---------------------------------------------------------------------
// QRBitBuffer
//---------------------------------------------------------------------
var QRBitBuffer = /** @class */ (function () {
    function QRBitBuffer() {
        this.buffer = new Array();
        this.length = 0;
    }
    QRBitBuffer.prototype.get = function (index) {
        var bufIndex = Math.floor(index / 8);
        return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) == 1;
    };
    QRBitBuffer.prototype.put = function (num, length) {
        for (var i = 0; i < length; i++) {
            this.putBit(((num >>> (length - i - 1)) & 1) == 1);
        }
    };
    QRBitBuffer.prototype.getLengthInBits = function () {
        return this.length;
    };
    QRBitBuffer.prototype.putBit = function (bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
            this.buffer.push(0);
        }
        if (bit) {
            this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
        }
        this.length++;
    };
    return QRBitBuffer;
}());
exports.QRBitBuffer = QRBitBuffer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZUhhbGxcXHNjcmlwdFxcTG9iYnlcXHNoYXJlXFxxcmNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVFQUF1RTtBQUN2RSx3QkFBd0I7QUFDeEIsRUFBRTtBQUNGLG9DQUFvQztBQUNwQyxFQUFFO0FBQ0YsaUNBQWlDO0FBQ2pDLEVBQUU7QUFDRixrQ0FBa0M7QUFDbEMsdURBQXVEO0FBQ3ZELEVBQUU7QUFDRixpREFBaUQ7QUFDakQsMEJBQTBCO0FBQzFCLHNEQUFzRDtBQUN0RCxFQUFFO0FBQ0YsdUVBQXVFOzs7QUFFdkUsdUVBQXVFO0FBQ3ZFLGFBQWE7QUFDYix1RUFBdUU7QUFDdkU7SUFHQyxvQkFBbUIsSUFBSTtRQUZoQixTQUFJLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUduQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNsQixDQUFDO0lBQ00sOEJBQVMsR0FBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFDTSwwQkFBSyxHQUFaLFVBQWEsTUFBTTtRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsY0FBYztZQUNkLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFDRixDQUFDO0lBRUYsaUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGdDQUFVO0FBaUJ2Qix1RUFBdUU7QUFDdkUsU0FBUztBQUNULHVFQUF1RTtBQUN2RTtJQU9DLGdCQUFtQixVQUFVLEVBQUUsaUJBQWlCO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUks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QUFDO0lBQ2IsVUFBVSxFQUFFLENBQUM7SUFDYixVQUFVLEVBQUUsQ0FBQztJQUNiLFVBQVUsRUFBRSxDQUFDO0lBQ2IsVUFBVSxFQUFFLENBQUM7Q0FDYixDQUFDO0FBRUYsdUVBQXVFO0FBQ3ZFLFNBQVM7QUFDVCx1RUFBdUU7QUFFdkUsSUFBSSxNQUFNLEdBQUc7SUFDWixzQkFBc0IsRUFBRTtRQUN2QixFQUFFO1FBQ0YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1AsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUN6QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDekIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUN6QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDekIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDOUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7S0FDOUI7SUFFRCxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hGLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxD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QUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFVixJQUFJO1FBQ0osQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFdEIsSUFBSTtRQUNKLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFWCxNQUFNO1FBQ04sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFdEIsSUFBSTtRQUNKLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUV0QixJQUFJO1FBQ0osQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXRCLE9BQU87UUFDUCxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXRCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFdEIsS0FBSztRQUNMLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFdEIsS0FBSztRQUNMLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUV2QixLQUFLO1FBQ0wsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUMxQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUV2QixLQUFLO1FBQ0wsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUVaLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXZCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXZCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXZCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXZCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDWixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFdkIsS0FBSztRQUNMLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDMUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUVaLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXZCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhCLEtBQUs7UUFDTCxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzNCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXZCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhCLEtBQUs7UUFDTCxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzNCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhCLEtBQUs7UUFDTCxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhCLEtBQUs7UUFDTCxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1FBQ2QsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFeEIsS0FBSztRQUNMLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFeEIsS0FBSztRQUNMLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFdkIsS0FBSztRQUNMLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFeEIsS0FBSztRQUNMLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDM0IsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFdkIsS0FBSztRQUNMLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFeEIsS0FBSztRQUNMLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFeEIsS0FBSztRQUNMLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFeEIsS0FBSztRQUNMLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDeEIsQ0FBQztJQXdDSCxnQkFBQztDQXRTRCxBQXNTQyxJQUFBO0FBdFNZLDhCQUFTO0FBd1N0Qix1RUFBdUU7QUFDdkUsY0FBYztBQUNkLHVFQUF1RTtBQUN2RTtJQUdDO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCx5QkFBRyxHQUFILFVBQUksS0FBSztRQUNSLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCx5QkFBRyxHQUFILFVBQUksR0FBRyxFQUFFLE1BQU07UUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNGLENBQUM7SUFDRCxxQ0FBZSxHQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFDRCw0QkFBTSxHQUFOLFVBQU8sR0FBRztRQUNULElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFFBQVEsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtRQUVELElBQUksR0FBRyxFQUFFO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0RDtRQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFDRixrQkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUEvQlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUkNvZGUgZm9yIEphdmFTY3JpcHRcclxuLy9cclxuLy8gQ29weXJpZ2h0IChjKSAyMDA5IEthenVoaWtvIEFyYXNlXHJcbi8vXHJcbi8vIFVSTDogaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1xyXG4vL1xyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XHJcbi8vICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuLy9cclxuLy8gVGhlIHdvcmQgXCJRUiBDb2RlXCIgaXMgcmVnaXN0ZXJlZCB0cmFkZW1hcmsgb2YgXHJcbi8vIERFTlNPIFdBVkUgSU5DT1JQT1JBVEVEXHJcbi8vICAgaHR0cDovL3d3dy5kZW5zby13YXZlLmNvbS9xcmNvZGUvZmFxcGF0ZW50LWUuaHRtbFxyXG4vL1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUVI4Yml0Qnl0ZVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY2xhc3MgUVI4Yml0Qnl0ZSB7XHJcblx0cHVibGljIG1vZGUgPSBRUk1vZGUuTU9ERV84QklUX0JZVEU7XHJcblx0cHVibGljIGRhdGE7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0fVxyXG5cdHB1YmxpYyBnZXRMZW5ndGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcclxuXHR9XHJcblx0cHVibGljIHdyaXRlKGJ1ZmZlcikge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Ly8gbm90IEpJUyAuLi5cclxuXHRcdFx0YnVmZmVyLnB1dCh0aGlzLmRhdGEuY2hhckNvZGVBdChpKSwgOCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUkNvZGVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNsYXNzIFFSQ29kZSB7XHJcblx0cHVibGljIHR5cGVOdW1iZXI7XHJcblx0cHVibGljIGVycm9yQ29ycmVjdExldmVsO1xyXG5cdHB1YmxpYyBtb2R1bGVzO1xyXG5cdHB1YmxpYyBtb2R1bGVDb3VudDtcclxuXHRwdWJsaWMgZGF0YUNhY2hlO1xyXG5cdHB1YmxpYyBkYXRhTGlzdDtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuXHRcdHRoaXMudHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XHJcblx0XHR0aGlzLmVycm9yQ29ycmVjdExldmVsID0gZXJyb3JDb3JyZWN0TGV2ZWw7XHJcblx0XHR0aGlzLm1vZHVsZXMgPSBudWxsO1xyXG5cdFx0dGhpcy5tb2R1bGVDb3VudCA9IDA7XHJcblx0XHR0aGlzLmRhdGFDYWNoZSA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGFMaXN0ID0gbmV3IEFycmF5KCk7XHJcblx0fVxyXG5cdGFkZERhdGEoZGF0YSkge1xyXG5cdFx0bGV0IG5ld0RhdGEgPSBuZXcgUVI4Yml0Qnl0ZShkYXRhKTtcclxuXHRcdHRoaXMuZGF0YUxpc3QucHVzaChuZXdEYXRhKTtcclxuXHRcdHRoaXMuZGF0YUNhY2hlID0gbnVsbDtcclxuXHR9XHJcblx0aXNEYXJrKHJvdywgY29sKSB7XHJcblx0XHRpZiAocm93IDwgMCB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IHJvdyB8fCBjb2wgPCAwIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gY29sKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihyb3cgKyBcIixcIiArIGNvbCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5tb2R1bGVzW3Jvd11bY29sXTtcclxuXHR9XHJcblx0Z2V0TW9kdWxlQ291bnQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5tb2R1bGVDb3VudDtcclxuXHR9XHJcblx0bWFrZSgpIHtcclxuXHRcdGlmICh0aGlzLnR5cGVOdW1iZXIgPCAxKSB7XHJcblx0XHRcdGxldCB0eXBlTnVtYmVyID0gMTtcclxuXHRcdFx0Zm9yICh0eXBlTnVtYmVyID0gMTsgdHlwZU51bWJlciA8IDQwOyB0eXBlTnVtYmVyKyspIHtcclxuXHRcdFx0XHRsZXQgcnNCbG9ja3MgPSBRUlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCk7XHJcblxyXG5cdFx0XHRcdGxldCBidWZmZXIgPSBuZXcgUVJCaXRCdWZmZXIoKTtcclxuXHRcdFx0XHRsZXQgdG90YWxEYXRhQ291bnQgPSAwO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmRhdGFDb3VudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0bGV0IGRhdGEgPSB0aGlzLmRhdGFMaXN0W2ldO1xyXG5cdFx0XHRcdFx0YnVmZmVyLnB1dChkYXRhLm1vZGUsIDQpO1xyXG5cdFx0XHRcdFx0YnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEubW9kZSwgdHlwZU51bWJlcikpO1xyXG5cdFx0XHRcdFx0ZGF0YS53cml0ZShidWZmZXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpIDw9IHRvdGFsRGF0YUNvdW50ICogOClcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMudHlwZU51bWJlciA9IHR5cGVOdW1iZXI7XHJcblx0XHR9XHJcblx0XHR0aGlzLm1ha2VJbXBsKGZhbHNlLCB0aGlzLmdldEJlc3RNYXNrUGF0dGVybigpKTtcclxuXHR9XHJcblxyXG5cdG1ha2VJbXBsKHRlc3QsIG1hc2tQYXR0ZXJuKSB7XHJcblx0XHR0aGlzLm1vZHVsZUNvdW50ID0gdGhpcy50eXBlTnVtYmVyICogNCArIDE3O1xyXG5cdFx0dGhpcy5tb2R1bGVzID0gbmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO1xyXG5cclxuXHRcdGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcblxyXG5cdFx0XHR0aGlzLm1vZHVsZXNbcm93XSA9IG5ldyBBcnJheSh0aGlzLm1vZHVsZUNvdW50KTtcclxuXHJcblx0XHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMubW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcblx0XHRcdFx0dGhpcy5tb2R1bGVzW3Jvd11bY29sXSA9IG51bGw7Ly8oY29sICsgcm93KSAlIDM7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgMCk7XHJcblx0XHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4odGhpcy5tb2R1bGVDb3VudCAtIDcsIDApO1xyXG5cdFx0dGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIHRoaXMubW9kdWxlQ291bnQgLSA3KTtcclxuXHRcdHRoaXMuc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4oKTtcclxuXHRcdHRoaXMuc2V0dXBUaW1pbmdQYXR0ZXJuKCk7XHJcblx0XHR0aGlzLnNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pO1xyXG5cclxuXHRcdGlmICh0aGlzLnR5cGVOdW1iZXIgPj0gNykge1xyXG5cdFx0XHR0aGlzLnNldHVwVHlwZU51bWJlcih0ZXN0KTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5kYXRhQ2FjaGUgPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLmRhdGFDYWNoZSA9IFFSQ29kZS5jcmVhdGVEYXRhKHRoaXMudHlwZU51bWJlciwgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCwgdGhpcy5kYXRhTGlzdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5tYXBEYXRhKHRoaXMuZGF0YUNhY2hlLCBtYXNrUGF0dGVybik7XHJcblx0fVxyXG5cdHNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4ocm93LCBjb2wpIHtcclxuXHRcdGZvciAobGV0IHIgPSAtMTsgciA8PSA3OyByKyspIHtcclxuXHJcblx0XHRcdGlmIChyb3cgKyByIDw9IC0xIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gcm93ICsgcikgY29udGludWU7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBjID0gLTE7IGMgPD0gNzsgYysrKSB7XHJcblxyXG5cdFx0XHRcdGlmIChjb2wgKyBjIDw9IC0xIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gY29sICsgYykgY29udGludWU7XHJcblxyXG5cdFx0XHRcdGlmICgoMCA8PSByICYmIHIgPD0gNiAmJiAoYyA9PSAwIHx8IGMgPT0gNikpXHJcblx0XHRcdFx0XHR8fCAoMCA8PSBjICYmIGMgPD0gNiAmJiAociA9PSAwIHx8IHIgPT0gNikpXHJcblx0XHRcdFx0XHR8fCAoMiA8PSByICYmIHIgPD0gNCAmJiAyIDw9IGMgJiYgYyA8PSA0KSkge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGdldEJlc3RNYXNrUGF0dGVybigpIHtcclxuXHRcdGxldCBtaW5Mb3N0UG9pbnQgPSAwO1xyXG5cdFx0bGV0IHBhdHRlcm4gPSAwO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcblxyXG5cdFx0XHR0aGlzLm1ha2VJbXBsKHRydWUsIGkpO1xyXG5cclxuXHRcdFx0bGV0IGxvc3RQb2ludCA9IFFSVXRpbC5nZXRMb3N0UG9pbnQodGhpcyk7XHJcblxyXG5cdFx0XHRpZiAoaSA9PSAwIHx8IG1pbkxvc3RQb2ludCA+IGxvc3RQb2ludCkge1xyXG5cdFx0XHRcdG1pbkxvc3RQb2ludCA9IGxvc3RQb2ludDtcclxuXHRcdFx0XHRwYXR0ZXJuID0gaTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwYXR0ZXJuO1xyXG5cdH1cclxuXHRjcmVhdGVNb3ZpZUNsaXAodGFyZ2V0X21jLCBpbnN0YW5jZV9uYW1lLCBkZXB0aCkge1xyXG5cclxuXHRcdGxldCBxcl9tYyA9IHRhcmdldF9tYy5jcmVhdGVFbXB0eU1vdmllQ2xpcChpbnN0YW5jZV9uYW1lLCBkZXB0aCk7XHJcblx0XHRsZXQgY3MgPSAxO1xyXG5cclxuXHRcdHRoaXMubWFrZSgpO1xyXG5cclxuXHRcdGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubW9kdWxlcy5sZW5ndGg7IHJvdysrKSB7XHJcblxyXG5cdFx0XHRsZXQgeSA9IHJvdyAqIGNzO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5tb2R1bGVzW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xyXG5cclxuXHRcdFx0XHRsZXQgeCA9IGNvbCAqIGNzO1xyXG5cdFx0XHRcdGxldCBkYXJrID0gdGhpcy5tb2R1bGVzW3Jvd11bY29sXTtcclxuXHJcblx0XHRcdFx0aWYgKGRhcmspIHtcclxuXHRcdFx0XHRcdHFyX21jLmJlZ2luRmlsbCgwLCAxMDApO1xyXG5cdFx0XHRcdFx0cXJfbWMubW92ZVRvKHgsIHkpO1xyXG5cdFx0XHRcdFx0cXJfbWMubGluZVRvKHggKyBjcywgeSk7XHJcblx0XHRcdFx0XHRxcl9tYy5saW5lVG8oeCArIGNzLCB5ICsgY3MpO1xyXG5cdFx0XHRcdFx0cXJfbWMubGluZVRvKHgsIHkgKyBjcyk7XHJcblx0XHRcdFx0XHRxcl9tYy5lbmRGaWxsKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHFyX21jO1xyXG5cdH1cclxuXHJcblx0c2V0dXBUaW1pbmdQYXR0ZXJuKCkge1xyXG5cdFx0Zm9yIChsZXQgciA9IDg7IHIgPCB0aGlzLm1vZHVsZUNvdW50IC0gODsgcisrKSB7XHJcblx0XHRcdGlmICh0aGlzLm1vZHVsZXNbcl1bNl0gIT0gbnVsbCkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMubW9kdWxlc1tyXVs2XSA9IChyICUgMiA9PSAwKTtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKGxldCBjID0gODsgYyA8IHRoaXMubW9kdWxlQ291bnQgLSA4OyBjKyspIHtcclxuXHRcdFx0aWYgKHRoaXMubW9kdWxlc1s2XVtjXSAhPSBudWxsKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5tb2R1bGVzWzZdW2NdID0gKGMgJSAyID09IDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRzZXR1cFBvc2l0aW9uQWRqdXN0UGF0dGVybigpIHtcclxuXHRcdGxldCBwb3MgPSBRUlV0aWwuZ2V0UGF0dGVyblBvc2l0aW9uKHRoaXMudHlwZU51bWJlcik7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb3MubGVuZ3RoOyBpKyspIHtcclxuXHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcG9zLmxlbmd0aDsgaisrKSB7XHJcblxyXG5cdFx0XHRcdGxldCByb3cgPSBwb3NbaV07XHJcblx0XHRcdFx0bGV0IGNvbCA9IHBvc1tqXTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMubW9kdWxlc1tyb3ddW2NvbF0gIT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRmb3IgKGxldCByID0gLTI7IHIgPD0gMjsgcisrKSB7XHJcblxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgYyA9IC0yOyBjIDw9IDI7IGMrKykge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHIgPT0gLTIgfHwgciA9PSAyIHx8IGMgPT0gLTIgfHwgYyA9PSAyXHJcblx0XHRcdFx0XHRcdFx0fHwgKHIgPT0gMCAmJiBjID09IDApKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0dXBUeXBlTnVtYmVyKHRlc3QpIHtcclxuXHRcdGxldCBiaXRzID0gUVJVdGlsLmdldEJDSFR5cGVOdW1iZXIodGhpcy50eXBlTnVtYmVyKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDE4OyBpKyspIHtcclxuXHRcdFx0bGV0IG1vZCA9ICghdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcclxuXHRcdFx0dGhpcy5tb2R1bGVzW01hdGguZmxvb3IoaSAvIDMpXVtpICUgMyArIHRoaXMubW9kdWxlQ291bnQgLSA4IC0gM10gPSBtb2Q7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSB7XHJcblx0XHRcdGxldCBtb2QgPSAoIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcblx0XHRcdHRoaXMubW9kdWxlc1tpICUgMyArIHRoaXMubW9kdWxlQ291bnQgLSA4IC0gM11bTWF0aC5mbG9vcihpIC8gMyldID0gbW9kO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0dXBUeXBlSW5mbyh0ZXN0LCBtYXNrUGF0dGVybikge1xyXG5cdFx0bGV0IGRhdGEgPSAodGhpcy5lcnJvckNvcnJlY3RMZXZlbCA8PCAzKSB8IG1hc2tQYXR0ZXJuO1xyXG5cdFx0bGV0IGJpdHMgPSBRUlV0aWwuZ2V0QkNIVHlwZUluZm8oZGF0YSk7XHJcblxyXG5cdFx0Ly8gdmVydGljYWxcdFx0XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuXHJcblx0XHRcdGxldCBtb2QgPSAoIXRlc3QgJiYgKChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcblxyXG5cdFx0XHRpZiAoaSA8IDYpIHtcclxuXHRcdFx0XHR0aGlzLm1vZHVsZXNbaV1bOF0gPSBtb2Q7XHJcblx0XHRcdH0gZWxzZSBpZiAoaSA8IDgpIHtcclxuXHRcdFx0XHR0aGlzLm1vZHVsZXNbaSArIDFdWzhdID0gbW9kO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubW9kdWxlc1t0aGlzLm1vZHVsZUNvdW50IC0gMTUgKyBpXVs4XSA9IG1vZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGhvcml6b250YWxcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG5cclxuXHRcdFx0bGV0IG1vZCA9ICghdGVzdCAmJiAoKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcclxuXHJcblx0XHRcdGlmIChpIDwgOCkge1xyXG5cdFx0XHRcdHRoaXMubW9kdWxlc1s4XVt0aGlzLm1vZHVsZUNvdW50IC0gaSAtIDFdID0gbW9kO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGkgPCA5KSB7XHJcblx0XHRcdFx0dGhpcy5tb2R1bGVzWzhdWzE1IC0gaSAtIDEgKyAxXSA9IG1vZDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1vZHVsZXNbOF1bMTUgLSBpIC0gMV0gPSBtb2Q7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBmaXhlZCBtb2R1bGVcclxuXHRcdHRoaXMubW9kdWxlc1t0aGlzLm1vZHVsZUNvdW50IC0gOF1bOF0gPSAoIXRlc3QpO1xyXG5cdH1cclxuXHJcblx0bWFwRGF0YShkYXRhLCBtYXNrUGF0dGVybikge1xyXG5cdFx0bGV0IGluYyA9IC0xO1xyXG5cdFx0bGV0IHJvdyA9IHRoaXMubW9kdWxlQ291bnQgLSAxO1xyXG5cdFx0bGV0IGJpdEluZGV4ID0gNztcclxuXHRcdGxldCBieXRlSW5kZXggPSAwO1xyXG5cclxuXHRcdGZvciAobGV0IGNvbCA9IHRoaXMubW9kdWxlQ291bnQgLSAxOyBjb2wgPiAwOyBjb2wgLT0gMikge1xyXG5cclxuXHRcdFx0aWYgKGNvbCA9PSA2KSBjb2wtLTtcclxuXHJcblx0XHRcdHdoaWxlICh0cnVlKSB7XHJcblxyXG5cdFx0XHRcdGZvciAobGV0IGMgPSAwOyBjIDwgMjsgYysrKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMubW9kdWxlc1tyb3ddW2NvbCAtIGNdID09IG51bGwpIHtcclxuXHJcblx0XHRcdFx0XHRcdGxldCBkYXJrID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoYnl0ZUluZGV4IDwgZGF0YS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRkYXJrID0gKCgoZGF0YVtieXRlSW5kZXhdID4+PiBiaXRJbmRleCkgJiAxKSA9PSAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0bGV0IG1hc2sgPSBRUlV0aWwuZ2V0TWFzayhtYXNrUGF0dGVybiwgcm93LCBjb2wgLSBjKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChtYXNrKSB7XHJcblx0XHRcdFx0XHRcdFx0ZGFyayA9ICFkYXJrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93XVtjb2wgLSBjXSA9IGRhcms7XHJcblx0XHRcdFx0XHRcdGJpdEluZGV4LS07XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoYml0SW5kZXggPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRieXRlSW5kZXgrKztcclxuXHRcdFx0XHRcdFx0XHRiaXRJbmRleCA9IDc7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJvdyArPSBpbmM7XHJcblxyXG5cdFx0XHRcdGlmIChyb3cgPCAwIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gcm93KSB7XHJcblx0XHRcdFx0XHRyb3cgLT0gaW5jO1xyXG5cdFx0XHRcdFx0aW5jID0gLWluYztcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBQQUQwID0gMHhFQztcclxuXHRwdWJsaWMgc3RhdGljIFBBRDEgPSAweDExO1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlRGF0YSh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCwgZGF0YUxpc3QpIHtcclxuXHRcdGxldCByc0Jsb2NrcyA9IFFSUlNCbG9jay5nZXRSU0Jsb2Nrcyh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCk7XHJcblxyXG5cdFx0bGV0IGJ1ZmZlciA9IG5ldyBRUkJpdEJ1ZmZlcigpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IGRhdGEgPSBkYXRhTGlzdFtpXTtcclxuXHRcdFx0YnVmZmVyLnB1dChkYXRhLm1vZGUsIDQpO1xyXG5cdFx0XHRidWZmZXIucHV0KGRhdGEuZ2V0TGVuZ3RoKCksIFFSVXRpbC5nZXRMZW5ndGhJbkJpdHMoZGF0YS5tb2RlLCB0eXBlTnVtYmVyKSk7XHJcblx0XHRcdGRhdGEud3JpdGUoYnVmZmVyKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBjYWxjIG51bSBtYXggZGF0YS5cclxuXHRcdGxldCB0b3RhbERhdGFDb3VudCA9IDA7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmRhdGFDb3VudDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID4gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImNvZGUgbGVuZ3RoIG92ZXJmbG93LiAoXCJcclxuXHRcdFx0XHQrIGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKVxyXG5cdFx0XHRcdCsgXCI+XCJcclxuXHRcdFx0XHQrIHRvdGFsRGF0YUNvdW50ICogOFxyXG5cdFx0XHRcdCsgXCIpXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGVuZCBjb2RlXHJcblx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICsgNCA8PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuXHRcdFx0YnVmZmVyLnB1dCgwLCA0KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBwYWRkaW5nXHJcblx0XHR3aGlsZSAoYnVmZmVyLmdldExlbmd0aEluQml0cygpICUgOCAhPSAwKSB7XHJcblx0XHRcdGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHBhZGRpbmdcclxuXHRcdHdoaWxlICh0cnVlKSB7XHJcblxyXG5cdFx0XHRpZiAoYnVmZmVyLmdldExlbmd0aEluQml0cygpID49IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJ1ZmZlci5wdXQoUVJDb2RlLlBBRDAsIDgpO1xyXG5cclxuXHRcdFx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+PSB0b3RhbERhdGFDb3VudCAqIDgpIHtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRidWZmZXIucHV0KFFSQ29kZS5QQUQxLCA4KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUVJDb2RlLmNyZWF0ZUJ5dGVzKGJ1ZmZlciwgcnNCbG9ja3MpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZUJ5dGVzKGJ1ZmZlciwgcnNCbG9ja3MpIHtcclxuXHJcblx0XHRsZXQgb2Zmc2V0ID0gMDtcclxuXHJcblx0XHRsZXQgbWF4RGNDb3VudCA9IDA7XHJcblx0XHRsZXQgbWF4RWNDb3VudCA9IDA7XHJcblxyXG5cdFx0bGV0IGRjZGF0YSA9IG5ldyBBcnJheShyc0Jsb2Nrcy5sZW5ndGgpO1xyXG5cdFx0bGV0IGVjZGF0YSA9IG5ldyBBcnJheShyc0Jsb2Nrcy5sZW5ndGgpO1xyXG5cclxuXHRcdGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuXHJcblx0XHRcdGxldCBkY0NvdW50ID0gcnNCbG9ja3Nbcl0uZGF0YUNvdW50O1xyXG5cdFx0XHRsZXQgZWNDb3VudCA9IHJzQmxvY2tzW3JdLnRvdGFsQ291bnQgLSBkY0NvdW50O1xyXG5cclxuXHRcdFx0bWF4RGNDb3VudCA9IE1hdGgubWF4KG1heERjQ291bnQsIGRjQ291bnQpO1xyXG5cdFx0XHRtYXhFY0NvdW50ID0gTWF0aC5tYXgobWF4RWNDb3VudCwgZWNDb3VudCk7XHJcblxyXG5cdFx0XHRkY2RhdGFbcl0gPSBuZXcgQXJyYXkoZGNDb3VudCk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRjZGF0YVtyXS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGRjZGF0YVtyXVtpXSA9IDB4ZmYgJiBidWZmZXIuYnVmZmVyW2kgKyBvZmZzZXRdO1xyXG5cdFx0XHR9XHJcblx0XHRcdG9mZnNldCArPSBkY0NvdW50O1xyXG5cclxuXHRcdFx0bGV0IHJzUG9seSA9IFFSVXRpbC5nZXRFcnJvckNvcnJlY3RQb2x5bm9taWFsKGVjQ291bnQpO1xyXG5cdFx0XHRsZXQgcmF3UG9seSA9IG5ldyBRUlBvbHlub21pYWwoZGNkYXRhW3JdLCByc1BvbHkuZ2V0TGVuZ3RoKCkgLSAxKTtcclxuXHJcblx0XHRcdGxldCBtb2RQb2x5ID0gcmF3UG9seS5tb2QocnNQb2x5KTtcclxuXHRcdFx0ZWNkYXRhW3JdID0gbmV3IEFycmF5KHJzUG9seS5nZXRMZW5ndGgoKSAtIDEpO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVjZGF0YVtyXS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGxldCBtb2RJbmRleCA9IGkgKyBtb2RQb2x5LmdldExlbmd0aCgpIC0gZWNkYXRhW3JdLmxlbmd0aDtcclxuXHRcdFx0XHRlY2RhdGFbcl1baV0gPSAobW9kSW5kZXggPj0gMCkgPyBtb2RQb2x5LmdldChtb2RJbmRleCkgOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCB0b3RhbENvZGVDb3VudCA9IDA7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJzQmxvY2tzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHRvdGFsQ29kZUNvdW50ICs9IHJzQmxvY2tzW2ldLnRvdGFsQ291bnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGRhdGEgPSBuZXcgQXJyYXkodG90YWxDb2RlQ291bnQpO1xyXG5cdFx0bGV0IGluZGV4ID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG1heERjQ291bnQ7IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcblx0XHRcdFx0aWYgKGkgPCBkY2RhdGFbcl0ubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRkYXRhW2luZGV4KytdID0gZGNkYXRhW3JdW2ldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbWF4RWNDb3VudDsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IHIgPSAwOyByIDwgcnNCbG9ja3MubGVuZ3RoOyByKyspIHtcclxuXHRcdFx0XHRpZiAoaSA8IGVjZGF0YVtyXS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGRhdGFbaW5kZXgrK10gPSBlY2RhdGFbcl1baV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRhdGE7XHJcblx0fVxyXG59XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSTW9kZVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxubGV0IFFSTW9kZSA9IHtcclxuXHRNT0RFX05VTUJFUjogMSA8PCAwLFxyXG5cdE1PREVfQUxQSEFfTlVNOiAxIDw8IDEsXHJcblx0TU9ERV84QklUX0JZVEU6IDEgPDwgMixcclxuXHRNT0RFX0tBTkpJOiAxIDw8IDNcclxufTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSRXJyb3JDb3JyZWN0TGV2ZWxcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBRUkVycm9yQ29ycmVjdExldmVsID0ge1xyXG5cdEw6IDEsXHJcblx0TTogMCxcclxuXHRROiAzLFxyXG5cdEg6IDJcclxufTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSTWFza1BhdHRlcm5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBRUk1hc2tQYXR0ZXJuID0ge1xyXG5cdFBBVFRFUk4wMDA6IDAsXHJcblx0UEFUVEVSTjAwMTogMSxcclxuXHRQQVRURVJOMDEwOiAyLFxyXG5cdFBBVFRFUk4wMTE6IDMsXHJcblx0UEFUVEVSTjEwMDogNCxcclxuXHRQQVRURVJOMTAxOiA1LFxyXG5cdFBBVFRFUk4xMTA6IDYsXHJcblx0UEFUVEVSTjExMTogN1xyXG59O1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUVJVdGlsXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5sZXQgUVJVdGlsID0ge1xyXG5cdFBBVFRFUk5fUE9TSVRJT05fVEFCTEU6IFtcclxuXHRcdFtdLFxyXG5cdFx0WzYsIDE4XSxcclxuXHRcdFs2LCAyMl0sXHJcblx0XHRbNiwgMjZdLFxyXG5cdFx0WzYsIDMwXSxcclxuXHRcdFs2LCAzNF0sXHJcblx0XHRbNiwgMjIsIDM4XSxcclxuXHRcdFs2LCAyNCwgNDJdLFxyXG5cdFx0WzYsIDI2LCA0Nl0sXHJcblx0XHRbNiwgMjgsIDUwXSxcclxuXHRcdFs2LCAzMCwgNTRdLFxyXG5cdFx0WzYsIDMyLCA1OF0sXHJcblx0XHRbNiwgMzQsIDYyXSxcclxuXHRcdFs2LCAyNiwgNDYsIDY2XSxcclxuXHRcdFs2LCAyNiwgNDgsIDcwXSxcclxuXHRcdFs2LCAyNiwgNTAsIDc0XSxcclxuXHRcdFs2LCAzMCwgNTQsIDc4XSxcclxuXHRcdFs2LCAzMCwgNTYsIDgyXSxcclxuXHRcdFs2LCAzMCwgNTgsIDg2XSxcclxuXHRcdFs2LCAzNCwgNjIsIDkwXSxcclxuXHRcdFs2LCAyOCwgNTAsIDcyLCA5NF0sXHJcblx0XHRbNiwgMjYsIDUwLCA3NCwgOThdLFxyXG5cdFx0WzYsIDMwLCA1NCwgNzgsIDEwMl0sXHJcblx0XHRbNiwgMjgsIDU0LCA4MCwgMTA2XSxcclxuXHRcdFs2LCAzMiwgNTgsIDg0LCAxMTBdLFxyXG5cdFx0WzYsIDMwLCA1OCwgODYsIDExNF0sXHJcblx0XHRbNiwgMzQsIDYyLCA5MCwgMTE4XSxcclxuXHRcdFs2LCAyNiwgNTAsIDc0LCA5OCwgMTIyXSxcclxuXHRcdFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNl0sXHJcblx0XHRbNiwgMjYsIDUyLCA3OCwgMTA0LCAxMzBdLFxyXG5cdFx0WzYsIDMwLCA1NiwgODIsIDEwOCwgMTM0XSxcclxuXHRcdFs2LCAzNCwgNjAsIDg2LCAxMTIsIDEzOF0sXHJcblx0XHRbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDJdLFxyXG5cdFx0WzYsIDM0LCA2MiwgOTAsIDExOCwgMTQ2XSxcclxuXHRcdFs2LCAzMCwgNTQsIDc4LCAxMDIsIDEyNiwgMTUwXSxcclxuXHRcdFs2LCAyNCwgNTAsIDc2LCAxMDIsIDEyOCwgMTU0XSxcclxuXHRcdFs2LCAyOCwgNTQsIDgwLCAxMDYsIDEzMiwgMTU4XSxcclxuXHRcdFs2LCAzMiwgNTgsIDg0LCAxMTAsIDEzNiwgMTYyXSxcclxuXHRcdFs2LCAyNiwgNTQsIDgyLCAxMTAsIDEzOCwgMTY2XSxcclxuXHRcdFs2LCAzMCwgNTgsIDg2LCAxMTQsIDE0MiwgMTcwXVxyXG5cdF0sXHJcblxyXG5cdEcxNTogKDEgPDwgMTApIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDQpIHwgKDEgPDwgMikgfCAoMSA8PCAxKSB8ICgxIDw8IDApLFxyXG5cdEcxODogKDEgPDwgMTIpIHwgKDEgPDwgMTEpIHwgKDEgPDwgMTApIHwgKDEgPDwgOSkgfCAoMSA8PCA4KSB8ICgxIDw8IDUpIHwgKDEgPDwgMikgfCAoMSA8PCAwKSxcclxuXHRHMTVfTUFTSzogKDEgPDwgMTQpIHwgKDEgPDwgMTIpIHwgKDEgPDwgMTApIHwgKDEgPDwgNCkgfCAoMSA8PCAxKSxcclxuXHJcblx0Z2V0QkNIVHlwZUluZm86IGZ1bmN0aW9uIChkYXRhKSB7XHJcblx0XHRsZXQgZCA9IGRhdGEgPDwgMTA7XHJcblx0XHR3aGlsZSAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpID49IDApIHtcclxuXHRcdFx0ZCBePSAoUVJVdGlsLkcxNSA8PCAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTUpKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKChkYXRhIDw8IDEwKSB8IGQpIF4gUVJVdGlsLkcxNV9NQVNLO1xyXG5cdH0sXHJcblxyXG5cdGdldEJDSFR5cGVOdW1iZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblx0XHRsZXQgZCA9IGRhdGEgPDwgMTI7XHJcblx0XHR3aGlsZSAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpID49IDApIHtcclxuXHRcdFx0ZCBePSAoUVJVdGlsLkcxOCA8PCAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKGRhdGEgPDwgMTIpIHwgZDtcclxuXHR9LFxyXG5cclxuXHRnZXRCQ0hEaWdpdDogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcblx0XHRsZXQgZGlnaXQgPSAwO1xyXG5cclxuXHRcdHdoaWxlIChkYXRhICE9IDApIHtcclxuXHRcdFx0ZGlnaXQrKztcclxuXHRcdFx0ZGF0YSA+Pj49IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRpZ2l0O1xyXG5cdH0sXHJcblxyXG5cdGdldFBhdHRlcm5Qb3NpdGlvbjogZnVuY3Rpb24gKHR5cGVOdW1iZXIpIHtcclxuXHRcdHJldHVybiBRUlV0aWwuUEFUVEVSTl9QT1NJVElPTl9UQUJMRVt0eXBlTnVtYmVyIC0gMV07XHJcblx0fSxcclxuXHJcblx0Z2V0TWFzazogZnVuY3Rpb24gKG1hc2tQYXR0ZXJuLCBpLCBqKSB7XHJcblxyXG5cdFx0c3dpdGNoIChtYXNrUGF0dGVybikge1xyXG5cclxuXHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDA6IHJldHVybiAoaSArIGopICUgMiA9PSAwO1xyXG5cdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjAwMTogcmV0dXJuIGkgJSAyID09IDA7XHJcblx0XHRcdGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMDEwOiByZXR1cm4gaiAlIDMgPT0gMDtcclxuXHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTE6IHJldHVybiAoaSArIGopICUgMyA9PSAwO1xyXG5cdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjEwMDogcmV0dXJuIChNYXRoLmZsb29yKGkgLyAyKSArIE1hdGguZmxvb3IoaiAvIDMpKSAlIDIgPT0gMDtcclxuXHRcdFx0Y2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDE6IHJldHVybiAoaSAqIGopICUgMiArIChpICogaikgJSAzID09IDA7XHJcblx0XHRcdGNhc2UgUVJNYXNrUGF0dGVybi5QQVRURVJOMTEwOiByZXR1cm4gKChpICogaikgJSAyICsgKGkgKiBqKSAlIDMpICUgMiA9PSAwO1xyXG5cdFx0XHRjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMTogcmV0dXJuICgoaSAqIGopICUgMyArIChpICsgaikgJSAyKSAlIDIgPT0gMDtcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYmFkIG1hc2tQYXR0ZXJuOlwiICsgbWFza1BhdHRlcm4pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGdldEVycm9yQ29ycmVjdFBvbHlub21pYWw6IGZ1bmN0aW9uIChlcnJvckNvcnJlY3RMZW5ndGgpIHtcclxuXHJcblx0XHRsZXQgYSA9IG5ldyBRUlBvbHlub21pYWwoWzFdLCAwKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVycm9yQ29ycmVjdExlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGEgPSBhLm11bHRpcGx5KG5ldyBRUlBvbHlub21pYWwoWzEsIFFSTWF0aC5nZXhwKGkpXSwgMCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBhO1xyXG5cdH0sXHJcblxyXG5cdGdldExlbmd0aEluQml0czogZnVuY3Rpb24gKG1vZGUsIHR5cGUpIHtcclxuXHJcblx0XHRpZiAoMSA8PSB0eXBlICYmIHR5cGUgPCAxMCkge1xyXG5cclxuXHRcdFx0Ly8gMSAtIDlcclxuXHJcblx0XHRcdHN3aXRjaCAobW9kZSkge1xyXG5cdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSOiByZXR1cm4gMTA7XHJcblx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU06IHJldHVybiA5O1xyXG5cdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFOiByZXR1cm4gODtcclxuXHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFX0tBTkpJOiByZXR1cm4gODtcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0eXBlIDwgMjcpIHtcclxuXHJcblx0XHRcdC8vIDEwIC0gMjZcclxuXHJcblx0XHRcdHN3aXRjaCAobW9kZSkge1xyXG5cdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSOiByZXR1cm4gMTI7XHJcblx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU06IHJldHVybiAxMTtcclxuXHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURTogcmV0dXJuIDE2O1xyXG5cdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfS0FOSkk6IHJldHVybiAxMDtcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIGlmICh0eXBlIDwgNDEpIHtcclxuXHJcblx0XHRcdC8vIDI3IC0gNDBcclxuXHJcblx0XHRcdHN3aXRjaCAobW9kZSkge1xyXG5cdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSOiByZXR1cm4gMTQ7XHJcblx0XHRcdFx0Y2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU06IHJldHVybiAxMztcclxuXHRcdFx0XHRjYXNlIFFSTW9kZS5NT0RFXzhCSVRfQllURTogcmV0dXJuIDE2O1xyXG5cdFx0XHRcdGNhc2UgUVJNb2RlLk1PREVfS0FOSkk6IHJldHVybiAxMjtcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwidHlwZTpcIiArIHR5cGUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdGdldExvc3RQb2ludDogZnVuY3Rpb24gKHFyQ29kZSkge1xyXG5cclxuXHRcdGxldCBtb2R1bGVDb3VudCA9IHFyQ29kZS5nZXRNb2R1bGVDb3VudCgpO1xyXG5cclxuXHRcdGxldCBsb3N0UG9pbnQgPSAwO1xyXG5cclxuXHRcdC8vIExFVkVMMVxyXG5cclxuXHRcdGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50OyByb3crKykge1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQ7IGNvbCsrKSB7XHJcblxyXG5cdFx0XHRcdGxldCBzYW1lQ291bnQgPSAwO1xyXG5cdFx0XHRcdGxldCBkYXJrID0gcXJDb2RlLmlzRGFyayhyb3csIGNvbCk7XHJcblxyXG5cdFx0XHRcdGZvciAobGV0IHIgPSAtMTsgciA8PSAxOyByKyspIHtcclxuXHJcblx0XHRcdFx0XHRpZiAocm93ICsgciA8IDAgfHwgbW9kdWxlQ291bnQgPD0gcm93ICsgcikge1xyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRmb3IgKGxldCBjID0gLTE7IGMgPD0gMTsgYysrKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoY29sICsgYyA8IDAgfHwgbW9kdWxlQ291bnQgPD0gY29sICsgYykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAociA9PSAwICYmIGMgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZGFyayA9PSBxckNvZGUuaXNEYXJrKHJvdyArIHIsIGNvbCArIGMpKSB7XHJcblx0XHRcdFx0XHRcdFx0c2FtZUNvdW50Kys7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChzYW1lQ291bnQgPiA1KSB7XHJcblx0XHRcdFx0XHRsb3N0UG9pbnQgKz0gKDMgKyBzYW1lQ291bnQgLSA1KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBMRVZFTDJcclxuXHJcblx0XHRmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDE7IHJvdysrKSB7XHJcblx0XHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gMTsgY29sKyspIHtcclxuXHRcdFx0XHRsZXQgY291bnQgPSAwO1xyXG5cdFx0XHRcdGlmIChxckNvZGUuaXNEYXJrKHJvdywgY29sKSkgY291bnQrKztcclxuXHRcdFx0XHRpZiAocXJDb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wpKSBjb3VudCsrO1xyXG5cdFx0XHRcdGlmIChxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMSkpIGNvdW50Kys7XHJcblx0XHRcdFx0aWYgKHFyQ29kZS5pc0Rhcmsocm93ICsgMSwgY29sICsgMSkpIGNvdW50Kys7XHJcblx0XHRcdFx0aWYgKGNvdW50ID09IDAgfHwgY291bnQgPT0gNCkge1xyXG5cdFx0XHRcdFx0bG9zdFBvaW50ICs9IDM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gTEVWRUwzXHJcblxyXG5cdFx0Zm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcblx0XHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50IC0gNjsgY29sKyspIHtcclxuXHRcdFx0XHRpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbClcclxuXHRcdFx0XHRcdCYmICFxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMSlcclxuXHRcdFx0XHRcdCYmIHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyAyKVxyXG5cdFx0XHRcdFx0JiYgcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDMpXHJcblx0XHRcdFx0XHQmJiBxckNvZGUuaXNEYXJrKHJvdywgY29sICsgNClcclxuXHRcdFx0XHRcdCYmICFxckNvZGUuaXNEYXJrKHJvdywgY29sICsgNSlcclxuXHRcdFx0XHRcdCYmIHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyA2KSkge1xyXG5cdFx0XHRcdFx0bG9zdFBvaW50ICs9IDQwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG5cdFx0XHRmb3IgKGxldCByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDY7IHJvdysrKSB7XHJcblx0XHRcdFx0aWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpXHJcblx0XHRcdFx0XHQmJiAhcXJDb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wpXHJcblx0XHRcdFx0XHQmJiBxckNvZGUuaXNEYXJrKHJvdyArIDIsIGNvbClcclxuXHRcdFx0XHRcdCYmIHFyQ29kZS5pc0Rhcmsocm93ICsgMywgY29sKVxyXG5cdFx0XHRcdFx0JiYgcXJDb2RlLmlzRGFyayhyb3cgKyA0LCBjb2wpXHJcblx0XHRcdFx0XHQmJiAhcXJDb2RlLmlzRGFyayhyb3cgKyA1LCBjb2wpXHJcblx0XHRcdFx0XHQmJiBxckNvZGUuaXNEYXJrKHJvdyArIDYsIGNvbCkpIHtcclxuXHRcdFx0XHRcdGxvc3RQb2ludCArPSA0MDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBMRVZFTDRcclxuXHJcblx0XHRsZXQgZGFya0NvdW50ID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcblx0XHRcdFx0aWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpKSB7XHJcblx0XHRcdFx0XHRkYXJrQ291bnQrKztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcmF0aW8gPSBNYXRoLmFicygxMDAgKiBkYXJrQ291bnQgLyBtb2R1bGVDb3VudCAvIG1vZHVsZUNvdW50IC0gNTApIC8gNTtcclxuXHRcdGxvc3RQb2ludCArPSByYXRpbyAqIDEwO1xyXG5cclxuXHRcdHJldHVybiBsb3N0UG9pbnQ7XHJcblx0fVxyXG5cclxufTtcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUk1hdGhcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmxldCBRUk1hdGggPSB7XHJcblxyXG5cdGdsb2c6IGZ1bmN0aW9uIChuKSB7XHJcblxyXG5cdFx0aWYgKG4gPCAxKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImdsb2coXCIgKyBuICsgXCIpXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBRUk1hdGguTE9HX1RBQkxFW25dO1xyXG5cdH0sXHJcblxyXG5cdGdleHA6IGZ1bmN0aW9uIChuKSB7XHJcblxyXG5cdFx0d2hpbGUgKG4gPCAwKSB7XHJcblx0XHRcdG4gKz0gMjU1O1xyXG5cdFx0fVxyXG5cclxuXHRcdHdoaWxlIChuID49IDI1Nikge1xyXG5cdFx0XHRuIC09IDI1NTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gUVJNYXRoLkVYUF9UQUJMRVtuXTtcclxuXHR9LFxyXG5cclxuXHRFWFBfVEFCTEU6IG5ldyBBcnJheSgyNTYpLFxyXG5cclxuXHRMT0dfVEFCTEU6IG5ldyBBcnJheSgyNTYpXHJcblxyXG59O1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuXHRRUk1hdGguRVhQX1RBQkxFW2ldID0gMSA8PCBpO1xyXG59XHJcbmZvciAobGV0IGkgPSA4OyBpIDwgMjU2OyBpKyspIHtcclxuXHRRUk1hdGguRVhQX1RBQkxFW2ldID0gUVJNYXRoLkVYUF9UQUJMRVtpIC0gNF1cclxuXHRcdF4gUVJNYXRoLkVYUF9UQUJMRVtpIC0gNV1cclxuXHRcdF4gUVJNYXRoLkVYUF9UQUJMRVtpIC0gNl1cclxuXHRcdF4gUVJNYXRoLkVYUF9UQUJMRVtpIC0gOF07XHJcbn1cclxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTU7IGkrKykge1xyXG5cdFFSTWF0aC5MT0dfVEFCTEVbUVJNYXRoLkVYUF9UQUJMRVtpXV0gPSBpO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUlBvbHlub21pYWxcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IGNsYXNzIFFSUG9seW5vbWlhbCB7XHJcblx0cHVibGljIG51bTtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IobnVtLCBzaGlmdCkge1xyXG5cdFx0aWYgKG51bS5sZW5ndGggPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihudW0ubGVuZ3RoICsgXCIvXCIgKyBzaGlmdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG9mZnNldCA9IDA7XHJcblxyXG5cdFx0d2hpbGUgKG9mZnNldCA8IG51bS5sZW5ndGggJiYgbnVtW29mZnNldF0gPT0gMCkge1xyXG5cdFx0XHRvZmZzZXQrKztcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm51bSA9IG5ldyBBcnJheShudW0ubGVuZ3RoIC0gb2Zmc2V0ICsgc2hpZnQpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW0ubGVuZ3RoIC0gb2Zmc2V0OyBpKyspIHtcclxuXHRcdFx0dGhpcy5udW1baV0gPSBudW1baSArIG9mZnNldF07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQoaW5kZXgpIHtcclxuXHRcdHJldHVybiB0aGlzLm51bVtpbmRleF07XHJcblx0fVxyXG5cdGdldExlbmd0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLm51bS5sZW5ndGg7XHJcblx0fVxyXG5cdG11bHRpcGx5KGUpIHtcclxuXHRcdGxldCBudW0gPSBuZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKSArIGUuZ2V0TGVuZ3RoKCkgLSAxKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGUuZ2V0TGVuZ3RoKCk7IGorKykge1xyXG5cdFx0XHRcdG51bVtpICsgal0gXj0gUVJNYXRoLmdleHAoUVJNYXRoLmdsb2codGhpcy5nZXQoaSkpICsgUVJNYXRoLmdsb2coZS5nZXQoaikpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBuZXcgUVJQb2x5bm9taWFsKG51bSwgMCk7XHJcblx0fVxyXG5cclxuXHRtb2QoZSkge1xyXG5cclxuXHRcdGlmICh0aGlzLmdldExlbmd0aCgpIC0gZS5nZXRMZW5ndGgoKSA8IDApIHtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHJhdGlvID0gUVJNYXRoLmdsb2codGhpcy5nZXQoMCkpIC0gUVJNYXRoLmdsb2coZS5nZXQoMCkpO1xyXG5cclxuXHRcdGxldCBudW0gPSBuZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKSk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldExlbmd0aCgpOyBpKyspIHtcclxuXHRcdFx0bnVtW2ldID0gdGhpcy5nZXQoaSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlLmdldExlbmd0aCgpOyBpKyspIHtcclxuXHRcdFx0bnVtW2ldIF49IFFSTWF0aC5nZXhwKFFSTWF0aC5nbG9nKGUuZ2V0KGkpKSArIHJhdGlvKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZWN1cnNpdmUgY2FsbFxyXG5cdFx0cmV0dXJuIG5ldyBRUlBvbHlub21pYWwobnVtLCAwKS5tb2QoZSk7XHJcblx0fVxyXG59XHJcbi8vIFFSUlNCbG9ja1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgY2xhc3MgUVJSU0Jsb2NrIHtcclxuXHRwdWJsaWMgdG90YWxDb3VudDtcclxuXHRwdWJsaWMgZGF0YUNvdW50O1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcih0b3RhbENvdW50LCBkYXRhQ291bnQpIHtcclxuXHRcdHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XHJcblx0XHR0aGlzLmRhdGFDb3VudCA9IGRhdGFDb3VudDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBSU19CTE9DS19UQUJMRSA9IFtcclxuXHJcblx0XHQvLyBMXHJcblx0XHQvLyBNXHJcblx0XHQvLyBRXHJcblx0XHQvLyBIXHJcblxyXG5cdFx0Ly8gMVxyXG5cdFx0WzEsIDI2LCAxOV0sXHJcblx0XHRbMSwgMjYsIDE2XSxcclxuXHRcdFsxLCAyNiwgMTNdLFxyXG5cdFx0WzEsIDI2LCA5XSxcclxuXHJcblx0XHQvLyAyXHJcblx0XHRbMSwgNDQsIDM0XSxcclxuXHRcdFsxLCA0NCwgMjhdLFxyXG5cdFx0WzEsIDQ0LCAyMl0sXHJcblx0XHRbMSwgNDQsIDE2XSxcclxuXHJcblx0XHQvLyAzXHJcblx0XHRbMSwgNzAsIDU1XSxcclxuXHRcdFsxLCA3MCwgNDRdLFxyXG5cdFx0WzIsIDM1LCAxN10sXHJcblx0XHRbMiwgMzUsIDEzXSxcclxuXHJcblx0XHQvLyA0XHRcdFxyXG5cdFx0WzEsIDEwMCwgODBdLFxyXG5cdFx0WzIsIDUwLCAzMl0sXHJcblx0XHRbMiwgNTAsIDI0XSxcclxuXHRcdFs0LCAyNSwgOV0sXHJcblxyXG5cdFx0Ly8gNVxyXG5cdFx0WzEsIDEzNCwgMTA4XSxcclxuXHRcdFsyLCA2NywgNDNdLFxyXG5cdFx0WzIsIDMzLCAxNSwgMiwgMzQsIDE2XSxcclxuXHRcdFsyLCAzMywgMTEsIDIsIDM0LCAxMl0sXHJcblxyXG5cdFx0Ly8gNlxyXG5cdFx0WzIsIDg2LCA2OF0sXHJcblx0XHRbNCwgNDMsIDI3XSxcclxuXHRcdFs0LCA0MywgMTldLFxyXG5cdFx0WzQsIDQzLCAxNV0sXHJcblxyXG5cdFx0Ly8gN1x0XHRcclxuXHRcdFsyLCA5OCwgNzhdLFxyXG5cdFx0WzQsIDQ5LCAzMV0sXHJcblx0XHRbMiwgMzIsIDE0LCA0LCAzMywgMTVdLFxyXG5cdFx0WzQsIDM5LCAxMywgMSwgNDAsIDE0XSxcclxuXHJcblx0XHQvLyA4XHJcblx0XHRbMiwgMTIxLCA5N10sXHJcblx0XHRbMiwgNjAsIDM4LCAyLCA2MSwgMzldLFxyXG5cdFx0WzQsIDQwLCAxOCwgMiwgNDEsIDE5XSxcclxuXHRcdFs0LCA0MCwgMTQsIDIsIDQxLCAxNV0sXHJcblxyXG5cdFx0Ly8gOVxyXG5cdFx0WzIsIDE0NiwgMTE2XSxcclxuXHRcdFszLCA1OCwgMzYsIDIsIDU5LCAzN10sXHJcblx0XHRbNCwgMzYsIDE2LCA0LCAzNywgMTddLFxyXG5cdFx0WzQsIDM2LCAxMiwgNCwgMzcsIDEzXSxcclxuXHJcblx0XHQvLyAxMFx0XHRcclxuXHRcdFsyLCA4NiwgNjgsIDIsIDg3LCA2OV0sXHJcblx0XHRbNCwgNjksIDQzLCAxLCA3MCwgNDRdLFxyXG5cdFx0WzYsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuXHRcdFs2LCA0MywgMTUsIDIsIDQ0LCAxNl0sXHJcblxyXG5cdFx0Ly8gMTFcclxuXHRcdFs0LCAxMDEsIDgxXSxcclxuXHRcdFsxLCA4MCwgNTAsIDQsIDgxLCA1MV0sXHJcblx0XHRbNCwgNTAsIDIyLCA0LCA1MSwgMjNdLFxyXG5cdFx0WzMsIDM2LCAxMiwgOCwgMzcsIDEzXSxcclxuXHJcblx0XHQvLyAxMlxyXG5cdFx0WzIsIDExNiwgOTIsIDIsIDExNywgOTNdLFxyXG5cdFx0WzYsIDU4LCAzNiwgMiwgNTksIDM3XSxcclxuXHRcdFs0LCA0NiwgMjAsIDYsIDQ3LCAyMV0sXHJcblx0XHRbNywgNDIsIDE0LCA0LCA0MywgMTVdLFxyXG5cclxuXHRcdC8vIDEzXHJcblx0XHRbNCwgMTMzLCAxMDddLFxyXG5cdFx0WzgsIDU5LCAzNywgMSwgNjAsIDM4XSxcclxuXHRcdFs4LCA0NCwgMjAsIDQsIDQ1LCAyMV0sXHJcblx0XHRbMTIsIDMzLCAxMSwgNCwgMzQsIDEyXSxcclxuXHJcblx0XHQvLyAxNFxyXG5cdFx0WzMsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXHJcblx0XHRbNCwgNjQsIDQwLCA1LCA2NSwgNDFdLFxyXG5cdFx0WzExLCAzNiwgMTYsIDUsIDM3LCAxN10sXHJcblx0XHRbMTEsIDM2LCAxMiwgNSwgMzcsIDEzXSxcclxuXHJcblx0XHQvLyAxNVxyXG5cdFx0WzUsIDEwOSwgODcsIDEsIDExMCwgODhdLFxyXG5cdFx0WzUsIDY1LCA0MSwgNSwgNjYsIDQyXSxcclxuXHRcdFs1LCA1NCwgMjQsIDcsIDU1LCAyNV0sXHJcblx0XHRbMTEsIDM2LCAxMl0sXHJcblxyXG5cdFx0Ly8gMTZcclxuXHRcdFs1LCAxMjIsIDk4LCAxLCAxMjMsIDk5XSxcclxuXHRcdFs3LCA3MywgNDUsIDMsIDc0LCA0Nl0sXHJcblx0XHRbMTUsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuXHRcdFszLCA0NSwgMTUsIDEzLCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDE3XHJcblx0XHRbMSwgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcclxuXHRcdFsxMCwgNzQsIDQ2LCAxLCA3NSwgNDddLFxyXG5cdFx0WzEsIDUwLCAyMiwgMTUsIDUxLCAyM10sXHJcblx0XHRbMiwgNDIsIDE0LCAxNywgNDMsIDE1XSxcclxuXHJcblx0XHQvLyAxOFxyXG5cdFx0WzUsIDE1MCwgMTIwLCAxLCAxNTEsIDEyMV0sXHJcblx0XHRbOSwgNjksIDQzLCA0LCA3MCwgNDRdLFxyXG5cdFx0WzE3LCA1MCwgMjIsIDEsIDUxLCAyM10sXHJcblx0XHRbMiwgNDIsIDE0LCAxOSwgNDMsIDE1XSxcclxuXHJcblx0XHQvLyAxOVxyXG5cdFx0WzMsIDE0MSwgMTEzLCA0LCAxNDIsIDExNF0sXHJcblx0XHRbMywgNzAsIDQ0LCAxMSwgNzEsIDQ1XSxcclxuXHRcdFsxNywgNDcsIDIxLCA0LCA0OCwgMjJdLFxyXG5cdFx0WzksIDM5LCAxMywgMTYsIDQwLCAxNF0sXHJcblxyXG5cdFx0Ly8gMjBcclxuXHRcdFszLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxyXG5cdFx0WzMsIDY3LCA0MSwgMTMsIDY4LCA0Ml0sXHJcblx0XHRbMTUsIDU0LCAyNCwgNSwgNTUsIDI1XSxcclxuXHRcdFsxNSwgNDMsIDE1LCAxMCwgNDQsIDE2XSxcclxuXHJcblx0XHQvLyAyMVxyXG5cdFx0WzQsIDE0NCwgMTE2LCA0LCAxNDUsIDExN10sXHJcblx0XHRbMTcsIDY4LCA0Ml0sXHJcblx0XHRbMTcsIDUwLCAyMiwgNiwgNTEsIDIzXSxcclxuXHRcdFsxOSwgNDYsIDE2LCA2LCA0NywgMTddLFxyXG5cclxuXHRcdC8vIDIyXHJcblx0XHRbMiwgMTM5LCAxMTEsIDcsIDE0MCwgMTEyXSxcclxuXHRcdFsxNywgNzQsIDQ2XSxcclxuXHRcdFs3LCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxyXG5cdFx0WzM0LCAzNywgMTNdLFxyXG5cclxuXHRcdC8vIDIzXHJcblx0XHRbNCwgMTUxLCAxMjEsIDUsIDE1MiwgMTIyXSxcclxuXHRcdFs0LCA3NSwgNDcsIDE0LCA3NiwgNDhdLFxyXG5cdFx0WzExLCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG5cdFx0WzE2LCA0NSwgMTUsIDE0LCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDI0XHJcblx0XHRbNiwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcclxuXHRcdFs2LCA3MywgNDUsIDE0LCA3NCwgNDZdLFxyXG5cdFx0WzExLCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxyXG5cdFx0WzMwLCA0NiwgMTYsIDIsIDQ3LCAxN10sXHJcblxyXG5cdFx0Ly8gMjVcclxuXHRcdFs4LCAxMzIsIDEwNiwgNCwgMTMzLCAxMDddLFxyXG5cdFx0WzgsIDc1LCA0NywgMTMsIDc2LCA0OF0sXHJcblx0XHRbNywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcclxuXHRcdFsyMiwgNDUsIDE1LCAxMywgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAyNlxyXG5cdFx0WzEwLCAxNDIsIDExNCwgMiwgMTQzLCAxMTVdLFxyXG5cdFx0WzE5LCA3NCwgNDYsIDQsIDc1LCA0N10sXHJcblx0XHRbMjgsIDUwLCAyMiwgNiwgNTEsIDIzXSxcclxuXHRcdFszMywgNDYsIDE2LCA0LCA0NywgMTddLFxyXG5cclxuXHRcdC8vIDI3XHJcblx0XHRbOCwgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcclxuXHRcdFsyMiwgNzMsIDQ1LCAzLCA3NCwgNDZdLFxyXG5cdFx0WzgsIDUzLCAyMywgMjYsIDU0LCAyNF0sXHJcblx0XHRbMTIsIDQ1LCAxNSwgMjgsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMjhcclxuXHRcdFszLCAxNDcsIDExNywgMTAsIDE0OCwgMTE4XSxcclxuXHRcdFszLCA3MywgNDUsIDIzLCA3NCwgNDZdLFxyXG5cdFx0WzQsIDU0LCAyNCwgMzEsIDU1LCAyNV0sXHJcblx0XHRbMTEsIDQ1LCAxNSwgMzEsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMjlcclxuXHRcdFs3LCAxNDYsIDExNiwgNywgMTQ3LCAxMTddLFxyXG5cdFx0WzIxLCA3MywgNDUsIDcsIDc0LCA0Nl0sXHJcblx0XHRbMSwgNTMsIDIzLCAzNywgNTQsIDI0XSxcclxuXHRcdFsxOSwgNDUsIDE1LCAyNiwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAzMFxyXG5cdFx0WzUsIDE0NSwgMTE1LCAxMCwgMTQ2LCAxMTZdLFxyXG5cdFx0WzE5LCA3NSwgNDcsIDEwLCA3NiwgNDhdLFxyXG5cdFx0WzE1LCA1NCwgMjQsIDI1LCA1NSwgMjVdLFxyXG5cdFx0WzIzLCA0NSwgMTUsIDI1LCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDMxXHJcblx0XHRbMTMsIDE0NSwgMTE1LCAzLCAxNDYsIDExNl0sXHJcblx0XHRbMiwgNzQsIDQ2LCAyOSwgNzUsIDQ3XSxcclxuXHRcdFs0MiwgNTQsIDI0LCAxLCA1NSwgMjVdLFxyXG5cdFx0WzIzLCA0NSwgMTUsIDI4LCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDMyXHJcblx0XHRbMTcsIDE0NSwgMTE1XSxcclxuXHRcdFsxMCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcclxuXHRcdFsxMCwgNTQsIDI0LCAzNSwgNTUsIDI1XSxcclxuXHRcdFsxOSwgNDUsIDE1LCAzNSwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAzM1xyXG5cdFx0WzE3LCAxNDUsIDExNSwgMSwgMTQ2LCAxMTZdLFxyXG5cdFx0WzE0LCA3NCwgNDYsIDIxLCA3NSwgNDddLFxyXG5cdFx0WzI5LCA1NCwgMjQsIDE5LCA1NSwgMjVdLFxyXG5cdFx0WzExLCA0NSwgMTUsIDQ2LCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDM0XHJcblx0XHRbMTMsIDE0NSwgMTE1LCA2LCAxNDYsIDExNl0sXHJcblx0XHRbMTQsIDc0LCA0NiwgMjMsIDc1LCA0N10sXHJcblx0XHRbNDQsIDU0LCAyNCwgNywgNTUsIDI1XSxcclxuXHRcdFs1OSwgNDYsIDE2LCAxLCA0NywgMTddLFxyXG5cclxuXHRcdC8vIDM1XHJcblx0XHRbMTIsIDE1MSwgMTIxLCA3LCAxNTIsIDEyMl0sXHJcblx0XHRbMTIsIDc1LCA0NywgMjYsIDc2LCA0OF0sXHJcblx0XHRbMzksIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcblx0XHRbMjIsIDQ1LCAxNSwgNDEsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMzZcclxuXHRcdFs2LCAxNTEsIDEyMSwgMTQsIDE1MiwgMTIyXSxcclxuXHRcdFs2LCA3NSwgNDcsIDM0LCA3NiwgNDhdLFxyXG5cdFx0WzQ2LCA1NCwgMjQsIDEwLCA1NSwgMjVdLFxyXG5cdFx0WzIsIDQ1LCAxNSwgNjQsIDQ2LCAxNl0sXHJcblxyXG5cdFx0Ly8gMzdcclxuXHRcdFsxNywgMTUyLCAxMjIsIDQsIDE1MywgMTIzXSxcclxuXHRcdFsyOSwgNzQsIDQ2LCAxNCwgNzUsIDQ3XSxcclxuXHRcdFs0OSwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuXHRcdFsyNCwgNDUsIDE1LCA0NiwgNDYsIDE2XSxcclxuXHJcblx0XHQvLyAzOFxyXG5cdFx0WzQsIDE1MiwgMTIyLCAxOCwgMTUzLCAxMjNdLFxyXG5cdFx0WzEzLCA3NCwgNDYsIDMyLCA3NSwgNDddLFxyXG5cdFx0WzQ4LCA1NCwgMjQsIDE0LCA1NSwgMjVdLFxyXG5cdFx0WzQyLCA0NSwgMTUsIDMyLCA0NiwgMTZdLFxyXG5cclxuXHRcdC8vIDM5XHJcblx0XHRbMjAsIDE0NywgMTE3LCA0LCAxNDgsIDExOF0sXHJcblx0XHRbNDAsIDc1LCA0NywgNywgNzYsIDQ4XSxcclxuXHRcdFs0MywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcclxuXHRcdFsxMCwgNDUsIDE1LCA2NywgNDYsIDE2XSxcclxuXHJcblx0XHQvLyA0MFxyXG5cdFx0WzE5LCAxNDgsIDExOCwgNiwgMTQ5LCAxMTldLFxyXG5cdFx0WzE4LCA3NSwgNDcsIDMxLCA3NiwgNDhdLFxyXG5cdFx0WzM0LCA1NCwgMjQsIDM0LCA1NSwgMjVdLFxyXG5cdFx0WzIwLCA0NSwgMTUsIDYxLCA0NiwgMTZdXHJcblx0XTtcclxuXHJcblx0c3RhdGljIGdldFJTQmxvY2tzKHR5cGVOdW1iZXIsIGVycm9yQ29ycmVjdExldmVsKSB7XHJcblx0XHRsZXQgcnNCbG9jayA9IFFSUlNCbG9jay5nZXRSc0Jsb2NrVGFibGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG5cclxuXHRcdGlmIChyc0Jsb2NrID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJiYWQgcnMgYmxvY2sgQCB0eXBlTnVtYmVyOlwiICsgdHlwZU51bWJlciArIFwiL2Vycm9yQ29ycmVjdExldmVsOlwiICsgZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBsZW5ndGggPSByc0Jsb2NrLmxlbmd0aCAvIDM7XHJcblxyXG5cdFx0bGV0IGxpc3QgPSBuZXcgQXJyYXkoKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblxyXG5cdFx0XHRsZXQgY291bnQgPSByc0Jsb2NrW2kgKiAzICsgMF07XHJcblx0XHRcdGxldCB0b3RhbENvdW50ID0gcnNCbG9ja1tpICogMyArIDFdO1xyXG5cdFx0XHRsZXQgZGF0YUNvdW50ID0gcnNCbG9ja1tpICogMyArIDJdO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XHJcblx0XHRcdFx0bGlzdC5wdXNoKG5ldyBRUlJTQmxvY2sodG90YWxDb3VudCwgZGF0YUNvdW50KSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbGlzdDtcclxuXHR9XHJcblx0c3RhdGljIGdldFJzQmxvY2tUYWJsZSh0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCkge1xyXG5cdFx0c3dpdGNoIChlcnJvckNvcnJlY3RMZXZlbCkge1xyXG5cdFx0XHRjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuTDpcclxuXHRcdFx0XHRyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMF07XHJcblx0XHRcdGNhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5NOlxyXG5cdFx0XHRcdHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAxXTtcclxuXHRcdFx0Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLlE6XHJcblx0XHRcdFx0cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDJdO1xyXG5cdFx0XHRjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuSDpcclxuXHRcdFx0XHRyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgM107XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSQml0QnVmZmVyXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCBjbGFzcyBRUkJpdEJ1ZmZlciB7XHJcblx0cHVibGljIGJ1ZmZlcjtcclxuXHRwdWJsaWMgbGVuZ3RoO1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5idWZmZXIgPSBuZXcgQXJyYXkoKTtcclxuXHRcdHRoaXMubGVuZ3RoID0gMDtcclxuXHR9XHJcblx0Z2V0KGluZGV4KSB7XHJcblx0XHRsZXQgYnVmSW5kZXggPSBNYXRoLmZsb29yKGluZGV4IC8gOCk7XHJcblx0XHRyZXR1cm4gKCh0aGlzLmJ1ZmZlcltidWZJbmRleF0gPj4+ICg3IC0gaW5kZXggJSA4KSkgJiAxKSA9PSAxO1xyXG5cdH1cclxuXHRwdXQobnVtLCBsZW5ndGgpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5wdXRCaXQoKChudW0gPj4+IChsZW5ndGggLSBpIC0gMSkpICYgMSkgPT0gMSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGdldExlbmd0aEluQml0cygpIHtcclxuXHRcdHJldHVybiB0aGlzLmxlbmd0aDtcclxuXHR9XHJcblx0cHV0Qml0KGJpdCkge1xyXG5cdFx0bGV0IGJ1ZkluZGV4ID0gTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIDgpO1xyXG5cdFx0aWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8PSBidWZJbmRleCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChiaXQpIHtcclxuXHRcdFx0dGhpcy5idWZmZXJbYnVmSW5kZXhdIHw9ICgweDgwID4+PiAodGhpcy5sZW5ndGggJSA4KSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5sZW5ndGgrKztcclxuXHR9XHJcbn1cclxuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Encrypt/lib/asn1js/asn1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '205ea3N62NF/L4WR5g/r6cr', 'asn1');
// Script/Encrypt/lib/asn1js/asn1.js

"use strict";

exports.__esModule = true;
exports.ASN1Tag = exports.ASN1 = exports.Stream = void 0;

var _int = require("./int10");

// ASN.1 JavaScript decoder
// Copyright (c) 2008-2014 Lapo Luchini <lapo@lapo.it>
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

/*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */

/*global oids */
var ellipsis = "\u2026";
var reTimeS = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
var reTimeL = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

function stringCut(str, len) {
  if (str.length > len) {
    str = str.substring(0, len) + ellipsis;
  }

  return str;
}

var Stream =
/** @class */
function () {
  function Stream(enc, pos) {
    this.hexDigits = "0123456789ABCDEF";

    if (enc instanceof Stream) {
      this.enc = enc.enc;
      this.pos = enc.pos;
    } else {
      // enc should be an array or a binary string
      this.enc = enc;
      this.pos = pos;
    }
  }

  Stream.prototype.get = function (pos) {
    if (pos === undefined) {
      pos = this.pos++;
    }

    if (pos >= this.enc.length) {
      throw new Error("Requesting byte offset " + pos + " on a stream of length " + this.enc.length);
    }

    return "string" === typeof this.enc ? this.enc.charCodeAt(pos) : this.enc[pos];
  };

  Stream.prototype.hexByte = function (b) {
    return this.hexDigits.charAt(b >> 4 & 0xF) + this.hexDigits.charAt(b & 0xF);
  };

  Stream.prototype.hexDump = function (start, end, raw) {
    var s = "";

    for (var i = start; i < end; ++i) {
      s += this.hexByte(this.get(i));

      if (raw !== true) {
        switch (i & 0xF) {
          case 0x7:
            s += "  ";
            break;

          case 0xF:
            s += "\n";
            break;

          default:
            s += " ";
        }
      }
    }

    return s;
  };

  Stream.prototype.isASCII = function (start, end) {
    for (var i = start; i < end; ++i) {
      var c = this.get(i);

      if (c < 32 || c > 176) {
        return false;
      }
    }

    return true;
  };

  Stream.prototype.parseStringISO = function (start, end) {
    var s = "";

    for (var i = start; i < end; ++i) {
      s += String.fromCharCode(this.get(i));
    }

    return s;
  };

  Stream.prototype.parseStringUTF = function (start, end) {
    var s = "";

    for (var i = start; i < end;) {
      var c = this.get(i++);

      if (c < 128) {
        s += String.fromCharCode(c);
      } else if (c > 191 && c < 224) {
        s += String.fromCharCode((c & 0x1F) << 6 | this.get(i++) & 0x3F);
      } else {
        s += String.fromCharCode((c & 0x0F) << 12 | (this.get(i++) & 0x3F) << 6 | this.get(i++) & 0x3F);
      }
    }

    return s;
  };

  Stream.prototype.parseStringBMP = function (start, end) {
    var str = "";
    var hi;
    var lo;

    for (var i = start; i < end;) {
      hi = this.get(i++);
      lo = this.get(i++);
      str += String.fromCharCode(hi << 8 | lo);
    }

    return str;
  };

  Stream.prototype.parseTime = function (start, end, shortYear) {
    var s = this.parseStringISO(start, end);
    var m = (shortYear ? reTimeS : reTimeL).exec(s);

    if (!m) {
      return "Unrecognized time: " + s;
    }

    if (shortYear) {
      // to avoid querying the timer, use the fixed range [1970, 2069]
      // it will conform with ITU X.400 [-10, +40] sliding window until 2030
      m[1] = +m[1];
      m[1] += +m[1] < 70 ? 2000 : 1900;
    }

    s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];

    if (m[5]) {
      s += ":" + m[5];

      if (m[6]) {
        s += ":" + m[6];

        if (m[7]) {
          s += "." + m[7];
        }
      }
    }

    if (m[8]) {
      s += " UTC";

      if (m[8] != "Z") {
        s += m[8];

        if (m[9]) {
          s += ":" + m[9];
        }
      }
    }

    return s;
  };

  Stream.prototype.parseInteger = function (start, end) {
    var v = this.get(start);
    var neg = v > 127;
    var pad = neg ? 255 : 0;
    var len;
    var s = ""; // skip unuseful bits (not allowed in DER)

    while (v == pad && ++start < end) {
      v = this.get(start);
    }

    len = end - start;

    if (len === 0) {
      return neg ? -1 : 0;
    } // show bit length of huge integers


    if (len > 4) {
      s = v;
      len <<= 3;

      while (((+s ^ pad) & 0x80) == 0) {
        s = +s << 1;
        --len;
      }

      s = "(" + len + " bit)\n";
    } // decode the integer


    if (neg) {
      v = v - 256;
    }

    var n = new _int.Int10(v);

    for (var i = start + 1; i < end; ++i) {
      n.mulAdd(256, this.get(i));
    }

    return s + n.toString();
  };

  Stream.prototype.parseBitString = function (start, end, maxLength) {
    var unusedBit = this.get(start);
    var lenBit = (end - start - 1 << 3) - unusedBit;
    var intro = "(" + lenBit + " bit)\n";
    var s = "";

    for (var i = start + 1; i < end; ++i) {
      var b = this.get(i);
      var skip = i == end - 1 ? unusedBit : 0;

      for (var j = 7; j >= skip; --j) {
        s += b >> j & 1 ? "1" : "0";
      }

      if (s.length > maxLength) {
        return intro + stringCut(s, maxLength);
      }
    }

    return intro + s;
  };

  Stream.prototype.parseOctetString = function (start, end, maxLength) {
    if (this.isASCII(start, end)) {
      return stringCut(this.parseStringISO(start, end), maxLength);
    }

    var len = end - start;
    var s = "(" + len + " byte)\n";
    maxLength /= 2; // we work in bytes

    if (len > maxLength) {
      end = start + maxLength;
    }

    for (var i = start; i < end; ++i) {
      s += this.hexByte(this.get(i));
    }

    if (len > maxLength) {
      s += ellipsis;
    }

    return s;
  };

  Stream.prototype.parseOID = function (start, end, maxLength) {
    var s = "";
    var n = new _int.Int10();
    var bits = 0;

    for (var i = start; i < end; ++i) {
      var v = this.get(i);
      n.mulAdd(128, v & 0x7F);
      bits += 7;

      if (!(v & 0x80)) {
        // finished
        if (s === "") {
          n = n.simplify();

          if (n instanceof _int.Int10) {
            n.sub(80);
            s = "2." + n.toString();
          } else {
            var m = n < 80 ? n < 40 ? 0 : 1 : 2;
            s = m + "." + (n - m * 40);
          }
        } else {
          s += "." + n.toString();
        }

        if (s.length > maxLength) {
          return stringCut(s, maxLength);
        }

        n = new _int.Int10();
        bits = 0;
      }
    }

    if (bits > 0) {
      s += ".incomplete";
    }

    return s;
  };

  return Stream;
}();

exports.Stream = Stream;

var ASN1 =
/** @class */
function () {
  function ASN1(stream, header, length, tag, sub) {
    if (!(tag instanceof ASN1Tag)) {
      throw new Error("Invalid tag value.");
    }

    this.stream = stream;
    this.header = header;
    this.length = length;
    this.tag = tag;
    this.sub = sub;
  }

  ASN1.prototype.typeName = function () {
    switch (this.tag.tagClass) {
      case 0:
        // universal
        switch (this.tag.tagNumber) {
          case 0x00:
            return "EOC";

          case 0x01:
            return "BOOLEAN";

          case 0x02:
            return "INTEGER";

          case 0x03:
            return "BIT_STRING";

          case 0x04:
            return "OCTET_STRING";

          case 0x05:
            return "NULL";

          case 0x06:
            return "OBJECT_IDENTIFIER";

          case 0x07:
            return "ObjectDescriptor";

          case 0x08:
            return "EXTERNAL";

          case 0x09:
            return "REAL";

          case 0x0A:
            return "ENUMERATED";

          case 0x0B:
            return "EMBEDDED_PDV";

          case 0x0C:
            return "UTF8String";

          case 0x10:
            return "SEQUENCE";

          case 0x11:
            return "SET";

          case 0x12:
            return "NumericString";

          case 0x13:
            return "PrintableString";
          // ASCII subset

          case 0x14:
            return "TeletexString";
          // aka T61String

          case 0x15:
            return "VideotexString";

          case 0x16:
            return "IA5String";
          // ASCII

          case 0x17:
            return "UTCTime";

          case 0x18:
            return "GeneralizedTime";

          case 0x19:
            return "GraphicString";

          case 0x1A:
            return "VisibleString";
          // ASCII subset

          case 0x1B:
            return "GeneralString";

          case 0x1C:
            return "UniversalString";

          case 0x1E:
            return "BMPString";
        }

        return "Universal_" + this.tag.tagNumber.toString();

      case 1:
        return "Application_" + this.tag.tagNumber.toString();

      case 2:
        return "[" + this.tag.tagNumber.toString() + "]";
      // Context

      case 3:
        return "Private_" + this.tag.tagNumber.toString();
    }
  };

  ASN1.prototype.content = function (maxLength) {
    if (this.tag === undefined) {
      return null;
    }

    if (maxLength === undefined) {
      maxLength = Infinity;
    }

    var content = this.posContent();
    var len = Math.abs(this.length);

    if (!this.tag.isUniversal()) {
      if (this.sub !== null) {
        return "(" + this.sub.length + " elem)";
      }

      return this.stream.parseOctetString(content, content + len, maxLength);
    }

    switch (this.tag.tagNumber) {
      case 0x01:
        // BOOLEAN
        return this.stream.get(content) === 0 ? "false" : "true";

      case 0x02:
        // INTEGER
        return this.stream.parseInteger(content, content + len);

      case 0x03:
        // BIT_STRING
        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(content, content + len, maxLength);

      case 0x04:
        // OCTET_STRING
        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(content, content + len, maxLength);
      // case 0x05: // NULL

      case 0x06:
        // OBJECT_IDENTIFIER
        return this.stream.parseOID(content, content + len, maxLength);
      // case 0x07: // ObjectDescriptor
      // case 0x08: // EXTERNAL
      // case 0x09: // REAL
      // case 0x0A: // ENUMERATED
      // case 0x0B: // EMBEDDED_PDV

      case 0x10: // SEQUENCE

      case 0x11:
        // SET
        if (this.sub !== null) {
          return "(" + this.sub.length + " elem)";
        } else {
          return "(no elem)";
        }

      case 0x0C:
        // UTF8String
        return stringCut(this.stream.parseStringUTF(content, content + len), maxLength);

      case 0x12: // NumericString

      case 0x13: // PrintableString

      case 0x14: // TeletexString

      case 0x15: // VideotexString

      case 0x16: // IA5String
      // case 0x19: // GraphicString

      case 0x1A:
        // VisibleString
        // case 0x1B: // GeneralString
        // case 0x1C: // UniversalString
        return stringCut(this.stream.parseStringISO(content, content + len), maxLength);

      case 0x1E:
        // BMPString
        return stringCut(this.stream.parseStringBMP(content, content + len), maxLength);

      case 0x17: // UTCTime

      case 0x18:
        // GeneralizedTime
        return this.stream.parseTime(content, content + len, this.tag.tagNumber == 0x17);
    }

    return null;
  };

  ASN1.prototype.toString = function () {
    return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub === null ? "null" : this.sub.length) + "]";
  };

  ASN1.prototype.toPrettyString = function (indent) {
    if (indent === undefined) {
      indent = "";
    }

    var s = indent + this.typeName() + " @" + this.stream.pos;

    if (this.length >= 0) {
      s += "+";
    }

    s += this.length;

    if (this.tag.tagConstructed) {
      s += " (constructed)";
    } else if (this.tag.isUniversal() && (this.tag.tagNumber == 0x03 || this.tag.tagNumber == 0x04) && this.sub !== null) {
      s += " (encapsulates)";
    }

    s += "\n";

    if (this.sub !== null) {
      indent += "  ";

      for (var i = 0, max = this.sub.length; i < max; ++i) {
        s += this.sub[i].toPrettyString(indent);
      }
    }

    return s;
  };

  ASN1.prototype.posStart = function () {
    return this.stream.pos;
  };

  ASN1.prototype.posContent = function () {
    return this.stream.pos + this.header;
  };

  ASN1.prototype.posEnd = function () {
    return this.stream.pos + this.header + Math.abs(this.length);
  };

  ASN1.prototype.toHexString = function () {
    return this.stream.hexDump(this.posStart(), this.posEnd(), true);
  };

  ASN1.decodeLength = function (stream) {
    var buf = stream.get();
    var len = buf & 0x7F;

    if (len == buf) {
      return len;
    } // no reason to use Int10, as it would be a huge buffer anyways


    if (len > 6) {
      throw new Error("Length over 48 bits not supported at position " + (stream.pos - 1));
    }

    if (len === 0) {
      return null;
    } // undefined


    buf = 0;

    for (var i = 0; i < len; ++i) {
      buf = buf * 256 + stream.get();
    }

    return buf;
  };
  /**
   * Retrieve the hexadecimal value (as a string) of the current ASN.1 element
   * @returns {string}
   * @public
   */


  ASN1.prototype.getHexStringValue = function () {
    var hexString = this.toHexString();
    var offset = this.header * 2;
    var length = this.length * 2;
    return hexString.substr(offset, length);
  };

  ASN1.decode = function (str) {
    var stream;

    if (!(str instanceof Stream)) {
      stream = new Stream(str, 0);
    } else {
      stream = str;
    }

    var streamStart = new Stream(stream);
    var tag = new ASN1Tag(stream);
    var len = ASN1.decodeLength(stream);
    var start = stream.pos;
    var header = start - streamStart.pos;
    var sub = null;

    var getSub = function getSub() {
      var ret = [];

      if (len !== null) {
        // definite length
        var end = start + len;

        while (stream.pos < end) {
          ret[ret.length] = ASN1.decode(stream);
        }

        if (stream.pos != end) {
          throw new Error("Content size is not correct for container starting at offset " + start);
        }
      } else {
        // undefined length
        try {
          for (;;) {
            var s = ASN1.decode(stream);

            if (s.tag.isEOC()) {
              break;
            }

            ret[ret.length] = s;
          }

          len = start - stream.pos; // undefined lengths are represented as negative values
        } catch (e) {
          throw new Error("Exception while decoding undefined length content: " + e);
        }
      }

      return ret;
    };

    if (tag.tagConstructed) {
      // must have valid content
      sub = getSub();
    } else if (tag.isUniversal() && (tag.tagNumber == 0x03 || tag.tagNumber == 0x04)) {
      // sometimes BitString and OctetString are used to encapsulate ASN.1
      try {
        if (tag.tagNumber == 0x03) {
          if (stream.get() != 0) {
            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
          }
        }

        sub = getSub();

        for (var i = 0; i < sub.length; ++i) {
          if (sub[i].tag.isEOC()) {
            throw new Error("EOC is not supposed to be actual content.");
          }
        }
      } catch (e) {
        // but silently ignore when they don't
        sub = null;
      }
    }

    if (sub === null) {
      if (len === null) {
        throw new Error("We can't skip over an invalid tag with undefined length at offset " + start);
      }

      stream.pos = start + Math.abs(len);
    }

    return new ASN1(streamStart, header, len, tag, sub);
  };

  return ASN1;
}();

exports.ASN1 = ASN1;

var ASN1Tag =
/** @class */
function () {
  function ASN1Tag(stream) {
    var buf = stream.get();
    this.tagClass = buf >> 6;
    this.tagConstructed = (buf & 0x20) !== 0;
    this.tagNumber = buf & 0x1F;

    if (this.tagNumber == 0x1F) {
      // long tag
      var n = new _int.Int10();

      do {
        buf = stream.get();
        n.mulAdd(128, buf & 0x7F);
      } while (buf & 0x80);

      this.tagNumber = n.simplify();
    }
  }

  ASN1Tag.prototype.isUniversal = function () {
    return this.tagClass === 0x00;
  };

  ASN1Tag.prototype.isEOC = function () {
    return this.tagClass === 0x00 && this.tagNumber === 0x00;
  };

  return ASN1Tag;
}();

exports.ASN1Tag = ASN1Tag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmNyeXB0XFxsaWJcXGFzbjFqc1xcYXNuMS5qcyJdLCJuYW1lcyI6WyJlbGxpcHNpcyIsInJlVGltZVMiLCJyZVRpbWVMIiwic3RyaW5nQ3V0Iiwic3RyIiwibGVuIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiU3RyZWFtIiwiZW5jIiwicG9zIiwiaGV4RGlnaXRzIiwicHJvdG90eXBlIiwiZ2V0IiwidW5kZWZpbmVkIiwiRXJyb3IiLCJjaGFyQ29kZUF0IiwiaGV4Qnl0ZSIsImIiLCJjaGFyQXQiLCJoZXhEdW1wIiwic3RhcnQiLCJlbmQiLCJyYXciLCJzIiwiaSIsImlzQVNDSUkiLCJjIiwicGFyc2VTdHJpbmdJU08iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZVN0cmluZ1VURiIsInBhcnNlU3RyaW5nQk1QIiwiaGkiLCJsbyIsInBhcnNlVGltZSIsInNob3J0WWVhciIsIm0iLCJleGVjIiwicGFyc2VJbnRlZ2VyIiwidiIsIm5lZyIsInBhZCIsIm4iLCJJbnQxMCIsIm11bEFkZCIsInRvU3RyaW5nIiwicGFyc2VCaXRTdHJpbmciLCJtYXhMZW5ndGgiLCJ1bnVzZWRCaXQiLCJsZW5CaXQiLCJpbnRybyIsInNraXAiLCJqIiwicGFyc2VPY3RldFN0cmluZyIsInBhcnNlT0lEIiwiYml0cyIsInNpbXBsaWZ5Iiwic3ViIiwiQVNOMSIsInN0cmVhbSIsImhlYWRlciIsInRhZyIsIkFTTjFUYWciLCJ0eXBlTmFtZSIsInRhZ0NsYXNzIiwidGFnTnVtYmVyIiwiY29udGVudCIsIkluZmluaXR5IiwicG9zQ29udGVudCIsIk1hdGgiLCJhYnMiLCJpc1VuaXZlcnNhbCIsInRvUHJldHR5U3RyaW5nIiwiaW5kZW50IiwidGFnQ29uc3RydWN0ZWQiLCJtYXgiLCJwb3NTdGFydCIsInBvc0VuZCIsInRvSGV4U3RyaW5nIiwiZGVjb2RlTGVuZ3RoIiwiYnVmIiwiZ2V0SGV4U3RyaW5nVmFsdWUiLCJoZXhTdHJpbmciLCJvZmZz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QUF0QixFQUE0QjtBQUFFO0FBQzFCLFVBQUl2QixDQUFDLEdBQUcsSUFBSUMsVUFBSixFQUFSOztBQUNBLFNBQUc7QUFDQ3FDLFFBQUFBLEdBQUcsR0FBR3JCLE1BQU0sQ0FBQy9DLEdBQVAsRUFBTjtBQUNBOEIsUUFBQUEsQ0FBQyxDQUFDRSxNQUFGLENBQVMsR0FBVCxFQUFjb0MsR0FBRyxHQUFHLElBQXBCO0FBQ0gsT0FIRCxRQUdTQSxHQUFHLEdBQUcsSUFIZjs7QUFJQSxXQUFLZixTQUFMLEdBQWlCdkIsQ0FBQyxDQUFDYyxRQUFGLEVBQWpCO0FBQ0g7QUFDSjs7QUFDRE0sRUFBQUEsT0FBTyxDQUFDbkQsU0FBUixDQUFrQjRELFdBQWxCLEdBQWdDLFlBQVk7QUFDeEMsV0FBTyxLQUFLUCxRQUFMLEtBQWtCLElBQXpCO0FBQ0gsR0FGRDs7QUFHQUYsRUFBQUEsT0FBTyxDQUFDbkQsU0FBUixDQUFrQjhFLEtBQWxCLEdBQTBCLFlBQVk7QUFDbEMsV0FBTyxLQUFLekIsUUFBTCxLQUFrQixJQUFsQixJQUEwQixLQUFLQyxTQUFMLEtBQW1CLElBQXBEO0FBQ0gsR0FGRDs7QUFHQSxTQUFPSCxPQUFQO0FBQ0gsQ0F0QjRCLEVBQTdCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBU04uMSBKYXZhU2NyaXB0IGRlY29kZXJcbi8vIENvcHlyaWdodCAoYykgMjAwOC0yMDE0IExhcG8gTHVjaGluaSA8bGFwb0BsYXBvLml0PlxuLy8gUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4vLyBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4vLyBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuLy8gQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuLy8gV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4vLyBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuLy8gT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgaW1tZWQ6IHRydWUsIGxhdGVkZWY6IHRydWUsIHVuZGVmOiB0cnVlLCByZWdleGRhc2g6IGZhbHNlICovXG4vKmdsb2JhbCBvaWRzICovXG5pbXBvcnQgeyBJbnQxMCB9IGZyb20gXCIuL2ludDEwXCI7XG52YXIgZWxsaXBzaXMgPSBcIlxcdTIwMjZcIjtcbnZhciByZVRpbWVTID0gL14oXFxkXFxkKSgwWzEtOV18MVswLTJdKSgwWzEtOV18WzEyXVxcZHwzWzAxXSkoWzAxXVxcZHwyWzAtM10pKD86KFswLTVdXFxkKSg/OihbMC01XVxcZCkoPzpbLixdKFxcZHsxLDN9KSk/KT8pPyhafFstK10oPzpbMF1cXGR8MVswLTJdKShbMC01XVxcZCk/KT8kLztcbnZhciByZVRpbWVMID0gL14oXFxkXFxkXFxkXFxkKSgwWzEtOV18MVswLTJdKSgwWzEtOV18WzEyXVxcZHwzWzAxXSkoWzAxXVxcZHwyWzAtM10pKD86KFswLTVdXFxkKSg/OihbMC01XVxcZCkoPzpbLixdKFxcZHsxLDN9KSk/KT8pPyhafFstK10oPzpbMF1cXGR8MVswLTJdKShbMC01XVxcZCk/KT8kLztcbmZ1bmN0aW9uIHN0cmluZ0N1dChzdHIsIGxlbikge1xuICAgIGlmIChzdHIubGVuZ3RoID4gbGVuKSB7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgbGVuKSArIGVsbGlwc2lzO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxudmFyIFN0cmVhbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdHJlYW0oZW5jLCBwb3MpIHtcbiAgICAgICAgdGhpcy5oZXhEaWdpdHMgPSBcIjAxMjM0NTY3ODlBQkNERUZcIjtcbiAgICAgICAgaWYgKGVuYyBpbnN0YW5jZW9mIFN0cmVhbSkge1xuICAgICAgICAgICAgdGhpcy5lbmMgPSBlbmMuZW5jO1xuICAgICAgICAgICAgdGhpcy5wb3MgPSBlbmMucG9zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZW5jIHNob3VsZCBiZSBhbiBhcnJheSBvciBhIGJpbmFyeSBzdHJpbmdcbiAgICAgICAgICAgIHRoaXMuZW5jID0gZW5jO1xuICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3RyZWFtLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAocG9zKSB7XG4gICAgICAgIGlmIChwb3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcG9zID0gdGhpcy5wb3MrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zID49IHRoaXMuZW5jLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWVzdGluZyBieXRlIG9mZnNldCBcIiArIHBvcyArIFwiIG9uIGEgc3RyZWFtIG9mIGxlbmd0aCBcIiArIHRoaXMuZW5jLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcInN0cmluZ1wiID09PSB0eXBlb2YgdGhpcy5lbmMpID8gdGhpcy5lbmMuY2hhckNvZGVBdChwb3MpIDogdGhpcy5lbmNbcG9zXTtcbiAgICB9O1xuICAgIFN0cmVhbS5wcm90b3R5cGUuaGV4Qnl0ZSA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhleERpZ2l0cy5jaGFyQXQoKGIgPj4gNCkgJiAweEYpICsgdGhpcy5oZXhEaWdpdHMuY2hhckF0KGIgJiAweEYpO1xuICAgIH07XG4gICAgU3RyZWFtLnByb3RvdHlwZS5oZXhEdW1wID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIHJhdykge1xuICAgICAgICB2YXIgcyA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICAgICAgICBzICs9IHRoaXMuaGV4Qnl0ZSh0aGlzLmdldChpKSk7XG4gICAgICAgICAgICBpZiAocmF3ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChpICYgMHhGKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHg3OlxuICAgICAgICAgICAgICAgICAgICAgICAgcyArPSBcIiAgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweEY6XG4gICAgICAgICAgICAgICAgICAgICAgICBzICs9IFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgKz0gXCIgXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzO1xuICAgIH07XG4gICAgU3RyZWFtLnByb3RvdHlwZS5pc0FTQ0lJID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5nZXQoaSk7XG4gICAgICAgICAgICBpZiAoYyA8IDMyIHx8IGMgPiAxNzYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBTdHJlYW0ucHJvdG90eXBlLnBhcnNlU3RyaW5nSVNPID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdmFyIHMgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgICAgICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHRoaXMuZ2V0KGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIFN0cmVhbS5wcm90b3R5cGUucGFyc2VTdHJpbmdVVEYgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICAgICAgICB2YXIgcyA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDspIHtcbiAgICAgICAgICAgIHZhciBjID0gdGhpcy5nZXQoaSsrKTtcbiAgICAgICAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgICAgICAgICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xuICAgICAgICAgICAgICAgIHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAweDFGKSA8PCA2KSB8ICh0aGlzLmdldChpKyspICYgMHgzRikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDB4MEYpIDw8IDEyKSB8ICgodGhpcy5nZXQoaSsrKSAmIDB4M0YpIDw8IDYpIHwgKHRoaXMuZ2V0KGkrKykgJiAweDNGKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfTtcbiAgICBTdHJlYW0ucHJvdG90eXBlLnBhcnNlU3RyaW5nQk1QID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdmFyIHN0ciA9IFwiXCI7XG4gICAgICAgIHZhciBoaTtcbiAgICAgICAgdmFyIGxvO1xuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7KSB7XG4gICAgICAgICAgICBoaSA9IHRoaXMuZ2V0KGkrKyk7XG4gICAgICAgICAgICBsbyA9IHRoaXMuZ2V0KGkrKyk7XG4gICAgICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoaGkgPDwgOCkgfCBsbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9O1xuICAgIFN0cmVhbS5wcm90b3R5cGUucGFyc2VUaW1lID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIHNob3J0WWVhcikge1xuICAgICAgICB2YXIgcyA9IHRoaXMucGFyc2VTdHJpbmdJU08oc3RhcnQsIGVuZCk7XG4gICAgICAgIHZhciBtID0gKHNob3J0WWVhciA/IHJlVGltZVMgOiByZVRpbWVMKS5leGVjKHMpO1xuICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgIHJldHVybiBcIlVucmVjb2duaXplZCB0aW1lOiBcIiArIHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3J0WWVhcikge1xuICAgICAgICAgICAgLy8gdG8gYXZvaWQgcXVlcnlpbmcgdGhlIHRpbWVyLCB1c2UgdGhlIGZpeGVkIHJhbmdlIFsxOTcwLCAyMDY5XVxuICAgICAgICAgICAgLy8gaXQgd2lsbCBjb25mb3JtIHdpdGggSVRVIFguNDAwIFstMTAsICs0MF0gc2xpZGluZyB3aW5kb3cgdW50aWwgMjAzMFxuICAgICAgICAgICAgbVsxXSA9ICttWzFdO1xuICAgICAgICAgICAgbVsxXSArPSAoK21bMV0gPCA3MCkgPyAyMDAwIDogMTkwMDtcbiAgICAgICAgfVxuICAgICAgICBzID0gbVsxXSArIFwiLVwiICsgbVsyXSArIFwiLVwiICsgbVszXSArIFwiIFwiICsgbVs0XTtcbiAgICAgICAgaWYgKG1bNV0pIHtcbiAgICAgICAgICAgIHMgKz0gXCI6XCIgKyBtWzVdO1xuICAgICAgICAgICAgaWYgKG1bNl0pIHtcbiAgICAgICAgICAgICAgICBzICs9IFwiOlwiICsgbVs2XTtcbiAgICAgICAgICAgICAgICBpZiAobVs3XSkge1xuICAgICAgICAgICAgICAgICAgICBzICs9IFwiLlwiICsgbVs3XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1bOF0pIHtcbiAgICAgICAgICAgIHMgKz0gXCIgVVRDXCI7XG4gICAgICAgICAgICBpZiAobVs4XSAhPSBcIlpcIikge1xuICAgICAgICAgICAgICAgIHMgKz0gbVs4XTtcbiAgICAgICAgICAgICAgICBpZiAobVs5XSkge1xuICAgICAgICAgICAgICAgICAgICBzICs9IFwiOlwiICsgbVs5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfTtcbiAgICBTdHJlYW0ucHJvdG90eXBlLnBhcnNlSW50ZWdlciA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgIHZhciB2ID0gdGhpcy5nZXQoc3RhcnQpO1xuICAgICAgICB2YXIgbmVnID0gKHYgPiAxMjcpO1xuICAgICAgICB2YXIgcGFkID0gbmVnID8gMjU1IDogMDtcbiAgICAgICAgdmFyIGxlbjtcbiAgICAgICAgdmFyIHMgPSBcIlwiO1xuICAgICAgICAvLyBza2lwIHVudXNlZnVsIGJpdHMgKG5vdCBhbGxvd2VkIGluIERFUilcbiAgICAgICAgd2hpbGUgKHYgPT0gcGFkICYmICsrc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgICAgIHYgPSB0aGlzLmdldChzdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVuID0gZW5kIC0gc3RhcnQ7XG4gICAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZWcgPyAtMSA6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2hvdyBiaXQgbGVuZ3RoIG9mIGh1Z2UgaW50ZWdlcnNcbiAgICAgICAgaWYgKGxlbiA+IDQpIHtcbiAgICAgICAgICAgIHMgPSB2O1xuICAgICAgICAgICAgbGVuIDw8PSAzO1xuICAgICAgICAgICAgd2hpbGUgKCgoK3MgXiBwYWQpICYgMHg4MCkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHMgPSArcyA8PCAxO1xuICAgICAgICAgICAgICAgIC0tbGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcyA9IFwiKFwiICsgbGVuICsgXCIgYml0KVxcblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRlY29kZSB0aGUgaW50ZWdlclxuICAgICAgICBpZiAobmVnKSB7XG4gICAgICAgICAgICB2ID0gdiAtIDI1NjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbiA9IG5ldyBJbnQxMCh2KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0ICsgMTsgaSA8IGVuZDsgKytpKSB7XG4gICAgICAgICAgICBuLm11bEFkZCgyNTYsIHRoaXMuZ2V0KGkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcyArIG4udG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIFN0cmVhbS5wcm90b3R5cGUucGFyc2VCaXRTdHJpbmcgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgbWF4TGVuZ3RoKSB7XG4gICAgICAgIHZhciB1bnVzZWRCaXQgPSB0aGlzLmdldChzdGFydCk7XG4gICAgICAgIHZhciBsZW5CaXQgPSAoKGVuZCAtIHN0YXJ0IC0gMSkgPDwgMykgLSB1bnVzZWRCaXQ7XG4gICAgICAgIHZhciBpbnRybyA9IFwiKFwiICsgbGVuQml0ICsgXCIgYml0KVxcblwiO1xuICAgICAgICB2YXIgcyA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydCArIDE7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmdldChpKTtcbiAgICAgICAgICAgIHZhciBza2lwID0gKGkgPT0gZW5kIC0gMSkgPyB1bnVzZWRCaXQgOiAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDc7IGogPj0gc2tpcDsgLS1qKSB7XG4gICAgICAgICAgICAgICAgcyArPSAoYiA+PiBqKSAmIDEgPyBcIjFcIiA6IFwiMFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGludHJvICsgc3RyaW5nQ3V0KHMsIG1heExlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGludHJvICsgcztcbiAgICB9O1xuICAgIFN0cmVhbS5wcm90b3R5cGUucGFyc2VPY3RldFN0cmluZyA9IGZ1bmN0aW9uIChzdGFydCwgZW5kLCBtYXhMZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBU0NJSShzdGFydCwgZW5kKSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ0N1dCh0aGlzLnBhcnNlU3RyaW5nSVNPKHN0YXJ0LCBlbmQpLCBtYXhMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZW4gPSBlbmQgLSBzdGFydDtcbiAgICAgICAgdmFyIHMgPSBcIihcIiArIGxlbiArIFwiIGJ5dGUpXFxuXCI7XG4gICAgICAgIG1heExlbmd0aCAvPSAyOyAvLyB3ZSB3b3JrIGluIGJ5dGVzXG4gICAgICAgIGlmIChsZW4gPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIGVuZCA9IHN0YXJ0ICsgbWF4TGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICAgICAgICBzICs9IHRoaXMuaGV4Qnl0ZSh0aGlzLmdldChpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxlbiA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgcyArPSBlbGxpcHNpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIFN0cmVhbS5wcm90b3R5cGUucGFyc2VPSUQgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgbWF4TGVuZ3RoKSB7XG4gICAgICAgIHZhciBzID0gXCJcIjtcbiAgICAgICAgdmFyIG4gPSBuZXcgSW50MTAoKTtcbiAgICAgICAgdmFyIGJpdHMgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgICAgICAgdmFyIHYgPSB0aGlzLmdldChpKTtcbiAgICAgICAgICAgIG4ubXVsQWRkKDEyOCwgdiAmIDB4N0YpO1xuICAgICAgICAgICAgYml0cyArPSA3O1xuICAgICAgICAgICAgaWYgKCEodiAmIDB4ODApKSB7IC8vIGZpbmlzaGVkXG4gICAgICAgICAgICAgICAgaWYgKHMgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IG4uc2ltcGxpZnkoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gaW5zdGFuY2VvZiBJbnQxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbi5zdWIoODApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IFwiMi5cIiArIG4udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtID0gbiA8IDgwID8gbiA8IDQwID8gMCA6IDEgOiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcyA9IG0gKyBcIi5cIiArIChuIC0gbSAqIDQwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBcIi5cIiArIG4udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHMubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdDdXQocywgbWF4TGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbiA9IG5ldyBJbnQxMCgpO1xuICAgICAgICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiaXRzID4gMCkge1xuICAgICAgICAgICAgcyArPSBcIi5pbmNvbXBsZXRlXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfTtcbiAgICByZXR1cm4gU3RyZWFtO1xufSgpKTtcbmV4cG9ydCB7IFN0cmVhbSB9O1xudmFyIEFTTjEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQVNOMShzdHJlYW0sIGhlYWRlciwgbGVuZ3RoLCB0YWcsIHN1Yikge1xuICAgICAgICBpZiAoISh0YWcgaW5zdGFuY2VvZiBBU04xVGFnKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0YWcgdmFsdWUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMudGFnID0gdGFnO1xuICAgICAgICB0aGlzLnN1YiA9IHN1YjtcbiAgICB9XG4gICAgQVNOMS5wcm90b3R5cGUudHlwZU5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50YWcudGFnQ2xhc3MpIHtcbiAgICAgICAgICAgIGNhc2UgMDogLy8gdW5pdmVyc2FsXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRhZy50YWdOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRU9DXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgwMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkJPT0xFQU5cIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiSU5URUdFUlwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MDM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCSVRfU1RSSU5HXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgwNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk9DVEVUX1NUUklOR1wiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MDU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOVUxMXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgwNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk9CSkVDVF9JREVOVElGSUVSXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgwNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk9iamVjdERlc2NyaXB0b3JcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRVhURVJOQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiUkVBTFwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MEE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJFTlVNRVJBVEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgwQjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVNQkVEREVEX1BEVlwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MEM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJVVEY4U3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNFUVVFTkNFXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNFVFwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MTI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOdW1lcmljU3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlByaW50YWJsZVN0cmluZ1wiOyAvLyBBU0NJSSBzdWJzZXRcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVGVsZXRleFN0cmluZ1wiOyAvLyBha2EgVDYxU3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlZpZGVvdGV4U3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIklBNVN0cmluZ1wiOyAvLyBBU0NJSVxuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MTc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJVVENUaW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkdlbmVyYWxpemVkVGltZVwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MTk6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJHcmFwaGljU3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxQTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlZpc2libGVTdHJpbmdcIjsgLy8gQVNDSUkgc3Vic2V0XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxQjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkdlbmVyYWxTdHJpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDFDOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pdmVyc2FsU3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxRTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkJNUFN0cmluZ1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJVbml2ZXJzYWxfXCIgKyB0aGlzLnRhZy50YWdOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJBcHBsaWNhdGlvbl9cIiArIHRoaXMudGFnLnRhZ051bWJlci50b1N0cmluZygpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIltcIiArIHRoaXMudGFnLnRhZ051bWJlci50b1N0cmluZygpICsgXCJdXCI7IC8vIENvbnRleHRcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJQcml2YXRlX1wiICsgdGhpcy50YWcudGFnTnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFTTjEucHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbiAobWF4TGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4TGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1heExlbmd0aCA9IEluZmluaXR5O1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5wb3NDb250ZW50KCk7XG4gICAgICAgIHZhciBsZW4gPSBNYXRoLmFicyh0aGlzLmxlbmd0aCk7XG4gICAgICAgIGlmICghdGhpcy50YWcuaXNVbml2ZXJzYWwoKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ViICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy5zdWIubGVuZ3RoICsgXCIgZWxlbSlcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmVhbS5wYXJzZU9jdGV0U3RyaW5nKGNvbnRlbnQsIGNvbnRlbnQgKyBsZW4sIG1heExlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLnRhZy50YWdOdW1iZXIpIHtcbiAgICAgICAgICAgIGNhc2UgMHgwMTogLy8gQk9PTEVBTlxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zdHJlYW0uZ2V0KGNvbnRlbnQpID09PSAwKSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiO1xuICAgICAgICAgICAgY2FzZSAweDAyOiAvLyBJTlRFR0VSXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLnBhcnNlSW50ZWdlcihjb250ZW50LCBjb250ZW50ICsgbGVuKTtcbiAgICAgICAgICAgIGNhc2UgMHgwMzogLy8gQklUX1NUUklOR1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1YiA/IFwiKFwiICsgdGhpcy5zdWIubGVuZ3RoICsgXCIgZWxlbSlcIiA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtLnBhcnNlQml0U3RyaW5nKGNvbnRlbnQsIGNvbnRlbnQgKyBsZW4sIG1heExlbmd0aCk7XG4gICAgICAgICAgICBjYXNlIDB4MDQ6IC8vIE9DVEVUX1NUUklOR1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1YiA/IFwiKFwiICsgdGhpcy5zdWIubGVuZ3RoICsgXCIgZWxlbSlcIiA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtLnBhcnNlT2N0ZXRTdHJpbmcoY29udGVudCwgY29udGVudCArIGxlbiwgbWF4TGVuZ3RoKTtcbiAgICAgICAgICAgIC8vIGNhc2UgMHgwNTogLy8gTlVMTFxuICAgICAgICAgICAgY2FzZSAweDA2OiAvLyBPQkpFQ1RfSURFTlRJRklFUlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmVhbS5wYXJzZU9JRChjb250ZW50LCBjb250ZW50ICsgbGVuLCBtYXhMZW5ndGgpO1xuICAgICAgICAgICAgLy8gY2FzZSAweDA3OiAvLyBPYmplY3REZXNjcmlwdG9yXG4gICAgICAgICAgICAvLyBjYXNlIDB4MDg6IC8vIEVYVEVSTkFMXG4gICAgICAgICAgICAvLyBjYXNlIDB4MDk6IC8vIFJFQUxcbiAgICAgICAgICAgIC8vIGNhc2UgMHgwQTogLy8gRU5VTUVSQVRFRFxuICAgICAgICAgICAgLy8gY2FzZSAweDBCOiAvLyBFTUJFRERFRF9QRFZcbiAgICAgICAgICAgIGNhc2UgMHgxMDogLy8gU0VRVUVOQ0VcbiAgICAgICAgICAgIGNhc2UgMHgxMTogLy8gU0VUXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ViICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIihcIiArIHRoaXMuc3ViLmxlbmd0aCArIFwiIGVsZW0pXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIobm8gZWxlbSlcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDB4MEM6IC8vIFVURjhTdHJpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nQ3V0KHRoaXMuc3RyZWFtLnBhcnNlU3RyaW5nVVRGKGNvbnRlbnQsIGNvbnRlbnQgKyBsZW4pLCBtYXhMZW5ndGgpO1xuICAgICAgICAgICAgY2FzZSAweDEyOiAvLyBOdW1lcmljU3RyaW5nXG4gICAgICAgICAgICBjYXNlIDB4MTM6IC8vIFByaW50YWJsZVN0cmluZ1xuICAgICAgICAgICAgY2FzZSAweDE0OiAvLyBUZWxldGV4U3RyaW5nXG4gICAgICAgICAgICBjYXNlIDB4MTU6IC8vIFZpZGVvdGV4U3RyaW5nXG4gICAgICAgICAgICBjYXNlIDB4MTY6IC8vIElBNVN0cmluZ1xuICAgICAgICAgICAgLy8gY2FzZSAweDE5OiAvLyBHcmFwaGljU3RyaW5nXG4gICAgICAgICAgICBjYXNlIDB4MUE6IC8vIFZpc2libGVTdHJpbmdcbiAgICAgICAgICAgICAgICAvLyBjYXNlIDB4MUI6IC8vIEdlbmVyYWxTdHJpbmdcbiAgICAgICAgICAgICAgICAvLyBjYXNlIDB4MUM6IC8vIFVuaXZlcnNhbFN0cmluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdDdXQodGhpcy5zdHJlYW0ucGFyc2VTdHJpbmdJU08oY29udGVudCwgY29udGVudCArIGxlbiksIG1heExlbmd0aCk7XG4gICAgICAgICAgICBjYXNlIDB4MUU6IC8vIEJNUFN0cmluZ1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmdDdXQodGhpcy5zdHJlYW0ucGFyc2VTdHJpbmdCTVAoY29udGVudCwgY29udGVudCArIGxlbiksIG1heExlbmd0aCk7XG4gICAgICAgICAgICBjYXNlIDB4MTc6IC8vIFVUQ1RpbWVcbiAgICAgICAgICAgIGNhc2UgMHgxODogLy8gR2VuZXJhbGl6ZWRUaW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLnBhcnNlVGltZShjb250ZW50LCBjb250ZW50ICsgbGVuLCAodGhpcy50YWcudGFnTnVtYmVyID09IDB4MTcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIEFTTjEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlTmFtZSgpICsgXCJAXCIgKyB0aGlzLnN0cmVhbS5wb3MgKyBcIltoZWFkZXI6XCIgKyB0aGlzLmhlYWRlciArIFwiLGxlbmd0aDpcIiArIHRoaXMubGVuZ3RoICsgXCIsc3ViOlwiICsgKCh0aGlzLnN1YiA9PT0gbnVsbCkgPyBcIm51bGxcIiA6IHRoaXMuc3ViLmxlbmd0aCkgKyBcIl1cIjtcbiAgICB9O1xuICAgIEFTTjEucHJvdG90eXBlLnRvUHJldHR5U3RyaW5nID0gZnVuY3Rpb24gKGluZGVudCkge1xuICAgICAgICBpZiAoaW5kZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGluZGVudCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHMgPSBpbmRlbnQgKyB0aGlzLnR5cGVOYW1lKCkgKyBcIiBAXCIgKyB0aGlzLnN0cmVhbS5wb3M7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgICBzICs9IFwiK1wiO1xuICAgICAgICB9XG4gICAgICAgIHMgKz0gdGhpcy5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLnRhZy50YWdDb25zdHJ1Y3RlZCkge1xuICAgICAgICAgICAgcyArPSBcIiAoY29uc3RydWN0ZWQpXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMudGFnLmlzVW5pdmVyc2FsKCkgJiYgKCh0aGlzLnRhZy50YWdOdW1iZXIgPT0gMHgwMykgfHwgKHRoaXMudGFnLnRhZ051bWJlciA9PSAweDA0KSkpICYmICh0aGlzLnN1YiAhPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHMgKz0gXCIgKGVuY2Fwc3VsYXRlcylcIjtcbiAgICAgICAgfVxuICAgICAgICBzICs9IFwiXFxuXCI7XG4gICAgICAgIGlmICh0aGlzLnN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5kZW50ICs9IFwiICBcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBtYXggPSB0aGlzLnN1Yi5sZW5ndGg7IGkgPCBtYXg7ICsraSkge1xuICAgICAgICAgICAgICAgIHMgKz0gdGhpcy5zdWJbaV0udG9QcmV0dHlTdHJpbmcoaW5kZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIEFTTjEucHJvdG90eXBlLnBvc1N0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW0ucG9zO1xuICAgIH07XG4gICAgQVNOMS5wcm90b3R5cGUucG9zQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLnBvcyArIHRoaXMuaGVhZGVyO1xuICAgIH07XG4gICAgQVNOMS5wcm90b3R5cGUucG9zRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW0ucG9zICsgdGhpcy5oZWFkZXIgKyBNYXRoLmFicyh0aGlzLmxlbmd0aCk7XG4gICAgfTtcbiAgICBBU04xLnByb3RvdHlwZS50b0hleFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLmhleER1bXAodGhpcy5wb3NTdGFydCgpLCB0aGlzLnBvc0VuZCgpLCB0cnVlKTtcbiAgICB9O1xuICAgIEFTTjEuZGVjb2RlTGVuZ3RoID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgICAgICB2YXIgYnVmID0gc3RyZWFtLmdldCgpO1xuICAgICAgICB2YXIgbGVuID0gYnVmICYgMHg3RjtcbiAgICAgICAgaWYgKGxlbiA9PSBidWYpIHtcbiAgICAgICAgICAgIHJldHVybiBsZW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm8gcmVhc29uIHRvIHVzZSBJbnQxMCwgYXMgaXQgd291bGQgYmUgYSBodWdlIGJ1ZmZlciBhbnl3YXlzXG4gICAgICAgIGlmIChsZW4gPiA2KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMZW5ndGggb3ZlciA0OCBiaXRzIG5vdCBzdXBwb3J0ZWQgYXQgcG9zaXRpb24gXCIgKyAoc3RyZWFtLnBvcyAtIDEpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSAvLyB1bmRlZmluZWRcbiAgICAgICAgYnVmID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgYnVmID0gKGJ1ZiAqIDI1NikgKyBzdHJlYW0uZ2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHRoZSBoZXhhZGVjaW1hbCB2YWx1ZSAoYXMgYSBzdHJpbmcpIG9mIHRoZSBjdXJyZW50IEFTTi4xIGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBBU04xLnByb3RvdHlwZS5nZXRIZXhTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhleFN0cmluZyA9IHRoaXMudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuaGVhZGVyICogMjtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoICogMjtcbiAgICAgICAgcmV0dXJuIGhleFN0cmluZy5zdWJzdHIob2Zmc2V0LCBsZW5ndGgpO1xuICAgIH07XG4gICAgQVNOMS5kZWNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHZhciBzdHJlYW07XG4gICAgICAgIGlmICghKHN0ciBpbnN0YW5jZW9mIFN0cmVhbSkpIHtcbiAgICAgICAgICAgIHN0cmVhbSA9IG5ldyBTdHJlYW0oc3RyLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0cmVhbSA9IHN0cjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RyZWFtU3RhcnQgPSBuZXcgU3RyZWFtKHN0cmVhbSk7XG4gICAgICAgIHZhciB0YWcgPSBuZXcgQVNOMVRhZyhzdHJlYW0pO1xuICAgICAgICB2YXIgbGVuID0gQVNOMS5kZWNvZGVMZW5ndGgoc3RyZWFtKTtcbiAgICAgICAgdmFyIHN0YXJ0ID0gc3RyZWFtLnBvcztcbiAgICAgICAgdmFyIGhlYWRlciA9IHN0YXJ0IC0gc3RyZWFtU3RhcnQucG9zO1xuICAgICAgICB2YXIgc3ViID0gbnVsbDtcbiAgICAgICAgdmFyIGdldFN1YiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBbXTtcbiAgICAgICAgICAgIGlmIChsZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWZpbml0ZSBsZW5ndGhcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gc3RhcnQgKyBsZW47XG4gICAgICAgICAgICAgICAgd2hpbGUgKHN0cmVhbS5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0W3JldC5sZW5ndGhdID0gQVNOMS5kZWNvZGUoc3RyZWFtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cmVhbS5wb3MgIT0gZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbnRlbnQgc2l6ZSBpcyBub3QgY29ycmVjdCBmb3IgY29udGFpbmVyIHN0YXJ0aW5nIGF0IG9mZnNldCBcIiArIHN0YXJ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB1bmRlZmluZWQgbGVuZ3RoXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBBU04xLmRlY29kZShzdHJlYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMudGFnLmlzRU9DKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyZXQubGVuZ3RoXSA9IHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVuID0gc3RhcnQgLSBzdHJlYW0ucG9zOyAvLyB1bmRlZmluZWQgbGVuZ3RocyBhcmUgcmVwcmVzZW50ZWQgYXMgbmVnYXRpdmUgdmFsdWVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4Y2VwdGlvbiB3aGlsZSBkZWNvZGluZyB1bmRlZmluZWQgbGVuZ3RoIGNvbnRlbnQ6IFwiICsgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRhZy50YWdDb25zdHJ1Y3RlZCkge1xuICAgICAgICAgICAgLy8gbXVzdCBoYXZlIHZhbGlkIGNvbnRlbnRcbiAgICAgICAgICAgIHN1YiA9IGdldFN1YigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRhZy5pc1VuaXZlcnNhbCgpICYmICgodGFnLnRhZ051bWJlciA9PSAweDAzKSB8fCAodGFnLnRhZ051bWJlciA9PSAweDA0KSkpIHtcbiAgICAgICAgICAgIC8vIHNvbWV0aW1lcyBCaXRTdHJpbmcgYW5kIE9jdGV0U3RyaW5nIGFyZSB1c2VkIHRvIGVuY2Fwc3VsYXRlIEFTTi4xXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0YWcudGFnTnVtYmVyID09IDB4MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmVhbS5nZXQoKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCSVQgU1RSSU5HcyB3aXRoIHVudXNlZCBiaXRzIGNhbm5vdCBlbmNhcHN1bGF0ZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3ViID0gZ2V0U3ViKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YltpXS50YWcuaXNFT0MoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRU9DIGlzIG5vdCBzdXBwb3NlZCB0byBiZSBhY3R1YWwgY29udGVudC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIGJ1dCBzaWxlbnRseSBpZ25vcmUgd2hlbiB0aGV5IGRvbid0XG4gICAgICAgICAgICAgICAgc3ViID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3ViID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobGVuID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2UgY2FuJ3Qgc2tpcCBvdmVyIGFuIGludmFsaWQgdGFnIHdpdGggdW5kZWZpbmVkIGxlbmd0aCBhdCBvZmZzZXQgXCIgKyBzdGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJlYW0ucG9zID0gc3RhcnQgKyBNYXRoLmFicyhsZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQVNOMShzdHJlYW1TdGFydCwgaGVhZGVyLCBsZW4sIHRhZywgc3ViKTtcbiAgICB9O1xuICAgIHJldHVybiBBU04xO1xufSgpKTtcbmV4cG9ydCB7IEFTTjEgfTtcbnZhciBBU04xVGFnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFTTjFUYWcoc3RyZWFtKSB7XG4gICAgICAgIHZhciBidWYgPSBzdHJlYW0uZ2V0KCk7XG4gICAgICAgIHRoaXMudGFnQ2xhc3MgPSBidWYgPj4gNjtcbiAgICAgICAgdGhpcy50YWdDb25zdHJ1Y3RlZCA9ICgoYnVmICYgMHgyMCkgIT09IDApO1xuICAgICAgICB0aGlzLnRhZ051bWJlciA9IGJ1ZiAmIDB4MUY7XG4gICAgICAgIGlmICh0aGlzLnRhZ051bWJlciA9PSAweDFGKSB7IC8vIGxvbmcgdGFnXG4gICAgICAgICAgICB2YXIgbiA9IG5ldyBJbnQxMCgpO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGJ1ZiA9IHN0cmVhbS5nZXQoKTtcbiAgICAgICAgICAgICAgICBuLm11bEFkZCgxMjgsIGJ1ZiAmIDB4N0YpO1xuICAgICAgICAgICAgfSB3aGlsZSAoYnVmICYgMHg4MCk7XG4gICAgICAgICAgICB0aGlzLnRhZ051bWJlciA9IG4uc2ltcGxpZnkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBU04xVGFnLnByb3RvdHlwZS5pc1VuaXZlcnNhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFnQ2xhc3MgPT09IDB4MDA7XG4gICAgfTtcbiAgICBBU04xVGFnLnByb3RvdHlwZS5pc0VPQyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFnQ2xhc3MgPT09IDB4MDAgJiYgdGhpcy50YWdOdW1iZXIgPT09IDB4MDA7XG4gICAgfTtcbiAgICByZXR1cm4gQVNOMVRhZztcbn0oKSk7XG5leHBvcnQgeyBBU04xVGFnIH07XG4iXX0=
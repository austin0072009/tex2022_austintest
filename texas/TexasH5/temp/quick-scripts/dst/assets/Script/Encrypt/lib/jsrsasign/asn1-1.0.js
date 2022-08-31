
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Encrypt/lib/jsrsasign/asn1-1.0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0ac6m23s5K5rH4rjl3CSl4', 'asn1-1.0');
// Script/Encrypt/lib/jsrsasign/asn1-1.0.js

"use strict";

exports.__esModule = true;
exports.KJUR = void 0;

var _jsbn = require("../jsbn/jsbn");

var _yahoo = require("./yahoo");

/* asn1-1.0.13.js (c) 2013-2017 Kenji Urushima | kjur.github.com/jsrsasign/license
 */

/*
 * asn1.js - ASN.1 DER encoder classes
 *
 * Copyright (c) 2013-2017 Kenji Urushima (kenji.urushima@gmail.com)
 *
 * This software is licensed under the terms of the MIT License.
 * https://kjur.github.io/jsrsasign/license
 *
 * The above copyright and license notice shall be
 * included in all copies or substantial portions of the Software.
 */

/**
 * @fileOverview
 * @name asn1-1.0.js
 * @author Kenji Urushima kenji.urushima@gmail.com
 * @version asn1 1.0.13 (2017-Jun-02)
 * @since jsrsasign 2.1
 * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
 */

/**
 * kjur's class library name space
 * <p>
 * This name space provides following name spaces:
 * <ul>
 * <li>{@link KJUR.asn1} - ASN.1 primitive hexadecimal encoder</li>
 * <li>{@link KJUR.asn1.x509} - ASN.1 structure for X.509 certificate and CRL</li>
 * <li>{@link KJUR.crypto} - Java Cryptographic Extension(JCE) style MessageDigest/Signature
 * class and utilities</li>
 * </ul>
 * </p>
 * NOTE: Please ignore method summary and document of this namespace. This caused by a bug of jsdoc2.
 * @name KJUR
 * @namespace kjur's class library name space
 */
var KJUR = {};
/**
 * kjur's ASN.1 class library name space
 * <p>
 * This is ITU-T X.690 ASN.1 DER encoder class library and
 * class structure and methods is very similar to
 * org.bouncycastle.asn1 package of
 * well known BouncyCaslte Cryptography Library.
 * <h4>PROVIDING ASN.1 PRIMITIVES</h4>
 * Here are ASN.1 DER primitive classes.
 * <ul>
 * <li>0x01 {@link KJUR.asn1.DERBoolean}</li>
 * <li>0x02 {@link KJUR.asn1.DERInteger}</li>
 * <li>0x03 {@link KJUR.asn1.DERBitString}</li>
 * <li>0x04 {@link KJUR.asn1.DEROctetString}</li>
 * <li>0x05 {@link KJUR.asn1.DERNull}</li>
 * <li>0x06 {@link KJUR.asn1.DERObjectIdentifier}</li>
 * <li>0x0a {@link KJUR.asn1.DEREnumerated}</li>
 * <li>0x0c {@link KJUR.asn1.DERUTF8String}</li>
 * <li>0x12 {@link KJUR.asn1.DERNumericString}</li>
 * <li>0x13 {@link KJUR.asn1.DERPrintableString}</li>
 * <li>0x14 {@link KJUR.asn1.DERTeletexString}</li>
 * <li>0x16 {@link KJUR.asn1.DERIA5String}</li>
 * <li>0x17 {@link KJUR.asn1.DERUTCTime}</li>
 * <li>0x18 {@link KJUR.asn1.DERGeneralizedTime}</li>
 * <li>0x30 {@link KJUR.asn1.DERSequence}</li>
 * <li>0x31 {@link KJUR.asn1.DERSet}</li>
 * </ul>
 * <h4>OTHER ASN.1 CLASSES</h4>
 * <ul>
 * <li>{@link KJUR.asn1.ASN1Object}</li>
 * <li>{@link KJUR.asn1.DERAbstractString}</li>
 * <li>{@link KJUR.asn1.DERAbstractTime}</li>
 * <li>{@link KJUR.asn1.DERAbstractStructured}</li>
 * <li>{@link KJUR.asn1.DERTaggedObject}</li>
 * </ul>
 * <h4>SUB NAME SPACES</h4>
 * <ul>
 * <li>{@link KJUR.asn1.cades} - CAdES long term signature format</li>
 * <li>{@link KJUR.asn1.cms} - Cryptographic Message Syntax</li>
 * <li>{@link KJUR.asn1.csr} - Certificate Signing Request (CSR/PKCS#10)</li>
 * <li>{@link KJUR.asn1.tsp} - RFC 3161 Timestamping Protocol Format</li>
 * <li>{@link KJUR.asn1.x509} - RFC 5280 X.509 certificate and CRL</li>
 * </ul>
 * </p>
 * NOTE: Please ignore method summary and document of this namespace.
 * This caused by a bug of jsdoc2.
 * @name KJUR.asn1
 * @namespace
 */

exports.KJUR = KJUR;
if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) KJUR.asn1 = {};
/**
 * ASN1 utilities class
 * @name KJUR.asn1.ASN1Util
 * @class ASN1 utilities class
 * @since asn1 1.0.2
 */

KJUR.asn1.ASN1Util = new function () {
  this.integerToByteHex = function (i) {
    var h = i.toString(16);
    if (h.length % 2 == 1) h = '0' + h;
    return h;
  };

  this.bigIntToMinTwosComplementsHex = function (bigIntegerValue) {
    var h = bigIntegerValue.toString(16);

    if (h.substr(0, 1) != '-') {
      if (h.length % 2 == 1) {
        h = '0' + h;
      } else {
        if (!h.match(/^[0-7]/)) {
          h = '00' + h;
        }
      }
    } else {
      var hPos = h.substr(1);
      var xorLen = hPos.length;

      if (xorLen % 2 == 1) {
        xorLen += 1;
      } else {
        if (!h.match(/^[0-7]/)) {
          xorLen += 2;
        }
      }

      var hMask = '';

      for (var i = 0; i < xorLen; i++) {
        hMask += 'f';
      }

      var biMask = new _jsbn.BigInteger(hMask, 16);
      var biNeg = biMask.xor(bigIntegerValue).add(_jsbn.BigInteger.ONE);
      h = biNeg.toString(16).replace(/^-/, '');
    }

    return h;
  };
  /**
   * get PEM string from hexadecimal data and header string
   * @name getPEMStringFromHex
   * @memberOf KJUR.asn1.ASN1Util
   * @function
   * @param {String} dataHex hexadecimal string of PEM body
   * @param {String} pemHeader PEM header string (ex. 'RSA PRIVATE KEY')
   * @return {String} PEM formatted string of input data
   * @description
   * This method converts a hexadecimal string to a PEM string with
   * a specified header. Its line break will be CRLF("\r\n").
   * @example
   * var pem  = KJUR.asn1.ASN1Util.getPEMStringFromHex('616161', 'RSA PRIVATE KEY');
   * // value of pem will be:
   * -----BEGIN PRIVATE KEY-----
   * YWFh
   * -----END PRIVATE KEY-----
   */


  this.getPEMStringFromHex = function (dataHex, pemHeader) {
    return hextopem(dataHex, pemHeader);
  };
  /**
   * generate ASN1Object specifed by JSON parameters
   * @name newObject
   * @memberOf KJUR.asn1.ASN1Util
   * @function
   * @param {Array} param JSON parameter to generate ASN1Object
   * @return {KJUR.asn1.ASN1Object} generated object
   * @since asn1 1.0.3
   * @description
   * generate any ASN1Object specified by JSON param
   * including ASN.1 primitive or structured.
   * Generally 'param' can be described as follows:
   * <blockquote>
   * {TYPE-OF-ASNOBJ: ASN1OBJ-PARAMETER}
   * </blockquote>
   * 'TYPE-OF-ASN1OBJ' can be one of following symbols:
   * <ul>
   * <li>'bool' - DERBoolean</li>
   * <li>'int' - DERInteger</li>
   * <li>'bitstr' - DERBitString</li>
   * <li>'octstr' - DEROctetString</li>
   * <li>'null' - DERNull</li>
   * <li>'oid' - DERObjectIdentifier</li>
   * <li>'enum' - DEREnumerated</li>
   * <li>'utf8str' - DERUTF8String</li>
   * <li>'numstr' - DERNumericString</li>
   * <li>'prnstr' - DERPrintableString</li>
   * <li>'telstr' - DERTeletexString</li>
   * <li>'ia5str' - DERIA5String</li>
   * <li>'utctime' - DERUTCTime</li>
   * <li>'gentime' - DERGeneralizedTime</li>
   * <li>'seq' - DERSequence</li>
   * <li>'set' - DERSet</li>
   * <li>'tag' - DERTaggedObject</li>
   * </ul>
   * @example
   * newObject({'prnstr': 'aaa'});
   * newObject({'seq': [{'int': 3}, {'prnstr': 'aaa'}]})
   * // ASN.1 Tagged Object
   * newObject({'tag': {'tag': 'a1',
   *                    'explicit': true,
   *                    'obj': {'seq': [{'int': 3}, {'prnstr': 'aaa'}]}}});
   * // more simple representation of ASN.1 Tagged Object
   * newObject({'tag': ['a1',
   *                    true,
   *                    {'seq': [
   *                      {'int': 3},
   *                      {'prnstr': 'aaa'}]}
   *                   ]});
   */


  this.newObject = function (param) {
    var _KJUR = KJUR,
        _KJUR_asn1 = _KJUR.asn1,
        _DERBoolean = _KJUR_asn1.DERBoolean,
        _DERInteger = _KJUR_asn1.DERInteger,
        _DERBitString = _KJUR_asn1.DERBitString,
        _DEROctetString = _KJUR_asn1.DEROctetString,
        _DERNull = _KJUR_asn1.DERNull,
        _DERObjectIdentifier = _KJUR_asn1.DERObjectIdentifier,
        _DEREnumerated = _KJUR_asn1.DEREnumerated,
        _DERUTF8String = _KJUR_asn1.DERUTF8String,
        _DERNumericString = _KJUR_asn1.DERNumericString,
        _DERPrintableString = _KJUR_asn1.DERPrintableString,
        _DERTeletexString = _KJUR_asn1.DERTeletexString,
        _DERIA5String = _KJUR_asn1.DERIA5String,
        _DERUTCTime = _KJUR_asn1.DERUTCTime,
        _DERGeneralizedTime = _KJUR_asn1.DERGeneralizedTime,
        _DERSequence = _KJUR_asn1.DERSequence,
        _DERSet = _KJUR_asn1.DERSet,
        _DERTaggedObject = _KJUR_asn1.DERTaggedObject,
        _newObject = _KJUR_asn1.ASN1Util.newObject;
    var keys = Object.keys(param);
    if (keys.length != 1) throw "key of param shall be only one.";
    var key = keys[0];
    if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + key + ":") == -1) throw "undefined key: " + key;
    if (key == "bool") return new _DERBoolean(param[key]);
    if (key == "int") return new _DERInteger(param[key]);
    if (key == "bitstr") return new _DERBitString(param[key]);
    if (key == "octstr") return new _DEROctetString(param[key]);
    if (key == "null") return new _DERNull(param[key]);
    if (key == "oid") return new _DERObjectIdentifier(param[key]);
    if (key == "enum") return new _DEREnumerated(param[key]);
    if (key == "utf8str") return new _DERUTF8String(param[key]);
    if (key == "numstr") return new _DERNumericString(param[key]);
    if (key == "prnstr") return new _DERPrintableString(param[key]);
    if (key == "telstr") return new _DERTeletexString(param[key]);
    if (key == "ia5str") return new _DERIA5String(param[key]);
    if (key == "utctime") return new _DERUTCTime(param[key]);
    if (key == "gentime") return new _DERGeneralizedTime(param[key]);

    if (key == "seq") {
      var paramList = param[key];
      var a = [];

      for (var i = 0; i < paramList.length; i++) {
        var asn1Obj = _newObject(paramList[i]);

        a.push(asn1Obj);
      }

      return new _DERSequence({
        'array': a
      });
    }

    if (key == "set") {
      var paramList = param[key];
      var a = [];

      for (var i = 0; i < paramList.length; i++) {
        var asn1Obj = _newObject(paramList[i]);

        a.push(asn1Obj);
      }

      return new _DERSet({
        'array': a
      });
    }

    if (key == "tag") {
      var tagParam = param[key];

      if (Object.prototype.toString.call(tagParam) === '[object Array]' && tagParam.length == 3) {
        var obj = _newObject(tagParam[2]);

        return new _DERTaggedObject({
          tag: tagParam[0],
          explicit: tagParam[1],
          obj: obj
        });
      } else {
        var newParam = {};
        if (tagParam.explicit !== undefined) newParam.explicit = tagParam.explicit;
        if (tagParam.tag !== undefined) newParam.tag = tagParam.tag;
        if (tagParam.obj === undefined) throw "obj shall be specified for 'tag'.";
        newParam.obj = _newObject(tagParam.obj);
        return new _DERTaggedObject(newParam);
      }
    }
  };
  /**
   * get encoded hexadecimal string of ASN1Object specifed by JSON parameters
   * @name jsonToASN1HEX
   * @memberOf KJUR.asn1.ASN1Util
   * @function
   * @param {Array} param JSON parameter to generate ASN1Object
   * @return hexadecimal string of ASN1Object
   * @since asn1 1.0.4
   * @description
   * As for ASN.1 object representation of JSON object,
   * please see {@link newObject}.
   * @example
   * jsonToASN1HEX({'prnstr': 'aaa'});
   */


  this.jsonToASN1HEX = function (param) {
    var asn1Obj = this.newObject(param);
    return asn1Obj.getEncodedHex();
  };
}();
/**
 * get dot noted oid number string from hexadecimal value of OID
 * @name oidHexToInt
 * @memberOf KJUR.asn1.ASN1Util
 * @function
 * @param {String} hex hexadecimal value of object identifier
 * @return {String} dot noted string of object identifier
 * @since jsrsasign 4.8.3 asn1 1.0.7
 * @description
 * This static method converts from hexadecimal string representation of
 * ASN.1 value of object identifier to oid number string.
 * @example
 * KJUR.asn1.ASN1Util.oidHexToInt('550406') &rarr; "2.5.4.6"
 */

KJUR.asn1.ASN1Util.oidHexToInt = function (hex) {
  var s = "";
  var i01 = parseInt(hex.substr(0, 2), 16);
  var i0 = Math.floor(i01 / 40);
  var i1 = i01 % 40;
  var s = i0 + "." + i1;
  var binbuf = "";

  for (var i = 2; i < hex.length; i += 2) {
    var value = parseInt(hex.substr(i, 2), 16);
    var bin = ("00000000" + value.toString(2)).slice(-8);
    binbuf = binbuf + bin.substr(1, 7);

    if (bin.substr(0, 1) == "0") {
      var bi = new _jsbn.BigInteger(binbuf, 2);
      s = s + "." + bi.toString(10);
      binbuf = "";
    }
  }

  ;
  return s;
};
/**
 * get hexadecimal value of object identifier from dot noted oid value
 * @name oidIntToHex
 * @memberOf KJUR.asn1.ASN1Util
 * @function
 * @param {String} oidString dot noted string of object identifier
 * @return {String} hexadecimal value of object identifier
 * @since jsrsasign 4.8.3 asn1 1.0.7
 * @description
 * This static method converts from object identifier value string.
 * to hexadecimal string representation of it.
 * @example
 * KJUR.asn1.ASN1Util.oidIntToHex("2.5.4.6") &rarr; "550406"
 */


KJUR.asn1.ASN1Util.oidIntToHex = function (oidString) {
  var itox = function itox(i) {
    var h = i.toString(16);
    if (h.length == 1) h = '0' + h;
    return h;
  };

  var roidtox = function roidtox(roid) {
    var h = '';
    var bi = new _jsbn.BigInteger(roid, 10);
    var b = bi.toString(2);
    var padLen = 7 - b.length % 7;
    if (padLen == 7) padLen = 0;
    var bPad = '';

    for (var i = 0; i < padLen; i++) {
      bPad += '0';
    }

    b = bPad + b;

    for (var i = 0; i < b.length - 1; i += 7) {
      var b8 = b.substr(i, 7);
      if (i != b.length - 7) b8 = '1' + b8;
      h += itox(parseInt(b8, 2));
    }

    return h;
  };

  if (!oidString.match(/^[0-9.]+$/)) {
    throw "malformed oid string: " + oidString;
  }

  var h = '';
  var a = oidString.split('.');
  var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
  h += itox(i0);
  a.splice(0, 2);

  for (var i = 0; i < a.length; i++) {
    h += roidtox(a[i]);
  }

  return h;
}; // ********************************************************************
//  Abstract ASN.1 Classes
// ********************************************************************
// ********************************************************************

/**
 * base class for ASN.1 DER encoder object
 * @name KJUR.asn1.ASN1Object
 * @class base class for ASN.1 DER encoder object
 * @property {Boolean} isModified flag whether internal data was changed
 * @property {String} hTLV hexadecimal string of ASN.1 TLV
 * @property {String} hT hexadecimal string of ASN.1 TLV tag(T)
 * @property {String} hL hexadecimal string of ASN.1 TLV length(L)
 * @property {String} hV hexadecimal string of ASN.1 TLV value(V)
 * @description
 */


KJUR.asn1.ASN1Object = function () {
  var isModified = true;
  var hTLV = null;
  var hT = '00';
  var hL = '00';
  var hV = '';
  /**
   * get hexadecimal ASN.1 TLV length(L) bytes from TLV value(V)
   * @name getLengthHexFromValue
   * @memberOf KJUR.asn1.ASN1Object#
   * @function
   * @return {String} hexadecimal string of ASN.1 TLV length(L)
   */

  this.getLengthHexFromValue = function () {
    if (typeof this.hV == "undefined" || this.hV == null) {
      throw "this.hV is null or undefined.";
    }

    if (this.hV.length % 2 == 1) {
      throw "value hex must be even length: n=" + hV.length + ",v=" + this.hV;
    }

    var n = this.hV.length / 2;
    var hN = n.toString(16);

    if (hN.length % 2 == 1) {
      hN = "0" + hN;
    }

    if (n < 128) {
      return hN;
    } else {
      var hNlen = hN.length / 2;

      if (hNlen > 15) {
        throw "ASN.1 length too long to represent by 8x: n = " + n.toString(16);
      }

      var head = 128 + hNlen;
      return head.toString(16) + hN;
    }
  };
  /**
   * get hexadecimal string of ASN.1 TLV bytes
   * @name getEncodedHex
   * @memberOf KJUR.asn1.ASN1Object#
   * @function
   * @return {String} hexadecimal string of ASN.1 TLV
   */


  this.getEncodedHex = function () {
    if (this.hTLV == null || this.isModified) {
      this.hV = this.getFreshValueHex();
      this.hL = this.getLengthHexFromValue();
      this.hTLV = this.hT + this.hL + this.hV;
      this.isModified = false; //alert("first time: " + this.hTLV);
    }

    return this.hTLV;
  };
  /**
   * get hexadecimal string of ASN.1 TLV value(V) bytes
   * @name getValueHex
   * @memberOf KJUR.asn1.ASN1Object#
   * @function
   * @return {String} hexadecimal string of ASN.1 TLV value(V) bytes
   */


  this.getValueHex = function () {
    this.getEncodedHex();
    return this.hV;
  };

  this.getFreshValueHex = function () {
    return '';
  };
}; // == BEGIN DERAbstractString ================================================

/**
 * base class for ASN.1 DER string classes
 * @name KJUR.asn1.DERAbstractString
 * @class base class for ASN.1 DER string classes
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @property {String} s internal string of value
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>str - specify initial ASN.1 value(V) by a string</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */


KJUR.asn1.DERAbstractString = function (params) {
  KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
  var s = null;
  var hV = null;
  /**
   * get string value of this string object
   * @name getString
   * @memberOf KJUR.asn1.DERAbstractString#
   * @function
   * @return {String} string value of this string object
   */

  this.getString = function () {
    return this.s;
  };
  /**
   * set value by a string
   * @name setString
   * @memberOf KJUR.asn1.DERAbstractString#
   * @function
   * @param {String} newS value by a string to set
   */


  this.setString = function (newS) {
    this.hTLV = null;
    this.isModified = true;
    this.s = newS;
    this.hV = stohex(this.s);
  };
  /**
   * set value by a hexadecimal string
   * @name setStringHex
   * @memberOf KJUR.asn1.DERAbstractString#
   * @function
   * @param {String} newHexString value by a hexadecimal string to set
   */


  this.setStringHex = function (newHexString) {
    this.hTLV = null;
    this.isModified = true;
    this.s = null;
    this.hV = newHexString;
  };

  this.getFreshValueHex = function () {
    return this.hV;
  };

  if (typeof params != "undefined") {
    if (typeof params == "string") {
      this.setString(params);
    } else if (typeof params['str'] != "undefined") {
      this.setString(params['str']);
    } else if (typeof params['hex'] != "undefined") {
      this.setStringHex(params['hex']);
    }
  }
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object); // == END   DERAbstractString ================================================
// == BEGIN DERAbstractTime ==================================================

/**
 * base class for ASN.1 DER Generalized/UTCTime class
 * @name KJUR.asn1.DERAbstractTime
 * @class base class for ASN.1 DER Generalized/UTCTime class
 * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */


KJUR.asn1.DERAbstractTime = function (params) {
  KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
  var s = null;
  var date = null; // --- PRIVATE METHODS --------------------

  this.localDateToUTC = function (d) {
    utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var utcDate = new Date(utc);
    return utcDate;
  };
  /*
   * format date string by Data object
   * @name formatDate
   * @memberOf KJUR.asn1.AbstractTime;
   * @param {Date} dateObject
   * @param {string} type 'utc' or 'gen'
   * @param {boolean} withMillis flag for with millisections or not
   * @description
   * 'withMillis' flag is supported from asn1 1.0.6.
   */


  this.formatDate = function (dateObject, type, withMillis) {
    var pad = this.zeroPadding;
    var d = this.localDateToUTC(dateObject);
    var year = String(d.getFullYear());
    if (type == 'utc') year = year.substr(2, 2);
    var month = pad(String(d.getMonth() + 1), 2);
    var day = pad(String(d.getDate()), 2);
    var hour = pad(String(d.getHours()), 2);
    var min = pad(String(d.getMinutes()), 2);
    var sec = pad(String(d.getSeconds()), 2);
    var s = year + month + day + hour + min + sec;

    if (withMillis === true) {
      var millis = d.getMilliseconds();

      if (millis != 0) {
        var sMillis = pad(String(millis), 3);
        sMillis = sMillis.replace(/[0]+$/, "");
        s = s + "." + sMillis;
      }
    }

    return s + "Z";
  };

  this.zeroPadding = function (s, len) {
    if (s.length >= len) return s;
    return new Array(len - s.length + 1).join('0') + s;
  }; // --- PUBLIC METHODS --------------------

  /**
   * get string value of this string object
   * @name getString
   * @memberOf KJUR.asn1.DERAbstractTime#
   * @function
   * @return {String} string value of this time object
   */


  this.getString = function () {
    return this.s;
  };
  /**
   * set value by a string
   * @name setString
   * @memberOf KJUR.asn1.DERAbstractTime#
   * @function
   * @param {String} newS value by a string to set such like "130430235959Z"
   */


  this.setString = function (newS) {
    this.hTLV = null;
    this.isModified = true;
    this.s = newS;
    this.hV = stohex(newS);
  };
  /**
   * set value by a Date object
   * @name setByDateValue
   * @memberOf KJUR.asn1.DERAbstractTime#
   * @function
   * @param {Integer} year year of date (ex. 2013)
   * @param {Integer} month month of date between 1 and 12 (ex. 12)
   * @param {Integer} day day of month
   * @param {Integer} hour hours of date
   * @param {Integer} min minutes of date
   * @param {Integer} sec seconds of date
   */


  this.setByDateValue = function (year, month, day, hour, min, sec) {
    var dateObject = new Date(Date.UTC(year, month - 1, day, hour, min, sec, 0));
    this.setByDate(dateObject);
  };

  this.getFreshValueHex = function () {
    return this.hV;
  };
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object); // == END   DERAbstractTime ==================================================
// == BEGIN DERAbstractStructured ============================================

/**
 * base class for ASN.1 DER structured class
 * @name KJUR.asn1.DERAbstractStructured
 * @class base class for ASN.1 DER structured class
 * @property {Array} asn1Array internal array of ASN1Object
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */


KJUR.asn1.DERAbstractStructured = function (params) {
  KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
  var asn1Array = null;
  /**
   * set value by array of ASN1Object
   * @name setByASN1ObjectArray
   * @memberOf KJUR.asn1.DERAbstractStructured#
   * @function
   * @param {array} asn1ObjectArray array of ASN1Object to set
   */

  this.setByASN1ObjectArray = function (asn1ObjectArray) {
    this.hTLV = null;
    this.isModified = true;
    this.asn1Array = asn1ObjectArray;
  };
  /**
   * append an ASN1Object to internal array
   * @name appendASN1Object
   * @memberOf KJUR.asn1.DERAbstractStructured#
   * @function
   * @param {ASN1Object} asn1Object to add
   */


  this.appendASN1Object = function (asn1Object) {
    this.hTLV = null;
    this.isModified = true;
    this.asn1Array.push(asn1Object);
  };

  this.asn1Array = new Array();

  if (typeof params != "undefined") {
    if (typeof params['array'] != "undefined") {
      this.asn1Array = params['array'];
    }
  }
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object); // ********************************************************************
//  ASN.1 Object Classes
// ********************************************************************
// ********************************************************************

/**
 * class for ASN.1 DER Boolean
 * @name KJUR.asn1.DERBoolean
 * @class class for ASN.1 DER Boolean
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */


KJUR.asn1.DERBoolean = function () {
  KJUR.asn1.DERBoolean.superclass.constructor.call(this);
  this.hT = "01";
  this.hTLV = "0101ff";
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object); // ********************************************************************

/**
 * class for ASN.1 DER Integer
 * @name KJUR.asn1.DERInteger
 * @class class for ASN.1 DER Integer
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>int - specify initial ASN.1 value(V) by integer value</li>
 * <li>bigint - specify initial ASN.1 value(V) by BigInteger object</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */


KJUR.asn1.DERInteger = function (params) {
  KJUR.asn1.DERInteger.superclass.constructor.call(this);
  this.hT = "02";
  /**
   * set value by Tom Wu's BigInteger object
   * @name setByBigInteger
   * @memberOf KJUR.asn1.DERInteger#
   * @function
   * @param {BigInteger} bigIntegerValue to set
   */

  this.setByBigInteger = function (bigIntegerValue) {
    this.hTLV = null;
    this.isModified = true;
    this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
  };
  /**
   * set value by integer value
   * @name setByInteger
   * @memberOf KJUR.asn1.DERInteger
   * @function
   * @param {Integer} integer value to set
   */


  this.setByInteger = function (intValue) {
    var bi = new _jsbn.BigInteger(String(intValue), 10);
    this.setByBigInteger(bi);
  };
  /**
   * set value by integer value
   * @name setValueHex
   * @memberOf KJUR.asn1.DERInteger#
   * @function
   * @param {String} hexadecimal string of integer value
   * @description
   * <br/>
   * NOTE: Value shall be represented by minimum octet length of
   * two's complement representation.
   * @example
   * new KJUR.asn1.DERInteger(123);
   * new KJUR.asn1.DERInteger({'int': 123});
   * new KJUR.asn1.DERInteger({'hex': '1fad'});
   */


  this.setValueHex = function (newHexString) {
    this.hV = newHexString;
  };

  this.getFreshValueHex = function () {
    return this.hV;
  };

  if (typeof params != "undefined") {
    if (typeof params['bigint'] != "undefined") {
      this.setByBigInteger(params['bigint']);
    } else if (typeof params['int'] != "undefined") {
      this.setByInteger(params['int']);
    } else if (typeof params == "number") {
      this.setByInteger(params);
    } else if (typeof params['hex'] != "undefined") {
      this.setValueHex(params['hex']);
    }
  }
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object); // ********************************************************************

/**
 * class for ASN.1 DER encoded BitString primitive
 * @name KJUR.asn1.DERBitString
 * @class class for ASN.1 DER encoded BitString primitive
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>bin - specify binary string (ex. '10111')</li>
 * <li>array - specify array of boolean (ex. [true,false,true,true])</li>
 * <li>hex - specify hexadecimal string of ASN.1 value(V) including unused bits</li>
 * <li>obj - specify {@link KJUR.asn1.ASN1Util.newObject}
 * argument for "BitString encapsulates" structure.</li>
 * </ul>
 * NOTE1: 'params' can be omitted.<br/>
 * NOTE2: 'obj' parameter have been supported since
 * asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).<br/>
 * @example
 * // default constructor
 * o = new KJUR.asn1.DERBitString();
 * // initialize with binary string
 * o = new KJUR.asn1.DERBitString({bin: "1011"});
 * // initialize with boolean array
 * o = new KJUR.asn1.DERBitString({array: [true,false,true,true]});
 * // initialize with hexadecimal string (04 is unused bits)
 * o = new KJUR.asn1.DEROctetString({hex: "04bac0"});
 * // initialize with ASN1Util.newObject argument for encapsulated
 * o = new KJUR.asn1.DERBitString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
 * // above generates a ASN.1 data like this:
 * // BIT STRING, encapsulates {
 * //   SEQUENCE {
 * //     INTEGER 3
 * //     PrintableString 'aaa'
 * //     }
 * //   }
 */


KJUR.asn1.DERBitString = function (params) {
  if (params !== undefined && typeof params.obj !== "undefined") {
    var o = KJUR.asn1.ASN1Util.newObject(params.obj);
    params.hex = "00" + o.getEncodedHex();
  }

  KJUR.asn1.DERBitString.superclass.constructor.call(this);
  this.hT = "03";
  /**
   * set ASN.1 value(V) by a hexadecimal string including unused bits
   * @name setHexValueIncludingUnusedBits
   * @memberOf KJUR.asn1.DERBitString#
   * @function
   * @param {String} newHexStringIncludingUnusedBits
   */

  this.setHexValueIncludingUnusedBits = function (newHexStringIncludingUnusedBits) {
    this.hTLV = null;
    this.isModified = true;
    this.hV = newHexStringIncludingUnusedBits;
  };
  /**
   * set ASN.1 value(V) by unused bit and hexadecimal string of value
   * @name setUnusedBitsAndHexValue
   * @memberOf KJUR.asn1.DERBitString#
   * @function
   * @param {Integer} unusedBits
   * @param {String} hValue
   */


  this.setUnusedBitsAndHexValue = function (unusedBits, hValue) {
    if (unusedBits < 0 || 7 < unusedBits) {
      throw "unused bits shall be from 0 to 7: u = " + unusedBits;
    }

    var hUnusedBits = "0" + unusedBits;
    this.hTLV = null;
    this.isModified = true;
    this.hV = hUnusedBits + hValue;
  };
  /**
   * set ASN.1 DER BitString by binary string<br/>
   * @name setByBinaryString
   * @memberOf KJUR.asn1.DERBitString#
   * @function
   * @param {String} binaryString binary value string (i.e. '10111')
   * @description
   * Its unused bits will be calculated automatically by length of
   * 'binaryValue'. <br/>
   * NOTE: Trailing zeros '0' will be ignored.
   * @example
   * o = new KJUR.asn1.DERBitString();
   * o.setByBooleanArray("01011");
   */


  this.setByBinaryString = function (binaryString) {
    binaryString = binaryString.replace(/0+$/, '');
    var unusedBits = 8 - binaryString.length % 8;
    if (unusedBits == 8) unusedBits = 0;

    for (var i = 0; i <= unusedBits; i++) {
      binaryString += '0';
    }

    var h = '';

    for (var i = 0; i < binaryString.length - 1; i += 8) {
      var b = binaryString.substr(i, 8);
      var x = parseInt(b, 2).toString(16);
      if (x.length == 1) x = '0' + x;
      h += x;
    }

    this.hTLV = null;
    this.isModified = true;
    this.hV = '0' + unusedBits + h;
  };
  /**
   * set ASN.1 TLV value(V) by an array of boolean<br/>
   * @name setByBooleanArray
   * @memberOf KJUR.asn1.DERBitString#
   * @function
   * @param {array} booleanArray array of boolean (ex. [true, false, true])
   * @description
   * NOTE: Trailing falses will be ignored in the ASN.1 DER Object.
   * @example
   * o = new KJUR.asn1.DERBitString();
   * o.setByBooleanArray([false, true, false, true, true]);
   */


  this.setByBooleanArray = function (booleanArray) {
    var s = '';

    for (var i = 0; i < booleanArray.length; i++) {
      if (booleanArray[i] == true) {
        s += '1';
      } else {
        s += '0';
      }
    }

    this.setByBinaryString(s);
  };
  /**
   * generate an array of falses with specified length<br/>
   * @name newFalseArray
   * @memberOf KJUR.asn1.DERBitString
   * @function
   * @param {Integer} nLength length of array to generate
   * @return {array} array of boolean falses
   * @description
   * This static method may be useful to initialize boolean array.
   * @example
   * o = new KJUR.asn1.DERBitString();
   * o.newFalseArray(3) &rarr; [false, false, false]
   */


  this.newFalseArray = function (nLength) {
    var a = new Array(nLength);

    for (var i = 0; i < nLength; i++) {
      a[i] = false;
    }

    return a;
  };

  this.getFreshValueHex = function () {
    return this.hV;
  };

  if (typeof params != "undefined") {
    if (typeof params == "string" && params.toLowerCase().match(/^[0-9a-f]+$/)) {
      this.setHexValueIncludingUnusedBits(params);
    } else if (typeof params['hex'] != "undefined") {
      this.setHexValueIncludingUnusedBits(params['hex']);
    } else if (typeof params['bin'] != "undefined") {
      this.setByBinaryString(params['bin']);
    } else if (typeof params['array'] != "undefined") {
      this.setByBooleanArray(params['array']);
    }
  }
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object); // ********************************************************************

/**
 * class for ASN.1 DER OctetString<br/>
 * @name KJUR.asn1.DEROctetString
 * @class class for ASN.1 DER OctetString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * This class provides ASN.1 OctetString simple type.<br/>
 * Supported "params" attributes are:
 * <ul>
 * <li>str - to set a string as a value</li>
 * <li>hex - to set a hexadecimal string as a value</li>
 * <li>obj - to set a encapsulated ASN.1 value by JSON object
 * which is defined in {@link KJUR.asn1.ASN1Util.newObject}</li>
 * </ul>
 * NOTE: A parameter 'obj' have been supported
 * for "OCTET STRING, encapsulates" structure.
 * since asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).
 * @see KJUR.asn1.DERAbstractString - superclass
 * @example
 * // default constructor
 * o = new KJUR.asn1.DEROctetString();
 * // initialize with string
 * o = new KJUR.asn1.DEROctetString({str: "aaa"});
 * // initialize with hexadecimal string
 * o = new KJUR.asn1.DEROctetString({hex: "616161"});
 * // initialize with ASN1Util.newObject argument
 * o = new KJUR.asn1.DEROctetString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
 * // above generates a ASN.1 data like this:
 * // OCTET STRING, encapsulates {
 * //   SEQUENCE {
 * //     INTEGER 3
 * //     PrintableString 'aaa'
 * //     }
 * //   }
 */


KJUR.asn1.DEROctetString = function (params) {
  if (params !== undefined && typeof params.obj !== "undefined") {
    var o = KJUR.asn1.ASN1Util.newObject(params.obj);
    params.hex = o.getEncodedHex();
  }

  KJUR.asn1.DEROctetString.superclass.constructor.call(this, params);
  this.hT = "04";
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString); // ********************************************************************

/**
 * class for ASN.1 DER Null
 * @name KJUR.asn1.DERNull
 * @class class for ASN.1 DER Null
 * @extends KJUR.asn1.ASN1Object
 * @description
 * @see KJUR.asn1.ASN1Object - superclass
 */


KJUR.asn1.DERNull = function () {
  KJUR.asn1.DERNull.superclass.constructor.call(this);
  this.hT = "05";
  this.hTLV = "0500";
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object); // ********************************************************************

/**
 * class for ASN.1 DER ObjectIdentifier
 * @name KJUR.asn1.DERObjectIdentifier
 * @class class for ASN.1 DER ObjectIdentifier
 * @param {Array} params associative array of parameters (ex. {'oid': '2.5.4.5'})
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>oid - specify initial ASN.1 value(V) by a oid string (ex. 2.5.4.13)</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */


KJUR.asn1.DERObjectIdentifier = function (params) {
  var itox = function itox(i) {
    var h = i.toString(16);
    if (h.length == 1) h = '0' + h;
    return h;
  };

  var roidtox = function roidtox(roid) {
    var h = '';
    var bi = new _jsbn.BigInteger(roid, 10);
    var b = bi.toString(2);
    var padLen = 7 - b.length % 7;
    if (padLen == 7) padLen = 0;
    var bPad = '';

    for (var i = 0; i < padLen; i++) {
      bPad += '0';
    }

    b = bPad + b;

    for (var i = 0; i < b.length - 1; i += 7) {
      var b8 = b.substr(i, 7);
      if (i != b.length - 7) b8 = '1' + b8;
      h += itox(parseInt(b8, 2));
    }

    return h;
  };

  KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
  this.hT = "06";
  /**
   * set value by a hexadecimal string
   * @name setValueHex
   * @memberOf KJUR.asn1.DERObjectIdentifier#
   * @function
   * @param {String} newHexString hexadecimal value of OID bytes
   */

  this.setValueHex = function (newHexString) {
    this.hTLV = null;
    this.isModified = true;
    this.s = null;
    this.hV = newHexString;
  };
  /**
   * set value by a OID string<br/>
   * @name setValueOidString
   * @memberOf KJUR.asn1.DERObjectIdentifier#
   * @function
   * @param {String} oidString OID string (ex. 2.5.4.13)
   * @example
   * o = new KJUR.asn1.DERObjectIdentifier();
   * o.setValueOidString("2.5.4.13");
   */


  this.setValueOidString = function (oidString) {
    if (!oidString.match(/^[0-9.]+$/)) {
      throw "malformed oid string: " + oidString;
    }

    var h = '';
    var a = oidString.split('.');
    var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
    h += itox(i0);
    a.splice(0, 2);

    for (var i = 0; i < a.length; i++) {
      h += roidtox(a[i]);
    }

    this.hTLV = null;
    this.isModified = true;
    this.s = null;
    this.hV = h;
  };
  /**
   * set value by a OID name
   * @name setValueName
   * @memberOf KJUR.asn1.DERObjectIdentifier#
   * @function
   * @param {String} oidName OID name (ex. 'serverAuth')
   * @since 1.0.1
   * @description
   * OID name shall be defined in 'KJUR.asn1.x509.OID.name2oidList'.
   * Otherwise raise error.
   * @example
   * o = new KJUR.asn1.DERObjectIdentifier();
   * o.setValueName("serverAuth");
   */


  this.setValueName = function (oidName) {
    var oid = KJUR.asn1.x509.OID.name2oid(oidName);

    if (oid !== '') {
      this.setValueOidString(oid);
    } else {
      throw "DERObjectIdentifier oidName undefined: " + oidName;
    }
  };

  this.getFreshValueHex = function () {
    return this.hV;
  };

  if (params !== undefined) {
    if (typeof params === "string") {
      if (params.match(/^[0-2].[0-9.]+$/)) {
        this.setValueOidString(params);
      } else {
        this.setValueName(params);
      }
    } else if (params.oid !== undefined) {
      this.setValueOidString(params.oid);
    } else if (params.hex !== undefined) {
      this.setValueHex(params.hex);
    } else if (params.name !== undefined) {
      this.setValueName(params.name);
    }
  }
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object); // ********************************************************************

/**
 * class for ASN.1 DER Enumerated
 * @name KJUR.asn1.DEREnumerated
 * @class class for ASN.1 DER Enumerated
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>int - specify initial ASN.1 value(V) by integer value</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 * @example
 * new KJUR.asn1.DEREnumerated(123);
 * new KJUR.asn1.DEREnumerated({int: 123});
 * new KJUR.asn1.DEREnumerated({hex: '1fad'});
 */


KJUR.asn1.DEREnumerated = function (params) {
  KJUR.asn1.DEREnumerated.superclass.constructor.call(this);
  this.hT = "0a";
  /**
   * set value by Tom Wu's BigInteger object
   * @name setByBigInteger
   * @memberOf KJUR.asn1.DEREnumerated#
   * @function
   * @param {BigInteger} bigIntegerValue to set
   */

  this.setByBigInteger = function (bigIntegerValue) {
    this.hTLV = null;
    this.isModified = true;
    this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
  };
  /**
   * set value by integer value
   * @name setByInteger
   * @memberOf KJUR.asn1.DEREnumerated#
   * @function
   * @param {Integer} integer value to set
   */


  this.setByInteger = function (intValue) {
    var bi = new _jsbn.BigInteger(String(intValue), 10);
    this.setByBigInteger(bi);
  };
  /**
   * set value by integer value
   * @name setValueHex
   * @memberOf KJUR.asn1.DEREnumerated#
   * @function
   * @param {String} hexadecimal string of integer value
   * @description
   * <br/>
   * NOTE: Value shall be represented by minimum octet length of
   * two's complement representation.
   */


  this.setValueHex = function (newHexString) {
    this.hV = newHexString;
  };

  this.getFreshValueHex = function () {
    return this.hV;
  };

  if (typeof params != "undefined") {
    if (typeof params['int'] != "undefined") {
      this.setByInteger(params['int']);
    } else if (typeof params == "number") {
      this.setByInteger(params);
    } else if (typeof params['hex'] != "undefined") {
      this.setValueHex(params['hex']);
    }
  }
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object); // ********************************************************************

/**
 * class for ASN.1 DER UTF8String
 * @name KJUR.asn1.DERUTF8String
 * @class class for ASN.1 DER UTF8String
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */


KJUR.asn1.DERUTF8String = function (params) {
  KJUR.asn1.DERUTF8String.superclass.constructor.call(this, params);
  this.hT = "0c";
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString); // ********************************************************************

/**
 * class for ASN.1 DER NumericString
 * @name KJUR.asn1.DERNumericString
 * @class class for ASN.1 DER NumericString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */


KJUR.asn1.DERNumericString = function (params) {
  KJUR.asn1.DERNumericString.superclass.constructor.call(this, params);
  this.hT = "12";
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString); // ********************************************************************

/**
 * class for ASN.1 DER PrintableString
 * @name KJUR.asn1.DERPrintableString
 * @class class for ASN.1 DER PrintableString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */


KJUR.asn1.DERPrintableString = function (params) {
  KJUR.asn1.DERPrintableString.superclass.constructor.call(this, params);
  this.hT = "13";
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString); // ********************************************************************

/**
 * class for ASN.1 DER TeletexString
 * @name KJUR.asn1.DERTeletexString
 * @class class for ASN.1 DER TeletexString
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */


KJUR.asn1.DERTeletexString = function (params) {
  KJUR.asn1.DERTeletexString.superclass.constructor.call(this, params);
  this.hT = "14";
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString); // ********************************************************************

/**
 * class for ASN.1 DER IA5String
 * @name KJUR.asn1.DERIA5String
 * @class class for ASN.1 DER IA5String
 * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
 * @extends KJUR.asn1.DERAbstractString
 * @description
 * @see KJUR.asn1.DERAbstractString - superclass
 */


KJUR.asn1.DERIA5String = function (params) {
  KJUR.asn1.DERIA5String.superclass.constructor.call(this, params);
  this.hT = "16";
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString); // ********************************************************************

/**
 * class for ASN.1 DER UTCTime
 * @name KJUR.asn1.DERUTCTime
 * @class class for ASN.1 DER UTCTime
 * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
 * @extends KJUR.asn1.DERAbstractTime
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>str - specify initial ASN.1 value(V) by a string (ex.'130430235959Z')</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * <li>date - specify Date object.</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 * <h4>EXAMPLES</h4>
 * @example
 * d1 = new KJUR.asn1.DERUTCTime();
 * d1.setString('130430125959Z');
 *
 * d2 = new KJUR.asn1.DERUTCTime({'str': '130430125959Z'});
 * d3 = new KJUR.asn1.DERUTCTime({'date': new Date(Date.UTC(2015, 0, 31, 0, 0, 0, 0))});
 * d4 = new KJUR.asn1.DERUTCTime('130430125959Z');
 */


KJUR.asn1.DERUTCTime = function (params) {
  KJUR.asn1.DERUTCTime.superclass.constructor.call(this, params);
  this.hT = "17";
  /**
   * set value by a Date object<br/>
   * @name setByDate
   * @memberOf KJUR.asn1.DERUTCTime#
   * @function
   * @param {Date} dateObject Date object to set ASN.1 value(V)
   * @example
   * o = new KJUR.asn1.DERUTCTime();
   * o.setByDate(new Date("2016/12/31"));
   */

  this.setByDate = function (dateObject) {
    this.hTLV = null;
    this.isModified = true;
    this.date = dateObject;
    this.s = this.formatDate(this.date, 'utc');
    this.hV = stohex(this.s);
  };

  this.getFreshValueHex = function () {
    if (typeof this.date == "undefined" && typeof this.s == "undefined") {
      this.date = new Date();
      this.s = this.formatDate(this.date, 'utc');
      this.hV = stohex(this.s);
    }

    return this.hV;
  };

  if (params !== undefined) {
    if (params.str !== undefined) {
      this.setString(params.str);
    } else if (typeof params == "string" && params.match(/^[0-9]{12}Z$/)) {
      this.setString(params);
    } else if (params.hex !== undefined) {
      this.setStringHex(params.hex);
    } else if (params.date !== undefined) {
      this.setByDate(params.date);
    }
  }
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime); // ********************************************************************

/**
 * class for ASN.1 DER GeneralizedTime
 * @name KJUR.asn1.DERGeneralizedTime
 * @class class for ASN.1 DER GeneralizedTime
 * @param {Array} params associative array of parameters (ex. {'str': '20130430235959Z'})
 * @property {Boolean} withMillis flag to show milliseconds or not
 * @extends KJUR.asn1.DERAbstractTime
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>str - specify initial ASN.1 value(V) by a string (ex.'20130430235959Z')</li>
 * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
 * <li>date - specify Date object.</li>
 * <li>millis - specify flag to show milliseconds (from 1.0.6)</li>
 * </ul>
 * NOTE1: 'params' can be omitted.
 * NOTE2: 'withMillis' property is supported from asn1 1.0.6.
 */


KJUR.asn1.DERGeneralizedTime = function (params) {
  KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, params);
  this.hT = "18";
  this.withMillis = false;
  /**
   * set value by a Date object
   * @name setByDate
   * @memberOf KJUR.asn1.DERGeneralizedTime#
   * @function
   * @param {Date} dateObject Date object to set ASN.1 value(V)
   * @example
   * When you specify UTC time, use 'Date.UTC' method like this:<br/>
   * o1 = new DERUTCTime();
   * o1.setByDate(date);
   *
   * date = new Date(Date.UTC(2015, 0, 31, 23, 59, 59, 0)); #2015JAN31 23:59:59
   */

  this.setByDate = function (dateObject) {
    this.hTLV = null;
    this.isModified = true;
    this.date = dateObject;
    this.s = this.formatDate(this.date, 'gen', this.withMillis);
    this.hV = stohex(this.s);
  };

  this.getFreshValueHex = function () {
    if (this.date === undefined && this.s === undefined) {
      this.date = new Date();
      this.s = this.formatDate(this.date, 'gen', this.withMillis);
      this.hV = stohex(this.s);
    }

    return this.hV;
  };

  if (params !== undefined) {
    if (params.str !== undefined) {
      this.setString(params.str);
    } else if (typeof params == "string" && params.match(/^[0-9]{14}Z$/)) {
      this.setString(params);
    } else if (params.hex !== undefined) {
      this.setStringHex(params.hex);
    } else if (params.date !== undefined) {
      this.setByDate(params.date);
    }

    if (params.millis === true) {
      this.withMillis = true;
    }
  }
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime); // ********************************************************************

/**
 * class for ASN.1 DER Sequence
 * @name KJUR.asn1.DERSequence
 * @class class for ASN.1 DER Sequence
 * @extends KJUR.asn1.DERAbstractStructured
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>array - specify array of ASN1Object to set elements of content</li>
 * </ul>
 * NOTE: 'params' can be omitted.
 */


KJUR.asn1.DERSequence = function (params) {
  KJUR.asn1.DERSequence.superclass.constructor.call(this, params);
  this.hT = "30";

  this.getFreshValueHex = function () {
    var h = '';

    for (var i = 0; i < this.asn1Array.length; i++) {
      var asn1Obj = this.asn1Array[i];
      h += asn1Obj.getEncodedHex();
    }

    this.hV = h;
    return this.hV;
  };
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured); // ********************************************************************

/**
 * class for ASN.1 DER Set
 * @name KJUR.asn1.DERSet
 * @class class for ASN.1 DER Set
 * @extends KJUR.asn1.DERAbstractStructured
 * @description
 * <br/>
 * As for argument 'params' for constructor, you can specify one of
 * following properties:
 * <ul>
 * <li>array - specify array of ASN1Object to set elements of content</li>
 * <li>sortflag - flag for sort (default: true). ASN.1 BER is not sorted in 'SET OF'.</li>
 * </ul>
 * NOTE1: 'params' can be omitted.<br/>
 * NOTE2: sortflag is supported since 1.0.5.
 */


KJUR.asn1.DERSet = function (params) {
  KJUR.asn1.DERSet.superclass.constructor.call(this, params);
  this.hT = "31";
  this.sortFlag = true; // item shall be sorted only in ASN.1 DER

  this.getFreshValueHex = function () {
    var a = new Array();

    for (var i = 0; i < this.asn1Array.length; i++) {
      var asn1Obj = this.asn1Array[i];
      a.push(asn1Obj.getEncodedHex());
    }

    if (this.sortFlag == true) a.sort();
    this.hV = a.join('');
    return this.hV;
  };

  if (typeof params != "undefined") {
    if (typeof params.sortflag != "undefined" && params.sortflag == false) this.sortFlag = false;
  }
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured); // ********************************************************************

/**
 * class for ASN.1 DER TaggedObject
 * @name KJUR.asn1.DERTaggedObject
 * @class class for ASN.1 DER TaggedObject
 * @extends KJUR.asn1.ASN1Object
 * @description
 * <br/>
 * Parameter 'tagNoNex' is ASN.1 tag(T) value for this object.
 * For example, if you find '[1]' tag in a ASN.1 dump,
 * 'tagNoHex' will be 'a1'.
 * <br/>
 * As for optional argument 'params' for constructor, you can specify *ANY* of
 * following properties:
 * <ul>
 * <li>explicit - specify true if this is explicit tag otherwise false
 *     (default is 'true').</li>
 * <li>tag - specify tag (default is 'a0' which means [0])</li>
 * <li>obj - specify ASN1Object which is tagged</li>
 * </ul>
 * @example
 * d1 = new KJUR.asn1.DERUTF8String({'str':'a'});
 * d2 = new KJUR.asn1.DERTaggedObject({'obj': d1});
 * hex = d2.getEncodedHex();
 */


KJUR.asn1.DERTaggedObject = function (params) {
  KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
  this.hT = "a0";
  this.hV = '';
  this.isExplicit = true;
  this.asn1Object = null;
  /**
   * set value by an ASN1Object
   * @name setString
   * @memberOf KJUR.asn1.DERTaggedObject#
   * @function
   * @param {Boolean} isExplicitFlag flag for explicit/implicit tag
   * @param {Integer} tagNoHex hexadecimal string of ASN.1 tag
   * @param {ASN1Object} asn1Object ASN.1 to encapsulate
   */

  this.setASN1Object = function (isExplicitFlag, tagNoHex, asn1Object) {
    this.hT = tagNoHex;
    this.isExplicit = isExplicitFlag;
    this.asn1Object = asn1Object;

    if (this.isExplicit) {
      this.hV = this.asn1Object.getEncodedHex();
      this.hTLV = null;
      this.isModified = true;
    } else {
      this.hV = null;
      this.hTLV = asn1Object.getEncodedHex();
      this.hTLV = this.hTLV.replace(/^../, tagNoHex);
      this.isModified = false;
    }
  };

  this.getFreshValueHex = function () {
    return this.hV;
  };

  if (typeof params != "undefined") {
    if (typeof params['tag'] != "undefined") {
      this.hT = params['tag'];
    }

    if (typeof params['explicit'] != "undefined") {
      this.isExplicit = params['explicit'];
    }

    if (typeof params['obj'] != "undefined") {
      this.asn1Object = params['obj'];
      this.setASN1Object(this.isExplicit, this.hT, this.asn1Object);
    }
  }
};

_yahoo.YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmNyeXB0XFxsaWJcXGpzcnNhc2lnblxcYXNuMS0xLjAuanMiXSwibmFtZXMiOlsiS0pVUiIsImFzbjEiLCJBU04xVXRpbCIsImludGVnZXJUb0J5dGVIZXgiLCJpIiwiaCIsInRvU3RyaW5nIiwibGVuZ3RoIiwiYmlnSW50VG9NaW5Ud29zQ29tcGxlbWVudHNIZXgiLCJiaWdJbnRlZ2VyVmFsdWUiLCJzdWJzdHIiLCJtYXRjaCIsImhQb3MiLCJ4b3JMZW4iLCJoTWFzayIsImJpTWFzayIsIkJpZ0ludGVnZXIiLCJiaU5lZyIsInhvciIsImFkZCIsIk9ORSIsInJlcGxhY2UiLCJnZXRQRU1TdHJpbmdGcm9tSGV4IiwiZGF0YUhleCIsInBlbUhlYWRlciIsImhleHRvcGVtIiwibmV3T2JqZWN0IiwicGFyYW0iLCJfS0pVUiIsIl9LSlVSX2FzbjEiLCJfREVSQm9vbGVhbiIsIkRFUkJvb2xlYW4iLCJfREVSSW50ZWdlciIsIkRFUkludGVnZXIiLCJfREVSQml0U3RyaW5nIiwiREVSQml0U3RyaW5nIiwiX0RFUk9jdGV0U3RyaW5nIiwiREVST2N0ZXRTdHJpbmciLCJfREVSTnVsbCIsIkRFUk51bGwiLCJfREVST2JqZWN0SWRlbnRpZmllciIsIkRFUk9iamVjdElkZW50aWZpZXIiLCJfREVSRW51bWVyYXRlZCIsIkRFUkVudW1lcmF0ZWQiLCJfREVSVVRGOFN0cmluZyIsIkRFUlVURjhTdHJpbmciLCJfREVSTnVtZXJpY1N0cmluZyIsIkRFUk51bWVyaWNTdHJpbmciLCJfREVSUHJpbnRhYmxlU3RyaW5nIiwiREVSUHJpbnRhYmxlU3RyaW5nIiwiX0RFUlRlbGV0ZXhTdHJpbmciLCJERVJUZWxldGV4U3RyaW5nIiwiX0RFUklBNVN0cmluZyIsIkRFUklBNVN0cmluZyIsIl9ERVJVVENUaW1lIiwiREVSVVRDVGltZSIsIl9ERVJHZW5lcmFsaXplZFRpbWUiLCJERVJHZW5lcmFsaXplZFRpbWUiLCJfREVSU2VxdWVuY2UiLCJERVJTZXF1ZW5jZSIsIl9ERVJTZXQiLCJERVJTZXQiLCJfREVSVGFnZ2VkT2JqZWN0IiwiREVSVGFnZ2VkT2JqZWN0IiwiX25ld09iamVjdCIsImtleXMiLCJPYmplY3QiLCJrZXkiLCJpbmRleE9mIiwicGFyYW1MaXN0IiwiYSIsImFzbjFPYmoiLCJwdXNoIiwidGFnUGFyYW0iLCJwcm90b3R5cGUiLCJjYWxsIiwib2JqIiwidGFnIiwiZXhwbGljaXQiLCJuZXdQYXJhbSIsInVuZGVmaW5lZCIsImpzb25Ub0FTTjFIRVgiLCJnZXRFbmNvZGVkSGV4Iiwib2lkSGV4VG9JbnQiLCJoZXgiLCJzIiwiaTAxIiwicGFyc2VJbnQiLCJpMCIsIk1hdGgiLCJmbG9vciIsImkxIiwiYmluYnVmIiwidmFsdWUiLCJiaW4iLCJzbGljZSIsImJpIiwib2lkSW50VG9IZXgiLCJvaWRTdHJpbmciLCJpdG94Iiwicm9pZHRveCIsInJvaWQiLCJiIiwicGFkTGVuIiwiYlBhZCIsImI4Iiwic3BsaXQiLCJzcGxpY2UiLCJBU04xT2JqZWN0IiwiaXNNb2RpZmllZCIsImhUTFYiLCJoVCIsImhMIiwiaFYiLCJnZXRMZW5ndGhIZXhGcm9tVmFsdWUiLCJuIiwiaE4iLCJoTmxlbiIsImhlYWQiLCJnZXRGcmVzaFZhbHVlSGV4IiwiZ2V0VmFsdWVIZXgiLCJERVJBYnN0cmFjdFN0cmluZyIsInBhcmFtcyIsInN1cGVyY2xhc3MiLCJjb25zdHJ1Y3RvciIsImdldFN0cmluZyIsInNldFN0cmluZyIsIm5ld1MiLCJzdG9oZXgiLCJzZXRTdHJpbmdIZXgiLCJuZXdIZXhTdHJpbmciLCJZQUhPTyIsImxhbmciLCJleHRlbmQiLCJERVJBYnN0cmFjdFRpbWUiLCJkYXRlIiwibG9jYWxEYXRlVG9VVEMiLCJkIiwidXRjIiwiZ2V0VGltZSIsImdldFRpbWV6b25lT2Zmc2V0IiwidXRjRGF0ZSIsIkRhdGUiLCJmb3JtYXREYXRlIiwiZGF0ZU9iamVjdCIsInR5cGUiLCJ3aXRoTWlsbGlzIiwicGFkIiwiemVyb1BhZGRpbmciLCJ5ZWFyIiwiU3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzZWMiLCJnZXRTZWNvbmRzIiwibWlsbGlzIiwiZ2V0TWlsbGlzZWNvbmRzIiwic01pbGxpcyIsImxlbiIsIkFycmF5Iiwiam9pbiIsInNldEJ5RGF0ZVZhbHVlIiwiVVRDIiwic2V0QnlEYXRlIiwiREVSQWJzdHJhY3RTdHJ1Y3R1cmVkIiwiYXNuMUFycmF5Iiwic2V0QnlBU04xT2JqZWN0QXJyYXkiLCJhc24xT2JqZWN0QXJyYXkiLCJhcHBlbmRBU04xT2JqZWN0IiwiYXNuMU9iamVjdCIsInNldEJ5QmlnSW50ZWdlciIsInNldEJ5SW50ZWdlciIsImludFZhbHVlIiwic2V0VmFsdWVIZXgiLCJvIiwic2V0SGV4VmFsdWVJbmNsdWRpbmdVbnVzZWRCaXRzIiwibmV3SGV4U3RyaW5nSW5jbHVkaW5nVW51c2VkQml0cyIsInNldFVudXNlZEJpdHNBbmRIZXhWYWx1ZSIsInVudXNlZEJpdHMiLCJoVmFsdWUiLCJoVW51c2VkQml0cyIsInNldEJ5QmluYXJ5U3RyaW5nIiwiYmluYXJ5U3RyaW5nIiwieCIsInNldEJ5Qm9vbGVhbkFycmF5IiwiYm9vbGVhbkFycmF5IiwibmV3RmFsc2VBcnJheSIsIm5MZW5ndGgiLCJ0b0xvd2VyQ2FzZSIsInNldFZhbHVlT2lkU3RyaW5nIiwic2V0VmFsdWVOYW1lIiwib2lkTmFtZSIsIm9pZCIsIng1MDkiLCJPSUQiLCJuYW1lMm9pZCIsIm5hbWUiLCJzdHIiLCJzb3J0RmxhZyIsInNvcnQiLCJzb3J0ZmxhZyIsImlzRXhwbGljaXQiLCJzZXRBU04xT2JqZWN0IiwiaXNFeHBsaWNpdEZsYWciLCJ0YWdOb0hleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7QUFDQTs7QUFkQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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TixDQUFXQyxNQUFYLENBQWtCckksSUFBSSxDQUFDQyxJQUFMLENBQVU4RCxlQUE1QixFQUE2Qy9ELElBQUksQ0FBQ0MsSUFBTCxDQUFVMkcsVUFBdkQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGFzbjEtMS4wLjEzLmpzIChjKSAyMDEzLTIwMTcgS2VuamkgVXJ1c2hpbWEgfCBranVyLmdpdGh1Yi5jb20vanNyc2FzaWduL2xpY2Vuc2VcbiAqL1xuLypcbiAqIGFzbjEuanMgLSBBU04uMSBERVIgZW5jb2RlciBjbGFzc2VzXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLTIwMTcgS2VuamkgVXJ1c2hpbWEgKGtlbmppLnVydXNoaW1hQGdtYWlsLmNvbSlcbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwczovL2tqdXIuZ2l0aHViLmlvL2pzcnNhc2lnbi9saWNlbnNlXG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBhbmQgbGljZW5zZSBub3RpY2Ugc2hhbGwgYmVcbiAqIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICovXG5pbXBvcnQgeyBCaWdJbnRlZ2VyIH0gZnJvbSBcIi4uL2pzYm4vanNiblwiO1xuaW1wb3J0IHsgWUFIT08gfSBmcm9tIFwiLi95YWhvb1wiO1xuLyoqXG4gKiBAZmlsZU92ZXJ2aWV3XG4gKiBAbmFtZSBhc24xLTEuMC5qc1xuICogQGF1dGhvciBLZW5qaSBVcnVzaGltYSBrZW5qaS51cnVzaGltYUBnbWFpbC5jb21cbiAqIEB2ZXJzaW9uIGFzbjEgMS4wLjEzICgyMDE3LUp1bi0wMilcbiAqIEBzaW5jZSBqc3JzYXNpZ24gMi4xXG4gKiBAbGljZW5zZSA8YSBocmVmPVwiaHR0cHM6Ly9ranVyLmdpdGh1Yi5pby9qc3JzYXNpZ24vbGljZW5zZS9cIj5NSVQgTGljZW5zZTwvYT5cbiAqL1xuLyoqXG4gKiBranVyJ3MgY2xhc3MgbGlicmFyeSBuYW1lIHNwYWNlXG4gKiA8cD5cbiAqIFRoaXMgbmFtZSBzcGFjZSBwcm92aWRlcyBmb2xsb3dpbmcgbmFtZSBzcGFjZXM6XG4gKiA8dWw+XG4gKiA8bGk+e0BsaW5rIEtKVVIuYXNuMX0gLSBBU04uMSBwcmltaXRpdmUgaGV4YWRlY2ltYWwgZW5jb2RlcjwvbGk+XG4gKiA8bGk+e0BsaW5rIEtKVVIuYXNuMS54NTA5fSAtIEFTTi4xIHN0cnVjdHVyZSBmb3IgWC41MDkgY2VydGlmaWNhdGUgYW5kIENSTDwvbGk+XG4gKiA8bGk+e0BsaW5rIEtKVVIuY3J5cHRvfSAtIEphdmEgQ3J5cHRvZ3JhcGhpYyBFeHRlbnNpb24oSkNFKSBzdHlsZSBNZXNzYWdlRGlnZXN0L1NpZ25hdHVyZVxuICogY2xhc3MgYW5kIHV0aWxpdGllczwvbGk+XG4gKiA8L3VsPlxuICogPC9wPlxuICogTk9URTogUGxlYXNlIGlnbm9yZSBtZXRob2Qgc3VtbWFyeSBhbmQgZG9jdW1lbnQgb2YgdGhpcyBuYW1lc3BhY2UuIFRoaXMgY2F1c2VkIGJ5IGEgYnVnIG9mIGpzZG9jMi5cbiAqIEBuYW1lIEtKVVJcbiAqIEBuYW1lc3BhY2Uga2p1cidzIGNsYXNzIGxpYnJhcnkgbmFtZSBzcGFjZVxuICovXG5leHBvcnQgdmFyIEtKVVIgPSB7fTtcbi8qKlxuICoga2p1cidzIEFTTi4xIGNsYXNzIGxpYnJhcnkgbmFtZSBzcGFjZVxuICogPHA+XG4gKiBUaGlzIGlzIElUVS1UIFguNjkwIEFTTi4xIERFUiBlbmNvZGVyIGNsYXNzIGxpYnJhcnkgYW5kXG4gKiBjbGFzcyBzdHJ1Y3R1cmUgYW5kIG1ldGhvZHMgaXMgdmVyeSBzaW1pbGFyIHRvXG4gKiBvcmcuYm91bmN5Y2FzdGxlLmFzbjEgcGFja2FnZSBvZlxuICogd2VsbCBrbm93biBCb3VuY3lDYXNsdGUgQ3J5cHRvZ3JhcGh5IExpYnJhcnkuXG4gKiA8aDQ+UFJPVklESU5HIEFTTi4xIFBSSU1JVElWRVM8L2g0PlxuICogSGVyZSBhcmUgQVNOLjEgREVSIHByaW1pdGl2ZSBjbGFzc2VzLlxuICogPHVsPlxuICogPGxpPjB4MDEge0BsaW5rIEtKVVIuYXNuMS5ERVJCb29sZWFufTwvbGk+XG4gKiA8bGk+MHgwMiB7QGxpbmsgS0pVUi5hc24xLkRFUkludGVnZXJ9PC9saT5cbiAqIDxsaT4weDAzIHtAbGluayBLSlVSLmFzbjEuREVSQml0U3RyaW5nfTwvbGk+XG4gKiA8bGk+MHgwNCB7QGxpbmsgS0pVUi5hc24xLkRFUk9jdGV0U3RyaW5nfTwvbGk+XG4gKiA8bGk+MHgwNSB7QGxpbmsgS0pVUi5hc24xLkRFUk51bGx9PC9saT5cbiAqIDxsaT4weDA2IHtAbGluayBLSlVSLmFzbjEuREVST2JqZWN0SWRlbnRpZmllcn08L2xpPlxuICogPGxpPjB4MGEge0BsaW5rIEtKVVIuYXNuMS5ERVJFbnVtZXJhdGVkfTwvbGk+XG4gKiA8bGk+MHgwYyB7QGxpbmsgS0pVUi5hc24xLkRFUlVURjhTdHJpbmd9PC9saT5cbiAqIDxsaT4weDEyIHtAbGluayBLSlVSLmFzbjEuREVSTnVtZXJpY1N0cmluZ308L2xpPlxuICogPGxpPjB4MTMge0BsaW5rIEtKVVIuYXNuMS5ERVJQcmludGFibGVTdHJpbmd9PC9saT5cbiAqIDxsaT4weDE0IHtAbGluayBLSlVSLmFzbjEuREVSVGVsZXRleFN0cmluZ308L2xpPlxuICogPGxpPjB4MTYge0BsaW5rIEtKVVIuYXNuMS5ERVJJQTVTdHJpbmd9PC9saT5cbiAqIDxsaT4weDE3IHtAbGluayBLSlVSLmFzbjEuREVSVVRDVGltZX08L2xpPlxuICogPGxpPjB4MTgge0BsaW5rIEtKVVIuYXNuMS5ERVJHZW5lcmFsaXplZFRpbWV9PC9saT5cbiAqIDxsaT4weDMwIHtAbGluayBLSlVSLmFzbjEuREVSU2VxdWVuY2V9PC9saT5cbiAqIDxsaT4weDMxIHtAbGluayBLSlVSLmFzbjEuREVSU2V0fTwvbGk+XG4gKiA8L3VsPlxuICogPGg0Pk9USEVSIEFTTi4xIENMQVNTRVM8L2g0PlxuICogPHVsPlxuICogPGxpPntAbGluayBLSlVSLmFzbjEuQVNOMU9iamVjdH08L2xpPlxuICogPGxpPntAbGluayBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmd9PC9saT5cbiAqIDxsaT57QGxpbmsgS0pVUi5hc24xLkRFUkFic3RyYWN0VGltZX08L2xpPlxuICogPGxpPntAbGluayBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJ1Y3R1cmVkfTwvbGk+XG4gKiA8bGk+e0BsaW5rIEtKVVIuYXNuMS5ERVJUYWdnZWRPYmplY3R9PC9saT5cbiAqIDwvdWw+XG4gKiA8aDQ+U1VCIE5BTUUgU1BBQ0VTPC9oND5cbiAqIDx1bD5cbiAqIDxsaT57QGxpbmsgS0pVUi5hc24xLmNhZGVzfSAtIENBZEVTIGxvbmcgdGVybSBzaWduYXR1cmUgZm9ybWF0PC9saT5cbiAqIDxsaT57QGxpbmsgS0pVUi5hc24xLmNtc30gLSBDcnlwdG9ncmFwaGljIE1lc3NhZ2UgU3ludGF4PC9saT5cbiAqIDxsaT57QGxpbmsgS0pVUi5hc24xLmNzcn0gLSBDZXJ0aWZpY2F0ZSBTaWduaW5nIFJlcXVlc3QgKENTUi9QS0NTIzEwKTwvbGk+XG4gKiA8bGk+e0BsaW5rIEtKVVIuYXNuMS50c3B9IC0gUkZDIDMxNjEgVGltZXN0YW1waW5nIFByb3RvY29sIEZvcm1hdDwvbGk+XG4gKiA8bGk+e0BsaW5rIEtKVVIuYXNuMS54NTA5fSAtIFJGQyA1MjgwIFguNTA5IGNlcnRpZmljYXRlIGFuZCBDUkw8L2xpPlxuICogPC91bD5cbiAqIDwvcD5cbiAqIE5PVEU6IFBsZWFzZSBpZ25vcmUgbWV0aG9kIHN1bW1hcnkgYW5kIGRvY3VtZW50IG9mIHRoaXMgbmFtZXNwYWNlLlxuICogVGhpcyBjYXVzZWQgYnkgYSBidWcgb2YganNkb2MyLlxuICogQG5hbWUgS0pVUi5hc24xXG4gKiBAbmFtZXNwYWNlXG4gKi9cbmlmICh0eXBlb2YgS0pVUi5hc24xID09IFwidW5kZWZpbmVkXCIgfHwgIUtKVVIuYXNuMSlcbiAgICBLSlVSLmFzbjEgPSB7fTtcbi8qKlxuICogQVNOMSB1dGlsaXRpZXMgY2xhc3NcbiAqIEBuYW1lIEtKVVIuYXNuMS5BU04xVXRpbFxuICogQGNsYXNzIEFTTjEgdXRpbGl0aWVzIGNsYXNzXG4gKiBAc2luY2UgYXNuMSAxLjAuMlxuICovXG5LSlVSLmFzbjEuQVNOMVV0aWwgPSBuZXcgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW50ZWdlclRvQnl0ZUhleCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBoID0gaS50b1N0cmluZygxNik7XG4gICAgICAgIGlmICgoaC5sZW5ndGggJSAyKSA9PSAxKVxuICAgICAgICAgICAgaCA9ICcwJyArIGg7XG4gICAgICAgIHJldHVybiBoO1xuICAgIH07XG4gICAgdGhpcy5iaWdJbnRUb01pblR3b3NDb21wbGVtZW50c0hleCA9IGZ1bmN0aW9uIChiaWdJbnRlZ2VyVmFsdWUpIHtcbiAgICAgICAgdmFyIGggPSBiaWdJbnRlZ2VyVmFsdWUudG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoaC5zdWJzdHIoMCwgMSkgIT0gJy0nKSB7XG4gICAgICAgICAgICBpZiAoaC5sZW5ndGggJSAyID09IDEpIHtcbiAgICAgICAgICAgICAgICBoID0gJzAnICsgaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghaC5tYXRjaCgvXlswLTddLykpIHtcbiAgICAgICAgICAgICAgICAgICAgaCA9ICcwMCcgKyBoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoUG9zID0gaC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB2YXIgeG9yTGVuID0gaFBvcy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoeG9yTGVuICUgMiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgeG9yTGVuICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIWgubWF0Y2goL15bMC03XS8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHhvckxlbiArPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoTWFzayA9ICcnO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4b3JMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGhNYXNrICs9ICdmJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBiaU1hc2sgPSBuZXcgQmlnSW50ZWdlcihoTWFzaywgMTYpO1xuICAgICAgICAgICAgdmFyIGJpTmVnID0gYmlNYXNrLnhvcihiaWdJbnRlZ2VyVmFsdWUpLmFkZChCaWdJbnRlZ2VyLk9ORSk7XG4gICAgICAgICAgICBoID0gYmlOZWcudG9TdHJpbmcoMTYpLnJlcGxhY2UoL14tLywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogZ2V0IFBFTSBzdHJpbmcgZnJvbSBoZXhhZGVjaW1hbCBkYXRhIGFuZCBoZWFkZXIgc3RyaW5nXG4gICAgICogQG5hbWUgZ2V0UEVNU3RyaW5nRnJvbUhleFxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuQVNOMVV0aWxcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YUhleCBoZXhhZGVjaW1hbCBzdHJpbmcgb2YgUEVNIGJvZHlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGVtSGVhZGVyIFBFTSBoZWFkZXIgc3RyaW5nIChleC4gJ1JTQSBQUklWQVRFIEtFWScpXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBQRU0gZm9ybWF0dGVkIHN0cmluZyBvZiBpbnB1dCBkYXRhXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogVGhpcyBtZXRob2QgY29udmVydHMgYSBoZXhhZGVjaW1hbCBzdHJpbmcgdG8gYSBQRU0gc3RyaW5nIHdpdGhcbiAgICAgKiBhIHNwZWNpZmllZCBoZWFkZXIuIEl0cyBsaW5lIGJyZWFrIHdpbGwgYmUgQ1JMRihcIlxcclxcblwiKS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIHZhciBwZW0gID0gS0pVUi5hc24xLkFTTjFVdGlsLmdldFBFTVN0cmluZ0Zyb21IZXgoJzYxNjE2MScsICdSU0EgUFJJVkFURSBLRVknKTtcbiAgICAgKiAvLyB2YWx1ZSBvZiBwZW0gd2lsbCBiZTpcbiAgICAgKiAtLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbiAgICAgKiBZV0ZoXG4gICAgICogLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuICAgICAqL1xuICAgIHRoaXMuZ2V0UEVNU3RyaW5nRnJvbUhleCA9IGZ1bmN0aW9uIChkYXRhSGV4LCBwZW1IZWFkZXIpIHtcbiAgICAgICAgcmV0dXJuIGhleHRvcGVtKGRhdGFIZXgsIHBlbUhlYWRlcik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBnZW5lcmF0ZSBBU04xT2JqZWN0IHNwZWNpZmVkIGJ5IEpTT04gcGFyYW1ldGVyc1xuICAgICAqIEBuYW1lIG5ld09iamVjdFxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuQVNOMVV0aWxcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXJhbSBKU09OIHBhcmFtZXRlciB0byBnZW5lcmF0ZSBBU04xT2JqZWN0XG4gICAgICogQHJldHVybiB7S0pVUi5hc24xLkFTTjFPYmplY3R9IGdlbmVyYXRlZCBvYmplY3RcbiAgICAgKiBAc2luY2UgYXNuMSAxLjAuM1xuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIGdlbmVyYXRlIGFueSBBU04xT2JqZWN0IHNwZWNpZmllZCBieSBKU09OIHBhcmFtXG4gICAgICogaW5jbHVkaW5nIEFTTi4xIHByaW1pdGl2ZSBvciBzdHJ1Y3R1cmVkLlxuICAgICAqIEdlbmVyYWxseSAncGFyYW0nIGNhbiBiZSBkZXNjcmliZWQgYXMgZm9sbG93czpcbiAgICAgKiA8YmxvY2txdW90ZT5cbiAgICAgKiB7VFlQRS1PRi1BU05PQko6IEFTTjFPQkotUEFSQU1FVEVSfVxuICAgICAqIDwvYmxvY2txdW90ZT5cbiAgICAgKiAnVFlQRS1PRi1BU04xT0JKJyBjYW4gYmUgb25lIG9mIGZvbGxvd2luZyBzeW1ib2xzOlxuICAgICAqIDx1bD5cbiAgICAgKiA8bGk+J2Jvb2wnIC0gREVSQm9vbGVhbjwvbGk+XG4gICAgICogPGxpPidpbnQnIC0gREVSSW50ZWdlcjwvbGk+XG4gICAgICogPGxpPidiaXRzdHInIC0gREVSQml0U3RyaW5nPC9saT5cbiAgICAgKiA8bGk+J29jdHN0cicgLSBERVJPY3RldFN0cmluZzwvbGk+XG4gICAgICogPGxpPidudWxsJyAtIERFUk51bGw8L2xpPlxuICAgICAqIDxsaT4nb2lkJyAtIERFUk9iamVjdElkZW50aWZpZXI8L2xpPlxuICAgICAqIDxsaT4nZW51bScgLSBERVJFbnVtZXJhdGVkPC9saT5cbiAgICAgKiA8bGk+J3V0ZjhzdHInIC0gREVSVVRGOFN0cmluZzwvbGk+XG4gICAgICogPGxpPidudW1zdHInIC0gREVSTnVtZXJpY1N0cmluZzwvbGk+XG4gICAgICogPGxpPidwcm5zdHInIC0gREVSUHJpbnRhYmxlU3RyaW5nPC9saT5cbiAgICAgKiA8bGk+J3RlbHN0cicgLSBERVJUZWxldGV4U3RyaW5nPC9saT5cbiAgICAgKiA8bGk+J2lhNXN0cicgLSBERVJJQTVTdHJpbmc8L2xpPlxuICAgICAqIDxsaT4ndXRjdGltZScgLSBERVJVVENUaW1lPC9saT5cbiAgICAgKiA8bGk+J2dlbnRpbWUnIC0gREVSR2VuZXJhbGl6ZWRUaW1lPC9saT5cbiAgICAgKiA8bGk+J3NlcScgLSBERVJTZXF1ZW5jZTwvbGk+XG4gICAgICogPGxpPidzZXQnIC0gREVSU2V0PC9saT5cbiAgICAgKiA8bGk+J3RhZycgLSBERVJUYWdnZWRPYmplY3Q8L2xpPlxuICAgICAqIDwvdWw+XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBuZXdPYmplY3Qoeydwcm5zdHInOiAnYWFhJ30pO1xuICAgICAqIG5ld09iamVjdCh7J3NlcSc6IFt7J2ludCc6IDN9LCB7J3BybnN0cic6ICdhYWEnfV19KVxuICAgICAqIC8vIEFTTi4xIFRhZ2dlZCBPYmplY3RcbiAgICAgKiBuZXdPYmplY3Qoeyd0YWcnOiB7J3RhZyc6ICdhMScsXG4gICAgICogICAgICAgICAgICAgICAgICAgICdleHBsaWNpdCc6IHRydWUsXG4gICAgICogICAgICAgICAgICAgICAgICAgICdvYmonOiB7J3NlcSc6IFt7J2ludCc6IDN9LCB7J3BybnN0cic6ICdhYWEnfV19fX0pO1xuICAgICAqIC8vIG1vcmUgc2ltcGxlIHJlcHJlc2VudGF0aW9uIG9mIEFTTi4xIFRhZ2dlZCBPYmplY3RcbiAgICAgKiBuZXdPYmplY3Qoeyd0YWcnOiBbJ2ExJyxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgeydzZXEnOiBbXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgeydpbnQnOiAzfSxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICB7J3BybnN0cic6ICdhYWEnfV19XG4gICAgICogICAgICAgICAgICAgICAgICAgXX0pO1xuICAgICAqL1xuICAgIHRoaXMubmV3T2JqZWN0ID0gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIHZhciBfS0pVUiA9IEtKVVIsIF9LSlVSX2FzbjEgPSBfS0pVUi5hc24xLCBfREVSQm9vbGVhbiA9IF9LSlVSX2FzbjEuREVSQm9vbGVhbiwgX0RFUkludGVnZXIgPSBfS0pVUl9hc24xLkRFUkludGVnZXIsIF9ERVJCaXRTdHJpbmcgPSBfS0pVUl9hc24xLkRFUkJpdFN0cmluZywgX0RFUk9jdGV0U3RyaW5nID0gX0tKVVJfYXNuMS5ERVJPY3RldFN0cmluZywgX0RFUk51bGwgPSBfS0pVUl9hc24xLkRFUk51bGwsIF9ERVJPYmplY3RJZGVudGlmaWVyID0gX0tKVVJfYXNuMS5ERVJPYmplY3RJZGVudGlmaWVyLCBfREVSRW51bWVyYXRlZCA9IF9LSlVSX2FzbjEuREVSRW51bWVyYXRlZCwgX0RFUlVURjhTdHJpbmcgPSBfS0pVUl9hc24xLkRFUlVURjhTdHJpbmcsIF9ERVJOdW1lcmljU3RyaW5nID0gX0tKVVJfYXNuMS5ERVJOdW1lcmljU3RyaW5nLCBfREVSUHJpbnRhYmxlU3RyaW5nID0gX0tKVVJfYXNuMS5ERVJQcmludGFibGVTdHJpbmcsIF9ERVJUZWxldGV4U3RyaW5nID0gX0tKVVJfYXNuMS5ERVJUZWxldGV4U3RyaW5nLCBfREVSSUE1U3RyaW5nID0gX0tKVVJfYXNuMS5ERVJJQTVTdHJpbmcsIF9ERVJVVENUaW1lID0gX0tKVVJfYXNuMS5ERVJVVENUaW1lLCBfREVSR2VuZXJhbGl6ZWRUaW1lID0gX0tKVVJfYXNuMS5ERVJHZW5lcmFsaXplZFRpbWUsIF9ERVJTZXF1ZW5jZSA9IF9LSlVSX2FzbjEuREVSU2VxdWVuY2UsIF9ERVJTZXQgPSBfS0pVUl9hc24xLkRFUlNldCwgX0RFUlRhZ2dlZE9iamVjdCA9IF9LSlVSX2FzbjEuREVSVGFnZ2VkT2JqZWN0LCBfbmV3T2JqZWN0ID0gX0tKVVJfYXNuMS5BU04xVXRpbC5uZXdPYmplY3Q7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocGFyYW0pO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggIT0gMSlcbiAgICAgICAgICAgIHRocm93IFwia2V5IG9mIHBhcmFtIHNoYWxsIGJlIG9ubHkgb25lLlwiO1xuICAgICAgICB2YXIga2V5ID0ga2V5c1swXTtcbiAgICAgICAgaWYgKFwiOmJvb2w6aW50OmJpdHN0cjpvY3RzdHI6bnVsbDpvaWQ6ZW51bTp1dGY4c3RyOm51bXN0cjpwcm5zdHI6dGVsc3RyOmlhNXN0cjp1dGN0aW1lOmdlbnRpbWU6c2VxOnNldDp0YWc6XCIuaW5kZXhPZihcIjpcIiArIGtleSArIFwiOlwiKSA9PSAtMSlcbiAgICAgICAgICAgIHRocm93IFwidW5kZWZpbmVkIGtleTogXCIgKyBrZXk7XG4gICAgICAgIGlmIChrZXkgPT0gXCJib29sXCIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJCb29sZWFuKHBhcmFtW2tleV0pO1xuICAgICAgICBpZiAoa2V5ID09IFwiaW50XCIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJJbnRlZ2VyKHBhcmFtW2tleV0pO1xuICAgICAgICBpZiAoa2V5ID09IFwiYml0c3RyXCIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJCaXRTdHJpbmcocGFyYW1ba2V5XSk7XG4gICAgICAgIGlmIChrZXkgPT0gXCJvY3RzdHJcIilcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0RFUk9jdGV0U3RyaW5nKHBhcmFtW2tleV0pO1xuICAgICAgICBpZiAoa2V5ID09IFwibnVsbFwiKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfREVSTnVsbChwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcIm9pZFwiKVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfREVST2JqZWN0SWRlbnRpZmllcihwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcImVudW1cIilcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0RFUkVudW1lcmF0ZWQocGFyYW1ba2V5XSk7XG4gICAgICAgIGlmIChrZXkgPT0gXCJ1dGY4c3RyXCIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJVVEY4U3RyaW5nKHBhcmFtW2tleV0pO1xuICAgICAgICBpZiAoa2V5ID09IFwibnVtc3RyXCIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJOdW1lcmljU3RyaW5nKHBhcmFtW2tleV0pO1xuICAgICAgICBpZiAoa2V5ID09IFwicHJuc3RyXCIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJQcmludGFibGVTdHJpbmcocGFyYW1ba2V5XSk7XG4gICAgICAgIGlmIChrZXkgPT0gXCJ0ZWxzdHJcIilcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0RFUlRlbGV0ZXhTdHJpbmcocGFyYW1ba2V5XSk7XG4gICAgICAgIGlmIChrZXkgPT0gXCJpYTVzdHJcIilcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0RFUklBNVN0cmluZyhwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcInV0Y3RpbWVcIilcbiAgICAgICAgICAgIHJldHVybiBuZXcgX0RFUlVUQ1RpbWUocGFyYW1ba2V5XSk7XG4gICAgICAgIGlmIChrZXkgPT0gXCJnZW50aW1lXCIpXG4gICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJHZW5lcmFsaXplZFRpbWUocGFyYW1ba2V5XSk7XG4gICAgICAgIGlmIChrZXkgPT0gXCJzZXFcIikge1xuICAgICAgICAgICAgdmFyIHBhcmFtTGlzdCA9IHBhcmFtW2tleV07XG4gICAgICAgICAgICB2YXIgYSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYXNuMU9iaiA9IF9uZXdPYmplY3QocGFyYW1MaXN0W2ldKTtcbiAgICAgICAgICAgICAgICBhLnB1c2goYXNuMU9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJTZXF1ZW5jZSh7ICdhcnJheSc6IGEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PSBcInNldFwiKSB7XG4gICAgICAgICAgICB2YXIgcGFyYW1MaXN0ID0gcGFyYW1ba2V5XTtcbiAgICAgICAgICAgIHZhciBhID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBhc24xT2JqID0gX25ld09iamVjdChwYXJhbUxpc3RbaV0pO1xuICAgICAgICAgICAgICAgIGEucHVzaChhc24xT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgX0RFUlNldCh7ICdhcnJheSc6IGEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PSBcInRhZ1wiKSB7XG4gICAgICAgICAgICB2YXIgdGFnUGFyYW0gPSBwYXJhbVtrZXldO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0YWdQYXJhbSkgPT09ICdbb2JqZWN0IEFycmF5XScgJiZcbiAgICAgICAgICAgICAgICB0YWdQYXJhbS5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSBfbmV3T2JqZWN0KHRhZ1BhcmFtWzJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJUYWdnZWRPYmplY3QoeyB0YWc6IHRhZ1BhcmFtWzBdLFxuICAgICAgICAgICAgICAgICAgICBleHBsaWNpdDogdGFnUGFyYW1bMV0sXG4gICAgICAgICAgICAgICAgICAgIG9iajogb2JqIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1BhcmFtID0ge307XG4gICAgICAgICAgICAgICAgaWYgKHRhZ1BhcmFtLmV4cGxpY2l0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIG5ld1BhcmFtLmV4cGxpY2l0ID0gdGFnUGFyYW0uZXhwbGljaXQ7XG4gICAgICAgICAgICAgICAgaWYgKHRhZ1BhcmFtLnRhZyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBuZXdQYXJhbS50YWcgPSB0YWdQYXJhbS50YWc7XG4gICAgICAgICAgICAgICAgaWYgKHRhZ1BhcmFtLm9iaiA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcIm9iaiBzaGFsbCBiZSBzcGVjaWZpZWQgZm9yICd0YWcnLlwiO1xuICAgICAgICAgICAgICAgIG5ld1BhcmFtLm9iaiA9IF9uZXdPYmplY3QodGFnUGFyYW0ub2JqKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJUYWdnZWRPYmplY3QobmV3UGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBnZXQgZW5jb2RlZCBoZXhhZGVjaW1hbCBzdHJpbmcgb2YgQVNOMU9iamVjdCBzcGVjaWZlZCBieSBKU09OIHBhcmFtZXRlcnNcbiAgICAgKiBAbmFtZSBqc29uVG9BU04xSEVYXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5BU04xVXRpbFxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtIEpTT04gcGFyYW1ldGVyIHRvIGdlbmVyYXRlIEFTTjFPYmplY3RcbiAgICAgKiBAcmV0dXJuIGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04xT2JqZWN0XG4gICAgICogQHNpbmNlIGFzbjEgMS4wLjRcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBBcyBmb3IgQVNOLjEgb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIEpTT04gb2JqZWN0LFxuICAgICAqIHBsZWFzZSBzZWUge0BsaW5rIG5ld09iamVjdH0uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBqc29uVG9BU04xSEVYKHsncHJuc3RyJzogJ2FhYSd9KTtcbiAgICAgKi9cbiAgICB0aGlzLmpzb25Ub0FTTjFIRVggPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgdmFyIGFzbjFPYmogPSB0aGlzLm5ld09iamVjdChwYXJhbSk7XG4gICAgICAgIHJldHVybiBhc24xT2JqLmdldEVuY29kZWRIZXgoKTtcbiAgICB9O1xufTtcbi8qKlxuICogZ2V0IGRvdCBub3RlZCBvaWQgbnVtYmVyIHN0cmluZyBmcm9tIGhleGFkZWNpbWFsIHZhbHVlIG9mIE9JRFxuICogQG5hbWUgb2lkSGV4VG9JbnRcbiAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuQVNOMVV0aWxcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IGhleCBoZXhhZGVjaW1hbCB2YWx1ZSBvZiBvYmplY3QgaWRlbnRpZmllclxuICogQHJldHVybiB7U3RyaW5nfSBkb3Qgbm90ZWQgc3RyaW5nIG9mIG9iamVjdCBpZGVudGlmaWVyXG4gKiBAc2luY2UganNyc2FzaWduIDQuOC4zIGFzbjEgMS4wLjdcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBzdGF0aWMgbWV0aG9kIGNvbnZlcnRzIGZyb20gaGV4YWRlY2ltYWwgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mXG4gKiBBU04uMSB2YWx1ZSBvZiBvYmplY3QgaWRlbnRpZmllciB0byBvaWQgbnVtYmVyIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKiBLSlVSLmFzbjEuQVNOMVV0aWwub2lkSGV4VG9JbnQoJzU1MDQwNicpICZyYXJyOyBcIjIuNS40LjZcIlxuICovXG5LSlVSLmFzbjEuQVNOMVV0aWwub2lkSGV4VG9JbnQgPSBmdW5jdGlvbiAoaGV4KSB7XG4gICAgdmFyIHMgPSBcIlwiO1xuICAgIHZhciBpMDEgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNik7XG4gICAgdmFyIGkwID0gTWF0aC5mbG9vcihpMDEgLyA0MCk7XG4gICAgdmFyIGkxID0gaTAxICUgNDA7XG4gICAgdmFyIHMgPSBpMCArIFwiLlwiICsgaTE7XG4gICAgdmFyIGJpbmJ1ZiA9IFwiXCI7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBoZXgubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VJbnQoaGV4LnN1YnN0cihpLCAyKSwgMTYpO1xuICAgICAgICB2YXIgYmluID0gKFwiMDAwMDAwMDBcIiArIHZhbHVlLnRvU3RyaW5nKDIpKS5zbGljZSgtOCk7XG4gICAgICAgIGJpbmJ1ZiA9IGJpbmJ1ZiArIGJpbi5zdWJzdHIoMSwgNyk7XG4gICAgICAgIGlmIChiaW4uc3Vic3RyKDAsIDEpID09IFwiMFwiKSB7XG4gICAgICAgICAgICB2YXIgYmkgPSBuZXcgQmlnSW50ZWdlcihiaW5idWYsIDIpO1xuICAgICAgICAgICAgcyA9IHMgKyBcIi5cIiArIGJpLnRvU3RyaW5nKDEwKTtcbiAgICAgICAgICAgIGJpbmJ1ZiA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgO1xuICAgIHJldHVybiBzO1xufTtcbi8qKlxuICogZ2V0IGhleGFkZWNpbWFsIHZhbHVlIG9mIG9iamVjdCBpZGVudGlmaWVyIGZyb20gZG90IG5vdGVkIG9pZCB2YWx1ZVxuICogQG5hbWUgb2lkSW50VG9IZXhcbiAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuQVNOMVV0aWxcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IG9pZFN0cmluZyBkb3Qgbm90ZWQgc3RyaW5nIG9mIG9iamVjdCBpZGVudGlmaWVyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGhleGFkZWNpbWFsIHZhbHVlIG9mIG9iamVjdCBpZGVudGlmaWVyXG4gKiBAc2luY2UganNyc2FzaWduIDQuOC4zIGFzbjEgMS4wLjdcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBzdGF0aWMgbWV0aG9kIGNvbnZlcnRzIGZyb20gb2JqZWN0IGlkZW50aWZpZXIgdmFsdWUgc3RyaW5nLlxuICogdG8gaGV4YWRlY2ltYWwgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGl0LlxuICogQGV4YW1wbGVcbiAqIEtKVVIuYXNuMS5BU04xVXRpbC5vaWRJbnRUb0hleChcIjIuNS40LjZcIikgJnJhcnI7IFwiNTUwNDA2XCJcbiAqL1xuS0pVUi5hc24xLkFTTjFVdGlsLm9pZEludFRvSGV4ID0gZnVuY3Rpb24gKG9pZFN0cmluZykge1xuICAgIHZhciBpdG94ID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGggPSBpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKGgubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBoID0gJzAnICsgaDtcbiAgICAgICAgcmV0dXJuIGg7XG4gICAgfTtcbiAgICB2YXIgcm9pZHRveCA9IGZ1bmN0aW9uIChyb2lkKSB7XG4gICAgICAgIHZhciBoID0gJyc7XG4gICAgICAgIHZhciBiaSA9IG5ldyBCaWdJbnRlZ2VyKHJvaWQsIDEwKTtcbiAgICAgICAgdmFyIGIgPSBiaS50b1N0cmluZygyKTtcbiAgICAgICAgdmFyIHBhZExlbiA9IDcgLSBiLmxlbmd0aCAlIDc7XG4gICAgICAgIGlmIChwYWRMZW4gPT0gNylcbiAgICAgICAgICAgIHBhZExlbiA9IDA7XG4gICAgICAgIHZhciBiUGFkID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFkTGVuOyBpKyspXG4gICAgICAgICAgICBiUGFkICs9ICcwJztcbiAgICAgICAgYiA9IGJQYWQgKyBiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoIC0gMTsgaSArPSA3KSB7XG4gICAgICAgICAgICB2YXIgYjggPSBiLnN1YnN0cihpLCA3KTtcbiAgICAgICAgICAgIGlmIChpICE9IGIubGVuZ3RoIC0gNylcbiAgICAgICAgICAgICAgICBiOCA9ICcxJyArIGI4O1xuICAgICAgICAgICAgaCArPSBpdG94KHBhcnNlSW50KGI4LCAyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGg7XG4gICAgfTtcbiAgICBpZiAoIW9pZFN0cmluZy5tYXRjaCgvXlswLTkuXSskLykpIHtcbiAgICAgICAgdGhyb3cgXCJtYWxmb3JtZWQgb2lkIHN0cmluZzogXCIgKyBvaWRTdHJpbmc7XG4gICAgfVxuICAgIHZhciBoID0gJyc7XG4gICAgdmFyIGEgPSBvaWRTdHJpbmcuc3BsaXQoJy4nKTtcbiAgICB2YXIgaTAgPSBwYXJzZUludChhWzBdKSAqIDQwICsgcGFyc2VJbnQoYVsxXSk7XG4gICAgaCArPSBpdG94KGkwKTtcbiAgICBhLnNwbGljZSgwLCAyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaCArPSByb2lkdG94KGFbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gaDtcbn07XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIEFic3RyYWN0IEFTTi4xIENsYXNzZXNcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBiYXNlIGNsYXNzIGZvciBBU04uMSBERVIgZW5jb2RlciBvYmplY3RcbiAqIEBuYW1lIEtKVVIuYXNuMS5BU04xT2JqZWN0XG4gKiBAY2xhc3MgYmFzZSBjbGFzcyBmb3IgQVNOLjEgREVSIGVuY29kZXIgb2JqZWN0XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGlzTW9kaWZpZWQgZmxhZyB3aGV0aGVyIGludGVybmFsIGRhdGEgd2FzIGNoYW5nZWRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBoVExWIGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04uMSBUTFZcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBoVCBoZXhhZGVjaW1hbCBzdHJpbmcgb2YgQVNOLjEgVExWIHRhZyhUKVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGhMIGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04uMSBUTFYgbGVuZ3RoKEwpXG4gKiBAcHJvcGVydHkge1N0cmluZ30gaFYgaGV4YWRlY2ltYWwgc3RyaW5nIG9mIEFTTi4xIFRMViB2YWx1ZShWKVxuICogQGRlc2NyaXB0aW9uXG4gKi9cbktKVVIuYXNuMS5BU04xT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpc01vZGlmaWVkID0gdHJ1ZTtcbiAgICB2YXIgaFRMViA9IG51bGw7XG4gICAgdmFyIGhUID0gJzAwJztcbiAgICB2YXIgaEwgPSAnMDAnO1xuICAgIHZhciBoViA9ICcnO1xuICAgIC8qKlxuICAgICAqIGdldCBoZXhhZGVjaW1hbCBBU04uMSBUTFYgbGVuZ3RoKEwpIGJ5dGVzIGZyb20gVExWIHZhbHVlKFYpXG4gICAgICogQG5hbWUgZ2V0TGVuZ3RoSGV4RnJvbVZhbHVlXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5BU04xT2JqZWN0I1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gaGV4YWRlY2ltYWwgc3RyaW5nIG9mIEFTTi4xIFRMViBsZW5ndGgoTClcbiAgICAgKi9cbiAgICB0aGlzLmdldExlbmd0aEhleEZyb21WYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmhWID09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5oViA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBcInRoaXMuaFYgaXMgbnVsbCBvciB1bmRlZmluZWQuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaFYubGVuZ3RoICUgMiA9PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBcInZhbHVlIGhleCBtdXN0IGJlIGV2ZW4gbGVuZ3RoOiBuPVwiICsgaFYubGVuZ3RoICsgXCIsdj1cIiArIHRoaXMuaFY7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSB0aGlzLmhWLmxlbmd0aCAvIDI7XG4gICAgICAgIHZhciBoTiA9IG4udG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoaE4ubGVuZ3RoICUgMiA9PSAxKSB7XG4gICAgICAgICAgICBoTiA9IFwiMFwiICsgaE47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4gPCAxMjgpIHtcbiAgICAgICAgICAgIHJldHVybiBoTjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoTmxlbiA9IGhOLmxlbmd0aCAvIDI7XG4gICAgICAgICAgICBpZiAoaE5sZW4gPiAxNSkge1xuICAgICAgICAgICAgICAgIHRocm93IFwiQVNOLjEgbGVuZ3RoIHRvbyBsb25nIHRvIHJlcHJlc2VudCBieSA4eDogbiA9IFwiICsgbi50b1N0cmluZygxNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGVhZCA9IDEyOCArIGhObGVuO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWQudG9TdHJpbmcoMTYpICsgaE47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGdldCBoZXhhZGVjaW1hbCBzdHJpbmcgb2YgQVNOLjEgVExWIGJ5dGVzXG4gICAgICogQG5hbWUgZ2V0RW5jb2RlZEhleFxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuQVNOMU9iamVjdCNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04uMSBUTFZcbiAgICAgKi9cbiAgICB0aGlzLmdldEVuY29kZWRIZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmhUTFYgPT0gbnVsbCB8fCB0aGlzLmlzTW9kaWZpZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaFYgPSB0aGlzLmdldEZyZXNoVmFsdWVIZXgoKTtcbiAgICAgICAgICAgIHRoaXMuaEwgPSB0aGlzLmdldExlbmd0aEhleEZyb21WYWx1ZSgpO1xuICAgICAgICAgICAgdGhpcy5oVExWID0gdGhpcy5oVCArIHRoaXMuaEwgKyB0aGlzLmhWO1xuICAgICAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAvL2FsZXJ0KFwiZmlyc3QgdGltZTogXCIgKyB0aGlzLmhUTFYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmhUTFY7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBnZXQgaGV4YWRlY2ltYWwgc3RyaW5nIG9mIEFTTi4xIFRMViB2YWx1ZShWKSBieXRlc1xuICAgICAqIEBuYW1lIGdldFZhbHVlSGV4XG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5BU04xT2JqZWN0I1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gaGV4YWRlY2ltYWwgc3RyaW5nIG9mIEFTTi4xIFRMViB2YWx1ZShWKSBieXRlc1xuICAgICAqL1xuICAgIHRoaXMuZ2V0VmFsdWVIZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZ2V0RW5jb2RlZEhleCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5oVjtcbiAgICB9O1xuICAgIHRoaXMuZ2V0RnJlc2hWYWx1ZUhleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH07XG59O1xuLy8gPT0gQkVHSU4gREVSQWJzdHJhY3RTdHJpbmcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIGJhc2UgY2xhc3MgZm9yIEFTTi4xIERFUiBzdHJpbmcgY2xhc3Nlc1xuICogQG5hbWUgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nXG4gKiBAY2xhc3MgYmFzZSBjbGFzcyBmb3IgQVNOLjEgREVSIHN0cmluZyBjbGFzc2VzXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgYXNzb2NpYXRpdmUgYXJyYXkgb2YgcGFyYW1ldGVycyAoZXguIHsnc3RyJzogJ2FhYSd9KVxuICogQHByb3BlcnR5IHtTdHJpbmd9IHMgaW50ZXJuYWwgc3RyaW5nIG9mIHZhbHVlXG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuQVNOMU9iamVjdFxuICogQGRlc2NyaXB0aW9uXG4gKiA8YnIvPlxuICogQXMgZm9yIGFyZ3VtZW50ICdwYXJhbXMnIGZvciBjb25zdHJ1Y3RvciwgeW91IGNhbiBzcGVjaWZ5IG9uZSBvZlxuICogZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiA8dWw+XG4gKiA8bGk+c3RyIC0gc3BlY2lmeSBpbml0aWFsIEFTTi4xIHZhbHVlKFYpIGJ5IGEgc3RyaW5nPC9saT5cbiAqIDxsaT5oZXggLSBzcGVjaWZ5IGluaXRpYWwgQVNOLjEgdmFsdWUoVikgYnkgYSBoZXhhZGVjaW1hbCBzdHJpbmc8L2xpPlxuICogPC91bD5cbiAqIE5PVEU6ICdwYXJhbXMnIGNhbiBiZSBvbWl0dGVkLlxuICovXG5LSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICB2YXIgcyA9IG51bGw7XG4gICAgdmFyIGhWID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBnZXQgc3RyaW5nIHZhbHVlIG9mIHRoaXMgc3RyaW5nIG9iamVjdFxuICAgICAqIEBuYW1lIGdldFN0cmluZ1xuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBzdHJpbmcgdmFsdWUgb2YgdGhpcyBzdHJpbmcgb2JqZWN0XG4gICAgICovXG4gICAgdGhpcy5nZXRTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgYnkgYSBzdHJpbmdcbiAgICAgKiBAbmFtZSBzZXRTdHJpbmdcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuZXdTIHZhbHVlIGJ5IGEgc3RyaW5nIHRvIHNldFxuICAgICAqL1xuICAgIHRoaXMuc2V0U3RyaW5nID0gZnVuY3Rpb24gKG5ld1MpIHtcbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zID0gbmV3UztcbiAgICAgICAgdGhpcy5oViA9IHN0b2hleCh0aGlzLnMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IGEgaGV4YWRlY2ltYWwgc3RyaW5nXG4gICAgICogQG5hbWUgc2V0U3RyaW5nSGV4XG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmV3SGV4U3RyaW5nIHZhbHVlIGJ5IGEgaGV4YWRlY2ltYWwgc3RyaW5nIHRvIHNldFxuICAgICAqL1xuICAgIHRoaXMuc2V0U3RyaW5nSGV4ID0gZnVuY3Rpb24gKG5ld0hleFN0cmluZykge1xuICAgICAgICB0aGlzLmhUTFYgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnMgPSBudWxsO1xuICAgICAgICB0aGlzLmhWID0gbmV3SGV4U3RyaW5nO1xuICAgIH07XG4gICAgdGhpcy5nZXRGcmVzaFZhbHVlSGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oVjtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmcocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW1zWydzdHInXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0cmluZyhwYXJhbXNbJ3N0ciddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW1zWydoZXgnXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0cmluZ0hleChwYXJhbXNbJ2hleCddKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcsIEtKVVIuYXNuMS5BU04xT2JqZWN0KTtcbi8vID09IEVORCAgIERFUkFic3RyYWN0U3RyaW5nID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gPT0gQkVHSU4gREVSQWJzdHJhY3RUaW1lID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIGJhc2UgY2xhc3MgZm9yIEFTTi4xIERFUiBHZW5lcmFsaXplZC9VVENUaW1lIGNsYXNzXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSQWJzdHJhY3RUaW1lXG4gKiBAY2xhc3MgYmFzZSBjbGFzcyBmb3IgQVNOLjEgREVSIEdlbmVyYWxpemVkL1VUQ1RpbWUgY2xhc3NcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBhc3NvY2lhdGl2ZSBhcnJheSBvZiBwYXJhbWV0ZXJzIChleC4geydzdHInOiAnMTMwNDMwMjM1OTU5Wid9KVxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogQHNlZSBLSlVSLmFzbjEuQVNOMU9iamVjdCAtIHN1cGVyY2xhc3NcbiAqL1xuS0pVUi5hc24xLkRFUkFic3RyYWN0VGltZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBLSlVSLmFzbjEuREVSQWJzdHJhY3RUaW1lLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICB2YXIgcyA9IG51bGw7XG4gICAgdmFyIGRhdGUgPSBudWxsO1xuICAgIC8vIC0tLSBQUklWQVRFIE1FVEhPRFMgLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmxvY2FsRGF0ZVRvVVRDID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdXRjID0gZC5nZXRUaW1lKCkgKyAoZC5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApO1xuICAgICAgICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKHV0Yyk7XG4gICAgICAgIHJldHVybiB1dGNEYXRlO1xuICAgIH07XG4gICAgLypcbiAgICAgKiBmb3JtYXQgZGF0ZSBzdHJpbmcgYnkgRGF0YSBvYmplY3RcbiAgICAgKiBAbmFtZSBmb3JtYXREYXRlXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5BYnN0cmFjdFRpbWU7XG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgJ3V0Yycgb3IgJ2dlbidcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHdpdGhNaWxsaXMgZmxhZyBmb3Igd2l0aCBtaWxsaXNlY3Rpb25zIG9yIG5vdFxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqICd3aXRoTWlsbGlzJyBmbGFnIGlzIHN1cHBvcnRlZCBmcm9tIGFzbjEgMS4wLjYuXG4gICAgICovXG4gICAgdGhpcy5mb3JtYXREYXRlID0gZnVuY3Rpb24gKGRhdGVPYmplY3QsIHR5cGUsIHdpdGhNaWxsaXMpIHtcbiAgICAgICAgdmFyIHBhZCA9IHRoaXMuemVyb1BhZGRpbmc7XG4gICAgICAgIHZhciBkID0gdGhpcy5sb2NhbERhdGVUb1VUQyhkYXRlT2JqZWN0KTtcbiAgICAgICAgdmFyIHllYXIgPSBTdHJpbmcoZC5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgaWYgKHR5cGUgPT0gJ3V0YycpXG4gICAgICAgICAgICB5ZWFyID0geWVhci5zdWJzdHIoMiwgMik7XG4gICAgICAgIHZhciBtb250aCA9IHBhZChTdHJpbmcoZC5nZXRNb250aCgpICsgMSksIDIpO1xuICAgICAgICB2YXIgZGF5ID0gcGFkKFN0cmluZyhkLmdldERhdGUoKSksIDIpO1xuICAgICAgICB2YXIgaG91ciA9IHBhZChTdHJpbmcoZC5nZXRIb3VycygpKSwgMik7XG4gICAgICAgIHZhciBtaW4gPSBwYWQoU3RyaW5nKGQuZ2V0TWludXRlcygpKSwgMik7XG4gICAgICAgIHZhciBzZWMgPSBwYWQoU3RyaW5nKGQuZ2V0U2Vjb25kcygpKSwgMik7XG4gICAgICAgIHZhciBzID0geWVhciArIG1vbnRoICsgZGF5ICsgaG91ciArIG1pbiArIHNlYztcbiAgICAgICAgaWYgKHdpdGhNaWxsaXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHZhciBtaWxsaXMgPSBkLmdldE1pbGxpc2Vjb25kcygpO1xuICAgICAgICAgICAgaWYgKG1pbGxpcyAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNNaWxsaXMgPSBwYWQoU3RyaW5nKG1pbGxpcyksIDMpO1xuICAgICAgICAgICAgICAgIHNNaWxsaXMgPSBzTWlsbGlzLnJlcGxhY2UoL1swXSskLywgXCJcIik7XG4gICAgICAgICAgICAgICAgcyA9IHMgKyBcIi5cIiArIHNNaWxsaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHMgKyBcIlpcIjtcbiAgICB9O1xuICAgIHRoaXMuemVyb1BhZGRpbmcgPSBmdW5jdGlvbiAocywgbGVuKSB7XG4gICAgICAgIGlmIChzLmxlbmd0aCA+PSBsZW4pXG4gICAgICAgICAgICByZXR1cm4gcztcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheShsZW4gLSBzLmxlbmd0aCArIDEpLmpvaW4oJzAnKSArIHM7XG4gICAgfTtcbiAgICAvLyAtLS0gUFVCTElDIE1FVEhPRFMgLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKipcbiAgICAgKiBnZXQgc3RyaW5nIHZhbHVlIG9mIHRoaXMgc3RyaW5nIG9iamVjdFxuICAgICAqIEBuYW1lIGdldFN0cmluZ1xuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSQWJzdHJhY3RUaW1lI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gc3RyaW5nIHZhbHVlIG9mIHRoaXMgdGltZSBvYmplY3RcbiAgICAgKi9cbiAgICB0aGlzLmdldFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBhIHN0cmluZ1xuICAgICAqIEBuYW1lIHNldFN0cmluZ1xuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSQWJzdHJhY3RUaW1lI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuZXdTIHZhbHVlIGJ5IGEgc3RyaW5nIHRvIHNldCBzdWNoIGxpa2UgXCIxMzA0MzAyMzU5NTlaXCJcbiAgICAgKi9cbiAgICB0aGlzLnNldFN0cmluZyA9IGZ1bmN0aW9uIChuZXdTKSB7XG4gICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIHRoaXMucyA9IG5ld1M7XG4gICAgICAgIHRoaXMuaFYgPSBzdG9oZXgobmV3Uyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgYnkgYSBEYXRlIG9iamVjdFxuICAgICAqIEBuYW1lIHNldEJ5RGF0ZVZhbHVlXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFRpbWUjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSB5ZWFyIHllYXIgb2YgZGF0ZSAoZXguIDIwMTMpXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBtb250aCBtb250aCBvZiBkYXRlIGJldHdlZW4gMSBhbmQgMTIgKGV4LiAxMilcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGRheSBkYXkgb2YgbW9udGhcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGhvdXIgaG91cnMgb2YgZGF0ZVxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gbWluIG1pbnV0ZXMgb2YgZGF0ZVxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gc2VjIHNlY29uZHMgb2YgZGF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2V0QnlEYXRlVmFsdWUgPSBmdW5jdGlvbiAoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWluLCBzZWMpIHtcbiAgICAgICAgdmFyIGRhdGVPYmplY3QgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCAtIDEsIGRheSwgaG91ciwgbWluLCBzZWMsIDApKTtcbiAgICAgICAgdGhpcy5zZXRCeURhdGUoZGF0ZU9iamVjdCk7XG4gICAgfTtcbiAgICB0aGlzLmdldEZyZXNoVmFsdWVIZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhWO1xuICAgIH07XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUkFic3RyYWN0VGltZSwgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuLy8gPT0gRU5EICAgREVSQWJzdHJhY3RUaW1lID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA9PSBCRUdJTiBERVJBYnN0cmFjdFN0cnVjdHVyZWQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogYmFzZSBjbGFzcyBmb3IgQVNOLjEgREVSIHN0cnVjdHVyZWQgY2xhc3NcbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cnVjdHVyZWRcbiAqIEBjbGFzcyBiYXNlIGNsYXNzIGZvciBBU04uMSBERVIgc3RydWN0dXJlZCBjbGFzc1xuICogQHByb3BlcnR5IHtBcnJheX0gYXNuMUFycmF5IGludGVybmFsIGFycmF5IG9mIEFTTjFPYmplY3RcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5BU04xT2JqZWN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIEBzZWUgS0pVUi5hc24xLkFTTjFPYmplY3QgLSBzdXBlcmNsYXNzXG4gKi9cbktKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cnVjdHVyZWQgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICB2YXIgYXNuMUFycmF5ID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgYnkgYXJyYXkgb2YgQVNOMU9iamVjdFxuICAgICAqIEBuYW1lIHNldEJ5QVNOMU9iamVjdEFycmF5XG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cnVjdHVyZWQjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHthcnJheX0gYXNuMU9iamVjdEFycmF5IGFycmF5IG9mIEFTTjFPYmplY3QgdG8gc2V0XG4gICAgICovXG4gICAgdGhpcy5zZXRCeUFTTjFPYmplY3RBcnJheSA9IGZ1bmN0aW9uIChhc24xT2JqZWN0QXJyYXkpIHtcbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hc24xQXJyYXkgPSBhc24xT2JqZWN0QXJyYXk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBhcHBlbmQgYW4gQVNOMU9iamVjdCB0byBpbnRlcm5hbCBhcnJheVxuICAgICAqIEBuYW1lIGFwcGVuZEFTTjFPYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RydWN0dXJlZCNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0FTTjFPYmplY3R9IGFzbjFPYmplY3QgdG8gYWRkXG4gICAgICovXG4gICAgdGhpcy5hcHBlbmRBU04xT2JqZWN0ID0gZnVuY3Rpb24gKGFzbjFPYmplY3QpIHtcbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hc24xQXJyYXkucHVzaChhc24xT2JqZWN0KTtcbiAgICB9O1xuICAgIHRoaXMuYXNuMUFycmF5ID0gbmV3IEFycmF5KCk7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1snYXJyYXknXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmFzbjFBcnJheSA9IHBhcmFtc1snYXJyYXknXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJ1Y3R1cmVkLCBLSlVSLmFzbjEuQVNOMU9iamVjdCk7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gIEFTTi4xIE9iamVjdCBDbGFzc2VzXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBCb29sZWFuXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSQm9vbGVhblxuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgQm9vbGVhblxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogQHNlZSBLSlVSLmFzbjEuQVNOMU9iamVjdCAtIHN1cGVyY2xhc3NcbiAqL1xuS0pVUi5hc24xLkRFUkJvb2xlYW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgS0pVUi5hc24xLkRFUkJvb2xlYW4uc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaFQgPSBcIjAxXCI7XG4gICAgdGhpcy5oVExWID0gXCIwMTAxZmZcIjtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSQm9vbGVhbiwgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBJbnRlZ2VyXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSSW50ZWdlclxuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgSW50ZWdlclxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPmludCAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBpbnRlZ2VyIHZhbHVlPC9saT5cbiAqIDxsaT5iaWdpbnQgLSBzcGVjaWZ5IGluaXRpYWwgQVNOLjEgdmFsdWUoVikgYnkgQmlnSW50ZWdlciBvYmplY3Q8L2xpPlxuICogPGxpPmhleCAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBhIGhleGFkZWNpbWFsIHN0cmluZzwvbGk+XG4gKiA8L3VsPlxuICogTk9URTogJ3BhcmFtcycgY2FuIGJlIG9taXR0ZWQuXG4gKi9cbktKVVIuYXNuMS5ERVJJbnRlZ2VyID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIEtKVVIuYXNuMS5ERVJJbnRlZ2VyLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmhUID0gXCIwMlwiO1xuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBUb20gV3UncyBCaWdJbnRlZ2VyIG9iamVjdFxuICAgICAqIEBuYW1lIHNldEJ5QmlnSW50ZWdlclxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSSW50ZWdlciNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0JpZ0ludGVnZXJ9IGJpZ0ludGVnZXJWYWx1ZSB0byBzZXRcbiAgICAgKi9cbiAgICB0aGlzLnNldEJ5QmlnSW50ZWdlciA9IGZ1bmN0aW9uIChiaWdJbnRlZ2VyVmFsdWUpIHtcbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oViA9IEtKVVIuYXNuMS5BU04xVXRpbC5iaWdJbnRUb01pblR3b3NDb21wbGVtZW50c0hleChiaWdJbnRlZ2VyVmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IGludGVnZXIgdmFsdWVcbiAgICAgKiBAbmFtZSBzZXRCeUludGVnZXJcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkludGVnZXJcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IGludGVnZXIgdmFsdWUgdG8gc2V0XG4gICAgICovXG4gICAgdGhpcy5zZXRCeUludGVnZXIgPSBmdW5jdGlvbiAoaW50VmFsdWUpIHtcbiAgICAgICAgdmFyIGJpID0gbmV3IEJpZ0ludGVnZXIoU3RyaW5nKGludFZhbHVlKSwgMTApO1xuICAgICAgICB0aGlzLnNldEJ5QmlnSW50ZWdlcihiaSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgYnkgaW50ZWdlciB2YWx1ZVxuICAgICAqIEBuYW1lIHNldFZhbHVlSGV4XG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJJbnRlZ2VyI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoZXhhZGVjaW1hbCBzdHJpbmcgb2YgaW50ZWdlciB2YWx1ZVxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIDxici8+XG4gICAgICogTk9URTogVmFsdWUgc2hhbGwgYmUgcmVwcmVzZW50ZWQgYnkgbWluaW11bSBvY3RldCBsZW5ndGggb2ZcbiAgICAgKiB0d28ncyBjb21wbGVtZW50IHJlcHJlc2VudGF0aW9uLlxuICAgICAqIEBleGFtcGxlXG4gICAgICogbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKDEyMyk7XG4gICAgICogbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKHsnaW50JzogMTIzfSk7XG4gICAgICogbmV3IEtKVVIuYXNuMS5ERVJJbnRlZ2VyKHsnaGV4JzogJzFmYWQnfSk7XG4gICAgICovXG4gICAgdGhpcy5zZXRWYWx1ZUhleCA9IGZ1bmN0aW9uIChuZXdIZXhTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5oViA9IG5ld0hleFN0cmluZztcbiAgICB9O1xuICAgIHRoaXMuZ2V0RnJlc2hWYWx1ZUhleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zWydiaWdpbnQnXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJ5QmlnSW50ZWdlcihwYXJhbXNbJ2JpZ2ludCddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW1zWydpbnQnXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJ5SW50ZWdlcihwYXJhbXNbJ2ludCddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW1zID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QnlJbnRlZ2VyKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBhcmFtc1snaGV4J10gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZUhleChwYXJhbXNbJ2hleCddKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSSW50ZWdlciwgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBlbmNvZGVkIEJpdFN0cmluZyBwcmltaXRpdmVcbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJCaXRTdHJpbmdcbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIGVuY29kZWQgQml0U3RyaW5nIHByaW1pdGl2ZVxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPmJpbiAtIHNwZWNpZnkgYmluYXJ5IHN0cmluZyAoZXguICcxMDExMScpPC9saT5cbiAqIDxsaT5hcnJheSAtIHNwZWNpZnkgYXJyYXkgb2YgYm9vbGVhbiAoZXguIFt0cnVlLGZhbHNlLHRydWUsdHJ1ZV0pPC9saT5cbiAqIDxsaT5oZXggLSBzcGVjaWZ5IGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04uMSB2YWx1ZShWKSBpbmNsdWRpbmcgdW51c2VkIGJpdHM8L2xpPlxuICogPGxpPm9iaiAtIHNwZWNpZnkge0BsaW5rIEtKVVIuYXNuMS5BU04xVXRpbC5uZXdPYmplY3R9XG4gKiBhcmd1bWVudCBmb3IgXCJCaXRTdHJpbmcgZW5jYXBzdWxhdGVzXCIgc3RydWN0dXJlLjwvbGk+XG4gKiA8L3VsPlxuICogTk9URTE6ICdwYXJhbXMnIGNhbiBiZSBvbWl0dGVkLjxici8+XG4gKiBOT1RFMjogJ29iaicgcGFyYW1ldGVyIGhhdmUgYmVlbiBzdXBwb3J0ZWQgc2luY2VcbiAqIGFzbjEgMS4wLjExLCBqc3JzYXNpZ24gNi4xLjEgKDIwMTYtU2VwLTI1KS48YnIvPlxuICogQGV4YW1wbGVcbiAqIC8vIGRlZmF1bHQgY29uc3RydWN0b3JcbiAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUkJpdFN0cmluZygpO1xuICogLy8gaW5pdGlhbGl6ZSB3aXRoIGJpbmFyeSBzdHJpbmdcbiAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUkJpdFN0cmluZyh7YmluOiBcIjEwMTFcIn0pO1xuICogLy8gaW5pdGlhbGl6ZSB3aXRoIGJvb2xlYW4gYXJyYXlcbiAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUkJpdFN0cmluZyh7YXJyYXk6IFt0cnVlLGZhbHNlLHRydWUsdHJ1ZV19KTtcbiAqIC8vIGluaXRpYWxpemUgd2l0aCBoZXhhZGVjaW1hbCBzdHJpbmcgKDA0IGlzIHVudXNlZCBiaXRzKVxuICogbyA9IG5ldyBLSlVSLmFzbjEuREVST2N0ZXRTdHJpbmcoe2hleDogXCIwNGJhYzBcIn0pO1xuICogLy8gaW5pdGlhbGl6ZSB3aXRoIEFTTjFVdGlsLm5ld09iamVjdCBhcmd1bWVudCBmb3IgZW5jYXBzdWxhdGVkXG4gKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJCaXRTdHJpbmcoe29iajoge3NlcTogW3tpbnQ6IDN9LCB7cHJuc3RyOiAnYWFhJ31dfX0pO1xuICogLy8gYWJvdmUgZ2VuZXJhdGVzIGEgQVNOLjEgZGF0YSBsaWtlIHRoaXM6XG4gKiAvLyBCSVQgU1RSSU5HLCBlbmNhcHN1bGF0ZXMge1xuICogLy8gICBTRVFVRU5DRSB7XG4gKiAvLyAgICAgSU5URUdFUiAzXG4gKiAvLyAgICAgUHJpbnRhYmxlU3RyaW5nICdhYWEnXG4gKiAvLyAgICAgfVxuICogLy8gICB9XG4gKi9cbktKVVIuYXNuMS5ERVJCaXRTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBwYXJhbXMub2JqICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHZhciBvID0gS0pVUi5hc24xLkFTTjFVdGlsLm5ld09iamVjdChwYXJhbXMub2JqKTtcbiAgICAgICAgcGFyYW1zLmhleCA9IFwiMDBcIiArIG8uZ2V0RW5jb2RlZEhleCgpO1xuICAgIH1cbiAgICBLSlVSLmFzbjEuREVSQml0U3RyaW5nLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmhUID0gXCIwM1wiO1xuICAgIC8qKlxuICAgICAqIHNldCBBU04uMSB2YWx1ZShWKSBieSBhIGhleGFkZWNpbWFsIHN0cmluZyBpbmNsdWRpbmcgdW51c2VkIGJpdHNcbiAgICAgKiBAbmFtZSBzZXRIZXhWYWx1ZUluY2x1ZGluZ1VudXNlZEJpdHNcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkJpdFN0cmluZyNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmV3SGV4U3RyaW5nSW5jbHVkaW5nVW51c2VkQml0c1xuICAgICAqL1xuICAgIHRoaXMuc2V0SGV4VmFsdWVJbmNsdWRpbmdVbnVzZWRCaXRzID0gZnVuY3Rpb24gKG5ld0hleFN0cmluZ0luY2x1ZGluZ1VudXNlZEJpdHMpIHtcbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oViA9IG5ld0hleFN0cmluZ0luY2x1ZGluZ1VudXNlZEJpdHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzZXQgQVNOLjEgdmFsdWUoVikgYnkgdW51c2VkIGJpdCBhbmQgaGV4YWRlY2ltYWwgc3RyaW5nIG9mIHZhbHVlXG4gICAgICogQG5hbWUgc2V0VW51c2VkQml0c0FuZEhleFZhbHVlXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJCaXRTdHJpbmcjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSB1bnVzZWRCaXRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhWYWx1ZVxuICAgICAqL1xuICAgIHRoaXMuc2V0VW51c2VkQml0c0FuZEhleFZhbHVlID0gZnVuY3Rpb24gKHVudXNlZEJpdHMsIGhWYWx1ZSkge1xuICAgICAgICBpZiAodW51c2VkQml0cyA8IDAgfHwgNyA8IHVudXNlZEJpdHMpIHtcbiAgICAgICAgICAgIHRocm93IFwidW51c2VkIGJpdHMgc2hhbGwgYmUgZnJvbSAwIHRvIDc6IHUgPSBcIiArIHVudXNlZEJpdHM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGhVbnVzZWRCaXRzID0gXCIwXCIgKyB1bnVzZWRCaXRzO1xuICAgICAgICB0aGlzLmhUTFYgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhWID0gaFVudXNlZEJpdHMgKyBoVmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzZXQgQVNOLjEgREVSIEJpdFN0cmluZyBieSBiaW5hcnkgc3RyaW5nPGJyLz5cbiAgICAgKiBAbmFtZSBzZXRCeUJpbmFyeVN0cmluZ1xuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSQml0U3RyaW5nI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBiaW5hcnlTdHJpbmcgYmluYXJ5IHZhbHVlIHN0cmluZyAoaS5lLiAnMTAxMTEnKVxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIEl0cyB1bnVzZWQgYml0cyB3aWxsIGJlIGNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBieSBsZW5ndGggb2ZcbiAgICAgKiAnYmluYXJ5VmFsdWUnLiA8YnIvPlxuICAgICAqIE5PVEU6IFRyYWlsaW5nIHplcm9zICcwJyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJCaXRTdHJpbmcoKTtcbiAgICAgKiBvLnNldEJ5Qm9vbGVhbkFycmF5KFwiMDEwMTFcIik7XG4gICAgICovXG4gICAgdGhpcy5zZXRCeUJpbmFyeVN0cmluZyA9IGZ1bmN0aW9uIChiaW5hcnlTdHJpbmcpIHtcbiAgICAgICAgYmluYXJ5U3RyaW5nID0gYmluYXJ5U3RyaW5nLnJlcGxhY2UoLzArJC8sICcnKTtcbiAgICAgICAgdmFyIHVudXNlZEJpdHMgPSA4IC0gYmluYXJ5U3RyaW5nLmxlbmd0aCAlIDg7XG4gICAgICAgIGlmICh1bnVzZWRCaXRzID09IDgpXG4gICAgICAgICAgICB1bnVzZWRCaXRzID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gdW51c2VkQml0czsgaSsrKSB7XG4gICAgICAgICAgICBiaW5hcnlTdHJpbmcgKz0gJzAnO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluYXJ5U3RyaW5nLmxlbmd0aCAtIDE7IGkgKz0gOCkge1xuICAgICAgICAgICAgdmFyIGIgPSBiaW5hcnlTdHJpbmcuc3Vic3RyKGksIDgpO1xuICAgICAgICAgICAgdmFyIHggPSBwYXJzZUludChiLCAyKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICBpZiAoeC5sZW5ndGggPT0gMSlcbiAgICAgICAgICAgICAgICB4ID0gJzAnICsgeDtcbiAgICAgICAgICAgIGggKz0geDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhUTFYgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhWID0gJzAnICsgdW51c2VkQml0cyArIGg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzZXQgQVNOLjEgVExWIHZhbHVlKFYpIGJ5IGFuIGFycmF5IG9mIGJvb2xlYW48YnIvPlxuICAgICAqIEBuYW1lIHNldEJ5Qm9vbGVhbkFycmF5XG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJCaXRTdHJpbmcjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHthcnJheX0gYm9vbGVhbkFycmF5IGFycmF5IG9mIGJvb2xlYW4gKGV4LiBbdHJ1ZSwgZmFsc2UsIHRydWVdKVxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIE5PVEU6IFRyYWlsaW5nIGZhbHNlcyB3aWxsIGJlIGlnbm9yZWQgaW4gdGhlIEFTTi4xIERFUiBPYmplY3QuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJCaXRTdHJpbmcoKTtcbiAgICAgKiBvLnNldEJ5Qm9vbGVhbkFycmF5KFtmYWxzZSwgdHJ1ZSwgZmFsc2UsIHRydWUsIHRydWVdKTtcbiAgICAgKi9cbiAgICB0aGlzLnNldEJ5Qm9vbGVhbkFycmF5ID0gZnVuY3Rpb24gKGJvb2xlYW5BcnJheSkge1xuICAgICAgICB2YXIgcyA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvb2xlYW5BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJvb2xlYW5BcnJheVtpXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcyArPSAnMSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzICs9ICcwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEJ5QmluYXJ5U3RyaW5nKHMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogZ2VuZXJhdGUgYW4gYXJyYXkgb2YgZmFsc2VzIHdpdGggc3BlY2lmaWVkIGxlbmd0aDxici8+XG4gICAgICogQG5hbWUgbmV3RmFsc2VBcnJheVxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSQml0U3RyaW5nXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBuTGVuZ3RoIGxlbmd0aCBvZiBhcnJheSB0byBnZW5lcmF0ZVxuICAgICAqIEByZXR1cm4ge2FycmF5fSBhcnJheSBvZiBib29sZWFuIGZhbHNlc1xuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIFRoaXMgc3RhdGljIG1ldGhvZCBtYXkgYmUgdXNlZnVsIHRvIGluaXRpYWxpemUgYm9vbGVhbiBhcnJheS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUkJpdFN0cmluZygpO1xuICAgICAqIG8ubmV3RmFsc2VBcnJheSgzKSAmcmFycjsgW2ZhbHNlLCBmYWxzZSwgZmFsc2VdXG4gICAgICovXG4gICAgdGhpcy5uZXdGYWxzZUFycmF5ID0gZnVuY3Rpb24gKG5MZW5ndGgpIHtcbiAgICAgICAgdmFyIGEgPSBuZXcgQXJyYXkobkxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhW2ldID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfTtcbiAgICB0aGlzLmdldEZyZXNoVmFsdWVIZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhWO1xuICAgIH07XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcyA9PSBcInN0cmluZ1wiICYmIHBhcmFtcy50b0xvd2VyQ2FzZSgpLm1hdGNoKC9eWzAtOWEtZl0rJC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldEhleFZhbHVlSW5jbHVkaW5nVW51c2VkQml0cyhwYXJhbXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNbJ2hleCddICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SGV4VmFsdWVJbmNsdWRpbmdVbnVzZWRCaXRzKHBhcmFtc1snaGV4J10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNbJ2JpbiddICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QnlCaW5hcnlTdHJpbmcocGFyYW1zWydiaW4nXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBhcmFtc1snYXJyYXknXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJ5Qm9vbGVhbkFycmF5KHBhcmFtc1snYXJyYXknXSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUkJpdFN0cmluZywgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBPY3RldFN0cmluZzxici8+XG4gKiBAbmFtZSBLSlVSLmFzbjEuREVST2N0ZXRTdHJpbmdcbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIE9jdGV0U3RyaW5nXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgYXNzb2NpYXRpdmUgYXJyYXkgb2YgcGFyYW1ldGVycyAoZXguIHsnc3RyJzogJ2FhYSd9KVxuICogQGV4dGVuZHMgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgQVNOLjEgT2N0ZXRTdHJpbmcgc2ltcGxlIHR5cGUuPGJyLz5cbiAqIFN1cHBvcnRlZCBcInBhcmFtc1wiIGF0dHJpYnV0ZXMgYXJlOlxuICogPHVsPlxuICogPGxpPnN0ciAtIHRvIHNldCBhIHN0cmluZyBhcyBhIHZhbHVlPC9saT5cbiAqIDxsaT5oZXggLSB0byBzZXQgYSBoZXhhZGVjaW1hbCBzdHJpbmcgYXMgYSB2YWx1ZTwvbGk+XG4gKiA8bGk+b2JqIC0gdG8gc2V0IGEgZW5jYXBzdWxhdGVkIEFTTi4xIHZhbHVlIGJ5IEpTT04gb2JqZWN0XG4gKiB3aGljaCBpcyBkZWZpbmVkIGluIHtAbGluayBLSlVSLmFzbjEuQVNOMVV0aWwubmV3T2JqZWN0fTwvbGk+XG4gKiA8L3VsPlxuICogTk9URTogQSBwYXJhbWV0ZXIgJ29iaicgaGF2ZSBiZWVuIHN1cHBvcnRlZFxuICogZm9yIFwiT0NURVQgU1RSSU5HLCBlbmNhcHN1bGF0ZXNcIiBzdHJ1Y3R1cmUuXG4gKiBzaW5jZSBhc24xIDEuMC4xMSwganNyc2FzaWduIDYuMS4xICgyMDE2LVNlcC0yNSkuXG4gKiBAc2VlIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyAtIHN1cGVyY2xhc3NcbiAqIEBleGFtcGxlXG4gKiAvLyBkZWZhdWx0IGNvbnN0cnVjdG9yXG4gKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJPY3RldFN0cmluZygpO1xuICogLy8gaW5pdGlhbGl6ZSB3aXRoIHN0cmluZ1xuICogbyA9IG5ldyBLSlVSLmFzbjEuREVST2N0ZXRTdHJpbmcoe3N0cjogXCJhYWFcIn0pO1xuICogLy8gaW5pdGlhbGl6ZSB3aXRoIGhleGFkZWNpbWFsIHN0cmluZ1xuICogbyA9IG5ldyBLSlVSLmFzbjEuREVST2N0ZXRTdHJpbmcoe2hleDogXCI2MTYxNjFcIn0pO1xuICogLy8gaW5pdGlhbGl6ZSB3aXRoIEFTTjFVdGlsLm5ld09iamVjdCBhcmd1bWVudFxuICogbyA9IG5ldyBLSlVSLmFzbjEuREVST2N0ZXRTdHJpbmcoe29iajoge3NlcTogW3tpbnQ6IDN9LCB7cHJuc3RyOiAnYWFhJ31dfX0pO1xuICogLy8gYWJvdmUgZ2VuZXJhdGVzIGEgQVNOLjEgZGF0YSBsaWtlIHRoaXM6XG4gKiAvLyBPQ1RFVCBTVFJJTkcsIGVuY2Fwc3VsYXRlcyB7XG4gKiAvLyAgIFNFUVVFTkNFIHtcbiAqIC8vICAgICBJTlRFR0VSIDNcbiAqIC8vICAgICBQcmludGFibGVTdHJpbmcgJ2FhYSdcbiAqIC8vICAgICB9XG4gKiAvLyAgIH1cbiAqL1xuS0pVUi5hc24xLkRFUk9jdGV0U3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcGFyYW1zLm9iaiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgbyA9IEtKVVIuYXNuMS5BU04xVXRpbC5uZXdPYmplY3QocGFyYW1zLm9iaik7XG4gICAgICAgIHBhcmFtcy5oZXggPSBvLmdldEVuY29kZWRIZXgoKTtcbiAgICB9XG4gICAgS0pVUi5hc24xLkRFUk9jdGV0U3RyaW5nLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJhbXMpO1xuICAgIHRoaXMuaFQgPSBcIjA0XCI7XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUk9jdGV0U3RyaW5nLCBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBOdWxsXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSTnVsbFxuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgTnVsbFxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogQHNlZSBLSlVSLmFzbjEuQVNOMU9iamVjdCAtIHN1cGVyY2xhc3NcbiAqL1xuS0pVUi5hc24xLkRFUk51bGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgS0pVUi5hc24xLkRFUk51bGwuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaFQgPSBcIjA1XCI7XG4gICAgdGhpcy5oVExWID0gXCIwNTAwXCI7XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUk51bGwsIEtKVVIuYXNuMS5BU04xT2JqZWN0KTtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIGNsYXNzIGZvciBBU04uMSBERVIgT2JqZWN0SWRlbnRpZmllclxuICogQG5hbWUgS0pVUi5hc24xLkRFUk9iamVjdElkZW50aWZpZXJcbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIE9iamVjdElkZW50aWZpZXJcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBhc3NvY2lhdGl2ZSBhcnJheSBvZiBwYXJhbWV0ZXJzIChleC4geydvaWQnOiAnMi41LjQuNSd9KVxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPm9pZCAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBhIG9pZCBzdHJpbmcgKGV4LiAyLjUuNC4xMyk8L2xpPlxuICogPGxpPmhleCAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBhIGhleGFkZWNpbWFsIHN0cmluZzwvbGk+XG4gKiA8L3VsPlxuICogTk9URTogJ3BhcmFtcycgY2FuIGJlIG9taXR0ZWQuXG4gKi9cbktKVVIuYXNuMS5ERVJPYmplY3RJZGVudGlmaWVyID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIHZhciBpdG94ID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGggPSBpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKGgubGVuZ3RoID09IDEpXG4gICAgICAgICAgICBoID0gJzAnICsgaDtcbiAgICAgICAgcmV0dXJuIGg7XG4gICAgfTtcbiAgICB2YXIgcm9pZHRveCA9IGZ1bmN0aW9uIChyb2lkKSB7XG4gICAgICAgIHZhciBoID0gJyc7XG4gICAgICAgIHZhciBiaSA9IG5ldyBCaWdJbnRlZ2VyKHJvaWQsIDEwKTtcbiAgICAgICAgdmFyIGIgPSBiaS50b1N0cmluZygyKTtcbiAgICAgICAgdmFyIHBhZExlbiA9IDcgLSBiLmxlbmd0aCAlIDc7XG4gICAgICAgIGlmIChwYWRMZW4gPT0gNylcbiAgICAgICAgICAgIHBhZExlbiA9IDA7XG4gICAgICAgIHZhciBiUGFkID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFkTGVuOyBpKyspXG4gICAgICAgICAgICBiUGFkICs9ICcwJztcbiAgICAgICAgYiA9IGJQYWQgKyBiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoIC0gMTsgaSArPSA3KSB7XG4gICAgICAgICAgICB2YXIgYjggPSBiLnN1YnN0cihpLCA3KTtcbiAgICAgICAgICAgIGlmIChpICE9IGIubGVuZ3RoIC0gNylcbiAgICAgICAgICAgICAgICBiOCA9ICcxJyArIGI4O1xuICAgICAgICAgICAgaCArPSBpdG94KHBhcnNlSW50KGI4LCAyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGg7XG4gICAgfTtcbiAgICBLSlVSLmFzbjEuREVST2JqZWN0SWRlbnRpZmllci5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gICAgdGhpcy5oVCA9IFwiMDZcIjtcbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgYnkgYSBoZXhhZGVjaW1hbCBzdHJpbmdcbiAgICAgKiBAbmFtZSBzZXRWYWx1ZUhleFxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVST2JqZWN0SWRlbnRpZmllciNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmV3SGV4U3RyaW5nIGhleGFkZWNpbWFsIHZhbHVlIG9mIE9JRCBieXRlc1xuICAgICAqL1xuICAgIHRoaXMuc2V0VmFsdWVIZXggPSBmdW5jdGlvbiAobmV3SGV4U3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIHRoaXMucyA9IG51bGw7XG4gICAgICAgIHRoaXMuaFYgPSBuZXdIZXhTdHJpbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgYnkgYSBPSUQgc3RyaW5nPGJyLz5cbiAgICAgKiBAbmFtZSBzZXRWYWx1ZU9pZFN0cmluZ1xuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVST2JqZWN0SWRlbnRpZmllciNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2lkU3RyaW5nIE9JRCBzdHJpbmcgKGV4LiAyLjUuNC4xMylcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUk9iamVjdElkZW50aWZpZXIoKTtcbiAgICAgKiBvLnNldFZhbHVlT2lkU3RyaW5nKFwiMi41LjQuMTNcIik7XG4gICAgICovXG4gICAgdGhpcy5zZXRWYWx1ZU9pZFN0cmluZyA9IGZ1bmN0aW9uIChvaWRTdHJpbmcpIHtcbiAgICAgICAgaWYgKCFvaWRTdHJpbmcubWF0Y2goL15bMC05Ll0rJC8pKSB7XG4gICAgICAgICAgICB0aHJvdyBcIm1hbGZvcm1lZCBvaWQgc3RyaW5nOiBcIiArIG9pZFN0cmluZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaCA9ICcnO1xuICAgICAgICB2YXIgYSA9IG9pZFN0cmluZy5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgaTAgPSBwYXJzZUludChhWzBdKSAqIDQwICsgcGFyc2VJbnQoYVsxXSk7XG4gICAgICAgIGggKz0gaXRveChpMCk7XG4gICAgICAgIGEuc3BsaWNlKDAsIDIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGggKz0gcm9pZHRveChhW2ldKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhUTFYgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnMgPSBudWxsO1xuICAgICAgICB0aGlzLmhWID0gaDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBhIE9JRCBuYW1lXG4gICAgICogQG5hbWUgc2V0VmFsdWVOYW1lXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJPYmplY3RJZGVudGlmaWVyI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvaWROYW1lIE9JRCBuYW1lIChleC4gJ3NlcnZlckF1dGgnKVxuICAgICAqIEBzaW5jZSAxLjAuMVxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIE9JRCBuYW1lIHNoYWxsIGJlIGRlZmluZWQgaW4gJ0tKVVIuYXNuMS54NTA5Lk9JRC5uYW1lMm9pZExpc3QnLlxuICAgICAqIE90aGVyd2lzZSByYWlzZSBlcnJvci5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUk9iamVjdElkZW50aWZpZXIoKTtcbiAgICAgKiBvLnNldFZhbHVlTmFtZShcInNlcnZlckF1dGhcIik7XG4gICAgICovXG4gICAgdGhpcy5zZXRWYWx1ZU5hbWUgPSBmdW5jdGlvbiAob2lkTmFtZSkge1xuICAgICAgICB2YXIgb2lkID0gS0pVUi5hc24xLng1MDkuT0lELm5hbWUyb2lkKG9pZE5hbWUpO1xuICAgICAgICBpZiAob2lkICE9PSAnJykge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZU9pZFN0cmluZyhvaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJERVJPYmplY3RJZGVudGlmaWVyIG9pZE5hbWUgdW5kZWZpbmVkOiBcIiArIG9pZE5hbWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZ2V0RnJlc2hWYWx1ZUhleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcbiAgICBpZiAocGFyYW1zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMubWF0Y2goL15bMC0yXS5bMC05Ll0rJC8pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZU9pZFN0cmluZyhwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZU5hbWUocGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJhbXMub2lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVPaWRTdHJpbmcocGFyYW1zLm9pZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyYW1zLmhleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlSGV4KHBhcmFtcy5oZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmFtcy5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVOYW1lKHBhcmFtcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVST2JqZWN0SWRlbnRpZmllciwgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBFbnVtZXJhdGVkXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSRW51bWVyYXRlZFxuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgRW51bWVyYXRlZFxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPmludCAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBpbnRlZ2VyIHZhbHVlPC9saT5cbiAqIDxsaT5oZXggLSBzcGVjaWZ5IGluaXRpYWwgQVNOLjEgdmFsdWUoVikgYnkgYSBoZXhhZGVjaW1hbCBzdHJpbmc8L2xpPlxuICogPC91bD5cbiAqIE5PVEU6ICdwYXJhbXMnIGNhbiBiZSBvbWl0dGVkLlxuICogQGV4YW1wbGVcbiAqIG5ldyBLSlVSLmFzbjEuREVSRW51bWVyYXRlZCgxMjMpO1xuICogbmV3IEtKVVIuYXNuMS5ERVJFbnVtZXJhdGVkKHtpbnQ6IDEyM30pO1xuICogbmV3IEtKVVIuYXNuMS5ERVJFbnVtZXJhdGVkKHtoZXg6ICcxZmFkJ30pO1xuICovXG5LSlVSLmFzbjEuREVSRW51bWVyYXRlZCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBLSlVSLmFzbjEuREVSRW51bWVyYXRlZC5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gICAgdGhpcy5oVCA9IFwiMGFcIjtcbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgYnkgVG9tIFd1J3MgQmlnSW50ZWdlciBvYmplY3RcbiAgICAgKiBAbmFtZSBzZXRCeUJpZ0ludGVnZXJcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkVudW1lcmF0ZWQjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtCaWdJbnRlZ2VyfSBiaWdJbnRlZ2VyVmFsdWUgdG8gc2V0XG4gICAgICovXG4gICAgdGhpcy5zZXRCeUJpZ0ludGVnZXIgPSBmdW5jdGlvbiAoYmlnSW50ZWdlclZhbHVlKSB7XG4gICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaFYgPSBLSlVSLmFzbjEuQVNOMVV0aWwuYmlnSW50VG9NaW5Ud29zQ29tcGxlbWVudHNIZXgoYmlnSW50ZWdlclZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBpbnRlZ2VyIHZhbHVlXG4gICAgICogQG5hbWUgc2V0QnlJbnRlZ2VyXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJFbnVtZXJhdGVkI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gaW50ZWdlciB2YWx1ZSB0byBzZXRcbiAgICAgKi9cbiAgICB0aGlzLnNldEJ5SW50ZWdlciA9IGZ1bmN0aW9uIChpbnRWYWx1ZSkge1xuICAgICAgICB2YXIgYmkgPSBuZXcgQmlnSW50ZWdlcihTdHJpbmcoaW50VmFsdWUpLCAxMCk7XG4gICAgICAgIHRoaXMuc2V0QnlCaWdJbnRlZ2VyKGJpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBpbnRlZ2VyIHZhbHVlXG4gICAgICogQG5hbWUgc2V0VmFsdWVIZXhcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkVudW1lcmF0ZWQjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhleGFkZWNpbWFsIHN0cmluZyBvZiBpbnRlZ2VyIHZhbHVlXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogPGJyLz5cbiAgICAgKiBOT1RFOiBWYWx1ZSBzaGFsbCBiZSByZXByZXNlbnRlZCBieSBtaW5pbXVtIG9jdGV0IGxlbmd0aCBvZlxuICAgICAqIHR3bydzIGNvbXBsZW1lbnQgcmVwcmVzZW50YXRpb24uXG4gICAgICovXG4gICAgdGhpcy5zZXRWYWx1ZUhleCA9IGZ1bmN0aW9uIChuZXdIZXhTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5oViA9IG5ld0hleFN0cmluZztcbiAgICB9O1xuICAgIHRoaXMuZ2V0RnJlc2hWYWx1ZUhleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zWydpbnQnXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJ5SW50ZWdlcihwYXJhbXNbJ2ludCddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW1zID09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QnlJbnRlZ2VyKHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHBhcmFtc1snaGV4J10gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZUhleChwYXJhbXNbJ2hleCddKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSRW51bWVyYXRlZCwgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBVVEY4U3RyaW5nXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSVVRGOFN0cmluZ1xuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgVVRGOFN0cmluZ1xuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIGFzc29jaWF0aXZlIGFycmF5IG9mIHBhcmFtZXRlcnMgKGV4LiB7J3N0cic6ICdhYWEnfSlcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBAc2VlIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyAtIHN1cGVyY2xhc3NcbiAqL1xuS0pVUi5hc24xLkRFUlVURjhTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUlVURjhTdHJpbmcuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHBhcmFtcyk7XG4gICAgdGhpcy5oVCA9IFwiMGNcIjtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSVVRGOFN0cmluZywgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nKTtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIGNsYXNzIGZvciBBU04uMSBERVIgTnVtZXJpY1N0cmluZ1xuICogQG5hbWUgS0pVUi5hc24xLkRFUk51bWVyaWNTdHJpbmdcbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIE51bWVyaWNTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBhc3NvY2lhdGl2ZSBhcnJheSBvZiBwYXJhbWV0ZXJzIChleC4geydzdHInOiAnYWFhJ30pXG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogQHNlZSBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcgLSBzdXBlcmNsYXNzXG4gKi9cbktKVVIuYXNuMS5ERVJOdW1lcmljU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIEtKVVIuYXNuMS5ERVJOdW1lcmljU3RyaW5nLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJhbXMpO1xuICAgIHRoaXMuaFQgPSBcIjEyXCI7XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUk51bWVyaWNTdHJpbmcsIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyk7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBjbGFzcyBmb3IgQVNOLjEgREVSIFByaW50YWJsZVN0cmluZ1xuICogQG5hbWUgS0pVUi5hc24xLkRFUlByaW50YWJsZVN0cmluZ1xuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgUHJpbnRhYmxlU3RyaW5nXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgYXNzb2NpYXRpdmUgYXJyYXkgb2YgcGFyYW1ldGVycyAoZXguIHsnc3RyJzogJ2FhYSd9KVxuICogQGV4dGVuZHMgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nXG4gKiBAZGVzY3JpcHRpb25cbiAqIEBzZWUgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nIC0gc3VwZXJjbGFzc1xuICovXG5LSlVSLmFzbjEuREVSUHJpbnRhYmxlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIEtKVVIuYXNuMS5ERVJQcmludGFibGVTdHJpbmcuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHBhcmFtcyk7XG4gICAgdGhpcy5oVCA9IFwiMTNcIjtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSUHJpbnRhYmxlU3RyaW5nLCBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBUZWxldGV4U3RyaW5nXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSVGVsZXRleFN0cmluZ1xuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgVGVsZXRleFN0cmluZ1xuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIGFzc29jaWF0aXZlIGFycmF5IG9mIHBhcmFtZXRlcnMgKGV4LiB7J3N0cic6ICdhYWEnfSlcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBAc2VlIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyAtIHN1cGVyY2xhc3NcbiAqL1xuS0pVUi5hc24xLkRFUlRlbGV0ZXhTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUlRlbGV0ZXhTdHJpbmcuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHBhcmFtcyk7XG4gICAgdGhpcy5oVCA9IFwiMTRcIjtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSVGVsZXRleFN0cmluZywgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nKTtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIGNsYXNzIGZvciBBU04uMSBERVIgSUE1U3RyaW5nXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSSUE1U3RyaW5nXG4gKiBAY2xhc3MgY2xhc3MgZm9yIEFTTi4xIERFUiBJQTVTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBhc3NvY2lhdGl2ZSBhcnJheSBvZiBwYXJhbWV0ZXJzIChleC4geydzdHInOiAnYWFhJ30pXG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogQHNlZSBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcgLSBzdXBlcmNsYXNzXG4gKi9cbktKVVIuYXNuMS5ERVJJQTVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUklBNVN0cmluZy5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyYW1zKTtcbiAgICB0aGlzLmhUID0gXCIxNlwiO1xufTtcbllBSE9PLmxhbmcuZXh0ZW5kKEtKVVIuYXNuMS5ERVJJQTVTdHJpbmcsIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyk7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBjbGFzcyBmb3IgQVNOLjEgREVSIFVUQ1RpbWVcbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJVVENUaW1lXG4gKiBAY2xhc3MgY2xhc3MgZm9yIEFTTi4xIERFUiBVVENUaW1lXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgYXNzb2NpYXRpdmUgYXJyYXkgb2YgcGFyYW1ldGVycyAoZXguIHsnc3RyJzogJzEzMDQzMDIzNTk1OVonfSlcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFRpbWVcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPnN0ciAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBhIHN0cmluZyAoZXguJzEzMDQzMDIzNTk1OVonKTwvbGk+XG4gKiA8bGk+aGV4IC0gc3BlY2lmeSBpbml0aWFsIEFTTi4xIHZhbHVlKFYpIGJ5IGEgaGV4YWRlY2ltYWwgc3RyaW5nPC9saT5cbiAqIDxsaT5kYXRlIC0gc3BlY2lmeSBEYXRlIG9iamVjdC48L2xpPlxuICogPC91bD5cbiAqIE5PVEU6ICdwYXJhbXMnIGNhbiBiZSBvbWl0dGVkLlxuICogPGg0PkVYQU1QTEVTPC9oND5cbiAqIEBleGFtcGxlXG4gKiBkMSA9IG5ldyBLSlVSLmFzbjEuREVSVVRDVGltZSgpO1xuICogZDEuc2V0U3RyaW5nKCcxMzA0MzAxMjU5NTlaJyk7XG4gKlxuICogZDIgPSBuZXcgS0pVUi5hc24xLkRFUlVUQ1RpbWUoeydzdHInOiAnMTMwNDMwMTI1OTU5Wid9KTtcbiAqIGQzID0gbmV3IEtKVVIuYXNuMS5ERVJVVENUaW1lKHsnZGF0ZSc6IG5ldyBEYXRlKERhdGUuVVRDKDIwMTUsIDAsIDMxLCAwLCAwLCAwLCAwKSl9KTtcbiAqIGQ0ID0gbmV3IEtKVVIuYXNuMS5ERVJVVENUaW1lKCcxMzA0MzAxMjU5NTlaJyk7XG4gKi9cbktKVVIuYXNuMS5ERVJVVENUaW1lID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIEtKVVIuYXNuMS5ERVJVVENUaW1lLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJhbXMpO1xuICAgIHRoaXMuaFQgPSBcIjE3XCI7XG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IGEgRGF0ZSBvYmplY3Q8YnIvPlxuICAgICAqIEBuYW1lIHNldEJ5RGF0ZVxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSVVRDVGltZSNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmplY3QgRGF0ZSBvYmplY3QgdG8gc2V0IEFTTi4xIHZhbHVlKFYpXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJVVENUaW1lKCk7XG4gICAgICogby5zZXRCeURhdGUobmV3IERhdGUoXCIyMDE2LzEyLzMxXCIpKTtcbiAgICAgKi9cbiAgICB0aGlzLnNldEJ5RGF0ZSA9IGZ1bmN0aW9uIChkYXRlT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVPYmplY3Q7XG4gICAgICAgIHRoaXMucyA9IHRoaXMuZm9ybWF0RGF0ZSh0aGlzLmRhdGUsICd1dGMnKTtcbiAgICAgICAgdGhpcy5oViA9IHN0b2hleCh0aGlzLnMpO1xuICAgIH07XG4gICAgdGhpcy5nZXRGcmVzaFZhbHVlSGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZGF0ZSA9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB0aGlzLnMgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRoaXMucyA9IHRoaXMuZm9ybWF0RGF0ZSh0aGlzLmRhdGUsICd1dGMnKTtcbiAgICAgICAgICAgIHRoaXMuaFYgPSBzdG9oZXgodGhpcy5zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5oVjtcbiAgICB9O1xuICAgIGlmIChwYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyYW1zLnN0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0cmluZyhwYXJhbXMuc3RyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW1zID09IFwic3RyaW5nXCIgJiYgcGFyYW1zLm1hdGNoKC9eWzAtOV17MTJ9WiQvKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmcocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJhbXMuaGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5nSGV4KHBhcmFtcy5oZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmFtcy5kYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QnlEYXRlKHBhcmFtcy5kYXRlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSVVRDVGltZSwgS0pVUi5hc24xLkRFUkFic3RyYWN0VGltZSk7XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBjbGFzcyBmb3IgQVNOLjEgREVSIEdlbmVyYWxpemVkVGltZVxuICogQG5hbWUgS0pVUi5hc24xLkRFUkdlbmVyYWxpemVkVGltZVxuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgR2VuZXJhbGl6ZWRUaW1lXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgYXNzb2NpYXRpdmUgYXJyYXkgb2YgcGFyYW1ldGVycyAoZXguIHsnc3RyJzogJzIwMTMwNDMwMjM1OTU5Wid9KVxuICogQHByb3BlcnR5IHtCb29sZWFufSB3aXRoTWlsbGlzIGZsYWcgdG8gc2hvdyBtaWxsaXNlY29uZHMgb3Igbm90XG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuREVSQWJzdHJhY3RUaW1lXG4gKiBAZGVzY3JpcHRpb25cbiAqIDxici8+XG4gKiBBcyBmb3IgYXJndW1lbnQgJ3BhcmFtcycgZm9yIGNvbnN0cnVjdG9yLCB5b3UgY2FuIHNwZWNpZnkgb25lIG9mXG4gKiBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqIDx1bD5cbiAqIDxsaT5zdHIgLSBzcGVjaWZ5IGluaXRpYWwgQVNOLjEgdmFsdWUoVikgYnkgYSBzdHJpbmcgKGV4LicyMDEzMDQzMDIzNTk1OVonKTwvbGk+XG4gKiA8bGk+aGV4IC0gc3BlY2lmeSBpbml0aWFsIEFTTi4xIHZhbHVlKFYpIGJ5IGEgaGV4YWRlY2ltYWwgc3RyaW5nPC9saT5cbiAqIDxsaT5kYXRlIC0gc3BlY2lmeSBEYXRlIG9iamVjdC48L2xpPlxuICogPGxpPm1pbGxpcyAtIHNwZWNpZnkgZmxhZyB0byBzaG93IG1pbGxpc2Vjb25kcyAoZnJvbSAxLjAuNik8L2xpPlxuICogPC91bD5cbiAqIE5PVEUxOiAncGFyYW1zJyBjYW4gYmUgb21pdHRlZC5cbiAqIE5PVEUyOiAnd2l0aE1pbGxpcycgcHJvcGVydHkgaXMgc3VwcG9ydGVkIGZyb20gYXNuMSAxLjAuNi5cbiAqL1xuS0pVUi5hc24xLkRFUkdlbmVyYWxpemVkVGltZSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBLSlVSLmFzbjEuREVSR2VuZXJhbGl6ZWRUaW1lLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJhbXMpO1xuICAgIHRoaXMuaFQgPSBcIjE4XCI7XG4gICAgdGhpcy53aXRoTWlsbGlzID0gZmFsc2U7XG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IGEgRGF0ZSBvYmplY3RcbiAgICAgKiBAbmFtZSBzZXRCeURhdGVcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkdlbmVyYWxpemVkVGltZSNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmplY3QgRGF0ZSBvYmplY3QgdG8gc2V0IEFTTi4xIHZhbHVlKFYpXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBXaGVuIHlvdSBzcGVjaWZ5IFVUQyB0aW1lLCB1c2UgJ0RhdGUuVVRDJyBtZXRob2QgbGlrZSB0aGlzOjxici8+XG4gICAgICogbzEgPSBuZXcgREVSVVRDVGltZSgpO1xuICAgICAqIG8xLnNldEJ5RGF0ZShkYXRlKTtcbiAgICAgKlxuICAgICAqIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygyMDE1LCAwLCAzMSwgMjMsIDU5LCA1OSwgMCkpOyAjMjAxNUpBTjMxIDIzOjU5OjU5XG4gICAgICovXG4gICAgdGhpcy5zZXRCeURhdGUgPSBmdW5jdGlvbiAoZGF0ZU9iamVjdCkge1xuICAgICAgICB0aGlzLmhUTFYgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlT2JqZWN0O1xuICAgICAgICB0aGlzLnMgPSB0aGlzLmZvcm1hdERhdGUodGhpcy5kYXRlLCAnZ2VuJywgdGhpcy53aXRoTWlsbGlzKTtcbiAgICAgICAgdGhpcy5oViA9IHN0b2hleCh0aGlzLnMpO1xuICAgIH07XG4gICAgdGhpcy5nZXRGcmVzaFZhbHVlSGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRlID09PSB1bmRlZmluZWQgJiYgdGhpcy5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnMgPSB0aGlzLmZvcm1hdERhdGUodGhpcy5kYXRlLCAnZ2VuJywgdGhpcy53aXRoTWlsbGlzKTtcbiAgICAgICAgICAgIHRoaXMuaFYgPSBzdG9oZXgodGhpcy5zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5oVjtcbiAgICB9O1xuICAgIGlmIChwYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyYW1zLnN0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0cmluZyhwYXJhbXMuc3RyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW1zID09IFwic3RyaW5nXCIgJiYgcGFyYW1zLm1hdGNoKC9eWzAtOV17MTR9WiQvKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmcocGFyYW1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJhbXMuaGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5nSGV4KHBhcmFtcy5oZXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmFtcy5kYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QnlEYXRlKHBhcmFtcy5kYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLm1pbGxpcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy53aXRoTWlsbGlzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSR2VuZXJhbGl6ZWRUaW1lLCBLSlVSLmFzbjEuREVSQWJzdHJhY3RUaW1lKTtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIGNsYXNzIGZvciBBU04uMSBERVIgU2VxdWVuY2VcbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJTZXF1ZW5jZVxuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgU2VxdWVuY2VcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cnVjdHVyZWRcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPmFycmF5IC0gc3BlY2lmeSBhcnJheSBvZiBBU04xT2JqZWN0IHRvIHNldCBlbGVtZW50cyBvZiBjb250ZW50PC9saT5cbiAqIDwvdWw+XG4gKiBOT1RFOiAncGFyYW1zJyBjYW4gYmUgb21pdHRlZC5cbiAqL1xuS0pVUi5hc24xLkRFUlNlcXVlbmNlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIEtKVVIuYXNuMS5ERVJTZXF1ZW5jZS5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyYW1zKTtcbiAgICB0aGlzLmhUID0gXCIzMFwiO1xuICAgIHRoaXMuZ2V0RnJlc2hWYWx1ZUhleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGggPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFzbjFBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGFzbjFPYmogPSB0aGlzLmFzbjFBcnJheVtpXTtcbiAgICAgICAgICAgIGggKz0gYXNuMU9iai5nZXRFbmNvZGVkSGV4KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oViA9IGg7XG4gICAgICAgIHJldHVybiB0aGlzLmhWO1xuICAgIH07XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUlNlcXVlbmNlLCBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJ1Y3R1cmVkKTtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIGNsYXNzIGZvciBBU04uMSBERVIgU2V0XG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSU2V0XG4gKiBAY2xhc3MgY2xhc3MgZm9yIEFTTi4xIERFUiBTZXRcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cnVjdHVyZWRcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPmFycmF5IC0gc3BlY2lmeSBhcnJheSBvZiBBU04xT2JqZWN0IHRvIHNldCBlbGVtZW50cyBvZiBjb250ZW50PC9saT5cbiAqIDxsaT5zb3J0ZmxhZyAtIGZsYWcgZm9yIHNvcnQgKGRlZmF1bHQ6IHRydWUpLiBBU04uMSBCRVIgaXMgbm90IHNvcnRlZCBpbiAnU0VUIE9GJy48L2xpPlxuICogPC91bD5cbiAqIE5PVEUxOiAncGFyYW1zJyBjYW4gYmUgb21pdHRlZC48YnIvPlxuICogTk9URTI6IHNvcnRmbGFnIGlzIHN1cHBvcnRlZCBzaW5jZSAxLjAuNS5cbiAqL1xuS0pVUi5hc24xLkRFUlNldCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBLSlVSLmFzbjEuREVSU2V0LnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJhbXMpO1xuICAgIHRoaXMuaFQgPSBcIjMxXCI7XG4gICAgdGhpcy5zb3J0RmxhZyA9IHRydWU7IC8vIGl0ZW0gc2hhbGwgYmUgc29ydGVkIG9ubHkgaW4gQVNOLjEgREVSXG4gICAgdGhpcy5nZXRGcmVzaFZhbHVlSGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYSA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXNuMUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXNuMU9iaiA9IHRoaXMuYXNuMUFycmF5W2ldO1xuICAgICAgICAgICAgYS5wdXNoKGFzbjFPYmouZ2V0RW5jb2RlZEhleCgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zb3J0RmxhZyA9PSB0cnVlKVxuICAgICAgICAgICAgYS5zb3J0KCk7XG4gICAgICAgIHRoaXMuaFYgPSBhLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gdGhpcy5oVjtcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuc29ydGZsYWcgIT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgcGFyYW1zLnNvcnRmbGFnID09IGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5zb3J0RmxhZyA9IGZhbHNlO1xuICAgIH1cbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSU2V0LCBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJ1Y3R1cmVkKTtcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIGNsYXNzIGZvciBBU04uMSBERVIgVGFnZ2VkT2JqZWN0XG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSVGFnZ2VkT2JqZWN0XG4gKiBAY2xhc3MgY2xhc3MgZm9yIEFTTi4xIERFUiBUYWdnZWRPYmplY3RcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5BU04xT2JqZWN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIDxici8+XG4gKiBQYXJhbWV0ZXIgJ3RhZ05vTmV4JyBpcyBBU04uMSB0YWcoVCkgdmFsdWUgZm9yIHRoaXMgb2JqZWN0LlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBmaW5kICdbMV0nIHRhZyBpbiBhIEFTTi4xIGR1bXAsXG4gKiAndGFnTm9IZXgnIHdpbGwgYmUgJ2ExJy5cbiAqIDxici8+XG4gKiBBcyBmb3Igb3B0aW9uYWwgYXJndW1lbnQgJ3BhcmFtcycgZm9yIGNvbnN0cnVjdG9yLCB5b3UgY2FuIHNwZWNpZnkgKkFOWSogb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPmV4cGxpY2l0IC0gc3BlY2lmeSB0cnVlIGlmIHRoaXMgaXMgZXhwbGljaXQgdGFnIG90aGVyd2lzZSBmYWxzZVxuICogICAgIChkZWZhdWx0IGlzICd0cnVlJykuPC9saT5cbiAqIDxsaT50YWcgLSBzcGVjaWZ5IHRhZyAoZGVmYXVsdCBpcyAnYTAnIHdoaWNoIG1lYW5zIFswXSk8L2xpPlxuICogPGxpPm9iaiAtIHNwZWNpZnkgQVNOMU9iamVjdCB3aGljaCBpcyB0YWdnZWQ8L2xpPlxuICogPC91bD5cbiAqIEBleGFtcGxlXG4gKiBkMSA9IG5ldyBLSlVSLmFzbjEuREVSVVRGOFN0cmluZyh7J3N0cic6J2EnfSk7XG4gKiBkMiA9IG5ldyBLSlVSLmFzbjEuREVSVGFnZ2VkT2JqZWN0KHsnb2JqJzogZDF9KTtcbiAqIGhleCA9IGQyLmdldEVuY29kZWRIZXgoKTtcbiAqL1xuS0pVUi5hc24xLkRFUlRhZ2dlZE9iamVjdCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBLSlVSLmFzbjEuREVSVGFnZ2VkT2JqZWN0LnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmhUID0gXCJhMFwiO1xuICAgIHRoaXMuaFYgPSAnJztcbiAgICB0aGlzLmlzRXhwbGljaXQgPSB0cnVlO1xuICAgIHRoaXMuYXNuMU9iamVjdCA9IG51bGw7XG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IGFuIEFTTjFPYmplY3RcbiAgICAgKiBAbmFtZSBzZXRTdHJpbmdcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUlRhZ2dlZE9iamVjdCNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXhwbGljaXRGbGFnIGZsYWcgZm9yIGV4cGxpY2l0L2ltcGxpY2l0IHRhZ1xuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gdGFnTm9IZXggaGV4YWRlY2ltYWwgc3RyaW5nIG9mIEFTTi4xIHRhZ1xuICAgICAqIEBwYXJhbSB7QVNOMU9iamVjdH0gYXNuMU9iamVjdCBBU04uMSB0byBlbmNhcHN1bGF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2V0QVNOMU9iamVjdCA9IGZ1bmN0aW9uIChpc0V4cGxpY2l0RmxhZywgdGFnTm9IZXgsIGFzbjFPYmplY3QpIHtcbiAgICAgICAgdGhpcy5oVCA9IHRhZ05vSGV4O1xuICAgICAgICB0aGlzLmlzRXhwbGljaXQgPSBpc0V4cGxpY2l0RmxhZztcbiAgICAgICAgdGhpcy5hc24xT2JqZWN0ID0gYXNuMU9iamVjdDtcbiAgICAgICAgaWYgKHRoaXMuaXNFeHBsaWNpdCkge1xuICAgICAgICAgICAgdGhpcy5oViA9IHRoaXMuYXNuMU9iamVjdC5nZXRFbmNvZGVkSGV4KCk7XG4gICAgICAgICAgICB0aGlzLmhUTFYgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaFYgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oVExWID0gYXNuMU9iamVjdC5nZXRFbmNvZGVkSGV4KCk7XG4gICAgICAgICAgICB0aGlzLmhUTFYgPSB0aGlzLmhUTFYucmVwbGFjZSgvXi4uLywgdGFnTm9IZXgpO1xuICAgICAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuZ2V0RnJlc2hWYWx1ZUhleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zWyd0YWcnXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmhUID0gcGFyYW1zWyd0YWcnXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1snZXhwbGljaXQnXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmlzRXhwbGljaXQgPSBwYXJhbXNbJ2V4cGxpY2l0J107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbJ29iaiddICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYXNuMU9iamVjdCA9IHBhcmFtc1snb2JqJ107XG4gICAgICAgICAgICB0aGlzLnNldEFTTjFPYmplY3QodGhpcy5pc0V4cGxpY2l0LCB0aGlzLmhULCB0aGlzLmFzbjFPYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxufTtcbllBSE9PLmxhbmcuZXh0ZW5kKEtKVVIuYXNuMS5ERVJUYWdnZWRPYmplY3QsIEtKVVIuYXNuMS5BU04xT2JqZWN0KTtcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Encrypt/lib/jsbn/jsbn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8eddxgrMtAhKHVrezXAMCo', 'jsbn');
// Script/Encrypt/lib/jsbn/jsbn.js

"use strict";

exports.__esModule = true;
exports.nbi = nbi;
exports.parseBigInt = parseBigInt;
exports.intAt = intAt;
exports.nbv = nbv;
exports.nbits = nbits;
exports.BigInteger = void 0;

var _util = require("./util");

// Copyright (c) 2005  Tom Wu
// All Rights Reserved.
// See "LICENSE" for details.
// Basic JavaScript BN library - subset useful for RSA encryption.
// Bits per digit
var dbits; // JavaScript engine analysis

var canary = 0xdeadbeefcafe;
var j_lm = (canary & 0xffffff) == 0xefcafe; //#region

var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1]; //#endregion
// (public) Constructor

var BigInteger =
/** @class */
function () {
  function BigInteger(a, b, c) {
    if (a != null) {
      if ("number" == typeof a) {
        this.fromNumber(a, b, c);
      } else if (b == null && "string" != typeof a) {
        this.fromString(a, 256);
      } else {
        this.fromString(a, b);
      }
    }
  } //#region PUBLIC
  // BigInteger.prototype.toString = bnToString;
  // (public) return string representation in given radix


  BigInteger.prototype.toString = function (b) {
    if (this.s < 0) {
      return "-" + this.negate().toString(b);
    }

    var k;

    if (b == 16) {
      k = 4;
    } else if (b == 8) {
      k = 3;
    } else if (b == 2) {
      k = 1;
    } else if (b == 32) {
      k = 5;
    } else if (b == 4) {
      k = 2;
    } else {
      return this.toRadix(b);
    }

    var km = (1 << k) - 1;
    var d;
    var m = false;
    var r = "";
    var i = this.t;
    var p = this.DB - i * this.DB % k;

    if (i-- > 0) {
      if (p < this.DB && (d = this[i] >> p) > 0) {
        m = true;
        r = (0, _util.int2char)(d);
      }

      while (i >= 0) {
        if (p < k) {
          d = (this[i] & (1 << p) - 1) << k - p;
          d |= this[--i] >> (p += this.DB - k);
        } else {
          d = this[i] >> (p -= k) & km;

          if (p <= 0) {
            p += this.DB;
            --i;
          }
        }

        if (d > 0) {
          m = true;
        }

        if (m) {
          r += (0, _util.int2char)(d);
        }
      }
    }

    return m ? r : "0";
  }; // BigInteger.prototype.negate = bnNegate;
  // (public) -this


  BigInteger.prototype.negate = function () {
    var r = nbi();
    BigInteger.ZERO.subTo(this, r);
    return r;
  }; // BigInteger.prototype.abs = bnAbs;
  // (public) |this|


  BigInteger.prototype.abs = function () {
    return this.s < 0 ? this.negate() : this;
  }; // BigInteger.prototype.compareTo = bnCompareTo;
  // (public) return + if this > a, - if this < a, 0 if equal


  BigInteger.prototype.compareTo = function (a) {
    var r = this.s - a.s;

    if (r != 0) {
      return r;
    }

    var i = this.t;
    r = i - a.t;

    if (r != 0) {
      return this.s < 0 ? -r : r;
    }

    while (--i >= 0) {
      if ((r = this[i] - a[i]) != 0) {
        return r;
      }
    }

    return 0;
  }; // BigInteger.prototype.bitLength = bnBitLength;
  // (public) return the number of bits in "this"


  BigInteger.prototype.bitLength = function () {
    if (this.t <= 0) {
      return 0;
    }

    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
  }; // BigInteger.prototype.mod = bnMod;
  // (public) this mod a


  BigInteger.prototype.mod = function (a) {
    var r = nbi();
    this.abs().divRemTo(a, null, r);

    if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
      a.subTo(r, r);
    }

    return r;
  }; // BigInteger.prototype.modPowInt = bnModPowInt;
  // (public) this^e % m, 0 <= e < 2^32


  BigInteger.prototype.modPowInt = function (e, m) {
    var z;

    if (e < 256 || m.isEven()) {
      z = new Classic(m);
    } else {
      z = new Montgomery(m);
    }

    return this.exp(e, z);
  }; // BigInteger.prototype.clone = bnClone;
  // (public)


  BigInteger.prototype.clone = function () {
    var r = nbi();
    this.copyTo(r);
    return r;
  }; // BigInteger.prototype.intValue = bnIntValue;
  // (public) return value as integer


  BigInteger.prototype.intValue = function () {
    if (this.s < 0) {
      if (this.t == 1) {
        return this[0] - this.DV;
      } else if (this.t == 0) {
        return -1;
      }
    } else if (this.t == 1) {
      return this[0];
    } else if (this.t == 0) {
      return 0;
    } // assumes 16 < DB < 32


    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
  }; // BigInteger.prototype.byteValue = bnByteValue;
  // (public) return value as byte


  BigInteger.prototype.byteValue = function () {
    return this.t == 0 ? this.s : this[0] << 24 >> 24;
  }; // BigInteger.prototype.shortValue = bnShortValue;
  // (public) return value as short (assumes DB>=16)


  BigInteger.prototype.shortValue = function () {
    return this.t == 0 ? this.s : this[0] << 16 >> 16;
  }; // BigInteger.prototype.signum = bnSigNum;
  // (public) 0 if this == 0, 1 if this > 0


  BigInteger.prototype.signum = function () {
    if (this.s < 0) {
      return -1;
    } else if (this.t <= 0 || this.t == 1 && this[0] <= 0) {
      return 0;
    } else {
      return 1;
    }
  }; // BigInteger.prototype.toByteArray = bnToByteArray;
  // (public) convert to bigendian byte array


  BigInteger.prototype.toByteArray = function () {
    var i = this.t;
    var r = [];
    r[0] = this.s;
    var p = this.DB - i * this.DB % 8;
    var d;
    var k = 0;

    if (i-- > 0) {
      if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) {
        r[k++] = d | this.s << this.DB - p;
      }

      while (i >= 0) {
        if (p < 8) {
          d = (this[i] & (1 << p) - 1) << 8 - p;
          d |= this[--i] >> (p += this.DB - 8);
        } else {
          d = this[i] >> (p -= 8) & 0xff;

          if (p <= 0) {
            p += this.DB;
            --i;
          }
        }

        if ((d & 0x80) != 0) {
          d |= -256;
        }

        if (k == 0 && (this.s & 0x80) != (d & 0x80)) {
          ++k;
        }

        if (k > 0 || d != this.s) {
          r[k++] = d;
        }
      }
    }

    return r;
  }; // BigInteger.prototype.equals = bnEquals;


  BigInteger.prototype.equals = function (a) {
    return this.compareTo(a) == 0;
  }; // BigInteger.prototype.min = bnMin;


  BigInteger.prototype.min = function (a) {
    return this.compareTo(a) < 0 ? this : a;
  }; // BigInteger.prototype.max = bnMax;


  BigInteger.prototype.max = function (a) {
    return this.compareTo(a) > 0 ? this : a;
  }; // BigInteger.prototype.and = bnAnd;


  BigInteger.prototype.and = function (a) {
    var r = nbi();
    this.bitwiseTo(a, _util.op_and, r);
    return r;
  }; // BigInteger.prototype.or = bnOr;


  BigInteger.prototype.or = function (a) {
    var r = nbi();
    this.bitwiseTo(a, _util.op_or, r);
    return r;
  }; // BigInteger.prototype.xor = bnXor;


  BigInteger.prototype.xor = function (a) {
    var r = nbi();
    this.bitwiseTo(a, _util.op_xor, r);
    return r;
  }; // BigInteger.prototype.andNot = bnAndNot;


  BigInteger.prototype.andNot = function (a) {
    var r = nbi();
    this.bitwiseTo(a, _util.op_andnot, r);
    return r;
  }; // BigInteger.prototype.not = bnNot;
  // (public) ~this


  BigInteger.prototype.not = function () {
    var r = nbi();

    for (var i = 0; i < this.t; ++i) {
      r[i] = this.DM & ~this[i];
    }

    r.t = this.t;
    r.s = ~this.s;
    return r;
  }; // BigInteger.prototype.shiftLeft = bnShiftLeft;
  // (public) this << n


  BigInteger.prototype.shiftLeft = function (n) {
    var r = nbi();

    if (n < 0) {
      this.rShiftTo(-n, r);
    } else {
      this.lShiftTo(n, r);
    }

    return r;
  }; // BigInteger.prototype.shiftRight = bnShiftRight;
  // (public) this >> n


  BigInteger.prototype.shiftRight = function (n) {
    var r = nbi();

    if (n < 0) {
      this.lShiftTo(-n, r);
    } else {
      this.rShiftTo(n, r);
    }

    return r;
  }; // BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
  // (public) returns index of lowest 1-bit (or -1 if none)


  BigInteger.prototype.getLowestSetBit = function () {
    for (var i = 0; i < this.t; ++i) {
      if (this[i] != 0) {
        return i * this.DB + (0, _util.lbit)(this[i]);
      }
    }

    if (this.s < 0) {
      return this.t * this.DB;
    }

    return -1;
  }; // BigInteger.prototype.bitCount = bnBitCount;
  // (public) return number of set bits


  BigInteger.prototype.bitCount = function () {
    var r = 0;
    var x = this.s & this.DM;

    for (var i = 0; i < this.t; ++i) {
      r += (0, _util.cbit)(this[i] ^ x);
    }

    return r;
  }; // BigInteger.prototype.testBit = bnTestBit;
  // (public) true iff nth bit is set


  BigInteger.prototype.testBit = function (n) {
    var j = Math.floor(n / this.DB);

    if (j >= this.t) {
      return this.s != 0;
    }

    return (this[j] & 1 << n % this.DB) != 0;
  }; // BigInteger.prototype.setBit = bnSetBit;
  // (public) this | (1<<n)


  BigInteger.prototype.setBit = function (n) {
    return this.changeBit(n, _util.op_or);
  }; // BigInteger.prototype.clearBit = bnClearBit;
  // (public) this & ~(1<<n)


  BigInteger.prototype.clearBit = function (n) {
    return this.changeBit(n, _util.op_andnot);
  }; // BigInteger.prototype.flipBit = bnFlipBit;
  // (public) this ^ (1<<n)


  BigInteger.prototype.flipBit = function (n) {
    return this.changeBit(n, _util.op_xor);
  }; // BigInteger.prototype.add = bnAdd;
  // (public) this + a


  BigInteger.prototype.add = function (a) {
    var r = nbi();
    this.addTo(a, r);
    return r;
  }; // BigInteger.prototype.subtract = bnSubtract;
  // (public) this - a


  BigInteger.prototype.subtract = function (a) {
    var r = nbi();
    this.subTo(a, r);
    return r;
  }; // BigInteger.prototype.multiply = bnMultiply;
  // (public) this * a


  BigInteger.prototype.multiply = function (a) {
    var r = nbi();
    this.multiplyTo(a, r);
    return r;
  }; // BigInteger.prototype.divide = bnDivide;
  // (public) this / a


  BigInteger.prototype.divide = function (a) {
    var r = nbi();
    this.divRemTo(a, r, null);
    return r;
  }; // BigInteger.prototype.remainder = bnRemainder;
  // (public) this % a


  BigInteger.prototype.remainder = function (a) {
    var r = nbi();
    this.divRemTo(a, null, r);
    return r;
  }; // BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
  // (public) [this/a,this%a]


  BigInteger.prototype.divideAndRemainder = function (a) {
    var q = nbi();
    var r = nbi();
    this.divRemTo(a, q, r);
    return [q, r];
  }; // BigInteger.prototype.modPow = bnModPow;
  // (public) this^e % m (HAC 14.85)


  BigInteger.prototype.modPow = function (e, m) {
    var i = e.bitLength();
    var k;
    var r = nbv(1);
    var z;

    if (i <= 0) {
      return r;
    } else if (i < 18) {
      k = 1;
    } else if (i < 48) {
      k = 3;
    } else if (i < 144) {
      k = 4;
    } else if (i < 768) {
      k = 5;
    } else {
      k = 6;
    }

    if (i < 8) {
      z = new Classic(m);
    } else if (m.isEven()) {
      z = new Barrett(m);
    } else {
      z = new Montgomery(m);
    } // precomputation


    var g = [];
    var n = 3;
    var k1 = k - 1;
    var km = (1 << k) - 1;
    g[1] = z.convert(this);

    if (k > 1) {
      var g2 = nbi();
      z.sqrTo(g[1], g2);

      while (n <= km) {
        g[n] = nbi();
        z.mulTo(g2, g[n - 2], g[n]);
        n += 2;
      }
    }

    var j = e.t - 1;
    var w;
    var is1 = true;
    var r2 = nbi();
    var t;
    i = nbits(e[j]) - 1;

    while (j >= 0) {
      if (i >= k1) {
        w = e[j] >> i - k1 & km;
      } else {
        w = (e[j] & (1 << i + 1) - 1) << k1 - i;

        if (j > 0) {
          w |= e[j - 1] >> this.DB + i - k1;
        }
      }

      n = k;

      while ((w & 1) == 0) {
        w >>= 1;
        --n;
      }

      if ((i -= n) < 0) {
        i += this.DB;
        --j;
      }

      if (is1) {
        // ret == 1, don't bother squaring or multiplying it
        g[w].copyTo(r);
        is1 = false;
      } else {
        while (n > 1) {
          z.sqrTo(r, r2);
          z.sqrTo(r2, r);
          n -= 2;
        }

        if (n > 0) {
          z.sqrTo(r, r2);
        } else {
          t = r;
          r = r2;
          r2 = t;
        }

        z.mulTo(r2, g[w], r);
      }

      while (j >= 0 && (e[j] & 1 << i) == 0) {
        z.sqrTo(r, r2);
        t = r;
        r = r2;
        r2 = t;

        if (--i < 0) {
          i = this.DB - 1;
          --j;
        }
      }
    }

    return z.revert(r);
  }; // BigInteger.prototype.modInverse = bnModInverse;
  // (public) 1/this % m (HAC 14.61)


  BigInteger.prototype.modInverse = function (m) {
    var ac = m.isEven();

    if (this.isEven() && ac || m.signum() == 0) {
      return BigInteger.ZERO;
    }

    var u = m.clone();
    var v = this.clone();
    var a = nbv(1);
    var b = nbv(0);
    var c = nbv(0);
    var d = nbv(1);

    while (u.signum() != 0) {
      while (u.isEven()) {
        u.rShiftTo(1, u);

        if (ac) {
          if (!a.isEven() || !b.isEven()) {
            a.addTo(this, a);
            b.subTo(m, b);
          }

          a.rShiftTo(1, a);
        } else if (!b.isEven()) {
          b.subTo(m, b);
        }

        b.rShiftTo(1, b);
      }

      while (v.isEven()) {
        v.rShiftTo(1, v);

        if (ac) {
          if (!c.isEven() || !d.isEven()) {
            c.addTo(this, c);
            d.subTo(m, d);
          }

          c.rShiftTo(1, c);
        } else if (!d.isEven()) {
          d.subTo(m, d);
        }

        d.rShiftTo(1, d);
      }

      if (u.compareTo(v) >= 0) {
        u.subTo(v, u);

        if (ac) {
          a.subTo(c, a);
        }

        b.subTo(d, b);
      } else {
        v.subTo(u, v);

        if (ac) {
          c.subTo(a, c);
        }

        d.subTo(b, d);
      }
    }

    if (v.compareTo(BigInteger.ONE) != 0) {
      return BigInteger.ZERO;
    }

    if (d.compareTo(m) >= 0) {
      return d.subtract(m);
    }

    if (d.signum() < 0) {
      d.addTo(m, d);
    } else {
      return d;
    }

    if (d.signum() < 0) {
      return d.add(m);
    } else {
      return d;
    }
  }; // BigInteger.prototype.pow = bnPow;
  // (public) this^e


  BigInteger.prototype.pow = function (e) {
    return this.exp(e, new NullExp());
  }; // BigInteger.prototype.gcd = bnGCD;
  // (public) gcd(this,a) (HAC 14.54)


  BigInteger.prototype.gcd = function (a) {
    var x = this.s < 0 ? this.negate() : this.clone();
    var y = a.s < 0 ? a.negate() : a.clone();

    if (x.compareTo(y) < 0) {
      var t = x;
      x = y;
      y = t;
    }

    var i = x.getLowestSetBit();
    var g = y.getLowestSetBit();

    if (g < 0) {
      return x;
    }

    if (i < g) {
      g = i;
    }

    if (g > 0) {
      x.rShiftTo(g, x);
      y.rShiftTo(g, y);
    }

    while (x.signum() > 0) {
      if ((i = x.getLowestSetBit()) > 0) {
        x.rShiftTo(i, x);
      }

      if ((i = y.getLowestSetBit()) > 0) {
        y.rShiftTo(i, y);
      }

      if (x.compareTo(y) >= 0) {
        x.subTo(y, x);
        x.rShiftTo(1, x);
      } else {
        y.subTo(x, y);
        y.rShiftTo(1, y);
      }
    }

    if (g > 0) {
      y.lShiftTo(g, y);
    }

    return y;
  }; // BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
  // (public) test primality with certainty >= 1-.5^t


  BigInteger.prototype.isProbablePrime = function (t) {
    var i;
    var x = this.abs();

    if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
      for (i = 0; i < lowprimes.length; ++i) {
        if (x[0] == lowprimes[i]) {
          return true;
        }
      }

      return false;
    }

    if (x.isEven()) {
      return false;
    }

    i = 1;

    while (i < lowprimes.length) {
      var m = lowprimes[i];
      var j = i + 1;

      while (j < lowprimes.length && m < lplim) {
        m *= lowprimes[j++];
      }

      m = x.modInt(m);

      while (i < j) {
        if (m % lowprimes[i++] == 0) {
          return false;
        }
      }
    }

    return x.millerRabin(t);
  }; //#endregion PUBLIC
  //#region PROTECTED
  // BigInteger.prototype.copyTo = bnpCopyTo;
  // (protected) copy this to r


  BigInteger.prototype.copyTo = function (r) {
    for (var i = this.t - 1; i >= 0; --i) {
      r[i] = this[i];
    }

    r.t = this.t;
    r.s = this.s;
  }; // BigInteger.prototype.fromInt = bnpFromInt;
  // (protected) set from integer value x, -DV <= x < DV


  BigInteger.prototype.fromInt = function (x) {
    this.t = 1;
    this.s = x < 0 ? -1 : 0;

    if (x > 0) {
      this[0] = x;
    } else if (x < -1) {
      this[0] = x + this.DV;
    } else {
      this.t = 0;
    }
  }; // BigInteger.prototype.fromString = bnpFromString;
  // (protected) set from string and radix


  BigInteger.prototype.fromString = function (s, b) {
    var k;

    if (b == 16) {
      k = 4;
    } else if (b == 8) {
      k = 3;
    } else if (b == 256) {
      k = 8;
      /* byte array */
    } else if (b == 2) {
      k = 1;
    } else if (b == 32) {
      k = 5;
    } else if (b == 4) {
      k = 2;
    } else {
      this.fromRadix(s, b);
      return;
    }

    this.t = 0;
    this.s = 0;
    var i = s.length;
    var mi = false;
    var sh = 0;

    while (--i >= 0) {
      var x = k == 8 ? +s[i] & 0xff : intAt(s, i);

      if (x < 0) {
        if (s.charAt(i) == "-") {
          mi = true;
        }

        continue;
      }

      mi = false;

      if (sh == 0) {
        this[this.t++] = x;
      } else if (sh + k > this.DB) {
        this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
        this[this.t++] = x >> this.DB - sh;
      } else {
        this[this.t - 1] |= x << sh;
      }

      sh += k;

      if (sh >= this.DB) {
        sh -= this.DB;
      }
    }

    if (k == 8 && (+s[0] & 0x80) != 0) {
      this.s = -1;

      if (sh > 0) {
        this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
      }
    }

    this.clamp();

    if (mi) {
      BigInteger.ZERO.subTo(this, this);
    }
  }; // BigInteger.prototype.clamp = bnpClamp;
  // (protected) clamp off excess high words


  BigInteger.prototype.clamp = function () {
    var c = this.s & this.DM;

    while (this.t > 0 && this[this.t - 1] == c) {
      --this.t;
    }
  }; // BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  // (protected) r = this << n*DB


  BigInteger.prototype.dlShiftTo = function (n, r) {
    var i;

    for (i = this.t - 1; i >= 0; --i) {
      r[i + n] = this[i];
    }

    for (i = n - 1; i >= 0; --i) {
      r[i] = 0;
    }

    r.t = this.t + n;
    r.s = this.s;
  }; // BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  // (protected) r = this >> n*DB


  BigInteger.prototype.drShiftTo = function (n, r) {
    for (var i = n; i < this.t; ++i) {
      r[i - n] = this[i];
    }

    r.t = Math.max(this.t - n, 0);
    r.s = this.s;
  }; // BigInteger.prototype.lShiftTo = bnpLShiftTo;
  // (protected) r = this << n


  BigInteger.prototype.lShiftTo = function (n, r) {
    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << cbs) - 1;
    var ds = Math.floor(n / this.DB);
    var c = this.s << bs & this.DM;

    for (var i = this.t - 1; i >= 0; --i) {
      r[i + ds + 1] = this[i] >> cbs | c;
      c = (this[i] & bm) << bs;
    }

    for (var i = ds - 1; i >= 0; --i) {
      r[i] = 0;
    }

    r[ds] = c;
    r.t = this.t + ds + 1;
    r.s = this.s;
    r.clamp();
  }; // BigInteger.prototype.rShiftTo = bnpRShiftTo;
  // (protected) r = this >> n


  BigInteger.prototype.rShiftTo = function (n, r) {
    r.s = this.s;
    var ds = Math.floor(n / this.DB);

    if (ds >= this.t) {
      r.t = 0;
      return;
    }

    var bs = n % this.DB;
    var cbs = this.DB - bs;
    var bm = (1 << bs) - 1;
    r[0] = this[ds] >> bs;

    for (var i = ds + 1; i < this.t; ++i) {
      r[i - ds - 1] |= (this[i] & bm) << cbs;
      r[i - ds] = this[i] >> bs;
    }

    if (bs > 0) {
      r[this.t - ds - 1] |= (this.s & bm) << cbs;
    }

    r.t = this.t - ds;
    r.clamp();
  }; // BigInteger.prototype.subTo = bnpSubTo;
  // (protected) r = this - a


  BigInteger.prototype.subTo = function (a, r) {
    var i = 0;
    var c = 0;
    var m = Math.min(a.t, this.t);

    while (i < m) {
      c += this[i] - a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }

    if (a.t < this.t) {
      c -= a.s;

      while (i < this.t) {
        c += this[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }

      c += this.s;
    } else {
      c += this.s;

      while (i < a.t) {
        c -= a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }

      c -= a.s;
    }

    r.s = c < 0 ? -1 : 0;

    if (c < -1) {
      r[i++] = this.DV + c;
    } else if (c > 0) {
      r[i++] = c;
    }

    r.t = i;
    r.clamp();
  }; // BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.


  BigInteger.prototype.multiplyTo = function (a, r) {
    var x = this.abs();
    var y = a.abs();
    var i = x.t;
    r.t = i + y.t;

    while (--i >= 0) {
      r[i] = 0;
    }

    for (i = 0; i < y.t; ++i) {
      r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
    }

    r.s = 0;
    r.clamp();

    if (this.s != a.s) {
      BigInteger.ZERO.subTo(r, r);
    }
  }; // BigInteger.prototype.squareTo = bnpSquareTo;
  // (protected) r = this^2, r != this (HAC 14.16)


  BigInteger.prototype.squareTo = function (r) {
    var x = this.abs();
    var i = r.t = 2 * x.t;

    while (--i >= 0) {
      r[i] = 0;
    }

    for (i = 0; i < x.t - 1; ++i) {
      var c = x.am(i, x[i], r, 2 * i, 0, 1);

      if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
        r[i + x.t] -= x.DV;
        r[i + x.t + 1] = 1;
      }
    }

    if (r.t > 0) {
      r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
    }

    r.s = 0;
    r.clamp();
  }; // BigInteger.prototype.divRemTo = bnpDivRemTo;
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.


  BigInteger.prototype.divRemTo = function (m, q, r) {
    var pm = m.abs();

    if (pm.t <= 0) {
      return;
    }

    var pt = this.abs();

    if (pt.t < pm.t) {
      if (q != null) {
        q.fromInt(0);
      }

      if (r != null) {
        this.copyTo(r);
      }

      return;
    }

    if (r == null) {
      r = nbi();
    }

    var y = nbi();
    var ts = this.s;
    var ms = m.s;
    var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus

    if (nsh > 0) {
      pm.lShiftTo(nsh, y);
      pt.lShiftTo(nsh, r);
    } else {
      pm.copyTo(y);
      pt.copyTo(r);
    }

    var ys = y.t;
    var y0 = y[ys - 1];

    if (y0 == 0) {
      return;
    }

    var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
    var d1 = this.FV / yt;
    var d2 = (1 << this.F1) / yt;
    var e = 1 << this.F2;
    var i = r.t;
    var j = i - ys;
    var t = q == null ? nbi() : q;
    y.dlShiftTo(j, t);

    if (r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t, r);
    }

    BigInteger.ONE.dlShiftTo(ys, t);
    t.subTo(y, y); // "negative" y so we can replace sub with am later

    while (y.t < ys) {
      y[y.t++] = 0;
    }

    while (--j >= 0) {
      // Estimate quotient digit
      var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);

      if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
        // Try it out
        y.dlShiftTo(j, t);
        r.subTo(t, r);

        while (r[i] < --qd) {
          r.subTo(t, r);
        }
      }
    }

    if (q != null) {
      r.drShiftTo(ys, q);

      if (ts != ms) {
        BigInteger.ZERO.subTo(q, q);
      }
    }

    r.t = ys;
    r.clamp();

    if (nsh > 0) {
      r.rShiftTo(nsh, r);
    } // Denormalize remainder


    if (ts < 0) {
      BigInteger.ZERO.subTo(r, r);
    }
  }; // BigInteger.prototype.invDigit = bnpInvDigit;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.


  BigInteger.prototype.invDigit = function () {
    if (this.t < 1) {
      return 0;
    }

    var x = this[0];

    if ((x & 1) == 0) {
      return 0;
    }

    var y = x & 3; // y == 1/x mod 2^2

    y = y * (2 - (x & 0xf) * y) & 0xf; // y == 1/x mod 2^4

    y = y * (2 - (x & 0xff) * y) & 0xff; // y == 1/x mod 2^8

    y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff; // y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints

    y = y * (2 - x * y % this.DV) % this.DV; // y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV

    return y > 0 ? this.DV - y : -y;
  }; // BigInteger.prototype.isEven = bnpIsEven;
  // (protected) true iff this is even


  BigInteger.prototype.isEven = function () {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0;
  }; // BigInteger.prototype.exp = bnpExp;
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)


  BigInteger.prototype.exp = function (e, z) {
    if (e > 0xffffffff || e < 1) {
      return BigInteger.ONE;
    }

    var r = nbi();
    var r2 = nbi();
    var g = z.convert(this);
    var i = nbits(e) - 1;
    g.copyTo(r);

    while (--i >= 0) {
      z.sqrTo(r, r2);

      if ((e & 1 << i) > 0) {
        z.mulTo(r2, g, r);
      } else {
        var t = r;
        r = r2;
        r2 = t;
      }
    }

    return z.revert(r);
  }; // BigInteger.prototype.chunkSize = bnpChunkSize;
  // (protected) return x s.t. r^x < DV


  BigInteger.prototype.chunkSize = function (r) {
    return Math.floor(Math.LN2 * this.DB / Math.log(r));
  }; // BigInteger.prototype.toRadix = bnpToRadix;
  // (protected) convert to radix string


  BigInteger.prototype.toRadix = function (b) {
    if (b == null) {
      b = 10;
    }

    if (this.signum() == 0 || b < 2 || b > 36) {
      return "0";
    }

    var cs = this.chunkSize(b);
    var a = Math.pow(b, cs);
    var d = nbv(a);
    var y = nbi();
    var z = nbi();
    var r = "";
    this.divRemTo(d, y, z);

    while (y.signum() > 0) {
      r = (a + z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d, y, z);
    }

    return z.intValue().toString(b) + r;
  }; // BigInteger.prototype.fromRadix = bnpFromRadix;
  // (protected) convert from radix string


  BigInteger.prototype.fromRadix = function (s, b) {
    this.fromInt(0);

    if (b == null) {
      b = 10;
    }

    var cs = this.chunkSize(b);
    var d = Math.pow(b, cs);
    var mi = false;
    var j = 0;
    var w = 0;

    for (var i = 0; i < s.length; ++i) {
      var x = intAt(s, i);

      if (x < 0) {
        if (s.charAt(i) == "-" && this.signum() == 0) {
          mi = true;
        }

        continue;
      }

      w = b * w + x;

      if (++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w, 0);
        j = 0;
        w = 0;
      }
    }

    if (j > 0) {
      this.dMultiply(Math.pow(b, j));
      this.dAddOffset(w, 0);
    }

    if (mi) {
      BigInteger.ZERO.subTo(this, this);
    }
  }; // BigInteger.prototype.fromNumber = bnpFromNumber;
  // (protected) alternate constructor


  BigInteger.prototype.fromNumber = function (a, b, c) {
    if ("number" == typeof b) {
      // new BigInteger(int,int,RNG)
      if (a < 2) {
        this.fromInt(1);
      } else {
        this.fromNumber(a, c);

        if (!this.testBit(a - 1)) {
          // force MSB set
          this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), _util.op_or, this);
        }

        if (this.isEven()) {
          this.dAddOffset(1, 0);
        } // force odd


        while (!this.isProbablePrime(b)) {
          this.dAddOffset(2, 0);

          if (this.bitLength() > a) {
            this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
          }
        }
      }
    } else {
      // new BigInteger(int,RNG)
      var x = [];
      var t = a & 7;
      x.length = (a >> 3) + 1;
      b.nextBytes(x);

      if (t > 0) {
        x[0] &= (1 << t) - 1;
      } else {
        x[0] = 0;
      }

      this.fromString(x, 256);
    }
  }; // BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
  // (protected) r = this op a (bitwise)


  BigInteger.prototype.bitwiseTo = function (a, op, r) {
    var i;
    var f;
    var m = Math.min(a.t, this.t);

    for (i = 0; i < m; ++i) {
      r[i] = op(this[i], a[i]);
    }

    if (a.t < this.t) {
      f = a.s & this.DM;

      for (i = m; i < this.t; ++i) {
        r[i] = op(this[i], f);
      }

      r.t = this.t;
    } else {
      f = this.s & this.DM;

      for (i = m; i < a.t; ++i) {
        r[i] = op(f, a[i]);
      }

      r.t = a.t;
    }

    r.s = op(this.s, a.s);
    r.clamp();
  }; // BigInteger.prototype.changeBit = bnpChangeBit;
  // (protected) this op (1<<n)


  BigInteger.prototype.changeBit = function (n, op) {
    var r = BigInteger.ONE.shiftLeft(n);
    this.bitwiseTo(r, op, r);
    return r;
  }; // BigInteger.prototype.addTo = bnpAddTo;
  // (protected) r = this + a


  BigInteger.prototype.addTo = function (a, r) {
    var i = 0;
    var c = 0;
    var m = Math.min(a.t, this.t);

    while (i < m) {
      c += this[i] + a[i];
      r[i++] = c & this.DM;
      c >>= this.DB;
    }

    if (a.t < this.t) {
      c += a.s;

      while (i < this.t) {
        c += this[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }

      c += this.s;
    } else {
      c += this.s;

      while (i < a.t) {
        c += a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }

      c += a.s;
    }

    r.s = c < 0 ? -1 : 0;

    if (c > 0) {
      r[i++] = c;
    } else if (c < -1) {
      r[i++] = this.DV + c;
    }

    r.t = i;
    r.clamp();
  }; // BigInteger.prototype.dMultiply = bnpDMultiply;
  // (protected) this *= n, this >= 0, 1 < n < DV


  BigInteger.prototype.dMultiply = function (n) {
    this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp();
  }; // BigInteger.prototype.dAddOffset = bnpDAddOffset;
  // (protected) this += n << w words, this >= 0


  BigInteger.prototype.dAddOffset = function (n, w) {
    if (n == 0) {
      return;
    }

    while (this.t <= w) {
      this[this.t++] = 0;
    }

    this[w] += n;

    while (this[w] >= this.DV) {
      this[w] -= this.DV;

      if (++w >= this.t) {
        this[this.t++] = 0;
      }

      ++this[w];
    }
  }; // BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
  // (protected) r = lower n words of "this * a", a.t <= n
  // "this" should be the larger one if appropriate.


  BigInteger.prototype.multiplyLowerTo = function (a, n, r) {
    var i = Math.min(this.t + a.t, n);
    r.s = 0; // assumes a,this >= 0

    r.t = i;

    while (i > 0) {
      r[--i] = 0;
    }

    for (var j = r.t - this.t; i < j; ++i) {
      r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
    }

    for (var j = Math.min(a.t, n); i < j; ++i) {
      this.am(0, a[i], r, i, 0, n - i);
    }

    r.clamp();
  }; // BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
  // (protected) r = "this * a" without lower n words, n > 0
  // "this" should be the larger one if appropriate.


  BigInteger.prototype.multiplyUpperTo = function (a, n, r) {
    --n;
    var i = r.t = this.t + a.t - n;
    r.s = 0; // assumes a,this >= 0

    while (--i >= 0) {
      r[i] = 0;
    }

    for (i = Math.max(n - this.t, 0); i < a.t; ++i) {
      r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
    }

    r.clamp();
    r.drShiftTo(1, r);
  }; // BigInteger.prototype.modInt = bnpModInt;
  // (protected) this % n, n < 2^26


  BigInteger.prototype.modInt = function (n) {
    if (n <= 0) {
      return 0;
    }

    var d = this.DV % n;
    var r = this.s < 0 ? n - 1 : 0;

    if (this.t > 0) {
      if (d == 0) {
        r = this[0] % n;
      } else {
        for (var i = this.t - 1; i >= 0; --i) {
          r = (d * r + this[i]) % n;
        }
      }
    }

    return r;
  }; // BigInteger.prototype.millerRabin = bnpMillerRabin;
  // (protected) true if probably prime (HAC 4.24, Miller-Rabin)


  BigInteger.prototype.millerRabin = function (t) {
    var n1 = this.subtract(BigInteger.ONE);
    var k = n1.getLowestSetBit();

    if (k <= 0) {
      return false;
    }

    var r = n1.shiftRight(k);
    t = t + 1 >> 1;

    if (t > lowprimes.length) {
      t = lowprimes.length;
    }

    var a = nbi();

    for (var i = 0; i < t; ++i) {
      // Pick bases at random, instead of starting at 2
      a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
      var y = a.modPow(r, this);

      if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
        var j = 1;

        while (j++ < k && y.compareTo(n1) != 0) {
          y = y.modPowInt(2, this);

          if (y.compareTo(BigInteger.ONE) == 0) {
            return false;
          }
        }

        if (y.compareTo(n1) != 0) {
          return false;
        }
      }
    }

    return true;
  }; // BigInteger.prototype.square = bnSquare;
  // (public) this^2


  BigInteger.prototype.square = function () {
    var r = nbi();
    this.squareTo(r);
    return r;
  }; //#region ASYNC
  // Public API method


  BigInteger.prototype.gcda = function (a, callback) {
    var x = this.s < 0 ? this.negate() : this.clone();
    var y = a.s < 0 ? a.negate() : a.clone();

    if (x.compareTo(y) < 0) {
      var t = x;
      x = y;
      y = t;
    }

    var i = x.getLowestSetBit();
    var g = y.getLowestSetBit();

    if (g < 0) {
      callback(x);
      return;
    }

    if (i < g) {
      g = i;
    }

    if (g > 0) {
      x.rShiftTo(g, x);
      y.rShiftTo(g, y);
    } // Workhorse of the algorithm, gets called 200 - 800 times per 512 bit keygen.


    var gcda1 = function gcda1() {
      if ((i = x.getLowestSetBit()) > 0) {
        x.rShiftTo(i, x);
      }

      if ((i = y.getLowestSetBit()) > 0) {
        y.rShiftTo(i, y);
      }

      if (x.compareTo(y) >= 0) {
        x.subTo(y, x);
        x.rShiftTo(1, x);
      } else {
        y.subTo(x, y);
        y.rShiftTo(1, y);
      }

      if (!(x.signum() > 0)) {
        if (g > 0) {
          y.lShiftTo(g, y);
        }

        setTimeout(function () {
          callback(y);
        }, 0); // escape
      } else {
        setTimeout(gcda1, 0);
      }
    };

    setTimeout(gcda1, 10);
  }; // (protected) alternate constructor


  BigInteger.prototype.fromNumberAsync = function (a, b, c, callback) {
    if ("number" == typeof b) {
      if (a < 2) {
        this.fromInt(1);
      } else {
        this.fromNumber(a, c);

        if (!this.testBit(a - 1)) {
          this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), _util.op_or, this);
        }

        if (this.isEven()) {
          this.dAddOffset(1, 0);
        }

        var bnp_1 = this;

        var bnpfn1_1 = function bnpfn1_1() {
          bnp_1.dAddOffset(2, 0);

          if (bnp_1.bitLength() > a) {
            bnp_1.subTo(BigInteger.ONE.shiftLeft(a - 1), bnp_1);
          }

          if (bnp_1.isProbablePrime(b)) {
            setTimeout(function () {
              callback();
            }, 0); // escape
          } else {
            setTimeout(bnpfn1_1, 0);
          }
        };

        setTimeout(bnpfn1_1, 0);
      }
    } else {
      var x = [];
      var t = a & 7;
      x.length = (a >> 3) + 1;
      b.nextBytes(x);

      if (t > 0) {
        x[0] &= (1 << t) - 1;
      } else {
        x[0] = 0;
      }

      this.fromString(x, 256);
    }
  };

  return BigInteger;
}();

exports.BigInteger = BigInteger;

//#region REDUCERS
//#region NullExp
var NullExp =
/** @class */
function () {
  function NullExp() {} // NullExp.prototype.convert = nNop;


  NullExp.prototype.convert = function (x) {
    return x;
  }; // NullExp.prototype.revert = nNop;


  NullExp.prototype.revert = function (x) {
    return x;
  }; // NullExp.prototype.mulTo = nMulTo;


  NullExp.prototype.mulTo = function (x, y, r) {
    x.multiplyTo(y, r);
  }; // NullExp.prototype.sqrTo = nSqrTo;


  NullExp.prototype.sqrTo = function (x, r) {
    x.squareTo(r);
  };

  return NullExp;
}(); // Modular reduction using "classic" algorithm


var Classic =
/** @class */
function () {
  function Classic(m) {
    this.m = m;
  } // Classic.prototype.convert = cConvert;


  Classic.prototype.convert = function (x) {
    if (x.s < 0 || x.compareTo(this.m) >= 0) {
      return x.mod(this.m);
    } else {
      return x;
    }
  }; // Classic.prototype.revert = cRevert;


  Classic.prototype.revert = function (x) {
    return x;
  }; // Classic.prototype.reduce = cReduce;


  Classic.prototype.reduce = function (x) {
    x.divRemTo(this.m, null, x);
  }; // Classic.prototype.mulTo = cMulTo;


  Classic.prototype.mulTo = function (x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
  }; // Classic.prototype.sqrTo = cSqrTo;


  Classic.prototype.sqrTo = function (x, r) {
    x.squareTo(r);
    this.reduce(r);
  };

  return Classic;
}(); //#endregion
//#region Montgomery
// Montgomery reduction


var Montgomery =
/** @class */
function () {
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp & 0x7fff;
    this.mph = this.mp >> 15;
    this.um = (1 << m.DB - 15) - 1;
    this.mt2 = 2 * m.t;
  } // Montgomery.prototype.convert = montConvert;
  // xR mod m


  Montgomery.prototype.convert = function (x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t, r);
    r.divRemTo(this.m, null, r);

    if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
      this.m.subTo(r, r);
    }

    return r;
  }; // Montgomery.prototype.revert = montRevert;
  // x/R mod m


  Montgomery.prototype.revert = function (x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }; // Montgomery.prototype.reduce = montReduce;
  // x = x/R mod m (HAC 14.32)


  Montgomery.prototype.reduce = function (x) {
    while (x.t <= this.mt2) {
      // pad x so am has enough room later
      x[x.t++] = 0;
    }

    for (var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i] & 0x7fff;
      var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM; // use am to combine the multiply-shift-add into one call

      j = i + this.m.t;
      x[j] += this.m.am(0, u0, x, i, 0, this.m.t); // propagate carry

      while (x[j] >= x.DV) {
        x[j] -= x.DV;
        x[++j]++;
      }
    }

    x.clamp();
    x.drShiftTo(this.m.t, x);

    if (x.compareTo(this.m) >= 0) {
      x.subTo(this.m, x);
    }
  }; // Montgomery.prototype.mulTo = montMulTo;
  // r = "xy/R mod m"; x,y != r


  Montgomery.prototype.mulTo = function (x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
  }; // Montgomery.prototype.sqrTo = montSqrTo;
  // r = "x^2/R mod m"; x != r


  Montgomery.prototype.sqrTo = function (x, r) {
    x.squareTo(r);
    this.reduce(r);
  };

  return Montgomery;
}(); //#endregion Montgomery
//#region Barrett
// Barrett modular reduction


var Barrett =
/** @class */
function () {
  function Barrett(m) {
    this.m = m; // setup Barrett

    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
    this.mu = this.r2.divide(m);
  } // Barrett.prototype.convert = barrettConvert;


  Barrett.prototype.convert = function (x) {
    if (x.s < 0 || x.t > 2 * this.m.t) {
      return x.mod(this.m);
    } else if (x.compareTo(this.m) < 0) {
      return x;
    } else {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }
  }; // Barrett.prototype.revert = barrettRevert;


  Barrett.prototype.revert = function (x) {
    return x;
  }; // Barrett.prototype.reduce = barrettReduce;
  // x = x mod m (HAC 14.42)


  Barrett.prototype.reduce = function (x) {
    x.drShiftTo(this.m.t - 1, this.r2);

    if (x.t > this.m.t + 1) {
      x.t = this.m.t + 1;
      x.clamp();
    }

    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);

    while (x.compareTo(this.r2) < 0) {
      x.dAddOffset(1, this.m.t + 1);
    }

    x.subTo(this.r2, x);

    while (x.compareTo(this.m) >= 0) {
      x.subTo(this.m, x);
    }
  }; // Barrett.prototype.mulTo = barrettMulTo;
  // r = x*y mod m; x,y != r


  Barrett.prototype.mulTo = function (x, y, r) {
    x.multiplyTo(y, r);
    this.reduce(r);
  }; // Barrett.prototype.sqrTo = barrettSqrTo;
  // r = x^2 mod m; x != r


  Barrett.prototype.sqrTo = function (x, r) {
    x.squareTo(r);
    this.reduce(r);
  };

  return Barrett;
}(); //#endregion
//#endregion REDUCERS
// return new, unset BigInteger


function nbi() {
  return new BigInteger(null);
}

function parseBigInt(str, r) {
  return new BigInteger(str, r);
} // am: Compute w_j += (x*this_i), propagate carries,
// c is initial carry, returns final carry.
// c < 3*dvalue, x < 2*dvalue, this_i < dvalue
// We need to select the fastest one that works in this environment.


var inBrowser = typeof navigator !== "undefined";

if (inBrowser && j_lm && navigator.appName == "Microsoft Internet Explorer") {
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  BigInteger.prototype.am = function am2(i, x, w, j, c, n) {
    var xl = x & 0x7fff;
    var xh = x >> 15;

    while (--n >= 0) {
      var l = this[i] & 0x7fff;
      var h = this[i++] >> 15;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
      c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
      w[j++] = l & 0x3fffffff;
    }

    return c;
  };

  dbits = 30;
} else if (inBrowser && j_lm && navigator.appName != "Netscape") {
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  BigInteger.prototype.am = function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
      var v = x * this[i++] + w[j] + c;
      c = Math.floor(v / 0x4000000);
      w[j++] = v & 0x3ffffff;
    }

    return c;
  };

  dbits = 26;
} else {
  // Mozilla/Netscape seems to prefer am3
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  BigInteger.prototype.am = function am3(i, x, w, j, c, n) {
    var xl = x & 0x3fff;
    var xh = x >> 14;

    while (--n >= 0) {
      var l = this[i] & 0x3fff;
      var h = this[i++] >> 14;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
      c = (l >> 28) + (m >> 14) + xh * h;
      w[j++] = l & 0xfffffff;
    }

    return c;
  };

  dbits = 28;
}

BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP; // Digit conversions

var BI_RC = [];
var rr;
var vv;
rr = "0".charCodeAt(0);

for (vv = 0; vv <= 9; ++vv) {
  BI_RC[rr++] = vv;
}

rr = "a".charCodeAt(0);

for (vv = 10; vv < 36; ++vv) {
  BI_RC[rr++] = vv;
}

rr = "A".charCodeAt(0);

for (vv = 10; vv < 36; ++vv) {
  BI_RC[rr++] = vv;
}

function intAt(s, i) {
  var c = BI_RC[s.charCodeAt(i)];
  return c == null ? -1 : c;
} // return bigint initialized to value


function nbv(i) {
  var r = nbi();
  r.fromInt(i);
  return r;
} // returns bit length of the integer x


function nbits(x) {
  var r = 1;
  var t;

  if ((t = x >>> 16) != 0) {
    x = t;
    r += 16;
  }

  if ((t = x >> 8) != 0) {
    x = t;
    r += 8;
  }

  if ((t = x >> 4) != 0) {
    x = t;
    r += 4;
  }

  if ((t = x >> 2) != 0) {
    x = t;
    r += 2;
  }

  if ((t = x >> 1) != 0) {
    x = t;
    r += 1;
  }

  return r;
} // "constants"


BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxFbmNyeXB0XFxsaWJcXGpzYm5cXGpzYm4uanMiXSwibmFtZXMiOlsiZGJpdHMiLCJjYW5hcnkiLCJqX2xtIiwibG93cHJpbWVzIiwibHBsaW0iLCJsZW5ndGgiLCJCaWdJbnRlZ2VyIiwiYSIsImIiLCJjIiwiZnJvbU51bWJlciIsImZyb21TdHJpbmciLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsInMiLCJuZWdhdGUiLCJrIiwidG9SYWRpeCIsImttIiwiZCIsIm0iLCJyIiwiaSIsInQiLCJwIiwiREIiLCJuYmkiLCJaRVJPIiwic3ViVG8iLCJhYnMiLCJjb21wYXJlVG8iLCJiaXRMZW5ndGgiLCJuYml0cyIsIkRNIiwibW9kIiwiZGl2UmVtVG8iLCJtb2RQb3dJbnQiLCJlIiwieiIsImlzRXZlbiIsIkNsYXNzaWMiLCJNb250Z29tZXJ5IiwiZXhwIiwiY2xvbmUiLCJjb3B5VG8iLCJpbnRWYWx1ZSIsIkRWIiwiYnl0ZVZhbHVlIiwic2hvcnRWYWx1ZSIsInNpZ251bSIsInRvQnl0ZUFycmF5IiwiZXF1YWxzIiwibWluIiwibWF4IiwiYW5kIiwiYml0d2lzZVRvIiwib3BfYW5kIiwib3IiLCJvcF9vciIsInhvciIsIm9wX3hvciIsImFuZE5vdCIsIm9wX2FuZG5vdCIsIm5vdCIsInNoaWZ0TGVmdCIsIm4iLCJyU2hpZnRUbyIsImxTaGlmdFRvIiwic2hpZnRSaWdodCIsImdldExvd2VzdFNldEJpdCIsImJpdENvdW50IiwieCIsInRlc3RCaXQiLCJqIiwiTWF0aCIsImZsb29yIiwic2V0Qml0IiwiY2hhbmdlQml0IiwiY2xlYXJCaXQiLCJmbGlwQml0IiwiYWRkIiwiYWRkVG8iLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwibXVsdGlwbHlUbyIsImRpdmlkZSIsInJlbWFpbmRlciIsImRpdmlkZUFuZFJlbWFpbmRlciIsInEiLCJtb2RQb3ciLCJuYnYiLCJCYXJyZXR0IiwiZyIsImsxIiwiY29udmVydCIsImcyIiwic3FyVG8iLCJtdWxUbyIsInciLCJpczEiLCJyMiIsInJldmVydCIsIm1vZEludmVyc2UiLCJhYyIsInUiLCJ2IiwiT05FIiwicG93IiwiTnVsbEV4cCIsImdjZCIsInkiLCJpc1Byb2JhYmxlUHJpbWUiLCJtb2RJbnQiLCJtaWxsZXJSYWJpbiIsImZyb21JbnQiLCJmcm9tUmFkaXgiLCJtaSIsInNoIiwiaW50QXQiLCJjaGFyQXQiLCJjbGFtcCIsImRsU2hpZnRUbyIsImRyU2hpZnRUbyIsImJzIiwiY2JzIiwiYm0iLCJkcyIsImFtIiwic3F1YXJlVG8iLCJwbSIsInB0IiwidHMiLCJtcyIsIm5zaCIsInlzIiwieTAiLCJ5dCIsIkYxIiwiRjIiLCJkMSIsIkZWIiwiZDIiLCJxZCIsImludkRpZ2l0IiwiY2h1bmtTaXplIiwiTE4yIiwibG9nIiwiY3MiLCJzdWJzdHIiLCJkTXVsdGlwbHkiLCJkQWRkT2Zmc2V0IiwibmV4dEJ5dGVzIiwib3AiLCJmIiwibXVsdGlwbHlMb3dlclRvIiwibXVsdGlwbHlVcHBlclRvIiwibjEiLCJyYW5kb20iLCJzcXVhcmUiLCJnY2RhIiwiY2FsbGJhY2siLCJnY2RhMSIsInNldFRpbWVvdXQiLCJmcm9tTnVtYmVyQXN5bmMiLCJibnBfMSIsImJucGZuMV8xIiwicmVkdWNlIiwibXAiLCJtcGwiLCJtcGgiLCJ1bSIsIm10MiIsInUwIiwicTMiLCJtdSIsInBhcnNlQmlnSW50Iiwic3RyIiwiaW5Ccm93c2VyIiwibmF2aWdhdG9yIiwiYXBwTmFtZSIsImFtMiIsInhsIiwieGgiLCJsIiwiaCIsImFtMSIsImFtMyIsIkJJX0ZQIiwiQklfUkMiLCJyciIsInZ2IiwiY2hhckNvZGVBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUpBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxJQUFJQSxLQUFKLEVBQ0E7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHLGNBQWI7QUFDQSxJQUFJQyxJQUFJLEdBQUksQ0FBQ0QsTUFBTSxHQUFHLFFBQVYsS0FBdUIsUUFBbkMsRUFDQTs7QUFDQSxJQUFJRSxTQUFTLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixFQUFyQixFQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxFQUFqQyxFQUFxQyxFQUFyQyxFQUF5QyxFQUF6QyxFQUE2QyxFQUE3QyxFQUFpRCxFQUFqRCxFQUFxRCxFQUFyRCxFQUF5RCxFQUF6RCxFQUE2RCxFQUE3RCxFQUFpRSxFQUFqRSxFQUFxRSxFQUFyRSxFQUF5RSxFQUF6RSxFQUE2RSxFQUE3RSxFQUFpRixFQUFqRixFQUFxRixFQUFyRixFQUF5RixFQUF6RixFQUE2RixFQUE3RixFQUFpRyxHQUFqRyxFQUFzRyxHQUF0RyxFQUEyRyxHQUEzRyxFQUFnSCxHQUFoSCxFQUFxSCxHQUFySCxFQUEwSCxHQUExSCxFQUErSCxHQUEvSCxFQUFvSSxHQUFwSSxFQUF5SSxHQUF6SSxFQUE4SSxHQUE5SSxFQUFtSixHQUFuSixFQUF3SixHQUF4SixFQUE2SixHQUE3SixFQUFrSyxHQUFsSyxFQUF1SyxHQUF2SyxFQUE0SyxHQUE1SyxFQUFpTCxHQUFqTCxFQUFzTCxHQUF0TCxFQUEyTCxHQUEzTCxFQUFnTSxHQUFoTSxFQUFxTSxHQUFyTSxFQUEwTSxHQUExTSxFQUErTSxHQUEvTSxFQUFvTixHQUFwTixFQUF5TixHQUF6TixFQUE4TixHQUE5TixFQUFtTyxHQUFuTyxFQUF3TyxHQUF4TyxFQUE2TyxHQUE3TyxFQUFrUCxHQUFsUCxFQUF1UCxHQUF2UCxFQUE0UCxHQUE1UCxFQUFpUSxHQUFqUSxFQUFzUSxHQUF0USxFQUEyUSxHQUEzUSxFQUFnUixHQUFoUixFQUFxUixHQUFyUixFQUEwUixHQUExUixFQUErUixHQUEvUixFQUFvUyxHQUFwUyxFQUF5UyxHQUF6UyxFQUE4UyxHQUE5UyxFQUFtVCxHQUFuVCxFQUF3VCxHQUF4VCxFQUE2VCxHQUE3VCxFQUFrVSxHQUFsVSxFQUF1VSxHQUF2VSxFQUE0VSxHQUE1VSxFQUFpVixHQUFqVixFQUFzVixHQUF0VixFQUEyVixHQUEzVixFQUFnVyxHQUFoVyxFQUFxVyxHQUFyVyxFQUEwVyxHQUExVyxFQUErVyxHQUEvVyxFQUFvWCxHQUFwWCxFQUF5WCxHQUF6WCxFQUE4WCxHQUE5WCxFQUFtWSxHQUFuWSxFQUF3WSxHQUF4WSxFQUE2WSxHQUE3WSxFQUFrWixHQUFsWixFQUF1WixHQUF2WixFQUE0WixHQUE1WixFQUFpYSxHQUFqYSxFQUFzYSxHQUF0YSxFQUEyYSxHQUEzYSxFQUFnYixHQUFoYixFQUFxYixHQUFyYixFQUEwYixHQUExYixFQUErYixHQUEvYixFQUFvYyxHQUFwYyxFQUF5YyxHQUF6YyxFQUE4YyxHQUE5YyxFQUFtZCxHQUFuZCxFQUF3ZCxHQUF4ZCxFQUE2ZCxHQUE3ZCxFQUFrZSxHQUFsZSxFQUF1ZSxHQUF2ZSxFQUE0ZSxHQUE1ZSxFQUFpZixHQUFqZixFQUFzZixHQUF0ZixFQUEyZixHQUEzZixFQUFnZ0IsR0FBaGdCLEVBQXFnQixHQUFyZ0IsRUFBMGdCLEdBQTFnQixFQUErZ0IsR0FBL2dCLEVBQW9oQixHQUFwaEIsRUFBeWhCLEdBQXpoQixFQUE4aEIsR0FBOWhCLEVBQW1pQixHQUFuaUIsRUFBd2lCLEdBQXhpQixFQUE2aUIsR0FBN2lCLEVBQWtqQixHQUFsakIsRUFBdWpCLEdBQXZqQixFQUE0akIsR0FBNWpCLEVBQWlrQixHQUFqa0IsRUFBc2tCLEdBQXRrQixFQUEya0IsR0FBM2tCLEVBQWdsQixHQUFobEIsRUFBcWxCLEdBQXJsQixFQUEwbEIsR0FBMWxCLEVBQStsQixHQUEvbEIsRUFBb21CLEdBQXBtQixFQUF5bUIsR0FBem1CLEVBQThtQixHQUE5bUIsRUFBbW5CLEdBQW5uQixFQUF3bkIsR0FBeG5CLEVBQTZuQixHQUE3bkIsRUFBa29CLEdBQWxvQixFQUF1b0IsR0FBdm9CLEVBQTRvQixHQUE1b0IsRUFBaXBCLEdBQWpwQixFQUFzcEIsR0FBdHBCLEVBQTJwQixHQUEzcEIsRUFBZ3FCLEdBQWhxQixFQUFxcUIsR0FBcnFCLEVBQTBxQixHQUExcUIsRUFBK3FCLEdBQS9xQixFQUFvckIsR0FBcHJCLEVBQXlyQixHQUF6ckIsRUFBOHJCLEdBQTlyQixFQUFtc0IsR0FBbnNCLEVBQXdzQixHQUF4c0IsRUFBNnNCLEdBQTdzQixFQUFrdEIsR0FBbHRCLEVBQXV0QixHQUF2dEIsRUFBNHRCLEdBQTV0QixFQUFpdUIsR0FBanVCLEVBQXN1QixHQUF0dUIsRUFBMnVCLEdBQTN1QixFQUFndkIsR0FBaHZCLEVBQXF2QixHQUFydkIsRUFBMHZCLEdBQTF2QixFQUErdkIsR0FBL3ZCLEVBQW93QixHQUFwd0IsRUFBeXdCLEdBQXp3QixFQUE4d0IsR0FBOXdCLEVBQW14QixHQUFueEIsRUFBd3hCLEdBQXh4QixFQUE2eEIsR0FBN3hCLEVBQWt5QixHQUFseUIsRUFBdXlCLEdBQXZ5QixDQUFoQjtBQUNBLElBQUlDLEtBQUssR0FBRyxDQUFDLEtBQUssRUFBTixJQUFZRCxTQUFTLENBQUNBLFNBQVMsQ0FBQ0UsTUFBVixHQUFtQixDQUFwQixDQUFqQyxFQUNBO0FBQ0E7O0FBQ0EsSUFBSUMsVUFBVTtBQUFHO0FBQWUsWUFBWTtBQUN4QyxXQUFTQSxVQUFULENBQW9CQyxDQUFwQixFQUF1QkMsQ0FBdkIsRUFBMEJDLENBQTFCLEVBQTZCO0FBQ3pCLFFBQUlGLENBQUMsSUFBSSxJQUFULEVBQWU7QUFDWCxVQUFJLFlBQVksT0FBT0EsQ0FBdkIsRUFBMEI7QUFDdEIsYUFBS0csVUFBTCxDQUFnQkgsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCQyxDQUF0QjtBQUNILE9BRkQsTUFHSyxJQUFJRCxDQUFDLElBQUksSUFBTCxJQUFhLFlBQVksT0FBT0QsQ0FBcEMsRUFBdUM7QUFDeEMsYUFBS0ksVUFBTCxDQUFnQkosQ0FBaEIsRUFBbUIsR0FBbkI7QUFDSCxPQUZJLE1BR0E7QUFDRCxhQUFLSSxVQUFMLENBQWdCSixDQUFoQixFQUFtQkMsQ0FBbkI7QUFDSDtBQUNKO0FBQ0osR0FidUMsQ0FjeEM7QUFDQTtBQUNBOzs7QUFDQUYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCQyxRQUFyQixHQUFnQyxVQUFVTCxDQUFWLEVBQWE7QUFDekMsUUFBSSxLQUFLTSxDQUFMLEdBQVMsQ0FBYixFQUFnQjtBQUNaLGFBQU8sTUFBTSxLQUFLQyxNQUFMLEdBQWNGLFFBQWQsQ0FBdUJMLENBQXZCLENBQWI7QUFDSDs7QUFDRCxRQUFJUSxDQUFKOztBQUNBLFFBQUlSLENBQUMsSUFBSSxFQUFULEVBQWE7QUFDVFEsTUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFDSCxLQUZELE1BR0ssSUFBSVIsQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNiUSxNQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUNILEtBRkksTUFHQSxJQUFJUixDQUFDLElBQUksQ0FBVCxFQUFZO0FBQ2JRLE1BQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0gsS0FGSSxNQUdBLElBQUlSLENBQUMsSUFBSSxFQUFULEVBQWE7QUFDZFEsTUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFDSCxLQUZJLE1BR0EsSUFBSVIsQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNiUSxNQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUNILEtBRkksTUFHQTtBQUNELGFBQU8sS0FBS0MsT0FBTCxDQUFhVCxDQUFiLENBQVA7QUFDSDs7QUFDRCxRQUFJVSxFQUFFLEdBQUcsQ0FBQyxLQUFLRixDQUFOLElBQVcsQ0FBcEI7QUFDQSxRQUFJRyxDQUFKO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLEtBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUcsRUFBUjtBQUNBLFFBQUlDLENBQUMsR0FBRyxLQUFLQyxDQUFiO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLEtBQUtDLEVBQUwsR0FBV0gsQ0FBQyxHQUFHLEtBQUtHLEVBQVYsR0FBZ0JULENBQWxDOztBQUNBLFFBQUlNLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDVCxVQUFJRSxDQUFDLEdBQUcsS0FBS0MsRUFBVCxJQUFlLENBQUNOLENBQUMsR0FBRyxLQUFLRyxDQUFMLEtBQVdFLENBQWhCLElBQXFCLENBQXhDLEVBQTJDO0FBQ3ZDSixRQUFBQSxDQUFDLEdBQUcsSUFBSjtBQUNBQyxRQUFBQSxDQUFDLEdBQUcsb0JBQVNGLENBQVQsQ0FBSjtBQUNIOztBQUNELGFBQU9HLENBQUMsSUFBSSxDQUFaLEVBQWU7QUFDWCxZQUFJRSxDQUFDLEdBQUdSLENBQVIsRUFBVztBQUNQRyxVQUFBQSxDQUFDLEdBQUcsQ0FBQyxLQUFLRyxDQUFMLElBQVcsQ0FBQyxLQUFLRSxDQUFOLElBQVcsQ0FBdkIsS0FBK0JSLENBQUMsR0FBR1EsQ0FBdkM7QUFDQUwsVUFBQUEsQ0FBQyxJQUFJLEtBQUssRUFBRUcsQ0FBUCxNQUFjRSxDQUFDLElBQUksS0FBS0MsRUFBTCxHQUFVVCxDQUE3QixDQUFMO0FBQ0gsU0FIRCxNQUlLO0FBQ0RHLFVBQUFBLENBQUMsR0FBSSxLQUFLRyxDQUFMLE1BQVlFLENBQUMsSUFBSVIsQ0FBakIsQ0FBRCxHQUF3QkUsRUFBNUI7O0FBQ0EsY0FBSU0sQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNSQSxZQUFBQSxDQUFDLElBQUksS0FBS0MsRUFBVjtBQUNBLGNBQUVILENBQUY7QUFDSDtBQUNKOztBQUNELFlBQUlILENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUEMsVUFBQUEsQ0FBQyxHQUFHLElBQUo7QUFDSDs7QUFDRCxZQUFJQSxDQUFKLEVBQU87QUFDSEMsVUFBQUEsQ0FBQyxJQUFJLG9CQUFTRixDQUFULENBQUw7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsV0FBT0MsQ0FBQyxHQUFHQyxDQUFILEdBQU8sR0FBZjtBQUNILEdBdkRELENBakJ3QyxDQXlFeEM7QUFDQTs7O0FBQ0FmLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQkcsTUFBckIsR0FBOEIsWUFBWTtBQUN0QyxRQUFJTSxDQUFDLEdBQUdLLEdBQUcsRUFBWDtBQUNBcEIsSUFBQUEsVUFBVSxDQUFDcUIsSUFBWCxDQUFnQkMsS0FBaEIsQ0FBc0IsSUFBdEIsRUFBNEJQLENBQTVCO0FBQ0EsV0FBT0EsQ0FBUDtBQUNILEdBSkQsQ0EzRXdDLENBZ0Z4QztBQUNBOzs7QUFDQWYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCaUIsR0FBckIsR0FBMkIsWUFBWTtBQUNuQyxXQUFRLEtBQUtmLENBQUwsR0FBUyxDQUFWLEdBQWUsS0FBS0MsTUFBTCxFQUFmLEdBQStCLElBQXRDO0FBQ0gsR0FGRCxDQWxGd0MsQ0FxRnhDO0FBQ0E7OztBQUNBVCxFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJrQixTQUFyQixHQUFpQyxVQUFVdkIsQ0FBVixFQUFhO0FBQzFDLFFBQUljLENBQUMsR0FBRyxLQUFLUCxDQUFMLEdBQVNQLENBQUMsQ0FBQ08sQ0FBbkI7O0FBQ0EsUUFBSU8sQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNSLGFBQU9BLENBQVA7QUFDSDs7QUFDRCxRQUFJQyxDQUFDLEdBQUcsS0FBS0MsQ0FBYjtBQUNBRixJQUFBQSxDQUFDLEdBQUdDLENBQUMsR0FBR2YsQ0FBQyxDQUFDZ0IsQ0FBVjs7QUFDQSxRQUFJRixDQUFDLElBQUksQ0FBVCxFQUFZO0FBQ1IsYUFBUSxLQUFLUCxDQUFMLEdBQVMsQ0FBVixHQUFlLENBQUNPLENBQWhCLEdBQW9CQSxDQUEzQjtBQUNIOztBQUNELFdBQU8sRUFBRUMsQ0FBRixJQUFPLENBQWQsRUFBaUI7QUFDYixVQUFJLENBQUNELENBQUMsR0FBRyxLQUFLQyxDQUFMLElBQVVmLENBQUMsQ0FBQ2UsQ0FBRCxDQUFoQixLQUF3QixDQUE1QixFQUErQjtBQUMzQixlQUFPRCxDQUFQO0FBQ0g7QUFDSjs7QUFDRCxXQUFPLENBQVA7QUFDSCxHQWhCRCxDQXZGd0MsQ0F3R3hDO0FBQ0E7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJtQixTQUFyQixHQUFpQyxZQUFZO0FBQ3pDLFFBQUksS0FBS1IsQ0FBTCxJQUFVLENBQWQsRUFBaUI7QUFDYixhQUFPLENBQVA7QUFDSDs7QUFDRCxXQUFPLEtBQUtFLEVBQUwsSUFBVyxLQUFLRixDQUFMLEdBQVMsQ0FBcEIsSUFBeUJTLEtBQUssQ0FBQyxLQUFLLEtBQUtULENBQUwsR0FBUyxDQUFkLElBQW9CLEtBQUtULENBQUwsR0FBUyxLQUFLbUIsRUFBbkMsQ0FBckM7QUFDSCxHQUxELENBMUd3QyxDQWdIeEM7QUFDQTs7O0FBQ0EzQixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJzQixHQUFyQixHQUEyQixVQUFVM0IsQ0FBVixFQUFhO0FBQ3BDLFFBQUljLENBQUMsR0FBR0ssR0FBRyxFQUFYO0FBQ0EsU0FBS0csR0FBTCxHQUFXTSxRQUFYLENBQW9CNUIsQ0FBcEIsRUFBdUIsSUFBdkIsRUFBNkJjLENBQTdCOztBQUNBLFFBQUksS0FBS1AsQ0FBTCxHQUFTLENBQVQsSUFBY08sQ0FBQyxDQUFDUyxTQUFGLENBQVl4QixVQUFVLENBQUNxQixJQUF2QixJQUErQixDQUFqRCxFQUFvRDtBQUNoRHBCLE1BQUFBLENBQUMsQ0FBQ3FCLEtBQUYsQ0FBUVAsQ0FBUixFQUFXQSxDQUFYO0FBQ0g7O0FBQ0QsV0FBT0EsQ0FBUDtBQUNILEdBUEQsQ0FsSHdDLENBMEh4QztBQUNBOzs7QUFDQWYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCd0IsU0FBckIsR0FBaUMsVUFBVUMsQ0FBVixFQUFhakIsQ0FBYixFQUFnQjtBQUM3QyxRQUFJa0IsQ0FBSjs7QUFDQSxRQUFJRCxDQUFDLEdBQUcsR0FBSixJQUFXakIsQ0FBQyxDQUFDbUIsTUFBRixFQUFmLEVBQTJCO0FBQ3ZCRCxNQUFBQSxDQUFDLEdBQUcsSUFBSUUsT0FBSixDQUFZcEIsQ0FBWixDQUFKO0FBQ0gsS0FGRCxNQUdLO0FBQ0RrQixNQUFBQSxDQUFDLEdBQUcsSUFBSUcsVUFBSixDQUFlckIsQ0FBZixDQUFKO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLc0IsR0FBTCxDQUFTTCxDQUFULEVBQVlDLENBQVosQ0FBUDtBQUNILEdBVEQsQ0E1SHdDLENBc0l4QztBQUNBOzs7QUFDQWhDLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQitCLEtBQXJCLEdBQTZCLFlBQVk7QUFDckMsUUFBSXRCLENBQUMsR0FBR0ssR0FBRyxFQUFYO0FBQ0EsU0FBS2tCLE1BQUwsQ0FBWXZCLENBQVo7QUFDQSxXQUFPQSxDQUFQO0FBQ0gsR0FKRCxDQXhJd0MsQ0E2SXhDO0FBQ0E7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJpQyxRQUFyQixHQUFnQyxZQUFZO0FBQ3hDLFFBQUksS0FBSy9CLENBQUwsR0FBUyxDQUFiLEVBQWdCO0FBQ1osVUFBSSxLQUFLUyxDQUFMLElBQVUsQ0FBZCxFQUFpQjtBQUNiLGVBQU8sS0FBSyxDQUFMLElBQVUsS0FBS3VCLEVBQXRCO0FBQ0gsT0FGRCxNQUdLLElBQUksS0FBS3ZCLENBQUwsSUFBVSxDQUFkLEVBQWlCO0FBQ2xCLGVBQU8sQ0FBQyxDQUFSO0FBQ0g7QUFDSixLQVBELE1BUUssSUFBSSxLQUFLQSxDQUFMLElBQVUsQ0FBZCxFQUFpQjtBQUNsQixhQUFPLEtBQUssQ0FBTCxDQUFQO0FBQ0gsS0FGSSxNQUdBLElBQUksS0FBS0EsQ0FBTCxJQUFVLENBQWQsRUFBaUI7QUFDbEIsYUFBTyxDQUFQO0FBQ0gsS0FkdUMsQ0FleEM7OztBQUNBLFdBQVEsQ0FBQyxLQUFLLENBQUwsSUFBVyxDQUFDLEtBQU0sS0FBSyxLQUFLRSxFQUFqQixJQUF3QixDQUFwQyxLQUEyQyxLQUFLQSxFQUFqRCxHQUF1RCxLQUFLLENBQUwsQ0FBOUQ7QUFDSCxHQWpCRCxDQS9Jd0MsQ0FpS3hDO0FBQ0E7OztBQUNBbkIsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCbUMsU0FBckIsR0FBaUMsWUFBWTtBQUN6QyxXQUFRLEtBQUt4QixDQUFMLElBQVUsQ0FBWCxHQUFnQixLQUFLVCxDQUFyQixHQUEwQixLQUFLLENBQUwsS0FBVyxFQUFaLElBQW1CLEVBQW5EO0FBQ0gsR0FGRCxDQW5Ld0MsQ0FzS3hDO0FBQ0E7OztBQUNBUixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJvQyxVQUFyQixHQUFrQyxZQUFZO0FBQzFDLFdBQVEsS0FBS3pCLENBQUwsSUFBVSxDQUFYLEdBQWdCLEtBQUtULENBQXJCLEdBQTBCLEtBQUssQ0FBTCxLQUFXLEVBQVosSUFBbUIsRUFBbkQ7QUFDSCxHQUZELENBeEt3QyxDQTJLeEM7QUFDQTs7O0FBQ0FSLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQnFDLE1BQXJCLEdBQThCLFlBQVk7QUFDdEMsUUFBSSxLQUFLbkMsQ0FBTCxHQUFTLENBQWIsRUFBZ0I7QUFDWixhQUFPLENBQUMsQ0FBUjtBQUNILEtBRkQsTUFHSyxJQUFJLEtBQUtTLENBQUwsSUFBVSxDQUFWLElBQWdCLEtBQUtBLENBQUwsSUFBVSxDQUFWLElBQWUsS0FBSyxDQUFMLEtBQVcsQ0FBOUMsRUFBa0Q7QUFDbkQsYUFBTyxDQUFQO0FBQ0gsS0FGSSxNQUdBO0FBQ0QsYUFBTyxDQUFQO0FBQ0g7QUFDSixHQVZELENBN0t3QyxDQXdMeEM7QUFDQTs7O0FBQ0FqQixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJzQyxXQUFyQixHQUFtQyxZQUFZO0FBQzNDLFFBQUk1QixDQUFDLEdBQUcsS0FBS0MsQ0FBYjtBQUNBLFFBQUlGLENBQUMsR0FBRyxFQUFSO0FBQ0FBLElBQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxLQUFLUCxDQUFaO0FBQ0EsUUFBSVUsQ0FBQyxHQUFHLEtBQUtDLEVBQUwsR0FBV0gsQ0FBQyxHQUFHLEtBQUtHLEVBQVYsR0FBZ0IsQ0FBbEM7QUFDQSxRQUFJTixDQUFKO0FBQ0EsUUFBSUgsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsUUFBSU0sQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNULFVBQUlFLENBQUMsR0FBRyxLQUFLQyxFQUFULElBQWUsQ0FBQ04sQ0FBQyxHQUFHLEtBQUtHLENBQUwsS0FBV0UsQ0FBaEIsS0FBc0IsQ0FBQyxLQUFLVixDQUFMLEdBQVMsS0FBS21CLEVBQWYsS0FBc0JULENBQS9ELEVBQWtFO0FBQzlESCxRQUFBQSxDQUFDLENBQUNMLENBQUMsRUFBRixDQUFELEdBQVNHLENBQUMsR0FBSSxLQUFLTCxDQUFMLElBQVcsS0FBS1csRUFBTCxHQUFVRCxDQUFuQztBQUNIOztBQUNELGFBQU9GLENBQUMsSUFBSSxDQUFaLEVBQWU7QUFDWCxZQUFJRSxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1BMLFVBQUFBLENBQUMsR0FBRyxDQUFDLEtBQUtHLENBQUwsSUFBVyxDQUFDLEtBQUtFLENBQU4sSUFBVyxDQUF2QixLQUErQixJQUFJQSxDQUF2QztBQUNBTCxVQUFBQSxDQUFDLElBQUksS0FBSyxFQUFFRyxDQUFQLE1BQWNFLENBQUMsSUFBSSxLQUFLQyxFQUFMLEdBQVUsQ0FBN0IsQ0FBTDtBQUNILFNBSEQsTUFJSztBQUNETixVQUFBQSxDQUFDLEdBQUksS0FBS0csQ0FBTCxNQUFZRSxDQUFDLElBQUksQ0FBakIsQ0FBRCxHQUF3QixJQUE1Qjs7QUFDQSxjQUFJQSxDQUFDLElBQUksQ0FBVCxFQUFZO0FBQ1JBLFlBQUFBLENBQUMsSUFBSSxLQUFLQyxFQUFWO0FBQ0EsY0FBRUgsQ0FBRjtBQUNIO0FBQ0o7O0FBQ0QsWUFBSSxDQUFDSCxDQUFDLEdBQUcsSUFBTCxLQUFjLENBQWxCLEVBQXFCO0FBQ2pCQSxVQUFBQSxDQUFDLElBQUksQ0FBQyxHQUFOO0FBQ0g7O0FBQ0QsWUFBSUgsQ0FBQyxJQUFJLENBQUwsSUFBVSxDQUFDLEtBQUtGLENBQUwsR0FBUyxJQUFWLE1BQW9CSyxDQUFDLEdBQUcsSUFBeEIsQ0FBZCxFQUE2QztBQUN6QyxZQUFFSCxDQUFGO0FBQ0g7O0FBQ0QsWUFBSUEsQ0FBQyxHQUFHLENBQUosSUFBU0csQ0FBQyxJQUFJLEtBQUtMLENBQXZCLEVBQTBCO0FBQ3RCTyxVQUFBQSxDQUFDLENBQUNMLENBQUMsRUFBRixDQUFELEdBQVNHLENBQVQ7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsV0FBT0UsQ0FBUDtBQUNILEdBbkNELENBMUx3QyxDQThOeEM7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJ1QyxNQUFyQixHQUE4QixVQUFVNUMsQ0FBVixFQUFhO0FBQ3ZDLFdBQVEsS0FBS3VCLFNBQUwsQ0FBZXZCLENBQWYsS0FBcUIsQ0FBN0I7QUFDSCxHQUZELENBL053QyxDQWtPeEM7OztBQUNBRCxFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJ3QyxHQUFyQixHQUEyQixVQUFVN0MsQ0FBVixFQUFhO0FBQ3BDLFdBQVEsS0FBS3VCLFNBQUwsQ0FBZXZCLENBQWYsSUFBb0IsQ0FBckIsR0FBMEIsSUFBMUIsR0FBaUNBLENBQXhDO0FBQ0gsR0FGRCxDQW5Pd0MsQ0FzT3hDOzs7QUFDQUQsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCeUMsR0FBckIsR0FBMkIsVUFBVTlDLENBQVYsRUFBYTtBQUNwQyxXQUFRLEtBQUt1QixTQUFMLENBQWV2QixDQUFmLElBQW9CLENBQXJCLEdBQTBCLElBQTFCLEdBQWlDQSxDQUF4QztBQUNILEdBRkQsQ0F2T3dDLENBME94Qzs7O0FBQ0FELEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQjBDLEdBQXJCLEdBQTJCLFVBQVUvQyxDQUFWLEVBQWE7QUFDcEMsUUFBSWMsQ0FBQyxHQUFHSyxHQUFHLEVBQVg7QUFDQSxTQUFLNkIsU0FBTCxDQUFlaEQsQ0FBZixFQUFrQmlELFlBQWxCLEVBQTBCbkMsQ0FBMUI7QUFDQSxXQUFPQSxDQUFQO0FBQ0gsR0FKRCxDQTNPd0MsQ0FnUHhDOzs7QUFDQWYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCNkMsRUFBckIsR0FBMEIsVUFBVWxELENBQVYsRUFBYTtBQUNuQyxRQUFJYyxDQUFDLEdBQUdLLEdBQUcsRUFBWDtBQUNBLFNBQUs2QixTQUFMLENBQWVoRCxDQUFmLEVBQWtCbUQsV0FBbEIsRUFBeUJyQyxDQUF6QjtBQUNBLFdBQU9BLENBQVA7QUFDSCxHQUpELENBalB3QyxDQXNQeEM7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUIrQyxHQUFyQixHQUEyQixVQUFVcEQsQ0FBVixFQUFhO0FBQ3BDLFFBQUljLENBQUMsR0FBR0ssR0FBRyxFQUFYO0FBQ0EsU0FBSzZCLFNBQUwsQ0FBZWhELENBQWYsRUFBa0JxRCxZQUFsQixFQUEwQnZDLENBQTFCO0FBQ0EsV0FBT0EsQ0FBUDtBQUNILEdBSkQsQ0F2UHdDLENBNFB4Qzs7O0FBQ0FmLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQmlELE1BQXJCLEdBQThCLFVBQVV0RCxDQUFWLEVBQWE7QUFDdkMsUUFBSWMsQ0FBQyxHQUFHSyxHQUFHLEVBQVg7QUFDQSxTQUFLNkIsU0FBTCxDQUFlaEQsQ0FBZixFQUFrQnVELGVBQWxCLEVBQTZCekMsQ0FBN0I7QUFDQSxXQUFPQSxDQUFQO0FBQ0gsR0FKRCxDQTdQd0MsQ0FrUXhDO0FBQ0E7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJtRCxHQUFyQixHQUEyQixZQUFZO0FBQ25DLFFBQUkxQyxDQUFDLEdBQUdLLEdBQUcsRUFBWDs7QUFDQSxTQUFLLElBQUlKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0MsQ0FBekIsRUFBNEIsRUFBRUQsQ0FBOUIsRUFBaUM7QUFDN0JELE1BQUFBLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU8sS0FBS1csRUFBTCxHQUFVLENBQUMsS0FBS1gsQ0FBTCxDQUFsQjtBQUNIOztBQUNERCxJQUFBQSxDQUFDLENBQUNFLENBQUYsR0FBTSxLQUFLQSxDQUFYO0FBQ0FGLElBQUFBLENBQUMsQ0FBQ1AsQ0FBRixHQUFNLENBQUMsS0FBS0EsQ0FBWjtBQUNBLFdBQU9PLENBQVA7QUFDSCxHQVJELENBcFF3QyxDQTZReEM7QUFDQTs7O0FBQ0FmLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQm9ELFNBQXJCLEdBQWlDLFVBQVVDLENBQVYsRUFBYTtBQUMxQyxRQUFJNUMsQ0FBQyxHQUFHSyxHQUFHLEVBQVg7O0FBQ0EsUUFBSXVDLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUCxXQUFLQyxRQUFMLENBQWMsQ0FBQ0QsQ0FBZixFQUFrQjVDLENBQWxCO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsV0FBSzhDLFFBQUwsQ0FBY0YsQ0FBZCxFQUFpQjVDLENBQWpCO0FBQ0g7O0FBQ0QsV0FBT0EsQ0FBUDtBQUNILEdBVEQsQ0EvUXdDLENBeVJ4QztBQUNBOzs7QUFDQWYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCd0QsVUFBckIsR0FBa0MsVUFBVUgsQ0FBVixFQUFhO0FBQzNDLFFBQUk1QyxDQUFDLEdBQUdLLEdBQUcsRUFBWDs7QUFDQSxRQUFJdUMsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQLFdBQUtFLFFBQUwsQ0FBYyxDQUFDRixDQUFmLEVBQWtCNUMsQ0FBbEI7QUFDSCxLQUZELE1BR0s7QUFDRCxXQUFLNkMsUUFBTCxDQUFjRCxDQUFkLEVBQWlCNUMsQ0FBakI7QUFDSDs7QUFDRCxXQUFPQSxDQUFQO0FBQ0gsR0FURCxDQTNSd0MsQ0FxU3hDO0FBQ0E7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJ5RCxlQUFyQixHQUF1QyxZQUFZO0FBQy9DLFNBQUssSUFBSS9DLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0MsQ0FBekIsRUFBNEIsRUFBRUQsQ0FBOUIsRUFBaUM7QUFDN0IsVUFBSSxLQUFLQSxDQUFMLEtBQVcsQ0FBZixFQUFrQjtBQUNkLGVBQU9BLENBQUMsR0FBRyxLQUFLRyxFQUFULEdBQWMsZ0JBQUssS0FBS0gsQ0FBTCxDQUFMLENBQXJCO0FBQ0g7QUFDSjs7QUFDRCxRQUFJLEtBQUtSLENBQUwsR0FBUyxDQUFiLEVBQWdCO0FBQ1osYUFBTyxLQUFLUyxDQUFMLEdBQVMsS0FBS0UsRUFBckI7QUFDSDs7QUFDRCxXQUFPLENBQUMsQ0FBUjtBQUNILEdBVkQsQ0F2U3dDLENBa1R4QztBQUNBOzs7QUFDQW5CLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQjBELFFBQXJCLEdBQWdDLFlBQVk7QUFDeEMsUUFBSWpELENBQUMsR0FBRyxDQUFSO0FBQ0EsUUFBSWtELENBQUMsR0FBRyxLQUFLekQsQ0FBTCxHQUFTLEtBQUttQixFQUF0Qjs7QUFDQSxTQUFLLElBQUlYLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0MsQ0FBekIsRUFBNEIsRUFBRUQsQ0FBOUIsRUFBaUM7QUFDN0JELE1BQUFBLENBQUMsSUFBSSxnQkFBSyxLQUFLQyxDQUFMLElBQVVpRCxDQUFmLENBQUw7QUFDSDs7QUFDRCxXQUFPbEQsQ0FBUDtBQUNILEdBUEQsQ0FwVHdDLENBNFR4QztBQUNBOzs7QUFDQWYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCNEQsT0FBckIsR0FBK0IsVUFBVVAsQ0FBVixFQUFhO0FBQ3hDLFFBQUlRLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdWLENBQUMsR0FBRyxLQUFLeEMsRUFBcEIsQ0FBUjs7QUFDQSxRQUFJZ0QsQ0FBQyxJQUFJLEtBQUtsRCxDQUFkLEVBQWlCO0FBQ2IsYUFBUSxLQUFLVCxDQUFMLElBQVUsQ0FBbEI7QUFDSDs7QUFDRCxXQUFRLENBQUMsS0FBSzJELENBQUwsSUFBVyxLQUFNUixDQUFDLEdBQUcsS0FBS3hDLEVBQTNCLEtBQW9DLENBQTVDO0FBQ0gsR0FORCxDQTlUd0MsQ0FxVXhDO0FBQ0E7OztBQUNBbkIsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCZ0UsTUFBckIsR0FBOEIsVUFBVVgsQ0FBVixFQUFhO0FBQ3ZDLFdBQU8sS0FBS1ksU0FBTCxDQUFlWixDQUFmLEVBQWtCUCxXQUFsQixDQUFQO0FBQ0gsR0FGRCxDQXZVd0MsQ0EwVXhDO0FBQ0E7OztBQUNBcEQsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCa0UsUUFBckIsR0FBZ0MsVUFBVWIsQ0FBVixFQUFhO0FBQ3pDLFdBQU8sS0FBS1ksU0FBTCxDQUFlWixDQUFmLEVBQWtCSCxlQUFsQixDQUFQO0FBQ0gsR0FGRCxDQTVVd0MsQ0ErVXhDO0FBQ0E7OztBQUNBeEQsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCbUUsT0FBckIsR0FBK0IsVUFBVWQsQ0FBVixFQUFhO0FBQ3hDLFdBQU8sS0FBS1ksU0FBTCxDQUFlWixDQUFmLEVBQWtCTCxZQUFsQixDQUFQO0FBQ0gsR0FGRCxDQWpWd0MsQ0FvVnhDO0FBQ0E7OztBQUNBdEQsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCb0UsR0FBckIsR0FBMkIsVUFBVXpFLENBQVYsRUFBYTtBQUNwQyxRQUFJYyxDQUFDLEdBQUdLLEdBQUcsRUFBWDtBQUNBLFNBQUt1RCxLQUFMLENBQVcxRSxDQUFYLEVBQWNjLENBQWQ7QUFDQSxXQUFPQSxDQUFQO0FBQ0gsR0FKRCxDQXRWd0MsQ0EyVnhDO0FBQ0E7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJzRSxRQUFyQixHQUFnQyxVQUFVM0UsQ0FBVixFQUFhO0FBQ3pDLFFBQUljLENBQUMsR0FBR0ssR0FBRyxFQUFYO0FBQ0EsU0FBS0UsS0FBTCxDQUFXckIsQ0FBWCxFQUFjYyxDQUFkO0FBQ0EsV0FBT0EsQ0FBUDtBQUNILEdBSkQsQ0E3VndDLENBa1d4QztBQUNBOzs7QUFDQWYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCdUUsUUFBckIsR0FBZ0MsVUFBVTVFLENBQVYsRUFBYTtBQUN6QyxRQUFJYyxDQUFDLEdBQUdLLEdBQUcsRUFBWDtBQUNBLFNBQUswRCxVQUFMLENBQWdCN0UsQ0FBaEIsRUFBbUJjLENBQW5CO0FBQ0EsV0FBT0EsQ0FBUDtBQUNILEdBSkQsQ0FwV3dDLENBeVd4QztBQUNBOzs7QUFDQWYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCeUUsTUFBckIsR0FBOEIsVUFBVTlFLENBQVYsRUFBYTtBQUN2QyxRQUFJYyxDQUFDLEdBQUdLLEdBQUcsRUFBWDtBQUNBLFNBQUtTLFFBQUwsQ0FBYzVCLENBQWQsRUFBaUJjLENBQWpCLEVBQW9CLElBQXBCO0FBQ0EsV0FBT0EsQ0FBUDtBQUNILEdBSkQsQ0EzV3dDLENBZ1h4QztBQUNBOzs7QUFDQWYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCMEUsU0FBckIsR0FBaUMsVUFBVS9FLENBQVYsRUFBYTtBQUMxQyxRQUFJYyxDQUFDLEdBQUdLLEdBQUcsRUFBWDtBQUNBLFNBQUtTLFFBQUwsQ0FBYzVCLENBQWQsRUFBaUIsSUFBakIsRUFBdUJjLENBQXZCO0FBQ0EsV0FBT0EsQ0FBUDtBQUNILEdBSkQsQ0FsWHdDLENBdVh4QztBQUNBOzs7QUFDQWYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCMkUsa0JBQXJCLEdBQTBDLFVBQVVoRixDQUFWLEVBQWE7QUFDbkQsUUFBSWlGLENBQUMsR0FBRzlELEdBQUcsRUFBWDtBQUNBLFFBQUlMLENBQUMsR0FBR0ssR0FBRyxFQUFYO0FBQ0EsU0FBS1MsUUFBTCxDQUFjNUIsQ0FBZCxFQUFpQmlGLENBQWpCLEVBQW9CbkUsQ0FBcEI7QUFDQSxXQUFPLENBQUNtRSxDQUFELEVBQUluRSxDQUFKLENBQVA7QUFDSCxHQUxELENBelh3QyxDQStYeEM7QUFDQTs7O0FBQ0FmLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQjZFLE1BQXJCLEdBQThCLFVBQVVwRCxDQUFWLEVBQWFqQixDQUFiLEVBQWdCO0FBQzFDLFFBQUlFLENBQUMsR0FBR2UsQ0FBQyxDQUFDTixTQUFGLEVBQVI7QUFDQSxRQUFJZixDQUFKO0FBQ0EsUUFBSUssQ0FBQyxHQUFHcUUsR0FBRyxDQUFDLENBQUQsQ0FBWDtBQUNBLFFBQUlwRCxDQUFKOztBQUNBLFFBQUloQixDQUFDLElBQUksQ0FBVCxFQUFZO0FBQ1IsYUFBT0QsQ0FBUDtBQUNILEtBRkQsTUFHSyxJQUFJQyxDQUFDLEdBQUcsRUFBUixFQUFZO0FBQ2JOLE1BQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0gsS0FGSSxNQUdBLElBQUlNLENBQUMsR0FBRyxFQUFSLEVBQVk7QUFDYk4sTUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFDSCxLQUZJLE1BR0EsSUFBSU0sQ0FBQyxHQUFHLEdBQVIsRUFBYTtBQUNkTixNQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUNILEtBRkksTUFHQSxJQUFJTSxDQUFDLEdBQUcsR0FBUixFQUFhO0FBQ2ROLE1BQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0gsS0FGSSxNQUdBO0FBQ0RBLE1BQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0g7O0FBQ0QsUUFBSU0sQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQZ0IsTUFBQUEsQ0FBQyxHQUFHLElBQUlFLE9BQUosQ0FBWXBCLENBQVosQ0FBSjtBQUNILEtBRkQsTUFHSyxJQUFJQSxDQUFDLENBQUNtQixNQUFGLEVBQUosRUFBZ0I7QUFDakJELE1BQUFBLENBQUMsR0FBRyxJQUFJcUQsT0FBSixDQUFZdkUsQ0FBWixDQUFKO0FBQ0gsS0FGSSxNQUdBO0FBQ0RrQixNQUFBQSxDQUFDLEdBQUcsSUFBSUcsVUFBSixDQUFlckIsQ0FBZixDQUFKO0FBQ0gsS0EvQnlDLENBZ0MxQzs7O0FBQ0EsUUFBSXdFLENBQUMsR0FBRyxFQUFSO0FBQ0EsUUFBSTNCLENBQUMsR0FBRyxDQUFSO0FBQ0EsUUFBSTRCLEVBQUUsR0FBRzdFLENBQUMsR0FBRyxDQUFiO0FBQ0EsUUFBSUUsRUFBRSxHQUFHLENBQUMsS0FBS0YsQ0FBTixJQUFXLENBQXBCO0FBQ0E0RSxJQUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU90RCxDQUFDLENBQUN3RCxPQUFGLENBQVUsSUFBVixDQUFQOztBQUNBLFFBQUk5RSxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1AsVUFBSStFLEVBQUUsR0FBR3JFLEdBQUcsRUFBWjtBQUNBWSxNQUFBQSxDQUFDLENBQUMwRCxLQUFGLENBQVFKLENBQUMsQ0FBQyxDQUFELENBQVQsRUFBY0csRUFBZDs7QUFDQSxhQUFPOUIsQ0FBQyxJQUFJL0MsRUFBWixFQUFnQjtBQUNaMEUsUUFBQUEsQ0FBQyxDQUFDM0IsQ0FBRCxDQUFELEdBQU92QyxHQUFHLEVBQVY7QUFDQVksUUFBQUEsQ0FBQyxDQUFDMkQsS0FBRixDQUFRRixFQUFSLEVBQVlILENBQUMsQ0FBQzNCLENBQUMsR0FBRyxDQUFMLENBQWIsRUFBc0IyQixDQUFDLENBQUMzQixDQUFELENBQXZCO0FBQ0FBLFFBQUFBLENBQUMsSUFBSSxDQUFMO0FBQ0g7QUFDSjs7QUFDRCxRQUFJUSxDQUFDLEdBQUdwQyxDQUFDLENBQUNkLENBQUYsR0FBTSxDQUFkO0FBQ0EsUUFBSTJFLENBQUo7QUFDQSxRQUFJQyxHQUFHLEdBQUcsSUFBVjtBQUNBLFFBQUlDLEVBQUUsR0FBRzFFLEdBQUcsRUFBWjtBQUNBLFFBQUlILENBQUo7QUFDQUQsSUFBQUEsQ0FBQyxHQUFHVSxLQUFLLENBQUNLLENBQUMsQ0FBQ29DLENBQUQsQ0FBRixDQUFMLEdBQWMsQ0FBbEI7O0FBQ0EsV0FBT0EsQ0FBQyxJQUFJLENBQVosRUFBZTtBQUNYLFVBQUluRCxDQUFDLElBQUl1RSxFQUFULEVBQWE7QUFDVEssUUFBQUEsQ0FBQyxHQUFJN0QsQ0FBQyxDQUFDb0MsQ0FBRCxDQUFELElBQVNuRCxDQUFDLEdBQUd1RSxFQUFkLEdBQXFCM0UsRUFBekI7QUFDSCxPQUZELE1BR0s7QUFDRGdGLFFBQUFBLENBQUMsR0FBRyxDQUFDN0QsQ0FBQyxDQUFDb0MsQ0FBRCxDQUFELEdBQVEsQ0FBQyxLQUFNbkQsQ0FBQyxHQUFHLENBQVgsSUFBaUIsQ0FBMUIsS0FBa0N1RSxFQUFFLEdBQUd2RSxDQUEzQzs7QUFDQSxZQUFJbUQsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQeUIsVUFBQUEsQ0FBQyxJQUFJN0QsQ0FBQyxDQUFDb0MsQ0FBQyxHQUFHLENBQUwsQ0FBRCxJQUFhLEtBQUtoRCxFQUFMLEdBQVVILENBQVYsR0FBY3VFLEVBQWhDO0FBQ0g7QUFDSjs7QUFDRDVCLE1BQUFBLENBQUMsR0FBR2pELENBQUo7O0FBQ0EsYUFBTyxDQUFDa0YsQ0FBQyxHQUFHLENBQUwsS0FBVyxDQUFsQixFQUFxQjtBQUNqQkEsUUFBQUEsQ0FBQyxLQUFLLENBQU47QUFDQSxVQUFFakMsQ0FBRjtBQUNIOztBQUNELFVBQUksQ0FBQzNDLENBQUMsSUFBSTJDLENBQU4sSUFBVyxDQUFmLEVBQWtCO0FBQ2QzQyxRQUFBQSxDQUFDLElBQUksS0FBS0csRUFBVjtBQUNBLFVBQUVnRCxDQUFGO0FBQ0g7O0FBQ0QsVUFBSTBCLEdBQUosRUFBUztBQUFFO0FBQ1BQLFFBQUFBLENBQUMsQ0FBQ00sQ0FBRCxDQUFELENBQUt0RCxNQUFMLENBQVl2QixDQUFaO0FBQ0E4RSxRQUFBQSxHQUFHLEdBQUcsS0FBTjtBQUNILE9BSEQsTUFJSztBQUNELGVBQU9sQyxDQUFDLEdBQUcsQ0FBWCxFQUFjO0FBQ1YzQixVQUFBQSxDQUFDLENBQUMwRCxLQUFGLENBQVEzRSxDQUFSLEVBQVcrRSxFQUFYO0FBQ0E5RCxVQUFBQSxDQUFDLENBQUMwRCxLQUFGLENBQVFJLEVBQVIsRUFBWS9FLENBQVo7QUFDQTRDLFVBQUFBLENBQUMsSUFBSSxDQUFMO0FBQ0g7O0FBQ0QsWUFBSUEsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQM0IsVUFBQUEsQ0FBQyxDQUFDMEQsS0FBRixDQUFRM0UsQ0FBUixFQUFXK0UsRUFBWDtBQUNILFNBRkQsTUFHSztBQUNEN0UsVUFBQUEsQ0FBQyxHQUFHRixDQUFKO0FBQ0FBLFVBQUFBLENBQUMsR0FBRytFLEVBQUo7QUFDQUEsVUFBQUEsRUFBRSxHQUFHN0UsQ0FBTDtBQUNIOztBQUNEZSxRQUFBQSxDQUFDLENBQUMyRCxLQUFGLENBQVFHLEVBQVIsRUFBWVIsQ0FBQyxDQUFDTSxDQUFELENBQWIsRUFBa0I3RSxDQUFsQjtBQUNIOztBQUNELGFBQU9vRCxDQUFDLElBQUksQ0FBTCxJQUFVLENBQUNwQyxDQUFDLENBQUNvQyxDQUFELENBQUQsR0FBUSxLQUFLbkQsQ0FBZCxLQUFxQixDQUF0QyxFQUF5QztBQUNyQ2dCLFFBQUFBLENBQUMsQ0FBQzBELEtBQUYsQ0FBUTNFLENBQVIsRUFBVytFLEVBQVg7QUFDQTdFLFFBQUFBLENBQUMsR0FBR0YsQ0FBSjtBQUNBQSxRQUFBQSxDQUFDLEdBQUcrRSxFQUFKO0FBQ0FBLFFBQUFBLEVBQUUsR0FBRzdFLENBQUw7O0FBQ0EsWUFBSSxFQUFFRCxDQUFGLEdBQU0sQ0FBVixFQUFhO0FBQ1RBLFVBQUFBLENBQUMsR0FBRyxLQUFLRyxFQUFMLEdBQVUsQ0FBZDtBQUNBLFlBQUVnRCxDQUFGO0FBQ0g7QUFDSjtBQUNKOztBQUNELFdBQU9uQyxDQUFDLENBQUMrRCxNQUFGLENBQVNoRixDQUFULENBQVA7QUFDSCxHQXhHRCxDQWpZd0MsQ0EwZXhDO0FBQ0E7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUIwRixVQUFyQixHQUFrQyxVQUFVbEYsQ0FBVixFQUFhO0FBQzNDLFFBQUltRixFQUFFLEdBQUduRixDQUFDLENBQUNtQixNQUFGLEVBQVQ7O0FBQ0EsUUFBSyxLQUFLQSxNQUFMLE1BQWlCZ0UsRUFBbEIsSUFBeUJuRixDQUFDLENBQUM2QixNQUFGLE1BQWMsQ0FBM0MsRUFBOEM7QUFDMUMsYUFBTzNDLFVBQVUsQ0FBQ3FCLElBQWxCO0FBQ0g7O0FBQ0QsUUFBSTZFLENBQUMsR0FBR3BGLENBQUMsQ0FBQ3VCLEtBQUYsRUFBUjtBQUNBLFFBQUk4RCxDQUFDLEdBQUcsS0FBSzlELEtBQUwsRUFBUjtBQUNBLFFBQUlwQyxDQUFDLEdBQUdtRixHQUFHLENBQUMsQ0FBRCxDQUFYO0FBQ0EsUUFBSWxGLENBQUMsR0FBR2tGLEdBQUcsQ0FBQyxDQUFELENBQVg7QUFDQSxRQUFJakYsQ0FBQyxHQUFHaUYsR0FBRyxDQUFDLENBQUQsQ0FBWDtBQUNBLFFBQUl2RSxDQUFDLEdBQUd1RSxHQUFHLENBQUMsQ0FBRCxDQUFYOztBQUNBLFdBQU9jLENBQUMsQ0FBQ3ZELE1BQUYsTUFBYyxDQUFyQixFQUF3QjtBQUNwQixhQUFPdUQsQ0FBQyxDQUFDakUsTUFBRixFQUFQLEVBQW1CO0FBQ2ZpRSxRQUFBQSxDQUFDLENBQUN0QyxRQUFGLENBQVcsQ0FBWCxFQUFjc0MsQ0FBZDs7QUFDQSxZQUFJRCxFQUFKLEVBQVE7QUFDSixjQUFJLENBQUNoRyxDQUFDLENBQUNnQyxNQUFGLEVBQUQsSUFBZSxDQUFDL0IsQ0FBQyxDQUFDK0IsTUFBRixFQUFwQixFQUFnQztBQUM1QmhDLFlBQUFBLENBQUMsQ0FBQzBFLEtBQUYsQ0FBUSxJQUFSLEVBQWMxRSxDQUFkO0FBQ0FDLFlBQUFBLENBQUMsQ0FBQ29CLEtBQUYsQ0FBUVIsQ0FBUixFQUFXWixDQUFYO0FBQ0g7O0FBQ0RELFVBQUFBLENBQUMsQ0FBQzJELFFBQUYsQ0FBVyxDQUFYLEVBQWMzRCxDQUFkO0FBQ0gsU0FORCxNQU9LLElBQUksQ0FBQ0MsQ0FBQyxDQUFDK0IsTUFBRixFQUFMLEVBQWlCO0FBQ2xCL0IsVUFBQUEsQ0FBQyxDQUFDb0IsS0FBRixDQUFRUixDQUFSLEVBQVdaLENBQVg7QUFDSDs7QUFDREEsUUFBQUEsQ0FBQyxDQUFDMEQsUUFBRixDQUFXLENBQVgsRUFBYzFELENBQWQ7QUFDSDs7QUFDRCxhQUFPaUcsQ0FBQyxDQUFDbEUsTUFBRixFQUFQLEVBQW1CO0FBQ2ZrRSxRQUFBQSxDQUFDLENBQUN2QyxRQUFGLENBQVcsQ0FBWCxFQUFjdUMsQ0FBZDs7QUFDQSxZQUFJRixFQUFKLEVBQVE7QUFDSixjQUFJLENBQUM5RixDQUFDLENBQUM4QixNQUFGLEVBQUQsSUFBZSxDQUFDcEIsQ0FBQyxDQUFDb0IsTUFBRixFQUFwQixFQUFnQztBQUM1QjlCLFlBQUFBLENBQUMsQ0FBQ3dFLEtBQUYsQ0FBUSxJQUFSLEVBQWN4RSxDQUFkO0FBQ0FVLFlBQUFBLENBQUMsQ0FBQ1MsS0FBRixDQUFRUixDQUFSLEVBQVdELENBQVg7QUFDSDs7QUFDRFYsVUFBQUEsQ0FBQyxDQUFDeUQsUUFBRixDQUFXLENBQVgsRUFBY3pELENBQWQ7QUFDSCxTQU5ELE1BT0ssSUFBSSxDQUFDVSxDQUFDLENBQUNvQixNQUFGLEVBQUwsRUFBaUI7QUFDbEJwQixVQUFBQSxDQUFDLENBQUNTLEtBQUYsQ0FBUVIsQ0FBUixFQUFXRCxDQUFYO0FBQ0g7O0FBQ0RBLFFBQUFBLENBQUMsQ0FBQytDLFFBQUYsQ0FBVyxDQUFYLEVBQWMvQyxDQUFkO0FBQ0g7O0FBQ0QsVUFBSXFGLENBQUMsQ0FBQzFFLFNBQUYsQ0FBWTJFLENBQVosS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJELFFBQUFBLENBQUMsQ0FBQzVFLEtBQUYsQ0FBUTZFLENBQVIsRUFBV0QsQ0FBWDs7QUFDQSxZQUFJRCxFQUFKLEVBQVE7QUFDSmhHLFVBQUFBLENBQUMsQ0FBQ3FCLEtBQUYsQ0FBUW5CLENBQVIsRUFBV0YsQ0FBWDtBQUNIOztBQUNEQyxRQUFBQSxDQUFDLENBQUNvQixLQUFGLENBQVFULENBQVIsRUFBV1gsQ0FBWDtBQUNILE9BTkQsTUFPSztBQUNEaUcsUUFBQUEsQ0FBQyxDQUFDN0UsS0FBRixDQUFRNEUsQ0FBUixFQUFXQyxDQUFYOztBQUNBLFlBQUlGLEVBQUosRUFBUTtBQUNKOUYsVUFBQUEsQ0FBQyxDQUFDbUIsS0FBRixDQUFRckIsQ0FBUixFQUFXRSxDQUFYO0FBQ0g7O0FBQ0RVLFFBQUFBLENBQUMsQ0FBQ1MsS0FBRixDQUFRcEIsQ0FBUixFQUFXVyxDQUFYO0FBQ0g7QUFDSjs7QUFDRCxRQUFJc0YsQ0FBQyxDQUFDM0UsU0FBRixDQUFZeEIsVUFBVSxDQUFDb0csR0FBdkIsS0FBK0IsQ0FBbkMsRUFBc0M7QUFDbEMsYUFBT3BHLFVBQVUsQ0FBQ3FCLElBQWxCO0FBQ0g7O0FBQ0QsUUFBSVIsQ0FBQyxDQUFDVyxTQUFGLENBQVlWLENBQVosS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsYUFBT0QsQ0FBQyxDQUFDK0QsUUFBRixDQUFXOUQsQ0FBWCxDQUFQO0FBQ0g7O0FBQ0QsUUFBSUQsQ0FBQyxDQUFDOEIsTUFBRixLQUFhLENBQWpCLEVBQW9CO0FBQ2hCOUIsTUFBQUEsQ0FBQyxDQUFDOEQsS0FBRixDQUFRN0QsQ0FBUixFQUFXRCxDQUFYO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsYUFBT0EsQ0FBUDtBQUNIOztBQUNELFFBQUlBLENBQUMsQ0FBQzhCLE1BQUYsS0FBYSxDQUFqQixFQUFvQjtBQUNoQixhQUFPOUIsQ0FBQyxDQUFDNkQsR0FBRixDQUFNNUQsQ0FBTixDQUFQO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsYUFBT0QsQ0FBUDtBQUNIO0FBQ0osR0F6RUQsQ0E1ZXdDLENBc2pCeEM7QUFDQTs7O0FBQ0FiLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQitGLEdBQXJCLEdBQTJCLFVBQVV0RSxDQUFWLEVBQWE7QUFDcEMsV0FBTyxLQUFLSyxHQUFMLENBQVNMLENBQVQsRUFBWSxJQUFJdUUsT0FBSixFQUFaLENBQVA7QUFDSCxHQUZELENBeGpCd0MsQ0EyakJ4QztBQUNBOzs7QUFDQXRHLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQmlHLEdBQXJCLEdBQTJCLFVBQVV0RyxDQUFWLEVBQWE7QUFDcEMsUUFBSWdFLENBQUMsR0FBSSxLQUFLekQsQ0FBTCxHQUFTLENBQVYsR0FBZSxLQUFLQyxNQUFMLEVBQWYsR0FBK0IsS0FBSzRCLEtBQUwsRUFBdkM7QUFDQSxRQUFJbUUsQ0FBQyxHQUFJdkcsQ0FBQyxDQUFDTyxDQUFGLEdBQU0sQ0FBUCxHQUFZUCxDQUFDLENBQUNRLE1BQUYsRUFBWixHQUF5QlIsQ0FBQyxDQUFDb0MsS0FBRixFQUFqQzs7QUFDQSxRQUFJNEIsQ0FBQyxDQUFDekMsU0FBRixDQUFZZ0YsQ0FBWixJQUFpQixDQUFyQixFQUF3QjtBQUNwQixVQUFJdkYsQ0FBQyxHQUFHZ0QsQ0FBUjtBQUNBQSxNQUFBQSxDQUFDLEdBQUd1QyxDQUFKO0FBQ0FBLE1BQUFBLENBQUMsR0FBR3ZGLENBQUo7QUFDSDs7QUFDRCxRQUFJRCxDQUFDLEdBQUdpRCxDQUFDLENBQUNGLGVBQUYsRUFBUjtBQUNBLFFBQUl1QixDQUFDLEdBQUdrQixDQUFDLENBQUN6QyxlQUFGLEVBQVI7O0FBQ0EsUUFBSXVCLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUCxhQUFPckIsQ0FBUDtBQUNIOztBQUNELFFBQUlqRCxDQUFDLEdBQUdzRSxDQUFSLEVBQVc7QUFDUEEsTUFBQUEsQ0FBQyxHQUFHdEUsQ0FBSjtBQUNIOztBQUNELFFBQUlzRSxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1ByQixNQUFBQSxDQUFDLENBQUNMLFFBQUYsQ0FBVzBCLENBQVgsRUFBY3JCLENBQWQ7QUFDQXVDLE1BQUFBLENBQUMsQ0FBQzVDLFFBQUYsQ0FBVzBCLENBQVgsRUFBY2tCLENBQWQ7QUFDSDs7QUFDRCxXQUFPdkMsQ0FBQyxDQUFDdEIsTUFBRixLQUFhLENBQXBCLEVBQXVCO0FBQ25CLFVBQUksQ0FBQzNCLENBQUMsR0FBR2lELENBQUMsQ0FBQ0YsZUFBRixFQUFMLElBQTRCLENBQWhDLEVBQW1DO0FBQy9CRSxRQUFBQSxDQUFDLENBQUNMLFFBQUYsQ0FBVzVDLENBQVgsRUFBY2lELENBQWQ7QUFDSDs7QUFDRCxVQUFJLENBQUNqRCxDQUFDLEdBQUd3RixDQUFDLENBQUN6QyxlQUFGLEVBQUwsSUFBNEIsQ0FBaEMsRUFBbUM7QUFDL0J5QyxRQUFBQSxDQUFDLENBQUM1QyxRQUFGLENBQVc1QyxDQUFYLEVBQWN3RixDQUFkO0FBQ0g7O0FBQ0QsVUFBSXZDLENBQUMsQ0FBQ3pDLFNBQUYsQ0FBWWdGLENBQVosS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJ2QyxRQUFBQSxDQUFDLENBQUMzQyxLQUFGLENBQVFrRixDQUFSLEVBQVd2QyxDQUFYO0FBQ0FBLFFBQUFBLENBQUMsQ0FBQ0wsUUFBRixDQUFXLENBQVgsRUFBY0ssQ0FBZDtBQUNILE9BSEQsTUFJSztBQUNEdUMsUUFBQUEsQ0FBQyxDQUFDbEYsS0FBRixDQUFRMkMsQ0FBUixFQUFXdUMsQ0FBWDtBQUNBQSxRQUFBQSxDQUFDLENBQUM1QyxRQUFGLENBQVcsQ0FBWCxFQUFjNEMsQ0FBZDtBQUNIO0FBQ0o7O0FBQ0QsUUFBSWxCLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUGtCLE1BQUFBLENBQUMsQ0FBQzNDLFFBQUYsQ0FBV3lCLENBQVgsRUFBY2tCLENBQWQ7QUFDSDs7QUFDRCxXQUFPQSxDQUFQO0FBQ0gsR0F4Q0QsQ0E3akJ3QyxDQXNtQnhDO0FBQ0E7OztBQUNBeEcsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCbUcsZUFBckIsR0FBdUMsVUFBVXhGLENBQVYsRUFBYTtBQUNoRCxRQUFJRCxDQUFKO0FBQ0EsUUFBSWlELENBQUMsR0FBRyxLQUFLMUMsR0FBTCxFQUFSOztBQUNBLFFBQUkwQyxDQUFDLENBQUNoRCxDQUFGLElBQU8sQ0FBUCxJQUFZZ0QsQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFRcEUsU0FBUyxDQUFDQSxTQUFTLENBQUNFLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBakMsRUFBeUQ7QUFDckQsV0FBS2lCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR25CLFNBQVMsQ0FBQ0UsTUFBMUIsRUFBa0MsRUFBRWlCLENBQXBDLEVBQXVDO0FBQ25DLFlBQUlpRCxDQUFDLENBQUMsQ0FBRCxDQUFELElBQVFwRSxTQUFTLENBQUNtQixDQUFELENBQXJCLEVBQTBCO0FBQ3RCLGlCQUFPLElBQVA7QUFDSDtBQUNKOztBQUNELGFBQU8sS0FBUDtBQUNIOztBQUNELFFBQUlpRCxDQUFDLENBQUNoQyxNQUFGLEVBQUosRUFBZ0I7QUFDWixhQUFPLEtBQVA7QUFDSDs7QUFDRGpCLElBQUFBLENBQUMsR0FBRyxDQUFKOztBQUNBLFdBQU9BLENBQUMsR0FBR25CLFNBQVMsQ0FBQ0UsTUFBckIsRUFBNkI7QUFDekIsVUFBSWUsQ0FBQyxHQUFHakIsU0FBUyxDQUFDbUIsQ0FBRCxDQUFqQjtBQUNBLFVBQUltRCxDQUFDLEdBQUduRCxDQUFDLEdBQUcsQ0FBWjs7QUFDQSxhQUFPbUQsQ0FBQyxHQUFHdEUsU0FBUyxDQUFDRSxNQUFkLElBQXdCZSxDQUFDLEdBQUdoQixLQUFuQyxFQUEwQztBQUN0Q2dCLFFBQUFBLENBQUMsSUFBSWpCLFNBQVMsQ0FBQ3NFLENBQUMsRUFBRixDQUFkO0FBQ0g7O0FBQ0RyRCxNQUFBQSxDQUFDLEdBQUdtRCxDQUFDLENBQUN5QyxNQUFGLENBQVM1RixDQUFULENBQUo7O0FBQ0EsYUFBT0UsQ0FBQyxHQUFHbUQsQ0FBWCxFQUFjO0FBQ1YsWUFBSXJELENBQUMsR0FBR2pCLFNBQVMsQ0FBQ21CLENBQUMsRUFBRixDQUFiLElBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLGlCQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsV0FBT2lELENBQUMsQ0FBQzBDLFdBQUYsQ0FBYzFGLENBQWQsQ0FBUDtBQUNILEdBN0JELENBeG1Cd0MsQ0Fzb0J4QztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FqQixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJnQyxNQUFyQixHQUE4QixVQUFVdkIsQ0FBVixFQUFhO0FBQ3ZDLFNBQUssSUFBSUMsQ0FBQyxHQUFHLEtBQUtDLENBQUwsR0FBUyxDQUF0QixFQUF5QkQsQ0FBQyxJQUFJLENBQTlCLEVBQWlDLEVBQUVBLENBQW5DLEVBQXNDO0FBQ2xDRCxNQUFBQSxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPLEtBQUtBLENBQUwsQ0FBUDtBQUNIOztBQUNERCxJQUFBQSxDQUFDLENBQUNFLENBQUYsR0FBTSxLQUFLQSxDQUFYO0FBQ0FGLElBQUFBLENBQUMsQ0FBQ1AsQ0FBRixHQUFNLEtBQUtBLENBQVg7QUFDSCxHQU5ELENBMW9Cd0MsQ0FpcEJ4QztBQUNBOzs7QUFDQVIsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCc0csT0FBckIsR0FBK0IsVUFBVTNDLENBQVYsRUFBYTtBQUN4QyxTQUFLaEQsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLVCxDQUFMLEdBQVV5RCxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQUMsQ0FBWCxHQUFlLENBQXhCOztBQUNBLFFBQUlBLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUCxXQUFLLENBQUwsSUFBVUEsQ0FBVjtBQUNILEtBRkQsTUFHSyxJQUFJQSxDQUFDLEdBQUcsQ0FBQyxDQUFULEVBQVk7QUFDYixXQUFLLENBQUwsSUFBVUEsQ0FBQyxHQUFHLEtBQUt6QixFQUFuQjtBQUNILEtBRkksTUFHQTtBQUNELFdBQUt2QixDQUFMLEdBQVMsQ0FBVDtBQUNIO0FBQ0osR0FaRCxDQW5wQndDLENBZ3FCeEM7QUFDQTs7O0FBQ0FqQixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJELFVBQXJCLEdBQWtDLFVBQVVHLENBQVYsRUFBYU4sQ0FBYixFQUFnQjtBQUM5QyxRQUFJUSxDQUFKOztBQUNBLFFBQUlSLENBQUMsSUFBSSxFQUFULEVBQWE7QUFDVFEsTUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFDSCxLQUZELE1BR0ssSUFBSVIsQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNiUSxNQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUNILEtBRkksTUFHQSxJQUFJUixDQUFDLElBQUksR0FBVCxFQUFjO0FBQ2ZRLE1BQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0E7QUFDSCxLQUhJLE1BSUEsSUFBSVIsQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNiUSxNQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUNILEtBRkksTUFHQSxJQUFJUixDQUFDLElBQUksRUFBVCxFQUFhO0FBQ2RRLE1BQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0gsS0FGSSxNQUdBLElBQUlSLENBQUMsSUFBSSxDQUFULEVBQVk7QUFDYlEsTUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFDSCxLQUZJLE1BR0E7QUFDRCxXQUFLbUcsU0FBTCxDQUFlckcsQ0FBZixFQUFrQk4sQ0FBbEI7QUFDQTtBQUNIOztBQUNELFNBQUtlLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBS1QsQ0FBTCxHQUFTLENBQVQ7QUFDQSxRQUFJUSxDQUFDLEdBQUdSLENBQUMsQ0FBQ1QsTUFBVjtBQUNBLFFBQUkrRyxFQUFFLEdBQUcsS0FBVDtBQUNBLFFBQUlDLEVBQUUsR0FBRyxDQUFUOztBQUNBLFdBQU8sRUFBRS9GLENBQUYsSUFBTyxDQUFkLEVBQWlCO0FBQ2IsVUFBSWlELENBQUMsR0FBSXZELENBQUMsSUFBSSxDQUFOLEdBQVksQ0FBQ0YsQ0FBQyxDQUFDUSxDQUFELENBQUgsR0FBVSxJQUFyQixHQUE0QmdHLEtBQUssQ0FBQ3hHLENBQUQsRUFBSVEsQ0FBSixDQUF6Qzs7QUFDQSxVQUFJaUQsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQLFlBQUl6RCxDQUFDLENBQUN5RyxNQUFGLENBQVNqRyxDQUFULEtBQWUsR0FBbkIsRUFBd0I7QUFDcEI4RixVQUFBQSxFQUFFLEdBQUcsSUFBTDtBQUNIOztBQUNEO0FBQ0g7O0FBQ0RBLE1BQUFBLEVBQUUsR0FBRyxLQUFMOztBQUNBLFVBQUlDLEVBQUUsSUFBSSxDQUFWLEVBQWE7QUFDVCxhQUFLLEtBQUs5RixDQUFMLEVBQUwsSUFBaUJnRCxDQUFqQjtBQUNILE9BRkQsTUFHSyxJQUFJOEMsRUFBRSxHQUFHckcsQ0FBTCxHQUFTLEtBQUtTLEVBQWxCLEVBQXNCO0FBQ3ZCLGFBQUssS0FBS0YsQ0FBTCxHQUFTLENBQWQsS0FBb0IsQ0FBQ2dELENBQUMsR0FBSSxDQUFDLEtBQU0sS0FBSzlDLEVBQUwsR0FBVTRGLEVBQWpCLElBQXdCLENBQTlCLEtBQXFDQSxFQUF6RDtBQUNBLGFBQUssS0FBSzlGLENBQUwsRUFBTCxJQUFrQmdELENBQUMsSUFBSyxLQUFLOUMsRUFBTCxHQUFVNEYsRUFBbEM7QUFDSCxPQUhJLE1BSUE7QUFDRCxhQUFLLEtBQUs5RixDQUFMLEdBQVMsQ0FBZCxLQUFvQmdELENBQUMsSUFBSThDLEVBQXpCO0FBQ0g7O0FBQ0RBLE1BQUFBLEVBQUUsSUFBSXJHLENBQU47O0FBQ0EsVUFBSXFHLEVBQUUsSUFBSSxLQUFLNUYsRUFBZixFQUFtQjtBQUNmNEYsUUFBQUEsRUFBRSxJQUFJLEtBQUs1RixFQUFYO0FBQ0g7QUFDSjs7QUFDRCxRQUFJVCxDQUFDLElBQUksQ0FBTCxJQUFVLENBQUUsQ0FBQ0YsQ0FBQyxDQUFDLENBQUQsQ0FBSCxHQUFVLElBQVgsS0FBb0IsQ0FBbEMsRUFBcUM7QUFDakMsV0FBS0EsQ0FBTCxHQUFTLENBQUMsQ0FBVjs7QUFDQSxVQUFJdUcsRUFBRSxHQUFHLENBQVQsRUFBWTtBQUNSLGFBQUssS0FBSzlGLENBQUwsR0FBUyxDQUFkLEtBQXFCLENBQUMsS0FBTSxLQUFLRSxFQUFMLEdBQVU0RixFQUFqQixJQUF3QixDQUF6QixJQUErQkEsRUFBbkQ7QUFDSDtBQUNKOztBQUNELFNBQUtHLEtBQUw7O0FBQ0EsUUFBSUosRUFBSixFQUFRO0FBQ0o5RyxNQUFBQSxVQUFVLENBQUNxQixJQUFYLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUE0QixJQUE1QjtBQUNIO0FBQ0osR0FoRUQsQ0FscUJ3QyxDQW11QnhDO0FBQ0E7OztBQUNBdEIsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCNEcsS0FBckIsR0FBNkIsWUFBWTtBQUNyQyxRQUFJL0csQ0FBQyxHQUFHLEtBQUtLLENBQUwsR0FBUyxLQUFLbUIsRUFBdEI7O0FBQ0EsV0FBTyxLQUFLVixDQUFMLEdBQVMsQ0FBVCxJQUFjLEtBQUssS0FBS0EsQ0FBTCxHQUFTLENBQWQsS0FBb0JkLENBQXpDLEVBQTRDO0FBQ3hDLFFBQUUsS0FBS2MsQ0FBUDtBQUNIO0FBQ0osR0FMRCxDQXJ1QndDLENBMnVCeEM7QUFDQTs7O0FBQ0FqQixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUI2RyxTQUFyQixHQUFpQyxVQUFVeEQsQ0FBVixFQUFhNUMsQ0FBYixFQUFnQjtBQUM3QyxRQUFJQyxDQUFKOztBQUNBLFNBQUtBLENBQUMsR0FBRyxLQUFLQyxDQUFMLEdBQVMsQ0FBbEIsRUFBcUJELENBQUMsSUFBSSxDQUExQixFQUE2QixFQUFFQSxDQUEvQixFQUFrQztBQUM5QkQsTUFBQUEsQ0FBQyxDQUFDQyxDQUFDLEdBQUcyQyxDQUFMLENBQUQsR0FBVyxLQUFLM0MsQ0FBTCxDQUFYO0FBQ0g7O0FBQ0QsU0FBS0EsQ0FBQyxHQUFHMkMsQ0FBQyxHQUFHLENBQWIsRUFBZ0IzQyxDQUFDLElBQUksQ0FBckIsRUFBd0IsRUFBRUEsQ0FBMUIsRUFBNkI7QUFDekJELE1BQUFBLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU8sQ0FBUDtBQUNIOztBQUNERCxJQUFBQSxDQUFDLENBQUNFLENBQUYsR0FBTSxLQUFLQSxDQUFMLEdBQVMwQyxDQUFmO0FBQ0E1QyxJQUFBQSxDQUFDLENBQUNQLENBQUYsR0FBTSxLQUFLQSxDQUFYO0FBQ0gsR0FWRCxDQTd1QndDLENBd3ZCeEM7QUFDQTs7O0FBQ0FSLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQjhHLFNBQXJCLEdBQWlDLFVBQVV6RCxDQUFWLEVBQWE1QyxDQUFiLEVBQWdCO0FBQzdDLFNBQUssSUFBSUMsQ0FBQyxHQUFHMkMsQ0FBYixFQUFnQjNDLENBQUMsR0FBRyxLQUFLQyxDQUF6QixFQUE0QixFQUFFRCxDQUE5QixFQUFpQztBQUM3QkQsTUFBQUEsQ0FBQyxDQUFDQyxDQUFDLEdBQUcyQyxDQUFMLENBQUQsR0FBVyxLQUFLM0MsQ0FBTCxDQUFYO0FBQ0g7O0FBQ0RELElBQUFBLENBQUMsQ0FBQ0UsQ0FBRixHQUFNbUQsSUFBSSxDQUFDckIsR0FBTCxDQUFTLEtBQUs5QixDQUFMLEdBQVMwQyxDQUFsQixFQUFxQixDQUFyQixDQUFOO0FBQ0E1QyxJQUFBQSxDQUFDLENBQUNQLENBQUYsR0FBTSxLQUFLQSxDQUFYO0FBQ0gsR0FORCxDQTF2QndDLENBaXdCeEM7QUFDQTs7O0FBQ0FSLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQnVELFFBQXJCLEdBQWdDLFVBQVVGLENBQVYsRUFBYTVDLENBQWIsRUFBZ0I7QUFDNUMsUUFBSXNHLEVBQUUsR0FBRzFELENBQUMsR0FBRyxLQUFLeEMsRUFBbEI7QUFDQSxRQUFJbUcsR0FBRyxHQUFHLEtBQUtuRyxFQUFMLEdBQVVrRyxFQUFwQjtBQUNBLFFBQUlFLEVBQUUsR0FBRyxDQUFDLEtBQUtELEdBQU4sSUFBYSxDQUF0QjtBQUNBLFFBQUlFLEVBQUUsR0FBR3BELElBQUksQ0FBQ0MsS0FBTCxDQUFXVixDQUFDLEdBQUcsS0FBS3hDLEVBQXBCLENBQVQ7QUFDQSxRQUFJaEIsQ0FBQyxHQUFJLEtBQUtLLENBQUwsSUFBVTZHLEVBQVgsR0FBaUIsS0FBSzFGLEVBQTlCOztBQUNBLFNBQUssSUFBSVgsQ0FBQyxHQUFHLEtBQUtDLENBQUwsR0FBUyxDQUF0QixFQUF5QkQsQ0FBQyxJQUFJLENBQTlCLEVBQWlDLEVBQUVBLENBQW5DLEVBQXNDO0FBQ2xDRCxNQUFBQSxDQUFDLENBQUNDLENBQUMsR0FBR3dHLEVBQUosR0FBUyxDQUFWLENBQUQsR0FBaUIsS0FBS3hHLENBQUwsS0FBV3NHLEdBQVosR0FBbUJuSCxDQUFuQztBQUNBQSxNQUFBQSxDQUFDLEdBQUcsQ0FBQyxLQUFLYSxDQUFMLElBQVV1RyxFQUFYLEtBQWtCRixFQUF0QjtBQUNIOztBQUNELFNBQUssSUFBSXJHLENBQUMsR0FBR3dHLEVBQUUsR0FBRyxDQUFsQixFQUFxQnhHLENBQUMsSUFBSSxDQUExQixFQUE2QixFQUFFQSxDQUEvQixFQUFrQztBQUM5QkQsTUFBQUEsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBTyxDQUFQO0FBQ0g7O0FBQ0RELElBQUFBLENBQUMsQ0FBQ3lHLEVBQUQsQ0FBRCxHQUFRckgsQ0FBUjtBQUNBWSxJQUFBQSxDQUFDLENBQUNFLENBQUYsR0FBTSxLQUFLQSxDQUFMLEdBQVN1RyxFQUFULEdBQWMsQ0FBcEI7QUFDQXpHLElBQUFBLENBQUMsQ0FBQ1AsQ0FBRixHQUFNLEtBQUtBLENBQVg7QUFDQU8sSUFBQUEsQ0FBQyxDQUFDbUcsS0FBRjtBQUNILEdBakJELENBbndCd0MsQ0FxeEJ4QztBQUNBOzs7QUFDQWxILEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQnNELFFBQXJCLEdBQWdDLFVBQVVELENBQVYsRUFBYTVDLENBQWIsRUFBZ0I7QUFDNUNBLElBQUFBLENBQUMsQ0FBQ1AsQ0FBRixHQUFNLEtBQUtBLENBQVg7QUFDQSxRQUFJZ0gsRUFBRSxHQUFHcEQsSUFBSSxDQUFDQyxLQUFMLENBQVdWLENBQUMsR0FBRyxLQUFLeEMsRUFBcEIsQ0FBVDs7QUFDQSxRQUFJcUcsRUFBRSxJQUFJLEtBQUt2RyxDQUFmLEVBQWtCO0FBQ2RGLE1BQUFBLENBQUMsQ0FBQ0UsQ0FBRixHQUFNLENBQU47QUFDQTtBQUNIOztBQUNELFFBQUlvRyxFQUFFLEdBQUcxRCxDQUFDLEdBQUcsS0FBS3hDLEVBQWxCO0FBQ0EsUUFBSW1HLEdBQUcsR0FBRyxLQUFLbkcsRUFBTCxHQUFVa0csRUFBcEI7QUFDQSxRQUFJRSxFQUFFLEdBQUcsQ0FBQyxLQUFLRixFQUFOLElBQVksQ0FBckI7QUFDQXRHLElBQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxLQUFLeUcsRUFBTCxLQUFZSCxFQUFuQjs7QUFDQSxTQUFLLElBQUlyRyxDQUFDLEdBQUd3RyxFQUFFLEdBQUcsQ0FBbEIsRUFBcUJ4RyxDQUFDLEdBQUcsS0FBS0MsQ0FBOUIsRUFBaUMsRUFBRUQsQ0FBbkMsRUFBc0M7QUFDbENELE1BQUFBLENBQUMsQ0FBQ0MsQ0FBQyxHQUFHd0csRUFBSixHQUFTLENBQVYsQ0FBRCxJQUFpQixDQUFDLEtBQUt4RyxDQUFMLElBQVV1RyxFQUFYLEtBQWtCRCxHQUFuQztBQUNBdkcsTUFBQUEsQ0FBQyxDQUFDQyxDQUFDLEdBQUd3RyxFQUFMLENBQUQsR0FBWSxLQUFLeEcsQ0FBTCxLQUFXcUcsRUFBdkI7QUFDSDs7QUFDRCxRQUFJQSxFQUFFLEdBQUcsQ0FBVCxFQUFZO0FBQ1J0RyxNQUFBQSxDQUFDLENBQUMsS0FBS0UsQ0FBTCxHQUFTdUcsRUFBVCxHQUFjLENBQWYsQ0FBRCxJQUFzQixDQUFDLEtBQUtoSCxDQUFMLEdBQVMrRyxFQUFWLEtBQWlCRCxHQUF2QztBQUNIOztBQUNEdkcsSUFBQUEsQ0FBQyxDQUFDRSxDQUFGLEdBQU0sS0FBS0EsQ0FBTCxHQUFTdUcsRUFBZjtBQUNBekcsSUFBQUEsQ0FBQyxDQUFDbUcsS0FBRjtBQUNILEdBcEJELENBdnhCd0MsQ0E0eUJ4QztBQUNBOzs7QUFDQWxILEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQmdCLEtBQXJCLEdBQTZCLFVBQVVyQixDQUFWLEVBQWFjLENBQWIsRUFBZ0I7QUFDekMsUUFBSUMsQ0FBQyxHQUFHLENBQVI7QUFDQSxRQUFJYixDQUFDLEdBQUcsQ0FBUjtBQUNBLFFBQUlXLENBQUMsR0FBR3NELElBQUksQ0FBQ3RCLEdBQUwsQ0FBUzdDLENBQUMsQ0FBQ2dCLENBQVgsRUFBYyxLQUFLQSxDQUFuQixDQUFSOztBQUNBLFdBQU9ELENBQUMsR0FBR0YsQ0FBWCxFQUFjO0FBQ1ZYLE1BQUFBLENBQUMsSUFBSSxLQUFLYSxDQUFMLElBQVVmLENBQUMsQ0FBQ2UsQ0FBRCxDQUFoQjtBQUNBRCxNQUFBQSxDQUFDLENBQUNDLENBQUMsRUFBRixDQUFELEdBQVNiLENBQUMsR0FBRyxLQUFLd0IsRUFBbEI7QUFDQXhCLE1BQUFBLENBQUMsS0FBSyxLQUFLZ0IsRUFBWDtBQUNIOztBQUNELFFBQUlsQixDQUFDLENBQUNnQixDQUFGLEdBQU0sS0FBS0EsQ0FBZixFQUFrQjtBQUNkZCxNQUFBQSxDQUFDLElBQUlGLENBQUMsQ0FBQ08sQ0FBUDs7QUFDQSxhQUFPUSxDQUFDLEdBQUcsS0FBS0MsQ0FBaEIsRUFBbUI7QUFDZmQsUUFBQUEsQ0FBQyxJQUFJLEtBQUthLENBQUwsQ0FBTDtBQUNBRCxRQUFBQSxDQUFDLENBQUNDLENBQUMsRUFBRixDQUFELEdBQVNiLENBQUMsR0FBRyxLQUFLd0IsRUFBbEI7QUFDQXhCLFFBQUFBLENBQUMsS0FBSyxLQUFLZ0IsRUFBWDtBQUNIOztBQUNEaEIsTUFBQUEsQ0FBQyxJQUFJLEtBQUtLLENBQVY7QUFDSCxLQVJELE1BU0s7QUFDREwsTUFBQUEsQ0FBQyxJQUFJLEtBQUtLLENBQVY7O0FBQ0EsYUFBT1EsQ0FBQyxHQUFHZixDQUFDLENBQUNnQixDQUFiLEVBQWdCO0FBQ1pkLFFBQUFBLENBQUMsSUFBSUYsQ0FBQyxDQUFDZSxDQUFELENBQU47QUFDQUQsUUFBQUEsQ0FBQyxDQUFDQyxDQUFDLEVBQUYsQ0FBRCxHQUFTYixDQUFDLEdBQUcsS0FBS3dCLEVBQWxCO0FBQ0F4QixRQUFBQSxDQUFDLEtBQUssS0FBS2dCLEVBQVg7QUFDSDs7QUFDRGhCLE1BQUFBLENBQUMsSUFBSUYsQ0FBQyxDQUFDTyxDQUFQO0FBQ0g7O0FBQ0RPLElBQUFBLENBQUMsQ0FBQ1AsQ0FBRixHQUFPTCxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQUMsQ0FBWCxHQUFlLENBQXJCOztBQUNBLFFBQUlBLENBQUMsR0FBRyxDQUFDLENBQVQsRUFBWTtBQUNSWSxNQUFBQSxDQUFDLENBQUNDLENBQUMsRUFBRixDQUFELEdBQVMsS0FBS3dCLEVBQUwsR0FBVXJDLENBQW5CO0FBQ0gsS0FGRCxNQUdLLElBQUlBLENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDWlksTUFBQUEsQ0FBQyxDQUFDQyxDQUFDLEVBQUYsQ0FBRCxHQUFTYixDQUFUO0FBQ0g7O0FBQ0RZLElBQUFBLENBQUMsQ0FBQ0UsQ0FBRixHQUFNRCxDQUFOO0FBQ0FELElBQUFBLENBQUMsQ0FBQ21HLEtBQUY7QUFDSCxHQXBDRCxDQTl5QndDLENBbTFCeEM7QUFDQTtBQUNBOzs7QUFDQWxILEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQndFLFVBQXJCLEdBQWtDLFVBQVU3RSxDQUFWLEVBQWFjLENBQWIsRUFBZ0I7QUFDOUMsUUFBSWtELENBQUMsR0FBRyxLQUFLMUMsR0FBTCxFQUFSO0FBQ0EsUUFBSWlGLENBQUMsR0FBR3ZHLENBQUMsQ0FBQ3NCLEdBQUYsRUFBUjtBQUNBLFFBQUlQLENBQUMsR0FBR2lELENBQUMsQ0FBQ2hELENBQVY7QUFDQUYsSUFBQUEsQ0FBQyxDQUFDRSxDQUFGLEdBQU1ELENBQUMsR0FBR3dGLENBQUMsQ0FBQ3ZGLENBQVo7O0FBQ0EsV0FBTyxFQUFFRCxDQUFGLElBQU8sQ0FBZCxFQUFpQjtBQUNiRCxNQUFBQSxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPLENBQVA7QUFDSDs7QUFDRCxTQUFLQSxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUd3RixDQUFDLENBQUN2RixDQUFsQixFQUFxQixFQUFFRCxDQUF2QixFQUEwQjtBQUN0QkQsTUFBQUEsQ0FBQyxDQUFDQyxDQUFDLEdBQUdpRCxDQUFDLENBQUNoRCxDQUFQLENBQUQsR0FBYWdELENBQUMsQ0FBQ3dELEVBQUYsQ0FBSyxDQUFMLEVBQVFqQixDQUFDLENBQUN4RixDQUFELENBQVQsRUFBY0QsQ0FBZCxFQUFpQkMsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUJpRCxDQUFDLENBQUNoRCxDQUF6QixDQUFiO0FBQ0g7O0FBQ0RGLElBQUFBLENBQUMsQ0FBQ1AsQ0FBRixHQUFNLENBQU47QUFDQU8sSUFBQUEsQ0FBQyxDQUFDbUcsS0FBRjs7QUFDQSxRQUFJLEtBQUsxRyxDQUFMLElBQVVQLENBQUMsQ0FBQ08sQ0FBaEIsRUFBbUI7QUFDZlIsTUFBQUEsVUFBVSxDQUFDcUIsSUFBWCxDQUFnQkMsS0FBaEIsQ0FBc0JQLENBQXRCLEVBQXlCQSxDQUF6QjtBQUNIO0FBQ0osR0FoQkQsQ0F0MUJ3QyxDQXUyQnhDO0FBQ0E7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJvSCxRQUFyQixHQUFnQyxVQUFVM0csQ0FBVixFQUFhO0FBQ3pDLFFBQUlrRCxDQUFDLEdBQUcsS0FBSzFDLEdBQUwsRUFBUjtBQUNBLFFBQUlQLENBQUMsR0FBR0QsQ0FBQyxDQUFDRSxDQUFGLEdBQU0sSUFBSWdELENBQUMsQ0FBQ2hELENBQXBCOztBQUNBLFdBQU8sRUFBRUQsQ0FBRixJQUFPLENBQWQsRUFBaUI7QUFDYkQsTUFBQUEsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBTyxDQUFQO0FBQ0g7O0FBQ0QsU0FBS0EsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHaUQsQ0FBQyxDQUFDaEQsQ0FBRixHQUFNLENBQXRCLEVBQXlCLEVBQUVELENBQTNCLEVBQThCO0FBQzFCLFVBQUliLENBQUMsR0FBRzhELENBQUMsQ0FBQ3dELEVBQUYsQ0FBS3pHLENBQUwsRUFBUWlELENBQUMsQ0FBQ2pELENBQUQsQ0FBVCxFQUFjRCxDQUFkLEVBQWlCLElBQUlDLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLENBQVI7O0FBQ0EsVUFBSSxDQUFDRCxDQUFDLENBQUNDLENBQUMsR0FBR2lELENBQUMsQ0FBQ2hELENBQVAsQ0FBRCxJQUFjZ0QsQ0FBQyxDQUFDd0QsRUFBRixDQUFLekcsQ0FBQyxHQUFHLENBQVQsRUFBWSxJQUFJaUQsQ0FBQyxDQUFDakQsQ0FBRCxDQUFqQixFQUFzQkQsQ0FBdEIsRUFBeUIsSUFBSUMsQ0FBSixHQUFRLENBQWpDLEVBQW9DYixDQUFwQyxFQUF1QzhELENBQUMsQ0FBQ2hELENBQUYsR0FBTUQsQ0FBTixHQUFVLENBQWpELENBQWYsS0FBdUVpRCxDQUFDLENBQUN6QixFQUE3RSxFQUFpRjtBQUM3RXpCLFFBQUFBLENBQUMsQ0FBQ0MsQ0FBQyxHQUFHaUQsQ0FBQyxDQUFDaEQsQ0FBUCxDQUFELElBQWNnRCxDQUFDLENBQUN6QixFQUFoQjtBQUNBekIsUUFBQUEsQ0FBQyxDQUFDQyxDQUFDLEdBQUdpRCxDQUFDLENBQUNoRCxDQUFOLEdBQVUsQ0FBWCxDQUFELEdBQWlCLENBQWpCO0FBQ0g7QUFDSjs7QUFDRCxRQUFJRixDQUFDLENBQUNFLENBQUYsR0FBTSxDQUFWLEVBQWE7QUFDVEYsTUFBQUEsQ0FBQyxDQUFDQSxDQUFDLENBQUNFLENBQUYsR0FBTSxDQUFQLENBQUQsSUFBY2dELENBQUMsQ0FBQ3dELEVBQUYsQ0FBS3pHLENBQUwsRUFBUWlELENBQUMsQ0FBQ2pELENBQUQsQ0FBVCxFQUFjRCxDQUFkLEVBQWlCLElBQUlDLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLENBQWQ7QUFDSDs7QUFDREQsSUFBQUEsQ0FBQyxDQUFDUCxDQUFGLEdBQU0sQ0FBTjtBQUNBTyxJQUFBQSxDQUFDLENBQUNtRyxLQUFGO0FBQ0gsR0FsQkQsQ0F6MkJ3QyxDQTQzQnhDO0FBQ0E7QUFDQTs7O0FBQ0FsSCxFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJ1QixRQUFyQixHQUFnQyxVQUFVZixDQUFWLEVBQWFvRSxDQUFiLEVBQWdCbkUsQ0FBaEIsRUFBbUI7QUFDL0MsUUFBSTRHLEVBQUUsR0FBRzdHLENBQUMsQ0FBQ1MsR0FBRixFQUFUOztBQUNBLFFBQUlvRyxFQUFFLENBQUMxRyxDQUFILElBQVEsQ0FBWixFQUFlO0FBQ1g7QUFDSDs7QUFDRCxRQUFJMkcsRUFBRSxHQUFHLEtBQUtyRyxHQUFMLEVBQVQ7O0FBQ0EsUUFBSXFHLEVBQUUsQ0FBQzNHLENBQUgsR0FBTzBHLEVBQUUsQ0FBQzFHLENBQWQsRUFBaUI7QUFDYixVQUFJaUUsQ0FBQyxJQUFJLElBQVQsRUFBZTtBQUNYQSxRQUFBQSxDQUFDLENBQUMwQixPQUFGLENBQVUsQ0FBVjtBQUNIOztBQUNELFVBQUk3RixDQUFDLElBQUksSUFBVCxFQUFlO0FBQ1gsYUFBS3VCLE1BQUwsQ0FBWXZCLENBQVo7QUFDSDs7QUFDRDtBQUNIOztBQUNELFFBQUlBLENBQUMsSUFBSSxJQUFULEVBQWU7QUFDWEEsTUFBQUEsQ0FBQyxHQUFHSyxHQUFHLEVBQVA7QUFDSDs7QUFDRCxRQUFJb0YsQ0FBQyxHQUFHcEYsR0FBRyxFQUFYO0FBQ0EsUUFBSXlHLEVBQUUsR0FBRyxLQUFLckgsQ0FBZDtBQUNBLFFBQUlzSCxFQUFFLEdBQUdoSCxDQUFDLENBQUNOLENBQVg7QUFDQSxRQUFJdUgsR0FBRyxHQUFHLEtBQUs1RyxFQUFMLEdBQVVPLEtBQUssQ0FBQ2lHLEVBQUUsQ0FBQ0EsRUFBRSxDQUFDMUcsQ0FBSCxHQUFPLENBQVIsQ0FBSCxDQUF6QixDQXJCK0MsQ0FxQk47O0FBQ3pDLFFBQUk4RyxHQUFHLEdBQUcsQ0FBVixFQUFhO0FBQ1RKLE1BQUFBLEVBQUUsQ0FBQzlELFFBQUgsQ0FBWWtFLEdBQVosRUFBaUJ2QixDQUFqQjtBQUNBb0IsTUFBQUEsRUFBRSxDQUFDL0QsUUFBSCxDQUFZa0UsR0FBWixFQUFpQmhILENBQWpCO0FBQ0gsS0FIRCxNQUlLO0FBQ0Q0RyxNQUFBQSxFQUFFLENBQUNyRixNQUFILENBQVVrRSxDQUFWO0FBQ0FvQixNQUFBQSxFQUFFLENBQUN0RixNQUFILENBQVV2QixDQUFWO0FBQ0g7O0FBQ0QsUUFBSWlILEVBQUUsR0FBR3hCLENBQUMsQ0FBQ3ZGLENBQVg7QUFDQSxRQUFJZ0gsRUFBRSxHQUFHekIsQ0FBQyxDQUFDd0IsRUFBRSxHQUFHLENBQU4sQ0FBVjs7QUFDQSxRQUFJQyxFQUFFLElBQUksQ0FBVixFQUFhO0FBQ1Q7QUFDSDs7QUFDRCxRQUFJQyxFQUFFLEdBQUdELEVBQUUsSUFBSSxLQUFLLEtBQUtFLEVBQWQsQ0FBRixJQUF3QkgsRUFBRSxHQUFHLENBQU4sR0FBV3hCLENBQUMsQ0FBQ3dCLEVBQUUsR0FBRyxDQUFOLENBQUQsSUFBYSxLQUFLSSxFQUE3QixHQUFrQyxDQUF6RCxDQUFUO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLEtBQUtDLEVBQUwsR0FBVUosRUFBbkI7QUFDQSxRQUFJSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEtBQUtKLEVBQVgsSUFBaUJELEVBQTFCO0FBQ0EsUUFBSW5HLENBQUMsR0FBRyxLQUFLLEtBQUtxRyxFQUFsQjtBQUNBLFFBQUlwSCxDQUFDLEdBQUdELENBQUMsQ0FBQ0UsQ0FBVjtBQUNBLFFBQUlrRCxDQUFDLEdBQUduRCxDQUFDLEdBQUdnSCxFQUFaO0FBQ0EsUUFBSS9HLENBQUMsR0FBSWlFLENBQUMsSUFBSSxJQUFOLEdBQWM5RCxHQUFHLEVBQWpCLEdBQXNCOEQsQ0FBOUI7QUFDQXNCLElBQUFBLENBQUMsQ0FBQ1csU0FBRixDQUFZaEQsQ0FBWixFQUFlbEQsQ0FBZjs7QUFDQSxRQUFJRixDQUFDLENBQUNTLFNBQUYsQ0FBWVAsQ0FBWixLQUFrQixDQUF0QixFQUF5QjtBQUNyQkYsTUFBQUEsQ0FBQyxDQUFDQSxDQUFDLENBQUNFLENBQUYsRUFBRCxDQUFELEdBQVcsQ0FBWDtBQUNBRixNQUFBQSxDQUFDLENBQUNPLEtBQUYsQ0FBUUwsQ0FBUixFQUFXRixDQUFYO0FBQ0g7O0FBQ0RmLElBQUFBLFVBQVUsQ0FBQ29HLEdBQVgsQ0FBZWUsU0FBZixDQUF5QmEsRUFBekIsRUFBNkIvRyxDQUE3QjtBQUNBQSxJQUFBQSxDQUFDLENBQUNLLEtBQUYsQ0FBUWtGLENBQVIsRUFBV0EsQ0FBWCxFQWhEK0MsQ0FnRGhDOztBQUNmLFdBQU9BLENBQUMsQ0FBQ3ZGLENBQUYsR0FBTStHLEVBQWIsRUFBaUI7QUFDYnhCLE1BQUFBLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDdkYsQ0FBRixFQUFELENBQUQsR0FBVyxDQUFYO0FBQ0g7O0FBQ0QsV0FBTyxFQUFFa0QsQ0FBRixJQUFPLENBQWQsRUFBaUI7QUFDYjtBQUNBLFVBQUlxRSxFQUFFLEdBQUl6SCxDQUFDLENBQUMsRUFBRUMsQ0FBSCxDQUFELElBQVVpSCxFQUFYLEdBQWlCLEtBQUt0RyxFQUF0QixHQUEyQnlDLElBQUksQ0FBQ0MsS0FBTCxDQUFXdEQsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBT3FILEVBQVAsR0FBWSxDQUFDdEgsQ0FBQyxDQUFDQyxDQUFDLEdBQUcsQ0FBTCxDQUFELEdBQVdlLENBQVosSUFBaUJ3RyxFQUF4QyxDQUFwQzs7QUFDQSxVQUFJLENBQUN4SCxDQUFDLENBQUNDLENBQUQsQ0FBRCxJQUFRd0YsQ0FBQyxDQUFDaUIsRUFBRixDQUFLLENBQUwsRUFBUWUsRUFBUixFQUFZekgsQ0FBWixFQUFlb0QsQ0FBZixFQUFrQixDQUFsQixFQUFxQjZELEVBQXJCLENBQVQsSUFBcUNRLEVBQXpDLEVBQTZDO0FBQUU7QUFDM0NoQyxRQUFBQSxDQUFDLENBQUNXLFNBQUYsQ0FBWWhELENBQVosRUFBZWxELENBQWY7QUFDQUYsUUFBQUEsQ0FBQyxDQUFDTyxLQUFGLENBQVFMLENBQVIsRUFBV0YsQ0FBWDs7QUFDQSxlQUFPQSxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPLEVBQUV3SCxFQUFoQixFQUFvQjtBQUNoQnpILFVBQUFBLENBQUMsQ0FBQ08sS0FBRixDQUFRTCxDQUFSLEVBQVdGLENBQVg7QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsUUFBSW1FLENBQUMsSUFBSSxJQUFULEVBQWU7QUFDWG5FLE1BQUFBLENBQUMsQ0FBQ3FHLFNBQUYsQ0FBWVksRUFBWixFQUFnQjlDLENBQWhCOztBQUNBLFVBQUkyQyxFQUFFLElBQUlDLEVBQVYsRUFBYztBQUNWOUgsUUFBQUEsVUFBVSxDQUFDcUIsSUFBWCxDQUFnQkMsS0FBaEIsQ0FBc0I0RCxDQUF0QixFQUF5QkEsQ0FBekI7QUFDSDtBQUNKOztBQUNEbkUsSUFBQUEsQ0FBQyxDQUFDRSxDQUFGLEdBQU0rRyxFQUFOO0FBQ0FqSCxJQUFBQSxDQUFDLENBQUNtRyxLQUFGOztBQUNBLFFBQUlhLEdBQUcsR0FBRyxDQUFWLEVBQWE7QUFDVGhILE1BQUFBLENBQUMsQ0FBQzZDLFFBQUYsQ0FBV21FLEdBQVgsRUFBZ0JoSCxDQUFoQjtBQUNILEtBekU4QyxDQXlFN0M7OztBQUNGLFFBQUk4RyxFQUFFLEdBQUcsQ0FBVCxFQUFZO0FBQ1I3SCxNQUFBQSxVQUFVLENBQUNxQixJQUFYLENBQWdCQyxLQUFoQixDQUFzQlAsQ0FBdEIsRUFBeUJBLENBQXpCO0FBQ0g7QUFDSixHQTdFRCxDQS8zQndDLENBNjhCeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FmLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQm1JLFFBQXJCLEdBQWdDLFlBQVk7QUFDeEMsUUFBSSxLQUFLeEgsQ0FBTCxHQUFTLENBQWIsRUFBZ0I7QUFDWixhQUFPLENBQVA7QUFDSDs7QUFDRCxRQUFJZ0QsQ0FBQyxHQUFHLEtBQUssQ0FBTCxDQUFSOztBQUNBLFFBQUksQ0FBQ0EsQ0FBQyxHQUFHLENBQUwsS0FBVyxDQUFmLEVBQWtCO0FBQ2QsYUFBTyxDQUFQO0FBQ0g7O0FBQ0QsUUFBSXVDLENBQUMsR0FBR3ZDLENBQUMsR0FBRyxDQUFaLENBUndDLENBUXpCOztBQUNmdUMsSUFBQUEsQ0FBQyxHQUFJQSxDQUFDLElBQUksSUFBSSxDQUFDdkMsQ0FBQyxHQUFHLEdBQUwsSUFBWXVDLENBQXBCLENBQUYsR0FBNEIsR0FBaEMsQ0FUd0MsQ0FTSDs7QUFDckNBLElBQUFBLENBQUMsR0FBSUEsQ0FBQyxJQUFJLElBQUksQ0FBQ3ZDLENBQUMsR0FBRyxJQUFMLElBQWF1QyxDQUFyQixDQUFGLEdBQTZCLElBQWpDLENBVndDLENBVUQ7O0FBQ3ZDQSxJQUFBQSxDQUFDLEdBQUlBLENBQUMsSUFBSSxLQUFNLENBQUN2QyxDQUFDLEdBQUcsTUFBTCxJQUFldUMsQ0FBaEIsR0FBcUIsTUFBMUIsQ0FBSixDQUFGLEdBQTRDLE1BQWhELENBWHdDLENBV2dCO0FBQ3hEO0FBQ0E7O0FBQ0FBLElBQUFBLENBQUMsR0FBSUEsQ0FBQyxJQUFJLElBQUl2QyxDQUFDLEdBQUd1QyxDQUFKLEdBQVEsS0FBS2hFLEVBQXJCLENBQUYsR0FBOEIsS0FBS0EsRUFBdkMsQ0Fkd0MsQ0FjRztBQUMzQzs7QUFDQSxXQUFRZ0UsQ0FBQyxHQUFHLENBQUwsR0FBVSxLQUFLaEUsRUFBTCxHQUFVZ0UsQ0FBcEIsR0FBd0IsQ0FBQ0EsQ0FBaEM7QUFDSCxHQWpCRCxDQXg5QndDLENBMCtCeEM7QUFDQTs7O0FBQ0F4RyxFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUIyQixNQUFyQixHQUE4QixZQUFZO0FBQ3RDLFdBQU8sQ0FBRSxLQUFLaEIsQ0FBTCxHQUFTLENBQVYsR0FBZ0IsS0FBSyxDQUFMLElBQVUsQ0FBMUIsR0FBK0IsS0FBS1QsQ0FBckMsS0FBMkMsQ0FBbEQ7QUFDSCxHQUZELENBNStCd0MsQ0ErK0J4QztBQUNBOzs7QUFDQVIsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCOEIsR0FBckIsR0FBMkIsVUFBVUwsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQ3ZDLFFBQUlELENBQUMsR0FBRyxVQUFKLElBQWtCQSxDQUFDLEdBQUcsQ0FBMUIsRUFBNkI7QUFDekIsYUFBTy9CLFVBQVUsQ0FBQ29HLEdBQWxCO0FBQ0g7O0FBQ0QsUUFBSXJGLENBQUMsR0FBR0ssR0FBRyxFQUFYO0FBQ0EsUUFBSTBFLEVBQUUsR0FBRzFFLEdBQUcsRUFBWjtBQUNBLFFBQUlrRSxDQUFDLEdBQUd0RCxDQUFDLENBQUN3RCxPQUFGLENBQVUsSUFBVixDQUFSO0FBQ0EsUUFBSXhFLENBQUMsR0FBR1UsS0FBSyxDQUFDSyxDQUFELENBQUwsR0FBVyxDQUFuQjtBQUNBdUQsSUFBQUEsQ0FBQyxDQUFDaEQsTUFBRixDQUFTdkIsQ0FBVDs7QUFDQSxXQUFPLEVBQUVDLENBQUYsSUFBTyxDQUFkLEVBQWlCO0FBQ2JnQixNQUFBQSxDQUFDLENBQUMwRCxLQUFGLENBQVEzRSxDQUFSLEVBQVcrRSxFQUFYOztBQUNBLFVBQUksQ0FBQy9ELENBQUMsR0FBSSxLQUFLZixDQUFYLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCZ0IsUUFBQUEsQ0FBQyxDQUFDMkQsS0FBRixDQUFRRyxFQUFSLEVBQVlSLENBQVosRUFBZXZFLENBQWY7QUFDSCxPQUZELE1BR0s7QUFDRCxZQUFJRSxDQUFDLEdBQUdGLENBQVI7QUFDQUEsUUFBQUEsQ0FBQyxHQUFHK0UsRUFBSjtBQUNBQSxRQUFBQSxFQUFFLEdBQUc3RSxDQUFMO0FBQ0g7QUFDSjs7QUFDRCxXQUFPZSxDQUFDLENBQUMrRCxNQUFGLENBQVNoRixDQUFULENBQVA7QUFDSCxHQXJCRCxDQWovQndDLENBdWdDeEM7QUFDQTs7O0FBQ0FmLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQm9JLFNBQXJCLEdBQWlDLFVBQVUzSCxDQUFWLEVBQWE7QUFDMUMsV0FBT3FELElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUN1RSxHQUFMLEdBQVcsS0FBS3hILEVBQWhCLEdBQXFCaUQsSUFBSSxDQUFDd0UsR0FBTCxDQUFTN0gsQ0FBVCxDQUFoQyxDQUFQO0FBQ0gsR0FGRCxDQXpnQ3dDLENBNGdDeEM7QUFDQTs7O0FBQ0FmLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQkssT0FBckIsR0FBK0IsVUFBVVQsQ0FBVixFQUFhO0FBQ3hDLFFBQUlBLENBQUMsSUFBSSxJQUFULEVBQWU7QUFDWEEsTUFBQUEsQ0FBQyxHQUFHLEVBQUo7QUFDSDs7QUFDRCxRQUFJLEtBQUt5QyxNQUFMLE1BQWlCLENBQWpCLElBQXNCekMsQ0FBQyxHQUFHLENBQTFCLElBQStCQSxDQUFDLEdBQUcsRUFBdkMsRUFBMkM7QUFDdkMsYUFBTyxHQUFQO0FBQ0g7O0FBQ0QsUUFBSTJJLEVBQUUsR0FBRyxLQUFLSCxTQUFMLENBQWV4SSxDQUFmLENBQVQ7QUFDQSxRQUFJRCxDQUFDLEdBQUdtRSxJQUFJLENBQUNpQyxHQUFMLENBQVNuRyxDQUFULEVBQVkySSxFQUFaLENBQVI7QUFDQSxRQUFJaEksQ0FBQyxHQUFHdUUsR0FBRyxDQUFDbkYsQ0FBRCxDQUFYO0FBQ0EsUUFBSXVHLENBQUMsR0FBR3BGLEdBQUcsRUFBWDtBQUNBLFFBQUlZLENBQUMsR0FBR1osR0FBRyxFQUFYO0FBQ0EsUUFBSUwsQ0FBQyxHQUFHLEVBQVI7QUFDQSxTQUFLYyxRQUFMLENBQWNoQixDQUFkLEVBQWlCMkYsQ0FBakIsRUFBb0J4RSxDQUFwQjs7QUFDQSxXQUFPd0UsQ0FBQyxDQUFDN0QsTUFBRixLQUFhLENBQXBCLEVBQXVCO0FBQ25CNUIsTUFBQUEsQ0FBQyxHQUFHLENBQUNkLENBQUMsR0FBRytCLENBQUMsQ0FBQ08sUUFBRixFQUFMLEVBQW1CaEMsUUFBbkIsQ0FBNEJMLENBQTVCLEVBQStCNEksTUFBL0IsQ0FBc0MsQ0FBdEMsSUFBMkMvSCxDQUEvQztBQUNBeUYsTUFBQUEsQ0FBQyxDQUFDM0UsUUFBRixDQUFXaEIsQ0FBWCxFQUFjMkYsQ0FBZCxFQUFpQnhFLENBQWpCO0FBQ0g7O0FBQ0QsV0FBT0EsQ0FBQyxDQUFDTyxRQUFGLEdBQWFoQyxRQUFiLENBQXNCTCxDQUF0QixJQUEyQmEsQ0FBbEM7QUFDSCxHQW5CRCxDQTlnQ3dDLENBa2lDeEM7QUFDQTs7O0FBQ0FmLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQnVHLFNBQXJCLEdBQWlDLFVBQVVyRyxDQUFWLEVBQWFOLENBQWIsRUFBZ0I7QUFDN0MsU0FBSzBHLE9BQUwsQ0FBYSxDQUFiOztBQUNBLFFBQUkxRyxDQUFDLElBQUksSUFBVCxFQUFlO0FBQ1hBLE1BQUFBLENBQUMsR0FBRyxFQUFKO0FBQ0g7O0FBQ0QsUUFBSTJJLEVBQUUsR0FBRyxLQUFLSCxTQUFMLENBQWV4SSxDQUFmLENBQVQ7QUFDQSxRQUFJVyxDQUFDLEdBQUd1RCxJQUFJLENBQUNpQyxHQUFMLENBQVNuRyxDQUFULEVBQVkySSxFQUFaLENBQVI7QUFDQSxRQUFJL0IsRUFBRSxHQUFHLEtBQVQ7QUFDQSxRQUFJM0MsQ0FBQyxHQUFHLENBQVI7QUFDQSxRQUFJeUIsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsU0FBSyxJQUFJNUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1IsQ0FBQyxDQUFDVCxNQUF0QixFQUE4QixFQUFFaUIsQ0FBaEMsRUFBbUM7QUFDL0IsVUFBSWlELENBQUMsR0FBRytDLEtBQUssQ0FBQ3hHLENBQUQsRUFBSVEsQ0FBSixDQUFiOztBQUNBLFVBQUlpRCxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1AsWUFBSXpELENBQUMsQ0FBQ3lHLE1BQUYsQ0FBU2pHLENBQVQsS0FBZSxHQUFmLElBQXNCLEtBQUsyQixNQUFMLE1BQWlCLENBQTNDLEVBQThDO0FBQzFDbUUsVUFBQUEsRUFBRSxHQUFHLElBQUw7QUFDSDs7QUFDRDtBQUNIOztBQUNEbEIsTUFBQUEsQ0FBQyxHQUFHMUYsQ0FBQyxHQUFHMEYsQ0FBSixHQUFRM0IsQ0FBWjs7QUFDQSxVQUFJLEVBQUVFLENBQUYsSUFBTzBFLEVBQVgsRUFBZTtBQUNYLGFBQUtFLFNBQUwsQ0FBZWxJLENBQWY7QUFDQSxhQUFLbUksVUFBTCxDQUFnQnBELENBQWhCLEVBQW1CLENBQW5CO0FBQ0F6QixRQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUNBeUIsUUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFDSDtBQUNKOztBQUNELFFBQUl6QixDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1AsV0FBSzRFLFNBQUwsQ0FBZTNFLElBQUksQ0FBQ2lDLEdBQUwsQ0FBU25HLENBQVQsRUFBWWlFLENBQVosQ0FBZjtBQUNBLFdBQUs2RSxVQUFMLENBQWdCcEQsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDs7QUFDRCxRQUFJa0IsRUFBSixFQUFRO0FBQ0o5RyxNQUFBQSxVQUFVLENBQUNxQixJQUFYLENBQWdCQyxLQUFoQixDQUFzQixJQUF0QixFQUE0QixJQUE1QjtBQUNIO0FBQ0osR0FqQ0QsQ0FwaUN3QyxDQXNrQ3hDO0FBQ0E7OztBQUNBdEIsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCRixVQUFyQixHQUFrQyxVQUFVSCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CO0FBQ2pELFFBQUksWUFBWSxPQUFPRCxDQUF2QixFQUEwQjtBQUN0QjtBQUNBLFVBQUlELENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUCxhQUFLMkcsT0FBTCxDQUFhLENBQWI7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLeEcsVUFBTCxDQUFnQkgsQ0FBaEIsRUFBbUJFLENBQW5COztBQUNBLFlBQUksQ0FBQyxLQUFLK0QsT0FBTCxDQUFhakUsQ0FBQyxHQUFHLENBQWpCLENBQUwsRUFBMEI7QUFDdEI7QUFDQSxlQUFLZ0QsU0FBTCxDQUFlakQsVUFBVSxDQUFDb0csR0FBWCxDQUFlMUMsU0FBZixDQUF5QnpELENBQUMsR0FBRyxDQUE3QixDQUFmLEVBQWdEbUQsV0FBaEQsRUFBdUQsSUFBdkQ7QUFDSDs7QUFDRCxZQUFJLEtBQUtuQixNQUFMLEVBQUosRUFBbUI7QUFDZixlQUFLK0csVUFBTCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNILFNBUkEsQ0FRQzs7O0FBQ0YsZUFBTyxDQUFDLEtBQUt2QyxlQUFMLENBQXFCdkcsQ0FBckIsQ0FBUixFQUFpQztBQUM3QixlQUFLOEksVUFBTCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjs7QUFDQSxjQUFJLEtBQUt2SCxTQUFMLEtBQW1CeEIsQ0FBdkIsRUFBMEI7QUFDdEIsaUJBQUtxQixLQUFMLENBQVd0QixVQUFVLENBQUNvRyxHQUFYLENBQWUxQyxTQUFmLENBQXlCekQsQ0FBQyxHQUFHLENBQTdCLENBQVgsRUFBNEMsSUFBNUM7QUFDSDtBQUNKO0FBQ0o7QUFDSixLQXJCRCxNQXNCSztBQUNEO0FBQ0EsVUFBSWdFLENBQUMsR0FBRyxFQUFSO0FBQ0EsVUFBSWhELENBQUMsR0FBR2hCLENBQUMsR0FBRyxDQUFaO0FBQ0FnRSxNQUFBQSxDQUFDLENBQUNsRSxNQUFGLEdBQVcsQ0FBQ0UsQ0FBQyxJQUFJLENBQU4sSUFBVyxDQUF0QjtBQUNBQyxNQUFBQSxDQUFDLENBQUMrSSxTQUFGLENBQVloRixDQUFaOztBQUNBLFVBQUloRCxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1BnRCxRQUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELElBQVMsQ0FBQyxLQUFLaEQsQ0FBTixJQUFXLENBQXBCO0FBQ0gsT0FGRCxNQUdLO0FBQ0RnRCxRQUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sQ0FBUDtBQUNIOztBQUNELFdBQUs1RCxVQUFMLENBQWdCNEQsQ0FBaEIsRUFBbUIsR0FBbkI7QUFDSDtBQUNKLEdBckNELENBeGtDd0MsQ0E4bUN4QztBQUNBOzs7QUFDQWpFLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQjJDLFNBQXJCLEdBQWlDLFVBQVVoRCxDQUFWLEVBQWFpSixFQUFiLEVBQWlCbkksQ0FBakIsRUFBb0I7QUFDakQsUUFBSUMsQ0FBSjtBQUNBLFFBQUltSSxDQUFKO0FBQ0EsUUFBSXJJLENBQUMsR0FBR3NELElBQUksQ0FBQ3RCLEdBQUwsQ0FBUzdDLENBQUMsQ0FBQ2dCLENBQVgsRUFBYyxLQUFLQSxDQUFuQixDQUFSOztBQUNBLFNBQUtELENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0YsQ0FBaEIsRUFBbUIsRUFBRUUsQ0FBckIsRUFBd0I7QUFDcEJELE1BQUFBLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU9rSSxFQUFFLENBQUMsS0FBS2xJLENBQUwsQ0FBRCxFQUFVZixDQUFDLENBQUNlLENBQUQsQ0FBWCxDQUFUO0FBQ0g7O0FBQ0QsUUFBSWYsQ0FBQyxDQUFDZ0IsQ0FBRixHQUFNLEtBQUtBLENBQWYsRUFBa0I7QUFDZGtJLE1BQUFBLENBQUMsR0FBR2xKLENBQUMsQ0FBQ08sQ0FBRixHQUFNLEtBQUttQixFQUFmOztBQUNBLFdBQUtYLENBQUMsR0FBR0YsQ0FBVCxFQUFZRSxDQUFDLEdBQUcsS0FBS0MsQ0FBckIsRUFBd0IsRUFBRUQsQ0FBMUIsRUFBNkI7QUFDekJELFFBQUFBLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU9rSSxFQUFFLENBQUMsS0FBS2xJLENBQUwsQ0FBRCxFQUFVbUksQ0FBVixDQUFUO0FBQ0g7O0FBQ0RwSSxNQUFBQSxDQUFDLENBQUNFLENBQUYsR0FBTSxLQUFLQSxDQUFYO0FBQ0gsS0FORCxNQU9LO0FBQ0RrSSxNQUFBQSxDQUFDLEdBQUcsS0FBSzNJLENBQUwsR0FBUyxLQUFLbUIsRUFBbEI7O0FBQ0EsV0FBS1gsQ0FBQyxHQUFHRixDQUFULEVBQVlFLENBQUMsR0FBR2YsQ0FBQyxDQUFDZ0IsQ0FBbEIsRUFBcUIsRUFBRUQsQ0FBdkIsRUFBMEI7QUFDdEJELFFBQUFBLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU9rSSxFQUFFLENBQUNDLENBQUQsRUFBSWxKLENBQUMsQ0FBQ2UsQ0FBRCxDQUFMLENBQVQ7QUFDSDs7QUFDREQsTUFBQUEsQ0FBQyxDQUFDRSxDQUFGLEdBQU1oQixDQUFDLENBQUNnQixDQUFSO0FBQ0g7O0FBQ0RGLElBQUFBLENBQUMsQ0FBQ1AsQ0FBRixHQUFNMEksRUFBRSxDQUFDLEtBQUsxSSxDQUFOLEVBQVNQLENBQUMsQ0FBQ08sQ0FBWCxDQUFSO0FBQ0FPLElBQUFBLENBQUMsQ0FBQ21HLEtBQUY7QUFDSCxHQXZCRCxDQWhuQ3dDLENBd29DeEM7QUFDQTs7O0FBQ0FsSCxFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJpRSxTQUFyQixHQUFpQyxVQUFVWixDQUFWLEVBQWF1RixFQUFiLEVBQWlCO0FBQzlDLFFBQUluSSxDQUFDLEdBQUdmLFVBQVUsQ0FBQ29HLEdBQVgsQ0FBZTFDLFNBQWYsQ0FBeUJDLENBQXpCLENBQVI7QUFDQSxTQUFLVixTQUFMLENBQWVsQyxDQUFmLEVBQWtCbUksRUFBbEIsRUFBc0JuSSxDQUF0QjtBQUNBLFdBQU9BLENBQVA7QUFDSCxHQUpELENBMW9Dd0MsQ0Erb0N4QztBQUNBOzs7QUFDQWYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCcUUsS0FBckIsR0FBNkIsVUFBVTFFLENBQVYsRUFBYWMsQ0FBYixFQUFnQjtBQUN6QyxRQUFJQyxDQUFDLEdBQUcsQ0FBUjtBQUNBLFFBQUliLENBQUMsR0FBRyxDQUFSO0FBQ0EsUUFBSVcsQ0FBQyxHQUFHc0QsSUFBSSxDQUFDdEIsR0FBTCxDQUFTN0MsQ0FBQyxDQUFDZ0IsQ0FBWCxFQUFjLEtBQUtBLENBQW5CLENBQVI7O0FBQ0EsV0FBT0QsQ0FBQyxHQUFHRixDQUFYLEVBQWM7QUFDVlgsTUFBQUEsQ0FBQyxJQUFJLEtBQUthLENBQUwsSUFBVWYsQ0FBQyxDQUFDZSxDQUFELENBQWhCO0FBQ0FELE1BQUFBLENBQUMsQ0FBQ0MsQ0FBQyxFQUFGLENBQUQsR0FBU2IsQ0FBQyxHQUFHLEtBQUt3QixFQUFsQjtBQUNBeEIsTUFBQUEsQ0FBQyxLQUFLLEtBQUtnQixFQUFYO0FBQ0g7O0FBQ0QsUUFBSWxCLENBQUMsQ0FBQ2dCLENBQUYsR0FBTSxLQUFLQSxDQUFmLEVBQWtCO0FBQ2RkLE1BQUFBLENBQUMsSUFBSUYsQ0FBQyxDQUFDTyxDQUFQOztBQUNBLGFBQU9RLENBQUMsR0FBRyxLQUFLQyxDQUFoQixFQUFtQjtBQUNmZCxRQUFBQSxDQUFDLElBQUksS0FBS2EsQ0FBTCxDQUFMO0FBQ0FELFFBQUFBLENBQUMsQ0FBQ0MsQ0FBQyxFQUFGLENBQUQsR0FBU2IsQ0FBQyxHQUFHLEtBQUt3QixFQUFsQjtBQUNBeEIsUUFBQUEsQ0FBQyxLQUFLLEtBQUtnQixFQUFYO0FBQ0g7O0FBQ0RoQixNQUFBQSxDQUFDLElBQUksS0FBS0ssQ0FBVjtBQUNILEtBUkQsTUFTSztBQUNETCxNQUFBQSxDQUFDLElBQUksS0FBS0ssQ0FBVjs7QUFDQSxhQUFPUSxDQUFDLEdBQUdmLENBQUMsQ0FBQ2dCLENBQWIsRUFBZ0I7QUFDWmQsUUFBQUEsQ0FBQyxJQUFJRixDQUFDLENBQUNlLENBQUQsQ0FBTjtBQUNBRCxRQUFBQSxDQUFDLENBQUNDLENBQUMsRUFBRixDQUFELEdBQVNiLENBQUMsR0FBRyxLQUFLd0IsRUFBbEI7QUFDQXhCLFFBQUFBLENBQUMsS0FBSyxLQUFLZ0IsRUFBWDtBQUNIOztBQUNEaEIsTUFBQUEsQ0FBQyxJQUFJRixDQUFDLENBQUNPLENBQVA7QUFDSDs7QUFDRE8sSUFBQUEsQ0FBQyxDQUFDUCxDQUFGLEdBQU9MLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBQyxDQUFYLEdBQWUsQ0FBckI7O0FBQ0EsUUFBSUEsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQWSxNQUFBQSxDQUFDLENBQUNDLENBQUMsRUFBRixDQUFELEdBQVNiLENBQVQ7QUFDSCxLQUZELE1BR0ssSUFBSUEsQ0FBQyxHQUFHLENBQUMsQ0FBVCxFQUFZO0FBQ2JZLE1BQUFBLENBQUMsQ0FBQ0MsQ0FBQyxFQUFGLENBQUQsR0FBUyxLQUFLd0IsRUFBTCxHQUFVckMsQ0FBbkI7QUFDSDs7QUFDRFksSUFBQUEsQ0FBQyxDQUFDRSxDQUFGLEdBQU1ELENBQU47QUFDQUQsSUFBQUEsQ0FBQyxDQUFDbUcsS0FBRjtBQUNILEdBcENELENBanBDd0MsQ0FzckN4QztBQUNBOzs7QUFDQWxILEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQnlJLFNBQXJCLEdBQWlDLFVBQVVwRixDQUFWLEVBQWE7QUFDMUMsU0FBSyxLQUFLMUMsQ0FBVixJQUFlLEtBQUt3RyxFQUFMLENBQVEsQ0FBUixFQUFXOUQsQ0FBQyxHQUFHLENBQWYsRUFBa0IsSUFBbEIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEIsS0FBSzFDLENBQW5DLENBQWY7QUFDQSxNQUFFLEtBQUtBLENBQVA7QUFDQSxTQUFLaUcsS0FBTDtBQUNILEdBSkQsQ0F4ckN3QyxDQTZyQ3hDO0FBQ0E7OztBQUNBbEgsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCMEksVUFBckIsR0FBa0MsVUFBVXJGLENBQVYsRUFBYWlDLENBQWIsRUFBZ0I7QUFDOUMsUUFBSWpDLENBQUMsSUFBSSxDQUFULEVBQVk7QUFDUjtBQUNIOztBQUNELFdBQU8sS0FBSzFDLENBQUwsSUFBVTJFLENBQWpCLEVBQW9CO0FBQ2hCLFdBQUssS0FBSzNFLENBQUwsRUFBTCxJQUFpQixDQUFqQjtBQUNIOztBQUNELFNBQUsyRSxDQUFMLEtBQVdqQyxDQUFYOztBQUNBLFdBQU8sS0FBS2lDLENBQUwsS0FBVyxLQUFLcEQsRUFBdkIsRUFBMkI7QUFDdkIsV0FBS29ELENBQUwsS0FBVyxLQUFLcEQsRUFBaEI7O0FBQ0EsVUFBSSxFQUFFb0QsQ0FBRixJQUFPLEtBQUszRSxDQUFoQixFQUFtQjtBQUNmLGFBQUssS0FBS0EsQ0FBTCxFQUFMLElBQWlCLENBQWpCO0FBQ0g7O0FBQ0QsUUFBRSxLQUFLMkUsQ0FBTCxDQUFGO0FBQ0g7QUFDSixHQWZELENBL3JDd0MsQ0Erc0N4QztBQUNBO0FBQ0E7OztBQUNBNUYsRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCOEksZUFBckIsR0FBdUMsVUFBVW5KLENBQVYsRUFBYTBELENBQWIsRUFBZ0I1QyxDQUFoQixFQUFtQjtBQUN0RCxRQUFJQyxDQUFDLEdBQUdvRCxJQUFJLENBQUN0QixHQUFMLENBQVMsS0FBSzdCLENBQUwsR0FBU2hCLENBQUMsQ0FBQ2dCLENBQXBCLEVBQXVCMEMsQ0FBdkIsQ0FBUjtBQUNBNUMsSUFBQUEsQ0FBQyxDQUFDUCxDQUFGLEdBQU0sQ0FBTixDQUZzRCxDQUU3Qzs7QUFDVE8sSUFBQUEsQ0FBQyxDQUFDRSxDQUFGLEdBQU1ELENBQU47O0FBQ0EsV0FBT0EsQ0FBQyxHQUFHLENBQVgsRUFBYztBQUNWRCxNQUFBQSxDQUFDLENBQUMsRUFBRUMsQ0FBSCxDQUFELEdBQVMsQ0FBVDtBQUNIOztBQUNELFNBQUssSUFBSW1ELENBQUMsR0FBR3BELENBQUMsQ0FBQ0UsQ0FBRixHQUFNLEtBQUtBLENBQXhCLEVBQTJCRCxDQUFDLEdBQUdtRCxDQUEvQixFQUFrQyxFQUFFbkQsQ0FBcEMsRUFBdUM7QUFDbkNELE1BQUFBLENBQUMsQ0FBQ0MsQ0FBQyxHQUFHLEtBQUtDLENBQVYsQ0FBRCxHQUFnQixLQUFLd0csRUFBTCxDQUFRLENBQVIsRUFBV3hILENBQUMsQ0FBQ2UsQ0FBRCxDQUFaLEVBQWlCRCxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsS0FBS0MsQ0FBL0IsQ0FBaEI7QUFDSDs7QUFDRCxTQUFLLElBQUlrRCxDQUFDLEdBQUdDLElBQUksQ0FBQ3RCLEdBQUwsQ0FBUzdDLENBQUMsQ0FBQ2dCLENBQVgsRUFBYzBDLENBQWQsQ0FBYixFQUErQjNDLENBQUMsR0FBR21ELENBQW5DLEVBQXNDLEVBQUVuRCxDQUF4QyxFQUEyQztBQUN2QyxXQUFLeUcsRUFBTCxDQUFRLENBQVIsRUFBV3hILENBQUMsQ0FBQ2UsQ0FBRCxDQUFaLEVBQWlCRCxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIyQyxDQUFDLEdBQUczQyxDQUE5QjtBQUNIOztBQUNERCxJQUFBQSxDQUFDLENBQUNtRyxLQUFGO0FBQ0gsR0FkRCxDQWx0Q3dDLENBaXVDeEM7QUFDQTtBQUNBOzs7QUFDQWxILEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQitJLGVBQXJCLEdBQXVDLFVBQVVwSixDQUFWLEVBQWEwRCxDQUFiLEVBQWdCNUMsQ0FBaEIsRUFBbUI7QUFDdEQsTUFBRTRDLENBQUY7QUFDQSxRQUFJM0MsQ0FBQyxHQUFHRCxDQUFDLENBQUNFLENBQUYsR0FBTSxLQUFLQSxDQUFMLEdBQVNoQixDQUFDLENBQUNnQixDQUFYLEdBQWUwQyxDQUE3QjtBQUNBNUMsSUFBQUEsQ0FBQyxDQUFDUCxDQUFGLEdBQU0sQ0FBTixDQUhzRCxDQUc3Qzs7QUFDVCxXQUFPLEVBQUVRLENBQUYsSUFBTyxDQUFkLEVBQWlCO0FBQ2JELE1BQUFBLENBQUMsQ0FBQ0MsQ0FBRCxDQUFELEdBQU8sQ0FBUDtBQUNIOztBQUNELFNBQUtBLENBQUMsR0FBR29ELElBQUksQ0FBQ3JCLEdBQUwsQ0FBU1ksQ0FBQyxHQUFHLEtBQUsxQyxDQUFsQixFQUFxQixDQUFyQixDQUFULEVBQWtDRCxDQUFDLEdBQUdmLENBQUMsQ0FBQ2dCLENBQXhDLEVBQTJDLEVBQUVELENBQTdDLEVBQWdEO0FBQzVDRCxNQUFBQSxDQUFDLENBQUMsS0FBS0UsQ0FBTCxHQUFTRCxDQUFULEdBQWEyQyxDQUFkLENBQUQsR0FBb0IsS0FBSzhELEVBQUwsQ0FBUTlELENBQUMsR0FBRzNDLENBQVosRUFBZWYsQ0FBQyxDQUFDZSxDQUFELENBQWhCLEVBQXFCRCxDQUFyQixFQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4QixLQUFLRSxDQUFMLEdBQVNELENBQVQsR0FBYTJDLENBQTNDLENBQXBCO0FBQ0g7O0FBQ0Q1QyxJQUFBQSxDQUFDLENBQUNtRyxLQUFGO0FBQ0FuRyxJQUFBQSxDQUFDLENBQUNxRyxTQUFGLENBQVksQ0FBWixFQUFlckcsQ0FBZjtBQUNILEdBWkQsQ0FwdUN3QyxDQWl2Q3hDO0FBQ0E7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJvRyxNQUFyQixHQUE4QixVQUFVL0MsQ0FBVixFQUFhO0FBQ3ZDLFFBQUlBLENBQUMsSUFBSSxDQUFULEVBQVk7QUFDUixhQUFPLENBQVA7QUFDSDs7QUFDRCxRQUFJOUMsQ0FBQyxHQUFHLEtBQUsyQixFQUFMLEdBQVVtQixDQUFsQjtBQUNBLFFBQUk1QyxDQUFDLEdBQUksS0FBS1AsQ0FBTCxHQUFTLENBQVYsR0FBZW1ELENBQUMsR0FBRyxDQUFuQixHQUF1QixDQUEvQjs7QUFDQSxRQUFJLEtBQUsxQyxDQUFMLEdBQVMsQ0FBYixFQUFnQjtBQUNaLFVBQUlKLENBQUMsSUFBSSxDQUFULEVBQVk7QUFDUkUsUUFBQUEsQ0FBQyxHQUFHLEtBQUssQ0FBTCxJQUFVNEMsQ0FBZDtBQUNILE9BRkQsTUFHSztBQUNELGFBQUssSUFBSTNDLENBQUMsR0FBRyxLQUFLQyxDQUFMLEdBQVMsQ0FBdEIsRUFBeUJELENBQUMsSUFBSSxDQUE5QixFQUFpQyxFQUFFQSxDQUFuQyxFQUFzQztBQUNsQ0QsVUFBQUEsQ0FBQyxHQUFHLENBQUNGLENBQUMsR0FBR0UsQ0FBSixHQUFRLEtBQUtDLENBQUwsQ0FBVCxJQUFvQjJDLENBQXhCO0FBQ0g7QUFDSjtBQUNKOztBQUNELFdBQU81QyxDQUFQO0FBQ0gsR0FqQkQsQ0FudkN3QyxDQXF3Q3hDO0FBQ0E7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJxRyxXQUFyQixHQUFtQyxVQUFVMUYsQ0FBVixFQUFhO0FBQzVDLFFBQUlxSSxFQUFFLEdBQUcsS0FBSzFFLFFBQUwsQ0FBYzVFLFVBQVUsQ0FBQ29HLEdBQXpCLENBQVQ7QUFDQSxRQUFJMUYsQ0FBQyxHQUFHNEksRUFBRSxDQUFDdkYsZUFBSCxFQUFSOztBQUNBLFFBQUlyRCxDQUFDLElBQUksQ0FBVCxFQUFZO0FBQ1IsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsUUFBSUssQ0FBQyxHQUFHdUksRUFBRSxDQUFDeEYsVUFBSCxDQUFjcEQsQ0FBZCxDQUFSO0FBQ0FPLElBQUFBLENBQUMsR0FBSUEsQ0FBQyxHQUFHLENBQUwsSUFBVyxDQUFmOztBQUNBLFFBQUlBLENBQUMsR0FBR3BCLFNBQVMsQ0FBQ0UsTUFBbEIsRUFBMEI7QUFDdEJrQixNQUFBQSxDQUFDLEdBQUdwQixTQUFTLENBQUNFLE1BQWQ7QUFDSDs7QUFDRCxRQUFJRSxDQUFDLEdBQUdtQixHQUFHLEVBQVg7O0FBQ0EsU0FBSyxJQUFJSixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHQyxDQUFwQixFQUF1QixFQUFFRCxDQUF6QixFQUE0QjtBQUN4QjtBQUNBZixNQUFBQSxDQUFDLENBQUMyRyxPQUFGLENBQVUvRyxTQUFTLENBQUN1RSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDbUYsTUFBTCxLQUFnQjFKLFNBQVMsQ0FBQ0UsTUFBckMsQ0FBRCxDQUFuQjtBQUNBLFVBQUl5RyxDQUFDLEdBQUd2RyxDQUFDLENBQUNrRixNQUFGLENBQVNwRSxDQUFULEVBQVksSUFBWixDQUFSOztBQUNBLFVBQUl5RixDQUFDLENBQUNoRixTQUFGLENBQVl4QixVQUFVLENBQUNvRyxHQUF2QixLQUErQixDQUEvQixJQUFvQ0ksQ0FBQyxDQUFDaEYsU0FBRixDQUFZOEgsRUFBWixLQUFtQixDQUEzRCxFQUE4RDtBQUMxRCxZQUFJbkYsQ0FBQyxHQUFHLENBQVI7O0FBQ0EsZUFBT0EsQ0FBQyxLQUFLekQsQ0FBTixJQUFXOEYsQ0FBQyxDQUFDaEYsU0FBRixDQUFZOEgsRUFBWixLQUFtQixDQUFyQyxFQUF3QztBQUNwQzlDLFVBQUFBLENBQUMsR0FBR0EsQ0FBQyxDQUFDMUUsU0FBRixDQUFZLENBQVosRUFBZSxJQUFmLENBQUo7O0FBQ0EsY0FBSTBFLENBQUMsQ0FBQ2hGLFNBQUYsQ0FBWXhCLFVBQVUsQ0FBQ29HLEdBQXZCLEtBQStCLENBQW5DLEVBQXNDO0FBQ2xDLG1CQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFlBQUlJLENBQUMsQ0FBQ2hGLFNBQUYsQ0FBWThILEVBQVosS0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsaUJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDSjs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQTlCRCxDQXZ3Q3dDLENBc3lDeEM7QUFDQTs7O0FBQ0F0SixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJrSixNQUFyQixHQUE4QixZQUFZO0FBQ3RDLFFBQUl6SSxDQUFDLEdBQUdLLEdBQUcsRUFBWDtBQUNBLFNBQUtzRyxRQUFMLENBQWMzRyxDQUFkO0FBQ0EsV0FBT0EsQ0FBUDtBQUNILEdBSkQsQ0F4eUN3QyxDQTZ5Q3hDO0FBQ0E7OztBQUNBZixFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJtSixJQUFyQixHQUE0QixVQUFVeEosQ0FBVixFQUFheUosUUFBYixFQUF1QjtBQUMvQyxRQUFJekYsQ0FBQyxHQUFJLEtBQUt6RCxDQUFMLEdBQVMsQ0FBVixHQUFlLEtBQUtDLE1BQUwsRUFBZixHQUErQixLQUFLNEIsS0FBTCxFQUF2QztBQUNBLFFBQUltRSxDQUFDLEdBQUl2RyxDQUFDLENBQUNPLENBQUYsR0FBTSxDQUFQLEdBQVlQLENBQUMsQ0FBQ1EsTUFBRixFQUFaLEdBQXlCUixDQUFDLENBQUNvQyxLQUFGLEVBQWpDOztBQUNBLFFBQUk0QixDQUFDLENBQUN6QyxTQUFGLENBQVlnRixDQUFaLElBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLFVBQUl2RixDQUFDLEdBQUdnRCxDQUFSO0FBQ0FBLE1BQUFBLENBQUMsR0FBR3VDLENBQUo7QUFDQUEsTUFBQUEsQ0FBQyxHQUFHdkYsQ0FBSjtBQUNIOztBQUNELFFBQUlELENBQUMsR0FBR2lELENBQUMsQ0FBQ0YsZUFBRixFQUFSO0FBQ0EsUUFBSXVCLENBQUMsR0FBR2tCLENBQUMsQ0FBQ3pDLGVBQUYsRUFBUjs7QUFDQSxRQUFJdUIsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQb0UsTUFBQUEsUUFBUSxDQUFDekYsQ0FBRCxDQUFSO0FBQ0E7QUFDSDs7QUFDRCxRQUFJakQsQ0FBQyxHQUFHc0UsQ0FBUixFQUFXO0FBQ1BBLE1BQUFBLENBQUMsR0FBR3RFLENBQUo7QUFDSDs7QUFDRCxRQUFJc0UsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQckIsTUFBQUEsQ0FBQyxDQUFDTCxRQUFGLENBQVcwQixDQUFYLEVBQWNyQixDQUFkO0FBQ0F1QyxNQUFBQSxDQUFDLENBQUM1QyxRQUFGLENBQVcwQixDQUFYLEVBQWNrQixDQUFkO0FBQ0gsS0FwQjhDLENBcUIvQzs7O0FBQ0EsUUFBSW1ELEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQVk7QUFDcEIsVUFBSSxDQUFDM0ksQ0FBQyxHQUFHaUQsQ0FBQyxDQUFDRixlQUFGLEVBQUwsSUFBNEIsQ0FBaEMsRUFBbUM7QUFDL0JFLFFBQUFBLENBQUMsQ0FBQ0wsUUFBRixDQUFXNUMsQ0FBWCxFQUFjaUQsQ0FBZDtBQUNIOztBQUNELFVBQUksQ0FBQ2pELENBQUMsR0FBR3dGLENBQUMsQ0FBQ3pDLGVBQUYsRUFBTCxJQUE0QixDQUFoQyxFQUFtQztBQUMvQnlDLFFBQUFBLENBQUMsQ0FBQzVDLFFBQUYsQ0FBVzVDLENBQVgsRUFBY3dGLENBQWQ7QUFDSDs7QUFDRCxVQUFJdkMsQ0FBQyxDQUFDekMsU0FBRixDQUFZZ0YsQ0FBWixLQUFrQixDQUF0QixFQUF5QjtBQUNyQnZDLFFBQUFBLENBQUMsQ0FBQzNDLEtBQUYsQ0FBUWtGLENBQVIsRUFBV3ZDLENBQVg7QUFDQUEsUUFBQUEsQ0FBQyxDQUFDTCxRQUFGLENBQVcsQ0FBWCxFQUFjSyxDQUFkO0FBQ0gsT0FIRCxNQUlLO0FBQ0R1QyxRQUFBQSxDQUFDLENBQUNsRixLQUFGLENBQVEyQyxDQUFSLEVBQVd1QyxDQUFYO0FBQ0FBLFFBQUFBLENBQUMsQ0FBQzVDLFFBQUYsQ0FBVyxDQUFYLEVBQWM0QyxDQUFkO0FBQ0g7O0FBQ0QsVUFBSSxFQUFFdkMsQ0FBQyxDQUFDdEIsTUFBRixLQUFhLENBQWYsQ0FBSixFQUF1QjtBQUNuQixZQUFJMkMsQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQa0IsVUFBQUEsQ0FBQyxDQUFDM0MsUUFBRixDQUFXeUIsQ0FBWCxFQUFja0IsQ0FBZDtBQUNIOztBQUNEb0QsUUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFBRUYsVUFBQUEsUUFBUSxDQUFDbEQsQ0FBRCxDQUFSO0FBQWMsU0FBN0IsRUFBK0IsQ0FBL0IsQ0FBVixDQUptQixDQUkwQjtBQUNoRCxPQUxELE1BTUs7QUFDRG9ELFFBQUFBLFVBQVUsQ0FBQ0QsS0FBRCxFQUFRLENBQVIsQ0FBVjtBQUNIO0FBQ0osS0F4QkQ7O0FBeUJBQyxJQUFBQSxVQUFVLENBQUNELEtBQUQsRUFBUSxFQUFSLENBQVY7QUFDSCxHQWhERCxDQS95Q3dDLENBZzJDeEM7OztBQUNBM0osRUFBQUEsVUFBVSxDQUFDTSxTQUFYLENBQXFCdUosZUFBckIsR0FBdUMsVUFBVTVKLENBQVYsRUFBYUMsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUJ1SixRQUFuQixFQUE2QjtBQUNoRSxRQUFJLFlBQVksT0FBT3hKLENBQXZCLEVBQTBCO0FBQ3RCLFVBQUlELENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUCxhQUFLMkcsT0FBTCxDQUFhLENBQWI7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLeEcsVUFBTCxDQUFnQkgsQ0FBaEIsRUFBbUJFLENBQW5COztBQUNBLFlBQUksQ0FBQyxLQUFLK0QsT0FBTCxDQUFhakUsQ0FBQyxHQUFHLENBQWpCLENBQUwsRUFBMEI7QUFDdEIsZUFBS2dELFNBQUwsQ0FBZWpELFVBQVUsQ0FBQ29HLEdBQVgsQ0FBZTFDLFNBQWYsQ0FBeUJ6RCxDQUFDLEdBQUcsQ0FBN0IsQ0FBZixFQUFnRG1ELFdBQWhELEVBQXVELElBQXZEO0FBQ0g7O0FBQ0QsWUFBSSxLQUFLbkIsTUFBTCxFQUFKLEVBQW1CO0FBQ2YsZUFBSytHLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDs7QUFDRCxZQUFJYyxLQUFLLEdBQUcsSUFBWjs7QUFDQSxZQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0FBQ3ZCRCxVQUFBQSxLQUFLLENBQUNkLFVBQU4sQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7O0FBQ0EsY0FBSWMsS0FBSyxDQUFDckksU0FBTixLQUFvQnhCLENBQXhCLEVBQTJCO0FBQ3ZCNkosWUFBQUEsS0FBSyxDQUFDeEksS0FBTixDQUFZdEIsVUFBVSxDQUFDb0csR0FBWCxDQUFlMUMsU0FBZixDQUF5QnpELENBQUMsR0FBRyxDQUE3QixDQUFaLEVBQTZDNkosS0FBN0M7QUFDSDs7QUFDRCxjQUFJQSxLQUFLLENBQUNyRCxlQUFOLENBQXNCdkcsQ0FBdEIsQ0FBSixFQUE4QjtBQUMxQjBKLFlBQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQUVGLGNBQUFBLFFBQVE7QUFBSyxhQUE1QixFQUE4QixDQUE5QixDQUFWLENBRDBCLENBQ2tCO0FBQy9DLFdBRkQsTUFHSztBQUNERSxZQUFBQSxVQUFVLENBQUNHLFFBQUQsRUFBVyxDQUFYLENBQVY7QUFDSDtBQUNKLFNBWEQ7O0FBWUFILFFBQUFBLFVBQVUsQ0FBQ0csUUFBRCxFQUFXLENBQVgsQ0FBVjtBQUNIO0FBQ0osS0EzQkQsTUE0Qks7QUFDRCxVQUFJOUYsQ0FBQyxHQUFHLEVBQVI7QUFDQSxVQUFJaEQsQ0FBQyxHQUFHaEIsQ0FBQyxHQUFHLENBQVo7QUFDQWdFLE1BQUFBLENBQUMsQ0FBQ2xFLE1BQUYsR0FBVyxDQUFDRSxDQUFDLElBQUksQ0FBTixJQUFXLENBQXRCO0FBQ0FDLE1BQUFBLENBQUMsQ0FBQytJLFNBQUYsQ0FBWWhGLENBQVo7O0FBQ0EsVUFBSWhELENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDUGdELFFBQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBUyxDQUFDLEtBQUtoRCxDQUFOLElBQVcsQ0FBcEI7QUFDSCxPQUZELE1BR0s7QUFDRGdELFFBQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBTyxDQUFQO0FBQ0g7O0FBQ0QsV0FBSzVELFVBQUwsQ0FBZ0I0RCxDQUFoQixFQUFtQixHQUFuQjtBQUNIO0FBQ0osR0ExQ0Q7O0FBMkNBLFNBQU9qRSxVQUFQO0FBQ0gsQ0E3NEMrQixFQUFoQzs7OztBQSs0Q0E7QUFDQTtBQUNBLElBQUlzRyxPQUFPO0FBQUc7QUFBZSxZQUFZO0FBQ3JDLFdBQVNBLE9BQVQsR0FBbUIsQ0FDbEIsQ0FGb0MsQ0FHckM7OztBQUNBQSxFQUFBQSxPQUFPLENBQUNoRyxTQUFSLENBQWtCa0YsT0FBbEIsR0FBNEIsVUFBVXZCLENBQVYsRUFBYTtBQUNyQyxXQUFPQSxDQUFQO0FBQ0gsR0FGRCxDQUpxQyxDQU9yQzs7O0FBQ0FxQyxFQUFBQSxPQUFPLENBQUNoRyxTQUFSLENBQWtCeUYsTUFBbEIsR0FBMkIsVUFBVTlCLENBQVYsRUFBYTtBQUNwQyxXQUFPQSxDQUFQO0FBQ0gsR0FGRCxDQVJxQyxDQVdyQzs7O0FBQ0FxQyxFQUFBQSxPQUFPLENBQUNoRyxTQUFSLENBQWtCcUYsS0FBbEIsR0FBMEIsVUFBVTFCLENBQVYsRUFBYXVDLENBQWIsRUFBZ0J6RixDQUFoQixFQUFtQjtBQUN6Q2tELElBQUFBLENBQUMsQ0FBQ2EsVUFBRixDQUFhMEIsQ0FBYixFQUFnQnpGLENBQWhCO0FBQ0gsR0FGRCxDQVpxQyxDQWVyQzs7O0FBQ0F1RixFQUFBQSxPQUFPLENBQUNoRyxTQUFSLENBQWtCb0YsS0FBbEIsR0FBMEIsVUFBVXpCLENBQVYsRUFBYWxELENBQWIsRUFBZ0I7QUFDdENrRCxJQUFBQSxDQUFDLENBQUN5RCxRQUFGLENBQVczRyxDQUFYO0FBQ0gsR0FGRDs7QUFHQSxTQUFPdUYsT0FBUDtBQUNILENBcEI0QixFQUE3QixFQXFCQTs7O0FBQ0EsSUFBSXBFLE9BQU87QUFBRztBQUFlLFlBQVk7QUFDckMsV0FBU0EsT0FBVCxDQUFpQnBCLENBQWpCLEVBQW9CO0FBQ2hCLFNBQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNILEdBSG9DLENBSXJDOzs7QUFDQW9CLEVBQUFBLE9BQU8sQ0FBQzVCLFNBQVIsQ0FBa0JrRixPQUFsQixHQUE0QixVQUFVdkIsQ0FBVixFQUFhO0FBQ3JDLFFBQUlBLENBQUMsQ0FBQ3pELENBQUYsR0FBTSxDQUFOLElBQVd5RCxDQUFDLENBQUN6QyxTQUFGLENBQVksS0FBS1YsQ0FBakIsS0FBdUIsQ0FBdEMsRUFBeUM7QUFDckMsYUFBT21ELENBQUMsQ0FBQ3JDLEdBQUYsQ0FBTSxLQUFLZCxDQUFYLENBQVA7QUFDSCxLQUZELE1BR0s7QUFDRCxhQUFPbUQsQ0FBUDtBQUNIO0FBQ0osR0FQRCxDQUxxQyxDQWFyQzs7O0FBQ0EvQixFQUFBQSxPQUFPLENBQUM1QixTQUFSLENBQWtCeUYsTUFBbEIsR0FBMkIsVUFBVTlCLENBQVYsRUFBYTtBQUNwQyxXQUFPQSxDQUFQO0FBQ0gsR0FGRCxDQWRxQyxDQWlCckM7OztBQUNBL0IsRUFBQUEsT0FBTyxDQUFDNUIsU0FBUixDQUFrQjBKLE1BQWxCLEdBQTJCLFVBQVUvRixDQUFWLEVBQWE7QUFDcENBLElBQUFBLENBQUMsQ0FBQ3BDLFFBQUYsQ0FBVyxLQUFLZixDQUFoQixFQUFtQixJQUFuQixFQUF5Qm1ELENBQXpCO0FBQ0gsR0FGRCxDQWxCcUMsQ0FxQnJDOzs7QUFDQS9CLEVBQUFBLE9BQU8sQ0FBQzVCLFNBQVIsQ0FBa0JxRixLQUFsQixHQUEwQixVQUFVMUIsQ0FBVixFQUFhdUMsQ0FBYixFQUFnQnpGLENBQWhCLEVBQW1CO0FBQ3pDa0QsSUFBQUEsQ0FBQyxDQUFDYSxVQUFGLENBQWEwQixDQUFiLEVBQWdCekYsQ0FBaEI7QUFDQSxTQUFLaUosTUFBTCxDQUFZakosQ0FBWjtBQUNILEdBSEQsQ0F0QnFDLENBMEJyQzs7O0FBQ0FtQixFQUFBQSxPQUFPLENBQUM1QixTQUFSLENBQWtCb0YsS0FBbEIsR0FBMEIsVUFBVXpCLENBQVYsRUFBYWxELENBQWIsRUFBZ0I7QUFDdENrRCxJQUFBQSxDQUFDLENBQUN5RCxRQUFGLENBQVczRyxDQUFYO0FBQ0EsU0FBS2lKLE1BQUwsQ0FBWWpKLENBQVo7QUFDSCxHQUhEOztBQUlBLFNBQU9tQixPQUFQO0FBQ0gsQ0FoQzRCLEVBQTdCLEVBaUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsVUFBVTtBQUFHO0FBQWUsWUFBWTtBQUN4QyxXQUFTQSxVQUFULENBQW9CckIsQ0FBcEIsRUFBdUI7QUFDbkIsU0FBS0EsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS21KLEVBQUwsR0FBVW5KLENBQUMsQ0FBQzJILFFBQUYsRUFBVjtBQUNBLFNBQUt5QixHQUFMLEdBQVcsS0FBS0QsRUFBTCxHQUFVLE1BQXJCO0FBQ0EsU0FBS0UsR0FBTCxHQUFXLEtBQUtGLEVBQUwsSUFBVyxFQUF0QjtBQUNBLFNBQUtHLEVBQUwsR0FBVSxDQUFDLEtBQU10SixDQUFDLENBQUNLLEVBQUYsR0FBTyxFQUFkLElBQXFCLENBQS9CO0FBQ0EsU0FBS2tKLEdBQUwsR0FBVyxJQUFJdkosQ0FBQyxDQUFDRyxDQUFqQjtBQUNILEdBUnVDLENBU3hDO0FBQ0E7OztBQUNBa0IsRUFBQUEsVUFBVSxDQUFDN0IsU0FBWCxDQUFxQmtGLE9BQXJCLEdBQStCLFVBQVV2QixDQUFWLEVBQWE7QUFDeEMsUUFBSWxELENBQUMsR0FBR0ssR0FBRyxFQUFYO0FBQ0E2QyxJQUFBQSxDQUFDLENBQUMxQyxHQUFGLEdBQVE0RixTQUFSLENBQWtCLEtBQUtyRyxDQUFMLENBQU9HLENBQXpCLEVBQTRCRixDQUE1QjtBQUNBQSxJQUFBQSxDQUFDLENBQUNjLFFBQUYsQ0FBVyxLQUFLZixDQUFoQixFQUFtQixJQUFuQixFQUF5QkMsQ0FBekI7O0FBQ0EsUUFBSWtELENBQUMsQ0FBQ3pELENBQUYsR0FBTSxDQUFOLElBQVdPLENBQUMsQ0FBQ1MsU0FBRixDQUFZeEIsVUFBVSxDQUFDcUIsSUFBdkIsSUFBK0IsQ0FBOUMsRUFBaUQ7QUFDN0MsV0FBS1AsQ0FBTCxDQUFPUSxLQUFQLENBQWFQLENBQWIsRUFBZ0JBLENBQWhCO0FBQ0g7O0FBQ0QsV0FBT0EsQ0FBUDtBQUNILEdBUkQsQ0FYd0MsQ0FvQnhDO0FBQ0E7OztBQUNBb0IsRUFBQUEsVUFBVSxDQUFDN0IsU0FBWCxDQUFxQnlGLE1BQXJCLEdBQThCLFVBQVU5QixDQUFWLEVBQWE7QUFDdkMsUUFBSWxELENBQUMsR0FBR0ssR0FBRyxFQUFYO0FBQ0E2QyxJQUFBQSxDQUFDLENBQUMzQixNQUFGLENBQVN2QixDQUFUO0FBQ0EsU0FBS2lKLE1BQUwsQ0FBWWpKLENBQVo7QUFDQSxXQUFPQSxDQUFQO0FBQ0gsR0FMRCxDQXRCd0MsQ0E0QnhDO0FBQ0E7OztBQUNBb0IsRUFBQUEsVUFBVSxDQUFDN0IsU0FBWCxDQUFxQjBKLE1BQXJCLEdBQThCLFVBQVUvRixDQUFWLEVBQWE7QUFDdkMsV0FBT0EsQ0FBQyxDQUFDaEQsQ0FBRixJQUFPLEtBQUtvSixHQUFuQixFQUF3QjtBQUNwQjtBQUNBcEcsTUFBQUEsQ0FBQyxDQUFDQSxDQUFDLENBQUNoRCxDQUFGLEVBQUQsQ0FBRCxHQUFXLENBQVg7QUFDSDs7QUFDRCxTQUFLLElBQUlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0YsQ0FBTCxDQUFPRyxDQUEzQixFQUE4QixFQUFFRCxDQUFoQyxFQUFtQztBQUMvQjtBQUNBLFVBQUltRCxDQUFDLEdBQUdGLENBQUMsQ0FBQ2pELENBQUQsQ0FBRCxHQUFPLE1BQWY7QUFDQSxVQUFJc0osRUFBRSxHQUFJbkcsQ0FBQyxHQUFHLEtBQUsrRixHQUFULElBQWdCLENBQUUvRixDQUFDLEdBQUcsS0FBS2dHLEdBQVQsR0FBZSxDQUFDbEcsQ0FBQyxDQUFDakQsQ0FBRCxDQUFELElBQVEsRUFBVCxJQUFlLEtBQUtrSixHQUFwQyxHQUEyQyxLQUFLRSxFQUFqRCxLQUF3RCxFQUF4RSxDQUFELEdBQWdGbkcsQ0FBQyxDQUFDdEMsRUFBM0YsQ0FIK0IsQ0FJL0I7O0FBQ0F3QyxNQUFBQSxDQUFDLEdBQUduRCxDQUFDLEdBQUcsS0FBS0YsQ0FBTCxDQUFPRyxDQUFmO0FBQ0FnRCxNQUFBQSxDQUFDLENBQUNFLENBQUQsQ0FBRCxJQUFRLEtBQUtyRCxDQUFMLENBQU8yRyxFQUFQLENBQVUsQ0FBVixFQUFhNkMsRUFBYixFQUFpQnJHLENBQWpCLEVBQW9CakQsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsS0FBS0YsQ0FBTCxDQUFPRyxDQUFqQyxDQUFSLENBTitCLENBTy9COztBQUNBLGFBQU9nRCxDQUFDLENBQUNFLENBQUQsQ0FBRCxJQUFRRixDQUFDLENBQUN6QixFQUFqQixFQUFxQjtBQUNqQnlCLFFBQUFBLENBQUMsQ0FBQ0UsQ0FBRCxDQUFELElBQVFGLENBQUMsQ0FBQ3pCLEVBQVY7QUFDQXlCLFFBQUFBLENBQUMsQ0FBQyxFQUFFRSxDQUFILENBQUQ7QUFDSDtBQUNKOztBQUNERixJQUFBQSxDQUFDLENBQUNpRCxLQUFGO0FBQ0FqRCxJQUFBQSxDQUFDLENBQUNtRCxTQUFGLENBQVksS0FBS3RHLENBQUwsQ0FBT0csQ0FBbkIsRUFBc0JnRCxDQUF0Qjs7QUFDQSxRQUFJQSxDQUFDLENBQUN6QyxTQUFGLENBQVksS0FBS1YsQ0FBakIsS0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUJtRCxNQUFBQSxDQUFDLENBQUMzQyxLQUFGLENBQVEsS0FBS1IsQ0FBYixFQUFnQm1ELENBQWhCO0FBQ0g7QUFDSixHQXZCRCxDQTlCd0MsQ0FzRHhDO0FBQ0E7OztBQUNBOUIsRUFBQUEsVUFBVSxDQUFDN0IsU0FBWCxDQUFxQnFGLEtBQXJCLEdBQTZCLFVBQVUxQixDQUFWLEVBQWF1QyxDQUFiLEVBQWdCekYsQ0FBaEIsRUFBbUI7QUFDNUNrRCxJQUFBQSxDQUFDLENBQUNhLFVBQUYsQ0FBYTBCLENBQWIsRUFBZ0J6RixDQUFoQjtBQUNBLFNBQUtpSixNQUFMLENBQVlqSixDQUFaO0FBQ0gsR0FIRCxDQXhEd0MsQ0E0RHhDO0FBQ0E7OztBQUNBb0IsRUFBQUEsVUFBVSxDQUFDN0IsU0FBWCxDQUFxQm9GLEtBQXJCLEdBQTZCLFVBQVV6QixDQUFWLEVBQWFsRCxDQUFiLEVBQWdCO0FBQ3pDa0QsSUFBQUEsQ0FBQyxDQUFDeUQsUUFBRixDQUFXM0csQ0FBWDtBQUNBLFNBQUtpSixNQUFMLENBQVlqSixDQUFaO0FBQ0gsR0FIRDs7QUFJQSxTQUFPb0IsVUFBUDtBQUNILENBbkUrQixFQUFoQyxFQW9FQTtBQUNBO0FBQ0E7OztBQUNBLElBQUlrRCxPQUFPO0FBQUc7QUFBZSxZQUFZO0FBQ3JDLFdBQVNBLE9BQVQsQ0FBaUJ2RSxDQUFqQixFQUFvQjtBQUNoQixTQUFLQSxDQUFMLEdBQVNBLENBQVQsQ0FEZ0IsQ0FFaEI7O0FBQ0EsU0FBS2dGLEVBQUwsR0FBVTFFLEdBQUcsRUFBYjtBQUNBLFNBQUttSixFQUFMLEdBQVVuSixHQUFHLEVBQWI7QUFDQXBCLElBQUFBLFVBQVUsQ0FBQ29HLEdBQVgsQ0FBZWUsU0FBZixDQUF5QixJQUFJckcsQ0FBQyxDQUFDRyxDQUEvQixFQUFrQyxLQUFLNkUsRUFBdkM7QUFDQSxTQUFLMEUsRUFBTCxHQUFVLEtBQUsxRSxFQUFMLENBQVFmLE1BQVIsQ0FBZWpFLENBQWYsQ0FBVjtBQUNILEdBUm9DLENBU3JDOzs7QUFDQXVFLEVBQUFBLE9BQU8sQ0FBQy9FLFNBQVIsQ0FBa0JrRixPQUFsQixHQUE0QixVQUFVdkIsQ0FBVixFQUFhO0FBQ3JDLFFBQUlBLENBQUMsQ0FBQ3pELENBQUYsR0FBTSxDQUFOLElBQVd5RCxDQUFDLENBQUNoRCxDQUFGLEdBQU0sSUFBSSxLQUFLSCxDQUFMLENBQU9HLENBQWhDLEVBQW1DO0FBQy9CLGFBQU9nRCxDQUFDLENBQUNyQyxHQUFGLENBQU0sS0FBS2QsQ0FBWCxDQUFQO0FBQ0gsS0FGRCxNQUdLLElBQUltRCxDQUFDLENBQUN6QyxTQUFGLENBQVksS0FBS1YsQ0FBakIsSUFBc0IsQ0FBMUIsRUFBNkI7QUFDOUIsYUFBT21ELENBQVA7QUFDSCxLQUZJLE1BR0E7QUFDRCxVQUFJbEQsQ0FBQyxHQUFHSyxHQUFHLEVBQVg7QUFDQTZDLE1BQUFBLENBQUMsQ0FBQzNCLE1BQUYsQ0FBU3ZCLENBQVQ7QUFDQSxXQUFLaUosTUFBTCxDQUFZakosQ0FBWjtBQUNBLGFBQU9BLENBQVA7QUFDSDtBQUNKLEdBYkQsQ0FWcUMsQ0F3QnJDOzs7QUFDQXNFLEVBQUFBLE9BQU8sQ0FBQy9FLFNBQVIsQ0FBa0J5RixNQUFsQixHQUEyQixVQUFVOUIsQ0FBVixFQUFhO0FBQ3BDLFdBQU9BLENBQVA7QUFDSCxHQUZELENBekJxQyxDQTRCckM7QUFDQTs7O0FBQ0FvQixFQUFBQSxPQUFPLENBQUMvRSxTQUFSLENBQWtCMEosTUFBbEIsR0FBMkIsVUFBVS9GLENBQVYsRUFBYTtBQUNwQ0EsSUFBQUEsQ0FBQyxDQUFDbUQsU0FBRixDQUFZLEtBQUt0RyxDQUFMLENBQU9HLENBQVAsR0FBVyxDQUF2QixFQUEwQixLQUFLNkUsRUFBL0I7O0FBQ0EsUUFBSTdCLENBQUMsQ0FBQ2hELENBQUYsR0FBTSxLQUFLSCxDQUFMLENBQU9HLENBQVAsR0FBVyxDQUFyQixFQUF3QjtBQUNwQmdELE1BQUFBLENBQUMsQ0FBQ2hELENBQUYsR0FBTSxLQUFLSCxDQUFMLENBQU9HLENBQVAsR0FBVyxDQUFqQjtBQUNBZ0QsTUFBQUEsQ0FBQyxDQUFDaUQsS0FBRjtBQUNIOztBQUNELFNBQUtzRCxFQUFMLENBQVFuQixlQUFSLENBQXdCLEtBQUt2RCxFQUE3QixFQUFpQyxLQUFLaEYsQ0FBTCxDQUFPRyxDQUFQLEdBQVcsQ0FBNUMsRUFBK0MsS0FBS3NKLEVBQXBEO0FBQ0EsU0FBS3pKLENBQUwsQ0FBT3NJLGVBQVAsQ0FBdUIsS0FBS21CLEVBQTVCLEVBQWdDLEtBQUt6SixDQUFMLENBQU9HLENBQVAsR0FBVyxDQUEzQyxFQUE4QyxLQUFLNkUsRUFBbkQ7O0FBQ0EsV0FBTzdCLENBQUMsQ0FBQ3pDLFNBQUYsQ0FBWSxLQUFLc0UsRUFBakIsSUFBdUIsQ0FBOUIsRUFBaUM7QUFDN0I3QixNQUFBQSxDQUFDLENBQUMrRSxVQUFGLENBQWEsQ0FBYixFQUFnQixLQUFLbEksQ0FBTCxDQUFPRyxDQUFQLEdBQVcsQ0FBM0I7QUFDSDs7QUFDRGdELElBQUFBLENBQUMsQ0FBQzNDLEtBQUYsQ0FBUSxLQUFLd0UsRUFBYixFQUFpQjdCLENBQWpCOztBQUNBLFdBQU9BLENBQUMsQ0FBQ3pDLFNBQUYsQ0FBWSxLQUFLVixDQUFqQixLQUF1QixDQUE5QixFQUFpQztBQUM3Qm1ELE1BQUFBLENBQUMsQ0FBQzNDLEtBQUYsQ0FBUSxLQUFLUixDQUFiLEVBQWdCbUQsQ0FBaEI7QUFDSDtBQUNKLEdBZkQsQ0E5QnFDLENBOENyQztBQUNBOzs7QUFDQW9CLEVBQUFBLE9BQU8sQ0FBQy9FLFNBQVIsQ0FBa0JxRixLQUFsQixHQUEwQixVQUFVMUIsQ0FBVixFQUFhdUMsQ0FBYixFQUFnQnpGLENBQWhCLEVBQW1CO0FBQ3pDa0QsSUFBQUEsQ0FBQyxDQUFDYSxVQUFGLENBQWEwQixDQUFiLEVBQWdCekYsQ0FBaEI7QUFDQSxTQUFLaUosTUFBTCxDQUFZakosQ0FBWjtBQUNILEdBSEQsQ0FoRHFDLENBb0RyQztBQUNBOzs7QUFDQXNFLEVBQUFBLE9BQU8sQ0FBQy9FLFNBQVIsQ0FBa0JvRixLQUFsQixHQUEwQixVQUFVekIsQ0FBVixFQUFhbEQsQ0FBYixFQUFnQjtBQUN0Q2tELElBQUFBLENBQUMsQ0FBQ3lELFFBQUYsQ0FBVzNHLENBQVg7QUFDQSxTQUFLaUosTUFBTCxDQUFZakosQ0FBWjtBQUNILEdBSEQ7O0FBSUEsU0FBT3NFLE9BQVA7QUFDSCxDQTNENEIsRUFBN0IsRUE0REE7QUFDQTtBQUNBOzs7QUFDTyxTQUFTakUsR0FBVCxHQUFlO0FBQUUsU0FBTyxJQUFJcEIsVUFBSixDQUFlLElBQWYsQ0FBUDtBQUE4Qjs7QUFDL0MsU0FBU3lLLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQTBCM0osQ0FBMUIsRUFBNkI7QUFDaEMsU0FBTyxJQUFJZixVQUFKLENBQWUwSyxHQUFmLEVBQW9CM0osQ0FBcEIsQ0FBUDtBQUNILEVBQ0Q7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQUk0SixTQUFTLEdBQUcsT0FBT0MsU0FBUCxLQUFxQixXQUFyQzs7QUFDQSxJQUFJRCxTQUFTLElBQUkvSyxJQUFiLElBQXNCZ0wsU0FBUyxDQUFDQyxPQUFWLElBQXFCLDZCQUEvQyxFQUErRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTdLLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQm1ILEVBQXJCLEdBQTBCLFNBQVNxRCxHQUFULENBQWE5SixDQUFiLEVBQWdCaUQsQ0FBaEIsRUFBbUIyQixDQUFuQixFQUFzQnpCLENBQXRCLEVBQXlCaEUsQ0FBekIsRUFBNEJ3RCxDQUE1QixFQUErQjtBQUNyRCxRQUFJb0gsRUFBRSxHQUFHOUcsQ0FBQyxHQUFHLE1BQWI7QUFDQSxRQUFJK0csRUFBRSxHQUFHL0csQ0FBQyxJQUFJLEVBQWQ7O0FBQ0EsV0FBTyxFQUFFTixDQUFGLElBQU8sQ0FBZCxFQUFpQjtBQUNiLFVBQUlzSCxDQUFDLEdBQUcsS0FBS2pLLENBQUwsSUFBVSxNQUFsQjtBQUNBLFVBQUlrSyxDQUFDLEdBQUcsS0FBS2xLLENBQUMsRUFBTixLQUFhLEVBQXJCO0FBQ0EsVUFBSUYsQ0FBQyxHQUFHa0ssRUFBRSxHQUFHQyxDQUFMLEdBQVNDLENBQUMsR0FBR0gsRUFBckI7QUFDQUUsTUFBQUEsQ0FBQyxHQUFHRixFQUFFLEdBQUdFLENBQUwsSUFBVSxDQUFDbkssQ0FBQyxHQUFHLE1BQUwsS0FBZ0IsRUFBMUIsSUFBZ0M4RSxDQUFDLENBQUN6QixDQUFELENBQWpDLElBQXdDaEUsQ0FBQyxHQUFHLFVBQTVDLENBQUo7QUFDQUEsTUFBQUEsQ0FBQyxHQUFHLENBQUM4SyxDQUFDLEtBQUssRUFBUCxLQUFjbkssQ0FBQyxLQUFLLEVBQXBCLElBQTBCa0ssRUFBRSxHQUFHRSxDQUEvQixJQUFvQy9LLENBQUMsS0FBSyxFQUExQyxDQUFKO0FBQ0F5RixNQUFBQSxDQUFDLENBQUN6QixDQUFDLEVBQUYsQ0FBRCxHQUFTOEcsQ0FBQyxHQUFHLFVBQWI7QUFDSDs7QUFDRCxXQUFPOUssQ0FBUDtBQUNILEdBWkQ7O0FBYUFULEVBQUFBLEtBQUssR0FBRyxFQUFSO0FBQ0gsQ0FsQkQsTUFtQkssSUFBSWlMLFNBQVMsSUFBSS9LLElBQWIsSUFBc0JnTCxTQUFTLENBQUNDLE9BQVYsSUFBcUIsVUFBL0MsRUFBNEQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E3SyxFQUFBQSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJtSCxFQUFyQixHQUEwQixTQUFTMEQsR0FBVCxDQUFhbkssQ0FBYixFQUFnQmlELENBQWhCLEVBQW1CMkIsQ0FBbkIsRUFBc0J6QixDQUF0QixFQUF5QmhFLENBQXpCLEVBQTRCd0QsQ0FBNUIsRUFBK0I7QUFDckQsV0FBTyxFQUFFQSxDQUFGLElBQU8sQ0FBZCxFQUFpQjtBQUNiLFVBQUl3QyxDQUFDLEdBQUdsQyxDQUFDLEdBQUcsS0FBS2pELENBQUMsRUFBTixDQUFKLEdBQWdCNEUsQ0FBQyxDQUFDekIsQ0FBRCxDQUFqQixHQUF1QmhFLENBQS9CO0FBQ0FBLE1BQUFBLENBQUMsR0FBR2lFLElBQUksQ0FBQ0MsS0FBTCxDQUFXOEIsQ0FBQyxHQUFHLFNBQWYsQ0FBSjtBQUNBUCxNQUFBQSxDQUFDLENBQUN6QixDQUFDLEVBQUYsQ0FBRCxHQUFTZ0MsQ0FBQyxHQUFHLFNBQWI7QUFDSDs7QUFDRCxXQUFPaEcsQ0FBUDtBQUNILEdBUEQ7O0FBUUFULEVBQUFBLEtBQUssR0FBRyxFQUFSO0FBQ0gsQ0FiSSxNQWNBO0FBQUU7QUFDSDtBQUNBO0FBQ0FNLEVBQUFBLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQm1ILEVBQXJCLEdBQTBCLFNBQVMyRCxHQUFULENBQWFwSyxDQUFiLEVBQWdCaUQsQ0FBaEIsRUFBbUIyQixDQUFuQixFQUFzQnpCLENBQXRCLEVBQXlCaEUsQ0FBekIsRUFBNEJ3RCxDQUE1QixFQUErQjtBQUNyRCxRQUFJb0gsRUFBRSxHQUFHOUcsQ0FBQyxHQUFHLE1BQWI7QUFDQSxRQUFJK0csRUFBRSxHQUFHL0csQ0FBQyxJQUFJLEVBQWQ7O0FBQ0EsV0FBTyxFQUFFTixDQUFGLElBQU8sQ0FBZCxFQUFpQjtBQUNiLFVBQUlzSCxDQUFDLEdBQUcsS0FBS2pLLENBQUwsSUFBVSxNQUFsQjtBQUNBLFVBQUlrSyxDQUFDLEdBQUcsS0FBS2xLLENBQUMsRUFBTixLQUFhLEVBQXJCO0FBQ0EsVUFBSUYsQ0FBQyxHQUFHa0ssRUFBRSxHQUFHQyxDQUFMLEdBQVNDLENBQUMsR0FBR0gsRUFBckI7QUFDQUUsTUFBQUEsQ0FBQyxHQUFHRixFQUFFLEdBQUdFLENBQUwsSUFBVSxDQUFDbkssQ0FBQyxHQUFHLE1BQUwsS0FBZ0IsRUFBMUIsSUFBZ0M4RSxDQUFDLENBQUN6QixDQUFELENBQWpDLEdBQXVDaEUsQ0FBM0M7QUFDQUEsTUFBQUEsQ0FBQyxHQUFHLENBQUM4SyxDQUFDLElBQUksRUFBTixLQUFhbkssQ0FBQyxJQUFJLEVBQWxCLElBQXdCa0ssRUFBRSxHQUFHRSxDQUFqQztBQUNBdEYsTUFBQUEsQ0FBQyxDQUFDekIsQ0FBQyxFQUFGLENBQUQsR0FBUzhHLENBQUMsR0FBRyxTQUFiO0FBQ0g7O0FBQ0QsV0FBTzlLLENBQVA7QUFDSCxHQVpEOztBQWFBVCxFQUFBQSxLQUFLLEdBQUcsRUFBUjtBQUNIOztBQUNETSxVQUFVLENBQUNNLFNBQVgsQ0FBcUJhLEVBQXJCLEdBQTBCekIsS0FBMUI7QUFDQU0sVUFBVSxDQUFDTSxTQUFYLENBQXFCcUIsRUFBckIsR0FBMkIsQ0FBQyxLQUFLakMsS0FBTixJQUFlLENBQTFDO0FBQ0FNLFVBQVUsQ0FBQ00sU0FBWCxDQUFxQmtDLEVBQXJCLEdBQTJCLEtBQUs5QyxLQUFoQztBQUNBLElBQUkyTCxLQUFLLEdBQUcsRUFBWjtBQUNBckwsVUFBVSxDQUFDTSxTQUFYLENBQXFCZ0ksRUFBckIsR0FBMEJsRSxJQUFJLENBQUNpQyxHQUFMLENBQVMsQ0FBVCxFQUFZZ0YsS0FBWixDQUExQjtBQUNBckwsVUFBVSxDQUFDTSxTQUFYLENBQXFCNkgsRUFBckIsR0FBMEJrRCxLQUFLLEdBQUczTCxLQUFsQztBQUNBTSxVQUFVLENBQUNNLFNBQVgsQ0FBcUI4SCxFQUFyQixHQUEwQixJQUFJMUksS0FBSixHQUFZMkwsS0FBdEMsRUFDQTs7QUFDQSxJQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLElBQUlDLEVBQUo7QUFDQSxJQUFJQyxFQUFKO0FBQ0FELEVBQUUsR0FBRyxJQUFJRSxVQUFKLENBQWUsQ0FBZixDQUFMOztBQUNBLEtBQUtELEVBQUUsR0FBRyxDQUFWLEVBQWFBLEVBQUUsSUFBSSxDQUFuQixFQUFzQixFQUFFQSxFQUF4QixFQUE0QjtBQUN4QkYsRUFBQUEsS0FBSyxDQUFDQyxFQUFFLEVBQUgsQ0FBTCxHQUFjQyxFQUFkO0FBQ0g7O0FBQ0RELEVBQUUsR0FBRyxJQUFJRSxVQUFKLENBQWUsQ0FBZixDQUFMOztBQUNBLEtBQUtELEVBQUUsR0FBRyxFQUFWLEVBQWNBLEVBQUUsR0FBRyxFQUFuQixFQUF1QixFQUFFQSxFQUF6QixFQUE2QjtBQUN6QkYsRUFBQUEsS0FBSyxDQUFDQyxFQUFFLEVBQUgsQ0FBTCxHQUFjQyxFQUFkO0FBQ0g7O0FBQ0RELEVBQUUsR0FBRyxJQUFJRSxVQUFKLENBQWUsQ0FBZixDQUFMOztBQUNBLEtBQUtELEVBQUUsR0FBRyxFQUFWLEVBQWNBLEVBQUUsR0FBRyxFQUFuQixFQUF1QixFQUFFQSxFQUF6QixFQUE2QjtBQUN6QkYsRUFBQUEsS0FBSyxDQUFDQyxFQUFFLEVBQUgsQ0FBTCxHQUFjQyxFQUFkO0FBQ0g7O0FBQ00sU0FBU3hFLEtBQVQsQ0FBZXhHLENBQWYsRUFBa0JRLENBQWxCLEVBQXFCO0FBQ3hCLE1BQUliLENBQUMsR0FBR21MLEtBQUssQ0FBQzlLLENBQUMsQ0FBQ2lMLFVBQUYsQ0FBYXpLLENBQWIsQ0FBRCxDQUFiO0FBQ0EsU0FBUWIsQ0FBQyxJQUFJLElBQU4sR0FBYyxDQUFDLENBQWYsR0FBbUJBLENBQTFCO0FBQ0gsRUFDRDs7O0FBQ08sU0FBU2lGLEdBQVQsQ0FBYXBFLENBQWIsRUFBZ0I7QUFDbkIsTUFBSUQsQ0FBQyxHQUFHSyxHQUFHLEVBQVg7QUFDQUwsRUFBQUEsQ0FBQyxDQUFDNkYsT0FBRixDQUFVNUYsQ0FBVjtBQUNBLFNBQU9ELENBQVA7QUFDSCxFQUNEOzs7QUFDTyxTQUFTVyxLQUFULENBQWV1QyxDQUFmLEVBQWtCO0FBQ3JCLE1BQUlsRCxDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlFLENBQUo7O0FBQ0EsTUFBSSxDQUFDQSxDQUFDLEdBQUdnRCxDQUFDLEtBQUssRUFBWCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQkEsSUFBQUEsQ0FBQyxHQUFHaEQsQ0FBSjtBQUNBRixJQUFBQSxDQUFDLElBQUksRUFBTDtBQUNIOztBQUNELE1BQUksQ0FBQ0UsQ0FBQyxHQUFHZ0QsQ0FBQyxJQUFJLENBQVYsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJBLElBQUFBLENBQUMsR0FBR2hELENBQUo7QUFDQUYsSUFBQUEsQ0FBQyxJQUFJLENBQUw7QUFDSDs7QUFDRCxNQUFJLENBQUNFLENBQUMsR0FBR2dELENBQUMsSUFBSSxDQUFWLEtBQWdCLENBQXBCLEVBQXVCO0FBQ25CQSxJQUFBQSxDQUFDLEdBQUdoRCxDQUFKO0FBQ0FGLElBQUFBLENBQUMsSUFBSSxDQUFMO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDRSxDQUFDLEdBQUdnRCxDQUFDLElBQUksQ0FBVixLQUFnQixDQUFwQixFQUF1QjtBQUNuQkEsSUFBQUEsQ0FBQyxHQUFHaEQsQ0FBSjtBQUNBRixJQUFBQSxDQUFDLElBQUksQ0FBTDtBQUNIOztBQUNELE1BQUksQ0FBQ0UsQ0FBQyxHQUFHZ0QsQ0FBQyxJQUFJLENBQVYsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJBLElBQUFBLENBQUMsR0FBR2hELENBQUo7QUFDQUYsSUFBQUEsQ0FBQyxJQUFJLENBQUw7QUFDSDs7QUFDRCxTQUFPQSxDQUFQO0FBQ0gsRUFDRDs7O0FBQ0FmLFVBQVUsQ0FBQ3FCLElBQVgsR0FBa0IrRCxHQUFHLENBQUMsQ0FBRCxDQUFyQjtBQUNBcEYsVUFBVSxDQUFDb0csR0FBWCxHQUFpQmhCLEdBQUcsQ0FBQyxDQUFELENBQXBCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMDUgIFRvbSBXdVxuLy8gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNlZSBcIkxJQ0VOU0VcIiBmb3IgZGV0YWlscy5cbi8vIEJhc2ljIEphdmFTY3JpcHQgQk4gbGlicmFyeSAtIHN1YnNldCB1c2VmdWwgZm9yIFJTQSBlbmNyeXB0aW9uLlxuaW1wb3J0IHsgY2JpdCwgaW50MmNoYXIsIGxiaXQsIG9wX2FuZCwgb3BfYW5kbm90LCBvcF9vciwgb3BfeG9yIH0gZnJvbSBcIi4vdXRpbFwiO1xuLy8gQml0cyBwZXIgZGlnaXRcbnZhciBkYml0cztcbi8vIEphdmFTY3JpcHQgZW5naW5lIGFuYWx5c2lzXG52YXIgY2FuYXJ5ID0gMHhkZWFkYmVlZmNhZmU7XG52YXIgal9sbSA9ICgoY2FuYXJ5ICYgMHhmZmZmZmYpID09IDB4ZWZjYWZlKTtcbi8vI3JlZ2lvblxudmFyIGxvd3ByaW1lcyA9IFsyLCAzLCA1LCA3LCAxMSwgMTMsIDE3LCAxOSwgMjMsIDI5LCAzMSwgMzcsIDQxLCA0MywgNDcsIDUzLCA1OSwgNjEsIDY3LCA3MSwgNzMsIDc5LCA4MywgODksIDk3LCAxMDEsIDEwMywgMTA3LCAxMDksIDExMywgMTI3LCAxMzEsIDEzNywgMTM5LCAxNDksIDE1MSwgMTU3LCAxNjMsIDE2NywgMTczLCAxNzksIDE4MSwgMTkxLCAxOTMsIDE5NywgMTk5LCAyMTEsIDIyMywgMjI3LCAyMjksIDIzMywgMjM5LCAyNDEsIDI1MSwgMjU3LCAyNjMsIDI2OSwgMjcxLCAyNzcsIDI4MSwgMjgzLCAyOTMsIDMwNywgMzExLCAzMTMsIDMxNywgMzMxLCAzMzcsIDM0NywgMzQ5LCAzNTMsIDM1OSwgMzY3LCAzNzMsIDM3OSwgMzgzLCAzODksIDM5NywgNDAxLCA0MDksIDQxOSwgNDIxLCA0MzEsIDQzMywgNDM5LCA0NDMsIDQ0OSwgNDU3LCA0NjEsIDQ2MywgNDY3LCA0NzksIDQ4NywgNDkxLCA0OTksIDUwMywgNTA5LCA1MjEsIDUyMywgNTQxLCA1NDcsIDU1NywgNTYzLCA1NjksIDU3MSwgNTc3LCA1ODcsIDU5MywgNTk5LCA2MDEsIDYwNywgNjEzLCA2MTcsIDYxOSwgNjMxLCA2NDEsIDY0MywgNjQ3LCA2NTMsIDY1OSwgNjYxLCA2NzMsIDY3NywgNjgzLCA2OTEsIDcwMSwgNzA5LCA3MTksIDcyNywgNzMzLCA3MzksIDc0MywgNzUxLCA3NTcsIDc2MSwgNzY5LCA3NzMsIDc4NywgNzk3LCA4MDksIDgxMSwgODIxLCA4MjMsIDgyNywgODI5LCA4MzksIDg1MywgODU3LCA4NTksIDg2MywgODc3LCA4ODEsIDg4MywgODg3LCA5MDcsIDkxMSwgOTE5LCA5MjksIDkzNywgOTQxLCA5NDcsIDk1MywgOTY3LCA5NzEsIDk3NywgOTgzLCA5OTEsIDk5N107XG52YXIgbHBsaW0gPSAoMSA8PCAyNikgLyBsb3dwcmltZXNbbG93cHJpbWVzLmxlbmd0aCAtIDFdO1xuLy8jZW5kcmVnaW9uXG4vLyAocHVibGljKSBDb25zdHJ1Y3RvclxudmFyIEJpZ0ludGVnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmlnSW50ZWdlcihhLCBiLCBjKSB7XG4gICAgICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChcIm51bWJlclwiID09IHR5cGVvZiBhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcm9tTnVtYmVyKGEsIGIsIGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYiA9PSBudWxsICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyb21TdHJpbmcoYSwgMjU2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJvbVN0cmluZyhhLCBiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyNyZWdpb24gUFVCTElDXG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBiblRvU3RyaW5nO1xuICAgIC8vIChwdWJsaWMpIHJldHVybiBzdHJpbmcgcmVwcmVzZW50YXRpb24gaW4gZ2l2ZW4gcmFkaXhcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmICh0aGlzLnMgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCIgKyB0aGlzLm5lZ2F0ZSgpLnRvU3RyaW5nKGIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrO1xuICAgICAgICBpZiAoYiA9PSAxNikge1xuICAgICAgICAgICAgayA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiA9PSA4KSB7XG4gICAgICAgICAgICBrID0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiID09IDIpIHtcbiAgICAgICAgICAgIGsgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGIgPT0gMzIpIHtcbiAgICAgICAgICAgIGsgPSA1O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGIgPT0gNCkge1xuICAgICAgICAgICAgayA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b1JhZGl4KGIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrbSA9ICgxIDw8IGspIC0gMTtcbiAgICAgICAgdmFyIGQ7XG4gICAgICAgIHZhciBtID0gZmFsc2U7XG4gICAgICAgIHZhciByID0gXCJcIjtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnQ7XG4gICAgICAgIHZhciBwID0gdGhpcy5EQiAtIChpICogdGhpcy5EQikgJSBrO1xuICAgICAgICBpZiAoaS0tID4gMCkge1xuICAgICAgICAgICAgaWYgKHAgPCB0aGlzLkRCICYmIChkID0gdGhpc1tpXSA+PiBwKSA+IDApIHtcbiAgICAgICAgICAgICAgICBtID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByID0gaW50MmNoYXIoZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHAgPCBrKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSAodGhpc1tpXSAmICgoMSA8PCBwKSAtIDEpKSA8PCAoayAtIHApO1xuICAgICAgICAgICAgICAgICAgICBkIHw9IHRoaXNbLS1pXSA+PiAocCArPSB0aGlzLkRCIC0gayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkID0gKHRoaXNbaV0gPj4gKHAgLT0gaykpICYga207XG4gICAgICAgICAgICAgICAgICAgIGlmIChwIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgKz0gdGhpcy5EQjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC0taTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgICAgIHIgKz0gaW50MmNoYXIoZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtID8gciA6IFwiMFwiO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUubmVnYXRlID0gYm5OZWdhdGU7XG4gICAgLy8gKHB1YmxpYykgLXRoaXNcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLCByKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBibkFicztcbiAgICAvLyAocHVibGljKSB8dGhpc3xcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zIDwgMCkgPyB0aGlzLm5lZ2F0ZSgpIDogdGhpcztcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbyA9IGJuQ29tcGFyZVRvO1xuICAgIC8vIChwdWJsaWMpIHJldHVybiArIGlmIHRoaXMgPiBhLCAtIGlmIHRoaXMgPCBhLCAwIGlmIGVxdWFsXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnMgLSBhLnM7XG4gICAgICAgIGlmIChyICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gdGhpcy50O1xuICAgICAgICByID0gaSAtIGEudDtcbiAgICAgICAgaWYgKHIgIT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnMgPCAwKSA/IC1yIDogcjtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIGlmICgociA9IHRoaXNbaV0gLSBhW2ldKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBibkJpdExlbmd0aDtcbiAgICAvLyAocHVibGljKSByZXR1cm4gdGhlIG51bWJlciBvZiBiaXRzIGluIFwidGhpc1wiXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLkRCICogKHRoaXMudCAtIDEpICsgbmJpdHModGhpc1t0aGlzLnQgLSAxXSBeICh0aGlzLnMgJiB0aGlzLkRNKSk7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBibk1vZDtcbiAgICAvLyAocHVibGljKSB0aGlzIG1vZCBhXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgdGhpcy5hYnMoKS5kaXZSZW1UbyhhLCBudWxsLCByKTtcbiAgICAgICAgaWYgKHRoaXMucyA8IDAgJiYgci5jb21wYXJlVG8oQmlnSW50ZWdlci5aRVJPKSA+IDApIHtcbiAgICAgICAgICAgIGEuc3ViVG8ociwgcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3dJbnQgPSBibk1vZFBvd0ludDtcbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtLCAwIDw9IGUgPCAyXjMyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93SW50ID0gZnVuY3Rpb24gKGUsIG0pIHtcbiAgICAgICAgdmFyIHo7XG4gICAgICAgIGlmIChlIDwgMjU2IHx8IG0uaXNFdmVuKCkpIHtcbiAgICAgICAgICAgIHogPSBuZXcgQ2xhc3NpYyhtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHogPSBuZXcgTW9udGdvbWVyeShtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5leHAoZSwgeik7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbG9uZSA9IGJuQ2xvbmU7XG4gICAgLy8gKHB1YmxpYylcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgdGhpcy5jb3B5VG8ocik7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuaW50VmFsdWUgPSBibkludFZhbHVlO1xuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBpbnRlZ2VyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaW50VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnMgPCAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ID09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXSAtIHRoaXMuRFY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnQgPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy50ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFzc3VtZXMgMTYgPCBEQiA8IDMyXG4gICAgICAgIHJldHVybiAoKHRoaXNbMV0gJiAoKDEgPDwgKDMyIC0gdGhpcy5EQikpIC0gMSkpIDw8IHRoaXMuREIpIHwgdGhpc1swXTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmJ5dGVWYWx1ZSA9IGJuQnl0ZVZhbHVlO1xuICAgIC8vIChwdWJsaWMpIHJldHVybiB2YWx1ZSBhcyBieXRlXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYnl0ZVZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudCA9PSAwKSA/IHRoaXMucyA6ICh0aGlzWzBdIDw8IDI0KSA+PiAyNDtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLnNob3J0VmFsdWUgPSBiblNob3J0VmFsdWU7XG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIHNob3J0IChhc3N1bWVzIERCPj0xNilcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaG9ydFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMudCA9PSAwKSA/IHRoaXMucyA6ICh0aGlzWzBdIDw8IDE2KSA+PiAxNjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLnNpZ251bSA9IGJuU2lnTnVtO1xuICAgIC8vIChwdWJsaWMpIDAgaWYgdGhpcyA9PSAwLCAxIGlmIHRoaXMgPiAwXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2lnbnVtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudCA8PSAwIHx8ICh0aGlzLnQgPT0gMSAmJiB0aGlzWzBdIDw9IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0J5dGVBcnJheSA9IGJuVG9CeXRlQXJyYXk7XG4gICAgLy8gKHB1YmxpYykgY29udmVydCB0byBiaWdlbmRpYW4gYnl0ZSBhcnJheVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvQnl0ZUFycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaSA9IHRoaXMudDtcbiAgICAgICAgdmFyIHIgPSBbXTtcbiAgICAgICAgclswXSA9IHRoaXMucztcbiAgICAgICAgdmFyIHAgPSB0aGlzLkRCIC0gKGkgKiB0aGlzLkRCKSAlIDg7XG4gICAgICAgIHZhciBkO1xuICAgICAgICB2YXIgayA9IDA7XG4gICAgICAgIGlmIChpLS0gPiAwKSB7XG4gICAgICAgICAgICBpZiAocCA8IHRoaXMuREIgJiYgKGQgPSB0aGlzW2ldID4+IHApICE9ICh0aGlzLnMgJiB0aGlzLkRNKSA+PiBwKSB7XG4gICAgICAgICAgICAgICAgcltrKytdID0gZCB8ICh0aGlzLnMgPDwgKHRoaXMuREIgLSBwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHAgPCA4KSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSAodGhpc1tpXSAmICgoMSA8PCBwKSAtIDEpKSA8PCAoOCAtIHApO1xuICAgICAgICAgICAgICAgICAgICBkIHw9IHRoaXNbLS1pXSA+PiAocCArPSB0aGlzLkRCIC0gOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkID0gKHRoaXNbaV0gPj4gKHAgLT0gOCkpICYgMHhmZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCArPSB0aGlzLkRCO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoZCAmIDB4ODApICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZCB8PSAtMjU2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoayA9PSAwICYmICh0aGlzLnMgJiAweDgwKSAhPSAoZCAmIDB4ODApKSB7XG4gICAgICAgICAgICAgICAgICAgICsraztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGsgPiAwIHx8IGQgIT0gdGhpcy5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJbaysrXSA9IGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gYm5FcXVhbHM7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbXBhcmVUbyhhKSA9PSAwKTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbiA9IGJuTWluO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbiA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jb21wYXJlVG8oYSkgPCAwKSA/IHRoaXMgOiBhO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUubWF4ID0gYm5NYXg7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWF4ID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbXBhcmVUbyhhKSA+IDApID8gdGhpcyA6IGE7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBibkFuZDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICB0aGlzLmJpdHdpc2VUbyhhLCBvcF9hbmQsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLm9yID0gYm5PcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHRoaXMuYml0d2lzZVRvKGEsIG9wX29yLCByKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS54b3IgPSBiblhvcjtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS54b3IgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICB0aGlzLmJpdHdpc2VUbyhhLCBvcF94b3IsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZE5vdCA9IGJuQW5kTm90O1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZE5vdCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHRoaXMuYml0d2lzZVRvKGEsIG9wX2FuZG5vdCwgcik7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUubm90ID0gYm5Ob3Q7XG4gICAgLy8gKHB1YmxpYykgfnRoaXNcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpIHtcbiAgICAgICAgICAgIHJbaV0gPSB0aGlzLkRNICYgfnRoaXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgci50ID0gdGhpcy50O1xuICAgICAgICByLnMgPSB+dGhpcy5zO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IGJuU2hpZnRMZWZ0O1xuICAgIC8vIChwdWJsaWMpIHRoaXMgPDwgblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIGlmIChuIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5yU2hpZnRUbygtbiwgcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxTaGlmdFRvKG4sIHIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodCA9IGJuU2hpZnRSaWdodDtcbiAgICAvLyAocHVibGljKSB0aGlzID4+IG5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgaWYgKG4gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmxTaGlmdFRvKC1uLCByKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuclNoaWZ0VG8obiwgcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXRMb3dlc3RTZXRCaXQgPSBibkdldExvd2VzdFNldEJpdDtcbiAgICAvLyAocHVibGljKSByZXR1cm5zIGluZGV4IG9mIGxvd2VzdCAxLWJpdCAob3IgLTEgaWYgbm9uZSlcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXRMb3dlc3RTZXRCaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50OyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW2ldICE9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAqIHRoaXMuREIgKyBsYml0KHRoaXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnMgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ICogdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRDb3VudCA9IGJuQml0Q291bnQ7XG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIG51bWJlciBvZiBzZXQgYml0c1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdENvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IDA7XG4gICAgICAgIHZhciB4ID0gdGhpcy5zICYgdGhpcy5ETTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSkge1xuICAgICAgICAgICAgciArPSBjYml0KHRoaXNbaV0gXiB4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLnRlc3RCaXQgPSBiblRlc3RCaXQ7XG4gICAgLy8gKHB1YmxpYykgdHJ1ZSBpZmYgbnRoIGJpdCBpcyBzZXRcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50ZXN0Qml0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdmFyIGogPSBNYXRoLmZsb29yKG4gLyB0aGlzLkRCKTtcbiAgICAgICAgaWYgKGogPj0gdGhpcy50KSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucyAhPSAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCh0aGlzW2pdICYgKDEgPDwgKG4gJSB0aGlzLkRCKSkpICE9IDApO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuc2V0Qml0ID0gYm5TZXRCaXQ7XG4gICAgLy8gKHB1YmxpYykgdGhpcyB8ICgxPDxuKVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNldEJpdCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZUJpdChuLCBvcF9vcik7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGVhckJpdCA9IGJuQ2xlYXJCaXQ7XG4gICAgLy8gKHB1YmxpYykgdGhpcyAmIH4oMTw8bilcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jbGVhckJpdCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZUJpdChuLCBvcF9hbmRub3QpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZmxpcEJpdCA9IGJuRmxpcEJpdDtcbiAgICAvLyAocHVibGljKSB0aGlzIF4gKDE8PG4pXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZmxpcEJpdCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZUJpdChuLCBvcF94b3IpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkID0gYm5BZGQ7XG4gICAgLy8gKHB1YmxpYykgdGhpcyArIGFcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICB0aGlzLmFkZFRvKGEsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gYm5TdWJ0cmFjdDtcbiAgICAvLyAocHVibGljKSB0aGlzIC0gYVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgdGhpcy5zdWJUbyhhLCByKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseSA9IGJuTXVsdGlwbHk7XG4gICAgLy8gKHB1YmxpYykgdGhpcyAqIGFcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHRoaXMubXVsdGlwbHlUbyhhLCByKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGUgPSBibkRpdmlkZTtcbiAgICAvLyAocHVibGljKSB0aGlzIC8gYVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHRoaXMuZGl2UmVtVG8oYSwgciwgbnVsbCk7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyID0gYm5SZW1haW5kZXI7XG4gICAgLy8gKHB1YmxpYykgdGhpcyAlIGFcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICB0aGlzLmRpdlJlbVRvKGEsIG51bGwsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZUFuZFJlbWFpbmRlciA9IGJuRGl2aWRlQW5kUmVtYWluZGVyO1xuICAgIC8vIChwdWJsaWMpIFt0aGlzL2EsdGhpcyVhXVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZUFuZFJlbWFpbmRlciA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciBxID0gbmJpKCk7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHRoaXMuZGl2UmVtVG8oYSwgcSwgcik7XG4gICAgICAgIHJldHVybiBbcSwgcl07XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBibk1vZFBvdztcbiAgICAvLyAocHVibGljKSB0aGlzXmUgJSBtIChIQUMgMTQuODUpXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93ID0gZnVuY3Rpb24gKGUsIG0pIHtcbiAgICAgICAgdmFyIGkgPSBlLmJpdExlbmd0aCgpO1xuICAgICAgICB2YXIgaztcbiAgICAgICAgdmFyIHIgPSBuYnYoMSk7XG4gICAgICAgIHZhciB6O1xuICAgICAgICBpZiAoaSA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpIDwgMTgpIHtcbiAgICAgICAgICAgIGsgPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGkgPCA0OCkge1xuICAgICAgICAgICAgayA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaSA8IDE0NCkge1xuICAgICAgICAgICAgayA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaSA8IDc2OCkge1xuICAgICAgICAgICAgayA9IDU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBrID0gNjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IDgpIHtcbiAgICAgICAgICAgIHogPSBuZXcgQ2xhc3NpYyhtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtLmlzRXZlbigpKSB7XG4gICAgICAgICAgICB6ID0gbmV3IEJhcnJldHQobSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB6ID0gbmV3IE1vbnRnb21lcnkobSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcHJlY29tcHV0YXRpb25cbiAgICAgICAgdmFyIGcgPSBbXTtcbiAgICAgICAgdmFyIG4gPSAzO1xuICAgICAgICB2YXIgazEgPSBrIC0gMTtcbiAgICAgICAgdmFyIGttID0gKDEgPDwgaykgLSAxO1xuICAgICAgICBnWzFdID0gei5jb252ZXJ0KHRoaXMpO1xuICAgICAgICBpZiAoayA+IDEpIHtcbiAgICAgICAgICAgIHZhciBnMiA9IG5iaSgpO1xuICAgICAgICAgICAgei5zcXJUbyhnWzFdLCBnMik7XG4gICAgICAgICAgICB3aGlsZSAobiA8PSBrbSkge1xuICAgICAgICAgICAgICAgIGdbbl0gPSBuYmkoKTtcbiAgICAgICAgICAgICAgICB6Lm11bFRvKGcyLCBnW24gLSAyXSwgZ1tuXSk7XG4gICAgICAgICAgICAgICAgbiArPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBqID0gZS50IC0gMTtcbiAgICAgICAgdmFyIHc7XG4gICAgICAgIHZhciBpczEgPSB0cnVlO1xuICAgICAgICB2YXIgcjIgPSBuYmkoKTtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIGkgPSBuYml0cyhlW2pdKSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDApIHtcbiAgICAgICAgICAgIGlmIChpID49IGsxKSB7XG4gICAgICAgICAgICAgICAgdyA9IChlW2pdID4+IChpIC0gazEpKSAmIGttO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdyA9IChlW2pdICYgKCgxIDw8IChpICsgMSkpIC0gMSkpIDw8IChrMSAtIGkpO1xuICAgICAgICAgICAgICAgIGlmIChqID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB3IHw9IGVbaiAtIDFdID4+ICh0aGlzLkRCICsgaSAtIGsxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuID0gaztcbiAgICAgICAgICAgIHdoaWxlICgodyAmIDEpID09IDApIHtcbiAgICAgICAgICAgICAgICB3ID4+PSAxO1xuICAgICAgICAgICAgICAgIC0tbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoaSAtPSBuKSA8IDApIHtcbiAgICAgICAgICAgICAgICBpICs9IHRoaXMuREI7XG4gICAgICAgICAgICAgICAgLS1qO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzMSkgeyAvLyByZXQgPT0gMSwgZG9uJ3QgYm90aGVyIHNxdWFyaW5nIG9yIG11bHRpcGx5aW5nIGl0XG4gICAgICAgICAgICAgICAgZ1t3XS5jb3B5VG8ocik7XG4gICAgICAgICAgICAgICAgaXMxID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgei5zcXJUbyhyLCByMik7XG4gICAgICAgICAgICAgICAgICAgIHouc3FyVG8ocjIsIHIpO1xuICAgICAgICAgICAgICAgICAgICBuIC09IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB6LnNxclRvKHIsIHIyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSByO1xuICAgICAgICAgICAgICAgICAgICByID0gcjI7XG4gICAgICAgICAgICAgICAgICAgIHIyID0gdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgei5tdWxUbyhyMiwgZ1t3XSwgcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA+PSAwICYmIChlW2pdICYgKDEgPDwgaSkpID09IDApIHtcbiAgICAgICAgICAgICAgICB6LnNxclRvKHIsIHIyKTtcbiAgICAgICAgICAgICAgICB0ID0gcjtcbiAgICAgICAgICAgICAgICByID0gcjI7XG4gICAgICAgICAgICAgICAgcjIgPSB0O1xuICAgICAgICAgICAgICAgIGlmICgtLWkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSB0aGlzLkRCIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgLS1qO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnZlcnNlID0gYm5Nb2RJbnZlcnNlO1xuICAgIC8vIChwdWJsaWMpIDEvdGhpcyAlIG0gKEhBQyAxNC42MSlcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnZlcnNlID0gZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgdmFyIGFjID0gbS5pc0V2ZW4oKTtcbiAgICAgICAgaWYgKCh0aGlzLmlzRXZlbigpICYmIGFjKSB8fCBtLnNpZ251bSgpID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBCaWdJbnRlZ2VyLlpFUk87XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHUgPSBtLmNsb25lKCk7XG4gICAgICAgIHZhciB2ID0gdGhpcy5jbG9uZSgpO1xuICAgICAgICB2YXIgYSA9IG5idigxKTtcbiAgICAgICAgdmFyIGIgPSBuYnYoMCk7XG4gICAgICAgIHZhciBjID0gbmJ2KDApO1xuICAgICAgICB2YXIgZCA9IG5idigxKTtcbiAgICAgICAgd2hpbGUgKHUuc2lnbnVtKCkgIT0gMCkge1xuICAgICAgICAgICAgd2hpbGUgKHUuaXNFdmVuKCkpIHtcbiAgICAgICAgICAgICAgICB1LnJTaGlmdFRvKDEsIHUpO1xuICAgICAgICAgICAgICAgIGlmIChhYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWEuaXNFdmVuKCkgfHwgIWIuaXNFdmVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYWRkVG8odGhpcywgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiLnN1YlRvKG0sIGIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEuclNoaWZ0VG8oMSwgYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFiLmlzRXZlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGIuc3ViVG8obSwgYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIuclNoaWZ0VG8oMSwgYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAodi5pc0V2ZW4oKSkge1xuICAgICAgICAgICAgICAgIHYuclNoaWZ0VG8oMSwgdik7XG4gICAgICAgICAgICAgICAgaWYgKGFjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYy5pc0V2ZW4oKSB8fCAhZC5pc0V2ZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5hZGRUbyh0aGlzLCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuc3ViVG8obSwgZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYy5yU2hpZnRUbygxLCBjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWQuaXNFdmVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZC5zdWJUbyhtLCBkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZC5yU2hpZnRUbygxLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1LmNvbXBhcmVUbyh2KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdS5zdWJUbyh2LCB1KTtcbiAgICAgICAgICAgICAgICBpZiAoYWMpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5zdWJUbyhjLCBhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYi5zdWJUbyhkLCBiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHYuc3ViVG8odSwgdik7XG4gICAgICAgICAgICAgICAgaWYgKGFjKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuc3ViVG8oYSwgYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGQuc3ViVG8oYiwgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkLmNvbXBhcmVUbyhtKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5zdWJ0cmFjdChtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZC5zaWdudW0oKSA8IDApIHtcbiAgICAgICAgICAgIGQuYWRkVG8obSwgZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZC5zaWdudW0oKSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkLmFkZChtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBiblBvdztcbiAgICAvLyAocHVibGljKSB0aGlzXmVcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHAoZSwgbmV3IE51bGxFeHAoKSk7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nY2QgPSBibkdDRDtcbiAgICAvLyAocHVibGljKSBnY2QodGhpcyxhKSAoSEFDIDE0LjU0KVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdjZCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciB4ID0gKHRoaXMucyA8IDApID8gdGhpcy5uZWdhdGUoKSA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgdmFyIHkgPSAoYS5zIDwgMCkgPyBhLm5lZ2F0ZSgpIDogYS5jbG9uZSgpO1xuICAgICAgICBpZiAoeC5jb21wYXJlVG8oeSkgPCAwKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHg7XG4gICAgICAgICAgICB4ID0geTtcbiAgICAgICAgICAgIHkgPSB0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0geC5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgICAgdmFyIGcgPSB5LmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgICBpZiAoZyA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgZykge1xuICAgICAgICAgICAgZyA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGcgPiAwKSB7XG4gICAgICAgICAgICB4LnJTaGlmdFRvKGcsIHgpO1xuICAgICAgICAgICAgeS5yU2hpZnRUbyhnLCB5KTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoeC5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgICAgIGlmICgoaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkge1xuICAgICAgICAgICAgICAgIHguclNoaWZ0VG8oaSwgeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGkgPSB5LmdldExvd2VzdFNldEJpdCgpKSA+IDApIHtcbiAgICAgICAgICAgICAgICB5LnJTaGlmdFRvKGksIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHguY29tcGFyZVRvKHkpID49IDApIHtcbiAgICAgICAgICAgICAgICB4LnN1YlRvKHksIHgpO1xuICAgICAgICAgICAgICAgIHguclNoaWZ0VG8oMSwgeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5LnN1YlRvKHgsIHkpO1xuICAgICAgICAgICAgICAgIHkuclNoaWZ0VG8oMSwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGcgPiAwKSB7XG4gICAgICAgICAgICB5LmxTaGlmdFRvKGcsIHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gYm5Jc1Byb2JhYmxlUHJpbWU7XG4gICAgLy8gKHB1YmxpYykgdGVzdCBwcmltYWxpdHkgd2l0aCBjZXJ0YWludHkgPj0gMS0uNV50XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciB4ID0gdGhpcy5hYnMoKTtcbiAgICAgICAgaWYgKHgudCA9PSAxICYmIHhbMF0gPD0gbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxvd3ByaW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICh4WzBdID09IGxvd3ByaW1lc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHguaXNFdmVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpID0gMTtcbiAgICAgICAgd2hpbGUgKGkgPCBsb3dwcmltZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgbSA9IGxvd3ByaW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IGxvd3ByaW1lcy5sZW5ndGggJiYgbSA8IGxwbGltKSB7XG4gICAgICAgICAgICAgICAgbSAqPSBsb3dwcmltZXNbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG0gPSB4Lm1vZEludChtKTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgICAgIGlmIChtICUgbG93cHJpbWVzW2krK10gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4Lm1pbGxlclJhYmluKHQpO1xuICAgIH07XG4gICAgLy8jZW5kcmVnaW9uIFBVQkxJQ1xuICAgIC8vI3JlZ2lvbiBQUk9URUNURURcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb3B5VG8gPSBibnBDb3B5VG87XG4gICAgLy8gKHByb3RlY3RlZCkgY29weSB0aGlzIHRvIHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb3B5VG8gPSBmdW5jdGlvbiAocikge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHJbaV0gPSB0aGlzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgICAgci5zID0gdGhpcy5zO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbUludCA9IGJucEZyb21JbnQ7XG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gaW50ZWdlciB2YWx1ZSB4LCAtRFYgPD0geCA8IERWXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbUludCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHRoaXMudCA9IDE7XG4gICAgICAgIHRoaXMucyA9ICh4IDwgMCkgPyAtMSA6IDA7XG4gICAgICAgIGlmICh4ID4gMCkge1xuICAgICAgICAgICAgdGhpc1swXSA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoeCA8IC0xKSB7XG4gICAgICAgICAgICB0aGlzWzBdID0geCArIHRoaXMuRFY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnQgPSAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tU3RyaW5nID0gYm5wRnJvbVN0cmluZztcbiAgICAvLyAocHJvdGVjdGVkKSBzZXQgZnJvbSBzdHJpbmcgYW5kIHJhZGl4XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzLCBiKSB7XG4gICAgICAgIHZhciBrO1xuICAgICAgICBpZiAoYiA9PSAxNikge1xuICAgICAgICAgICAgayA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiA9PSA4KSB7XG4gICAgICAgICAgICBrID0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiID09IDI1Nikge1xuICAgICAgICAgICAgayA9IDg7XG4gICAgICAgICAgICAvKiBieXRlIGFycmF5ICovXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiA9PSAyKSB7XG4gICAgICAgICAgICBrID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiID09IDMyKSB7XG4gICAgICAgICAgICBrID0gNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiID09IDQpIHtcbiAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcm9tUmFkaXgocywgYik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ID0gMDtcbiAgICAgICAgdGhpcy5zID0gMDtcbiAgICAgICAgdmFyIGkgPSBzLmxlbmd0aDtcbiAgICAgICAgdmFyIG1pID0gZmFsc2U7XG4gICAgICAgIHZhciBzaCA9IDA7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdmFyIHggPSAoayA9PSA4KSA/ICgrc1tpXSkgJiAweGZmIDogaW50QXQocywgaSk7XG4gICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocy5jaGFyQXQoaSkgPT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2ggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXNbdGhpcy50KytdID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNoICsgayA+IHRoaXMuREIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW3RoaXMudCAtIDFdIHw9ICh4ICYgKCgxIDw8ICh0aGlzLkRCIC0gc2gpKSAtIDEpKSA8PCBzaDtcbiAgICAgICAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9ICh4ID4+ICh0aGlzLkRCIC0gc2gpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbdGhpcy50IC0gMV0gfD0geCA8PCBzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoICs9IGs7XG4gICAgICAgICAgICBpZiAoc2ggPj0gdGhpcy5EQikge1xuICAgICAgICAgICAgICAgIHNoIC09IHRoaXMuREI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGsgPT0gOCAmJiAoKCtzWzBdKSAmIDB4ODApICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMucyA9IC0xO1xuICAgICAgICAgICAgaWYgKHNoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXNbdGhpcy50IC0gMV0gfD0gKCgxIDw8ICh0aGlzLkRCIC0gc2gpKSAtIDEpIDw8IHNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xhbXAoKTtcbiAgICAgICAgaWYgKG1pKSB7XG4gICAgICAgICAgICBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsYW1wID0gYm5wQ2xhbXA7XG4gICAgLy8gKHByb3RlY3RlZCkgY2xhbXAgb2ZmIGV4Y2VzcyBoaWdoIHdvcmRzXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xhbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5zICYgdGhpcy5ETTtcbiAgICAgICAgd2hpbGUgKHRoaXMudCA+IDAgJiYgdGhpc1t0aGlzLnQgLSAxXSA9PSBjKSB7XG4gICAgICAgICAgICAtLXRoaXMudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZGxTaGlmdFRvID0gYm5wRExTaGlmdFRvO1xuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIDw8IG4qREJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kbFNoaWZ0VG8gPSBmdW5jdGlvbiAobiwgcikge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gdGhpcy50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHJbaSArIG5dID0gdGhpc1tpXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHJbaV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHIudCA9IHRoaXMudCArIG47XG4gICAgICAgIHIucyA9IHRoaXMucztcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmRyU2hpZnRUbyA9IGJucERSU2hpZnRUbztcbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuKkRCXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZHJTaGlmdFRvID0gZnVuY3Rpb24gKG4sIHIpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IG47IGkgPCB0aGlzLnQ7ICsraSkge1xuICAgICAgICAgICAgcltpIC0gbl0gPSB0aGlzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHIudCA9IE1hdGgubWF4KHRoaXMudCAtIG4sIDApO1xuICAgICAgICByLnMgPSB0aGlzLnM7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sU2hpZnRUbyA9IGJucExTaGlmdFRvO1xuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIDw8IG5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sU2hpZnRUbyA9IGZ1bmN0aW9uIChuLCByKSB7XG4gICAgICAgIHZhciBicyA9IG4gJSB0aGlzLkRCO1xuICAgICAgICB2YXIgY2JzID0gdGhpcy5EQiAtIGJzO1xuICAgICAgICB2YXIgYm0gPSAoMSA8PCBjYnMpIC0gMTtcbiAgICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuIC8gdGhpcy5EQik7XG4gICAgICAgIHZhciBjID0gKHRoaXMucyA8PCBicykgJiB0aGlzLkRNO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHJbaSArIGRzICsgMV0gPSAodGhpc1tpXSA+PiBjYnMpIHwgYztcbiAgICAgICAgICAgIGMgPSAodGhpc1tpXSAmIGJtKSA8PCBicztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gZHMgLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgcltpXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcltkc10gPSBjO1xuICAgICAgICByLnQgPSB0aGlzLnQgKyBkcyArIDE7XG4gICAgICAgIHIucyA9IHRoaXMucztcbiAgICAgICAgci5jbGFtcCgpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuclNoaWZ0VG8gPSBibnBSU2hpZnRUbztcbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuclNoaWZ0VG8gPSBmdW5jdGlvbiAobiwgcikge1xuICAgICAgICByLnMgPSB0aGlzLnM7XG4gICAgICAgIHZhciBkcyA9IE1hdGguZmxvb3IobiAvIHRoaXMuREIpO1xuICAgICAgICBpZiAoZHMgPj0gdGhpcy50KSB7XG4gICAgICAgICAgICByLnQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBicyA9IG4gJSB0aGlzLkRCO1xuICAgICAgICB2YXIgY2JzID0gdGhpcy5EQiAtIGJzO1xuICAgICAgICB2YXIgYm0gPSAoMSA8PCBicykgLSAxO1xuICAgICAgICByWzBdID0gdGhpc1tkc10gPj4gYnM7XG4gICAgICAgIGZvciAodmFyIGkgPSBkcyArIDE7IGkgPCB0aGlzLnQ7ICsraSkge1xuICAgICAgICAgICAgcltpIC0gZHMgLSAxXSB8PSAodGhpc1tpXSAmIGJtKSA8PCBjYnM7XG4gICAgICAgICAgICByW2kgLSBkc10gPSB0aGlzW2ldID4+IGJzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChicyA+IDApIHtcbiAgICAgICAgICAgIHJbdGhpcy50IC0gZHMgLSAxXSB8PSAodGhpcy5zICYgYm0pIDw8IGNicztcbiAgICAgICAgfVxuICAgICAgICByLnQgPSB0aGlzLnQgLSBkcztcbiAgICAgICAgci5jbGFtcCgpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuc3ViVG8gPSBibnBTdWJUbztcbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyAtIGFcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJUbyA9IGZ1bmN0aW9uIChhLCByKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGMgPSAwO1xuICAgICAgICB2YXIgbSA9IE1hdGgubWluKGEudCwgdGhpcy50KTtcbiAgICAgICAgd2hpbGUgKGkgPCBtKSB7XG4gICAgICAgICAgICBjICs9IHRoaXNbaV0gLSBhW2ldO1xuICAgICAgICAgICAgcltpKytdID0gYyAmIHRoaXMuRE07XG4gICAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgICAgIGMgLT0gYS5zO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCB0aGlzLnQpIHtcbiAgICAgICAgICAgICAgICBjICs9IHRoaXNbaV07XG4gICAgICAgICAgICAgICAgcltpKytdID0gYyAmIHRoaXMuRE07XG4gICAgICAgICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IGEudCkge1xuICAgICAgICAgICAgICAgIGMgLT0gYVtpXTtcbiAgICAgICAgICAgICAgICByW2krK10gPSBjICYgdGhpcy5ETTtcbiAgICAgICAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYyAtPSBhLnM7XG4gICAgICAgIH1cbiAgICAgICAgci5zID0gKGMgPCAwKSA/IC0xIDogMDtcbiAgICAgICAgaWYgKGMgPCAtMSkge1xuICAgICAgICAgICAgcltpKytdID0gdGhpcy5EViArIGM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA+IDApIHtcbiAgICAgICAgICAgIHJbaSsrXSA9IGM7XG4gICAgICAgIH1cbiAgICAgICAgci50ID0gaTtcbiAgICAgICAgci5jbGFtcCgpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlUbyA9IGJucE11bHRpcGx5VG87XG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgKiBhLCByICE9IHRoaXMsYSAoSEFDIDE0LjEyKVxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseVRvID0gZnVuY3Rpb24gKGEsIHIpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLmFicygpO1xuICAgICAgICB2YXIgeSA9IGEuYWJzKCk7XG4gICAgICAgIHZhciBpID0geC50O1xuICAgICAgICByLnQgPSBpICsgeS50O1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIHJbaV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB5LnQ7ICsraSkge1xuICAgICAgICAgICAgcltpICsgeC50XSA9IHguYW0oMCwgeVtpXSwgciwgaSwgMCwgeC50KTtcbiAgICAgICAgfVxuICAgICAgICByLnMgPSAwO1xuICAgICAgICByLmNsYW1wKCk7XG4gICAgICAgIGlmICh0aGlzLnMgIT0gYS5zKSB7XG4gICAgICAgICAgICBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ociwgcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZVRvID0gYm5wU3F1YXJlVG87XG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXNeMiwgciAhPSB0aGlzIChIQUMgMTQuMTYpXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlVG8gPSBmdW5jdGlvbiAocikge1xuICAgICAgICB2YXIgeCA9IHRoaXMuYWJzKCk7XG4gICAgICAgIHZhciBpID0gci50ID0gMiAqIHgudDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICByW2ldID0gMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeC50IC0gMTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHguYW0oaSwgeFtpXSwgciwgMiAqIGksIDAsIDEpO1xuICAgICAgICAgICAgaWYgKChyW2kgKyB4LnRdICs9IHguYW0oaSArIDEsIDIgKiB4W2ldLCByLCAyICogaSArIDEsIGMsIHgudCAtIGkgLSAxKSkgPj0geC5EVikge1xuICAgICAgICAgICAgICAgIHJbaSArIHgudF0gLT0geC5EVjtcbiAgICAgICAgICAgICAgICByW2kgKyB4LnQgKyAxXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIudCA+IDApIHtcbiAgICAgICAgICAgIHJbci50IC0gMV0gKz0geC5hbShpLCB4W2ldLCByLCAyICogaSwgMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgci5zID0gMDtcbiAgICAgICAgci5jbGFtcCgpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2UmVtVG8gPSBibnBEaXZSZW1UbztcbiAgICAvLyAocHJvdGVjdGVkKSBkaXZpZGUgdGhpcyBieSBtLCBxdW90aWVudCBhbmQgcmVtYWluZGVyIHRvIHEsIHIgKEhBQyAxNC4yMClcbiAgICAvLyByICE9IHEsIHRoaXMgIT0gbS4gIHEgb3IgciBtYXkgYmUgbnVsbC5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZSZW1UbyA9IGZ1bmN0aW9uIChtLCBxLCByKSB7XG4gICAgICAgIHZhciBwbSA9IG0uYWJzKCk7XG4gICAgICAgIGlmIChwbS50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHQgPSB0aGlzLmFicygpO1xuICAgICAgICBpZiAocHQudCA8IHBtLnQpIHtcbiAgICAgICAgICAgIGlmIChxICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBxLmZyb21JbnQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5VG8ocik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIgPT0gbnVsbCkge1xuICAgICAgICAgICAgciA9IG5iaSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB5ID0gbmJpKCk7XG4gICAgICAgIHZhciB0cyA9IHRoaXMucztcbiAgICAgICAgdmFyIG1zID0gbS5zO1xuICAgICAgICB2YXIgbnNoID0gdGhpcy5EQiAtIG5iaXRzKHBtW3BtLnQgLSAxXSk7IC8vIG5vcm1hbGl6ZSBtb2R1bHVzXG4gICAgICAgIGlmIChuc2ggPiAwKSB7XG4gICAgICAgICAgICBwbS5sU2hpZnRUbyhuc2gsIHkpO1xuICAgICAgICAgICAgcHQubFNoaWZ0VG8obnNoLCByKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBtLmNvcHlUbyh5KTtcbiAgICAgICAgICAgIHB0LmNvcHlUbyhyKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeXMgPSB5LnQ7XG4gICAgICAgIHZhciB5MCA9IHlbeXMgLSAxXTtcbiAgICAgICAgaWYgKHkwID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeXQgPSB5MCAqICgxIDw8IHRoaXMuRjEpICsgKCh5cyA+IDEpID8geVt5cyAtIDJdID4+IHRoaXMuRjIgOiAwKTtcbiAgICAgICAgdmFyIGQxID0gdGhpcy5GViAvIHl0O1xuICAgICAgICB2YXIgZDIgPSAoMSA8PCB0aGlzLkYxKSAvIHl0O1xuICAgICAgICB2YXIgZSA9IDEgPDwgdGhpcy5GMjtcbiAgICAgICAgdmFyIGkgPSByLnQ7XG4gICAgICAgIHZhciBqID0gaSAtIHlzO1xuICAgICAgICB2YXIgdCA9IChxID09IG51bGwpID8gbmJpKCkgOiBxO1xuICAgICAgICB5LmRsU2hpZnRUbyhqLCB0KTtcbiAgICAgICAgaWYgKHIuY29tcGFyZVRvKHQpID49IDApIHtcbiAgICAgICAgICAgIHJbci50KytdID0gMTtcbiAgICAgICAgICAgIHIuc3ViVG8odCwgcik7XG4gICAgICAgIH1cbiAgICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKHlzLCB0KTtcbiAgICAgICAgdC5zdWJUbyh5LCB5KTsgLy8gXCJuZWdhdGl2ZVwiIHkgc28gd2UgY2FuIHJlcGxhY2Ugc3ViIHdpdGggYW0gbGF0ZXJcbiAgICAgICAgd2hpbGUgKHkudCA8IHlzKSB7XG4gICAgICAgICAgICB5W3kudCsrXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKC0taiA+PSAwKSB7XG4gICAgICAgICAgICAvLyBFc3RpbWF0ZSBxdW90aWVudCBkaWdpdFxuICAgICAgICAgICAgdmFyIHFkID0gKHJbLS1pXSA9PSB5MCkgPyB0aGlzLkRNIDogTWF0aC5mbG9vcihyW2ldICogZDEgKyAocltpIC0gMV0gKyBlKSAqIGQyKTtcbiAgICAgICAgICAgIGlmICgocltpXSArPSB5LmFtKDAsIHFkLCByLCBqLCAwLCB5cykpIDwgcWQpIHsgLy8gVHJ5IGl0IG91dFxuICAgICAgICAgICAgICAgIHkuZGxTaGlmdFRvKGosIHQpO1xuICAgICAgICAgICAgICAgIHIuc3ViVG8odCwgcik7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHJbaV0gPCAtLXFkKSB7XG4gICAgICAgICAgICAgICAgICAgIHIuc3ViVG8odCwgcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChxICE9IG51bGwpIHtcbiAgICAgICAgICAgIHIuZHJTaGlmdFRvKHlzLCBxKTtcbiAgICAgICAgICAgIGlmICh0cyAhPSBtcykge1xuICAgICAgICAgICAgICAgIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyhxLCBxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByLnQgPSB5cztcbiAgICAgICAgci5jbGFtcCgpO1xuICAgICAgICBpZiAobnNoID4gMCkge1xuICAgICAgICAgICAgci5yU2hpZnRUbyhuc2gsIHIpO1xuICAgICAgICB9IC8vIERlbm9ybWFsaXplIHJlbWFpbmRlclxuICAgICAgICBpZiAodHMgPCAwKSB7XG4gICAgICAgICAgICBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ociwgcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmludkRpZ2l0ID0gYm5wSW52RGlnaXQ7XG4gICAgLy8gKHByb3RlY3RlZCkgcmV0dXJuIFwiLTEvdGhpcyAlIDJeREJcIjsgdXNlZnVsIGZvciBNb250LiByZWR1Y3Rpb25cbiAgICAvLyBqdXN0aWZpY2F0aW9uOlxuICAgIC8vICAgICAgICAgeHkgPT0gMSAobW9kIG0pXG4gICAgLy8gICAgICAgICB4eSA9ICAxK2ttXG4gICAgLy8gICB4eSgyLXh5KSA9ICgxK2ttKSgxLWttKVxuICAgIC8vIHhbeSgyLXh5KV0gPSAxLWteMm1eMlxuICAgIC8vIHhbeSgyLXh5KV0gPT0gMSAobW9kIG1eMilcbiAgICAvLyBpZiB5IGlzIDEveCBtb2QgbSwgdGhlbiB5KDIteHkpIGlzIDEveCBtb2QgbV4yXG4gICAgLy8gc2hvdWxkIHJlZHVjZSB4IGFuZCB5KDIteHkpIGJ5IG1eMiBhdCBlYWNoIHN0ZXAgdG8ga2VlcCBzaXplIGJvdW5kZWQuXG4gICAgLy8gSlMgbXVsdGlwbHkgXCJvdmVyZmxvd3NcIiBkaWZmZXJlbnRseSBmcm9tIEMvQysrLCBzbyBjYXJlIGlzIG5lZWRlZCBoZXJlLlxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmludkRpZ2l0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy50IDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHggPSB0aGlzWzBdO1xuICAgICAgICBpZiAoKHggJiAxKSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeSA9IHggJiAzOyAvLyB5ID09IDEveCBtb2QgMl4yXG4gICAgICAgIHkgPSAoeSAqICgyIC0gKHggJiAweGYpICogeSkpICYgMHhmOyAvLyB5ID09IDEveCBtb2QgMl40XG4gICAgICAgIHkgPSAoeSAqICgyIC0gKHggJiAweGZmKSAqIHkpKSAmIDB4ZmY7IC8vIHkgPT0gMS94IG1vZCAyXjhcbiAgICAgICAgeSA9ICh5ICogKDIgLSAoKCh4ICYgMHhmZmZmKSAqIHkpICYgMHhmZmZmKSkpICYgMHhmZmZmOyAvLyB5ID09IDEveCBtb2QgMl4xNlxuICAgICAgICAvLyBsYXN0IHN0ZXAgLSBjYWxjdWxhdGUgaW52ZXJzZSBtb2QgRFYgZGlyZWN0bHk7XG4gICAgICAgIC8vIGFzc3VtZXMgMTYgPCBEQiA8PSAzMiBhbmQgYXNzdW1lcyBhYmlsaXR5IHRvIGhhbmRsZSA0OC1iaXQgaW50c1xuICAgICAgICB5ID0gKHkgKiAoMiAtIHggKiB5ICUgdGhpcy5EVikpICUgdGhpcy5EVjsgLy8geSA9PSAxL3ggbW9kIDJeZGJpdHNcbiAgICAgICAgLy8gd2UgcmVhbGx5IHdhbnQgdGhlIG5lZ2F0aXZlIGludmVyc2UsIGFuZCAtRFYgPCB5IDwgRFZcbiAgICAgICAgcmV0dXJuICh5ID4gMCkgPyB0aGlzLkRWIC0geSA6IC15O1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gYm5wSXNFdmVuO1xuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWZmIHRoaXMgaXMgZXZlblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICgodGhpcy50ID4gMCkgPyAodGhpc1swXSAmIDEpIDogdGhpcy5zKSA9PSAwO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZXhwID0gYm5wRXhwO1xuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXNeZSwgZSA8IDJeMzIsIGRvaW5nIHNxciBhbmQgbXVsIHdpdGggXCJyXCIgKEhBQyAxNC43OSlcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5leHAgPSBmdW5jdGlvbiAoZSwgeikge1xuICAgICAgICBpZiAoZSA+IDB4ZmZmZmZmZmYgfHwgZSA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBCaWdJbnRlZ2VyLk9ORTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICB2YXIgcjIgPSBuYmkoKTtcbiAgICAgICAgdmFyIGcgPSB6LmNvbnZlcnQodGhpcyk7XG4gICAgICAgIHZhciBpID0gbmJpdHMoZSkgLSAxO1xuICAgICAgICBnLmNvcHlUbyhyKTtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICB6LnNxclRvKHIsIHIyKTtcbiAgICAgICAgICAgIGlmICgoZSAmICgxIDw8IGkpKSA+IDApIHtcbiAgICAgICAgICAgICAgICB6Lm11bFRvKHIyLCBnLCByKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gcjtcbiAgICAgICAgICAgICAgICByID0gcjI7XG4gICAgICAgICAgICAgICAgcjIgPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB6LnJldmVydChyKTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmNodW5rU2l6ZSA9IGJucENodW5rU2l6ZTtcbiAgICAvLyAocHJvdGVjdGVkKSByZXR1cm4geCBzLnQuIHJeeCA8IERWXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2h1bmtTaXplID0gZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5MTjIgKiB0aGlzLkRCIC8gTWF0aC5sb2cocikpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUudG9SYWRpeCA9IGJucFRvUmFkaXg7XG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCB0byByYWRpeCBzdHJpbmdcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1JhZGl4ID0gZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKGIgPT0gbnVsbCkge1xuICAgICAgICAgICAgYiA9IDEwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNpZ251bSgpID09IDAgfHwgYiA8IDIgfHwgYiA+IDM2KSB7XG4gICAgICAgICAgICByZXR1cm4gXCIwXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNzID0gdGhpcy5jaHVua1NpemUoYik7XG4gICAgICAgIHZhciBhID0gTWF0aC5wb3coYiwgY3MpO1xuICAgICAgICB2YXIgZCA9IG5idihhKTtcbiAgICAgICAgdmFyIHkgPSBuYmkoKTtcbiAgICAgICAgdmFyIHogPSBuYmkoKTtcbiAgICAgICAgdmFyIHIgPSBcIlwiO1xuICAgICAgICB0aGlzLmRpdlJlbVRvKGQsIHksIHopO1xuICAgICAgICB3aGlsZSAoeS5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgICAgIHIgPSAoYSArIHouaW50VmFsdWUoKSkudG9TdHJpbmcoYikuc3Vic3RyKDEpICsgcjtcbiAgICAgICAgICAgIHkuZGl2UmVtVG8oZCwgeSwgeik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHouaW50VmFsdWUoKS50b1N0cmluZyhiKSArIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tUmFkaXggPSBibnBGcm9tUmFkaXg7XG4gICAgLy8gKHByb3RlY3RlZCkgY29udmVydCBmcm9tIHJhZGl4IHN0cmluZ1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21SYWRpeCA9IGZ1bmN0aW9uIChzLCBiKSB7XG4gICAgICAgIHRoaXMuZnJvbUludCgwKTtcbiAgICAgICAgaWYgKGIgPT0gbnVsbCkge1xuICAgICAgICAgICAgYiA9IDEwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjcyA9IHRoaXMuY2h1bmtTaXplKGIpO1xuICAgICAgICB2YXIgZCA9IE1hdGgucG93KGIsIGNzKTtcbiAgICAgICAgdmFyIG1pID0gZmFsc2U7XG4gICAgICAgIHZhciBqID0gMDtcbiAgICAgICAgdmFyIHcgPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB4ID0gaW50QXQocywgaSk7XG4gICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocy5jaGFyQXQoaSkgPT0gXCItXCIgJiYgdGhpcy5zaWdudW0oKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3ID0gYiAqIHcgKyB4O1xuICAgICAgICAgICAgaWYgKCsraiA+PSBjcykge1xuICAgICAgICAgICAgICAgIHRoaXMuZE11bHRpcGx5KGQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LCAwKTtcbiAgICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgICB3ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZE11bHRpcGx5KE1hdGgucG93KGIsIGopKTtcbiAgICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCh3LCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWkpIHtcbiAgICAgICAgICAgIEJpZ0ludGVnZXIuWkVSTy5zdWJUbyh0aGlzLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbU51bWJlciA9IGJucEZyb21OdW1iZXI7XG4gICAgLy8gKHByb3RlY3RlZCkgYWx0ZXJuYXRlIGNvbnN0cnVjdG9yXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbU51bWJlciA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmIChcIm51bWJlclwiID09IHR5cGVvZiBiKSB7XG4gICAgICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsaW50LFJORylcbiAgICAgICAgICAgIGlmIChhIDwgMikge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJvbUludCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJvbU51bWJlcihhLCBjKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGVzdEJpdChhIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yY2UgTVNCIHNldFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpdHdpc2VUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYSAtIDEpLCBvcF9vciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRXZlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCgxLCAwKTtcbiAgICAgICAgICAgICAgICB9IC8vIGZvcmNlIG9kZFxuICAgICAgICAgICAgICAgIHdoaWxlICghdGhpcy5pc1Byb2JhYmxlUHJpbWUoYikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KDIsIDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5iaXRMZW5ndGgoKSA+IGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ViVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEgLSAxKSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBuZXcgQmlnSW50ZWdlcihpbnQsUk5HKVxuICAgICAgICAgICAgdmFyIHggPSBbXTtcbiAgICAgICAgICAgIHZhciB0ID0gYSAmIDc7XG4gICAgICAgICAgICB4Lmxlbmd0aCA9IChhID4+IDMpICsgMTtcbiAgICAgICAgICAgIGIubmV4dEJ5dGVzKHgpO1xuICAgICAgICAgICAgaWYgKHQgPiAwKSB7XG4gICAgICAgICAgICAgICAgeFswXSAmPSAoKDEgPDwgdCkgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHhbMF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mcm9tU3RyaW5nKHgsIDI1Nik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdHdpc2VUbyA9IGJucEJpdHdpc2VUbztcbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyBvcCBhIChiaXR3aXNlKVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdHdpc2VUbyA9IGZ1bmN0aW9uIChhLCBvcCwgcikge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGY7XG4gICAgICAgIHZhciBtID0gTWF0aC5taW4oYS50LCB0aGlzLnQpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbTsgKytpKSB7XG4gICAgICAgICAgICByW2ldID0gb3AodGhpc1tpXSwgYVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEudCA8IHRoaXMudCkge1xuICAgICAgICAgICAgZiA9IGEucyAmIHRoaXMuRE07XG4gICAgICAgICAgICBmb3IgKGkgPSBtOyBpIDwgdGhpcy50OyArK2kpIHtcbiAgICAgICAgICAgICAgICByW2ldID0gb3AodGhpc1tpXSwgZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmID0gdGhpcy5zICYgdGhpcy5ETTtcbiAgICAgICAgICAgIGZvciAoaSA9IG07IGkgPCBhLnQ7ICsraSkge1xuICAgICAgICAgICAgICAgIHJbaV0gPSBvcChmLCBhW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHIudCA9IGEudDtcbiAgICAgICAgfVxuICAgICAgICByLnMgPSBvcCh0aGlzLnMsIGEucyk7XG4gICAgICAgIHIuY2xhbXAoKTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmNoYW5nZUJpdCA9IGJucENoYW5nZUJpdDtcbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzIG9wICgxPDxuKVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNoYW5nZUJpdCA9IGZ1bmN0aW9uIChuLCBvcCkge1xuICAgICAgICB2YXIgciA9IEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChuKTtcbiAgICAgICAgdGhpcy5iaXR3aXNlVG8ociwgb3AsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZFRvID0gYm5wQWRkVG87XG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgKyBhXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkVG8gPSBmdW5jdGlvbiAoYSwgcikge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjID0gMDtcbiAgICAgICAgdmFyIG0gPSBNYXRoLm1pbihhLnQsIHRoaXMudCk7XG4gICAgICAgIHdoaWxlIChpIDwgbSkge1xuICAgICAgICAgICAgYyArPSB0aGlzW2ldICsgYVtpXTtcbiAgICAgICAgICAgIHJbaSsrXSA9IGMgJiB0aGlzLkRNO1xuICAgICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYS50IDwgdGhpcy50KSB7XG4gICAgICAgICAgICBjICs9IGEucztcbiAgICAgICAgICAgIHdoaWxlIChpIDwgdGhpcy50KSB7XG4gICAgICAgICAgICAgICAgYyArPSB0aGlzW2ldO1xuICAgICAgICAgICAgICAgIHJbaSsrXSA9IGMgJiB0aGlzLkRNO1xuICAgICAgICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBhLnQpIHtcbiAgICAgICAgICAgICAgICBjICs9IGFbaV07XG4gICAgICAgICAgICAgICAgcltpKytdID0gYyAmIHRoaXMuRE07XG4gICAgICAgICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGMgKz0gYS5zO1xuICAgICAgICB9XG4gICAgICAgIHIucyA9IChjIDwgMCkgPyAtMSA6IDA7XG4gICAgICAgIGlmIChjID4gMCkge1xuICAgICAgICAgICAgcltpKytdID0gYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgLTEpIHtcbiAgICAgICAgICAgIHJbaSsrXSA9IHRoaXMuRFYgKyBjO1xuICAgICAgICB9XG4gICAgICAgIHIudCA9IGk7XG4gICAgICAgIHIuY2xhbXAoKTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmRNdWx0aXBseSA9IGJucERNdWx0aXBseTtcbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICo9IG4sIHRoaXMgPj0gMCwgMSA8IG4gPCBEVlxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRNdWx0aXBseSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHRoaXNbdGhpcy50XSA9IHRoaXMuYW0oMCwgbiAtIDEsIHRoaXMsIDAsIDAsIHRoaXMudCk7XG4gICAgICAgICsrdGhpcy50O1xuICAgICAgICB0aGlzLmNsYW1wKCk7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kQWRkT2Zmc2V0ID0gYm5wREFkZE9mZnNldDtcbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICs9IG4gPDwgdyB3b3JkcywgdGhpcyA+PSAwXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZEFkZE9mZnNldCA9IGZ1bmN0aW9uIChuLCB3KSB7XG4gICAgICAgIGlmIChuID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodGhpcy50IDw9IHcpIHtcbiAgICAgICAgICAgIHRoaXNbdGhpcy50KytdID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW3ddICs9IG47XG4gICAgICAgIHdoaWxlICh0aGlzW3ddID49IHRoaXMuRFYpIHtcbiAgICAgICAgICAgIHRoaXNbd10gLT0gdGhpcy5EVjtcbiAgICAgICAgICAgIGlmICgrK3cgPj0gdGhpcy50KSB7XG4gICAgICAgICAgICAgICAgdGhpc1t0aGlzLnQrK10gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKyt0aGlzW3ddO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseUxvd2VyVG8gPSBibnBNdWx0aXBseUxvd2VyVG87XG4gICAgLy8gKHByb3RlY3RlZCkgciA9IGxvd2VyIG4gd29yZHMgb2YgXCJ0aGlzICogYVwiLCBhLnQgPD0gblxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseUxvd2VyVG8gPSBmdW5jdGlvbiAoYSwgbiwgcikge1xuICAgICAgICB2YXIgaSA9IE1hdGgubWluKHRoaXMudCArIGEudCwgbik7XG4gICAgICAgIHIucyA9IDA7IC8vIGFzc3VtZXMgYSx0aGlzID49IDBcbiAgICAgICAgci50ID0gaTtcbiAgICAgICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICAgICAgICByWy0taV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogPSByLnQgLSB0aGlzLnQ7IGkgPCBqOyArK2kpIHtcbiAgICAgICAgICAgIHJbaSArIHRoaXMudF0gPSB0aGlzLmFtKDAsIGFbaV0sIHIsIGksIDAsIHRoaXMudCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaiA9IE1hdGgubWluKGEudCwgbik7IGkgPCBqOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuYW0oMCwgYVtpXSwgciwgaSwgMCwgbiAtIGkpO1xuICAgICAgICB9XG4gICAgICAgIHIuY2xhbXAoKTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VXBwZXJUbyA9IGJucE11bHRpcGx5VXBwZXJUbztcbiAgICAvLyAocHJvdGVjdGVkKSByID0gXCJ0aGlzICogYVwiIHdpdGhvdXQgbG93ZXIgbiB3b3JkcywgbiA+IDBcbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlVcHBlclRvID0gZnVuY3Rpb24gKGEsIG4sIHIpIHtcbiAgICAgICAgLS1uO1xuICAgICAgICB2YXIgaSA9IHIudCA9IHRoaXMudCArIGEudCAtIG47XG4gICAgICAgIHIucyA9IDA7IC8vIGFzc3VtZXMgYSx0aGlzID49IDBcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICByW2ldID0gMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSBNYXRoLm1heChuIC0gdGhpcy50LCAwKTsgaSA8IGEudDsgKytpKSB7XG4gICAgICAgICAgICByW3RoaXMudCArIGkgLSBuXSA9IHRoaXMuYW0obiAtIGksIGFbaV0sIHIsIDAsIDAsIHRoaXMudCArIGkgLSBuKTtcbiAgICAgICAgfVxuICAgICAgICByLmNsYW1wKCk7XG4gICAgICAgIHIuZHJTaGlmdFRvKDEsIHIpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW50ID0gYm5wTW9kSW50O1xuICAgIC8vIChwcm90ZWN0ZWQpIHRoaXMgJSBuLCBuIDwgMl4yNlxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmIChuIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkID0gdGhpcy5EViAlIG47XG4gICAgICAgIHZhciByID0gKHRoaXMucyA8IDApID8gbiAtIDEgOiAwO1xuICAgICAgICBpZiAodGhpcy50ID4gMCkge1xuICAgICAgICAgICAgaWYgKGQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHIgPSB0aGlzWzBdICUgbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnQgLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgICAgICByID0gKGQgKiByICsgdGhpc1tpXSkgJSBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbGxlclJhYmluID0gYm5wTWlsbGVyUmFiaW47XG4gICAgLy8gKHByb3RlY3RlZCkgdHJ1ZSBpZiBwcm9iYWJseSBwcmltZSAoSEFDIDQuMjQsIE1pbGxlci1SYWJpbilcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taWxsZXJSYWJpbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciBuMSA9IHRoaXMuc3VidHJhY3QoQmlnSW50ZWdlci5PTkUpO1xuICAgICAgICB2YXIgayA9IG4xLmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgICBpZiAoayA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBuMS5zaGlmdFJpZ2h0KGspO1xuICAgICAgICB0ID0gKHQgKyAxKSA+PiAxO1xuICAgICAgICBpZiAodCA+IGxvd3ByaW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHQgPSBsb3dwcmltZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhID0gbmJpKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdDsgKytpKSB7XG4gICAgICAgICAgICAvLyBQaWNrIGJhc2VzIGF0IHJhbmRvbSwgaW5zdGVhZCBvZiBzdGFydGluZyBhdCAyXG4gICAgICAgICAgICBhLmZyb21JbnQobG93cHJpbWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxvd3ByaW1lcy5sZW5ndGgpXSk7XG4gICAgICAgICAgICB2YXIgeSA9IGEubW9kUG93KHIsIHRoaXMpO1xuICAgICAgICAgICAgaWYgKHkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwICYmIHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICAgICAgICAgIHdoaWxlIChqKysgPCBrICYmIHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB5Lm1vZFBvd0ludCgyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHkuY29tcGFyZVRvKG4xKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBiblNxdWFyZTtcbiAgICAvLyAocHVibGljKSB0aGlzXjJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHRoaXMuc3F1YXJlVG8ocik7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8jcmVnaW9uIEFTWU5DXG4gICAgLy8gUHVibGljIEFQSSBtZXRob2RcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nY2RhID0gZnVuY3Rpb24gKGEsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciB4ID0gKHRoaXMucyA8IDApID8gdGhpcy5uZWdhdGUoKSA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgdmFyIHkgPSAoYS5zIDwgMCkgPyBhLm5lZ2F0ZSgpIDogYS5jbG9uZSgpO1xuICAgICAgICBpZiAoeC5jb21wYXJlVG8oeSkgPCAwKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHg7XG4gICAgICAgICAgICB4ID0geTtcbiAgICAgICAgICAgIHkgPSB0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0geC5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgICAgdmFyIGcgPSB5LmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgICBpZiAoZyA8IDApIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgZykge1xuICAgICAgICAgICAgZyA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGcgPiAwKSB7XG4gICAgICAgICAgICB4LnJTaGlmdFRvKGcsIHgpO1xuICAgICAgICAgICAgeS5yU2hpZnRUbyhnLCB5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXb3JraG9yc2Ugb2YgdGhlIGFsZ29yaXRobSwgZ2V0cyBjYWxsZWQgMjAwIC0gODAwIHRpbWVzIHBlciA1MTIgYml0IGtleWdlbi5cbiAgICAgICAgdmFyIGdjZGExID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKChpID0geC5nZXRMb3dlc3RTZXRCaXQoKSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgeC5yU2hpZnRUbyhpLCB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoaSA9IHkuZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkge1xuICAgICAgICAgICAgICAgIHkuclNoaWZ0VG8oaSwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeC5jb21wYXJlVG8oeSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHguc3ViVG8oeSwgeCk7XG4gICAgICAgICAgICAgICAgeC5yU2hpZnRUbygxLCB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHkuc3ViVG8oeCwgeSk7XG4gICAgICAgICAgICAgICAgeS5yU2hpZnRUbygxLCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKHguc2lnbnVtKCkgPiAwKSkge1xuICAgICAgICAgICAgICAgIGlmIChnID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB5LmxTaGlmdFRvKGcsIHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgY2FsbGJhY2soeSk7IH0sIDApOyAvLyBlc2NhcGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZ2NkYTEsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBzZXRUaW1lb3V0KGdjZGExLCAxMCk7XG4gICAgfTtcbiAgICAvLyAocHJvdGVjdGVkKSBhbHRlcm5hdGUgY29uc3RydWN0b3JcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tTnVtYmVyQXN5bmMgPSBmdW5jdGlvbiAoYSwgYiwgYywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKFwibnVtYmVyXCIgPT0gdHlwZW9mIGIpIHtcbiAgICAgICAgICAgIGlmIChhIDwgMikge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJvbUludCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJvbU51bWJlcihhLCBjKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGVzdEJpdChhIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaXR3aXNlVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEgLSAxKSwgb3Bfb3IsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V2ZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQoMSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBibnBfMSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIGJucGZuMV8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBibnBfMS5kQWRkT2Zmc2V0KDIsIDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYm5wXzEuYml0TGVuZ3RoKCkgPiBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibnBfMS5zdWJUbyhCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQoYSAtIDEpLCBibnBfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJucF8xLmlzUHJvYmFibGVQcmltZShiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGNhbGxiYWNrKCk7IH0sIDApOyAvLyBlc2NhcGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoYm5wZm4xXzEsIDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGJucGZuMV8xLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4ID0gW107XG4gICAgICAgICAgICB2YXIgdCA9IGEgJiA3O1xuICAgICAgICAgICAgeC5sZW5ndGggPSAoYSA+PiAzKSArIDE7XG4gICAgICAgICAgICBiLm5leHRCeXRlcyh4KTtcbiAgICAgICAgICAgIGlmICh0ID4gMCkge1xuICAgICAgICAgICAgICAgIHhbMF0gJj0gKCgxIDw8IHQpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4WzBdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZnJvbVN0cmluZyh4LCAyNTYpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQmlnSW50ZWdlcjtcbn0oKSk7XG5leHBvcnQgeyBCaWdJbnRlZ2VyIH07XG4vLyNyZWdpb24gUkVEVUNFUlNcbi8vI3JlZ2lvbiBOdWxsRXhwXG52YXIgTnVsbEV4cCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOdWxsRXhwKCkge1xuICAgIH1cbiAgICAvLyBOdWxsRXhwLnByb3RvdHlwZS5jb252ZXJ0ID0gbk5vcDtcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgICAvLyBOdWxsRXhwLnByb3RvdHlwZS5yZXZlcnQgPSBuTm9wO1xuICAgIE51bGxFeHAucHJvdG90eXBlLnJldmVydCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH07XG4gICAgLy8gTnVsbEV4cC5wcm90b3R5cGUubXVsVG8gPSBuTXVsVG87XG4gICAgTnVsbEV4cC5wcm90b3R5cGUubXVsVG8gPSBmdW5jdGlvbiAoeCwgeSwgcikge1xuICAgICAgICB4Lm11bHRpcGx5VG8oeSwgcik7XG4gICAgfTtcbiAgICAvLyBOdWxsRXhwLnByb3RvdHlwZS5zcXJUbyA9IG5TcXJUbztcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5zcXJUbyA9IGZ1bmN0aW9uICh4LCByKSB7XG4gICAgICAgIHguc3F1YXJlVG8ocik7XG4gICAgfTtcbiAgICByZXR1cm4gTnVsbEV4cDtcbn0oKSk7XG4vLyBNb2R1bGFyIHJlZHVjdGlvbiB1c2luZyBcImNsYXNzaWNcIiBhbGdvcml0aG1cbnZhciBDbGFzc2ljID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENsYXNzaWMobSkge1xuICAgICAgICB0aGlzLm0gPSBtO1xuICAgIH1cbiAgICAvLyBDbGFzc2ljLnByb3RvdHlwZS5jb252ZXJ0ID0gY0NvbnZlcnQ7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGlmICh4LnMgPCAwIHx8IHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHgubW9kKHRoaXMubSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4geDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQ2xhc3NpYy5wcm90b3R5cGUucmV2ZXJ0ID0gY1JldmVydDtcbiAgICBDbGFzc2ljLnByb3RvdHlwZS5yZXZlcnQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9O1xuICAgIC8vIENsYXNzaWMucHJvdG90eXBlLnJlZHVjZSA9IGNSZWR1Y2U7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUucmVkdWNlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgeC5kaXZSZW1Ubyh0aGlzLm0sIG51bGwsIHgpO1xuICAgIH07XG4gICAgLy8gQ2xhc3NpYy5wcm90b3R5cGUubXVsVG8gPSBjTXVsVG87XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUubXVsVG8gPSBmdW5jdGlvbiAoeCwgeSwgcikge1xuICAgICAgICB4Lm11bHRpcGx5VG8oeSwgcik7XG4gICAgICAgIHRoaXMucmVkdWNlKHIpO1xuICAgIH07XG4gICAgLy8gQ2xhc3NpYy5wcm90b3R5cGUuc3FyVG8gPSBjU3FyVG87XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUuc3FyVG8gPSBmdW5jdGlvbiAoeCwgcikge1xuICAgICAgICB4LnNxdWFyZVRvKHIpO1xuICAgICAgICB0aGlzLnJlZHVjZShyKTtcbiAgICB9O1xuICAgIHJldHVybiBDbGFzc2ljO1xufSgpKTtcbi8vI2VuZHJlZ2lvblxuLy8jcmVnaW9uIE1vbnRnb21lcnlcbi8vIE1vbnRnb21lcnkgcmVkdWN0aW9uXG52YXIgTW9udGdvbWVyeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNb250Z29tZXJ5KG0pIHtcbiAgICAgICAgdGhpcy5tID0gbTtcbiAgICAgICAgdGhpcy5tcCA9IG0uaW52RGlnaXQoKTtcbiAgICAgICAgdGhpcy5tcGwgPSB0aGlzLm1wICYgMHg3ZmZmO1xuICAgICAgICB0aGlzLm1waCA9IHRoaXMubXAgPj4gMTU7XG4gICAgICAgIHRoaXMudW0gPSAoMSA8PCAobS5EQiAtIDE1KSkgLSAxO1xuICAgICAgICB0aGlzLm10MiA9IDIgKiBtLnQ7XG4gICAgfVxuICAgIC8vIE1vbnRnb21lcnkucHJvdG90eXBlLmNvbnZlcnQgPSBtb250Q29udmVydDtcbiAgICAvLyB4UiBtb2QgbVxuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICB4LmFicygpLmRsU2hpZnRUbyh0aGlzLm0udCwgcik7XG4gICAgICAgIHIuZGl2UmVtVG8odGhpcy5tLCBudWxsLCByKTtcbiAgICAgICAgaWYgKHgucyA8IDAgJiYgci5jb21wYXJlVG8oQmlnSW50ZWdlci5aRVJPKSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubS5zdWJUbyhyLCByKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIE1vbnRnb21lcnkucHJvdG90eXBlLnJldmVydCA9IG1vbnRSZXZlcnQ7XG4gICAgLy8geC9SIG1vZCBtXG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUucmV2ZXJ0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgeC5jb3B5VG8ocik7XG4gICAgICAgIHRoaXMucmVkdWNlKHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIE1vbnRnb21lcnkucHJvdG90eXBlLnJlZHVjZSA9IG1vbnRSZWR1Y2U7XG4gICAgLy8geCA9IHgvUiBtb2QgbSAoSEFDIDE0LjMyKVxuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHdoaWxlICh4LnQgPD0gdGhpcy5tdDIpIHtcbiAgICAgICAgICAgIC8vIHBhZCB4IHNvIGFtIGhhcyBlbm91Z2ggcm9vbSBsYXRlclxuICAgICAgICAgICAgeFt4LnQrK10gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tLnQ7ICsraSkge1xuICAgICAgICAgICAgLy8gZmFzdGVyIHdheSBvZiBjYWxjdWxhdGluZyB1MCA9IHhbaV0qbXAgbW9kIERWXG4gICAgICAgICAgICB2YXIgaiA9IHhbaV0gJiAweDdmZmY7XG4gICAgICAgICAgICB2YXIgdTAgPSAoaiAqIHRoaXMubXBsICsgKCgoaiAqIHRoaXMubXBoICsgKHhbaV0gPj4gMTUpICogdGhpcy5tcGwpICYgdGhpcy51bSkgPDwgMTUpKSAmIHguRE07XG4gICAgICAgICAgICAvLyB1c2UgYW0gdG8gY29tYmluZSB0aGUgbXVsdGlwbHktc2hpZnQtYWRkIGludG8gb25lIGNhbGxcbiAgICAgICAgICAgIGogPSBpICsgdGhpcy5tLnQ7XG4gICAgICAgICAgICB4W2pdICs9IHRoaXMubS5hbSgwLCB1MCwgeCwgaSwgMCwgdGhpcy5tLnQpO1xuICAgICAgICAgICAgLy8gcHJvcGFnYXRlIGNhcnJ5XG4gICAgICAgICAgICB3aGlsZSAoeFtqXSA+PSB4LkRWKSB7XG4gICAgICAgICAgICAgICAgeFtqXSAtPSB4LkRWO1xuICAgICAgICAgICAgICAgIHhbKytqXSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHguY2xhbXAoKTtcbiAgICAgICAgeC5kclNoaWZ0VG8odGhpcy5tLnQsIHgpO1xuICAgICAgICBpZiAoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB7XG4gICAgICAgICAgICB4LnN1YlRvKHRoaXMubSwgeCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIE1vbnRnb21lcnkucHJvdG90eXBlLm11bFRvID0gbW9udE11bFRvO1xuICAgIC8vIHIgPSBcInh5L1IgbW9kIG1cIjsgeCx5ICE9IHJcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5tdWxUbyA9IGZ1bmN0aW9uICh4LCB5LCByKSB7XG4gICAgICAgIHgubXVsdGlwbHlUbyh5LCByKTtcbiAgICAgICAgdGhpcy5yZWR1Y2Uocik7XG4gICAgfTtcbiAgICAvLyBNb250Z29tZXJ5LnByb3RvdHlwZS5zcXJUbyA9IG1vbnRTcXJUbztcbiAgICAvLyByID0gXCJ4XjIvUiBtb2QgbVwiOyB4ICE9IHJcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5zcXJUbyA9IGZ1bmN0aW9uICh4LCByKSB7XG4gICAgICAgIHguc3F1YXJlVG8ocik7XG4gICAgICAgIHRoaXMucmVkdWNlKHIpO1xuICAgIH07XG4gICAgcmV0dXJuIE1vbnRnb21lcnk7XG59KCkpO1xuLy8jZW5kcmVnaW9uIE1vbnRnb21lcnlcbi8vI3JlZ2lvbiBCYXJyZXR0XG4vLyBCYXJyZXR0IG1vZHVsYXIgcmVkdWN0aW9uXG52YXIgQmFycmV0dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCYXJyZXR0KG0pIHtcbiAgICAgICAgdGhpcy5tID0gbTtcbiAgICAgICAgLy8gc2V0dXAgQmFycmV0dFxuICAgICAgICB0aGlzLnIyID0gbmJpKCk7XG4gICAgICAgIHRoaXMucTMgPSBuYmkoKTtcbiAgICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKDIgKiBtLnQsIHRoaXMucjIpO1xuICAgICAgICB0aGlzLm11ID0gdGhpcy5yMi5kaXZpZGUobSk7XG4gICAgfVxuICAgIC8vIEJhcnJldHQucHJvdG90eXBlLmNvbnZlcnQgPSBiYXJyZXR0Q29udmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgaWYgKHgucyA8IDAgfHwgeC50ID4gMiAqIHRoaXMubS50KSB7XG4gICAgICAgICAgICByZXR1cm4geC5tb2QodGhpcy5tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh4LmNvbXBhcmVUbyh0aGlzLm0pIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICAgICAgeC5jb3B5VG8ocik7XG4gICAgICAgICAgICB0aGlzLnJlZHVjZShyKTtcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBCYXJyZXR0LnByb3RvdHlwZS5yZXZlcnQgPSBiYXJyZXR0UmV2ZXJ0O1xuICAgIEJhcnJldHQucHJvdG90eXBlLnJldmVydCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH07XG4gICAgLy8gQmFycmV0dC5wcm90b3R5cGUucmVkdWNlID0gYmFycmV0dFJlZHVjZTtcbiAgICAvLyB4ID0geCBtb2QgbSAoSEFDIDE0LjQyKVxuICAgIEJhcnJldHQucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50IC0gMSwgdGhpcy5yMik7XG4gICAgICAgIGlmICh4LnQgPiB0aGlzLm0udCArIDEpIHtcbiAgICAgICAgICAgIHgudCA9IHRoaXMubS50ICsgMTtcbiAgICAgICAgICAgIHguY2xhbXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm11Lm11bHRpcGx5VXBwZXJUbyh0aGlzLnIyLCB0aGlzLm0udCArIDEsIHRoaXMucTMpO1xuICAgICAgICB0aGlzLm0ubXVsdGlwbHlMb3dlclRvKHRoaXMucTMsIHRoaXMubS50ICsgMSwgdGhpcy5yMik7XG4gICAgICAgIHdoaWxlICh4LmNvbXBhcmVUbyh0aGlzLnIyKSA8IDApIHtcbiAgICAgICAgICAgIHguZEFkZE9mZnNldCgxLCB0aGlzLm0udCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIHguc3ViVG8odGhpcy5yMiwgeCk7XG4gICAgICAgIHdoaWxlICh4LmNvbXBhcmVUbyh0aGlzLm0pID49IDApIHtcbiAgICAgICAgICAgIHguc3ViVG8odGhpcy5tLCB4KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQmFycmV0dC5wcm90b3R5cGUubXVsVG8gPSBiYXJyZXR0TXVsVG87XG4gICAgLy8gciA9IHgqeSBtb2QgbTsgeCx5ICE9IHJcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5tdWxUbyA9IGZ1bmN0aW9uICh4LCB5LCByKSB7XG4gICAgICAgIHgubXVsdGlwbHlUbyh5LCByKTtcbiAgICAgICAgdGhpcy5yZWR1Y2Uocik7XG4gICAgfTtcbiAgICAvLyBCYXJyZXR0LnByb3RvdHlwZS5zcXJUbyA9IGJhcnJldHRTcXJUbztcbiAgICAvLyByID0geF4yIG1vZCBtOyB4ICE9IHJcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5zcXJUbyA9IGZ1bmN0aW9uICh4LCByKSB7XG4gICAgICAgIHguc3F1YXJlVG8ocik7XG4gICAgICAgIHRoaXMucmVkdWNlKHIpO1xuICAgIH07XG4gICAgcmV0dXJuIEJhcnJldHQ7XG59KCkpO1xuLy8jZW5kcmVnaW9uXG4vLyNlbmRyZWdpb24gUkVEVUNFUlNcbi8vIHJldHVybiBuZXcsIHVuc2V0IEJpZ0ludGVnZXJcbmV4cG9ydCBmdW5jdGlvbiBuYmkoKSB7IHJldHVybiBuZXcgQmlnSW50ZWdlcihudWxsKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmlnSW50KHN0ciwgcikge1xuICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihzdHIsIHIpO1xufVxuLy8gYW06IENvbXB1dGUgd19qICs9ICh4KnRoaXNfaSksIHByb3BhZ2F0ZSBjYXJyaWVzLFxuLy8gYyBpcyBpbml0aWFsIGNhcnJ5LCByZXR1cm5zIGZpbmFsIGNhcnJ5LlxuLy8gYyA8IDMqZHZhbHVlLCB4IDwgMipkdmFsdWUsIHRoaXNfaSA8IGR2YWx1ZVxuLy8gV2UgbmVlZCB0byBzZWxlY3QgdGhlIGZhc3Rlc3Qgb25lIHRoYXQgd29ya3MgaW4gdGhpcyBlbnZpcm9ubWVudC5cbnZhciBpbkJyb3dzZXIgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiO1xuaWYgKGluQnJvd3NlciAmJiBqX2xtICYmIChuYXZpZ2F0b3IuYXBwTmFtZSA9PSBcIk1pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlclwiKSkge1xuICAgIC8vIGFtMiBhdm9pZHMgYSBiaWcgbXVsdC1hbmQtZXh0cmFjdCBjb21wbGV0ZWx5LlxuICAgIC8vIE1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSA8PSAzMCBiZWNhdXNlIHdlIGRvIGJpdHdpc2Ugb3BzXG4gICAgLy8gb24gdmFsdWVzIHVwIHRvIDIqaGR2YWx1ZV4yLWhkdmFsdWUtMSAoPCAyXjMxKVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFtID0gZnVuY3Rpb24gYW0yKGksIHgsIHcsIGosIGMsIG4pIHtcbiAgICAgICAgdmFyIHhsID0geCAmIDB4N2ZmZjtcbiAgICAgICAgdmFyIHhoID0geCA+PiAxNTtcbiAgICAgICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgICAgICB2YXIgbCA9IHRoaXNbaV0gJiAweDdmZmY7XG4gICAgICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXSA+PiAxNTtcbiAgICAgICAgICAgIHZhciBtID0geGggKiBsICsgaCAqIHhsO1xuICAgICAgICAgICAgbCA9IHhsICogbCArICgobSAmIDB4N2ZmZikgPDwgMTUpICsgd1tqXSArIChjICYgMHgzZmZmZmZmZik7XG4gICAgICAgICAgICBjID0gKGwgPj4+IDMwKSArIChtID4+PiAxNSkgKyB4aCAqIGggKyAoYyA+Pj4gMzApO1xuICAgICAgICAgICAgd1tqKytdID0gbCAmIDB4M2ZmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgICBkYml0cyA9IDMwO1xufVxuZWxzZSBpZiAoaW5Ccm93c2VyICYmIGpfbG0gJiYgKG5hdmlnYXRvci5hcHBOYW1lICE9IFwiTmV0c2NhcGVcIikpIHtcbiAgICAvLyBhbTE6IHVzZSBhIHNpbmdsZSBtdWx0IGFuZCBkaXZpZGUgdG8gZ2V0IHRoZSBoaWdoIGJpdHMsXG4gICAgLy8gbWF4IGRpZ2l0IGJpdHMgc2hvdWxkIGJlIDI2IGJlY2F1c2VcbiAgICAvLyBtYXggaW50ZXJuYWwgdmFsdWUgPSAyKmR2YWx1ZV4yLTIqZHZhbHVlICg8IDJeNTMpXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBmdW5jdGlvbiBhbTEoaSwgeCwgdywgaiwgYywgbikge1xuICAgICAgICB3aGlsZSAoLS1uID49IDApIHtcbiAgICAgICAgICAgIHZhciB2ID0geCAqIHRoaXNbaSsrXSArIHdbal0gKyBjO1xuICAgICAgICAgICAgYyA9IE1hdGguZmxvb3IodiAvIDB4NDAwMDAwMCk7XG4gICAgICAgICAgICB3W2orK10gPSB2ICYgMHgzZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjO1xuICAgIH07XG4gICAgZGJpdHMgPSAyNjtcbn1cbmVsc2UgeyAvLyBNb3ppbGxhL05ldHNjYXBlIHNlZW1zIHRvIHByZWZlciBhbTNcbiAgICAvLyBBbHRlcm5hdGVseSwgc2V0IG1heCBkaWdpdCBiaXRzIHRvIDI4IHNpbmNlIHNvbWVcbiAgICAvLyBicm93c2VycyBzbG93IGRvd24gd2hlbiBkZWFsaW5nIHdpdGggMzItYml0IG51bWJlcnMuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBmdW5jdGlvbiBhbTMoaSwgeCwgdywgaiwgYywgbikge1xuICAgICAgICB2YXIgeGwgPSB4ICYgMHgzZmZmO1xuICAgICAgICB2YXIgeGggPSB4ID4+IDE0O1xuICAgICAgICB3aGlsZSAoLS1uID49IDApIHtcbiAgICAgICAgICAgIHZhciBsID0gdGhpc1tpXSAmIDB4M2ZmZjtcbiAgICAgICAgICAgIHZhciBoID0gdGhpc1tpKytdID4+IDE0O1xuICAgICAgICAgICAgdmFyIG0gPSB4aCAqIGwgKyBoICogeGw7XG4gICAgICAgICAgICBsID0geGwgKiBsICsgKChtICYgMHgzZmZmKSA8PCAxNCkgKyB3W2pdICsgYztcbiAgICAgICAgICAgIGMgPSAobCA+PiAyOCkgKyAobSA+PiAxNCkgKyB4aCAqIGg7XG4gICAgICAgICAgICB3W2orK10gPSBsICYgMHhmZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjO1xuICAgIH07XG4gICAgZGJpdHMgPSAyODtcbn1cbkJpZ0ludGVnZXIucHJvdG90eXBlLkRCID0gZGJpdHM7XG5CaWdJbnRlZ2VyLnByb3RvdHlwZS5ETSA9ICgoMSA8PCBkYml0cykgLSAxKTtcbkJpZ0ludGVnZXIucHJvdG90eXBlLkRWID0gKDEgPDwgZGJpdHMpO1xudmFyIEJJX0ZQID0gNTI7XG5CaWdJbnRlZ2VyLnByb3RvdHlwZS5GViA9IE1hdGgucG93KDIsIEJJX0ZQKTtcbkJpZ0ludGVnZXIucHJvdG90eXBlLkYxID0gQklfRlAgLSBkYml0cztcbkJpZ0ludGVnZXIucHJvdG90eXBlLkYyID0gMiAqIGRiaXRzIC0gQklfRlA7XG4vLyBEaWdpdCBjb252ZXJzaW9uc1xudmFyIEJJX1JDID0gW107XG52YXIgcnI7XG52YXIgdnY7XG5yciA9IFwiMFwiLmNoYXJDb2RlQXQoMCk7XG5mb3IgKHZ2ID0gMDsgdnYgPD0gOTsgKyt2dikge1xuICAgIEJJX1JDW3JyKytdID0gdnY7XG59XG5yciA9IFwiYVwiLmNoYXJDb2RlQXQoMCk7XG5mb3IgKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIHtcbiAgICBCSV9SQ1tycisrXSA9IHZ2O1xufVxucnIgPSBcIkFcIi5jaGFyQ29kZUF0KDApO1xuZm9yICh2diA9IDEwOyB2diA8IDM2OyArK3Z2KSB7XG4gICAgQklfUkNbcnIrK10gPSB2djtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnRBdChzLCBpKSB7XG4gICAgdmFyIGMgPSBCSV9SQ1tzLmNoYXJDb2RlQXQoaSldO1xuICAgIHJldHVybiAoYyA9PSBudWxsKSA/IC0xIDogYztcbn1cbi8vIHJldHVybiBiaWdpbnQgaW5pdGlhbGl6ZWQgdG8gdmFsdWVcbmV4cG9ydCBmdW5jdGlvbiBuYnYoaSkge1xuICAgIHZhciByID0gbmJpKCk7XG4gICAgci5mcm9tSW50KGkpO1xuICAgIHJldHVybiByO1xufVxuLy8gcmV0dXJucyBiaXQgbGVuZ3RoIG9mIHRoZSBpbnRlZ2VyIHhcbmV4cG9ydCBmdW5jdGlvbiBuYml0cyh4KSB7XG4gICAgdmFyIHIgPSAxO1xuICAgIHZhciB0O1xuICAgIGlmICgodCA9IHggPj4+IDE2KSAhPSAwKSB7XG4gICAgICAgIHggPSB0O1xuICAgICAgICByICs9IDE2O1xuICAgIH1cbiAgICBpZiAoKHQgPSB4ID4+IDgpICE9IDApIHtcbiAgICAgICAgeCA9IHQ7XG4gICAgICAgIHIgKz0gODtcbiAgICB9XG4gICAgaWYgKCh0ID0geCA+PiA0KSAhPSAwKSB7XG4gICAgICAgIHggPSB0O1xuICAgICAgICByICs9IDQ7XG4gICAgfVxuICAgIGlmICgodCA9IHggPj4gMikgIT0gMCkge1xuICAgICAgICB4ID0gdDtcbiAgICAgICAgciArPSAyO1xuICAgIH1cbiAgICBpZiAoKHQgPSB4ID4+IDEpICE9IDApIHtcbiAgICAgICAgeCA9IHQ7XG4gICAgICAgIHIgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG4vLyBcImNvbnN0YW50c1wiXG5CaWdJbnRlZ2VyLlpFUk8gPSBuYnYoMCk7XG5CaWdJbnRlZ2VyLk9ORSA9IG5idigxKTtcbiJdfQ==
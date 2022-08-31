"use strict";
cc._RF.push(module, 'a07ddKb5OBIxJAwktp2PoMc', 'prng4');
// Script/Encrypt/lib/jsbn/prng4.js

"use strict";

exports.__esModule = true;
exports.prng_newstate = prng_newstate;
exports.rng_psize = exports.Arcfour = void 0;

// prng4.js - uses Arcfour as a PRNG
var Arcfour =
/** @class */
function () {
  function Arcfour() {
    this.i = 0;
    this.j = 0;
    this.S = [];
  } // Arcfour.prototype.init = ARC4init;
  // Initialize arcfour context from key, an array of ints, each from [0..255]


  Arcfour.prototype.init = function (key) {
    var i;
    var j;
    var t;

    for (i = 0; i < 256; ++i) {
      this.S[i] = i;
    }

    j = 0;

    for (i = 0; i < 256; ++i) {
      j = j + this.S[i] + key[i % key.length] & 255;
      t = this.S[i];
      this.S[i] = this.S[j];
      this.S[j] = t;
    }

    this.i = 0;
    this.j = 0;
  }; // Arcfour.prototype.next = ARC4next;


  Arcfour.prototype.next = function () {
    var t;
    this.i = this.i + 1 & 255;
    this.j = this.j + this.S[this.i] & 255;
    t = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = t;
    return this.S[t + this.S[this.i] & 255];
  };

  return Arcfour;
}();

exports.Arcfour = Arcfour;

// Plug in your RNG constructor here
function prng_newstate() {
  return new Arcfour();
} // Pool size must be a multiple of 4 and greater than 32.
// An array of bytes the size of the pool will be passed to init()


var rng_psize = 256;
exports.rng_psize = rng_psize;

cc._RF.pop();
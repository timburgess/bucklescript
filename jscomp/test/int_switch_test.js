'use strict';

var Mt = require("./mt.js");
var Curry = require("../../lib/js/curry.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  return Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, x) {
  return Mt.bool_suites(test_id, suites, loc, x);
}

function f(x) {
  var match = Curry._1(x, /* () */0);
  if (match > 3 || match < 1) {
    return /* "x" */120;
  } else {
    switch (match) {
      case 1 : 
          return /* "a" */97;
      case 2 : 
          return /* "b" */98;
      case 3 : 
          return /* "c" */99;
      
    }
  }
}

eq("File \"int_switch_test.ml\", line 18, characters 6-13", f((function () {
            return 1;
          })), /* "a" */97);

eq("File \"int_switch_test.ml\", line 19, characters 6-13", f((function () {
            return 2;
          })), /* "b" */98);

eq("File \"int_switch_test.ml\", line 20, characters 6-13", f((function () {
            return 3;
          })), /* "c" */99);

eq("File \"int_switch_test.ml\", line 21, characters 6-13", f((function () {
            return 0;
          })), /* "x" */120);

eq("File \"int_switch_test.ml\", line 22, characters 6-13", f((function () {
            return -1;
          })), /* "x" */120);

Mt.from_pair_suites("int_switch_test.ml", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.f = f;
/*  Not a pure module */

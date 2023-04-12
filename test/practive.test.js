import assert from "node:assert";
import matchers from "../practice.js";

const FIXTURE = {
  canadianPostalCode: {
    good: ["A7X 2P8", "P8E 4R2", "K1V 9P2", "Y3J 5C0"],
    bad: ["A7X   9B2", "C7E9U2", "", "Dog", "K1V\t9P2", " A7X 2P8", "A7X 2P8 "],
  },
  visa: {
    good: ["4128976567772613", "4089655522138888", "4098562516243"],
    bad: [
      "43333",
      "42346238746283746823",
      "7687777777263211",
      "foo",
      "π",
      "4128976567772613 ",
    ],
  },
  masterCard: {
    good: [
      "5100000000000000",
      "5294837679998888",
      "5309888182838282",
      "5599999999999999",
      "2221000000000000",
      "2720999999999999",
      "2578930481258783",
      "2230000000000000",
    ],
    bad: [
      "5763777373890002",
      "513988843211541",
      "51398884321108541",
      "",
      "OH",
      "5432333xxxxxxxxx",
    ],
  },
  adaFloat: {
    good: [
      "1",
      "23_5",
      "4#20#",
      "13#fD34_2_1#",
      "1.3e2",
      "11_3.3_3_222E-199",
      "3#1.2#E33",
      "4e+33",
    ],
    bad: ["dog", "4fe", "p#ii#", "_", "_33", "3_", "5__2", "9#88#E-1e3", "-6"],
  },
  notThreeEndingInOO: {
    good: ["", "fog", "Tho", "one", "a", "ab", "food"],
    bad: ["fOo", "gOO", "HoO", "zoo", "MOO", "123", "A15"],
  },
  divisibleBy16: {
    good: [
      "0",
      "00",
      "000",
      "00000",
      "00000",
      "000000",
      "00000000",
      "1101000000",
      "101010000",
    ],
    bad: ["1", "000000001000", "1000000001", "dog0000000"],
  },
  eightThroughThirtyTwo: {
    good: Array(24)
      .fill(0)
      .map((x, i) => i + 8),
    bad: ["1", "0", "00003", "dog", "", "361", "90", "7", "-11"],
  },
  mLComment: {
    good: ["(**)", "(*  *)", "(*756****)", "(*****)", "(*(*(******9*)"],
    bad: [
      "",
      "(*)",
      "(**",
      "dog",
      "(* before (* inner *) after *)",
      "(* extra space *) ",
    ],
  },
  notPythonPycharmPyc: {
    good: [
      "",
      "py",
      "pythonic",
      "pycharming",
      "xpyc",
      "xpython",
      "cpython",
      "PYTHON",
      "pyChArM",
    ],
    bad: ["python", "pycharm", "pyc"],
  },
  limitedFloatingPoint: {
    good: ["1", "3.", "5.0E123", "7.8e-9", "1.2e+3", "4.5E-6", "6.7E+8"],
    bad: ["", "dog", "3.5e9098", "2e1896489736"],
  },
  palindrome2358: {
    good: ["qq", "8u8", "π@M@π", "…§¢vv¢§…"],
    bad: ["az", "abba", "8888", "122210"],
  },
  noHyphenBeforeDigit: {
    good: ["asdasfasas8asasfas", "9", "-9-9-9-9-99", "3-1a-2"],
    bad: ["-8-8-8-8-8", "dog", ",,,,,", "-3abc-4def-5"],
  },
  ww: {
    good: ["", "aa", "abab", "hellohello"],
    bad: ["x", "ay", "abba", "HELLOhello", "abcabcd"],
  },
};

describe(`The regex tester`, () => {
  for (let [name, regex] of Object.entries(matchers)) {
    console.log(name);
    describe(`when matching ${name}`, () => {
      for (let s of FIXTURE[name].good) {
        it(`accepts ${s}`, () => {
          assert.ok(regex.test(s));
        });
      }
      for (let s of FIXTURE[name].bad) {
        it(`rejects ${s}`, () => {
          assert.ok(!regex.test(s));
        });
      }
    });
  }
});
const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function () {
  it("Checks the calculateNumber function", function() {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it("should throw a TypeError when arguments are not numbers", function() {
    assert.throws(() => {
      calculateNumber("1", 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber(1, "3");
    }, TypeError);

    assert.throws(() => {
      calculateNumber(undefined, 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber(1, undefined);
    }, TypeError);
  });
});

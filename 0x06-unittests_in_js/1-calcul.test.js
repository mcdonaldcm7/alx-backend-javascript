const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber", function () {
  it("SUM", function() {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it("SUBTRACT", function() {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  
  it("DIVIDE", function() {
    assert.equal(calculateNumber('DIVIDE', 1, 3), 0.33333333333333333);
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    assert.equal(calculateNumber('DIVIDE', 4.1, 1.92), 2);
    assert.equal(calculateNumber('DIVIDE', 1.5, 0), 'Error');
  });

  it("SUM Errors Tests", function() {
    assert.throws(() => {
      calculateNumber('SUM', "1", 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber('SUM', 1, "3");
    }, TypeError);

    assert.throws(() => {
      calculateNumber(false, 1, 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber('SUM', undefined, 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber('SUM', 1, undefined);
    }, TypeError);

    assert.throws(() => {
      calculateNumber(undefined, 1, 3);
    }, TypeError);
  });

  it("SUBTRACT Errors Tests", function() {
    assert.throws(() => {
      calculateNumber('SUBTRACT', "1", 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber('SUBTRACT', 1, "3");
    }, TypeError);

    assert.throws(() => {
      calculateNumber(false, 1, 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber('SUBTRACT', undefined, 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber('SUBTRACT', 1, undefined);
    }, TypeError);

    assert.throws(() => {
      calculateNumber(undefined, 1, 3);
    }, TypeError);
  });

  it("DIVIDE Errors Tests", function() {
    assert.throws(() => {
      calculateNumber('DIVIDE', "1", 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber('DIVIDE', 1, "3");
    }, TypeError);

    assert.throws(() => {
      calculateNumber(false, 1, 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber('DIVIDE', undefined, 3);
    }, TypeError);

    assert.throws(() => {
      calculateNumber('DIVIDE', 1, undefined);
    }, TypeError);

    assert.throws(() => {
      calculateNumber(undefined, 1, 3);
    }, TypeError);
  })
});

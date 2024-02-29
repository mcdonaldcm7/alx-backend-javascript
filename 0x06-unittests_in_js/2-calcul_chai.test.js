const chai = require('chai');
const calculateNumber = require('./2-calcul_chai.js');
const expect = chai.expect;

describe("calculateNumber", function () {
  it("SUM", function() {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });

  it("SUBTRACT", function() {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  
  it("DIVIDE", function() {
    expect(calculateNumber('DIVIDE', 1, 3)).to.equal(0.33333333333333333);
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 4.1, 1.92)).to.equal(2);
    expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
  });

  it("SUM Errors Tests", function() {
    expect(() => {
      calculateNumber('SUM', "1", 3);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber('SUM', 1, "3");
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber(false, 1, 3);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber('SUM', undefined, 3);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber('SUM', 1, undefined);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber(undefined, 1, 3);
    }).to.throw(TypeError);
  });

  it("SUBTRACT Errors Tests", function() {
    expect(() => {
      calculateNumber('SUBTRACT', "1", 3);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber('SUBTRACT', 1, "3");
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber(false, 1, 3);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber('SUBTRACT', undefined, 3);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber('SUBTRACT', 1, undefined);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber(undefined, 1, 3);
    }).to.throw(TypeError);
  });

  it("DIVIDE Errors Tests", function() {
    expect(() => {
      calculateNumber('DIVIDE', "1", 3);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber('DIVIDE', 1, "3");
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber(false, 1, 3);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber('DIVIDE', undefined, 3);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber('DIVIDE', 1, undefined);
    }).to.throw(TypeError);

    expect(() => {
      calculateNumber(undefined, 1, 3);
    }).to.throw(TypeError);
  })
});

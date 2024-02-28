const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber", function () {
  it("Checks the calculateNumber function", function() {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});

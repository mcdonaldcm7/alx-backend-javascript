const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleSpy.restore();
  });

  it('Verify the console logging and number of calls with 100, and 20', function () {
      sendPaymentRequestToApi(100, 20);

      expect(consoleSpy.calledOnce).to.be.true;
      expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('Verify the console logging and number of calls with 10, and 10', function() {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});

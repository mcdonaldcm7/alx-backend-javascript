const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  it('Stub the function Utils.calculateNumber', function() {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    const spy = sinon.spy(stub);
    const consoleSpy = sinon.spy(console, 'log');
    const total = Utils.calculateNumber('SUM', 100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(total).to.equal(10);
    expect(stub.calledOnce).to.be.true;
    
    sendPaymentRequestToApi(100, 20);
    
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.calledTwice).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
  });
});

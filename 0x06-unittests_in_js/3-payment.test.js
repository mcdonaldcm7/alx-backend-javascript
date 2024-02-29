const sinon = require('sinon');
const chai = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const expect = chai.expect;

describe('sendPaymentRequestToApi', function() {
  it('Validate the usage of te Utils function', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    Utils.calculateNumber('SUM', 100, 20);

    expect(spy.getCall(0).args[0]).to.equal('SUM');
    expect(spy.getCall(0).args[1]).to.equal(100);
    expect(spy.getCall(0).args[2]).to.equal(20);
    expect(spy.getCall(0).returnValue).to.equal(120);
    expect(spy.calledOnce).to.be.true;
    
    sendPaymentRequestToApi(100, 20);
    
    expect(spy.getCall(1).args[0]).to.equal('SUM');
    expect(spy.getCall(0).args[1]).to.equal(100);
    expect(spy.getCall(1).args[2]).to.equal(20);
    expect(spy.getCall(1).returnValue).to.equal(120);
    expect(spy.calledTwice).to.be.true;
  });
});

const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const expect = chai.expect;

describe('getPaymentTokenFromAPI', function() {
  it('Should resolve with a successful response when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ 'data': 'Successful response from the API'});
        done();
      });
  });

  it('Should resolve with undefined when success if false', function(done) {
    expect(getPaymentTokenFromAPI(false)).to.be.undefined;
    done();
  });
});

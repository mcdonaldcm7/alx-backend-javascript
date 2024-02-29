const request = require('request');
const chai = require('chai');

const expect = chai.expect;

describe('Index Page', function() {
  it('Use the request module to request the index page', function() {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});

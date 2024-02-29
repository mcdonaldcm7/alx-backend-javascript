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

  it('Test for page not found(404) Error', function() {
    request('http://localhost:7865/Hi', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
    });
  });
});

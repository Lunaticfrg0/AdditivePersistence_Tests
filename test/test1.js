const getAP = require('../src/AdditivePersistance.js')
const chai = require('chai');
const expect = chai.expect;

var assert = require('assert');
describe('Additive Persistance of 74621', function() {
    it('should return 2 ', function() {
      expect(getAP(74621)).to.be.equal(2)
    });
});
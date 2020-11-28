const getAP = require('../src/AdditivePersistance.js')
const chai = require('chai');
const expect = chai.expect;

var assert = require('assert');
describe('Additive Persistance of 2677889', function() {
    it('should return 3 ', function() {
      expect(getAP(2677889)).to.be.equal(3)
    });
});
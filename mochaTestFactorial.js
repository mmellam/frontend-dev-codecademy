var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if 5fac equals 120', ()=> {
      const expected = 120;
      const result = Calculate.factorial(5);
      assert.equal(result, expected)
    });
     it('test if 3fac equals 6', ()=> {
      const expected = 6;
      const result = Calculate.factorial(3);
      assert.equal(result, expected)
    });

     it('test if 0fac equals 1', ()=> {
      const expected = 1;
      const result = Calculate.factorial(0);
      assert.equal(result, expected)
    });
  });
});
const sum = require('./index2')
let m;
let k= Math.log(m)/Math.log(4)
describe("Finding of exponent value", () => {
    test('Math.log(m)/Math.log(4) should return k value', () => {
      expect(sum(m, 4)).toBe(k);
    });
   })

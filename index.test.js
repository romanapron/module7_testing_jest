const sumSquare = require('./index')
let x;
let y;
let n;
describe("find natural nambers of x and y in condition n=x^2+y^2", () => {
    test('n=x^2+y^2', () => {
        for (x = 1; x * x <= n; x++)
            for (y = 1; y * y <= n; y++)
                    expect(sumSquare(n)).toBeTruthy();
                    expect(sumSquare(n)).toBeFalsy();
    });
})
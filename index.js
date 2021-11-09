//243 (a)
function sumSquare(n) {
    for (x = 1; x * x <= n; x++)
        for (y = 1; y * y <= n; y++)
            if (x * x + y * y == n) {
                return true;
            }

    return false;
}

let n = 33;
if (sumSquare(n))
    console.log(x, y)
else
    console.log("there are no solution");

module.exports = sumSquare;
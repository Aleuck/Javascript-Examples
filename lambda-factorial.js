// Wrapping the whole function in parenthesis to make it a function expression, 
// because function statements can't be anonymous.
(function (x) {
    return (function (g) {
        return g(g)(x);
    }(function (f) { // this is the function that is being passed as a parameter to the previous.
        return function (y) {
            if (y <= 1) {
                return 1; // base case
            }
            return y * f(f)(y - 1) // recursion definition
        }
    }));
} (5));

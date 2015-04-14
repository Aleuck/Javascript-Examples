// This is an example that shows how Javascript functions can be used to perfectly translate any lambda term.
// Note that this function is extremely complex and hard to read. It is just a example for educational purposes.
// You should never do something like this when developing applications

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

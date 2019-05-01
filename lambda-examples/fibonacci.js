// This is an example that shows how Javascript functions can be used to perfectly translate any lambda term.
// Note that this function is extremely complex and hard to read. It is just a example for educational purposes.
// You should never do something like this when developing applications

// Wrapping the functions in parenthesis to make them function expressions, 
// function statements can't be anonymous.
(function (g) {
    return g(g); // fixed point function
})(function (f) {
    return function (x) {
        if (x <= 1) {
            return 1; // base case
        }
        return f(f)(x - 1) + f(f)(x - 2) // recursion definition
    }
})(5);

// Same thing with arrow notation
(g => g(g)) (f => x => x <= 1 ? 1 : f(f)(x - 1) + f(f)(x - 2)) (5);
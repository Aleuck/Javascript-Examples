var n = 5; // n!
var r = (function (x) { return (function (f,x) { return f(f,x); }(function (f,x) { if(x <= 1) { return 1; } else { return x*f(f,x-1)} },x)); })(n);
print(r);

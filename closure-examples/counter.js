var counter = (function () {
	var n = 0;
	return function () {
		return n++;
	};
}());

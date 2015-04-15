function createCounter(startNumber) {
	var n = startNumber || 0;
	return function () {
		return n++;
	}
}

function createCounter(startNumber) {
	return function () {
		return startNumber++;
	}
}

problems[2] = function() {
	var sum = 0;
	var previous = 1;
	var temp;
	for (var i = 2; i < 4000000; temp = i, i = i + previous, previous = temp) {
		if (i % 2 === 0) {
			sum += i;
		}
	}
	return sum;
};

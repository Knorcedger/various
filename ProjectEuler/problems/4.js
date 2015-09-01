problems[4] = function() {

	// check if the given number/string is palindromic
	function isPalindromic(x) {
		var result = true;
		var xString = x + '';
		for (var i = 0, length = parseInt(xString.length / 2, 10); i < length; i++) {
			counter++;
			if (xString.substr(i, 1) !== xString.substr(-(i + 1), 1)) {
				result = false;
				break;
			}
		}

		return result;
	}

	// find the number of different digits in the given number
	function digitsNumber(x) {
		var digits = [];
		var xString = x + '';
		var digit;
		for (var i = 0, length = xString.length; i < length; i++) {
			counter++;
			digit = xString.substr(i, 1);
			if (digits.indexOf(digit) === -1) {
				digits.push(digit);
			}
		}

		return digits.length;
	}

	var number;
	var matches = [];
	for (var i = 999 ; i > 100; i--) {
		counter++;
		for (var j = 999; j > 100; j--) {
			counter++;
			number = i * j;
			if (isPalindromic(number)) {
				if (matches.indexOf(number) === -1) {
					matches.push(number);
				}
			}
		}
	}

	// sort from bigger to smaller
	matches.sort(function(a, b) {
		counter++;
		if (a > b) {
			return -1;
		}
		if (a < b) {
			return 1;
		}
		// a must be equal to b
		return 0;
	});

	return matches[0];
};

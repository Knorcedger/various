problems[3] = function() {
	var number = 600851475143;

	// find all primals in an array

	function isPrime(number) {
		var result = true;
		if (number % 2 === 0) {
			result = false;
			counter++;
		} else {
			for (var i = 3; i < Math.sqrt(number); i += 2) {
				if ((number / i) % 1 === 0) {
					result = false;
					break;
				}
				counter++;
			}
		}
		return result;
	}

	function findPrimes(number) {
		var primes = [];
		if (number % 2 === 0) {
			primes.push(2);
			primes = primes.concat(findPrimes(number / 2));
			counter++;
		} else if (number % 3 === 0) {
			primes.push(3);
			primes = primes.concat(findPrimes(number / 3));
			counter++;
		} else {
			var found = false;
			for (var i = 3; i <= Math.sqrt(number); i += 2) {
				if ((number / i) % 1 === 0) {
					primes.push(i);
					primes = primes.concat(findPrimes(number / i));
					found = true;
					break;
				}
				counter++;
			}
			if (!found) {
				primes.push(number);
				counter++;
			}
		}
		return primes;
	}

	return findPrimes(number);

};

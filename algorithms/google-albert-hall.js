/**
 * http://stackoverflow.com/questions/15126325/algorithm-interview-from-google
 * there could be a solutions where the initial aray holds only the dates that the hall is available
 */

// contains only the future dates that the hall is reserved
var availableDates = [{
	date: new Date(2015, 10, 1),
	reserved: true
}, {
	date: new Date(2015, 10, 6),
	reserved: true
}, {
	date: new Date(2015, 10, 11),
	reserved: false
}, {
	date: new Date(2015, 10, 16),
	reserved: true
}, {
	date: new Date(2015, 10, 21),
	reserved: false
}];

function isSlot() {
	return false;
}

function checkAvailability(date) {
	if (!isSlot()) {
		for (var i = 0, length = availableDates.length; i < length; i++) {
			if (availableDates[i].date > date && !availableDates[i].reserved) {
				return availableDates[i].date;
			}
		}
	}
}

checkAvailability(new Date(2015, 10, 3));

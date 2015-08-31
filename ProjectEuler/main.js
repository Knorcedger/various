var problems = {};
var counter;
function call(problemId) {
	counter = 0;
	console.log(problems[problemId]());
	console.log('Counter: ' + counter);
}

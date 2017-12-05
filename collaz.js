function odd(n) {
	return Math.round(3 * n + 1);
}

function even(n) {
	return Math.round(n / 2);
}

function collatz(n, sequence) {
	if (!sequence) {
		sequence = [];
	}
	if (n === 1) {
		return sequence;
	}
	if (n % 2 === 0) {
		sequence.push(1);
		return collatz(even(n), sequence);
	}
	sequence.push(0);
	return collatz(odd(n), sequence);
}

function doCollatz() {
	var n = document.getElementById('number').value;
	var sequence = collatz(n);
	var output = "";
	for (let i = 0; i < sequence.length; i++) {
		if (sequence[i] === 1) {
			output += "even, "
		} else {
			output += "odd, "
		}
	}
	output = output.substr(0, output.length - 2);
	document.getElementById('output').innerHTML = output;
}

function onload() {
	document.getElementById("submit").addEventListener('click', doCollatz);
}

window.addEventListener('DOMContentLoaded', onload);

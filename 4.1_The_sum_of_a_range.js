function range(start, end, step) {
	if (typeof step == "undefined") {
		if (start <= end)
			step = 1;
		else
			step = -1;
	}

	var array = [];
	if (step > 0) {
		for (var n = start; n <= end; n += step)
			array.push(n);
	} else {
		for (var n = start; n >= end; n += step)
			array.push(n);
	}

	return array;
}

function sum(array) {
	var tot = 0;
	for (var i = 0; i < array.length; i++) {
		tot += array[i];
	}
	return tot;
}

console.log(range(13, 18));
console.log(range(4, -4));
console.log(range(3, 30, 3));
console.log(range(10, 2, -2));
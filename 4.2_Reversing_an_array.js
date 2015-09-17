function reverseArray(array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray[i] = array[array.length - 1 - i];
	}
	return newArray;
}

function reverseArrayInPlace(array) {
	var swap, tailPos;

	for (var i = 0; i < Math.floor(array.length/2); i++) {
		tailPos = array.length - 1 - i;

		swap = array[i];
		array[i] = array[tailPos];
		array[tailPos] = swap;
	}
	return array;
}

var a = [1, 2, 3, 4, 5];
var aRev = reverseArray(a);

console.log(a);
console.log(aRev);

reverseArrayInPlace(a);
console.log(a);
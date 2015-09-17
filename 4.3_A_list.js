function arrayToList(array) {
	var list = null;
	for (var i = array.length - 1; i >= 0; i--) {
		list = { value: array[i], rest: list };
	}
	return list;
}

function listToArray(list) {
	var array = [];
  	for (var node = list; node; node = node.rest)
    	array.push(node.value);
  	return array;
}

// http://eloquentjavascript.net/code/#4.3
function prepend(value, list) {
  return { value: value, rest: list };
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
//

var a = [1, 2, 3];

var l = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
};

console.log(typeof l);

console.log(arrayToList(a));
console.log(listToArray(l));
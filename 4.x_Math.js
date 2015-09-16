console.log(Math.random()); // pseudorandom number between zero (inclusive) and one (exclusive)

var size = 10000;
var diceFace = 6;
var count = [];
var res = "";

for (var i = 0; i < diceFace; i++) {
	count.push(0);
}

for (var i = 0; i < size; i ++) {
	var randomNumber = Math.floor(Math.random() * diceFace);
	count[randomNumber] += 1;
	randomNumber += " ";
	if (i%50 == 0) res += "\n";
	else res += randomNumber;
}

for (var i = 0; i < diceFace; i++) {
	count[i] = ((count[i]/size) * 100).toFixed(2);
}

console.log(res);
console.log(count);
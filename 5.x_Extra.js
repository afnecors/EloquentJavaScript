function forEach(array, action) {
	for (var i = 0; i < array.length; i++) {
		action(array[i]);
	}
}

var a = ["red", "green", "blue"];
forEach(a, console.log);

var numbers = [1, 2, 3], sum = 0;

function sumN(n) {
	sum += n;
}

forEach(numbers, sumN);
console.log(sum);

var people = [
	{
		name: "Paolo",
		surname: "Rossi"
	},
	{
		name: "Maria",
		surname: "Bianchi"
	}
];


var string = JSON.stringify(people);
var json = JSON.parse(string); 

console.log(string);
console.log(json[0].name + " " + json[0].surname);
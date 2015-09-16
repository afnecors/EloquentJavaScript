// Objects
var ob = {
	name: "Paolo",
	surname: "Rossi"
};

var ob2 = ob;

ob.age = 24;
ob["height"] = 191;

console.log(ob["name"]);
console.log(ob.surname);

console.log(ob);
console.log(ob2);

delete ob.height;
console.log(ob);

console.log("name" in ob);
console.log("height" in ob);

// Arrays
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index+1));
}

console.log(remove(a, 8));

a.pop(); // remove from the tail
a.push(100); // add to the tail
a.shift(); // remove from head
a.unshift(100); // add to the head

// Strings
var s = "Led Zeppelin";

console.log(s.indexOf("e")); // 1
console.log(s.lastIndexOf("e")); // 8
console.log(s.charAt(4)); // Z
console.log(s.slice(4)); // Zeppelin

// Functions
function argumentCounter() {
	var res = "You gave me " + arguments.length + " arguments:";
	for (var i = 0; i < arguments.length; i++) {
		res += "\n* " + arguments[i];
	}
	return res;
}

console.log(argumentCounter(3, "apples"));
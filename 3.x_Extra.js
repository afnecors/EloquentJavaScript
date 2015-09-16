function moltiplica(fattore) {
	return function(n) {
		return n * fattore;
	};
}

var raddoppia = moltiplica(2);
var triplica = moltiplica(3);

console.log(raddoppia(5)); // 10
console.log(triplica(5)); // 15

/*   ----------------------------------------------------------------------   */
function power(base, exp) {
	if (exp == undefined)
		exp = 2;
	if (exp == 0)
    	return 1;
  	else
    	return base * power(base, exp - 1);
}

console.log(power(4)); // 16
console.log(power(2, 3)); // 8
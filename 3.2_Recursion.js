function isEven(n) {
	if (n < 0)
		n *= -1;
	
	if (n == 0)
		return true;
	if (n == 1)
		return false;
	else
		return isEven(n-2);
}

console.log(isEven(11)); // false
console.log(isEven(4)); // true
console.log(isEven(-3)); // false
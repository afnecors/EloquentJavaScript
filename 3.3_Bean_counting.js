function countChar(word, character) {
	var count = 0;
	for (var pos=0; pos<word.length; pos++) {
		if (word.charAt(pos) == character)
			count += 1;
	}
	return count;
}

function countBs(word) {
	return countChar(word, "B");
}

console.log(countBs("The Big Bang Theory")); // 2
console.log(countChar("Confucio", "o")); // 2
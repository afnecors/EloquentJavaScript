var line = "";
var size = 8;

for (var r = 0; r < size; r ++) {
	for (var c = 0; c < size; c++) {
		if (r%2 == 0) {
			if (c%2 == 0) line += " ";
			else line += "#";
		} else {
			if (c%2 == 0) line += "#";
			else line += " ";
		}
	}
	console.log(line);
	line = "";
}
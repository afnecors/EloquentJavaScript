function Vector(x, y) {
	this.x = x;
	this.y = y;
};

Vector.prototype.plus = function(vector) {
	this.x += vector.x;
	this.y += vector.y;

	return this; 
};

Vector.prototype.minus = function(vector) {
	this.x -= vector.x;
	this.y -= vector.y;

	return this;
};

Object.defineProperty(Vector.prototype, "length", {
	get: function() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
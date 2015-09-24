var ancestry = JSON.parse(require('./ancestry.js'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function hasMotherData(person) {
	return byName[person.mother] != null;
}

function difference(person) {
	return person.born - byName[person.mother].born;
}

var peopleWithMotherData = ancestry.filter(hasMotherData);
var ageDifference = peopleWithMotherData.map(difference);

console.log(average(ageDifference));
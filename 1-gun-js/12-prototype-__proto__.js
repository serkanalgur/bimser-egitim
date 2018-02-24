/* Prototype ve __proto__ değerlere erişebilir 
Ancak __proto__ yavaş ve tarayıcılarla problemleri var
KULLANILMAMASI GEREK */

var shape = function () { };
var p = {
	a: function () {
		console.log('aaa');
	}
};
shape.prototype.__proto__ = p;

var circle = new shape();
circle.a(); // aaa
console.log(shape.prototype === circle.__proto__); // true
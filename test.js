#!/usr/bin/env node

var name = "Tom";
var born = 1988;
var year = 2018;
var age = year - born;

console.log("MY name is " + name);
console.log("I am " + age + " years old");

if ( age > 40 ) {
	console.log("Damn... you are OLD!!!");
} else  {
	console.log("Dang... I was hoping to be younger than you.");
	if ( age == 40 ) {
	console.log("Soon I will be old as well.");
} else {
	console.log("You hate me because I'm not old!");
}
}
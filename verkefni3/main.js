"use strict";

function Pizza(prize, size, topping) {
	this.prize = prize;
	this.size = size;
	this.topping = topping;
}

var margarita = new Pizza(2000, 'L', ["sósu", "ost", "oregano"]);
var meat_cheese = new Pizza(3980, 'L', ["Pepperoni", "Piparost", "Rjómaost", "Beikonkurl", "svartur pipar"]);
var hawaiian = new Pizza(3980, 'L', ["Skinka", "Ananas"]);
var dominos_basic = new Pizza(2500, 'L', ["Skinka", "Sveppir"]);

var matsedill = [margarita, meat_cheese, hawaiian, dominos_basic];
for (var i = matsedill.length - 1; i >= 0; i--) {
	var newdiv = document.createElement("div");
	var h1 = document.createElement("h1");
	h1.innerHTML = matsedill[i].prize;
	newdiv.appendChild(h1)
	var main = document.getElementById("thingy");
	main.appendChild(newdiv)
}
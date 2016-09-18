"use strict";

function Pizza(name, prize, size, topping) {
	this.name = name;
	this.prize = prize;
	this.size = size;
	this.topping = topping;
}

var margarita =  new Pizza("Margarita", 2000, 'L', ["sósu", "ost", "oregano"]);
var meat_cheese = new Pizza("Meat and cheese", 3980, 'L', ["Pepperoni", "Piparost", "Rjómaost", "Beikonkurl", "svartur pipar"]);
var hawaiian = new Pizza("Hawaiian", 3980, 'L', ["Skinka", "Ananas"]);
var dominos_basic = new Pizza("Dominos basic", 2500, 'L', ["Skinka", "Sveppir"]);

var matsedill = [margarita, meat_cheese, hawaiian, dominos_basic];
for (var i = matsedill.length - 1; i >= 0; i--) {
	var newdiv = document.createElement("div");
	var h1 = document.createElement("h1");
	var h3 = document.createElement("h3");
	var h4 = document.createElement("h4");
	h1.innerHTML = matsedill[i].name;
	h3.innerHTML = "Áleggstegundir : " + matsedill[i].topping;
	h4.innerHTML = "Verð : " + matsedill[i].prize;
	newdiv.appendChild(h1);
	newdiv.appendChild(h3);
	newdiv.appendChild(h4);
	var main = document.getElementById("thingy");
	main.appendChild(newdiv);
}
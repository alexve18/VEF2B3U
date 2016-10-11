(function() {
"use strict";

// Function for new questions
function Quizer(question, choices, correctAnswer){
	this.question = question;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
}
// Creating questions
var Quizzes = [];
Quizzes.push(new Quizer("Who is Prime Minister of the United Kingdom?", [ "David Cameron", "Gordon Brown", "Winston Churchill","Tony Blair"], 0));
Quizzes.push(new Quizer("Who is the founder of Apple?", ["Stevo", "Steve Jobs", "Thomas Edison", "Magnus Carlsen"], 1));
Quizzes.push(new Quizer("Toy Story 1 was released before 2000", ["True", "False"], 0));
Quizzes.push(new Quizer("Hvaða landshluta á Íslandi er talið að Bergrisi verndi", ["Norðurland", "Vesturland", "Suðurland", "Austurlands"], 2));

// betra að nota shuffle
function Randommise() {
	return Math.floor(Math.random() * Quizzes.length);
}

function shuffle(array) {
    var j, x, i;
    for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
}


function LoadQuestion(number) {
	var Quizmaster = document.getElementById('question');
	Quizmaster.textContent = Quizzes[number].question;
	// Create a new element and store it in a variable.
	for (var i = 0; i < Quizzes[number].choices.length; i++) {
		var newEl = document.createElement('div');
		newEl.className = "choice col-sm-5 col-md-offset-1";
		newEl.id = "choice" + i;
		// Create a text node and store it in a variable.
		var newText = document.createTextNode(Quizzes[number].choices[i]);
		// Attach the new text node to the new element.
		newEl.appendChild(newText);
		// Find the position where the new element should be added.
		var position = document.getElementById('choices');

		// Insert the new element into its position.
		position.appendChild(newEl);
	}
}

function init() {
	shuffle(Quizzes);
	LoadQuestion(0);
}

init();
})();
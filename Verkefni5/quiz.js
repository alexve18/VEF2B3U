(function() {
"use strict";

//Variables
var Counter = 0;
var PlayerScore = 0;
var guessed = false;


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
shuffle(Quizzes);

// betra að nota shuffle
function Randommise() {
	return Math.floor(Math.random() * Quizzes.length);
}

// Shuffle sem commentið fyrir ofan var að tala um
function shuffle(array) {
    var j, x, i;
    for (i = array.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
}

// Skrifar út spurningarnar
function LoadQuestion(number) {
	var Quizmaster = document.getElementById('question');
	Quizmaster.textContent = Quizzes[number].question;
	// Create a new element and store it in a variable.
	for (var i = 0; i < Quizzes[number].choices.length; i++) {
		var newEl = document.createElement('div');
		newEl.className = "choice col-sm-5 col-md-offset-1 col-xs-12";
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

function LoadNumberOfQuestions(number) {
	var numbofQuiz = document.getElementById('numbQuiz');
	numbofQuiz.textContent = "Fjöldi spurninga:" + (number + 1) + "/" + Quizzes.length;
}

function LoadScoreBoard(number) {
	var PrintScore = document.getElementById('Score');
	PrintScore.textContent = "Stig:" + PlayerScore;
}

function CheckAnswer(e) {
	var target, correct;
	target = e.target;
	if (target.id != "choices" && target.id != "NewGame") {
		if (target.textContent === Quizzes[Counter].choices[Quizzes[Counter].correctAnswer]) {
		target.className += " correct";
		if(guessed == false) {
			guessed = true;
			PlayerScore += 1;
			LoadScoreBoard(Counter);
			setTimeout(NextQuestion, 500);
		}
		else {
			setTimeout(NextQuestion, 500);
		}
		}
		else
		{
			target.className += " incorrect";
			if (guessed == false) {
				guessed = true;
			}
		}
	}
	
}

function NextQuestion(e) {
	if (guessed == true) {
		if((Counter + 1) == Quizzes.length) {
			for (var i = 0; i < Quizzes[Counter].choices.length; i++) {
			var thischoice = document.getElementById("choice" + i);
			var thischoiceparent = thischoice.parentNode;
			thischoiceparent.removeChild(thischoice);
			}
			var Headline = document.getElementById('question');
			if(PlayerScore == (Counter + 1)){
				Headline.textContent = "Vel gert! svaraðir öllu réttu!";
			}
			else if(PlayerScore	== 0)
			{
				Headline.textContent = "Held þú getur betur enn þetta..";
			}
			else
			{
				Headline.textContent = "Kemur betur næst.";
			}
			var NewBeginning = document.createElement('div');
			NewBeginning.className = "choice col-xs-12";
			NewBeginning.id = "NewGame";
			var NewGame = document.createTextNode("Do you want to Start Over?");
			NewBeginning.appendChild(NewGame);
			var position = document.getElementById('choices');
			position.appendChild(NewBeginning);
			var start = document.getElementById('NewGame');
			start.addEventListener('click', StartOver, false);
		}
		else {
			for (var i = 0; i < Quizzes[Counter].choices.length; i++) {
			var thischoice = document.getElementById("choice" + i);
			var thischoiceparent = thischoice.parentNode;
			thischoiceparent.removeChild(thischoice);
			}
			Counter += 1;
			init()
		}

	}
	else
	{
		window.alert("Vinsamlegast svaraðu spurningunni");
	}
}

function StartOver() {
	var startover = document.getElementById("NewGame");
	var thischoiceparent = startover.parentNode;
	thischoiceparent.removeChild(startover);
	PlayerScore = 0;
	Counter = 0;
	shuffle(Quizzes);
	init()
}

function init() {
	LoadQuestion(Counter);
	LoadNumberOfQuestions(Counter);
	LoadScoreBoard(Counter);
	guessed = false;
	var el = document.getElementById('choices');
	el.addEventListener('click', CheckAnswer, false);
}

init();
})();
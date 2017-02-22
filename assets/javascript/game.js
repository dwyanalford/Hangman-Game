// press any key to start the game
// keep track of user game wins
// decriment user guesses, give them a total amount of guesses
//otherwise they lose the game. guesses total should remain the
// if they guess same later as before
// current word with letter appearing when user presses they key
// display the letters the users already guessed
// if user guesses correctly then the image pops up

var legends = ["tupac", "common", "biggie", "rakim", "lyte", "Snoop", "qtip", "eminem"];
var guesses = 9;
// create an array for potential user guesses
var alphabit = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x","y", "z"];
// generate a random number to pick a word from the array legends above
var randomWord = legends[Math.floor(Math.random() * legends.length)];
// global variables
var a;
var count = 0;
// empty array to store user guesses
var answerArray = [];

function begin(){
	for (var i = 0; i < randomWord.length; i++) {
		answerArray[i] = "_";
	}
	a = answerArray.join(" ");
	document.getElementById('currentWord').innerHTML = a;
}
// to get letter user pressed
function letterPressed(){
	var letterPressed = document.getElementById('guessLetter-1').value;
}
document.onkeyup = function (event){
	// var keyPress = string.fromCharCode(event.key);
	var keyPressed = event.key;
	document.getElementById('guessLetter-1').innerHTML = keyPressed;

}

//if user guesses a letter the the guesses remaining should decrement
function GuessRemaining(){
	 if (keyPressed) {
            guesses--;
          }
     else {

     }
}




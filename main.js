var getNewWord = require("./word.js");
var displayOption = require("./letter.js")

//Get a random word

var word = new getNewWord();
word.getWordToGuess();


var guessWordArr = word.randomWordArr;
var placeLettersArr = word.placeHolderArr;

// var letterCheck = new displayOption("a", guessWordArr, placeLettersArr);
// letterCheck.checkLetter();
// var letterCheck = new displayOption("u", guessWordArr, placeLettersArr);
// letterCheck.checkLetter();



var numAttempts = 10;
console.log("....................................................................................");
console.log("............Lets Play :: You have 10 Attemps to guess the correct word..............");
console.log("....................................................................................");
console.log(word.placeHolderArr);

var prompt = require("prompt");
prompt.start();

var letsPlay = {
	continue : true, 
	keepPromptingUser: function(){
		var self = this; 		
		if(numAttempts > 0 && self.continue == true) {
			prompt.get(['guessLetter'], function(err, result) {
				var guessLetter = result.guessLetter;
				var display = new displayOption(guessLetter,guessWordArr,placeLettersArr);
				var gameStatus = display.checkLetter();
				self.continue = gameStatus;
				numAttempts--;
				console.log("Number of Attemps left :::" + numAttempts);
				self.keepPromptingUser();
			});
		}else {
				if(self.continue){
					if(numAttempts == 0){
						console.log("You ran out of number of guesses, YOU LOOSE!!");
					}
				}
				console.log("Lets Play Again");
		}
	}
}
letsPlay.keepPromptingUser();





// prompt.start();


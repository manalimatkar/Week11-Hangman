var getNewWord = require("./word.js");
var displayOption = require("./letter.js")

//Get a random word

var word = new getNewWord();
word.getWordToGuess();

//Store random word's letter array and equivalent placeholder array
var guessWordArr = word.randomWordArr;
var placeLettersArr = word.placeHolderArr;

// var letterCheck = new displayOption("a", guessWordArr, placeLettersArr);
// letterCheck.checkLetter();
// var letterCheck = new displayOption("u", guessWordArr, placeLettersArr);
// letterCheck.checkLetter();


//set maximum number of attemps to 10
var numAttempts = 10;

//Start propmts
console.log("....................................................................................");
console.log("............Lets Play :: You have 10 Attemps to guess the correct word..............");
console.log("....................................................................................");
console.log(word.placeHolderArr);

var prompt = require("prompt");

//start Game
prompt.start();

var letsPlay = {
	continue : true, 
	keepPromptingUser: function(){
		var self = this; 	
		//If number of attems is greater then 0 and continue is true keep prompting user	
		if(numAttempts > 0 && self.continue == true) {
			prompt.get(['guessLetter'], function(err, result) {
				var guessLetter = result.guessLetter;
				//Create display options object and call checkLetter method to check if letter exist in the word 
				var display = new displayOption(guessLetter,guessWordArr,placeLettersArr);
				var gameStatus = display.checkLetter();
				//check gameStatus to see if there are more letters to be guessed
				self.continue = gameStatus;
				//reduce the attempt num by one
				numAttempts--;
				console.log("Number of Attemps left :::" + numAttempts);
				self.keepPromptingUser();
			});
		}else {
				//If there are letters to be guessed but number of attempts left is zero its game over
				if(self.continue){
					if(numAttempts == 0){
						console.log("You ran out of number of guesses, YOU LOOSE!!");
					}
				}
				console.log("Lets Play Again");
		}
	}
}

//Keep prompting user
letsPlay.keepPromptingUser();





// prompt.start();

